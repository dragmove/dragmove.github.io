"use strict";
(() => {
var exports = {};
exports.id = 870;
exports.ids = [870];
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

/***/ 1836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ driver_terms)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/client/driver/components/templates/BasePageLayout/BasePageLayout.tsx
var BasePageLayout = __webpack_require__(9996);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/client/common/antd-modules.ts
var antd_modules = __webpack_require__(2710);
// EXTERNAL MODULE: ./src/client/driver/services/proxy/terms.ts
var terms = __webpack_require__(4991);
// EXTERNAL MODULE: ./src/client/common/utils/common.ts + 1 modules
var common = __webpack_require__(3092);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/client/common/components/atoms/SvgIcon/RightArrowIcon.tsx



const RightArrowIcon = ({
  width = 28,
  height = 28,
  onClick = null
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    style: {
      width,
      height
    },
    onClick: onClick,
    children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
      width: "100%",
      height: "100%",
      viewBox: "0 0 56 56",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M34.7845 27.9968L19.1406 12.3529L22.8529 8.64062L42.2091 27.9968L22.8529 47.3529L19.1406 43.6406L34.7845 27.9968Z",
        fill: "#969696"
      })
    })
  });
};

/* harmony default export */ const SvgIcon_RightArrowIcon = (RightArrowIcon);
;// CONCATENATED MODULE: ./src/client/driver/components/pages/terms/TermsPage.tsx











const TermsPage = () => {
  const router = (0,router_.useRouter)();
  const {
    0: termsList,
    1: setTermsList
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    (async () => {
      const result = await terms/* default.getList */.Z.getList();
      if ((0,common/* isFailedApiCall */.Zm)(result)) return;
      setTermsList(result);
    })();
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(BasePageLayout/* default */.Z, {
    title: "\uC57D\uAD00 \uBC0F \uC815\uCC45",
    children: /*#__PURE__*/jsx_runtime_.jsx(BasePageLayout/* BaseScrollLayout */.S, {
      children: termsList.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx(TermsCategoryItem, {
        onClick: () => {
          router.push(`terms/${item.termsResults[0].termsId}`);
        },
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(TermsCategoryTitle, {
          className: item.termsCategoryNameBoldYn === 'Y' && 'bold',
          children: [item.termsCategoryName, /*#__PURE__*/jsx_runtime_.jsx(SvgIcon_RightArrowIcon, {})]
        })
      }, item.termsCategoryId))
    })
  });
};

/* harmony default export */ const terms_TermsPage = (TermsPage);
const TermsCategoryItem = external_styled_components_default().div.withConfig({
  displayName: "TermsPage__TermsCategoryItem",
  componentId: "sc-bwghow-0"
})(["height:79px;border-bottom:1px solid #c2c2c2;margin:0px 24px;display:flex;justify-content:space-between;align-items:center;"]);
const TermsCategoryTitle = external_styled_components_default()(antd_modules/* Space */.T).withConfig({
  displayName: "TermsPage__TermsCategoryTitle",
  componentId: "sc-bwghow-1"
})(["width:100%;justify-content:space-between;font-size:22px;color:#000;&.bold{font-weight:600;}"]);
;// CONCATENATED MODULE: ./src/pages/driver/terms/index.tsx




const Index = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(terms_TermsPage, {});
};

/* harmony default export */ const driver_terms = (Index);

/***/ }),

/***/ 3206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ BasePath)
/* harmony export */ });
let BasePath;

(function (BasePath) {
  BasePath["NOTICE"] = "/fsi/notices/v1";
  BasePath["FAQ"] = "/fsi/faqs/v1";
  BasePath["TERM"] = "/fsi/terms/v1";
})(BasePath || (BasePath = {}));

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [786,92,54,845,996], () => (__webpack_exec__(1836)));
module.exports = __webpack_exports__;

})();