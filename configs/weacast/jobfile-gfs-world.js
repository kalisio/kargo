const createJob = require('./job-gfs')

// Setup job name, model name, bounds and generation parameters
module.exports = createJob({
  id: 'weacast-gfs-world',
  model: 'gfs-world',
  request: {
    leftlon: 0,
    rightlon: 360,
    bottomlat: -90,
    toplat: 90
  },
  nwp: {
    runInterval: 6 * 3600,          // Produced every 6h
    interval: 3 * 3600,             // Steps of 3h
    lowerLimit: 0 * 3600,           // From T0
    //upperLimit: 3 * 3600,           // Up to T0 + 3h for testing
    upperLimit: 240 * 3600          // Up to T0+240
  }
})
