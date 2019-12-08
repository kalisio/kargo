module.exports = {
  scopes: ['mapproxy', 'mapserver', 'k2'],
  users: {
    cutomer1: {
      qgis: {
        scopes: ['mapproxy', 'mapserver'],
        credential: {
          type: 'basic-auth',
          password: '<PASSWORD>', 
        }
      },
      leafet: {
        scopes: ['mapproxy', 'mapserver'],
        credential: {
          type: 'jwt',
          keyId: '<KEY_ID>', 
          keySecret: '<KEY_SECRET>'
        }
      },
      kano: {
        scopes: ['mapproxy', 'k2', 'mapserver'],
        credential: {
          type: 'jwt',
          keyId: '<KEY_ID>', 
          keySecret: '<APP_SECRET>'
        }
      }
    },
    customer2: {
      kano: {
        scopes: ['mapproxy', 'k2'],
        credential: {
          type: 'jwt',
          keyId: '<KEY_ID>', 
          keySecret: '<APP_SECRET>'
        }
      }
    }
  }
}
