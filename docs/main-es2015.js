(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" [style.height.px]=\"screenHeight\">\n  <div class=\"row\">\n    <div class=\"col-12 mt-5\">\n      <app-timer [aboutSection]=\"aboutSection\" (showHideTaskSection)=\"showHideTaskSection($event)\"></app-timer>\n    </div>\n  </div>\n  <div class=\"row\" [hidden]=\"!taskSectionIsVisible\">\n    <div class=\"col-12\">\n      <hr>\n      <app-task-list></app-task-list>\n    </div>\n  </div>\n  <div class=\"row mt-5\" [hidden]=\"!taskSectionIsVisible\">\n    <div class=\"col-12\">\n      <app-task-manager></app-task-manager>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid\" id=\"about-section\" #aboutSection>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-8 mx-auto\">\n      <h4>What is it?</h4>\n      <p>25minutes is a simple yet very powerful time tracking tool.\n        It is based on <a href=\"https://en.wikipedia.org/wiki/Pomodoro_Technique\" target=\"_blank\" class=\"about-link\">Pomodoro Technique</a>.\n        The idea is simple - you work for given time (25 or 45 or any other time span that fits you) then you take a break and after break you start again to work.\n      </p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-8 mx-auto\">\n      <h4>How to use it?</h4>\n      <p>By default work time is 25 minutes and break is 5 minutes. In settings you can change it. After each session (work and break session) there is a notification.\n      Next session starts automatically but you can pause it or restart.</p>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"container-fluid\">\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-12 mx-auto\">\n      <p>Built with <a href=\"https://angular.io/\" target=\"_blank\" class=\"about-link\">Angular 8</a> and <a href=\"https://getbootstrap.com/\" class=\"about-link\">Boostrap 4.4</a>, source is on\n        <a href=\"https://github.com/robertsv/25minutes\" target=\"_blank\" class=\"about-link\">GitHub</a>.\n      </p>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/task-list/task-list.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task-list/task-list.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h2 class=\"text-center task-list__header\">Tasks</h2>\n    </div>\n  </div>\n  <div class=\"row task-list__item\" *ngFor=\"let task of tasks; let i = index; let showActions = false;\">\n    <div class=\"col-10 mx-auto\" (mouseover)=\"showActions = true\" (mouseout)=\"showActions = false\">\n      <div class=\"container m-0 \">\n        <div class=\"row\">\n          <div class=\"col-1\">\n            <span class=\"far fa-square\" [ngClass]=\"{'fa-check-square' : task.checked, 'fa-square' : !task.checked}\" (click)=\"checkOrUncheck(i)\">\n            </span>\n          </div>\n          <div class=\"col-9\">\n            <span class=\"task-list__item-name\" [ngStyle]=\"{'text-decoration': task.checked ? 'line-through ': 'none'}\">{{ task.name }}</span>\n          </div>\n          <div class=\"col-2\" [hidden]=\"!showActions\">\n            <span class=\"task-list__item-action\" (click)=\"checkOrUncheck(i)\">{{ task.checked ? 'Undone' : 'Done'  }}</span>\n            <span class=\"task-list__item-action ml-1 mr-1\">|</span>\n            <span class=\"task-list__item-action\" (click)=\"delete(i)\">Delete</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/task-manager/task-manager.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task-manager/task-manager.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container p-0\">\n  <div class=\"row\">\n    <div class=\"col-md-8 mx-auto\">\n      <form (ngSubmit)=\"onSubmit(formRef)\" #formRef=\"ngForm\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" id=\"task\" placeholder=\"Write here task description\" name=\"task\" ngModel required\n                 [ngClass]=\"{'is-invalid': taskRef.invalid && taskRef.touched && submittedInvalid}\" #taskRef=\"ngModel\">\n          <small class=\"form-text text-danger\" *ngIf=\"taskRef.invalid && submittedInvalid\">\n            Please enter task name!\n          </small>\n        </div>\n        <button type=\"submit\" class=\"btn btn-outline-info btn-block task-submit-btn mx-auto\">\n          Add task!\n        </button>\n      </form>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/timer/timer.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/timer/timer.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"countdown__timer\" [ngClass]=\"{'countdown__timer--work': mode === 0, 'countdown__timer--break': mode === 1}\">\r\n        {{ timeLeft | minutesSeconds }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row mt-2 d-none d-sm-block\">\r\n    <div class=\"col-12\">\r\n      <div class=\"float-left\">\r\n        <span class=\"countdown__about-link\" (click)=\"scrollToAbout()\">About!</span>\r\n      </div>\r\n      <div class=\"float-right\">\r\n        <button type=\"button\" class=\"btn btn-outline-info btn-sm countdown__setup-btn\"\r\n                (click)=\"openCountDownSetupDialog()\"\r\n                [disabled]=\"running\">\r\n          Settings\r\n        </button>\r\n        <span class=\"ml-1\">\r\n          <button type=\"button\" class=\"btn btn-outline-dark btn-sm countdown__setup-btn\"\r\n                  (click)=\"showHideTaskList()\">\r\n            {{ showTaskList ? \"Hide\" : \"Show\"}} task list\r\n          </button>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row mt-2 mt-sm-5\">\r\n    <div class=\"col-12\">\r\n      <span>\r\n        <button class=\"btn btn-primary btn-info btn-block countdown__start-btn mx-auto\" (click)=\"startStop()\">\r\n          {{ running ? \"Pause\" : \"Start\" }}\r\n          {{ mode === 0 ? \" work\" : \" break\" }}\r\n        </button>\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row mt-2\">\r\n    <div class=\"col-12\">\r\n      <span>\r\n        <div class=\"countdown__reset-link mx-auto\" [style.visibility]=\"wasStarted() ? 'visible' : 'hidden'\" (click)=\"resetTimer()\">Reset</div>\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row mt-2 d-sm-none d-block\">\r\n    <div class=\"col-12\">\r\n      <button type=\"button\" class=\"btn btn-outline-info btn-block\"\r\n              (click)=\"openCountDownSetupDialog()\"\r\n              [disabled]=\"running\">\r\n        Settings\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row mt-2 d-sm-none d-block\">\r\n    <div class=\"col-12\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark btn-block\"\r\n              (click)=\"showHideTaskList()\">\r\n        {{ showTaskList ? \"Hide\" : \"Show\"}} task list\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"modal fade\" #dialog id=\"countdown-setup-dialog\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"countdown-setup-dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <form (ngSubmit)=\"saveConfiguration(formRef)\" #formRef=\"ngForm\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\">Set time that you will work</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"new-work-duration\" class=\"col-2 col-form-label\">Work</label>\r\n            <div class=\"col-5\">\r\n              <input class=\"form-control\"\r\n                     type=\"number\"\r\n                     #workDurationRef=ngModel\r\n                     [(ngModel)]=\"workDurationMinEdit\"\r\n                     required\r\n                     min=\"1\"\r\n                     max=\"180\"\r\n                     id=\"new-work-duration\"\r\n                     name=\"workDuration\"\r\n                     [ngClass]=\"{'is-invalid': workDurationRef.invalid && workDurationRef.touched}\"\r\n                     (keydown.enter)=\"saveConfiguration(formRef)\">\r\n            </div>\r\n            <div class=\"col-5\">\r\n              <small class=\"form-text text-danger\" *ngIf=\"workDurationRef.invalid && workDurationRef.touched\">\r\n                Please enter valid value from 1 to 180 minutes.\r\n              </small>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"new-break-duration\" class=\"col-2 col-form-label\">Break</label>\r\n            <div class=\"col-5\">\r\n              <input class=\"form-control\"\r\n                     type=\"number\"\r\n                     #breakDurationRef=ngModel\r\n                     [(ngModel)]=\"breakDurationMinEdit\"\r\n                     required\r\n                     min=\"1\"\r\n                     max=\"180\"\r\n                     id=\"new-break-duration\"\r\n                     name=\"breakDuration\"\r\n                     [ngClass]=\"{'is-invalid': breakDurationRef.invalid && breakDurationRef.touched}\"\r\n                     (keydown.enter)=\"saveConfiguration(formRef)\">\r\n            </div>\r\n            <div class=\"col-5\">\r\n              <small class=\"form-text text-danger\" *ngIf=\"breakDurationRef.invalid && breakDurationRef.touched\">\r\n                Please enter valid value from 1 to 180 minutes.\r\n              </small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-outline-warning\" data-dismiss=\"modal\">Close</button>\r\n          <button type=\"submit\" class=\"btn btn-outline-success\">Ok</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* adjustments for bootstrap */\r\n.container {\r\n  max-width: 800px;\r\n}\r\n.container-fluid {\r\n  color: dimgray;\r\n}\r\n.about-link {\r\n  font-size: 1rem;\r\n  color: grey;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEJBQThCO0FBQzlCO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBhZGp1c3RtZW50cyBmb3IgYm9vdHN0cmFwICovXHJcbi5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQge1xyXG4gIGNvbG9yOiBkaW1ncmF5O1xyXG59XHJcblxyXG4uYWJvdXQtbGluayB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGNvbG9yOiBncmV5O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'pomodoro-timer';
        this.taskSectionIsVisible = true;
    }
    showHideTaskSection(showTaskList) {
        this.taskSectionIsVisible = showTaskList;
    }
    ngOnInit() {
        this.screenHeight = window.innerHeight;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timer/timer.component */ "./src/app/timer/timer.component.ts");
