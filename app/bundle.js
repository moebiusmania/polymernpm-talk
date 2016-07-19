/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _demoApp = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Imports Polymer

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DemoApp = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	// Imports child components


	var _polymer = __webpack_require__(2);

	var _appButton = __webpack_require__(3);

	var _appList = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DemoApp = exports.DemoApp = function () {
	  function DemoApp() {
	    _classCallCheck(this, DemoApp);
	  }

	  _createClass(DemoApp, [{
	    key: 'beforeRegister',
	    value: function beforeRegister() {
	      this.is = 'demo-app';
	      this.properties = {
	        data: {
	          type: Array,
	          value: []
	        }
	      };
	    }
	  }, {
	    key: '_loadData',
	    value: function _loadData(event) {
	      var _this = this;

	      console.log('# Requested data');
	      fetch('http://jsonplaceholder.typicode.com/users').then(function (response) {
	        return response.json();
	      }).then(function (json) {
	        _this.set('data', json);
	      });
	    }
	  }, {
	    key: 'attached',
	    value: function attached() {
	      console.log('Polymer app started!');
	    }
	  }]);

	  return DemoApp;
	}();

	(0, _polymer.Polymer)(DemoApp);

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Polymer = exports.Polymer = window.Polymer;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Imports Polymer

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.AppButton = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _polymer = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AppButton = exports.AppButton = function () {
		function AppButton() {
			_classCallCheck(this, AppButton);
		}

		_createClass(AppButton, [{
			key: 'beforeRegister',
			value: function beforeRegister() {
				this.is = 'app-button';
			}
		}, {
			key: '_clicked',
			value: function _clicked(event) {
				this.fire('request');
			}
		}]);

		return AppButton;
	}();

	(0, _polymer.Polymer)(AppButton);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Imports Polymer

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AppList = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _polymer = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AppList = exports.AppList = function () {
	  function AppList() {
	    _classCallCheck(this, AppList);
	  }

	  _createClass(AppList, [{
	    key: 'beforeRegister',
	    value: function beforeRegister() {
	      this.is = 'app-list';
	      this.properties = {
	        elements: {
	          type: Array,
	          value: []
	        }
	      };
	    }
	  }]);

	  return AppList;
	}();

	(0, _polymer.Polymer)(AppList);

/***/ }
/******/ ]);