---
sidebar: auto
---

#  How does it work ?

## Main concepts

**kargo** consists in a Docker based solution which allows you to set up and deploy the following geospatial web apps. 

It comes with:
- the **Docker compose files** to use to deploy the services. For each service, **Kargo** define:
  1. a base compose file to be used when running Docker in a normal mode: `<service>.yml` 
  2. a swarm compose file to be used when running Docker in a swarm mode: `<service.swarm.yml`. This file extends the base configuration. Read [this article](https://docs.docker.com/compose/extends/) to get more information on extending services in compose.
- the **settings of the services** to deploy. Note that, these settings are provided as an example and they should be overridden to match your implementation.
- the **helper scripts** to deploy and remove the services.

::: tip
**Kargo** has been mainly designed to be easily deployable on [Kaabah](https://kalisio.github.io/kaabah/) based infrastructures. You should take a look at **Kaabah** if you need to setup an infrastructure.  
:::

## Global overview

Designed to work either on normal mode or swarm mode of Docker, **Kargo** should be flexible enough to be used in different type of infrastructures. It is up to you to define your architecture and to adjust the settings. 

In the following, we present 2 approaches according to whether the infrastructure is in normal mode or swarm mode.

### Normal mode

![kargo-normal](./../assets/kargo-normal.svg)

### Swarm mode

![kargo-swarm](./../assets/kargo-swarm.svg)

## What is inside ?

**Kargo** comes with the following apps and services:

1. [**PostGis**](http://postgis.net/): https://hub.docker.com/r/mdillon/postgis/
2. [**GeoServer**](http://geoserver.org/): **Kargo** provides its own Dockerfile to build GeoServer
3. [**MapProxy**](https://mapproxy.org/): https://hub.docker.com/r/yagajs/mapproxy/
4. [**TileServer-GL**](http://tileserver.org/): https://hub.docker.com/r/klokantech/tileserver-gl/

::: warning
Even if **Kargo** let you deploy a complete stack of services using a single command, we assume you are enough familiar with the underlying applications to be able to customize their configurations in order to address your needs.
:::