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
    "revision": "5be8edb07fd6a6c847f98f4577b02c1e"
  },
  {
    "url": "build/app.registry.json",
    "revision": "9ec2bc1e3de12c77dba155c12dfef9d2"
  },
  {
    "url": "manifest.json",
    "revision": "9ec2bc1e3de12c77dba155c12dfef9e4"
  },
  {
    "url": "workbox-sw.prod.v1.1.0.js",
    "revision": "9ec2bc1e3de12c77dba155c12dfef8c2"
  },
  {
    "url": "index.html",
    "revision": "9ec2bc1e3de12c77dba155c12dfef3r9"
  },
  {
    "url": "build/app\\j4qbspqcgtos.js",
    "revision": "ef97d85389bc296a461907b457b39e35"
  },
    {
    "url": "build/app\\l6tawixojklw.css",
    "revision": "e8fab9f5d61c7bdda49a325dac4d26c4"
  },
    {
    "url": "build/app\\bguadrwnacsq.js",
    "revision": "3db760eb016a9172089a0ad56cd52801"
  },
    {
    "url": "build/app\\70p7wwvlegtj.css",
    "revision": "e6b7a011a6a6da858248b6319f22cd17"
  },
  {
    "url": "build/app\\fvzmx6x7sq7d.js",
    "revision": "b9b7c125781013402c76c058d0c1219e"
  },
    {
    "url": "build/app\\mgekeaoebvgm.css",
    "revision": "cff5bddd81d5656186386d45ec100f30"
  },
    {
    "url": "build/app\\cbucl6irjrc1.css",
    "revision": "a40322a637ba4312c7efaf997189c5d3"
  },
    {
    "url": "build/app\\advpnqatxcre.js",
    "revision": "ca3be6428e2795d8ac318937d6bbbff6"
  },
    {
    "url": "build/app\\mldishtevefa.js",
    "revision": "0a5ab271f11e542eaad76c81fd6b1816"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
