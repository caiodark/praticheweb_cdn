(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["option-form-option-form-module"],{

/***/ "./src/app/models/option.ts":
/*!**********************************!*\
  !*** ./src/app/models/option.ts ***!
  \**********************************/
/*! exports provided: Option */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
var Option = /** @class */ (function () {
    function Option() {
    }
    return Option;
}());



/***/ }),

/***/ "./src/app/models/service-status.enum.ts":
/*!***********************************************!*\
  !*** ./src/app/models/service-status.enum.ts ***!
  \***********************************************/
/*! exports provided: ServiceStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceStatus", function() { return ServiceStatus; });
var ServiceStatus;
(function (ServiceStatus) {
    ServiceStatus[ServiceStatus["OK"] = 0] = "OK";
    ServiceStatus[ServiceStatus["FAILED"] = 1] = "FAILED";
})(ServiceStatus || (ServiceStatus = {}));


/***/ }),

/***/ "./src/app/option-form/option-form.module.ts":
/*!***************************************************!*\
  !*** ./src/app/option-form/option-form.module.ts ***!
  \***************************************************/
/*! exports provided: OptionFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionFormPageModule", function() { return OptionFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _option_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./option-form.page */ "./src/app/option-form/option-form.page.ts");







var routes = [
    {
        path: '',
        component: _option_form_page__WEBPACK_IMPORTED_MODULE_6__["OptionFormPage"]
    }
];
var OptionFormPageModule = /** @class */ (function () {
    function OptionFormPageModule() {
    }
    OptionFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_option_form_page__WEBPACK_IMPORTED_MODULE_6__["OptionFormPage"]]
        })
    ], OptionFormPageModule);
    return OptionFormPageModule;
}());



/***/ }),

/***/ "./src/app/option-form/option-form.page.html":
/*!***************************************************!*\
  !*** ./src/app/option-form/option-form.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button icon-only menuToggle=\"start\">\n          <ion-icon name=\"menu\"></ion-icon>\n      </ion-menu-button>          \n    </ion-buttons>\n    <ion-title>\n          Pratiche Web\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n  \n\n<ion-content>\n  <form [formGroup]=\"OptionForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <h1 *ngIf=\"IsNew\">Nuova opzione per {{KindName}}</h1>\n          <h1 *ngIf=\"! IsNew\">Opzione</h1>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" size-sm>\n          <ion-item>\n            <ion-label>Nome:</ion-label>\n            <ion-input placeholder=\"Opzione\" formControlName=\"name\"></ion-input> \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" size-sm>\n          <div>\n            <ion-button color=\"primary\" [disabled]=\"!OptionForm.valid\" (click)=\"onSaveClick()\">\n              <ion-icon slot=\"icon-only\" name=\"save\"></ion-icon>\n            </ion-button>\n            <ion-button color=\"tertiary\" (click)=\"onCancelClick()\">\n              <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/option-form/option-form.page.scss":
/*!***************************************************!*\
  !*** ./src/app/option-form/option-form.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wdGlvbi1mb3JtL29wdGlvbi1mb3JtLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/option-form/option-form.page.ts":
/*!*************************************************!*\
  !*** ./src/app/option-form/option-form.page.ts ***!
  \*************************************************/
/*! exports provided: OptionFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionFormPage", function() { return OptionFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_option_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/option.service */ "./src/app/services/option.service.ts");
/* harmony import */ var _models_service_status_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/service-status.enum */ "./src/app/models/service-status.enum.ts");
/* harmony import */ var _models_option__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/option */ "./src/app/models/option.ts");








var OptionFormPage = /** @class */ (function () {
    function OptionFormPage(route, router, fb, service, tc) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.service = service;
        this.tc = tc;
        this.IsNew = false;
        this.OptionForm = fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    OptionFormPage.prototype.GetParams = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.Params$ = self.route.params.subscribe(function (params) {
                self.kindId = params['kind_id'];
                self.id = params['id'];
                self.IsNew = self.id === 'new';
                resolve(true);
            });
        });
    };
    OptionFormPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.KindName = localStorage.getItem('kindName');
                        return [4 /*yield*/, this.GetParams()];
                    case 1:
                        _b.sent();
                        if (!!this.IsNew) return [3 /*break*/, 3];
                        _a = this;
                        return [4 /*yield*/, this.GetOption(this.id)];
                    case 2:
                        _a.Option = _b.sent();
                        if (this.Option) {
                            this.OptionForm.get('name').setValue(this.Option.name);
                        }
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OptionFormPage.prototype.ngOnDestroy = function () {
        if (this.Params$) {
            this.Params$.unsubscribe();
        }
    };
    OptionFormPage.prototype.Save = function (option) {
        var _this = this;
        var self = this;
        return new Promise(function (resolve, reject) {
            var serviceFun = self.IsNew ? self.service.asyncPost : self.service.asyncPut;
            serviceFun.bind(_this.service)(_this.kindId, option).subscribe({
                next: function (ris) {
                    resolve(ris);
                },
                error: function (err) {
                    console.error(err);
                    reject(err);
                }
            });
        });
    };
    OptionFormPage.prototype.ShowToast = function (message) {
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
    OptionFormPage.prototype.GetOption = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                self = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        self.service.asyncGet(self.kindId, id).subscribe({
                            next: function (ris) {
                                resolve(ris);
                            },
                            error: function (err) {
                                reject(err);
                            }
                        });
                    })];
            });
        });
    };
    OptionFormPage.prototype.onSaveClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var option, ss, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        option = this.IsNew ? new _models_option__WEBPACK_IMPORTED_MODULE_7__["Option"]() : this.Option;
                        option.name = this.OptionForm.get('name').value;
                        option.kind = this.kindId;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, , 9]);
                        return [4 /*yield*/, this.Save(option)];
                    case 2:
                        ss = _a.sent();
                        if (!(ss === _models_service_status_enum__WEBPACK_IMPORTED_MODULE_6__["ServiceStatus"].OK)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.ShowToast('Opzione salvata correttamente')];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.ShowToast('Si è presentato un problema. Riprova!')];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1 = _a.sent();
                        return [4 /*yield*/, this.ShowToast("Si \u00E8 presentato un problema " + e_1 + ". Riprova!")];
                    case 8:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    OptionFormPage.prototype.onCancelClick = function () {
        this.router.navigate(['/options', this.kindId]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], OptionFormPage.prototype, "KindName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_option__WEBPACK_IMPORTED_MODULE_7__["Option"])
    ], OptionFormPage.prototype, "Option", void 0);
    OptionFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-option-form',
            template: __webpack_require__(/*! ./option-form.page.html */ "./src/app/option-form/option-form.page.html"),
            styles: [__webpack_require__(/*! ./option-form.page.scss */ "./src/app/option-form/option-form.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_option_service__WEBPACK_IMPORTED_MODULE_5__["OptionService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], OptionFormPage);
    return OptionFormPage;
}());



