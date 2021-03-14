
#!/bin/bash
[[ ! -z "${K_LOG-}" ]] && return
K_LOG=1

# https://arnaudr.io/2015/12/06/bash-logging-helpers/

log_info() {
  local MESSAGE="[INFO] $@"
  [ -t 1 ]] &&  echo -e "${MESSAGE}" || logger -t $(basename $0) -p user.info "${MESSAGE}";
}

log_warning() {
  local MESSAGE="[WARNING] $@"
  [ -t 1 ]] && echo -e "\e[93m${MESSAGE}\e[0m" || logger -t $(basename $0) -p user.warning "${MESSAGE}";
}

log_error() {
  local MESSAGE="[ERROR] $@"
  [ -t 1 ]] && >&2 echo -e "\e[91m${MESSAGE}\e[0m" || logger -t $(basename $0) -p user.err "${MESSAGE}";
}