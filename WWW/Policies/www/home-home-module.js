(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
                        runGuardsAndResolvers: 'always'
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button icon-only menuToggle=\"start\">\n        <ion-icon name=\"menu\"></ion-icon>\n      </ion-menu-button>          \n    </ion-buttons>\n    <ion-title>\n      Pratiche Web\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <h1>Polizze</h1>\n    <div *ngIf=\"!basePolicies || basePolicies.length === 0\">\n      Nessuna polizza presente. <br />\n      <ion-button color=\"tertiary\" size=\"default\" (click)=\"onCreateClick()\">\n        <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\n      </ion-button>\n    </div>\n    <div *ngIf=\"basePolicies && basePolicies.length > 0\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" size-sm>\n            <ion-item lines=\"none\">\n              <ion-button color=\"tertiary\" (click)=\"onCreateClick()\" size=\"default\">\n                <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\n              </ion-button>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-sm>\n              <ion-item lines=\"none\">                \n                <ion-searchbar placeholder=\"Cerca\" (ionChange)=\"searchChange($event)\"></ion-searchbar>\n                <ion-spinner *ngIf=\"!hideSpinner\"></ion-spinner>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n      </ion-grid>\n    </div>\n    <ion-grid *ngIf=\"policies && policies.length > 0\">\n      <ion-row>\n        <ion-col size=\"12\" size-sm>\n          <ion-virtual-scroll [items]=\"policies\">\n            <ion-item *virtualItem=\"let p\" lines=\"full\" approxItemHeight=\"57px\">\n              <ion-button color=\"primary\" (click)=\"onItemClick(p.policy.token)\" slot=\"start\">\n                <ion-icon slot=\"icon-only\" name=\"compass\"></ion-icon>\n              </ion-button>\n              <ion-note slot=\"end\" class=\"ion-hide-sm-down\">\n                {{p.customer ? p.customer.firstName : ''}} {{p.customer ? p.customer.lastName : ''}}\n              </ion-note>\n              <ion-button color=\"danger\" slot=\"end\" (click)=\"onItemDelete(p.policy.token)\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-button>\n              <ion-label text-wrap>{{p.policy.number}} {{p.company ? p.company.name : ''}}</ion-label>\n            </ion-item>            \n          </ion-virtual-scroll>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_policy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/policy.service */ "./src/app/services/policy.service.ts");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var src_app_services_organization_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/organization.service */ "./src/app/services/organization.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var HomePage = /** @class */ (function () {
    function HomePage(r, tc, ac, ps, cs, os) {
        var _this = this;
        this.r = r;
        this.tc = tc;
        this.ac = ac;
        this.ps = ps;
        this.cs = cs;
        this.os = os;
        this.basePolicies = [];
        this.policies = [];
        this.hideSpinner = true;
        this.sub$ = this.r.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.loadData();
            }
        });
    }
    HomePage.prototype.getList = function () {
        var _this = this;
        var self = this;
        return new Promise(function (resolve, reject) {
            _this.ps.getList().subscribe({
                next: function (ris) {
                    resolve(ris);
                },
                error: function (err) {
                    reject(err);
                }
            });
        });
    };
    HomePage.prototype.getCustomers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cs.asyncGetCustomers().subscribe(function (cs) { return resolve(cs); });
        });
    };
    HomePage.prototype.getCompanies = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.os.getOrganizationList('Compagnie').subscribe(function (c) { return resolve(c); });
        });
    };
    HomePage.prototype.mapToItem = function (ps, cs, ics) {
        return ps.map(function (p) {
            var mayCustomer = cs.filter(function (c) { return c.token === p.customerId; });
            var mayCompany = ics.filter(function (ic) { return ic._id === p.insuranceCompanyId; });
            return {
                policy: p,
                customer: mayCustomer ? mayCustomer[0] : null,
                company: mayCompany ? mayCompany[0] : null
            };
        });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loadData();
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.loadData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ps, cs, ics, _a, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.getList()];
                    case 1:
                        ps = _b.sent();
                        return [4 /*yield*/, this.getCustomers()];
                    case 2:
                        cs = _b.sent();
                        return [4 /*yield*/, this.getCompanies()];
                    case 3:
                        ics = _b.sent();
                        this.policies = this.mapToItem(ps, cs, ics);
                        this.basePolicies = this.policies;
                        if (!this.query) return [3 /*break*/, 5];
                        _a = this;
                        return [4 /*yield*/, this.filterData(this.query)];
                    case 4:
                        _a.policies = _b.sent();
                        _b.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        err_1 = _b.sent();
                        console.log(err_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.onCreateClick = function () {
        this.r.navigate(['policy', 'new']);
    };
    HomePage.prototype.filterData = function (query) {
        var _this = this;
        var self = this;
        return new Promise(function (resolve, reject) {
            if (query && query !== '') {
                try {
                    resolve(_this.basePolicies.filter(function (obj) {
                        var srep = JSON.stringify(obj);
                        console.log(srep);
                        var regex = new RegExp("" + query, 'i');
                        console.log(regex);
                        return regex.test(srep);
                    }));
                }
                catch (e) {
                    resolve(_this.basePolicies);
                }
            }
            else {
                resolve(_this.basePolicies);
            }
        });
    };
    HomePage.prototype.searchChange = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.query = event.target.value;
                        _a = this;
                        return [4 /*yield*/, this.filterData(event.target.value)];
                    case 1:
                        _a.policies = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.onItemClick = function (token) {
        this.r.navigate(['policy', token]);
    };
    HomePage.prototype.DeleteItem = function (token) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.ps.delete(token).subscribe({
                next: function (ris) {
                    resolve(ris);
                },
                error: function (err) {
                    reject(err);
                }
            });
        });
    };
    HomePage.prototype.ShowMessage = function (message) {
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
    HomePage.prototype.ConfirmDelete = function (token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, this.ac.create({
                                header: 'Cancellazione polizza',
                                message: 'Stai per <strong>cancellare</strong> una polizza',
                                buttons: [
                                    {
                                        text: 'Annulla',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function (cnl) { }
                                    },
                                    {
                                        text: 'Conferma',
                                        handler: function () {
                                            try {
                                                _this.DeleteItem(token).then(function (ss) {
                                                    if (ss) {
                                                        _this.r.navigate(['home']);
                                                        self.ShowMessage('Polizza correttamente cancellata.');
                                                    }
                                                    else {
                                                        self.ShowMessage('Si è verificato un problema. Riprova!');
                                                    }
                                                });
                                            }
                                            catch (e) {
                                                self.ShowMessage("Si \u00E8 verificato un problema " + e + ". Riprova!");
                                            }
                                        }
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
    HomePage.prototype.onItemDelete = function (token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ConfirmDelete(token)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.ngOnDestroy = function () {
        if (this.sub$) {
            this.sub$.unsubscribe();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], HomePage.prototype, "basePolicies", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], HomePage.prototype, "policies", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HomePage.prototype, "query", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            src_app_services_policy_service__WEBPACK_IMPORTED_MODULE_3__["PolicyService"],
            src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"],
            src_app_services_organization_service__WEBPACK_IMPORTED_MODULE_5__["OrganizationService"]])
    ], HomePage);
    return HomePage;
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
            _this.http.get("http://pratiche.ares/api/customers", {
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
            _this.http.get("http://pratiche.ares/api/customers/" + token, {
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
        this.url = 'http://pratiche.ares/api/world';
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
        this.baseUrl = 'http://pratiche.ares/api/policies';
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



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map