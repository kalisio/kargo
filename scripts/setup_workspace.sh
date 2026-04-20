#!/usr/bin/env bash
set -euo pipefail
# set -x

# Setup the workspace required to run chart release scripts.
# In CI mode: clones development.git only.
# In dev mode: optionally clones kargo and development.git into a new workspace,
#              useful when working on a specific branch or tag.
#
# Usage (CI mode):
#   bash ./scripts/setup_workspace.sh
#
# Usage (dev mode - existing workspace):
#   bash ./scripts/setup_workspace.sh ~/kalisio/kalisio
#
# Usage (dev mode - new workspace on a branch):
#   bash ./scripts/setup_workspace.sh -b my-branch ~/kalisio/my-workspace
#
# Usage (dev mode - new workspace on a tag):
#   bash ./scripts/setup_workspace.sh -t 1.0.0 ~/kalisio/my-workspace

THIS_FILE=$(readlink -f "${BASH_SOURCE[0]}")
THIS_DIR=$(dirname "$THIS_FILE")
ROOT_DIR=$(dirname "$THIS_DIR")
WORKSPACE_DIR="$(dirname "$ROOT_DIR")"

. "$THIS_DIR/kash/kash.sh"

## Parse options 
##
begin_group "Setting up workspace ..."

if [ "$CI" != true ]; then
    WORKSPACE_BRANCH=
    WORKSPACE_TAG=

    while getopts "b:t:" option; do
        case $option in
            b) # defines branch to checkout
                WORKSPACE_BRANCH=$OPTARG ;;
            t) # defines tag to checkout
                WORKSPACE_TAG=$OPTARG ;;
            *)
                ;;
        esac
    done
    shift $((OPTIND-1))
    WORKSPACE_DIR="${1:-$WORKSPACE_DIR}"

    # Clone kargo into the workspace if it does not exist yet
    if [[ ! -d "$WORKSPACE_DIR/kargo" ]]; then
        git_shallow_clone \
            "$KALISIO_GITHUB_URL/kalisio/kargo.git" \
            "$WORKSPACE_DIR/kargo" \
            "${WORKSPACE_TAG:-${WORKSPACE_BRANCH:-}}"
    fi
fi

# Clone development.git
setup_workspace "$WORKSPACE_DIR" "$KALISIO_GITHUB_URL/kalisio/development.git"

end_group "Setting up workspace ..."