/* harmony import */ var _task_manager_task_manager_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-manager/task-manager.component */ "./src/app/task-manager/task-manager.component.ts");
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task-list/task-list.component */ "./src/app/task-list/task-list.component.ts");
/* harmony import */ var _shared_min_validator_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/min-validator.directive */ "./src/app/shared/min-validator.directive.ts");
/* harmony import */ var _shared_max_validator_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/max-validator.directive */ "./src/app/shared/max-validator.directive.ts");
/* harmony import */ var _shared_minutes_seconds_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/minutes-seconds.pipe */ "./src/app/shared/minutes-seconds.pipe.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _timer_timer_component__WEBPACK_IMPORTED_MODULE_5__["TimerComponent"],
            _task_manager_task_manager_component__WEBPACK_IMPORTED_MODULE_6__["TaskManagerComponent"],
            _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_7__["TaskListComponent"],
            _shared_min_validator_directive__WEBPACK_IMPORTED_MODULE_8__["MinValidatorDirective"],
            _shared_max_validator_directive__WEBPACK_IMPORTED_MODULE_9__["MaxValidatorDirective"],
            _shared_minutes_seconds_pipe__WEBPACK_IMPORTED_MODULE_10__["MinutesSecondsPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/shared/data.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/data.service.ts ***!
  \****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/app/shared/task.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage.service */ "./src/app/shared/storage.service.ts");





