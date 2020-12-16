/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["F:/桌面/hexo-blog/public/about/index.html","43ab13ab320b06f9524ff66b9dc3829b"],["F:/桌面/hexo-blog/public/archives/2020/02/index.html","e02fbd22fa60dd31e2bb264251c0314c"],["F:/桌面/hexo-blog/public/archives/2020/04/index.html","68d07b5fa5da9c728333784c0ebddfde"],["F:/桌面/hexo-blog/public/archives/2020/07/index.html","914cd625e970e8e72ff96c1e182178a3"],["F:/桌面/hexo-blog/public/archives/2020/08/index.html","cc440ea4ca277c39143e85891791f094"],["F:/桌面/hexo-blog/public/archives/2020/11/index.html","5e242dd18c9c4c0a5d940ad8105ea476"],["F:/桌面/hexo-blog/public/archives/2020/12/index.html","14cd0745648306130c8fd341a6c73c1b"],["F:/桌面/hexo-blog/public/archives/2020/index.html","d174b46f7721feb27f4483e4f363fb2e"],["F:/桌面/hexo-blog/public/archives/2020/page/2/index.html","39b23bc9bcca5386d245eeb532b5452c"],["F:/桌面/hexo-blog/public/archives/index.html","2e829143710429c7942f0422107db8c3"],["F:/桌面/hexo-blog/public/archives/page/2/index.html","84db1eb7a318f0fd0ca80a555ca33783"],["F:/桌面/hexo-blog/public/article/Opened/index.html","f85eae269040739f92914035c567a512"],["F:/桌面/hexo-blog/public/article/RaspberryPi/index.html","4a59839f61deb3dc1a55dff548f5c7f1"],["F:/桌面/hexo-blog/public/article/addiction/index.html","71533581e1369157122f91462f61c50d"],["F:/桌面/hexo-blog/public/article/clouddrive/index.html","3466dc790fd1490b45aefc0e4b80fdb1"],["F:/桌面/hexo-blog/public/article/ds-tree/index.html","d716c8f42096ffb7cb245217dc01ef2f"],["F:/桌面/hexo-blog/public/article/games/index.html","bc45fa2f5a25e3ceacbe6ae1d9c353fa"],["F:/桌面/hexo-blog/public/article/hello-world/index.html","9f130a7e754c285ce36b44c8ba23b144"],["F:/桌面/hexo-blog/public/article/java-priview/index.html","faa373f1ffe0ff0369da635352392ab3"],["F:/桌面/hexo-blog/public/article/lights/index.html","f34f0698132d0bb53bd78658baaa1c31"],["F:/桌面/hexo-blog/public/article/makemoney/index.html","22be01d4d62ace27e59edb5debf24a75"],["F:/桌面/hexo-blog/public/article/math/index.html","e3deb391e49b41142eca3ace9fbe5ab2"],["F:/桌面/hexo-blog/public/article/newgame/index.html","f64ae1c989860c7e32e073622562374c"],["F:/桌面/hexo-blog/public/article/tcp/index.html","90fc9fd8bc794286b619281d17f03894"],["F:/桌面/hexo-blog/public/article/thesedays/index.html","57a96b98589302dcfd53ce3433222f12"],["F:/桌面/hexo-blog/public/article/travle/index.html","93ffef9701c1f5d3503126e385920bf8"],["F:/桌面/hexo-blog/public/article/update/index.html","873328ce4828d9841bb85dc426f7af92"],["F:/桌面/hexo-blog/public/baidu_verify_1x7q2QHhEA.html","ced76109ae31debcd8b768fd0ba7fcf0"],["F:/桌面/hexo-blog/public/css/404.css","1c4814ea87fd2db98e22e1fa3153f450"],["F:/桌面/hexo-blog/public/css/index.css","79b3b5769fb339c82767d6398d9e85a2"],["F:/桌面/hexo-blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/桌面/hexo-blog/public/friends/index.html","341cdf26e5bbe2500cc6aa0a05074654"],["F:/桌面/hexo-blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["F:/桌面/hexo-blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["F:/桌面/hexo-blog/public/index.html","933c72ac4c14882995ec85c9d304a3dc"],["F:/桌面/hexo-blog/public/js/copy.js","0733a43ce4c48b74aa54b2d278f5d9f2"],["F:/桌面/hexo-blog/public/js/fancybox.js","8f5da9a7edc492f0304fd75e1df0de7e"],["F:/桌面/hexo-blog/public/js/fireworks.js","5a3be45d15dde8a768a77c7e154867f4"],["F:/桌面/hexo-blog/public/js/head.js","06613576794e3a840644f93aec7e255c"],["F:/桌面/hexo-blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["F:/桌面/hexo-blog/public/js/katex.js","c95d667e48feb312effb29d792aa1bf1"],["F:/桌面/hexo-blog/public/js/scroll.js","8c1a6ba88cfd2a27401dff9a3b8d7194"],["F:/桌面/hexo-blog/public/js/search/algolia.js","9d3a2476173ded75fd9583d2fb8de60c"],["F:/桌面/hexo-blog/public/js/search/local-search.js","2391db42817efa5b9f6cfb7fa703ae19"],["F:/桌面/hexo-blog/public/js/sidebar.js","9a909b8f22c192ae6118bafa1ed29e5c"],["F:/桌面/hexo-blog/public/js/third-party/anime.min.js","f258ee6f938947e043c7e0984cd7e2b2"],["F:/桌面/hexo-blog/public/js/third-party/canvas-ribbon.js","c67de29e0b0b72b8c649cbaab4f505e3"],["F:/桌面/hexo-blog/public/js/third-party/jquery.fancybox.min.js","f72c4665d138b80c7b15caedd51c6a2b"],["F:/桌面/hexo-blog/public/js/third-party/jquery.min.js","473957cfb255a781b42cb2af51d54a3b"],["F:/桌面/hexo-blog/public/js/third-party/reveal/head.min.js","f0ca67ae6f81278adea64b8fff513c34"],["F:/桌面/hexo-blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["F:/桌面/hexo-blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["F:/桌面/hexo-blog/public/js/third-party/reveal/marked.min.js","ed230503435d0ce148056d911361d911"],["F:/桌面/hexo-blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["F:/桌面/hexo-blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["F:/桌面/hexo-blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["F:/桌面/hexo-blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["F:/桌面/hexo-blog/public/js/third-party/velocity.min.js","1581449f04ded4a6c658352189ab2862"],["F:/桌面/hexo-blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["F:/桌面/hexo-blog/public/js/transition.js","81a68376c9f817778d39da581bed19d3"],["F:/桌面/hexo-blog/public/js/utils.js","946deebb9969951e319a5cf0e477a337"],["F:/桌面/hexo-blog/public/live2dw/assets/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["F:/桌面/hexo-blog/public/live2dw/lib/L2Dwidget.0.min.js","6b6cce584ed3bfaba5c884d9bdbdb780"],["F:/桌面/hexo-blog/public/live2dw/lib/L2Dwidget.min.js","18519be234b6865cbf10a681ea7b459d"],["F:/桌面/hexo-blog/public/message/index.html","8be74cb2bbca639c9acd50a34a9091f8"],["F:/桌面/hexo-blog/public/page/2/index.html","7b894db8a550aa1b403517d49f7ace50"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







