---
sidebarDepth: 3
---

# Environment

## Kargo configuration

| Variable | Description | Default value | 
| --- | --- | --- | 
| `DOMAIN` | The domain where to access the services. It should be similar to `kalisio.xyz`. | - |
| `SUBDOMAIN` | The subdomain where to access the service. It should be similar to `kargo.kalisio.xyz`. | - |
| `AUTH_USER` | The authentication identity to access the services. | - |
| `AUTH_PASSWORD` | The authentication password to access the services. It can be encoded in **MD5**, **SHA1** and **BCrypt**: you can use [htpasswd](http://www.htaccesstools.com/htpasswd-generator/) to generate it. | - |
| `SECRET` | The secret key to generate JWT. It used by the applications **KANO** an **WEACAST**. | - |
| `DB_URL` | The common database URL. | - |
| `DOCKER_NETWORK` | The docker network | `kaabah` |
| `S3_ACCESS_KEY` | The key id to access AWS S3 buckets. | - |
| `S3_SECRET_ACCESS_KEY` | The secret key to access AWS S3 buckets | - |
| `STACKS` | The list of stacks to be deployed. | - |

For each stack, there must be such an entry:
- `<name of the stack>_STACK`: The list of services to be deployed within this stack.

## Services configuration

### K2

| Variable | Description | Default value |
| --- | --- | --- |
| `K2_IMAGE` | The image to be used. | `kalisio/kano` |
| `K2_TAG` | The version to be used. | `latest` |
| `K2_DATA_PATH` | The path to the data. |  `/mnt/data0/k2_data` |
| `K2_REPLICAS` | The number of replicas. | `1` |

### Kano

| Variable | Description | Default value |
| --- | --- | --- |
| `KANO_IMAGE` | The image to be used. | `kalisio/kano` |
| `KANO_TAG` | The version to be used. | `0.1.0-dev` |
| `KANO_APP_SECRET` | The app secret used to authenticate a client. | - |
| `KANO_DB_URL` | The database URL where to write the data. | - |
| `KANO_LOG_LEVEL` | The log level of the application. | `verbose` |
| `KANO_DEBUG` | Enable the debug mode. | `` |
| `KANO_REPLICAS` | The number of replicas. | `1` |

### GeoServer

| Variable | Description | Default value |
| --- | --- | --- |
| `GEOSERVER_IMAGE` | The image to be used. | `localhost:5000/geoserver` |
| `GEOSERVER_TAG` | The version to be used. | `2.12.1` |
| `GEOSERVER_PLUGINS` | The plugins to be included. | `"css grib netcdf pyramid vectortiles gdal ogr-wfs printing importer control-flow"` | 
| `GEOSERVER_DATA_PATH` | The path to the data. | `/mnt/data0/geoserver_data` |
| `GEOSERVER_REPLICAS` | The number of replicas. | `1` |

::: warning
The **GeoServer** service is preconfigured to use a local image that must be built using the [build](./cli.md#build) command:
```bash
$kargo build geoserver
```
:::

### MapProxy

| Variable | Description | Default value |
| --- | --- | --- |
| `MAPPROXY_IMAGE` | The image to be used. | `localhost:5000/mapproxy` |
| `MAPPROXY_TAG` | The version to be used. | `1.11.0` |
| `MAPPROXY_DATA_PATH` | The path to the data. | `/mnt/data0/mapproxy_data` |
| `MAPPROXY_CACHE_PATH` | The path to the cache. | `/mnt/data0/mapproxy_cache` |
| `MAPPROXY_REPLICAS` | The number of replicas. | `1` |
| `MAPPROXY_PROCESSES` | The number of daemon processes to be created. | `2` |
| `MAPPROXY_THREADS` | The number of threads to be created in each daemon process to handle the requests | `2` |

::: warning
The **MapProxy** service is preconfigured to use a local image that must be built using the [build](./cli.md#build) command:
```bash
$kargo build mapproxy
```
:::

### MapServer

| Variable | Description | Default value |
| --- | --- | --- |
| `MAPSERVER_IMAGE` | The image to be used. | `localhost:5000/mapserver` |
| `MAPSERVER_TAG` | The version to be used. | `7.2` |
| `MAPSERVER_DATA_PATH` | The path to the data. | `/mnt/data0/mapserver_data` |
| `MAPSERVER_REPLICAS` | The number of replicas. | `1` |

::: warning
The **MapServer** service is preconfigured to use a local image that must be built using the [build](./cli.md#build) command:
```bash
$kargo build mapserver
```
:::

### Maputnik

| Variable | Description | Default value |
| --- | --- | --- |
| `MAPUTNIK_IMAGE` | The image to be used. | `localhost:5000/maputnik` |
| `MAPUTNIK_TAG` | The version to be used. | `1.5.0` |
| `MAPUTNIK_REPLICAS` | The number of replicas. | `1` |

::: warning
The **Maputnik** application is preconfigured to use a local image that must be built using the [build](./cli.md#build) command:
```bash
$kargo build maputnik
```
:::

### MongoDB

| Variable | Description | Default value |
| --- | --- | --- |
| `MONGODB_IMAGE` | The image to be used. | `mongo` |
| `MONGODB_TAG` | The version to be used. | `3.6.5` |
| `MONGODB_DATABASE` | The database name. | `kargo` |

### OpenAQ

| Variable | Description | Default value |
| --- | --- | --- |
| `OPENAQ_IMAGE` | The image to be used. | `kalisio/k-openaq` |
| `OPENAQ_TAG` | The version to be used. | `latest` |
| `OPENAQ_DB_URL` | The database URL where to write the data. | - |

### PostGis

| Variable | Description | Default value |
| --- | --- | --- |
| `POSTGIS_IMAGE` | The image to be used. | `mdillon/postgis` |
| `POSTGIS_TAG` | The version to be used. | `9.6-alpine` |
| `POSTGIS_USER` | The POSTGRES user. | `postgres` |
| `POSTGIS_PASSWORD` | The POSTGRES user's password. | `postgres` |
| `POSTGIS_DATA_PATH` | The path to the database. | `/mnt/data0/postgis_data` |

### Seeder

| Variable | Description | Default value |
| --- | --- | --- |
| `SEEDER_IMAGE` | The image to be used. | `kalisio/k-seeder` |
| `SEEDER_TAG` | The version to be used. | `latest` |
| `SEEDER_CONFIG_PATH` | The path to the seeder configuration. | `/home/ubuntu/kargo/.kargo/configs/seeder` |
| `SEEDER_MAPPROXY_CONFIG_PATH` | The path to the **MapProxy** configuration. | `/home/ubuntu/kargo/.kargo/configs/mapproxy` |

### Teleray

| Variable | Description | Default value |
| --- | --- | --- |
| `TELERAY_IMAGE` | The image to be used. | `kalisio/k-teleray` |
| `TELERAY_TAG` | The version to be used. | `0.1.0` |
| `TELERAY_DB_URL` | The database URL where to write the data. | - |

### Thredds

| Variable | Description | Default value |
| --- | --- | --- |
| `THREDDS_IMAGE` | The image to be used.| `unidata/thredds-docker` |
| `THREDDS_TAG` | The version to be used. | `4.6.11` |
| `THREDDS_DATA_PATH` | The path to the data. | `/mnt/data0/thredds_data` |
| `THREDDS_CACHE_PATH` | The path to the cache. | `/mnt/data0/thredds_cache` |
| `THREDDS_REPLICAS` | The number of replicas. | `1` |
| `THREDDS_XMX_SIZE` | JVM Max Heap Size (xmx). | `4G` |
| `THREDDS_XMS_SIZE` | JVM Min Heap Size (xms). | `4G` |

### TileServer GL

| Variable | Description | Default value |
| --- | --- | --- |
| `TILESERVERGL_IMAGE` | The image to be used. | `klokantech/tileserver-gl` |
| `TILESERVERGL_TAG` | The version to be used. | `v2.4.0` |
| `TILESERVERGL_DATA_PATH` | The path to the data. | `/mnt/data0/tileservergl_data` |
| `TILESERVERGL_REPLICAS` | The number of replicas. | `1` |

### Vigicrues

| Variable | Description | Default value |
| --- | --- | --- |
| `VIGICRUES_IMAGE` | The image to be used. | `kalisio/k-vigicrues` |
| `VIGICRUES_STATIONS_TAG` | The version of the image to be used for scraping the stations. | `latest` |
| `VIGICRUES_SECTIONS_TAG` | The version of the image to be used for scraping the sections. | `lastest` |
| `VIGICRUES_OBSERVATIONS_TAG` | The version of the image to be used for scraping the observations. | `latest` |
| `VIGICRUES_DB_URL` | The database URL where to write the data. | - |

### Weacast

| Variable | Description | Default value |
| --- | --- | --- |
| `WEACAST_IMAGE` | The image to be used. | `weacast/weacast-api` |
| `WEACAST_TAG` | The version to be used. | `dev` |
| `WEACAST_APP_SECRET` | The app secret used to authenticate a client. | - |
| `WEACAST_DB_URL` | The database URL where to write the data. | - |
| `WEACAST_LOG_LEVEL` | The log level of the application. | `verbose` |
| `WEACAST_DEBUG` | Enable the debug mode. | `` |
| `WEACAST_REPLICAS` | The number of replicas. | `1` |

### Weacast-loaders

| Variable | Description | Default value |
| --- | --- | --- |
| `WEACAST_MODELS` | The list of models to be downloaded. | `"arpege-world arpege-europe arome-france gfs-world"` |
| `WEACAST_LOADERS_TAG` | A default tag value.  | `latest` |
| `WEACAST_LOADERS_DB_URL` | The database URL where to write the data. | - |
| `ARPEGE_WOLRD_LOADER_IMAGE` | The image to be used to scrape Arpege World data. | `localhost:5000/arpege-world-loader` |
| `ARPEGE_WORLD_LOADER_TAG` | The tag of the image to be used to scrape Arpege World data. | `latest` |
| `ARPEGE_EUROPE_LOADER_IMAGE` | The image to be used to scrape Arpege Europe data. | `localhost:5000/arpege-europe-loader` |
| `ARPEGE_EUROPE_LOADER_TAG` | The tag of the image to be used to scrape Arpege Europe data. | `latest` |
| `AROME_FRANCE_LOADER_IMAGE` | The image to be used to scrape Arome France data. | `localhost:5000/arome-france-loader` |
| `AROME_FRANCE_LOADER_TAG` | The tag of the image to be used to scrape Arome France World data. | `latest` |
| `AROME_FRANCE_HIGH_LOADER_IMAGE` | The image to be used to scrape Arome France data. | `localhost:5000/arome-france-loader` |
| `AROME_FRANCE_HIGH_LOADER_TAG` | The tag of the image to be used to scrape Arome France World data. | `latest` |
| `GFS_WORLD_LOADER_IMAGE` | The image to be used to scrape GFS World data. | `localhost:5000/gfs-world-loader` |
| `GFS_WORLD_LOADER_TAG` | The tag of the image to be used to scrape Arpege World data. | `latest` |

::: warning
The **Weacast loaders** are preconfigured to use a local image that must be built using the [build](./cli.md#build) command:
```bash
$kargo build weacast-loaders
```
:::