let DataService = class DataService {
    constructor(storageService) {
        this.storageService = storageService;
        this.tasksSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.tasksObservable = this.tasksSource.asObservable();
        this.tasks = storageService.loadTasksStorage();
    }
    getTasks() {
        return [...this.tasks];
    }
    addTask(taskName) {
        this.tasks.push(new _task__WEBPACK_IMPORTED_MODULE_2__["Task"](taskName, false));
        this.storageService.saveTasksInStorage(this.tasks);
        this.tasksSource.next(this.tasks);
    }
    checkOrUncheckTask(i) {
        this.tasks[i].checked = !this.tasks[i].checked;
        this.storageService.saveTasksInStorage(this.tasks);
        this.tasksSource.next(this.tasks);
    }
    deleteTask(i) {
        this.tasks.splice(i, 1);
        this.storageService.saveTasksInStorage(this.tasks);
        this.tasksSource.next(this.tasks);
    }
};
DataService.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/shared/max-validator.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/max-validator.directive.ts ***!
  \***************************************************/
/*! exports provided: MaxValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxValidatorDirective", function() { return MaxValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var MaxValidatorDirective_1;



let MaxValidatorDirective = MaxValidatorDirective_1 = class MaxValidatorDirective {
    constructor() {
    }
    validate(formControl) {
        if (formControl.dirty) {
            const val = formControl.value;
            if (!isNaN(val) && val > this.max) {
                return { max: true };
            }
        }
        return null;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MaxValidatorDirective.prototype, "max", void 0);
MaxValidatorDirective = MaxValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[max]',
        providers: [
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: MaxValidatorDirective_1, multi: true }
        ]
    })
], MaxValidatorDirective);



/***/ }),

/***/ "./src/app/shared/min-validator.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/min-validator.directive.ts ***!
  \***************************************************/
