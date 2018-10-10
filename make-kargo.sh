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
else
mkdir .kargo

cp -R deploy .kargo/deploy
cp -R configs .kargo/deploy
cp -R "$WORKSPACE" .kargo/.
