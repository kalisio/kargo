#!/bin/bash

# Build express-gateway
if [ $1 == "express-gateway" ]; then
  EXPRESS_GATEWAY_VERSION=1.16.9
  pushd build/express-gateway
  docker build --force-rm --build-arg TAG=$EXPRESS_GATEWAY_VERSION -f dockerfile -t kalisio/express-gateway:$EXPRESS_GATEWAY_VERSION .
  RESULT_CODE=$?
  if [ $RESULT_CODE -ne 0 ]; then
    echo "express-gateway generation failed [error: $RESULT_CODE]"
    exit 1
  fi
  docker login -u="$DOCKER_USER" -p="$DOCKER_PASSWORD"
  docker push kalisio/express-gateway:$EXPRESS_GATEWAY_VERSION
  popd
fi

# Build Maputnik
if [ $1 == "maputnik" ]; then
  MAPUTNIK_VERSION=1.6.1
  pushd build/maputnik
  docker build --force-rm --build-arg VERSION=v$MAPUTNIK_VERSION -f dockerfile -t kalisio/maputnik:$MAPUTNIK_VERSION .
  RESULT_CODE=$?
  if [ $RESULT_CODE -ne 0 ]; then
    echo "Maputnik generation failed [error: $RESULT_CODE]"
    exit 1
  fi
  docker login -u="$DOCKER_USER" -p="$DOCKER_PASSWORD"
  docker push kalisio/maputnik:$MAPUTNIK_VERSION
  popd
fi

# Build MapProxy
if [ $1 == "mapproxy" ]; then
  MAPPROXY_VERSION=1.12.0
  pushd build/mapproxy
  docker build --force-rm --build-arg VERSION=$MAPPROXY_VERSION -f dockerfile -t kalisio/mapproxy:$MAPPROXY_VERSION .
  RESULT_CODE=$?
  if [ $RESULT_CODE -ne 0 ]; then
    echo "MapProxy generation failed [error: $RESULT_CODE]"
    exit 1
  fi
  docker login -u="$DOCKER_USER" -p="$DOCKER_PASSWORD"
  docker push kalisio/mapproxy:$MAPPROXY_VERSION
  popd
fi