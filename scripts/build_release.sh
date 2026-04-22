#!/usr/bin/env bash
set -euo pipefail
# set -x

# Build and release Helm charts to Harbor OCI registry and S3 backup.
# Decrypts Harbor and rclone credentials from the development repository,
# logs into the registry, then releases each chart using kash functions.
#
# Usage (CI mode):
#   bash ./scripts/build_release.sh -p chart1 chart2
#
# Usage (CI mode, force dev release):
#   FORCE_DEV=true bash ./scripts/build_release.sh -p chart1 chart2
#
# Usage (dev mode, no push):
#   bash ./scripts/build_release.sh chart1

THIS_FILE=$(readlink -f "${BASH_SOURCE[0]}")
THIS_DIR=$(dirname "$THIS_FILE")
ROOT_DIR=$(dirname "$THIS_DIR")
WORKSPACE_DIR="$(dirname "$ROOT_DIR")"

. "$THIS_DIR/kash/kash.sh"

## Parse options
##
PUBLISH=false
while getopts "p" option; do
    case $option in
        p) # publish charts to Harbor and S3
            PUBLISH=true
            ;;
        *)
            ;;
    esac
done
shift $((OPTIND-1))

## Decrypt credentials
##
begin_group "Setup Harbor credentials"

load_env_files \
    "$WORKSPACE_DIR/development/common/kalisio_harbor.enc.env"

load_value_files \
    "$WORKSPACE_DIR/development/common/KALISIO_HARBOR_PASSWORD.enc.value"

end_group "Setup Harbor credentials"

## Login to Harbor OCI registry
##
begin_group "Helm registry login"

helm registry login "$KALISIO_HARBOR_URL" \
    --username "$KALISIO_HARBOR_USERNAME" \
    --password-stdin < "$KALISIO_HARBOR_PASSWORD"

end_group "Helm registry login"

## Decrypt rclone configuration for S3 backup access
##
begin_group "Setup rclone config"

RCLONE_ENC_CONF="$WORKSPACE_DIR/development/rclone.enc.conf"
RCLONE_DEC_CONF=$(enc2dec "$RCLONE_ENC_CONF")
sops --decrypt --output "$RCLONE_DEC_CONF" "$RCLONE_ENC_CONF"

end_group "Setup rclone config"

## Release charts
##
FORCE_DEV="${FORCE_DEV:-false}"
RCLONE_REMOTE="kalisio_charts"

# Set git identity for tag creation — CI mode only
if [ "$CI" = true ]; then
    git config user.name  "github-actions[bot]"
    git config user.email "github-actions[bot]@users.noreply.github.com"
fi

if [ "$PUBLISH" = true ]; then
    # Shared temp directory for all charts
    TMP=$(mktemp -d)
    PROD_TAGS=()

    # Package all charts first
    for CHART in "$@"; do
        VERSION=$(get_yaml_value "$ROOT_DIR/charts/$CHART/Chart.yaml" "version")
        TAG_NAME="${CHART}-${VERSION}"

        begin_group "Package ${CHART} (${VERSION})"

        if [ "$FORCE_DEV" = "true" ]; then
            echo "-> FORCE_DEV enabled, packaging dev version (0.0.0-dev)"
            package_chart "$CHART" "$TMP" "0.0.0-dev" "$ROOT_DIR"
        elif git_tag_exists "$TAG_NAME" "$ROOT_DIR"; then
            echo "-> Tag ${TAG_NAME} exists, packaging dev version (0.0.0-dev)"
            package_chart "$CHART" "$TMP" "0.0.0-dev" "$ROOT_DIR"
        else
            echo "-> Tag ${TAG_NAME} not found, packaging production version (${VERSION})"
            package_chart "$CHART" "$TMP" "" "$ROOT_DIR"
            PROD_TAGS+=("$TAG_NAME")
        fi

        end_group "Package ${CHART} (${VERSION})"
    done

    # Push all charts to Harbor OCI — one single operation
    begin_group "Push charts to Harbor OCI"
    push_charts_oci "$TMP" "$KALISIO_HARBOR_URL/kalisio/helm"
    end_group "Push charts to Harbor OCI"

    # Push all charts to S3 + rebuild index.yaml once
    begin_group "Push charts to S3"
    push_charts_s3 "$TMP" "$RCLONE_REMOTE" "$RCLONE_DEC_CONF"
    end_group "Push charts to S3"

    # Create git tags for production releases only
    for TAG_NAME in "${PROD_TAGS[@]:-}"; do
        git tag "$TAG_NAME"
        git push origin "$TAG_NAME"
        echo "-> Tag ${TAG_NAME} created."
    done

    rm -rf "$TMP"
else
    echo "-> Dry run mode: skipping publish (use -p to publish)"
fi

## Logout from Harbor OCI registry
##
helm registry logout "$KALISIO_HARBOR_URL"