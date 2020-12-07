#!/bin/bash

EXISTING_NETWORK=`docker network ls | grep $DOCKER_SOCKET_NETWORK`
if [ -z "$EXISTING_NETWORK" ]; then
  echo creating $DOCKER_SOCKET_NETWORK network
  docker network create -d overlay --attachable $DOCKER_SOCKET_NETWORK
fi