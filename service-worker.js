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
    "revision": "854a2899ca4e6c73c391eb684c5ef39a"
  },
  {
    "url": "about/contact.html",
    "revision": "6f3ecccb6de148b69084a630e3594a1d"
  },
  {
    "url": "about/contributing.html",
    "revision": "c12f6607804ba769907171e49d4d7469"
  },
  {
    "url": "about/introduction.html",
    "revision": "9fc63e3c60b92c23f447180297a37245"
  },
  {
    "url": "about/license.html",
    "revision": "b4342cb21d3e0fbac03a6a371cbf1588"
  },
  {
    "url": "about/roadmap.html",
    "revision": "f4fc464be2cd29bbfd74fd87335239ee"
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
    "url": "assets/js/19.407642a2.js",
    "revision": "1cf4e98013d7cd5ecf08ec7dfc944463"
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
    "url": "assets/js/21.8b16870e.js",
    "revision": "5ef59d4703b0642fcb3e83ca1354a2fd"
  },
  {
    "url": "assets/js/22.b7300895.js",
    "revision": "d82e764e5699931259613035da37b67f"
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
    "url": "assets/js/6.60563513.js",
    "revision": "dc9cd1e4340def0b9f205a30d22d4101"
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
    "url": "assets/js/app.38687f2b.js",
    "revision": "0ec789df04b86575b487ca027b23361b"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "f1b61e0425d7465c2f1cf9f8450859aa"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "11f599c0e6009878fb320d7d03a77739"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "36ec8b2674b6544bdb11407a9ff43e2f"
  },
  {
    "url": "index.html",
    "revision": "300cde57f43f18ec92c0b913c4d0e5c6"
  },
  {
    "url": "reference/cli.html",
    "revision": "12091ec003a5cbf88645a48b6121f7e4"
  },
  {
    "url": "reference/environment.html",
    "revision": "7342483edb83508862e7648fad4d9130"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "46277efbb29d539869804ed8aaf4b388"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "c45404309b60f6f0b580eaa78e5cd268"
  },
  {
    "url": "tips/packaging-images.html",
    "revision": "4f2d596ec03a89e21892529866753828"
  },
  {
    "url": "tips/using-gdal-image.html",
    "revision": "717964a46d46bdcd5b6590a393ebc7dc"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "791cfe8aed44deba37e4052047042264"
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