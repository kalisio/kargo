[![Kargo](https://s3.eu-central-1.amazonaws.com/kalisioscope/kargo/kargo-logo-black-512x168.png)](https://kalisio.github.io/kargo/)

[![Latest Release](https://img.shields.io/github/v/tag/kalisio/kargo?sort=semver&label=latest)](https://github.com/kalisio/kargo/releases)
[![Build Status](https://app.travis-ci.com/kalisio/kargo.svg?branch=master)](https://app.travis-ci.com/kalisio/kargo)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

_A K8S based solution to build and operate Geospatial Platforms_

> [!CAUTION]
> The [Dowker swarm](https://docs.docker.com/engine/swarm/) version is no more supported. 
The latest available version supporting **Docker Swarm** is the [v0.18.0](https://github.com/kalisio/kargo/releases/tag/v0.18.0).

## Helm charts management

The chart management scripts (`release-dev-chart.sh` and `release-chart.sh`) both require :

 * a valid `rclone` configuration, ie. containing a remote/alias named `kalisio_charts` pointing on the object storage bucket path where we backup our charts.
 * an `helm` command able to push on our OCI-based registry, ie. you need to use `helm registry login harbor.portal.kalisio.com/kalisio` and enter the required credentials.

### HOWTO generate chart dev versions

Use the `./scripts/release-dev-chart.sh`. It takes a single parameter, the chart to release. If no parameter is given, it'll release _all_ charts.

The script will package the requested chart(s) then push on our OCI registry and on a backup s3 storage.

### HOWTO make a chart release

 1. Prepare the new chart version, update chart version in $CHART/Chart.yaml
 2. Push your changes to the central repository
 3. Use `./scripts/release-chart.sh $CHART` where $CHART is the name of the chart to release (mapserver, kano, ...)

 The script will package the chart, push on our oci registry and on a backup s3 storage. If everything is ok, it'll make a git tag named `$CHART-$VERSION`

## Docker images management

* kargo specific container images (tileservergl & friends ...)
  * use a commit message including `[build app-name tag]`

## Best practices

### Docker images

* Prefer `-slim` images as base and use multi stage builds to reduce image sizes
* Make your docker image run as unpriviliged user
  * If it's node based, and using a node image as base, there's a 'node' user (uid 1000) already available
    * Copy app's files using COPY --chown node
    * Make your command run as 'node' user
  * If there's no preinstalled user, create one and use it
* Since it'll run as unpriviliged user, if you need to open ports, make sure they're >= 1024
* Snippet to install packages with apt and clean afterwards:
```
RUN \
  DEBIAN_FRONTEND=noninteractive && \
  apt-get update && \
  apt-get --no-install-recommends --yes install \
    openjdk-11-jre-headless \
    ca-certificates \
    gdal-bin && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*
```
* Snippet to install dependencies with yarn and clean afterwards
```
RUN \
  yarn global add @weacast/grib2json@${GRIB2JSON_TAG} && \
  chmod a+x /usr/local/share/.config/yarn/global/node_modules/@weacast/grib2json/bin/grib2json && \
  yarn cache clean
```

### Helm charts

* Define appVersion to the docker image tag it's supposed to pull (no latest in defined charts, latest can be specified using values.yaml in infra definition)
* Include configurable resource requests & limits
* Include configurable security context and put sensible defaults in chart's values.yaml
* If it's being deployed on some preprod infra, then chart version should be at least 1.0.0

## License

This project is licensed under the MIT License - see the [license file](./docs/LICENSE.md) for details

## Authors

This project is sponsored by 

[![Kalisio](https://s3.eu-central-1.amazonaws.com/kalisioscope/kalisio/kalisio-logo-black-256x84.png)](https://kalisio.com)