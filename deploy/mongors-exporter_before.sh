#!/bin/bash

envsubst '${MONGORS_NAME}' < deploy/mongors-exporter.yml.tpl > deploy/mongors-exporter.yml
