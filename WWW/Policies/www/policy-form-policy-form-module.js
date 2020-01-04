(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["policy-form-policy-form-module"],{

/***/ "./src/app/converters/string-to-date.ts":
/*!**********************************************!*\
  !*** ./src/app/converters/string-to-date.ts ***!
  \**********************************************/
/*! exports provided: StringToDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringToDate", function() { return StringToDate; });
var StringToDate = /** @class */ (function () {
    function StringToDate() {
    }
    StringToDate.runShort = function (sdate) {
        if (!sdate) {
            return 'invalid param';
        }
        try {
            var date = new Date(sdate);
            return date;
        }
        catch (e) {
            return "Error " + e;
        }
    };
    return StringToDate;
}());



/***/ }),

/***/ "./src/app/policy-form/policy-form.module.ts":
/*!***************************************************!*\
  !*** ./src/app/policy-form/policy-form.module.ts ***!
  \***************************************************/
/*! exports provided: PolicyFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyFormPageModule", function() { return PolicyFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _policy_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./policy-form.page */ "./src/app/policy-form/policy-form.page.ts");
/* harmony import */ var _modals_organization_modal_organization_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modals/organization-modal/organization-modal.module */ "./src/app/modals/organization-modal/organization-modal.module.ts");
/* harmony import */ var _modals_organization_modal_organization_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modals/organization-modal/organization-modal.page */ "./src/app/modals/organization-modal/organization-modal.page.ts");
/* harmony import */ var src_app_modals_customer_modal_customer_modal_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modals/customer-modal/customer-modal.module */ "./src/app/modals/customer-modal/customer-modal.module.ts");
/* harmony import */ var src_app_modals_customer_modal_customer_modal_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modals/customer-modal/customer-modal.page */ "./src/app/modals/customer-modal/customer-modal.page.ts");
/* harmony import */ var src_app_attachments_attachments_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/attachments/attachments.module */ "./src/app/attachments/attachments.module.ts");












var routes = [
    {
        path: ':token',
        component: _policy_form_page__WEBPACK_IMPORTED_MODULE_6__["PolicyFormPage"]
    },
    {
        path: ':token/attachments',
        loadChildren: 'src/app/attachments/attachments.module#AttachmentsPageModule'
    }
];
var PolicyFormPageModule = /** @class */ (function () {
    function PolicyFormPageModule() {
    }
    PolicyFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _modals_organization_modal_organization_modal_module__WEBPACK_IMPORTED_MODULE_7__["OrganizationModalPageModule"],
                src_app_modals_customer_modal_customer_modal_module__WEBPACK_IMPORTED_MODULE_9__["CustomerModalPageModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_attachments_attachments_module__WEBPACK_IMPORTED_MODULE_11__["AttachmentsPageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            entryComponents: [_modals_organization_modal_organization_modal_page__WEBPACK_IMPORTED_MODULE_8__["OrganizationModalPage"], src_app_modals_customer_modal_customer_modal_page__WEBPACK_IMPORTED_MODULE_10__["CustomerModalPage"]],
            declarations: [_policy_form_page__WEBPACK_IMPORTED_MODULE_6__["PolicyFormPage"]]
        })
    ], PolicyFormPageModule);
    return PolicyFormPageModule;
}());



/***/ }),

