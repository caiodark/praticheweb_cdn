(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~kind-form-kind-form-module~options-options-module"],{

/***/ "./src/app/models/kind.ts":
/*!********************************!*\
  !*** ./src/app/models/kind.ts ***!
  \********************************/
/*! exports provided: Kind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kind", function() { return Kind; });
var Kind = /** @class */ (function () {
    function Kind() {
    }
    return Kind;
}());



/***/ }),

/***/ "./src/app/models/option.ts":
/*!**********************************!*\
  !*** ./src/app/models/option.ts ***!
  \**********************************/
/*! exports provided: Option */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
var Option = /** @class */ (function () {
    function Option() {
    }
    return Option;
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

/***/ "./src/app/services/kind.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/kind.service.ts ***!
  \******************************************/
/*! exports provided: KindService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KindService", function() { return KindService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/service-status.enum */ "./src/app/models/service-status.enum.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_kind__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/kind */ "./src/app/models/kind.ts");
/* harmony import */ var _option_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./option.service */ "./src/app/services/option.service.ts");







var KindService = /** @class */ (function () {
    function KindService(http, options) {
        this.http = http;
        this.options = options;
    }
    KindService.prototype.asyncGetSumOptions = function (kind) {
        var self = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            self.options.asyncGetList(kind._id).subscribe({
                next: function (ris) {
                    if (ris) {
                        observer.next(ris.length);
                    }
                    else {
                        observer.next(0);
                    }
                },
                error: function (err) {
                    observer.next(0);
                }
            });
        });
    };
    KindService.prototype.asyncPost = function (kind) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var session = window.localStorage.getItem('_session');
            if (!session) {
                session = 'loggedout';
            }
            _this.http.post("/api/setuppolicies/kinds", kind, {
                headers: {
                    's-t': session
                },
                observe: 'response',
                responseType: 'text'
            }).subscribe(function (res) {
                if (res.status === 200) {
                    observer.next(_models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__["ServiceStatus"].OK);
                }
                else {
                    observer.next(_models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__["ServiceStatus"].FAILED);
                }
                return { unsubscribe: function () { } };
            }, function (error) {
                console.log(error);
                observer.error(error);
                return { unsubscribe: function () { } };
            });
        });
    };
    KindService.prototype.asyncPut = function (kind) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var session = window.localStorage.getItem('_session');
            if (!session) {
                session = 'loggedout';
            }
            _this.http.put("/api/setuppolicies/kinds/" + kind._id, kind, {
                headers: {
                    's-t': session
                },
                observe: 'response',
                responseType: 'text'
            }).subscribe(function (res) {
                if (res.status === 200) {
                    observer.next(_models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__["ServiceStatus"].OK);
                }
                else {
                    observer.next(_models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__["ServiceStatus"].FAILED);
                }
                return { unsubscribe: function () { } };
            }, function (error) {
                console.log(error);
                observer.error(error);
                return { unsubscribe: function () { } };
            });
        });
    };
    KindService.prototype.asyncDelete = function (id) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var session = window.localStorage.getItem('_session');
            if (!session) {
                session = 'loggedout';
            }
            _this.http.delete("/api/setuppolicies/kinds/" + id, {
                headers: {
                    's-t': session
                },
                observe: 'response',
                responseType: 'text'
            }).subscribe(function (res) {
                if (res.status === 200) {
                    observer.next(_models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__["ServiceStatus"].OK);
                }
                else {
                    observer.next(_models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__["ServiceStatus"].FAILED);
                }
                return { unsubscribe: function () { } };
            }, function (error) {
                console.log(error);
                observer.error(error);
                return { unsubscribe: function () { } };
            });
        });
    };
    KindService.prototype.asyncGet = function (id) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var session = window.localStorage.getItem('_session');
            if (!session) {
                session = 'loggedout';
            }
            _this.http.get("/api/setuppolicies/kinds/" + id, {
                headers: {
                    's-t': session
                },
                observe: 'response'
            }).subscribe(function (data) {
                console.log(data);
                var primitiveKind = data.body;
                var k = new _models_kind__WEBPACK_IMPORTED_MODULE_5__["Kind"]();
                k.name = primitiveKind.name;
                k.deleted = primitiveKind.deleted;
                k._id = primitiveKind._id;
                observer.next(k);
                return { unsubscribe: function () { } };
            }, function (error) {
                console.log(error);
                observer.error(error);
                return { unsubscribe: function () { } };
            });
        });
    };
    KindService.prototype.asyncGetList = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var session = window.localStorage.getItem('_session');
            if (!session) {
                session = 'loggedout';
            }
            _this.http.get("/api/setuppolicies/kinds", {
                headers: {
                    's-t': session
                },
                observe: 'response'
            }).subscribe(function (data) {
                var primitiveKinds = data.body;
                console.log(data.body);
                var kinds = primitiveKinds.map(function (obj) {
                    var k = new _models_kind__WEBPACK_IMPORTED_MODULE_5__["Kind"]();
                    k.name = obj.name;
                    k.deleted = obj.deleted;
                    k._id = obj._id;
                    return k;
                });
                observer.next(kinds);
                return { unsubscribe: function () { } };
            }, function (error) {
                console.log(error);
                observer.error(error);
                return { unsubscribe: function () { } };
            });
        });
    };
    KindService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _option_service__WEBPACK_IMPORTED_MODULE_6__["OptionService"]])
    ], KindService);
    return KindService;
}());



