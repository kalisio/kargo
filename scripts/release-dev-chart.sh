#!/usr/bin/env bash
set -euo pipefail
# set -x

CHART=${1}
REMOTE="oci://harbor.portal.kalisio.com/kalisio/helm"
LATEST_VERSION=0.0.0-dev

THIS_FILE=$(readlink -f "$BASH_SOURCE")
THIS_PATH=$(dirname "$THIS_FILE")
KARGO_PATH=$(dirname "$THIS_PATH")
TMP_PATH=$(mktemp -d -p "${XDG_RUNTIME_DIR:-}" kargo_charts.XXXXXX)

# get in root kargo folder
cd $KARGO_PATH

# make sure chart exists
if [ ! -d "charts/$CHART" ]; then
    echo "$0: chart $CHART does not exist"
    exit 1
fi

# package chart
helm dependencies update charts/$CHART
helm lint charts/$CHART
helm package charts/$CHART --destination $TMP_PATH --version $LATEST_VERSION

# push on oci registry
helm push $TMP_PATH/$CHART-$LATEST_VERSION.tgz $REMOTE

# and on s3 backup storage (merge index.yaml before pushing)
rclone copy kalisio_charts:index.yaml $TMP_PATH
helm repo index $TMP_PATH --merge $TMP_PATH/index.yaml
rclone copy $TMP_PATH kalisio_charts:

# cleanup
rm -fR $TMP_PATH
