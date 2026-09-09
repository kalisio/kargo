#!/usr/bin/env bash
#
# lib-unarchive.sh
#
# Shared logic for the unarchive scripts. Sourced by the others, not run
# directly. Holds the configuration, the argument parsing and the helpers.
#
# The two zones live on different endpoints, so the tools are split by role:
#   - AWS CLI : everything that touches the COLD zone only (list, restore,
#               restoration state). A single AWS endpoint is enough here.
#   - rclone  : the copy between the two zones, and anything that touches the
#               HOT zone, because rclone already knows both remotes and their
#               own endpoints (same approach as the archiver).
#


## Cold zone, used by the AWS CLI :
##   AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY
##   AWS_REGION         cold region, eg eu-west-par
##   AWS_ENDPOINT_URL   cold endpoint, eg https://s3.eu-west-par.io.cloud.ovh.net
##   COLD_BUCKET        cold bucket name for the AWS CLI, eg wft-staging-cold
##
## rclone remotes, used for the copy and the hot zone:
##   COLD_REMOTE        rclone remote of the cold zone (default wft-staging-cold)
##   HOT_REMOTE         rclone remote of the hot zone  (default wft-staging)
##   RCLONE_CONF        path to the rclone config holding these remotes
##   HOT_STORAGE_CLASS  storage class applied on the hot copy (default EXPRESS_ONEZONE)
##
## Misc:
##   AVAILABILITY_DAYS       availability duration requested, billed upfront (default 7)
##   POLL_SECONDS       delay between two checks in mode all (default 300)

COLD_BUCKET="${COLD_BUCKET:?COLD_BUCKET must be set}"
COLD_REMOTE="${COLD_REMOTE:-wft-staging-cold}"
HOT_REMOTE="${HOT_REMOTE:-wft-staging}"
RCLONE_CONF="${RCLONE_CONF:?RCLONE_CONF must be set}"
HOT_STORAGE_CLASS="${HOT_STORAGE_CLASS:-EXPRESS_ONEZONE}"
AVAILABILITY_DAYS="${AVAILABILITY_DAYS:-7}"
POLL_SECONDS="${POLL_SECONDS:-300}"
CACHE_DIR="${CACHE_DIR:-/dev/shm/unarchive-cache}"

## Fail fast (exit 2, the same non-retriable code the 'unknown mode/verb' usage errors below use)
## when a required tool or config file is missing, rather than letting every aws/rclone call site
## silently fold that into their normal "not there yet" fallback (see eg. is_restored()) - both
## look identical from the caller's point of view otherwise, and callers polling status scripts
## with no overall deadline would just poll forever if a broken prerequisite went undetected.
require_tool() {
    command -v "$1" >/dev/null 2>&1 || {
        echo "unarchive: required tool '$1' not found on PATH" >&2
        exit 2
    }
}
require_tool aws
require_tool rclone
[ -f "$RCLONE_CONF" ] || {
    echo "unarchive: RCLONE_CONF '$RCLONE_CONF' not found" >&2
    exit 2
}

## Parse the five business arguments shared by all scripts.
parse_args() {
    if [ "$#" -ne 5 ]; then
        echo "Usage: $0 <start_date> <end_date> <input_path> <input_pattern> <output_path>" >&2
        echo "  input_pattern: regex on the file name, use \"\" to match all files" >&2
        exit 1
    fi
    START_DATE="$1"
    END_DATE="$2"
    INPUT_PATH="${3%/}"
    INPUT_PATTERN="$4"
    OUTPUT_PATH="${5%/}"
}

log() { echo "[$(date -u +%Y-%m-%dT%H:%M:%SZ)] $*"; }

## 
## COLD ZONE helpers (AWS CLI)
## 
#
compute_objects() {
    local currrent end
    currrent="$(date -u -d "$START_DATE" +%Y-%m-%d)"
    end="$(date -u -d "$END_DATE" +%Y-%m-%d)"

    if [ "$(date -u -d "$currrent" +%s)" -gt "$(date -u -d "$end" +%s)" ]; then
        echo "START_DATE is after END_DATE" >&2
        return 1
    fi
 
    while :; do
        local day_path prefix
        day_path="$(date -u -d "$currrent" +%Y/%m/%d)"
        prefix="$INPUT_PATH/$day_path/"
 
        # grep -v '^None$' is required in case of no matching objects
        aws s3api list-objects-v2 \
            --bucket "$COLD_BUCKET" \
            --prefix "$prefix" \
            --query 'Contents[].Key' \
            --output text 2>/dev/null \
        | tr '\t' '\n' \
        | grep -v '^None$' \
        | if [ -n "$INPUT_PATTERN" ]; then
            awk -v pat="$INPUT_PATTERN" '{ n=$0; sub(/.*\//,"",n); if (n ~ pat) print }'
          else
            grep -v '^$' || true
          fi
 
        [ "$currrent" = "$end" ] && break
        currrent="$(date -u -d "$currrent + 1 day" +%Y-%m-%d)"
    done
}

