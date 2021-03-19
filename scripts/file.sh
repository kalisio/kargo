#!/bin/bash
[[ ! -z "${K_FILE-}" ]] && return
K_FILE=1

file_exists() {
  if [[ -f "$1" ]]; then
    return 0
  fi
  return 1
}

directory_exists() {
  if [[ -d "$1" ]]; then
    return 0
  fi
  return 1
}

file_path_exists() {
  if file_exists "$1" || directory_exists "$1"; then
    return 0
  fi
  return 1
}

delete_file_if_exist() {
  if file_exists $1; then
    log_info delete file \"$1\"
    rm $1
  fi
}

create_directory_if_not_exist() {
  if ! directory_exists $1; then
    log_info create directory \"$1\"
    mkdir $1
  fi
}

delete_directory_if_exist() {
  if directory_exists $1; then
    log_info delete directory \"$1\"
    rm -fr $1
  fi
}

make_temp_directory() {
  local FOLDER_PREFIX=$1
  mktemp -d --tmpdir ${FOLDER_PREFIX}.XXXXXX
}
