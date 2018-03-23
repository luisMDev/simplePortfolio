webpackJsonp(["landing.module"],{

/***/ "../../../../../src/app/components/bar/bar.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>\n  _{{title}}\n</h4>\n<div class=\"content\">\n  <div class=\"bar\"></div>\n  <div [style.width]=\"num+'%'\" class=\"rect\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/bar/bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  padding: 0 30px; }\n  :host:nth-child(odd) {\n    margin-top: 40px;\n    margin-bottom: 0px; }\n  :host .content {\n    height: 30px;\n    border-bottom: 2px solid #37474f;\n    border-left: 2px solid #37474f;\n    width: 100%;\n    position: relative; }\n  :host .content .bar {\n      height: 100%; }\n  :host .content .rect {\n      position: absolute;\n      height: 100%;\n      width: 100%;\n      background: #ffeb3b;\n      top: 10px;\n      left: 10px;\n      z-index: -1; }\n  :host h4 {\n    width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: #37474f; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bar/bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BarComponent = /** @class */ (function () {
    function BarComponent() {
    }
    BarComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], BarComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], BarComponent.prototype, "num", void 0);
    BarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bar',
            template: __webpack_require__("../../../../../src/app/components/bar/bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/bar/bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BarComponent);
    return BarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/job/job.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\n  <div class=\"rect\"></div>\n  <img [src]=\"job.img\">\n</div>\n<div class=\"content\">\n  <h3 class=\"title\">\n    {{ job.title }}\n    <small>_{{job.job}}</small>\n  </h3>\n  <p>{{ job.desc }}</p>\n  <div class=\"date\">\n    _{{ job.time }}\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/job/job.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n  margin-bottom: 50px;\n  float: left;\n  width: 100%;\n  -webkit-transition: 0.25s;\n  transition: 0.25s;\n  border-radius: 4px;\n  padding-left: 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: 60px; }\n  :host:nth-child(odd) {\n    margin-left: 100px; }\n  :host:nth-child(odd) .rect {\n      position: absolute;\n      right: 46px;\n      -webkit-transform: rotateZ(20deg);\n              transform: rotateZ(20deg);\n      -webkit-transform-origin: top center;\n              transform-origin: top center;\n      bottom: -120px;\n      z-index: -1;\n      background: #ffeb3b;\n      height: 140px;\n      min-height: 140px;\n      width: 10px;\n      min-width: 10px; }\n  :host:nth-child(even) .rect {\n    position: absolute;\n    right: 46px;\n    -webkit-transform: rotateZ(-20deg);\n            transform: rotateZ(-20deg);\n    -webkit-transform-origin: top center;\n            transform-origin: top center;\n    bottom: -120px;\n    z-index: -1;\n    background: #ffeb3b;\n    height: 140px;\n    min-height: 140px;\n    width: 10px;\n    min-width: 10px; }\n  :host:last-of-type .rect {\n    display: none; }\n  :host .bg {\n    -webkit-transition: 0.25s;\n    transition: 0.25s;\n    width: 100%;\n    float: left;\n    background-position: center;\n    background-size: contain;\n    min-width: 110px;\n    width: 110px;\n    min-height: 110px;\n    height: 110px;\n    margin-top: 25px;\n    position: relative;\n    background: #fff;\n    padding: 4px; }\n  :host .bg img {\n      height: 100%;\n      width: 100%;\n      -o-object-fit: contain;\n         object-fit: contain;\n      -webkit-filter: grayscale(100%);\n              filter: grayscale(100%); }\n  :host .goTo {\n    float: right;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 14px;\n    padding: 0 20px 20px;\n    opacity: 0.6;\n    font-weight: 400 !important; }\n  :host .goTo i {\n      font-size: 18px;\n      margin-left: 5px; }\n  :host .content {\n    padding-left: 50px; }\n  :host .content .title {\n      float: left;\n      width: 100%;\n      margin-top: 20px;\n      font-size: 24px;\n      min-height: 34px;\n      padding: 0 0px;\n      color: #37474f; }\n  :host .content .title small {\n        opacity: 0.5; }\n  :host .content p {\n      opacity: 0.6;\n      font-weight: 300;\n      font-size: 14px; }\n  :host .content .date {\n      top: 120px;\n      -webkit-transition: 0.5s;\n      transition: 0.5s;\n      font-size: 12px;\n      color: #37474f;\n      letter-spacing: 2px;\n      left: 40px;\n      text-align: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/job/job.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JobComponent = /** @class */ (function () {
    function JobComponent() {
    }
    JobComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], JobComponent.prototype, "job", void 0);
    JobComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-job',
            template: __webpack_require__("../../../../../src/app/components/job/job.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/job/job.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], JobComponent);
    return JobComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/jumbo/jumbo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"bg col-10\">\n    <div class=\"img\">\n      <img src=\"https://firebasestorage.googleapis.com/v0/b/luis-code.appspot.com/o/img%2Fbg.jpeg?alt=media&token=1c7e120c-03ab-492d-bc8e-ff330ceea25f\"\n        alt=\"\">\n    </div>\n    <div class=\"text\">\n      <ng-content></ng-content>\n    </div>\n    <div class=\"rect\"></div>\n  </div>\n  <div class=\"avatar col-4\">\n    <img src=\"https://firebasestorage.googleapis.com/v0/b/luis-code.appspot.com/o/img%2Favatar.png?alt=media&token=6ba746b5-dbce-4d2a-b561-9c66af19738e\"\n      alt=\"\">\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/jumbo/jumbo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .row {\n  position: relative;\n  margin-bottom: 100px; }\n  :host .row .bg {\n    margin-right: -20%;\n    padding: 0; }\n  :host .row .bg > .img {\n      background: #37474f;\n      height: 300px; }\n  :host .row .bg > .img img {\n        opacity: 0.5;\n        -o-object-fit: cover;\n           object-fit: cover;\n        width: 100%;\n        height: 100%;\n        -webkit-filter: grayscale(50%);\n                filter: grayscale(50%); }\n  :host .row .text {\n    position: relative;\n    z-index: 10000; }\n  :host .row .rect {\n    position: absolute;\n    right: -5%;\n    top: 7%;\n    opacity: 0.3;\n    z-index: 1000;\n    background: #ffeb3b;\n    height: 400px;\n    width: 400px; }\n  :host .row .avatar {\n    margin-top: 100px;\n    height: 500px;\n    padding: 0; }\n  :host .row .avatar img {\n      -webkit-filter: grayscale(100%);\n              filter: grayscale(100%);\n      -o-object-fit: cover;\n         object-fit: cover;\n      width: 100%;\n      height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/jumbo/jumbo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JumboComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JumboComponent = /** @class */ (function () {
    function JumboComponent() {
    }
    JumboComponent.prototype.ngOnInit = function () {
    };
    JumboComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-jumbo',
            template: __webpack_require__("../../../../../src/app/components/jumbo/jumbo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/jumbo/jumbo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], JumboComponent);
    return JumboComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<img [src]=\"post.img\" alt=\"\" class=\"bg\">\n<div class=\"date\">\n  _{{ post.time }}\n</div>\n<h3 class=\"title\">\n  _{{ post.title }}\n</h3>\n<p>{{ post.desc }}</p>"

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n  margin-bottom: 30px;\n  float: left;\n  width: 100%;\n  -webkit-transition: 0.25s;\n  transition: 0.25s;\n  cursor: pointer;\n  background: #fff;\n  border-radius: 4px;\n  overflow: hidden;\n  padding-left: 50px; }\n  :host:hover {\n    -webkit-transform: translate3d(0px, 0px, 50px) rotateX(5deg);\n            transform: translate3d(0px, 0px, 50px) rotateX(5deg); }\n  :host:hover img {\n      -webkit-transform: translateY(0px);\n              transform: translateY(0px); }\n  :host:hover .date {\n      top: 140px; }\n  :host .bg {\n    -webkit-transform: translateY(-15px);\n            transform: translateY(-15px);\n    -webkit-transition: 0.25s;\n    transition: 0.25s;\n    width: 100%;\n    float: left;\n    background-position: center;\n    background-size: cover;\n    overflow: hidden;\n    min-height: 200px;\n    background: #37474f;\n    border-bottom: 5px solid #ffec3a; }\n  :host .date {\n    position: absolute;\n    -webkit-transform-origin: bottom left;\n            transform-origin: bottom left;\n    -webkit-transform: rotateZ(-90deg);\n            transform: rotateZ(-90deg);\n    top: 120px;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n    font-size: 14px;\n    color: #37474f;\n    letter-spacing: 4px;\n    left: 40px; }\n  :host .goTo {\n    float: right;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 14px;\n    padding: 0 20px 20px;\n    opacity: 0.6;\n    font-weight: 400 !important; }\n  :host .goTo i {\n      font-size: 18px;\n      margin-left: 5px; }\n  :host p {\n    opacity: 0.6;\n    font-weight: 300;\n    text-align: right;\n    font-size: 14px; }\n  :host .title {\n    float: left;\n    width: 100%;\n    text-align: right;\n    margin-top: 20px;\n    font-size: 24px;\n    min-height: 34px;\n    padding: 0 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostComponent = /** @class */ (function () {
    function PostComponent() {
    }
    PostComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PostComponent.prototype, "post", void 0);
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post',
            template: __webpack_require__("../../../../../src/app/components/post/post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/post/post.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\n  <div class=\"rect\"></div>\n  <img [src]=\"project.img\">\n</div>\n<div class=\"content\">\n  <h3 class=\"title\">\n    _{{ project.title }}\n  </h3>\n  <p>{{ project.desc }}</p>\n  <div class=\"date\">\n    _{{ project.time }}\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/project/project.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: relative;\n  margin-bottom: 80px;\n  float: left;\n  width: 100%;\n  -webkit-transition: 0.25s;\n  transition: 0.25s;\n  border-radius: 4px;\n  padding-left: 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  :host:nth-child(even) {\n    margin-top: 100px;\n    margin-bottom: -20px; }\n  :host .bg {\n    -webkit-transition: 0.25s;\n    transition: 0.25s;\n    width: 100%;\n    float: left;\n    background-position: center;\n    background-size: cover;\n    background: #37474f;\n    min-width: 170px;\n    width: 170px;\n    min-height: 170px;\n    height: 174px;\n    margin-top: 25px;\n    position: relative; }\n  :host .bg .rect {\n      position: absolute;\n      right: -40px;\n      bottom: -40px;\n      opacity: 0.3;\n      z-index: -1;\n      background: #ffeb3b;\n      height: 120px;\n      min-height: 120px;\n      width: 120px;\n      min-width: 120px; }\n  :host .bg img {\n      height: 100%;\n      width: 100%;\n      -o-object-fit: cover;\n         object-fit: cover; }\n  :host .goTo {\n    float: right;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 14px;\n    padding: 0 20px 20px;\n    opacity: 0.6;\n    font-weight: 400 !important; }\n  :host .goTo i {\n      font-size: 18px;\n      margin-left: 5px; }\n  :host .content {\n    padding-left: 30px; }\n  :host .content .title {\n      float: left;\n      width: 100%;\n      margin-top: 20px;\n      font-size: 24px;\n      min-height: 34px;\n      padding: 0 0px; }\n  :host .content p {\n      opacity: 0.6;\n      font-weight: 300;\n      font-size: 14px; }\n  :host .content .date {\n      top: 120px;\n      -webkit-transition: 0.5s;\n      transition: 0.5s;\n      font-size: 12px;\n      color: #37474f;\n      letter-spacing: 2px;\n      left: 40px;\n      text-align: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
    }
    ProjectComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ProjectComponent.prototype, "project", void 0);
    ProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-project',
            template: __webpack_require__("../../../../../src/app/components/project/project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/project/project.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/store.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StoreService = /** @class */ (function () {
    function StoreService() {
    }
    StoreService.prototype.getBars = function () {
        return new Promise(function (resolve) {
            var data = [
                {
                    num: 90,
                    title: 'DESARROLLO FRONT-END CON ANGULAR 1.5 Y 2.0'
                },
                {
                    num: 80,
                    title: 'FIREBASE APP PARA BIG DATA'
                },
                {
                    num: 95,
                    title: 'HTML5,CSS3,SASS'
                },
                {
                    num: 75,
                    title: 'DESARROLLO DE PRESTASHOP Y WORDPRESS'
                },
                {
                    num: 80,
                    title: 'DESARROLLO DE APPS CON IONIC'
                },
                {
                    num: 30,
                    title: 'DESARROLLO DE APPS CON ANDROID STUDIO Y FIREBASE'
                },
                {
                    num: 40,
                    title: 'C# Y JS EN PROYECTOS CON UNITY'
                }
            ];
            resolve(data);
        });
    };
    StoreService.prototype.getSocialMedia = function () {
        return new Promise(function (resolve) {
            var data = [{ icon: '', url: '' }, { icon: '', url: '' }, { icon: '', url: '' }];
            resolve(data);
        });
    };
    StoreService.prototype.getProjectList = function () {
        return new Promise(function (resolve) {
            var data = [
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/luis-code.appspot.com/o/img%2Fcosplayapp.png?alt=media&token=b20bf83c-d4cf-422d-81aa-7d4fe7425289',
                    time: '02-20-2018 - Now',
                    title: 'Cosplayapp',
                    desc: "\n          Cosplay app es una herramienta y red social para todos los cosplayers que necesitan organizar, \n          planear y compartir sus cosplays con el resto del mundo.",
                    url: 'https://cosplayapp.net/'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/luis-code.appspot.com/o/img%2Fpeugeot.png?alt=media&token=d151a4de-78ee-4526-8fbe-aa3aca466be9',
                    time: '05-20-2018',
                    title: 'Reuniones Peugeot',
                    desc: "\n          Aplicaci\u00F3n web con streaming de video sobre una conferencia de Peugeot, con un sistema de \n          preguntas a tiempo real realizado \u00EDntegramente en firebase y angular2",
                    url: 'https://reunionespeugeot.es/'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/luis-code.appspot.com/o/img%2Femanager.png?alt=media&token=98577225-4c2d-40fb-a875-0ea5d39af9c9',
                    time: '02-05-2017 - Now',
                    title: 'Emanager.gg',
                    desc: "\n          Toda la gesti\u00F3n de tu equipo de esports en un solo lugar.\n          Toma el mando de tu equipo y organizalo con las herramientas y recursos que utilizan \n          los clubs profesionales para sus entrenamientos y sus partidos clave",
                    url: 'https://emanager.gg'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/luis-code.appspot.com/o/img%2Ficofolio.png?alt=media&token=90ca73f9-ee83-4f62-9f80-cc146cc96fd9',
                    time: '01-05-2018 - 01-27-2018',
                    title: 'Icofolio',
                    desc: "\n          Proyecto de un par de semanas para llevar la cuenta de las inversiones en criptomonedas\n\n          Crea tu portfolio de ICOs, consulta la evoluci\u00F3n de tus inversiones y los eventos que te \n          interesen, de forma r\u00E1pida, sencilla y desde cualquier dispositivo.",
                    url: 'https://ico-list-ba66a.firebaseapp.com/'
                }
            ];
            resolve(data);
        });
    };
    StoreService.prototype.getPostList = function () {
        return new Promise(function (resolve) {
            var data = [];
            resolve(data);
        });
    };
    StoreService.prototype.getJobList = function () {
        return new Promise(function (resolve) {
            var data = [
                {
                    img: 'https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAMAAgQIAAkAAQAAAAAAAA_xAAAAJDljYTdkMDljLTRmYmUtNDc4Mi05ZWZlLWEzNTNiMjYxYzlmNQ.bin',
                    time: 'Abril 2017 - Abril 2018',
                    title: 'Nfq Advisory, Solutions, Outsourcing',
                    job: 'Desarrollador Front End',
                    desc: "\n          Cosplay app es una herramienta y red social para todos los cosplayers que necesitan organizar, \n          planear y compartir sus cosplays con el resto del mundo.",
                    url: 'https://cosplayapp.net/'
                },
                {
                    img: 'https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAMABAQIAAkAAQAAAAAAABAPAAAAJDA3ZmU5MDA1LTk1ZDYtNDUyYi04YjFmLTk1NDJlZmU5M2JiMA.bin',
                    time: 'Jun 2015 - Abril 2017',
                    title: 'Azken services',
                    job: 'Desarrollador Web',
                    desc: "\n          Gestionar y dirigir un equipo de cuatro personas en proyectos web desarrollados en tecnolog\u00EDas\n          como Angular2, firebase, codeigniter, wordpress y prestashop.\n          Comunicaci\u00F3n con el cliente final y captaci\u00F3n de requisitos para un r\u00E1pido analisis del proyecto \n          y los recursos necesarios para su realizaci\u00F3n."
                },
                {
                    img: 'https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAMABAQIAAkAAQAAAAAAABAPAAAAJDA3ZmU5MDA1LTk1ZDYtNDUyYi04YjFmLTk1NDJlZmU5M2JiMA.bin',
                    time: 'Sept 2014 - Jun 2015',
                    title: 'Azken Muga',
                    job: 'Desarrollador Web',
                    desc: "\n          Toda la gesti\u00F3n de tu equipo de esports en un solo lugar.\n          Toma el mando de tu equipo y organizalo con las herramientas y recursos que utilizan \n          los clubs profesionales para sus entrenamientos y sus partidos clave"
                },
                {
                    img: 'http://www.agruposistemas.es/img/logo.png',
                    time: 'Sept 2012 - Jul 2012',
                    title: 'Agrupo Sistemas',
                    job: 'Desarrollador SAP',
                    desc: "\n          Curso de ABAP IV y creaci\u00F3n de peque\u00F1as herramientas de integraci\u00F3n para peque\u00F1os \n          clientes con licencias del ERP SAP"
                },
                {
                    img: 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAMAAgQIAAkAAQAAAAAAABDOAAAAJGVlMzEzNzk1LWEwYWQtNDBmNC04MzEzLTYwM2YwMjIwY2MzMg.bin',
                    time: 'Abr 2012 - Jul 2012',
                    title: 'SIA Group',
                    job: 'Desarrollador de Zabbix',
                    desc: "\n          Creaci\u00F3n y automatizaci\u00F3n de aplicaciones en Perl y Python relacionadas con la \n          herramienta de monitorizaci\u00F3n Zabbix"
                }
            ];
            resolve(data);
        });
    };
    StoreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StoreService);
    return StoreService;
}());



