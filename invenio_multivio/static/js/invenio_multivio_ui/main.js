(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Change url change info about document to display  (JSON OR XML)-->\n<!-- <app-multivio  [url]=\"'data/json/multi-image.json/'\"></app-multivio>\n<app-multivio  [url]=\"'data/json/FR0047.json/'\"></app-multivio>\n<app-multivio  [url]=\"'data/json/doppler.json/'\"></app-multivio>\n<app-multivio  [url]=\"'data/json/multi-image.json/'\"></app-multivio>\n<app-multivio  [url]=\"'data/json/multi-mix.json/'\"></app-multivio> -->\n<!-- <app-multivio  [url]=\"'data/json/multi-pdf.json/'\"></app-multivio> -->\n<!-- <app-multivio  [url]=\"'data/xml/multi-mix.xml'\"></app-multivio> -->\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_resize_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-resize-event */ "./node_modules/angular-resize-event/angular-resize-event.umd.js");
/* harmony import */ var angular_resize_event__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular_resize_event__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/locales/fr */ "./node_modules/@angular/common/locales/fr.js");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _bottom_menu_bottom_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bottom-menu/bottom-menu.component */ "./src/app/bottom-menu/bottom-menu.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _multivio_layout_multivio_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./multivio-layout/multivio-layout.component */ "./src/app/multivio-layout/multivio-layout.component.ts");
/* harmony import */ var _collapsed_menu_collapsed_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./collapsed-menu/collapsed-menu.component */ "./src/app/collapsed-menu/collapsed-menu.component.ts");
/* harmony import */ var _services_document_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/document.service */ "./src/app/services/document.service.ts");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _services_url_prefix_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/url-prefix.service */ "./src/app/services/url-prefix.service.ts");
/* harmony import */ var ng_in_viewport__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-in-viewport */ "./node_modules/ng-in-viewport/fesm5/ng-in-viewport.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var routes = [
    // {path: '', redirectTo: 'record', pathMatch: 'full'},
    { path: '', component: _multivio_layout_multivio_layout_component__WEBPACK_IMPORTED_MODULE_12__["MultivioLayoutComponent"] },
    { path: ':doctype/:pid', component: _multivio_layout_multivio_layout_component__WEBPACK_IMPORTED_MODULE_12__["MultivioLayoutComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_20__["NotFoundComponent"] }
];
Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_9___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _bottom_menu_bottom_menu_component__WEBPACK_IMPORTED_MODULE_10__["BottomMenuComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_11__["ContentComponent"],
                _multivio_layout_multivio_layout_component__WEBPACK_IMPORTED_MODULE_12__["MultivioLayoutComponent"],
                _collapsed_menu_collapsed_menu_component__WEBPACK_IMPORTED_MODULE_13__["CollapsedMenuComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_20__["NotFoundComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"].forRoot(),
                angular_resize_event__WEBPACK_IMPORTED_MODULE_2__["AngularResizedEventModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"].forRoot(routes),
                ng_in_viewport__WEBPACK_IMPORTED_MODULE_18__["InViewportModule"]
            ],
            providers: [_services_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"], _services_document_service__WEBPACK_IMPORTED_MODULE_14__["DocumentService"], _services_image_service__WEBPACK_IMPORTED_MODULE_15__["ImageService"], _services_url_prefix_service__WEBPACK_IMPORTED_MODULE_17__["UrlPrefixService"], { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["fr_FR"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bottom-menu/bottom-menu.component.css":
/*!*******************************************************!*\
  !*** ./src/app/bottom-menu/bottom-menu.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#bottom-menu {\n    background-color:#001529;\n    border-radius: 25px;\n    opacity: 0;\n    transition: 3s;\n    width: 600px;\n    height: 44px;\n    margin: auto;\n}\n\n#affix {\n    width: 600px;\n    height: 44px;\n    margin: auto;\n}\n\n#input-page {\n    width: 50px;\n    float: left;\n    margin: 5px 5px 0px 5px;\n    text-align: center;\n}\n\n#bottom-menu:hover {\n    opacity: 0.8;\n    transition: 0.4s;\n}\n\n.not-selectable {\n    color:#fafafa1f !important;\n    cursor: unset !important;\n}\n\n.first-element {\n  margin-left: 25px;\n}\n"

/***/ }),

/***/ "./src/app/bottom-menu/bottom-menu.component.html":
/*!********************************************************!*\
  !*** ./src/app/bottom-menu/bottom-menu.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-affix id=\"affix\" nzOffsetBottom=\"0\">\n    <!--Bottom menu (can be displayed all time or on hover effect) -->\n    <div id=\"bottom-menu\" [ngStyle]=\"isVisible && {'opacity':'0.8'}\">\n        <!--Rotation options -->\n        <i (click)=\"onMenuClick(BottomMenu.RotateRight)\" class=\"fa fa-repeat my-icons first-element\"></i>\n        <i (click)=\"onMenuClick(BottomMenu.RotateLeft)\" class=\"fa fa-undo my-icons\"></i>\n        <!--Zoom options -->\n        <i (click)=\"onMenuClick(BottomMenu.ZoomIn)\" class=\"fa fa-search-plus my-icons\"></i>\n        <i (click)=\"onMenuClick(BottomMenu.ZoomOut)\" class=\"fa fa-search-minus my-icons\"></i>\n        <!--Navigations options -->\n        <i  (click)=\"(currentPage != minValuePage || currentDoc != 0) && onMenuClick(BottomMenu.FirstPage)\"\n            class=\"anticon anticon-fast-backward my-icons first-element\"\n            [ngClass]=\"currentPage == minValuePage && currentDoc == 0 ? 'not-selectable' : '' \"></i>\n        <i  (click)=\"(currentPage != minValuePage || currentDoc != 0) && onMenuClick(BottomMenu.DecrementPage)\"\n            class=\"anticon anticon-step-backward my-icons\"\n            [ngClass]=\"currentPage == minValuePage && currentDoc == 0 ? 'not-selectable' : '' \" ></i>\n        <input nz-input (keyup.enter)=\"getPage(inputPage.value)\" [(ngModel)]=\"currentPage\" #inputPage id=\"input-page\" [disabled]=\"isDisabled\">\n        <i  (click)=\"(currentPage != maxValuePage || currentDoc != nbrDocs) && onMenuClick(BottomMenu.IncrementPage)\"\n            class=\"anticon anticon-step-forward my-icons\"\n            [ngClass]=\"currentPage == maxValuePage && currentDoc == nbrDocs ? 'not-selectable' : '' \"></i>\n        <i (click)=\"(currentPage != maxValuePage || currentDoc != nbrDocs) && onMenuClick(BottomMenu.LastPage)\"\n            class=\"anticon anticon-fast-forward my-icons\"\n            [ngClass]=\"currentPage == maxValuePage && currentDoc == nbrDocs ? 'not-selectable' : '' \"></i>\n        <!--Fit document options -->\n        <i (click)=\"onMenuClick(BottomMenu.FitToHeight)\" class=\"fa fa-arrows-v my-icons first-element\"></i>\n        <i (click)=\"onMenuClick(BottomMenu.FitToWidth)\" class=\"fa fa-arrows-h my-icons\"></i>\n        <i (click)=\"onMenuClick(BottomMenu.OriginalSize)\" class=\"fa fa-file my-icons\"></i>\n    </div>\n</nz-affix>\n"

/***/ }),

/***/ "./src/app/bottom-menu/bottom-menu.component.ts":
/*!******************************************************!*\
  !*** ./src/app/bottom-menu/bottom-menu.component.ts ***!
  \******************************************************/
/*! exports provided: BottomMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomMenuComponent", function() { return BottomMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enum_bottom_menu_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enum/bottom-menu.enum */ "./src/app/enum/bottom-menu.enum.ts");
/* harmony import */ var _enum_display_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enum/display.enum */ "./src/app/enum/display.enum.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BottomMenuComponent = /** @class */ (function () {
    function BottomMenuComponent(message) {
        this.message = message;
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.BottomMenu = _enum_bottom_menu_enum__WEBPACK_IMPORTED_MODULE_1__["BottomMenu"];
        this.isVisible = false;
        this.currentPage = 1;
        this.minValuePage = 1;
        this.maxValuePage = 0;
        this.currentAngle = 0;
        this.typeDisplay = 1;
        this.isDisabled = false;
        this.nbrDocs = 0;
        this.currentDoc = 0;
        this.backToDocument = false;
    }
    BottomMenuComponent.prototype.ngOnInit = function () { };
    // Toggle the visibility of collapsed menu
    BottomMenuComponent.prototype.toggleVisibility = function () {
        this.isVisible = !this.isVisible;
    };
    // Dispatch on bottom menu click
    BottomMenuComponent.prototype.onMenuClick = function (key) {
        // Update image content on option clicked (emit to parent)
        if (this.currentPage <= this.maxValuePage && this.currentPage >= this.minValuePage) {
            switch (key) {
                case _enum_bottom_menu_enum__WEBPACK_IMPORTED_MODULE_1__["BottomMenu"].DecrementPage:
                    if (this.currentPage === this.minValuePage) {
                        if (this.currentDoc > 0) {
                            this.currentDoc--;
                            this.backToDocument = true;
                        }
                    }
                    else if (this.currentPage > this.minValuePage) {
                        this.currentPage--;
                    }
                    break;
                case _enum_bottom_menu_enum__WEBPACK_IMPORTED_MODULE_1__["BottomMenu"].FirstPage:
                    if (this.currentPage === this.minValuePage) {
                        if (this.currentDoc > 0) {
                            this.currentDoc--;
                            this.backToDocument = true;
                        }
                    }
                    else {
                        this.currentPage = this.minValuePage;
                    }
                    break;
                case _enum_bottom_menu_enum__WEBPACK_IMPORTED_MODULE_1__["BottomMenu"].IncrementPage:
                    if (this.currentPage === this.maxValuePage) {
                        if (this.currentDoc < this.nbrDocs) {
                            this.currentDoc++;
                            this.currentPage = 1;
                        }
                    }
                    else if (this.currentPage < this.maxValuePage) {
                        this.currentPage++;
                    }
                    break;
                case _enum_bottom_menu_enum__WEBPACK_IMPORTED_MODULE_1__["BottomMenu"].LastPage:
                    if (this.currentPage === this.maxValuePage) {
                        if (this.currentDoc < this.nbrDocs) {
                            this.currentDoc++;
                            this.currentPage = 1;
                        }
                    }
                    else {
                        this.currentPage = this.maxValuePage;
                    }
                    break;
                case _enum_bottom_menu_enum__WEBPACK_IMPORTED_MODULE_1__["BottomMenu"].RotateLeft:
                    this.currentAngle = (this.currentAngle + 90) % 360;
                    break;
                case _enum_bottom_menu_enum__WEBPACK_IMPORTED_MODULE_1__["BottomMenu"].RotateRight:
                    this.currentAngle = (this.currentAngle - 90) % 360;
                    break;
                case _enum_bottom_menu_enum__WEBPACK_IMPORTED_MODULE_1__["BottomMenu"].ZoomOut:
                    this.typeDisplay = _enum_display_enum__WEBPACK_IMPORTED_MODULE_2__["Display"].ZoomOut;
                    break;
                case _enum_bottom_menu_enum__WEBPACK_IMPORTED_MODULE_1__["BottomMenu"].ZoomIn:
                    this.typeDisplay = _enum_display_enum__WEBPACK_IMPORTED_MODULE_2__["Display"].ZoomIn;
                    break;
                case _enum_bottom_menu_enum__WEBPACK_IMPORTED_MODULE_1__["BottomMenu"].FitToHeight:
                    this.typeDisplay = _enum_display_enum__WEBPACK_IMPORTED_MODULE_2__["Display"].FitToHeight;
                    break;
                case _enum_bottom_menu_enum__WEBPACK_IMPORTED_MODULE_1__["BottomMenu"].FitToWidth:
                    this.typeDisplay = _enum_display_enum__WEBPACK_IMPORTED_MODULE_2__["Display"].FitToWidth;
                    break;
                case _enum_bottom_menu_enum__WEBPACK_IMPORTED_MODULE_1__["BottomMenu"].OriginalSize:
                    this.typeDisplay = _enum_display_enum__WEBPACK_IMPORTED_MODULE_2__["Display"].OriginalSize;
                    break;
            }
            // Emit message to parent
            this.pageChanged.emit({ 'Page': this.currentPage, 'Angle': this.currentAngle, 'Display': this.typeDisplay,
                'Doc': this.currentDoc, 'IsBack': this.backToDocument });
            this.typeDisplay = -1;
            this.backToDocument = false;
        }
        else {
            // Display message error
            this.message.create('warning', "Vous avez ins\u00E9rez un nombre qui n'est pas compri entre :\n       " + this.minValuePage + " et " + this.maxValuePage + " ");
        }
    };
    // Get page from input
    BottomMenuComponent.prototype.getPage = function (nrPage) {
        if (nrPage <= this.maxValuePage && nrPage >= this.minValuePage) {
            this.currentPage = Number(nrPage);
            // Emmit message to parent
            this.pageChanged.emit({ 'Page': this.currentPage, 'Angle': this.currentAngle, 'Display': this.typeDisplay,
                'Doc': this.currentDoc, 'IsBack': false });
        }
        else if (nrPage < this.minValuePage) {
            // Display message error
            this.message.create('warning', "Vous avez ins\u00E9rez un nombre inf\u00E9rieur au minimum consenti ( " + this.minValuePage + " )");
            this.currentPage = this.minValuePage;
        }
        else {
            // Displax message error
            this.message.create('warning', "Vous avez ins\u00E9rez un nombre sup\u00E9rieur au maximum consenti ( " + this.maxValuePage + " )");
            this.currentPage = this.maxValuePage;
        }
    };
    // Set numbers of documents in the app
    BottomMenuComponent.prototype.setNumberDocs = function (nbr) {
        this.nbrDocs = nbr - 1;
    };
    // Set actual document in app
    BottomMenuComponent.prototype.setCurrentDoc = function (nbr) {
        this.currentDoc = nbr;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BottomMenuComponent.prototype, "pageChanged", void 0);
    BottomMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bottom-menu',
            template: __webpack_require__(/*! ./bottom-menu.component.html */ "./src/app/bottom-menu/bottom-menu.component.html"),
            styles: [__webpack_require__(/*! ./bottom-menu.component.css */ "./src/app/bottom-menu/bottom-menu.component.css")]
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]])
    ], BottomMenuComponent);
    return BottomMenuComponent;
}());