/*! exports provided: MinValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinValidatorDirective", function() { return MinValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var MinValidatorDirective_1;



let MinValidatorDirective = MinValidatorDirective_1 = class MinValidatorDirective {
    constructor() {
    }
    validate(formControl) {
        if (formControl.dirty) {
            const val = formControl.value;
            if (!isNaN(val) && val < this.min) {
                return { min: true };
            }
        }
        return null;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MinValidatorDirective.prototype, "min", void 0);
MinValidatorDirective = MinValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[min]',
        providers: [
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: MinValidatorDirective_1, multi: true }
        ]
    })
], MinValidatorDirective);



/***/ }),

/***/ "./src/app/shared/minutes-seconds.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/shared/minutes-seconds.pipe.ts ***!
  \************************************************/
/*! exports provided: MinutesSecondsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinutesSecondsPipe", function() { return MinutesSecondsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MinutesSecondsPipe = class MinutesSecondsPipe {
    transform(value) {
        const minutes = Math.floor(value / 60);
        const seconds = value - minutes * 60;
        return minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
    }
};
MinutesSecondsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'minutesSeconds'
    })
], MinutesSecondsPipe);



/***/ }),

/***/ "./src/app/shared/notification.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/notification.service.ts ***!
  \************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotificationService = class NotificationService {
    sendNotification(title, message) {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission().then(r => {
            });
        }
        const notification = new Notification(title, {
            body: message,
        });
        setTimeout(() => {
            notification.close();
        }, 4000);
    }
};
NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NotificationService);



/***/ }),

/***/ "./src/app/shared/storage.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/storage.service.ts ***!
  \*******************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var StorageService_1;


let StorageService = StorageService_1 = class StorageService {
    loadTasksStorage() {
        return JSON.parse(localStorage.getItem(StorageService_1.STORAGE_KEY_TASKS)) || [];
    }
    saveTasksInStorage(tasks) {
        localStorage.setItem(StorageService_1.STORAGE_KEY_TASKS, JSON.stringify(tasks));
    }
    saveDurationInStorage(workDuration, breakDuration) {
        localStorage.setItem(StorageService_1.STORAGE_KEY_WORK_DURATION, JSON.stringify(workDuration));
        localStorage.setItem(StorageService_1.STORAGE_KEY_BREAK_DURATION, JSON.stringify(breakDuration));
    }
    loadWorkDurationFromStorage() {
        return JSON.parse(localStorage.getItem(StorageService_1.STORAGE_KEY_WORK_DURATION));
    }
    loadBreakDurationFromStorage() {
        return JSON.parse(localStorage.getItem(StorageService_1.STORAGE_KEY_BREAK_DURATION));
    }
    saveShowHideTaskListInStorage(showHideTaskList) {
        localStorage.setItem(StorageService_1.STORAGE_SHOW_HIDE_TASK_LIST, JSON.stringify(showHideTaskList));
    }
    loadShowHideTaskListFromStorage() {
        if (localStorage.getItem(StorageService_1.STORAGE_SHOW_HIDE_TASK_LIST) === null) {
            return false;
        }
        return JSON.parse(localStorage.getItem(StorageService_1.STORAGE_SHOW_HIDE_TASK_LIST));
    }
};
StorageService.STORAGE_KEY_TASKS = 'tasks';
StorageService.STORAGE_KEY_WORK_DURATION = 'time';
StorageService.STORAGE_KEY_BREAK_DURATION = 'break';
StorageService.STORAGE_SHOW_HIDE_TASK_LIST = 'show_hide_task_list';
StorageService = StorageService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ "./src/app/shared/task.ts":
/*!********************************!*\
  !*** ./src/app/shared/task.ts ***!
  \********************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Task {
    constructor(name, checked) {
        this.name = name;
        this.checked = checked;
    }
}


/***/ }),

