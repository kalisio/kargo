
module.exports = {
  version: '1.0.0',
  init: function (pluginContext) {
    pluginContext.registerGatewayRoute((app) => {
      app.get(pluginContext.settings.endpointName, (req, res) => {
        return res.sendStatus(200)
      });
    });
  },
  schema: {
    $id: 'http://express-gateway.io/plugins/healthcheck.json',
    type: 'object',
    properties: {
      endpointName: {
        type: 'string',
        default: '/healthcheck'
      }
    }, required: ['endpointName']
  }
};