/***/ }),

/***/ "./src/app/collapsed-menu/collapsed-menu.component.css":
/*!*************************************************************!*\
  !*** ./src/app/collapsed-menu/collapsed-menu.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sub-menu {\n    background-color:#001529cc;\n    overflow: auto;\n}\n\n#collapsed {\n    height:100%;\n}\n\n#mode-thumb {\n    height: 5%;\n    position: relative;\n}\n\n#mode-thumb-background {\n    background-color: #343942e0;\n    height: 100%;\n}\n\n#mode-thumb-icon-1 {\n    left: 25%;\n    position: absolute;\n}\n\n#mode-thumb-icon-2 {\n    left: 60%;\n    position: absolute;\n}\n\n#search-doc {\n    padding: 15px;\n    width: 100%;\n}\n\n#title-results {\n    margin-bottom: 15px;\n    float: left;\n}\n\n#results {\n    background-color: white;\n    margin-top: 25px;\n    border-radius: 5px;\n    padding: 5px;\n}\n\n#title-no-results {\n    margin-bottom: 15px;\n    float: left;\n}\n\n#no-results {\n    background-color: white;\n    margin-top: 25px;\n    border-radius: 5px;\n    padding: 5px;\n    height: 40px;\n}\n\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\n\nli {\n    font-size: 12px;\n    border-bottom: 1px solid #ccc;\n    white-space: nowrap;\n}\n\nli {\n    text-decoration: none;\n    color: #000;\n    transition: font-size 0.3s ease, background-color 0.3s ease;\n    display: block;\n    width: 100%;\n    cursor: pointer;\n    text-overflow:ellipsis;\n    overflow: hidden;\n}\n\nli:hover {\n    background: #40a9ff3b;\n}\n\n.result {\n  padding: 3px;\n}\n\n.number-thumb {\n    text-align: center;\n    color:rgba(255,255,255,.65);\n}\n\n.top-margin-thumb {\n  margin-top: 25px;\n}\n\n.grid-thumb {\n    margin: auto;\n    display: block;\n    cursor: pointer;\n    width:100%;\n}\n\n.list-thumb {\n    margin: auto;\n    display: block;\n    cursor: pointer;\n}\n\n.color-text {\n    color:rgba(255,255,255,.65);\n    padding: 10px;\n    width: 290px;\n}\n\n.cancel-results {\n    color: red;\n    font-size: 20px;\n    cursor: pointer;\n    margin-top: 3px;\n    float:right;\n}\n\n.grid-container {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 90px 90px 90px;\n        grid-template-columns: 90px 90px 90px;\n    padding: 10px;\n}\n\n.grid-item {\n    padding: 20px;\n    text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/collapsed-menu/collapsed-menu.component.html":
/*!**************************************************************!*\
  !*** ./src/app/collapsed-menu/collapsed-menu.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"collapsed\" [@collapseAnimation]='collapsed'>\n    <!--Option mode Thumblist preview -->\n    <div id=\"mode-thumb\" *ngIf=\"actualMenu == Menu.ThumbPreview\">\n        <div id=\"mode-thumb-background\">\n            <i id=\"mode-thumb-icon-1\" (click)=\"modeView('list')\" nz-tooltip nzTitle=\"Liste\" nzPlacement=\"bottom\" class=\"fa fa-th-list my-icons\"></i>\n            <i id=\"mode-thumb-icon-2\" (click)=\"modeView('grid')\" nz-tooltip nzTitle=\"Grille\" nzPlacement=\"bottom\" class=\"fa fa-th my-icons\"></i>\n        </div>\n    </div>\n    <!--Switching on differents options menu -->\n    <div [ngSwitch]=\"actualMenu\" id=\"sub-menu\" [ngStyle]=\"{ 'height' : (actualMenu == Menu.ThumbPreview) ? '95%' : '100%' }\">\n        <!--Mode search -->\n        <ng-container *ngSwitchCase=\"Menu.Find\">\n            <div id=\"search-doc\">\n                <nz-input-group nzSearch [nzSuffix]=\"suffixIconButton\">\n                    <input type=\"text\" nz-input placeholder=\"Chercher\" #inputSearch (keyup.enter)=\"getInputSearch(inputSearch.value)\" [(ngModel)]=\"inputValue\">\n                </nz-input-group>\n                <ng-template #suffixIconButton>\n                    <button nz-button nzType=\"primary\" nzSearch (click) = \"getInputSearch(inputSearch.value)\"><i class=\"anticon anticon-search\"></i></button>\n                </ng-template>\n                <!--Something found -->\n                <div id=\"results\" *ngIf=\"resultsSearch.length > 0\">\n                    <div>\n                        <h3 id=\"title-results\">Results: {{sizeResultsSearch}}</h3>\n                        <i class=\"anticon anticon-close cancel-results\" (click) = \"clearResults()\"></i>\n                    </div>\n                    <ul *ngFor=\"let result of resultsSearch, let i = index\">\n                        <li nz-tooltip [ngStyle]=\"{'background': i == liClicked ? '#faad1459': ''}\" [nzTitle]=result.toolTip nzPlacement=\"bottom\" [innerHTML]=result.text class=\"result\" (click) = \"resultClick(result, i)\"></li>\n                    </ul>\n                </div>\n                <!--No results  found -->\n                <div id=\"no-results\" *ngIf=\"resultsSearch.length == 0 && searchDone\">\n                    <div>\n                        <h3 id=\"title-no-results\">No results found</h3>\n                    </div>\n                </div>\n            </div>\n        </ng-container>\n        <!--Mode table of contents displayed -->\n        <ng-container *ngSwitchCase=\"Menu.TOC\">\n            <!--We display the TOC only when all is retrieved -->\n            <div *ngIf=\"sizeTOC == nbrDocs\">\n                <nz-tree\n                    [(ngModel)]=\"nodesTOC\"\n                    [nzShowLine]=\"false\"\n                    [nzDefaultExpandedKeys]=\"[keyExpanded]\"\n                    (nzClick)=\"onClickTree($event)\"\n                >\n                </nz-tree>\n            </div>\n        </ng-container>\n        <!--Mode thumb list displayed -->\n        <ng-container *ngSwitchCase=\"Menu.ThumbPreview\">\n            <div [ngSwitch]=\"modeViewThumb\">\n                <!--Mode thumblist as list mode -->\n                <ng-container *ngSwitchCase=\"'list'\">\n                    <div *ngFor=\"let thumb of thumbList; let i = index\" class=\"top-margin-thumb\">\n                        <img inViewport\n                            id={{i+1}}\n                            (inViewportAction)=\"onIntersection($event)\"\n                            src=\"{{ thumb }}\"\n                            class=\"list-thumb\"\n                            (click)=\"thumbSelected(i+1)\"\n                        />\n                        <p class=\"number-thumb\">{{ i+1 }}</p>\n                    </div>\n                </ng-container>\n                <!--Mode thumblist as grid mode -->\n                <ng-container *ngSwitchCase=\"'grid'\">\n                    <div class=\"grid-container\">\n                        <div *ngFor=\"let thumb of thumbList; let i = index\" class=\"top-margin-thumb\">\n                            <div class=\"grid-item\">\n                                <img inViewport\n                                    id={{i+1}}\n                                    (inViewportAction)=\"onIntersection($event)\"\n                                    src=\"{{ thumb }}\"\n                                    class=\"grid-thumb\"\n                                    (click)=\"thumbSelected(i+1)\"\n                                />\n                                <p class=\"number-thumb\">{{ i+1 }}</p>\n                            </div>\n                        </div>\n                    </div>\n                </ng-container>\n            </div>\n        </ng-container>\n        <!--Mode help displayed -->\n        <ng-container *ngSwitchCase=\"Menu.Help\">\n            <div class=\"color-text\" >\n                <h1 class=\"color-text\">Aide</h1>\n                Multivio permet de visualiser des contenus numériques, qu'il s'agisse de documents (par ex. livres, articles) ou\n                d'images (par ex. photos, gravures).\n            </div>\n        </ng-container>\n\n\n    </div>\n\n </div>\n"

/***/ }),

/***/ "./src/app/collapsed-menu/collapsed-menu.component.ts":
/*!************************************************************!*\
  !*** ./src/app/collapsed-menu/collapsed-menu.component.ts ***!
  \************************************************************/
