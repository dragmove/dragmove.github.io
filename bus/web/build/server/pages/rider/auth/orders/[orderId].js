"use strict";
(() => {
var exports = {};
exports.id = 952;
exports.ids = [952];
exports.modules = {

/***/ 209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _orderId_)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/client/rider/components/templates/BasePageLayout/BasePageLayout.tsx
var BasePageLayout = __webpack_require__(8324);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/client/common/utils/common.ts + 1 modules
var common = __webpack_require__(3092);
// EXTERNAL MODULE: ./src/client/rider/services/proxy/orders.ts
var orders = __webpack_require__(2764);
// EXTERNAL MODULE: ./src/client/rider/components/pages/order/templates/OrderBoardingInfoTemplate.tsx + 1 modules
var OrderBoardingInfoTemplate = __webpack_require__(3537);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/client/rider/components/pages/order/templates/OrderDetailNoticeTemplate.tsx





const OrderDetailNoticeTemplate = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(OrderDetailNotice, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        children: "\uD3C9\uAC00\uD558\uAE30\uB294 \uD558\uCC28 \uD6C4 3\uC77C \uC774\uB0B4\uC5D0\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4"
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: "\uC2E4\uC81C \uC694\uAE08\uACFC \uB2E4\uB97C \uC218 \uC788\uC73C\uBA70, \uD574\uB2F9 \uAC70\uB798\uB0B4\uC5ED\uC11C\uB294 \uC99D\uBE59\uC73C\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"
      })]
    })
  });
};

/* harmony default export */ const templates_OrderDetailNoticeTemplate = (OrderDetailNoticeTemplate);
const OrderDetailNotice = external_styled_components_default().div.withConfig({
  displayName: "OrderDetailNoticeTemplate__OrderDetailNotice",
  componentId: "sc-ro8syq-0"
})(["margin-top:20px;padding:12px;background:#f8f8f8;font-size:14px;color:#969696;text-align:center;ul{margin:0;padding:0 0 0 12px;}li{text-align:left;font-size:12px;line-height:16px;color:#969696;&::marker{font-size:0.1rem;}}"]);
// EXTERNAL MODULE: ./src/client/common/antd-modules.ts
var antd_modules = __webpack_require__(2710);
;// CONCATENATED MODULE: ./src/client/rider/components/atoms/Button/Button.tsx

const Button = antd_modules/* AntdButton */.C0;
/* harmony default export */ const Button_Button = (Button);
const ButtonGroup = antd_modules/* AntdButton.Group */.C0.Group;

let ButtonTypes;

(function (ButtonTypes) {
  ButtonTypes["DEFAULT"] = "default";
  ButtonTypes["PRIMARY"] = "primary";
  ButtonTypes["GHOST"] = "ghost";
  ButtonTypes["DASHED"] = "dashed";
  ButtonTypes["LINK"] = "link";
  ButtonTypes["TEXT"] = "text";
})(ButtonTypes || (ButtonTypes = {}));

let ButtonHTMLTypes;

(function (ButtonHTMLTypes) {
  ButtonHTMLTypes["SUBMIT"] = "submit";
  ButtonHTMLTypes["BUTTON"] = "button";
  ButtonHTMLTypes["RESET"] = "reset";
})(ButtonHTMLTypes || (ButtonHTMLTypes = {}));
// EXTERNAL MODULE: ./src/client/common/utils/appEventHandler.ts
var appEventHandler = __webpack_require__(4360);
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(3879);
// EXTERNAL MODULE: ./src/shared/rider/enums/orderStatus.ts
var orderStatus = __webpack_require__(7995);
;// CONCATENATED MODULE: ./src/client/rider/components/pages/order/templates/OrderEvaluationButtonTemplate.tsx









