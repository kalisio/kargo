
#!/bin/bash
#set -euo pipefail

source ${KARGO_SCRIPTS_PATH}/log.sh

if [[ -n "${POSTGIS_DATA_PATH}" ]]; then
  log_info creating ${POSTGIS_DATA_PATH}/postgis_data if not exist
  mkdir -p ${POSTGIS_DATA_PATH}/postgis_data
fi