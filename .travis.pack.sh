#!/bin/bash
set -euxo pipefail

COMMIT_MESSAGE=$1
REGEXP=".*\[pack ([^[:space:]]+)\]"

if [[ $COMMIT_MESSAGE =~ $REGEXP ]]; then
  ONLY_CHART=${BASH_REMATCH[1]}
fi

# Configure rclone
mkdir -p $HOME/.config/rclone
envsubst < rclone.conf.tpl > $HOME/.config/rclone/rclone.conf

# Retrieve the repo
rclone copy s3-host:/kalisio-charts repo

# Declare the external repos
helm repo add bitnami https://charts.bitnami.com/bitnami

# Define the chart list
if [ -z "$ONLY_CHART" ]; then
  CHARTS=`ls charts`
  OPTIONS="--version 0.0.0-dev"
else
  CHARTS=$ONLY_CHART
  OPTIONS=""
fi

# Pack the charts
for CHART in `ls charts`; do
  echo -e "\n[KARGO] processing chart $CHART"
  helm dependencies update charts/$CHART
  helm lint charts/$CHART
  if [ $? != 0 ]; then
    exit 1
  fi
  helm package charts/$CHART -d repo $OPTIONS
  if [ $? != 0 ]; then
    exit 1
  fi
done

# Reindex the repo
cd repo
helm repo index .

# Update the repo
rclone purge s3-host:/kalisio-charts
rclone copy . s3-host:/kalisio-charts
