#!/bin/bash
cd .kargo

set -a
. ./.env
set +a

cd ..

for STACK in $STACKS; do
  echo Deploying $STACK stack
  ./deploy-stack.sh $STACK
done

