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
    "url": "about/contact.html",
    "revision": "8714f966ae0b7be4bdc699f3b7facdc8"
  },
  {
    "url": "about/contributing.html",
    "revision": "fa78a111aa182cb7ba956d2484dec2e8"
  },
  {
    "url": "about/introduction.html",
    "revision": "8331a5f06d0f7aa674c00247c1c0de1c"
  },
  {
    "url": "about/license.html",
    "revision": "c5aaca126bb71b761edeb3145b15a5a2"
  },
  {
    "url": "about/roadmap.html",
    "revision": "20d9f41252ddc2dbdb12ef59ffa9da6f"
  },
  {
    "url": "assets/css/0.styles.1ef25942.css",
    "revision": "9cac0b895931aeea625ce73ed37c9f16"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2ce671be.js",
    "revision": "2da02e28e503aeb8cb1c28b0eed6820d"
  },
  {
    "url": "assets/js/11.1df4a97d.js",
    "revision": "506b07a0e5d6d13106a8c3cbc64a2ba1"
  },
  {
    "url": "assets/js/12.83998b3d.js",
    "revision": "c9ac9168cfb9eb3e5388288f16ae2e24"
  },
  {
    "url": "assets/js/13.32a35a31.js",
    "revision": "52416d155e388953b2c4a1d21c1e973d"
  },
  {
    "url": "assets/js/14.30fb492e.js",
    "revision": "d1fd70ce504cf468e2b8d98c77e68fe7"
  },
  {
    "url": "assets/js/15.068098ac.js",
    "revision": "a5027da54848eae8a17da71fdefaba32"
  },
  {
    "url": "assets/js/16.86813515.js",
    "revision": "81f394c2cfa4fc5dfd7ef47575faffff"
  },
  {
    "url": "assets/js/17.97af0214.js",
    "revision": "56d70cf9add57e4bf86298464eaef962"
  },
  {
    "url": "assets/js/18.6c6549b2.js",
    "revision": "3ff2ecdf7826866e0fe30cdf136f7590"
  },
  {
    "url": "assets/js/19.eedd02ef.js",
    "revision": "5f5402632be99519cf74aca1d0a25fcc"
  },
  {
    "url": "assets/js/2.988b0bdb.js",
    "revision": "047c6b781c6f9414aa9823986b0ee789"
  },
  {
    "url": "assets/js/20.714fbdf5.js",
    "revision": "ad397b161320a29f3a551a2a6a43b7dc"
  },
  {
    "url": "assets/js/21.14ccbfa7.js",
    "revision": "724bea696e88fbfaa8eab140453e87a5"
  },
  {
    "url": "assets/js/22.6ede580f.js",
    "revision": "70cc7cac71930ade885e1a78274a5ae2"
  },
  {
    "url": "assets/js/23.79d65731.js",
    "revision": "cf75a7a83ee11d992c8061383796fb73"
  },
  {
    "url": "assets/js/24.73aa786e.js",
    "revision": "3512fa61346aa5333eafb6e5857897e3"
  },
  {
    "url": "assets/js/25.b1c40f75.js",
    "revision": "deb8f6b01ff9fd2c5186e0b04aa352b8"
  },
  {
    "url": "assets/js/26.d868bc30.js",
    "revision": "a60183eb6dc8e708a317dbb0bda33229"
  },
  {
    "url": "assets/js/3.1fd26862.js",
    "revision": "99290d132067da2d89b1a221ad08615e"
  },
  {
    "url": "assets/js/4.06ce6fa0.js",
    "revision": "e5b435555f03519eed637dbeffd706ce"
  },
  {
    "url": "assets/js/5.300c116d.js",
    "revision": "821ed22a1176b6203d354c749d00155c"
  },
  {
    "url": "assets/js/6.ca3ac8c5.js",
    "revision": "52c3f520e6abca611eedf44ffa3e092f"
  },
  {
    "url": "assets/js/7.44a18220.js",
    "revision": "ead96491112f9f2f4e9f96d3e181d3ae"
  },
  {
    "url": "assets/js/8.6c23e807.js",
    "revision": "d0e12baca301040b221c00293f559019"
  },
  {
    "url": "assets/js/9.6d79a617.js",
    "revision": "df82134c231389c9525b439aed1fcd11"
  },
  {
    "url": "assets/js/app.30429d29.js",
    "revision": "7eaf53516733db3433ea573d3fa7e474"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "33fd4a0c94dbee2ff91caf949cdea99b"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "1c384fb524a88b0ac68aa1571bd0ce8b"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "2132e41b214707909c9fcc0d45a61f07"
  },
  {
    "url": "index.html",
    "revision": "2cf579d6cf0f7c544fe7f86fb7f817df"
  },
  {
    "url": "reference/cli.html",
    "revision": "ca0730fe842a6c95d124019bad866950"
  },
  {
    "url": "reference/environment.html",
    "revision": "fe110738605f3070b3693c36c52984bb"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "953bb585258df969e21ca8a1e38c9b89"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "148220708e3ef8b6026c67a7aa49d477"
  },
  {
    "url": "tips/packaging-images.html",
    "revision": "6bfad5347e3c45f4a3cf8b414f815372"
  },
  {
    "url": "tips/using-kargo-toolbox.html",
    "revision": "021c376f72ea51c58c01e33c02490468"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "cbc191dbc4f3355fa54c52af3d02377d"
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
