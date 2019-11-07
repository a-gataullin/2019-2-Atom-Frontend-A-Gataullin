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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/FormInput.js":
/*!*********************************!*\
  !*** ./components/FormInput.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/* eslint-disable no-underscore-dangle */\nvar template = document.createElement('template');\ntemplate.innerHTML = \"\\n    <style>\\n        input {\\n            border: 0;\\n            outline: none;\\n            width: calc(100% - 2px);\\n        }\\n\\n        :host {\\n            display: inline-block;\\n            border: 1px solid rgba(25, 25, 25, 0.32);\\n        }\\n    </style>\\n    <input type=\\\"text\\\">\\n\";\n/* 'no-underscore-dangle': ['error', { 'allow': ['_shadowRoot', '_onSubmit', '_onKeyPress'] }] */\n\nvar FormInput =\n/*#__PURE__*/\nfunction (_HTMLElement) {\n  _inherits(FormInput, _HTMLElement);\n\n  function FormInput() {\n    var _this;\n\n    _classCallCheck(this, FormInput);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormInput).call(this));\n    _this._shadowRoot = _this.attachShadow({\n      mode: 'open'\n    });\n\n    _this._shadowRoot.appendChild(template.content.cloneNode(true));\n\n    _this.$input = _this.shadowRoot.querySelector('input');\n    return _this;\n  }\n\n  _createClass(FormInput, [{\n    key: \"attributeChangedCallback\",\n    value: function attributeChangedCallback(name, oldValue, newValue) {\n      this.$input.setAttribute(name, newValue);\n    }\n  }, {\n    key: \"value\",\n    get: function get() {\n      return this.$input.value;\n    }\n  }], [{\n    key: \"observedAttributes\",\n    get: function get() {\n      return ['name', 'value', 'placeholder', 'disabled'];\n    }\n  }]);\n\n  return FormInput;\n}(_wrapNativeSuper(HTMLElement));\n\ncustomElements.define('form-input', FormInput);\n\n//# sourceURL=webpack:///./components/FormInput.js?");

/***/ }),

/***/ "./components/MessageForm.js":
/*!***********************************!*\
  !*** ./components/MessageForm.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MessageView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageView */ \"./components/MessageView.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/* eslint-disable no-use-before-define */\n\n/* eslint-disable no-underscore-dangle */\n\nvar template = document.createElement('template');\ntemplate.innerHTML = \"\\n    <style>\\n        form {\\n            display: flex;\\n            flex-direction: column;\\n            justify-content: center;\\n        }\\n\\n        form-input {\\n            margin-top: 10px;\\n            width: 100%;\\n            position: fixed;\\n            bottom: 0;\\n        }\\n         \\n        .result {\\n            margin-top: 5vw;\\n            margin-bottom: 20px;\\n            display: flex;\\n            flex-direction: column;\\n            flex-wrap: nowrap;\\n            align-items: flex-end;\\n        }\\n\\n        input[type=submit] {\\n            visibility: collapse;\\n        }\\n\\n        #head {\\n            left: 0px;\\n            top: 0px;\\n            width: 100vw;\\n            position: fixed;\\n            height: 7vh;\\n            color: white;\\n            background-color: #9365A8;\\n            text-align: center;\\n            font-size: 20px;\\n            padding-top: 3vh;\\n        }\\n        \\n    </style>\\n    <form>\\n        <div id=\\\"head\\\">Arthur</div>\\n        <div class=\\\"result\\\"></div>\\n        <form-input name=\\\"message-text\\\" placeholder=\\\"\\u0412\\u0432\\u0435\\u0434\\u0438\\u0442\\u0435 \\u0441\\u043E\\u043E\\u0431\\u0449\\u0435\\u043D\\u0438\\u0435\\\"></form-input>\\n    </form>\\n\";\n\nvar MessageForm =\n/*#__PURE__*/\nfunction (_HTMLElement) {\n  _inherits(MessageForm, _HTMLElement);\n\n  function MessageForm() {\n    var _this;\n\n    _classCallCheck(this, MessageForm);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(MessageForm).call(this));\n    _this.messagesStorage = [];\n    _this._shadowRoot = _this.attachShadow({\n      mode: 'open'\n    });\n\n    _this._shadowRoot.appendChild(template.content.cloneNode(true));\n\n    _this.$form = _this._shadowRoot.querySelector('form');\n    _this.$input = _this._shadowRoot.querySelector('form-input');\n    _this.$message = _this._shadowRoot.querySelector('.result');\n\n    _this.$form.addEventListener('submit', _this._onSubmit.bind(_assertThisInitialized(_this)));\n\n    _this.$form.addEventListener('keypress', _this._onKeyPress.bind(_assertThisInitialized(_this)));\n\n    if (localStorage.getItem('messages') !== null) {\n      _this.messagesStorage = JSON.parse(localStorage.getItem('messages'));\n\n      for (var i = 0; i < _this.messagesStorage.length; i += 1) {\n        var msg = document.createElement('message-view');\n        msg.setAttribute('text', _this.messagesStorage[i].text);\n        msg.setAttribute('time', _this.messagesStorage[i].time);\n\n        _this.$message.appendChild(msg);\n      }\n    }\n\n    return _this;\n  }\n\n  _createClass(MessageForm, [{\n    key: \"_onSubmit\",\n    value: function _onSubmit(event) {\n      event.preventDefault();\n\n      if (this.$input.value.match(/\\S/)) {\n        var today = new Date();\n        var time = \"\".concat(today.getHours(), \":\").concat(today.getMinutes());\n        var msg = document.createElement('message-view');\n        msg.setAttribute('text', this.$input.value);\n        msg.setAttribute('time', time);\n        this.messagesStorage.push({\n          text: this.$input.value,\n          time: time\n        });\n        localStorage.setItem('messages', JSON.stringify(this.messagesStorage));\n        this.$message.appendChild(msg);\n        msg.scrollIntoView();\n      }\n\n      this.$input.$input.value = '';\n    }\n  }, {\n    key: \"_onKeyPress\",\n    value: function _onKeyPress(event) {\n      if (event.keyCode === 13) {\n        this.$form.dispatchEvent(new Event('submit'));\n      }\n    }\n  }]);\n\n  return MessageForm;\n}(_wrapNativeSuper(HTMLElement));\n\ncustomElements.define('message-form', MessageForm);\ncustomElements.define('message-view', _MessageView__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./components/MessageForm.js?");

