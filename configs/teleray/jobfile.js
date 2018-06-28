const path = require('path')
const fs = require('fs')

module.exports = {
  id: 'teleray',
  store: 'memory',
  options: {
    //workersLimit: 1
  },
  tasks: [{
    id: 'teleray',
    type: 'http',
    options: {
      url: 'http://teleray.irsn.fr//TelerayService/service/measure'
    }
  }],
  hooks: {
    tasks: {
      after: {
        readJson: {},
        convertToGeoJson: {
          latitude: 'location.lat',
          longitude: 'location.lon'
        },
        /* For DEBUG purpose
        writeJsonFS: {
          hook: 'writeJson',
          store: 'fs'
        },
        */
        writeJsonS3: {
          hook: 'writeJson',
          store: 's3',
          storageOptions: {
            ACL: 'public-read'
          }
        }
      }
    },
    jobs: {
      before: {
        createStores: [{
          id: 'memory'
        }, {
          id: 'fs',
          options: {
            path: path.join(__dirname, '..', 'output')
          }
        }, {
          id: 's3',
          options: {
            client: {
              accessKeyId: process.env.S3_ACCESS_KEY,
              secretAccessKey: process.env.S3_SECRET_ACCESS_KEY
            },
            bucket: process.env.S3_BUCKET
          }
        }]
      },
      after: {
        removeStores: ['memory', 'fs', 's3']
      }
    }
  }
}
