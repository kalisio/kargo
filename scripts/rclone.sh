#!/bin/bash
[[ ! -z "${K_RCLONE-}" ]] && return
K_RCLONE=1

# Include useful scripts
source ${KARGO_SCRIPTS_PATH}/log.sh
source ${KARGO_SCRIPTS_PATH}/file.sh

remote_exists () {
  local REMOTE=$1
  local REMOTE_EXISTS=`rclone listremotes | grep ${REMOTE}`
  if [ -z "${REMOTE_EXISTS}" ]; then
    return 1
  else
    return 0
  fi
}

copy_to_store() {
  local REMOTE=$1
  local SOURCE=$2
  local DESTINATION=$3

  if remote_exists $REMOTE; then
    if file_path_exists $SOURCE; then
      rclone --progress copy ${SOURCE} ${REMOTE}:${DESTINATION}
    else
      log_error the specified source \"${SOURCE}\" does not exist
    fi
  else
    log_error the specified store \"${REMOTE}\" doest not exist
  fi
}

copy_from_store() {
  local REMOTE=$1
  local SOURCE=$2
  local DESTINATION=$3

  if remote_exists $REMOTE; then
    if file_path_exists $DESTINATION; then
      rclone --progress copy $REMOTE:${SOURCE} ${DESTINATION}
    else
      log_error the specified destination \"${DESTINATION}\" does not exist
    fi
  else
    log_error the specified store \"${REMOTE}\" doest not exist
  fi
}