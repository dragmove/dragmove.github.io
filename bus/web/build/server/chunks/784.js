"use strict";
exports.id = 784;
exports.ids = [784];
exports.modules = {

/***/ 2784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_modules_clientResponseHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6891);
/* harmony import */ var _common_services_ProxyBaseService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7845);
/* harmony import */ var _shared_common_utils_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4054);
/* harmony import */ var _shared_rider_enums_basePath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4122);
var _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }





let NoticeService = (_class = class NoticeService extends _common_services_ProxyBaseService__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP {
  constructor() {
    super();
    super.setBasePath(_shared_rider_enums_basePath__WEBPACK_IMPORTED_MODULE_3__/* .BasePath.NOTICE */ .P.NOTICE);
  }

  async get(id, config) {
    const response = await (0,_shared_common_utils_axios__WEBPACK_IMPORTED_MODULE_2__/* .requestProxy */ .Z)({
      method: 'get',
      path: `${this.basePath}/detail/${id}`
    }, config);
    return (0,_common_services_ProxyBaseService__WEBPACK_IMPORTED_MODULE_1__/* .returnResponseData */ .rO)(response);
  }

}, (_applyDecoratedDescriptor(_class.prototype, "get", [_common_modules_clientResponseHandler__WEBPACK_IMPORTED_MODULE_0__/* .ApiResponse */ .Rf], Object.getOwnPropertyDescriptor(_class.prototype, "get"), _class.prototype)), _class);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new NoticeService());

/***/ })

};
;