const OrderEvaluationButtonTemplate = ({
  isEvaluated,
  orderId,
  arrivalAt,
  displayStatus,
  onClickEmail
}) => {
  const isTimeOver = arrivalAt ? (0,external_date_fns_.isAfter)(new Date(), (0,external_date_fns_.addDays)(new Date(arrivalAt), 3)) : true;
  const isShowEvaluationButton = !isEvaluated && !isTimeOver;
  const isShowEmailButton = displayStatus === orderStatus/* OrderDisplayStatus.PAID */.PP.PAID || displayStatus === orderStatus/* OrderDisplayStatus.PAY_CANCEL */.PP.PAY_CANCEL;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ButtonWrap, {
    children: [isShowEmailButton && /*#__PURE__*/jsx_runtime_.jsx(Button_Button, {
      block: true,
      size: 'large',
      className: 'button email-button',
      onClick: () => {
        void (onClickEmail === null || onClickEmail === void 0 ? void 0 : onClickEmail());
      },
      children: "\uC774\uBA54\uC77C\uB85C \uBCF4\uB0B4\uAE30"
    }), isShowEvaluationButton && /*#__PURE__*/jsx_runtime_.jsx(Button_Button, {
      block: true,
      size: 'large',
      className: 'button evaluation-button',
      onClick: () => {
        appEventHandler/* AppEventHandler.evaluateService */.N.evaluateService(orderId);
      },
      children: "\uD3C9\uAC00\uD558\uAE30"
    })]
  });
};

/* harmony default export */ const templates_OrderEvaluationButtonTemplate = (OrderEvaluationButtonTemplate);
const ButtonWrap = external_styled_components_default().div.withConfig({
  displayName: "OrderEvaluationButtonTemplate__ButtonWrap",
  componentId: "sc-1csc0a0-0"
})(["display:flex;position:fixed;left:0;bottom:0;width:100%;background:#fff;.button{font-size:16px;height:64px;font-weight:bold;border:none;&.email-button{color:#5a46fa;background-color:#eceefc;}&.evaluation-button{background-color:#5a46fa;color:#fff;}}"]);
// EXTERNAL MODULE: ./src/client/common/utils/formatDate.ts + 1 modules
var formatDate = __webpack_require__(2207);
// EXTERNAL MODULE: ./src/shared/common/enums/common.ts
var enums_common = __webpack_require__(3491);
// EXTERNAL MODULE: ./src/client/rider/components/pages/order/templates/OrderListTemplate.tsx + 1 modules
var OrderListTemplate = __webpack_require__(930);
// EXTERNAL MODULE: ./src/shared/common/utils/common.ts + 5 modules
var utils_common = __webpack_require__(5786);
// EXTERNAL MODULE: ./src/client/common/components/atoms/Loading/index.tsx
var Loading = __webpack_require__(3798);
;// CONCATENATED MODULE: ./src/client/rider/components/pages/order/templates/StyledOrderDetailTemplate.tsx

const OrderDetailSection = external_styled_components_default().section.withConfig({
  displayName: "StyledOrderDetailTemplate__OrderDetailSection",
  componentId: "sc-14w481-0"
})(["padding-top:16px;&.payment-section{border-top:1px solid #efefef;}.total-amount{color:#000;}"]);
const OrderDetailSectionTitle = external_styled_components_default().h3.withConfig({
  displayName: "StyledOrderDetailTemplate__OrderDetailSectionTitle",
  componentId: "sc-14w481-1"
})(["display:flex;justify-content:space-between;align-items:center;margin:0;color:#5a46fa;font-size:14px;line-height:20px;font-weight:normal;"]);
const OrderDetailInfo = external_styled_components_default().div.withConfig({
  displayName: "StyledOrderDetailTemplate__OrderDetailInfo",
  componentId: "sc-14w481-2"
})(["padding:10px 0;"]);
const OrderDetailInfoItem = external_styled_components_default().div.withConfig({
  displayName: "StyledOrderDetailTemplate__OrderDetailInfoItem",
  componentId: "sc-14w481-3"
})(["display:flex;justify-content:space-between;align-items:center;padding:6px 0;font-size:14px;line-height:20px;color:#969696;span{word-break:break-all;text-align:right;width:75%;&.label{color:#000;width:25%;text-align:left;}}"]);
;// CONCATENATED MODULE: ./src/shared/common/enums/paymentCodes.ts
let PaymentType;

(function (PaymentType) {
  PaymentType["PREPAYMENT"] = "PYMT000001";
  PaymentType["PAYMENT"] = "PYMT000002";
  PaymentType["REFUND"] = "PYMT000003";
})(PaymentType || (PaymentType = {}));

let PaymentTypeName;

(function (PaymentTypeName) {
  PaymentTypeName["PYMT000001"] = "\uC120\uACB0\uC81C";
  PaymentTypeName["PYMT000002"] = "\uACB0\uC81C";
  PaymentTypeName["PYMT000003"] = "\uD658\uBD88";
})(PaymentTypeName || (PaymentTypeName = {}));