list_objects() {
    local cache_key cache_file
    # OUTPUT_PATH alone is not a unique cache key: two distinct jobs can share
    # the same output path while selecting different objects (different INPUT_PATTERN)
    cache_key="$(printf '%s' "$INPUT_PATH::$INPUT_PATTERN::$START_DATE::$END_DATE" | md5sum | cut -d' ' -f1)"
    cache_file="$CACHE_DIR/$OUTPUT_PATH/$cache_key/objects-list"
    #log "CHECKING for cache file $cache_file"
        
    # Cache hit: serve it directly, no network call.
    if [ -f "$cache_file" ]; then
        #log "  cache hit"
        cat "$cache_file"
        return 0
    fi
 
    # Cache miss: compute to a temp file first.
    #log "  cache miss"
    mkdir -p "$(dirname "$cache_file")"
    local tmp="$cache_file.tmp.$$"
 
    if compute_objects > "$tmp"; then
        #log " cache written"
        # Success: commit the cache atomically, then serve it.
        mv "$tmp" "$cache_file"
        cat "$cache_file"
    else
        cat "$tmp"
        rm -f "$tmp"
        return 1
    fi
}

## Count the objects selected in the cold zone (expected total).
count_expected() {
    list_objects | grep -c . || true
}

## Return 0 if the object restoration is done (downloadable), 1 if still ongoing.
is_restored() {
    local key="$1" restore
    restore="$(aws s3api head-object \
        --bucket "$COLD_BUCKET" --key "$key" \
        --query 'Restore' --output text 2>/dev/null || echo "None")"
    case "$restore" in
        *'ongoing-request="true"'*) return 1 ;;
        *) return 0 ;;
    esac
}

## Return 0 if a restoration was already requested (Restore field present).
was_requested() {
    local key="$1" restore
    restore="$(aws s3api head-object \
        --bucket "$COLD_BUCKET" --key "$key" \
        --query 'Restore' --output text 2>/dev/null || echo "None")"
    [ "$restore" != "None" ]
}

## ---------------------------------------------------------------------------
## HOT ZONE helpers (rclone)
## ---------------------------------------------------------------------------

## Compute the destination path (without remote) for a given source key.
## The structure below INPUT_PATH is preserved as-is under OUTPUT_PATH.
dest_path() {
    local key="$1" rel
    rel="${key#"$INPUT_PATH"/}"
    echo "$OUTPUT_PATH/$rel"
}

## Return 0 if the destination object already exists in the hot zone.
is_in_hot() {
    local dest="$1"
    [ -n "$(rclone --config "$RCLONE_CONF" lsf "$HOT_REMOTE:$dest" 2>/dev/null)" ]
}

## Count objects already present in the hot zone under the output path,
## matching the same file name pattern. Cheap progress signal for the move.
## Single-pass awk filter, same reason as list_objects.
count_in_hot() {
    if [ -n "$INPUT_PATTERN" ]; then
        rclone --config "$RCLONE_CONF" lsf --files-only -R "$HOT_REMOTE:$OUTPUT_PATH/" 2>/dev/null \
        | awk -v pat="$INPUT_PATTERN" '{ n=$0; sub(/.*\//,"",n); if (n ~ pat) print }' \
        | grep -c . || true
    else
        rclone --config "$RCLONE_CONF" lsf --files-only -R "$HOT_REMOTE:$OUTPUT_PATH/" 2>/dev/null \
        | grep -c . || true
    fi
}

## Copy one restored object from the cold zone to the hot zone using rclone,
## which handles the two different endpoints on its own. The hot storage class
## (EXPRESS_ONEZONE by default) is applied directly during the copy.
copy_to_hot() {
    local key="$1" dest="$2"
    rclone --config "$RCLONE_CONF" copyto \
        --s3-storage-class "$HOT_STORAGE_CLASS" \
        "$COLD_REMOTE:$key" "$HOT_REMOTE:$dest" 2>/dev/null
}
