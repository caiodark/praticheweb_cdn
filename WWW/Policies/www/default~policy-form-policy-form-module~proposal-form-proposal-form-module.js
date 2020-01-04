(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~policy-form-policy-form-module~proposal-form-proposal-form-module"],{

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

/***/ "./src/app/modals/organization-modal/organization-modal.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/modals/organization-modal/organization-modal.module.ts ***!
  \************************************************************************/
/*! exports provided: OrganizationModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationModalPageModule", function() { return OrganizationModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _organization_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./organization-modal.page */ "./src/app/modals/organization-modal/organization-modal.page.ts");







var routes = [
    {
        path: '',
        component: _organization_modal_page__WEBPACK_IMPORTED_MODULE_6__["OrganizationModalPage"]
    }
];
var OrganizationModalPageModule = /** @class */ (function () {
    function OrganizationModalPageModule() {
    }
    OrganizationModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_organization_modal_page__WEBPACK_IMPORTED_MODULE_6__["OrganizationModalPage"]]
        })
    ], OrganizationModalPageModule);
    return OrganizationModalPageModule;
}());



/***/ }),

/***/ "./src/app/modals/organization-modal/organization-modal.page.html":
/*!************************************************************************!*\
  !*** ./src/app/modals/organization-modal/organization-modal.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Scelta opzione</ion-title>\n    <ion-button slot=\"start\" (click)=\"DismissNoChoice()\">\n      <ion-icon slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n  \n<ion-content>\n  <div class=\"ion-padding\">\n    <div *ngIf=\"!Organizations || Organizations.length === 0\">\n      Nessuna opzione presente.\n    </div>\n    <div *ngIf=\"BaseOrganizations && BaseOrganizations.length > 0\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" size-sm>\n            <ion-item lines=\"none\">                \n              <ion-searchbar placeholder=\"Cerca\" (ionChange)=\"searchChange($event)\"></ion-searchbar>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <ion-grid *ngIf=\"Organizations && Organizations.length > 0\">\n      <ion-row>\n        <ion-col size=\"12\" size-sm>\n          <ion-virtual-scroll [items]=\"Organizations\">\n            <ion-item *virtualItem=\"let o\" lines=\"full\" approxItemHeight=\"57px\">\n              <ion-button color=\"primary\" (click)=\"onItemClick(o)\" slot=\"start\">\n                <ion-icon slot=\"icon-only\" name=\"checkmark-circle-outline\"></ion-icon>\n              </ion-button>\n              <ion-note slot=\"end\" class=\"ion-hide-sm-down\">\n                {{o.address}}, {{o.city}}, {{o.province}}\n              </ion-note>\n              <ion-label text-wrap>{{o.name}}</ion-label>\n            </ion-item>            \n          </ion-virtual-scroll>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/modals/organization-modal/organization-modal.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/modals/organization-modal/organization-modal.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9vcmdhbml6YXRpb24tbW9kYWwvb3JnYW5pemF0aW9uLW1vZGFsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modals/organization-modal/organization-modal.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modals/organization-modal/organization-modal.page.ts ***!
  \**********************************************************************/
/*! exports provided: OrganizationModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationModalPage", function() { return OrganizationModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var OrganizationModalPage = /** @class */ (function () {
    function OrganizationModalPage(mc) {
        this.mc = mc;
        this.BaseOrganizations = [];
        this.Organizations = [];
    }
    OrganizationModalPage.prototype.ngOnInit = function () {
    };
    OrganizationModalPage.prototype.ionViewWillEnter = function () {
        this.Organizations = this.BaseOrganizations;
    };
    OrganizationModalPage.prototype.filterData = function (query) {
        var _this = this;
        var self = this;
        return new Promise(function (resolve, reject) {
            if (query && query !== '') {
                try {
                    var regex_1 = new RegExp("" + query, 'i');
                    resolve(self.BaseOrganizations.filter(function (obj) {
                        var srep = JSON.stringify(obj);
                        return regex_1.test(srep);
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
    OrganizationModalPage.prototype.searchChange = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.filterData(event.target.value)];
                    case 1:
                        _a.Organizations = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrganizationModalPage.prototype.onItemClick = function (o) {
        this.mc.dismiss(o);
    };
    OrganizationModalPage.prototype.DismissNoChoice = function () {
        this.mc.dismiss();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], OrganizationModalPage.prototype, "Organizations", void 0);
    OrganizationModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-organization-modal',
            template: __webpack_require__(/*! ./organization-modal.page.html */ "./src/app/modals/organization-modal/organization-modal.page.html"),
            styles: [__webpack_require__(/*! ./organization-modal.page.scss */ "./src/app/modals/organization-modal/organization-modal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], OrganizationModalPage);
    return OrganizationModalPage;
}());



/***/ }),

/***/ "./src/app/models/customer.ts":
/*!************************************!*\
  !*** ./src/app/models/customer.ts ***!
  \************************************/
/*! exports provided: BirthData, Address, Contacts, Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirthData", function() { return BirthData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contacts", function() { return Contacts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var BirthData = /** @class */ (function () {
    function BirthData() {
    }
    return BirthData;
}());

var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());

var Contacts = /** @class */ (function () {
    function Contacts() {
    }
    return Contacts;
}());

var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/services/customer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/customer.service.ts ***!
  \**********************************************/
/*! exports provided: ServiceResponse, CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceResponse", function() { return ServiceResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_customer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/customer */ "./src/app/models/customer.ts");





var ServiceResponse = /** @class */ (function () {
    function ServiceResponse() {
    }
    return ServiceResponse;
}());

var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
    }
    CustomerService.prototype.asyncGetCustomers = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var session = window.localStorage.getItem('_session');
            if (!session) {
                session = 'loggedout';
            }
            _this.http.get("http://localhost:8080/api/customers", {
                headers: {
                    's-t': session
                },
                observe: 'response'
            }).subscribe(function (data) {
                var primitiveCstms = data.body;
                var cstms = primitiveCstms.map(function (obj) {
                    var k = new _models_customer__WEBPACK_IMPORTED_MODULE_4__["Customer"]();
                    k.firstName = obj.firstName;
                    k.lastName = obj.lastName;
                    k.fiscalCode = obj.fiscalCode;
                    k.vatNumber = obj.vatNumber;
                    k.birth = obj.birth;
                    k.idCard = obj.idCard;
                    k.passport = obj.passport;
                    k.driveLicense = obj.driveLicense;
                    k.address = obj.address;
                    // k.options = obj.options;
                    k.notes = obj.notes;
                    k.contacts = obj.contacts;
                    k.token = obj.token;
                    k.version = obj.version;
                    k.company = obj.company;
                    k.deleted = obj.deleted;
                    k._id = obj._id;
                    return k;
                });
                observer.next(cstms);
                return { unsubscribe: function () { } };
            }, function (error) {
                console.log(error);
                observer.error(error);
                return { unsubscribe: function () { } };
            });
        });
    };
    CustomerService.prototype.asyncGetCustomer = function (token) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var session = window.localStorage.getItem('_session');
            if (!session) {
                session = 'loggedout';
            }
            _this.http.get("http://localhost:8080/api/customers/" + token, {
                headers: {
                    's-t': session
                },
                observe: 'response'
            }).subscribe(function (data) {
                var obj = data.body;
                var k = new _models_customer__WEBPACK_IMPORTED_MODULE_4__["Customer"]();
                k.firstName = obj.firstName;
                k.lastName = obj.lastName;
                k.fiscalCode = obj.fiscalCode;
                k.vatNumber = obj.vatNumber;
                k.birth = obj.birth;
                k.idCard = obj.idCard;
                k.passport = obj.passport;
                k.driveLicense = obj.driveLicense;
                k.address = obj.address;
                k.options = new Map();
                if (JSON.stringify(obj.options) !== JSON.stringify({})) {
                    Object.keys(obj.options).forEach(function (key) {
                        k.options.set(key, obj.options[key]);
                    });
                }
                k.notes = obj.notes;
                k.contacts = obj.contacts;
                k.token = obj.token;
                k.version = obj.version;
                k.company = obj.company;
                k.deleted = obj.deleted;
                k._id = obj._id;
                console.log(k);
                observer.next(k);
                return { unsubscribe: function () { } };
            }, function (error) {
                console.log(error);
                observer.error(error);
                return { unsubscribe: function () { } };
            });
        });
    };
    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/services/organization.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/organization.service.ts ***!
  \**************************************************/
