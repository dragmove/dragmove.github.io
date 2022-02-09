"use strict";
(() => {
var exports = {};
exports.id = 746;
exports.ids = [746];
exports.modules = {

/***/ 3972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ rider_faq)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/client/rider/components/templates/BasePageLayout/BasePageLayout.tsx
var BasePageLayout = __webpack_require__(8324);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/client/rider/components/pages/faq/templates/FaqCategoryTableTemplate.tsx



const COL_CNT = 3;

const FaqCategoryTableTemplate = ({
  categoryList,
  selectedIndex,
  onClickItem
}) => {
  const {
    0: faqCategoryList,
    1: setFaqCategoryList
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => {
    const separateFaqCategoryList = [];

    for (let i = 0; i < (categoryList === null || categoryList === void 0 ? void 0 : categoryList.length) / COL_CNT; i++) {
      separateFaqCategoryList.push(categoryList.slice(i * COL_CNT, i * COL_CNT + COL_CNT));
    }

    setFaqCategoryList(separateFaqCategoryList);
  }, [categoryList]);
  return /*#__PURE__*/jsx_runtime_.jsx(FaqCategoryTable, {
    children: /*#__PURE__*/jsx_runtime_.jsx("tbody", {
      children: faqCategoryList === null || faqCategoryList === void 0 ? void 0 : faqCategoryList.map((items, index) => /*#__PURE__*/jsx_runtime_.jsx("tr", {
        children: items.map(({
          faqCategoryId,
          title
        }) => {
          const isSelected = selectedIndex === faqCategoryId;
          return /*#__PURE__*/jsx_runtime_.jsx(FaqCategoryTd, {
            className: isSelected ? 'selected' : '',
            onClick: () => onClickItem(faqCategoryId),
            children: title
          }, faqCategoryId);
        })
      }, index))
    })
  });
};

/* harmony default export */ const templates_FaqCategoryTableTemplate = (FaqCategoryTableTemplate);
const FaqCategoryTable = external_styled_components_default().table.withConfig({
  displayName: "FaqCategoryTableTemplate__FaqCategoryTable",
  componentId: "sc-hkmjy5-0"
})(["border:1px solid #e2e2e2;width:100%;border-collapse:collapse;table-layout:fixed;"]);
const FaqCategoryTd = external_styled_components_default().td.withConfig({
  displayName: "FaqCategoryTableTemplate__FaqCategoryTd",
  componentId: "sc-hkmjy5-1"
})(["border:1px solid #e2e2e2;height:42px;border-collapse:collapse;line-height:1.5;letter-spacing:0.25px;color:#969696;text-align:center;&.selected{background-color:#eceefc;color:#2e2baf;font-weight:bold;}"]);
// EXTERNAL MODULE: ./src/client/common/antd-modules.ts
var antd_modules = __webpack_require__(2710);
;// CONCATENATED MODULE: ./src/client/rider/components/atoms/Collapse/Collapse.tsx

const Collapse = antd_modules/* AntdCollapse */.Ol;
/* harmony default export */ const Collapse_Collapse = (Collapse);
const Panel = antd_modules/* AntdCollapse.Panel */.Ol.Panel;

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
;// CONCATENATED MODULE: ./src/client/rider/components/pages/faq/templates/FaqListTemplate.tsx





const EditorViewer = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 126).then(__webpack_require__.bind(__webpack_require__, 7126)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7126)],
    modules: ["../client/rider/components/pages/faq/templates/FaqListTemplate.tsx -> " + '@common/components/organisms/EditorViewer/EditorViewer']
  }
});

const ICON_UP_ARROW = /*#__PURE__*/jsx_runtime_.jsx("svg", {
  width: "16",
  height: "16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "m8 6.06-4.47 4.47-1.06-1.06L8 3.94l5.53 5.53-1.06 1.06L8 6.06z",
    fill: "#161616"
  })
});

const ICON_DOWN_ARROW = /*#__PURE__*/jsx_runtime_.jsx("svg", {
  width: "16",
  height: "16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "m8 9.94 4.47-4.47 1.06 1.06L8 12.06 2.47 6.53l1.06-1.06L8 9.94z",
    fill: "#161616"
  })
});

const FaqListTemplate = ({
  faqList
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(FaqListCollapse, {
    accordion: true,
    bordered: false,
    expandIcon: ({
      isActive
    }) => isActive ? ICON_UP_ARROW : ICON_DOWN_ARROW,
    expandIconPosition: 'right',
    children: faqList === null || faqList === void 0 ? void 0 : faqList.map(data => /*#__PURE__*/jsx_runtime_.jsx(FaqListPanel, {
      header: data.title,
      className: 'custom-panel',
      children: /*#__PURE__*/jsx_runtime_.jsx(EditorViewer, {
        initialValue: data.contents
      })
    }, data.faqId))
  });
};

/* harmony default export */ const templates_FaqListTemplate = (FaqListTemplate);
const FaqListCollapse = external_styled_components_default()(Collapse_Collapse).withConfig({
  displayName: "FaqListTemplate__FaqListCollapse",
  componentId: "sc-1o2okbc-0"
})(["margin:0 16px;"]);
const FaqListPanel = external_styled_components_default()(Panel).withConfig({
  displayName: "FaqListTemplate__FaqListPanel",
  componentId: "sc-1o2okbc-1"
})(["background-color:#fff;&.custom-panel{border-bottom:1px solid #efefef;.ant-collapse-header{height:64px;display:flex;align-items:center;line-height:1.5;letter-spacing:0.25px;color:#161616;margin:0 -16px;}&.ant-collapse-item-active{border-bottom:0px;}.ant-collapse-content{margin:0 -16px;}.ant-collapse-content-box{background-color:#fafafa;padding:20px 16px !important;}}"]);
// EXTERNAL MODULE: ./src/client/common/services/ProxyBaseService.ts
var ProxyBaseService = __webpack_require__(7845);
// EXTERNAL MODULE: ./src/shared/rider/enums/basePath.ts
var basePath = __webpack_require__(4122);
// EXTERNAL MODULE: ./src/client/common/modules/clientResponseHandler/index.ts + 3 modules
var clientResponseHandler = __webpack_require__(6891);
// EXTERNAL MODULE: ./src/shared/common/utils/axios.ts
var axios = __webpack_require__(4054);
;// CONCATENATED MODULE: ./src/client/rider/services/proxy/faq.ts
var _class;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }





let FaqService = (_class = class FaqService extends ProxyBaseService/* default */.ZP {
  constructor() {
    super();
    super.setBasePath(basePath/* BasePath.FAQ */.P.FAQ);
  }

  async getFaqCategoryList(config) {
    const response = await (0,axios/* requestProxy */.Z)({
      method: 'get',
      path: `${this.basePath}/category-list`
    }, config);
    return (0,ProxyBaseService/* returnResponseData */.rO)(response);
  }

  async getFaqList(categoryId, params, config) {
    const response = await (0,axios/* requestProxy */.Z)({
      method: 'get',
      path: `${this.basePath}/list`,
      params: _objectSpread(_objectSpread({}, params), {}, {
        categoryId
      })
    }, config);
    return (0,ProxyBaseService/* returnResponseData */.rO)(response);
  }

}, (_applyDecoratedDescriptor(_class.prototype, "getFaqCategoryList", [clientResponseHandler/* ApiResponse */.Rf], Object.getOwnPropertyDescriptor(_class.prototype, "getFaqCategoryList"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getFaqList", [clientResponseHandler/* ApiResponse */.Rf], Object.getOwnPropertyDescriptor(_class.prototype, "getFaqList"), _class.prototype)), _class);
/* harmony default export */ const faq = (new FaqService());
// EXTERNAL MODULE: ./src/client/common/utils/common.ts + 1 modules
var common = __webpack_require__(3092);
;// CONCATENATED MODULE: ./src/client/rider/components/pages/faq/FaqPage.tsx










const FaqPage = () => {
  const {
    0: faqCategoryList,
    1: setFaqCategoryList
  } = (0,external_react_.useState)(null);
  const {
    0: selectedFaqCategory,
    1: setSelectedFaqCategory
  } = (0,external_react_.useState)(null);
  const {
    0: faqList,
    1: setFaqList
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => {
    (async () => {
      const result = await faq.getFaqCategoryList();
      if ((0,common/* isFailedApiCall */.Zm)(result)) return;
      setFaqCategoryList(result.faqCategoryDtos);
      setSelectedFaqCategory(result.faqCategoryDtos[0].faqCategoryId);
    })();
  }, []);
  (0,external_react_.useEffect)(() => {
    if (!selectedFaqCategory) return;

    (async () => {
      const result = await faq.getFaqList(selectedFaqCategory);
      if ((0,common/* isFailedApiCall */.Zm)(result)) return;
      const faqList = result.faqDtos.filter(item => item.usedYn === 'Y');
      setFaqList(faqList);
    })();
  }, [selectedFaqCategory]);
  return /*#__PURE__*/jsx_runtime_.jsx(BasePageLayout/* default */.Z, {
    onClick: () => console.log('이벤트'),
    title: "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(BasePageLayout/* BaseScrollLayout */.S, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(FaqCategoryContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Description, {
          children: "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38\uC744 \uD655\uC778\uD574\uBCF4\uC138\uC694."
        }), /*#__PURE__*/jsx_runtime_.jsx(templates_FaqCategoryTableTemplate, {
          categoryList: faqCategoryList,
          selectedIndex: selectedFaqCategory,
          onClickItem: index => setSelectedFaqCategory(index)
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(templates_FaqListTemplate, {
        faqList: faqList
      })]
    })
  });
};

/* harmony default export */ const faq_FaqPage = (FaqPage);
const FaqCategoryContainer = external_styled_components_default().div.withConfig({
  displayName: "FaqPage__FaqCategoryContainer",
  componentId: "sc-fsqqih-0"
})(["padding:16px;border-bottom:8px solid #f4f6fa;"]);
const Description = external_styled_components_default().p.withConfig({
  displayName: "FaqPage__Description",
  componentId: "sc-fsqqih-1"
})(["font-size:16px;line-height:1.5;font-weight:bold;color:#525252;margin-bottom:21px;"]);
;// CONCATENATED MODULE: ./src/pages/rider/faq/index.tsx




const Index = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(faq_FaqPage, {});
};

/* harmony default export */ const rider_faq = (Index);

/***/ }),

/***/ 4122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ BasePath)
/* harmony export */ });
let BasePath;

(function (BasePath) {
  BasePath["NOTICE"] = "/rider/notice/v1";
  BasePath["FAQ"] = "/rider/faq/v1";
  BasePath["TERMS"] = "/rider/tap-member/v1/terms";
  BasePath["ORDERS"] = "/rider/orders/v1";
  BasePath["LOCATION"] = "";
  BasePath["MEMBERS"] = "/rider/tap-member/v1";
})(BasePath || (BasePath = {}));

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
var __webpack_exports__ = __webpack_require__.X(0, [152,786,92,54,845,324], () => (__webpack_exec__(3972)));
module.exports = __webpack_exports__;

})();