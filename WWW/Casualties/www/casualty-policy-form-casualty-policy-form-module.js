(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["casualty-policy-form-casualty-policy-form-module"],{

/***/ "./src/app/casualty-policy-form/casualty-policy-form.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/casualty-policy-form/casualty-policy-form.module.ts ***!
  \*********************************************************************/
/*! exports provided: CasualtyPolicyFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasualtyPolicyFormPageModule", function() { return CasualtyPolicyFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _casualty_policy_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./casualty-policy-form.page */ "./src/app/casualty-policy-form/casualty-policy-form.page.ts");







var routes = [
    {
        path: '',
        component: _casualty_policy_form_page__WEBPACK_IMPORTED_MODULE_6__["CasualtyPolicyFormPage"]
    }
];
var CasualtyPolicyFormPageModule = /** @class */ (function () {
    function CasualtyPolicyFormPageModule() {
    }
    CasualtyPolicyFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_casualty_policy_form_page__WEBPACK_IMPORTED_MODULE_6__["CasualtyPolicyFormPage"]]
        })
    ], CasualtyPolicyFormPageModule);
    return CasualtyPolicyFormPageModule;
}());



/***/ }),

/***/ "./src/app/casualty-policy-form/casualty-policy-form.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/casualty-policy-form/casualty-policy-form.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button icon-only menuToggle=\"start\">\n        <ion-icon name=\"menu\"></ion-icon>\n      </ion-menu-button>          \n    </ion-buttons>\n    <ion-title>\n      Pratiche Web\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <p>\n            <a (click)=\"onListaClick()\" [routerLink]=\"\">{{listLabel}}</a> | \n            <a (click)=\"onBackClick()\" [routerLink]=\"\">{{backLabel}}</a> | \n            <a (click)=\"onShortBackClick()\" [routerLink]=\"\">{{shortBackLabel}}</a> |\n            Polizza collegata\n          </p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <h1>Polizza collegata</h1>\n        </ion-col>\n      </ion-row>\n      <form [formGroup]=\"cpForm\">\n        <ion-row>\n          <ion-col size=\"12\" size-md=\"6\">\n            <ion-item>\n              <ion-label>Polizza {{cpForm.value.policyName}}</ion-label>\n              <ion-button color=\"primary\" slot=\"start\" (click)=\"onPolicyChooseClick()\">\n                <ion-icon slot=\"icon-only\" name=\"compass\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"danger\" slot=\"end\" (click)=\"resetPolicyClick()\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-md=\"6\">\n            <ion-item>\n              <ion-label>Codice infortunio</ion-label>\n              <ion-input formControlName=\"casualtyNumber\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-md=\"6\">\n            <ion-item>\n              <ion-label>Ispettorato {{cpForm.value.nomeIspettorato}}</ion-label>\n              <ion-button color=\"primary\" slot=\"start\" (click)=\"onIspettoratoChooseClick()\">\n                <ion-icon slot=\"icon-only\" name=\"compass\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"danger\" slot=\"end\" (click)=\"resetIspettoratoClick()\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-md=\"6\">\n            <ion-item>\n              <ion-label>Istruttore {{cpForm.value.nomeIstruttore}}</ion-label>\n              <ion-button color=\"primary\" slot=\"start\" (click)=\"onIstruttoreChooseClick()\">\n                <ion-icon slot=\"icon-only\" name=\"compass\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"danger\" slot=\"end\" (click)=\"resetIstruttoreClick()\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-md=\"6\">\n            <ion-item>\n              <ion-label>Medico Legale {{cpForm.value.nomeMedicoLegale}}</ion-label>\n              <ion-button color=\"primary\" slot=\"start\" (click)=\"onMedicoChooseClick()\">\n                <ion-icon slot=\"icon-only\" name=\"compass\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"danger\" slot=\"end\" (click)=\"resetMedicoClick()\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-md=\"6\">\n            <ion-item>\n              <ion-label>Liquidatore {{cpForm.value.nomeLiquidatore}}</ion-label>\n              <ion-button color=\"primary\" slot=\"start\" (click)=\"onLiquidatoreChooseClick()\">\n                <ion-icon slot=\"icon-only\" name=\"compass\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"danger\" slot=\"end\" (click)=\"resetLiquidatoreClick()\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-md=\"6\">\n            <ion-item>\n              <ion-label>Data lettera di intervento:</ion-label>\n              <ion-datetime\n                placeholder=\"Data lettera\"\n                display-format=\"DD/MM/YYYY\" \n                picker-format=\"DD/MMMM/YYYY\" \n                formControlName=\"dataLetteraIntervento\"\n                month-names=\"gennaio, febbraio, marzo, aprile, maggio, giugno, luglio, agosto, settembre, ottobre, novembre, dicembre\"\n                cancel-text=\"Annulla\"\n                done-text=\"Ok\">\n              </ion-datetime>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-md=\"6\">\n            <ion-item>\n              <ion-label>Numero raccomandata</ion-label>\n              <ion-input formControlName=\"numeroRaccomandata\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-md=\"6\">\n            <ion-item>\n              <ion-label>Note</ion-label>\n              <ion-textarea formControlName=\"notes\" placeholder=\"Note particolari\"></ion-textarea>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-md=\"6\">\n            <ion-item>\n              <ion-label>Inviata raccomandata</ion-label>\n              <ion-checkbox formControlName=\"inviataAR\"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-md=\"6\">\n            <ion-item>\n              <ion-label>Inviata email</ion-label>\n              <ion-checkbox formControlName=\"inviataMail\"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-md=\"6\">\n            <ion-item>\n              <ion-label>Inviato Fax</ion-label>\n              <ion-checkbox formControlName=\"inviatoFax\"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-sm=\"6\">\n            <ion-item>\n              <ion-label>Stato:</ion-label>\n              <ion-select placeholder=\"Stato infortunio\" formControlName=\"status\">\n                <ion-select-option value=\"aperto\">Aperto</ion-select-option>\n                <ion-select-option value=\"chiuso\">Chiuso</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"token && token !== '' && token !=='new'\" class=\"ion-align-items-center\">\n          <ion-col size=\"auto\">\n            <h1>Allegati</h1>\n          </ion-col>\n          <ion-col>\n            <ion-button color=\"primary\" (click)=\"onAddAttachmentClick()\">\n              <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"token && token !== ''\">\n          <ion-col>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let a of attachments\">\n          <ion-col>\n            <ion-item>\n              <ion-label text-wrap>\n                <ion-text color=\"tertiary\">{{a.name}}</ion-text>\n              </ion-label>\n              <ion-note slot=\"end\" class=\"ion-hide-sm-down\">\n                {{a.tags}} {{a.kind}}\n              </ion-note>\n              <ion-button color=\"tertiary\" slot=\"start\" href=\"http://localhost:8080/api/attachments/{{a.kind}}/{{token}}/{{a._id}}/attachment\">\n                <ion-icon slot=\"icon-only\" name=\"cloud-download\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"danger\" slot=\"end\" (click)=\"onDeleteAttachmentClick(a)\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"attachments && attachments.length > 0\">\n          <ion-col>\n            <ion-button color=\"primary\" (click)=\"onAddAttachmentClick()\">\n              <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-sm>\n            <div>\n              <ion-button color=\"primary\" [disabled]=\"!cpForm.valid\" (click)=\"onSaveClick()\">\n                <ion-icon slot=\"icon-only\" name=\"save\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"tertiary\" (click)=\"onShortBackClick()\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n              </ion-button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-grid>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/casualty-policy-form/casualty-policy-form.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/casualty-policy-form/casualty-policy-form.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhc3VhbHR5LXBvbGljeS1mb3JtL2Nhc3VhbHR5LXBvbGljeS1mb3JtLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/casualty-policy-form/casualty-policy-form.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/casualty-policy-form/casualty-policy-form.page.ts ***!
  \*******************************************************************/
