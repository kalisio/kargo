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
    "revision": "672634f88c30bff2591bd2f237da8e5b"
  },
  {
    "url": "about/contact.html",
    "revision": "e75d500cf96130fc8852cc029daefa7c"
  },
  {
    "url": "about/contributing.html",
    "revision": "210ad81af2ddfc6ac574a1a491502864"
  },
  {
    "url": "about/introduction.html",
    "revision": "5982dc4b4ca7047d9c5f0eb58e874373"
  },
  {
    "url": "about/license.html",
    "revision": "cc6c17df2ef2d682f3512bab3546a09a"
  },
  {
    "url": "about/roadmap.html",
    "revision": "0bdef74e9104afc84065e79399ebde80"
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
    "url": "assets/js/10.98971c2d.js",
    "revision": "a1414f93f7a394e94dfa1c2791966b94"
  },
  {
    "url": "assets/js/11.0c36b719.js",
    "revision": "f1a309044195c4e9c28b37eb39aa2b5b"
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
    "url": "assets/js/17.b923da4c.js",
    "revision": "821099863aac2df3fbfe3035d7816699"
  },
  {
    "url": "assets/js/18.c1aa1da1.js",
    "revision": "91953c25c5e6687eae56559074f5a1d2"
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
    "url": "assets/js/20.91d8f3f4.js",
    "revision": "1fe48331110f346098c651bad4ec57fb"
  },
  {
    "url": "assets/js/21.7edf6010.js",
    "revision": "b1d006d5862d835069498bfd38e537de"
  },
  {
    "url": "assets/js/22.f10a6b77.js",
    "revision": "52ceff16d6d99025b2851dabdbfc168d"
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
    "url": "assets/js/29.4d5f7f45.js",
    "revision": "aa8cacd09af59c9cd708217709f51744"
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
    "url": "assets/js/8.367e7920.js",
    "revision": "32ce52108e13a8d4691a4b6c0d1c00ee"
  },
  {
    "url": "assets/js/9.09ad2f39.js",
    "revision": "3fdb34f849126c7bc98cb050d7aaf2fd"
  },
  {
    "url": "assets/js/app.d7fae415.js",
    "revision": "ed05aee010d6398a5aad8369648365fb"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "fcdcc2057520d7b9befde9b5f2965fab"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "585da3b284ebe5acd197d4c39262a427"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "94bd025b7aa7094611c75db95b2d5f6a"
  },
  {
    "url": "index.html",
    "revision": "81e188d597cd0122db5779705220d310"
  },
  {
    "url": "reference/cli.html",
    "revision": "19c0a4bca424f3d354e3fb2929d652e4"
  },
  {
    "url": "reference/environment.html",
    "revision": "5bd12414980c6be6c3415677d5e8deb4"
  },
  {
    "url": "reference/helper-scripts.html",
    "revision": "baad73c59a6e4e797f7c94295ef4a457"
  },
  {
    "url": "reference/scripts-library.html",
    "revision": "c5c12d6cd2504302df6f2e459e9a423b"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "ceecf7cd48eba5e3068e0ac90df51eb0"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "1f8f9429d16c79bef6655a635fb3f57c"
  },
  {
    "url": "tips/using-artillery.html",
    "revision": "ed964df1f6877131fb3e00a96dc02e31"
  },
  {
    "url": "tips/using-gdal.html",
    "revision": "4fdb7f77c2e8cf80faf86bcf736e640e"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "3f19c773759acda543dfbcd1aa85c494"
  },
  {
    "url": "tips/using-private-registry.html",
    "revision": "821fe992d79fcf9e38017061d95d3ec1"
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
