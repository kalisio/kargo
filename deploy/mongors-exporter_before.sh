#!/bin/bash

envsubst '${MONGORS_NAME}' < deploy/mongors-exporter.yml.tpl > deploy/mongors-exporter.yml

# add prometheus scrape job
cat <<EOT >> configs/prometheus/prometheus.yml
  - job_name: 'mongodb'
    static_configs:
      - targets: [ '${MONGORS_NAME}0-exporter:9216', '${MONGORS_NAME}1-exporter:9216', '${MONGORS_NAME}2-exporter:9216' ]
EOT
