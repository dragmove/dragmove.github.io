"use strict";
exports.id = 76;
exports.ids = [76];
exports.modules = {

/***/ 3798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2372);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(953);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Loading = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_StyledSpin, _objectSpread(_objectSpread({
    indicator: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.LoadingOutlined, {
      spin: true
    })
  }, props), {}, {
    $_css: 'position:absolute;top: 20%;left: 50%;transform: translateX(-50%)'
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);

var _StyledSpin = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(antd__WEBPACK_IMPORTED_MODULE_3__.Spin).withConfig({
  displayName: "Loading___StyledSpin",
  componentId: "sc-5jipgs-0"
})(["", ""], p => p.$_css);

/***/ }),

/***/ 330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DimBackground)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const DimBackground = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "DimBackground",
  componentId: "sc-4j9al6-0"
})(["position:fixed;width:100%;height:100%;background-color:rgba(0,0,0,0.6);display:", ";"], ({
  isShow
}) => isShow ? 'block' : 'none');

/***/ }),

/***/ 3537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ templates_OrderBoardingInfoTemplate)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/shared/common/enums/tapCodes/carTypeCodes.ts
let CarTypeNames;

(function (CarTypeNames) {
  CarTypeNames["CRTY000001"] = "\uACBD\uD615";
  CarTypeNames["CRTY000002"] = "\uC18C\uD615";
  CarTypeNames["CRTY000003"] = "\uC900\uC911\uD615";
  CarTypeNames["CRTY000004"] = "\uC911\uD615";
  CarTypeNames["CRTY000005"] = "\uC900\uB300\uD615";
  CarTypeNames["CRTY000006"] = "\uB300\uD615";
})(CarTypeNames || (CarTypeNames = {}));

let CarTypeCodes;

(function (CarTypeCodes) {
  CarTypeCodes["CRTY000001"] = "CRTY000001";
  CarTypeCodes["CRTY000002"] = "CRTY000002";
  CarTypeCodes["CRTY000003"] = "CRTY000003";
  CarTypeCodes["CRTY000004"] = "CRTY000004";
  CarTypeCodes["CRTY000005"] = "CRTY000005";
  CarTypeCodes["CRTY000006"] = "CRTY000006";
})(CarTypeCodes || (CarTypeCodes = {}));

let CarTypeCodesIndex;

(function (CarTypeCodesIndex) {
  CarTypeCodesIndex[CarTypeCodesIndex["CRTY000001"] = 1] = "CRTY000001";
  CarTypeCodesIndex[CarTypeCodesIndex["CRTY000002"] = 2] = "CRTY000002";
  CarTypeCodesIndex[CarTypeCodesIndex["CRTY000003"] = 3] = "CRTY000003";
  CarTypeCodesIndex[CarTypeCodesIndex["CRTY000004"] = 4] = "CRTY000004";
  CarTypeCodesIndex[CarTypeCodesIndex["CRTY000005"] = 5] = "CRTY000005";
  CarTypeCodesIndex[CarTypeCodesIndex["CRTY000006"] = 6] = "CRTY000006";
})(CarTypeCodesIndex || (CarTypeCodesIndex = {}));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/client/rider/components/pages/order/templates/OrderBoardingInfoTemplate.tsx






