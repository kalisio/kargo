#!/usr/bin/env bash
set -euo pipefail
# set -x

SINGLE_CHART=${1:-}
REMOTE="oci://harbor.portal.kalisio.com/kalisio/helm"
LATEST_VERSION=0.0.0-dev

THIS_FILE=$(readlink -f "${BASH_SOURCE[0]}")
THIS_PATH=$(dirname "$THIS_FILE")
KARGO_PATH=$(dirname "$THIS_PATH")
TMP_PATH=$(mktemp -d -p "${XDG_RUNTIME_DIR:-}" kargo_charts.XXXXXX)

# get in root kargo folder
cd "$KARGO_PATH"

if [ -z "$SINGLE_CHART" ]; then
    # empty SINGLE_CHART => release all charts
    for CHART in charts/*/; do
        helm dependencies update "$CHART"
        helm lint "$CHART"
        helm package "$CHART" --destination "$TMP_PATH" --version "$LATEST_VERSION"
    done
else
    # single chart release
    # make sure chart exists
    if [ ! -d charts/"$SINGLE_CHART" ]; then
        echo "$0: chart $SINGLE_CHART does not exist"
        exit 1
    fi

    # package chart
    helm dependencies update charts/"$SINGLE_CHART"
    helm lint charts/"$SINGLE_CHART"
    helm package charts/"$SINGLE_CHART" --destination "$TMP_PATH" --version $LATEST_VERSION
fi

# push on oci registry
for CHART in "$TMP_PATH"/*.tgz; do
    helm push "$CHART" "$REMOTE"
done

# and on s3 backup storage (merge index.yaml before pushing)
rclone copy kalisio_charts:index.yaml "$TMP_PATH"
helm repo index "$TMP_PATH" --merge "$TMP_PATH"/index.yaml
rclone copy "$TMP_PATH" kalisio_charts:

# cleanup
rm -fR "$TMP_PATH"
