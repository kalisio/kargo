#!/usr/bin/env bash
set -euo pipefail
# Request the restoration of every selected object.
# Idempotent and thrifty: skips objects already in the hot zone, and only asks
# for objects that were never requested before (Restore field absent).
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
. "$HERE/lib-unarchive.sh"
parse_args "$@"

log "REQUEST (Days=$AVAILABILITY_DAYS) [$START_DATE..$END_DATE] $INPUT_PATH pattern='${INPUT_PATTERN:-*}'"
asked=0; skipped_hot=0; skipped_already=0
while read -r key; do
    [ -z "$key" ] && continue
    if is_in_hot "$(dest_path "$key")"; then
        skipped_hot=$((skipped_hot + 1)); continue
    fi
    if was_requested "$key"; then
        skipped_already=$((skipped_already + 1)); continue
    fi
    aws s3api restore-object \
        --bucket "$COLD_BUCKET" --key "$key" \
        --restore-request "{\"Days\":${AVAILABILITY_DAYS}}" 2>/dev/null \
        && log "  requested: $key" \
        || log "  request failed (maybe just started elsewhere): $key"
    asked=$((asked + 1))
done < <(list_objects)
log "Requested: $asked   Already in hot: $skipped_hot   Already requested: $skipped_already"