const OrderBoardingInfoTemplate = ({
  className = null,
  boardingName,
  arrivalName,
  boardingStationName,
  arrivalStationName,
  carTypeCode
}) => {
  const vehicleIconName = (0,external_react_.useMemo)(getVehicleIconName, [carTypeCode]);

  function getVehicleIconName() {
    if (!carTypeCode) return 'TAXI';

    if (CarTypeCodesIndex[carTypeCode] > CarTypeCodesIndex.CRTY000005) {
      return 'BUS';
    } else {
      return 'TAXI';
    }
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(OrderBoardingInfo, {
    className: className,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ItemWrapper, {
      className: 'bullet',
      children: [/*#__PURE__*/jsx_runtime_.jsx(ItemTitle, {
        children: "\uCD9C\uBC1C\uC9C0"
      }), /*#__PURE__*/jsx_runtime_.jsx(ItemDescription, {
        children: boardingName
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ItemWrapper, {
      className: 'vertical-line',
      children: [/*#__PURE__*/jsx_runtime_.jsx(VehicleIconImage, {
        icon: VEHICLE_ICON[vehicleIconName]
      }), /*#__PURE__*/jsx_runtime_.jsx(ItemTitle, {
        children: "\uD0C0\uB294 \uACF3"
      }), /*#__PURE__*/jsx_runtime_.jsx(ItemDescription, {
        children: boardingStationName
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ItemWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(VehicleIconImage, {
        icon: VEHICLE_ICON[vehicleIconName]
      }), /*#__PURE__*/jsx_runtime_.jsx(ItemTitle, {
        children: "\uB0B4\uB9AC\uB294 \uACF3"
      }), /*#__PURE__*/jsx_runtime_.jsx(ItemDescription, {
        children: arrivalStationName
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ItemWrapper, {
      className: 'bullet bullet--black',
      children: [/*#__PURE__*/jsx_runtime_.jsx(ItemTitle, {
        children: "\uB3C4\uCC29\uC9C0"
      }), /*#__PURE__*/jsx_runtime_.jsx(ItemDescription, {
        children: arrivalName
      })]
    })]
  });
};

/* harmony default export */ const templates_OrderBoardingInfoTemplate = (OrderBoardingInfoTemplate);

const VehicleIconImage = ({
  icon
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(ItemIcon, {
    children: icon
  });
};

const OrderBoardingInfo = external_styled_components_default().ul.withConfig({
  displayName: "OrderBoardingInfoTemplate__OrderBoardingInfo",
  componentId: "sc-1xr6nc0-0"
})(["margin:0;padding:12px 0;&.order-detail{border-bottom:1px solid #efefef;}"]);
const ItemWrapper = external_styled_components_default().li.withConfig({
  displayName: "OrderBoardingInfoTemplate__ItemWrapper",
  componentId: "sc-1xr6nc0-1"
})(["display:flex;justify-content:start;align-items:center;position:relative;padding:6px 0 6px 28px;font-size:14px;line-height:20px;.order-detail &{display:flex;justify-content:space-between;align-items:center;}&.bullet{&::before{display:inline-block;position:absolute;top:calc(50% - 4px);left:7px;width:7px;height:7px;background:#000;border-radius:50%;content:'';}&--black{&::before{background:#000;}}}&.vertical-line{&::after{display:inline-block;position:absolute;top:calc(100% - 6px);left:9px;width:1px;height:12px;background:#000;content:'';}}"]);
const ItemIcon = external_styled_components_default().div.withConfig({
  displayName: "OrderBoardingInfoTemplate__ItemIcon",
  componentId: "sc-1xr6nc0-2"
})(["display:inline-block;position:absolute;top:calc(50% - 10px);left:0;width:20px;height:20px;"]);
const ItemTitle = external_styled_components_default().div.withConfig({
  displayName: "OrderBoardingInfoTemplate__ItemTitle",
  componentId: "sc-1xr6nc0-3"
})(["display:flex-item;width:70px;color:#000;"]);
const ItemDescription = external_styled_components_default().div.withConfig({
  displayName: "OrderBoardingInfoTemplate__ItemDescription",
  componentId: "sc-1xr6nc0-4"
})(["display:flex-item;color:#969696;"]);
const VEHICLE_ICON = {
  TAXI: /*#__PURE__*/jsx_runtime_.jsx("svg", {
    width: "21",
    height: "21",
    viewBox: "0 0 21 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.335 2.837C6.475 2.342 6.923 2 7.433 2h5.133c.51 0 .96.342 1.1.837l.32 1.131a3.196 3.196 0 0 0-.208-.007H6.222c-.07 0-.139.003-.208.007l.32-1.131zm7.443 3.201H6.222c-.559 0-1.035.408-1.127.965l-.519 3.14a33.832 33.832 0 0 1 10.848 0l-.519-3.14a1.146 1.146 0 0 0-1.127-.965zm-9.81.775-.586 3.547c-.18.035-.36.073-.538.111A1.075 1.075 0 0 0 2 11.525v4.898c0 .319.256.577.571.577h1.143a.574.574 0 0 0 .572-.577v-1.73c1.518.383 3.077.576 4.641.576h2.146c1.564 0 3.123-.194 4.641-.577v1.731c0 .319.256.577.572.577h1.143a.574.574 0 0 0 .571-.577v-4.898c0-.508-.352-.947-.844-1.054-.179-.038-.358-.076-.538-.111l-.585-3.547a2.292 2.292 0 0 0-2.255-1.928H6.222c-1.117 0-2.07.815-2.255 1.928zm-.254 6.148v-1.153h2.857v1.153H3.714zm9.715 0v-1.153h2.857v1.153h-2.857z",
      fill: "#000"
    })
  }),
  BUS: /*#__PURE__*/jsx_runtime_.jsx("svg", {
    width: "21",
    height: "21",
    viewBox: "0 0 21 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4 2a1 1 0 0 0-1 1v11.6a1 1 0 0 0 1 1h.6v1.9a.5.5 0 0 0 .5.5h1.4a.5.5 0 0 0 .5-.5v-1.9h6.4v1.9a.5.5 0 0 0 .5.5h1.4a.5.5 0 0 0 .5-.5v-1.9h.6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4zm.94 2.24a.5.5 0 0 0-.5.5v2.38h11.52V4.74a.5.5 0 0 0-.5-.5H4.94zm-.5 6.047h3.84v1.92H4.44v-1.92zm11.52 0h-3.84v1.92h3.84v-1.92z",
      fill: "#000"
    })
  })
};

/***/ }),

/***/ 930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ templates_OrderListTemplate),
  "p": () => (/* binding */ getOrderStateName)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/client/common/utils/formatDate.ts + 1 modules
var formatDate = __webpack_require__(2207);
// EXTERNAL MODULE: ./src/shared/common/enums/common.ts
var common = __webpack_require__(3491);
// EXTERNAL MODULE: ./src/client/rider/components/pages/order/templates/OrderBoardingInfoTemplate.tsx + 1 modules
var OrderBoardingInfoTemplate = __webpack_require__(3537);
;// CONCATENATED MODULE: ./src/shared/common/enums/tapCodes/orderCodes.ts
let OrderStatusTypeCodes;

(function (OrderStatusTypeCodes) {
  OrderStatusTypeCodes["CALLING"] = "ODST000101";
  OrderStatusTypeCodes["CANCEL_CALLING"] = "ODST000102";
  OrderStatusTypeCodes["DISPATCH_FAILURE"] = "ODST000103";
  OrderStatusTypeCodes["DISPATCH"] = "ODST000104";
  OrderStatusTypeCodes["CANCEL_DISPATCH"] = "ODST000105";
  OrderStatusTypeCodes["TO_BOARDING_POINT"] = "ODST000106";
  OrderStatusTypeCodes["AT_BOARDING_POINT"] = "ODST000107";
  OrderStatusTypeCodes["WAITING_FOR_DEPARTURE"] = "ODST000108";
  OrderStatusTypeCodes["BOARDING"] = "ODST000109";
  OrderStatusTypeCodes["NOT_BOARDED"] = "ODST000111";
  OrderStatusTypeCodes["TO_DESTINATION"] = "ODST000112";
  OrderStatusTypeCodes["COMPLETED"] = "ODST000113";
  OrderStatusTypeCodes["CANCEL_DRIVING"] = "ODST000114";
})(OrderStatusTypeCodes || (OrderStatusTypeCodes = {}));

const ORDER_STATUS_TYPE = {
  ODST000101: {
    name: 'CALLING',
    code: 'ODST000101',
    description: '호출중'
  },
  ODST000102: {
    name: 'CANCEL_CALLING',
    code: 'ODST000102',
    description: '호출 취소'
  },
  ODST000103: {
    name: 'DISPATCH_FAILURE',
    code: 'ODST000103',
    description: '배차 실패'
  },
  ODST000104: {
    name: 'DISPATCH',
    code: 'ODST000104',
    description: '배차'
  },
  ODST000105: {
    name: 'CANCEL_DISPATCH',
    code: 'ODST000105',
    description: '배차 취소'
  },
  ODST000106: {
    name: 'TO_BOARDING_POINT',
    code: 'ODST000106',
    description: '승차지 이동'
  },
  ODST000107: {
    name: 'AT_BOARDING_POINT',
    code: 'ODST000107',
    description: '승차지 도착'
  },
  ODST000108: {
    name: 'WAITING_FOR_DEPARTURE',
    code: 'ODST000108',
    description: '출발 대기중'
  },
  ODST000109: {
    name: 'BOARDING',
    code: 'ODST000109',
    description: '탑승 확인'
  },

  /*
  // 스펙 아웃
  ODST000110: {
    name: 'CHECKING_SEAT_BELT',
    code: 'ODST000110',
    description: '안전벨트 확인',
  },
  */
  ODST000111: {
    name: 'NOT_BOARDED',
    code: 'ODST000111',
    description: '미탑승'
  },
  ODST000112: {
    name: 'TO_DESTINATION',
    code: 'ODST000112',
    description: '하차지 이동'
  },
  ODST000113: {
    name: 'COMPLETED',
    code: 'ODST000113',
    description: '운행 완료'
  },
  ODST000114: {
    name: 'CANCEL_DRIVING',
    code: 'ODST000114',
    description: '운행 취소'
  }
};
// EXTERNAL MODULE: ./src/shared/rider/enums/orderStatus.ts
var orderStatus = __webpack_require__(7995);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/client/rider/components/pages/order/templates/OrderListTemplate.tsx











const ARROW_ICON = /*#__PURE__*/jsx_runtime_.jsx("svg", {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.9393 20L17.4697 15.5303L18.5303 14.4697L24.0607 20L18.5303 25.5303L17.4697 24.4697L21.9393 20Z",
    fill: "black"
  })
});

const OrderListTemplate = ({
  orderList
}) => {
  const router = (0,router_.useRouter)();
  const orderItems = orderList === null || orderList === void 0 ? void 0 : orderList.map((item, index) => {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(OrderItem, {
      onClick: () => router.push(`orders/${item.orderId}`),
      children: [/*#__PURE__*/jsx_runtime_.jsx(ArrowIcon, {
        children: ARROW_ICON
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(OrderTitle, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(OrderDate, {
          children: (0,formatDate/* formatDate */.p6)(item.boardingAt || item.dispatchedAt, {
            format: common/* DateFormat.DEFAULT */.t.DEFAULT,
            dayFormat: 'day',
            nullText: ' '
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(OrderStatus, {
          children: getOrderStateName(item)
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(OrderBoardingInfoTemplate/* default */.Z, {
        carTypeCode: item.carTypeCode,
        boardingName: item.boardingName,
        arrivalName: item.arrivalName,
        boardingStationName: item.boardingStationName,
        arrivalStationName: item.arrivalStationName
      }), item.boardingAt && item.arrivalAt && /*#__PURE__*/(0,jsx_runtime_.jsxs)(BoardingTimeInfo, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(BoardingTimeInfoLabel, {
          children: "\uC6B4\uD589\uC2DC\uAC04"
        }), (0,formatDate/* formatDate */.p6)(item.boardingAt, {
          format: common/* DateFormat.SHORT_TIME */.t.SHORT_TIME,
          nullText: ' '
        }), ' - ', (0,formatDate/* formatDate */.p6)(item.arrivalAt, {
          format: common/* DateFormat.SHORT_TIME */.t.SHORT_TIME,
          nullText: ' '
        })]
      })]
    }, `order_item_${index}`);
  });
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    children: orderItems
  });
};

/* harmony default export */ const templates_OrderListTemplate = (OrderListTemplate);
function getOrderStateName(data) {
  if (data.displayStatus === 0) {
    var _ORDER_STATUS_TYPE$da;

    return ((_ORDER_STATUS_TYPE$da = ORDER_STATUS_TYPE[data.state]) === null || _ORDER_STATUS_TYPE$da === void 0 ? void 0 : _ORDER_STATUS_TYPE$da.description) || '-';
  }

  return orderStatus/* OrderStatusTypesName */._3[orderStatus/* OrderDisplayStatus */.PP[data.displayStatus]];
}
const OrderItem = external_styled_components_default().div.withConfig({
  displayName: "OrderListTemplate__OrderItem",
  componentId: "sc-1rcgcu6-0"
})(["position:relative;padding:16px;border-bottom:4px solid #efefef;cursor:pointer;"]);
const OrderTitle = external_styled_components_default().div.withConfig({
  displayName: "OrderListTemplate__OrderTitle",
  componentId: "sc-1rcgcu6-1"
})(["display:flex;justify-content:start;align-items:center;color:#525252;"]);
const OrderDate = external_styled_components_default().span.withConfig({
  displayName: "OrderListTemplate__OrderDate",
  componentId: "sc-1rcgcu6-2"
})(["display:inline-block;font-size:16px;line-height:1.4;color:#5a46fa;"]);
const OrderStatus = external_styled_components_default().span.withConfig({
  displayName: "OrderListTemplate__OrderStatus",
  componentId: "sc-1rcgcu6-3"
})(["display:inline-block;margin-left:10px;padding:0 10px;border:1px solid #969696;border-radius:20px;font-size:10px;line-height:22px;color:#969696;box-sizing:border-box;margin-top:-3px;"]);
const ArrowIcon = external_styled_components_default().div.withConfig({
  displayName: "OrderListTemplate__ArrowIcon",
  componentId: "sc-1rcgcu6-4"
})(["position:absolute;top:4px;right:4px;width:40px;height:40px;"]);
const BoardingTimeInfo = external_styled_components_default().div.withConfig({
  displayName: "OrderListTemplate__BoardingTimeInfo",
  componentId: "sc-1rcgcu6-5"
})(["padding-top:12px;border-top:1px solid #efefef;color:#525252;"]);
const BoardingTimeInfoLabel = external_styled_components_default().span.withConfig({
  displayName: "OrderListTemplate__BoardingTimeInfoLabel",
  componentId: "sc-1rcgcu6-6"
})(["padding-right:20px;"]);

/***/ }),

/***/ 2764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_services_ProxyBaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7845);
/* harmony import */ var _shared_rider_enums_basePath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4122);
/* harmony import */ var _common_modules_clientResponseHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6891);
/* harmony import */ var _shared_common_utils_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4054);
var _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }





