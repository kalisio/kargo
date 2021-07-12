const logger = require('express-gateway/lib/logger').createLoggerWithLabel('[EG:s3]');
const aws = require('aws-sdk');

const s3 = new aws.S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  endpoint: process.env.S3_ENDPOINT
})

module.exports = {
  version: '1.2.0',
  init: function (pluginContext) {
    pluginContext.registerAdminRoute((app) => {
      app.get(pluginContext.settings.endpointName + '/:bucket/*', (req, res) => {
        logger.debug('Proxying S3 object from ' + req.params.bucket + '/' + req.params[0] + ',' + req.headers.range)
        s3.getObject({
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
    });
  },
  schema: {
    $id: 'http://express-gateway.io/plugins/s3.json',
    type: 'object',
    properties: {
      endpointName: {
        type: 'string',
        default: '/s3'
      }
    }, 
    required: ['endpointName']
  }
};
