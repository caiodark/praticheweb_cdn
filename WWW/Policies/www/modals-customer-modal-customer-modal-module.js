(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modals-customer-modal-customer-modal-module"],{

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



/***/ })

}]);
//# sourceMappingURL=modals-customer-modal-customer-modal-module.js.map