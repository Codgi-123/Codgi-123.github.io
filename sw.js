"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"codgi的小屋"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"d286e16d3094c05c3393e27937c60a85",url:"./404.html"},{revision:"e2dc41439660d09baa6866f73498bb0d",url:"./about/index.html"},{revision:"d601d5e5b61e3c168133b661b3a77481",url:"./archives/2020/02/index.html"},{revision:"6e78f46358d90bc725f52fb71308a709",url:"./archives/2020/04/index.html"},{revision:"572ce048405e55c46c302a2d7fee19c2",url:"./archives/2020/07/index.html"},{revision:"f2b48a99d88f376b9fe98c6d0ca27311",url:"./archives/2020/08/index.html"},{revision:"5cba69e68989037d9ff4c6b632c4755d",url:"./archives/2020/11/index.html"},{revision:"884af9da3629d7ddd67d07c32ae4179d",url:"./archives/2020/12/index.html"},{revision:"ef89a0a841c4bc2feee3b9afe91b6304",url:"./archives/2020/index.html"},{revision:"072ef46eae4a19e1e13459fc61bb0677",url:"./archives/2020/page/2/index.html"},{revision:"472028856110f6b59adbe6316ce4f286",url:"./archives/2021/01/index.html"},{revision:"89672b9d09c5e1ba07ed3ed39e161d95",url:"./archives/2021/03/index.html"},{revision:"1c02713cba375f34e8cb2147791b2a41",url:"./archives/2021/index.html"},{revision:"790c484544f8e6a34bc5faf89f61de8d",url:"./archives/index.html"},{revision:"9d3a6fc436e231995e2c1cc48262b37b",url:"./archives/page/2/index.html"},{revision:"8e7a129b01165bf7118d56cf13b97bf1",url:"./archives/page/3/index.html"},{revision:"8c177f4abcd6965c8ce337a0559b3bed",url:"./article/2020_2semester/index.html"},{revision:"bb28ae541730f6ebe239ed304df6bff4",url:"./article/2021_3_17/index.html"},{revision:"28ab30c0f822995c305c241a8207d187",url:"./article/addiction/index.html"},{revision:"1fdead52972730117061ce1077f8e7bf",url:"./article/clouddrive/index.html"},{revision:"8924c68a665d42d23115679af42081f6",url:"./article/ds-sort/index.html"},{revision:"fffc44c17d1185d3855904e721c96dee",url:"./article/games/index.html"},{revision:"d1726b1b3e39f701980b15906a8fa7f0",url:"./article/hello-world/index.html"},{revision:"6a1661cc1d510965cab5c01f8bcc4f83",url:"./article/java-priview/index.html"},{revision:"ae251ec99526d0ff3b907013aba9e212",url:"./article/lights/index.html"},{revision:"63b2996a3320bc43463129805fb22b3b",url:"./article/makemoney/index.html"},{revision:"90f61f14addac6f879998b974ace491e",url:"./article/math/index.html"},{revision:"c6305521a2aed773598f6a267b8b1ead",url:"./article/navicat/index.html"},{revision:"12ec75cf3697c6e67b512555b743705b",url:"./article/newgame/index.html"},{revision:"cec01159437dec86b32cf09c39bdc5c4",url:"./article/offline_view/index.html"},{revision:"9006e98af034a2d8a95e781588db6c08",url:"./article/Opened/index.html"},{revision:"a85b0bcb7e1e224b1ef3ea508082cab4",url:"./article/RaspberryPi/index.html"},{revision:"883588ea370b0c45beecfc8ab1c3622e",url:"./article/tcp/index.html"},{revision:"925c1d7e218ca9ab53bc3d593a356a83",url:"./article/thesedays/index.html"},{revision:"5aaf1fd2c1892e5b6317bba1e3c930d5",url:"./article/tittytainment/index.html"},{revision:"65849c2e6f229ddaf86c9577f6e8b019",url:"./article/travle/index.html"},{revision:"eba55f559b22382d6cde0ed2519a25e6",url:"./article/update_fork/index.html"},{revision:"4411225929696fa8f360afc06d39e606",url:"./article/update/index.html"},{revision:"0503e09526820bfbd117da6946d9bf6a",url:"./article/vm_ssr/index.html"},{revision:"fd58e1049f8321e43d9431c2200c9ef6",url:"./artitalk/index.html"},{revision:"ced76109ae31debcd8b768fd0ba7fcf0",url:"./baidu_verify_1x7q2QHhEA.html"},{revision:"9597c23a5d57c7656812f9a593ef6959",url:"./categories/index.html"},{revision:"12abc7753e12c5ef5e962f992133ed7a",url:"./css/404.css"},{revision:"dff08ec68b5a6d4e0306986e5309e5a5",url:"./css/custom.css"},{revision:"d1bc34ac3d1a04d1cd47c07fe5e1196e",url:"./css/index.css"},{revision:"a5618abfac8c1d12df222084e4023678",url:"./css/scorll.css"},{revision:"a4f8ade07019396d5b8c82d8a20ea851",url:"./css/valine.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"cc16e50ed3660eb703f47e8a8510af1f",url:"./friends/index.html"},{revision:"2db6c98c235d9db0702b050fff3ca905",url:"./index.html"},{revision:"b4c58f7db25421adaeaf5e9855a1a0de",url:"./js/copy.js"},{revision:"46b6c835d1f4c0ca77417326f0c1191e",url:"./js/fancybox.js"},{revision:"457631fae1e9fbe3033d3c7bc41fbae4",url:"./js/fireworks.js"},{revision:"53d6fe574a8ed33b4e171f2798439464",url:"./js/head.js"},{revision:"8971778a9cc0ad74eeea6d9ed8a7b87f",url:"./js/hexo-theme-melody.js"},{revision:"e2c109e954ec81bd7522c46a79ec9842",url:"./js/katex.js"},{revision:"d607946d186033106ea92698fa118ff1",url:"./js/main.js"},{revision:"68a36fb9b8f78eb1100d10da81212a95",url:"./js/ribbon_flow.js"},{revision:"143b4410023eab95025118fb79da1d12",url:"./js/scroll.js"},{revision:"c97489be2463a5994d3168663ce42036",url:"./js/search/algolia.js"},{revision:"4fe3b4412d9bbe13578a9f5fe0b14047",url:"./js/search/local-search.js"},{revision:"e05b0794f1c276a58dfc35b1ce8962c4",url:"./js/sidebar.js"},{revision:"9b4bbe6deb700e1c3606eab732f5eea5",url:"./js/third-party/anime.min.js"},{revision:"70cad4516bd608bbdc156cb1c72a8f16",url:"./js/third-party/canvas-ribbon.js"},{revision:"3c9fa1c1199cd4f874d855ecb1641335",url:"./js/third-party/jquery.fancybox.min.js"},{revision:"c9f5aeeca3ad37bf2aa006139b935f0a",url:"./js/third-party/jquery.min.js"},{revision:"aad121203010122e05f1766d92385214",url:"./js/third-party/reveal/head.min.js"},{revision:"44594243bec43813a16371af8fe7e105",url:"./js/third-party/reveal/highlight.min.js"},{revision:"7ec4cef5a7fe3f0bf0eb4dc6d7bca114",url:"./js/third-party/reveal/markdown.min.js"},{revision:"c2a88705e206d71dc21fdc4445349127",url:"./js/third-party/reveal/marked.min.js"},{revision:"0a278fee2e57c530ab07f7d2d9ea8d96",url:"./js/third-party/reveal/math.min.js"},{revision:"89a0dfae4d706f9c75b317f686c3aa14",url:"./js/third-party/reveal/notes.min.js"},{revision:"8988419d67efb5fe93e291a357e26ec9",url:"./js/third-party/reveal/reveal.min.js"},{revision:"9791f96e63e7d534cba2b67d4bda0419",url:"./js/third-party/reveal/zoom.min.js"},{revision:"64da069aba987ea0512cf610600a56d1",url:"./js/third-party/velocity.min.js"},{revision:"c8ca438424a080620f7b2f4ee4b0fff1",url:"./js/third-party/velocity.ui.min.js"},{revision:"e191134efb86a731a56260afed5d1dec",url:"./js/transition.js"},{revision:"faaccac0c19f266d272359feef248f25",url:"./js/tw_cn.js"},{revision:"8bc763af20e27d8cfece654804e823f4",url:"./js/utils.js"},{revision:"a38e9686bf82c315ba676e8d0ea33e46",url:"./link/index.html"},{revision:"51a12c59c371c10ed6e17157972d245a",url:"./manifest.json"},{revision:"807c15c1e84623a64ef916963407b7ef",url:"./message/index.html"},{revision:"3c49dbd4ad9a730a41d28b2778ca2c15",url:"./page/2/index.html"},{revision:"d16f404c368224cd8819cb5458b0fa33",url:"./page/3/index.html"},{revision:"e92aea05d8de65ff37ef07552980269c",url:"./tags/CS/index.html"},{revision:"f35099cee282e92c17bc1700bae30a12",url:"./tags/Git/index.html"},{revision:"37fc2d0cacf59eed692156f7e3c69952",url:"./tags/index.html"},{revision:"3a907e76282710083cd073808ea59218",url:"./tags/VMware/index.html"},{revision:"84e7f114972401ff2be3f0dcc45beeae",url:"./tags/复习/index.html"},{revision:"74d4812f19fd17013b2d9c6971d169c4",url:"./tags/学习/index.html"},{revision:"226b69061b5a63e9d5ad0d6003751c81",url:"./tags/思考/index.html"},{revision:"e8cd530d2bb4dac83e3468a236a94145",url:"./tags/总结/index.html"},{revision:"85f401e9474f2358a5fa9cef0b8d15d9",url:"./tags/旅行日记/index.html"},{revision:"0d3a40c2619eed3e0a5c90b1ffc5c572",url:"./tags/杂项/index.html"},{revision:"2d70b0436eeb80d0bda371254e291ada",url:"./tags/科普/index.html"},{revision:"145f770ee3a0f6314dfd25071ce4a099",url:"./tags/踩坑/index.html"},{revision:"98b3b71722da2abef38c4b56fe02165c",url:"./tags/软件/index.html"},{revision:"4cab6ab41db65e431ea6746e8724f333",url:"./tags/随记/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();