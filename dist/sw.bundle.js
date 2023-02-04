/*! For license information please see sw.bundle.js.LICENSE.txt */
(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.3"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}(()=>{r(913);const e=(e,...t)=>{let r=e;return t.length>0&&(r+=` :: ${JSON.stringify(t)}`),r};class t extends Error{constructor(t,r){super(e(t,r)),this.name=t,this.details=r}}const n={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},s=e=>[n.prefix,e,n.suffix].filter((e=>e&&e.length>0)).join("-"),a=e=>e||s(n.precache),i=e=>e||s(n.runtime);function o(e,t){const r=t();return e.waitUntil(r),r}r(977);function c(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:r,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!r){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const s=new URL(n,location.href),a=new URL(n,location.href);return s.searchParams.set("__WB_REVISION__",r),{cacheKey:s.href,url:a.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:r})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;r?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return r}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const r=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return r?new Request(r,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,r){let n=null;if(e.url){n=new URL(e.url).origin}if(n!==self.location.origin)throw new t("cross-origin-copy-response",{origin:n});const s=e.clone(),a={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},i=r?r(a):a,o=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?s.body:await s.blob();return new Response(o,i)}function d(e,t){const r=new URL(e);for(const e of t)r.searchParams.delete(e);return r.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const y=new Set;r(873);function g(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:r}=this;let n=g(e);if("navigate"===n.mode&&r instanceof FetchEvent&&r.preloadResponse){const e=await r.preloadResponse;if(e)return e}const s=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:r})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const a=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:r,request:a,response:e});return e}catch(e){throw s&&await this.runCallbacks("fetchDidFail",{error:e,event:r,originalRequest:s.clone(),request:a.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),r=t.clone();return this.waitUntil(this.cachePut(e,r)),t}async cacheMatch(e){const t=g(e);let r;const{cacheName:n,matchOptions:s}=this._strategy,a=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},s),{cacheName:n});r=await caches.match(a,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))r=await e({cacheName:n,matchOptions:s,cachedResponse:r,request:a,event:this.event})||void 0;return r}async cachePut(e,r){const n=g(e);var s;await(s=0,new Promise((e=>setTimeout(e,s))));const a=await this.getCacheKey(n,"write");if(!r)throw new t("cache-put-with-no-response",{url:(i=a.url,new URL(String(i),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var i;const o=await this._ensureResponseSafeToCache(r);if(!o)return!1;const{cacheName:c,matchOptions:h}=this._strategy,l=await self.caches.open(c),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,r,n){const s=d(t.url,r);if(t.url===s)return e.match(t,n);const a=Object.assign(Object.assign({},n),{ignoreSearch:!0}),i=await e.keys(t,a);for(const t of i)if(s===d(t.url,r))return e.match(t,n)}(l,a.clone(),["__WB_REVISION__"],h):null;try{await l.put(a,u?o.clone():o)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of y)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:c,oldResponse:f,newResponse:o.clone(),request:a,event:this.event});return!0}async getCacheKey(e,t){const r=`${e.url} | ${t}`;if(!this._cacheKeys[r]){let n=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))n=g(await e({mode:t,request:n,event:this.event,params:this.params}));this._cacheKeys[r]=n}return this._cacheKeys[r]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const r of this.iterateCallbacks(e))await r(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const r=this._pluginStateMap.get(t),n=n=>{const s=Object.assign(Object.assign({},n),{state:r});return t[e](s)};yield n}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,r=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,r=!0,!t)break;return r||t&&200!==t.status&&(t=void 0),t}}class v{constructor(e={}){this.cacheName=i(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,r="string"==typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,s=new w(this,{event:t,request:r,params:n}),a=this._getResponse(s,r,t);return[a,this._awaitComplete(a,s,r,t)]}async _getResponse(e,r,n){let s;await e.runCallbacks("handlerWillStart",{event:n,request:r});try{if(s=await this._handle(r,e),!s||"error"===s.type)throw new t("no-response",{url:r.url})}catch(t){if(t instanceof Error)for(const a of e.iterateCallbacks("handlerDidError"))if(s=await a({error:t,event:n,request:r}),s)break;if(!s)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))s=await t({event:n,request:r,response:s});return s}async _awaitComplete(e,t,r,n){let s,a;try{s=await e}catch(a){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:r,response:s}),await t.doneWaiting()}catch(e){e instanceof Error&&(a=e)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:r,response:s,error:a}),t.destroy(),a)throw a}}class m extends v{constructor(e={}){e.cacheName=a(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(m.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const r=await t.cacheMatch(e);return r||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,r){let n;const s=r.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=s.integrity,a=e.integrity,i=!a||a===t;if(n=await r.fetch(new Request(e,{integrity:"no-cors"!==e.mode?a||t:void 0})),t&&i&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await r.cachePut(e,n.clone());0}}return n}async _handleInstall(e,r){this._useDefaultCacheabilityPluginIfNeeded();const n=await r.fetch(e);if(!await r.cachePut(e,n.clone()))throw new t("bad-precaching-response",{url:e.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[r,n]of this.plugins.entries())n!==m.copyRedirectedCacheableResponsesPlugin&&(n===m.defaultPrecacheCacheabilityPlugin&&(e=r),n.cacheWillUpdate&&t++);0===t?this.plugins.push(m.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}m.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},m.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class _{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:r=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new m({cacheName:a(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:r}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const r=[];for(const n of e){"string"==typeof n?r.push(n):n&&void 0===n.revision&&r.push(n.url);const{cacheKey:e,url:s}=c(n),a="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(s)&&this._urlsToCacheKeys.get(s)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(s),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:s});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(s,e),this._urlsToCacheModes.set(s,a),r.length>0){const e=`Workbox is precaching URLs without revision info: ${r.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return o(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,r]of this._urlsToCacheKeys){const n=this._cacheKeysToIntegrities.get(r),s=this._urlsToCacheModes.get(t),a=new Request(t,{integrity:n,cache:s,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:r},request:a,event:e}))}const{updatedURLs:r,notUpdatedURLs:n}=t;return{updatedURLs:r,notUpdatedURLs:n}}))}activate(e){return o(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),r=new Set(this._urlsToCacheKeys.values()),n=[];for(const s of t)r.has(s.url)||(await e.delete(s),n.push(s.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,r=this.getCacheKeyForURL(t);if(r){return(await self.caches.open(this.strategy.cacheName)).match(r)}}createHandlerBoundToURL(e){const r=this.getCacheKeyForURL(e);if(!r)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:r},t.params),this.strategy.handle(t))}}let b;const R=()=>(b||(b=new _),b);r(80);const L=e=>e&&"object"==typeof e?e:{handle:e};class C{constructor(e,t,r="GET"){this.handler=L(t),this.match=e,this.method=r}setCatchHandler(e){this.catchHandler=L(e)}}class x extends C{constructor(e,t,r){super((({url:t})=>{const r=e.exec(t.href);if(r&&(t.origin===location.origin||0===r.index))return r.slice(1)}),t,r)}}class U{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,r=this.handleRequest({request:t,event:e});r&&e.respondWith(r)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data;0;const r=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const r=new Request(...t);return this.handleRequest({request:r,event:e})})));e.waitUntil(r),e.ports&&e.ports[0]&&r.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const r=new URL(e.url,location.href);if(!r.protocol.startsWith("http"))return void 0;const n=r.origin===location.origin,{params:s,route:a}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:r});let i=a&&a.handler;const o=e.method;if(!i&&this._defaultHandlerMap.has(o)&&(i=this._defaultHandlerMap.get(o)),!i)return void 0;let c;try{c=i.handle({url:r,request:e,event:t,params:s})}catch(e){c=Promise.reject(e)}const h=a&&a.catchHandler;return c instanceof Promise&&(this._catchHandler||h)&&(c=c.catch((async n=>{if(h){0;try{return await h.handle({url:r,request:e,event:t,params:s})}catch(e){e instanceof Error&&(n=e)}}if(this._catchHandler)return this._catchHandler.handle({url:r,request:e,event:t});throw n}))),c}findMatchingRoute({url:e,sameOrigin:t,request:r,event:n}){const s=this._routes.get(r.method)||[];for(const a of s){let s;const i=a.match({url:e,sameOrigin:t,request:r,event:n});if(i)return s=i,(Array.isArray(s)&&0===s.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(s=void 0),{route:a,params:s}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,L(e))}setCatchHandler(e){this._catchHandler=L(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const r=this._routes.get(e.method).indexOf(e);if(!(r>-1))throw new t("unregister-route-route-not-registered");this._routes.get(e.method).splice(r,1)}}let k;class q extends C{constructor(e,t){super((({request:r})=>{const n=e.getURLsToCacheKeys();for(const s of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:r="index.html",cleanURLs:n=!0,urlManipulation:s}={}){const a=new URL(e,location.href);a.hash="",yield a.href;const i=function(e,t=[]){for(const r of[...e.searchParams.keys()])t.some((e=>e.test(r)))&&e.searchParams.delete(r);return e}(a,t);if(yield i.href,r&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=r,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(s){const e=s({url:a});for(const t of e)yield t.href}}(r.url,t)){const t=n.get(s);if(t){return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}}),e.strategy)}}function E(e){const r=R();!function(e,r,n){let s;if("string"==typeof e){const t=new URL(e,location.href);s=new C((({url:e})=>e.href===t.href),r,n)}else if(e instanceof RegExp)s=new x(e,r,n);else if("function"==typeof e)s=new C(e,r,n);else{if(!(e instanceof C))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});s=e}(k||(k=new U,k.addFetchListener(),k.addCacheListener()),k).registerRoute(s)}(new q(r,e))}function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function K(){K=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},s="function"==typeof Symbol?Symbol:{},a=s.iterator||"@@iterator",i=s.asyncIterator||"@@asyncIterator",o=s.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function h(e,t,r,s){var a=t&&t.prototype instanceof f?t:f,i=Object.create(a.prototype),o=new x(s||[]);return n(i,"_invoke",{value:b(e,r,o)}),i}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=h;var u={};function f(){}function d(){}function p(){}var y={};c(y,a,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(U([])));w&&w!==t&&r.call(w,a)&&(y=w);var v=p.prototype=f.prototype=Object.create(y);function m(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function s(n,a,i,o){var c=l(e[n],e,a);if("throw"!==c.type){var h=c.arg,u=h.value;return u&&"object"==T(u)&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){s("next",e,i,o)}),(function(e){s("throw",e,i,o)})):t.resolve(u).then((function(e){h.value=e,i(h)}),(function(e){return s("throw",e,i,o)}))}o(c.arg)}var a;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){s(e,r,t,n)}))}return a=a?a.then(n,n):n()}})}function b(e,t,r){var n="suspendedStart";return function(s,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===s)throw a;return k()}for(r.method=s,r.arg=a;;){var i=r.delegate;if(i){var o=R(i,r);if(o){if(o===u)continue;return o}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function R(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,R(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),u;var s=l(n,e.iterator,t.arg);if("throw"===s.type)return t.method="throw",t.arg=s.arg,t.delegate=null,u;var a=s.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function U(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,s=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return s.next=s}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=p,n(v,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:d,configurable:!0}),d.displayName=c(p,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,o,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},m(_.prototype),c(_.prototype,i,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,s,a){void 0===a&&(a=Promise);var i=new _(h(t,r,n,s),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},m(v),c(v,o,"Generator"),c(v,a,(function(){return this})),c(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=U,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var s=this.tryEntries.length-1;s>=0;--s){var a=this.tryEntries[s],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var o=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(o&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(o){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var s=this.tryEntries[n];if(s.tryLoc<=this.prev&&r.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var a=s;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),C(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var s=n.arg;C(r)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:U(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}function P(e,t,r,n,s,a,i){try{var o=e[a](i),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(n,s)}var N;(function(e){R().precache(e)})([{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'./sw.bundle.js.LICENSE.txt'},{'revision':null,'url':'0c662c87b388e69e6bd8.jpg'},{'revision':'f056cb4036aed3b8e4d1c653c5cc41ea','url':'179.bundle.js'},{'revision':'4511182d881ce77bcbd8e4abf428147b','url':'194.bundle.js'},{'revision':'d9199b01fa873c7718b52f0aded9e310','url':'2.bundle.js'},{'revision':'31a99b2e62b449f8f47a617cf74af7d4','url':'app.webmanifest'},{'revision':'5c3718480b3f64fc2817a56f2e77fedf','url':'app~166a29e1.bundle.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'app~166a29e1.bundle.js.LICENSE.txt'},{'revision':'296e08fffbd9e9420e6b4da59f82b79b','url':'app~309f7e27.bundle.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'app~309f7e27.bundle.js.LICENSE.txt'},{'revision':'34c70be662bd5516a66bc63848c90577','url':'app~4e5ec22b.bundle.js'},{'revision':'23b533f5dbb620c4934f4f4b167b5a8c','url':'app~5d3f7ed2.bundle.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'app~5d3f7ed2.bundle.js.LICENSE.txt'},{'revision':'0d8d681bf659cef604ebdbb71a442fc8','url':'app~ca0940c6.bundle.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'app~ca0940c6.bundle.js.LICENSE.txt'},{'revision':'c562993b46248f64110406083c239084','url':'app~e4317507.bundle.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'app~e4317507.bundle.js.LICENSE.txt'},{'revision':'3d7d7aa15b44ef9c864b1b3d9c1c3c67','url':'favicon.png'},{'revision':'34d9d8d646af9f294d968811da10e546','url':'icons/icon-128x128.png'},{'revision':'2dd174daa627ee198c37c9dfe8cdc34d','url':'icons/icon-144x144.png'},{'revision':'42ee3d984a8d535d697ccbb4428e8647','url':'icons/icon-152x152.png'},{'revision':'923e1610b9d68d2445eb28d6e0f54aaa','url':'icons/icon-192x192.png'},{'revision':'7f775b04df567c8d90c9bad2c89e2d81','url':'icons/icon-384x384.png'},{'revision':'f6705cd9d5d52d8483a2bf9b47cb5f60','url':'icons/icon-512x512.png'},{'revision':'1d463ddf39f394788393e31e1f0e9dbc','url':'icons/icon-72x72.png'},{'revision':'7619371082a792ebb06768c13bf094bf','url':'icons/icon-96x96.png'},{'revision':'47703f0a2e2426b8a19dd1cc3d38fc4b','url':'images/bg_hero1.jpg'},{'revision':'e89c3060ebe53c5403f5fc7a9bc96f95','url':'images/bg_hero2.jpg'},{'revision':'b4c1ececa4450237153ca3861fcf1275','url':'index.html'}]),E(N),self.addEventListener("install",(function(){self.skipWaiting()})),self.addEventListener("push",(function(e){var t=e.data.json(),r={title:t.title,options:{body:t.options.body,icon:t.options.icon,image:t.options.image}};e.waitUntil(self.registration.showNotification(r.title,r.options))})),self.addEventListener("notificationclick",(function(e){e.notification.close();var t=function(){var e,t=(e=K().mark((function e(){return K().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,self.clients.openWindow("https://www.dicoding.com/");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,s){var a=e.apply(t,r);function i(e){P(a,n,s,i,o,"next",e)}function o(e){P(a,n,s,i,o,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}();e.waitUntil(t())}))})()})();
//# sourceMappingURL=sw.bundle.js.map