"use strict";
(() => {
var exports = {};
exports.id = 625;
exports.ids = [625];
exports.modules = {

/***/ 5446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _termsCategoryId_)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/client/rider/components/templates/DetailPageLayout/DetailPageLayout.tsx
var DetailPageLayout = __webpack_require__(1092);
// EXTERNAL MODULE: ./src/client/rider/services/proxy/terms.ts
var terms = __webpack_require__(9900);
// EXTERNAL MODULE: ./src/client/common/utils/common.ts + 1 modules
var common = __webpack_require__(3092);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/client/rider/components/pages/terms/TermsDetailPage.tsx







const TermsDetailPage = () => {
  const router = (0,router_.useRouter)();
  const serviceTargetCode = router.query.serviceTargetCode;
  const termsCategoryId = router.query.termsCategoryId;
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => {
    (async () => {
      var _result$termsDtos, _result$termsDtos2, _result$termsDtos3;

      const result = await terms/* default.getTerms */.Z.getTerms(termsCategoryId, serviceTargetCode);
      if ((0,common/* isFailedApiCall */.Zm)(result)) return;

      if (!result.termsDtos || result.termsDtos.length <= 0) {
        setData(null);
        return;
      }

      setData({
        title: (_result$termsDtos = result.termsDtos) === null || _result$termsDtos === void 0 ? void 0 : _result$termsDtos[0].title,
        contents: (_result$termsDtos2 = result.termsDtos) === null || _result$termsDtos2 === void 0 ? void 0 : _result$termsDtos2[0].contents,
        date: (_result$termsDtos3 = result.termsDtos) === null || _result$termsDtos3 === void 0 ? void 0 : _result$termsDtos3[0].startDate
      });
    })();
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(DetailPageLayout/* default */.Z, {
    onClick: () => router.back(),
    title: testData.termsCategoryName,
    data: data,
    showHeaderBorderBottom: true
  });
};

/* harmony default export */ const terms_TermsDetailPage = (TermsDetailPage);
const testData = {
  termsCategoryId: 1,
  termsCategoryName: '개인정보 처리 방침',
  termsDtos: [{
    termsId: 1,
    title: '서브 타이틀',
    contents: '이용자의 ‘동의를 기반으로 개인정보를 수집·이용 및 제공’하고 있으며, ‘이용자의 권리 (개인정보 자기결정권)를 적극적으로 보장’합니다. 회사는 정보통신서비스제공자가 준수하여야 하는 대한민국의 관계 법령 및 개인정보보호 규정, 가이드라인을 준수하고 있습니다.\n“개인정보처리방침”이란 이용자의 소중한 개인정보를 보호함으로써 이용자가 안심하고 서비스를 이용할 수 있도록 회사가 준수해야 할 지침을 의미합니다.',
    usedYn: true
  }]
};
;// CONCATENATED MODULE: ./src/pages/rider/terms/[serviceTargetCode]/[termsCategoryId].tsx




const Index = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(terms_TermsDetailPage, {});
};

/* harmony default export */ const _termsCategoryId_ = (Index);

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152,786,92,54,845,207,324,723,133,900], () => (__webpack_exec__(5446)));
module.exports = __webpack_exports__;

})();