/*! exports provided: CollapsedMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapsedMenuComponent", function() { return CollapsedMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _services_document_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/document.service */ "./src/app/services/document.service.ts");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _enum_menu_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enum/menu.enum */ "./src/app/enum/menu.enum.ts");
/* harmony import */ var _enum_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../enum/type.enum */ "./src/app/enum/type.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CollapsedMenuComponent = /** @class */ (function () {
    function CollapsedMenuComponent(documentService, imageService, baseService) {
        this.documentService = documentService;
        this.imageService = imageService;
        this.baseService = baseService;
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchItemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.Menu = _enum_menu_enum__WEBPACK_IMPORTED_MODULE_6__["Menu"];
        this.inputValue = '';
        this.collapsed = false;
        this.nodesTOC = [];
        this.counter = 0;
        this.actualMenu = 99;
        this.infoTocRetrieved = false;
        this.thumbnailsRetrieved = false;
        this.resultsSearch = [];
        this.thumbList = [];
        this.sizeResultsSearch = 0;
        this.thumbListMaxIndex = 8;
        this.modeViewThumb = 'list';
        this.searchDone = false;
        this.liClicked = -1;
        this.urlActualDoc = '';
        this.sizeTOC = 0;
        this.nbrDocs = 0;
        this.hasMixedObjects = false;
        this.keyExpanded = '0';
    }
    CollapsedMenuComponent.prototype.ngOnInit = function () { };
    // Display or hide the menu
    CollapsedMenuComponent.prototype.collapse = function (e, type, mixed) {
        this.hasMixedObjects = mixed;
        this.typeObject = type;
        // Dipatch the action on click
        this.dispatchMenu(e);
        if (this.actualMenu === 99) {
            this.actualMenu = e;
        }
        // Diplay, hide collapsed menu
        if (this.actualMenu === e || !this.collapsed && this.actualMenu !== e) {
            this.collapsed = !this.collapsed;
        }
        this.actualMenu = e;
    };
    // Display the page from TOC
    CollapsedMenuComponent.prototype.onClickTree = function (e) {
        this.getPage(Number(e.node.origin.page), Number(e.node.origin.doc));
    };
    // Check if node as children's (recursive) to construct the tree
    CollapsedMenuComponent.prototype.asChildren = function (val, node, index) {
        if (val.hasOwnProperty('childs')) {
            var childs = val['childs'];
            for (var i = 0; i < childs.length; i++) {
                var subNode = {
                    title: childs[i]['label'],
                    key: (this.counter++).toString(),
                    doc: index,
                    page: childs[i]['page_number']
                };
                if (!node.hasOwnProperty('children')) {
                    node['children'] = [];
                }
                node['children'].push(subNode);
                this.asChildren(childs[i], subNode, index);
            }
        }
        else {
            node['isLeaf'] = true;
        }
    };
    // Dipatch click menu to correct fonctionality
    CollapsedMenuComponent.prototype.dispatchMenu = function (option) {
        switch (option) {
            case _enum_menu_enum__WEBPACK_IMPORTED_MODULE_6__["Menu"].TOC:
                this.getTOC();
                break;
            case _enum_menu_enum__WEBPACK_IMPORTED_MODULE_6__["Menu"].ThumbPreview:
                this.getThumbsPreview();
                break;
        }
    };
    // Retrieve the table of contents of documents if exists
    CollapsedMenuComponent.prototype.getTOC = function () {
        if (!this.infoTocRetrieved) {
            var res = void 0;
            this.nbrDocs = Object.keys(this.baseService.getPhysicalInMemory()).length;
            for (var i = 0; i < this.nbrDocs; i++) {
                this.typeObject = this.baseService.getListTypeObjects()[i];
                res = this.baseService.getPhysicalInMemory()[i];
                switch (this.typeObject) {
                    // We have 2 modes PDF or Image
                    case _enum_type_enum__WEBPACK_IMPORTED_MODULE_7__["Type"].PDF:
                        // Retrieve TOC from PDF
                        this.urlActualDoc = this.baseService.getUrlCurrenObject();
                        this.parseTocPDF(res, i);
                        // Restore information about actual docment
                        this.baseService.setUrlCurrentObject(this.urlActualDoc);
                        this.infoTocRetrieved = true;
                        break;
                    case _enum_type_enum__WEBPACK_IMPORTED_MODULE_7__["Type"].Image:
                        if (i == 0)
                            this.keyExpanded = (this.counter).toString();
                        var node = {
                            title: res['label'],
                            key: (this.counter++).toString(),
                            doc: this.hasMixedObjects ? i : null,
                            page: this.hasMixedObjects ? 1 : i + 1,
                        };
                        this.nodesTOC[i] = new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTreeNode"](node);
                        this.sizeTOC = Object.keys(this.nodesTOC).length;
                        this.infoTocRetrieved = true;
                        break;
                }
            }
        }
    };
    // Get the thumbslist, 8 at first loading or less if document as not 8 elements
    CollapsedMenuComponent.prototype.getThumbsPreview = function () {
        if (!this.thumbnailsRetrieved) {
            if (this.thumbListMaxIndex > this.baseService.getMaxPage()) {
                this.thumbListMaxIndex = this.baseService.getMaxPage();
            }
            for (var page = 1; page <= this.thumbListMaxIndex; page++) {
                this.getThumbImages(page);
            }
            this.thumbnailsRetrieved = true;
        }
    };
    // Search text in document (only for PDF)
    CollapsedMenuComponent.prototype.getInputSearch = function (input) {
        var _this = this;
        this.documentService.findText(input)
            .subscribe(function (res) {
            _this.searchDone = true;
            _this.sizeResultsSearch = res.length;
            _this.resultsSearch = res;
            if (_this.sizeResultsSearch > 0) {
                for (var i = 0; i < res.length; i++) {
                    var startString = _this.resultsSearch[i]['text'];
                    // Put word in bold
                    var reg = new RegExp(input, 'i');
                    var endString = startString.slice(0, startString.search(reg)) +
                        '<b>' +
                        startString.slice(startString.search(reg), startString.search(reg) + input.length) +
                        '</b>' +
                        startString.slice(startString.search(reg) + input.length);
                    _this.resultsSearch[i]['text'] = endString;
                    // Adding for tooltip
                    _this.resultsSearch[i]['toolTip'] = startString;
                }
            }
            else {
                // Send BBox info at parent (in this case no results fournd)
                _this.searchItemClick.emit({ 'BBox': _this.resultsSearch });
            }
        });
    };
    // Clearing results to put all by default
    CollapsedMenuComponent.prototype.clearResults = function () {
        this.resultsSearch = [];
        this.inputValue = null;
        this.searchDone = false;
        this.liClicked = -1;
        this.searchItemClick.emit({ 'BBox': this.resultsSearch });
    };
    // Emit message to parent about the page
    CollapsedMenuComponent.prototype.getPage = function (nrPage, doc) {
        this.pageChanged.emit({ 'Page': nrPage, 'Angle': 0, 'Doc': doc });
    };
    // Click on list result of search
    CollapsedMenuComponent.prototype.resultClick = function (result, liNumberClick) {
        this.liClicked = liNumberClick;
        // Send info about search to display
        this.resultsSearch.forEach(function (element) {
            // Setting element selected as true for highlight in content component
            if (element.text === result.text) {
                element['selected'] = true;
            }
            else {
                element['selected'] = false;
            }
        });
        // Dislay the page
        this.getPage(result.page, null);
        // Send info about the bbox
        this.searchItemClick.emit({ 'BBox': this.resultsSearch });
    };
    // When last thumb is displayed call to the next thumbs from server
    CollapsedMenuComponent.prototype.onIntersection = function (event) {
        if (Number(event.target.id) === this.thumbListMaxIndex
            && Boolean(event.visible) === true
            && this.thumbListMaxIndex < this.baseService.getMaxPage()) {
            this.thumbListMaxIndex++;
            this.getThumbImages(this.thumbListMaxIndex);
        }
    };
    // Retrieve the thumbs images
    CollapsedMenuComponent.prototype.getThumbImages = function (page) {
        var _this = this;
        switch (this.typeObject) {
            // Mode PDF
            case _enum_type_enum__WEBPACK_IMPORTED_MODULE_7__["Type"].PDF:
                this.documentService.getImageFromDocument(page, 0, 150, 150)
                    .subscribe(function (thumb) {
                    var reader = new FileReader();
                    reader.addEventListener('load', function () {
                        _this.thumbList[page - 1] = reader.result;
                    }, false);
                    if (thumb) {
                        reader.readAsDataURL(thumb);
                    }
                });
                break;
            // Mode Image
            case _enum_type_enum__WEBPACK_IMPORTED_MODULE_7__["Type"].Image:
                if (this.hasMixedObjects) {
                    this.baseService.setUrlCurrentObject(this.baseService.getUrlCurrenObject());
                }
                else {
                    var structure = this.baseService.getStructureObject();
                    this.baseService.setUrlCurrentObject(structure[page - 1]['url']);
                }
                this.imageService.getImage(0, 150, 150)
                    .subscribe(function (thumb) {
                    var reader = new FileReader();
                    reader.addEventListener('load', function () {
                        _this.thumbList[page - 1] = reader.result;
                    }, false);
                    if (thumb) {
                        reader.readAsDataURL(thumb);
                    }
                });
                break;
        }
    };
    // On Thumb selected display the correct page
    CollapsedMenuComponent.prototype.thumbSelected = function (page) {
        this.getPage(page, null);
    };
    // Mode display of thumb's (list or grid)
    CollapsedMenuComponent.prototype.modeView = function (mode) {
        this.modeViewThumb = mode;
    };
    // Reset thumb list
    CollapsedMenuComponent.prototype.resetThumbList = function () {
        this.thumbnailsRetrieved = false;
        this.thumbList = [];
    };
    CollapsedMenuComponent.prototype.parseTocPDF = function (res, i) {
        var _this = this;
        this.baseService.setUrlCurrentObject(this.baseService.getStructureObject()[i]['url']);
        this.documentService.getTOC().subscribe(function (data) {
            if (i == 0)
                _this.keyExpanded = (_this.counter).toString();
            if (data !== null) {
                var node = {
                    title: res['label'],
                    key: (_this.counter++).toString(),
                    page: 1,
                    doc: i,
                    children: []
                };
                for (var j = 0; j < data.length; j++) {
                    var subNode = {
                        title: data[j]['label'],
                        key: (_this.counter++).toString(),
                        doc: i,
                        page: data[j]['file_position']['index']
                    };
                    _this.asChildren(data[j], subNode, i);
                    node['children'].push(subNode);
                }
                _this.nodesTOC[i] = new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTreeNode"](node);
                _this.sizeTOC = Object.keys(_this.nodesTOC).length;
            }
            else {
                var node = {
                    title: res['label'],
                    key: (_this.counter++).toString(),
                    doc: i,
                    page: 1,
                };
                _this.nodesTOC[i] = new ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTreeNode"](node);
                _this.sizeTOC = Object.keys(_this.nodesTOC).length;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CollapsedMenuComponent.prototype, "pageChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CollapsedMenuComponent.prototype, "searchItemClick", void 0);
    CollapsedMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-collapsed-menu',
            template: __webpack_require__(/*! ./collapsed-menu.component.html */ "./src/app/collapsed-menu/collapsed-menu.component.html"),
            styles: [__webpack_require__(/*! ./collapsed-menu.component.css */ "./src/app/collapsed-menu/collapsed-menu.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('collapseAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        width: '300px',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        width: '0px',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms'))
                ]),
            ]
        }),
        __metadata("design:paramtypes", [_services_document_service__WEBPACK_IMPORTED_MODULE_3__["DocumentService"], _services_image_service__WEBPACK_IMPORTED_MODULE_4__["ImageService"], _services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"]])
    ], CollapsedMenuComponent);
    return CollapsedMenuComponent;
}());



/***/ }),

