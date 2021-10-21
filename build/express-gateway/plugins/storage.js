const logger = require('express-gateway/lib/logger').createLoggerWithLabel('[EG:s3]');
const _ = require('lodash');
const aws = require('aws-sdk');

let storageProxies = {}
let defaultStorageProxy

module.exports = {
  version: '1.2.0',
  init: function (pluginContext) {
    pluginContext.registerAdminRoute((app) => {
      // Create a storage proxy for each provider
      for (const [provider, options] of Object.entries(pluginContext.settings.providers)) {
        logger.info('Creating storage proxy ' + provider)
        const accessKeyId = _.get(options, 'accessKeyId')
        const secretAccessKey = _.get(options, 'secretAccessKey')
        // Ensure the provider is correctly configured
        if (accessKeyId && secretAccessKey) {
          storageProxies[provider] = new aws.S3(_.omit(options, 'default'))
          // Check whether the storage proxy should be the default one
          if (options.default) {
            logger.info('Setting default storage proxy to ' + provider)
            defaultStorageProxy = storageProxies[provider]
          }
        } else {
          logger.info('Missing accessKeyId or/and secretAccessKey for provider ' + provider)
        }
      }
      app.get(pluginContext.settings.endpointName + '/:provider/:bucket/*', (req, res) => {
        const provider = req.params.provider;
        const storageProxy = storageProxies[provider];
        // Fallback to default provider if not found
        if (!storageProxy) storageProxy = defaultStorageProxy;
        if (storageProxy) {
          storageProxy.getObject({
            Bucket: req.params.bucket,
            Key: req.params[0],
            Range: req.headers.range // Forward range requests
          })
          .on('httpHeaders', (statusCode, headers) => { 
            // Avoid catching event raised by connection initialization
            // https://stackoverflow.com/questions/35782434/streaming-file-from-s3-with-express-including-information-on-length-and-filetype
            if (headers['content-length']) {
              res.status(statusCode);
              res.set(headers);
            } else logger.debug('Invalid response with status ' + statusCode)
          })
          .createReadStream()
          .on('error', (err) => {
            logger.debug(err);
            return res.status(404).send(err);
          })
          .pipe(res);
         } else {
          logger.debug('Unknown provider: ' + provider)
        }
      });
    });
  },
  schema: {
    $id: 'http://express-gateway.io/plugins/storage.json',
    type: 'object',
    properties: {
      endpointName: {
        type: 'string',
        default: '/storage'
      },
      providers: {
        type: 'object',
        default: {}
      }
    }, 
    required: ['endpointName']
  }
};