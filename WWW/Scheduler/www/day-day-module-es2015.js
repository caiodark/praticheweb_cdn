(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["day-day-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/day/day.page.html":
/*!*************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/day/day.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button icon-only menuToggle=\"start\">\n        <ion-icon name=\"menu\"></ion-icon>\n      </ion-menu-button>          \n    </ion-buttons>\n    <ion-title>\n      Pratiche Web\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <h1>{{dayLabel}}</h1>\n    <ion-text *ngIf=\"entries.length === 0\">\n      Non sono presenti allarmi o prescrizioni.\n    </ion-text>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\" size-md=\"6\" *ngFor=\"let entry of entries\">\n          <ion-card>\n            <ion-item>\n              <ion-button color=\"primary\" (click)=\"goToSource(entry)\">\n                <ion-icon slot=\"icon-only\" name=\"compass\"></ion-icon>\n              </ion-button>\n              <ion-label>{{entry.kind | kind}} {{entry.title}}</ion-label>\n            </ion-item>\n            <ion-card-content>\n              <ion-text>{{entry.notes}}</ion-text>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item lines=\"none\">\n            <ion-button color=\"primary\" (click)=\"goBack()\">\n              <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n            </ion-button>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/day/day.module.ts":
/*!***********************************!*\
  !*** ./src/app/day/day.module.ts ***!
  \***********************************/
/*! exports provided: DayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayPageModule", function() { return DayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _day_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./day.page */ "./src/app/day/day.page.ts");
/* harmony import */ var src_app_pipes_kind_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/kind.pipe */ "./src/app/pipes/kind.pipe.ts");








const routes = [
    {
        path: '',
        component: _day_page__WEBPACK_IMPORTED_MODULE_6__["DayPage"]
    }
];
let DayPageModule = class DayPageModule {
};
DayPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        providers: [src_app_pipes_kind_pipe__WEBPACK_IMPORTED_MODULE_7__["KindPipe"]],
        declarations: [_day_page__WEBPACK_IMPORTED_MODULE_6__["DayPage"], src_app_pipes_kind_pipe__WEBPACK_IMPORTED_MODULE_7__["KindPipe"]]
    })
], DayPageModule);



/***/ }),

/***/ "./src/app/day/day.page.scss":
/*!***********************************!*\
  !*** ./src/app/day/day.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RheS9kYXkucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/day/day.page.ts":
/*!*********************************!*\
  !*** ./src/app/day/day.page.ts ***!
  \*********************************/
/*! exports provided: DayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayPage", function() { return DayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_4__);





let DayPage = class DayPage {
    constructor(es, router, ar) {
        this.es = es;
        this.router = router;
        this.ar = ar;
        this.dayLabel = '';
        this.entries = [];
    }
    ngOnInit() {
    }
    getList(fromDate, toDate) {
        return new Promise((resolve, reject) => {
            this.es.getList(fromDate, toDate).subscribe({
                next(list) {
                    resolve(list);
                },
                error(err) {
                    reject(err);
                }
            });
        });
    }
    getDay() {
        return new Promise((resolve, reject) => {
            this.day$ = this.ar.params.subscribe(params => {
                resolve(params.day);
            });
        });
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                moment_timezone__WEBPACK_IMPORTED_MODULE_4__["locale"]('it_IT');
                this.day = yield this.getDay();
                this.dayLabel = moment_timezone__WEBPACK_IMPORTED_MODULE_4__(this.day, 'DD-MM-YYYY').tz('Europe/Rome').format('dddd DD/MM/YYYY');
                this.entries = yield this.getList(this.day, this.day);
            }
            catch (err) {
                console.error(err);
            }
        });
    }
    ngOnDestroy() {
        if (this.day$) {
            this.day$.unsubscribe();
        }
    }
    goBack() {
        this.router.navigate(['/']);
    }
    goToSource(e) {
        if (e.kind === 'policy') {
            window.location.href = `http://localhost:8080/policies/policy/${e.token}`;
        }
        if (e.kind === 'casualty') {
            window.location.href = `http://localhost:8080/casualties/casualty/${e.token}`;
        }
        if (e.kind === 'proposal') {
            window.location.href = `http://localhost:8080/policies/proposal/${e.token}`;
        }
    }
};
DayPage.ctorParameters = () => [
    { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
DayPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-day',
        template: __webpack_require__(/*! raw-loader!./day.page.html */ "./node_modules/raw-loader/index.js!./src/app/day/day.page.html"),
        styles: [__webpack_require__(/*! ./day.page.scss */ "./src/app/day/day.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], DayPage);



/***/ }),

/***/ "./src/app/pipes/kind.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/kind.pipe.ts ***!
  \************************************/
/*! exports provided: KindPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KindPipe", function() { return KindPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let KindPipe = class KindPipe {
    transform(value) {
        let result = '';
        switch (value) {
            case 'policy':
                result = 'Polizza';
                break;
            case 'casualty':
                result = 'Infortunio';
                break;
            case 'propose':
                result = 'Proposta';
                break;
            default:
                result = '';
        }
        return result;
    }
};
KindPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'kind'
    })
], KindPipe);



/***/ })

}]);
//# sourceMappingURL=day-day-module-es2015.js.map