/***/ "./src/app/content/content.component.css":
/*!***********************************************!*\
  !*** ./src/app/content/content.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  margin: auto;\n  display: table;\n}\n\n.relative-position {\n  position: relative;\n  display: inline-flex;\n}\n\n.absolute-position {\n  position: absolute;\n}\n"

/***/ }),

/***/ "./src/app/content/content.component.html":
/*!************************************************!*\
  !*** ./src/app/content/content.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Only display this template if one image exists -->\n<div id=\"container\" *ngIf=\"imageToShow != null\">\n    <!--Detecting on resizing action -->\n    <div class=\"relative-position\" (resized)=\"onResized($event)\">\n        <!--Image to display -->\n        <img [src]=\"imageToShow\" />\n        <!--Switching on angle of documents (for bboxes) -->\n        <div [ngSwitch]=\"angle\" class=\"absolute-position\">\n            <!--Angle 0° -->\n            <ng-container *ngSwitchCase=\"0\">\n                <div *ngFor=\"let bbox of bboxes;\">\n                    <div class=\"absolute-position\"\n                        [ngStyle]=\"{'background-color': bbox.selected ? '#faad1459' : '#40a9ff36'}\"\n                        [style.width.px]=\"(bbox.BBox.x2 - bbox.BBox.x1) * ratio\"\n                        [style.height.px]=\"(bbox.BBox.y2 - bbox.BBox.y1) * ratio\"\n                        [style.left.px]=\"(bbox.BBox.x1) * ratio\"\n                        [style.top.px]=\"(bbox.BBox.y1) * ratio\">\n                    </div>\n                </div>\n            </ng-container>\n            <!--Angle 90° -->\n            <ng-container *ngSwitchCase=\"90\">\n                <div *ngFor=\"let bbox of bboxes;\">\n                    <div class=\"absolute-position\"\n                        [ngStyle]=\"{'background-color': bbox.selected ? '#faad1459' : '#40a9ff36'}\"\n                        [style.width.px]=\"(bbox.BBox.y2 - bbox.BBox.y1) * ratio\"\n                        [style.height.px]=\"(bbox.BBox.x2 - bbox.BBox.x1) * ratio\"\n                        [style.left.px]=\"(bbox.BBox.y1) * ratio\"\n                        [style.top.px]=\"(imgHeight - bbox.BBox.x2 * ratio)\" >\n                    </div>\n                </div>\n            </ng-container>\n            <!--Angle 180° -->\n            <ng-container *ngSwitchCase=\"180\">\n                <div *ngFor=\"let bbox of bboxes;\">\n                    <div class=\"absolute-position\"\n                        [ngStyle]=\"{'background-color': bbox.selected ? '#faad1459' : '#40a9ff36'}\"\n                        [style.width.px]=\"(bbox.BBox.x2 - bbox.BBox.x1) * ratio\"\n                        [style.height.px]=\"(bbox.BBox.y2 - bbox.BBox.y1) * ratio\"\n                        [style.left.px]=\"(imgWidth - bbox.BBox.x2 * ratio)\"\n                        [style.top.px]=\"(imgHeight - bbox.BBox.y2 * ratio)\">\n                    </div>\n                </div>\n            </ng-container>\n            <!--Angle 270° -->\n            <ng-container *ngSwitchCase=\"270\">\n                <div *ngFor=\"let bbox of bboxes;\">\n                    <div class=\"absolute-position\"\n                        [ngStyle]=\"{'background-color': bbox.selected ? '#faad1459' : '#40a9ff36'}\"\n                        [style.width.px]=\"(bbox.BBox.y2 - bbox.BBox.y1) * ratio\"\n                        [style.height.px]=\"(bbox.BBox.x2 - bbox.BBox.x1) * ratio\"\n                        [style.top.px]=\"(bbox.BBox.x1 * ratio)\"\n                        [style.left.px]=\"(imgWidth - bbox.BBox.y2 * ratio)\">\n                    </div>\n                </div>\n            </ng-container>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
        this.bboxes = [];
        this.allBBox = [];
        this.ratio = 1;
        this.currentPage = 0;
        this.imgWidth = 0;
        this.imgHeight = 0;
        this.angle = 180;
    }
    ContentComponent.prototype.ngOnInit = function () { };
    // Display the image
    ContentComponent.prototype.setImage = function (image) {
        this.imageToShow = image;
    };
    // SetBBox of the documet
    ContentComponent.prototype.setBBox = function (bboxes) {
        this.allBBox = bboxes['BBox'];
    };
    // Reset the box after the research
    ContentComponent.prototype.resetBbox = function () {
        this.bboxes = [];
    };
    // Set ration zoom
    ContentComponent.prototype.setInfoPage = function (ratio, currentPage, angle) {
        this.angle = angle;
        this.resetBbox();
        this.ratio = ratio;
        this.currentPage = currentPage;
        this.getBBoxByPage();
    };
    // Get the bboes on current page
    ContentComponent.prototype.getBBoxByPage = function () {
        var _this = this;
        if (this.allBBox !== []) {
            this.allBBox.forEach(function (element) {
                // Get only bboxes of actual page
                if (element.page === _this.currentPage) {
                    _this.bboxes.push(element);
                }
            });
        }
    };
    // On resized event , called after resize content
    ContentComponent.prototype.onResized = function (event) {
        if (event.newHeight > 0 && event.newWidth > 0) {
            // Setting info about the actual size
            this.imgHeight = event.newHeight;
            this.imgWidth = event.newWidth;
        }
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/enum/bottom-menu.enum.ts":
/*!******************************************!*\
  !*** ./src/app/enum/bottom-menu.enum.ts ***!
  \******************************************/
/*! exports provided: BottomMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomMenu", function() { return BottomMenu; });
var BottomMenu;
(function (BottomMenu) {
    BottomMenu[BottomMenu["RotateRight"] = 0] = "RotateRight";
    BottomMenu[BottomMenu["RotateLeft"] = 1] = "RotateLeft";
    BottomMenu[BottomMenu["FirstPage"] = 2] = "FirstPage";
    BottomMenu[BottomMenu["DecrementPage"] = 3] = "DecrementPage";
    BottomMenu[BottomMenu["IncrementPage"] = 4] = "IncrementPage";
    BottomMenu[BottomMenu["LastPage"] = 5] = "LastPage";
    BottomMenu[BottomMenu["ZoomIn"] = 6] = "ZoomIn";
    BottomMenu[BottomMenu["ZoomOut"] = 7] = "ZoomOut";
    BottomMenu[BottomMenu["FitToHeight"] = 8] = "FitToHeight";
    BottomMenu[BottomMenu["FitToWidth"] = 9] = "FitToWidth";
    BottomMenu[BottomMenu["OriginalSize"] = 10] = "OriginalSize";
})(BottomMenu || (BottomMenu = {}));


/***/ }),

/***/ "./src/app/enum/display.enum.ts":
/*!**************************************!*\
  !*** ./src/app/enum/display.enum.ts ***!
  \**************************************/
/*! exports provided: Display */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Display", function() { return Display; });
var Display;
(function (Display) {
    Display[Display["ZoomIn"] = 0] = "ZoomIn";
    Display[Display["ZoomOut"] = 1] = "ZoomOut";
    Display[Display["FitToHeight"] = 2] = "FitToHeight";
    Display[Display["FitToWidth"] = 3] = "FitToWidth";
    Display[Display["OriginalSize"] = 4] = "OriginalSize";
})(Display || (Display = {}));


/***/ }),

/***/ "./src/app/enum/menu.enum.ts":
/*!***********************************!*\
  !*** ./src/app/enum/menu.enum.ts ***!
  \***********************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
var Menu;
(function (Menu) {
    Menu[Menu["Find"] = 0] = "Find";
    Menu[Menu["TOC"] = 1] = "TOC";
    Menu[Menu["ThumbPreview"] = 2] = "ThumbPreview";
    Menu[Menu["Download"] = 3] = "Download";
    Menu[Menu["BottomMenuVisible"] = 4] = "BottomMenuVisible";
    Menu[Menu["Help"] = 5] = "Help";
})(Menu || (Menu = {}));


/***/ }),

/***/ "./src/app/enum/type.enum.ts":
/*!***********************************!*\
  !*** ./src/app/enum/type.enum.ts ***!
  \***********************************/
/*! exports provided: Type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Type", function() { return Type; });
var Type;
(function (Type) {
    Type["PDF"] = "application/pdf";
    Type["Image"] = "image/jpeg";
})(Type || (Type = {}));


/***/ }),

