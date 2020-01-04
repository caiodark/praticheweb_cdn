(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["proposal-form-proposal-form-module"],{

/***/ "./src/app/proposal-form/proposal-form.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/proposal-form/proposal-form.module.ts ***!
  \*******************************************************/
/*! exports provided: ProposalFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalFormPageModule", function() { return ProposalFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _proposal_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./proposal-form.page */ "./src/app/proposal-form/proposal-form.page.ts");
/* harmony import */ var _modals_organization_modal_organization_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modals/organization-modal/organization-modal.module */ "./src/app/modals/organization-modal/organization-modal.module.ts");
/* harmony import */ var _modals_organization_modal_organization_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modals/organization-modal/organization-modal.page */ "./src/app/modals/organization-modal/organization-modal.page.ts");
/* harmony import */ var src_app_modals_customer_modal_customer_modal_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modals/customer-modal/customer-modal.module */ "./src/app/modals/customer-modal/customer-modal.module.ts");
/* harmony import */ var src_app_modals_customer_modal_customer_modal_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modals/customer-modal/customer-modal.page */ "./src/app/modals/customer-modal/customer-modal.page.ts");
/* harmony import */ var src_app_attachments_attachments_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/attachments/attachments.module */ "./src/app/attachments/attachments.module.ts");












var routes = [
    {
        path: ':token',
        component: _proposal_form_page__WEBPACK_IMPORTED_MODULE_6__["ProposalFormPage"]
    },
    {
        path: ':token/attachments',
        loadChildren: 'src/app/attachments/attachments.module#AttachmentsPageModule'
    }
];
var ProposalFormPageModule = /** @class */ (function () {
    function ProposalFormPageModule() {
    }
    ProposalFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
            declarations: [_proposal_form_page__WEBPACK_IMPORTED_MODULE_6__["ProposalFormPage"]]
        })
    ], ProposalFormPageModule);
    return ProposalFormPageModule;
}());



/***/ }),

