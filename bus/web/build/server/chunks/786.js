"use strict";
exports.id = 786;
exports.ids = [786];
exports.modules = {

/***/ 5115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m_": () => (/* binding */ SERVICE_NAME),
/* harmony export */   "Pk": () => (/* binding */ SERVER_PORT),
/* harmony export */   "e1": () => (/* binding */ SERVICE_PATH),
/* harmony export */   "PU": () => (/* binding */ FAVICON_PATH),
/* harmony export */   "ym": () => (/* binding */ COOKIE_PATH),
/* harmony export */   "HI": () => (/* binding */ AUTH_COOKIE_NAME)
/* harmony export */ });
/* unused harmony exports SERVER_DOMAIN, API_SERVICE_PATH, ASSETS_PATH, LIBS_PATH, UNAUTHORIZED_ACCESS_ROUTE, DEFAULT_BOARD_PAGE, DEFAULT_BOARD_LIMIT, DEFAULT_DETAIL_BOARD_LIMIT, DEFAULT_ALL_LIST_PARAMS */
const SERVICE_NAME = 'TAP!';
const SERVER_PORT = process.env.PORT || 11002;
const SERVER_DOMAIN = process && false ? '' : `http://localhost:${SERVER_PORT}`;
const SERVICE_PATH = '/bus/web';
const API_SERVICE_PATH = '/bus/api';
const ASSETS_PATH = `${SERVICE_PATH}/assets`;
const LIBS_PATH = `${SERVICE_PATH}/libs`;
const FAVICON_PATH = `${ASSETS_PATH}/favicon`;
const COOKIE_PATH = SERVICE_PATH || '/';
const AUTH_COOKIE_NAME = 'CID_AUT';
const UNAUTHORIZED_ACCESS_ROUTE = `${SERVICE_PATH}/unauthorized`;
const DEFAULT_BOARD_PAGE = 1;
const DEFAULT_BOARD_LIMIT = 20;
const DEFAULT_DETAIL_BOARD_LIMIT = 10;
const DEFAULT_ALL_LIST_PARAMS = {
  page: DEFAULT_BOARD_PAGE,
  limit: 1000
};

/***/ }),

/***/ 6552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ PhaseType)
/* harmony export */ });
let PhaseType;

(function (PhaseType) {
  PhaseType["DEV"] = "dev";
  PhaseType["INT"] = "int";
  PhaseType["STAGE"] = "stage";
  PhaseType["REAL"] = "real";
})(PhaseType || (PhaseType = {}));

/***/ }),

/***/ 5786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "qA": () => (/* binding */ createVariableString),
  "$K": () => (/* binding */ isDefined),
  "xb": () => (/* binding */ isEmpty),
  "PD": () => (/* binding */ makeImageUrl),
  "ub": () => (/* binding */ makeProxyApiUrl),
  "wN": () => (/* binding */ parseInt10),
  "T5": () => (/* binding */ patch_),
  "TG": () => (/* binding */ setAxiosDefaultAuthorization)
});

// UNUSED EXPORTS: asyncEvery, getAxiosDefaultAuthorization, getCookie, isArray, isEmptyObject, isInteger, isNumber, isString, makeApiUrl, patch, prettifyJson, removeAxiosDefaultAuthorization, setAppInfoHeaders

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./src/shared/common/constants/common.ts
var common = __webpack_require__(5115);
// EXTERNAL MODULE: ./src/shared/common/enums/env.ts
var enums_env = __webpack_require__(6552);
;// CONCATENATED MODULE: ./src/shared/env/domain/dev.ts


const DOMAIN = `http://localhost:${common/* SERVER_PORT */.Pk}`;
const SERVICE_API_DOMAIN = 'https://bus-api.int.42dot.io';
const ENV_DEV = {
  NAME: enums_env/* PhaseType.DEV */.x.DEV,
  SERVER_DOMAIN: DOMAIN,
  SERVICE_API_DOMAIN
};
/* harmony default export */ const dev = (ENV_DEV);
;// CONCATENATED MODULE: ./src/shared/env/domain/int.ts

const int_DOMAIN = 'https://tap-int.umos.ai';
const int_SERVICE_API_DOMAIN = 'https://bus-api.int.42dot.io';
const ENV_INT = {
  NAME: enums_env/* PhaseType.INT */.x.INT,
  SERVER_DOMAIN: int_DOMAIN,
  SERVICE_API_DOMAIN: int_SERVICE_API_DOMAIN
};
/* harmony default export */ const domain_int = (ENV_INT);
;// CONCATENATED MODULE: ./src/shared/env/domain/stage.ts

const stage_DOMAIN = 'https://tap-stage.umos.ai';
const stage_SERVICE_API_DOMAIN = 'https://bus-api.stage.42dot.io';
const ENV_STAGE = {
  NAME: enums_env/* PhaseType.INT */.x.INT,
  SERVER_DOMAIN: stage_DOMAIN,
  SERVICE_API_DOMAIN: stage_SERVICE_API_DOMAIN
};
/* harmony default export */ const stage = (ENV_STAGE);
;// CONCATENATED MODULE: ./src/shared/env/domain/real.ts

const real_DOMAIN = 'https://tap.umos.ai';
const real_SERVICE_API_DOMAIN = 'https://bus-api.real.42dot.io';
const ENV_REAL = {
  NAME: enums_env/* PhaseType.REAL */.x.REAL,
  SERVER_DOMAIN: real_DOMAIN,
  SERVICE_API_DOMAIN: real_SERVICE_API_DOMAIN
};
/* harmony default export */ const real = (ENV_REAL);
;// CONCATENATED MODULE: ./src/shared/env/domain/index.ts






