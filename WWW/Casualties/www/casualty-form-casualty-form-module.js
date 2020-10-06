(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["casualty-form-casualty-form-module"],{

/***/ "./src/app/casualty-form/casualty-form.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/casualty-form/casualty-form.module.ts ***!
  \*******************************************************/
/*! exports provided: CasualtyFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasualtyFormPageModule", function() { return CasualtyFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _casualty_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./casualty-form.page */ "./src/app/casualty-form/casualty-form.page.ts");
/* harmony import */ var src_app_modals_customer_modal_customer_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modals/customer-modal/customer-modal.module */ "./src/app/modals/customer-modal/customer-modal.module.ts");
/* harmony import */ var src_app_modals_customer_modal_customer_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modals/customer-modal/customer-modal.page */ "./src/app/modals/customer-modal/customer-modal.page.ts");
/* harmony import */ var src_app_attachments_attachments_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/attachments/attachments.module */ "./src/app/attachments/attachments.module.ts");
/* harmony import */ var src_app_diary_diary_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/diary/diary.module */ "./src/app/diary/diary.module.ts");
/* harmony import */ var src_app_casualty_policies_casualty_policies_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/casualty-policies/casualty-policies.module */ "./src/app/casualty-policies/casualty-policies.module.ts");












var routes = [
    {
        path: ':token',
        component: _casualty_form_page__WEBPACK_IMPORTED_MODULE_6__["CasualtyFormPage"]
    },
    {
        path: ':token/attachments',
        loadChildren: 'src/app/attachments/attachments.module#AttachmentsPageModule'
    },
    {
        path: ':token/diary',
        loadChildren: 'src/app/diary/diary.module#DiaryPageModule'
    },
    {
        path: ':token/policies',
        loadChildren: 'src/app/casualty-policies/casualty-policies.module#CasualtyPoliciesPageModule'
    },
    {
        path: ':token/policies/:id',
        loadChildren: '../casualty-policy-form/casualty-policy-form.module#CasualtyPolicyFormPageModule',
    },
    {
        path: ':token/policies/:id/attachments',
        loadChildren: 'src/app/attachments/attachments.module#AttachmentsPageModule'
    },
];
var CasualtyFormPageModule = /** @class */ (function () {
    function CasualtyFormPageModule() {
    }
    CasualtyFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_attachments_attachments_module__WEBPACK_IMPORTED_MODULE_9__["AttachmentsPageModule"],
                src_app_diary_diary_module__WEBPACK_IMPORTED_MODULE_10__["DiaryPageModule"],
                src_app_casualty_policies_casualty_policies_module__WEBPACK_IMPORTED_MODULE_11__["CasualtyPoliciesPageModule"],
                src_app_modals_customer_modal_customer_modal_module__WEBPACK_IMPORTED_MODULE_7__["CustomerModalPageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            entryComponents: [src_app_modals_customer_modal_customer_modal_page__WEBPACK_IMPORTED_MODULE_8__["CustomerModalPage"]],
            declarations: [_casualty_form_page__WEBPACK_IMPORTED_MODULE_6__["CasualtyFormPage"]]
        })
    ], CasualtyFormPageModule);
    return CasualtyFormPageModule;
}());



/***/ }),

