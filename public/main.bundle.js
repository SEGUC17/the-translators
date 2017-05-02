webpackJsonp([1,4],{

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type_cache__ = __webpack_require__(533);
/* unused harmony export ActionTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartStore; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActionTypes = {
    SEARCH: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__type_cache__["a" /* type */])('[Cart] Search'),
    SEARCH_COMPLETE: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__type_cache__["a" /* type */])('[Cart] Search Complete'),
    LOAD: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__type_cache__["a" /* type */])('[Cart] Load'),
    SELECT: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__type_cache__["a" /* type */])('[Cart] Select'),
    ADD_TO_CART: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__type_cache__["a" /* type */])('[Cart] Add'),
    REMOVE_FROM_CART: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__type_cache__["a" /* type */])('[Cart] Remove'),
};
var CartStore = (function () {
    function CartStore(store) {
        this.store = store;
        this.state = this.getState();
    }
    CartStore.prototype.getState = function () {
        return this.store.select('cart');
    };
    CartStore.prototype.addToCart = function (product, quantity) {
        this.store.dispatch({
            type: ActionTypes.ADD_TO_CART,
            payload: {
                product: product,
                quantity: quantity
            }
        });
    };
    CartStore.prototype.removeFromCart = function (payload) {
        console.log('remove,', payload);
        this.store.dispatch({
            type: ActionTypes.REMOVE_FROM_CART,
            payload: payload
        });
    };
    CartStore = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]) === 'function' && _a) || Object])
    ], CartStore);
    return CartStore;
    var _a;
}());
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/cart.store.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_data__ = __webpack_require__(530);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AuthService } from '/home/norhanhamdy/Desktop/Hamdy/angular-src/src/app/services/auth.service.ts'; 
// The consumer of angular services doesn't know how the service gets the data. 
// This ProductService could get the data from anywhere. 
// It could get the data from a web service or local storage or from a mock data source.
// That's the beauty of removing data access from the component. 
// We can change our minds about the implementation as often as we like, for whatever reason, 
// without touching any of the components that need the data.
var ProductService = (function () {
    function ProductService() {
    }
    ProductService.prototype.getProducts = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__product_data__["a" /* PRODUCTS */]);
    };
    ProductService.prototype.getProduct = function (id) {
        return this.getProducts()
            .then(function (products) { return products.find(function (product) { return product.prodID === id; }); });
    };
    ProductService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ProductService);
    return ProductService;
}());
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/product.service.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.shoppingPage = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadBToken();
        headers.append('Authorization', this.bauthToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:8080/shoppingpage', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.viewcart = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadBToken();
        headers.append('Authorization', this.bauthToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:8080/viewcart', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addToCart = function (product) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadBToken();
        headers.append('Authorization', this.bauthToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/addToCart', product, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.removeFromCart = function (product) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadBToken();
        headers.append('Authorization', this.bauthToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/removeFromCart', product, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerCustomer = function (customer) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', customer, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.reviewandRate = function (reviewandrate) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('customerview', reviewandrate, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.uploadProducts = function (product) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('uploadproducts', product, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.subscribeBusiness = function (business) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/subscribe', business, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateCustomer = function (customer) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/customerauthenticate', customer, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getCustomerProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadCToken();
        headers.append('Authorization', this.cauthToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/customerprofile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateBusiness = function (business) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/businessauthenticate', business, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.bookingRequest = function (bookingrequest) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('bookingrequest', bookingrequest, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getBusinessProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadBToken();
        headers.append('Authorization', this.bauthToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/businessprofile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeCustomerData = function (token, customer) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('customer', JSON.stringify(customer));
        this.cauthToken = token;
        this.customer = customer;
    };
    AuthService.prototype.storeBusinessData = function (token, business) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('business', JSON.stringify(business));
        this.bauthToken = token;
        this.business = business;
    };
    AuthService.prototype.storeProductData = function (token, product) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('product', JSON.stringify(product));
        this.bauthToken = token;
        this.product = product;
    };
    AuthService.prototype.loadCToken = function () {
        var token = localStorage.getItem('id_token');
        this.cauthToken = token;
    };
    AuthService.prototype.loadBToken = function () {
        var token = localStorage.getItem('id_token');
        this.bauthToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        this.bauthToken = null;
        this.cauthToken = null;
        this.customer = null;
        this.business = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/auth.service.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingvalidationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookingvalidationService = (function () {
    function BookingvalidationService() {
    }
    BookingvalidationService.prototype.validateBooking = function (bookingrequest) {
        if (bookingrequest.CustomerUsername == undefined || bookingrequest.GymNameLocation == undefined ||
            bookingrequest.selectedClass == undefined || bookingrequest.selectedTime == undefined ||
            bookingrequest.selectedDate == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    BookingvalidationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], BookingvalidationService);
    return BookingvalidationService;
}());
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/bookingvalidation.service.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessvalidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BusinessvalidateService = (function () {
    function BusinessvalidateService() {
    }
    BusinessvalidateService.prototype.validateSubscriber = function (user) {
        if (user.GymName_location == undefined || user.Address == undefined || user.Email == undefined || user.BusinessUsername == undefined || user.Password == undefined || user.PhoneNumber == undefined || user.BankName == undefined || user.AccountNumber == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    BusinessvalidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    BusinessvalidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], BusinessvalidateService);
    return BusinessvalidateService;
}());
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/businessvalidate.service.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomervalidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomervalidateService = (function () {
    function CustomervalidateService() {
    }
    CustomervalidateService.prototype.validateRegister = function (user) {
        if (user.firstname == undefined || user.lastname == undefined || user.username == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    CustomervalidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    CustomervalidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], CustomervalidateService);
    return CustomervalidateService;
}());
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/customervalidate.service.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewandrateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReviewandrateService = (function () {
    function ReviewandrateService() {
    }
    ReviewandrateService.prototype.validateReviewandRate = function (user) {
        if (user.review == undefined || user.rate == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ReviewandrateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ReviewandrateService);
    return ReviewandrateService;
}());
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/reviewandrate.service.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadproductsvalidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UploadproductsvalidateService = (function () {
    function UploadproductsvalidateService() {
    }
    UploadproductsvalidateService.prototype.validateProducts = function (user) {
        if (user.businessUserName == undefined || user.prodname == undefined || user.prodID == undefined || user.price == undefined || user.Category == undefined || user.Quantity == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    UploadproductsvalidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], UploadproductsvalidateService);
    return UploadproductsvalidateService;
}());
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/uploadproductsvalidate.service.js.map

/***/ }),

/***/ 402:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 402;


/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(528);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/main.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(724),
            styles: [__webpack_require__(708)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/app.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_customerlogin_customerlogin_component__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_businesslogin_businesslogin_component__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_businessprofile_businessprofile_component__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_subscribe_subscribe_component__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_booking_component__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_bookingrequest_bookingrequest_component__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_uploadproducts_uploadproducts_component__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_reviewandrate_reviewandrate_component__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_visitor_component__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_customervalidate_service__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_bookingvalidation_service__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_businessvalidate_service__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_uploadproductsvalidate_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_reviewandrate_service__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_flash_messages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_ShoppingCart_Cart_cart_component__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_ShoppingCart_Product_product_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_ShoppingCart_ProductDetail_product_detail_component__ = __webpack_require__(532);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'businesslogin', component: __WEBPACK_IMPORTED_MODULE_8__components_businesslogin_businesslogin_component__["a" /* BusinessloginComponent */] },
    { path: 'customerlogin', component: __WEBPACK_IMPORTED_MODULE_7__components_customerlogin_customerlogin_component__["a" /* CustomerloginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'customerprofile', component: __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'businessprofile', component: __WEBPACK_IMPORTED_MODULE_13__components_businessprofile_businessprofile_component__["a" /* BusinessprofileComponent */] },
    { path: 'subscribe', component: __WEBPACK_IMPORTED_MODULE_14__components_subscribe_subscribe_component__["a" /* SubscribeComponent */] },
    { path: 'bookingrequest', component: __WEBPACK_IMPORTED_MODULE_16__components_bookingrequest_bookingrequest_component__["a" /* BookingrequestComponent */] },
    { path: 'MyBookings', component: __WEBPACK_IMPORTED_MODULE_15__components_booking_component__["a" /* BookingComponent */] },
    { path: 'uploadproducts', component: __WEBPACK_IMPORTED_MODULE_17__components_uploadproducts_uploadproducts_component__["a" /* UploadproductsComponent */] },
    { path: 'reviewandrate', component: __WEBPACK_IMPORTED_MODULE_18__components_reviewandrate_reviewandrate_component__["a" /* ReviewandrateComponent */] },
    { path: 'subscribe', component: __WEBPACK_IMPORTED_MODULE_14__components_subscribe_subscribe_component__["a" /* SubscribeComponent */] },
    { path: 'app-root', component: __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */] },
    { path: 'app-navbar', component: __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_27__components_ShoppingCart_Cart_cart_component__["a" /* CartComponent */] },
    { path: 'product', component: __WEBPACK_IMPORTED_MODULE_28__components_ShoppingCart_Product_product_component__["a" /* ProductComponent */] },
    { path: 'product-detail', component: __WEBPACK_IMPORTED_MODULE_29__components_ShoppingCart_ProductDetail_product_detail_component__["a" /* ProductDetailComponent */] },
    { path: 'visitorView', component: __WEBPACK_IMPORTED_MODULE_19__components_visitor_component__["a" /* VisitorComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_customerlogin_customerlogin_component__["a" /* CustomerloginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_businesslogin_businesslogin_component__["a" /* BusinessloginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_subscribe_subscribe_component__["a" /* SubscribeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_businessprofile_businessprofile_component__["a" /* BusinessprofileComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_bookingrequest_bookingrequest_component__["a" /* BookingrequestComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_uploadproducts_uploadproducts_component__["a" /* UploadproductsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_booking_component__["a" /* BookingComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_reviewandrate_reviewandrate_component__["a" /* ReviewandrateComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_ShoppingCart_Cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_ShoppingCart_Product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_ShoppingCart_ProductDetail_product_detail_component__["a" /* ProductDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_visitor_component__["a" /* VisitorComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_26_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_20__services_customervalidate_service__["a" /* CustomervalidateService */], __WEBPACK_IMPORTED_MODULE_22__services_businessvalidate_service__["a" /* BusinessvalidateService */], __WEBPACK_IMPORTED_MODULE_24__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_21__services_bookingvalidation_service__["a" /* BookingvalidationService */], __WEBPACK_IMPORTED_MODULE_23__services_uploadproductsvalidate_service__["a" /* UploadproductsvalidateService */], __WEBPACK_IMPORTED_MODULE_25__services_reviewandrate_service__["a" /* ReviewandrateService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/app.module.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Product_product_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_store__ = __webpack_require__(224);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = (function () {
    function CartComponent(productService, cartStore) {
        this.productService = productService;
        this.cartStore = cartStore;
        this.cart = [];
    }
    CartComponent.prototype.removeProduct = function (product) {
        this.cartStore.removeFromCart(product);
    };
    CartComponent.prototype.checkout = function () {
        alert('Sorry! Checkout will be coming soon!');
    };
    CartComponent.prototype.getTotalPrice = function () {
        var totalCost = [];
        var quantity = [];
        var intPrice;
        var intQuantity;
        this.cart.forEach(function (item, i) {
            intPrice = parseInt(item.price);
            intQuantity = parseInt(item.quantity);
            totalCost.push(intPrice);
            quantity.push(intQuantity);
        });
        this.totalPrice = totalCost.reduce(function (acc, item) {
            return acc += item;
        }, 0);
        this.totalQuantity = quantity.reduce(function (acc, item) {
            return acc += item;
        }, 0);
    };
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartSubscription = this.cartStore.getState().subscribe(function (res) {
            _this.cart = res.products;
            _this.getTotalPrice();
        });
    };
    CartComponent.prototype.ngOnDestroy = function () {
        this.cartSubscription.unsubscribe();
    };
    CartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cart',
            template: __webpack_require__(725),
            styles: [__webpack_require__(709)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Product_product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__Product_product_service__["a" /* ProductService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__cart_store__["a" /* CartStore */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__cart_store__["a" /* CartStore */]) === 'function' && _b) || Object])
    ], CartComponent);
    return CartComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/cart.component.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PRODUCTS; });
