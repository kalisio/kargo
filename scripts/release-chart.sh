#!/usr/bin/env bash
set -euo pipefail
# set -x

CHART=${1}
REMOTE="oci://harbor.portal.kalisio.com/kalisio/helm"

THIS_FILE=$(readlink -f "${BASH_SOURCE[0]}")
THIS_PATH=$(dirname "$THIS_FILE")
KARGO_PATH=$(dirname "$THIS_PATH")
KALISIO_RCLONE_CONFIG="$KALISIO_DEVELOPMENT_DIR/development/rclone.dec.conf"

# get in root kargo folder
cd "$KARGO_PATH"

# make sure chart exists
if [ ! -d "charts/$CHART" ]; then
    echo "$0: chart $CHART does not exist"
    exit 1
fi

# make sure working tree is clean
STATUS=$(git status --porcelain)
if [ -n "$STATUS" ]; then
    echo "$0: refusing to proceed since working tree is not clean in charts/$CHART"
    echo "$STATUS"
    exit 1
fi

# make sure our latest commit also exists upstream
LOCAL_COMMIT=$(git rev-parse HEAD) # get current commit sha
# list branches containing our commit sha, must include origin/master
# command is allowed to fail (|| true) because grep fails if it doesn't find the string
BRANCHES=$(git branch --remotes --contains "$LOCAL_COMMIT" | grep origin/master) || true
if [ -z "$BRANCHES" ]; then
    echo "$0: refusing to proceed since your work has not been published upstream"
    exit 1
fi

VERSION=$(sed -En 's/^version: (.*)$/\1/p' charts/"$CHART"/Chart.yaml)
TAG_NAME="$CHART-$VERSION"

# make sure tag does not already exist
if git show-ref --tags "$TAG_NAME" --quiet; then
    echo "$0: refusing to proceed since tag $TAG_NAME already exist"
    exit 1
fi

TMP_PATH=$(mktemp -d -p "${XDG_RUNTIME_DIR:-}" "$CHART".XXXXXX)

# package chart
helm dependencies update charts/"$CHART"
helm lint charts/"$CHART"
helm package charts/"$CHART" --destination "$TMP_PATH"

# check if the rclone config file exists
if [ ! -f "$KALISIO_RCLONE_CONFIG" ]; then
    echo "$0: rclone config file $KALISIO_RCLONE_CONFIG does not exist"
    exit 1
fi

# push on oci registry
helm push "$TMP_PATH"/"$CHART"*.tgz $REMOTE

# and on s3 backup storage (merge index.yaml before pushing)
rclone copy --config "$KALISIO_RCLONE_CONFIG" kalisio_charts:index.yaml "$TMP_PATH"

helm repo index "$TMP_PATH" --merge "$TMP_PATH"/index.yaml
rclone copy --config "$KALISIO_RCLONE_CONFIG" "$TMP_PATH" kalisio_charts:

# cleanup
rm -fR "$TMP_PATH"

# if all ok, make a tag and publish it
git tag "$TAG_NAME" "$LOCAL_COMMIT"
git push origin "$TAG_NAME"
