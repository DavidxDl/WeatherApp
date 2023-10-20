/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/CreateCard.js":
/*!***************************!*\
  !*** ./src/CreateCard.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CreateCard)\n/* harmony export */ });\nfunction CreateCard(Country, City, Condition, Degrees, Humidity, Precipitation, Wind)\r\n{\r\n    if (document.querySelector(\".container\")) \r\n        document.querySelector(\"main\").removeChild(document.querySelector(\".container\"));\r\n\r\n    const card = document.createElement(\"div\");\r\n    card.classList.add(\"container\");\r\n\r\n\r\n    const country = document.createElement(\"h1\");\r\n    country.innerText = `${Country}, ${City}`;\r\n\r\n    const condition = document.createElement(\"h3\");\r\n    condition.innerText = `Condition: ${Condition}`; \r\n\r\n    const degrees = document.createElement(\"span\");\r\n    degrees.classList.add(\"degrees\");\r\n    degrees.innerText = `${Degrees}°C`;\r\n\r\n    const emoji = document.createElement(\"span\");\r\n    emoji.classList.add(\"emoji\");\r\n    emoji.innerText = GetEmojiFromCondition(Condition);\r\n\r\n    const humidity = document.createElement(\"h3\");\r\n    humidity.classList.add(\"humitity\");\r\n    humidity.innerText = 'Humidity: ' + Humidity + '%';\r\n\r\n    const precipitation = document.createElement(\"h3\");\r\n    precipitation.classList.add ('precipitation');\r\n    precipitation.innerText = 'Precipitation: ' + Precipitation + '%';\r\n\r\n    const wind = document.createElement(\"h3\");\r\n    wind.classList.add(\"wind\");\r\n    wind.innerText = 'Wind: ' + Wind + 'kh/h';\r\n\r\n    card.append(country, degrees, emoji, condition, humidity, precipitation, wind);\r\n    document.querySelector(\"main\").append(card);\r\n}\r\n\r\n\r\nfunction GetEmojiFromCondition(Condition)\r\n{\r\n    Condition = Condition.toLowerCase();\r\n    if(Condition.includes(\"partly cloudy\")) return '⛅';\r\n    if(Condition.includes(\"rain\")) return '🌧';\r\n    if(Condition.includes(\"clear\") || Condition.includes(\"sunny\")) return '🌞';\r\n    if(Condition.includes('overcast')) return '☁'\r\n    \r\n}\r\n\r\n\n\n//# sourceURL=webpack://fetching_testing/./src/CreateCard.js?");

/***/ }),

/***/ "./src/GetGif.js":
/*!***********************!*\
  !*** ./src/GetGif.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GetGif)\n/* harmony export */ });\nasync function GetGif(name) {\r\n    try {\r\n        const body = document.querySelector(\"body\");\r\n        const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=qfDuH4FSqm8RzfieCR0Et6jrPkTd7tiK&s=' + GetGoodGifPrompt(name),{mode:\"cors\"});\r\n        const data = await response.json();\r\n        const gifUrl = data.data.images.original.url;\r\n        body.style = 'background-image: url(' + gifUrl +' );'\r\n    } catch(err) {\r\n        console.log('Gif not found!');\r\n    }\r\n\r\n}\r\n\r\nfunction GetGoodGifPrompt(condition)\r\n{\r\n    condition = condition.toLowerCase();\r\n    if(condition.includes(\"partly cloudy\") || condition.includes('overcast')) return \"Cielo Nublado\";\r\n    if(condition.includes(\"rain\")) return 'rain drops';\r\n    if (condition.includes(\"sunny\") || condition.includes(\"clear\")) return \"sunrise\";\r\n}\n\n//# sourceURL=webpack://fetching_testing/./src/GetGif.js?");

/***/ }),

/***/ "./src/GetWeather.js":
/*!***************************!*\
  !*** ./src/GetWeather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GetWeather)\n/* harmony export */ });\n\r\nasync function GetWeather(city)\r\n{\r\n    if (!city) return;\r\n    try {\r\n        const response = await fetch('http://api.weatherapi.com/v1/current.json?key=cb3fb464a54f4aaf9cd32643231910&q=' + city)   \r\n        const data = await response.json();\r\n        console.log(data);\r\n        return data;\r\n    } catch(err) {\r\n        throw new Error(err);\r\n    }\r\n    \r\n}\n\n//# sourceURL=webpack://fetching_testing/./src/GetWeather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GetGif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetGif */ \"./src/GetGif.js\");\n/* harmony import */ var _GetWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GetWeather */ \"./src/GetWeather.js\");\n/* harmony import */ var _CreateCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateCard */ \"./src/CreateCard.js\");\n/* harmony import */ var _imgs_headerImg_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/headerImg.jpg */ \"./src/imgs/headerImg.jpg\");\n/* harmony import */ var _imgs_UmbrellaLogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgs/UmbrellaLogo.png */ \"./src/imgs/UmbrellaLogo.png\");\n\r\n\r\n\r\n\r\n\r\nconst body = document.querySelector('body');\r\nconst btn = document.getElementById('btn');\r\nconst search = document.getElementById('searchbar');\r\nconst header = document.querySelector('.header');\r\n\r\ndocument.getElementById(\"logoImg\").src = _imgs_UmbrellaLogo_png__WEBPACK_IMPORTED_MODULE_4__;\r\nlet cardBackground;\r\n\r\nconsole.log('hey!');\r\n\r\nbtn.addEventListener('click', () => {\r\n    if (!search.value) return;\r\n\r\n    (0,_GetWeather__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(search.value)\r\n\r\n    .then((weather) => {\r\n        const countryName = weather.location.country;\r\n        const cityName = weather.location.name;\r\n        const conditionText = weather.current.condition.text;\r\n        const degreesValue = weather.current.temp_c;\r\n        const humidity = weather.current.humidity;\r\n        const precipitation = weather.current.precip_in;\r\n        const wind = weather.current.wind_kph;\r\n\r\n        (0,_GetGif__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('weather' + conditionText);\r\n        (0,_CreateCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(countryName, cityName, conditionText, degreesValue, humidity, precipitation, wind);\r\n    })\r\n});\n\n//# sourceURL=webpack://fetching_testing/./src/index.js?");

/***/ }),

/***/ "./src/imgs/UmbrellaLogo.png":
/*!***********************************!*\
  !*** ./src/imgs/UmbrellaLogo.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cd00e16ff5e56b6ddd5d.png\";\n\n//# sourceURL=webpack://fetching_testing/./src/imgs/UmbrellaLogo.png?");

/***/ }),

/***/ "./src/imgs/headerImg.jpg":
/*!********************************!*\
  !*** ./src/imgs/headerImg.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ef57c5c93aa9ed64f40a.jpg\";\n\n//# sourceURL=webpack://fetching_testing/./src/imgs/headerImg.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;