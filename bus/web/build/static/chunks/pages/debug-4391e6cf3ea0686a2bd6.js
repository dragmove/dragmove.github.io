(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94],{76489:function(e,r){"use strict";r.parse=function(e,r){if("string"!==typeof e)throw new TypeError("argument str must be a string");for(var i={},o=r||{},a=e.split(n),c=o.decode||t,l=0;l<a.length;l++){var u=a[l],d=u.indexOf("=");if(!(d<0)){var p=u.substr(0,d).trim(),h=u.substr(++d,u.length).trim();'"'==h[0]&&(h=h.slice(1,-1)),void 0==i[p]&&(i[p]=s(h,c))}}return i},r.serialize=function(e,r,t){var n=t||{},s=n.encode||i;if("function"!==typeof s)throw new TypeError("option encode is invalid");if(!o.test(e))throw new TypeError("argument name is invalid");var a=s(r);if(a&&!o.test(a))throw new TypeError("argument val is invalid");var c=e+"="+a;if(null!=n.maxAge){var l=n.maxAge-0;if(isNaN(l)||!isFinite(l))throw new TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(l)}if(n.domain){if(!o.test(n.domain))throw new TypeError("option domain is invalid");c+="; Domain="+n.domain}if(n.path){if(!o.test(n.path))throw new TypeError("option path is invalid");c+="; Path="+n.path}if(n.expires){if("function"!==typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");c+="; Expires="+n.expires.toUTCString()}n.httpOnly&&(c+="; HttpOnly");n.secure&&(c+="; Secure");if(n.sameSite){switch("string"===typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"strict":c+="; SameSite=Strict";break;case"none":c+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return c};var t=decodeURIComponent,i=encodeURIComponent,n=/; */,o=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function s(e,r){try{return r(e)}catch(t){return e}}},90843:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSP:function(){return m}});var i=t(4942),n=t(15861),o=t(29163),s=t(87757),a=t.n(s),c=t(67294),l=t(62286),u=t(85115),d=t(85786),p=t(29502),h=t(96552),f=t(85893);function v(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?v(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var m=!0;r.default=function(){var e=(0,c.useState)(""),r=e[0],t=e[1],i=(0,c.useState)("SUPER-ACCESS-TOKEN-FOR-TAP-RIDER"),o=i[0],s=i[1],v=(0,c.useState)(""),m=v[0],C=v[1];return(0,c.useEffect)((function(){t((0,l.parseCookies)()[u.HI]||"")}),[]),(0,f.jsxs)(y,{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Access Token \uc124\uc815"}),(0,f.jsxs)("form",{onSubmit:function(){var e=(0,n.Z)(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.preventDefault(),t=(0,d.wN)(m)||null,(0,l.setCookie)(null,u.HI,o,g({path:u.ym},(0,d.$K)(t)&&t>0&&{maxAge:t})),location.reload();case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),children:[(0,f.jsxs)(x,{children:["Access Token (from cookie) : ",r]}),(0,f.jsx)(w,{children:"CID_AUT cookie \uc124\uc815/\uc0ad\uc81c \ud14c\uc2a4\ud2b8"}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("label",{htmlFor:"access_token",children:"access token value : "}),(0,f.jsx)(j,{type:"text",name:"access_token",value:o,onChange:function(e){var r=e.currentTarget.value;s(r)},placeholder:""})]}),(0,f.jsxs)(S,{children:[(0,f.jsxs)("label",{htmlFor:"access_token_max_age",children:["access token max-age (second) :"," "]}),(0,f.jsx)(k,{type:"text",name:"access_token_max_age",value:m,onChange:function(e){var r=e.currentTarget.value;C(r)}})]}),(0,f.jsx)(b,{type:"submit",value:"CID_AUT cookie \uc124\uc815"})]})]})]}),(0,f.jsxs)(_,{children:[(0,f.jsx)("h2",{children:"\uba54\ub274"}),(0,f.jsxs)("ul",{children:[(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"FSI"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)("a",{href:"".concat(u.e1,"/driver/auth/notice"),children:"\uacf5\uc9c0\uc0ac\ud56d (Access Token required)"})}),(0,f.jsx)("li",{children:(0,f.jsx)("a",{href:"".concat(u.e1,"/driver/faq"),children:"\uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38 (FAQ)"})}),(0,f.jsx)("li",{children:(0,f.jsx)("a",{href:"".concat(u.e1,"/driver/terms"),children:"\uc57d\uad00"})})]})]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("strong",{children:"RIDER"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)("a",{href:"".concat(u.e1,"/rider/notice"),children:"\uacf5\uc9c0\uc0ac\ud56d"})}),(0,f.jsx)("li",{children:(0,f.jsx)("a",{href:"".concat(u.e1,"/rider/faq"),children:"\uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38 (FAQ)"})}),(0,f.jsx)("li",{children:(0,f.jsx)("a",{href:"".concat(u.e1,"/rider/terms/SVTG000003/").concat(p.Z===h.x.STAGE?"48":"138"),children:"\uc57d\uad00 \uc0c1\uc138"})}),(0,f.jsx)("li",{children:(0,f.jsx)("a",{href:"".concat(u.e1,"/rider/privacy"),children:"\uac1c\uc778\uc815\ubcf4 \ucc98\ub9ac\ubc29\uce68"})}),(0,f.jsx)("li",{children:(0,f.jsx)("a",{href:"".concat(u.e1,"/rider/auth/orders"),children:"\uc774\uc6a9 \ub0b4\uc5ed (Access Token required)"})}),(0,f.jsx)("li",{children:(0,f.jsx)("a",{href:"".concat(u.e1,"/rider/location"),children:"\uc704\uce58 \uacf5\uc720 (spec out in v1)"})})]})]})]})]})]})};var y=(0,o.ZP)("div").withConfig({displayName:"debug___StyledDiv",componentId:"sc-1vqsi3g-0"})(["padding:20px;"]),x=(0,o.ZP)("strong").withConfig({displayName:"debug___StyledStrong",componentId:"sc-1vqsi3g-1"})(["display:block;"]),w=(0,o.ZP)("h3").withConfig({displayName:"debug___StyledH",componentId:"sc-1vqsi3g-2"})(["margin-top:40px;"]),j=(0,o.ZP)("input").withConfig({displayName:"debug___StyledInput",componentId:"sc-1vqsi3g-3"})(["display:block;width:400px;"]),S=(0,o.ZP)("div").withConfig({displayName:"debug___StyledDiv2",componentId:"sc-1vqsi3g-4"})(["margin-top:10px;"]),k=(0,o.ZP)("input").withConfig({displayName:"debug___StyledInput2",componentId:"sc-1vqsi3g-5"})(["display:block;width:400px;"]),b=(0,o.ZP)("input").withConfig({displayName:"debug___StyledInput3",componentId:"sc-1vqsi3g-6"})(["margin-top:15px;"]),_=(0,o.ZP)("div").withConfig({displayName:"debug___StyledDiv3",componentId:"sc-1vqsi3g-7"})(["margin-top:50px;"])},29636:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/debug",function(){return t(90843)}])},62286:function(e,r,t){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var r,t=1,i=arguments.length;t<i;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)};Object.defineProperty(r,"__esModule",{value:!0}),r.destroyCookie=r.setCookie=r.parseCookies=void 0;var n=t(76489),o=t(69328),s=t(51022);function a(e,r){var t,i;return(null===(i=null===(t=null===e||void 0===e?void 0:e.req)||void 0===t?void 0:t.headers)||void 0===i?void 0:i.cookie)?n.parse(e.req.headers.cookie,r):s.isBrowser()?n.parse(document.cookie,r):{}}function c(e,r,t,a){var c,l;if(void 0===a&&(a={}),(null===(c=null===e||void 0===e?void 0:e.res)||void 0===c?void 0:c.getHeader)&&e.res.setHeader){if(null===(l=null===e||void 0===e?void 0:e.res)||void 0===l?void 0:l.finished)return console.warn('Not setting "'+r+'" cookie. Response has finished.'),console.warn("You should set cookie before res.send()"),{};var u=e.res.getHeader("Set-Cookie")||[];"string"===typeof u&&(u=[u]),"number"===typeof u&&(u=[]);var d=o.parse(u,{decodeValues:!1}),p=s.createCookie(r,t,a),h=[];d.forEach((function(e){if(!s.areCookiesEqual(e,p)){var r=n.serialize(e.name,e.value,i({encode:function(e){return e}},e));h.push(r)}})),h.push(n.serialize(r,t,a)),e.res.setHeader("Set-Cookie",h)}if(s.isBrowser()){if(a&&a.httpOnly)throw new Error("Can not set a httpOnly cookie in the browser.");document.cookie=n.serialize(r,t,a)}return{}}function l(e,r,t){return c(e,r,"",i(i({},t||{}),{maxAge:-1}))}r.parseCookies=a,r.setCookie=c,r.destroyCookie=l,r.default={set:c,get:a,destroy:l}},51022:function(e,r){"use strict";var t=this&&this.__assign||function(){return(t=Object.assign||function(e){for(var r,t=1,i=arguments.length;t<i;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)};function i(e,r){var t=Object.getOwnPropertyNames(e),i=Object.getOwnPropertyNames(r);if(t.length!==i.length)return!1;for(var n=0;n<t.length;n++){var o=t[n];if(e[o]!==r[o])return!1}return!0}Object.defineProperty(r,"__esModule",{value:!0}),r.areCookiesEqual=r.hasSameProperties=r.createCookie=r.isBrowser=void 0,r.isBrowser=function(){return"undefined"!==typeof window},r.createCookie=function(e,r,i){var n=i.sameSite;!0===n&&(n="strict"),void 0!==n&&!1!==n||(n="lax");var o=t(t({},i),{sameSite:n});return delete o.encode,t({name:e,value:r},o)},r.hasSameProperties=i,r.areCookiesEqual=function(e,r){var n=e.sameSite===r.sameSite;return"string"===typeof e.sameSite&&"string"===typeof r.sameSite&&(n=e.sameSite.toLowerCase()===r.sameSite.toLowerCase()),i(t(t({},e),{sameSite:void 0}),t(t({},r),{sameSite:void 0}))&&n}},69328:function(e){"use strict";var r={decodeValues:!0,map:!1,silent:!1};function t(e){return"string"===typeof e&&!!e.trim()}function i(e,i){var n=e.split(";").filter(t),o=n.shift().split("="),s=o.shift(),a=o.join("=");i=i?Object.assign({},r,i):r;try{a=i.decodeValues?decodeURIComponent(a):a}catch(l){console.error("set-cookie-parser encountered an error while decoding a cookie with value '"+a+"'. Set options.decodeValues to false to disable this feature.",l)}var c={name:s,value:a};return n.forEach((function(e){var r=e.split("="),t=r.shift().trimLeft().toLowerCase(),i=r.join("=");"expires"===t?c.expires=new Date(i):"max-age"===t?c.maxAge=parseInt(i,10):"secure"===t?c.secure=!0:"httponly"===t?c.httpOnly=!0:"samesite"===t?c.sameSite=i:c[t]=i})),c}function n(e,n){if(n=n?Object.assign({},r,n):r,!e)return n.map?{}:[];if(e.headers&&e.headers["set-cookie"])e=e.headers["set-cookie"];else if(e.headers){var o=e.headers[Object.keys(e.headers).find((function(e){return"set-cookie"===e.toLowerCase()}))];o||!e.headers.cookie||n.silent||console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),e=o}if(Array.isArray(e)||(e=[e]),(n=n?Object.assign({},r,n):r).map){return e.filter(t).reduce((function(e,r){var t=i(r,n);return e[t.name]=t,e}),{})}return e.filter(t).map((function(e){return i(e,n)}))}e.exports=n,e.exports.parse=n,e.exports.parseString=i,e.exports.splitCookiesString=function(e){if(Array.isArray(e))return e;if("string"!==typeof e)return[];var r,t,i,n,o,s=[],a=0;function c(){for(;a<e.length&&/\s/.test(e.charAt(a));)a+=1;return a<e.length}for(;a<e.length;){for(r=a,o=!1;c();)if(","===(t=e.charAt(a))){for(i=a,a+=1,c(),n=a;a<e.length&&"="!==(t=e.charAt(a))&&";"!==t&&","!==t;)a+=1;a<e.length&&"="===e.charAt(a)?(o=!0,a=n,s.push(e.substring(r,i)),r=a):a=i+1}else a+=1;(!o||a>=e.length)&&s.push(e.substring(r,e.length))}return s}}},function(e){e.O(0,[163,774,888,179],(function(){return r=29636,e(e.s=r);var r}));var r=e.O();_N_E=r}]);