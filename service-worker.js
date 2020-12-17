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
    "revision": "bd6f4dae8f92cd54cac2d0d1d97f4759"
  },
  {
    "url": "about/contact.html",
    "revision": "73d8f9b4d76f33369ded4dcf9aa93f0f"
  },
  {
    "url": "about/contributing.html",
    "revision": "68619d1e199b55a2307b01a06289c736"
  },
  {
    "url": "about/introduction.html",
    "revision": "c29254b0b7c6cf03397097a919d3f716"
  },
  {
    "url": "about/license.html",
    "revision": "b0a6f475ec23aa0e16a3d3e9d1db574b"
  },
  {
    "url": "about/roadmap.html",
    "revision": "555a49358a7e8e21033720e3400c4957"
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
    "url": "assets/js/17.f14ccc1f.js",
    "revision": "1a4a8c1cfc53d8bd5368e2441de8a4a3"
  },
  {
    "url": "assets/js/18.e27a2256.js",
    "revision": "6eb2758da6e952ae246d775b80703f17"
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
    "url": "assets/js/5.2ce79173.js",
    "revision": "294a2b3a4258d4b18082b5c33a8c27cc"
  },
  {
    "url": "assets/js/6.0d795b00.js",
    "revision": "34a9b3d7b67cd29f7740f6c174e8d1c0"
  },
  {
    "url": "assets/js/7.1c59b3f8.js",
    "revision": "2290875376aff2bce62f51e5ac144ebd"
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
    "url": "assets/js/app.aaff4cbc.js",
    "revision": "5a0b0d3cab316d27340c646f6da748fa"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "4d05e182825f5655ca2976fc93fcb21f"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "4ee1df3df15fd851900cfc994e22bf3d"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "7d64ea843ef1ade1d6e144d7a5a4c3d3"
  },
  {
    "url": "index.html",
    "revision": "9ecab4c3cf847fb20f9d5d77e854b6e1"
  },
  {
    "url": "reference/cli.html",
    "revision": "7a52a64951deeb4d28b1f986501368ee"
  },
  {
    "url": "reference/environment.html",
    "revision": "12f796e44f7d3e21744681f7c1d5a8aa"
  },
  {
    "url": "reference/helper-scripts.html",
    "revision": "6dc1df485a0321d26d2023af96a45f35"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "ac5bd7d21b59d5df6094a1683a41811c"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "b76fe1152cfeeec40966c05ec1dfd599"
  },
  {
    "url": "tips/using-artillery.html",
    "revision": "fd6fa736e438543860fa07d8956cd77c"
  },
  {
    "url": "tips/using-gdal.html",
    "revision": "5a27f35794a206569f6038b33ba5690e"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "5d4a4cf0a852a970509544699156166d"
  },
  {
    "url": "tips/using-private-registry.html",
    "revision": "bf6343e89ae5114f77c316dc7470daf7"
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
