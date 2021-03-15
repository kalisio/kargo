
#!/bin/bash
#set -euo pipefail

source ${KARGO_SCRIPTS_PATH}/log.sh

if [[ -n "${MARIADB_DATA_PATH}" ]]; then
  log_info creating ${MARIADB_DATA_PATH}/mariadb_data if not exist
  mkdir -p ${MARIADB_DATA_PATH}/mariadb_data
fi
