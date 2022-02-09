"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 8923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _noticeId_)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/client/rider/components/templates/DetailPageLayout/DetailPageLayout.tsx
var DetailPageLayout = __webpack_require__(1092);
// EXTERNAL MODULE: ./src/client/rider/services/proxy/notice.ts
var notice = __webpack_require__(2784);
// EXTERNAL MODULE: ./src/client/common/utils/common.ts + 1 modules
var common = __webpack_require__(3092);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/client/rider/components/pages/notice/NoticeDetailPage.tsx







const NoticeDetailPage = () => {
  const router = (0,router_.useRouter)();
  const noticeId = router.query.noticeId;
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => {
    (async () => {
      const result = await notice/* default.get */.Z.get(noticeId);
      if ((0,common/* isFailedApiCall */.Zm)(result)) return;
      const data = {
        title: result.title,
        contents: result.contents,
        date: (result === null || result === void 0 ? void 0 : result.openAt) || (result === null || result === void 0 ? void 0 : result.createdAt)
      };
      setData(data);
    })();
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(DetailPageLayout/* default */.Z, {
    title: "\uACF5\uC9C0\uC0AC\uD56D",
    data: data
  });
};

/* harmony default export */ const notice_NoticeDetailPage = (NoticeDetailPage);
;// CONCATENATED MODULE: ./src/pages/rider/notice/[noticeId].tsx




const Index = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(notice_NoticeDetailPage, {});
};

/* harmony default export */ const _noticeId_ = (Index);

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
var __webpack_exports__ = __webpack_require__.X(0, [152,786,92,54,845,207,324,723,133,784], () => (__webpack_exec__(8923)));
module.exports = __webpack_exports__;

})();