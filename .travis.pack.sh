#!/bin/bash
set -euxo pipefail

COMMIT_MESSAGE=$1
REGEXP=".*\[pack ([^[:space:]]+)\]"

echo $COMMIT_MESSAGE

# Check whether to pack all charts in dev or pack only one chart with the true version
if [[ $COMMIT_MESSAGE =~ $REGEXP ]]; then
  CHARTS=$(echo ${BASH_REMATCH[1]} | tr ',' ' ')
  OPTIONS=""
else
  CHARTS=`ls charts`
  OPTIONS="--version 0.0.0-dev"
fi

# Configure rclone
mkdir -p $HOME/.config/rclone
envsubst < rclone.conf.tpl > $HOME/.config/rclone/rclone.conf

# Retrieve the repo index
mkdir repo
rclone copy charts:index.yaml repo

# Declare the external repos
helm repo add bitnami https://charts.bitnami.com/bitnami

# Pack the charts
for CHART in $CHARTS; do
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
helm repo index . --merge index.yaml

# Update the repo
rclone copy . charts:
