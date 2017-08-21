importScripts('workbox-sw.prod.v1.3.0.js');

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
    "revision": "7ee2c48ba6949acee5e5f2ccb30374fe"
  },
  {
    "url": "build/app.js",
    "revision": "ae4dda4b92da29dea2fc292bc39dd074"
  },
  {
    "url": "build/app.registry.json",
    "revision": "b42cda96dba12dc1d1c7c4aaa0d59c07"
  },
  {
    "url": "build/app\\0xmm4pwk.css",
    "revision": "b7e06549d0d61cf79e637fae321a1d8b"
  },
  {
    "url": "build/app\\1by3dmaa.css",
    "revision": "65dbf58b05afb65e068c0543a0051218"
  },
  {
    "url": "build/app\\2oe3aone.css",
    "revision": "813e237db6c7470244289c69aa84613a"
  },
  {
    "url": "build/app\\2pvpqemf.js",
    "revision": "6d09bfcd0315dd74ae0097b08f25b147"
  },
  {
    "url": "build/app\\3ymfoluo.css",
    "revision": "fd06025d7bd63b40596c1db2d7690f0a"
  },
  {
    "url": "build/app\\4vsdqbz7.css",
    "revision": "3e0b706c97d296745d1e213e26de6fb5"
  },
  {
    "url": "build/app\\4yowblhj.css",
    "revision": "16ab941b2131f2c9716df5c84ae09d94"
  },
  {
    "url": "build/app\\70p7wwvl.css",
    "revision": "36b41aa3f03c043a5ee5e492d9cfcc3f"
  },
  {
    "url": "build/app\\7kir6zja.css",
    "revision": "3b2a18bcaeed50dd4527d69799c10a77"
  },
  {
    "url": "build/app\\7n15lmah.js",
    "revision": "9372a74b46058baf00ad87e56e624aea"
  },
  {
    "url": "build/app\\7urdugdx.css",
    "revision": "99b0dd4d25cc9b75bb60f3732d68c48d"
  },
  {
    "url": "build/app\\8cs2ebdy.js",
    "revision": "34a38157d352ee2e569f508d01891d38"
  },
  {
    "url": "build/app\\8iwhmq5q.css",
    "revision": "da05a17940c487e5d5e7a4007d77797a"
  },
  {
    "url": "build/app\\a9zp9z7k.css",
    "revision": "e7c7381ba1df2ca3a3af22e450d726d4"
  },
  {
    "url": "build/app\\app.1rkn20pe.pf.js",
    "revision": "d603cf9a21dbeb4d59ef265930ba447a"
  },
  {
    "url": "build/app\\app.pfveyffc.js",
    "revision": "906b65d764397117f5f310728d1b7ff0"
  },
  {
    "url": "build/app\\b0b17nlp.js",
    "revision": "e583e6ee0be741fe531c43901b27d724"
  },
  {
    "url": "build/app\\batrkjvw.css",
    "revision": "b0e449e494df484c8ef05aa5babfdafd"
  },
  {
    "url": "build/app\\biyxag35.css",
    "revision": "fdcad874b20aaa5e1e10737b0dead6c9"
  },
  {
    "url": "build/app\\bkwppxbe.js",
    "revision": "0b218a2817f096db7395b5226bdaa016"
  },
  {
    "url": "build/app\\bomcbywc.js",
    "revision": "bf03eb2f41042174080f4295d9a8ae9c"
  },
  {
    "url": "build/app\\bsaais6h.js",
    "revision": "8fbcbc0866b257f4a0980c11dfa7a5d8"
  },
  {
    "url": "build/app\\bvpu2pwa.js",
    "revision": "afe18b116620aacfd7c3daa5bc52bb76"
  },
  {
    "url": "build/app\\bvsyouok.js",
    "revision": "3ad6959b0cc7b07216fdab3eb46f8511"
  },
  {
    "url": "build/app\\cydysfwr.js",
    "revision": "d8c435099a215c78bbad2870cd1bc2fe"
  },
  {
    "url": "build/app\\djnppimy.css",
    "revision": "e312bee7506222fe3bec7eb5a89defd1"
  },
  {
    "url": "build/app\\edkznmsf.css",
    "revision": "2f2405de98d3d8209d2583d10f412c0f"
  },
  {
    "url": "build/app\\eh0ejrod.css",
    "revision": "db7262af3811d855e718a294a626cf62"
  },
  {
    "url": "build/app\\fbyap09l.css",
    "revision": "795cdbd5c8a677a0e68fcfd70c90f8b5"
  },
  {
    "url": "build/app\\fn2im8qq.css",
    "revision": "0550961fbb1ecbc3fdff62cc83b5cb3c"
  },
  {
    "url": "build/app\\fy9jsgdj.css",
    "revision": "adcdea97b453298429885a4bececf9be"
  },
  {
    "url": "build/app\\gj6v93wx.js",
    "revision": "812bcb15bb4a603490c583504e7c57d3"
  },
  {
    "url": "build/app\\gjriv8db.css",
    "revision": "7ad2330f45c3b021faca79a229f9ef1b"
  },
  {
    "url": "build/app\\gvsrsexc.css",
    "revision": "5442394b85e64d34dacb8e2f41ac93bf"
  },
  {
    "url": "build/app\\hpecgxgp.js",
    "revision": "7a227afe183768d8799399ab3e61f36c"
  },
  {
    "url": "build/app\\ig4ukbng.css",
    "revision": "521ab310947d9e07d468282c81e9c6eb"
  },
  {
    "url": "build/app\\inuypkmr.css",
    "revision": "19257270822bf732a02cea6114886da9"
  },
  {
    "url": "build/app\\iyaucfek.css",
    "revision": "ca76ec8a1e10a839f095bf4fb9ae72ae"
  },
  {
    "url": "build/app\\jdq7c2pw.css",
    "revision": "1f5f24f29760c3f61ead94303ce5cb2b"
  },
  {
    "url": "build/app\\kjmw0ups.css",
    "revision": "1f41daa464098355365796d945238d81"
  },
  {
    "url": "build/app\\kktxuccv.css",
    "revision": "4212cc4f7a0ff20e8f0b9f9205179c57"
  },
  {
    "url": "build/app\\kykj2wab.js",
    "revision": "bd64eb7d6666747b0b2bacaefc9bc514"
  },
  {
    "url": "build/app\\larpbgqr.css",
    "revision": "1d090667b99343d9d0e7418cb484bc8f"
  },
  {
    "url": "build/app\\ldue8ztl.css",
    "revision": "eb2b59f32268913415aadb93d6ab2efd"
  },
  {
    "url": "build/app\\lmntc08q.css",
    "revision": "22ae788740744279a9193d71595df67d"
  },
  {
    "url": "build/app\\mgekeaoe.css",
    "revision": "5af547f3132daea23c46bcfe9f507122"
  },
  {
    "url": "build/app\\mp3i2fiq.js",
    "revision": "5e4053798e2fb128b3f33d5931e52986"
  },
  {
    "url": "build/app\\mz9ulgti.css",
    "revision": "e5d842f28f233655d354d90e2e5b8ee1"
  },
  {
    "url": "build/app\\n0efedrw.css",
    "revision": "cba26a844d33526ed68e9732a2bca91c"
  },
  {
    "url": "build/app\\n7znxsls.css",
    "revision": "81e6c3bc53b71059762c72404f8615e3"
  },
  {
    "url": "build/app\\nalozgy4.css",
    "revision": "49cee9358cf2786061451b8a3ce4f2f5"
  },
  {
    "url": "build/app\\nlwme4l0.css",
    "revision": "e81e0e7e908a89bd635d28883fa79731"
  },
  {
    "url": "build/app\\nqskxaua.css",
    "revision": "adc3ea24b9523fa69ac1cf9462bcc08b"
  },
  {
    "url": "build/app\\nxhvb9ps.css",
    "revision": "416813683aa1f18bf4873c0139223890"
  },
  {
    "url": "build/app\\o5rsifou.css",
    "revision": "e13dcc95bc51c54c6fee4023ee8e0f8b"
  },
  {
    "url": "build/app\\omguy6ft.css",
    "revision": "c4b81b7393a919c9c0c39782a4473cda"
  },
  {
    "url": "build/app\\oqytulaz.css",
    "revision": "ed82bddf786962248fd64197b2798a31"
  },
  {
    "url": "build/app\\ovc1rjpb.css",
    "revision": "6dd2be65d0fc4f0d47a37b7659d8e234"
  },
  {
    "url": "build/app\\pbdepqdg.js",
    "revision": "de961ba0725433a368f1133f30481a70"
  },
  {
    "url": "build/app\\pnjcxhfy.css",
    "revision": "6fc33f783becda65e1b953fb9a7d31e6"
  },
  {
    "url": "build/app\\pvidp8er.js",
    "revision": "010b59dc81ec68507c24dfbe656e909f"
  },
  {
    "url": "build/app\\qe3rrrti.css",
    "revision": "efc104dd7d14678275354deeac566f45"
  },
  {
    "url": "build/app\\qnsivgok.css",
    "revision": "501c074a4789ee5bbf729e149bb32739"
  },
  {
    "url": "build/app\\r97ij9mc.js",
    "revision": "1727230c36f7d6b8ad8fb08db731eff3"
  },
  {
    "url": "build/app\\rfx4aywc.css",
    "revision": "d98a23f89c750379c2808f2bf529f798"
  },
  {
    "url": "build/app\\rg5tnl0f.js",
    "revision": "d4ad1e330633fdfcb417dd599dcbdd7e"
  },
  {
    "url": "build/app\\rivvbutl.css",
    "revision": "3dafc4b7fe5c3ea8e5f98a6d8ccdbbc8"
  },
  {
    "url": "build/app\\syibojkb.css",
    "revision": "b8a171543248f377c2d261531a78a0e2"
  },
  {
    "url": "build/app\\t9njj0nf.css",
    "revision": "061849c83b49ea938f951f7895af3708"
  },
  {
    "url": "build/app\\uwyzpx1k.js",
    "revision": "3afc8ff8aceb3b55f6f2cd678f08d862"
  },
  {
    "url": "build/app\\vendor\\swiper.js",
    "revision": "f44ae3024a4323c4f98e7b69cefeee47"
  },
  {
    "url": "build/app\\vqfgf223.css",
    "revision": "159ebc21dff2aa43760399dd4f884902"
  },
  {
    "url": "build/app\\wtlmj6of.js",
    "revision": "0e68379a350003e220ce55acb843db78"
  },
  {
    "url": "build/app\\xaqbuxay.css",
    "revision": "8b2d7c9c5a074ec030d9b1c0575364f1"
  },
  {
    "url": "build/app\\xqz0cupv.js",
    "revision": "ddbd9e34b3efe6e776fb525bb05ac585"
  },
  {
    "url": "build/app\\ycn2olea.css",
    "revision": "5cf6edd4c2c12cf79c582c56ad74f8eb"
  },
  {
    "url": "build/app\\yngvd9lx.css",
    "revision": "94ce76831566a642516739a5b6f305d0"
  },
  {
    "url": "build/app\\yvum2wrs.css",
    "revision": "0d31b45a9b280665d7836ead146fec51"
  },
  {
    "url": "build/app\\yyxa5hxr.js",
    "revision": "c455cf6cc2d8c826c99e31d7c8890809"
  },
  {
    "url": "data.json",
    "revision": "c8d2fae93b4d45c7d9b973551844007f"
  },
  {
    "url": "favicon.ico",
    "revision": "7aa40cf9dba1fd293fc8bd890106acce"
  },
  {
    "url": "images/512.png",
    "revision": "5f7d93d6d50310d40bbe6777fb8c66cc"
  },
  {
    "url": "index.html",
    "revision": "3c78919e00e2c4e88f0b30fad0bdf634"
  },
  {
    "url": "manifest.json",
    "revision": "c1803b8cef334bcdbdb98cf5aed9453c"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true
});
workboxSW.precache(fileManifest);
