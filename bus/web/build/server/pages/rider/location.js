"use strict";
(() => {
var exports = {};
exports.id = 518;
exports.ids = [518];
exports.modules = {

/***/ 2710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZT": () => (/* reexport default from dynamic */ antd_lib_typography__WEBPACK_IMPORTED_MODULE_6___default.a),
/* harmony export */   "t6": () => (/* reexport default from dynamic */ antd_lib_notification__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   "C0": () => (/* reexport default from dynamic */ antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   "yw": () => (/* reexport default from dynamic */ antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default.a),
/* harmony export */   "Ol": () => (/* reexport default from dynamic */ antd_lib_collapse__WEBPACK_IMPORTED_MODULE_4___default.a),
/* harmony export */   "f8": () => (/* reexport default from dynamic */ antd_lib_empty__WEBPACK_IMPORTED_MODULE_5___default.a),
/* harmony export */   "JX": () => (/* reexport default from dynamic */ antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a),
/* harmony export */   "X2": () => (/* reexport default from dynamic */ antd_lib_row__WEBPACK_IMPORTED_MODULE_8___default.a),
/* harmony export */   "xv": () => (/* binding */ Text),
/* harmony export */   "T": () => (/* reexport default from dynamic */ antd_lib_space__WEBPACK_IMPORTED_MODULE_9___default.a)
/* harmony export */ });
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6204);
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6794);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9833);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(125);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6357);
/* harmony import */ var antd_lib_collapse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_collapse__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_empty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7074);
/* harmony import */ var antd_lib_empty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_empty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5048);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9069);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8186);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8193);
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_space__WEBPACK_IMPORTED_MODULE_9__);










const Text = (antd_lib_typography__WEBPACK_IMPORTED_MODULE_6___default().Text);


/***/ }),

/***/ 534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ rider_location)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/client/rider/components/templates/BasePageLayout/BasePageLayout.tsx
var BasePageLayout = __webpack_require__(8324);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: external "react-map-gl"
const external_react_map_gl_namespaceObject = require("react-map-gl");
var external_react_map_gl_default = /*#__PURE__*/__webpack_require__.n(external_react_map_gl_namespaceObject);
// EXTERNAL MODULE: ./src/shared/common/utils/axios.ts
var axios = __webpack_require__(4054);
;// CONCATENATED MODULE: ./src/client/common/utils/map.ts

async function getStyleList() {
  const APP_KEY = 'MpsUBBo49QjqkNT0';
  return await (0,axios/* axios */.o)({
    url: `https://api-maps.cloud.toast.com/maps/v3.0/appkeys/${APP_KEY}/maps/styleinfo`
  }).then(r => r.data.result.data.styleList);
}
let list = null;
async function getStyleUrlByType(type) {
  if (!list) {
    list = await getStyleList();
  }

  return list.find(s => s.styleName === type).styleURL;
}
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/client/rider/components/atoms/NoSSR/index.tsx




function NoSSR({
  children
}) {
  const {
    0: isClient,
    1: setIsClient
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    setIsClient(true);
  }, []);
  return isClient ? children : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
}

/* harmony default export */ const atoms_NoSSR = (NoSSR);
;// CONCATENATED MODULE: ./src/client/rider/components/organisms/MapGL/MapGL.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const INITIAL_MAP_INFO = {
  longitude: 127.0347846,
  latitude: 37.4931739,
  zoom: 14
};

