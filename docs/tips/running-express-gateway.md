---
sidebarDepth: 3
---

# Running express-gateway locally

It is sometimes required to play with the API gateway on your local development environment for debug purpose. As Kargo relies on a specific image built with plugins, etc. you can use it but it might not be so convenient. Otherwise you can clone [express-gateway](https://github.com/ExpressGateway/express-gateway) and do the following to run it locally with e.g. the S3 plugin:

1. Add AWS SDK dependency to the `package.json` file (`"aws-sdk": "^2.607.0"`)

2. Copy the Kargo plugin into the `lib` directory

3. Add S3 plugin at the end of the `lib/config/system.config.yml` file:
```yml
plugins:
  s3:
    package: ./s3
```

4. Add S3 endpoint/pipeline the `lib/config/gateway.config.yml` file:
```yml
apiEndpoints:
  s3: 
    hosts: '*'
    paths: '/s3/*'
serviceEndpoints:
  s3:
    url: 'http://localhost:9876/s3'
pipelines:
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

Configure the required environment variables (`S3_ACCESS_KEY`, `S3_SECRET_ACCESS_KEY`, `S3_ENDPOINT`) then launch the gateway: `npm run start:dev`.

Now you should be able to access objects using the following URL: http://localhost:9876/s3/bucket/key.