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
    "revision": "0cb629a47e0531fa90e20467bc4025fc"
  },
  {
    "url": "about/contact.html",
    "revision": "c38751c4eaa51e349a5c29e8433b7937"
  },
  {
    "url": "about/contributing.html",
    "revision": "dd4c05b7434a2d515ab93aa78b9e8f29"
  },
  {
    "url": "about/introduction.html",
    "revision": "ec731298ddc990b0df49762a865d4724"
  },
  {
    "url": "about/license.html",
    "revision": "3da58201c9b24dd08d9dbbcec877ce12"
  },
  {
    "url": "about/roadmap.html",
    "revision": "dac29a2b6952bd513882dadf5c7ae6e7"
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
    "url": "assets/js/8.a859e490.js",
    "revision": "cce15b772cbe6fd66bd0842932cdfb1d"
  },
  {
    "url": "assets/js/9.94306e8a.js",
    "revision": "f99cd6be5ba2a657130eddfede158b7b"
  },
  {
    "url": "assets/js/app.f18d4537.js",
    "revision": "973d08ae409bcb6c2383187fdad37687"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "fc24119088d1ca73ad69d1e6ef770860"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "e9ca3ffa98a00b8087d256c8d2ac01c5"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "d605720159950425aee697c9424a448b"
  },
  {
    "url": "index.html",
    "revision": "aa079fd1cda482b2410f8088598dc93f"
  },
  {
    "url": "reference/cli.html",
    "revision": "38cf7d895652aab1077f7dbf68bf03ba"
  },
  {
    "url": "reference/environment.html",
    "revision": "b015b4594a14b4c8d2a3358b678c57e3"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "6026f2bb3a90ce9644c34296d75ae674"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "88e77b77c8eca55aad8565f780e8586a"
  },
  {
    "url": "tips/using-artillery.html",
    "revision": "f4d6c999500dea6eae6f542eaa509ad2"
  },
  {
    "url": "tips/using-gdal.html",
    "revision": "78a52fee860f21383e65e4abc671ac99"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "0b519d247fd3eb6105284f88beb352ed"
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
