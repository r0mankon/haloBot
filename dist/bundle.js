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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/elements.js":
/*!*************************!*\
  !*** ./src/elements.js ***!
  \*************************/
/*! exports provided: halo, about_dialog, about_button, output, container_output, input_field, mic, submit, close_button, outer_halo, inner_halo, mid_halo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"halo\", function() { return halo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"about_dialog\", function() { return about_dialog; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"about_button\", function() { return about_button; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"output\", function() { return output; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"container_output\", function() { return container_output; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"input_field\", function() { return input_field; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mic\", function() { return mic; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submit\", function() { return submit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"close_button\", function() { return close_button; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"outer_halo\", function() { return outer_halo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inner_halo\", function() { return inner_halo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mid_halo\", function() { return mid_halo; });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n\nvar halo = Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(\".halo\"),\n    about_dialog = Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(\".about-dialog\"),\n    about_button = Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(\".about-btn\"),\n    output = Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(\"#output-element\"),\n    container_output = Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(\".container-output\"),\n    input_field = Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(\"#input\"),\n    mic = Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(\"#mic\"),\n    submit = Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(\"#submit\"),\n    close_button = Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(\".close-btn\"),\n    outer_halo = Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(\".halo-outer\"),\n    inner_halo = Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(\".halo-inner\"),\n    mid_halo = Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(\".halo-middle\");\n\n//# sourceURL=webpack:///./src/elements.js?");

/***/ }),

