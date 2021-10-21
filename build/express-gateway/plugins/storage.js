//const logger = require('express-gateway/lib/logger').createLoggerWithLabel('[EG:s3]');
const _ = require('lodash');
const aws = require('aws-sdk');

let storageProxies = {}
let defaultStorageProxy

module.exports = {
  version: '1.2.0',
  init: function (pluginContext) {
    pluginContext.registerAdminRoute((app) => {
      for (const [provider, options] of Object.entries(pluginContext.settings.providers)) {
        const accessKeyId = _.get(options, 'accessKeyId')
        const secretAccessKey = _.get(options, 'secretAccessKey')
        if (accessKeyId && secretAccessKey) {
          logger.info('Creating storage proxy ' + provider)
          storageProxies[provider] = new aws.S3(_.omit(options, 'default'))
          if (options.default) {
            logger.info('Setting default storage proxy to ' + provider)
            defaultStorageProxy = storageProxies[provider]
          }
        } else {
          logger.info('Missing accessKeyId and/or secretAccessKey for provider ' + provider)
        }
      }
      // Specific provider route
      app.get(pluginContext.settings.endpointName + '/:provider/:bucket/*', (req, res, next) => {
        const provider = req.params.provider;
        const storageProxy = storageProxies[provider];
        if (!storageProxy) next()
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
      });
      // Default provider route
      app.get(pluginContext.settings.endpointName + '/:bucket/*', (req, res) => {
        logger.info('falling back to default provider')
        if (defaultStorageProxy) {
          defaultStorageProxy.getObject({
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