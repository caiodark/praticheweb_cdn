(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-form-customer-form-module"],{

/***/ "./src/app/customer-form/customer-form.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/customer-form/customer-form.module.ts ***!
  \*******************************************************/
/*! exports provided: CustomerFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerFormPageModule", function() { return CustomerFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _customer_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-form.page */ "./src/app/customer-form/customer-form.page.ts");







var routes = [
    {
        path: '',
        component: _customer_form_page__WEBPACK_IMPORTED_MODULE_6__["CustomerFormPage"]
    }
];
var CustomerFormPageModule = /** @class */ (function () {
    function CustomerFormPageModule() {
    }
    CustomerFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_customer_form_page__WEBPACK_IMPORTED_MODULE_6__["CustomerFormPage"]]
        })
    ], CustomerFormPageModule);
    return CustomerFormPageModule;
}());



/***/ }),

/***/ "./src/app/customer-form/customer-form.page.html":
/*!*******************************************************!*\
  !*** ./src/app/customer-form/customer-form.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button icon-only menuToggle=\"start\">\n          <ion-icon name=\"menu\"></ion-icon>\n      </ion-menu-button>          \n    </ion-buttons>\n    <ion-title>\n      Pratiche Web\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"customerForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <p *ngIf=\"isNew\"><a (click)=\"onCancelClick()\" [routerLink]=\"\">Lista Clienti</a> | Nuovo cliente</p>\n          <p *ngIf=\"! isNew\"><a (click)=\"onCancelClick()\" [routerLink]=\"\">Lista Clienti</a> | Cliente</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item lines=\"none\">\n            <ion-avatar slot=\"start\">\n              <img *ngIf=\"avatar\" src=\"/api/attachments/avatar/{{avatar.token}}/{{avatar._id}}/attachment\">\n            </ion-avatar>\n            <ion-label>\n              <h1 *ngIf=\"isNew\">Nuovo cliente</h1>\n              <h1 *ngIf=\"! isNew\">Cliente</h1>        \n            </ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" size-sm>\n          <ion-item>\n            <ion-label>Nome:</ion-label>\n            <ion-input placeholder=\"Nome\" formControlName=\"firstName\"></ion-input> \n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\" size-sm>\n          <ion-item>\n            <ion-label>Cognome:</ion-label>\n            <ion-input placeholder=\"Nome\" formControlName=\"lastName\"></ion-input> \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" size-sm>\n          <ion-item>\n            <ion-label>Codice fiscale:</ion-label>\n            <ion-input placeholder=\"Codice fiscale\" formControlName=\"fiscalCode\"></ion-input> \n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\" size-sm>\n          <ion-item>\n            <ion-label>P. IVA:</ion-label>\n            <ion-input placeholder=\"Partita IVA\" formControlName=\"vatNumber\"></ion-input> \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <h4>Nascita</h4>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" size-sm>\n          <ion-item>\n            <ion-label>Data nascita:</ion-label>\n            <ion-input type=\"date\" placeholder=\"Data di nascita\" formControlName=\"birth_date\"></ion-input> \n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\" size-sm>\n          <ion-item>\n            <ion-label>Luogo di nascita:</ion-label>\n            <ion-input placeholder=\"Luogo di nascita\" formControlName=\"birth_city\"></ion-input> \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" size-sm>\n          <ion-item>\n            <ion-label>Provincia di nascita:</ion-label>\n            <ion-input placeholder=\"Provincia di nascita\" formControlName=\"birth_province\"></ion-input> \n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\" size-sm>\n          <ion-item>\n            <ion-label>Nazione di nascita:</ion-label>\n            <ion-input placeholder=\"Nazione di nascita\" formControlName=\"birth_nation\"></ion-input> \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <h4>Residenza</h4>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" size-sm>\n          <ion-item>\n            <ion-label>Indirizzo:</ion-label>\n            <ion-input placeholder=\"Via e civico\" formControlName=\"address_address\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\" size-sm>\n          <ion-item>\n            <ion-label>Citt&agrave;:</ion-label>\n            <ion-input placeholder=\"Città di residenza\" formControlName=\"address_city\"></ion-input> \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"8\" size-sm>\n          <ion-item>\n            <ion-label>Provincia:</ion-label>\n            <ion-input placeholder=\"Provincia\" formControlName=\"address_province\"></ion-input> \n          </ion-item>\n        </ion-col>\n        <ion-col size=\"8\" size-sm>\n          <ion-item>\n            <ion-label>CAP:</ion-label>\n            <ion-input placeholder=\"CAP\" formControlName=\"address_zip\"></ion-input> \n          </ion-item>\n        </ion-col>\n        <ion-col size=\"8\" size-sm>\n          <ion-item>\n            <ion-label>Nazione:</ion-label>\n            <ion-input placeholder=\"Nazione\" formControlName=\"address_nation\"></ion-input> \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <h4>Contatti</h4>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" size-sm>\n          <ion-item>\n            <ion-label>Email 1:</ion-label>\n            <ion-input placeholder=\"Email principale\" formControlName=\"contacts_email1\"></ion-input> \n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\" size-sm>\n          <ion-item>\n            <ion-label>Email 2:</ion-label>\n            <ion-input placeholder=\"Email secondaria\" formControlName=\"contacts_email2\"></ion-input> \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"8\" size-sm>\n          <ion-item>\n            <ion-label>Fax:</ion-label>\n            <ion-input placeholder=\"Fax\" formControlName=\"contacts_fax\"></ion-input> \n          </ion-item>\n        </ion-col>\n        <ion-col size=\"8\" size-sm>\n          <ion-item>\n            <ion-label>Telefono 1:</ion-label>\n            <ion-input placeholder=\"Cellulare\" formControlName=\"contacts_phone1\"></ion-input> \n          </ion-item>\n        </ion-col>\n        <ion-col size=\"8\" size-sm>\n          <ion-item>\n            <ion-label>Telefono 2:</ion-label>\n            <ion-input placeholder=\"Altro recapito\" formControlName=\"contacts_phone2\"></ion-input> \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <h4>Altro</h4>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"8\" size-sm>\n          <ion-item>\n            <ion-label>Carta d'identit&agrave;:</ion-label>\n            <ion-input placeholder=\"Carda di identità\" formControlName=\"idCard\"></ion-input> \n          </ion-item>\n        </ion-col>\n        <ion-col size=\"8\" size-sm>\n          <ion-item>\n            <ion-label>Passaporto:</ion-label>\n            <ion-input placeholder=\"Passaporto\" formControlName=\"passport\"></ion-input> \n          </ion-item>\n        </ion-col>\n        <ion-col size=\"8\" size-sm>\n          <ion-item>\n            <ion-label>Patente:</ion-label>\n            <ion-input placeholder=\"Patente\" formControlName=\"driveLicense\"></ion-input> \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngFor=\"let k of kinds\">\n        <ion-col>\n          <ion-item>\n            <ion-button color=\"primary\" slot=\"start\" (click)=\"onPickerClick(k)\">\n              <ion-icon slot=\"icon-only\" name=\"arrow-dropdown\"></ion-icon>\n            </ion-button>\n            <ion-label>{{k.name}}:</ion-label>\n            <ion-input placeholder=\"--\" [formControlName]=\"k._id\" readonly=\"true\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"stacked\">Note:</ion-label>\n            <ion-textarea placeholder=\"Note\" formControlName=\"notes\"></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"token && token !== ''\" class=\"ion-align-items-center\">\n        <ion-col size=\"auto\">\n            <h1>Allegati</h1>\n        </ion-col>\n        <ion-col>\n            <ion-button color=\"primary\" (click)=\"onAddAttachmentClick()\">\n              <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n            </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"token && token !== ''\">\n        <ion-col>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngFor=\"let a of attachments\">\n        <ion-col>\n          <ion-item>\n            <ion-label text-wrap>\n              <ion-text color=\"tertiary\">{{a.name}}</ion-text>\n            </ion-label>\n            <ion-note slot=\"end\">{{a.tags}}</ion-note>\n            <ion-button color=\"tertiary\" slot=\"start\" href=\"http://pratiche.ares/api/attachments/customer/{{token}}/{{a._id}}/attachment\">\n              <ion-icon slot=\"icon-only\" name=\"cloud-download\"></ion-icon>\n            </ion-button>\n            <ion-button color=\"danger\" slot=\"end\" (click)=\"onDeleteAttachmentClick(a)\">\n              <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n            </ion-button>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"attachments && attachments.length > 0\">\n        <ion-col>\n          <ion-button color=\"primary\" (click)=\"onAddAttachmentClick()\">\n            <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" size-sm>\n          <div>\n            <ion-button color=\"primary\" [disabled]=\"!customerForm.valid\" (click)=\"onSaveClick()\">\n              <ion-icon slot=\"icon-only\" name=\"save\"></ion-icon>\n            </ion-button>\n            <ion-button color=\"tertiary\" (click)=\"onCancelClick()\">\n              <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/customer-form/customer-form.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/customer-form/customer-form.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyLWZvcm0vY3VzdG9tZXItZm9ybS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/customer-form/customer-form.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/customer-form/customer-form.page.ts ***!
  \*****************************************************/
