"use strict";
(() => {
var exports = {};
exports.id = 225;
exports.ids = [225];
exports.modules = {

/***/ 4991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_services_ProxyBaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7845);
/* harmony import */ var _shared_driver_enums_basePath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3206);



class TermsService extends _common_services_ProxyBaseService__WEBPACK_IMPORTED_MODULE_0__/* .default */ .ZP {
  constructor() {
    super();
    super.setBasePath(_shared_driver_enums_basePath__WEBPACK_IMPORTED_MODULE_1__/* .BasePath.TERM */ .P.TERM);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new TermsService());

/***/ }),

/***/ 5955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _termsId_)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/client/driver/components/templates/DetailPageLayout/DetailPageLayout.tsx
var DetailPageLayout = __webpack_require__(4240);
// EXTERNAL MODULE: ./src/client/driver/services/proxy/terms.ts
var terms = __webpack_require__(4991);
// EXTERNAL MODULE: ./src/client/common/utils/common.ts + 1 modules
var common = __webpack_require__(3092);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/client/driver/components/pages/terms/TermsDetailPage.tsx







const TermsDetailPage = () => {
  const router = (0,router_.useRouter)();
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)(null);
  const termsId = router.query.termsId;
  (0,external_react_.useEffect)(() => {
    (async () => {
      const result = await terms/* default.get */.Z.get(termsId);
      if ((0,common/* isFailedApiCall */.Zm)(result)) return;
      setData(result);
    })();
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(DetailPageLayout/* default */.Z, {
    onClick: () => router.back(),
    title: data === null || data === void 0 ? void 0 : data.title,
    data: data
  });
};

/* harmony default export */ const terms_TermsDetailPage = (TermsDetailPage);
;// CONCATENATED MODULE: ./src/pages/driver/terms/[termsId].tsx




const Index = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(terms_TermsDetailPage, {});
};

/* harmony default export */ const _termsId_ = (Index);

/***/ }),

/***/ 7531:
/***/ ((module) => {

module.exports = require("@toast-ui/react-editor");

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

/***/ 3082:
/***/ ((module) => {

module.exports = require("isomorphic-dompurify");

/***/ }),

/***/ 2307:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152,786,92,54,845,207,723,996,254], () => (__webpack_exec__(5955)));
module.exports = __webpack_exports__;

})();