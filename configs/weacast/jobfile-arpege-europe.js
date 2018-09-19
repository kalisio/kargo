const createJob = require('./job-arpege')

// Setup job name, model name, bounds and generation parameters
module.exports = createJob({
  id: 'weacast-arpege-europe',
  model: 'arpege-europe',
  request: {
    url: 'https://geoservices.meteofrance.fr/services/MF-NWP-GLOBAL-ARPEGE-01-EUROPE-WCS'
  },
  subsets: {
    long: [-32, 42],
    lat: [20, 72]
  },
  nwp: {
    runInterval: 6 * 3600,            // Produced every 6h
    interval: 1 * 3600,               // Steps of 1h
    lowerLimit: 0,                    // From T0
    //upperLimit: 3 * 3600,             // Up to T0 + 3h for testing
    upperLimit: 102 * 3600            // Up to T0+102
  }
})
