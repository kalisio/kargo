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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7a3d20528d7d414ffdd84a5077460991"
  },
  {
    "url": "assets/css/4.styles.024faf6a.css",
    "revision": "7a781fcbd7dab1de5a3f2e24635f4efe"
  },
  {
    "url": "assets/img/kargo-diagram.46a449cd.png",
    "revision": "46a449cdac1a4f2233358aa7e4b7f5f8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.6bec6429.js",
    "revision": "8d5a67b7576c9f17fc9568f1c185a1f7"
  },
  {
    "url": "assets/js/1.edfb1d70.js",
    "revision": "f1799f0e15c3797ab4e4c994655a46b6"
  },
  {
    "url": "assets/js/2.eb86d3fa.js",
    "revision": "36ad7b3708cd93663f56621715c419bd"
  },
  {
    "url": "assets/js/3.b470a261.js",
    "revision": "32ae220b5d33688fbc9dcfb20009ad90"
  },
  {
    "url": "assets/js/app.3336f778.js",
    "revision": "13c8b152586b6c48c8b5ad1188b1a8a1"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "1445f87e9f6e68ab17c506b155217064"
  },
  {
    "url": "how-to-use-it/index.html",
    "revision": "8bf03f007d3e887c3ea536e27de0b819"
  },
  {
    "url": "index.html",
    "revision": "8b902c18a2f1fbf1300bb5cf2c6b1eed"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "3c9f18b70b2b79d3adbbdac91a2d6637"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
