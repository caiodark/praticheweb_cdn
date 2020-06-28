(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["organization-form-organization-form-module"],{

/***/ "./src/app/modal-word-list/modal-word-list.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modal-word-list/modal-word-list.module.ts ***!
  \***********************************************************/
/*! exports provided: ModalWordListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalWordListPageModule", function() { return ModalWordListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_word_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-word-list.page */ "./src/app/modal-word-list/modal-word-list.page.ts");






var ModalWordListPageModule = /** @class */ (function () {
    function ModalWordListPageModule() {
    }
    ModalWordListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            ],
            declarations: [_modal_word_list_page__WEBPACK_IMPORTED_MODULE_5__["ModalWordListPage"]],
            exports: [_modal_word_list_page__WEBPACK_IMPORTED_MODULE_5__["ModalWordListPage"]]
        })
    ], ModalWordListPageModule);
    return ModalWordListPageModule;
}());



/***/ }),

/***/ "./src/app/modal-word-list/modal-word-list.page.html":
/*!***********************************************************!*\
  !*** ./src/app/modal-word-list/modal-word-list.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Scelta opzione</ion-title>\n    <ion-button slot=\"start\" (click)=\"DismissNoChoice()\">\n      <ion-icon slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <div *ngIf=\"!Organizations || Organizations.length === 0\">\n      Nessuna opzione presente.\n    </div>\n    <div *ngIf=\"BaseOrganizations && BaseOrganizations.length > 0\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" size-sm>\n              <ion-item lines=\"none\">                \n                <ion-searchbar placeholder=\"Cerca\" (ionChange)=\"searchChange($event)\"></ion-searchbar>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n      </ion-grid>\n    </div>\n    <ion-grid *ngIf=\"Organizations && Organizations.length > 0\">\n      <ion-row>\n        <ion-col size=\"12\" size-sm>\n          <ion-virtual-scroll [items]=\"Organizations\">\n            <ion-item *virtualItem=\"let o\" lines=\"full\" approxItemHeight=\"57px\">\n              <ion-button color=\"primary\" (click)=\"onItemClick(o)\" slot=\"start\">\n                <ion-icon slot=\"icon-only\" name=\"checkmark-circle-outline\"></ion-icon>\n              </ion-button>\n              <ion-note slot=\"end\" class=\"ion-hide-sm-down\">\n                {{o.address}}, {{o.city}}, {{o.province}}\n              </ion-note>\n              <ion-label text-wrap>{{o.name}}</ion-label>\n            </ion-item>            \n          </ion-virtual-scroll>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/modal-word-list/modal-word-list.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/modal-word-list/modal-word-list.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsLXdvcmQtbGlzdC9tb2RhbC13b3JkLWxpc3QucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modal-word-list/modal-word-list.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/modal-word-list/modal-word-list.page.ts ***!
  \*********************************************************/
/*! exports provided: ModalWordListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalWordListPage", function() { return ModalWordListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_world_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/world.service */ "./src/app/services/world.service.ts");




var ModalWordListPage = /** @class */ (function () {
    function ModalWordListPage(ws, mc) {
        this.ws = ws;
        this.mc = mc;
        this.BaseOrganizations = [];
        this.Organizations = [];
    }
    ModalWordListPage.prototype.ngOnInit = function () {
    };
    ModalWordListPage.prototype.getList = function (kind) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.ws.asyncGetList('Compagnie').subscribe({
                next: function (ris) {
                    resolve(ris);
                },
                error: function (err) {
                    reject(err);
                }
            });
        });
    };
    ModalWordListPage.prototype.filterData = function (query) {
        var _this = this;
        var self = this;
        return new Promise(function (resolve, reject) {
            if (query && query !== '') {
                try {
                    resolve(self.BaseOrganizations.filter(function (obj) {
                        var srep = JSON.stringify(obj);
                        var regex = new RegExp("" + query, 'i');
                        return regex.test(srep);
                    }));
                }
                catch (e) {
                    resolve(self.BaseOrganizations);
                }
            }
            else {
                resolve(_this.BaseOrganizations);
            }
        });
    };
    ModalWordListPage.prototype.searchChange = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log(event.target.value);
                        _a = this;
                        return [4 /*yield*/, this.filterData(event.target.value)];
                    case 1:
                        _a.Organizations = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalWordListPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.getList('Compagnie')];
                    case 1:
                        _a.BaseOrganizations = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _b.sent();
                        this.BaseOrganizations = [];
                        return [3 /*break*/, 3];
                    case 3:
                        this.Organizations = this.BaseOrganizations;
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalWordListPage.prototype.DismissNoChoice = function () {
        this.mc.dismiss();
    };
    ModalWordListPage.prototype.onItemClick = function (organization) {
        this.mc.dismiss(organization);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ModalWordListPage.prototype, "BaseOrganizations", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ModalWordListPage.prototype, "Organizations", void 0);
    ModalWordListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-word-list',
            template: __webpack_require__(/*! ./modal-word-list.page.html */ "./src/app/modal-word-list/modal-word-list.page.html"),
            styles: [__webpack_require__(/*! ./modal-word-list.page.scss */ "./src/app/modal-word-list/modal-word-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_world_service__WEBPACK_IMPORTED_MODULE_3__["WorldService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ModalWordListPage);
    return ModalWordListPage;
}());



