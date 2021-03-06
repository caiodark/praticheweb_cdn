(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Pratiche Web\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <form [formGroup]=\"loginForm\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\" size-sm>\n                <ion-item>\n                  <ion-label>Username: </ion-label>\n                  <ion-input placeholder=\"Nome utente\" formControlName=\"user\"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\" size-sm>\n                <ion-item>\n                  <ion-label>Password:</ion-label>\n                  <ion-input placeholder=\"Password\" type=\"password\" formControlName=\"pass\"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\">\n                  <div>\n                    <ion-button color=\"primary\" [disabled]=\"!loginForm.valid\" (click)=\"onSaveClick()\">Login</ion-button>\n                    <ion-button color=\"danger\" (click)=\"onCancelClick()\">Annulla</ion-button>      \n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n      </form>\n    </ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/credentials */ "./src/app/models/credentials.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/login-service.service */ "./src/app/services/login-service.service.ts");






var HomePage = /** @class */ (function () {
    function HomePage(fb, _router, _service) {
        this.fb = fb;
        this._router = _router;
        this._service = _service;
        this.loginForm = fb.group({
            user: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.ngOnDestroy = function () {
        if (this.service$) {
            this.service$.unsubscribe();
        }
    };
    HomePage.prototype.onSaveClick = function () {
        if (this.loginForm.valid) {
            var cred = new _models_credentials__WEBPACK_IMPORTED_MODULE_3__["Credentials"]();
            var logValues = this.loginForm.value;
            cred.email = logValues.user;
            cred.pass = logValues.pass;
            this.service$ = this._service.asyncDo(cred).subscribe({
                next: function (status) {
                    window.location.href = window.location.origin + "/customers/home";
                },
                error: function (msg) { console.log("Error login: " + (msg || '')); }
            });
        }
    };
    HomePage.prototype.onCancelClick = function () {
        this.loginForm.patchValue({
            user: '',
            pass: ''
        });
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_login_service_service__WEBPACK_IMPORTED_MODULE_5__["LoginServiceService"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/models/credentials.ts":
/*!***************************************!*\
  !*** ./src/app/models/credentials.ts ***!
  \***************************************/
/*! exports provided: Credentials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Credentials", function() { return Credentials; });
var Credentials = /** @class */ (function () {
    function Credentials() {
    }
    return Credentials;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map