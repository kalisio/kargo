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
    "url": "about/contact.html",
    "revision": "29f73a5250c8b5ccb4713920fa3a257d"
  },
  {
    "url": "about/contributing.html",
    "revision": "59bf3fd50be185aa098446f95df0316e"
  },
  {
    "url": "about/introduction.html",
    "revision": "8236a325ddbed101b7355e55b57d4566"
  },
  {
    "url": "about/license.html",
    "revision": "a7ed254dce625ffd8464f0059c75c26d"
  },
  {
    "url": "about/roadmap.html",
    "revision": "987bf2b479daa161a2f24449d9268f04"
  },
  {
    "url": "assets/css/0.styles.1ef25942.css",
    "revision": "9cac0b895931aeea625ce73ed37c9f16"
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
    "url": "assets/js/10.2ce671be.js",
    "revision": "2da02e28e503aeb8cb1c28b0eed6820d"
  },
  {
    "url": "assets/js/11.1df4a97d.js",
    "revision": "506b07a0e5d6d13106a8c3cbc64a2ba1"
  },
  {
    "url": "assets/js/12.83998b3d.js",
    "revision": "c9ac9168cfb9eb3e5388288f16ae2e24"
  },
  {
    "url": "assets/js/13.32a35a31.js",
    "revision": "52416d155e388953b2c4a1d21c1e973d"
  },
  {
    "url": "assets/js/14.30fb492e.js",
    "revision": "d1fd70ce504cf468e2b8d98c77e68fe7"
  },
  {
    "url": "assets/js/15.068098ac.js",
    "revision": "a5027da54848eae8a17da71fdefaba32"
  },
  {
    "url": "assets/js/16.86813515.js",
    "revision": "81f394c2cfa4fc5dfd7ef47575faffff"
  },
  {
    "url": "assets/js/17.97af0214.js",
    "revision": "56d70cf9add57e4bf86298464eaef962"
  },
  {
    "url": "assets/js/18.6c6549b2.js",
    "revision": "3ff2ecdf7826866e0fe30cdf136f7590"
  },
  {
    "url": "assets/js/19.eedd02ef.js",
    "revision": "5f5402632be99519cf74aca1d0a25fcc"
  },
  {
    "url": "assets/js/2.988b0bdb.js",
    "revision": "047c6b781c6f9414aa9823986b0ee789"
  },
  {
    "url": "assets/js/20.714fbdf5.js",
    "revision": "ad397b161320a29f3a551a2a6a43b7dc"
  },
  {
    "url": "assets/js/21.14ccbfa7.js",
    "revision": "724bea696e88fbfaa8eab140453e87a5"
  },
  {
    "url": "assets/js/22.6ede580f.js",
    "revision": "70cc7cac71930ade885e1a78274a5ae2"
  },
  {
    "url": "assets/js/23.79d65731.js",
    "revision": "cf75a7a83ee11d992c8061383796fb73"
  },
  {
    "url": "assets/js/24.73aa786e.js",
    "revision": "3512fa61346aa5333eafb6e5857897e3"
  },
  {
    "url": "assets/js/25.b1c40f75.js",
    "revision": "deb8f6b01ff9fd2c5186e0b04aa352b8"
  },
  {
    "url": "assets/js/26.d868bc30.js",
    "revision": "a60183eb6dc8e708a317dbb0bda33229"
  },
  {
    "url": "assets/js/3.1fd26862.js",
    "revision": "99290d132067da2d89b1a221ad08615e"
  },
  {
    "url": "assets/js/4.06ce6fa0.js",
    "revision": "e5b435555f03519eed637dbeffd706ce"
  },
  {
    "url": "assets/js/5.300c116d.js",
    "revision": "821ed22a1176b6203d354c749d00155c"
  },
  {
    "url": "assets/js/6.ca3ac8c5.js",
    "revision": "52c3f520e6abca611eedf44ffa3e092f"
  },
  {
    "url": "assets/js/7.44a18220.js",
    "revision": "ead96491112f9f2f4e9f96d3e181d3ae"
  },
  {
    "url": "assets/js/8.6c23e807.js",
    "revision": "d0e12baca301040b221c00293f559019"
  },
  {
    "url": "assets/js/9.6d79a617.js",
    "revision": "df82134c231389c9525b439aed1fcd11"
  },
  {
    "url": "assets/js/app.c5434001.js",
    "revision": "02b16f393ec384b2cf5e7935ba13fc54"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "8326313d7a85df70c33044367914e471"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "aa0557c024e2260fe776e0f7d4a54e35"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "0a6e5891a52376d6939ae4e7fed5e061"
  },
  {
    "url": "index.html",
    "revision": "73f9cd07c771fe4133e35d1c0d040f83"
  },
  {
    "url": "reference/cli.html",
    "revision": "b7464a386a27f560db8fac189c47cff2"
  },
  {
    "url": "reference/environment.html",
    "revision": "521cd2e8381bb2eb712e0624ec410993"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "c03f6e260e3cdfa078c29111a5ac4c97"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "ad3a4ca03b00231c972bed96ccd296c7"
  },
  {
    "url": "tips/packaging-images.html",
    "revision": "1ccdb9d9b9def550730c876a4fa125cb"
  },
  {
    "url": "tips/using-kargo-toolbox.html",
    "revision": "51e11b752cb9bf6308d96a2c3bd5d44a"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "6bb10f99346cedcda0d1ea6235163956"
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
