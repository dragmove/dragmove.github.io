"use strict";
exports.id = 133;
exports.ids = [133];
exports.modules = {

/***/ 1092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_PageHeader_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(385);
/* harmony import */ var _BasePageLayout_BasePageLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8324);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5152);
/* harmony import */ var _common_utils_formatDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2207);
/* harmony import */ var _common_components_atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7723);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);









const EditorViewer = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__.default)(() => __webpack_require__.e(/* import() */ 126).then(__webpack_require__.bind(__webpack_require__, 7126)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7126)],
    modules: ["../client/rider/components/templates/DetailPageLayout/DetailPageLayout.tsx -> " + '@common/components/organisms/EditorViewer/EditorViewer']
  }
});

const DetailPageLayout = ({
  onClick,
  title,
  iconType = 'BACK',
  showHeaderBorderBottom = false,
  data,
  hasHeader = false
}) => {
  if (!data) return null;
  const isNew = (0,_common_utils_formatDate__WEBPACK_IMPORTED_MODULE_5__/* .isShowNew */ .RD)(data.date);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(Layout, {
    children: [hasHeader && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Header, {
      className: showHeaderBorderBottom ? 'borderBottom' : '',
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_atoms_PageHeader_PageHeader__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        title: title,
        onClick: onClick,
        iconType: iconType
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_BasePageLayout_BasePageLayout__WEBPACK_IMPORTED_MODULE_3__/* .BaseScrollLayout */ .S, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(Section, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(Title, {
          children: [data === null || data === void 0 ? void 0 : data.title, " ", isNew && _common_components_atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__/* .ICON_NEW */ .l]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(ShortDate, {
          children: (0,_common_utils_formatDate__WEBPACK_IMPORTED_MODULE_5__/* .formatDate */ .p6)(data === null || data === void 0 ? void 0 : data.date)
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(EditorViewer, {
          initialValue: data === null || data === void 0 ? void 0 : data.contents
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailPageLayout);
const Layout = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "DetailPageLayout__Layout",
  componentId: "sc-1hqb0mr-0"
})(["display:flex;flex-direction:column;height:100vh;background:#fff;font-size:14px;overflow:hidden;"]);
const Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "DetailPageLayout__Header",
  componentId: "sc-1hqb0mr-1"
})(["width:100%;height:70px;background:#fff;z-index:1000;&.borderBottom{border-bottom:8px solid #f4f6fa;}"]);
const Section = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "DetailPageLayout__Section",
  componentId: "sc-1hqb0mr-2"
})(["width:100%;height:100%;padding:24px 16px 0;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default().h1.withConfig({
  displayName: "DetailPageLayout__Title",
  componentId: "sc-1hqb0mr-3"
})(["font-size:22px;font-weight:bold;line-height:1.5;letter-spacing:0.25px;color:#161616;margin:0;svg{width:20px;height:20px;}"]);
const ShortDate = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
  displayName: "DetailPageLayout__ShortDate",
  componentId: "sc-1hqb0mr-4"
})(["font-size:12px;line-height:1.33;letter-spacing:0.4px;color:#c2c2c2;margin:8px 0 22px;"]);

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

/***/ })

};
;