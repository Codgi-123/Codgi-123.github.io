"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"codgi的小屋"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"d0d811c391bfcbc815f40c549a0bb72b",url:"./404.html"},{revision:"df92b456e4b7f7a95fec61838aca75bc",url:"./about/index.html"},{revision:"1093584fde59e27ebe8d43e70952247a",url:"./archives/2020/02/index.html"},{revision:"b054baffc28d2ed71659fd7875cf7411",url:"./archives/2020/04/index.html"},{revision:"58ba3f4bc0a1ab4828bf515f79b2271f",url:"./archives/2020/07/index.html"},{revision:"1c2f17b6c8f9691bb901f37d35c4f3bc",url:"./archives/2020/08/index.html"},{revision:"ee9ef84a1eb34451c4a9a7581ade6506",url:"./archives/2020/11/index.html"},{revision:"9ee9c469b1bf1e9011b985f4ddd345ee",url:"./archives/2020/12/index.html"},{revision:"242ddf128653f2936ea41694f180ee62",url:"./archives/2020/index.html"},{revision:"ea6839f8900d0a3406548791a214b789",url:"./archives/2020/page/2/index.html"},{revision:"34ceeb0f1d899c8fc4f8ff2739f727b9",url:"./archives/2021/01/index.html"},{revision:"5ebdf59a41f743d51da8c28427e6508a",url:"./archives/2021/index.html"},{revision:"c0276d907d5c53e871b1337d1fd4e277",url:"./archives/index.html"},{revision:"1597ff8cc526aed70eb3df8290a83e10",url:"./archives/page/2/index.html"},{revision:"ef38a002948ca71bd641b915492e72d6",url:"./article/addiction/index.html"},{revision:"0fc6cd75ab572db5018f3de319506b17",url:"./article/clouddrive/index.html"},{revision:"62bd569408e64d23176e6b5ecb299040",url:"./article/ds-sort/index.html"},{revision:"8dc6244ac8471a89333611de6e7f1641",url:"./article/games/index.html"},{revision:"549aabf2fdf543a5aad564d3a026eb3f",url:"./article/hello-world/index.html"},{revision:"ccba0f01ab8d742eabeef12ce6eadbf4",url:"./article/java-priview/index.html"},{revision:"1cca84a5d9873d12776f096e93ad42dd",url:"./article/lights/index.html"},{revision:"e3032875154114a78f7b8b2d6ca003fe",url:"./article/makemoney/index.html"},{revision:"8824069e70826c406b82c511f87dfcef",url:"./article/math/index.html"},{revision:"da075d7fcd74ab8b67b23e693f2189bb",url:"./article/navicat/index.html"},{revision:"a7eb7c19b1b1e290182e89e5dbd7bb7e",url:"./article/newgame/index.html"},{revision:"e05657c8aadfc4f2eabd5ab53632e1ac",url:"./article/offline_view/index.html"},{revision:"a0f48a8dd6b50a985a6a8067cd5a8be7",url:"./article/Opened/index.html"},{revision:"dfb1159967ae03c7627f57fea49d4c44",url:"./article/RaspberryPi/index.html"},{revision:"8c4f5f64266ef66feeedd6821e0cf4fb",url:"./article/tcp/index.html"},{revision:"909cfba73d5bede5e3ccc59ea44716f1",url:"./article/thesedays/index.html"},{revision:"caf510e8d9a151a53e89f62c2cbba4f9",url:"./article/travle/index.html"},{revision:"d2caf811ecf854eba0a9f422f5fcf977",url:"./article/update_fork/index.html"},{revision:"63dbbacc0c379030476444cb9b253582",url:"./article/update/index.html"},{revision:"261083bf1b84c03a638334f257983fc6",url:"./artitalk/index.html"},{revision:"ced76109ae31debcd8b768fd0ba7fcf0",url:"./baidu_verify_1x7q2QHhEA.html"},{revision:"3ab351a9022d9e7f2ac41864586bf16e",url:"./categories/index.html"},{revision:"12abc7753e12c5ef5e962f992133ed7a",url:"./css/404.css"},{revision:"3e1091e4e1540e7fb2347ed41d33b0b5",url:"./css/index.css"},{revision:"a5618abfac8c1d12df222084e4023678",url:"./css/scorll.css"},{revision:"a4f8ade07019396d5b8c82d8a20ea851",url:"./css/valine.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"0f09a63d37c3e038dc125b45c94f307c",url:"./friends/index.html"},{revision:"a76c8b055b24179a8a4df3f4bac0a619",url:"./index.html"},{revision:"b4c58f7db25421adaeaf5e9855a1a0de",url:"./js/copy.js"},{revision:"46b6c835d1f4c0ca77417326f0c1191e",url:"./js/fancybox.js"},{revision:"457631fae1e9fbe3033d3c7bc41fbae4",url:"./js/fireworks.js"},{revision:"53d6fe574a8ed33b4e171f2798439464",url:"./js/head.js"},{revision:"8971778a9cc0ad74eeea6d9ed8a7b87f",url:"./js/hexo-theme-melody.js"},{revision:"e2c109e954ec81bd7522c46a79ec9842",url:"./js/katex.js"},{revision:"fdf0689bfa5480c53ec99df632d2ee92",url:"./js/main.js"},{revision:"0ca47e30e61db5113a69f34364a29f69",url:"./js/ribbon_flow.js"},{revision:"143b4410023eab95025118fb79da1d12",url:"./js/scroll.js"},{revision:"c97489be2463a5994d3168663ce42036",url:"./js/search/algolia.js"},{revision:"4fe3b4412d9bbe13578a9f5fe0b14047",url:"./js/search/local-search.js"},{revision:"e05b0794f1c276a58dfc35b1ce8962c4",url:"./js/sidebar.js"},{revision:"9b4bbe6deb700e1c3606eab732f5eea5",url:"./js/third-party/anime.min.js"},{revision:"70cad4516bd608bbdc156cb1c72a8f16",url:"./js/third-party/canvas-ribbon.js"},{revision:"3c9fa1c1199cd4f874d855ecb1641335",url:"./js/third-party/jquery.fancybox.min.js"},{revision:"c9f5aeeca3ad37bf2aa006139b935f0a",url:"./js/third-party/jquery.min.js"},{revision:"aad121203010122e05f1766d92385214",url:"./js/third-party/reveal/head.min.js"},{revision:"44594243bec43813a16371af8fe7e105",url:"./js/third-party/reveal/highlight.min.js"},{revision:"7ec4cef5a7fe3f0bf0eb4dc6d7bca114",url:"./js/third-party/reveal/markdown.min.js"},{revision:"c2a88705e206d71dc21fdc4445349127",url:"./js/third-party/reveal/marked.min.js"},{revision:"0a278fee2e57c530ab07f7d2d9ea8d96",url:"./js/third-party/reveal/math.min.js"},{revision:"89a0dfae4d706f9c75b317f686c3aa14",url:"./js/third-party/reveal/notes.min.js"},{revision:"8988419d67efb5fe93e291a357e26ec9",url:"./js/third-party/reveal/reveal.min.js"},{revision:"9791f96e63e7d534cba2b67d4bda0419",url:"./js/third-party/reveal/zoom.min.js"},{revision:"64da069aba987ea0512cf610600a56d1",url:"./js/third-party/velocity.min.js"},{revision:"c8ca438424a080620f7b2f4ee4b0fff1",url:"./js/third-party/velocity.ui.min.js"},{revision:"e191134efb86a731a56260afed5d1dec",url:"./js/transition.js"},{revision:"a13f6e3b4ef5bfbe7903a7d3fa82a6a9",url:"./js/tw_cn.js"},{revision:"8bc763af20e27d8cfece654804e823f4",url:"./js/utils.js"},{revision:"64334e3e2cadd27a80ad5d98aeff57d8",url:"./link/index.html"},{revision:"51a12c59c371c10ed6e17157972d245a",url:"./manifest.json"},{revision:"ec50399ee00ff193b20dc303da99e93d",url:"./message/index.html"},{revision:"dbdc0ea39a0befd727217b32db771117",url:"./page/2/index.html"},{revision:"f72deef21b9f4c27131f6c12eed5891b",url:"./service-worker.js"},{revision:"3377a93e64e2809069e66d506406cc9f",url:"./tags/Git/index.html"},{revision:"0a01b6b32777c753ea122eb0dd086c1d",url:"./tags/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();