#!/usr/bin/env bash
#
# lib-unarchive.sh - shared logic, sourced by unarchive.sh and unarchive-status.sh.
#
# Each run observes the real state with listings only (one per day in the cold
# zone with RestoreStatus, one for the hot zone), classifies every selected object
# as hot | restored | ongoing | archived (never requested or expired), then only
# acts on what is left. No state is kept, so any mode can be replayed at any time.
#
# Exit codes: 0 done, 1 not done yet, 2 usage/config error (do not retry),
#             3 transient error (retry later)
#

## Cold zone (AWS CLI): AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION,
##                      AWS_ENDPOINT_URL, COLD_BUCKET
## rclone:              RCLONE_CONF, COLD_REMOTE, HOT_REMOTE, HOT_STORAGE_CLASS
## Tuning:              AVAILABILITY_DAYS (billed upfront), TRANSFERS, CHECKERS,
##                      STATUS_MAX_DURATION, HEAL, POLL_SECONDS, DRY_RUN
COLD_REMOTE="${COLD_REMOTE:-wft-staging-cold}"
HOT_REMOTE="${HOT_REMOTE:-wft-staging}"
HOT_STORAGE_CLASS="${HOT_STORAGE_CLASS:-EXPRESS_ONEZONE}"
AVAILABILITY_DAYS="${AVAILABILITY_DAYS:-7}"
TRANSFERS="${TRANSFERS:-8}"
CHECKERS="${CHECKERS:-16}"
STATUS_MAX_DURATION="${STATUS_MAX_DURATION:-10m}"
HEAL="${HEAL:-true}"
POLL_SECONDS="${POLL_SECONDS:-300}"
DRY_RUN="${DRY_RUN:-false}"

log() { echo "[$(date -u +%Y-%m-%dT%H:%M:%SZ)] $*"; }
warn() { echo "[$(date -u +%Y-%m-%dT%H:%M:%SZ)] WARNING: $*" >&2; }
## die <exit code> <message>
die() {
    local code="$1"; shift
    echo "[$(date -u +%Y-%m-%dT%H:%M:%SZ)] ERROR: $*" >&2
    exit "$code"
}

## A broken setup must exit 2, otherwise callers would poll it forever.
check_setup() {
    local tool
    for tool in aws rclone awk date mktemp; do
        command -v "$tool" >/dev/null 2>&1 || die 2 "required tool '$tool' not found on PATH"
    done
    [ -n "${COLD_BUCKET:-}" ] || die 2 "COLD_BUCKET must be set"
    [ -n "${RCLONE_CONF:-}" ] || die 2 "RCLONE_CONF must be set"
    [ -f "$RCLONE_CONF" ] || die 2 "RCLONE_CONF '$RCLONE_CONF' not found"
    case "$AVAILABILITY_DAYS$TRANSFERS$CHECKERS" in
        *[!0-9]*) die 2 "AVAILABILITY_DAYS, TRANSFERS and CHECKERS must be integers" ;;
    esac
}

## Bounded network calls: a dead connection must fail, not hang for hours.
aws_cold() { aws --cli-connect-timeout 10 --cli-read-timeout 120 "$@"; }
rc() { rclone --config "$RCLONE_CONF" --contimeout 30s --timeout 5m "$@"; }

parse_args() {
    if [ "$#" -ne 5 ]; then
        echo "Usage: $0 <mode> <start_date> <end_date> <input_path> <input_pattern> <output_path>" >&2
        echo "  dates: anything GNU date understands, eg 2026-08-03 or 2026-08-03T12:00:00Z" >&2
        echo "  input_pattern: extended regex on the full object key, use \"\" to match all" >&2
        exit 2
    fi
    START_DATE="$1"
    END_DATE="$2"
    INPUT_PATH="${3%/}"
    INPUT_PATTERN="$4"
    OUTPUT_PATH="${5%/}"

    START_DAY="$(date -u -d "$START_DATE" +%Y-%m-%d 2>/dev/null)" || die 2 "invalid start date '$START_DATE'"
    END_DAY="$(date -u -d "$END_DATE" +%Y-%m-%d 2>/dev/null)" || die 2 "invalid end date '$END_DATE'"
    [ "$(date -u -d "$START_DAY" +%s)" -le "$(date -u -d "$END_DAY" +%s)" ] \
        || die 2 "start date $START_DATE is after end date $END_DATE"
    [ -n "$INPUT_PATH" ] || die 2 "input path must not be empty"
    [ -n "$OUTPUT_PATH" ] || die 2 "output path must not be empty"
    check_pattern
}

