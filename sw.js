"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"codgi的小屋"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"d0d811c391bfcbc815f40c549a0bb72b",url:"./404.html"},{revision:"ee137ad12954eb9cbaa41f31f747c5a9",url:"./about/index.html"},{revision:"658681a97aa32a6e1df07a699c7c3f48",url:"./archives/2020/02/index.html"},{revision:"c42e757c02ed2b9a89d3ed724e5d4b42",url:"./archives/2020/04/index.html"},{revision:"4ff56b33b3bc6976eed9f0722db36fd6",url:"./archives/2020/07/index.html"},{revision:"a3b4891a0c734d7e1e326c16a5d7df47",url:"./archives/2020/08/index.html"},{revision:"9d2fd46456ffe0ada22f9b4d47e11c94",url:"./archives/2020/11/index.html"},{revision:"7fea16f872dc9aa21ae8733dec428bfa",url:"./archives/2020/12/index.html"},{revision:"f89ae89ed025c035b589e8ecfe1fa26d",url:"./archives/2020/index.html"},{revision:"9c8404a9fa04e6f7caefdc058992f28a",url:"./archives/2020/page/2/index.html"},{revision:"fc6ee026dcd5a9137b23d2f9b33146b3",url:"./archives/2021/01/index.html"},{revision:"ab5a0cbe6b3d031cbb41fa528fd7f2d6",url:"./archives/2021/index.html"},{revision:"ec1aba542329eb2c168e9a8a7933d641",url:"./archives/index.html"},{revision:"2f1061fb5e8e63d7d63d01ea8a9d1ae5",url:"./archives/page/2/index.html"},{revision:"35b857be29cb20599fe56cb08a495da1",url:"./article/addiction/index.html"},{revision:"c6c8e351e3dfcf8428645436f41600f7",url:"./article/clouddrive/index.html"},{revision:"f4f108ab83d1ae4f5f5168fa8efb2540",url:"./article/ds-sort/index.html"},{revision:"9d0e0e910296ea4353fe4f90cd11cfd6",url:"./article/games/index.html"},{revision:"e09667019a3a6d4540bbe2babed0f734",url:"./article/hello-world/index.html"},{revision:"890a90c8a82894f8b44cdca8290cf3e1",url:"./article/java-priview/index.html"},{revision:"a44e72bb73a3fe082c294b06c56204e5",url:"./article/lights/index.html"},{revision:"9142b9282f26aa25d641678d966eed14",url:"./article/makemoney/index.html"},{revision:"eb49275545d5ac5df5d1bd250163a2e7",url:"./article/math/index.html"},{revision:"2d3a79389a400b544f3192c0dfc87b2e",url:"./article/navicat/index.html"},{revision:"65a37644fb790ec3f0d290d32da9b5f4",url:"./article/newgame/index.html"},{revision:"6d2acef8707f961ebeb780e4874cf03f",url:"./article/offline_view/index.html"},{revision:"8f2b34730d00f0ba5d9d50b297d8c358",url:"./article/Opened/index.html"},{revision:"d0dc8c812376174936a8466bd7c3bae7",url:"./article/RaspberryPi/index.html"},{revision:"70217996245e9486d8bafc87e1f853b0",url:"./article/tcp/index.html"},{revision:"d574db30be360c35567dde6043ec50d8",url:"./article/thesedays/index.html"},{revision:"c2d869f54271c8dc2830fed539a2a051",url:"./article/travle/index.html"},{revision:"b3bc11362beb65374fa693d1eb33b71f",url:"./article/update_fork/index.html"},{revision:"d0f7d6136ff8d929fd01b94ea600f46a",url:"./article/update/index.html"},{revision:"45a03ac7306394b012257a7d7c42b5a7",url:"./artitalk/index.html"},{revision:"ced76109ae31debcd8b768fd0ba7fcf0",url:"./baidu_verify_1x7q2QHhEA.html"},{revision:"e91b8dec59d2b1192d1a883a5b242a22",url:"./categories/index.html"},{revision:"12abc7753e12c5ef5e962f992133ed7a",url:"./css/404.css"},{revision:"3e1091e4e1540e7fb2347ed41d33b0b5",url:"./css/index.css"},{revision:"a5618abfac8c1d12df222084e4023678",url:"./css/scorll.css"},{revision:"a4f8ade07019396d5b8c82d8a20ea851",url:"./css/valine.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"4a96d1cdea7a996ffdd7b6af19c40981",url:"./friends/index.html"},{revision:"abbd1f60956ff5f1bea1edd7b9bbda6a",url:"./index.html"},{revision:"b4c58f7db25421adaeaf5e9855a1a0de",url:"./js/copy.js"},{revision:"46b6c835d1f4c0ca77417326f0c1191e",url:"./js/fancybox.js"},{revision:"457631fae1e9fbe3033d3c7bc41fbae4",url:"./js/fireworks.js"},{revision:"53d6fe574a8ed33b4e171f2798439464",url:"./js/head.js"},{revision:"8971778a9cc0ad74eeea6d9ed8a7b87f",url:"./js/hexo-theme-melody.js"},{revision:"e2c109e954ec81bd7522c46a79ec9842",url:"./js/katex.js"},{revision:"f2c5847582e8b766ec94bed4cffc5a03",url:"./js/main.js"},{revision:"7ee4e383268261b06e95a86feb6d86ff",url:"./js/ribbon_flow.js"},{revision:"143b4410023eab95025118fb79da1d12",url:"./js/scroll.js"},{revision:"c97489be2463a5994d3168663ce42036",url:"./js/search/algolia.js"},{revision:"4fe3b4412d9bbe13578a9f5fe0b14047",url:"./js/search/local-search.js"},{revision:"e05b0794f1c276a58dfc35b1ce8962c4",url:"./js/sidebar.js"},{revision:"9b4bbe6deb700e1c3606eab732f5eea5",url:"./js/third-party/anime.min.js"},{revision:"70cad4516bd608bbdc156cb1c72a8f16",url:"./js/third-party/canvas-ribbon.js"},{revision:"3c9fa1c1199cd4f874d855ecb1641335",url:"./js/third-party/jquery.fancybox.min.js"},{revision:"c9f5aeeca3ad37bf2aa006139b935f0a",url:"./js/third-party/jquery.min.js"},{revision:"aad121203010122e05f1766d92385214",url:"./js/third-party/reveal/head.min.js"},{revision:"44594243bec43813a16371af8fe7e105",url:"./js/third-party/reveal/highlight.min.js"},{revision:"7ec4cef5a7fe3f0bf0eb4dc6d7bca114",url:"./js/third-party/reveal/markdown.min.js"},{revision:"c2a88705e206d71dc21fdc4445349127",url:"./js/third-party/reveal/marked.min.js"},{revision:"0a278fee2e57c530ab07f7d2d9ea8d96",url:"./js/third-party/reveal/math.min.js"},{revision:"89a0dfae4d706f9c75b317f686c3aa14",url:"./js/third-party/reveal/notes.min.js"},{revision:"8988419d67efb5fe93e291a357e26ec9",url:"./js/third-party/reveal/reveal.min.js"},{revision:"9791f96e63e7d534cba2b67d4bda0419",url:"./js/third-party/reveal/zoom.min.js"},{revision:"64da069aba987ea0512cf610600a56d1",url:"./js/third-party/velocity.min.js"},{revision:"c8ca438424a080620f7b2f4ee4b0fff1",url:"./js/third-party/velocity.ui.min.js"},{revision:"e191134efb86a731a56260afed5d1dec",url:"./js/transition.js"},{revision:"206e62606f6dd03d02136c4a12de78ad",url:"./js/tw_cn.js"},{revision:"8bc763af20e27d8cfece654804e823f4",url:"./js/utils.js"},{revision:"e3083966c8ca135678751312f53897cc",url:"./link/index.html"},{revision:"51a12c59c371c10ed6e17157972d245a",url:"./manifest.json"},{revision:"d02467cc67f1c32c24e2d2c3cd961491",url:"./message/index.html"},{revision:"cafae471dd96110ecb1181183d0a4724",url:"./page/2/index.html"},{revision:"d82d050cda50ee1350b9a4992914135e",url:"./service-worker.js"},{revision:"22b79ed39a17eb2dac6374ba239ee760",url:"./tags/CS/index.html"},{revision:"aff875cedfb167a39bf389773a5e1661",url:"./tags/Git/index.html"},{revision:"f30571da9ff56804b730193c3004104b",url:"./tags/index.html"},{revision:"ffb77f675b14c1cbb43aa108c269d0a1",url:"./tags/复习/index.html"},{revision:"022be71081b5a333168ff12b1e938ef2",url:"./tags/学习/index.html"},{revision:"9d2f117cb9386abcffd49f19b6d4dcda",url:"./tags/思考/index.html"},{revision:"db084277c87ec8d252118b5014c43e7f",url:"./tags/总结/index.html"},{revision:"8b836fc6dade5c9105dd00b78f1d372b",url:"./tags/旅行日记/index.html"},{revision:"d34dc359c2b7fc1e65da04ad09506537",url:"./tags/科普/index.html"},{revision:"872d1e62292190e87e0945e2392919d4",url:"./tags/踩坑/index.html"},{revision:"b32bb5df331de4246a8d036c6f83ed64",url:"./tags/软件/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();