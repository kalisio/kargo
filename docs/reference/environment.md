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
| `SECRET` | The secret key to generate JWT. It is mainly used by **Kano**, **Weacast** and **express-gateway** to validate authentication tokens. | - |
| `DB_URL` | The common database URL. | - |
| `DOCKER_NETWORK` | The docker network | `kargo` |
| `S3_ACCESS_KEY` | The key id to access AWS S3 buckets. | - |
| `S3_SECRET_ACCESS_KEY` | The secret key to access AWS S3 buckets | - |
| `HTTP_PROXY` | The address of the proxy server for **HTTP** connections. | - |
| `HTTPS_PROXY` | The address of the proxy server for **HTTPS** connections. | - |
| `NO_PROXY` | A comma-separated list of host names that shouldn't go through any proxy. | - |
| `STACKS` | The list of stacks to be deployed. | - |

For each stack, there must be such an entry:
- `<name of the stack>_STACK`: The list of services to be deployed within this stack.

## Services configuration

### Atlas

| Variable | Description | Default value |
| --- | --- | --- |
| `ATLAS_IMAGE` | The generic image to be used. | `kalisio/k-atlas` |
| `ATLAS_TAG` | The version to be used. | `1.16.9` |
| `ATLAS_ADMIN_EXPRESS_IMAGE` | The image to be used for scraping the **Admin Express** dataset | `${ATLAS_IMAGE}` |
| `ATLAS_ADMIN_EXPRESS_TAG` | The tag of the image  to be used for scraping the **Admin Express** dataset | `admin-express-${ATLAS_TAG}` |
| `ATLAS_ADMIN_EXPRESS_S3_BUCKET`| The S3 bucket where to store **GeoJson** files | `kargo` |
| `ATLAS_ADMIN_EXPRESS_S3_PATH`| The path where to store the **GeoJson** files | `data/IGN/Admin-Express` |
| `ATLAS_ADMIN_EXPRESS_DEBUG` | The namespaces to enable debug output. Set it to `krawler*` to enable full debug output. | `` |

### Express Gateway

| Variable | Description | Default value |
| --- | --- | --- |
| `EXPRESS_GATEWAY_IMAGE` | The image to be used. | `kalisio/express-gateway` |
| `EXPRESS_GATEWAY_TAG` | The version to be used. | `1.16.9` |
| `EXPRESS_GATEWAY_REPLICAS` | The number of replicas. | 1 |
| `EXPRESS_GATEWAY_KEY_SECRET` | A secret that can be used to identify JWT issuer. 

### Grafana

| Variable | Description | Default value |
| --- | --- | --- |
| `GRAFANA_IMAGE` | The image to be used. | `grafana/grafana` |
| `GRAFANA_TAG` | The version to be used. | `6.1.6` |

### Hub'eau

| Variable | Description | Default value |
| --- | --- | --- |
| `HUBEAU_IMAGE` | The image to be used. | `kalisio/k-hubeau` |
| `HUBEAU_TAG` | The tag of the image to be used. | `1.1.0` |
| `HUBEAU_DB_URL` | The database URL where to write the data. | - |
| `HUBEAU_STATIONS_IMAGE` | The image to be used for scraping the stations. | `${HUBEAU_IMAGE}` |
| `HUBEAU_STATIONS_TAG` | The tag of the image to be used for scraping the stations. | `stations-${HUBEAU_TAG}` |
| `HUBEAU_STATIONS_CRON` | The cron expression used to run the job. | `0 0 0 * * *` (every day) |
| `HUBEAU_STATIONS_DEBUG` |The namespaces to enable debug output. Set it to `krawler*` to enable full debug output. | `` |
| `HUBEAU_OBSERVATIONS_IMAGE` | The image to be used for scraping the observations. | `${HUBEAU_IMAGE}` |
| `HUBEAU_OBSERVATIONS_TAG` | The tag of the image to be used for scraping the observations. | `observations-${HUBEAU_TAG}` |
| `HUBEAU_OBSERVATIONS_TTL` | The observations data time to live. It must be expressed in seconds. | `604 800` (7 days) |
| `HUBEAU_OBSERVATIONS_HISTORY` | The duration of the observations data history the job has to download. It must be expressed in milliseconds. | `86 400 000` (1 day) |
| `HUBEAU_OBSERVATIONS_TIMEOUT` | The maximum duration of the observations job. It must be in milliseconds. | `1 800 000` (30 minutes) |
| `HUBEAU_OBSERVATIONS_SUCCESS_RATE` | The success rate of the observations job. | `75%` |
| `HUBEAU_OBSERVATIONS_CRON` | The cron expression used to run the job. | `0 */15 * * * *` (every 15 minutes) |
| `HUBEAU_OBSERVATIONS_DEBUG` | The namespaces to enable debug output. Set it to `krawler*` to enable full debug output. | `` |

