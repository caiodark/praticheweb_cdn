(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~policy-form-policy-form-module~proposal-form-proposal-form-module~src-app-attachments-attach~28d421f9"],{

/***/ "./src/app/attachments/attachments.module.ts":
/*!***************************************************!*\
  !*** ./src/app/attachments/attachments.module.ts ***!
  \***************************************************/
/*! exports provided: AttachmentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentsPageModule", function() { return AttachmentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _attachments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attachments.page */ "./src/app/attachments/attachments.page.ts");







var routes = [
    {
        path: '',
        component: _attachments_page__WEBPACK_IMPORTED_MODULE_6__["AttachmentsPage"]
    }
];
var AttachmentsPageModule = /** @class */ (function () {
    function AttachmentsPageModule() {
    }
    AttachmentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_attachments_page__WEBPACK_IMPORTED_MODULE_6__["AttachmentsPage"]]
        })
    ], AttachmentsPageModule);
    return AttachmentsPageModule;
}());



/***/ }),

/***/ "./src/app/attachments/attachments.page.html":
/*!***************************************************!*\
  !*** ./src/app/attachments/attachments.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button icon-only menuToggle=\"start\">\n          <ion-icon name=\"menu\"></ion-icon>\n      </ion-menu-button>          \n    </ion-buttons>\n    <ion-title>\n      Pratiche Web\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"attachmentForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <p>\n            <a (click)=\"onListaClick()\" [routerLink]=\"\">{{listLabel}}</a> | <a (click)=\"onBackClick()\" [routerLink]=\"\">{{backLabel}}</a> | nuovo allegato\n          </p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <h1>Nuovo allegato</h1>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" size-sm>\n          <ion-item>\n            <ion-label>Nome:</ion-label>\n            <ion-input placeholder=\"Nome\" formControlName=\"name\"></ion-input> \n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\" size-sm>\n          <ion-item>\n            <ion-label>Tag:</ion-label>\n            <ion-input placeholder=\"parole separate da virgola\" formControlName=\"tags\"></ion-input> \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" size-sm *ngIf=\"knd === 'polizza'\">\n          <ion-item>\n            <ion-label>Tipo:</ion-label>\n            <ion-select placeholder=\"Seleziona tipo\" formControlName=\"kind\" okText=\"Seleziona\" cancelText=\"Annulla\">\n              <ion-select-option value=\"polizza-proposta\">Proposta</ion-select-option>\n              <ion-select-option value=\"polizza-polizza\">Polizza</ion-select-option>\n              <ion-select-option value=\"polizza-pagamento\">Pagamento</ion-select-option>\n              <ion-select-option value=\"polizza-richiesta\">Richiesta</ion-select-option>\n              <ion-select-option value=\"polizza-scarico-fiscale\">Scarico fiscale</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\" size-sm *ngIf=\"knd === 'proposta'\">\n          <ion-item>\n            <ion-label>Tipo:</ion-label>\n            <ion-select placeholder=\"Seleziona tipo\" formControlName=\"kind\" okText=\"Seleziona\" cancelText=\"Annulla\">\n              <ion-select-option value=\"proposta-proposta\">Proposta</ion-select-option>\n              <ion-select-option value=\"proposta-pagamento\">Pagamento</ion-select-option>\n              <ion-select-option value=\"proposta-richiesta\">Richiesta</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\" size-sm>\n          <ion-item>\n            <ion-label>File:</ion-label>\n            <ion-input type=\"file\" placeholder=\"allegato\" formControlName=\"file\" (change)=\"onFileChange($event)\"></ion-input> \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" size-sm>\n          <div>\n            <ion-button color=\"primary\" [disabled]=\"!attachmentForm.valid\" (click)=\"onSaveClick()\">\n              <ion-icon slot=\"icon-only\" name=\"save\"></ion-icon>\n            </ion-button>\n            <ion-button color=\"tertiary\" (click)=\"onBackClick()\">\n              <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/attachments/attachments.page.scss":
/*!***************************************************!*\
  !*** ./src/app/attachments/attachments.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F0dGFjaG1lbnRzL2F0dGFjaG1lbnRzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/attachments/attachments.page.ts":
/*!*************************************************!*\
  !*** ./src/app/attachments/attachments.page.ts ***!
  \*************************************************/
/*! exports provided: AttachmentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentsPage", function() { return AttachmentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_attachments_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/attachments.service */ "./src/app/services/attachments.service.ts");
/* harmony import */ var _models_service_status_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/service-status.enum */ "./src/app/models/service-status.enum.ts");







