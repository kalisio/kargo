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
    "revision": "b981d419397eadc78c4d10b52a77bf4d"
  },
  {
    "url": "about/contact.html",
    "revision": "6ad72a90375fb6a2d716db265ff7c12f"
  },
  {
    "url": "about/contributing.html",
    "revision": "3a0d822e9b859f52a1a1361cafb82ecd"
  },
  {
    "url": "about/introduction.html",
    "revision": "2760a29e8a2db7a021ea25cfc9670b51"
  },
  {
    "url": "about/license.html",
    "revision": "32144bada7b88413afcd9d0a0aba5d88"
  },
  {
    "url": "about/roadmap.html",
    "revision": "f6915930754497dea89412424eb78edd"
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
    "url": "assets/js/11.f50ddd9e.js",
    "revision": "f4285e77f01e15ded34d856df049defb"
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
    "url": "assets/js/17.e4bd7848.js",
    "revision": "d50362e86dba7a28a422a567d4c657c7"
  },
  {
    "url": "assets/js/18.4ec75ff2.js",
    "revision": "923356ad72b11c0e72a159dbc946df47"
  },
  {
    "url": "assets/js/19.fbaade4e.js",
    "revision": "178eda6f4f1fbc1ee2b7941686aca5d5"
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
    "url": "assets/js/25.1cb014f7.js",
    "revision": "eca043b867392c22a053ba4e1fee2674"
  },
  {
    "url": "assets/js/26.1cdfc671.js",
    "revision": "5fd4a5227b708d08a50b4979ec11b44d"
  },
  {
    "url": "assets/js/27.61554241.js",
    "revision": "e7c7da3431da8440317378b7c9fa0d26"
  },
  {
    "url": "assets/js/3.10e6b22f.js",
    "revision": "d8436e3a24b15784aed0c4c5b5f2f689"
  },
  {
    "url": "assets/js/4.e33f0012.js",
    "revision": "2a790a2b99bd2a1c81ab92326b96ae5a"
  },
  {
    "url": "assets/js/5.71350677.js",
    "revision": "08f341966b4704af75d7ab77f2e93534"
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
    "url": "assets/js/8.d4dead66.js",
    "revision": "50a2a51ad76f7fb556bcb19f0d6b3d76"
  },
  {
    "url": "assets/js/9.5a2f9245.js",
    "revision": "622e6f59b48d091ee14c0fd1c69f0aa5"
  },
  {
    "url": "assets/js/app.0c3b7cfc.js",
    "revision": "cbe4e82bdbba315d1f413a52fbdf6114"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "9555eaee31369b01770f7cc4b8750505"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "9be7003783b54d0d8dbc4d97701ef7e0"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "1a5493a323cd8123776d2009b0942890"
  },
  {
    "url": "index.html",
    "revision": "c7b942f260eb2802bc8bda1ecf045ec3"
  },
  {
    "url": "reference/cli.html",
    "revision": "cd49195ccd5c0c6843fbe7b6a0f008bc"
  },
  {
    "url": "reference/environment.html",
    "revision": "7fb36be4d785bbd32744d7401ec81462"
  },
  {
    "url": "reference/helper-scripts.html",
    "revision": "4750772972d8c2a8f37535a6e2d8e4e5"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "337a507c7eb5c804ea72a1a352a92d8c"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "8ab4f60a6c6216f3cfbc07e5675b3f9f"
  },
  {
    "url": "tips/using-artillery.html",
    "revision": "b3196327bee29a5506b2787c29d54676"
  },
  {
    "url": "tips/using-gdal.html",
    "revision": "4e2cc8b8c3fa1227e00e0e6fbdcfb543"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "dfb63f29b38afe57252c73cd03c8c72e"
  },
  {
    "url": "tips/using-private-registry.html",
    "revision": "4642f668e37c733e2b9afbafc32ce29c"
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
