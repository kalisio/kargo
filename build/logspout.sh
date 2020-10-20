#!/bin/bash
cd logspout
docker build --no-cache --pull --force-rm --build-arg VERSION=$LOGSPOUT_TAG -f dockerfile -t $LOGSPOUT_IMAGE:$LOGSPOUT_TAG .
docker push $LOGSPOUT_IMAGE:$LOGSPOUT_TAG
