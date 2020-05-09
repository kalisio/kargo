#!/bin/bash

build_and_push()
{
  TOOL=$1
  TAG=$2
  pushd build/$TOOL
  docker build --force-rm --build-arg VERSION=$TAG -f dockerfile -t kalisio/$TOOL:$TAG .
  RESULT_CODE=$?
  if [ $RESULT_CODE -ne 0 ]; then
    echo "$TOOL generation failed [error: $RESULT_CODE]"
    exit 1
  fi
  docker login -u="$DOCKER_USER" -p="$DOCKER_PASSWORD"
  docker push kalisio/$TOOL:$TAG
  popd
}

# Build express-gateway
if [ $1 == "express-gateway" ]; then
  build_and_push express-gateway 1.16.9
fi

# Build Maputnik
if [ $1 == "maputnik" ]; then
  build_and_push maputnik 1.6.1
fi

# Build MapProxy
if [ $1 == "mapproxy" ]; then
  build_and_push mapproxy 1.12.0
fi

# Build Artillery
if [ $1 == "artillery" ]; then
  build_and_push artillery 1.6.0
fi

# Build GDAL
if [ $1 == "gdal" ]; then
  build_and_push gdal 2.4.0
fi