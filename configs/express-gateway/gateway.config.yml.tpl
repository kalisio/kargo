http:
  port: 8080
admin:
  port: 9876
  host: localhost
apiEndpoints:
  admin:
    host: 'express-gateway'
  prometheus:
    host: '*'
    path: '/metrics'
  wms:
    host: '*'
    paths: '/wms*'
    scopes: ["wms"]
  wmts:
    host: '*'
    paths: '/wmts/*'
    scopes: ["wmts"]
  tms:
    host: '*'
    paths: '/tms/*'
    scopes: ["tms"]  
  wfs:
    host: '*'
    paths: '/wfs*'
    scopes: ["wfs"]
  wcs:
    host: '*'
    paths: '/wcs*'
    scopes: ["wcs"]    
  k2:
    host: '*'
    paths: '/k2/*'
    scopes: ["k2"]
  s3: 
    hosts: '*'
    paths: '/s3/*'
    scopes: ["s3"]
  capture:
    host: '*'
    paths: '/capture/*'
    scopes: ["capture"]
  # these are here to allow mapcache to generate GetCapabilities urls that works.
  # mapcache internal base url is set to api.$SUBDOMAIN/ows (it can't be just api.$SUBDOMAIN
  # because this base url is the wms entry point for mapcache).
  # because of this, GetCapabilities and such expose urls starting with api.$SUBDOMAIN/ows
  # we have to catch them and redirect them as our 'regular' wms, wmts .. api endpoints
  mapcache_wmts:
    host: '*'
    paths: '/ows/wmts/*'
    scopes: ["wmts"]
  mapcache_tms:
    host: '*'
    paths: '/ows/tms/*'
    scopes: ["tms"]
  mapcache_wms:
    host: '*'
    paths: '/ows*'
    scopes: ["wms"]

serviceEndpoints:
  admin: 
    url: 'http://localhost:9876'
  prometheus:
    url: 'http://localhost:9876/metrics'
  wms:
    url: 'http://mapserver:80/cgi-bin/mapserv'
  wmts:
    url: 'http://mapcache:80/mapcache/wmts'    
  tms:
    url: 'http://mapcache:80/mapcache/tms'
  wfs:
    url: 'http://mapserver:80/cgi-bin/wfs'
  wcs:
    url: 'http://mapserver:80/cgi-bin/wcs'    
  k2:
    url: 'http://k2:8080'
  s3:
    url: 'http://localhost:9876/s3'    
  capture:
    url: 'http://kapture:3000'

policies:
  - cors
  - scopes
  - jwt
  - log
  - proxy
  - rate-limit
  - metrics

