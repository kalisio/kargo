#!/bin/bash

# Usage: build <app> [tag]
# app - the name of the app to be built
# tag - if defined, it uses the app version otherwise it uses latest

COMMIT_MESSAGE=$1
REGEXP=".*\[build[[:space:]]+([^[:space:]]+)[[:space:]]*(tag)?\]"

APP=
TAG=
# Check whether to build 
if [[ $COMMIT_MESSAGE =~ $REGEXP ]]; then
  APP=${BASH_REMATCH[1]}
  TAG=${BASH_REMATCH[2]}
else
  echo Invalid message pattern
  exit 1
fi

VERSION=
CONTEXT="build/$APP"
DOCKERFILE_OPT="-f build/$APP/dockerfile"

case "$APP" in
  express-gateway)
    VERSION=1.16.9
    ;;
  mapcache)
    VERSION=1.10
    ;;
  mapserver)
    VERSION=7.4
    ;;
  maputnik)
    VERSION=1.6.1
    ;;
  tileserver-gl)
    VERSION=v3.1.1
    ;;
  gdal)
    VERSION=3.4.0
    ;;
  monggodb-exporter)
    VERSION=v0.11.2
    CONTEXT=https://github.com/percona/mongodb_exporter.git#v0.11.2
    DOCKERFILE_OPT=""
    ;;
  kaptain)
    VERSION=latest
    ;;
  k8s-toolbox)
    VERSION=latest
    ;;  
  *)
    echo -n "unknown APP"
    ;;
esac

if [ -z $TAG ]; then
  TAG=latest
else
  TAG=$VERSION
fi

if [ -n $VERSION ]; then
  docker login -u="$DOCKER_USER" -p="$DOCKER_PASSWORD"
  echo "Building $APP:$TAG from $CONTEXT" ($VERSION)
  docker build --force-rm --build-arg VERSION=$VERSION $DOCKERFILE_OPT -t kalisio/$APP:$TAG $CONTEXT
  RESULT_CODE=$?
  if [ $RESULT_CODE -ne 0 ]; then
    echo "$APP generation failed [error: $RESULT_CODE]"
    exit 1
  fi
  docker push kalisio/$APP:$TAG
fi