/***/ }),

/***/ "./src/app/services/option.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/option.service.ts ***!
  \********************************************/
/*! exports provided: OptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionService", function() { return OptionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/service-status.enum */ "./src/app/models/service-status.enum.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_option__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/option */ "./src/app/models/option.ts");






var OptionService = /** @class */ (function () {
    function OptionService(http) {
        this.http = http;
    }
    OptionService.prototype.asyncGetList = function (KindId) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var session = window.localStorage.getItem('_session');
            if (!session) {
                session = 'loggedout';
            }
            _this.http.get("/api/setuppolicies/options/" + KindId + "/", {
                headers: {
                    's-t': session
                },
                observe: 'response'
            }).subscribe(function (data) {
                var primitiveOptions = data.body;
                console.log(data.body);
                var options = primitiveOptions.map(function (obj) {
                    var o = new _models_option__WEBPACK_IMPORTED_MODULE_5__["Option"]();
                    o.name = obj.name;
                    o.deleted = obj.deleted;
                    o._id = obj._id;
                    o.kind = obj.kind;
                    return o;
                });
                observer.next(options);
                return { unsubscribe: function () { } };
            }, function (error) {
                console.log(error);
                observer.error(error);
                return { unsubscribe: function () { } };
            });
        });
    };
    OptionService.prototype.asyncPost = function (kindId, option) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var session = window.localStorage.getItem('_session');
            if (!session) {
                session = 'loggedout';
            }
            _this.http.post("/api/setuppolicies/options/" + kindId, option, {
                headers: {
                    's-t': session
                },
                observe: 'response',
                responseType: 'text'
            }).subscribe(function (res) {
                if (res.status === 200) {
                    observer.next(_models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__["ServiceStatus"].OK);
                }
                else {
                    observer.next(_models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__["ServiceStatus"].FAILED);
                }
                return { unsubscribe: function () { } };
            }, function (error) {
                console.log(error);
                observer.error(error);
                return { unsubscribe: function () { } };
            });
        });
    };
    OptionService.prototype.asyncDelete = function (kindId, id) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var session = window.localStorage.getItem('_session');
            if (!session) {
                session = 'loggedout';
            }
            _this.http.delete("/api/setuppolicies/options/" + kindId + "/" + id, {
                headers: {
                    's-t': session
                },
                observe: 'response',
                responseType: 'text'
            }).subscribe(function (res) {
                if (res.status === 200) {
                    observer.next(_models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__["ServiceStatus"].OK);
                }
                else {
                    observer.next(_models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__["ServiceStatus"].FAILED);
                }
                return { unsubscribe: function () { } };
            }, function (error) {
                console.log(error);
                observer.error(error);
                return { unsubscribe: function () { } };
            });
        });
    };
    OptionService.prototype.asyncGet = function (kindId, id) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var session = window.localStorage.getItem('_session');
            if (!session) {
                session = 'loggedout';
            }
            _this.http.get("/api/setuppolicies/options/" + kindId + "/" + id, {
                headers: {
                    's-t': session
                },
                observe: 'response'
            }).subscribe(function (data) {
                console.log(data);
                var primitiveOption = data.body;
                var k = new _models_option__WEBPACK_IMPORTED_MODULE_5__["Option"]();
                k.name = primitiveOption.name;
                k.deleted = primitiveOption.deleted;
                k._id = primitiveOption._id;
                k.kind = primitiveOption.kind;
                observer.next(k);
                return { unsubscribe: function () { } };
            }, function (error) {
                console.log(error);
                observer.error(error);
                return { unsubscribe: function () { } };
            });
        });
    };
    OptionService.prototype.asyncPut = function (kindId, option) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var session = window.localStorage.getItem('_session');
            if (!session) {
                session = 'loggedout';
            }
            _this.http.put("/api/setuppolicies/options/" + kindId + "/" + option._id, option, {
                headers: {
                    's-t': session
                },
                observe: 'response',
                responseType: 'text'
            }).subscribe(function (res) {
                if (res.status === 200) {
                    observer.next(_models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__["ServiceStatus"].OK);
                }
                else {
                    observer.next(_models_service_status_enum__WEBPACK_IMPORTED_MODULE_2__["ServiceStatus"].FAILED);
                }
                return { unsubscribe: function () { } };
            }, function (error) {
                console.log(error);
                observer.error(error);
                return { unsubscribe: function () { } };
            });
        });
    };
    OptionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], OptionService);
    return OptionService;
}());



/***/ })

}]);
//# sourceMappingURL=default~home-home-module~kind-form-kind-form-module~options-options-module.js.map