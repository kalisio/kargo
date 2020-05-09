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
    "revision": "fdd72e3c9039857b645b8e9e29a8a317"
  },
  {
    "url": "about/contact.html",
    "revision": "1c4c8021f945324104d7e662691aa625"
  },
  {
    "url": "about/contributing.html",
    "revision": "38963074166674674b476a8c7f2648cf"
  },
  {
    "url": "about/introduction.html",
    "revision": "5600a1704b4eb159a32e8ba8bd7c3527"
  },
  {
    "url": "about/license.html",
    "revision": "52671cf84a272f16adf67d4694619887"
  },
  {
    "url": "about/roadmap.html",
    "revision": "49373cf7d0bcd9281d3f2db920cd40ea"
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
    "url": "assets/js/18.1fa10016.js",
    "revision": "552b7e5769ed395703505d8f9d9fdbac"
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
    "url": "assets/js/22.7c6379b1.js",
    "revision": "7e4fdd48fa22c0f9e25d32e7805d4ea5"
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
    "url": "assets/js/app.643dd8a4.js",
    "revision": "230508fcb4e5f193e9103682cacb5da2"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "e0330142bf660f261878b46ffeb8f7a9"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "c7d146a38212d4ed667ce224b8502d2c"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "111093c14623be4d6ed0178311bce9e1"
  },
  {
    "url": "index.html",
    "revision": "6f6b2479c0150d1d282b09d27e1fcf14"
  },
  {
    "url": "reference/cli.html",
    "revision": "8b2b3e30061a5f71db7b60ce3e77e9bc"
  },
  {
    "url": "reference/environment.html",
    "revision": "c68d041c4973fa6ed33172faa93202c6"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "af55a96fe84c6acfb15a5ee951b964e5"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "19b2d97a90adbd8dbebe12a316668aae"
  },
  {
    "url": "tips/packaging-images.html",
    "revision": "f9805627159841535142135a03900864"
  },
  {
    "url": "tips/using-kargo-toolbox.html",
    "revision": "a5419e8ed72326c09a73457dee25908b"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "cbefc7a9a91cc9143dbee72437d44177"
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
