#!/bin/bash
cd maputnik
docker build --pull --build-arg VERSION=$MAPUTNIK_TAG -f dockerfile -t maputnik:$MAPUTNIK_TAG .
docker tag maputnik:$MAPUTNIK_TAG 127.0.0.1:5000/maputnik:$MAPUTNIK_TAG
docker push 127.0.0.1:5000/maputnik:$MAPUTNIK_TAG

