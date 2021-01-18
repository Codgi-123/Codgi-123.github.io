"use strict";function _typeof5(t){return(_typeof5="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}"object"===("undefined"==typeof window?"undefined":_typeof(window))&&(window.Ribbons=function(){function u(t,o){return 1!==arguments.length?2===arguments.length?Math.random()*(o-t)+t:0:Array.isArray(t)?t[Math.round(u(0,t.length-1))]:u(0,t)}function o(){var t=Math.max(0,i.innerWidth||e.clientWidth||n.clientWidth||0),o=Math.max(0,i.innerHeight||e.clientHeight||n.clientHeight||0);return{width:t,height:o,ratio:t/o,centerx:t/2,centery:o/2,scrollx:Math.max(0,i.pageXOffset||e.scrollLeft||n.scrollLeft||0)-(e.clientLeft||0),scrolly:Math.max(0,i.pageYOffset||e.scrollTop||n.scrollTop||0)-(e.clientTop||0)}}function _(t,o){this.x=0,this.y=0,this.set(t,o)}var i=window,n=document.body,e=document.documentElement;function t(t){this._canvas=null,this._context=null,this._sto=null,this._width=0,this._height=0,this._scroll=0,this._ribbons=[],this._options={colorSaturation:"80%",colorBrightness:"60%",colorAlpha:.65,colorCycleSpeed:6,verticalPosition:"center",horizontalSpeed:150,ribbonCount:5,strokeSize:5,parallaxAmount:-.5,animateSections:!0},this._onDraw=this._onDraw.bind(this),this._onResize=this._onResize.bind(this),this._onScroll=this._onScroll.bind(this),this.setOptions(t),this.init()}return _.prototype={constructor:_,set:function(t,o){this.x=t||0,this.y=o||0},copy:function(t){return this.x=t.x||0,this.y=t.y||0,this},multiply:function(t,o){return this.x*=t||1,this.y*=o||1,this},divide:function(t,o){return this.x/=t||1,this.y/=o||1,this},add:function(t,o){return this.x+=t||0,this.y+=o||0,this},subtract:function(t,o){return this.x-=t||0,this.y-=o||0,this},clampX:function(t,o){return this.x=Math.max(t,Math.min(this.x,o)),this},clampY:function(t,o){return this.y=Math.max(t,Math.min(this.y,o)),this},flipX:function(){return this.x*=-1,this},flipY:function(){return this.y*=-1,this}},t.prototype={constructor:t,setOptions:function(t){if("object"===_typeof(t))for(var o in t)t.hasOwnProperty(o)&&(this._options[o]=t[o])},init:function(){try{this._canvas=document.createElement("canvas"),this._canvas.style.display="block",this._canvas.style.position="fixed",this._canvas.style.margin="0",this._canvas.style.padding="0",this._canvas.style.border="0",this._canvas.style.outline="0",this._canvas.style.left="0",this._canvas.style.top="0",this._canvas.style.width="100%",this._canvas.style.height="100%",this._canvas.style["z-index"]="-1",this._onResize(),this._context=this._canvas.getContext("2d"),this._context.clearRect(0,0,this._width,this._height),this._context.globalAlpha=this._options.colorAlpha,window.addEventListener("resize",this._onResize),window.addEventListener("scroll",this._onScroll),document.body.appendChild(this._canvas)}catch(t){return void console.warn("Canvas Context Error: "+t.toString())}this._onDraw()},addRibbon:function(){var t,o,i=5<Math.round(u(1,9))?"right":"left",n=1e3,e=this._width+200,s="right"==i?-200:e,h=Math.round(u(0,this._height));/^(top|min)$/i.test(this._options.verticalPosition)?h=200:/^(middle|center)$/i.test(this._options.verticalPosition)?h=this._height/2:/^(bottom|max)$/i.test(this._options.verticalPosition)&&(h=this._height-200);for(var r=[],a=new _(s,h),l=new _(s,h),c=null,p=Math.round(u(0,360)),y=0;!(n<=0);){if(n--,t=Math.round((+Math.random()-.2)*this._options.horizontalSpeed),o=Math.round((+Math.random()-.5)*(.25*this._height)),(c=new _).copy(l),"right"==i){if(c.add(t,o),l.x>=e)break}else if("left"==i&&(c.subtract(t,o),l.x<=-200))break;r.push({point1:new _(a.x,a.y),point2:new _(l.x,l.y),point3:c,color:p,delay:y,dir:i,alpha:0,phase:0}),a.copy(l),l.copy(c),y+=4,p+=this._options.colorCycleSpeed}this._ribbons.push(r)},_drawRibbonSection:function(t){if(t){if(1<=t.phase&&t.alpha<=0)return!0;t.delay<=0?(t.phase+=.02,t.alpha=+Math.sin(t.phase),t.alpha=t.alpha<=0?0:t.alpha,t.alpha=1<=t.alpha?1:t.alpha,this._options.animateSections&&(i=.1*Math.sin(1+t.phase*Math.PI/2),"right"===t.dir?(t.point1.add(i,0),t.point2.add(i,0),t.point3.add(i,0)):(t.point1.subtract(i,0),t.point2.subtract(i,0),t.point3.subtract(i,0)),t.point1.add(0,i),t.point2.add(0,i),t.point3.add(0,i))):t.delay-=.5;var o=this._options.colorSaturation,i=this._options.colorBrightness,i="hsla("+t.color+", "+o+", "+i+", "+t.alpha+" )";this._context.save(),0!==this._options.parallaxAmount&&this._context.translate(0,this._scroll*this._options.parallaxAmount),this._context.beginPath(),this._context.moveTo(t.point1.x,t.point1.y),this._context.lineTo(t.point2.x,t.point2.y),this._context.lineTo(t.point3.x,t.point3.y),this._context.fillStyle=i,this._context.fill(),0<this._options.strokeSize&&(this._context.lineWidth=this._options.strokeSize,this._context.strokeStyle=i,this._context.lineCap="round",this._context.stroke()),this._context.restore()}return!1},_onDraw:function(){for(var t=0,o=this._ribbons.length;t<o;++t)this._ribbons[t]||this._ribbons.splice(t,1);this._context.clearRect(0,0,this._width,this._height);for(var i=0;i<this._ribbons.length;++i){for(var n=this._ribbons[i],e=n.length,s=0,h=0;h<e;++h)this._drawRibbonSection(n[h])&&s++;e<=s&&(this._ribbons[i]=null)}this._ribbons.length<this._options.ribbonCount&&this.addRibbon(),requestAnimationFrame(this._onDraw)},_onResize:function(t){t=o(),this._width=t.width,this._height=t.height,this._canvas&&(this._canvas.width=this._width,this._canvas.height=this._height,this._context&&(this._context.globalAlpha=this._options.colorAlpha))},_onScroll:function(t){t=o(),this._scroll=t.scrolly}},t}()),new Ribbons({colorSaturation:"80%",colorBrightness:"60%",colorAlpha:.5,colorCycleSpeed:3,verticalPosition:"center",horizontalSpeed:200,ribbonCount:2,strokeSize:0,parallaxAmount:-.01,animateSections:!0});