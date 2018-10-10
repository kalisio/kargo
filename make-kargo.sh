#!/bin/bash
WORKSPACE=$1

usage()
{
cat << EOF
Makes the kargo platform
usage: make-kargo <workspace>
EOF
}

if [ -z "$WORKSPACE" ]; then
   usage
   exit 1
fi

if [ -d .kargo ]; then
  rm -fr .kargo
fi
mkdir .kargo

cp -R deploy .kargo/deploy
cp -R configs .kargo/configs
cp "$WORKSPACE"/.env .kargo/.

if [ -d "$WORKSPACE"/deploy ]; then
  cp -R "$WORKSPACE"/deploy .kargo/.
fi

if [ -d "$WORKSPACE"/configs ]; then
  cp -R "$WORKSPACE"/configs .kargo/.
fi