var PRODUCTS = [
    { businessUserName: this.businessUserName,
        prodname: this.prodname,
        prodID: this.prodID,
        price: this.price,
        image: this.image,
        ProductDescription: this.ProductDescription,
        Category: this.Category,
        Quantity: this.Quantity }
];
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/product-data.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Cart_cart_store__ = __webpack_require__(224);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductComponent = (function () {
    // Angular will know to supply an instance of the ProductService & Router when it creates a new ProductComponent
    // Because they are injected in the constructor
    function ProductComponent(productService, router, cartStore) {
        this.productService = productService;
        this.router = router;
        this.cartStore = cartStore;
    }
    // Dynamic route for detail info when a product is clicked
    ProductComponent.prototype.clickedProduct = function (product) {
        var link = ['/detail', product.prodID];
        this.router.navigate(link);
    };
    // When add to cart button is clicked
    ProductComponent.prototype.addToCart = function (product) {
        // this.productService.addToCart(product)
        console.log(this.Quantity);
        this.cartStore.addToCart(product, this.Quantity || 1);
    };
    ProductComponent.prototype.getProductData = function () {
        var _this = this;
        this.productService.getProducts().then(function (products) { return _this.products = products; });
    };
    ProductComponent.prototype.ngOnInit = function () {
        // Get initial data from productService to display on the page
        this.getProductData();
    };
    ProductComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'product',
            template: __webpack_require__(726),
            styles: [__webpack_require__(710)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Cart_cart_store__["a" /* CartStore */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__Cart_cart_store__["a" /* CartStore */]) === 'function' && _c) || Object])
    ], ProductComponent);
    return ProductComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/product.component.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Product_product_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Cart_cart_store__ = __webpack_require__(224);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductDetailComponent = (function () {
    function ProductDetailComponent(productService, route, location, cartStore) {
        this.productService = productService;
        this.route = route;
        this.location = location;
        this.cartStore = cartStore;
    }
    ProductDetailComponent.prototype.addToCart = function (product) {
        this.cartStore.addToCart(product, this.quantity || 1);
    };
    // When initialized, fetch for the product info based on the product id and set it as selectedProduct
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (param) {
            var id = parseInt(param['id']);
            _this.productService.getProduct(id)
                .then(function (product) { return _this.selectedProduct = product; });
        });
    };
    ProductDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProductDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'product-detail',
            template: __webpack_require__(727),
            styles: [__webpack_require__(711)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__Product_product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__Product_product_service__["a" /* ProductService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__Cart_cart_store__["a" /* CartStore */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__Cart_cart_store__["a" /* CartStore */]) === 'function' && _d) || Object])
    ], ProductDetailComponent);
    return ProductDetailComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/product-detail.component.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = type;
