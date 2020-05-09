---
sidebarDepth: 3
---

# Using Artillery

**Kargo** provides an [Artillery](https://github.com/artilleryio/artillery) docker image that can be used to perform load testing of your platform.

## Running Artillery

```bash
$docker run -e -ti kalisio/artillery:1.6.0 bash
```

You can also run **Artillery** from the manage node if you need to bench some services that are not exposed.

```bash
$docker run --network=kargo -v /home/ubuntu/kargo/workspaces/my_workspace/benchmark:/benchmark -e -ti kalisio/artillery:1.6.0 bash
```

## Example: benchmarking the API

**Kargo** comes with some files that allow you to perform a load test of the API.

To run the tests, you must define the following environment variables:
* `SUBDOMAIN`: the Kargo subdomain like `test.kalisio.xyz`
* `API_GATEWAY_JWT`: the JWT access token for the API gateway


The benchmark is available in two different environments:
* `public`: when Kargo does not use any API gateway and exposes all web mapping services publicly
* `api`: when Kargo exposes all web mapping services behind the [Express-Gateway](https://www.express-gateway.io/) API gateway

Select the right environment then run the command:

```bash
$artillery run -e api --config ./config.yml ./scenarios.yml`
```

::: tip
To debug, set the `DEBUG=http*` environment variable.
:::
