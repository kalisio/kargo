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
    "revision": "a0430b3754feae9aecb9965654ca30b2"
  },
  {
    "url": "about/contact.html",
    "revision": "3bd9206c3688e7346f7ded644e5f5b55"
  },
  {
    "url": "about/contributing.html",
    "revision": "d95dc4b6cfd44ba2694482775ca5375b"
  },
  {
    "url": "about/introduction.html",
    "revision": "3304f8b15ef3c9bd7cb8bf62c823268c"
  },
  {
    "url": "about/license.html",
    "revision": "54766257672c638fd11722e7e2f8bfce"
  },
  {
    "url": "about/roadmap.html",
    "revision": "99f1c4be43131f50a319a648fbee154a"
  },
  {
    "url": "assets/css/0.styles.4122b163.css",
    "revision": "a7c2f00a3970bd3ba3a82149562272fd"
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
    "url": "assets/js/10.51c7d0cd.js",
    "revision": "44a06b2e946709e7a93ce592b31e66ec"
  },
  {
    "url": "assets/js/11.2c1dfe28.js",
    "revision": "06e40ae80598da4e1f287592792e15a2"
  },
  {
    "url": "assets/js/12.3ca00055.js",
    "revision": "0b87b69f495915b13ad26bfa582fe3ec"
  },
  {
    "url": "assets/js/13.be4b9935.js",
    "revision": "c779c7f56cfc156038c053f15fc1bfae"
  },
  {
    "url": "assets/js/14.b8d484b9.js",
    "revision": "82961a72866491c78131120b50c3d920"
  },
  {
    "url": "assets/js/15.16ca5807.js",
    "revision": "501d32282d988146ea5b9dbacdf01f0f"
  },
  {
    "url": "assets/js/16.67be1c34.js",
    "revision": "f3eb663afadaa91112b942342801117a"
  },
  {
    "url": "assets/js/17.caa0cc00.js",
    "revision": "5b71c71fcfccbde2fcca6acc1b046b5f"
  },
  {
    "url": "assets/js/18.a4b136aa.js",
    "revision": "4f7c87da2ce7e7614fb1c8b427e92f9b"
  },
  {
    "url": "assets/js/19.6e2add76.js",
    "revision": "d68a05d52cb9079f64c8ae4b51edf593"
  },
  {
    "url": "assets/js/2.5d610dd7.js",
    "revision": "9b6f6eba129757e69eb1ec67dd62642c"
  },
  {
    "url": "assets/js/20.95f9cb00.js",
    "revision": "3129611409c14ca6719b8249027e9bda"
  },
  {
    "url": "assets/js/21.11c4e638.js",
    "revision": "b23f916f5b2ebb597e6e91f780e804f3"
  },
  {
    "url": "assets/js/22.c9e43ebc.js",
    "revision": "3657ac50469cb1b2e2bb155a19f44166"
  },
  {
    "url": "assets/js/23.5a242101.js",
    "revision": "da0b61f27e5824d7791469e271b2208c"
  },
  {
    "url": "assets/js/24.aefa5524.js",
    "revision": "410213c7f91e68f7ec6d1a7b7a7f6d7b"
  },
  {
    "url": "assets/js/3.3c1fec2a.js",
    "revision": "d3ebd660cf62728c4292efe40a3dde17"
  },
  {
    "url": "assets/js/4.6784b262.js",
    "revision": "f1b79b6a6158a55bc5603fb2c3a6a3e6"
  },
  {
    "url": "assets/js/5.85c71f0d.js",
    "revision": "0184217f167531c5c11ebd49e1cafa1d"
  },
  {
    "url": "assets/js/6.ba693fab.js",
    "revision": "aa09fe44ddd1f0015691d388ecbf1a88"
  },
  {
    "url": "assets/js/7.6737d413.js",
    "revision": "4a5f24658de505cfc35b62ce651b27fe"
  },
  {
    "url": "assets/js/8.eb3256b3.js",
    "revision": "574d292c9642493094f9888de7e64c79"
  },
  {
    "url": "assets/js/9.829b1ec7.js",
    "revision": "92faad8536733b9704a0a1a15dbaf716"
  },
  {
    "url": "assets/js/app.7af641d3.js",
    "revision": "570c41013ebe3cc50d6d4cb1286af1ab"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "f35327d31ede996d881c469050ea339f"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "f78ca19c7373abb4f5398b72cf32a6d2"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "5f111135c65541999834cdc0529730bf"
  },
  {
    "url": "index.html",
    "revision": "562b8bc48bb2f1f6233b0fc557a5512b"
  },
  {
    "url": "reference/cli.html",
    "revision": "58b818da5ba3be9eac20fd53f1018dc8"
  },
  {
    "url": "reference/environment.html",
    "revision": "9d6d351111988d2cb352c2a6f145ff8b"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "bc7e4a87abb91e4f1646e09111fa3baf"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "76be112bba0715f77507accd9824a59c"
  },
  {
    "url": "tips/using-kargo-toolbox.html",
    "revision": "2e2f732332ba4fd171e808cda16d7734"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "38419717c604ba9fbbe3a04bdf2eb674"
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
