webpackJsonp([1,4],{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
        selector: 'ar-home',
        template: __webpack_require__(487),
        styles: [__webpack_require__(457)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
        selector: 'ar-landing',
        template: __webpack_require__(488),
        styles: [__webpack_require__(458)]
    }),
    __metadata("design:paramtypes", [])
], LandingComponent);

//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ 368:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 368;


/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(398);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_landing_landing_component__ = __webpack_require__(142);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        children: [{
                path: '', component: __WEBPACK_IMPORTED_MODULE_3__pages_landing_landing_component__["a" /* LandingComponent */]
            }, {
                path: 'chat', component: __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__["a" /* HomeComponent */]
            }]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
        selector: 'ar-root',
        template: __webpack_require__(483),
        styles: [__webpack_require__(453)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store_devtools__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_chat_chat_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_chat_messages_chat_messages_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_write_message_write_message_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_chat_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_landing_landing_component__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngrx_store__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__effects_chat_effects__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__reducers_messages_reducer__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__reducers_messages_filter_reducer__ = __webpack_require__(396);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_chat_messages_chat_messages_component__["a" /* ChatMessagesComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_write_message_write_message_component__["a" /* WriteMessageComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_landing_landing_component__["a" /* LandingComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_14__ngrx_store__["a" /* StoreModule */].provideStore({
                messages: __WEBPACK_IMPORTED_MODULE_17__reducers_messages_reducer__["a" /* messages */],
                messagesFilter: __WEBPACK_IMPORTED_MODULE_18__reducers_messages_filter_reducer__["a" /* messagesFilter */]
            }),
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrumentOnlyWithExtension({
                maxAge: 5
            }),
            __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_16__effects_chat_effects__["a" /* ChatEffects */])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__providers_chat_service__["a" /* ChatService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMessagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatMessagesComponent = (function () {
    function ChatMessagesComponent(store) {
        this.store = store;
        this.myId = 2;
        this.selectedFilter = null;
        this.filterOptions = [{
                type: 'SHOW_ALL',
                text: 'Show All'
            }, {
                type: 'SHOW_MINE',
                text: 'Show Mine',
                payload: this.myId
            }];
    }
    ChatMessagesComponent.prototype.ngOnInit = function () {
        this.applyFilter(this.filterOptions[0]); // apply SHOW_ALL filter initially
        this.fetchMessages(); // fetch the messages from store
        this.scrollToBottom(); // scroll to bottom on component init
    };
    /**
     * @author Ahsan Ayaz
     * The following function fetches the messages from the Store
     */
    ChatMessagesComponent.prototype.fetchMessages = function () {
        var _this = this;
        this.messages$ = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].combineLatest(this.store.select('messages'), this.store.select('messagesFilter'), function (messages, filter) {
            var filteredMessages = messages.filter(filter);
            _this.messagesLength = filteredMessages.length;
            _this.scrollToBottom(100); // scroll to bottom after content changed
            return filteredMessages;
        }).distinctUntilChanged();
    };
    /**
     * @author Ahsan Ayaz
     * The following function is truggered when the user selects a filter from the dropdown
     * Sets the selectedFilter
     * @param filter
     */
    ChatMessagesComponent.prototype.applyFilter = function (filter) {
        this.store.dispatch(filter);
        this.selectedFilter = filter;
    };
    /**
     * @author Ahsan Ayaz
     * This function is triggered when the user clicks the cross button hovering on individual messages
     * Dispatches an action to Store and removes the individual message
     * @param message {Message}
     */
    ChatMessagesComponent.prototype.removeMessage = function (message) {
        this.store.dispatch({
            type: 'REMOVE_MESSAGE',
            payload: message.id
        });
    };
    /**
     * @author Ahsan Ayaz
     * Scrolls to bottom
     */
    ChatMessagesComponent.prototype.scrollToBottom = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = 0; }
        setTimeout(function () {
            try {
                if (_this.messagesList) {
                    _this.messagesList.nativeElement.scrollTop = _this.messagesList.nativeElement.scrollHeight;
                }
            }
            catch (err) {
                console.log(err);
            }
        }, delay);
    };
    return ChatMessagesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('messagesList'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
], ChatMessagesComponent.prototype, "messagesList", void 0);
ChatMessagesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
        selector: 'ar-chat-messages',
        template: __webpack_require__(484),
        styles: [__webpack_require__(454)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _b || Object])
], ChatMessagesComponent);