/***/ "./src/app/casualty-form/casualty-form.page.html":
/*!*******************************************************!*\
  !*** ./src/app/casualty-form/casualty-form.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button icon-only menuToggle=\"start\">\n        <ion-icon name=\"menu\"></ion-icon>\n      </ion-menu-button>          \n    </ion-buttons>\n    <ion-title>\n      Pratiche Web\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <form [formGroup]=\"casualtyForm\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p *ngIf=\"isNew\"><a (click)=\"onCancelClick()\" [routerLink]=\"\">Lista Infortuni</a> | Nuovo infortunio</p>\n            <p *ngIf=\"! isNew\"><a (click)=\"onCancelClick()\" [routerLink]=\"\">Lista Infortuni</a> | Infortunio</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item lines=\"none\">\n              <ion-label>\n                <h1 *ngIf=\"isNew\">Nuovo infortunio</h1>\n                <h1 *ngIf=\"! isNew\">Infortunio</h1>        \n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label>Cliente:</ion-label>\n              {{nomeCustomer}}\n              <ion-button color=\"primary\" slot=\"start\" (click)=\"onCustomerChooseClick()\">\n                <ion-icon slot=\"icon-only\" name=\"compass\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"danger\" slot=\"end\" (click)=\"resetCustomerClick()\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-sm>\n            <ion-item>\n              <ion-label>Data infortunio:</ion-label>\n              <ion-datetime\n                placeholder=\"Data dell'infortunio\"\n                display-format=\"DD/MM/YYYY\" \n                picker-format=\"DD/MMMM/YYYY\" \n                formControlName=\"casualtyDate\"\n                month-names=\"gennaio, febbraio, marzo, aprile, maggio, giugno, luglio, agosto, settembre, ottobre, novembre, dicembre\"\n                cancel-text=\"Annulla\"\n                done-text=\"Ok\">\n              </ion-datetime>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-sm>\n            <ion-item>\n              <ion-label>Ora infortunio:</ion-label>\n              <ion-datetime\n                placeholder=\"Ora dell'infortunio\"\n                display-format=\"HH:mm\" \n                formControlName=\"casualtyTime\"\n                cancel-text=\"Annulla\"\n                done-text=\"Ok\">\n              </ion-datetime>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-sm>\n            <ion-item>\n              <ion-label>Luogo:</ion-label>\n              <ion-input placeholder=\"Luogo dell'infortunio\" formControlName=\"place\"></ion-input> \n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-sm>\n            <ion-item>\n              <ion-label>Descrizione:</ion-label>\n              <ion-textarea placeholder=\"Descrizione dell'infortunio\" formControlName=\"description\" rows=\"10\"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-sm>\n            <ion-item>\n              <ion-label>Allarme opzionale:</ion-label>\n              <ion-datetime\n                placeholder=\"Data allarme opzionale\"\n                display-format=\"DD/MM/YYYY\" \n                picker-format=\"DD/MMMM/YYYY\" \n                formControlName=\"optionalAlarm\"\n                month-names=\"gennaio, febbraio, marzo, aprile, maggio, giugno, luglio, agosto, settembre, ottobre, novembre, dicembre\"\n                cancel-text=\"Annulla\"\n                done-text=\"Ok\">\n              </ion-datetime>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-sm>\n            <ion-item>\n              <ion-label>Testo allarme opzionale:</ion-label>\n              <ion-textarea placeholder=\"Testo per l'allarme opzionale\" formControlName=\"optionalAlarmText\" rows=\"10\"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let k of setupKinds\">\n          <ion-col>\n            <ion-item>\n              <ion-button color=\"primary\" slot=\"start\" (click)=\"onPickerClick(k)\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-dropdown\"></ion-icon>\n              </ion-button>\n              <ion-label>{{k.name}}:</ion-label>\n              <ion-input placeholder=\"--\" [formControlName]=\"k._id\" readonly=\"true\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"token && token !== '' && token !=='new'\" class=\"ion-align-items-center\">\n          <ion-col size=\"auto\">\n            <h1>Allegati</h1>\n          </ion-col>\n          <ion-col>\n            <ion-button color=\"primary\" (click)=\"onAddAttachmentClick()\">\n              <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"token && token !== ''\">\n          <ion-col>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let a of attachments\">\n          <ion-col>\n            <ion-item>\n              <ion-label text-wrap>\n                <ion-text color=\"tertiary\">{{a.name}}</ion-text>\n              </ion-label>\n              <ion-note slot=\"end\" class=\"ion-hide-sm-down\">\n                {{a.tags}} {{a.kind}}\n              </ion-note>\n              <ion-button color=\"tertiary\" slot=\"start\" href=\"http://pratiche.ares/api/attachments/{{a.kind}}/{{token}}/{{a._id}}/attachment\">\n                <ion-icon slot=\"icon-only\" name=\"cloud-download\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"danger\" slot=\"end\" (click)=\"onDeleteAttachmentClick(a)\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"attachments && attachments.length > 0\">\n          <ion-col>\n            <ion-button color=\"primary\" (click)=\"onAddAttachmentClick()\">\n              <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-sm>\n            <div>\n              <ion-button color=\"primary\" (click)=\"onDiaryClick()\" *ngIf=\"token && token !== '' && token !=='new'\">\n                <ion-icon slot=\"icon-only\" name=\"document\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"primary\" (click)=\"onPoliciesClick()\" *ngIf=\"token && token !== '' && token !=='new'\">\n                <ion-icon slot=\"icon-only\" name=\"paper\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"primary\" [disabled]=\"!casualtyForm.valid\" (click)=\"onSaveClick()\">\n                <ion-icon slot=\"icon-only\" name=\"save\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"tertiary\" (click)=\"onCancelClick()\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n              </ion-button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/casualty-form/casualty-form.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/casualty-form/casualty-form.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhc3VhbHR5LWZvcm0vY2FzdWFsdHktZm9ybS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/casualty-form/casualty-form.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/casualty-form/casualty-form.page.ts ***!
  \*****************************************************/
/*! exports provided: CasualtyFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasualtyFormPage", function() { return CasualtyFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_models_service_status_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/service-status.enum */ "./src/app/models/service-status.enum.ts");
/* harmony import */ var _services_setup_casualties_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/setup-casualties.service */ "./src/app/services/setup-casualties.service.ts");
/* harmony import */ var _services_attachments_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/attachments.service */ "./src/app/services/attachments.service.ts");
/* harmony import */ var src_app_services_casualty_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/casualty.service */ "./src/app/services/casualty.service.ts");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var src_app_modals_customer_modal_customer_modal_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modals/customer-modal/customer-modal.page */ "./src/app/modals/customer-modal/customer-modal.page.ts");











var CasualtyFormPage = /** @class */ (function () {
    function CasualtyFormPage(fb, route, router, mc, pc, ac, tc, as, scs, cas, cs) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.mc = mc;
        this.pc = pc;
        this.ac = ac;
        this.tc = tc;
        this.as = as;
        this.scs = scs;
        this.cas = cas;
        this.cs = cs;
        this.isNew = true;
        this.customers = [];
        this.nomeCustomer = '';
        this.selections = {};
        this.attachmentKinds = [
            'infortunio-certificato-medico',
            'infortunio-modulo-denuncia',
            'infortunio-documento',
        ];
        this.setupKinds = [];
        this.casualtyForm = fb.group({
            casualtyDate: [''],
            casualtyTime: [''],
            place: [''],
            prescriptionDate: [''],
            description: [''],
            optionalAlarm: [''],
            optionalAlarmText: [''],
            customerId: ['']
        });
    }
    CasualtyFormPage.prototype.getCasualtyToken = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.param$ = self.route.params.subscribe(function (params) {
                resolve(params.token);
            });
        });
    };
    CasualtyFormPage.prototype.getSetupKinds = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.scs.getKinds().subscribe({
                next: function (ris) {
                    resolve(ris);
                },
                error: function (err) {
                    reject(err);
                }
            });
        });
    };
    CasualtyFormPage.prototype.getSetupOptions = function (idKind) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.scs.getOptions(idKind).subscribe({
                next: function (ris) {
                    resolve(ris);
                },
                error: function (err) {
                    reject(err);
                }
            });
        });
    };
    CasualtyFormPage.prototype.getAttachments = function (kind) {
        var self = this;
        return new Promise(function (resolve, reject) {
            if (self.token !== 'new') {
                self.as.asyncGetAttachments(self.token, kind).subscribe({
                    next: function (atchs) {
                        resolve(atchs);
                    },
                    error: function (err) {
                        resolve([]);
                    }
                });
            }
            else {
                resolve([]);
            }
        });
    };
    CasualtyFormPage.prototype.initOptions = function () {
        var _this = this;
        var self = this;
        return new Promise(function (resolve) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.setupKinds.reduce(function (promise, k) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var opts;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.casualtyForm.addControl(k._id, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''));
                                        return [4 /*yield*/, promise];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, this.getSetupOptions(k._id)];
                                    case 2:
                                        opts = _a.sent();
                                        this.options.set(k._id, opts);
                                        return [2 /*return*/];
                                }
                            });
                        }); }, Promise.resolve())];
                    case 1:
                        _a.sent();
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    CasualtyFormPage.prototype.getCustomers = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.cs.asyncGetCustomers().subscribe(function (customers) {
                resolve(customers);
            });
        });
    };
    CasualtyFormPage.prototype.onPickerClick = function (kind) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options, pickerOptions, picker;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = this.options.get(kind._id);
                        pickerOptions = options.map(function (opt) {
                            return {
                                text: opt.name,
                                value: opt._id
                            };
                        });
                        return [4 /*yield*/, this.pc.create({
                                buttons: [
                                    {
                                        text: 'Ok',
                                        handler: (function (selected) {
                                            _this.casualtyForm.get(kind._id).setValue(selected[kind.name].text);
                                            var fieldName = "" + kind._id;
                                            _this.selections[fieldName] = selected[kind.name].value;
                                        })
                                    },
                                    {
                                        text: 'Annulla'
                                    },
                                    {
                                        text: 'Svuota',
                                        handler: (function (selected) {
                                            _this.casualtyForm.get(kind._id).setValue('');
                                            var fieldName = "" + kind._id;
                                            _this.selections[fieldName] = '';
                                        })
                                    }
                                ],
                                keyboardClose: true,
                                columns: [{
                                        name: kind.name,
                                        options: pickerOptions
                                    }]
                            })];
                    case 1:
                        picker = _a.sent();
                        return [4 /*yield*/, picker.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CasualtyFormPage.prototype.getCasualty = function (token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cas.single(token).subscribe(function (policy) {
                resolve(policy);
            });
        });
    };
    CasualtyFormPage.prototype.initCustomer = function (c) {
        if (c.customerId) {
            var cus = this.customers.reduce(function (a, b) {
                if (b.token === c.customerId) {
                    return b;
                }
                else {
                    return a;
                }
            }, null);
            if (cus) {
                this.nomeCustomer = cus.firstName + " " + cus.lastName;
            }
        }
    };
    CasualtyFormPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, _c, _d, _i, _e, kind, ats, _f, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _g.trys.push([0, 15, , 16]);
                        this.options = new Map();
                        _a = this;
                        return [4 /*yield*/, this.getCasualtyToken()];
                    case 1:
                        _a.token = _g.sent();
                        this.isNew = this.token === 'new';
                        if (!!this.isNew) return [3 /*break*/, 6];
                        _b = this;
                        return [4 /*yield*/, this.getCasualty(this.token)];
                    case 2:
                        _b.casualty = _g.sent();
                        _c = this;
                        return [4 /*yield*/, this.getSetupKinds()];
                    case 3:
                        _c.setupKinds = _g.sent();
                        this.selections = this.casualty.options;
                        if (!(this.setupKinds && this.setupKinds.length > 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.initOptions()];
                    case 4:
                        _g.sent();
                        _g.label = 5;
                    case 5:
                        this.casualtyForm.patchValue(this.casualty);
                        return [3 /*break*/, 9];
                    case 6:
                        _d = this;
                        return [4 /*yield*/, this.getSetupKinds()];
                    case 7:
                        _d.setupKinds = _g.sent();
                        if (!(this.setupKinds && this.setupKinds.length > 0)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.initOptions()];
                    case 8:
                        _g.sent();
                        _g.label = 9;
                    case 9:
                        this.attachments = [];
                        _i = 0, _e = this.attachmentKinds;
                        _g.label = 10;
                    case 10:
                        if (!(_i < _e.length)) return [3 /*break*/, 13];
                        kind = _e[_i];
                        return [4 /*yield*/, this.getAttachments(kind)];
                    case 11:
                        ats = _g.sent();
                        this.attachments = this.attachments.concat(ats);
                        _g.label = 12;
                    case 12:
                        _i++;
                        return [3 /*break*/, 10];
                    case 13:
                        _f = this;
                        return [4 /*yield*/, this.getCustomers()];
                    case 14:
                        _f.customers = _g.sent();
                        if (!this.isNew) {
                            this.initCustomer(this.casualty);
                        }
                        return [3 /*break*/, 16];
                    case 15:
                        e_1 = _g.sent();
                        console.error(e_1);
                        this.token = '';
                        this.isNew = true;
                        return [3 /*break*/, 16];
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    CasualtyFormPage.prototype.ionViewWillExit = function () {
        if (this.param$) {
            this.param$.unsubscribe();
        }
    };
    CasualtyFormPage.prototype.ngOnInit = function () {
    };
    CasualtyFormPage.prototype.onCancelClick = function () {
        this.router.navigate(['home']);
    };
    CasualtyFormPage.prototype.onDiaryClick = function () {
        this.router.navigate(['casualty', this.token, 'diary']);
    };
    CasualtyFormPage.prototype.onPoliciesClick = function () {
        this.router.navigate(['casualty', this.token, 'policies']);
    };
    CasualtyFormPage.prototype.resetCustomerClick = function () {
        this.nomeCustomer = '';
        this.casualtyForm.get('customerId').setValue('');
    };
    CasualtyFormPage.prototype.onCustomerChooseClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, this.mc.create({
                                component: src_app_modals_customer_modal_customer_modal_page__WEBPACK_IMPORTED_MODULE_10__["CustomerModalPage"],
                                componentProps: {
                                    baseCustomers: self.customers
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        if (data) {
                            this.nomeCustomer = data.firstName + " " + data.lastName;
                            this.casualtyForm.get('customerId').setValue(data.token);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CasualtyFormPage.prototype.onAddAttachmentClick = function () {
        this.router.navigate(['casualty', this.token, 'attachments'], { queryParams: { kind: 'infortunio' } });
    };
    CasualtyFormPage.prototype.showMessage = function (message) {
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
    CasualtyFormPage.prototype.deleteAttachment = function (attachment) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.as.asyncDeleteAttachment(attachment).subscribe({
                next: function (ris) {
                    resolve(ris);
                },
                error: function (err) {
                    resolve(src_app_models_service_status_enum__WEBPACK_IMPORTED_MODULE_5__["ServiceStatus"].FAILED);
                }
            });
        });
    };
    CasualtyFormPage.prototype.confirmDelete = function (attachment) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, this.ac.create({
                                header: 'Cancellazione allegato',
                                message: 'Stai per <strong>cancellare</strong> un allegato',
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
                                            var ss, _i, _a, a, ats, e_2;
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                switch (_b.label) {
                                                    case 0:
                                                        _b.trys.push([0, 10, , 12]);
                                                        return [4 /*yield*/, this.deleteAttachment(attachment)];
                                                    case 1:
                                                        ss = _b.sent();
                                                        if (!(ss === src_app_models_service_status_enum__WEBPACK_IMPORTED_MODULE_5__["ServiceStatus"].OK)) return [3 /*break*/, 7];
                                                        this.attachments = [];
                                                        _i = 0, _a = this.attachmentKinds;
                                                        _b.label = 2;
                                                    case 2:
                                                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                                                        a = _a[_i];
                                                        return [4 /*yield*/, this.getAttachments(a)];
                                                    case 3:
                                                        ats = _b.sent();
                                                        this.attachments = this.attachments.concat(ats);
                                                        _b.label = 4;
                                                    case 4:
                                                        _i++;
                                                        return [3 /*break*/, 2];
                                                    case 5: return [4 /*yield*/, self.showMessage('Allegato correttamente cancellato.')];
                                                    case 6:
                                                        _b.sent();
                                                        return [3 /*break*/, 9];
                                                    case 7: return [4 /*yield*/, self.showMessage('Si è verificato un problema. Riprova!')];
                                                    case 8:
                                                        _b.sent();
                                                        _b.label = 9;
                                                    case 9: return [3 /*break*/, 12];
                                                    case 10:
                                                        e_2 = _b.sent();
                                                        return [4 /*yield*/, self.showMessage("Si \u00E8 verificato un problema " + e_2 + ". Riprova!")];
                                                    case 11:
                                                        _b.sent();
                                                        return [3 /*break*/, 12];
                                                    case 12: return [2 /*return*/];
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
    CasualtyFormPage.prototype.onDeleteAttachmentClick = function (attachment) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.confirmDelete(attachment)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CasualtyFormPage.prototype.save = function (c) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.isNew) {
                _this.cas.saveNew(c).subscribe(function (nc) {
                    resolve(nc);
                });
            }
            else {
                _this.cas.update(c).subscribe(function (uc) {
                    resolve(uc);
                });
            }
        });
    };
    CasualtyFormPage.prototype.generateCasualty = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var casualty = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.casualtyForm.value, { options: _this.selections });
            if (_this.isNew) {
                resolve(casualty);
            }
            else {
                Object.assign(_this.casualty, casualty);
                resolve(_this.casualty);
            }
        });
    };
    CasualtyFormPage.prototype.onSaveClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var c, savedCasualty, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        return [4 /*yield*/, this.generateCasualty()];
                    case 1:
                        c = _a.sent();
                        return [4 /*yield*/, this.save(c)];
                    case 2:
                        savedCasualty = _a.sent();
                        return [4 /*yield*/, this.showMessage('Salvataggio avvenuto correttamente')];
                    case 3:
                        _a.sent();
                        this.router.navigate(['casualty', savedCasualty.token]);
                        return [3 /*break*/, 6];
                    case 4:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [4 /*yield*/, this.showMessage("Qualcosa \u00E8 andato storto, riprovare.")];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], CasualtyFormPage.prototype, "casualtyForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CasualtyFormPage.prototype, "attachments", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CasualtyFormPage.prototype, "nomeCustomer", void 0);
    CasualtyFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-casualty-form',
            template: __webpack_require__(/*! ./casualty-form.page.html */ "./src/app/casualty-form/casualty-form.page.html"),
            styles: [__webpack_require__(/*! ./casualty-form.page.scss */ "./src/app/casualty-form/casualty-form.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _services_attachments_service__WEBPACK_IMPORTED_MODULE_7__["AttachmentsService"],
            _services_setup_casualties_service__WEBPACK_IMPORTED_MODULE_6__["SetupCasualtiesService"],
            src_app_services_casualty_service__WEBPACK_IMPORTED_MODULE_8__["CasualtyService"],
            src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_9__["CustomerService"]])
    ], CasualtyFormPage);
    return CasualtyFormPage;
}());