/***/ }),

/***/ "./src/app/organization-form/organization-form.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/organization-form/organization-form.module.ts ***!
  \***************************************************************/
/*! exports provided: OrganizationFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationFormPageModule", function() { return OrganizationFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _organization_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./organization-form.page */ "./src/app/organization-form/organization-form.page.ts");
/* harmony import */ var _modal_word_list_modal_word_list_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal-word-list/modal-word-list.module */ "./src/app/modal-word-list/modal-word-list.module.ts");
/* harmony import */ var _modal_word_list_modal_word_list_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal-word-list/modal-word-list.page */ "./src/app/modal-word-list/modal-word-list.page.ts");









var routes = [
    {
        path: '',
        component: _organization_form_page__WEBPACK_IMPORTED_MODULE_6__["OrganizationFormPage"]
    }
];
var OrganizationFormPageModule = /** @class */ (function () {
    function OrganizationFormPageModule() {
    }
    OrganizationFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _modal_word_list_modal_word_list_module__WEBPACK_IMPORTED_MODULE_7__["ModalWordListPageModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            entryComponents: [_modal_word_list_modal_word_list_page__WEBPACK_IMPORTED_MODULE_8__["ModalWordListPage"]],
            declarations: [_organization_form_page__WEBPACK_IMPORTED_MODULE_6__["OrganizationFormPage"]]
        })
    ], OrganizationFormPageModule);
    return OrganizationFormPageModule;
}());



/***/ }),