/***/ }),

/***/ "./components/MessageView.js":
/*!***********************************!*\
  !*** ./components/MessageView.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MessageView; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/* eslint-disable no-underscore-dangle */\nvar template = document.createElement('template');\ntemplate.innerHTML = \"\\n        <style>\\n            div {\\n                max-width: 45vw;\\n                min-width: 8vw;\\n                border-width: 50px;\\n                box-sizing: border-box;\\n                width: auto;\\n                background-color: #f3e6f5;\\n                padding: 5%;\\n                margin: 3vh;\\n                margin-right: 2vw;\\n                border-radius: 10px;\\n                border-bottom-right-radius: 0px;\\n                word-wrap:break-word;\\n                align-self: flex-end;\\n            }\\n\\n            #text {\\n                min-width: 20wh;\\n                box-sizing: border-box;\\n                width: auto;\\n                margin: 1%;\\n                padding: 1%;\\n            }\\n\\n            #time {\\n                min-width: 20wh;\\n                margin: 1%;\\n                margin-top: -5%;\\n                padding: 1%;\\n                text-align: end;\\n                font-size: 50%;\\n            }\\n\\n            #author {\\n                padding: 5%;\\n                color: pink\\n            }\\n        </style>\\n        <div class=\\\"msg\\\">\\n            <!-- <span id='author'></span> -->\\n            <p id='text'>asdasd</p>\\n            <p id='time'></p>\\n        </div> \\n\";\n\nvar MessageView =\n/*#__PURE__*/\nfunction (_HTMLElement) {\n  _inherits(MessageView, _HTMLElement);\n\n  function MessageView() {\n    var _this;\n\n    _classCallCheck(this, MessageView);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(MessageView).call(this));\n    _this._shadowRoot = _this.attachShadow({\n      mode: 'open'\n    });\n\n    _this._shadowRoot.appendChild(template.content.cloneNode(true));\n\n    return _this;\n  }\n\n  _createClass(MessageView, [{\n    key: \"attributeChangedCallback\",\n    value: function attributeChangedCallback(name, oldValue, newValue) {\n      if (['author', 'text', 'time'].includes(name)) {\n        this._shadowRoot.getElementById(name).innerText = newValue;\n      }\n\n      this.setAttribute(name, newValue);\n    }\n  }], [{\n    key: \"observedAttributes\",\n    get: function get() {\n      return ['author', 'text', 'time'];\n    }\n  }]);\n\n  return MessageView;\n}(_wrapNativeSuper(HTMLElement));\n\n\n\n//# sourceURL=webpack:///./components/MessageView.js?");

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_FormInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/FormInput */ \"./components/FormInput.js\");\n/* harmony import */ var _components_FormInput__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_FormInput__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MessageForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MessageForm */ \"./components/MessageForm.js\");\n/* harmony import */ var _components_MessageView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MessageView */ \"./components/MessageView.js\");\n\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });