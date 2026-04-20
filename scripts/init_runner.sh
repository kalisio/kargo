#!/usr/bin/env bash
set -euo pipefail
# set -x

JOB_ID=$1

THIS_FILE=$(readlink -f "${BASH_SOURCE[0]}")
THIS_DIR=$(dirname "$THIS_FILE")

. "$THIS_DIR/kash/kash.sh"

### Github Actions

init_github_detect() {
    install_reqs yq
}

init_github_release_charts() {
    install_reqs yq helm rclone sops
}

### Dev Mode

# init__detect() {
#     install_reqs yq
# }

# init__release_charts() {
#     install_reqs yq helm rclone
# }

begin_group "Init $CI_ID for $JOB_ID"
init_"${CI_ID}_${JOB_ID}"
end_group "Init $CI_ID for $JOB_ID"