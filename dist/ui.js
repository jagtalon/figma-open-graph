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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ui.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/libs/figma-ds/figma-plugin-ds.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/libs/figma-ds/figma-plugin-ds.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* Vars */\n:root {\n  /* COLORS */\n  /* Accent */\n  --blue: #18a0fb;\n  --purple: #7b61ff;\n  --hot-pink: #ff00ff;\n  --green: #1bc47d;\n  --red: #f24822;\n  --yellow: #ffeb00;\n  /* Basic foreground */\n  --black: #000000;\n  --black8: rgba(0, 0, 0, .8);\n  --black8-opaque: #333333;\n  --black3: rgba(0, 0, 0, .3);\n  --black3-opaque: #B3B3B3;\n  --white: #ffffff;\n  --white8: rgba(255, 255, 255, .8);\n  --white4: rgba(255, 255, 255, .4);\n  /* Basic background */\n  --grey: #f0f0f0;\n  --silver: #e5e5e5;\n  --hud: #222222;\n  --toolbar: #2c2c2c;\n  /* Special */\n  --black1: rgba(0, 0, 0, .1);\n  --blue3: rgba(24, 145, 251, .3);\n  --purple4: rgba(123, 97, 255, .4);\n  --hover-fill: rgba(0, 0, 0, .06);\n  --selection-a: #daebf7;\n  --selection-b: #edf5fa;\n  --white2: rgba(255, 255, 255, .2);\n  /* TYPOGRAPHY */\n  /* Pos = positive applications (black on white) */\n  /* Neg = negative applications (white on black) */\n  /* Font stack */\n  --font-stack: 'Inter', sans-serif;\n  /* Font sizes */\n  --font-size-xsmall: 11px;\n  --font-size-small: 12px;\n  --font-size-large: 13px;\n  --font-size-xlarge: 14px;\n  /* Font weights */\n  --font-weight-normal: 400;\n  --font-weight-medium: 500;\n  --font-weight-bold: 600;\n  /* Lineheight */\n  --font-line-height: 16px;\n  /* Use For xsmall, small font sizes */\n  --font-line-height-large: 24px;\n  /* Use For large, xlarge font sizes */\n  /* Letterspacing */\n  --font-letter-spacing-pos-xsmall: .005em;\n  --font-letter-spacing-neg-xsmall: .01em;\n  --font-letter-spacing-pos-small: 0;\n  --font-letter-spacing-neg-small: .005em;\n  --font-letter-spacing-pos-large: -.0025em;\n  --font-letter-spacing-neg-large: .0025em;\n  --font-letter-spacing-pos-xlarge: -.001em;\n  --font-letter-spacing-neg-xlarge: -.001em;\n  /* BORDER RADIUS */\n  --border-radius-small: 2px;\n  --border-radius-med: 5px;\n  --border-radius-large: 6px;\n  /* SHADOWS */\n  --shadow-hud: 0 5px 17px rgba(0, 0, 0, .2), 0 2px 7px rgba(0, 0, 0, .15);\n  --shadow-floating-window: 0 2px 14px rgba(0, 0, 0, .15);\n  /* SPACING + SIZING */\n  --size-xxxsmall: 4px;\n  --size-xxsmall: 8px;\n  --size-xsmall: 16px;\n  --size-small: 24px;\n  --size-medium: 32px;\n  --size-large: 40px;\n  --size-xlarge: 48px;\n  --size-xxlarge: 64px;\n  --size-xxxlarge: 80px;\n}\n\n/* Global styles */\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  position: relative;\n  box-sizing: border-box;\n  font-family: 'Inter', sans-serif;\n  margin: 0;\n  padding: 0;\n}\n\n/*  FONTS */\n@font-face {\n  font-family: 'Inter';\n  font-weight: 400;\n  font-style: normal;\n  src: url(\"https://rsms.me/inter/font-files/Inter-Regular.woff2?v=3.7\") format(\"woff2\"), url(\"https://rsms.me/inter/font-files/Inter-Regular.woff?v=3.7\") format(\"woff\");\n}\n\n@font-face {\n  font-family: 'Inter';\n  font-weight: 500;\n  font-style: normal;\n  src: url(\"https://rsms.me/inter/font-files/Inter-Medium.woff2?v=3.7\") format(\"woff2\"), url(\"https://rsms.me/inter/font-files/Inter-Medium.woff2?v=3.7\") format(\"woff\");\n}\n\n@font-face {\n  font-family: 'Inter';\n  font-weight: 600;\n  font-style: normal;\n  src: url(\"https://rsms.me/inter/font-files/Inter-SemiBold.woff2?v=3.7\") format(\"woff2\"), url(\"https://rsms.me/inter/font-files/Inter-SemiBold.woff2?v=3.7\") format(\"woff\");\n}\n\n/* UTILITIES */\n/* padding */\n.p-xxxsmall {\n  padding: var(--size-xxxsmall);\n}\n\n.p-xxsmall {\n  padding: var(--size-xxsmall);\n}\n\n.p-xsmall {\n  padding: var(--size-xsmall);\n}\n\n.p-small {\n  padding: var(--size-small);\n}\n\n.p-medium {\n  padding: var(--size-medium);\n}\n\n.p-large {\n  padding: var(--size-large);\n}\n\n.p-xlarge {\n  padding: var(--size-xlarge);\n}\n\n.p-xxlarge {\n  padding: var(--size-xxlarge);\n}\n\n.p-huge {\n  padding: var(--size-xxxlarge);\n}\n\n/* padding top */\n.pt-xxxsmall {\n  padding-top: var(--size-xxxsmall);\n}\n\n.pt-xxsmall {\n  padding-top: var(--size-xxsmall);\n}\n\n.pt-xsmall {\n  padding-top: var(--size-xsmall);\n}\n\n.pt-small {\n  padding-top: var(--size-small);\n}\n\n.pt-medium {\n  padding-top: var(--size-medium);\n}\n\n.pt-large {\n  padding-top: var(--size-large);\n}\n\n.pt-xlarge {\n  padding-top: var(--size-xlarge);\n}\n\n.pt-xxlarge {\n  padding-top: var(--size-xxlarge);\n}\n\n.pt-huge {\n  padding-top: var(--size-xxxlarge);\n}\n\n/* padding right */\n.pr-xxxsmall {\n  padding-right: var(--size-xxxsmall);\n}\n\n.pr-xxsmall {\n  padding-right: var(--size-xxsmall);\n}\n\n.pr-xsmall {\n  padding-right: var(--size-xsmall);\n}\n\n.pr-small {\n  padding-right: var(--size-small);\n}\n\n.pr-medium {\n  padding-right: var(--size-medium);\n}\n\n.pr-large {\n  padding-right: var(--size-large);\n}\n\n.pr-xlarge {\n  padding-right: var(--size-xlarge);\n}\n\n.pr-xxlarge {\n  padding-right: var(--size-xxlarge);\n}\n\n.pr-huge {\n  padding-right: var(--size-xxxlarge);\n}\n\n/* padding bottom */\n.pb-xxxsmall {\n  padding-bottom: var(--size-xxxsmall);\n}\n\n.pb-xxsmall {\n  padding-bottom: var(--size-xxsmall);\n}\n\n.pb-xsmall {\n  padding-bottom: var(--size-xsmall);\n}\n\n.pb-small {\n  padding-bottom: var(--size-small);\n}\n\n.pb-medium {\n  padding-bottom: var(--size-medium);\n}\n\n.pb-large {\n  padding-bottom: var(--size-large);\n}\n\n.pb-xlarge {\n  padding-bottom: var(--size-xlarge);\n}\n\n.pb-xxlarge {\n  padding-bottom: var(--size-xxlarge);\n}\n\n.pb-huge {\n  padding-bottom: var(--size-xxxlarge);\n}\n\n/* padding left */\n.pl-xxxsmall {\n  padding-left: var(--size-xxxsmall);\n}\n\n.pl-xxsmall {\n  padding-left: var(--size-xxsmall);\n}\n\n.pl-xsmall {\n  padding-left: var(--size-xsmall);\n}\n\n.pl-small {\n  padding-left: var(--size-small);\n}\n\n.pl-medium {\n  padding-left: var(--size-medium);\n}\n\n.pl-large {\n  padding-left: var(--size-large);\n}\n\n.pl-xlarge {\n  padding-left: var(--size-xlarge);\n}\n\n.pl-xxlarge {\n  padding-left: var(--size-xxlarge);\n}\n\n.pl-huge {\n  padding-left: var(--size-xxxlarge);\n}\n\n/* margin */\n.m-xxxsmall {\n  margin: var(--size-xxxsmall);\n}\n\n.m-xxsmall {\n  margin: var(--size-xxsmall);\n}\n\n.m-xsmall {\n  margin: var(--size-xsmall);\n}\n\n.m-small {\n  margin: var(--size-small);\n}\n\n.m-medium {\n  margin: var(--size-medium);\n}\n\n.m-large {\n  margin: var(--size-large);\n}\n\n.m-xlarge {\n  margin: var(--size-xlarge);\n}\n\n.m-xxlarge {\n  margin: var(--size-xxlarge);\n}\n\n.m-huge {\n  margin: var(--size-xxxlarge);\n}\n\n/* margin top */\n.mt-xxxsmall {\n  margin-top: var(--size-xxxsmall);\n}\n\n.mt-xxsmall {\n  margin-top: var(--size-xxsmall);\n}\n\n.mt-xsmall {\n  margin-top: var(--size-xsmall);\n}\n\n.mt-small {\n  margin-top: var(--size-small);\n}\n\n.mt-medium {\n  margin-top: var(--size-medium);\n}\n\n.mt-large {\n  margin-top: var(--size-large);\n}\n\n.mt-xlarge {\n  margin-top: var(--size-xlarge);\n}\n\n.mt-xxlarge {\n  margin-top: var(--size-xxlarge);\n}\n\n.mt-huge {\n  margin-top: var(--size-xxxlarge);\n}\n\n/* margin right */\n.mr-xxxsmall {\n  margin-right: var(--size-xxxsmall);\n}\n\n.mr-xxsmall {\n  margin-right: var(--size-xxsmall);\n}\n\n.mr-xsmall {\n  margin-right: var(--size-xsmall);\n}\n\n.mr-small {\n  margin-right: var(--size-small);\n}\n\n.mr-medium {\n  margin-right: var(--size-medium);\n}\n\n.mr-large {\n  margin-right: var(--size-large);\n}\n\n.mr-xlarge {\n  margin-right: var(--size-xlarge);\n}\n\n.mr-xxlarge {\n  margin-right: var(--size-xxlarge);\n}\n\n.mr-huge {\n  margin-right: var(--size-xxxlarge);\n}\n\n/* margin bottom */\n.mb-xxxsmall {\n  margin-bottom: var(--size-xxxsmall);\n}\n\n.mb-xxsmall {\n  margin-bottom: var(--size-xxsmall);\n}\n\n.mb-xsmall {\n  margin-bottom: var(--size-xsmall);\n}\n\n.mb-small {\n  margin-bottom: var(--size-small);\n}\n\n.mb-medium {\n  margin-bottom: var(--size-medium);\n}\n\n.mb-large {\n  margin-bottom: var(--size-large);\n}\n\n.mb-xlarge {\n  margin-bottom: var(--size-xlarge);\n}\n\n.mb-xxlarge {\n  margin-bottom: var(--size-xxlarge);\n}\n\n.mb-huge {\n  margin-bottom: var(--size-xxxlarge);\n}\n\n/* margin left */\n.ml-xxxsmall {\n  margin-left: var(--size-xxxsmall);\n}\n\n.ml-xxsmall {\n  margin-left: var(--size-xxsmall);\n}\n\n.ml-xsmall {\n  margin-left: var(--size-xsmall);\n}\n\n.ml-small {\n  margin-left: var(--size-small);\n}\n\n.ml-medium {\n  margin-left: var(--size-medium);\n}\n\n.ml-large {\n  margin-left: var(--size-large);\n}\n\n.ml-xlarge {\n  margin-left: var(--size-xlarge);\n}\n\n.ml-xxlarge {\n  margin-left: var(--size-xxlarge);\n}\n\n.ml-huge {\n  margin-left: var(--size-xxxlarge);\n}\n\n/* layout utilities */\n.hidden {\n  display: none;\n}\n\n.inline {\n  display: inline;\n}\n\n.block {\n  display: block;\n}\n\n.inline-block {\n  display: inline-block;\n}\n\n.flex {\n  display: flex;\n}\n\n.inline-flex {\n  display: inline-flex;\n}\n\n.column {\n  flex-direction: column;\n}\n\n.column-reverse {\n  flex-direction: column-reverse;\n}\n\n.row {\n  flex-direction: row;\n}\n\n.row-reverse {\n  flex-direction: row-reverse;\n}\n\n.flex-wrap {\n  flex-wrap: wrap;\n}\n\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse;\n}\n\n.flex-no-wrap {\n  flex-wrap: nowrap;\n}\n\n.flex-shrink {\n  flex-shrink: 1;\n}\n\n.flex-no-shrink {\n  flex-shrink: 0;\n}\n\n.flex-grow {\n  flex-grow: 1;\n}\n\n.flex-no-grow {\n  flex-grow: 0;\n}\n\n.justify-content-start {\n  justify-content: flex-start;\n}\n\n.justify-content-end {\n  justify-content: flex-end;\n}\n\n.justify-content-center {\n  justify-content: center;\n}\n\n.justify-content-between {\n  justify-content: space-between;\n}\n\n.justify-content-around {\n  justify-content: space-around;\n}\n\n.align-items-start {\n  align-items: flex-start;\n}\n\n.align-items-end {\n  align-items: flex-end;\n}\n\n.align-items-center {\n  align-items: center;\n}\n\n.align-items-stretch {\n  align-items: stretch;\n}\n\n.align-content-start {\n  align-content: flex-start;\n}\n\n.align-content-end {\n  align-content: flex-end;\n}\n\n.align-content-center {\n  align-content: center;\n}\n\n.align-content-stretch {\n  align-content: stretch;\n}\n\n.align-self-start {\n  align-self: flex-start;\n}\n\n.align-self-end {\n  align-items: flex-end;\n}\n\n.align-self-center {\n  align-self: center;\n}\n\n.align-self-stretch {\n  align-self: stretch;\n}\n\n.button {\n  display: flex;\n  align-items: center;\n  border-radius: var(--border-radius-large);\n  color: var(--white);\n  flex-shrink: 0;\n  font-family: var(--font-stack);\n  font-size: var(--font-size-xsmall);\n  font-weight: var(--font-weight-medium);\n  letter-spacing: var(--font-letter-spacing-neg-small);\n  line-height: var(--font-line-height);\n  height: var(--size-medium);\n  padding: 0 var(--size-xsmall) 0 var(--size-xsmall);\n  text-decoration: none;\n  outline: none;\n  border: 2px solid transparent;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.button--primary {\n  background-color: var(--blue);\n}\n\n.button--primary:enabled:active, .button--primary:enabled:focus {\n  border: 2px solid var(--black3);\n}\n\n.button--primary:disabled {\n  background-color: var(--black3);\n}\n\n.button--primary-destructive {\n  background-color: var(--red);\n}\n\n.button--primary-destructive:enabled:active, .button--primary-destructive:enabled:focus {\n  border: 2px solid var(--black3);\n}\n\n.button--primary-destructive:disabled {\n  opacity: 0.3;\n}\n\n.button--secondary, .button--secondary-destructive {\n  background-color: var(--white);\n  border: 1px solid var(--black8);\n  color: var(--black8);\n  padding: 0 calc(var(--size-xsmall) + 1px) 0 calc(var(--size-xsmall) + 1px);\n  letter-spacing: var(--font-letter-spacing-pos-small);\n}\n\n.button--secondary:enabled:active, .button--secondary-destructive:enabled:active, .button--secondary:enabled:focus, .button--secondary-destructive:enabled:focus {\n  border: 2px solid var(--blue);\n  padding: 0 var(--size-xsmall) 0 var(--size-xsmall);\n}\n\n.button--secondary:disabled, .button--secondary-destructive:disabled {\n  border: 1px solid var(--black3);\n  color: var(--black3);\n}\n\n.button--secondary-destructive {\n  border-color: var(--red);\n  color: var(--red);\n}\n\n.button--secondary-destructive:disabled {\n  background-color: var(--white);\n}\n\n.button--secondary-destructive:enabled:active, .button--secondary-destructive:enabled:focus {\n  border: 2px solid var(--red);\n  padding: 0 var(--size-xsmall) 0 var(--size-xsmall);\n}\n\n.button--secondary-destructive:disabled {\n  border: 1px solid var(--red);\n  background-color: var(--white);\n  color: var(--red);\n  opacity: 0.4;\n}\n\n.button--tertiary, .button--tertiary-destructive {\n  border: 1px solid transparent;\n  color: var(--blue);\n  padding: 0;\n  font-weight: var(--font-weight-normal);\n  letter-spacing: var(--font-letter-spacing-pos-small);\n  cursor: pointer;\n}\n\n.button--tertiary:enabled:focus, .button--tertiary-destructive:enabled:focus {\n  text-decoration: underline;\n}\n\n.button--tertiary:disabled, .button--tertiary-destructive:disabled {\n  cursor: default;\n  color: var(--black3);\n}\n\n.button--tertiary-destructive {\n  color: var(--red);\n}\n\n.button--tertiary-destructive:enabled:focus {\n  text-decoration: underline;\n}\n\n.button--tertiary-destructive:disabled {\n  opacity: 0.4;\n}\n\n.checkbox {\n  align-items: center;\n  cursor: default;\n  display: flex;\n  height: var(--size-medium);\n  position: relative;\n  /* unchecked */\n  /*\n\t&__box:focus + &__label:before {\n\t\tborder: 1px solid var(--white);\n\t    box-shadow: 0 0 0 2px var(--blue);\n\t}*/\n  /* checked */\n  /*\n\t&__box:checked:focus + &__label:before {\n\t\tborder: 1px solid var(--white);\n\t    box-shadow: 0 0 0 2px var(--blue);\n\t}*/\n}\n\n.checkbox__box {\n  opacity: 0;\n  width: 10px;\n  height: 10px;\n  margin: 0;\n  padding: 0;\n}\n\n.checkbox__label {\n  align-items: center;\n  color: var(--black8);\n  display: flex;\n  font-family: var(--font-stack);\n  font-size: var(--font-size-xsmall);\n  font-weight: var(--font-weight-normal);\n  line-height: var(--font-line-height);\n  letter-spacing: var(--font-letter-spacing-pos-xsmall);\n  margin-left: -16px;\n  padding: 0 var(--size-xsmall) 0 var(--size-small);\n  height: 100%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.checkbox__label:before {\n  border: 1px solid var(--black8);\n  border-radius: var(--border-radius-small);\n  content: '';\n  display: block;\n  width: 10px;\n  height: 10px;\n  margin: -1px 10px 0 -8px;\n  box-shadow: none;\n}\n\n.checkbox__box:disabled + .checkbox__label {\n  color: var(--black);\n  opacity: 0.3;\n}\n\n.checkbox__box:checked + .checkbox__label:before {\n  background-color: var(--blue);\n  background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%227%22%20viewBox%3D%220%200%208%207%22%20width%3D%228%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m1.17647%201.88236%201.88235%201.88236%203.76471-3.76472%201.17647%201.17648-4.94118%204.9412-3.05882-3.05884z%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E\");\n  background-repeat: no-repeat;\n  background-position: 1px 2px;\n  border: 1px solid var(--blue);\n}\n\n.checkbox__box:checked:disabled + .checkbox__label:before {\n  border: 1px solid transparent;\n  background-color: var(--black8);\n}\n\n.disclosure {\n  position: relative;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.disclosure__item {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  border-bottom: 1px solid var(--silver);\n}\n\n.disclosure__item:last-child {\n  border-bottom: 1px solid transparent;\n}\n\n.disclosure__label {\n  display: flex;\n  align-items: center;\n  height: var(--size-medium);\n  font-size: var(--font-size-xsmall);\n  font-weight: var(--font-weight-normal);\n  letter-spacing: var(--font-letter-spacing-pos-xsmall);\n  line-height: var(--line-height);\n  color: var(--black8);\n  padding: 0 8px 0 24px;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.disclosure__label:before {\n  content: '';\n  position: absolute;\n  top: 8px;\n  left: 4px;\n  display: block;\n  width: 16px;\n  height: 16px;\n  opacity: 0.3;\n  background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20width%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m11%208-4-3v6z%22%20fill%3D%22%23000%22%2F%3E%3C%2Fsvg%3E\");\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n.disclosure__label:hover:before {\n  opacity: 0.8;\n}\n\n.disclosure__content {\n  font-size: var(--font-size-xsmall);\n  font-weight: var(--font-weight-normal);\n  letter-spacing: var(--font-letter-spacing-pos-xsmall);\n  line-height: var(--line-height);\n  color: var(--black8);\n  padding: var(--size-xxsmall) var(--size-xxsmall) var(--size-xxsmall) var(--size-small);\n  display: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n}\n\n.disclosure--section {\n  font-weight: var(--font-weight-bold);\n}\n\n.disclosure--expanded .disclosure__content {\n  display: block;\n  border-bottom: 1px solid transparent;\n}\n\n.disclosure--expanded .disclosure__label:before {\n  opacity: 0.8;\n  background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20width%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m9%2010%203-4h-6z%22%20fill%3D%22%23000%22%2F%3E%3C%2Fsvg%3E\");\n}\n\n.icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: default;\n  width: var(--size-medium);\n  height: var(--size-medium);\n  font-family: var(--font-stack);\n  font-size: var(--font-size-xsmall);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-position: -2px -1px;\n}\n\n.icon--spin {\n  -webkit-animation: rotating 1.0s linear infinite;\n          animation: rotating 1.0s linear infinite;\n}\n\n@-webkit-keyframes rotating {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rotating {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.icon--blue {\n  -webkit-filter: invert(54%) sepia(16%) saturate(7499%) hue-rotate(179deg) brightness(98%) contrast(101%);\n          filter: invert(54%) sepia(16%) saturate(7499%) hue-rotate(179deg) brightness(98%) contrast(101%);\n}\n\n.icon--purple {\n  -webkit-filter: invert(40%) sepia(59%) saturate(4001%) hue-rotate(232deg) brightness(103%) contrast(102%);\n          filter: invert(40%) sepia(59%) saturate(4001%) hue-rotate(232deg) brightness(103%) contrast(102%);\n}\n\n.icon--purple4 {\n  -webkit-filter: invert(72%) sepia(40%) saturate(660%) hue-rotate(202deg) brightness(103%) contrast(103%);\n          filter: invert(72%) sepia(40%) saturate(660%) hue-rotate(202deg) brightness(103%) contrast(103%);\n}\n\n.icon--hot-pink {\n  -webkit-filter: invert(18%) sepia(90%) saturate(3347%) hue-rotate(293deg) brightness(116%) contrast(132%);\n          filter: invert(18%) sepia(90%) saturate(3347%) hue-rotate(293deg) brightness(116%) contrast(132%);\n}\n\n.icon--green {\n  -webkit-filter: invert(66%) sepia(39%) saturate(5382%) hue-rotate(114deg) brightness(102%) contrast(79%);\n          filter: invert(66%) sepia(39%) saturate(5382%) hue-rotate(114deg) brightness(102%) contrast(79%);\n}\n\n.icon--red {\n  -webkit-filter: invert(43%) sepia(56%) saturate(5632%) hue-rotate(349deg) brightness(97%) contrast(95%);\n          filter: invert(43%) sepia(56%) saturate(5632%) hue-rotate(349deg) brightness(97%) contrast(95%);\n}\n\n.icon--yellow {\n  -webkit-filter: invert(78%) sepia(86%) saturate(1608%) hue-rotate(1deg) brightness(107%) contrast(104%);\n          filter: invert(78%) sepia(86%) saturate(1608%) hue-rotate(1deg) brightness(107%) contrast(104%);\n}\n\n.icon--black {\n  -webkit-filter: invert(0%) sepia(0%) saturate(7500%) hue-rotate(117deg) brightness(109%) contrast(105%);\n          filter: invert(0%) sepia(0%) saturate(7500%) hue-rotate(117deg) brightness(109%) contrast(105%);\n}\n\n.icon--black8 {\n  -webkit-filter: invert(0%) sepia(56%) saturate(25%) hue-rotate(137deg) brightness(105%) contrast(60%);\n          filter: invert(0%) sepia(56%) saturate(25%) hue-rotate(137deg) brightness(105%) contrast(60%);\n}\n\n.icon--black3 {\n  -webkit-filter: invert(100%) sepia(0%) saturate(698%) hue-rotate(219deg) brightness(66%) contrast(127%);\n          filter: invert(100%) sepia(0%) saturate(698%) hue-rotate(219deg) brightness(66%) contrast(127%);\n}\n\n.icon--white {\n  -webkit-filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(269deg) brightness(103%) contrast(104%);\n          filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(269deg) brightness(103%) contrast(104%);\n}\n\n.icon--white8 {\n  -webkit-filter: invert(99%) sepia(2%) saturate(5%) hue-rotate(55deg) brightness(104%) contrast(98%);\n          filter: invert(99%) sepia(2%) saturate(5%) hue-rotate(55deg) brightness(104%) contrast(98%);\n}\n\n.icon--white4 {\n  -webkit-filter: invert(99%) sepia(2%) saturate(897%) hue-rotate(245deg) brightness(117%) contrast(93%);\n          filter: invert(99%) sepia(2%) saturate(897%) hue-rotate(245deg) brightness(117%) contrast(93%);\n}\n\n.icon--adjust {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-rule='evenodd' fill='%23000' fill-rule='evenodd'%3E%3Cpath d='M12 16.05V9h1v7.05a2.5 2.5 0 010 4.9V23h-1v-2.05a2.5 2.5 0 010-4.9zm2 2.45a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM19 23h1v-7.05a2.5 2.5 0 000-4.9V9h-1v2.05a2.5 2.5 0 000 4.9zm2-9.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--alert {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath clip-rule='evenodd' d='M21.25 17.393a1.75 1.75 0 001.75 1.75V20H9v-.857a1.75 1.75 0 001.75-1.75V14c0-3.314 2.35-6 5.25-6s5.25 2.686 5.25 6zm-1-3.393v3.393c0 .6.192 1.155.518 1.607h-9.536a2.738 2.738 0 00.518-1.607V14c0-2.891 2.024-5 4.25-5s4.25 2.109 4.25 5z' fill-rule='evenodd'/%3E%3Cpath d='M16 23a2 2 0 01-2-2h-1a3 3 0 106 0h-1a2 2 0 01-2 2z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--angle {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M12 12v8h8v-1h-3a4 4 0 00-4-4v-3zm1 4v3h3a3 3 0 00-3-3z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--arrow-left-right {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 16.5l1.647 1.646-.707.708L10.293 16l2.854-2.854.707.708-1.647 1.646h7.586l-1.646-1.646.707-.708L21.707 16l-2.853 2.854-.707-.708 1.646-1.646z' fill='%23000'/%3E%3C/svg%3E\");\n}\n\n.icon--up-down {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 10.292l2.854 2.854-.707.707-1.646-1.646v7.585l1.646-1.646.707.707-2.853 2.854-2.854-2.854.707-.707 1.647 1.646v-7.585l-1.647 1.646-.707-.707z' fill='%23000'/%3E%3C/svg%3E\");\n}\n\n.icon--auto-layout-horizontal {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M10 10h5v12h-5zm1 1h3v10h-3zm6-1h5v12h-5zm1 1h3v10h-3z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--auto-layout-vertical {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M10 10h12v5H10zm1 1h10v3H11zm-1 6h12v5H10zm1 1h10v3H11z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--back {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M13.707 16l4.646-4.646-.707-.707L12.293 16l5.353 5.354.707-.707z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--blend-empty {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M16.695 11.72l-.693-.718L16 11l-.001.002-.694.718C13.102 14.012 12 15.294 12 16.852a4.199 4.199 0 001.172 2.936 3.906 3.906 0 005.656 0A4.199 4.199 0 0020 16.852c0-1.558-1.102-2.84-3.305-5.132zm-.695.72c-.977 1.017-1.693 1.79-2.195 2.471-.6.814-.805 1.38-.805 1.94v.003a3.2 3.2 0 00.89 2.239 2.906 2.906 0 004.22 0 3.2 3.2 0 00.89-2.239v-.002c0-.56-.205-1.127-.805-1.94-.502-.681-1.219-1.455-2.195-2.472z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--blend {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M16.002 11.002l.693.718C18.898 14.012 20 15.294 20 16.852a4.199 4.199 0 01-1.172 2.936 3.906 3.906 0 01-5.656 0A4.199 4.199 0 0112 16.852c0-1.558 1.102-2.84 3.305-5.132l.694-.719zm-2.197 3.91c.502-.681 1.219-1.455 2.195-2.472.976 1.017 1.693 1.79 2.195 2.471.6.814.805 1.38.805 1.94v.003c0 .049 0 .098-.003.146h-5.994a3.37 3.37 0 01-.003-.146v-.002c0-.56.205-1.127.805-1.94z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--break {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' opacity='.9'%3E%3Cpath d='M13 9v3h1V9zM22.103 9.896a2.975 2.975 0 00-4.207 0l-2.75 2.75.707.707 2.75-2.75a1.975 1.975 0 012.793 2.793l-2.75 2.75.707.707 2.75-2.75a2.975 2.975 0 000-4.207zM9.896 22.104a2.975 2.975 0 010-4.208l2.75-2.75.707.707-2.75 2.75a1.975 1.975 0 002.793 2.793l2.75-2.75.707.707-2.75 2.75a2.975 2.975 0 01-4.207 0zM23 19h-3v-1h3zM19 20v3h-1v-3zM12 13H9v1h3z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--caret-down {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 18l3-4h-6z' fill='%23000'/%3E%3C/svg%3E\");\n}\n\n.icon--caret-left {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13 16l4-3v6z' fill='%23000'/%3E%3C/svg%3E\");\n}\n\n.icon--caret-right {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 16l-4-3v6z' fill='%23000'/%3E%3C/svg%3E\");\n}\n\n.icon--caret-up {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 14l3 4h-6z' fill='%23000'/%3E%3C/svg%3E\");\n}\n\n.icon--check {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M21.207 13.707L15 19.914l-3.707-3.707 1.414-1.414L15 17.086l4.793-4.793z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--close {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 15.293l4.646-4.646.708.707L16.707 16l4.647 4.647-.707.707L16 16.707l-4.646 4.647-.707-.707L15.293 16l-4.646-4.646.707-.707z' fill='%23000'/%3E%3C/svg%3E\");\n}\n\n.icon--component {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M12.063 10.938L16 14.874l3.938-3.938L16 7zm6.46 0L16 13.46l-2.523-2.524L16 8.415zm-6.46 10.124L16 25l3.938-3.938L16 17.125zm6.46 0L16 23.587l-2.523-2.523L16 18.538zM7 16l3.937-3.938L14.875 16l-3.938 3.938zm3.937 2.523L13.461 16l-2.524-2.523L8.415 16zM17.125 16l3.938 3.938L25 16l-3.938-3.938zm6.46 0l-2.523 2.523L18.54 16l2.523-2.523z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--corner-radius {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M21 13h-4a4 4 0 00-4 4v4h-1v-4a5 5 0 015-5h4z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--corners {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M11 11h3v1h-2v2h-1zm7 0h3v3h-1v-2h-2zm-6 9v-2h-1v3h3v-1zm9-2v3h-3v-1h2v-2z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--distribute-horizontal-spacing {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='M11 22.5v-13h-1v13zM22 9.5v13h-1v-13zM17 12.5v7h-2v-7z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--distribute-vertical-spacing {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='M9.5 10h13v1h-13zM12.5 15h7v2h-7zM22.5 21h-13v1h13z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--draft {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M10 8.5h7.707L22 12.793V23.5H10zm1 1v13h10v-9h-4v-4zm7 .707l2.293 2.293H18z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--effects {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='M16.5 8.5h-1v3h1zM11.05 10.343l-.707.707 2.121 2.122.708-.708zM21.657 11.05l-.707-.707-2.121 2.121.707.708zM8.5 15.5v1h3v-1zM20.5 15.5v1h3v-1zM13.172 19.535l-.708-.707-2.12 2.122.706.707zM19.535 18.828l-.707.707 2.122 2.122.707-.707zM16.5 20.5h-1v3h1z'/%3E%3Cpath clip-rule='evenodd' d='M18.498 15.998a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm-1 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--ellipses {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M11.5 16a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm4.5 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--eyedropper {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22.447 9.6c-.8-.8-2-.8-2.8 0l-2.8 2.8-.8-.7c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l.7.7-5.8 5.8c-.4.4-1 1.9 0 2.9s2.5.4 2.9 0l5.8-5.8.7.7c.4.4 1 .4 1.4 0s.4-1 0-1.4l-.7-.7 2.8-2.8c.8-.9.8-2.1 0-2.9zm-10.9 11.9h-1v-1l5.8-5.8 1 1c-.1 0-5.8 5.8-5.8 5.8z' fill='%23000'/%3E%3C/svg%3E\");\n}\n\n.icon--forward {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M17.94 16l-4.647-4.646.707-.707L19.354 16 14 21.354l-.707-.707z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--frame {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M11 24v-3H8v-1h3v-8H8v-1h3V8h1v3h8V8h1v3h3v1h-3v8h3v1h-3v3h-1v-3h-8v3zm9-4v-8h-8v8z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--group {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='M17.4 9h-2.8v1h2.8zM20.9 22H22v-1.1h1V23h-2.1zM10 14.6v2.8H9v-2.8zM22 11.1V10h-1.1V9H23v2.1zM22 14.6v2.8h1v-2.8zM10 11.1V10h1.1V9H9v2.1zM9 20.9h1V22h1.1v1H9zM17.4 22h-2.8v1h2.8z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--hidden {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M21.509 15.801A8.033 8.033 0 0022.928 14h-1.184A6.992 6.992 0 0116 17a6.992 6.992 0 01-5.745-3H9.07a8.033 8.033 0 001.421 1.801l-1.595 1.595.708.707 1.657-1.657c.71.523 1.511.932 2.374 1.199l-.617 2.221.964.268.626-2.255a8.051 8.051 0 002.784 0l.626 2.255.964-.268-.617-2.221a7.971 7.971 0 002.374-1.2l1.658 1.658.707-.707z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--horizontal-padding {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='M9 9v14h1V9zm13 0v14h1V9z'/%3E%3Cpath clip-rule='evenodd' d='M13 19v-6h6v6zm-1-7h8v8h-8z' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--hyperlink {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.824 14.492l-1.657 1.657.828.829 1.658-1.657a3.517 3.517 0 00-4.973-4.973l-1.657 1.658.829.828 1.657-1.657a2.345 2.345 0 013.315 3.315zm-4.974 4.972l.829.829-1.658 1.657a3.516 3.516 0 11-4.972-4.972l1.659-1.658.828.829-1.656 1.657a2.343 2.343 0 103.315 3.315l1.657-1.657zm2.072-6.216l-4.972 4.973.828.829 4.973-4.973z' fill='%23000'/%3E%3C/svg%3E\");\n}\n\n.icon--image {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M22 10H10v7.793l3.083-3.083 7.29 7.29H22zM10 22v-2.793l3.083-3.083L18.96 22zm0-13a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V10a1 1 0 00-1-1zm9.667 4.667a1.333 1.333 0 11-2.667 0 1.333 1.333 0 012.667 0zm1 0a2.333 2.333 0 11-4.667 0 2.333 2.333 0 014.667 0z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--instance {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M16 7l9 9-9 9-9-9zm-7.586 9L16 23.586 23.586 16 16 8.414z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--key {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M15.14 20.14a3.014 3.014 0 00.331-3.868l2.047-2.047 1.767 1.767a.5.5 0 10.707-.707l-1.767-1.767 1.293-1.293 1.784 1.784a.5.5 0 10.707-.707l-1.784-1.784.762-.761a.5.5 0 00-.707-.708l-5.513 5.513a3.014 3.014 0 10.373 4.578zm-.712-.712a2.006 2.006 0 10-2.837-2.837 2.006 2.006 0 002.837 2.837z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--layout-align-bottom {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M14.5 10v10h-2V10zm8 12v1h-13v-1zm-3-2v-6h-2v6z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--align-horizontal-centers {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.5 9.5h-1v3h-5v2h5v3h-3v2h3v3h1v-3h3v-2h-3v-3h5v-2h-5z' fill='%23000'/%3E%3C/svg%3E\");\n}\n\n.icon--align-left {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='M10 22.5H9v-13h1zM22 14.5H12v-2h10zM12 19.5h6v-2h-6z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--align-right {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='M22 22.5h1v-13h-1zM10 14.5h10v-2H10zM20 19.5h-6v-2h6z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--align-top {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='M14.5 22V12h-2v10zM22.5 10V9h-13v1zM19.5 12v6h-2v-6z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--align-vertical-centers {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.5 15.5v-5h2v5h3v-3h2v3h3v1h-3v3h-2v-3h-3v5h-2v-5h-3v-1z' fill='%23000'/%3E%3C/svg%3E\");\n}\n\n.icon--layout-grid-columns {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='M9 9h3v14H9zM14.5 9h3v14h-3zM20 9h3v14h-3z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--layout-grid-rows {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='M9 9h14v3H9zM9 14.5h14v3H9zM9 20h14v3H9z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--layout-grid-uniform {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='M9 9h3v3H9zM20 9h3v3h-3zM14.5 9h3v3h-3zM9 14.5h3v3H9zM20 14.5h3v3h-3zM14.5 14.5h3v3h-3zM9 20h3v3H9zM20 20h3v3h-3zM14.5 20h3v3h-3z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--library {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M15.373 22h1.258c.28-.32.616-.597.995-.819 1.478-.862 4.005-.909 5.386.109H24.5v-9.2s-.797-2.25-4.42-2.25c-1.875 0-2.902.602-3.456 1.184a2.568 2.568 0 00-.6.976h-.048a2.569 2.569 0 00-.6-.976c-.554-.582-1.581-1.184-3.456-1.184-3.623 0-4.42 2.25-4.42 2.25v9.19h1.488c1.382-1.019 3.91-.97 5.388-.105.38.223.717.503.997.825zm1.127-9.711v8.457c.195-.157.403-.3.622-.428.927-.541 2.115-.796 3.241-.787 1.006.008 2.081.227 2.952.759h.185v-7.973a2.414 2.414 0 00-.505-.595c-.46-.397-1.33-.882-2.915-.882-1.586 0-2.34.483-2.695.835a1.749 1.749 0 00-.353.49 1.076 1.076 0 00-.052.131l-.005.017.001-.006.002-.008v-.005l.001-.002v-.002l-.005-.001zm-1 0h-.474l-.006.001v.002l.001.002.001.005.002.008.001.006-.005-.017a1.076 1.076 0 00-.053-.131 1.749 1.749 0 00-.353-.49c-.354-.351-1.108-.835-2.694-.835-1.585 0-2.455.485-2.916.882a2.411 2.411 0 00-.504.595v7.963h.185c.872-.532 1.948-.752 2.954-.759 1.128-.008 2.316.249 3.243.792.217.127.424.27.618.426z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--link-broken {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='M18 14v-2a2 2 0 10-4 0v2h-1v-2a3 3 0 116 0v2zM19 18h-1v2a2 2 0 11-4 0v-2h-1v2a3 3 0 106 0z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--link-connected {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='M16 10a2 2 0 012 2v2h1v-2a3 3 0 10-6 0v2h1v-2a2 2 0 012-2zM18 18h1v2a3 3 0 11-6 0v-2h1v2a2 2 0 104 0z'/%3E%3Cpath d='M15.5 13v6h1v-6z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--list-detailed {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='M12 10h-2v1h2zM12 20h-2v1h2zM10 15h2v1h-2zM22 10h-8v1h8zM14 20h8v1h-8zM22 15h-8v1h8z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--list-tile {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M14 11h-3v3h3zm-4-1v5h5v-5zm11 1h-3v3h3zm-4-1v5h5v-5zm-3 8h-3v3h3zm-4-1v5h5v-5zm11 1h-3v3h3zm-4-1v5h5v-5z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--list {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='.8'%3E%3Cpath d='M23 10H9v1h14zM9 15.5h14v1H9zM9 21h14v1H9z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--lock-off {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18 15h.5a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-6a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5H17v-2.5a2.5 2.5 0 015 0V14h-1v-1.5a1.5 1.5 0 00-3 0z' fill='%23000'/%3E%3C/svg%3E\");\n}\n\n.icon--lock-on {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M13.5 15v-1.5a2.5 2.5 0 015 0V15h.5a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-6a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5zm4-1.5V15h-3v-1.5a1.5 1.5 0 013 0z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--minus {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.5 16.5h-11v-1h11z' fill='%23000'/%3E%3C/svg%3E\");\n}\n\n.icon--play {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M13 10.098L22.443 16 13 21.902zm1 1.804v8.196L20.557 16z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--plus {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.5 15.5v-5h1v5h5v1h-5v5h-1v-5h-5v-1z' fill='%23000'/%3E%3C/svg%3E\");\n}\n\n.icon--random {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath clip-rule='evenodd' d='M15.118 11a2.5 2.5 0 00-1.335.386L11.228 13H18.5v1h-8.497a.512.512 0 00-.003.051V20.5c0 .278.223.5.497.5h7.628a.498.498 0 00.328-.123l3.206-2.805a1 1 0 00.341-.753V11.5a.5.5 0 00-.5-.5zm-1.869-.46a3.5 3.5 0 011.87-.54H21.5a1.5 1.5 0 011.5 1.5v5.82a2 2 0 01-.683 1.504l-3.205 2.805c-.274.24-.624.371-.987.371h-7.627C9.668 22 9 21.327 9 20.5v-6.449a1.5 1.5 0 01.699-1.268z' fill-rule='evenodd'/%3E%3Cpath d='M13 16a1 1 0 11-2 0 1 1 0 012 0zM17 16a1 1 0 11-2 0 1 1 0 012 0zM17 19a1 1 0 11-2 0 1 1 0 012 0zM13 19a1 1 0 11-2 0 1 1 0 012 0z'/%3E%3Cg clip-rule='evenodd' fill-rule='evenodd'%3E%3Cpath d='M22.407 10.71a.5.5 0 01-.116.697l-3.5 2.5a.5.5 0 01-.582-.814l3.5-2.5a.5.5 0 01.698.116z'/%3E%3Cpath d='M18 21v-8h1v8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--recent {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='M15 12v5h5v-1h-4v-4z'/%3E%3Cpath clip-rule='evenodd' d='M24 16a8 8 0 11-16 0 8 8 0 0116 0zm-1 0a7 7 0 11-14 0 7 7 0 0114 0z' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--resize-to-fit {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='M8.646 9.354L12.293 13H10v1h4v-4h-1v2.293L9.354 8.646zM19.707 13l3.647-3.646-.707-.708L19 12.293V10h-1v4h4v-1zM19.707 19l3.647 3.646-.707.708L19 19.707V22h-1v-4h4v1zM12.293 19l-3.647 3.646.708.708L13 19.707V22h1v-4h-4v1z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--resolve-filled {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M16 24a8 8 0 100-16 8 8 0 000 16zm3.911-9.635l-.822-.73-3.613 4.064-2.587-2.588-.778.778 3.413 3.412z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--resolve {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='M19.911 14.365l-.822-.73-3.613 4.063-2.587-2.587-.778.778 3.413 3.412z'/%3E%3Cpath clip-rule='evenodd' d='M24 16a8 8 0 11-16 0 8 8 0 0116 0zm-1 0a7 7 0 11-14 0 7 7 0 0114 0z' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--reverse {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M15.854 8.646L18.207 11l-2.353 2.354-.708-.708 1.147-1.146H14c-.503 0-1.27.155-1.895.606-.6.432-1.105 1.157-1.105 2.394v7.25h-1V14.5c0-1.563.662-2.588 1.52-3.206.833-.6 1.817-.794 2.48-.794h2.293l-1.147-1.146zM22 10v7.25c0 1.563-.662 2.588-1.52 3.206-.833.6-1.817.794-2.48.794h-2.293l1.147 1.146-.708.708-2.353-2.354 2.353-2.354.708.708-1.147 1.146H18c.503 0 1.27-.155 1.895-.606.6-.432 1.105-1.157 1.105-2.394V10z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--search-large {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M18.874 19.581a6 6 0 11.707-.707l4.273 4.272-.708.708zM20 15a5 5 0 11-10 0 5 5 0 0110 0z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--search {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M18.397 18.605a4.552 4.552 0 11.707-.707l3.25 3.249-.708.707zm.706-3.553a3.552 3.552 0 11-7.103 0 3.552 3.552 0 017.103 0z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--settings {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-rule='evenodd' fill='%23000' fill-rule='evenodd'%3E%3Cpath d='M16.954 9.928l-.139-.331C16.635 9.165 16.301 9 16 9s-.635.165-.815.597l-.139.331c-.56 1.343-1.992 2.13-3.425 1.72l-.5-.144c-.309-.088-.606.025-.815.327a1.05 1.05 0 00-.049 1.123c.743 1.323.402 3.068-.86 3.95-.318.222-.456.614-.375 1.024.081.409.342.668.673.723l.195.033c1.525.253 2.51 1.687 2.423 3.18-.03.503.22.861.52 1.028.288.161.623.155.921-.108l.373-.33a2.8 2.8 0 013.746 0l.373.33c.298.264.633.27.922.108.3-.167.549-.525.52-1.028-.088-1.493.897-2.927 2.423-3.18l.194-.033c.33-.055.592-.314.673-.723.081-.41-.057-.802-.375-1.024-1.262-.882-1.603-2.627-.86-3.95a1.05 1.05 0 00-.05-1.123c-.208-.302-.505-.415-.815-.327l-.499.143c-1.433.41-2.865-.376-3.425-1.719zm.784-.717c-.674-1.615-2.802-1.615-3.476 0l-.138.332c-.383.917-1.326 1.401-2.228 1.143l-.499-.143c-1.575-.45-2.855 1.398-2.012 2.9.505.9.257 2.07-.56 2.64-1.392.973-.933 3.282.706 3.555l.195.032c.96.16 1.65 1.09 1.588 2.135-.104 1.788 1.82 2.864 3.103 1.727l.373-.33a1.8 1.8 0 012.42 0l.373.33c1.284 1.137 3.207.061 3.103-1.727-.061-1.046.628-1.975 1.589-2.135l.194-.032c1.639-.273 2.098-2.582.707-3.554-.818-.572-1.066-1.742-.561-2.64.843-1.503-.437-3.352-2.012-2.901l-.5.143c-.9.258-1.844-.226-2.226-1.143z'/%3E%3Cpath d='M16 18.5a2 2 0 100-4 2 2 0 000 4zm0 1a3 3 0 100-6 3 3 0 000 6z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--share {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M20 9.5a3.5 3.5 0 00-1.383 6.716A4.513 4.513 0 0016 18.436a4.513 4.513 0 00-2.618-2.22 3.501 3.501 0 10-2.764 0A4.502 4.502 0 007.5 20.5V22h17v-1.5c0-2.003-1.309-3.7-3.118-4.284A3.501 3.501 0 0020 9.5zM17.5 13a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm-1 8v-.5a3.5 3.5 0 117 0v.5zm-1-.5v.5h-7v-.5a3.5 3.5 0 117 0zm-6-7.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--smiley {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='M16 20a4.002 4.002 0 01-3.874-3h1.045a3.001 3.001 0 005.658 0h1.045A4.002 4.002 0 0116 20zM19.5 14.125a.875.875 0 11-1.75 0 .875.875 0 011.75 0zM13.125 15a.875.875 0 100-1.75.875.875 0 000 1.75z'/%3E%3Cpath clip-rule='evenodd' d='M24 16a8 8 0 11-16 0 8 8 0 0116 0zm-1 0a7 7 0 11-14 0 7 7 0 0114 0z' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--sort-alpha-asc {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-rule='evenodd' fill='%23000' fill-rule='evenodd'%3E%3Cpath d='M10.897 9L9 14h1.07l.379-1h2.133l.338 1h1.056l-1.69-5zm1.347 3l-.667-1.973L10.828 12zM12.553 19H9.5v-1H14v.979L10.932 22H14v1H9.5v-.993zM20.5 8.293l3.354 3.353-.708.708L21 10.207V23h-1V10.207l-2.146 2.147-.708-.708z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--sort-alpha-dsc {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-rule='evenodd' fill='%23000' fill-rule='evenodd'%3E%3Cpath d='M10.897 9L9 14h1.07l.379-1h2.133l.338 1h1.056l-1.69-5zm1.347 3l-.667-1.973L10.828 12zM12.553 19H9.5v-1H14v.979L10.932 22H14v1H9.5v-.993zM20 21.793V9h1v12.793l2.146-2.147.708.708-3.354 3.353-3.354-3.353.708-.708z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--sort-top-bottom {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M20.45 12H10v-1h10.45c.97 0 1.372 1.244.584 1.812L11.05 20h9.243l-1.647-1.646.708-.708 2.853 2.854-2.853 2.854-.708-.708L20.293 21H11.05c-.97 0-1.372-1.244-.584-1.812z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--spacing {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 11h-2v10h2v1h-3V10h3zm-10-1v12H9v-1h2V11H9v-1zm4 3h-1v6h1z' fill='%23000'/%3E%3C/svg%3E\");\n}\n\n.icon--spinner {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--star-off {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M18 14.004L16 8l-2 6.004H8L12.96 18l-1.904 6L16 20l4.944 4-1.904-6L24 14zm3.165.998l-3.886.002L16 11.164l-1.28 3.84h-3.885l3.285 2.646-1.103 3.477L16 18.714l2.983 2.413-1.103-3.476z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--star-on {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 8l2 6.004L24 14l-4.96 4 1.904 6L16 20l-4.944 4 1.904-6L8 14.004h6z' fill='%23000'/%3E%3C/svg%3E\");\n}\n\n.icon--stroke-weight {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M10 10h12v1H10zm0 4h12v2H10zm12 5H10v3h12z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--styles {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='M11.5 13a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM17.5 13a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM19 20.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM11.5 19a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--swap {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='M23 13.188l-1.175 1.468a5.5 5.5 0 00-10.003-2.219l.83.557a4.5 4.5 0 018.216 2.057l-2.2-1.467-.555.832 3.381 2.254 2.287-2.858zM9 17.188l.78.624 1.176-1.468.026.156a5.5 5.5 0 009.976 2.065v-.002l-.83-.557-.001.001a4.5 4.5 0 01-8.214-2.058l2.2 1.467.555-.832-3.382-2.254z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--theme {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath clip-rule='evenodd' d='M13 10h-3v12h3zm-3-1a1 1 0 00-1 1v12a1 1 0 001 1h3a1 1 0 001-1V10a1 1 0 00-1-1z' fill-rule='evenodd'/%3E%3Cpath d='M10.75 20.5a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM22 18a1 1 0 011 1v3a1 1 0 01-1 1h-7v-1h7v-3h-7v-1zM18.385 17l2.757-2.757a1 1 0 000-1.415l-2.121-2.12a1 1 0 00-1.414 0L15 13.313v1.414l3.314-3.314 2.121 2.122L16.971 17z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--tidy-up-grid {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='M10 10h2v2h-2zM20 10h2v2h-2zM12 15h-2v2h2zM20 15h2v2h-2zM12 20h-2v2h2zM20 20h2v2h-2zM17 10h-2v2h2zM15 15h2v2h-2zM17 20h-2v2h2z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--tidy-up-list-horizontal {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='M10 22.5v-13h2v13zM15 22.5v-13h2v13zM20 9.5v13h2v-13z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--tidy-up-list-vertical {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='M9.5 10h13v2h-13zM9.5 15h13v2h-13zM22.5 20h-13v2h13z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--timer {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='M19 8h-6V7h6zM16.5 17v-5h-1v5a.5.5 0 001 0z'/%3E%3Cpath clip-rule='evenodd' d='M22.715 12.65l1.527-1.529L22.122 9l-1.483 1.482a8 8 0 102.075 2.167zM23 17a7 7 0 11-2.384-5.263l.647.647A6.974 6.974 0 0123 17zm-1.008-5.3l.13.128.706-.707-.707-.707-.701.701c.2.185.391.38.572.585z' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--trash {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='M14 18.5v-4h1v4zM17 18.5v-4h1v4z'/%3E%3Cpath clip-rule='evenodd' d='M19 10.5a2 2 0 00-2-2h-2a2 2 0 00-2 2h-3v1h1v10a2 2 0 002 2h6a2 2 0 002-2v-10h1v-1zm-4-1a1 1 0 00-1 1h4a1 1 0 00-1-1zm5 2h-8v10a1 1 0 001 1h6a1 1 0 001-1z' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--vertical-padding {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='M9 9h14v1H9zm0 13h14v1H9z'/%3E%3Cpath clip-rule='evenodd' d='M19 13h-6v6h6zm-7-1v8h8v-8z' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--visible {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='M16 18a2 2 0 100-4 2 2 0 000 4z'/%3E%3Cpath clip-rule='evenodd' d='M16 12a7.499 7.499 0 016.635 4A7.499 7.499 0 0116 20a7.499 7.499 0 01-6.635-4A7.499 7.499 0 0116 12zm0 7a6.495 6.495 0 01-5.478-3A6.495 6.495 0 0116 13c2.3 0 4.322 1.194 5.478 3A6.495 6.495 0 0116 19z' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.icon--warning-large {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M16 6l10 18H6zm-1 11v-4h2v4zm0 2v2h2v-2z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon--warning {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg fill='none' height='32' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='M16 9l8 14H8zm-1 8.5V14h2v3.5zm0 1.5v2h2v-2z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E\");\n}\n\n.icon-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  width: var(--size-medium);\n  height: var(--size-medium);\n  border-radius: var(--border-radius-small);\n  border: 2px solid transparent;\n}\n\n.icon-button * {\n  -webkit-filter: invert(0%) sepia(0%) saturate(7500%) hue-rotate(117deg) brightness(109%) contrast(105%);\n          filter: invert(0%) sepia(0%) saturate(7500%) hue-rotate(117deg) brightness(109%) contrast(105%);\n}\n\n.icon-button:hover {\n  background: var(--hover-fill);\n}\n\n.icon-button:active, .icon-button:focus {\n  border: 2px solid var(--blue);\n  outline: none;\n}\n\n.icon-button--selected {\n  background-color: var(--blue);\n}\n\n.icon-button--selected:hover {\n  background-color: var(--blue);\n}\n\n.icon-button--selected:active, .icon-button--selected:focus {\n  border: 2px solid var(--black3);\n}\n\n.icon-button--selected * {\n  -webkit-filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(269deg) brightness(103%) contrast(104%);\n          filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(269deg) brightness(103%) contrast(104%);\n}\n\n.input {\n  position: relative;\n}\n\n.input__field {\n  font-size: var(--font-size-xsmall);\n  font-weight: var(--font-weight-normal);\n  letter-spacing: var(--font-letter-spacing-neg-xsmall);\n  line-height: var(--line-height);\n  position: relative;\n  display: flex;\n  overflow: visible;\n  align-items: center;\n  width: 100%;\n  height: 30px;\n  margin: 1px 0 1px 0;\n  padding: var(--size-xxsmall) var(--size-xxxsmall) var(--size-xxsmall) var(--size-xxsmall);\n  color: var(--black8);\n  border: 1px solid transparent;\n  border-radius: var(--border-radius-small);\n  outline: none;\n  background-color: var(--white);\n}\n\n.input__field:hover, .input__field:placeholder-shown:hover {\n  color: var(--black8);\n  border: 1px solid var(--black1);\n  background-image: none;\n}\n\n.input__field::-moz-selection {\n  color: var(--black);\n  background-color: var(--blue3);\n}\n\n.input__field::selection {\n  color: var(--black);\n  background-color: var(--blue3);\n}\n\n.input__field::-webkit-input-placeholder {\n  color: var(--black3);\n  border: 1px solid transparent;\n}\n\n.input__field::-moz-placeholder {\n  color: var(--black3);\n  border: 1px solid transparent;\n}\n\n.input__field:-ms-input-placeholder {\n  color: var(--black3);\n  border: 1px solid transparent;\n}\n\n.input__field::-ms-input-placeholder {\n  color: var(--black3);\n  border: 1px solid transparent;\n}\n\n.input__field::placeholder {\n  color: var(--black3);\n  border: 1px solid transparent;\n}\n\n.input__field:placeholder-shown {\n  border: 1px solid var(--black1);\n}\n\n.input__field:focus:placeholder-shown {\n  border: 1px solid var(--blue);\n  outline: 1px solid var(--blue);\n  outline-offset: -2px;\n}\n\n.input__field:disabled:hover {\n  border: 1px solid transparent;\n}\n\n.input__field:active, .input__field:focus {\n  color: var(--black);\n  border: 1px solid var(--blue);\n  outline: 1px solid var(--blue);\n  outline-offset: -2px;\n}\n\n.input__field:disabled {\n  position: relative;\n  color: var(--black3);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.input__field:disabled:active {\n  outline: none;\n}\n\n.input--with-icon .input__field {\n  padding-left: 32px;\n}\n\n.input .icon {\n  position: absolute;\n  top: 0px;\n  left: 0;\n  width: var(--size-medium);\n  height: var(--size-medium);\n  z-index: 1;\n  opacity: 0.3;\n}\n\n.label {\n  font-size: var(--font-size-xsmall);\n  font-weight: var(--font-weight-normal);\n  letter-spacing: var(--font-letter-spacing-pos-xsmall);\n  line-height: var(--line-height);\n  color: var(--black3);\n  height: var(--size-medium);\n  width: 100%;\n  display: flex;\n  align-items: center;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding: 0 var(--size-xxxsmall) 0 var(--size-xxsmall);\n}\n\n.onboarding-tip {\n  display: flex;\n  align-items: top;\n  padding: 0 var(--size-xsmall) 0 0;\n}\n\n.onboarding-tip .icon {\n  margin-right: var(--size-xxsmall);\n}\n\n.onboarding-tip__msg {\n  padding: var(--size-xxsmall) 0 var(--size-xxsmall) 0;\n  font-size: var(--font-size-xsmall);\n  font-weight: var(--font-weight-normal);\n  letter-spacing: var(--font-letter-spacing-pos-xsmall);\n  line-height: var(--line-height);\n  color: var(--black8);\n  margin: 0;\n}\n\n.radio {\n  align-items: center;\n  cursor: default;\n  display: flex;\n  height: var(--size-medium);\n  position: relative;\n}\n\n.radio__button {\n  opacity: 0;\n  width: 10px;\n  height: 10px;\n  margin: 0;\n  padding: 0;\n}\n\n.radio__button:checked + .radio__label:before {\n  background-image: url('data:image/svg+xml,%3Csvg width=\"6\" height=\"6\" viewBox=\"0 0 6 6\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Crect width=\"6\" height=\"6\" rx=\"3\" fill=\"black\" fill-opacity=\"0.8\"/%3E%3C/svg%3E%0A');\n  background-repeat: no-repeat;\n  background-position: 2px 2px;\n}\n\n.radio__button:disabled + .radio__label {\n  opacity: 0.3;\n}\n\n.radio__button:checked:disabled + .radio__label:before {\n  border: 1px solid var(--black);\n}\n\n.radio__label {\n  align-items: center;\n  color: var(--black8);\n  display: flex;\n  font-family: var(--font-stack);\n  font-size: var(--font-size-xsmall);\n  font-weight: var(--font-weight-normal);\n  line-height: var(--font-line-height);\n  letter-spacing: var(--font-letter-spacing-pos-xsmall);\n  margin-left: -16px;\n  padding: 0 var(--size-xsmall) 0 var(--size-small);\n  height: 100%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.radio__label:before {\n  border: 1px solid var(--black8);\n  border-radius: var(--border-radius-small);\n  content: '';\n  display: block;\n  width: 10px;\n  height: 10px;\n  margin: 2px 10px 0 -8px;\n  border-radius: 50%;\n}\n\n.section-title {\n  font-size: var(--font-size-xsmall);\n  font-weight: var(--font-weight-bold);\n  letter-spacing: var(--font-letter-spacing-pos-xsmall);\n  line-height: var(--line-height);\n  color: var(--black8);\n  height: var(--size-medium);\n  width: 100%;\n  display: flex;\n  align-items: center;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding: 0 calc(var(--size-xxsmall) / 2) 0 var(--size-xxsmall);\n}\n\nselect.select-menu {\n  display: none;\n}\n\n.select-menu {\n  position: relative;\n}\n\n.select-menu__button {\n  display: flex;\n  align-items: center;\n  border: 1px solid transparent;\n  height: 30px;\n  width: 100%;\n  margin: 1px 0 1px 0;\n  padding: 0px var(--size-xxsmall) 0px var(--size-xxsmall);\n  overflow-y: hidden;\n  border-radius: var(--border-radius-small);\n  background-color: var(--white);\n}\n\n.select-menu__button:hover {\n  border-color: var(--black1);\n}\n\n.select-menu__button:focus {\n  border: 1px solid var(--blue);\n  outline: 1px solid var(--blue);\n  outline-offset: -2px;\n}\n\n.select-menu__button:disabled:hover {\n  justify-content: flex-start;\n  border-color: transparent;\n}\n\n.select-menu__button * {\n  pointer-events: none;\n}\n\n.select-menu__button:hover .select-menu__label--placeholder {\n  color: var(--black8);\n}\n\n.select-menu__button:focus .select-menu__label--placeholder {\n  color: var(--black8);\n}\n\n.select-menu__button:disabled:hover .select-menu__label--placeholder {\n  color: var(--black3);\n}\n\n.select-menu__button:hover .select-menu__caret, .select-menu__button:focus .select-menu__caret {\n  opacity: 1.0;\n  margin-left: auto;\n}\n\n.select-menu__button:disabled:hover .select-menu__caret {\n  opacity: 0.3;\n  margin-left: -12px;\n}\n\n.select-menu__button:disabled .select-menu__label {\n  color: var(--black3);\n}\n\n.select-menu__label {\n  font-size: var(--font-size-xsmall);\n  font-weight: var(--font-weight-normal);\n  letter-spacing: var(--font-letter-spacing-neg-xsmall);\n  line-height: var(--line-height);\n  color: var(--black8);\n  margin-right: 6px;\n  margin-top: -2px;\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\n.select-menu__label--placeholder {\n  color: var(--black3);\n}\n\n.select-menu__caret {\n  width: 30px;\n  height: 30px;\n  display: block;\n  margin-top: -1px;\n  margin-left: -12px;\n  background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%20width%3D%2230%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m15%2016.7071-3-3%20.7071-.7071%202.6465%202.6464%202.6464-2.6464.7071.7071-3%203-.3535.3536z%22%20fill%3D%22%23000%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E\");\n  background-repeat: no-repeat;\n  background-position: center center;\n  opacity: 0.3;\n}\n\n.select-menu .icon {\n  margin-left: -8px;\n  margin-top: -2px;\n  margin-right: 0;\n  opacity: 0.3;\n}\n\n.select-menu__menu {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background-color: var(--hud);\n  box-shadow: var(--shadow-hud);\n  padding: var(--size-xxsmall) 0 var(--size-xxsmall) 0;\n  border-radius: var(--border-radius-small);\n  margin: 0;\n  z-index: 1000;\n  overflow-x: overlay;\n  overflow-y: auto;\n}\n\n.select-menu__menu--active {\n  display: block;\n}\n\n.select-menu__menu::-webkit-scrollbar {\n  width: 12px;\n  background-color: transparent;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=);\n  background-repeat: repeat;\n  background-size: 100% auto;\n}\n\n.select-menu__menu::-webkit-scrollbar-track {\n  border: solid 3px transparent;\n  box-shadow: inset 0 0 10px 10px transparent;\n}\n\n.select-menu__menu::-webkit-scrollbar-thumb {\n  border: solid 3px transparent;\n  border-radius: 6px;\n  box-shadow: inset 0 0 10px 10px rgba(255, 255, 255, 0.4);\n}\n\n.select-menu__item {\n  align-items: center;\n  color: var(--white);\n  cursor: default;\n  display: flex;\n  font-family: var(--font-stack);\n  font-size: var(--font-size-small);\n  font-weight: var(--font-weight-normal);\n  letter-spacing: var(--font-letter-spacing-neg-xsmall);\n  line-height: var(--font-line-height);\n  height: var(--size-small);\n  padding: 0px var(--size-xsmall) 0px var(--size-xxsmall);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  outline: none;\n}\n\n.select-menu__item--selected .select-menu__item-icon {\n  opacity: 1.0;\n}\n\n.select-menu__item-label {\n  overflow-x: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  pointer-events: none;\n}\n\n.select-menu__item-icon {\n  width: var(--size-xsmall);\n  height: var(--size-xsmall);\n  margin-right: var(--size-xxsmall);\n  opacity: 0;\n  pointer-events: none;\n  background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20width%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m13.2069%205.20724-5.50002%205.49996-.70711.7072-.70711-.7072-3-2.99996%201.41422-1.41421%202.29289%202.29289%204.79293-4.79289z%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E\");\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n.select-menu--highlight, .select-menu__item:hover, .select-menu__item:focus {\n  background-color: var(--blue);\n}\n\n.select-menu__divider-label {\n  font-size: var(--font-size-small);\n  font-weight: var(--font-weight-normal);\n  letter-spacing: var(--font-letter-spacing-neg-small);\n  line-height: var(--line-height);\n  display: flex;\n  align-items: center;\n  height: var(--size-small);\n  padding: 0 var(--size-xxsmall) 0 var(--size-medium);\n  color: var(--white4);\n  margin-top: 0;\n}\n\n.select-menu__divider {\n  background-color: var(--white2);\n  display: block;\n  height: 1px;\n  margin: 8px 0 7px 0;\n}\n\n.switch {\n  align-items: center;\n  cursor: default;\n  display: flex;\n  height: var(--size-medium);\n  position: relative;\n  /*\n    &__toggle:focus + &__label:before {\n        box-shadow: 0 0 0 2px var(--blue);\n    }\n    */\n}\n\n.switch__toggle {\n  opacity: 0;\n}\n\n.switch__toggle:checked + .switch__label:before {\n  color: var(--black8);\n  background-color: var(--black8-opaque);\n}\n\n.switch__toggle:checked + .switch__label:after {\n  transform: translateX(12px);\n}\n\n.switch__toggle:checked:disabled + .switch__label:before {\n  border: 1px solid var(--black);\n  background-color: var(--black);\n}\n\n.switch__toggle:disabled + .switch__label {\n  color: var(--black);\n  opacity: 0.3;\n}\n\n.switch__label {\n  align-items: center;\n  color: var(--black8);\n  display: flex;\n  font-family: var(--font-stack);\n  font-size: var(--font-size-xsmall);\n  font-weight: var(--font-weight-normal);\n  height: 100%;\n  letter-spacing: var(--font-letter-spacing-pos-xsmall);\n  line-height: var(--font-line-height);\n  margin-left: -16px;\n  padding: 0 var(--size-xsmall) 0 calc(var(--size-xlarge) - 2px);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.switch__label:before {\n  background-color: var(--white);\n  border: 1px solid var(--black8-opaque);\n  border-radius: 6px;\n  content: '';\n  display: block;\n  height: 10px;\n  left: 8px;\n  position: absolute;\n  top: 10px;\n  transition: background-color 0 0.2s;\n  width: 22px;\n}\n\n.switch__label:after {\n  background-color: var(--white);\n  border: 1px solid var(--black8-opaque);\n  border-radius: 50%;\n  content: '';\n  display: block;\n  height: 10px;\n  left: 8px;\n  position: absolute;\n  top: 10px;\n  transition: transform 0.2s;\n  width: 10px;\n}\n\n.textarea {\n  font-size: var(--font-size-xsmall);\n  font-weight: var(--font-weight-normal);\n  letter-spacing: var(--font-letter-spacing-neg-xsmall);\n  line-height: var(--line-height);\n  position: relative;\n  display: flex;\n  overflow: visible;\n  align-items: center;\n  width: 100%;\n  min-height: 62px;\n  margin: 1px 0 1px 0;\n  padding: var(--size-xxsmall) var(--size-xxxsmall) var(--size-xxsmall) var(--size-xxsmall);\n  color: var(--black8);\n  border: 1px solid var(--black1);\n  border-radius: var(--border-radius-small);\n  outline: none;\n  background-color: var(--white);\n  resize: none;\n  overflow-y: auto;\n}\n\n.textarea:hover, .textarea:placeholder-shown:hover {\n  color: var(--black8);\n  border: 1px solid var(--black1);\n  background-image: none;\n}\n\n.textarea::-moz-selection {\n  color: var(--black);\n  background-color: var(--blue3);\n}\n\n.textarea::selection {\n  color: var(--black);\n  background-color: var(--blue3);\n}\n\n.textarea::-webkit-input-placeholder {\n  color: var(--black3);\n  border: 1px solid transparent;\n}\n\n.textarea::-moz-placeholder {\n  color: var(--black3);\n  border: 1px solid transparent;\n}\n\n.textarea:-ms-input-placeholder {\n  color: var(--black3);\n  border: 1px solid transparent;\n}\n\n.textarea::-ms-input-placeholder {\n  color: var(--black3);\n  border: 1px solid transparent;\n}\n\n.textarea::placeholder {\n  color: var(--black3);\n  border: 1px solid transparent;\n}\n\n.textarea:focus:placeholder-shown {\n  border: 1px solid var(--blue);\n  outline: 1px solid var(--blue);\n  outline-offset: -2px;\n}\n\n.textarea:active, .textarea:focus {\n  color: var(--black);\n  border: 1px solid var(--blue);\n  outline: 1px solid var(--blue);\n  outline-offset: -2px;\n}\n\n.textarea:disabled, .textarea:disabled:hover {\n  position: relative;\n  color: var(--black3);\n  border: 1px solid transparent;\n}\n\n.textarea:disabled:active {\n  outline: none;\n}\n\n.type {\n  font-family: var(--font-stack);\n  font-size: var(--font-size-xsmall);\n  font-weight: var(--font-weight-normal);\n  line-height: var(--font-line-height);\n  letter-spacing: var(--font-letter-spacing-pos-xsmall);\n  /* sizes */\n  /* weights */\n  /* letter spacing adjustments based pos/neg application */\n}\n\n.type--small {\n  font-size: var(--font-size-small);\n  letter-spacing: var(--font-letter-spacing-pos-small);\n}\n\n.type--large {\n  font-size: var(--font-size-large);\n  line-height: var(--font-line-height-large);\n  letter-spacing: var(--font-letter-spacing-pos-large);\n}\n\n.type--xlarge {\n  font-size: var(--font-size-xlarge);\n  line-height: var(--font-line-height-large);\n  letter-spacing: var(--font-letter-spacing-pos-xlarge);\n}\n\n.type--medium {\n  font-weight: var(--font-weight-medium);\n}\n\n.type--bold {\n  font-weight: var(--font-weight-bold);\n}\n\n.type--inverse {\n  letter-spacing: var(--font-letter-spacing-neg-xsmall);\n}\n\n.type--inverse + .type--small {\n  letter-spacing: var(--font-letter-spacing-neg-small);\n}\n\n.type--inverse + .type--large {\n  letter-spacing: var(--font-letter-spacing-neg-large);\n}\n\n.type--inverse + .type--xlarge {\n  letter-spacing: var(--font-letter-spacing-neg-xlarge);\n}\n\n.type--inline {\n  display: inline-block;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/ui.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/ui.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":root {\n    --input-height: 32px;\n    --border-radius: 5px;\n    --font-size: .9em;\n\n    --color-tags: #999;\n    --border-color-tags: #eee;\n}\n\nbody {\n    padding: 1em;\n}\n\n/* Styles for the URL bar. */\n\n.url {\n    display: flex;\n}\n\n.url input {\n    margin-right: 1em;\n    height: var(--input-height);\n}\n\n/* Styles for the example websites. */\n.examples {\n    padding: 1em 0;\n}\n\n.examples span {\n    font-size: var(--font-size);\n    padding: .5em;\n    border: 1px solid var(--border-color-tags);\n    border-radius: var(--border-radius);\n    color: var(--color-tags);\n    cursor: pointer;\n}\n\n.examples span:hover {\n    filter: brightness(0.6);\n}\n\n/* Displaying the data from the API. */\n.result {\n    display: flex;\n    flex-direction: column;\n    padding-top: 1em;\n}\n\n.result > * {\n    margin-bottom: .5em;\n}\n\n.result .text-data {\n    font-size: var(--font-size);\n    padding: .5em;\n    border: 1px solid #CCC;\n    border-radius: var(--border-radius);\n    color: #666;\n}\n\n.result .image-data img {\n    width: 100%;\n    border-radius: var(--border-radius);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/lit-html/lib/default-template-processor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/lit-html/lib/default-template-processor.js ***!
  \*****************************************************************/
/*! exports provided: DefaultTemplateProcessor, defaultTemplateProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return DefaultTemplateProcessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return defaultTemplateProcessor; });
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts.js */ "./node_modules/lit-html/lib/parts.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Creates Parts when a template is instantiated.
 */
class DefaultTemplateProcessor {
    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */
    handleAttributeExpressions(element, name, strings, options) {
        const prefix = name[0];
        if (prefix === '.') {
            const committer = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["PropertyCommitter"](element, name.slice(1), strings);
            return committer.parts;
        }
        if (prefix === '@') {
            return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["EventPart"](element, name.slice(1), options.eventContext)];
        }
        if (prefix === '?') {
            return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["BooleanAttributePart"](element, name.slice(1), strings)];
        }
        const committer = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["AttributeCommitter"](element, name, strings);
        return committer.parts;
    }
    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */
    handleTextExpression(options) {
        return new _parts_js__WEBPACK_IMPORTED_MODULE_0__["NodePart"](options);
    }
}
const defaultTemplateProcessor = new DefaultTemplateProcessor();
//# sourceMappingURL=default-template-processor.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/directive.js":
/*!************************************************!*\
  !*** ./node_modules/lit-html/lib/directive.js ***!
  \************************************************/
/*! exports provided: directive, isDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return isDirective; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const directives = new WeakMap();
/**
 * Brands a function as a directive factory function so that lit-html will call
 * the function during template rendering, rather than passing as a value.
 *
 * A _directive_ is a function that takes a Part as an argument. It has the
 * signature: `(part: Part) => void`.
 *
 * A directive _factory_ is a function that takes arguments for data and
 * configuration and returns a directive. Users of directive usually refer to
 * the directive factory as the directive. For example, "The repeat directive".
 *
 * Usually a template author will invoke a directive factory in their template
 * with relevant arguments, which will then return a directive function.
 *
 * Here's an example of using the `repeat()` directive factory that takes an
 * array and a function to render an item:
 *
 * ```js
 * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
 * ```
 *
 * When `repeat` is invoked, it returns a directive function that closes over
 * `items` and the template function. When the outer template is rendered, the
 * return directive function is called with the Part for the expression.
 * `repeat` then performs it's custom logic to render multiple items.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object.
 *
 * @example
 *
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 */
const directive = (f) => ((...args) => {
    const d = f(...args);
    directives.set(d, true);
    return d;
});
const isDirective = (o) => {
    return typeof o === 'function' && directives.has(o);
};
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/dom.js":
/*!******************************************!*\
  !*** ./node_modules/lit-html/lib/dom.js ***!
  \******************************************/
/*! exports provided: isCEPolyfill, reparentNodes, removeNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCEPolyfill", function() { return isCEPolyfill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return reparentNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return removeNodes; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * True if the custom elements polyfill is in use.
 */
const isCEPolyfill = typeof window !== 'undefined' &&
    window.customElements != null &&
    window.customElements.polyfillWrapFlushCallback !==
        undefined;
/**
 * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
 * into another container (could be the same container), before `before`. If
 * `before` is null, it appends the nodes to the container.
 */
const reparentNodes = (container, start, end = null, before = null) => {
    while (start !== end) {
        const n = start.nextSibling;
        container.insertBefore(start, before);
        start = n;
    }
};
/**
 * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
 * `container`.
 */
const removeNodes = (container, start, end = null) => {
    while (start !== end) {
        const n = start.nextSibling;
        container.removeChild(start);
        start = n;
    }
};
//# sourceMappingURL=dom.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/part.js":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lib/part.js ***!
  \*******************************************/
/*! exports provided: noChange, nothing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return noChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return nothing; });
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */
const nothing = {};
//# sourceMappingURL=part.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/parts.js":
/*!********************************************!*\
  !*** ./node_modules/lit-html/lib/parts.js ***!
  \********************************************/
/*! exports provided: isPrimitive, isIterable, AttributeCommitter, AttributePart, NodePart, BooleanAttributePart, PropertyCommitter, PropertyPart, EventPart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return isIterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return AttributeCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return AttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return NodePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return BooleanAttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return PropertyCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return PropertyPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return EventPart; });
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive.js */ "./node_modules/lit-html/lib/directive.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _part_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./part.js */ "./node_modules/lit-html/lib/part.js");
/* harmony import */ var _template_instance_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony import */ var _template_result_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template-result.js */ "./node_modules/lit-html/lib/template-result.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module lit-html
 */






const isPrimitive = (value) => {
    return (value === null ||
        !(typeof value === 'object' || typeof value === 'function'));
};
const isIterable = (value) => {
    return Array.isArray(value) ||
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        !!(value && value[Symbol.iterator]);
};
/**
 * Writes attribute values to the DOM for a group of AttributeParts bound to a
 * single attribute. The value is only set once even if there are multiple parts
 * for an attribute.
 */
class AttributeCommitter {
    constructor(element, name, strings) {
        this.dirty = true;
        this.element = element;
        this.name = name;
        this.strings = strings;
        this.parts = [];
        for (let i = 0; i < strings.length - 1; i++) {
            this.parts[i] = this._createPart();
        }
    }
    /**
     * Creates a single part. Override this to create a differnt type of part.
     */
    _createPart() {
        return new AttributePart(this);
    }
    _getValue() {
        const strings = this.strings;
        const l = strings.length - 1;
        let text = '';
        for (let i = 0; i < l; i++) {
            text += strings[i];
            const part = this.parts[i];
            if (part !== undefined) {
                const v = part.value;
                if (isPrimitive(v) || !isIterable(v)) {
                    text += typeof v === 'string' ? v : String(v);
                }
                else {
                    for (const t of v) {
                        text += typeof t === 'string' ? t : String(t);
                    }
                }
            }
        }
        text += strings[l];
        return text;
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            this.element.setAttribute(this.name, this._getValue());
        }
    }
}
/**
 * A Part that controls all or part of an attribute value.
 */
class AttributePart {
    constructor(committer) {
        this.value = undefined;
        this.committer = committer;
    }
    setValue(value) {
        if (value !== _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"] && (!isPrimitive(value) || value !== this.value)) {
            this.value = value;
            // If the value is a not a directive, dirty the committer so that it'll
            // call setAttribute. If the value is a directive, it'll dirty the
            // committer if it calls setValue().
            if (!Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(value)) {
                this.committer.dirty = true;
            }
        }
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.value)) {
            const directive = this.value;
            this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        if (this.value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        this.committer.commit();
    }
}
/**
 * A Part that controls a location within a Node tree. Like a Range, NodePart
 * has start and end locations and can set and update the Nodes between those
 * locations.
 *
 * NodeParts support several value types: primitives, Nodes, TemplateResults,
 * as well as arrays and iterables of those types.
 */
class NodePart {
    constructor(options) {
        this.value = undefined;
        this.__pendingValue = undefined;
        this.options = options;
    }
    /**
     * Appends this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendInto(container) {
        this.startNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
        this.endNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
    }
    /**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterNode(ref) {
        this.startNode = ref;
        this.endNode = ref.nextSibling;
    }
    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendIntoPart(part) {
        part.__insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
        part.__insert(this.endNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
    }
    /**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterPart(ref) {
        ref.__insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
        this.endNode = ref.endNode;
        ref.endNode = this.startNode;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        if (this.startNode.parentNode === null) {
            return;
        }
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        const value = this.__pendingValue;
        if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        if (isPrimitive(value)) {
            if (value !== this.value) {
                this.__commitText(value);
            }
        }
        else if (value instanceof _template_result_js__WEBPACK_IMPORTED_MODULE_4__["TemplateResult"]) {
            this.__commitTemplateResult(value);
        }
        else if (value instanceof Node) {
            this.__commitNode(value);
        }
        else if (isIterable(value)) {
            this.__commitIterable(value);
        }
        else if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"]) {
            this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"];
            this.clear();
        }
        else {
            // Fallback, will render the string representation
            this.__commitText(value);
        }
    }
    __insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
    }
    __commitNode(value) {
        if (this.value === value) {
            return;
        }
        this.clear();
        this.__insert(value);
        this.value = value;
    }
    __commitText(value) {
        const node = this.startNode.nextSibling;
        value = value == null ? '' : value;
        // If `value` isn't already a string, we explicitly convert it here in case
        // it can't be implicitly converted - i.e. it's a symbol.
        const valueAsString = typeof value === 'string' ? value : String(value);
        if (node === this.endNode.previousSibling &&
            node.nodeType === 3 /* Node.TEXT_NODE */) {
            // If we only have a single text node between the markers, we can just
            // set its value, rather than replacing it.
            // TODO(justinfagnani): Can we just check if this.value is primitive?
            node.data = valueAsString;
        }
        else {
            this.__commitNode(document.createTextNode(valueAsString));
        }
        this.value = value;
    }
    __commitTemplateResult(value) {
        const template = this.options.templateFactory(value);
        if (this.value instanceof _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"] &&
            this.value.template === template) {
            this.value.update(value.values);
        }
        else {
            // Make sure we propagate the template processor from the TemplateResult
            // so that we use its syntax extension, etc. The template factory comes
            // from the render function options so that it can control template
            // caching and preprocessing.
            const instance = new _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"](template, value.processor, this.options);
            const fragment = instance._clone();
            instance.update(value.values);
            this.__commitNode(fragment);
            this.value = instance;
        }
    }
    __commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If _value is an array, then the previous render was of an
        // iterable and _value will contain the NodeParts from the previous
        // render. If _value is not an array, clear this part and make a new
        // array for NodeParts.
        if (!Array.isArray(this.value)) {
            this.value = [];
            this.clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this.value;
        let partIndex = 0;
        let itemPart;
        for (const item of value) {
            // Try to reuse an existing part
            itemPart = itemParts[partIndex];
            // If no existing part, create a new one
            if (itemPart === undefined) {
                itemPart = new NodePart(this.options);
                itemParts.push(itemPart);
                if (partIndex === 0) {
                    itemPart.appendIntoPart(this);
                }
                else {
                    itemPart.insertAfterPart(itemParts[partIndex - 1]);
                }
            }
            itemPart.setValue(item);
            itemPart.commit();
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
            this.clear(itemPart && itemPart.endNode);
        }
    }
    clear(startNode = this.startNode) {
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["removeNodes"])(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
}
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */
class BooleanAttributePart {
    constructor(element, name, strings) {
        this.value = undefined;
        this.__pendingValue = undefined;
        if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
            throw new Error('Boolean attributes can only contain a single expression');
        }
        this.element = element;
        this.name = name;
        this.strings = strings;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        if (this.__pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        const value = !!this.__pendingValue;
        if (this.value !== value) {
            if (value) {
                this.element.setAttribute(this.name, '');
            }
            else {
                this.element.removeAttribute(this.name);
            }
            this.value = value;
        }
        this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
    }
}
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */
class PropertyCommitter extends AttributeCommitter {
    constructor(element, name, strings) {
        super(element, name, strings);
        this.single =
            (strings.length === 2 && strings[0] === '' && strings[1] === '');
    }
    _createPart() {
        return new PropertyPart(this);
    }
    _getValue() {
        if (this.single) {
            return this.parts[0].value;
        }
        return super._getValue();
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.element[this.name] = this._getValue();
        }
    }
}
class PropertyPart extends AttributePart {
}
// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the third
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.
let eventOptionsSupported = false;
// Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
// blocks right into the body of a module
(() => {
    try {
        const options = {
            get capture() {
                eventOptionsSupported = true;
                return false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.addEventListener('test', options, options);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.removeEventListener('test', options, options);
    }
    catch (_e) {
        // event options not supported
    }
})();
class EventPart {
    constructor(element, eventName, eventContext) {
        this.value = undefined;
        this.__pendingValue = undefined;
        this.element = element;
        this.eventName = eventName;
        this.eventContext = eventContext;
        this.__boundHandleEvent = (e) => this.handleEvent(e);
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        if (this.__pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        const newListener = this.__pendingValue;
        const oldListener = this.value;
        const shouldRemoveListener = newListener == null ||
            oldListener != null &&
                (newListener.capture !== oldListener.capture ||
                    newListener.once !== oldListener.once ||
                    newListener.passive !== oldListener.passive);
        const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
        if (shouldRemoveListener) {
            this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        if (shouldAddListener) {
            this.__options = getOptions(newListener);
            this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        this.value = newListener;
        this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
    }
    handleEvent(event) {
        if (typeof this.value === 'function') {
            this.value.call(this.eventContext || this.element, event);
        }
        else {
            this.value.handleEvent(event);
        }
    }
}
// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
const getOptions = (o) => o &&
    (eventOptionsSupported ?
        { capture: o.capture, passive: o.passive, once: o.once } :
        o.capture);
//# sourceMappingURL=parts.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/render.js":
/*!*********************************************!*\
  !*** ./node_modules/lit-html/lib/render.js ***!
  \*********************************************/
/*! exports provided: parts, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return parts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts.js */ "./node_modules/lit-html/lib/parts.js");
/* harmony import */ var _template_factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module lit-html
 */



const parts = new WeakMap();
/**
 * Renders a template result or other value to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result Any value renderable by NodePart - typically a TemplateResult
 *     created by evaluating a template tag like `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */
const render = (result, container, options) => {
    let part = parts.get(container);
    if (part === undefined) {
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(container, container.firstChild);
        parts.set(container, part = new _parts_js__WEBPACK_IMPORTED_MODULE_1__["NodePart"](Object.assign({ templateFactory: _template_factory_js__WEBPACK_IMPORTED_MODULE_2__["templateFactory"] }, options)));
        part.appendInto(container);
    }
    part.setValue(result);
    part.commit();
};
//# sourceMappingURL=render.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/template-factory.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/lib/template-factory.js ***!
  \*******************************************************/
/*! exports provided: templateFactory, templateCaches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return templateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return templateCaches; });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */
function templateFactory(result) {
    let templateCache = templateCaches.get(result.type);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        templateCaches.set(result.type, templateCache);
    }
    let template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) {
        return template;
    }
    // If the TemplateStringsArray is new, generate a key from the strings
    // This key is shared between all templates with identical content
    const key = result.strings.join(_template_js__WEBPACK_IMPORTED_MODULE_0__["marker"]);
    // Check if we already have a Template for this key
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        // If we have not seen this key before, create a new Template
        template = new _template_js__WEBPACK_IMPORTED_MODULE_0__["Template"](result, result.getTemplateElement());
        // Cache the Template for this key
        templateCache.keyString.set(key, template);
    }
    // Cache all future queries for this TemplateStringsArray
    templateCache.stringsArray.set(result.strings, template);
    return template;
}
const templateCaches = new Map();
//# sourceMappingURL=template-factory.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/template-instance.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/lib/template-instance.js ***!
  \********************************************************/
/*! exports provided: TemplateInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return TemplateInstance; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module lit-html
 */


/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */
class TemplateInstance {
    constructor(template, processor, options) {
        this.__parts = [];
        this.template = template;
        this.processor = processor;
        this.options = options;
    }
    update(values) {
        let i = 0;
        for (const part of this.__parts) {
            if (part !== undefined) {
                part.setValue(values[i]);
            }
            i++;
        }
        for (const part of this.__parts) {
            if (part !== undefined) {
                part.commit();
            }
        }
    }
    _clone() {
        // There are a number of steps in the lifecycle of a template instance's
        // DOM fragment:
        //  1. Clone - create the instance fragment
        //  2. Adopt - adopt into the main document
        //  3. Process - find part markers and create parts
        //  4. Upgrade - upgrade custom elements
        //  5. Update - set node, attribute, property, etc., values
        //  6. Connect - connect to the document. Optional and outside of this
        //     method.
        //
        // We have a few constraints on the ordering of these steps:
        //  * We need to upgrade before updating, so that property values will pass
        //    through any property setters.
        //  * We would like to process before upgrading so that we're sure that the
        //    cloned fragment is inert and not disturbed by self-modifying DOM.
        //  * We want custom elements to upgrade even in disconnected fragments.
        //
        // Given these constraints, with full custom elements support we would
        // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
        //
        // But Safari does not implement CustomElementRegistry#upgrade, so we
        // can not implement that order and still have upgrade-before-update and
        // upgrade disconnected fragments. So we instead sacrifice the
        // process-before-upgrade constraint, since in Custom Elements v1 elements
        // must not modify their light DOM in the constructor. We still have issues
        // when co-existing with CEv0 elements like Polymer 1, and with polyfills
        // that don't strictly adhere to the no-modification rule because shadow
        // DOM, which may be created in the constructor, is emulated by being placed
        // in the light DOM.
        //
        // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
        // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
        // in one step.
        //
        // The Custom Elements v1 polyfill supports upgrade(), so the order when
        // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
        // Connect.
        const fragment = _dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"] ?
            this.template.element.content.cloneNode(true) :
            document.importNode(this.template.element.content, true);
        const stack = [];
        const parts = this.template.parts;
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        let partIndex = 0;
        let nodeIndex = 0;
        let part;
        let node = walker.nextNode();
        // Loop through all the nodes and parts of a template
        while (partIndex < parts.length) {
            part = parts[partIndex];
            if (!Object(_template_js__WEBPACK_IMPORTED_MODULE_1__["isTemplatePartActive"])(part)) {
                this.__parts.push(undefined);
                partIndex++;
                continue;
            }
            // Progress the tree walker until we find our next part's node.
            // Note that multiple parts may share the same node (attribute parts
            // on a single element), so this loop may not run at all.
            while (nodeIndex < part.index) {
                nodeIndex++;
                if (node.nodeName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
                if ((node = walker.nextNode()) === null) {
                    // We've exhausted the content inside a nested template element.
                    // Because we still have parts (the outer for-loop), we know:
                    // - There is a template in the stack
                    // - The walker will find a nextNode outside the template
                    walker.currentNode = stack.pop();
                    node = walker.nextNode();
                }
            }
            // We've arrived at our part's node.
            if (part.type === 'node') {
                const part = this.processor.handleTextExpression(this.options);
                part.insertAfterNode(node.previousSibling);
                this.__parts.push(part);
            }
            else {
                this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
            }
            partIndex++;
        }
        if (_dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"]) {
            document.adoptNode(fragment);
            customElements.upgrade(fragment);
        }
        return fragment;
    }
}
//# sourceMappingURL=template-instance.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/template-result.js":
/*!******************************************************!*\
  !*** ./node_modules/lit-html/lib/template-result.js ***!
  \******************************************************/
/*! exports provided: TemplateResult, SVGTemplateResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return TemplateResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return SVGTemplateResult; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ "./node_modules/lit-html/lib/template.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @module lit-html
 */


const commentMarker = ` ${_template_js__WEBPACK_IMPORTED_MODULE_1__["marker"]} `;
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */
class TemplateResult {
    constructor(strings, values, type, processor) {
        this.strings = strings;
        this.values = values;
        this.type = type;
        this.processor = processor;
    }
    /**
     * Returns a string of HTML used to create a `<template>` element.
     */
    getHTML() {
        const l = this.strings.length - 1;
        let html = '';
        let isCommentBinding = false;
        for (let i = 0; i < l; i++) {
            const s = this.strings[i];
            // For each binding we want to determine the kind of marker to insert
            // into the template source before it's parsed by the browser's HTML
            // parser. The marker type is based on whether the expression is in an
            // attribute, text, or comment position.
            //   * For node-position bindings we insert a comment with the marker
            //     sentinel as its text content, like <!--{{lit-guid}}-->.
            //   * For attribute bindings we insert just the marker sentinel for the
            //     first binding, so that we support unquoted attribute bindings.
            //     Subsequent bindings can use a comment marker because multi-binding
            //     attributes must be quoted.
            //   * For comment bindings we insert just the marker sentinel so we don't
            //     close the comment.
            //
            // The following code scans the template source, but is *not* an HTML
            // parser. We don't need to track the tree structure of the HTML, only
            // whether a binding is inside a comment, and if not, if it appears to be
            // the first binding in an attribute.
            const commentOpen = s.lastIndexOf('<!--');
            // We're in comment position if we have a comment open with no following
            // comment close. Because <-- can appear in an attribute value there can
            // be false positives.
            isCommentBinding = (commentOpen > -1 || isCommentBinding) &&
                s.indexOf('-->', commentOpen + 1) === -1;
            // Check to see if we have an attribute-like sequence preceding the
            // expression. This can match "name=value" like structures in text,
            // comments, and attribute values, so there can be false-positives.
            const attributeMatch = _template_js__WEBPACK_IMPORTED_MODULE_1__["lastAttributeNameRegex"].exec(s);
            if (attributeMatch === null) {
                // We're only in this branch if we don't have a attribute-like
                // preceding sequence. For comments, this guards against unusual
                // attribute values like <div foo="<!--${'bar'}">. Cases like
                // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
                // below.
                html += s + (isCommentBinding ? commentMarker : _template_js__WEBPACK_IMPORTED_MODULE_1__["nodeMarker"]);
            }
            else {
                // For attributes we use just a marker sentinel, and also append a
                // $lit$ suffix to the name to opt-out of attribute-specific parsing
                // that IE and Edge do for style and certain SVG attributes.
                html += s.substr(0, attributeMatch.index) + attributeMatch[1] +
                    attributeMatch[2] + _template_js__WEBPACK_IMPORTED_MODULE_1__["boundAttributeSuffix"] + attributeMatch[3] +
                    _template_js__WEBPACK_IMPORTED_MODULE_1__["marker"];
            }
        }
        html += this.strings[l];
        return html;
    }
    getTemplateElement() {
        const template = document.createElement('template');
        template.innerHTML = this.getHTML();
        return template;
    }
}
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */
class SVGTemplateResult extends TemplateResult {
    getHTML() {
        return `<svg>${super.getHTML()}</svg>`;
    }
    getTemplateElement() {
        const template = super.getTemplateElement();
        const content = template.content;
        const svgElement = content.firstChild;
        content.removeChild(svgElement);
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["reparentNodes"])(content, svgElement.firstChild);
        return template;
    }
}
//# sourceMappingURL=template-result.js.map

/***/ }),

/***/ "./node_modules/lit-html/lib/template.js":
/*!***********************************************!*\
  !*** ./node_modules/lit-html/lib/template.js ***!
  \***********************************************/
/*! exports provided: marker, nodeMarker, markerRegex, boundAttributeSuffix, Template, isTemplatePartActive, createMarker, lastAttributeNameRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marker", function() { return marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeMarker", function() { return nodeMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markerRegex", function() { return markerRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundAttributeSuffix", function() { return boundAttributeSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return isTemplatePartActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return createMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastAttributeNameRegex", function() { return lastAttributeNameRegex; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */
const nodeMarker = `<!--${marker}-->`;
const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
/**
 * Suffix appended to all bound attribute names.
 */
const boundAttributeSuffix = '$lit$';
/**
 * An updatable Template that tracks the location of dynamic parts.
 */
class Template {
    constructor(result, element) {
        this.parts = [];
        this.element = element;
        const nodesToRemove = [];
        const stack = [];
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(element.content, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        // Keeps track of the last index associated with a part. We try to delete
        // unnecessary nodes, but we never want to associate two different parts
        // to the same index. They must have a constant node between.
        let lastPartIndex = 0;
        let index = -1;
        let partIndex = 0;
        const { strings, values: { length } } = result;
        while (partIndex < length) {
            const node = walker.nextNode();
            if (node === null) {
                // We've exhausted the content inside a nested template element.
                // Because we still have parts (the outer for-loop), we know:
                // - There is a template in the stack
                // - The walker will find a nextNode outside the template
                walker.currentNode = stack.pop();
                continue;
            }
            index++;
            if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                if (node.hasAttributes()) {
                    const attributes = node.attributes;
                    const { length } = attributes;
                    // Per
                    // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                    // attributes are not guaranteed to be returned in document order.
                    // In particular, Edge/IE can return them out of order, so we cannot
                    // assume a correspondence between part index and attribute index.
                    let count = 0;
                    for (let i = 0; i < length; i++) {
                        if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                            count++;
                        }
                    }
                    while (count-- > 0) {
                        // Get the template literal section leading up to the first
                        // expression in this attribute
                        const stringForPart = strings[partIndex];
                        // Find the attribute name
                        const name = lastAttributeNameRegex.exec(stringForPart)[2];
                        // Find the corresponding attribute
                        // All bound attributes have had a suffix added in
                        // TemplateResult#getHTML to opt out of special attribute
                        // handling. To look up the attribute value we also need to add
                        // the suffix.
                        const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                        const attributeValue = node.getAttribute(attributeLookupName);
                        node.removeAttribute(attributeLookupName);
                        const statics = attributeValue.split(markerRegex);
                        this.parts.push({ type: 'attribute', index, name, strings: statics });
                        partIndex += statics.length - 1;
                    }
                }
                if (node.tagName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
            }
            else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                const data = node.data;
                if (data.indexOf(marker) >= 0) {
                    const parent = node.parentNode;
                    const strings = data.split(markerRegex);
                    const lastIndex = strings.length - 1;
                    // Generate a new text node for each literal section
                    // These nodes are also used as the markers for node parts
                    for (let i = 0; i < lastIndex; i++) {
                        let insert;
                        let s = strings[i];
                        if (s === '') {
                            insert = createMarker();
                        }
                        else {
                            const match = lastAttributeNameRegex.exec(s);
                            if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                                s = s.slice(0, match.index) + match[1] +
                                    match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                            }
                            insert = document.createTextNode(s);
                        }
                        parent.insertBefore(insert, node);
                        this.parts.push({ type: 'node', index: ++index });
                    }
                    // If there's no text, we must insert a comment to mark our place.
                    // Else, we can trust it will stick around after cloning.
                    if (strings[lastIndex] === '') {
                        parent.insertBefore(createMarker(), node);
                        nodesToRemove.push(node);
                    }
                    else {
                        node.data = strings[lastIndex];
                    }
                    // We have a part for each match found
                    partIndex += lastIndex;
                }
            }
            else if (node.nodeType === 8 /* Node.COMMENT_NODE */) {
                if (node.data === marker) {
                    const parent = node.parentNode;
                    // Add a new marker node to be the startNode of the Part if any of
                    // the following are true:
                    //  * We don't have a previousSibling
                    //  * The previousSibling is already the start of a previous part
                    if (node.previousSibling === null || index === lastPartIndex) {
                        index++;
                        parent.insertBefore(createMarker(), node);
                    }
                    lastPartIndex = index;
                    this.parts.push({ type: 'node', index });
                    // If we don't have a nextSibling, keep this node so we have an end.
                    // Else, we can remove it to save future costs.
                    if (node.nextSibling === null) {
                        node.data = '';
                    }
                    else {
                        nodesToRemove.push(node);
                        index--;
                    }
                    partIndex++;
                }
                else {
                    let i = -1;
                    while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                        // Comment node has a binding marker inside, make an inactive part
                        // The binding won't work, but subsequent bindings will
                        // TODO (justinfagnani): consider whether it's even worth it to
                        // make bindings in comments work
                        this.parts.push({ type: 'node', index: -1 });
                        partIndex++;
                    }
                }
            }
        }
        // Remove text binding nodes after the walk to not disturb the TreeWalker
        for (const n of nodesToRemove) {
            n.parentNode.removeChild(n);
        }
    }
}
const endsWith = (str, suffix) => {
    const index = str.length - suffix.length;
    return index >= 0 && str.slice(index) === suffix;
};
const isTemplatePartActive = (part) => part.index !== -1;
// Allows `document.createComment('')` to be renamed for a
// small manual size-savings.
const createMarker = () => document.createComment('');
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-characters
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
 * space character except " ".
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
const lastAttributeNameRegex = 
// eslint-disable-next-line no-control-regex
/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
//# sourceMappingURL=template.js.map

/***/ }),

/***/ "./node_modules/lit-html/lit-html.js":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lit-html.js ***!
  \*******************************************/
/*! exports provided: DefaultTemplateProcessor, defaultTemplateProcessor, directive, isDirective, removeNodes, reparentNodes, noChange, nothing, AttributeCommitter, AttributePart, BooleanAttributePart, EventPart, isIterable, isPrimitive, NodePart, PropertyCommitter, PropertyPart, parts, render, templateCaches, templateFactory, TemplateInstance, SVGTemplateResult, TemplateResult, createMarker, isTemplatePartActive, Template, html, svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony import */ var _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/default-template-processor.js */ "./node_modules/lit-html/lib/default-template-processor.js");
/* harmony import */ var _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/template-result.js */ "./node_modules/lit-html/lib/template-result.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["DefaultTemplateProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]; });

/* harmony import */ var _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/directive.js */ "./node_modules/lit-html/lib/directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["isDirective"]; });

/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/dom.js */ "./node_modules/lit-html/lib/dom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["removeNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["reparentNodes"]; });

/* harmony import */ var _lib_part_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/part.js */ "./node_modules/lit-html/lib/part.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["noChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["nothing"]; });

/* harmony import */ var _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/parts.js */ "./node_modules/lit-html/lib/parts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributeCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["BooleanAttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["EventPart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["isIterable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["NodePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyPart"]; });

/* harmony import */ var _lib_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/render.js */ "./node_modules/lit-html/lib/render.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["parts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["render"]; });

/* harmony import */ var _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/template-factory.js */ "./node_modules/lit-html/lib/template-factory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateCaches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateFactory"]; });

/* harmony import */ var _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/template-instance.js */ "./node_modules/lit-html/lib/template-instance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__["TemplateInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"]; });

/* harmony import */ var _lib_template_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/template.js */ "./node_modules/lit-html/lib/template.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["createMarker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["isTemplatePartActive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["Template"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 *
 * Main lit-html module.
 *
 * Main exports:
 *
 * -  [[html]]
 * -  [[svg]]
 * -  [[render]]
 *
 * @module lit-html
 * @preferred
 */
/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */




// TODO(justinfagnani): remove line when we get NodePart moving methods








// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
if (typeof window !== 'undefined') {
    (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.2.1');
}
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */
const html = (strings, ...values) => new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"](strings, values, 'html', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */
const svg = (strings, ...values) => new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"](strings, values, 'svg', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
//# sourceMappingURL=lit-html.js.map

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/libs/figma-ds/figma-plugin-ds.css":
/*!***********************************************!*\
  !*** ./src/libs/figma-ds/figma-plugin-ds.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./figma-plugin-ds.css */ "./node_modules/css-loader/dist/cjs.js!./src/libs/figma-ds/figma-plugin-ds.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/libs/figma-ds/figma-plugin-ds.js":
/*!**********************************************!*\
  !*** ./src/libs/figma-ds/figma-plugin-ds.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
	'use strict';

	const disclosureSelector = 'disclosure';

	//PRIVATE
	const disclosureHandler = function (event) {
		let disclosureSet = this.parentNode.parentNode;
		let disclosuresInSet = disclosureSet.querySelectorAll('li');
		let alreadyActive = this.parentNode.classList.contains(disclosureSelector + '--expanded');

		disclosuresInSet.forEach((disclosure) => {
			disclosure.classList.remove(disclosureSelector + '--expanded');
		});

		this.parentNode.classList.add(disclosureSelector + '--expanded');

		if (alreadyActive) {
			this.parentNode.classList.remove(disclosureSelector + '--expanded');
		}
	};

	//PUBLIC
	window.disclosure = {
		init: function () {
			let disclosures = document.querySelectorAll('.' + disclosureSelector + '__label');

			if (disclosures) {
				disclosures.forEach((disclosure) => {
					disclosure.addEventListener('click', disclosureHandler, false);
				});
			}
		},

		destroy: function () {
			let disclosures = document.querySelectorAll('.' + disclosureSelector + '__label');

			if (disclosures) {
				disclosures.forEach((disclosure) => {
					disclosure.removeEventListener('click', disclosureHandler, false);
				});
			}
		}
	};
})();

(function () {
	'use strict';

	const selectMenuSelector = 'select-menu';

	let elements, optionList, itemHeight, selectedItem;
	let init = false;

	//PRIVATE

	//create the menus
	const createMenus = function () {
		// loop through all select menus on screen
		elements.forEach(function (menu, index) {
			//  setup mutation observer
			let mutationConfig = { attributes: true, childList: true, subtree: true };
			let callback = function (mutationsList, observer) {
				for (let mutation of mutationsList) {
					if (mutation.type === 'childList') {
						selectMenu.init();
					} else if (mutation.type === 'attributes') {
						if (
							mutation.attributeName === 'value' ||
							mutation.attributeName === 'disabled'
						) {
							selectMenu.init();
						}
					}
				}
			};
			let observer = new MutationObserver(callback);
			observer.observe(menu, mutationConfig);

			//keep track of menu height, reset to 0 when building new one
			itemHeight = 0;

			//create the wrapper for the menu
			createWrapper(menu);

			//find out if an item is already selected
			selectedItem = menu.selectedIndex;

			//find out if there are option groups present
			let optionGroups = Array.from(menu.getElementsByTagName('optgroup'));

			if (optionGroups.length != 0) {
				//do this if optgroups present

				//determine if the option groups have labels
				let hasLabels = optionGroups[0].label ? true : false;

				//loop through every option group
				optionGroups.forEach(function (group, index) {
					if (hasLabels) {
						if (index != 0) {
							let divider = document.createElement('div');
							divider.className = selectMenuSelector + '__divider';
							optionList.appendChild(divider);
							addItemHeight(divider);

							//prevent clicks on optgroup dividers
							divider.addEventListener('click', stopProp, false);
						}

						//create the divider element w/ a label
						let divider = document.createElement('div');
						divider.textContent = group.label;
						divider.className = selectMenuSelector + '__divider-label';

						//add to menu
						optionList.appendChild(divider);

						//calculate and add height of divider
						addItemHeight(divider);

						//prevent clicks on optgroup dividers
						divider.addEventListener('click', stopProp, false);
					}

					if (index > 0 && !hasLabels) {
						//create the divider element
						let divider = document.createElement('div');
						divider.className = selectMenuSelector + '__divider';

						//add to menu
						optionList.appendChild(divider);

						//calculate and add height of divider
						addItemHeight(divider);

						//prevent clicks on optgroup dividers
						divider.addEventListener('click', stopProp, false);
					}

					//get children of group
					let options = Array.from(group.getElementsByTagName('option'));

					//loop through all options and generate an item
					options.forEach((option) => {
						createMenuItem(option);
					});
				});
			} else {
				//do this if there are no optgroupss

				let options = Array.from(menu.options);
				//loop through all options and generate an item
				options.forEach((option) => {
					createMenuItem(option);
				});
			}
		});
	};

	//create the wrapper for the select menu
	//includes button and generates the wrapper UL for the list of menu items
	const createWrapper = function (menu) {
		//add top margin
		itemHeight += 6;

		//hide the select menu
		menu.style.display = 'none';

		//set the selected option to correct menu item if not set

		if (menu.selectedIndex != -1) {
			menu.options[menu.selectedIndex].selected = true;
		}

		//create the wrapper, and insert the hidden select menu
		let menuWrapper = document.createElement('div');
		menuWrapper.className = selectMenuSelector;
		menu.parentNode.insertBefore(menuWrapper, menu);
		menuWrapper.appendChild(menu);

		//determine if an icon is specified
		let iconName = menu.getAttribute('icon');

		//create the button + nested elements
		let button = document.createElement('button');
		let icon;
		let buttonLabel = document.createElement('span');
		let buttonCaret = document.createElement('span');
		if (iconName) {
			icon = document.createElement('span');
			icon.className = 'icon ' + iconName;
		}

		//add classes
		button.className = selectMenuSelector + '__button';
		buttonLabel.className = selectMenuSelector + '__label';
		buttonCaret.className = selectMenuSelector + '__caret';

		//add content
		if (menu.selectedIndex != -1) {
			buttonLabel.textContent = menu.options[menu.selectedIndex].text;
			if (menu.options[menu.selectedIndex].value === '') {
				buttonLabel.classList.add(selectMenuSelector + '__label--placeholder');
			}
		} else {
			buttonLabel.textContent = 'No items to display';
			buttonLabel.classList.add(selectMenuSelector + '__label--placeholder');
		}

		//create the menu container
		optionList = document.createElement('ul');
		optionList.className = selectMenuSelector + '__menu';

		//add elements to dom
		menuWrapper.appendChild(button);
		menuWrapper.appendChild(optionList);
		if (icon) {
			button.appendChild(icon);
		}
		button.appendChild(buttonLabel);
		button.appendChild(buttonCaret);

		//add event listener
		button.addEventListener('click', displayMenu, false);
	};

	//create a list item
	const createMenuItem = function (menuItem) {
		/* only create an item if there is a value this will ignore 
        the first menu item (if included) as a placeholder */
		if (menuItem.hasAttribute('value') && menuItem.value != '') {
			//create list item elements
			let item = document.createElement('li');
			let itemIcon = document.createElement('span');
			let itemLabel = document.createElement('span');

			//set classnames
			item.className = selectMenuSelector + '__item';
			itemIcon.className = selectMenuSelector + '__item-icon';
			itemLabel.className = selectMenuSelector + '__item-label';

			//add elements to dom
			item.appendChild(itemIcon);
			item.appendChild(itemLabel);
			optionList.appendChild(item);

			//configure attributes
			item.setAttribute('data-value', menuItem.value);
			itemLabel.textContent = menuItem.text;
			item.setAttribute('position', itemHeight);

			/* after the item is created we pass this element to this function
            this function calculates the height of the item and increases value
            of the item height var */
			addItemHeight(item);

			//if item is selected, add active class
			if (menuItem.index === selectedItem) {
				item.classList.add(selectMenuSelector + '__item--selected');
				let menuPosition = -Math.abs(parseInt(item.getAttribute('position')));
				optionList.style.top = menuPosition + 'px';
			}

			//event listener
			item.addEventListener('click', displayMenu, false);
		}
	};

	//function to display the menu when clicked
	var displayMenu = function (event) {
		/*the event is any click registered inside the element
        and then determine if the button or menu item is clicked */
		if (this.tagName == 'BUTTON') {
			//get the menu element so we can see if there are options to display
			let selectMenu = this.parentNode.querySelector('select');

			if (selectMenu.children.length > 0) {
				//add active class to button (is this needed?)
				this.classList.toggle(selectMenuSelector + '__button--active');

				//toggle the menu
				let menu = this.parentNode.querySelector('UL');
				menu.classList.toggle(selectMenuSelector + '__menu--active');

				//update position of menu
				resizeAndPosition(menu);
			}

			this.blur();
		} else if (this.tagName === 'LI') {
			//define the menu
			let menu = this.parentNode.parentNode.querySelector('UL');

			//remove active classses from all menus
			let menuItems = Array.from(menu.getElementsByTagName('LI'));
			menuItems.forEach((item) => {
				item.classList.remove(selectMenuSelector + '__item--selected');
			});

			//select item
			this.classList.add(selectMenuSelector + '__item--selected');

			//update the value of the select menu
			let select = menu.parentNode.querySelector('SELECT');
			let selectedValue = this.getAttribute('data-value');
			let options = select.querySelectorAll('option');

			//remove selected option for all elements
			options.forEach((option) => {
				if (option.value === selectedValue) {
					option.setAttribute('selected', 'selected');
				} else {
					option.removeAttribute('selected');
				}
			});
			select.value = selectedValue;

			//dispatch change event
			let event = new Event('change');
			select.dispatchEvent(event);

			//update the button on the dropdown
			let button = this.parentNode.parentNode.querySelector('BUTTON');
			let buttonLabel = button.querySelector('.' + selectMenuSelector + '__label');
			buttonLabel.textContent = this.textContent;
			buttonLabel.classList.remove(selectMenuSelector + '__label--placeholder');

			button.classList.toggle(selectMenuSelector + '__button--active');

			//toggle the dropdown visibility
			menu.classList.toggle(selectMenuSelector + '__menu--active');

			//update the position of the drop down after hidden
			let menuPosition = -Math.abs(parseInt(this.getAttribute('position')));
			menu.style.top = menuPosition + 'px';

			//update position of menu
			resizeAndPosition(menu);
		}
	};

	// event handlers

	//stop event propagation
	var stopProp = function (event) {
		event.stopPropagation();
	};

	//track clicks outside the menu
	var isOutside = function (event) {
		let selectMenus = document.querySelectorAll('select.' + selectMenuSelector);

		selectMenus.forEach((select) => {
			let menuWrapper = select.parentNode;
			let menu = menuWrapper.querySelector('UL');
			let button = menuWrapper.querySelector('BUTTON');

			if (menu.classList.contains(selectMenuSelector + '__menu--active')) {
				let clickInside = menuWrapper.contains(event.target);
				if (!clickInside) {
					menu.classList.remove(selectMenuSelector + '__menu--active');
					button.classList.remove(selectMenuSelector + '__button--active');
				}
			}
		});
	};

	// this function ensures that the select menu
	// fits inside the plugin viewport
	// if its too big, it will resize it and enable a scrollbar
	// if its off screen it will shift the position
	const resizeAndPosition = function (menu) {
		//set the max height of the menu based on plugin/iframe window
		let maxMenuHeight = window.innerHeight - 16;
		let menuHeight = menu.offsetHeight;
		let menuResized = false;
		let menuButton = menu.parentNode.querySelector('BUTTON');

		if (menuHeight > maxMenuHeight) {
			menu.style.height = maxMenuHeight + 'px';
			menuResized = true;
		}

		//lets adjust the position of the menu if its cut off from viewport
		let bounding = menu.getBoundingClientRect();
		let parentBounding = menuButton.getBoundingClientRect();

		if (bounding.top < 0) {
			menu.style.top = -Math.abs(parentBounding.top - 8) + 'px';
		}
		if (bounding.bottom > (window.innerHeight || document.documentElement.clientHeight)) {
			let minTop = -Math.abs(parentBounding.top - (window.innerHeight - menuHeight - 8));
			let newTop = -Math.abs(bounding.bottom - window.innerHeight + 16);
			if (menuResized) {
				menu.style.top = -Math.abs(parentBounding.top - 8) + 'px';
			} else if (newTop > minTop) {
				menu.style.top = minTop + 'px';
			} else {
				menu.style.top = newTop + 'px';
			}
		}
	};

	//helper functions

	//increment itemHeight
	function addItemHeight(element) {
		//get key dimensions to calculate height
		let dimensions = [
			parseInt(window.getComputedStyle(element, null).getPropertyValue('margin-top')),
			parseInt(window.getComputedStyle(element, null).getPropertyValue('margin-bottom')),
			parseInt(window.getComputedStyle(element, null).getPropertyValue('padding-top')),
			parseInt(window.getComputedStyle(element, null).getPropertyValue('padding-bottom')),
			parseInt(window.getComputedStyle(element, null).getPropertyValue('height'))
		];

		itemHeight += arraySum(dimensions);
	}
	//helper function to return sum of array
	function arraySum(data) {
		return data.reduce(function (a, b) {
			return a + b;
		}, 0);
	}

	// PUBLIC
	window.selectMenu = {
		init: function () {
			//destroy first if already initialized
			if (init == true) {
				this.destroy();
			}

			//initialize all menus
			elements = document.querySelectorAll('.' + selectMenuSelector);

			if (elements) {
				//create the menu(s)
				createMenus();

				//click handler for clicks outside of menu
				document.addEventListener('click', isOutside, false);

				//set init to true now that menu has been initialized
				init = true;
			}
		},

		destroy: function () {
			if (elements) {
				//remove all the generated DOM elements
				elements.forEach((menu) => {
					let parent = menu.parentNode;
					parent.querySelector('BUTTON').remove();
					parent.querySelector('UL').remove();
					parent.outerHTML = parent.innerHTML;
				});

				//remove event handler on each element
				document.removeEventListener('click', isOutside, false);

				//set init to false now that menu has been destroyed
				init = false;
			}
		}
	};
})();


/***/ }),

/***/ "./src/ui.css":
/*!********************!*\
  !*** ./src/ui.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./ui.css */ "./node_modules/css-loader/dist/cjs.js!./src/ui.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/ui.ts":
/*!*******************!*\
  !*** ./src/ui.ts ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/lit-html/lit-html.js */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var _libs_figma_ds_figma_plugin_ds_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/figma-ds/figma-plugin-ds.css */ "./src/libs/figma-ds/figma-plugin-ds.css");
/* harmony import */ var _libs_figma_ds_figma_plugin_ds_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_libs_figma_ds_figma_plugin_ds_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_figma_ds_figma_plugin_ds_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/figma-ds/figma-plugin-ds.js */ "./src/libs/figma-ds/figma-plugin-ds.js");
/* harmony import */ var _libs_figma_ds_figma_plugin_ds_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_libs_figma_ds_figma_plugin_ds_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui.css */ "./src/ui.css");
/* harmony import */ var _ui_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ui_css__WEBPACK_IMPORTED_MODULE_3__);
/*
    This code will live in the <iframe> within Figma.
    It has access to all the browser APIs.
*/




const pluginServer = 'http://localhost:8080/';
// Example buttons
// These provide example URLs that the user can use to try out the plugin.
let crawlUrl = document.querySelector('.url input');
let exampleTags = document.querySelectorAll('.examples span').forEach((example) => {
    example.addEventListener('click', (event) => {
        console.log(example.dataset.url);
        crawlUrl.value = example.dataset.url;
        crawlUrl.focus();
    });
});
// Submit button
// Once this is clicked, the plugin sends the URL to the server and waits for
// a response back.
let submitButton = document.querySelector('.url button');
submitButton.addEventListener('click', () => {
    var request = new XMLHttpRequest();
    if (crawlUrl.value.length > 0) {
        request.open('GET', pluginServer + crawlUrl.value);
        request.responseType = 'json';
        request.onload = () => {
            window.parent.postMessage({ pluginMessage: { type: 'resize', width: 450, height: 400 } }, '*');
            renderElements(request.response);
        };
        request.send();
    }
});
// Define the templates for displaying the data.
const mainTemplate = (templates) => _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"] `${templates}`;
const textTemplate = (data) => _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"] `<div class='text-data'>${data}</div>`;
const imageTemplate = (data) => _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"] `<div class='image-data'>
            <img src='${data}'></img>
        </div>`;
// Display the data that we got.
function renderElements(response) {
    let container = document.querySelector('.result');
    let dataTemplates = [];
    if (response.ogImage && response.ogImage.url) {
        dataTemplates.push(imageTemplate(response.ogImage.url));
    }
    if (response.ogSiteName) {
        dataTemplates.push(textTemplate(response.ogSiteName));
    }
    if (response.ogTitle) {
        dataTemplates.push(textTemplate(response.ogTitle));
    }
    if (response.twitterSite) {
        dataTemplates.push(textTemplate(response.twitterSite));
    }
    if (response.twitterDescription) {
        dataTemplates.push(textTemplate(response.twitterDescription));
    }
    Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["render"])(mainTemplate(dataTemplates), container);
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvZmlnbWEtZHMvZmlnbWEtcGx1Z2luLWRzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpYi9kZWZhdWx0LXRlbXBsYXRlLXByb2Nlc3Nvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3BhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpYi9wYXJ0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3RlbXBsYXRlLWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpYi90ZW1wbGF0ZS1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3RlbXBsYXRlLXJlc3VsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saXQtaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvZmlnbWEtZHMvZmlnbWEtcGx1Z2luLWRzLmNzcz8xY2QyIiwid2VicGFjazovLy8uL3NyYy9saWJzL2ZpZ21hLWRzL2ZpZ21hLXBsdWdpbi1kcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkuY3NzP2M3N2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsY0FBYyxRQUFTLHNCQUFzQixvREFBb0Qsc0JBQXNCLHdCQUF3QixxQkFBcUIsbUJBQW1CLHNCQUFzQiwrQ0FBK0MsZ0NBQWdDLDZCQUE2QixnQ0FBZ0MsNkJBQTZCLHFCQUFxQixzQ0FBc0Msc0NBQXNDLDhDQUE4QyxzQkFBc0IsbUJBQW1CLHVCQUF1QixpREFBaUQsb0NBQW9DLHNDQUFzQyxxQ0FBcUMsMkJBQTJCLDJCQUEyQixzQ0FBc0MsMExBQTBMLGlEQUFpRCw0QkFBNEIsNEJBQTRCLDZCQUE2QixvREFBb0QsOEJBQThCLDRCQUE0QixpREFBaUQsNkVBQTZFLDhHQUE4Ryw0Q0FBNEMsdUNBQXVDLDRDQUE0Qyw4Q0FBOEMsNkNBQTZDLDhDQUE4Qyw4Q0FBOEMsc0RBQXNELDZCQUE2QiwrQkFBK0IsOEZBQThGLDREQUE0RCxtREFBbUQsd0JBQXdCLHdCQUF3Qix1QkFBdUIsd0JBQXdCLHVCQUF1Qix3QkFBd0IseUJBQXlCLDBCQUEwQixHQUFHLDRCQUE0QiwyQkFBMkIsR0FBRyxVQUFVLHVCQUF1QiwyQkFBMkIscUNBQXFDLGNBQWMsZUFBZSxHQUFHLDhCQUE4Qix5QkFBeUIscUJBQXFCLHVCQUF1QixvTEFBb0wsR0FBRyxnQkFBZ0IseUJBQXlCLHFCQUFxQix1QkFBdUIsbUxBQW1MLEdBQUcsZ0JBQWdCLHlCQUF5QixxQkFBcUIsdUJBQXVCLHVMQUF1TCxHQUFHLGlEQUFpRCxrQ0FBa0MsR0FBRyxnQkFBZ0IsaUNBQWlDLEdBQUcsZUFBZSxnQ0FBZ0MsR0FBRyxjQUFjLCtCQUErQixHQUFHLGVBQWUsZ0NBQWdDLEdBQUcsY0FBYywrQkFBK0IsR0FBRyxlQUFlLGdDQUFnQyxHQUFHLGdCQUFnQixpQ0FBaUMsR0FBRyxhQUFhLGtDQUFrQyxHQUFHLHFDQUFxQyxzQ0FBc0MsR0FBRyxpQkFBaUIscUNBQXFDLEdBQUcsZ0JBQWdCLG9DQUFvQyxHQUFHLGVBQWUsbUNBQW1DLEdBQUcsZ0JBQWdCLG9DQUFvQyxHQUFHLGVBQWUsbUNBQW1DLEdBQUcsZ0JBQWdCLG9DQUFvQyxHQUFHLGlCQUFpQixxQ0FBcUMsR0FBRyxjQUFjLHNDQUFzQyxHQUFHLHVDQUF1Qyx3Q0FBd0MsR0FBRyxpQkFBaUIsdUNBQXVDLEdBQUcsZ0JBQWdCLHNDQUFzQyxHQUFHLGVBQWUscUNBQXFDLEdBQUcsZ0JBQWdCLHNDQUFzQyxHQUFHLGVBQWUscUNBQXFDLEdBQUcsZ0JBQWdCLHNDQUFzQyxHQUFHLGlCQUFpQix1Q0FBdUMsR0FBRyxjQUFjLHdDQUF3QyxHQUFHLHdDQUF3Qyx5Q0FBeUMsR0FBRyxpQkFBaUIsd0NBQXdDLEdBQUcsZ0JBQWdCLHVDQUF1QyxHQUFHLGVBQWUsc0NBQXNDLEdBQUcsZ0JBQWdCLHVDQUF1QyxHQUFHLGVBQWUsc0NBQXNDLEdBQUcsZ0JBQWdCLHVDQUF1QyxHQUFHLGlCQUFpQix3Q0FBd0MsR0FBRyxjQUFjLHlDQUF5QyxHQUFHLHNDQUFzQyx1Q0FBdUMsR0FBRyxpQkFBaUIsc0NBQXNDLEdBQUcsZ0JBQWdCLHFDQUFxQyxHQUFHLGVBQWUsb0NBQW9DLEdBQUcsZ0JBQWdCLHFDQUFxQyxHQUFHLGVBQWUsb0NBQW9DLEdBQUcsZ0JBQWdCLHFDQUFxQyxHQUFHLGlCQUFpQixzQ0FBc0MsR0FBRyxjQUFjLHVDQUF1QyxHQUFHLCtCQUErQixpQ0FBaUMsR0FBRyxnQkFBZ0IsZ0NBQWdDLEdBQUcsZUFBZSwrQkFBK0IsR0FBRyxjQUFjLDhCQUE4QixHQUFHLGVBQWUsK0JBQStCLEdBQUcsY0FBYyw4QkFBOEIsR0FBRyxlQUFlLCtCQUErQixHQUFHLGdCQUFnQixnQ0FBZ0MsR0FBRyxhQUFhLGlDQUFpQyxHQUFHLG9DQUFvQyxxQ0FBcUMsR0FBRyxpQkFBaUIsb0NBQW9DLEdBQUcsZ0JBQWdCLG1DQUFtQyxHQUFHLGVBQWUsa0NBQWtDLEdBQUcsZ0JBQWdCLG1DQUFtQyxHQUFHLGVBQWUsa0NBQWtDLEdBQUcsZ0JBQWdCLG1DQUFtQyxHQUFHLGlCQUFpQixvQ0FBb0MsR0FBRyxjQUFjLHFDQUFxQyxHQUFHLHNDQUFzQyx1Q0FBdUMsR0FBRyxpQkFBaUIsc0NBQXNDLEdBQUcsZ0JBQWdCLHFDQUFxQyxHQUFHLGVBQWUsb0NBQW9DLEdBQUcsZ0JBQWdCLHFDQUFxQyxHQUFHLGVBQWUsb0NBQW9DLEdBQUcsZ0JBQWdCLHFDQUFxQyxHQUFHLGlCQUFpQixzQ0FBc0MsR0FBRyxjQUFjLHVDQUF1QyxHQUFHLHVDQUF1Qyx3Q0FBd0MsR0FBRyxpQkFBaUIsdUNBQXVDLEdBQUcsZ0JBQWdCLHNDQUFzQyxHQUFHLGVBQWUscUNBQXFDLEdBQUcsZ0JBQWdCLHNDQUFzQyxHQUFHLGVBQWUscUNBQXFDLEdBQUcsZ0JBQWdCLHNDQUFzQyxHQUFHLGlCQUFpQix1Q0FBdUMsR0FBRyxjQUFjLHdDQUF3QyxHQUFHLHFDQUFxQyxzQ0FBc0MsR0FBRyxpQkFBaUIscUNBQXFDLEdBQUcsZ0JBQWdCLG9DQUFvQyxHQUFHLGVBQWUsbUNBQW1DLEdBQUcsZ0JBQWdCLG9DQUFvQyxHQUFHLGVBQWUsbUNBQW1DLEdBQUcsZ0JBQWdCLG9DQUFvQyxHQUFHLGlCQUFpQixxQ0FBcUMsR0FBRyxjQUFjLHNDQUFzQyxHQUFHLHFDQUFxQyxrQkFBa0IsR0FBRyxhQUFhLG9CQUFvQixHQUFHLFlBQVksbUJBQW1CLEdBQUcsbUJBQW1CLDBCQUEwQixHQUFHLFdBQVcsa0JBQWtCLEdBQUcsa0JBQWtCLHlCQUF5QixHQUFHLGFBQWEsMkJBQTJCLEdBQUcscUJBQXFCLG1DQUFtQyxHQUFHLFVBQVUsd0JBQXdCLEdBQUcsa0JBQWtCLGdDQUFnQyxHQUFHLGdCQUFnQixvQkFBb0IsR0FBRyx3QkFBd0IsNEJBQTRCLEdBQUcsbUJBQW1CLHNCQUFzQixHQUFHLGtCQUFrQixtQkFBbUIsR0FBRyxxQkFBcUIsbUJBQW1CLEdBQUcsZ0JBQWdCLGlCQUFpQixHQUFHLG1CQUFtQixpQkFBaUIsR0FBRyw0QkFBNEIsZ0NBQWdDLEdBQUcsMEJBQTBCLDhCQUE4QixHQUFHLDZCQUE2Qiw0QkFBNEIsR0FBRyw4QkFBOEIsbUNBQW1DLEdBQUcsNkJBQTZCLGtDQUFrQyxHQUFHLHdCQUF3Qiw0QkFBNEIsR0FBRyxzQkFBc0IsMEJBQTBCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLDBCQUEwQix5QkFBeUIsR0FBRywwQkFBMEIsOEJBQThCLEdBQUcsd0JBQXdCLDRCQUE0QixHQUFHLDJCQUEyQiwwQkFBMEIsR0FBRyw0QkFBNEIsMkJBQTJCLEdBQUcsdUJBQXVCLDJCQUEyQixHQUFHLHFCQUFxQiwwQkFBMEIsR0FBRyx3QkFBd0IsdUJBQXVCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLGFBQWEsa0JBQWtCLHdCQUF3Qiw4Q0FBOEMsd0JBQXdCLG1CQUFtQixtQ0FBbUMsdUNBQXVDLDJDQUEyQyx5REFBeUQseUNBQXlDLCtCQUErQix1REFBdUQsMEJBQTBCLGtCQUFrQixrQ0FBa0MsOEJBQThCLDhCQUE4Qiw4QkFBOEIsOEJBQThCLEdBQUcsc0JBQXNCLGtDQUFrQyxHQUFHLHFFQUFxRSxvQ0FBb0MsR0FBRywrQkFBK0Isb0NBQW9DLEdBQUcsa0NBQWtDLGlDQUFpQyxHQUFHLDZGQUE2RixvQ0FBb0MsR0FBRywyQ0FBMkMsaUJBQWlCLEdBQUcsd0RBQXdELG1DQUFtQyxvQ0FBb0MseUJBQXlCLCtFQUErRSx5REFBeUQsR0FBRyxzS0FBc0ssa0NBQWtDLHVEQUF1RCxHQUFHLDBFQUEwRSxvQ0FBb0MseUJBQXlCLEdBQUcsb0NBQW9DLDZCQUE2QixzQkFBc0IsR0FBRyw2Q0FBNkMsbUNBQW1DLEdBQUcsaUdBQWlHLGlDQUFpQyx1REFBdUQsR0FBRyw2Q0FBNkMsaUNBQWlDLG1DQUFtQyxzQkFBc0IsaUJBQWlCLEdBQUcsc0RBQXNELGtDQUFrQyx1QkFBdUIsZUFBZSwyQ0FBMkMseURBQXlELG9CQUFvQixHQUFHLGtGQUFrRiwrQkFBK0IsR0FBRyx3RUFBd0Usb0JBQW9CLHlCQUF5QixHQUFHLG1DQUFtQyxzQkFBc0IsR0FBRyxpREFBaUQsK0JBQStCLEdBQUcsNENBQTRDLGlCQUFpQixHQUFHLGVBQWUsd0JBQXdCLG9CQUFvQixrQkFBa0IsK0JBQStCLHVCQUF1Qiw2REFBNkQscUNBQXFDLDBDQUEwQyxLQUFLLHFFQUFxRSxxQ0FBcUMsMENBQTBDLEtBQUssS0FBSyxvQkFBb0IsZUFBZSxnQkFBZ0IsaUJBQWlCLGNBQWMsZUFBZSxHQUFHLHNCQUFzQix3QkFBd0IseUJBQXlCLGtCQUFrQixtQ0FBbUMsdUNBQXVDLDJDQUEyQyx5Q0FBeUMsMERBQTBELHVCQUF1QixzREFBc0QsaUJBQWlCLDhCQUE4Qiw4QkFBOEIsOEJBQThCLDhCQUE4QixHQUFHLDZCQUE2QixvQ0FBb0MsOENBQThDLGdCQUFnQixtQkFBbUIsZ0JBQWdCLGlCQUFpQiw2QkFBNkIscUJBQXFCLEdBQUcsZ0RBQWdELHdCQUF3QixpQkFBaUIsR0FBRyxzREFBc0Qsa0NBQWtDLCtDQUErQyxrWUFBa1ksaUNBQWlDLGlDQUFpQyxrQ0FBa0MsR0FBRywrREFBK0Qsa0NBQWtDLG9DQUFvQyxHQUFHLGlCQUFpQix1QkFBdUIsZ0JBQWdCLGNBQWMsZUFBZSwwQkFBMEIsR0FBRyx1QkFBdUIsa0JBQWtCLDJCQUEyQix1QkFBdUIsZ0JBQWdCLGNBQWMsZUFBZSwwQkFBMEIsMkNBQTJDLEdBQUcsa0NBQWtDLHlDQUF5QyxHQUFHLHdCQUF3QixrQkFBa0Isd0JBQXdCLCtCQUErQix1Q0FBdUMsMkNBQTJDLDBEQUEwRCxvQ0FBb0MseUJBQXlCLDBCQUEwQixvQkFBb0IsOEJBQThCLDhCQUE4Qiw4QkFBOEIsOEJBQThCLEdBQUcsK0JBQStCLGdCQUFnQix1QkFBdUIsYUFBYSxjQUFjLG1CQUFtQixnQkFBZ0IsaUJBQWlCLGlCQUFpQiwrQ0FBK0MsOE9BQThPLGlDQUFpQyx1Q0FBdUMsR0FBRyxxQ0FBcUMsaUJBQWlCLEdBQUcsMEJBQTBCLHVDQUF1QywyQ0FBMkMsMERBQTBELG9DQUFvQyx5QkFBeUIsMkZBQTJGLGtCQUFrQiw4QkFBOEIsOEJBQThCLDhCQUE4Qiw4QkFBOEIseUJBQXlCLEdBQUcsMEJBQTBCLHlDQUF5QyxHQUFHLGdEQUFnRCxtQkFBbUIseUNBQXlDLEdBQUcscURBQXFELGlCQUFpQiwrQ0FBK0MsaVBBQWlQLEdBQUcsV0FBVyxrQkFBa0Isd0JBQXdCLDRCQUE0QixvQkFBb0IsOEJBQThCLCtCQUErQixtQ0FBbUMsdUNBQXVDLDhCQUE4Qiw4QkFBOEIsOEJBQThCLDhCQUE4QixtQ0FBbUMsR0FBRyxpQkFBaUIscURBQXFELHFEQUFxRCxHQUFHLGlDQUFpQyxVQUFVLDhCQUE4QixLQUFLLFFBQVEsZ0NBQWdDLEtBQUssR0FBRyx5QkFBeUIsVUFBVSw4QkFBOEIsS0FBSyxRQUFRLGdDQUFnQyxLQUFLLEdBQUcsaUJBQWlCLDZHQUE2Ryw2R0FBNkcsR0FBRyxtQkFBbUIsOEdBQThHLDhHQUE4RyxHQUFHLG9CQUFvQiw2R0FBNkcsNkdBQTZHLEdBQUcscUJBQXFCLDhHQUE4Ryw4R0FBOEcsR0FBRyxrQkFBa0IsNkdBQTZHLDZHQUE2RyxHQUFHLGdCQUFnQiw0R0FBNEcsNEdBQTRHLEdBQUcsbUJBQW1CLDRHQUE0Ryw0R0FBNEcsR0FBRyxrQkFBa0IsNEdBQTRHLDRHQUE0RyxHQUFHLG1CQUFtQiwwR0FBMEcsMEdBQTBHLEdBQUcsbUJBQW1CLDRHQUE0Ryw0R0FBNEcsR0FBRyxrQkFBa0IsNkdBQTZHLDZHQUE2RyxHQUFHLG1CQUFtQix3R0FBd0csd0dBQXdHLEdBQUcsbUJBQW1CLDJHQUEyRywyR0FBMkcsR0FBRyxtQkFBbUIsK0NBQStDLGdaQUFnWixHQUFHLGtCQUFrQiwrQ0FBK0MsNmVBQTZlLEdBQUcsa0JBQWtCLCtDQUErQyx1T0FBdU8sR0FBRyw2QkFBNkIsK0NBQStDLDZSQUE2UixHQUFHLG9CQUFvQiwrQ0FBK0MseVJBQXlSLEdBQUcsbUNBQW1DLCtDQUErQyxzT0FBc08sR0FBRyxpQ0FBaUMsK0NBQStDLHVPQUF1TyxHQUFHLGlCQUFpQiwrQ0FBK0MsZ1BBQWdQLEdBQUcsd0JBQXdCLCtDQUErQyxva0JBQW9rQixHQUFHLGtCQUFrQiwrQ0FBK0Msc2lCQUFzaUIsR0FBRyxrQkFBa0IsK0NBQStDLG1nQkFBbWdCLEdBQUcsdUJBQXVCLCtDQUErQyxzSkFBc0osR0FBRyx1QkFBdUIsK0NBQStDLHFKQUFxSixHQUFHLHdCQUF3QiwrQ0FBK0Msc0pBQXNKLEdBQUcscUJBQXFCLCtDQUErQyxzSkFBc0osR0FBRyxrQkFBa0IsK0NBQStDLHdQQUF3UCxHQUFHLGtCQUFrQiwrQ0FBK0MsdVFBQXVRLEdBQUcsc0JBQXNCLCtDQUErQyw4ZkFBOGYsR0FBRywwQkFBMEIsK0NBQStDLDZOQUE2TixHQUFHLG9CQUFvQiwrQ0FBK0MsMFBBQTBQLEdBQUcsMENBQTBDLCtDQUErQyw2TUFBNk0sR0FBRyx3Q0FBd0MsK0NBQStDLDBNQUEwTSxHQUFHLGtCQUFrQiwrQ0FBK0MsMlBBQTJQLEdBQUcsb0JBQW9CLCtDQUErQyxpaUJBQWlpQixHQUFHLHFCQUFxQiwrQ0FBK0MseVNBQXlTLEdBQUcsdUJBQXVCLCtDQUErQywwWEFBMFgsR0FBRyxvQkFBb0IsK0NBQStDLCtPQUErTyxHQUFHLGtCQUFrQiwrQ0FBK0MsbVFBQW1RLEdBQUcsa0JBQWtCLCtDQUErQyx3VUFBd1UsR0FBRyxtQkFBbUIsK0NBQStDLG1mQUFtZixHQUFHLCtCQUErQiwrQ0FBK0MsbVFBQW1RLEdBQUcsc0JBQXNCLCtDQUErQyx3Y0FBd2MsR0FBRyxrQkFBa0IsK0NBQStDLGliQUFpYixHQUFHLHFCQUFxQiwrQ0FBK0MseU9BQXlPLEdBQUcsZ0JBQWdCLCtDQUErQyxrZEFBa2QsR0FBRyxnQ0FBZ0MsK0NBQStDLCtOQUErTixHQUFHLHFDQUFxQywrQ0FBK0MsaU1BQWlNLEdBQUcsdUJBQXVCLCtDQUErQywyTUFBMk0sR0FBRyx3QkFBd0IsK0NBQStDLDRNQUE0TSxHQUFHLHNCQUFzQiwrQ0FBK0MsMk1BQTJNLEdBQUcsbUNBQW1DLCtDQUErQyxtTUFBbU0sR0FBRyxnQ0FBZ0MsK0NBQStDLGlNQUFpTSxHQUFHLDZCQUE2QiwrQ0FBK0MsK0xBQStMLEdBQUcsZ0NBQWdDLCtDQUErQyx3UkFBd1IsR0FBRyxvQkFBb0IsK0NBQStDLCtsQ0FBK2xDLEdBQUcsd0JBQXdCLCtDQUErQyxpUEFBaVAsR0FBRywyQkFBMkIsK0NBQStDLDRSQUE0UixHQUFHLDBCQUEwQiwrQ0FBK0MsMk9BQTJPLEdBQUcsc0JBQXNCLCtDQUErQyx5UkFBeVIsR0FBRyxpQkFBaUIsK0NBQStDLG1OQUFtTixHQUFHLHFCQUFxQiwrQ0FBK0MsMFFBQTBRLEdBQUcsb0JBQW9CLCtDQUErQywwVEFBMFQsR0FBRyxrQkFBa0IsK0NBQStDLDZKQUE2SixHQUFHLGlCQUFpQiwrQ0FBK0Msd09BQXdPLEdBQUcsaUJBQWlCLCtDQUErQywrS0FBK0ssR0FBRyxtQkFBbUIsK0NBQStDLDgzQkFBODNCLEdBQUcsbUJBQW1CLCtDQUErQyxzU0FBc1MsR0FBRywwQkFBMEIsK0NBQStDLG1YQUFtWCxHQUFHLDJCQUEyQiwrQ0FBK0MscVJBQXFSLEdBQUcsb0JBQW9CLCtDQUErQyx3VkFBd1YsR0FBRyxvQkFBb0IsK0NBQStDLDhrQkFBOGtCLEdBQUcseUJBQXlCLCtDQUErQyx3UUFBd1EsR0FBRyxtQkFBbUIsK0NBQStDLDBTQUEwUyxHQUFHLHFCQUFxQiwrQ0FBK0MsbTZDQUFtNkMsR0FBRyxrQkFBa0IsK0NBQStDLDBnQkFBMGdCLEdBQUcsbUJBQW1CLCtDQUErQyxvZEFBb2QsR0FBRywyQkFBMkIsK0NBQStDLHNaQUFzWixHQUFHLDJCQUEyQiwrQ0FBK0Msa1pBQWtaLEdBQUcsNEJBQTRCLCtDQUErQyx1VkFBdVYsR0FBRyxvQkFBb0IsK0NBQStDLHNNQUFzTSxHQUFHLG9CQUFvQiwrQ0FBK0MsK1FBQStRLEdBQUcscUJBQXFCLCtDQUErQyxxV0FBcVcsR0FBRyxvQkFBb0IsK0NBQStDLDhNQUE4TSxHQUFHLDBCQUEwQiwrQ0FBK0MsME5BQTBOLEdBQUcsbUJBQW1CLCtDQUErQyw4VEFBOFQsR0FBRyxpQkFBaUIsK0NBQStDLG9hQUFvYSxHQUFHLGtCQUFrQiwrQ0FBK0Msc2ZBQXNmLEdBQUcseUJBQXlCLCtDQUErQyxxUkFBcVIsR0FBRyxvQ0FBb0MsK0NBQStDLDRNQUE0TSxHQUFHLGtDQUFrQywrQ0FBK0MsMk1BQTJNLEdBQUcsa0JBQWtCLCtDQUErQywrYkFBK2IsR0FBRyxrQkFBa0IsK0NBQStDLHlZQUF5WSxHQUFHLDZCQUE2QiwrQ0FBK0MsbVFBQW1RLEdBQUcsb0JBQW9CLCtDQUErQyxzYkFBc2IsR0FBRywwQkFBMEIsK0NBQStDLHdOQUF3TixHQUFHLG9CQUFvQiwrQ0FBK0MsNE5BQTROLEdBQUcsa0JBQWtCLGtCQUFrQix3QkFBd0IsNEJBQTRCLG9CQUFvQiw4QkFBOEIsK0JBQStCLDhDQUE4QyxrQ0FBa0MsR0FBRyxvQkFBb0IsNEdBQTRHLDRHQUE0RyxHQUFHLHdCQUF3QixrQ0FBa0MsR0FBRyw2Q0FBNkMsa0NBQWtDLGtCQUFrQixHQUFHLDRCQUE0QixrQ0FBa0MsR0FBRyxrQ0FBa0Msa0NBQWtDLEdBQUcsaUVBQWlFLG9DQUFvQyxHQUFHLDhCQUE4Qiw2R0FBNkcsNkdBQTZHLEdBQUcsWUFBWSx1QkFBdUIsR0FBRyxtQkFBbUIsdUNBQXVDLDJDQUEyQywwREFBMEQsb0NBQW9DLHVCQUF1QixrQkFBa0Isc0JBQXNCLHdCQUF3QixnQkFBZ0IsaUJBQWlCLHdCQUF3Qiw4RkFBOEYseUJBQXlCLGtDQUFrQyw4Q0FBOEMsa0JBQWtCLG1DQUFtQyxHQUFHLGdFQUFnRSx5QkFBeUIsb0NBQW9DLDJCQUEyQixHQUFHLG1DQUFtQyx3QkFBd0IsbUNBQW1DLEdBQUcsOEJBQThCLHdCQUF3QixtQ0FBbUMsR0FBRyw4Q0FBOEMseUJBQXlCLGtDQUFrQyxHQUFHLHFDQUFxQyx5QkFBeUIsa0NBQWtDLEdBQUcseUNBQXlDLHlCQUF5QixrQ0FBa0MsR0FBRywwQ0FBMEMseUJBQXlCLGtDQUFrQyxHQUFHLGdDQUFnQyx5QkFBeUIsa0NBQWtDLEdBQUcscUNBQXFDLG9DQUFvQyxHQUFHLDJDQUEyQyxrQ0FBa0MsbUNBQW1DLHlCQUF5QixHQUFHLGtDQUFrQyxrQ0FBa0MsR0FBRywrQ0FBK0Msd0JBQXdCLGtDQUFrQyxtQ0FBbUMseUJBQXlCLEdBQUcsNEJBQTRCLHVCQUF1Qix5QkFBeUIsOEJBQThCLDhCQUE4Qiw4QkFBOEIsOEJBQThCLEdBQUcsbUNBQW1DLGtCQUFrQixHQUFHLHFDQUFxQyx1QkFBdUIsR0FBRyxrQkFBa0IsdUJBQXVCLGFBQWEsWUFBWSw4QkFBOEIsK0JBQStCLGVBQWUsaUJBQWlCLEdBQUcsWUFBWSx1Q0FBdUMsMkNBQTJDLDBEQUEwRCxvQ0FBb0MseUJBQXlCLCtCQUErQixnQkFBZ0Isa0JBQWtCLHdCQUF3QixvQkFBb0IsOEJBQThCLDhCQUE4Qiw4QkFBOEIsOEJBQThCLDBEQUEwRCxHQUFHLHFCQUFxQixrQkFBa0IscUJBQXFCLHNDQUFzQyxHQUFHLDJCQUEyQixzQ0FBc0MsR0FBRywwQkFBMEIseURBQXlELHVDQUF1QywyQ0FBMkMsMERBQTBELG9DQUFvQyx5QkFBeUIsY0FBYyxHQUFHLFlBQVksd0JBQXdCLG9CQUFvQixrQkFBa0IsK0JBQStCLHVCQUF1QixHQUFHLG9CQUFvQixlQUFlLGdCQUFnQixpQkFBaUIsY0FBYyxlQUFlLEdBQUcsbURBQW1ELHdQQUF3UCxpQ0FBaUMsaUNBQWlDLEdBQUcsNkNBQTZDLGlCQUFpQixHQUFHLDREQUE0RCxtQ0FBbUMsR0FBRyxtQkFBbUIsd0JBQXdCLHlCQUF5QixrQkFBa0IsbUNBQW1DLHVDQUF1QywyQ0FBMkMseUNBQXlDLDBEQUEwRCx1QkFBdUIsc0RBQXNELGlCQUFpQiw4QkFBOEIsOEJBQThCLDhCQUE4Qiw4QkFBOEIsR0FBRywwQkFBMEIsb0NBQW9DLDhDQUE4QyxnQkFBZ0IsbUJBQW1CLGdCQUFnQixpQkFBaUIsNEJBQTRCLHVCQUF1QixHQUFHLG9CQUFvQix1Q0FBdUMseUNBQXlDLDBEQUEwRCxvQ0FBb0MseUJBQXlCLCtCQUErQixnQkFBZ0Isa0JBQWtCLHdCQUF3QixvQkFBb0IsOEJBQThCLDhCQUE4Qiw4QkFBOEIsOEJBQThCLG1FQUFtRSxHQUFHLHdCQUF3QixrQkFBa0IsR0FBRyxrQkFBa0IsdUJBQXVCLEdBQUcsMEJBQTBCLGtCQUFrQix3QkFBd0Isa0NBQWtDLGlCQUFpQixnQkFBZ0Isd0JBQXdCLDZEQUE2RCx1QkFBdUIsOENBQThDLG1DQUFtQyxHQUFHLGdDQUFnQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0Msa0NBQWtDLG1DQUFtQyx5QkFBeUIsR0FBRyx5Q0FBeUMsZ0NBQWdDLDhCQUE4QixHQUFHLDRCQUE0Qix5QkFBeUIsR0FBRyxpRUFBaUUseUJBQXlCLEdBQUcsaUVBQWlFLHlCQUF5QixHQUFHLDBFQUEwRSx5QkFBeUIsR0FBRyxvR0FBb0csaUJBQWlCLHNCQUFzQixHQUFHLDZEQUE2RCxpQkFBaUIsdUJBQXVCLEdBQUcsdURBQXVELHlCQUF5QixHQUFHLHlCQUF5Qix1Q0FBdUMsMkNBQTJDLDBEQUEwRCxvQ0FBb0MseUJBQXlCLHNCQUFzQixxQkFBcUIsd0JBQXdCLHVCQUF1Qiw0QkFBNEIsR0FBRyxzQ0FBc0MseUJBQXlCLEdBQUcseUJBQXlCLGdCQUFnQixpQkFBaUIsbUJBQW1CLHFCQUFxQix1QkFBdUIsK0NBQStDLHFYQUFxWCxpQ0FBaUMsdUNBQXVDLGlCQUFpQixHQUFHLHdCQUF3QixzQkFBc0IscUJBQXFCLG9CQUFvQixpQkFBaUIsR0FBRyx3QkFBd0Isa0JBQWtCLHVCQUF1QixXQUFXLFlBQVksZ0JBQWdCLGlDQUFpQyxrQ0FBa0MseURBQXlELDhDQUE4QyxjQUFjLGtCQUFrQix3QkFBd0IscUJBQXFCLEdBQUcsZ0NBQWdDLG1CQUFtQixHQUFHLDJDQUEyQyxnQkFBZ0Isa0NBQWtDLHlDQUF5QyxxR0FBcUcsOEJBQThCLCtCQUErQixHQUFHLGlEQUFpRCxrQ0FBa0MsZ0RBQWdELEdBQUcsaURBQWlELGtDQUFrQyx1QkFBdUIsNkRBQTZELEdBQUcsd0JBQXdCLHdCQUF3Qix3QkFBd0Isb0JBQW9CLGtCQUFrQixtQ0FBbUMsc0NBQXNDLDJDQUEyQywwREFBMEQseUNBQXlDLDhCQUE4Qiw0REFBNEQsOEJBQThCLDhCQUE4Qiw4QkFBOEIsOEJBQThCLGtCQUFrQixHQUFHLDBEQUEwRCxpQkFBaUIsR0FBRyw4QkFBOEIsdUJBQXVCLHdCQUF3Qiw0QkFBNEIseUJBQXlCLEdBQUcsNkJBQTZCLDhCQUE4QiwrQkFBK0Isc0NBQXNDLGVBQWUseUJBQXlCLCtDQUErQyx3WkFBd1osaUNBQWlDLHVDQUF1QyxHQUFHLGlGQUFpRixrQ0FBa0MsR0FBRyxpQ0FBaUMsc0NBQXNDLDJDQUEyQyx5REFBeUQsb0NBQW9DLGtCQUFrQix3QkFBd0IsOEJBQThCLHdEQUF3RCx5QkFBeUIsa0JBQWtCLEdBQUcsMkJBQTJCLG9DQUFvQyxtQkFBbUIsZ0JBQWdCLHdCQUF3QixHQUFHLGFBQWEsd0JBQXdCLG9CQUFvQixrQkFBa0IsK0JBQStCLHVCQUF1QiwrQ0FBK0MsNENBQTRDLE9BQU8sV0FBVyxxQkFBcUIsZUFBZSxHQUFHLHFEQUFxRCx5QkFBeUIsMkNBQTJDLEdBQUcsb0RBQW9ELGdDQUFnQyxHQUFHLDhEQUE4RCxtQ0FBbUMsbUNBQW1DLEdBQUcsK0NBQStDLHdCQUF3QixpQkFBaUIsR0FBRyxvQkFBb0Isd0JBQXdCLHlCQUF5QixrQkFBa0IsbUNBQW1DLHVDQUF1QywyQ0FBMkMsaUJBQWlCLDBEQUEwRCx5Q0FBeUMsdUJBQXVCLG1FQUFtRSw4QkFBOEIsOEJBQThCLDhCQUE4Qiw4QkFBOEIsR0FBRywyQkFBMkIsbUNBQW1DLDJDQUEyQyx1QkFBdUIsZ0JBQWdCLG1CQUFtQixpQkFBaUIsY0FBYyx1QkFBdUIsY0FBYyx3Q0FBd0MsZ0JBQWdCLEdBQUcsMEJBQTBCLG1DQUFtQywyQ0FBMkMsdUJBQXVCLGdCQUFnQixtQkFBbUIsaUJBQWlCLGNBQWMsdUJBQXVCLGNBQWMsK0JBQStCLGdCQUFnQixHQUFHLGVBQWUsdUNBQXVDLDJDQUEyQywwREFBMEQsb0NBQW9DLHVCQUF1QixrQkFBa0Isc0JBQXNCLHdCQUF3QixnQkFBZ0IscUJBQXFCLHdCQUF3Qiw4RkFBOEYseUJBQXlCLG9DQUFvQyw4Q0FBOEMsa0JBQWtCLG1DQUFtQyxpQkFBaUIscUJBQXFCLEdBQUcsd0RBQXdELHlCQUF5QixvQ0FBb0MsMkJBQTJCLEdBQUcsK0JBQStCLHdCQUF3QixtQ0FBbUMsR0FBRywwQkFBMEIsd0JBQXdCLG1DQUFtQyxHQUFHLDBDQUEwQyx5QkFBeUIsa0NBQWtDLEdBQUcsaUNBQWlDLHlCQUF5QixrQ0FBa0MsR0FBRyxxQ0FBcUMseUJBQXlCLGtDQUFrQyxHQUFHLHNDQUFzQyx5QkFBeUIsa0NBQWtDLEdBQUcsNEJBQTRCLHlCQUF5QixrQ0FBa0MsR0FBRyx1Q0FBdUMsa0NBQWtDLG1DQUFtQyx5QkFBeUIsR0FBRyx1Q0FBdUMsd0JBQXdCLGtDQUFrQyxtQ0FBbUMseUJBQXlCLEdBQUcsa0RBQWtELHVCQUF1Qix5QkFBeUIsa0NBQWtDLEdBQUcsK0JBQStCLGtCQUFrQixHQUFHLFdBQVcsbUNBQW1DLHVDQUF1QywyQ0FBMkMseUNBQXlDLDBEQUEwRCxpR0FBaUcsa0JBQWtCLHNDQUFzQyx5REFBeUQsR0FBRyxrQkFBa0Isc0NBQXNDLCtDQUErQyx5REFBeUQsR0FBRyxtQkFBbUIsdUNBQXVDLCtDQUErQywwREFBMEQsR0FBRyxtQkFBbUIsMkNBQTJDLEdBQUcsaUJBQWlCLHlDQUF5QyxHQUFHLG9CQUFvQiwwREFBMEQsR0FBRyxtQ0FBbUMseURBQXlELEdBQUcsbUNBQW1DLHlEQUF5RCxHQUFHLG9DQUFvQywwREFBMEQsR0FBRyxtQkFBbUIsMEJBQTBCLEdBQUc7QUFDMXJ3RTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLFVBQVUsMkJBQTJCLDJCQUEyQix3QkFBd0IsMkJBQTJCLGdDQUFnQyxHQUFHLFVBQVUsbUJBQW1CLEdBQUcsMkNBQTJDLG9CQUFvQixHQUFHLGdCQUFnQix3QkFBd0Isa0NBQWtDLEdBQUcsdURBQXVELHFCQUFxQixHQUFHLG9CQUFvQixrQ0FBa0Msb0JBQW9CLGlEQUFpRCwwQ0FBMEMsK0JBQStCLHNCQUFzQixHQUFHLDBCQUEwQiw4QkFBOEIsR0FBRyxzREFBc0Qsb0JBQW9CLDZCQUE2Qix1QkFBdUIsR0FBRyxpQkFBaUIsMEJBQTBCLEdBQUcsd0JBQXdCLGtDQUFrQyxvQkFBb0IsNkJBQTZCLDBDQUEwQyxrQkFBa0IsR0FBRyw2QkFBNkIsa0JBQWtCLDBDQUEwQyxHQUFHO0FBQ3huQztBQUNBOzs7Ozs7Ozs7Ozs7O0FDTmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCOztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxjQUFjO0FBQ25FO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDN0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDOEc7QUFDOUc7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsMkRBQWlCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtREFBUztBQUNqQztBQUNBO0FBQ0Esd0JBQXdCLDhEQUFvQjtBQUM1QztBQUNBLDhCQUE4Qiw0REFBa0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0RBQVE7QUFDM0I7QUFDQTtBQUNPO0FBQ1Asc0Q7Ozs7Ozs7Ozs7OztBQ25EQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUMsS0FBSyxRQUFRO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnQkFBZ0I7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNO0FBQ1A7QUFDQTtBQUNBLHFDOzs7Ozs7Ozs7Ozs7QUM5REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCOzs7Ozs7Ozs7Ozs7QUMzQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUCxnQzs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkM7QUFDTjtBQUNPO0FBQ1k7QUFDSjtBQUNUO0FBQ3RDO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIs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QywrQkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxzQkFBc0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLDBCQUEwQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxvQzs7Ozs7Ozs7Ozs7O0FDdE5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQzs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0wsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNuZEQsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyw0R0FBbUQ7O0FBRXJGOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ29FO0FBQ3ZCO0FBQ0Q7QUFDMUI7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxpQkFBaUIsMENBQTBDLEVBQUU7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxvQ0FBb0MsdUVBQUksSUFBSSxVQUFVO0FBQ3RELCtCQUErQix1RUFBSSwyQkFBMkIsS0FBSztBQUNuRSxnQ0FBZ0MsdUVBQUk7QUFDcEMsd0JBQXdCLEtBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaUZBQU07QUFDViIsImZpbGUiOiJ1aS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3VpLnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIFZhcnMgKi9cXG46cm9vdCB7XFxuICAvKiBDT0xPUlMgKi9cXG4gIC8qIEFjY2VudCAqL1xcbiAgLS1ibHVlOiAjMThhMGZiO1xcbiAgLS1wdXJwbGU6ICM3YjYxZmY7XFxuICAtLWhvdC1waW5rOiAjZmYwMGZmO1xcbiAgLS1ncmVlbjogIzFiYzQ3ZDtcXG4gIC0tcmVkOiAjZjI0ODIyO1xcbiAgLS15ZWxsb3c6ICNmZmViMDA7XFxuICAvKiBCYXNpYyBmb3JlZ3JvdW5kICovXFxuICAtLWJsYWNrOiAjMDAwMDAwO1xcbiAgLS1ibGFjazg6IHJnYmEoMCwgMCwgMCwgLjgpO1xcbiAgLS1ibGFjazgtb3BhcXVlOiAjMzMzMzMzO1xcbiAgLS1ibGFjazM6IHJnYmEoMCwgMCwgMCwgLjMpO1xcbiAgLS1ibGFjazMtb3BhcXVlOiAjQjNCM0IzO1xcbiAgLS13aGl0ZTogI2ZmZmZmZjtcXG4gIC0td2hpdGU4OiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcXG4gIC0td2hpdGU0OiByZ2JhKDI1NSwgMjU1LCAyNTUsIC40KTtcXG4gIC8qIEJhc2ljIGJhY2tncm91bmQgKi9cXG4gIC0tZ3JleTogI2YwZjBmMDtcXG4gIC0tc2lsdmVyOiAjZTVlNWU1O1xcbiAgLS1odWQ6ICMyMjIyMjI7XFxuICAtLXRvb2xiYXI6ICMyYzJjMmM7XFxuICAvKiBTcGVjaWFsICovXFxuICAtLWJsYWNrMTogcmdiYSgwLCAwLCAwLCAuMSk7XFxuICAtLWJsdWUzOiByZ2JhKDI0LCAxNDUsIDI1MSwgLjMpO1xcbiAgLS1wdXJwbGU0OiByZ2JhKDEyMywgOTcsIDI1NSwgLjQpO1xcbiAgLS1ob3Zlci1maWxsOiByZ2JhKDAsIDAsIDAsIC4wNik7XFxuICAtLXNlbGVjdGlvbi1hOiAjZGFlYmY3O1xcbiAgLS1zZWxlY3Rpb24tYjogI2VkZjVmYTtcXG4gIC0td2hpdGUyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yKTtcXG4gIC8qIFRZUE9HUkFQSFkgKi9cXG4gIC8qIFBvcyA9IHBvc2l0aXZlIGFwcGxpY2F0aW9ucyAoYmxhY2sgb24gd2hpdGUpICovXFxuICAvKiBOZWcgPSBuZWdhdGl2ZSBhcHBsaWNhdGlvbnMgKHdoaXRlIG9uIGJsYWNrKSAqL1xcbiAgLyogRm9udCBzdGFjayAqL1xcbiAgLS1mb250LXN0YWNrOiAnSW50ZXInLCBzYW5zLXNlcmlmO1xcbiAgLyogRm9udCBzaXplcyAqL1xcbiAgLS1mb250LXNpemUteHNtYWxsOiAxMXB4O1xcbiAgLS1mb250LXNpemUtc21hbGw6IDEycHg7XFxuICAtLWZvbnQtc2l6ZS1sYXJnZTogMTNweDtcXG4gIC0tZm9udC1zaXplLXhsYXJnZTogMTRweDtcXG4gIC8qIEZvbnQgd2VpZ2h0cyAqL1xcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcXG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XFxuICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDYwMDtcXG4gIC8qIExpbmVoZWlnaHQgKi9cXG4gIC0tZm9udC1saW5lLWhlaWdodDogMTZweDtcXG4gIC8qIFVzZSBGb3IgeHNtYWxsLCBzbWFsbCBmb250IHNpemVzICovXFxuICAtLWZvbnQtbGluZS1oZWlnaHQtbGFyZ2U6IDI0cHg7XFxuICAvKiBVc2UgRm9yIGxhcmdlLCB4bGFyZ2UgZm9udCBzaXplcyAqL1xcbiAgLyogTGV0dGVyc3BhY2luZyAqL1xcbiAgLS1mb250LWxldHRlci1zcGFjaW5nLXBvcy14c21hbGw6IC4wMDVlbTtcXG4gIC0tZm9udC1sZXR0ZXItc3BhY2luZy1uZWcteHNtYWxsOiAuMDFlbTtcXG4gIC0tZm9udC1sZXR0ZXItc3BhY2luZy1wb3Mtc21hbGw6IDA7XFxuICAtLWZvbnQtbGV0dGVyLXNwYWNpbmctbmVnLXNtYWxsOiAuMDA1ZW07XFxuICAtLWZvbnQtbGV0dGVyLXNwYWNpbmctcG9zLWxhcmdlOiAtLjAwMjVlbTtcXG4gIC0tZm9udC1sZXR0ZXItc3BhY2luZy1uZWctbGFyZ2U6IC4wMDI1ZW07XFxuICAtLWZvbnQtbGV0dGVyLXNwYWNpbmctcG9zLXhsYXJnZTogLS4wMDFlbTtcXG4gIC0tZm9udC1sZXR0ZXItc3BhY2luZy1uZWcteGxhcmdlOiAtLjAwMWVtO1xcbiAgLyogQk9SREVSIFJBRElVUyAqL1xcbiAgLS1ib3JkZXItcmFkaXVzLXNtYWxsOiAycHg7XFxuICAtLWJvcmRlci1yYWRpdXMtbWVkOiA1cHg7XFxuICAtLWJvcmRlci1yYWRpdXMtbGFyZ2U6IDZweDtcXG4gIC8qIFNIQURPV1MgKi9cXG4gIC0tc2hhZG93LWh1ZDogMCA1cHggMTdweCByZ2JhKDAsIDAsIDAsIC4yKSwgMCAycHggN3B4IHJnYmEoMCwgMCwgMCwgLjE1KTtcXG4gIC0tc2hhZG93LWZsb2F0aW5nLXdpbmRvdzogMCAycHggMTRweCByZ2JhKDAsIDAsIDAsIC4xNSk7XFxuICAvKiBTUEFDSU5HICsgU0laSU5HICovXFxuICAtLXNpemUteHh4c21hbGw6IDRweDtcXG4gIC0tc2l6ZS14eHNtYWxsOiA4cHg7XFxuICAtLXNpemUteHNtYWxsOiAxNnB4O1xcbiAgLS1zaXplLXNtYWxsOiAyNHB4O1xcbiAgLS1zaXplLW1lZGl1bTogMzJweDtcXG4gIC0tc2l6ZS1sYXJnZTogNDBweDtcXG4gIC0tc2l6ZS14bGFyZ2U6IDQ4cHg7XFxuICAtLXNpemUteHhsYXJnZTogNjRweDtcXG4gIC0tc2l6ZS14eHhsYXJnZTogODBweDtcXG59XFxuXFxuLyogR2xvYmFsIHN0eWxlcyAqL1xcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiAgRk9OVFMgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIHNyYzogdXJsKFxcXCJodHRwczovL3JzbXMubWUvaW50ZXIvZm9udC1maWxlcy9JbnRlci1SZWd1bGFyLndvZmYyP3Y9My43XFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXFxcImh0dHBzOi8vcnNtcy5tZS9pbnRlci9mb250LWZpbGVzL0ludGVyLVJlZ3VsYXIud29mZj92PTMuN1xcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIHNyYzogdXJsKFxcXCJodHRwczovL3JzbXMubWUvaW50ZXIvZm9udC1maWxlcy9JbnRlci1NZWRpdW0ud29mZjI/dj0zLjdcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcXFwiaHR0cHM6Ly9yc21zLm1lL2ludGVyL2ZvbnQtZmlsZXMvSW50ZXItTWVkaXVtLndvZmYyP3Y9My43XFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdJbnRlcic7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgc3JjOiB1cmwoXFxcImh0dHBzOi8vcnNtcy5tZS9pbnRlci9mb250LWZpbGVzL0ludGVyLVNlbWlCb2xkLndvZmYyP3Y9My43XFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXFxcImh0dHBzOi8vcnNtcy5tZS9pbnRlci9mb250LWZpbGVzL0ludGVyLVNlbWlCb2xkLndvZmYyP3Y9My43XFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcblxcbi8qIFVUSUxJVElFUyAqL1xcbi8qIHBhZGRpbmcgKi9cXG4ucC14eHhzbWFsbCB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXh4eHNtYWxsKTtcXG59XFxuXFxuLnAteHhzbWFsbCB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXh4c21hbGwpO1xcbn1cXG5cXG4ucC14c21hbGwge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS14c21hbGwpO1xcbn1cXG5cXG4ucC1zbWFsbCB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXNtYWxsKTtcXG59XFxuXFxuLnAtbWVkaXVtIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtbWVkaXVtKTtcXG59XFxuXFxuLnAtbGFyZ2Uge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS1sYXJnZSk7XFxufVxcblxcbi5wLXhsYXJnZSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXhsYXJnZSk7XFxufVxcblxcbi5wLXh4bGFyZ2Uge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS14eGxhcmdlKTtcXG59XFxuXFxuLnAtaHVnZSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXh4eGxhcmdlKTtcXG59XFxuXFxuLyogcGFkZGluZyB0b3AgKi9cXG4ucHQteHh4c21hbGwge1xcbiAgcGFkZGluZy10b3A6IHZhcigtLXNpemUteHh4c21hbGwpO1xcbn1cXG5cXG4ucHQteHhzbWFsbCB7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tc2l6ZS14eHNtYWxsKTtcXG59XFxuXFxuLnB0LXhzbWFsbCB7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tc2l6ZS14c21hbGwpO1xcbn1cXG5cXG4ucHQtc21hbGwge1xcbiAgcGFkZGluZy10b3A6IHZhcigtLXNpemUtc21hbGwpO1xcbn1cXG5cXG4ucHQtbWVkaXVtIHtcXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1zaXplLW1lZGl1bSk7XFxufVxcblxcbi5wdC1sYXJnZSB7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tc2l6ZS1sYXJnZSk7XFxufVxcblxcbi5wdC14bGFyZ2Uge1xcbiAgcGFkZGluZy10b3A6IHZhcigtLXNpemUteGxhcmdlKTtcXG59XFxuXFxuLnB0LXh4bGFyZ2Uge1xcbiAgcGFkZGluZy10b3A6IHZhcigtLXNpemUteHhsYXJnZSk7XFxufVxcblxcbi5wdC1odWdlIHtcXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1zaXplLXh4eGxhcmdlKTtcXG59XFxuXFxuLyogcGFkZGluZyByaWdodCAqL1xcbi5wci14eHhzbWFsbCB7XFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zaXplLXh4eHNtYWxsKTtcXG59XFxuXFxuLnByLXh4c21hbGwge1xcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tc2l6ZS14eHNtYWxsKTtcXG59XFxuXFxuLnByLXhzbWFsbCB7XFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zaXplLXhzbWFsbCk7XFxufVxcblxcbi5wci1zbWFsbCB7XFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zaXplLXNtYWxsKTtcXG59XFxuXFxuLnByLW1lZGl1bSB7XFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zaXplLW1lZGl1bSk7XFxufVxcblxcbi5wci1sYXJnZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zaXplLWxhcmdlKTtcXG59XFxuXFxuLnByLXhsYXJnZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zaXplLXhsYXJnZSk7XFxufVxcblxcbi5wci14eGxhcmdlIHtcXG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXNpemUteHhsYXJnZSk7XFxufVxcblxcbi5wci1odWdlIHtcXG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXNpemUteHh4bGFyZ2UpO1xcbn1cXG5cXG4vKiBwYWRkaW5nIGJvdHRvbSAqL1xcbi5wYi14eHhzbWFsbCB7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc2l6ZS14eHhzbWFsbCk7XFxufVxcblxcbi5wYi14eHNtYWxsIHtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zaXplLXh4c21hbGwpO1xcbn1cXG5cXG4ucGIteHNtYWxsIHtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zaXplLXhzbWFsbCk7XFxufVxcblxcbi5wYi1zbWFsbCB7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc2l6ZS1zbWFsbCk7XFxufVxcblxcbi5wYi1tZWRpdW0ge1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXNpemUtbWVkaXVtKTtcXG59XFxuXFxuLnBiLWxhcmdlIHtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zaXplLWxhcmdlKTtcXG59XFxuXFxuLnBiLXhsYXJnZSB7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc2l6ZS14bGFyZ2UpO1xcbn1cXG5cXG4ucGIteHhsYXJnZSB7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc2l6ZS14eGxhcmdlKTtcXG59XFxuXFxuLnBiLWh1Z2Uge1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXNpemUteHh4bGFyZ2UpO1xcbn1cXG5cXG4vKiBwYWRkaW5nIGxlZnQgKi9cXG4ucGwteHh4c21hbGwge1xcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaXplLXh4eHNtYWxsKTtcXG59XFxuXFxuLnBsLXh4c21hbGwge1xcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaXplLXh4c21hbGwpO1xcbn1cXG5cXG4ucGwteHNtYWxsIHtcXG4gIHBhZGRpbmctbGVmdDogdmFyKC0tc2l6ZS14c21hbGwpO1xcbn1cXG5cXG4ucGwtc21hbGwge1xcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaXplLXNtYWxsKTtcXG59XFxuXFxuLnBsLW1lZGl1bSB7XFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNpemUtbWVkaXVtKTtcXG59XFxuXFxuLnBsLWxhcmdlIHtcXG4gIHBhZGRpbmctbGVmdDogdmFyKC0tc2l6ZS1sYXJnZSk7XFxufVxcblxcbi5wbC14bGFyZ2Uge1xcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaXplLXhsYXJnZSk7XFxufVxcblxcbi5wbC14eGxhcmdlIHtcXG4gIHBhZGRpbmctbGVmdDogdmFyKC0tc2l6ZS14eGxhcmdlKTtcXG59XFxuXFxuLnBsLWh1Z2Uge1xcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaXplLXh4eGxhcmdlKTtcXG59XFxuXFxuLyogbWFyZ2luICovXFxuLm0teHh4c21hbGwge1xcbiAgbWFyZ2luOiB2YXIoLS1zaXplLXh4eHNtYWxsKTtcXG59XFxuXFxuLm0teHhzbWFsbCB7XFxuICBtYXJnaW46IHZhcigtLXNpemUteHhzbWFsbCk7XFxufVxcblxcbi5tLXhzbWFsbCB7XFxuICBtYXJnaW46IHZhcigtLXNpemUteHNtYWxsKTtcXG59XFxuXFxuLm0tc21hbGwge1xcbiAgbWFyZ2luOiB2YXIoLS1zaXplLXNtYWxsKTtcXG59XFxuXFxuLm0tbWVkaXVtIHtcXG4gIG1hcmdpbjogdmFyKC0tc2l6ZS1tZWRpdW0pO1xcbn1cXG5cXG4ubS1sYXJnZSB7XFxuICBtYXJnaW46IHZhcigtLXNpemUtbGFyZ2UpO1xcbn1cXG5cXG4ubS14bGFyZ2Uge1xcbiAgbWFyZ2luOiB2YXIoLS1zaXplLXhsYXJnZSk7XFxufVxcblxcbi5tLXh4bGFyZ2Uge1xcbiAgbWFyZ2luOiB2YXIoLS1zaXplLXh4bGFyZ2UpO1xcbn1cXG5cXG4ubS1odWdlIHtcXG4gIG1hcmdpbjogdmFyKC0tc2l6ZS14eHhsYXJnZSk7XFxufVxcblxcbi8qIG1hcmdpbiB0b3AgKi9cXG4ubXQteHh4c21hbGwge1xcbiAgbWFyZ2luLXRvcDogdmFyKC0tc2l6ZS14eHhzbWFsbCk7XFxufVxcblxcbi5tdC14eHNtYWxsIHtcXG4gIG1hcmdpbi10b3A6IHZhcigtLXNpemUteHhzbWFsbCk7XFxufVxcblxcbi5tdC14c21hbGwge1xcbiAgbWFyZ2luLXRvcDogdmFyKC0tc2l6ZS14c21hbGwpO1xcbn1cXG5cXG4ubXQtc21hbGwge1xcbiAgbWFyZ2luLXRvcDogdmFyKC0tc2l6ZS1zbWFsbCk7XFxufVxcblxcbi5tdC1tZWRpdW0ge1xcbiAgbWFyZ2luLXRvcDogdmFyKC0tc2l6ZS1tZWRpdW0pO1xcbn1cXG5cXG4ubXQtbGFyZ2Uge1xcbiAgbWFyZ2luLXRvcDogdmFyKC0tc2l6ZS1sYXJnZSk7XFxufVxcblxcbi5tdC14bGFyZ2Uge1xcbiAgbWFyZ2luLXRvcDogdmFyKC0tc2l6ZS14bGFyZ2UpO1xcbn1cXG5cXG4ubXQteHhsYXJnZSB7XFxuICBtYXJnaW4tdG9wOiB2YXIoLS1zaXplLXh4bGFyZ2UpO1xcbn1cXG5cXG4ubXQtaHVnZSB7XFxuICBtYXJnaW4tdG9wOiB2YXIoLS1zaXplLXh4eGxhcmdlKTtcXG59XFxuXFxuLyogbWFyZ2luIHJpZ2h0ICovXFxuLm1yLXh4eHNtYWxsIHtcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tc2l6ZS14eHhzbWFsbCk7XFxufVxcblxcbi5tci14eHNtYWxsIHtcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tc2l6ZS14eHNtYWxsKTtcXG59XFxuXFxuLm1yLXhzbWFsbCB7XFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNpemUteHNtYWxsKTtcXG59XFxuXFxuLm1yLXNtYWxsIHtcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tc2l6ZS1zbWFsbCk7XFxufVxcblxcbi5tci1tZWRpdW0ge1xcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zaXplLW1lZGl1bSk7XFxufVxcblxcbi5tci1sYXJnZSB7XFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNpemUtbGFyZ2UpO1xcbn1cXG5cXG4ubXIteGxhcmdlIHtcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tc2l6ZS14bGFyZ2UpO1xcbn1cXG5cXG4ubXIteHhsYXJnZSB7XFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNpemUteHhsYXJnZSk7XFxufVxcblxcbi5tci1odWdlIHtcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tc2l6ZS14eHhsYXJnZSk7XFxufVxcblxcbi8qIG1hcmdpbiBib3R0b20gKi9cXG4ubWIteHh4c21hbGwge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc2l6ZS14eHhzbWFsbCk7XFxufVxcblxcbi5tYi14eHNtYWxsIHtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNpemUteHhzbWFsbCk7XFxufVxcblxcbi5tYi14c21hbGwge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc2l6ZS14c21hbGwpO1xcbn1cXG5cXG4ubWItc21hbGwge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc2l6ZS1zbWFsbCk7XFxufVxcblxcbi5tYi1tZWRpdW0ge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc2l6ZS1tZWRpdW0pO1xcbn1cXG5cXG4ubWItbGFyZ2Uge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc2l6ZS1sYXJnZSk7XFxufVxcblxcbi5tYi14bGFyZ2Uge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc2l6ZS14bGFyZ2UpO1xcbn1cXG5cXG4ubWIteHhsYXJnZSB7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zaXplLXh4bGFyZ2UpO1xcbn1cXG5cXG4ubWItaHVnZSB7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zaXplLXh4eGxhcmdlKTtcXG59XFxuXFxuLyogbWFyZ2luIGxlZnQgKi9cXG4ubWwteHh4c21hbGwge1xcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLXNpemUteHh4c21hbGwpO1xcbn1cXG5cXG4ubWwteHhzbWFsbCB7XFxuICBtYXJnaW4tbGVmdDogdmFyKC0tc2l6ZS14eHNtYWxsKTtcXG59XFxuXFxuLm1sLXhzbWFsbCB7XFxuICBtYXJnaW4tbGVmdDogdmFyKC0tc2l6ZS14c21hbGwpO1xcbn1cXG5cXG4ubWwtc21hbGwge1xcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLXNpemUtc21hbGwpO1xcbn1cXG5cXG4ubWwtbWVkaXVtIHtcXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1zaXplLW1lZGl1bSk7XFxufVxcblxcbi5tbC1sYXJnZSB7XFxuICBtYXJnaW4tbGVmdDogdmFyKC0tc2l6ZS1sYXJnZSk7XFxufVxcblxcbi5tbC14bGFyZ2Uge1xcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLXNpemUteGxhcmdlKTtcXG59XFxuXFxuLm1sLXh4bGFyZ2Uge1xcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLXNpemUteHhsYXJnZSk7XFxufVxcblxcbi5tbC1odWdlIHtcXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1zaXplLXh4eGxhcmdlKTtcXG59XFxuXFxuLyogbGF5b3V0IHV0aWxpdGllcyAqL1xcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmlubGluZSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5ibG9jayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmlubGluZS1ibG9jayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5pbmxpbmUtZmxleCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG59XFxuXFxuLmNvbHVtbiB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29sdW1uLXJldmVyc2Uge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbn1cXG5cXG4ucm93IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5yb3ctcmV2ZXJzZSB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxufVxcblxcbi5mbGV4LXdyYXAge1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uZmxleC13cmFwLXJldmVyc2Uge1xcbiAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XFxufVxcblxcbi5mbGV4LW5vLXdyYXAge1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxufVxcblxcbi5mbGV4LXNocmluayB7XFxuICBmbGV4LXNocmluazogMTtcXG59XFxuXFxuLmZsZXgtbm8tc2hyaW5rIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4uZmxleC1ncm93IHtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLmZsZXgtbm8tZ3JvdyB7XFxuICBmbGV4LWdyb3c6IDA7XFxufVxcblxcbi5qdXN0aWZ5LWNvbnRlbnQtc3RhcnQge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uanVzdGlmeS1jb250ZW50LWVuZCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uanVzdGlmeS1jb250ZW50LWNlbnRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmp1c3RpZnktY29udGVudC1iZXR3ZWVuIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmp1c3RpZnktY29udGVudC1hcm91bmQge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5hbGlnbi1pdGVtcy1zdGFydCB7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLmFsaWduLWl0ZW1zLWVuZCB7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbi5hbGlnbi1pdGVtcy1jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFsaWduLWl0ZW1zLXN0cmV0Y2gge1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcblxcbi5hbGlnbi1jb250ZW50LXN0YXJ0IHtcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5hbGlnbi1jb250ZW50LWVuZCB7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmFsaWduLWNvbnRlbnQtY2VudGVyIHtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmFsaWduLWNvbnRlbnQtc3RyZXRjaCB7XFxuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xcbn1cXG5cXG4uYWxpZ24tc2VsZi1zdGFydCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uYWxpZ24tc2VsZi1lbmQge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4uYWxpZ24tc2VsZi1jZW50ZXIge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uYWxpZ24tc2VsZi1zdHJldGNoIHtcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxufVxcblxcbi5idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLWxhcmdlKTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBmbGV4LXNocmluazogMDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXN0YWNrKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzbWFsbCk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1mb250LWxldHRlci1zcGFjaW5nLW5lZy1zbWFsbCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tZm9udC1saW5lLWhlaWdodCk7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUtbWVkaXVtKTtcXG4gIHBhZGRpbmc6IDAgdmFyKC0tc2l6ZS14c21hbGwpIDAgdmFyKC0tc2l6ZS14c21hbGwpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmJ1dHRvbi0tcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLmJ1dHRvbi0tcHJpbWFyeTplbmFibGVkOmFjdGl2ZSwgLmJ1dHRvbi0tcHJpbWFyeTplbmFibGVkOmZvY3VzIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrMyk7XFxufVxcblxcbi5idXR0b24tLXByaW1hcnk6ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2szKTtcXG59XFxuXFxuLmJ1dHRvbi0tcHJpbWFyeS1kZXN0cnVjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG4uYnV0dG9uLS1wcmltYXJ5LWRlc3RydWN0aXZlOmVuYWJsZWQ6YWN0aXZlLCAuYnV0dG9uLS1wcmltYXJ5LWRlc3RydWN0aXZlOmVuYWJsZWQ6Zm9jdXMge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2szKTtcXG59XFxuXFxuLmJ1dHRvbi0tcHJpbWFyeS1kZXN0cnVjdGl2ZTpkaXNhYmxlZCB7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcblxcbi5idXR0b24tLXNlY29uZGFyeSwgLmJ1dHRvbi0tc2Vjb25kYXJ5LWRlc3RydWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrOCk7XFxuICBjb2xvcjogdmFyKC0tYmxhY2s4KTtcXG4gIHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1zaXplLXhzbWFsbCkgKyAxcHgpIDAgY2FsYyh2YXIoLS1zaXplLXhzbWFsbCkgKyAxcHgpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWZvbnQtbGV0dGVyLXNwYWNpbmctcG9zLXNtYWxsKTtcXG59XFxuXFxuLmJ1dHRvbi0tc2Vjb25kYXJ5OmVuYWJsZWQ6YWN0aXZlLCAuYnV0dG9uLS1zZWNvbmRhcnktZGVzdHJ1Y3RpdmU6ZW5hYmxlZDphY3RpdmUsIC5idXR0b24tLXNlY29uZGFyeTplbmFibGVkOmZvY3VzLCAuYnV0dG9uLS1zZWNvbmRhcnktZGVzdHJ1Y3RpdmU6ZW5hYmxlZDpmb2N1cyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibHVlKTtcXG4gIHBhZGRpbmc6IDAgdmFyKC0tc2l6ZS14c21hbGwpIDAgdmFyKC0tc2l6ZS14c21hbGwpO1xcbn1cXG5cXG4uYnV0dG9uLS1zZWNvbmRhcnk6ZGlzYWJsZWQsIC5idXR0b24tLXNlY29uZGFyeS1kZXN0cnVjdGl2ZTpkaXNhYmxlZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjazMpO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrMyk7XFxufVxcblxcbi5idXR0b24tLXNlY29uZGFyeS1kZXN0cnVjdGl2ZSB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXJlZCk7XFxuICBjb2xvcjogdmFyKC0tcmVkKTtcXG59XFxuXFxuLmJ1dHRvbi0tc2Vjb25kYXJ5LWRlc3RydWN0aXZlOmRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLmJ1dHRvbi0tc2Vjb25kYXJ5LWRlc3RydWN0aXZlOmVuYWJsZWQ6YWN0aXZlLCAuYnV0dG9uLS1zZWNvbmRhcnktZGVzdHJ1Y3RpdmU6ZW5hYmxlZDpmb2N1cyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1yZWQpO1xcbiAgcGFkZGluZzogMCB2YXIoLS1zaXplLXhzbWFsbCkgMCB2YXIoLS1zaXplLXhzbWFsbCk7XFxufVxcblxcbi5idXR0b24tLXNlY29uZGFyeS1kZXN0cnVjdGl2ZTpkaXNhYmxlZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1yZWQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLXJlZCk7XFxuICBvcGFjaXR5OiAwLjQ7XFxufVxcblxcbi5idXR0b24tLXRlcnRpYXJ5LCAuYnV0dG9uLS10ZXJ0aWFyeS1kZXN0cnVjdGl2ZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcXG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1mb250LWxldHRlci1zcGFjaW5nLXBvcy1zbWFsbCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idXR0b24tLXRlcnRpYXJ5OmVuYWJsZWQ6Zm9jdXMsIC5idXR0b24tLXRlcnRpYXJ5LWRlc3RydWN0aXZlOmVuYWJsZWQ6Zm9jdXMge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5idXR0b24tLXRlcnRpYXJ5OmRpc2FibGVkLCAuYnV0dG9uLS10ZXJ0aWFyeS1kZXN0cnVjdGl2ZTpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBjb2xvcjogdmFyKC0tYmxhY2szKTtcXG59XFxuXFxuLmJ1dHRvbi0tdGVydGlhcnktZGVzdHJ1Y3RpdmUge1xcbiAgY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbi5idXR0b24tLXRlcnRpYXJ5LWRlc3RydWN0aXZlOmVuYWJsZWQ6Zm9jdXMge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5idXR0b24tLXRlcnRpYXJ5LWRlc3RydWN0aXZlOmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuNDtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiB2YXIoLS1zaXplLW1lZGl1bSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAvKiB1bmNoZWNrZWQgKi9cXG4gIC8qXFxuXFx0Jl9fYm94OmZvY3VzICsgJl9fbGFiZWw6YmVmb3JlIHtcXG5cXHRcXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuXFx0ICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCB2YXIoLS1ibHVlKTtcXG5cXHR9Ki9cXG4gIC8qIGNoZWNrZWQgKi9cXG4gIC8qXFxuXFx0Jl9fYm94OmNoZWNrZWQ6Zm9jdXMgKyAmX19sYWJlbDpiZWZvcmUge1xcblxcdFxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG5cXHQgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHZhcigtLWJsdWUpO1xcblxcdH0qL1xcbn1cXG5cXG4uY2hlY2tib3hfX2JveCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY2hlY2tib3hfX2xhYmVsIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tYmxhY2s4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zdGFjayk7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14c21hbGwpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tZm9udC1saW5lLWhlaWdodCk7XFxuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tZm9udC1sZXR0ZXItc3BhY2luZy1wb3MteHNtYWxsKTtcXG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcXG4gIHBhZGRpbmc6IDAgdmFyKC0tc2l6ZS14c21hbGwpIDAgdmFyKC0tc2l6ZS1zbWFsbCk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uY2hlY2tib3hfX2xhYmVsOmJlZm9yZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjazgpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1zbWFsbCk7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBtYXJnaW46IC0xcHggMTBweCAwIC04cHg7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uY2hlY2tib3hfX2JveDpkaXNhYmxlZCArIC5jaGVja2JveF9fbGFiZWwge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuXFxuLmNoZWNrYm94X19ib3g6Y2hlY2tlZCArIC5jaGVja2JveF9fbGFiZWw6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCwlM0NzdmclMjBmaWxsJTNEJTIybm9uZSUyMiUyMGhlaWdodCUzRCUyMjclMjIlMjB2aWV3Qm94JTNEJTIyMCUyMDAlMjA4JTIwNyUyMiUyMHdpZHRoJTNEJTIyOCUyMiUyMHhtbG5zJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJTIyJTNFJTNDcGF0aCUyMGNsaXAtcnVsZSUzRCUyMmV2ZW5vZGQlMjIlMjBkJTNEJTIybTEuMTc2NDclMjAxLjg4MjM2JTIwMS44ODIzNSUyMDEuODgyMzYlMjAzLjc2NDcxLTMuNzY0NzIlMjAxLjE3NjQ3JTIwMS4xNzY0OC00Ljk0MTE4JTIwNC45NDEyLTMuMDU4ODItMy4wNTg4NHolMjIlMjBmaWxsJTNEJTIyJTIzZmZmJTIyJTIwZmlsbC1ydWxlJTNEJTIyZXZlbm9kZCUyMiUyRiUzRSUzQyUyRnN2ZyUzRVxcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDFweCAycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLmNoZWNrYm94X19ib3g6Y2hlY2tlZDpkaXNhYmxlZCArIC5jaGVja2JveF9fbGFiZWw6YmVmb3JlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2s4KTtcXG59XFxuXFxuLmRpc2Nsb3N1cmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4uZGlzY2xvc3VyZV9faXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zaWx2ZXIpO1xcbn1cXG5cXG4uZGlzY2xvc3VyZV9faXRlbTpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmRpc2Nsb3N1cmVfX2xhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiB2YXIoLS1zaXplLW1lZGl1bSk7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14c21hbGwpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XFxuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tZm9udC1sZXR0ZXItc3BhY2luZy1wb3MteHNtYWxsKTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodCk7XFxuICBjb2xvcjogdmFyKC0tYmxhY2s4KTtcXG4gIHBhZGRpbmc6IDAgOHB4IDAgMjRweDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5kaXNjbG9zdXJlX19sYWJlbDpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDhweDtcXG4gIGxlZnQ6IDRweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBvcGFjaXR5OiAwLjM7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LCUzQ3N2ZyUyMGZpbGwlM0QlMjJub25lJTIyJTIwaGVpZ2h0JTNEJTIyMTYlMjIlMjB2aWV3Qm94JTNEJTIyMCUyMDAlMjAxNiUyMDE2JTIyJTIwd2lkdGglM0QlMjIxNiUyMiUyMHhtbG5zJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJTIyJTNFJTNDcGF0aCUyMGQlM0QlMjJtMTElMjA4LTQtM3Y2eiUyMiUyMGZpbGwlM0QlMjIlMjMwMDAlMjIlMkYlM0UlM0MlMkZzdmclM0VcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbn1cXG5cXG4uZGlzY2xvc3VyZV9fbGFiZWw6aG92ZXI6YmVmb3JlIHtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmRpc2Nsb3N1cmVfX2NvbnRlbnQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHNtYWxsKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWZvbnQtbGV0dGVyLXNwYWNpbmctcG9zLXhzbWFsbCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQpO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrOCk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXh4c21hbGwpIHZhcigtLXNpemUteHhzbWFsbCkgdmFyKC0tc2l6ZS14eHNtYWxsKSB2YXIoLS1zaXplLXNtYWxsKTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5kaXNjbG9zdXJlLS1zZWN0aW9uIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcXG59XFxuXFxuLmRpc2Nsb3N1cmUtLWV4cGFuZGVkIC5kaXNjbG9zdXJlX19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uZGlzY2xvc3VyZS0tZXhwYW5kZWQgLmRpc2Nsb3N1cmVfX2xhYmVsOmJlZm9yZSB7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LCUzQ3N2ZyUyMGZpbGwlM0QlMjJub25lJTIyJTIwaGVpZ2h0JTNEJTIyMTYlMjIlMjB2aWV3Qm94JTNEJTIyMCUyMDAlMjAxNiUyMDE2JTIyJTIwd2lkdGglM0QlMjIxNiUyMiUyMHhtbG5zJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJTIyJTNFJTNDcGF0aCUyMGQlM0QlMjJtOSUyMDEwJTIwMy00aC02eiUyMiUyMGZpbGwlM0QlMjIlMjMwMDAlMjIlMkYlM0UlM0MlMkZzdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHdpZHRoOiB2YXIoLS1zaXplLW1lZGl1bSk7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUtbWVkaXVtKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXN0YWNrKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzbWFsbCk7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTJweCAtMXB4O1xcbn1cXG5cXG4uaWNvbi0tc3BpbiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRpbmcgMS4wcyBsaW5lYXIgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRpbmcgMS4wcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGluZyB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRpbmcge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG4uaWNvbi0tYmx1ZSB7XFxuICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDU0JSkgc2VwaWEoMTYlKSBzYXR1cmF0ZSg3NDk5JSkgaHVlLXJvdGF0ZSgxNzlkZWcpIGJyaWdodG5lc3MoOTglKSBjb250cmFzdCgxMDElKTtcXG4gICAgICAgICAgZmlsdGVyOiBpbnZlcnQoNTQlKSBzZXBpYSgxNiUpIHNhdHVyYXRlKDc0OTklKSBodWUtcm90YXRlKDE3OWRlZykgYnJpZ2h0bmVzcyg5OCUpIGNvbnRyYXN0KDEwMSUpO1xcbn1cXG5cXG4uaWNvbi0tcHVycGxlIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoNDAlKSBzZXBpYSg1OSUpIHNhdHVyYXRlKDQwMDElKSBodWUtcm90YXRlKDIzMmRlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCgxMDIlKTtcXG4gICAgICAgICAgZmlsdGVyOiBpbnZlcnQoNDAlKSBzZXBpYSg1OSUpIHNhdHVyYXRlKDQwMDElKSBodWUtcm90YXRlKDIzMmRlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCgxMDIlKTtcXG59XFxuXFxuLmljb24tLXB1cnBsZTQge1xcbiAgLXdlYmtpdC1maWx0ZXI6IGludmVydCg3MiUpIHNlcGlhKDQwJSkgc2F0dXJhdGUoNjYwJSkgaHVlLXJvdGF0ZSgyMDJkZWcpIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoMTAzJSk7XFxuICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDcyJSkgc2VwaWEoNDAlKSBzYXR1cmF0ZSg2NjAlKSBodWUtcm90YXRlKDIwMmRlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCgxMDMlKTtcXG59XFxuXFxuLmljb24tLWhvdC1waW5rIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMTglKSBzZXBpYSg5MCUpIHNhdHVyYXRlKDMzNDclKSBodWUtcm90YXRlKDI5M2RlZykgYnJpZ2h0bmVzcygxMTYlKSBjb250cmFzdCgxMzIlKTtcXG4gICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMTglKSBzZXBpYSg5MCUpIHNhdHVyYXRlKDMzNDclKSBodWUtcm90YXRlKDI5M2RlZykgYnJpZ2h0bmVzcygxMTYlKSBjb250cmFzdCgxMzIlKTtcXG59XFxuXFxuLmljb24tLWdyZWVuIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoNjYlKSBzZXBpYSgzOSUpIHNhdHVyYXRlKDUzODIlKSBodWUtcm90YXRlKDExNGRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCg3OSUpO1xcbiAgICAgICAgICBmaWx0ZXI6IGludmVydCg2NiUpIHNlcGlhKDM5JSkgc2F0dXJhdGUoNTM4MiUpIGh1ZS1yb3RhdGUoMTE0ZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDc5JSk7XFxufVxcblxcbi5pY29uLS1yZWQge1xcbiAgLXdlYmtpdC1maWx0ZXI6IGludmVydCg0MyUpIHNlcGlhKDU2JSkgc2F0dXJhdGUoNTYzMiUpIGh1ZS1yb3RhdGUoMzQ5ZGVnKSBicmlnaHRuZXNzKDk3JSkgY29udHJhc3QoOTUlKTtcXG4gICAgICAgICAgZmlsdGVyOiBpbnZlcnQoNDMlKSBzZXBpYSg1NiUpIHNhdHVyYXRlKDU2MzIlKSBodWUtcm90YXRlKDM0OWRlZykgYnJpZ2h0bmVzcyg5NyUpIGNvbnRyYXN0KDk1JSk7XFxufVxcblxcbi5pY29uLS15ZWxsb3cge1xcbiAgLXdlYmtpdC1maWx0ZXI6IGludmVydCg3OCUpIHNlcGlhKDg2JSkgc2F0dXJhdGUoMTYwOCUpIGh1ZS1yb3RhdGUoMWRlZykgYnJpZ2h0bmVzcygxMDclKSBjb250cmFzdCgxMDQlKTtcXG4gICAgICAgICAgZmlsdGVyOiBpbnZlcnQoNzglKSBzZXBpYSg4NiUpIHNhdHVyYXRlKDE2MDglKSBodWUtcm90YXRlKDFkZWcpIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoMTA0JSk7XFxufVxcblxcbi5pY29uLS1ibGFjayB7XFxuICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzUwMCUpIGh1ZS1yb3RhdGUoMTE3ZGVnKSBicmlnaHRuZXNzKDEwOSUpIGNvbnRyYXN0KDEwNSUpO1xcbiAgICAgICAgICBmaWx0ZXI6IGludmVydCgwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc1MDAlKSBodWUtcm90YXRlKDExN2RlZykgYnJpZ2h0bmVzcygxMDklKSBjb250cmFzdCgxMDUlKTtcXG59XFxuXFxuLmljb24tLWJsYWNrOCB7XFxuICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDAlKSBzZXBpYSg1NiUpIHNhdHVyYXRlKDI1JSkgaHVlLXJvdGF0ZSgxMzdkZWcpIGJyaWdodG5lc3MoMTA1JSkgY29udHJhc3QoNjAlKTtcXG4gICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMCUpIHNlcGlhKDU2JSkgc2F0dXJhdGUoMjUlKSBodWUtcm90YXRlKDEzN2RlZykgYnJpZ2h0bmVzcygxMDUlKSBjb250cmFzdCg2MCUpO1xcbn1cXG5cXG4uaWNvbi0tYmxhY2szIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDY5OCUpIGh1ZS1yb3RhdGUoMjE5ZGVnKSBicmlnaHRuZXNzKDY2JSkgY29udHJhc3QoMTI3JSk7XFxuICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg2OTglKSBodWUtcm90YXRlKDIxOWRlZykgYnJpZ2h0bmVzcyg2NiUpIGNvbnRyYXN0KDEyNyUpO1xcbn1cXG5cXG4uaWNvbi0td2hpdGUge1xcbiAgLXdlYmtpdC1maWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxMDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgyNjlkZWcpIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoMTA0JSk7XFxuICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDEwMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDI2OWRlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCgxMDQlKTtcXG59XFxuXFxuLmljb24tLXdoaXRlOCB7XFxuICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoMiUpIHNhdHVyYXRlKDUlKSBodWUtcm90YXRlKDU1ZGVnKSBicmlnaHRuZXNzKDEwNCUpIGNvbnRyYXN0KDk4JSk7XFxuICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoMiUpIHNhdHVyYXRlKDUlKSBodWUtcm90YXRlKDU1ZGVnKSBicmlnaHRuZXNzKDEwNCUpIGNvbnRyYXN0KDk4JSk7XFxufVxcblxcbi5pY29uLS13aGl0ZTQge1xcbiAgLXdlYmtpdC1maWx0ZXI6IGludmVydCg5OSUpIHNlcGlhKDIlKSBzYXR1cmF0ZSg4OTclKSBodWUtcm90YXRlKDI0NWRlZykgYnJpZ2h0bmVzcygxMTclKSBjb250cmFzdCg5MyUpO1xcbiAgICAgICAgICBmaWx0ZXI6IGludmVydCg5OSUpIHNlcGlhKDIlKSBzYXR1cmF0ZSg4OTclKSBodWUtcm90YXRlKDI0NWRlZykgYnJpZ2h0bmVzcygxMTclKSBjb250cmFzdCg5MyUpO1xcbn1cXG5cXG4uaWNvbi0tYWRqdXN0IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ3BhdGggZD0nTTEyIDE2LjA1VjloMXY3LjA1YTIuNSAyLjUgMCAwMTAgNC45VjIzaC0xdi0yLjA1YTIuNSAyLjUgMCAwMTAtNC45em0yIDIuNDVhMS41IDEuNSAwIDExLTMgMCAxLjUgMS41IDAgMDEzIDB6TTE5IDIzaDF2LTcuMDVhMi41IDIuNSAwIDAwMC00LjlWOWgtMXYyLjA1YTIuNSAyLjUgMCAwMDAgNC45em0yLTkuNWExLjUgMS41IDAgMTAtMyAwIDEuNSAxLjUgMCAwMDMgMHonLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tYWxlcnQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTIxLjI1IDE3LjM5M2ExLjc1IDEuNzUgMCAwMDEuNzUgMS43NVYyMEg5di0uODU3YTEuNzUgMS43NSAwIDAwMS43NS0xLjc1VjE0YzAtMy4zMTQgMi4zNS02IDUuMjUtNnM1LjI1IDIuNjg2IDUuMjUgNnptLTEtMy4zOTN2My4zOTNjMCAuNi4xOTIgMS4xNTUuNTE4IDEuNjA3aC05LjUzNmEyLjczOCAyLjczOCAwIDAwLjUxOC0xLjYwN1YxNGMwLTIuODkxIDIuMDI0LTUgNC4yNS01czQuMjUgMi4xMDkgNC4yNSA1eicgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0NwYXRoIGQ9J00xNiAyM2EyIDIgMCAwMS0yLTJoLTFhMyAzIDAgMTA2IDBoLTFhMiAyIDAgMDEtMiAyeicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1hbmdsZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTIgMTJ2OGg4di0xaC0zYTQgNCAwIDAwLTQtNHYtM3ptMSA0djNoM2EzIDMgMCAwMC0zLTN6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tYXJyb3ctbGVmdC1yaWdodCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTEyLjIwNyAxNi41bDEuNjQ3IDEuNjQ2LS43MDcuNzA4TDEwLjI5MyAxNmwyLjg1NC0yLjg1NC43MDcuNzA4LTEuNjQ3IDEuNjQ2aDcuNTg2bC0xLjY0Ni0xLjY0Ni43MDctLjcwOEwyMS43MDcgMTZsLTIuODUzIDIuODU0LS43MDctLjcwOCAxLjY0Ni0xLjY0NnonIGZpbGw9JyUyMzAwMCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tdXAtZG93biB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTE2IDEwLjI5MmwyLjg1NCAyLjg1NC0uNzA3LjcwNy0xLjY0Ni0xLjY0NnY3LjU4NWwxLjY0Ni0xLjY0Ni43MDcuNzA3LTIuODUzIDIuODU0LTIuODU0LTIuODU0LjcwNy0uNzA3IDEuNjQ3IDEuNjQ2di03LjU4NWwtMS42NDcgMS42NDYtLjcwNy0uNzA3eicgZmlsbD0nJTIzMDAwJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1hdXRvLWxheW91dC1ob3Jpem9udGFsIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xMCAxMGg1djEyaC01em0xIDFoM3YxMGgtM3ptNi0xaDV2MTJoLTV6bTEgMWgzdjEwaC0zeicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWF1dG8tbGF5b3V0LXZlcnRpY2FsIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xMCAxMGgxMnY1SDEwem0xIDFoMTB2M0gxMXptLTEgNmgxMnY1SDEwem0xIDFoMTB2M0gxMXonIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1iYWNrIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xMy43MDcgMTZsNC42NDYtNC42NDYtLjcwNy0uNzA3TDEyLjI5MyAxNmw1LjM1MyA1LjM1NC43MDctLjcwN3onIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1ibGVuZC1lbXB0eSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTYuNjk1IDExLjcybC0uNjkzLS43MThMMTYgMTFsLS4wMDEuMDAyLS42OTQuNzE4QzEzLjEwMiAxNC4wMTIgMTIgMTUuMjk0IDEyIDE2Ljg1MmE0LjE5OSA0LjE5OSAwIDAwMS4xNzIgMi45MzYgMy45MDYgMy45MDYgMCAwMDUuNjU2IDBBNC4xOTkgNC4xOTkgMCAwMDIwIDE2Ljg1MmMwLTEuNTU4LTEuMTAyLTIuODQtMy4zMDUtNS4xMzJ6bS0uNjk1LjcyYy0uOTc3IDEuMDE3LTEuNjkzIDEuNzktMi4xOTUgMi40NzEtLjYuODE0LS44MDUgMS4zOC0uODA1IDEuOTR2LjAwM2EzLjIgMy4yIDAgMDAuODkgMi4yMzkgMi45MDYgMi45MDYgMCAwMDQuMjIgMCAzLjIgMy4yIDAgMDAuODktMi4yMzl2LS4wMDJjMC0uNTYtLjIwNS0xLjEyNy0uODA1LTEuOTQtLjUwMi0uNjgxLTEuMjE5LTEuNDU1LTIuMTk1LTIuNDcyeicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWJsZW5kIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNi4wMDIgMTEuMDAybC42OTMuNzE4QzE4Ljg5OCAxNC4wMTIgMjAgMTUuMjk0IDIwIDE2Ljg1MmE0LjE5OSA0LjE5OSAwIDAxLTEuMTcyIDIuOTM2IDMuOTA2IDMuOTA2IDAgMDEtNS42NTYgMEE0LjE5OSA0LjE5OSAwIDAxMTIgMTYuODUyYzAtMS41NTggMS4xMDItMi44NCAzLjMwNS01LjEzMmwuNjk0LS43MTl6bS0yLjE5NyAzLjkxYy41MDItLjY4MSAxLjIxOS0xLjQ1NSAyLjE5NS0yLjQ3Mi45NzYgMS4wMTcgMS42OTMgMS43OSAyLjE5NSAyLjQ3MS42LjgxNC44MDUgMS4zOC44MDUgMS45NHYuMDAzYzAgLjA0OSAwIC4wOTgtLjAwMy4xNDZoLTUuOTk0YTMuMzcgMy4zNyAwIDAxLS4wMDMtLjE0NnYtLjAwMmMwLS41Ni4yMDUtMS4xMjcuODA1LTEuOTR6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tYnJlYWsge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCcgb3BhY2l0eT0nLjknJTNFJTNDcGF0aCBkPSdNMTMgOXYzaDFWOXpNMjIuMTAzIDkuODk2YTIuOTc1IDIuOTc1IDAgMDAtNC4yMDcgMGwtMi43NSAyLjc1LjcwNy43MDcgMi43NS0yLjc1YTEuOTc1IDEuOTc1IDAgMDEyLjc5MyAyLjc5M2wtMi43NSAyLjc1LjcwNy43MDcgMi43NS0yLjc1YTIuOTc1IDIuOTc1IDAgMDAwLTQuMjA3ek05Ljg5NiAyMi4xMDRhMi45NzUgMi45NzUgMCAwMTAtNC4yMDhsMi43NS0yLjc1LjcwNy43MDctMi43NSAyLjc1YTEuOTc1IDEuOTc1IDAgMDAyLjc5MyAyLjc5M2wyLjc1LTIuNzUuNzA3LjcwNy0yLjc1IDIuNzVhMi45NzUgMi45NzUgMCAwMS00LjIwNyAwek0yMyAxOWgtM3YtMWgzek0xOSAyMHYzaC0xdi0zek0xMiAxM0g5djFoM3onLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tY2FyZXQtZG93biB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTE2IDE4bDMtNGgtNnonIGZpbGw9JyUyMzAwMCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tY2FyZXQtbGVmdCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTEzIDE2bDQtM3Y2eicgZmlsbD0nJTIzMDAwJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1jYXJldC1yaWdodCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTE5IDE2bC00LTN2NnonIGZpbGw9JyUyMzAwMCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tY2FyZXQtdXAge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00xNiAxNGwzIDRoLTZ6JyBmaWxsPSclMjMwMDAnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWNoZWNrIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00yMS4yMDcgMTMuNzA3TDE1IDE5LjkxNGwtMy43MDctMy43MDcgMS40MTQtMS40MTRMMTUgMTcuMDg2bDQuNzkzLTQuNzkzeicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWNsb3NlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMTYgMTUuMjkzbDQuNjQ2LTQuNjQ2LjcwOC43MDdMMTYuNzA3IDE2bDQuNjQ3IDQuNjQ3LS43MDcuNzA3TDE2IDE2LjcwN2wtNC42NDYgNC42NDctLjcwNy0uNzA3TDE1LjI5MyAxNmwtNC42NDYtNC42NDYuNzA3LS43MDd6JyBmaWxsPSclMjMwMDAnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWNvbXBvbmVudCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTIuMDYzIDEwLjkzOEwxNiAxNC44NzRsMy45MzgtMy45MzhMMTYgN3ptNi40NiAwTDE2IDEzLjQ2bC0yLjUyMy0yLjUyNEwxNiA4LjQxNXptLTYuNDYgMTAuMTI0TDE2IDI1bDMuOTM4LTMuOTM4TDE2IDE3LjEyNXptNi40NiAwTDE2IDIzLjU4N2wtMi41MjMtMi41MjNMMTYgMTguNTM4ek03IDE2bDMuOTM3LTMuOTM4TDE0Ljg3NSAxNmwtMy45MzggMy45Mzh6bTMuOTM3IDIuNTIzTDEzLjQ2MSAxNmwtMi41MjQtMi41MjNMOC40MTUgMTZ6TTE3LjEyNSAxNmwzLjkzOCAzLjkzOEwyNSAxNmwtMy45MzgtMy45Mzh6bTYuNDYgMGwtMi41MjMgMi41MjNMMTguNTQgMTZsMi41MjMtMi41MjN6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tY29ybmVyLXJhZGl1cyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMjEgMTNoLTRhNCA0IDAgMDAtNCA0djRoLTF2LTRhNSA1IDAgMDE1LTVoNHonIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1jb3JuZXJzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xMSAxMWgzdjFoLTJ2MmgtMXptNyAwaDN2M2gtMXYtMmgtMnptLTYgOXYtMmgtMXYzaDN2LTF6bTktMnYzaC0zdi0xaDJ2LTJ6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tZGlzdHJpYnV0ZS1ob3Jpem9udGFsLXNwYWNpbmcge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J00xMSAyMi41di0xM2gtMXYxM3pNMjIgOS41djEzaC0xdi0xM3pNMTcgMTIuNXY3aC0ydi03eicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1kaXN0cmlidXRlLXZlcnRpY2FsLXNwYWNpbmcge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J005LjUgMTBoMTN2MWgtMTN6TTEyLjUgMTVoN3YyaC03ek0yMi41IDIxaC0xM3YxaDEzeicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1kcmFmdCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTAgOC41aDcuNzA3TDIyIDEyLjc5M1YyMy41SDEwem0xIDF2MTNoMTB2LTloLTR2LTR6bTcgLjcwN2wyLjI5MyAyLjI5M0gxOHonIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1lZmZlY3RzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBmaWxsPSclMjMwMDAnJTNFJTNDcGF0aCBkPSdNMTYuNSA4LjVoLTF2M2gxek0xMS4wNSAxMC4zNDNsLS43MDcuNzA3IDIuMTIxIDIuMTIyLjcwOC0uNzA4ek0yMS42NTcgMTEuMDVsLS43MDctLjcwNy0yLjEyMSAyLjEyMS43MDcuNzA4ek04LjUgMTUuNXYxaDN2LTF6TTIwLjUgMTUuNXYxaDN2LTF6TTEzLjE3MiAxOS41MzVsLS43MDgtLjcwNy0yLjEyIDIuMTIyLjcwNi43MDd6TTE5LjUzNSAxOC44MjhsLS43MDcuNzA3IDIuMTIyIDIuMTIyLjcwNy0uNzA3ek0xNi41IDIwLjVoLTF2M2gxeicvJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xOC40OTggMTUuOTk4YTIuNSAyLjUgMCAxMS01IDAgMi41IDIuNSAwIDAxNSAwem0tMSAwYTEuNSAxLjUgMCAxMS0zIDAgMS41IDEuNSAwIDAxMyAweicgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWVsbGlwc2VzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xMS41IDE2YTEuNSAxLjUgMCAxMS0zIDAgMS41IDEuNSAwIDAxMyAwem02IDBhMS41IDEuNSAwIDExLTMgMCAxLjUgMS41IDAgMDEzIDB6bTQuNSAxLjVhMS41IDEuNSAwIDEwMC0zIDEuNSAxLjUgMCAwMDAgM3onIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1leWVkcm9wcGVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMjIuNDQ3IDkuNmMtLjgtLjgtMi0uOC0yLjggMGwtMi44IDIuOC0uOC0uN2MtLjQtLjQtMS0uNC0xLjQgMHMtLjQgMSAwIDEuNGwuNy43LTUuOCA1LjhjLS40LjQtMSAxLjkgMCAyLjlzMi41LjQgMi45IDBsNS44LTUuOC43LjdjLjQuNCAxIC40IDEuNCAwcy40LTEgMC0xLjRsLS43LS43IDIuOC0yLjhjLjgtLjkuOC0yLjEgMC0yLjl6bS0xMC45IDExLjloLTF2LTFsNS44LTUuOCAxIDFjLS4xIDAtNS44IDUuOC01LjggNS44eicgZmlsbD0nJTIzMDAwJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1mb3J3YXJkIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNy45NCAxNmwtNC42NDctNC42NDYuNzA3LS43MDdMMTkuMzU0IDE2IDE0IDIxLjM1NGwtLjcwNy0uNzA3eicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWZyYW1lIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xMSAyNHYtM0g4di0xaDN2LThIOHYtMWgzVjhoMXYzaDhWOGgxdjNoM3YxaC0zdjhoM3YxaC0zdjNoLTF2LTNoLTh2M3ptOS00di04aC04djh6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tZ3JvdXAge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J00xNy40IDloLTIuOHYxaDIuOHpNMjAuOSAyMkgyMnYtMS4xaDFWMjNoLTIuMXpNMTAgMTQuNnYyLjhIOXYtMi44ek0yMiAxMS4xVjEwaC0xLjFWOUgyM3YyLjF6TTIyIDE0LjZ2Mi44aDF2LTIuOHpNMTAgMTEuMVYxMGgxLjFWOUg5djIuMXpNOSAyMC45aDFWMjJoMS4xdjFIOXpNMTcuNCAyMmgtMi44djFoMi44eicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1oaWRkZW4ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTIxLjUwOSAxNS44MDFBOC4wMzMgOC4wMzMgMCAwMDIyLjkyOCAxNGgtMS4xODRBNi45OTIgNi45OTIgMCAwMTE2IDE3YTYuOTkyIDYuOTkyIDAgMDEtNS43NDUtM0g5LjA3YTguMDMzIDguMDMzIDAgMDAxLjQyMSAxLjgwMWwtMS41OTUgMS41OTUuNzA4LjcwNyAxLjY1Ny0xLjY1N2MuNzEuNTIzIDEuNTExLjkzMiAyLjM3NCAxLjE5OWwtLjYxNyAyLjIyMS45NjQuMjY4LjYyNi0yLjI1NWE4LjA1MSA4LjA1MSAwIDAwMi43ODQgMGwuNjI2IDIuMjU1Ljk2NC0uMjY4LS42MTctMi4yMjFhNy45NzEgNy45NzEgMCAwMDIuMzc0LTEuMmwxLjY1OCAxLjY1OC43MDctLjcwN3onIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1ob3Jpem9udGFsLXBhZGRpbmcge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J005IDl2MTRoMVY5em0xMyAwdjE0aDFWOXonLyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTMgMTl2LTZoNnY2em0tMS03aDh2OGgtOHonIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1oeXBlcmxpbmsge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00yMC44MjQgMTQuNDkybC0xLjY1NyAxLjY1Ny44MjguODI5IDEuNjU4LTEuNjU3YTMuNTE3IDMuNTE3IDAgMDAtNC45NzMtNC45NzNsLTEuNjU3IDEuNjU4LjgyOS44MjggMS42NTctMS42NTdhMi4zNDUgMi4zNDUgMCAwMTMuMzE1IDMuMzE1em0tNC45NzQgNC45NzJsLjgyOS44MjktMS42NTggMS42NTdhMy41MTYgMy41MTYgMCAxMS00Ljk3Mi00Ljk3MmwxLjY1OS0xLjY1OC44MjguODI5LTEuNjU2IDEuNjU3YTIuMzQzIDIuMzQzIDAgMTAzLjMxNSAzLjMxNWwxLjY1Ny0xLjY1N3ptMi4wNzItNi4yMTZsLTQuOTcyIDQuOTczLjgyOC44MjkgNC45NzMtNC45NzN6JyBmaWxsPSclMjMwMDAnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWltYWdlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00yMiAxMEgxMHY3Ljc5M2wzLjA4My0zLjA4MyA3LjI5IDcuMjlIMjJ6TTEwIDIydi0yLjc5M2wzLjA4My0zLjA4M0wxOC45NiAyMnptMC0xM2ExIDEgMCAwMC0xIDF2MTJhMSAxIDAgMDAxIDFoMTJhMSAxIDAgMDAxLTFWMTBhMSAxIDAgMDAtMS0xem05LjY2NyA0LjY2N2ExLjMzMyAxLjMzMyAwIDExLTIuNjY3IDAgMS4zMzMgMS4zMzMgMCAwMTIuNjY3IDB6bTEgMGEyLjMzMyAyLjMzMyAwIDExLTQuNjY3IDAgMi4zMzMgMi4zMzMgMCAwMTQuNjY3IDB6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0taW5zdGFuY2Uge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTE2IDdsOSA5LTkgOS05LTl6bS03LjU4NiA5TDE2IDIzLjU4NiAyMy41ODYgMTYgMTYgOC40MTR6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0ta2V5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNS4xNCAyMC4xNGEzLjAxNCAzLjAxNCAwIDAwLjMzMS0zLjg2OGwyLjA0Ny0yLjA0NyAxLjc2NyAxLjc2N2EuNS41IDAgMTAuNzA3LS43MDdsLTEuNzY3LTEuNzY3IDEuMjkzLTEuMjkzIDEuNzg0IDEuNzg0YS41LjUgMCAxMC43MDctLjcwN2wtMS43ODQtMS43ODQuNzYyLS43NjFhLjUuNSAwIDAwLS43MDctLjcwOGwtNS41MTMgNS41MTNhMy4wMTQgMy4wMTQgMCAxMC4zNzMgNC41Nzh6bS0uNzEyLS43MTJhMi4wMDYgMi4wMDYgMCAxMC0yLjgzNy0yLjgzNyAyLjAwNiAyLjAwNiAwIDAwMi44MzcgMi44Mzd6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tbGF5b3V0LWFsaWduLWJvdHRvbSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTQuNSAxMHYxMGgtMlYxMHptOCAxMnYxaC0xM3YtMXptLTMtMnYtNmgtMnY2eicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWFsaWduLWhvcml6b250YWwtY2VudGVycyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTE2LjUgOS41aC0xdjNoLTV2Mmg1djNoLTN2MmgzdjNoMXYtM2gzdi0yaC0zdi0zaDV2LTJoLTV6JyBmaWxsPSclMjMwMDAnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWFsaWduLWxlZnQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J00xMCAyMi41SDl2LTEzaDF6TTIyIDE0LjVIMTJ2LTJoMTB6TTEyIDE5LjVoNnYtMmgtNnonLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tYWxpZ24tcmlnaHQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J00yMiAyMi41aDF2LTEzaC0xek0xMCAxNC41aDEwdi0ySDEwek0yMCAxOS41aC02di0yaDZ6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWFsaWduLXRvcCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyUzRSUzQ3BhdGggZD0nTTE0LjUgMjJWMTJoLTJ2MTB6TTIyLjUgMTBWOWgtMTN2MXpNMTkuNSAxMnY2aC0ydi02eicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1hbGlnbi12ZXJ0aWNhbC1jZW50ZXJzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMTIuNSAxNS41di01aDJ2NWgzdi0zaDJ2M2gzdjFoLTN2M2gtMnYtM2gtM3Y1aC0ydi01aC0zdi0xeicgZmlsbD0nJTIzMDAwJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1sYXlvdXQtZ3JpZC1jb2x1bW5zIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBmaWxsPSclMjMwMDAnJTNFJTNDcGF0aCBkPSdNOSA5aDN2MTRIOXpNMTQuNSA5aDN2MTRoLTN6TTIwIDloM3YxNGgtM3onLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tbGF5b3V0LWdyaWQtcm93cyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyUzRSUzQ3BhdGggZD0nTTkgOWgxNHYzSDl6TTkgMTQuNWgxNHYzSDl6TTkgMjBoMTR2M0g5eicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1sYXlvdXQtZ3JpZC11bmlmb3JtIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBmaWxsPSclMjMwMDAnJTNFJTNDcGF0aCBkPSdNOSA5aDN2M0g5ek0yMCA5aDN2M2gtM3pNMTQuNSA5aDN2M2gtM3pNOSAxNC41aDN2M0g5ek0yMCAxNC41aDN2M2gtM3pNMTQuNSAxNC41aDN2M2gtM3pNOSAyMGgzdjNIOXpNMjAgMjBoM3YzaC0zek0xNC41IDIwaDN2M2gtM3onLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tbGlicmFyeSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTUuMzczIDIyaDEuMjU4Yy4yOC0uMzIuNjE2LS41OTcuOTk1LS44MTkgMS40NzgtLjg2MiA0LjAwNS0uOTA5IDUuMzg2LjEwOUgyNC41di05LjJzLS43OTctMi4yNS00LjQyLTIuMjVjLTEuODc1IDAtMi45MDIuNjAyLTMuNDU2IDEuMTg0YTIuNTY4IDIuNTY4IDAgMDAtLjYuOTc2aC0uMDQ4YTIuNTY5IDIuNTY5IDAgMDAtLjYtLjk3NmMtLjU1NC0uNTgyLTEuNTgxLTEuMTg0LTMuNDU2LTEuMTg0LTMuNjIzIDAtNC40MiAyLjI1LTQuNDIgMi4yNXY5LjE5aDEuNDg4YzEuMzgyLTEuMDE5IDMuOTEtLjk3IDUuMzg4LS4xMDUuMzguMjIzLjcxNy41MDMuOTk3LjgyNXptMS4xMjctOS43MTF2OC40NTdjLjE5NS0uMTU3LjQwMy0uMy42MjItLjQyOC45MjctLjU0MSAyLjExNS0uNzk2IDMuMjQxLS43ODcgMS4wMDYuMDA4IDIuMDgxLjIyNyAyLjk1Mi43NTloLjE4NXYtNy45NzNhMi40MTQgMi40MTQgMCAwMC0uNTA1LS41OTVjLS40Ni0uMzk3LTEuMzMtLjg4Mi0yLjkxNS0uODgyLTEuNTg2IDAtMi4zNC40ODMtMi42OTUuODM1YTEuNzQ5IDEuNzQ5IDAgMDAtLjM1My40OSAxLjA3NiAxLjA3NiAwIDAwLS4wNTIuMTMxbC0uMDA1LjAxNy4wMDEtLjAwNi4wMDItLjAwOHYtLjAwNWwuMDAxLS4wMDJ2LS4wMDJsLS4wMDUtLjAwMXptLTEgMGgtLjQ3NGwtLjAwNi4wMDF2LjAwMmwuMDAxLjAwMi4wMDEuMDA1LjAwMi4wMDguMDAxLjAwNi0uMDA1LS4wMTdhMS4wNzYgMS4wNzYgMCAwMC0uMDUzLS4xMzEgMS43NDkgMS43NDkgMCAwMC0uMzUzLS40OWMtLjM1NC0uMzUxLTEuMTA4LS44MzUtMi42OTQtLjgzNS0xLjU4NSAwLTIuNDU1LjQ4NS0yLjkxNi44ODJhMi40MTEgMi40MTEgMCAwMC0uNTA0LjU5NXY3Ljk2M2guMTg1Yy44NzItLjUzMiAxLjk0OC0uNzUyIDIuOTU0LS43NTkgMS4xMjgtLjAwOCAyLjMxNi4yNDkgMy4yNDMuNzkyLjIxNy4xMjcuNDI0LjI3LjYxOC40MjZ6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tbGluay1icm9rZW4ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J00xOCAxNHYtMmEyIDIgMCAxMC00IDB2MmgtMXYtMmEzIDMgMCAxMTYgMHYyek0xOSAxOGgtMXYyYTIgMiAwIDExLTQgMHYtMmgtMXYyYTMgMyAwIDEwNiAweicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1saW5rLWNvbm5lY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyUzRSUzQ3BhdGggZD0nTTE2IDEwYTIgMiAwIDAxMiAydjJoMXYtMmEzIDMgMCAxMC02IDB2Mmgxdi0yYTIgMiAwIDAxMi0yek0xOCAxOGgxdjJhMyAzIDAgMTEtNiAwdi0yaDF2MmEyIDIgMCAxMDQgMHonLyUzRSUzQ3BhdGggZD0nTTE1LjUgMTN2Nmgxdi02eicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1saXN0LWRldGFpbGVkIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBmaWxsPSclMjMwMDAnJTNFJTNDcGF0aCBkPSdNMTIgMTBoLTJ2MWgyek0xMiAyMGgtMnYxaDJ6TTEwIDE1aDJ2MWgtMnpNMjIgMTBoLTh2MWg4ek0xNCAyMGg4djFoLTh6TTIyIDE1aC04djFoOHonLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tbGlzdC10aWxlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNCAxMWgtM3YzaDN6bS00LTF2NWg1di01em0xMSAxaC0zdjNoM3ptLTQtMXY1aDV2LTV6bS0zIDhoLTN2M2gzem0tNC0xdjVoNXYtNXptMTEgMWgtM3YzaDN6bS00LTF2NWg1di01eicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWxpc3Qge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCcgZmlsbC1vcGFjaXR5PScuOCclM0UlM0NwYXRoIGQ9J00yMyAxMEg5djFoMTR6TTkgMTUuNWgxNHYxSDl6TTkgMjFoMTR2MUg5eicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1sb2NrLW9mZiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTE4IDE1aC41YS41LjUgMCAwMS41LjV2NWEuNS41IDAgMDEtLjUuNWgtNmEuNS41IDAgMDEtLjUtLjV2LTVhLjUuNSAwIDAxLjUtLjVIMTd2LTIuNWEyLjUgMi41IDAgMDE1IDBWMTRoLTF2LTEuNWExLjUgMS41IDAgMDAtMyAweicgZmlsbD0nJTIzMDAwJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1sb2NrLW9uIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xMy41IDE1di0xLjVhMi41IDIuNSAwIDAxNSAwVjE1aC41YS41LjUgMCAwMS41LjV2NWEuNS41IDAgMDEtLjUuNWgtNmEuNS41IDAgMDEtLjUtLjV2LTVhLjUuNSAwIDAxLjUtLjV6bTQtMS41VjE1aC0zdi0xLjVhMS41IDEuNSAwIDAxMyAweicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLW1pbnVzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMjEuNSAxNi41aC0xMXYtMWgxMXonIGZpbGw9JyUyMzAwMCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tcGxheSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTMgMTAuMDk4TDIyLjQ0MyAxNiAxMyAyMS45MDJ6bTEgMS44MDR2OC4xOTZMMjAuNTU3IDE2eicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXBsdXMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00xNS41IDE1LjV2LTVoMXY1aDV2MWgtNXY1aC0xdi01aC01di0xeicgZmlsbD0nJTIzMDAwJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1yYW5kb20ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTE1LjExOCAxMWEyLjUgMi41IDAgMDAtMS4zMzUuMzg2TDExLjIyOCAxM0gxOC41djFoLTguNDk3YS41MTIuNTEyIDAgMDAtLjAwMy4wNTFWMjAuNWMwIC4yNzguMjIzLjUuNDk3LjVoNy42MjhhLjQ5OC40OTggMCAwMC4zMjgtLjEyM2wzLjIwNi0yLjgwNWExIDEgMCAwMC4zNDEtLjc1M1YxMS41YS41LjUgMCAwMC0uNS0uNXptLTEuODY5LS40NmEzLjUgMy41IDAgMDExLjg3LS41NEgyMS41YTEuNSAxLjUgMCAwMTEuNSAxLjV2NS44MmEyIDIgMCAwMS0uNjgzIDEuNTA0bC0zLjIwNSAyLjgwNWMtLjI3NC4yNC0uNjI0LjM3MS0uOTg3LjM3MWgtNy42MjdDOS42NjggMjIgOSAyMS4zMjcgOSAyMC41di02LjQ0OWExLjUgMS41IDAgMDEuNjk5LTEuMjY4eicgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0NwYXRoIGQ9J00xMyAxNmExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6TTE3IDE2YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHpNMTcgMTlhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwek0xMyAxOWExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6Jy8lM0UlM0NnIGNsaXAtcnVsZT0nZXZlbm9kZCcgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ3BhdGggZD0nTTIyLjQwNyAxMC43MWEuNS41IDAgMDEtLjExNi42OTdsLTMuNSAyLjVhLjUuNSAwIDAxLS41ODItLjgxNGwzLjUtMi41YS41LjUgMCAwMS42OTguMTE2eicvJTNFJTNDcGF0aCBkPSdNMTggMjF2LThoMXY4eicvJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXJlY2VudCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyUzRSUzQ3BhdGggZD0nTTE1IDEydjVoNXYtMWgtNHYtNHonLyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMjQgMTZhOCA4IDAgMTEtMTYgMCA4IDggMCAwMTE2IDB6bS0xIDBhNyA3IDAgMTEtMTQgMCA3IDcgMCAwMTE0IDB6JyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tcmVzaXplLXRvLWZpdCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyUzRSUzQ3BhdGggZD0nTTguNjQ2IDkuMzU0TDEyLjI5MyAxM0gxMHYxaDR2LTRoLTF2Mi4yOTNMOS4zNTQgOC42NDZ6TTE5LjcwNyAxM2wzLjY0Ny0zLjY0Ni0uNzA3LS43MDhMMTkgMTIuMjkzVjEwaC0xdjRoNHYtMXpNMTkuNzA3IDE5bDMuNjQ3IDMuNjQ2LS43MDcuNzA4TDE5IDE5LjcwN1YyMmgtMXYtNGg0djF6TTEyLjI5MyAxOWwtMy42NDcgMy42NDYuNzA4LjcwOEwxMyAxOS43MDdWMjJoMXYtNGgtNHYxeicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1yZXNvbHZlLWZpbGxlZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTYgMjRhOCA4IDAgMTAwLTE2IDggOCAwIDAwMCAxNnptMy45MTEtOS42MzVsLS44MjItLjczLTMuNjEzIDQuMDY0LTIuNTg3LTIuNTg4LS43NzguNzc4IDMuNDEzIDMuNDEyeicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXJlc29sdmUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J00xOS45MTEgMTQuMzY1bC0uODIyLS43My0zLjYxMyA0LjA2My0yLjU4Ny0yLjU4Ny0uNzc4Ljc3OCAzLjQxMyAzLjQxMnonLyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMjQgMTZhOCA4IDAgMTEtMTYgMCA4IDggMCAwMTE2IDB6bS0xIDBhNyA3IDAgMTEtMTQgMCA3IDcgMCAwMTE0IDB6JyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tcmV2ZXJzZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTUuODU0IDguNjQ2TDE4LjIwNyAxMWwtMi4zNTMgMi4zNTQtLjcwOC0uNzA4IDEuMTQ3LTEuMTQ2SDE0Yy0uNTAzIDAtMS4yNy4xNTUtMS44OTUuNjA2LS42LjQzMi0xLjEwNSAxLjE1Ny0xLjEwNSAyLjM5NHY3LjI1aC0xVjE0LjVjMC0xLjU2My42NjItMi41ODggMS41Mi0zLjIwNi44MzMtLjYgMS44MTctLjc5NCAyLjQ4LS43OTRoMi4yOTNsLTEuMTQ3LTEuMTQ2ek0yMiAxMHY3LjI1YzAgMS41NjMtLjY2MiAyLjU4OC0xLjUyIDMuMjA2LS44MzMuNi0xLjgxNy43OTQtMi40OC43OTRoLTIuMjkzbDEuMTQ3IDEuMTQ2LS43MDguNzA4LTIuMzUzLTIuMzU0IDIuMzUzLTIuMzU0LjcwOC43MDgtMS4xNDcgMS4xNDZIMThjLjUwMyAwIDEuMjctLjE1NSAxLjg5NS0uNjA2LjYtLjQzMiAxLjEwNS0xLjE1NyAxLjEwNS0yLjM5NFYxMHonIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1zZWFyY2gtbGFyZ2Uge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTE4Ljg3NCAxOS41ODFhNiA2IDAgMTEuNzA3LS43MDdsNC4yNzMgNC4yNzItLjcwOC43MDh6TTIwIDE1YTUgNSAwIDExLTEwIDAgNSA1IDAgMDExMCAweicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXNlYXJjaCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTguMzk3IDE4LjYwNWE0LjU1MiA0LjU1MiAwIDExLjcwNy0uNzA3bDMuMjUgMy4yNDktLjcwOC43MDd6bS43MDYtMy41NTNhMy41NTIgMy41NTIgMCAxMS03LjEwMyAwIDMuNTUyIDMuNTUyIDAgMDE3LjEwMyAweicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXNldHRpbmdzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ3BhdGggZD0nTTE2Ljk1NCA5LjkyOGwtLjEzOS0uMzMxQzE2LjYzNSA5LjE2NSAxNi4zMDEgOSAxNiA5cy0uNjM1LjE2NS0uODE1LjU5N2wtLjEzOS4zMzFjLS41NiAxLjM0My0xLjk5MiAyLjEzLTMuNDI1IDEuNzJsLS41LS4xNDRjLS4zMDktLjA4OC0uNjA2LjAyNS0uODE1LjMyN2ExLjA1IDEuMDUgMCAwMC0uMDQ5IDEuMTIzYy43NDMgMS4zMjMuNDAyIDMuMDY4LS44NiAzLjk1LS4zMTguMjIyLS40NTYuNjE0LS4zNzUgMS4wMjQuMDgxLjQwOS4zNDIuNjY4LjY3My43MjNsLjE5NS4wMzNjMS41MjUuMjUzIDIuNTEgMS42ODcgMi40MjMgMy4xOC0uMDMuNTAzLjIyLjg2MS41MiAxLjAyOC4yODguMTYxLjYyMy4xNTUuOTIxLS4xMDhsLjM3My0uMzNhMi44IDIuOCAwIDAxMy43NDYgMGwuMzczLjMzYy4yOTguMjY0LjYzMy4yNy45MjIuMTA4LjMtLjE2Ny41NDktLjUyNS41Mi0xLjAyOC0uMDg4LTEuNDkzLjg5Ny0yLjkyNyAyLjQyMy0zLjE4bC4xOTQtLjAzM2MuMzMtLjA1NS41OTItLjMxNC42NzMtLjcyMy4wODEtLjQxLS4wNTctLjgwMi0uMzc1LTEuMDI0LTEuMjYyLS44ODItMS42MDMtMi42MjctLjg2LTMuOTVhMS4wNSAxLjA1IDAgMDAtLjA1LTEuMTIzYy0uMjA4LS4zMDItLjUwNS0uNDE1LS44MTUtLjMyN2wtLjQ5OS4xNDNjLTEuNDMzLjQxLTIuODY1LS4zNzYtMy40MjUtMS43MTl6bS43ODQtLjcxN2MtLjY3NC0xLjYxNS0yLjgwMi0xLjYxNS0zLjQ3NiAwbC0uMTM4LjMzMmMtLjM4My45MTctMS4zMjYgMS40MDEtMi4yMjggMS4xNDNsLS40OTktLjE0M2MtMS41NzUtLjQ1LTIuODU1IDEuMzk4LTIuMDEyIDIuOS41MDUuOS4yNTcgMi4wNy0uNTYgMi42NC0xLjM5Mi45NzMtLjkzMyAzLjI4Mi43MDYgMy41NTVsLjE5NS4wMzJjLjk2LjE2IDEuNjUgMS4wOSAxLjU4OCAyLjEzNS0uMTA0IDEuNzg4IDEuODIgMi44NjQgMy4xMDMgMS43MjdsLjM3My0uMzNhMS44IDEuOCAwIDAxMi40MiAwbC4zNzMuMzNjMS4yODQgMS4xMzcgMy4yMDcuMDYxIDMuMTAzLTEuNzI3LS4wNjEtMS4wNDYuNjI4LTEuOTc1IDEuNTg5LTIuMTM1bC4xOTQtLjAzMmMxLjYzOS0uMjczIDIuMDk4LTIuNTgyLjcwNy0zLjU1NC0uODE4LS41NzItMS4wNjYtMS43NDItLjU2MS0yLjY0Ljg0My0xLjUwMy0uNDM3LTMuMzUyLTIuMDEyLTIuOTAxbC0uNS4xNDNjLS45LjI1OC0xLjg0NC0uMjI2LTIuMjI2LTEuMTQzeicvJTNFJTNDcGF0aCBkPSdNMTYgMTguNWEyIDIgMCAxMDAtNCAyIDIgMCAwMDAgNHptMCAxYTMgMyAwIDEwMC02IDMgMyAwIDAwMCA2eicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1zaGFyZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMjAgOS41YTMuNSAzLjUgMCAwMC0xLjM4MyA2LjcxNkE0LjUxMyA0LjUxMyAwIDAwMTYgMTguNDM2YTQuNTEzIDQuNTEzIDAgMDAtMi42MTgtMi4yMiAzLjUwMSAzLjUwMSAwIDEwLTIuNzY0IDBBNC41MDIgNC41MDIgMCAwMDcuNSAyMC41VjIyaDE3di0xLjVjMC0yLjAwMy0xLjMwOS0zLjctMy4xMTgtNC4yODRBMy41MDEgMy41MDEgMCAwMDIwIDkuNXpNMTcuNSAxM2EyLjUgMi41IDAgMTE1IDAgMi41IDIuNSAwIDAxLTUgMHptLTEgOHYtLjVhMy41IDMuNSAwIDExNyAwdi41em0tMS0uNXYuNWgtN3YtLjVhMy41IDMuNSAwIDExNyAwem0tNi03LjVhMi41IDIuNSAwIDExNSAwIDIuNSAyLjUgMCAwMS01IDB6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tc21pbGV5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBmaWxsPSclMjMwMDAnJTNFJTNDcGF0aCBkPSdNMTYgMjBhNC4wMDIgNC4wMDIgMCAwMS0zLjg3NC0zaDEuMDQ1YTMuMDAxIDMuMDAxIDAgMDA1LjY1OCAwaDEuMDQ1QTQuMDAyIDQuMDAyIDAgMDExNiAyMHpNMTkuNSAxNC4xMjVhLjg3NS44NzUgMCAxMS0xLjc1IDAgLjg3NS44NzUgMCAwMTEuNzUgMHpNMTMuMTI1IDE1YS44NzUuODc1IDAgMTAwLTEuNzUuODc1Ljg3NSAwIDAwMCAxLjc1eicvJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00yNCAxNmE4IDggMCAxMS0xNiAwIDggOCAwIDAxMTYgMHptLTEgMGE3IDcgMCAxMS0xNCAwIDcgNyAwIDAxMTQgMHonIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1zb3J0LWFscGhhLWFzYyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgY2xpcC1ydWxlPSdldmVub2RkJyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCclM0UlM0NwYXRoIGQ9J00xMC44OTcgOUw5IDE0aDEuMDdsLjM3OS0xaDIuMTMzbC4zMzggMWgxLjA1NmwtMS42OS01em0xLjM0NyAzbC0uNjY3LTEuOTczTDEwLjgyOCAxMnpNMTIuNTUzIDE5SDkuNXYtMUgxNHYuOTc5TDEwLjkzMiAyMkgxNHYxSDkuNXYtLjk5M3pNMjAuNSA4LjI5M2wzLjM1NCAzLjM1My0uNzA4LjcwOEwyMSAxMC4yMDdWMjNoLTFWMTAuMjA3bC0yLjE0NiAyLjE0Ny0uNzA4LS43MDh6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXNvcnQtYWxwaGEtZHNjIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ3BhdGggZD0nTTEwLjg5NyA5TDkgMTRoMS4wN2wuMzc5LTFoMi4xMzNsLjMzOCAxaDEuMDU2bC0xLjY5LTV6bTEuMzQ3IDNsLS42NjctMS45NzNMMTAuODI4IDEyek0xMi41NTMgMTlIOS41di0xSDE0di45NzlMMTAuOTMyIDIySDE0djFIOS41di0uOTkzek0yMCAyMS43OTNWOWgxdjEyLjc5M2wyLjE0Ni0yLjE0Ny43MDguNzA4LTMuMzU0IDMuMzUzLTMuMzU0LTMuMzUzLjcwOC0uNzA4eicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1zb3J0LXRvcC1ib3R0b20ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTIwLjQ1IDEySDEwdi0xaDEwLjQ1Yy45NyAwIDEuMzcyIDEuMjQ0LjU4NCAxLjgxMkwxMS4wNSAyMGg5LjI0M2wtMS42NDctMS42NDYuNzA4LS43MDggMi44NTMgMi44NTQtMi44NTMgMi44NTQtLjcwOC0uNzA4TDIwLjI5MyAyMUgxMS4wNWMtLjk3IDAtMS4zNzItMS4yNDQtLjU4NC0xLjgxMnonIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1zcGFjaW5nIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMjIgMTFoLTJ2MTBoMnYxaC0zVjEwaDN6bS0xMC0xdjEySDl2LTFoMlYxMUg5di0xem00IDNoLTF2NmgxeicgZmlsbD0nJTIzMDAwJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1zcGlubmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNS4xNjUgOC41M2EuNS41IDAgMDEtLjQwNC41OEE3IDcgMCAxMDIzIDE2YS41LjUgMCAwMTEgMCA4IDggMCAxMS05LjQxNi03Ljg3NC41LjUgMCAwMS41OC40MDR6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tc3Rhci1vZmYge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTE4IDE0LjAwNEwxNiA4bC0yIDYuMDA0SDhMMTIuOTYgMThsLTEuOTA0IDZMMTYgMjBsNC45NDQgNC0xLjkwNC02TDI0IDE0em0zLjE2NS45OThsLTMuODg2LjAwMkwxNiAxMS4xNjRsLTEuMjggMy44NGgtMy44ODVsMy4yODUgMi42NDYtMS4xMDMgMy40NzdMMTYgMTguNzE0bDIuOTgzIDIuNDEzLTEuMTAzLTMuNDc2eicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXN0YXItb24ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00xNiA4bDIgNi4wMDRMMjQgMTRsLTQuOTYgNCAxLjkwNCA2TDE2IDIwbC00Ljk0NCA0IDEuOTA0LTZMOCAxNC4wMDRoNnonIGZpbGw9JyUyMzAwMCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tc3Ryb2tlLXdlaWdodCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTAgMTBoMTJ2MUgxMHptMCA0aDEydjJIMTB6bTEyIDVIMTB2M2gxMnonIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1zdHlsZXMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J00xMS41IDEzYTEuNSAxLjUgMCAxMDMgMCAxLjUgMS41IDAgMDAtMyAwek0xNy41IDEzYTEuNSAxLjUgMCAxMDMgMCAxLjUgMS41IDAgMDAtMyAwek0xOSAyMC41YTEuNSAxLjUgMCAxMTAtMyAxLjUgMS41IDAgMDEwIDN6TTExLjUgMTlhMS41IDEuNSAwIDEwMyAwIDEuNSAxLjUgMCAwMC0zIDB6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXN3YXAge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J00yMyAxMy4xODhsLTEuMTc1IDEuNDY4YTUuNSA1LjUgMCAwMC0xMC4wMDMtMi4yMTlsLjgzLjU1N2E0LjUgNC41IDAgMDE4LjIxNiAyLjA1N2wtMi4yLTEuNDY3LS41NTUuODMyIDMuMzgxIDIuMjU0IDIuMjg3LTIuODU4ek05IDE3LjE4OGwuNzguNjI0IDEuMTc2LTEuNDY4LjAyNi4xNTZhNS41IDUuNSAwIDAwOS45NzYgMi4wNjV2LS4wMDJsLS44My0uNTU3LS4wMDEuMDAxYTQuNSA0LjUgMCAwMS04LjIxNC0yLjA1OGwyLjIgMS40NjcuNTU1LS44MzItMy4zODItMi4yNTR6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXRoZW1lIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBmaWxsPSclMjMwMDAnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xMyAxMGgtM3YxMmgzem0tMy0xYTEgMSAwIDAwLTEgMXYxMmExIDEgMCAwMDEgMWgzYTEgMSAwIDAwMS0xVjEwYTEgMSAwIDAwLTEtMXonIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDcGF0aCBkPSdNMTAuNzUgMjAuNWEuNzUuNzUgMCAxMTEuNSAwIC43NS43NSAwIDAxLTEuNSAwek0yMiAxOGExIDEgMCAwMTEgMXYzYTEgMSAwIDAxLTEgMWgtN3YtMWg3di0zaC03di0xek0xOC4zODUgMTdsMi43NTctMi43NTdhMSAxIDAgMDAwLTEuNDE1bC0yLjEyMS0yLjEyYTEgMSAwIDAwLTEuNDE0IDBMMTUgMTMuMzEzdjEuNDE0bDMuMzE0LTMuMzE0IDIuMTIxIDIuMTIyTDE2Ljk3MSAxN3onLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tdGlkeS11cC1ncmlkIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBmaWxsPSclMjMwMDAnJTNFJTNDcGF0aCBkPSdNMTAgMTBoMnYyaC0yek0yMCAxMGgydjJoLTJ6TTEyIDE1aC0ydjJoMnpNMjAgMTVoMnYyaC0yek0xMiAyMGgtMnYyaDJ6TTIwIDIwaDJ2MmgtMnpNMTcgMTBoLTJ2Mmgyek0xNSAxNWgydjJoLTJ6TTE3IDIwaC0ydjJoMnonLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tdGlkeS11cC1saXN0LWhvcml6b250YWwge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J00xMCAyMi41di0xM2gydjEzek0xNSAyMi41di0xM2gydjEzek0yMCA5LjV2MTNoMnYtMTN6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXRpZHktdXAtbGlzdC12ZXJ0aWNhbCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyUzRSUzQ3BhdGggZD0nTTkuNSAxMGgxM3YyaC0xM3pNOS41IDE1aDEzdjJoLTEzek0yMi41IDIwaC0xM3YyaDEzeicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS10aW1lciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyUzRSUzQ3BhdGggZD0nTTE5IDhoLTZWN2g2ek0xNi41IDE3di01aC0xdjVhLjUuNSAwIDAwMSAweicvJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00yMi43MTUgMTIuNjVsMS41MjctMS41MjlMMjIuMTIyIDlsLTEuNDgzIDEuNDgyYTggOCAwIDEwMi4wNzUgMi4xNjd6TTIzIDE3YTcgNyAwIDExLTIuMzg0LTUuMjYzbC42NDcuNjQ3QTYuOTc0IDYuOTc0IDAgMDEyMyAxN3ptLTEuMDA4LTUuM2wuMTMuMTI4LjcwNi0uNzA3LS43MDctLjcwNy0uNzAxLjcwMWMuMi4xODUuMzkxLjM4LjU3Mi41ODV6JyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tdHJhc2gge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J00xNCAxOC41di00aDF2NHpNMTcgMTguNXYtNGgxdjR6Jy8lM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTE5IDEwLjVhMiAyIDAgMDAtMi0yaC0yYTIgMiAwIDAwLTIgMmgtM3YxaDF2MTBhMiAyIDAgMDAyIDJoNmEyIDIgMCAwMDItMnYtMTBoMXYtMXptLTQtMWExIDEgMCAwMC0xIDFoNGExIDEgMCAwMC0xLTF6bTUgMmgtOHYxMGExIDEgMCAwMDEgMWg2YTEgMSAwIDAwMS0xeicgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXZlcnRpY2FsLXBhZGRpbmcge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J005IDloMTR2MUg5em0wIDEzaDE0djFIOXonLyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTkgMTNoLTZ2Nmg2em0tNy0xdjhoOHYtOHonIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS12aXNpYmxlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBmaWxsPSclMjMwMDAnJTNFJTNDcGF0aCBkPSdNMTYgMThhMiAyIDAgMTAwLTQgMiAyIDAgMDAwIDR6Jy8lM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTE2IDEyYTcuNDk5IDcuNDk5IDAgMDE2LjYzNSA0QTcuNDk5IDcuNDk5IDAgMDExNiAyMGE3LjQ5OSA3LjQ5OSAwIDAxLTYuNjM1LTRBNy40OTkgNy40OTkgMCAwMTE2IDEyem0wIDdhNi40OTUgNi40OTUgMCAwMS01LjQ3OC0zQTYuNDk1IDYuNDk1IDAgMDExNiAxM2MyLjMgMCA0LjMyMiAxLjE5NCA1LjQ3OCAzQTYuNDk1IDYuNDk1IDAgMDExNiAxOXonIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS13YXJuaW5nLWxhcmdlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNiA2bDEwIDE4SDZ6bS0xIDExdi00aDJ2NHptMCAydjJoMnYtMnonIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS13YXJuaW5nIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNiA5bDggMTRIOHptLTEgOC41VjE0aDJ2My41em0wIDEuNXYyaDJ2LTJ6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi1idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiB2YXIoLS1zaXplLW1lZGl1bSk7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUtbWVkaXVtKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtc21hbGwpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5pY29uLWJ1dHRvbiAqIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NTAwJSkgaHVlLXJvdGF0ZSgxMTdkZWcpIGJyaWdodG5lc3MoMTA5JSkgY29udHJhc3QoMTA1JSk7XFxuICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzUwMCUpIGh1ZS1yb3RhdGUoMTE3ZGVnKSBicmlnaHRuZXNzKDEwOSUpIGNvbnRyYXN0KDEwNSUpO1xcbn1cXG5cXG4uaWNvbi1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0taG92ZXItZmlsbCk7XFxufVxcblxcbi5pY29uLWJ1dHRvbjphY3RpdmUsIC5pY29uLWJ1dHRvbjpmb2N1cyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibHVlKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5pY29uLWJ1dHRvbi0tc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbi5pY29uLWJ1dHRvbi0tc2VsZWN0ZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbi5pY29uLWJ1dHRvbi0tc2VsZWN0ZWQ6YWN0aXZlLCAuaWNvbi1idXR0b24tLXNlbGVjdGVkOmZvY3VzIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrMyk7XFxufVxcblxcbi5pY29uLWJ1dHRvbi0tc2VsZWN0ZWQgKiB7XFxuICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDEwMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDI2OWRlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCgxMDQlKTtcXG4gICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMjY5ZGVnKSBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDEwNCUpO1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaW5wdXRfX2ZpZWxkIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzbWFsbCk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcXG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1mb250LWxldHRlci1zcGFjaW5nLW5lZy14c21hbGwpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzBweDtcXG4gIG1hcmdpbjogMXB4IDAgMXB4IDA7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXh4c21hbGwpIHZhcigtLXNpemUteHh4c21hbGwpIHZhcigtLXNpemUteHhzbWFsbCkgdmFyKC0tc2l6ZS14eHNtYWxsKTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazgpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXNtYWxsKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5pbnB1dF9fZmllbGQ6aG92ZXIsIC5pbnB1dF9fZmllbGQ6cGxhY2Vob2xkZXItc2hvd246aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrOCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjazEpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG59XFxuXFxuLmlucHV0X19maWVsZDo6LW1vei1zZWxlY3Rpb24ge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUzKTtcXG59XFxuXFxuLmlucHV0X19maWVsZDo6c2VsZWN0aW9uIHtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlMyk7XFxufVxcblxcbi5pbnB1dF9fZmllbGQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrMyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmlucHV0X19maWVsZDo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tYmxhY2szKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uaW5wdXRfX2ZpZWxkOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tYmxhY2szKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uaW5wdXRfX2ZpZWxkOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrMyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmlucHV0X19maWVsZDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrMyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmlucHV0X19maWVsZDpwbGFjZWhvbGRlci1zaG93biB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjazEpO1xcbn1cXG5cXG4uaW5wdXRfX2ZpZWxkOmZvY3VzOnBsYWNlaG9sZGVyLXNob3duIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxufVxcblxcbi5pbnB1dF9fZmllbGQ6ZGlzYWJsZWQ6aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5pbnB1dF9fZmllbGQ6YWN0aXZlLCAuaW5wdXRfX2ZpZWxkOmZvY3VzIHtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcbn1cXG5cXG4uaW5wdXRfX2ZpZWxkOmRpc2FibGVkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazMpO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmlucHV0X19maWVsZDpkaXNhYmxlZDphY3RpdmUge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmlucHV0LS13aXRoLWljb24gLmlucHV0X19maWVsZCB7XFxuICBwYWRkaW5nLWxlZnQ6IDMycHg7XFxufVxcblxcbi5pbnB1dCAuaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDBweDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogdmFyKC0tc2l6ZS1tZWRpdW0pO1xcbiAgaGVpZ2h0OiB2YXIoLS1zaXplLW1lZGl1bSk7XFxuICB6LWluZGV4OiAxO1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5cXG4ubGFiZWwge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHNtYWxsKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWZvbnQtbGV0dGVyLXNwYWNpbmctcG9zLXhzbWFsbCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQpO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrMyk7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUtbWVkaXVtKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcGFkZGluZzogMCB2YXIoLS1zaXplLXh4eHNtYWxsKSAwIHZhcigtLXNpemUteHhzbWFsbCk7XFxufVxcblxcbi5vbmJvYXJkaW5nLXRpcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IHRvcDtcXG4gIHBhZGRpbmc6IDAgdmFyKC0tc2l6ZS14c21hbGwpIDAgMDtcXG59XFxuXFxuLm9uYm9hcmRpbmctdGlwIC5pY29uIHtcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tc2l6ZS14eHNtYWxsKTtcXG59XFxuXFxuLm9uYm9hcmRpbmctdGlwX19tc2cge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS14eHNtYWxsKSAwIHZhcigtLXNpemUteHhzbWFsbCkgMDtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzbWFsbCk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcXG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1mb250LWxldHRlci1zcGFjaW5nLXBvcy14c21hbGwpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazgpO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucmFkaW8ge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUtbWVkaXVtKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnJhZGlvX19idXR0b24ge1xcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnJhZGlvX19idXR0b246Y2hlY2tlZCArIC5yYWRpb19fbGFiZWw6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD1cXFwiNlxcXCIgaGVpZ2h0PVxcXCI2XFxcIiB2aWV3Qm94PVxcXCIwIDAgNiA2XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiJTNFJTNDcmVjdCB3aWR0aD1cXFwiNlxcXCIgaGVpZ2h0PVxcXCI2XFxcIiByeD1cXFwiM1xcXCIgZmlsbD1cXFwiYmxhY2tcXFwiIGZpbGwtb3BhY2l0eT1cXFwiMC44XFxcIi8lM0UlM0Mvc3ZnJTNFJTBBJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMnB4IDJweDtcXG59XFxuXFxuLnJhZGlvX19idXR0b246ZGlzYWJsZWQgKyAucmFkaW9fX2xhYmVsIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuXFxuLnJhZGlvX19idXR0b246Y2hlY2tlZDpkaXNhYmxlZCArIC5yYWRpb19fbGFiZWw6YmVmb3JlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG59XFxuXFxuLnJhZGlvX19sYWJlbCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrOCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3RhY2spO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHNtYWxsKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWZvbnQtbGluZS1oZWlnaHQpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWZvbnQtbGV0dGVyLXNwYWNpbmctcG9zLXhzbWFsbCk7XFxuICBtYXJnaW4tbGVmdDogLTE2cHg7XFxuICBwYWRkaW5nOiAwIHZhcigtLXNpemUteHNtYWxsKSAwIHZhcigtLXNpemUtc21hbGwpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnJhZGlvX19sYWJlbDpiZWZvcmUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2s4KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtc21hbGwpO1xcbiAgY29udGVudDogJyc7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgbWFyZ2luOiAycHggMTBweCAwIC04cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5zZWN0aW9uLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzbWFsbCk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XFxuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tZm9udC1sZXR0ZXItc3BhY2luZy1wb3MteHNtYWxsKTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodCk7XFxuICBjb2xvcjogdmFyKC0tYmxhY2s4KTtcXG4gIGhlaWdodDogdmFyKC0tc2l6ZS1tZWRpdW0pO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBwYWRkaW5nOiAwIGNhbGModmFyKC0tc2l6ZS14eHNtYWxsKSAvIDIpIDAgdmFyKC0tc2l6ZS14eHNtYWxsKTtcXG59XFxuXFxuc2VsZWN0LnNlbGVjdC1tZW51IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zZWxlY3QtbWVudSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zZWxlY3QtbWVudV9fYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMXB4IDAgMXB4IDA7XFxuICBwYWRkaW5nOiAwcHggdmFyKC0tc2l6ZS14eHNtYWxsKSAwcHggdmFyKC0tc2l6ZS14eHNtYWxsKTtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtc21hbGwpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4uc2VsZWN0LW1lbnVfX2J1dHRvbjpob3ZlciB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWJsYWNrMSk7XFxufVxcblxcbi5zZWxlY3QtbWVudV9fYnV0dG9uOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxufVxcblxcbi5zZWxlY3QtbWVudV9fYnV0dG9uOmRpc2FibGVkOmhvdmVyIHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5zZWxlY3QtbWVudV9fYnV0dG9uICoge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5zZWxlY3QtbWVudV9fYnV0dG9uOmhvdmVyIC5zZWxlY3QtbWVudV9fbGFiZWwtLXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazgpO1xcbn1cXG5cXG4uc2VsZWN0LW1lbnVfX2J1dHRvbjpmb2N1cyAuc2VsZWN0LW1lbnVfX2xhYmVsLS1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tYmxhY2s4KTtcXG59XFxuXFxuLnNlbGVjdC1tZW51X19idXR0b246ZGlzYWJsZWQ6aG92ZXIgLnNlbGVjdC1tZW51X19sYWJlbC0tcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrMyk7XFxufVxcblxcbi5zZWxlY3QtbWVudV9fYnV0dG9uOmhvdmVyIC5zZWxlY3QtbWVudV9fY2FyZXQsIC5zZWxlY3QtbWVudV9fYnV0dG9uOmZvY3VzIC5zZWxlY3QtbWVudV9fY2FyZXQge1xcbiAgb3BhY2l0eTogMS4wO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5zZWxlY3QtbWVudV9fYnV0dG9uOmRpc2FibGVkOmhvdmVyIC5zZWxlY3QtbWVudV9fY2FyZXQge1xcbiAgb3BhY2l0eTogMC4zO1xcbiAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xcbn1cXG5cXG4uc2VsZWN0LW1lbnVfX2J1dHRvbjpkaXNhYmxlZCAuc2VsZWN0LW1lbnVfX2xhYmVsIHtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazMpO1xcbn1cXG5cXG4uc2VsZWN0LW1lbnVfX2xhYmVsIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzbWFsbCk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcXG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1mb250LWxldHRlci1zcGFjaW5nLW5lZy14c21hbGwpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazgpO1xcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxuICBtYXJnaW4tdG9wOiAtMnB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4uc2VsZWN0LW1lbnVfX2xhYmVsLS1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tYmxhY2szKTtcXG59XFxuXFxuLnNlbGVjdC1tZW51X19jYXJldCB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLXRvcDogLTFweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMTJweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsJTNDc3ZnJTIwZmlsbCUzRCUyMm5vbmUlMjIlMjBoZWlnaHQlM0QlMjIzMCUyMiUyMHZpZXdCb3glM0QlMjIwJTIwMCUyMDMwJTIwMzAlMjIlMjB3aWR0aCUzRCUyMjMwJTIyJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIlM0UlM0NwYXRoJTIwY2xpcC1ydWxlJTNEJTIyZXZlbm9kZCUyMiUyMGQlM0QlMjJtMTUlMjAxNi43MDcxLTMtMyUyMC43MDcxLS43MDcxJTIwMi42NDY1JTIwMi42NDY0JTIwMi42NDY0LTIuNjQ2NC43MDcxLjcwNzEtMyUyMDMtLjM1MzUuMzUzNnolMjIlMjBmaWxsJTNEJTIyJTIzMDAwJTIyJTIwZmlsbC1ydWxlJTNEJTIyZXZlbm9kZCUyMiUyRiUzRSUzQyUyRnN2ZyUzRVxcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcblxcbi5zZWxlY3QtbWVudSAuaWNvbiB7XFxuICBtYXJnaW4tbGVmdDogLThweDtcXG4gIG1hcmdpbi10b3A6IC0ycHg7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcblxcbi5zZWxlY3QtbWVudV9fbWVudSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taHVkKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1odWQpO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS14eHNtYWxsKSAwIHZhcigtLXNpemUteHhzbWFsbCkgMDtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtc21hbGwpO1xcbiAgbWFyZ2luOiAwO1xcbiAgei1pbmRleDogMTAwMDtcXG4gIG92ZXJmbG93LXg6IG92ZXJsYXk7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uc2VsZWN0LW1lbnVfX21lbnUtLWFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnNlbGVjdC1tZW51X19tZW51Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUVBQUFBQkNBUUFBQUMxSEF3Q0FBQUFDMGxFUVZSNDJtTmtZQUFBQUFZQUFqQ0IwQzhBQUFBQVNVVk9SSzVDWUlJPSk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XFxufVxcblxcbi5zZWxlY3QtbWVudV9fbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYm9yZGVyOiBzb2xpZCAzcHggdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAxMHB4IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc2VsZWN0LW1lbnVfX21lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlcjogc29saWQgM3B4IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxufVxcblxcbi5zZWxlY3QtbWVudV9faXRlbSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zdGFjayk7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcXG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1mb250LWxldHRlci1zcGFjaW5nLW5lZy14c21hbGwpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWZvbnQtbGluZS1oZWlnaHQpO1xcbiAgaGVpZ2h0OiB2YXIoLS1zaXplLXNtYWxsKTtcXG4gIHBhZGRpbmc6IDBweCB2YXIoLS1zaXplLXhzbWFsbCkgMHB4IHZhcigtLXNpemUteHhzbWFsbCk7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnNlbGVjdC1tZW51X19pdGVtLS1zZWxlY3RlZCAuc2VsZWN0LW1lbnVfX2l0ZW0taWNvbiB7XFxuICBvcGFjaXR5OiAxLjA7XFxufVxcblxcbi5zZWxlY3QtbWVudV9faXRlbS1sYWJlbCB7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnNlbGVjdC1tZW51X19pdGVtLWljb24ge1xcbiAgd2lkdGg6IHZhcigtLXNpemUteHNtYWxsKTtcXG4gIGhlaWdodDogdmFyKC0tc2l6ZS14c21hbGwpO1xcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zaXplLXh4c21hbGwpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCwlM0NzdmclMjBmaWxsJTNEJTIybm9uZSUyMiUyMGhlaWdodCUzRCUyMjE2JTIyJTIwdmlld0JveCUzRCUyMjAlMjAwJTIwMTYlMjAxNiUyMiUyMHdpZHRoJTNEJTIyMTYlMjIlMjB4bWxucyUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyUyMiUzRSUzQ3BhdGglMjBjbGlwLXJ1bGUlM0QlMjJldmVub2RkJTIyJTIwZCUzRCUyMm0xMy4yMDY5JTIwNS4yMDcyNC01LjUwMDAyJTIwNS40OTk5Ni0uNzA3MTEuNzA3Mi0uNzA3MTEtLjcwNzItMy0yLjk5OTk2JTIwMS40MTQyMi0xLjQxNDIxJTIwMi4yOTI4OSUyMDIuMjkyODklMjA0Ljc5MjkzLTQuNzkyODl6JTIyJTIwZmlsbCUzRCUyMiUyM2ZmZiUyMiUyMGZpbGwtcnVsZSUzRCUyMmV2ZW5vZGQlMjIlMkYlM0UlM0MlMkZzdmclM0VcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbn1cXG5cXG4uc2VsZWN0LW1lbnUtLWhpZ2hsaWdodCwgLnNlbGVjdC1tZW51X19pdGVtOmhvdmVyLCAuc2VsZWN0LW1lbnVfX2l0ZW06Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbi5zZWxlY3QtbWVudV9fZGl2aWRlci1sYWJlbCB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcXG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1mb250LWxldHRlci1zcGFjaW5nLW5lZy1zbWFsbCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUtc21hbGwpO1xcbiAgcGFkZGluZzogMCB2YXIoLS1zaXplLXh4c21hbGwpIDAgdmFyKC0tc2l6ZS1tZWRpdW0pO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlNCk7XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4uc2VsZWN0LW1lbnVfX2RpdmlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUyKTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IDhweCAwIDdweCAwO1xcbn1cXG5cXG4uc3dpdGNoIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiB2YXIoLS1zaXplLW1lZGl1bSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAvKlxcbiAgICAmX190b2dnbGU6Zm9jdXMgKyAmX19sYWJlbDpiZWZvcmUge1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHZhcigtLWJsdWUpO1xcbiAgICB9XFxuICAgICovXFxufVxcblxcbi5zd2l0Y2hfX3RvZ2dsZSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uc3dpdGNoX190b2dnbGU6Y2hlY2tlZCArIC5zd2l0Y2hfX2xhYmVsOmJlZm9yZSB7XFxuICBjb2xvcjogdmFyKC0tYmxhY2s4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrOC1vcGFxdWUpO1xcbn1cXG5cXG4uc3dpdGNoX190b2dnbGU6Y2hlY2tlZCArIC5zd2l0Y2hfX2xhYmVsOmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMnB4KTtcXG59XFxuXFxuLnN3aXRjaF9fdG9nZ2xlOmNoZWNrZWQ6ZGlzYWJsZWQgKyAuc3dpdGNoX19sYWJlbDpiZWZvcmUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbn1cXG5cXG4uc3dpdGNoX190b2dnbGU6ZGlzYWJsZWQgKyAuc3dpdGNoX19sYWJlbCB7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5cXG4uc3dpdGNoX19sYWJlbCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrOCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3RhY2spO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHNtYWxsKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWZvbnQtbGV0dGVyLXNwYWNpbmctcG9zLXhzbWFsbCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tZm9udC1saW5lLWhlaWdodCk7XFxuICBtYXJnaW4tbGVmdDogLTE2cHg7XFxuICBwYWRkaW5nOiAwIHZhcigtLXNpemUteHNtYWxsKSAwIGNhbGModmFyKC0tc2l6ZS14bGFyZ2UpIC0gMnB4KTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5zd2l0Y2hfX2xhYmVsOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjazgtb3BhcXVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBsZWZ0OiA4cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwcHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAgMC4ycztcXG4gIHdpZHRoOiAyMnB4O1xcbn1cXG5cXG4uc3dpdGNoX19sYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjazgtb3BhcXVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBsZWZ0OiA4cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwcHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcXG4gIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG4udGV4dGFyZWEge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHNtYWxsKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWZvbnQtbGV0dGVyLXNwYWNpbmctbmVnLXhzbWFsbCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogNjJweDtcXG4gIG1hcmdpbjogMXB4IDAgMXB4IDA7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXh4c21hbGwpIHZhcigtLXNpemUteHh4c21hbGwpIHZhcigtLXNpemUteHhzbWFsbCkgdmFyKC0tc2l6ZS14eHNtYWxsKTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazgpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2sxKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtc21hbGwpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi50ZXh0YXJlYTpob3ZlciwgLnRleHRhcmVhOnBsYWNlaG9sZGVyLXNob3duOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazgpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2sxKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxufVxcblxcbi50ZXh0YXJlYTo6LW1vei1zZWxlY3Rpb24ge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUzKTtcXG59XFxuXFxuLnRleHRhcmVhOjpzZWxlY3Rpb24ge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUzKTtcXG59XFxuXFxuLnRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazMpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tYmxhY2szKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazMpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50ZXh0YXJlYTo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazMpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrMyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnRleHRhcmVhOmZvY3VzOnBsYWNlaG9sZGVyLXNob3duIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxufVxcblxcbi50ZXh0YXJlYTphY3RpdmUsIC50ZXh0YXJlYTpmb2N1cyB7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XFxuICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XFxuICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG59XFxuXFxuLnRleHRhcmVhOmRpc2FibGVkLCAudGV4dGFyZWE6ZGlzYWJsZWQ6aG92ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrMyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnRleHRhcmVhOmRpc2FibGVkOmFjdGl2ZSB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4udHlwZSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zdGFjayk7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14c21hbGwpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tZm9udC1saW5lLWhlaWdodCk7XFxuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tZm9udC1sZXR0ZXItc3BhY2luZy1wb3MteHNtYWxsKTtcXG4gIC8qIHNpemVzICovXFxuICAvKiB3ZWlnaHRzICovXFxuICAvKiBsZXR0ZXIgc3BhY2luZyBhZGp1c3RtZW50cyBiYXNlZCBwb3MvbmVnIGFwcGxpY2F0aW9uICovXFxufVxcblxcbi50eXBlLS1zbWFsbCB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XFxuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tZm9udC1sZXR0ZXItc3BhY2luZy1wb3Mtc21hbGwpO1xcbn1cXG5cXG4udHlwZS0tbGFyZ2Uge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGFyZ2UpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWZvbnQtbGluZS1oZWlnaHQtbGFyZ2UpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWZvbnQtbGV0dGVyLXNwYWNpbmctcG9zLWxhcmdlKTtcXG59XFxuXFxuLnR5cGUtLXhsYXJnZSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14bGFyZ2UpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWZvbnQtbGluZS1oZWlnaHQtbGFyZ2UpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWZvbnQtbGV0dGVyLXNwYWNpbmctcG9zLXhsYXJnZSk7XFxufVxcblxcbi50eXBlLS1tZWRpdW0ge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxufVxcblxcbi50eXBlLS1ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcXG59XFxuXFxuLnR5cGUtLWludmVyc2Uge1xcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWZvbnQtbGV0dGVyLXNwYWNpbmctbmVnLXhzbWFsbCk7XFxufVxcblxcbi50eXBlLS1pbnZlcnNlICsgLnR5cGUtLXNtYWxsIHtcXG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1mb250LWxldHRlci1zcGFjaW5nLW5lZy1zbWFsbCk7XFxufVxcblxcbi50eXBlLS1pbnZlcnNlICsgLnR5cGUtLWxhcmdlIHtcXG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1mb250LWxldHRlci1zcGFjaW5nLW5lZy1sYXJnZSk7XFxufVxcblxcbi50eXBlLS1pbnZlcnNlICsgLnR5cGUtLXhsYXJnZSB7XFxuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tZm9udC1sZXR0ZXItc3BhY2luZy1uZWcteGxhcmdlKTtcXG59XFxuXFxuLnR5cGUtLWlubGluZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWlucHV0LWhlaWdodDogMzJweDtcXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIC0tZm9udC1zaXplOiAuOWVtO1xcblxcbiAgICAtLWNvbG9yLXRhZ3M6ICM5OTk7XFxuICAgIC0tYm9yZGVyLWNvbG9yLXRhZ3M6ICNlZWU7XFxufVxcblxcbmJvZHkge1xcbiAgICBwYWRkaW5nOiAxZW07XFxufVxcblxcbi8qIFN0eWxlcyBmb3IgdGhlIFVSTCBiYXIuICovXFxuXFxuLnVybCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi51cmwgaW5wdXQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1pbnB1dC1oZWlnaHQpO1xcbn1cXG5cXG4vKiBTdHlsZXMgZm9yIHRoZSBleGFtcGxlIHdlYnNpdGVzLiAqL1xcbi5leGFtcGxlcyB7XFxuICAgIHBhZGRpbmc6IDFlbSAwO1xcbn1cXG5cXG4uZXhhbXBsZXMgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG4gICAgcGFkZGluZzogLjVlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLXRhZ3MpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRhZ3MpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5leGFtcGxlcyBzcGFuOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNik7XFxufVxcblxcbi8qIERpc3BsYXlpbmcgdGhlIGRhdGEgZnJvbSB0aGUgQVBJLiAqL1xcbi5yZXN1bHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xcbn1cXG5cXG4ucmVzdWx0ID4gKiB7XFxuICAgIG1hcmdpbi1ib3R0b206IC41ZW07XFxufVxcblxcbi5yZXN1bHQgLnRleHQtZGF0YSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG4gICAgcGFkZGluZzogLjVlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NDQztcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGNvbG9yOiAjNjY2O1xcbn1cXG5cXG4ucmVzdWx0IC5pbWFnZS1kYXRhIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmltcG9ydCB7IEF0dHJpYnV0ZUNvbW1pdHRlciwgQm9vbGVhbkF0dHJpYnV0ZVBhcnQsIEV2ZW50UGFydCwgTm9kZVBhcnQsIFByb3BlcnR5Q29tbWl0dGVyIH0gZnJvbSAnLi9wYXJ0cy5qcyc7XG4vKipcbiAqIENyZWF0ZXMgUGFydHMgd2hlbiBhIHRlbXBsYXRlIGlzIGluc3RhbnRpYXRlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIERlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHBhcnRzIGZvciBhbiBhdHRyaWJ1dGUtcG9zaXRpb24gYmluZGluZywgZ2l2ZW4gdGhlIGV2ZW50LCBhdHRyaWJ1dGVcbiAgICAgKiBuYW1lLCBhbmQgc3RyaW5nIGxpdGVyYWxzLlxuICAgICAqXG4gICAgICogQHBhcmFtIGVsZW1lbnQgVGhlIGVsZW1lbnQgY29udGFpbmluZyB0aGUgYmluZGluZ1xuICAgICAqIEBwYXJhbSBuYW1lICBUaGUgYXR0cmlidXRlIG5hbWVcbiAgICAgKiBAcGFyYW0gc3RyaW5ncyBUaGUgc3RyaW5nIGxpdGVyYWxzLiBUaGVyZSBhcmUgYWx3YXlzIGF0IGxlYXN0IHR3byBzdHJpbmdzLFxuICAgICAqICAgZXZlbnQgZm9yIGZ1bGx5LWNvbnRyb2xsZWQgYmluZGluZ3Mgd2l0aCBhIHNpbmdsZSBleHByZXNzaW9uLlxuICAgICAqL1xuICAgIGhhbmRsZUF0dHJpYnV0ZUV4cHJlc3Npb25zKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgcHJlZml4ID0gbmFtZVswXTtcbiAgICAgICAgaWYgKHByZWZpeCA9PT0gJy4nKSB7XG4gICAgICAgICAgICBjb25zdCBjb21taXR0ZXIgPSBuZXcgUHJvcGVydHlDb21taXR0ZXIoZWxlbWVudCwgbmFtZS5zbGljZSgxKSwgc3RyaW5ncyk7XG4gICAgICAgICAgICByZXR1cm4gY29tbWl0dGVyLnBhcnRzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmVmaXggPT09ICdAJykge1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgRXZlbnRQYXJ0KGVsZW1lbnQsIG5hbWUuc2xpY2UoMSksIG9wdGlvbnMuZXZlbnRDb250ZXh0KV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZWZpeCA9PT0gJz8nKSB7XG4gICAgICAgICAgICByZXR1cm4gW25ldyBCb29sZWFuQXR0cmlidXRlUGFydChlbGVtZW50LCBuYW1lLnNsaWNlKDEpLCBzdHJpbmdzKV07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29tbWl0dGVyID0gbmV3IEF0dHJpYnV0ZUNvbW1pdHRlcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzKTtcbiAgICAgICAgcmV0dXJuIGNvbW1pdHRlci5wYXJ0cztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHBhcnRzIGZvciBhIHRleHQtcG9zaXRpb24gYmluZGluZy5cbiAgICAgKiBAcGFyYW0gdGVtcGxhdGVGYWN0b3J5XG4gICAgICovXG4gICAgaGFuZGxlVGV4dEV4cHJlc3Npb24ob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IE5vZGVQYXJ0KG9wdGlvbnMpO1xuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBkZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IgPSBuZXcgRGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWZhdWx0LXRlbXBsYXRlLXByb2Nlc3Nvci5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5jb25zdCBkaXJlY3RpdmVzID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogQnJhbmRzIGEgZnVuY3Rpb24gYXMgYSBkaXJlY3RpdmUgZmFjdG9yeSBmdW5jdGlvbiBzbyB0aGF0IGxpdC1odG1sIHdpbGwgY2FsbFxuICogdGhlIGZ1bmN0aW9uIGR1cmluZyB0ZW1wbGF0ZSByZW5kZXJpbmcsIHJhdGhlciB0aGFuIHBhc3NpbmcgYXMgYSB2YWx1ZS5cbiAqXG4gKiBBIF9kaXJlY3RpdmVfIGlzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIFBhcnQgYXMgYW4gYXJndW1lbnQuIEl0IGhhcyB0aGVcbiAqIHNpZ25hdHVyZTogYChwYXJ0OiBQYXJ0KSA9PiB2b2lkYC5cbiAqXG4gKiBBIGRpcmVjdGl2ZSBfZmFjdG9yeV8gaXMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGFyZ3VtZW50cyBmb3IgZGF0YSBhbmRcbiAqIGNvbmZpZ3VyYXRpb24gYW5kIHJldHVybnMgYSBkaXJlY3RpdmUuIFVzZXJzIG9mIGRpcmVjdGl2ZSB1c3VhbGx5IHJlZmVyIHRvXG4gKiB0aGUgZGlyZWN0aXZlIGZhY3RvcnkgYXMgdGhlIGRpcmVjdGl2ZS4gRm9yIGV4YW1wbGUsIFwiVGhlIHJlcGVhdCBkaXJlY3RpdmVcIi5cbiAqXG4gKiBVc3VhbGx5IGEgdGVtcGxhdGUgYXV0aG9yIHdpbGwgaW52b2tlIGEgZGlyZWN0aXZlIGZhY3RvcnkgaW4gdGhlaXIgdGVtcGxhdGVcbiAqIHdpdGggcmVsZXZhbnQgYXJndW1lbnRzLCB3aGljaCB3aWxsIHRoZW4gcmV0dXJuIGEgZGlyZWN0aXZlIGZ1bmN0aW9uLlxuICpcbiAqIEhlcmUncyBhbiBleGFtcGxlIG9mIHVzaW5nIHRoZSBgcmVwZWF0KClgIGRpcmVjdGl2ZSBmYWN0b3J5IHRoYXQgdGFrZXMgYW5cbiAqIGFycmF5IGFuZCBhIGZ1bmN0aW9uIHRvIHJlbmRlciBhbiBpdGVtOlxuICpcbiAqIGBgYGpzXG4gKiBodG1sYDx1bD48JHtyZXBlYXQoaXRlbXMsIChpdGVtKSA9PiBodG1sYDxsaT4ke2l0ZW19PC9saT5gKX08L3VsPmBcbiAqIGBgYFxuICpcbiAqIFdoZW4gYHJlcGVhdGAgaXMgaW52b2tlZCwgaXQgcmV0dXJucyBhIGRpcmVjdGl2ZSBmdW5jdGlvbiB0aGF0IGNsb3NlcyBvdmVyXG4gKiBgaXRlbXNgIGFuZCB0aGUgdGVtcGxhdGUgZnVuY3Rpb24uIFdoZW4gdGhlIG91dGVyIHRlbXBsYXRlIGlzIHJlbmRlcmVkLCB0aGVcbiAqIHJldHVybiBkaXJlY3RpdmUgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggdGhlIFBhcnQgZm9yIHRoZSBleHByZXNzaW9uLlxuICogYHJlcGVhdGAgdGhlbiBwZXJmb3JtcyBpdCdzIGN1c3RvbSBsb2dpYyB0byByZW5kZXIgbXVsdGlwbGUgaXRlbXMuXG4gKlxuICogQHBhcmFtIGYgVGhlIGRpcmVjdGl2ZSBmYWN0b3J5IGZ1bmN0aW9uLiBNdXN0IGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFcbiAqIGZ1bmN0aW9uIG9mIHRoZSBzaWduYXR1cmUgYChwYXJ0OiBQYXJ0KSA9PiB2b2lkYC4gVGhlIHJldHVybmVkIGZ1bmN0aW9uIHdpbGxcbiAqIGJlIGNhbGxlZCB3aXRoIHRoZSBwYXJ0IG9iamVjdC5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGltcG9ydCB7ZGlyZWN0aXZlLCBodG1sfSBmcm9tICdsaXQtaHRtbCc7XG4gKlxuICogY29uc3QgaW1tdXRhYmxlID0gZGlyZWN0aXZlKCh2KSA9PiAocGFydCkgPT4ge1xuICogICBpZiAocGFydC52YWx1ZSAhPT0gdikge1xuICogICAgIHBhcnQuc2V0VmFsdWUodilcbiAqICAgfVxuICogfSk7XG4gKi9cbmV4cG9ydCBjb25zdCBkaXJlY3RpdmUgPSAoZikgPT4gKCguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgZCA9IGYoLi4uYXJncyk7XG4gICAgZGlyZWN0aXZlcy5zZXQoZCwgdHJ1ZSk7XG4gICAgcmV0dXJuIGQ7XG59KTtcbmV4cG9ydCBjb25zdCBpc0RpcmVjdGl2ZSA9IChvKSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiBvID09PSAnZnVuY3Rpb24nICYmIGRpcmVjdGl2ZXMuaGFzKG8pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRpcmVjdGl2ZS5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG4vKipcbiAqIFRydWUgaWYgdGhlIGN1c3RvbSBlbGVtZW50cyBwb2x5ZmlsbCBpcyBpbiB1c2UuXG4gKi9cbmV4cG9ydCBjb25zdCBpc0NFUG9seWZpbGwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHdpbmRvdy5jdXN0b21FbGVtZW50cyAhPSBudWxsICYmXG4gICAgd2luZG93LmN1c3RvbUVsZW1lbnRzLnBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2sgIT09XG4gICAgICAgIHVuZGVmaW5lZDtcbi8qKlxuICogUmVwYXJlbnRzIG5vZGVzLCBzdGFydGluZyBmcm9tIGBzdGFydGAgKGluY2x1c2l2ZSkgdG8gYGVuZGAgKGV4Y2x1c2l2ZSksXG4gKiBpbnRvIGFub3RoZXIgY29udGFpbmVyIChjb3VsZCBiZSB0aGUgc2FtZSBjb250YWluZXIpLCBiZWZvcmUgYGJlZm9yZWAuIElmXG4gKiBgYmVmb3JlYCBpcyBudWxsLCBpdCBhcHBlbmRzIHRoZSBub2RlcyB0byB0aGUgY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3QgcmVwYXJlbnROb2RlcyA9IChjb250YWluZXIsIHN0YXJ0LCBlbmQgPSBudWxsLCBiZWZvcmUgPSBudWxsKSA9PiB7XG4gICAgd2hpbGUgKHN0YXJ0ICE9PSBlbmQpIHtcbiAgICAgICAgY29uc3QgbiA9IHN0YXJ0Lm5leHRTaWJsaW5nO1xuICAgICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKHN0YXJ0LCBiZWZvcmUpO1xuICAgICAgICBzdGFydCA9IG47XG4gICAgfVxufTtcbi8qKlxuICogUmVtb3ZlcyBub2Rlcywgc3RhcnRpbmcgZnJvbSBgc3RhcnRgIChpbmNsdXNpdmUpIHRvIGBlbmRgIChleGNsdXNpdmUpLCBmcm9tXG4gKiBgY29udGFpbmVyYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZU5vZGVzID0gKGNvbnRhaW5lciwgc3RhcnQsIGVuZCA9IG51bGwpID0+IHtcbiAgICB3aGlsZSAoc3RhcnQgIT09IGVuZCkge1xuICAgICAgICBjb25zdCBuID0gc3RhcnQubmV4dFNpYmxpbmc7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChzdGFydCk7XG4gICAgICAgIHN0YXJ0ID0gbjtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZG9tLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxOCBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8qKlxuICogQSBzZW50aW5lbCB2YWx1ZSB0aGF0IHNpZ25hbHMgdGhhdCBhIHZhbHVlIHdhcyBoYW5kbGVkIGJ5IGEgZGlyZWN0aXZlIGFuZFxuICogc2hvdWxkIG5vdCBiZSB3cml0dGVuIHRvIHRoZSBET00uXG4gKi9cbmV4cG9ydCBjb25zdCBub0NoYW5nZSA9IHt9O1xuLyoqXG4gKiBBIHNlbnRpbmVsIHZhbHVlIHRoYXQgc2lnbmFscyBhIE5vZGVQYXJ0IHRvIGZ1bGx5IGNsZWFyIGl0cyBjb250ZW50LlxuICovXG5leHBvcnQgY29uc3Qgbm90aGluZyA9IHt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFydC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuaW1wb3J0IHsgaXNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS5qcyc7XG5pbXBvcnQgeyByZW1vdmVOb2RlcyB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IG5vQ2hhbmdlLCBub3RoaW5nIH0gZnJvbSAnLi9wYXJ0LmpzJztcbmltcG9ydCB7IFRlbXBsYXRlSW5zdGFuY2UgfSBmcm9tICcuL3RlbXBsYXRlLWluc3RhbmNlLmpzJztcbmltcG9ydCB7IFRlbXBsYXRlUmVzdWx0IH0gZnJvbSAnLi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuaW1wb3J0IHsgY3JlYXRlTWFya2VyIH0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5leHBvcnQgY29uc3QgaXNQcmltaXRpdmUgPSAodmFsdWUpID0+IHtcbiAgICByZXR1cm4gKHZhbHVlID09PSBudWxsIHx8XG4gICAgICAgICEodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpKTtcbn07XG5leHBvcnQgY29uc3QgaXNJdGVyYWJsZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSB8fFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAhISh2YWx1ZSAmJiB2YWx1ZVtTeW1ib2wuaXRlcmF0b3JdKTtcbn07XG4vKipcbiAqIFdyaXRlcyBhdHRyaWJ1dGUgdmFsdWVzIHRvIHRoZSBET00gZm9yIGEgZ3JvdXAgb2YgQXR0cmlidXRlUGFydHMgYm91bmQgdG8gYVxuICogc2luZ2xlIGF0dHJpYnV0ZS4gVGhlIHZhbHVlIGlzIG9ubHkgc2V0IG9uY2UgZXZlbiBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgcGFydHNcbiAqIGZvciBhbiBhdHRyaWJ1dGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVDb21taXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MpIHtcbiAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gICAgICAgIHRoaXMucGFydHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wYXJ0c1tpXSA9IHRoaXMuX2NyZWF0ZVBhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc2luZ2xlIHBhcnQuIE92ZXJyaWRlIHRoaXMgdG8gY3JlYXRlIGEgZGlmZmVybnQgdHlwZSBvZiBwYXJ0LlxuICAgICAqL1xuICAgIF9jcmVhdGVQYXJ0KCkge1xuICAgICAgICByZXR1cm4gbmV3IEF0dHJpYnV0ZVBhcnQodGhpcyk7XG4gICAgfVxuICAgIF9nZXRWYWx1ZSgpIHtcbiAgICAgICAgY29uc3Qgc3RyaW5ncyA9IHRoaXMuc3RyaW5ncztcbiAgICAgICAgY29uc3QgbCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgbGV0IHRleHQgPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHRleHQgKz0gc3RyaW5nc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSB0aGlzLnBhcnRzW2ldO1xuICAgICAgICAgICAgaWYgKHBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBwYXJ0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChpc1ByaW1pdGl2ZSh2KSB8fCAhaXNJdGVyYWJsZSh2KSkge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IHR5cGVvZiB2ID09PSAnc3RyaW5nJyA/IHYgOiBTdHJpbmcodik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHQgb2Ygdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSB0eXBlb2YgdCA9PT0gJ3N0cmluZycgPyB0IDogU3RyaW5nKHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRleHQgKz0gc3RyaW5nc1tsXTtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuICAgIGNvbW1pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLCB0aGlzLl9nZXRWYWx1ZSgpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8qKlxuICogQSBQYXJ0IHRoYXQgY29udHJvbHMgYWxsIG9yIHBhcnQgb2YgYW4gYXR0cmlidXRlIHZhbHVlLlxuICovXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoY29tbWl0dGVyKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY29tbWl0dGVyID0gY29tbWl0dGVyO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgIT09IG5vQ2hhbmdlICYmICghaXNQcmltaXRpdmUodmFsdWUpIHx8IHZhbHVlICE9PSB0aGlzLnZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGEgbm90IGEgZGlyZWN0aXZlLCBkaXJ0eSB0aGUgY29tbWl0dGVyIHNvIHRoYXQgaXQnbGxcbiAgICAgICAgICAgIC8vIGNhbGwgc2V0QXR0cmlidXRlLiBJZiB0aGUgdmFsdWUgaXMgYSBkaXJlY3RpdmUsIGl0J2xsIGRpcnR5IHRoZVxuICAgICAgICAgICAgLy8gY29tbWl0dGVyIGlmIGl0IGNhbGxzIHNldFZhbHVlKCkuXG4gICAgICAgICAgICBpZiAoIWlzRGlyZWN0aXZlKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tbWl0dGVyLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21taXQoKSB7XG4gICAgICAgIHdoaWxlIChpc0RpcmVjdGl2ZSh0aGlzLnZhbHVlKSkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aXZlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBub0NoYW5nZTtcbiAgICAgICAgICAgIGRpcmVjdGl2ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbW1pdHRlci5jb21taXQoKTtcbiAgICB9XG59XG4vKipcbiAqIEEgUGFydCB0aGF0IGNvbnRyb2xzIGEgbG9jYXRpb24gd2l0aGluIGEgTm9kZSB0cmVlLiBMaWtlIGEgUmFuZ2UsIE5vZGVQYXJ0XG4gKiBoYXMgc3RhcnQgYW5kIGVuZCBsb2NhdGlvbnMgYW5kIGNhbiBzZXQgYW5kIHVwZGF0ZSB0aGUgTm9kZXMgYmV0d2VlbiB0aG9zZVxuICogbG9jYXRpb25zLlxuICpcbiAqIE5vZGVQYXJ0cyBzdXBwb3J0IHNldmVyYWwgdmFsdWUgdHlwZXM6IHByaW1pdGl2ZXMsIE5vZGVzLCBUZW1wbGF0ZVJlc3VsdHMsXG4gKiBhcyB3ZWxsIGFzIGFycmF5cyBhbmQgaXRlcmFibGVzIG9mIHRob3NlIHR5cGVzLlxuICovXG5leHBvcnQgY2xhc3MgTm9kZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXBwZW5kcyB0aGlzIHBhcnQgaW50byBhIGNvbnRhaW5lci5cbiAgICAgKlxuICAgICAqIFRoaXMgcGFydCBtdXN0IGJlIGVtcHR5LCBhcyBpdHMgY29udGVudHMgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IG1vdmVkLlxuICAgICAqL1xuICAgIGFwcGVuZEludG8oY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuc3RhcnROb2RlID0gY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1hcmtlcigpKTtcbiAgICAgICAgdGhpcy5lbmROb2RlID0gY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1hcmtlcigpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyB0aGlzIHBhcnQgYWZ0ZXIgdGhlIGByZWZgIG5vZGUgKGJldHdlZW4gYHJlZmAgYW5kIGByZWZgJ3MgbmV4dFxuICAgICAqIHNpYmxpbmcpLiBCb3RoIGByZWZgIGFuZCBpdHMgbmV4dCBzaWJsaW5nIG11c3QgYmUgc3RhdGljLCB1bmNoYW5naW5nIG5vZGVzXG4gICAgICogc3VjaCBhcyB0aG9zZSB0aGF0IGFwcGVhciBpbiBhIGxpdGVyYWwgc2VjdGlvbiBvZiBhIHRlbXBsYXRlLlxuICAgICAqXG4gICAgICogVGhpcyBwYXJ0IG11c3QgYmUgZW1wdHksIGFzIGl0cyBjb250ZW50cyBhcmUgbm90IGF1dG9tYXRpY2FsbHkgbW92ZWQuXG4gICAgICovXG4gICAgaW5zZXJ0QWZ0ZXJOb2RlKHJlZikge1xuICAgICAgICB0aGlzLnN0YXJ0Tm9kZSA9IHJlZjtcbiAgICAgICAgdGhpcy5lbmROb2RlID0gcmVmLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIHRoaXMgcGFydCBpbnRvIGEgcGFyZW50IHBhcnQuXG4gICAgICpcbiAgICAgKiBUaGlzIHBhcnQgbXVzdCBiZSBlbXB0eSwgYXMgaXRzIGNvbnRlbnRzIGFyZSBub3QgYXV0b21hdGljYWxseSBtb3ZlZC5cbiAgICAgKi9cbiAgICBhcHBlbmRJbnRvUGFydChwYXJ0KSB7XG4gICAgICAgIHBhcnQuX19pbnNlcnQodGhpcy5zdGFydE5vZGUgPSBjcmVhdGVNYXJrZXIoKSk7XG4gICAgICAgIHBhcnQuX19pbnNlcnQodGhpcy5lbmROb2RlID0gY3JlYXRlTWFya2VyKCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnNlcnRzIHRoaXMgcGFydCBhZnRlciB0aGUgYHJlZmAgcGFydC5cbiAgICAgKlxuICAgICAqIFRoaXMgcGFydCBtdXN0IGJlIGVtcHR5LCBhcyBpdHMgY29udGVudHMgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IG1vdmVkLlxuICAgICAqL1xuICAgIGluc2VydEFmdGVyUGFydChyZWYpIHtcbiAgICAgICAgcmVmLl9faW5zZXJ0KHRoaXMuc3RhcnROb2RlID0gY3JlYXRlTWFya2VyKCkpO1xuICAgICAgICB0aGlzLmVuZE5vZGUgPSByZWYuZW5kTm9kZTtcbiAgICAgICAgcmVmLmVuZE5vZGUgPSB0aGlzLnN0YXJ0Tm9kZTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBjb21taXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0Tm9kZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMuX19wZW5kaW5nVmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmUgPSB0aGlzLl9fcGVuZGluZ1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlO1xuICAgICAgICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fX3BlbmRpbmdWYWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1ByaW1pdGl2ZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX19jb21taXRUZXh0KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICB0aGlzLl9fY29tbWl0VGVtcGxhdGVSZXN1bHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fX2NvbW1pdE5vZGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzSXRlcmFibGUodmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLl9fY29tbWl0SXRlcmFibGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlID09PSBub3RoaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbm90aGluZztcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZhbGxiYWNrLCB3aWxsIHJlbmRlciB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICB0aGlzLl9fY29tbWl0VGV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX19pbnNlcnQobm9kZSkge1xuICAgICAgICB0aGlzLmVuZE5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgdGhpcy5lbmROb2RlKTtcbiAgICB9XG4gICAgX19jb21taXROb2RlKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5fX2luc2VydCh2YWx1ZSk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgX19jb21taXRUZXh0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZS5uZXh0U2libGluZztcbiAgICAgICAgdmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbiAgICAgICAgLy8gSWYgYHZhbHVlYCBpc24ndCBhbHJlYWR5IGEgc3RyaW5nLCB3ZSBleHBsaWNpdGx5IGNvbnZlcnQgaXQgaGVyZSBpbiBjYXNlXG4gICAgICAgIC8vIGl0IGNhbid0IGJlIGltcGxpY2l0bHkgY29udmVydGVkIC0gaS5lLiBpdCdzIGEgc3ltYm9sLlxuICAgICAgICBjb25zdCB2YWx1ZUFzU3RyaW5nID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgaWYgKG5vZGUgPT09IHRoaXMuZW5kTm9kZS5wcmV2aW91c1NpYmxpbmcgJiZcbiAgICAgICAgICAgIG5vZGUubm9kZVR5cGUgPT09IDMgLyogTm9kZS5URVhUX05PREUgKi8pIHtcbiAgICAgICAgICAgIC8vIElmIHdlIG9ubHkgaGF2ZSBhIHNpbmdsZSB0ZXh0IG5vZGUgYmV0d2VlbiB0aGUgbWFya2Vycywgd2UgY2FuIGp1c3RcbiAgICAgICAgICAgIC8vIHNldCBpdHMgdmFsdWUsIHJhdGhlciB0aGFuIHJlcGxhY2luZyBpdC5cbiAgICAgICAgICAgIC8vIFRPRE8oanVzdGluZmFnbmFuaSk6IENhbiB3ZSBqdXN0IGNoZWNrIGlmIHRoaXMudmFsdWUgaXMgcHJpbWl0aXZlP1xuICAgICAgICAgICAgbm9kZS5kYXRhID0gdmFsdWVBc1N0cmluZztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX19jb21taXROb2RlKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlQXNTdHJpbmcpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIF9fY29tbWl0VGVtcGxhdGVSZXN1bHQodmFsdWUpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLm9wdGlvbnMudGVtcGxhdGVGYWN0b3J5KHZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZUluc3RhbmNlICYmXG4gICAgICAgICAgICB0aGlzLnZhbHVlLnRlbXBsYXRlID09PSB0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZS51cGRhdGUodmFsdWUudmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBwcm9wYWdhdGUgdGhlIHRlbXBsYXRlIHByb2Nlc3NvciBmcm9tIHRoZSBUZW1wbGF0ZVJlc3VsdFxuICAgICAgICAgICAgLy8gc28gdGhhdCB3ZSB1c2UgaXRzIHN5bnRheCBleHRlbnNpb24sIGV0Yy4gVGhlIHRlbXBsYXRlIGZhY3RvcnkgY29tZXNcbiAgICAgICAgICAgIC8vIGZyb20gdGhlIHJlbmRlciBmdW5jdGlvbiBvcHRpb25zIHNvIHRoYXQgaXQgY2FuIGNvbnRyb2wgdGVtcGxhdGVcbiAgICAgICAgICAgIC8vIGNhY2hpbmcgYW5kIHByZXByb2Nlc3NpbmcuXG4gICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUZW1wbGF0ZUluc3RhbmNlKHRlbXBsYXRlLCB2YWx1ZS5wcm9jZXNzb3IsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICBjb25zdCBmcmFnbWVudCA9IGluc3RhbmNlLl9jbG9uZSgpO1xuICAgICAgICAgICAgaW5zdGFuY2UudXBkYXRlKHZhbHVlLnZhbHVlcyk7XG4gICAgICAgICAgICB0aGlzLl9fY29tbWl0Tm9kZShmcmFnbWVudCk7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gaW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX19jb21taXRJdGVyYWJsZSh2YWx1ZSkge1xuICAgICAgICAvLyBGb3IgYW4gSXRlcmFibGUsIHdlIGNyZWF0ZSBhIG5ldyBJbnN0YW5jZVBhcnQgcGVyIGl0ZW0sIHRoZW4gc2V0IGl0c1xuICAgICAgICAvLyB2YWx1ZSB0byB0aGUgaXRlbS4gVGhpcyBpcyBhIGxpdHRsZSBiaXQgb2Ygb3ZlcmhlYWQgZm9yIGV2ZXJ5IGl0ZW0gaW5cbiAgICAgICAgLy8gYW4gSXRlcmFibGUsIGJ1dCBpdCBsZXRzIHVzIHJlY3Vyc2UgZWFzaWx5IGFuZCBlZmZpY2llbnRseSB1cGRhdGUgQXJyYXlzXG4gICAgICAgIC8vIG9mIFRlbXBsYXRlUmVzdWx0cyB0aGF0IHdpbGwgYmUgY29tbW9ubHkgcmV0dXJuZWQgZnJvbSBleHByZXNzaW9ucyBsaWtlOlxuICAgICAgICAvLyBhcnJheS5tYXAoKGkpID0+IGh0bWxgJHtpfWApLCBieSByZXVzaW5nIGV4aXN0aW5nIFRlbXBsYXRlSW5zdGFuY2VzLlxuICAgICAgICAvLyBJZiBfdmFsdWUgaXMgYW4gYXJyYXksIHRoZW4gdGhlIHByZXZpb3VzIHJlbmRlciB3YXMgb2YgYW5cbiAgICAgICAgLy8gaXRlcmFibGUgYW5kIF92YWx1ZSB3aWxsIGNvbnRhaW4gdGhlIE5vZGVQYXJ0cyBmcm9tIHRoZSBwcmV2aW91c1xuICAgICAgICAvLyByZW5kZXIuIElmIF92YWx1ZSBpcyBub3QgYW4gYXJyYXksIGNsZWFyIHRoaXMgcGFydCBhbmQgbWFrZSBhIG5ld1xuICAgICAgICAvLyBhcnJheSBmb3IgTm9kZVBhcnRzLlxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMZXRzIHVzIGtlZXAgdHJhY2sgb2YgaG93IG1hbnkgaXRlbXMgd2Ugc3RhbXBlZCBzbyB3ZSBjYW4gY2xlYXIgbGVmdG92ZXJcbiAgICAgICAgLy8gaXRlbXMgZnJvbSBhIHByZXZpb3VzIHJlbmRlclxuICAgICAgICBjb25zdCBpdGVtUGFydHMgPSB0aGlzLnZhbHVlO1xuICAgICAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICAgICAgbGV0IGl0ZW1QYXJ0O1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIC8vIFRyeSB0byByZXVzZSBhbiBleGlzdGluZyBwYXJ0XG4gICAgICAgICAgICBpdGVtUGFydCA9IGl0ZW1QYXJ0c1twYXJ0SW5kZXhdO1xuICAgICAgICAgICAgLy8gSWYgbm8gZXhpc3RpbmcgcGFydCwgY3JlYXRlIGEgbmV3IG9uZVxuICAgICAgICAgICAgaWYgKGl0ZW1QYXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpdGVtUGFydCA9IG5ldyBOb2RlUGFydCh0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGl0ZW1QYXJ0cy5wdXNoKGl0ZW1QYXJ0KTtcbiAgICAgICAgICAgICAgICBpZiAocGFydEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1QYXJ0LmFwcGVuZEludG9QYXJ0KHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbVBhcnQuaW5zZXJ0QWZ0ZXJQYXJ0KGl0ZW1QYXJ0c1twYXJ0SW5kZXggLSAxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbVBhcnQuc2V0VmFsdWUoaXRlbSk7XG4gICAgICAgICAgICBpdGVtUGFydC5jb21taXQoKTtcbiAgICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJ0SW5kZXggPCBpdGVtUGFydHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBUcnVuY2F0ZSB0aGUgcGFydHMgYXJyYXkgc28gX3ZhbHVlIHJlZmxlY3RzIHRoZSBjdXJyZW50IHN0YXRlXG4gICAgICAgICAgICBpdGVtUGFydHMubGVuZ3RoID0gcGFydEluZGV4O1xuICAgICAgICAgICAgdGhpcy5jbGVhcihpdGVtUGFydCAmJiBpdGVtUGFydC5lbmROb2RlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGVhcihzdGFydE5vZGUgPSB0aGlzLnN0YXJ0Tm9kZSkge1xuICAgICAgICByZW1vdmVOb2Rlcyh0aGlzLnN0YXJ0Tm9kZS5wYXJlbnROb2RlLCBzdGFydE5vZGUubmV4dFNpYmxpbmcsIHRoaXMuZW5kTm9kZSk7XG4gICAgfVxufVxuLyoqXG4gKiBJbXBsZW1lbnRzIGEgYm9vbGVhbiBhdHRyaWJ1dGUsIHJvdWdobHkgYXMgZGVmaW5lZCBpbiB0aGUgSFRNTFxuICogc3BlY2lmaWNhdGlvbi5cbiAqXG4gKiBJZiB0aGUgdmFsdWUgaXMgdHJ1dGh5LCB0aGVuIHRoZSBhdHRyaWJ1dGUgaXMgcHJlc2VudCB3aXRoIGEgdmFsdWUgb2ZcbiAqICcnLiBJZiB0aGUgdmFsdWUgaXMgZmFsc2V5LCB0aGUgYXR0cmlidXRlIGlzIHJlbW92ZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBCb29sZWFuQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgbmFtZSwgc3RyaW5ncykge1xuICAgICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoc3RyaW5ncy5sZW5ndGggIT09IDIgfHwgc3RyaW5nc1swXSAhPT0gJycgfHwgc3RyaW5nc1sxXSAhPT0gJycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQm9vbGVhbiBhdHRyaWJ1dGVzIGNhbiBvbmx5IGNvbnRhaW4gYSBzaW5nbGUgZXhwcmVzc2lvbicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgY29tbWl0KCkge1xuICAgICAgICB3aGlsZSAoaXNEaXJlY3RpdmUodGhpcy5fX3BlbmRpbmdWYWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHRoaXMuX19wZW5kaW5nVmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gICAgICAgICAgICBkaXJlY3RpdmUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX19wZW5kaW5nVmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSAhIXRoaXMuX19wZW5kaW5nVmFsdWU7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5hbWUsICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUodGhpcy5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gICAgfVxufVxuLyoqXG4gKiBTZXRzIGF0dHJpYnV0ZSB2YWx1ZXMgZm9yIFByb3BlcnR5UGFydHMsIHNvIHRoYXQgdGhlIHZhbHVlIGlzIG9ubHkgc2V0IG9uY2VcbiAqIGV2ZW4gaWYgdGhlcmUgYXJlIG11bHRpcGxlIHBhcnRzIGZvciBhIHByb3BlcnR5LlxuICpcbiAqIElmIGFuIGV4cHJlc3Npb24gY29udHJvbHMgdGhlIHdob2xlIHByb3BlcnR5IHZhbHVlLCB0aGVuIHRoZSB2YWx1ZSBpcyBzaW1wbHlcbiAqIGFzc2lnbmVkIHRvIHRoZSBwcm9wZXJ0eSB1bmRlciBjb250cm9sLiBJZiB0aGVyZSBhcmUgc3RyaW5nIGxpdGVyYWxzIG9yXG4gKiBtdWx0aXBsZSBleHByZXNzaW9ucywgdGhlbiB0aGUgc3RyaW5ncyBhcmUgZXhwcmVzc2lvbnMgYXJlIGludGVycG9sYXRlZCBpbnRvXG4gKiBhIHN0cmluZyBmaXJzdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFByb3BlcnR5Q29tbWl0dGVyIGV4dGVuZHMgQXR0cmlidXRlQ29tbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzKSB7XG4gICAgICAgIHN1cGVyKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MpO1xuICAgICAgICB0aGlzLnNpbmdsZSA9XG4gICAgICAgICAgICAoc3RyaW5ncy5sZW5ndGggPT09IDIgJiYgc3RyaW5nc1swXSA9PT0gJycgJiYgc3RyaW5nc1sxXSA9PT0gJycpO1xuICAgIH1cbiAgICBfY3JlYXRlUGFydCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wZXJ0eVBhcnQodGhpcyk7XG4gICAgfVxuICAgIF9nZXRWYWx1ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2luZ2xlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJ0c1swXS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VwZXIuX2dldFZhbHVlKCk7XG4gICAgfVxuICAgIGNvbW1pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpIHtcbiAgICAgICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRbdGhpcy5uYW1lXSA9IHRoaXMuX2dldFZhbHVlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUHJvcGVydHlQYXJ0IGV4dGVuZHMgQXR0cmlidXRlUGFydCB7XG59XG4vLyBEZXRlY3QgZXZlbnQgbGlzdGVuZXIgb3B0aW9ucyBzdXBwb3J0LiBJZiB0aGUgYGNhcHR1cmVgIHByb3BlcnR5IGlzIHJlYWRcbi8vIGZyb20gdGhlIG9wdGlvbnMgb2JqZWN0LCB0aGVuIG9wdGlvbnMgYXJlIHN1cHBvcnRlZC4gSWYgbm90LCB0aGVuIHRoZSB0aGlyZFxuLy8gYXJndW1lbnQgdG8gYWRkL3JlbW92ZUV2ZW50TGlzdGVuZXIgaXMgaW50ZXJwcmV0ZWQgYXMgdGhlIGJvb2xlYW4gY2FwdHVyZVxuLy8gdmFsdWUgc28gd2Ugc2hvdWxkIG9ubHkgcGFzcyB0aGUgYGNhcHR1cmVgIHByb3BlcnR5LlxubGV0IGV2ZW50T3B0aW9uc1N1cHBvcnRlZCA9IGZhbHNlO1xuLy8gV3JhcCBpbnRvIGFuIElJRkUgYmVjYXVzZSBNUyBFZGdlIDw9IHY0MSBkb2VzIG5vdCBzdXBwb3J0IGhhdmluZyB0cnkvY2F0Y2hcbi8vIGJsb2NrcyByaWdodCBpbnRvIHRoZSBib2R5IG9mIGEgbW9kdWxlXG4oKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBnZXQgY2FwdHVyZSgpIHtcbiAgICAgICAgICAgICAgICBldmVudE9wdGlvbnNTdXBwb3J0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKTtcbiAgICB9XG4gICAgY2F0Y2ggKF9lKSB7XG4gICAgICAgIC8vIGV2ZW50IG9wdGlvbnMgbm90IHN1cHBvcnRlZFxuICAgIH1cbn0pKCk7XG5leHBvcnQgY2xhc3MgRXZlbnRQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBldmVudE5hbWUsIGV2ZW50Q29udGV4dCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmV2ZW50TmFtZSA9IGV2ZW50TmFtZTtcbiAgICAgICAgdGhpcy5ldmVudENvbnRleHQgPSBldmVudENvbnRleHQ7XG4gICAgICAgIHRoaXMuX19ib3VuZEhhbmRsZUV2ZW50ID0gKGUpID0+IHRoaXMuaGFuZGxlRXZlbnQoZSk7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgY29tbWl0KCkge1xuICAgICAgICB3aGlsZSAoaXNEaXJlY3RpdmUodGhpcy5fX3BlbmRpbmdWYWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHRoaXMuX19wZW5kaW5nVmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gICAgICAgICAgICBkaXJlY3RpdmUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX19wZW5kaW5nVmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3TGlzdGVuZXIgPSB0aGlzLl9fcGVuZGluZ1ZhbHVlO1xuICAgICAgICBjb25zdCBvbGRMaXN0ZW5lciA9IHRoaXMudmFsdWU7XG4gICAgICAgIGNvbnN0IHNob3VsZFJlbW92ZUxpc3RlbmVyID0gbmV3TGlzdGVuZXIgPT0gbnVsbCB8fFxuICAgICAgICAgICAgb2xkTGlzdGVuZXIgIT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgIChuZXdMaXN0ZW5lci5jYXB0dXJlICE9PSBvbGRMaXN0ZW5lci5jYXB0dXJlIHx8XG4gICAgICAgICAgICAgICAgICAgIG5ld0xpc3RlbmVyLm9uY2UgIT09IG9sZExpc3RlbmVyLm9uY2UgfHxcbiAgICAgICAgICAgICAgICAgICAgbmV3TGlzdGVuZXIucGFzc2l2ZSAhPT0gb2xkTGlzdGVuZXIucGFzc2l2ZSk7XG4gICAgICAgIGNvbnN0IHNob3VsZEFkZExpc3RlbmVyID0gbmV3TGlzdGVuZXIgIT0gbnVsbCAmJiAob2xkTGlzdGVuZXIgPT0gbnVsbCB8fCBzaG91bGRSZW1vdmVMaXN0ZW5lcik7XG4gICAgICAgIGlmIChzaG91bGRSZW1vdmVMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE5hbWUsIHRoaXMuX19ib3VuZEhhbmRsZUV2ZW50LCB0aGlzLl9fb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3VsZEFkZExpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLl9fb3B0aW9ucyA9IGdldE9wdGlvbnMobmV3TGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE5hbWUsIHRoaXMuX19ib3VuZEhhbmRsZUV2ZW50LCB0aGlzLl9fb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YWx1ZSA9IG5ld0xpc3RlbmVyO1xuICAgICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gICAgfVxuICAgIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy52YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy52YWx1ZS5jYWxsKHRoaXMuZXZlbnRDb250ZXh0IHx8IHRoaXMuZWxlbWVudCwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52YWx1ZS5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyBXZSBjb3B5IG9wdGlvbnMgYmVjYXVzZSBvZiB0aGUgaW5jb25zaXN0ZW50IGJlaGF2aW9yIG9mIGJyb3dzZXJzIHdoZW4gcmVhZGluZ1xuLy8gdGhlIHRoaXJkIGFyZ3VtZW50IG9mIGFkZC9yZW1vdmVFdmVudExpc3RlbmVyLiBJRTExIGRvZXNuJ3Qgc3VwcG9ydCBvcHRpb25zXG4vLyBhdCBhbGwuIENocm9tZSA0MSBvbmx5IHJlYWRzIGBjYXB0dXJlYCBpZiB0aGUgYXJndW1lbnQgaXMgYW4gb2JqZWN0LlxuY29uc3QgZ2V0T3B0aW9ucyA9IChvKSA9PiBvICYmXG4gICAgKGV2ZW50T3B0aW9uc1N1cHBvcnRlZCA/XG4gICAgICAgIHsgY2FwdHVyZTogby5jYXB0dXJlLCBwYXNzaXZlOiBvLnBhc3NpdmUsIG9uY2U6IG8ub25jZSB9IDpcbiAgICAgICAgby5jYXB0dXJlKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5pbXBvcnQgeyByZW1vdmVOb2RlcyB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IE5vZGVQYXJ0IH0gZnJvbSAnLi9wYXJ0cy5qcyc7XG5pbXBvcnQgeyB0ZW1wbGF0ZUZhY3RvcnkgfSBmcm9tICcuL3RlbXBsYXRlLWZhY3RvcnkuanMnO1xuZXhwb3J0IGNvbnN0IHBhcnRzID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogUmVuZGVycyBhIHRlbXBsYXRlIHJlc3VsdCBvciBvdGhlciB2YWx1ZSB0byBhIGNvbnRhaW5lci5cbiAqXG4gKiBUbyB1cGRhdGUgYSBjb250YWluZXIgd2l0aCBuZXcgdmFsdWVzLCByZWV2YWx1YXRlIHRoZSB0ZW1wbGF0ZSBsaXRlcmFsIGFuZFxuICogY2FsbCBgcmVuZGVyYCB3aXRoIHRoZSBuZXcgcmVzdWx0LlxuICpcbiAqIEBwYXJhbSByZXN1bHQgQW55IHZhbHVlIHJlbmRlcmFibGUgYnkgTm9kZVBhcnQgLSB0eXBpY2FsbHkgYSBUZW1wbGF0ZVJlc3VsdFxuICogICAgIGNyZWF0ZWQgYnkgZXZhbHVhdGluZyBhIHRlbXBsYXRlIHRhZyBsaWtlIGBodG1sYCBvciBgc3ZnYC5cbiAqIEBwYXJhbSBjb250YWluZXIgQSBET00gcGFyZW50IHRvIHJlbmRlciB0by4gVGhlIGVudGlyZSBjb250ZW50cyBhcmUgZWl0aGVyXG4gKiAgICAgcmVwbGFjZWQsIG9yIGVmZmljaWVudGx5IHVwZGF0ZWQgaWYgdGhlIHNhbWUgcmVzdWx0IHR5cGUgd2FzIHByZXZpb3VzXG4gKiAgICAgcmVuZGVyZWQgdGhlcmUuXG4gKiBAcGFyYW0gb3B0aW9ucyBSZW5kZXJPcHRpb25zIGZvciB0aGUgZW50aXJlIHJlbmRlciB0cmVlIHJlbmRlcmVkIHRvIHRoaXNcbiAqICAgICBjb250YWluZXIuIFJlbmRlciBvcHRpb25zIG11c3QgKm5vdCogY2hhbmdlIGJldHdlZW4gcmVuZGVycyB0byB0aGUgc2FtZVxuICogICAgIGNvbnRhaW5lciwgYXMgdGhvc2UgY2hhbmdlcyB3aWxsIG5vdCBlZmZlY3QgcHJldmlvdXNseSByZW5kZXJlZCBET00uXG4gKi9cbmV4cG9ydCBjb25zdCByZW5kZXIgPSAocmVzdWx0LCBjb250YWluZXIsIG9wdGlvbnMpID0+IHtcbiAgICBsZXQgcGFydCA9IHBhcnRzLmdldChjb250YWluZXIpO1xuICAgIGlmIChwYXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVtb3ZlTm9kZXMoY29udGFpbmVyLCBjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgIHBhcnRzLnNldChjb250YWluZXIsIHBhcnQgPSBuZXcgTm9kZVBhcnQoT2JqZWN0LmFzc2lnbih7IHRlbXBsYXRlRmFjdG9yeSB9LCBvcHRpb25zKSkpO1xuICAgICAgICBwYXJ0LmFwcGVuZEludG8oY29udGFpbmVyKTtcbiAgICB9XG4gICAgcGFydC5zZXRWYWx1ZShyZXN1bHQpO1xuICAgIHBhcnQuY29tbWl0KCk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVuZGVyLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmltcG9ydCB7IG1hcmtlciwgVGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcbi8qKlxuICogVGhlIGRlZmF1bHQgVGVtcGxhdGVGYWN0b3J5IHdoaWNoIGNhY2hlcyBUZW1wbGF0ZXMga2V5ZWQgb25cbiAqIHJlc3VsdC50eXBlIGFuZCByZXN1bHQuc3RyaW5ncy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlRmFjdG9yeShyZXN1bHQpIHtcbiAgICBsZXQgdGVtcGxhdGVDYWNoZSA9IHRlbXBsYXRlQ2FjaGVzLmdldChyZXN1bHQudHlwZSk7XG4gICAgaWYgKHRlbXBsYXRlQ2FjaGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0ZW1wbGF0ZUNhY2hlID0ge1xuICAgICAgICAgICAgc3RyaW5nc0FycmF5OiBuZXcgV2Vha01hcCgpLFxuICAgICAgICAgICAga2V5U3RyaW5nOiBuZXcgTWFwKClcbiAgICAgICAgfTtcbiAgICAgICAgdGVtcGxhdGVDYWNoZXMuc2V0KHJlc3VsdC50eXBlLCB0ZW1wbGF0ZUNhY2hlKTtcbiAgICB9XG4gICAgbGV0IHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5zdHJpbmdzQXJyYXkuZ2V0KHJlc3VsdC5zdHJpbmdzKTtcbiAgICBpZiAodGVtcGxhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuICAgIC8vIElmIHRoZSBUZW1wbGF0ZVN0cmluZ3NBcnJheSBpcyBuZXcsIGdlbmVyYXRlIGEga2V5IGZyb20gdGhlIHN0cmluZ3NcbiAgICAvLyBUaGlzIGtleSBpcyBzaGFyZWQgYmV0d2VlbiBhbGwgdGVtcGxhdGVzIHdpdGggaWRlbnRpY2FsIGNvbnRlbnRcbiAgICBjb25zdCBrZXkgPSByZXN1bHQuc3RyaW5ncy5qb2luKG1hcmtlcik7XG4gICAgLy8gQ2hlY2sgaWYgd2UgYWxyZWFkeSBoYXZlIGEgVGVtcGxhdGUgZm9yIHRoaXMga2V5XG4gICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZUNhY2hlLmtleVN0cmluZy5nZXQoa2V5KTtcbiAgICBpZiAodGVtcGxhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIG5vdCBzZWVuIHRoaXMga2V5IGJlZm9yZSwgY3JlYXRlIGEgbmV3IFRlbXBsYXRlXG4gICAgICAgIHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKHJlc3VsdCwgcmVzdWx0LmdldFRlbXBsYXRlRWxlbWVudCgpKTtcbiAgICAgICAgLy8gQ2FjaGUgdGhlIFRlbXBsYXRlIGZvciB0aGlzIGtleVxuICAgICAgICB0ZW1wbGF0ZUNhY2hlLmtleVN0cmluZy5zZXQoa2V5LCB0ZW1wbGF0ZSk7XG4gICAgfVxuICAgIC8vIENhY2hlIGFsbCBmdXR1cmUgcXVlcmllcyBmb3IgdGhpcyBUZW1wbGF0ZVN0cmluZ3NBcnJheVxuICAgIHRlbXBsYXRlQ2FjaGUuc3RyaW5nc0FycmF5LnNldChyZXN1bHQuc3RyaW5ncywgdGVtcGxhdGUpO1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbn1cbmV4cG9ydCBjb25zdCB0ZW1wbGF0ZUNhY2hlcyA9IG5ldyBNYXAoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRlbXBsYXRlLWZhY3RvcnkuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cbmltcG9ydCB7IGlzQ0VQb2x5ZmlsbCB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGlzVGVtcGxhdGVQYXJ0QWN0aXZlIH0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG4vKipcbiAqIEFuIGluc3RhbmNlIG9mIGEgYFRlbXBsYXRlYCB0aGF0IGNhbiBiZSBhdHRhY2hlZCB0byB0aGUgRE9NIGFuZCB1cGRhdGVkXG4gKiB3aXRoIG5ldyB2YWx1ZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZUluc3RhbmNlIHtcbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZSwgcHJvY2Vzc29yLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX19wYXJ0cyA9IFtdO1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICB1cGRhdGUodmFsdWVzKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBwYXJ0IG9mIHRoaXMuX19wYXJ0cykge1xuICAgICAgICAgICAgaWYgKHBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBhcnQuc2V0VmFsdWUodmFsdWVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IHBhcnQgb2YgdGhpcy5fX3BhcnRzKSB7XG4gICAgICAgICAgICBpZiAocGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFydC5jb21taXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBfY2xvbmUoKSB7XG4gICAgICAgIC8vIFRoZXJlIGFyZSBhIG51bWJlciBvZiBzdGVwcyBpbiB0aGUgbGlmZWN5Y2xlIG9mIGEgdGVtcGxhdGUgaW5zdGFuY2Unc1xuICAgICAgICAvLyBET00gZnJhZ21lbnQ6XG4gICAgICAgIC8vICAxLiBDbG9uZSAtIGNyZWF0ZSB0aGUgaW5zdGFuY2UgZnJhZ21lbnRcbiAgICAgICAgLy8gIDIuIEFkb3B0IC0gYWRvcHQgaW50byB0aGUgbWFpbiBkb2N1bWVudFxuICAgICAgICAvLyAgMy4gUHJvY2VzcyAtIGZpbmQgcGFydCBtYXJrZXJzIGFuZCBjcmVhdGUgcGFydHNcbiAgICAgICAgLy8gIDQuIFVwZ3JhZGUgLSB1cGdyYWRlIGN1c3RvbSBlbGVtZW50c1xuICAgICAgICAvLyAgNS4gVXBkYXRlIC0gc2V0IG5vZGUsIGF0dHJpYnV0ZSwgcHJvcGVydHksIGV0Yy4sIHZhbHVlc1xuICAgICAgICAvLyAgNi4gQ29ubmVjdCAtIGNvbm5lY3QgdG8gdGhlIGRvY3VtZW50LiBPcHRpb25hbCBhbmQgb3V0c2lkZSBvZiB0aGlzXG4gICAgICAgIC8vICAgICBtZXRob2QuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFdlIGhhdmUgYSBmZXcgY29uc3RyYWludHMgb24gdGhlIG9yZGVyaW5nIG9mIHRoZXNlIHN0ZXBzOlxuICAgICAgICAvLyAgKiBXZSBuZWVkIHRvIHVwZ3JhZGUgYmVmb3JlIHVwZGF0aW5nLCBzbyB0aGF0IHByb3BlcnR5IHZhbHVlcyB3aWxsIHBhc3NcbiAgICAgICAgLy8gICAgdGhyb3VnaCBhbnkgcHJvcGVydHkgc2V0dGVycy5cbiAgICAgICAgLy8gICogV2Ugd291bGQgbGlrZSB0byBwcm9jZXNzIGJlZm9yZSB1cGdyYWRpbmcgc28gdGhhdCB3ZSdyZSBzdXJlIHRoYXQgdGhlXG4gICAgICAgIC8vICAgIGNsb25lZCBmcmFnbWVudCBpcyBpbmVydCBhbmQgbm90IGRpc3R1cmJlZCBieSBzZWxmLW1vZGlmeWluZyBET00uXG4gICAgICAgIC8vICAqIFdlIHdhbnQgY3VzdG9tIGVsZW1lbnRzIHRvIHVwZ3JhZGUgZXZlbiBpbiBkaXNjb25uZWN0ZWQgZnJhZ21lbnRzLlxuICAgICAgICAvL1xuICAgICAgICAvLyBHaXZlbiB0aGVzZSBjb25zdHJhaW50cywgd2l0aCBmdWxsIGN1c3RvbSBlbGVtZW50cyBzdXBwb3J0IHdlIHdvdWxkXG4gICAgICAgIC8vIHByZWZlciB0aGUgb3JkZXI6IENsb25lLCBQcm9jZXNzLCBBZG9wdCwgVXBncmFkZSwgVXBkYXRlLCBDb25uZWN0XG4gICAgICAgIC8vXG4gICAgICAgIC8vIEJ1dCBTYWZhcmkgZG9lcyBub3QgaW1wbGVtZW50IEN1c3RvbUVsZW1lbnRSZWdpc3RyeSN1cGdyYWRlLCBzbyB3ZVxuICAgICAgICAvLyBjYW4gbm90IGltcGxlbWVudCB0aGF0IG9yZGVyIGFuZCBzdGlsbCBoYXZlIHVwZ3JhZGUtYmVmb3JlLXVwZGF0ZSBhbmRcbiAgICAgICAgLy8gdXBncmFkZSBkaXNjb25uZWN0ZWQgZnJhZ21lbnRzLiBTbyB3ZSBpbnN0ZWFkIHNhY3JpZmljZSB0aGVcbiAgICAgICAgLy8gcHJvY2Vzcy1iZWZvcmUtdXBncmFkZSBjb25zdHJhaW50LCBzaW5jZSBpbiBDdXN0b20gRWxlbWVudHMgdjEgZWxlbWVudHNcbiAgICAgICAgLy8gbXVzdCBub3QgbW9kaWZ5IHRoZWlyIGxpZ2h0IERPTSBpbiB0aGUgY29uc3RydWN0b3IuIFdlIHN0aWxsIGhhdmUgaXNzdWVzXG4gICAgICAgIC8vIHdoZW4gY28tZXhpc3Rpbmcgd2l0aCBDRXYwIGVsZW1lbnRzIGxpa2UgUG9seW1lciAxLCBhbmQgd2l0aCBwb2x5ZmlsbHNcbiAgICAgICAgLy8gdGhhdCBkb24ndCBzdHJpY3RseSBhZGhlcmUgdG8gdGhlIG5vLW1vZGlmaWNhdGlvbiBydWxlIGJlY2F1c2Ugc2hhZG93XG4gICAgICAgIC8vIERPTSwgd2hpY2ggbWF5IGJlIGNyZWF0ZWQgaW4gdGhlIGNvbnN0cnVjdG9yLCBpcyBlbXVsYXRlZCBieSBiZWluZyBwbGFjZWRcbiAgICAgICAgLy8gaW4gdGhlIGxpZ2h0IERPTS5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gVGhlIHJlc3VsdGluZyBvcmRlciBpcyBvbiBuYXRpdmUgaXM6IENsb25lLCBBZG9wdCwgVXBncmFkZSwgUHJvY2VzcyxcbiAgICAgICAgLy8gVXBkYXRlLCBDb25uZWN0LiBkb2N1bWVudC5pbXBvcnROb2RlKCkgcGVyZm9ybXMgQ2xvbmUsIEFkb3B0LCBhbmQgVXBncmFkZVxuICAgICAgICAvLyBpbiBvbmUgc3RlcC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gVGhlIEN1c3RvbSBFbGVtZW50cyB2MSBwb2x5ZmlsbCBzdXBwb3J0cyB1cGdyYWRlKCksIHNvIHRoZSBvcmRlciB3aGVuXG4gICAgICAgIC8vIHBvbHlmaWxsZWQgaXMgdGhlIG1vcmUgaWRlYWw6IENsb25lLCBQcm9jZXNzLCBBZG9wdCwgVXBncmFkZSwgVXBkYXRlLFxuICAgICAgICAvLyBDb25uZWN0LlxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IGlzQ0VQb2x5ZmlsbCA/XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlLmVsZW1lbnQuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkgOlxuICAgICAgICAgICAgZG9jdW1lbnQuaW1wb3J0Tm9kZSh0aGlzLnRlbXBsYXRlLmVsZW1lbnQuY29udGVudCwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHN0YWNrID0gW107XG4gICAgICAgIGNvbnN0IHBhcnRzID0gdGhpcy50ZW1wbGF0ZS5wYXJ0cztcbiAgICAgICAgLy8gRWRnZSBuZWVkcyBhbGwgNCBwYXJhbWV0ZXJzIHByZXNlbnQ7IElFMTEgbmVlZHMgM3JkIHBhcmFtZXRlciB0byBiZSBudWxsXG4gICAgICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoZnJhZ21lbnQsIDEzMyAvKiBOb2RlRmlsdGVyLlNIT1dfe0VMRU1FTlR8Q09NTUVOVHxURVhUfSAqLywgbnVsbCwgZmFsc2UpO1xuICAgICAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICAgICAgbGV0IG5vZGVJbmRleCA9IDA7XG4gICAgICAgIGxldCBwYXJ0O1xuICAgICAgICBsZXQgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICAvLyBMb29wIHRocm91Z2ggYWxsIHRoZSBub2RlcyBhbmQgcGFydHMgb2YgYSB0ZW1wbGF0ZVxuICAgICAgICB3aGlsZSAocGFydEluZGV4IDwgcGFydHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBwYXJ0ID0gcGFydHNbcGFydEluZGV4XTtcbiAgICAgICAgICAgIGlmICghaXNUZW1wbGF0ZVBhcnRBY3RpdmUocGFydCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fcGFydHMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJvZ3Jlc3MgdGhlIHRyZWUgd2Fsa2VyIHVudGlsIHdlIGZpbmQgb3VyIG5leHQgcGFydCdzIG5vZGUuXG4gICAgICAgICAgICAvLyBOb3RlIHRoYXQgbXVsdGlwbGUgcGFydHMgbWF5IHNoYXJlIHRoZSBzYW1lIG5vZGUgKGF0dHJpYnV0ZSBwYXJ0c1xuICAgICAgICAgICAgLy8gb24gYSBzaW5nbGUgZWxlbWVudCksIHNvIHRoaXMgbG9vcCBtYXkgbm90IHJ1biBhdCBhbGwuXG4gICAgICAgICAgICB3aGlsZSAobm9kZUluZGV4IDwgcGFydC5pbmRleCkge1xuICAgICAgICAgICAgICAgIG5vZGVJbmRleCsrO1xuICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVOYW1lID09PSAnVEVNUExBVEUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IG5vZGUuY29udGVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChub2RlID0gd2Fsa2VyLm5leHROb2RlKCkpID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlJ3ZlIGV4aGF1c3RlZCB0aGUgY29udGVudCBpbnNpZGUgYSBuZXN0ZWQgdGVtcGxhdGUgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAgICAgLy8gQmVjYXVzZSB3ZSBzdGlsbCBoYXZlIHBhcnRzICh0aGUgb3V0ZXIgZm9yLWxvb3ApLCB3ZSBrbm93OlxuICAgICAgICAgICAgICAgICAgICAvLyAtIFRoZXJlIGlzIGEgdGVtcGxhdGUgaW4gdGhlIHN0YWNrXG4gICAgICAgICAgICAgICAgICAgIC8vIC0gVGhlIHdhbGtlciB3aWxsIGZpbmQgYSBuZXh0Tm9kZSBvdXRzaWRlIHRoZSB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFdlJ3ZlIGFycml2ZWQgYXQgb3VyIHBhcnQncyBub2RlLlxuICAgICAgICAgICAgaWYgKHBhcnQudHlwZSA9PT0gJ25vZGUnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFydCA9IHRoaXMucHJvY2Vzc29yLmhhbmRsZVRleHRFeHByZXNzaW9uKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgcGFydC5pbnNlcnRBZnRlck5vZGUobm9kZS5wcmV2aW91c1NpYmxpbmcpO1xuICAgICAgICAgICAgICAgIHRoaXMuX19wYXJ0cy5wdXNoKHBhcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX3BhcnRzLnB1c2goLi4udGhpcy5wcm9jZXNzb3IuaGFuZGxlQXR0cmlidXRlRXhwcmVzc2lvbnMobm9kZSwgcGFydC5uYW1lLCBwYXJ0LnN0cmluZ3MsIHRoaXMub3B0aW9ucykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQ0VQb2x5ZmlsbCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRvcHROb2RlKGZyYWdtZW50KTtcbiAgICAgICAgICAgIGN1c3RvbUVsZW1lbnRzLnVwZ3JhZGUoZnJhZ21lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10ZW1wbGF0ZS1pbnN0YW5jZS5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuaW1wb3J0IHsgcmVwYXJlbnROb2RlcyB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGJvdW5kQXR0cmlidXRlU3VmZml4LCBsYXN0QXR0cmlidXRlTmFtZVJlZ2V4LCBtYXJrZXIsIG5vZGVNYXJrZXIgfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcbmNvbnN0IGNvbW1lbnRNYXJrZXIgPSBgICR7bWFya2VyfSBgO1xuLyoqXG4gKiBUaGUgcmV0dXJuIHR5cGUgb2YgYGh0bWxgLCB3aGljaCBob2xkcyBhIFRlbXBsYXRlIGFuZCB0aGUgdmFsdWVzIGZyb21cbiAqIGludGVycG9sYXRlZCBleHByZXNzaW9ucy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUmVzdWx0IHtcbiAgICBjb25zdHJ1Y3RvcihzdHJpbmdzLCB2YWx1ZXMsIHR5cGUsIHByb2Nlc3Nvcikge1xuICAgICAgICB0aGlzLnN0cmluZ3MgPSBzdHJpbmdzO1xuICAgICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5wcm9jZXNzb3IgPSBwcm9jZXNzb3I7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzdHJpbmcgb2YgSFRNTCB1c2VkIHRvIGNyZWF0ZSBhIGA8dGVtcGxhdGU+YCBlbGVtZW50LlxuICAgICAqL1xuICAgIGdldEhUTUwoKSB7XG4gICAgICAgIGNvbnN0IGwgPSB0aGlzLnN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgbGV0IGh0bWwgPSAnJztcbiAgICAgICAgbGV0IGlzQ29tbWVudEJpbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHMgPSB0aGlzLnN0cmluZ3NbaV07XG4gICAgICAgICAgICAvLyBGb3IgZWFjaCBiaW5kaW5nIHdlIHdhbnQgdG8gZGV0ZXJtaW5lIHRoZSBraW5kIG9mIG1hcmtlciB0byBpbnNlcnRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIHRlbXBsYXRlIHNvdXJjZSBiZWZvcmUgaXQncyBwYXJzZWQgYnkgdGhlIGJyb3dzZXIncyBIVE1MXG4gICAgICAgICAgICAvLyBwYXJzZXIuIFRoZSBtYXJrZXIgdHlwZSBpcyBiYXNlZCBvbiB3aGV0aGVyIHRoZSBleHByZXNzaW9uIGlzIGluIGFuXG4gICAgICAgICAgICAvLyBhdHRyaWJ1dGUsIHRleHQsIG9yIGNvbW1lbnQgcG9zaXRpb24uXG4gICAgICAgICAgICAvLyAgICogRm9yIG5vZGUtcG9zaXRpb24gYmluZGluZ3Mgd2UgaW5zZXJ0IGEgY29tbWVudCB3aXRoIHRoZSBtYXJrZXJcbiAgICAgICAgICAgIC8vICAgICBzZW50aW5lbCBhcyBpdHMgdGV4dCBjb250ZW50LCBsaWtlIDwhLS17e2xpdC1ndWlkfX0tLT4uXG4gICAgICAgICAgICAvLyAgICogRm9yIGF0dHJpYnV0ZSBiaW5kaW5ncyB3ZSBpbnNlcnQganVzdCB0aGUgbWFya2VyIHNlbnRpbmVsIGZvciB0aGVcbiAgICAgICAgICAgIC8vICAgICBmaXJzdCBiaW5kaW5nLCBzbyB0aGF0IHdlIHN1cHBvcnQgdW5xdW90ZWQgYXR0cmlidXRlIGJpbmRpbmdzLlxuICAgICAgICAgICAgLy8gICAgIFN1YnNlcXVlbnQgYmluZGluZ3MgY2FuIHVzZSBhIGNvbW1lbnQgbWFya2VyIGJlY2F1c2UgbXVsdGktYmluZGluZ1xuICAgICAgICAgICAgLy8gICAgIGF0dHJpYnV0ZXMgbXVzdCBiZSBxdW90ZWQuXG4gICAgICAgICAgICAvLyAgICogRm9yIGNvbW1lbnQgYmluZGluZ3Mgd2UgaW5zZXJ0IGp1c3QgdGhlIG1hcmtlciBzZW50aW5lbCBzbyB3ZSBkb24ndFxuICAgICAgICAgICAgLy8gICAgIGNsb3NlIHRoZSBjb21tZW50LlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgY29kZSBzY2FucyB0aGUgdGVtcGxhdGUgc291cmNlLCBidXQgaXMgKm5vdCogYW4gSFRNTFxuICAgICAgICAgICAgLy8gcGFyc2VyLiBXZSBkb24ndCBuZWVkIHRvIHRyYWNrIHRoZSB0cmVlIHN0cnVjdHVyZSBvZiB0aGUgSFRNTCwgb25seVxuICAgICAgICAgICAgLy8gd2hldGhlciBhIGJpbmRpbmcgaXMgaW5zaWRlIGEgY29tbWVudCwgYW5kIGlmIG5vdCwgaWYgaXQgYXBwZWFycyB0byBiZVxuICAgICAgICAgICAgLy8gdGhlIGZpcnN0IGJpbmRpbmcgaW4gYW4gYXR0cmlidXRlLlxuICAgICAgICAgICAgY29uc3QgY29tbWVudE9wZW4gPSBzLmxhc3RJbmRleE9mKCc8IS0tJyk7XG4gICAgICAgICAgICAvLyBXZSdyZSBpbiBjb21tZW50IHBvc2l0aW9uIGlmIHdlIGhhdmUgYSBjb21tZW50IG9wZW4gd2l0aCBubyBmb2xsb3dpbmdcbiAgICAgICAgICAgIC8vIGNvbW1lbnQgY2xvc2UuIEJlY2F1c2UgPC0tIGNhbiBhcHBlYXIgaW4gYW4gYXR0cmlidXRlIHZhbHVlIHRoZXJlIGNhblxuICAgICAgICAgICAgLy8gYmUgZmFsc2UgcG9zaXRpdmVzLlxuICAgICAgICAgICAgaXNDb21tZW50QmluZGluZyA9IChjb21tZW50T3BlbiA+IC0xIHx8IGlzQ29tbWVudEJpbmRpbmcpICYmXG4gICAgICAgICAgICAgICAgcy5pbmRleE9mKCctLT4nLCBjb21tZW50T3BlbiArIDEpID09PSAtMTtcbiAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB3ZSBoYXZlIGFuIGF0dHJpYnV0ZS1saWtlIHNlcXVlbmNlIHByZWNlZGluZyB0aGVcbiAgICAgICAgICAgIC8vIGV4cHJlc3Npb24uIFRoaXMgY2FuIG1hdGNoIFwibmFtZT12YWx1ZVwiIGxpa2Ugc3RydWN0dXJlcyBpbiB0ZXh0LFxuICAgICAgICAgICAgLy8gY29tbWVudHMsIGFuZCBhdHRyaWJ1dGUgdmFsdWVzLCBzbyB0aGVyZSBjYW4gYmUgZmFsc2UtcG9zaXRpdmVzLlxuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlTWF0Y2ggPSBsYXN0QXR0cmlidXRlTmFtZVJlZ2V4LmV4ZWMocyk7XG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlTWF0Y2ggPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSdyZSBvbmx5IGluIHRoaXMgYnJhbmNoIGlmIHdlIGRvbid0IGhhdmUgYSBhdHRyaWJ1dGUtbGlrZVxuICAgICAgICAgICAgICAgIC8vIHByZWNlZGluZyBzZXF1ZW5jZS4gRm9yIGNvbW1lbnRzLCB0aGlzIGd1YXJkcyBhZ2FpbnN0IHVudXN1YWxcbiAgICAgICAgICAgICAgICAvLyBhdHRyaWJ1dGUgdmFsdWVzIGxpa2UgPGRpdiBmb289XCI8IS0tJHsnYmFyJ31cIj4uIENhc2VzIGxpa2VcbiAgICAgICAgICAgICAgICAvLyA8IS0tIGZvbz0keydiYXInfS0tPiBhcmUgaGFuZGxlZCBjb3JyZWN0bHkgaW4gdGhlIGF0dHJpYnV0ZSBicmFuY2hcbiAgICAgICAgICAgICAgICAvLyBiZWxvdy5cbiAgICAgICAgICAgICAgICBodG1sICs9IHMgKyAoaXNDb21tZW50QmluZGluZyA/IGNvbW1lbnRNYXJrZXIgOiBub2RlTWFya2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEZvciBhdHRyaWJ1dGVzIHdlIHVzZSBqdXN0IGEgbWFya2VyIHNlbnRpbmVsLCBhbmQgYWxzbyBhcHBlbmQgYVxuICAgICAgICAgICAgICAgIC8vICRsaXQkIHN1ZmZpeCB0byB0aGUgbmFtZSB0byBvcHQtb3V0IG9mIGF0dHJpYnV0ZS1zcGVjaWZpYyBwYXJzaW5nXG4gICAgICAgICAgICAgICAgLy8gdGhhdCBJRSBhbmQgRWRnZSBkbyBmb3Igc3R5bGUgYW5kIGNlcnRhaW4gU1ZHIGF0dHJpYnV0ZXMuXG4gICAgICAgICAgICAgICAgaHRtbCArPSBzLnN1YnN0cigwLCBhdHRyaWJ1dGVNYXRjaC5pbmRleCkgKyBhdHRyaWJ1dGVNYXRjaFsxXSArXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU1hdGNoWzJdICsgYm91bmRBdHRyaWJ1dGVTdWZmaXggKyBhdHRyaWJ1dGVNYXRjaFszXSArXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBodG1sICs9IHRoaXMuc3RyaW5nc1tsXTtcbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICAgIGdldFRlbXBsYXRlRWxlbWVudCgpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSB0aGlzLmdldEhUTUwoKTtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cbn1cbi8qKlxuICogQSBUZW1wbGF0ZVJlc3VsdCBmb3IgU1ZHIGZyYWdtZW50cy5cbiAqXG4gKiBUaGlzIGNsYXNzIHdyYXBzIEhUTUwgaW4gYW4gYDxzdmc+YCB0YWcgaW4gb3JkZXIgdG8gcGFyc2UgaXRzIGNvbnRlbnRzIGluIHRoZVxuICogU1ZHIG5hbWVzcGFjZSwgdGhlbiBtb2RpZmllcyB0aGUgdGVtcGxhdGUgdG8gcmVtb3ZlIHRoZSBgPHN2Zz5gIHRhZyBzbyB0aGF0XG4gKiBjbG9uZXMgb25seSBjb250YWluZXIgdGhlIG9yaWdpbmFsIGZyYWdtZW50LlxuICovXG5leHBvcnQgY2xhc3MgU1ZHVGVtcGxhdGVSZXN1bHQgZXh0ZW5kcyBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgZ2V0SFRNTCgpIHtcbiAgICAgICAgcmV0dXJuIGA8c3ZnPiR7c3VwZXIuZ2V0SFRNTCgpfTwvc3ZnPmA7XG4gICAgfVxuICAgIGdldFRlbXBsYXRlRWxlbWVudCgpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBzdXBlci5nZXRUZW1wbGF0ZUVsZW1lbnQoKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRlbXBsYXRlLmNvbnRlbnQ7XG4gICAgICAgIGNvbnN0IHN2Z0VsZW1lbnQgPSBjb250ZW50LmZpcnN0Q2hpbGQ7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoc3ZnRWxlbWVudCk7XG4gICAgICAgIHJlcGFyZW50Tm9kZXMoY29udGVudCwgc3ZnRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRlbXBsYXRlLXJlc3VsdC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG4vKipcbiAqIEFuIGV4cHJlc3Npb24gbWFya2VyIHdpdGggZW1iZWRkZWQgdW5pcXVlIGtleSB0byBhdm9pZCBjb2xsaXNpb24gd2l0aFxuICogcG9zc2libGUgdGV4dCBpbiB0ZW1wbGF0ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBtYXJrZXIgPSBge3tsaXQtJHtTdHJpbmcoTWF0aC5yYW5kb20oKSkuc2xpY2UoMil9fX1gO1xuLyoqXG4gKiBBbiBleHByZXNzaW9uIG1hcmtlciB1c2VkIHRleHQtcG9zaXRpb25zLCBtdWx0aS1iaW5kaW5nIGF0dHJpYnV0ZXMsIGFuZFxuICogYXR0cmlidXRlcyB3aXRoIG1hcmt1cC1saWtlIHRleHQgdmFsdWVzLlxuICovXG5leHBvcnQgY29uc3Qgbm9kZU1hcmtlciA9IGA8IS0tJHttYXJrZXJ9LS0+YDtcbmV4cG9ydCBjb25zdCBtYXJrZXJSZWdleCA9IG5ldyBSZWdFeHAoYCR7bWFya2VyfXwke25vZGVNYXJrZXJ9YCk7XG4vKipcbiAqIFN1ZmZpeCBhcHBlbmRlZCB0byBhbGwgYm91bmQgYXR0cmlidXRlIG5hbWVzLlxuICovXG5leHBvcnQgY29uc3QgYm91bmRBdHRyaWJ1dGVTdWZmaXggPSAnJGxpdCQnO1xuLyoqXG4gKiBBbiB1cGRhdGFibGUgVGVtcGxhdGUgdGhhdCB0cmFja3MgdGhlIGxvY2F0aW9uIG9mIGR5bmFtaWMgcGFydHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IocmVzdWx0LCBlbGVtZW50KSB7XG4gICAgICAgIHRoaXMucGFydHMgPSBbXTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgY29uc3Qgbm9kZXNUb1JlbW92ZSA9IFtdO1xuICAgICAgICBjb25zdCBzdGFjayA9IFtdO1xuICAgICAgICAvLyBFZGdlIG5lZWRzIGFsbCA0IHBhcmFtZXRlcnMgcHJlc2VudDsgSUUxMSBuZWVkcyAzcmQgcGFyYW1ldGVyIHRvIGJlIG51bGxcbiAgICAgICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihlbGVtZW50LmNvbnRlbnQsIDEzMyAvKiBOb2RlRmlsdGVyLlNIT1dfe0VMRU1FTlR8Q09NTUVOVHxURVhUfSAqLywgbnVsbCwgZmFsc2UpO1xuICAgICAgICAvLyBLZWVwcyB0cmFjayBvZiB0aGUgbGFzdCBpbmRleCBhc3NvY2lhdGVkIHdpdGggYSBwYXJ0LiBXZSB0cnkgdG8gZGVsZXRlXG4gICAgICAgIC8vIHVubmVjZXNzYXJ5IG5vZGVzLCBidXQgd2UgbmV2ZXIgd2FudCB0byBhc3NvY2lhdGUgdHdvIGRpZmZlcmVudCBwYXJ0c1xuICAgICAgICAvLyB0byB0aGUgc2FtZSBpbmRleC4gVGhleSBtdXN0IGhhdmUgYSBjb25zdGFudCBub2RlIGJldHdlZW4uXG4gICAgICAgIGxldCBsYXN0UGFydEluZGV4ID0gMDtcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XG4gICAgICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgICAgICBjb25zdCB7IHN0cmluZ3MsIHZhbHVlczogeyBsZW5ndGggfSB9ID0gcmVzdWx0O1xuICAgICAgICB3aGlsZSAocGFydEluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIFdlJ3ZlIGV4aGF1c3RlZCB0aGUgY29udGVudCBpbnNpZGUgYSBuZXN0ZWQgdGVtcGxhdGUgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBCZWNhdXNlIHdlIHN0aWxsIGhhdmUgcGFydHMgKHRoZSBvdXRlciBmb3ItbG9vcCksIHdlIGtub3c6XG4gICAgICAgICAgICAgICAgLy8gLSBUaGVyZSBpcyBhIHRlbXBsYXRlIGluIHRoZSBzdGFja1xuICAgICAgICAgICAgICAgIC8vIC0gVGhlIHdhbGtlciB3aWxsIGZpbmQgYSBuZXh0Tm9kZSBvdXRzaWRlIHRoZSB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxIC8qIE5vZGUuRUxFTUVOVF9OT0RFICovKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuaGFzQXR0cmlidXRlcygpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBub2RlLmF0dHJpYnV0ZXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBhdHRyaWJ1dGVzO1xuICAgICAgICAgICAgICAgICAgICAvLyBQZXJcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL05hbWVkTm9kZU1hcCxcbiAgICAgICAgICAgICAgICAgICAgLy8gYXR0cmlidXRlcyBhcmUgbm90IGd1YXJhbnRlZWQgdG8gYmUgcmV0dXJuZWQgaW4gZG9jdW1lbnQgb3JkZXIuXG4gICAgICAgICAgICAgICAgICAgIC8vIEluIHBhcnRpY3VsYXIsIEVkZ2UvSUUgY2FuIHJldHVybiB0aGVtIG91dCBvZiBvcmRlciwgc28gd2UgY2Fubm90XG4gICAgICAgICAgICAgICAgICAgIC8vIGFzc3VtZSBhIGNvcnJlc3BvbmRlbmNlIGJldHdlZW4gcGFydCBpbmRleCBhbmQgYXR0cmlidXRlIGluZGV4LlxuICAgICAgICAgICAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW5kc1dpdGgoYXR0cmlidXRlc1tpXS5uYW1lLCBib3VuZEF0dHJpYnV0ZVN1ZmZpeCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChjb3VudC0tID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSB0ZW1wbGF0ZSBsaXRlcmFsIHNlY3Rpb24gbGVhZGluZyB1cCB0byB0aGUgZmlyc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV4cHJlc3Npb24gaW4gdGhpcyBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0cmluZ0ZvclBhcnQgPSBzdHJpbmdzW3BhcnRJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBhdHRyaWJ1dGUgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXguZXhlYyhzdHJpbmdGb3JQYXJ0KVsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBbGwgYm91bmQgYXR0cmlidXRlcyBoYXZlIGhhZCBhIHN1ZmZpeCBhZGRlZCBpblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGVtcGxhdGVSZXN1bHQjZ2V0SFRNTCB0byBvcHQgb3V0IG9mIHNwZWNpYWwgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGluZy4gVG8gbG9vayB1cCB0aGUgYXR0cmlidXRlIHZhbHVlIHdlIGFsc28gbmVlZCB0byBhZGRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBzdWZmaXguXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVMb29rdXBOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpICsgYm91bmRBdHRyaWJ1dGVTdWZmaXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZUxvb2t1cE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTG9va3VwTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0aWNzID0gYXR0cmlidXRlVmFsdWUuc3BsaXQobWFya2VyUmVnZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKHsgdHlwZTogJ2F0dHJpYnV0ZScsIGluZGV4LCBuYW1lLCBzdHJpbmdzOiBzdGF0aWNzIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydEluZGV4ICs9IHN0YXRpY3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm9kZS50YWdOYW1lID09PSAnVEVNUExBVEUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IG5vZGUuY29udGVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSAzIC8qIE5vZGUuVEVYVF9OT0RFICovKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IG5vZGUuZGF0YTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5pbmRleE9mKG1hcmtlcikgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0cmluZ3MgPSBkYXRhLnNwbGl0KG1hcmtlclJlZ2V4KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyB0ZXh0IG5vZGUgZm9yIGVhY2ggbGl0ZXJhbCBzZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZXNlIG5vZGVzIGFyZSBhbHNvIHVzZWQgYXMgdGhlIG1hcmtlcnMgZm9yIG5vZGUgcGFydHNcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXN0SW5kZXg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluc2VydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzID0gc3RyaW5nc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydCA9IGNyZWF0ZU1hcmtlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBsYXN0QXR0cmlidXRlTmFtZVJlZ2V4LmV4ZWMocyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoICE9PSBudWxsICYmIGVuZHNXaXRoKG1hdGNoWzJdLCBib3VuZEF0dHJpYnV0ZVN1ZmZpeCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9IHMuc2xpY2UoMCwgbWF0Y2guaW5kZXgpICsgbWF0Y2hbMV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hbMl0uc2xpY2UoMCwgLWJvdW5kQXR0cmlidXRlU3VmZml4Lmxlbmd0aCkgKyBtYXRjaFszXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGluc2VydCwgbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnRzLnB1c2goeyB0eXBlOiAnbm9kZScsIGluZGV4OiArK2luZGV4IH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gdGV4dCwgd2UgbXVzdCBpbnNlcnQgYSBjb21tZW50IHRvIG1hcmsgb3VyIHBsYWNlLlxuICAgICAgICAgICAgICAgICAgICAvLyBFbHNlLCB3ZSBjYW4gdHJ1c3QgaXQgd2lsbCBzdGljayBhcm91bmQgYWZ0ZXIgY2xvbmluZy5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cmluZ3NbbGFzdEluZGV4XSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXNUb1JlbW92ZS5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5kYXRhID0gc3RyaW5nc1tsYXN0SW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBwYXJ0IGZvciBlYWNoIG1hdGNoIGZvdW5kXG4gICAgICAgICAgICAgICAgICAgIHBhcnRJbmRleCArPSBsYXN0SW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCAvKiBOb2RlLkNPTU1FTlRfTk9ERSAqLykge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmRhdGEgPT09IG1hcmtlcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBhIG5ldyBtYXJrZXIgbm9kZSB0byBiZSB0aGUgc3RhcnROb2RlIG9mIHRoZSBQYXJ0IGlmIGFueSBvZlxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgZm9sbG93aW5nIGFyZSB0cnVlOlxuICAgICAgICAgICAgICAgICAgICAvLyAgKiBXZSBkb24ndCBoYXZlIGEgcHJldmlvdXNTaWJsaW5nXG4gICAgICAgICAgICAgICAgICAgIC8vICAqIFRoZSBwcmV2aW91c1NpYmxpbmcgaXMgYWxyZWFkeSB0aGUgc3RhcnQgb2YgYSBwcmV2aW91cyBwYXJ0XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnByZXZpb3VzU2libGluZyA9PT0gbnVsbCB8fCBpbmRleCA9PT0gbGFzdFBhcnRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxhc3RQYXJ0SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKHsgdHlwZTogJ25vZGUnLCBpbmRleCB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIG5leHRTaWJsaW5nLCBrZWVwIHRoaXMgbm9kZSBzbyB3ZSBoYXZlIGFuIGVuZC5cbiAgICAgICAgICAgICAgICAgICAgLy8gRWxzZSwgd2UgY2FuIHJlbW92ZSBpdCB0byBzYXZlIGZ1dHVyZSBjb3N0cy5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubmV4dFNpYmxpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZGF0YSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXNUb1JlbW92ZS5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpID0gLTE7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICgoaSA9IG5vZGUuZGF0YS5pbmRleE9mKG1hcmtlciwgaSArIDEpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbW1lbnQgbm9kZSBoYXMgYSBiaW5kaW5nIG1hcmtlciBpbnNpZGUsIG1ha2UgYW4gaW5hY3RpdmUgcGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGJpbmRpbmcgd29uJ3Qgd29yaywgYnV0IHN1YnNlcXVlbnQgYmluZGluZ3Mgd2lsbFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IGNvbnNpZGVyIHdoZXRoZXIgaXQncyBldmVuIHdvcnRoIGl0IHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYWtlIGJpbmRpbmdzIGluIGNvbW1lbnRzIHdvcmtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7IHR5cGU6ICdub2RlJywgaW5kZXg6IC0xIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIHRleHQgYmluZGluZyBub2RlcyBhZnRlciB0aGUgd2FsayB0byBub3QgZGlzdHVyYiB0aGUgVHJlZVdhbGtlclxuICAgICAgICBmb3IgKGNvbnN0IG4gb2Ygbm9kZXNUb1JlbW92ZSkge1xuICAgICAgICAgICAgbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG4pO1xuICAgICAgICB9XG4gICAgfVxufVxuY29uc3QgZW5kc1dpdGggPSAoc3RyLCBzdWZmaXgpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHN0ci5sZW5ndGggLSBzdWZmaXgubGVuZ3RoO1xuICAgIHJldHVybiBpbmRleCA+PSAwICYmIHN0ci5zbGljZShpbmRleCkgPT09IHN1ZmZpeDtcbn07XG5leHBvcnQgY29uc3QgaXNUZW1wbGF0ZVBhcnRBY3RpdmUgPSAocGFydCkgPT4gcGFydC5pbmRleCAhPT0gLTE7XG4vLyBBbGxvd3MgYGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpYCB0byBiZSByZW5hbWVkIGZvciBhXG4vLyBzbWFsbCBtYW51YWwgc2l6ZS1zYXZpbmdzLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZU1hcmtlciA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xuLyoqXG4gKiBUaGlzIHJlZ2V4IGV4dHJhY3RzIHRoZSBhdHRyaWJ1dGUgbmFtZSBwcmVjZWRpbmcgYW4gYXR0cmlidXRlLXBvc2l0aW9uXG4gKiBleHByZXNzaW9uLiBJdCBkb2VzIHRoaXMgYnkgbWF0Y2hpbmcgdGhlIHN5bnRheCBhbGxvd2VkIGZvciBhdHRyaWJ1dGVzXG4gKiBhZ2FpbnN0IHRoZSBzdHJpbmcgbGl0ZXJhbCBkaXJlY3RseSBwcmVjZWRpbmcgdGhlIGV4cHJlc3Npb24sIGFzc3VtaW5nIHRoYXRcbiAqIHRoZSBleHByZXNzaW9uIGlzIGluIGFuIGF0dHJpYnV0ZS12YWx1ZSBwb3NpdGlvbi5cbiAqXG4gKiBTZWUgYXR0cmlidXRlcyBpbiB0aGUgSFRNTCBzcGVjOlxuICogaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1L3N5bnRheC5odG1sI2VsZW1lbnRzLWF0dHJpYnV0ZXNcbiAqXG4gKiBcIiBcXHgwOVxceDBhXFx4MGNcXHgwZFwiIGFyZSBIVE1MIHNwYWNlIGNoYXJhY3RlcnM6XG4gKiBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUvaW5mcmFzdHJ1Y3R1cmUuaHRtbCNzcGFjZS1jaGFyYWN0ZXJzXG4gKlxuICogXCJcXDAtXFx4MUZcXHg3Ri1cXHg5RlwiIGFyZSBVbmljb2RlIGNvbnRyb2wgY2hhcmFjdGVycywgd2hpY2ggaW5jbHVkZXMgZXZlcnlcbiAqIHNwYWNlIGNoYXJhY3RlciBleGNlcHQgXCIgXCIuXG4gKlxuICogU28gYW4gYXR0cmlidXRlIGlzOlxuICogICogVGhlIG5hbWU6IGFueSBjaGFyYWN0ZXIgZXhjZXB0IGEgY29udHJvbCBjaGFyYWN0ZXIsIHNwYWNlIGNoYXJhY3RlciwgKCcpLFxuICogICAgKFwiKSwgXCI+XCIsIFwiPVwiLCBvciBcIi9cIlxuICogICogRm9sbG93ZWQgYnkgemVybyBvciBtb3JlIHNwYWNlIGNoYXJhY3RlcnNcbiAqICAqIEZvbGxvd2VkIGJ5IFwiPVwiXG4gKiAgKiBGb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgc3BhY2UgY2hhcmFjdGVyc1xuICogICogRm9sbG93ZWQgYnk6XG4gKiAgICAqIEFueSBjaGFyYWN0ZXIgZXhjZXB0IHNwYWNlLCAoJyksIChcIiksIFwiPFwiLCBcIj5cIiwgXCI9XCIsIChgKSwgb3JcbiAqICAgICogKFwiKSB0aGVuIGFueSBub24tKFwiKSwgb3JcbiAqICAgICogKCcpIHRoZW4gYW55IG5vbi0oJylcbiAqL1xuZXhwb3J0IGNvbnN0IGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXggPSBcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4XG4vKFsgXFx4MDlcXHgwYVxceDBjXFx4MGRdKShbXlxcMC1cXHgxRlxceDdGLVxceDlGIFwiJz49L10rKShbIFxceDA5XFx4MGFcXHgwY1xceDBkXSo9WyBcXHgwOVxceDBhXFx4MGNcXHgwZF0qKD86W14gXFx4MDlcXHgwYVxceDBjXFx4MGRcIidgPD49XSp8XCJbXlwiXSp8J1teJ10qKSkkLztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRlbXBsYXRlLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8qKlxuICpcbiAqIE1haW4gbGl0LWh0bWwgbW9kdWxlLlxuICpcbiAqIE1haW4gZXhwb3J0czpcbiAqXG4gKiAtICBbW2h0bWxdXVxuICogLSAgW1tzdmddXVxuICogLSAgW1tyZW5kZXJdXVxuICpcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqIEBwcmVmZXJyZWRcbiAqL1xuLyoqXG4gKiBEbyBub3QgcmVtb3ZlIHRoaXMgY29tbWVudDsgaXQga2VlcHMgdHlwZWRvYyBmcm9tIG1pc3BsYWNpbmcgdGhlIG1vZHVsZVxuICogZG9jcy5cbiAqL1xuaW1wb3J0IHsgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yIH0gZnJvbSAnLi9saWIvZGVmYXVsdC10ZW1wbGF0ZS1wcm9jZXNzb3IuanMnO1xuaW1wb3J0IHsgU1ZHVGVtcGxhdGVSZXN1bHQsIFRlbXBsYXRlUmVzdWx0IH0gZnJvbSAnLi9saWIvdGVtcGxhdGUtcmVzdWx0LmpzJztcbmV4cG9ydCB7IERlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciwgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yIH0gZnJvbSAnLi9saWIvZGVmYXVsdC10ZW1wbGF0ZS1wcm9jZXNzb3IuanMnO1xuZXhwb3J0IHsgZGlyZWN0aXZlLCBpc0RpcmVjdGl2ZSB9IGZyb20gJy4vbGliL2RpcmVjdGl2ZS5qcyc7XG4vLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiByZW1vdmUgbGluZSB3aGVuIHdlIGdldCBOb2RlUGFydCBtb3ZpbmcgbWV0aG9kc1xuZXhwb3J0IHsgcmVtb3ZlTm9kZXMsIHJlcGFyZW50Tm9kZXMgfSBmcm9tICcuL2xpYi9kb20uanMnO1xuZXhwb3J0IHsgbm9DaGFuZ2UsIG5vdGhpbmcgfSBmcm9tICcuL2xpYi9wYXJ0LmpzJztcbmV4cG9ydCB7IEF0dHJpYnV0ZUNvbW1pdHRlciwgQXR0cmlidXRlUGFydCwgQm9vbGVhbkF0dHJpYnV0ZVBhcnQsIEV2ZW50UGFydCwgaXNJdGVyYWJsZSwgaXNQcmltaXRpdmUsIE5vZGVQYXJ0LCBQcm9wZXJ0eUNvbW1pdHRlciwgUHJvcGVydHlQYXJ0IH0gZnJvbSAnLi9saWIvcGFydHMuanMnO1xuZXhwb3J0IHsgcGFydHMsIHJlbmRlciB9IGZyb20gJy4vbGliL3JlbmRlci5qcyc7XG5leHBvcnQgeyB0ZW1wbGF0ZUNhY2hlcywgdGVtcGxhdGVGYWN0b3J5IH0gZnJvbSAnLi9saWIvdGVtcGxhdGUtZmFjdG9yeS5qcyc7XG5leHBvcnQgeyBUZW1wbGF0ZUluc3RhbmNlIH0gZnJvbSAnLi9saWIvdGVtcGxhdGUtaW5zdGFuY2UuanMnO1xuZXhwb3J0IHsgU1ZHVGVtcGxhdGVSZXN1bHQsIFRlbXBsYXRlUmVzdWx0IH0gZnJvbSAnLi9saWIvdGVtcGxhdGUtcmVzdWx0LmpzJztcbmV4cG9ydCB7IGNyZWF0ZU1hcmtlciwgaXNUZW1wbGF0ZVBhcnRBY3RpdmUsIFRlbXBsYXRlIH0gZnJvbSAnLi9saWIvdGVtcGxhdGUuanMnO1xuLy8gSU1QT1JUQU5UOiBkbyBub3QgY2hhbmdlIHRoZSBwcm9wZXJ0eSBuYW1lIG9yIHRoZSBhc3NpZ25tZW50IGV4cHJlc3Npb24uXG4vLyBUaGlzIGxpbmUgd2lsbCBiZSB1c2VkIGluIHJlZ2V4ZXMgdG8gc2VhcmNoIGZvciBsaXQtaHRtbCB1c2FnZS5cbi8vIFRPRE8oanVzdGluZmFnbmFuaSk6IGluamVjdCB2ZXJzaW9uIG51bWJlciBhdCBidWlsZCB0aW1lXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAod2luZG93WydsaXRIdG1sVmVyc2lvbnMnXSB8fCAod2luZG93WydsaXRIdG1sVmVyc2lvbnMnXSA9IFtdKSkucHVzaCgnMS4yLjEnKTtcbn1cbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYW4gSFRNTCB0ZW1wbGF0ZSB0aGF0IGNhbiBlZmZpY2llbnRseVxuICogcmVuZGVyIHRvIGFuZCB1cGRhdGUgYSBjb250YWluZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBodG1sID0gKHN0cmluZ3MsIC4uLnZhbHVlcykgPT4gbmV3IFRlbXBsYXRlUmVzdWx0KHN0cmluZ3MsIHZhbHVlcywgJ2h0bWwnLCBkZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IpO1xuLyoqXG4gKiBJbnRlcnByZXRzIGEgdGVtcGxhdGUgbGl0ZXJhbCBhcyBhbiBTVkcgdGVtcGxhdGUgdGhhdCBjYW4gZWZmaWNpZW50bHlcbiAqIHJlbmRlciB0byBhbmQgdXBkYXRlIGEgY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3Qgc3ZnID0gKHN0cmluZ3MsIC4uLnZhbHVlcykgPT4gbmV3IFNWR1RlbXBsYXRlUmVzdWx0KHN0cmluZ3MsIHZhbHVlcywgJ3N2ZycsIGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3Nvcik7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saXQtaHRtbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZmlnbWEtcGx1Z2luLWRzLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdGNvbnN0IGRpc2Nsb3N1cmVTZWxlY3RvciA9ICdkaXNjbG9zdXJlJztcblxuXHQvL1BSSVZBVEVcblx0Y29uc3QgZGlzY2xvc3VyZUhhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRsZXQgZGlzY2xvc3VyZVNldCA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuXHRcdGxldCBkaXNjbG9zdXJlc0luU2V0ID0gZGlzY2xvc3VyZVNldC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuXHRcdGxldCBhbHJlYWR5QWN0aXZlID0gdGhpcy5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhkaXNjbG9zdXJlU2VsZWN0b3IgKyAnLS1leHBhbmRlZCcpO1xuXG5cdFx0ZGlzY2xvc3VyZXNJblNldC5mb3JFYWNoKChkaXNjbG9zdXJlKSA9PiB7XG5cdFx0XHRkaXNjbG9zdXJlLmNsYXNzTGlzdC5yZW1vdmUoZGlzY2xvc3VyZVNlbGVjdG9yICsgJy0tZXhwYW5kZWQnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKGRpc2Nsb3N1cmVTZWxlY3RvciArICctLWV4cGFuZGVkJyk7XG5cblx0XHRpZiAoYWxyZWFkeUFjdGl2ZSkge1xuXHRcdFx0dGhpcy5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoZGlzY2xvc3VyZVNlbGVjdG9yICsgJy0tZXhwYW5kZWQnKTtcblx0XHR9XG5cdH07XG5cblx0Ly9QVUJMSUNcblx0d2luZG93LmRpc2Nsb3N1cmUgPSB7XG5cdFx0aW5pdDogZnVuY3Rpb24gKCkge1xuXHRcdFx0bGV0IGRpc2Nsb3N1cmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBkaXNjbG9zdXJlU2VsZWN0b3IgKyAnX19sYWJlbCcpO1xuXG5cdFx0XHRpZiAoZGlzY2xvc3VyZXMpIHtcblx0XHRcdFx0ZGlzY2xvc3VyZXMuZm9yRWFjaCgoZGlzY2xvc3VyZSkgPT4ge1xuXHRcdFx0XHRcdGRpc2Nsb3N1cmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNjbG9zdXJlSGFuZGxlciwgZmFsc2UpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0ZGVzdHJveTogZnVuY3Rpb24gKCkge1xuXHRcdFx0bGV0IGRpc2Nsb3N1cmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBkaXNjbG9zdXJlU2VsZWN0b3IgKyAnX19sYWJlbCcpO1xuXG5cdFx0XHRpZiAoZGlzY2xvc3VyZXMpIHtcblx0XHRcdFx0ZGlzY2xvc3VyZXMuZm9yRWFjaCgoZGlzY2xvc3VyZSkgPT4ge1xuXHRcdFx0XHRcdGRpc2Nsb3N1cmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNjbG9zdXJlSGFuZGxlciwgZmFsc2UpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59KSgpO1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0Y29uc3Qgc2VsZWN0TWVudVNlbGVjdG9yID0gJ3NlbGVjdC1tZW51JztcblxuXHRsZXQgZWxlbWVudHMsIG9wdGlvbkxpc3QsIGl0ZW1IZWlnaHQsIHNlbGVjdGVkSXRlbTtcblx0bGV0IGluaXQgPSBmYWxzZTtcblxuXHQvL1BSSVZBVEVcblxuXHQvL2NyZWF0ZSB0aGUgbWVudXNcblx0Y29uc3QgY3JlYXRlTWVudXMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gbG9vcCB0aHJvdWdoIGFsbCBzZWxlY3QgbWVudXMgb24gc2NyZWVuXG5cdFx0ZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobWVudSwgaW5kZXgpIHtcblx0XHRcdC8vICBzZXR1cCBtdXRhdGlvbiBvYnNlcnZlclxuXHRcdFx0bGV0IG11dGF0aW9uQ29uZmlnID0geyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfTtcblx0XHRcdGxldCBjYWxsYmFjayA9IGZ1bmN0aW9uIChtdXRhdGlvbnNMaXN0LCBvYnNlcnZlcikge1xuXHRcdFx0XHRmb3IgKGxldCBtdXRhdGlvbiBvZiBtdXRhdGlvbnNMaXN0KSB7XG5cdFx0XHRcdFx0aWYgKG11dGF0aW9uLnR5cGUgPT09ICdjaGlsZExpc3QnKSB7XG5cdFx0XHRcdFx0XHRzZWxlY3RNZW51LmluaXQoKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJykge1xuXHRcdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0XHRtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAndmFsdWUnIHx8XG5cdFx0XHRcdFx0XHRcdG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdkaXNhYmxlZCdcblx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHRzZWxlY3RNZW51LmluaXQoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRsZXQgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjayk7XG5cdFx0XHRvYnNlcnZlci5vYnNlcnZlKG1lbnUsIG11dGF0aW9uQ29uZmlnKTtcblxuXHRcdFx0Ly9rZWVwIHRyYWNrIG9mIG1lbnUgaGVpZ2h0LCByZXNldCB0byAwIHdoZW4gYnVpbGRpbmcgbmV3IG9uZVxuXHRcdFx0aXRlbUhlaWdodCA9IDA7XG5cblx0XHRcdC8vY3JlYXRlIHRoZSB3cmFwcGVyIGZvciB0aGUgbWVudVxuXHRcdFx0Y3JlYXRlV3JhcHBlcihtZW51KTtcblxuXHRcdFx0Ly9maW5kIG91dCBpZiBhbiBpdGVtIGlzIGFscmVhZHkgc2VsZWN0ZWRcblx0XHRcdHNlbGVjdGVkSXRlbSA9IG1lbnUuc2VsZWN0ZWRJbmRleDtcblxuXHRcdFx0Ly9maW5kIG91dCBpZiB0aGVyZSBhcmUgb3B0aW9uIGdyb3VwcyBwcmVzZW50XG5cdFx0XHRsZXQgb3B0aW9uR3JvdXBzID0gQXJyYXkuZnJvbShtZW51LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdvcHRncm91cCcpKTtcblxuXHRcdFx0aWYgKG9wdGlvbkdyb3Vwcy5sZW5ndGggIT0gMCkge1xuXHRcdFx0XHQvL2RvIHRoaXMgaWYgb3B0Z3JvdXBzIHByZXNlbnRcblxuXHRcdFx0XHQvL2RldGVybWluZSBpZiB0aGUgb3B0aW9uIGdyb3VwcyBoYXZlIGxhYmVsc1xuXHRcdFx0XHRsZXQgaGFzTGFiZWxzID0gb3B0aW9uR3JvdXBzWzBdLmxhYmVsID8gdHJ1ZSA6IGZhbHNlO1xuXG5cdFx0XHRcdC8vbG9vcCB0aHJvdWdoIGV2ZXJ5IG9wdGlvbiBncm91cFxuXHRcdFx0XHRvcHRpb25Hcm91cHMuZm9yRWFjaChmdW5jdGlvbiAoZ3JvdXAsIGluZGV4KSB7XG5cdFx0XHRcdFx0aWYgKGhhc0xhYmVscykge1xuXHRcdFx0XHRcdFx0aWYgKGluZGV4ICE9IDApIHtcblx0XHRcdFx0XHRcdFx0bGV0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0XHRcdFx0ZGl2aWRlci5jbGFzc05hbWUgPSBzZWxlY3RNZW51U2VsZWN0b3IgKyAnX19kaXZpZGVyJztcblx0XHRcdFx0XHRcdFx0b3B0aW9uTGlzdC5hcHBlbmRDaGlsZChkaXZpZGVyKTtcblx0XHRcdFx0XHRcdFx0YWRkSXRlbUhlaWdodChkaXZpZGVyKTtcblxuXHRcdFx0XHRcdFx0XHQvL3ByZXZlbnQgY2xpY2tzIG9uIG9wdGdyb3VwIGRpdmlkZXJzXG5cdFx0XHRcdFx0XHRcdGRpdmlkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdG9wUHJvcCwgZmFsc2UpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvL2NyZWF0ZSB0aGUgZGl2aWRlciBlbGVtZW50IHcvIGEgbGFiZWxcblx0XHRcdFx0XHRcdGxldCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdFx0XHRkaXZpZGVyLnRleHRDb250ZW50ID0gZ3JvdXAubGFiZWw7XG5cdFx0XHRcdFx0XHRkaXZpZGVyLmNsYXNzTmFtZSA9IHNlbGVjdE1lbnVTZWxlY3RvciArICdfX2RpdmlkZXItbGFiZWwnO1xuXG5cdFx0XHRcdFx0XHQvL2FkZCB0byBtZW51XG5cdFx0XHRcdFx0XHRvcHRpb25MaXN0LmFwcGVuZENoaWxkKGRpdmlkZXIpO1xuXG5cdFx0XHRcdFx0XHQvL2NhbGN1bGF0ZSBhbmQgYWRkIGhlaWdodCBvZiBkaXZpZGVyXG5cdFx0XHRcdFx0XHRhZGRJdGVtSGVpZ2h0KGRpdmlkZXIpO1xuXG5cdFx0XHRcdFx0XHQvL3ByZXZlbnQgY2xpY2tzIG9uIG9wdGdyb3VwIGRpdmlkZXJzXG5cdFx0XHRcdFx0XHRkaXZpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RvcFByb3AsIGZhbHNlKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoaW5kZXggPiAwICYmICFoYXNMYWJlbHMpIHtcblx0XHRcdFx0XHRcdC8vY3JlYXRlIHRoZSBkaXZpZGVyIGVsZW1lbnRcblx0XHRcdFx0XHRcdGxldCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdFx0XHRkaXZpZGVyLmNsYXNzTmFtZSA9IHNlbGVjdE1lbnVTZWxlY3RvciArICdfX2RpdmlkZXInO1xuXG5cdFx0XHRcdFx0XHQvL2FkZCB0byBtZW51XG5cdFx0XHRcdFx0XHRvcHRpb25MaXN0LmFwcGVuZENoaWxkKGRpdmlkZXIpO1xuXG5cdFx0XHRcdFx0XHQvL2NhbGN1bGF0ZSBhbmQgYWRkIGhlaWdodCBvZiBkaXZpZGVyXG5cdFx0XHRcdFx0XHRhZGRJdGVtSGVpZ2h0KGRpdmlkZXIpO1xuXG5cdFx0XHRcdFx0XHQvL3ByZXZlbnQgY2xpY2tzIG9uIG9wdGdyb3VwIGRpdmlkZXJzXG5cdFx0XHRcdFx0XHRkaXZpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RvcFByb3AsIGZhbHNlKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvL2dldCBjaGlsZHJlbiBvZiBncm91cFxuXHRcdFx0XHRcdGxldCBvcHRpb25zID0gQXJyYXkuZnJvbShncm91cC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnb3B0aW9uJykpO1xuXG5cdFx0XHRcdFx0Ly9sb29wIHRocm91Z2ggYWxsIG9wdGlvbnMgYW5kIGdlbmVyYXRlIGFuIGl0ZW1cblx0XHRcdFx0XHRvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuXHRcdFx0XHRcdFx0Y3JlYXRlTWVudUl0ZW0ob3B0aW9uKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvL2RvIHRoaXMgaWYgdGhlcmUgYXJlIG5vIG9wdGdyb3Vwc3NcblxuXHRcdFx0XHRsZXQgb3B0aW9ucyA9IEFycmF5LmZyb20obWVudS5vcHRpb25zKTtcblx0XHRcdFx0Ly9sb29wIHRocm91Z2ggYWxsIG9wdGlvbnMgYW5kIGdlbmVyYXRlIGFuIGl0ZW1cblx0XHRcdFx0b3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcblx0XHRcdFx0XHRjcmVhdGVNZW51SXRlbShvcHRpb24pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHQvL2NyZWF0ZSB0aGUgd3JhcHBlciBmb3IgdGhlIHNlbGVjdCBtZW51XG5cdC8vaW5jbHVkZXMgYnV0dG9uIGFuZCBnZW5lcmF0ZXMgdGhlIHdyYXBwZXIgVUwgZm9yIHRoZSBsaXN0IG9mIG1lbnUgaXRlbXNcblx0Y29uc3QgY3JlYXRlV3JhcHBlciA9IGZ1bmN0aW9uIChtZW51KSB7XG5cdFx0Ly9hZGQgdG9wIG1hcmdpblxuXHRcdGl0ZW1IZWlnaHQgKz0gNjtcblxuXHRcdC8vaGlkZSB0aGUgc2VsZWN0IG1lbnVcblx0XHRtZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cblx0XHQvL3NldCB0aGUgc2VsZWN0ZWQgb3B0aW9uIHRvIGNvcnJlY3QgbWVudSBpdGVtIGlmIG5vdCBzZXRcblxuXHRcdGlmIChtZW51LnNlbGVjdGVkSW5kZXggIT0gLTEpIHtcblx0XHRcdG1lbnUub3B0aW9uc1ttZW51LnNlbGVjdGVkSW5kZXhdLnNlbGVjdGVkID0gdHJ1ZTtcblx0XHR9XG5cblx0XHQvL2NyZWF0ZSB0aGUgd3JhcHBlciwgYW5kIGluc2VydCB0aGUgaGlkZGVuIHNlbGVjdCBtZW51XG5cdFx0bGV0IG1lbnVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0bWVudVdyYXBwZXIuY2xhc3NOYW1lID0gc2VsZWN0TWVudVNlbGVjdG9yO1xuXHRcdG1lbnUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobWVudVdyYXBwZXIsIG1lbnUpO1xuXHRcdG1lbnVXcmFwcGVyLmFwcGVuZENoaWxkKG1lbnUpO1xuXG5cdFx0Ly9kZXRlcm1pbmUgaWYgYW4gaWNvbiBpcyBzcGVjaWZpZWRcblx0XHRsZXQgaWNvbk5hbWUgPSBtZW51LmdldEF0dHJpYnV0ZSgnaWNvbicpO1xuXG5cdFx0Ly9jcmVhdGUgdGhlIGJ1dHRvbiArIG5lc3RlZCBlbGVtZW50c1xuXHRcdGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRsZXQgaWNvbjtcblx0XHRsZXQgYnV0dG9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0bGV0IGJ1dHRvbkNhcmV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdGlmIChpY29uTmFtZSkge1xuXHRcdFx0aWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdGljb24uY2xhc3NOYW1lID0gJ2ljb24gJyArIGljb25OYW1lO1xuXHRcdH1cblxuXHRcdC8vYWRkIGNsYXNzZXNcblx0XHRidXR0b24uY2xhc3NOYW1lID0gc2VsZWN0TWVudVNlbGVjdG9yICsgJ19fYnV0dG9uJztcblx0XHRidXR0b25MYWJlbC5jbGFzc05hbWUgPSBzZWxlY3RNZW51U2VsZWN0b3IgKyAnX19sYWJlbCc7XG5cdFx0YnV0dG9uQ2FyZXQuY2xhc3NOYW1lID0gc2VsZWN0TWVudVNlbGVjdG9yICsgJ19fY2FyZXQnO1xuXG5cdFx0Ly9hZGQgY29udGVudFxuXHRcdGlmIChtZW51LnNlbGVjdGVkSW5kZXggIT0gLTEpIHtcblx0XHRcdGJ1dHRvbkxhYmVsLnRleHRDb250ZW50ID0gbWVudS5vcHRpb25zW21lbnUuc2VsZWN0ZWRJbmRleF0udGV4dDtcblx0XHRcdGlmIChtZW51Lm9wdGlvbnNbbWVudS5zZWxlY3RlZEluZGV4XS52YWx1ZSA9PT0gJycpIHtcblx0XHRcdFx0YnV0dG9uTGFiZWwuY2xhc3NMaXN0LmFkZChzZWxlY3RNZW51U2VsZWN0b3IgKyAnX19sYWJlbC0tcGxhY2Vob2xkZXInKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0YnV0dG9uTGFiZWwudGV4dENvbnRlbnQgPSAnTm8gaXRlbXMgdG8gZGlzcGxheSc7XG5cdFx0XHRidXR0b25MYWJlbC5jbGFzc0xpc3QuYWRkKHNlbGVjdE1lbnVTZWxlY3RvciArICdfX2xhYmVsLS1wbGFjZWhvbGRlcicpO1xuXHRcdH1cblxuXHRcdC8vY3JlYXRlIHRoZSBtZW51IGNvbnRhaW5lclxuXHRcdG9wdGlvbkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXHRcdG9wdGlvbkxpc3QuY2xhc3NOYW1lID0gc2VsZWN0TWVudVNlbGVjdG9yICsgJ19fbWVudSc7XG5cblx0XHQvL2FkZCBlbGVtZW50cyB0byBkb21cblx0XHRtZW51V3JhcHBlci5hcHBlbmRDaGlsZChidXR0b24pO1xuXHRcdG1lbnVXcmFwcGVyLmFwcGVuZENoaWxkKG9wdGlvbkxpc3QpO1xuXHRcdGlmIChpY29uKSB7XG5cdFx0XHRidXR0b24uYXBwZW5kQ2hpbGQoaWNvbik7XG5cdFx0fVxuXHRcdGJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b25MYWJlbCk7XG5cdFx0YnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvbkNhcmV0KTtcblxuXHRcdC8vYWRkIGV2ZW50IGxpc3RlbmVyXG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheU1lbnUsIGZhbHNlKTtcblx0fTtcblxuXHQvL2NyZWF0ZSBhIGxpc3QgaXRlbVxuXHRjb25zdCBjcmVhdGVNZW51SXRlbSA9IGZ1bmN0aW9uIChtZW51SXRlbSkge1xuXHRcdC8qIG9ubHkgY3JlYXRlIGFuIGl0ZW0gaWYgdGhlcmUgaXMgYSB2YWx1ZSB0aGlzIHdpbGwgaWdub3JlIFxuICAgICAgICB0aGUgZmlyc3QgbWVudSBpdGVtIChpZiBpbmNsdWRlZCkgYXMgYSBwbGFjZWhvbGRlciAqL1xuXHRcdGlmIChtZW51SXRlbS5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykgJiYgbWVudUl0ZW0udmFsdWUgIT0gJycpIHtcblx0XHRcdC8vY3JlYXRlIGxpc3QgaXRlbSBlbGVtZW50c1xuXHRcdFx0bGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRcdFx0bGV0IGl0ZW1JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0bGV0IGl0ZW1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuXHRcdFx0Ly9zZXQgY2xhc3NuYW1lc1xuXHRcdFx0aXRlbS5jbGFzc05hbWUgPSBzZWxlY3RNZW51U2VsZWN0b3IgKyAnX19pdGVtJztcblx0XHRcdGl0ZW1JY29uLmNsYXNzTmFtZSA9IHNlbGVjdE1lbnVTZWxlY3RvciArICdfX2l0ZW0taWNvbic7XG5cdFx0XHRpdGVtTGFiZWwuY2xhc3NOYW1lID0gc2VsZWN0TWVudVNlbGVjdG9yICsgJ19faXRlbS1sYWJlbCc7XG5cblx0XHRcdC8vYWRkIGVsZW1lbnRzIHRvIGRvbVxuXHRcdFx0aXRlbS5hcHBlbmRDaGlsZChpdGVtSWNvbik7XG5cdFx0XHRpdGVtLmFwcGVuZENoaWxkKGl0ZW1MYWJlbCk7XG5cdFx0XHRvcHRpb25MaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuXG5cdFx0XHQvL2NvbmZpZ3VyZSBhdHRyaWJ1dGVzXG5cdFx0XHRpdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScsIG1lbnVJdGVtLnZhbHVlKTtcblx0XHRcdGl0ZW1MYWJlbC50ZXh0Q29udGVudCA9IG1lbnVJdGVtLnRleHQ7XG5cdFx0XHRpdGVtLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBpdGVtSGVpZ2h0KTtcblxuXHRcdFx0LyogYWZ0ZXIgdGhlIGl0ZW0gaXMgY3JlYXRlZCB3ZSBwYXNzIHRoaXMgZWxlbWVudCB0byB0aGlzIGZ1bmN0aW9uXG4gICAgICAgICAgICB0aGlzIGZ1bmN0aW9uIGNhbGN1bGF0ZXMgdGhlIGhlaWdodCBvZiB0aGUgaXRlbSBhbmQgaW5jcmVhc2VzIHZhbHVlXG4gICAgICAgICAgICBvZiB0aGUgaXRlbSBoZWlnaHQgdmFyICovXG5cdFx0XHRhZGRJdGVtSGVpZ2h0KGl0ZW0pO1xuXG5cdFx0XHQvL2lmIGl0ZW0gaXMgc2VsZWN0ZWQsIGFkZCBhY3RpdmUgY2xhc3Ncblx0XHRcdGlmIChtZW51SXRlbS5pbmRleCA9PT0gc2VsZWN0ZWRJdGVtKSB7XG5cdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LmFkZChzZWxlY3RNZW51U2VsZWN0b3IgKyAnX19pdGVtLS1zZWxlY3RlZCcpO1xuXHRcdFx0XHRsZXQgbWVudVBvc2l0aW9uID0gLU1hdGguYWJzKHBhcnNlSW50KGl0ZW0uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpKSk7XG5cdFx0XHRcdG9wdGlvbkxpc3Quc3R5bGUudG9wID0gbWVudVBvc2l0aW9uICsgJ3B4Jztcblx0XHRcdH1cblxuXHRcdFx0Ly9ldmVudCBsaXN0ZW5lclxuXHRcdFx0aXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlNZW51LCBmYWxzZSk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vZnVuY3Rpb24gdG8gZGlzcGxheSB0aGUgbWVudSB3aGVuIGNsaWNrZWRcblx0dmFyIGRpc3BsYXlNZW51ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0Lyp0aGUgZXZlbnQgaXMgYW55IGNsaWNrIHJlZ2lzdGVyZWQgaW5zaWRlIHRoZSBlbGVtZW50XG4gICAgICAgIGFuZCB0aGVuIGRldGVybWluZSBpZiB0aGUgYnV0dG9uIG9yIG1lbnUgaXRlbSBpcyBjbGlja2VkICovXG5cdFx0aWYgKHRoaXMudGFnTmFtZSA9PSAnQlVUVE9OJykge1xuXHRcdFx0Ly9nZXQgdGhlIG1lbnUgZWxlbWVudCBzbyB3ZSBjYW4gc2VlIGlmIHRoZXJlIGFyZSBvcHRpb25zIHRvIGRpc3BsYXlcblx0XHRcdGxldCBzZWxlY3RNZW51ID0gdGhpcy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xuXG5cdFx0XHRpZiAoc2VsZWN0TWVudS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdC8vYWRkIGFjdGl2ZSBjbGFzcyB0byBidXR0b24gKGlzIHRoaXMgbmVlZGVkPylcblx0XHRcdFx0dGhpcy5jbGFzc0xpc3QudG9nZ2xlKHNlbGVjdE1lbnVTZWxlY3RvciArICdfX2J1dHRvbi0tYWN0aXZlJyk7XG5cblx0XHRcdFx0Ly90b2dnbGUgdGhlIG1lbnVcblx0XHRcdFx0bGV0IG1lbnUgPSB0aGlzLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignVUwnKTtcblx0XHRcdFx0bWVudS5jbGFzc0xpc3QudG9nZ2xlKHNlbGVjdE1lbnVTZWxlY3RvciArICdfX21lbnUtLWFjdGl2ZScpO1xuXG5cdFx0XHRcdC8vdXBkYXRlIHBvc2l0aW9uIG9mIG1lbnVcblx0XHRcdFx0cmVzaXplQW5kUG9zaXRpb24obWVudSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuYmx1cigpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy50YWdOYW1lID09PSAnTEknKSB7XG5cdFx0XHQvL2RlZmluZSB0aGUgbWVudVxuXHRcdFx0bGV0IG1lbnUgPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdVTCcpO1xuXG5cdFx0XHQvL3JlbW92ZSBhY3RpdmUgY2xhc3NzZXMgZnJvbSBhbGwgbWVudXNcblx0XHRcdGxldCBtZW51SXRlbXMgPSBBcnJheS5mcm9tKG1lbnUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0xJJykpO1xuXHRcdFx0bWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKHNlbGVjdE1lbnVTZWxlY3RvciArICdfX2l0ZW0tLXNlbGVjdGVkJyk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly9zZWxlY3QgaXRlbVxuXHRcdFx0dGhpcy5jbGFzc0xpc3QuYWRkKHNlbGVjdE1lbnVTZWxlY3RvciArICdfX2l0ZW0tLXNlbGVjdGVkJyk7XG5cblx0XHRcdC8vdXBkYXRlIHRoZSB2YWx1ZSBvZiB0aGUgc2VsZWN0IG1lbnVcblx0XHRcdGxldCBzZWxlY3QgPSBtZW51LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignU0VMRUNUJyk7XG5cdFx0XHRsZXQgc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XG5cdFx0XHRsZXQgb3B0aW9ucyA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcblxuXHRcdFx0Ly9yZW1vdmUgc2VsZWN0ZWQgb3B0aW9uIGZvciBhbGwgZWxlbWVudHNcblx0XHRcdG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG5cdFx0XHRcdGlmIChvcHRpb24udmFsdWUgPT09IHNlbGVjdGVkVmFsdWUpIHtcblx0XHRcdFx0XHRvcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG9wdGlvbi5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0c2VsZWN0LnZhbHVlID0gc2VsZWN0ZWRWYWx1ZTtcblxuXHRcdFx0Ly9kaXNwYXRjaCBjaGFuZ2UgZXZlbnRcblx0XHRcdGxldCBldmVudCA9IG5ldyBFdmVudCgnY2hhbmdlJyk7XG5cdFx0XHRzZWxlY3QuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cblx0XHRcdC8vdXBkYXRlIHRoZSBidXR0b24gb24gdGhlIGRyb3Bkb3duXG5cdFx0XHRsZXQgYnV0dG9uID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignQlVUVE9OJyk7XG5cdFx0XHRsZXQgYnV0dG9uTGFiZWwgPSBidXR0b24ucXVlcnlTZWxlY3RvcignLicgKyBzZWxlY3RNZW51U2VsZWN0b3IgKyAnX19sYWJlbCcpO1xuXHRcdFx0YnV0dG9uTGFiZWwudGV4dENvbnRlbnQgPSB0aGlzLnRleHRDb250ZW50O1xuXHRcdFx0YnV0dG9uTGFiZWwuY2xhc3NMaXN0LnJlbW92ZShzZWxlY3RNZW51U2VsZWN0b3IgKyAnX19sYWJlbC0tcGxhY2Vob2xkZXInKTtcblxuXHRcdFx0YnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoc2VsZWN0TWVudVNlbGVjdG9yICsgJ19fYnV0dG9uLS1hY3RpdmUnKTtcblxuXHRcdFx0Ly90b2dnbGUgdGhlIGRyb3Bkb3duIHZpc2liaWxpdHlcblx0XHRcdG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShzZWxlY3RNZW51U2VsZWN0b3IgKyAnX19tZW51LS1hY3RpdmUnKTtcblxuXHRcdFx0Ly91cGRhdGUgdGhlIHBvc2l0aW9uIG9mIHRoZSBkcm9wIGRvd24gYWZ0ZXIgaGlkZGVuXG5cdFx0XHRsZXQgbWVudVBvc2l0aW9uID0gLU1hdGguYWJzKHBhcnNlSW50KHRoaXMuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpKSk7XG5cdFx0XHRtZW51LnN0eWxlLnRvcCA9IG1lbnVQb3NpdGlvbiArICdweCc7XG5cblx0XHRcdC8vdXBkYXRlIHBvc2l0aW9uIG9mIG1lbnVcblx0XHRcdHJlc2l6ZUFuZFBvc2l0aW9uKG1lbnUpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBldmVudCBoYW5kbGVyc1xuXG5cdC8vc3RvcCBldmVudCBwcm9wYWdhdGlvblxuXHR2YXIgc3RvcFByb3AgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0fTtcblxuXHQvL3RyYWNrIGNsaWNrcyBvdXRzaWRlIHRoZSBtZW51XG5cdHZhciBpc091dHNpZGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRsZXQgc2VsZWN0TWVudXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QuJyArIHNlbGVjdE1lbnVTZWxlY3Rvcik7XG5cblx0XHRzZWxlY3RNZW51cy5mb3JFYWNoKChzZWxlY3QpID0+IHtcblx0XHRcdGxldCBtZW51V3JhcHBlciA9IHNlbGVjdC5wYXJlbnROb2RlO1xuXHRcdFx0bGV0IG1lbnUgPSBtZW51V3JhcHBlci5xdWVyeVNlbGVjdG9yKCdVTCcpO1xuXHRcdFx0bGV0IGJ1dHRvbiA9IG1lbnVXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJ0JVVFRPTicpO1xuXG5cdFx0XHRpZiAobWVudS5jbGFzc0xpc3QuY29udGFpbnMoc2VsZWN0TWVudVNlbGVjdG9yICsgJ19fbWVudS0tYWN0aXZlJykpIHtcblx0XHRcdFx0bGV0IGNsaWNrSW5zaWRlID0gbWVudVdyYXBwZXIuY29udGFpbnMoZXZlbnQudGFyZ2V0KTtcblx0XHRcdFx0aWYgKCFjbGlja0luc2lkZSkge1xuXHRcdFx0XHRcdG1lbnUuY2xhc3NMaXN0LnJlbW92ZShzZWxlY3RNZW51U2VsZWN0b3IgKyAnX19tZW51LS1hY3RpdmUnKTtcblx0XHRcdFx0XHRidXR0b24uY2xhc3NMaXN0LnJlbW92ZShzZWxlY3RNZW51U2VsZWN0b3IgKyAnX19idXR0b24tLWFjdGl2ZScpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0Ly8gdGhpcyBmdW5jdGlvbiBlbnN1cmVzIHRoYXQgdGhlIHNlbGVjdCBtZW51XG5cdC8vIGZpdHMgaW5zaWRlIHRoZSBwbHVnaW4gdmlld3BvcnRcblx0Ly8gaWYgaXRzIHRvbyBiaWcsIGl0IHdpbGwgcmVzaXplIGl0IGFuZCBlbmFibGUgYSBzY3JvbGxiYXJcblx0Ly8gaWYgaXRzIG9mZiBzY3JlZW4gaXQgd2lsbCBzaGlmdCB0aGUgcG9zaXRpb25cblx0Y29uc3QgcmVzaXplQW5kUG9zaXRpb24gPSBmdW5jdGlvbiAobWVudSkge1xuXHRcdC8vc2V0IHRoZSBtYXggaGVpZ2h0IG9mIHRoZSBtZW51IGJhc2VkIG9uIHBsdWdpbi9pZnJhbWUgd2luZG93XG5cdFx0bGV0IG1heE1lbnVIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAxNjtcblx0XHRsZXQgbWVudUhlaWdodCA9IG1lbnUub2Zmc2V0SGVpZ2h0O1xuXHRcdGxldCBtZW51UmVzaXplZCA9IGZhbHNlO1xuXHRcdGxldCBtZW51QnV0dG9uID0gbWVudS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ0JVVFRPTicpO1xuXG5cdFx0aWYgKG1lbnVIZWlnaHQgPiBtYXhNZW51SGVpZ2h0KSB7XG5cdFx0XHRtZW51LnN0eWxlLmhlaWdodCA9IG1heE1lbnVIZWlnaHQgKyAncHgnO1xuXHRcdFx0bWVudVJlc2l6ZWQgPSB0cnVlO1xuXHRcdH1cblxuXHRcdC8vbGV0cyBhZGp1c3QgdGhlIHBvc2l0aW9uIG9mIHRoZSBtZW51IGlmIGl0cyBjdXQgb2ZmIGZyb20gdmlld3BvcnRcblx0XHRsZXQgYm91bmRpbmcgPSBtZW51LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdGxldCBwYXJlbnRCb3VuZGluZyA9IG1lbnVCdXR0b24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0XHRpZiAoYm91bmRpbmcudG9wIDwgMCkge1xuXHRcdFx0bWVudS5zdHlsZS50b3AgPSAtTWF0aC5hYnMocGFyZW50Qm91bmRpbmcudG9wIC0gOCkgKyAncHgnO1xuXHRcdH1cblx0XHRpZiAoYm91bmRpbmcuYm90dG9tID4gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSkge1xuXHRcdFx0bGV0IG1pblRvcCA9IC1NYXRoLmFicyhwYXJlbnRCb3VuZGluZy50b3AgLSAod2luZG93LmlubmVySGVpZ2h0IC0gbWVudUhlaWdodCAtIDgpKTtcblx0XHRcdGxldCBuZXdUb3AgPSAtTWF0aC5hYnMoYm91bmRpbmcuYm90dG9tIC0gd2luZG93LmlubmVySGVpZ2h0ICsgMTYpO1xuXHRcdFx0aWYgKG1lbnVSZXNpemVkKSB7XG5cdFx0XHRcdG1lbnUuc3R5bGUudG9wID0gLU1hdGguYWJzKHBhcmVudEJvdW5kaW5nLnRvcCAtIDgpICsgJ3B4Jztcblx0XHRcdH0gZWxzZSBpZiAobmV3VG9wID4gbWluVG9wKSB7XG5cdFx0XHRcdG1lbnUuc3R5bGUudG9wID0gbWluVG9wICsgJ3B4Jztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1lbnUuc3R5bGUudG9wID0gbmV3VG9wICsgJ3B4Jztcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Ly9oZWxwZXIgZnVuY3Rpb25zXG5cblx0Ly9pbmNyZW1lbnQgaXRlbUhlaWdodFxuXHRmdW5jdGlvbiBhZGRJdGVtSGVpZ2h0KGVsZW1lbnQpIHtcblx0XHQvL2dldCBrZXkgZGltZW5zaW9ucyB0byBjYWxjdWxhdGUgaGVpZ2h0XG5cdFx0bGV0IGRpbWVuc2lvbnMgPSBbXG5cdFx0XHRwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tdG9wJykpLFxuXHRcdFx0cGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWJvdHRvbScpKSxcblx0XHRcdHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctdG9wJykpLFxuXHRcdFx0cGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1ib3R0b20nKSksXG5cdFx0XHRwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKSlcblx0XHRdO1xuXG5cdFx0aXRlbUhlaWdodCArPSBhcnJheVN1bShkaW1lbnNpb25zKTtcblx0fVxuXHQvL2hlbHBlciBmdW5jdGlvbiB0byByZXR1cm4gc3VtIG9mIGFycmF5XG5cdGZ1bmN0aW9uIGFycmF5U3VtKGRhdGEpIHtcblx0XHRyZXR1cm4gZGF0YS5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRcdHJldHVybiBhICsgYjtcblx0XHR9LCAwKTtcblx0fVxuXG5cdC8vIFBVQkxJQ1xuXHR3aW5kb3cuc2VsZWN0TWVudSA9IHtcblx0XHRpbml0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHQvL2Rlc3Ryb3kgZmlyc3QgaWYgYWxyZWFkeSBpbml0aWFsaXplZFxuXHRcdFx0aWYgKGluaXQgPT0gdHJ1ZSkge1xuXHRcdFx0XHR0aGlzLmRlc3Ryb3koKTtcblx0XHRcdH1cblxuXHRcdFx0Ly9pbml0aWFsaXplIGFsbCBtZW51c1xuXHRcdFx0ZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHNlbGVjdE1lbnVTZWxlY3Rvcik7XG5cblx0XHRcdGlmIChlbGVtZW50cykge1xuXHRcdFx0XHQvL2NyZWF0ZSB0aGUgbWVudShzKVxuXHRcdFx0XHRjcmVhdGVNZW51cygpO1xuXG5cdFx0XHRcdC8vY2xpY2sgaGFuZGxlciBmb3IgY2xpY2tzIG91dHNpZGUgb2YgbWVudVxuXHRcdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGlzT3V0c2lkZSwgZmFsc2UpO1xuXG5cdFx0XHRcdC8vc2V0IGluaXQgdG8gdHJ1ZSBub3cgdGhhdCBtZW51IGhhcyBiZWVuIGluaXRpYWxpemVkXG5cdFx0XHRcdGluaXQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoZWxlbWVudHMpIHtcblx0XHRcdFx0Ly9yZW1vdmUgYWxsIHRoZSBnZW5lcmF0ZWQgRE9NIGVsZW1lbnRzXG5cdFx0XHRcdGVsZW1lbnRzLmZvckVhY2goKG1lbnUpID0+IHtcblx0XHRcdFx0XHRsZXQgcGFyZW50ID0gbWVudS5wYXJlbnROb2RlO1xuXHRcdFx0XHRcdHBhcmVudC5xdWVyeVNlbGVjdG9yKCdCVVRUT04nKS5yZW1vdmUoKTtcblx0XHRcdFx0XHRwYXJlbnQucXVlcnlTZWxlY3RvcignVUwnKS5yZW1vdmUoKTtcblx0XHRcdFx0XHRwYXJlbnQub3V0ZXJIVE1MID0gcGFyZW50LmlubmVySFRNTDtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly9yZW1vdmUgZXZlbnQgaGFuZGxlciBvbiBlYWNoIGVsZW1lbnRcblx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpc091dHNpZGUsIGZhbHNlKTtcblxuXHRcdFx0XHQvL3NldCBpbml0IHRvIGZhbHNlIG5vdyB0aGF0IG1lbnUgaGFzIGJlZW4gZGVzdHJveWVkXG5cdFx0XHRcdGluaXQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59KSgpO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3VpLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLypcbiAgICBUaGlzIGNvZGUgd2lsbCBsaXZlIGluIHRoZSA8aWZyYW1lPiB3aXRoaW4gRmlnbWEuXG4gICAgSXQgaGFzIGFjY2VzcyB0byBhbGwgdGhlIGJyb3dzZXIgQVBJcy5cbiovXG5pbXBvcnQgeyBodG1sLCByZW5kZXIgfSBmcm9tICcuLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGl0LWh0bWwuanMnO1xuaW1wb3J0ICcuL2xpYnMvZmlnbWEtZHMvZmlnbWEtcGx1Z2luLWRzLmNzcyc7XG5pbXBvcnQgJy4vbGlicy9maWdtYS1kcy9maWdtYS1wbHVnaW4tZHMuanMnO1xuaW1wb3J0ICcuL3VpLmNzcyc7XG5jb25zdCBwbHVnaW5TZXJ2ZXIgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDgwLyc7XG4vLyBFeGFtcGxlIGJ1dHRvbnNcbi8vIFRoZXNlIHByb3ZpZGUgZXhhbXBsZSBVUkxzIHRoYXQgdGhlIHVzZXIgY2FuIHVzZSB0byB0cnkgb3V0IHRoZSBwbHVnaW4uXG5sZXQgY3Jhd2xVcmwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXJsIGlucHV0Jyk7XG5sZXQgZXhhbXBsZVRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXhhbXBsZXMgc3BhbicpLmZvckVhY2goKGV4YW1wbGUpID0+IHtcbiAgICBleGFtcGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV4YW1wbGUuZGF0YXNldC51cmwpO1xuICAgICAgICBjcmF3bFVybC52YWx1ZSA9IGV4YW1wbGUuZGF0YXNldC51cmw7XG4gICAgICAgIGNyYXdsVXJsLmZvY3VzKCk7XG4gICAgfSk7XG59KTtcbi8vIFN1Ym1pdCBidXR0b25cbi8vIE9uY2UgdGhpcyBpcyBjbGlja2VkLCB0aGUgcGx1Z2luIHNlbmRzIHRoZSBVUkwgdG8gdGhlIHNlcnZlciBhbmQgd2FpdHMgZm9yXG4vLyBhIHJlc3BvbnNlIGJhY2suXG5sZXQgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVybCBidXR0b24nKTtcbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIGlmIChjcmF3bFVybC52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgcGx1Z2luU2VydmVyICsgY3Jhd2xVcmwudmFsdWUpO1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgICAgcmVxdWVzdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogeyB0eXBlOiAncmVzaXplJywgd2lkdGg6IDQ1MCwgaGVpZ2h0OiA0MDAgfSB9LCAnKicpO1xuICAgICAgICAgICAgcmVuZGVyRWxlbWVudHMocmVxdWVzdC5yZXNwb25zZSk7XG4gICAgICAgIH07XG4gICAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgIH1cbn0pO1xuLy8gRGVmaW5lIHRoZSB0ZW1wbGF0ZXMgZm9yIGRpc3BsYXlpbmcgdGhlIGRhdGEuXG5jb25zdCBtYWluVGVtcGxhdGUgPSAodGVtcGxhdGVzKSA9PiBodG1sIGAke3RlbXBsYXRlc31gO1xuY29uc3QgdGV4dFRlbXBsYXRlID0gKGRhdGEpID0+IGh0bWwgYDxkaXYgY2xhc3M9J3RleHQtZGF0YSc+JHtkYXRhfTwvZGl2PmA7XG5jb25zdCBpbWFnZVRlbXBsYXRlID0gKGRhdGEpID0+IGh0bWwgYDxkaXYgY2xhc3M9J2ltYWdlLWRhdGEnPlxuICAgICAgICAgICAgPGltZyBzcmM9JyR7ZGF0YX0nPjwvaW1nPlxuICAgICAgICA8L2Rpdj5gO1xuLy8gRGlzcGxheSB0aGUgZGF0YSB0aGF0IHdlIGdvdC5cbmZ1bmN0aW9uIHJlbmRlckVsZW1lbnRzKHJlc3BvbnNlKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHQnKTtcbiAgICBsZXQgZGF0YVRlbXBsYXRlcyA9IFtdO1xuICAgIGlmIChyZXNwb25zZS5vZ0ltYWdlICYmIHJlc3BvbnNlLm9nSW1hZ2UudXJsKSB7XG4gICAgICAgIGRhdGFUZW1wbGF0ZXMucHVzaChpbWFnZVRlbXBsYXRlKHJlc3BvbnNlLm9nSW1hZ2UudXJsKSk7XG4gICAgfVxuICAgIGlmIChyZXNwb25zZS5vZ1NpdGVOYW1lKSB7XG4gICAgICAgIGRhdGFUZW1wbGF0ZXMucHVzaCh0ZXh0VGVtcGxhdGUocmVzcG9uc2Uub2dTaXRlTmFtZSkpO1xuICAgIH1cbiAgICBpZiAocmVzcG9uc2Uub2dUaXRsZSkge1xuICAgICAgICBkYXRhVGVtcGxhdGVzLnB1c2godGV4dFRlbXBsYXRlKHJlc3BvbnNlLm9nVGl0bGUpKTtcbiAgICB9XG4gICAgaWYgKHJlc3BvbnNlLnR3aXR0ZXJTaXRlKSB7XG4gICAgICAgIGRhdGFUZW1wbGF0ZXMucHVzaCh0ZXh0VGVtcGxhdGUocmVzcG9uc2UudHdpdHRlclNpdGUpKTtcbiAgICB9XG4gICAgaWYgKHJlc3BvbnNlLnR3aXR0ZXJEZXNjcmlwdGlvbikge1xuICAgICAgICBkYXRhVGVtcGxhdGVzLnB1c2godGV4dFRlbXBsYXRlKHJlc3BvbnNlLnR3aXR0ZXJEZXNjcmlwdGlvbikpO1xuICAgIH1cbiAgICByZW5kZXIobWFpblRlbXBsYXRlKGRhdGFUZW1wbGF0ZXMpLCBjb250YWluZXIpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==