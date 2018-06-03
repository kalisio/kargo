module.exports = {
  base: '/kargo/',
  title: 'Kargo',
  description: 'A Docker based solution to deploy Geospatial Services',
  serviceWorker: true,
  theme: 'vue',
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
      }
    ]
  }
}