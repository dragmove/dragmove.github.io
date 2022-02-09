"use strict";
exports.id = 324;
exports.ids = [324];
exports.modules = {

/***/ 385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_common_utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const ICON_PATH = {
  CLOSE: '/assets/icons/icon_common_close-c_black-s_24x24.svg',
  BACK: '/assets/icons/icon_common_back-c_black-s_24x24.svg'
};

const PageHeader = ({
  onClick,
  title,
  iconType = 'CLOSE'
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(PageHeaderWrap, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Icon, {
      onClick: onClick,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
        src: (0,_shared_common_utils_common__WEBPACK_IMPORTED_MODULE_2__/* .makeImageUrl */ .PD)(ICON_PATH[iconType])
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Title, {
      children: title
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeader);
const PageHeaderWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "PageHeader__PageHeaderWrap",
  componentId: "sc-1kj46x-0"
})(["display:flex;height:60px;align-items:center;"]);
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "PageHeader__Icon",
  componentId: "sc-1kj46x-1"
})(["padding:0px 16px;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "PageHeader__Title",
  componentId: "sc-1kj46x-2"
})(["font-weight:bold;font-size:16px;color:#161616;"]);

/***/ }),

/***/ 8324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "S": () => (/* binding */ BaseScrollLayout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms_PageHeader_PageHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(385);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const BasePageLayout = ({
  title = '',
  onClick = null,
  iconType = 'CLOSE',
  children,
  hasHeader = false
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Layout, {
    children: [hasHeader && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Header, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_atoms_PageHeader_PageHeader__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        title: title,
        onClick: onClick,
        iconType: iconType
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Contents, {
      className: hasHeader ? 'hasHeader' : '',
      children: children
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BasePageLayout);
const Layout = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "BasePageLayout__Layout",
  componentId: "sc-o9os4v-0"
})(["display:flex;flex-direction:column;height:100vh;background:#fff;font-size:14px;overflow:hidden;"]);
const Header = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "BasePageLayout__Header",
  componentId: "sc-o9os4v-1"
})(["width:100%;height:70px;background:#fff;z-index:1000;border-bottom:8px solid #f4f6fa;"]);
const Contents = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "BasePageLayout__Contents",
  componentId: "sc-o9os4v-2"
})(["width:100%;display:flex;height:100%;flex-direction:column;&.hasHeader{height:calc(100% - 70px);}"]);
const BaseScrollLayout = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_StyledDiv, {
    children: props.children
  });
};

var _StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default()("div").withConfig({
  displayName: "BasePageLayout___StyledDiv",
  componentId: "sc-o9os4v-3"
})(["overflow:auto;"]);

/***/ })

};
;