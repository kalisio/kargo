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
WEACAST_SERVICES_TO_DEPLOY=
for WEACAST_SERVICE in $WEACAST_STACK; do
  WEACAST_SERVICES_TO_DEPLOY="$WEACAST_SERVICES_TO_DEPLOY -c deploy/$WEACAST_SERVICE.yml"
done
docker stack deploy $WEACAST_SERVICES_TO_DEPLOY kargo-weacast


