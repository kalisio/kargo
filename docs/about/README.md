# About

**Kargo** offers the capabilities to let you design, build and operate a geospatial infrastructure on server cluster. 
Rather than imposing an architecture, **Kargo** allows you to design the infrastructure that fits your needs and gives you all the necessary tools to implement it. 

Indeed, **Kargo** relies on the ease of [Docker Swarm](https://docs.docker.com/swarm/overview/) to deploy and operate your services on a **Docker** based cluster. **Kargo** is shipped with a set of tools to help you deploy the services you want to expose. 

Of course, **Kargo** allows you to deploy most of the well-known geospatial Open Source solutions ([MapServer](https://mapserver.org/), [GeoServer](http://geoserver.org), [PostGis](http://postgis.net/)...) enabling you to deliver your data through Open Standards services such as [WMS](http://www.opengeospatial.org/standards/wms), [WMTS](http://www.opengeospatial.org/standards/wmts), [WCS](http://www.opengeospatial.org/standards/wcs), [WFS](http://www.opengeospatial.org/standards/wfs)... 

But even more, **Kargo** provides the easiest way to deploy [Weacast](https://weacast.gitbooks.io/weacast-docs/) services and more generally [Krawler](https://kalisio.github.io/krawler/) based services such as [Vigicrues](https://mapserver.org/), [Téléray](ttps://github.com/kalisio/k-teleray), etc.


![kargo-overview](./../assets/kargo-overview.svg)


**Kargo** has been designed to be highly:
* *Interoperable*: use well known Open Source solutions relying on Web standards and especially on [OGC](http://www.opengeospatial.org/) standards.
* *Flexible*: setup the infrastructure that just fits your requirements
* *Scalable*: scale the infrastructure and the services according your usage
* *Extensible*: fork the repository to add your own stack of services

::: tip Benefit from the Kaabah solution
As mentioned above, **Kargo** is designed to be used on a **Docker Swarm** infrastructure. If you do not have such an operational cluster, you may have a look at [Kaabah](https://kalisio.github.io/kaabah/).
:::

