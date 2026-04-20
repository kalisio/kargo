#!/usr/bin/env bash
set -euo pipefail
# set -x

# Orchestrate the release of all charts passed as arguments.
# For each chart, decides between a production release or a dev release
# based on whether the corresponding git tag already exists:
#   - tag absent  -> new version -> production release (release-chart.sh)
#   - tag present -> same version, content changed -> dev release (release-dev-chart.sh)
#
# Usage (CI mode):
#   SOPS_AGE_KEY=... bash ./scripts/publish_charts.sh chart1 chart2
#
# Usage (dev mode, no push):
#   bash ./scripts/publish_charts.sh chart1

THIS_FILE=$(readlink -f "${BASH_SOURCE[0]}")
THIS_DIR=$(dirname "$THIS_FILE")

. "$THIS_DIR/kash/kash.sh"


# Set git identity for tag creation — CI mode only
if [ "$CI" = true ]; then
    git config user.name  "github-actions[bot]"
    git config user.email "github-actions[bot]@users.noreply.github.com"
fi

#  Release each chart 
for CHART in "$@"; do
    VERSION=$(sed -En 's/^version: (.*)$/\1/p' "charts/${CHART}/Chart.yaml")
    TAG_NAME="${CHART}-${VERSION}"

    begin_group "Publish ${CHART} (${VERSION})"

    if git show-ref --tags "${TAG_NAME}" --quiet; then
        echo "-> Tag ${TAG_NAME} already exists, releasing dev version (0.0.0-dev)"
        bash "$THIS_DIR/release-dev-chart.sh" "${CHART}"
    else
        echo "-> Tag ${TAG_NAME} not found, releasing production version (${VERSION})"
        bash "$THIS_DIR/release-chart.sh" "${CHART}"
    fi

    end_group "Publish ${CHART} (${VERSION})"
done