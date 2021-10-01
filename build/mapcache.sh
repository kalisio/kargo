#!/bin/bash
cd mapcache
docker build --pull --force-rm --build-arg VERSION=$MAPCACHE_TAG -f dockerfile -t localhost:5000/mapcache:$MAPCACHE_TAG .
docker push localhost:5000/mapcache:$MAPCACHE_TAG
