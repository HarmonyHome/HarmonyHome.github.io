// qq h5bp

// qq Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// qq Place any jQuery/helper plugins in here.

// qq Easing
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        //alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function (x, t, b, c, d) {
        return c*(t/=d)*t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
        return c*(t/=d)*t*t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t*t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t*t*t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
        return c/2*((t-=2)*t*t*t*t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    easeInBounce: function (x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
    }
});

// qq Purl
!function(a){"function"==typeof define&&define.amd?define(a):window.purl=a()}(function(){function f(a,c){for(var e=decodeURI(a),f=d[c?"strict":"loose"].exec(e),g={attr:{},param:{},seg:{}},h=14;h--;)g.attr[b[h]]=f[h]||"";return g.param.query=k(g.attr.query),g.param.fragment=k(g.attr.fragment),g.seg.path=g.attr.path.replace(/^\/+|\/+$/g,"").split("/"),g.seg.fragment=g.attr.fragment.replace(/^\/+|\/+$/g,"").split("/"),g.attr.base=g.attr.host?(g.attr.protocol?g.attr.protocol+"://"+g.attr.host:g.attr.host)+(g.attr.port?":"+g.attr.port:""):"",g}function g(b){var c=b.tagName;return"undefined"!=typeof c?a[c.toLowerCase()]:c}function h(a,b){if(0===a[b].length)return a[b]={};var c={};for(var d in a[b])c[d]=a[b][d];return a[b]=c,c}function i(a,b,c,d){var f=a.shift();if(f){var g=b[c]=b[c]||[];"]"==f?o(g)?""!==d&&g.push(d):"object"==typeof g?g[p(g).length]=d:g=b[c]=[b[c],d]:~f.indexOf("]")?(f=f.substr(0,f.length-1),!e.test(f)&&o(g)&&(g=h(b,c)),i(a,g,f,d)):(!e.test(f)&&o(g)&&(g=h(b,c)),i(a,g,f,d))}else o(b[c])?b[c].push(d):b[c]="object"==typeof b[c]?d:"undefined"==typeof b[c]?d:[b[c],d]}function j(a,b,c){if(~b.indexOf("]")){var d=b.split("[");i(d,a,"base",c)}else{if(!e.test(b)&&o(a.base)){var f={};for(var g in a.base)f[g]=a.base[g];a.base=f}""!==b&&l(a.base,b,c)}return a}function k(a){return n(String(a).split(/&|;/),function(a,b){try{b=decodeURIComponent(b.replace(/\+/g," "))}catch(c){}var d=b.indexOf("="),e=m(b),f=b.substr(0,e||d),g=b.substr(e||d,b.length);return g=g.substr(g.indexOf("=")+1,g.length),""===f&&(f=b,g=""),j(a,f,g)},{base:{}}).base}function l(a,b,c){var d=a[b];"undefined"==typeof d?a[b]=c:o(d)?d.push(c):a[b]=[d,c]}function m(a){for(var c,d,b=a.length,e=0;b>e;++e)if(d=a[e],"]"==d&&(c=!1),"["==d&&(c=!0),"="==d&&!c)return e}function n(a,b){for(var c=0,d=a.length>>0,e=arguments[2];d>c;)c in a&&(e=b.call(void 0,e,a[c],c,a)),++c;return e}function o(a){return"[object Array]"===Object.prototype.toString.call(a)}function p(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c);return b}function q(a,b){return 1===arguments.length&&a===!0&&(b=!0,a=void 0),b=b||!1,a=a||window.location.toString(),{data:f(a,b),attr:function(a){return a=c[a]||a,"undefined"!=typeof a?this.data.attr[a]:this.data.attr},param:function(a){return"undefined"!=typeof a?this.data.param.query[a]:this.data.param.query},fparam:function(a){return"undefined"!=typeof a?this.data.param.fragment[a]:this.data.param.fragment},segment:function(a){return"undefined"==typeof a?this.data.seg.path:(a=0>a?this.data.seg.path.length+a:a-1,this.data.seg.path[a])},fsegment:function(a){return"undefined"==typeof a?this.data.seg.fragment:(a=0>a?this.data.seg.fragment.length+a:a-1,this.data.seg.fragment[a])}}}var a={a:"href",img:"src",form:"action",base:"href",script:"src",iframe:"src",link:"href"},b=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","fragment"],c={anchor:"fragment"},d={strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/},e=/^[0-9]+$/;return q.jQuery=function(a){null!=a&&(a.fn.url=function(b){var c="";return this.length&&(c=a(this).attr(g(this[0]))||""),q(c,b)},a.url=q)},q.jQuery(window.jQuery),q});

// qq FlexSlider
!function(a){a.flexslider=function(b,c){var d=a(b),e=a.extend({},a.flexslider.defaults,c),f=e.namespace,g="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,h=g?"touchend":"click",i="vertical"===e.direction,j=e.reverse,k=e.itemWidth>0,l="fade"===e.animation,m=""!==e.asNavFor,n={};a.data(b,"flexslider",d),n={init:function(){d.animating=!1,d.currentSlide=e.startAt,d.animatingTo=d.currentSlide,d.atEnd=0===d.currentSlide||d.currentSlide===d.last,d.containerSelector=e.selector.substr(0,e.selector.search(" ")),d.slides=a(e.selector,d),d.container=a(d.containerSelector,d),d.count=d.slides.length,d.syncExists=a(e.sync).length>0,"slide"===e.animation&&(e.animation="swing"),d.prop=i?"top":"marginLeft",d.args={},d.manualPause=!1,d.transitions=!e.video&&!l&&e.useCSS&&function(){var a=document.createElement("div"),b=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var c in b)if(void 0!==a.style[b[c]])return d.pfx=b[c].replace("Perspective","").toLowerCase(),d.prop="-"+d.pfx+"-transform",!0;return!1}(),""!==e.controlsContainer&&(d.controlsContainer=a(e.controlsContainer).length>0&&a(e.controlsContainer)),""!==e.manualControls&&(d.manualControls=a(e.manualControls).length>0&&a(e.manualControls)),e.randomize&&(d.slides.sort(function(){return Math.round(Math.random())-.5}),d.container.empty().append(d.slides)),d.doMath(),m&&n.asNav.setup(),d.setup("init"),e.controlNav&&n.controlNav.setup(),e.directionNav&&n.directionNav.setup(),e.keyboard&&(1===a(d.containerSelector).length||e.multipleKeyboard)&&a(document).bind("keyup",function(a){var b=a.keyCode;if(!d.animating&&(39===b||37===b)){var c=39===b?d.getTarget("next"):37===b?d.getTarget("prev"):!1;d.flexAnimate(c,e.pauseOnAction)}}),e.mousewheel&&d.bind("mousewheel",function(a,b){a.preventDefault();var g=0>b?d.getTarget("next"):d.getTarget("prev");d.flexAnimate(g,e.pauseOnAction)}),e.pausePlay&&n.pausePlay.setup(),e.slideshow&&(e.pauseOnHover&&d.hover(function(){d.manualPlay||d.manualPause||d.pause()},function(){d.manualPause||d.manualPlay||d.play()}),e.initDelay>0?setTimeout(d.play,e.initDelay):d.play()),g&&e.touch&&n.touch(),(!l||l&&e.smoothHeight)&&a(window).bind("resize focus",n.resize),setTimeout(function(){e.start(d)},200)},asNav:{setup:function(){d.asNav=!0,d.animatingTo=Math.floor(d.currentSlide/d.move),d.currentItem=d.currentSlide,d.slides.removeClass(f+"active-slide").eq(d.currentItem).addClass(f+"active-slide"),d.slides.click(function(b){b.preventDefault();var c=a(this),f=c.index();a(e.asNavFor).data("flexslider").animating||c.hasClass("active")||(d.direction=d.currentItem<f?"next":"prev",d.flexAnimate(f,e.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){d.manualControls?n.controlNav.setupManual():n.controlNav.setupPaging()},setupPaging:function(){var i,b="thumbnails"===e.controlNav?"control-thumbs":"control-paging",c=1;if(d.controlNavScaffold=a('<ol class="'+f+"control-nav "+f+b+'"></ol>'),d.pagingCount>1)for(var j=0;j<d.pagingCount;j++)i="thumbnails"===e.controlNav?'<img src="'+d.slides.eq(j).attr("data-thumb")+'"/>':"<a>"+c+"</a>",d.controlNavScaffold.append("<li>"+i+"</li>"),c++;d.controlsContainer?a(d.controlsContainer).append(d.controlNavScaffold):d.append(d.controlNavScaffold),n.controlNav.set(),n.controlNav.active(),d.controlNavScaffold.delegate("a, img",h,function(b){b.preventDefault();var c=a(this),g=d.controlNav.index(c);c.hasClass(f+"active")||(d.direction=g>d.currentSlide?"next":"prev",d.flexAnimate(g,e.pauseOnAction))}),g&&d.controlNavScaffold.delegate("a","click touchstart",function(a){a.preventDefault()})},setupManual:function(){d.controlNav=d.manualControls,n.controlNav.active(),d.controlNav.live(h,function(b){b.preventDefault();var c=a(this),g=d.controlNav.index(c);c.hasClass(f+"active")||(d.direction=g>d.currentSlide?"next":"prev",d.flexAnimate(g,e.pauseOnAction))}),g&&d.controlNav.live("click touchstart",function(a){a.preventDefault()})},set:function(){var b="thumbnails"===e.controlNav?"img":"a";d.controlNav=a("."+f+"control-nav li "+b,d.controlsContainer?d.controlsContainer:d)},active:function(){d.controlNav.removeClass(f+"active").eq(d.animatingTo).addClass(f+"active")},update:function(b,c){d.pagingCount>1&&"add"===b?d.controlNavScaffold.append(a("<li><a>"+d.count+"</a></li>")):1===d.pagingCount?d.controlNavScaffold.find("li").remove():d.controlNav.eq(c).closest("li").remove(),n.controlNav.set(),d.pagingCount>1&&d.pagingCount!==d.controlNav.length?d.update(c,b):n.controlNav.active()}},directionNav:{setup:function(){var b=a('<ul class="'+f+'direction-nav"><li><a class="'+f+'prev" href="#">'+e.prevText+'</a></li><li><a class="'+f+'next" href="#">'+e.nextText+"</a></li></ul>");d.controlsContainer?(a(d.controlsContainer).append(b),d.directionNav=a("."+f+"direction-nav li a",d.controlsContainer)):(d.append(b),d.directionNav=a("."+f+"direction-nav li a",d)),n.directionNav.update(),d.directionNav.bind(h,function(b){b.preventDefault();var c=a(this).hasClass(f+"next")?d.getTarget("next"):d.getTarget("prev");d.flexAnimate(c,e.pauseOnAction)}),g&&d.directionNav.bind("click touchstart",function(a){a.preventDefault()})},update:function(){var a=f+"disabled";1===d.pagingCount?d.directionNav.addClass(a):e.animationLoop?d.directionNav.removeClass(a):0===d.animatingTo?d.directionNav.removeClass(a).filter("."+f+"prev").addClass(a):d.animatingTo===d.last?d.directionNav.removeClass(a).filter("."+f+"next").addClass(a):d.directionNav.removeClass(a)}},pausePlay:{setup:function(){var b=a('<div class="'+f+'pauseplay"><a></a></div>');d.controlsContainer?(d.controlsContainer.append(b),d.pausePlay=a("."+f+"pauseplay a",d.controlsContainer)):(d.append(b),d.pausePlay=a("."+f+"pauseplay a",d)),n.pausePlay.update(e.slideshow?f+"pause":f+"play"),d.pausePlay.bind(h,function(b){b.preventDefault(),a(this).hasClass(f+"pause")?(d.manualPause=!0,d.manualPlay=!1,d.pause()):(d.manualPause=!1,d.manualPlay=!0,d.play())}),g&&d.pausePlay.bind("click touchstart",function(a){a.preventDefault()})},update:function(a){"play"===a?d.pausePlay.removeClass(f+"pause").addClass(f+"play").text(e.playText):d.pausePlay.removeClass(f+"play").addClass(f+"pause").text(e.pauseText)}},touch:function(){function o(h){d.animating?h.preventDefault():1===h.touches.length&&(d.pause(),g=i?d.h:d.w,m=Number(new Date),f=k&&j&&d.animatingTo===d.last?0:k&&j?d.limit-(d.itemW+e.itemMargin)*d.move*d.animatingTo:k&&d.currentSlide===d.last?d.limit:k?(d.itemW+e.itemMargin)*d.move*d.currentSlide:j?(d.last-d.currentSlide+d.cloneOffset)*g:(d.currentSlide+d.cloneOffset)*g,a=i?h.touches[0].pageY:h.touches[0].pageX,c=i?h.touches[0].pageX:h.touches[0].pageY,b.addEventListener("touchmove",p,!1),b.addEventListener("touchend",q,!1))}function p(b){h=i?a-b.touches[0].pageY:a-b.touches[0].pageX,n=i?Math.abs(h)<Math.abs(b.touches[0].pageX-c):Math.abs(h)<Math.abs(b.touches[0].pageY-c),(!n||Number(new Date)-m>500)&&(b.preventDefault(),!l&&d.transitions&&(e.animationLoop||(h/=0===d.currentSlide&&0>h||d.currentSlide===d.last&&h>0?Math.abs(h)/g+2:1),d.setProps(f+h,"setTouch")))}function q(){if(b.removeEventListener("touchmove",p,!1),d.animatingTo===d.currentSlide&&!n&&null!==h){var k=j?-h:h,o=k>0?d.getTarget("next"):d.getTarget("prev");d.canAdvance(o)&&(Number(new Date)-m<550&&Math.abs(k)>50||Math.abs(k)>g/2)?d.flexAnimate(o,e.pauseOnAction):l||d.flexAnimate(d.currentSlide,e.pauseOnAction,!0)}b.removeEventListener("touchend",q,!1),a=null,c=null,h=null,f=null}var a,c,f,g,h,m,n=!1;b.addEventListener("touchstart",o,!1)},resize:function(){!d.animating&&d.is(":visible")&&(k||d.doMath(),l?n.smoothHeight():k?(d.slides.width(d.computedW),d.update(d.pagingCount),d.setProps()):i?(d.viewport.height(d.h),d.setProps(d.h,"setTotal")):(e.smoothHeight&&n.smoothHeight(),d.newSlides.width(d.computedW),d.setProps(d.computedW,"setTotal")))},smoothHeight:function(a){if(!i||l){var b=l?d:d.viewport;a?b.animate({height:d.slides.eq(d.animatingTo).height()},a):b.height(d.slides.eq(d.animatingTo).height())}},sync:function(b){var c=a(e.sync).data("flexslider"),f=d.animatingTo;switch(b){case"animate":c.flexAnimate(f,e.pauseOnAction,!1,!0);break;case"play":c.playing||c.asNav||c.play();break;case"pause":c.pause()}}},d.flexAnimate=function(b,c,h,o,p){if(m&&1===d.pagingCount&&(d.direction=d.currentItem<b?"next":"prev"),!d.animating&&(d.canAdvance(b,p)||h)&&d.is(":visible")){if(m&&o){var q=a(e.asNavFor).data("flexslider");if(d.atEnd=0===b||b===d.count-1,q.flexAnimate(b,!0,!1,!0,p),d.direction=d.currentItem<b?"next":"prev",q.direction=d.direction,Math.ceil((b+1)/d.visible)-1===d.currentSlide||0===b)return d.currentItem=b,d.slides.removeClass(f+"active-slide").eq(b).addClass(f+"active-slide"),!1;d.currentItem=b,d.slides.removeClass(f+"active-slide").eq(b).addClass(f+"active-slide"),b=Math.floor(b/d.visible)}if(d.animating=!0,d.animatingTo=b,e.before(d),c&&d.pause(),d.syncExists&&!p&&n.sync("animate"),e.controlNav&&n.controlNav.active(),k||d.slides.removeClass(f+"active-slide").eq(b).addClass(f+"active-slide"),d.atEnd=0===b||b===d.last,e.directionNav&&n.directionNav.update(),b===d.last&&(e.end(d),e.animationLoop||d.pause()),l)g?(d.slides.eq(d.currentSlide).css({opacity:0,zIndex:1}),d.slides.eq(b).css({opacity:1,zIndex:2}),d.slides.unbind("webkitTransitionEnd transitionend"),d.slides.eq(d.currentSlide).bind("webkitTransitionEnd transitionend",function(){e.after(d)}),d.animating=!1,d.currentSlide=d.animatingTo):(d.slides.eq(d.currentSlide).fadeOut(e.animationSpeed,e.easing),d.slides.eq(b).fadeIn(e.animationSpeed,e.easing,d.wrapup));else{var s,t,u,r=i?d.slides.filter(":first").height():d.computedW;k?(s=e.itemWidth>d.w?2*e.itemMargin:e.itemMargin,u=(d.itemW+s)*d.move*d.animatingTo,t=u>d.limit&&1!==d.visible?d.limit:u):t=0===d.currentSlide&&b===d.count-1&&e.animationLoop&&"next"!==d.direction?j?(d.count+d.cloneOffset)*r:0:d.currentSlide===d.last&&0===b&&e.animationLoop&&"prev"!==d.direction?j?0:(d.count+1)*r:j?(d.count-1-b+d.cloneOffset)*r:(b+d.cloneOffset)*r,d.setProps(t,"",e.animationSpeed),d.transitions?(e.animationLoop&&d.atEnd||(d.animating=!1,d.currentSlide=d.animatingTo),d.container.unbind("webkitTransitionEnd transitionend"),d.container.bind("webkitTransitionEnd transitionend",function(){d.wrapup(r)})):d.container.animate(d.args,e.animationSpeed,e.easing,function(){d.wrapup(r)})}e.smoothHeight&&n.smoothHeight(e.animationSpeed)}},d.wrapup=function(a){l||k||(0===d.currentSlide&&d.animatingTo===d.last&&e.animationLoop?d.setProps(a,"jumpEnd"):d.currentSlide===d.last&&0===d.animatingTo&&e.animationLoop&&d.setProps(a,"jumpStart")),d.animating=!1,d.currentSlide=d.animatingTo,e.after(d)},d.animateSlides=function(){d.animating||d.flexAnimate(d.getTarget("next"))},d.pause=function(){clearInterval(d.animatedSlides),d.playing=!1,e.pausePlay&&n.pausePlay.update("play"),d.syncExists&&n.sync("pause")},d.play=function(){d.animatedSlides=setInterval(d.animateSlides,e.slideshowSpeed),d.playing=!0,e.pausePlay&&n.pausePlay.update("pause"),d.syncExists&&n.sync("play")},d.canAdvance=function(a,b){var c=m?d.pagingCount-1:d.last;return b?!0:m&&d.currentItem===d.count-1&&0===a&&"prev"===d.direction?!0:m&&0===d.currentItem&&a===d.pagingCount-1&&"next"!==d.direction?!1:a!==d.currentSlide||m?e.animationLoop?!0:d.atEnd&&0===d.currentSlide&&a===c&&"next"!==d.direction?!1:d.atEnd&&d.currentSlide===c&&0===a&&"next"===d.direction?!1:!0:!1},d.getTarget=function(a){return d.direction=a,"next"===a?d.currentSlide===d.last?0:d.currentSlide+1:0===d.currentSlide?d.last:d.currentSlide-1},d.setProps=function(a,b,c){var f=function(){var c=a?a:(d.itemW+e.itemMargin)*d.move*d.animatingTo,f=function(){if(k)return"setTouch"===b?a:j&&d.animatingTo===d.last?0:j?d.limit-(d.itemW+e.itemMargin)*d.move*d.animatingTo:d.animatingTo===d.last?d.limit:c;switch(b){case"setTotal":return j?(d.count-1-d.currentSlide+d.cloneOffset)*a:(d.currentSlide+d.cloneOffset)*a;case"setTouch":return j?a:a;case"jumpEnd":return j?a:d.count*a;case"jumpStart":return j?d.count*a:a;default:return a}}();return-1*f+"px"}();d.transitions&&(f=i?"translate3d(0,"+f+",0)":"translate3d("+f+",0,0)",c=void 0!==c?c/1e3+"s":"0s",d.container.css("-"+d.pfx+"-transition-duration",c)),d.args[d.prop]=f,(d.transitions||void 0===c)&&d.container.css(d.args)},d.setup=function(b){if(l)d.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(g?d.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+e.animationSpeed/1e3+"s ease",zIndex:1}).eq(d.currentSlide).css({opacity:1,zIndex:2}):d.slides.eq(d.currentSlide).fadeIn(e.animationSpeed,e.easing)),e.smoothHeight&&n.smoothHeight();else{var c,h;"init"===b&&(d.viewport=a('<div class="'+f+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(d).append(d.container),d.cloneCount=0,d.cloneOffset=0,j&&(h=a.makeArray(d.slides).reverse(),d.slides=a(h),d.container.empty().append(d.slides))),e.animationLoop&&!k&&(d.cloneCount=2,d.cloneOffset=1,"init"!==b&&d.container.find(".clone").remove(),d.container.append(d.slides.first().clone().addClass("clone")).prepend(d.slides.last().clone().addClass("clone"))),d.newSlides=a(e.selector,d),c=j?d.count-1-d.currentSlide+d.cloneOffset:d.currentSlide+d.cloneOffset,i&&!k?(d.container.height(200*(d.count+d.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){d.newSlides.css({display:"block"}),d.doMath(),d.viewport.height(d.h),d.setProps(c*d.h,"init")},"init"===b?100:0)):(d.container.width(200*(d.count+d.cloneCount)+"%"),d.setProps(c*d.computedW,"init"),setTimeout(function(){d.doMath(),d.newSlides.css({width:d.computedW,"float":"left",display:"block"}),e.smoothHeight&&n.smoothHeight()},"init"===b?100:0))}k||d.slides.removeClass(f+"active-slide").eq(d.currentSlide).addClass(f+"active-slide")},d.doMath=function(){var a=d.slides.first(),b=e.itemMargin,c=e.minItems,f=e.maxItems;d.w=d.width(),d.h=a.height(),d.boxPadding=a.outerWidth()-a.width(),k?(d.itemT=e.itemWidth+b,d.minW=c?c*d.itemT:d.w,d.maxW=f?f*d.itemT:d.w,d.itemW=d.minW>d.w?(d.w-b*c)/c:d.maxW<d.w?(d.w-b*f)/f:e.itemWidth>d.w?d.w:e.itemWidth,d.visible=Math.floor(d.w/(d.itemW+b)),d.move=e.move>0&&e.move<d.visible?e.move:d.visible,d.pagingCount=Math.ceil((d.count-d.visible)/d.move+1),d.last=d.pagingCount-1,d.limit=1===d.pagingCount?0:e.itemWidth>d.w?(d.itemW+2*b)*d.count-d.w-b:(d.itemW+b)*d.count-d.w-b):(d.itemW=d.w,d.pagingCount=d.count,d.last=d.count-1),d.computedW=d.itemW-d.boxPadding},d.update=function(a,b){d.doMath(),k||(a<d.currentSlide?d.currentSlide+=1:a<=d.currentSlide&&0!==a&&(d.currentSlide-=1),d.animatingTo=d.currentSlide),e.controlNav&&!d.manualControls&&("add"===b&&!k||d.pagingCount>d.controlNav.length?n.controlNav.update("add"):("remove"===b&&!k||d.pagingCount<d.controlNav.length)&&(k&&d.currentSlide>d.last&&(d.currentSlide-=1,d.animatingTo-=1),n.controlNav.update("remove",d.last))),e.directionNav&&n.directionNav.update()},d.addSlide=function(b,c){var f=a(b);d.count+=1,d.last=d.count-1,i&&j?void 0!==c?d.slides.eq(d.count-c).after(f):d.container.prepend(f):void 0!==c?d.slides.eq(c).before(f):d.container.append(f),d.update(c,"add"),d.slides=a(e.selector+":not(.clone)",d),d.setup(),e.added(d)},d.removeSlide=function(b){var c=isNaN(b)?d.slides.index(a(b)):b;d.count-=1,d.last=d.count-1,isNaN(b)?a(b,d.slides).remove():i&&j?d.slides.eq(d.last).remove():d.slides.eq(b).remove(),d.doMath(),d.update(c,"remove"),d.slides=a(e.selector+":not(.clone)",d),d.setup(),e.removed(d)},n.init()},a.flexslider.defaults={namespace:"flex-",selector:".slides > li.slide-panel",animation:"slide",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!1,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!1,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!1,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}},a.fn.flexslider=function(b){if(void 0===b&&(b={}),"object"==typeof b)return this.each(function(){var c=a(this),d=b.selector?b.selector:".slides > li",e=c.find(d);1===e.length?(e.fadeIn(400),b.start&&b.start(c)):void 0==c.data("flexslider")&&new a.flexslider(this,b)});var c=a(this).data("flexslider");switch(b){case"play":c.play();break;case"pause":c.pause();break;case"next":c.flexAnimate(c.getTarget("next"),!0);break;case"prev":case"previous":c.flexAnimate(c.getTarget("prev"),!0);break;default:"number"==typeof b&&c.flexAnimate(b,!0)}}}(jQuery);


// qq HTML5 Shiv
// HTML5 Shiv v3.6.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed

/*(function(l,f){function m(){var a=e.elements;return"string"==typeof a?a.split(" "):a}function i(a){var b=n[a[o]];b||(b={},h++,a[o]=h,n[h]=b);return b}function p(a,b,c){b||(b=f);if(g)return b.createElement(a);c||(c=i(b));b=c.cache[a]?c.cache[a].cloneNode():r.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);return b.canHaveChildren&&!s.test(a)?c.frag.appendChild(b):b}function t(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();
a.createElement=function(c){return!e.shivMethods?b.createElem(c):p(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/\w+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(e,b.frag)}function q(a){a||(a=f);var b=i(a);if(e.shivCSS&&!j&&!b.hasCSS){var c,d=a;c=d.createElement("p");d=d.getElementsByTagName("head")[0]||d.documentElement;c.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}</style>";
c=d.insertBefore(c.lastChild,d.firstChild);b.hasCSS=!!c}g||t(a,b);return a}var k=l.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,r=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,j,o="_html5shiv",h=0,n={},g;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";j="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||
"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}g=b}catch(d){g=j=!0}})();var e={elements:k.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",version:"3.6.2",shivCSS:!1!==k.shivCSS,supportsUnknownElements:g,shivMethods:!1!==k.shivMethods,type:"default",shivDocument:q,createElement:p,createDocumentFragment:function(a,b){a||(a=f);if(g)return a.createDocumentFragment();
for(var b=b||i(a),c=b.frag.cloneNode(),d=0,e=m(),h=e.length;d<h;d++)c.createElement(e[d]);return c}};l.html5=e;q(f)})(this,document);
*/

// qq HTML5 Print-shiv
// HTML5 Shiv v3.6.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed

/*(function(j,f){function s(a,b){var c=a.createElement("p"),m=a.getElementsByTagName("head")[0]||a.documentElement;c.innerHTML="x<style>"+b+"</style>";return m.insertBefore(c.lastChild,m.firstChild)}function o(){var a=d.elements;return"string"==typeof a?a.split(" "):a}function n(a){var b=t[a[u]];b||(b={},p++,a[u]=p,t[p]=b);return b}function v(a,b,c){b||(b=f);if(e)return b.createElement(a);c||(c=n(b));b=c.cache[a]?c.cache[a].cloneNode():y.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);
return b.canHaveChildren&&!z.test(a)?c.frag.appendChild(b):b}function A(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();a.createElement=function(c){return!d.shivMethods?b.createElem(c):v(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+o().join().replace(/\w+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(d,b.frag)}
function w(a){a||(a=f);var b=n(a);if(d.shivCSS&&!q&&!b.hasCSS)b.hasCSS=!!s(a,"article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}");e||A(a,b);return a}function B(a){for(var b,c=a.attributes,m=c.length,f=a.ownerDocument.createElement(l+":"+a.nodeName);m--;)b=c[m],b.specified&&f.setAttribute(b.nodeName,b.nodeValue);f.style.cssText=a.style.cssText;return f}function x(a){function b(){clearTimeout(d._removeSheetTimer);c&&c.removeNode(!0);
c=null}var c,f,d=n(a),e=a.namespaces,j=a.parentWindow;if(!C||a.printShived)return a;"undefined"==typeof e[l]&&e.add(l);j.attachEvent("onbeforeprint",function(){b();var g,i,d;d=a.styleSheets;for(var e=[],h=d.length,k=Array(h);h--;)k[h]=d[h];for(;d=k.pop();)if(!d.disabled&&D.test(d.media)){try{g=d.imports,i=g.length}catch(j){i=0}for(h=0;h<i;h++)k.push(g[h]);try{e.push(d.cssText)}catch(n){}}g=e.reverse().join("").split("{");i=g.length;h=RegExp("(^|[\\s,>+~])("+o().join("|")+")(?=[[\\s,>+~#.:]|$)","gi");
for(k="$1"+l+"\\:$2";i--;)e=g[i]=g[i].split("}"),e[e.length-1]=e[e.length-1].replace(h,k),g[i]=e.join("}");e=g.join("{");i=a.getElementsByTagName("*");h=i.length;k=RegExp("^(?:"+o().join("|")+")$","i");for(d=[];h--;)g=i[h],k.test(g.nodeName)&&d.push(g.applyElement(B(g)));f=d;c=s(a,e)});j.attachEvent("onafterprint",function(){for(var a=f,c=a.length;c--;)a[c].removeNode();clearTimeout(d._removeSheetTimer);d._removeSheetTimer=setTimeout(b,500)});a.printShived=!0;return a}var r=j.html5||{},z=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
y=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,q,u="_html5shiv",p=0,t={},e;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";q="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}e=b}catch(d){e=q=!0}})();var d={elements:r.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",
version:"3.6.2",shivCSS:!1!==r.shivCSS,supportsUnknownElements:e,shivMethods:!1!==r.shivMethods,type:"default",shivDocument:w,createElement:v,createDocumentFragment:function(a,b){a||(a=f);if(e)return a.createDocumentFragment();for(var b=b||n(a),c=b.frag.cloneNode(),d=0,j=o(),l=j.length;d<l;d++)c.createElement(j[d]);return c}};j.html5=d;w(f);var D=/^$|\b(?:all|print)\b/,l="html5shiv",C=!e&&function(){var a=f.documentElement;return!("undefined"==typeof f.namespaces||"undefined"==typeof f.parentWindow||
"undefined"==typeof a.applyElement||"undefined"==typeof a.removeNode||"undefined"==typeof j.attachEvent)}();d.type+=" print";d.shivPrint=x;x(f)})(this,document);
*/

// qq Retina.js
// retina.js, a high-resolution image swapper (http://retinajs.com), v0.0.2

(function(){function t(e){this.path=e;var t=this.path.split("."),n=t.slice(0,t.length-1).join("."),r=t[t.length-1];this.at_2x_path=n+"@2x."+r}function n(e){this.el=e,this.path=new t(this.el.getAttribute("src"));var n=this;this.path.check_2x_variant(function(e){e&&n.swap()})}var e=typeof exports=="undefined"?window:exports;e.RetinaImagePath=t,t.confirmed_paths=[],t.prototype.is_external=function(){return!!this.path.match(/^https?\:/i)&&!this.path.match("//"+document.domain)},t.prototype.check_2x_variant=function(e){var n,r=this;if(this.is_external())return e(!1);if(this.at_2x_path in t.confirmed_paths)return e(!0);n=new XMLHttpRequest,n.open("HEAD",this.at_2x_path),n.onreadystatechange=function(){return n.readyState!=4?e(!1):n.status>=200&&n.status<=399?(t.confirmed_paths.push(r.at_2x_path),e(!0)):e(!1)},n.send()},e.RetinaImage=n,n.prototype.swap=function(e){function n(){t.el.complete?(t.el.setAttribute("width",t.el.offsetWidth),t.el.setAttribute("height",t.el.offsetHeight),t.el.setAttribute("src",e)):setTimeout(n,5)}typeof e=="undefined"&&(e=this.path.at_2x_path);var t=this;n()},e.devicePixelRatio>1&&(window.onload=function(){var e=document.getElementsByTagName("img"),t=[],r,i;for(r=0;r<e.length;r++)i=e[r],t.push(new n(i))})})();