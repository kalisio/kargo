# Development guide

## API gateway

It can be more convenient to debug or test plugins on a local installation of express-gateway, here is how to setup your environment.

First, clone [express-gateway](https://github.com/ExpressGateway/express-gateway) and install its dependencies with `npm install`.

Second, install the required dependencies for your plugins using `npm install --save package`.

Third, update the default config files according to your needs:
* `lib/config/system.config.yml` for plugins
* `lib/config/gateway.config.yml` for pipelines

For instance here is the S3 plugin setup, copy your plugin file `s3.js` in the lib directory then edit the `lib/config/system.config.yml` file like this:
```yml
plugins:
  s3:
    package: ./s3
```

For instance, if you'd like to proxy request to an existing WMTS server and use the S3 plugin edit the `lib/config/gateway.config.yml` file like this:
```yml
apiEndpoints:
  wmts:
    host: '*'
    paths: '/wmts/*'
  s3: 
    hosts: '*'
    paths: '/s3/*'
serviceEndpoints:
  wmts:
    url: 'https://mapproxy.test.kalisio.xyz/wmts'    
  s3:
    url: 'http://localhost:9876/s3'
policies:
  - proxy
pipelines:
  wmts:
    apiEndpoints:
      - wmts
    policies:
      - proxy:
          - action:
              serviceEndpoint: wmts 
              changeOrigin: true
              stripPath: true                            
  s3:
    apiEndpoints:
      - s3
    policies:   
      - proxy:
          - action:
              serviceEndpoint: s3
              changeOrigin: true
              stripPath: true   
```

Launch the gateway with `npm run start:dev` and reach it at `localhost:8080`.

If you need to connect the debugguer launch it with `node --inspect lib/index.js` instead.

