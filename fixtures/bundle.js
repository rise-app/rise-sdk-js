/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist.browser/ApiClass.js":
/*!**********************************!*\
  !*** ./dist.browser/ApiClass.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ApiClass = /** @class */ (function () {
    function ApiClass(rise, globals) {
        this.rise = rise;
        this.globals = globals;
        this.rise = rise;
        ApiClass.prototype.globals = globals;
        return this;
    }
    ApiClass.prototype.request = function (req, data, validated) {
        return this.rise.request(req, data, validated);
    };
    return ApiClass;
}());
exports.ApiClass = ApiClass;
// export interface ApiClass {
//   getGlobals()
// }
//
// ApiClass.prototype.getGlobals = function() {
//  return this.globals
// }
//# sourceMappingURL=ApiClass.js.map

/***/ }),

/***/ "./dist.browser/ApplicationBrowserClass.js":
/*!*************************************************!*\
  !*** ./dist.browser/ApplicationBrowserClass.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __importDefault(__webpack_require__(/*! events */ "events"));
/**
 * Applications on RiSE are anything that accesses the API
 */
var ApplicationBrowserClass = /** @class */ (function (_super) {
    __extends(ApplicationBrowserClass, _super);
    function ApplicationBrowserClass(rise, globals) {
        var _this = _super.call(this) || this;
        _this.rise = rise;
        _this.globals = globals;
        // Reference to the core class
        _this.rise = rise;
        _this.globals = globals;
        return _this;
    }
    return ApplicationBrowserClass;
}(events_1.default));
exports.ApplicationBrowserClass = ApplicationBrowserClass;
//# sourceMappingURL=ApplicationBrowserClass.js.map

/***/ }),

/***/ "./dist.browser/ApplicationClass.js":
/*!******************************************!*\
  !*** ./dist.browser/ApplicationClass.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Browsers do not have the event emitter class, so this is installed
var events_1 = __importDefault(__webpack_require__(/*! events */ "events"));
var primus_1 = __importDefault(__webpack_require__(/*! primus */ "primus"));
// , Socket
// , client
/**
 * Applications on RiSE are anything that accesses the API
 */
var ApplicationClass = /** @class */ (function (_super) {
    __extends(ApplicationClass, _super);
    function ApplicationClass(rise, globals) {
        var _this = _super.call(this) || this;
        _this.rise = rise;
        _this.globals = globals;
        _this._handlers = new Map();
        _this._patterns = new Set(['connected', 'disconnected', 'error']);
        // Reference to the core class
        _this.rise = rise;
        _this.globals = globals;
        // Create a Primus Socket
        _this.configureConnection();
        // Return the ApplicationClass
        return _this;
    }
    /**
     * Configure the Primus Socket
     */
    ApplicationClass.prototype.configureConnection = function (options) {
        if (options === void 0) { options = {}; }
        this.Socket = primus_1.default.createSocket(__assign({ transport: 'engine.io' }, options));
        return this.Socket;
    };
    /**
     * Create a socket connection to RiSE
     */
    ApplicationClass.prototype.connect = function () {
        var _this = this;
        this._client = new this.Socket(this.rise.requestUrl);
        this._client.on('outgoing::url', function (url) {
            url.query = 'token=' + (_this.rise.token || '');
        });
        this._client.on('data', function (msg) {
            if (msg && msg.subscribed) {
                _this._subscriptions = msg.subscribed;
            }
            else if (msg && msg.unsubscribed) {
                _this._subscriptions = msg.subscribed;
            }
            else if (msg && msg.event_type) {
                _this.handler(msg);
            }
        });
        this._client.on('open', function (msg) {
            _this.handler({ pattern: 'connected' });
        });
        this._client.on('close', function (msg) {
            _this.handler({ pattern: 'disconnected' });
        });
        this._client.on('error', function (msg) {
            _this.handler({ pattern: 'error', msg: msg });
        });
        return this.client;
    };
    ApplicationClass.prototype.disconnect = function () {
        return this.client.end();
    };
    ApplicationClass.prototype.subscribe = function (broadcast, subscriptions) {
        var _this = this;
        if (subscriptions === void 0) { subscriptions = []; }
        subscriptions.forEach(function (s) {
            _this._patterns.add(s);
        });
        this._client.write({
            channel: broadcast,
            subscribe: subscriptions
        });
    };
    ApplicationClass.prototype.unsubscribe = function (broadcast, subscriptions) {
        var _this = this;
        if (subscriptions === void 0) { subscriptions = []; }
        subscriptions.forEach(function (s) {
            _this._patterns.delete(s);
        });
        this._client.write({
            channel: broadcast,
            unsubscribe: subscriptions
        });
    };
    Object.defineProperty(ApplicationClass.prototype, "client", {
        /**
         * Get the Socket Client
         */
        get: function () {
            return this._client;
        },
        /**
         * Should not allow setting the client
         * @param val
         */
        set: function (val) {
            throw new Error('client cannot be set outside of the ApplicationClass');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationClass.prototype, "subscriptions", {
        /**
         * Alias to the Client event emitter
         */
        // get on() {
        //   return this._client.on
        // }
        /**
         * Get the Socket Client
         */
        get: function () {
            return this._subscriptions || [];
        },
        /**
         * Should not allow setting the client
         * @param val
         */
        set: function (val) {
            throw new Error('subscriptions cannot be set outside of the ApplicationClass');
        },
        enumerable: true,
        configurable: true
    });
    ApplicationClass.prototype.handler = function (event) {
        console.log('brk handler', event);
        // this.emit(event.pattern, event)
    };
    return ApplicationClass;
}(events_1.default));
exports.ApplicationClass = ApplicationClass;
//# sourceMappingURL=ApplicationClass.js.map

/***/ }),

/***/ "./dist.browser/Utils.js":
/*!*******************************!*\
  !*** ./dist.browser/Utils.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
exports.Utils = {
    joiPromise: function (data, schema) {
        return new Promise(function (resolve, reject) {
            joi_1.default.validate(data, schema, function (err, value) {
                if (err) {
                    return reject(err);
                }
                return resolve(value);
            });
        });
    },
    joiPromiseMap: function (list, schema) {
        return Promise.all(list.map(function (data) {
            return new Promise(function (resolve, reject) {
                joi_1.default.validate(data, schema, function (err, value) {
                    if (err) {
                        return reject(new TypeError(err));
                    }
                    return resolve(value);
                });
            });
        }));
    },
};
//# sourceMappingURL=Utils.js.map

/***/ }),

/***/ "./dist.browser/api/channel/index.js":
/*!*******************************************!*\
  !*** ./dist.browser/api/channel/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ApiClass_1 = __webpack_require__(/*! ../../ApiClass */ "./dist.browser/ApiClass.js");
var metadata_1 = __webpack_require__(/*! ../../metadata */ "./dist.browser/metadata.js");
var validators_1 = __webpack_require__(/*! ../../validators */ "./dist.browser/validators/index.js");
var Channel = /** @class */ (function (_super) {
    __extends(Channel, _super);
    function Channel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a Sub Channel
     * @param data
     * @param req
     * @param validated
     */
    Channel.prototype.create = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Update a Channel
     * @param data
     * @param req
     * @param validated
     */
    Channel.prototype.update = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get Channel By UUID
     * @param data
     * @param req
     * @param validated
     */
    Channel.prototype.get = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List Channels (Typically only allowed to super users)
     * @param data
     * @param req
     * @param validated
     */
    Channel.prototype.list = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get a Given Channel's Parent Channel
     * @param data
     * @param req
     * @param validated
     */
    Channel.prototype.getParent = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List a Given Channel's Descendant Channels
     * @param data
     * @param req
     * @param validated
     */
    Channel.prototype.listDescendants = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List a Given Channel's Children Channels
     * @param data
     * @param req
     * @param validated
     */
    Channel.prototype.listChildren = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List a Given Channel's Siblings Channels
     * @param data
     * @param req
     * @param validated
     */
    Channel.prototype.listSiblings = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List a Given Channel's Ancestors Channels
     * @param data
     * @param req
     * @param validated
     */
    Channel.prototype.listAncestors = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get a Given Channel's Nexus Address
     * @param data
     * @param req
     * @param validated
     */
    Channel.prototype.getAddressNexus = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Set a Given Channel's Nexus Address
     * @param data
     * @param req
     * @param validated
     */
    Channel.prototype.setAddressNexus = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get a Given Channel's Customer Account
     * @param data
     * @param req
     * @param validated
     */
    Channel.prototype.getPrimaryCustomer = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get a Given Channel's Customer Account
     * @param data
     * @param req
     * @param validated
     */
    Channel.prototype.setPrimaryCustomer = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get a Given Channel's Default Vendor
     * @param data
     * @param req
     * @param validated
     */
    Channel.prototype.getPrimaryVendor = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Set a Given Channel's Default Vendor
     * @param data
     * @param req
     * @param validated
     */
    Channel.prototype.setPrimaryVendor = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get a Given Channel's Default Payment Gateway
     * @param data
     * @param req
     * @param validated
     */
    Channel.prototype.getPrimaryGateway = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Set a Given Channel's Payment Gateway
     * @param data
     * @param req
     * @param validated
     */
    Channel.prototype.setPrimaryGateway = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Set a Given Channel's Default Fulfillment Service
     * @param data
     * @param req
     * @param validated
     */
    Channel.prototype.getPrimaryFulfillmentService = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Set a Given Channel's Fulfillment Service
     * @param data
     * @param req
     * @param validated
     */
    Channel.prototype.setPrimaryFulfillmentService = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List a Given Channel's Shipping Rules
     * @param data
     * @param req
     * @param validated
     */
    Channel.prototype.listShippingRules = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get a Given Channel's Shipping Rule
     * @param data
     * @param req
     * @param validated
     */
    Channel.prototype.getShippingRule = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List a Given Channel's Tax Rules
     * @param data
     * @param req
     * @param validated
     */
    Channel.prototype.listTaxRules = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get a Given Channel's Tax Rule
     * @param data
     * @param req
     * @param validated
     */
    Channel.prototype.getTaxRule = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    __decorate([
        metadata_1.Command({ method: 'POST', route: 'channels/:channel_uuid/channels', validator: validators_1.channel.create }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], Channel.prototype, "create", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid', validator: validators_1.channel.update }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], Channel.prototype, "update", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid', validator: validators_1.channel.get }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], Channel.prototype, "get", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels', validator: validators_1.channel.list }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], Channel.prototype, "list", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/parent', validator: validators_1.channel.get }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], Channel.prototype, "getParent", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/descendants', validator: validators_1.channel.list }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], Channel.prototype, "listDescendants", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/children', validator: validators_1.channel.list }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], Channel.prototype, "listChildren", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/siblings', validator: validators_1.channel.list }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], Channel.prototype, "listSiblings", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/ancestors', validator: validators_1.channel.list }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], Channel.prototype, "listAncestors", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/address_nexus', validator: validators_1.channel.get }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], Channel.prototype, "getAddressNexus", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/address_nexus', validator: validators_1.channel.update }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], Channel.prototype, "setAddressNexus", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/customer_primary', validator: validators_1.channel.get }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], Channel.prototype, "getPrimaryCustomer", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/customer_primary', validator: validators_1.channel.update }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], Channel.prototype, "setPrimaryCustomer", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/vendor_primary', validator: validators_1.channel.get }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], Channel.prototype, "getPrimaryVendor", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/vendor_primary', validator: validators_1.channel.update }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], Channel.prototype, "setPrimaryVendor", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/gateway_primary', validator: validators_1.channel.get }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], Channel.prototype, "getPrimaryGateway", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/gateway_primary', validator: validators_1.channel.update }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], Channel.prototype, "setPrimaryGateway", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/fulfillment_service_primary', validator: validators_1.channel.get }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], Channel.prototype, "getPrimaryFulfillmentService", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/fulfillment_service_primary', validator: validators_1.channel.update }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], Channel.prototype, "setPrimaryFulfillmentService", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/rules_shipping', validator: validators_1.channel.list }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], Channel.prototype, "listShippingRules", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/rules_shipping/:rule_uuid', validator: validators_1.channel.get }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], Channel.prototype, "getShippingRule", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/rules_taxes', validator: validators_1.channel.list }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], Channel.prototype, "listTaxRules", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/rules_taxes/:rule_uuid', validator: validators_1.channel.get }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], Channel.prototype, "getTaxRule", null);
    return Channel;
}(ApiClass_1.ApiClass));
exports.Channel = Channel;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/api/channelApplication/index.js":
/*!******************************************************!*\
  !*** ./dist.browser/api/channelApplication/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ApiClass_1 = __webpack_require__(/*! ../../ApiClass */ "./dist.browser/ApiClass.js");
var metadata_1 = __webpack_require__(/*! ../../metadata */ "./dist.browser/metadata.js");
var application_1 = __webpack_require__(/*! ../../validators/application */ "./dist.browser/validators/application/index.js");
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
var ChannelApplication = /** @class */ (function (_super) {
    __extends(ChannelApplication, _super);
    function ChannelApplication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Subscribe Application
     * @param data
     * @param req
     * @param validated
     */
    ChannelApplication.prototype.subscribe = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /***********************************
     * Application
     ***********************************/
    /**
     * Get a Application by ID
     * @param data
     * @param req
     * @param validated
     */
    ChannelApplication.prototype.get = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List applications
     * @param data
     * @param req
     * @param validated
     */
    ChannelApplication.prototype.list = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Create a Application
     * @param data
     * @param req
     * @param validated
     */
    ChannelApplication.prototype.create = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Update a Application
     * @param data
     * @param req
     * @param validated
     */
    ChannelApplication.prototype.update = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/applications/subscribe', validator: application_1.application[enums_1.ACTIONS.SUBSCRIBE_APPLICATION] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelApplication.prototype, "subscribe", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/applications/:application_uuid', validator: application_1.application[enums_1.ACTIONS.GET_APPLICATION] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelApplication.prototype, "get", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/applications', validator: application_1.application[enums_1.ACTIONS.LIST_APPLICATIONS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelApplication.prototype, "list", null);
    __decorate([
        metadata_1.Command({ method: 'POST', route: 'channels/:channel_uuid/applications', validator: application_1.application[enums_1.COMMANDS.CREATE_APPLICATION] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelApplication.prototype, "create", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/applications/:application_uuid', validator: application_1.application[enums_1.COMMANDS.UPDATE_APPLICATION] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelApplication.prototype, "update", null);
    return ChannelApplication;
}(ApiClass_1.ApiClass));
exports.ChannelApplication = ChannelApplication;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/api/channelAuth/index.js":
/*!***********************************************!*\
  !*** ./dist.browser/api/channelAuth/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ApiClass_1 = __webpack_require__(/*! ../../ApiClass */ "./dist.browser/ApiClass.js");
var metadata_1 = __webpack_require__(/*! ../../metadata */ "./dist.browser/metadata.js");
var validators_1 = __webpack_require__(/*! ../../validators */ "./dist.browser/validators/index.js");
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
var ChannelAuth = /** @class */ (function (_super) {
    __extends(ChannelAuth, _super);
    function ChannelAuth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Validate current token, and refresh if possible
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.validateToken = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List Current Session
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.session = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get Current Session's Cart
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.sessionCart = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Update Current Session's Cart
     * @param data
     * @param req
     * @param validated
     */
    // TODO VALIDATOR
    ChannelAuth.prototype.updateSessionCart = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List Current Session's Cart's Items
     * @param data
     * @param req
     * @param validated
     */
    // TODO VALIDATOR
    ChannelAuth.prototype.sessionCartItems = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Create a Current Session's Cart Item(s)
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.createSessionCartItems = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Create a Current Session's Cart Item(s)
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.getSessionCartItem = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Update a Current Session's Cart Item
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.updateSessionCartItem = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Update a Current Session's Cart Item
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.removeSessionCartItem = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get Current Session's Cart's Shipping Address
     * (If Customer in Session, defaults to Customer Shipping Address if not set)
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.sessionCartShipping = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Set Current Session's Cart's Shipping Address
     * (If Customer in Session, defaults to Customer Shipping Address if not set)
     * @param data
     * @param req
     * @param validated
     */
    // TODO VALIDATOR
    ChannelAuth.prototype.setSessionCartShipping = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get Current Session's Cart's Billing Address
     * (If Customer in Session, defaults to Customer Billing Address if not set)
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.sessionCartBilling = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Set Current Session's Cart's Billing Address
     * (If Customer in Session, defaults to Customer Billing Address if not set)
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.setSessionCartBilling = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get Current Session's Cart's Payment Details
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.sessionCartPayment = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Set Current Session's Cart's Payment Details
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.setSessionCartPayment = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Checkout Current Session's Cart
     * @param data
     * @param req
     * @param validated
     */
    // TODO VALIDATOR
    ChannelAuth.prototype.checkoutSessionCart = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get Current Session's Customer
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.sessionCustomer = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Update the Current Session's Customer
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.updateSessionCustomer = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get Current Session's Customer's Shipping Address
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.sessionCustomerShipping = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Update Current Session's Customer's Shipping Address
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.setSessionCustomerShipping = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get Current Session's Customer's Billing Address
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.sessionCustomerBilling = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Set Current Session's Customer's Billing Address
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.setSessionCustomerBilling = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List Current Session's Customer's Open Carts
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.sessionCustomerCarts = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List Current Session's Customer's Feeds
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.sessionCustomerFeeds = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List Current Session's Customer's Gateway Accounts
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.sessionCustomerGatewayAccounts = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List Current Session's Customer's Gateway Account Sources
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.sessionCustomerGatewaySources = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List Current Session's Customer's Previous Orders
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.sessionCustomerOrders = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List Current Session's Customer's Previous Orders
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.getSessionCustomerOrder = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List Current Session's Customer's Previous Orders
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.listSessionCustomerOrderItems = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List the other Users who have access to the Session Customer
     * @param data
     * @param req
     * @param validated
     */
    // TODO VALIDATOR
    ChannelAuth.prototype.sessionCustomerUsers = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get the Current Channel for the Session's User
     * @param data
     * @param req
     * @param validated
     */
    // TODO VALIDATOR
    ChannelAuth.prototype.sessionChannel = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List the other Channels this User has Roles for
     * @param data
     * @param req
     * @param validated
     */
    // TODO VALIDATOR
    ChannelAuth.prototype.sessionChannels = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get Current Session's User's Roles
     * @param data
     * @param req
     * @param validated
     */
    // TODO VALIDATOR
    ChannelAuth.prototype.sessionRoles = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get Current User in Session
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.sessionUser = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Register a User into Session
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.register = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Login Session
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.login = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Logout of Current Session
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.logout = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Send recovery directions to user
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.setRecovery = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Use recovery token to reset unauthorized user
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.recover = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Update Current User in Session
     * @param data
     * @param req
     * @param validated
     */
    ChannelAuth.prototype.updateSessionUser = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/token', validator: validators_1.auth[enums_1.ACTIONS.GET_SESSION_USER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "validateToken", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session', validator: validators_1.auth[enums_1.ACTIONS.GET_SESSION_USER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "session", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/cart', validator: validators_1.auth[enums_1.ACTIONS.GET_SESSION_CART] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "sessionCart", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/auth/session/cart', validator: validators_1.auth[enums_1.COMMANDS.UPDATE_SESSION_CART] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "updateSessionCart", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/cart/items', validator: validators_1.auth[enums_1.ACTIONS.LIST_SESSION_CART_ITEMS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "sessionCartItems", null);
    __decorate([
        metadata_1.Command({ method: 'POST', route: 'channels/:channel_uuid/auth/session/cart/items', validator: validators_1.auth[enums_1.COMMANDS.CREATE_SESSION_CART_ITEM] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "createSessionCartItems", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/cart/items/:item_uuid', validator: validators_1.auth[enums_1.ACTIONS.GET_SESSION_CART_ITEM] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "getSessionCartItem", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/auth/session/cart/items/:item_uuid', validator: validators_1.auth[enums_1.COMMANDS.UPDATE_SESSION_CART_ITEM] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "updateSessionCartItem", null);
    __decorate([
        metadata_1.Command({ method: 'DELETE', route: 'channels/:channel_uuid/auth/session/cart/items/:item_uuid', validator: validators_1.auth[enums_1.COMMANDS.REMOVE_SESSION_CART_ITEM] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "removeSessionCartItem", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/cart/address_shipping', validator: validators_1.auth[enums_1.ACTIONS.GET_SESSION_CART_SHIPPING] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "sessionCartShipping", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/auth/session/cart/address_shipping', validator: validators_1.auth[enums_1.COMMANDS.SET_SESSION_CART_SHIPPING] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "setSessionCartShipping", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/cart/address_billing', validator: validators_1.auth[enums_1.ACTIONS.GET_SESSION_CART_BILLING] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "sessionCartBilling", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/auth/session/cart/address_billing', validator: validators_1.auth[enums_1.COMMANDS.SET_SESSION_CART_BILLING] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "setSessionCartBilling", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/cart/payment_details', validator: validators_1.auth[enums_1.ACTIONS.GET_SESSION_CART_PAYMENT] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "sessionCartPayment", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/auth/session/cart/payment_details', validator: validators_1.auth[enums_1.COMMANDS.SET_SESSION_CART_PAYMENT] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "setSessionCartPayment", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/auth/session/cart/checkout', validator: validators_1.auth[enums_1.COMMANDS.CHECKOUT_SESSION_CART] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "checkoutSessionCart", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer', validator: validators_1.auth[enums_1.ACTIONS.GET_SESSION_CUSTOMER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "sessionCustomer", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/auth/session/customer', validator: validators_1.auth[enums_1.COMMANDS.UPDATE_SESSION_CUSTOMER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "updateSessionCustomer", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer/address_shipping', validator: validators_1.auth[enums_1.ACTIONS.GET_SESSION_CART_SHIPPING] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "sessionCustomerShipping", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/auth/session/customer/address_shipping', validator: validators_1.auth[enums_1.COMMANDS.SET_SESSION_CART_SHIPPING] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "setSessionCustomerShipping", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer/address_billing', validator: validators_1.auth[enums_1.ACTIONS.GET_SESSION_CART_SHIPPING] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "sessionCustomerBilling", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/auth/session/customer/address_billing', validator: validators_1.auth[enums_1.COMMANDS.SET_SESSION_CART_SHIPPING] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "setSessionCustomerBilling", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer/carts', validator: validators_1.auth[enums_1.ACTIONS.LIST_SESSION_CUSTOMER_CARTS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "sessionCustomerCarts", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer/feeds', validator: validators_1.auth[enums_1.ACTIONS.LIST_SESSION_CUSTOMER_FEEDS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "sessionCustomerFeeds", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer/accounts', validator: validators_1.auth[enums_1.ACTIONS.LIST_SESSION_CUSTOMER_ACCOUNTS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "sessionCustomerGatewayAccounts", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer/sources', validator: validators_1.auth[enums_1.ACTIONS.LIST_SESSION_CUSTOMER_SOURCES] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "sessionCustomerGatewaySources", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer/orders', validator: validators_1.auth[enums_1.ACTIONS.LIST_SESSION_CUSTOMER_ORDERS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "sessionCustomerOrders", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer/orders/:order_uuid', validator: validators_1.auth[enums_1.ACTIONS.GET_SESSION_CUSTOMER_ORDER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "getSessionCustomerOrder", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer/orders/:order_uuid/items', validator: validators_1.auth[enums_1.ACTIONS.LIST_SESSION_CUSTOMER_ORDER_ITEMS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "listSessionCustomerOrderItems", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer/users', validator: validators_1.auth[enums_1.ACTIONS.LIST_SESSION_CUSTOMER_USERS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "sessionCustomerUsers", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/channel', validator: validators_1.user[enums_1.ACTIONS.GET_USER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "sessionChannel", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/channels', validator: validators_1.user[enums_1.ACTIONS.GET_USER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "sessionChannels", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/roles', validator: validators_1.auth[enums_1.ACTIONS.LIST_SESSION_ROLES] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "sessionRoles", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/user', validator: validators_1.auth[enums_1.ACTIONS.GET_SESSION_USER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "sessionUser", null);
    __decorate([
        metadata_1.Command({ method: 'POST', route: 'channels/:channel_uuid/auth/local/register', validator: validators_1.auth[enums_1.COMMANDS.REGISTER_USER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "register", null);
    __decorate([
        metadata_1.Command({ method: 'POST', route: 'channels/:channel_uuid/auth/local', validator: validators_1.auth[enums_1.COMMANDS.LOGIN_USER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "login", null);
    __decorate([
        metadata_1.Command({ method: 'POST', route: 'channels/:channel_uuid/auth/logout', validator: validators_1.auth[enums_1.COMMANDS.LOGOUT_USER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "logout", null);
    __decorate([
        metadata_1.Command({ method: 'POST', route: 'channels/:channel_uuid/auth/recover', validator: validators_1.auth[enums_1.COMMANDS.SET_RECOVERY] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "setRecovery", null);
    __decorate([
        metadata_1.Command({ method: 'POST', route: 'channels/:channel_uuid/auth/local/recover', validator: validators_1.auth[enums_1.COMMANDS.RECOVER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "recover", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/auth/session/user', validator: validators_1.auth[enums_1.COMMANDS.UPDATE_SESSION_USER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelAuth.prototype, "updateSessionUser", null);
    return ChannelAuth;
}(ApiClass_1.ApiClass));
exports.ChannelAuth = ChannelAuth;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/api/channelBillingModel/index.js":
/*!*******************************************************!*\
  !*** ./dist.browser/api/channelBillingModel/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ApiClass_1 = __webpack_require__(/*! ../../ApiClass */ "./dist.browser/ApiClass.js");
var ChannelBillingModel = /** @class */ (function (_super) {
    __extends(ChannelBillingModel, _super);
    function ChannelBillingModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChannelBillingModel;
}(ApiClass_1.ApiClass));
exports.ChannelBillingModel = ChannelBillingModel;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/api/channelCart/index.js":
/*!***********************************************!*\
  !*** ./dist.browser/api/channelCart/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ApiClass_1 = __webpack_require__(/*! ../../ApiClass */ "./dist.browser/ApiClass.js");
var metadata_1 = __webpack_require__(/*! ../../metadata */ "./dist.browser/metadata.js");
var validators_1 = __webpack_require__(/*! ../../validators */ "./dist.browser/validators/index.js");
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
var ChannelCart = /** @class */ (function (_super) {
    __extends(ChannelCart, _super);
    function ChannelCart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /***********************************
     * Cart
     ***********************************/
    /**
     * Get a Cart by ID
     * @param data
     * @param req
     * @param validated
     */
    ChannelCart.prototype.get = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List carts
     * @param data
     * @param req
     * @param validated
     */
    ChannelCart.prototype.list = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Create a Cart
     * @param data
     * @param req
     * @param validated
     */
    ChannelCart.prototype.create = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Update a Cart
     * @param data
     * @param req
     * @param validated
     */
    ChannelCart.prototype.update = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Set a Cart's Billing Address
     * @param data
     * @param req
     * @param validated
     */
    ChannelCart.prototype.setAddressBilling = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get a Cart's Billing Address
     * @param data
     * @param req
     * @param validated
     */
    ChannelCart.prototype.getAddressBilling = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Set a Cart's Shipping Address
     * @param data
     * @param req
     * @param validated
     */
    ChannelCart.prototype.setAddressShipping = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get a Carts Shipping Address
     * @param data
     * @param req
     * @param validated
     */
    ChannelCart.prototype.getAddressShipping = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Set a Cart's Shipping Address
     * @param data
     * @param req
     * @param validated
     */
    ChannelCart.prototype.setCustomer = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get a Cart's Customer
     * @param data
     * @param req
     * @param validated
     */
    ChannelCart.prototype.getCustomer = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Set a Cart's Payment Details
     * @param data
     * @param req
     * @param validated
     */
    ChannelCart.prototype.setPaymentDetails = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get a Cart's Payment Details
     * @param data
     * @param req
     * @param validated
     */
    ChannelCart.prototype.getPaymentDetails = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Set a Cart's Fulfillment Details
     * @param data
     * @param req
     * @param validated
     */
    ChannelCart.prototype.setFulfillmentDetails = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get a Cart's Fulfillment Details
     * @param data
     * @param req
     * @param validated
     */
    ChannelCart.prototype.getFulfillmentDetails = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Checkout a Cart
     * @param data
     * @param req
     * @param validated
     */
    ChannelCart.prototype.checkout = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Close a Cart
     * @param data
     * @param req
     * @param validated
     */
    ChannelCart.prototype.close = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/carts/:cart_uuid', validator: validators_1.cart[enums_1.ACTIONS.GET_CART] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCart.prototype, "get", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/carts', validator: validators_1.cart[enums_1.ACTIONS.LIST_CARTS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCart.prototype, "list", null);
    __decorate([
        metadata_1.Command({ method: 'POST', route: 'channels/:channel_uuid/carts', validator: validators_1.cart[enums_1.COMMANDS.CREATE_CART] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCart.prototype, "create", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/carts/:cart_uuid', validator: validators_1.cart[enums_1.COMMANDS.UPDATE_CART] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCart.prototype, "update", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/carts/:cart_uuid/address_billing', validator: validators_1.cart[enums_1.COMMANDS.SET_CART_BILLING] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCart.prototype, "setAddressBilling", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/carts/:cart_uuid/address_billing', validator: validators_1.cart[enums_1.ACTIONS.GET_CART_BILLING] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCart.prototype, "getAddressBilling", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/carts/:cart_uuid/address_shipping', validator: validators_1.cart[enums_1.COMMANDS.SET_CART_SHIPPING] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCart.prototype, "setAddressShipping", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/carts/:cart_uuid/address_shipping', validator: validators_1.cart[enums_1.ACTIONS.GET_CART_SHIPPING] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCart.prototype, "getAddressShipping", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/carts/:cart_uuid/customer', validator: validators_1.cart[enums_1.COMMANDS.SET_CART_CUSTOMER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCart.prototype, "setCustomer", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/carts/:cart_uuid/customer', validator: validators_1.cart[enums_1.ACTIONS.GET_CART_CUSTOMER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCart.prototype, "getCustomer", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/carts/:cart_uuid/payment_details', validator: validators_1.cart[enums_1.COMMANDS.SET_CART_PAYMENT] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCart.prototype, "setPaymentDetails", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/carts/:cart_uuid/payment_details', validator: validators_1.cart[enums_1.ACTIONS.GET_CART_PAYMENT_DETAILS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCart.prototype, "getPaymentDetails", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/carts/:cart_uuid/payment_details', validator: validators_1.cart[enums_1.COMMANDS.SET_CART_FULFILLMENT] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCart.prototype, "setFulfillmentDetails", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/carts/:cart_uuid/fulfillment_details', validator: validators_1.cart[enums_1.ACTIONS.GET_CART_FULFILLMENT_DETAILS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCart.prototype, "getFulfillmentDetails", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/carts/:cart_uuid/checkout', validator: validators_1.cart[enums_1.COMMANDS.CHECKOUT_CART] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCart.prototype, "checkout", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/carts/:cart_uuid/close', validator: validators_1.cart[enums_1.COMMANDS.CLOSE_CART] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCart.prototype, "close", null);
    return ChannelCart;
}(ApiClass_1.ApiClass));
exports.ChannelCart = ChannelCart;
/***********************************
 * Cart Items
 ***********************************/
var ChannelCartItem = /** @class */ (function (_super) {
    __extends(ChannelCartItem, _super);
    function ChannelCartItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a Cart Item from Offer/Offer Variant
     * @param data
     * @param req
     * @param validated
     */
    ChannelCartItem.prototype.create = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Bulk Create Cart Items from Offers/Offer Variants
     * @param data
     * @param req
     * @param validated
     */
    ChannelCartItem.prototype.bulkCreate = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Update a Cart Item
     * @param data
     * @param req
     * @param validated
     */
    ChannelCartItem.prototype.update = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Remove a Cart Item
     * @param data
     * @param req
     * @param validated
     */
    ChannelCartItem.prototype.remove = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Set a Cart's Payment Details
     * @param data
     * @param req
     * @param validated
     */
    ChannelCartItem.prototype.setPaymentDetails = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get a Cart's Payment Details
     * @param data
     * @param req
     * @param validated
     */
    ChannelCartItem.prototype.getPaymentDetails = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Set a Cart's Fulfillment Details
     * @param data
     * @param req
     * @param validated
     */
    ChannelCartItem.prototype.setFulfillmentDetails = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get a Cart's Fulfillment Details
     * @param data
     * @param req
     * @param validated
     */
    ChannelCartItem.prototype.getFulfillmentDetails = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get a Cart Item
     * @param data
     * @param req
     * @param validated
     */
    ChannelCartItem.prototype.get = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List Cart Items
     * @param data
     * @param req
     * @param validated
     */
    ChannelCartItem.prototype.list = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    __decorate([
        metadata_1.Command({ method: 'POST', route: 'channels/:channel_uuid/carts/:cart_uuid/items', validator: validators_1.cart[enums_1.COMMANDS.CREATE_CART_ITEM] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCartItem.prototype, "create", null);
    __decorate([
        metadata_1.Command({ method: 'POST', route: 'channels/:channel_uuid/carts/:cart_uuid/items', validator: validators_1.cart[enums_1.COMMANDS.CREATE_CART_ITEMS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCartItem.prototype, "bulkCreate", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/carts/:cart_uuid/items/:item_uuid', validator: validators_1.cart[enums_1.COMMANDS.UPDATE_CART_ITEM] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCartItem.prototype, "update", null);
    __decorate([
        metadata_1.Command({ method: 'DELETE', route: 'channels/:channel_uuid/carts/:cart_uuid/items/:item_uuid', validator: validators_1.cart[enums_1.COMMANDS.REMOVE_CART_ITEM] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCartItem.prototype, "remove", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/carts/:cart_uuid/items/:item_uuid/payment_details', validator: validators_1.cart[enums_1.COMMANDS.SET_CART_ITEM_PAYMENT] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCartItem.prototype, "setPaymentDetails", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/carts/:cart_uuid/items/:item_uuid/payment_details', validator: validators_1.cart[enums_1.ACTIONS.GET_CART_ITEM_PAYMENT_DETAILS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCartItem.prototype, "getPaymentDetails", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/carts/:cart_uuid/items/:item_uuid/payment_details', validator: validators_1.cart[enums_1.COMMANDS.SET_CART_ITEM_FULFILLMENT] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCartItem.prototype, "setFulfillmentDetails", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/carts/:cart_uuid/items/:item_uuid/fulfillment_details', validator: validators_1.cart[enums_1.ACTIONS.GET_CART_ITEM_FULFILLMENT_DETAILS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCartItem.prototype, "getFulfillmentDetails", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/carts/:cart_uuid/items/:item_uuid', validator: validators_1.cart[enums_1.ACTIONS.GET_CART_ITEM] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCartItem.prototype, "get", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/carts/:cart_uuid/items', validator: validators_1.cart[enums_1.ACTIONS.LIST_CART_ITEMS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCartItem.prototype, "list", null);
    return ChannelCartItem;
}(ApiClass_1.ApiClass));
exports.ChannelCartItem = ChannelCartItem;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/api/channelCollection/index.js":
/*!*****************************************************!*\
  !*** ./dist.browser/api/channelCollection/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ApiClass_1 = __webpack_require__(/*! ../../ApiClass */ "./dist.browser/ApiClass.js");
var metadata_1 = __webpack_require__(/*! ../../metadata */ "./dist.browser/metadata.js");
var collection_1 = __webpack_require__(/*! ../../validators/collection */ "./dist.browser/validators/collection/index.js");
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
var ChannelCollection = /** @class */ (function (_super) {
    __extends(ChannelCollection, _super);
    function ChannelCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChannelCollection.prototype.create = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCollection.prototype.update = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get a Given Channel Collection
     * @param data
     * @param req
     * @param validated
     */
    ChannelCollection.prototype.get = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCollection.prototype.getByHandle = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCollection.prototype.list = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    __decorate([
        metadata_1.Command({ method: 'POST', route: 'channels/:channel_uuid/collections', validator: collection_1.collection[enums_1.COMMANDS.CREATE_COLLECTION] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCollection.prototype, "create", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/collections/:collection_uuid', validator: collection_1.collection[enums_1.COMMANDS.UPDATE_COLLECTION] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCollection.prototype, "update", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/collections/:collection_uuid', validator: collection_1.collection[enums_1.ACTIONS.GET_COLLECTION] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCollection.prototype, "get", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/collections/handle/:handle', validator: collection_1.collection[enums_1.ACTIONS.FIND_COLLECTION] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCollection.prototype, "getByHandle", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/collections', validator: collection_1.collection[enums_1.ACTIONS.LIST_COLLECTIONS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCollection.prototype, "list", null);
    return ChannelCollection;
}(ApiClass_1.ApiClass));
exports.ChannelCollection = ChannelCollection;
var ChannelCategory = /** @class */ (function (_super) {
    __extends(ChannelCategory, _super);
    function ChannelCategory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChannelCategory.prototype.create = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCategory.prototype.update = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCategory.prototype.get = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCategory.prototype.getByHandle = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCategory.prototype.list = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCategory.prototype.getProduct = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCategory.prototype.listProducts = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**********************************
     * PUBLIC ENDPOINTS
     **********************************/
    ChannelCategory.prototype.getPublic = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCategory.prototype.getPublicByHandle = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCategory.prototype.listPublic = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCategory.prototype.getPublicProduct = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCategory.prototype.listPublicProducts = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    __decorate([
        metadata_1.Command({ method: 'POST', route: 'channels/:channel_uuid/categories', validator: collection_1.collection[enums_1.COMMANDS.CREATE_COLLECTION] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCategory.prototype, "create", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/categories/:collection_uuid', validator: collection_1.collection[enums_1.COMMANDS.UPDATE_COLLECTION] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCategory.prototype, "update", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/categories/:collection_uuid', validator: collection_1.collection[enums_1.ACTIONS.GET_COLLECTION] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCategory.prototype, "get", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/categories/handle/:handle', validator: collection_1.collection[enums_1.ACTIONS.FIND_COLLECTION] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCategory.prototype, "getByHandle", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/categories', validator: collection_1.collection[enums_1.ACTIONS.LIST_COLLECTIONS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCategory.prototype, "list", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/:collection_uuid/products/:product_uuid', validator: collection_1.collection[enums_1.ACTIONS.GET_COLLECTION_PRODUCT] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCategory.prototype, "getProduct", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/:collection_uuid/products', validator: collection_1.collection[enums_1.ACTIONS.LIST_COLLECTION_PRODUCTS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCategory.prototype, "listProducts", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/categories/:collection_uuid', validator: collection_1.collection[enums_1.ACTIONS.GET_COLLECTION] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCategory.prototype, "getPublic", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/categories/handle/:handle', validator: collection_1.collection[enums_1.ACTIONS.FIND_COLLECTION] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCategory.prototype, "getPublicByHandle", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/categories', validator: collection_1.collection[enums_1.ACTIONS.LIST_COLLECTIONS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCategory.prototype, "listPublic", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/categories/:collection_uuid/products/:product_uuid', validator: collection_1.collection[enums_1.ACTIONS.GET_COLLECTION_PRODUCT] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCategory.prototype, "getPublicProduct", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/categories/:collection_uuid/products', validator: collection_1.collection[enums_1.ACTIONS.LIST_COLLECTION_PRODUCTS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCategory.prototype, "listPublicProducts", null);
    return ChannelCategory;
}(ApiClass_1.ApiClass));
exports.ChannelCategory = ChannelCategory;
/**
 * Channel Campaigns
 */
var ChannelCampaign = /** @class */ (function (_super) {
    __extends(ChannelCampaign, _super);
    function ChannelCampaign() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChannelCampaign.prototype.create = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCampaign.prototype.update = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCampaign.prototype.get = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCampaign.prototype.getByHandle = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCampaign.prototype.getParentByHandle = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCampaign.prototype.listAncestorsByHandle = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCampaign.prototype.listChildrenByHandle = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCampaign.prototype.listDescendantsByHandle = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCampaign.prototype.listSiblingsByHandle = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCampaign.prototype.list = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCampaign.prototype.getOffer = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCampaign.prototype.listOffers = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCampaign.prototype.listOffersByHandle = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCampaign.prototype.getCustomer = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCampaign.prototype.listCustomers = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**********************************
     * PUBLIC ENDPOINTS
     **********************************/
    /**
     * Get Public Campaign By UUID
     * @param data
     * @param req
     * @param validated
     */
    ChannelCampaign.prototype.getPublic = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get Public Campaign By Handle
     * @param data
     * @param req
     * @param validated
     */
    ChannelCampaign.prototype.getPublicByHandle = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCampaign.prototype.getPublicParentByHandle = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCampaign.prototype.listPublicAncestorsByHandle = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCampaign.prototype.listPublicChildrenByHandle = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCampaign.prototype.listPublicDescendantsByHandle = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCampaign.prototype.listPublicSiblingsByHandle = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List Public Campaigns
     * @param data
     * @param req
     * @param validated
     */
    ChannelCampaign.prototype.listPublic = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get Public Campaign Offer By UUID
     * @param data
     * @param req
     * @param validated
     */
    ChannelCampaign.prototype.getPublicOffer = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List Public Campaign's Public Offers
     * @param data
     * @param req
     * @param validated
     */
    ChannelCampaign.prototype.listPublicOffers = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List Public Campaign's Public Offers By Campaign Handle
     * @param data
     * @param req
     * @param validated
     */
    ChannelCampaign.prototype.listPublicOffersByHandle = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    __decorate([
        metadata_1.Command({ method: 'POST', route: 'channels/:channel_uuid/campaigns', validator: collection_1.collection[enums_1.COMMANDS.CREATE_COLLECTION] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCampaign.prototype, "create", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/campaigns/:collection_uuid', validator: collection_1.collection[enums_1.COMMANDS.UPDATE_COLLECTION] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCampaign.prototype, "update", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/:collection_uuid', validator: collection_1.collection[enums_1.ACTIONS.GET_COLLECTION] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCampaign.prototype, "get", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/handle/:handle', validator: collection_1.collection[enums_1.ACTIONS.FIND_COLLECTION] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCampaign.prototype, "getByHandle", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/handle/:handle/parent', validator: collection_1.collection[enums_1.ACTIONS.FIND_COLLECTION] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCampaign.prototype, "getParentByHandle", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/handle/:handle/ancestors', validator: collection_1.collection[enums_1.ACTIONS.FIND_COLLECTIONS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCampaign.prototype, "listAncestorsByHandle", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/handle/:handle/children', validator: collection_1.collection[enums_1.ACTIONS.FIND_COLLECTIONS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCampaign.prototype, "listChildrenByHandle", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/handle/:handle/descendants', validator: collection_1.collection[enums_1.ACTIONS.FIND_COLLECTIONS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCampaign.prototype, "listDescendantsByHandle", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/handle/:handle/siblings', validator: collection_1.collection[enums_1.ACTIONS.FIND_COLLECTIONS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCampaign.prototype, "listSiblingsByHandle", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns', validator: collection_1.collection[enums_1.ACTIONS.LIST_COLLECTIONS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCampaign.prototype, "list", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/:collection_uuid/offers/:offer_uuid', validator: collection_1.collection[enums_1.ACTIONS.LIST_COLLECTION_OFFERS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCampaign.prototype, "getOffer", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/:collection_uuid/offers', validator: collection_1.collection[enums_1.ACTIONS.LIST_COLLECTION_OFFERS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCampaign.prototype, "listOffers", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/handle/:handle/offers', validator: collection_1.collection[enums_1.ACTIONS.FIND_COLLECTIONS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCampaign.prototype, "listOffersByHandle", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/:collection_uuid/customers/:customer_uuid', validator: collection_1.collection[enums_1.ACTIONS.GET_COLLECTION_CUSTOMER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCampaign.prototype, "getCustomer", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/:collection_uuid/customers', validator: collection_1.collection[enums_1.ACTIONS.LIST_COLLECTION_CUSTOMERS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCampaign.prototype, "listCustomers", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns/:collection_uuid', validator: collection_1.collection[enums_1.ACTIONS.GET_COLLECTION] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCampaign.prototype, "getPublic", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns/handle/:handle', validator: collection_1.collection[enums_1.ACTIONS.FIND_COLLECTION] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCampaign.prototype, "getPublicByHandle", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns/handle/:handle/parent', validator: collection_1.collection[enums_1.ACTIONS.FIND_COLLECTION] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCampaign.prototype, "getPublicParentByHandle", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns/handle/:handle/ancestors', validator: collection_1.collection[enums_1.ACTIONS.FIND_COLLECTIONS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCampaign.prototype, "listPublicAncestorsByHandle", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns/handle/:handle/children', validator: collection_1.collection[enums_1.ACTIONS.FIND_COLLECTIONS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCampaign.prototype, "listPublicChildrenByHandle", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns/handle/:handle/descendants', validator: collection_1.collection[enums_1.ACTIONS.FIND_COLLECTIONS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCampaign.prototype, "listPublicDescendantsByHandle", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns/handle/:handle/siblings', validator: collection_1.collection[enums_1.ACTIONS.FIND_COLLECTIONS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCampaign.prototype, "listPublicSiblingsByHandle", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns', validator: collection_1.collection[enums_1.ACTIONS.LIST_COLLECTIONS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCampaign.prototype, "listPublic", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns/:collection_uuid/offers/:offer_uuid', validator: collection_1.collection[enums_1.ACTIONS.GET_COLLECTION_OFFER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCampaign.prototype, "getPublicOffer", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns/:collection_uuid/offers', validator: collection_1.collection[enums_1.ACTIONS.LIST_COLLECTION_OFFERS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCampaign.prototype, "listPublicOffers", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns/handle/:handle/offers', validator: collection_1.collection[enums_1.ACTIONS.FIND_COLLECTIONS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCampaign.prototype, "listPublicOffersByHandle", null);
    return ChannelCampaign;
}(ApiClass_1.ApiClass));
exports.ChannelCampaign = ChannelCampaign;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/api/channelCountry/index.js":
/*!**************************************************!*\
  !*** ./dist.browser/api/channelCountry/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ApiClass_1 = __webpack_require__(/*! ../../ApiClass */ "./dist.browser/ApiClass.js");
var metadata_1 = __webpack_require__(/*! ../../metadata */ "./dist.browser/metadata.js");
var country_1 = __webpack_require__(/*! ../../validators/country */ "./dist.browser/validators/country/index.js");
/**
 * ChannelCountry
 * @description
 */
var ChannelCountry = /** @class */ (function (_super) {
    __extends(ChannelCountry, _super);
    function ChannelCountry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChannelCountry.prototype.add = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCountry.prototype.update = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    // TODO validator
    ChannelCountry.prototype.publish = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    // TODO validator
    ChannelCountry.prototype.uunpublish = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCountry.prototype.get = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCountry.prototype.list = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**********************************
     * PUBLIC ENDPOINTS
     **********************************/
    ChannelCountry.prototype.getPublic = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCountry.prototype.listPublic = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    __decorate([
        metadata_1.Command({ method: 'POST', route: 'channels/:channel_uuid/countries', validator: country_1.country.add }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCountry.prototype, "add", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/countries/:country_code', validator: country_1.country.update }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCountry.prototype, "update", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/countries/:country_code/publish', validator: country_1.country.update }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCountry.prototype, "publish", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/countries/:country_code/unpublish', validator: country_1.country.update }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCountry.prototype, "uunpublish", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/countries/:country_code', validator: country_1.country.get }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCountry.prototype, "get", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/countries', validator: country_1.country.list }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCountry.prototype, "list", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/countries/:country_code', validator: country_1.country.get }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCountry.prototype, "getPublic", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/countries', validator: country_1.country.list }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCountry.prototype, "listPublic", null);
    return ChannelCountry;
}(ApiClass_1.ApiClass));
exports.ChannelCountry = ChannelCountry;
/**
 * ChannelCountryProvince
 * @description
 */
var ChannelCountryProvince = /** @class */ (function (_super) {
    __extends(ChannelCountryProvince, _super);
    function ChannelCountryProvince() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChannelCountryProvince.prototype.add = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCountryProvince.prototype.update = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    // TODO validator
    ChannelCountryProvince.prototype.publish = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    // TODO validator
    ChannelCountryProvince.prototype.unpublish = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCountryProvince.prototype.get = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCountryProvince.prototype.list = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**********************************
     * PUBLIC ENDPOINTS
     **********************************/
    ChannelCountryProvince.prototype.getPublic = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCountryProvince.prototype.listPublic = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    __decorate([
        metadata_1.Command({ method: 'POST', route: 'channels/:channel_uuid/countries/:country_code/provinces', validator: country_1.country.add }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCountryProvince.prototype, "add", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/countries/:country_code/provinces/:province_code', validator: country_1.country.update }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCountryProvince.prototype, "update", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/countries/:country_code/provinces/:province_code/publish', validator: country_1.country.update }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCountryProvince.prototype, "publish", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/countries/:country_code/provinces/:province_code/unpublish', validator: country_1.country.update }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCountryProvince.prototype, "unpublish", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/countries/:country_code/provinces/:province_code', validator: country_1.country.get }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCountryProvince.prototype, "get", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/countries/:country_code/provinces', validator: country_1.country.list }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCountryProvince.prototype, "list", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/countries/:country_code/provinces/:province_code', validator: country_1.country.get }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCountryProvince.prototype, "getPublic", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/countries/:country_code/provinces', validator: country_1.country.list }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCountryProvince.prototype, "listPublic", null);
    return ChannelCountryProvince;
}(ApiClass_1.ApiClass));
exports.ChannelCountryProvince = ChannelCountryProvince;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/api/channelCustomer/index.js":
/*!***************************************************!*\
  !*** ./dist.browser/api/channelCustomer/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ApiClass_1 = __webpack_require__(/*! ../../ApiClass */ "./dist.browser/ApiClass.js");
var metadata_1 = __webpack_require__(/*! ../../metadata */ "./dist.browser/metadata.js");
var validators_1 = __webpack_require__(/*! ../../validators */ "./dist.browser/validators/index.js");
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
var ChannelCustomer = /** @class */ (function (_super) {
    __extends(ChannelCustomer, _super);
    function ChannelCustomer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**********************************
     * PRIVATE
     **********************************/
    ChannelCustomer.prototype.create = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCustomer.prototype.update = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCustomer.prototype.get = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCustomer.prototype.list = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCustomer.prototype.setAddressBilling = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCustomer.prototype.getAddressBilling = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCustomer.prototype.setAddressShipping = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelCustomer.prototype.getAddressShipping = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get the Customer's Current Cart
     * @param data
     * @param req
     * @param validated
     */
    ChannelCustomer.prototype.getCurrentCart = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get the Customer's Current Cart
     * @param data
     * @param req
     * @param validated
     */
    ChannelCustomer.prototype.getPrimaryUser = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**********************************
     * PUBLIC
     **********************************/
    /**
     * Get a Public Customer Details by ID
     * @param data
     * @param req
     * @param validated
     */
    ChannelCustomer.prototype.getPublic = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get a Public Customer Details by Handle
     * @param data
     * @param req
     * @param validated
     */
    ChannelCustomer.prototype.getPublicByHandle = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    __decorate([
        metadata_1.Command({ method: 'POST', route: 'channels/:channel_uuid/customers', validator: validators_1.customer[enums_1.COMMANDS.CREATE_CUSTOMER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCustomer.prototype, "create", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/customers/:customer_uuid', validator: validators_1.customer[enums_1.COMMANDS.UPDATE_CUSTOMER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCustomer.prototype, "update", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/customers/:customer_uuid', validator: validators_1.customer[enums_1.ACTIONS.GET_CUSTOMER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCustomer.prototype, "get", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/customers', validator: validators_1.customer[enums_1.ACTIONS.LIST_CUSTOMERS] }),
        metadata_1.Paginate(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCustomer.prototype, "list", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/customers/:customer_uuid/address_billing', validator: validators_1.customer[enums_1.COMMANDS.SET_CUSTOMER_BILLING] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCustomer.prototype, "setAddressBilling", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/customers/:customer_uuid/address_billing', validator: validators_1.customer[enums_1.ACTIONS.GET_CUSTOMER_BILLING] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCustomer.prototype, "getAddressBilling", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/customers/:customer_uuid/address_shipping', validator: validators_1.customer[enums_1.COMMANDS.SET_CUSTOMER_SHIPPING] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCustomer.prototype, "setAddressShipping", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/customers/:customer_uuid/address_shipping', validator: validators_1.customer[enums_1.ACTIONS.GET_CUSTOMER_SHIPPING] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCustomer.prototype, "getAddressShipping", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/customers/:customer_uuid/cart_current', validator: validators_1.customer[enums_1.ACTIONS.GET_CUSTOMER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCustomer.prototype, "getCurrentCart", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/customers/:customer_uuid/user_primary', validator: validators_1.customer[enums_1.ACTIONS.GET_CUSTOMER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCustomer.prototype, "getPrimaryUser", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/customers/:customer_uuid', validator: validators_1.customer[enums_1.ACTIONS.GET_PUBLIC_CUSTOMER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCustomer.prototype, "getPublic", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/customers/handle/:handle', validator: validators_1.customer[enums_1.ACTIONS.FIND_PUBLIC_CUSTOMER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelCustomer.prototype, "getPublicByHandle", null);
    return ChannelCustomer;
}(ApiClass_1.ApiClass));
exports.ChannelCustomer = ChannelCustomer;
var ChannelPublicCustomer = /** @class */ (function (_super) {
    __extends(ChannelPublicCustomer, _super);
    function ChannelPublicCustomer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.get = ChannelCustomer.prototype.getPublic;
        _this.getByHandle = ChannelCustomer.prototype.getPublicByHandle;
        return _this;
        // list = ChannelCustomer.prototype.listPublic
    }
    return ChannelPublicCustomer;
}(ApiClass_1.ApiClass));
exports.ChannelPublicCustomer = ChannelPublicCustomer;
var ChannelCustomerCampaign = /** @class */ (function (_super) {
    __extends(ChannelCustomerCampaign, _super);
    function ChannelCustomerCampaign() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChannelCustomerCampaign;
}(ApiClass_1.ApiClass));
exports.ChannelCustomerCampaign = ChannelCustomerCampaign;
var ChannelCustomerCart = /** @class */ (function (_super) {
    __extends(ChannelCustomerCart, _super);
    function ChannelCustomerCart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChannelCustomerCart;
}(ApiClass_1.ApiClass));
exports.ChannelCustomerCart = ChannelCustomerCart;
var ChannelCustomerFeed = /** @class */ (function (_super) {
    __extends(ChannelCustomerFeed, _super);
    function ChannelCustomerFeed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChannelCustomerFeed;
}(ApiClass_1.ApiClass));
exports.ChannelCustomerFeed = ChannelCustomerFeed;
var ChannelCustomerOrder = /** @class */ (function (_super) {
    __extends(ChannelCustomerOrder, _super);
    function ChannelCustomerOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChannelCustomerOrder;
}(ApiClass_1.ApiClass));
exports.ChannelCustomerOrder = ChannelCustomerOrder;
var ChannelCustomerGatewayAccount = /** @class */ (function (_super) {
    __extends(ChannelCustomerGatewayAccount, _super);
    function ChannelCustomerGatewayAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChannelCustomerGatewayAccount;
}(ApiClass_1.ApiClass));
exports.ChannelCustomerGatewayAccount = ChannelCustomerGatewayAccount;
var ChannelCustomerGatewayAccountSource = /** @class */ (function (_super) {
    __extends(ChannelCustomerGatewayAccountSource, _super);
    function ChannelCustomerGatewayAccountSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChannelCustomerGatewayAccountSource;
}(ApiClass_1.ApiClass));
exports.ChannelCustomerGatewayAccountSource = ChannelCustomerGatewayAccountSource;
var ChannelCustomerUser = /** @class */ (function (_super) {
    __extends(ChannelCustomerUser, _super);
    function ChannelCustomerUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChannelCustomerUser;
}(ApiClass_1.ApiClass));
exports.ChannelCustomerUser = ChannelCustomerUser;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/api/channelFeed/index.js":
/*!***********************************************!*\
  !*** ./dist.browser/api/channelFeed/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ApiClass_1 = __webpack_require__(/*! ../../ApiClass */ "./dist.browser/ApiClass.js");
var metadata_1 = __webpack_require__(/*! ../../metadata */ "./dist.browser/metadata.js");
var validators_1 = __webpack_require__(/*! ../../validators */ "./dist.browser/validators/index.js");
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
var ChannelFeed = /** @class */ (function (_super) {
    __extends(ChannelFeed, _super);
    function ChannelFeed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /***********************************
     * Feed
     ***********************************/
    //Actions
    /**
     * List All Feeds
     * @param data
     * @param req
     * @param validated
     */
    ChannelFeed.prototype.list = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List Channel Feeds
     * @param data
     * @param req
     * @param validated
     */
    ChannelFeed.prototype.listChannel = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List Channel Descedant Feeds
     * @param data
     * @param req
     * @param validated
     */
    ChannelFeed.prototype.listChannelDescendant = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Search Channel Feeds
     * @param data
     * @param req
     * @param validated
     */
    ChannelFeed.prototype.searchChannel = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    // /**
    //  * Get Feed Primary
    //  * @param data
    //  * @param req
    //  * @param validated
    //  */
    // @Action({ method: 'GET', route: '/channels/:channel_uuid/feed_primary', validator: feed[ACTIONS.GET_FEED_PRIMARY] })
    // getFeedPrimary(data, req?, validated?) {
    //     return this.request(req, data, validated)
    // }
    /**
     * Get Feed
     * @param data
     * @param req
     * @param validated
     */
    ChannelFeed.prototype.get = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    // Commmands
    /**
     * Update Feed
     * @param data
     * @param req
     * @param validated
     */
    ChannelFeed.prototype.update = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Create Feed
     * @param data
     * @param req
     * @param validated
     */
    ChannelFeed.prototype.create = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    __decorate([
        metadata_1.Action({
            method: 'GET',
            route: '/channels/feeds',
            validator: validators_1.feed[enums_1.ACTIONS.LIST_FEEDS]
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelFeed.prototype, "list", null);
    __decorate([
        metadata_1.Action({
            method: 'GET',
            route: '/channels/:channel_uuid/feeds',
            validator: validators_1.feed[enums_1.ACTIONS.LIST_FEEDS]
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelFeed.prototype, "listChannel", null);
    __decorate([
        metadata_1.Action({
            method: 'GET',
            route: '/channels/:channel_uuid/descendants/feeds',
            validator: validators_1.feed[enums_1.ACTIONS.LIST_FEEDS]
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelFeed.prototype, "listChannelDescendant", null);
    __decorate([
        metadata_1.Action({
            method: 'GET',
            route: '/channels/:channel_uuid/search/feeds',
            validator: validators_1.feed[enums_1.ACTIONS.LIST_FEEDS]
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelFeed.prototype, "searchChannel", null);
    __decorate([
        metadata_1.Action({
            method: 'GET',
            route: '/channels/:channel_uuid/feeds/:feed_uuid',
            validator: validators_1.feed[enums_1.ACTIONS.GET_FEED]
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelFeed.prototype, "get", null);
    __decorate([
        metadata_1.Command({
            method: 'PUT',
            route: '/channels/:channel_uuid/feeds/:feed_uuid',
            validator: validators_1.feed[enums_1.COMMANDS.UPDATE_FEED]
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelFeed.prototype, "update", null);
    __decorate([
        metadata_1.Command({
            method: 'POST',
            route: '/channels/:channel_uuid/feeds',
            validator: validators_1.feed[enums_1.COMMANDS.CREATE_FEED]
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelFeed.prototype, "create", null);
    return ChannelFeed;
}(ApiClass_1.ApiClass));
exports.ChannelFeed = ChannelFeed;
var ChannelFeedItem = /** @class */ (function (_super) {
    __extends(ChannelFeedItem, _super);
    function ChannelFeedItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /************************************
     * Feed Item
     ***********************************/
    //Actions
    /**
     * List Feed Items
     * @param data
     * @param req
     * @param validated
     */
    ChannelFeedItem.prototype.list = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get Feed Items
     * @param data
     * @param req
     * @param validated
     */
    ChannelFeedItem.prototype.get = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    //Commands
    /**
     * Create Feed Item
     * @param data
     * @param req
     * @param validated
     */
    ChannelFeedItem.prototype.create = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Update Feed Item
     * @param data
     * @param req
     * @param validated
     */
    ChannelFeedItem.prototype.update = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Delete Feed Item
     * @param data
     * @param req
     * @param validated
     */
    ChannelFeedItem.prototype.delete = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Mark Feed Item
     * @param data
     * @param req
     * @param validated
     */
    ChannelFeedItem.prototype.mark = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    __decorate([
        metadata_1.Action({
            method: 'GET',
            route: '/channels/:channel_uuid/feeds/:feed_uuid/items',
            validator: validators_1.feed[enums_1.ACTIONS.LIST_FEED_ITEMS]
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelFeedItem.prototype, "list", null);
    __decorate([
        metadata_1.Action({
            method: 'GET',
            route: '/channels/:channel_uuid/feeds/:feed_uuid/items/:item_uuid',
            validator: validators_1.feed[enums_1.ACTIONS.GET_FEED_ITEM]
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelFeedItem.prototype, "get", null);
    __decorate([
        metadata_1.Command({
            method: 'POST',
            route: '/channels/:channel_uuid/feeds/:feed_uuid/items',
            validator: validators_1.feed[enums_1.COMMANDS.CREATE_FEED_ITEM]
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelFeedItem.prototype, "create", null);
    __decorate([
        metadata_1.Command({
            method: 'POST',
            route: '/channels/:channel_uuid/feeds/:feed_uuid/items/:item_uuid',
            validator: validators_1.feed[enums_1.COMMANDS.UPDATE_FEED_ITEM]
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelFeedItem.prototype, "update", null);
    __decorate([
        metadata_1.Command({
            method: 'DELETE',
            route: '/channels/:channel_uuid/feeds/:feed_uuid/items/:item_uuid',
            validator: validators_1.feed[enums_1.COMMANDS.DESTROY_FEED_ITEM]
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelFeedItem.prototype, "delete", null);
    __decorate([
        metadata_1.Command({
            method: 'PUT',
            route: '/channels/:channel_uuid/feeds/:feed_uuid/items/:item_uuid/mark',
            validator: validators_1.feed[enums_1.COMMANDS.MARK_FEED_ITEM]
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelFeedItem.prototype, "mark", null);
    return ChannelFeedItem;
}(ApiClass_1.ApiClass));
exports.ChannelFeedItem = ChannelFeedItem;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/api/channelFulfillment/index.js":
/*!******************************************************!*\
  !*** ./dist.browser/api/channelFulfillment/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ApiClass_1 = __webpack_require__(/*! ../../ApiClass */ "./dist.browser/ApiClass.js");
var metadata_1 = __webpack_require__(/*! ../../metadata */ "./dist.browser/metadata.js");
var validators_1 = __webpack_require__(/*! ../../validators */ "./dist.browser/validators/index.js");
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
var ChannelFulfillment = /** @class */ (function (_super) {
    __extends(ChannelFulfillment, _super);
    function ChannelFulfillment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /***********************************
     * Fulfillment Actions
     ***********************************/
    /**
     * List All Fulfillments
     * @param data
     * @param req
     * @param validated
     */
    ChannelFulfillment.prototype.list = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List Channel Fulfillments
     * @param data
     * @param req
     * @param validated
     */
    ChannelFulfillment.prototype.listChannel = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List Channel Descedant Fulfillments
     * @param data
     * @param req
     * @param validated
     */
    ChannelFulfillment.prototype.listChannelDescendant = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Search Channel Fulfillments
     * @param data
     * @param req
     * @param validated
     */
    ChannelFulfillment.prototype.searchChannel = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    // /**
    //  * Get Fulfillment Primary
    //  * @param data
    //  * @param req
    //  * @param validated
    //  */
    // @Action({ method: 'GET', route: '/channels/:channel_uuid/fulfillment_primary', validator: fulfillment[ACTIONS.GET_FULFILLMENT_PRIMARY] })
    // getFulfillmentPrimary(data, req?, validated?) {
    //     return this.request(req, data, validated)
    // }
    /**
     * Get Fulfillment
     * @param data
     * @param req
     * @param validated
     */
    ChannelFulfillment.prototype.get = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /***********************************
     * Fulfillment Commands
     ***********************************/
    /**
     * Update Fulfillment
     * @param data
     * @param req
     * @param validated
     */
    ChannelFulfillment.prototype.update = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Create Fulfillment
     * @param data
     * @param req
     * @param validated
     */
    ChannelFulfillment.prototype.create = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    __decorate([
        metadata_1.Action({
            method: 'GET',
            route: '/channels/fulfillments',
            validator: validators_1.fulfillment[enums_1.ACTIONS.LIST_FULFILLMENTS]
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelFulfillment.prototype, "list", null);
    __decorate([
        metadata_1.Action({
            method: 'GET',
            route: '/channels/:channel_uuid/fulfillments',
            validator: validators_1.fulfillment[enums_1.ACTIONS.LIST_FULFILLMENTS]
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelFulfillment.prototype, "listChannel", null);
    __decorate([
        metadata_1.Action({
            method: 'GET',
            route: '/channels/:channel_uuid/descendants/fulfillments',
            validator: validators_1.fulfillment[enums_1.ACTIONS.LIST_FULFILLMENTS]
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelFulfillment.prototype, "listChannelDescendant", null);
    __decorate([
        metadata_1.Action({
            method: 'GET',
            route: '/channels/:channel_uuid/search/fulfillments',
            validator: validators_1.fulfillment[enums_1.ACTIONS.LIST_FULFILLMENTS]
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelFulfillment.prototype, "searchChannel", null);
    __decorate([
        metadata_1.Action({
            method: 'GET',
            route: '/channels/:channel_uuid/fulfillments/:fulfillment_uuid',
            validator: validators_1.fulfillment[enums_1.ACTIONS.GET_FULFILLMENT]
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelFulfillment.prototype, "get", null);
    __decorate([
        metadata_1.Command({
            method: 'PUT',
            route: '/channels/:channel_uuid/fulfillments/:fulfillment_uuid',
            validator: validators_1.fulfillment[enums_1.COMMANDS.UPDATE_FULFILLMENT]
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelFulfillment.prototype, "update", null);
    __decorate([
        metadata_1.Command({
            method: 'POST',
            route: '/channels/:channel_uuid/fulfillments',
            validator: validators_1.fulfillment[enums_1.COMMANDS.CREATE_FULFILLMENT]
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelFulfillment.prototype, "create", null);
    return ChannelFulfillment;
}(ApiClass_1.ApiClass));
exports.ChannelFulfillment = ChannelFulfillment;
var ChannelFulfillmentItem = /** @class */ (function (_super) {
    __extends(ChannelFulfillmentItem, _super);
    function ChannelFulfillmentItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /************************************
     * FulfillmentItem Actions
     ***********************************/
    /**
     * List Fulfillment Items
     * @param data
     * @param req
     * @param validated
     */
    ChannelFulfillmentItem.prototype.list = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get Fulfillment Items
     * @param data
     * @param req
     * @param validated
     */
    ChannelFulfillmentItem.prototype.get = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /************************************
     * FulfillmentItem Commands
     ***********************************/
    /**
     * Create Fulfillment Item
     * @param data
     * @param req
     * @param validated
     */
    ChannelFulfillmentItem.prototype.create = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Update Fulfillment Item
     * @param data
     * @param req
     * @param validated
     */
    ChannelFulfillmentItem.prototype.update = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Delete Fulfillment Item
     * @param data
     * @param req
     * @param validated
     */
    ChannelFulfillmentItem.prototype.delete = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    __decorate([
        metadata_1.Action({
            method: 'GET',
            route: '/channels/:channel_uuid/fulfillments/:fulfillment_uuid/items',
            validator: validators_1.fulfillment[enums_1.ACTIONS.LIST_FULFILLMENT_ITEMS]
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelFulfillmentItem.prototype, "list", null);
    __decorate([
        metadata_1.Action({
            method: 'GET',
            route: '/channels/:channel_uuid/fulfillments/:fulfillment_uuid/items/:item_uuid',
            validator: validators_1.fulfillment[enums_1.ACTIONS.GET_FULFILLMENT_ITEM]
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelFulfillmentItem.prototype, "get", null);
    __decorate([
        metadata_1.Command({
            method: 'POST',
            route: '/channels/:channel_uuid/fulfillments/:fulfillment_uuid/items',
            validator: validators_1.fulfillment[enums_1.COMMANDS.CREATE_FULFILLMENT_ITEM]
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelFulfillmentItem.prototype, "create", null);
    __decorate([
        metadata_1.Command({
            method: 'POST',
            route: '/channels/:channel_uuid/fulfillments/:fulfillment_uuid/items/:item_uuid',
            validator: validators_1.fulfillment[enums_1.COMMANDS.UPDATE_FULFILLMENT_ITEM]
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelFulfillmentItem.prototype, "update", null);
    __decorate([
        metadata_1.Command({
            method: 'DELETE',
            route: '/channels/:channel_uuid/fulfillments/:fulfillment_uuid/items/:item_uuid',
            validator: validators_1.fulfillment[enums_1.COMMANDS.DESTROY_FULFILLMENT_ITEM]
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelFulfillmentItem.prototype, "delete", null);
    return ChannelFulfillmentItem;
}(ApiClass_1.ApiClass));
exports.ChannelFulfillmentItem = ChannelFulfillmentItem;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/api/channelGateway/index.js":
/*!**************************************************!*\
  !*** ./dist.browser/api/channelGateway/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ApiClass_1 = __webpack_require__(/*! ../../ApiClass */ "./dist.browser/ApiClass.js");
var metadata_1 = __webpack_require__(/*! ../../metadata */ "./dist.browser/metadata.js");
var validators_1 = __webpack_require__(/*! ../../validators */ "./dist.browser/validators/index.js");
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
var ChannelGateway = /** @class */ (function (_super) {
    __extends(ChannelGateway, _super);
    function ChannelGateway() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /***********************************
     * Gateway
     ***********************************/
    /**
     * Get a Gateway by ID
     * @param data
     * @param req
     * @param validated
     */
    ChannelGateway.prototype.get = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    //   /**
    // * Get Gateway Primary
    // * @param data
    // * @param req
    // * @param validated
    // */
    //   @Action({ method: 'GET', route: '/channels/:channel_uuid/gateway_primary', validator: gateway[ACTIONS.GET_GATEWAY_PRIMARY] })
    //   getGatewayPrimary(data, req?, validated?) {
    //     return this.request(req, data, validated)
    //   }
    /**
   * List gateways
   * @param data
   * @param req
   * @param validated
   */
    ChannelGateway.prototype.list = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
  * List descendants gateways
  * @param data
  * @param req
  * @param validated
  */
    ChannelGateway.prototype.listDescendants = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
  * Search Gateways
  * @param data
  * @param req
  * @param validated
  */
    ChannelGateway.prototype.search = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
    * List Channel's gateways
    * @param data
    * @param req
    * @param validated
    */
    ChannelGateway.prototype.listChannels = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
    * List Channel's Public gateways
    * @param data
    * @param req
    * @param validated
    */
    ChannelGateway.prototype.listChannelsPublic = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
   * Create a Gateway
   * @param data
   * @param req
   * @param validated
   */
    ChannelGateway.prototype.create = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
   * Update a Gateway
   * @param data
   * @param req
   * @param validated
   */
    ChannelGateway.prototype.update = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
  * Publish a Gateway
  * @param data
  * @param req
  * @param validated
  */
    ChannelGateway.prototype.publish = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
  * Unpublish a Gateway
  * @param data
  * @param req
  * @param validated
  */
    ChannelGateway.prototype.unpublish = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
  * List gateway events
  * @param data
  * @param req
  * @param validated
  */
    ChannelGateway.prototype.listEvents = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
  * Create gateway event
  * @param data
  * @param req
  * @param validated
  */
    ChannelGateway.prototype.createEvent = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
  * Upload gateways
  * @param data
  * @param req
  * @param validated
  */
    ChannelGateway.prototype.upload = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
  * Get upload results
  * @param data
  * @param req
  * @param validated
  */
    ChannelGateway.prototype.getUploadResults = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
  * Process uploaded gateways
  * @param data
  * @param req
  * @param validated
  */
    ChannelGateway.prototype.processUpload = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
  * Get gateway upload
  * @param data
  * @param req
  * @param validated
  */
    ChannelGateway.prototype.getUpload = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/gateways/:gateway_uuid', validator: validators_1.gateway[enums_1.ACTIONS.GET_GATEWAY] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelGateway.prototype, "get", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/gateways', validator: validators_1.gateway[enums_1.ACTIONS.LIST_GATEWAYS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelGateway.prototype, "list", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: '/channels/:channel_uuid/descendants/gateways', validator: validators_1.gateway[enums_1.ACTIONS.LIST_GATEWAYS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelGateway.prototype, "listDescendants", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: '/channels/:channel_uuid/search/gateways', validator: validators_1.gateway[enums_1.ACTIONS.LIST_GATEWAYS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelGateway.prototype, "search", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: '/channels/:channel_uuid/gateways', validator: validators_1.gateway[enums_1.ACTIONS.LIST_GATEWAYS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelGateway.prototype, "listChannels", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: '/channels/:channel_uuid/public/gateways', validator: validators_1.gateway[enums_1.ACTIONS.LIST_GATEWAYS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelGateway.prototype, "listChannelsPublic", null);
    __decorate([
        metadata_1.Command({ method: 'POST', route: 'channels/:channel_uuid/gateways', validator: validators_1.gateway[enums_1.COMMANDS.CREATE_GATEWAY] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelGateway.prototype, "create", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/gateways/:gateway_uuid', validator: validators_1.gateway[enums_1.COMMANDS.UPDATE_GATEWAY] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelGateway.prototype, "update", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: '/channels/:channel_uuid/gateways/:gateway_uuid/publish', validator: validators_1.gateway[enums_1.COMMANDS.PUBLISH_GATEWAY] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelGateway.prototype, "publish", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: '/channels/:channel_uuid/gateways/:gateway_uuid/unpublish', validator: validators_1.gateway[enums_1.COMMANDS.UNPUBLISH_GATEWAY] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelGateway.prototype, "unpublish", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: '/channels/:channel_uuid/gateways/:gateway_uuid', validator: validators_1.gateway[enums_1.ACTIONS.LIST_GATEWAY_EVENTS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelGateway.prototype, "listEvents", null);
    __decorate([
        metadata_1.Command({ method: 'POST', route: '/channels/:channel_uuid/gateways/:gateway_uuid', validator: validators_1.gateway[enums_1.EVENTS.GATEWAY_CREATED] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelGateway.prototype, "createEvent", null);
    __decorate([
        metadata_1.Command({ method: 'POST', route: '/channels/:channel_uuid/uploads/gateways', validator: validators_1.gateway[enums_1.COMMANDS.UPLOAD_GATEWAYS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelGateway.prototype, "upload", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: '/channels/:channel_uuid/uploads/gateways', validator: validators_1.gateway[enums_1.ACTIONS.LIST_GATEWAY_UPLOADS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelGateway.prototype, "getUploadResults", null);
    __decorate([
        metadata_1.Command({ method: 'POST', route: '/channels/:channel_uuid/uploads/gateways/:upload_uuid', validator: validators_1.gateway[enums_1.COMMANDS.PROCESS_UPLOADED_GATEWAYS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelGateway.prototype, "processUpload", null);
    __decorate([
        metadata_1.Command({ method: 'POST', route: '/channels/:channel_uuid/uploads/gateways/:upload_uuid', validator: validators_1.gateway[enums_1.ACTIONS.GET_GATEWAY_UPLOAD] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelGateway.prototype, "getUpload", null);
    return ChannelGateway;
}(ApiClass_1.ApiClass));
exports.ChannelGateway = ChannelGateway;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/api/channelOffer/index.js":
/*!************************************************!*\
  !*** ./dist.browser/api/channelOffer/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ApiClass_1 = __webpack_require__(/*! ../../ApiClass */ "./dist.browser/ApiClass.js");
var metadata_1 = __webpack_require__(/*! ../../metadata */ "./dist.browser/metadata.js");
var validators_1 = __webpack_require__(/*! ../../validators */ "./dist.browser/validators/index.js");
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
var ChannelOffer = /** @class */ (function (_super) {
    __extends(ChannelOffer, _super);
    function ChannelOffer() {
        /**********************************
         * PRIVATE ENDPOINTS
         **********************************/
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @Action({ method: 'GET', route: 'channels/:channel_uuid/offers/:offer_uuid/variants/:variant_uuid', validator: offer.get })
        // getVariant(data, req?, validated?) {
        //   return this.request(req, data, validated)
        // }
        _this.getVariant = ChannelOfferVariant.prototype.getVariant;
        // @Action({ method: 'GET', route: 'channels/:channel_uuid/offers/:offer_uuid/variants', validator: offer.list })
        // listVariants(data, req?, validated?) {
        //   return this.request(req, data, validated)
        // }
        _this.listVariants = ChannelOfferVariant.prototype.listVariants;
        // @Action({ method: 'GET', route: 'channels/:channel_uuid/offers/handle/:handle/variants', validator: offer.list })
        // listVariantsByHandle(data, req?, validated?) {
        //   return this.request(req, data, validated)
        // }
        _this.listVariantsByHandle = ChannelOfferVariant.prototype.listVariantsByHandle;
        // @Action({ method: 'GET', route: 'channels/:channel_uuid/public/offers/:offer_uuid/variants/:variant_uuid', validator: offer.get })
        // getPublicVariant(data, req?, validated?) {
        //   return this.request(req, data, validated)
        // }
        _this.getPublicVariant = ChannelOfferVariant.prototype.getPublicVariant;
        // @Action({ method: 'GET', route: 'channels/:channel_uuid/public/offers/:offer_uuid/variants', validator: offer.list })
        // listPublicVariants(data, req?, validated?) {
        //   return this.request(req, data, validated)
        // }
        _this.listPublicVariants = ChannelOfferVariant.prototype.listPublicVariants;
        // @Action({ method: 'GET', route: 'channels/:channel_uuid/public/offers/handle/:handle/variants', validator: offer.list })
        // listPublicVariantsByHandle(data, req?, validated?) {
        //   return this.request(req, data, validated)
        // }
        _this.listPublicVariantsByHandle = ChannelOfferVariant.prototype.listPublicVariantsByHandle;
        return _this;
    }
    ChannelOffer.prototype.create = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelOffer.prototype.update = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelOffer.prototype.publish = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelOffer.prototype.unpublish = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelOffer.prototype.get = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelOffer.prototype.getByHandle = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelOffer.prototype.list = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelOffer.prototype.search = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**********************************
     * PUBLIC ENDPOINTS
     **********************************/
    ChannelOffer.prototype.getPublic = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelOffer.prototype.getPublicByHandle = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelOffer.prototype.listPublic = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelOffer.prototype.searchPublic = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    __decorate([
        metadata_1.Command({ method: 'POST', route: 'channels/:channel_uuid/offers', validator: validators_1.offer[enums_1.COMMANDS.CREATE_OFFER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOffer.prototype, "create", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/offers/:offer_uuid', validator: validators_1.offer[enums_1.COMMANDS.UPDATE_OFFER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOffer.prototype, "update", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/offers/:offer_uuid/publish', validator: validators_1.offer[enums_1.COMMANDS.PUBLISH_OFFER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOffer.prototype, "publish", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/offers/:offer_uuid/unpublish', validator: validators_1.offer[enums_1.COMMANDS.UNPUBLISH_OFFER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOffer.prototype, "unpublish", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/offers/:offer_uuid', validator: validators_1.offer[enums_1.ACTIONS.GET_OFFER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOffer.prototype, "get", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/offers/handle/:handle', validator: validators_1.offer[enums_1.ACTIONS.FIND_OFFER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOffer.prototype, "getByHandle", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/offers', validator: validators_1.offer[enums_1.ACTIONS.LIST_OFFERS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOffer.prototype, "list", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/search/offers', validator: validators_1.offer[enums_1.ACTIONS.LIST_OFFERS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOffer.prototype, "search", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/offers/:offer_uuid', validator: validators_1.offer[enums_1.ACTIONS.GET_PUBLIC_OFFER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOffer.prototype, "getPublic", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/offers/handle/:handle', validator: validators_1.offer[enums_1.ACTIONS.FIND_PUBLIC_OFFER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOffer.prototype, "getPublicByHandle", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/offers', validator: validators_1.offer[enums_1.ACTIONS.LIST_PUBLIC_OFFERS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOffer.prototype, "listPublic", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/search/offers', validator: validators_1.offer[enums_1.ACTIONS.LIST_PUBLIC_OFFERS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOffer.prototype, "searchPublic", null);
    return ChannelOffer;
}(ApiClass_1.ApiClass));
exports.ChannelOffer = ChannelOffer;
var ChannelOfferVariant = /** @class */ (function (_super) {
    __extends(ChannelOfferVariant, _super);
    function ChannelOfferVariant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**********************************
     * PRIVATE ENDPOINTS
     **********************************/
    ChannelOfferVariant.prototype.add = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelOfferVariant.prototype.bulkAdd = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelOfferVariant.prototype.update = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelOfferVariant.prototype.remove = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelOfferVariant.prototype.getVariant = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelOfferVariant.prototype.listVariants = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelOfferVariant.prototype.listVariantsByHandle = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**********************************
     * PUBLIC ENDPOINTS
     **********************************/
    ChannelOfferVariant.prototype.getPublicVariant = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelOfferVariant.prototype.listPublicVariants = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelOfferVariant.prototype.listPublicVariantsByHandle = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    __decorate([
        metadata_1.Command({ method: 'POST', route: 'channels/:channel_uuid/offers/:offer_uuid/variants', validator: validators_1.offer[enums_1.COMMANDS.ADD_OFFER_VARIANT] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOfferVariant.prototype, "add", null);
    __decorate([
        metadata_1.Command({ method: 'POST', route: 'channels/:channel_uuid/offers/:offer_uuid/variants', validator: validators_1.offer[enums_1.COMMANDS.ADD_OFFER_VARIANTS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOfferVariant.prototype, "bulkAdd", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/offers/:offer_uuid/variants/:variant_uuid', validator: validators_1.offer[enums_1.COMMANDS.UPDATE_OFFER_VARIANT] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOfferVariant.prototype, "update", null);
    __decorate([
        metadata_1.Command({ method: 'DELETE', route: 'channels/:channel_uuid/offers/:offer_uuid/variants/:variant_uuid', validator: validators_1.offer[enums_1.COMMANDS.REMOVE_OFFER_VARIANT] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOfferVariant.prototype, "remove", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/offers/:offer_uuid/variants/:variant_uuid', validator: validators_1.offer[enums_1.ACTIONS.GET_OFFER_VARIANT] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOfferVariant.prototype, "getVariant", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/offers/:offer_uuid/variants', validator: validators_1.offer[enums_1.ACTIONS.LIST_OFFER_VARIANTS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOfferVariant.prototype, "listVariants", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/offers/handle/:handle/variants', validator: validators_1.offer[enums_1.ACTIONS.FIND_OFFER_VARIANTS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOfferVariant.prototype, "listVariantsByHandle", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/offers/:offer_uuid/variants/:variant_uuid', validator: validators_1.offer[enums_1.ACTIONS.GET_PUBLIC_OFFER_VARIANT] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOfferVariant.prototype, "getPublicVariant", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/offers/:offer_uuid/variants', validator: validators_1.offer[enums_1.ACTIONS.LIST_PUBLIC_OFFER_VARIANTS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOfferVariant.prototype, "listPublicVariants", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/offers/handle/:handle/variants', validator: validators_1.offer[enums_1.ACTIONS.FIND_PUBLIC_OFFER_VARIANTS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOfferVariant.prototype, "listPublicVariantsByHandle", null);
    return ChannelOfferVariant;
}(ApiClass_1.ApiClass));
exports.ChannelOfferVariant = ChannelOfferVariant;
var ChannelPublicOffer = /** @class */ (function (_super) {
    __extends(ChannelPublicOffer, _super);
    function ChannelPublicOffer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.get = ChannelOffer.prototype.getPublic;
        _this.getByHandle = ChannelOffer.prototype.getPublicByHandle;
        _this.list = ChannelOffer.prototype.listPublic;
        _this.search = ChannelOffer.prototype.searchPublic;
        return _this;
    }
    return ChannelPublicOffer;
}(ApiClass_1.ApiClass));
exports.ChannelPublicOffer = ChannelPublicOffer;
var ChannelPublicOfferVariant = /** @class */ (function (_super) {
    __extends(ChannelPublicOfferVariant, _super);
    function ChannelPublicOfferVariant() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getVariant = ChannelOfferVariant.prototype.getPublicVariant;
        _this.listVariants = ChannelOfferVariant.prototype.listPublicVariants;
        _this.listVariantsByHandle = ChannelOfferVariant.prototype.listPublicVariantsByHandle;
        return _this;
    }
    return ChannelPublicOfferVariant;
}(ApiClass_1.ApiClass));
exports.ChannelPublicOfferVariant = ChannelPublicOfferVariant;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/api/channelOrder/index.js":
/*!************************************************!*\
  !*** ./dist.browser/api/channelOrder/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ApiClass_1 = __webpack_require__(/*! ../../ApiClass */ "./dist.browser/ApiClass.js");
var metadata_1 = __webpack_require__(/*! ../../metadata */ "./dist.browser/metadata.js");
var validators_1 = __webpack_require__(/*! ../../validators */ "./dist.browser/validators/index.js");
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
var ChannelOrder = /** @class */ (function (_super) {
    __extends(ChannelOrder, _super);
    function ChannelOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /***********************************
     * Order
     ***********************************/
    /**
     * Get a Order by ID
     * @param data
     * @param req
     * @param validated
     */
    ChannelOrder.prototype.get = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List orders
     * @param data
     * @param req
     * @param validated
     */
    ChannelOrder.prototype.list = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Create a Order
     * @param data
     * @param req
     * @param validated
     */
    ChannelOrder.prototype.create = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Update a Order
     * @param data
     * @param req
     * @param validated
     */
    ChannelOrder.prototype.update = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Set a Order's Billing Address
     * @param data
     * @param req
     * @param validated
     */
    ChannelOrder.prototype.setAddressBilling = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get a Order's Billing Address
     * @param data
     * @param req
     * @param validated
     */
    ChannelOrder.prototype.getAddressBilling = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Set a Order's Shipping Address
     * @param data
     * @param req
     * @param validated
     */
    ChannelOrder.prototype.setAddressShipping = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get a Orders Shipping Address
     * @param data
     * @param req
     * @param validated
     */
    ChannelOrder.prototype.getAddressShipping = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Set a Order's Shipping Address
     * @param data
     * @param req
     * @param validated
     */
    ChannelOrder.prototype.setCustomer = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get a Order's Customer
     * @param data
     * @param req
     * @param validated
     */
    ChannelOrder.prototype.getCustomer = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Set a Order's Payment Details
     * @param data
     * @param req
     * @param validated
     */
    ChannelOrder.prototype.setPaymentDetails = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get a Order's Payment Details
     * @param data
     * @param req
     * @param validated
     */
    ChannelOrder.prototype.getPaymentDetails = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Set a Order's Fulfillment Details
     * @param data
     * @param req
     * @param validated
     */
    ChannelOrder.prototype.setFulfillmentDetails = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get a Order's Fulfillment Details
     * @param data
     * @param req
     * @param validated
     */
    ChannelOrder.prototype.getFulfillmentDetails = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/orders/:order_uuid', validator: validators_1.order[enums_1.ACTIONS.GET_ORDER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOrder.prototype, "get", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/orders', validator: validators_1.order[enums_1.ACTIONS.LIST_ORDERS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOrder.prototype, "list", null);
    __decorate([
        metadata_1.Command({ method: 'POST', route: 'channels/:channel_uuid/orders', validator: validators_1.order[enums_1.COMMANDS.CREATE_ORDER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOrder.prototype, "create", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/orders/:order_uuid', validator: validators_1.order[enums_1.COMMANDS.UPDATE_ORDER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOrder.prototype, "update", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/orders/:order_uuid/address_billing', validator: validators_1.order[enums_1.COMMANDS.SET_ORDER_BILLING] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOrder.prototype, "setAddressBilling", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/orders/:order_uuid/address_billing', validator: validators_1.order[enums_1.ACTIONS.GET_ORDER_BILLING] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOrder.prototype, "getAddressBilling", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/orders/:order_uuid/address_shipping', validator: validators_1.order[enums_1.COMMANDS.SET_ORDER_SHIPPING] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOrder.prototype, "setAddressShipping", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/orders/:order_uuid/address_shipping', validator: validators_1.order[enums_1.ACTIONS.GET_ORDER_SHIPPING] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOrder.prototype, "getAddressShipping", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/orders/:order_uuid/customer', validator: validators_1.order[enums_1.COMMANDS.SET_ORDER_CUSTOMER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOrder.prototype, "setCustomer", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/orders/:order_uuid/customer', validator: validators_1.order[enums_1.ACTIONS.GET_ORDER_CUSTOMER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOrder.prototype, "getCustomer", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/orders/:order_uuid/payment_details', validator: validators_1.order[enums_1.COMMANDS.SET_ORDER_PAYMENT] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOrder.prototype, "setPaymentDetails", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/orders/:order_uuid/payment_details', validator: validators_1.order[enums_1.ACTIONS.GET_ORDER_PAYMENT_DETAILS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOrder.prototype, "getPaymentDetails", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/orders/:order_uuid/payment_details', validator: validators_1.order[enums_1.COMMANDS.SET_ORDER_FULFILLMENT] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOrder.prototype, "setFulfillmentDetails", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/orders/:order_uuid/fulfillment_details', validator: validators_1.order[enums_1.ACTIONS.GET_ORDER_FULFILLMENT_DETAILS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOrder.prototype, "getFulfillmentDetails", null);
    return ChannelOrder;
}(ApiClass_1.ApiClass));
exports.ChannelOrder = ChannelOrder;
/***********************************
 * Order Items
 ***********************************/
var ChannelOrderItem = /** @class */ (function (_super) {
    __extends(ChannelOrderItem, _super);
    function ChannelOrderItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a Order Item from Offer/Offer Variant
     * @param data
     * @param req
     * @param validated
     */
    ChannelOrderItem.prototype.create = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Bulk Create Order Items from Offers/Offer Variants
     * @param data
     * @param req
     * @param validated
     */
    ChannelOrderItem.prototype.bulkCreate = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Update a Order Item
     * @param data
     * @param req
     * @param validated
     */
    ChannelOrderItem.prototype.update = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Remove a Order Item
     * @param data
     * @param req
     * @param validated
     */
    ChannelOrderItem.prototype.remove = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Set a Order's Payment Details
     * @param data
     * @param req
     * @param validated
     */
    ChannelOrderItem.prototype.setPaymentDetails = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get a Order's Payment Details
     * @param data
     * @param req
     * @param validated
     */
    ChannelOrderItem.prototype.getPaymentDetails = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Set a Order's Fulfillment Details
     * @param data
     * @param req
     * @param validated
     */
    ChannelOrderItem.prototype.setFulfillmentDetails = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get a Order's Fulfillment Details
     * @param data
     * @param req
     * @param validated
     */
    ChannelOrderItem.prototype.getFulfillmentDetails = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get a Order Item
     * @param data
     * @param req
     * @param validated
     */
    ChannelOrderItem.prototype.get = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List Order Items
     * @param data
     * @param req
     * @param validated
     */
    ChannelOrderItem.prototype.list = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    __decorate([
        metadata_1.Command({ method: 'POST', route: 'channels/:channel_uuid/orders/:order_uuid/items', validator: validators_1.order[enums_1.COMMANDS.CREATE_ORDER_ITEM] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOrderItem.prototype, "create", null);
    __decorate([
        metadata_1.Command({ method: 'POST', route: 'channels/:channel_uuid/orders/:order_uuid/items', validator: validators_1.order[enums_1.COMMANDS.CREATE_ORDER_ITEMS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOrderItem.prototype, "bulkCreate", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid', validator: validators_1.order[enums_1.COMMANDS.UPDATE_ORDER_ITEM] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOrderItem.prototype, "update", null);
    __decorate([
        metadata_1.Command({ method: 'DELETE', route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid', validator: validators_1.order[enums_1.COMMANDS.REMOVE_ORDER_ITEM] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOrderItem.prototype, "remove", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid/payment_details', validator: validators_1.order[enums_1.COMMANDS.SET_ORDER_ITEM_PAYMENT] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOrderItem.prototype, "setPaymentDetails", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid/payment_details', validator: validators_1.order[enums_1.ACTIONS.GET_ORDER_ITEM_PAYMENT_DETAILS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOrderItem.prototype, "getPaymentDetails", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid/payment_details', validator: validators_1.order[enums_1.COMMANDS.SET_ORDER_ITEM_FULFILLMENT] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOrderItem.prototype, "setFulfillmentDetails", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid/fulfillment_details', validator: validators_1.order[enums_1.ACTIONS.GET_ORDER_ITEM_FULFILLMENT_DETAILS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOrderItem.prototype, "getFulfillmentDetails", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid', validator: validators_1.order[enums_1.ACTIONS.GET_ORDER_ITEM] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOrderItem.prototype, "get", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/orders/:order_uuid/items', validator: validators_1.order[enums_1.ACTIONS.LIST_ORDER_ITEMS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelOrderItem.prototype, "list", null);
    return ChannelOrderItem;
}(ApiClass_1.ApiClass));
exports.ChannelOrderItem = ChannelOrderItem;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/api/channelPermission/index.js":
/*!*****************************************************!*\
  !*** ./dist.browser/api/channelPermission/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ApiClass_1 = __webpack_require__(/*! ../../ApiClass */ "./dist.browser/ApiClass.js");
var metadata_1 = __webpack_require__(/*! ../../metadata */ "./dist.browser/metadata.js");
var permission_1 = __webpack_require__(/*! ../../validators/permission */ "./dist.browser/validators/permission/index.js");
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
var ChannelPermission = /** @class */ (function (_super) {
    __extends(ChannelPermission, _super);
    function ChannelPermission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChannelPermission.prototype.listUserPermissions = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelPermission.prototype.listRolePermissions = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    __decorate([
        metadata_1.Command({ method: 'GET', route: '/channels/:channel_uuid/users/:user_uuid/permissions', validator: permission_1.permission[enums_1.ACTIONS.LIST_USER_PERMISSIONS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelPermission.prototype, "listUserPermissions", null);
    __decorate([
        metadata_1.Command({ method: 'GET', route: '/channels/:channel_uuid/roles/:role_name/permissions', validator: permission_1.permission[enums_1.ACTIONS.LIST_ROLE_PERMISSIONS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelPermission.prototype, "listRolePermissions", null);
    return ChannelPermission;
}(ApiClass_1.ApiClass));
exports.ChannelPermission = ChannelPermission;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/api/channelProduct/index.js":
/*!**************************************************!*\
  !*** ./dist.browser/api/channelProduct/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ApiClass_1 = __webpack_require__(/*! ../../ApiClass */ "./dist.browser/ApiClass.js");
var metadata_1 = __webpack_require__(/*! ../../metadata */ "./dist.browser/metadata.js");
var validators_1 = __webpack_require__(/*! ../../validators */ "./dist.browser/validators/index.js");
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
var ChannelProduct = /** @class */ (function (_super) {
    __extends(ChannelProduct, _super);
    function ChannelProduct() {
        /**********************************
         * PRIVATE ENDPOINTS
         **********************************/
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @Action({ method: 'GET', route: 'channels/:channel_uuid/products/:product_uuid/variants/:variant_uuid', validator: product.get })
        // getVariant(data, req?, validated?) {
        //   return this.request(req, data, validated)
        // }
        _this.getVariant = ChannelProductVariant.prototype.getVariant;
        // @Action({ method: 'GET', route: 'channels/:channel_uuid/products/:product_uuid/variants', validator: product.list })
        // listVariants(data, req?, validated?) {
        //   return this.request(req, data, validated)
        // }
        _this.listVariants = ChannelProductVariant.prototype.listVariants;
        // @Action({ method: 'GET', route: 'channels/:channel_uuid/products/handle/:handle/variants', validator: product.list })
        // listVariantsByHandle(data, req?, validated?) {
        //   return this.request(req, data, validated)
        // }
        _this.listVariantsByHandle = ChannelProductVariant.prototype.listVariantsByHandle;
        // @Action({ method: 'GET', route: 'channels/:channel_uuid/public/products/:product_uuid/variants/:variant_uuid', validator: product.get })
        // getPublicVariant(data, req?, validated?) {
        //   return this.request(req, data, validated)
        // }
        _this.getPublicVariant = ChannelProductVariant.prototype.getPublicVariant;
        // @Action({ method: 'GET', route: 'channels/:channel_uuid/public/products/:product_uuid/variants', validator: product.list })
        // listPublicVariants(data, req?, validated?) {
        //   return this.request(req, data, validated)
        // }
        _this.listPublicVariants = ChannelProductVariant.prototype.listPublicVariants;
        // @Action({ method: 'GET', route: 'channels/:channel_uuid/public/products/handle/:handle/variants', validator: product.list })
        // listPublicVariantsByHandle(data, req?, validated?) {
        //   return this.request(req, data, validated)
        // }
        _this.listPublicVariantsByHandle = ChannelProductVariant.prototype.listPublicVariantsByHandle;
        return _this;
    }
    ChannelProduct.prototype.create = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelProduct.prototype.update = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelProduct.prototype.publish = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelProduct.prototype.unpublish = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelProduct.prototype.get = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelProduct.prototype.getByHandle = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelProduct.prototype.list = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelProduct.prototype.search = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**********************************
     * PUBLIC ENDPOINTS
     **********************************/
    ChannelProduct.prototype.getPublic = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelProduct.prototype.getPublicByHandle = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelProduct.prototype.listPublic = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelProduct.prototype.searchPublic = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    __decorate([
        metadata_1.Command({ method: 'POST', route: 'channels/:channel_uuid/products', validator: validators_1.product[enums_1.COMMANDS.CREATE_PRODUCT] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelProduct.prototype, "create", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/products/:product_uuid', validator: validators_1.product[enums_1.COMMANDS.UPDATE_PRODUCT] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelProduct.prototype, "update", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/products/:product_uuid/publish', validator: validators_1.product[enums_1.COMMANDS.PUBLISH_PRODUCT] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelProduct.prototype, "publish", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/products/:product_uuid/unpublish', validator: validators_1.product[enums_1.COMMANDS.UNPUBLISH_PRODUCT] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelProduct.prototype, "unpublish", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/products/:product_uuid', validator: validators_1.product[enums_1.ACTIONS.GET_PRODUCT] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelProduct.prototype, "get", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/products/handle/:handle', validator: validators_1.product[enums_1.ACTIONS.FIND_PRODUCT] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelProduct.prototype, "getByHandle", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/products', validator: validators_1.product[enums_1.ACTIONS.LIST_PRODUCTS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelProduct.prototype, "list", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/search/products', validator: validators_1.product[enums_1.ACTIONS.LIST_PRODUCTS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelProduct.prototype, "search", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/products/:product_uuid', validator: validators_1.product[enums_1.ACTIONS.GET_PUBLIC_PRODUCT] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelProduct.prototype, "getPublic", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/products/handle/:handle', validator: validators_1.product[enums_1.ACTIONS.FIND_PUBLIC_PRODUCT] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelProduct.prototype, "getPublicByHandle", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/products', validator: validators_1.product[enums_1.ACTIONS.LIST_PUBLIC_PRODUCTS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelProduct.prototype, "listPublic", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/search/products', validator: validators_1.product[enums_1.ACTIONS.LIST_PUBLIC_PRODUCTS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelProduct.prototype, "searchPublic", null);
    return ChannelProduct;
}(ApiClass_1.ApiClass));
exports.ChannelProduct = ChannelProduct;
var ChannelProductVariant = /** @class */ (function (_super) {
    __extends(ChannelProductVariant, _super);
    function ChannelProductVariant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**********************************
     * PRIVATE ENDPOINTS
     **********************************/
    ChannelProductVariant.prototype.add = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelProductVariant.prototype.bulkAdd = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelProductVariant.prototype.update = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelProductVariant.prototype.remove = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelProductVariant.prototype.getVariant = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelProductVariant.prototype.listVariants = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelProductVariant.prototype.listVariantsByHandle = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**********************************
     * PUBLIC ENDPOINTS
     **********************************/
    ChannelProductVariant.prototype.getPublicVariant = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelProductVariant.prototype.listPublicVariants = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    ChannelProductVariant.prototype.listPublicVariantsByHandle = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    __decorate([
        metadata_1.Command({ method: 'POST', route: 'channels/:channel_uuid/products/:product_uuid/variants', validator: validators_1.product[enums_1.COMMANDS.ADD_PRODUCT_VARIANT] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelProductVariant.prototype, "add", null);
    __decorate([
        metadata_1.Command({ method: 'POST', route: 'channels/:channel_uuid/products/:product_uuid/variants', validator: validators_1.product[enums_1.COMMANDS.ADD_PRODUCT_VARIANTS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelProductVariant.prototype, "bulkAdd", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/products/:product_uuid/variants/:variant_uuid', validator: validators_1.product[enums_1.COMMANDS.UPDATE_PRODUCT_VARIANT] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelProductVariant.prototype, "update", null);
    __decorate([
        metadata_1.Command({ method: 'DELETE', route: 'channels/:channel_uuid/products/:product_uuid/variants/:variant_uuid', validator: validators_1.product[enums_1.COMMANDS.REMOVE_PRODUCT_VARIANT] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelProductVariant.prototype, "remove", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/products/:product_uuid/variants/:variant_uuid', validator: validators_1.product[enums_1.ACTIONS.GET_PRODUCT_VARIANT] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelProductVariant.prototype, "getVariant", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/products/:product_uuid/variants', validator: validators_1.product[enums_1.ACTIONS.LIST_PRODUCT_VARIANTS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelProductVariant.prototype, "listVariants", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/products/handle/:handle/variants', validator: validators_1.product[enums_1.ACTIONS.FIND_PRODUCT_VARIANTS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelProductVariant.prototype, "listVariantsByHandle", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/products/:product_uuid/variants/:variant_uuid', validator: validators_1.product[enums_1.ACTIONS.GET_PUBLIC_PRODUCT_VARIANT] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelProductVariant.prototype, "getPublicVariant", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/products/:product_uuid/variants', validator: validators_1.product[enums_1.ACTIONS.LIST_PUBLIC_PRODUCT_VARIANTS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelProductVariant.prototype, "listPublicVariants", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/public/products/handle/:handle/variants', validator: validators_1.product[enums_1.ACTIONS.FIND_PUBLIC_PRODUCT_VARIANTS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelProductVariant.prototype, "listPublicVariantsByHandle", null);
    return ChannelProductVariant;
}(ApiClass_1.ApiClass));
exports.ChannelProductVariant = ChannelProductVariant;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/api/channelSubscription/index.js":
/*!*******************************************************!*\
  !*** ./dist.browser/api/channelSubscription/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ApiClass_1 = __webpack_require__(/*! ../../ApiClass */ "./dist.browser/ApiClass.js");
var ChannelSubscription = /** @class */ (function (_super) {
    __extends(ChannelSubscription, _super);
    function ChannelSubscription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChannelSubscription;
}(ApiClass_1.ApiClass));
exports.ChannelSubscription = ChannelSubscription;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/api/channelTask/index.js":
/*!***********************************************!*\
  !*** ./dist.browser/api/channelTask/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ApiClass_1 = __webpack_require__(/*! ../../ApiClass */ "./dist.browser/ApiClass.js");
var ChannelTask = /** @class */ (function (_super) {
    __extends(ChannelTask, _super);
    function ChannelTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChannelTask;
}(ApiClass_1.ApiClass));
exports.ChannelTask = ChannelTask;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/api/channelTransaction/index.js":
/*!******************************************************!*\
  !*** ./dist.browser/api/channelTransaction/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ApiClass_1 = __webpack_require__(/*! ../../ApiClass */ "./dist.browser/ApiClass.js");
var ChannelTransaction = /** @class */ (function (_super) {
    __extends(ChannelTransaction, _super);
    function ChannelTransaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChannelTransaction;
}(ApiClass_1.ApiClass));
exports.ChannelTransaction = ChannelTransaction;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/api/channelUser/index.js":
/*!***********************************************!*\
  !*** ./dist.browser/api/channelUser/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ApiClass_1 = __webpack_require__(/*! ../../ApiClass */ "./dist.browser/ApiClass.js");
var metadata_1 = __webpack_require__(/*! ../../metadata */ "./dist.browser/metadata.js");
var validators_1 = __webpack_require__(/*! ../../validators */ "./dist.browser/validators/index.js");
var channelAuth_1 = __webpack_require__(/*! ../channelAuth */ "./dist.browser/api/channelAuth/index.js");
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
var ChannelUser = /** @class */ (function (_super) {
    __extends(ChannelUser, _super);
    function ChannelUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/token', validator: user[ACTIONS.GET_SESSION] })
        // validateToken(data, req?, validated?) {
        //   return this.request(req, data, validated)
        // }
        _this.validateToken = channelAuth_1.ChannelAuth.prototype.validateToken;
        // @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session', validator: user[ACTIONS.GET_SESSION] })
        // session(data, req?, validated?) {
        //   return this.request(req, data, validated)
        // }
        _this.session = channelAuth_1.ChannelAuth.prototype.session;
        // @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/cart', validator: user[ACTIONS.GET_SESSION] })
        // sessionCart(data, req?, validated?) {
        //   return this.request(req, data, validated)
        // }
        _this.sessionCart = channelAuth_1.ChannelAuth.prototype.sessionCart;
        // @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer', validator: user[ACTIONS.GET_SESSION] })
        // sessionCustomer(data, req?, validated?) {
        //   return this.request(req, data, validated)
        // }
        _this.sessionCustomer = channelAuth_1.ChannelAuth.prototype.sessionCustomer;
        // @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/channel', validator: user[ACTIONS.GET_SESSION] })
        // sessionChannel(data, req?, validated?) {
        //   return this.request(req, data, validated)
        // }
        _this.sessionChannel = channelAuth_1.ChannelAuth.prototype.sessionChannel;
        // @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/channels', validator: user[ACTIONS.GET_SESSION] })
        // sessionChannels(data, req?, validated?) {
        //   return this.request(req, data, validated)
        // }
        _this.sessionChannels = channelAuth_1.ChannelAuth.prototype.sessionChannels;
        // @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/roles', validator: user[ACTIONS.GET_SESSION] })
        // sessionRoles(data, req?, validated?) {
        //   return this.request(req, data, validated)
        // }
        _this.sessionRoles = channelAuth_1.ChannelAuth.prototype.sessionRoles;
        // @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/user', validator: user[ACTIONS.GET_SESSION] })
        // sessionUser(data, req?, validated?) {
        //   return this.request(req, data, validated)
        // }
        _this.sessionUser = channelAuth_1.ChannelAuth.prototype.sessionUser;
        // @Command({ method: 'POST', route: 'channels/:channel_uuid/auth/local/register', validator: user.register })
        // register(data, req?, validated?) {
        //   return this.request(req, data, validated)
        // }
        _this.register = channelAuth_1.ChannelAuth.prototype.register;
        // @Command({ method: 'POST', route: 'channels/:channel_uuid/auth/local', validator: user.login })
        // login(data, req?, validated?) {
        //   return this.request(req, data, validated)
        // }
        _this.login = channelAuth_1.ChannelAuth.prototype.login;
        // @Command({ method: 'POST', route: 'channels/:channel_uuid/auth/logout', validator: user.logout })
        // logout(data, req?, validated?) {
        //   return this.request(req, data, validated)
        // }
        _this.logout = channelAuth_1.ChannelAuth.prototype.logout;
        return _this;
    }
    /**
     * Create a User
     * @param data
     * @param req
     * @param validated
     */
    // TODO Validator
    ChannelUser.prototype.create = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Update a User
     * @param data
     * @param req
     * @param validated
     */
    // TODO Validator
    ChannelUser.prototype.update = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get a User by ID
     * @param data
     * @param req
     * @param validated
     */
    // TODO Validator
    ChannelUser.prototype.get = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * List Users
     * @param data
     * @param req
     * @param validated
     */
    // TODO Validator
    ChannelUser.prototype.list = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Search Users
     * @param data
     * @param req
     * @param validated
     */
    // TODO Validator
    ChannelUser.prototype.search = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get a User's Current Cart
     * @param data
     * @param req
     * @param validated
     */
    // TODO Validator
    ChannelUser.prototype.getCurrentCart = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get a User's Current Customer
     * @param data
     * @param req
     * @param validated
     */
    // TODO Validator
    ChannelUser.prototype.getCurrentCustomer = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    /**
     * Get a User's Primary Customer
     * @param data
     * @param req
     * @param validated
     */
    // TODO Validator
    ChannelUser.prototype.getPrimaryCustomer = function (data, req, validated) {
        return this.request(req, data, validated);
    };
    __decorate([
        metadata_1.Command({ method: 'POST', route: 'channels/:channel_uuid/users', validator: validators_1.user[enums_1.COMMANDS.CREATE_USER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelUser.prototype, "create", null);
    __decorate([
        metadata_1.Command({ method: 'PUT', route: 'channels/:channel_uuid/users/:user_uuid', validator: validators_1.user[enums_1.COMMANDS.UPDATE_USER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelUser.prototype, "update", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/users/:user_uuid', validator: validators_1.user[enums_1.ACTIONS.GET_USER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelUser.prototype, "get", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/users', validator: validators_1.user[enums_1.ACTIONS.LIST_USERS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelUser.prototype, "list", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/search/users', validator: validators_1.user[enums_1.ACTIONS.LIST_USERS] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelUser.prototype, "search", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/users/:user_uuid/cart_current', validator: validators_1.user[enums_1.ACTIONS.GET_USER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelUser.prototype, "getCurrentCart", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/users/:user_uuid/customer_current', validator: validators_1.user[enums_1.ACTIONS.GET_USER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelUser.prototype, "getCurrentCustomer", null);
    __decorate([
        metadata_1.Action({ method: 'GET', route: 'channels/:channel_uuid/users/:user_uuid/customer_primary', validator: validators_1.user[enums_1.ACTIONS.GET_USER] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], ChannelUser.prototype, "getPrimaryCustomer", null);
    return ChannelUser;
}(ApiClass_1.ApiClass));
exports.ChannelUser = ChannelUser;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/api/channelVendor/index.js":
/*!*************************************************!*\
  !*** ./dist.browser/api/channelVendor/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ApiClass_1 = __webpack_require__(/*! ../../ApiClass */ "./dist.browser/ApiClass.js");
var ChannelVendor = /** @class */ (function (_super) {
    __extends(ChannelVendor, _super);
    function ChannelVendor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChannelVendor;
}(ApiClass_1.ApiClass));
exports.ChannelVendor = ChannelVendor;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/api/index.js":
/*!***********************************!*\
  !*** ./dist.browser/api/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var channel_1 = __webpack_require__(/*! ./channel */ "./dist.browser/api/channel/index.js");
exports.Channel = channel_1.Channel;
var channelAuth_1 = __webpack_require__(/*! ./channelAuth */ "./dist.browser/api/channelAuth/index.js");
exports.ChannelAuth = channelAuth_1.ChannelAuth;
var channelApplication_1 = __webpack_require__(/*! ./channelApplication */ "./dist.browser/api/channelApplication/index.js");
exports.ChannelApplication = channelApplication_1.ChannelApplication;
var channelBillingModel_1 = __webpack_require__(/*! ./channelBillingModel */ "./dist.browser/api/channelBillingModel/index.js");
exports.ChannelBillingModel = channelBillingModel_1.ChannelBillingModel;
var channelCart_1 = __webpack_require__(/*! ./channelCart */ "./dist.browser/api/channelCart/index.js");
exports.ChannelCart = channelCart_1.ChannelCart;
exports.ChannelCartItem = channelCart_1.ChannelCartItem;
var channelCollection_1 = __webpack_require__(/*! ./channelCollection */ "./dist.browser/api/channelCollection/index.js");
exports.ChannelCollection = channelCollection_1.ChannelCollection;
exports.ChannelCampaign = channelCollection_1.ChannelCampaign;
exports.ChannelCategory = channelCollection_1.ChannelCategory;
var channelCountry_1 = __webpack_require__(/*! ./channelCountry */ "./dist.browser/api/channelCountry/index.js");
exports.ChannelCountry = channelCountry_1.ChannelCountry;
exports.ChannelCountryProvince = channelCountry_1.ChannelCountryProvince;
var channelCustomer_1 = __webpack_require__(/*! ./channelCustomer */ "./dist.browser/api/channelCustomer/index.js");
exports.ChannelCustomer = channelCustomer_1.ChannelCustomer;
exports.ChannelPublicCustomer = channelCustomer_1.ChannelPublicCustomer;
exports.ChannelCustomerCampaign = channelCustomer_1.ChannelCustomerCampaign;
exports.ChannelCustomerCart = channelCustomer_1.ChannelCustomerCart;
exports.ChannelCustomerFeed = channelCustomer_1.ChannelCustomerFeed;
exports.ChannelCustomerOrder = channelCustomer_1.ChannelCustomerOrder;
exports.ChannelCustomerGatewayAccount = channelCustomer_1.ChannelCustomerGatewayAccount;
exports.ChannelCustomerGatewayAccountSource = channelCustomer_1.ChannelCustomerGatewayAccountSource;
exports.ChannelCustomerUser = channelCustomer_1.ChannelCustomerUser;
var channelFeed_1 = __webpack_require__(/*! ./channelFeed */ "./dist.browser/api/channelFeed/index.js");
exports.ChannelFeed = channelFeed_1.ChannelFeed;
exports.ChannelFeedItem = channelFeed_1.ChannelFeedItem;
var channelFulfillment_1 = __webpack_require__(/*! ./channelFulfillment */ "./dist.browser/api/channelFulfillment/index.js");
exports.ChannelFulfillment = channelFulfillment_1.ChannelFulfillment;
exports.ChannelFulfillmentItem = channelFulfillment_1.ChannelFulfillmentItem;
var channelGateway_1 = __webpack_require__(/*! ./channelGateway */ "./dist.browser/api/channelGateway/index.js");
exports.ChannelGateway = channelGateway_1.ChannelGateway;
var channelOffer_1 = __webpack_require__(/*! ./channelOffer */ "./dist.browser/api/channelOffer/index.js");
exports.ChannelOffer = channelOffer_1.ChannelOffer;
exports.ChannelOfferVariant = channelOffer_1.ChannelOfferVariant;
exports.ChannelPublicOffer = channelOffer_1.ChannelPublicOffer;
exports.ChannelPublicOfferVariant = channelOffer_1.ChannelPublicOfferVariant;
var channelOrder_1 = __webpack_require__(/*! ./channelOrder */ "./dist.browser/api/channelOrder/index.js");
exports.ChannelOrder = channelOrder_1.ChannelOrder;
exports.ChannelOrderItem = channelOrder_1.ChannelOrderItem;
var channelPermission_1 = __webpack_require__(/*! ./channelPermission */ "./dist.browser/api/channelPermission/index.js");
exports.ChannelPermission = channelPermission_1.ChannelPermission;
var channelProduct_1 = __webpack_require__(/*! ./channelProduct */ "./dist.browser/api/channelProduct/index.js");
exports.ChannelProduct = channelProduct_1.ChannelProduct;
exports.ChannelProductVariant = channelProduct_1.ChannelProductVariant;
var channelSubscription_1 = __webpack_require__(/*! ./channelSubscription */ "./dist.browser/api/channelSubscription/index.js");
exports.ChannelSubscription = channelSubscription_1.ChannelSubscription;
var channelTask_1 = __webpack_require__(/*! ./channelTask */ "./dist.browser/api/channelTask/index.js");
exports.ChannelTask = channelTask_1.ChannelTask;
var channelTransaction_1 = __webpack_require__(/*! ./channelTransaction */ "./dist.browser/api/channelTransaction/index.js");
exports.ChannelTransaction = channelTransaction_1.ChannelTransaction;
var channelUser_1 = __webpack_require__(/*! ./channelUser */ "./dist.browser/api/channelUser/index.js");
exports.ChannelUser = channelUser_1.ChannelUser;
var channelVendor_1 = __webpack_require__(/*! ./channelVendor */ "./dist.browser/api/channelVendor/index.js");
exports.ChannelVendor = channelVendor_1.ChannelVendor;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/enums/application.js":
/*!*******************************************!*\
  !*** ./dist.browser/enums/application.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.APPLICATION_COMMANDS = {
    'CREATE_APPLICATION': 'create.channel.:channel_uuid.application',
    'ADD_APPLICATION': 'add.channel.:channel_uuid.application.:application_uuid',
    'UPDATE_APPLICATION': 'update.channel.:channel_uuid.application.:application_uuid',
    'REMOVE_APPLICATION': 'remove.channel.:channel_uuid.application.:application_uuid',
    'MOVE_APPLICATION': 'move.channel.:channel_uuid.application.:application_uuid',
    'DESTROY_APPLICATION': 'destroy.channel.:channel_uuid.application.:application_uuid',
    'PUBLISH_APPLICATION': 'publish.channel.:channel_uuid.application.:application_uuid',
    'UNPUBLISH_APPLICATION': 'unpublish.channel.:channel_uuid.application.:application_uuid',
    'ADD_APPLICATION_PREHOOK': 'add.channel.:channel_uuid.application.:application_uuid.prehook.:prehook_uuid',
    'CREATE_APPLICATION_PREHOOK': 'create.channel.:channel_uuid.application.:application_uuid.prehook',
    'UPDATE_APPLICATION_PREHOOK': 'update.channel.:channel_uuid.application.:application_uuid.prehook.:prehook_uuid',
    'REMOVE_APPLICATION_PREHOOK': 'remove.channel.:channel_uuid.application.:application_uuid.prehook.:prehook_uuid',
    'ADD_APPLICATION_WEBHOOK': 'add.channel.:channel_uuid.application.:application_uuid.webhook.:webhook_uuid',
    'CREATE_APPLICATION_WEBHOOK': 'create.channel.:channel_uuid.application.:application_uuid.webhook',
    'UPDATE_APPLICATION_WEBHOOK': 'update.channel.:channel_uuid.application.:application_uuid.webhook.:webhook_uuid',
    'REMOVE_APPLICATION_WEBHOOK': 'remove.channel.:channel_uuid.application.:application_uuid.webhook.:webhook_uuid',
    'CREATE_APPLICATION_TRANSFORMER': 'create.channel.:channel_uuid.application.:application_uuid.transformer.:transformer_uuid',
    'UPDATE_APPLICATION_TRANSFORMER': 'update.channel.:channel_uuid.application.:application_uuid.transformer.:transformer_uuid',
    'ADD_APPLICATION_TRANSFORMER': 'add.channel.:channel_uuid.application.:application_uuid.transformer.:transformer_uuid',
    'REMOVE_APPLICATION_TRANSFORMER': 'remove.channel.:channel_uuid.application.:application_uuid.transformer.:transformer_uuid',
    'ADD_APPLICATION_ENDPOINT': 'add.channel.:channel_uuid.application.:application_uuid.endpoint.:endpoint_uuid',
    'CREATE_APPLICATION_ENDPOINT': 'create.channel.:channel_uuid.application.:application_uuid.endpoint',
    'UPDATE_APPLICATION_ENDPOINT': 'update.channel.:channel_uuid.application.:application_uuid.endpoint.:endpoint_uuid',
    'REMOVE_APPLICATION_ENDPOINT': 'remove.channel.:channel_uuid.application.:application_uuid.endpoint.:endpoint_uuid',
    'RUN_APPLICATION_ENDPOINT': 'run.channel.:channel_uuid.application.:application_uuid.endpoint.:endpoint_uuid',
    'ADD_APPLICATION_KEY': 'add.channel.:channel_uuid.application.:application_uuid.key.:key_uuid',
    'CREATE_APPLICATION_KEY': 'create.channel.:channel_uuid.application.:application_uuid.key.:key_uuid',
    'UPDATE_APPLICATION_KEY': 'update.channel.:channel_uuid.application.:application_uuid.key.:key_uuid',
    'REMOVE_APPLICATION_KEY': 'remove.channel.:channel_uuid.application.:application_uuid.key.:key_uuid',
    'UPLOAD_APPLICATIONS': 'upload.channel.:channel_uuid.list.application',
    'PROCESS_UPLOADED_APPLICATIONS': 'process.upload.channel.:channel_uuid.list.application',
};
exports.APPLICATION_ACTIONS = {
    'SUBSCRIBE_APPLICATION': 'channel.application.subscribe',
    'GET_APPLICATION': 'channel.application.get',
    'LIST_APPLICATIONS': 'channel.application.list',
    'LIST_APPLICATION_EVENTS': 'channel.application.event.list',
    'GET_APPLICATION_ENDPOINT': 'channel.application.endpoint.get',
    'LIST_APPLICATION_ENDPOINTS': 'channel.application.endpoint.list',
    'GET_APPLICATION_KEY': 'channel.application.key.get',
    'LIST_APPLICATION_KEYS': 'channel.application.key.list',
    'GET_APPLICATION_PREHOOK': 'channel.application.prehook.get',
    'LIST_APPLICATION_PREHOOKS': 'channel.application.prehook.list',
    'GET_APPLICATION_WEBHOOK': 'channel.application.webhook.get',
    'LIST_APPLICATION_WEBHOOKS': 'channel.application.webhook.list',
    'GET_APPLICATION_TRANSFORMER': 'channel.application.transformer.get',
    'LIST_APPLICATION_TRANSFORMERS': 'channel.application.transformer.list',
    'GET_APPLICATION_UPLOAD': 'channel.application.upload.get',
    'LIST_APPLICATION_UPLOADS': 'channel.application.upload.list',
};
exports.APPLICATION_EVENTS = {
    'APPLICATION_CREATED': 'channel.:channel_uuid.application.:application_uuid.created',
    'APPLICATION_ADDED': 'channel.:channel_uuid.application.:application_uuid.added',
    'APPLICATION_UPDATED': 'channel.:channel_uuid.application.:application_uuid.updated',
    'APPLICATION_MOVED': 'channel.:channel_uuid.application.:application_uuid.moved',
    'APPLICATION_REMOVED': 'channel.:channel_uuid.application.:application_uuid.removed',
    'APPLICATION_DESTROYED': 'channel.:channel_uuid.application.:application_uuid.destroyed',
    'APPLICATION_PUBLISHED': 'channel.:channel_uuid.application.:application_uuid.published',
    'APPLICATION_UNPUBLISHED': 'channel.:channel_uuid.application.:application_uuid.unpublished',
    'APPLICATION_PREHOOK_ADDED': 'channel.:channel_uuid.application.:application_uuid.prehook.:prehook_uuid.added',
    'APPLICATION_PREHOOK_CREATED': 'channel.:channel_uuid.application.:application_uuid.prehook.:prehook_uuid.created',
    'APPLICATION_PREHOOK_UPDATED': 'channel.:channel_uuid.application.:application_uuid.prehook.:prehook_uuid.updated',
    'APPLICATION_PREHOOK_REMOVED': 'channel.:channel_uuid.application.:application_uuid.prehook.:prehook_uuid.removed',
    'APPLICATION_WEBHOOK_CREATED': 'channel.:channel_uuid.application.:application_uuid.webhook.:webhook_uuid.created',
    'APPLICATION_WEBHOOK_UPDATED': 'channel.:channel_uuid.application.:application_uuid.webhook.:webhook_uuid.updated',
    'APPLICATION_WEBHOOK_ADDED': 'channel.:channel_uuid.application.:application_uuid.webhook.:webhook_uuid.added',
    'APPLICATION_WEBHOOK_REMOVED': 'channel.:channel_uuid.application.:application_uuid.webhook.:webhook_uuid.removed',
    'APPLICATION_TRANSFORMER_CREATED': 'channel.:channel_uuid.application.:application_uuid.transformer.:transformer_uuid.created',
    'APPLICATION_TRANSFORMER_UPDATED': 'channel.:channel_uuid.application.:application_uuid.transformer.:transformer_uuid.updated',
    'APPLICATION_TRANSFORMER_ADDED': 'channel.:channel_uuid.application.:application_uuid.transformer.:transformer_uuid.added',
    'APPLICATION_TRANSFORMER_REMOVED': 'channel.:channel_uuid.application.:application_uuid.transformer.:transformer_uuid.removed',
    'APPLICATION_ENDPOINT_ADDED': 'channel.:channel_uuid.application.:application_uuid.endpoint.:endpoint_uuid.added',
    'APPLICATION_ENDPOINT_REMOVED': 'channel.:channel_uuid.application.:application_uuid.endpoint.:endpoint_uuid.removed',
    'APPLICATION_ENDPOINT_CREATED': 'channel.:channel_uuid.application.:application_uuid.endpoint.:endpoint_uuid.created',
    'APPLICATION_ENDPOINT_UPDATED': 'channel.:channel_uuid.application.:application_uuid.endpoint.:endpoint_uuid.updated',
    'APPLICATION_ENDPOINT_RAN': 'channel.:channel_uuid.application.:application_uuid.endpoint.:endpoint_uuid.ran',
    'APPLICATION_KEY_ADDED': 'channel.:channel_uuid.application.:application_uuid.key.:key_uuid.added',
    'APPLICATION_KEY_REMOVED': 'channel.:channel_uuid.application.:application_uuid.key.:key_uuid.removed',
    'APPLICATION_KEY_CREATED': 'channel.:channel_uuid.application.:application_uuid.key.:key_uuid.created',
    'APPLICATION_KEY_UPDATED': 'channel.:channel_uuid.application.:application_uuid.key.:key_uuid.updated',
    'APPLICATIONS_UPLOADED': 'channel.:channel_uuid.application.uploaded.list',
    'APPLICATIONS_UPLOAD_PROCESSED': 'channel.:channel_uuid.application.upload.processed.list',
};
//# sourceMappingURL=application.js.map

/***/ }),

/***/ "./dist.browser/enums/auth.js":
/*!************************************!*\
  !*** ./dist.browser/enums/auth.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTH_ACTIONS = {
    'GET_SESSION': 'channel.session.get',
    'GET_SESSION_USER': 'channel.session.user.get',
    'GET_SESSION_CART': 'channel.session.cart.get',
    'GET_SESSION_CART_BILLING': 'channel.session.cart.address_billing.get',
    'GET_SESSION_CART_SHIPPING': 'channel.session.cart.address_shipping.get',
    'GET_SESSION_CART_PAYMENT': 'channel.session.cart.payment_details.get',
    'GET_SESSION_CART_ITEM': 'channel.session.cart.item.get',
    'LIST_SESSION_CART_ITEMS': 'channel.session.cart.item.list',
    'GET_SESSION_CHANNEL': 'channel.session.channel.get',
    'LIST_SESSION_CHANNELS': 'channel.session.channel.list',
    'LIST_SESSION_ROLES': 'channel.session.role.list',
    'GET_SESSION_CUSTOMER': 'channel.session.customer.get',
    'GET_SESSION_CUSTOMER_BILLING': 'channel.session.customer.address_billing.get',
    'GET_SESSION_CUSTOMER_SHIPPING': 'channel.session.customer.address_shipping.get',
    'LIST_SESSION_CUSTOMER_ACCOUNTS': 'channel.session.customer.account.list',
    'LIST_SESSION_CUSTOMER_CARTS': 'channel.session.customer.cart.list',
    'LIST_SESSION_CUSTOMER_FEEDS': 'channel.session.customer.feed.list',
    'GET_SESSION_CUSTOMER_ORDER': 'channel.session.customer.order.get',
    'LIST_SESSION_CUSTOMER_ORDERS': 'channel.session.customer.order.list',
    'LIST_SESSION_CUSTOMER_ORDER_ITEMS': 'channel.session.customer.order.item.list',
    'LIST_SESSION_CUSTOMER_SOURCES': 'channel.session.customer.source.list',
    'LIST_SESSION_CUSTOMER_USERS': 'channel.session.customer.user.list',
};
exports.AUTH_COMMANDS = {
    'CHECKOUT_SESSION_CART': 'checkout.channel.session.cart',
    'UPDATE_SESSION_CART': 'update.channel.session.cart',
    'SET_SESSION_CART_BILLING': 'set.channel.session.cart.address_billing',
    'SET_SESSION_CART_SHIPPING': 'set.channel.session.cart.address_shipping',
    'SET_SESSION_CART_PAYMENT': 'set.channel.session.cart.payment_details',
    'CREATE_SESSION_CART_ITEM': 'create.channel.session.cart.item',
    'UPDATE_SESSION_CART_ITEM': 'update.channel.session.cart.item',
    'REMOVE_SESSION_CART_ITEM': 'remove.channel.session.cart.item',
    'UPDATE_SESSION_CUSTOMER': 'update.channel.session.customer',
    'SET_SESSION_CUSTOMER_BILLING': 'srt.channel.session.customer.address_billing',
    'SET_SESSION_CUSTOMER_SHIPPING': 'srt.channel.session.customer.address_shipping',
    'SET_RECOVERY': 'set.recovery.user',
    'RECOVER': 'recover.user',
    // 'START_SESSION': 'start.channel.session',
    // 'END_SESSION': 'end.channel.session',
    'UPDATE_SESSION_USER': 'update.channel.session.user',
    'REGISTER_USER': 'register.channel.user',
    'LOGIN_USER': 'login.channel.user',
    'LOGOUT_USER': 'logout.channel.user',
};
exports.AUTH_EVENTS = {
    'RECOVERY_SET': 'user.recovery.set',
    'RECOVERED': 'user.recovered',
    'SESSION_USER_UPDATED': 'channel.session.user.updated'
    // 'SESSION_STARTED': 'channel.session.started',
    // 'SESSION_ENDED': 'channel.session.ended',
    // 'USER_REGISTERED': 'channel.user.registered',
    // 'USER_LOGGED_IN': 'channel.user.logged_in',
    // 'USER_LOGGED_OUT': 'channel.user.logged_out',
};
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ "./dist.browser/enums/billing_model.js":
/*!*********************************************!*\
  !*** ./dist.browser/enums/billing_model.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BILLING_MODEL_COMMANDS = {};
exports.BILLING_MODEL_ACTIONS = {};
exports.BILLING_MODEL_EVENTS = {};
//# sourceMappingURL=billing_model.js.map

/***/ }),

/***/ "./dist.browser/enums/cart.js":
/*!************************************!*\
  !*** ./dist.browser/enums/cart.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CART_COMMANDS = {
    'CREATE_CART': 'create.channel.:channel_uuid.cart',
    'UPDATE_CART': 'update.channel.:channel_uuid.cart.:cart_uuid',
    'DESTROY_CART': 'destroy.channel.:channel_uuid.cart.:cart_uuid',
    'CHECKOUT_CART': 'checkout.channel.:channel_uuid.cart.:cart_uuid',
    'CLOSE_CART': 'close.channel.:channel_uuid.cart.:cart_uuid',
    'SET_CART_ORDER': 'set.channel.:channel_uuid.cart.:cart_uuid.order.:order_uuid',
    'SET_CART_CUSTOMER': 'set.channel.:channel_uuid.cart.:cart_uuid.customer.:customer_uuid',
    'SET_CART_USER': 'set.channel.:channel_uuid.cart.:cart_uuid.user.:user_uuid',
    'REMOVE_CART_CUSTOMER': 'remove.channel.:channel_uuid.cart.:cart_uuid.customer.:customer_uuid',
    'SET_CART_BILLING': 'set.channel.:channel_uuid.cart.:cart_uuid.address_billing',
    'SET_CART_SHIPPING': 'set.channel.:channel_uuid.cart.:cart_uuid.address_shipping',
    'SET_CART_PAYMENT': 'set.channel.:channel_uuid.cart.:cart_uuid.payment_details',
    'SET_CART_FULFILLMENT': 'set.channel.:channel_uuid.cart.:cart_uuid.fulfillment_details',
    'ADD_CART_SHIPPING_LINE': 'add.channel.:channel_uuid.cart.:cart_uuid.lines_shipping',
    'ADD_CART_TAX_LINE': 'add.channel.:channel_uuid.cart.:cart_uuid.lines_taxes',
    'ADD_CART_OVERRIDE_LINE': 'add.channel.:channel_uuid.cart.:cart_uuid.lines_pricing_overrides',
    'REMOVE_CART_SHIPPING_LINE': 'remove.channel.:channel_uuid.cart.:cart_uuid.lines_shipping',
    'REMOVE_CART_TAX_LINE': 'remove.channel.:channel_uuid.cart.:cart_uuid.lines_taxes',
    'REMOVE_CART_OVERRIDE_LINE': 'remove.channel.:channel_uuid.cart.:cart_uuid.lines_pricing_overrides',
    'CALCULATE_CART': 'calculate.channel.:channel_uuid.cart.:cart_uuid',
    'CALCULATE_CARTS': 'calculate.channel.:channel_uuid.list.cart',
    'CREATE_CART_ITEM': 'create.channel.:channel_uuid.cart.:cart_uuid.item',
    'CREATE_CART_ITEMS': 'create.channel.:channel_uuid.cart.:cart_uuid.list.item',
    'UPDATE_CART_ITEM': 'update.channel.:channel_uuid.cart.:cart_uuid.item.:item_uuid',
    'UPDATE_CART_ITEMS': 'update.channel.:channel_uuid.cart.:cart_uuid.list.item',
    'SET_CART_ITEMS_CUSTOMER': 'set.channel.:channel_uuid.cart.:cart_uuid.item.list.customer',
    'REMOVE_CART_ITEM': 'remove.channel.:channel_uuid.cart.:cart_uuid.item.:item_uuid',
    'DESTROY_CART_ITEM': 'destroy.channel.:channel_uuid.cart.:cart_uuid.item.:item_uuid',
    'INCREASE_CART_ITEM_QUANTITY': 'increase.channel.:channel_uuid.cart.:cart_uuid.item.:item_uuid.quantity',
    'DECREASE_CART_ITEM_QUANTITY': 'decrease.channel.:channel_uuid.cart.:cart_uuid.item.:item_uuid.quantity',
    'CALCULATE_CART_ITEM': 'calculate.channel.:channel_uuid.cart.:cart_uuid.item.:item_uuid',
    'CALCULATE_CART_ITEMS': 'calculate.channel.:channel_uuid.cart.:cart_uuid.list.item',
    'SET_CART_ITEM_PAYMENT': 'set.channel.:channel_uuid.cart.:cart_uuid.item.:item_uuid.payment_details',
    'SET_CART_ITEM_FULFILLMENT': 'set.channel.:channel_uuid.cart.:cart_uuid.item.:item_uuid.fulfillment_details',
    'ADD_CART_ITEM_SHIPPING_LINE': 'add.channel.cart.:cart_uuid.item.:item_uuid.lines_shipping',
    'ADD_CART_ITEM_TAX_LINE': 'add.channel.:channel_uuid.cart.:cart_uuid.item.:item_uuid.lines_taxes',
    'ADD_CART_ITEM_OVERRIDE_LINE': 'add.channel.:channel_uuid.cart.:cart_uuid.item.:item_uuid.lines_pricing_overrides',
    'REMOVE_CART_ITEM_SHIPPING_LINE': 'remove.channel.:channel_uuid.cart.:cart_uuid.item.:item_uuid.lines_shipping',
    'REMOVE_CART_ITEM_TAX_LINE': 'remove.channel.:channel_uuid.cart.:cart_uuid.item.:item_uuid.lines_taxes',
    'REMOVE_CART_ITEM_OVERRIDE_LINE': 'remove.channel.:channel_uuid.cart.:cart_uuid.item.:item_uuid.lines_pricing_overrides',
};
exports.CART_ACTIONS = {
    'GET_CART': 'channel.cart.get',
    'GET_CART_BILLING': 'channel.cart.address_billing.get',
    'GET_CART_SHIPPING': 'channel.cart.address_shipping.get',
    'GET_CART_CUSTOMER': 'channel.cart.customer.get',
    'GET_CART_PAYMENT_DETAILS': 'channel.cart.payment_details.get',
    'GET_CART_FULFILLMENT_DETAILS': 'channel.cart.fulfillment_details.get',
    'LIST_CART_SHIPPING_LINES': 'channel.cart.lines_shipping.list',
    'LIST_CART_TAX_LINES': 'channel.cart.lines_taxes.list',
    'LIST_CART_OVERRIDE_LINES': 'channel.cart.lines_pricing_overrides.list',
    'LIST_CARTS': 'channel.cart.list',
    'GET_CART_ITEM': 'channel.cart.item.get',
    'LIST_CART_ITEMS': 'channel.cart.item.list',
    'GET_CART_ITEM_PAYMENT_DETAILS': 'channel.cart.item.payment_details.get',
    'GET_CART_ITEM_FULFILLMENT_DETAILS': 'channel.cart.item.fulfillment_details.get',
    'LIST_CART_ITEM_SHIPPING_LINES': 'channel.cart.item.lines_shipping.list',
    'LIST_CART_ITEM_TAX_LINES': 'channel.cart.item.lines_taxes.list',
    'LIST_CART_ITEM_OVERRIDE_LINES': 'channel.cart.item.lines_pricing_overrides.list',
    'LIST_CART_EVENTS': 'channel.cart.event.list',
};
exports.CART_EVENTS = {
    'CART_CREATED': 'channel.:channel_uuid.cart.:cart_uuid.created',
    'CART_UPDATED': 'channel.:channel_uuid.cart.:cart_uuid.updated',
    'CART_DESTROYED': 'channel.:channel_uuid.cart.:cart_uuid.destroyed',
    'CART_CHECKED_OUT': 'channel.:channel_uuid.cart.:cart_uuid.checked_out',
    'CART_CLOSED': 'channel.:channel_uuid.cart.:cart_uuid.closed',
    'CART_ORDER_SET': 'channel.:channel_uuid.cart.:cart_uuid.order.:order_uuid.set',
    'CART_CUSTOMER_SET': 'channel.:channel_uuid.cart.:cart_uuid.customer.:customer_uuid.set',
    'CART_USER_SET': 'channel.:channel_uuid.cart.:cart_uuid.user.:user_uuid.set',
    'CART_CUSTOMER_REMOVED': 'channel.:channel_uuid.cart.:cart_uuid.customer.:customer_uuid.removed',
    'CART_BILLING_SET': 'channel.:channel_uuid.cart.:cart_uuid.address_billing.set',
    'CART_SHIPPING_SET': 'channel.:channel_uuid.cart.:cart_uuid.address_shipping.set',
    'CART_PAYMENT_SET': 'channel.:channel_uuid.cart.:cart_uuid.payment_details.set',
    'CART_FULFILLMENT_SET': 'channel.:channel_uuid.cart.:cart_uuid.fulfillment_details.set',
    'CART_SHIPPING_LINE_ADDED': 'channel.:channel_uuid.cart.:cart_uuid.lines_shipping.added',
    'CART_TAX_LINE_ADDED': 'channel.:channel_uuid.cart.:cart_uuid.lines_taxes.added',
    'CART_OVERRIDE_LINE_ADDED': 'channel.:channel_uuid.cart.:cart_uuid.lines_pricing_overrides.added',
    'CART_SHIPPING_LINE_REMOVED': 'channel.:channel_uuid.cart.:cart_uuid.lines_shipping.removed',
    'CART_TAX_LINE_REMOVED': 'channel.:channel_uuid.cart.:cart_uuid.lines_taxes.removed',
    'CART_OVERRIDE_LINE_REMOVED': 'channel.:channel_uuid.cart.:cart_uuid.lines_pricing_overrides.removed',
    'CART_CALCULATED': 'channel.:channel_uuid.cart.:cart_uuid.calculated',
    'CARTS_CALCULATED': 'channel.:channel_uuid.cart.:cart_uuid.calculated.list',
    'CART_ITEM_CREATED': 'channel.:channel_uuid.cart.:cart_uuid.item.:item_uuid.created',
    'CART_ITEMS_CREATED': 'channel.:channel_uuid.cart.:cart_uuid.item.created.list',
    'CART_ITEMS_CUSTOMER_SET': 'channel.:channel_uuid.cart.:cart_uuid.item.customer.set.list',
    'CART_ITEM_UPDATED': 'channel.:channel_uuid.cart.:cart_uuid.item.:item_uuid.updated',
    'CART_ITEMS_UPDATED': 'channel.:channel_uuid.cart.:cart_uuid.item.:item_uuid.updated.list',
    'CART_ITEM_QUANTITY_INCREASED': 'channel.:channel_uuid.cart.:cart_uuid.item.:item_uuid.quantity.increased',
    'CART_ITEM_QUANTITY_DECREASED': 'channel.:channel_uuid.cart.:cart_uuid.item.:item_uuid.quantity.decreased',
    'CART_ITEM_REMOVED': 'channel.:channel_uuid.cart.:cart_uuid.item.:item_uuid.removed',
    'CART_ITEM_DESTROYED': 'channel.:channel_uuid.cart.:cart_uuid.item.:item_uuid.destroyed',
    'CART_ITEM_CALCULATED': 'channel.:channel_uuid.cart.:cart_uuid.item.:item_uuid.calculated',
    'CART_ITEMS_CALCULATED': 'channel.:channel_uuid.cart.:cart_uuid.item.calculated.list',
    'CART_ITEM_PAYMENT_SET': 'channel.:channel_uuid.cart.:cart_uuid.item.:item_uuid.payment_details.set',
    'CART_ITEM_FULFILLMENT_SET': 'channel.:channel_uuid.cart.:cart_uuid.item.:item_uuid.fulfillment_details.set',
    'CART_ITEM_SHIPPING_LINE_ADDED': 'channel.:channel_uuid.cart.:cart_uuid.item.:item_uuid.lines_shipping.added',
    'CART_ITEM_TAX_LINE_ADDED': 'channel.:channel_uuid.cart.:cart_uuid.item.:item_uuid.lines_taxes.added',
    'CART_ITEM_OVERRIDE_LINE_ADDED': 'channel.:channel_uuid.cart.:cart_uuid.item.:item_uuid.lines_pricing_overrides.added',
    'CART_ITEM_SHIPPING_LINE_REMOVED': 'channel.:channel_uuid.cart.:cart_uuid.item.:item_uuid.lines_shipping.removed',
    'CART_ITEM_TAX_LINE_REMOVED': 'channel.:channel_uuid.cart.:cart_uuid.item.:item_uuid.lines_taxes.removed',
    'CART_ITEM_OVERRIDE_LINE_REMOVED': 'channel.:channel_uuid.cart.:cart_uuid.item.:item_uuid.lines_pricing_overrides.removed',
};
//# sourceMappingURL=cart.js.map

/***/ }),

/***/ "./dist.browser/enums/channel.js":
/*!***************************************!*\
  !*** ./dist.browser/enums/channel.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CHANNEL_COMMANDS = {
    'CREATE': 'create.channel',
    'UPDATE': 'update.channel.:channel_uuid',
    'PUBLISH': 'publish.channel.:channel_uuid',
    'UNPUBLISH': 'unpublish.channel.:channel_uuid',
    'CREATE_CHANNEL': 'create.channel.:parent_uuid.child',
    'ADD_CHANNEL': 'add.channel.:parent_uuid.child.:channel_uuid',
    'MOVE_CHANNEL': 'move.channel.:parent_uuid.child.:channel_uuid',
    'REMOVE_CHANNEL': 'remove.channel.:parent_uuid.child.:channel_uuid',
    'UPLOAD_CHANNELS': 'upload.list.channel',
    'PROCESS_UPLOADED_CHANNELS': 'process.upload.:upload_uuid.list.channel',
    'SET_CHANNEL_CUSTOMER_PRIMARY': 'set.channel.:channel_uuid.customer_primary.:customer_primary_uuid',
    'SET_CHANNEL_VENDOR_PRIMARY': 'set.channel.:channel_uuid.vendor_primary.:vendor_primary_uuid',
    'SET_CHANNEL_GATEWAY_PRIMARY': 'set.channel.:channel_uuid.gateway_primary.:gateway_primary_uuid',
    'SET_CHANNEL_FULFILLMENT_SERVICE_PRIMARY': 'set.channel.:channel_uuid.fulfillment_service_primary.:fulfillment_service_primary_uuid',
    'SET_CHANNEL_FEED_PRIMARY': 'set.channel.:channel_uuid.feed_primary.:feed_primary_uuid',
    'SET_CHANNEL_NEXUS': 'set.channel.:channel_uuid.address_nexus',
    'SET_CHANNEL_THEME': 'set.channel.:channel_uuid.theme',
    'SET_CHANNEL_TAM_PRIMARY': 'set.channel.:channel_uuid.tam_primary.:tam_primary_uuid',
    'ADD_TAM': 'add.channel.:channel_uuid.tam.:user_uuid',
    'UPDATE_TAM': 'update.channel.:channel_uuid.tam.:user_uuid',
    'REMOVE_TAM': 'remove.channel.:channel_uuid.tam.:user_uuid',
    'ADD_RULES_SHIPPING': 'add.channel.:channel_uuid.rules_shipping',
    'UPDATE_RULES_SHIPPING': 'update.channel.:channel_uuid.rules_shipping',
    'REMOVE_RULES_SHIPPING': 'remove.channel.:channel_uuid.rules_shipping',
    'ADD_RULES_TAXES': 'add.channel.:channel_uuid.rules_taxes',
    'UPDATE_RULES_TAXES': 'update.channel.:channel_uuid.rules_taxes',
    'REMOVE_RULES_TAXES': 'remove.channel.:channel_uuid.rules_taxes'
};
exports.CHANNEL_EVENTS = {
    'CREATED': 'channel.:channel_uuid.created',
    'UPDATED': 'channel.:channel_uuid.updated',
    'CHANNEL_CREATED': 'channel.:parent_uuid.child.:channel_uuid.created',
    'CHANNEL_ADDED': 'channel.:parent_uuid.child.:channel_uuid.added',
    'CHANNEL_MOVED': 'channel.:parent_uuid.child.:channel_uuid.moved',
    'CHANNEL_REMOVED': 'channel.:parent_uuid.child.:channel_uuid.removed',
    'PUBLISHED': 'channel.:channel_uuid.published',
    'UNPUBLISHED': 'channel.:channel_uuid.unpublished',
    'CHANNEL_CUSTOMER_PRIMARY_SET': 'channel.:channel_uuid.customer_primary.:customer_primary_uuid.set',
    'CHANNEL_VENDOR_PRIMARY_SET': 'channel.:channel_uuid.vendor_primary.:vendor_primary_uuid.set',
    'CHANNEL_GATEWAY_PRIMARY_SET': 'channel.:channel_uuid.gateway_primary.:gateway_primary_uuid.set',
    'CHANNEL_FULFILLMENT_SERVICE_PRIMARY_SET': 'channel.:channel_uuid.fulfillment_service_primary.:fulfillment_service_primary_uuid.set',
    'CHANNEL_FEED_PRIMARY_SET': 'channel.:channel_uuid.feed_primary.:feed_primary_uuid.set',
    'CHANNEL_NEXUS_SET': 'channel.:channel_uuid.nexus.set',
    'CHANNEL_THEME_SET': 'channel.:channel_uuid.theme_primary.set',
    'CHANNEL_TAM_PRIMARY_SET': 'channel.:channel_uuid.tam_primary.:tam_primary_uuid.set',
    'CHANNELS_UPLOADED': 'channel.uploaded.list',
    'CHANNELS_UPLOAD_PROCESSED': 'channel.upload.processed.list',
    'TAM_ADDED': 'channel.:channel_uuid.tam.:user_uuid.added',
    'TAM_UPDATED': 'channel.:channel_uuid.tam.:user_uuid.updated',
    'TAM_REMOVED': 'channel.:channel_uuid.tam.:user_uuid.removed',
    'RULES_TAXES_ADDED': 'channel.:channel_uuid.rules_taxes.added',
    'RULES_TAXES_UPDATED': 'channel.:channel_uuid.rules_taxes.updated',
    'RULES_TAXES_REMOVED': 'channel.:channel_uuid.rules_taxes.removed',
    'RULES_SHIPPING_ADDED': 'channel.:channel_uuid.rules_shipping.added',
    'RULES_SHIPPING_UPDATED': 'channel.:channel_uuid.rules_shipping.updated',
    'RULES_SHIPPING_REMOVED': 'channel.:channel_uuid.rules_shipping.removed'
};
exports.CHANNEL_ACTIONS = {
    'GET': 'channel.get',
    'GET_PARENT': 'channel.parent.get',
    'LIST': 'channel.list',
    'LIST_CHILDREN': 'channel.children.list',
    'LIST_SIBLINGS': 'channel.siblings.list',
    'LIST_DESCENDANTS': 'channel.descendant.list',
    'LIST_ANCESTORS': 'channel.ancestor.list',
    'GET_CUSTOMER_PRIMARY': 'channel.customer_primary.get',
    'GET_VENDOR_PRIMARY': 'channel.vendor_primary.get',
    'GET_GATEWAY_PRIMARY': 'channel.gateway_primary.get',
    'GET_FULFILLMENT_SERVICE_PRIMARY': 'channel.fulfillment_service_primary.get',
    'GET_NEXUS': 'channel.address_nexus.get',
    'GET_THEME': 'channel.theme.get',
    'LIST_THEMES': 'channel.theme.list',
    'GET_TAM_PRIMARY': 'channel.tam_primary.get',
    'GET_TAM': 'channel.tam.get',
    'LIST_TAMS': 'channel.tam.list',
    'GET_TAM_EVENT': 'channel.tam.event.get',
    'LIST_TAM_EVENTS': 'channel.tam.event.list',
    'GET_RULES_SHIPPING': 'channel.rules_shipping.get',
    'LIST_RULES_SHIPPING': 'channel.rules_shipping.list',
    'GET_RULES_SHIPPING_EVENT': 'channel.rules_shipping.event.get',
    'LIST_RULES_SHIPPING_EVENTS': 'channel.rules_shipping.event.list',
    'GET_RULES_TAXES': 'channel.rules_taxes.get',
    'LIST_RULES_TAXES': 'channel.rules_taxes.list',
    'GET_RULES_TAXES_EVENT': 'channel.rules_taxes.event.get',
    'LIST_RULES_TAXES_EVENTS': 'channel.rules_taxes.event.list',
    'GET_FEED_PRIMARY': 'channel.feed_primary.get',
};
//# sourceMappingURL=channel.js.map

/***/ }),

/***/ "./dist.browser/enums/collection.js":
/*!******************************************!*\
  !*** ./dist.browser/enums/collection.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.COLLECTION_COMMANDS = {
    'CREATE_COLLECTION': 'create.channel.:channel_uuid.collection',
    'ADD_COLLECTION': 'add.channel.:channel_uuid.collection.:collection_uuid',
    'MOVE_COLLECTION': 'move.channel.:channel_uuid.collection.:collection_uuid',
    'PUBLISH_COLLECTION': 'publish.channel.:channel_uuid.collection.:collection_uuid',
    'UNPUBLISH_COLLECTION': 'unpublish.channel.:channel_uuid.collection.:collection_uuid',
    'UPDATE_COLLECTION': 'update.channel.:channel_uuid.collection.:collection_uuid',
    'REMOVE_COLLECTION': 'remove.channel.:channel_uuid.collection.:collection_uuid',
    'DESTROY_COLLECTION': 'destroy.channel.:channel_uuid.collection.:collection_uuid',
    'UPLOAD_COLLECTIONS': 'upload.channel.:channel_uuid.list.collection',
    'PROCESS_UPLOADED_COLLECTIONS': 'process.channel.:channel_uuid.upload.:upload_uuid.list.collection',
    'UPLOAD_COLLECTION_METADATA': 'upload.channel.:channel_uuid.collection.list.metadata',
    'PROCESS_UPLOADED_COLLECTION_METADATA': 'process.channel.:channel_uuid.collection.upload.:upload_uuid.list.metadata',
    // Alias
    'ADD_COLLECTION_CHILD': 'add.channel.:channel_uuid.collection.:parent_uuid.child.:collection_uuid',
    'MOVE_COLLECTION_CHILD': 'move.channel.:channel_uuid.collection.:parent_uuid.child.:collection_uuid',
    'REMOVE_COLLECTION_CHILD': 'remove.channel.:channel_uuid.collection.:parent_uuid.child.:collection_uuid',
    'ADD_COLLECTION_PRODUCT': 'add.channel.:channel_uuid.collection.:collection_uuid.product.:product_uuid',
    'ADD_COLLECTION_PRODUCTS': 'add.channel.:channel_uuid.collection.:collection_uuid.list.product',
    'MOVE_COLLECTION_PRODUCT': 'move.channel.:channel_uuid.collection.:collection_uuid.product.:product_uuid',
    'REMOVE_COLLECTION_PRODUCT': 'remove.channel.:channel_uuid.collection.:collection_uuid.product.:product_uuid',
    'ADD_COLLECTION_BILLING_MODEL': 'add.channel.:channel_uuid.collection.:collection_uuid.billing_model.:model_uuid',
    'ADD_COLLECTION_BILLING_MODELS': 'add.channel.:channel_uuid.collection.:collection_uuid.list.billing_model',
    'MOVE_COLLECTION_BILLING_MODEL': 'move.channel.:channel_uuid.collection.:collection_uuid.billing_model.:model_uuid',
    'REMOVE_COLLECTION_BILLING_MODEL': 'remove.channel.:channel_uuid.collection.:collection_uuid.billing_model.:model_uuid',
    'ADD_COLLECTION_OFFER': 'add.channel.:channel_uuid.collection.:collection_uuid.offer',
    'ADD_COLLECTION_OFFERS': 'add.channel.:channel_uuid.collection.:collection_uuid.list.offer',
    'MOVE_COLLECTION_OFFER': 'move.channel.:channel_uuid.collection.:collection_uuid.offer',
    'REMOVE_COLLECTION_OFFER': 'remove.channel.:channel_uuid.collection.:collection_uuid.offer',
    'ADD_COLLECTION_CUSTOMER': 'add.channel.:channel_uuid.collection.:collection_uuid.customer.:customer_uuid',
    'ADD_COLLECTION_CUSTOMERS': 'add.channel.:channel_uuid.collection.:collection_uuid.list.customer',
    'MOVE_COLLECTION_CUSTOMER': 'move.channel.:channel_uuid.collection.:collection_uuid.customer.:customer_uuid',
    'REMOVE_COLLECTION_CUSTOMER': 'remove.channel.:channel_uuid.collection.:collection_uuid.customer.:customer_uuid',
    'ADD_COLLECTION_IMAGE': 'add.channel.:channel_uuid.collection.:collection_uuid.image.:image_uuid',
    'ADD_COLLECTION_IMAGES': 'add.channel.:channel_uuid.collection.:collection_uuid.list.image',
    'UPDATE_COLLECTION_IMAGE': 'update.channel.:channel_uuid.collection.:collection_uuid.image.:image_uuid',
    'MOVE_COLLECTION_IMAGE': 'move.channel.:channel_uuid.collection.:collection_uuid.image.:image_uuid',
    'REMOVE_COLLECTION_IMAGE': 'remove.channel.:channel_uuid.collection.:collection_uuid.image.:image_uuid',
};
exports.COLLECTION_ACTIONS = {
    'GET_COLLECTION': 'channel.collection.get',
    'FIND_COLLECTION': 'channel.collection.get',
    'GET_COLLECTION_PARENT': 'channel.collection.parent.get',
    'LIST_COLLECTIONS': 'channel.collection.list',
    'FIND_COLLECTIONS': 'channel.collection.list',
    'LIST_COLLECTION_CHILDREN': 'channel.collection.children.list',
    'LIST_COLLECTION_SIBLINGS': 'channel.collection.siblings.list',
    'LIST_COLLECTION_DESCENDANTS': 'channel.collection.descendant.list',
    'LIST_COLLECTION_ANCESTORS': 'channel.collection.ancestor.list',
    'GET_COLLECTION_CUSTOMER': 'channel.collection.customer.get',
    'LIST_COLLECTION_CUSTOMERS': 'channel.collection.customer.list',
    'LIST_COLLECTION_EVENTS': 'channel.collection.event.list',
    'GET_COLLECTION_PRODUCT': 'channel.collection.product.get',
    'LIST_COLLECTION_PRODUCTS': 'channel.collection.product.list',
    'GET_COLLECTION_BILLING_MODEL': 'channel.collection.billing_model.get',
    'LIST_COLLECTION_BILLING_MODELS': 'channel.collection.billing_model.list',
    'GET_COLLECTION_OFFER': 'channel.collection.offer.get',
    'LIST_COLLECTION_OFFERS': 'channel.collection.offer.list',
    'GET_COLLECTION_UPLOAD_RESULT': 'channel.collection.upload_result.get',
    'LIST_COLLECTION_UPLOAD_RESULTS': 'channel.collection.upload_result.list',
    'GET_COLLECTION_UPLOAD': 'channel.collection.upload.get',
    'LIST_COLLECTION_UPLOADS': 'channel.collection.upload.list',
    'GET_COLLECTION_METADATA_UPLOAD_RESULT': 'channel.collection.metadata.upload_result.get',
    'LIST_COLLECTION_METADATA_UPLOAD_RESULTS': 'channel.collection.metadata.upload_result.list',
    'GET_COLLECTION_METADATA_UPLOAD': 'channel.collection.metadata.upload.get',
    'LIST_COLLECTION_METADATA_UPLOADS': 'channel.collection.metadata.upload.list',
    'GET_COLLECTION_IMAGE': 'channel.collection.image.get',
    'LIST_COLLECTION_IMAGES': 'channel.collection.image.list',
    'GET_PUBLIC_COLLECTION': 'channel.public.collection.get',
    'LIST_PUBLIC_COLLECTIONS': 'channel.public.collection.list',
    'GET_PUBLIC_COLLECTION_PRODUCT': 'channel.public.collection.product.get',
    'LIST_PUBLIC_COLLECTION_PRODUCTS': 'channel.public.collection.product.list',
    // CATEGORIES (collections)
    'GET_CATEGORY': 'channel.category.get',
    'GET_CATEGORY_PARENT': 'channel.category.parent.get',
    'LIST_CATEGORIES': 'channel.category.list',
    'LIST_CATEGORY_CHILDREN': 'channel.category.children.list',
    'LIST_CATEGORY_SIBLINGS': 'channel.category.siblings.list',
    'LIST_CATEGORY_DESCENDANTS': 'channel.category.descendant.list',
    'LIST_CATEGORY_ANCESTORS': 'channel.category.ancestor.list',
    'LIST_CATEGORY_EVENTS': 'channel.category.event.list',
    'GET_CATEGORY_PRODUCT': 'channel.category.product.get',
    'LIST_CATEGORY_PRODUCTS': 'channel.category.product.list',
    'GET_PUBLIC_CATEGORY_PRODUCT': 'channel.public.category.product.get',
    'LIST_PUBLIC_CATEGORY_PRODUCTS': 'channel.public.category.product.list',
    'GET_CATEGORY_IMAGE': 'channel.category.image.get',
    'LIST_CATEGORY_IMAGES': 'channel.category.image.list',
    'GET_PUBLIC_CATEGORY': 'channel.public.category.get',
    'LIST_PUBLIC_CATEGORIES': 'channel.public.category.list',
    'GET_PUBLIC_CATEGORY_PARENT': 'channel.public.category.parent.get',
    'LIST_PUBLIC_CATEGORY_CHILDREN': 'channel.public.category.children.list',
    'LIST_PUBLIC_CATEGORY_SIBLINGS': 'channel.public.category.siblings.list',
    'LIST_PUBLIC_CATEGORY_DESCENDANTS': 'channel.public.category.descendant.list',
    'LIST_PUBLIC_CATEGORY_ANCESTORS': 'channel.public.category.ancestor.list',
    'GET_PUBLIC_CATEGORY_OFFER': 'channel.public.category.offer.get',
    'LIST_PUBLIC_CATEGORY_OFFERS': 'channel.public.category.offer.list',
    // CAMPAIGNS (Collections)
    'GET_CAMPAIGN': 'channel.campaign.get',
    'GET_CAMPAIGN_PARENT': 'channel.campaign.parent.get',
    'LIST_CAMPAIGNS': 'channel.campaign.list',
    'LIST_CAMPAIGN_CHILDREN': 'channel.campaign.children.list',
    'LIST_CAMPAIGN_SIBLINGS': 'channel.campaign.siblings.list',
    'LIST_CAMPAIGN_DESCENDANTS': 'channel.campaign.descendant.list',
    'LIST_CAMPAIGN_ANCESTORS': 'channel.campaign.ancestor.list',
    'LIST_CAMPAIGN_EVENTS': 'channel.campaign.event.list',
    // 'GET_CAMPAIGN_PRODUCT': 'channel.campaign.product.get',
    // 'LIST_CAMPAIGN_PRODUCTS': 'channel.campaign.product.list',
    'GET_CAMPAIGN_BILLING_MODEL': 'channel.campaign.billing_model.get',
    'LIST_CAMPAIGN_BILLING_MODELS': 'channel.campaign.billing_model.list',
    'GET_CAMPAIGN_OFFER': 'channel.campaign.offer.get',
    'LIST_CAMPAIGN_OFFERS': 'channel.campaign.offer.list',
    'GET_CAMPAIGN_OFFER_VARIANT': 'channel.campaign.offer.variant.get',
    'LIST_CAMPAIGN_OFFER_VARIANTS': 'channel.campaign.offer.variant.list',
    'GET_CAMPAIGN_CUSTOMER': 'channel.campaign.customer.get',
    'LIST_CAMPAIGN_CUSTOMERS': 'channel.campaign.customer.list',
    'GET_CAMPAIGN_IMAGE': 'channel.campaign.image.get',
    'LIST_CAMPAIGN_IMAGES': 'channel.campaign.image.list',
    'GET_PUBLIC_CAMPAIGN': 'channel.public.campaign.get',
    'LIST_PUBLIC_CAMPAIGNS': 'channel.public.campaign.list',
    'GET_PUBLIC_CAMPAIGN_PARENT': 'channel.public.campaign.parent.get',
    'LIST_PUBLIC_CAMPAIGN_CHILDREN': 'channel.public.campaign.children.list',
    'LIST_PUBLIC_CAMPAIGN_SIBLINGS': 'channel.public.campaign.siblings.list',
    'LIST_PUBLIC_CAMPAIGN_DESCENDANTS': 'channel.public.campaign.descendant.list',
    'LIST_PUBLIC_CAMPAIGN_ANCESTORS': 'channel.public.campaign.ancestor.list',
    'GET_PUBLIC_CAMPAIGN_OFFER': 'channel.public.campaign.offer.get',
    'LIST_PUBLIC_CAMPAIGN_OFFERS': 'channel.public.campaign.offer.list',
    'GET_PUBLIC_CAMPAIGN_OFFER_VARIANT': 'channel.public.campaign.offer.variant.get',
    'LIST_PUBLIC_CAMPAIGN_OFFER_VARIANTS': 'channel.public.campaign.offer.variant.list',
    'GET_FULFILLMENT_ITEM': 'channel.fulfillment.item.get',
    'LIST_FULFILLMENT_ITEMS': 'channel.fulfillment.item.list',
    'GET_FULFILLMENT_SERVICE': 'channel.fulfillment_service.get',
    'LIST_FULFILLMENT_SERVICES': 'channel.fulfillment_service.list',
    'GET_FULFILLMENT_SERVICE_FULFILLMENT': 'channel.fulfillment_service.fulfillment.get',
    'LIST_FULFILLMENT_SERVICE_FULFILLMENTS': 'channel.fulfillment_service.fulfillment.list',
    'GET_FULFILLMENT_SERVICE_EVENT': 'channel.fulfillment_service.event.get',
    'LIST_FULFILLMENT_SERVICE_EVENTS': 'channel.fulfillment_service.event.list',
    'GET_FULFILLMENT_SERVICE_UPLOAD': 'channel.fulfillment_service.upload.get',
    'LIST_FULFILLMENT_SERVICE_UPLOADS': 'channel.fulfillment_service.upload.list'
};
exports.COLLECTION_EVENTS = {
    'COLLECTION_CREATED': 'channel.:channel_uuid.collection.:collection_uuid.created',
    'COLLECTION_ADDED': 'channel.:channel_uuid.collection.:collection_uuid.added',
    'COLLECTION_MOVED': 'channel.:channel_uuid.collection.:collection_uuid.moved',
    'COLLECTION_PUBLISHED': 'channel.:channel_uuid.collection.:collection_uuid.published',
    'COLLECTION_UNPUBLISHED': 'channel.:channel_uuid.collection.:collection_uuid.unpublished',
    'COLLECTION_UPDATED': 'channel.:channel_uuid.collection.:collection_uuid.updated',
    'COLLECTION_REMOVED': 'channel.:channel_uuid.collection.:collection_uuid.removed',
    'COLLECTION_DESTROYED': 'channel.:channel_uuid.collection.:collection_uuid.destroyed',
    'COLLECTIONS_UPLOADED': 'channel.:channel_uuid.collection.uploaded.list',
    'COLLECTIONS_UPLOAD_PROCESSED': 'channel.:channel_uuid.collection.upload.processed.list',
    'COLLECTIONS_METADATA_UPLOADED': 'channel.:channel_uuid.collection.metadata.uploaded.list',
    'COLLECTIONS_METADATA_UPLOAD_PROCESSED': 'channel.:channel_uuid.collection.metadata.upload.processed.list',
    'COLLECTION_CHILD_ADDED': 'channel.:channel_uuid.collection.:parent_uuid.child.:collection_uuid.added',
    'COLLECTION_CHILD_MOVED': 'channel.:channel_uuid.collection.:parent_uuid.child.:collection_uuid.moved',
    'COLLECTION_CHILD_REMOVED': 'channel.:channel_uuid.collection.:parent_uuid.child.:collection_uuid.removed',
    'COLLECTION_PRODUCT_ADDED': 'channel.:channel_uuid.collection.:collection_uuid.product.:product_uuid.added',
    'COLLECTION_PRODUCTS_ADDED': 'channel.:channel_uuid.collection.:collection_uuid.product.added.list',
    'COLLECTION_PRODUCT_MOVED': 'channel.:channel_uuid.collection.:collection_uuid.product.:product_uuid.moved',
    'COLLECTION_PRODUCT_REMOVED': 'channel.:channel_uuid.collection.:collection_uuid.product.:product_uuid.removed',
    'COLLECTION_OFFER_ADDED': 'channel.:channel_uuid.collection.:collection_uuid.offer.added',
    'COLLECTION_OFFERS_ADDED': 'channel.:channel_uuid.collection.:collection_uuid.offer.added.list',
    'COLLECTION_OFFER_MOVED': 'channel.:channel_uuid.collection.:collection_uuid.offer.moved',
    'COLLECTION_OFFER_REMOVED': 'channel.:channel_uuid.collection.:collection_uuid.offer.removed',
    'COLLECTION_CUSTOMER_ADDED': 'channel.:channel_uuid.collection.:collection_uuid.customer.added',
    'COLLECTION_CUSTOMERS_ADDED': 'channel.:channel_uuid.collection.:collection_uuid.customer.:customer_uuid.added.list',
    'COLLECTION_CUSTOMER_MOVED': 'channel.:channel_uuid.collection.:collection_uuid.customer.:customer_uuid.moved',
    'COLLECTION_CUSTOMER_REMOVED': 'channel.:channel_uuid.collection.:collection_uuid.customer.:customer_uuid.removed',
    'COLLECTION_BILLING_MODEL_ADDED': 'channel.:channel_uuid.collection.:collection_uuid.billing_model.:model_uuid.added',
    'COLLECTION_BILLING_MODELS_ADDED': 'channel.:channel_uuid.collection.:collection_uuid.billing_model.added.list',
    'COLLECTION_BILLING_MODEL_MOVED': 'channel.:channel_uuid.collection.:collection_uuid.billing_model.:model_uuid.moved',
    'COLLECTION_BILLING_MODEL_REMOVED': 'channel.:channel_uuid.collection.:collection_uuid.billing_model.:model_uuid.removed',
    'COLLECTION_IMAGE_ADDED': 'channel.:channel_uuid.collection.:collection_uuid.image.:image_uuid.added',
    'COLLECTION_IMAGES_ADDED': 'channel.:channel_uuid.collection.:collection_uuid.image.added.list',
    'COLLECTION_IMAGE_UPDATED': 'channel.:channel_uuid.collection.:collection_uuid.image.:image_uuid.updated',
    'COLLECTION_IMAGE_MOVED': 'channel.:channel_uuid.collection.:collection_uuid.image.:image_uuid.moved',
    'COLLECTION_IMAGE_REMOVED': 'channel.:channel_uuid.collection.:collection_uuid.image.:image_uuid.removed',
};
//# sourceMappingURL=collection.js.map

/***/ }),

/***/ "./dist.browser/enums/country.js":
/*!***************************************!*\
  !*** ./dist.browser/enums/country.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.COUNTRY_COMMANDS = {
    'ADD_COUNTRY': 'add.channel.:channel_uuid.country',
    'ADD_COUNTRIES': 'add.channel.:channel_uuid.list.country',
    'UPDATE_COUNTRY': 'update.channel.:channel_uuid.country.:country_code',
    'REMOVE_COUNTRY': 'remove.channel.:channel_uuid.country.:country_code',
    'PUBLISH_COUNTRY': 'publish.channel.:channel_uuid.country.:country_code',
    'PUBLISH_COUNTRIES': 'publish.channel.:channel_uuid.list.country',
    'UNPUBLISH_COUNTRY': 'unpublish.channel.:channel_uuid.country.:country_code',
    'ADD_PROVINCE': 'add.channel.:channel_uuid.country.:country_code.province.:province_code',
    'ADD_PROVINCES': 'add.channel.:channel_uuid.country.:country_code.list.province',
    'UPDATE_PROVINCE': 'update.channel.:channel_uuid.country.:country_code.province.:province_code',
    'REMOVE_PROVINCE': 'remove.channel.:channel_uuid.country.:country_code.province.:province_code',
    'PUBLISH_PROVINCE': 'publish.channel.:channel_uuid.country.:country_code.province.:province_code',
    'PUBLISH_PROVINCES': 'publish.channel.:channel_uuid.country.:country_code.list.province',
    'UNPUBLISH_PROVINCE': 'unpublish.channel.:channel_uuid.country.:country_code.province.:province_code',
};
exports.COUNTRY_ACTIONS = {
    'GET_COUNTRY': 'channel.country.get',
    'FIND_COUNTRY': 'channel.country.get',
    'LIST_COUNTRIES': 'channel.country.list',
    'FIND_COUNTRIES': 'channel.country.list',
    'GET_COUNTRY_PROVINCE': 'channel.country.province.get',
    'FIND_COUNTRY_PROVINCE': 'channel.country.province.get',
    'LIST_COUNTRY_PROVINCES': 'channel.country.province.list',
    'FIND_COUNTRY_PROVINCES': 'channel.country.province.list',
};
exports.COUNTRY_EVENTS = {
    'COUNTRY_ADDED': 'channel.:channel_uuid.country.:country_code.added',
    'COUNTRIES_ADDED': 'channel.:channel_uuid.country.added.list',
    'COUNTRY_UPDATED': 'channel.:channel_uuid.country.:country_code.updated',
    'COUNTRY_REMOVED': 'channel.:channel_uuid.country.:country_code.removed',
    'COUNTRY_PUBLISHED': 'channel.:channel_uuid.country.:country_code.published',
    'COUNTRIES_PUBLISHED': 'channel.:channel_uuid.country.published.list',
    'COUNTRY_UNPUBLISHED': 'channel.:channel_uuid.country.:country_code.unpublished',
    'PROVINCE_ADDED': 'channel.:channel_uuid.country.:country_code.province.:province_code.added',
    'PROVINCES_ADDED': 'channel.:channel_uuid.country.:country_code.province.added.list',
    'PROVINCE_UPDATED': 'channel.:channel_uuid.country.:country_code.province.:province_code.updated',
    'PROVINCE_REMOVED': 'channel.:channel_uuid.country.:country_code.province.:province_code.removed',
    'PROVINCE_PUBLISHED': 'channel.:channel_uuid.country.:country_code.province.:province_code.published',
    'PROVINCES_PUBLISHED': 'channel.:channel_uuid.country.:country_code.province.published.list',
    'PROVINCE_UNPUBLISHED': 'channel.:channel_uuid.country.:country_code.province.:province_code.unpublished',
    'COUNTY_ADDED': 'channel.:channel_uuid.country.:country_code.county.:county_code.added',
    'COUNTIES_ADDED': 'channel.:channel_uuid.country.:country_code.county.added.list',
    'COUNTY_UPDATED': 'channel.:channel_uuid.country.:country_code.county.:county_code.updated',
    'COUNTY_REMOVED': 'channel.:channel_uuid.country.:country_code.county.:county_code.removed',
    'COUNTY_PUBLISHED': 'channel.:channel_uuid.country.:country_code.county.:county_code.published',
    'COUNTY_UNPUBLISHED': 'channel.:channel_uuid.country.:country_code.county.:county_code.unpublished',
    'CITY_ADDED': 'channel.:channel_uuid.country.:country_code.city.:city_code.added',
    'CITIES_ADDED': 'channel.:channel_uuid.country.:country_code.city.:city_code.added.list',
    'CITY_UPDATED': 'channel.:channel_uuid.country.:country_code.city.:city_code.updated',
    'CITY_REMOVED': 'channel.:channel_uuid.country.:country_code.city.:city_code.removed',
    'CITY_PUBLISHED': 'channel.:channel_uuid.country.:country_code.city.:city_code.published',
    'CITY_UNPUBLISHED': 'channel.:channel_uuid.country.:country_code.city.:city_code.unpublished',
};
//# sourceMappingURL=country.js.map

/***/ }),

/***/ "./dist.browser/enums/customer.js":
/*!****************************************!*\
  !*** ./dist.browser/enums/customer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CUSTOMER_COMMANDS = {
    'CREATE_CUSTOMER': 'create.channel.:channel_uuid.customer',
    'MERGE_CUSTOMERS': 'merge.channel.:channel_uuid.list.customer',
    'ADD_CUSTOMER': 'add.channel.:channel_uuid.customer.:customer_uuid',
    'MOVE_CUSTOMER': 'move.channel.:channel_uuid.customer.:customer_uuid',
    'BLACKLIST_CUSTOMER': 'blacklist.channel.:channel_uuid.customer.:customer_uuid',
    'UNBLACKLIST_CUSTOMER': 'unblacklist.channel.:channel_uuid.customer.:customer_uuid',
    'UPDATE_CUSTOMER': 'update.channel.:channel_uuid.customer.:customer_uuid',
    'REMOVE_CUSTOMER': 'remove.channel.:channel_uuid.customer.:customer_uuid',
    'DESTROY_CUSTOMER': 'destroy.channel.:channel_uuid.customer.:customer_uuid',
    'ADD_CUSTOMER_CHILD': 'add.channel.:channel_uuid.customer.:parent_uuid.child.:customer_uuid',
    'MOVE_CUSTOMER_CHILD': 'move.channel.:channel_uuid.customer.:parent_uuid.child.:customer_uuid',
    'REMOVE_CUSTOMER_CHILD': 'remove.channel.:channel_uuid.customer.:parent_uuid.child.:customer_uuid',
    'SET_CUSTOMER_BILLING': 'set.channel.:channel_uuid.customer.:customer_uuid.address_billing',
    'SET_CUSTOMER_SHIPPING': 'set.channel.:channel_uuid.customer.:customer_uuid.address_shipping',
    'SET_CUSTOMER_FEED': 'set.channel.:channel_uuid.customer.:customer_uuid.feed.:feed_uuid',
    'UPLOAD_CUSTOMERS': 'upload.channel.:channel_uuid.list.customer',
    'PROCESS_UPLOADED_CUSTOMERS': 'process.channel.:channel_uuid.upload.:upload_uuid.list.customer',
    'ADD_CUSTOMER_CART': 'add.channel.:channel_uuid.customer.:customer_uuid.cart',
    'REMOVE_CUSTOMER_CART': 'remove.channel.:channel_uuid.customer.:customer_uuid.cart',
    'CREATE_CUSTOMER_USER': 'create.channel.:channel_uuid.customer.:customer_uuid.user',
    'ADD_CUSTOMER_USER': 'add.channel.:channel_uuid.customer.:customer_uuid.user.:user_uuid',
    'UPDATE_CUSTOMER_USER': 'update.channel.:channel_uuid.customer.:customer_uuid.user.:user_uuid',
    'ADD_CUSTOMER_USERS': 'add.channel.:channel_uuid.customer.:customer_uuid.list.user',
    'REMOVE_CUSTOMER_USER': 'remove.channel.:channel_uuid.customer.:customer_uuid.user.:user_uuid',
    'SET_CUSTOMER_USER_PRIMARY': 'set.channel.:channel_uuid.customer.:customer_uuid.user_primary.:user_primary_uuid',
    'ADD_CUSTOMER_CAMPAIGN': 'add.channel.:channel_uuid.customer.:customer_uuid.campaign.:collection_uuid',
    'ADD_CUSTOMER_CAMPAIGNS': 'add.channel.:channel_uuid.customer.:customer_uuid.list.campaign',
    'REMOVE_CUSTOMER_CAMPAIGN': 'remove.channel.:channel_uuid.customer.:customer_uuid.campaign.:collection_uuid',
    'REMOVE_CUSTOMER_CAMPAIGNS': 'remove.channel.:channel_uuid.customer.:customer_uuid.list.campaign',
    'ADD_CUSTOMER_GATEWAY_ACCOUNT': 'add.channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid',
    'CREATE_CUSTOMER_GATEWAY_ACCOUNT': 'create.channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account',
    'CREATE_CUSTOMER_GATEWAY_ACCOUNTS': 'create.channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.list.account',
    'ADD_CUSTOMER_GATEWAY_ACCOUNTS': 'add.channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.list.account',
    'REMOVE_CUSTOMER_GATEWAY_ACCOUNT': 'remove.channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid',
    'ADD_CUSTOMER_GATEWAY_ACCOUNT_SOURCE': 'add.channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid.source.:source_uuid',
    'ADD_CUSTOMER_GATEWAY_ACCOUNT_SOURCES': 'add.channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid.list.source',
    'CREATE_CUSTOMER_GATEWAY_ACCOUNT_SOURCE': 'create.channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid.source',
    'CREATE_CUSTOMER_GATEWAY_ACCOUNT_SOURCES': 'create.channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid.list.source',
    'REMOVE_CUSTOMER_GATEWAY_ACCOUNT_SOURCE': 'remove.channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid.source.:source_uuid',
    'ADD_CUSTOMER_SUBSCRIPTION': 'add.channel.:channel_uuid.customer.:customer_uuid.subscription.:subscription_uuid',
    'UPDATE_CUSTOMER_SUBSCRIPTION': 'update.channel.:channel_uuid.customer.:customer_uuid.subscription.:subscription_uuid',
    'DEACTIVATE_CUSTOMER_SUBSCRIPTION': 'deactivate.channel.:channel_uuid.customer.:customer_uuid.subscription.:subscription_uuid',
    'ACTIVATE_CUSTOMER_SUBSCRIPTION': 'activate.channel.:channel_uuid.customer.:customer_uuid.subscription.:subscription_uuid',
    'CANCEL_CUSTOMER_SUBSCRIPTION': 'cancel.channel.:channel_uuid.customer.:customer_uuid.subscription.:subscription_uuid',
};
exports.CUSTOMER_ACTIONS = {
    'GET_CUSTOMER': 'channel.customer.get',
    'FIND_CUSTOMER': 'channel.customer.get',
    'GET_CUSTOMER_BILLING': 'channel.customer.address_billing.get',
    'GET_CUSTOMER_SHIPPING': 'channel.customer.address_shipping.get',
    'GET_CUSTOMER_PARENT': 'channel.customer.parent.get',
    'LIST_CUSTOMERS': 'channel.customer.list',
    'FIND_CUSTOMERS': 'channel.customer.list',
    'GET_PUBLIC_CUSTOMER': 'channel.public.customer.get',
    'FIND_PUBLIC_CUSTOMER': 'channel.public.customer.get',
    'LIST_PUBLIC_CUSTOMERS': 'channel.public.customer.list',
    'FIND_PUBLIC_CUSTOMERS': 'channel.public.customer.list',
    'LIST_CUSTOMER_CHILDREN': 'channel.customer.children.list',
    'LIST_CUSTOMER_SIBLINGS': 'channel.customer.siblings.list',
    'LIST_CUSTOMER_DESCENDANTS': 'channel.customer.descendant.list',
    'LIST_CUSTOMER_ANCESTORS': 'channel.customer.ancestor.list',
    'LIST_CUSTOMER_ADDRESSES': 'channel.customer.address.list',
    'GET_CUSTOMER_CART': 'channel.customer.cart.get',
    'LIST_CUSTOMER_CARTS': 'channel.customer.cart.list',
    'GET_CUSTOMER_ORDER': 'channel.customer.order.get',
    'LIST_CUSTOMER_ORDERS': 'channel.customer.order.list',
    'GET_CUSTOMER_GATEWAY_ACCOUNT': 'channel.customer.gateway.account.get',
    'LIST_CUSTOMER_GATEWAY_ACCOUNTS': 'channel.customer.gateway.account.list',
    'GET_CUSTOMER_GATEWAY_ACCOUNT_SOURCE': 'channel.customer.gateway.account.source.get',
    'LIST_CUSTOMER_GATEWAY_ACCOUNT_SOURCES': 'channel.customer.gateway.account.source.list',
    'GET_CUSTOMER_SUBSCRIPTION': 'channel.customer.subscription.get',
    'LIST_CUSTOMER_SUBSCRIPTIONS': 'channel.customer.subscription.list',
    'GET_CUSTOMER_USER': 'channel.customer.user.get',
    'LIST_CUSTOMER_USERS': 'channel.customer.user.list',
    'LIST_CUSTOMER_EVENTS': 'channel.customer.event.list',
    'GET_CUSTOMER_FEED': 'channel.customer.feed.get',
    'GET_CUSTOMER_CAMPAIGN': 'channel.customer.campaign.get',
    'LIST_CUSTOMER_CAMPAIGNS': 'channel.customer.campaign.list',
    'GET_CUSTOMER_UPLOAD': 'channel.customer.upload.get',
    'LIST_CUSTOMER_UPLOADS': 'channel.customer.upload.list',
    'GET_CUSTOMER_UPLOAD_RESULT': 'channel.customer.upload_result.get',
    'LIST_CUSTOMER_UPLOAD_RESULTS': 'channel.customer.upload_result.list',
};
exports.CUSTOMER_EVENTS = {
    'CUSTOMER_CREATED': 'channel.:channel_uuid.customer.:customer_uuid.created',
    'CUSTOMERS_MERGED': 'channel.:channel_uuid.customer.merged.list',
    'CUSTOMER_ADDED': 'channel.:channel_uuid.customer.:customer_uuid.added',
    'CUSTOMER_MOVED': 'channel.:channel_uuid.customer.:customer_uuid.moved',
    'CUSTOMER_BLACKLISTED': 'channel.:channel_uuid.customer.:customer_uuid.blacklisted',
    'CUSTOMER_UNBLACKLISTED': 'channel.:channel_uuid.customer.:customer_uuid.unblacklisted',
    'CUSTOMER_UPDATED': 'channel.:channel_uuid.customer.:customer_uuid.updated',
    'CUSTOMER_REMOVED': 'channel.:channel_uuid.customer.:customer_uuid.removed',
    'CUSTOMER_DESTROYED': 'channel.:channel_uuid.customer.:customer_uuid.destroyed',
    'CUSTOMER_CHILD_ADDED': 'channel.:channel_uuid.customer.:parent_uuid.child.:channel_uuid.added',
    'CUSTOMER_CHILD_MOVED': 'channel.:channel_uuid.customer.:parent_uuid.child.:channel_uuid.moved',
    'CUSTOMER_CHILD_REMOVED': 'channel.:channel_uuid.customer.:parent_uuid.child.:channel_uuid.removed',
    'CUSTOMER_BILLING_SET': 'channel.:channel_uuid.customer.:customer_uuid.address_billing.set',
    'CUSTOMER_SHIPPING_SET': 'channel.:channel_uuid.customer.:customer_uuid.address_shipping.set',
    'CUSTOMER_FEED_SET': 'channel.:channel_uuid.customer.:customer_uuid.feed.:feed_uuid.set',
    'CUSTOMERS_UPLOADED': 'channel.:channel_uuid.customer.upload.:upload_uuid.list',
    'CUSTOMERS_UPLOAD_PROCESSED': 'channel.:channel_uuid.customer.:customer_uuid.upload.:upload_uuid.processed.list',
    'CUSTOMER_CAMPAIGN_ADDED': 'channel.:channel_uuid.customer.:customer_uuid.campaign.:collection_uuid.added',
    'CUSTOMER_CAMPAIGNS_ADDED': 'channel.:channel_uuid.customer.:customer_uuid.campaign.added.list',
    'CUSTOMER_CAMPAIGN_REMOVED': 'channel.:channel_uuid.customer.:customer_uuid.campaign.:collection_uuid.removed',
    'CUSTOMER_CAMPAIGNS_REMOVED': 'channel.:channel_uuid.customer.:customer_uuid.campaign.removed.list',
    'CUSTOMER_CART_ADDED': 'channel.:channel_uuid.customer.:customer_uuid.cart.:cart_uuid.added',
    'CUSTOMER_CART_REMOVED': 'channel.:channel_uuid.customer.:customer_uuid.cart.:cart_uuid.removed',
    'CUSTOMER_GATEWAY_ACCOUNT_ADDED': 'channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid.added',
    'CUSTOMER_GATEWAY_ACCOUNT_CREATED': 'channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.created',
    'CUSTOMER_GATEWAY_ACCOUNTS_CREATED': 'channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.created.list',
    'CUSTOMER_GATEWAY_ACCOUNTS_ADDED': 'channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.added.list',
    'CUSTOMER_GATEWAY_ACCOUNT_UPDATED': 'channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid.updated',
    'CUSTOMER_GATEWAY_ACCOUNT_REMOVED': 'channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid.removed',
    'CUSTOMER_GATEWAY_ACCOUNT_SOURCE_ADDED': 'channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid.source.:source_uuid.added',
    'CUSTOMER_GATEWAY_ACCOUNT_SOURCES_ADDED': 'channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid.source.added.list',
    'CUSTOMER_GATEWAY_ACCOUNT_SOURCE_CREATED': 'channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid.source.created',
    'CUSTOMER_GATEWAY_ACCOUNT_SOURCES_CREATED': 'channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid.source.created.list',
    'CUSTOMER_GATEWAY_ACCOUNT_SOURCE_UPDATED': 'channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid.source.updated',
    'CUSTOMER_GATEWAY_ACCOUNT_SOURCE_REMOVED': 'channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid.source.:source_uuid.removed',
    'CUSTOMER_SUBSCRIPTION_ADDED': 'channel.:channel_uuid.customer.:customer_uuid.subscription.:subscription_uuid.added',
    'CUSTOMER_SUBSCRIPTION_UPDATED': 'channel.:channel_uuid.customer.:customer_uuid.subscription.:subscription_uuid.updated',
    'CUSTOMER_SUBSCRIPTION_DEACTIVATED': 'channel.:channel_uuid.customer.:customer_uuid.subscription.:subscription_uuid.deactivated',
    'CUSTOMER_SUBSCRIPTION_ACTIVATED': 'channel.:channel_uuid.customer.:customer_uuid.subscription.:subscription_uuid.activated',
    'CUSTOMER_SUBSCRIPTION_CANCELLED': 'channel.:channel_uuid.customer.:customer_uuid.subscription.:subscription_uuid.cancelled',
    'CUSTOMER_USER_ADDED': 'channel.:channel_uuid.customer.:customer_uuid.user.:user_uuid.added',
    'CUSTOMER_USER_CREATED': 'channel.:channel_uuid.customer.:customer_uuid.user.created',
    'CUSTOMER_USER_UPDATED': 'channel.:channel_uuid.customer.:customer_uuid.user.:user_uuid.updated',
    'CUSTOMER_USERS_ADDED': 'channel.:channel_uuid.customer.:customer_uuid.user.added.list',
    'CUSTOMER_USER_REMOVED': 'channel.:channel_uuid.customer.:customer_uuid.user.:user_uuid.removed',
    'CUSTOMER_USER_PRIMARY_SET': 'channel.:channel_uuid.customer.:customer_uuid.user.:user_primary_uuid.primary_set',
};
//# sourceMappingURL=customer.js.map

/***/ }),

/***/ "./dist.browser/enums/feed.js":
/*!************************************!*\
  !*** ./dist.browser/enums/feed.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FEED_COMMANDS = {
    'CREATE_FEED': 'create.channel.:channel_uuid.feed',
    'UPDATE_FEED': 'update.channel.:channel_uuid.feed.:feed_uuid',
    'DESTROY_FEED': 'destroy.channel.:channel_uuid.feed.:feed_uuid',
    'CREATE_FEED_ITEM': 'create.channel.:channel_uuid.feed.:feed_uuid.item',
    'UPDATE_FEED_ITEM': 'update.channel.:channel_uuid.feed.:feed_uuid.item.:item_uuid',
    'MARK_FEED_ITEM': 'mark.channel.:channel_uuid.feed.:feed_uuid.item.:item_uuid',
    'DESTROY_FEED_ITEM': 'destroy.channel.:channel_uuid.feed.:feed_uuid.item.:item_uuid',
    'SET_CHANNEL_FEED_PRIMARY': 'update.channel.feed.primary'
};
exports.FEED_EVENTS = {
    'FEED_CREATED': 'channel.:channel_uuid.feed.:feed_uuid.created',
    'FEED_UPDATED': 'channel.:channel_uuid.feed.:feed_uuid.updated',
    'FEED_DESTROYED': 'channel.:channel_uuid.feed.:feed_uuid.destroyed',
    'FEED_ITEM_CREATED': 'channel.:channel_uuid.feed.:feed_uuid.item.:item_uuid.created',
    'FEED_ITEM_UPDATED': 'channel.:channel_uuid.feed.:feed_uuid.item.:item_uuid.updated',
    'FEED_ITEM_MARKED': 'channel.:channel_uuid.feed.:feed_uuid.item.:item_uuid.marked',
    'FEED_ITEM_DESTROYED': 'channel.:channel_uuid.feed.:feed_uuid.item.:item_uuid.destroyed',
};
exports.FEED_ACTIONS = {
    'GET_FEED': 'channel.feed.get',
    'LIST_FEEDS': 'channel.feed.list',
    'GET_FEED_ITEM': 'channel.feed.item.get',
    'LIST_FEED_ITEMS': 'channel.feed.item.list',
    'LIST_FEED_EVENTS': 'channel.feed.event.list',
    'GET_FEED_PRIMARY': 'channel.feed.primary',
};
//# sourceMappingURL=feed.js.map

/***/ }),

/***/ "./dist.browser/enums/fulfillment.js":
/*!*******************************************!*\
  !*** ./dist.browser/enums/fulfillment.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FULFILLMENT_COMMANDS = {
    'CREATE_FULFILLMENT': 'create.channel.:channel_uuid.service.:service_uuid.fulfillment',
    'CREATE_FULFILLMENTS': 'create.channel.:channel_uuid.service.:service_uuid.list.fulfillment',
    'UPDATE_FULFILLMENT': 'update.channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid',
    'DESTROY_FULFILLMENT': 'destroy.channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid',
    'PARTIALLY_CANCEL_FULFILLMENT': 'partially_cancel.channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid',
    'CANCEL_FULFILLMENT': 'cancel.channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid',
    'HOLD_FULFILLMENT': 'hold.channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid',
    'RELEASE_FULFILLMENT': 'release.channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid',
    'RETURN_FULFILLMENT': 'return.channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid',
    'CALCULATE_FULFILLMENT': 'calculate.channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid',
    'SEND_FULFILLMENT': 'send.channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid',
    'FULFILL_FULFILLMENT': 'fulfill.channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid',
    'UPLOAD_FULFILLMENTS': 'upload.channel.:channel_uuid.list.fulfillment',
    'PROCESS_UPLOADED_FULFILLMENTS': 'process.channel.:channel_uuid.upload.:upload_uuid.list.fulfillment',
    'CREATE_FULFILLMENT_ITEM': 'create.channel.:channel_uuid.fulfillment.:fulfillment_uuid.item',
    'CREATE_FULFILLMENT_ITEMS': 'create.channel.:channel_uuid.fulfillment.:fulfillment_uuid.list.item',
    'UPDATE_FULFILLMENT_ITEM': 'update.channel.:channel_uuid.fulfillment.:fulfillment_uuid.item.:item_uuid',
    'DESTROY_FULFILLMENT_ITEM': 'destroy.channel.:channel_uuid.fulfillment.:fulfillment_uuid.item.:item_uuid',
};
exports.FULFILLMENT_ACTIONS = {
    'GET_FULFILLMENT': 'channel.fulfillment.get',
    'LIST_FULFILLMENTS': 'channel.fulfillment.list',
    'GET_FULFILLMENT_ITEM': 'channel.fulfillment.item.get',
    'LIST_FULFILLMENT_ITEMS': 'channel.fulfillment.item.list',
    'LIST_FULFILLMENT_EVENTS': 'channel.fulfillment.event.list',
    'GET_FULFILLMENT_SERVICE': 'channel.fulfillment_service.get',
    'LIST_FULFILLMENT_SERVICES': 'channel.fulfillment_service.list',
    'GET_FULFILLMENT_SERVICE_FULFILLMENT': 'channel.fulfillment_service.fulfillment.get',
    'LIST_FULFILLMENT_SERVICE_FULFILLMENTS': 'channel.fulfillment_service.fulfillment.list',
    'GET_FULFILLMENT_SERVICE_EVENT': 'channel.fulfillment_service.event.get',
    'LIST_FULFILLMENT_SERVICE_EVENTS': 'channel.fulfillment_service.event.list',
    'GET_FULFILLMENT_SERVICE_UPLOAD': 'channel.fulfillment_service.upload.get',
    'LIST_FULFILLMENT_SERVICE_UPLOADS': 'channel.fulfillment_service.upload.list',
};
exports.FULFILLMENT_EVENTS = {
    'FULFILLMENT_CREATED': 'channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid.created',
    'FULFILLMENTS_CREATED': 'channel.:channel_uuid.service.:service_uuid.fulfillment.created.list',
    'FULFILLMENT_UPDATED': 'channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid.updated',
    'FULFILLMENT_DESTROYED': 'channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid.destroyed',
    'FULFILLMENT_PARTIALLY_CANCELLED': 'channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid.partially_cancelled',
    'FULFILLMENT_CANCELLED': 'channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid.cancelled',
    'FULFILLMENT_SENT': 'channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid.sent',
    'FULFILLMENT_HELD': 'channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid.held',
    'FULFILLMENT_RELEASED': 'channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid.released',
    'FULFILLMENT_RETURNED': 'channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid.returned',
    'FULFILLMENT_FULFILLED': 'channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid.fulfilled',
    'FULFILLMENT_CALCULATED': 'channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid.calculated',
    'FULFILLMENTS_UPLOADED': 'channel.:channel_uuid.upload.:upload_uuid.fulfillment.list',
    'FULFILLMENTS_UPLOAD_PROCESSED': 'channel.:channel_uuid.upload.:upload_uuid.processed.fulfillment.list',
    'FULFILLMENT_ITEM_CREATED': 'channel.:channel_uuid.fulfillment.:fulfillment_uuid.item.:item_uuid.created',
    'FULFILLMENT_ITEMS_CREATED': 'channel.:channel_uuid.fulfillment.:fulfillment_uuid.item.created.list',
    'FULFILLMENT_ITEM_UPDATED': 'channel.:channel_uuid.fulfillment.:fulfillment_uuid.item.:item_uuid.updated',
    'FULFILLMENT_ITEM_DESTROYED': 'channel.:channel_uuid.fulfillment.:fulfillment_uuid.item.:item_uuid.destroyed',
};
//# sourceMappingURL=fulfillment.js.map

/***/ }),

/***/ "./dist.browser/enums/gateway.js":
/*!***************************************!*\
  !*** ./dist.browser/enums/gateway.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GATEWAY_COMMANDS = {
    'CREATE_GATEWAY': 'create.channel.:channel_uuid.gateway',
    'ADD_GATEWAY': 'add.channel.:channel_uuid.gateway.:gateway_uuid',
    'UPDATE_GATEWAY': 'update.channel.:channel_uuid.gateway.:gateway_uuid',
    'DESTROY_GATEWAY': 'destroy.channel.:channel_uuid.gateway.:gateway_uuid',
    'PUBLISH_GATEWAY': 'publish.channel.:channel_uuid.gateway.:gateway_uuid',
    'UNPUBLISH_GATEWAY': 'unpublish.channel.:channel_uuid.gateway.:gateway_uuid',
    'PUBLISH_GATEWAYS': 'publish.channel.:channel_uuid.list.gateway',
    'UNPUBLISH_GATEWAYS': 'unpublish.channel.:channel_uuid.list.gateway',
    'UPLOAD_GATEWAYS': 'upload.channel.:channel_uuid.list.gateway',
    'PROCESS_UPLOADED_GATEWAYS': 'process.channel.:channel_uuid.upload.:upload_uuid.list.gateway',
    'CREATE_GATEWAY_ACCOUNT': 'create.channel.:channel_uuid.gateway.:gateway_uuid.account',
    'CREATE_GATEWAY_ACCOUNTS': 'create.channel.:channel_uuid.gateway.:gateway_uuid.list.account',
    'UPDATE_GATEWAY_ACCOUNT': 'update.channel.:channel_uuid.gateway.:gateway_uuid.account.:account_uuid',
    'DESTROY_GATEWAY_ACCOUNT': 'destroy.channel.:channel_uuid.gateway.:gateway_uuid.account.:account_uuid',
    'UPLOAD_GATEWAY_ACCOUNTS': 'upload.channel.:channel_uuid.gateway.list.account',
    'PROCESS_UPLOADED_GATEWAY_ACCOUNTS': 'process.channel.:channel_uuid.gateway.upload.:upload_uuid.list.account',
    'CREATE_GATEWAY_RECEIVER': 'create.channel.:channel_uuid.gateway.:gateway_uuid.receiver',
    'UPDATE_GATEWAY_RECEIVER': 'update.channel.:channel_uuid.gateway.:gateway_uuid.receiver.:receiver_uuid',
    'DESTROY_GATEWAY_RECEIVER': 'destroy.channel.:channel_uuid.gateway.:gateway_uuid.receiver.:receiver_uuid',
    'UPLOAD_GATEWAY_RECEIVERS': 'upload.channel.:channel_uuid.gateway.list.receiver',
    'PROCESS_UPLOADED_GATEWAY_RECEIVERS': 'process.channel.:channel_uuid.gateway.upload.:upload_uuid.list.receiver',
    'CREATE_GATEWAY_SOURCE': 'create.channel.:channel_uuid.gateway.:gateway_uuid.account.:account_uuid.source',
    'CREATE_GATEWAY_SOURCES': 'create.channel.:channel_uuid.gateway.:gateway_uuid.account.:account_uuid.list.source',
    'UPDATE_GATEWAY_SOURCE': 'update.channel.:channel_uuid.gateway.:gateway_uuid.account.:account_uuid.source.:source_uuid',
    'DESTROY_GATEWAY_SOURCE': 'destroy.channel.:channel_uuid.gateway.:gateway_uuid.account.:account_uuid.source.:source_uuid',
    'UPLOAD_GATEWAY_SOURCES': 'upload.channel.:channel_uuid.gateway.list.source',
    'PROCESS_UPLOADED_GATEWAY_SOURCES': 'process.channel.:channel_uuid.gateway.upload.:upload_uuid.list.source',
};
exports.GATEWAY_ACTIONS = {
    'GET_GATEWAY': 'channel.gateway.get',
    'LIST_GATEWAYS': 'channel.gateway.list',
    'GET_PUBLIC_GATEWAY': 'channel.public.gateway.get',
    'LIST_PUBLIC_GATEWAYS': 'channel.public.gateway.list',
    'GET_GATEWAY_RECEIVER': 'channel.gateway.receiver.get',
    'LIST_GATEWAY_RECEIVERS': 'channel.gateway.receiver.list',
    'GET_GATEWAY_ACCOUNT': 'channel.gateway.account.get',
    'LIST_GATEWAY_ACCOUNTS': 'channel.gateway.account.list',
    'GET_GATEWAY_SOURCE': 'channel.gateway.account.source.get',
    'LIST_GATEWAY_SOURCES': 'channel.gateway.account.source.list',
    'LIST_GATEWAY_EVENTS': 'channel.gateway.event.list',
    'GET_GATEWAY_UPLOAD': 'channel.gateway.upload.get',
    'LIST_GATEWAY_UPLOADS': 'channel.gateway.upload.list',
    'GET_GATEWAY_FORM': 'channel.gateway.form.get',
    'LIST_GATEWAY_FORMS': 'channel.gateway.form.list',
    'LIST_PUBLIC_GATEWAY_FORMS': 'channel.public.gateway.form.list',
};
exports.GATEWAY_EVENTS = {
    'GATEWAY_CREATED': 'channel.:channel_uuid.gateway.:gateway_uuid.created',
    'GATEWAY_ADDED': 'channel.:channel_uuid.gateway.:gateway_uuid.added',
    'GATEWAY_UPDATED': 'channel.:channel_uuid.gateway.:gateway_uuid.updated',
    'GATEWAY_DESTROYED': 'channel.:channel_uuid.gateway.:gateway_uuid.destroyed',
    'GATEWAYS_UPLOADED': 'channel.:channel_uuid.gateway.upload.:upload_uuid.list',
    'GATEWAYS_UPLOAD_PROCESSED': 'channel.:channel_uuid.gateway.upload.:upload_uuid.processed.list',
    'GATEWAY_PUBLISHED': 'channel.:channel_uuid.gateway.:gateway_uuid.published',
    'GATEWAY_UNPUBLISHED': 'channel.:channel_uuid.gateway.:gateway_uuid.unpublished',
    'GATEWAYS_PUBLISHED': 'channel.:channel_uuid.gateway.:gateway_uuid.published.list',
    'GATEWAYS_UNPUBLISHED': 'channel.:channel_uuid.gateway.:gateway_uuid.unpublished.list',
    'GATEWAY_ACCOUNT_CREATED': 'channel.:channel_uuid.gateway.:gateway_uuid.account.:account_uuid.created',
    'GATEWAY_ACCOUNTS_CREATED': 'channel.:channel_uuid.gateway.:gateway_uuid.account.created.list',
    'GATEWAY_ACCOUNT_UPDATED': 'channel.:channel_uuid.gateway.:gateway_uuid.account.:account_uuid.updated',
    'GATEWAY_ACCOUNT_DESTROYED': 'channel.:channel_uuid.gateway.:gateway_uuid.account.:account_uuid.destroyed',
    'GATEWAY_ACCOUNTS_UPLOADED': 'channel.:channel_uuid.gateway.account.upload.:upload_uuid.list',
    'GATEWAY_ACCOUNTS_UPLOAD_PROCESSED': 'channel.:channel_uuid.gateway.account.upload.:upload_uuid.processed.list',
    'GATEWAY_SOURCE_CREATED': 'channel.:channel_uuid.gateway.:gateway_uuid.account.:account_uuid.source.:source_uuid.created',
    'GATEWAY_SOURCES_CREATED': 'channel.:channel_uuid.gateway.:gateway_uuid.account.:account_uuid.source.:source_uuid.created.list',
    'GATEWAY_SOURCE_UPDATED': 'channel.:channel_uuid.gateway.:gateway_uuid.account.:account_uuid.source.:source_uuid.updated',
    'GATEWAY_SOURCE_DESTROYED': 'channel.:channel_uuid.gateway.:gateway_uuid.account.:account_uuid.source.:source_uuid.destroyed',
    'GATEWAY_SOURCES_UPLOADED': 'channel.:channel_uuid.gateway.source.upload.:upload_uuid.list',
    'GATEWAY_SOURCES_UPLOAD_PROCESSED': 'channel.:channel_uuid.gateway.source.upload.:upload_uuid.processed.list',
    'GATEWAY_RECEIVER_CREATED': 'channel.:channel_uuid.gateway.:gateway_uuid.receiver.:receiver_uuid.created',
    'GATEWAY_RECEIVER_UPDATED': 'channel.:channel_uuid.gateway.:gateway_uuid.receiver.:receiver_uuid.updated',
    'GATEWAY_RECEIVER_DESTROYED': 'channel.:channel_uuid.gateway.:gateway_uuid.receiver.:receiver_uuid.destroyed',
    'GATEWAY_RECEIVERS_UPLOADED': 'channel.:channel_uuid.gateway.receiver.upload.:upload_uuid.list',
    'GATEWAY_RECEIVERS_UPLOAD_PROCESSED': 'channel.:channel_uuid.gateway.receiver.upload.:upload_uuid.processed.list',
};
//# sourceMappingURL=gateway.js.map

/***/ }),

/***/ "./dist.browser/enums/index.js":
/*!*************************************!*\
  !*** ./dist.browser/enums/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = __webpack_require__(/*! ./auth */ "./dist.browser/enums/auth.js");
var application_1 = __webpack_require__(/*! ./application */ "./dist.browser/enums/application.js");
var billing_model_1 = __webpack_require__(/*! ./billing_model */ "./dist.browser/enums/billing_model.js");
var cart_1 = __webpack_require__(/*! ./cart */ "./dist.browser/enums/cart.js");
var collection_1 = __webpack_require__(/*! ./collection */ "./dist.browser/enums/collection.js");
var channel_1 = __webpack_require__(/*! ./channel */ "./dist.browser/enums/channel.js");
var country_1 = __webpack_require__(/*! ./country */ "./dist.browser/enums/country.js");
var customer_1 = __webpack_require__(/*! ./customer */ "./dist.browser/enums/customer.js");
var feed_1 = __webpack_require__(/*! ./feed */ "./dist.browser/enums/feed.js");
var fulfillment_1 = __webpack_require__(/*! ./fulfillment */ "./dist.browser/enums/fulfillment.js");
var gateway_1 = __webpack_require__(/*! ./gateway */ "./dist.browser/enums/gateway.js");
var offer_1 = __webpack_require__(/*! ./offer */ "./dist.browser/enums/offer.js");
var order_1 = __webpack_require__(/*! ./order */ "./dist.browser/enums/order.js");
var permission_1 = __webpack_require__(/*! ./permission */ "./dist.browser/enums/permission.js");
var subscription_1 = __webpack_require__(/*! ./subscription */ "./dist.browser/enums/subscription.js");
var task_1 = __webpack_require__(/*! ./task */ "./dist.browser/enums/task.js");
var transaction_1 = __webpack_require__(/*! ./transaction */ "./dist.browser/enums/transaction.js");
var user_1 = __webpack_require__(/*! ./user */ "./dist.browser/enums/user.js");
var vendor_1 = __webpack_require__(/*! ./vendor */ "./dist.browser/enums/vendor.js");
var product_1 = __webpack_require__(/*! ./product */ "./dist.browser/enums/product.js");
exports.ACTIONS = __assign({}, auth_1.AUTH_ACTIONS, application_1.APPLICATION_ACTIONS, billing_model_1.BILLING_MODEL_ACTIONS, cart_1.CART_ACTIONS, channel_1.CHANNEL_ACTIONS, collection_1.COLLECTION_ACTIONS, country_1.COUNTRY_ACTIONS, customer_1.CUSTOMER_ACTIONS, feed_1.FEED_ACTIONS, fulfillment_1.FULFILLMENT_ACTIONS, gateway_1.GATEWAY_ACTIONS, offer_1.OFFER_ACTIONS, order_1.ORDER_ACTIONS, permission_1.PERMISSION_ACTIONS, product_1.PRODUCT_ACTIONS, subscription_1.SUBSCRIPTION_ACTIONS, task_1.TASK_ACTIONS, transaction_1.TRANSACTION_ACTIONS, user_1.USER_ACTIONS, vendor_1.VENDOR_ACTIONS);
exports.COMMANDS = __assign({}, auth_1.AUTH_COMMANDS, application_1.APPLICATION_COMMANDS, billing_model_1.BILLING_MODEL_COMMANDS, cart_1.CART_COMMANDS, channel_1.CHANNEL_COMMANDS, collection_1.COLLECTION_COMMANDS, country_1.COUNTRY_COMMANDS, customer_1.CUSTOMER_COMMANDS, feed_1.FEED_COMMANDS, fulfillment_1.FULFILLMENT_COMMANDS, gateway_1.GATEWAY_COMMANDS, offer_1.OFFER_COMMANDS, order_1.ORDER_COMMANDS, permission_1.PERMISSION_COMMANDS, product_1.PRODUCT_COMMANDS, subscription_1.SUBSCRIPTION_COMMANDS, task_1.TASK_COMMANDS, transaction_1.TRANSACTION_COMMANDS, user_1.USER_COMMANDS, vendor_1.VENDOR_COMMANDS);
exports.EVENTS = __assign({}, auth_1.AUTH_EVENTS, application_1.APPLICATION_EVENTS, billing_model_1.BILLING_MODEL_EVENTS, collection_1.COLLECTION_EVENTS, cart_1.CART_EVENTS, channel_1.CHANNEL_EVENTS, country_1.COUNTRY_EVENTS, customer_1.CUSTOMER_EVENTS, feed_1.FEED_EVENTS, fulfillment_1.FULFILLMENT_EVENTS, gateway_1.GATEWAY_EVENTS, offer_1.OFFER_EVENTS, order_1.ORDER_EVENTS, permission_1.PERMISSION_EVENTS, product_1.PRODUCT_EVENTS, subscription_1.SUBSCRIPTION_EVENTS, task_1.TASK_EVENTS, transaction_1.TRANSACTION_EVENTS, user_1.USER_EVENTS, vendor_1.VENDOR_EVENTS);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/enums/offer.js":
/*!*************************************!*\
  !*** ./dist.browser/enums/offer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OFFER_COMMANDS = {
    'CREATE_OFFER': 'create.channel.:channel_uuid.offer',
    'ADD_OFFER': 'add.channel.:channel_uuid.offer.:offer_uuid',
    'UPDATE_OFFER': 'update.channel.:channel_uuid.offer.:offer_uuid',
    'DESTROY_OFFER': 'destroy.channel.:channel_uuid.offer.:offer_uuid',
    'REMOVE_OFFER': 'remove.channel.:channel_uuid.offer.:offer_uuid',
    'PUBLISH_OFFER': 'publish.channel.:channel_uuid.offer.:offer_uuid',
    'CALCULATE_OFFER': 'calculate.channel.:channel_uuid.offer.:offer_uuid',
    'UNPUBLISH_OFFER': 'unpublish.channel.:channel_uuid.offer.:offer_uuid',
    'UNPUBLISH_OFFERS': 'unpublish.channel.:channel_uuid.list.offer',
    'ADD_OFFER_CAMPAIGN': 'add.channel.:channel_uuid.offer.:offer_uuid.campaign:.collection_uuid',
    'REMOVE_OFFER_CAMPAIGN': 'remove.channel.:channel_uuid.offer.:offer_uuid.campaign:.collection_uuid',
    'ADD_OFFER_IMAGE': 'add.channel.:channel_uuid.offer.:offer_uuid.image.:image_uuid',
    'ADD_OFFER_IMAGES': 'add.channel.:channel_uuid.offer.:offer_uuid.list.image',
    'MOVE_OFFER_IMAGE': 'move.channel.:channel_uuid.offer.:offer_uuid.image.:image_uuid',
    'REMOVE_OFFER_IMAGE': 'remove.channel.:channel_uuid.offer.:offer_uuid.image.:image_uuid',
    'UPLOAD_OFFERS': 'upload.channel.:channel_uuid.list.offer',
    'PROCESS_UPLOADED_OFFERS': 'process.channel.:channel_uuid.upload.:upload_uuid.list.offer',
    'UPLOAD_OFFER_METADATA': 'upload.channel.:channel_uuid.offer.list.metadata',
    'PROCESS_UPLOADED_OFFER_METADATA': 'process.channel.:channel_uuid.offer.upload.:upload_uuid.list.metadata',
    'ADD_OFFER_VARIANT': 'add.channel.:channel_uuid.offer.:offer_uuid.variant.:variant_uuid',
    'ADD_OFFER_VARIANTS': 'add.channel.:channel_uuid.offer.list.variant',
    'UPDATE_OFFER_VARIANT': 'update.channel.:channel_uuid.offer.:offer_uuid.variant.:variant_uuid',
    'REMOVE_OFFER_VARIANT': 'remove.channel.:channel_uuid.offer.:offer_uuid.variant.:variant_uuid',
    'ADD_OFFER_BILLING_MODEL': 'add.channel.:channel_uuid.offer.:offer_uuid.billing_model.:model_uuid',
    'ADD_OFFER_BILLING_MODELS': 'add.channel.:channel_uuid.offer.:offer_uuid.list.billing_model',
    'REMOVE_OFFER_BILLING_MODEL': 'remove.channel.:channel_uuid.offer.:offer_uuid.billing_model.:model_uuid',
    'ADD_OFFER_UP_SELL': 'add.channel.:channel_uuid.offer.:offer_uuid.up_sell.:associated_offer_uuid',
    'ADD_OFFER_UP_SELLS': 'add.channel.:channel_uuid.offer.list.up_sell',
    'REMOVE_OFFER_UP_SELL': 'remove.channel.:channel_uuid.offer.:offer_uuid.up_sell.:associated_offer_uuid',
    'ADD_OFFER_CROSS_SELL': 'add.channel.:channel_uuid.offer.:offer_uuid.cross_sell.:associated_offer_uuid',
    'ADD_OFFER_CROSS_SELLS': 'add.channel.:channel_uuid.offer.list.cross_sell',
    'REMOVE_OFFER_CROSS_SELL': 'remove.channel.:channel_uuid.offer.:offer_uuid.cross_sell.:associated_offer_uuid',
    'ADD_OFFER_DOWN_SELL': 'add.channel.:channel_uuid.offer.:offer_uuid.down_sell.:associated_offer_uuid',
    'ADD_OFFER_DOWN_SELLS': 'add.channel.:channel_uuid.offer.list.down_sell',
    'REMOVE_OFFER_DOWN_SELL': 'remove.:channel_uuid.channel.offer.:offer_uuid.down_sell.:associated_offer_uuid',
};
exports.OFFER_ACTIONS = {
    'GET_OFFER': 'channel.offer.get',
    'FIND_OFFER': 'channel.offer.get',
    'LIST_OFFERS': 'channel.offer.list',
    'FIND_OFFERS': 'channel.offer.list',
    'GET_PUBLIC_OFFER': 'channel.public.offer.get',
    'FIND_PUBLIC_OFFER': 'channel.public.offer.get',
    'LIST_PUBLIC_OFFERS': 'channel.public.offer.list',
    'FIND_PUBLIC_OFFERS': 'channel.public.offer.list',
    'LIST_OFFER_EVENTS': 'channel.offer.event.list',
    'GET_OFFER_CAMPAIGN': 'channel.offer.campaign.get',
    'LIST_OFFER_CAMPAIGNS': 'channel.offer.campaign.list',
    'GET_PUBLIC_OFFER_CAMPAIGN': 'channel.public.offer.campaign.get',
    'LIST_PUBLIC_OFFER_CAMPAIGNS': 'channel.public.offer.campaign.list',
    'GET_OFFER_UPLOAD_RESULT': 'channel.offer.upload_result.get',
    'LIST_OFFER_UPLOAD_RESULTS': 'channel.offer.upload_result.list',
    'GET_OFFER_UPLOAD': 'channel.offer.upload.get',
    'LIST_OFFER_UPLOADS': 'channel.offer.upload.list',
    'GET_OFFER_METADATA_UPLOAD_RESULT': 'channel.offer.metadata.upload_result.get',
    'LIST_OFFER_METADATA_UPLOAD_RESULTS': 'channel.offer.metadata.upload_result.list',
    'GET_OFFER_METADATA_UPLOAD': 'channel.offer.metadata.upload.get',
    'LIST_OFFER_METADATA_UPLOADS': 'channel.offer.metadata.upload.list',
    'GET_OFFER_PRODUCT': 'channel.offer.product.get',
    'GET_OFFER_VARIANT': 'channel.offer.variant.get',
    'LIST_OFFER_VARIANTS': 'channel.offer.variant.list',
    'FIND_OFFER_VARIANTS': 'channel.offer.variant.list',
    'GET_PUBLIC_OFFER_VARIANT': 'channel.public.offer.variant.get',
    'LIST_PUBLIC_OFFER_VARIANTS': 'channel.public.offer.variant.list',
    'FIND_PUBLIC_OFFER_VARIANTS': 'channel.public.offer.variant.list',
    'GET_OFFER_UP_SELL': 'channel.offer.up_sell.get',
    'LIST_OFFER_UP_SELLS': 'channel.offer.up_sell.list',
    'GET_OFFER_CROSS_SELL': 'channel.offer.cross_sell.get',
    'LIST_OFFER_CROSS_SELLS': 'channel.offer.cross_sell.list',
    'GET_OFFER_DOWN_SELL': 'channel.offer.down_sell.get',
    'LIST_OFFER_DOWN_SELLS': 'channel.offer.down_sell.list',
};
exports.OFFER_EVENTS = {
    'OFFER_CREATED': 'channel.:channel_uuid.offer.:offer_uuid.created',
    'OFFER_ADDED': 'channel.:channel_uuid.offer.:offer_uuid.added',
    'OFFER_UPDATED': 'channel.:channel_uuid.offer.:offer_uuid.updated',
    'OFFER_DESTROYED': 'channel.:channel_uuid.offer.:offer_uuid.destroyed',
    'OFFERS_UPLOADED': 'channel.:channel_uuid.offer.uploaded.list',
    'OFFERS_UPLOAD_PROCESSED': 'channel.:channel_uuid.offer.upload.processed.list',
    'OFFERS_METADATA_UPLOADED': 'channel.:channel_uuid.offer.metadata.uploaded.list',
    'OFFERS_METADATA_UPLOAD_PROCESSED': 'channel.:channel_uuid.offer.metadata.upload.processed.list',
    'OFFER_REMOVED': 'channel.:channel_uuid.offer.:offer_uuid.removed',
    'OFFER_PUBLISHED': 'channel.:channel_uuid.offer.:offer_uuid.published',
    'OFFER_UNPUBLISHED': 'channel.:channel_uuid.offer.:offer_uuid.unpublished',
    'OFFERS_UNPUBLISHED': 'channel.:channel_uuid.offer.:offer_uuid.unpublished.list',
    'OFFER_CALCULATED': 'channel.:channel_uuid.offer.:offer_uuid.calculated',
    'OFFER_VARIANT_ADDED': 'channel.:channel_uuid.offer.:offer_uuid.variant.:variant_uuid.added',
    'OFFER_VARIANTS_ADDED': 'channel.:channel_uuid.offer.:offer_uuid.variant.added.list',
    'OFFER_VARIANT_UPDATED': 'channel.:channel_uuid.offer.:offer_uuid.variant.:variant_uuid.updated',
    'OFFER_VARIANT_REMOVED': 'channel.:channel_uuid.offer.:offer_uuid.variant.:variant_uuid.removed',
    'OFFER_VARIANT_PUBLISHED': 'channel.:channel_uuid.offer.:offer_uuid.variant.:variant_uuid.published',
    'OFFER_VARIANT_UNPUBLISHED': 'channel.:channel_uuid.offer.:offer_uuid.variant.:variant_uuid.unpublished',
    'OFFER_BILLING_MODEL_ADDED': 'channel.:channel_uuid.offer.:offer_uuid.billing_model.:model_uuid.added',
    'OFFER_BILLING_MODELS_ADDED': 'channel.:channel_uuid.offer.:offer_uuid.billing_model.added.list',
    'OFFER_BILLING_MODEL_REMOVED': 'channel.:channel_uuid.offer.:offer_uuid.billing_model.:model_uuid.removed',
    'OFFER_CAMPAIGN_ADDED': 'channel.:channel_uuid.offer.:offer_uuid.campaign.:collection_uuid.added',
    'OFFER_CAMPAIGN_REMOVED': 'channel.:channel_uuid.offer.:offer_uuid.campaign.:collection_uuid.removed',
    'OFFER_UP_SELL_ADDED': 'channel.:channel_uuid.offer.:offer_uuid.up_sell.:associated_offer_uuid.added',
    'OFFER_UP_SELLS_ADDED': 'channel.:channel_uuid.offer.:offer_uuid.up_sell.added.list',
    'OFFER_UP_SELL_REMOVED': 'channel.:channel_uuid.offer.:offer_uuid.up_sell.:associated_offer_uuid.removed',
    'OFFER_CROSS_SELL_ADDED': 'channel.:channel_uuid.offer.:offer_uuid.cross_sell.:associated_offer_uuid.added',
    'OFFER_CROSS_SELLS_ADDED': 'channel.:channel_uuid.offer.:offer_uuid.cross_sell.added.list',
    'OFFER_CROSS_SELL_REMOVED': 'channel.:channel_uuid.offer.:offer_uuid.cross_sell.:associated_offer_uuid.removed',
    'OFFER_DOWN_SELL_ADDED': 'channel.:channel_uuid.offer.:offer_uuid.down_sell.:associated_offer_uuid.added',
    'OFFER_DOWN_SELLS_ADDED': 'channel.:channel_uuid.offer.:offer_uuid.down_sell.added.list',
    'OFFER_DOWN_SELL_REMOVED': 'channel.:channel_uuid.offer.:offer_uuid.down_sell.:associated_offer_uuid.removed',
    'OFFER_IMAGE_ADDED': 'channel.:channel_uuid.offer.:offer_uuid.image.:image_uuid.added',
    'OFFER_IMAGES_ADDED': 'channel.:channel_uuid.offer.:offer_uuid.image.added.list',
    'OFFER_IMAGE_MOVED': 'channel.:channel_uuid.offer.:offer_uuid.image.:image_uuid.moved',
    'OFFER_IMAGE_REMOVED': 'channel.:channel_uuid.offer.:offer_uuid.image.:image_uuid.removed',
};
//# sourceMappingURL=offer.js.map

/***/ }),

/***/ "./dist.browser/enums/order.js":
/*!*************************************!*\
  !*** ./dist.browser/enums/order.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ORDER_COMMANDS = {
    'CREATE_ORDER': 'create.channel.:channel_uuid.order',
    'UPDATE_ORDER': 'update.channel.:channel_uuid.order.:order_uuid',
    'DESTROY_ORDER': 'destroy.channel.:channel_uuid.order.:order_uuid',
    'PAY_ORDER': 'pay.channel.:channel_uuid.order.:order_uuid',
    'PARTIALLY_PAY_ORDER': 'partially_pay.channel.:channel_uuid.order.:order_uuid',
    'FULFILL_ORDER': 'fulfill.channel.:channel_uuid.order.:order_uuid',
    'PARTIALLY_FULFILL_ORDER': 'partially_fulfill.channel.:channel_uuid.order.:order_uuid',
    'REFUND_ORDER': 'refund.channel.:channel_uuid.order.:order_uuid',
    'PARTIALLY_REFUND_ORDER': 'partially_refund.channel.:channel_uuid.order.:order_uuid',
    'CLOSE_ORDER': 'close.channel.:channel_uuid.order.:order_uuid',
    'CANCEL_ORDER': 'cancel.channel.:channel_uuid.order.:order_uuid',
    'CALCULATE_ORDER': 'calculate.channel.:channel_uuid.order.:order_uuid',
    'SET_ORDER_CUSTOMER': 'set.channel.:channel_uuid.order.:order_uuid.customer',
    'SET_ORDER_BILLING': 'set.channel.:channel_uuid.order.:order_uuid.address_billing',
    'SET_ORDER_SHIPPING': 'set.channel.:channel_uuid.order.:order_uuid.address_shipping',
    'SET_ORDER_PAYMENT': 'set.channel.:channel_uuid.order.:order_uuid.payment_details',
    'SET_ORDER_FULFILLMENT': 'set.channel.:channel_uuid.order.:order_uuid.fulfillment_details',
    'ADD_ORDER_SHIPPING_LINE': 'add.channel.:channel_uuid.order.:order_uuid.lines_shipping',
    'ADD_ORDER_TAX_LINE': 'add.channel.:channel_uuid.order.:order_uuid.lines_taxes',
    'ADD_ORDER_OVERRIDE_LINE': 'add.channel.:channel_uuid.order.:order_uuid.lines_pricing_overrides',
    'REMOVE_ORDER_SHIPPING_LINE': 'remove.channel.:channel_uuid.order.:order_uuid.lines_shipping',
    'REMOVE_ORDER_TAX_LINE': 'remove.channel.:channel_uuid.order.:order_uuid.lines_taxes',
    'REMOVE_ORDER_OVERRIDE_LINE': 'remove.channel.:channel_uuid.order.:order_uuid.lines_pricing_overrides',
    'UPLOAD_ORDERS': 'upload.channel.:channel_uuid.order',
    'PROCESS_UPLOADED_ORDERS': 'process.upload.channel.:channel_uuid.order',
    'CREATE_ORDER_ITEM': 'create.channel.:channel_uuid.order.:order_uuid.item',
    'CREATE_ORDER_ITEMS': 'create.channel.:channel_uuid.order.:order_uuid.list.item',
    'UPDATE_ORDER_ITEM': 'update.channel.:channel_uuid.order.:order_uuid.item.:item_uuid',
    'REMOVE_ORDER_ITEM': 'remove.channel.:channel_uuid.order.:order_uuid.item.:item_uuid',
    'DESTROY_ORDER_ITEM': 'destroy.channel.:channel_uuid.order.:order_uuid.item.:item_uuid',
    'INCREASE_ORDER_ITEM_QUANTITY': 'create.channel.:channel_uuid.order.:order_uuid.item.:item_uuid.quantity.increase',
    'DECREASE_ORDER_ITEM_QUANTITY': 'create.channel.:channel_uuid.order.:order_uuid.item.:item_uuid.quantity.decrease',
    'SET_ORDER_ITEM_PAYMENT': 'set.channel.:channel_uuid.order.:order_uuid.item.:item_uuid.payment_details',
    'SET_ORDER_ITEM_FULFILLMENT': 'set.channel.:channel_uuid.order.:order_uuid.item.:item_uuid.fulfillment_details',
    'ADD_ORDER_ITEM_SHIPPING_LINE': 'add.channel.:channel_uuid.order.:order_uuid.item.:item_uuid.lines_shipping',
    'ADD_ORDER_ITEM_TAX_LINE': 'add.channel.:channel_uuid.order.:order_uuid.item.:item_uuid.lines_taxes',
    'ADD_ORDER_ITEM_OVERRIDE_LINE': 'add.channel.:channel_uuid.order.:order_uuid.item.:item_uuid.lines_pricing_overrides',
    'REMOVE_ORDER_ITEM_SHIPPING_LINE': 'remove.channel.:channel_uuid.order.:order_uuid.item..:item_uuidlines_shipping',
    'REMOVE_ORDER_ITEM_TAX_LINE': 'remove.channel.:channel_uuid.order.:order_uuid.item.:item_uuid.lines_taxes',
    'REMOVE_ORDER_ITEM_OVERRIDE_LINE': 'remove.channel.:channel_uuid.order.:order_uuid.item.:item_uuid.lines_pricing_overrides',
    'CREATE_ORDER_TRANSACTION': 'create.channel.:channel_uuid.order.:order_uuid.transaction',
    'CREATE_ORDER_TRANSACTIONS': 'create.channel.:channel_uuid.order.:order_uuid.list.transaction',
    'CREATE_ORDER_FULFILLMENT': 'create.channel.:channel_uuid.order.:order_uuid.fulfillment',
    'CREATE_ORDER_FULFILLMENTS': 'create.channel.:channel_uuid.order.:order_uuid.list.fulfillment',
    'AUTHORIZE_ORDER_TRANSACTION': 'authorize.channel.:channel_uuid.order.:order_uuid.transaction.:transaction_uuid',
    'PARTIALLY_AUTHORIZE_ORDER_TRANSACTION': 'partially_authorize.channel.:channel_uuid.order.:order_uuid.transaction.:transaction_uuid',
    'CAPTURE_ORDER_TRANSACTION': 'capture.channel.:channel_uuid.order.:order_uuid.transaction.:transaction_uuid',
    'PARTIALLY_CAPTURE_ORDER_TRANSACTION': 'partially_capture.channel.:channel_uuid.order.:order_uuid.transaction.:transaction_uuid',
    'VOID_ORDER_TRANSACTION': 'void.channel.:channel_uuid.order.:order_uuid.transaction.:transaction_uuid',
    'REFUND_ORDER_TRANSACTION': 'refund.channel.:channel_uuid.order.:order_uuid.transaction.:transaction_uuid',
    'PARTIALLY_REFUND_ORDER_TRANSACTION': 'partially_refund.channel.:channel_uuid.order.:order_uuid.transaction.:transaction_uuid',
    'SALE_ORDER_TRANSACTION': 'sale.channel.:channel_uuid.order.:order_uuid.transaction.:transaction_uuid',
    'PARTIALLY_SALE_ORDER_TRANSACTION': 'partially_sale.channel.:channel_uuid.order.:order_uuid.transaction.:transaction_uuid',
    'CANCEL_ORDER_TRANSACTION': 'cancel.channel.:channel_uuid.order.:order_uuid.transaction.:transaction_uuid',
    'FULFILL_ORDER_ITEM': 'fulfill.channel.:channel_uuid.order.:order_uuid.item.:item_uuid',
    'FULFILL_ORDER_ITEMS': 'fulfill.channel.:channel_uuid.order.:order_uuid.list.item',
    'RETURN_ORDER_ITEM': 'return.channel.:channel_uuid.order.:order_uuid.item.:item_uuid',
    'RETURN_ORDER_ITEMS': 'return.channel.:channel_uuid.order.:order_uuid.list.item',
    'RESTOCK_ORDER_ITEM': 'restock.channel.:channel_uuid.order.:order_uuid.item.:item_uuid',
    'RESTOCK_ORDER_ITEMS': 'restock.channel.:channel_uuid.order.:order_uuid.list.item',
};
exports.ORDER_ACTIONS = {
    'GET_ORDER': 'channel.order.get',
    'LIST_ORDERS': 'channel.order.list',
    'GET_ORDER_CUSTOMER': 'channel.order.customer.get',
    'GET_ORDER_TRANSACTION': 'channel.order.transaction.get',
    'LIST_ORDER_TRANSACTIONS': 'channel.order.transaction.list',
    'LIST_ORDER_TRANSACTION_EVENTS': 'channel.order.transaction.event.list',
    'GET_ORDER_FULFILLMENT': 'channel.order.fulfillment.get',
    'LIST_ORDER_FULFILLMENTS': 'channel.order.fulfillment.list',
    'LIST_ORDER_FULFILLMENT_EVENTS': 'channel.order.fulfillment.event.list',
    'LIST_ORDER_EVENTS': 'channel.order.event.list',
    'GET_ORDER_BILLING': 'channel.order.address_billing.get',
    'GET_ORDER_SHIPPING': 'channel.order.address_shipping.get',
    'GET_ORDER_PAYMENT_DETAILS': 'channel.order.payment_details.get',
    'GET_ORDER_FULFILLMENT_DETAILS': 'channel.order.fulfillment_details.get',
    'LIST_ORDER_SHIPPING_LINES': 'channel.order.lines_shipping.list',
    'LIST_ORDER_TAX_LINES': 'channel.order.lines_taxes.list',
    'LIST_ORDER_OVERRIDE_LINES': 'channel.order.lines_pricing_overrides.list',
    'GET_ORDER_ITEM': 'channel.order.item.get',
    'LIST_ORDER_ITEMS': 'channel.order.item.list',
    'GET_ORDER_ITEM_PAYMENT_DETAILS': 'channel.order.item.payment_details.get',
    'GET_ORDER_ITEM_FULFILLMENT_DETAILS': 'channel.order.item.fulfillment_details.get',
    'LIST_ORDER_ITEM_SHIPPING_LINES': 'channel.order.item.lines_shipping.list',
    'LIST_ORDER_ITEM_TAX_LINES': 'channel.order.item.lines_taxes.list',
    'LIST_ORDER_ITEM_OVERRIDE_LINES': 'channel.order.item.lines_pricing_overrides.list',
    'GET_ORDER_UPLOAD': 'channel.order.upload.get',
    'LIST_ORDER_UPLOADS': 'channel.order.upload.list',
};
exports.ORDER_EVENTS = {
    'ORDER_CREATED': 'channel.:channel_uuid.order.:order_uuid.created',
    'ORDER_UPDATED': 'channel.:channel_uuid.order.:order_uuid.updated',
    'ORDER_DESTROYED': 'channel.:channel_uuid.order.:order_uuid.destroyed',
    'ORDER_PAID': 'channel.:channel_uuid.order.:order_uuid.paid',
    'ORDER_PARTIALLY_PAID': 'channel.:channel_uuid.order.:order_uuid.partially_paid',
    'ORDER_FULFILLED': 'channel.:channel_uuid.order.:order_uuid.fulfilled',
    'ORDER_PARTIALLY_FULFILLED': 'channel.:channel_uuid.order.:order_uuid.partially_fulfilled',
    'ORDER_REFUNDED': 'channel.:channel_uuid.order.:order_uuid.refunded',
    'ORDER_PARTIALLY_REFUNDED': 'channel.:channel_uuid.order.:order_uuid.partially_refunded',
    'ORDER_CLOSED': 'channel.:channel_uuid.order.:order_uuid.closed',
    'ORDER_CANCELLED': 'channel.:channel_uuid.order.:order_uuid.cancelled',
    'ORDER_CUSTOMER_SET': 'channel.:channel_uuid.order.:order_uuid.customer.set',
    'ORDER_BILLING_SET': 'channel.:channel_uuid.order.:order_uuid.address_billing.set',
    'ORDER_SHIPPING_SET': 'channel.:channel_uuid.order.:order_uuid.address_shipping.set',
    'ORDER_PAYMENT_SET': 'channel.:channel_uuid.order.:order_uuid.payment_details.set',
    'ORDER_FULFILLMENT_SET': 'channel.:channel_uuid.order.:order_uuid.fulfillment_details.set',
    'ORDER_SHIPPING_LINE_ADDED': 'channel.:channel_uuid.order.:order_uuid.lines_shipping.added',
    'ORDER_TAX_LINE_ADDED': 'channel.:channel_uuid.order.:order_uuid.lines_taxes.added',
    'ORDER_OVERRIDE_LINE_ADDED': 'channel.:channel_uuid.order.:order_uuid.lines_pricing_overrides.added',
    'ORDER_SHIPPING_LINE_REMOVED': 'channel.:channel_uuid.order.:order_uuid.lines_shipping.removed',
    'ORDER_TAX_LINE_REMOVED': 'channel.:channel_uuid.order.:order_uuid.lines_taxes.removed',
    'ORDER_OVERRIDE_LINE_REMOVED': 'channel.:channel_uuid.order.:order_uuid.lines_pricing_overrides.removed',
    'ORDER_CALCULATED': 'channel.:channel_uuid.order.:order_uuid.calculated',
    'ORDERS_UPLOADED': 'channel.:channel_uuid.order.uploaded.list',
    'ORDERS_UPLOAD_PROCESSED': 'channel.:channel_uuid.order.upload.processed.list',
    'ORDER_ITEM_CREATED': 'channel.:channel_uuid.order.:order_uuid.item.:item_uuid.created',
    'ORDER_ITEMS_CREATED': 'channel.:channel_uuid.order.:order_uuid.item.created.list',
    'ORDER_ITEM_UPDATED': 'channel.:channel_uuid.order.:order_uuid.item.:item_uuid.updated',
    'ORDER_ITEM_QUANTITY_INCREASED': 'channel.:channel_uuid.order.:order_uuid.item.:item_uuid.quantity.increased',
    'ORDER_ITEM_QUANTITY_DECREASED': 'channel.:channel_uuid.order.:order_uuid.item.:item_uuid.quantity.decreased',
    'ORDER_ITEM_REMOVED': 'channel.:channel_uuid.order.:order_uuid.item.:item_uuid.removed',
    'ORDER_ITEM_DESTROYED': 'channel.:channel_uuid.order.:order_uuid.item.:item_uuid.destroyed',
    'ORDER_ITEM_PAYMENT_SET': 'channel.:channel_uuid.order.:order_uuid.item.:item_uuid.payment_details.set',
    'ORDER_ITEM_FULFILLMENT_SET': 'channel.:channel_uuid.order.:order_uuid.item.:item_uuid.fulfillment_details.set',
    'ORDER_ITEM_SHIPPING_LINE_ADDED': 'channel.:channel_uuid.order.:order_uuid.item.:item_uuid.lines_shipping.added',
    'ORDER_ITEM_TAX_LINE_ADDED': 'channel.:channel_uuid.order.:order_uuid.item.:item_uuid.lines_taxes.added',
    'ORDER_ITEM_OVERRIDE_LINE_ADDED': 'channel.:channel_uuid.order.:order_uuid.item.:item_uuid.lines_pricing_overrides.added',
    'ORDER_ITEM_SHIPPING_LINE_REMOVED': 'channel.:channel_uuid.order.:order_uuid.item.:item_uuid.lines_shipping.removed',
    'ORDER_ITEM_TAX_LINE_REMOVED': 'channel.:channel_uuid.order.:order_uuid.item.:item_uuid.lines_taxes.removed',
    'ORDER_ITEM_OVERRIDE_LINE_REMOVED': 'channel.:channel_uuid.order.:order_uuid.item.:item_uuid.lines_pricing_overrides.removed',
    'ORDER_ITEM_FULFILLED': 'channel.:channel_uuid.order.:order_uuid.item.:item_uuid.fulfilled',
    'ORDER_ITEMS_FULFILLED': 'channel.:channel_uuid.order.:order_uuid.item.fulfilled.list',
    'ORDER_ITEM_RETURNED': 'channel.:channel_uuid.order.:order_uuid.item.:item_uuid.returned',
    'ORDER_ITEMS_RETURNED': 'channel.:channel_uuid.order.:order_uuid.item.returned.list',
    'ORDER_ITEM_RESTOCKED': 'channel.:channel_uuid.order.:order_uuid.item.:item_uuid.restocked',
    'ORDER_ITEMS_RESTOCKED': 'channel.:channel_uuid.order.:order_uuid.item.restocked.list',
    'ORDER_FULFILLMENT_CREATED': 'channel.:channel_uuid.order.:order_uuid.fulfillment.:fulfillment_uuid.created',
    'ORDER_FULFILLMENTS_CREATED': 'channel.:channel_uuid.order.:order_uuid.fulfillment.created.list',
    'ORDER_FULFILLMENT_FULFILLED': 'channel.:channel_uuid.order.:order_uuid.fulfillment.:fulfillment_uuid.fulfilled',
    'ORDER_FULFILLMENT_PARTIALLY_FULFILLED': 'channel.:channel_uuid.order.:order_uuid.fulfillment.:fulfillment_uuid.partially_fulfilled',
    'ORDER_FULFILLMENT_RETURNED': 'channel.:channel_uuid.order.:order_uuid.fulfillment.:fulfillment_uuid.returned',
    'ORDER_FULFILLMENT_PARTIALLY_RETURNED': 'channel.:channel_uuid.order.:order_uuid.fulfillment.:fulfillment_uuid.partially_returned',
    'ORDER_FULFILLMENT_RESTOCKED': 'channel.:channel_uuid.order.:order_uuid.fulfillment.:fulfillment_uuid.restocked',
    'ORDER_FULFILLMENT_PARTIALLY_RESTOCKED': 'channel.:channel_uuid.order.:order_uuid.fulfillment.:fulfillment_uuid.partially_restocked',
    'ORDER_TRANSACTION_SOLD': 'channel.:channel_uuid.order.:order_uuid.transaction.:transaction_uuid.sold',
    'ORDER_TRANSACTION_PARTIALLY_SOLD': 'channel.:channel_uuid.order.:order_uuid.transaction.:transaction_uuid.partially_sold',
    'ORDER_TRANSACTION_AUTHORIZED': 'channel.:channel_uuid.order.:order_uuid.transaction.:transaction_uuid.authorized',
    'ORDER_TRANSACTION_PARTIALLY_AUTHORIZED': 'channel.:channel_uuid.order.:order_uuid.transaction.:transaction_uuid.partially_authorized',
    'ORDER_TRANSACTION_REFUNDED': 'channel.:channel_uuid.order.:order_uuid.transaction.:transaction_uuid.refunded',
    'ORDER_TRANSACTION_PARTIALLY_REFUNDED': 'channel.:channel_uuid.order.:order_uuid.transaction.:transaction_uuid.partially_refunded',
    'ORDER_TRANSACTION_CAPTURED': 'channel.:channel_uuid.order.:order_uuid.transaction.:transaction_uuid.captured',
    'ORDER_TRANSACTION_PARTIALLY_CAPTURED': 'channel.:channel_uuid.order.:order_uuid.transaction.:transaction_uuid.partially_captured',
    'ORDER_TRANSACTION_CANCELLED': 'channel.:channel_uuid.order.:order_uuid.transaction.:transaction_uuid.cancelled',
    'ORDER_TRANSACTION_VOIDED': 'channel.:channel_uuid.order.:order_uuid.transaction.:transaction_uuid.voided',
    'ORDER_TRANSACTION_CALCULATED': 'channel.:channel_uuid.order.:order_uuid.transaction.:transaction_uuid.calculated',
    'ORDER_TRANSACTION_CREATED': 'channel.:channel_uuid.order.:order_uuid.transaction.:transaction_uuid.created',
    'ORDER_TRANSACTIONS_CREATED': 'channel.:channel_uuid.order.:order_uuid.transaction.created.list',
};
//# sourceMappingURL=order.js.map

/***/ }),

/***/ "./dist.browser/enums/permission.js":
/*!******************************************!*\
  !*** ./dist.browser/enums/permission.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PERMISSION_COMMANDS = {
    'CREATE_PERMISSION': 'create.channel.:channel_uuid.permission',
    'CREATE_PERMISSIONS': 'create.channel.:channel_uuid.permission.list',
    'DESTROY_PERMISSION': 'destroy.channel.:channel_uuid.permission',
    'GRANT_USER_PERMISSION': 'grant.channel.:channel_uuid.permission',
    'REVOKE_USER_PERMISSION': 'revoke.channel.:channel_uuid.permission',
};
exports.PERMISSION_ACTIONS = {
    'LIST_USER_PERMISSIONS': 'channel.:channel_uuid.user.permissions.list',
    'LIST_ROLE_PERMISSIONS': 'channel.:channel_uuid.role.permissions.list'
};
exports.PERMISSION_EVENTS = {
    'PERMISSION_CREATED': 'channel.:channel_uuid.permission.created',
    'PERMISSIONS_CREATED': 'channel.:channel_uuid.permission.created.list',
    'PERMISSION_DESTROYED': 'channel.:channel_uuid.permission.destroyed',
    'USER_PERMISSION_GRANTED': 'channel.:channel_uuid.user.permission.granted',
    'USER_PERMISSION_REVOKED': 'channel.:channel_uuid.user.permission.revoked',
};
//# sourceMappingURL=permission.js.map

/***/ }),

/***/ "./dist.browser/enums/product.js":
/*!***************************************!*\
  !*** ./dist.browser/enums/product.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCT_COMMANDS = {
    'CREATE_PRODUCT': 'create.channel.:channel_uuid.product',
    'MERGE_PRODUCTS': 'merge.channel.:channel_uuid.list.product',
    'ADD_PRODUCT': 'add.channel.:channel_uuid.product.:product_uuid',
    'ADD_PRODUCTS': 'add.channel.:channel_uuid.list.product',
    'UPDATE_PRODUCT': 'update.channel.:channel_uuid.product.:product_uuid',
    'DESTROY_PRODUCT': 'destroy.channel.:channel_uuid.product.:product_uuid',
    'REMOVE_PRODUCT': 'remove.channel.:channel_uuid.product.:product_uuid',
    'PUBLISH_PRODUCT': 'publish.channel.:channel_uuid.product.:product_uuid',
    'UNPUBLISH_PRODUCT': 'unpublish.channel.:channel_uuid.product.:product_uuid',
    'PUBLISH_PRODUCTS': 'publish.channel.:channel_uuid.list.product.:product_uuid',
    'UNPUBLISH_PRODUCTS': 'unpublish.channel.:channel_uuid.list.product.:product_uuid',
    'SET_PRODUCT_IMAGE_PRIMARY': 'set.channel.:channel_uuid.product.:product_uuid.image_primary',
    'SET_PRODUCT_VARIANT_DEFAULT': 'set.channel.:channel_uuid.product.:product_uuid.variant_default',
    'ADD_PRODUCT_CATEGORY': 'add.channel.:channel_uuid.product.:product_uuid.category',
    'REMOVE_PRODUCT_CATEGORY': 'remove.channel.:channel_uuid.product.:product_uuid.category',
    'UPLOAD_PRODUCTS': 'upload.channel.:channel_uuid.list.product',
    'PROCESS_UPLOADED_PRODUCTS': 'process.channel.:channel_uuid.upload.:upload_uuid.list.product',
    'UPLOAD_PRODUCT_METADATA': 'upload.channel.:channel_uuid.product.list.metadata',
    'PROCESS_UPLOADED_PRODUCT_METADATA': 'process.channel.:channel_uuid.product.upload.:upload_uuid.list.metadata',
    'UPLOAD_PRODUCT_VARIANTS': 'upload.channel.:channel_uuid.product.list.variant',
    'PROCESS_UPLOADED_PRODUCT_VARIANTS': 'process.channel.:channel_uuid.product.upload.:upload_uuid.list.variant',
    'ADD_PRODUCT_ASSOCIATION': 'add.channel.:channel_uuid.product.:product_uuid.association',
    'ADD_PRODUCT_ASSOCIATIONS': 'add.channel.:channel_uuid.product.:product_uuid.list.association',
    'CREATE_PRODUCT_ASSOCIATION': 'create.channel.:channel_uuid.product.:product_uuid.association',
    'CREATE_PRODUCT_ASSOCIATIONS': 'create.channel.:channel_uuid.product.:product_uuid.list.association',
    'UPDATE_PRODUCT_ASSOCIATION': 'update.channel.:channel_uuid.product.:product_uuid.association',
    'REMOVE_PRODUCT_ASSOCIATION': 'remove.channel.:channel_uuid.product.:product_uuid.association',
    'DESTROY_PRODUCT_ASSOCIATION': 'destroy.channel.:channel_uuid.product.:product_uuid.association',
    'PUBLISH_PRODUCT_ASSOCIATION': 'publish.channel.:channel_uuid.product.:product_uuid.association',
    'UNPUBLISH_PRODUCT_ASSOCIATION': 'unpublish.channel.:channel_uuid.product.:product_uuid.association',
    'ADD_PRODUCT_IMAGE': 'add.channel.:channel_uuid.product.:product_uuid.image',
    'ADD_PRODUCT_IMAGES': 'add.channel.:channel_uuid.product.:product_uuid.list.image',
    'CREATE_PRODUCT_IMAGE': 'create.channel.:channel_uuid.product.:product_uuid.image',
    'CREATE_PRODUCT_IMAGES': 'create.channel.:channel_uuid.product.:product_uuid.list.image',
    'UPDATE_PRODUCT_IMAGE': 'update.channel.:channel_uuid.product.:product_uuid.image',
    'REMOVE_PRODUCT_IMAGE': 'remove.channel.:channel_uuid.product.:product_uuid.image',
    'DESTROY_PRODUCT_IMAGE': 'destroy.channel.:channel_uuid.product.:product_uuid.image',
    'PUBLISH_PRODUCT_IMAGE': 'publish.channel.:channel_uuid.product.:product_uuid.image',
    'UNPUBLISH_PRODUCT_IMAGE': 'unpublish.channel.:channel_uuid.product.:product_uuid.image',
    'ADD_PRODUCT_VARIANT': 'add.channel.:channel_uuid.product.:product_uuid.variant',
    'ADD_PRODUCT_VARIANTS': 'add.channel.:channel_uuid.product.:product_uuid.list.variant',
    'CREATE_PRODUCT_VARIANT': 'create.channel.:channel_uuid.product.:product_uuid.variant',
    'CREATE_PRODUCT_VARIANTS': 'create.channel.:channel_uuid.product.:product_uuid.list.variant',
    'UPDATE_PRODUCT_VARIANT': 'update.channel.:channel_uuid.product.:product_uuid.variant',
    'REMOVE_PRODUCT_VARIANT': 'remove.channel.:channel_uuid.product.:product_uuid.variant',
    'DESTROY_PRODUCT_VARIANT': 'destroy.channel.:channel_uuid.product.:product_uuid.variant',
    'PUBLISH_PRODUCT_VARIANT': 'publish.channel.:channel_uuid.product.:product_uuid.variant',
    'UNPUBLISH_PRODUCT_VARIANT': 'unpublish.channel.:channel_uuid.product.:product_uuid.variant',
    'PUBLISH_PRODUCT_VARIANTS': 'publish.channel.:channel_uuid.product.:product_uuid.list.variant',
    'UNPUBLISH_PRODUCT_VARIANTS': 'unpublish.channel.:channel_uuid.product.:product_uuid.list.variant',
    'ADD_PRODUCT_VARIANT_ASSOCIATION': 'add.channel.:channel_uuid.product.:product_uuid.variant.association',
    'ADD_PRODUCT_VARIANT_ASSOCIATIONS': 'add.channel.:channel_uuid.product.:product_uuid.variant.list.association',
    'CREATE_PRODUCT_VARIANT_ASSOCIATION': 'create.channel.:channel_uuid.product.:product_uuid.variant.association',
    'CREATE_PRODUCT_VARIANT_ASSOCIATIONS': 'create.channel.:channel_uuid.product.:product_uuid.variant.list.association',
    'UPDATE_PRODUCT_VARIANT_ASSOCIATION': 'update.channel.:channel_uuid.product.:product_uuid.variant.association',
    'REMOVE_PRODUCT_VARIANT_ASSOCIATION': 'remove.channel.:channel_uuid.product.:product_uuid.variant.association',
    'DESTROY_PRODUCT_VARIANT_ASSOCIATION': 'destroy.channel.:channel_uuid.product.:product_uuid.variant.association',
    'PUBLISH_PRODUCT_VARIANT_ASSOCIATION': 'publish.channel.:channel_uuid.product.:product_uuid.variant.association',
    'UNPUBLISH_PRODUCT_VARIANT_ASSOCIATION': 'unpublish.channel.:channel_uuid.product.:product_uuid.variant.association',
    'ADD_PRODUCT_VARIANT_IMAGE': 'add.channel.:channel_uuid.product.:product_uuid.variant.image',
    'ADD_PRODUCT_VARIANT_IMAGES': 'add.channel.:channel_uuid.product.:product_uuid.variant.list.image',
    'CREATE_PRODUCT_VARIANT_IMAGE': 'create.channel.:channel_uuid.product.:product_uuid.variant.image',
    'CREATE_PRODUCT_VARIANT_IMAGES': 'create.channel.:channel_uuid.product.:product_uuid.variant.list.image',
    'UPDATE_PRODUCT_VARIANT_IMAGE': 'update.channel.:channel_uuid.product.:product_uuid.variant.image',
    'REMOVE_PRODUCT_VARIANT_IMAGE': 'remove.channel.:channel_uuid.product.:product_uuid.variant.image',
    'DESTROY_PRODUCT_VARIANT_IMAGE': 'destroy.channel.:channel_uuid.product.:product_uuid.variant.image',
    'PUBLISH_PRODUCT_VARIANT_IMAGE': 'publish.channel.:channel_uuid.product.:product_uuid.variant.image',
    'UNPUBLISH_PRODUCT_VARIANT_IMAGE': 'unpublish.channel.:channel_uuid.product.:product_uuid.variant.image',
    'ADD_PRODUCT_VENDOR': 'add.channel.:channel_uuid.product.:product_uuid.vendor',
    'ADD_PRODUCT_VENDORS': 'add.channel.:channel_uuid.product.:product_uuid.list.vendor',
    'CREATE_PRODUCT_VENDOR': 'create.channel.:channel_uuid.product.:product_uuid.vendor',
    'CREATE_PRODUCT_VENDORS': 'create.channel.:channel_uuid.product.:product_uuid.list.vendor',
    'UPDATE_PRODUCT_VENDOR': 'update.channel.:channel_uuid.product.:product_uuid.vendor',
    'REMOVE_PRODUCT_VENDOR': 'remove.channel.:channel_uuid.product.:product_uuid.vendor',
    'DESTROY_PRODUCT_VENDOR': 'destroy.channel.:channel_uuid.product.:product_uuid.vendor',
    'PUBLISH_PRODUCT_VENDOR': 'publish.channel.:channel_uuid.product.:product_uuid.vendor',
    'UNPUBLISH_PRODUCT_VENDOR': 'unpublish.channel.:channel_uuid.product.:product_uuid.vendor',
    'PUBLISH_PRODUCT_VENDORS': 'publish.channel.:channel_uuid.product.:product_uuid.list.vendor',
    'UNPUBLISH_PRODUCT_VENDORS': 'unpublish.channel.:channel_uuid.product.:product_uuid.list.vendor',
};
exports.PRODUCT_ACTIONS = {
    'GET_PRODUCT': 'channel.product.get',
    'FIND_PRODUCT': 'channel.product.get',
    'LIST_PRODUCTS': 'channel.product.list',
    'FIND_PRODUCTS': 'channel.product.list',
    'LIST_PRODUCT_EVENTS': 'channel.product.event.list',
    'GET_PRODUCT_CATEGORY': 'channel.product.category.get',
    'LIST_PRODUCT_CATEGORIES': 'channel.product.category.list',
    'GET_PUBLIC_PRODUCT_CATEGORY': 'channel.public.product.category.get',
    'LIST_PUBLIC_PRODUCT_CATEGORIES': 'channel.public.product.category.list',
    'GET_PRODUCT_UPLOAD_RESULT': 'channel.product.upload_result.get',
    'LIST_PRODUCT_UPLOAD_RESULTS': 'channel.product.upload_result.list',
    'GET_PRODUCT_UPLOAD': 'channel.product.upload.get',
    'LIST_PRODUCT_UPLOADS': 'channel.product.upload.list',
    'GET_PRODUCT_METADATA_UPLOAD_RESULT': 'channel.product.metadata.upload_result.get',
    'LIST_PRODUCT_METADATA_UPLOAD_RESULTS': 'channel.product.metadata.upload_result.list',
    'GET_PRODUCT_METADATA_UPLOAD': 'channel.product.metadata.upload.get',
    'LIST_PRODUCT_METADATA_UPLOADS': 'channel.product.metadata.upload.list',
    'GET_PUBLIC_PRODUCT': 'channel.public.product.get',
    'FIND_PUBLIC_PRODUCT': 'channel.public.product.get',
    'LIST_PUBLIC_PRODUCTS': 'channel.public.product.list',
    'FIND_PUBLIC_PRODUCTS': 'channel.public.product.list',
    'GET_PRODUCT_ASSOCIATION': 'channel.product.association.get',
    'LIST_PRODUCT_ASSOCIATIONS': 'channel.product.association.list',
    'GET_PUBLIC_PRODUCT_ASSOCIATION': 'channel.public.product.association.get',
    'LIST_PUBLIC_PRODUCT_ASSOCIATIONS': 'channel.public.product.association.list',
    'GET_PRODUCT_VARIANT_DEFAULT': 'channel.product.variant.default.get',
    'GET_PRODUCT_VARIANT': 'channel.product.variant.get',
    'LIST_PRODUCT_VARIANTS': 'channel.product.variant.list',
    'FIND_PRODUCT_VARIANTS': 'channel.product.variant.list',
    'GET_PUBLIC_PRODUCT_VARIANT': 'channel.public.product.variant.get',
    'FIND_PUBLIC_PRODUCT_VARIANTS': 'channel.public.product.variant.list',
    'LIST_PUBLIC_PRODUCT_VARIANTS': 'channel.public.product.variant.list',
    'GET_PRODUCT_VARIANT_ASSOCIATION': 'channel.product.variant.association.get',
    'LIST_PRODUCT_VARIANT_ASSOCIATIONS': 'channel.product.variant.association.list',
    'GET_PUBLIC_PRODUCT_VARIANT_ASSOCIATION': 'channel.public.product.variant.association.get',
    'LIST_PUBLIC_PRODUCT_VARIANT_ASSOCIATIONS': 'channel.public.product.variant.association.list',
    'GET_PRODUCT_IMAGE_PRIMARY': 'channel.product.image.primary.get',
    'GET_PRODUCT_IMAGE': 'channel.product.image.get',
    'LIST_PRODUCT_IMAGES': 'channel.product.image.list',
    'GET_PUBLIC_PRODUCT_IMAGE': 'channel.public.product.image.get',
    'LIST_PUBLIC_PRODUCT_IMAGES': 'channel.public.product.image.list',
    'GET_PRODUCT_VARIANT_IMAGE': 'channel.product.variant.image.get',
    'LIST_PRODUCT_VARIANT_IMAGES': 'channel.product.variant.image.list',
    'GET_PUBLIC_PRODUCT_VARIANT_IMAGE': 'channel.public.product.variant.image.get',
    'LIST_PUBLIC_PRODUCT_VARIANT_IMAGES': 'channel.public.product.variant.image.list',
    'GET_PRODUCT_OFFER': 'channel.product.offer.get',
    'LIST_PRODUCT_OFFERS': 'channel.product.offer.list',
    'GET_PRODUCT_VENDOR': 'channel.product.vendor.get',
    'LIST_PRODUCT_VENDORS': 'channel.product.vendor.list',
};
exports.PRODUCT_EVENTS = {
    'PRODUCT_CREATED': 'channel.:channel_uuid.product.:product_uuid.created',
    'PRODUCTS_MERGED': 'channel.:channel_uuid.product.merged.list',
    'PRODUCT_ADDED': 'channel.:channel_uuid.product.:product_uuid.added',
    'PRODUCTS_ADDED': 'channel.:channel_uuid.product.:product_uuid.added.list',
    'PRODUCT_UPDATED': 'channel.:channel_uuid.product.:product_uuid.updated',
    'PRODUCT_DESTROYED': 'channel.:channel_uuid.product.:product_uuid.destroyed',
    'PRODUCT_REMOVED': 'channel.:channel_uuid.product.:product_uuid.removed',
    'PRODUCT_PUBLISHED': 'channel.:channel_uuid.product.:product_uuid.published',
    'PRODUCT_UNPUBLISHED': 'channel.:channel_uuid.product.:product_uuid.unpublished',
    'PRODUCTS_PUBLISHED': 'channel.:channel_uuid.product.:product_uuid.published.list',
    'PRODUCTS_UNPUBLISHED': 'channel.:channel_uuid.product.:product_uuid.unpublished.list',
    'PRODUCT_IMAGE_PRIMARY_SET': 'channel.:channel_uuid.product.:product_uuid.image_primary.set',
    'PRODUCT_VARIANT_DEFAULT_SET': 'channel.:channel_uuid.product.:product_uuid.variant_default.set',
    'PRODUCTS_UPLOADED': 'channel.:channel_uuid.product.uploaded.list',
    'PRODUCTS_UPLOAD_PROCESSED': 'channel.:channel_uuid.product.upload.processed.list',
    'PRODUCTS_METADATA_UPLOADED': 'channel.:channel_uuid.product.metadata.uploaded.list',
    'PRODUCTS_METADATA_UPLOAD_PROCESSED': 'channel.:channel_uuid.product.metadata.upload.processed.list',
    'PRODUCT_ASSOCIATIONS_UPLOADED': 'channel.:channel_uuid.product.association.uploaded.list',
    'PRODUCT_ASSOCIATIONS_UPLOAD_PROCESSED': 'channel.:channel_uuid.product.association.upload.processed.list',
    'PRODUCT_ASSOCIATION_ADDED': 'channel.:channel_uuid.product.:product_uuid.association.added',
    'PRODUCT_ASSOCIATIONS_ADDED': 'channel.:channel_uuid.product.:product_uuid.association.added.list',
    'PRODUCT_ASSOCIATION_CREATED': 'channel.:channel_uuid.product.:product_uuid.association.created',
    'PRODUCT_ASSOCIATIONS_CREATED': 'channel.:channel_uuid.product.:product_uuid.association.created.list',
    'PRODUCT_ASSOCIATION_UPDATED': 'channel.:channel_uuid.product.:product_uuid.association.updated',
    'PRODUCT_ASSOCIATION_REMOVED': 'channel.:channel_uuid.product.:product_uuid.association.removed',
    'PRODUCT_ASSOCIATION_DESTROYED': 'channel.:channel_uuid.product.:product_uuid.association.destroyed',
    'PRODUCT_ASSOCIATION_PUBLISHED': 'channel.:channel_uuid.product.:product_uuid.association.published',
    'PRODUCT_ASSOCIATION_UNPUBLISHED': 'channel.:channel_uuid.product.:product_uuid.association.unpublished',
    'PRODUCT_CATEGORY_ADDED': 'channel.:channel_uuid.product.:product_uuid.category.added',
    'PRODUCT_CATEGORY_REMOVED': 'channel.:channel_uuid.product.:product_uuid.category.removed',
    'PRODUCT_IMAGE_ADDED': 'channel.:channel_uuid.product.:product_uuid.image.added',
    'PRODUCT_IMAGES_ADDED': 'channel.:channel_uuid.product.:product_uuid.image.added.list',
    'PRODUCT_IMAGE_CREATED': 'channel.:channel_uuid.product.:product_uuid.image.created',
    'PRODUCT_IMAGES_CREATED': 'channel.:channel_uuid.product.:product_uuid.image.created.list',
    'PRODUCT_IMAGE_UPDATED': 'channel.:channel_uuid.product.:product_uuid.image.updated',
    'PRODUCT_IMAGE_REMOVED': 'channel.:channel_uuid.product.:product_uuid.image.removed',
    'PRODUCT_IMAGE_DESTROYED': 'channel.:channel_uuid.product.:product_uuid.image.destroyed',
    'PRODUCT_IMAGES_UPLOADED': 'channel.:channel_uuid.product.:product_uuid.image.uploaded.list',
    'PRODUCT_IMAGE_PUBLISHED': 'channel.:channel_uuid.product.:product_uuid.image.published',
    'PRODUCT_IMAGE_UNPUBLISHED': 'channel.:channel_uuid.product.:product_uuid.image.unpublished',
    'PRODUCT_VARIANT_ADDED': 'channel.:channel_uuid.product.:product_uuid.variant.added',
    'PRODUCT_VARIANTS_ADDED': 'channel.:channel_uuid.product.:product_uuid.variant.added.list',
    'PRODUCT_VARIANT_CREATED': 'channel.:channel_uuid.product.:product_uuid.variant.created',
    'PRODUCT_VARIANTS_CREATED': 'channel.:channel_uuid.product.:product_uuid.variant.created.list',
    'PRODUCT_VARIANT_UPDATED': 'channel.:channel_uuid.product.:product_uuid.variant.updated',
    'PRODUCT_VARIANT_REMOVED': 'channel.:channel_uuid.product.:product_uuid.variant.removed',
    'PRODUCT_VARIANT_DESTROYED': 'channel.:channel_uuid.product.:product_uuid.variant.destroyed',
    'PRODUCT_VARIANTS_UPLOADED': 'channel.:channel_uuid.product.:product_uuid.variant.uploaded.list',
    'PRODUCT_VARIANT_PUBLISHED': 'channel.:channel_uuid.product.:product_uuid.variant.published',
    'PRODUCT_VARIANT_UNPUBLISHED': 'channel.:channel_uuid.product.:product_uuid.variant.unpublished',
    'PRODUCT_VARIANTS_PUBLISHED': 'channel.:channel_uuid.product.:product_uuid.variant.published.list',
    'PRODUCT_VARIANTS_UNPUBLISHED': 'channel.:channel_uuid.product.:product_uuid.variant.unpublished.list',
    'PRODUCT_VARIANT_ASSOCIATION_ADDED': 'channel.:channel_uuid.product.:product_uuid.variant.association.added',
    'PRODUCT_VARIANT_ASSOCIATIONS_ADDED': 'channel.:channel_uuid.product.:product_uuid.variant.association.added.list',
    'PRODUCT_VARIANT_ASSOCIATION_CREATED': 'channel.:channel_uuid.product.:product_uuid.variant.association.created',
    'PRODUCT_VARIANT_ASSOCIATIONS_CREATED': 'channel.:channel_uuid.product.:product_uuid.variant.association.created.list',
    'PRODUCT_VARIANT_ASSOCIATION_UPDATED': 'channel.:channel_uuid.product.:product_uuid.variant.association.updated',
    'PRODUCT_VARIANT_ASSOCIATION_REMOVED': 'channel.:channel_uuid.product.:product_uuid.variant.association.removed',
    'PRODUCT_VARIANT_ASSOCIATION_DESTROYED': 'channel.:channel_uuid.product.:product_uuid.variant.association.destroyed',
    'PRODUCT_VARIANT_ASSOCIATIONS_UPLOADED': 'channel.:channel_uuid.product.:product_uuid.variant.association.uploaded.list',
    'PRODUCT_VARIANT_ASSOCIATION_PUBLISHED': 'channel.:channel_uuid.product.:product_uuid.variant.association.published',
    'PRODUCT_VARIANT_ASSOCIATION_UNPUBLISHED': 'channel.:channel_uuid.product.:product_uuid.variant.association.unpublished',
    'PRODUCT_VARIANT_IMAGE_ADDED': 'channel.:channel_uuid.product.:product_uuid.variant.image.added',
    'PRODUCT_VARIANT_IMAGES_ADDED': 'channel.:channel_uuid.product.:product_uuid.variant.added.image.list',
    'PRODUCT_VARIANT_IMAGE_CREATED': 'channel.:channel_uuid.product.:product_uuid.variant.image.created',
    'PRODUCT_VARIANT_IMAGES_CREATED': 'channel.:channel_uuid.product.:product_uuid.variant.created.image.list',
    'PRODUCT_VARIANT_IMAGE_UPDATED': 'channel.:channel_uuid.product.:product_uuid.variant.image.updated',
    'PRODUCT_VARIANT_IMAGE_REMOVED': 'channel.:channel_uuid.product.:product_uuid.variant.image.removed',
    'PRODUCT_VARIANT_IMAGE_DESTROYED': 'channel.:channel_uuid.product.:product_uuid.variant.image.destroyed',
    'PRODUCT_VARIANT_IMAGES_UPLOADED': 'channel.:channel_uuid.product.:product_uuid.variant.uploaded.image.list',
    'PRODUCT_VARIANT_IMAGE_PUBLISHED': 'channel.:channel_uuid.product.:product_uuid.variant.image.published',
    'PRODUCT_VARIANT_IMAGE_UNPUBLISHED': 'channel.:channel_uuid.product.:product_uuid.variant.image.unpublished',
    'PRODUCT_VENDOR_ADDED': 'channel.:channel_uuid.product.:product_uuid.vendor.added',
    'PRODUCT_VENDORS_ADDED': 'channel.:channel_uuid.product.:product_uuid.vendor.added.list',
    'PRODUCT_VENDOR_CREATED': 'channel.:channel_uuid.product.:product_uuid.vendor.created',
    'PRODUCT_VENDORS_CREATED': 'channel.:channel_uuid.product.:product_uuid.vendor.created.list',
    'PRODUCT_VENDOR_UPDATED': 'channel.:channel_uuid.product.:product_uuid.vendor.updated',
    'PRODUCT_VENDOR_REMOVED': 'channel.:channel_uuid.product.:product_uuid.vendor.removed',
    'PRODUCT_VENDOR_DESTROYED': 'channel.:channel_uuid.product.:product_uuid.vendor.destroyed',
    'PRODUCT_VENDORS_UPLOADED': 'channel.:channel_uuid.product.:product_uuid.vendor.uploaded.list',
    'PRODUCT_VENDOR_PUBLISHED': 'channel.:channel_uuid.product.:product_uuid.vendor.published',
    'PRODUCT_VENDOR_UNPUBLISHED': 'channel.:channel_uuid.product.:product_uuid.vendor.unpublished',
    'PRODUCT_VENDORS_PUBLISHED': 'channel.:channel_uuid.product.:product_uuid.vendor.published.list',
    'PRODUCT_VENDORS_UNPUBLISHED': 'channel.:channel_uuid.product.:product_uuid.vendor.unpublished.list',
};
//# sourceMappingURL=product.js.map

/***/ }),

/***/ "./dist.browser/enums/subscription.js":
/*!********************************************!*\
  !*** ./dist.browser/enums/subscription.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SUBSCRIPTION_COMMANDS = {};
exports.SUBSCRIPTION_ACTIONS = {};
exports.SUBSCRIPTION_EVENTS = {};
//# sourceMappingURL=subscription.js.map

/***/ }),

/***/ "./dist.browser/enums/task.js":
/*!************************************!*\
  !*** ./dist.browser/enums/task.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TASK_COMMANDS = {};
exports.TASK_ACTIONS = {};
exports.TASK_EVENTS = {};
//# sourceMappingURL=task.js.map

/***/ }),

/***/ "./dist.browser/enums/transaction.js":
/*!*******************************************!*\
  !*** ./dist.browser/enums/transaction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TRANSACTION_COMMANDS = {};
exports.TRANSACTION_ACTIONS = {};
exports.TRANSACTION_EVENTS = {};
//# sourceMappingURL=transaction.js.map

/***/ }),

/***/ "./dist.browser/enums/user.js":
/*!************************************!*\
  !*** ./dist.browser/enums/user.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_COMMANDS = {
    'START_SESSION': 'start.channel.session',
    'END_SESSION': 'end.channel.session',
    'REGISTER_USER': 'register.channel.user',
    'CREATE_USER': 'create.channel.user',
    'UPDATE_USER': 'update.channel.user',
    'UPLOAD_USERS': 'upload.channel.user',
    'PROCESS_UPLOADED_USERS': 'process.upload.channel.user',
    'LOGIN_USER': 'login.channel.user',
    'LOGOUT_USER': 'logout.channel.user',
    'ADD_USER': 'add.channel.user',
    'ADD_USERS': 'add.channel.user.list',
    'REMOVE_USER': 'remove.channel.user',
    'INVITE_USER': 'invite.channel.user',
    'CREATE_USER_INVITE': 'create.channel.invite.user',
    'ACCEPT_USER_INVITE': 'accept.channel.user.invite',
    'REJECT_USER_INVITE': 'reject.channel.user.invite',
    'CANCEL_USER_INVITE': 'cancel.channel.user.invite',
    'NOTIFY_USER': 'create.channel.notification.user',
    'CREATE_USER_NOTIFICATION': 'create.channel.notification.user',
    'READ_USER_NOTIFICATION': 'read.channel.user.notification',
    'UNREAD_USER_NOTIFICATION': 'unread.channel.user.notification',
    'ADD_USER_CUSTOMERS': 'add.channel.user.customer.list',
    'SET_USER_CUSTOMER': 'set.channel.user.customer',
    'SET_USER_CUSTOMER_PRIMARY': 'set.channel.user.customer_primary',
    'ADD_USER_CARTS': 'add.channel.user.cart.list',
    'SET_USER_CART': 'set.channel.user.cart',
    'ADD_USER_CUSTOMER': 'add.channel.user.customer',
    'UPDATE_USER_CUSTOMER': 'update.channel.user.customer',
    'REMOVE_USER_CUSTOMER': 'remove.channel.user.customer',
    'ADD_USER_PASSPORT': 'add.channel.user.passport',
    'CREATE_USER_PASSPORT': 'create.channel.user.passport',
    'RESET_USER_PASSPORT': 'reset.channel.user.passport',
    'UPDATE_USER_PASSPORT': 'update.channel.user.passport',
    'REMOVE_USER_PASSPORT': 'remove.channel.user.passport',
};
exports.USER_ACTIONS = {
    'GET_USER': 'channel.user.get',
    'FIND_USER': 'channel.user.get',
    'LIST_USERS': 'channel.user.list',
    'FIND_USERS': 'channel.user.list',
    'LIST_USER_EVENTS': 'channel.user.event.list',
    'GET_USER_UPLOAD': 'channel.user.upload.get',
    'LIST_USER_UPLOADS': 'channel.user.upload.list',
    'GET_USER_UPLOAD_RESULT': 'channel.user.upload_result.get',
    'LIST_USER_UPLOAD_RESULTS': 'channel.user.upload_result.list',
};
exports.USER_EVENTS = {
    'SESSION_STARTED': 'channel.:channel_uuid.session.started',
    'SESSION_ENDED': 'channel.:channel_uuid.session.ended',
    'USER_REGISTERED': 'channel.:channel_uuid.user.:user_uuid.registered',
    'USER_CREATED': 'channel.:channel_uuid.user.:user_uuid.created',
    'USER_UPDATED': 'channel.:channel_uuid.user.:user_uuid.updated',
    'USERS_UPLOADED': 'channel.:channel_uuid.user.uploaded.list',
    'USERS_UPLOAD_PROCESSED': 'channel.:channel_uuid.user.upload.processed.list',
    'USER_LOGGED_IN': 'channel.:channel_uuid.user.:user_uuid.logged_in',
    'USER_LOGGED_OUT': 'channel.:channel_uuid.user.:user_uuid.logged_out',
    'USER_ADDED': 'channel.:channel_uuid.user.:user_uuid.added',
    'USERS_ADDED': 'channel.:channel_uuid.user.added.list',
    'USER_REMOVED': 'channel.:channel_uuid.user.:user_uuid.removed',
    'USER_CART_SET': 'channel.:channel_uuid.user.:user_uuid.cart.:cart_uuid.set',
    'USER_CUSTOMER_SET': 'channel.:channel_uuid.user.:user_uuid.customer.:customer_uuid.set',
    'USER_CUSTOMER_PRIMARY_SET': 'channel.:channel_uuid.user.:user_uuid.customer_primary.:customer_primary_uuid.set',
    'USER_INVITED': 'channel.:channel_uuid.user.:user_uuid.invite.:invite_uuid.create',
    'USER_INVITE_ACCEPTED': 'channel.:channel_uuid.user.:user_uuid.invite.:invite_uuid.accepted',
    'USER_INVITE_REJECTED': 'channel.:channel_uuid.user.:user_uuid.invite.:invite_uuid.rejected',
    'USER_INVITE_CANCELLED': 'channel.:channel_uuid.user.:user_uuid.invite.:invite_uuid.cancelled',
    'USER_CUSTOMER_ADDED': 'channel.:channel_uuid.user.:user_uuid.customer.:customer_uuid.added',
    'USER_CUSTOMERS_ADDED': 'channel.:channel_uuid.user.:user_uuid.customer.added.list',
    'USER_CUSTOMER_REMOVED': 'channel.:channel_uuid.user.:user_uuid.customer.:customer_uuid.removed',
    'USER_CARTS_ADDED': 'channel.:channel_uuid.user.:user_uuid.cart.added.list',
    'USER_NOTIFIED': 'channel.:channel_uuid.user.:user_uuid.notification.:notification_uuid.created',
    'USER_NOTIFICATION_READ': 'channel.:channel_uuid.user.:user_uuid.notification.:notification_uuid.read',
    'USER_NOTIFICATION_UNREAD': 'channel.:channel_uuid.user.:user_uuid.notification.:notification_uuid.unread',
    'USER_PASSPORT_ADDED': 'channel.:channel_uuid.user.:user_uuid.passport.:passport_uuid.added',
    'USER_PASSPORT_CREATED': 'channel.:channel_uuid.user.:user_uuid.passport.:passport_uuid.created',
    'USER_PASSPORT_RESET': 'channel.:channel_uuid.user.:user_uuid.passport.:passport_uuid.reset',
    'USER_PASSPORTS_ADDED': 'channel.:channel_uuid.user.:user_uuid.passport.added.list',
    'USER_PASSPORT_REMOVED': 'channel.:channel_uuid.user.:user_uuid.passport.:passport_uuid.removed',
};
//# sourceMappingURL=user.js.map

/***/ }),

/***/ "./dist.browser/enums/vendor.js":
/*!**************************************!*\
  !*** ./dist.browser/enums/vendor.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VENDOR_COMMANDS = {};
exports.VENDOR_ACTIONS = {};
exports.VENDOR_EVENTS = {};
//# sourceMappingURL=vendor.js.map

/***/ }),

/***/ "./dist.browser/index.js":
/*!*******************************!*\
  !*** ./dist.browser/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var api = __importStar(__webpack_require__(/*! ./api */ "./dist.browser/api/index.js"));
var request_promise_native_1 = __importDefault(__webpack_require__(/*! request-promise-native */ "request-promise-native"));
var enums_1 = __webpack_require__(/*! ./enums */ "./dist.browser/enums/index.js");
var ApplicationClass_1 = __webpack_require__(/*! ./ApplicationClass */ "./dist.browser/ApplicationClass.js");
var ApplicationBrowserClass_1 = __webpack_require__(/*! ./ApplicationBrowserClass */ "./dist.browser/ApplicationBrowserClass.js");
// Export the Enums for developer use
exports.COMMANDS = enums_1.COMMANDS;
exports.EVENTS = enums_1.EVENTS;
exports.ACTIONS = enums_1.ACTIONS;
// Export the Core RiSE class
var RiSE = /** @class */ (function () {
    function RiSE(config) {
        if (config === void 0) { config = {
            sandbox: true,
            beta: false,
            production: false,
            api_version: 1
        }; }
        this.config = config;
        this.globals = {};
        // Set the request middleware to default to request-promise-native if not supplied
        if (!config.request_middleware) {
            config.request_middleware = request_promise_native_1.default;
        }
        // Set the request middleware to default to request-promise-native if not supplied
        if (!config.request_timeout) {
            config.request_timeout = 5000;
        }
        // Set the live mode parameter
        if (config.live_mode === true || config.live_mode === false) {
            this.config.live_mode = config.live_mode;
        }
        // Set the default env
        if (config.url) {
            this.config.sandbox = false;
            this.config.beta = false;
            this.config.production = false;
            this.config.live_mode = typeof config.live_mode !== 'undefined' ? config.live_mode : false;
        }
        else if (config.sandbox) {
            this.config.beta = false;
            this.config.production = false;
            this.config.live_mode = typeof config.live_mode !== 'undefined' ? config.live_mode : false;
        }
        else if (config.beta) {
            this.config.sandbox = false;
            this.config.production = false;
            this.config.live_mode = typeof config.live_mode !== 'undefined' ? config.live_mode : false;
        }
        else if (config.production) {
            this.config.sandbox = false;
            this.config.beta = false;
            this.config.live_mode = typeof config.live_mode !== 'undefined' ? config.live_mode : true;
        }
        this.config.request_middleware = this.config.request_middleware || config.request_middleware;
        this.config.request_timeout = this.config.request_timeout || config.request_timeout;
        // The API version to end, valid whole or float number eg. 1, 1.0, 1.1
        this.config.api_version = this.config.api_version || config.api_version || 1;
        // The public key to use for connecting to RiSE (from an application or this application)
        this.config.public_key = this.config.public_key || config.public_key;
        // Optional: The private key to use for connecting to RiSE (from an application or this application)
        this.config.private_key = this.config.private_key || config.private_key;
        // Optional: You can configure a session id that was given prior to creating the RiSE instance
        this.config.session = this.config.session || config.session;
        // Optional: You can configure a token that was given prior to creating the RiSE instance
        this.config.token = this.config.token || config.token;
        // Configure the logger
        if (config.logger) {
            this.log = config.logger;
        }
        else {
            this.log = console;
        }
        // Configure the global Params / Query values
        if (config.globals) {
            this.globals = config.globals;
        }
        // // Initialize the APIs
        this.channel = new api.Channel(this, this.globals);
        this.channelAuth = new api.ChannelAuth(this, this.globals);
        this.channelApplication = new api.ChannelApplication(this, this.globals);
        this.channelBillingModel = new api.ChannelBillingModel(this, this.globals);
        this.channelCart = new api.ChannelCart(this, this.globals);
        this.channelCartItem = new api.ChannelCartItem(this, this.globals);
        this.channelCollection = new api.ChannelCollection(this, this.globals);
        this.channelCampaign = new api.ChannelCampaign(this, this.globals);
        this.channelCategory = new api.ChannelCategory(this, this.globals);
        this.channelCountry = new api.ChannelCountry(this, this.globals);
        this.channelCountryProvince = new api.ChannelCountryProvince(this, this.globals);
        this.channelCustomer = new api.ChannelCustomer(this, this.globals);
        this.channelCustomerCampaign = new api.ChannelCustomerCampaign(this, this.globals);
        this.channelCustomerCart = new api.ChannelCustomerCart(this, this.globals);
        this.channelCustomerFeed = new api.ChannelCustomerFeed(this, this.globals);
        this.channelCustomerOrder = new api.ChannelCustomerOrder(this, this.globals);
        this.channelCustomerGatewayAccount = new api.ChannelCustomerGatewayAccount(this, this.globals);
        this.channelCustomerGatewayAccountSource = new api.ChannelCustomerGatewayAccountSource(this, this.globals);
        this.channelCustomerUser = new api.ChannelCustomerUser(this, this.globals);
        this.channelFeed = new api.ChannelFeed(this, this.globals);
        this.channelFeedItem = new api.ChannelFeedItem(this, this.globals);
        this.channelFulfillment = new api.ChannelFulfillment(this, this.globals);
        this.channelFulfillmentItem = new api.ChannelFulfillmentItem(this, this.globals);
        this.channelGateway = new api.ChannelGateway(this, this.globals);
        this.channelOffer = new api.ChannelOffer(this, this.globals);
        this.channelOfferVariant = new api.ChannelOfferVariant(this, this.globals);
        this.channelOrder = new api.ChannelOrder(this, this.globals);
        this.channelOrderItem = new api.ChannelOrderItem(this, this.globals);
        this.channelPermission = new api.ChannelPermission(this, this.globals);
        this.channelProduct = new api.ChannelProduct(this, this.globals);
        this.channelProductVariant = new api.ChannelProductVariant(this, this.globals);
        this.channelSubscription = new api.ChannelSubscription(this, this.globals);
        this.channelTask = new api.ChannelTask(this, this.globals);
        this.channelTransaction = new api.ChannelTransaction(this, this.globals);
        this.channelUser = new api.ChannelUser(this, this.globals);
        this.channelVendor = new api.ChannelVendor(this, this.globals);
        // Public endpoints
        this.channelPublicCustomer = new api.ChannelPublicCustomer(this, this.globals);
        this.channelPublicOffer = new api.ChannelPublicOffer(this, this.globals);
        this.channelPublicOfferVariant = new api.ChannelPublicOfferVariant(this, this.globals);
        // Initialize the Application Connection
        if (typeof window === 'undefined') {
            this.application = new ApplicationClass_1.ApplicationClass(this, this.globals);
        }
        else {
            this.application = new ApplicationBrowserClass_1.ApplicationBrowserClass(this, this.globals);
        }
        return this;
    }
    Object.defineProperty(RiSE.prototype, "token", {
        /**
         * JWT TOKEN THAT IS CONFIGURED
         */
        get: function () {
            return this.config.token;
        },
        set: function (val) {
            this.config.token = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RiSE.prototype, "public_key", {
        /**
         * The KEYS to use
         */
        get: function () {
            return this.config.public_key;
        },
        set: function (val) {
            this.config.public_key = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RiSE.prototype, "private_key", {
        get: function () {
            return this.config.private_key;
        },
        set: function (val) {
            this.config.private_key = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RiSE.prototype, "session", {
        /**
         * SESSION VARIABLE USED TO SEPERATE REQUESTS FOR A GIVEN USER TYPE
         */
        get: function () {
            return this.config.session;
        },
        set: function (val) {
            this.config.session = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RiSE.prototype, "api_version", {
        /**
         * API VERSION IS CONFIGURED
         */
        get: function () {
            return this.config.api_version;
        },
        set: function (val) {
            this.config.api_version = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RiSE.prototype, "user", {
        /**
         * API USER WHO LOGGED IN
         */
        get: function () {
            return this._user;
        },
        set: function (val) {
            this._user = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RiSE.prototype, "cart", {
        /**
         * API USER WHO LOGGED IN, Cart
         */
        get: function () {
            return this._cart;
        },
        set: function (val) {
            this._cart = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RiSE.prototype, "_request", {
        /**
         * Request Middleware
         */
        get: function () {
            return this.config.request_middleware;
        },
        set: function (val) {
            this.config.request_middleware = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RiSE.prototype, "_request_timeout", {
        get: function () {
            return this.config.request_timeout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RiSE.prototype, "requestUrl", {
        /**
         * URL to RiSE API
         * Sandbox or live
         */
        get: function () {
            return this.config.url
                || this.config.beta
                ? 'https://api.beta.rise.store'
                : this.config.sandbox
                    ? 'https://api.sandbox.rise.store'
                    : 'https://api.rise.store';
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     */
    RiSE.prototype.authenticateApiUser = function (channel_uuid, identifier, password) {
        var _this = this;
        return this.channelAuth.login({
            channel_uuid: channel_uuid,
            username: identifier || this.config.username || this.config.email,
            password: password || this.config.password
        })
            .then(function (body) {
            if (body === void 0) { body = {}; }
            _this.user = body.data.ChannelUser;
            _this.cart = body.data.ChannelCart;
            _this.token = body.token;
            _this.session = body.session;
            return body;
        });
    };
    /**
     * get Application JWT token to be used for follow on request through this application
     */
    // authenticateApplication() {
    //   return this.channelApplication.authenticate({
    //     public_key: this.config.public_key,
    //     private_key: this.config.private_key
    //   })
    //     .then(body => {
    //       this.token = body.token
    //       this.session = body.session
    //       return body
    //     })
    // }
    /**
     * Serialize a Query String
     * @param obj
     * @param prefix
     */
    RiSE.prototype.serializeQuery = function (obj, prefix) {
        var str = [], p;
        for (p in obj) {
            if (obj.hasOwnProperty(p)) {
                var k = prefix
                    ? prefix + '[' + p + ']'
                    : p;
                var v = obj[p];
                str.push((v !== null && typeof v === 'object')
                    ? this.serializeQuery(v, k)
                    : encodeURIComponent(k) + '=' + encodeURIComponent(v));
            }
        }
        return str.join('&');
    };
    /**
     * Return Request Method and URL for the request call
     * @param route
     * @param query
     * @param paginate
     */
    RiSE.prototype.composeUrl = function (route, query, paginate) {
        if (route === void 0) { route = {}; }
        if (query === void 0) { query = null; }
        if (paginate && paginate.current) {
            // TODO, add limit and offset automatically to query
        }
        // The Request method
        var method = Object.keys(route)[0];
        // The composed URL
        var url = this.requestUrl + "/api/v" + this.api_version + "/" + route[method];
        // Add a query if supplied
        if (query) {
            url = url + "?" + this.serializeQuery(query);
        }
        // returns object
        return { url: url, method: method };
    };
    /**
     * If paginate is available on the Action, then add pagination utility functions to the response
     * @param response
     * @param paginate
     * @returns response
     */
    // TODO
    RiSE.prototype.addPaginationToResponse = function (response, paginate) {
        if (paginate === void 0) { paginate = null; }
        if (paginate) {
            //
        }
        return response;
    };
    /**
     * If this request is being made by a browser, then we should grab the agent if not set
     * @param req
     */
    RiSE.prototype.ifBrowserSetAgent = function (req) {
        var agent = {};
        if (typeof window !== 'undefined') {
            if (window.navigator && !req.headers['User-Agent']) {
                req.headers['User-Agent'] = window.navigator.userAgent;
            }
        }
        return req;
    };
    /**
     * Perform a request.
     * @name request
     * @param req
     * @param {*} body as json
     * @param validation
     */
    RiSE.prototype.request = function (req, body, validation) {
        var _this = this;
        if (body === void 0) { body = {}; }
        if (validation === void 0) { validation = null; }
        // If this request didn't pass pre validation
        if (validation instanceof Error) {
            var err = __assign({ 'statusCode': '400', 'isPreValidationError': true }, validation);
            return Promise.reject(err);
        }
        // Abstract the route from the api method and use the rest (if any) in the request
        var name = req.name, route = req.route, query = req.query, params = req.params, paginate = req.paginate, __req = __rest(req
        // Get the method and url from the request
        , ["name", "route", "query", "params", "paginate"]);
        // Get the method and url from the request
        var _a = this.composeUrl(route, query, paginate), method = _a.method, url = _a.url;
        //
        // var options = { method: 'GET',
        //   url: 'https://api.sandbox.rise.store/api/v1/channels/<channel_uuid>/applications/<application_uuid>',
        //   headers:
        //     { 'cache-control': 'no-cache',
        //       Connection: 'keep-alive',
        //       Cookie: '<cookie>',
        //       'Content-Length': '100',
        //       'Accept-Encoding': 'gzip, deflate',
        //       Host: '<>',
        //       'Cache-Control': 'no-cache',
        //       'User-Agent': 'PostmanRuntime/7.16.3',
        //       Session: '<session>',
        //       Authorization: 'JWT <>',
        //       Accept: 'application/json',
        //       'X-APPLICATION-KEY': 'pk_<>',
        //       'Content-Type': 'application/json' },
        //   body: {};
        //
        var _req = {
            // ...__req,
            headers: __assign({}, __req.headers),
            method: method,
            url: url,
            strictSSL: false,
            json: true,
            timeout: this._request_timeout,
            body: body,
            params: params
        };
        // // If the Query is set, then add it to the request
        // if (query && !isEmpty(query)) {
        //   _req.qs = query
        // }
        // Set the Application Public key if on the request or included in the class
        if (__req.public_key || this.config.public_key) {
            _req.headers['X-APPLICATION-KEY'] = __req.public_key || this.config.public_key;
        }
        // Set the JWT token if in the request or persisted to the class
        if (__req.token || this.token) {
            _req.headers['Authorization'] = "JWT " + (__req.token || this.token);
        }
        // Set the Session UUID if in the request or persisted to the class
        if (__req.session || this.session) {
            _req.headers['Session'] = __req.session || this.session;
        }
        // If this is a browser based request, let's set the headers
        this.ifBrowserSetAgent(_req);
        // If this is test request, start a timer for the request
        if ((this.config.sandbox || this.config.beta) && (this.log && this.log.time)) {
            this.log.time("RiSE req " + name);
        }
        // Make the request and return a Promise
        return this._request(_req)
            .then(function (res) {
            // End the console logger
            if ((_this.config.sandbox || _this.config.beta) && (_this.log && _this.log.timeEnd)) {
                _this.log.timeEnd("RiSE req " + name);
            }
            // Add the pagination to response if appropriate for request
            return res = _this.addPaginationToResponse(res, paginate);
        })
            .catch(function (err) {
            // TODO uniform errors into an array
            return Promise.reject(err);
        });
    };
    return RiSE;
}());
exports.RiSE = RiSE;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/metadata.js":
/*!**********************************!*\
  !*** ./dist.browser/metadata.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
var lodash_1 = __webpack_require__(/*! lodash */ "lodash");
var validators_1 = __webpack_require__(/*! ./validators */ "./dist.browser/validators/index.js");
/**
 * Command Metadata
 * @description Supplements Issued Commands to the RiSE API
 * @param method
 * @param route
 * @param validator
 * @constructor
 */
function Command(_a) {
    var _b = _a.method, method = _b === void 0 ? 'POST' : _b, _c = _a.route, route = _c === void 0 ? '' : _c, validator = _a.validator, globals = _a.globals;
    return function (target, propertyKey, descriptor) {
        // Original Method
        var _method = descriptor.value;
        var reg = new RegExp(/\:(.*?)(\/|$)/g);
        descriptor.value = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _a;
            var name = target.constructor.name;
            var _b = Object.getPrototypeOf(target).globals, params = _b.params, query = _b.query;
            // Copy the string so that it can be modified
            var _route = route.slice(0, route.length);
            // The data object passed to the method is always the first argument
            var data = args[0];
            var req = args[1] || {};
            var globals = args[3] = { globals: { params: params, query: query } };
            req.name = String(name) + "." + String(propertyKey);
            req.params = __assign({}, (params || {}), (req.params || {}));
            req.query = __assign({}, (query || {}), (req.query || {}));
            req.body = data;
            _route = _route.replace(reg, function (match, $1, $2) {
                var replace = req.params[$1] || req.body[$1];
                // If the body was used, add as a param
                req.params[$1] = replace;
                // Return the replacement leveraging the parameters.
                return "" + replace + ($2 ? '/' : '');
            });
            // Extend the request argument
            args[1] = __assign({}, req, { route: (_a = {}, _a[method] = _route, _a) });
            // If the validator was passed to the metadata, then use it to validate
            if (validator) {
                return Promise.resolve()
                    .then(function () {
                    // Always Validate a query string
                    if (validator && validator.query && typeof validator.query === 'function') {
                        return validator.query(req.query);
                    }
                    return validators_1.core.query(req.query);
                })
                    .then(function (valid) {
                    if (validator && validator.params && typeof validator.params === 'function') {
                        return validator.params(req.params);
                    }
                    return valid;
                })
                    .then(function (valid) {
                    if (validator && validator.body && typeof validator.body === 'function') {
                        return validator.body(req.body);
                    }
                    // If it's just a plain function
                    else if (typeof validator === 'function') {
                        var body = lodash_1.isArray(req.body) ? req.body.map(function (b) {
                            return __assign({}, req.params, req.query, b);
                        }) : __assign({}, req.body, req.params, req.query);
                        return validator(body);
                    }
                    return valid;
                })
                    .then(function (valid) {
                    args[2] = valid;
                    return _method.apply(_this, args);
                })
                    .catch(function (err) {
                    args[2] = err;
                    return _method.apply(_this, args);
                });
            }
            else {
                _method.apply(this, args);
            }
        };
        return descriptor;
    };
}
exports.Command = Command;
/**
 * Action Metadata
 * @description Supplements Issued Actions to the RiSE API
 * @param method
 * @param route
 * @param validator
 * @constructor
 */
function Action(_a) {
    var _b = _a.method, method = _b === void 0 ? 'GET' : _b, _c = _a.route, route = _c === void 0 ? '' : _c, validator = _a.validator, globals = _a.globals;
    return function (target, propertyKey, descriptor) {
        // Original Method
        var _method = descriptor.value;
        var reg = new RegExp(/\:(.*?)(\/|$)/g);
        descriptor.value = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _a;
            var name = target.constructor.name;
            var _b = Object.getPrototypeOf(target).globals, params = _b.params, query = _b.query;
            // Copy the string so that it can be modified
            var _route = route.slice(0, route.length);
            // The data object passed to the method is always the first argument
            var data = args[0];
            var req = args[1] || {};
            var globals = args[3] = { globals: { params: params, query: query } };
            req.name = String(name) + "." + String(propertyKey);
            req.params = __assign({}, (params || {}), (req.params || {}));
            req.query = __assign({}, (query || {}), (req.query || {}));
            req.body = data;
            _route = _route.replace(reg, function (match, $1, $2) {
                var replace = req.params[$1] || req.body[$1];
                // If the body was used, add as a param
                req.params[$1] = replace;
                // Return the replacement leveraging the parameters.
                return "" + replace + ($2 ? '/' : '');
            });
            // Extend the request argument
            args[1] = __assign({}, req, { route: (_a = {}, _a[method] = _route, _a) });
            // If the validator was passed to the metadata, then use it to validate
            if (validator) {
                return Promise.resolve()
                    .then(function () {
                    // Always Validate a query string
                    if (validator && validator.query && typeof validator.query === 'function') {
                        return validator.query(req.query);
                    }
                    return validators_1.core.query(req.query);
                })
                    .then(function (valid) {
                    if (validator && validator.params && typeof validator.params === 'function') {
                        return validator.params(req.params);
                    }
                    return valid;
                })
                    .then(function (valid) {
                    if (validator && validator.body && typeof validator.body === 'function') {
                        return validator.body(req.body);
                    }
                    // If it's just a plain function
                    else if (typeof validator === 'function') {
                        var body = lodash_1.isArray(req.body) ? req.body.map(function (b) {
                            return __assign({}, req.params, req.query, b);
                        }) : __assign({}, req.body, req.params, req.query);
                        return validator(body);
                    }
                    return valid;
                })
                    .then(function (valid) {
                    args[2] = valid;
                    return _method.apply(_this, args);
                })
                    .catch(function (err) {
                    args[2] = err;
                    return _method.apply(_this, args);
                });
            }
            else {
                return _method.apply(this, args);
            }
        };
        return descriptor;
    };
}
exports.Action = Action;
/**
 * Event Metadata
 * @description Responds to an Event from the RiSE API
 * @constructor
 */
function Event() {
    return function (target, propertyKey, descriptor) {
        return descriptor;
    };
}
exports.Event = Event;
/**
 * Paginate
 * @description Adds .previous() and .next() to list responses
 * @constructor
 */
function Paginate() {
    return function (target, propertyKey, descriptor) {
        // Original Method
        var _method = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // Abstract out the current limit and offset and calculate the previous/next
            var query = args[1].query;
            var limit = query ? query.limit || 10 : 10;
            var offset = query ? query.offset || 0 : 0;
            var prevOffset = Math.max(Math.floor(offset - limit), 0);
            var nextOffset = offset + limit;
            // Set the pagination on the request argument
            args[1].paginate = {
                next: {
                    limit: limit,
                    offset: nextOffset
                },
                previous: {
                    limit: limit,
                    offset: prevOffset
                }
            };
            return _method.apply(this, args);
        };
        return descriptor;
    };
}
exports.Paginate = Paginate;
//# sourceMappingURL=metadata.js.map

/***/ }),

/***/ "./dist.browser/schemas/application/index.js":
/*!***************************************************!*\
  !*** ./dist.browser/schemas/application/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a, _b;
var joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
var uuid = joi_1.default.string().guid();
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
exports.commands = (_a = {},
    _a[enums_1.COMMANDS.CREATE_APPLICATION] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required()
        }).unknown(),
        body: joi_1.default.object().keys({
            email: joi_1.default.string().allow(null)
        }).unknown()
    },
    _a[enums_1.COMMANDS.UPDATE_APPLICATION] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            application_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({
            email: joi_1.default.string().allow(null),
        }).unknown()
    },
    _a);
exports.actions = (_b = {},
    _b[enums_1.ACTIONS.GET_APPLICATION] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            application_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.LIST_APPLICATIONS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required()
        }).unknown()
    },
    _b[enums_1.ACTIONS.SUBSCRIBE_APPLICATION] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required()
        }).unknown()
    },
    _b);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/schemas/auth/index.js":
/*!********************************************!*\
  !*** ./dist.browser/schemas/auth/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a, _b;
var joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
var uuid = joi_1.default.string().guid();
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
exports.commands = (_a = {},
    _a[enums_1.COMMANDS.LOGIN_USER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({
            user_uuid: uuid,
            username: joi_1.default.string().min(3),
            identifier: joi_1.default.string().min(3),
            email: joi_1.default.string(),
            password: joi_1.default.string().min(8),
        }).unknown().or('email', 'username', 'identifier')
    },
    _a[enums_1.COMMANDS.LOGOUT_USER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({}).unknown()
    },
    _a[enums_1.COMMANDS.REGISTER_USER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required()
        }).unknown(),
        body: joi_1.default.object().keys({
            username: joi_1.default.string().min(3),
            email: joi_1.default.string(),
            password: joi_1.default.string().min(8),
        }).unknown().or('email', 'username'),
    },
    _a[enums_1.COMMANDS.UPDATE_SESSION_USER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({}).unknown()
    },
    _a[enums_1.COMMANDS.UPDATE_SESSION_CART] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({}).unknown()
    },
    _a[enums_1.COMMANDS.SET_SESSION_CART_SHIPPING] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({}).unknown()
    },
    _a[enums_1.COMMANDS.SET_SESSION_CART_BILLING] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({}).unknown()
    },
    _a[enums_1.COMMANDS.SET_SESSION_CART_PAYMENT] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({}).unknown()
    },
    _a[enums_1.COMMANDS.CREATE_SESSION_CART_ITEM] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({}).unknown()
    },
    _a[enums_1.COMMANDS.UPDATE_SESSION_CART_ITEM] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({}).unknown()
    },
    _a[enums_1.COMMANDS.REMOVE_SESSION_CART_ITEM] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({}).unknown()
    },
    _a[enums_1.COMMANDS.UPDATE_SESSION_CUSTOMER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({}).unknown()
    },
    _a[enums_1.COMMANDS.SET_SESSION_CUSTOMER_SHIPPING] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({}).unknown()
    },
    _a[enums_1.COMMANDS.SET_SESSION_CUSTOMER_BILLING] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({}).unknown()
    },
    _a[enums_1.COMMANDS.SET_RECOVERY] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({
            identifier: joi_1.default.string(),
            email: joi_1.default.string(),
            username: joi_1.default.string(),
            redirect: joi_1.default.string(),
        }).unknown()
    },
    _a[enums_1.COMMANDS.RECOVER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({
            recovery: joi_1.default.string(),
            password: joi_1.default.string(),
            redirect: joi_1.default.string(),
        }).unknown()
    },
    _a);
exports.actions = (_b = {},
    _b[enums_1.ACTIONS.GET_SESSION] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_SESSION_CART] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_SESSION_CART_PAYMENT] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_SESSION_CART_BILLING] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_SESSION_CART_SHIPPING] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_SESSION_CART_ITEM] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.LIST_SESSION_CART_ITEMS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_SESSION_CUSTOMER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_SESSION_CUSTOMER_BILLING] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_SESSION_CUSTOMER_SHIPPING] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_SESSION_CHANNEL] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_SESSION_USER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.LIST_SESSION_CUSTOMER_CARTS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required()
        }).unknown()
    },
    _b[enums_1.ACTIONS.LIST_SESSION_CUSTOMER_ACCOUNTS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required()
        }).unknown()
    },
    _b[enums_1.ACTIONS.LIST_SESSION_CUSTOMER_FEEDS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required()
        }).unknown()
    },
    _b[enums_1.ACTIONS.LIST_SESSION_CUSTOMER_SOURCES] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required()
        }).unknown()
    },
    _b[enums_1.ACTIONS.LIST_SESSION_CUSTOMER_ORDERS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required()
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_SESSION_CUSTOMER_ORDER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            order_uuid: uuid.required()
        }).unknown()
    },
    _b[enums_1.ACTIONS.LIST_SESSION_CUSTOMER_ORDER_ITEMS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            order_uuid: uuid.required()
        }).unknown()
    },
    _b[enums_1.ACTIONS.LIST_SESSION_CUSTOMER_USERS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required()
        }).unknown()
    },
    _b[enums_1.ACTIONS.LIST_SESSION_ROLES] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_SESSION_CHANNEL] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.LIST_SESSION_CHANNELS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown()
    },
    _b);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/schemas/cart/index.js":
/*!********************************************!*\
  !*** ./dist.browser/schemas/cart/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a, _b;
var joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
var uuid = joi_1.default.string().guid();
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
exports.address = {
    address_1: joi_1.default.string(),
    address_2: joi_1.default.string().allow('', null).optional(),
    address_3: joi_1.default.string().allow('', null).optional(),
    company: joi_1.default.string().allow('', null).optional(),
    city: joi_1.default.string(),
    name_prefix: joi_1.default.string().allow('', null).optional(),
    name_first: joi_1.default.string().allow('', null).optional(),
    name_last: joi_1.default.string().allow('', null).optional(),
    name_suffix: joi_1.default.string().allow('', null).optional(),
    phone: joi_1.default.string().allow('', null).optional(),
    province: joi_1.default.string(),
    province_code: joi_1.default.string(),
    country: joi_1.default.string(),
    country_code: joi_1.default.string(),
    country_name: joi_1.default.string(),
    postal_code: joi_1.default.string(),
    live_mode: joi_1.default.boolean().allow(null)
};
exports.payment_details = {
// gateway_token: joi.string().allow(null)
};
exports.fulfillment_details = {
// gateway_token: joi.string().allow(null)
};
exports.item = {
    channel_uuid: uuid,
    offer_uuid: uuid,
    variant_uuid: uuid,
    quantity: joi_1.default.number(),
    payment_details: joi_1.default.object().keys(exports.payment_details).unknown(),
    fulfillment_details: joi_1.default.object().keys(exports.fulfillment_details).unknown(),
};
exports.cart = {
    channel_uuid: uuid,
    cart_uuid: uuid,
    email: joi_1.default.string().allow(null),
    address_shipping: joi_1.default.object().keys(exports.address).unknown(),
    address_billing: joi_1.default.object().keys(exports.address).unknown(),
    payment_details: joi_1.default.object().keys(exports.payment_details).unknown(),
    fulfillment_details: joi_1.default.object().keys(exports.fulfillment_details).unknown(),
    notes: joi_1.default.string(),
    items: joi_1.default.array().items(joi_1.default.object().keys(exports.item))
};
exports.commands = (_a = {},
    _a[enums_1.COMMANDS.CREATE_CART] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }),
        body: joi_1.default.object().keys(__assign({}, exports.cart)).unknown()
    },
    _a[enums_1.COMMANDS.UPDATE_CART] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            cart_uuid: uuid.required(),
        }),
        body: joi_1.default.object().keys(__assign({}, exports.cart, { email: joi_1.default.string().allow(null) })).unknown()
    },
    _a[enums_1.COMMANDS.CHECKOUT_CART] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            cart_uuid: uuid.required()
        }).unknown()
    },
    _a[enums_1.COMMANDS.SET_CART_BILLING] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            cart_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys(__assign({}, exports.address)).unknown()
    },
    _a[enums_1.COMMANDS.SET_CART_SHIPPING] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            cart_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys(__assign({}, exports.address)).unknown()
    },
    _a[enums_1.COMMANDS.SET_CART_CUSTOMER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            cart_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({
            customer_uuid: uuid.required(),
        }).unknown(),
    },
    _a[enums_1.COMMANDS.SET_CART_FULFILLMENT] = {
        params: joi_1.default.object().keys(__assign({}, exports.fulfillment_details, { channel_uuid: uuid.required(), cart_uuid: uuid.required() })).unknown(),
        body: joi_1.default.object().keys(__assign({}, exports.fulfillment_details)).unknown()
    },
    _a[enums_1.COMMANDS.SET_CART_PAYMENT] = joi_1.default.object().keys(__assign({}, exports.payment_details, { channel_uuid: uuid.required(), cart_uuid: uuid.required() })).unknown(),
    _a[enums_1.COMMANDS.CREATE_CART_ITEM] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            cart_uuid: uuid.required()
        }).unknown(),
        body: joi_1.default.object().keys(__assign({}, exports.item, { offer_uuid: uuid.required(), variant_uuid: uuid })).unknown()
    },
    _a[enums_1.COMMANDS.UPDATE_CART_ITEM] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            cart_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys(__assign({}, exports.item)).unknown(),
    },
    _a[enums_1.COMMANDS.REMOVE_CART_ITEM] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            cart_uuid: uuid.required(),
            item_uuid: uuid.required()
        }).unknown()
    },
    _a);
exports.actions = (_b = {},
    _b[enums_1.ACTIONS.GET_CART] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            cart_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.LIST_CARTS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required()
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_CART_CUSTOMER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            cart_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_CART_BILLING] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            cart_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_CART_SHIPPING] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            cart_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_CART_PAYMENT_DETAILS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            cart_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_CART_FULFILLMENT_DETAILS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            cart_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_CART_ITEM] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            cart_uuid: uuid.required(),
            item_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.LIST_CART_ITEMS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            cart_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_CART_ITEM_PAYMENT_DETAILS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            cart_uuid: uuid.required(),
            item_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_CART_ITEM_FULFILLMENT_DETAILS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            cart_uuid: uuid.required(),
            item_uuid: uuid.required(),
        }).unknown()
    },
    _b);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/schemas/channel/index.js":
/*!***********************************************!*\
  !*** ./dist.browser/schemas/channel/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
var uuid = joi_1.default.string().guid();
exports.channel = joi_1.default.object().keys({
    channel_uuid: uuid.required(),
});
exports.commands = {};
exports.actions = {};
exports.create = joi_1.default.object().keys({
    channel_uuid: uuid.required()
}).unknown();
exports.update = joi_1.default.object().keys({
    channel_uuid: uuid.required(),
}).unknown();
exports.get = joi_1.default.object().keys({
    channel_uuid: uuid.required()
}).unknown();
exports.list = joi_1.default.object().keys({
// channel_uuid: uuid
}).unknown();
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/schemas/collection/index.js":
/*!**************************************************!*\
  !*** ./dist.browser/schemas/collection/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a, _b;
var joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
var uuid = joi_1.default.string().guid();
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
exports.commands = (_a = {},
    _a[enums_1.COMMANDS.CREATE_COLLECTION] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({}).unknown()
    },
    _a[enums_1.COMMANDS.ADD_COLLECTION] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            collection_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({}).unknown()
    },
    _a[enums_1.COMMANDS.UPDATE_COLLECTION] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            collection_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({}).unknown()
    },
    _a);
exports.actions = (_b = {},
    _b[enums_1.ACTIONS.GET_COLLECTION] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            collection_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.FIND_COLLECTION] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.LIST_COLLECTIONS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required()
        }).unknown()
    },
    _b[enums_1.ACTIONS.FIND_COLLECTIONS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required()
        }).unknown()
    },
    _b);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/schemas/core/index.js":
/*!********************************************!*\
  !*** ./dist.browser/schemas/core/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
exports.params = joi_1.default.object().keys({}).unknown();
exports.query = joi_1.default.object().keys({
    term: joi_1.default.string(),
    where: joi_1.default.object(),
    limit: joi_1.default.number(),
    offset: joi_1.default.number(),
    sort: joi_1.default.array().items(joi_1.default.array())
}).unknown();
exports.session = joi_1.default.string();
exports.token = joi_1.default.string();
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/schemas/country/index.js":
/*!***********************************************!*\
  !*** ./dist.browser/schemas/country/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a, _b;
var joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
var uuid = joi_1.default.string().guid();
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
exports.commands = (_a = {},
    _a[enums_1.COMMANDS.ADD_COUNTRY] = joi_1.default.object().keys({
        channel_uuid: uuid.required(),
        country_code: joi_1.default.string().required(),
    }).unknown(),
    _a[enums_1.COMMANDS.UPDATE_COUNTRY] = joi_1.default.object().keys({
        channel_uuid: uuid.required(),
        country_code: joi_1.default.string().required(),
    }).unknown(),
    _a[enums_1.COMMANDS.REMOVE_COUNTRY] = joi_1.default.object().keys({
        channel_uuid: uuid.required(),
        country_code: joi_1.default.string().required(),
    }).unknown(),
    _a[enums_1.COMMANDS.PUBLISH_COUNTRY] = joi_1.default.object().keys({
        channel_uuid: uuid.required(),
        country_code: joi_1.default.string().required(),
    }).unknown(),
    _a[enums_1.COMMANDS.UNPUBLISH_COUNTRY] = joi_1.default.object().keys({
        channel_uuid: uuid.required(),
        country_code: joi_1.default.string().required(),
    }).unknown(),
    _a[enums_1.COMMANDS.ADD_PROVINCE] = joi_1.default.object().keys({
        channel_uuid: uuid.required(),
        country_code: joi_1.default.string().required(),
        province_code: joi_1.default.string().required(),
    }).unknown(),
    _a[enums_1.COMMANDS.UPDATE_PROVINCE] = joi_1.default.object().keys({
        channel_uuid: uuid.required(),
        country_code: joi_1.default.string().required(),
        province_code: joi_1.default.string().required(),
    }).unknown(),
    _a[enums_1.COMMANDS.REMOVE_PROVINCE] = joi_1.default.object().keys({
        channel_uuid: uuid.required(),
        country_code: joi_1.default.string().required(),
        province_code: joi_1.default.string().required(),
    }).unknown(),
    _a[enums_1.COMMANDS.PUBLISH_PROVINCE] = joi_1.default.object().keys({
        channel_uuid: uuid.required(),
        country_code: joi_1.default.string().required(),
        province_code: joi_1.default.string().required(),
    }).unknown(),
    _a[enums_1.COMMANDS.UNPUBLISH_PROVINCE] = joi_1.default.object().keys({
        channel_uuid: uuid.required(),
        country_code: joi_1.default.string().required(),
        province_code: joi_1.default.string().required(),
    }).unknown(),
    _a);
exports.actions = (_b = {},
    _b[enums_1.ACTIONS.GET_COUNTRY] = joi_1.default.object().keys({
        channel_uuid: uuid.required(),
        country_code: joi_1.default.string().required(),
    }).unknown(),
    _b[enums_1.ACTIONS.FIND_COUNTRY] = joi_1.default.object().keys({
        channel_uuid: uuid.required(),
    }).unknown(),
    _b[enums_1.ACTIONS.LIST_COUNTRIES] = joi_1.default.object().keys({
        channel_uuid: uuid.required()
    }).unknown(),
    _b[enums_1.ACTIONS.FIND_COUNTRIES] = joi_1.default.object().keys({
        channel_uuid: uuid.required()
    }).unknown(),
    _b[enums_1.ACTIONS.GET_COUNTRY_PROVINCE] = joi_1.default.object().keys({
        channel_uuid: uuid.required(),
        country_code: joi_1.default.string().required(),
    }).unknown(),
    _b[enums_1.ACTIONS.LIST_COUNTRY_PROVINCES] = joi_1.default.object().keys({
        channel_uuid: uuid.required()
    }).unknown(),
    _b[enums_1.ACTIONS.FIND_COUNTRY_PROVINCE] = joi_1.default.object().keys({
        channel_uuid: uuid.required(),
        country_code: joi_1.default.string().required(),
    }).unknown(),
    _b[enums_1.ACTIONS.FIND_COUNTRY_PROVINCES] = joi_1.default.object().keys({
        channel_uuid: uuid.required(),
        country_code: joi_1.default.string().required(),
    }).unknown(),
    _b);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/schemas/customer/index.js":
/*!************************************************!*\
  !*** ./dist.browser/schemas/customer/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a, _b;
var joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
var uuid = joi_1.default.string().guid();
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
exports.address = {
    address_1: joi_1.default.string(),
    address_2: joi_1.default.string().allow('', null).optional(),
    address_3: joi_1.default.string().allow('', null).optional(),
    company: joi_1.default.string().allow('', null).optional(),
    city: joi_1.default.string(),
    name_prefix: joi_1.default.string().allow('', null).optional(),
    name_first: joi_1.default.string().allow('', null).optional(),
    name_last: joi_1.default.string().allow('', null).optional(),
    name_suffix: joi_1.default.string().allow('', null).optional(),
    phone: joi_1.default.string().allow('', null).optional(),
    province: joi_1.default.string(),
    province_code: joi_1.default.string(),
    country: joi_1.default.string(),
    country_code: joi_1.default.string(),
    country_name: joi_1.default.string(),
    postal_code: joi_1.default.string(),
    live_mode: joi_1.default.boolean().allow(null)
};
exports.customer = {
    channel_uuid: uuid,
    customer_uuid: uuid,
    user_primary_uuid: joi_1.default.string().guid(),
    account_primary_uuid: joi_1.default.string().guid(),
    source_primary_uuid: joi_1.default.string().guid(),
    customer_handle: joi_1.default.string(),
    notes: joi_1.default.string(),
    notes_attributes: joi_1.default.object(),
    address_billing: exports.address,
    address_shipping: exports.address,
    blacklisted: joi_1.default.boolean(),
    blacklisted_at: joi_1.default.date(),
    unblacklisted_at: joi_1.default.date(),
    last_order_uuid: joi_1.default.string().guid(),
    last_order_name: joi_1.default.string(),
    total_orders: joi_1.default.number().integer(),
    total_spent: joi_1.default.number().integer(),
    avg_spent: joi_1.default.number().integer(),
    live_mode: joi_1.default.boolean().allow(null),
    created_at: joi_1.default.date().allow(null),
    updated_at: joi_1.default.date().allow(null)
};
exports.commands = (_a = {},
    _a[enums_1.COMMANDS.CREATE_CUSTOMER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }),
        body: joi_1.default.object().keys(__assign({}, exports.customer)).unknown()
    },
    _a[enums_1.COMMANDS.UPDATE_CUSTOMER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            customer_uuid: uuid.required(),
        }),
        body: joi_1.default.object().keys(__assign({}, exports.customer)).unknown()
    },
    _a[enums_1.COMMANDS.SET_CUSTOMER_BILLING] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            customer_uuid: uuid.required(),
        }),
        body: joi_1.default.object().keys(__assign({}, exports.address)).unknown()
    },
    _a[enums_1.COMMANDS.SET_CUSTOMER_SHIPPING] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            customer_uuid: uuid.required(),
        }),
        body: joi_1.default.object().keys(__assign({}, exports.address)).unknown()
    },
    _a);
exports.actions = (_b = {},
    _b[enums_1.ACTIONS.GET_CUSTOMER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            customer_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.FIND_CUSTOMER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_PUBLIC_CUSTOMER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            customer_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.FIND_PUBLIC_CUSTOMER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required()
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_CUSTOMER_SHIPPING] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            customer_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_CUSTOMER_BILLING] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            customer_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.LIST_CUSTOMERS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required()
        }).unknown()
    },
    _b[enums_1.ACTIONS.FIND_CUSTOMERS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required()
        }).unknown()
    },
    _b);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/schemas/feed/index.js":
/*!********************************************!*\
  !*** ./dist.browser/schemas/feed/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a, _b;
var joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
var feed_1 = __webpack_require__(/*! ../../enums/feed */ "./dist.browser/enums/feed.js");
exports.channel_uuid = joi_1.default.string().uuid();
exports.feed_uuid = joi_1.default.string().guid();
exports.feedItem_uuid = joi_1.default.string().guid();
exports.feed = joi_1.default.object().keys({
    channel_uuid: exports.channel_uuid,
    feed_uuid: exports.feed_uuid.required(),
});
exports.commands = (_a = {},
    _a[feed_1.FEED_COMMANDS.CREATE_FEED] = joi_1.default.object().keys({
        channel_uuid: exports.channel_uuid,
        feed_uuid: exports.feed_uuid.required(),
    }).unknown(),
    _a[feed_1.FEED_COMMANDS.UPDATE_FEED] = joi_1.default.object().keys({
        channel_uuid: exports.channel_uuid,
        feed_uuid: exports.feed_uuid.required(),
    }).unknown(),
    _a[feed_1.FEED_COMMANDS.CREATE_FEED_ITEM] = joi_1.default.object().keys({
        channel_uuid: exports.channel_uuid,
        feed_uuid: exports.feed_uuid.required(),
    }).unknown(),
    _a[feed_1.FEED_COMMANDS.UPDATE_FEED_ITEM] = joi_1.default.object().keys({
        channel_uuid: exports.channel_uuid,
        feed_uuid: exports.feed_uuid.required(),
        feedItem_uuid: exports.feedItem_uuid.required(),
    }).unknown(),
    _a[feed_1.FEED_COMMANDS.DESTROY_FEED_ITEM] = joi_1.default.object().keys({
        channel_uuid: exports.channel_uuid,
        feed_uuid: exports.feed_uuid.required(),
        feedItem_uuid: exports.feedItem_uuid.required(),
    }).unknown(),
    _a[feed_1.FEED_COMMANDS.MARK_FEED_ITEM] = joi_1.default.object().keys({
        channel_uuid: exports.channel_uuid,
        feed_uuid: exports.feed_uuid.required(),
        feedItem_uuid: exports.feedItem_uuid.required(),
    }).unknown(),
    _a);
exports.actions = (_b = {},
    _b[feed_1.FEED_ACTIONS.LIST_FEEDS] = joi_1.default.object().keys({
        channel_uuid: exports.channel_uuid,
        feed_uuid: exports.feed_uuid.required(),
    }).unknown(),
    _b[feed_1.FEED_ACTIONS.GET_FEED_PRIMARY] = joi_1.default.object().keys({
        channel_uuid: exports.channel_uuid,
        feed_uuid: exports.feed_uuid.required(),
    }).unknown(),
    _b[feed_1.FEED_ACTIONS.GET_FEED] = joi_1.default.object().keys({
        channel_uuid: exports.channel_uuid,
        feed_uuid: exports.feed_uuid.required(),
    }).unknown(),
    _b[feed_1.FEED_ACTIONS.GET_FEED_ITEM] = joi_1.default.object().keys({
        channel_uuid: exports.channel_uuid,
        feed_uuid: exports.feed_uuid.required(),
        feedItem_uuid: exports.feedItem_uuid.required()
    }).unknown(),
    _b[feed_1.FEED_ACTIONS.LIST_FEED_ITEMS] = joi_1.default.object().keys({
        channel_uuid: exports.channel_uuid,
        feed_uuid: exports.feed_uuid.required(),
        feedItem_uuid: exports.feedItem_uuid.required()
    }).unknown(),
    _b);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/schemas/fulfillment/index.js":
/*!***************************************************!*\
  !*** ./dist.browser/schemas/fulfillment/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a, _b;
var joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
var fulfillment_1 = __webpack_require__(/*! ../../enums/fulfillment */ "./dist.browser/enums/fulfillment.js");
exports.channel_uuid = joi_1.default.string().uuid();
exports.fulfillment_uuid = joi_1.default.string().guid();
exports.fulfillmentItem_uuid = joi_1.default.string().guid();
exports.fulfillment = joi_1.default.object().keys({
    channel_uuid: exports.channel_uuid,
    fulfillment_uuid: exports.fulfillment_uuid.required(),
});
exports.commands = (_a = {},
    _a[fulfillment_1.FULFILLMENT_COMMANDS.CREATE_FULFILLMENT] = joi_1.default.object().keys({
        channel_uuid: exports.channel_uuid,
        fulfillment_uuid: exports.fulfillment_uuid.required(),
    }).unknown(),
    _a[fulfillment_1.FULFILLMENT_COMMANDS.UPDATE_FULFILLMENT] = joi_1.default.object().keys({
        channel_uuid: exports.channel_uuid,
        fulfillment_uuid: exports.fulfillment_uuid.required(),
    }).unknown(),
    _a[fulfillment_1.FULFILLMENT_COMMANDS.CREATE_FULFILLMENT_ITEM] = joi_1.default.object().keys({
        channel_uuid: exports.channel_uuid,
        fulfillment_uuid: exports.fulfillment_uuid.required(),
    }).unknown(),
    _a[fulfillment_1.FULFILLMENT_COMMANDS.UPDATE_FULFILLMENT_ITEM] = joi_1.default.object().keys({
        channel_uuid: exports.channel_uuid,
        fulfillment_uuid: exports.fulfillment_uuid.required(),
        fulfillmentItem_uuid: exports.fulfillmentItem_uuid.required(),
    }).unknown(),
    _a[fulfillment_1.FULFILLMENT_COMMANDS.DESTROY_FULFILLMENT_ITEM] = joi_1.default.object().keys({
        channel_uuid: exports.channel_uuid,
        fulfillment_uuid: exports.fulfillment_uuid.required(),
        fulfillmentItem_uuid: exports.fulfillmentItem_uuid.required(),
    }).unknown(),
    _a);
exports.actions = (_b = {},
    _b[fulfillment_1.FULFILLMENT_ACTIONS.LIST_FULFILLMENTS] = joi_1.default.object().keys({
        channel_uuid: exports.channel_uuid,
        fulfillment_uuid: exports.fulfillment_uuid.required(),
    }).unknown(),
    _b[fulfillment_1.FULFILLMENT_ACTIONS.GET_FULFILLMENT] = joi_1.default.object().keys({
        channel_uuid: exports.channel_uuid,
        fulfillment_uuid: exports.fulfillment_uuid.required(),
    }).unknown(),
    _b[fulfillment_1.FULFILLMENT_ACTIONS.GET_FULFILLMENT_ITEM] = joi_1.default.object().keys({
        channel_uuid: exports.channel_uuid,
        fulfillment_uuid: exports.fulfillment_uuid.required(),
        fulfillmentItem_uuid: exports.fulfillmentItem_uuid.required()
    }).unknown(),
    _b[fulfillment_1.FULFILLMENT_ACTIONS.LIST_FULFILLMENT_ITEMS] = joi_1.default.object().keys({
        channel_uuid: exports.channel_uuid,
        fulfillment_uuid: exports.fulfillment_uuid.required(),
        fulfillmentItem_uuid: exports.fulfillmentItem_uuid.required()
    }).unknown(),
    _b);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/schemas/gateway/index.js":
/*!***********************************************!*\
  !*** ./dist.browser/schemas/gateway/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a, _b;
var joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
var uuid = joi_1.default.string().guid();
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
exports.gateway = {
    channel_uuid: uuid,
    gateway_uuid: uuid,
};
exports.commands = (_a = {},
    _a[enums_1.COMMANDS.CREATE_GATEWAY] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }),
        body: joi_1.default.object().keys(__assign({}, exports.gateway)).unknown()
    },
    _a[enums_1.COMMANDS.UPDATE_GATEWAY] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            gateway_uuid: uuid.required()
        }),
        body: joi_1.default.object().keys(__assign({}, exports.gateway)).unknown()
    },
    _a[enums_1.COMMANDS.PUBLISH_GATEWAY] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            gateway_uuid: uuid.required()
        }),
        body: joi_1.default.object().keys(__assign({}, exports.gateway)).unknown()
    },
    _a[enums_1.COMMANDS.UNPUBLISH_GATEWAY] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            gateway_uuid: uuid.required()
        }),
        body: joi_1.default.object().keys(__assign({}, exports.gateway)).unknown()
    },
    _a[enums_1.COMMANDS.UPLOAD_GATEWAYS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }),
        body: joi_1.default.object().keys(__assign({}, exports.gateway)).unknown()
    },
    _a[enums_1.COMMANDS.PROCESS_UPLOADED_GATEWAYS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            upload_uuid: uuid.required(),
        }),
        body: joi_1.default.object().keys(__assign({}, exports.gateway)).unknown()
    },
    _a);
exports.actions = (_b = {},
    _b[enums_1.ACTIONS.GET_GATEWAY] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            gateway_uuid: uuid.required()
        }),
        body: joi_1.default.object().keys(__assign({}, exports.gateway)).unknown()
    },
    _b[enums_1.ACTIONS.GET_GATEWAY_PRIMARY] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }),
        body: joi_1.default.object().keys(__assign({}, exports.gateway)).unknown()
    },
    _b[enums_1.ACTIONS.LIST_GATEWAYS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }),
        body: joi_1.default.object().keys(__assign({}, exports.gateway)).unknown()
    },
    _b[enums_1.ACTIONS.LIST_GATEWAY_EVENTS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            gateway_uuid: uuid.required()
        }),
        body: joi_1.default.object().keys(__assign({}, exports.gateway)).unknown()
    },
    _b[enums_1.ACTIONS.LIST_GATEWAY_UPLOADS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required()
        }),
        body: joi_1.default.object().keys(__assign({}, exports.gateway)).unknown()
    },
    _b);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/schemas/index.js":
/*!***************************************!*\
  !*** ./dist.browser/schemas/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core = __importStar(__webpack_require__(/*! ./core */ "./dist.browser/schemas/core/index.js"));
exports.core = core;
var auth = __importStar(__webpack_require__(/*! ./auth */ "./dist.browser/schemas/auth/index.js"));
exports.auth = auth;
var application = __importStar(__webpack_require__(/*! ./application */ "./dist.browser/schemas/application/index.js"));
exports.application = application;
var cart = __importStar(__webpack_require__(/*! ./cart */ "./dist.browser/schemas/cart/index.js"));
exports.cart = cart;
var collection = __importStar(__webpack_require__(/*! ./collection */ "./dist.browser/schemas/collection/index.js"));
exports.collection = collection;
var channel = __importStar(__webpack_require__(/*! ./channel */ "./dist.browser/schemas/channel/index.js"));
exports.channel = channel;
var country = __importStar(__webpack_require__(/*! ./country */ "./dist.browser/schemas/country/index.js"));
exports.country = country;
var customer = __importStar(__webpack_require__(/*! ./customer */ "./dist.browser/schemas/customer/index.js"));
exports.customer = customer;
var fulfillment = __importStar(__webpack_require__(/*! ./fulfillment */ "./dist.browser/schemas/fulfillment/index.js"));
exports.fulfillment = fulfillment;
var gateway = __importStar(__webpack_require__(/*! ./gateway */ "./dist.browser/schemas/gateway/index.js"));
exports.gateway = gateway;
var offer = __importStar(__webpack_require__(/*! ./offer */ "./dist.browser/schemas/offer/index.js"));
exports.offer = offer;
var order = __importStar(__webpack_require__(/*! ./order */ "./dist.browser/schemas/order/index.js"));
exports.order = order;
var product = __importStar(__webpack_require__(/*! ./product */ "./dist.browser/schemas/product/index.js"));
exports.product = product;
var user = __importStar(__webpack_require__(/*! ./user */ "./dist.browser/schemas/user/index.js"));
exports.user = user;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/schemas/offer/index.js":
/*!*********************************************!*\
  !*** ./dist.browser/schemas/offer/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a, _b;
var joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
var uuid = joi_1.default.string().guid();
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
exports.commands = (_a = {},
    _a[enums_1.COMMANDS.CREATE_OFFER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({
            product_uuid: uuid.required(),
        }).unknown()
    },
    _a[enums_1.COMMANDS.ADD_OFFER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            offer_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({}).unknown()
    },
    _a[enums_1.COMMANDS.UPDATE_OFFER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            offer_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({}).unknown()
    },
    _a[enums_1.COMMANDS.PUBLISH_OFFER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            offer_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({
            published_scope: joi_1.default.string()
        }).unknown()
    },
    _a[enums_1.COMMANDS.UNPUBLISH_OFFER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            offer_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({
            published_scope: joi_1.default.string()
        }).unknown()
    },
    _a[enums_1.COMMANDS.REMOVE_OFFER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            offer_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({}).unknown()
    },
    _a[enums_1.COMMANDS.ADD_OFFER_VARIANT] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            offer_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({}).unknown()
    },
    _a);
exports.actions = (_b = {},
    _b[enums_1.ACTIONS.GET_OFFER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            offer_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.FIND_OFFER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.LIST_OFFERS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required()
        }).unknown()
    },
    _b[enums_1.ACTIONS.FIND_OFFERS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required()
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_OFFER_VARIANT] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            offer_uuid: uuid.required(),
            variant_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.LIST_OFFER_VARIANTS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            offer_uuid: uuid.required()
        }).unknown()
    },
    _b[enums_1.ACTIONS.FIND_OFFER_VARIANTS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required()
        }).unknown()
    },
    _b);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/schemas/order/index.js":
/*!*********************************************!*\
  !*** ./dist.browser/schemas/order/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a, _b;
var joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
var uuid = joi_1.default.string().guid();
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
exports.address = {
    address_1: joi_1.default.string(),
    address_2: joi_1.default.string().allow('', null).optional(),
    address_3: joi_1.default.string().allow('', null).optional(),
    company: joi_1.default.string().allow('', null).optional(),
    city: joi_1.default.string(),
    name_prefix: joi_1.default.string().allow('', null).optional(),
    name_first: joi_1.default.string().allow('', null).optional(),
    name_last: joi_1.default.string().allow('', null).optional(),
    name_suffix: joi_1.default.string().allow('', null).optional(),
    phone: joi_1.default.string().allow('', null).optional(),
    province: joi_1.default.string(),
    province_code: joi_1.default.string(),
    country: joi_1.default.string(),
    country_code: joi_1.default.string(),
    country_name: joi_1.default.string(),
    postal_code: joi_1.default.string(),
    live_mode: joi_1.default.boolean().allow(null)
};
exports.payment_details = {
// gateway_token: joi.string().allow(null)
};
exports.fulfillment_details = {
// gateway_token: joi.string().allow(null)
};
exports.item = {
    channel_uuid: uuid,
    offer_uuid: uuid,
    variant_uuid: uuid,
    quantity: joi_1.default.number(),
    payment_details: joi_1.default.object().keys(exports.payment_details).unknown(),
    fulfillment_details: joi_1.default.object().keys(exports.fulfillment_details).unknown(),
};
exports.order = {
    channel_uuid: uuid,
    order_uuid: uuid,
    email: joi_1.default.string().allow(null),
    address_shipping: joi_1.default.object().keys(exports.address).unknown(),
    address_billing: joi_1.default.object().keys(exports.address).unknown(),
    payment_details: joi_1.default.object().keys(exports.payment_details).unknown(),
    fulfillment_details: joi_1.default.object().keys(exports.fulfillment_details).unknown(),
    notes: joi_1.default.string(),
    items: joi_1.default.array().items(joi_1.default.object().keys(exports.item))
};
exports.commands = (_a = {},
    _a[enums_1.COMMANDS.CREATE_ORDER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }),
        body: joi_1.default.object().keys(__assign({}, exports.order)).unknown()
    },
    _a[enums_1.COMMANDS.UPDATE_ORDER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            order_uuid: uuid.required(),
        }),
        body: joi_1.default.object().keys(__assign({}, exports.order, { email: joi_1.default.string().allow(null) })).unknown()
    },
    _a[enums_1.COMMANDS.CLOSE_ORDER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            order_uuid: uuid.required()
        }).unknown()
    },
    _a[enums_1.COMMANDS.SET_ORDER_BILLING] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            order_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys(__assign({}, exports.address)).unknown()
    },
    _a[enums_1.COMMANDS.SET_ORDER_SHIPPING] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            order_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys(__assign({}, exports.address)).unknown()
    },
    _a[enums_1.COMMANDS.SET_ORDER_CUSTOMER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            order_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({
            customer_uuid: uuid.required(),
        }).unknown(),
    },
    _a[enums_1.COMMANDS.SET_ORDER_FULFILLMENT] = {
        params: joi_1.default.object().keys(__assign({}, exports.fulfillment_details, { channel_uuid: uuid.required(), order_uuid: uuid.required() })).unknown(),
        body: joi_1.default.object().keys(__assign({}, exports.fulfillment_details)).unknown()
    },
    _a[enums_1.COMMANDS.SET_ORDER_PAYMENT] = joi_1.default.object().keys(__assign({}, exports.payment_details, { channel_uuid: uuid.required(), order_uuid: uuid.required() })).unknown(),
    _a[enums_1.COMMANDS.CREATE_ORDER_ITEM] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            order_uuid: uuid.required()
        }).unknown(),
        body: joi_1.default.object().keys(__assign({}, exports.item, { offer_uuid: uuid.required(), variant_uuid: uuid })).unknown()
    },
    _a[enums_1.COMMANDS.UPDATE_ORDER_ITEM] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            order_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys(__assign({}, exports.item)).unknown(),
    },
    _a[enums_1.COMMANDS.REMOVE_ORDER_ITEM] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            order_uuid: uuid.required(),
            item_uuid: uuid.required()
        }).unknown()
    },
    _a);
exports.actions = (_b = {},
    _b[enums_1.ACTIONS.GET_ORDER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            order_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.LIST_ORDERS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required()
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_ORDER_CUSTOMER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            order_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_ORDER_BILLING] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            order_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_ORDER_SHIPPING] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            order_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_ORDER_PAYMENT_DETAILS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            order_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_ORDER_FULFILLMENT_DETAILS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            order_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_ORDER_ITEM] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            order_uuid: uuid.required(),
            item_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.LIST_ORDER_ITEMS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            order_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_ORDER_ITEM_PAYMENT_DETAILS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            order_uuid: uuid.required(),
            item_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_ORDER_ITEM_FULFILLMENT_DETAILS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            order_uuid: uuid.required(),
            item_uuid: uuid.required(),
        }).unknown()
    },
    _b);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/schemas/permission/index.js":
/*!**************************************************!*\
  !*** ./dist.browser/schemas/permission/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
var uuid = joi_1.default.string().guid();
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
exports.actions = (_a = {},
    _a[enums_1.ACTIONS.LIST_USER_PERMISSIONS] = joi_1.default.object().keys({
        channel_uuid: uuid.required(),
        user_uuid: uuid.required()
    }).unknown(),
    _a[enums_1.ACTIONS.LIST_ROLE_PERMISSIONS] = joi_1.default.object().keys({
        channel_uuid: uuid.required(),
        role_name: joi_1.default.string().required()
    }).unknown(),
    _a);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/schemas/product/index.js":
/*!***********************************************!*\
  !*** ./dist.browser/schemas/product/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a, _b;
var joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
var uuid = joi_1.default.string().guid();
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
exports.commands = (_a = {},
    _a[enums_1.COMMANDS.CREATE_PRODUCT] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({
            product_uuid: uuid.required(),
        }).unknown()
    },
    _a[enums_1.COMMANDS.ADD_PRODUCT] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            product_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({}).unknown()
    },
    _a[enums_1.COMMANDS.UPDATE_PRODUCT] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            product_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({}).unknown()
    },
    _a[enums_1.COMMANDS.PUBLISH_PRODUCT] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            product_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({
            published_scope: joi_1.default.string()
        }).unknown()
    },
    _a[enums_1.COMMANDS.UNPUBLISH_PRODUCT] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            product_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({
            published_scope: joi_1.default.string()
        }).unknown()
    },
    _a[enums_1.COMMANDS.REMOVE_PRODUCT] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            product_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({}).unknown()
    },
    _a[enums_1.COMMANDS.ADD_PRODUCT_VARIANT] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            product_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({}).unknown()
    },
    _a);
exports.actions = (_b = {},
    _b[enums_1.ACTIONS.GET_PRODUCT] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            product_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.FIND_PRODUCT] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.LIST_PRODUCTS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required()
        }).unknown()
    },
    _b[enums_1.ACTIONS.FIND_PRODUCTS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required()
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_PRODUCT_VARIANT] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            product_uuid: uuid.required(),
            variant_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.LIST_PRODUCT_VARIANTS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            product_uuid: uuid.required()
        }).unknown()
    },
    _b[enums_1.ACTIONS.FIND_PRODUCT_VARIANTS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required()
        }).unknown()
    },
    _b);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/schemas/user/index.js":
/*!********************************************!*\
  !*** ./dist.browser/schemas/user/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a, _b;
var joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
var uuid = joi_1.default.string().guid();
exports.general = {
    channel_uuid: uuid.required(),
};
exports.commands = (_a = {},
    _a[enums_1.COMMANDS.LOGIN_USER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({
            user_uuid: uuid,
            username: joi_1.default.string().min(3),
            identifier: joi_1.default.string().min(3),
            email: joi_1.default.string(),
            password: joi_1.default.string().min(8),
        }).unknown().or('email', 'username', 'identifier')
    },
    _a[enums_1.COMMANDS.LOGOUT_USER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown(),
        body: joi_1.default.object().keys({}).unknown()
    },
    _a[enums_1.COMMANDS.REGISTER_USER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required()
        }).unknown(),
        body: joi_1.default.object().keys({
            username: joi_1.default.string().min(3),
            email: joi_1.default.string(),
            password: joi_1.default.string().min(8),
        }).unknown().or('email', 'username'),
    },
    _a[enums_1.COMMANDS.CREATE_USER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required()
        }).unknown(),
        body: joi_1.default.object().keys({
            username: joi_1.default.string().min(3),
            email: joi_1.default.string(),
            name_prefix: joi_1.default.string().allow(null),
            name_first: joi_1.default.string().allow(null),
            name_last: joi_1.default.string().allow(null),
            name_suffix: joi_1.default.string().allow(null),
            phone: joi_1.default.string().allow(null),
            phone_sms: joi_1.default.string().allow(null),
        }).unknown().or('email', 'username')
    },
    _a[enums_1.COMMANDS.UPDATE_USER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            user_uuid: uuid.required()
        }).unknown(),
        body: joi_1.default.object().keys({
            email: joi_1.default.string().allow(null),
            name_prefix: joi_1.default.string().allow(null),
            name_first: joi_1.default.string().allow(null),
            name_last: joi_1.default.string().allow(null),
            name_suffix: joi_1.default.string().allow(null),
            phone: joi_1.default.string().allow(null),
            phone_sms: joi_1.default.string().allow(null),
        }).unknown(),
    },
    _a);
exports.actions = (_b = {},
    _b[enums_1.ACTIONS.GET_SESSION] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_SESSION_CART] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_SESSION_CUSTOMER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_SESSION_CHANNEL] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_SESSION_USER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.GET_USER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
            user_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.FIND_USER] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required(),
        }).unknown()
    },
    _b[enums_1.ACTIONS.LIST_USERS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required()
        }).unknown()
    },
    _b[enums_1.ACTIONS.FIND_USERS] = {
        params: joi_1.default.object().keys({
            channel_uuid: uuid.required()
        }).unknown()
    },
    _b);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/validators/application/index.js":
/*!******************************************************!*\
  !*** ./dist.browser/validators/application/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./dist.browser/Utils.js");
var schemas_1 = __webpack_require__(/*! ../../schemas */ "./dist.browser/schemas/index.js");
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
exports.application = (_a = {},
    /***********************************
     * Application
     ***********************************/
    // Commands
    _a[enums_1.COMMANDS.CREATE_APPLICATION] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.application.commands[enums_1.COMMANDS.CREATE_APPLICATION].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.application.commands[enums_1.COMMANDS.CREATE_APPLICATION].body); }
    },
    _a[enums_1.COMMANDS.UPDATE_APPLICATION] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.application.commands[enums_1.COMMANDS.UPDATE_APPLICATION].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.application.commands[enums_1.COMMANDS.UPDATE_APPLICATION].body); }
    },
    // Actions
    _a[enums_1.ACTIONS.GET_APPLICATION] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.application.actions[enums_1.ACTIONS.GET_APPLICATION].params); }
    },
    _a[enums_1.ACTIONS.LIST_APPLICATIONS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.application.actions[enums_1.ACTIONS.LIST_APPLICATIONS].params); }
    },
    _a[enums_1.ACTIONS.SUBSCRIBE_APPLICATION] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.application.actions[enums_1.ACTIONS.SUBSCRIBE_APPLICATION].params); }
    },
    _a);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/validators/auth/index.js":
/*!***********************************************!*\
  !*** ./dist.browser/validators/auth/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./dist.browser/Utils.js");
var schemas_1 = __webpack_require__(/*! ../../schemas */ "./dist.browser/schemas/index.js");
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
exports.auth = (_a = {},
    // COMMANDS
    _a[enums_1.COMMANDS.REGISTER_USER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.REGISTER_USER].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.REGISTER_USER].body); },
    },
    _a[enums_1.COMMANDS.LOGIN_USER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.LOGIN_USER].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.LOGIN_USER].body); },
    },
    _a[enums_1.COMMANDS.LOGOUT_USER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.LOGOUT_USER].params); },
    },
    _a[enums_1.COMMANDS.UPDATE_SESSION_USER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.UPDATE_SESSION_USER].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.UPDATE_SESSION_USER].body); }
    },
    _a[enums_1.COMMANDS.UPDATE_SESSION_CART] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.UPDATE_SESSION_CART].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.UPDATE_SESSION_CART].body); }
    },
    _a[enums_1.COMMANDS.CHECKOUT_SESSION_CART] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.UPDATE_SESSION_CART].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.UPDATE_SESSION_CART].body); }
    },
    _a[enums_1.COMMANDS.SET_SESSION_CART_BILLING] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.SET_SESSION_CART_BILLING].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.SET_SESSION_CART_BILLING].body); }
    },
    _a[enums_1.COMMANDS.SET_SESSION_CART_PAYMENT] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.SET_SESSION_CART_PAYMENT].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.SET_SESSION_CART_PAYMENT].body); }
    },
    _a[enums_1.COMMANDS.SET_SESSION_CART_SHIPPING] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.SET_SESSION_CART_SHIPPING].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.SET_SESSION_CART_SHIPPING].body); }
    },
    _a[enums_1.COMMANDS.CREATE_SESSION_CART_ITEM] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.CREATE_SESSION_CART_ITEM].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.CREATE_SESSION_CART_ITEM].body); }
    },
    _a[enums_1.COMMANDS.UPDATE_SESSION_CART_ITEM] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.UPDATE_SESSION_CART_ITEM].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.UPDATE_SESSION_CART_ITEM].body); }
    },
    _a[enums_1.COMMANDS.REMOVE_SESSION_CART_ITEM] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.REMOVE_SESSION_CART_ITEM].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.REMOVE_SESSION_CART_ITEM].body); }
    },
    _a[enums_1.COMMANDS.UPDATE_SESSION_CUSTOMER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.UPDATE_SESSION_CUSTOMER].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.UPDATE_SESSION_CUSTOMER].body); }
    },
    _a[enums_1.COMMANDS.SET_SESSION_CUSTOMER_BILLING] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.SET_SESSION_CUSTOMER_BILLING].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.SET_SESSION_CUSTOMER_BILLING].body); }
    },
    _a[enums_1.COMMANDS.SET_SESSION_CUSTOMER_SHIPPING] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.SET_SESSION_CUSTOMER_SHIPPING].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.SET_SESSION_CUSTOMER_SHIPPING].body); }
    },
    _a[enums_1.COMMANDS.SET_RECOVERY] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.SET_RECOVERY].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.SET_RECOVERY].body); }
    },
    _a[enums_1.COMMANDS.RECOVER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.RECOVER].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.commands[enums_1.COMMANDS.RECOVER].body); }
    },
    // Actions
    _a[enums_1.ACTIONS.GET_SESSION] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.actions[enums_1.ACTIONS.GET_SESSION].params); }
    },
    _a[enums_1.ACTIONS.GET_SESSION_CART] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.actions[enums_1.ACTIONS.GET_SESSION_CART].params); }
    },
    _a[enums_1.ACTIONS.GET_SESSION_CART_BILLING] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.actions[enums_1.ACTIONS.GET_SESSION_CART_BILLING].params); }
    },
    _a[enums_1.ACTIONS.GET_SESSION_CART_SHIPPING] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.actions[enums_1.ACTIONS.GET_SESSION_CART_SHIPPING].params); }
    },
    _a[enums_1.ACTIONS.GET_SESSION_CART_PAYMENT] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.actions[enums_1.ACTIONS.GET_SESSION_CART_PAYMENT].params); }
    },
    _a[enums_1.ACTIONS.GET_SESSION_CART_ITEM] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.actions[enums_1.ACTIONS.GET_SESSION_CART_ITEM].params); }
    },
    _a[enums_1.ACTIONS.LIST_SESSION_CART_ITEMS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.actions[enums_1.ACTIONS.LIST_SESSION_CART_ITEMS].params); }
    },
    _a[enums_1.ACTIONS.GET_SESSION_CHANNEL] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.actions[enums_1.ACTIONS.GET_SESSION_CHANNEL].params); }
    },
    _a[enums_1.ACTIONS.GET_SESSION_CUSTOMER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.actions[enums_1.ACTIONS.GET_SESSION_CUSTOMER].params); }
    },
    _a[enums_1.ACTIONS.GET_SESSION_CUSTOMER_BILLING] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.actions[enums_1.ACTIONS.GET_SESSION_CUSTOMER].params); }
    },
    _a[enums_1.ACTIONS.GET_SESSION_CUSTOMER_SHIPPING] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.actions[enums_1.ACTIONS.GET_SESSION_CUSTOMER].params); }
    },
    _a[enums_1.ACTIONS.LIST_SESSION_CUSTOMER_CARTS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.actions[enums_1.ACTIONS.LIST_SESSION_CUSTOMER_CARTS].params); }
    },
    _a[enums_1.ACTIONS.LIST_SESSION_CUSTOMER_ACCOUNTS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.actions[enums_1.ACTIONS.LIST_SESSION_CUSTOMER_ACCOUNTS].params); }
    },
    _a[enums_1.ACTIONS.LIST_SESSION_CUSTOMER_SOURCES] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.actions[enums_1.ACTIONS.LIST_SESSION_CUSTOMER_SOURCES].params); }
    },
    _a[enums_1.ACTIONS.LIST_SESSION_CUSTOMER_FEEDS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.actions[enums_1.ACTIONS.LIST_SESSION_CUSTOMER_FEEDS].params); }
    },
    _a[enums_1.ACTIONS.GET_SESSION_CUSTOMER_ORDER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.actions[enums_1.ACTIONS.GET_SESSION_CUSTOMER_ORDER].params); }
    },
    _a[enums_1.ACTIONS.LIST_SESSION_CUSTOMER_ORDERS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.actions[enums_1.ACTIONS.LIST_SESSION_CUSTOMER_ORDERS].params); }
    },
    _a[enums_1.ACTIONS.LIST_SESSION_CUSTOMER_ORDER_ITEMS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.actions[enums_1.ACTIONS.LIST_SESSION_CUSTOMER_ORDER_ITEMS].params); }
    },
    _a[enums_1.ACTIONS.LIST_SESSION_CUSTOMER_USERS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.actions[enums_1.ACTIONS.LIST_SESSION_CUSTOMER_USERS].params); }
    },
    _a[enums_1.ACTIONS.LIST_SESSION_ROLES] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.actions[enums_1.ACTIONS.LIST_SESSION_ROLES].params); }
    },
    _a[enums_1.ACTIONS.GET_SESSION_USER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.auth.actions[enums_1.ACTIONS.GET_SESSION_USER].params); }
    },
    _a);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/validators/cart/index.js":
/*!***********************************************!*\
  !*** ./dist.browser/validators/cart/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./dist.browser/Utils.js");
var schemas_1 = __webpack_require__(/*! ../../schemas */ "./dist.browser/schemas/index.js");
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
exports.cart = (_a = {},
    /***********************************
     * Cart
     ***********************************/
    // Commands
    _a[enums_1.COMMANDS.CREATE_CART] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.cart.commands[enums_1.COMMANDS.CREATE_CART].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.cart.commands[enums_1.COMMANDS.CREATE_CART].body); },
    },
    _a[enums_1.COMMANDS.UPDATE_CART] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.cart.commands[enums_1.COMMANDS.UPDATE_CART].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.cart.commands[enums_1.COMMANDS.UPDATE_CART].body); }
    },
    _a[enums_1.COMMANDS.SET_CART_BILLING] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.cart.commands[enums_1.COMMANDS.SET_CART_BILLING].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.cart.commands[enums_1.COMMANDS.SET_CART_BILLING].body); },
    },
    _a[enums_1.COMMANDS.SET_CART_SHIPPING] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.cart.commands[enums_1.COMMANDS.SET_CART_SHIPPING].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.cart.commands[enums_1.COMMANDS.SET_CART_SHIPPING].body); },
    },
    _a[enums_1.COMMANDS.SET_CART_CUSTOMER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.cart.commands[enums_1.COMMANDS.SET_CART_CUSTOMER].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.cart.commands[enums_1.COMMANDS.SET_CART_CUSTOMER].body); },
    },
    _a[enums_1.COMMANDS.SET_CART_FULFILLMENT] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.cart.commands[enums_1.COMMANDS.SET_CART_FULFILLMENT].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.cart.commands[enums_1.COMMANDS.SET_CART_FULFILLMENT].body); },
    },
    _a[enums_1.COMMANDS.CHECKOUT_CART] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.cart.commands[enums_1.COMMANDS.CHECKOUT_CART].params); }
    },
    // Actions
    _a[enums_1.ACTIONS.GET_CART] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.cart.actions[enums_1.ACTIONS.GET_CART].params); }
    },
    _a[enums_1.ACTIONS.LIST_CARTS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.cart.actions[enums_1.ACTIONS.LIST_CARTS].params); }
    },
    _a[enums_1.ACTIONS.GET_CART_CUSTOMER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.cart.actions[enums_1.ACTIONS.GET_CART_CUSTOMER].params); }
    },
    _a[enums_1.ACTIONS.GET_CART_BILLING] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.cart.actions[enums_1.ACTIONS.GET_CART_BILLING].params); }
    },
    _a[enums_1.ACTIONS.GET_CART_SHIPPING] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.cart.actions[enums_1.ACTIONS.GET_CART_SHIPPING].params); }
    },
    _a[enums_1.ACTIONS.GET_CART_FULFILLMENT_DETAILS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.cart.actions[enums_1.ACTIONS.GET_CART_FULFILLMENT_DETAILS].params); }
    },
    _a[enums_1.ACTIONS.GET_CART_PAYMENT_DETAILS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.cart.actions[enums_1.ACTIONS.GET_CART_PAYMENT_DETAILS].params); }
    },
    /***********************************
     * Cart Items
     ***********************************/
    // Commands
    _a[enums_1.COMMANDS.CREATE_CART_ITEM] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.cart.commands[enums_1.COMMANDS.CREATE_CART_ITEM].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.cart.commands[enums_1.COMMANDS.CREATE_CART_ITEM].body); }
    },
    _a[enums_1.COMMANDS.CREATE_CART_ITEMS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.cart.commands[enums_1.COMMANDS.CREATE_CART_ITEM].params); },
        body: function (data) { return Utils_1.Utils.joiPromiseMap(data, schemas_1.cart.commands[enums_1.COMMANDS.CREATE_CART_ITEM].body); }
    },
    _a[enums_1.COMMANDS.UPDATE_CART_ITEM] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.cart.commands[enums_1.COMMANDS.UPDATE_CART_ITEM].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.cart.commands[enums_1.COMMANDS.UPDATE_CART_ITEM].body); },
    },
    _a[enums_1.COMMANDS.REMOVE_CART_ITEM] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.cart.commands[enums_1.COMMANDS.REMOVE_CART_ITEM].params); }
    },
    // Actions
    _a[enums_1.ACTIONS.GET_CART_ITEM] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.cart.actions[enums_1.ACTIONS.GET_CART_ITEM].params); }
    },
    _a[enums_1.ACTIONS.LIST_CART_ITEMS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.cart.actions[enums_1.ACTIONS.LIST_CART_ITEMS].params); }
    },
    _a[enums_1.ACTIONS.GET_CART_ITEM_FULFILLMENT_DETAILS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.cart.actions[enums_1.ACTIONS.GET_CART_ITEM_FULFILLMENT_DETAILS].params); }
    },
    _a[enums_1.ACTIONS.GET_CART_ITEM_PAYMENT_DETAILS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.cart.actions[enums_1.ACTIONS.GET_CART_ITEM_PAYMENT_DETAILS].params); }
    },
    _a);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/validators/channel/index.js":
/*!**************************************************!*\
  !*** ./dist.browser/validators/channel/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./dist.browser/Utils.js");
var schemas_1 = __webpack_require__(/*! ../../schemas */ "./dist.browser/schemas/index.js");
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
exports.channel = (_a = {
        'create': function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.channel.create); },
        'update': function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.channel.update); },
        'get': { params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.channel.get); } },
        'list': function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.channel.list); }
    },
    /**
     * Get Feed
     * @param data
     * @param req
     * @param validated
     */
    _a[enums_1.ACTIONS.GET] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.channel.commands[enums_1.ACTIONS.GET].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.channel.commands[enums_1.ACTIONS.GET].body); },
    },
    _a);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/validators/collection/index.js":
/*!*****************************************************!*\
  !*** ./dist.browser/validators/collection/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./dist.browser/Utils.js");
var schemas_1 = __webpack_require__(/*! ../../schemas */ "./dist.browser/schemas/index.js");
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
exports.collection = (_a = {},
    // COMMANDS
    _a[enums_1.COMMANDS.CREATE_COLLECTION] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.collection.commands[enums_1.COMMANDS.CREATE_COLLECTION].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.collection.commands[enums_1.COMMANDS.CREATE_COLLECTION].body); }
    },
    _a[enums_1.COMMANDS.UPDATE_COLLECTION] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.collection.commands[enums_1.COMMANDS.UPDATE_COLLECTION].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.collection.commands[enums_1.COMMANDS.UPDATE_COLLECTION].body); }
    },
    // ACTIONS
    _a[enums_1.ACTIONS.GET_COLLECTION] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.collection.actions[enums_1.ACTIONS.GET_COLLECTION].params); }
    },
    _a[enums_1.ACTIONS.FIND_COLLECTION] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.collection.actions[enums_1.ACTIONS.FIND_COLLECTION].params); }
    },
    _a[enums_1.ACTIONS.LIST_COLLECTIONS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.collection.actions[enums_1.ACTIONS.LIST_COLLECTIONS].params); }
    },
    _a[enums_1.ACTIONS.FIND_COLLECTIONS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.collection.actions[enums_1.ACTIONS.FIND_COLLECTIONS].params); }
    },
    _a[enums_1.ACTIONS.LIST_COLLECTION_PRODUCTS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.collection.actions[enums_1.ACTIONS.LIST_COLLECTIONS].params); }
    },
    // [ACTIONS.FIND_COLLECTION_PRODUCTS]: {
    //   params: (data) => Utils.joiPromise(data, collectionSchema.actions[ACTIONS.FIND_COLLECTIONS].params)
    // },
    _a[enums_1.ACTIONS.LIST_COLLECTION_OFFERS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.collection.actions[enums_1.ACTIONS.LIST_COLLECTIONS].params); }
    },
    // [ACTIONS.FIND_COLLECTION_OFFERS]: {
    //   params: (data) => Utils.joiPromise(data, collectionSchema.actions[ACTIONS.FIND_COLLECTIONS].params)
    // },
    _a[enums_1.ACTIONS.LIST_COLLECTION_CUSTOMERS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.collection.actions[enums_1.ACTIONS.LIST_COLLECTIONS].params); }
    },
    _a);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/validators/core/index.js":
/*!***********************************************!*\
  !*** ./dist.browser/validators/core/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./dist.browser/Utils.js");
var schemas_1 = __webpack_require__(/*! ../../schemas */ "./dist.browser/schemas/index.js");
exports.core = {
    'params': function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.core.params); },
    'query': function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.core.query); },
    'session': function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.core.session); },
    'token': function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.core.token); },
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/validators/country/index.js":
/*!**************************************************!*\
  !*** ./dist.browser/validators/country/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./dist.browser/Utils.js");
var schemas_1 = __webpack_require__(/*! ../../schemas */ "./dist.browser/schemas/index.js");
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
exports.country = {
    'add': function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.country.commands[enums_1.COMMANDS.ADD_COUNTRY]); },
    'update': function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.country.commands[enums_1.COMMANDS.UPDATE_COUNTRY]); },
    'get': function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.country.actions[enums_1.ACTIONS.GET_COUNTRY]); },
    'list': function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.country.actions[enums_1.ACTIONS.LIST_COUNTRIES]); },
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/validators/customer/index.js":
/*!***************************************************!*\
  !*** ./dist.browser/validators/customer/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./dist.browser/Utils.js");
var schemas_1 = __webpack_require__(/*! ../../schemas */ "./dist.browser/schemas/index.js");
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
// TODO, refactor the keys into Commands/Actions
exports.customer = (_a = {},
    // COMMANDS
    _a[enums_1.COMMANDS.CREATE_CUSTOMER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.customer.commands[enums_1.COMMANDS.CREATE_CUSTOMER].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.customer.commands[enums_1.COMMANDS.CREATE_CUSTOMER].body); }
    },
    _a[enums_1.COMMANDS.UPDATE_CUSTOMER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.customer.commands[enums_1.COMMANDS.UPDATE_CUSTOMER].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.customer.commands[enums_1.COMMANDS.UPDATE_CUSTOMER].body); },
    },
    _a[enums_1.COMMANDS.SET_CUSTOMER_BILLING] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.customer.commands[enums_1.COMMANDS.SET_CUSTOMER_BILLING].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.customer.commands[enums_1.COMMANDS.SET_CUSTOMER_BILLING].body); }
    },
    _a[enums_1.COMMANDS.SET_CUSTOMER_SHIPPING] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.customer.commands[enums_1.COMMANDS.SET_CUSTOMER_SHIPPING].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.customer.commands[enums_1.COMMANDS.SET_CUSTOMER_SHIPPING].body); }
    },
    // ACTIONS
    _a[enums_1.ACTIONS.GET_PUBLIC_CUSTOMER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.customer.actions[enums_1.ACTIONS.GET_PUBLIC_CUSTOMER].params); }
    },
    _a[enums_1.ACTIONS.FIND_CUSTOMER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.customer.actions[enums_1.ACTIONS.FIND_CUSTOMER].params); }
    },
    _a[enums_1.ACTIONS.FIND_PUBLIC_CUSTOMER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.customer.actions[enums_1.ACTIONS.FIND_PUBLIC_CUSTOMER].params); }
    },
    _a[enums_1.ACTIONS.LIST_CUSTOMERS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.customer.actions[enums_1.ACTIONS.LIST_CUSTOMERS].params); }
    },
    _a[enums_1.ACTIONS.FIND_CUSTOMERS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.customer.actions[enums_1.ACTIONS.FIND_CUSTOMERS].params); }
    },
    _a[enums_1.ACTIONS.GET_CUSTOMER_BILLING] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.customer.actions[enums_1.ACTIONS.GET_CUSTOMER_BILLING].params); }
    },
    _a[enums_1.ACTIONS.GET_CUSTOMER_SHIPPING] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.customer.actions[enums_1.ACTIONS.GET_CUSTOMER_SHIPPING].params); }
    },
    _a);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/validators/feed/index.js":
/*!***********************************************!*\
  !*** ./dist.browser/validators/feed/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./dist.browser/Utils.js");
var feed_1 = __webpack_require__(/*! ../../schemas/feed */ "./dist.browser/schemas/feed/index.js");
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
exports.feed = (_a = {},
    /***********************************
     * Feed
     ***********************************/
    // Actions
    /**
     * List all Feeds
     * @param data
     * @param req
     * @param validated
     */
    _a[enums_1.ACTIONS.LIST_FEEDS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, feed_1.feed.commands[enums_1.ACTIONS.LIST_FEEDS].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, feed_1.feed.commands[enums_1.ACTIONS.LIST_FEEDS].body); },
    },
    /**
     * Get Feed Primary
     * @param data
     * @param req
     * @param validated
     */
    _a[enums_1.ACTIONS.GET_FEED_PRIMARY] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, feed_1.feed.commands[enums_1.ACTIONS.GET_FEED_PRIMARY].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, feed_1.feed.commands[enums_1.ACTIONS.GET_FEED_PRIMARY].body); },
    },
    /**
     * Get Feed
     * @param data
     * @param req
     * @param validated
     */
    _a[enums_1.ACTIONS.GET_FEED] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, feed_1.feed.commands[enums_1.ACTIONS.GET_FEED].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, feed_1.feed.commands[enums_1.ACTIONS.GET_FEED].body); },
    },
    // Commands
    /**
     * Create Feed
     * @param data
     * @param req
     * @param validated
     */
    _a[enums_1.COMMANDS.CREATE_FEED] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, feed_1.feed.commands[enums_1.COMMANDS.CREATE_FEED].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, feed_1.feed.commands[enums_1.COMMANDS.CREATE_FEED].body); },
    },
    /**
     * Set Feed Primary
     * @param data
     * @param req
     * @param validated
     */
    _a[enums_1.COMMANDS.SET_CHANNEL_FEED_PRIMARY] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, feed_1.feed.commands[enums_1.COMMANDS.SET_CHANNEL_FEED_PRIMARY].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, feed_1.feed.commands[enums_1.COMMANDS.SET_CHANNEL_FEED_PRIMARY].body); },
    },
    /**
     * Update Feed
     * @param data
     * @param req
     * @param validated
     */
    _a[enums_1.COMMANDS.UPDATE_FEED] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, feed_1.feed.commands[enums_1.COMMANDS.UPDATE_FEED].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, feed_1.feed.commands[enums_1.COMMANDS.UPDATE_FEED].body); },
    },
    /***********************************
     * Feed Item
     ***********************************/
    // Commands
    /**
     * Create Feed Item
     * @param data
     * @param req
     * @param validated
     */
    _a[enums_1.COMMANDS.UPDATE_FEED_ITEM] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, feed_1.feed.commands[enums_1.COMMANDS.UPDATE_FEED_ITEM].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, feed_1.feed.commands[enums_1.COMMANDS.UPDATE_FEED_ITEM].body); },
    },
    /**
     * Update Feed Item
     * @param data
     * @param req
     * @param validated
     */
    _a[enums_1.COMMANDS.UPDATE_FEED_ITEM] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, feed_1.feed.commands[enums_1.COMMANDS.UPDATE_FEED_ITEM].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, feed_1.feed.commands[enums_1.COMMANDS.UPDATE_FEED_ITEM].body); },
    },
    /**
     * Destroy Feed Item
     * @param data
     * @param req
     * @param validated
     */
    _a[enums_1.COMMANDS.DESTROY_FEED_ITEM] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, feed_1.feed.commands[enums_1.COMMANDS.DESTROY_FEED_ITEM].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, feed_1.feed.commands[enums_1.COMMANDS.DESTROY_FEED_ITEM].body); },
    },
    /**
     * Mark Feed Item
     * @param data
     * @param req
     * @param validated
     */
    _a[enums_1.COMMANDS.MARK_FEED_ITEM] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, feed_1.feed.commands[enums_1.COMMANDS.DESTROY_FEED_ITEM].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, feed_1.feed.commands[enums_1.COMMANDS.DESTROY_FEED_ITEM].body); },
    },
    // Actions
    /**
     * Get Feed Item
     * @param data
     * @param req
     * @param validated
     */
    _a[enums_1.ACTIONS.GET_FEED_ITEM] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, feed_1.feed.actions[enums_1.ACTIONS.GET_FEED_ITEM].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, feed_1.feed.actions[enums_1.ACTIONS.GET_FEED_ITEM].body); },
    },
    /**
     * List Feed Items
     * @param data
     * @param req
     * @param validated
     */
    _a[enums_1.ACTIONS.LIST_FEED_ITEMS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, feed_1.feed.actions[enums_1.ACTIONS.LIST_FEED_ITEMS].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, feed_1.feed.actions[enums_1.ACTIONS.LIST_FEED_ITEMS].body); },
    },
    _a);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/validators/fulfillment/index.js":
/*!******************************************************!*\
  !*** ./dist.browser/validators/fulfillment/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./dist.browser/Utils.js");
var fulfillment_1 = __webpack_require__(/*! ../../schemas/fulfillment */ "./dist.browser/schemas/fulfillment/index.js");
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
exports.fulfillment = (_a = {},
    /**********************************************************
     * Fulfillment Actions
     **********************************************************/
    /**
     * List all Fulfillments
     * @param data
     * @param req
     * @param validated
     */
    _a[enums_1.ACTIONS.LIST_FULFILLMENTS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, fulfillment_1.fulfillment.commands[enums_1.ACTIONS.LIST_FULFILLMENTS].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, fulfillment_1.fulfillment.commands[enums_1.ACTIONS.LIST_FULFILLMENTS].body); },
    },
    /**
     * Get Fulfillment
     * @param data
     * @param req
     * @param validated
     */
    _a[enums_1.ACTIONS.GET_FULFILLMENT] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, fulfillment_1.fulfillment.commands[enums_1.ACTIONS.GET_FULFILLMENT].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, fulfillment_1.fulfillment.commands[enums_1.ACTIONS.GET_FULFILLMENT].body); },
    },
    // Commands
    /**
     * Create Fulfillment
     * @param data
     * @param req
     * @param validated
     */
    _a[enums_1.COMMANDS.CREATE_FULFILLMENT] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, fulfillment_1.fulfillment.commands[enums_1.COMMANDS.CREATE_FULFILLMENT].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, fulfillment_1.fulfillment.commands[enums_1.COMMANDS.CREATE_FULFILLMENT].body); },
    },
    /**
     * Update Fulfillment
     * @param data
     * @param req
     * @param validated
     */
    _a[enums_1.COMMANDS.UPDATE_FULFILLMENT] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, fulfillment_1.fulfillment.commands[enums_1.COMMANDS.UPDATE_FULFILLMENT].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, fulfillment_1.fulfillment.commands[enums_1.COMMANDS.UPDATE_FULFILLMENT].body); },
    },
    /***********************************
     * Fulfillment Item
     ***********************************/
    // Commands
    /**
     * Create Fulfillment Item
     * @param data
     * @param req
     * @param validated
     */
    _a[enums_1.COMMANDS.UPDATE_FULFILLMENT_ITEM] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, fulfillment_1.fulfillment.commands[enums_1.COMMANDS.UPDATE_FULFILLMENT_ITEM].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, fulfillment_1.fulfillment.commands[enums_1.COMMANDS.UPDATE_FULFILLMENT_ITEM].body); },
    },
    /**
     * Update Fulfillment Item
     * @param data
     * @param req
     * @param validated
     */
    _a[enums_1.COMMANDS.UPDATE_FULFILLMENT_ITEM] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, fulfillment_1.fulfillment.commands[enums_1.COMMANDS.UPDATE_FULFILLMENT_ITEM].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, fulfillment_1.fulfillment.commands[enums_1.COMMANDS.UPDATE_FULFILLMENT_ITEM].body); },
    },
    /**
     * Destroy Fulfillment Item
     * @param data
     * @param req
     * @param validated
     */
    _a[enums_1.COMMANDS.DESTROY_FULFILLMENT_ITEM] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, fulfillment_1.fulfillment.commands[enums_1.COMMANDS.DESTROY_FULFILLMENT_ITEM].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, fulfillment_1.fulfillment.commands[enums_1.COMMANDS.DESTROY_FULFILLMENT_ITEM].body); },
    },
    /**********************************************************
     * Actions
     **********************************************************/
    /**
     * Get Fulfillment Item
     * @param data
     * @param req
     * @param validated
     */
    _a[enums_1.ACTIONS.GET_FULFILLMENT_ITEM] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, fulfillment_1.fulfillment.actions[enums_1.ACTIONS.GET_FULFILLMENT_ITEM].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, fulfillment_1.fulfillment.actions[enums_1.ACTIONS.GET_FULFILLMENT_ITEM].body); },
    },
    /**
     * List Fulfillment Items
     * @param data
     * @param req
     * @param validated
     */
    _a[enums_1.ACTIONS.LIST_FULFILLMENT_ITEMS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, fulfillment_1.fulfillment.actions[enums_1.ACTIONS.LIST_FULFILLMENT_ITEMS].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, fulfillment_1.fulfillment.actions[enums_1.ACTIONS.LIST_FULFILLMENT_ITEMS].body); },
    },
    _a);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/validators/gateway/index.js":
/*!**************************************************!*\
  !*** ./dist.browser/validators/gateway/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./dist.browser/Utils.js");
var schemas_1 = __webpack_require__(/*! ../../schemas */ "./dist.browser/schemas/index.js");
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
exports.gateway = (_a = {},
    /***********************************
     * Gateway
     ***********************************/
    // Commands
    _a[enums_1.COMMANDS.CREATE_GATEWAY] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.gateway.commands[enums_1.COMMANDS.CREATE_GATEWAY].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.gateway.commands[enums_1.COMMANDS.CREATE_GATEWAY].body); },
    },
    _a[enums_1.COMMANDS.UPDATE_GATEWAY] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.gateway.commands[enums_1.COMMANDS.UPDATE_GATEWAY].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.gateway.commands[enums_1.COMMANDS.UPDATE_GATEWAY].body); },
    },
    _a[enums_1.COMMANDS.PUBLISH_GATEWAY] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.gateway.commands[enums_1.COMMANDS.PUBLISH_GATEWAY].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.gateway.commands[enums_1.COMMANDS.PUBLISH_GATEWAY].body); },
    },
    _a[enums_1.COMMANDS.UNPUBLISH_GATEWAY] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.gateway.commands[enums_1.COMMANDS.PUBLISH_GATEWAY].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.gateway.commands[enums_1.COMMANDS.PUBLISH_GATEWAY].body); },
    },
    _a[enums_1.COMMANDS.UPLOAD_GATEWAYS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.gateway.commands[enums_1.COMMANDS.UPLOAD_GATEWAYS].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.gateway.commands[enums_1.COMMANDS.UPLOAD_GATEWAYS].body); },
    },
    _a[enums_1.COMMANDS.PROCESS_UPLOADED_GATEWAYS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.gateway.commands[enums_1.COMMANDS.PROCESS_UPLOADED_GATEWAYS].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.gateway.commands[enums_1.COMMANDS.PROCESS_UPLOADED_GATEWAYS].body); },
    },
    // Actions
    _a[enums_1.ACTIONS.GET_GATEWAY] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.gateway.commands[enums_1.ACTIONS.GET_GATEWAY].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.gateway.commands[enums_1.ACTIONS.GET_GATEWAY].body); },
    },
    _a[enums_1.ACTIONS.GET_GATEWAY_UPLOAD] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.gateway.commands[enums_1.ACTIONS.GET_GATEWAY_UPLOAD].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.gateway.commands[enums_1.ACTIONS.GET_GATEWAY_UPLOAD].body); },
    },
    _a[enums_1.ACTIONS.LIST_GATEWAYS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.gateway.commands[enums_1.ACTIONS.LIST_GATEWAYS].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.gateway.commands[enums_1.ACTIONS.LIST_GATEWAYS].body); },
    },
    _a[enums_1.ACTIONS.LIST_GATEWAY_EVENTS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.gateway.commands[enums_1.ACTIONS.LIST_GATEWAY_EVENTS].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.gateway.commands[enums_1.ACTIONS.LIST_GATEWAY_EVENTS].body); },
    },
    _a[enums_1.ACTIONS.LIST_GATEWAY_UPLOADS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.gateway.commands[enums_1.ACTIONS.LIST_GATEWAY_UPLOADS].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.gateway.commands[enums_1.ACTIONS.LIST_GATEWAY_UPLOADS].body); },
    },
    _a[enums_1.ACTIONS.GET_GATEWAY_PRIMARY] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.gateway.commands[enums_1.ACTIONS.GET_GATEWAY_PRIMARY].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.gateway.commands[enums_1.ACTIONS.GET_GATEWAY_PRIMARY].body); },
    },
    _a);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/validators/index.js":
/*!******************************************!*\
  !*** ./dist.browser/validators/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! ./core */ "./dist.browser/validators/core/index.js");
exports.core = core_1.core;
var auth_1 = __webpack_require__(/*! ./auth */ "./dist.browser/validators/auth/index.js");
exports.auth = auth_1.auth;
var application_1 = __webpack_require__(/*! ./application */ "./dist.browser/validators/application/index.js");
exports.application = application_1.application;
var cart_1 = __webpack_require__(/*! ./cart */ "./dist.browser/validators/cart/index.js");
exports.cart = cart_1.cart;
var collection_1 = __webpack_require__(/*! ./collection */ "./dist.browser/validators/collection/index.js");
exports.collection = collection_1.collection;
var channel_1 = __webpack_require__(/*! ./channel */ "./dist.browser/validators/channel/index.js");
exports.channel = channel_1.channel;
var customer_1 = __webpack_require__(/*! ./customer */ "./dist.browser/validators/customer/index.js");
exports.customer = customer_1.customer;
var feed_1 = __webpack_require__(/*! ./feed */ "./dist.browser/validators/feed/index.js");
exports.feed = feed_1.feed;
var fulfillment_1 = __webpack_require__(/*! ./fulfillment */ "./dist.browser/validators/fulfillment/index.js");
exports.fulfillment = fulfillment_1.fulfillment;
var gateway_1 = __webpack_require__(/*! ./gateway */ "./dist.browser/validators/gateway/index.js");
exports.gateway = gateway_1.gateway;
var offer_1 = __webpack_require__(/*! ./offer */ "./dist.browser/validators/offer/index.js");
exports.offer = offer_1.offer;
var order_1 = __webpack_require__(/*! ./order */ "./dist.browser/validators/order/index.js");
exports.order = order_1.order;
var product_1 = __webpack_require__(/*! ./product */ "./dist.browser/validators/product/index.js");
exports.product = product_1.product;
var user_1 = __webpack_require__(/*! ./user */ "./dist.browser/validators/user/index.js");
exports.user = user_1.user;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/validators/offer/index.js":
/*!************************************************!*\
  !*** ./dist.browser/validators/offer/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./dist.browser/Utils.js");
var schemas_1 = __webpack_require__(/*! ../../schemas */ "./dist.browser/schemas/index.js");
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
// TODO, refactor the keys into Commands/Actions
exports.offer = (_a = {},
    // Commands
    _a[enums_1.COMMANDS.CREATE_OFFER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.offer.commands[enums_1.COMMANDS.CREATE_OFFER].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.offer.commands[enums_1.COMMANDS.CREATE_OFFER].body); },
    },
    _a[enums_1.COMMANDS.UPDATE_OFFER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.offer.commands[enums_1.COMMANDS.UPDATE_OFFER].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.offer.commands[enums_1.COMMANDS.UPDATE_OFFER].body); }
    },
    _a[enums_1.COMMANDS.REMOVE_OFFER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.offer.commands[enums_1.COMMANDS.REMOVE_OFFER].params); }
    },
    _a[enums_1.COMMANDS.PUBLISH_OFFER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.offer.commands[enums_1.COMMANDS.PUBLISH_OFFER].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.offer.commands[enums_1.COMMANDS.PUBLISH_OFFER].body); }
    },
    _a[enums_1.COMMANDS.UNPUBLISH_OFFER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.offer.commands[enums_1.COMMANDS.UNPUBLISH_OFFER].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.offer.commands[enums_1.COMMANDS.UNPUBLISH_OFFER].body); },
    },
    _a[enums_1.COMMANDS.ADD_OFFER_VARIANT] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.offer.commands[enums_1.COMMANDS.ADD_OFFER_VARIANT].params); }
    },
    _a[enums_1.COMMANDS.ADD_OFFER_VARIANTS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.offer.commands[enums_1.COMMANDS.ADD_OFFER_VARIANT].params); },
        body: function (data) { return Utils_1.Utils.joiPromiseMap(data, schemas_1.offer.commands[enums_1.COMMANDS.ADD_OFFER_VARIANT].body); }
    },
    _a[enums_1.COMMANDS.REMOVE_OFFER_VARIANT] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.offer.commands[enums_1.COMMANDS.REMOVE_OFFER_VARIANT].params); }
    },
    _a[enums_1.COMMANDS.UPDATE_OFFER_VARIANT] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.offer.commands[enums_1.COMMANDS.UPDATE_OFFER_VARIANT].params); }
    },
    // [COMMANDS.PUBLISH_OFFER_VARIANT]: (data) => Utils.joiPromise(data, offerSchema.commands[COMMANDS.PUBLISH_OFFER_VARIANT]),
    // [COMMANDS.UNPUBLISH_OFFER_VARIANT]: (data) => Utils.joiPromise(data, offerSchema.commands[COMMANDS.UNPUBLISH_OFFER_VARIANT]),
    // Actions
    _a[enums_1.ACTIONS.GET_OFFER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.offer.actions[enums_1.ACTIONS.GET_OFFER].params); }
    },
    _a[enums_1.ACTIONS.FIND_OFFER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.offer.actions[enums_1.ACTIONS.FIND_OFFER].params); }
    },
    _a[enums_1.ACTIONS.LIST_OFFERS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.offer.actions[enums_1.ACTIONS.LIST_OFFERS].params); }
    },
    _a[enums_1.ACTIONS.FIND_OFFERS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.offer.actions[enums_1.ACTIONS.FIND_OFFERS].params); }
    },
    _a[enums_1.ACTIONS.GET_PUBLIC_OFFER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.offer.actions[enums_1.ACTIONS.GET_OFFER].params); }
    },
    _a[enums_1.ACTIONS.LIST_PUBLIC_OFFERS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.offer.actions[enums_1.ACTIONS.LIST_OFFERS].params); }
    },
    _a[enums_1.ACTIONS.FIND_PUBLIC_OFFERS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.offer.actions[enums_1.ACTIONS.LIST_OFFERS].params); }
    },
    _a[enums_1.ACTIONS.GET_OFFER_VARIANT] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.offer.actions[enums_1.ACTIONS.GET_OFFER_VARIANT].params); }
    },
    _a[enums_1.ACTIONS.LIST_OFFER_VARIANTS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.offer.actions[enums_1.ACTIONS.LIST_OFFER_VARIANTS].params); }
    },
    _a[enums_1.ACTIONS.FIND_OFFER_VARIANTS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.offer.actions[enums_1.ACTIONS.FIND_OFFER_VARIANTS].params); }
    },
    _a[enums_1.ACTIONS.GET_PUBLIC_OFFER_VARIANT] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.offer.actions[enums_1.ACTIONS.GET_OFFER_VARIANT].params); }
    },
    _a[enums_1.ACTIONS.LIST_PUBLIC_OFFER_VARIANTS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.offer.actions[enums_1.ACTIONS.LIST_OFFER_VARIANTS].params); }
    },
    _a[enums_1.ACTIONS.FIND_PUBLIC_OFFER_VARIANTS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.offer.actions[enums_1.ACTIONS.FIND_OFFER_VARIANTS].params); }
    },
    _a);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/validators/order/index.js":
/*!************************************************!*\
  !*** ./dist.browser/validators/order/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./dist.browser/Utils.js");
var schemas_1 = __webpack_require__(/*! ../../schemas */ "./dist.browser/schemas/index.js");
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
exports.order = (_a = {},
    /***********************************
     * Order
     ***********************************/
    // Commands
    _a[enums_1.COMMANDS.CREATE_ORDER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.order.commands[enums_1.COMMANDS.CREATE_ORDER].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.order.commands[enums_1.COMMANDS.CREATE_ORDER].body); },
    },
    _a[enums_1.COMMANDS.UPDATE_ORDER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.order.commands[enums_1.COMMANDS.UPDATE_ORDER].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.order.commands[enums_1.COMMANDS.UPDATE_ORDER].body); }
    },
    _a[enums_1.COMMANDS.SET_ORDER_BILLING] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.order.commands[enums_1.COMMANDS.SET_ORDER_BILLING].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.order.commands[enums_1.COMMANDS.SET_ORDER_BILLING].body); },
    },
    _a[enums_1.COMMANDS.SET_ORDER_SHIPPING] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.order.commands[enums_1.COMMANDS.SET_ORDER_SHIPPING].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.order.commands[enums_1.COMMANDS.SET_ORDER_SHIPPING].body); },
    },
    _a[enums_1.COMMANDS.SET_ORDER_CUSTOMER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.order.commands[enums_1.COMMANDS.SET_ORDER_CUSTOMER].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.order.commands[enums_1.COMMANDS.SET_ORDER_CUSTOMER].body); },
    },
    _a[enums_1.COMMANDS.SET_ORDER_FULFILLMENT] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.order.commands[enums_1.COMMANDS.SET_ORDER_FULFILLMENT].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.order.commands[enums_1.COMMANDS.SET_ORDER_FULFILLMENT].body); },
    },
    _a[enums_1.COMMANDS.CLOSE_ORDER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.order.commands[enums_1.COMMANDS.CLOSE_ORDER].params); }
    },
    // Actions
    _a[enums_1.ACTIONS.GET_ORDER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.order.actions[enums_1.ACTIONS.GET_ORDER].params); }
    },
    _a[enums_1.ACTIONS.LIST_ORDERS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.order.actions[enums_1.ACTIONS.LIST_ORDERS].params); }
    },
    _a[enums_1.ACTIONS.GET_ORDER_CUSTOMER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.order.actions[enums_1.ACTIONS.GET_ORDER_CUSTOMER].params); }
    },
    _a[enums_1.ACTIONS.GET_ORDER_BILLING] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.order.actions[enums_1.ACTIONS.GET_ORDER_BILLING].params); }
    },
    _a[enums_1.ACTIONS.GET_ORDER_SHIPPING] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.order.actions[enums_1.ACTIONS.GET_ORDER_SHIPPING].params); }
    },
    _a[enums_1.ACTIONS.GET_ORDER_FULFILLMENT_DETAILS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.order.actions[enums_1.ACTIONS.GET_ORDER_FULFILLMENT_DETAILS].params); }
    },
    _a[enums_1.ACTIONS.GET_ORDER_PAYMENT_DETAILS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.order.actions[enums_1.ACTIONS.GET_ORDER_PAYMENT_DETAILS].params); }
    },
    /***********************************
     * Order Items
     ***********************************/
    // Commands
    _a[enums_1.COMMANDS.CREATE_ORDER_ITEM] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.order.commands[enums_1.COMMANDS.CREATE_ORDER_ITEM].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.order.commands[enums_1.COMMANDS.CREATE_ORDER_ITEM].body); }
    },
    _a[enums_1.COMMANDS.CREATE_ORDER_ITEMS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.order.commands[enums_1.COMMANDS.CREATE_ORDER_ITEM].params); },
        body: function (data) { return Utils_1.Utils.joiPromiseMap(data, schemas_1.order.commands[enums_1.COMMANDS.CREATE_ORDER_ITEM].body); }
    },
    _a[enums_1.COMMANDS.UPDATE_ORDER_ITEM] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.order.commands[enums_1.COMMANDS.UPDATE_ORDER_ITEM].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.order.commands[enums_1.COMMANDS.UPDATE_ORDER_ITEM].body); },
    },
    _a[enums_1.COMMANDS.REMOVE_ORDER_ITEM] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.order.commands[enums_1.COMMANDS.REMOVE_ORDER_ITEM].params); }
    },
    // Actions
    _a[enums_1.ACTIONS.GET_ORDER_ITEM] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.order.actions[enums_1.ACTIONS.GET_ORDER_ITEM].params); }
    },
    _a[enums_1.ACTIONS.LIST_ORDER_ITEMS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.order.actions[enums_1.ACTIONS.LIST_ORDER_ITEMS].params); }
    },
    _a[enums_1.ACTIONS.GET_ORDER_ITEM_FULFILLMENT_DETAILS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.order.actions[enums_1.ACTIONS.GET_ORDER_ITEM_FULFILLMENT_DETAILS].params); }
    },
    _a[enums_1.ACTIONS.GET_ORDER_ITEM_PAYMENT_DETAILS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.order.actions[enums_1.ACTIONS.GET_ORDER_ITEM_PAYMENT_DETAILS].params); }
    },
    _a);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/validators/permission/index.js":
/*!*****************************************************!*\
  !*** ./dist.browser/validators/permission/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./dist.browser/Utils.js");
var permission_1 = __webpack_require__(/*! ../../schemas/permission */ "./dist.browser/schemas/permission/index.js");
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
exports.permission = (_a = {},
    /***********************************
     * Permission
     ***********************************/
    // Actions
    _a[enums_1.ACTIONS.LIST_USER_PERMISSIONS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, permission_1.actions[enums_1.ACTIONS.LIST_USER_PERMISSIONS].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, permission_1.actions[enums_1.ACTIONS.LIST_USER_PERMISSIONS].body); },
    },
    _a[enums_1.ACTIONS.LIST_ROLE_PERMISSIONS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, permission_1.actions[enums_1.ACTIONS.LIST_ROLE_PERMISSIONS].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, permission_1.actions[enums_1.ACTIONS.LIST_ROLE_PERMISSIONS].body); }
    },
    _a);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/validators/product/index.js":
/*!**************************************************!*\
  !*** ./dist.browser/validators/product/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./dist.browser/Utils.js");
var schemas_1 = __webpack_require__(/*! ../../schemas */ "./dist.browser/schemas/index.js");
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
// TODO, refactor the keys into Commands/Actions
exports.product = (_a = {},
    // Commands
    _a[enums_1.COMMANDS.CREATE_PRODUCT] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.product.commands[enums_1.COMMANDS.CREATE_PRODUCT].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.product.commands[enums_1.COMMANDS.CREATE_PRODUCT].body); },
    },
    _a[enums_1.COMMANDS.UPDATE_PRODUCT] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.product.commands[enums_1.COMMANDS.UPDATE_PRODUCT].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.product.commands[enums_1.COMMANDS.UPDATE_PRODUCT].body); }
    },
    _a[enums_1.COMMANDS.REMOVE_PRODUCT] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.product.commands[enums_1.COMMANDS.REMOVE_PRODUCT].params); }
    },
    _a[enums_1.COMMANDS.PUBLISH_PRODUCT] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.product.commands[enums_1.COMMANDS.PUBLISH_PRODUCT].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.product.commands[enums_1.COMMANDS.PUBLISH_PRODUCT].body); }
    },
    _a[enums_1.COMMANDS.UNPUBLISH_PRODUCT] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.product.commands[enums_1.COMMANDS.UNPUBLISH_PRODUCT].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.product.commands[enums_1.COMMANDS.UNPUBLISH_PRODUCT].body); },
    },
    _a[enums_1.COMMANDS.ADD_PRODUCT_VARIANT] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.product.commands[enums_1.COMMANDS.ADD_PRODUCT_VARIANT].params); }
    },
    _a[enums_1.COMMANDS.ADD_PRODUCT_VARIANTS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.product.commands[enums_1.COMMANDS.ADD_PRODUCT_VARIANT].params); },
        body: function (data) { return Utils_1.Utils.joiPromiseMap(data, schemas_1.product.commands[enums_1.COMMANDS.ADD_PRODUCT_VARIANT].body); }
    },
    _a[enums_1.COMMANDS.REMOVE_PRODUCT_VARIANT] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.product.commands[enums_1.COMMANDS.REMOVE_PRODUCT_VARIANT].params); }
    },
    _a[enums_1.COMMANDS.UPDATE_PRODUCT_VARIANT] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.product.commands[enums_1.COMMANDS.UPDATE_PRODUCT_VARIANT].params); }
    },
    // [COMMANDS.PUBLISH_PRODUCT_VARIANT]: (data) => Utils.joiPromise(data, productSchema.commands[COMMANDS.PUBLISH_PRODUCT_VARIANT]),
    // [COMMANDS.UNPUBLISH_PRODUCT_VARIANT]: (data) => Utils.joiPromise(data, productSchema.commands[COMMANDS.UNPUBLISH_PRODUCT_VARIANT]),
    // Actions
    _a[enums_1.ACTIONS.GET_PRODUCT] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.product.actions[enums_1.ACTIONS.GET_PRODUCT].params); }
    },
    _a[enums_1.ACTIONS.FIND_PRODUCT] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.product.actions[enums_1.ACTIONS.FIND_PRODUCT].params); }
    },
    _a[enums_1.ACTIONS.LIST_PRODUCTS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.product.actions[enums_1.ACTIONS.LIST_PRODUCTS].params); }
    },
    _a[enums_1.ACTIONS.FIND_PRODUCTS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.product.actions[enums_1.ACTIONS.FIND_PRODUCTS].params); }
    },
    _a[enums_1.ACTIONS.GET_PUBLIC_PRODUCT] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.product.actions[enums_1.ACTIONS.GET_PRODUCT].params); }
    },
    _a[enums_1.ACTIONS.LIST_PUBLIC_PRODUCTS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.product.actions[enums_1.ACTIONS.LIST_PRODUCTS].params); }
    },
    _a[enums_1.ACTIONS.FIND_PUBLIC_PRODUCTS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.product.actions[enums_1.ACTIONS.LIST_PRODUCTS].params); }
    },
    _a[enums_1.ACTIONS.GET_PRODUCT_VARIANT] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.product.actions[enums_1.ACTIONS.GET_PRODUCT_VARIANT].params); }
    },
    _a[enums_1.ACTIONS.LIST_PRODUCT_VARIANTS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.product.actions[enums_1.ACTIONS.LIST_PRODUCT_VARIANTS].params); }
    },
    _a[enums_1.ACTIONS.FIND_PRODUCT_VARIANTS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.product.actions[enums_1.ACTIONS.FIND_PRODUCT_VARIANTS].params); }
    },
    _a[enums_1.ACTIONS.GET_PUBLIC_PRODUCT_VARIANT] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.product.actions[enums_1.ACTIONS.GET_PRODUCT_VARIANT].params); }
    },
    _a[enums_1.ACTIONS.LIST_PUBLIC_PRODUCT_VARIANTS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.product.actions[enums_1.ACTIONS.LIST_PRODUCT_VARIANTS].params); }
    },
    _a[enums_1.ACTIONS.FIND_PUBLIC_PRODUCT_VARIANTS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.product.actions[enums_1.ACTIONS.FIND_PRODUCT_VARIANTS].params); }
    },
    _a);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist.browser/validators/user/index.js":
/*!***********************************************!*\
  !*** ./dist.browser/validators/user/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./dist.browser/Utils.js");
var schemas_1 = __webpack_require__(/*! ../../schemas */ "./dist.browser/schemas/index.js");
var enums_1 = __webpack_require__(/*! ../../enums */ "./dist.browser/enums/index.js");
// TODO refactor keys to match commands/actions
exports.user = (_a = {},
    // Commands
    _a[enums_1.COMMANDS.CREATE_USER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.user.commands[enums_1.COMMANDS.CREATE_USER].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.user.commands[enums_1.COMMANDS.CREATE_USER].body); },
    },
    _a[enums_1.COMMANDS.UPDATE_USER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.user.commands[enums_1.COMMANDS.UPDATE_USER].params); },
        body: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.user.commands[enums_1.COMMANDS.UPDATE_USER].body); },
    },
    // Actions
    _a[enums_1.ACTIONS.GET_USER] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.user.actions[enums_1.ACTIONS.GET_USER].params); }
    },
    _a[enums_1.ACTIONS.LIST_USERS] = {
        params: function (data) { return Utils_1.Utils.joiPromise(data, schemas_1.user.actions[enums_1.ACTIONS.LIST_USERS].params); }
    },
    _a);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./test-browser/fixtures/constants.js":
/*!********************************************!*\
  !*** ./test-browser/fixtures/constants.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {module.exports = {
  url: process.env.RISE_URL,
  adminIdentifier: process.env.RISE_ADMIN,
  adminPassword: process.env.RISE_PASSWORD,
  channel_uuid: process.env.RISE_CHANNEL,
  appIdentifier: process.env.RISE_APP_HANDLE,
  public_key: process.env.RISE_PUBLIC,
  private_key: process.env.RISE_PRIVATE
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./test-browser/integration/browser.test.js":
/*!**************************************************!*\
  !*** ./test-browser/integration/browser.test.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// import * as assert from 'assert'
const { RiSE, EVENTS, ACTIONS } = __webpack_require__(/*! ../../dist.browser */ "./dist.browser/index.js")
const { url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key } = __webpack_require__(/*! ../fixtures/constants */ "./test-browser/fixtures/constants.js")

describe('Browser', () => {
  describe('sanity', () => {
    it('should exist', () => {
      const rise = new RiSE({
        url: url,
        sandbox: true,
        public_key: public_key,
        private_key: private_key,
        globals: {
          params: {
            channel_uuid
          }
        }
      })
      assert(rise)
    })
  })
})


/***/ }),

/***/ "./test-browser/run.js":
/*!*****************************!*\
  !*** ./test-browser/run.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _integration_browser_test_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./integration/browser.test.js */ "./test-browser/integration/browser.test.js");
/* harmony import */ var _integration_browser_test_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_integration_browser_test_js__WEBPACK_IMPORTED_MODULE_0__);


mocha.checkLeaks()
mocha.globals(['rise'])
mocha.run()


/***/ }),

/***/ "./test-browser/setup.js":
/*!*******************************!*\
  !*** ./test-browser/setup.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import 'https://unpkg.com/chai@4.1.2/chai.js'

mocha.setup('bdd')

/***/ }),

/***/ 0:
/*!***********************************************************!*\
  !*** multi ./test-browser/setup.js ./test-browser/run.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./test-browser/setup.js */"./test-browser/setup.js");
module.exports = __webpack_require__(/*! ./test-browser/run.js */"./test-browser/run.js");


/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("joi");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "primus":
/*!*************************!*\
  !*** external "primus" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("primus");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "request-promise-native":
/*!*****************************************!*\
  !*** external "request-promise-native" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("request-promise-native");

/***/ })

/******/ });