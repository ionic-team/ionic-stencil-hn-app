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
    "url": "build/app.global.js",
    "revision": "12fd254b4d3a6975cf831a688df6749f"
  },
  {
    "url": "build/app.js",
    "revision": "f9f7530437c289a35700a7378ecf473b"
  },
  {
    "url": "build/app.registry.json",
    "revision": "1cdfd5743e19049c9a8d04e764244211"
  },
  {
    "url": "build/app\\app.h1cdl7wyaiaz.js",
    "revision": "632b0221707b3336872a8c517bffa11a"
  },
  {
    "url": "build/app\\bguadrwnacsq.js",
    "revision": "0350f4b3a2067110b1e642ee5931a38b"
  },
  {
    "url": "build/app\\70p7wwvlegtj.css",
    "revision": "0350f4b3a2067110b1e642ee5931a38d"
  },
  {
    "url": "build/app\\fvzmx6x7sq7d.js",
    "revision": "552a024fac0ea69eedd4b1e53bb497fc"
  },
  {
    "url": "build/app\\mgekeaoebvgm.css",
    "revision": "075bd0318fd761a95d13a6d334aaa8bc"
  },
  {
    "url": "/build/app\\uncqiyjsjzfr.js",
    "revision": "0350f4b3a2067110b1e642ee5931a38z"
  },
  {
    "url": "build/app\\okgm0mspzb9c.css",
    "revision": "552a024fac0ea69eedd4b1e53bb4972f"
  },
  {
    "url": "build/app\\mldishtevefa.js",
    "revision": "552a024fac0ea69eedd4b1e53bb497cf"
  },
  {
    "url": "build/app\\advpnqatxcre.js",
    "revision": "fabb6083328f7ec55ac7778895e2011x"
  },
  {
    "url": "build/app/cbucl6irjrc1.css",
    "revision": "fabb6083328f7ec55ac7778895e2011y"
  },
  {
    "url": "favicon.ico",
    "revision": "0350f4b3a2067110b1e642ee5931a38a"
  },
  {
    "url": "index.html",
    "revision": "552a024fac0ea69eedd4b1e53bb497ff"
  },
  {
    "url": "manifest.json",
    "revision": "095bd0318fd761a95d13a6d334aaa8bc"
  },
  {
    "url": "sw.js",
    "revision": "fabb6083328f7ec55ac7778895e2011f"
  },
  {
    "url": "workbox-sw.prod.v1.1.0.js",
    "revision": "df86dfc69c6d017722ecb8a16d34c849"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
