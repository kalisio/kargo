#!/bin/bash
[[ ! -z "${K_SLACK-}" ]] && return
K_SLACK=1

# Include useful scripts
source ${KARGO_SCRIPTS_PATH}/log.sh

notify_slack() {
  local MESSAGE=$1
  local STYLE=${2:-default}
  if [[ -z "${SLACK_WEBHOOK_URL-}" ]]; then
    local PAYLOAD="{ \"attachments\": [ { \"color\": \"${STYLE}\", \"title\": \"${SUBDOMAIN}\", \"mrkdwn_in\": [ \"text\" ], \"text\": \"${MESSAGE}\" } ]"
    curl -X POST -H "Content-type: application/json" --data "${PAYLOAD}" ${SLACK_WEBHOOK_URL} > /dev/null
  else
    log_error \"SLACK_WEBHOOK_URL\" variable is undefined 
  fi
}

 