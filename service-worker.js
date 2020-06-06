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
    "revision": "5fd33473d120069c243ae116eb76ab08"
  },
  {
    "url": "about/contact.html",
    "revision": "12f2842f841cb264000ded6c905f1b54"
  },
  {
    "url": "about/contributing.html",
    "revision": "dd5f33592eda800c17460855a78312d8"
  },
  {
    "url": "about/introduction.html",
    "revision": "4bc858107c75ddd4308028e436155a9c"
  },
  {
    "url": "about/license.html",
    "revision": "9cd8832e635d009e6d9256563022e80a"
  },
  {
    "url": "about/roadmap.html",
    "revision": "81e515603fe1108eb3622f790330c862"
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
    "url": "assets/js/app.bffc0550.js",
    "revision": "7b4de5de005d4ada9945665b3e59849b"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "1c97c059e52b2fc383c7bc5b31eb62dd"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "056879d490cc0673ee6dd2557cae05c1"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "3208952882dcbc99eae32f9f75e8b7d8"
  },
  {
    "url": "index.html",
    "revision": "3985abfa409669b0b9d91b93e27c92d8"
  },
  {
    "url": "reference/cli.html",
    "revision": "f2814ee0b7a3758e33a04162391561f8"
  },
  {
    "url": "reference/environment.html",
    "revision": "373f70486d8d05191412afb793b853b1"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "eae4f06a22f42a9068c71e5df896a0fa"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "0c35107ff96f76ed544243e57e64bcbc"
  },
  {
    "url": "tips/using-artillery.html",
    "revision": "29baa64b38f0a63e36354bb231fa6b2d"
  },
  {
    "url": "tips/using-gdal.html",
    "revision": "024260bdbbd6122e1fe85164bc7aa7eb"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "0623988df57954cfb1e100eead8b73d7"
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
