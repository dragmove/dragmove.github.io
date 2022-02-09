"use strict";
(() => {
var exports = {};
exports.id = 94;
exports.ids = [94];
exports.modules = {

/***/ 9502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const PHASE = "dev";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PHASE);

/***/ }),

/***/ 1927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ debug),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "nookies"
const external_nookies_namespaceObject = require("nookies");
// EXTERNAL MODULE: ./src/shared/common/constants/common.ts
var common = __webpack_require__(5115);
// EXTERNAL MODULE: ./src/shared/common/utils/common.ts + 5 modules
var utils_common = __webpack_require__(5786);
// EXTERNAL MODULE: ./src/client/common/constants/phase.ts
var phase = __webpack_require__(9502);
// EXTERNAL MODULE: ./src/shared/common/enums/env.ts
var env = __webpack_require__(6552);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/pages/debug/index.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const Index = () => {
  const {
    0: accessToken,
    1: setAccessToken
  } = (0,external_react_.useState)('');
  const {
    0: value,
    1: setValue
  } = (0,external_react_.useState)('SUPER-ACCESS-TOKEN-FOR-TAP-RIDER');
  const {
    0: maxAge,
    1: setMaxAge
  } = (0,external_react_.useState)('');
  (0,external_react_.useEffect)(() => {
    setAccessToken((0,external_nookies_namespaceObject.parseCookies)()[common/* AUTH_COOKIE_NAME */.HI] || '');
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(_StyledDiv, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Access Token \uC124\uC815"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
        onSubmit: async e => {
          e.preventDefault();
          const sec = (0,utils_common/* parseInt10 */.wN)(maxAge) || null;
          (0,external_nookies_namespaceObject.setCookie)(null, common/* AUTH_COOKIE_NAME */.HI, value, _objectSpread({
            path: common/* COOKIE_PATH */.ym
          }, (0,utils_common/* isDefined */.$K)(sec) && sec > 0 && {
            maxAge: sec
          }));
          location.reload();
        },
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(_StyledStrong, {
          children: ["Access Token (from cookie) : ", accessToken]
        }), /*#__PURE__*/jsx_runtime_.jsx(_StyledH, {
          children: "CID_AUT cookie \uC124\uC815/\uC0AD\uC81C \uD14C\uC2A4\uD2B8"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "access_token",
              children: "access token value : "
            }), /*#__PURE__*/jsx_runtime_.jsx(_StyledInput, {
              type: "text",
              name: "access_token",
              value: value,
              onChange: e => {
                const {
                  value
                } = e.currentTarget;
                setValue(value);
              },
              placeholder: ""
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(_StyledDiv2, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
              htmlFor: "access_token_max_age",
              children: ["access token max-age (second) :", ' ']
            }), /*#__PURE__*/jsx_runtime_.jsx(_StyledInput2, {
              type: "text",
              name: "access_token_max_age",
              value: maxAge,
              onChange: e => {
                const {
                  value
                } = e.currentTarget;
                setMaxAge(value);
              }
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(_StyledInput3, {
            type: "submit",
            value: "CID_AUT cookie \uC124\uC815"
          })]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(_StyledDiv3, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "\uBA54\uB274"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
            children: "FSI"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: `${common/* SERVICE_PATH */.e1}/driver/auth/notice`,
                children: "\uACF5\uC9C0\uC0AC\uD56D (Access Token required)"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: `${common/* SERVICE_PATH */.e1}/driver/faq`,
                children: "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38 (FAQ)"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: `${common/* SERVICE_PATH */.e1}/driver/terms`,
                children: "\uC57D\uAD00"
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
            children: "RIDER"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: `${common/* SERVICE_PATH */.e1}/rider/notice`,
                children: "\uACF5\uC9C0\uC0AC\uD56D"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: `${common/* SERVICE_PATH */.e1}/rider/faq`,
                children: "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38 (FAQ)"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: `${common/* SERVICE_PATH */.e1}/rider/terms/SVTG000003/${phase/* default */.Z === env/* PhaseType.STAGE */.x.STAGE ? '48' : '138'}`,
                children: "\uC57D\uAD00 \uC0C1\uC138"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: `${common/* SERVICE_PATH */.e1}/rider/privacy`,
                children: "\uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: `${common/* SERVICE_PATH */.e1}/rider/auth/orders`,
                children: "\uC774\uC6A9 \uB0B4\uC5ED (Access Token required)"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: `${common/* SERVICE_PATH */.e1}/rider/location`,
                children: "\uC704\uCE58 \uACF5\uC720 (spec out in v1)"
              })
            })]
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ const debug = (Index);
async function getServerSideProps(ctx) {
  const isReal = "dev" === env/* PhaseType.REAL */.x.REAL;

  if (isReal) {
    ctx.res.statusCode = 302;
    ctx.res.setHeader('Location', common/* SERVICE_PATH */.e1 || '/');
  }

  return {
    props: {}
  };
}

var _StyledDiv = external_styled_components_default()("div").withConfig({
  displayName: "debug___StyledDiv",
  componentId: "sc-1vqsi3g-0"
})(["padding:20px;"]);

var _StyledStrong = external_styled_components_default()("strong").withConfig({
  displayName: "debug___StyledStrong",
  componentId: "sc-1vqsi3g-1"
})(["display:block;"]);

var _StyledH = external_styled_components_default()("h3").withConfig({
  displayName: "debug___StyledH",
  componentId: "sc-1vqsi3g-2"
})(["margin-top:40px;"]);

var _StyledInput = external_styled_components_default()("input").withConfig({
  displayName: "debug___StyledInput",
  componentId: "sc-1vqsi3g-3"
})(["display:block;width:400px;"]);

var _StyledDiv2 = external_styled_components_default()("div").withConfig({
  displayName: "debug___StyledDiv2",
  componentId: "sc-1vqsi3g-4"
})(["margin-top:10px;"]);

var _StyledInput2 = external_styled_components_default()("input").withConfig({
  displayName: "debug___StyledInput2",
  componentId: "sc-1vqsi3g-5"
})(["display:block;width:400px;"]);

var _StyledInput3 = external_styled_components_default()("input").withConfig({
  displayName: "debug___StyledInput3",
  componentId: "sc-1vqsi3g-6"
})(["margin-top:15px;"]);

var _StyledDiv3 = external_styled_components_default()("div").withConfig({
  displayName: "debug___StyledDiv3",
  componentId: "sc-1vqsi3g-7"
})(["margin-top:50px;"]);

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2047:
/***/ ((module) => {

module.exports = require("react-device-detect");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9914:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [786], () => (__webpack_exec__(1927)));
module.exports = __webpack_exports__;

})();