/*! exports provided: CasualtyPolicyFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasualtyPolicyFormPage", function() { return CasualtyPolicyFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_casualty_policy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/casualty-policy.service */ "./src/app/services/casualty-policy.service.ts");
/* harmony import */ var src_app_services_casualty_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/casualty.service */ "./src/app/services/casualty.service.ts");
/* harmony import */ var src_app_modals_policy_modal_policy_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modals/policy-modal/policy-modal.page */ "./src/app/modals/policy-modal/policy-modal.page.ts");
/* harmony import */ var src_app_modals_organization_modal_organization_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modals/organization-modal/organization-modal.page */ "./src/app/modals/organization-modal/organization-modal.page.ts");
/* harmony import */ var src_app_models_service_status_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/service-status.enum */ "./src/app/models/service-status.enum.ts");
/* harmony import */ var src_app_services_attachments_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/attachments.service */ "./src/app/services/attachments.service.ts");











var CasualtyPolicyFormPage = /** @class */ (function () {
    function CasualtyPolicyFormPage(mc, fb, router, ar, tc, ac, cps, cs, as) {
        this.mc = mc;
        this.fb = fb;
        this.router = router;
        this.ar = ar;
        this.tc = tc;
        this.ac = ac;
        this.cps = cps;
        this.cs = cs;
        this.as = as;
        this.listLabel = 'Infortuni';
        this.backLabel = 'Infortunio';
        this.shortBackLabel = 'Lista polizze collegate';
        this.id = '';
        this.token = '';
        this.attachments = [];
        this.attachmentKinds = [
            'infortunio-polizza-lettera-intervento',
            'infortunio-polizza-raccomandata',
            'infortunio-polizza-documento',
        ];
        this.cpForm = fb.group({
            casualtyNumber: [''],
            tokenPolicy: [''],
            policyName: [''],
            idIspettorato: [''],
            idIstruttore: [''],
            idMedicoLegale: [''],
            idLiquidatore: [''],
            nomeIspettorato: [''],
            nomeIstruttore: [''],
            nomeMedicoLegale: [''],
            nomeLiquidatore: [''],
            dataLetteraIntervento: [''],
            numeroRaccomandata: [''],
            notes: [''],
            inviataAR: [false],
            inviataMail: [false],
            inviatoFax: [false],
            status: ['aperto'],
        });
    }
    CasualtyPolicyFormPage.prototype.ngOnInit = function () {
    };
    CasualtyPolicyFormPage.prototype.ngOnDestroy = function () {
        if (this.route$) {
            this.route$.unsubscribe();
        }
        if (this.id$) {
            this.id$.unsubscribe();
        }
    };
    CasualtyPolicyFormPage.prototype.getToken = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.route$ = self.ar.params.subscribe(function (params) {
                resolve(params.token);
            });
        });
    };
    CasualtyPolicyFormPage.prototype.getId = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.route$ = self.ar.params.subscribe(function (params) {
                resolve(params.id);
            });
        });
    };
    CasualtyPolicyFormPage.prototype.getCurrent = function (token, id) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.cps.single(token, id).subscribe({
                next: function (cp) {
                    resolve(cp);
                },
                error: function (err) {
                    reject(err);
                }
            });
        });
    };
    CasualtyPolicyFormPage.prototype.getCasualty = function (token) {
        var _this = this;
        var self = this;
        return new Promise(function (resolve, reject) {
            _this.cs.single(token).subscribe({
                next: function (casualty) {
                    resolve(casualty);
                },
                error: function (err) {
                    reject(err);
                }
            });
        });
    };
    CasualtyPolicyFormPage.prototype.onIspettoratoChooseClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, this.mc.create({
                                component: src_app_modals_organization_modal_organization_modal_page__WEBPACK_IMPORTED_MODULE_8__["OrganizationModalPage"],
                                componentProps: {
                                    kind: 'Ispettorati',
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
                            this.cpForm.get('idIspettorato').setValue(data._id);
                            this.cpForm.get('nomeIspettorato').setValue(data.name);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CasualtyPolicyFormPage.prototype.resetIspettoratoClick = function () {
        this.cpForm.get('idIspettorato').setValue('');
        this.cpForm.get('nomeIspettorato').setValue('');
    };
    CasualtyPolicyFormPage.prototype.onIstruttoreChooseClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, this.mc.create({
                                component: src_app_modals_organization_modal_organization_modal_page__WEBPACK_IMPORTED_MODULE_8__["OrganizationModalPage"],
                                componentProps: {
                                    kind: 'Periti',
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
                            this.cpForm.get('idIstruttore').setValue(data._id);
                            this.cpForm.get('nomeIstruttore').setValue(data.name);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CasualtyPolicyFormPage.prototype.resetIstruttoreClick = function () {
        this.cpForm.get('idIstruttore').setValue('');
        this.cpForm.get('nomeIstruttore').setValue('');
    };
    CasualtyPolicyFormPage.prototype.onMedicoChooseClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, this.mc.create({
                                component: src_app_modals_organization_modal_organization_modal_page__WEBPACK_IMPORTED_MODULE_8__["OrganizationModalPage"],
                                componentProps: {
                                    kind: 'Medici',
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
                            this.cpForm.get('idMedicoLegale').setValue(data._id);
                            this.cpForm.get('nomeMedicoLegale').setValue(data.name);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CasualtyPolicyFormPage.prototype.resetMedicoClick = function () {
        this.cpForm.get('idMedicoLegale').setValue('');
        this.cpForm.get('nomeMedicoLegale').setValue('');
    };
    CasualtyPolicyFormPage.prototype.onLiquidatoreChooseClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, this.mc.create({
                                component: src_app_modals_organization_modal_organization_modal_page__WEBPACK_IMPORTED_MODULE_8__["OrganizationModalPage"],
                                componentProps: {
                                    kind: 'Liquidatori',
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
                            this.cpForm.get('idLiquidatore').setValue(data._id);
                            this.cpForm.get('nomeLiquidatore').setValue(data.name);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CasualtyPolicyFormPage.prototype.resetLiquidatoreClick = function () {
        this.cpForm.get('idLiquidatore').setValue('');
        this.cpForm.get('nomeLiquidatore').setValue('');
    };
    CasualtyPolicyFormPage.prototype.onPolicyChooseClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, this.mc.create({
                                component: src_app_modals_policy_modal_policy_modal_page__WEBPACK_IMPORTED_MODULE_7__["PolicyModalPage"],
                                componentProps: {
                                    customerToken: self.casualty.customerId,
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
                            this.cpForm.get('tokenPolicy').setValue(data.policy.token);
                            this.cpForm.get('policyName').setValue(data.insuranceCompany.name + " " + data.policy.number);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CasualtyPolicyFormPage.prototype.resetPolicyClick = function () {
        this.cpForm.get('tokenPolicy').setValue('');
        this.cpForm.get('policyName').setValue('');
    };
    CasualtyPolicyFormPage.prototype.onListaClick = function () {
        this.router.navigate(['home']);
    };
    CasualtyPolicyFormPage.prototype.onBackClick = function () {
        this.router.navigate(['casualty', this.token]);
    };
    CasualtyPolicyFormPage.prototype.onShortBackClick = function () {
        this.router.navigate(['casualty', this.token, 'policies']);
    };
    CasualtyPolicyFormPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, _c, _d, _i, _e, a, ats, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _f.trys.push([0, 9, , 10]);
                        _a = this;
                        return [4 /*yield*/, this.getToken()];
                    case 1:
                        _a.token = _f.sent();
                        _b = this;
                        return [4 /*yield*/, this.getId()];
                    case 2:
                        _b.id = _f.sent();
                        this.shortBackLabel = 'Lista polizze collegate';
                        this.backLabel = 'Infortunio';
                        this.listLabel = 'Lista infortuni';
                        _c = this;
                        return [4 /*yield*/, this.getCurrent(this.token, this.id)];
                    case 3:
                        _c.current = _f.sent();
                        _d = this;
                        return [4 /*yield*/, this.getCasualty(this.token)];
                    case 4:
                        _d.casualty = _f.sent();
                        this.cpForm.patchValue(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, (this.current)));
                        this.attachments = [];
                        _i = 0, _e = this.attachmentKinds;
                        _f.label = 5;
                    case 5:
                        if (!(_i < _e.length)) return [3 /*break*/, 8];
                        a = _e[_i];
                        return [4 /*yield*/, this.getAttachments(a, this.token, this.id)];
                    case 6:
                        ats = _f.sent();
                        this.attachments = this.attachments.concat(ats);
                        _f.label = 7;
                    case 7:
                        _i++;
                        return [3 /*break*/, 5];
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        err_1 = _f.sent();
                        console.error(err_1);
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    CasualtyPolicyFormPage.prototype.showMessage = function (message) {
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
    CasualtyPolicyFormPage.prototype.update = function (toSave) {
        var _this = this;
        var self = this;
        return new Promise(function (resolve, reject) {
            self.cps.update(_this.token, _this.id, toSave).subscribe({
                next: function (cp) {
                    resolve(cp);
                },
                error: function (err) {
                    reject(err);
                }
            });
        });
    };
    CasualtyPolicyFormPage.prototype.onSaveClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toSave, saved, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        toSave = this.cpForm.value;
                        return [4 /*yield*/, this.update(toSave)];
                    case 1:
                        saved = _a.sent();
                        this.showMessage("Il salvataggio \u00E8 andato a buon fine.");
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        this.showMessage("Qualcosa \u00E8 andato storto: " + err_2 + ". Riprova pi\u00F9 tardi");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CasualtyPolicyFormPage.prototype.onAddAttachmentClick = function () {
        this.router.navigate(['casualty', this.token, 'policies', this.id, 'attachments'], { queryParams: { kind: 'cp' } });
    };
    CasualtyPolicyFormPage.prototype.deleteAttachment = function (attachment) {
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
    CasualtyPolicyFormPage.prototype.confirmDelete = function (attachment) {
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
                                            var ss, _i, _a, a, ats, e_1;
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
                                                        return [4 /*yield*/, this.getAttachments(a, this.token, this.id)];
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
                                                        e_1 = _b.sent();
                                                        return [4 /*yield*/, self.showMessage("Si \u00E8 verificato un problema " + e_1 + ". Riprova!")];
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
    CasualtyPolicyFormPage.prototype.onDeleteAttachmentClick = function (attachment) {
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
    CasualtyPolicyFormPage.prototype.getAttachments = function (kind, token, id) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.as.asyncGetAttachments(token, kind).subscribe({
                next: function (atchs) {
                    var result = atchs.filter(function (el) {
                        return el.cpId === id;
                    });
                    resolve(result);
                },
                error: function (err) {
                    resolve([]);
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CasualtyPolicyFormPage.prototype, "current", void 0);
    CasualtyPolicyFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-casualty-policy-form',
            template: __webpack_require__(/*! ./casualty-policy-form.page.html */ "./src/app/casualty-policy-form/casualty-policy-form.page.html"),
            styles: [__webpack_require__(/*! ./casualty-policy-form.page.scss */ "./src/app/casualty-policy-form/casualty-policy-form.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            src_app_services_casualty_policy_service__WEBPACK_IMPORTED_MODULE_5__["CasualtyPolicyService"],
            src_app_services_casualty_service__WEBPACK_IMPORTED_MODULE_6__["CasualtyService"],
            src_app_services_attachments_service__WEBPACK_IMPORTED_MODULE_10__["AttachmentsService"]])
    ], CasualtyPolicyFormPage);
    return CasualtyPolicyFormPage;
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

/***/ "./src/app/services/attachments.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/attachments.service.ts ***!
  \*************************************************/
/*! exports provided: AttachmentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentsService", function() { return AttachmentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/service-status.enum */ "./src/app/models/service-status.enum.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var AttachmentsService = /** @class */ (function () {
    function AttachmentsService(http) {
        this.http = http;
        this.baseUrl = '/api/attachments';
    }
    AttachmentsService.prototype.asyncGetAttachments = function (token, kind) {
        var session = window.localStorage.getItem('_session');
        if (!session) {
            session = 'loggedout';
        }
        return this.http.get(this.baseUrl + "/" + kind + "/" + token, {
            headers: {
                's-t': session
            }
        });
    };
    AttachmentsService.prototype.asyncPostAttachment = function (attachment, token, kind) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var session = window.localStorage.getItem('_session');
            if (!session) {
                session = 'loggedout';
            }
            _this.http.post(_this.baseUrl + "/" + kind + "/" + token, attachment, {
                headers: {
                    's-t': session
                },
                observe: 'response',
                responseType: 'text'
            }).subscribe(function (data) {
                if (data.status === 200) {
                    observer.next(_models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__["ServiceStatus"].OK);
                }
                else {
                    observer.error(_models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__["ServiceStatus"].FAILED);
                }
                return { unsubscribe: function () { } };
            });
        });
    };
    AttachmentsService.prototype.asyncPostCopyAttachment = function (a, destKind, destTkn) {
        var session = window.localStorage.getItem('_session');
        if (!session) {
            session = 'loggedout';
        }
        return this.http.post(this.baseUrl + "/copy/" + a.kind + "/" + a.token + "/" + a._id + "/to/" + destKind + "/" + destTkn, {}, {
            headers: {
                's-t': session
            }
        });
    };
    AttachmentsService.prototype.asyncPutAttachment = function (attachment) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var session = window.localStorage.getItem('_session');
            if (!session) {
                session = 'loggedout';
            }
            var token = attachment.token;
            var kind = attachment.kind;
            _this.http.put(_this.baseUrl + "/" + kind + "/" + token + "/" + attachment._id, attachment, {
                headers: {
                    's-t': session
                },
                observe: 'response',
                responseType: 'text'
            }).subscribe(function (data) {
                if (data.status === 200) {
                    observer.next(_models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__["ServiceStatus"].OK);
                }
                else {
                    observer.error(_models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__["ServiceStatus"].FAILED);
                }
                return { unsubscribe: function () { } };
            });
        });
    };
    AttachmentsService.prototype.asyncDeleteAttachment = function (attachment) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var session = window.localStorage.getItem('_session');
            if (!session) {
                session = 'loggedout';
            }
            var token = attachment.token;
            var kind = attachment.kind;
            _this.http.delete(_this.baseUrl + "/" + kind + "/" + token + "/" + attachment._id, {
                headers: {
                    's-t': session
                },
                observe: 'response',
                responseType: 'text'
            }).subscribe(function (data) {
                if (data.status === 200) {
                    observer.next(_models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__["ServiceStatus"].OK);
                }
                else {
                    observer.error(_models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__["ServiceStatus"].FAILED);
                }
                return { unsubscribe: function () { } };
            });
        });
    };
    AttachmentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], AttachmentsService);
    return AttachmentsService;
}());



/***/ }),

/***/ "./src/app/services/casualty-policy.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/casualty-policy.service.ts ***!
  \*****************************************************/
/*! exports provided: CasualtyPolicyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasualtyPolicyService", function() { return CasualtyPolicyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var CasualtyPolicyService = /** @class */ (function () {
    function CasualtyPolicyService(hc) {
        this.hc = hc;
        this.baseUrl = '/api/casualties/';
        this.policies = '/policies';
    }
    CasualtyPolicyService.prototype.buildUsualHeader = function () {
        var session = window.localStorage.getItem('_session') || 'notloggedin';
        return {
            headers: {
                's-t': session,
            }
        };
    };
    CasualtyPolicyService.prototype.getList = function (token) {
        return this.hc.get("" + this.baseUrl + token + this.policies, this.buildUsualHeader());
    };
    CasualtyPolicyService.prototype.single = function (token, id) {
        return this.hc.get("" + this.baseUrl + token + this.policies + "/" + id, this.buildUsualHeader());
    };
    CasualtyPolicyService.prototype.saveNew = function (token, cp) {
        return this.hc.post("" + this.baseUrl + token + this.policies, cp, this.buildUsualHeader());
    };
    CasualtyPolicyService.prototype.update = function (token, id, cp) {
        return this.hc.put("" + this.baseUrl + token + this.policies + "/" + id, cp, this.buildUsualHeader());
    };
    CasualtyPolicyService.prototype.delete = function (token, id) {
        var _this = this;
        var session = window.localStorage.getItem('_session') || 'notloggedin';
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.hc.delete("" + _this.baseUrl + token + _this.policies + "/" + id, {
                headers: {
                    's-t': session,
                },
                observe: 'response',
                responseType: 'text',
            }).subscribe(function (res) {
                observer.next(res.status === 200);
            }, function (error) {
                observer.error(error);
            });
        });
    };
    CasualtyPolicyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CasualtyPolicyService);
    return CasualtyPolicyService;
}());



