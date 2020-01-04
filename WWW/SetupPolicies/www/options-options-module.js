(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["options-options-module"],{

/***/ "./src/app/options/options.module.ts":
/*!*******************************************!*\
  !*** ./src/app/options/options.module.ts ***!
  \*******************************************/
/*! exports provided: OptionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsPageModule", function() { return OptionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _options_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./options.page */ "./src/app/options/options.page.ts");







var routes = [
    {
        path: '',
        component: _options_page__WEBPACK_IMPORTED_MODULE_6__["OptionsPage"]
    }
];
var OptionsPageModule = /** @class */ (function () {
    function OptionsPageModule() {
    }
    OptionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_options_page__WEBPACK_IMPORTED_MODULE_6__["OptionsPage"]]
        })
    ], OptionsPageModule);
    return OptionsPageModule;
}());



/***/ }),

/***/ "./src/app/options/options.page.html":
/*!*******************************************!*\
  !*** ./src/app/options/options.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button icon-only menuToggle=\"start\">\n          <ion-icon name=\"menu\"></ion-icon>\n      </ion-menu-button>          \n    </ion-buttons>\n    <ion-title>\n          Pratiche Web\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <div>\n      <h1>Opzioni per {{Kind?.name}}</h1>\n    </div>    \n    <div *ngIf=\"!Options || Options.length === 0\">\n      Nessuna opzione presente <br />\n      <ion-button color=\"tertiary\" (click)=\"onCreateClick()\" size=\"default\">\n        <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\n      </ion-button>\n      <ion-button color=\"tertiary\" (click)=\"onBackClick()\" size=\"default\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </div>\n    <div *ngIf=\"Options && Options.length > 0\">\n      <ion-button color=\"tertiary\" (click)=\"onCreateClick()\" size=\"default\">\n        <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\n      </ion-button>\n      <ion-button color=\"tertiary\" (click)=\"onBackClick()\" size=\"default\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </div>\n    <ion-grid *ngIf=\"Options && Options.length > 0\">\n      <ion-row>\n        <ion-col size=\"12\" size-sm>\n          <ion-list>\n            <ion-item *ngFor=\"let o of Options\" lines=\"full\" >\n              <ion-button color=\"primary\" (click)=\"onItemClick(o._id)\" slot=\"start\">\n                <ion-icon slot=\"icon-only\" name=\"compass\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"danger\" slot=\"end\" (click)=\"onItemDelete(o._id)\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-button>\n              <ion-label>{{o.name}}</ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/options/options.page.scss":
/*!*******************************************!*\
  !*** ./src/app/options/options.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wdGlvbnMvb3B0aW9ucy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/options/options.page.ts":
/*!*****************************************!*\
  !*** ./src/app/options/options.page.ts ***!
  \*****************************************/
/*! exports provided: OptionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsPage", function() { return OptionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_option_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/option.service */ "./src/app/services/option.service.ts");
/* harmony import */ var _models_kind__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/kind */ "./src/app/models/kind.ts");
/* harmony import */ var _services_kind_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/kind.service */ "./src/app/services/kind.service.ts");
/* harmony import */ var _models_service_status_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/service-status.enum */ "./src/app/models/service-status.enum.ts");









