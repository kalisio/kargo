#!/usr/bin/env bash
set -euo pipefail
set -x

CHART=${1}
KALISIO_REGISTRY="oci://harbor.portal.kalisio.com"

THIS_FILE=$(readlink -f "$BASH_SOURCE")
THIS_PATH=$(dirname "$THIS_FILE")
KARGO_PATH=$(dirname "$THIS_PATH")

# Package the given chart ($1) and push it on success to the given remote ($2)
package_chart() {
    local CHART=$1
    local REMOTE=$2
    local TMP_PATH=$(mktemp -d -p "${XDG_RUNTIME_DIR:-}" $CHART.XXXXXX)

    # https://helm.sh/docs/helm/helm/
    helm dependencies update
    helm lint .
    helm package . -d $TMP_PATH
    helm push $TMP_PATH/$CHART* $REMOTE
    rm -fR $TMP_PATH
}

cd $KARGO_PATH

# make sure working tree is clean in the chart we're about to package
STATUS=$(git status --porcelain)
if [ -n "$STATUS" ]; then
    echo "$0: refusing to proceed since working tree is not clean in charts/$CHART"
    echo "$STATUS"
    exit 1
fi

# fetch changes from upstream, this is to make sure latest commit on
# local branch also exists upstream
# git fetch

# make sure our latest commit also exists upstream
LOCAL_COMMIT=$(git rev-parse HEAD)
BRANCHES=$(git branch --remotes --contains $LOCAL_COMMIT | grep origin)
if [ -z "$BRANCHES" ]; then
    echo "$0: refusing to proceed since your work has not been published upstream"
    exit 1
fi

VERSION=$(sed -En 's/^version: (.*)$/\1/p' charts/${CHART}/Chart.yaml)
TAG_NAME="$CHART-$VERSION"

# make sure tag does not already exist
if git show-ref --tags "$TAG_NAME" --quiet; then
    echo "$0: refusing to proceed since tag $TAG_NAME already exist"
    exit 1
fi

# package and push chart
pushd charts/$CHART
package_chart $CHART $KALISIO_REGISTRY/kalisio/helm
popd

# if all ok, make a tag and publish it
git tag $TAG_NAME $LOCAL_COMMIT
git push origin $TAG_NAME
