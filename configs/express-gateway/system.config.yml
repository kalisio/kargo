db:
  redis:
    host: redis
    port: 6379
    namespace: EG

plugins:
  metrics:
    package: ./plugins/metrics.js
  scopes:
    package: ./plugins/scopes.js
  healthcheck:
    package: ./plugins/healthcheck.js
  populate:
    package: ./plugins/populate.js
  storage:
    providers: 
      aws:
        accessKeyId: ${AWS_S3_ACCESS_KEY}
        secretAccessKey: ${AWS_S3_SECRET_ACCESS_KEY}
        default: true
      ovh:
        endpoint: ${OVH_S3_ENDPOINT}
        accessKeyId: ${OVH_S3_ACCESS_KEY}
        secretAccessKey: ${OVH_S3_SECRET_ACCESS_KEY}        
      scw:
        endpoint: ${SCW_S3_ENDPOINT}
        accessKeyId: ${SCW_S3_ACCESS_KEY}
        secretAccessKey: ${SCW_S3_SECRET_ACCESS_KEY}
    package: ./plugins/storage      


