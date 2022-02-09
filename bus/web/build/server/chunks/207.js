"use strict";
exports.id = 207;
exports.ids = [207];
exports.modules = {

/***/ 2207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p6": () => (/* binding */ formatDate),
  "RD": () => (/* binding */ isShowNew)
});

// UNUSED EXPORTS: convertDay

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(3879);
;// CONCATENATED MODULE: ./src/client/common/constants/diffTimeZone.ts
const DIFF_UTC = {
  KST: 9
};
const DIFF_TIMEZONE = DIFF_UTC.KST;
// EXTERNAL MODULE: ./src/shared/common/enums/common.ts
var common = __webpack_require__(3491);
;// CONCATENATED MODULE: ./src/client/common/utils/formatDate.ts



function formatDate(date, options) {
  try {
    if (!date) {
      return (options === null || options === void 0 ? void 0 : options.nullText) || '-';
    }

    if (!(options !== null && options !== void 0 && options.notAppliedTimeZone)) {
      date = new Date(date).toISOString();
    }

    if (typeof date === 'string' && date.indexOf('Z') > -1) {
      date = date.replace(/Z$/g, '');
    }

    const day = convertDay(date, options === null || options === void 0 ? void 0 : options.dayFormat);
    const formatText = (options === null || options === void 0 ? void 0 : options.format) || common/* DateFormat.DETAIL */.t.DETAIL;
    const dateformat = options !== null && options !== void 0 && options.replaceText ? formatText.replace(/-/g, options === null || options === void 0 ? void 0 : options.replaceText) : formatText;
    return `${(0,external_date_fns_.format)(options !== null && options !== void 0 && options.notAppliedTimeZone ? new Date(date) : (0,external_date_fns_.addHours)(new Date(date), DIFF_TIMEZONE), dateformat)}${day ? ` ${day}` : ''}` || (options === null || options === void 0 ? void 0 : options.nullText) || '-';
  } catch (e) {
    return (options === null || options === void 0 ? void 0 : options.nullText) || '-';
  }
}
function convertDay(date, dayFormat) {
  if (!dayFormat || !dayFormat.match('day') && !dayFormat.match('d')) {
    return null;
  }

  const dayIndex = (0,external_date_fns_.getDay)(new Date(date));
  const dayList = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  return dayFormat.match('day') ? dayFormat.replace('day', dayList[dayIndex]) : dayFormat.replace('d', dayList[dayIndex]).replace('요일', '');
}
function isShowNew(date) {
  let isNew = false;
  const diffDay = (0,external_date_fns_.differenceInCalendarDays)(Date.now(), new Date(date));

  if (diffDay < 3) {
    isNew = true;
  }

  return isNew;
}

/***/ }),

/***/ 3491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ DateFormat)
/* harmony export */ });
let DateFormat;

(function (DateFormat) {
  DateFormat["DEFAULT"] = "yyyy/MM/dd";
  DateFormat["SIMPLE_DATE"] = "yyyy-MM-dd";
  DateFormat["DATE_SHORT_TIME"] = "yyyy-MM-dd HH:mm";
  DateFormat["DETAIL"] = "yyyy-MM-dd HH:mm:ss";
  DateFormat["SHORT_TIME"] = "HH:mm";
})(DateFormat || (DateFormat = {}));

/***/ })

};
;