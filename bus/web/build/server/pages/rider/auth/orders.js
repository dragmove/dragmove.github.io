"use strict";
(() => {
var exports = {};
exports.id = 684;
exports.ids = [684];
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

/***/ 3527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ auth_orders)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/client/rider/components/templates/BasePageLayout/BasePageLayout.tsx
var BasePageLayout = __webpack_require__(8324);
// EXTERNAL MODULE: ./src/client/rider/components/pages/order/templates/OrderListTemplate.tsx + 1 modules
var OrderListTemplate = __webpack_require__(930);
// EXTERNAL MODULE: ./src/client/common/utils/common.ts + 1 modules
var common = __webpack_require__(3092);
// EXTERNAL MODULE: ./src/client/rider/services/proxy/orders.ts
var orders = __webpack_require__(2764);
// EXTERNAL MODULE: ./src/client/common/components/atoms/Loading/index.tsx
var Loading = __webpack_require__(3798);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/client/rider/components/pages/order/templates/OrderEmptyTemplate.tsx





const OrderEmptyTemplate = ({
  isLoading
}) => {
  const {
    0: emptyText,
    1: setEmptyText
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => {
    if (isLoading !== false) return;
    setEmptyText('이용 내역이 없습니다.');
  }, [isLoading]);
  if (isLoading) return /*#__PURE__*/jsx_runtime_.jsx(Loading/* default */.Z, {});
  return /*#__PURE__*/jsx_runtime_.jsx(OrderEmpty, {
    children: emptyText
  });
};

/* harmony default export */ const templates_OrderEmptyTemplate = (OrderEmptyTemplate);
const OrderEmpty = external_styled_components_default().div.withConfig({
  displayName: "OrderEmptyTemplate__OrderEmpty",
  componentId: "sc-3s1xg3-0"
})(["padding:40px 20px;font-size:14px;color:#969696;text-align:center;"]);
// EXTERNAL MODULE: ./src/client/common/utils/appEventHandler.ts
var appEventHandler = __webpack_require__(4360);
// EXTERNAL MODULE: ./src/client/driver/components/atoms/Radio/Radio.tsx
var Radio = __webpack_require__(2150);
// EXTERNAL MODULE: ./src/shared/rider/enums/orderStatus.ts
var orderStatus = __webpack_require__(7995);
// EXTERNAL MODULE: ./src/client/rider/components/pages/order/templates/DimBackground.ts
var DimBackground = __webpack_require__(330);
;// CONCATENATED MODULE: ./src/client/rider/components/pages/order/templates/SortSelectionPopUp.tsx









const SortSelectionPopUp = ({
  currentSortType,
  onConfirm,
  onClose,
  isShow
}) => {
  const {
    0: selectedSortType,
    1: setSelectedSortType
  } = (0,external_react_.useState)(currentSortType);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(DimBackground/* DimBackground */.Z, {
      onClick: onClose,
      isShow: isShow
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SortSelectPopUpWrap, {
      isShow: isShow,
      children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: 'sort-type-list',
        children: Object.keys(orderStatus/* OrderStatusTypes */.E5).map(item => {
          return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: 'sort-type-item',
            onClick: () => {
              setSelectedSortType(item);
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              className: 'sort-type-item__label',
              children: orderStatus/* OrderStatusTypesName */._3[item]
            }), /*#__PURE__*/jsx_runtime_.jsx(Radio/* default */.Z, {
              className: 'sort-type-item__radio',
              checked: selectedSortType === item
            })]
          }, item);
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => {
          void onConfirm(selectedSortType);
          void onClose();
        },
        className: 'sort-submit-button',
        children: "\uD655\uC778"
      })]
    })]
  });
};