var _a, _b;
//# sourceMappingURL=chat-messages.component.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = (function () {
    function ChatComponent(store) {
        this.store = store;
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.loadMessages();
    };
    /**
     * @author Ahsan Ayaz
     * This function below dispatches the LOAD_MESSAGES action which fetches the message in the store
     * Currently the dummy messages
     */
    ChatComponent.prototype.loadMessages = function () {
        this.store.dispatch({
            type: 'LOAD_MESSAGES'
        });
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
        selector: 'ar-chat',
        template: __webpack_require__(485),
        styles: [__webpack_require__(455)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
], ChatComponent);

var _a;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WriteMessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WriteMessageComponent = (function () {
    function WriteMessageComponent(chatService, store) {
        this.chatService = chatService;
        this.store = store;
        this.onMessageSent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* EventEmitter */]();
        this.chatInput = '';
    }
    WriteMessageComponent.prototype.ngOnInit = function () {
    };
    /**
     * @author Ahsan Ayaz
     * Creates a new message and emits to parent component
     */
    WriteMessageComponent.prototype.sendMessage = function () {
        if (this.chatInput.trim().length) {
            var id = Math.ceil(Math.random() * 1000 + 1);
            var message = this.chatService.processMessages([{ id: id, text: this.chatInput }])[0];
            this.store.dispatch({
                type: 'ADD_MESSAGE',
                payload: message
            });
            this.chatInput = '';
        }
    };
    return WriteMessageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Output */])(),
    __metadata("design:type", Object)
], WriteMessageComponent.prototype, "onMessageSent", void 0);
WriteMessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Component */])({
        selector: 'ar-write-message',
        template: __webpack_require__(486),
        styles: [__webpack_require__(456)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers__["a" /* ChatService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _b || Object])
], WriteMessageComponent);

var _a, _b;
//# sourceMappingURL=write-message.component.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chat_service__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatEffects = (function () {
    function ChatEffects(chatService, actions$) {
        var _this = this;
        this.chatService = chatService;
        this.actions$ = actions$;
        this.getMessages$ = this.actions$
            .ofType('LOAD_MESSAGES')
            .map(function (action) { return JSON.stringify(action.payload); })
            .switchMap(function (payload) { return _this.chatService.getMessages()
            .map(function (res) { return ({ type: 'LOAD_MESSAGES_SUCCESS', payload: res }); })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ type: 'LOAD_MESSAGES_FAILURE', payload: [] }); }); });
    }
    return ChatEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], ChatEffects.prototype, "getMessages$", void 0);
ChatEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__providers_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_chat_service__["a" /* ChatService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */]) === "function" && _b || Object])
], ChatEffects);

