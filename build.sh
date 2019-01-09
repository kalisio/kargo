#!/bin/bash
cd .kargo
set -a
. ./.env
set +a
cd ..

echo Building $1

cd build
source ./$1.sh
cd ..