## mawk 1.3.4 20200120 (Debian bookworm) treats {n} as literal braces and would
## silently match nothing, so such patterns are rejected on that awk.
check_pattern() {
    PAT="$INPUT_PATTERN" awk 'BEGIN { if ("" ~ ENVIRON["PAT"]) {} }' 2>/dev/null \
        || die 2 "invalid input pattern '$INPUT_PATTERN'"
    case "$INPUT_PATTERN" in
        *\{[0-9]*)
            echo aa | awk '/^a{2}$/ { found = 1 } END { exit !found }' \
                || die 2 "input pattern uses {n} repetitions, unsupported by this awk ($(awk -W version 2>&1 | head -1))"
            ;;
    esac
}

list_days() {
    local day="$START_DAY"
    while :; do
        date -u -d "$day" +%Y/%m/%d
        [ "$day" = "$END_DAY" ] && break
        day="$(date -u -d "$day + 1 day" +%Y-%m-%d)"
    done
}

## "<key>\t<IsRestoreInProgress>": True (ongoing), False (restored), None (archived).
list_cold() {
    local day
    for day in $(list_days); do
        aws_cold s3api list-objects-v2 --bucket "$COLD_BUCKET" \
            --prefix "$INPUT_PATH/$day/" \
            --optional-object-attributes RestoreStatus \
            --query 'Contents[].[Key, RestoreStatus.IsRestoreInProgress]' \
            --output text || return 1
    done
}

## Keys relative to OUTPUT_PATH. rclone exit 3 = output path not created yet.
list_hot() {
    local status=0
    rc lsf -R --files-only --fast-list "$HOT_REMOTE:$OUTPUT_PATH/" 2>/dev/null || status=$?
    [ "$status" -eq 0 ] || [ "$status" -eq 3 ]
}

## Fills $WORK_DIR/<state> with the selected keys, relative to INPUT_PATH.
classify() {
    WORK_DIR="$(mktemp -d "${TMPDIR:-/tmp}/unarchive.XXXXXX")"
    trap 'rm -rf "$WORK_DIR"' EXIT

    list_cold > "$WORK_DIR/cold" || die 3 "cannot list the cold zone $COLD_BUCKET/$INPUT_PATH"
    list_hot > "$WORK_DIR/hot.list" || die 3 "cannot list the hot zone $HOT_REMOTE:$OUTPUT_PATH"

    # Pattern via ENVIRON, as -v would interpret its backslashes.
    # FILENAME rather than NR == FNR, which breaks on an empty hot listing.
    PAT="$INPUT_PATTERN" awk -F'\t' -v prefix="$INPUT_PATH/" -v dir="$WORK_DIR" '
        FILENAME == ARGV[1] { hot[$0] = 1; next }
        $1 == "" || $1 == "None" || substr($1, 1, length(prefix)) != prefix { next }
        !($1 ~ ENVIRON["PAT"]) { next }
        {
            rel = substr($1, length(prefix) + 1)
            if (rel in hot) state = "hot"
            else if ($2 == "True") state = "ongoing"
            else if ($2 == "False") state = "restored"
            else state = "archived"
            print rel > (dir "/" state)
        }
    ' "$WORK_DIR/hot.list" "$WORK_DIR/cold"

    local state
    for state in hot restored ongoing archived; do
        touch "$WORK_DIR/$state"
    done
}

## count <state|total>
count() {
    if [ "$1" = "total" ]; then
        cat "$WORK_DIR/hot" "$WORK_DIR/restored" "$WORK_DIR/ongoing" "$WORK_DIR/archived" | wc -l | tr -d ' '
    else
        wc -l < "$WORK_DIR/$1" | tr -d ' '
    fi
}

summary() {
    echo "total=$(count total) hot=$(count hot) restored=$(count restored) ongoing=$(count ongoing) archived=$(count archived)"
}

is_dry_run() { [ "$DRY_RUN" = "true" ]; }

