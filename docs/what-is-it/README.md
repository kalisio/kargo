---
sidebar: auto
---

# What is it ?

**Kargo** offers the capabilities to let you design, build and operate a Geospatial infrastructure on server cluster. 
Rather than imposing an architecture, Kargo allows you to design the infrastructure that fits your needs and gives you all the necessary tools to implement it. 

Indeed, **Kargo** relies on the ease of [Docker Swarm](https://docs.docker.com/swarm/overview/) to deploy and operate your services on the cluster and is shipped with a set of **Compose files** to let you choose the services or applications you want to deploy. Of course, most of the well-known Open Source solutions ([MapServer](https://mapserver.org/), [GeoServer](http://geoserver.org), [PostGis](http://postgis.net/)...) can be easily deployed allowing you to deliver your data using Geospatial Open Standards services such as [WMS](http://www.opengeospatial.org/standards/wms), [WMTS](http://www.opengeospatial.org/standards/wmts), [WCS](http://www.opengeospatial.org/standards/wcs), [WFS](http://www.opengeospatial.org/standards/wfs)... 

But even more, **Kargo** provides the easiest way to deploy [Weacast](https://weacast.gitbooks.io/weacast-docs/) services and more generally [Krawler](https://kalisio.github.io/krawler/) based services such as [Vigicrues](https://mapserver.org/), [Teleray](ttps://github.com/kalisio/k-teleray), etc.

![kargo-overview](./../assets/kargo-overview.svg)

::: tip Benefit from the Kaabah solution
As mentioned above, **Kargo** is designed to be used on a **Docker Swarm** based infrastructure. If you do not have such an operational infrastructure, you may have a look at [Kabbah](https://kalisio.github.io/kaabah/). In addition to providing you with the means to design and create your own infrastructure, Kaabah also offers tools to facilitate its maintenance.
:::

::: tip Sponsored by Kalisio
**Kargo** was initiated by [Kalisio](https://kalisio.com) to provide us with the necessary tools to manage the different infrastructures we need to support our development.


![kalisio](./../assets/kalisio-banner.png)

*Unleashing the potential of spatial information*
::: 



