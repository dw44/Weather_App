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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return showDefault; });\n/* harmony import */ var _modules_initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/initialize */ \"./src/modules/initialize.js\");\n/* harmony import */ var _modules_getWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getWeather */ \"./src/modules/getWeather.js\");\n/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display */ \"./src/modules/display.js\");\n\r\n\r\n\r\n\r\n// Prompt for permission to use location. set to toronto if denied. save to localstorage\r\nwindow.onload = Object(_modules_initialize__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().getLocation();\r\ndocument.getElementById('switchUnits').onclick = changeUnit;\r\n// search form\r\ndocument.querySelector('#search').onclick = search; \r\n\r\n\r\n// Sets unit to display temperature. '1' for celsius, '2' for fahrenheit. Set to 1 by default\r\nlet temperatureUnit = 1; \r\n\r\n// save a local copy of weather data to assist with unit conversion due to how \r\nlet weather = {};\r\n\r\nfunction changeUnit() {\r\n    // switch weather units on main weather display\r\n  if (temperatureUnit === 1) {\r\n    temperatureUnit = 2;\r\n    document.getElementById('switchUnits').innerText = 'C';\r\n  } else {\r\n    temperatureUnit = 1;\r\n    document.getElementById('switchUnits').innerText = 'F';\r\n  }\r\n  Object(_modules_display__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().displayWeather(weather, temperatureUnit);\r\n}\r\n\r\nfunction search(e) {\r\n  e.preventDefault();\r\n  const city = document.getElementById('search-city').value;\r\n  // weather object gets overwritten in case of error in search. this maintains a copy of the original \r\n  const weatherBackup = {...weather};\r\n  if(!!city) {\r\n    Object(_modules_getWeather__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().getFromCityName(city)\r\n      .then(weatherData => {\r\n        weather = {...weatherData}\r\n        Object(_modules_display__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().displayAll(weather, temperatureUnit);\r\n      })\r\n      .catch(error => {\r\n        // set weather to last functioning set of values\r\n        weather = {...weatherBackup};\r\n        console.log(error);\r\n        alert('Encountered an Error');\r\n      });\r\n  }\r\n}\r\n\r\n/* exported from here to avoid needlessly complicating data sharing between \r\n   various versions of the \"weather\" object                              */\r\nfunction showDefault() {\r\n  Object(_modules_getWeather__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().getFromCoordinates(localStorage.latitude, localStorage.longitude)\r\n  .then(weatherData => {\r\n    weather = {...weatherData}\r\n    Object(_modules_display__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().displayAll(weather, 1);\r\n  })\r\n  .catch(error => {\r\n    console.log(error);\r\n  });\r\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _unitConversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unitConversion */ \"./src/modules/unitConversion.js\");\n\r\n\r\nconst display = function() {\r\n  const printWithUnits = (temperature, unit) => `${temperature}° ${unit}`;\r\n\r\n  const displayWeather = (weather, unit) => {\r\n    if (unit === 1) {\r\n      document.getElementById('current-temperature').innerText = `Current Temperature: ${printWithUnits(Object(_unitConversion__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().kelvinToCelsius(weather.main.temp).toFixed(1), 'C')}`;\r\n      document.getElementById('feels-like').innerText = `Feels Like: ${printWithUnits(Object(_unitConversion__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().kelvinToCelsius(weather.main.feels_like).toFixed(1), 'C')}`;\r\n      document.getElementById('daily-max').innerText = `Maximum: ${printWithUnits(Object(_unitConversion__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().kelvinToCelsius(weather.main.feels_like).toFixed(1), 'C')}`;\r\n      document.getElementById('daily-min').innerText = `Minimum: ${printWithUnits(Object(_unitConversion__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().kelvinToCelsius(weather.main.feels_like).toFixed(1), 'C')}`;\r\n    }\r\n    else  if (unit === 2) {\r\n      document.getElementById('current-temperature').innerText = `Current Temperature: ${printWithUnits(Object(_unitConversion__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().kelvinToFahrenheit(weather.main.temp).toFixed(1), 'F')}`;\r\n      document.getElementById('feels-like').innerText = `Feels Like: ${printWithUnits(Object(_unitConversion__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().kelvinToFahrenheit(weather.main.feels_like).toFixed(1), 'F')}`;\r\n      document.getElementById('daily-max').innerText = `Maximum: ${printWithUnits(Object(_unitConversion__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().kelvinToFahrenheit(weather.main.feels_like).toFixed(1), 'F')}`;\r\n      document.getElementById('daily-min').innerText = `Minimum: ${printWithUnits(Object(_unitConversion__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().kelvinToFahrenheit(weather.main.feels_like).toFixed(1), 'F')}`;\r\n    }\r\n  }\r\n\r\n  const displayAll = (weather, unit) => {\r\n    document.getElementById('location').innerText = `${weather.name}, ${weather.sys.country}`;\r\n    document.getElementById('humidity').innerText = `Humidity: ${weather.main.humidity}%`;\r\n    document.getElementById('wind-speed').innerText = `Wind Speed: ${weather.wind.speed} km/h`;\r\n    document.getElementById('description-text').innerText = weather.weather[0].description;\r\n    displayWeather(weather, unit);\r\n  }\r\n\r\n  return {\r\n    printWithUnits,\r\n    displayWeather,\r\n    displayAll,\r\n  };\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (display);\n\n//# sourceURL=webpack:///./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/getWeather.js":
/*!***********************************!*\
  !*** ./src/modules/getWeather.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst getWeather = function weather () { \r\n  const loadJson = async url => {\r\n    let response = await fetch(url);\r\n    if (response.status === 200) {\r\n      let json = await response.json();\r\n      return json;\r\n    }\r\n    throw new Error (response.status);\r\n  }\r\n\r\n  const getFromCityName = async city => {\r\n    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=46330e55c3e301b385d0d4571604500f`;\r\n    try {\r\n      let x = await loadJson(url);\r\n       return x;\r\n    } catch(error) {\r\n      console.log(error);\r\n    }\r\n  } \r\n\r\n  const getFromCoordinates = async (latitude, longitude) => {\r\n    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${Number(latitude).toFixed(3)}&lon=${Number(longitude).toFixed(3)}&appid=46330e55c3e301b385d0d4571604500f`;\r\n    try {\r\n      let x = await loadJson(url);\r\n      return x;\r\n    } catch(error) {\r\n      console.log(error);\r\n    }\r\n  }\r\n\r\n  return {\r\n    getFromCoordinates,\r\n    getFromCityName,\r\n    loadJson\r\n  };\r\n}  \r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (getWeather);\n\n//# sourceURL=webpack:///./src/modules/getWeather.js?");

/***/ }),

