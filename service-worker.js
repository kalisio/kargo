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
    "revision": "0e827bf55f258e5217b5141cbfc84ae9"
  },
  {
    "url": "about/contact.html",
    "revision": "70cee6252a479b2e48d7aadc43798be9"
  },
  {
    "url": "about/contributing.html",
    "revision": "4e6f84b3c35ddbdfe18d15273e3cd04d"
  },
  {
    "url": "about/introduction.html",
    "revision": "15a52caebe1f8b36cd10389985c105ec"
  },
  {
    "url": "about/license.html",
    "revision": "a4c6a2d41028da098244765a457ea7c2"
  },
  {
    "url": "about/roadmap.html",
    "revision": "b2200128b2375f3ddaba1431bdaa992c"
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
    "url": "assets/js/19.21cd095b.js",
    "revision": "f1766c1ee271263e46d33dd1a64e4d5b"
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
    "url": "assets/js/app.2d3bb02f.js",
    "revision": "56f1b02f76326423134458ef80daeb6b"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "d9e946c6108db32cd266be2333bc791f"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "9d5450ac47bc6faf86f2031bbce1ea70"
  },
  {
    "url": "guides/infrastructure-management.html",
    "revision": "312b4ade49e3c4d998a0a0a0872728a8"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "b270794e8a70cebb97b0d59177edaa8e"
  },
  {
    "url": "index.html",
    "revision": "1ad12a48004640dfc3f82e9b20e4c0e7"
  },
  {
    "url": "reference/cli.html",
    "revision": "76be69f007198ea63a494001c56c0317"
  },
  {
    "url": "reference/environment.html",
    "revision": "377864eabf9504e1fa9415164f38ae73"
  },
  {
    "url": "reference/helper-scripts.html",
    "revision": "b6e02295dbb0fdc4776fe188c72ec65c"
  },
  {
    "url": "reference/scripts-library.html",
    "revision": "7249776e965a54142e879704b6e1568f"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "ad0a2d55a44de105a3f3add23185ddd1"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "dd69581e106ea174bd6000fd7fbfe668"
  },
  {
    "url": "tips/running-express-gateway.html",
    "revision": "bf8e9ba398c8830f333fc634e5599f44"
  },
  {
    "url": "tips/using-artillery.html",
    "revision": "69948ecdf17fbfdb03e33aa76c579ecc"
  },
  {
    "url": "tips/using-gdal.html",
    "revision": "182f4adbfc0a22243d5c76bb46bc06c2"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "ac53526f3064440c217c6557af72adbc"
  },
  {
    "url": "tips/using-private-registry.html",
    "revision": "58857537ddefa240281025a6831b0c1b"
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
