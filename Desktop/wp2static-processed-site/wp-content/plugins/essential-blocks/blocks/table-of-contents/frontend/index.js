!function(){function e(e,n){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,n){if(e){if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){o&&(e=o);var r=0,c=function(){};return{s:c,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==o.return||o.return()}finally{if(l)throw a}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}window.addEventListener("DOMContentLoaded",(function(){var t=function(e){if(!e)return e;var t=e.toString().toLowerCase().replace(/&(amp;)/g,"").replace(/&(mdash;)/g,"").replace(/\u2013|\u2014/g,"").replace(/[&]nbsp[;]/gi,"-").replace(/\s+/g,"-").replace(/[&\/\\#,^!+()$~%.'":*?<>{}@‘’”“]/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");return decodeURI(encodeURIComponent(t))};({init:function(){this._run(),this._scroll(),this._toggleCollapse(),this._scrollToTop(),this._hide(),this._show(),this._hideOnMobileView()},_toggleCollapse:function(){var t,n=e(document.querySelectorAll(".eb-toc-container"));try{for(n.s();!(t=n.n()).done;){container=t.value;var o="true"===container.getAttribute("data-sticky");"true"===container.getAttribute("data-collapsible")&&function(){var e=container.querySelector(".eb-toc-title"),t=container.querySelector(".eb-toc-wrapper");o||e.addEventListener("click",(function(){t.classList.toggle("hide-content")}))}()}}catch(e){n.e(e)}finally{n.f()}},_scrollToTop:function(){var t=document.querySelector(".eb-toc-container");if(t&&"true"==t.getAttribute("data-scroll-top")){var n=function(){c.classList.remove("show-scroll"),c.classList.add("hide-scroll")},o=function(){c.classList.remove("hide-scroll"),c.classList.add("show-scroll")},r=function(){document.body.scrollTop>30||document.documentElement.scrollTop>20?o():n()},c=document.createElement("span");c.setAttribute("class","eb-toc-go-top "),c.innerHTML=">",document.body.insertBefore(c,document.body.lastChild),c.addEventListener("click",(function(){window.scroll({top:0,left:0,behavior:"smooth"})}));var a,i=e(document.querySelectorAll(".eb-toc-container"));try{for(i.s();!(a=i.n()).done;)"true"===(t=a.value).getAttribute("data-scroll-top")?(window.addEventListener("scroll",r),o()):n()}catch(e){i.e(e)}finally{i.f()}}},_scroll:function(){var t,n=e(document.querySelectorAll(".eb-toc-wrapper"));try{for(n.s();!(t=n.n()).done;)node=t.value,"true"===node.getAttribute("data-smooth")&&node.querySelectorAll('a[href^="#"]').forEach((function(e){e.addEventListener("click",(function(e){var t=this.getAttribute("href").replace("#","");e.preventDefault(),document.getElementById(t).scrollIntoView({behavior:"smooth"})}))}))}catch(e){n.e(e)}finally{n.f()}},_hide:function(){var t,n=e(document.querySelectorAll(".eb-toc-close"));try{for(n.s();!(t=n.n()).done;)crossButton=t.value,crossButton.addEventListener("click",(function(){var e=crossButton.closest(".eb-toc-container");e.classList.add("eb-toc-content-hidden"),e.classList.remove("eb-toc-content-visible")}))}catch(e){n.e(e)}finally{n.f()}},_show:function(){var t,n=e(document.querySelectorAll(".eb-toc-button"));try{for(n.s();!(t=n.n()).done;)headerButton=t.value,headerButton.addEventListener("click",(function(){var e=headerButton.closest(".eb-toc-container");e.classList.remove("eb-toc-content-hidden"),e.classList.add("eb-toc-content-visible")}))}catch(e){n.e(e)}finally{n.f()}},_run:function(){var n,o=e(document.querySelectorAll(".eb-toc-container"));try{for(o.s();!(n=o.n()).done;){if(container=n.value,container){var r=container.style.border;window.ebTocBorder=r}var c=document.querySelector(".eb-toc-wrapper");c&&function(){var e=JSON.parse(c.getAttribute("data-headers")),n=JSON.parse(c.getAttribute("data-visible")),o=[];void 0!==n&&n.forEach((function(e,t){return!0===e?o.push("h"+(t+1)):null}));var r=null!==o?o.join(","):"",a=void 0!==r&&""!==r?document.body.querySelectorAll(r):document.body.querySelectorAll("h1, h2, h3, h4, h5, h6");void 0!==e&&0!==a.length&&e.forEach((function(e){var n=t(e.text);a.forEach((function(e){var o=t(e.textContent);0===n.localeCompare(o)&&(e.innerHTML='<span id="'.concat(o,'" class="eb-toc__heading-anchor"></span>').concat(e.innerHTML))}))}))}()}}catch(e){o.e(e)}finally{o.f()}},_hideOnMobileView:function(){var e=document.querySelector(".eb-toc-container");if(e){var t="true"===e.getAttribute("data-sticky"),n="true"==e.getAttribute("data-hide-mobile");t&&n&&window.screen.width<420&&(e.style.display="none")}}}).init()}))}();