/***/ "./src/app/multivio-layout/multivio-layout.component.css":
/*!***************************************************************!*\
  !*** ./src/app/multivio-layout/multivio-layout.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .logo {\n    height: 32px;\n    margin: 16px;\n  }\n\n nz-header {\n    background: #f0f2f5;\n    padding: 0px;\n    color: rgba(0,0,0,.65);\n    font-size: 14px;\n }\n\n nz-footer {\n    text-align: center;\n }\n\n nz-content {\n    margin:0 16px;\n    overflow: auto;\n }\n\n #div-content {\n    padding:24px;\n    background: #f0f2f5;\n    min-height: 360px;\n }\n\n .spin-position {\n    top: 100% !important;\n }\n\n #img-logo-full {\n    margin: 10px 0px 0px 25px;\n }\n\n #img-logo-mini {\n    margin: 5px 0px 0px -7px;\n}\n\n #layout {\n    height: 100%;\n}\n\n #creator {\n    text-align: center;\n    margin-top: -50px;\n}\n\n #title {\n    text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/multivio-layout/multivio-layout.component.html":
/*!****************************************************************!*\
  !*** ./src/app/multivio-layout/multivio-layout.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout id=\"layout\">\n    <nz-sider nzCollapsible [(nzCollapsed)]=\"isCollapsed\" [nzWidth]=\"width\" [nzReverseArrow]=\"isReverseArrow\" [nzCollapsedWidth]=80>\n      <!--Display logo -->\n      <div class=\"logo\">\n          <!--Display full logo or mini logo is menu is collapser or not -->\n          <div *ngIf=\"isCollapsed;then logo_mini else logo_full\"></div>\n          <ng-template #logo_mini>\n              <img id=\"img-logo-mini\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAYCAYAAABKtPtEAAAABHNCSVQICAgIfAhkiAAAD3NJREFUWIXFmNtvVNd+x9dt3y/judhmxjd8BxwTzMUEjCGB2AROOOKQUAmaoFap8lKp6kP6H7RqXvsQ9ZyHREqicBQVVTQKEEKAEGEDiUMA24DjkY3vZmY8nov3fe+1+uAZjgNpelLpqD9pHvbstX9r/T7r+1uXHwa/YBBC3Nvb+8auXbv+1nGcguM4ru/7HgAg+KXv/r8MISSqqlrZ3Ny8be/evf8oCIK0uLg49kvfkF96Kcvyuu7u7gOHDx8+kM1mf3Pz5s0fHj58+HUmk5lMpVLLhmGYlmWZQRB4nufZjLGAUuqtccEYYx5jzAcA+L8iFggAwBBCDkJISs/lIDmEEEcI4QVBkCRJkjVNU6qqqiLRaLR18+bNL+3cubNTEAT42WefwdHR0aue5+X/TwAaGxtbd+zYsfPRo0fp2dnZpZqamqrGxsY3GGM8pTQAALjFYjHvuq5t23aRUuoFQWA/iQJCQCm1gyCwbds2s9lscWpqKjUxMTGezWbvAwC8UjsxHA5vaG9v31BXVxeLRCIaz/MShFDAGIuMsbI/iDEWMcYCx3GSoiihUCgUkmVZIYSQYrGYtyzL/vbbb8eam5srOzs7dycSieapqanbvxoAxlhqa2vr4TiOPXz4cCocDlfEYrGQ67p0fn6+aBjGCoTQZ6ujwxjjMM/zRBAEoTRTCGOMKaUUAAB0Xdfi8XhUkiS8sLAwd+3atQunT5/+PcdxysmTJ/+up6fnQCKRqDVN089kMnnLsmzDMMwgCH6SbowxZlmWZdu257qusby8bCCEOFEUlUQiocdisRCE0Eomk4sdHR0NbW1tW6enp0cZY86vAhAKhSK7d+8+xHGc1NPT0zkwMPDghx9+GCWEcJFIJNbR0dHQ2tpapaqqAAAAlFJmGIZr27YPAACSJHGhUEhyHMdfXFwsJJPJxwMDA5cfP348vXv37p5XX3319c8+++xCLBaL9/f3/25oaCh55syZrysrK2sSicS6SCSiqaqqaZomxmIxbS0ARVE4URQ5hBB0XTeYnZ1dvnv37tTVq1eTlNIgkUjE9+3b16mqqrRp06a+77777stcLjf9qwDU1dXt3blzZ9vZs2evT01NzXd3d28+cuTIMcuyvJGRkbm7d+9OXLly5VsIIUMIQQAACILAJ4RwP+dPEAS5sbGx4eTJk/sfPHiwQAjBCCFckq5bU1Ozrq+vr2toaGhqYmJibmJiYtIwjDwAACYSiZqysizLsjzP8yil1Pf9wPM8XxRFpbm5ue6NN97o03VdHB4envvjH//4VXNzc82RI0f2Xrt2rePOnTszAAD25wJAR44ceXN6enqpsrIyvHHjxrpHjx4tnT17dqAs+VgsVtHe3l5bWVkpS5LEQQghQgiVJQ8hhKW2IAgCtrS0tDI2Nrb46aefXo5GoxUtLS0V5c5kWebHx8enb926dUfX9XBtbW0kHo83apomEUIwxhj93CAhhLBYLLrpdNrIZrP5q1ev/uA4jksIkfbv39+VzWaNXC630tXV9buRkZErvu8/kwY/C0BV1Y2HDx/ecfXq1ds8zwuPHz/OMsZYJBJREULIcRyaz+etlZUVM5PJkEgkosiyzCOEUDlnyzAghBCA1RSpqamJaJrGB0HgEEKeBIUQgoQQWltbm1BVVdI0DVuWZXqe50IInwm+FLidyWSMXC5nMsZYKBQSYrGYSilljuOgfD5fxBiT6enpx0ePHj1w5syZRLFYnPyzAPT19Z0UBIELh8P6/fv3p4Mg8Ovq6mqam5ujHMdhx3FoJpMx0+l00TCMlZmZmTSEkEEIIaWUBkHg27ZtAgCAJEmK4zgOQghZlhXoul7R29vbtrY/nudxV1dX68WLF0czmcyyrusiKMkVQggJIcT3fR9CCF3XdRBCmFIKOY6Tqquro7FYTKuurlZEUSRBELCFhYWV+fn5FMdxXHt7e017e3v8ueee++2NGzf+7X8FQAhZd+rUqd+cOXNmcGlpKfPKK6+8ACGE169ff3Dv3r0Hvu/7GGMiCIIciUTCsVisoqqqSo9Go0o4HJYBWF2oykqQZVkoiQDYtu1fvHjx3rlz52689tprPeU+KaXs3Llzg42NjW379u1rFwSB+L4fuK4bMMZYSQWs7BsAAJaWlsy5ublcJpMpjI+PzyaTSYAxRp7neQ0NDYnDhw9vT6VSxQsXLgzMz88vv/322ydv3Ljx7wAA9xcB9Pb2nigWi6SpqWldS0tL9fnz529BCGFbW1vjyy+/3CkIAvZ9n6bT6ZXp6elsPp83JycnFyCEgOM4XPbjOI5rGIYhiqKIEAKiKPIQQqbresWpU6cOGYZRKLflOA6fOHHi0Oeffz708ccfXwIAQNd1Pdd1A0opC4fDFQihn6QCIYREIpFQXV1ddNeuXc0l1QDLsrzh4eHZDz/88BLHcVxvb+8WwzD8xsbGREtLy6vJZPI//0cAHMdFjh071gcACO7du5fUNE3etm1bKwAAzMzM5K5cuXKHEFJe4ABjDHMcJ9bW1laJosjpui6v9ee6ru95ni/LMqcoCkEI0WQymb527dro9u3b69Yq4JtvvhmOxWJKfX19HaUUep4HTNP0Hcf52RNkeQdYWFjIpFKpNMYYMcaYbdsexlh44YUXNtq27Y+Njc24rstUVeWOHz9+9N133z3PGHtyWPsJgObm5l0tLS1tc3NzuUgkEmKM0VwuZwiCQERRFBRF4RBCfmmxo8Vi0c5ms8uU0idQIIRPZFrKVUAIQbIsc5FIROR5HiuKoqztF0IIVFWVgyBwHz9+nFteXrZN0/Q9z6NlX09bEAQBz/NI13VR13WhtKhCnuc53/dxsVg0DcNwCSEoCAJq27bb3d29JRaLdaTT6e+fAQAhFA8ePLh/cnJy+c6dOw/7+/u7C4WCOTo6Om2apgEh5Kurq8MbNmyoraiokCilDEIIisWiGwQBK6/2APwpTw3D8IrFomOappPJZJbHxsamDcOwenp6tj8FAAZBAO/fvz8piqIgiqKm67omSZKgaZpUPmc8DSAej4cUReEEQcAAAJjJZFbu378/v7CwkIEQeqIoylu2bGnieZ4fGBi4/fzzz3f09fX1nz59+jYorSlPAFRVVW2MRCIb6+vrK6PRqHbmzJmvY7FYeP/+/Vvj8bieTqeNu3fvTl25cmXYcRybMUYJIcQ0TUtVVdWyLAsAADRN08owCoVCMQgCqut6aN26ddFdu3a1h8NhaXh4eOHpgBBC6K233np1ZmYmOzo6OptOp5ctyzIhhECWZanMyvM8DwDAEEJ4aGjI0DRNtSzLopQyWZaVeDxedfDgwe21tbWhycnJzOXLl78zDMM+evToXs/zQENDw2ZVVVtWVlbGfwKgtbW1aevWrRtv3LhxN5PJWG+++ebL2WzWvH79+khpICgajUa7urraE4lESFVVHiEEGWOMEIJ93w8IIbgcvOd5fmk3AAsLC7nZ2dnlL774YshxHKOzs3Pj0wAMwzA/+OCD87Ish5qamhKdnZ311dXVOsYYIIQQx3FPxkoppQgh5Pt+gDFGvu/TQqFgLy4uFmdmZlKXLl26Zdu2Kcuy3tvbu0XXden8+fO32traajs6OjrWr1/fPjIy8icACCF1ZGQk+dFHH/3h0KFDR3t6ehJDQ0MjEEK+oaGhSpZl7Pt+kMlkrB9//HEumUzOyrJMRFEkCCEoSZJoWZYtCIKAMcaMMWaapgEAgKIoio7juIwx1NjYWKtpGnMc55m8VhRF6O7u3mgYBkAIsVQqtZTJZJZN0zQRQlBRFLWUXrQMO5/PG4wxZJqmbRiGRwghFRUV0tatW1sJIWhlZcWfmZlJIYToiRMnXh4bGxv75JNPfj85OTmOENIopSsEYyy3tbW93tbW9txXX3316a1bt67t2LFj+4YNG15sbGxMEEIYpdQvyVuCEBLP83xCCAiCwPc8z+c4joMQIsYYKB+FJUmSbdu2y+uB4ziOZVmBIAhidXV1+GkANTU14YmJicVCoeBVVlaqPM/zCCGoaZpGCMGu6z6pM3Acx1FKKSGE832fRqPRcGVlJRYEgaiqikuncFZdXa2EQiE1mUw+fO+99/55cHDwhm3bdM+ePX+dSqUWh4eHPyKqqkaOHTv2D5s2bWrdvn37vkuXLn1+4cKFs19++eV/rVu3rioWi8UVRalXFCUuy3JUEARNlmVJlmVR0zRRURSFXzUgCALnum75Nsg3NDRUqaoqlrICzs7O5oaHh5Ou68JwOFy9FsDU1FQ6CAK0d+/eTaFQSCzNNjBN002lUkVKKSoFjymljFLKFEXh8vm8mcvlTNM0bcuyTMuycoVCIV0sFhcMw5hKpVLzqVQq7bqusHXr1tf7+/uPtrS0bJyenl6Ympr6gtTX1x/dsWPH8wgh1NnZuW3Tpk3Pe573T4ODg7dv3rx5eXZ29nvHca75vr8SBEFAKaWMsfL2VP4Bxliw9gJUCpohhFSe59dFo9GW1tbW5/r7+3d2dXU1T09Pp1jJisWi+dJLL224c+dO8v333/+P8fHx0aWlpaRt24uU0sLanbDcB4QQr+EHAQCofCHDGGNCiCQIwvqqqqpXDhw4sG/fvn0vSJIkY4wJQgjquq41NTUdh++8887Qnj17ukpOwM9tOa7r+ouLi0tzc3OL6XQ6XSgUspZlrZSrQIwxatt2bu03jDHf9/287/vLQRAUTNM0Cqu2jBAKrV+/fvPk5OSgpmnR6urqzkePHt11XTel63pE13W9VOUJEULChJBQqTT2xHie1zDGHEKI8DyvyLKs67oejkajsXg8Xh2Px2OyLAvl9pRStjY2Sin7/vvv78Pjx4//i6qq0mq1CQsAAFQizUEIuRIUvvQMMcYiQghBCDEhhIcQolL5CnKrxpcGyJdrAwghlMvlVmZnZ2eLxeLC3NzcwO3bt78qFotjAACgKErTli1b9tfX1+/VNK02kUgkwuGwXlaX7/u+67oOAAB4nuf5vu8xxpjjOCYAgFFKA9/3XQAAC4LAC4LALauSMeYyxmjp2WGMBSUATj6fz6+dbQgA4MpKgBCSMgAIIYcQIgAAgDEW4arh0gwgjuOE0h+kHDTHcRwhhJTAEI7jCGMMbNu27W9efPHFA0NDQ4OXLl067fu+t3///r/as2fPgcHBwYGbN2/+ga3KJ3Bd1ytfrFzXdQFYLbr4vu8zxlipEMtWL6CBV4Lhlwuzq6+oBwAoA3DLAMBqkTZ4Ru5/aVNVtX7btm1/f+DAgaORSERhjLF8Pm8NDg5+ff369X8tFArP3Nn/kvbfKj86zdzEmsoAAAAASUVORK5CYII=\">\n          </ng-template>\n          <ng-template #logo_full>\n            <img id=\"img-logo-full\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAVCAYAAACwnEswAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sIBAoOIzpMQ/AAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAgAElEQVRoBQHlIBrfAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH9/fyMAAADZAQEB/v///zuBgYHLAAAAAP///4QAAP9k//8BxAICAVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBOQEBAQP///8FAAAATwAAAAAAAAAAAAAAcv//ABcBAQBTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD9AAAAAAEBAQAAAAD8AAAAAAAAAAD////6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wAAAAAAAAAAAP7+/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/gAAAAAAAAAAAP7+/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+//8AAQEBAAAAAAAAAAAAAgICAP7+/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAQEBAAAAAAAAAAAAAgICAP7+/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBAQD+/v4U///////////+/v5IAgICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAA////+P/////+/v5mAgICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4eHgAgoKCAAAAAAB9fX0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfn5+AIODgwAAAAAAAAAAAAAAAAAAAAAAgICAAAAAAAAAAAAAAAAAAICAgQAAAAAAAAAAAAAAAAAAAAAAAAAAAG1tbQCCgoIAAAAAAAAAAAB+fn8AkpKSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAEBAQ3///8AAAD/AAAAARoAAAAA/v//AAAAAAAAAAAA////APr+/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/v4AAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAH////AAEBATYAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/gD+/v4AAAAAAAAAAAAAAAAAAAAAAP7+/gD///8AAAAAAAAAAAAAAAAABHt8fAMGBQU3f39/xgAAAACBgYEjAAAAEgAAAP8AAAABAAAA6H9/f+MAAAAAgIB/AICAgQAAAAAAgYGBIwAAABIAAAD/AAAAAgEBAd5+fn7sAAAAAIGBgQDw8PAAj4+PAAAAAAAAAAAAAAAAAIGBgTYBAQLVfn599X5+fgCCgoIAAAAAAAAAAAAAAAAAFBQUAH5+fgCBgYElAAAB/H9/ft9+fn4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAP///wAAAAAOAAAAAAAAAAAAAAADAQEB7////wD///8AAQEB3////wcAAAALAgIB7////wABAQEAAAAAAP7+/h0BAQHj/v7+AAAAAAAAAAAAAAAAAAAAAAAAAAAA/v7+AAAAAAAAAAAA////EgEBAe7///8AAQEB/QAAAAH///8bAQEB5f///wEBAQH/AAAAAP7+/gACAgIAAgICAAAAAAAAAAAA////EAAAAP8AAAD1AQEB/AAAAAAAAAAA////AAEBAQABgICA8P///w8AAADhAQEBHP///wMAAAAAAAAAAAAAAAAAAAAAAAEB9gEAAGeAgICkgICAdf///4oAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAewAAABYgICAvYCAgAACAgIAfn5+AAAAAACAgICk////WwAAAACBgYEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgICASf///7YAAAAAAAAAQ4GBgb4AAAAAgICAWQAAAKYAAAAA////gYGBgYAAAAAA/v7+8AEBAQ/////+AAAAAgAAAAAAAAAAAAAAAAEBAQD////uAgICEwAAAAD///8fAAAA4AAA/wD//wFiAgIBnwAAAAD/////AAAAAP8AAH4CAQGD////AAEBAQAAAAAAAAAAAAAAAAD///8AAQEBAP///7H///9OAQEB/gEBAQP///8C/////QEAAQD/AQCWAgEBawAAAAD+/v8AAgIBAAAAAAD///9yAAAAbgAAAB////8AAQEBAP///wABAQHu/wAAlAIBAX8AAAAA////AAL///8PAQEB/wEBAR////8DAQEBAAEBAQABAQEAAQEBAAEBAQAA//8K////o4B/f/P///+KAAAAAAEBAQABAQEAAQEBAAEBAQABAQEA////FP///7yAgICPgICAAP39/QAAAAAAAAAAAAAAACgAAAAAAQEBAHt7exAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///85AQEBAAEBAQAAAAAaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAbcAAAAAAAAAAAAAABb///8AAAABAAAA/yEAAAAAAAAAAAAAAAD///8AAQAAggAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAEBAQD///8SAAAATgAAAAAAAP8CAAAAAAAA/w0BAQEA/wEAAAEAADkAAAAA/v7+AAICAQAAAAAA////7f///43///8fAAAAAAEBAQAAAAAAAAAAAP///xIB//9+/v/////+/icBAQEABAEBAQAAAAAAAAAAAAEAAOT///9FgYGB2AAAAAAAAAAAf39/QQEBAbz///8CAAEBDAD//wABAQHo////R4GBgdIAAAAAAAAAAH9/f0YBAQG3////Af///3CAgIDJgICAqAAAAAAAAAAAAAAA/gAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAf0AAAAAAAAAAAAAAP4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAP///wABAQEAAAAA/wAAAAAAAAAAAAAA/gAAAAAAAAAA//8ArAEBAFT/AAAA////dgEBAYr+/v4AAgICAAAAAAD+//8AAgEBAP8AAJsBAAAAAQEBAP//AIcAAAAA//8BAAEBAAAA//8AAAEB/AAAAAACAgIAAAAAAP7+/+cAAP8SAAAAAAEBAdkAAABlAQEBwwAAAAD///8h/wAAjAAAAFIB//8AAAEB2Pr+/w0CAAAAAAAAAAH///8AS4CAHYGBgdgAAAAAAAAAAAAAAACBgYG/////KwEBAQAAAAAAAQEBAPf39xuBgYHSAAAAAAAAAAAAAAAAgYGBuv///zABAQEBAQEBAP///3wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/v4A////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9uAAABAAH//wD///+IAAAAAAICAgAAAAAAAAAAAAIBAQD6//4IAf8AUv///wD//wAAAQEAewAAAAABAQD/AAAAAAAAAAAAAAAAAAAAAAAAAAD+//9tAQH/GP//AAABAQHRAQEBKAEBAcMAAAAAAAAAAAEBAd8CAQFT/wAAewAAAAD//wAABAH/qgIAAAAAAAAAAAEBAe81AQEAuLm5AAAAAAAAAAAAAAAAAAAAAACBgYHY////AAAAAAAAAADziYmJ/ry8vAAAAAAAAAAAAAAAAAAAAAAABAQE3////wAAAAAAAQEBHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICAgACAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v7+AAICAuf////G/wEBAAEBAQH+/v5iAAAAAP///wD+/v4AAAAAAAT/AYsAAQAAAQEBAAEBAJ8BAQH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAF7/AAEAAAAAAAAAAE0AAAAA/v7+AAAAAAAAAAAA/v7+AAAAAAACAQGG/wEBAAAA/wAB/wBAAgAAAAAAAAAAAAAAAgAAAABIR0cAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAP4AAAAAREREAAAAAAAAAAAAAAAAAAAAAAD///8CAAAAAAAAAAAAAAD+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAWoBAAAA////AAAAAYQAAAAA9Pn/AAICAgAAAAAAAQH/bP///wAAAP8A//8AZgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wEAAAAAAAAAAAAA8QAAAAACAgIAAAAAAAAAAAACAgIA/v7+AAAAAAAA///vAQEBAP8AAAkCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICAgD+/v4AAQEB0QAAANkBAQEAAQH/Gf7+/z4NCAIAAAAAAP///4MAAAEAAQEAAP//AaUCAgH8////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAACAgIAAAAAAAAAAAIAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAAAAAAbP///wAAAAEAAAD/lwAAAAAAAAAA////fP///wAAAAAAAQEAcAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAP7+/gAAAAAAAAAA/gAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAA/f39/AAAAAAAAAAA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\">\n          </ng-template>\n      </div>\n      <ul nz-menu [nzTheme]=\"'dark'\" [nzMode]=\"'inline'\" [nzInlineCollapsed]=\"isCollapsed\" >\n        <!--Option search on menu, only displayed if current mode is PDF  -->\n        <li (click)=\"onMenuClick(Menu.Find)\" nz-menu-item *ngIf=\"typeObject == Type.PDF\">\n          <span>\n            <i class=\"anticon anticon-search\"></i>\n            <span class=\"nav-text\">Recherche</span>\n          </span>\n        </li>\n        <!--Option menu table of contents -->\n        <li (click)=\"onMenuClick(Menu.TOC)\" nz-menu-item>\n          <span>\n            <i class=\"anticon anticon-bars\"></i>\n            <span class=\"nav-text\">Structure</span>\n          </span>\n        </li>\n        <!--Option menu too se thumblist of document -->\n        <li (click)=\"onMenuClick(Menu.ThumbPreview)\" nz-menu-item>\n          <span><i class=\"anticon anticon-switcher\"></i>\n            <span class=\"nav-text\">Miniatures</span>\n          </span>\n        </li>\n        <!--Option menu to download actual document displayed -->\n        <li (click)=\"onMenuClick(Menu.Download)\" nz-menu-item>\n          <span>\n            <i class=\"anticon anticon-download\"></i>\n            <span class=\"nav-text\">Télécharger</span>\n          </span>\n        </li>\n        <!--Option menu to switch mode display of bottom menu -->\n        <li (click)=\"onMenuClick(Menu.BottomMenuVisible)\" nz-menu-item>\n          <span>\n            <i class=\"anticon anticon-minus-square-o\"></i>\n            <span class=\"nav-text\">Afficher menu</span>\n          </span>\n        </li>\n        <!--Option menu help -->\n        <li (click)=\"onMenuClick(Menu.Help)\" nz-menu-item>\n            <span>\n              <i class=\"anticon anticon-question-circle-o\"></i>\n              <span class=\"nav-text\">Aide</span>\n            </span>\n        </li>\n      </ul>\n    </nz-sider>\n    <!--Collapser Menu Component -->\n    <app-collapsed-menu (pageChanged)='updateImage($event)' (searchItemClick)='displayBoxSearch($event)'></app-collapsed-menu>\n    <!--Layout of page, with on resize trigger -->\n    <nz-layout (resized)=\"onResized($event)\">\n      <!--Dislay info about the document -->\n      <nz-header>\n        <h3 id=\"title\">{{title}}</h3>\n        <h4 id=\"creator\">{{creator}}</h4>\n      </nz-header>\n      <!--Content -->\n      <nz-content>\n        <div id=\"div-content\">\n          <nz-spin [nzSpinning]=\"isLoading\" [nzSize]=\"'large'\" class=\"spinPosition\">\n            <!--Dislay component content -->\n            <app-content></app-content>\n          </nz-spin>\n        </div>\n      </nz-content>\n      <!--Component bottom menu-->\n      <app-bottom-menu (pageChanged)='updateImage($event)'></app-bottom-menu>\n      <!--Footer -->\n      <nz-footer>Powered by\n        <a href=\"http://invenio-software.org/\" target=\"_blank\">Invenio</a>  / © Copyright <a href=\"http://www.rero.ch/\">RERO</a>\n      </nz-footer>\n    </nz-layout>\n  </nz-layout>\n"

/***/ }),

