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
    "revision": "42284b8959cc249abda6c799e5dff182"
  },
  {
    "url": "about/contact.html",
    "revision": "d719267d659365b501d78fdb8f640f7f"
  },
  {
    "url": "about/contributing.html",
    "revision": "ed25f89ecb34b4f6a7fa9121b1134ab8"
  },
  {
    "url": "about/introduction.html",
    "revision": "26273bcfcbab742f1d579b58a9cd9566"
  },
  {
    "url": "about/license.html",
    "revision": "e090f98eae7420dd3bcd356fa19dd5ac"
  },
  {
    "url": "about/roadmap.html",
    "revision": "8f99f21f56eece7de5985f8157d4ed9b"
  },
  {
    "url": "assets/css/0.styles.21f892e9.css",
    "revision": "cb218daf71841c4b9fb1d6e3c1be1018"
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
    "url": "assets/js/10.ab06285d.js",
    "revision": "4c695ed4ad359888ed29b46970a29d44"
  },
  {
    "url": "assets/js/11.64147753.js",
    "revision": "1a28fec474a14439ff9f926327b56dbf"
  },
  {
    "url": "assets/js/12.32088f54.js",
    "revision": "3c0ae1181d6f7f3d9350008c80b35db7"
  },
  {
    "url": "assets/js/13.27dc4b94.js",
    "revision": "d48a7a043cdc510d173d43113263c7c3"
  },
  {
    "url": "assets/js/14.fef6b623.js",
    "revision": "5c51f8876af4dbd3be01801f6912f4cf"
  },
  {
    "url": "assets/js/15.8f6428ca.js",
    "revision": "c4f08d062125c35101b860680b6dfef7"
  },
  {
    "url": "assets/js/16.c407c2f1.js",
    "revision": "993350762e3221a8e73980d919356e98"
  },
  {
    "url": "assets/js/17.ff63ab84.js",
    "revision": "821099863aac2df3fbfe3035d7816699"
  },
  {
    "url": "assets/js/18.d5f0e9d8.js",
    "revision": "91953c25c5e6687eae56559074f5a1d2"
  },
  {
    "url": "assets/js/19.5d84ca90.js",
    "revision": "1061d63b02c5783a430b62b43418388e"
  },
  {
    "url": "assets/js/2.aadf217f.js",
    "revision": "d1c506cf895a7b06b9b4414dcebe06c7"
  },
  {
    "url": "assets/js/20.ce2d0630.js",
    "revision": "10b99d05f0629ebc804f90df08a9f046"
  },
  {
    "url": "assets/js/21.45a784ad.js",
    "revision": "febf44ad1592f5264d31abbba75233e5"
  },
  {
    "url": "assets/js/22.23faa706.js",
    "revision": "33bc704123e3575fa14dbcd697280f14"
  },
  {
    "url": "assets/js/23.9c8fd307.js",
    "revision": "1bbb4d4b3dbdcd79a1f9c4ee0410b69a"
  },
  {
    "url": "assets/js/24.0e69f356.js",
    "revision": "8bfba411fb8ef5ab545920814a0e0796"
  },
  {
    "url": "assets/js/25.543069e9.js",
    "revision": "0b3543aef9fa14a8a26a83a884b33485"
  },
  {
    "url": "assets/js/26.15cc4a34.js",
    "revision": "156eb57555323d1661d84018a050f463"
  },
  {
    "url": "assets/js/27.eba4c86a.js",
    "revision": "3e12818fd1366433dad0cff9f188ecdd"
  },
  {
    "url": "assets/js/28.a352e9d2.js",
    "revision": "8da547c9e00fd5c21e42b9178645a71d"
  },
  {
    "url": "assets/js/29.93903859.js",
    "revision": "a4c95dcaf1175ae0a7c05be34e799d50"
  },
  {
    "url": "assets/js/3.2a46a756.js",
    "revision": "e49631f83202760d91f8c0cf369bb29b"
  },
  {
    "url": "assets/js/30.fa740c23.js",
    "revision": "baf6cfd556a9576e044dc8a2b08217f4"
  },
  {
    "url": "assets/js/31.607edf94.js",
    "revision": "35c29f2ec3dc82cfd3ac634ac8e0efd8"
  },
  {
    "url": "assets/js/32.ae881e8d.js",
    "revision": "cc0e59b7f75158a2002b1e96fd3234f2"
  },
  {
    "url": "assets/js/33.fbd3300b.js",
    "revision": "ec25e0c16e612c84afd568b4b91107ac"
  },
  {
    "url": "assets/js/34.27810eb7.js",
    "revision": "bd4f72825871723bd463eb3ee5242122"
  },
  {
    "url": "assets/js/4.1b74af09.js",
    "revision": "570f5395468ed3fdf48afe2acd78b09b"
  },
  {
    "url": "assets/js/5.08369b04.js",
    "revision": "00ce12a39161b5ee596bb8dfdbf4acbe"
  },
  {
    "url": "assets/js/6.ef3c43be.js",
    "revision": "534d0f80087c0ebc4fa02b42f729c763"
  },
  {
    "url": "assets/js/7.24c688a2.js",
    "revision": "c0b5f79a8f35287179b402722714bf35"
  },
  {
    "url": "assets/js/8.92991761.js",
    "revision": "aaa791795405b69f2142dc02cb16fae6"
  },
  {
    "url": "assets/js/9.1eff0c26.js",
    "revision": "3fdb34f849126c7bc98cb050d7aaf2fd"
  },
  {
    "url": "assets/js/app.ccf7bffd.js",
    "revision": "bb8207a86c09f29f19ce77f4007896d2"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "b241cf5abc82940582a854ff0e009460"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "21ca93360e3303ec4c7284cab3ecc6d0"
  },
  {
    "url": "guides/infrastructure-management.html",
    "revision": "c2446ddaa9e664f1bcf96a7ef135657a"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "39de5990a2759e6f3be76cc4e191c7a8"
  },
  {
    "url": "index.html",
    "revision": "2709b36c23b44ffe7038f727ec284a5f"
  },
  {
    "url": "reference/cli.html",
    "revision": "a9440ef0c45ef7ea4c0c3fb38955533a"
  },
  {
    "url": "reference/environment.html",
    "revision": "b080760e06a6e1fec4a9beb97ee34a7a"
  },
  {
    "url": "reference/helper-scripts.html",
    "revision": "3b7201312716bfb70323ecac2962c3f6"
  },
  {
    "url": "reference/scripts-library.html",
    "revision": "6e66c70abbf2e3683b02f7143803e850"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "09e00808f69c32ee89812bc1e52d77b0"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "3639e432810410057cc323eda3255b70"
  },
  {
    "url": "tips/running-express-gateway.html",
    "revision": "f18d03a6e99362e6d1860c48fa5436d8"
  },
  {
    "url": "tips/using-artillery.html",
    "revision": "c58c55325e4e94b15039d0333337627b"
  },
  {
    "url": "tips/using-gdal.html",
    "revision": "b4ca19550caf9e37b94430a75fde0315"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "5dfb053ff24fb3ac2212890203ff29d0"
  },
  {
    "url": "tips/using-private-registry.html",
    "revision": "e7f20ea08039e47158a3e1e461f39a48"
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
