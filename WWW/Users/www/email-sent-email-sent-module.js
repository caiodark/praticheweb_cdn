(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["email-sent-email-sent-module"],{

/***/ "./src/app/email-sent/email-sent.module.ts":
/*!*************************************************!*\
  !*** ./src/app/email-sent/email-sent.module.ts ***!
  \*************************************************/
/*! exports provided: EmailSentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailSentPageModule", function() { return EmailSentPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _email_sent_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email-sent.page */ "./src/app/email-sent/email-sent.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _email_sent_page__WEBPACK_IMPORTED_MODULE_5__["EmailSentPage"]
    }
];
var EmailSentPageModule = /** @class */ (function () {
    function EmailSentPageModule() {
    }
    EmailSentPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_email_sent_page__WEBPACK_IMPORTED_MODULE_5__["EmailSentPage"]]
        })
    ], EmailSentPageModule);
    return EmailSentPageModule;
}());



/***/ }),

/***/ "./src/app/email-sent/email-sent.page.html":
/*!*************************************************!*\
  !*** ./src/app/email-sent/email-sent.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Pratiche Web</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-title>E-mail inviata</ion-title>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div>\n          Abbiamo inviato una e-mail al tuo indirizzo di posta con le istruzioni per \n          impostare la password.<br/>\n          Grazie per esserti registrato.\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/email-sent/email-sent.page.scss":
/*!*************************************************!*\
  !*** ./src/app/email-sent/email-sent.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtYWlsLXNlbnQvZW1haWwtc2VudC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/email-sent/email-sent.page.ts":
/*!***********************************************!*\
  !*** ./src/app/email-sent/email-sent.page.ts ***!
  \***********************************************/
/*! exports provided: EmailSentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailSentPage", function() { return EmailSentPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmailSentPage = /** @class */ (function () {
    function EmailSentPage() {
    }
    EmailSentPage.prototype.ngOnInit = function () {
    };
    EmailSentPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email-sent',
            template: __webpack_require__(/*! ./email-sent.page.html */ "./src/app/email-sent/email-sent.page.html"),
            styles: [__webpack_require__(/*! ./email-sent.page.scss */ "./src/app/email-sent/email-sent.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmailSentPage);
    return EmailSentPage;
}());



/***/ })

}]);
//# sourceMappingURL=email-sent-email-sent-module.js.map