#!/bin/bash

build_and_push()
{
  TOOL=$1
  VERSION=$2
  CONTEXT=.
  if [ $# -ge 3 ]; then
    CONTEXT=$3
  fi

  echo "Building $TOOL:$VERSION from $CONTEXT"
  pushd build/$TOOL
  docker build --force-rm --build-arg VERSION=$VERSION -f dockerfile -t kalisio/$TOOL:$VERSION $CONTEXT
  RESULT_CODE=$?
  if [ $RESULT_CODE -ne 0 ]; then
    echo "$TOOL generation failed [error: $RESULT_CODE]"
    exit 1
  fi
  docker login -u="$DOCKER_USER" -p="$DOCKER_PASSWORD"
  docker push kalisio/$TOOL:$VERSION
  popd
}

# Build express-gateway
if [ $1 == "express-gateway" ]; then
  build_and_push express-gateway 1.16.9
fi

# Build MapCache
if [ $1 == "mapcache" ]; then 
  build_and_push mapcache 1.10
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
  build_and_push gdal 3.1.2
fi

# Build mongodb-exporter
if [ $1 == "mongodb-exporter" ]; then
  build_and_push mongodb-exporter v0.11.2 https://github.com/percona/mongodb_exporter.git#v0.11.2
fi
