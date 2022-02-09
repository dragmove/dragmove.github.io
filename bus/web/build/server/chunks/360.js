"use strict";
exports.id = 360;
exports.ids = [360];
exports.modules = {

/***/ 4360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ AppEventHandler)
/* harmony export */ });
/* unused harmony export IS_ANDROID */
const IS_ANDROID = userAgent => {
  return /Android/.test(userAgent);
}; // https://42dot.atlassian.net/wiki/spaces/SJDRT/pages/2046395873/TAP+rider+app+javascript+interfaces

const AppEventHandler = {
  setToolbar: (title, closable) => {
    var _navigator, _window, _window$commonJSInter, _window2, _window2$webkit, _window2$webkit$messa, _window2$webkit$messa2;

    IS_ANDROID((_navigator = navigator) === null || _navigator === void 0 ? void 0 : _navigator.userAgent) ? (_window = window) === null || _window === void 0 ? void 0 : (_window$commonJSInter = _window.commonJSInterfaces) === null || _window$commonJSInter === void 0 ? void 0 : _window$commonJSInter.setToolbar(title, closable) : (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$webkit = _window2.webkit) === null || _window2$webkit === void 0 ? void 0 : (_window2$webkit$messa = _window2$webkit.messageHandlers) === null || _window2$webkit$messa === void 0 ? void 0 : (_window2$webkit$messa2 = _window2$webkit$messa.commonJSInterfaces) === null || _window2$webkit$messa2 === void 0 ? void 0 : _window2$webkit$messa2.postMessage({
      action: 'setToolbar',
      title,
      closable
    });
  },
  evaluateService: orderId => {
    var _navigator2, _window3, _window3$evaluationJS, _window4, _window4$webkit, _window4$webkit$messa, _window4$webkit$messa2;

    IS_ANDROID((_navigator2 = navigator) === null || _navigator2 === void 0 ? void 0 : _navigator2.userAgent) ? (_window3 = window) === null || _window3 === void 0 ? void 0 : (_window3$evaluationJS = _window3.evaluationJSInterfaces) === null || _window3$evaluationJS === void 0 ? void 0 : _window3$evaluationJS.evaluateService(orderId) : (_window4 = window) === null || _window4 === void 0 ? void 0 : (_window4$webkit = _window4.webkit) === null || _window4$webkit === void 0 ? void 0 : (_window4$webkit$messa = _window4$webkit.messageHandlers) === null || _window4$webkit$messa === void 0 ? void 0 : (_window4$webkit$messa2 = _window4$webkit$messa.evaluationJSInterfaces) === null || _window4$webkit$messa2 === void 0 ? void 0 : _window4$webkit$messa2.postMessage({
      action: 'evaluateService',
      orderId
    });
  }
};

/***/ })

};
;