/***/ "./src/app/multivio-layout/multivio-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/multivio-layout/multivio-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: MultivioLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultivioLayoutComponent", function() { return MultivioLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _collapsed_menu_collapsed_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../collapsed-menu/collapsed-menu.component */ "./src/app/collapsed-menu/collapsed-menu.component.ts");
/* harmony import */ var _bottom_menu_bottom_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bottom-menu/bottom-menu.component */ "./src/app/bottom-menu/bottom-menu.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _services_document_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/document.service */ "./src/app/services/document.service.ts");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _enum_menu_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../enum/menu.enum */ "./src/app/enum/menu.enum.ts");
/* harmony import */ var _enum_display_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../enum/display.enum */ "./src/app/enum/display.enum.ts");
/* harmony import */ var _enum_type_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../enum/type.enum */ "./src/app/enum/type.enum.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MultivioLayoutComponent = /** @class */ (function () {
    function MultivioLayoutComponent(documentService, imageService, baseService, route) {
        this.documentService = documentService;
        this.imageService = imageService;
        this.baseService = baseService;
        this.route = route;
        // @Input() url: string;
        this.logo = './assets/images/logo_full.png';
        this.miniLogo = './assets/images/logo_mini.png';
        this.Menu = _enum_menu_enum__WEBPACK_IMPORTED_MODULE_7__["Menu"];
        this.Type = _enum_type_enum__WEBPACK_IMPORTED_MODULE_9__["Type"];
        this.isCollapsed = false;
        this.isReverseArrow = false;
        this.width = 200;
        this.title = '';
        this.creator = '';
        this.contentHeight = 0;
        this.contentWidth = 0;
        this.maxHeight = 0;
        this.maxWidth = 0;
        this.originalHeight = 0;
        this.originalWidth = 0;
        this.currentPage = 1;
        this.anglePage = 0;
        this.firstRendering = false;
        this.typeObject = '';
        this.hasMixedObjects = false;
        this.isLoading = true;
        this.currentDocument = 0;
        this.ratioPage = 0;
        this.documentChanged = false;
        this.modeBack = false;
    }
    MultivioLayoutComponent.prototype.getParams = function (params) {
        // let params = this.route.snapshot.paramMap;
        // console.log(params.get('doctype'), params.get('record'));
        var doctype = params.get('doctype');
        var pid = params.get('pid');
        if (doctype && pid) {
            this.baseService.setUrl(doctype + '/' + pid);
            this.setMetada();
        }
    };
    MultivioLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) { return _this.getParams(params); });
    };
    // Getting info from JSON
    MultivioLayoutComponent.prototype.setMetada = function () {
        var _this = this;
        this.baseService.getMetadata().subscribe(function (res) {
            // Set type of object
            _this.baseService.setListTypeObjects(res['mime_docs']);
            _this.hasMixedObjects = !res['mime_docs'].reduce(function (a, b) { return (a === b) ? a : NaN; });
            _this.typeObject = _this.baseService.getListTypeObjects()[0];
            // Setting title info
            _this.title = res['title'];
            // Setting creator info
            if (res['creator']) {
                _this.creator = res['creator'][0];
            }
            _this.setPhysical(0);
        });
    };
    // Getting physical info from JSON
    MultivioLayoutComponent.prototype.setPhysical = function (docNumber) {
        var _this = this;
        this.baseService.getPhysical().subscribe(function (data) {
            _this.baseService.setPhysicalInMemory(data);
            // Check if we are working with multiples documents/image at same time
            var nbDoc = Object.keys(data).length;
            if (nbDoc > 1 && _this.hasMixedObjects || _this.typeObject === _enum_type_enum__WEBPACK_IMPORTED_MODULE_9__["Type"].PDF) {
                _this.baseService.setAsMultipleObjects(true);
                _this.bottomMenuComponent.setNumberDocs(nbDoc);
                _this.bottomMenuComponent.setCurrentDoc(docNumber);
            }
            // By default we set the first document/image
            _this.baseService.setStructureObject(data);
            _this.baseService.setUrlCurrentObject(data[docNumber]['url']);
            _this.loadMetadata();
        });
    };
    // Dipspatch click on menu
    MultivioLayoutComponent.prototype.onMenuClick = function (e) {
        if (e !== _enum_menu_enum__WEBPACK_IMPORTED_MODULE_7__["Menu"].BottomMenuVisible && e !== _enum_menu_enum__WEBPACK_IMPORTED_MODULE_7__["Menu"].Download) {
            this.collapsedMenuComponent.collapse(e, this.typeObject, this.hasMixedObjects);
        }
        else {
            switch (e) {
                case _enum_menu_enum__WEBPACK_IMPORTED_MODULE_7__["Menu"].BottomMenuVisible:
                    this.toggleBottomMenu();
                    break;
                case _enum_menu_enum__WEBPACK_IMPORTED_MODULE_7__["Menu"].Download:
                    this.download();
                    break;
            }
        }
    };
    // Toggle the visibility of the bottom menu
    MultivioLayoutComponent.prototype.toggleBottomMenu = function () {
        this.bottomMenuComponent.toggleVisibility();
    };
    // Update image for rendering
    MultivioLayoutComponent.prototype.updateImage = function (event) {
        console.log(event);
        // Resetting bboxes
        this.contentComponent.resetBbox();
        // Start spinner loading
        this.setSpinnerLoading(true);
        // Set actual doc in application
        if (event['Doc'] !== null) {
            if (event['Doc'] !== this.currentDocument) {
                // If we have changed the we reitialize the thumlist preview
                this.collapsedMenuComponent.resetThumbList();
                this.currentDocument = event['Doc'];
                this.documentChanged = true;
                this.collapsedMenuComponent.clearResults();
                this.bottomMenuComponent.setCurrentDoc(event['Doc']);
                this.typeObject = this.baseService.getListTypeObjects()[event['Doc']];
                this.collapsedMenuComponent.typeObject = this.typeObject;
            }
        }
        // Setting the angle
        this.anglePage = event['Angle'];
        // Manage event display
        switch (event['Display']) {
            case _enum_display_enum__WEBPACK_IMPORTED_MODULE_8__["Display"].ZoomIn:
                // By default zoom-in is set to + 20%
                this.contentWidth = Math.round(this.contentWidth + this.contentWidth / 100 * 20);
                this.contentHeight = Math.round(this.contentHeight + this.contentHeight / 100 * 20);
                break;
            case _enum_display_enum__WEBPACK_IMPORTED_MODULE_8__["Display"].ZoomOut:
                // By default zoom-ou is set to - 20%
                this.contentWidth = Math.round(this.contentWidth - this.contentWidth / 100 * 20);
                this.contentHeight = Math.round(this.contentHeight - this.contentHeight / 100 * 20);
                break;
            case _enum_display_enum__WEBPACK_IMPORTED_MODULE_8__["Display"].FitToWidth:
                if (this.anglePage == 90 || this.anglePage == 270) {
                    this.contentWidth = Math.round(this.maxWidth * this.ratioPage);
                    // Calculating height with ratio
                    this.contentHeight = this.maxWidth;
                }
                else {
                    this.contentWidth = this.maxWidth;
                    // Calculating height with ratio
                    this.contentHeight = Math.round(this.maxWidth * this.ratioPage);
                }
                break;
            case _enum_display_enum__WEBPACK_IMPORTED_MODULE_8__["Display"].FitToHeight:
                if (this.anglePage == 90 || this.anglePage == 270) {
                    this.contentHeight = Math.round(this.maxHeight * this.ratioPage);
                    // Calculating with with ratio
                    this.contentWidth = this.maxWidth;
                }
                else {
                    this.contentHeight = this.maxHeight;
                    // Calculating with with ratio
                    this.contentWidth = Math.round(this.maxHeight / this.ratioPage);
                }
                break;
            case _enum_display_enum__WEBPACK_IMPORTED_MODULE_8__["Display"].OriginalSize:
                // Set content to original sizes
                this.contentWidth = this.originalWidth;
                this.contentHeight = this.originalHeight;
                break;
        }
        // Update info about current page
        this.bottomMenuComponent.currentPage = event['Page'];
        this.currentPage = event['Page'];
        // If we are working with multiples documents, set the new document
        if (this.baseService.getAsMultipleObjects() && this.documentChanged) {
            // Get image from document
            if (this.typeObject === _enum_type_enum__WEBPACK_IMPORTED_MODULE_9__["Type"].PDF || this.hasMixedObjects) {
                this.baseService.setUrlCurrentObject(this.baseService.getStructureObject()[this.currentDocument]['url']);
            }
            // Loading news metadata of docuement
            if (event['IsBack']) {
                // Retrive info from children's
                this.modeBack = true;
                this.bottomMenuComponent.currentPage = event['Page'];
                this.currentPage = event['Page'];
            }
            this.loadMetadata();
        }
        else {
            // Setting the current object (mode image)
            if (!this.hasMixedObjects && this.typeObject === _enum_type_enum__WEBPACK_IMPORTED_MODULE_9__["Type"].Image) {
                this.baseService.setUrlCurrentObject(this.baseService.getStructureObject()[this.currentPage - 1]['url']);
            }
            // Set info for mode search
            this.contentComponent.setInfoPage(this.contentHeight / this.originalHeight, this.currentPage, this.anglePage);
            // Set image
            this.setImageContent();
        }
    };
    // Load info abaout the document (ex. ssizes, number pages, ..)
    MultivioLayoutComponent.prototype.loadMetadata = function () {
        var _this = this;
        switch (this.typeObject) {
            case _enum_type_enum__WEBPACK_IMPORTED_MODULE_9__["Type"].PDF:
                // Get metadata from object of type PDF
                this.documentService.getMetadataDocument().subscribe(function (res) {
                    _this.baseService.setMaxPage(res['nPages']);
                    _this.bottomMenuComponent.maxValuePage = _this.baseService.getMaxPage();
                    _this.originalHeight = Math.round(res['nativeSize'][0][1]);
                    _this.originalWidth = Math.round(res['nativeSize'][0][0]);
                    _this.ratioPage = _this.originalHeight / _this.originalWidth;
                    if (_this.modeBack) {
                        _this.currentPage = _this.baseService.getMaxPage();
                        _this.bottomMenuComponent.currentPage = _this.currentPage;
                    }
                    if (_this.documentChanged === true && _this.collapsedMenuComponent.collapsed && _this.collapsedMenuComponent.actualMenu === 2) {
                        _this.collapsedMenuComponent.getThumbsPreview();
                    }
                    // Set image
                    _this.setImageContent();
                    // Set info for mode search
                    _this.contentComponent.setInfoPage(_this.contentHeight / _this.originalHeight, _this.currentPage, _this.anglePage);
                    _this.documentChanged = false;
                    _this.modeBack = false;
                });
                break;
            case _enum_type_enum__WEBPACK_IMPORTED_MODULE_9__["Type"].Image:
                // Get metadata from object of type image/jpeg
                this.imageService.getMetadataImage().subscribe(function (res) {
                    if (_this.hasMixedObjects) {
                        _this.baseService.setMaxPage(1);
                    }
                    else {
                        _this.baseService.setMaxPage(_this.baseService.getStructureObject().length);
                    }
                    _this.bottomMenuComponent.maxValuePage = _this.baseService.getMaxPage();
                    _this.originalHeight = Math.round(res['nativeSize'][1]);
                    _this.originalWidth = Math.round(res['nativeSize'][0]);
                    _this.ratioPage = _this.originalHeight / _this.originalWidth;
                    if (_this.documentChanged === true && _this.collapsedMenuComponent.collapsed && _this.collapsedMenuComponent.actualMenu === 2) {
                        _this.collapsedMenuComponent.getThumbsPreview();
                    }
                    // Set image
                    _this.setImageContent();
                    // Set info for mode search
                    _this.contentComponent.setInfoPage(_this.contentHeight / _this.originalHeight, _this.currentPage, _this.anglePage);
                    _this.documentChanged = false;
                    _this.modeBack = false;
                });
                break;
        }
    };
    // Fontion to download
    MultivioLayoutComponent.prototype.download = function () {
        var _this = this;
        switch (this.typeObject) {
            case _enum_type_enum__WEBPACK_IMPORTED_MODULE_9__["Type"].PDF:
                // Download PDF
                this.documentService.downloadDocument().subscribe(function (data) {
                    _this.createObjectURL(data);
                });
                break;
            case _enum_type_enum__WEBPACK_IMPORTED_MODULE_9__["Type"].Image:
                // Download the image
                this.imageService.downloadImage().subscribe(function (data) {
                    _this.createObjectURL(data);
                });
                break;
        }
    };
    // Create URL for downloading the element
    MultivioLayoutComponent.prototype.createObjectURL = function (data) {
        var url = window.URL.createObjectURL(data);
        var a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = url;
        a.download = this.baseService.getPhysicalInMemory()[this.currentDocument]['label'];
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
    };
    // On resized event , called after resize content
    MultivioLayoutComponent.prototype.onResized = function (event) {
        if (event.newWidth > 0 && event.newHeight > 0 && !this.firstRendering) {
            this.contentWidth = event.newWidth - 100;
            this.contentHeight = event.newHeight - 235;
            this.firstRendering = true;
            // this.setImageContent();
        }
        this.maxWidth = event.newWidth - 100;
        this.maxHeight = event.newHeight - 235;
    };
    // Set image to render
    MultivioLayoutComponent.prototype.setImageContent = function () {
        var _this = this;
        switch (this.typeObject) {
            case _enum_type_enum__WEBPACK_IMPORTED_MODULE_9__["Type"].PDF:
                this.documentService.getImageFromDocument(this.currentPage, this.anglePage, this.contentWidth, this.contentHeight)
                    .subscribe(function (data) {
                    _this.createImageFromBlob(data);
                    _this.setSpinnerLoading(false);
                });
                break;
            case _enum_type_enum__WEBPACK_IMPORTED_MODULE_9__["Type"].Image:
                this.imageService.getImage(this.anglePage, this.contentWidth, this.contentHeight).subscribe(function (data) {
                    _this.createImageFromBlob(data);
                    _this.setSpinnerLoading(false);
                });
                break;
        }
    };
    // Create image from blob retrieved (server)
    MultivioLayoutComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener('load', function () {
            _this.contentComponent.setImage(reader.result);
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    // Displaing box on document
    MultivioLayoutComponent.prototype.displayBoxSearch = function (res) {
        this.contentComponent.setBBox(res);
        this.contentComponent.setInfoPage(this.contentHeight / this.originalHeight, this.currentPage, this.anglePage);
    };
    // Stop spinner loading
    MultivioLayoutComponent.prototype.setSpinnerLoading = function (loading) {
        this.isLoading = loading;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_collapsed_menu_collapsed_menu_component__WEBPACK_IMPORTED_MODULE_1__["CollapsedMenuComponent"]),
        __metadata("design:type", _collapsed_menu_collapsed_menu_component__WEBPACK_IMPORTED_MODULE_1__["CollapsedMenuComponent"])
    ], MultivioLayoutComponent.prototype, "collapsedMenuComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_bottom_menu_bottom_menu_component__WEBPACK_IMPORTED_MODULE_2__["BottomMenuComponent"]),
        __metadata("design:type", _bottom_menu_bottom_menu_component__WEBPACK_IMPORTED_MODULE_2__["BottomMenuComponent"])
    ], MultivioLayoutComponent.prototype, "bottomMenuComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"]),
        __metadata("design:type", _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"])
    ], MultivioLayoutComponent.prototype, "contentComponent", void 0);
    MultivioLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multivio',
            template: __webpack_require__(/*! ./multivio-layout.component.html */ "./src/app/multivio-layout/multivio-layout.component.html"),
            styles: [__webpack_require__(/*! ./multivio-layout.component.css */ "./src/app/multivio-layout/multivio-layout.component.css")]
        }),
        __metadata("design:paramtypes", [_services_document_service__WEBPACK_IMPORTED_MODULE_4__["DocumentService"],
            _services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"],
            _services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]])
    ], MultivioLayoutComponent);
    return MultivioLayoutComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout id=\"layout\">\nDocument not found!\n</nz-layout>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/services/base.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/base.service.ts ***!
  \******************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _url_prefix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url-prefix.service */ "./src/app/services/url-prefix.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BaseService = /** @class */ (function () {
    function BaseService(http, urlPrefix) {
        this.http = http;
        this.urlPrefix = urlPrefix;
        this.asMultiplesObjects = false;
        this.urlCurrentObject = '';
        this.url = '';
        this.maxPages = 0;
        this.prefixMetadata = '';
        this.prefixPhysical = '';
        this.listTypeObjects = [];
    }
    /** GET metadata from json or xml */
    BaseService.prototype.getMetadata = function () {
        // return this.http.get<Object[]>(this.prefixMetadata + this.url);
        // console.log(this.UrlPrefixService, this.url);
        //   const httpOptions = {
        //   headers: new HttpHeaders({
        //     'Accept':  'application/xml'
        //   })
        // };
        return this.http.get(this.urlPrefix.invenioAPI + this.url + '/metadata');
    };
    /** GET metadata from json or xml */
    BaseService.prototype.getPhysical = function () {
        return this.http.get(this.urlPrefix.invenioAPI + this.url + '/physical');
    };
    /** SET url document from the document for the service */
    BaseService.prototype.setUrlCurrentObject = function (url) {
        this.urlCurrentObject = url;
    };
    /** GET url document from the document for the service */
    BaseService.prototype.getUrlCurrenObject = function () {
        return this.urlCurrentObject;
    };
    /** SET url of document  for the service */
    BaseService.prototype.setUrl = function (url) {
        this.url = url;
        // if (this.url.endsWith('.json')) {
        //   this.prefixMetadata = this.urlPrefix.metadataJSON;
        //   this.prefixPhysical = this.urlPrefix.physicalJSON;
        // } else {
        //   this.prefixMetadata = this.urlPrefix.metadataXML;
        //   this.prefixPhysical = this.urlPrefix.physicalXML;
        // }
    };
    /** GET url json of document from the document for the service */
    BaseService.prototype.getUrl = function () {
        return this.url;
    };
    /** SET max page */
    BaseService.prototype.setMaxPage = function (pages) {
        this.maxPages = pages;
    };
    /** GET max page */
    BaseService.prototype.getMaxPage = function () {
        return this.maxPages;
    };
    /** SET structure */
    BaseService.prototype.setStructureObject = function (struc) {
        this.structureObject = struc;
    };
    /** SET structure */
    BaseService.prototype.getStructureObject = function () {
        return this.structureObject;
    };
    /** SET structure */
    BaseService.prototype.setListTypeObjects = function (struc) {
        this.listTypeObjects = struc;
    };
    /** SET structure */
    BaseService.prototype.getListTypeObjects = function () {
        return this.listTypeObjects;
    };
    /** SET info about of multiple structure */
    BaseService.prototype.setAsMultipleObjects = function (isMultiple) {
        this.asMultiplesObjects = isMultiple;
    };
    /** GET info about struture object */
    BaseService.prototype.getAsMultipleObjects = function () {
        return this.asMultiplesObjects;
    };
    /** SET the physical into memory */
    BaseService.prototype.setPhysicalInMemory = function (data) {
        this.physicalInMemory = data;
    };
    /** GET the physical from memory */
    BaseService.prototype.getPhysicalInMemory = function () {
        return this.physicalInMemory;
    };
    BaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _url_prefix_service__WEBPACK_IMPORTED_MODULE_1__["UrlPrefixService"]])
    ], BaseService);
    return BaseService;
}());



