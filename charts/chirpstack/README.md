# helm chart for chirpstack

This is a helm package for [chirpstack](https://www.chirpstack.io/), an open-source network server for LoraWAN Networks.
The chart include: 
  * all components of the [chirpstack](https://www.chirpstack.io/) project: the gateway bridge, the network server, an **optionnally** the rest API
  * [mosquitto](https://mosquitto.org/), a MQTT broker used by Chirpstack
  * the micro service to transform UpLink events to geojson, aka chirstack mongodb integration (cf [doc](https://github.com/romainjacquet/chirpstack-mongodb-integration))
  * has no dependency  
  * provide a default configuration in the config folder, for two regions eu868 and in865.
  
As there is no dependencies it means that you need to install them or re-use existing ones.
The dependencies can be found as helm charts:

| Dependency | Usage                                        | Possible chart     | Optional |
|------------|----------------------------------------------|--------------------|----------|
| PostGreSQL | Use by Chirpstack and keycloak               | bitnami/postgresql | NO      |
| Redis      | Used by Chirpstack                           | bitnami/redis      | No      |
| MongoDB    | Used by the Chirpstack mongoDB integration   | bitnami/mongodb    | No      |
| Keycloak   | Used by Chirpstack to provide authentication | bitnami/keycloak   | Yes     |


## TL;TR

```console
helm install my-release oci://harbor.portal.kalisio.com/kalisio/helm/chirpstack
```

Configuration is required to connect the different components together. There is also optionnal configuration to toggle some feature like
fecthing the lorawan devices or enable the REST API.

Check the default values with this command:
```console
helm show values oci://harbor.portal.kalisio.com/kalisio/helm/chirpstack
```

## development

To build a local archive of the chart:
```console
helm package charts/chirpstack
```

## limitations and warnings

  * it is currently mandatory to install the micro service to write in MongoDB. This micro-service may be moved to its own chart
  * the gateway bridge of chirpstack is exposing UDP service. It's not managed by the ingress, because configuration
  depends on your cloud provider. 

## context

This chart has been written to display LoraWAN data in [Kano](https://github.com/kalisio/kano), a data explorer in 2D/3D.
Data management is done with [Chirpstack](https://www.chirpstack.io/), a popular LoraWAN network server.

![Chirpstack](/pictures/chirpstack-temperature.png)

This is part of R&D of [Kalisio](https://kalisio.com).
