const logger = require('express-gateway/lib/logger').createLoggerWithLabel('[EG:s3]');
const _ = require('lodash');
const aws = require('aws-sdk');

let storageProxies = {}

function parseParams (params, providers) {
  let tokens = _.split(params, '/')
  let provider = _.nth(tokens, 0)
  if (provider) {
    let bucket, keyIndex
    // Check wehther th
    if (!_.includes(_.keys(providers), provider)) {
      bucket = provider
      keyIndex = 1
      provider = _.findKey(providers, { default: true })
    }
    if (provider) {
      if (!bucket) {
        bucket = _.nth(tokens, 1)
        keyIndex = 2
      }
      if (bucket && keyIndex) {
        console.log(_.slice(tokens, keyIndex))
        let key = _.join(_.slice(tokens, keyIndex), '/')
        return { provider, bucket, key }
      }
    }
  }
  return null
}

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
        } else {
          logger.info('Missing accessKeyId and/or secretAccessKey for provider ' + provider)
        }
      }
      app.get(pluginContext.settings.endpointName + '/*', (req, res) => {
        const params = parseParams(req.params[0], pluginContext.settings.providers)
        if (params.provider && params.bucket && params.key) {
          const storageProxy = storageProxies[params.provider];
          storageProxy.getObject({
            Bucket: params.bucket,
            Key: params.key,
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
        default: '/s3'
      },
      providers: {
        type: 'object',
        default: {}
      }
    }, 
    required: ['endpointName']
  }
};