var _a, _b;
//# sourceMappingURL=chat.effects.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat_service__ = __webpack_require__(77);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__chat_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SHOW_ALL */
/* unused harmony export SHOW_MINE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return messagesFilter; });
var SHOW_ALL = 'SHOW_ALL';
var SHOW_MINE = 'SHOW_MINE';
// because we have to persist the filter
var lastAction = {
    type: '',
    payload: null
};
var messagesFilter = function (state, action) {
    if (state === void 0) { state = function (message) { return message; }; }
    lastAction = (action.type === SHOW_ALL || action.type === SHOW_MINE) ? action : lastAction;
    switch (lastAction.type) {
        case SHOW_ALL:
            return function (message) { return message; };
        case SHOW_MINE:
            return function (message) { return message.userId === lastAction.payload; };
        default:
            return function (message) { return message; };
    }
};
//# sourceMappingURL=messages-filter.reducer.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ADD_MESSAGE */
/* unused harmony export REMOVE_MESSAGE */
/* unused harmony export REMOVE_ALL */
/* unused harmony export LOAD_MESSAGES */
/* unused harmony export LOAD_MESSAGES_SUCCESS */
/* unused harmony export LOAD_MESSAGES_ERROR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return messages; });
var ADD_MESSAGE = 'ADD_MESSAGE';
var REMOVE_MESSAGE = 'REMOVE_MESSAGE';
var REMOVE_ALL = 'RESET';
var LOAD_MESSAGES = 'LOAD_MESSAGES';
var LOAD_MESSAGES_SUCCESS = 'LOAD_MESSAGES_SUCCESS';
var LOAD_MESSAGES_ERROR = 'LOAD_MESSAGES_ERROR';
var messages = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case ADD_MESSAGE:
            return state.concat([
                action.payload
            ]);
        case REMOVE_MESSAGE:
            return state.filter(function (message) {
                return message.id !== action.payload;
            });
        case REMOVE_ALL:
            return state;
        case LOAD_MESSAGES_SUCCESS:
        case LOAD_MESSAGES_ERROR:
            return action.payload.slice();
        default:
            return state;
    }
};
//# sourceMappingURL=messages.reducer.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)(false);
// imports


// module
exports.push([module.i, ".messages-list {\n  max-height: 300px;\n  overflow-y: auto;\n  padding-bottom: 4px; }\n  .messages-list .message-item {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    position: relative;\n    border-bottom: 1px solid #acacac;\n    padding-right: 10px; }\n    .messages-list .message-item.mine {\n      background: #dcdcdc; }\n    .messages-list .message-item .from-user {\n      padding: 10px; }\n      .messages-list .message-item .from-user img {\n        width: 40px;\n        border-radius: 50%; }\n    .messages-list .message-item .message-text {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      padding: 10px; }\n    .messages-list .message-item .delete-btn {\n      height: 30px;\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center;\n      visibility: hidden; }\n    .messages-list .message-item:hover .delete-btn {\n      visibility: visible; }\n\n#noMessagesBlock {\n  padding: 40px;\n  font-size: 20px; }\n\n.filters-container {\n  margin-bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)(false);
// imports


// module
exports.push([module.i, ".write-box-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n  .write-box-container .write-box {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n    .write-box-container .write-box textarea {\n      width: 100%;\n      height: 100%;\n      resize: none; }\n  .write-box-container textarea {\n    padding: 10px; }\n  .write-box-container .send-button .btn {\n    height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)(false);
// imports


// module
exports.push([module.i, "#homePage {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%; }\n  #homePage .chat-container {\n    width: 400px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)(false);
// imports


// module
exports.push([module.i, ".landing-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%; }\n  .landing-container .jumbotron {\n    text-align: center; }\n  .landing-container .author {\n    margin-top: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 155,
	"./af.js": 155,
	"./ar": 162,
	"./ar-dz": 156,
	"./ar-dz.js": 156,
	"./ar-kw": 157,
	"./ar-kw.js": 157,
	"./ar-ly": 158,
	"./ar-ly.js": 158,
	"./ar-ma": 159,
	"./ar-ma.js": 159,
	"./ar-sa": 160,
	"./ar-sa.js": 160,
	"./ar-tn": 161,
	"./ar-tn.js": 161,
	"./ar.js": 162,
	"./az": 163,
	"./az.js": 163,
	"./be": 164,
	"./be.js": 164,
	"./bg": 165,
	"./bg.js": 165,
	"./bn": 166,
	"./bn.js": 166,
	"./bo": 167,
	"./bo.js": 167,
	"./br": 168,
	"./br.js": 168,
	"./bs": 169,
	"./bs.js": 169,
	"./ca": 170,
	"./ca.js": 170,
	"./cs": 171,
	"./cs.js": 171,
	"./cv": 172,
	"./cv.js": 172,
	"./cy": 173,
	"./cy.js": 173,
	"./da": 174,
	"./da.js": 174,
	"./de": 177,
	"./de-at": 175,
	"./de-at.js": 175,
	"./de-ch": 176,
	"./de-ch.js": 176,
	"./de.js": 177,
	"./dv": 178,
	"./dv.js": 178,
	"./el": 179,
	"./el.js": 179,
	"./en-au": 180,
	"./en-au.js": 180,
	"./en-ca": 181,
	"./en-ca.js": 181,
	"./en-gb": 182,
	"./en-gb.js": 182,
	"./en-ie": 183,
	"./en-ie.js": 183,
	"./en-nz": 184,
	"./en-nz.js": 184,
	"./eo": 185,
	"./eo.js": 185,
	"./es": 187,
	"./es-do": 186,
	"./es-do.js": 186,
	"./es.js": 187,
	"./et": 188,
	"./et.js": 188,
	"./eu": 189,
	"./eu.js": 189,
	"./fa": 190,
	"./fa.js": 190,
	"./fi": 191,
	"./fi.js": 191,
	"./fo": 192,
	"./fo.js": 192,
	"./fr": 195,
	"./fr-ca": 193,
	"./fr-ca.js": 193,
	"./fr-ch": 194,
	"./fr-ch.js": 194,
	"./fr.js": 195,
	"./fy": 196,
	"./fy.js": 196,
	"./gd": 197,
	"./gd.js": 197,
	"./gl": 198,
	"./gl.js": 198,
	"./gom-latn": 199,
	"./gom-latn.js": 199,
	"./he": 200,
	"./he.js": 200,
	"./hi": 201,
	"./hi.js": 201,
	"./hr": 202,
	"./hr.js": 202,
	"./hu": 203,
	"./hu.js": 203,
	"./hy-am": 204,
	"./hy-am.js": 204,
	"./id": 205,
	"./id.js": 205,
	"./is": 206,
	"./is.js": 206,
	"./it": 207,
	"./it.js": 207,
	"./ja": 208,
	"./ja.js": 208,
	"./jv": 209,
	"./jv.js": 209,
	"./ka": 210,
	"./ka.js": 210,
	"./kk": 211,
	"./kk.js": 211,
	"./km": 212,
	"./km.js": 212,
	"./kn": 213,
	"./kn.js": 213,
	"./ko": 214,
	"./ko.js": 214,
	"./ky": 215,
	"./ky.js": 215,
	"./lb": 216,
	"./lb.js": 216,
	"./lo": 217,
	"./lo.js": 217,
	"./lt": 218,
	"./lt.js": 218,
	"./lv": 219,
	"./lv.js": 219,
	"./me": 220,
	"./me.js": 220,
	"./mi": 221,
	"./mi.js": 221,
	"./mk": 222,
	"./mk.js": 222,
	"./ml": 223,
	"./ml.js": 223,
	"./mr": 224,
	"./mr.js": 224,
	"./ms": 226,
	"./ms-my": 225,
	"./ms-my.js": 225,
	"./ms.js": 226,
	"./my": 227,
	"./my.js": 227,
	"./nb": 228,
	"./nb.js": 228,
	"./ne": 229,
	"./ne.js": 229,
	"./nl": 231,
	"./nl-be": 230,
	"./nl-be.js": 230,
	"./nl.js": 231,
	"./nn": 232,
	"./nn.js": 232,
	"./pa-in": 233,
	"./pa-in.js": 233,
	"./pl": 234,
	"./pl.js": 234,
	"./pt": 236,
	"./pt-br": 235,
	"./pt-br.js": 235,
	"./pt.js": 236,
	"./ro": 237,
	"./ro.js": 237,
	"./ru": 238,
	"./ru.js": 238,
	"./sd": 239,
	"./sd.js": 239,
	"./se": 240,
	"./se.js": 240,
	"./si": 241,
	"./si.js": 241,
	"./sk": 242,
	"./sk.js": 242,
	"./sl": 243,
	"./sl.js": 243,
	"./sq": 244,
	"./sq.js": 244,
	"./sr": 246,
	"./sr-cyrl": 245,
	"./sr-cyrl.js": 245,
	"./sr.js": 246,
	"./ss": 247,
	"./ss.js": 247,
	"./sv": 248,
	"./sv.js": 248,
	"./sw": 249,
	"./sw.js": 249,
	"./ta": 250,
	"./ta.js": 250,
	"./te": 251,
	"./te.js": 251,
	"./tet": 252,
	"./tet.js": 252,
	"./th": 253,
	"./th.js": 253,
	"./tl-ph": 254,
	"./tl-ph.js": 254,
	"./tlh": 255,
	"./tlh.js": 255,
	"./tr": 256,
	"./tr.js": 256,
	"./tzl": 257,
	"./tzl.js": 257,
	"./tzm": 259,
	"./tzm-latn": 258,
	"./tzm-latn.js": 258,
	"./tzm.js": 259,
	"./uk": 260,
	"./uk.js": 260,
	"./ur": 261,
	"./ur.js": 261,
	"./uz": 263,
	"./uz-latn": 262,
	"./uz-latn.js": 262,
	"./uz.js": 263,
	"./vi": 264,
	"./vi.js": 264,
	"./x-pseudo": 265,
	"./x-pseudo.js": 265,
	"./yo": 266,
	"./yo.js": 266,
	"./zh-cn": 267,
	"./zh-cn.js": 267,
	"./zh-hk": 268,
	"./zh-hk.js": 268,
	"./zh-tw": 269,
	"./zh-tw.js": 269
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 460;


/***/ }),

