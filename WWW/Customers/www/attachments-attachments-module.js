(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["attachments-attachments-module"],{

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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button icon-only menuToggle=\"start\">\n          <ion-icon name=\"menu\"></ion-icon>\n      </ion-menu-button>          \n    </ion-buttons>\n    <ion-title>\n      Pratiche Web\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"attachmentForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <p>\n            <a (click)=\"onListaClick()\" [routerLink]=\"\">Lista Clienti</a> | <a (click)=\"onBackClick()\" [routerLink]=\"\">Cliente</a> | nuovo allegato\n          </p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <h1>Nuovo allegato</h1>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" size-sm>\n          <ion-item>\n            <ion-label>Nome:</ion-label>\n            <ion-input placeholder=\"Nome\" formControlName=\"name\"></ion-input> \n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\" size-sm>\n          <ion-item>\n            <ion-label>Tag:</ion-label>\n            <ion-input placeholder=\"parole separate da virgola\" formControlName=\"tags\"></ion-input> \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" size-sm>\n          <ion-item>\n            <ion-label>Tipo:</ion-label>\n            <ion-select placeholder=\"Seleziona tipo\" formControlName=\"kind\" okText=\"Seleziona\" cancelText=\"Annulla\">\n              <ion-select-option value=\"customer\">Allegato</ion-select-option>\n              <ion-select-option value=\"avatar\">Avatar</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\" size-sm>\n          <ion-item>\n            <ion-label>File:</ion-label>\n            <ion-input type=\"file\" placeholder=\"allegato\" formControlName=\"file\" (change)=\"onFileChange($event)\"></ion-input> \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\" size-sm>\n          <div>\n            <ion-button color=\"primary\" [disabled]=\"!attachmentForm.valid\" (click)=\"onSaveClick()\">\n              <ion-icon slot=\"icon-only\" name=\"save\"></ion-icon>\n            </ion-button>\n            <ion-button color=\"tertiary\" (click)=\"onBackClick()\">\n              <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n"

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
                var tokenName = 'id';
                resolve(params[tokenName]);
            });
        });
    };
    AttachmentsPage.prototype.ngOnInit = function () {
    };
    AttachmentsPage.prototype.ngOnDestroy = function () {
        if (this.route$) {
            this.route$.unsubscribe();
        }
    };
    AttachmentsPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.getToken()];
                    case 1:
                        _a.token = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _b.sent();
                        console.error(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
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
        this.router.navigate(['home']);
    };
    AttachmentsPage.prototype.onBackClick = function () {
        this.router.navigate(['customer-form', this.token]);
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
                                        self.router.navigate(['customer-form', self.token]);
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



/***/ })

}]);
//# sourceMappingURL=attachments-attachments-module.js.map