/**
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.0, this enables
 * powerful typechecking of our reducers.
 *
 * Since every action label passes through this function it
 * is a good place to ensure all of our action labels
 * are unique.
 */
var typeCache = {};
function type(label) {
    if (typeCache[label]) {
        throw new Error("Action type \"" + label + "\" is not unique\"");
    }
    typeCache[label] = true;
    return label;
}
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/type-cache.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_booking_service__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookingComponent = (function () {
    function BookingComponent(bookingService, router) {
        this.bookingService = bookingService;
        this.router = router;
    }
    BookingComponent.prototype.ngOnInit = function () {
        this.bookingService.getBookings().subscribe(function (booking) {
            //   this.booking= booking;
        });
    };
    BookingComponent.prototype.updateBookingStatus = function (booking) {
        var CBooking = {
            User_ID: booking.User_ID,
            CustomerUsername: booking.CustomerUsername,
            GymNameLocation: booking.GymNameLocation,
            selectedClass: booking.selectedClass,
            selectedTime: booking.selectedTime,
            selectedDate: booking.selectedDate,
            ConfirmationStatus: booking.ConfirmationStatus
        };
        this.bookingService.updateBookingStatus(CBooking).subscribe(function (data) {
            booking.ConfirmationStatus = CBooking.ConfirmationStatus;
        });
    };
    BookingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bookings',
            template: __webpack_require__(728)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_booking_service__["a" /* BookingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_booking_service__["a" /* BookingService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _b) || Object])
    ], BookingComponent);
    return BookingComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/booking.component.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bookingvalidation_service__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingrequestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookingrequestComponent = (function () {
    function BookingrequestComponent(bookingValidateService, flashMessage, authService, router) {
        this.bookingValidateService = bookingValidateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    BookingrequestComponent.prototype.bookingRequest = function () {
        var _this = this;
        var booking = {
            CustomerUsername: this.CustomerUsername,
            GymNameLocation: this.GymNameLocation,
            selectedClass: this.selectedClass,
            selectedTime: this.selectedTime,
            selectedDate: this.selectedDate,
        };
        if (!this.bookingValidateService.validateBooking(booking)) {
            this.flashMessage.show('please fill all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        else {
            this.authService.bookingRequest(booking).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show('You have successfully booked', { cssClass: 'alert-success', timeout: 3000 });
                    _this.router.navigate(['/dashboard']);
                }
                else {
                    _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                    _this.router.navigate(['/bookingrequest']);
                }
            });
        }
    };
    BookingrequestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bookingrequest',
            template: __webpack_require__(729),
            styles: [__webpack_require__(712)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_bookingvalidation_service__["a" /* BookingvalidationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_bookingvalidation_service__["a" /* BookingvalidationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === 'function' && _d) || Object])
    ], BookingrequestComponent);
    return BookingrequestComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/bookingrequest.component.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessloginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BusinessloginComponent = (function () {
    function BusinessloginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    BusinessloginComponent.prototype.ngOnInit = function () {
    };
    BusinessloginComponent.prototype.onBusinessLoginSubmit = function () {
        var _this = this;
        var business = {
            BusinessUsername: this.BusinessUsername,
            Password: this.Password
        };
        this.authService.authenticateBusiness(business).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeBusinessData(data.token, data.business);
                _this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['businesslogin']);
            }
        });
    };
    BusinessloginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-businesslogin',
            template: __webpack_require__(730),
            styles: [__webpack_require__(713)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], BusinessloginComponent);
    return BusinessloginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/businesslogin.component.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BusinessprofileComponent = (function () {
    function BusinessprofileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    BusinessprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getBusinessProfile().subscribe(function (profile) {
            _this.business = profile.business;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    BusinessprofileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-businessprofile',
            template: __webpack_require__(731),
            styles: [__webpack_require__(714)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _b) || Object])
    ], BusinessprofileComponent);
    return BusinessprofileComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/businessprofile.component.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerloginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerloginComponent = (function () {
    function CustomerloginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    CustomerloginComponent.prototype.ngOnInit = function () {
    };
    CustomerloginComponent.prototype.onCustomerLoginSubmit = function () {
        var _this = this;
        var customer = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateCustomer(customer).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeCustomerData(data.token, data.customer);
                _this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['customerlogin']);
            }
        });
    };
    CustomerloginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customerlogin',
            template: __webpack_require__(732),
            styles: [__webpack_require__(715)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], CustomerloginComponent);
    return CustomerloginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/customerlogin.component.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(733),
            styles: [__webpack_require__(716)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { GithubUser } from '../model/IGithubUser'; gym model
// import { GithubUser } from '../model/IGithubUser'; product model
//import { GithubUser } from '../model/IGithubUser'; service model
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(734),
            styles: [__webpack_require__(717)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/home.component.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogOutClick = function () {
        this.authService.logout();
        this.flashMessage.show("You are loggedout", { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(735),
            styles: [__webpack_require__(718)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getCustomerProfile().subscribe(function (profile) {
            _this.customer = profile.customer;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(736),
            styles: [__webpack_require__(719)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/profile.component.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_customervalidate_service__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(customerValidateService, flashMessage, authService, router) {
        this.customerValidateService = customerValidateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var customer = {
            firstname: this.firstname,
            lastname: this.lastname,
            age: this.age,
            username: this.username,
            email: this.email,
            password: this.password,
            mobilenumber: this.mobilenumber,
            gender: this.gender
        };
        if (!this.customerValidateService.validateRegister(customer)) {
            this.flashMessage.show('please fill all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // if(!this.customerValidateService.validateEmail(customer)){
        //   this.flashMessage.show('please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
        //   return false;
        // }
        //register user
        this.authService.registerCustomer(customer).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can login', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/customerlogin']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(737),
            styles: [__webpack_require__(720)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_customervalidate_service__["a" /* CustomervalidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_customervalidate_service__["a" /* CustomervalidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/register.component.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_reviewandrate_service__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewandrateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReviewandrateComponent = (function () {
    function ReviewandrateComponent(reviewandrateService, flashMessage, authService, router) {
        this.reviewandrateService = reviewandrateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    ReviewandrateComponent.prototype.ngOnInit = function () {
    };
    ReviewandrateComponent.prototype.onReviewandRateSubmit = function () {
        var _this = this;
        var randr = {
            review: this.review,
            rate: this.rate,
        };
        if (!this.reviewandrateService.validateReviewandRate(randr)) {
            this.flashMessage.show('please fill all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.authService.reviewandRate(randr).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Thanks for your review and rate', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/reviewandrate']);
            }
        });
    };
    ReviewandrateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reviewandrate',
            template: __webpack_require__(738),
            styles: [__webpack_require__(721)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_reviewandrate_service__["a" /* ReviewandrateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_reviewandrate_service__["a" /* ReviewandrateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === 'function' && _d) || Object])
    ], ReviewandrateComponent);
    return ReviewandrateComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/reviewandrate.component.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_businessvalidate_service__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SubscribeComponent = (function () {
    function SubscribeComponent(businessValidateService, flashMessage, authService, router) {
        this.businessValidateService = businessValidateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    SubscribeComponent.prototype.ngOnInit = function () {
    };
    SubscribeComponent.prototype.onSubscribeSubmit = function () {
        var _this = this;
        //recording the info entered by the user
        var business = {
            GymName_location: this.GymName_location,
            Address: this.Address,
            Email: this.Email,
            BusinessUsername: this.BusinessUsername,
            Password: this.Password,
            PhoneNumber: this.PhoneNumber,
            BankName: this.BankName,
            AccountNumber: this.AccountNumber,
            Description: this.Description
        };
        //check for the information validation
        if (!this.businessValidateService.validateSubscriber(business)) {
            this.flashMessage.show('please fill all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //subscribe business
        this.authService.subscribeBusiness(business).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can login', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/businesslogin']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/subscribe']);
            }
        });
    };
    SubscribeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-subscribe',
            template: __webpack_require__(739),
            styles: [__webpack_require__(722)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_businessvalidate_service__["a" /* BusinessvalidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_businessvalidate_service__["a" /* BusinessvalidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === 'function' && _d) || Object])
    ], SubscribeComponent);
    return SubscribeComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/subscribe.component.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_uploadproductsvalidate_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadproductsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UploadproductsComponent = (function () {
    function UploadproductsComponent(uploadproductsvalidateService, flashMessage, authService, router) {
        this.uploadproductsvalidateService = uploadproductsvalidateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    UploadproductsComponent.prototype.ngOnInit = function () {
    };
    UploadproductsComponent.prototype.onUploadproducts = function () {
        var _this = this;
        var product = {
            businessUserName: this.businessUserName,
            prodname: this.prodname,
            prodID: this.prodID,
            price: this.price,
            image: this.image,
            ProductDescription: this.ProductDescription,
            Category: this.Category,
            Quantity: this.Quantity
        };
        if (!this.uploadproductsvalidateService.validateProducts(product)) {
            this.flashMessage.show('please fill all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //upload products business
        this.authService.uploadProducts(product).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Your products are uploaded', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                console.log(data);
                _this.flashMessage.show('Something went wrong re-upload your product', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/uploadproducts']);
            }
        });
    };
    UploadproductsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-uploadproducts',
            template: __webpack_require__(740),
            styles: [__webpack_require__(723)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_uploadproductsvalidate_service__["a" /* UploadproductsvalidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_uploadproductsvalidate_service__["a" /* UploadproductsvalidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === 'function' && _d) || Object])
    ], UploadproductsComponent);
    return UploadproductsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/uploadproducts.component.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VisitorComponent = (function () {
    function VisitorComponent(http) {
        this.http = http;
    }
    ;
    VisitorComponent.prototype.getGymPage = function (BusinessUsername) {
        return this.http.get('visitorView' + BusinessUsername).map(function (res) { return res.json(); });
    };
    VisitorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'visitor',
            template: " \n                     <h1> Gym Page </h1>\n                     <img src=\"https://cdn.gearpatrol.com/wp-content/uploads/2016/06/gear-patrol-stop-doing-this-at-gym-lead-full.jpg\" alt=\"Gym's photo\" width=\"970\" height=\"650\" class=\"pull-left img-responsive postImg img-thumbnail margin10\">\n                    \n                     <article><p>\n                              Here we will show the gym data\n                         </p>\n                         <div *ngIf=\"business\">\n                <h2 class=\"page-header\"> {{business.GymName_location}}</h2>\n                        <ul class=\"list-group\">\n                <li class=\"list-group-item\"> Address:{{business.Address}}</li>\n                <li class=\"list-group-item\"> Email:{{business.Email}}</li> \n                <li class=\"list-group-item\"> PhoneNumber:{{business.PhoneNumber}</li> \n               <li class=\"list-group-item\"> Description:{{business.Description}}</li>\n                      </ul>\n                     </div>\n                     \n                     </article>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], VisitorComponent);
    return VisitorComponent;
    var _a;
}());
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/visitor.component.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookingService = (function () {
    function BookingService(http) {
        this.http = http;
        console.log('Booking Service Up and Running');
    }
    //get bookings for customers
    BookingService.prototype.getBookings = function () {
        return this.http.get('http://localhost:8080/MyBookings')
            .map(function (res) { return res.json(); });
    };
    BookingService.prototype.updateBookingStatus = function (booking) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json'); //check this line
        return this.http.put('http://localhost:8080/ChangeBookingStatus' + booking.User_ID, JSON.stringify(booking), { headers: headers }).map(function (res) { return res.json(); });
    };
    BookingService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], BookingService);
    return BookingService;
    var _a;
}());
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/booking.service.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/saraalawadim/Desktop/the-translators my code/angular-src/src/environment.js.map

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = ".image {\n    margin-left: 50px;\n}"

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 723:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class =\"container\">\n        <flash-messages></flash-messages>\n        <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"cart.length <= 0\">\n    <h3 class=\"text-center\">No items in the Cart!</h3>\n</div>\n<table class=\"table table-striped table-hover \">\n    <thead>\n        <tr>\n        <th>Quantity</th>\n        <th>Product Name</th>\n        <th>Product Price</th>\n        <th>Product Image</th>\n        </tr>\n    </thead>\n\n    <tbody>\n      <tr *ngFor=\"let product of cart; let i = index\">\n        <td><h4>{{product.quantity}}</h4></td>\n        <td><h4>{{product.name}}</h4></td>\n        <td><h4>{{product.price}}</h4></td>\n        <td><img src={{product.src}} width=\"100\" height=\"100\" /></td>\n        <td><button (click)=\"removeProduct(product)\" class=\"btn btn-xs btn-danger\">Remove Product</button></td>\n        <td><li>\n          <a routerLink=\"/cart\"><span></span></a>\n        </li></td>\n      </tr>\n\n      <tr class=\"warning\">\n        <td><h4></h4></td>\n        <td><h4>Total Items: {{totalQuantity}}</h4></td>\n        <td><h4>Total: ${{totalPrice}}</h4></td>\n        <td><button (click)=\"checkout()\" class=\"btn btn-md btn-success\">Checkout</button></td>\n      </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div *ngFor=\"let product of products\">\n        <!--<div class=\"col-xs-4\">\n            <md-card class=\"example-card\">\n                <md-card-header>\n                    <div md-card-avatar class=\"example-header-image\"></div>\n                    <md-card-title>\n                        <span class=\"badge\">{{product.id}}</span> <strong>{{product.name}}</strong>    \n                    </md-card-title>\n                </md-card-header>\n\n                <img width=\"220\" height=\"220\" src={{product.src}} />\n                <md-card-content>\n                <p>{{product.info}}</p>\n                </md-card-content>\n                <md-card-actions>\n                    <div style=\"display: flex\">\n                        <span class=\"padding-right-5\">Quantity: </span>\n                        <input type=\"number\" [(ngModel)]=\"quantity\">\n                    </div>\n                    <h1 class=\"badge\">${{product.price}}</h1>\n                    <button (click)=\"addToCart(product)\" class=\"btn btn-sm btn-primary\">Add to Cart</button>\n                    <button (click)=\"clickedProduct(product)\" class=\"btn btn-sm btn-success\">Details</button>\n                </md-card-actions>\n            </md-card>\n        </div>-->\n\n        <div class=\"col-xs-4\">\n            <div class=\"thumbnail product\">\n                <img width=\"250\" height=\"250\" src={{product.src}} />\n                <span class=\"badge\">{{product.prodID}}</span> <strong>{{product.prodname}}</strong>\n                <p>{{product.ProductDescription}}</p>\n                <h1 class=\"badge\">${{product.price}}</h1>\n                <button (click)=\"addToCart(product)\" class=\"btn btn-sm btn-primary\">Add to Cart</button>\n                <button (click)=\"clickedProduct(product)\" class=\"btn btn-sm btn-success\">Details</button>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"selectedProduct\">\n    \n    <div class=\"col-md-6 well\">\n            <span class=\"badge\">{{selectedProduct.id}}</span> <strong>{{selectedProduct.name}}</strong>\n            <p>{{selectedProduct.info}}</p>\n            <div style=\"display: flex\">\n                <span class=\"padding-right-5\">Quantity: </span>\n                <input type=\"number\" [(ngModel)]=\"quantity\">\n            </div>\n            <h1 class=\"badge\">${{selectedProduct.price}}</h1>\n            <button (click)=\"addToCart(selectedProduct)\" class=\"btn btn-md btn-primary\">Add to Cart</button>\n            <hr />\n            <button (click)=\"goBack()\" class=\"btn btn-danger\">Back</button>\n    </div>\n\n    <div class=\"col-md-4 thumbnail image\">\n        <img width=\"250\" height=\"250\" src={{selectedProduct.src}} />\n    </div>\n\n</div>"

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.5/css/bootstrap.css\">\n<form (submit)=\"getBookings()\">\n   \n<form class=\"container\" >\n      <title>bookings</title>\n\n\n<div class=\"booking\">\n    <div *ngFor=\"let booking of bookings\">\n        <div class=\"col-md-7\">\n            {{booking.UserID}}    \n        </div> \n        <div class=\"col-md-4\">\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"submit\">\n            <!--<input type=\"button\" (click)=\"updateBookingStatus(booking)\" value=\"Update\" class=\"btn btn-info\">    -->\n        </div>\n        <br><br>\n    </div>\n</div>\n</form>\n</form>"

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Booking</h2>\n<form (submit)=\"bookingRequest()\">\n  <div class=\"form-group\">\n\n    <label>Username: </label>\n    <input type=\"text\" [(ngModel)]=\"CustomerUsername\" name=\"CustomerUsername\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Gym Name-Location:</label>\n    <input type=\"text\" [(ngModel)]=\"GymNameLocation\" name=\"GymNameLocation\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Class: </label>\n    <input type=\"text\" [(ngModel)]=\"selectedClass\" name=\"selectedClass\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Date: </label>\n    <input type=\"date\" [(ngModel)]=\"selectedDate\" name=\"selectedDate\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Time: </label>\n    <input type=\"text\" [(ngModel)]=\"selectedTime\" name=\"selectedTime\" class=\"form-control\">\n  </div>\n\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Business Login </h2>\n<form (submit)=\"onBusinessLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username:</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"BusinessUsername\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password:</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"Password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>"

/***/ }),

/***/ 731:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"business\">\n  <h2 class=\"page-header\">{{business.GymName_location}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Address:{{businessAddress}}</li>\n     <li class=\"list-group-item\">BusinessUsername:{{business.BusinessUsername}}</li> \n     <li class=\"list-group-item\">Email:{{business.Email}}</li> \n     <li class=\"list-group-item\">PhoneNumber:{{business.PhoneNumber}</li> \n     <li class=\"list-group-item\">BankName:{{business.BankName}}</li> \n     <li class=\"list-group-item\">AccountNumber:{{business.AccountNumber}}</li> \n     <li class=\"list-group-item\">Description:{{business.Description}}</li>\n  </ul>\n</div>"

/***/ }),