/***/ 483:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 484:
/***/ (function(module, exports) {

module.exports = "<div class=\"filters-container text-center\">\n  <div class=\"btn-group\" dropdown>\n    <button dropdownToggle type=\"button\" class=\"btn btn-default pull-right  dropdown-toggle\">\n      Filter: {{selectedFilter.text}} <span class=\"caret\"></span>\n    </button>\n    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n      <li *ngFor=\"let filter of filterOptions\" (click)=\"applyFilter(filter);\"><a href=\"javascript:void(0)\">{{filter.text}}</a></li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"messages-list\" #messagesList [style.display]=\"messagesLength? 'block' : 'none'\">\n  <div *ngFor=\"let message of messages$ | async\" class=\"message-item\" [ngClass]=\"{mine: message.userId === myId}\">\n    <div class=\"from-user\">\n      <img [src]=\"message.userImage\">\n    </div>\n    <div class=\"message-text\">{{message.text}}</div>\n    <div class=\"delete-btn btn btn-sm btn-danger\" (click)=\"removeMessage(message)\">x</div>\n  </div>\n</div>\n<div [style.display]=\"!messagesLength ? 'block' : 'none'\">\n  <div class=\"text-center\" id=\"noMessagesBlock\">No messages to show</div>\n</div>\n\n"

/***/ }),