pipelines:
  admin:
    apiEndpoints:
      - admin
    policies:
      - proxy:
          - action:
              serviceEndpoint: admin
              changeOrigin: true
              stripPath: true
  prometheus:
    apiEndpoints:
      - prometheus
    policies:
      - proxy:
          - action:
              serviceEndpoint: prometheus
              changeOrigin: true
              stripPath: true
  wms:
    apiEndpoints:
      - wms
      - mapcache_wms
    policies:
      - metrics:              
      - cors:
      - jwt:
          - condition:
              name: anonymous
            action:
              jwtExtractor: 'authBearer'
              secretOrPublicKey: ${EXPRESS_GATEWAY_KEY_SECRET}
              checkCredentialExistence: true 
              audience: ${SUBDOMAIN}
              passThrough: true  
      - jwt:
          - condition:
              name: anonymous
            action:
              jwtExtractor: 'query'
              jwtExtractorField: 'jwt'
              secretOrPublicKey: ${EXPRESS_GATEWAY_KEY_SECRET}
              checkCredentialExistence: true            
              audience: ${SUBDOMAIN}
      - scopes:     
      - proxy:
          - action:
              serviceEndpoint: wms 
              changeOrigin: true
              stripPath: true
              timeout: 120000
  wmts:
    apiEndpoints:
      - wmts
      - mapcache_wmts
    policies:
      - metrics:              
      - cors:
      - jwt:
          - condition:
              name: anonymous
            action:
              jwtExtractor: 'authBearer'
              secretOrPublicKey: ${EXPRESS_GATEWAY_KEY_SECRET}
              checkCredentialExistence: true 
              audience: ${SUBDOMAIN}
              passThrough: true  
      - jwt:
          - condition:
              name: anonymous
            action:
              jwtExtractor: 'query'
              jwtExtractorField: 'jwt'
              secretOrPublicKey: ${EXPRESS_GATEWAY_KEY_SECRET}
              checkCredentialExistence: true            
              audience: ${SUBDOMAIN}
      - scopes:
      - proxy:
          - action:
              serviceEndpoint: wmts 
              changeOrigin: true
              stripPath: true
              timeout: 120000
  tms:
    apiEndpoints:
      - tms
      - mapcache_tms
    policies:
      - metrics:              
      - cors:
      - jwt:
          - condition:
              name: anonymous
            action:
              jwtExtractor: 'authBearer'
              secretOrPublicKey: ${EXPRESS_GATEWAY_KEY_SECRET}
              checkCredentialExistence: true 
              audience: ${SUBDOMAIN}
              passThrough: true  
      - jwt:
          - condition:
              name: anonymous
            action:
              jwtExtractor: 'query'
              jwtExtractorField: 'jwt'
              secretOrPublicKey: ${EXPRESS_GATEWAY_KEY_SECRET}
              checkCredentialExistence: true            
              audience: ${SUBDOMAIN}
      - scopes:
      - proxy:
          - action:
              serviceEndpoint: tms 
              changeOrigin: true
              stripPath: true
              timeout: 120000                                    
  wfs:
    apiEndpoints:
      - wfs
    policies:
      - metrics:               
      - cors:
      - jwt:
          - condition:
              name: anonymous
            action:
              jwtExtractor: 'authBearer'
              secretOrPublicKey: ${EXPRESS_GATEWAY_KEY_SECRET}
              checkCredentialExistence: true
              audience: ${SUBDOMAIN}
              passThrough: true                    
      - jwt:
          - condition:
              name: anonymous
            action:
              jwtExtractor: 'query'
              jwtExtractorField: 'jwt'
              secretOrPublicKey: ${EXPRESS_GATEWAY_KEY_SECRET}
              checkCredentialExistence: true
              audience: ${SUBDOMAIN}
      - scopes:
      - proxy:
          - action:
              serviceEndpoint: wfs 
              changeOrigin: true
              stripPath: true
              timeout: 120000
  wcs:
    apiEndpoints:
      - wcs
    policies:
      - metrics:               
      - cors:
      - jwt:
          - condition:
              name: anonymous
            action:
              jwtExtractor: 'authBearer'
              secretOrPublicKey: ${EXPRESS_GATEWAY_KEY_SECRET}
              checkCredentialExistence: true
              audience: ${SUBDOMAIN}
              passThrough: true             
      - jwt:
          - condition:
              name: anonymous
            action:
              jwtExtractor: 'query'
              jwtExtractorField: 'jwt'
              secretOrPublicKey: ${EXPRESS_GATEWAY_KEY_SECRET}
              checkCredentialExistence: true
              audience: ${SUBDOMAIN}
      - scopes:
      - proxy:
          - action:
              serviceEndpoint: wcs 
              changeOrigin: true
              stripPath: true
              timeout: 120000
  k2:
    apiEndpoints:
      - k2
    policies:
      - metrics:                   
      - cors:
      - jwt:
          - condition:
              name: anonymous
            action:
              jwtExtractor: 'authBearer'
              secretOrPublicKey: ${EXPRESS_GATEWAY_KEY_SECRET}
              checkCredentialExistence: true
              audience: ${SUBDOMAIN}
              passThrough: true                              
      - jwt:
          - action:
              jwtExtractor: 'query'
              jwtExtractorField: 'jwt'
              secretOrPublicKey: ${EXPRESS_GATEWAY_KEY_SECRET}
              checkCredentialExistence: true
              audience: ${SUBDOMAIN}
      - scopes:
      - proxy:
          - action:
              serviceEndpoint: k2
              changeOrigin: true
              stripPath: true
              timeout: 120000
  s3:
    apiEndpoints:
      - s3
    policies:
      - metrics:  
      - cors:
      - jwt:
          - condition:
              name: anonymous
            action:
              jwtExtractor: 'authBearer'
              secretOrPublicKey: ${EXPRESS_GATEWAY_KEY_SECRET}
              checkCredentialExistence: true
              audience: ${SUBDOMAIN} 
              passThrough: true             
      - jwt:
          - condition:
              name: anonymous
            action:
              jwtExtractor: 'query'
              jwtExtractorField: 'jwt'
              secretOrPublicKey: ${EXPRESS_GATEWAY_KEY_SECRET}
              checkCredentialExistence: true
              audience: ${SUBDOMAIN}
      - scopes:
      - proxy:
          - action:
              serviceEndpoint: s3
              changeOrigin: true
              stripPath: true
              timeout: 120000
  capture:
    apiEndpoints:
      - capture
    policies:
      - metrics:  
      - cors:
      - jwt:
          - condition:
              name: anonymous
            action:
              jwtExtractor: 'authBearer'
              secretOrPublicKey: ${EXPRESS_GATEWAY_KEY_SECRET}
              checkCredentialExistence: true
              audience: ${SUBDOMAIN} 
              passThrough: true             
      - scopes:
      - proxy:
          - action:
              serviceEndpoint: capture
              changeOrigin: true
              stripPath: false
              timeout: 120000