## A 409 means already being restored. Other failures stay archived and are
## requested again by the next run.
request_archived() {
    local n out ok already failed
    n="$(count archived)"
    [ "$n" -gt 0 ] || return 0
    if is_dry_run; then
        log "DRY RUN: would request the restoration of $n object(s) for $AVAILABILITY_DAYS day(s)"
        return 0
    fi
    out="$(rc backend restore "$COLD_REMOTE:$INPUT_PATH" \
        --files-from-raw "$WORK_DIR/archived" --checkers "$CHECKERS" \
        -o lifetime="$AVAILABILITY_DAYS")" || die 3 "restore request failed for $COLD_REMOTE:$INPUT_PATH"
    ok="$(grep -c '"Status": "OK"' <<< "$out" || true)"
    already="$(grep -c 'StatusCode: 409' <<< "$out" || true)"
    failed=$((n - ok - already))
    log "Restoration requested: $ok   already in progress: $already   failed: $failed"
    if [ "$failed" -gt 0 ]; then
        grep '"Status"' <<< "$out" | grep -v -e '"OK"' -e 'StatusCode: 409' | head -5 >&2 || true
        [ $((ok + already)) -gt 0 ] || die 3 "every restore request failed"
        warn "$failed restore request(s) failed, they will be requested again by the next run"
    fi
}

## copy_restored [max_duration]: returns 0 when done, 10 when max_duration was
## reached (rclone code), another code on error. Only missing objects are listed,
## hence --no-check-dest.
copy_restored() {
    local max_duration="${1:-}" n status=0
    n="$(count restored)"
    [ "$n" -gt 0 ] || return 0
    if is_dry_run; then
        log "DRY RUN: would copy $n object(s) to $HOT_REMOTE:$OUTPUT_PATH as $HOT_STORAGE_CLASS"
        return 0
    fi
    log "Copying $n object(s) to $HOT_REMOTE:$OUTPUT_PATH (transfers=$TRANSFERS)"
    rc copy "$COLD_REMOTE:$INPUT_PATH" "$HOT_REMOTE:$OUTPUT_PATH" \
        --files-from-raw "$WORK_DIR/restored" --no-traverse --no-check-dest \
        --transfers "$TRANSFERS" --checkers "$CHECKERS" \
        --s3-storage-class "$HOT_STORAGE_CLASS" --s3-no-check-bucket \
        --retries 3 --low-level-retries 10 \
        ${max_duration:+--max-duration "$max_duration" --cutoff-mode soft} \
        --stats 0 --log-level NOTICE || status=$?
    case "$status" in
        0) log "Copied: $n" ;;
        10) log "Copy paused after $max_duration, the next run will resume it" ;;
    esac
    return "$status"
}

run_request() {
    classify
    log "REQUEST [$START_DATE..$END_DATE] $INPUT_PATH pattern='$INPUT_PATTERN' days=$AVAILABILITY_DAYS: $(summary)"
    [ "$(count total)" -gt 0 ] || warn "no object matches this period and pattern"
    request_archived
}

## Exits 0 once the copy succeeded, even if some objects are not restored yet:
## completion is reported by the move status.
run_move() {
    classify
    log "MOVE [$START_DATE..$END_DATE] $INPUT_PATH -> $HOT_REMOTE:$OUTPUT_PATH: $(summary)"
    copy_restored || die 3 "copy to $HOT_REMOTE:$OUTPUT_PATH failed"
    if [ $(( $(count ongoing) + $(count archived) )) -gt 0 ]; then
        log "Not ready yet: ongoing=$(count ongoing) archived=$(count archived), run again later"
    fi
}

## Callers run request/move only once, so with HEAL the status runs resume what
## is left (expired or failed restorations, interrupted copies).
status_request() {
    classify
    log "RESTORE STATUS: $(summary)"
    if [ "$(count archived)" -gt 0 ] && [ "$HEAL" = "true" ]; then
        request_archived
    fi
    if [ $(( $(count ongoing) + $(count archived) )) -eq 0 ]; then
        log "RESTORE STATUS: all selected objects are restored"
        return 0
    fi
    log "RESTORE STATUS: restoration still ongoing"
    return 1
}

status_move() {
    local status=0
    classify
    log "MOVE STATUS: $(summary)"
    if [ "$(count hot)" -eq "$(count total)" ]; then
        log "MOVE STATUS: all selected objects are in the hot zone"
        return 0
    fi
    if [ "$HEAL" = "true" ]; then
        request_archived
        # Bounded so that a status run stays under the caller's timeout
        copy_restored "$STATUS_MAX_DURATION" || status=$?
        case "$status" in
            0) if ! is_dry_run && [ $(( $(count ongoing) + $(count archived) )) -eq 0 ]; then
                   log "MOVE STATUS: all selected objects are in the hot zone"
                   return 0
               fi ;;
            10) ;;
            *) die 3 "copy to $HOT_REMOTE:$OUTPUT_PATH failed" ;;
        esac
    fi
    log "MOVE STATUS: not complete yet"
    return 1
}
