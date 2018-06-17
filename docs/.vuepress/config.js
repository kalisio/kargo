module.exports = {
  base: '/kargo/',
  title: 'Kargo',
  description: 'A Docker based solution to deploy Geospatial Services',
  head: [
    ['link', { rel: 'icon', href: `https://s3.eu-central-1.amazonaws.com/kalisioscope/kargo/kargo-icon-32x32.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  serviceWorker: false,
  theme: 'kalisio',
  themeConfig: {
    docsDir: 'docs',
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
        link: '/how-to-use-it/'
      },
	  {
		text: 'License',
		link: '/license/'
	  },
      {
        text: 'GitHub',
        link: 'https://github.com/kalisio/kargo'
      }
    ]
  }
}