#!/bin/bash
if [[ ! "$1" =~ ^(apps|dbs|weacast|vigicrues|jobs|seeder)$ ]]; then
  echo "usage: remove-stack.sh <apps|dbs|weacast|vigicrues|jobs|seeder>"
  exit 1
fi

docker stack rm kargo-$1