/***/ "./src/modules/initialize.js":
/*!***********************************!*\
  !*** ./src/modules/initialize.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\r\n\r\nconst initialize = function init () {\r\n  const getCoords = position => {\r\n    localStorage.setItem('latitude', position.coords.latitude);\r\n    localStorage.setItem('longitude', position.coords.longitude);\r\n    Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  }\r\n  \r\n  const setDefaultCoords = () => {\r\n    // Sets default location to Toronto if user denies permission to use geolocation\r\n    localStorage.setItem('latitude', 43.6548);\r\n    localStorage.setItem('longitude', -79.3883);\r\n    Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  }\r\n\r\n\r\n  const getLocation = () => {\r\n      navigator.geolocation.getCurrentPosition(getCoords, setDefaultCoords);\r\n  }\r\n  \r\n  return {\r\n    getLocation,\r\n    getCoords,\r\n    setDefaultCoords\r\n  };\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (initialize);\n\n//# sourceURL=webpack:///./src/modules/initialize.js?");

/***/ }),

/***/ "./src/modules/unitConversion.js":
/*!***************************************!*\
  !*** ./src/modules/unitConversion.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst unitConversion = function conversion () {\r\n  const kelvinToCelsius = kelvin => kelvin - 273.15;\r\n  const celsiusToFahrenheit = celsius => celsius * 1.8 + 32;\r\n  const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5 / 9;\r\n  const kelvinToFahrenheit = kelvin => celsiusToFahrenheit(kelvinToCelsius(kelvin));\r\n  return {\r\n    kelvinToCelsius,\r\n    celsiusToFahrenheit,\r\n    fahrenheitToCelsius,\r\n    kelvinToFahrenheit\r\n  };\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (unitConversion);\r\n\n\n//# sourceURL=webpack:///./src/modules/unitConversion.js?");

/***/ })

/******/ });