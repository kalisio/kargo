#!/bin/bash

usage() {
  echo "usage: update-labels <node> <labels>"
}

help() {
  echo "Update the labels of the specified node"
  usage
}

exec() {
  local NODE=$1
  local LABELS=$2
  # Retrieve the existing labels
  local EXISTING_LABELS=`docker node inspect -f '{{ range $k, $v := .Spec.Labels }}{{ $k }}={{ $v }} {{end}}' $NODE`
  # Keep the existing labels if needed
  for EXISTING_LABEL in $EXISTING_LABELS; do
    if [[ ! $NEW_LABELS =~ $EXISTING_LABEL ]]; then
      EXISTING_LABEL_KEY=${EXISTING_LABEL%=*}
      docker node update --label-rm $EXISTING_LABEL_KEY $NODE > /dev/null
    fi
  done
  # Add the label of needed
  for LABEL in $LABELS; do
    if [[ ! $EXISTING_LABELS =~ $LABEL ]]; then
      docker node update --label-add $LABEL $NODE > /dev/null
    fi
  done
}

if [ "$#" -ne 2 ]; then
  echo error: illegal number of arguments
  usage
  exit 1
fi

case $1 in
  -h|--help) help;;
  *) exec "$1" "$2"
esac

