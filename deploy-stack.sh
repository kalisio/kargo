#!/bin/bash
if [[ ! "$1" =~ ^(apps|dbs|weacast|vigicrues|jobs)$ ]]; then
  echo "usage: deploy-stack.sh <apps|dbs|weacast|vigicrues|jobs>"
  exit 1
fi

cd .kargo

set -a
. ./.env
set +a

# Check whether the network exist or not.
EXISTING_DOCKER_NETWORK=`docker network ls | grep $DOCKER_NETWORK`
if [ "$EXISTING_DOCKER_NETWORK" = "" ]; then
  docker network create -d overlay --attachable $DOCKER_NETWORK
fi

STACK_NAME=${1^^}_STACK
STACK=${!STACK_NAME}

# Deploy the required services only
SERVICES_TO_DEPLOY=
for SERVICE in $STACK; do
  SERVICES_TO_DEPLOY="$SERVICES_TO_DEPLOY -c deploy/$SERVICE.yml"
  SERVICE_EXTENSION_NAME=${SERVICE^^}_EXTENSION
  SERVICE_EXTENSION=${!SERVICE_EXTENSION_NAME}
  if [ "$SERVICE_EXTENSION" != "" ]; then
    SERVICES_TO_DEPLOY="$SERVICES_TO_DEPLOY -c deploy/$SERVICE_EXTENSION.yml"
  fi
done
docker stack deploy $SERVICES_TO_DEPLOY kargo-$1

