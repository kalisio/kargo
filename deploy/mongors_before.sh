#!/bin/bash

envsubst '${MONGORS_NAME}' < deploy/mongors.yml.tpl > deploy/mongors.yml