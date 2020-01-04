(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kind-form-kind-form-module"],{

/***/ "./src/app/kind-form/kind-form.module.ts":
/*!***********************************************!*\
  !*** ./src/app/kind-form/kind-form.module.ts ***!
  \***********************************************/
/*! exports provided: KindFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KindFormPageModule", function() { return KindFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _kind_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kind-form.page */ "./src/app/kind-form/kind-form.page.ts");







var routes = [
    {
        path: '',
        component: _kind_form_page__WEBPACK_IMPORTED_MODULE_6__["KindFormPage"]
    }
];
var KindFormPageModule = /** @class */ (function () {
    function KindFormPageModule() {
    }
    KindFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_kind_form_page__WEBPACK_IMPORTED_MODULE_6__["KindFormPage"]]
        })
    ], KindFormPageModule);
    return KindFormPageModule;
}());



/***/ }),

/***/ "./src/app/kind-form/kind-form.page.html":
/*!***********************************************!*\
  !*** ./src/app/kind-form/kind-form.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button icon-only menuToggle=\"start\">\n          <ion-icon name=\"menu\"></ion-icon>\n      </ion-menu-button>          \n    </ion-buttons>\n    <ion-title>\n          Pratiche Web\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n  \n<ion-content>\n  <form [formGroup]=\"KindForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <h1 *ngIf=\"IsNew\">Nuova famiglia di opzioni infortuni</h1>\n          <h1 *ngIf=\"! IsNew\">Opzione</h1>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" size-sm>\n          <ion-item>\n            <ion-label>Nome:</ion-label>\n            <ion-input placeholder=\"Nome famiglia\" formControlName=\"name\"></ion-input> \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" size-sm>\n          <div>\n            <ion-button color=\"primary\" [disabled]=\"!KindForm.valid\" (click)=\"onSaveClick()\">\n              <ion-icon slot=\"icon-only\" name=\"save\"></ion-icon>\n            </ion-button>\n            <ion-button color=\"tertiary\" (click)=\"onCancelClick()\">\n              <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/kind-form/kind-form.page.scss":
/*!***********************************************!*\
  !*** ./src/app/kind-form/kind-form.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tpbmQtZm9ybS9raW5kLWZvcm0ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/kind-form/kind-form.page.ts":
/*!*********************************************!*\
  !*** ./src/app/kind-form/kind-form.page.ts ***!
  \*********************************************/
/*! exports provided: KindFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KindFormPage", function() { return KindFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_kind_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/kind.service */ "./src/app/services/kind.service.ts");
/* harmony import */ var _models_service_status_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/service-status.enum */ "./src/app/models/service-status.enum.ts");
/* harmony import */ var _models_kind__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/kind */ "./src/app/models/kind.ts");








var KindFormPage = /** @class */ (function () {
    function KindFormPage(formBuilder, route, service, router, tc) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.service = service;
        this.router = router;
        this.tc = tc;
        this.IsNew = false;
        this.KindForm = formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    KindFormPage.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.IsNew$ = this.route.params.subscribe(function (params) {
            var parName = 'id';
            var id = params[parName];
            console.log(id);
            self.IsNew = id === 'new';
            if (!self.IsNew) {
                _this.Kind$ = self.service.asyncGet(id).subscribe(function (result) {
                    _this._Kind = result;
                    _this.KindForm.setValue({ name: _this._Kind.name });
                }, function (error) {
                    console.log(error);
                });
            }
        });
    };
    KindFormPage.prototype.ngOnDestroy = function () {
        if (this.IsNew$) {
            this.IsNew$.unsubscribe();
        }
        if (this.Kind$) {
            this.Kind$.unsubscribe();
        }
    };
    KindFormPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tc.create({
                            message: message,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    KindFormPage.prototype.onSaveClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, kind;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                self = this;
                if (this.IsNew) {
                    kind = new _models_kind__WEBPACK_IMPORTED_MODULE_7__["Kind"]();
                    kind.name = this.KindForm.get('name').value;
                    this.Save$ = this.service.asyncPost(kind).subscribe(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(result === _models_service_status_enum__WEBPACK_IMPORTED_MODULE_6__["ServiceStatus"].OK)) return [3 /*break*/, 5];
                                    if (!(result === _models_service_status_enum__WEBPACK_IMPORTED_MODULE_6__["ServiceStatus"].OK)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, self.presentToast('Dato salvato correttamente')];
                                case 1:
                                    _a.sent();
                                    return [3 /*break*/, 4];
                                case 2: return [4 /*yield*/, self.presentToast('Si è presentato un problema, riprovare!')];
                                case 3:
                                    _a.sent();
                                    _a.label = 4;
                                case 4: return [3 /*break*/, 6];
                                case 5:
                                    console.log(result);
                                    _a.label = 6;
                                case 6: return [2 /*return*/];
                            }
                        });
                    }); }, function (error) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, self.presentToast("Si \u00E8 presentato un problema: " + error + ", riprovare!")];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
                else {
                    this._Kind.name = this.KindForm.get('name').value;
                    this.Save$ = this.service.asyncPut(this._Kind).subscribe(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(result === _models_service_status_enum__WEBPACK_IMPORTED_MODULE_6__["ServiceStatus"].OK)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, self.presentToast('Dato salvato correttamente')];
                                case 1:
                                    _a.sent();
                                    return [3 /*break*/, 4];
                                case 2: return [4 /*yield*/, self.presentToast('Si è presentato un problema, riprovare!')];
                                case 3:
                                    _a.sent();
                                    _a.label = 4;
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); }, function (error) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, self.presentToast("Si \u00E8 presentato un problema: " + error + ", riprovare!")];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
                return [2 /*return*/];
            });
        });
    };
    KindFormPage.prototype.onCancelClick = function () {
        this.router.navigate(['/home']);
    };
    KindFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kind-form',
            template: __webpack_require__(/*! ./kind-form.page.html */ "./src/app/kind-form/kind-form.page.html"),
            styles: [__webpack_require__(/*! ./kind-form.page.scss */ "./src/app/kind-form/kind-form.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_kind_service__WEBPACK_IMPORTED_MODULE_5__["KindService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], KindFormPage);
    return KindFormPage;
}());



/***/ })

}]);
//# sourceMappingURL=kind-form-kind-form-module.js.map