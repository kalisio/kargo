---
sidebar: auto
---

#  How does it work ?

**kargo** consists in a docker based (Compose or Swarm) solution which allows you to set up and deploy the following geospatial web applications: 

1. [**PostGis**](http://postgis.net/): https://hub.docker.com/r/mdillon/postgis/
2. [**GeoServer**](http://geoserver.org/): **Kargo** provides its own Dockerfile to build GeoServer
3. [**MapProxy**](https://mapproxy.org/): https://hub.docker.com/r/yagajs/mapproxy/
4. [**TileServer-GL**](http://tileserver.org/): https://hub.docker.com/r/klokantech/tileserver-gl/

The diagram below illustrates how the containers interact:

![Kargo overview](./../assets/kargo-diagram.png)