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
    "revision": "6b5abd9db8297f0d70bddd8d6d32a2bb"
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
    "url": "assets/css/styles.b9e7ddd1.css",
    "revision": "c1703aa2a4d7eef65645a2158d133a03"
  },
  {
    "url": "assets/img/kargo-example-assumptions.0161491c.svg",
    "revision": "0161491c33e7fec4f51f7c08ae848056"
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
    "url": "assets/js/1.36c1a3fe.js",
    "revision": "3d0ac264e1348f990dddb40d19b6b311"
  },
  {
    "url": "assets/js/10.623dddfe.js",
    "revision": "aabc9a542b3925eac1c99854b3ff54ff"
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
    "url": "assets/js/5.4d9a3088.js",
    "revision": "1ac04799af54561dbf47e74f47ee8437"
  },
  {
    "url": "assets/js/6.3f556caa.js",
    "revision": "a078fb29e2c6a703d3a4ebc46cecb464"
  },
  {
    "url": "assets/js/7.87d2b7fd.js",
    "revision": "f4f7d3ada835ed448f6bc5a03064c5df"
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
    "url": "assets/js/app.b9e7ddd1.js",
    "revision": "8ed5659aabac39f1af8d275e16c3c0be"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "501c8c63ffddb45b19db175ea8f171a6"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "5c9ce25eb2d1eec7c9507bb7a23a59a0"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "46a51b1dfc72ee6a47100f7c0b938af0"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "d78f809e43bbe100cc7b8c2308c7d4e7"
  },
  {
    "url": "index.html",
    "revision": "6f5ea6b734609ad0eec816cab0a6a224"
  },
  {
    "url": "LICENSE.html",
    "revision": "25f2b3e2e110911ceb4d3d2cbf65d14c"
  },
  {
    "url": "license/index.html",
    "revision": "d7f2ec522baffcad0a374a17ee7f47f2"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "30b6d5246f951bcd36005a92aeb3d7b9"
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
