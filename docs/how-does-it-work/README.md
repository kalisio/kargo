---
sidebar: auto
---

#  How does it work ?

## Main concepts

**kargo** consists in a **Docker Swarm** based solution which allows you to set up and deploy a Geospatial infrastructure.

It comes with:
- the **Docker compose files** to use to deploy the services. 
- the **settings of the services** to deploy. Note that, these settings are provided as an example and they should be overridden to match your implementation.
- the **helper scripts** to deploy and remove the services.

## Global overview

![kargo-swarm](./../assets/kargo-swarm.svg)

## What is inside ?

**Kargo** comes with 4 stacks of applications and services:

### The `apps` stack

2. [**GeoServer**](http://geoserver.org/): **Kargo** provides its own Dockerfile to build GeoServer
3. [**MapProxy**](https://mapproxy.org/): https://hub.docker.com/r/yagajs/mapproxy/
4. [**TileServer-GL**](http://tileserver.org/): https://hub.docker.com/r/klokantech/tileserver-gl/

### The `dbs` stack

1. [**PostGis**](http://postgis.net/): https://hub.docker.com/r/mdillon/postgis/
2. [**MongoDB**](https://www.mongodb.com/): https://hub.docker.com/_/mongo/

### The `weacast` stack

### The `jobs` stack

3. [vigicrues](https://github.com/kalisio/k-vigicrues): a service to download data from French flood warning system [Vigicrues](https://www.vigicrues.gouv.fr/)
4. [teleray](https://github.com/kalisio/k-teleray): a service to download from the French gamma dose rate alert network [TELERAY](http://teleray.irsn.fr/aide.htm#mappage)