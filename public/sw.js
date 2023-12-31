<<<<<<< HEAD
/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-e639beba'], (function (workbox) { 'use strict';

  importScripts();
  self.skipWaiting();
  workbox.clientsClaim();
  workbox.registerRoute("/", new workbox.NetworkFirst({
    "cacheName": "start-url",
    plugins: [{
      cacheWillUpdate: async ({
        request,
        response,
        event,
        state
      }) => {
        if (response && response.type === 'opaqueredirect') {
          return new Response(response.body, {
            status: 200,
            statusText: 'OK',
            headers: response.headers
          });
        }
        return response;
      }
    }]
  }), 'GET');
  workbox.registerRoute(/.*/i, new workbox.NetworkOnly({
    "cacheName": "dev",
    plugins: []
  }), 'GET');

}));
//# sourceMappingURL=sw.js.map
=======
if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),f={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>f[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-fb87826f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"dfaef75eda9377d00ac7e68ab846170f"},{url:"/_next/static/-Ws9dfwuYDs8aFTcXsQm6/_buildManifest.js",revision:"a1b7599199e2e8c82f2c6bcf8d8aca61"},{url:"/_next/static/-Ws9dfwuYDs8aFTcXsQm6/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/250-11a2da6e4c189e0c.js",revision:"-Ws9dfwuYDs8aFTcXsQm6"},{url:"/_next/static/chunks/749-766def5b37d39acb.js",revision:"-Ws9dfwuYDs8aFTcXsQm6"},{url:"/_next/static/chunks/873-e42b74ac142a7f7e.js",revision:"-Ws9dfwuYDs8aFTcXsQm6"},{url:"/_next/static/chunks/938-aa57c6abc04f3b5d.js",revision:"-Ws9dfwuYDs8aFTcXsQm6"},{url:"/_next/static/chunks/93854f56-faccb546955e4c0e.js",revision:"-Ws9dfwuYDs8aFTcXsQm6"},{url:"/_next/static/chunks/app/Layanan/page-4aad6c0b73a0288c.js",revision:"-Ws9dfwuYDs8aFTcXsQm6"},{url:"/_next/static/chunks/app/SetorSampah/page-70f74250681a9c99.js",revision:"-Ws9dfwuYDs8aFTcXsQm6"},{url:"/_next/static/chunks/app/TentangKami/page-dd603df97fb65784.js",revision:"-Ws9dfwuYDs8aFTcXsQm6"},{url:"/_next/static/chunks/app/_not-found-42c8099489ef4b09.js",revision:"-Ws9dfwuYDs8aFTcXsQm6"},{url:"/_next/static/chunks/app/dashboard/datalist/page-67bf55c3c5cba277.js",revision:"-Ws9dfwuYDs8aFTcXsQm6"},{url:"/_next/static/chunks/app/dashboard/page-4a45fa16f1e3f8d1.js",revision:"-Ws9dfwuYDs8aFTcXsQm6"},{url:"/_next/static/chunks/app/dashboard/userlist/page-f427709423cc542e.js",revision:"-Ws9dfwuYDs8aFTcXsQm6"},{url:"/_next/static/chunks/app/layout-8ea9fea7c9ecedde.js",revision:"-Ws9dfwuYDs8aFTcXsQm6"},{url:"/_next/static/chunks/app/login/page-ad6165d97bffc114.js",revision:"-Ws9dfwuYDs8aFTcXsQm6"},{url:"/_next/static/chunks/app/page-7edc9a14222bf155.js",revision:"-Ws9dfwuYDs8aFTcXsQm6"},{url:"/_next/static/chunks/app/receipt/%5Bid%5D/page-92bf1b1ac8251e25.js",revision:"-Ws9dfwuYDs8aFTcXsQm6"},{url:"/_next/static/chunks/app/register/page-6668030860348f66.js",revision:"-Ws9dfwuYDs8aFTcXsQm6"},{url:"/_next/static/chunks/fd9d1056-e22bf0dadd3b7f72.js",revision:"-Ws9dfwuYDs8aFTcXsQm6"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"-Ws9dfwuYDs8aFTcXsQm6"},{url:"/_next/static/chunks/main-92ef368adda7b26e.js",revision:"-Ws9dfwuYDs8aFTcXsQm6"},{url:"/_next/static/chunks/main-app-e31106656fcc312a.js",revision:"-Ws9dfwuYDs8aFTcXsQm6"},{url:"/_next/static/chunks/pages/_app-98cb51ec6f9f135f.js",revision:"-Ws9dfwuYDs8aFTcXsQm6"},{url:"/_next/static/chunks/pages/_error-e87e5963ec1b8011.js",revision:"-Ws9dfwuYDs8aFTcXsQm6"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-6c15d98aae7b7c1c.js",revision:"-Ws9dfwuYDs8aFTcXsQm6"},{url:"/_next/static/css/da04fef6930424e6.css",revision:"da04fef6930424e6"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/icon-192x192.png",revision:"7911a028a5b0f602bc96e94b0d50c69d"},{url:"/icon-256x256.png",revision:"787b5d082d30accd6926edc087c3d16d"},{url:"/icon-384x384.png",revision:"d88553928ac20909e15c0044b0e730e5"},{url:"/icon-512x512.png",revision:"c7d8f81dbac55d9511e4225cb43c8c82"},{url:"/img/Ariq.png",revision:"572572e4eaacae82c38a42ec3c64a28d"},{url:"/img/Atta.png",revision:"c12e3c894f27db3339323ef9b401f799"},{url:"/img/Badri.png",revision:"5f77ac521d9b3047acbd20d7d2c10961"},{url:"/img/Bagus.png",revision:"c2982f6fa0a3cc913127a425561f3870"},{url:"/img/Character.png",revision:"86fd2155c0396857d3d763b3d7ec0e3d"},{url:"/img/Fahmi.png",revision:"412c4c87232fb51d86573df4b1b3b5cd"},{url:"/img/GitHub-Logo.png",revision:"7ea67df8f3ea706fdc9b493725fa0835"},{url:"/img/anorganik.png",revision:"a78e397eb59a49b3e96b6db76bd3ed3f"},{url:"/img/batre.png",revision:"9f5a692befbaafd29316b7343840d08f"},{url:"/img/beranda.png",revision:"20ef5fd9b918b17c6bf04f580446e9b1"},{url:"/img/bg-layanan.png",revision:"6072bea104a58e1f00f3ffe98c4e11d8"},{url:"/img/hero-1.png",revision:"73a39817687aa2fe480ea09ab06822c6"},{url:"/img/kaca.png",revision:"e1d4e06b230f66bebc9a2759393190d8"},{url:"/img/kaleng-1.png",revision:"7c9d9849bc372786c0875a588f716f44"},{url:"/img/kardus.png",revision:"4e3380c0f828244599148f452d1c9788"},{url:"/img/kertas-1.png",revision:"67f296d90d09b29bc95f6c465a13d835"},{url:"/img/kertas.jpg",revision:"713c83488393cbfb4d09245ffc240174"},{url:"/img/kontribusi.png",revision:"c39ff818cf741d43c5bfc3958115bf90"},{url:"/img/layanan.png",revision:"14b69975df212b46dc4e55344bf7e930"},{url:"/img/login.png",revision:"a654e20acced102c1bbffed58f8d87cb"},{url:"/img/logo-amuts.png",revision:"43539b42b38986ca15826a24b04a58a9"},{url:"/img/organik.png",revision:"9f37e4666942737a1a4da583d730690e"},{url:"/img/plastik.png",revision:"1685925877e7beba2f86674a5168821c"},{url:"/img/setor-bg.jpg",revision:"77b7b3bf95254db8141d167f085e7259"},{url:"/img/setor.png",revision:"ac2aca3ba00bae079fac5fb96690f6f0"},{url:"/img/tentang.png",revision:"5abd42f8965c3d02740c9f4acff7f6a2"},{url:"/manifest.json",revision:"47583de56b895f517d29239428f29edc"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
>>>>>>> 4e3ced699535469bfbe525595e0c77aedcea82c2
