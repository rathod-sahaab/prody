!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=5)}([function(t,e,i){},function(t,e,i){var n;
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */!function(s,o,r,a){"use strict";var l,h=["","webkit","Moz","MS","ms","o"],c=o.createElement("div"),u="function",p=Math.round,d=Math.abs,m=Date.now;function f(t,e,i){return setTimeout(w(t,i),e)}function g(t,e,i){return!!Array.isArray(t)&&(v(t,i[e],i),!0)}function v(t,e,i){var n;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==a)for(n=0;n<t.length;)e.call(i,t[n],n,t),n++;else for(n in t)t.hasOwnProperty(n)&&e.call(i,t[n],n,t)}function y(t,e,i){var n="DEPRECATED METHOD: "+e+"\n"+i+" AT \n";return function(){var e=new Error("get-stack-trace"),i=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",o=s.console&&(s.console.warn||s.console.log);return o&&o.call(s.console,n,i),t.apply(this,arguments)}}l="function"!=typeof Object.assign?function(t){if(t===a||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var n=arguments[i];if(n!==a&&null!==n)for(var s in n)n.hasOwnProperty(s)&&(e[s]=n[s])}return e}:Object.assign;var T=y((function(t,e,i){for(var n=Object.keys(e),s=0;s<n.length;)(!i||i&&t[n[s]]===a)&&(t[n[s]]=e[n[s]]),s++;return t}),"extend","Use `assign`."),E=y((function(t,e){return T(t,e,!0)}),"merge","Use `assign`.");function b(t,e,i){var n,s=e.prototype;(n=t.prototype=Object.create(s)).constructor=t,n._super=s,i&&l(n,i)}function w(t,e){return function(){return t.apply(e,arguments)}}function x(t,e){return typeof t==u?t.apply(e&&e[0]||a,e):t}function I(t,e){return t===a?e:t}function A(t,e,i){v(C(e),(function(e){t.addEventListener(e,i,!1)}))}function M(t,e,i){v(C(e),(function(e){t.removeEventListener(e,i,!1)}))}function S(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function L(t,e){return t.indexOf(e)>-1}function C(t){return t.trim().split(/\s+/g)}function P(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return-1}function z(t){return Array.prototype.slice.call(t,0)}function B(t,e,i){for(var n=[],s=[],o=0;o<t.length;){var r=e?t[o][e]:t[o];P(s,r)<0&&n.push(t[o]),s[o]=r,o++}return i&&(n=e?n.sort((function(t,i){return t[e]>i[e]})):n.sort()),n}function _(t,e){for(var i,n,s=e[0].toUpperCase()+e.slice(1),o=0;o<h.length;){if((n=(i=h[o])?i+s:e)in t)return n;o++}return a}var O=1;function X(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||s}var Y="ontouchstart"in s,D=_(s,"PointerEvent")!==a,N=Y&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),R=25,W=1,k=2,q=4,H=8,j=1,F=2,V=4,G=8,U=16,Z=F|V,K=G|U,J=Z|K,$=["x","y"],Q=["clientX","clientY"];function tt(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){x(t.options.enable,[t])&&i.handler(e)},this.init()}function et(t,e,i){var n=i.pointers.length,s=i.changedPointers.length,o=e&W&&n-s==0,r=e&(q|H)&&n-s==0;i.isFirst=!!o,i.isFinal=!!r,o&&(t.session={}),i.eventType=e,function(t,e){var i=t.session,n=e.pointers,s=n.length;i.firstInput||(i.firstInput=it(e));s>1&&!i.firstMultiple?i.firstMultiple=it(e):1===s&&(i.firstMultiple=!1);var o=i.firstInput,r=i.firstMultiple,l=r?r.center:o.center,h=e.center=nt(n);e.timeStamp=m(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=at(l,h),e.distance=rt(l,h),function(t,e){var i=e.center,n=t.offsetDelta||{},s=t.prevDelta||{},o=t.prevInput||{};e.eventType!==W&&o.eventType!==q||(s=t.prevDelta={x:o.deltaX||0,y:o.deltaY||0},n=t.offsetDelta={x:i.x,y:i.y});e.deltaX=s.x+(i.x-n.x),e.deltaY=s.y+(i.y-n.y)}(i,e),e.offsetDirection=ot(e.deltaX,e.deltaY);var c=st(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=c.x,e.overallVelocityY=c.y,e.overallVelocity=d(c.x)>d(c.y)?c.x:c.y,e.scale=r?(u=r.pointers,p=n,rt(p[0],p[1],Q)/rt(u[0],u[1],Q)):1,e.rotation=r?function(t,e){return at(e[1],e[0],Q)+at(t[1],t[0],Q)}(r.pointers,n):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,function(t,e){var i,n,s,o,r=t.lastInterval||e,l=e.timeStamp-r.timeStamp;if(e.eventType!=H&&(l>R||r.velocity===a)){var h=e.deltaX-r.deltaX,c=e.deltaY-r.deltaY,u=st(l,h,c);n=u.x,s=u.y,i=d(u.x)>d(u.y)?u.x:u.y,o=ot(h,c),t.lastInterval=e}else i=r.velocity,n=r.velocityX,s=r.velocityY,o=r.direction;e.velocity=i,e.velocityX=n,e.velocityY=s,e.direction=o}(i,e);var u,p;var f=t.element;S(e.srcEvent.target,f)&&(f=e.srcEvent.target);e.target=f}(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function it(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:p(t.pointers[i].clientX),clientY:p(t.pointers[i].clientY)},i++;return{timeStamp:m(),pointers:e,center:nt(e),deltaX:t.deltaX,deltaY:t.deltaY}}function nt(t){var e=t.length;if(1===e)return{x:p(t[0].clientX),y:p(t[0].clientY)};for(var i=0,n=0,s=0;s<e;)i+=t[s].clientX,n+=t[s].clientY,s++;return{x:p(i/e),y:p(n/e)}}function st(t,e,i){return{x:e/t||0,y:i/t||0}}function ot(t,e){return t===e?j:d(t)>=d(e)?t<0?F:V:e<0?G:U}function rt(t,e,i){i||(i=$);var n=e[i[0]]-t[i[0]],s=e[i[1]]-t[i[1]];return Math.sqrt(n*n+s*s)}function at(t,e,i){i||(i=$);var n=e[i[0]]-t[i[0]],s=e[i[1]]-t[i[1]];return 180*Math.atan2(s,n)/Math.PI}tt.prototype={handler:function(){},init:function(){this.evEl&&A(this.element,this.evEl,this.domHandler),this.evTarget&&A(this.target,this.evTarget,this.domHandler),this.evWin&&A(X(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&M(this.element,this.evEl,this.domHandler),this.evTarget&&M(this.target,this.evTarget,this.domHandler),this.evWin&&M(X(this.element),this.evWin,this.domHandler)}};var lt={mousedown:W,mousemove:k,mouseup:q},ht="mousedown",ct="mousemove mouseup";function ut(){this.evEl=ht,this.evWin=ct,this.pressed=!1,tt.apply(this,arguments)}b(ut,tt,{handler:function(t){var e=lt[t.type];e&W&&0===t.button&&(this.pressed=!0),e&k&&1!==t.which&&(e=q),this.pressed&&(e&q&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))}});var pt={pointerdown:W,pointermove:k,pointerup:q,pointercancel:H,pointerout:H},dt={2:"touch",3:"pen",4:"mouse",5:"kinect"},mt="pointerdown",ft="pointermove pointerup pointercancel";function gt(){this.evEl=mt,this.evWin=ft,tt.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}s.MSPointerEvent&&!s.PointerEvent&&(mt="MSPointerDown",ft="MSPointerMove MSPointerUp MSPointerCancel"),b(gt,tt,{handler:function(t){var e=this.store,i=!1,n=t.type.toLowerCase().replace("ms",""),s=pt[n],o=dt[t.pointerType]||t.pointerType,r="touch"==o,a=P(e,t.pointerId,"pointerId");s&W&&(0===t.button||r)?a<0&&(e.push(t),a=e.length-1):s&(q|H)&&(i=!0),a<0||(e[a]=t,this.callback(this.manager,s,{pointers:e,changedPointers:[t],pointerType:o,srcEvent:t}),i&&e.splice(a,1))}});var vt={touchstart:W,touchmove:k,touchend:q,touchcancel:H},yt="touchstart",Tt="touchstart touchmove touchend touchcancel";function Et(){this.evTarget=yt,this.evWin=Tt,this.started=!1,tt.apply(this,arguments)}function bt(t,e){var i=z(t.touches),n=z(t.changedTouches);return e&(q|H)&&(i=B(i.concat(n),"identifier",!0)),[i,n]}b(Et,tt,{handler:function(t){var e=vt[t.type];if(e===W&&(this.started=!0),this.started){var i=bt.call(this,t,e);e&(q|H)&&i[0].length-i[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:"touch",srcEvent:t})}}});var wt={touchstart:W,touchmove:k,touchend:q,touchcancel:H},xt="touchstart touchmove touchend touchcancel";function It(){this.evTarget=xt,this.targetIds={},tt.apply(this,arguments)}function At(t,e){var i=z(t.touches),n=this.targetIds;if(e&(W|k)&&1===i.length)return n[i[0].identifier]=!0,[i,i];var s,o,r=z(t.changedTouches),a=[],l=this.target;if(o=i.filter((function(t){return S(t.target,l)})),e===W)for(s=0;s<o.length;)n[o[s].identifier]=!0,s++;for(s=0;s<r.length;)n[r[s].identifier]&&a.push(r[s]),e&(q|H)&&delete n[r[s].identifier],s++;return a.length?[B(o.concat(a),"identifier",!0),a]:void 0}b(It,tt,{handler:function(t){var e=wt[t.type],i=At.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:"touch",srcEvent:t})}});var Mt=2500,St=25;function Lt(){tt.apply(this,arguments);var t=w(this.handler,this);this.touch=new It(this.manager,t),this.mouse=new ut(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function Ct(t,e){t&W?(this.primaryTouch=e.changedPointers[0].identifier,Pt.call(this,e)):t&(q|H)&&Pt.call(this,e)}function Pt(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var n=this.lastTouches;setTimeout((function(){var t=n.indexOf(i);t>-1&&n.splice(t,1)}),Mt)}}function zt(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,n=0;n<this.lastTouches.length;n++){var s=this.lastTouches[n],o=Math.abs(e-s.x),r=Math.abs(i-s.y);if(o<=St&&r<=St)return!0}return!1}b(Lt,tt,{handler:function(t,e,i){var n="touch"==i.pointerType,s="mouse"==i.pointerType;if(!(s&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){if(n)Ct.call(this,e,i);else if(s&&zt.call(this,i))return;this.callback(t,e,i)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Bt=_(c.style,"touchAction"),_t=Bt!==a,Ot="auto",Xt="manipulation",Yt="none",Dt="pan-x",Nt="pan-y",Rt=function(){if(!_t)return!1;var t={},e=s.CSS&&s.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(i){t[i]=!e||s.CSS.supports("touch-action",i)})),t}();function Wt(t,e){this.manager=t,this.set(e)}Wt.prototype={set:function(t){"compute"==t&&(t=this.compute()),_t&&this.manager.element.style&&Rt[t]&&(this.manager.element.style[Bt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return v(this.manager.recognizers,(function(e){x(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))})),function(t){if(L(t,Yt))return Yt;var e=L(t,Dt),i=L(t,Nt);if(e&&i)return Yt;if(e||i)return e?Dt:Nt;if(L(t,Xt))return Xt;return Ot}(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var n=this.actions,s=L(n,Yt)&&!Rt[Yt],o=L(n,Nt)&&!Rt[Nt],r=L(n,Dt)&&!Rt[Dt];if(s){var a=1===t.pointers.length,l=t.distance<2,h=t.deltaTime<250;if(a&&l&&h)return}if(!r||!o)return s||o&&i&Z||r&&i&K?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var kt=1,qt=2,Ht=4,jt=8,Ft=jt,Vt=16;function Gt(t){this.options=l({},this.defaults,t||{}),this.id=O++,this.manager=null,this.options.enable=I(this.options.enable,!0),this.state=kt,this.simultaneous={},this.requireFail=[]}function Ut(t){return t&Vt?"cancel":t&jt?"end":t&Ht?"move":t&qt?"start":""}function Zt(t){return t==U?"down":t==G?"up":t==F?"left":t==V?"right":""}function Kt(t,e){var i=e.manager;return i?i.get(t):t}function Jt(){Gt.apply(this,arguments)}function $t(){Jt.apply(this,arguments),this.pX=null,this.pY=null}function Qt(){Jt.apply(this,arguments)}function te(){Gt.apply(this,arguments),this._timer=null,this._input=null}function ee(){Jt.apply(this,arguments)}function ie(){Jt.apply(this,arguments)}function ne(){Gt.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function se(t,e){return(e=e||{}).recognizers=I(e.recognizers,se.defaults.preset),new oe(t,e)}Gt.prototype={defaults:{},set:function(t){return l(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(g(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=Kt(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return g(t,"dropRecognizeWith",this)?this:(t=Kt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(g(t,"requireFailure",this))return this;var e=this.requireFail;return-1===P(e,t=Kt(t,this))&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(g(t,"dropRequireFailure",this))return this;t=Kt(t,this);var e=P(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,i=this.state;function n(i){e.manager.emit(i,t)}i<jt&&n(e.options.event+Ut(i)),n(e.options.event),t.additionalEvent&&n(t.additionalEvent),i>=jt&&n(e.options.event+Ut(i))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=32},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|kt)))return!1;t++}return!0},recognize:function(t){var e=l({},t);if(!x(this.options.enable,[this,e]))return this.reset(),void(this.state=32);this.state&(Ft|Vt|32)&&(this.state=kt),this.state=this.process(e),this.state&(qt|Ht|jt|Vt)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},b(Jt,Gt,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,n=e&(qt|Ht),s=this.attrTest(t);return n&&(i&H||!s)?e|Vt:n||s?i&q?e|jt:e&qt?e|Ht:qt:32}}),b($t,Jt,{defaults:{event:"pan",threshold:10,pointers:1,direction:J},getTouchAction:function(){var t=this.options.direction,e=[];return t&Z&&e.push(Nt),t&K&&e.push(Dt),e},directionTest:function(t){var e=this.options,i=!0,n=t.distance,s=t.direction,o=t.deltaX,r=t.deltaY;return s&e.direction||(e.direction&Z?(s=0===o?j:o<0?F:V,i=o!=this.pX,n=Math.abs(t.deltaX)):(s=0===r?j:r<0?G:U,i=r!=this.pY,n=Math.abs(t.deltaY))),t.direction=s,i&&n>e.threshold&&s&e.direction},attrTest:function(t){return Jt.prototype.attrTest.call(this,t)&&(this.state&qt||!(this.state&qt)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=Zt(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),b(Qt,Jt,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Yt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&qt)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),b(te,Gt,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[Ot]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,s=t.deltaTime>e.time;if(this._input=t,!n||!i||t.eventType&(q|H)&&!s)this.reset();else if(t.eventType&W)this.reset(),this._timer=f((function(){this.state=Ft,this.tryEmit()}),e.time,this);else if(t.eventType&q)return Ft;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===Ft&&(t&&t.eventType&q?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=m(),this.manager.emit(this.options.event,this._input)))}}),b(ee,Jt,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Yt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&qt)}}),b(ie,Jt,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Z|K,pointers:1},getTouchAction:function(){return $t.prototype.getTouchAction.call(this)},attrTest:function(t){var e,i=this.options.direction;return i&(Z|K)?e=t.overallVelocity:i&Z?e=t.overallVelocityX:i&K&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&i&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&d(e)>this.options.velocity&&t.eventType&q},emit:function(t){var e=Zt(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),b(ne,Gt,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Xt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,s=t.deltaTime<e.time;if(this.reset(),t.eventType&W&&0===this.count)return this.failTimeout();if(n&&s&&i){if(t.eventType!=q)return this.failTimeout();var o=!this.pTime||t.timeStamp-this.pTime<e.interval,r=!this.pCenter||rt(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,r&&o?this.count+=1:this.count=1,this._input=t,0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=f((function(){this.state=Ft,this.tryEmit()}),e.interval,this),qt):Ft}return 32},failTimeout:function(){return this._timer=f((function(){this.state=32}),this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Ft&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),se.VERSION="2.0.7",se.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[ee,{enable:!1}],[Qt,{enable:!1},["rotate"]],[ie,{direction:Z}],[$t,{direction:Z},["swipe"]],[ne],[ne,{event:"doubletap",taps:2},["tap"]],[te]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};function oe(t,e){var i;this.options=l({},se.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new((i=this).options.inputClass||(D?gt:N?It:Y?Lt:ut))(i,et),this.touchAction=new Wt(this,this.options.touchAction),re(this,!0),v(this.options.recognizers,(function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])}),this)}function re(t,e){var i,n=t.element;n.style&&(v(t.options.cssProps,(function(s,o){i=_(n.style,o),e?(t.oldCssProps[i]=n.style[i],n.style[i]=s):n.style[i]=t.oldCssProps[i]||""})),e||(t.oldCssProps={}))}oe.prototype={set:function(t){return l(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){var i;this.touchAction.preventDefaults(t);var n=this.recognizers,s=e.curRecognizer;(!s||s&&s.state&Ft)&&(s=e.curRecognizer=null);for(var o=0;o<n.length;)i=n[o],2===e.stopped||s&&i!=s&&!i.canRecognizeWith(s)?i.reset():i.recognize(t),!s&&i.state&(qt|Ht|jt)&&(s=e.curRecognizer=i),o++}},get:function(t){if(t instanceof Gt)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(g(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(g(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,i=P(e,t);-1!==i&&(e.splice(i,1),this.touchAction.update())}return this},on:function(t,e){if(t!==a&&e!==a){var i=this.handlers;return v(C(t),(function(t){i[t]=i[t]||[],i[t].push(e)})),this}},off:function(t,e){if(t!==a){var i=this.handlers;return v(C(t),(function(t){e?i[t]&&i[t].splice(P(i[t],e),1):delete i[t]})),this}},emit:function(t,e){this.options.domEvents&&function(t,e){var i=o.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var n=0;n<i.length;)i[n](e),n++}},destroy:function(){this.element&&re(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},l(se,{INPUT_START:W,INPUT_MOVE:k,INPUT_END:q,INPUT_CANCEL:H,STATE_POSSIBLE:kt,STATE_BEGAN:qt,STATE_CHANGED:Ht,STATE_ENDED:jt,STATE_RECOGNIZED:Ft,STATE_CANCELLED:Vt,STATE_FAILED:32,DIRECTION_NONE:j,DIRECTION_LEFT:F,DIRECTION_RIGHT:V,DIRECTION_UP:G,DIRECTION_DOWN:U,DIRECTION_HORIZONTAL:Z,DIRECTION_VERTICAL:K,DIRECTION_ALL:J,Manager:oe,Input:tt,TouchAction:Wt,TouchInput:It,MouseInput:ut,PointerEventInput:gt,TouchMouseInput:Lt,SingleTouchInput:Et,Recognizer:Gt,AttrRecognizer:Jt,Tap:ne,Pan:$t,Swipe:ie,Pinch:Qt,Rotate:ee,Press:te,on:A,off:M,each:v,merge:E,extend:T,assign:l,inherit:b,bindFn:w,prefixed:_}),(void 0!==s?s:"undefined"!=typeof self?self:{}).Hammer=se,(n=function(){return se}.call(e,i,e,t))===a||(t.exports=n)}(window,document)},function(t,e,i){"use strict";var n=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},s=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(n(this,t),!(e instanceof Node))throw"Can't initialize VanillaTilt because "+e+" is not a Node.";this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=e,this.settings=this.extendSettings(i),this.reverse=this.settings.reverse?-1:1,this.glare=t.isSettingTrue(this.settings.glare),this.glarePrerender=t.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=t.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=t.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.updateInitialPosition()}return t.isSettingTrue=function(t){return""===t||!0===t||1===t},t.prototype.getElementListener=function(){if(this.fullPageListening)return window.document;if("string"==typeof this.settings["mouse-event-element"]){var t=document.querySelector(this.settings["mouse-event-element"]);if(t)return t}return this.settings["mouse-event-element"]instanceof Node?this.settings["mouse-event-element"]:this.element},t.prototype.addEventListeners=function(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResize.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)},t.prototype.removeEventListeners=function(){this.elementListener.removeEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.removeEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.removeEventListener("mousemove",this.onMouseMoveBind),this.gyroscope&&window.removeEventListener("deviceorientation",this.onDeviceOrientationBind),(this.glare||this.fullPageListening)&&window.removeEventListener("resize",this.onWindowResizeBind)},t.prototype.destroy=function(){clearTimeout(this.transitionTimeout),null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.reset(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null},t.prototype.onDeviceOrientation=function(t){if(null!==t.gamma&&null!==t.beta){this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,null===this.gammazero?(this.gammazero=t.gamma,this.betazero=t.beta):(this.gammazero=(t.gamma+this.lastgammazero)/2,this.betazero=(t.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);var e=this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX,i=this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY,n=e/this.width,s=i/this.height,o=(t.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero))/n,r=(t.beta-(this.settings.gyroscopeMinAngleY+this.betazero))/s;null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event={clientX:o+this.left,clientY:r+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}},t.prototype.onMouseEnter=function(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()},t.prototype.onMouseMove=function(t){null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.updateBind)},t.prototype.onMouseLeave=function(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)},t.prototype.reset=function(){this.event={clientX:this.left+this.width/2,clientY:this.top+this.height/2},this.element&&this.element.style&&(this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"),this.resetGlare()},t.prototype.resetGlare=function(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")},t.prototype.updateInitialPosition=function(){if(0!==this.settings.startX||0!==this.settings.startY){this.onMouseEnter(),this.fullPageListening?this.event={clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:this.event={clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};var t=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=t,this.resetGlare()}},t.prototype.getValues=function(){var t=void 0,e=void 0;return this.fullPageListening?(t=this.event.clientX/this.clientWidth,e=this.event.clientY/this.clientHeight):(t=(this.event.clientX-this.left)/this.width,e=(this.event.clientY-this.top)/this.height),t=Math.min(Math.max(t,0),1),e=Math.min(Math.max(e,0),1),{tiltX:(this.reverse*(this.settings.max-t*this.settings.max*2)).toFixed(2),tiltY:(this.reverse*(e*this.settings.max*2-this.settings.max)).toFixed(2),percentageX:100*t,percentageY:100*e,angle:Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI)}},t.prototype.updateElementPosition=function(){var t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top},t.prototype.update=function(){var t=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:t.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform="rotate("+t.angle+"deg) translate(-50%, -50%)",this.glareElement.style.opacity=""+t.percentageY*this.settings["max-glare"]/100),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:t})),this.updateCall=null},t.prototype.prepareGlare=function(){if(!this.glarePrerender){var t=document.createElement("div");t.classList.add("js-tilt-glare");var e=document.createElement("div");e.classList.add("js-tilt-glare-inner"),t.appendChild(e),this.element.appendChild(t)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),this.glarePrerender||(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden","pointer-events":"none"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",width:2*this.element.offsetWidth+"px",height:2*this.element.offsetWidth+"px",transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}))},t.prototype.updateGlareSize=function(){this.glare&&Object.assign(this.glareElement.style,{width:""+2*this.element.offsetWidth,height:""+2*this.element.offsetWidth})},t.prototype.updateClientSize=function(){this.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},t.prototype.onWindowResize=function(){this.updateGlareSize(),this.updateClientSize()},t.prototype.setTransition=function(){var t=this;clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition="opacity "+this.settings.speed+"ms "+this.settings.easing),this.transitionTimeout=setTimeout((function(){t.element.style.transition="",t.glare&&(t.glareElement.style.transition="")}),this.settings.speed)},t.prototype.extendSettings=function(t){var e={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},i={};for(var n in e)if(n in t)i[n]=t[n];else if(this.element.hasAttribute("data-tilt-"+n)){var s=this.element.getAttribute("data-tilt-"+n);try{i[n]=JSON.parse(s)}catch(t){i[n]=s}}else i[n]=e[n];return i},t.init=function(e,i){e instanceof Node&&(e=[e]),e instanceof NodeList&&(e=[].slice.call(e)),e instanceof Array&&e.forEach((function(e){"vanillaTilt"in e||(e.vanillaTilt=new t(e,i))}))},t}();"undefined"!=typeof document&&(window.VanillaTilt=s,s.init(document.querySelectorAll("[data-tilt]"))),t.exports=s},,,function(t,e,i){"use strict";i.r(e);i(0);var n=document.getElementById("flicker");function s(){n.classList.toggle("clear"),setTimeout(s,500*Math.random()+1)}i(1);function o(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r,a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.tabs=document.querySelectorAll(e);for(var i=0;i<this.tabs.length-1;++i)this.tabs[i].nextTab=this.tabs[i+1];for(var n=1;n<this.tabs.length;++n)this.tabs[n].prevTab=this.tabs[n-1];this.tabs[0].prevTab=this.tabs[this.tabs.length-1],this.tabs[this.tabs.length-1].nextTab=this.tabs[0],this.mobileWindow=window.matchMedia("(max-width: 700px)"),this.previouslyActive=this.tabs[2],this.setActiveTab(this.tabs[0])}var e,i,n;return e=t,(i=[{key:"watchTabs",value:function(){var t=this;this.tabs.forEach((function(e){e.addEventListener("click",(function(e){t.setActiveTab(e.target)}))}))}},{key:"watchKeys",value:function(){var t=this;window.addEventListener("keydown",(function(e){switch(e.code){case"ArrowRight":t.setActiveTab(t.previouslyActive.nextTab);break;case"ArrowLeft":t.setActiveTab(t.previouslyActive.prevTab)}}))}},{key:"watchSwipes",value:function(){var t=this,e=new Hammer.Manager(document.querySelector("body"),{touchAction:"auto",inputClass:Hammer.SUPPORT_POINTER_EVENTS?Hammer.PointerEventInput:Hammer.TouchMouseInput,recognizers:[[Hammer.Swipe,{direction:Hammer.DIRECTION_HORIZONTAL}]]}),i=new Hammer.Swipe;e.add(i),e.on("swipeleft",(function(){t.setActiveTab(t.previouslyActive.nextTab)})),e.on("swiperight",(function(){t.setActiveTab(t.previouslyActive.prevTab)}))}},{key:"setActiveTab",value:function(t){t!=this.previouslyActive&&(this.previouslyActive.classList.remove("active"),t.classList.add("active"),this.mobileWindow.matches&&(navbar.style.transform="translateX(".concat(window.innerWidth/2-(t.offsetWidth/2+t.offsetLeft),"px)")),document.getElementById(t.dataset.toggles).classList.add("active"),document.getElementById(this.previouslyActive.dataset.toggles).classList.remove("active"),this.previouslyActive=t,"events"==t.innerHTML&&document.querySelector("#events .band").classList.add("active"))}}])&&o(e.prototype,i),n&&o(e,n),t}();function l(){var t=document.getElementById("selectelement");r=t.options[t.selectedIndex].id,document.getElementById("team_limit").value=r,document.getElementById("limit_lable").innerHTML=r}function h(){var t=new Date,e=new Date(2020,0,17),i=t.getTime(),n=e.getTime()-i,s=Math.floor(n/1e3),o=Math.floor(s/60),r=Math.floor(o/60),a=Math.floor(r/24);r=(r%=24)<10?"0"+r:r,o=(o%=60)<10?"0"+o:o,s=(s%=60)<10?"0"+s:s,n>0?(document.getElementById("days").textContent=a,document.getElementById("hours").textContent=r,document.getElementById("mins").textContent=o,document.getElementById("secs").textContent=s):(document.getElementById("days").textContent="00",document.getElementById("hours").textContent="00",document.getElementById("mins").textContent="00",document.getElementById("secs").textContent="00"),setTimeout(h,1e3)}var c,u;i(2);window.addEventListener("load",(function(){document.querySelector("header").style.height=document.querySelector(".tab").offsetHeight+4+"px",document.querySelector("#window>.band").classList.toggle("active"),VanillaTilt.init(document.querySelector("#banner .image img"),{reverse:!0,max:24,speed:400,glare:!0,scale:1.2,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45});var t,e,i=new a(".tab");i.watchTabs(),i.watchKeys(),i.watchSwipes(),document.querySelectorAll("#events .card").forEach((function(t){t.addEventListener("click",(function(t){t.target.classList.toggle("turned")}))})),function(t,e){var i=document.querySelector(t),n=i.getContext("2d");i.height=window.innerHeight,i.width=window.innerWidth;var s=e.split(""),o=21,r=Math.floor(i.width/o),a=new Array(r).fill(1);setInterval((function(){n.fillStyle="rgba(24, 24, 24, 0.14)",n.fillRect(0,0,i.width,i.height),n.fillStyle="#0F6",n.font=o+"px monospace";for(var t=0;t<a.length;t++){var e=s[Math.floor(Math.random()*s.length)];n.fillText(e,t*o,a[t]*o),a[t]*o>i.height&&Math.random()>.975&&(a[t]=0),a[t]++}}),50)}("#matrix-effect","TEAM ISTE"),s(),h(),l(),t=document.getElementById("make"),e=document.getElementById("join"),document.getElementById("joinTeam").style.display="none",document.getElementById("regTeam").style.display="block",document.getElementById("join").className="inactive",document.getElementById("make").className="active",t.addEventListener("click",(function(t){document.getElementById("joinTeam").style.display="none",document.getElementById("regTeam").style.display="block",document.getElementById("join").className="inactive",document.getElementById("make").className="active"})),e.addEventListener("click",(function(t){document.getElementById("regTeam").style.display="none",document.getElementById("joinTeam").style.display="block",document.getElementById("join").className="active",document.getElementById("make").className="inactive"}))})),c=document.getElementById("password"),(u=document.getElementById("conf_password")).addEventListener("input",(function(){c.value!=u.value?(document.getElementById("message").style.display="block",document.querySelector('input[type="submit"]').style.pointerEvents="none"):(document.getElementById("message").style.display="none",document.querySelector('input[type="submit"]').style.pointerEvents="all")})),c.addEventListener("input",(function(){c.value!=u.value?(document.getElementById("message").style.display="block",document.querySelector('#message ~ input[type="submit"]').style.pointerEvents="none"):(document.getElementById("message").style.display="none",document.querySelector('input[type="submit"]').style.pointerEvents="all")})),document.getElementById("select").addEventListener("change",(function(){l()}))}]);