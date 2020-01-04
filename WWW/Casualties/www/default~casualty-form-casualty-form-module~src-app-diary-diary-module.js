(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~casualty-form-casualty-form-module~src-app-diary-diary-module"],{

/***/ "./src/app/diary/diary.module.ts":
/*!***************************************!*\
  !*** ./src/app/diary/diary.module.ts ***!
  \***************************************/
/*! exports provided: DiaryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiaryPageModule", function() { return DiaryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _diary_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./diary.page */ "./src/app/diary/diary.page.ts");
/* harmony import */ var src_app_pipes_nice_date_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/nice-date.module */ "./src/app/pipes/nice-date.module.ts");








var routes = [
    {
        path: '',
        component: _diary_page__WEBPACK_IMPORTED_MODULE_6__["DiaryPage"]
    }
];
var DiaryPageModule = /** @class */ (function () {
    function DiaryPageModule() {
    }
    DiaryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                src_app_pipes_nice_date_module__WEBPACK_IMPORTED_MODULE_7__["NiceDateModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_diary_page__WEBPACK_IMPORTED_MODULE_6__["DiaryPage"]]
        })
    ], DiaryPageModule);
    return DiaryPageModule;
}());



/***/ }),

/***/ "./src/app/diary/diary.page.html":
/*!***************************************!*\
  !*** ./src/app/diary/diary.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button icon-only menuToggle=\"start\">\n        <ion-icon name=\"menu\"></ion-icon>\n      </ion-menu-button>          \n    </ion-buttons>\n    <ion-title>\n      Pratiche Web\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <p>\n            <a (click)=\"onListaClick()\" [routerLink]=\"\">{{listLabel}}</a> | <a (click)=\"onBackClick()\" [routerLink]=\"\">{{backLabel}}</a> | diario\n          </p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <h1>Diario</h1>\n        </ion-col>\n      </ion-row>\n      <form [formGroup]=\"diaryForm\">\n        <ion-row>\n          <ion-col size=\"6\" size-md>\n            <ion-item lines=\"none\">\n              <ion-label>Note:</ion-label>\n              <ion-textarea placeholder=\"Descrizione evento\" formControlName=\"notes\"></ion-textarea>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\" size-md>\n            <ion-item lines=\"none\">\n              <ion-label>Quando:</ion-label>\n              <ion-datetime\n                placeholder = \"Data evento\"\n                display-format=\"DD/MM/YYYY\" \n                picker-format=\"DD/MMMM/YYYY\" \n                formControlName=\"when\"\n                month-names=\"gennaio, febbraio, marzo, aprile, maggio, giugno, luglio, agosto, settembre, ottobre, novembre, dicembre\"\n                cancel-text=\"Annulla\"\n                done-text=\"Ok\">\n              </ion-datetime>\n              </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div>\n              <ion-button color=\"primary\" [disabled]=\"!diaryForm.valid\" (click)=\"saveNew()\">\n                <ion-icon slot=\"icon-only\" name=\"save\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"tertiary\" (click)=\"reset()\">\n                  <ion-icon slot=\"icon-only\" name=\"undo\"></ion-icon>\n                </ion-button>\n              </div>\n          </ion-col>\n        </ion-row>\n      </form>\n      <ion-row>\n        <ion-col *ngFor=\"let entry of entries\" size=\"12\" size-md=\"6\">\n          <ion-card>\n            <ion-item lines=\"none\">\n              <ion-label>{{entry.when | niceDate:'DD/MM/YYYY HH:mm'}}</ion-label>\n              <ion-button color=\"primary\" slot=\"start\" (click)=\"putEntryOnEdit(entry)\">\n                <ion-icon slot=\"icon-only\" name=\"compass\"></ion-icon>\n              </ion-button>\n              <ion-button color=\"danger\" slot=\"end\" (click)=\"onDeleteEntryClick(entry)\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-button>\n            </ion-item>\n            <ion-card-content>\n              <div *ngIf=\"!(current && current._id === entry._id)\">\n                {{entry.notes}}\n              </div>\n              <form [formGroup]=\"updForm\" *ngIf=\"current && current._id === entry._id\">\n                <ion-item lines=\"none\">\n                  <ion-label>Note:</ion-label>\n                  <ion-textarea placeholder=\"Descrizione evento\" formControlName=\"notes\"></ion-textarea>\n                </ion-item>\n                <ion-item lines=\"none\">\n                  <ion-label>Quando:</ion-label>\n                  <ion-datetime\n                    placeholder = \"Data evento\"\n                    display-format=\"DD/MM/YYYY\" \n                    picker-format=\"DD/MMMM/YYYY\" \n                    formControlName=\"when\"\n                    month-names=\"gennaio, febbraio, marzo, aprile, maggio, giugno, luglio, agosto, settembre, ottobre, novembre, dicembre\"\n                    cancel-text=\"Annulla\"\n                    done-text=\"Ok\">\n                  </ion-datetime>\n                </ion-item>\n                <ion-item lines=\"none\">\n                  <ion-button color=\"primary\" (click)=\"updateEntry(entry)\">\n                    <ion-icon slot=\"icon-only\" name=\"save\"></ion-icon>\n                  </ion-button>\n                  <ion-button color=\"tertiary\" (click)=\"resetCurrent()\">\n                    <ion-icon slot=\"icon-only\" name=\"undo\"></ion-icon>\n                  </ion-button>\n                </ion-item>\n              </form>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/diary/diary.page.scss":
/*!***************************************!*\
  !*** ./src/app/diary/diary.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYXJ5L2RpYXJ5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/diary/diary.page.ts":
/*!*************************************!*\
  !*** ./src/app/diary/diary.page.ts ***!
  \*************************************/
