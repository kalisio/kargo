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
    "revision": "1dd2cd5bd886c8d353e2f9f283d27cf0"
  },
  {
    "url": "about/contact.html",
    "revision": "7f576bf051f9b5c7c3b7d4e0bb9fcaeb"
  },
  {
    "url": "about/contributing.html",
    "revision": "fbda00e4ab6b802f72c2c1d8c36d2ccd"
  },
  {
    "url": "about/introduction.html",
    "revision": "559ebc3deaa4f9cf024fab967d993f01"
  },
  {
    "url": "about/license.html",
    "revision": "80f0bb0cfe2df24d4dbce87c5ea3bc54"
  },
  {
    "url": "about/roadmap.html",
    "revision": "f8ca7bcf77db17438a8f423143fe4078"
  },
  {
    "url": "assets/css/0.styles.7357db9c.css",
    "revision": "89cbb38fba8eef641e041d2ceb23f315"
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
    "url": "assets/js/10.6fd677d7.js",
    "revision": "09f1219171c5d5a6c29d8266e4c4870b"
  },
  {
    "url": "assets/js/11.835a380f.js",
    "revision": "7e374e49648d828bfed189bf2caa5328"
  },
  {
    "url": "assets/js/12.a39d9573.js",
    "revision": "3c0ae1181d6f7f3d9350008c80b35db7"
  },
  {
    "url": "assets/js/13.93bad38b.js",
    "revision": "02dbc53076ff3189a4d71c751aeaa8f4"
  },
  {
    "url": "assets/js/14.d94d5659.js",
    "revision": "5c51f8876af4dbd3be01801f6912f4cf"
  },
  {
    "url": "assets/js/15.c7477235.js",
    "revision": "c4f08d062125c35101b860680b6dfef7"
  },
  {
    "url": "assets/js/16.b3bcda79.js",
    "revision": "993350762e3221a8e73980d919356e98"
  },
  {
    "url": "assets/js/17.ba6057e0.js",
    "revision": "ecae657fbc4dc669e63592533d62dc31"
  },
  {
    "url": "assets/js/18.d537bbe6.js",
    "revision": "b7701175937aabbb4a36026b40baa248"
  },
  {
    "url": "assets/js/19.a77ab062.js",
    "revision": "8d4d47b650f8b0c5030ed61f4c793094"
  },
  {
    "url": "assets/js/2.7cc61a80.js",
    "revision": "f41ccb7ceb6f704dadb086d681d8c1c3"
  },
  {
    "url": "assets/js/20.09d629cb.js",
    "revision": "0ca918299eea4dcace96ba46eee55b21"
  },
  {
    "url": "assets/js/21.7edf6010.js",
    "revision": "b1d006d5862d835069498bfd38e537de"
  },
  {
    "url": "assets/js/22.0641f1a9.js",
    "revision": "72fbadbc0a12443ef2dcd52742387c00"
  },
  {
    "url": "assets/js/23.db3747c6.js",
    "revision": "f07b6f7c1a8b2428e6f1e7af39c19dab"
  },
  {
    "url": "assets/js/24.2d863ecb.js",
    "revision": "d38c712ad5b750cd2ef65bf55d023e30"
  },
  {
    "url": "assets/js/25.6d71883b.js",
    "revision": "b25210c7ef0215a3e79c9f90ae8aba73"
  },
  {
    "url": "assets/js/26.5486c19f.js",
    "revision": "93339661dd0da48a8c9006b9d496d4c4"
  },
  {
    "url": "assets/js/27.5956ba95.js",
    "revision": "b71d71edcd7be9cf80e426e36f25f304"
  },
  {
    "url": "assets/js/28.4050faa8.js",
    "revision": "05392baf5e9eef58fc23f859e42f1d7c"
  },
  {
    "url": "assets/js/29.fafdf44d.js",
    "revision": "36932593c0b70b1cd2140972d7270ffb"
  },
  {
    "url": "assets/js/3.f09f66f6.js",
    "revision": "e49631f83202760d91f8c0cf369bb29b"
  },
  {
    "url": "assets/js/30.2613328a.js",
    "revision": "edb64e2338425baaab3736bfe807ae74"
  },
  {
    "url": "assets/js/31.cb1c3fab.js",
    "revision": "9e7bac8aa74e4b85464d8f69236f9c7c"
  },
  {
    "url": "assets/js/32.c7b65c11.js",
    "revision": "618ba993798b70e06e4657f14527315e"
  },
  {
    "url": "assets/js/4.5c2690c3.js",
    "revision": "570f5395468ed3fdf48afe2acd78b09b"
  },
  {
    "url": "assets/js/5.c8183caa.js",
    "revision": "caadff3f8134be9153dd5132b5d1935d"
  },
  {
    "url": "assets/js/6.208b90d5.js",
    "revision": "534d0f80087c0ebc4fa02b42f729c763"
  },
  {
    "url": "assets/js/7.65777dff.js",
    "revision": "c0b5f79a8f35287179b402722714bf35"
  },
  {
    "url": "assets/js/8.79864e3c.js",
    "revision": "f0d4f4c4085119f783d626f2218cfb28"
  },
  {
    "url": "assets/js/9.09ad2f39.js",
    "revision": "3fdb34f849126c7bc98cb050d7aaf2fd"
  },
  {
    "url": "assets/js/app.80aae338.js",
    "revision": "e458c3337f9cde999111c718cab9b4cc"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "16106096914c19f6bb58d10645fbeace"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "a917dec25d43874a7082847be17f5817"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "eb9399accd4a4998d22efd7bc3e913b1"
  },
  {
    "url": "index.html",
    "revision": "d21e135a303ecafd82a982cc0cc233fe"
  },
  {
    "url": "reference/cli.html",
    "revision": "c4d2ffe8a16cd1c66a72604629ef882b"
  },
  {
    "url": "reference/environment.html",
    "revision": "0137696b1694ed22b15d7bd4a94c4b16"
  },
  {
    "url": "reference/helper-scripts.html",
    "revision": "cff726ae2d547182e3acc5f364437740"
  },
  {
    "url": "reference/scripts-library.html",
    "revision": "feb5f0e4d3c38d1f09b6a2ceb5828abd"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "5f25ec2f03dbb5b672b58fafcc4880a1"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "937eb41f30fecc17a974d60ccf6abd5b"
  },
  {
    "url": "tips/using-artillery.html",
    "revision": "69f68e7e48ca20d030d8a94769ff5d7c"
  },
  {
    "url": "tips/using-gdal.html",
    "revision": "d7d7bc0840ddbcf9a0ca23e24963098d"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "2fd6c43f0c3b8ef126ede295d289e24f"
  },
  {
    "url": "tips/using-private-registry.html",
    "revision": "8bd1bac25350629e931b11c63b0b780b"
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
