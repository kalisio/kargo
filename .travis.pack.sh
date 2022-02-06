#!/bin/bash
set -euxo pipefail

COMMIT_MESSAGE=$1
REGEXP=".*\[pack ([^[:space:]]+)\]"

# Check whether to pack all charts in dev or pack only one chart with the true version
if [[ $COMMIT_MESSAGE =~ $REGEXP ]]; then
  CHARTS=${BASH_REMATCH[1]}
  OPTIONS=""
else
  OCHARTS=`ls charts`
  OPTIONS="--version 0.0.0-dev"
fi

# Configure rclone
mkdir -p $HOME/.config/rclone
envsubst < rclone.conf.tpl > $HOME/.config/rclone/rclone.conf

# Retrieve the repo
rclone copy s3-host:/kalisio-charts repo

# Declare the external repos
helm repo add bitnami https://charts.bitnami.com/bitnami

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
