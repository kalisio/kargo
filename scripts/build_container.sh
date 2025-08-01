#!/usr/bin/env bash
set -euo pipefail
# set -x

# Usage: commit message should look like 'blah blah [build <app> [append_tag]]
# where
#   + <app> (required) should be replaced by the app you want to build (mapcache, tileserver-gl, ...)
#   + [append_tag] (optionnal) should be replaced by a string that'll be appended to the container image tag
#     the script will create. If not provided, defaults to 'latest', for the container images that care.

# Script will exit as soon as a command return an error code (set -e)
# This function will then be called to provide info on which command failed
function __handle_cmd_err() {
    exit_code=$?
    echo "--------------"
    echo "$0: ERR: '$BASH_COMMAND' command was terminated with error code $exit_code, stopping now."
}

# Install the handler
trap __handle_cmd_err ERR

COMMIT_MESSAGE=$1
REGEXP=".*\[build[[:space:]]+([^[:space:]]+)[[:space:]]*([a-zA-Z0-9_-]*)\]"

# Check whether to build
if [[ ! $COMMIT_MESSAGE =~ $REGEXP ]]; then
  echo "$0: Commit message '$COMMIT_MESSAGE' did not trigger container build script, stopping now."
  exit 1
fi

# The container to build
APP=${BASH_REMATCH[1]}
# Something to append to the tag we'll build
APPEND_TAG=${BASH_REMATCH[2]}
# APPEND_TAG defaults to 'latest' if not provided
if [[ -z "$APPEND_TAG" ]]; then APPEND_TAG=latest; fi

# Image name
CONTAINER_NAME=kalisio/$APP
CONTAINER_TAG=
DOCKER_BUILD_OPTS=
DOCKER_CONTEXT=build/$APP
DOCKERFILE_OPT="-f build/$APP/dockerfile"

case "$APP" in
  thredds)
    # Host our own since older versions seem to have vanished from dockerhub
    # We're building from the git repo with no modifications whatsoever so
    # no need to use APPEND_TAG
    SRC_VERSION=4.6.20
    CONTAINER_NAME=kalisio/thredds-docker
    CONTAINER_TAG=$SRC_VERSION
    DOCKER_CONTEXT=https://github.com/kalisio/thredds-docker.git#$SRC_VERSION
    DOCKERFILE_OPT=
    ;;
  express-gateway)
    SRC_VERSION=1.16.9
    DOCKER_BUILD_OPTS="--build-arg VERSION=$SRC_VERSION"
    CONTAINER_TAG=$SRC_VERSION-$APPEND_TAG
    ;;
  mapcache)
    SRC_VERSION=1.10
    DOCKER_BUILD_OPTS="--build-arg VERSION=$SRC_VERSION"
    CONTAINER_TAG=$SRC_VERSION-$APPEND_TAG
    ;;
  mapserver)
    SRC_VERSION=7.4
    DOCKER_BUILD_OPTS="--build-arg VERSION=$SRC_VERSION"
    CONTAINER_TAG=$SRC_VERSION-$APPEND_TAG
    ;;
  maputnik)
    SRC_VERSION=1.6.1
    DOCKER_BUILD_OPTS="--build-arg VERSION=$SRC_VERSION"
    CONTAINER_TAG=$SRC_VERSION-$APPEND_TAG
    ;;
  tileserver-gl)
    SRC_VERSION=v3.1.1
    DOCKER_BUILD_OPTS="--build-arg VERSION=$SRC_VERSION"
    CONTAINER_TAG=$SRC_VERSION-$APPEND_TAG
    ;;
  gdal)
    SRC_VERSION=3.4.0
    DOCKER_BUILD_OPTS="--build-arg VERSION=$SRC_VERSION"
    CONTAINER_TAG=$SRC_VERSION-$APPEND_TAG
    ;;
  mongodb-exporter)
    # We build this one straight from github
    SRC_VERSION=v0.11.2
    DOCKER_CONTEXT=https://github.com/percona/mongodb_exporter.git#$SRC_VERSION
    DOCKERFILE_OPT=
    CONTAINER_TAG=$SRC_VERSION
    ;;
  mongo-express)
    # We build this one straight from github
    SRC_VERSION=v1.1.0-rc-3
    DOCKER_CONTEXT=https://github.com/mongo-express/mongo-express.git#$SRC_VERSION
    DOCKERFILE_OPT=
    CONTAINER_TAG=$SRC_VERSION 
    ;;
  kaptain)
    CONTAINER_TAG=latest
    ;;
  k8s-toolbox)
    CONTAINER_TAG=latest
    ;;
  *)
    echo "$0: '$APP' is an unknown container name, stopping now."
    exit 1
    ;;
esac

if [[ -z "$CONTAINER_NAME" ]]; then
  echo "$0: Container name is empty, stopping now."
  exit 1
fi
if [[ -z "$CONTAINER_TAG" ]]; then
  echo "$0: Container tag is empty, stopping now."
  exit 1
fi

CONTAINER_FULL_TAG=$CONTAINER_NAME:$CONTAINER_TAG
echo "$0: Building container $CONTAINER_FULL_TAG"
echo "$DOCKER_PASSWORD" | docker login --username "$DOCKER_USER" --password-stdin
docker build $DOCKER_BUILD_OPTS --force-rm $DOCKERFILE_OPT -t $CONTAINER_FULL_TAG $DOCKER_CONTEXT
docker push $CONTAINER_FULL_TAG

echo "$0: All good."
