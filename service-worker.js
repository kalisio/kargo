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
    "revision": "dd5475a5c4e67dc3ba0d2144768208e5"
  },
  {
    "url": "about/contact.html",
    "revision": "1e8edcd60e9bce6d2aa6dac46d93625d"
  },
  {
    "url": "about/contributing.html",
    "revision": "45a8beb9e7b3afd0c9da34f359826353"
  },
  {
    "url": "about/introduction.html",
    "revision": "c0a960913ee5f7fddb794a9fb1691fb0"
  },
  {
    "url": "about/license.html",
    "revision": "4ae38d156cb0703c58c0b46fd5620faa"
  },
  {
    "url": "about/roadmap.html",
    "revision": "901e34250a7659d22ac96c5ff2c677d3"
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
    "url": "assets/js/18.f7adcb2c.js",
    "revision": "fce4de01864c5bcab5c7ce08da2fce07"
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
    "url": "assets/js/8.70c852e8.js",
    "revision": "61d4b72e3374ed9fe01042ca7ae2e954"
  },
  {
    "url": "assets/js/9.94306e8a.js",
    "revision": "f99cd6be5ba2a657130eddfede158b7b"
  },
  {
    "url": "assets/js/app.43321339.js",
    "revision": "7f81bd2ddf61ad12b2cc8dbeab544db8"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "43ad407659bb570b68cbe2aaf4a795b5"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "2e2a037f184c58bafe71a9bb6a2815f8"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "300c7920ec132c874e6a905ed889d48a"
  },
  {
    "url": "index.html",
    "revision": "2b684507f69950db53185a130f2b30eb"
  },
  {
    "url": "reference/cli.html",
    "revision": "935537ff633d2bc5e6a96679da7ff6ed"
  },
  {
    "url": "reference/environment.html",
    "revision": "cee24e16ba682ec681d382275cac0015"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "3fd6aa0d081609eb71b26cf445b210e1"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "3fcb4859d4b1bfa7bd5b8c7ee32af5b2"
  },
  {
    "url": "tips/using-artillery.html",
    "revision": "58ed4b3e85e0f82c9ec06f14ad9f8f24"
  },
  {
    "url": "tips/using-gdal.html",
    "revision": "026f65eec49f47de766529e05db4d0b2"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "00d4269e33a56dcc9d913041aca56c42"
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