let PaymentMethodType;

(function (PaymentMethodType) {
  PaymentMethodType["CARD"] = "PMTH000001";
  PaymentMethodType["COUPON"] = "PMTH000002";
  PaymentMethodType["CASH"] = "PMTH000003";
  PaymentMethodType["PRE_T_MONEY"] = "PMTH000004";
  PaymentMethodType["T_MONEY"] = "PMTH000005";
})(PaymentMethodType || (PaymentMethodType = {}));

let PaymentMethodTypeName;

(function (PaymentMethodTypeName) {
  PaymentMethodTypeName["PMTH000001"] = "\uCE74\uB4DC";
  PaymentMethodTypeName["PMTH000002"] = "\uCFE0\uD3F0";
  PaymentMethodTypeName["PMTH000003"] = "\uD604\uAE08";
  PaymentMethodTypeName["PMTH000004"] = "\uC120\uBD88 \uD2F0\uBA38\uB2C8 \uCE74\uB4DC";
  PaymentMethodTypeName["PMTH000005"] = "\uD6C4\uBD88 \uD2F0\uBA38\uB2C8 \uCE74\uB4DC";
})(PaymentMethodTypeName || (PaymentMethodTypeName = {}));

let PaymentResultCode;

(function (PaymentResultCode) {
  PaymentResultCode["SUCCESS"] = "SUCCESS";
  PaymentResultCode["ERROR"] = "PG_ERROR";
})(PaymentResultCode || (PaymentResultCode = {}));

let PaymentIssuerType;

(function (PaymentIssuerType) {
  PaymentIssuerType[PaymentIssuerType["PERSONAL"] = 1] = "PERSONAL";
  PaymentIssuerType[PaymentIssuerType["CORPORATION"] = 2] = "CORPORATION";
})(PaymentIssuerType || (PaymentIssuerType = {}));

let PaymentIssuerTypeName;

(function (PaymentIssuerTypeName) {
  PaymentIssuerTypeName["PERSONAL"] = "\uAC1C\uC778";
  PaymentIssuerTypeName["CORPORATION"] = "\uBC95\uC778";
})(PaymentIssuerTypeName || (PaymentIssuerTypeName = {}));
;// CONCATENATED MODULE: ./src/client/common/utils/payment.ts
function numberToLocaleString(number) {
  if (number <= 0 || isNaN(Number(number))) return '0';
  return number.toLocaleString();
}
;// CONCATENATED MODULE: ./src/client/rider/components/pages/order/templates/PaymentInfoSectionTemplate.tsx













