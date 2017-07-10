# Ionic-Stencil HN app

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all. In many cases, Stencil can be used as a drop in replacement for traditional frontend frameworks given the capabilities now available in the browser, though using it as such is certainly not required.

Stencil also enables a number of key capabilities on top of Web Components, in particular Server Side Rendering (SSR) without the need to run a headless browser, pre-rendering, and objects-as-properties (instead of just strings).

This PWA is a Hacker News demo PWA built with Stencil and our Ionic core components that are also built with Stencil.

## Performance
We use WebPageTest to keep track of the loading performance of this demo on real, low end devices and an emerging markets 3G network. [Here](https://www.webpagetest.org/lighthouse.php?test=170623_YE_1C1R&run=2) is the latest lighthouse from our latest WebPageTest. This is with a Moto G with an emerging markets 3G network.

## Getting Started

To start devving on this project, clone this repo and run:

```bash
npm start
```

To view the build, start an HTTP server inside of the `/www` directory.

To watch for file changes during develop, run:

```bash
npm run dev
```

To build the app for production, run:

```bash
npm run build
```

