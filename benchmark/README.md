Benchmark configuration using [Artillery](https://github.com/artilleryio/artillery)

## Environment

First you need to install Artillery CLI: `npm install --global artillery`

Then, the benchmark depends on the following environment variables to be defined:
* `SUBDOMAIN`: the Kargo subdomain like `test.kalisio.xyz`
* `API_GATEWAY_JWT`: the JWT access token for the API gateway

## Run benchmark

The benchmark is available in three different environments:
* `public`: when Kargo does not use any API gateway and exposes all web mapping services publicly
* `gravitee`: when Kargo exposes all web mapping services behind the [Gravitee](https://gravitee.io/) API gateway
* `express`: when Kargo exposes all web mapping services behind the [Express-Gateway](https://www.express-gateway.io/) API gateway

Select the right environment then run `artillery run -e gravitee --config .\config.yml .\scenarios.yml`

## Debug mode

Set `DEBUG=http*` to get debug information when running the benchmark.