/*! exports provided: OrganizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationService", function() { return OrganizationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var OrganizationService = /** @class */ (function () {
    function OrganizationService(hc) {
        this.hc = hc;
        this.url = 'http://localhost:8080/api/world';
    }
    OrganizationService.prototype.getOrganizationList = function (kind) {
        var session = window.localStorage.getItem('_session');
        if (!session) {
            session = 'loggedout';
        }
        return this.hc.get(this.url + "/" + kind, {
            headers: {
                's-t': session
            }
        });
    };
    OrganizationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OrganizationService);
    return OrganizationService;
}());



/***/ }),

/***/ "./src/app/services/policy.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/policy.service.ts ***!
  \********************************************/
/*! exports provided: PolicyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyService", function() { return PolicyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var PolicyService = /** @class */ (function () {
    function PolicyService(hc) {
        this.hc = hc;
        this.baseUrl = 'http://localhost:8080/api/policies';
    }
    PolicyService.prototype.getList = function (kind) {
        var mayKind = kind ? kind : 'policy';
        var session = window.localStorage.getItem('_session');
        if (!session) {
            session = 'loggedout';
        }
        return this.hc.get(this.baseUrl + "?kind=" + mayKind, {
            headers: {
                's-t': session
            }
        });
    };
    PolicyService.prototype.single = function (id) {
        var session = window.localStorage.getItem('_session');
        if (!session) {
            session = 'loggedou';
        }
        return this.hc.get(this.baseUrl + "/" + id, {
            headers: {
                's-t': session
            }
        });
    };
    PolicyService.prototype.saveNew = function (policy) {
        var session = window.localStorage.getItem('_session');
        if (!session) {
            session = 'loggedou';
        }
        return this.hc.post(this.baseUrl, policy, {
            headers: {
                's-t': session
            }
        });
    };
    PolicyService.prototype.update = function (policy) {
        var session = window.localStorage.getItem('_session');
        if (!session) {
            session = 'loggedou';
        }
        return this.hc.put(this.baseUrl + "/" + policy.token, policy, {
            headers: {
                's-t': session
            }
        });
    };
    PolicyService.prototype.delete = function (id) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var session = window.localStorage.getItem('_session');
            if (!session) {
                session = 'loggedout';
            }
            _this.hc.delete(_this.baseUrl + "/" + id, {
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
    PolicyService.prototype.toPolicy = function (token) {
        var session = window.localStorage.getItem('_session');
        if (!session) {
            session = 'loggedout';
        }
        return this.hc.post(this.baseUrl + "/topolicy/" + token, {}, {
            headers: {
                's-t': session
            }
        });
    };
    PolicyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PolicyService);
    return PolicyService;
}());



/***/ }),

/***/ "./src/app/services/setup-policies.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/setup-policies.service.ts ***!
  \****************************************************/
/*! exports provided: SetupPoliciesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupPoliciesService", function() { return SetupPoliciesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SetupPoliciesService = /** @class */ (function () {
    function SetupPoliciesService(hc) {
        this.hc = hc;
        this.baseUrl = 'http://localhost:8080/api/setuppolicies/';
    }
    SetupPoliciesService.prototype.getKinds = function () {
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
    SetupPoliciesService.prototype.getOptions = function (idKind) {
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
    SetupPoliciesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SetupPoliciesService);
    return SetupPoliciesService;
}());



/***/ })

}]);
//# sourceMappingURL=default~policy-form-policy-form-module~proposal-form-proposal-form-module.js.map