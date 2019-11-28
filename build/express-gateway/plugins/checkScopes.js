module.exports = {
  version: '1.0.0',
  policies: ['check-scopes'],
  init: function (pluginContext) {
    pluginContext.registerPolicy({
      name: 'check-scopes',
      policy: (params) => (req, res, next) => {
        const appScopes = req.user.scopes.split(',')
        console.log(appScopes)
        const endpointScopes = req.egContext.apiEndpoint.scopes
        console.log(endpointScopes)
        for (let i = 0; i < endpointScopes.length; i++) {
          const scope = endpointScopes[i]
          if (! appScopes.includes(scope)) return res
        }
        return next()
      },
      schema: {
        $id: 'http://express-gateway.io/policies/check-scopes.json',
      }
    })
  },
  schema: {
    $id: 'http://express-gateway.io/policies/check-scopes.json',
  }
};