/***/ 485:
/***/ (function(module, exports) {

module.exports = "<h3 class=\"heading text-center\">Angular4 Rockstar Chat - NgRx</h3>\n<ar-chat-messages></ar-chat-messages>\n<ar-write-message></ar-write-message>\n"

/***/ }),

/***/ 486:
/***/ (function(module, exports) {

module.exports = "<div class=\"write-box-container\">\n  <div class=\"write-box\">\n    <textarea placeholder=\"Enter your message here. Press shift + enter for new line\" class=\"chat-input\" [(ngModel)]=\"chatInput\" (keyup.enter)=\"sendMessage()\"></textarea>\n  </div>\n  <div class=\"send-button\">\n    <button [disabled]=\"!chatInput || !chatInput.trim()\" class=\"btn btn-primary\" (click)=\"sendMessage()\">\n      <i class=\"glyphicon glyphicon-send\"></i>\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ 487:
/***/ (function(module, exports) {

module.exports = "<div id=\"homePage\">\n  <div class=\"chat-container\">\n    <button class=\"btn btn-icon btn-link\" [routerLink]=\"['/']\">\n      <i class=\"glyphicon glyphicon-chevron-left\"></i> Go Back\n    </button>\n    <ar-chat></ar-chat>\n  </div>\n</div>\n"

/***/ }),

/***/ 488:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container landing-container\">\n  <div class=\"jumbotron text-center\">\n    <p class=\"\">\n      Angular4 Rockstar Chat App with NgRx\n    </p>\n    <a class=\"nav-link\" [routerLink]=\"['/chat']\">Open Chat</a>\n    <div class=\"author\">\n      <small>Made by Ahsan Ayaz with <3</small>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(369);


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* unused harmony export messages */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var messages = [{
        id: 0,
        text: 'Hello there'
    }, {
        id: 1,
        text: 'Hi'
    }, {
        id: 2,
        text: 'How\'re you doing?'
    }, {
        id: 3,
        text: 'Perfectly fine. How are you ?'
    }];
var ChatService = (function () {
    function ChatService() {
    }
    /**
     * @author Ahsan Ayaz
     * This function currently sends a dummy list of messages (after processing the messages)
     * @return {Observable}
     */
    ChatService.prototype.getMessages = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of(this.processMessages(messages));
    };
    /**
     * @author Ahsan Ayaz
     * Returns an array of messages after processing it. Currently puts random userId and userImage url.
     * @param message {Array<Message>}
     * @return {Array<Message>}
     */
    ChatService.prototype.processMessages = function (messages) {
        return messages.map(function (message) {
            var id = Math.ceil(Math.random() * 3 + 1);
            message.userId = id;
            message.userImage = "assets/images/users/" + id + ".jpg";
            return message;
        });
    };
    return ChatService;
}());
ChatService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ChatService);

//# sourceMappingURL=chat.service.js.map

/***/ })

},[747]);
//# sourceMappingURL=main.bundle.js.map