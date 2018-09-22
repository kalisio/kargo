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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6b0925d6567ce20ce6d900bfcc894973"
  },
  {
    "url": "assets/css/1.styles.30c62ce1.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.fcd59bef.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/styles.b1f6096f.css",
    "revision": "c1703aa2a4d7eef65645a2158d133a03"
  },
  {
    "url": "assets/img/kargo-overview.8587362a.svg",
    "revision": "8587362a6803480d48f892f023f405d8"
  },
  {
    "url": "assets/img/kargo-swarm.a7faee5b.svg",
    "revision": "a7faee5b28caa61f8981998cf6d7e042"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.30c62ce1.js",
    "revision": "53342a51ba3c650c8da89fa6a5781f1d"
  },
  {
    "url": "assets/js/10.d14bc070.js",
    "revision": "4e518588f62d1575e01384a6e1cb2d57"
  },
  {
    "url": "assets/js/2.fcd59bef.js",
    "revision": "92154b2b25cea7c2ccd922a319a17b25"
  },
  {
    "url": "assets/js/3.625e7c95.js",
    "revision": "20870cd3b85364a9d88ecf23277d119f"
  },
  {
    "url": "assets/js/4.98630d2b.js",
    "revision": "53dc4ae2abdd606d1bd4a2a93192c5e5"
  },
  {
    "url": "assets/js/5.5cec7220.js",
    "revision": "506636539146dfbacdb87c081bcb35df"
  },
  {
    "url": "assets/js/6.b1595976.js",
    "revision": "ad9daf40f1743b7da8289ece38a9fa80"
  },
  {
    "url": "assets/js/7.b398c979.js",
    "revision": "00772c15a1ad46a596a804c7c0d2406d"
  },
  {
    "url": "assets/js/8.d390b8f0.js",
    "revision": "202ede5bcb10d1e5c6be605226eb4e4c"
  },
  {
    "url": "assets/js/9.2d5df535.js",
    "revision": "369a768c9d60efa10630e89089bbad5c"
  },
  {
    "url": "assets/js/app.b1f6096f.js",
    "revision": "d1c660faa470c88aaf73952d0e7c762c"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "f9b6b65cee032218edd35a4f16fd689c"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "72509e9da799ea169d7577172fc775c0"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "a4c013e3ad7a852db582e0e6d7564f2a"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "f73ccf20d47c2f2183d0d6dd76cf8abf"
  },
  {
    "url": "index.html",
    "revision": "53289ac1a6e28c283cdfb190bc3e6f0a"
  },
  {
    "url": "LICENSE.html",
    "revision": "06c3dbc0bb7537272d40de03f5362d40"
  },
  {
    "url": "license/index.html",
    "revision": "0ec3a37ac6da6cb5e71aa5dbd92b2936"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "d5b01db0de5f54d2f66e9639400182fa"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
