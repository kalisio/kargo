#!/bin/bash

if [ -z "${MONGORS_MEMORY_LIMIT}" ]; then
  echo [mongors] MONGORS_MEMORY_LIMIT variable is mandatory but is not set, stopping now.
  exit 1
fi

envsubst '${MONGORS_NAME}' < deploy/mongors.yml.tpl > deploy/mongors.yml
