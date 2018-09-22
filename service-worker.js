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
    "revision": "9c097d5ded9c0f71d0cfcc3cf1dfc201"
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
    "url": "assets/css/styles.844607a0.css",
    "revision": "c1703aa2a4d7eef65645a2158d133a03"
  },
  {
    "url": "assets/img/kargo-overview.d766f581.svg",
    "revision": "d766f58152e9cfa93f26eae2cd926c6b"
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
    "url": "assets/js/10.bf14c794.js",
    "revision": "70c6c2bf5a2ce87906150a6947e577e8"
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
    "url": "assets/js/app.844607a0.js",
    "revision": "f0317b6e7ebb07c3cbc269f8b99095c7"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "cf5f83ea0f1a6a44f2002bcd95fac785"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "b29a1377d2e026060ad21ccab0a2cfe8"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "0bfe8ee5f1b26a4ea16ee15945d17e33"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "0e21ed198514cf56c56c6e2a0ca4ad26"
  },
  {
    "url": "index.html",
    "revision": "71317ca2004da9dc0659d8278977dfeb"
  },
  {
    "url": "LICENSE.html",
    "revision": "7bce4e80591fcf95e3ccc56009b028ec"
  },
  {
    "url": "license/index.html",
    "revision": "7fd11729c4183e6eeebfa06fac60507a"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "4ffb41188f34ae9c2b08d7b84034bd9d"
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
