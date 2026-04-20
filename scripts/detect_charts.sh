#!/usr/bin/env bash
set -euo pipefail
# set -x

# Detect which Helm charts need to be released.
#
# Detection strategy (by priority):
#   1. INPUT_CHART set -> use that chart directly (manual workflow_dispatch)
#   2. DIFF_RANGE set  -> use git diff to find modified charts
#   3. Neither set     -> compute DIFF_RANGE from GitHub event variables,
#                         or include all charts if first push / workflow_dispatch
#
# Cascade rule: if the library kargo is modified, all non-library charts are included.
# Library charts (type: library in Chart.yaml) are always excluded.
#
# Output:
#   stdout -> space-separated list of chart names (captured by $(...))
#   stderr ->  log messages
#   GITHUB_OUTPUT -> charts and has_charts (when running in CI)
#
# Usage (dev mode):
#   INPUT_CHART=geokoder bash ./scripts/detect_charts.sh
#   DIFF_RANGE="abc123..def456" bash ./scripts/detect_charts.sh
#
# Usage (CI mode):
#   env vars are injected by the workflow, GITHUB_OUTPUT is written automatically

THIS_FILE=$(readlink -f "${BASH_SOURCE[0]}")
THIS_DIR=$(dirname "$THIS_FILE")

. "$THIS_DIR/kash/kash.sh" >&2

REPO_ROOT=$(git rev-parse --show-toplevel)

#  Input variables 
INPUT_CHART="${INPUT_CHART:-}"
GITHUB_EVENT_NAME="${GITHUB_EVENT_NAME:-}"
GITHUB_EVENT_BEFORE="${GITHUB_EVENT_BEFORE:-}"
GITHUB_EVENT_AFTER="${GITHUB_EVENT_AFTER:-}"

#  Compute DIFF_RANGE if not explicitly set 
if [[ -z "${DIFF_RANGE:-}" ]]; then
    if [[ "${GITHUB_EVENT_NAME}" == "workflow_dispatch" ]]; then
        # Manual trigger: use INPUT_CHART or fall back to all charts
        DIFF_RANGE=""
        echo "-> workflow_dispatch: using INPUT_CHART or including all charts" >&2
    elif [[ "${GITHUB_EVENT_BEFORE}" == "0000000000000000000000000000000000000000" ]] || \
         [[ -z "${GITHUB_EVENT_BEFORE}" ]]; then
        # First push on this branch: include everything
        DIFF_RANGE=""
        echo "-> First push on branch: including all charts" >&2
    else
        # Normal push: diff covers all commits in the push 
        DIFF_RANGE="${GITHUB_EVENT_BEFORE}..${GITHUB_EVENT_AFTER}"
        echo "-> Push: diff ${DIFF_RANGE}" >&2
    fi
fi

#  Helper: add a chart to the list if valid and not already present 
CHARTS=""
_add_chart() {
    local CHART="$1"
    [[ -z "${CHART}" ]]                     && return
    [[ -d "${REPO_ROOT}/charts/${CHART}" ]] || return
    local TYPE
    TYPE=$(yq '.type // "application"' \
        "${REPO_ROOT}/charts/${CHART}/Chart.yaml" 2>/dev/null \
        || echo "application")
    # Skip library charts, they are released through their consumers
    [[ "${TYPE}" == "library" ]] && return
    # Skip duplicates
    [[ " ${CHARTS} " =~ " ${CHART} " ]] && return
    CHARTS="${CHARTS} ${CHART}"
}

begin_group "Detect charts" >&2

# 1: chart provided manually 
if [[ -n "${INPUT_CHART}" ]]; then
    echo "-> Chart provided manually: ${INPUT_CHART}" >&2
    _add_chart "${INPUT_CHART}"

# 2: no diff range -> include all charts 
elif [[ -z "${DIFF_RANGE}" ]]; then
    echo "-> No diff range: including all non-library charts" >&2
    for CHART_DIR in "${REPO_ROOT}"/charts/*/; do
        _add_chart "$(basename "${CHART_DIR}")"
    done

# 3: normal push -> detect from git diff 
else
    CHANGED_FILES=$(git diff --name-only "${DIFF_RANGE}" \
        -- 'charts/' 2>/dev/null || true)

    # Cascade rule: kargo change triggers rebuild of all consumers
    if echo "${CHANGED_FILES}" | grep -q "^charts/kargo/"; then
        echo "-> kargo modified: cascading to all dependent charts" >&2
        for CHART_DIR in "${REPO_ROOT}"/charts/*/; do
            _add_chart "$(basename "${CHART_DIR}")"
        done
    else
        for FILE in ${CHANGED_FILES}; do
            _add_chart "$(echo "${FILE}" | cut -d'/' -f2)"
        done
    fi
fi

CHARTS=$(echo "${CHARTS}" | xargs)

if [[ -n "${CHARTS}" ]]; then
    echo "-> Charts to process: ${CHARTS}" >&2
else
    echo "-> No charts to process." >&2
fi

end_group "Detect charts" >&2

# Write to GITHUB_OUTPUT when running in CI 
if [[ "${CI:-false}" == "true" ]] && [[ -n "${GITHUB_OUTPUT:-}" ]]; then
    if [[ -n "${CHARTS}" ]]; then
        echo "charts=${CHARTS}"   >> "${GITHUB_OUTPUT}"
        echo "has_charts=true"    >> "${GITHUB_OUTPUT}"
    else
        echo "charts="            >> "${GITHUB_OUTPUT}"
        echo "has_charts=false"   >> "${GITHUB_OUTPUT}"
    fi
fi

echo "${CHARTS}"
