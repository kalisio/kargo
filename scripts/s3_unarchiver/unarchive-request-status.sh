#!/usr/bin/env bash
set -euo pipefail
# Light status of the RESTORATION phase.
# Stops at the first object still ongoing: fast answer "ongoing" vs "all done".
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
. "$HERE/lib-unarchive.sh"
parse_args "$@"

ongoing=0
while read -r key; do
    [ -z "$key" ] && continue
    # Already moved: done regardless of the cold copy's own restore state, which can have expired by the time this is re-checked
    if is_in_hot "$(dest_path "$key")"; then
        continue
    fi
    if ! is_restored "$key"; then
        ongoing=1
        break
    fi
done < <(list_objects)

if [ "$ongoing" -eq 0 ]; then
    log "RESTORE STATUS: all selected objects are restored"
    exit 0
else
    log "RESTORE STATUS: restoration still ongoing"
    exit 1
fi