/***/ "./src/app/task-list/task-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/task-list/task-list.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".task-list__header {\r\n  color: dimgray;\r\n}\r\n\r\n.task-list__item {\r\n  font-size: 1.7rem;\r\n  color: dimgray;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.task-list__item-name {\r\n  font-size: 1.1rem;\r\n  word-break: break-word;\r\n}\r\n\r\n.task-list__item-action {\r\n  font-size: 0.9rem;\r\n  color: grey;\r\n}\r\n\r\n.task-list__item-action:hover {\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay1saXN0L3Rhc2stbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvdGFzay1saXN0L3Rhc2stbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhc2stbGlzdF9faGVhZGVyIHtcclxuICBjb2xvcjogZGltZ3JheTtcclxufVxyXG5cclxuLnRhc2stbGlzdF9faXRlbSB7XHJcbiAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgY29sb3I6IGRpbWdyYXk7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi50YXNrLWxpc3RfX2l0ZW0tbmFtZSB7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxufVxyXG5cclxuLnRhc2stbGlzdF9faXRlbS1hY3Rpb24ge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGNvbG9yOiBncmV5O1xyXG59XHJcblxyXG4udGFzay1saXN0X19pdGVtLWFjdGlvbjpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/task-list/task-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/task-list/task-list.component.ts ***!
  \**************************************************/
/*! exports provided: TaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data.service */ "./src/app/shared/data.service.ts");



let TaskListComponent = class TaskListComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
        this.tasks = this.dataService.getTasks();
        this.subscription = this.dataService.tasksObservable.subscribe((tasks) => {
            this.tasks = tasks;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    checkOrUncheck(i) {
        this.dataService.checkOrUncheckTask(i);
    }
    delete(i) {
        this.dataService.deleteTask(i);
    }
};
TaskListComponent.ctorParameters = () => [
    { type: _shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
TaskListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/task-list/task-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-list.component.css */ "./src/app/task-list/task-list.component.css")).default]
    })
], TaskListComponent);



/***/ }),

/***/ "./src/app/task-manager/task-manager.component.css":
/*!*********************************************************!*\
  !*** ./src/app/task-manager/task-manager.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 576px) {\r\n  .task-submit-btn {\r\n    width: 200px\r\n  }\r\n}\r\n\r\n@media (max-width: 575px) {\r\n  .task-submit-btn {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/* style Angular input field error state */\r\n\r\ninput.ng-invalid.ng-touched {\r\n  border: 1px solid red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay1tYW5hZ2VyL3Rhc2stbWFuYWdlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBLDBDQUEwQzs7QUFDMUM7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC90YXNrLW1hbmFnZXIvdGFzay1tYW5hZ2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAudGFzay1zdWJtaXQtYnRuIHtcclxuICAgIHdpZHRoOiAyMDBweFxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgLnRhc2stc3VibWl0LWJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi8qIHN0eWxlIEFuZ3VsYXIgaW5wdXQgZmllbGQgZXJyb3Igc3RhdGUgKi9cclxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/task-manager/task-manager.component.ts":
/*!********************************************************!*\
  !*** ./src/app/task-manager/task-manager.component.ts ***!
  \********************************************************/
/*! exports provided: TaskManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskManagerComponent", function() { return TaskManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data.service */ "./src/app/shared/data.service.ts");



let TaskManagerComponent = class TaskManagerComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
    }
    onSubmit(form) {
        if (form.invalid) {
            this.submittedInvalid = true;
            return;
        }
        this.submittedInvalid = false;
        this.dataService.addTask(form.value.task);
        form.reset();
    }
};
TaskManagerComponent.ctorParameters = () => [
    { type: _shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
TaskManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task-manager',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-manager.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/task-manager/task-manager.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-manager.component.css */ "./src/app/task-manager/task-manager.component.css")).default]
    })
], TaskManagerComponent);



/***/ }),