### K2

| Variable | Description | Default value |
| --- | --- | --- |
| `K2_IMAGE` | The image to be used. | `kalisio/kano` |
| `K2_TAG` | The version to be used. | `latest` |
| `K2_DATA_PATH` | The path to the data. |  `/mnt/data0/k2_data` |
| `K2_REPLICAS` | The number of replicas. | `1` |
| `K2_DEBUG` |The namespaces to enable debug output. | `` |

### Kano

| Variable | Description | Default value |
| --- | --- | --- |
| `KANO_IMAGE` | The image to be used. | `kalisio/kano` |
| `KANO_TAG` | The version to be used. | `0.1.0-dev` |
| `KANO_APP_SECRET` | The app secret used to authenticate a client. | - |
| `KANO_CESIUM_TOKEN` | The **Cesium** token to be used. | - |
| `KANO_MAPILLARY_CLIENID` | The **Mapillary** Client ID to be used. | - |
| `KANO_DB_URL` | The application database. | - |
| `KANO_DATA_DB_URL` | The database URL used by the services to access the data. | - |
| `KANO_S3_BUCKET` | The S3 bucket used to store the files. | - |
| `KANO_LOG_LEVEL` | The log level of the application. | `verbose` |
| `KANO_DEBUG` | Enable the debug mode. | `` |
| `KANO_REPLICAS` | The number of replicas. | `1` |

### MapProxy

| Variable | Description | Default value |
| --- | --- | --- |
| `MAPPROXY_IMAGE` | The image to be used. | `localhost:5000/mapproxy` |
| `MAPPROXY_TAG` | The version to be used. | `1.12.0` |
| `MAPPROXY_DATA_PATH` | The path to the data. | `/mnt/data0/mapproxy_data` |
| `MAPPROXY_CACHE_PATH` | The path to the cache. | `/mnt/data0/mapproxy_cache` |
| `MAPPROXY_REPLICAS` | The number of replicas. | `1` |

