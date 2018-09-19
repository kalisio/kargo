const createJob = require('./job-arpege')

// Setup job name, model name, bounds and generation parameters
module.exports = createJob({
  id: 'weacast-arpege-world',
  model: 'arpege-world',
  subsets: {
    long: [-180, 180],
    lat: [-90, 90]
  },
  nwp: {
    runInterval: 6 * 3600,          // Produced every 6h
    interval: 3 * 3600,             // Steps of 3h
    lowerLimit: 0 * 3600,           // From T0
    //upperLimit: 3 * 3600,           // Up to T0 + 3h for testing
    upperLimit: 102 * 3600          // Up to T0+102
  }
})
