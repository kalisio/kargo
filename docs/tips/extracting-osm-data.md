# Extracting OpenStreetMap data ?

The generation is based on the [OpenMapTiles](https://github.com/openmaptiles/openmaptiles) project toolbox.

To generate OSM data we start from a fresh Scaleway server with a Docker image, it already contains docker, git, pip, gcc, etc.

::: warning
Git clone using HTTPS instead of git protocol on Scaleway.
::: 

Because you will need a lot of storage here is [how to add a volume](https://www.scaleway.com/docs/attach-and-detach-a-volume-to-an-existing-server/):

``` bash
$mkfs -t ext4 /dev/nbd1
$mkdir -p /mnt/data
$mount /dev/nbd1 /mnt/data
```

To automount it: https://community.online.net/t/automatic-mounting-of-additional-volumes-using-systemd-on-ubuntu/3102

Because some data (eg PG data) are generated in docker volumes it is necessary to [change the default docker location to your volumes](https://forums.docker.com/t/how-do-i-change-the-docker-image-installation-directory/1169).

Rendering the whole planet is a [tricky thing](https://github.com/openmaptiles/openmaptiles/issues/242), so for now we prefer to:
* contribute with a Pull Request to the community maintained open-source official vector tile schema so that the changes will be part of the future public OpenMapTiles releases and maintained
* render only the features needed into a separate MBTiles files with new layers - and combine the standard planet with the extra layers - this is doable easily with JSON GL style and software stack powered by [mapnik](https://mapnik.org/) or [tippecanoe](https://github.com/mapbox/tippecanoe).
* the extra layers can be also generated on demand directly from PostGIS by a third party tile servers and combined into a single map with TileServer GL - and served via composed vector tiles or raster tiles
  * [GeoServer](http://geoserver.org/) as vector/raster tiles
  * [Tegola](https://github.com/terranodo/tegola) directly as MVT
  * [T-Rex](https://github.com/t-rex-tileserver/t-rex) directly as MVT

## Small extracts

For small extractions it's possible to use the [OverPass API](http://overpass-turbo.eu/), eg to extract taxiways/runways in a zone:

```
[out:json][timeout:25];
// gather results
(
  // query part for: “aeroway=runway”
  node["aeroway"="runway"]({{bbox}});
  way["aeroway"="runway"]({{bbox}});
  relation["aeroway"="runway"]({{bbox}});
  // query part for: “aeroway=taxiway”
  node["aeroway"="taxiway"]({{bbox}});
  way["aeroway"="taxiway"]({{bbox}});
  relation["aeroway"="taxiway"]({{bbox}});
);
// print results
out body;
>;
out skel qt;
```

::: tip
Our [Krawler](https://kalisio.github.io/krawler/) solution provides an efficient way to perform an Overpass query and get the result as a GeoJSON collection.
:::

We also use the [quickstart script](https://github.com/openmaptiles/openmaptiles/blob/master/QUICKSTART.md) to generate data (the link contains useful information about required architecture/sizing):

```bash
$git clone https://github.com/openmaptiles/openmaptiles
$cd openmaptiles
$make
$./quickstart.sh france > logs 2>&1 & // could be country, region, etc. but not planet
```

## Global extracts

For a layer covering the planet first download the [whole planet](https://planet.openstreetmap.org/pbf/) in the *data* directory and launch the process:

```bash
$cd data
$wget https://planet.openstreetmap.org/pbf/planet-latest.osm.pbf
$mv planet-latest.osm.pbf planet.osm.pbf
$cd ..
$./quickstart.sh planet > logs 2>&1 &
// To see result
$docker run -it --rm -v /mnt/data/openmaptiles/data:/data -p 80:80 klokantech/tileserver-gl
```

Using a Scaleway C2L configuration (€23.99/month, €0.048/hour, 8 Dedicated X86 64bit Cores, 32GB memory, 250GB Direct SSD, 800Mbit/s Unmetered) processing the `aeroway` layer on the planet takes ~ 16 000 s and 120 GB.

::: tip
Launching the script against the same data set again does not seem to correctly update the generation configuration. 
::: 

You should clean everything before relaunching:

```bash
$make clean-docker
$make forced-clean-sql
$rm -fr data build
$make
```

## Useful links

Here is a list of interesting documentation:
* [Kloklantech thesis](https://eprints.hsr.ch/536/1/thesis_updatable_vector_tiles_from_openstreetmap.pdf) detailing the whole toolchain
* [Tutorial video](http://fuzzytolerance.info/blog/2017/04/25/Generating-your-own-OpenMapTiles/)
* [Mapbox presentation](https://www.youtube.com/watch?v=D7mmXonFIqA&feature=youtu.be)
