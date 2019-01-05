module.exports = {
  base: '/kargo/',
  title: 'Kargo',
  description: 'A Docker based solution to deploy Geospatial Services',
  head: [
    ['link', { rel: 'icon', href: `https://s3.eu-central-1.amazonaws.com/kalisioscope/kargo/kargo-icon-64x64.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  serviceWorker: true,
  theme: 'kalisio',
  themeConfig: {
    docsDir: 'docs',
    serviceWorker: {
      updatePopup: true
    },
    nav: [
      {
        text: 'What is it ?',
        link: '/what-is-it/',
      },
      {
        text: 'How doest it work ?',
        link: '/how-does-it-work/'
      },
      {
        text: 'How to use it ?',
        items: [
          { text: 'Getting started', link: '/how-to-use-it/getting-started.md' },
          { text: 'Tips', link: '/how-to-use-it/tips' }
        ]
      },
      {
        text: '   ?',
        items: [
          { text: 'GitHub', link: 'https://github.com/kalisio/kargo' },
          { text: 'Contributing', link: '/CONTRIBUTING.md' },
          { text: 'License', link: '/LICENSE.md' }
        ]
      }
    ]
  }
}