/***/ }),

/***/ "./src/app/modals/customer-modal/customer-modal.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/modals/customer-modal/customer-modal.module.ts ***!
  \****************************************************************/
/*! exports provided: CustomerModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModalPageModule", function() { return CustomerModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _customer_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-modal.page */ "./src/app/modals/customer-modal/customer-modal.page.ts");







var routes = [
    {
        path: '',
        component: _customer_modal_page__WEBPACK_IMPORTED_MODULE_6__["CustomerModalPage"]
    }
];
var CustomerModalPageModule = /** @class */ (function () {
    function CustomerModalPageModule() {
    }
    CustomerModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_customer_modal_page__WEBPACK_IMPORTED_MODULE_6__["CustomerModalPage"]]
        })
    ], CustomerModalPageModule);
    return CustomerModalPageModule;
}());



/***/ }),

/***/ "./src/app/modals/customer-modal/customer-modal.page.html":
/*!****************************************************************!*\
  !*** ./src/app/modals/customer-modal/customer-modal.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Scelta opzione</ion-title>\n    <ion-button slot=\"start\" (click)=\"DismissNoChoice()\">\n      <ion-icon slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n  \n<ion-content>\n  <div class=\"ion-padding\">\n    <div *ngIf=\"!customers || customers.length === 0\">\n      Nessuna opzione presente.\n    </div>\n    <div *ngIf=\"baseCustomers && baseCustomers.length > 0\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" size-sm>\n            <ion-item lines=\"none\">                \n              <ion-searchbar placeholder=\"Cerca\" (ionChange)=\"searchChange($event)\"></ion-searchbar>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <ion-grid *ngIf=\"customers && customers.length > 0\">\n      <ion-row>\n        <ion-col size=\"12\" size-sm>\n          <ion-virtual-scroll [items]=\"customers\">\n            <ion-item *virtualItem=\"let c\" lines=\"full\" approxItemHeight=\"57px\">\n              <ion-button color=\"primary\" (click)=\"onItemClick(c)\" slot=\"start\">\n                <ion-icon slot=\"icon-only\" name=\"checkmark-circle-outline\"></ion-icon>\n              </ion-button>\n              <ion-note slot=\"end\" class=\"ion-hide-sm-down\" *ngIf=\"c.address\">\n                {{c.address.city}} {{c.address.province}} {{c.address.nation}}\n              </ion-note>\n              <ion-label text-wrap>{{c.firstName}}, {{c.lastName}}</ion-label>\n            </ion-item>            \n          </ion-virtual-scroll>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/modals/customer-modal/customer-modal.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/modals/customer-modal/customer-modal.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9jdXN0b21lci1tb2RhbC9jdXN0b21lci1tb2RhbC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modals/customer-modal/customer-modal.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/modals/customer-modal/customer-modal.page.ts ***!
  \**************************************************************/