/***/ "./src/app/proposal-form/proposal-form.page.html":
/*!*******************************************************!*\
  !*** ./src/app/proposal-form/proposal-form.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button icon-only menuToggle=\"start\">\n        <ion-icon name=\"menu\"></ion-icon>\n      </ion-menu-button>          \n    </ion-buttons>\n    <ion-title>\n      Pratiche Web\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <form [formGroup]=\"policyForm\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p *ngIf=\"isNew\"><a (click)=\"onCancelClick()\" [routerLink]=\"\">Lista Proposte</a> | Nuova proposta</p>\n            <p *ngIf=\"! isNew\"><a (click)=\"onCancelClick()\" [routerLink]=\"\">Lista Proposte</a> | Proposta</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item lines=\"none\">\n              <ion-label>\n                <h1 *ngIf=\"isNew\">Nuova proposta</h1>\n                <h1 *ngIf=\"! isNew\">Proposta</h1>        \n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-sm>\n            <ion-item>\n              <ion-label>Compagnia:</ion-label>\n              {{nomeCompagnia}}\n              <ion-button color=\"primary\" slot=\"start\" (click)=\"onCompagniaChooseClick()\">\n                <ion-icon slot=\"icon-only\" name=\"compass\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"danger\" slot=\"end\" (click)=\"resetCompagniaClick()\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-sm>\n            <ion-item>\n              <ion-label>Cliente:</ion-label>\n              {{nomeCustomer}}\n              <ion-button color=\"primary\" slot=\"start\" (click)=\"onCustomerChooseClick()\">\n                <ion-icon slot=\"icon-only\" name=\"compass\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"danger\" slot=\"end\" (click)=\"resetCustomerClick()\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-sm>\n            <ion-item>\n              <ion-label>Brooker:</ion-label>\n              {{nomeBrooker}}\n              <ion-button color=\"primary\" slot=\"start\" (click)=\"onBrookerChooseClick()\">\n                <ion-icon slot=\"icon-only\" name=\"compass\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"danger\" slot=\"end\" (click)=\"resetBrookerClick()\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-sm>\n            <ion-item>\n              <ion-label>Segnalatore:</ion-label>\n              {{nomeSegnalatore}}\n              <ion-button color=\"primary\" slot=\"start\" (click)=\"onSegnalatoreChooseClick()\">\n                <ion-icon slot=\"icon-only\" name=\"compass\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"danger\" slot=\"end\" (click)=\"resetSegnalatoreClick()\">\n                  <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                </ion-button>\n              </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let k of setupKinds\">\n          <ion-col>\n            <ion-item>\n              <ion-button color=\"primary\" slot=\"start\" (click)=\"onPickerClick(k)\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-dropdown\"></ion-icon>\n              </ion-button>\n              <ion-label>{{k.name}}:</ion-label>\n              <ion-input placeholder=\"--\" [formControlName]=\"k._id\" readonly=\"true\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-sm>\n            <ion-item>\n              <ion-label>Stato:</ion-label>\n              <ion-select placeholder=\"Stato proposta\" formControlName=\"status\">\n                <ion-select-option value=\"aperta\">Aperta</ion-select-option>\n                <ion-select-option value=\"chiusa\">Chiusa</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-sm>\n            <ion-item>\n              <ion-label>Note:</ion-label>\n              <ion-textarea placeholder=\"Note\" formControlName=\"note\" rows=\"10\"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>      \n        <ion-row *ngIf=\"token && token !== '' && token !=='new'\" class=\"ion-align-items-center\">\n          <ion-col size=\"auto\">\n              <h1>Allegati</h1>\n          </ion-col>\n          <ion-col>\n              <ion-button color=\"primary\" (click)=\"onAddAttachmentClick()\">\n                <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n              </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"token && token !== '' && token !=='new'\">\n          <ion-col>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let a of attachments\">\n          <ion-col>\n            <ion-item>\n              <ion-label text-wrap>\n                <ion-text color=\"tertiary\">{{a.name}}</ion-text>\n              </ion-label>\n              <ion-note slot=\"end\" class=\"ion-hide-sm-down\">\n                {{a.tags}} {{a.kind}}\n              </ion-note>\n              <ion-button color=\"tertiary\" slot=\"start\" href=\"http://localhost:8080/api/attachments/{{a.kind}}/{{token}}/{{a._id}}/attachment\">\n                <ion-icon slot=\"icon-only\" name=\"cloud-download\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"danger\" slot=\"end\" (click)=\"onDeleteAttachmentClick(a)\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"attachments && attachments.length > 0\">\n          <ion-col>\n            <ion-button color=\"primary\" (click)=\"onAddAttachmentClick()\">\n              <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-sm>\n            <div>\n              <ion-button color=\"primary\" [disabled]=\"!policyForm.valid\" (click)=\"onSaveClick()\">\n                <ion-icon slot=\"icon-only\" name=\"save\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"primary\" [disabled]=\"!policyForm.valid\" (click)=\"onCopyClick()\" *ngIf=\"! isNew\">\n                <ion-icon slot=\"icon-only\" name=\"copy\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"tertiary\" (click)=\"onCancelClick()\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n              </ion-button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>    \n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/proposal-form/proposal-form.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/proposal-form/proposal-form.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3Bvc2FsLWZvcm0vcHJvcG9zYWwtZm9ybS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/proposal-form/proposal-form.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/proposal-form/proposal-form.page.ts ***!
  \*****************************************************/
/*! exports provided: ProposalFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalFormPage", function() { return ProposalFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_organization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/organization.service */ "./src/app/services/organization.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modals_organization_modal_organization_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modals/organization-modal/organization-modal.page */ "./src/app/modals/organization-modal/organization-modal.page.ts");
/* harmony import */ var _services_setup_policies_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/setup-policies.service */ "./src/app/services/setup-policies.service.ts");
/* harmony import */ var _services_attachments_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/attachments.service */ "./src/app/services/attachments.service.ts");
/* harmony import */ var src_app_models_service_status_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/service-status.enum */ "./src/app/models/service-status.enum.ts");
/* harmony import */ var _services_policy_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/policy.service */ "./src/app/services/policy.service.ts");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var src_app_modals_customer_modal_customer_modal_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/modals/customer-modal/customer-modal.page */ "./src/app/modals/customer-modal/customer-modal.page.ts");