var OptionsPage = /** @class */ (function () {
    function OptionsPage(service, router, route, ac, tc, ks) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.ac = ac;
        this.tc = tc;
        this.ks = ks;
    }
    OptionsPage.prototype.ngOnInit = function () {
    };
    OptionsPage.prototype.ngOnDestroy = function () {
        if (this.Route$) {
            this.Route$.unsubscribe();
        }
    };
    OptionsPage.prototype.GetKind = function (kindId) {
        var _this = this;
        var self = this;
        return new Promise(function (resolve, reject) {
            _this.ks.asyncGet(kindId).subscribe({
                next: function (ris) {
                    resolve(ris);
                },
                error: function (err) {
                    resolve(null);
                }
            });
        });
    };
    OptionsPage.prototype.GetOptions = function (kindId) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.service.asyncGetList(kindId).subscribe({
                next: function (ris) {
                    resolve(ris);
                },
                error: function (err) {
                    resolve([]);
                }
            });
        });
    };
    OptionsPage.prototype.GetKindId = function () {
        var _this = this;
        var self = this;
        return new Promise(function (resolve, reject) {
            self.Route$ = _this.route.params.subscribe(function (params) {
                var param = 'kind_id';
                resolve(params[param]);
            });
        });
    };
    OptionsPage.prototype.DeleteItem = function (id) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.service.asyncDelete(self.Kind._id, id).subscribe({
                next: function (ris) {
                    resolve(ris);
                },
                error: function (err) {
                    resolve(_models_service_status_enum__WEBPACK_IMPORTED_MODULE_8__["ServiceStatus"].FAILED);
                }
            });
        });
    };
    OptionsPage.prototype.ConfirmDelete = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, this.ac.create({
                                header: 'Cancellazione opzione',
                                message: 'Stai per <strong>cancellare</strong> una opzione',
                                buttons: [
                                    {
                                        text: 'Annulla',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function (cnl) { }
                                    },
                                    {
                                        text: 'Conferma',
                                        handler: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            var ss;
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, this.DeleteItem(id)];
                                                    case 1:
                                                        ss = _a.sent();
                                                        if (!(ss === _models_service_status_enum__WEBPACK_IMPORTED_MODULE_8__["ServiceStatus"].OK)) return [3 /*break*/, 4];
                                                        return [4 /*yield*/, self.LoadData()];
                                                    case 2:
                                                        _a.sent();
                                                        return [4 /*yield*/, self.ShowToast('Opzione correttamente cancellata.')];
                                                    case 3:
                                                        _a.sent();
                                                        return [3 /*break*/, 6];
                                                    case 4: return [4 /*yield*/, self.ShowToast('Si è verificato un problema. Riprova!')];
                                                    case 5:
                                                        _a.sent();
                                                        _a.label = 6;
                                                    case 6: return [2 /*return*/];
                                                }
                                            });
                                        }); }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OptionsPage.prototype.ShowToast = function (message) {
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
    OptionsPage.prototype.LoadData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var kindId, _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.GetKindId()];
                    case 1:
                        kindId = _c.sent();
                        _a = this;
                        return [4 /*yield*/, this.GetOptions(kindId)];
                    case 2:
                        _a.Options = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.GetKind(kindId)];
                    case 3:
                        _b.Kind = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OptionsPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.LoadData()];
                    case 1:
                        _a.sent();
                        localStorage.setItem('kindName', this.Kind.name);
                        return [2 /*return*/];
                }
            });
        });
    };
    OptionsPage.prototype.onCreateClick = function () {
        this.router.navigate(['/option-form', this.Kind._id, 'new']);
    };
    OptionsPage.prototype.onItemClick = function (id) {
        this.router.navigate(['/option-form', this.Kind._id, id]);
    };
    OptionsPage.prototype.onItemDelete = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ConfirmDelete(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OptionsPage.prototype.onBackClick = function () {
        this.router.navigate(['/home']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"])
    ], OptionsPage.prototype, "Route$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_kind__WEBPACK_IMPORTED_MODULE_6__["Kind"])
    ], OptionsPage.prototype, "Kind", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], OptionsPage.prototype, "Options", void 0);
    OptionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-options',
            template: __webpack_require__(/*! ./options.page.html */ "./src/app/options/options.page.html"),
            styles: [__webpack_require__(/*! ./options.page.scss */ "./src/app/options/options.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_option_service__WEBPACK_IMPORTED_MODULE_5__["OptionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _services_kind_service__WEBPACK_IMPORTED_MODULE_7__["KindService"]])
    ], OptionsPage);
    return OptionsPage;
}());



/***/ })

}]);
//# sourceMappingURL=options-options-module.js.map