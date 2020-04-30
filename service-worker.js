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
    "revision": "80becf38e015a1560607fa90f8188b63"
  },
  {
    "url": "about/contact.html",
    "revision": "849aef22d1cab105047869f3cb132c65"
  },
  {
    "url": "about/contributing.html",
    "revision": "ba3a6daa793eaae12dbf7439f4c1386b"
  },
  {
    "url": "about/introduction.html",
    "revision": "0be78f667e85bdc796cbdb91464db043"
  },
  {
    "url": "about/license.html",
    "revision": "0ba2d8c01e1bf3575aee5823f8931ca3"
  },
  {
    "url": "about/roadmap.html",
    "revision": "5821f1cb978dfa536b92247107c83ba5"
  },
  {
    "url": "assets/css/0.styles.417cc5fe.css",
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
    "url": "assets/js/10.5045c5e9.js",
    "revision": "c3957dab0c1870b408685ec0f7375e7c"
  },
  {
    "url": "assets/js/11.d2ed2723.js",
    "revision": "d63bc66d895cd531227c085a586e9378"
  },
  {
    "url": "assets/js/12.1af83e1b.js",
    "revision": "d552cba4d4c5a837b28129b360534747"
  },
  {
    "url": "assets/js/13.6e24d62d.js",
    "revision": "93298241e3a2e7a1be812d1fe32b2863"
  },
  {
    "url": "assets/js/14.16d1baee.js",
    "revision": "8f3e4d399598584749b0061260d3952e"
  },
  {
    "url": "assets/js/15.cdaf0d04.js",
    "revision": "5cbaa134ac33770482a4dc5ed843db15"
  },
  {
    "url": "assets/js/16.bb694c27.js",
    "revision": "af2c8d0a0facca267955d5c949def7f4"
  },
  {
    "url": "assets/js/17.a6dedf48.js",
    "revision": "e971cd2739be31ba451ba1518b3ed3a0"
  },
  {
    "url": "assets/js/18.68092321.js",
    "revision": "ec792473512f293cc1fa5333f46eb322"
  },
  {
    "url": "assets/js/19.cf0613d2.js",
    "revision": "1cf4e98013d7cd5ecf08ec7dfc944463"
  },
  {
    "url": "assets/js/2.ca1b12eb.js",
    "revision": "8d4c10dddb73cc39f95f48df21f18539"
  },
  {
    "url": "assets/js/20.18fd47d8.js",
    "revision": "e0a8cd95c107ab464449cb8a25252b25"
  },
  {
    "url": "assets/js/21.b31b6901.js",
    "revision": "5ef59d4703b0642fcb3e83ca1354a2fd"
  },
  {
    "url": "assets/js/22.2fe87612.js",
    "revision": "7e4fdd48fa22c0f9e25d32e7805d4ea5"
  },
  {
    "url": "assets/js/23.c76ef816.js",
    "revision": "cd56853b3e1c890bd39702eee834db34"
  },
  {
    "url": "assets/js/24.59857236.js",
    "revision": "18825166cbc2cde6c8440efe1d48a6c0"
  },
  {
    "url": "assets/js/25.650aed7c.js",
    "revision": "e0ddd1d14d0e39a5dc9ea4c929add410"
  },
  {
    "url": "assets/js/26.47f546c0.js",
    "revision": "7982e8beb025c38de2e10cc2b78ba1ea"
  },
  {
    "url": "assets/js/3.9272d2e0.js",
    "revision": "5c04ef5220231391a086d70b92b34e9f"
  },
  {
    "url": "assets/js/4.e0f23acd.js",
    "revision": "3a14230e80ad0032de24b48e34cdefcb"
  },
  {
    "url": "assets/js/5.a625cf10.js",
    "revision": "f5b8acacd60fcb9a7239cac288bc1197"
  },
  {
    "url": "assets/js/6.61d805e0.js",
    "revision": "dc9cd1e4340def0b9f205a30d22d4101"
  },
  {
    "url": "assets/js/7.4ca0af4f.js",
    "revision": "0e03778ea538dcdf6720ccacce0cc39f"
  },
  {
    "url": "assets/js/8.dcddc342.js",
    "revision": "1c7f42860ce9172f9885fb3f630e824f"
  },
  {
    "url": "assets/js/9.bc5f1058.js",
    "revision": "f99cd6be5ba2a657130eddfede158b7b"
  },
  {
    "url": "assets/js/app.1606b441.js",
    "revision": "c680af7edfa09f85ede3a9e13c0d1722"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "d0e54d27ec3c192f9618f94bd277f084"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "b051b200e2245266b726c2e23439e9ff"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "dc36dec378aa4efbf50251a7f505e4a7"
  },
  {
    "url": "index.html",
    "revision": "488c7e9f51ccad6deaa534f09b06438a"
  },
  {
    "url": "reference/cli.html",
    "revision": "b1a91db3c6795bc565d0a52ac2fb839f"
  },
  {
    "url": "reference/environment.html",
    "revision": "337a833345ce5b0ded648fb3aa0fefab"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "8cf8bc2cdb5eb7f59e3353cc408ad758"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "1988d574fcb9071de4995c5bf7772a1f"
  },
  {
    "url": "tips/packaging-images.html",
    "revision": "5fac9f69d5f96a3a4e1a61827315d28e"
  },
  {
    "url": "tips/using-kargo-toolbox.html",
    "revision": "2379ae5d069c6119ce525e81e05a125f"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "bab9215ed600e030d124ed98393efa13"
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