/***/ }),

/***/ "../../../../../src/app/views/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <app-jumbo>\n    <div class=\"header text-right\" style=\"padding: 40px 30% 20px 0;\">\n      <b>_A</b>bout Me\n    </div>\n    <p style=\"padding: 20px 30% 20px 10%;font-size:19px;\">\n      Soy Luis Manuel Torres. Desarrollador web front-end enfocado a poner en práctica las últimas tecnologías del mercado como\n      Firebase en proyectos innovadores. Tengo formación y experiencia en múltiples aptitudes de desarrollo front-end como\n      Angular 4, Sass, Html5, Bootstrap, etc.\n      <br>\n      <br> Me gusta crear aplicaciones limpias, pulidas y pensadas en la usabilidad y accesibilidad del usuario.\n    </p>\n  </app-jumbo>\n\n  <div class=\"row\" style=\"padding-bottom:120px;\">\n    <div class=\"header col-12\" style=\"margin-bottom: -60px;\">\n      <b>_P</b>rojects\n    </div>\n    <app-project class=\"col-6\" *ngFor=\"let project of projectList\" [project]=\"project\"></app-project>\n  </div>\n\n  <div class=\"row\" *ngIf=\"!projectList?.length\">\n    <div class=\"header text-right col-12\">\n      <b>_M</b>edium Post\n    </div>\n    <app-post class=\"col-4\" *ngFor=\"let project of projectList\" [post]=\"project\"></app-post>\n  </div>\n\n  <div class=\"row\" style=\"padding-bottom:120px;\">\n    <div class=\"header text-right col-12\" style=\"margin-bottom: 30px;\">\n      <b>_A</b>ptitudes y validaciones\n    </div>\n    <app-bar class=\"col-6\" *ngFor=\"let bar of barList\" [num]=\"bar.num\" [title]=\"bar.title\"></app-bar>\n  </div>\n\n  <div class=\"row\" style=\"padding-bottom:20px;\">\n    <div class=\"header col-12\">\n      <b>_E</b>xperiencia\n    </div>\n    <app-job class=\"col-10\" *ngFor=\"let job of jobList\" [job]=\"job\"></app-job>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/landing/landing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .header {\n  font-size: 40px;\n  font-weight: 900;\n  text-transform: lowercase;\n  letter-spacing: 2px;\n  padding: 0 40px 40px;\n  color: #37474f; }\n  :host .header b {\n    color: #ffeb3b; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_store_service__ = __webpack_require__("../../../../../src/app/services/store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingComponent = /** @class */ (function () {
    function LandingComponent(_storeService) {
        this._storeService = _storeService;
    }
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._storeService.getProjectList().then(function (projectList) {
            _this.projectList = projectList;
        });
        this._storeService.getPostList().then(function (postList) {
            _this.postList = postList;
        });
        this._storeService.getBars().then(function (barList) {
            _this.barList = barList;
        });
        this._storeService.getJobList().then(function (jobList) {
            _this.jobList = jobList;
        });
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landing',
            template: __webpack_require__("../../../../../src/app/views/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_services_store_service__["a" /* StoreService */]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/landing/landing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_component__ = __webpack_require__("../../../../../src/app/views/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_components_project_project_component__ = __webpack_require__("../../../../../src/app/components/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_components_jumbo_jumbo_component__ = __webpack_require__("../../../../../src/app/components/jumbo/jumbo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_components_post_post_component__ = __webpack_require__("../../../../../src/app/components/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_services_store_service__ = __webpack_require__("../../../../../src/app/services/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_components_bar_bar_component__ = __webpack_require__("../../../../../src/app/components/bar/bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_components_job_job_component__ = __webpack_require__("../../../../../src/app/components/job/job.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_2__landing_component__["a" /* LandingComponent */] }];
var LandingModule = /** @class */ (function () {
    function LandingModule() {
    }
    LandingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(routes), __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild()],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__landing_component__["a" /* LandingComponent */], __WEBPACK_IMPORTED_MODULE_5__app_components_project_project_component__["a" /* ProjectComponent */], __WEBPACK_IMPORTED_MODULE_6__app_components_jumbo_jumbo_component__["a" /* JumboComponent */], __WEBPACK_IMPORTED_MODULE_7__app_components_post_post_component__["a" /* PostComponent */], __WEBPACK_IMPORTED_MODULE_9__app_components_bar_bar_component__["a" /* BarComponent */], __WEBPACK_IMPORTED_MODULE_10__app_components_job_job_component__["a" /* JobComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__app_services_store_service__["a" /* StoreService */]]
        })
    ], LandingModule);
    return LandingModule;
}());



/***/ })

});
//# sourceMappingURL=landing.module.chunk.js.map