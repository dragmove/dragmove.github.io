"use strict";
exports.id = 845;
exports.ids = [845];
exports.modules = {

/***/ 6891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Rf": () => (/* reexport */ ApiResponse),
  "Jc": () => (/* reexport */ errorToast_errorToast)
});

// UNUSED EXPORTS: ApiErrorCatcher

// EXTERNAL MODULE: ./src/client/common/antd-modules.ts
var antd_modules = __webpack_require__(2710);
// EXTERNAL MODULE: ./src/shared/common/utils/common.ts + 5 modules
var common = __webpack_require__(5786);
;// CONCATENATED MODULE: ./src/client/common/modules/clientResponseHandler/utils/errorToast.ts


function errorToast_errorToast(response) {
  const [message, description] = generateMessage(response);
  antd_modules/* notification.open */.t6.open({
    message,
    description
  });
}

function generateMessage(response) {
  var _response$data, _response$data2, _response$data3, _response$data4;

  const message = `
    [${((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.code) || response.status || '-'}]
    ${((_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.status) || response.statusText || '-'}
    `;
  const description = ((_response$data3 = response.data) === null || _response$data3 === void 0 ? void 0 : _response$data3.description) || ((_response$data4 = response.data) === null || _response$data4 === void 0 ? void 0 : _response$data4.message) || stringifyResponseData(response.data) || '내용이 없습니다.';
  return [message, typeof description === 'string' ? description : JSON.stringify(description)];
}

function stringifyResponseData(data) {
  if (!(0,common/* isDefined */.$K)(data)) return null;

  if (typeof data === 'object') {
    return `${JSON.stringify(data)}`;
  }

  return `${data}`;
}
;// CONCATENATED MODULE: ./src/client/common/modules/clientResponseHandler/decorators/ApiErrorCatcher.ts

function ApiErrorCatcher(target, key, descriptor) {
  const fn = descriptor.value;

  descriptor.value = async function (...args) {
    try {
      return await fn.apply(this, [...args]);
    } catch (err) {
      errorToast(err.response);
      console.error(err);
    }
  };
}
;// CONCATENATED MODULE: ./src/client/common/modules/clientResponseHandler/decorators/ApiResponse.ts

const RESULT_API_CALL_FAILED = false;
function ApiResponse(target, key, descriptor) {
  const fn = descriptor.value;

  descriptor.value = async function (...args) {
    try {
      return await fn.apply(this, [...args]);
    } catch (err) {
      console.error(err);
      errorToast_errorToast(err.response);
      return RESULT_API_CALL_FAILED;
    }
  };
}
;// CONCATENATED MODULE: ./src/client/common/modules/clientResponseHandler/index.ts





/***/ }),

/***/ 7845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ ProxyBaseService),
/* harmony export */   "rO": () => (/* binding */ returnResponseData)
/* harmony export */ });
/* unused harmony export ResponseCode */
/* harmony import */ var _shared_common_utils_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4054);
/* harmony import */ var _common_modules_clientResponseHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6891);
/* harmony import */ var _common_utils_messageToast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7023);
/* harmony import */ var _common_constants_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2068);
/* harmony import */ var _shared_common_utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5786);
var _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }






let ProxyBaseService = (_class = class ProxyBaseService {
  constructor() {
    this.originalBasePath = void 0;
    this.basePath = void 0;
  }

  setBasePath(path) {
    this.basePath = this.originalBasePath = path;
    return this;
  }
  /**
   * basePath의 형태가 유동적인 경우 사용함.
   * variables에 해당 key가 없을 경우 변환 될 변수는 undefined가 되고 제거된다.
   * @param variables : createVariableString 에서 교체될 Object
   * @param options: removeTexts는 api url에서 삭제될 Path를 Text로 넣어준다.
   */


  setBasePathWithId(variables, options) {
    this.basePath = this.originalBasePath;
    let basePathWithId = (0,_shared_common_utils_common__WEBPACK_IMPORTED_MODULE_4__/* .createVariableString */ .qA)(this.basePath, variables);
    basePathWithId = this.removePath(basePathWithId, options === null || options === void 0 ? void 0 : options.removeTexts);
    this.basePath = basePathWithId;
  }
  /**
   * createVariableString을 통해 1차 생성된 url에서 undefined나 설정된 Text를 삭제해준다.
   * @param basePath: createVariableString을 통해 1차 생성된 url
   * @param removeTexts: 삭제될 Path Text
   */


  removePath(basePath, removeTexts = []) {
    removeTexts.push('undefined');
    const result = basePath.split('/').flatMap((item, index) => {
      if (!removeTexts.includes(item)) {
        return item;
      }

      return [];
    });
    return result.join('/');
  }

  async get(id, config) {
    const response = await (0,_shared_common_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* .requestProxy */ .Z)({
      method: 'get',
      path: `${this.basePath}/${id}`
    }, config);
    return returnResponseData(response);
  }

  async getList(params, config) {
    const response = await (0,_shared_common_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* .requestProxy */ .Z)({
      method: 'get',
      path: `${this.basePath}`,
      params
    }, config);
    return returnResponseData(response);
  }

  async search(params, config) {
    const response = await (0,_shared_common_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* .requestProxy */ .Z)({
      method: 'get',
      path: `${this.basePath}/search`,
      params
    }, config);
    return returnResponseData(response);
  }

  async create(data, config) {
    const response = await (0,_shared_common_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* .requestProxy */ .Z)({
      method: 'post',
      path: `${this.basePath}`,
      data
    }, config);
    return returnResponseData(response, {
      message: _common_constants_text__WEBPACK_IMPORTED_MODULE_3__/* .MESSAGE_TEXT.CREATE.COMPLETE */ ._.CREATE.COMPLETE
    });
  }

  async update(id, data, config) {
    const response = await (0,_shared_common_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* .requestProxy */ .Z)({
      method: 'put',
      path: `${this.basePath}/${id}`,
      data
    }, config);
    return returnResponseData(response, {
      message: _common_constants_text__WEBPACK_IMPORTED_MODULE_3__/* .MESSAGE_TEXT.UPDATE.COMPLETE */ ._.UPDATE.COMPLETE
    });
  }

  async delete(ids, config) {
    const response = await (0,_shared_common_utils_axios__WEBPACK_IMPORTED_MODULE_0__/* .requestProxy */ .Z)({
      method: 'delete',
      path: `${this.basePath}/${ids}`
    }, config);
    return returnResponseData(response, {
      message: _common_constants_text__WEBPACK_IMPORTED_MODULE_3__/* .MESSAGE_TEXT.DELETE.COMPLETE */ ._.DELETE.COMPLETE
    });
  }

}, (_applyDecoratedDescriptor(_class.prototype, "get", [_common_modules_clientResponseHandler__WEBPACK_IMPORTED_MODULE_1__/* .ApiResponse */ .Rf], Object.getOwnPropertyDescriptor(_class.prototype, "get"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getList", [_common_modules_clientResponseHandler__WEBPACK_IMPORTED_MODULE_1__/* .ApiResponse */ .Rf], Object.getOwnPropertyDescriptor(_class.prototype, "getList"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "search", [_common_modules_clientResponseHandler__WEBPACK_IMPORTED_MODULE_1__/* .ApiResponse */ .Rf], Object.getOwnPropertyDescriptor(_class.prototype, "search"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "create", [_common_modules_clientResponseHandler__WEBPACK_IMPORTED_MODULE_1__/* .ApiResponse */ .Rf], Object.getOwnPropertyDescriptor(_class.prototype, "create"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "update", [_common_modules_clientResponseHandler__WEBPACK_IMPORTED_MODULE_1__/* .ApiResponse */ .Rf], Object.getOwnPropertyDescriptor(_class.prototype, "update"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "delete", [_common_modules_clientResponseHandler__WEBPACK_IMPORTED_MODULE_1__/* .ApiResponse */ .Rf], Object.getOwnPropertyDescriptor(_class.prototype, "delete"), _class.prototype)), _class);

let ResponseCode;

(function (ResponseCode) {
  ResponseCode[ResponseCode["COMMON_OK"] = 0] = "COMMON_OK";
  ResponseCode[ResponseCode["NO_DATA"] = 106] = "NO_DATA";
})(ResponseCode || (ResponseCode = {}));

const errorExceptCodes = [ResponseCode.NO_DATA];
/**
 * COMMON_OK(responseCode 0)의 상태가 아닐 경우 에러 토스트 노출
 * false를 리턴하는 이유는 업데이트나 삭제 실패시 그 뒤의 과정을 제어할 수 있도록 하기 위함
 * @param response
 * @param options = { message } 성공 메시지가 필요한 경우 추가
 */

function returnResponseData(response, options) {
  const responseCode = response.data.responseCode;

  if (responseCode !== ResponseCode.COMMON_OK) {
    if (!errorExceptCodes.includes(responseCode)) {
      (0,_common_modules_clientResponseHandler__WEBPACK_IMPORTED_MODULE_1__/* .errorToast */ .Jc)(response);
    }

    return false;
  } else {
    var _response$data$result;

    if (options !== null && options !== void 0 && options.message) {
      (0,_common_utils_messageToast__WEBPACK_IMPORTED_MODULE_2__/* .messageToast */ .l)(options.message, {
        type: _common_utils_messageToast__WEBPACK_IMPORTED_MODULE_2__/* .MessageToastType.SUCCESS */ .U.SUCCESS
      });
    } // response.data에서 result의 유무로 판단하는 로직이 있음(중복 체크 등)


    return (_response$data$result = response.data.result) !== null && _response$data$result !== void 0 ? _response$data$result : null;
  }
}

/***/ })

};
;