/*! exports provided: DiaryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiaryPage", function() { return DiaryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_diary_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/diary.service */ "./src/app/services/diary.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var DiaryPage = /** @class */ (function () {
    function DiaryPage(cd, router, ar, ds, fb, tc, ac) {
        this.cd = cd;
        this.router = router;
        this.ar = ar;
        this.ds = ds;
        this.fb = fb;
        this.tc = tc;
        this.ac = ac;
        this.listLabel = 'Infortuni';
        this.backLabel = 'Infortunio';
        this.token = '';
        this.entries = [];
        this.diaryForm = fb.group({
            notes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            when: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.updForm = fb.group({
            notes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            when: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    DiaryPage.prototype.getToken = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.route$ = self.ar.params.subscribe(function (params) {
                resolve(params.token);
            });
        });
    };
    DiaryPage.prototype.getList = function (token) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.ds.getList(token).subscribe({
                next: function (list) {
                    resolve(list);
                },
                error: function (err) {
                    reject(err);
                }
            });
        });
    };
    DiaryPage.prototype.ngOnInit = function () {
    };
    DiaryPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.getToken()];
                    case 1:
                        _a.token = _c.sent();
                        this.backLabel = 'Infortunio';
                        this.listLabel = 'Lista infortuni';
                        _b = this;
                        return [4 /*yield*/, this.getList(this.token)];
                    case 2:
                        _b.entries = _c.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _c.sent();
                        console.error(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DiaryPage.prototype.onListaClick = function () {
        this.router.navigate(['home']);
    };
    DiaryPage.prototype.onBackClick = function () {
        this.router.navigate(['casualty', this.token]);
    };
    DiaryPage.prototype.reset = function () {
        this.diaryForm.patchValue({
            notes: '',
            when: '',
        });
    };
    DiaryPage.prototype.showMessage = function (message) {
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
    DiaryPage.prototype.save = function (toSave) {
        var _this = this;
        var self = this;
        return new Promise(function (resolve, reject) {
            self.ds.saveNew(_this.token, toSave).subscribe({
                next: function (saved) {
                    resolve(saved);
                },
                error: function (err) {
                    reject(err);
                }
            });
        });
    };
    DiaryPage.prototype.saveNew = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toSave, saved, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        toSave = this.diaryForm.value;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.save(toSave)];
                    case 2:
                        saved = _a.sent();
                        this.entries = [saved].concat(this.entries);
                        this.reset();
                        this.showMessage('Il salvataggio è andato a buon fine.');
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        this.showMessage('Qualcosa non ha funzionato. Prova ancora.');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DiaryPage.prototype.delete = function (diary) {
        var _this = this;
        var self = this;
        return new Promise(function (resolve, reject) {
            self.ds.delete(_this.token, diary._id).subscribe({
                next: function (done) {
                    resolve(done);
                },
                error: function (err) {
                    reject(err);
                }
            });
        });
    };
    DiaryPage.prototype.confirmDelete = function (diary) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, this.ac.create({
                                header: 'Cancellazione voce diario',
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
                                                        return [4 /*yield*/, this.delete(diary)];
                                                    case 1:
                                                        done = _a.sent();
                                                        if (!done) return [3 /*break*/, 3];
                                                        this.entries = this.entries.filter(function (e) {
                                                            return e._id !== diary._id;
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
    DiaryPage.prototype.onDeleteEntryClick = function (entry) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.confirmDelete(entry)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DiaryPage.prototype.putEntryOnEdit = function (entry) {
        this.current = entry;
        this.updForm.patchValue({
            notes: entry.notes,
            when: entry.when,
        });
    };
    DiaryPage.prototype.resetCurrent = function () {
        this.current = null;
    };
    DiaryPage.prototype.update = function (id, entry) {
        var _this = this;
        var self = this;
        return new Promise(function (resolve, reject) {
            self.ds.update(_this.token, id, entry).subscribe({
                next: function (saved) {
                    resolve(saved);
                },
                error: function (err) {
                    reject(err);
                }
            });
        });
    };
    DiaryPage.prototype.updateEntry = function (entry) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toSave, saved_1, err_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        toSave = this.updForm.value;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.update(entry._id, toSave)];
                    case 2:
                        saved_1 = _a.sent();
                        this.entries = this.entries.map(function (e) {
                            if (e._id === entry._id) {
                                return saved_1;
                            }
                            else {
                                return e;
                            }
                        });
                        this.resetCurrent();
                        this.showMessage('Salvataggio avvenuto correttamente.');
                        return [3 /*break*/, 4];
                    case 3:
                        err_3 = _a.sent();
                        this.showMessage("Si \u00E8 verificato un errore " + err_3 + ". Riprovare pi\u00F9 tardi!");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DiaryPage.prototype, "current", void 0);
    DiaryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-diary',
            template: __webpack_require__(/*! ./diary.page.html */ "./src/app/diary/diary.page.html"),
            styles: [__webpack_require__(/*! ./diary.page.scss */ "./src/app/diary/diary.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_diary_service__WEBPACK_IMPORTED_MODULE_4__["DiaryService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], DiaryPage);
    return DiaryPage;
}());



/***/ }),

