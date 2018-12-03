#!/bin/bash
cd .kargo

set -a
. ./.env
set +a

# Retrieve the list of stacks
if [[ ! $STACKS =~ (^| )$1($| ) ]]; then
  ARGS=($STACKS)
  NB_ARGS=${#ARGS[*]}
  USAGE="usage: deploy-stack.sh <${ARGS[0]}"
  for (( i=1; i<=$(( $NB_ARGS -1 )); i++ )); do
    USAGE="$USAGE$|${ARGS[$i]}"
  done
  USAGE="$USAGE>"
  echo $USAGE
  exit 1
fi

docker stack rm kargo-$1



