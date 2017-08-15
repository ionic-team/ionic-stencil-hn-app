importScripts('workbox-sw.prod.v1.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "build/app\\app.pfveyffc.js",
    "revision": "906b65d764397117f5f310728d1b7ff0"
  },
  {
    "url": "build/app\\rg5tnl0f.js",
    "revision": "d4ad1e330633fdfcb417dd599dcbdd7e"
  },
  {
    "url": "build/app\\70p7wwvl.css",
    "revision": "36b41aa3f03c043a5ee5e492d9cfcc3f"
  },
  {
    "url": "build/app\\bvpu2pwa.js",
    "revision": "afe18b116620aacfd7c3daa5bc52bb76"
  },
  {
    "url": "build/app\\mgekeaoe.css",
    "revision": "5af547f3132daea23c46bcfe9f507122"
  },
  {
    "url": "build/app\\q95opvym.css",
    "revision": "c0d05b45d2d665d6f116d136aaff1054"
  },
  {
    "url": "build/app\\uwyzpx1k.js",
    "revision": "3afc8ff8aceb3b55f6f2cd678f08d862"
  },
  {
    "url": "build/app\\zzkays59.js",
    "revision": "f8ae01b6c85e1e846e5efc03fbe7e0dd"
  },
  {
    "url": "build/app\\b0b17nlp.js",
    "revision": "e583e6ee0be741fe531c43901b27d724"
  },
  {
    "url": "build/app\\mz9ulgti.css",
    "revision": "e5d842f28f233655d354d90e2e5b8ee1"
  },
  {
    "url": "build/app.global.js",
    "revision": "7ee2c48ba6949acee5e5f2ccb30374fe"
  },
  {
    "url": "build/app.js",
    "revision": "5dbb817324d723b9321deb88d7960e89"
  },
  {
    "url": "build/app.registry.json",
    "revision": "64f71e230e3b60fa247e290afb625260"
  },
  {
    "url": "build/app\\svg\\ios-ionic-outline.svg",
    "revision": "f921c81b2e8aa13418ec3c7f971fb8e4"
  },
  {
    "url": "build/app\\svg\\ios-ionic.svg",
    "revision": "4b22202a1365c1f5d196d18877ea4801"
  },
  {
    "url": "build/app\\svg\\md-ionic.svg",
    "revision": "a583dcc1d39a75658b3a07d6ba087c2c"
  },
  {
    "url": "favicon.ico",
    "revision": "7aa40cf9dba1fd293fc8bd890106acce"
  },
  {
    "url": "index.html",
    "revision": "321792aed5b5fbd734d5d742bfcc12cb"
  },
  {
    "url": "manifest.json",
    "revision": "095bd0318fd761a95d13a6d334aaa8bc"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
