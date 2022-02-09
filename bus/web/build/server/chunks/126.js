"use strict";
exports.id = 126;
exports.ids = [126];
exports.modules = {

/***/ 7126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ EditorViewer_EditorViewer)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@toast-ui/react-editor"
var react_editor_ = __webpack_require__(7531);
// EXTERNAL MODULE: external "isomorphic-dompurify"
var external_isomorphic_dompurify_ = __webpack_require__(3082);
var external_isomorphic_dompurify_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_dompurify_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/client/common/constants/common.ts
const IS_SERVER = true;
const DEFAULT_FONT_FAMILY = 'Noto Sans KR';
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/client/common/components/organisms/EditorViewer/EditorViewer.tsx








const EditorViewer = ({
  initialValue = ''
}) => {
  const clean = external_isomorphic_dompurify_default().sanitize(initialValue);
  return /*#__PURE__*/jsx_runtime_.jsx(EditorViewerWrapper, {
    children: /*#__PURE__*/jsx_runtime_.jsx(react_editor_.Viewer, {
      initialValue: clean
    })
  });
};

/* harmony default export */ const EditorViewer_EditorViewer = (EditorViewer);
const EditorViewerWrapper = external_styled_components_default().div.withConfig({
  displayName: "EditorViewer__EditorViewerWrapper",
  componentId: "sc-q5tbbj-0"
})([".tui-editor-contents{*{font-family:", ";}::marker{color:transparent;}}}"], DEFAULT_FONT_FAMILY);

/***/ })

};
;