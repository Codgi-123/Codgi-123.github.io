"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"codgi的小屋"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"33ea707647747db8a59d4705a698ab4b",url:"./404.html"},{revision:"843a694e765b0f26c7786e02e296034f",url:"./about/index.html"},{revision:"fc79f97884425bc1fe370dea439c69e0",url:"./archives/2020/02/index.html"},{revision:"e32462978447e7f716f9d0b150cefb7d",url:"./archives/2020/04/index.html"},{revision:"4e1c142854bb45f5febacacc1b5947de",url:"./archives/2020/07/index.html"},{revision:"beed5fa0b2f271906500f46b4e4309d8",url:"./archives/2020/08/index.html"},{revision:"bbc8134c62dd7f1cad510c796b852494",url:"./archives/2020/11/index.html"},{revision:"e4b7f4fd8a0246e833fbb9010f295e4a",url:"./archives/2020/12/index.html"},{revision:"606b9dc57245444a7589ef751fa80fc4",url:"./archives/2020/index.html"},{revision:"628a214a98aaff12b35221e77762e4ae",url:"./archives/2020/page/2/index.html"},{revision:"33ac3eedd8dd22c392bd4d8cd8c8dd2e",url:"./archives/2021/01/index.html"},{revision:"3380cee4b9d0772788930461684d7cbe",url:"./archives/2021/03/index.html"},{revision:"a19f0075dda688daaf202e0bca580c8a",url:"./archives/2021/index.html"},{revision:"361245f1b09c64b5b67b3a53d479dfc1",url:"./archives/index.html"},{revision:"fadbd45bec6ec8580044c77589842f4c",url:"./archives/page/2/index.html"},{revision:"8b4302d188eaa745f7612f64a0c1e133",url:"./archives/page/3/index.html"},{revision:"694dc6294113786140e55d1a093f3fc4",url:"./article/2020_2semester/index.html"},{revision:"63fc58a159b4012c099056100ff29912",url:"./article/addiction/index.html"},{revision:"0e1267abad758d31ec71be2389056b16",url:"./article/clouddrive/index.html"},{revision:"2e0e3491d87582f2d79ad1cebc535e0b",url:"./article/ds-sort/index.html"},{revision:"92eb5f495ab0196ea5966dc4b48282dd",url:"./article/games/index.html"},{revision:"25047bb6146b32a0464299db973f6586",url:"./article/hello-world/index.html"},{revision:"55298d92a7d527b59338cb160fa77a99",url:"./article/java-priview/index.html"},{revision:"b5b8e1ef4376870af6ef19059cd4ae95",url:"./article/lights/index.html"},{revision:"a90aa61d8936480f9e64ab82df08cae0",url:"./article/makemoney/index.html"},{revision:"dbd056bfb7de504c6c5320b2cf3621aa",url:"./article/math/index.html"},{revision:"1f21f5c68449e4dd39766c04a161e07b",url:"./article/navicat/index.html"},{revision:"090feb31620878b2562f4118b6c659bc",url:"./article/newgame/index.html"},{revision:"f6bf4b272a55e8b0ceb926992e977619",url:"./article/offline_view/index.html"},{revision:"36eb57aae308f7cd164326619d11f719",url:"./article/Opened/index.html"},{revision:"335859a5671025ed7422eb4652f66ea7",url:"./article/RaspberryPi/index.html"},{revision:"5a6d97e265a405dd90bf5cd1ae48df4c",url:"./article/tcp/index.html"},{revision:"a5758c8a8ac1b3415aefa260a9dc7683",url:"./article/thesedays/index.html"},{revision:"55d04d9f885f5b22611c827d6b18ed72",url:"./article/tittytainment/index.html"},{revision:"d85ba76b6f6ea649d37dadc646592ea5",url:"./article/travle/index.html"},{revision:"61cf9d7163aaf6018e8773b9eb33f680",url:"./article/update_fork/index.html"},{revision:"306d6a1ea9b11660b4a4550ec08f939e",url:"./article/update/index.html"},{revision:"e661025bcf09e056e7b04a28a0e1fa79",url:"./article/vm_ssr/index.html"},{revision:"96d385e8921d1466ece6e6cb07c5dc77",url:"./artitalk/index.html"},{revision:"ced76109ae31debcd8b768fd0ba7fcf0",url:"./baidu_verify_1x7q2QHhEA.html"},{revision:"43bdcb5ab013a649e621dc48ed9551c3",url:"./categories/index.html"},{revision:"12abc7753e12c5ef5e962f992133ed7a",url:"./css/404.css"},{revision:"dff08ec68b5a6d4e0306986e5309e5a5",url:"./css/custom.css"},{revision:"d1bc34ac3d1a04d1cd47c07fe5e1196e",url:"./css/index.css"},{revision:"a5618abfac8c1d12df222084e4023678",url:"./css/scorll.css"},{revision:"a4f8ade07019396d5b8c82d8a20ea851",url:"./css/valine.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"dd7e6fc0856084ac2da06d2edb55a71b",url:"./friends/index.html"},{revision:"8b6ef1389d5a8d3392613fe1aa43068c",url:"./index.html"},{revision:"b4c58f7db25421adaeaf5e9855a1a0de",url:"./js/copy.js"},{revision:"46b6c835d1f4c0ca77417326f0c1191e",url:"./js/fancybox.js"},{revision:"457631fae1e9fbe3033d3c7bc41fbae4",url:"./js/fireworks.js"},{revision:"53d6fe574a8ed33b4e171f2798439464",url:"./js/head.js"},{revision:"8971778a9cc0ad74eeea6d9ed8a7b87f",url:"./js/hexo-theme-melody.js"},{revision:"e2c109e954ec81bd7522c46a79ec9842",url:"./js/katex.js"},{revision:"683b68cb8caed4f46a0b0d76bc883f0a",url:"./js/main.js"},{revision:"12d78f1833b472c92abb8a4b2907c003",url:"./js/ribbon_flow.js"},{revision:"143b4410023eab95025118fb79da1d12",url:"./js/scroll.js"},{revision:"c97489be2463a5994d3168663ce42036",url:"./js/search/algolia.js"},{revision:"4fe3b4412d9bbe13578a9f5fe0b14047",url:"./js/search/local-search.js"},{revision:"e05b0794f1c276a58dfc35b1ce8962c4",url:"./js/sidebar.js"},{revision:"9b4bbe6deb700e1c3606eab732f5eea5",url:"./js/third-party/anime.min.js"},{revision:"70cad4516bd608bbdc156cb1c72a8f16",url:"./js/third-party/canvas-ribbon.js"},{revision:"3c9fa1c1199cd4f874d855ecb1641335",url:"./js/third-party/jquery.fancybox.min.js"},{revision:"c9f5aeeca3ad37bf2aa006139b935f0a",url:"./js/third-party/jquery.min.js"},{revision:"aad121203010122e05f1766d92385214",url:"./js/third-party/reveal/head.min.js"},{revision:"44594243bec43813a16371af8fe7e105",url:"./js/third-party/reveal/highlight.min.js"},{revision:"7ec4cef5a7fe3f0bf0eb4dc6d7bca114",url:"./js/third-party/reveal/markdown.min.js"},{revision:"c2a88705e206d71dc21fdc4445349127",url:"./js/third-party/reveal/marked.min.js"},{revision:"0a278fee2e57c530ab07f7d2d9ea8d96",url:"./js/third-party/reveal/math.min.js"},{revision:"89a0dfae4d706f9c75b317f686c3aa14",url:"./js/third-party/reveal/notes.min.js"},{revision:"8988419d67efb5fe93e291a357e26ec9",url:"./js/third-party/reveal/reveal.min.js"},{revision:"9791f96e63e7d534cba2b67d4bda0419",url:"./js/third-party/reveal/zoom.min.js"},{revision:"64da069aba987ea0512cf610600a56d1",url:"./js/third-party/velocity.min.js"},{revision:"c8ca438424a080620f7b2f4ee4b0fff1",url:"./js/third-party/velocity.ui.min.js"},{revision:"e191134efb86a731a56260afed5d1dec",url:"./js/transition.js"},{revision:"3418dfa3c79d53bae0c6518df6ece91a",url:"./js/tw_cn.js"},{revision:"8bc763af20e27d8cfece654804e823f4",url:"./js/utils.js"},{revision:"1201add36a5055139fd2e47bcbae2320",url:"./link/index.html"},{revision:"51a12c59c371c10ed6e17157972d245a",url:"./manifest.json"},{revision:"aa35f20cbfcf9fc0ac0a843bb964d9e3",url:"./message/index.html"},{revision:"eb14b3b72944c4f951c380b9630b0bb9",url:"./page/2/index.html"},{revision:"2c61e87613c3cdcc17ae9cb183b9590c",url:"./page/3/index.html"},{revision:"749a9dcd46080d1231cfb9efc8a05605",url:"./tags/CS/index.html"},{revision:"e350a89ae1fd3cb26a2783c70df88350",url:"./tags/Git/index.html"},{revision:"a35aa6dc746e6630fe106aaca00d2f5b",url:"./tags/index.html"},{revision:"b30832eab0d7042506b6b911f614024b",url:"./tags/VMware/index.html"},{revision:"230ae2026d97bbe83822840fb23a4760",url:"./tags/复习/index.html"},{revision:"348a3d77a55b09d2fa2ffc8bb1997246",url:"./tags/学习/index.html"},{revision:"6b6ad8bb041d3bd70a9ec9c2960d0105",url:"./tags/思考/index.html"},{revision:"108df3d4742fce8513b58c72db5b64ed",url:"./tags/总结/index.html"},{revision:"e9471a278f6edaecb6d3c33d4e5f1baf",url:"./tags/旅行日记/index.html"},{revision:"fe7d3ebe540f45105885ba34dbf4e177",url:"./tags/科普/index.html"},{revision:"1f8e841b35d17500cfc011edbb93c2ec",url:"./tags/踩坑/index.html"},{revision:"44aa61a971b6305339261560999a130b",url:"./tags/软件/index.html"},{revision:"98249b587395473693cf9eaf795191ac",url:"./tags/随记/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();