/***/ "./src/app/policy-form/policy-form.page.html":
/*!***************************************************!*\
  !*** ./src/app/policy-form/policy-form.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button icon-only menuToggle=\"start\">\n        <ion-icon name=\"menu\"></ion-icon>\n      </ion-menu-button>          \n    </ion-buttons>\n    <ion-title>\n      Pratiche Web\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <form [formGroup]=\"policyForm\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p *ngIf=\"isNew\"><a (click)=\"onCancelClick()\" [routerLink]=\"\">Lista Polizze</a> | Nuova polizza</p>\n            <p *ngIf=\"! isNew\"><a (click)=\"onCancelClick()\" [routerLink]=\"\">Lista Polizze</a> | Polizza</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item lines=\"none\">\n              <ion-label>\n                <h1 *ngIf=\"isNew\">Nuova polizza</h1>\n                <h1 *ngIf=\"! isNew\">Polizza</h1>        \n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-sm>\n            <ion-item>\n              <ion-label>Numero:</ion-label>\n              <ion-input placeholder=\"Numero polizza\" formControlName=\"number\"></ion-input> \n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-sm>\n            <ion-item>\n              <ion-label>Rateazione:</ion-label>\n              <ion-select placeholder=\"Rateazione\" formControlName=\"rateazione\" (ionChange)=\"onEffettoOrRateazioneChange()\">\n                <ion-select-option value=\"annuale\">Annuale</ion-select-option>\n                <ion-select-option value=\"semestrale\">Semestrale</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>      \n        <ion-row>\n          <ion-col size=\"12\" size-sm>\n            <ion-item>\n              <ion-label>Data effetto:</ion-label>\n              <ion-datetime\n                placeholder=\"Data effetto\"\n                (ionChange)=\"onEffettoOrRateazioneChange()\"\n                display-format=\"DD/MM/YYYY\" \n                picker-format=\"DD/MMMM/YYYY\" \n                formControlName=\"creationDate\"\n                month-names=\"gennaio, febbraio, marzo, aprile, maggio, giugno, luglio, agosto, settembre, ottobre, novembre, dicembre\"\n                cancel-text=\"Annulla\"\n                done-text=\"Ok\">\n              </ion-datetime>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-sm>\n            <ion-item>\n              <ion-label>\n                Scadenze: <br/>\n                <span *ngFor=\"let s of scadenze\">\n                  {{s}}<br/>\n                </span>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-sm>\n            <ion-item>\n              <ion-label>Compagnia:</ion-label>\n              {{nomeCompagnia}}\n              <ion-button color=\"primary\" slot=\"start\" (click)=\"onCompagniaChooseClick()\">\n                <ion-icon slot=\"icon-only\" name=\"compass\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"danger\" slot=\"end\" (click)=\"resetCompagniaClick()\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-sm>\n            <ion-item>\n              <ion-label>Cliente:</ion-label>\n              {{nomeCustomer}}\n              <ion-button color=\"primary\" slot=\"start\" (click)=\"onCustomerChooseClick()\">\n                <ion-icon slot=\"icon-only\" name=\"compass\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"danger\" slot=\"end\" (click)=\"resetCustomerClick()\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-sm>\n            <ion-item>\n              <ion-label>Brooker:</ion-label>\n              {{nomeBrooker}}\n              <ion-button color=\"primary\" slot=\"start\" (click)=\"onBrookerChooseClick()\">\n                <ion-icon slot=\"icon-only\" name=\"compass\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"danger\" slot=\"end\" (click)=\"resetBrookerClick()\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-sm>\n            <ion-item>\n              <ion-label>Segnalatore:</ion-label>\n              {{nomeSegnalatore}}\n              <ion-button color=\"primary\" slot=\"start\" (click)=\"onSegnalatoreChooseClick()\">\n                <ion-icon slot=\"icon-only\" name=\"compass\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"danger\" slot=\"end\" (click)=\"resetSegnalatoreClick()\">\n                  <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                </ion-button>\n              </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let k of setupKinds\">\n          <ion-col>\n            <ion-item>\n              <ion-button color=\"primary\" slot=\"start\" (click)=\"onPickerClick(k)\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-dropdown\"></ion-icon>\n              </ion-button>\n              <ion-label>{{k.name}}:</ion-label>\n              <ion-input placeholder=\"--\" [formControlName]=\"k._id\" readonly=\"true\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-sm>\n            <ion-item>\n              <ion-label>Primo allarme:</ion-label>\n              <ion-datetime\n                placeholder=\"Data primo allarme\"\n                display-format=\"DD/MM/YYYY\" \n                picker-format=\"DD/MMMM/YYYY\" \n                formControlName=\"alert1\"\n                month-names=\"gennaio, febbraio, marzo, aprile, maggio, giugno, luglio, agosto, settembre, ottobre, novembre, dicembre\"\n                cancel-text=\"Annulla\"\n                done-text=\"Ok\">\n              </ion-datetime>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-sm>\n            <ion-item>\n              <ion-label>Secondo allarme:</ion-label>\n              <ion-datetime\n                placeholder=\"Data secondo allarme\"\n                display-format=\"DD/MM/YYYY\" \n                picker-format=\"DD/MMMM/YYYY\" \n                formControlName=\"alert2\"\n                month-names=\"gennaio, febbraio, marzo, aprile, maggio, giugno, luglio, agosto, settembre, ottobre, novembre, dicembre\"\n                cancel-text=\"Annulla\"\n                done-text=\"Ok\">\n              </ion-datetime>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-sm>\n            <ion-item>\n              <ion-label>Stato:</ion-label>\n              <ion-select placeholder=\"Stato polizza\" formControlName=\"status\">\n                <ion-select-option value=\"attiva\">Attiva</ion-select-option>\n                <ion-select-option value=\"non attiva\">Non Attiva</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-sm>\n            <ion-item>\n              <ion-label>Note:</ion-label>\n              <ion-textarea placeholder=\"Note\" formControlName=\"note\" rows=\"10\"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>      \n        <ion-row *ngIf=\"token && token !== '' && token !=='new'\" class=\"ion-align-items-center\">\n          <ion-col size=\"auto\">\n              <h1>Allegati</h1>\n          </ion-col>\n          <ion-col>\n              <ion-button color=\"primary\" (click)=\"onAddAttachmentClick()\">\n                <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n              </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"token && token !== ''\">\n          <ion-col>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let a of attachments\">\n          <ion-col>\n            <ion-item>\n              <ion-label text-wrap>\n                <ion-text color=\"tertiary\">{{a.name}}</ion-text>\n              </ion-label>\n              <ion-note slot=\"end\" class=\"ion-hide-sm-down\">\n                {{a.tags}} {{a.kind}}\n              </ion-note>\n              <ion-button color=\"tertiary\" slot=\"start\" href=\"http://localhost:8080/api/attachments/{{a.kind}}/{{token}}/{{a._id}}/attachment\">\n                <ion-icon slot=\"icon-only\" name=\"cloud-download\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"danger\" slot=\"end\" (click)=\"onDeleteAttachmentClick(a)\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"attachments && attachments.length > 0\">\n          <ion-col>\n            <ion-button color=\"primary\" (click)=\"onAddAttachmentClick()\">\n              <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-sm>\n            <div>\n              <ion-button color=\"primary\" [disabled]=\"!policyForm.valid\" (click)=\"onSaveClick()\">\n                <ion-icon slot=\"icon-only\" name=\"save\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"tertiary\" (click)=\"onCancelClick()\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n              </ion-button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>    \n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/policy-form/policy-form.page.scss":
/*!***************************************************!*\
  !*** ./src/app/policy-form/policy-form.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvbGljeS1mb3JtL3BvbGljeS1mb3JtLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/policy-form/policy-form.page.ts":
/*!*************************************************!*\
  !*** ./src/app/policy-form/policy-form.page.ts ***!
  \*************************************************/
