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
    "revision": "514fd04f6facb4f5177eacc6c2263b80"
  },
  {
    "url": "about/contact.html",
    "revision": "15f5b2686cfa983795badc3808740ced"
  },
  {
    "url": "about/contributing.html",
    "revision": "6fe18806b1bfc4eae601e60974c8b228"
  },
  {
    "url": "about/introduction.html",
    "revision": "604f55a2eaad49abddf2e396a859cdff"
  },
  {
    "url": "about/license.html",
    "revision": "9f65d0d0cd6376d9443d3726d43edd41"
  },
  {
    "url": "about/roadmap.html",
    "revision": "21856aa2c36b342a72ab3dbec0d1f96b"
  },
  {
    "url": "assets/css/0.styles.602210d2.css",
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
    "url": "assets/js/10.40a53df8.js",
    "revision": "d980c4a64ad83d5fb890930b9394ac54"
  },
  {
    "url": "assets/js/11.cfd7c0bd.js",
    "revision": "9955f06b14b8d6dfa4c98eb51086fa36"
  },
  {
    "url": "assets/js/12.b9f45028.js",
    "revision": "7a4e4f681e64cad294d7099dc2627d1f"
  },
  {
    "url": "assets/js/13.ec5d94cf.js",
    "revision": "76cf0c74c458cee38f778103d20800cc"
  },
  {
    "url": "assets/js/14.764eee2e.js",
    "revision": "832a4e301100bec6288bd921dd4e0033"
  },
  {
    "url": "assets/js/15.94b24d32.js",
    "revision": "92bd2c8617118725794cf4ecfcbe9257"
  },
  {
    "url": "assets/js/16.84c45417.js",
    "revision": "5f524b28a878574d6330ce51f0edff0b"
  },
  {
    "url": "assets/js/17.b0c10210.js",
    "revision": "8f45c8dc71b27161856be62e4d349c15"
  },
  {
    "url": "assets/js/18.a07228b4.js",
    "revision": "f0f583430a6e58147ebe5e45f141e6e5"
  },
  {
    "url": "assets/js/19.e40440b9.js",
    "revision": "b7b4763099ea797af2dde9ec44ef0ba3"
  },
  {
    "url": "assets/js/2.fa2e0470.js",
    "revision": "8d4c10dddb73cc39f95f48df21f18539"
  },
  {
    "url": "assets/js/20.ab821ea3.js",
    "revision": "4d11bd9d97fdd14b9f9ffe9fea48927c"
  },
  {
    "url": "assets/js/21.d75ab401.js",
    "revision": "5969800aed40d0af8ae137c162a6691c"
  },
  {
    "url": "assets/js/22.6d90a92b.js",
    "revision": "1545109be9a97362497bb7d7eb967335"
  },
  {
    "url": "assets/js/23.e6e8da27.js",
    "revision": "cd56853b3e1c890bd39702eee834db34"
  },
  {
    "url": "assets/js/24.dab8d725.js",
    "revision": "06ed42fe7483989f47842a51115e06ad"
  },
  {
    "url": "assets/js/25.3cd486c6.js",
    "revision": "e0ddd1d14d0e39a5dc9ea4c929add410"
  },
  {
    "url": "assets/js/26.3b2945d2.js",
    "revision": "7982e8beb025c38de2e10cc2b78ba1ea"
  },
  {
    "url": "assets/js/3.3d39c6e5.js",
    "revision": "5c04ef5220231391a086d70b92b34e9f"
  },
  {
    "url": "assets/js/4.07eab63d.js",
    "revision": "a7c922d6784330533c61eeabbf343a22"
  },
  {
    "url": "assets/js/5.5c869e31.js",
    "revision": "7ad0fb984073f8c2dd1e56cedd3b0c10"
  },
  {
    "url": "assets/js/6.e0097b39.js",
    "revision": "8112c064d1c53e483bd73834f8146e68"
  },
  {
    "url": "assets/js/7.471c65c3.js",
    "revision": "875ef84cfe3f3489887be1d29a2baa04"
  },
  {
    "url": "assets/js/8.472797ce.js",
    "revision": "ad7459ce33a8b2eeeb17ee36b36c3cdf"
  },
  {
    "url": "assets/js/9.978317cf.js",
    "revision": "f99cd6be5ba2a657130eddfede158b7b"
  },
  {
    "url": "assets/js/app.5a409dbf.js",
    "revision": "3c99f1932d3f544c3e0174ec3cdf2bd3"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "a5ae99f3cbc4de054655748254e7061e"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "4e01258b5899c431cd335faddaa5d0ca"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "26fe2ede1e7fc5201b39395f1d0fe5a9"
  },
  {
    "url": "index.html",
    "revision": "1d0507e661d5ee5bb9ae4c5e832287cd"
  },
  {
    "url": "reference/cli.html",
    "revision": "6cd3e39dae30105b2e2de2d3e9d54668"
  },
  {
    "url": "reference/environment.html",
    "revision": "76b671333534d5d77f6760b8f5064a48"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "9ecd43606ac9959a050ec7c5146234ff"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "3c1fa0419cca40fbded87718aeadf064"
  },
  {
    "url": "tips/packaging-images.html",
    "revision": "8ce3fc3c83b3e469e2f08fc3c0895d72"
  },
  {
    "url": "tips/using-kargo-toolbox.html",
    "revision": "8def1f9a854daa949ea84a3b8525c370"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "058e49e52e0c05496388ea3c7bcfdff6"
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
