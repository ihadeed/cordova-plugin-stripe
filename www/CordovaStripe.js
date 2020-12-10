"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CordovaStripe = void 0;
var cordova_1 = require("cordova");
var execP = function (methodName, opts) {
    return new Promise(function (resolve, reject) {
        cordova_1.exec(resolve, reject, 'CordovaStripe', methodName, [opts]);
    });
};
var NOOP = function () {
};
var CordovaStripe;
(function (CordovaStripe) {
    var UIButtonType;
    (function (UIButtonType) {
        UIButtonType["SUBMIT"] = "submit";
        UIButtonType["CONTINUE"] = "continue";
        UIButtonType["NEXT"] = "next";
        UIButtonType["CANCEL"] = "cancel";
        UIButtonType["RESEND"] = "resend";
        UIButtonType["SELECT"] = "select";
    })(UIButtonType = CordovaStripe.UIButtonType || (CordovaStripe.UIButtonType = {}));
    var SourceType;
    (function (SourceType) {
        SourceType["ThreeDeeSecure"] = "3ds";
        SourceType["GiroPay"] = "giropay";
        SourceType["iDEAL"] = "ideal";
        SourceType["SEPADebit"] = "sepadebit";
        SourceType["Sofort"] = "sofort";
        SourceType["AliPay"] = "alipay";
        SourceType["AliPayReusable"] = "alipayreusable";
        SourceType["P24"] = "p24";
        SourceType["VisaCheckout"] = "visacheckout";
    })(SourceType = CordovaStripe.SourceType || (CordovaStripe.SourceType = {}));
    var CardBrand;
    (function (CardBrand) {
        CardBrand["AMERICAN_EXPRESS"] = "AMERICAN_EXPRESS";
        CardBrand["DISCOVER"] = "DISCOVER";
        CardBrand["JCB"] = "JCB";
        CardBrand["DINERS_CLUB"] = "DINERS_CLUB";
        CardBrand["VISA"] = "VISA";
        CardBrand["MASTERCARD"] = "MASTERCARD";
        CardBrand["UNIONPAY"] = "UNIONPAY";
        CardBrand["UNKNOWN"] = "UNKNOWN";
    })(CardBrand = CordovaStripe.CardBrand || (CordovaStripe.CardBrand = {}));
    var SourceTypeArray = Object.keys(SourceType).map(function (key) { return SourceType[key]; });
    var Plugin = /** @class */ (function () {
        function Plugin() {
        }
        Plugin.addCustomerSource = function (opts) {
            return execP('addCustomerSource', opts);
        };
        Plugin.cancelApplePay = function () {
            return execP('cancelApplePay');
        };
        Plugin.confirmPaymentIntent = function (opts) {
            return execP('confirmPaymentIntent', opts);
        };
        Plugin.confirmSetupIntent = function (opts) {
            return execP('confirmSetupIntent', opts);
        };
        Plugin.createAccountToken = function (account) {
            return execP('createAccountToken', account);
        };
        Plugin.createBankAccountToken = function (bankAccount) {
            return execP('createBankAccountToken', bankAccount);
        };
        Plugin.createCardToken = function (card) {
            return execP('createCardToken', card);
        };
        Plugin.createPiiToken = function (opts) {
            return execP('createPiiToken', opts);
        };
        Plugin.createSourceToken = function (opts) {
            return execP('createSourceToken', opts);
        };
        Plugin.customerPaymentMethods = function () {
            return execP('customerPaymentMethods');
        };
        Plugin.customizePaymentAuthUI = function (opts) {
            return execP('', opts);
        };
        Plugin.deleteCustomerSource = function (opts) {
            return execP('', opts);
        };
        Plugin.echo = function (options) {
            return execP('echo');
        };
        Plugin.finalizeApplePayTransaction = function (opts) {
            return execP('', opts);
        };
        Plugin.identifyCardBrand = function (opts) {
            return execP('identifyCardBrand', opts);
        };
        Plugin.initCustomerSession = function (opts) {
            return execP('initCustomerSession', opts);
        };
        Plugin.isApplePayAvailable = function () {
            return execP('isApplePayAvailable');
        };
        Plugin.isGooglePayAvailable = function () {
            return execP('isGooglePayAvailable');
        };
        Plugin.payWithApplePay = function (options) {
            return execP('payWithApplePay');
        };
        Plugin.setCustomerDefaultSource = function (opts) {
            return execP('setCustomerDefaultSource', opts);
        };
        Plugin.setPublishableKey = function (opts) {
            return execP('setPublishableKey', opts);
        };
        Plugin.startGooglePayTransaction = function () {
            return execP('startGooglePayTransaction');
        };
        Plugin.validateCVC = function (opts) {
            return execP('validateCVC', opts);
        };
        Plugin.validateCardNumber = function (opts) {
            return execP('validateCardNumber', opts);
        };
        Plugin.validateExpiryDate = function (opts) {
            return execP('validateExpiryDate', opts);
        };
        return Plugin;
    }());
    CordovaStripe.Plugin = Plugin;
})(CordovaStripe = exports.CordovaStripe || (exports.CordovaStripe = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29yZG92YVN0cmlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvcmRvdmFTdHJpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQStCO0FBRy9CLElBQU0sS0FBSyxHQUFHLFVBQWlCLFVBQWtCLEVBQUUsSUFBVztJQUM1RCxPQUFPLElBQUksT0FBTyxDQUFXLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDM0MsY0FBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRixJQUFNLElBQUksR0FBUTtBQUNsQixDQUFDLENBQUM7QUFjRixJQUFpQixhQUFhLENBeWxCN0I7QUF6bEJELFdBQWlCLGFBQWE7SUFpRjVCLElBQVksWUFPWDtJQVBELFdBQVksWUFBWTtRQUN0QixpQ0FBaUIsQ0FBQTtRQUNqQixxQ0FBcUIsQ0FBQTtRQUNyQiw2QkFBYSxDQUFBO1FBQ2IsaUNBQWlCLENBQUE7UUFDakIsaUNBQWlCLENBQUE7UUFDakIsaUNBQWlCLENBQUE7SUFDbkIsQ0FBQyxFQVBXLFlBQVksR0FBWiwwQkFBWSxLQUFaLDBCQUFZLFFBT3ZCO0lBMk5ELElBQVksVUFVWDtJQVZELFdBQVksVUFBVTtRQUNwQixvQ0FBc0IsQ0FBQTtRQUN0QixpQ0FBbUIsQ0FBQTtRQUNuQiw2QkFBZSxDQUFBO1FBQ2YscUNBQXVCLENBQUE7UUFDdkIsK0JBQWlCLENBQUE7UUFDakIsK0JBQWlCLENBQUE7UUFDakIsK0NBQWlDLENBQUE7UUFDakMseUJBQVcsQ0FBQTtRQUNYLDJDQUE2QixDQUFBO0lBQy9CLENBQUMsRUFWVyxVQUFVLEdBQVYsd0JBQVUsS0FBVix3QkFBVSxRQVVyQjtJQUVELElBQVksU0FTWDtJQVRELFdBQVksU0FBUztRQUNuQixrREFBcUMsQ0FBQTtRQUNyQyxrQ0FBcUIsQ0FBQTtR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R0FBdEIsVUFBdUIsT0FBc0M7WUFDM0QsT0FBTyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBRU0sK0JBQXdCLEdBQS9CLFVBQWdDLElBQXlDO1lBQ3ZFLE9BQU8sS0FBSyxDQUFDLDBCQUEwQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFFTSx3QkFBaUIsR0FBeEIsVUFBeUIsSUFBNEM7WUFDbkUsT0FBTyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUVNLGdDQUF5QixHQUFoQztZQUNFLE9BQU8sS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUVNLGtCQUFXLEdBQWxCLFVBQW1CLElBQXNDO1lBQ3ZELE9BQU8sS0FBSyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBRU0seUJBQWtCLEdBQXpCLFVBQTBCLElBQTZDO1lBQ3JFLE9BQU8sS0FBSyxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFFTSx5QkFBa0IsR0FBekIsVUFBMEIsSUFBNkM7WUFDckUsT0FBTyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0MsQ0FBQztRQTJISCxhQUFDO0lBQUQsQ0FBQyxBQTlORCxJQThOQztJQTlOWSxvQkFBTSxTQThObEIsQ0FBQTtBQUNILENBQUMsRUF6bEJnQixhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQXlsQjdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXhlYyB9IGZyb20gJ2NvcmRvdmEnO1xuXG5cbmNvbnN0IGV4ZWNQID0gPE9wdHMsIFJlc3BvbnNlPihtZXRob2ROYW1lOiBzdHJpbmcsIG9wdHM/OiBPcHRzKTogUHJvbWlzZTxSZXNwb25zZT4gPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2U8UmVzcG9uc2U+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBleGVjKHJlc29sdmUsIHJlamVjdCwgJ0NvcmRvdmFTdHJpcGUnLCBtZXRob2ROYW1lLCBbb3B0c10pO1xuICB9KTtcbn07XG5cbmNvbnN0IE5PT1A6IGFueSA9ICgpID0+IHtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2luZG93IHtcbiAgY29yZG92YTogQ29yZG92YTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb3Jkb3ZhIHtcbiAgcGx1Z2luczogQ29yZG92YVBsdWdpbnM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29yZG92YVBsdWdpbnMge1xuICBzdHJpcGU6IHR5cGVvZiBDb3Jkb3ZhU3RyaXBlLlBsdWdpbjtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBDb3Jkb3ZhU3RyaXBlIHtcblxuICBleHBvcnQgaW50ZXJmYWNlIENvbW1vbkludGVudE9wdGlvbnMge1xuICAgIGNsaWVudFNlY3JldDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIElmIHByb3ZpZGVkLCB0aGUgcGF5bWVudCBpbnRlbnQgd2lsbCBiZSBjb25maXJtZWQgdXNpbmcgdGhpcyBjYXJkIGFzIGEgcGF5bWVudCBtZXRob2QuXG4gICAgICovXG4gICAgY2FyZD86IENhcmQ7XG4gICAgLyoqXG4gICAgICogSWYgcHJvdmlkZWQsIHRoZSBwYXltZW50IGludGVudCB3aWxsIGJlIGNvbmZpcm1lZCB1c2luZyB0aGlzIHBheW1lbnQgbWV0aG9kXG4gICAgICovXG4gICAgcGF5bWVudE1ldGhvZElkPzogc3RyaW5nO1xuICAgIHJlZGlyZWN0VXJsOiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgdHlwZSBDb25maXJtU2V0dXBJbnRlbnRPcHRpb25zID0gQ29tbW9uSW50ZW50T3B0aW9ucztcblxuICBleHBvcnQgaW50ZXJmYWNlIENvbmZpcm1QYXltZW50SW50ZW50T3B0aW9ucyBleHRlbmRzIENvbW1vbkludGVudE9wdGlvbnMge1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgeW91IGludGVuZCB0byBzYXZlIHRoZSBwYXltZW50IG1ldGhvZCB0byB0aGUgY3VzdG9tZXIncyBhY2NvdW50IGFmdGVyIHRoaXMgcGF5bWVudFxuICAgICAqL1xuICAgIHNhdmVNZXRob2Q/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIElmIHByb3ZpZGVkLCB0aGUgcGF5bWVudCBpbnRlbnQgd2lsbCBiZSBjb25maXJtZWQgdXNpbmcgYSBjYXJkIHByb3ZpZGVkIGJ5IEFwcGxlIFBheVxuICAgICAqL1xuICAgIGFwcGxlUGF5T3B0aW9ucz86IEFwcGxlUGF5T3B0aW9ucztcblxuICAgIC8qKlxuICAgICAqIElmIHByb3ZpZGVkLCB0aGUgcGF5bWVudCBpbnRlbnQgd2lsbCBiZSBjb25maXJtZWQgdXNpbmcgYSBjYXJkIHByb3ZpZGVkIGJ5IEdvb2dsZSBQYXlcbiAgICAgKi9cbiAgICBnb29nbGVQYXlPcHRpb25zPzogR29vZ2xlUGF5T3B0aW9ucztcbiAgfVxuXG4gIGV4cG9ydCB0eXBlIFNldFB1Ymxpc2hhYmxlS2V5T3B0aW9ucyA9IHtcbiAgICBrZXk6IHN0cmluZ1xuICB9O1xuXG4gIGV4cG9ydCB0eXBlIFZhbGlkYXRlQ2FyZE51bWJlck9wdGlvbnMgPSB7XG4gICAgbnVtYmVyOiBzdHJpbmdcbiAgfTtcblxuICBleHBvcnQgdHlwZSBWYWxpZGF0ZUV4cGlyeURhdGVPcHRpb25zID0ge1xuICAgIGV4cF9tb250aDogbnVtYmVyLFxuICAgIGV4cF95ZWFyOiBudW1iZXJcbiAgfTtcblxuICBleHBvcnQgdHlwZSBWYWxpZGF0ZUNWQ09wdGlvbnMgPSB7XG4gICAgY3ZjOiBzdHJpbmdcbiAgfTtcblxuICBleHBvcnQgdHlwZSBJZGVudGlmeUNhcmRCcmFuZE9wdGlvbnMgPSB7XG4gICAgbnVtYmVyOiBzdHJpbmdcbiAgfTtcblxuICBleHBvcnQgdHlwZSBDcmVhdGVQaWlUb2tlbk9wdGlvbnMgPSB7XG4gICAgcGlpOiBzdHJpbmdcbiAgfTtcblxuICBleHBvcnQgdHlwZSBDcmVhdGVTb3VyY2VUb2tlbk9wdGlvbnMgPSB7XG4gICAgdHlwZTogU291cmNlVHlwZSxcbiAgICBwYXJhbXM6IFNvdXJjZVBhcmFtc1xuICB9O1xuXG4gIGV4cG9ydCB0eXBlIEZpbmFsaXplQXBwbGVQYXlUcmFuc2FjdGlvbk9wdGlvbnMgPSB7XG4gICAgc3VjY2VzczogYm9vbGVhblxuICB9O1xuXG4gIGV4cG9ydCB0eXBlIFZhbGlkaXR5UmVzcG9uc2UgPSB7IHZhbGlkOiBib29sZWFuIH1cbiAgZXhwb3J0IHR5cGUgQXZhaWxhYmlsaXR5UmVzcG9uc2UgPSB7IGF2YWlsYWJsZTogYm9vbGVhbiB9XG5cbiAgZXhwb3J0IHR5cGUgQ2FyZEJyYW5kUmVzcG9uc2UgPSB7IGJyYW5kOiBDYXJkQnJhbmQgfTtcblxuICBleHBvcnQgaW50ZXJmYWNlIFBheW1lbnRNZXRob2Qge1xuICAgIGNyZWF0ZWQ/OiBudW1iZXI7XG4gICAgY3VzdG9tZXJJZD86IHN0cmluZztcbiAgICBpZD86IHN0cmluZztcbiAgICBsaXZlbW9kZTogYm9vbGVhbjtcbiAgICB0eXBlPzogc3RyaW5nO1xuICAgIGNhcmQ/OiBDYXJkO1xuICB9XG5cbiAgZXhwb3J0IGVudW0gVUlCdXR0b25UeXBlIHtcbiAgICBTVUJNSVQgPSAnc3VibWl0JyxcbiAgICBDT05USU5VRSA9ICdjb250aW51ZScsXG4gICAgTkVYVCA9ICduZXh0JyxcbiAgICBDQU5DRUwgPSAnY2FuY2VsJyxcbiAgICBSRVNFTkQgPSAncmVzZW5kJyxcbiAgICBTRUxFQ1QgPSAnc2VsZWN0J1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBVSUJ1dHRvbkN1c3RvbWl6YXRpb25PcHRpb25zIHtcbiAgICB0eXBlOiBVSUJ1dHRvblR5cGU7XG4gICAgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuICAgIHRleHRDb2xvcj86IHN0cmluZztcbiAgICBmb250TmFtZT86IHN0cmluZztcbiAgICBjb3JuZXJSYWRpdXM/OiBudW1iZXI7XG4gICAgZm9udFNpemU/OiBudW1iZXI7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIFVJQ3VzdG9taXphdGlvbk9wdGlvbnMge1xuICAgIGFjY2VudENvbG9yPzogc3RyaW5nO1xuICAgIGJ1dHRvbkN1c3RvbWl6YXRpb25zPzogVUlCdXR0b25DdXN0b21pemF0aW9uT3B0aW9uc1tdO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBCYW5rQWNjb3VudCB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBvYmplY3Q6IHN0cmluZztcbiAgICBhY2NvdW50X2hvbGRlcl9uYW1lOiBzdHJpbmc7XG4gICAgYWNjb3VudF9ob2xkZXJfdHlwZTogc3RyaW5nO1xuICAgIGJhbmtfbmFtZTogc3RyaW5nO1xuICAgIGNvdW50cnk6IHN0cmluZztcbiAgICBjdXJyZW5jeTogc3RyaW5nO1xuICAgIGZpbmdlcnByaW50OiBzdHJpbmc7XG4gICAgbGFzdDQ6IHN0cmluZztcbiAgICByb3V0aW5nX251bWJlcjogc3RyaW5nO1xuICAgIHN0YXR1czogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBDYXJkIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG9iamVjdDogc3RyaW5nO1xuICAgIGFkZHJlc3NfY2l0eTogYW55O1xuICAgIGFkZHJlc3NfY291bnRyeTogYW55O1xuICAgIGFkZHJlc3NfbGluZTE6IGFueTtcbiAgICBhZGRyZXNzX2xpbmUxX2NoZWNrOiBhbnk7XG4gICAgYWRkcmVzc19saW5lMjogYW55O1xuICAgIGFkZHJlc3Nfc3RhdGU6IGFueTtcbiAgICBhZGRyZXNzX3ppcDogYW55O1xuICAgIGFkZHJlc3NfemlwX2NoZWNrOiBhbnk7XG4gICAgYnJhbmQ6IENhcmRCcmFuZDtcbiAgICBjb3VudHJ5OiBzdHJpbmc7XG4gICAgY3ZjX2NoZWNrOiBhbnk7XG4gICAgZHluYW1pY19sYXN0NDogYW55O1xuICAgIGV4cF9tb250aDogbnVtYmVyO1xuICAgIGV4cF95ZWFyOiBudW1iZXI7XG4gICAgZmluZ2VycHJpbnQ6IHN0cmluZztcbiAgICBmdW5kaW5nOiBzdHJpbmc7XG4gICAgbGFzdDQ6IHN0cmluZztcbiAgICBtZXRhZGF0YTogYW55O1xuICAgIG5hbWU6IGFueTtcbiAgICB0b2tlbml6YXRpb25fbWV0aG9kOiBhbnk7XG4gICAgcGhvbmU6IHN0cmluZztcbiAgICBlbWFpbDogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBCYW5rQWNjb3VudFRva2VuUmVxdWVzdCB7XG4gICAgY291bnRyeTogc3RyaW5nO1xuICAgIGN1cnJlbmN5OiBzdHJpbmc7XG4gICAgYWNjb3VudF9ob2xkZXJfbmFtZTogc3RyaW5nO1xuICAgIGFjY291bnRfaG9sZGVyX3R5cGU6IHN0cmluZztcbiAgICByb3V0aW5nX251bWJlcjogc3RyaW5nO1xuICAgIGFjY291bnRfbnVtYmVyOiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEJhbmtBY2NvdW50VG9rZW5SZXNwb25zZSBleHRlbmRzIFRva2VuUmVzcG9uc2Uge1xuICAgIGJhbmtfYWNjb3VudDogQmFua0FjY291bnQ7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIENhcmRUb2tlblJlcXVlc3Qge1xuICAgIG51bWJlcjogc3RyaW5nO1xuICAgIGV4cF9tb250aDogbnVtYmVyO1xuICAgIGV4cF95ZWFyOiBudW1iZXI7XG4gICAgY3ZjOiBzdHJpbmc7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBhZGRyZXNzX2xpbmUxPzogc3RyaW5nO1xuICAgIGFkZHJlc3NfbGluZTI/OiBzdHJpbmc7XG4gICAgYWRkcmVzc19jaXR5Pzogc3RyaW5nO1xuICAgIGFkZHJlc3Nfc3RhdGU/OiBzdHJpbmc7XG4gICAgYWRkcmVzc19jb3VudHJ5Pzogc3RyaW5nO1xuICAgIGFkZHJlc3NfemlwPzogc3RyaW5nO1xuICAgIGN1cnJlbmN5Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIGlPUyBvbmx5XG4gICAgICovXG4gICAgcGhvbmU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogaU9TIG9ubHlcbiAgICAgKi9cbiAgICBlbWFpbD86IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ2FyZFRva2VuUmVzcG9uc2UgZXh0ZW5kcyBUb2tlblJlc3BvbnNlIHtcbiAgICBjYXJkOiBDYXJkO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBUb2tlblJlc3BvbnNlIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBjcmVhdGVkOiBEYXRlO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBBcHBsZVBheUl0ZW0ge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgYW1vdW50OiBudW1iZXIgfCBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEFwcGxlUGF5T3B0aW9ucyB7XG4gICAgbWVyY2hhbnRJZDogc3RyaW5nO1xuICAgIGNvdW50cnk6IHN0cmluZztcbiAgICBjdXJyZW5jeTogc3RyaW5nO1xuICAgIGl0ZW1zOiBBcHBsZVBheUl0ZW1bXTtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlUGF5T3B0aW9ucyB7XG4gICAgYWxsb3dlZENhcmROZXR3b3JrczogQ2FyZEJyYW5kW107XG4gICAgYWxsb3dlZEF1dGhNZXRob2RzOiBBcnJheTwnUEFOX09OTFknIHwgJ0NSWVBUT0dSQU1fM0RTJz47XG4gICAgdG90YWxQcmljZTogc3RyaW5nO1xuICAgIHRvdGFsUHJpY2VTdGF0dXM6ICdmaW5hbCc7XG4gICAgY3VycmVuY3lDb2RlOiBzdHJpbmc7XG4gICAgbWVyY2hhbnROYW1lOiBzdHJpbmc7XG4gICAgZW1haWxSZXF1aXJlZD86IGJvb2xlYW47XG4gICAgYWxsb3dQcmVwYWlkQ2FyZHM/OiBib29sZWFuO1xuICAgIGJpbGxpbmdBZGRyZXNzUmVxdWlyZWQ/OiBib29sZWFuO1xuICAgIGJpbGxpbmdBZGRyZXNzUGFyYW1zPzoge1xuICAgICAgZm9ybWF0PzogJ01JTic7IC8vIFRPRE8gY29weSBmcm9tIGdvb2dsZVxuICAgICAgcGhvbmVOdW1iZXJSZXF1aXJlZD86IGJvb2xlYW47XG4gICAgfVxuICAgIHNoaXBwaW5nQWRkcmVzc1JlcXVpcmVkPzogYm9vbGVhbjtcbiAgICBzaGlwcGluZ0FkZHJlc3NQYXJhbWV0ZXJzPzoge1xuICAgICAgLy8gVE9ETyBjb3B5IGZvcm0gZ29vZ2xlXG4gICAgfTtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgVGhyZWVEZWVTZWN1cmVQYXJhbXMge1xuICAgIC8qKlxuICAgICAqIEFtb3VudFxuICAgICAqL1xuICAgIGFtb3VudDogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEN1cnJlbmN5IGNvZGVcbiAgICAgKi9cbiAgICBjdXJyZW5jeTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFVSTCB0byByZWRpcmVjdCB0byBhZnRlciBzdWNjZXNzZnVsbHkgdmVyaWZ5aW5nIHRoZSBjYXJkXG4gICAgICovXG4gICAgcmV0dXJuVVJMOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQ2FyZCBzb3VyY2UgSURcbiAgICAgKi9cbiAgICBjYXJkOiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEdpcm9QYXlQYXJhbXMge1xuICAgIGFtb3VudDogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICByZXR1cm5VUkw6IHN0cmluZztcbiAgICBzdGF0ZW1lbnREZXNjcmlwdG9yOiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIGlERUFMUGFyYW1zIHtcbiAgICBhbW91bnQ6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgcmV0dXJuVVJMOiBzdHJpbmc7XG4gICAgc3RhdGVtZW50RGVzY3JpcHRvcjogc3RyaW5nO1xuICAgIGJhbms6IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgU0VQQURlYml0UGFyYW1zIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgaWJhbjogc3RyaW5nO1xuICAgIGFkZHJlc3NMaW5lMTogc3RyaW5nO1xuICAgIGNpdHk6IHN0cmluZztcbiAgICBwb3N0YWxDb2RlOiBzdHJpbmc7XG4gICAgY291bnRyeTogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBTb2ZvcnRQYXJhbXMge1xuICAgIGFtb3VudDogbnVtYmVyO1xuICAgIHJldHVyblVSTDogc3RyaW5nO1xuICAgIGNvdW50cnk6IHN0cmluZztcbiAgICBzdGF0ZW1lbnREZXNjcmlwdG9yOiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEFsaXBheVBhcmFtcyB7XG4gICAgYW1vdW50OiBudW1iZXI7XG4gICAgY3VycmVuY3k6IHN0cmluZztcbiAgICByZXR1cm5VUkw6IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQWxpcGF5UmV1c2FibGVQYXJhbXMge1xuICAgIGN1cnJlbmN5OiBzdHJpbmc7XG4gICAgcmV0dXJuVVJMOiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIFAyNFBhcmFtcyB7XG4gICAgYW1vdW50OiBudW1iZXI7XG4gICAgY3VycmVuY3k6IHN0cmluZztcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICByZXR1cm5VUkw6IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgVmlzYUNoZWNrb3V0UGFyYW1zIHtcbiAgICBjYWxsSWQ6IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCB0eXBlIFNvdXJjZVBhcmFtcyA9XG4gICAgVGhyZWVEZWVTZWN1cmVQYXJhbXNcbiAgICB8IEdpcm9QYXlQYXJhbXNcbiAgICB8IGlERUFMUGFyYW1zXG4gICAgfCBTRVBBRGViaXRQYXJhbXNcbiAgICB8IFNvZm9ydFBhcmFtc1xuICAgIHwgQWxpcGF5UGFyYW1zXG4gICAgfCBBbGlwYXlSZXVzYWJsZVBhcmFtc1xuICAgIHwgUDI0UGFyYW1zXG4gICAgfCBWaXNhQ2hlY2tvdXRQYXJhbXM7XG5cbiAgZXhwb3J0IGVudW0gU291cmNlVHlwZSB7XG4gICAgVGhyZWVEZWVTZWN1cmUgPSAnM2RzJyxcbiAgICBHaXJvUGF5ID0gJ2dpcm9wYXknLFxuICAgIGlERUFMID0gJ2lkZWFsJyxcbiAgICBTRVBBRGViaXQgPSAnc2VwYWRlYml0JyxcbiAgICBTb2ZvcnQgPSAnc29mb3J0JyxcbiAgICBBbGlQYXkgPSAnYWxpcGF5JyxcbiAgICBBbGlQYXlSZXVzYWJsZSA9ICdhbGlwYXlyZXVzYWJsZScsXG4gICAgUDI0ID0gJ3AyNCcsXG4gICAgVmlzYUNoZWNrb3V0ID0gJ3Zpc2FjaGVja291dCcsXG4gIH1cblxuICBleHBvcnQgZW51bSBDYXJkQnJhbmQge1xuICAgIEFNRVJJQ0FOX0VYUFJFU1MgPSAnQU1FUklDQU5fRVhQUkVTUycsXG4gICAgRElTQ09WRVIgPSAnRElTQ09WRVInLFxuICAgIEpDQiA9ICdKQ0InLFxuICAgIERJTkVSU19DTFVCID0gJ0RJTkVSU19DTFVCJyxcbiAgICBWSVNBID0gJ1ZJU0EnLFxuICAgIE1BU1RFUkNBUkQgPSAnTUFTVEVSQ0FSRCcsXG4gICAgVU5JT05QQVkgPSAnVU5JT05QQVknLFxuICAgIFVOS05PV04gPSAnVU5LTk9XTidcbiAgfVxuXG4gIGNvbnN0IFNvdXJjZVR5cGVBcnJheTogU291cmNlVHlwZVtdID0gT2JqZWN0LmtleXMoU291cmNlVHlwZSkubWFwKChrZXk6IGFueSkgPT4gU291cmNlVHlwZVtrZXldIGFzIGFueSBhcyBTb3VyY2VUeXBlKTtcblxuICBleHBvcnQgaW50ZXJmYWNlIEFkZHJlc3Mge1xuICAgIGxpbmUxOiBzdHJpbmc7XG4gICAgbGluZTI6IHN0cmluZztcbiAgICBjaXR5OiBzdHJpbmc7XG4gICAgcG9zdGFsX2NvZGU6IHN0cmluZztcbiAgICBzdGF0ZTogc3RyaW5nO1xuICAgIGNvdW50cnk6IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgTGVnYWxFbnRpdHkge1xuICAgIGFkZHJlc3M/OiBBZGRyZXNzO1xuICAgIGRvYj86IHtcbiAgICAgIGRheTogbnVtYmVyO1xuICAgICAgbW9udGg6IG51bWJlcjtcbiAgICAgIHllYXI6IG51bWJlcjtcbiAgICB9LFxuICAgIGZpcnN0X25hbWU/OiBzdHJpbmc7XG4gICAgbGFzdF9uYW1lPzogc3RyaW5nO1xuICAgIGdlbmRlcj86ICdtYWxlJyB8ICdmZW1hbGUnO1xuICAgIHBlcnNvbmFsX2FkZHJlc3M/OiBBZGRyZXNzO1xuICAgIGJ1c2luZXNzX25hbWU/OiBzdHJpbmc7XG4gICAgYnVzaW5lc3NfdXJsPzogc3RyaW5nO1xuICAgIGJ1c2luZXNzX3RheF9pZF9wcm92aWRlZD86IGJvb2xlYW47XG4gICAgYnVzaW5lc3NfdmF0X2lkX3Byb3ZpZGVkPzogc3RyaW5nO1xuICAgIGNvdW50cnk/OiBzdHJpbmc7XG4gICAgdG9zX2FjY2VwdGFuY2U/OiB7XG4gICAgICBkYXRlOiBudW1iZXI7XG4gICAgICBpcDogc3RyaW5nO1xuICAgIH0sXG4gICAgcGVyc29uYWxfaWRfbnVtYmVyX3Byb3ZpZGVkPzogYm9vbGVhbjtcbiAgICBwaG9uZV9udW1iZXI/OiBzdHJpbmc7XG4gICAgc3NuX2xhc3RfNF9wcm92aWRlZD86IGJvb2xlYW47XG4gICAgdGF4X2lkX3JlZ2lzdHJhcj86IHN0cmluZztcbiAgICB0eXBlPzogJ2luZGl2aWR1YWwnIHwgJ2NvbXBhbnknO1xuICAgIHZlcmlmaWNhdGlvbj86IGFueTtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQWNjb3VudFBhcmFtcyB7XG4gICAgdG9zU2hvd25BbmRBY2NlcHRlZDogYm9vbGVhbjtcbiAgICBsZWdhbEVudGl0eTogTGVnYWxFbnRpdHk7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEVycm9yIHtcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgY2xhc3MgUGx1Z2luIHtcbiAgICBzdGF0aWMgYWRkQ3VzdG9tZXJTb3VyY2Uob3B0czogeyBzb3VyY2VJZDogc3RyaW5nOyB0eXBlPzogc3RyaW5nIH0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIHJldHVybiBleGVjUCgnYWRkQ3VzdG9tZXJTb3VyY2UnLCBvcHRzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2FuY2VsQXBwbGVQYXkoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICByZXR1cm4gZXhlY1AoJ2NhbmNlbEFwcGxlUGF5Jyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbmZpcm1QYXltZW50SW50ZW50KG9wdHM6IENvcmRvdmFTdHJpcGUuQ29uZmlybVBheW1lbnRJbnRlbnRPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICByZXR1cm4gZXhlY1AoJ2NvbmZpcm1QYXltZW50SW50ZW50Jywgb3B0cyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbmZpcm1TZXR1cEludGVudChvcHRzOiBDb3Jkb3ZhU3RyaXBlLkNvbW1vbkludGVudE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIHJldHVybiBleGVjUCgnY29uZmlybVNldHVwSW50ZW50Jywgb3B0cyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUFjY291bnRUb2tlbihhY2NvdW50OiBDb3Jkb3ZhU3RyaXBlLkFjY291bnRQYXJhbXMpOiBQcm9taXNlPENvcmRvdmFTdHJpcGUuVG9rZW5SZXNwb25zZT4ge1xuICAgICAgcmV0dXJuIGV4ZWNQKCdjcmVhdGVBY2NvdW50VG9rZW4nLCBhY2NvdW50KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQmFua0FjY291bnRUb2tlbihiYW5rQWNjb3VudDogQ29yZG92YVN0cmlwZS5CYW5rQWNjb3VudFRva2VuUmVxdWVzdCk6IFByb21pc2U8Q29yZG92YVN0cmlwZS5CYW5rQWNjb3VudFRva2VuUmVzcG9uc2U+IHtcbiAgICAgIHJldHVybiBleGVjUCgnY3JlYXRlQmFua0FjY291bnRUb2tlbicsIGJhbmtBY2NvdW50KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQ2FyZFRva2VuKGNhcmQ6IENvcmRvdmFTdHJpcGUuQ2FyZFRva2VuUmVxdWVzdCk6IFByb21pc2U8Q29yZG92YVN0cmlwZS5DYXJkVG9rZW5SZXNwb25zZT4ge1xuICAgICAgcmV0dXJuIGV4ZWNQKCdjcmVhdGVDYXJkVG9rZW4nLCBjYXJkKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlUGlpVG9rZW4ob3B0czogQ29yZG92YVN0cmlwZS5DcmVhdGVQaWlUb2tlbk9wdGlvbnMpOiBQcm9taXNlPENvcmRvdmFTdHJpcGUuVG9rZW5SZXNwb25zZT4ge1xuICAgICAgcmV0dXJuIGV4ZWNQKCdjcmVhdGVQaWlUb2tlbicsIG9wdHMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVTb3VyY2VUb2tlbihvcHRzOiBDb3Jkb3ZhU3RyaXBlLkNyZWF0ZVNvdXJjZVRva2VuT3B0aW9ucyk6IFByb21pc2U8Q29yZG92YVN0cmlwZS5Ub2tlblJlc3BvbnNlPiB7XG4gICAgICByZXR1cm4gZXhlY1AoJ2NyZWF0ZVNvdXJjZVRva2VuJywgb3B0cyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGN1c3RvbWVyUGF5bWVudE1ldGhvZHMoKTogUHJvbWlzZTx7IHBheW1lbnRNZXRob2RzOiBDb3Jkb3ZhU3RyaXBlLlBheW1lbnRNZXRob2RbXSB9PiB7XG4gICAgICByZXR1cm4gZXhlY1AoJ2N1c3RvbWVyUGF5bWVudE1ldGhvZHMnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3VzdG9taXplUGF5bWVudEF1dGhVSShvcHRzOiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIHJldHVybiBleGVjUCgnJywgb3B0cyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGRlbGV0ZUN1c3RvbWVyU291cmNlKG9wdHM6IHsgc291cmNlSWQ6IHN0cmluZyB9KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICByZXR1cm4gZXhlY1AoJycsIG9wdHMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBlY2hvKG9wdGlvbnM6IHsgdmFsdWU6IHN0cmluZyB9KTogUHJvbWlzZTx7IHZhbHVlOiBzdHJpbmcgfT4ge1xuICAgICAgcmV0dXJuIGV4ZWNQKCdlY2hvJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZpbmFsaXplQXBwbGVQYXlUcmFuc2FjdGlvbihvcHRzOiBDb3Jkb3ZhU3RyaXBlLkZpbmFsaXplQXBwbGVQYXlUcmFuc2FjdGlvbk9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIHJldHVybiBleGVjUCgnJywgb3B0cyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlkZW50aWZ5Q2FyZEJyYW5kKG9wdHM6IENvcmRvdmFTdHJpcGUuSWRlbnRpZnlDYXJkQnJhbmRPcHRpb25zKTogUHJvbWlzZTxDb3Jkb3ZhU3RyaXBlLkNhcmRCcmFuZFJlc3BvbnNlPiB7XG4gICAgICByZXR1cm4gZXhlY1AoJ2lkZW50aWZ5Q2FyZEJyYW5kJywgb3B0cyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGluaXRDdXN0b21lclNlc3Npb24ob3B0czogeyBpZDogc3RyaW5nOyBvYmplY3Q6ICdlcGhlbWVyYWxfa2V5JzsgYXNzb2NpYXRlZF9vYmplY3RzOiBBcnJheTx7IHR5cGU6ICdjdXN0b21lcic7IGlkOiBzdHJpbmcgfT47IGNyZWF0ZWQ6IG51bWJlcjsgZXhwaXJlczogbnVtYmVyOyBsaXZlbW9kZTogYm9vbGVhbjsgc2VjcmV0OiBzdHJpbmc7IGFwaVZlcnNpb24/OiBzdHJpbmcgfSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgcmV0dXJuIGV4ZWNQKCdpbml0Q3VzdG9tZXJTZXNzaW9uJywgb3B0cyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzQXBwbGVQYXlBdmFpbGFibGUoKTogUHJvbWlzZTxDb3Jkb3ZhU3RyaXBlLkF2YWlsYWJpbGl0eVJlc3BvbnNlPiB7XG4gICAgICByZXR1cm4gZXhlY1AoJ2lzQXBwbGVQYXlBdmFpbGFibGUnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgIGlzR29vZ2xlUGF5QXZhaWxhYmxlKCk6IFByb21pc2U8Q29yZG92YVN0cmlwZS5BdmFpbGFiaWxpdHlSZXNwb25zZT4ge1xuICAgICAgcmV0dXJuIGV4ZWNQKCdpc0dvb2dsZVBheUF2YWlsYWJsZScpO1xuICAgIH1cblxuICAgIHN0YXRpYyBwYXlXaXRoQXBwbGVQYXkob3B0aW9uczogQ29yZG92YVN0cmlwZS5BcHBsZVBheU9wdGlvbnMpOiBQcm9taXNlPENvcmRvdmFTdHJpcGUuVG9rZW5SZXNwb25zZT4ge1xuICAgICAgcmV0dXJuIGV4ZWNQKCdwYXlXaXRoQXBwbGVQYXknKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0Q3VzdG9tZXJEZWZhdWx0U291cmNlKG9wdHM6IHsgc291cmNlSWQ6IHN0cmluZzsgdHlwZT86IHN0cmluZyB9KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICByZXR1cm4gZXhlY1AoJ3NldEN1c3RvbWVyRGVmYXVsdFNvdXJjZScsIG9wdHMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXRQdWJsaXNoYWJsZUtleShvcHRzOiBDb3Jkb3ZhU3RyaXBlLlNldFB1Ymxpc2hhYmxlS2V5T3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgcmV0dXJuIGV4ZWNQKCdzZXRQdWJsaXNoYWJsZUtleScsIG9wdHMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzdGFydEdvb2dsZVBheVRyYW5zYWN0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgcmV0dXJuIGV4ZWNQKCdzdGFydEdvb2dsZVBheVRyYW5zYWN0aW9uJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIHZhbGlkYXRlQ1ZDKG9wdHM6IENvcmRvdmFTdHJpcGUuVmFsaWRhdGVDVkNPcHRpb25zKTogUHJvbWlzZTxDb3Jkb3ZhU3RyaXBlLlZhbGlkaXR5UmVzcG9uc2U+IHtcbiAgICAgIHJldHVybiBleGVjUCgndmFsaWRhdGVDVkMnLCBvcHRzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdmFsaWRhdGVDYXJkTnVtYmVyKG9wdHM6IENvcmRvdmFTdHJpcGUuVmFsaWRhdGVDYXJkTnVtYmVyT3B0aW9ucyk6IFByb21pc2U8Q29yZG92YVN0cmlwZS5WYWxpZGl0eVJlc3BvbnNlPiB7XG4gICAgICByZXR1cm4gZXhlY1AoJ3ZhbGlkYXRlQ2FyZE51bWJlcicsIG9wdHMpO1xuICAgIH1cblxuICAgIHN0YXRpYyB2YWxpZGF0ZUV4cGlyeURhdGUob3B0czogQ29yZG92YVN0cmlwZS5WYWxpZGF0ZUV4cGlyeURhdGVPcHRpb25zKTogUHJvbWlzZTxDb3Jkb3ZhU3RyaXBlLlZhbGlkaXR5UmVzcG9uc2U+IHtcbiAgICAgIHJldHVybiBleGVjUCgndmFsaWRhdGVFeHBpcnlEYXRlJywgb3B0cyk7XG4gICAgfVxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogU2V0IHB1Ymxpc2hhYmxlIGtleVxuICAgIC8vICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICAvLyAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdWNjZXNzXG4gICAgLy8gICogQHBhcmFtIHtGdW5jdGlvbn0gZXJyb3JcbiAgICAvLyAgKi9cbiAgICAvLyBzdGF0aWMgc2V0UHVibGlzaGFibGVLZXkoa2V5OiBzdHJpbmcsIHN1Y2Nlc3M6IEJsYW5rQ2FsbGJhY2sgPSBOT09QLCBlcnJvcjogRXJyb3JDYWxsYmFjayA9IE5PT1ApIHtcbiAgICAvLyAgIGV4ZWMoc3VjY2VzcywgZXJyb3IsICdDb3Jkb3ZhU3RyaXBlJywgJ3NldFB1Ymxpc2hhYmxlS2V5JywgW2tleV0pO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIC8qKlxuICAgIC8vICAqIENyZWF0ZSBhIGNyZWRpdCBjYXJkIHRva2VuXG4gICAgLy8gICogQHBhcmFtIHtDb3Jkb3ZhU3RyaXBlLkNhcmRUb2tlblJlcXVlc3R9IGNyZWRpdENhcmRcbiAgICAvLyAgKiBAcGFyYW0ge0NvcmRvdmFTdHJpcGUuQ2FyZFRva2VuQ2FsbGJhY2t9IHN1Y2Nlc3NcbiAgICAvLyAgKiBAcGFyYW0ge0NvcmRvdmFTdHJpcGUuRXJyb3JDYWxsYmFja30gZXJyb3JcbiAgICAvLyAgKi9cbiAgICAvLyBzdGF0aWMgY3JlYXRlQ2FyZFRva2VuKGNyZWRpdENhcmQ6IENhcmRUb2tlblJlcXVlc3QsIHN1Y2Nlc3M6IENhcmRUb2tlbkNhbGxiYWNrID0gTk9PUCwgZXJyb3I6IEVycm9yQ2FsbGJhY2sgPSBOT09QKSB7XG4gICAgLy8gICBleGVjKHN1Y2Nlc3MsIGVycm9yLCAnQ29yZG92YVN0cmlwZScsICdjcmVhdGVDYXJkVG9rZW4nLCBbY3JlZGl0Q2FyZF0pO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIC8qKlxuICAgIC8vICAqIENyZWF0ZSBhIGJhbmsgYWNjb3VudCB0b2tlblxuICAgIC8vICAqIEBwYXJhbSB7Q29yZG92YVN0cmlwZS5CYW5rQWNjb3VudFRva2VuUmVxdWVzdH0gYmFua0FjY291bnRcbiAgICAvLyAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdWNjZXNzXG4gICAgLy8gICogQHBhcmFtIHtGdW5jdGlvbn0gZXJyb3JcbiAgICAvLyAgKi9cbiAgICAvLyBzdGF0aWMgY3JlYXRlQmFua0FjY291bnRUb2tlbihiYW5rQWNjb3VudDogQmFua0FjY291bnRUb2tlblJlcXVlc3QsIHN1Y2Nlc3M6IEJhbmtBY2NvdW50VG9rZW5DYWxsYmFjayA9IE5PT1AsIGVycm9yOiBFcnJvckNhbGxiYWNrID0gTk9PUCkge1xuICAgIC8vICAgZXhlYyhzdWNjZXNzLCBlcnJvciwgJ0NvcmRvdmFTdHJpcGUnLCAnY3JlYXRlQmFua0FjY291bnRUb2tlbicsIFtiYW5rQWNjb3VudF0pO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIC8qKlxuICAgIC8vICAqIFZhbGlkYXRlcyBjYXJkIG51bWJlclxuICAgIC8vICAqIEBwYXJhbSBjYXJkTnVtYmVyIENhcmQgbnVtYmVyXG4gICAgLy8gICogQHBhcmFtIHsoaXNWYWxpZDogYm9vbGVhbikgPT4gdm9pZH0gW3N1Y2Nlc3NdXG4gICAgLy8gICogQHBhcmFtIHtGdW5jdGlvbn0gW2Vycm9yXVxuICAgIC8vICAqL1xuICAgIC8vIHN0YXRpYyB2YWxpZGF0ZUNhcmROdW1iZXIoY2FyZE51bWJlciwgc3VjY2VzczogKGlzVmFsaWQ6IGJvb2xlYW4pID0+IHZvaWQgPSBOT09QLCBlcnJvcjogRXJyb3JDYWxsYmFjayA9IE5PT1ApIHtcbiAgICAvLyAgIGV4ZWMoc3VjY2VzcywgZXJyb3IsICdDb3Jkb3ZhU3RyaXBlJywgJ3ZhbGlkYXRlQ2FyZE51bWJlcicsIFtjYXJkTnVtYmVyXSk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gLyoqXG4gICAgLy8gICogVmFsaWRhdGVzIHRoZSBleHBpcnkgZGF0ZSBvZiBhIGNhcmRcbiAgICAvLyAgKiBAcGFyYW0ge251bWJlcn0gZXhwTW9udGhcbiAgICAvLyAgKiBAcGFyYW0ge251bWJlcn0gZXhwWWVhclxuICAgIC8vICAqIEBwYXJhbSB7KGlzVmFsaWQ6IGJvb2xlYW4pID0+IHZvaWR9IFtzdWNjZXNzXVxuICAgIC8vICAqIEBwYXJhbSB7RnVuY3Rpb259IFtlcnJvcl1cbiAgICAvLyAgKi9cbiAgICAvLyBzdGF0aWMgdmFsaWRhdGVFeHBpcnlEYXRlKGV4cE1vbnRoOiBudW1iZXIsIGV4cFllYXI6IG51bWJlciwgc3VjY2VzczogKGlzVmFsaWQ6IGJvb2xlYW4pID0+IHZvaWQgPSBOT09QLCBlcnJvcjogRXJyb3JDYWxsYmFjayA9IE5PT1ApIHtcbiAgICAvLyAgIGV4ZWMoc3VjY2VzcywgZXJyb3IsICdDb3Jkb3ZhU3RyaXBlJywgJ3ZhbGlkYXRlRXhwaXJ5RGF0ZScsIFtleHBNb250aCwgZXhwWWVhcl0pO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIC8qKlxuICAgIC8vICAqIFZhbGlkYXRlcyBhIENWQyBvZiBhIGNhcmRcbiAgICAvLyAgKiBAcGFyYW0ge3N0cmluZ30gY3ZjXG4gICAgLy8gICogQHBhcmFtIHsoaXNWYWxpZDogYm9vbGVhbikgPT4gdm9pZH0gW3N1Y2Nlc3NdXG4gICAgLy8gICogQHBhcmFtIHtGdW5jdGlvbn0gW2Vycm9yXVxuICAgIC8vICAqL1xuICAgIC8vIHN0YXRpYyB2YWxpZGF0ZUNWQyhjdmM6IHN0cmluZywgc3VjY2VzczogKGlzVmFsaWQ6IGJvb2xlYW4pID0+IHZvaWQgPSBOT09QLCBlcnJvcjogRXJyb3JDYWxsYmFjayA9IE5PT1ApIHtcbiAgICAvLyAgIGV4ZWMoc3VjY2VzcywgZXJyb3IsICdDb3Jkb3ZhU3RyaXBlJywgJ3ZhbGlkYXRlQ1ZDJywgW2N2Y10pO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIC8qKlxuICAgIC8vICAqIEdldHMgYSBjYXJkIHR5cGUgZnJvbSBhIGNhcmQgbnVtYmVyXG4gICAgLy8gICogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IGNhcmROdW1iZXJcbiAgICAvLyAgKiBAcGFyYW0geyh0eXBlOiBzdHJpbmcpID0+IHZvaWR9IFtzdWNjZXNzXVxuICAgIC8vICAqIEBwYXJhbSB7RnVuY3Rpb259IFtlcnJvcl1cbiAgICAvLyAgKi9cbiAgICAvLyBzdGF0aWMgZ2V0Q2FyZFR5cGUoY2FyZE51bWJlcjogc3RyaW5nIHwgbnVtYmVyLCBzdWNjZXNzOiAodHlwZTogc3RyaW5nKSA9PiB2b2lkID0gTk9PUCwgZXJyb3I6IEVycm9yQ2FsbGJhY2sgPSBOT09QKSB7XG4gICAgLy8gICBleGVjKHN1Y2Nlc3MsIGVycm9yLCAnQ29yZG92YVN0cmlwZScsICdnZXRDYXJkVHlwZScsIFtTdHJpbmcoY2FyZE51bWJlcildKTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyAvKipcbiAgICAvLyAgKiBQYXkgd2l0aCBBcHBsZVBheVxuICAgIC8vICAqIEBwYXJhbSB7Q29yZG92YVN0cmlwZS5BcHBsZVBheU9wdGlvbnN9IG9wdGlvbnNcbiAgICAvLyAgKiBAcGFyYW0geyh0b2tlbjogc3RyaW5nLCBjYWxsYmFjazogKHBheW1lbnRQcm9jZXNzZWQ6IGJvb2xlYW4pID0+IHZvaWQpID0+IHZvaWR9IHN1Y2Nlc3NcbiAgICAvLyAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcnJvclxuICAgIC8vICAqL1xuICAgIC8vIHN0YXRpYyBwYXlXaXRoQXBwbGVQYXkob3B0aW9uczogQXBwbGVQYXlPcHRpb25zLCBzdWNjZXNzOiAodG9rZW46IFRva2VuUmVzcG9uc2UsIGNhbGxiYWNrOiAocGF5bWVudFByb2Nlc3NlZDogYm9vbGVhbikgPT4gdm9pZCkgPT4gdm9pZCwgZXJyb3I6IEVycm9yQ2FsbGJhY2sgPSBOT09QKSB7XG4gICAgLy8gICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMubWVyY2hhbnRJZCB8fCAhb3B0aW9ucy5jb3VudHJ5IHx8ICFvcHRpb25zLmN1cnJlbmN5IHx8ICFvcHRpb25zLml0ZW1zIHx8ICFvcHRpb25zLml0ZW1zLmxlbmd0aCkge1xuICAgIC8vICAgICBlcnJvcih7XG4gICAgLy8gICAgICAgbWVzc2FnZTogJ01pc3Npbmcgb25lIG9yIG1vcmUgcGF5bWVudCBvcHRpb25zLicsXG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgICByZXR1cm47XG4gICAgLy8gICB9XG4gICAgLy9cbiAgICAvLyAgIG9wdGlvbnMuaXRlbXMgPSBvcHRpb25zLml0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAvLyAgICAgaXRlbS5hbW91bnQgPSBTdHJpbmcoaXRlbS5hbW91bnQpO1xuICAgIC8vICAgICByZXR1cm4gaXRlbTtcbiAgICAvLyAgIH0pO1xuICAgIC8vXG4gICAgLy8gICBleGVjKCh0b2tlbjogVG9rZW5SZXNwb25zZSkgPT4ge1xuICAgIC8vICAgICBzdWNjZXNzKHRva2VuLCAocGF5bWVudFByb2Nlc3NlZDogYm9vbGVhbikgPT4ge1xuICAgIC8vICAgICAgIGV4ZWMoTk9PUCwgTk9PUCwgJ0NvcmRvdmFTdHJpcGUnLCAnZmluYWxpemVBcHBsZVBheVRyYW5zYWN0aW9uJywgW0Jvb2xlYW4ocGF5bWVudFByb2Nlc3NlZCldKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICB9LCBlcnJvciwgJ0NvcmRvdmFTdHJpcGUnLCAnaW5pdGlhbGl6ZUFwcGxlUGF5VHJhbnNhY3Rpb24nLCBbXG4gICAgLy8gICAgIG9wdGlvbnMubWVyY2hhbnRJZCxcbiAgICAvLyAgICAgb3B0aW9ucy5jb3VudHJ5LFxuICAgIC8vICAgICBvcHRpb25zLmN1cnJlbmN5LFxuICAgIC8vICAgICBvcHRpb25zLml0ZW1zLFxuICAgIC8vICAgXSk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gc3RhdGljIGluaXRHb29nbGVQYXkoc3VjY2VzcyA9IE5PT1AsIGVycm9yOiBFcnJvckNhbGxiYWNrID0gTk9PUCkge1xuICAgIC8vICAgZXhlYyhzdWNjZXNzLCBlcnJvciwgJ0NvcmRvdmFTdHJpcGUnLCAnaW5pdEdvb2dsZVBheScpO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIHN0YXRpYyBwYXlXaXRoR29vZ2xlUGF5KG9wdGlvbnM6IEdvb2dsZVBheU9wdGlvbnMsIHN1Y2Nlc3M6ICh0b2tlbjogVG9rZW5SZXNwb25zZSkgPT4gdm9pZCwgZXJyb3I6IEVycm9yQ2FsbGJhY2sgPSBOT09QKSB7XG4gICAgLy8gICBleGVjKHN1Y2Nlc3MsIGVycm9yLCAnQ29yZG92YVN0cmlwZScsICdwYXlXaXRoR29vZ2xlUGF5JywgW29wdGlvbnMuYW1vdW50LCBvcHRpb25zLmN1cnJlbmN5Q29kZV0pO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIHN0YXRpYyBjcmVhdGVTb3VyY2UodHlwZTogU291cmNlVHlwZSwgcGFyYW1zOiBTb3VyY2VQYXJhbXMsIHN1Y2Nlc3M6ICh0b2tlbjogVG9rZW5SZXNwb25zZSkgPT4gdm9pZCA9IE5PT1AsIGVycm9yOiBFcnJvckNhbGxiYWNrID0gTk9PUCkge1xuICAgIC8vICAgZXhlYyhzdWNjZXNzLCBlcnJvciwgJ0NvcmRvdmFTdHJpcGUnLCAnY3JlYXRlU291cmNlJywgW1NvdXJjZVR5cGVBcnJheS5pbmRleE9mKHR5cGUudG9Mb3dlckNhc2UoKSBhcyBTb3VyY2VUeXBlKSwgcGFyYW1zXSk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gc3RhdGljIGNyZWF0ZVBpaVRva2VuKHBlcnNvbmFsSWQ6IHN0cmluZywgc3VjY2VzcyA9IE5PT1AsIGVycm9yOiBFcnJvckNhbGxiYWNrID0gTk9PUCkge1xuICAgIC8vICAgZXhlYyhzdWNjZXNzLCBlcnJvciwgJ0NvcmRvdmFTdHJpcGUnLCAnY3JlYXRlUGlpVG9rZW4nLCBbcGVyc29uYWxJZF0pO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIHN0YXRpYyBjcmVhdGVBY2NvdW50VG9rZW4oYWNjb3VudFBhcmFtczogQWNjb3VudFBhcmFtcywgc3VjY2VzcyA9IE5PT1AsIGVycm9yOiBFcnJvckNhbGxiYWNrID0gTk9PUCkge1xuICAgIC8vICAgZXhlYyhzdWNjZXNzLCBlcnJvciwgJ0NvcmRvdmFTdHJpcGUnLCAnY3JlYXRlQWNjb3VudFRva2VuJywgW2FjY291bnRQYXJhbXNdKTtcbiAgICAvLyB9XG4gIH1cbn1cblxuIl19