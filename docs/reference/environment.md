# Environment

## Kargo configuration

| Variable | Description |
| --- | --- |
| `DOMAIN` | The domain where to access the services. It should be similar to `kalisio.xyz` |
| `SUBDOMAIN` | The subdomain where to access the service. It should be similar to `kargo.kalisio.xyz` |
| `AUTH_USER` | The authentication identity to access the services. | 
| `AUTH_PASSWORD` | The authentication password to access the services. It can be encoded in **MD5**, **SHA1** and **BCrypt**: you can use [htpasswd](http://www.htaccesstools.com/htpasswd-generator/) to generate it. |
| `SECRET` | The secret key to generate JWT. It used by the applications **KANO** an **WEACAST** |
| `DB_URL` | The common database URL. Default value is `DB_URL=mongodb://mongodb:27017/kargo` |
| `DOCKER_NETWORK` | The docker network. Default value is `kaabah` |
| `DOCKER_HOST_IP` | The private IP address of the Swarm manager. |
| `DOCKER_HOST_PORT` | The port to get connected to the Docker engine. Default value is `2376` |
| `DOCKER_CERT_PATH` | The path where to retrieve the certificates to get connected to the Docker engine. Default value is `/home/ubuntu/.docker` |
| `S3_ACCESS_KEY` | The key id to access AWS S3 buckets. |
| `S3_SECRET_ACCESS_KEY` | The secret key to access AWS S3 buckets |
| `STACKS` | The list of stacks to be deployed. |

For each stack, there must be such an entry:
| `<name of the stack>_STACK` | The list of service to be deployed for each stack. |

## Services configuration

### Kano

| Variable | Description |
| --- | --- |
| `KANO_IMAGE` | The image to be used. Default value is `kalisio/kano` |
| `KANO_TAG` | The version to be used. Default value is `latest` |
| `KANO_APP_SECRET` | The app secret used to authenticate a client. The default value is `$SECRET` |
| `KANO_DB_URL` | The database URL where to write the data. Default value is `$DB_URL` |
| `KANO_LOG_LEVEL` | The log level of the application. Default value is `verbose` |
| `KANO_DEBUG` | Enable the debug mode. Default value is `` |
| `KANO_REPLICAS` | The number of replicas. Default value is `1` |

### GeoServer

| Variable | Description |
| --- | --- |
| `GEOSERVER_IMAGE` | The image to be used. Default value is `localhost:5000/geoserver` |
| `GEOSERVER_TAG` | The version to be used. Default value is `2.12.1` |
| `GEOSERVER_PLUGINS` | The plugins to be included. Default value is `"css grib netcdf pyramid vectortiles gdal ogr-wfs printing importer control-flow"` | 
| `GEOSERVER_DATA_PATH` | The path to the mount volume where to store the data. Default value is `/mnt/data0/geoserver_data` |
| `GEOSERVER_REPLICAS` | The number of replicas. Default value is `1` |

::: warning
The **GeoServer** service is preconfigured to use a local image that must be built using the [build-service.sh](./cli.md#build-service) command.
:::

### MapProxy

| Variable | Description |
| --- | --- |
| `MAPPROXY_IMAGE` | The image to be used. Default value is `localhost:5000/mapproxy` |
| `MAPPROXY_TAG` | The version to be used. Default value is `2.12.1` |
| `MAPPROXY_DATA_PATH` | The path to the mount volume where to store the data. Default value is `/mnt/data0/mapproxy_data` |
| `MAPPROXY_CACHE_PATH` | The path to the mount volume where to cache the data. Default value is `/mnt/data0/mapproxy_cache` |
| `MAPPROXY_REPLICAS` | The number of replicas. Default value is `1` |

::: warning
The **MapProxy** service is preconfigured to use a local image that must be built using the [build-service.sh](./cli.md#build-service) command.
:::

## MongoDB

| Variable | Description |
| --- | --- |
| `MONGO_IMAGE` | The image to be used. Default value is `mongo` |
| `MONGO_TAG` | The version to be used. Default value is `3.6.5` |

## OpenAQ

| Variable | Description |
| --- | --- |
| `OPENAQ_IMAGE` | The image to be used. Default value is `kalisio/k-openaq` |
| `OPENAQ_TAG` | The version to be used. Default value is `latest` |
| `OPENAQ_DB_URL` | The database URL where to write the data. Default value is `$DB_URL`  |

## PostGis

| Variable | Description |
| --- | --- |
| `POSTGIS_IMAGE` | The image to be used. Default value is `mdillon/postgis` |
| `POSTGIS_TAG` | The version to be used. Default value is `9.6-alpine` |
| `POSTGRES_USER` | The POSTGRES user. Default value is `postgres` |
| `POSTGRES_PASSWORD` | The POSTGRES user's password. Default value is `postgres` |

## Seeder

| Variable | Description |
| --- | --- |
| `SEEDER_IMAGE` | The image to be used. Default value is `kalisio/k-seeder` |
| `SEEDER_TAG` | The version to be used. Default value is `latest` |

## Teleray

| Variable | Description |
| --- | --- |
| `TELERAY_IMAGE` | The image to be used. Default value is `kalisio/k-teleray` |
| `TELERAY_TAG` | The version to be used. Default value is `0.1.0` |
| `TELERAY_S3_BUCKET` | The S3 bucket where to store the data. Default value is `kargo` |

## Thredds

| Variable | Description |
| --- | --- |
| `THREDDS_IMAGE` | The image to be used. Default value is `unidata/thredds-docker` |
| `THREDDS_TAG` | The version to be used. Default value is `4.6.11` |
| `THREDDS_DATA_PATH` | The path to the mount volume where to store the data. Default value is `/mnt/data0/thredds_data` |
| `THREDDS_CACHE_PATH` | The path to the mount volume where to cache the data. Default value is `/mnt/data0/thredds_cache` |
| `THREDDS_REPLICAS` | The number of replicas. Default value is `1` |
| `THREDDS_XMX_SIZE` | JVM Max Heap Size (xmx). Default value is `4G`. |
| `THREDDS_XMS_SIZE` | JVM Min Heap Size (xms). Default value is `4G`. |

## TileServer GL

| Variable | Description |
| --- | --- |
| `TILESERVERGL_IMAGE` | The image to be used. Default value is `klokantech/tileserver-gl` |
| `TILESERVERGL_TAG` | The version to be used. Default value is `v2.3.1` |
| `TILESERVERGL_DATA_PATH` | The path to the mount volume where to store the data. Default value is `/mnt/data0/tileservergl_data` |
| `TILESERVERGL_REPLICAS` | The number of replicas. Default value is `1` |

## Vigicrues

| Variable | Description |
| --- | --- |
| `VIGICRUES_IMAGE` | The image to be used. Default value is `kalisio/k-vigicrues` |
| `VIGICRUES_STATIONS_TAG` | The version of the image to be used for scraping the stations. Default value is `0.1.0` |
| `VIGICRUES_SECTIONS_TAG` | The version of the image to be used for scraping the sections. Default value is `0.1.0` |
| `VIGICRUES_OBSERVATIONS_TAG` | The version of the image to be used for scraping the observations. Default value is `0.1.0` |
| `VIGICRUES_DATA_PATH` | The path to the mount volume where to store the data. Default value is `/mnt/data0/vigicrues_data` |
| `VIGICRUES_DB_URL` | The database URL where to write the data. Default value is `$DB_URL`  |

## Weacast

| Variable | Description |
| --- | --- |
| `WEACAST_IMAGE` | The image to be used. Default value is `weacast/weacast-dev` |
| `WEACAST_TAG` | The version to be used. Default value is `latest` |
| `WEACAST_APP_SECRET` | The app secret used to authenticate a client. The default value is `$SECRET` |
| `WEACAST_DB_URL` | The database URL where to write the data. Default value is `$DB_URL` |
| `WEACAST_LOG_LEVEL` | The log level of the application. Default value is `verbose` |
| `WEACAST_DEBUG` | Enable the debug mode. Default value is `` |
| `WEACAST_REPLICAS` | The number of replicas. Default value is `1` |

## Weacast-loaders

| Variable | Description |
| --- | --- |
| `WEACAST_MODELS` | The list of models to be downloaded. Default value is `"arpege-world arpege-europe arome-france gfs-world"` |
| `WEACAST_LOADERS_TAG` | A default tag value.  Default value is `latest` |
| `WEACAST_LOADERS_DB_URL` | The database URL where to write the data. Default value is `$DB_URL`  |
| `ARPEGE_WOLRD_LOADER_IMAGE` | The image to be used to scrape Arpege World data. Default value is `localhost:5000/arpege-world-loader` |
| `ARPEGE_WORLD_LOADER_TAG` | The tag of the image to be used to scrape Arpege World data. Default value is `$WEACAST_LOADERS_TAG` |
| `ARPEGE_EUROPE_LOADER_IMAGE` | The image to be used to scrape Arpege Europe data. Default value is `localhost:5000/arpege-europe-loader` |
| `ARPEGE_EUROPE_LOADER_TAG` | The tag of the image to be used to scrape Arpege Europe data. Default value is `$WEACAST_LOADERS_TAG` |
| `AROME_FRANCE_LOADER_IMAGE` | The image to be used to scrape Arome France data. Default value is `localhost:5000/arome-france-loader` |
| `AROME_FRANCE_LOADER_TAG` | The tag of the image to be used to scrape Arome France World data. Default value is `$WEACAST_LOADERS_TAG` |
| `GFS_WORLD_LOADER_IMAGE` | The image to be used to scrape GFS World data. Default value is `localhost:5000/gfs-world-loader` |
| `GFS_WORLD_LOADER_TAG` | The tag of the image to be used to scrape Arpege World data. Default value is `$WEACAST_LOADERS_TAG` |

