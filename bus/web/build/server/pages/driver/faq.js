"use strict";
(() => {
var exports = {};
exports.id = 190;
exports.ids = [190];
exports.modules = {

/***/ 2150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const Radio = ({
  checked,
  className
}) => {
  const isChecked = checked ? 'checked' : '';
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(Container, {
    className: className,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(CheckedInfo, {
      className: isChecked
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Radio);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Radio__Container",
  componentId: "sc-1oalbeg-0"
})(["width:14px;height:14px;border-radius:7px;border:1px solid #c2c2c2;display:flex;justify-content:center;align-items:center;"]);
const CheckedInfo = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Radio__CheckedInfo",
  componentId: "sc-1oalbeg-1"
})(["&.checked{width:8px;height:8px;border-radius:4px;background-color:#5a46fa;}"]);

/***/ }),

/***/ 7643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ driver_faq)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/client/driver/components/templates/BasePageLayout/BasePageLayout.tsx
var BasePageLayout = __webpack_require__(9996);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/client/driver/components/atoms/Button/Button.tsx



var ButtonNames;

(function (ButtonNames) {
  ButtonNames["cancel"] = "\uB2EB\uAE30";
  ButtonNames["confirm"] = "\uD655\uC778";
})(ButtonNames || (ButtonNames = {}));

let ButtonTypes;

(function (ButtonTypes) {
  ButtonTypes["CANCEL"] = "cancel";
  ButtonTypes["CONFIRM"] = "confirm";
})(ButtonTypes || (ButtonTypes = {}));

const Button = ({
  buttonType,
  onClick
}) => {
  const {
    0: className,
    1: setClassName
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => {
    if (buttonType === ButtonTypes.CANCEL) {
      setClassName(ButtonTypes.CANCEL);
      return;
    }

    if (buttonType === ButtonTypes.CONFIRM) {
      setClassName(ButtonTypes.CONFIRM);
    }
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    className: className,
    onClick: onClick,
    children: ButtonNames[buttonType]
  });
};

/* harmony default export */ const Button_Button = (Button);
const Container = external_styled_components_default().div.withConfig({
  displayName: "Button__Container",
  componentId: "sc-1nrkbku-0"
})(["width:172px;height:56px;display:flex;justify-content:center;align-items:center;font-size:22px;line-height:1.5;font-weight:bold;border-radius:4px;&.cancel{background-color:#efefef;color:#3a3a3a;}&.confirm{background-color:#000;color:#fff;}"]);
// EXTERNAL MODULE: ./src/client/driver/components/atoms/Radio/Radio.tsx
var Radio = __webpack_require__(2150);
;// CONCATENATED MODULE: ./src/client/driver/components/pages/faq/templates/FaqCategoryContainer.tsx







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

