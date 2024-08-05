module.exports = [
  {
    name: 'Layers.OSM',
    description: 'Layers.OSM_DESCRIPTION',
    i18n: {
      fr: {
        Layers: {
          OSM: 'OSM',
          OSM_DESCRIPTION: 'Données OpenStreetMap'
        }
      },
      en: {
        Layers: {
          OSM: 'OSM',
          OSM_DESCRIPTION: 'OpenStreeMap data'
        }
      }
    },
    tags: [
      'street'
    ],
    iconUrl: `http://a.tile.osm.org/0/0/0.png`,
    icon: 'streetview',
    attribution: 'OpenStreetMap © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    type: 'BaseLayer',
    leaflet: {
      type: 'tileLayer',
      isVisible: true,
      source: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      maxZoom: 21,
      maxNativeZoom: 18
    },
    cesium: {
      type: 'OpenStreetMap',
      url: `http://a.tile.osm.org`
    }
  },
  {
    name: 'Layers.PLAN_IGN',
    description: 'Layers.PLAN_IGN_DESCRIPTION',
    i18n: {
      fr: {
        Layers: {
          PLAN_IGN: 'Plan IGN',
          PLAN_IGN_DESCRIPTION: 'Plan IGN v2'
        }
      },
      en: {
        Layers: {
          PLAN_IGN: 'Plan IGN',
          PLAN_IGN_DESCRIPTION: 'Plan IGN v2'
        }
      }
    },
    tags: [
      'street'
    ],
    type: 'BaseLayer',
    iconUrl: 'https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&STYLE=normal&FORMAT=image/png&TILEMATRIXSET=PM&TILEMATRIX=8&TILEROW=92&TILECOL=132',
    icon: 'las la-plug',
    attribution: '<a href="https://www.ign.fr/">IGN</a>',
    cesium: {
      type: 'WebMapTileService',
      url: 'https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&STYLE=normal&FORMAT=image/png&TILEMATRIXSET=PM&TILEMATRIX={TileMatrix}&TILEROW={TileRow}&TILECOL={TileCol}',
      format: 'image/png',
      layer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2',
      style: 'normal',
      tileMatrixSetID: 'PM'
    },
    leaflet: {
      type: 'tileLayer',
      source: 'https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&STYLE=normal&FORMAT=image/png&TILEMATRIXSET=PM&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}',
    }
  },
  {
    name: 'Layers.LORAWAN_GATEWAY',
    description: 'Layers.LORAWAN_GATEWAY_DESCRIPTION',
    i18n: {
      fr: {
        Layers: {
          LORAWAN_GATEWAY: 'Gateways',
          LORAWAN_GATEWAY_DESCRIPTION: 'Gateways LORAWAN du démonstrateur Kalisio',
        },
        Legend: {
          LORAWAN_GATEWAY_LABEL: 'LoRaData - Gateways',
          LORAWAN_GATEWAY: 'Gateways'
        }        
      },
      en: {
        Layers: {
          LORAWAN_GATEWAY: 'Gateways',
          LORAWAN_GATEWAY_DESCRIPTION: 'LoRaWAN Gateways of the demonstrator',
        },
        Legend: {
          LORAWAN_GATEWAY_LABEL: 'LoRaData - Gateways',
          LORAWAN_GATEWAY: 'Gateways'
        }
      }
    },
    legend: [{
      type: 'variables',
      label: 'Legend.LORAWAN_GATEWAY_LABEL',
      minZoom: 6,
    }, {
      type: 'symbols',
      minZoom: 8,
      content: {
        gateways: [{
          symbol: { 'media/KShape': { options: { shape: 'circle', color: 'white', radius: 10, icon: { classes: 'fa fa-wifi', color: 'black',  size: 10}, stroke: { color: 'black', size: 2 } } } }, 
          label: 'Legend.LORAWAN_GATEWAY' 
        }]
      }
    }],
    attribution: "<a href='https://www.chirpstack.io/'>ChirStack</a>",
    tags: ['sensors'],
    type: 'OverlayLayer',
    service: 'chirpstack-stations',
    featureId: 'gw_euid',
    leaflet: {
      type: 'geoJson',
      realtime: true,
      tiled: true,
      minZoom: 6,
      cluster: { 
        maxClusterRadius: 28,
        disableClusteringAtZoom: 18 
      },
      source: '/api/chirpstack-stations',
      style: {
        point: {
          shape: 'circle',
          radius: 15,
          opacity: 1,
          color: `<% %>white<% %>`,
          stroke: {
            color: `<% %>black<% %>`,
            width: 2
          },
          icon: {
            color: `<% %>black<% %>`,
            classes: 'fa fa-wifi',
          }
        }
      },       
      template: ['style.point.color', 'style.point.stroke.color', 'style.point.icon.color'],
      tooltip: {
        template: `<%= properties.name %>`
      }
    }
  }, 
  {
  name: 'Layers.LORAWAN',
  description: 'Layers.LORAWAN_DESCRIPTION',
  i18n: {
    fr: {
      Layers: {
        LORAWAN: 'Capteurs par Application',
        LORAWAN_DESCRIPTION: 'Capteurs LORAWAN du démonstrateur Kalisio, triés par Application',
        APP1: 'Capteurs chez Adrien',
        APP2: 'Capteurs chez Romain'
      },
      Legend: {
        LORAWAN_MEASUREMENTS_LABEL: 'LoRaData - Mesures',
        LORAWAN_SENSORS_LABEL: 'LoRaData - Capteurs',
        LORAWAN_MEASUREMENT: 'Dernières mesures',
        LORAWAN_SENSOR: 'Capteurs'
      },
      Variables: {         
        LORAWAN_SENSORS_LABEL:'Capteurs de mesures LoRaWAN',
        TEMPERATURE_LABEL: 'Température',
        HUMIDITY_LABEL: `Taux d'humidité`,
        BATTERY_LEVEL_LABEL: 'Taux de charge batterie',
        LAEQ: 'Niveau de pression acoustique continue',
        LAF: 'Niveau sonore avec Pondération Fréquentielle',
        LAFMAX: 'Niveau Sonore Maximal avec Pondération Fréquentielle ' 
      }        
    },
    en: {
      Layers: {
        LORAWAN: 'Sensors per Application',
        LORAWAN_DESCRIPTION: 'LoRaWAN sensors of the demonstrator, sorted per Application',
        APP1: `Adrien's sensors`,
        APP2: `Romain's sensors`
      },
      Legend: {
        LORAWAN_MEASUREMENTS_LABEL: 'LoRaData - Measurements',
        LORAWAN_SENSORS_LABEL: 'LoRaData - Sensors',
        LORAWAN_MEASUREMENT: 'Last measurements',
        LORAWAN_SENSOR: 'Sensors'
      },    
      Variables: {
        LORAWAN_SENSORS_LABEL:'LoRaWAN sensors values',
        TEMPERATURE_LABEL: 'Temperature',
        HUMIDITY_LABEL: 'Humidity level',
        BATTERY_LEVEL_LABEL: 'Battery level',
        LAEQ: 'Sound level A-weighted equivalent',
        LAF: 'Sound level A-weighted',
        LAFMAX: 'Sound level A-weighted fast maximum'
      }    
    }
  },
  legend: [{
    type: 'variables',
    label: 'Legend.LORAWAN_MEASUREMENTS_LABEL',
    minZoom: 8,
  }, {
    type: 'symbols',
    minZoom: 8,
    content: {
      measurements: [
        { symbol: { 'media/KShape': { options: { shape: 'circle', color: '#00a9ce', radius: 10, icon: { classes: 'fa fa-wifi', color: 'white',  size: 10} } } }, 
        label: 'Legend.LORAWAN_MEASUREMENT' 
      },
        /*{ symbol: { 'media/KShape': { options: { shape: 'circle', color: 'black', radius: 10, icon: { classes: 'fa fa-wifi', color: 'white', size: 10 } } } }, 
          label: 'Legend.LORAWAN_OLD_MEASUREMENT' 
        }*/
      ]
    }
  }],
  attribution: "<a href='https://www.chirpstack.io/'>ChirStack</a>",
  tags: ['sensors'],
  type: 'OverlayLayer',
  service: 'chirpstack-observations',
  featureId: 'euid',
  featureLabel: 'name',
  ttl: 7 * 24 * 60 * 60,
  from: 'P-7D',
  to: 'PT-1H',
  every: 'PT1H',
  queryFrom: 'PT-24H',
  variables: [
    {
      name: 'temperature',
      label: 'Variables.TEMPERATURE_LABEL',
      unit: ['°C'],
      range: [-50, 127],
      step: 1,
      chartjs: {
        backgroundColor: 'rgba(255, 99, 132, 128)',
        borderColor: 'rgb(255, 99, 132)',
        fill: false
      }
    },
    {
      name: 'humidity',
      label: 'Variables.HUMIDITY_LABEL',
      unit: ['%'],
      range: [-50, 127],
      step: 1,
      chartjs: {
        backgroundColor: 'rgb(70, 137, 253, 128)',
        borderColor: 'rgb(70, 137, 253)',
        fill: false
      }
    },
    {
      name: 'battery',
      label: 'Variables.BATTERY_LEVEL_LABEL',
      unit: ['%'],
      range: [0, 100],
      step: 5,
      chartjs: {
        backgroundColor: 'rgba(1, 10, 1, 128)',
        borderColor: 'rgb(1, 10, 1)',
        fill: false
      }
    },
    {
      name: 'lamax',
      label: 'Variables.LAFMAX',
      unit: ['dbA'],
      range: [0, 160],
      step: 1,
      chartjs: {
        backgroundColor: 'rgba(79, 56, 0, 128)',
        borderColor: 'rgb(79, 56, 0)',
        fill: false
      }
    },
    {
      name: 'laeq',
      label: 'Variables.LAEQ',
      unit: ['dbA'],
      range: [0, 160],
      step: 1,
      chartjs: {
        backgroundColor: 'rgba(79, 14, 0, 128)',
        borderColor: 'rgb(79, 14, 0)',
        fill: false
      }
    },
    {
      name: 'la',
      label: 'Variables.LAF',
      unit: ['dbA'],
      range: [0, 160],
      step: 1,
      chartjs: {
        backgroundColor: 'rgba(79, 0, 35, 128)',
        borderColor: 'rgb(79, 0, 35)',
        fill: false
      }
    }
  ],
  filters: [{
    label: 'Layers.APP1',
    isActive: true,
    active: { 'properties.app_name': 'test' },
    inactive: {}
  }, {
    label: 'Layers.APP2',
    isActive: false,
    active: { 'properties.app_name': 'KalisioMap' },
    inactive: {}
  }],
  leaflet: {
    type: 'geoJson',
    realtime: true,
    tiled: true,
    minZoom: 8,
    cluster: { 
      maxClusterRadius: 28,
      disableClusteringAtZoom: 18 
    },
    source: '/api/chirpstack-observations',
    style: {
      point: {
        shape: 'circle',
        radius: 15,
        opacity: 1,
        color: `<% if (_.has(properties, 'name')) { %>#138dce<% }
                    else if (feature.measureRequestIssued) { %>black<% }
                    else { %>white<% } %>`,
        stroke: {
          color: `<% if (_.has(properties, 'name')) { %>transparent<% }
                    else if (feature.measureRequestIssued) { %>white<% }
                    else { %>black<% } %>`,
          width: 2
        },
        icon: {
          color: `<% if (_.has(properties, 'name')) { %>white<% }
                    else if (feature.measureRequestIssued) { %>white<% }
                    else { %>black<% } %>`,
          classes: 'fa fa-wifi',
        }
      }
    },       
    template: ['style.point.color', 'style.point.stroke.color', 'style.point.icon.color'],
    tooltip: {
      template: `<%= properties.name %>`
    }
  }
}
]