/* harmony default export */ const templates_SortSelectionPopUp = (SortSelectionPopUp);
const SortSelectPopUpWrap = external_styled_components_default().div.withConfig({
  displayName: "SortSelectionPopUp__SortSelectPopUpWrap",
  componentId: "sc-12nvxeo-0"
})(["position:fixed;bottom:0;width:100%;background-color:#fff;padding:16px;border-radius:8px 8px 0 0;box-shadow:0 -4px 15px 0 rgba(0,0,0,0.15);transform:translateY(", ");transition:transform 0.4s;.sort-type-list{margin:0;padding:0;}.sort-type-item{display:flex;justify-content:space-between;list-style:none;border-top:1px solid #efefef;padding:16px 0;&:first-child{border-top:none;}&__label{font-size:16px;color:#161616;}&__radio{margin-top:1px;width:20px;height:20px;border-radius:12px;border:2px solid #c2c2c2;& > .checked{width:10px;height:10px;border-radius:5px;}}}.sort-submit-button{border:none;background-color:#5a46fa;border-radius:4px;margin:16px 0 8px;height:52px;width:100%;color:#fff;font-size:16px;font-weight:bold;}"], ({
  isShow
}) => isShow ? 0 : '100%');
;// CONCATENATED MODULE: ./src/client/rider/components/pages/order/templates/SortSelectionButton.tsx






const SortSelectionButton = ({
  currentSortType,
  onClick
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(OrderListHeader, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: 'sort-button-wrap',
      children: [/*#__PURE__*/jsx_runtime_.jsx(SortButton, {
        onClick: onClick,
        children: orderStatus/* OrderStatusTypesName */._3[currentSortType]
      }), ICON_ARROW_DOWN]
    })
  });
};

/* harmony default export */ const templates_SortSelectionButton = (SortSelectionButton);
const OrderListHeader = external_styled_components_default().div.withConfig({
  displayName: "SortSelectionButton__OrderListHeader",
  componentId: "sc-a76zmx-0"
})(["border-bottom:1px solid #efefef;padding:12px 16px;line-height:1;.sort-button-wrap{display:flex;}"]);

const ICON_ARROW_DOWN = /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/*#__PURE__*/jsx_runtime_.jsx("g", {
    clipPath: "url(#a)",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "m8 9.938 4.47-4.47 1.06 1.061L8 12.06 2.47 6.53l1.06-1.06L8 9.939z",
      fill: "#C2C2C2"
    })
  }), /*#__PURE__*/jsx_runtime_.jsx("defs", {
    children: /*#__PURE__*/jsx_runtime_.jsx("clipPath", {
      id: "a",
      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#fff",
        transform: "rotate(90 8 8)",
        d: "M0 0h16v16H0z"
      })
    })
  })]
});

const SortButton = external_styled_components_default().button.withConfig({
  displayName: "SortSelectionButton__SortButton",
  componentId: "sc-a76zmx-1"
})(["border:none;color:#161616;padding:0 4px 0 0;letter-spacing:0.25px;line-height:17px;background:none;"]);
;// CONCATENATED MODULE: ./src/client/rider/components/templates/InfiniteScrollLayout/InfiniteScrollLayout.tsx





