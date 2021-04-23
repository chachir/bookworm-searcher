(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+9od":
/*!******************************************!*\
  !*** ./src/app/services/book.service.ts ***!
  \******************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BookService {
    constructor() {
        this.defaultKeyword = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]("");
        this.currentKeyword = this.defaultKeyword.asObservable();
    }
    changeKeyword(searchedKeyword) {
        this.defaultKeyword.next(searchedKeyword);
    }
}
BookService.ɵfac = function BookService_Factory(t) { return new (t || BookService)(); };
BookService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BookService, factory: BookService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\OpenLibra\open-libra\src\main.ts */"zUnb");


/***/ }),

/***/ "4AU3":
/*!**********************************************************!*\
  !*** ./src/app/book-carousel/book-carousel.component.ts ***!
  \**********************************************************/
/*! exports provided: BookCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookCarouselComponent", function() { return BookCarouselComponent; });
/* harmony import */ var _data_categories_filter_lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data-categories/filter-lists */ "GSF3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/book.service */ "+9od");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







function BookCarouselComponent_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", category_r7.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r7.categoryName);
} }
function BookCarouselComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "li", 24);
} if (rf & 2) {
    const index_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-slide-to", index_r9);
} }
const _c0 = function (a0) { return { active: a0 }; };
function BookCarouselComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r10 = ctx.$implicit;
    const isFirst_r12 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, isFirst_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", (book_r10.volumeInfo == null ? null : book_r10.volumeInfo.imageLinks) != undefined ? book_r10.volumeInfo.imageLinks == null ? null : book_r10.volumeInfo.imageLinks.thumbnail : "assets/img/wormnotfound.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", book_r10.volumeInfo == null ? null : book_r10.volumeInfo.title);
} }
function BookCarouselComponent_ul_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/book/", book_r13.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", book_r13.volumeInfo == null ? null : book_r13.volumeInfo.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](book_r13.volumeInfo == null ? null : book_r13.volumeInfo.title);
} }
function BookCarouselComponent_li_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "li", 30);
} if (rf & 2) {
    const index_r15 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-slide-to", index_r15);
} }
function BookCarouselComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r16 = ctx.$implicit;
    const isFirst_r18 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, isFirst_r18));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", (book_r16.volumeInfo == null ? null : book_r16.volumeInfo.imageLinks) != undefined ? book_r16.volumeInfo.imageLinks == null ? null : book_r16.volumeInfo.imageLinks.thumbnail : "assets/img/wormnotfound.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", book_r16.volumeInfo == null ? null : book_r16.volumeInfo.title);
} }
function BookCarouselComponent_ul_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/book/", book_r19.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", book_r19.volumeInfo == null ? null : book_r19.volumeInfo.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](book_r19.volumeInfo == null ? null : book_r19.volumeInfo.title);
} }
class BookCarouselComponent {
    constructor(APIService, data) {
        this.APIService = APIService;
        this.data = data;
        this.categories = _data_categories_filter_lists__WEBPACK_IMPORTED_MODULE_0__["CATEGORY_LIST"];
        this.selectedCategory = this.categories[0].category;
        this.max_results = 'maxResults=7';
    }
    ngOnInit() {
        this.recentBooks = {
            totalItems: 0,
            items: null,
        };
        this.relevantBooks = {
            totalItems: 0,
            items: null,
        };
        this.getNewBooks(this.selectedCategory);
        this.getTopBooks(this.selectedCategory);
    }
    /** Recommendations on home page */
    getNewBooks(category) {
        this.APIService.search('subject:' + category + '&orderBy=newest&' + this.max_results).subscribe((recentBooks) => { this.recentBooks = recentBooks; });
    }
    getTopBooks(category) {
        this.APIService.search('subject:' + category + '&orderBy=relevance&' + this.max_results).subscribe((relevantBooks) => { this.relevantBooks = relevantBooks; });
    }
}
BookCarouselComponent.ɵfac = function BookCarouselComponent_Factory(t) { return new (t || BookCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"])); };
BookCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BookCarouselComponent, selectors: [["app-book-carousel"]], decls: 44, vars: 8, consts: [[1, "container-fluid"], [1, "cat"], [1, "category_list", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "header_books"], [1, "row", "row-cols-2"], [1, "column", "newest-books"], ["id", "carousel0", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carousel0", 4, "ngFor", "ngForOf"], [1, "carousel-inner"], ["class", "carousel-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["href", "#carousel0", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carousel0", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "column", "newest-books-list"], ["id", "newest_buttons", "class", "list-group", 4, "ngFor", "ngForOf"], ["id", "carousel1", "data-ride", "carousel", 1, "carousel", "slide"], ["data-target", "#carousel1", 4, "ngFor", "ngForOf"], ["href", "#carousel1", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["href", "#carousel1", "role", "button", "data-slide", "next", 1, "carousel-control-next"], [3, "value"], ["data-target", "#carousel0"], [1, "carousel-item", 3, "ngClass"], [1, "rounded", "d-block", "w-100", 3, "src", "alt"], ["id", "newest_buttons", 1, "list-group"], [1, "list-group"], [1, "button", 3, "routerLink", "title"], ["data-target", "#carousel1"]], template: function BookCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BookCarouselComponent_Template_select_ngModelChange_3_listener($event) { return ctx.selectedCategory = $event; })("change", function BookCarouselComponent_Template_select_change_3_listener() { ctx.getNewBooks(ctx.selectedCategory); return ctx.getTopBooks(ctx.selectedCategory); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BookCarouselComponent_option_4_Template, 2, 2, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Most recent books");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ol", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, BookCarouselComponent_li_12_Template, 1, 1, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, BookCarouselComponent_div_14_Template, 2, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, BookCarouselComponent_ul_24_Template, 5, 3, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Most relevant books");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ol", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, BookCarouselComponent_li_31_Template, 1, 1, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, BookCarouselComponent_div_33_Template, 2, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, BookCarouselComponent_ul_43_Template, 5, 3, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.recentBooks.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.recentBooks.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.recentBooks.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.relevantBooks.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.relevantBooks.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.relevantBooks.items);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: [".carousel[_ngcontent-%COMP%]{\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n  }\r\n\r\n  .carousel-control-prev[_ngcontent-%COMP%]{\r\n    left: -15%;\r\n  }\r\n\r\n  .carousel-control-next[_ngcontent-%COMP%]{\r\n    right: -15%;\r\n  }\r\n\r\n  .carousel-indicators[_ngcontent-%COMP%]{\r\n    top: 100%;\r\n  }\r\n\r\n  .row[_ngcontent-%COMP%]{\r\n    margin-bottom: 30px;\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .column[_ngcontent-%COMP%]{\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .category_list[_ngcontent-%COMP%]{\r\n    display: block;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    background-color: rgb(0, 0, 0, 0.7);\r\n    color: white;\r\n    text-align-last: center;\r\n    font-size: 20px;\r\n  }\r\n\r\n  .newest-books[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n\r\n      max-width: 200px;\r\n      max-height: 300px;\r\n  }\r\n\r\n  .new-books[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n\r\n      max-width: 200px;\r\n      max-height: 300px;\r\n  }\r\n\r\n  ul[_ngcontent-%COMP%] {\r\n    width:250px;\r\n    resize:both;\r\n    text-align: center;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%]{\r\n    text-overflow:ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n  }\r\n\r\n  a.button[_ngcontent-%COMP%]{\r\n    display:inline-block;\r\n    padding:0.35em 1.2em;\r\n    margin:0 0.3em 0.3em 0;\r\n    text-decoration:none;\r\n    font-family:'Roboto',sans-serif;\r\n    font-weight:30;\r\n    color: white;\r\n    text-align:center;\r\n    transition: all 0.2s;\r\n  }\r\n\r\n  a.button[_ngcontent-%COMP%]:hover {\r\n    color: white;\r\n\r\n  }\r\n\r\n  li[_ngcontent-%COMP%] {\r\n     background-color:black;\r\n     border-radius: 10%;\r\n  }\r\n\r\n  li[_ngcontent-%COMP%]:hover {\r\n    background-color: #740e00;\r\n  }\r\n\r\n  @media all and (max-width:30em){\r\n    a.button[_ngcontent-%COMP%]{\r\n      display:block;\r\n      margin:0.4em auto;\r\n    }\r\n  }\r\n\r\n  .header_books[_ngcontent-%COMP%] {\r\n    color: white;\r\n    text-align: center;\r\n  }\r\n\r\n  @media(max-width:768px){\r\n    .header_books[_ngcontent-%COMP%]{\r\n      color: black;\r\n    }\r\n    li[_ngcontent-%COMP%]{\r\n      background-color: #740e00;\r\n    }\r\n    li[_ngcontent-%COMP%]:hover{\r\n      background-color: black;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2stY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztDQUVDO0lBQ0csa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCOztFQUVBOztNQUVJLGdCQUFnQjtNQUNoQixpQkFBaUI7RUFDckI7O0VBRUE7O01BRUksZ0JBQWdCO01BQ2hCLGlCQUFpQjtFQUNyQjs7RUFHQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLCtCQUErQjtJQUMvQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxZQUFZOztFQUVkOztFQUVBO0tBQ0csc0JBQXNCO0tBQ3RCLGtCQUFrQjtFQUNyQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFO01BQ0UsYUFBYTtNQUNiLGlCQUFpQjtJQUNuQjtFQUNGOztFQUdBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFO01BQ0UsWUFBWTtJQUNkO0lBQ0E7TUFDRSx5QkFBeUI7SUFDM0I7SUFDQTtNQUNFLHVCQUF1QjtJQUN6QjtFQUNGIiwiZmlsZSI6ImJvb2stY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuIC5jYXJvdXNlbHtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmNhcm91c2VsLWNvbnRyb2wtcHJldntcclxuICAgIGxlZnQ6IC0xNSU7XHJcbiAgfVxyXG5cclxuICAuY2Fyb3VzZWwtY29udHJvbC1uZXh0e1xyXG4gICAgcmlnaHQ6IC0xNSU7XHJcbiAgfVxyXG5cclxuICAuY2Fyb3VzZWwtaW5kaWNhdG9yc3tcclxuICAgIHRvcDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5yb3d7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcblxyXG4gIC5jb2x1bW57XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhdGVnb3J5X2xpc3R7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIC5uZXdlc3QtYm9va3MgZGl2IHtcclxuXHJcbiAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxuXHJcbiAgLm5ldy1ib29rcyBkaXYge1xyXG5cclxuICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgdWwge1xyXG4gICAgd2lkdGg6MjUwcHg7XHJcbiAgICByZXNpemU6Ym90aDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgcHtcclxuICAgIHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgYS5idXR0b257XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6MC4zNWVtIDEuMmVtO1xyXG4gICAgbWFyZ2luOjAgMC4zZW0gMC4zZW0gMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgZm9udC1mYW1pbHk6J1JvYm90bycsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OjMwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICB9XHJcblxyXG4gIGEuYnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgfVxyXG5cclxuICBsaSB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgfVxyXG5cclxuICBsaTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzQwZTAwO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDozMGVtKXtcclxuICAgIGEuYnV0dG9ue1xyXG4gICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICBtYXJnaW46MC40ZW0gYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAuaGVhZGVyX2Jvb2tzIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIEBtZWRpYShtYXgtd2lkdGg6NzY4cHgpe1xyXG4gICAgLmhlYWRlcl9ib29rc3tcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gICAgbGl7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3NDBlMDA7XHJcbiAgICB9XHJcbiAgICBsaTpob3ZlcntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0= */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/book.service */ "+9od");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _book_carousel_book_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../book-carousel/book-carousel.component */ "4AU3");





class HomeComponent {
    constructor(data, router, route) {
        this.data = data;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.data.currentKeyword.subscribe(keyword => this.keyword = keyword);
    }
    searchKey(keyword) {
        keyword = keyword.replace(/\s/gi, '+');
        this.data.changeKeyword(keyword);
    }
    onKeyDownEvent(event) {
        this.router.navigate(['/search'], { relativeTo: this.route });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 27, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col", "welcome"], [1, "d-flex"], ["type", "search", "placeholder", "Search a book", 1, "form-control", "search", 3, "keydown.enter", "input"], ["keywordBox", ""], ["type", "button", 1, "btn"], ["routerLink", "/search"], ["src", "../assets/img/search.png", "title", "Search!"], ["href", "https://github.com/chachir/open-libra/", "target", "_blank"], ["href", "http://www.freepik.com", "target", "_blank"], ["src", "../assets/img/wormabc.png", "title", "Designed by pch.vector / freepik", "width", "30%", "height", "30%"], [1, "col"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Looking for your next reading?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function HomeComponent_Template_input_keydown_enter_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); ctx.searchKey(_r0.value); return ctx.onKeyDownEvent($event); })("input", function HomeComponent_Template_input_input_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.searchKey(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "BookWorm SE is a book search engine that helps you find information about any book by title, author or genre. You can refine your search with filters and more info you know about the volume you are looking for. And check out how long it will take to read your next book as well!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "For further information, check our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "GitHub repo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-book-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _book_carousel_book_carousel_component__WEBPACK_IMPORTED_MODULE_4__["BookCarouselComponent"]], styles: [".welcome[_ngcontent-%COMP%] {\r\n  width: 45%;\r\n  height:40%;\r\n  background-color: #740e00;\r\n  border-radius: 25px;\r\n  padding: 2rem;\r\n  margin: 2rem;\r\n  color: white;\r\n}\r\n\r\n.search[_ngcontent-%COMP%] {\r\n  height: 3.5rem;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: #c2b9b8;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  font-size: larger;\r\n  text-align: justify;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lIHtcclxuICB3aWR0aDogNDUlO1xyXG4gIGhlaWdodDo0MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc0MGUwMDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgbWFyZ2luOiAycmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNlYXJjaCB7XHJcbiAgaGVpZ2h0OiAzLjVyZW07XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiAjYzJiOWI4O1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG5pbWd7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBTtp917osmvBdjY0rW9Jod3IKypxwH5IY",
        authDomain: "bookworm-c4eda.firebaseapp.com",
        projectId: "bookworm-c4eda",
        storageBucket: "bookworm-c4eda.appspot.com",
        messagingSenderId: "585002975588",
        appId: "1:585002975588:web:61836f48b68b469522ba71"
    }
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

/***/ "GSF3":
/*!*************************************************!*\
  !*** ./src/app/data-categories/filter-lists.ts ***!
  \*************************************************/
/*! exports provided: AVAILABILITY_LIST, TYPE_LIST, LANGUAGE_LIST, CATEGORY_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AVAILABILITY_LIST", function() { return AVAILABILITY_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_LIST", function() { return TYPE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_LIST", function() { return LANGUAGE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY_LIST", function() { return CATEGORY_LIST; });
const AVAILABILITY_LIST = [
    { categoryName: 'Partial', category: 'partial' },
    { categoryName: 'Full', category: 'full' },
    { categoryName: 'Free ebooks', category: 'free-ebooks' },
    { categoryName: 'Paid ebooks', category: 'paid-ebooks' },
    { categoryName: 'Ebooks', category: 'ebooks' },
];
const TYPE_LIST = [
    { categoryName: 'Books & magazines', category: 'all' },
    { categoryName: 'Books', category: 'books' },
    { categoryName: 'Magazines', category: 'magazines' },
];
const LANGUAGE_LIST = [
    { categoryName: 'Afrikaans', category: 'af' },
    { categoryName: 'Arabic', category: 'ar' },
    { categoryName: 'Armenian', category: 'hy' },
    { categoryName: 'Bulgarian', category: 'bg' },
    { categoryName: 'Catalan', category: 'ca' },
    { categoryName: 'Simplified Chinese', category: 'zh-CN' },
    { categoryName: 'Traditional Chinese', category: 'zh-TW' },
    { categoryName: 'Croatian', category: 'hr' },
    { categoryName: 'Czech', category: 'cs' },
    { categoryName: 'Danish', category: 'da' },
    { categoryName: 'Dutch', category: 'nl' },
    { categoryName: 'English', category: 'en' },
    { categoryName: 'Filipino', category: 'fil' },
    { categoryName: 'Finnish', category: 'fi' },
    { categoryName: 'French', category: 'fr' },
    { categoryName: 'German', category: 'de' },
    { categoryName: 'Greek', category: 'el' },
    { categoryName: 'Hebrew', category: 'he' },
    { categoryName: 'Hungarian', category: 'hu' },
    { categoryName: 'Icelandic', category: 'is' },
    { categoryName: 'Indonesian', category: 'id' },
    { categoryName: 'Italian', category: 'it' },
    { categoryName: 'Japanese', category: 'ja' },
    { categoryName: 'Korean', category: 'ko' },
    { categoryName: 'Latvian', category: 'lv' },
    { categoryName: 'Malay', category: 'ms' },
    { categoryName: 'Norwegian', category: 'no' },
    { categoryName: 'Polish', category: 'pl' },
    { categoryName: 'Portuguese (Brazil)', category: 'pt-BR' },
    { categoryName: 'Portuguese (Portugal)', category: 'pt-PT' },
    { categoryName: 'Romanian', category: 'ro' },
    { categoryName: 'Russian', category: 'ru' },
    { categoryName: 'Serbian ', category: 'sr' },
    { categoryName: 'Slovak', category: 'sk' },
    { categoryName: 'Slovenian', category: 'sl' },
    { categoryName: 'Spanish', category: 'es' },
    { categoryName: 'Swedish', category: 'sv' },
    { categoryName: 'Tagalog', category: 'tl' },
    { categoryName: 'Thai', category: 'th' },
    { categoryName: 'German', category: 'tr' },
    { categoryName: 'Turkish', category: 'uk' },
    { categoryName: 'Vietnamese', category: 'vi' },
];
const CATEGORY_LIST = [
    { categoryName: 'ANTIQUES & COLLECTIBLES', category: 'antiques+collectibles' },
    { categoryName: 'ARCHITECTURE', category: 'architecture' },
    { categoryName: 'ART', category: 'art' },
    { categoryName: 'BIBLES', category: 'bibles' },
    { categoryName: 'BIOGRAPHY & AUTOBIOGRAPHY', category: 'biography+autobiography' },
    { categoryName: 'BODY, MIND & SPIRIT', category: 'body+mind+spirit' },
    { categoryName: 'BUSINESS & ECONOMICS', category: 'business+economics' },
    { categoryName: 'COMICS & GRAPHIC NOVELS', category: 'comics+graphic+novels' },
    { categoryName: 'COMPUTERS', category: 'computers' },
    { categoryName: 'COOKING', category: 'cooking' },
    { categoryName: 'CRAFTS & HOBBIES', category: 'craft+hobbies' },
    { categoryName: 'CRIME', category: 'rime' },
    { categoryName: 'DESIGN', category: 'design' },
    { categoryName: 'DRAMA', category: 'drama' },
    { categoryName: 'EDUCATION', category: 'education' },
    { categoryName: 'FAMILY & RELATIONSHIPS', category: 'family+relationships' },
    { categoryName: 'FICTION', category: 'fiction' },
    { categoryName: 'GAMES & ACTIVITIES', category: 'games+activities' },
    { categoryName: 'GARDENING', category: 'gardening' },
    { categoryName: 'HEALTH & FITNESS', category: 'health+fitness' },
    { categoryName: 'HISTORY', category: 'history' },
    { categoryName: 'HOUSE & HOME', category: 'house+home' },
    { categoryName: 'HUMOR', category: 'humor' },
    { categoryName: 'JUVENILE', category: 'juvenile' },
    { categoryName: 'LANGUAGE ARTS & DISCIPLINES', category: 'language+arts+disciplines' },
    { categoryName: 'LAW', category: 'law' },
    { categoryName: 'LITERARY COLLECTIONS', category: 'literary+collections' },
    { categoryName: 'LITERARY CRITICISM', category: 'literary+criticism' },
    { categoryName: 'MATHEMATICS', category: 'mathematics' },
    { categoryName: 'MEDICAL', category: 'medical' },
    { categoryName: 'MUSIC', category: 'music' },
    { categoryName: 'NATURE', category: 'nature' },
    { categoryName: 'PERFORMING ARTS', category: 'performing+arts' },
    { categoryName: 'PETS', category: 'pets' },
    { categoryName: 'PHILOSOPHY', category: 'philosophy' },
    { categoryName: 'PHOTOGRAPHY', category: 'photography' },
    { categoryName: 'POETRY', category: 'poetry' },
    { categoryName: 'POLITICAL SCIENCE', category: 'political+science' },
    { categoryName: 'PSYCHOLOGY', category: 'psychology' },
    { categoryName: 'REFERENCE', category: 'reference' },
    { categoryName: 'RELIGION', category: 'religion' },
    { categoryName: 'SCIENCE', category: 'science' },
    { categoryName: 'SELF-HELP', category: 'self+help' },
    { categoryName: 'SOCIAL SCIENCE', category: 'social+science' },
    { categoryName: 'SPORTS & RECREATION', category: 'sport+recreation' },
    { categoryName: 'STUDY AIDS', category: 'study+aids' },
    { categoryName: 'TECHNOLOGY & ENGINEERING', category: 'technology+engineering' },
    { categoryName: 'TRANSPORTATION', category: 'transportation' },
    { categoryName: 'TRAVEL', category: 'travel' },
];


/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: APIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIService", function() { return APIService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
class APIService {
    constructor(http) {
        this.http = http;
        this.urlGB = "https://www.googleapis.com/books/v1/volumes";
        this.urlGBQuery = this.urlGB + "?q=";
    }
    searchById(id) {
        return this.http.get(this.urlGB + '/' + id, httpOptions);
    }
    search(query) {
        return this.http.get(this.urlGBQuery + query, httpOptions);
    }
}
APIService.ɵfac = function APIService_Factory(t) { return new (t || APIService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
APIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: APIService, factory: APIService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");




class AppComponent {
    constructor() {
        this.title = 'open-libra';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "UNjN":
/*!****************************************!*\
  !*** ./src/app/book/book.component.ts ***!
  \****************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var _data_categories_filter_lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data-categories/filter-lists */ "GSF3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_readmore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-readmore */ "GEs+");






function BookComponent_div_8_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const author_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", author_r9, " ");
} }
function BookComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, BookComponent_div_8_p_3_Template, 2, 1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.book.volumeInfo == null ? null : ctx_r0.book.volumeInfo.authors);
} }
function BookComponent_li_10_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r11);
} }
function BookComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Categories:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, BookComponent_li_10_p_3_Template, 2, 1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.book.volumeInfo == null ? null : ctx_r1.book.volumeInfo.categories);
} }
function BookComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.startTimer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Start reading test");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BookComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.stopTimer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Stop reading test");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BookComponent_p_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r4.timeTest.hours, "h ", ctx_r4.timeTest.minutes, "min ");
} }
function BookComponent_p_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "again");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BookComponent_li_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Available for purchasing in your country!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BookComponent_li_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r7.book.saleInfo == null ? null : ctx_r7.book.saleInfo.listPrice == null ? null : ctx_r7.book.saleInfo.listPrice.amount, " ", ctx_r7.book.saleInfo == null ? null : ctx_r7.book.saleInfo.listPrice == null ? null : ctx_r7.book.saleInfo.listPrice.currencyCode, " ");
} }
class BookComponent {
    constructor(APIService, route) {
        this.APIService = APIService;
        this.route = route;
        this.averageWPM = 300;
        this.averageWordsPage = 300;
    }
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.doTest = false;
        this.ongoingTest = false;
        this.getLanguage('en');
        this.timeEstimated = {
            time: 0,
            hours: 0,
            minutes: 0,
        };
        this.timeTest = {
            time: 0,
            hours: 0,
            minutes: 0,
        };
        this.book = { id: "",
            volumeInfo: null,
            saleInfo: null };
        if (id) {
            this.getBook(id);
        }
    }
    getBook(idBook) {
        this.APIService.searchById(idBook).subscribe((book) => {
            var _a;
            this.book = book;
            this.timeEstimated.time = Number((_a = this.book.volumeInfo) === null || _a === void 0 ? void 0 : _a.pageCount) * this.averageWordsPage / this.averageWPM;
            this.timeEstimated = this.getHoursMinutes(this.timeEstimated);
        });
    }
    getHoursMinutes(time) {
        time.hours = Math.floor(time.time / 60);
        time.minutes = Math.floor(time.time % 60);
        return time;
    }
    counterWords(text) {
        if (text != null) {
            this.wordsPage = text.split(" ").length;
        }
    }
    test() {
        this.doTest = !this.doTest;
        this.ongoingTest = true;
    }
    startTimer() {
        this.startTime = new Date().getTime();
        this.ongoingTest = false;
    }
    stopTimer() {
        var _a;
        this.timeTest.time = (new Date().getTime() - this.startTime) / 1000;
        this.doTest = !this.doTest;
        this.wpm = (this.wordsPage * 60 / this.timeTest.time);
        this.timeTest.time = Number((_a = this.book.volumeInfo) === null || _a === void 0 ? void 0 : _a.pageCount) * this.averageWordsPage / this.wpm;
        this.timeTest = this.getHoursMinutes(this.timeTest);
    }
    getLanguage(lan) {
        if (lan != null) {
            for (let lang in _data_categories_filter_lists__WEBPACK_IMPORTED_MODULE_0__["LANGUAGE_LIST"]) {
                if (_data_categories_filter_lists__WEBPACK_IMPORTED_MODULE_0__["LANGUAGE_LIST"][lang].category == lan) {
                    return _data_categories_filter_lists__WEBPACK_IMPORTED_MODULE_0__["LANGUAGE_LIST"][lang].categoryName;
                }
            }
        }
        return "Unknown";
    }
}
BookComponent.ɵfac = function BookComponent_Factory(t) { return new (t || BookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
BookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BookComponent, selectors: [["app-book"]], decls: 55, vars: 18, consts: [[1, "container-fluid", "mx-auto"], [1, "row"], [1, "col", "mb-5"], [1, "card", "mx-auto", "transparent", 2, "width", "28rem"], [1, "card-img-top", "mx-auto", "d-block", "mt-2", "rounded", 3, "src"], [1, "card-body"], [1, "card-text", "text-center"], [4, "ngIf"], [1, "list-group", "list-group-flush", "text-center"], ["class", "list-group-item transparent", 4, "ngIf"], [1, "card", "mx-auto", 2, "width", "100%"], [1, "card-title", "text-center"], ["type", "button text-center", "class", "btn btn-primary", 3, "click", 4, "ngIf"], [3, "text", "maxLength"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "card", "mx-auto", 2, "width", "28rem"], [1, "list-group-item"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["class", "list-group-item", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "list-group-item", "transparent"], ["type", "button text-center", 1, "btn", "btn-primary", 3, "click"]], template: function BookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, BookComponent_div_8_Template, 4, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, BookComponent_li_10_Template, 4, 1, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Synopsis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, BookComponent_button_16_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-read-more", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, BookComponent_button_19_Template, 2, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Language:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Publisher:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Published date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Number of pages:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Estimated reading time:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Your estimated reading time:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, BookComponent_p_49_Template, 2, 2, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BookComponent_Template_button_click_50_listener() { ctx.test(); return ctx.counterWords(ctx.book.volumeInfo == null ? null : ctx.book.volumeInfo.description); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Test your reading speed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, BookComponent_p_52_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, BookComponent_li_53_Template, 3, 0, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, BookComponent_li_54_Template, 4, 2, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", (ctx.book.volumeInfo == null ? null : ctx.book.volumeInfo.imageLinks) != undefined ? ctx.book.volumeInfo.imageLinks == null ? null : ctx.book.volumeInfo.imageLinks.thumbnail : "assets/img/wormnotfound.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.book.volumeInfo == null ? null : ctx.book.volumeInfo.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.book.volumeInfo == null ? null : ctx.book.volumeInfo.authors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.book.volumeInfo == null ? null : ctx.book.volumeInfo.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.doTest && ctx.ongoingTest);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", (ctx.book.volumeInfo == null ? null : ctx.book.volumeInfo.description) != undefined ? ctx.book.volumeInfo.description : "[There is not any available synopsis to show.]")("maxLength", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.doTest && !ctx.ongoingTest);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getLanguage(ctx.book.volumeInfo == null ? null : ctx.book.volumeInfo.language), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.book.volumeInfo == null ? null : ctx.book.volumeInfo.publisher, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.book.volumeInfo == null ? null : ctx.book.volumeInfo.publishedDate, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.book.volumeInfo == null ? null : ctx.book.volumeInfo.pageCount, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx.timeEstimated.hours, "h ", ctx.timeEstimated.minutes, "min ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.timeTest.time > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.timeTest.time > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.book.saleInfo == null ? null : ctx.book.saleInfo.saleability) == "FOR_SALE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.book.saleInfo == null ? null : ctx.book.saleInfo.listPrice) != undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_readmore__WEBPACK_IMPORTED_MODULE_5__["ReadMoreComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".portada[_ngcontent-%COMP%], .card[_ngcontent-%COMP%], .lista[_ngcontent-%COMP%]{\r\n  margin-top: 20px;\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n\r\n.transparent[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border-color: transparent;\r\n}\r\n\r\n.card-img-top[_ngcontent-%COMP%]{\r\n  width: 35%;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n  width: 300px;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]{\r\n  color: white;\r\n  background-color: #740e00;\r\n  border-color: #740e00;\r\n  display: block;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  margin-top: 20px;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover{\r\n  background-color: rgb(121, 121, 121);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDIiwiZmlsZSI6ImJvb2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucG9ydGFkYSwgLmNhcmQsIC5saXN0YXtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZC10aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50cmFuc3BhcmVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmNhcmQtaW1nLXRvcHtcclxuICB3aWR0aDogMzUlO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uYnRue1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzQwZTAwO1xyXG4gIGJvcmRlci1jb2xvcjogIzc0MGUwMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmJ0bjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIxLCAxMjEsIDEyMSk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _book_carousel_book_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./book-carousel/book-carousel.component */ "4AU3");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ng_readmore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-readmore */ "GEs+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./book/book.component */ "UNjN");
/* harmony import */ var _searched_searched_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./searched/searched.component */ "mfg+");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ng_readmore__WEBPACK_IMPORTED_MODULE_9__["ReadMoreModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _book_book_component__WEBPACK_IMPORTED_MODULE_12__["BookComponent"], _searched_searched_component__WEBPACK_IMPORTED_MODULE_13__["SearchedComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _book_carousel_book_carousel_component__WEBPACK_IMPORTED_MODULE_7__["BookCarouselComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        ng_readmore__WEBPACK_IMPORTED_MODULE_9__["ReadMoreModule"]] }); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 26, vars: 0, consts: [[1, "navbar", "navbar-expand-lg"], ["src", "../assets/img/wormreading.png", "title", "Designed by pch.vector / freepik", "width", "5%", "height", "5%"], ["routerLink", "/home", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], ["routerLink", "/home", "routerLinkActive", "active", 1, "nav-link"], [1, "sr-only"], ["routerLink", "/search", "routerLinkActive", "active", 1, "nav-link"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "dropdown"], ["id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["href", "https://www.linkedin.com/in/chachir/", 1, "dropdown-item"], [1, "dropdown-divider"], ["href", "https://www.linkedin.com/in/alejandro-leiva-palomo-5a6a62185/", 1, "dropdown-item"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "BookWorm Search Engine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Advanced search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Contact us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Nadia Carrera Chahir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Alejandro Leiva Palomo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".navbar[_ngcontent-%COMP%], .dropdown-menu[_ngcontent-%COMP%] {\r\n  background-color: #740e00;\r\n}\r\n\r\n.active[_ngcontent-%COMP%] {\r\n  color: white !important;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%], .navbar-brand[_ngcontent-%COMP%] {\r\n  color: rgba(245, 245, 245, 0.493);\r\n  font-size: 20px;\r\n  background-color: rgb(116, 14, 0);\r\n\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%]:hover {\r\n  color: white;\r\n}\r\n\r\n.navbar-toggler[_ngcontent-%COMP%] {\r\n  background-color: rgba(245, 245, 245, 0.664);\r\n}\r\n\r\n.navbar-toggler[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%] {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(116, 14, 0)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\");\r\n }\r\n\r\n.navbar-toggler[_ngcontent-%COMP%]:hover   .navbar-toggler-icon[_ngcontent-%COMP%] {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.85)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\");\r\n }\r\n\r\n.navbar-nav[_ngcontent-%COMP%] {\r\n   margin-right: 70px;\r\n }\r\n\r\n.dropdown-item[_ngcontent-%COMP%] {\r\n  color: rgba(245, 245, 245, 0.493);\r\n}\r\n\r\n.dropdown-item[_ngcontent-%COMP%]:hover {\r\n  background-color: #740e00;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixpQ0FBaUM7O0FBRW5DOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0Usa1FBQWtRO0NBQ25ROztBQUVEO0VBQ0UsNFFBQTRRO0NBQzdROztBQUVEO0dBQ0csa0JBQWtCO0NBQ3BCOztBQUVEO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZCIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIsIC5kcm9wZG93bi1tZW51IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzQwZTAwO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdi1saW5rLCAubmF2YmFyLWJyYW5kIHtcclxuICBjb2xvcjogcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjQ5Myk7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTYsIDE0LCAwKTtcclxuXHJcbn1cclxuXHJcbi5uYXYtbGluazpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubmF2YmFyLXRvZ2dsZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAyNDUsIDI0NSwgMC42NjQpO1xyXG59XHJcblxyXG4ubmF2YmFyLXRvZ2dsZXIgIC5uYXZiYXItdG9nZ2xlci1pY29uIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB2aWV3Qm94PScwIDAgMzAgMzAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIHN0cm9rZT0ncmdiKDExNiwgMTQsIDApJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvJTNFJTNDL3N2ZyUzRVwiKTtcclxuIH1cclxuXHJcbi5uYXZiYXItdG9nZ2xlcjpob3ZlciAgLm5hdmJhci10b2dnbGVyLWljb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHZpZXdCb3g9JzAgMCAzMCAzMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggc3Ryb2tlPSdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvJTNFJTNDL3N2ZyUzRVwiKTtcclxuIH1cclxuXHJcbi5uYXZiYXItbmF2IHtcclxuICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xyXG4gfVxyXG5cclxuLmRyb3Bkb3duLWl0ZW0ge1xyXG4gIGNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuNDkzKTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NDBlMDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 8, vars: 0, consts: [[1, "footer"], ["href", "https://github.com/chachir"], ["href", "https://github.com/Alejandro-Leiva"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A9 Copyright 2021 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "chachir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " & ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Alejandro-Leiva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ". All rights reserved.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color: rgba(238, 224, 224, 0.664);\r\n    color: #740e00;\r\n    text-align: center;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: #740e00;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGVBQWU7SUFDZixPQUFPO0lBQ1AsU0FBUztJQUNULFdBQVc7SUFDWCw0Q0FBNEM7SUFDNUMsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOCwgMjI0LCAyMjQsIDAuNjY0KTtcclxuICAgIGNvbG9yOiAjNzQwZTAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiAjNzQwZTAwO1xyXG59Il19 */"] });


/***/ }),

/***/ "mfg+":
/*!************************************************!*\
  !*** ./src/app/searched/searched.component.ts ***!
  \************************************************/
/*! exports provided: SearchedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchedComponent", function() { return SearchedComponent; });
/* harmony import */ var _data_categories_filter_lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data-categories/filter-lists */ "GSF3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "H+bZ");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/book.service */ "+9od");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "oOf3");








function SearchedComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/book/", book_r13.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", (book_r13.volumeInfo == null ? null : book_r13.volumeInfo.imageLinks) != undefined ? book_r13.volumeInfo.imageLinks == null ? null : book_r13.volumeInfo.imageLinks.thumbnail : "assets/img/wormnotfound.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("title", book_r13.volumeInfo == null ? null : book_r13.volumeInfo.title);
} }
const _c0 = function (a1) { return { itemsPerPage: 6, currentPage: a1 }; };
function SearchedComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchedComponent_div_17_div_1_Template, 2, 3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r0.books.items, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r0.page)));
} }
function SearchedComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Waiting for a new search...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchedComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "pagination-controls", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function SearchedComponent_div_19_Template_pagination_controls_pageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.page = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("responsive", true);
} }
function SearchedComponent_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", language_r16.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](language_r16.categoryName);
} }
function SearchedComponent_option_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", type_r17.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](type_r17.categoryName);
} }
function SearchedComponent_option_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const availability_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", availability_r18.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", availability_r18.categoryName, " ");
} }
function SearchedComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("About ", ctx_r11.books.totalItems, " results found");
} }
class SearchedComponent {
    constructor(APIService, data) {
        this.APIService = APIService;
        this.data = data;
        this.AV = _data_categories_filter_lists__WEBPACK_IMPORTED_MODULE_0__["AVAILABILITY_LIST"];
        this.TY = _data_categories_filter_lists__WEBPACK_IMPORTED_MODULE_0__["TYPE_LIST"];
        this.LA = _data_categories_filter_lists__WEBPACK_IMPORTED_MODULE_0__["LANGUAGE_LIST"];
        this.url = "";
        this.selectedType = "Type";
        this.selectedLanguage = "Language";
        this.selectedAvailability = "Availability";
    }
    ngOnInit() {
        this.data.currentKeyword.subscribe(q => this.q = q);
        if (this.q) {
            this.APIService.search(this.q + "&maxResults=40").subscribe((books) => { this.books = books; });
        }
        this.books = {
            totalItems: 0,
            items: null,
        };
        this.bookSearch = {
            title: "",
            author: "",
            publisher: "",
            subject: "",
            isbn: "",
            selectedLanguage: "",
            selectedType: "",
            selectedAvailability: "",
            order: "",
        };
    }
    search() {
        if (this.searchQuery()) {
            this.searchFilter();
            this.searchOrder();
        }
        else if (this.q) {
            this.url = this.q;
            this.searchOrder();
        }
    }
    searchQuery() {
        var _a, _b, _c, _d, _e;
        this.url = (((_a = this.bookSearch.title) === null || _a === void 0 ? void 0 : _a.trim().length) > 0 ? "+intitle:" : "") + this.bookSearch.title
            + (((_b = this.bookSearch.author) === null || _b === void 0 ? void 0 : _b.trim().length) > 0 ? "+inauthor:" : "") + this.bookSearch.author
            + (((_c = this.bookSearch.publisher) === null || _c === void 0 ? void 0 : _c.trim().length) > 0 ? "+inpublisher:" : "") + this.bookSearch.publisher
            + (((_d = this.bookSearch.subject) === null || _d === void 0 ? void 0 : _d.trim().length) > 0 ? "+subject:" : "") + this.bookSearch.subject
            + (((_e = this.bookSearch.isbn) === null || _e === void 0 ? void 0 : _e.trim().length) > 0 ? "+isbn:" : "") + this.bookSearch.isbn;
        return !!this.url;
    }
    searchFilter() {
        var _a, _b, _c;
        this.url += (((_a = this.bookSearch.selectedLanguage) === null || _a === void 0 ? void 0 : _a.trim().length) > 0 ? "&" : "") + this.bookSearch.selectedLanguage
            + (((_b = this.bookSearch.selectedType) === null || _b === void 0 ? void 0 : _b.trim().length) > 0 ? "&" : "") + this.bookSearch.selectedType
            + (((_c = this.bookSearch.selectedAvailability) === null || _c === void 0 ? void 0 : _c.trim().length) > 0 ? "&" : "") + this.bookSearch.selectedAvailability;
    }
    searchOrder() {
        var _a;
        this.url += (((_a = this.bookSearch.order) === null || _a === void 0 ? void 0 : _a.trim().length) > 0 ? "&" : "") + this.bookSearch.order;
        this.APIService.search((this.url.substring(0, 1) == '+' ? this.url.substring(1) : this.url) + "&maxResults=40").subscribe((books) => { this.books = books; });
    }
    searchByAuthor(author) {
        author = author.replace(/\s/gi, '+');
        this.bookSearch.author = author;
    }
    searchByTitle(title) {
        title = title.replace(/\s/gi, '+');
        this.bookSearch.title = title;
    }
    searchByPublisher(publisher) {
        publisher = publisher.replace(/\s/gi, '+');
        this.bookSearch.publisher = publisher;
    }
    searchBySubject(subject) {
        subject = subject.replace(/\s/gi, '+');
        this.bookSearch.subject = subject;
    }
    searchByISBN(isbn) {
        isbn = isbn.replace(/\s/gi, '+');
        this.bookSearch.isbn = isbn;
    }
    filterByLanguage(lang) {
        this.bookSearch.selectedLanguage = "langRestrict=" + lang;
    }
    filterType(type) {
        this.bookSearch.selectedType = "printType=" + type;
    }
    filterAvailability(availability) {
        this.bookSearch.selectedAvailability = "filter=" + availability;
    }
    orderBy(order) {
        this.bookSearch.order = "orderBy=" + order;
        this.search();
    }
}
SearchedComponent.ɵfac = function SearchedComponent_Factory(t) { return new (t || SearchedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"])); };
SearchedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchedComponent, selectors: [["app-searched"]], decls: 58, vars: 10, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-md-6", "col-lg-8", "col-xl-6", "mx-auto", "ordenar"], [1, "orderFilter"], [1, "row", "text-center"], [1, "col"], ["type", "radio", "name", "num-book", "value", "2", "checked", "", 1, "radioButton", 3, "input"], ["type", "radio", "name", "num-book", 1, "radioButton", 3, "input"], [1, "col", "book-catalog"], ["class", "row row-cols-3", 4, "ngIf"], [4, "ngIf"], ["class", "paginacion", 4, "ngIf"], [1, "col-sm-10", "col-md-6", "col-lg-4", "col-xl-4", "search"], [1, "col-12", "list-group"], ["type", "text", "placeholder", "Title", 1, "form-control", "input-search", 3, "keydown.enter", "input"], ["titleBox", ""], [1, "col-6", "list-group"], ["type", "text", "placeholder", "Author", 1, "form-control", "input-search", 3, "keydown.enter", "input"], ["authorBox", ""], ["type", "text", "placeholder", "ISBN", 1, "form-control", "input-search", 3, "keydown.enter", "input"], ["ISBNBox", ""], ["type", "text", "placeholder", "Publisher", 1, "form-control", "input-search", 3, "keydown.enter", "input"], ["publisherBox", ""], ["type", "text", "placeholder", "Subject", 1, "form-control", "input-search", 3, "keydown.enter", "input"], ["subjectBox", ""], [1, "col", "list-group", "select"], [1, "form-select", "input-search", 3, "ngModel", "ngModelChange", "change"], ["disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col", "button-search"], ["type", "button", 1, "btn", "btn-outline-success", 3, "click"], ["class", "col", 4, "ngIf"], [1, "row", "row-cols-3"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "rounded", "d-block", "img-fluid", 2, "width", "60%", 3, "routerLink", "src", "title"], ["href", "http://www.freepik.com", "target", "_blank"], ["src", "..\\assets\\img\\wormasks.png", "title", "Designed by pch.vector / freepik", 1, "worm", "img-fluid", 2, "width", "30%"], [1, "paginacion"], [3, "responsive", "pageChange"], [3, "value"], [1, "bold"], ["src", "..\\assets\\img\\wormidea.png", "title", "Designed by pch.vector / freepik", 1, "worm", "img-fluid"]], template: function SearchedComponent_Template(rf, ctx) { if (rf & 1) {
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Order by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Relevance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function SearchedComponent_Template_input_input_11_listener() { return ctx.orderBy("relevance"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function SearchedComponent_Template_input_input_15_listener() { return ctx.orderBy("newest"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SearchedComponent_div_17_Template, 3, 6, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SearchedComponent_div_18_Template, 5, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SearchedComponent_div_19_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Advanced search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function SearchedComponent_Template_input_keydown_enter_25_listener() { return ctx.search(); })("input", function SearchedComponent_Template_input_input_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26); return ctx.searchByTitle(_r3.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function SearchedComponent_Template_input_keydown_enter_29_listener() { return ctx.search(); })("input", function SearchedComponent_Template_input_input_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30); return ctx.searchByAuthor(_r4.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function SearchedComponent_Template_input_keydown_enter_31_listener() { return ctx.search(); })("input", function SearchedComponent_Template_input_input_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32); return ctx.searchByISBN(_r5.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function SearchedComponent_Template_input_keydown_enter_34_listener() { return ctx.search(); })("input", function SearchedComponent_Template_input_input_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](35); return ctx.searchByPublisher(_r6.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function SearchedComponent_Template_input_keydown_enter_36_listener() { return ctx.search(); })("input", function SearchedComponent_Template_input_input_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](37); return ctx.searchBySubject(_r7.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchedComponent_Template_select_ngModelChange_40_listener($event) { return ctx.selectedLanguage = $event; })("change", function SearchedComponent_Template_select_change_40_listener() { return ctx.filterByLanguage(ctx.selectedLanguage); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, SearchedComponent_option_43_Template, 2, 2, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchedComponent_Template_select_ngModelChange_45_listener($event) { return ctx.selectedType = $event; })("change", function SearchedComponent_Template_select_change_45_listener() { return ctx.filterType(ctx.selectedType); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, SearchedComponent_option_48_Template, 2, 2, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchedComponent_Template_select_ngModelChange_50_listener($event) { return ctx.selectedAvailability = $event; })("change", function SearchedComponent_Template_select_change_50_listener() { return ctx.filterAvailability(ctx.selectedAvailability); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Availability");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, SearchedComponent_option_53_Template, 2, 2, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchedComponent_Template_button_click_55_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, SearchedComponent_div_57_Template, 5, 1, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.books.totalItems > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.books.totalItems <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.books.totalItems > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedLanguage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.LA);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.TY);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedAvailability);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.AV);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.books.totalItems > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginatePipe"]], styles: [".container-fluid[_ngcontent-%COMP%]{\r\n  margin-top: 20px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.list-group[_ngcontent-%COMP%]{\r\n  margin-top: 20px;\r\n}\r\n\r\n.list-group-item[_ngcontent-%COMP%]{\r\n  background-color: #293335;\r\n  color: white;\r\n}\r\n\r\n.list-group-item[_ngcontent-%COMP%]:hover{\r\n background-color: rgb(121, 121, 121);\r\n}\r\n\r\n.list-group-item.active[_ngcontent-%COMP%]{\r\n  background-color: rgb(121, 121, 121);\r\n  border-color: rgb(121, 121, 121);\r\n}\r\n\r\n.rounded[_ngcontent-%COMP%]{\r\n  margin-bottom: 20px;\r\n  box-shadow: 2px 2px 10px #666;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]{\r\n  color: white;\r\n  background-color: #740e00;\r\n  border-color: #740e00;\r\n  display: block;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  margin-top: 20px;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover{\r\n  background-color: rgb(121, 121, 121);\r\n}\r\n\r\n.page-link[_ngcontent-%COMP%]{\r\n  color: white;\r\n  background-color: #293335;\r\n}\r\n\r\n.page-link[_ngcontent-%COMP%]:hover{\r\n  background-color: rgb(121, 121, 121);\r\n}\r\n\r\n.search[_ngcontent-%COMP%] {\r\n\r\n  border-radius: 25px;\r\n  padding: 2rem;\r\n  margin-right: 100px;\r\n  background-color: #b5b9bab4;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.orderFilter[_ngcontent-%COMP%]{\r\n  background-color: #740e00;\r\n  border-radius: 25px;\r\n  margin-bottom: 20;\r\n  color: white;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  padding: 1rem;\r\n}\r\n\r\n.radioButton[_ngcontent-%COMP%]{\r\n  margin-left: 10px;\r\n  margin-right: 25px;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]{\r\n  font-weight: 500;\r\n}\r\n\r\n.bold[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.worm[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 50%;\r\n  height: 65%;\r\n}\r\n\r\nh5[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.orderContainer[_ngcontent-%COMP%]{\r\n  height: 40%;\r\n}\r\n\r\n.button-search[_ngcontent-%COMP%]{\r\n  left: 20%;\r\n}\r\n\r\n.book-catalog[_ngcontent-%COMP%]{\r\n  margin-top: 20px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n.paginacion[_ngcontent-%COMP%]     .ngx-pagination  {\r\n  background-color: #740e00;\r\n  border-radius: 10px;\r\n  border: 2px solid;\r\n  color: white;\r\n}\r\n\r\n.paginacion[_ngcontent-%COMP%]     .ngx-pagination .current{\r\n  background-color: #2c2c2c;\r\n}\r\n\r\ninput[type='radio'][_ngcontent-%COMP%]:after {\r\n  width: 15px;\r\n  height: 15px;\r\n  border-radius: 15px;\r\n  top: -2px;\r\n  left: -1px;\r\n  position: relative;\r\n  background-color: #d1d3d1;\r\n  content: '';\r\n  display: inline-block;\r\n  visibility: visible;\r\n  border: 2px solid white;\r\n}\r\n\r\ninput[type='radio'][_ngcontent-%COMP%]:checked:after {\r\n  width: 15px;\r\n  height: 15px;\r\n  border-radius: 15px;\r\n  top: -2px;\r\n  left: -1px;\r\n  position: relative;\r\n  background-color: black;\r\n  content: '';\r\n  display: inline-block;\r\n  visibility: visible;\r\n  border: 2px solid white;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n\t.ordenar[_ngcontent-%COMP%] {\r\n\t\torder: 2;\r\n\t}\r\n\t.search[_ngcontent-%COMP%] {\r\n\t\torder: 1;\r\n    margin-bottom: 30px;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaGVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtDQUNDLG9DQUFvQztBQUNyQzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBOztFQUVFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFHQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7Q0FDQztFQUNDLFFBQVE7Q0FDVDtDQUNBO0VBQ0MsUUFBUTtJQUNOLG1CQUFtQjtDQUN0QjtBQUNEIiwiZmlsZSI6InNlYXJjaGVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkzMzM1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbTpob3ZlcntcclxuIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjEsIDEyMSwgMTIxKTtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMSwgMTIxLCAxMjEpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDEyMSwgMTIxLCAxMjEpO1xyXG59XHJcblxyXG4ucm91bmRlZHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAjNjY2O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmJ0bntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc0MGUwMDtcclxuICBib3JkZXItY29sb3I6ICM3NDBlMDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5idG46aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMSwgMTIxLCAxMjEpO1xyXG59XHJcblxyXG4ucGFnZS1saW5re1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkzMzM1O1xyXG59XHJcblxyXG4ucGFnZS1saW5rOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjEsIDEyMSwgMTIxKTtcclxufVxyXG5cclxuLnNlYXJjaCB7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNWI5YmFiNDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5vcmRlckZpbHRlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzQwZTAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4ucmFkaW9CdXR0b257XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG5sYWJlbHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uYm9sZCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ud29ybXtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDY1JTtcclxufVxyXG5cclxuaDV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5vcmRlckNvbnRhaW5lcntcclxuICBoZWlnaHQ6IDQwJTtcclxufVxyXG5cclxuXHJcbi5idXR0b24tc2VhcmNoe1xyXG4gIGxlZnQ6IDIwJTtcclxufVxyXG5cclxuLmJvb2stY2F0YWxvZ3tcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLnBhZ2luYWNpb24gOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NDBlMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wYWdpbmFjaW9uIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmMyYztcclxufVxyXG5cclxuaW5wdXRbdHlwZT0ncmFkaW8nXTphZnRlciB7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgdG9wOiAtMnB4O1xyXG4gIGxlZnQ6IC0xcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWQzZDE7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZDphZnRlciB7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgdG9wOiAtMnB4O1xyXG4gIGxlZnQ6IC0xcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblx0Lm9yZGVuYXIge1xyXG5cdFx0b3JkZXI6IDI7XHJcblx0fVxyXG5cdC5zZWFyY2gge1xyXG5cdFx0b3JkZXI6IDE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "rQPh":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 12, vars: 0, consts: [[1, "notfound", "m-0", "row", "justify-content-center", "align-items-center"], [1, "col-auto", "p-5", "text-center"], ["href", "http://www.freepik.com", "target", "_blank"], ["src", "../assets/img/wormsleeps.png", "title", "Designed by pch.vector / freepik", "width", "150", "height", "150"], ["type", "button", "routerLink", "/home", 1, "btn", "btn-light"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Oooops! Page Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sorry, we couldn't find that page!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Go back to the home page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".notfound[_ngcontent-%COMP%]{\r\n    background-color: #740e00;\r\n    padding: 12%;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoicGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3Rmb3VuZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NDBlMDA7XHJcbiAgICBwYWRkaW5nOiAxMiU7XHJcbn1cclxuXHJcbmgxLCBwIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book/book.component */ "UNjN");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _searched_searched_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searched/searched.component */ "mfg+");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'book/:id', component: _book_book_component__WEBPACK_IMPORTED_MODULE_1__["BookComponent"] },
    { path: 'search', component: _searched_searched_component__WEBPACK_IMPORTED_MODULE_3__["SearchedComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
const routingComponents = [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _book_book_component__WEBPACK_IMPORTED_MODULE_1__["BookComponent"], _searched_searched_component__WEBPACK_IMPORTED_MODULE_3__["SearchedComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"]];


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .then(success => console.log('Bootstrap success'))
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map