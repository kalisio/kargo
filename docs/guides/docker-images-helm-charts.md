---
sidebarDepth: 3
---

We run docker images through kubernetes, which mean we have some helm chart

# Docker image best practices

* Prefer -slim images as base and use multi stage builds to reduce image sizes
* Make your docker image run as unpriviliged user
  * If it's node based, and using a node image as base, there's a 'node' user (uid 1000) already available
    * Copy app's files using COPY --chown node
    * Make your command run as 'node' user
  * If there's no preinstalled user, create one and use it
* Since it'll run as unpriviliged user, if you need to open ports, make sure they're >= 1024

RUN \
  DEBIAN_FRONTEND=noninteractive && \
  apt-get update && \
  apt-get --no-install-recommends --yes install \
    openjdk-11-jre-headless \
    ca-certificates \
    gdal-bin && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*

RUN \
  yarn global add @weacast/grib2json@${GRIB2JSON_TAG} && \
  chmod a+x /usr/local/share/.config/yarn/global/node_modules/@weacast/grib2json/bin/grib2json && \
  yarn cache clean

# Helm charts best practices

* Define appVersion to the docker image tag it's supposed to pull (no latest in defined charts, latest can be specified using values.yaml in infra definition)
* Include configurable resource requests & limits
* Include configurable security context and put sensible defaults in chart's values.yaml
* If it's being deployed on some preprod infra, then chart version should be at least 1.0.0

# Infrastructure management best practices

* Local charts must not depend on 0.0.0-dev charts when infra is != from staging/dev

# Howto version docker images

* kargo specific container images (tileservergl & friends ...)
  * [build app-name tag]
* kapture yarn release:[major,minor,patch]
* k-hubeau-* yarn release:[major,minor,patch]

# Howto version helm charts

 * [pack] in commit message => will regenerate all 0.0.0-dev charts
 * yarn release:charts:[major,minor,patch] => will make a new tagged release
   * if given a glob patten, will only release matching charts

# Known issues

# Open issues

* would be nice to forbid pushing over a tag that already exists (container, chart), except latest
  * if needed, remove tag from dockerhub, harbor, whatever and then push
* would be nice for charts if touching version makes a release
* document per project how to release
* what if ci fails and is triggered using commit message ?
* what if ci fails and is triggered using version bump in package.json ?
* is it possible to pack a chart using version-SNAPSHOT or something ?
