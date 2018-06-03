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
    "revision": "bf58a059434e6d2a39183602081906cb"
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
    "url": "assets/js/0.8deb2c1c.js",
    "revision": "2293e4e7161965cf93aa069a7a845e6b"
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
    "url": "assets/js/3.2f4b2d6d.js",
    "revision": "81b772c02be89d3682a5d1e3ab77ab5d"
  },
  {
    "url": "assets/js/app.66744ebe.js",
    "revision": "4dfe8d4c7d7ad3bacbfbce2f1e6d4ccd"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "872d99411063aad817cfca4479eeb820"
  },
  {
    "url": "how-to-use-it/index.html",
    "revision": "def38406f9f94eace29972ca550ceb10"
  },
  {
    "url": "index.html",
    "revision": "daeff8229d204a51b1be6def2ef63fc5"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "00f799f3412e2a29c2989bc1fdfecae4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