const InfiniteScrollLayout = ({
  afterScrollEnd,
  stopCall,
  children
}) => {
  const observerRef = (0,external_react_.useRef)();

  const observer = node => {
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(async ([entry]) => {
      if (stopCall) return;

      if (entry.isIntersecting) {
        await afterScrollEnd();
      }
    }, {
      threshold: 0.5
    });
    node && observerRef.current.observe(node);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(_StyledDiv, {
    $_css: 'overflow: auto;',
    children: [children, /*#__PURE__*/jsx_runtime_.jsx(_StyledDiv2, {
      ref: observer,
      $_css2: 'height: 10px;'
    })]
  });
};

/* harmony default export */ const InfiniteScrollLayout_InfiniteScrollLayout = (InfiniteScrollLayout);

var _StyledDiv = external_styled_components_default()("div").withConfig({
  displayName: "InfiniteScrollLayout___StyledDiv",
  componentId: "sc-1xg2km4-0"
})(["", ""], p => p.$_css);

var _StyledDiv2 = external_styled_components_default()("div").withConfig({
  displayName: "InfiniteScrollLayout___StyledDiv2",
  componentId: "sc-1xg2km4-1"
})(["", ""], p => p.$_css2);
;// CONCATENATED MODULE: ./src/client/rider/components/pages/order/OrderListPage.tsx
















const OrdersPage = () => {
  const {
    0: orders,
    1: setOrders
  } = (0,external_react_.useState)([]);
  const {
    0: isShowSortPopUp,
    1: setIsShowSortPopUp
  } = (0,external_react_.useState)(false);
  const {
    0: currentSortType,
    1: setCurrentSortType
  } = (0,external_react_.useState)(orderStatus/* OrderStatusTypes.ALL */.E5.ALL);
  const {
    0: page,
    1: setPage
  } = (0,external_react_.useState)(1);
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,external_react_.useState)(null);
  const {
    0: hasNextPage,
    1: setHasNextPage
  } = (0,external_react_.useState)(true);
  (0,external_react_.useEffect)(() => {
    appEventHandler/* AppEventHandler.setToolbar */.N.setToolbar('이용내역', true);
  }, []);
  (0,external_react_.useEffect)(() => {
    void getOrdersAfterScrollEnd(currentSortType);
  }, [currentSortType]);

  async function getOrdersAfterScrollEnd(sortType) {
    if (isLoading) return;
    setIsLoading(true);
    const result = await getOrders(sortType, page);
    if ((0,common/* isFailedApiCall */.Zm)(result) || !(result !== null && result !== void 0 && result.data)) return;
    void checkNextPage(result);
    setOrders(prev => {
      return prev.concat(result.data);
    });
    setPage(prev => prev + 1);
    setIsLoading(false);
  }

  function checkNextPage(result) {
    if (orders.length >= result.total || result.data.length < LIMIT_NUMBER) setHasNextPage(false);
  }

  function closePopUp() {
    setIsShowSortPopUp(false);
  }

  function resetState() {
    setOrders([]);
    setPage(1);
    setHasNextPage(true);
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(BasePageLayout/* default */.Z, {
    title: "\uC774\uC6A9 \uB0B4\uC5ED",
    hasHeader: false,
    children: [/*#__PURE__*/jsx_runtime_.jsx(TopMargin, {}), /*#__PURE__*/jsx_runtime_.jsx(templates_SortSelectionButton, {
      onClick: () => setIsShowSortPopUp(true),
      currentSortType: currentSortType
    }), /*#__PURE__*/jsx_runtime_.jsx(InfiniteScrollLayout_InfiniteScrollLayout, {
      stopCall: !hasNextPage || isLoading,
      afterScrollEnd: () => {
        void getOrdersAfterScrollEnd(currentSortType);
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: (orders === null || orders === void 0 ? void 0 : orders.length) === 0 ? /*#__PURE__*/jsx_runtime_.jsx(templates_OrderEmptyTemplate, {
          isLoading: isLoading
        }) : /*#__PURE__*/jsx_runtime_.jsx(OrderListTemplate/* default */.Z, {
          orderList: orders
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(templates_SortSelectionPopUp, {
      isShow: isShowSortPopUp,
      onClose: closePopUp,
      onConfirm: sortType => {
        void resetState();
        setCurrentSortType(sortType);
      },
      currentSortType: currentSortType
    })]
  });
};

/* harmony default export */ const OrderListPage = (OrdersPage);
const TopMargin = external_styled_components_default().div.withConfig({
  displayName: "OrderListPage__TopMargin",
  componentId: "sc-1ca74v7-0"
})(["border-top:10px solid #f4f6fa;"]);
const LIMIT_NUMBER = 5;

async function getOrders(sortType, page) {
  return await orders/* default.getList */.Z.getList({
    search: {
      searchType: sortType
    },
    page,
    limit: LIMIT_NUMBER
  });
}
;// CONCATENATED MODULE: ./src/pages/rider/auth/orders/index.tsx




const Index = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(OrderListPage, {});
};

/* harmony default export */ const auth_orders = (Index);

/***/ }),

/***/ 2372:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 953:
/***/ ((module) => {

module.exports = require("antd");

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
var __webpack_exports__ = __webpack_require__.X(0, [786,92,54,845,207,324,360,76], () => (__webpack_exec__(3527)));
module.exports = __webpack_exports__;

})();