/***/ }),

/***/ "./src/app/services/document.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/document.service.ts ***!
  \**********************************************/
/*! exports provided: DocumentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentService", function() { return DocumentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _url_prefix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url-prefix.service */ "./src/app/services/url-prefix.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/app/services/base.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DocumentService = /** @class */ (function () {
    function DocumentService(http, urlPrefix, baseService) {
        this.http = http;
        this.urlPrefix = urlPrefix;
        this.baseService = baseService;
    }
    /** GET toc from the document */
    DocumentService.prototype.getTOC = function () {
        return this.http.get(this.urlPrefix.tocDocument + this.baseService.getUrlCurrenObject());
    };
    /** GET find text from the document */
    DocumentService.prototype.findText = function (text) {
        return this.http.get(this.urlPrefix.findTextDocument + this.baseService.getUrlCurrenObject() + '?string=' + text);
    };
    /** GET metadata from the document */
    DocumentService.prototype.getMetadataDocument = function () {
        return this.http.get(this.urlPrefix.metadataDocument + this.baseService.getUrlCurrenObject());
    };
    /** GET metadata from the document */
    DocumentService.prototype.getImageFromDocument = function (nrPage, angle, maxWidth, minHeight) {
        var query = '';
        if (nrPage !== null) {
            query += '?page_nr=' + nrPage;
        }
        if (angle !== 0) {
            query += '&angle=' + angle;
        }
        if (maxWidth > 0) {
            query += '&max_width=' + maxWidth;
        }
        if (minHeight > 0) {
            query += '&max_height=' + minHeight;
        }
        return this.http.get(this.urlPrefix.imageDocument + this.baseService.getUrlCurrenObject() + query, { responseType: 'blob' });
    };
    /** Download the document */
    DocumentService.prototype.downloadDocument = function () {
        return this.http.get(this.urlPrefix.downloadDocument + this.baseService.getUrlCurrenObject(), { responseType: 'blob' });
    };
    DocumentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _url_prefix_service__WEBPACK_IMPORTED_MODULE_1__["UrlPrefixService"], _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]])
    ], DocumentService);
    return DocumentService;
}());