/***/ "./src/app/services/diary.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/diary.service.ts ***!
  \*******************************************/
/*! exports provided: DiaryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiaryService", function() { return DiaryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var DiaryService = /** @class */ (function () {
    function DiaryService(hc) {
        this.hc = hc;
        this.baseUrl = '/api/casualties/';
        this.diary = '/diary';
    }
    DiaryService.prototype.getList = function (token) {
        var session = window.localStorage.getItem('_session');
        if (!session) {
            session = 'loggedout';
        }
        return this.hc.get("" + this.baseUrl + token + this.diary, {
            headers: {
                's-t': session,
            }
        });
    };
    DiaryService.prototype.single = function (token, id) {
        var session = window.localStorage.getItem('_session');
        if (!session) {
            session = 'loggedout';
        }
        return this.hc.get("" + this.baseUrl + token + this.diary + "/" + id, {
            headers: {
                's-t': session,
            }
        });
    };
    DiaryService.prototype.saveNew = function (token, diary) {
        var session = window.localStorage.getItem('_session');
        if (!session) {
            session = 'loggedout';
        }
        return this.hc.post("" + this.baseUrl + token + this.diary, diary, {
            headers: {
                's-t': session,
            }
        });
    };
    DiaryService.prototype.update = function (token, id, diary) {
        var session = window.localStorage.getItem('_session');
        if (!session) {
            session = 'loggedout';
        }
        return this.hc.put("" + this.baseUrl + token + this.diary + "/" + id, diary, {
            headers: {
                's-t': session,
            }
        });
    };
    DiaryService.prototype.delete = function (token, id) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var session = window.localStorage.getItem('_session');
            if (!session) {
                session = 'loggedout';
            }
            _this.hc.delete("" + _this.baseUrl + token + _this.diary + "/" + id, {
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
    DiaryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DiaryService);
    return DiaryService;
}());



/***/ })

}]);
//# sourceMappingURL=default~casualty-form-casualty-form-module~src-app-diary-diary-module.js.map