::: warning
The **MapProxy** service is preconfigured to run [Gunicorn](https://gunicorn.org/) with 2 workers and 4 threads.
:::

### MapServer

| Variable | Description | Default value |
| --- | --- | --- |
| `MAPSERVER_IMAGE` | The image to be used. | `kalisio/mapserver` |
| `MAPSERVER_TAG` | The version to be used. | `7.4` |
| `MAPSERVER_DATA_PATH` | The path to the data. | `/mnt/data0/mapserver_data` |
| `MAPSERVER_REPLICAS` | The number of replicas. | `1` |

### Maputnik

| Variable | Description | Default value |
| --- | --- | --- |
| `MAPUTNIK_IMAGE` | The image to be used. | `kalisio/maputnik` |
| `MAPUTNIK_TAG` | The version to be used. | `1.6.1` |
| `MAPUTNIK_REPLICAS` | The number of replicas. | `1` |

### Mgob

| Variable | Description | Default value |
| --- | --- | --- |
| `MGOB_IMAGE` | The image to be used. | `stefanprodan/mgob` |
| `MGOB_TAG` | The version to be used. | `edge` |
| `MGOB_STORAGE_PATH` | The path where to store local backups. | `` |
| `MGOB_RCLONE_PATH` | The path to the **rclone** configuration file. | `` |

### MongoDB

| Variable | Description | Default value |
| --- | --- | --- |
| `MONGODB_IMAGE` | The image to be used. | `mongo` |
| `MONGODB_TAG` | The version to be used. | `3.6.5` |
| `MONGODB_DATABASE` | The database name. | `kargo` |

### Mongo Express

| Variable | Description | Default value |
| --- | --- | --- |
| `MONGO_EXPRESS_IMAGE` | The image to be used. | `mongo-express` |
| `MONGO_EXPRESS_TAG` | The version to be used. | `0.54` |
| `MONGO_EXPRESS_MONGODB_SERVER` | The **MongoDB** server name. | `mongodb` |
| `MONGO_EXPRESS_MONGODB_PORT` | The **MongoDB** port. | `27017` |

### OpenAQ

| Variable | Description | Default value |
| --- | --- | --- |
| `OPENAQ_IMAGE` | The image to be used. | `kalisio/k-openaq` |
| `OPENAQ_TAG` | The version to be used. | `latest` |
| `OPENAQ_DB_URL` | The database URL where to write the data. | - |
| `OPENAQ_CRON` | The cron expression used to run the job. | `0 0 * * * *` (every hour) |
| `OPENAQ_DEBUG` | The namespaces to enable debug output. Set it to `krawler*` to enable full debug output. | `` |

### PostGis

| Variable | Description | Default value |
| --- | --- | --- |
| `POSTGIS_IMAGE` | The image to be used. | `mdillon/postgis` |
| `POSTGIS_TAG` | The version to be used. | `9.6-alpine` |
| `POSTGIS_USER` | The POSTGRES user. | `postgres` |
| `POSTGIS_PASSWORD` | The POSTGRES user's password. | `postgres` |
| `POSTGIS_DATA_PATH` | The path to the database. | `/mnt/data0/postgis_data` |

### Prometheus

| Variable | Description | Default value |
| --- | --- | --- |
| `PROMEHTEUS_IMAGE` | The image to be used. | `mdillon/postgis` |
| `PROMETHEUS_TAG` | The version to be used. | `9.6-alpine` |
| `PROMETHEUS_ALERTMANAGER_IMAGE` | The **Alertmanager** image to be used. | `postgres` |
| `PROMETHEUS_ALERTMANAGER_TAG` | The **Alertmanager** tag to be used. | `postgres` |
| `PROMETHEUS_NODE_EXPORTER_IMAGE` | The **node-exporter** image to be used. | `postgres` |
| `PROMETHEUS_NODE_EXPORTER_TAG` | The **node-exporter** tag to be used. | `postgres` |
| `PROMETHEUS_CADVISOR_IMAGE` | The **cAdvisor** image to be used. | `postgres` |
| `PROMETHEUS_CADVISOR_TAG` | The **cAdvisor** tag to be used. | `postgres` |
| `PROMETHEUS_PUSHGATEWAY_IMAGE` | The **Pushgateway** image to be used. | `postgres` |
| `PROMETHEUS_PUSHGATEWAY_TAG` | The **Pushgateway** tag to be used. | `postgres` |

### Redis

| Variable | Description | Default value |
| --- | --- | --- |
| `REDIS_IMAGE` | The image to be used. | `redis` |
| `REDIS_TAG` | The version to be used. | `5` |
| `REDIS_URL` | The URL to the service. |  `redis://redis:6379` |

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
| `TELERAY_TAG` | The version to be used. | `1.1.0` |
| `TELERAY_DB_URL` | The database URL where to write the data. | - |
| `TELERAY_MEASUREMENTS_TTL` | The measurements data time to live. It must be expressed in seconds. | `2592000` (30 days) |
| `TELERAY_CRON` | The cron expression used to run the job. | `0 */10 * * * *` (every 10 minutes) | 
| `TELERAY_DEBUG` | The namespaces to enable debug output. Set it to `krawler*` to enable full debug output. | `` |

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

### Traefik

| Variable | Description | Default value |
| --- | --- | --- |
| `TRAEFIK_IMAGE` | The image to be used. | `traefik` |
| `TRAEFIK_TAG` | The version to be used. | `1.7-alpine` |

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
| `VIGICRUES_TAG` | The tag of the image to be used for scraping the stations. | `1.2.0` |
| `VIGICRUES_DB_URL` | The database URL where to write the data. | - |
| `VIGICRUES_TTL` | The forecasts data time to live. It must be expressed in seconds. | `2592000` (30 days) |
| `VIGICRUES_CRON` | The cron expression used to run the job. | `0 0 */3 * * *` (every 3 hours) |
| `VIGICRUES_DEBUG` | The namespaces to enable debug output. Set it to `krawler*` to enable full debug output. | `` |

### Weacast

| Variable | Description | Default value |
| --- | --- | --- |
| `WEACAST_IMAGE` | The image to be used. | `weacast/weacast-api` |
| `WEACAST_TAG` | The version to be used. | `1.1.0` |
| `WEACAST_APP_SECRET` | The app secret used to authenticate a client. | - |
| `WEACAST_DB_URL` | The application database URL. | - |
| `WEACAST_DATA_DB_URL` | The database URL where to read the data downloaded by the loaders. | - |
| `WEACAST_LOG_LEVEL` | The log level of the application. | `verbose` |
| `WEACAST_DEBUG` | The namespaces to enable debug output. | `` |
| `WEACAST_REPLICAS` | The number of replicas. | `1` |

### Weacast-loaders

| Variable | Description | Default value |
| --- | --- | --- |
| `WEACAST_LOADERS_DB_URL` | The database URL where to write the data. | - |
| `ARPEGE_WOLRD_LOADER_IMAGE` | The image to be used to scrape Arpege World data. | `localhost:5000/arpege-world-loader` |
| `ARPEGE_WORLD_LOADER_TAG` | The tag of the image to be used to scrape Arpege World data. | `1.4.1` |
| `ARPEGE_WORLD_LOADER_DEBUG` | The namespaces to enable debug output. Set it to `krawler*` to enable full debug output. | `` |
| `ARPEGE_EUROPE_LOADER_IMAGE` | The image to be used to scrape Arpege Europe data. | `localhost:5000/arpege-europe-loader` |
| `ARPEGE_EUROPE_LOADER_TAG` | The tag of the image to be used to scrape Arpege Europe data. | `1.4.1` |
| `ARPEGE_EUROPE_LOADER_DEBUG` | The namespaces to enable debug output. Set it to `krawler*` to enable full debug output. | `` |
| `AROME_FRANCE_LOADER_IMAGE` | The image to be used to scrape Arome France data. | `localhost:5000/arome-france-loader` |
| `AROME_FRANCE_LOADER_TAG` | The tag of the image to be used to scrape Arome France World data. | `1.4.1` |
| `AROME_FRANCE_LOADER_DEBUG` | The namespaces to enable debug output. Set it to `krawler*` to enable full debug output. | `` |
| `AROME_FRANCE_HIGH_LOADER_IMAGE` | The image to be used to scrape Arome France data. | `localhost:5000/arome-france-loader` |
| `AROME_FRANCE_HIGH_LOADER_TAG` | The tag of the image to be used to scrape Arome France World data. | `1.4.1` |
| `AROME_FRANCE_HIGH_LOADER_DEBUG` |The namespaces to enable debug output. Set it to `krawler*` to enable full debug output. | `` |
| `GFS_WORLD_LOADER_IMAGE` | The image to be used to scrape GFS World data. | `localhost:5000/gfs-world-loader` |
| `GFS_WORLD_LOADER_TAG` | The tag of the image to be used to scrape Arpege World data. | `1.4.1` |
| `GFS_WORLD_DEBUG` | The namespaces to enable debug output. Set it to `krawler*` to enable full debug output. | `` |


