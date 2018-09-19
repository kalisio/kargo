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
    "revision": "52b911c1b1f76c645497f2262fd77b59"
  },
  {
    "url": "assets/css/1.styles.36c1a3fe.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.05c23c5c.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/styles.f6817a24.css",
    "revision": "c1703aa2a4d7eef65645a2158d133a03"
  },
  {
    "url": "assets/img/kargo-normal.1bee1e59.svg",
    "revision": "1bee1e59739c672d9725f2b2c2b81442"
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
    "url": "assets/js/1.36c1a3fe.js",
    "revision": "3d0ac264e1348f990dddb40d19b6b311"
  },
  {
    "url": "assets/js/10.d07a32f4.js",
    "revision": "cda4f6823bd11b3c6cd1e5664e78facb"
  },
  {
    "url": "assets/js/2.05c23c5c.js",
    "revision": "865e7a1a09bde7792c9d783322b9a691"
  },
  {
    "url": "assets/js/3.f6033dbe.js",
    "revision": "cfb2dfaf04345cad1db6a3c93e437252"
  },
  {
    "url": "assets/js/4.96b5875c.js",
    "revision": "91c45301b1e9b23f1ac8bf991a4e678b"
  },
  {
    "url": "assets/js/5.c24ccf96.js",
    "revision": "5a50fd78186c6d906fa1bdd6d3dd38a7"
  },
  {
    "url": "assets/js/6.e0baece6.js",
    "revision": "2b5d02f15aec62bd61c7fb622f6c2eec"
  },
  {
    "url": "assets/js/7.9a71243b.js",
    "revision": "e08a493c75abe4951f10d7d786f631ee"
  },
  {
    "url": "assets/js/8.7630d6dd.js",
    "revision": "ff0dc1dc2d67ac0000292164c34e0f7c"
  },
  {
    "url": "assets/js/9.c0bb6cb1.js",
    "revision": "99be267dc53af274527dd3e8770d6a50"
  },
  {
    "url": "assets/js/app.f6817a24.js",
    "revision": "f02274a72624814e25adff0c0d822ef8"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "c6b16e1be723a9cc5a2de0613cdf1479"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "746eee8a12a88a37ee89a0353d0c2171"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "363aa24e65f82f9b7588076c80fa0f0c"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "b10ba1a84c4678943b324c04ccaba95a"
  },
  {
    "url": "index.html",
    "revision": "a8e275da287d088721ff7471eaf2bee2"
  },
  {
    "url": "LICENSE.html",
    "revision": "e35b1ed6d0b2939733e4d46575622b42"
  },
  {
    "url": "license/index.html",
    "revision": "70fbab1e79879f4c3960e160b2e3a499"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "a7ac6ff12df0f42a0de89afbc68a1f7c"
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
