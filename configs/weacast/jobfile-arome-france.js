const createJob = require('./job-arome')

// Setup job name, model name, bounds and generation parameters
module.exports = createJob({
  id: 'weacast-arpege-arome',
  model: 'arome-france',
  request: {
    url: 'https://geoservices.meteofrance.fr/services/MF-NWP-HIGHRES-AROME-0025-FRANCE-WCS'
  },
  subsets: {
    long: [-8, 12],
    lat: [38, 53]
  },
  nwp: {
    runInterval: 3 * 3600,            // Produced every 3h
    interval: 1 * 3600,               // Steps of 1h
    lowerLimit: 0,                    // From T0
    //upperLimit: 3 * 3600,             // Up to T0 + 3h for testing
    upperLimit: 42 * 3600             // Up to T0+42
  }
})
