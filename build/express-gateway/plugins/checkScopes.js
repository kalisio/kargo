module.exports = {
  version: '1.0.0',
  policies: ['scopes'],
  init: function (pluginContext) {
    pluginContext.registerPolicy({
      name: 'scopes',
      policy: (params) => (req, res, next) => {
        const endpointScopes = req.egContext.apiEndpoint.scopes;
        if (endpointScopes.length > 0) {
          const appScopes = req.user.scopes.split(',');
          if (! appScopes.length > 0) return res.sendStatus(401);
          for (let i = 0; i < endpointScopes.length; i++) {
            const scope = endpointScopes[i];
            if (! appScopes.includes(scope)) return res.sendStatus(401);
          }
        }
        return next();
      },
      schema: {
        $id: 'http://express-gateway.io/policies/check-scopes.json',
      }
    })
  },
  schema: {
    $id: 'http://express-gateway.io/plugins/check-scopes.json',
  }
};