let OrdersService = (_class = class OrdersService extends _common_services_ProxyBaseService__WEBPACK_IMPORTED_MODULE_0__/* .default */ .ZP {
  constructor() {
    super();
    super.setBasePath(_shared_rider_enums_basePath__WEBPACK_IMPORTED_MODULE_1__/* .BasePath.ORDERS */ .P.ORDERS);
  }

  async getOrder(orderId, config) {
    const response = await (0,_shared_common_utils_axios__WEBPACK_IMPORTED_MODULE_3__/* .requestProxy */ .Z)({
      method: 'get',
      path: `${this.basePath}/${orderId}`
    }, config);
    return (0,_common_services_ProxyBaseService__WEBPACK_IMPORTED_MODULE_0__/* .returnResponseData */ .rO)(response);
  }

  async sendEmail(orderId, params) {
    const response = await (0,_shared_common_utils_axios__WEBPACK_IMPORTED_MODULE_3__/* .requestProxy */ .Z)({
      method: 'get',
      path: `${this.basePath}/send-email/${orderId}`,
      params
    });
    return (0,_common_services_ProxyBaseService__WEBPACK_IMPORTED_MODULE_0__/* .returnResponseData */ .rO)(response);
  }

}, (_applyDecoratedDescriptor(_class.prototype, "getOrder", [_common_modules_clientResponseHandler__WEBPACK_IMPORTED_MODULE_2__/* .ApiResponse */ .Rf], Object.getOwnPropertyDescriptor(_class.prototype, "getOrder"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "sendEmail", [_common_modules_clientResponseHandler__WEBPACK_IMPORTED_MODULE_2__/* .ApiResponse */ .Rf], Object.getOwnPropertyDescriptor(_class.prototype, "sendEmail"), _class.prototype)), _class);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new OrdersService());

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

