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
    "revision": "4f12287b1ac0c2e2f4c9b81c894fd58e"
  },
  {
    "url": "about/contact.html",
    "revision": "1a74906ecd0a9e302b037c068c375af8"
  },
  {
    "url": "about/contributing.html",
    "revision": "e69a64b43aabaa9d7005c28d5d817502"
  },
  {
    "url": "about/introduction.html",
    "revision": "3f45be15a02c69bec1639b6d975311b8"
  },
  {
    "url": "about/license.html",
    "revision": "3592e538ce7341d48eab988c7fc4ac70"
  },
  {
    "url": "about/roadmap.html",
    "revision": "37b7db3cae30bb48bb9e3636ecd41669"
  },
  {
    "url": "assets/css/0.styles.cd361077.css",
    "revision": "76d65c5147a1daebfee43473f24790bd"
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
    "url": "assets/js/10.8b3e8f16.js",
    "revision": "c3957dab0c1870b408685ec0f7375e7c"
  },
  {
    "url": "assets/js/11.4d760b28.js",
    "revision": "d63bc66d895cd531227c085a586e9378"
  },
  {
    "url": "assets/js/12.888d5167.js",
    "revision": "d552cba4d4c5a837b28129b360534747"
  },
  {
    "url": "assets/js/13.9133c322.js",
    "revision": "93298241e3a2e7a1be812d1fe32b2863"
  },
  {
    "url": "assets/js/14.f3e9fc9a.js",
    "revision": "8f3e4d399598584749b0061260d3952e"
  },
  {
    "url": "assets/js/15.3b4a3959.js",
    "revision": "5cbaa134ac33770482a4dc5ed843db15"
  },
  {
    "url": "assets/js/16.18c48034.js",
    "revision": "af2c8d0a0facca267955d5c949def7f4"
  },
  {
    "url": "assets/js/17.0574a8cc.js",
    "revision": "e971cd2739be31ba451ba1518b3ed3a0"
  },
  {
    "url": "assets/js/18.b205280e.js",
    "revision": "6437934ba9c7803014ece0f952b4fad1"
  },
  {
    "url": "assets/js/19.176860b3.js",
    "revision": "5814eb2de9e9c1d0c4aff006ceaaff68"
  },
  {
    "url": "assets/js/2.6c7742fe.js",
    "revision": "8d4c10dddb73cc39f95f48df21f18539"
  },
  {
    "url": "assets/js/20.7e506db6.js",
    "revision": "e0a8cd95c107ab464449cb8a25252b25"
  },
  {
    "url": "assets/js/21.7fc89699.js",
    "revision": "2634bd6beefaf1a41b46c18376d6ebab"
  },
  {
    "url": "assets/js/22.77896cad.js",
    "revision": "b41e87c1c528611e38f2c00f00a4167b"
  },
  {
    "url": "assets/js/23.3a093d92.js",
    "revision": "cd56853b3e1c890bd39702eee834db34"
  },
  {
    "url": "assets/js/24.440b01a6.js",
    "revision": "06ed42fe7483989f47842a51115e06ad"
  },
  {
    "url": "assets/js/25.8c4b3520.js",
    "revision": "e0ddd1d14d0e39a5dc9ea4c929add410"
  },
  {
    "url": "assets/js/26.9f61a01f.js",
    "revision": "7982e8beb025c38de2e10cc2b78ba1ea"
  },
  {
    "url": "assets/js/3.d7af9251.js",
    "revision": "5c04ef5220231391a086d70b92b34e9f"
  },
  {
    "url": "assets/js/4.e5ae6abd.js",
    "revision": "3a14230e80ad0032de24b48e34cdefcb"
  },
  {
    "url": "assets/js/5.8f789abd.js",
    "revision": "f5b8acacd60fcb9a7239cac288bc1197"
  },
  {
    "url": "assets/js/6.f6b05784.js",
    "revision": "788a3717953e514f2ec91fd212249e4b"
  },
  {
    "url": "assets/js/7.90e520af.js",
    "revision": "0e03778ea538dcdf6720ccacce0cc39f"
  },
  {
    "url": "assets/js/8.c731fa13.js",
    "revision": "1c7f42860ce9172f9885fb3f630e824f"
  },
  {
    "url": "assets/js/9.94306e8a.js",
    "revision": "f99cd6be5ba2a657130eddfede158b7b"
  },
  {
    "url": "assets/js/app.199757c5.js",
    "revision": "9fa31c08f99af9ee3eb2927a3ee3efa0"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "8deb42650162347a94595bba7ad653fb"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "09dc024f24935d67c58806b11bb3dc6c"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "986f86f0c210931b666c147d4dadea37"
  },
  {
    "url": "index.html",
    "revision": "776b378532d78e0c368e0d2cb3492ba2"
  },
  {
    "url": "reference/cli.html",
    "revision": "90c02253e00f4ad9647dde67e498c4f4"
  },
  {
    "url": "reference/environment.html",
    "revision": "b58fe57a834a1f6b32d066ae357a5666"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "4292a94201aba4e7ea2ddb23fa53e6dc"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "2798480b3f5e8ff8ee58bca67d466f83"
  },
  {
    "url": "tips/using-artillery.html",
    "revision": "b59ed121fb6b2753ce16ac2793404661"
  },
  {
    "url": "tips/using-gdal.html",
    "revision": "04a02b8e8887ce7590d6d1c993a0a52a"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "7a93e35fcade99a94ee369cfa1537f07"
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
