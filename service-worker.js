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
    "revision": "e7ed6e97f9a3f316df3b9f2a2f627a53"
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
    "url": "assets/css/styles.0c7d1f83.css",
    "revision": "c1703aa2a4d7eef65645a2158d133a03"
  },
  {
    "url": "assets/img/kargo-overview.d15a93e9.svg",
    "revision": "d15a93e9f37f40a3043013ded5fa3ddf"
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
    "url": "assets/js/10.f61d20fd.js",
    "revision": "95b57e5e8e14c9298379ff58d5d64be4"
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
    "url": "assets/js/app.0c7d1f83.js",
    "revision": "86245463c0b49a342926838ebe23ffb6"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "9fa2d2146c2a9b1923835769b61b81ec"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "16bbbdad9970858c23f92f8d11dcd420"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "97b2bc7dc3c866741a6d809e031c84dc"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "8936bfb028f3642569702bca1e7f5648"
  },
  {
    "url": "index.html",
    "revision": "a3fdeaf5941f5c9894bbcb1f2021bd0b"
  },
  {
    "url": "LICENSE.html",
    "revision": "2ae275a10f1406b9e4130ab1a8ad059d"
  },
  {
    "url": "license/index.html",
    "revision": "daed81e0f1d54c22e68fea9b6d11ddfb"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "c37d85a03cdfeb7ecce84dba9be97e27"
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
