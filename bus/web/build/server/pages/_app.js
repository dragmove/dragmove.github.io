"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const PHASE = "dev";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PHASE);

/***/ }),

/***/ 7682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./src/client/common/constants/phase.ts
var phase = __webpack_require__(9502);
// EXTERNAL MODULE: ./src/shared/common/constants/common.ts
var common = __webpack_require__(5115);
// EXTERNAL MODULE: ./src/client/common/utils/common.ts + 1 modules
var utils_common = __webpack_require__(3092);
// EXTERNAL MODULE: ./src/shared/common/enums/env.ts
var env = __webpack_require__(6552);
;// CONCATENATED MODULE: external "mobx-react"
const external_mobx_react_namespaceObject = require("mobx-react");
;// CONCATENATED MODULE: external "mobx"
const external_mobx_namespaceObject = require("mobx");
;// CONCATENATED MODULE: ./src/client/common/store/env.ts



class EnvStore {
  constructor() {
    this.PHASE = phase/* default */.Z;
    (0,external_mobx_namespaceObject.makeAutoObservable)(this);
  }

}

/* harmony default export */ const store_env = (EnvStore);
;// CONCATENATED MODULE: ./src/client/common/store/stores.ts

const stores = {
  envStore: new store_env()
};
// EXTERNAL MODULE: ./src/shared/common/utils/common.ts + 5 modules
var common_utils_common = __webpack_require__(5786);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// https://github.com/zeit/next-plugins/issues/282#issuecomment-554786348









 // Ref: https://nextjs.org/docs/advanced-features/custom-app





const MyApp = props => {
  const {
    Component,
    pageProps,
    accessToken
  } = props;
  let userAgent = props.userAgent;

  if (false) {}

  if (accessToken) (0,common_utils_common/* setAxiosDefaultAuthorization */.TG)(accessToken);
  const Layout = Component.layout || Empty;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_mobx_react_namespaceObject.Provider, _objectSpread(_objectSpread({}, stores), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        children: [phase/* default */.Z !== env/* PhaseType.REAL */.x.REAL ? `[${phase/* default */.Z}] `.toUpperCase() : '', common/* SERVICE_NAME */.m_]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Layout, {
      path: props.pathname,
      isMobile: (0,utils_common/* isMobile */.tq)(userAgent),
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
    })]
  }));
};

MyApp.getInitialProps = ({
  ctx
}) => {
  var _ctx$req, _ctx$req2, _ctx$req2$cookies;

  return {
    pageProps: {},
    userAgent: ctx === null || ctx === void 0 ? void 0 : (_ctx$req = ctx.req) === null || _ctx$req === void 0 ? void 0 : _ctx$req.headers['user-agent'],
    pathname: ctx.pathname,
    accessToken: ctx === null || ctx === void 0 ? void 0 : (_ctx$req2 = ctx.req) === null || _ctx$req2 === void 0 ? void 0 : (_ctx$req2$cookies = _ctx$req2.cookies) === null || _ctx$req2$cookies === void 0 ? void 0 : _ctx$req2$cookies[common/* AUTH_COOKIE_NAME */.HI]
  };
};

/* harmony default export */ const _app = (MyApp);

const Empty = ({
  children
}) => /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
  children: children
});

/***/ }),

/***/ 9833:
/***/ ((module) => {

module.exports = require("antd/lib/button");

/***/ }),

/***/ 9069:
/***/ ((module) => {

module.exports = require("antd/lib/col");

/***/ }),

/***/ 6357:
/***/ ((module) => {

module.exports = require("antd/lib/collapse");

/***/ }),

/***/ 7074:
/***/ ((module) => {

module.exports = require("antd/lib/empty");

/***/ }),

/***/ 125:
/***/ ((module) => {

module.exports = require("antd/lib/message");

/***/ }),

/***/ 6794:
/***/ ((module) => {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ 6204:
/***/ ((module) => {

module.exports = require("antd/lib/notification");

/***/ }),

/***/ 8186:
/***/ ((module) => {

module.exports = require("antd/lib/row");

/***/ }),

/***/ 8193:
/***/ ((module) => {

module.exports = require("antd/lib/space");

/***/ }),

/***/ 5048:
/***/ ((module) => {

module.exports = require("antd/lib/typography");

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3879:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 2047:
/***/ ((module) => {

module.exports = require("react-device-detect");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [786,92], () => (__webpack_exec__(7682)));
module.exports = __webpack_exports__;

})();