/***/ "./src/app/timer/timer.component.css":
/*!*******************************************!*\
  !*** ./src/app/timer/timer.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'https://fonts.googleapis.com/css?family=Nova+Mono|Eczar';\r\n\r\n.countdown__timer {\r\n  font-family: 'Nova Mono', monospace;\r\n  font-weight: bold;\r\n  width: 100%;\r\n  border-radius: 25px;\r\n  border: 5px solid #17a2b8;\r\n  text-align: center;\r\n  color: #17a2b8;\r\n}\r\n\r\n.countdown__timer--work {\r\n  color: #c1666b;\r\n}\r\n\r\n.countdown__timer--break {\r\n  color: #7dcfb6;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .countdown__timer {\r\n    font-size: 8rem;\r\n    height: 200px;\r\n  }\r\n}\r\n\r\n@media (max-width: 575px) {\r\n  .countdown__timer {\r\n    font-size: 6rem;\r\n  }\r\n}\r\n\r\n.countdown__about-link {\r\n  font-size: 1rem;\r\n  color: grey;\r\n}\r\n\r\n.countdown__about-link:hover {\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n}\r\n\r\n.countdown__reset-link {\r\n  font-size: 1rem;\r\n  color: grey;\r\n}\r\n\r\n.countdown__reset-link:hover {\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .countdown__start-btn {\r\n    width: 325px;\r\n  }\r\n  .countdown__reset-link {\r\n    width: 325px;\r\n  }\r\n}\r\n\r\n@media (max-width: 575px) {\r\n  .countdown__start-btn {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n.countdown__setup-btn {\r\n  width: 110px;\r\n}\r\n\r\n.countdown__setup-btn:disabled {\r\n  cursor: default;\r\n  text-decoration: none;\r\n}\r\n\r\n/* adjustments for bootstrap */\r\n\r\n.modal-header {\r\n  border-bottom: 0 none;\r\n}\r\n\r\n.modal-footer {\r\n  border-top: 0 none;\r\n}\r\n\r\n.container {\r\n  min-width: 360px;\r\n  max-width: 800px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZXIvdGltZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRUFBaUU7O0FBRWpFO0VBQ0UsbUNBQW1DO0VBQ25DLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQSw4QkFBOEI7O0FBQzlCO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3RpbWVyL3RpbWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Tm92YStNb25vfEVjemFyJztcclxuXHJcbi5jb3VudGRvd25fX3RpbWVyIHtcclxuICBmb250LWZhbWlseTogJ05vdmEgTW9ubycsIG1vbm9zcGFjZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkICMxN2EyYjg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMTdhMmI4O1xyXG59XHJcblxyXG4uY291bnRkb3duX190aW1lci0td29yayB7XHJcbiAgY29sb3I6ICNjMTY2NmI7XHJcbn1cclxuXHJcbi5jb3VudGRvd25fX3RpbWVyLS1icmVhayB7XHJcbiAgY29sb3I6ICM3ZGNmYjY7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC5jb3VudGRvd25fX3RpbWVyIHtcclxuICAgIGZvbnQtc2l6ZTogOHJlbTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAuY291bnRkb3duX190aW1lciB7XHJcbiAgICBmb250LXNpemU6IDZyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uY291bnRkb3duX19hYm91dC1saW5rIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbi5jb3VudGRvd25fX2Fib3V0LWxpbms6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5jb3VudGRvd25fX3Jlc2V0LWxpbmsge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuLmNvdW50ZG93bl9fcmVzZXQtbGluazpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgLmNvdW50ZG93bl9fc3RhcnQtYnRuIHtcclxuICAgIHdpZHRoOiAzMjVweDtcclxuICB9XHJcbiAgLmNvdW50ZG93bl9fcmVzZXQtbGluayB7XHJcbiAgICB3aWR0aDogMzI1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAuY291bnRkb3duX19zdGFydC1idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uY291bnRkb3duX19zZXR1cC1idG4ge1xyXG4gIHdpZHRoOiAxMTBweDtcclxufVxyXG5cclxuLmNvdW50ZG93bl9fc2V0dXAtYnRuOmRpc2FibGVkIHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4vKiBhZGp1c3RtZW50cyBmb3IgYm9vdHN0cmFwICovXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDAgbm9uZTtcclxufVxyXG5cclxuLm1vZGFsLWZvb3RlciB7XHJcbiAgYm9yZGVyLXRvcDogMCBub25lO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtaW4td2lkdGg6IDM2MHB4O1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/timer/timer.component.ts":
/*!******************************************!*\
  !*** ./src/app/timer/timer.component.ts ***!
  \******************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _shared_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/storage.service */ "./src/app/shared/storage.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







var Mode;
(function (Mode) {
    Mode[Mode["Work"] = 0] = "Work";
    Mode[Mode["Break"] = 1] = "Break";
})(Mode || (Mode = {}));
let TimerComponent = class TimerComponent {
    constructor(notificationService, storageService, title, datePipe) {
        this.notificationService = notificationService;
        this.storageService = storageService;
        this.title = title;
        this.datePipe = datePipe;
        this.showHideTaskSection = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showTaskList = true;
        this.cntDownInterval = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.running = false;
        this.mode = Mode.Work;
    }
    ngOnInit() {
        this.workDurationSec = this.storageService.loadWorkDurationFromStorage() || 25 * 60;
        this.breakDurationSec = this.storageService.loadBreakDurationFromStorage() || 5 * 60;
        this.showTaskList = this.storageService.loadShowHideTaskListFromStorage();
        this.showHideTaskSection.emit(this.showTaskList);
        this.timeLeft = this.workDurationSec;
        this.updateTitle();
    }
    startStop() {
        if (!this.running) {
            this.start();
        }
        else {
            this.stop();
        }
    }
    start() {
        this.running = true;
        this.cntDownSub = this.cntDownInterval.subscribe(val => {
            this.timeLeft--;
            this.updateTitle();
            if (this.timeLeft === 0) {
                this.timeIsOut();
            }
        });
    }
    stop() {
        this.running = false;
        this.cntDownSub.unsubscribe();
    }
    resetTimer() {
        this.stop();
        this.resetLeftTime();
    }
    timeIsOut() {
        this.running = false;
        this.cntDownSub.unsubscribe();
        this.sendNotification();
        this.flipMode();
        this.resetLeftTime();
        const audio = new Audio();
        audio.src = 'assets/zapsplat_bell_small_hand_ring_short_012_39329.mp3';
        audio.load();
        audio.play();
        setTimeout(() => {
            this.startStop();
        }, 1000);
    }
    sendNotification() {
        if (this.mode === Mode.Work) {
            this.notificationService.sendNotification('Take a break!', 'Well done! Take a break.');
        }
        else {
            this.notificationService.sendNotification('Break is over!', 'Time to work!');
        }
    }
    resetLeftTime() {
        if (this.mode === Mode.Work) {
            this.timeLeft = this.workDurationSec;
        }
        else {
            this.timeLeft = this.breakDurationSec;
        }
        this.updateTitle();
    }
    flipMode() {
        if (this.mode === Mode.Work) {
            this.mode = Mode.Break;
        }
        else {
            this.mode = Mode.Work;
        }
    }
    getDuration() {
        if (this.mode === Mode.Work) {
            return this.workDurationSec;
        }
        else {
            return this.breakDurationSec;
        }
    }
    wasStarted() {
        return this.timeLeft !== this.getDuration();
    }
    openCountDownSetupDialog() {
        this.workDurationMinEdit = this.workDurationSec / 60;
        this.breakDurationMinEdit = this.breakDurationSec / 60;
        $(this.dialog.nativeElement).modal('show');
    }
    closeCountDownSetupDialog() {
        $(this.dialog.nativeElement).modal('hide');
    }
    showHideTaskList() {
        this.showTaskList = !this.showTaskList;
        this.storageService.saveShowHideTaskListInStorage(this.showTaskList);
        this.showHideTaskSection.emit(this.showTaskList);
    }
    scrollToAbout() {
        setTimeout(() => this.aboutSection.scrollIntoView({ behavior: 'smooth' }), 0);
    }
    saveConfiguration(form) {
        if (form.valid) {
            this.workDurationSec = this.workDurationMinEdit * 60;
            this.breakDurationSec = this.breakDurationMinEdit * 60;
            if (this.mode === Mode.Work) {
                this.timeLeft = this.workDurationSec;
            }
            else {
                this.timeLeft = this.breakDurationSec;
            }
            this.updateTitle();
            this.storageService.saveDurationInStorage(this.workDurationSec, this.breakDurationSec);
            this.closeCountDownSetupDialog();
        }
    }
    updateTitle() {
        this.title.setTitle(this.datePipe.transform(this.timeLeft * 1000, 'mm:ss'));
    }
};
TimerComponent.ctorParameters = () => [
    { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] },
    { type: _shared_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('aboutSection')
], TimerComponent.prototype, "aboutSection", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TimerComponent.prototype, "showHideTaskSection", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dialog', { static: false })
], TimerComponent.prototype, "dialog", void 0);
TimerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./timer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/timer/timer.component.html")).default,
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./timer.component.css */ "./src/app/timer/timer.component.css")).default]
    })
], TimerComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Roberts\GitHub\25minutes\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map