/***/ }),

/***/ "./src/app/services/casualty.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/casualty.service.ts ***!
  \**********************************************/
/*! exports provided: CasualtyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasualtyService", function() { return CasualtyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var CasualtyService = /** @class */ (function () {
    function CasualtyService(hc) {
        this.hc = hc;
        this.baseUrl = '/api/casualties';
    }
    CasualtyService.prototype.getList = function (kind) {
        var session = window.localStorage.getItem('_session');
        if (!session) {
            session = 'loggedout';
        }
        return this.hc.get("" + this.baseUrl, {
            headers: {
                's-t': session
            }
        });
    };
    CasualtyService.prototype.single = function (token) {
        var session = window.localStorage.getItem('_session');
        if (!session) {
            session = 'loggedou';
        }
        return this.hc.get(this.baseUrl + "/" + token, {
            headers: {
                's-t': session
            }
        });
    };
    CasualtyService.prototype.saveNew = function (casualty) {
        var session = window.localStorage.getItem('_session');
        if (!session) {
            session = 'loggedou';
        }
        return this.hc.post(this.baseUrl, casualty, {
            headers: {
                's-t': session
            }
        });
    };
    CasualtyService.prototype.update = function (casualty) {
        var session = window.localStorage.getItem('_session');
        if (!session) {
            session = 'loggedou';
        }
        return this.hc.put(this.baseUrl + "/" + casualty.token, casualty, {
            headers: {
                's-t': session
            }
        });
    };
    CasualtyService.prototype.delete = function (token) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var session = window.localStorage.getItem('_session');
            if (!session) {
                session = 'loggedout';
            }
            _this.hc.delete(_this.baseUrl + "/" + token, {
                headers: {
                    's-t': session
                },
                observe: 'response',
                responseType: 'text',
            }).subscribe(function (res) {
                observer.next(res.status === 200);
            }, function (error) {
                observer.error(error);
            });
        });
    };
    CasualtyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CasualtyService);
    return CasualtyService;
}());



/***/ })

}]);
//# sourceMappingURL=casualty-policy-form-casualty-policy-form-module.js.map