const MapGL = props => {
  const {
    0: styleUrl,
    1: setStyleUrl
  } = (0,external_react_.useState)(null);
  const {
    0: viewport,
    1: setViewport
  } = (0,external_react_.useState)(INITIAL_MAP_INFO);

  const loadStyles = async () => {
    setStyleUrl(await getStyleUrlByType('pastel_day'));
  };

  (0,external_react_.useEffect)(() => {
    void loadStyles();
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(atoms_NoSSR, {
    children: /*#__PURE__*/jsx_runtime_.jsx((external_react_map_gl_default()), _objectSpread(_objectSpread({}, viewport), {}, {
      width: "100vw",
      height: "100vh",
      onViewportChange: setViewport,
      mapStyle: styleUrl
    }))
  });
};

/* harmony default export */ const MapGL_MapGL = (MapGL);
// EXTERNAL MODULE: ./src/shared/common/utils/common.ts + 5 modules
var common = __webpack_require__(5786);
// EXTERNAL MODULE: ./src/client/common/antd-modules.ts
var antd_modules = __webpack_require__(2710);
;// CONCATENATED MODULE: ./src/client/rider/components/pages/location/templates/BottomContentsTemplate.tsx






const BottomContentsTemplate = ({
  data
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(BottomContents, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(BottomContentsItem, {
      wrap: false,
      children: [/*#__PURE__*/jsx_runtime_.jsx(antd_modules/* Col */.JX, {
        flex: "none",
        className: "title",
        children: "\uB3C4\uCC29\uC9C0"
      }), /*#__PURE__*/jsx_runtime_.jsx(antd_modules/* Col */.JX, {
        flex: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx(antd_modules/* Text */.xv, {
          ellipsis: true,
          children: data ? `새누리 공원` : /*#__PURE__*/jsx_runtime_.jsx(EmptyContents, {})
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(BottomContentsItem, {
      wrap: false,
      children: [/*#__PURE__*/jsx_runtime_.jsx(antd_modules/* Col */.JX, {
        flex: "none",
        className: "title",
        children: "\uB0B4\uB9AC\uB294 \uACF3"
      }), /*#__PURE__*/jsx_runtime_.jsx(antd_modules/* Col */.JX, {
        flex: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx(antd_modules/* Text */.xv, {
          ellipsis: true,
          children: data ? `암상암중학교정문상암중학교정문상암중암상암중학교정문상암중학교정문상암중` : /*#__PURE__*/jsx_runtime_.jsx(EmptyContents, {})
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(BottomContentsItem, {
      wrap: false,
      children: [/*#__PURE__*/jsx_runtime_.jsx(antd_modules/* Col */.JX, {
        flex: "none",
        className: "title",
        children: "\uB0B4\uB9AC\uB294 \uACF3 \uB3C4\uCC29 \uC2DC\uAC04"
      }), /*#__PURE__*/jsx_runtime_.jsx(antd_modules/* Col */.JX, {
        flex: "auto",
        children: /*#__PURE__*/jsx_runtime_.jsx(antd_modules/* Text */.xv, {
          ellipsis: true,
          children: data ? `12시 50분 예정` : /*#__PURE__*/jsx_runtime_.jsx(EmptyContents, {})
        })
      })]
    })]
  });
};

/* harmony default export */ const templates_BottomContentsTemplate = (BottomContentsTemplate);
const BottomContents = external_styled_components_default().div.withConfig({
  displayName: "BottomContentsTemplate__BottomContents",
  componentId: "sc-10qh3o4-0"
})(["margin:18px 16px;font-weight:bold;.ant-col{display:flex;justify-content:end;align-items:center;&.title{padding-right:16px;font-weight:normal;justify-content:start;}}"]);
const BottomContentsItem = external_styled_components_default()(antd_modules/* Row */.X2).withConfig({
  displayName: "BottomContentsTemplate__BottomContentsItem",
  componentId: "sc-10qh3o4-1"
})(["margin-bottom:5px;:last-child{margin-bottom:0px;}"]);
const EmptyContents = external_styled_components_default().div.withConfig({
  displayName: "BottomContentsTemplate__EmptyContents",
  componentId: "sc-10qh3o4-2"
})(["width:130px;height:13px;background:#efefef;"]);
;// CONCATENATED MODULE: ./src/client/rider/components/pages/location/templates/AlertTemplate.tsx




const AlertTemplate = ({
  message
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(AlertWrap, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "contents",
      children: message
    })
  });
};

/* harmony default export */ const templates_AlertTemplate = (AlertTemplate);
const AlertWrap = external_styled_components_default().div.withConfig({
  displayName: "AlertTemplate__AlertWrap",
  componentId: "sc-rgnbc6-0"
})(["position:fixed;bottom:248px;left:0;width:100%;display:flex;justify-content:center;align-items:center;.contents{display:flex;justify-content:center;align-items:center;height:40px;padding:0px 24px;background:rgba(0,0,0,0.8);border-radius:99px;color:#ffffff;}"]);
;// CONCATENATED MODULE: ./src/client/rider/components/pages/location/LocationPage.tsx











const LocationPage = () => {
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)([]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(BasePageLayout/* default */.Z, {
    hasHeader: false,
    children: [/*#__PURE__*/jsx_runtime_.jsx(MapGL_MapGL, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(BottomPanel, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(BottomHeader, {
        align: "middle",
        children: [/*#__PURE__*/jsx_runtime_.jsx(antd_modules/* Col */.JX, {
          span: 8,
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: (0,common/* makeImageUrl */.PD)('/assets/icons/icon_vehicle.svg')
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(antd_modules/* Col */.JX, {
          span: 8,
          style: {
            textAlign: 'center'
          },
          children: data ? `TAP! Bus 3호차` : /*#__PURE__*/jsx_runtime_.jsx(EmptyContents, {})
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(templates_BottomContentsTemplate, {
        data: data
      }), /*#__PURE__*/jsx_runtime_.jsx(BottomFooter, {
        children: "\uD0D1\uC2B9\uD55C \uCC28\uB7C9\uC758 \uC704\uCE58\uB97C \uAE30\uC900\uC73C\uB85C \uC548\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4. GPS \uC218\uC2E0 \uC815\uBCF4\uC5D0 \uB530\uB77C \uCC28\uB7C9\uC758 \uC704\uCE58\uB098 \uACBD\uB85C\uC5D0 \uCC28\uC774\uAC00 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(templates_AlertTemplate, {
      message: "\uB124\uD2B8\uC6CC\uD06C \uC5F0\uACB0 \uC0C1\uD0DC\uB97C \uD655\uC778\uD574\uC8FC\uC138\uC694"
    })]
  });
};

/* harmony default export */ const location_LocationPage = (LocationPage);
const BottomPanel = external_styled_components_default().div.withConfig({
  displayName: "LocationPage__BottomPanel",
  componentId: "sc-1coos7q-0"
})(["position:fixed;bottom:0;left:0;width:100%;height:236px;background:#ffffff;"]);
const BottomHeader = external_styled_components_default()(antd_modules/* Row */.X2).withConfig({
  displayName: "LocationPage__BottomHeader",
  componentId: "sc-1coos7q-1"
})(["height:48px;margin:0 16px;border-bottom:1px solid #efefef;color:#161616;font-weight:bold;"]);
const BottomFooter = external_styled_components_default().div.withConfig({
  displayName: "LocationPage__BottomFooter",
  componentId: "sc-1coos7q-2"
})(["padding:17px 16px;background:#f8f8f8;font-size:12px;color:#969696;"]);
;// CONCATENATED MODULE: ./src/pages/rider/location/index.tsx




const Index = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(location_LocationPage, {});
};

/* harmony default export */ const rider_location = (Index);

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
var __webpack_exports__ = __webpack_require__.X(0, [786,54,324], () => (__webpack_exec__(534)));
module.exports = __webpack_exports__;

})();