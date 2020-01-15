#!/bin/bash
cd maputnik
docker build --pull --force-rm --build-arg TAG=$MAPUTNIK_TAG -f dockerfile -t localhost:5000/maputnik:$MAPUTNIK_TAG .
docker push localhost:5000/mapserver:$MAPUTNIK_TAG