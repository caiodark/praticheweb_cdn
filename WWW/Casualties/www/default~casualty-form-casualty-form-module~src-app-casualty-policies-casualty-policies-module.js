(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~casualty-form-casualty-form-module~src-app-casualty-policies-casualty-policies-module"],{

/***/ "./src/app/casualty-policies/casualty-policies.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/casualty-policies/casualty-policies.module.ts ***!
  \***************************************************************/
/*! exports provided: CasualtyPoliciesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasualtyPoliciesPageModule", function() { return CasualtyPoliciesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _casualty_policies_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./casualty-policies.page */ "./src/app/casualty-policies/casualty-policies.page.ts");







var routes = [
    {
        path: '',
        component: _casualty_policies_page__WEBPACK_IMPORTED_MODULE_6__["CasualtyPoliciesPage"],
    }
];
var CasualtyPoliciesPageModule = /** @class */ (function () {
    function CasualtyPoliciesPageModule() {
    }
    CasualtyPoliciesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_casualty_policies_page__WEBPACK_IMPORTED_MODULE_6__["CasualtyPoliciesPage"]]
        })
    ], CasualtyPoliciesPageModule);
    return CasualtyPoliciesPageModule;
}());



/***/ }),

/***/ "./src/app/casualty-policies/casualty-policies.page.html":
/*!***************************************************************!*\
  !*** ./src/app/casualty-policies/casualty-policies.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button icon-only menuToggle=\"start\">\n        <ion-icon name=\"menu\"></ion-icon>\n      </ion-menu-button>          \n    </ion-buttons>\n    <ion-title>\n      Pratiche Web\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <p>\n            <a (click)=\"onListaClick()\" [routerLink]=\"\">{{listLabel}}</a> | <a (click)=\"onBackClick()\" [routerLink]=\"\">{{backLabel}}</a> | polizze\n          </p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <h1>Polizze collegate</h1>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" size-sm=\"6\" *ngFor=\"let cp of entries\">\n          <ion-card>\n            <ion-item lines=\"none\">\n              <ion-button color=\"primary\" slot=\"start\" (click)=\"onEditEntryClick(cp)\">\n                <ion-icon slot=\"icon-only\" name=\"compass\"></ion-icon>\n              </ion-button>\n              <ion-label>{{cp.policyName}} {{cp.casualtyNumber}}</ion-label>\n              <ion-button color=\"danger\" slot=\"end\" (click)=\"onDeleteEntryClick(cp)\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-button>\n            </ion-item>\n            <ion-card-content>\n\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <h2>Nuova Polizza collegata</h2>\n        </ion-col>\n      </ion-row>\n      <form [formGroup]=\"cpForm\">\n        <ion-row>\n          <ion-col size=\"12\" size-md=\"6\">\n            <ion-item>\n              <ion-label>Polizza {{cpForm.value.policyName}}</ion-label>\n              <ion-button color=\"primary\" slot=\"start\" (click)=\"onPolicyChooseClick()\">\n                <ion-icon slot=\"icon-only\" name=\"compass\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"danger\" slot=\"end\" (click)=\"resetPolicyClick()\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-md=\"6\">\n            <ion-item>\n              <ion-label>Codice infortunio</ion-label>\n              <ion-input formControlName=\"casualtyNumber\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-md=\"6\">\n            <ion-item>\n              <ion-label>Ispettorato {{cpForm.value.nomeIspettorato}}</ion-label>\n              <ion-button color=\"primary\" slot=\"start\" (click)=\"onIspettoratoChooseClick()\">\n                <ion-icon slot=\"icon-only\" name=\"compass\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"danger\" slot=\"end\" (click)=\"resetIspettoratoClick()\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-md=\"6\">\n            <ion-item>\n              <ion-label>Istruttore {{cpForm.value.nomeIstruttore}}</ion-label>\n              <ion-button color=\"primary\" slot=\"start\" (click)=\"onIstruttoreChooseClick()\">\n                <ion-icon slot=\"icon-only\" name=\"compass\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"danger\" slot=\"end\" (click)=\"resetIstruttoreClick()\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-md=\"6\">\n            <ion-item>\n              <ion-label>Medico Legale {{cpForm.value.nomeMedicoLegale}}</ion-label>\n              <ion-button color=\"primary\" slot=\"start\" (click)=\"onMedicoChooseClick()\">\n                <ion-icon slot=\"icon-only\" name=\"compass\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"danger\" slot=\"end\" (click)=\"resetMedicoClick()\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-md=\"6\">\n            <ion-item>\n              <ion-label>Liquidatore {{cpForm.value.nomeLiquidatore}}</ion-label>\n              <ion-button color=\"primary\" slot=\"start\" (click)=\"onLiquidatoreChooseClick()\">\n                <ion-icon slot=\"icon-only\" name=\"compass\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"danger\" slot=\"end\" (click)=\"resetLiquidatoreClick()\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-md=\"6\">\n            <ion-item>\n              <ion-label>Data lettera di intervento:</ion-label>\n              <ion-datetime\n                placeholder=\"Data lettera\"\n                display-format=\"DD/MM/YYYY\" \n                picker-format=\"DD/MMMM/YYYY\" \n                formControlName=\"dataLetteraIntervento\"\n                month-names=\"gennaio, febbraio, marzo, aprile, maggio, giugno, luglio, agosto, settembre, ottobre, novembre, dicembre\"\n                cancel-text=\"Annulla\"\n                done-text=\"Ok\">\n              </ion-datetime>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-md=\"6\">\n            <ion-item>\n              <ion-label>Numero raccomandata</ion-label>\n              <ion-input formControlName=\"numeroRaccomandata\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-md=\"6\">\n            <ion-item>\n              <ion-label>Note</ion-label>\n              <ion-textarea formControlName=\"notes\" placeholder=\"Note particolari\"></ion-textarea>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-md=\"6\">\n            <ion-item>\n              <ion-label>Inviata raccomandata</ion-label>\n              <ion-checkbox formControlName=\"inviataAR\"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-md=\"6\">\n            <ion-item>\n              <ion-label>Inviata email</ion-label>\n              <ion-checkbox formControlName=\"inviataMail\"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-md=\"6\">\n            <ion-item>\n              <ion-label>Inviato Fax</ion-label>\n              <ion-checkbox formControlName=\"inviatoFax\"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-sm=\"6\">\n            <ion-item>\n              <ion-label>Stato:</ion-label>\n              <ion-select placeholder=\"Stato infortunio\" formControlName=\"status\">\n                <ion-select-option value=\"aperto\">Aperto</ion-select-option>\n                <ion-select-option value=\"chiuso\">Chiuso</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-sm>\n            <div>\n              <ion-button color=\"primary\" [disabled]=\"!cpForm.valid\" (click)=\"onSaveClick()\">\n                <ion-icon slot=\"icon-only\" name=\"save\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"tertiary\" (click)=\"onBackClick()\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n              </ion-button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-grid>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/casualty-policies/casualty-policies.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/casualty-policies/casualty-policies.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhc3VhbHR5LXBvbGljaWVzL2Nhc3VhbHR5LXBvbGljaWVzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/casualty-policies/casualty-policies.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/casualty-policies/casualty-policies.page.ts ***!
  \*************************************************************/
