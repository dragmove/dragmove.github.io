"use strict";
(() => {
var exports = {};
exports.id = 666;
exports.ids = [666];
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

/***/ 9141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ auth_notice)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/client/driver/components/templates/BasePageLayout/BasePageLayout.tsx
var BasePageLayout = __webpack_require__(9996);
// EXTERNAL MODULE: ./src/client/common/antd-modules.ts
var antd_modules = __webpack_require__(2710);
// EXTERNAL MODULE: ./src/shared/common/utils/common.ts + 5 modules
var common = __webpack_require__(5786);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/client/common/components/atoms/Empty/Empty.tsx





let EmptyTypes;

(function (EmptyTypes) {
  EmptyTypes["NOTICE"] = "NOTICE";
})(EmptyTypes || (EmptyTypes = {}));

const Empty = ({
  type,
  height = 56,
  description
}) => {
  const {
    0: config,
    1: setConfig
  } = (0,external_react_.useState)(null);

  const getConfig = () => {
    const config = {
      url: '',
      description: ''
    };

    switch (type) {
      case EmptyTypes.NOTICE:
        config.url = (0,common/* makeImageUrl */.PD)('/assets/images/img_empty_notice.svg');
        config.description = '등록된 공지가 없습니다.';
        break;
    }

    setConfig(config);
  };

  (0,external_react_.useEffect)(() => {
    void getConfig();
  }, []);
  if (!config) return null;
  return /*#__PURE__*/jsx_runtime_.jsx(antd_modules/* AntdEmpty */.f8, {
    image: config.url,
    imageStyle: {
      marginTop: 160,
      marginBottom: 16,
      height
    },
    description: description !== null && description !== void 0 ? description : /*#__PURE__*/jsx_runtime_.jsx(Description, {
      children: config.description
    })
  });
};

/* harmony default export */ const Empty_Empty = (Empty);
const Description = external_styled_components_default().span.withConfig({
  displayName: "Empty__Description",
  componentId: "sc-4kf8lq-0"
})(["color:#969696;"]);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/client/common/utils/formatDate.ts + 1 modules
var formatDate = __webpack_require__(2207);
// EXTERNAL MODULE: ./src/shared/common/enums/common.ts
var enums_common = __webpack_require__(3491);
// EXTERNAL MODULE: ./src/client/common/components/atoms/Icon/Icon.tsx
var Icon = __webpack_require__(7723);
;// CONCATENATED MODULE: ./src/client/driver/components/pages/notice/templates/NoticeListTemplate.tsx










const NoticeListTemplate = ({
  list,
  isFixed = false
}) => {
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: list.map(item => {
      const isNew = (0,formatDate/* isShowNew */.RD)(item.date);
      const className = `${isNew ? 'new' : ''}`;
      return /*#__PURE__*/jsx_runtime_.jsx(NoticeItem, {
        onClick: () => router.push(`notice/${item.noticeId}`),
        className: isFixed ? 'important' : '',
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `${className} title`,
            children: [isFixed && Icon/* ICON_NOTICE */.s, item.title, " ", isNew && Icon/* ICON_NEW */.l]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "date",
            children: (0,formatDate/* formatDate */.p6)(item.date, {
              format: enums_common/* DateFormat.SIMPLE_DATE */.t.SIMPLE_DATE
            })
          })]
        })
      }, item.noticeId);
    })
  });
};

/* harmony default export */ const templates_NoticeListTemplate = (NoticeListTemplate);
const NoticeItem = external_styled_components_default().div.withConfig({
  displayName: "NoticeListTemplate__NoticeItem",
  componentId: "sc-1nv5601-0"
})(["display:flex;align-items:start;margin:0px 24px;padding:24px 0px;border-bottom:1px solid #c2c2c2;background:#fff;&.important{.title{font-weight:bold;color:#2e2baf;}:last-child{border-bottom:none;}}.title{font-size:22px;line-height:1.5;color:#000;margin-bottom:4px;svg{width:20px;height:20px;}&.new{font-weight:bold;}}.date{font-size:16px;line-height:1.5;color:#969696;}"]);
// EXTERNAL MODULE: ./src/client/driver/services/proxy/notice.ts
var notice = __webpack_require__(2491);
// EXTERNAL MODULE: ./src/client/common/utils/common.ts + 1 modules
var utils_common = __webpack_require__(3092);
// EXTERNAL MODULE: ./src/client/common/utils/appEventHandler.ts
var appEventHandler = __webpack_require__(4360);
;// CONCATENATED MODULE: ./src/client/driver/components/pages/notice/NoticePage.tsx











const NoticePage = props => {
  const {
    0: list,
    1: setList
  } = (0,external_react_.useState)([]);
  const {
    0: fixedList,
    1: setFixedList
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    appEventHandler/* AppEventHandler.setToolbar */.N.setToolbar('공지사항', true);

    (async () => {
      const result = await notice/* default.getList */.Z.getList();
      if ((0,utils_common/* isFailedApiCall */.Zm)(result)) return;
      const fixedData = [];
      const data = result.map(item => ({
        noticeId: item.noticeId,
        title: item.title,
        date: (item === null || item === void 0 ? void 0 : item.openAt) || (item === null || item === void 0 ? void 0 : item.createdAt),
        fixed: item.importantYn === 'Y'
      })).filter(item => {
        if (item.fixed) {
          fixedData.push(item);
        }

        return !item.fixed;
      });
      setList(data);
      setFixedList(fixedData);
    })();
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(BasePageLayout/* default */.Z, {
    title: "\uACF5\uC9C0\uC0AC\uD56D",
    children: list.length <= 0 ? /*#__PURE__*/jsx_runtime_.jsx(Empty_Empty, {
      type: EmptyTypes.NOTICE
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(BasePageLayout/* BaseScrollLayout */.S, {
      children: [fixedList.length > 0 && /*#__PURE__*/jsx_runtime_.jsx(FixedNotice, {
        children: /*#__PURE__*/jsx_runtime_.jsx(templates_NoticeListTemplate, {
          list: fixedList,
          isFixed: true
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(templates_NoticeListTemplate, {
        list: list
      })]
    })
  });
};

/* harmony default export */ const notice_NoticePage = (NoticePage);
const FixedNotice = external_styled_components_default().div.withConfig({
  displayName: "NoticePage__FixedNotice",
  componentId: "sc-8sds4o-0"
})(["border-bottom:8px solid #f8f8f8;"]);
;// CONCATENATED MODULE: ./src/pages/driver/auth/notice/index.tsx




const Index = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(notice_NoticePage, {});
};

/* harmony default export */ const auth_notice = (Index);

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [786,92,54,845,207,723,996,360], () => (__webpack_exec__(9141)));
module.exports = __webpack_exports__;

})();