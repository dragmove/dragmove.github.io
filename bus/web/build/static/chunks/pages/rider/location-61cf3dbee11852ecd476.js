(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[518],{90385:function(e,t,n){"use strict";n(67294);var r=n(29163),o=n(85786),i=n(85893),s={CLOSE:"/assets/icons/icon_common_close-c_black-s_24x24.svg",BACK:"/assets/icons/icon_common_back-c_black-s_24x24.svg"};t.Z=function(e){var t=e.onClick,n=e.title,r=e.iconType,u=void 0===r?"CLOSE":r;return(0,i.jsxs)(c,{children:[(0,i.jsx)(a,{onClick:t,children:(0,i.jsx)("img",{src:(0,o.PD)(s[u])})}),(0,i.jsx)(l,{children:n})]})};var c=r.ZP.div.withConfig({displayName:"PageHeader__PageHeaderWrap",componentId:"sc-1kj46x-0"})(["display:flex;height:60px;align-items:center;"]),a=r.ZP.div.withConfig({displayName:"PageHeader__Icon",componentId:"sc-1kj46x-1"})(["padding:0px 16px;"]),l=r.ZP.div.withConfig({displayName:"PageHeader__Title",componentId:"sc-1kj46x-2"})(["font-weight:bold;font-size:16px;color:#161616;"])},68324:function(e,t,n){"use strict";n.d(t,{S:function(){return l}});n(67294);var r=n(90385),o=n(29163),i=n(85893);t.Z=function(e){var t=e.title,n=void 0===t?"":t,o=e.onClick,l=void 0===o?null:o,u=e.iconType,d=void 0===u?"CLOSE":u,p=e.children,f=e.hasHeader,h=void 0!==f&&f;return(0,i.jsxs)(s,{children:[h&&(0,i.jsx)(c,{children:(0,i.jsx)(r.Z,{title:n,onClick:l,iconType:d})}),(0,i.jsx)(a,{className:h?"hasHeader":"",children:p})]})};var s=o.ZP.div.withConfig({displayName:"BasePageLayout__Layout",componentId:"sc-o9os4v-0"})(["display:flex;flex-direction:column;height:100vh;background:#fff;font-size:14px;overflow:hidden;"]),c=o.ZP.div.withConfig({displayName:"BasePageLayout__Header",componentId:"sc-o9os4v-1"})(["width:100%;height:70px;background:#fff;z-index:1000;border-bottom:8px solid #f4f6fa;"]),a=o.ZP.div.withConfig({displayName:"BasePageLayout__Contents",componentId:"sc-o9os4v-2"})(["width:100%;display:flex;height:100%;flex-direction:column;&.hasHeader{height:calc(100% - 70px);}"]),l=function(e){return(0,i.jsx)(u,{children:e.children})},u=(0,o.ZP)("div").withConfig({displayName:"BasePageLayout___StyledDiv",componentId:"sc-o9os4v-3"})(["overflow:auto;"])},71891:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var r=n(67294),o=n(68324),i=n(29163),s=n(4942),c=n(15861),a=n(87757),l=n.n(a),u=n(9208),d=n(34054);function p(){return f.apply(this,arguments)}function f(){return(f=(0,c.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"MpsUBBo49QjqkNT0",e.next=3,(0,d.o)({url:"https://api-maps.cloud.toast.com/maps/v3.0/appkeys/".concat("MpsUBBo49QjqkNT0","/maps/styleinfo")}).then((function(e){return e.data.result.data.styleList}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=null;function x(e){return m.apply(this,arguments)}function m(){return(m=(0,c.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h){e.next=4;break}return e.next=3,p();case 3:h=e.sent;case 4:return e.abrupt("return",h.find((function(e){return e.styleName===t})).styleURL);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=n(85893);var v=function(e){var t=e.children,n=(0,r.useState)(!1),o=n[0],i=n[1];return(0,r.useEffect)((function(){i(!0)}),[]),o?t:(0,g.jsx)(g.Fragment,{})};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _={longitude:127.0347846,latitude:37.4931739,zoom:14},b=function(e){var t=(0,r.useState)(null),n=t[0],o=t[1],i=(0,r.useState)(_),s=i[0],a=i[1],d=function(){var e=(0,c.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,x("pastel_day");case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){d()}),[]),(0,g.jsx)(v,{children:(0,g.jsx)(u.ZP,j(j({},s),{},{width:"100vw",height:"100vh",onViewportChange:a,mapStyle:n}))})},w=n(85786),P=n(52710),O=function(e){var t=e.data;return(0,g.jsxs)(C,{children:[(0,g.jsxs)(k,{wrap:!1,children:[(0,g.jsx)(P.JX,{flex:"none",className:"title",children:"\ub3c4\ucc29\uc9c0"}),(0,g.jsx)(P.JX,{flex:"auto",children:(0,g.jsx)(P.xv,{ellipsis:!0,children:t?"\uc0c8\ub204\ub9ac \uacf5\uc6d0":(0,g.jsx)(N,{})})})]}),(0,g.jsxs)(k,{wrap:!1,children:[(0,g.jsx)(P.JX,{flex:"none",className:"title",children:"\ub0b4\ub9ac\ub294 \uacf3"}),(0,g.jsx)(P.JX,{flex:"auto",children:(0,g.jsx)(P.xv,{ellipsis:!0,children:t?"\uc554\uc0c1\uc554\uc911\ud559\uad50\uc815\ubb38\uc0c1\uc554\uc911\ud559\uad50\uc815\ubb38\uc0c1\uc554\uc911\uc554\uc0c1\uc554\uc911\ud559\uad50\uc815\ubb38\uc0c1\uc554\uc911\ud559\uad50\uc815\ubb38\uc0c1\uc554\uc911":(0,g.jsx)(N,{})})})]}),(0,g.jsxs)(k,{wrap:!1,children:[(0,g.jsx)(P.JX,{flex:"none",className:"title",children:"\ub0b4\ub9ac\ub294 \uacf3 \ub3c4\ucc29 \uc2dc\uac04"}),(0,g.jsx)(P.JX,{flex:"auto",children:(0,g.jsx)(P.xv,{ellipsis:!0,children:t?"12\uc2dc 50\ubd84 \uc608\uc815":(0,g.jsx)(N,{})})})]})]})},C=i.ZP.div.withConfig({displayName:"BottomContentsTemplate__BottomContents",componentId:"sc-10qh3o4-0"})(["margin:18px 16px;font-weight:bold;.ant-col{display:flex;justify-content:end;align-items:center;&.title{padding-right:16px;font-weight:normal;justify-content:start;}}"]),k=(0,i.ZP)(P.X2).withConfig({displayName:"BottomContentsTemplate__BottomContentsItem",componentId:"sc-10qh3o4-1"})(["margin-bottom:5px;:last-child{margin-bottom:0px;}"]),N=i.ZP.div.withConfig({displayName:"BottomContentsTemplate__EmptyContents",componentId:"sc-10qh3o4-2"})(["width:130px;height:13px;background:#efefef;"]),Z=function(e){var t=e.message;return(0,g.jsx)(B,{children:(0,g.jsx)("div",{className:"contents",children:t})})},B=i.ZP.div.withConfig({displayName:"AlertTemplate__AlertWrap",componentId:"sc-rgnbc6-0"})(["position:fixed;bottom:248px;left:0;width:100%;display:flex;justify-content:center;align-items:center;.contents{display:flex;justify-content:center;align-items:center;height:40px;padding:0px 24px;background:rgba(0,0,0,0.8);border-radius:99px;color:#ffffff;}"]),S=function(){var e=(0,r.useState)([]),t=e[0];e[1];return(0,g.jsxs)(o.Z,{hasHeader:!1,children:[(0,g.jsx)(b,{}),(0,g.jsxs)(I,{children:[(0,g.jsxs)(E,{align:"middle",children:[(0,g.jsx)(P.JX,{span:8,children:(0,g.jsx)("img",{src:(0,w.PD)("/assets/icons/icon_vehicle.svg")})}),(0,g.jsx)(P.JX,{span:8,style:{textAlign:"center"},children:t?"TAP! Bus 3\ud638\ucc28":(0,g.jsx)(N,{})})]}),(0,g.jsx)(O,{data:t}),(0,g.jsx)(T,{children:"\ud0d1\uc2b9\ud55c \ucc28\ub7c9\uc758 \uc704\uce58\ub97c \uae30\uc900\uc73c\ub85c \uc548\ub0b4\ub4dc\ub9bd\ub2c8\ub2e4. GPS \uc218\uc2e0 \uc815\ubcf4\uc5d0 \ub530\ub77c \ucc28\ub7c9\uc758 \uc704\uce58\ub098 \uacbd\ub85c\uc5d0 \ucc28\uc774\uac00 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]}),(0,g.jsx)(Z,{message:"\ub124\ud2b8\uc6cc\ud06c \uc5f0\uacb0 \uc0c1\ud0dc\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694"})]})},I=i.ZP.div.withConfig({displayName:"LocationPage__BottomPanel",componentId:"sc-1coos7q-0"})(["position:fixed;bottom:0;left:0;width:100%;height:236px;background:#ffffff;"]),E=(0,i.ZP)(P.X2).withConfig({displayName:"LocationPage__BottomHeader",componentId:"sc-1coos7q-1"})(["height:48px;margin:0 16px;border-bottom:1px solid #efefef;color:#161616;font-weight:bold;"]),T=i.ZP.div.withConfig({displayName:"LocationPage__BottomFooter",componentId:"sc-1coos7q-2"})(["padding:17px 16px;background:#f8f8f8;font-size:12px;color:#969696;"]),D=function(){return(0,g.jsx)(S,{})}},34054:function(e,t,n){"use strict";n.d(t,{o:function(){return f},Z:function(){return h}});var r=n(15861),o=n(4942),i=n(87757),s=n.n(i),c=n(9669),a=n.n(c),l=n(85786);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}a().interceptors.response.use(void 0,(function(e){var t=e.config,n=null===e||void 0===e?void 0:e.response;return 406===(null===n||void 0===n?void 0:n.status)?Promise.reject(e):t&&t.retry?(t.__retryCount=t.__retryCount||0,t.__retryCount>=t.retry?Promise.reject(e):(t.__retryCount+=1,new Promise((function(e){setTimeout((function(){e(null)}),t.retryDelay||1)})).then((function(){return a()(t)})))):Promise.reject(e)}));var p={retry:5,retryDelay:1e3};function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p;return a()(d(d({},e),t))}var h=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r,o,i,c,a,u,p,h=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.method,o=t.path,i=t.data,c=t.params,a=h.length>1&&void 0!==h[1]?h[1]:{isServer:!1},u=h.length>2?h[2]:void 0,null!==(n=c)&&void 0!==n&&n.search&&(c=d({limit:c.limit,page:c.page},c.search)),e.next=6,f(d({method:r,url:(0,l.ub)(o,null===a||void 0===a?void 0:a.isServer),data:i,params:c},a),d({},u&&d({},u)));case 6:return p=e.sent,e.abrupt("return",p);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},97895:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rider/location",function(){return n(71891)}])}},function(e){e.O(0,[774,594,163,208,888,179],(function(){return t=97895,e(e.s=t);var t}));var t=e.O();_N_E=t}]);