/***/ }),

/***/ "./src/app/services/option.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/option.service.ts ***!
  \********************************************/
/*! exports provided: OptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionService", function() { return OptionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/service-status.enum */ "./src/app/models/service-status.enum.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_option__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/option */ "./src/app/models/option.ts");






var OptionService = /** @class */ (function () {
    function OptionService(_http) {
        this._http = _http;
    }
    OptionService.prototype.asyncGetList = function (KindId) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var session = window.localStorage.getItem('_session');
            if (!session) {
                session = 'loggedout';
            }
            _this._http.get("/api/setup/options/" + KindId + "/", {
                headers: {
                    's-t': session
                },
                observe: 'response'
            }).subscribe(function (data) {
                var primitiveOptions = data.body;
                console.log(data.body);
                var options = primitiveOptions.map(function (obj) {
                    var o = new _models_option__WEBPACK_IMPORTED_MODULE_5__["Option"]();
                    o.name = obj.name;
                    o.deleted = obj.deleted;
                    o._id = obj._id;
                    o.kind = obj.kind;
                    return o;
                });
                observer.next(options);
                return { unsubscribe: function () { } };
            }, function (error) {
                console.log(error);
                observer.error(error);
                return { unsubscribe: function () { } };
            });
        });
    };
    OptionService.prototype.asyncPost = function (kindId, option) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var session = window.localStorage.getItem('_session');
            if (!session) {
                session = 'loggedout';
            }
            _this._http.post("/api/setup/options/" + kindId, option, {
                headers: {
                    's-t': session
                },
                observe: 'response',
                responseType: 'text'
            }).subscribe(function (res) {
                if (res.status === 200) {
                    observer.next(_models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__["ServiceStatus"].OK);
                }
                else {
                    observer.next(_models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__["ServiceStatus"].FAILED);
                }
                return { unsubscribe: function () { } };
            }, function (error) {
                console.log(error);
                observer.error(error);
                return { unsubscribe: function () { } };
            });
        });
    };
    OptionService.prototype.asyncDelete = function (kindId, id) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var session = window.localStorage.getItem('_session');
            if (!session) {
                session = 'loggedout';
            }
            _this._http.delete("/api/setup/options/" + kindId + "/" + id, {
                headers: {
                    's-t': session
                },
                observe: 'response',
                responseType: 'text'
            }).subscribe(function (res) {
                if (res.status === 200) {
                    observer.next(_models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__["ServiceStatus"].OK);
                }
                else {
                    observer.next(_models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__["ServiceStatus"].FAILED);
                }
                return { unsubscribe: function () { } };
            }, function (error) {
                console.log(error);
                observer.error(error);
                return { unsubscribe: function () { } };
            });
        });
    };
    OptionService.prototype.asyncGet = function (kindId, id) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var session = window.localStorage.getItem('_session');
            if (!session) {
                session = 'loggedout';
            }
            _this._http.get("/api/setup/options/" + kindId + "/" + id, {
                headers: {
                    's-t': session
                },
                observe: 'response'
            }).subscribe(function (data) {
                console.log(data);
                var primitiveOption = data.body;
                var k = new _models_option__WEBPACK_IMPORTED_MODULE_5__["Option"]();
                k.name = primitiveOption.name;
                k.deleted = primitiveOption.deleted;
                k._id = primitiveOption._id;
                k.kind = primitiveOption.kind;
                observer.next(k);
                return { unsubscribe: function () { } };
            }, function (error) {
                console.log(error);
                observer.error(error);
                return { unsubscribe: function () { } };
            });
        });
    };
    OptionService.prototype.asyncPut = function (kindId, option) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var session = window.localStorage.getItem('_session');
            if (!session) {
                session = 'loggedout';
            }
            _this._http.put("/api/setup/options/" + kindId + "/" + option._id, option, {
                headers: {
                    's-t': session
                },
                observe: 'response',
                responseType: 'text'
            }).subscribe(function (res) {
                if (res.status === 200) {
                    observer.next(_models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__["ServiceStatus"].OK);
                }
                else {
                    observer.next(_models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__["ServiceStatus"].FAILED);
                }
                return { unsubscribe: function () { } };
            }, function (error) {
                console.log(error);
                observer.error(error);
                return { unsubscribe: function () { } };
            });
        });
    };
    OptionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], OptionService);
    return OptionService;
}());



/***/ })

}]);
//# sourceMappingURL=option-form-option-form-module.js.map