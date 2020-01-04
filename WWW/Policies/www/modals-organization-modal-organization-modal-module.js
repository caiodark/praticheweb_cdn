(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modals-organization-modal-organization-modal-module"],{

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



/***/ })

}]);
//# sourceMappingURL=modals-organization-modal-organization-modal-module.js.map