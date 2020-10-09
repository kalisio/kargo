#!/bin/bash

LAYER=$1
  
echo Clearing $LAYER
k-worker-foreach -c "sudo rm -fr $MAPCACHE_DATA_PATH/$LAYER/GLOBAL_WEBMERCATOR"