/*! exports provided: PolicyFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyFormPage", function() { return PolicyFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_organization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/organization.service */ "./src/app/services/organization.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modals_organization_modal_organization_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modals/organization-modal/organization-modal.page */ "./src/app/modals/organization-modal/organization-modal.page.ts");
/* harmony import */ var _services_setup_policies_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/setup-policies.service */ "./src/app/services/setup-policies.service.ts");
/* harmony import */ var _services_attachments_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/attachments.service */ "./src/app/services/attachments.service.ts");
/* harmony import */ var src_app_models_service_status_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/service-status.enum */ "./src/app/models/service-status.enum.ts");
/* harmony import */ var _services_policy_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/policy.service */ "./src/app/services/policy.service.ts");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var src_app_modals_customer_modal_customer_modal_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/modals/customer-modal/customer-modal.page */ "./src/app/modals/customer-modal/customer-modal.page.ts");
/* harmony import */ var src_app_converters_string_to_date__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/converters/string-to-date */ "./src/app/converters/string-to-date.ts");















var PolicyFormPage = /** @class */ (function () {
    function PolicyFormPage(fb, route, router, os, as, mc, sps, pc, ac, tc, ps, cs) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.os = os;
        this.as = as;
        this.mc = mc;
        this.sps = sps;
        this.pc = pc;
        this.ac = ac;
        this.tc = tc;
        this.ps = ps;
        this.cs = cs;
        this.isNew = true;
        this.customers = [];
        this.companies = [];
        this.brookers = [];
        this.segnalatori = [];
        this.setupKinds = [];
        this.nomeCustomer = '';
        this.nomeCompagnia = '';
        this.nomeBrooker = '';
        this.nomeSegnalatore = '';
        this.selections = {};
        this.attachmentKinds = [
            'polizza-proposta',
            'polizza-polizza',
            'polizza-pagamento',
            'polizza-richiesta',
            'polizza-scarico-fiscale'
        ];
        this.scadenze = [];
        this.policyForm = fb.group({
            number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            rateazione: [''],
            creationDate: [''],
            insuranceCompanyId: [''],
            segnalatoreId: [''],
            brookerId: [''],
            proposalId: [''],
            customerId: [''],
            premio: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]*\,?[0-9]{0,2}$/)],
            ip: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]*\,?[0-9]{0,2}$/)],
            rimborso: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]*\,?[0-9]{0,2}$/)],
            alert1: [''],
            alert2: [''],
            status: ['Non attiva', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            note: ['']
        });
    }
    PolicyFormPage.prototype.getPolicyToken = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.param$ = self.route.params.subscribe(function (params) {
                resolve(params.token);
            });
        });
    };
    PolicyFormPage.prototype.getSetupKinds = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.sps.getKinds().subscribe({
                next: function (ris) {
                    resolve(ris);
                },
                error: function (err) {
                    reject(err);
                }
            });
        });
    };
    PolicyFormPage.prototype.getSetupOptions = function (idKind) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.sps.getOptions(idKind).subscribe({
                next: function (ris) {
                    resolve(ris);
                },
                error: function (err) {
                    reject(err);
                }
            });
        });
    };
    PolicyFormPage.prototype.getAttachments = function (kind) {
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
    PolicyFormPage.prototype.initOptions = function () {
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
                                        this.policyForm.addControl(k._id, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''));
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
    PolicyFormPage.prototype.getOrganization = function (kind) {
        var self = this;
        return new Promise(function (resolve, reject) {
            try {
                self.os.getOrganizationList(kind).subscribe({ next: function (ris) {
                        resolve(ris);
                    }, error: function (err) {
                        reject(err);
                    } });
            }
            catch (e) {
                reject(e);
            }
        });
    };
    PolicyFormPage.prototype.getCustomers = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.cs.asyncGetCustomers().subscribe(function (customers) {
                resolve(customers);
            });
        });
    };
    PolicyFormPage.prototype.getScadenze = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var sdate = _this.policyForm.get('creationDate').value;
            var rateazione = _this.policyForm.get('rateazione').value;
            var date = src_app_converters_string_to_date__WEBPACK_IMPORTED_MODULE_13__["StringToDate"].runShort(sdate);
            if (date instanceof Date) {
                if (rateazione === 'annuale') {
                    date.setFullYear(date.getFullYear() + 1);
                    resolve([date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()]);
                }
                else if (rateazione === 'semestrale') {
                    date.setMonth(date.getMonth() + 6);
                    var str1 = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
                    date.setMonth(date.getMonth() + 6);
                    var str2 = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
                    resolve([
                        str1,
                        str2
                    ]);
                }
                else {
                    resolve([]);
                }
            }
            else {
                resolve([]);
            }
        });
    };
    PolicyFormPage.prototype.onPickerClick = function (kind) {
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
                                            _this.policyForm.get(kind._id).setValue(selected[kind.name].text);
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
                                            _this.policyForm.get(kind._id).setValue('');
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
    PolicyFormPage.prototype.getCompanies = function () {
        return this.getOrganization('Compagnie');
    };
    PolicyFormPage.prototype.getBrookers = function () {
        return this.getOrganization('Broker');
    };
    PolicyFormPage.prototype.getSegnalatori = function () {
        return this.getOrganization('Segnalatori');
    };
    PolicyFormPage.prototype.getPolicy = function (token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.ps.single(token).subscribe(function (policy) {
                resolve(policy);
            });
        });
    };
    PolicyFormPage.prototype.initCompany = function (p) {
        if (p.insuranceCompanyId) {
            var org = this.companies.reduce(function (a, b) {
                if (b._id === p.insuranceCompanyId) {
                    return b;
                }
                else {
                    return a;
                }
            }, null);
            if (org) {
                this.nomeCompagnia = org.name;
            }
        }
    };
    PolicyFormPage.prototype.initBrooker = function (p) {
        if (p.brookerId) {
            var org = this.brookers.reduce(function (a, b) {
                if (b._id === p.brookerId) {
                    return b;
                }
                else {
                    return a;
                }
            }, null);
            if (org) {
                this.nomeBrooker = org.name;
            }
        }
    };
    PolicyFormPage.prototype.initSegnalatore = function (p) {
        if (p.segnalatoreId) {
            var org = this.segnalatori.reduce(function (a, b) {
                if (b._id === p.segnalatoreId) {
                    return b;
                }
                else {
                    return a;
                }
            }, null);
            if (org) {
                this.nomeSegnalatore = org.name;
            }
        }
    };
    PolicyFormPage.prototype.initCustomer = function (p) {
        if (p.customerId) {
            var c = this.customers.reduce(function (a, b) {
                if (b.token === p.customerId) {
                    return b;
                }
                else {
                    return a;
                }
            }, null);
            if (c) {
                this.nomeCustomer = c.firstName + " " + c.lastName;
            }
        }
    };
    PolicyFormPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, kind, ats, _k, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_l) {
                switch (_l.label) {
                    case 0:
                        _l.trys.push([0, 19, , 20]);
                        this.options = new Map();
                        _a = this;
                        return [4 /*yield*/, this.getPolicyToken()];
                    case 1:
                        _a.token = _l.sent();
                        this.isNew = this.token === 'new';
                        if (!!this.isNew) return [3 /*break*/, 7];
                        _b = this;
                        return [4 /*yield*/, this.getPolicy(this.token)];
                    case 2:
                        _b.policy = _l.sent();
                        _c = this;
                        return [4 /*yield*/, this.getSetupKinds()];
                    case 3:
                        _c.setupKinds = _l.sent();
                        this.selections = this.policy.options;
                        if (!(this.setupKinds && this.setupKinds.length > 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.initOptions()];
                    case 4:
                        _l.sent();
                        _l.label = 5;
                    case 5:
                        this.policyForm.patchValue(this.policy);
                        _d = this;
                        return [4 /*yield*/, this.getScadenze()];
                    case 6:
                        _d.scadenze = _l.sent();
                        return [3 /*break*/, 10];
                    case 7:
                        _e = this;
                        return [4 /*yield*/, this.getSetupKinds()];
                    case 8:
                        _e.setupKinds = _l.sent();
                        if (!(this.setupKinds && this.setupKinds.length > 0)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.initOptions()];
                    case 9:
                        _l.sent();
                        _l.label = 10;
                    case 10:
                        _f = this;
                        return [4 /*yield*/, this.getCompanies()];
                    case 11:
                        _f.companies = _l.sent();
                        _g = this;
                        return [4 /*yield*/, this.getBrookers()];
                    case 12:
                        _g.brookers = _l.sent();
                        _h = this;
                        return [4 /*yield*/, this.getSegnalatori()];
                    case 13:
                        _h.segnalatori = _l.sent();
                        this.attachments = [];
                        _i = 0, _j = this.attachmentKinds;
                        _l.label = 14;
                    case 14:
                        if (!(_i < _j.length)) return [3 /*break*/, 17];
                        kind = _j[_i];
                        return [4 /*yield*/, this.getAttachments(kind)];
                    case 15:
                        ats = _l.sent();
                        this.attachments = this.attachments.concat(ats);
                        _l.label = 16;
                    case 16:
                        _i++;
                        return [3 /*break*/, 14];
                    case 17:
                        _k = this;
                        return [4 /*yield*/, this.getCustomers()];
                    case 18:
                        _k.customers = _l.sent();
                        if (!this.isNew) {
                            this.initBrooker(this.policy);
                            this.initCompany(this.policy);
                            this.initSegnalatore(this.policy);
                            this.initCustomer(this.policy);
                        }
                        return [3 /*break*/, 20];
                    case 19:
                        e_1 = _l.sent();
                        console.error(e_1);
                        this.token = '';
                        this.isNew = true;
                        return [3 /*break*/, 20];
                    case 20: return [2 /*return*/];
                }
            });
        });
    };
    PolicyFormPage.prototype.ionViewWillExit = function () {
        if (this.param$) {
            this.param$.unsubscribe();
        }
    };
    PolicyFormPage.prototype.ngOnInit = function () {
    };
    PolicyFormPage.prototype.onCancelClick = function () {
        this.router.navigate(['home']);
    };
    PolicyFormPage.prototype.resetCustomerClick = function () {
        this.nomeCustomer = '';
        this.policyForm.get('customerId').setValue('');
    };
    PolicyFormPage.prototype.resetCompagniaClick = function () {
        this.nomeCompagnia = '';
        this.policyForm.get('insuranceCompanyId').setValue('');
    };
    PolicyFormPage.prototype.resetBrookerClick = function () {
        this.nomeBrooker = '';
        this.policyForm.get('brookerId').setValue('');
    };
    PolicyFormPage.prototype.resetSegnalatoreClick = function () {
        this.nomeSegnalatore = '';
        this.policyForm.get('segnalatoreId').setValue('');
    };
    PolicyFormPage.prototype.onCustomerChooseClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, this.mc.create({
                                component: src_app_modals_customer_modal_customer_modal_page__WEBPACK_IMPORTED_MODULE_12__["CustomerModalPage"],
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
                            this.policyForm.get('customerId').setValue(data.token);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PolicyFormPage.prototype.onCompagniaChooseClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, this.mc.create({
                                component: _modals_organization_modal_organization_modal_page__WEBPACK_IMPORTED_MODULE_6__["OrganizationModalPage"],
                                componentProps: {
                                    BaseOrganizations: self.companies
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
                            this.nomeCompagnia = data.name;
                            this.policyForm.get('insuranceCompanyId').setValue(data._id);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PolicyFormPage.prototype.onBrookerChooseClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, this.mc.create({
                                component: _modals_organization_modal_organization_modal_page__WEBPACK_IMPORTED_MODULE_6__["OrganizationModalPage"],
                                componentProps: {
                                    BaseOrganizations: self.brookers
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
                            this.nomeBrooker = data.name;
                            this.policyForm.get('brookerId').setValue(data._id);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PolicyFormPage.prototype.onSegnalatoreChooseClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, this.mc.create({
                                component: _modals_organization_modal_organization_modal_page__WEBPACK_IMPORTED_MODULE_6__["OrganizationModalPage"],
                                componentProps: {
                                    BaseOrganizations: self.segnalatori
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
                            this.nomeSegnalatore = data.name;
                            this.policyForm.get('segnalatoreId').setValue(data._id);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PolicyFormPage.prototype.onAddAttachmentClick = function () {
        this.router.navigate(['policy', this.token, 'attachments'], { queryParams: { kind: 'polizza' } });
    };
    PolicyFormPage.prototype.showMessage = function (message) {
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
    PolicyFormPage.prototype.deleteAttachment = function (attachment) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.as.asyncDeleteAttachment(attachment).subscribe({
                next: function (ris) {
                    resolve(ris);
                },
                error: function (err) {
                    resolve(src_app_models_service_status_enum__WEBPACK_IMPORTED_MODULE_9__["ServiceStatus"].FAILED);
                }
            });
        });
    };
    PolicyFormPage.prototype.confirmDelete = function (attachment) {
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
                                                        if (!(ss === src_app_models_service_status_enum__WEBPACK_IMPORTED_MODULE_9__["ServiceStatus"].OK)) return [3 /*break*/, 7];
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
    PolicyFormPage.prototype.onDeleteAttachmentClick = function (attachment) {
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
    PolicyFormPage.prototype.save = function (p) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.isNew) {
                _this.ps.saveNew(p).subscribe(function (np) {
                    resolve(np);
                });
            }
            else {
                _this.ps.update(p).subscribe(function (up) {
                    resolve(up);
                });
            }
        });
    };
    PolicyFormPage.prototype.generatePolicy = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var policy = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ kind: 'policy' }, _this.policyForm.value, { options: _this.selections });
            if (_this.isNew) {
                resolve(policy);
            }
            else {
                Object.assign(_this.policy, policy);
                resolve(_this.policy);
            }
        });
    };
    PolicyFormPage.prototype.onSaveClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var p, savedPolicy, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        return [4 /*yield*/, this.generatePolicy()];
                    case 1:
                        p = _a.sent();
                        return [4 /*yield*/, this.save(p)];
                    case 2:
                        savedPolicy = _a.sent();
                        return [4 /*yield*/, this.showMessage('Salvataggio avvenuto correttamente')];
                    case 3:
                        _a.sent();
                        this.router.navigate(['policy', savedPolicy.token]);
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
    PolicyFormPage.prototype.onEffettoOrRateazioneChange = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, e_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.getScadenze()];
                    case 1:
                        _a.scadenze = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _b.sent();
                        console.log(e_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], PolicyFormPage.prototype, "policyForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PolicyFormPage.prototype, "nomeCustomer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PolicyFormPage.prototype, "nomeCompagnia", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PolicyFormPage.prototype, "nomeBrooker", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PolicyFormPage.prototype, "nomeSegnalatore", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PolicyFormPage.prototype, "attachments", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PolicyFormPage.prototype, "scadenze", void 0);
    PolicyFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-policy-form',
            template: __webpack_require__(/*! ./policy-form.page.html */ "./src/app/policy-form/policy-form.page.html"),
            styles: [__webpack_require__(/*! ./policy-form.page.scss */ "./src/app/policy-form/policy-form.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_organization_service__WEBPACK_IMPORTED_MODULE_4__["OrganizationService"],
            _services_attachments_service__WEBPACK_IMPORTED_MODULE_8__["AttachmentsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _services_setup_policies_service__WEBPACK_IMPORTED_MODULE_7__["SetupPoliciesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PickerController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _services_policy_service__WEBPACK_IMPORTED_MODULE_10__["PolicyService"],
            src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_11__["CustomerService"]])
    ], PolicyFormPage);
    return PolicyFormPage;
}());



/***/ })

}]);
//# sourceMappingURL=policy-form-policy-form-module.js.map