/***/ }),

/***/ "./src/app/services/image.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/image.service.ts ***!
  \*******************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _url_prefix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url-prefix.service */ "./src/app/services/url-prefix.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/app/services/base.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageService = /** @class */ (function () {
    function ImageService(http, urlPrefix, baseService) {
        this.http = http;
        this.urlPrefix = urlPrefix;
        this.baseService = baseService;
    }
    /** GET image from server */
    ImageService.prototype.getImage = function (angle, maxWidth, minHeight) {
        var query = '';
        query += '?angle=' + angle;
        if (maxWidth > 0) {
            query += '&max_width=' + maxWidth;
        }
        if (minHeight > 0) {
            query += '&max_height=' + minHeight;
        }
        return this.http.get(this.urlPrefix.imageRender + this.baseService.getUrlCurrenObject() + query, { responseType: 'blob' });
    };
    /** GET metadata from the document */
    ImageService.prototype.getMetadataImage = function () {
        return this.http.get(this.urlPrefix.metadataImage + this.baseService.getUrlCurrenObject());
    };
    /** Download the image */
    ImageService.prototype.downloadImage = function () {
        return this.http.get(this.urlPrefix.downloadImage + this.baseService.getUrlCurrenObject(), { responseType: 'blob' });
    };
    ImageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _url_prefix_service__WEBPACK_IMPORTED_MODULE_1__["UrlPrefixService"], _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]])
    ], ImageService);
    return ImageService;
}());



/***/ }),

/***/ "./src/app/services/url-prefix.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/url-prefix.service.ts ***!
  \************************************************/
/*! exports provided: UrlPrefixService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlPrefixService", function() { return UrlPrefixService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UrlPrefixService = /** @class */ (function () {
    function UrlPrefixService() {
        // URL's Document
        this.tocDocument = '/api-pdf/toc/';
        this.findTextDocument = '/api-pdf/find/';
        this.metadataDocument = '/api-pdf/metadata/';
        this.imageDocument = '/api-pdf/render/';
        this.downloadDocument = '/api-pdf/download/';
        // URL's JSON
        // this.metadataJSON = '/api-json/metadata/';
        this.physicalJSON = '/api-json/physical/';
        // URL's XML
        // this.metadataXML = '/api-xml/metadata/';
        this.physicalXML = '/api-xml/physical/';
        this.invenioAPI = '/api-json/';
        // URL's Image
        this.imageRender = '/api-image/render/';
        this.metadataImage = '/api-image/metadata/';
        this.downloadImage = '/api-image/download/';
    }
    UrlPrefixService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UrlPrefixService);
    return UrlPrefixService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/maj/devel/virtualenvs/rerodoc-app/src/invenio-multivio-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);