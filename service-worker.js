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
    "revision": "7959140f5fa0cef99462f683194d64fe"
  },
  {
    "url": "about/contact.html",
    "revision": "49c9c6d9596a7bab9df4836383eddd6c"
  },
  {
    "url": "about/contributing.html",
    "revision": "088504e930792906460a8eb658ff07d7"
  },
  {
    "url": "about/introduction.html",
    "revision": "508a8ee502236108e910d790b0ed8eb1"
  },
  {
    "url": "about/license.html",
    "revision": "567dc918811931138dc7bd91dc89f253"
  },
  {
    "url": "about/roadmap.html",
    "revision": "0577e86ce1fdae9c902b067b8d240598"
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
    "url": "assets/js/11.cc1484dc.js",
    "revision": "2b6e37db98493d026d932d9cdbceb143"
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
    "url": "assets/js/17.dcf3d592.js",
    "revision": "6950dc2efad816f01062c11b7198d100"
  },
  {
    "url": "assets/js/18.c2afa83c.js",
    "revision": "f5bbff7e3c7135c7028e7530084efcf2"
  },
  {
    "url": "assets/js/19.9bb2d897.js",
    "revision": "9e7eb738abc4ea2ad63cedb7f0463358"
  },
  {
    "url": "assets/js/2.137cd41d.js",
    "revision": "6acb87cdb62541e87747c6cbd375cff0"
  },
  {
    "url": "assets/js/20.a055a1e9.js",
    "revision": "3b331443d2c296c609cdcf9a1dc7a77a"
  },
  {
    "url": "assets/js/21.dbd76632.js",
    "revision": "291b966f5827281261131ebc3f37783d"
  },
  {
    "url": "assets/js/22.5ad8b46a.js",
    "revision": "03bcc6a16066e7fdb77506ec4eebb5ae"
  },
  {
    "url": "assets/js/23.440b70cf.js",
    "revision": "9a2a4063057961ce2e11998554abb20f"
  },
  {
    "url": "assets/js/24.a02e3385.js",
    "revision": "43cf258bb73ca51ec03b0d486d1acc09"
  },
  {
    "url": "assets/js/25.84120997.js",
    "revision": "5d7f76436df03ebf32e0f7266267c094"
  },
  {
    "url": "assets/js/3.10e6b22f.js",
    "revision": "d8436e3a24b15784aed0c4c5b5f2f689"
  },
  {
    "url": "assets/js/4.9bed809e.js",
    "revision": "b19d403ebe15999a902197be8b8c5d66"
  },
  {
    "url": "assets/js/5.47bf6553.js",
    "revision": "7b06d9b99bf1e8ab18f338bd3100f5c2"
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
    "url": "assets/js/8.f359305c.js",
    "revision": "6e1014a4b79379d1028f993de3a3fcc1"
  },
  {
    "url": "assets/js/9.5a2f9245.js",
    "revision": "622e6f59b48d091ee14c0fd1c69f0aa5"
  },
  {
    "url": "assets/js/app.d4d07b59.js",
    "revision": "5dff6133d9c7bee3bf0018047f63d838"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "8d798438baeea768bd0deebf772ae359"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "f3ec0314d70477a3c9c655457e3f0bff"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "a093fc7211792cb0bd2d13063cbc56d4"
  },
  {
    "url": "index.html",
    "revision": "d10959a7d985b711b6f530226ff584fc"
  },
  {
    "url": "reference/cli.html",
    "revision": "3278e15a6434bbbee3e0c3751c3fa255"
  },
  {
    "url": "reference/environment.html",
    "revision": "5c7dc31598fde1c0c133319c6a2513eb"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "efa292de9c5083cf5a1870086a6bbaf7"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "6e232e399e2329f5cbd957252dae05ed"
  },
  {
    "url": "tips/using-artillery.html",
    "revision": "6701430ee2715b880400a90f5257d0e0"
  },
  {
    "url": "tips/using-gdal.html",
    "revision": "beea23e0d6a870a37930203fa024aeea"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "46bd2231956b55dd6b72e58cf6d63ea4"
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
