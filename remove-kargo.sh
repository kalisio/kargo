#!/bin/bash
cd .kargo

set -a
. ./.env
set +a

cd ..

for STACK in $STACKS; do
  echo Removing $STACK stack
  ./remove-stack.sh $STACK
done
