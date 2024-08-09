module.exports = {
  authentication: {
    defaultUsers: [
      {
        email: process.env.DEFAULT_USER_EMAIL || 'john.doe@gmail.com',
        password: process.env.DEFAULT_USER_PASSWORD || 'John;Doe1',
        name: 'John Doe',
        catalog: { permissions: 'owner' }, // Grant admin rights to update catalog
        layers: [{ // Grant admin rights to update layer data
          name: 'Layers.SENSORS',
          permissions: 'manager',
          probeService: 'chirpstack-stations',
          service: 'chirpstack-observations'
        }]
      }
    ]
  }
}

