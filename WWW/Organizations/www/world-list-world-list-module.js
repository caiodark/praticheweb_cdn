(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["world-list-world-list-module"],{

/***/ "./src/app/world-list/world-list.module.ts":
/*!*************************************************!*\
  !*** ./src/app/world-list/world-list.module.ts ***!
  \*************************************************/
/*! exports provided: WorldListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldListPageModule", function() { return WorldListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _world_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./world-list.page */ "./src/app/world-list/world-list.page.ts");







var routes = [
    {
        path: '',
        component: _world_list_page__WEBPACK_IMPORTED_MODULE_6__["WorldListPage"]
    }
];
var WorldListPageModule = /** @class */ (function () {
    function WorldListPageModule() {
    }
    WorldListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_world_list_page__WEBPACK_IMPORTED_MODULE_6__["WorldListPage"]]
        })
    ], WorldListPageModule);
    return WorldListPageModule;
}());



/***/ }),

/***/ "./src/app/world-list/world-list.page.html":
/*!*************************************************!*\
  !*** ./src/app/world-list/world-list.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button icon-only menuToggle=\"start\">\n          <ion-icon name=\"menu\"></ion-icon>\n      </ion-menu-button>          \n    </ion-buttons>\n    <ion-title>\n          Pratiche Web\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <h1>{{KindName}}</h1>\n    <div *ngIf=\"!Organizations || Organizations.length === 0\">\n      Nessun elemento presente <br />\n      <ion-button color=\"tertiary\" size=\"default\" (click)=\"onCreateClick()\">\n        <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\n      </ion-button>\n    </div>\n    <div *ngIf=\"Organizations && Organizations.length > 0\">\n      <ion-button color=\"tertiary\" (click)=\"onCreateClick()\" size=\"default\">\n        <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\n      </ion-button>\n    </div>\n    <ion-grid *ngIf=\"Organizations && Organizations.length > 0\">\n      <ion-row>\n        <ion-col size=\"12\" size-sm>\n          <ion-list>\n            <ion-virtual-scroll [items] = \"Organizations\">\n              <ion-item *virtualItem=\"let o\" lines=\"full\" >\n                <ion-button color=\"primary\" (click)=\"onItemClick(o._id)\" slot=\"start\">\n                  <ion-icon slot=\"icon-only\" name=\"compass\"></ion-icon>\n                </ion-button>\n                <ion-button color=\"danger\" slot=\"end\" (click)=\"onItemDelete(o._id)\">\n                  <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                </ion-button>\n                <ion-label>{{o.name}}</ion-label>\n              </ion-item>\n            </ion-virtual-scroll>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/world-list/world-list.page.scss":
/*!*************************************************!*\
  !*** ./src/app/world-list/world-list.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmxkLWxpc3Qvd29ybGQtbGlzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/world-list/world-list.page.ts":
/*!***********************************************!*\
  !*** ./src/app/world-list/world-list.page.ts ***!
  \***********************************************/
/*! exports provided: WorldListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldListPage", function() { return WorldListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_world_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/world.service */ "./src/app/services/world.service.ts");
/* harmony import */ var _models_service_status_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/service-status.enum */ "./src/app/models/service-status.enum.ts");






var WorldListPage = /** @class */ (function () {
    function WorldListPage(ac, tc, router, route, service) {
        this.ac = ac;
        this.tc = tc;
        this.router = router;
        this.route = route;
        this.service = service;
        this.Organizations = [];
        this.KindName = '';
    }
    WorldListPage.prototype.ngOnInit = function () {
    };
    WorldListPage.prototype.ngOnDestroy = function () {
        if (this.Route$) {
            this.Route$.unsubscribe();
        }
    };
    WorldListPage.prototype.GetList = function (service, kind) {
        return new Promise(function (resolve, reject) {
            service.asyncGetList(kind).subscribe({
                next: function (orgs) {
                    resolve(orgs);
                },
                error: function (err) {
                    reject(err);
                }
            });
        });
    };
    WorldListPage.prototype.GetKindName = function (route) {
        return new Promise(function (resolve, reject) {
            route.params.subscribe(function (params) {
                resolve(params['world']);
            });
        });
    };
    WorldListPage.prototype.ShowMessage = function (message) {
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
    WorldListPage.prototype.LoadData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.GetKindName(this.route)];
                    case 1:
                        _a.KindName = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.GetList(this.service, this.KindName)];
                    case 2:
                        _b.Organizations = _c.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _c.sent();
                        this.ShowMessage("Errore nel caricamento dei dati " + e_1);
                        this.Organizations = [];
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    WorldListPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.LoadData();
                return [2 /*return*/];
            });
        });
    };
    WorldListPage.prototype.onItemClick = function (id) {
        this.router.navigate(['organizations', this.KindName, id]);
    };
    WorldListPage.prototype.onCreateClick = function () {
        this.router.navigate(['organizations', this.KindName, 'new']);
    };
    WorldListPage.prototype.DeleteItem = function (id) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.service.asyncDelete(self.KindName, id).subscribe({
                next: function (ris) {
                    resolve(ris);
                },
                error: function (err) {
                    resolve(_models_service_status_enum__WEBPACK_IMPORTED_MODULE_5__["ServiceStatus"].FAILED);
                }
            });
        });
    };
    WorldListPage.prototype.ConfirmDelete = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, this.ac.create({
                                header: 'Cancellazione opzione',
                                message: 'Stai per <strong>cancellare</strong> una opzione',
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
                                            var ss, e_2;
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        _a.trys.push([0, 7, , 9]);
                                                        return [4 /*yield*/, this.DeleteItem(id)];
                                                    case 1:
                                                        ss = _a.sent();
                                                        if (!(ss === _models_service_status_enum__WEBPACK_IMPORTED_MODULE_5__["ServiceStatus"].OK)) return [3 /*break*/, 4];
                                                        return [4 /*yield*/, self.LoadData()];
                                                    case 2:
                                                        _a.sent();
                                                        return [4 /*yield*/, self.ShowMessage('Opzione correttamente cancellata.')];
                                                    case 3:
                                                        _a.sent();
                                                        return [3 /*break*/, 6];
                                                    case 4: return [4 /*yield*/, self.ShowMessage('Si è verificato un problema. Riprova!')];
                                                    case 5:
                                                        _a.sent();
                                                        _a.label = 6;
                                                    case 6: return [3 /*break*/, 9];
                                                    case 7:
                                                        e_2 = _a.sent();
                                                        return [4 /*yield*/, self.ShowMessage("Si \u00E8 verificato un problema " + e_2 + ". Riprova!")];
                                                    case 8:
                                                        _a.sent();
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
    WorldListPage.prototype.onDeleteClick = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ConfirmDelete(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], WorldListPage.prototype, "Organizations", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WorldListPage.prototype, "KindName", void 0);
    WorldListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-world-list',
            template: __webpack_require__(/*! ./world-list.page.html */ "./src/app/world-list/world-list.page.html"),
            styles: [__webpack_require__(/*! ./world-list.page.scss */ "./src/app/world-list/world-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_world_service__WEBPACK_IMPORTED_MODULE_4__["WorldService"]])
    ], WorldListPage);
    return WorldListPage;
}());



/***/ })

}]);
//# sourceMappingURL=world-list-world-list-module.js.map