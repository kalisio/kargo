#!/bin/bash
[[ ! -z "${K_MARIADB-}" ]] && return
K_MARIADB=1

# Include useful scripts
source ${KARGO_SCRIPTS_PATH}/log.sh
source ${KARGO_SCRIPTS_PATH}/file.sh

# Define common variables
K_MARIADB_DOCKER_RUN="docker run --rm --network=${DOCKER_BACK_NETWORK} ${MARIADB_IMAGE}:${MARIADB_TAG}"

mariadb_db_exists() {
  local DATABASE=$1
  local MYSQL="mysql --host=mariadb --password=${MARIADB_ROOT_PASSWORD}"

  local DATABASE_EXISTS=`${K_MARIADB_DOCKER_RUN} ${MYSQL} -e "SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME='${DATABASE}'"`
  if [ -z "${DATABASE_EXISTS}" ]; then
    return 1
  else
    return 0
  fi
}

create_mariadb_db() {
  local DATABASE=$1
  local MYSQL="mysql --host=mariadb --password=${MARIADB_ROOT_PASSWORD}"

  log_info creating database \"${DATABASE}\"
  ${K_MARIADB_DOCKER_RUN} ${MYSQL} -e "CREATE DATABASE ${DATABASE};"
}

create_mariadb_user() {
  local USER=$1
  local PASSWORD=$2
  local DATABASE=$3
  local MYSQL="mysql --host=mariadb --password=${MARIADB_ROOT_PASSWORD}"

  log_info creating user \"${USER}\"
  ${K_MARIADB_DOCKER_RUN} ${MYSQL} -e "GRANT ALL PRIVILEGES ON ${DATABASE}.* TO '${USER}'@'%' IDENTIFIED BY '${PASSWORD}';"
  ${K_MARIADB_DOCKER_RUN} ${MYSQL} -e "FLUSH PRIVILEGES;"
}

drop_mariadb_db() {
  local DATABASE=$1
  local MYSQL="mysql --host=mariadb --password=${MARIADB_ROOT_PASSWORD}"

  log_info droping database \"${DATABASE}\"
  ${K_MARIADB_DOCKER_RUN} ${MYSQL} -e "DROP DATABASE ${DATABASE};"
}

drop_mariadb_user() {
  local USER=$1
  local MYSQL="mysql --host=mariadb --password=${MARIADB_ROOT_PASSWORD}"

  log_info droping user \"${USER}\"
  ${K_MARIADB_DOCKER_RUN} ${MYSQL} -e "DROP USER ${USER}"
}

backup_mariadb_db() {
  local USER=$1
  local PASSWORD=$2
  local DATABASE=$3
  local DIRECTORY=$4
  local DOCKER_RUN="docker run --rm --network=${DOCKER_BACK_NETWORK} --volume=${DIRECTORY}:/tmp ${MARIADB_IMAGE}:${MARIADB_TAG}"
  local BACKUP_FILE=${DATABASE}.gz

  if directory_exists "${DIRECTORY}"; then
    log_info backuping ${DATABASE} 
    ${K_MARIADB_DOCKER_RUN} bash -c "mysqldump --host=mariadb --user=${USER} --password=${PASSWORD} ${DATABASE} | gzip -v > /tmp/${BACKUP_FILE}"
    if ! file_exists "${DIRECTORY}/${BACKUP_FILE}"; then
      log_error an error has occured while dumping \"${DATABASE}\"
    fi
  else
    log_error the specified directory \"${DIRECTORY}\" does not exist
  fi
}

restore_mariadb_db() {
  local USER=$1
  local PASSWORD=$2
  local DATABASE=$3
  local DIRECTORY=$4
  local DOCKER_RUN="docker run --rm --network=${DOCKER_BACK_NETWORK} --volume=${DIRECTORY}:/tmp ${MARIADB_IMAGE}:${MARIADB_TAG}"
  local BACKUP_FILE=${DATABASE}.gz

  if file_exists "${DIRECTORY}/${BACKUP_FILE}"; then
    log_info restoring ${DATABASE}
    ${K_MARIADB_DOCKER_RUN} bash -c "gunzip < /tmp/${DATABASE}.gz | mysql --user=${USER} --password=${PASSWORD} ${DATABASE}"
  else
    log_error the specified backup file \"${DIRECTORY}/${BACKUP_FILE}\" does not exist
  fi
}