/*! exports provided: CasualtyPoliciesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasualtyPoliciesPage", function() { return CasualtyPoliciesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_casualty_policy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/casualty-policy.service */ "./src/app/services/casualty-policy.service.ts");
/* harmony import */ var src_app_services_casualty_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/casualty.service */ "./src/app/services/casualty.service.ts");
/* harmony import */ var src_app_modals_policy_modal_policy_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modals/policy-modal/policy-modal.page */ "./src/app/modals/policy-modal/policy-modal.page.ts");
/* harmony import */ var src_app_modals_organization_modal_organization_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modals/organization-modal/organization-modal.page */ "./src/app/modals/organization-modal/organization-modal.page.ts");









var CasualtyPoliciesPage = /** @class */ (function () {
    function CasualtyPoliciesPage(mc, fb, router, ar, tc, ac, cps, cs) {
        this.mc = mc;
        this.fb = fb;
        this.router = router;
        this.ar = ar;
        this.tc = tc;
        this.ac = ac;
        this.cps = cps;
        this.cs = cs;
        this.listLabel = 'Infortuni';
        this.backLabel = 'Infortunio';
        this.token = '';
        this.entries = [];
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
    CasualtyPoliciesPage.prototype.ngOnInit = function () {
    };
    CasualtyPoliciesPage.prototype.ngOnDestroy = function () {
        if (this.route$) {
            this.route$.unsubscribe();
        }
    };
    CasualtyPoliciesPage.prototype.getToken = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.route$ = self.ar.params.subscribe(function (params) {
                resolve(params.token);
            });
        });
    };
    CasualtyPoliciesPage.prototype.getList = function (token) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.cps.getList(token).subscribe({
                next: function (list) {
                    resolve(list);
                },
                error: function (err) {
                    reject(err);
                }
            });
        });
    };
    CasualtyPoliciesPage.prototype.getCasualty = function (token) {
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
    CasualtyPoliciesPage.prototype.onIspettoratoChooseClick = function () {
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
    CasualtyPoliciesPage.prototype.resetIspettoratoClick = function () {
        this.cpForm.get('idIspettorato').setValue('');
        this.cpForm.get('nomeIspettorato').setValue('');
    };
    CasualtyPoliciesPage.prototype.onIstruttoreChooseClick = function () {
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
    CasualtyPoliciesPage.prototype.resetIstruttoreClick = function () {
        this.cpForm.get('idIstruttore').setValue('');
        this.cpForm.get('nomeIstruttore').setValue('');
    };
    CasualtyPoliciesPage.prototype.onMedicoChooseClick = function () {
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
    CasualtyPoliciesPage.prototype.resetMedicoClick = function () {
        this.cpForm.get('idMedicoLegale').setValue('');
        this.cpForm.get('nomeMedicoLegale').setValue('');
    };
    CasualtyPoliciesPage.prototype.onLiquidatoreChooseClick = function () {
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
    CasualtyPoliciesPage.prototype.resetLiquidatoreClick = function () {
        this.cpForm.get('idLiquidatore').setValue('');
        this.cpForm.get('nomeLiquidatore').setValue('');
    };
    CasualtyPoliciesPage.prototype.onPolicyChooseClick = function () {
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
    CasualtyPoliciesPage.prototype.resetPolicyClick = function () {
        this.cpForm.get('tokenPolicy').setValue('');
        this.cpForm.get('policyName').setValue('');
    };
    CasualtyPoliciesPage.prototype.onListaClick = function () {
        this.router.navigate(['home']);
    };
    CasualtyPoliciesPage.prototype.onBackClick = function () {
        this.router.navigate(['casualty', this.token]);
    };
    CasualtyPoliciesPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, _c, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 4, , 5]);
                        _a = this;
                        return [4 /*yield*/, this.getToken()];
                    case 1:
                        _a.token = _d.sent();
                        this.backLabel = 'Infortunio';
                        this.listLabel = 'Lista infortuni';
                        _b = this;
                        return [4 /*yield*/, this.getList(this.token)];
                    case 2:
                        _b.entries = _d.sent();
                        _c = this;
                        return [4 /*yield*/, this.getCasualty(this.token)];
                    case 3:
                        _c.casualty = _d.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _d.sent();
                        console.error(err_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    CasualtyPoliciesPage.prototype.showMessage = function (message) {
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
    CasualtyPoliciesPage.prototype.resetForm = function () {
        this.cpForm.patchValue({
            casualtyNumber: '',
            tokenPolicy: '',
            policyName: '',
            idIspettorato: '',
            idIstruttore: '',
            idMedicoLegale: '',
            idLiquidatore: '',
            nomeIspettorato: '',
            nomeIstruttore: '',
            nomeMedicoLegale: '',
            nomeLiquidatore: '',
            dataLetteraIntervento: '',
            numeroRaccomandata: '',
            notes: '',
            inviataAR: false,
            inviataMail: false,
            inviatoFax: false,
            status: 'aperto',
        });
    };
    CasualtyPoliciesPage.prototype.saveNew = function (toSave) {
        var _this = this;
        var self = this;
        return new Promise(function (resolve, reject) {
            self.cps.saveNew(_this.token, toSave).subscribe({
                next: function (cp) {
                    resolve(cp);
                },
                error: function (err) {
                    reject(err);
                }
            });
        });
    };
    CasualtyPoliciesPage.prototype.onSaveClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toSave, saved, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        toSave = this.cpForm.value;
                        return [4 /*yield*/, this.saveNew(toSave)];
                    case 1:
                        saved = _a.sent();
                        this.entries = [saved].concat((this.entries));
                        this.resetForm();
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
    CasualtyPoliciesPage.prototype.delete = function (cp) {
        var _this = this;
        var self = this;
        return new Promise(function (resolve, reject) {
            self.cps.delete(_this.token, cp._id).subscribe({
                next: function (done) {
                    resolve(done);
                },
                error: function (err) {
                    reject(err);
                }
            });
        });
    };
    CasualtyPoliciesPage.prototype.confirmDelete = function (cp) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, this.ac.create({
                                header: 'Cancellazione voce',
                                message: 'Stai per <strong>cancellare</strong> una voce',
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
                                            var done, e_1;
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        _a.trys.push([0, 6, , 8]);
                                                        return [4 /*yield*/, this.delete(cp)];
                                                    case 1:
                                                        done = _a.sent();
                                                        if (!done) return [3 /*break*/, 3];
                                                        this.entries = this.entries.filter(function (e) {
                                                            return e._id !== cp._id;
                                                        });
                                                        return [4 /*yield*/, self.showMessage("Cancellazione avvenuta con successo.")];
                                                    case 2:
                                                        _a.sent();
                                                        return [3 /*break*/, 5];
                                                    case 3: return [4 /*yield*/, self.showMessage("Si \u00E8 verificato un problema. Riprova!")];
                                                    case 4:
                                                        _a.sent();
                                                        _a.label = 5;
                                                    case 5: return [3 /*break*/, 8];
                                                    case 6:
                                                        e_1 = _a.sent();
                                                        return [4 /*yield*/, self.showMessage("Si \u00E8 verificato un problema " + e_1 + ". Riprova!")];
                                                    case 7:
                                                        _a.sent();
                                                        return [3 /*break*/, 8];
                                                    case 8: return [2 /*return*/];
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
    CasualtyPoliciesPage.prototype.onDeleteEntryClick = function (cp) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.confirmDelete(cp)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CasualtyPoliciesPage.prototype.onEditEntryClick = function (cp) {
        this.router.navigate(['casualty', this.token, 'policies', cp._id]);
    };
    CasualtyPoliciesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-casualty-policies',
            template: __webpack_require__(/*! ./casualty-policies.page.html */ "./src/app/casualty-policies/casualty-policies.page.html"),
            styles: [__webpack_require__(/*! ./casualty-policies.page.scss */ "./src/app/casualty-policies/casualty-policies.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            src_app_services_casualty_policy_service__WEBPACK_IMPORTED_MODULE_5__["CasualtyPolicyService"],
            src_app_services_casualty_service__WEBPACK_IMPORTED_MODULE_6__["CasualtyService"]])
    ], CasualtyPoliciesPage);
    return CasualtyPoliciesPage;
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
//# sourceMappingURL=default~casualty-form-casualty-form-module~src-app-casualty-policies-casualty-policies-module.js.map