/***/ 732:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Customer Login </h2>\n<form (submit)=\"onCustomerLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username:</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password:</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>"

/***/ }),

/***/ 733:
/***/ (function(module, exports) {

module.exports = "\n<h2 class=\"page-header\">Dashboard<h2>\n<p>Welcome to your dashboard</p>\n"

/***/ }),

/***/ 734:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1> GymPlatform </h1>\n  <p class=\"lead\"> Welcome to our Gyms page </p>\n  <div>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>\n    <a class=\"btn btn-default\" [routerLink]=\"['/customerlogin']\">Customer Login</a>\n  </div>\n</div>"

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">GymPlatform</a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/']\">Home</a></li>\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/customerprofile']\">Customer Profile</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/businessprofile']\">Business Profile</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/dashboard']\">dashboard</a></li>\n        \n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/customerlogin']\">Customer Login</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/businesslogin']\">Business Login</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/subscribe']\">Subscribe</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/booking']\">Booking</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/uploadproducts']\">Upload Products</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/reviewandrate']\">Review and Rate</a></li>\n        <li *ngIf=\"!authService.loggedIn()\"><a (click)=\"onLogOutClick()\" href=\"#\">Logout</a></li>\n      <li>\n          <a routerLink=\"/cart\"><span class=\"glyphicon glyphicon-shopping-cart\" aria-hidden=\"true\"></span></a>\n        </li>\n         <li>\n          <div *ngIf=\"totalPrice\">\n            <div class=\"thumbnail price\">\n              <strong>Total Items: </strong><span class=\"badge\">{{ totalQuantity }}</span> <strong>Total Price: ${{ totalPrice }}</strong>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div><!--/.nav-collapse -->\n  </div>\n</nav>"

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"customer\">\n  <h2 class=\"page-header\">{{customer.firstname}}{{customer.lastname}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Age:{{customer.age}}</li>\n     <li class=\"list-group-item\">Username:{{customer.username}}</li> \n     <li class=\"list-group-item\">Email:{{customer.email}}</li> \n     <li class=\"list-group-item\">Age:{{customer.age}}</li> \n     <li class=\"list-group-item\">MobileNumber:{{customer.mobilenumber}}</li> \n     <li class=\"list-group-item\">Gender:{{customer.gender}}</li>\n  </ul>\n</div>\n     <li class=\"list-group-item\">Username:{{customer.username}}</li>\n     <li class=\"list-group-item\">Email:{{customer.email}}</li>\n     <li class=\"list-group-item\">Age:{{customer.age}}</li>\n     <li class=\"list-group-item\">MobileNumber:{{customer.mobilenumber}}</li>\n     <li class=\"list-group-item\">Gender:{{customer.Gender}}</li>\n  \n"

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>FirstName:</label>\n    <input type=\"text\" [(ngModel)]=\"firstname\" name=\"firstname\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>LastName:</label>\n    <input type=\"text\" [(ngModel)]=\"lastname\" name=\"lastname\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Age:</label>\n    <input type=\"number\" [(ngModel)]=\"age\" name=\"age\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>UserName:</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email:</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password:</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>MobileNumber:</label>\n    <input type=\"number\" [(ngModel)]=\"mobilenumber\" name=\"mobilenumber\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Gender:</label>\n    <input type=\"text\" [(ngModel)]=\"gender\" name=\"gender\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>"

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onReviewandRateSubmit()\">\n  <div class=\"form-group\">\n    <label>Review:</label>\n    <input type=\"text\" [(ngModel)]=\"review\" name=\"review\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Rate:</label>\n    <input type=\"number\" [(ngModel)]=\"rate\" name=\"rate\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>"

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Subscribe</h2>\n<form (submit)=\"onSubscribeSubmit()\">\n  <div class=\"form-group\">\n    <label>GymName:</label>\n    <input type=\"text\" [(ngModel)]=\"GymName_location\" name=\"GymName_location\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Address:</label>\n    <input type=\"text\" [(ngModel)]=\"Address\" name=\"Address\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email:</label>\n    <input type=\"text\" [(ngModel)]=\"Email\" name=\"Email\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>BusinessUsername:</label>\n    <input type=\"text\" [(ngModel)]=\"BusinessUsername\" name=\"BusinessUsername\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password:</label>\n    <input type=\"password\" [(ngModel)]=\"Password\" name=\"Password\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>PhoneNumber:</label>\n    <input type=\"number\" [(ngModel)]=\"PhoneNumber\" name=\"PhoneNumber\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>BankName:</label>\n    <input type=\"text\" [(ngModel)]=\"BankName\" name=\"BankName\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>AccountNumber:</label>\n    <input type=\"number\" [(ngModel)]=\"AccountNumber\" name=\"AccountNumber\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Description:</label>\n    <input type=\"text\" [(ngModel)]=\"Description\" name=\"Description\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>"

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Add your products</h2>\n<form (submit)=\"onUploadproducts()\">\n  <div class=\"form-group\">\n    <label>businessUserName:</label>\n    <input type=\"text\" [(ngModel)]=\"businessUserName\" name=\"businessUserName\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Name:</label>\n    <input type=\"text\" [(ngModel)]=\"prodname\" name=\"prodname\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>ID:</label>\n    <input type=\"text\" [(ngModel)]=\"prodID\" name=\"prodID\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Price:</label>\n    <input type=\"number\" [(ngModel)]=\"price\" name=\"price\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Image:</label>\n    <input type=\"file\" [(ngModel)]=\"image\" name=\"image\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Description:</label>\n    <input type=\"text\" [(ngModel)]=\"ProductDescription\" name=\"ProductDescription\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Category:</label>\n    <input type=\"text\" [(ngModel)]=\"Category\" name=\"Category\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Quantity:</label>\n    <input type=\"number\" [(ngModel)]=\"Quantity\" name=\"Quantity\" class=\"form-control\">\n  </div>\n  \n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>"

/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(403);


/***/ })

},[773]);
//# sourceMappingURL=main.bundle.map