/*! exports provided: CustomerModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModalPage", function() { return CustomerModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var CustomerModalPage = /** @class */ (function () {
    function CustomerModalPage(mc) {
        this.mc = mc;
        this.baseCustomers = [];
        this.customers = [];
    }
    CustomerModalPage.prototype.ngOnInit = function () {
    };
    CustomerModalPage.prototype.ionViewWillEnter = function () {
        this.customers = this.baseCustomers;
    };
    CustomerModalPage.prototype.filterData = function (query) {
        var _this = this;
        var self = this;
        return new Promise(function (resolve, reject) {
            if (query && query !== '') {
                try {
                    var regex_1 = new RegExp("" + query, 'i');
                    resolve(self.baseCustomers.filter(function (obj) {
                        var srep = JSON.stringify(obj);
                        return regex_1.test(srep);
                    }));
                }
                catch (e) {
                    resolve(self.baseCustomers);
                }
            }
            else {
                resolve(_this.baseCustomers);
            }
        });
    };
    CustomerModalPage.prototype.searchChange = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.filterData(event.target.value)];
                    case 1:
                        _a.customers = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerModalPage.prototype.onItemClick = function (c) {
        this.mc.dismiss(c);
    };
    CustomerModalPage.prototype.DismissNoChoice = function () {
        this.mc.dismiss();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CustomerModalPage.prototype, "customers", void 0);
    CustomerModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-modal',
            template: __webpack_require__(/*! ./customer-modal.page.html */ "./src/app/modals/customer-modal/customer-modal.page.html"),
            styles: [__webpack_require__(/*! ./customer-modal.page.scss */ "./src/app/modals/customer-modal/customer-modal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], CustomerModalPage);
    return CustomerModalPage;
}());



/***/ }),

/***/ "./src/app/services/setup-casualties.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/setup-casualties.service.ts ***!
  \******************************************************/
/*! exports provided: SetupCasualtiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupCasualtiesService", function() { return SetupCasualtiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SetupCasualtiesService = /** @class */ (function () {
    function SetupCasualtiesService(hc) {
        this.hc = hc;
        this.baseUrl = '/api/setupcasualties/';
    }
    SetupCasualtiesService.prototype.getKinds = function () {
        var session = window.localStorage.getItem('_session');
        if (!session) {
            session = 'loggedout';
        }
        return this.hc.get(this.baseUrl + "kinds", {
            headers: {
                's-t': session
            }
        });
    };
    SetupCasualtiesService.prototype.getOptions = function (idKind) {
        var session = window.localStorage.getItem('_session');
        if (!session) {
            session = 'loggedout';
        }
        return this.hc.get(this.baseUrl + "options/" + idKind, {
            headers: {
                's-t': session
            }
        });
    };
    SetupCasualtiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SetupCasualtiesService);
    return SetupCasualtiesService;
}());



/***/ })

}]);
//# sourceMappingURL=casualty-form-casualty-form-module.js.map