"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"codgi的小屋"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"33ea707647747db8a59d4705a698ab4b",url:"./404.html"},{revision:"84bbc1bb58778c6f7078315c1676e710",url:"./about/index.html"},{revision:"0600f0ea04d4014a59bd6db8a30afcb2",url:"./archives/2020/02/index.html"},{revision:"4aff9a1e7c3721d2c1059c504a6242c1",url:"./archives/2020/04/index.html"},{revision:"b07170999fd5eaf6c2a237f018fb2808",url:"./archives/2020/07/index.html"},{revision:"fe70e9968daa3caacfe9379d544bfd61",url:"./archives/2020/08/index.html"},{revision:"996a7fd611aecd3a5c103c1533243747",url:"./archives/2020/11/index.html"},{revision:"fb806847570313b446e21c0fab479614",url:"./archives/2020/12/index.html"},{revision:"d07ea5b7a7794108275f4c0d28168781",url:"./archives/2020/index.html"},{revision:"6b2562bf454f86a9a7c29e2d3b25f1a6",url:"./archives/2020/page/2/index.html"},{revision:"d04e17ddab7caf2f78ceca0bdfc5dcd3",url:"./archives/2021/01/index.html"},{revision:"741fd357b74e47ee5d6b90fe9a7a7419",url:"./archives/2021/index.html"},{revision:"1c81d8a3ffc878058bb0e80f51e59549",url:"./archives/index.html"},{revision:"2e2fb73d1f9cdfbc2740366d9a244645",url:"./archives/page/2/index.html"},{revision:"c7e290d12efbda041e31c8a71592f6db",url:"./article/addiction/index.html"},{revision:"d35fa5d263fd001393207da990ad0724",url:"./article/clouddrive/index.html"},{revision:"0b9cc5d88ef6b33f62d05dfb9df6f8c6",url:"./article/ds-sort/index.html"},{revision:"d42b1234769d717532332f76c46cdc60",url:"./article/games/index.html"},{revision:"5b769e284c16270db177ac19df9f4a9d",url:"./article/hello-world/index.html"},{revision:"e92eb7e6b9cdc57eae6a94d29dddb819",url:"./article/java-priview/index.html"},{revision:"4b7b4fb26abe950234b7249831127ca8",url:"./article/lights/index.html"},{revision:"dc5a95630c4f6b287e3f802ade9d5df9",url:"./article/makemoney/index.html"},{revision:"81d232a5f1075adfe4246cce883b536c",url:"./article/math/index.html"},{revision:"67d023d71a36c874146383387b67d126",url:"./article/navicat/index.html"},{revision:"4fc984d38022113ca638289971af52aa",url:"./article/newgame/index.html"},{revision:"f1528ef263919e98b57858a53035ae85",url:"./article/offline_view/index.html"},{revision:"a79b1def3d4d3fc126855ca133f74d55",url:"./article/Opened/index.html"},{revision:"6e64786251aafa1b2d05f6724a661cc3",url:"./article/RaspberryPi/index.html"},{revision:"28638e7520a7de9d29dabafdbdb91108",url:"./article/tcp/index.html"},{revision:"c0054d732c79db72a0a06d190359395b",url:"./article/thesedays/index.html"},{revision:"8821f6e92655ea391d8e9a321c1cc942",url:"./article/travle/index.html"},{revision:"49c43245f47bc26b326ff67e7557fc47",url:"./article/update_fork/index.html"},{revision:"fa48203ede232570f3c8b4b3858697ad",url:"./article/update/index.html"},{revision:"72a1fd049672be4eab82e91f29128c52",url:"./article/vm_ssr/index.html"},{revision:"059941c421041d073ade9e9f79018b8c",url:"./artitalk/index.html"},{revision:"ced76109ae31debcd8b768fd0ba7fcf0",url:"./baidu_verify_1x7q2QHhEA.html"},{revision:"b9ae4cdc02e894b273085dd53571b506",url:"./categories/index.html"},{revision:"12abc7753e12c5ef5e962f992133ed7a",url:"./css/404.css"},{revision:"dff08ec68b5a6d4e0306986e5309e5a5",url:"./css/custom.css"},{revision:"3f6d0750400fe5867008b04f2963e355",url:"./css/index.css"},{revision:"a5618abfac8c1d12df222084e4023678",url:"./css/scorll.css"},{revision:"a4f8ade07019396d5b8c82d8a20ea851",url:"./css/valine.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"eb7128d214caeae20db3693d8aebd8a7",url:"./friends/index.html"},{revision:"ad8ac51c6946a459b73f9e54b602f099",url:"./index.html"},{revision:"b4c58f7db25421adaeaf5e9855a1a0de",url:"./js/copy.js"},{revision:"46b6c835d1f4c0ca77417326f0c1191e",url:"./js/fancybox.js"},{revision:"457631fae1e9fbe3033d3c7bc41fbae4",url:"./js/fireworks.js"},{revision:"53d6fe574a8ed33b4e171f2798439464",url:"./js/head.js"},{revision:"8971778a9cc0ad74eeea6d9ed8a7b87f",url:"./js/hexo-theme-melody.js"},{revision:"e2c109e954ec81bd7522c46a79ec9842",url:"./js/katex.js"},{revision:"975cdd309265efc24bfeb1c10c1efdbf",url:"./js/main.js"},{revision:"ca02f6c9159868a18cee9909f673eb37",url:"./js/ribbon_flow.js"},{revision:"855a91b13fbec057540ee4cc809862a3",url:"./js/scroll.js"},{revision:"c97489be2463a5994d3168663ce42036",url:"./js/search/algolia.js"},{revision:"4fe3b4412d9bbe13578a9f5fe0b14047",url:"./js/search/local-search.js"},{revision:"e05b0794f1c276a58dfc35b1ce8962c4",url:"./js/sidebar.js"},{revision:"9b4bbe6deb700e1c3606eab732f5eea5",url:"./js/third-party/anime.min.js"},{revision:"70cad4516bd608bbdc156cb1c72a8f16",url:"./js/third-party/canvas-ribbon.js"},{revision:"3c9fa1c1199cd4f874d855ecb1641335",url:"./js/third-party/jquery.fancybox.min.js"},{revision:"c9f5aeeca3ad37bf2aa006139b935f0a",url:"./js/third-party/jquery.min.js"},{revision:"aad121203010122e05f1766d92385214",url:"./js/third-party/reveal/head.min.js"},{revision:"44594243bec43813a16371af8fe7e105",url:"./js/third-party/reveal/highlight.min.js"},{revision:"7ec4cef5a7fe3f0bf0eb4dc6d7bca114",url:"./js/third-party/reveal/markdown.min.js"},{revision:"c2a88705e206d71dc21fdc4445349127",url:"./js/third-party/reveal/marked.min.js"},{revision:"0a278fee2e57c530ab07f7d2d9ea8d96",url:"./js/third-party/reveal/math.min.js"},{revision:"89a0dfae4d706f9c75b317f686c3aa14",url:"./js/third-party/reveal/notes.min.js"},{revision:"8988419d67efb5fe93e291a357e26ec9",url:"./js/third-party/reveal/reveal.min.js"},{revision:"9791f96e63e7d534cba2b67d4bda0419",url:"./js/third-party/reveal/zoom.min.js"},{revision:"64da069aba987ea0512cf610600a56d1",url:"./js/third-party/velocity.min.js"},{revision:"c8ca438424a080620f7b2f4ee4b0fff1",url:"./js/third-party/velocity.ui.min.js"},{revision:"e191134efb86a731a56260afed5d1dec",url:"./js/transition.js"},{revision:"d53f5f689fd3c6af45af963e79613b33",url:"./js/tw_cn.js"},{revision:"8bc763af20e27d8cfece654804e823f4",url:"./js/utils.js"},{revision:"c237c610cddeec259a54fad0d9877e02",url:"./link/index.html"},{revision:"51a12c59c371c10ed6e17157972d245a",url:"./manifest.json"},{revision:"58840091432af73eb1be9e343b967561",url:"./message/index.html"},{revision:"903ac7847cbc8f807160f61e7ced4eef",url:"./page/2/index.html"},{revision:"8ad36029b3835f868147e3fd2e794b48",url:"./tags/CS/index.html"},{revision:"d270cecfe2f2d5f65ab64094be391c77",url:"./tags/Git/index.html"},{revision:"277a8e9df31d0790fa53c78e5b1471b7",url:"./tags/index.html"},{revision:"518bb90b46aacfeb9af1f04a81c93774",url:"./tags/VMware/index.html"},{revision:"43c29e523bc3bde8b7d164789453a207",url:"./tags/复习/index.html"},{revision:"e94051ab40f833f937cedebfacaf1507",url:"./tags/学习/index.html"},{revision:"1833d7091cf35a630152cbf7ac71bdfa",url:"./tags/思考/index.html"},{revision:"96c8891b0116a8c21089c2da9d56c7e0",url:"./tags/总结/index.html"},{revision:"9af2af913b9c27ade69988fa143801b2",url:"./tags/旅行日记/index.html"},{revision:"3ec93189e6b40ad3be14a97a5928edef",url:"./tags/科普/index.html"},{revision:"6e0606c090bec394d6e95b5dca2e79f2",url:"./tags/踩坑/index.html"},{revision:"b08bd81b64ebf2b8be0513afa96c02dd",url:"./tags/软件/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();