/***/ "./src/app/organization-form/organization-form.page.html":
/*!***************************************************************!*\
  !*** ./src/app/organization-form/organization-form.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button icon-only menuToggle=\"start\">\n          <ion-icon name=\"menu\"></ion-icon>\n      </ion-menu-button>          \n    </ion-buttons>\n    <ion-title>\n          Pratiche Web\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"OrganizationForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <p *ngIf=\"IsNew\"><a (click)=\"onCancelClick()\" [routerLink]=\"\">{{PageParams?.kind}}</a> | Nuova anagrafica</p>\n          <p *ngIf=\"! IsNew\"><a (click)=\"onCancelClick()\" [routerLink]=\"\">{{PageParams?.kind}}</a> | Anagrafica</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <h1 *ngIf=\"IsNew\">Nuova anagrafica</h1>\n          <h1 *ngIf=\"! IsNew\">Anagrafica</h1>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" size-sm>\n          <ion-item>\n            <ion-label>Nome:</ion-label>\n            <ion-input placeholder=\"Nome\" formControlName=\"name\"></ion-input> \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" size-md>\n          <ion-item>\n            <ion-label>Indirizzo:</ion-label>\n            <ion-input placeholder=\"Via e numero civico\" formControlName=\"address\"></ion-input> \n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\" size-md>\n          <ion-item>\n            <ion-label>Citt&agrave;:</ion-label>\n            <ion-input placeholder=\"Città\" formControlName=\"city\"></ion-input> \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" size-md>\n          <ion-item>\n            <ion-label>Provincia:</ion-label>\n            <ion-input placeholder=\"Provincia\" formControlName=\"province\"></ion-input> \n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\" size-md>\n          <ion-item>\n            <ion-label>CAP:</ion-label>\n            <ion-input placeholder=\"CAP\" formControlName=\"zip\"></ion-input> \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" size-md>\n          <ion-item>\n            <ion-label>Codice fiscale:</ion-label>\n            <ion-input placeholder=\"Codice fiscale\" formControlName=\"fiscalCode\"></ion-input> \n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\" size-md>\n          <ion-item>\n            <ion-label>Partita IVA:</ion-label>\n            <ion-input placeholder=\"Partita IVA\" formControlName=\"vat\"></ion-input> \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" size-md>\n          <ion-item>\n            <ion-label>E-mail:</ion-label>\n            <ion-input placeholder=\"E-mail\" formControlName=\"email\"></ion-input> \n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\" size-md>\n          <ion-item>\n            <ion-label>Telefono:</ion-label>\n            <ion-input placeholder=\"Telefono\" formControlName=\"phoneNumber\"></ion-input> \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"PageParams.kind !== 'Compagnie'\">\n        <ion-col size=\"auto\" class=\"ion-align-items-center\">\n          <h2>Compagnie</h2>\n        </ion-col>\n        <ion-col>\n          <ion-button color=\"tertiary\" (click)=\"AddLinkClick()\">\n            <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngFor=\"let c of Companies\">\n        <ion-col>\n          <ion-item>\n            <ion-button color=\"danger\" (click)=\"DeleteLink(c)\">\n              <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n            </ion-button>\n            <ion-label>\n              {{c.name}}\n            </ion-label>\n            <ion-note slot=\"end\">\n              {{c.city}} {{c.address}}\n            </ion-note>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" size-sm>\n          <div>\n            <ion-button color=\"primary\" [disabled]=\"!OrganizationForm.valid\" (click)=\"onSaveClick()\">\n              <ion-icon slot=\"icon-only\" name=\"save\"></ion-icon>\n            </ion-button>\n            <ion-button color=\"tertiary\" (click)=\"onCancelClick()\">\n              <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/organization-form/organization-form.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/organization-form/organization-form.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZ2FuaXphdGlvbi1mb3JtL29yZ2FuaXphdGlvbi1mb3JtLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/organization-form/organization-form.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/organization-form/organization-form.page.ts ***!
  \*************************************************************/
/*! exports provided: OrganizationFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationFormPage", function() { return OrganizationFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _models_organization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/organization */ "./src/app/models/organization.ts");
/* harmony import */ var _models_service_status_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/service-status.enum */ "./src/app/models/service-status.enum.ts");
/* harmony import */ var _services_world_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/world.service */ "./src/app/services/world.service.ts");
/* harmony import */ var _modal_word_list_modal_word_list_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal-word-list/modal-word-list.page */ "./src/app/modal-word-list/modal-word-list.page.ts");









