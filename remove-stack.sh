#!/bin/bash
if [[ ! "$1" =~ ^(apps|dbs|weacast|jobs)$ ]]; then
  echo "usage: remove-stack.sh <apps|dbs|weacast|jobs>"
  exit 1
fi

docker stack rm kargo-$1



