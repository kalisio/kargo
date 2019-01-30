# CLI

## build-service

`usage: build-service.sh <mapproxy|geoserver|maputnik|weacast-loaders>`

Builds the docker image corresponding to the desired service and push it into **registry**. 

The services that can be built are the following:

| command parameter | services |
| --- | --- |
| `mapproxy` | the **MapProxy** application. The version to build is read from the `MAPPROXY_TAG` variable. |
| `geoserver` | the **GeoServer**. The version as well as the list of plugins to build are read from the `GEOSERVER_TAG`  and `GEOSERVER_PLUGINS` variables. |
| `maputnik` | the **Maputnik**. The version to build is read from the `MAPUTNIK_TAG` variable. |
| `weacast-loaders` | The list of the loaders to be build is read from the `WEACAST_MODELS` variable. For all the loaders to be built, the version and database url are read from the `WEACAST_LOADER_TAG` and `WEACAST_DB_URL` variables. |

## deploy-kargo

`usage: deploy-kargo.sh`

Deploys all the stacks you have defined the `STACKS` variable. The stacks are deployed in the order defined in the `STACKS` variable.

## deploy-stack

`usage: deploy-stack.sh <stack>`

Deploys the specified stack. The stack must be defined in the `STACKS`.

## make-kargo

`usage: make-kargo.sh <workspace>`

Makes the final kargo deployable configuration by merging the default Kargo configuration with the given workspace configuration. The final configuration files is stored in the `.kargo` directory

## remove-kargo

`usage: remove-kargo.sh`

Removes all the stacks you have defined in the `STACKS` variable. The stacks are removed in the inverse order defined in the `STACKS` variable.

## remove-stack

`usage: remove-stack.sh <stack>`

Removes the specified stack. The stack must be defined in the `STACKS` variable.
