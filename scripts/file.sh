#!/bin/bash
[[ $__K_FILE__ ]] && return
__K_FILE__=1

set -euo pipefail

file_exists() {
  if [ -f "$1" ]; then
    return 0
  else 
    return 1
  fi
}

directory_exists() {
  if [ -d "$1" ]; then
    return 0
  else 
    return 1
  fi
}