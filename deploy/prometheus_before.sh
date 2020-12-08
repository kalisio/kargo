#!/bin/bash

cp configs/prometheus/prometheus.config configs/prometheus/prometheus.yml
for TARGET in $PROMETHEUS_TARGETS; do
  echo adding $TARGET target
  yq m -i -a append configs/prometheus/prometheus.yml configs/prometheus/targets/$TARGET.yml
done
