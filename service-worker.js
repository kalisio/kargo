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
    "revision": "cb8081df065c7ab375d91d905f7b0784"
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
    "url": "assets/css/styles.972bc4cf.css",
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
    "url": "assets/js/10.b2338454.js",
    "revision": "3207f01baf357fbbb9e256f468ccfa19"
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
    "url": "assets/js/6.3f556caa.js",
    "revision": "a078fb29e2c6a703d3a4ebc46cecb464"
  },
  {
    "url": "assets/js/7.4e62fbf8.js",
    "revision": "a7018a0f2426db73d12d7fccd91caaab"
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
    "url": "assets/js/app.972bc4cf.js",
    "revision": "a49000393cba124c1587db3f257fa72b"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "3fea30deeb92a85d86108febaf20ee64"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "d09a79421a2b3eab376815a5e1f163a4"
  },
  {
    "url": "how-to-use-it/getting-started.html",
    "revision": "0cc91be7b0404f1f913c75e8885315ff"
  },
  {
    "url": "how-to-use-it/tips.html",
    "revision": "8219492fedf70a598ee11bdbe66469fd"
  },
  {
    "url": "index.html",
    "revision": "24c3d0642f9ff8bb1555927439af997d"
  },
  {
    "url": "LICENSE.html",
    "revision": "62afc08da6301e647c7768be2e76503b"
  },
  {
    "url": "license/index.html",
    "revision": "d497dafbd993b15cd14c387bbe3b02b3"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "8b48826ab9a1ec60e2b5dc6d102b0721"
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
