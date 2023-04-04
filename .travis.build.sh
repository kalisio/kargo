#!/bin/bash
set -euxo pipefail

COMMIT_MESSAGE=$1
APP=`echo ^$COMMIT_MESSAGE | cut -d' ' -f2`

VERSION=
CONTEXT="build/$APP"
DOCKERFILE_OPT="-f build/$APP/dockerfile"

case $APP in
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
  k8s-toolbox
    VERSION=latest
    ;;  
  *)
    echo -n "unknown APP"
    ;;
esac

TAG=`echo ^$COMMIT_MESSAGE | cut -d' ' -f3`
if [ -z $TAG ]; then 
  TAG=latest
else
  TAG=$VERSION
fi

if [ ! z $VERSION ]; then
  docker login -u="$DOCKER_USER" -p="$DOCKER_PASSWORD"
  echo "Building $APP:$VERSION from $CONTEXT"
  docker build --force-rm --build-arg VERSION=$VERSION $DOCKERFILE_OPT -t kalisio/$APP:$TAG $CONTEXT
  RESULT_CODE=$?
  if [ $RESULT_CODE -ne 0 ]; then
    echo "$APP generation failed [error: $RESULT_CODE]"
    exit 1
  fi
  docker push kalisio/$APP:$TAG
fi
