module.exports = {
  scopes: ['mapcache', 'mapserver', 'k2'],
  users: {
    cutomer1: {
      qgis: {
        scopes: ['mapcache', 'mapserver'],
        credential: {
          type: 'basic-auth',
          password: '<PASSWORD>', 
        }
      },
      leafet: {
        scopes: ['mapcache', 'mapserver'],
        credential: {
          type: 'jwt',
          keyId: '<KEY_ID>', 
          keySecret: '<KEY_SECRET>'
        }
      },
      kano: {
        scopes: ['mapcache', 'k2', 'mapserver'],
        credential: {
          type: 'jwt',
          keyId: '<KEY_ID>', 
          keySecret: '<APP_SECRET>'
        }
      }
    },
    customer2: {
      kano: {
        scopes: ['mapcache', 'k2'],
        credential: {
          type: 'jwt',
          keyId: '<KEY_ID>', 
          keySecret: '<APP_SECRET>'
        }
      }
    }
  }
}
