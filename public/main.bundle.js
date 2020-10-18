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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: Unknown option: .options. Check out https://babeljs.io/docs/en/babel-core/#options for more information about options.\n    at throwUnknownError (/media/rokon/Data/workSpace/projects/front-end/haloBot/node_modules/@babel/core/lib/config/validation/options.js:123:27)\n    at /media/rokon/Data/workSpace/projects/front-end/haloBot/node_modules/@babel/core/lib/config/validation/options.js:108:5\n    at Array.forEach (<anonymous>)\n    at validateNested (/media/rokon/Data/workSpace/projects/front-end/haloBot/node_modules/@babel/core/lib/config/validation/options.js:84:21)\n    at validate (/media/rokon/Data/workSpace/projects/front-end/haloBot/node_modules/@babel/core/lib/config/validation/options.js:75:10)\n    at loadPrivatePartialConfig (/media/rokon/Data/workSpace/projects/front-end/haloBot/node_modules/@babel/core/lib/config/partial.js:76:50)\n    at loadPrivatePartialConfig.next (<anonymous>)\n    at Function.<anonymous> (/media/rokon/Data/workSpace/projects/front-end/haloBot/node_modules/@babel/core/lib/config/partial.js:120:25)\n    at Generator.next (<anonymous>)\n    at evaluateSync (/media/rokon/Data/workSpace/projects/front-end/haloBot/node_modules/gensync/index.js:244:28)\n    at Function.sync (/media/rokon/Data/workSpace/projects/front-end/haloBot/node_modules/gensync/index.js:84:14)\n    at Object.<anonymous> (/media/rokon/Data/workSpace/projects/front-end/haloBot/node_modules/@babel/core/lib/config/index.js:43:61)\n    at Object.<anonymous> (/media/rokon/Data/workSpace/projects/front-end/haloBot/node_modules/babel-loader/lib/index.js:151:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/media/rokon/Data/workSpace/projects/front-end/haloBot/node_modules/babel-loader/lib/index.js:3:103)\n    at _next (/media/rokon/Data/workSpace/projects/front-end/haloBot/node_modules/babel-loader/lib/index.js:5:194)\n    at /media/rokon/Data/workSpace/projects/front-end/haloBot/node_modules/babel-loader/lib/index.js:5:364\n    at new Promise (<anonymous>)\n    at Object.<anonymous> (/media/rokon/Data/workSpace/projects/front-end/haloBot/node_modules/babel-loader/lib/index.js:5:97)\n    at Object._loader (/media/rokon/Data/workSpace/projects/front-end/haloBot/node_modules/babel-loader/lib/index.js:231:18)\n    at Object.loader (/media/rokon/Data/workSpace/projects/front-end/haloBot/node_modules/babel-loader/lib/index.js:64:18)\n    at Object.<anonymous> (/media/rokon/Data/workSpace/projects/front-end/haloBot/node_modules/babel-loader/lib/index.js:59:12)");

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map