const FaqCategoryContainer = ({
  categoryList,
  selectedId,
  onClickItem
}) => {
  const {
    0: showModal,
    1: setShowModal
  } = (0,external_react_.useState)(false);
  const {
    0: temporarySelectedId,
    1: setTemporarySelectedId
  } = (0,external_react_.useState)(null);
  const {
    0: selectedTitle,
    1: setSelectedTitle
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => {
    if (!selectedId) return;
    setTemporarySelectedId(selectedId);
    const data = categoryList.filter(item => item.faqCategoryId === selectedId)[0];
    setSelectedTitle(data.title);
  }, [selectedId]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(CategoryContainer, {
      onClick: () => setShowModal(!showModal),
      children: [/*#__PURE__*/jsx_runtime_.jsx(Category, {
        children: selectedTitle
      }), ICON_DOWN_ARROW]
    }), /*#__PURE__*/jsx_runtime_.jsx(FormContainer, {
      className: showModal ? '' : 'hidden',
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Form, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(FormTitle, {
          children: "\uC9C8\uBB38 \uCE74\uD14C\uACE0\uB9AC \uC120\uD0DD"
        }), /*#__PURE__*/jsx_runtime_.jsx(_StyledDiv, {
          children: categoryList.map((category, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(CategoryItemContainer, {
            onClick: () => setTemporarySelectedId(category.faqCategoryId),
            children: [/*#__PURE__*/jsx_runtime_.jsx(Radio/* default */.Z, {
              checked: category.faqCategoryId === temporarySelectedId
            }), /*#__PURE__*/jsx_runtime_.jsx(FormCategoryList, {
              children: category.title
            })]
          }, index))
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ButtonContainer, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Button_Button, {
            buttonType: ButtonTypes.CANCEL,
            onClick: () => {
              setTemporarySelectedId(selectedId);
              setShowModal(false);
            }
          }), /*#__PURE__*/jsx_runtime_.jsx(Button_Button, {
            buttonType: ButtonTypes.CONFIRM,
            onClick: () => {
              onClickItem(temporarySelectedId);
              setShowModal(false);
            }
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const templates_FaqCategoryContainer = (FaqCategoryContainer);
const Layout = external_styled_components_default().div.withConfig({
  displayName: "FaqCategoryContainer__Layout",
  componentId: "sc-1wjhz6d-0"
})(["width:100%;background-color:#000;"]);
const CategoryContainer = external_styled_components_default().div.withConfig({
  displayName: "FaqCategoryContainer__CategoryContainer",
  componentId: "sc-1wjhz6d-1"
})(["height:60px;background-color:#fff;border-radius:8px;display:flex;align-items:center;justify-content:space-between;margin:24px;padding:0px 24px;"]);
const Category = external_styled_components_default().span.withConfig({
  displayName: "FaqCategoryContainer__Category",
  componentId: "sc-1wjhz6d-2"
})(["font-size:20px;line-height:1.5;color:#000;"]);
const FormContainer = external_styled_components_default().div.withConfig({
  displayName: "FaqCategoryContainer__FormContainer",
  componentId: "sc-1wjhz6d-3"
})(["position:absolute;top:0;bottom:0;left:0;right:0;z-index:10000;background-color:rgba(0,0,0,0.75);display:flex;justify-content:center;align-items:center;&.hidden{display:none;}"]);
const Form = external_styled_components_default().div.withConfig({
  displayName: "FaqCategoryContainer__Form",
  componentId: "sc-1wjhz6d-4"
})(["width:392px;height:460px;background-color:#fff;border-radius:8px;padding:0px 20px 20px 20px;"]);
const FormTitle = external_styled_components_default().h1.withConfig({
  displayName: "FaqCategoryContainer__FormTitle",
  componentId: "sc-1wjhz6d-5"
})(["margin:28px 0;font-size:22px;line-height:1.5;font-weight:bold;color:#000;text-align:center;"]);
const CategoryItemContainer = external_styled_components_default().div.withConfig({
  displayName: "FaqCategoryContainer__CategoryItemContainer",
  componentId: "sc-1wjhz6d-6"
})(["display:flex;align-items:center;height:54px;"]);
const FormCategoryList = external_styled_components_default().p.withConfig({
  displayName: "FaqCategoryContainer__FormCategoryList",
  componentId: "sc-1wjhz6d-7"
})(["font-size:22px;line-height:1.5;color:#161616;margin:0px 0px 0px 14px;"]);
const ButtonContainer = external_styled_components_default().div.withConfig({
  displayName: "FaqCategoryContainer__ButtonContainer",
  componentId: "sc-1wjhz6d-8"
})(["height:100px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;"]);

var _StyledDiv = external_styled_components_default()("div").withConfig({
  displayName: "FaqCategoryContainer___StyledDiv",
  componentId: "sc-1wjhz6d-9"
})(["overflow:auto;height:270px;"]);
// EXTERNAL MODULE: ./src/client/common/antd-modules.ts
var antd_modules = __webpack_require__(2710);
;// CONCATENATED MODULE: ./src/client/driver/components/atoms/Collapse/Collapse.tsx

const Collapse = antd_modules/* AntdCollapse */.Ol;
/* harmony default export */ const Collapse_Collapse = (Collapse);
const Panel = antd_modules/* AntdCollapse.Panel */.Ol.Panel;

;// CONCATENATED MODULE: ./src/client/driver/components/pages/faq/templates/FaqListTemplate.tsx





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

const FaqListTemplate_ICON_DOWN_ARROW = /*#__PURE__*/jsx_runtime_.jsx("svg", {
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
    bordered: false,
    expandIcon: ({
      isActive
    }) => isActive ? ICON_UP_ARROW : FaqListTemplate_ICON_DOWN_ARROW,
    expandIconPosition: 'right',
    children: faqList.map((data, index) => /*#__PURE__*/jsx_runtime_.jsx(FaqListPanel, {
      header: data.title,
      className: 'custom-panel',
      children: /*#__PURE__*/jsx_runtime_.jsx(PanelText, {
        dangerouslySetInnerHTML: {
          __html: data.contents
        }
      })
    }, index))
  });
};

/* harmony default export */ const templates_FaqListTemplate = (FaqListTemplate);
const FaqListCollapse = external_styled_components_default()(Collapse_Collapse).withConfig({
  displayName: "FaqListTemplate__FaqListCollapse",
  componentId: "sc-9wbk8a-0"
})(["margin:0 24px;.ant-collapse-item{border-bottom:none;&.ant-collapse-item-active{border-bottom:1px solid #c2c2c2;}}"]);
const FaqListPanel = external_styled_components_default()(Panel).withConfig({
  displayName: "FaqListTemplate__FaqListPanel",
  componentId: "sc-9wbk8a-1"
})(["background-color:#fff;&.custom-panel{.ant-collapse-header{display:flex;align-items:center;font-size:20px;line-height:1.5;color:#161616;padding:24px 48px 24px 0;border-bottom:1px solid #c2c2c2;}.ant-collapse-content-box{padding:24px 0px 8px !important;}}"]);
const PanelText = external_styled_components_default().div.withConfig({
  displayName: "FaqListTemplate__PanelText",
  componentId: "sc-9wbk8a-2"
})(["font-size:16px;line-height:1.5;color:#767676;margin:0;"]);
// EXTERNAL MODULE: ./src/client/common/services/ProxyBaseService.ts
var ProxyBaseService = __webpack_require__(7845);
// EXTERNAL MODULE: ./src/shared/driver/enums/basePath.ts
var basePath = __webpack_require__(3206);
// EXTERNAL MODULE: ./src/client/common/modules/clientResponseHandler/index.ts + 3 modules
var clientResponseHandler = __webpack_require__(6891);
// EXTERNAL MODULE: ./src/shared/common/utils/axios.ts
var axios = __webpack_require__(4054);
;// CONCATENATED MODULE: ./src/client/driver/services/proxy/faq.ts
var _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }





let FaqService = (_class = class FaqService extends ProxyBaseService/* default */.ZP {
  constructor() {
    super();
    super.setBasePath(basePath/* BasePath.FAQ */.P.FAQ);
  }

  async getFaqCategoryList(config) {
    const response = await (0,axios/* requestProxy */.Z)({
      method: 'get',
      path: `${this.basePath}/categories`
    }, config);
    return (0,ProxyBaseService/* returnResponseData */.rO)(response);
  }

}, (_applyDecoratedDescriptor(_class.prototype, "getFaqCategoryList", [clientResponseHandler/* ApiResponse */.Rf], Object.getOwnPropertyDescriptor(_class.prototype, "getFaqCategoryList"), _class.prototype)), _class);
/* harmony default export */ const faq = (new FaqService());
// EXTERNAL MODULE: ./src/client/common/utils/common.ts + 1 modules
var common = __webpack_require__(3092);
;// CONCATENATED MODULE: ./src/client/driver/components/pages/faq/FaqPage.tsx









const FaqPage = () => {
  const {
    0: categoryList,
    1: setCategoryList
  } = (0,external_react_.useState)([]);
  const {
    0: selectedFaqCategoryId,
    1: setSelectedFaqCategoryId
  } = (0,external_react_.useState)(null);
  const {
    0: faqList,
    1: setFaqList
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    (async () => {
      const result = await faq.getFaqCategoryList();
      if ((0,common/* isFailedApiCall */.Zm)(result)) return;
      setCategoryList(result);
      setSelectedFaqCategoryId(result[0].faqCategoryId);
    })();
  }, []);
  (0,external_react_.useEffect)(() => {
    (async () => {
      if (!selectedFaqCategoryId) return;
      const result = await faq.getList({
        search: {
          faqCategoryId: selectedFaqCategoryId
        }
      });
      if ((0,common/* isFailedApiCall */.Zm)(result)) return;
      setFaqList(result);
    })();
  }, [selectedFaqCategoryId]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(BasePageLayout/* default */.Z, {
    title: "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38",
    children: [/*#__PURE__*/jsx_runtime_.jsx(templates_FaqCategoryContainer, {
      categoryList: categoryList,
      selectedId: selectedFaqCategoryId,
      onClickItem: id => setSelectedFaqCategoryId(id)
    }), /*#__PURE__*/jsx_runtime_.jsx(BasePageLayout/* BaseScrollLayout */.S, {
      children: /*#__PURE__*/jsx_runtime_.jsx(templates_FaqListTemplate, {
        faqList: faqList
      })
    })]
  });
};

/* harmony default export */ const faq_FaqPage = (FaqPage);
;// CONCATENATED MODULE: ./src/pages/driver/faq/index.tsx




const Index = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(faq_FaqPage, {});
};

/* harmony default export */ const driver_faq = (Index);

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
var __webpack_exports__ = __webpack_require__.X(0, [786,92,54,845,996], () => (__webpack_exec__(7643)));
module.exports = __webpack_exports__;

})();