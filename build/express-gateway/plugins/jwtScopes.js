const jwtz = require('express-jwt-authz');

module.exports = {
  version: '1.2.0',
  policies: ['jwt-scopes'],
  init: function (pluginContext) {
    pluginContext.registerPolicy({
      name: 'jwt-scopes',
      policy: (params) => (req, res, next) => jwtz(req.egContext.apiEndpoint.scopes)(req, res, next),
      schema: {
        $id: 'http://express-gateway.io/policies/metrics.json'
      }
    })
  },
  schema: {
    $id: 'http://express-gateway.io/policies/metrics.json'
  }
};
