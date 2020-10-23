/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0c1f5a0f7473672f9de89c5524e6beee"
  },
  {
    "url": "about/contact.html",
    "revision": "2442656cc990e28bd3c5d6f1b4dac786"
  },
  {
    "url": "about/contributing.html",
    "revision": "8514cd0f0dc0ba980c39e52427b9d9fe"
  },
  {
    "url": "about/introduction.html",
    "revision": "850ad85a4e0bcced5da275d27d9ad74c"
  },
  {
    "url": "about/license.html",
    "revision": "1b0549a8045d9c4474fa937b098a5199"
  },
  {
    "url": "about/roadmap.html",
    "revision": "670d471fcb05bab9511483ce4dd47628"
  },
  {
    "url": "assets/css/0.styles.4394fa43.css",
    "revision": "a610e36f9f4ee5a70513f93fb78e0742"
  },
  {
    "url": "assets/img/kargo-example-assumptions.0161491c.svg",
    "revision": "0161491c33e7fec4f51f7c08ae848056"
  },
  {
    "url": "assets/img/kargo-gateway.293e1ae6.svg",
    "revision": "293e1ae6a9fba495bb3160f821f7ae2d"
  },
  {
    "url": "assets/img/kargo-overview.d15a93e9.svg",
    "revision": "d15a93e9f37f40a3043013ded5fa3ddf"
  },
  {
    "url": "assets/img/kargo-principle.5032ebad.svg",
    "revision": "5032ebad14713bc2fdde4e1a0ddc90ad"
  },
  {
    "url": "assets/img/kargo-traefik.21ca1aa0.svg",
    "revision": "21ca1aa02c5cc1512f8ecc6265ef6978"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.dcec99e5.js",
    "revision": "645c2513fd2a576605122d65f6caca64"
  },
  {
    "url": "assets/js/11.f50ddd9e.js",
    "revision": "f4285e77f01e15ded34d856df049defb"
  },
  {
    "url": "assets/js/12.1b1e9da4.js",
    "revision": "4a0dbcd781335e2c945c31c081f1a768"
  },
  {
    "url": "assets/js/13.37b2095e.js",
    "revision": "eb5fae1a3ab4c24a5c4756e5522bbfaa"
  },
  {
    "url": "assets/js/14.de565671.js",
    "revision": "d7c5f2a744bd63bcb571abea72fa0b36"
  },
  {
    "url": "assets/js/15.baf6adf1.js",
    "revision": "09ad76258ab13a8eb1e4d743b12819c1"
  },
  {
    "url": "assets/js/16.f6e7af4c.js",
    "revision": "16e42faff070e9983daa802154159346"
  },
  {
    "url": "assets/js/17.c3b7dde0.js",
    "revision": "17cc7890aa9e7b1cc9935462872d10f1"
  },
  {
    "url": "assets/js/18.03b5fbdb.js",
    "revision": "29da15f966cbe85c6726631e8df3fed1"
  },
  {
    "url": "assets/js/19.fbaade4e.js",
    "revision": "178eda6f4f1fbc1ee2b7941686aca5d5"
  },
  {
    "url": "assets/js/2.137cd41d.js",
    "revision": "6acb87cdb62541e87747c6cbd375cff0"
  },
  {
    "url": "assets/js/20.b48dbdf7.js",
    "revision": "992879baa91fa10abb81751cf3e8d8db"
  },
  {
    "url": "assets/js/21.791e4da8.js",
    "revision": "27231118d24a4ca08ce1fd203bcbe3b5"
  },
  {
    "url": "assets/js/22.c13e1077.js",
    "revision": "efd0514254cc465c465fdd0746a2334f"
  },
  {
    "url": "assets/js/23.cf66b2e5.js",
    "revision": "4e6f2155f37b82b2b845bc982f9430f2"
  },
  {
    "url": "assets/js/24.04444ef9.js",
    "revision": "e0f84fc24e224e25d451944bd2a93ed7"
  },
  {
    "url": "assets/js/25.2daaac4e.js",
    "revision": "2efe19c775b70ea00c9d420278c1d3b1"
  },
  {
    "url": "assets/js/26.1cdfc671.js",
    "revision": "5fd4a5227b708d08a50b4979ec11b44d"
  },
  {
    "url": "assets/js/27.61554241.js",
    "revision": "e7c7da3431da8440317378b7c9fa0d26"
  },
  {
    "url": "assets/js/3.10e6b22f.js",
    "revision": "d8436e3a24b15784aed0c4c5b5f2f689"
  },
  {
    "url": "assets/js/4.e33f0012.js",
    "revision": "2a790a2b99bd2a1c81ab92326b96ae5a"
  },
  {
    "url": "assets/js/5.76422ff7.js",
    "revision": "05018a2e44c9dea9ec7a8d866f676105"
  },
  {
    "url": "assets/js/6.0d795b00.js",
    "revision": "34a9b3d7b67cd29f7740f6c174e8d1c0"
  },
  {
    "url": "assets/js/7.5da558fd.js",
    "revision": "0032ff7a94ac3cde63581ec6763b83f6"
  },
  {
    "url": "assets/js/8.d4dead66.js",
    "revision": "50a2a51ad76f7fb556bcb19f0d6b3d76"
  },
  {
    "url": "assets/js/9.5a2f9245.js",
    "revision": "622e6f59b48d091ee14c0fd1c69f0aa5"
  },
  {
    "url": "assets/js/app.f7b6f46f.js",
    "revision": "58b2be1d7a2f8c8359cd2df5f54edeca"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "e92295ddf7d1627e3c2009fbaa3fb566"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "de404eb9d1f203633296021ea1c1c0d2"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "8a73a8f77bed06fcfa9d162ba5834ce1"
  },
  {
    "url": "index.html",
    "revision": "0b4fefc5425b9e69ab3b54c838b6102d"
  },
  {
    "url": "reference/cli.html",
    "revision": "cee3517a82b70c348cb0d95accd8dcba"
  },
  {
    "url": "reference/environment.html",
    "revision": "a83677d736a802e8a39aff48f5acfe3a"
  },
  {
    "url": "reference/helper-scripts.html",
    "revision": "9b04384215a8927c55fdb5390916712b"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "4283508900f433355a6d452ca582761c"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "524d2b19eef5ac05e9e239e37219a328"
  },
  {
    "url": "tips/using-artillery.html",
    "revision": "45df66fc312b4f68fbcef57d8722fbf0"
  },
  {
    "url": "tips/using-gdal.html",
    "revision": "902bf9c45b1a9c881ab6d26e8cf791f2"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "36302a46cc918e1bb01400a56cc4f0fb"
  },
  {
    "url": "tips/using-private-registry.html",
    "revision": "efbf58a032b87bcfa22157ae668d8065"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