var OrganizationFormPage = /** @class */ (function () {
    function OrganizationFormPage(service, fb, tc, ar, router, mc) {
        this.service = service;
        this.fb = fb;
        this.tc = tc;
        this.ar = ar;
        this.router = router;
        this.mc = mc;
        this.PageParams = {
            kind: '',
            id: 'new'
        };
        this.Companies = [];
        this.OrganizationForm = fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: [''],
            city: [''],
            zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\d{5}$/)],
            province: [''],
            fiscalCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[A-Z]{6}\d{2}[A-Z]{1}\d{2}[A-Z]{1}\d{3}[A-Z]{1}$/)],
            vat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\d{11}$/)],
            email: [''],
            phoneNumber: ['']
        });
    }
    OrganizationFormPage.prototype.GetParams = function (route) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.Route$ = route.params.subscribe(function (params) {
                var resp = {
                    kind: params['world'],
                    id: params['id']
                };
                resolve(resp);
            });
        });
    };
    OrganizationFormPage.prototype.GetOrganization = function (kind, id, service) {
        var find = service.asyncGet;
        return new Promise(function (resolve, reject) {
            find.bind(service)(kind, id).subscribe({
                next: function (ris) {
                    resolve(ris);
                },
                error: function (err) {
                    reject(err);
                }
            });
        });
    };
    OrganizationFormPage.prototype.loadData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.GetOrganization(this.PageParams.kind, this.PageParams.id, this.service)];
                    case 1:
                        _a.Org = _b.sent();
                        this.Companies = this.Org.companies || [];
                        this.OrganizationForm.patchValue(this.Org);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _b.sent();
                        this.Org = null;
                        this.Companies = [];
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OrganizationFormPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, e_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        _a = this;
                        return [4 /*yield*/, this.GetParams(this.ar)];
                    case 1:
                        _a.PageParams = _b.sent();
                        this.IsNew = this.PageParams.id === 'new';
                        if (!!this.IsNew) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.loadData()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        e_2 = _b.sent();
                        this.PageParams = {
                            kind: '',
                            id: ''
                        };
                        this.Org = null;
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    OrganizationFormPage.prototype.ngOnDestroy = function () {
        if (this.Route$) {
            this.Route$.unsubscribe();
        }
    };
    OrganizationFormPage.prototype.onCancelClick = function () {
        this.router.navigate(['organizations', this.PageParams.kind]);
    };
    OrganizationFormPage.prototype.SaveOrganization = function (org, isNew) {
        var self = this;
        return new Promise(function (resolve, reject) {
            if (isNew) {
                self.service.asyncPost(org).subscribe({
                    next: function (ris) {
                        self.PageParams.id = ris.replace(/\"/g, '');
                        self.IsNew = false;
                        resolve(_models_service_status_enum__WEBPACK_IMPORTED_MODULE_6__["ServiceStatus"].OK);
                    },
                    error: function (err) {
                        reject(err);
                    }
                });
            }
            else {
                self.service.asyncPut(org).subscribe({
                    next: function (ris) {
                        resolve(ris);
                    },
                    error: function (err) {
                        reject(err);
                    }
                });
            }
        });
    };
    OrganizationFormPage.prototype.ShowMessage = function (message) {
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
    OrganizationFormPage.prototype.FillFields = function (org, fg) {
        var formObj = fg.value;
        org.name = formObj.name;
        org.kind = this.PageParams.kind;
        org.address = formObj.address;
        org.city = formObj.city;
        org.fiscalCode = formObj.fiscalCode;
        org.province = formObj.province;
        org.vat = formObj.vat;
        org.zip = formObj.zip;
        org.email = formObj.email;
        org.phoneNumber = formObj.phoneNumber;
        return org;
    };
    OrganizationFormPage.prototype.onSaveClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var org, result, e_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.IsNew) {
                            org = new _models_organization__WEBPACK_IMPORTED_MODULE_5__["Organization"]();
                        }
                        else {
                            org = this.Org;
                        }
                        org = this.FillFields(org, this.OrganizationForm);
                        org.companies = this.Companies;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.SaveOrganization(org, this.IsNew)];
                    case 2:
                        result = _a.sent();
                        this.ShowMessage('Salvataggio dati completato');
                        if (result === _models_service_status_enum__WEBPACK_IMPORTED_MODULE_6__["ServiceStatus"].OK) {
                            this.router.navigate(['organizations', this.PageParams.kind, this.PageParams.id]);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_3 = _a.sent();
                        this.ShowMessage("C'\u00E8 stato un errore. Riprovare! " + e_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    OrganizationFormPage.prototype.CreateLink = function (org) {
        this.Companies.push(org);
    };
    OrganizationFormPage.prototype.DeleteLink = function (org) {
        this.Companies = this.Companies.filter(function (obj) { return obj._id !== org._id; });
    };
    OrganizationFormPage.prototype.AddLinkClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.mc.create({
                            component: _modal_word_list_modal_word_list_page__WEBPACK_IMPORTED_MODULE_8__["ModalWordListPage"]
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
                            this.CreateLink(data);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], OrganizationFormPage.prototype, "Companies", void 0);
    OrganizationFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-organization-form',
            template: __webpack_require__(/*! ./organization-form.page.html */ "./src/app/organization-form/organization-form.page.html"),
            styles: [__webpack_require__(/*! ./organization-form.page.scss */ "./src/app/organization-form/organization-form.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_world_service__WEBPACK_IMPORTED_MODULE_7__["WorldService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], OrganizationFormPage);
    return OrganizationFormPage;
}());



/***/ })

}]);
//# sourceMappingURL=organization-form-organization-form-module.js.map