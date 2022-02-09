"use strict";
exports.id = 254;
exports.ids = [254];
exports.modules = {

/***/ 4240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _driver_components_atoms_PageHeader_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1898);
/* harmony import */ var _driver_components_templates_BasePageLayout_BasePageLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9996);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5152);
/* harmony import */ var _common_utils_formatDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2207);
/* harmony import */ var _enums_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3491);
/* harmony import */ var _common_components_atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7723);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










const EditorViewer = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__.default)(() => __webpack_require__.e(/* import() */ 126).then(__webpack_require__.bind(__webpack_require__, 7126)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7126)],
    modules: ["../client/driver/components/templates/DetailPageLayout/DetailPageLayout.tsx -> " + '@common/components/organisms/EditorViewer/EditorViewer']
  }
});

const DetailPageLayout = ({
  onClick,
  title,
  iconType = 'BACK',
  data,
  hasHeader = false
}) => {
  if (!data) return null;
  const isNew = (0,_common_utils_formatDate__WEBPACK_IMPORTED_MODULE_5__/* .isShowNew */ .RD)(data.date);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(Layout, {
    children: [hasHeader && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Header, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_driver_components_atoms_PageHeader_PageHeader__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        title: title,
        onClick: onClick,
        iconType: iconType
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_driver_components_templates_BasePageLayout_BasePageLayout__WEBPACK_IMPORTED_MODULE_3__/* .BaseScrollLayout */ .S, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(Section, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(TitleContainer, {
          style: (data === null || data === void 0 ? void 0 : data.date) && {
            borderBottom: 'solid 1px #c2c2c2'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(Title, {
            children: [data === null || data === void 0 ? void 0 : data.title, " ", isNew && _common_components_atoms_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__/* .ICON_NEW */ .l]
          }), (data === null || data === void 0 ? void 0 : data.date) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(ShortDate, {
            children: (0,_common_utils_formatDate__WEBPACK_IMPORTED_MODULE_5__/* .formatDate */ .p6)(data.date, {
              format: _enums_common__WEBPACK_IMPORTED_MODULE_6__/* .DateFormat.SIMPLE_DATE */ .t.SIMPLE_DATE
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(EditorViewer, {
          initialValue: data === null || data === void 0 ? void 0 : data.contents
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailPageLayout);
const Layout = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "DetailPageLayout__Layout",
  componentId: "sc-rg4kmh-0"
})(["display:flex;flex-direction:column;height:100vh;background:#fff;font-size:14px;overflow:hidden;"]);
const Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "DetailPageLayout__Header",
  componentId: "sc-rg4kmh-1"
})(["width:100%;background:#fff;z-index:1000;margin-top:24px;"]);
const Section = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "DetailPageLayout__Section",
  componentId: "sc-rg4kmh-2"
})(["width:100%;height:100%;padding:24px 24px 0;"]);
const TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "DetailPageLayout__TitleContainer",
  componentId: "sc-rg4kmh-3"
})(["margin-bottom:23px;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default().h1.withConfig({
  displayName: "DetailPageLayout__Title",
  componentId: "sc-rg4kmh-4"
})(["font-size:22px;font-weight:bold;line-height:1.5;color:#000;margin:0;svg{width:20px;height:20px;}"]);
const ShortDate = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
  displayName: "DetailPageLayout__ShortDate",
  componentId: "sc-rg4kmh-5"
})(["font-size:16px;line-height:1.33;color:#969696;margin-top:8px;"]);

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

/***/ })

};
;