const PaymentInfoSectionTemplate = ({
  status,
  payments,
  isPromotion
}) => {
  if ((0,utils_common/* isEmpty */.xb)(payments)) return /*#__PURE__*/jsx_runtime_.jsx(PaymentsInfoSection, {
    isPromotion: isPromotion
  });
  const {
    payment,
    canceledPayment
  } = getPaymentInfo(status, payments);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(PaymentsInfoSection, {
      isPromotion: isPromotion,
      status: status,
      amount: payment === null || payment === void 0 ? void 0 : payment.amount,
      paymentMethod: getPaymentMethod(payment),
      paymentResultMsg: payment === null || payment === void 0 ? void 0 : payment.resultMsg,
      paidAt: payment === null || payment === void 0 ? void 0 : payment.paidAt
    }), canceledPayment && /*#__PURE__*/jsx_runtime_.jsx(_StyledOrderDetailSection, {
      className: 'payment-section',
      $_css: 'padding-top: 0',
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(OrderDetailInfo, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(OrderDetailInfoItem, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: 'label',
            children: "\uCDE8\uC18C\uAE08\uC561"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: 'total-amount',
            children: [`-${numberToLocaleString(canceledPayment.amount)}`, "\uC6D0"]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(OrderDetailInfoItem, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: 'label',
            children: "\uCDE8\uC18C\uC77C\uC2DC"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: (0,formatDate/* formatDate */.p6)(canceledPayment.paidAt, {
              format: enums_common/* DateFormat.DATE_SHORT_TIME */.t.DATE_SHORT_TIME
            })
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const templates_PaymentInfoSectionTemplate = (PaymentInfoSectionTemplate);
const FIRST_BOARDING_FREE = '첫 탑승 무료';

const PaymentsInfoSection = ({
  status,
  amount,
  paymentMethod,
  paymentResultMsg,
  paidAt,
  isPromotion
}) => {
  const isUnpaid = status === orderStatus/* OrderDisplayStatus.UNPAID */.PP.UNPAID;

  function generateAmount() {
    if (isPromotion) return FIRST_BOARDING_FREE;
    if (!amount) return '-';
    const result = `${numberToLocaleString(amount)}원`;
    return isUnpaid ? `- ${result}` : result;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(OrderDetailSection, {
    className: 'payment-section',
    children: [/*#__PURE__*/jsx_runtime_.jsx(OrderDetailSectionTitle, {
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "\uACB0\uC81C\uC815\uBCF4"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(OrderDetailInfo, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(OrderDetailInfoItem, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: 'label',
          children: [isUnpaid ? '미납' : '결제', "\uAE08\uC561"]
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: generateAmount()
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(OrderDetailInfoItem, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: 'label',
          children: "\uACB0\uC81C\uBC29\uBC95"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: (0,utils_common/* patch_ */.T5)(paymentMethod)
        })]
      }), isUnpaid && /*#__PURE__*/(0,jsx_runtime_.jsxs)(OrderDetailInfoItem, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: 'label',
          children: "\uACB0\uC81C\uC2E4\uD328\uC0AC\uC720"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          children: ["\uC2B9\uC778\uAC70\uC808 / ", (0,utils_common/* patch_ */.T5)(paymentResultMsg)]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(OrderDetailInfoItem, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: 'label',
          children: "\uACB0\uC81C\uC77C\uC2DC"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: (0,utils_common/* patch_ */.T5)((0,formatDate/* formatDate */.p6)(paidAt, {
            format: enums_common/* DateFormat.DATE_SHORT_TIME */.t.DATE_SHORT_TIME
          }))
        })]
      })]
    })]
  });
};

function getPaymentMethod(payment) {
  if (!payment) return;

  if (payment.methodTypeName === PaymentMethodType.CARD) {
    let paymentMethod = '';

    if (payment.resultCode !== PaymentResultCode.SUCCESS) {
      paymentMethod += '승인 거절 / ';
    }

    paymentMethod += generatePaymentCard(payment);
    return paymentMethod;
  }

  return PaymentMethodTypeName[payment.methodTypeName];
}

function generatePaymentCard(payment) {
  let paymentCard = '';
  if (payment.cardName) paymentCard += payment.cardName;
  if (payment.maskedCardNumber) paymentCard += `**${payment.maskedCardNumber.substr(2, 2)}`;
  if (payment.issuerType) paymentCard += `(${PaymentIssuerTypeName[PaymentIssuerType[payment.issuerType]]})`;
  return paymentCard;
}

function getPaymentInfo(status, payments) {
  if ((payments === null || payments === void 0 ? void 0 : payments.length) < 1) {
    return {
      payment: null,
      canceledPayment: null
    };
  }

  const isCanceled = status === orderStatus/* OrderDisplayStatus.PAY_CANCEL */.PP.PAY_CANCEL;
  const lastIndex = payments.length - 1;

  if (isCanceled) {
    return {
      payment: payments[lastIndex - 1],
      canceledPayment: payments[lastIndex]
    };
  } else {
    return {
      payment: payments[lastIndex],
      canceledPayment: null
    };
  }
}

var _StyledOrderDetailSection = external_styled_components_default()(OrderDetailSection).withConfig({
  displayName: "PaymentInfoSectionTemplate___StyledOrderDetailSection",
  componentId: "sc-12astmx-0"
})(["", ""], p => p.$_css);
// EXTERNAL MODULE: ./src/client/rider/components/pages/order/templates/DimBackground.ts
var DimBackground = __webpack_require__(330);
// EXTERNAL MODULE: ./src/client/common/services/ProxyBaseService.ts
var ProxyBaseService = __webpack_require__(7845);
// EXTERNAL MODULE: ./src/shared/rider/enums/basePath.ts
var basePath = __webpack_require__(4122);
// EXTERNAL MODULE: ./src/client/common/modules/clientResponseHandler/index.ts + 3 modules
var clientResponseHandler = __webpack_require__(6891);
// EXTERNAL MODULE: ./src/shared/common/utils/axios.ts
var axios = __webpack_require__(4054);
;// CONCATENATED MODULE: ./src/client/rider/services/proxy/members.ts
var _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }





let MembersService = (_class = class MembersService extends ProxyBaseService/* default */.ZP {
  constructor() {
    super();
    super.setBasePath(basePath/* BasePath.MEMBERS */.P.MEMBERS);
  }

  async getMyInfo(config) {
    const response = await (0,axios/* requestProxy */.Z)({
      method: 'get',
      path: `${this.basePath}`
    }, config);
    return (0,ProxyBaseService/* returnResponseData */.rO)(response);
  }

}, (_applyDecoratedDescriptor(_class.prototype, "getMyInfo", [clientResponseHandler/* ApiResponse */.Rf], Object.getOwnPropertyDescriptor(_class.prototype, "getMyInfo"), _class.prototype)), _class);
/* harmony default export */ const members = (new MembersService());
// EXTERNAL MODULE: ./src/client/common/utils/messageToast.ts
var messageToast = __webpack_require__(7023);
;// CONCATENATED MODULE: ./src/client/rider/components/pages/order/templates/EmailPopUp.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const EmailPopUp = ({
  onClose,
  isShow,
  orderId
}) => {
  const {
    0: myInfo,
    1: setMyInfo
  } = (0,external_react_.useState)(null);
  const {
    0: email,
    1: setEmail
  } = (0,external_react_.useState)(null);
  const {
    0: maskedEmail,
    1: setMaskedEmail
  } = (0,external_react_.useState)(null);
  const {
    0: isDisabledSubmitButton,
    1: setIsDisabledSubmitButton
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    (async () => {
      setMyInfo(await members.getMyInfo());
    })();
  }, []);
  (0,external_react_.useEffect)(() => {
    var _myInfo$tapMemberInfo;

    if (!(myInfo !== null && myInfo !== void 0 && (_myInfo$tapMemberInfo = myInfo.tapMemberInfoDto) !== null && _myInfo$tapMemberInfo !== void 0 && _myInfo$tapMemberInfo.email) || !isShow) return;
    void setMaskedMyEmail();
    setEmail(myInfo.tapMemberInfoDto.email);
  }, [myInfo, isShow]);

  function setMaskedMyEmail() {
    setMaskedEmail(maskEmail(myInfo.tapMemberInfoDto.email));
  }

  async function sendEmail() {
    if (!orderId) return;
    setIsDisabledSubmitButton(true);

    if (!isValidEmail(email)) {
      await (0,messageToast/* messageToast */.l)(`올바른 이메일 형식이 아닙니다.`, {
        type: messageToast/* MessageToastType.ERROR */.U.ERROR
      });
      setIsDisabledSubmitButton(false);
      return;
    }

    const result = await orders/* default.sendEmail */.Z.sendEmail(orderId, {
      email
    });

    if ((0,common/* isFailedApiCall */.Zm)(result)) {
      await (0,messageToast/* messageToast */.l)(`이메일 전송 실패`, {
        type: messageToast/* MessageToastType.ERROR */.U.ERROR
      });
      setIsDisabledSubmitButton(false);
      return;
    }

    void resetAndClose();
    await (0,messageToast/* messageToast */.l)(`${maskedEmail || email}(으)로 전송하였습니다.`);
    setIsDisabledSubmitButton(false);
  }

  function resetAndClose() {
    setEmail('');
    void onClose();
  }

  const emailInputEvent = {
    onFocus: () => {
      if (!(0,utils_common/* isEmpty */.xb)(maskedEmail)) {
        setMaskedEmail(null);
        setEmail('');
      }
    },
    onBlur: () => {
      if ((0,utils_common/* isEmpty */.xb)(email)) setMaskedMyEmail();
    },
    onChange: e => {
      if (!(0,utils_common/* isEmpty */.xb)(maskedEmail)) setMaskedEmail(null);
      setEmail(e.target.value);
    }
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(DimBackground/* DimBackground */.Z, {
      onClick: resetAndClose,
      isShow: isShow
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(PopUpWrap, {
      isShow: isShow,
      children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
        className: 'email-popup-title',
        children: "\uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694."
      }), /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
        type: "text",
        placeholder: '이메일 주소를 입력해 주세요.',
        className: 'email-popup-input',
        value: maskedEmail || email || ''
      }, emailInputEvent)), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: 'email-popup-button-wrap',
        children: [/*#__PURE__*/jsx_runtime_.jsx(Button_Button, {
          className: 'email-popup-button cancel',
          type: ButtonTypes.DEFAULT,
          onClick: resetAndClose,
          children: "\uCDE8\uC18C"
        }), /*#__PURE__*/jsx_runtime_.jsx(Button_Button, {
          disabled: isDisabledSubmitButton,
          className: 'email-popup-button confirm',
          type: ButtonTypes.PRIMARY,
          onClick: sendEmail,
          children: "\uD655\uC778"
        })]
      })]
    })]
  });
};