/***/ "./src/function.js":
/*!*************************!*\
  !*** ./src/function.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Functions =\n/*#__PURE__*/\nfunction () {\n  function Functions() {\n    _classCallCheck(this, Functions);\n\n    this.date = new Date();\n    this.time = new Date(Date.now());\n  }\n\n  _createClass(Functions, [{\n    key: \"getTime\",\n    value: function getTime() {\n      return \"The Time is \".concat(this.time.toLocaleString(\"en-US\", {\n        hour: \"numeric\",\n        minute: \"numeric\",\n        hour12: true\n      }));\n    }\n  }, {\n    key: \"getMonthName\",\n    value: function getMonthName() {\n      var monthNumber = this.date.getMonth();\n      var monthNames = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\n      var currentMonthName = monthNames[monthNumber];\n      return currentMonthName;\n    }\n  }, {\n    key: \"getDate\",\n    value: function getDate() {\n      var dayNames = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"];\n      this.date.setDate(this.date.getDate());\n      var date = \"Today is \" + dayNames[this.date.getDay()] + \", \" + this.date.getDate() + \" \" + this.getMonthName() + \", \" + this.date.getFullYear();\n      return date;\n    }\n  }, {\n    key: \"get_weather\",\n    value: function get_weather() {\n      if (!navigator.geolocation) {\n        alert(\"Your browser does not support geolocation api.\");\n      } else {\n        var position = navigator.geolocation.getCurrentPosition(function (position) {\n          var lat = position.coords.latitude;\n          var lon = position.coords.longitude;\n          fetch(\"https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=\".concat(lat, \"&lon=\").concat(lon, \"&APPID=58b6f7c78582bffab3936dac99c31b25\")).then(function (response) {\n            return response.json();\n          }).then(function (json) {\n            if (json.cod === \"404\") {\n              return \"I am not getting weather\";\n            } else if (json.lat == \"\") {\n              Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"write_output\"])(\"Please turn on your GPS\");\n            } else {\n              Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"write_output\"])(\"The weather condition in \".concat(json.name, \" is mostly full of \").concat(json.weather[0].description, \" at a temperature of \").concat(Math.round((json.main.temp - 32) / 1.8), \" degree Celsius\"));\n            }\n          })[\"catch\"](function (error) {\n            return Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"write_output\"])(error);\n          });\n        }, this.showError);\n      }\n    }\n  }, {\n    key: \"showError\",\n    value: function showError(error) {\n      switch (error.code) {\n        case error.PERMISSION_DENIED:\n          alert(\"Please enable Geolocation.\");\n          break;\n\n        case error.POSITION_UNAVAILABLE:\n          alert(\"Location information is unavailable.\");\n          break;\n\n        case error.TIMEOUT:\n          alert(\"The request to get location timed out.\");\n          break;\n\n        case error.UNKNOWN_ERROR:\n          alert(\"An unknown error occurred.\");\n          break;\n      }\n    }\n  }, {\n    key: \"get_jokes\",\n    value: function get_jokes() {\n      fetch(\"https://api.chucknorris.io/jokes/random\").then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        return Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"write_output\"])(json.value);\n      })[\"catch\"](function (error) {\n        return console.log(error);\n      });\n    }\n  }]);\n\n  return Functions;\n}();\n\nvar fun = new Functions();\n/* harmony default export */ __webpack_exports__[\"default\"] = (fun);\n\n//# sourceURL=webpack:///./src/function.js?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/*! exports provided: $ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$\", function() { return $; });\n/**\n *\n * @param {String} selector css like selector\n */\nvar $ = function $(selector) {\n  return document.querySelector(selector);\n};\n\n//# sourceURL=webpack:///./src/helper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: write_output */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"write_output\", function() { return write_output; });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function */ \"./src/function.js\");\n\n\n\nHTMLElement.prototype.show = function () {\n  this.style.visibility = \"visible\";\n};\n\nHTMLElement.prototype.hide = function () {\n  this.style.visibility = \"hidden\";\n};\n\n_elements__WEBPACK_IMPORTED_MODULE_0__[\"about_button\"].onclick = function () {\n  return _elements__WEBPACK_IMPORTED_MODULE_0__[\"about_dialog\"].show();\n};\n\n_elements__WEBPACK_IMPORTED_MODULE_0__[\"close_button\"].onclick = function () {\n  return _elements__WEBPACK_IMPORTED_MODULE_0__[\"about_dialog\"].hide();\n}; // Enter key action\n\n\n_elements__WEBPACK_IMPORTED_MODULE_0__[\"input_field\"].addEventListener(\"keypress\", function (event) {\n  if (event.keyCode === 13) {\n    event.preventDefault();\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"submit\"].click();\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"input_field\"].value = \"\";\n  }\n}); // Clear text field on focus\n\n_elements__WEBPACK_IMPORTED_MODULE_0__[\"input_field\"].onfocus = function () {\n  return _elements__WEBPACK_IMPORTED_MODULE_0__[\"input_field\"].value = \"\";\n};\n\nfunction write_output(data) {\n  _elements__WEBPACK_IMPORTED_MODULE_0__[\"output\"].textContent = data;\n}\n\nfunction speak() {\n  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _elements__WEBPACK_IMPORTED_MODULE_0__[\"output\"].textContent;\n\n  if (\"speechSynthesis\" in window) {\n    var msg = new SpeechSynthesisUtterance();\n    msg.text = text;\n    speechSynthesis.speak(msg);\n  } else {\n    console.log(\"SpeechSynthesis not supported in your browser\");\n  }\n}\n\nfunction listen() {\n  window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;\n  var recognition = new SpeechRecognition();\n  recognition.start();\n\n  recognition.onresult = function (event) {\n    var transcript = event.results[0][0].transcript;\n\n    if (event.results[0].isFinal) {\n      _elements__WEBPACK_IMPORTED_MODULE_0__[\"input_field\"].value = transcript;\n      bot();\n    }\n  };\n}\n\nfunction duck_duck_go(query) {\n  fetch(\"https://api.duckduckgo.com/?no_redirect=1&no_html=1&skip_disambig=1&q=\".concat(query, \"&format=json\")).then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    if (data.AbstractText !== \"\") {\n      write_output(data.AbstractText);\n    } else if (data.AbstractText === \"\" && data.RelatedTopics !== []) {\n      write_output(\"I have several answers for you...\\n               \".concat(data.RelatedTopics[3].Topics[1].Text));\n    } else {\n      write_output(\"Sorry I have nothing to say\");\n    }\n  })[\"catch\"](function (error) {\n    return alert(error);\n  });\n}\n\nfunction bot() {\n  var inputValue = _elements__WEBPACK_IMPORTED_MODULE_0__[\"input_field\"].value.toLowerCase();\n\n  if (inputValue.includes(\"hi\")) {\n    write_output(\"Hi, What can I do for you\");\n  } else if (inputValue.includes(\"you\")) {\n    write_output(\"I am doing great. Thanks for asking\");\n  } else if (inputValue.includes(\"bored\")) {\n    \"I can tell you a joke or you can play a game\";\n  } else if (inputValue.includes(\"thanks\")) {\n    write_output(\"Your are Welcome\");\n  } else if (inputValue.includes(\"bye\")) {\n    write_output(\"Goode Bye\");\n  } else if (inputValue.includes(\"time\")) {\n    write_output(_function__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTime());\n  } else if (inputValue.includes(\"date\")) {\n    write_output(_function__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getDate());\n  } else if (inputValue.includes(\"month\")) {\n    write_output(_function__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getMonthName());\n  } else if (inputValue.includes(\"weather\")) {\n    _function__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get_weather();\n  } else if (inputValue.includes(\"joke\")) {\n    _function__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get_jokes();\n  } else {\n    duck_duck_go(inputValue);\n  }\n\n  if (_elements__WEBPACK_IMPORTED_MODULE_0__[\"output\"].textContent !== \"Welcome\") {\n    speak();\n  }\n}\n\n_elements__WEBPACK_IMPORTED_MODULE_0__[\"mic\"].onclick = function () {\n  return listen();\n};\n\n_elements__WEBPACK_IMPORTED_MODULE_0__[\"submit\"].onclick = function () {\n  if (_elements__WEBPACK_IMPORTED_MODULE_0__[\"input_field\"].value !== \"\") {\n    bot();\n  }\n}; // Pre Suggestion\n\n\nvar press = [\"Time\", \"Date\", \"Weather\", \"Tell me a joke\", \"What is bot\", \"When did first world war happen\", \"Ecosia\"];\nvar press_container = document.querySelector(\"#quick-tiles\");\npress.forEach(function (array_element) {\n  var tile = document.createElement(\"span\");\n  tile.className = \"tile\";\n  tile.innerHTML = array_element;\n  press_container.appendChild(tile);\n});\nvar all_pres = document.querySelectorAll(\".tile\");\nvar tiles_inner_text;\nall_pres.forEach(function (tile) {\n  tile.addEventListener(\"click\", function (event) {\n    tiles_inner_text = event.target.innerText;\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"input_field\"].value = tiles_inner_text;\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"submit\"].click();\n  });\n});\nspeak();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });