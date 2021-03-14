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

  if remote_exists "${REMOTE}"; then
    if file_path_exists "${SOURCE}"; then
      log_info copy ${SOURCE} to ${REMOTE}:${DESTINATION}
      if rclone copy ${SOURCE} ${REMOTE}:${DESTINATION}; then
        return 0
      else
        return 1
      fi
    else
      log_error the specified source \"${SOURCE}\" does not exist
      return 1
    fi
  else
    log_error the specified store \"${REMOTE}\" doest not exist
    return 1
  fi
}

copy_from_store() {
  local REMOTE=$1
  local SOURCE=$2
  local DESTINATION=$3

  if remote_exists "${REMOTE}"; then
    if file_path_exists "${DESTINATION}"; then
      log_info copy from ${REMOTE}:${SOURCE} to ${DESTINATION}
      if rclone copy $REMOTE:${SOURCE} ${DESTINATION}; then
        return 0
      else
        return 1
      fi
    else
      log_error the specified destination \"${DESTINATION}\" does not exist
      return 1
    fi
  else
    log_error the specified store \"${REMOTE}\" doest not exist
    return 1
  fi
}