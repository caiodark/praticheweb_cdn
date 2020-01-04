(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~casualty-form-casualty-form-module~src-app-attachments-attachments-module"],{

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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button icon-only menuToggle=\"start\">\n          <ion-icon name=\"menu\"></ion-icon>\n      </ion-menu-button>          \n    </ion-buttons>\n    <ion-title>\n      Pratiche Web\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"attachmentForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <p *ngIf=\"knd==='infortunio'\">\n            <a (click)=\"onListaClick()\" [routerLink]=\"\">{{listLabel}}</a> | <a (click)=\"onBackClick()\" [routerLink]=\"\">{{backLabel}}</a> | nuovo allegato\n          </p>\n          <p *ngIf=\"knd==='cp'\">\n            <a (click)=\"onListaClick()\" [routerLink]=\"\">{{listLabel}}</a> | \n            <a (click)=\"onBackClick()\" [routerLink]=\"\">{{backLabel}}</a> | \n            <a (click)=\"onShortBackClick()\" [routerLink]=\"\">{{shortBackLabel}}</a> | \n            <a (click)=\"onShortestBackClick()\" [routerLink]=\"\">{{shortestBackLabel}}</a> | \n            nuovo allegato\n          </p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <h1>Nuovo allegato</h1>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" size-sm>\n          <ion-item>\n            <ion-label>Nome:</ion-label>\n            <ion-input placeholder=\"Nome\" formControlName=\"name\"></ion-input> \n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\" size-sm>\n          <ion-item>\n            <ion-label>Tag:</ion-label>\n            <ion-input placeholder=\"parole separate da virgola\" formControlName=\"tags\"></ion-input> \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" size-sm *ngIf=\"knd === 'infortunio'\">\n          <ion-item>\n            <ion-label>Tipo:</ion-label>\n            <ion-select placeholder=\"Seleziona tipo\" formControlName=\"kind\" okText=\"Seleziona\" cancelText=\"Annulla\" interface=\"action-sheet\">\n              <ion-select-option value=\"infortunio-certificato-medico\">Certificato medico d'apertura</ion-select-option>\n              <ion-select-option value=\"infortunio-modulo-denuncia\">Modulo di denuncia</ion-select-option>\n              <ion-select-option value=\"infortunio-documento\">Altro documento</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\" size-sm *ngIf=\"knd === 'cp'\">\n          <ion-item>\n            <ion-label>Tipo:</ion-label>\n            <ion-select placeholder=\"Seleziona tipo\" formControlName=\"kind\" okText=\"Seleziona\" cancelText=\"Annulla\" interface=\"action-sheet\">\n              <ion-select-option value=\"infortunio-polizza-lettera-intervento\">Lettera di intervento</ion-select-option>\n              <ion-select-option value=\"infortunio-polizza-raccomandata\">Raccomandata</ion-select-option>\n              <ion-select-option value=\"infortunio-polizza-documento\">Altro documento</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\" size-sm>\n          <ion-item>\n            <ion-label>File:</ion-label>\n            <ion-input type=\"file\" placeholder=\"allegato\" formControlName=\"file\" (change)=\"onFileChange($event)\"></ion-input> \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" size-sm>\n          <div>\n            <ion-button color=\"primary\" [disabled]=\"!attachmentForm.valid\" (click)=\"onSaveClick()\">\n              <ion-icon slot=\"icon-only\" name=\"save\"></ion-icon>\n            </ion-button>\n            <ion-button color=\"tertiary\" (click)=\"onBackClick()\" *ngIf=\"knd==='infortunio'\">\n              <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n            </ion-button>\n            <ion-button color=\"tertiary\" (click)=\"onShortestBackClick()\" *ngIf=\"knd==='cp'\">\n              <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n"

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
        this.shortBackLabel = '';
        this.shortestBackLabel = '';
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
                resolve(params.kind);
            });
        });
    };
    AttachmentsPage.prototype.getId = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.id$ = _this.ar.params.subscribe(function (params) {
                resolve(params.id);
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
            var _a, _b, _c, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, , 6]);
                        _a = this;
                        return [4 /*yield*/, this.getToken()];
                    case 1:
                        _a.token = _d.sent();
                        _b = this;
                        return [4 /*yield*/, this.getKind()];
                    case 2:
                        _b.knd = _d.sent();
                        this.shortBackLabel = 'Lista polizze allegate';
                        this.shortestBackLabel = 'Polizza allegata';
                        if (this.knd === 'infortunio') {
                            this.backLabel = 'Infortunio';
                            this.listLabel = 'Lista infortuni';
                        }
                        if (!(this.knd === 'cp')) return [3 /*break*/, 4];
                        this.backLabel = 'Infortunio';
                        this.listLabel = 'Lista infortuni';
                        _c = this;
                        return [4 /*yield*/, this.getId()];
                    case 3:
                        _c.id = _d.sent();
                        console.log(this.id);
                        _d.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        err_1 = _d.sent();
                        console.error(err_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
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
        if (this.knd === 'infurtunio') {
            this.router.navigate(['home']);
        }
        if (this.knd === 'cp') {
            this.router.navigate(['home']);
        }
    };
    AttachmentsPage.prototype.onBackClick = function () {
        if (this.knd === 'infortunio') {
            this.router.navigate(['casualty', this.token]);
        }
        if (this.knd === 'cp') {
            this.router.navigate(['casualty', this.token]);
        }
    };
    AttachmentsPage.prototype.onShortBackClick = function () {
        if (this.knd === 'cp') {
            this.router.navigate(['casualty', this.token, 'policies']);
        }
    };
    AttachmentsPage.prototype.onShortestBackClick = function () {
        if (this.knd === 'cp') {
            this.router.navigate(['casualty', this.token, 'policies', this.id]);
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
                if (this.knd === 'cp') {
                    fd.append('cpId', this.id);
                }
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
        this.baseUrl = '/api/attachments';
    }
    AttachmentsService.prototype.asyncGetAttachments = function (token, kind) {
        var session = window.localStorage.getItem('_session');
        if (!session) {
            session = 'loggedout';
        }
        return this.http.get(this.baseUrl + "/" + kind + "/" + token, {
            headers: {
                's-t': session
            }
        });
    };
    AttachmentsService.prototype.asyncPostAttachment = function (attachment, token, kind) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var session = window.localStorage.getItem('_session');
            if (!session) {
                session = 'loggedout';
            }
            _this.http.post(_this.baseUrl + "/" + kind + "/" + token, attachment, {
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
        return this.http.post(this.baseUrl + "/copy/" + a.kind + "/" + a.token + "/" + a._id + "/to/" + destKind + "/" + destTkn, {}, {
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
            _this.http.put(_this.baseUrl + "/" + kind + "/" + token + "/" + attachment._id, attachment, {
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
            _this.http.delete(_this.baseUrl + "/" + kind + "/" + token + "/" + attachment._id, {
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
//# sourceMappingURL=default~casualty-form-casualty-form-module~src-app-attachments-attachments-module.js.map