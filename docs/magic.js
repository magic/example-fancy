"use strict";function b(a){for(var b=1;b<arguments.length;b++){var d=null==arguments[b]?{}:arguments[b],e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){c(a,b,d[b])})}return a}function c(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function d(a,b){if(null==a)return{};var c,d,f=e(a,b);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(d=0;d<g.length;d++)c=g[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(f[c]=a[c])}return f}function e(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function f(a,b){return k(a)||j(a,b)||g()}function g(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function j(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}function k(a){if(Array.isArray(a))return a}function l(a){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},l(a)}var m=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,i=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=i(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},m=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},n=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!m(c[b],a[b]))return!0;a[b]=c[b]}},o=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||n(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},p=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=i(d)))?a.setAttribute(b,d):a.removeAttribute(b)},q=function(a,c,d){var e=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name):document.createElement(a.name),f=a.props;for(var g in f)p(e,g,null,f[g],c,d);for(var h=0,j=a.children.length;h<j;h++)e.appendChild(q(a.children[h]=u(a.children[h]),c,d));return a.node=e},r=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(q(e=u(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,o=e.props,t=d.children,v=e.children,w=0,x=0,y=t.length-1,z=v.length-1;for(var A in g=g||"svg"===e.name,j(n,o))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==o[A]&&p(c,A,n[A],o[A],f,g);for(;x<=z&&w<=y&&null!=(l=r(t[w]))&&l===r(v[x]);)s(c,t[w].node,t[w],v[x]=u(v[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=r(t[y]))&&l===r(v[z]);)s(c,t[y].node,t[y],v[z]=u(v[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(q(v[x]=u(v[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=r(k=t[w]),m=r(v[x]=u(v[x],k)),C[l]||null!=m&&m===r(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,v[x],f,g),x++),w++):(l===m?(s(c,k.node,k,v[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,v[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,v[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==r(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(b,c){return b.type===a?((!c||t(c.lazy,b.lazy))&&((c=b.lazy.view(b.lazy)).lazy=b.lazy),c):b},v=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},w=function(a,e){return v(a,c,d,e,null,b)},x=function(a){return a.nodeType===b?w(a.nodeValue,a):v(a.nodeName.toLowerCase(),c,e.call(a.childNodes,x),a,null,1)},y=function(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push("object"===l(d)?d:w(d));return b=b||c,"function"==typeof a?a(b,g):v(a,b,g,null,b.key)};return{h:y,app:function app(a,b){var c={},d=!1,e=a.view,h=a.node,i=h&&x(h),j=a.subscriptions,l=[],m=function(a){p(this.actions[a.type],a)},n=function(a){return c!==a&&(c=a,j&&(l=o(l,k([j(c)]),p)),e&&!d&&g(q,d=!0)),c},p=(b||function(a){return a})(function(a,b,d){return"function"==typeof a?p(a(c,b),d||b):f(a)?"function"==typeof a[0]?p(a[0],"function"==typeof(a=a[1])?a(b):a,b):(k(a.slice(1)).map(function(a){a&&a[0](p,a[1],b)},n(a[0])),c):n(a)}),q=function(){d=!1,h=s(h.parentNode,h,i,i="string"==typeof(i=e(c))?w(i):i,m)};p(a.init)}}}(),o=m.h,h=m.app,i=function(a){return function(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},d=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===l(a)})};return d||(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),o(a,b,d)}},n=i("a"),a=i("div"),q=i("footer"),r=i("h1"),s=i("h2"),t=i("h3"),u=i("h4"),v=i("header"),w=i("img"),x=i("input"),y=i("label"),z=i("li"),A=i("link"),B=i("main"),C=i("meta"),D=i("nav"),E=i("p"),p=i("script"),F=i("section"),G=i("span"),H=i("title"),I=i("ul"),J={accordions:{},cookies:{},description:"Custom App Description",gdpr:{allowAllCookiesButtonText:"Allow all",allowCookieButtonText:"Allow selected",cookieButtonText:"Awesome.",cookieText:"We are using the following cookies on this page",denyCookieButtonText:"Deny all",noCookieButtonText:"Awesome.",noCookieText:"This page does neither save, collect, nor share any personal data about you.",show:!0,title:"Magic Privacy Information"},logo:"/example-fancy/img/logo.png",logotext:"@magic",menu:[{text:"home",to:"/"},{text:"about",to:"/#about"},{text:"contact",to:"/#contact"}],pageClass:{},pages:{"/example-fancy/":{accordions:{About:-1,About2:0},description:"custom description",title:"h1 indexpage"}},root:"/example-fancy/",title:"Custom App Title",url:"/example-fancy/"},K={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}},mapClickToGo:function mapClickToGo(a){return a.preventDefault(),a}},L=function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},c=b.items,d=b.key,e=b.title,f=b["class"],g=b.state;if(d&&c&&c.length){var h={class:"Accordion ".concat(d).concat(f?" ".concat(f):"")};return a(h,[e&&t(e),c.map(function(b,c){var e=b.title,f=b.text,h=g.accordions[d],i={class:"AccordionItem".concat(h===c?" open":"")},j={onclick:[W.accordion.toggle,{key:d,id:c}]};return a(i,[e&&u(j,e),f&&a({class:"content"},f)])})])}},M=function(b){var c=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return q({class:"Footer"},[a({class:"Container"},[c,a({class:"Credits"},["made with a few bits of ",R({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])]),N(b)])},N=function(b){var c=b.gdpr,d=b.cookies;if(c.show)return d=Object.entries(d),a({class:{Gdpr:!0,show:c.show}},[x({type:"checkbox",name:"show-hide",id:"show-hide",checked:!c.show}),a({class:"Container"},[c.title&&t(c.title),c.content&&E(c.content),d.length?[c.cookieText&&E(c.cookieText),I(d.sort(function(a){var b=f(a,2),c=b[0],d=b[1].required;return d?0:1}).map(function(a){var b=f(a,2),c=b[0],d=b[1],e=d.info,g=d.allowed;return z([x({type:"checkbox",title:"allow",checked:void 0!==g&&g,onchange:[W.gdpr.allow,{name:c}]}),y([c,e&&[" - ",e]])])}))]:E(c.noCookieText),d.length?[y({class:"button",for:"show-hide",onclick:[W.gdpr.close,{allowed:!0}]},c.allowAllCookiesButtonText),y({class:"button",for:"show-hide",onclick:W.gdpr.close},c.allowCookieButtonText),y({class:"button",for:"show-hide",onclick:[W.gdpr.close,{allowed:!1}]},c.denyCookieButtonText)]:y({class:"button",for:"show-hide",onclick:W.gdpr.close},c.noCookieButtonText)])])},O=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],c=a.logo,e=a.menu,f=a.logotext,g=d(a,["logo","menu","logotext"]);return c||e||f?v({class:"Header"},[(c||f)&&R({to:g.root,class:"Logo"},[c&&Q(c),f&&G(f)]),e&&S({state:g,items:e}),b]):void 0},P=function(b){var c=b.state,e=d(b,["state"]);"string"==typeof e&&(e={src:e});var f=e,g=f.src,h=f.heading,i=void 0===h?c.title:h,j=f.branding,k=void 0===j?c.description:j;if(g){var l={};return e["class"]?!e["class"].includes("Hero")&&(l["class"]="Hero ".concat(e["class"])):l["class"]="Hero",(e.width||e.height)&&(l.style=l.style||{},e.width&&(l.style.width=e.width),e.height&&(l.style.height=e.height)),a(l,[Q({class:"HeroImg",src:g}),i&&r(i),k&&a({class:"branding"},k)])}},Q=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),w(a)},R=function(a,b){var c=a.to,e=d(a,["to"]),f=e.href,g=e.text,h=e.nofollow,i=e.noreferrer,j=e.onclick,k=d(e,["href","text","nofollow","noreferrer","onclick"]);c=c||f||"",k.href=c;var l=c.startsWith("/");return l?k.onclick=[W.go,K.mapClickToGo]:(k.target="_blank",k.rel="noopener",h&&(k.rel+=" nofollow"),i&&(k.rel+=" noreferrer")),n(k,[g,b])},S=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},c=a.items,d=a["class"],e=void 0===d?"Menu":d,f=a.collapse,g=a.state;if(c.length){var h=g.url||"";return g.hash&&!h.endsWith(g.hash)&&(h+="#".concat(g.hash)),D({className:e},I(c.map(function(a){return T(b({},a,{url:h,state:g,collapse:void 0===f||f}))})))}},T=function(a){var c=a.text,e=a.items,f=void 0===e?[]:e,g=a.url,h=a.state,i=a.parentTo,j=void 0===i?void 0:i,k=a.collapse,l=d(a,["text","items","url","state","parentTo","collapse"]),m=h.root;if(l.to||c){var n={class:{}},o=l.to;o.startsWith("/#")&&(o=o.substr(1));var p=l.to[0],q="/"===p||"-"===p||"#"===p;if(j&&q)if("-"===p)o=j+o;else if("#"===p)o=j+o;else{var u=o.split("/")[1];if(u){var v=j.endsWith("/".concat(u,"/"));!v&&q&&(o=j+o)}}var r=o.startsWith(m);m&&q&&!r&&(o=m+o),l.to=o.replace(/\/\//g,"/");var s=g&&g.includes(l.to);g.endsWith(l.to)&&(n["class"].active=!0);var t=[];return(f.length&&s||!k)&&(t=I(f.map(function(a){return T(b({parentTo:l.to,url:g,state:h,collapse:k},a))}))),z(n,[l.to?R(l,c):G(l,c),t])}},U=function(b){var c=b.page,d=b.state;c=c?c(d):"404 - not found";var e={id:"Magic",class:d.pageClass};return B(e,a({class:{Wrapper:!0}},V({state:d,page:c})))},V=function(b){var c=b.page,d=b.state;return[O(d),a({class:"Page"},c),M(d,a({class:"Menus"},[a({class:"Child Info"},[s("@magic"),E("isomorphic web app generator."),E("faas based graphql api."),E("static pages or ssr."),E("deduplicates css selectors."),E("works without javascript.")]),a({class:"Child"},[s("Magic github organizations"),S({items:[{text:"@magic",to:"https://magic.github.io/"},{text:"@magic-modules",to:"https://magic-modules.github.io/"},{text:"@magic-themes",to:"https://magic-themes.github.io/"},{text:"@magic-libraries",to:"https://magic-libraries.github.io/"}],state:d})]),a({class:"Child"},[s("Magic npm organizations"),S({items:[{text:"@magic",to:"https://www.npmjs.com/org/magic"},{text:"@magic-modules",to:"https://www.npmjs.com/org/magic-modules"},{text:"@magic-themes",to:"https://www.npmjs.com/org/magic-themes"},{text:"@magic-libraries",to:"https://www.npmjs.com/org/magic-libraries"}],state:d})])]))]},W={accordion:{toggle:function toggle(a,c){var d=c.key,e=c.id;return a.accordions[d]=a.accordions[d]===e?-1:e,b({},a,{accordions:a.accordions})}},gdpr:{allow:function allow(a,c){return a.cookies[c.name].allowed=!0,b({},a)},close:function close(a,c){var d=c.allowed,e=a.cookies;return"boolean"==typeof d&&Object.entries(a.cookies).forEach(function(a){var c=f(a,2),g=c[0],h=c[1];e[g]=b({},h,{allowed:d})}),[b({},a,{gdpr:b({},a.gdpr,{show:!1}),cookies:e}),[X.gdpr.writeLocalStorage,{key:"magic-gdpr",value:{cookies:a.cookies||[],show:!1}}]]},load:function load(a){return[a,[X.gdpr.readLocalStorage,{key:"magic-gdpr",action:W.gdpr.show}]]},show:function show(a,c){return b({},a,{gdpr:b({},a.gdpr,c.value)})}},go:function go(a,c){var d=c.currentTarget.href.replace(window.location.origin,""),e=d.split("#"),g=f(e,2),h=g[0],i=g[1],j=void 0===i?"":i;if(h===a.url&&j===a.hash)return a;if(window.history.pushState({url:h,hash:j},"",d),j){var k=document.getElementById(j);k&&window.scrollTo(0,k.scrollTop),window.location.hash=j}else window.scrollTo(0,0);return b({},a,{url:h,hash:j,prev:a.url})},pop:function pop(a,c){var d=window.location,e=d.pathname,f=d.hash;return f=f.substring(1),c.state&&(e=c.state.url,f=c.state.hash),f?window.location.hash=f:window.scrollTo(0,0),b({},a,{url:e,hash:f})}},X={gdpr:{readLocalStorage:function readLocalStorage(a,b){var c=b.key,d=b.action,e=window.localStorage||{},f=e[c];"undefined"!=typeof f&&(f=JSON.parse(f)),a(d,{key:c,value:f})},writeLocalStorage:function writeLocalStorage(a,b){var c=b.key,d=b.value,e=window.localStorage||{};e[c]=JSON.stringify(d)}}},Y={"/example-fancy/":function exampleFancy(a){return[P({state:a,src:"/example-fancy/img/hero.jpg"}),F({id:"about",class:"About"},[s("About Page on front page"),L({state:a,key:"About",title:"About",class:"left",items:[{title:"h2 one",text:"content one"},{title:"h2 two",text:"content two"},{title:"h2 three",text:[E("Content field three."),E("Lets add some paragraphs."),E("Lets add some paragraphs."),E("Lets add some paragraphs.")]}]}),L({state:a,key:"About2",title:"FAQ",class:"right",items:[{title:"h2 one",text:"content one"},{title:"h2 two",text:"content two"},{title:"h2 three",text:[E("Content field three."),E("Lets add some paragraphs."),E("Lets add some paragraphs."),E("Lets add some paragraphs.")]}]})])]},"/example-fancy/404/":function exampleFancy404(){return a("404 - not found")}};h({init:function init(){return W.gdpr.load(b({},J,{url:window.location.pathname}))},subscriptions:function subscriptions(){return[[K.listenPopState,W.pop]]},view:function view(a){var b=Y[a.url]?a.url:"/404/",c=Y[b];return a.pages&&a.pages[b]&&Object.keys(a.pages[b]).forEach(function(c){a[c]=a.pages[b][c]}),U({page:c,state:a})},node:document.getElementById("Magic")});