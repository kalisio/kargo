#!/bin/bash
cd maputnik
docker build --pull --build-arg VERSION=$MAPUTNIK_TAG -f dockerfile -t localhost:5000/maputnik:$MAPUTNIK_TAG .
docker push localhost:5000/maputnik:$MAPUTNIK_TAG

