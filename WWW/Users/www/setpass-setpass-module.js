(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setpass-setpass-module"],{

/***/ "./src/app/models/token-model.ts":
/*!***************************************!*\
  !*** ./src/app/models/token-model.ts ***!
  \***************************************/
/*! exports provided: TokenModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenModel", function() { return TokenModel; });
var TokenModel = /** @class */ (function () {
    function TokenModel() {
    }
    return TokenModel;
}());



/***/ }),

/***/ "./src/app/models/user-set-pass.ts":
/*!*****************************************!*\
  !*** ./src/app/models/user-set-pass.ts ***!
  \*****************************************/
/*! exports provided: UserSetPass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSetPass", function() { return UserSetPass; });
var UserSetPass = /** @class */ (function () {
    function UserSetPass() {
    }
    return UserSetPass;
}());



/***/ }),

/***/ "./src/app/services/setpass.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/setpass.service.ts ***!
  \*********************************************/
/*! exports provided: SetpassService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetpassService", function() { return SetpassService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_token_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/token-model */ "./src/app/models/token-model.ts");
/* harmony import */ var _models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/service-status.enum */ "./src/app/models/service-status.enum.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SetpassService = /** @class */ (function () {
    function SetpassService(_http) {
        this._http = _http;
    }
    SetpassService.prototype.asyncGetToken = function (token) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
            headers.append('Access-Control-Allow-Origin', '*');
            _this._http.get("/api/token/" + token, { headers: headers }).subscribe(function (data) {
                var ris = new _models_token_model__WEBPACK_IMPORTED_MODULE_1__["TokenModel"]();
                ris._id = data._id;
                ris.company = data.company;
                ris.deleted = data.deleted;
                ris.email = data.email;
                ris.token = data.token;
                ris.what = data.what;
                observer.next(ris);
                return { unsubscribe: function () { } };
            }, function (error) {
                console.log(error);
                observer.error(error);
                return { unsubscribe: function () { } };
            });
        });
    };
    SetpassService.prototype.asyncDo = function (user, token) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this._http.put("/api/users/" + user.email, user).subscribe(function (data) {
                _this._http.delete("/api/token/" + token.token).subscribe(function (ris) {
                    var ok = _models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__["ServiceStatus"].OK;
                    observer.next(ok);
                }, function (error) {
                    console.log(error);
                    var ops = _models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__["ServiceStatus"].FAILED;
                    observer.error(ops);
                    return { unsubscribe: function () { } };
                });
                return { unsubscribe: function () { } };
            }, function (error) {
                console.log(error);
                var ops = _models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__["ServiceStatus"].FAILED;
                observer.error(ops);
                return { unsubscribe: function () { } };
            });
        });
    };
    SetpassService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], SetpassService);
    return SetpassService;
}());



/***/ }),

/***/ "./src/app/setpass/setpass.module.ts":
/*!*******************************************!*\
  !*** ./src/app/setpass/setpass.module.ts ***!
  \*******************************************/
/*! exports provided: SetpassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetpassPageModule", function() { return SetpassPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _setpass_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setpass.page */ "./src/app/setpass/setpass.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _setpass_page__WEBPACK_IMPORTED_MODULE_5__["SetpassPage"]
    }
];
var SetpassPageModule = /** @class */ (function () {
    function SetpassPageModule() {
    }
    SetpassPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_setpass_page__WEBPACK_IMPORTED_MODULE_5__["SetpassPage"]]
        })
    ], SetpassPageModule);
    return SetpassPageModule;
}());



/***/ }),

