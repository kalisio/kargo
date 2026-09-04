#!/usr/bin/env bash
set -euo pipefail
# Move restored objects to the hot zone.
# Reads restoration state from the cold zone (AWS CLI), copies with rclone
# which handles the two different endpoints. Idempotent: objects already in the
# hot zone are skipped, objects not restored yet are left for a later run.
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
. "$HERE/lib-unarchive.sh"
parse_args "$@"

log "MOVE to $HOT_REMOTE/$OUTPUT_PATH [$START_DATE..$END_DATE] pattern='${INPUT_PATTERN:-*}'"
moved=0; done_already=0; not_ready=0
while read -r key; do
    [ -z "$key" ] && continue
    log " checking file move state for $key"
    dest="$(dest_path "$key")"
    if is_in_hot "$dest"; then
        log " skipping $key as already in hot zone"
        done_already=$((done_already + 1)); continue
    fi
    if ! is_restored "$key"; then
        log " skipping $key as not yet restored"
        not_ready=$((not_ready + 1)); continue
    fi
    copy_to_hot "$key" "$dest"
    log "  moved: $key -> $dest"
    moved=$((moved + 1))
done < <(list_objects)
log "Moved: $moved   Already done: $done_already   Not ready: $not_ready"
[ "$not_ready" -eq 0 ]