/* harmony default export */ const templates_EmailPopUp = (EmailPopUp);

function maskEmail(data) {
  if (!data) return null;
  const separatedEmails = data.split('@');
  const emailName = separatedEmails[0].substring(0, 2) + separatedEmails[0].substring(2).replace(/./g, '*');
  return emailName + '@' + separatedEmails[1];
}

function isValidEmail(email) {
  if (!email) return false;
  return email.match(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/);
}

const PopUpWrap = external_styled_components_default().div.withConfig({
  displayName: "EmailPopUp__PopUpWrap",
  componentId: "sc-17gt2m9-0"
})(["display:", ";position:fixed;top:50%;transform:translateY(-50%);background-color:#fff;width:calc(100% - 44px);margin:0 22px;padding:24px;border-radius:4px;.email-popup-title{display:block;padding-bottom:36px;font-size:18px;font-weight:bold;color:#161616;text-align:center;}.email-popup-input{width:100%;font-size:18px;border:none;border-bottom:1px solid rgba(0,0,0,0.35);outline:none;}.email-popup-button-wrap{display:flex;padding-top:36px;}.email-popup-button{padding:0;font-size:16px;height:48px;line-height:48px;width:100%;margin-left:16px;font-weight:bold;border-radius:4px;border:none;&:first-child{margin-left:0;}&.cancel{color:#161616;background-color:#efefef;}}"], ({
  isShow
}) => isShow ? 'block' : 'none');
;// CONCATENATED MODULE: ./src/client/rider/components/pages/order/OrderDetailPage.tsx





