/***/ "./src/app/setpass/setpass.page.html":
/*!*******************************************!*\
  !*** ./src/app/setpass/setpass.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Pratiche Web</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <form [formGroup]=\"setpassForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\" size-sm>\n            <ion-item>\n              <ion-label>Password: </ion-label>\n              <ion-input placeholder=\"Password\" formControlName=\"pass\" type=\"password\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-sm>\n            <ion-item>\n              <ion-label>Ripeti password:</ion-label>\n              <ion-input placeholder=\"Password\" formControlName=\"repeatPass\" type=\"password\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col size=\"12\">\n              <div>\n                <ion-button color=\"primary\" [disabled]=\"!setpassForm.valid\" (click)=\"onSaveClick()\">Salva</ion-button>\n                <ion-button color=\"danger\" (click)=\"onCancelClick()\">Annulla</ion-button>      \n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n  </form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/setpass/setpass.page.scss":
/*!*******************************************!*\
  !*** ./src/app/setpass/setpass.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHBhc3Mvc2V0cGFzcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/setpass/setpass.page.ts":
/*!*****************************************!*\
  !*** ./src/app/setpass/setpass.page.ts ***!
  \*****************************************/
/*! exports provided: SetpassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetpassPage", function() { return SetpassPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user_set_pass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user-set-pass */ "./src/app/models/user-set-pass.ts");
/* harmony import */ var _services_setpass_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/setpass.service */ "./src/app/services/setpass.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SetpassPage = /** @class */ (function () {
    function SetpassPage(_fb, _r, _route, _service) {
        this._fb = _fb;
        this._r = _r;
        this._route = _route;
        this._service = _service;
        this.setpassForm = _fb.group({
            pass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            repeatPass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.genValidateRepeatPass()])],
        });
    }
    SetpassPage.prototype.genValidateRepeatPass = function () {
        var self = this;
        return function (c) {
            var isEqual = false;
            if (self && self.setpassForm && self.setpassForm.get('pass')) {
                isEqual = self.setpassForm.get('pass').value === c.value;
            }
            return isEqual ? null : {
                validateRepeatPass: {
                    valid: false
                }
            };
        };
    };
    SetpassPage.prototype.ngOnInit = function () {
        var _this = this;
        this.token$ = this._route.params.subscribe(function (params) {
            _this.tokenParam = params['token'];
            var self = _this;
            _this.getToken$ = _this._service.asyncGetToken(_this.tokenParam).subscribe({
                next: function (tkn) {
                    self.token = tkn;
                    if (tkn.what !== 'SETPASS') {
                        console.log(self._r);
                        self._r.navigate(['/not-found']);
                    }
                },
                error: function (msg) {
                    console.log("Error getting token: " + (msg || ''));
                    self._r.navigate(['/not-found']);
                }
            });
        });
    };
    SetpassPage.prototype.ngOnDestroy = function () {
        this.token$.unsubscribe();
        this.getToken$.unsubscribe();
        if (this.setpassRun$) {
            this.setpassRun$.unsubscribe();
        }
    };
    SetpassPage.prototype.onCancelClick = function () {
        this.setpassForm.patchValue({
            pass: '',
            repeatPass: ''
        });
    };
    SetpassPage.prototype.onSaveClick = function () {
        if (this.setpassForm.valid) {
            var record = new _models_user_set_pass__WEBPACK_IMPORTED_MODULE_3__["UserSetPass"]();
            record.email = this.token.email;
            record.pass = this.setpassForm.get('pass').value;
            var self_1 = this;
            this.setpassRun$ = this._service.asyncDo(record, this.token).subscribe({
                next: function (status) { console.log(status); self_1._r.navigate(['/pass-changed']); },
                error: function (msg) { console.log("Error saving user: " + (msg || '')); }
            });
        }
    };
    SetpassPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setpass',
            template: __webpack_require__(/*! ./setpass.page.html */ "./src/app/setpass/setpass.page.html"),
            styles: [__webpack_require__(/*! ./setpass.page.scss */ "./src/app/setpass/setpass.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_setpass_service__WEBPACK_IMPORTED_MODULE_4__["SetpassService"]])
    ], SetpassPage);
    return SetpassPage;
}());



/***/ })

}]);
//# sourceMappingURL=setpass-setpass-module.js.map