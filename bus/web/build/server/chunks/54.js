"use strict";
exports.id = 54;
exports.ids = [54];
exports.modules = {

/***/ 4054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ axios),
/* harmony export */   "Z": () => (/* binding */ requestProxy)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5786);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const axiosRetryInterceptor = err => {
  const config = err.config;
  const response = err === null || err === void 0 ? void 0 : err.response; // 406 status이면 retry를 하지 않는다.

  if ((response === null || response === void 0 ? void 0 : response.status) === 406) {
    return Promise.reject(err);
  } // If config does not exist or the retry option is not set, reject


  if (!config || !config.retry) {
    return Promise.reject(err);
  } // Set the variable for keeping track of the retry count


  config.__retryCount = config.__retryCount || 0; // Check if we've maxed out the total number of retries

  if (config.__retryCount >= config.retry) {
    // Reject with the error
    return Promise.reject(err);
  } // Increase the retry count


  config.__retryCount += 1; // Create new promise to handle exponential backoff

  const backoff = new Promise(resolve => {
    setTimeout(() => {
      resolve(null);
    }, config.retryDelay || 1);
  }); // Return the promise in which recalls axios to retry the request

  return backoff.then(() => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default()(config);
  });
};

axios__WEBPACK_IMPORTED_MODULE_0___default().interceptors.response.use(undefined, axiosRetryInterceptor);

const DEFAULT_RETRY_OPTIONS = {
  retry: 5,
  retryDelay: 1000
};
function axios(options, retryOptions = DEFAULT_RETRY_OPTIONS) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread(_objectSpread({}, options), retryOptions));
}
const requestProxy = async ({
  method,
  path,
  data,
  params
}, config = {
  isServer: false
}, retryOptions) => {
  var _params;

  // search params destructuring
  if ((_params = params) !== null && _params !== void 0 && _params.search) {
    params = _objectSpread({
      limit: params.limit,
      page: params.page
    }, params.search);
  } // Ref: https://axios-http.com/docs/req_config


  const response = await axios(_objectSpread({
    method,
    url: (0,_common__WEBPACK_IMPORTED_MODULE_1__/* .makeProxyApiUrl */ .ub)(path, config === null || config === void 0 ? void 0 : config.isServer),
    data,
    // send data into the request body
    params
  }, config), _objectSpread({}, retryOptions && _objectSpread({}, retryOptions)));
  return response;
};

/***/ })

};
;