var ProposalFormPage = /** @class */ (function () {
    function ProposalFormPage(fb, route, router, os, as, mc, sps, pc, ac, tc, ps, cs) {
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
            'proposta-proposta',
            'proposta-pagamento',
            'proposta-richiesta'
        ];
        this.policyForm = fb.group({
            insuranceCompanyId: [''],
            segnalatoreId: [''],
            brookerId: [''],
            proposalId: [''],
            customerId: [''],
            premio: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]*\,?[0-9]{0,2}$/)],
            ip: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]*\,?[0-9]{0,2}$/)],
            rimborso: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]*\,?[0-9]{0,2}$/)],
            status: ['aperta', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            note: ['']
        });
    }
    ProposalFormPage.prototype.getPolicyToken = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.param$ = self.route.params.subscribe(function (params) {
                resolve(params.token);
            });
        });
    };
    ProposalFormPage.prototype.getSetupKinds = function () {
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
    ProposalFormPage.prototype.getSetupOptions = function (idKind) {
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
    ProposalFormPage.prototype.getAttachments = function (kind) {
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
    ProposalFormPage.prototype.initOptions = function () {
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
    ProposalFormPage.prototype.getOrganization = function (kind) {
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
    ProposalFormPage.prototype.getCustomers = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.cs.asyncGetCustomers().subscribe(function (customers) {
                resolve(customers);
            });
        });
    };
    ProposalFormPage.prototype.onPickerClick = function (kind) {
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
    ProposalFormPage.prototype.getCompanies = function () {
        return this.getOrganization('Compagnie');
    };
    ProposalFormPage.prototype.getBrookers = function () {
        return this.getOrganization('Broker');
    };
    ProposalFormPage.prototype.getSegnalatori = function () {
        return this.getOrganization('Segnalatori');
    };
    ProposalFormPage.prototype.getPolicy = function (token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.ps.single(token).subscribe(function (policy) {
                resolve(policy);
            });
        });
    };
    ProposalFormPage.prototype.initCompany = function (p) {
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
    ProposalFormPage.prototype.initBrooker = function (p) {
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
    ProposalFormPage.prototype.initSegnalatore = function (p) {
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
    ProposalFormPage.prototype.initCustomer = function (p) {
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
    ProposalFormPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f, _g, _i, _h, kind, ats, _j, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_k) {
                switch (_k.label) {
                    case 0:
                        _k.trys.push([0, 18, , 19]);
                        this.options = new Map();
                        _a = this;
                        return [4 /*yield*/, this.getPolicyToken()];
                    case 1:
                        _a.token = _k.sent();
                        this.isNew = this.token === 'new';
                        if (!!this.isNew) return [3 /*break*/, 6];
                        _b = this;
                        return [4 /*yield*/, this.getPolicy(this.token)];
                    case 2:
                        _b.policy = _k.sent();
                        _c = this;
                        return [4 /*yield*/, this.getSetupKinds()];
                    case 3:
                        _c.setupKinds = _k.sent();
                        this.selections = this.policy.options;
                        if (!(this.setupKinds && this.setupKinds.length > 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.initOptions()];
                    case 4:
                        _k.sent();
                        _k.label = 5;
                    case 5:
                        this.policyForm.patchValue(this.policy);
                        return [3 /*break*/, 9];
                    case 6:
                        _d = this;
                        return [4 /*yield*/, this.getSetupKinds()];
                    case 7:
                        _d.setupKinds = _k.sent();
                        if (!(this.setupKinds && this.setupKinds.length > 0)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.initOptions()];
                    case 8:
                        _k.sent();
                        _k.label = 9;
                    case 9:
                        _e = this;
                        return [4 /*yield*/, this.getCompanies()];
                    case 10:
                        _e.companies = _k.sent();
                        _f = this;
                        return [4 /*yield*/, this.getBrookers()];
                    case 11:
                        _f.brookers = _k.sent();
                        _g = this;
                        return [4 /*yield*/, this.getSegnalatori()];
                    case 12:
                        _g.segnalatori = _k.sent();
                        this.attachments = [];
                        _i = 0, _h = this.attachmentKinds;
                        _k.label = 13;
                    case 13:
                        if (!(_i < _h.length)) return [3 /*break*/, 16];
                        kind = _h[_i];
                        return [4 /*yield*/, this.getAttachments(kind)];
                    case 14:
                        ats = _k.sent();
                        this.attachments = this.attachments.concat(ats);
                        _k.label = 15;
                    case 15:
                        _i++;
                        return [3 /*break*/, 13];
                    case 16:
                        _j = this;
                        return [4 /*yield*/, this.getCustomers()];
                    case 17:
                        _j.customers = _k.sent();
                        if (!this.isNew) {
                            this.initBrooker(this.policy);
                            this.initCompany(this.policy);
                            this.initSegnalatore(this.policy);
                            this.initCustomer(this.policy);
                        }
                        return [3 /*break*/, 19];
                    case 18:
                        e_1 = _k.sent();
                        console.error(e_1);
                        this.token = '';
                        this.isNew = true;
                        return [3 /*break*/, 19];
                    case 19: return [2 /*return*/];
                }
            });
        });
    };
    ProposalFormPage.prototype.ionViewWillExit = function () {
        if (this.param$) {
            this.param$.unsubscribe();
        }
    };
    ProposalFormPage.prototype.ngOnInit = function () {
    };
    ProposalFormPage.prototype.onCancelClick = function () {
        this.router.navigate(['proposals']);
    };
    ProposalFormPage.prototype.resetCustomerClick = function () {
        this.nomeCustomer = '';
        this.policyForm.get('customerId').setValue('');
    };
    ProposalFormPage.prototype.resetCompagniaClick = function () {
        this.nomeCompagnia = '';
        this.policyForm.get('insuranceCompanyId').setValue('');
    };
    ProposalFormPage.prototype.resetBrookerClick = function () {
        this.nomeBrooker = '';
        this.policyForm.get('brookerId').setValue('');
    };
    ProposalFormPage.prototype.resetSegnalatoreClick = function () {
        this.nomeSegnalatore = '';
        this.policyForm.get('segnalatoreId').setValue('');
    };
    ProposalFormPage.prototype.onCustomerChooseClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, this.mc.create({
                                component: src_app_modals_customer_modal_customer_modal_page__WEBPACK_IMPORTED_MODULE_13__["CustomerModalPage"],
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
    ProposalFormPage.prototype.onCompagniaChooseClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, this.mc.create({
                                component: _modals_organization_modal_organization_modal_page__WEBPACK_IMPORTED_MODULE_7__["OrganizationModalPage"],
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
    ProposalFormPage.prototype.onBrookerChooseClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, this.mc.create({
                                component: _modals_organization_modal_organization_modal_page__WEBPACK_IMPORTED_MODULE_7__["OrganizationModalPage"],
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
    ProposalFormPage.prototype.onSegnalatoreChooseClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, this.mc.create({
                                component: _modals_organization_modal_organization_modal_page__WEBPACK_IMPORTED_MODULE_7__["OrganizationModalPage"],
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
    ProposalFormPage.prototype.onAddAttachmentClick = function () {
        this.router.navigate(['proposal', this.token, 'attachments'], { queryParams: { kind: 'proposta' } });
    };
    ProposalFormPage.prototype.showMessage = function (message) {
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
    ProposalFormPage.prototype.deleteAttachment = function (attachment) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.as.asyncDeleteAttachment(attachment).subscribe({
                next: function (ris) {
                    resolve(ris);
                },
                error: function (err) {
                    resolve(src_app_models_service_status_enum__WEBPACK_IMPORTED_MODULE_10__["ServiceStatus"].FAILED);
                }
            });
        });
    };
    ProposalFormPage.prototype.confirmDelete = function (attachment) {
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
                                                        if (!(ss === src_app_models_service_status_enum__WEBPACK_IMPORTED_MODULE_10__["ServiceStatus"].OK)) return [3 /*break*/, 7];
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
    ProposalFormPage.prototype.onDeleteAttachmentClick = function (attachment) {
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
    ProposalFormPage.prototype.save = function (p) {
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
    ProposalFormPage.prototype.generatePolicy = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var policy = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ kind: 'proposal' }, _this.policyForm.value, { options: _this.selections });
            if (_this.isNew) {
                resolve(policy);
            }
            else {
                Object.assign(_this.policy, policy);
                resolve(_this.policy);
            }
        });
    };
    ProposalFormPage.prototype.onSaveClick = function () {
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
                        this.router.navigate(['proposal', savedPolicy.token]);
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
    ProposalFormPage.prototype.copyPolicy = function (p) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this.ps.toPolicy(p.token).subscribe(function (copied) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: 
                            // copy all the attachments
                            return [4 /*yield*/, Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(this.attachments.map(function (attch) {
                                    return _this.as.asyncPostCopyAttachment(attch, attch.kind.replace('proposta', 'polizza'), copied.token);
                                })).toPromise()];
                            case 1:
                                // copy all the attachments
                                _a.sent();
                                resolve(copied);
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
            catch (err) {
                console.error(err);
                reject(err);
            }
        });
    };
    ProposalFormPage.prototype.onCopyClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var p, savedPolicy, copiedPolicy, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 7]);
                        return [4 /*yield*/, this.generatePolicy()];
                    case 1:
                        p = _a.sent();
                        return [4 /*yield*/, this.save(p)];
                    case 2:
                        savedPolicy = _a.sent();
                        return [4 /*yield*/, this.copyPolicy(savedPolicy)];
                    case 3:
                        copiedPolicy = _a.sent();
                        return [4 /*yield*/, this.showMessage('Salvataggio avvenuto correttamente')];
                    case 4:
                        _a.sent();
                        this.router.navigate(['policy', copiedPolicy.token]);
                        return [3 /*break*/, 7];
                    case 5:
                        err_2 = _a.sent();
                        console.error(err_2);
                        return [4 /*yield*/, this.showMessage("Qualcosa \u00E8 andato storto, riprovare.")];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], ProposalFormPage.prototype, "policyForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProposalFormPage.prototype, "nomeCustomer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProposalFormPage.prototype, "nomeCompagnia", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProposalFormPage.prototype, "nomeBrooker", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProposalFormPage.prototype, "nomeSegnalatore", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ProposalFormPage.prototype, "attachments", void 0);
    ProposalFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-proposal-form',
            template: __webpack_require__(/*! ./proposal-form.page.html */ "./src/app/proposal-form/proposal-form.page.html"),
            styles: [__webpack_require__(/*! ./proposal-form.page.scss */ "./src/app/proposal-form/proposal-form.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_organization_service__WEBPACK_IMPORTED_MODULE_4__["OrganizationService"],
            _services_attachments_service__WEBPACK_IMPORTED_MODULE_9__["AttachmentsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
            _services_setup_policies_service__WEBPACK_IMPORTED_MODULE_8__["SetupPoliciesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PickerController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _services_policy_service__WEBPACK_IMPORTED_MODULE_11__["PolicyService"],
            src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_12__["CustomerService"]])
    ], ProposalFormPage);
    return ProposalFormPage;
}());



/***/ })

}]);
//# sourceMappingURL=proposal-form-proposal-form-module.js.map