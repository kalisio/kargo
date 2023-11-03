[![Kargo](https://s3.eu-central-1.amazonaws.com/kalisioscope/kargo/kargo-logo-black-512x168.png)](https://kalisio.github.io/kargo/)

[![Latest Release](https://img.shields.io/github/v/tag/kalisio/kargo?sort=semver&label=latest)](https://github.com/kalisio/kargo/releases)
[![Build Status](https://app.travis-ci.com/kalisio/kargo.svg?branch=master)](https://app.travis-ci.com/kalisio/kargo)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

_A Docker based solution to build and operate Geospatial Platforms_

## Documentation

The full documentation is available [here](https://kalisio.github.io/kargo/)

> The documentation website is generated using [VuePress](https://vuepress.vuejs.org/)

## Contributing

Found a bug ? Missing a Feature ? Want to contribute ? check out our [contribution guidelines](https://kalisio.github.io/kargo/about/contributing.html) for details

## Authors

This project is sponsored by 

[![Kalisio](https://s3.eu-central-1.amazonaws.com/kalisioscope/kalisio/kalisio-logo-black-256x84.png)](https://kalisio.com)

## License

This project is licensed under the MIT License - see the [license file](./docs/LICENSE.md) for details

## Helm charts management

The chart management scripts (`release-dev-charts.sh` and `release-chart.sh`) both require :

 * a valid `rclone` configuration, ie. containing a remote named `kalisio_charts` pointing on the object storage bucket where we backup our charts.
 * an `helm` command able to push on our OCI-based registry, ie. you need to use `helm registry login harbor.portal.kalisio.com/kalisio` and enter the required credentials.

### HOWTO generate chart dev versions

Use the `./scripts/release-dev-charts.sh`.

The script will package every chart and push on our OCI registry and on a backup s3 storage.

You can also use the `./scripts/release-dev-chart.sh $CHART` to speed up the release of a single chart.

### HOWTO make a chart release

 1. Prepare the new chart version, update chart version in $CHART/Chart.yaml
 2. Push your changes to the central repository
 3. Use `./scripts/release-chart.sh $CHART` where $CHART is the name of the chart to release (mapserver, kano, ...)

 The script will package the chart, push on our oci registry and on a backup s3 storage. If everything is ok, it'll make a git tag named `$CHART-$VERSION`

## Howto version docker images

* kargo specific container images (tileservergl & friends ...)
  * use a commit message including `[build app-name tag]`

## Howto version helm charts

 * [pack] in commit message => will regenerate all 0.0.0-dev charts
 * `yarn release:charts:[major,minor,patch]` => will make a new tagged release
   * if given a glob patten, will only release matching charts

## Best practices

### Docker containers

* Prefer -slim images as base and use multi stage builds to reduce image sizes
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
