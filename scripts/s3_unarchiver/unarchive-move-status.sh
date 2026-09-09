#!/usr/bin/env bash
set -euo pipefail
# Light status of the MOVE phase, by counting.
# Compares the expected number of objects (cold, filtered) with the number
# already present in the hot zone. No per-object check.
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
. "$HERE/lib-unarchive.sh"
parse_args "$@"

expected="$(count_expected)"
in_hot="$(count_in_hot)"
log "MOVE STATUS: $in_hot / $expected object(s) in the hot zone"
# expected == 0 is actually a legitimate outcome (nothing in the cold zone matches this date range/pattern),
# not a sign that counting failed - treat it as done rather than as permanently "not ready"
# [ "$expected" -gt 0 ] && [ "$in_hot" -ge "$expected" ]
[ "$in_hot" -ge "$expected" ]