const OrderDetailPage = props => {
  const router = (0,router_.useRouter)();
  const orderId = router.query.orderId;
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)({});
  const {
    0: isShowEmailPopUp,
    1: setIsShowEmailPopUp
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    appEventHandler/* AppEventHandler.setToolbar */.N.setToolbar('자세히 보기', false);
  }, []);
  (0,external_react_.useEffect)(() => {
    (async () => {
      const result = await orders/* default.get */.Z.get(orderId);
      if ((0,common/* isFailedApiCall */.Zm)(result)) return;
      setData(result);
    })();
  }, []);
  if ((0,utils_common/* isEmpty */.xb)(data)) return /*#__PURE__*/jsx_runtime_.jsx(Loading/* default */.Z, {});
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(BasePageLayout/* default */.Z, {
    title: "\uC774\uC6A9 \uB0B4\uC5ED",
    hasHeader: false,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(BasePageLayout/* BaseScrollLayout */.S, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(OrderDetailWrap, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(OrderDetailHeader, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(OrderStatus, {
            children: (0,OrderListTemplate/* getOrderStateName */.p)(data)
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: (0,formatDate/* formatDate */.p6)(data.boardingAt || data.dispatchedAt, {
              format: enums_common/* DateFormat.DEFAULT */.t.DEFAULT,
              dayFormat: 'day',
              nullText: ' '
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(OrderDetailContainer, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(OrderDetailSection, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(OrderDetailSectionTitle, {
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "\uC6B4\uD589\uC815\uBCF4"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(OrderBoardingInfoTemplate/* default */.Z, {
              className: 'order-detail',
              carTypeCode: data.carTypeCode,
              boardingName: data.boardingName,
              arrivalName: data.arrivalName,
              boardingStationName: data.boardingStationName,
              arrivalStationName: data.arrivalStationName
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(OrderDetailInfo, {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(OrderDetailInfoItem, {
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: 'label',
                  children: "\uC6B4\uD589\uC2DC\uAC04"
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: generateOperatingTime({
                    boardingAt: data.boardingAt,
                    arrivalAt: data.arrivalAt
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(OrderDetailInfoItem, {
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: 'label',
                  children: "\uCC28\uB7C9\uC815\uBCF4"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  children: [data.vehicleRegisteredNumber, ' ㅣ ', data.vehicleFamilyName]
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(OrderDetailInfoItem, {
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: 'label',
                  children: "\uC6B4\uC601\uC0AC"
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: data.vehicleCompanyName
                })]
              })]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(templates_PaymentInfoSectionTemplate, {
            isPromotion: data.isPromotion,
            status: data.displayStatus,
            payments: data.payments
          }), /*#__PURE__*/jsx_runtime_.jsx(templates_OrderDetailNoticeTemplate, {})]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(templates_OrderEvaluationButtonTemplate, {
        orderId: parseInt(orderId, 10) || 0,
        isEvaluated: data.isEvaluated || false,
        arrivalAt: data.arrivalAt || null,
        displayStatus: data.displayStatus,
        onClickEmail: () => setIsShowEmailPopUp(true)
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(templates_EmailPopUp, {
      orderId: parseInt(orderId, 10) || 0,
      onClose: () => setIsShowEmailPopUp(false),
      isShow: isShowEmailPopUp
    })]
  });
};

/* harmony default export */ const order_OrderDetailPage = (OrderDetailPage);

function generateOperatingTime({
  boardingAt,
  arrivalAt
}) {
  if (!(boardingAt && arrivalAt)) return '-';
  return `${(0,formatDate/* formatDate */.p6)(boardingAt, {
    format: enums_common/* DateFormat.SHORT_TIME */.t.SHORT_TIME,
    nullText: ' '
  })} - ${(0,formatDate/* formatDate */.p6)(arrivalAt, {
    format: enums_common/* DateFormat.SHORT_TIME */.t.SHORT_TIME,
    nullText: ' '
  })}`;
}

const OrderDetailWrap = external_styled_components_default().div.withConfig({
  displayName: "OrderDetailPage__OrderDetailWrap",
  componentId: "sc-fe1pc7-0"
})(["margin-bottom:82px;border-top:10px solid #f4f6fa;"]);
const OrderDetailHeader = external_styled_components_default().h2.withConfig({
  displayName: "OrderDetailPage__OrderDetailHeader",
  componentId: "sc-fe1pc7-1"
})(["display:flex;justify-content:space-between;align-items:center;margin:0;padding:12px 16px;border-bottom:2px solid #efefef;font-size:16px;font-weight:normal;line-height:24px;color:#000;"]);
const OrderDetailContainer = external_styled_components_default().div.withConfig({
  displayName: "OrderDetailPage__OrderDetailContainer",
  componentId: "sc-fe1pc7-2"
})(["padding:0 16px;"]);
const OrderStatus = external_styled_components_default().span.withConfig({
  displayName: "OrderDetailPage__OrderStatus",
  componentId: "sc-fe1pc7-3"
})(["display:inline-block;padding:5px 11px;border:1px solid #c2c2c2;border-radius:20px;font-size:10px;line-height:14px;color:#969696;"]);
;// CONCATENATED MODULE: ./src/pages/rider/auth/orders/[orderId].tsx




const Index = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(order_OrderDetailPage, {});
};

/* harmony default export */ const _orderId_ = (Index);

/***/ }),

/***/ 2372:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 953:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 9833:
/***/ ((module) => {

module.exports = require("antd/lib/button");

/***/ }),

/***/ 9069:
/***/ ((module) => {

module.exports = require("antd/lib/col");

/***/ }),

/***/ 6357:
/***/ ((module) => {

module.exports = require("antd/lib/collapse");

/***/ }),

/***/ 7074:
/***/ ((module) => {

module.exports = require("antd/lib/empty");

/***/ }),

/***/ 125:
/***/ ((module) => {

module.exports = require("antd/lib/message");

/***/ }),

/***/ 6794:
/***/ ((module) => {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ 6204:
/***/ ((module) => {

module.exports = require("antd/lib/notification");

/***/ }),

/***/ 8186:
/***/ ((module) => {

module.exports = require("antd/lib/row");

/***/ }),

/***/ 8193:
/***/ ((module) => {

module.exports = require("antd/lib/space");

/***/ }),

/***/ 5048:
/***/ ((module) => {

module.exports = require("antd/lib/typography");

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3879:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2047:
/***/ ((module) => {

module.exports = require("react-device-detect");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9914:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [786,92,54,845,207,324,360,76], () => (__webpack_exec__(209)));
module.exports = __webpack_exports__;

})();