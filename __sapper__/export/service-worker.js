!function(){"use strict";const e=["client/index.8e266833.js","client/about.d8f33ad3.js","client/index.9b5d9ae3.js","client/client.a301b3cf.js"].concat(["service-worker-index.html",".DS_Store","favicon.png","fonts/KeplerStd-BlackExtCapt.woff","fonts/KeplerStd-BlackExtCapt.woff2","global.css","images/.DS_Store","images/values/.DS_Store","images/values/accountability-1.svg","images/values/accountability-2.svg","images/values/agenda-1.svg","images/values/agenda-2.svg","images/values/analysis-1.svg","images/values/previews/accountability.png","images/values/previews/agenda.png","images/values/previews/analysis.png","images/values/previews/safari-toolbar-3.png","images/values/previews/safari-toolbar.png","logo-192.png","logo-512.png","manifest.json"]),a=new Set(e);self.addEventListener("install",a=>{a.waitUntil(caches.open("cache1573419451800").then(a=>a.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const a of e)"cache1573419451800"!==a&&await caches.delete(a);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&a.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1573419451800").then(async a=>{try{const s=await fetch(e.request);return a.put(e.request,s.clone()),s}catch(s){const t=await a.match(e.request);if(t)return t;throw s}}))))})}();
