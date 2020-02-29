module.exports = {
  base: '/kargo/',
  title: 'Kargo',
  description: 'A Docker based solution to deploy Geospatial Services',
  head: [
    ['link', { rel: 'icon', href: `https://s3.eu-central-1.amazonaws.com/kalisioscope/kargo/kargo-icon-64x64.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  theme: 'kalisio',
  themeConfig: {
    docsDir: 'docs',
    nav: [
      { text: 'About', link: '/about/introduction' },
      { text: 'Guides', link: '/guides/understanding-kargo' },
      { text: 'Reference', link: '/reference/environment' },
      { text: 'Tips', link: '/tips/using-kargo-toolbox' },
      { text: 'GitHub', link: 'https://github.com/kalisio/kargo' }
    ],
    sidebar: {
      '/about/': getAboutSidebar(),
      '/guides/': getGuidesSidebar(),
      '/reference/': getReferenceSidebar(),
      '/tips/': getTipsSidebar()
    }
  }
}

function getAboutSidebar () {
  return [
    'introduction',
    'roadmap',
    'contributing',
    'license',
    'contact'
  ] 
}

function getGuidesSidebar () {
  return [
    'understanding-kargo',
    'getting-started',
    'advanced-usage'
  ]
}

function getReferenceSidebar () {
  return [
    'environment',
    'cli'
  ]
}

function getTipsSidebar () {
  return [
    'using-kargo-toolbox',
    'packaging-images',
    'handling-long-running-process',
    'using-mongodb-atlas',    
    'extracting-osm-data'
  ]
}