function initialEnvSet(env) {
  switch (env) {
    case enums_env/* PhaseType.DEV */.x.DEV:
      return dev;

    case enums_env/* PhaseType.INT */.x.INT:
      return domain_int;

    case enums_env/* PhaseType.STAGE */.x.STAGE:
      return stage;

    case enums_env/* PhaseType.REAL */.x.REAL:
      return real;

    default:
      return domain_int;
    // @TODO Real 환경 구성되면 real 로 변경
  }
}

const ENV = initialEnvSet("dev");
/* harmony default export */ const domain = (ENV);
// EXTERNAL MODULE: external "react-device-detect"
var external_react_device_detect_ = __webpack_require__(2047);
;// CONCATENATED MODULE: ./src/shared/common/utils/common.ts




function isDefined(v) {
  if (v === null || typeof v === 'undefined') {
    return false;
  }

  return true;
}
function isString(v) {
  if (!isDefined(v)) {
    return false;
  }

  return typeof v === 'string';
}
function isNumber(v) {
  if (!isDefined(v)) {
    return false;
  }

  return !isNaN(v) && v.constructor === Number;
}
function isInteger(v) {
  return Number.isInteger(v);
}
function isArray(v) {
  return Array.isArray(v);
}
function isEmptyObject(obj) {
  if (typeof obj === 'object' && obj.hasOwnProperty) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }

    return true;
  }

  return false;
}
function parseInt10(v, guarantee) {
  const int = parseInt(v, 10);

  if (isDefined(guarantee)) {
    return isNumber(int) ? int : guarantee;
  }

  return int;
}
const patch = targets => replacer => value => {
  if (targets !== null && targets !== void 0 && targets.includes(value)) {
    return replacer;
  }

  return value;
};
const patch_ = patch([undefined, null, ''])('-');
function makeImageUrl(path, isServer = false) {
  return `${isServer ? `http://localhost:${common/* SERVER_PORT */.Pk}` : ''}${common/* SERVICE_PATH */.e1}${path}`;
}
function makeApiUrl(path, isServer = false) {
  return `${isServer ? `http://localhost:${SERVER_PORT}` : ''}${SERVICE_PATH}${path}`;
}
function makeProxyApiUrl(path, isServer) {
  return `${isServer === true ? `http://localhost:${common/* SERVER_PORT */.Pk}` : `${domain.SERVER_DOMAIN}`}${common/* SERVICE_PATH */.e1}/proxy${path}`;
}
async function asyncEvery(array, predicate) {
  if (!array) {
    return false;
  }

  for (const ele of array) {
    if (!(await predicate(ele))) return false;
  }

  return true;
}
function isEmpty(target) {
  if (target === null || target === undefined) {
    return !target;
  }

  if (typeof target === 'object') {
    if (target.constructor === Object) {
      return Object.keys(target).length === 0;
    }

    if (target.constructor === Array) {
      return target.length === 0;
    }
  }

  if (typeof target === 'string') {
    return target.trim().length === 0;
  }
}
function createVariableString(text, variables) {
  return text.replace(new RegExp('{([^{]+)}', 'g'), function (_unused, varName) {
    return variables[varName];
  });
}
function prettifyJson(obj) {
  if (typeof obj === 'string') {
    return JSON.stringify(JSON.parse(obj), null, 2);
  }

  return JSON.stringify(obj, null, 2);
}
function getCookie(cookie, key) {
  const cookies = (cookie || '').split('; ');
  let splitArr = [],
      keyStr = '',
      value = '';

  for (let i = 0, max = cookies.length; i < max; ++i) {
    splitArr = cookies[i].split('=');
    keyStr = splitArr[0];
    value = decodeURIComponent(splitArr[1]);
    if (keyStr === key) return value;
  }

  return null;
}
function setAxiosDefaultAuthorization(accessToken) {
  if (accessToken) {
    (external_axios_default()).defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }
}
function getAxiosDefaultAuthorization() {
  return axios.defaults.headers.common['Authorization'];
}
function removeAxiosDefaultAuthorization() {
  axios.defaults.headers.common['Authorization'] = '';
}
/**
 * TAP! 통합회원(UMOS) API 요청을 위한 필수 app header 정보를 설정한다.
 * @see https://gitlab.42dot.ai/tap/tap-member-auth/-/blob/develop/oauth2/protocol/doc/oauth2_token.md#requestverifytoken
 * @param req
 */

function setAppInfoHeaders(req) {
  const defaultAppInfoHeaderValue = 'app-test-flight';
  axios.defaults.headers.common['app-device-uuid'] = req.headers['app-device-uuid'] || defaultAppInfoHeaderValue;
  axios.defaults.headers.common['app-version'] = req.headers['app-device-device-manufacturer'] || defaultAppInfoHeaderValue;
  axios.defaults.headers.common['app-device-model-name'] = req.headers['app-device-model-name'] || (isMobile ? mobileModel : defaultAppInfoHeaderValue);
  axios.defaults.headers.common['app-device-os-version'] = req.headers['app-device-os-version'] || (isMobile ? osVersion : defaultAppInfoHeaderValue);
  axios.defaults.headers.common['app-device-device-manufacturer'] = req.headers['app-device-device-manufacturer'] || (isMobile ? osName : defaultAppInfoHeaderValue);
}

/***/ })

};
;