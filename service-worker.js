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
    "revision": "fb5b8fddc995bc3e690f0ac306dbe375"
  },
  {
    "url": "about/contact.html",
    "revision": "3764c183d75cb7c35b04e340773071df"
  },
  {
    "url": "about/contributing.html",
    "revision": "79f4c03153f17bae608d935782fa42c1"
  },
  {
    "url": "about/introduction.html",
    "revision": "16cc806860ef5394de17eae13fab8f1d"
  },
  {
    "url": "about/license.html",
    "revision": "5c1b5de787410d7afdf5d23e322f34a3"
  },
  {
    "url": "about/roadmap.html",
    "revision": "b29cbf98046004b79cb17b4280d31090"
  },
  {
    "url": "assets/css/0.styles.4394fa43.css",
    "revision": "a610e36f9f4ee5a70513f93fb78e0742"
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
    "url": "assets/js/10.a92515bc.js",
    "revision": "4f3bc5755119801573d1d8b995a2b5ae"
  },
  {
    "url": "assets/js/11.bf9e5041.js",
    "revision": "1ba0e8540443df505b9811a726cb5ea0"
  },
  {
    "url": "assets/js/12.b1f6a54c.js",
    "revision": "cf6008386ebd5bc4d6dea62a0caaea14"
  },
  {
    "url": "assets/js/13.584386b3.js",
    "revision": "2908763829b987657802d6220c914992"
  },
  {
    "url": "assets/js/14.d8bdea0b.js",
    "revision": "3bf86ad7f3edff66fd43f95791fd3822"
  },
  {
    "url": "assets/js/15.052a0450.js",
    "revision": "b9fe42616e2fda33238345ba26759847"
  },
  {
    "url": "assets/js/16.2caaad37.js",
    "revision": "370cebfb3bb8e068d1f28bc2cbd3b93c"
  },
  {
    "url": "assets/js/17.44d5f0ca.js",
    "revision": "13632da581b6aa004a56e9bc6002448d"
  },
  {
    "url": "assets/js/18.f387ad85.js",
    "revision": "36aee6c5c04384cf0a3f25389037fe6f"
  },
  {
    "url": "assets/js/19.6caabbc0.js",
    "revision": "0dd6f6744335a2fee2ce7af5143548ae"
  },
  {
    "url": "assets/js/2.9abf81cf.js",
    "revision": "139b1c6607dc87c91908d55a60c4d277"
  },
  {
    "url": "assets/js/20.3a54a492.js",
    "revision": "1e3d67a092a5891f315d351e10f4f8c6"
  },
  {
    "url": "assets/js/21.232f0ba2.js",
    "revision": "19f662fb6cb96b3c76051baa9aebf80a"
  },
  {
    "url": "assets/js/22.121c60c1.js",
    "revision": "e5a05147843e4ed5782028f8e90cef1e"
  },
  {
    "url": "assets/js/23.bbce0f30.js",
    "revision": "8911bd5d9a991c8d9e1a21f3805a9dc5"
  },
  {
    "url": "assets/js/24.7e80a373.js",
    "revision": "274041f6e8e9b23f1b48c826edd62753"
  },
  {
    "url": "assets/js/25.c405e61e.js",
    "revision": "37cf2422efe8f6cadee42b02ddbc0e0f"
  },
  {
    "url": "assets/js/3.3e55edb7.js",
    "revision": "cd1742260a72641a3ed7db3c7a1c2c48"
  },
  {
    "url": "assets/js/4.85fd70ef.js",
    "revision": "051401621bfe92096a061457080b8f76"
  },
  {
    "url": "assets/js/5.25358f13.js",
    "revision": "47d5b9b5d846ef92c59e8ab17ad49b3d"
  },
  {
    "url": "assets/js/6.b3a49bbb.js",
    "revision": "0a6cf9de0d1d794410232d6c3839b5df"
  },
  {
    "url": "assets/js/7.28d18dee.js",
    "revision": "89763d066922fcebc5b2d0a77db5a86d"
  },
  {
    "url": "assets/js/8.32f38ac7.js",
    "revision": "1c5152ce754d9d70b3ddab3579477a04"
  },
  {
    "url": "assets/js/9.95b462e6.js",
    "revision": "b25ab261c225228382d9d2cbe3b4df17"
  },
  {
    "url": "assets/js/app.29f79c59.js",
    "revision": "f9b818734ccf0d0e31b9a4e9e2b82d04"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "bb9e65efdcefd6777b0c03746f41e743"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "7726e73777a7dfc09986cd373a962024"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "61af1fff22a4f3911f89cd3c1f51977e"
  },
  {
    "url": "index.html",
    "revision": "c0ea5ca562c68711c4718ad25bee5e90"
  },
  {
    "url": "reference/cli.html",
    "revision": "2e4a2428b5326d7ad32d058fbef4a22f"
  },
  {
    "url": "reference/environment.html",
    "revision": "c58c1f824018078c78b17df3f08b0a82"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "b9816951afcab5e1e9215eb429fbe3b7"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "e57e70ebfb88be052348d5928d6bdf00"
  },
  {
    "url": "tips/using-artillery.html",
    "revision": "7cf00c18e8b88079a762ac10627b26e6"
  },
  {
    "url": "tips/using-gdal.html",
    "revision": "1949150f73b11e3fb1cb88ad90a9539e"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "3aaf363d3b7004923bcffd1073bda70d"
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
