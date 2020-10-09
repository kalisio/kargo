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
    "revision": "56f22b170fed2c917fe2712c5e2668e0"
  },
  {
    "url": "about/contact.html",
    "revision": "9a94487a5c94c4235af299a0fb01a2a0"
  },
  {
    "url": "about/contributing.html",
    "revision": "21ed6238828d12e6fa8c3ea178e8f937"
  },
  {
    "url": "about/introduction.html",
    "revision": "d5ce52c1687816d0f596f31a1d9af99d"
  },
  {
    "url": "about/license.html",
    "revision": "ad5c9c43acfa818185cfb1c5779b597c"
  },
  {
    "url": "about/roadmap.html",
    "revision": "ae19e475b76e5058be84ffdfaf7eee21"
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
    "url": "assets/img/kargo-traefik.21ca1aa0.svg",
    "revision": "21ca1aa02c5cc1512f8ecc6265ef6978"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.dcec99e5.js",
    "revision": "645c2513fd2a576605122d65f6caca64"
  },
  {
    "url": "assets/js/11.b7c160de.js",
    "revision": "fc9eb61037e1412f702280227c0e0a7e"
  },
  {
    "url": "assets/js/12.1b1e9da4.js",
    "revision": "4a0dbcd781335e2c945c31c081f1a768"
  },
  {
    "url": "assets/js/13.37b2095e.js",
    "revision": "eb5fae1a3ab4c24a5c4756e5522bbfaa"
  },
  {
    "url": "assets/js/14.de565671.js",
    "revision": "d7c5f2a744bd63bcb571abea72fa0b36"
  },
  {
    "url": "assets/js/15.baf6adf1.js",
    "revision": "09ad76258ab13a8eb1e4d743b12819c1"
  },
  {
    "url": "assets/js/16.f6e7af4c.js",
    "revision": "16e42faff070e9983daa802154159346"
  },
  {
    "url": "assets/js/17.c3b7dde0.js",
    "revision": "17cc7890aa9e7b1cc9935462872d10f1"
  },
  {
    "url": "assets/js/18.24b57d66.js",
    "revision": "97dd1ec162789f6c0d0d651254b6b5be"
  },
  {
    "url": "assets/js/19.25031a51.js",
    "revision": "f6bd43bddab1b704a1f9258f3bd6c215"
  },
  {
    "url": "assets/js/2.137cd41d.js",
    "revision": "6acb87cdb62541e87747c6cbd375cff0"
  },
  {
    "url": "assets/js/20.b48dbdf7.js",
    "revision": "992879baa91fa10abb81751cf3e8d8db"
  },
  {
    "url": "assets/js/21.791e4da8.js",
    "revision": "27231118d24a4ca08ce1fd203bcbe3b5"
  },
  {
    "url": "assets/js/22.c13e1077.js",
    "revision": "efd0514254cc465c465fdd0746a2334f"
  },
  {
    "url": "assets/js/23.cf66b2e5.js",
    "revision": "4e6f2155f37b82b2b845bc982f9430f2"
  },
  {
    "url": "assets/js/24.04444ef9.js",
    "revision": "e0f84fc24e224e25d451944bd2a93ed7"
  },
  {
    "url": "assets/js/25.6147ceb4.js",
    "revision": "9eddc45caa5857cf1da6e43a50c8ec87"
  },
  {
    "url": "assets/js/26.21fdaebe.js",
    "revision": "d9ef66073929dbf93c30aa00605ab136"
  },
  {
    "url": "assets/js/3.10e6b22f.js",
    "revision": "d8436e3a24b15784aed0c4c5b5f2f689"
  },
  {
    "url": "assets/js/4.d008377f.js",
    "revision": "a81b0d7435d6703fa649a3f1d5544ace"
  },
  {
    "url": "assets/js/5.76422ff7.js",
    "revision": "05018a2e44c9dea9ec7a8d866f676105"
  },
  {
    "url": "assets/js/6.0d795b00.js",
    "revision": "34a9b3d7b67cd29f7740f6c174e8d1c0"
  },
  {
    "url": "assets/js/7.5da558fd.js",
    "revision": "0032ff7a94ac3cde63581ec6763b83f6"
  },
  {
    "url": "assets/js/8.4c2a9a62.js",
    "revision": "0e697a210096a0d28252fb4dfc5694e5"
  },
  {
    "url": "assets/js/9.5a2f9245.js",
    "revision": "622e6f59b48d091ee14c0fd1c69f0aa5"
  },
  {
    "url": "assets/js/app.13d7755a.js",
    "revision": "cc9e1e9cae04597b40ba35a2393c1b9c"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "736332a6f21f7c498879a21ff38d1ebb"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "ef6e749231e1eefd216a17ccabd169de"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "6876d0b2b5dc28e94a83343b197a74ec"
  },
  {
    "url": "index.html",
    "revision": "55fda36d7216a7712676e1cc58f797fb"
  },
  {
    "url": "reference/cli.html",
    "revision": "dccc7c8b9aa15d2acf310ea72ad830ff"
  },
  {
    "url": "reference/environment.html",
    "revision": "ae1707daa3aa8d3668f7d68253d8b189"
  },
  {
    "url": "reference/helper-scripts.html",
    "revision": "dbb416b4e8e8dfa437e200b0ee0fc68e"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "3740136a120be1551a27fae107990431"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "41cb4ba93df793cceb652fde42fe0e65"
  },
  {
    "url": "tips/using-artillery.html",
    "revision": "785047429d9c39f1989995819bfe9897"
  },
  {
    "url": "tips/using-gdal.html",
    "revision": "33b18b1b86bbc2fe46178cdf711a81ce"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "3f6082c445ff895a93c42bdebd14468c"
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
