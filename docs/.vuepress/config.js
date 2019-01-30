module.exports = {
  base: '/kargo/',
  title: 'Kargo',
  description: 'A Docker based solution to deploy Geospatial Services',
  head: [
    ['link', { rel: 'icon', href: `https://s3.eu-central-1.amazonaws.com/kalisioscope/kargo/kargo-icon-64x64.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  plugins: ['@vuepress/pwa'],
  theme: 'kalisio',
  themeConfig: {
    docsDir: 'docs',
    plugins: {
      '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: true
      }
    },
    nav: [
      { text: 'About', link: '/about/' },
      { text: 'Guides', link: '/guides/' },
      { text: 'Reference', link: '/reference/' },
      { text: 'Tips', link: '/tips/' },
    ],
    sidebar: {
      '/about/': getAboutSidebar(),
      '/guides/': getGuidesSidebar(),
      '/reference/configuration': getReferenceSidebar(),
      '/tips/': getTipsSidebar()
    }
  }
}

function getAboutSidebar () {
  return [
    '',
    'roadmap',
    'license',
    'contact'
  ] 
}

function getGuidesSidebar () {
  return [
    '',
    'prepare-the-infrastructure',
    'setup-the-services',
    'manage-the-services'
  ]
}

function getReferenceSidebar () {
  return [
    'configuration',
    'cli'
  ]
}

function getTipsSidebar () {
  return [
    ''
  ]
}