"use strict";
(() => {
var exports = {};
exports.id = 370;
exports.ids = [370];
exports.modules = {

/***/ 9502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const PHASE = "dev";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PHASE);

/***/ }),

/***/ 7299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ privacy)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/client/rider/components/templates/DetailPageLayout/DetailPageLayout.tsx
var DetailPageLayout = __webpack_require__(1092);
// EXTERNAL MODULE: ./src/client/rider/services/proxy/terms.ts
var terms = __webpack_require__(9900);
// EXTERNAL MODULE: ./src/client/common/utils/common.ts + 1 modules
var common = __webpack_require__(3092);
// EXTERNAL MODULE: ./src/client/common/constants/phase.ts
var phase = __webpack_require__(9502);
// EXTERNAL MODULE: ./src/shared/common/enums/env.ts
var env = __webpack_require__(6552);
;// CONCATENATED MODULE: ./src/shared/common/enums/tapCodes/serviceTargetCodes.ts
let ServiceTargetCodes;

(function (ServiceTargetCodes) {
  ServiceTargetCodes["RIDER"] = "SVTG000001";
  ServiceTargetCodes["DRIVER"] = "SVTG000002";
  ServiceTargetCodes["TAP_MEMBER"] = "SVTG000003";
})(ServiceTargetCodes || (ServiceTargetCodes = {}));

let ServiceTargetNames;

(function (ServiceTargetNames) {
  ServiceTargetNames["SVTG000001"] = "\uC2B9\uAC1D";
  ServiceTargetNames["SVTG000002"] = "\uAE30\uC0AC";
  ServiceTargetNames["SVTG000003"] = "TAP! \uD68C\uC6D0";
})(ServiceTargetNames || (ServiceTargetNames = {}));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/client/rider/components/pages/privacy/PrivacyPage.tsx









/**
 * PHASE 에 따른 개인정보 처리방침 카테고리 ID 구하기
 */
const getTermsCategoryId = () => {
  switch (phase/* default */.Z) {
    case env/* PhaseType.DEV */.x.DEV:
    case env/* PhaseType.INT */.x.INT:
      return 140;

    case env/* PhaseType.STAGE */.x.STAGE:
      return 50;

    default:
      return 4;
  }
};

const PrivacyPage = () => {
  const termsCategoryId = getTermsCategoryId();
  const serviceTargetCode = ServiceTargetCodes.TAP_MEMBER;
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => {
    (async () => {
      const result = await terms/* default.getTerms */.Z.getTerms(termsCategoryId, serviceTargetCode);
      if ((0,common/* isFailedApiCall */.Zm)(result)) return;

      if (!result.termsDtos || result.termsDtos.length <= 0) {
        setData(null);
        return;
      }

      const data = {
        title: result.termsDtos[0].title,
        contents: result.termsDtos[0].contents,
        date: result.termsDtos[0].startDate
      };
      setData(data);
    })();
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(DetailPageLayout/* default */.Z, {
    title: '개인정보 처리방침',
    data: data
  });
};

/* harmony default export */ const privacy_PrivacyPage = (PrivacyPage);
;// CONCATENATED MODULE: ./src/pages/rider/privacy/index.tsx




const Index = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(privacy_PrivacyPage, {});
};

/* harmony default export */ const privacy = (Index);

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
var __webpack_exports__ = __webpack_require__.X(0, [152,786,92,54,845,207,324,723,133,900], () => (__webpack_exec__(7299)));
module.exports = __webpack_exports__;

})();