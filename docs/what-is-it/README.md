---
sidebar: auto
---

# What is it ?

**Kargo** allows you to deliver your own data in a few minutes using Geospatial Open Standards such as [WMS](http://www.opengeospatial.org/standards/wms), [WMTS](http://www.opengeospatial.org/standards/wmts), [WCS](http://www.opengeospatial.org/standards/wcs), [WFS](http://www.opengeospatial.org/standards/wfs)... Indeed, **Kargo** relies on well known Open Source geospatial solutions to take advantage of their strongest features:

1. [PostGis](http://postgis.net/)
2. [GeoServer](http://geoserver.org/)
3. [MapProxy](https://mapproxy.org/)
4. [TileServer-GL](http://tileserver.org/)

In addition, **Kargo** lets you deploy [Krawler](https://kalisio.github.io/krawler/) based services:

1. [vigicrues](https://github.com/kalisio/k-vigicrues): a service to download data from French flood warning system [Vigicrues](https://www.vigicrues.gouv.fr/)
2. [teleray](https://github.com/kalisio/k-teleray): a service to download from the French gamma dose rate alert network [TELERAY](http://teleray.irsn.fr/aide.htm#mappage)

**Kargo** is designed to be deployed on [Docker](https://www.docker.com/) based infrastructures and especially on [Swarm mode](https://docs.docker.com/engine/swarm/). Moreover, **Kargo** let you take advantages of using [Traefik](https://traefik.io/) to route the internet traffic to your geospatial infrastructure. 

::: tip
Benefit from [Kaabah](https://kalisio.github.io/kaabah/) to create your infrastructure and manage your platform of services with ease.
:::

![kargo-overview](./../assets/kargo-overview.svg)

::: tip Sponsored by Kalisio
**Kargo** was initiated by [Kalisio](https://kalisio.com) to provide us with the necessary Geospatial Services we need to support our development.<br/><br/>
![kalisio](https://s3.eu-central-1.amazonaws.com/kalisioscope/kalisio/kalisio-logo-black-256x84.png)<br/>
*Unleashing the potential of spatial information*
::: 
