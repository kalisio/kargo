#!/bin/bash
set -a
. ./.env
set +a

if [ "$WEACAST_MODELS" != "" ]; then
  sh scripts/build-weacast.sh $MANAGER_IP $WEACAST_MODELS 
fi