/*! exports provided: CustomerFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerFormPage", function() { return CustomerFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _models_customer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/customer */ "./src/app/models/customer.ts");
/* harmony import */ var _models_service_status_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/service-status.enum */ "./src/app/models/service-status.enum.ts");
/* harmony import */ var _services_option_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/option.service */ "./src/app/services/option.service.ts");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _models_attachment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/attachment */ "./src/app/models/attachment.ts");
/* harmony import */ var _services_attachments_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/attachments.service */ "./src/app/services/attachments.service.ts");












var CustomerFormPage = /** @class */ (function () {
    function CustomerFormPage(ar, router, tc, os, pc, cs, as, fb, ac) {
        this.ar = ar;
        this.router = router;
        this.tc = tc;
        this.os = os;
        this.pc = pc;
        this.cs = cs;
        this.as = as;
        this.fb = fb;
        this.ac = ac;
        this.selections = new Map();
        this.customerForm = fb.group({
            firstName: [''],
            lastName: [''],
            fiscalCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[A-Z]{6}\d{2}[A-Z]{1}\d{2}[A-Z]{1}\d{3}[A-Z]{1}$/)],
            vatNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\d{11}$/)],
            birth_date: [''],
            birth_city: [''],
            birth_province: [''],
            birth_nation: [''],
            idCard: [''],
            passport: [''],
            driveLicense: [''],
            address_address: [''],
            address_city: [''],
            address_province: [''],
            address_nation: [''],
            address_zip: [''],
            notes: [''],
            contacts_email1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
            contacts_email2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
            contacts_fax: [''],
            contacts_phone1: [''],
            contacts_phone2: ['']
        });
    }
    CustomerFormPage.prototype.getToken = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            var paramName = 'id';
            self.route$ = self.ar.params.subscribe(function (params) {
                resolve(params[paramName]);
            });
        });
    };
    CustomerFormPage.prototype.getKinds = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.os.asyncGetKinds().subscribe({
                next: function (kinds) {
                    resolve(kinds);
                },
                error: function (err) {
                    reject(err);
                }
            });
        });
    };
    CustomerFormPage.prototype.getOptions = function (kind) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.os.asyncGetOptions(kind._id).subscribe({
                next: function (opts) {
                    console.log(opts);
                    resolve(opts);
                },
                error: function (err) {
                    reject(err);
                }
            });
        });
    };
    CustomerFormPage.prototype.getAttachments = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            if (self.token !== 'new') {
                self.as.asyncGetAttachments(self.token, 'customer').subscribe({
                    next: function (atchs) {
                        resolve(atchs);
                    },
                    error: function (err) {
                        reject(err);
                    }
                });
            }
            else {
                resolve([]);
            }
        });
    };
    CustomerFormPage.prototype.getAvatar = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            if (self.token !== 'new') {
                self.as.asyncGetAttachments(self.token, 'avatar').subscribe({
                    next: function (atchs) {
                        var mayAtchs = atchs.sort(function (a, b) {
                            if (a._id > b._id) {
                                return -1;
                            }
                            else if (a._id < b._id) {
                                return 1;
                            }
                            return 0;
                        });
                        if (mayAtchs && mayAtchs.length > 0) {
                            resolve(mayAtchs[0]);
                        }
                        else {
                            resolve(null);
                        }
                    },
                    error: function (err) {
                        reject(err);
                    }
                });
            }
            else {
                resolve(null);
            }
        });
    };
    CustomerFormPage.prototype.initOptions = function () {
        var _this = this;
        var self = this;
        return new Promise(function (resolve) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.kinds.reduce(function (promise, k) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var opts;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.customerForm.addControl(k._id, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''));
                                        return [4 /*yield*/, promise];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, this.getOptions(k)];
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
    CustomerFormPage.prototype.getCustomer = function (token) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.cs.asyncGetCustomer(token).subscribe({
                next: function (cust) {
                    resolve(cust);
                },
                error: function (err) {
                    reject(err);
                }
            });
        });
    };
    CustomerFormPage.prototype.initForm = function (k) {
        var obj = {};
        if (k.address) {
            obj.address_address = k.address.address;
            obj.address_city = k.address.city;
            obj.address_nation = k.address.nation;
            obj.address_province = k.address.province;
            obj.address_zip = k.address.zip;
        }
        if (k.contacts) {
            obj.contacts_email1 = k.contacts.email1;
            obj.contacts_email2 = k.contacts.email2;
            obj.contacts_fax = k.contacts.fax;
            obj.contacts_phone1 = k.contacts.phone1;
            obj.contacts_phone2 = k.contacts.phone2;
        }
        if (k.birth) {
            obj.birth_city = k.birth.city;
            obj.birth_date = k.birth.date;
            obj.birth_nation = k.birth.nation;
            obj.birth_province = k.birth.province;
        }
        obj.firstName = k.firstName;
        obj.lastName = k.lastName;
        obj.fiscalCode = k.fiscalCode;
        obj.vatNumber = k.vatNumber;
        obj.birth = k.birth;
        obj.idCard = k.idCard;
        obj.passport = k.passport;
        obj.driveLicense = k.driveLicense;
        obj.notes = k.notes;
        obj.addr = k.address;
        this.customerForm.patchValue(obj);
    };
    CustomerFormPage.prototype.initSelections = function () {
        var _this = this;
        if (this.kinds && this.kinds.length > 0) {
            var values_1 = [];
            this.kinds.forEach(function (kind) {
                var value = _this.selections.get(kind._id) || '';
                var opts = _this.options.get(kind._id);
                if (opts && opts.length > 0) {
                    var mayOpt = opts.filter(function (obj) { return obj._id === value; });
                    if (mayOpt && mayOpt.length > 0) {
                        values_1[kind._id] = mayOpt[0].name;
                    }
                }
            });
            this.customerForm.patchValue(values_1);
        }
    };
    CustomerFormPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_f) {
                switch (_f.label) {
                    case 0:
                        this.options = new Map();
                        _f.label = 1;
                    case 1:
                        _f.trys.push([1, 10, , 11]);
                        _a = this;
                        return [4 /*yield*/, this.getToken()];
                    case 2:
                        _a.token = _f.sent();
                        if (this.token === 'new') {
                            this.isNew = true;
                        }
                        _b = this;
                        return [4 /*yield*/, this.getKinds()];
                    case 3:
                        _b.kinds = _f.sent();
                        if (!(this.kinds && this.kinds.length > 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.initOptions()];
                    case 4:
                        _f.sent();
                        _f.label = 5;
                    case 5:
                        if (!!this.isNew) return [3 /*break*/, 7];
                        _c = this;
                        return [4 /*yield*/, this.getCustomer(this.token)];
                    case 6:
                        _c.customer = _f.sent();
                        this.selections = this.customer.options;
                        this.initForm(this.customer);
                        this.initSelections();
                        _f.label = 7;
                    case 7:
                        _d = this;
                        return [4 /*yield*/, this.getAttachments()];
                    case 8:
                        _d.attachments = _f.sent();
                        _e = this;
                        return [4 /*yield*/, this.getAvatar()];
                    case 9:
                        _e.avatar = _f.sent();
                        return [3 /*break*/, 11];
                    case 10:
                        e_1 = _f.sent();
                        console.error(e_1);
                        this.token = '';
                        this.isNew = true;
                        this.kinds = [];
                        return [3 /*break*/, 11];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    CustomerFormPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    CustomerFormPage.prototype.ngOnDestroy = function () {
        if (this.route$) {
            this.route$.unsubscribe();
        }
    };
    CustomerFormPage.prototype.onCancelClick = function () {
        this.router.navigate(['home']);
    };
    CustomerFormPage.prototype.showMessage = function (message) {
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
    CustomerFormPage.prototype.saveCustomer = function (customer) {
        var self = this;
        return new Promise(function (resolve, reject) {
            if (self.isNew) {
                self.cs.asyncPostCustomer(customer).subscribe({
                    next: function (status) {
                        if (status.status === _models_service_status_enum__WEBPACK_IMPORTED_MODULE_6__["ServiceStatus"].OK) {
                            resolve(status);
                        }
                        else {
                            reject(status);
                        }
                    },
                    error: function (err) {
                        reject(err);
                    }
                });
            }
            else {
                self.cs.asyncPutCustomer(customer).subscribe({
                    next: function (status) {
                        if (status === _models_service_status_enum__WEBPACK_IMPORTED_MODULE_6__["ServiceStatus"].OK) {
                            var response = new _services_customer_service__WEBPACK_IMPORTED_MODULE_8__["ServiceResponse"]();
                            response.status = status;
                            resolve(response);
                        }
                        else {
                            reject(status);
                        }
                    },
                    error: function (err) {
                        reject(err);
                    }
                });
            }
        });
    };
    CustomerFormPage.prototype.generateCustomer = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            var k = new _models_customer__WEBPACK_IMPORTED_MODULE_5__["Customer"]();
            var obj = self.customerForm.value;
            var addr = new _models_customer__WEBPACK_IMPORTED_MODULE_5__["Address"]();
            addr.address = obj.address_address;
            addr.city = obj.address_city;
            addr.nation = obj.address_nation;
            addr.province = obj.address_province;
            addr.zip = obj.address_zip;
            var contacts = new _models_customer__WEBPACK_IMPORTED_MODULE_5__["Contacts"]();
            contacts.email1 = obj.contacts_email1;
            contacts.email2 = obj.contacts_email2;
            contacts.fax = obj.contacts_fax;
            contacts.phone1 = obj.contacts_phone1;
            contacts.phone2 = obj.contacts_phone2;
            var birth = new _models_customer__WEBPACK_IMPORTED_MODULE_5__["BirthData"]();
            birth.date = obj.birth_date;
            birth.city = obj.birth_city;
            birth.province = obj.birth_province;
            birth.nation = obj.birth_nation;
            k.firstName = obj.firstName;
            k.lastName = obj.lastName;
            k.fiscalCode = obj.fiscalCode;
            k.vatNumber = obj.vatNumber;
            k.birth = obj.birth;
            k.idCard = obj.idCard;
            k.passport = obj.passport;
            k.driveLicense = obj.driveLicense;
            k.options = self.selections;
            k.birth = birth;
            k.notes = obj.notes;
            k.address = addr;
            k.contacts = contacts;
            console.log(k);
            if (self.isNew) {
                resolve(k);
            }
            else {
                Object.assign(self.customer, k);
                resolve(self.customer);
            }
        });
    };
    CustomerFormPage.prototype.onSaveClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var customer, response, e_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.generateCustomer()];
                    case 1:
                        customer = _a.sent();
                        return [4 /*yield*/, this.saveCustomer(customer)];
                    case 2:
                        response = _a.sent();
                        console.log(response.token);
                        this.showMessage('Salvataggio avvenuto con successo.');
                        if (this.isNew) {
                            this.router.navigate(['/home']);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        this.showMessage('Errore nel salvataggio. Riprovare');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CustomerFormPage.prototype.onPickerClick = function (kind) {
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
                                            _this.customerForm.get(kind._id).setValue(selected[kind.name].text);
                                            _this.selections.set(kind._id, selected[kind.name].value);
                                        })
                                    },
                                    {
                                        text: 'Annulla'
                                    },
                                    {
                                        text: 'Svuota',
                                        handler: (function (selected) {
                                            _this.customerForm.get(kind._id).setValue('');
                                            _this.selections.set(kind._id, '');
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
    CustomerFormPage.prototype.onAddAttachmentClick = function () {
        this.router.navigate(['customer-form', this.token, 'attachments']);
    };
    CustomerFormPage.prototype.deleteAttachment = function (attachment) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.as.asyncDeleteAttachment(attachment).subscribe({
                next: function (ris) {
                    resolve(ris);
                },
                error: function (err) {
                    resolve(_models_service_status_enum__WEBPACK_IMPORTED_MODULE_6__["ServiceStatus"].FAILED);
                }
            });
        });
    };
    CustomerFormPage.prototype.confirmDelete = function (attachment) {
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
                                            var ss, _a, e_3;
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                switch (_b.label) {
                                                    case 0:
                                                        _b.trys.push([0, 7, , 9]);
                                                        return [4 /*yield*/, this.deleteAttachment(attachment)];
                                                    case 1:
                                                        ss = _b.sent();
                                                        if (!(ss === _models_service_status_enum__WEBPACK_IMPORTED_MODULE_6__["ServiceStatus"].OK)) return [3 /*break*/, 4];
                                                        _a = this;
                                                        return [4 /*yield*/, this.getAttachments()];
                                                    case 2:
                                                        _a.attachments = _b.sent();
                                                        return [4 /*yield*/, self.showMessage('Allegato correttamente cancellato.')];
                                                    case 3:
                                                        _b.sent();
                                                        return [3 /*break*/, 6];
                                                    case 4: return [4 /*yield*/, self.showMessage('Si è verificato un problema. Riprova!')];
                                                    case 5:
                                                        _b.sent();
                                                        _b.label = 6;
                                                    case 6: return [3 /*break*/, 9];
                                                    case 7:
                                                        e_3 = _b.sent();
                                                        return [4 /*yield*/, self.showMessage("Si \u00E8 verificato un problema " + e_3 + ". Riprova!")];
                                                    case 8:
                                                        _b.sent();
                                                        return [3 /*break*/, 9];
                                                    case 9: return [2 /*return*/];
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
    CustomerFormPage.prototype.onDeleteAttachmentClick = function (attachment) {
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], CustomerFormPage.prototype, "customerForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_customer__WEBPACK_IMPORTED_MODULE_5__["Customer"])
    ], CustomerFormPage.prototype, "customer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CustomerFormPage.prototype, "kinds", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Map)
    ], CustomerFormPage.prototype, "options", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Map)
    ], CustomerFormPage.prototype, "selections", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CustomerFormPage.prototype, "attachments", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_attachment__WEBPACK_IMPORTED_MODULE_9__["Attachment"])
    ], CustomerFormPage.prototype, "avatar", void 0);
    CustomerFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-form',
            template: __webpack_require__(/*! ./customer-form.page.html */ "./src/app/customer-form/customer-form.page.html"),
            styles: [__webpack_require__(/*! ./customer-form.page.scss */ "./src/app/customer-form/customer-form.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _services_option_service__WEBPACK_IMPORTED_MODULE_7__["OptionService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"],
            _services_customer_service__WEBPACK_IMPORTED_MODULE_8__["CustomerService"],
            _services_attachments_service__WEBPACK_IMPORTED_MODULE_10__["AttachmentsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], CustomerFormPage);
    return CustomerFormPage;
}());



/***/ }),

