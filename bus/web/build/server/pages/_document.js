"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 7485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyDocument)
/* harmony export */ });
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6859);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_common_constants_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5115);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // README
// styled-components가 적용되지 않는 이유는 styled-components가 적용 되기전에 그려져서 그렇다. 아래와 같이 적용되어야 한다.
// ref: https://dev.to/aprietof/nextjs--styled-components-the-really-simple-guide----101c



class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_0__.default {
  static async getInitialProps(ctx) {
    const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_2__.ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(App, _objectSpread({}, props)))
      });

      const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_0__.default.getInitialProps(ctx);
      return _objectSpread(_objectSpread({}, initialProps), {}, {
        styles: [initialProps.styles, sheet.getStyleElement()]
      });
    } finally {
      sheet.seal();
    }
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_0__.Html, {
      lang: "ko",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_0__.Head, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("meta", {
          charSet: "utf-8"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("meta", {
          name: "robots",
          content: "noindex, nofollow"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("link", {
          rel: "shortcut icon",
          type: "image/x-icon",
          href: `${_shared_common_constants_common__WEBPACK_IMPORTED_MODULE_3__/* .FAVICON_PATH */ .PU}/favicon.ico`
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("link", {
          rel: "apple-touch-icon",
          sizes: "144x144",
          href: `${_shared_common_constants_common__WEBPACK_IMPORTED_MODULE_3__/* .FAVICON_PATH */ .PU}/favicon-144x144.png`
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("link", {
          rel: "apple-touch-icon",
          href: `${_shared_common_constants_common__WEBPACK_IMPORTED_MODULE_3__/* .FAVICON_PATH */ .PU}/favicon.png`
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("meta", {
          name: "msapplication-TileColor",
          content: "#ffffff"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("meta", {
          name: "msapplication-TileImage",
          content: `${_shared_common_constants_common__WEBPACK_IMPORTED_MODULE_3__/* .FAVICON_PATH */ .PU}/favicon-144x144.png`
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("meta", {
          name: "theme-color",
          content: "#ffffff"
        }), this.props.styles[0], this.props.styles[1]]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("body", {
        style: {
          padding: 0,
          margin: 0
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_document__WEBPACK_IMPORTED_MODULE_0__.Main, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_document__WEBPACK_IMPORTED_MODULE_0__.NextScript, {})]
      })]
    });
  }

}

/***/ }),

/***/ 5115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m_": () => (/* binding */ SERVICE_NAME),
/* harmony export */   "Pk": () => (/* binding */ SERVER_PORT),
/* harmony export */   "e1": () => (/* binding */ SERVICE_PATH),
/* harmony export */   "PU": () => (/* binding */ FAVICON_PATH),
/* harmony export */   "ym": () => (/* binding */ COOKIE_PATH),
/* harmony export */   "HI": () => (/* binding */ AUTH_COOKIE_NAME)
/* harmony export */ });
/* unused harmony exports SERVER_DOMAIN, API_SERVICE_PATH, ASSETS_PATH, LIBS_PATH, UNAUTHORIZED_ACCESS_ROUTE, DEFAULT_BOARD_PAGE, DEFAULT_BOARD_LIMIT, DEFAULT_DETAIL_BOARD_LIMIT, DEFAULT_ALL_LIST_PARAMS */
const SERVICE_NAME = 'TAP!';
const SERVER_PORT = process.env.PORT || 11002;
const SERVER_DOMAIN = process && false ? '' : `http://localhost:${SERVER_PORT}`;
const SERVICE_PATH = '/bus/web';
const API_SERVICE_PATH = '/bus/api';
const ASSETS_PATH = `${SERVICE_PATH}/assets`;
const LIBS_PATH = `${SERVICE_PATH}/libs`;
const FAVICON_PATH = `${ASSETS_PATH}/favicon`;
const COOKIE_PATH = SERVICE_PATH || '/';
const AUTH_COOKIE_NAME = 'CID_AUT';
const UNAUTHORIZED_ACCESS_ROUTE = `${SERVICE_PATH}/unauthorized`;
const DEFAULT_BOARD_PAGE = 1;
const DEFAULT_BOARD_LIMIT = 20;
const DEFAULT_DETAIL_BOARD_LIMIT = 10;
const DEFAULT_ALL_LIST_PARAMS = {
  page: DEFAULT_BOARD_PAGE,
  limit: 1000
};

/***/ }),

/***/ 372:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 2538:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 2208:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6044:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 6098:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9914:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 1168:
/***/ ((module) => {

module.exports = require("styled-jsx/server");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [859], () => (__webpack_exec__(7485)));
module.exports = __webpack_exports__;

})();