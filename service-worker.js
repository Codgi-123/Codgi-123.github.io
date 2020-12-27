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

var precacheConfig = [["F:/桌面/hexo-blog/public/404.html","bbf79e70cff715d694e0f921c00f0f6a"],["F:/桌面/hexo-blog/public/about/index.html","8e3e4b5732ba36f2bcab81db8cf238cb"],["F:/桌面/hexo-blog/public/archives/2020/02/index.html","e53b5086ab3d3e781bdebed9a42c0161"],["F:/桌面/hexo-blog/public/archives/2020/04/index.html","7552251c768e9bb37bc5d47eb57ee054"],["F:/桌面/hexo-blog/public/archives/2020/07/index.html","f04e8905092c95de8ce76adcc2e574c7"],["F:/桌面/hexo-blog/public/archives/2020/08/index.html","59e7cc8fb20d3f9c14515b30d7d3667a"],["F:/桌面/hexo-blog/public/archives/2020/11/index.html","f9d7034c65325d94e39d778837081f72"],["F:/桌面/hexo-blog/public/archives/2020/12/index.html","d56649f190410e4e2100e9c0a3827f30"],["F:/桌面/hexo-blog/public/archives/2020/index.html","674d7cff3333efa9be5ef50ec0846ed4"],["F:/桌面/hexo-blog/public/archives/2020/page/2/index.html","306641f453f0ea749ab1df0445c41172"],["F:/桌面/hexo-blog/public/archives/index.html","3a944f6e6eff7c650ece5233cb437fcc"],["F:/桌面/hexo-blog/public/archives/page/2/index.html","01508ed1cfc22b83505da7b14dbe1f27"],["F:/桌面/hexo-blog/public/article/Opened/index.html","195997379f23666c1f3d5c8968d64ff1"],["F:/桌面/hexo-blog/public/article/RaspberryPi/index.html","96d7c5560c482931eac4c877ae3ea370"],["F:/桌面/hexo-blog/public/article/addiction/index.html","aa0d5874e3a716256aa6074b0a5b3461"],["F:/桌面/hexo-blog/public/article/clouddrive/index.html","36016a3bfb3423cd74b025536538f046"],["F:/桌面/hexo-blog/public/article/ds-priview/index.html","0f1b2a80506be67b61e0045328140e6f"],["F:/桌面/hexo-blog/public/article/ds-sort/index.html","f7fccff0a95f4874cb900b829bd2cee8"],["F:/桌面/hexo-blog/public/article/games/index.html","2e54f787afc7e87986b1150573112f5b"],["F:/桌面/hexo-blog/public/article/hello-world/index.html","a937fc37b46f60082f73dc5c925a52d2"],["F:/桌面/hexo-blog/public/article/java-priview/index.html","0371b60651d240d4a54b3c7fc25ab3fa"],["F:/桌面/hexo-blog/public/article/lights/index.html","f42328436616aa005e323b2e697562a1"],["F:/桌面/hexo-blog/public/article/makemoney/index.html","e250ba279bdf904fa6d1b9c949edcb39"],["F:/桌面/hexo-blog/public/article/math/index.html","1fc0dd1a1d459fc88242c1daf0b20c7c"],["F:/桌面/hexo-blog/public/article/newgame/index.html","fd4fa3f250c263562d6bc877b9baa5d7"],["F:/桌面/hexo-blog/public/article/tcp/index.html","e8157b6a33a79df497105da6056eaf46"],["F:/桌面/hexo-blog/public/article/thesedays/index.html","94e6253f76eacd67acb8c6fc0d3d990d"],["F:/桌面/hexo-blog/public/article/travle/index.html","d4171d06c8d3d3da68163f4c01ec01c6"],["F:/桌面/hexo-blog/public/article/update/index.html","e4198b08bb5ec7d0e16722b0d16cbb23"],["F:/桌面/hexo-blog/public/baidu_verify_1x7q2QHhEA.html","ced76109ae31debcd8b768fd0ba7fcf0"],["F:/桌面/hexo-blog/public/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["F:/桌面/hexo-blog/public/css/index.css","362c26181cd806301534cbda74592107"],["F:/桌面/hexo-blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/桌面/hexo-blog/public/friends/index.html","631cf382834b874685e229656fb623cb"],["F:/桌面/hexo-blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["F:/桌面/hexo-blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["F:/桌面/hexo-blog/public/index.html","3b956ec34aed5e72b9f97e4c4bb6f8a2"],["F:/桌面/hexo-blog/public/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["F:/桌面/hexo-blog/public/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["F:/桌面/hexo-blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["F:/桌面/hexo-blog/public/js/head.js","347edd99f8e3921b45fa617e839d8182"],["F:/桌面/hexo-blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["F:/桌面/hexo-blog/public/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["F:/桌面/hexo-blog/public/js/scroll.js","a12ad7e37b9e325f8da3d0523d3757c7"],["F:/桌面/hexo-blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["F:/桌面/hexo-blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["F:/桌面/hexo-blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["F:/桌面/hexo-blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["F:/桌面/hexo-blog/public/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["F:/桌面/hexo-blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["F:/桌面/hexo-blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["F:/桌面/hexo-blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["F:/桌面/hexo-blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["F:/桌面/hexo-blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["F:/桌面/hexo-blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["F:/桌面/hexo-blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["F:/桌面/hexo-blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["F:/桌面/hexo-blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["F:/桌面/hexo-blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["F:/桌面/hexo-blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["F:/桌面/hexo-blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["F:/桌面/hexo-blog/public/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["F:/桌面/hexo-blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["F:/桌面/hexo-blog/public/live2dw/assets/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["F:/桌面/hexo-blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["F:/桌面/hexo-blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["F:/桌面/hexo-blog/public/message/index.html","5e61e5183c9810050ce2f53f74f0e89c"],["F:/桌面/hexo-blog/public/page/2/index.html","433670504d671e60cfd7a316c528efe3"]];
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