/***/ "./src/app/models/kind.ts":
/*!********************************!*\
  !*** ./src/app/models/kind.ts ***!
  \********************************/
/*! exports provided: Kind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kind", function() { return Kind; });
var Kind = /** @class */ (function () {
    function Kind() {
    }
    return Kind;
}());



/***/ }),

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_kind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/kind */ "./src/app/models/kind.ts");
/* harmony import */ var _models_option__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/option */ "./src/app/models/option.ts");






var OptionService = /** @class */ (function () {
    function OptionService(_http) {
        this._http = _http;
    }
    OptionService.prototype.asyncGetKinds = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var session = window.localStorage.getItem('_session');
            if (!session) {
                session = 'loggedout';
            }
            _this._http.get("/api/setup/kinds", {
                headers: {
                    's-t': session
                },
                observe: 'response'
            }).subscribe(function (data) {
                var primitiveKinds = data.body;
                console.log(data.body);
                var kinds = primitiveKinds.map(function (obj) {
                    var k = new _models_kind__WEBPACK_IMPORTED_MODULE_4__["Kind"]();
                    k.name = obj.name;
                    k.deleted = obj.deleted;
                    k._id = obj._id;
                    return k;
                });
                observer.next(kinds);
                return { unsubscribe: function () { } };
            }, function (error) {
                console.log(error);
                observer.error(error);
                return { unsubscribe: function () { } };
            });
        });
    };
    OptionService.prototype.asyncGetOptions = function (kindId) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var session = window.localStorage.getItem('_session');
            if (!session) {
                session = 'loggedout';
            }
            _this._http.get("/api/setup/options/" + kindId + "/", {
                headers: {
                    's-t': session
                },
                observe: 'response'
            }).subscribe(function (data) {
                var primitiveOptions = data.body;
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
    OptionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], OptionService);
    return OptionService;
}());



/***/ })

}]);
//# sourceMappingURL=customer-form-customer-form-module.js.map