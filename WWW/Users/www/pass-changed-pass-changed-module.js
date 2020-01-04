(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pass-changed-pass-changed-module"],{

/***/ "./src/app/pass-changed/pass-changed.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pass-changed/pass-changed.module.ts ***!
  \*****************************************************/
/*! exports provided: PassChangedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassChangedPageModule", function() { return PassChangedPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pass_changed_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pass-changed.page */ "./src/app/pass-changed/pass-changed.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _pass_changed_page__WEBPACK_IMPORTED_MODULE_5__["PassChangedPage"]
    }
];
var PassChangedPageModule = /** @class */ (function () {
    function PassChangedPageModule() {
    }
    PassChangedPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_pass_changed_page__WEBPACK_IMPORTED_MODULE_5__["PassChangedPage"]]
        })
    ], PassChangedPageModule);
    return PassChangedPageModule;
}());



/***/ }),

/***/ "./src/app/pass-changed/pass-changed.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pass-changed/pass-changed.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title>Pratiche Web</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-title>Password impostata</ion-title>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <div>\n            La password &egrave; stata cambiata.\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pass-changed/pass-changed.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pass-changed/pass-changed.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bhc3MtY2hhbmdlZC9wYXNzLWNoYW5nZWQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pass-changed/pass-changed.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pass-changed/pass-changed.page.ts ***!
  \***************************************************/
/*! exports provided: PassChangedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassChangedPage", function() { return PassChangedPage; });
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

var PassChangedPage = /** @class */ (function () {
    function PassChangedPage() {
    }
    PassChangedPage.prototype.ngOnInit = function () {
    };
    PassChangedPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pass-changed',
            template: __webpack_require__(/*! ./pass-changed.page.html */ "./src/app/pass-changed/pass-changed.page.html"),
            styles: [__webpack_require__(/*! ./pass-changed.page.scss */ "./src/app/pass-changed/pass-changed.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PassChangedPage);
    return PassChangedPage;
}());



/***/ })

}]);
//# sourceMappingURL=pass-changed-pass-changed-module.js.map