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

var precacheConfig = [["F:/桌面/hexo-blog/public/about/index.html","b9cc0bd202e03af0c0f15ea62d59cd20"],["F:/桌面/hexo-blog/public/archives/2020/02/index.html","56430c1acb956aa3d6130b708e1f751b"],["F:/桌面/hexo-blog/public/archives/2020/04/index.html","ad0780263649bb4e70429ac649259797"],["F:/桌面/hexo-blog/public/archives/2020/07/index.html","8b5cbfb1bc46f25a446de18fd8b299ee"],["F:/桌面/hexo-blog/public/archives/2020/08/index.html","1f9cb4032d08a986b79c29c16198a41d"],["F:/桌面/hexo-blog/public/archives/2020/09/index.html","76bba060090647084dd77cc89d2aef15"],["F:/桌面/hexo-blog/public/archives/2020/index.html","335bcc57bf87396d18c9528a8fef39b2"],["F:/桌面/hexo-blog/public/archives/2020/page/2/index.html","9f3ea126caa949018193896e81d046e0"],["F:/桌面/hexo-blog/public/archives/index.html","e9f57f017e0829a39c678aa8a9791809"],["F:/桌面/hexo-blog/public/archives/page/2/index.html","ad64e81b16059258e808acb946862814"],["F:/桌面/hexo-blog/public/article/Opened/index.html","695f8601cf5084473d4a4b2b1bd0caef"],["F:/桌面/hexo-blog/public/article/RaspberryPi/index.html","cd38917ec05207416d840f0b6d56a05e"],["F:/桌面/hexo-blog/public/article/clouddrive/index.html","576d8e9fb7e9a27ec991cc375c6bae31"],["F:/桌面/hexo-blog/public/article/complexity_1/index.html","ab494a324e7e87c82e771bc369e9dc29"],["F:/桌面/hexo-blog/public/article/complexity_2/index.html","9dd1cf13e3c21dfae25d883dff59c007"],["F:/桌面/hexo-blog/public/article/firstyear/index.html","1d33a1cc0544053e973415365ec9b7f5"],["F:/桌面/hexo-blog/public/article/games/index.html","1f613b4687c334e8d6345f0f6940f81b"],["F:/桌面/hexo-blog/public/article/hello-world/index.html","6b8b65443ab4519c24769d26109d2acd"],["F:/桌面/hexo-blog/public/article/lights/index.html","b1d7c6ee237d55d9570433db869d506d"],["F:/桌面/hexo-blog/public/article/makemoney/index.html","e8fd75236cf866af5ce73b7f9b4e1b1b"],["F:/桌面/hexo-blog/public/article/math/index.html","8be6a6cb9222beb79084aa2ab92926d3"],["F:/桌面/hexo-blog/public/article/tcp/index.html","d75710c9f5712d88534b070d17a43794"],["F:/桌面/hexo-blog/public/article/thesedays/index.html","48e57ddbae18424a3942b274682fb687"],["F:/桌面/hexo-blog/public/article/travle/index.html","869ccef9fc786b420d1e3e5590e339b7"],["F:/桌面/hexo-blog/public/article/update/index.html","691b3744f54f5551e9c4dfc56f20e2be"],["F:/桌面/hexo-blog/public/baidu_verify_1x7q2QHhEA.html","ced76109ae31debcd8b768fd0ba7fcf0"],["F:/桌面/hexo-blog/public/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["F:/桌面/hexo-blog/public/css/index.css","9de14de7cf8bdeceadf74d9fcbb1e647"],["F:/桌面/hexo-blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/桌面/hexo-blog/public/friends/index.html","0b63f507076f27b866ec8f4cf9a6e9bf"],["F:/桌面/hexo-blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["F:/桌面/hexo-blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["F:/桌面/hexo-blog/public/index.html","f387224bf56f5434788333faadaa4544"],["F:/桌面/hexo-blog/public/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["F:/桌面/hexo-blog/public/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["F:/桌面/hexo-blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["F:/桌面/hexo-blog/public/js/head.js","347edd99f8e3921b45fa617e839d8182"],["F:/桌面/hexo-blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["F:/桌面/hexo-blog/public/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["F:/桌面/hexo-blog/public/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["F:/桌面/hexo-blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["F:/桌面/hexo-blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["F:/桌面/hexo-blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["F:/桌面/hexo-blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["F:/桌面/hexo-blog/public/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["F:/桌面/hexo-blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["F:/桌面/hexo-blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["F:/桌面/hexo-blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["F:/桌面/hexo-blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["F:/桌面/hexo-blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["F:/桌面/hexo-blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["F:/桌面/hexo-blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["F:/桌面/hexo-blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["F:/桌面/hexo-blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["F:/桌面/hexo-blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["F:/桌面/hexo-blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["F:/桌面/hexo-blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["F:/桌面/hexo-blog/public/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["F:/桌面/hexo-blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["F:/桌面/hexo-blog/public/live2dw/assets/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["F:/桌面/hexo-blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["F:/桌面/hexo-blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["F:/桌面/hexo-blog/public/message/index.html","4982933fbb0f591a352c92ab237b5c17"],["F:/桌面/hexo-blog/public/page/2/index.html","5503b31540d6d4d97010dd220e5a3a73"]];
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







