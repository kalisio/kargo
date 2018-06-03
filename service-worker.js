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
    "revision": "5585b9b3b9697bf39f1506c2ede27120"
  },
  {
    "url": "assets/css/4.styles.c7554976.css",
    "revision": "d5671a09a97d902114e04b4ae8ea0680"
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
    "url": "assets/js/0.e0aa667e.js",
    "revision": "ff06b438c66b6e90ddc188655345aff2"
  },
  {
    "url": "assets/js/1.8f02bcc6.js",
    "revision": "d3be7b5edecef2ae51ec0892fe98155c"
  },
  {
    "url": "assets/js/2.dfc2c385.js",
    "revision": "e56434479d4d99904c0769c51c3d96dc"
  },
  {
    "url": "assets/js/3.82be4153.js",
    "revision": "a2095ba47e3ef01011e65c10e77be9d2"
  },
  {
    "url": "assets/js/app.653cbbee.js",
    "revision": "e7c6533596513d83f648b4bba3d06bd5"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "02850d5da8ac87ecca782863ca9e0038"
  },
  {
    "url": "how-to-use-it/index.html",
    "revision": "d05f9d3d36eb67c6508693f1a986b3d1"
  },
  {
    "url": "index.html",
    "revision": "fc3791facea966178eb3ce970ce03554"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "93d0cbb7273012949e61a72f6cc77881"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
