#!/bin/bash
set -a
. ./.env
set +a

# Check whether the network exist or not.
EXISTING_DOCKER_NETWORK=`docker network ls | grep $DOCKER_NETWORK`
if [ "$EXISTING_DOCKER_NETWORK" = "" ]; then
  docker network create -d overlay --attachable $DOCKER_NETWORK
fi

# Deploy the required services only
APP_SERVICES_TO_DEPLOY=
for APP_SERVICE in $APPS_STACK; do
  APP_SERVICES_TO_DEPLOY="$APP_SERVICES_TO_DEPLOY -c deploy/$APP_SERVICE.yml"
done
docker stack deploy $APP_SERVICES_TO_DEPLOY kargo-apps
