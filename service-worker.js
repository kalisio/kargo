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
    "revision": "f4d397fd3d669d351e4d9c7d786a3eda"
  },
  {
    "url": "about/contact.html",
    "revision": "78fe3e1c95c338d824ea472586cb62ef"
  },
  {
    "url": "about/contributing.html",
    "revision": "2ab0b97eaf55b57054e8657835b1ea5b"
  },
  {
    "url": "about/introduction.html",
    "revision": "cac02bfb5348c293d9a7f6794448d459"
  },
  {
    "url": "about/license.html",
    "revision": "53274d4356fb563bcf6c491497fc9aaa"
  },
  {
    "url": "about/roadmap.html",
    "revision": "712a415cf1d4321b91e59ea68785c4bf"
  },
  {
    "url": "assets/css/0.styles.c5cff6b5.css",
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
    "url": "assets/js/10.454d5f4d.js",
    "revision": "0e08b05eb896ba5e353cc909cf0b02e9"
  },
  {
    "url": "assets/js/11.ff2e891d.js",
    "revision": "ab876ad3dba04d14226faaa589c62fb6"
  },
  {
    "url": "assets/js/12.95d3f653.js",
    "revision": "27d638c098dec50e062fdc40b68b31e7"
  },
  {
    "url": "assets/js/13.d0409bdb.js",
    "revision": "1d92145d143061e9f17d93ce5ec9ecf2"
  },
  {
    "url": "assets/js/14.8ff2c8af.js",
    "revision": "8fbd7442276168187508fcc25009bb6c"
  },
  {
    "url": "assets/js/15.fb757dd4.js",
    "revision": "403ac6bd5516deccef1684714266f313"
  },
  {
    "url": "assets/js/16.4ecdea1f.js",
    "revision": "64ce2ec585920bd4ec143085eb0f537e"
  },
  {
    "url": "assets/js/17.33e512f0.js",
    "revision": "c2b755bc4c9d91778455d86768b7f496"
  },
  {
    "url": "assets/js/18.244b601b.js",
    "revision": "ec93a7d99ba156d718b309594b2fb741"
  },
  {
    "url": "assets/js/19.679fb730.js",
    "revision": "bad56adf5268c0d8e945c53169205ce2"
  },
  {
    "url": "assets/js/2.abd1cf17.js",
    "revision": "568c183b17a75808bcc6111cccca538b"
  },
  {
    "url": "assets/js/20.a56525f1.js",
    "revision": "948812a9e29220e35bd5fdc2ee4d8b06"
  },
  {
    "url": "assets/js/21.a6cdde23.js",
    "revision": "cee8a6e101017029bd0210379c03b1ad"
  },
  {
    "url": "assets/js/3.981fafe3.js",
    "revision": "19b0ef61bf0bf834194a587e5922853d"
  },
  {
    "url": "assets/js/4.26b6fbeb.js",
    "revision": "2af0a72f2e9941a74d51d48bb65a6f29"
  },
  {
    "url": "assets/js/5.418ccfed.js",
    "revision": "ccf59aa5918692d169c0f16b1d1f613c"
  },
  {
    "url": "assets/js/6.13fed288.js",
    "revision": "7d98f19801981afa65d78041b8a3f5a3"
  },
  {
    "url": "assets/js/7.d80cd23f.js",
    "revision": "6df9e8e2b6d20d1889f8a348cebaff71"
  },
  {
    "url": "assets/js/8.6788ba30.js",
    "revision": "a57709c9a5d3a78178c199d312c36cd8"
  },
  {
    "url": "assets/js/9.eac62e32.js",
    "revision": "1518938d13c8c6ec29ed71b5ca8bae5e"
  },
  {
    "url": "assets/js/app.7e323901.js",
    "revision": "15e4233e1bf8f83f1476ead308279286"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "0e6d9bef9a561eb319fb7bc59ed1f110"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "5e902b3bba478d9b3f4875888b745735"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "73084fe386adb5886c319c4acf0fa0d7"
  },
  {
    "url": "index.html",
    "revision": "c199f18fb347d3948e77f2856c950b0b"
  },
  {
    "url": "reference/cli.html",
    "revision": "a72df028e739cb1ffad7e8177f63bc4c"
  },
  {
    "url": "reference/environment.html",
    "revision": "22b6fd23a0caf526ba3c582ce2757901"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "e16da92f68668a5218776e776578eca2"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "441165d40ebbab5e240e50f700efb642"
  },
  {
    "url": "tips/using-kargo-toolbox.html",
    "revision": "7162e89afd114b69af92ce44d30f30ab"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "a05c13049eab140e384b4d698281b00e"
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
