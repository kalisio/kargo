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
    "revision": "74e01d9b7b08eaea00c667f3cd0a94e5"
  },
  {
    "url": "about/contact.html",
    "revision": "afa1a90ece68ee007f892e67f7b6df3a"
  },
  {
    "url": "about/contributing.html",
    "revision": "a42d24f7aed91b560d0bbead557fb10e"
  },
  {
    "url": "about/introduction.html",
    "revision": "b278b5ad281b541b06de84872dc9bd18"
  },
  {
    "url": "about/license.html",
    "revision": "0c5d5d8ea1b0eeac33dc04a700b80599"
  },
  {
    "url": "about/roadmap.html",
    "revision": "1e9f80c05e51233ad64c93b170c63c6e"
  },
  {
    "url": "assets/css/0.styles.ea25927c.css",
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
    "url": "assets/js/10.30776c1c.js",
    "revision": "d980c4a64ad83d5fb890930b9394ac54"
  },
  {
    "url": "assets/js/11.78b27f32.js",
    "revision": "9955f06b14b8d6dfa4c98eb51086fa36"
  },
  {
    "url": "assets/js/12.165f8e8f.js",
    "revision": "7a4e4f681e64cad294d7099dc2627d1f"
  },
  {
    "url": "assets/js/13.101adf0f.js",
    "revision": "76cf0c74c458cee38f778103d20800cc"
  },
  {
    "url": "assets/js/14.45575003.js",
    "revision": "832a4e301100bec6288bd921dd4e0033"
  },
  {
    "url": "assets/js/15.d83ae889.js",
    "revision": "92bd2c8617118725794cf4ecfcbe9257"
  },
  {
    "url": "assets/js/16.b555ef2e.js",
    "revision": "5f524b28a878574d6330ce51f0edff0b"
  },
  {
    "url": "assets/js/17.ab2f8f2e.js",
    "revision": "8f45c8dc71b27161856be62e4d349c15"
  },
  {
    "url": "assets/js/18.0dbc5b51.js",
    "revision": "e939b63da3366b20f07fd6477cb171fc"
  },
  {
    "url": "assets/js/19.b3c0cdda.js",
    "revision": "b7b4763099ea797af2dde9ec44ef0ba3"
  },
  {
    "url": "assets/js/2.ca1b12eb.js",
    "revision": "8d4c10dddb73cc39f95f48df21f18539"
  },
  {
    "url": "assets/js/20.0b17ca5f.js",
    "revision": "4d11bd9d97fdd14b9f9ffe9fea48927c"
  },
  {
    "url": "assets/js/21.42b04a00.js",
    "revision": "5969800aed40d0af8ae137c162a6691c"
  },
  {
    "url": "assets/js/22.c9126eb9.js",
    "revision": "1545109be9a97362497bb7d7eb967335"
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
    "url": "assets/js/4.da392885.js",
    "revision": "a7c922d6784330533c61eeabbf343a22"
  },
  {
    "url": "assets/js/5.3f8e95dc.js",
    "revision": "7ad0fb984073f8c2dd1e56cedd3b0c10"
  },
  {
    "url": "assets/js/6.7c5af141.js",
    "revision": "8112c064d1c53e483bd73834f8146e68"
  },
  {
    "url": "assets/js/7.95cf4e7f.js",
    "revision": "875ef84cfe3f3489887be1d29a2baa04"
  },
  {
    "url": "assets/js/8.f6525cfa.js",
    "revision": "ad7459ce33a8b2eeeb17ee36b36c3cdf"
  },
  {
    "url": "assets/js/9.bc5f1058.js",
    "revision": "f99cd6be5ba2a657130eddfede158b7b"
  },
  {
    "url": "assets/js/app.e43f9297.js",
    "revision": "b84c63f62f07d3be97780a83e5017964"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "9ee24dd130305259f5a7434227a56aa2"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "2d7e4c14f713e948546843da92418736"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "962479b82b2d107a4afde773e80eca6a"
  },
  {
    "url": "index.html",
    "revision": "a77d4d3b56691d2d03dde884b3fa04db"
  },
  {
    "url": "reference/cli.html",
    "revision": "225ffea082e9fc2093306c319509f22e"
  },
  {
    "url": "reference/environment.html",
    "revision": "f182e6d9d104e19296f2c70c07486688"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "e3cda5ff0b4834f4b5fa3051f615aa55"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "6851119015cd857c2f35f956b792a002"
  },
  {
    "url": "tips/packaging-images.html",
    "revision": "e6a3716719b5ec9891c5d23410799a55"
  },
  {
    "url": "tips/using-kargo-toolbox.html",
    "revision": "97e2a0f901cda77be2c6c5e0ab6db3bf"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "492f42da9767dd6e441694edb47736fb"
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
