"use strict";function _typeof3(e){return(_typeof3="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof2(e){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(e){return _typeof3(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof3(e)})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(e){return _typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e)})(e)}var precacheConfig=[],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){return"/"===(e=new URL(e)).pathname.slice(-1)&&(e.pathname+=t),e.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,r){return e=new URL(e),r&&e.pathname.match(r)||(e.search+=(e.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),e.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){return(e=new URL(e)).hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],e=e[1],t=new URL(t,self.location),e=createCacheKey(t,hashParamName,e,!1);return[t.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){var n,e;"GET"===t.request.method&&(n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)})))}),function(e){"object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}(function(){return function r(o,i,c){function s(t,e){if(!i[t]){if(!o[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(a)return a(t,!0);throw(n=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",n}n=i[t]={exports:{}},o[t][0].call(n.exports,function(e){return s(o[t][1][e]||e)},n,n.exports,r,o,i,c)}return i[t].exports}for(var a="function"==typeof require&&require,e=0;e<c.length;e++)s(c[e]);return s}({1:[function(e,t,n){function s(e,t){((t=t||{}).debug||c.debug)&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||c.cache.name,caches.open(t)}function r(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var i,c=e("./options"),a=e("./idb-cache-expiration");t.exports={debug:s,fetchAndCache:function(n,r){var t=(r=r||{}).successResponses||c.successResponses;return fetch(n.clone()).then(function(e){return"GET"===n.method&&t.test(e.status)&&o(r).then(function(t){t.put(n,e).then(function(){var e=r.cache||c.cache;(e.maxEntries||e.maxAgeSeconds)&&e.name&&(e=function(e,t,n){var r=e.url,o=n.maxAgeSeconds,i=n.maxEntries,n=n.name,c=Date.now();return s("Updating LRU order for "+r+". Max entries is "+i+", max age is "+o),a.getDb(n).then(function(e){return a.setTimestampForUrl(e,r,c)}).then(function(e){return a.expireEntries(e,i,o,c)}).then(function(e){return s("Successfully updated IDB."),e=e.map(function(e){return t.delete(e)}),Promise.all(e).then(function(){s("Done with cache cleanup.")})}).catch(function(e){s(e)})}.bind(null,n,t,e),i=i?i.then(e):e())})}),e.clone()})},openCache:o,renameCache:function(t,e,n){return s("Renaming cache: ["+t+"] to ["+e+"]",n),caches.delete(e).then(function(){return Promise.all([caches.open(t),caches.open(e)]).then(function(e){var n=e[0],r=e[1];return n.keys().then(function(e){return Promise.all(e.map(function(t){return n.match(t).then(function(e){return r.put(t,e)})}))}).then(function(){return caches.delete(t)})})})},cache:function(t,e){return o(e).then(function(e){return e.add(t)})},uncache:function(t,e){return o(e).then(function(e){return e.delete(t)})},precache:function(e){e instanceof Promise||r(e),c.preCacheItems=c.preCacheItems.concat(e)},validatePrecacheInput:r,isResponseFresh:function(e,t,n){return!(!e||t&&(e=e.headers.get("date"))&&new Date(e).getTime()+1e3*t<n)}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var u="store",f="timestamp",o={};t.exports={getDb:function(e){return e in o||(o[e]=(r=e,new Promise(function(e,t){var n=indexedDB.open("sw-toolbox-"+r,1);n.onupgradeneeded=function(){n.result.createObjectStore(u,{keyPath:"url"}).createIndex(f,f,{unique:!1})},n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}}))),o[e];var r},setTimestampForUrl:function(r,o,i){return new Promise(function(e,t){var n=r.transaction(u,"readwrite");n.objectStore(u).put({url:o,timestamp:i}),n.oncomplete=function(){e(r)},n.onabort=function(){t(n.error)}})},expireEntries:function(e,n,t,r){return c=e,a=r,((s=t)?new Promise(function(e,t){var n=1e3*s,r=[],o=c.transaction(u,"readwrite"),i=o.objectStore(u);i.index(f).openCursor().onsuccess=function(e){var t=e.target.result;t&&a-n>t.value[f]&&(e=t.value.url,r.push(e),i.delete(e),t.continue())},o.oncomplete=function(){e(r)},o.onabort=t}):Promise.resolve([])).then(function(t){return s=e,((a=n)?new Promise(function(e,t){var r=[],n=s.transaction(u,"readwrite"),o=n.objectStore(u),i=o.index(f),c=i.count();i.count().onsuccess=function(){var n=c.result;a<n&&(i.openCursor().onsuccess=function(e){var t=e.target.result;t&&(e=t.value.url,r.push(e),o.delete(e),n-r.length>a&&t.continue())})},n.oncomplete=function(){e(r)},n.onabort=t}):Promise.resolve([])).then(function(e){return t.concat(e)});var s,a});var c,s,a}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var o=e("./helpers"),i=e("./router"),c=e("./options");t.exports={fetchListener:function(e){var t=i.match(e.request);t?e.respondWith(t(e.request)):i.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(i.default(e.request))},activateListener:function(e){o.debug("activate event fired");var t=c.cache.name+"$$$inactive$$$";e.waitUntil(o.renameCache(t,c.cache.name))},installListener:function(e){var t=c.cache.name+"$$$inactive$$$";o.debug("install event fired"),o.debug("creating cache ["+t+"]"),e.waitUntil(o.openCache({cache:{name:t}}).then(function(t){return Promise.all(c.preCacheItems).then(r).then(o.validatePrecacheInput).then(function(e){return o.debug("preCache list: "+(e.join(", ")||"(none)")),t.addAll(e)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href;t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var o=new URL("./",self.location).pathname,i=e("path-to-regexp");(e=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n}).prototype.makeHandler=function(e){var n,r;return this.regexp&&(n=this.regexp.exec(e),r={},this.keys.forEach(function(e,t){r[e.name]=n[t+1]})),function(e){return this.handler(e,r,this.options)}.bind(this)},t.exports=e},{"path-to-regexp":15}],6:[function(e,t,n){function i(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;)new RegExp(r.value[0]).test(t)&&o.push(r.value[1]),r=n.next();return o}function o(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null}var c=e("./route"),s=e("./helpers");["get","post","put","delete","head","any"].forEach(function(r){o.prototype[r]=function(e,t,n){return this.add(r,e,t,n)}}),o.prototype.add=function(e,t,n,r){r=r||{},o=t instanceof RegExp?RegExp:(o=r.origin||self.location.origin)instanceof RegExp?o.source:o.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),e=e.toLowerCase(),r=new c(e,t,n,r),this.routes.has(o)||this.routes.set(o,new Map);var o=this.routes.get(o);o.has(e)||o.set(e,new Map),o=o.get(e),e=r.regexp||r.fullUrlRegExp,o.has(e.source)&&s.debug('"'+t+'" resolves to same regex as existing route.'),o.set(e.source,r)},o.prototype.matchMethod=function(e,t){var n=(r=new URL(t)).origin,r=r.pathname;return this._match(e,i(this.routes,n),r)||this._match(e,[this.routes.get(RegExp)],t)},o.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=(o=t[r])&&o.get(e.toLowerCase());if(o&&0<(o=i(o,n)).length)return o[0].makeHandler(n)}return null},o.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new o},{"./helpers":1,"./route":5}],7:[function(e,t,n){var i=e("../options"),c=e("../helpers");t.exports=function(r,e,o){return o=o||{},c.debug("Strategy: cache first ["+r.url+"]",o),c.openCache(o).then(function(e){return e.match(r).then(function(e){var t=o.cache||i.cache,n=Date.now();return c.isResponseFresh(e,t.maxAgeSeconds,n)?e:c.fetchAndCache(r,o)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var o=e("../options"),i=e("../helpers");t.exports=function(t,e,r){return r=r||{},i.debug("Strategy: cache only ["+t.url+"]",r),i.openCache(r).then(function(e){return e.match(t).then(function(e){var t=r.cache||o.cache,n=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,n))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var u=e("../helpers"),f=e("./cacheOnly");t.exports=function(c,s,a){return u.debug("Strategy: fastest ["+c.url+"]",a),new Promise(function(t,n){function r(e){i.push(e.toString()),o?n(new Error('Both cache and network failed: "'+i.join('", "')+'"')):o=!0}function e(e){e instanceof Response?t(e):r("No result returned")}var o=!1,i=[];u.fetchAndCache(c.clone(),a).then(e,r),f(c,s,a).then(e,r)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var u=e("../options"),f=e("../helpers");t.exports=function(i,e,c){var s=(c=c||{}).successResponses||u.successResponses,a=c.networkTimeoutSeconds||u.networkTimeoutSeconds;return f.debug("Strategy: network first ["+i.url+"]",c),f.openCache(c).then(function(e){var t,n,r=[];a&&(o=new Promise(function(r){t=setTimeout(function(){e.match(i).then(function(e){var t=c.cache||u.cache,n=Date.now(),t=t.maxAgeSeconds;f.isResponseFresh(e,t,n)&&r(e)})},1e3*a)}),r.push(o));var o=f.fetchAndCache(i,c).then(function(e){if(t&&clearTimeout(t),s.test(e.status))return e;throw f.debug("Response was an HTTP error: "+e.statusText,c),n=e,new Error("Bad response")}).catch(function(t){return f.debug("Network or response error, fallback to cache ["+i.url+"]",c),e.match(i).then(function(e){if(e)return e;if(n)return n;throw t})});return r.push(o),Promise.race(r)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),e=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",e.installListener),self.addEventListener("activate",e.activateListener),self.addEventListener("fetch",e.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n=[],r=0,o=0,i="",c=t&&t.delimiter||"/";null!=(h=y.exec(e));){var s,a,u,f,h,p,l=h[0],d=h[1],m=h.index;i+=e.slice(o,m),o=m+l.length,d?i+=d[1]:(f=e[o],s=h[2],a=h[3],u=h[4],p=h[5],m=h[6],l=h[7],i&&(n.push(i),i=""),d=null!=s&&null!=f&&f!==s,f="+"===m||"*"===m,m="?"===m||"*"===m,h=h[2]||c,p=u||p,n.push({name:a||r++,prefix:s||"",delimiter:h,optional:m,repeat:f,partial:d,asterisk:!!l,pattern:p?p.replace(/([=!:$\/()])/g,"\\$1"):l?".*":"[^"+g(h)+"]+?"}))}return o<e.length&&(i+=e.substr(o)),i&&n.push(i),n}function p(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function o(f){for(var h=new Array(f.length),e=0;e<f.length;e++)"object"==_typeof(f[e])&&(h[e]=new RegExp("^(?:"+f[e].pattern+")$"));return function(e,t){for(var n="",r=e||{},o=(t||{}).pretty?p:encodeURIComponent,i=0;i<f.length;i++){var c=f[i];if("string"!=typeof c){var s,a=r[c.name];if(null==a){if(c.optional){c.partial&&(n+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(m(a)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(a)+"`");if(0===a.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var u=0;u<a.length;u++){if(s=o(a[u]),!h[i].test(s))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(s)+"`");n+=(0===u?c.prefix:c.delimiter)+s}}else{if(s=c.asterisk?encodeURI(a).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}):o(a),!h[i].test(s))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+s+'"');n+=c.prefix+s}}else n+=c}return n}}function g(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function l(e,t){return e.keys=t,e}function d(e){return e.sensitive?"":"i"}function c(e,t,n){m(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,o=!1!==n.end,i="",c=0;c<e.length;c++){var s,a,u=e[c];"string"==typeof u?i+=g(u):(s=g(u.prefix),a="(?:"+u.pattern+")",t.push(u),u.repeat&&(a+="(?:"+s+a+")*"),i+=a=u.optional?u.partial?s+"("+a+")?":"(?:"+s+"("+a+"))?":s+"("+a+")")}var f=g(n.delimiter||"/"),h=i.slice(-f.length)===f;return r||(i=(h?i.slice(0,-f.length):i)+"(?:"+f+"(?=$))?"),i+=o?"$":r&&h?"":"(?="+f+"|$)",l(new RegExp("^"+i,d(n)),t)}var m=e("isarray");t.exports=function i(e,t,n){return m(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(e,t)}(e,t):m(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(i(e[o],t,n).source);return l(new RegExp("(?:"+r.join("|")+")",d(n)),t)}(e,t,n):c(r(e,n),t,n)},t.exports.parse=r,t.exports.compile=function(e,t){return o(r(e,t))},t.exports.tokensToFunction=o,t.exports.tokensToRegExp=c;var y=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){var r,o,i,c=Cache.prototype.addAll;(i=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/))&&(r=i[1],o=parseInt(i[2])),c&&(!i||"Firefox"===r&&46<=o||"Chrome"===r&&50<=o)||(Cache.prototype.addAll=function(n){function r(e){this.name="NetworkError",this.code=19,this.message=e}var o=this;return r.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return n=n.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(n.map(function(e){"string"==typeof e&&(e=new Request(e));var t=new URL(e.url).protocol;if("http:"!==t&&"https:"!==t)throw new r("Invalid scheme");return fetch(e.clone())}))}).then(function(e){if(e.some(function(e){return!e.ok}))throw new r("Incorrect response status");return Promise.all(e.map(function(e,t){return o.put(n[t],e)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})},{}]},{},[13])(13)}),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"https://codgi.xin"});