/***/ 7995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E5": () => (/* binding */ OrderStatusTypes),
/* harmony export */   "_3": () => (/* binding */ OrderStatusTypesName),
/* harmony export */   "PP": () => (/* binding */ OrderDisplayStatus)
/* harmony export */ });
let OrderStatusTypes;

(function (OrderStatusTypes) {
  OrderStatusTypes["ALL"] = "ALL";
  OrderStatusTypes["PAID"] = "PAID";
  OrderStatusTypes["CALL_CANCEL"] = "CALL_CANCEL";
  OrderStatusTypes["PAY_CANCEL"] = "PAY_CANCEL";
  OrderStatusTypes["UNPAID"] = "UNPAID";
  OrderStatusTypes["NO_SHOW"] = "NO_SHOW";
  OrderStatusTypes["CANCEL_DRIVING"] = "CANCEL_DRIVING";
})(OrderStatusTypes || (OrderStatusTypes = {}));

let OrderStatusTypesName;

(function (OrderStatusTypesName) {
  OrderStatusTypesName["ALL"] = "\uC804\uCCB4";
  OrderStatusTypesName["PAID"] = "\uC774\uC6A9\uC644\uB8CC";
  OrderStatusTypesName["CALL_CANCEL"] = "\uD638\uCD9C\uCDE8\uC18C";
  OrderStatusTypesName["PAY_CANCEL"] = "\uACB0\uC81C\uCDE8\uC18C";
  OrderStatusTypesName["UNPAID"] = "\uBBF8\uACB0\uC81C";
  OrderStatusTypesName["NO_SHOW"] = "\uBBF8\uD0D1\uC2B9";
  OrderStatusTypesName["CANCEL_DRIVING"] = "\uC6B4\uD589\uCDE8\uC18C";
})(OrderStatusTypesName || (OrderStatusTypesName = {}));

let OrderDisplayStatus;

(function (OrderDisplayStatus) {
  OrderDisplayStatus[OrderDisplayStatus["PAID"] = 1] = "PAID";
  OrderDisplayStatus[OrderDisplayStatus["CALL_CANCEL"] = 2] = "CALL_CANCEL";
  OrderDisplayStatus[OrderDisplayStatus["PAY_CANCEL"] = 3] = "PAY_CANCEL";
  OrderDisplayStatus[OrderDisplayStatus["UNPAID"] = 4] = "UNPAID";
  OrderDisplayStatus[OrderDisplayStatus["NO_SHOW"] = 5] = "NO_SHOW";
  OrderDisplayStatus[OrderDisplayStatus["CANCEL_DRIVING"] = 6] = "CANCEL_DRIVING";
})(OrderDisplayStatus || (OrderDisplayStatus = {}));

/***/ })

};
;