var AttachmentsPage = /** @class */ (function () {
    function AttachmentsPage(fb, cd, router, ar, as, tc) {
        this.fb = fb;
        this.cd = cd;
        this.router = router;
        this.ar = ar;
        this.as = as;
        this.tc = tc;
        this.listLabel = '';
        this.backLabel = '';
        this.attachmentForm = fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tags: [''],
            kind: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            file: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fileName: ['']
        });
    }
    AttachmentsPage.prototype.getToken = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.route$ = self.ar.params.subscribe(function (params) {
                resolve(params.token);
            });
        });
    };
    AttachmentsPage.prototype.getKind = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.kind$ = _this.ar.queryParams.subscribe(function (params) {
                console.log(params);
                resolve(params.kind);
            });
        });
    };
    AttachmentsPage.prototype.ngOnInit = function () {
    };
    AttachmentsPage.prototype.ngOnDestroy = function () {
        if (this.route$) {
            this.route$.unsubscribe();
        }
        if (this.kind$) {
            this.kind$.unsubscribe();
        }
    };
    AttachmentsPage.prototype.ionViewWillEnter = function () {
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
                        _b = this;
                        return [4 /*yield*/, this.getKind()];
                    case 2:
                        _b.knd = _c.sent();
                        if (this.knd === 'polizza') {
                            this.backLabel = 'Polizza';
                            this.listLabel = 'Polizze';
                        }
                        if (this.knd === 'proposta') {
                            this.listLabel = 'Lista proposte';
                            this.backLabel = 'Proposta';
                        }
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
    AttachmentsPage.prototype.onFileChange = function (event) {
        var reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            var file = event.target.files[0];
            this.attachmentForm.patchValue({
                file: file,
                fileName: file.name
            });
        }
    };
    AttachmentsPage.prototype.onListaClick = function () {
        if (this.knd === 'polizza') {
            this.router.navigate(['home']);
        }
        else if (this.knd === 'proposta') {
            this.router.navigate(['proposals']);
        }
    };
    AttachmentsPage.prototype.onBackClick = function () {
        if (this.knd === 'polizza') {
            this.router.navigate(['policy', this.token]);
        }
        else if (this.knd === 'proposta') {
            this.router.navigate(['proposal', this.token]);
        }
    };
    AttachmentsPage.prototype.showMessage = function (message) {
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
    AttachmentsPage.prototype.onSaveClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var fd, obj, self;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                fd = new FormData();
                obj = this.attachmentForm.value;
                fd.append('name', obj.name);
                fd.append('tags', obj.tags);
                fd.append('filename', obj.fileName);
                fd.append('file', obj.file, obj.fileName);
                fd.append('kind', obj.kind);
                console.log(obj);
                fd.forEach(function (value, key) {
                    console.log(key);
                    console.log(value);
                });
                self = this;
                this.as.asyncPostAttachment(fd, this.token, obj.kind).subscribe({
                    next: function (ris) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(ris === _models_service_status_enum__WEBPACK_IMPORTED_MODULE_6__["ServiceStatus"].OK)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, self.showMessage('Caricamento avvenuto con successo.')];
                                    case 1:
                                        _a.sent();
                                        self.onBackClick();
                                        return [3 /*break*/, 4];
                                    case 2: return [4 /*yield*/, self.showMessage('Si è verificato un problema, riprovare.')];
                                    case 3:
                                        _a.sent();
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        });
                    },
                    error: function (err) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, self.showMessage('Si è verificato un problema, riprovare.')];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        });
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    AttachmentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-attachments',
            template: __webpack_require__(/*! ./attachments.page.html */ "./src/app/attachments/attachments.page.html"),
            styles: [__webpack_require__(/*! ./attachments.page.scss */ "./src/app/attachments/attachments.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_attachments_service__WEBPACK_IMPORTED_MODULE_5__["AttachmentsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], AttachmentsPage);
    return AttachmentsPage;
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
    }
    AttachmentsService.prototype.asyncGetAttachments = function (token, kind) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var session = window.localStorage.getItem('_session');
            if (!session) {
                session = 'loggedout';
            }
            _this.http.get("http://localhost:8080/api/attachments/" + kind + "/" + token, {
                headers: {
                    's-t': session
                },
                observe: 'response'
            }).subscribe(function (data) {
                var pAtchs = data.body;
                var atchs = pAtchs.map(function (obj) {
                    var a = {
                        _id: obj._id,
                        company: obj.company,
                        deleted: obj.deleted,
                        filename: obj.filename,
                        kind: obj.kind,
                        name: obj.name,
                        token: obj.token,
                        tags: obj.tags
                    };
                    return a;
                });
                observer.next(atchs);
                return { unsubscribe: function () { } };
            }, function (error) {
                console.log(error);
                observer.error(error);
                return { unsubscribe: function () { } };
            });
        });
    };
    AttachmentsService.prototype.asyncPostAttachment = function (attachment, token, kind) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var session = window.localStorage.getItem('_session');
            if (!session) {
                session = 'loggedout';
            }
            _this.http.post("http://localhost:8080/api/attachments/" + kind + "/" + token, attachment, {
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
        return this.http.post("http://localhost:8080/api/attachments/copy/" + a.kind + "/" + a.token + "/" + a._id + "/to/" + destKind + "/" + destTkn, {}, {
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
            _this.http.put("http://localhost:8080/api/attachments/" + kind + "/" + token + "/" + attachment._id, attachment, {
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
            _this.http.delete("http://localhost:8080/api/attachments/" + kind + "/" + token + "/" + attachment._id, {
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



/***/ })

}]);
//# sourceMappingURL=default~policy-form-policy-form-module~proposal-form-proposal-form-module~src-app-attachments-attach~28d421f9.js.map