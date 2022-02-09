"use strict";
(() => {
var exports = {};
exports.id = 318;
exports.ids = [318];
exports.modules = {

/***/ 2491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_services_ProxyBaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7845);
/* harmony import */ var _shared_driver_enums_basePath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3206);



class NoticeService extends _common_services_ProxyBaseService__WEBPACK_IMPORTED_MODULE_0__/* .default */ .ZP {
  constructor() {
    super();
    super.setBasePath(_shared_driver_enums_basePath__WEBPACK_IMPORTED_MODULE_1__/* .BasePath.NOTICE */ .P.NOTICE);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new NoticeService());

/***/ }),

/***/ 8025:
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
// EXTERNAL MODULE: ./src/client/driver/components/templates/DetailPageLayout/DetailPageLayout.tsx
var DetailPageLayout = __webpack_require__(4240);
// EXTERNAL MODULE: ./src/client/driver/services/proxy/notice.ts
var notice = __webpack_require__(2491);
// EXTERNAL MODULE: ./src/client/common/utils/common.ts + 1 modules
var common = __webpack_require__(3092);
// EXTERNAL MODULE: ./src/client/common/utils/appEventHandler.ts
var appEventHandler = __webpack_require__(4360);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/client/driver/components/pages/notice/NoticeDetailPage.tsx








const NoticeDetailPage = () => {
  const router = (0,router_.useRouter)();
  const noticeId = router.query.noticeId;
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => {
    appEventHandler/* AppEventHandler.setToolbar */.N.setToolbar('공지사항', false);

    (async () => {
      const result = await notice/* default.get */.Z.get(noticeId);
      if ((0,common/* isFailedApiCall */.Zm)(result)) return;
      const data = {
        title: result.title,
        contents: result.content,
        date: (result === null || result === void 0 ? void 0 : result.openAt) || (result === null || result === void 0 ? void 0 : result.createdAt)
      };
      setData(data);
    })();
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(DetailPageLayout/* default */.Z, {
    onClick: () => router.back(),
    title: '공지사항',
    data: data
  });
};

/* harmony default export */ const notice_NoticeDetailPage = (NoticeDetailPage);
;// CONCATENATED MODULE: ./src/pages/driver/auth/notice/[noticeId].tsx




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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152,786,92,54,845,207,723,996,360,254], () => (__webpack_exec__(8025)));
module.exports = __webpack_exports__;

})();