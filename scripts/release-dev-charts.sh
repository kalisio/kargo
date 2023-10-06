#!/usr/bin/env bash
set -euo pipefail
# set -x

KALISIO_REGISTRY="oci://harbor.portal.kalisio.com"
LATEST_VERSION=0.0.0-dev

THIS_FILE=$(readlink -f "$BASH_SOURCE")
THIS_PATH=$(dirname "$THIS_FILE")
KARGO_PATH=$(dirname "$THIS_PATH")
TMP_PATH=$(mktemp -d -p "${XDG_RUNTIME_DIR:-}" kargo_charts.XXXXXX)

cd $KARGO_PATH

# package charts
for CHART in charts/*/; do
    pushd $CHART

    # https://helm.sh/docs/helm/helm/
    helm dependencies update
    helm lint .
    helm package . --destination $TMP_PATH --version $LATEST_VERSION

    popd
done

# push charts
for CHART in $TMP_PATH/*.tgz; do
    helm push $CHART $KALISIO_REGISTRY/kalisio/helm
done

# cleanup
rm -fR $TMP_PATH
