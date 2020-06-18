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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const pluginServer = 'http://localhost:8080/';
let globalResponse = {};
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
            globalResponse = request.response;
            renderElements(request.response, {
                showImage: true
            });
        };
        request.send();
    }
});
// Encode the ImageData into Uint8Array
function encode(canvas, ctx, imageData) {
    return __awaiter(this, void 0, void 0, function* () {
        ctx.putImageData(imageData, 0, 0);
        return yield new Promise((resolve, reject) => {
            canvas.toBlob(blob => {
                const reader = new FileReader();
                reader.onload = () => resolve(new Uint8Array(reader.result));
                reader.onerror = () => reject(new Error('Could not read from blob'));
                reader.readAsArrayBuffer(blob);
            });
        });
    });
}
// Send the image to code.ts
function sendImage() {
    return __awaiter(this, void 0, void 0, function* () {
        let canvas = document.createElement('canvas');
        canvas.width = this.naturalWidth;
        canvas.height = this.naturalHeight;
        let context = canvas.getContext("2d");
        context.drawImage(this, 0, 0);
        let imageData = context.getImageData(0, 0, this.naturalWidth, this.naturalHeight);
        let encodedImage = yield encode(canvas, context, imageData);
        window.parent.postMessage({ pluginMessage: { type: 'import-image', bytes: encodedImage } }, '*');
    });
}
// Re-render the elements but don't show the image.
function noImage() {
    renderElements(globalResponse, {
        showImage: false
    });
}
// Define the templates for displaying the data.
const mainTemplate = (templates) => _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"] `${templates}`;
const textTemplate = (data) => _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"] `<div class='text-data'>${data}</div>`;
const imageTemplate = (data) => _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"] `<div class='image-data'>
            <img src='${data}' @click="${sendImage}" crossorigin='' @error="${noImage}"></img>
         </div>`;
// Display the data that we got.
function renderElements(response, options) {
    let container = document.querySelector('.result');
    let dataTemplates = [];
    if (response.ogImage && response.ogImage.url && options.showImage) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvZmlnbWEtZHMvZmlnbWEtcGx1Z2luLWRzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpYi9kZWZhdWx0LXRlbXBsYXRlLXByb2Nlc3Nvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3BhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpYi9wYXJ0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3RlbXBsYXRlLWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpYi90ZW1wbGF0ZS1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3RlbXBsYXRlLXJlc3VsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saXQtaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvZmlnbWEtZHMvZmlnbWEtcGx1Z2luLWRzLmNzcz8xY2QyIiwid2VicGFjazovLy8uL3NyYy9saWJzL2ZpZ21hLWRzL2ZpZ21hLXBsdWdpbi1kcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkuY3NzP2M3N2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsY0FBYyxRQUFTLHNCQUFzQixvREFBb0Qsc0JBQXNCLHdCQUF3QixxQkFBcUIsbUJBQW1CLHNCQUFzQiwrQ0FBK0MsZ0NBQWdDLDZCQUE2QixnQ0FBZ0MsNkJBQTZCLHFCQUFxQixzQ0FBc0Msc0NBQXNDLDhDQUE4QyxzQkFBc0IsbUJBQW1CLHVCQUF1QixpREFBaUQsb0NBQW9DLHNDQUFzQyxxQ0FBcUMsMkJBQTJCLDJCQUEyQixz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QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNO0FBQ1A7QUFDQTtBQUNBLHFDOzs7Ozs7Ozs7Ozs7QUM5REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCOzs7Ozs7Ozs7Ozs7QUMzQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUCxnQzs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkM7QUFDTjtBQUNPO0FBQ1k7QUFDSjtBQUNUO0FBQ3RDO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIs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QywrQkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxzQkFBc0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLDBCQUEwQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxvQzs7Ozs7Ozs7Ozs7O0FDdE5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQzs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0wsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNuZEQsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyw0R0FBbUQ7O0FBRXJGOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDb0U7QUFDdkI7QUFDRDtBQUMxQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsaUJBQWlCLDBDQUEwQyxFQUFFO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGlCQUFpQiw0Q0FBNEMsRUFBRTtBQUNsRyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esb0NBQW9DLHVFQUFJLElBQUksVUFBVTtBQUN0RCwrQkFBK0IsdUVBQUksMkJBQTJCLEtBQUs7QUFDbkUsZ0NBQWdDLHVFQUFJO0FBQ3BDLHdCQUF3QixLQUFLLFlBQVksVUFBVSwyQkFBMkIsUUFBUTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpRkFBTTtBQUNWIiwiZmlsZSI6InVpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdWkudHNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogVmFycyAqL1xcbjpyb290IHtcXG4gIC8qIENPTE9SUyAqL1xcbiAgLyogQWNjZW50ICovXFxuICAtLWJsdWU6ICMxOGEwZmI7XFxuICAtLXB1cnBsZTogIzdiNjFmZjtcXG4gIC0taG90LXBpbms6ICNmZjAwZmY7XFxuICAtLWdyZWVuOiAjMWJjNDdkO1xcbiAgLS1yZWQ6ICNmMjQ4MjI7XFxuICAtLXllbGxvdzogI2ZmZWIwMDtcXG4gIC8qIEJhc2ljIGZvcmVncm91bmQgKi9cXG4gIC0tYmxhY2s6ICMwMDAwMDA7XFxuICAtLWJsYWNrODogcmdiYSgwLCAwLCAwLCAuOCk7XFxuICAtLWJsYWNrOC1vcGFxdWU6ICMzMzMzMzM7XFxuICAtLWJsYWNrMzogcmdiYSgwLCAwLCAwLCAuMyk7XFxuICAtLWJsYWNrMy1vcGFxdWU6ICNCM0IzQjM7XFxuICAtLXdoaXRlOiAjZmZmZmZmO1xcbiAgLS13aGl0ZTg6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xcbiAgLS13aGl0ZTQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjQpO1xcbiAgLyogQmFzaWMgYmFja2dyb3VuZCAqL1xcbiAgLS1ncmV5OiAjZjBmMGYwO1xcbiAgLS1zaWx2ZXI6ICNlNWU1ZTU7XFxuICAtLWh1ZDogIzIyMjIyMjtcXG4gIC0tdG9vbGJhcjogIzJjMmMyYztcXG4gIC8qIFNwZWNpYWwgKi9cXG4gIC0tYmxhY2sxOiByZ2JhKDAsIDAsIDAsIC4xKTtcXG4gIC0tYmx1ZTM6IHJnYmEoMjQsIDE0NSwgMjUxLCAuMyk7XFxuICAtLXB1cnBsZTQ6IHJnYmEoMTIzLCA5NywgMjU1LCAuNCk7XFxuICAtLWhvdmVyLWZpbGw6IHJnYmEoMCwgMCwgMCwgLjA2KTtcXG4gIC0tc2VsZWN0aW9uLWE6ICNkYWViZjc7XFxuICAtLXNlbGVjdGlvbi1iOiAjZWRmNWZhO1xcbiAgLS13aGl0ZTI6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpO1xcbiAgLyogVFlQT0dSQVBIWSAqL1xcbiAgLyogUG9zID0gcG9zaXRpdmUgYXBwbGljYXRpb25zIChibGFjayBvbiB3aGl0ZSkgKi9cXG4gIC8qIE5lZyA9IG5lZ2F0aXZlIGFwcGxpY2F0aW9ucyAod2hpdGUgb24gYmxhY2spICovXFxuICAvKiBGb250IHN0YWNrICovXFxuICAtLWZvbnQtc3RhY2s6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxuICAvKiBGb250IHNpemVzICovXFxuICAtLWZvbnQtc2l6ZS14c21hbGw6IDExcHg7XFxuICAtLWZvbnQtc2l6ZS1zbWFsbDogMTJweDtcXG4gIC0tZm9udC1zaXplLWxhcmdlOiAxM3B4O1xcbiAgLS1mb250LXNpemUteGxhcmdlOiAxNHB4O1xcbiAgLyogRm9udCB3ZWlnaHRzICovXFxuICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUwMDtcXG4gIC0tZm9udC13ZWlnaHQtYm9sZDogNjAwO1xcbiAgLyogTGluZWhlaWdodCAqL1xcbiAgLS1mb250LWxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgLyogVXNlIEZvciB4c21hbGwsIHNtYWxsIGZvbnQgc2l6ZXMgKi9cXG4gIC0tZm9udC1saW5lLWhlaWdodC1sYXJnZTogMjRweDtcXG4gIC8qIFVzZSBGb3IgbGFyZ2UsIHhsYXJnZSBmb250IHNpemVzICovXFxuICAvKiBMZXR0ZXJzcGFjaW5nICovXFxuICAtLWZvbnQtbGV0dGVyLXNwYWNpbmctcG9zLXhzbWFsbDogLjAwNWVtO1xcbiAgLS1mb250LWxldHRlci1zcGFjaW5nLW5lZy14c21hbGw6IC4wMWVtO1xcbiAgLS1mb250LWxldHRlci1zcGFjaW5nLXBvcy1zbWFsbDogMDtcXG4gIC0tZm9udC1sZXR0ZXItc3BhY2luZy1uZWctc21hbGw6IC4wMDVlbTtcXG4gIC0tZm9udC1sZXR0ZXItc3BhY2luZy1wb3MtbGFyZ2U6IC0uMDAyNWVtO1xcbiAgLS1mb250LWxldHRlci1zcGFjaW5nLW5lZy1sYXJnZTogLjAwMjVlbTtcXG4gIC0tZm9udC1sZXR0ZXItc3BhY2luZy1wb3MteGxhcmdlOiAtLjAwMWVtO1xcbiAgLS1mb250LWxldHRlci1zcGFjaW5nLW5lZy14bGFyZ2U6IC0uMDAxZW07XFxuICAvKiBCT1JERVIgUkFESVVTICovXFxuICAtLWJvcmRlci1yYWRpdXMtc21hbGw6IDJweDtcXG4gIC0tYm9yZGVyLXJhZGl1cy1tZWQ6IDVweDtcXG4gIC0tYm9yZGVyLXJhZGl1cy1sYXJnZTogNnB4O1xcbiAgLyogU0hBRE9XUyAqL1xcbiAgLS1zaGFkb3ctaHVkOiAwIDVweCAxN3B4IHJnYmEoMCwgMCwgMCwgLjIpLCAwIDJweCA3cHggcmdiYSgwLCAwLCAwLCAuMTUpO1xcbiAgLS1zaGFkb3ctZmxvYXRpbmctd2luZG93OiAwIDJweCAxNHB4IHJnYmEoMCwgMCwgMCwgLjE1KTtcXG4gIC8qIFNQQUNJTkcgKyBTSVpJTkcgKi9cXG4gIC0tc2l6ZS14eHhzbWFsbDogNHB4O1xcbiAgLS1zaXplLXh4c21hbGw6IDhweDtcXG4gIC0tc2l6ZS14c21hbGw6IDE2cHg7XFxuICAtLXNpemUtc21hbGw6IDI0cHg7XFxuICAtLXNpemUtbWVkaXVtOiAzMnB4O1xcbiAgLS1zaXplLWxhcmdlOiA0MHB4O1xcbiAgLS1zaXplLXhsYXJnZTogNDhweDtcXG4gIC0tc2l6ZS14eGxhcmdlOiA2NHB4O1xcbiAgLS1zaXplLXh4eGxhcmdlOiA4MHB4O1xcbn1cXG5cXG4vKiBHbG9iYWwgc3R5bGVzICovXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qICBGT05UUyAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdJbnRlcic7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgc3JjOiB1cmwoXFxcImh0dHBzOi8vcnNtcy5tZS9pbnRlci9mb250LWZpbGVzL0ludGVyLVJlZ3VsYXIud29mZjI/dj0zLjdcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcXFwiaHR0cHM6Ly9yc21zLm1lL2ludGVyL2ZvbnQtZmlsZXMvSW50ZXItUmVndWxhci53b2ZmP3Y9My43XFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdJbnRlcic7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgc3JjOiB1cmwoXFxcImh0dHBzOi8vcnNtcy5tZS9pbnRlci9mb250LWZpbGVzL0ludGVyLU1lZGl1bS53b2ZmMj92PTMuN1xcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCJodHRwczovL3JzbXMubWUvaW50ZXIvZm9udC1maWxlcy9JbnRlci1NZWRpdW0ud29mZjI/dj0zLjdcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0ludGVyJztcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBzcmM6IHVybChcXFwiaHR0cHM6Ly9yc21zLm1lL2ludGVyL2ZvbnQtZmlsZXMvSW50ZXItU2VtaUJvbGQud29mZjI/dj0zLjdcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcXFwiaHR0cHM6Ly9yc21zLm1lL2ludGVyL2ZvbnQtZmlsZXMvSW50ZXItU2VtaUJvbGQud29mZjI/dj0zLjdcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuXFxuLyogVVRJTElUSUVTICovXFxuLyogcGFkZGluZyAqL1xcbi5wLXh4eHNtYWxsIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUteHh4c21hbGwpO1xcbn1cXG5cXG4ucC14eHNtYWxsIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUteHhzbWFsbCk7XFxufVxcblxcbi5wLXhzbWFsbCB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXhzbWFsbCk7XFxufVxcblxcbi5wLXNtYWxsIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtc21hbGwpO1xcbn1cXG5cXG4ucC1tZWRpdW0ge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS1tZWRpdW0pO1xcbn1cXG5cXG4ucC1sYXJnZSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLWxhcmdlKTtcXG59XFxuXFxuLnAteGxhcmdlIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUteGxhcmdlKTtcXG59XFxuXFxuLnAteHhsYXJnZSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXh4bGFyZ2UpO1xcbn1cXG5cXG4ucC1odWdlIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUteHh4bGFyZ2UpO1xcbn1cXG5cXG4vKiBwYWRkaW5nIHRvcCAqL1xcbi5wdC14eHhzbWFsbCB7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tc2l6ZS14eHhzbWFsbCk7XFxufVxcblxcbi5wdC14eHNtYWxsIHtcXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1zaXplLXh4c21hbGwpO1xcbn1cXG5cXG4ucHQteHNtYWxsIHtcXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1zaXplLXhzbWFsbCk7XFxufVxcblxcbi5wdC1zbWFsbCB7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tc2l6ZS1zbWFsbCk7XFxufVxcblxcbi5wdC1tZWRpdW0ge1xcbiAgcGFkZGluZy10b3A6IHZhcigtLXNpemUtbWVkaXVtKTtcXG59XFxuXFxuLnB0LWxhcmdlIHtcXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1zaXplLWxhcmdlKTtcXG59XFxuXFxuLnB0LXhsYXJnZSB7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tc2l6ZS14bGFyZ2UpO1xcbn1cXG5cXG4ucHQteHhsYXJnZSB7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tc2l6ZS14eGxhcmdlKTtcXG59XFxuXFxuLnB0LWh1Z2Uge1xcbiAgcGFkZGluZy10b3A6IHZhcigtLXNpemUteHh4bGFyZ2UpO1xcbn1cXG5cXG4vKiBwYWRkaW5nIHJpZ2h0ICovXFxuLnByLXh4eHNtYWxsIHtcXG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXNpemUteHh4c21hbGwpO1xcbn1cXG5cXG4ucHIteHhzbWFsbCB7XFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zaXplLXh4c21hbGwpO1xcbn1cXG5cXG4ucHIteHNtYWxsIHtcXG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXNpemUteHNtYWxsKTtcXG59XFxuXFxuLnByLXNtYWxsIHtcXG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXNpemUtc21hbGwpO1xcbn1cXG5cXG4ucHItbWVkaXVtIHtcXG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXNpemUtbWVkaXVtKTtcXG59XFxuXFxuLnByLWxhcmdlIHtcXG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXNpemUtbGFyZ2UpO1xcbn1cXG5cXG4ucHIteGxhcmdlIHtcXG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXNpemUteGxhcmdlKTtcXG59XFxuXFxuLnByLXh4bGFyZ2Uge1xcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tc2l6ZS14eGxhcmdlKTtcXG59XFxuXFxuLnByLWh1Z2Uge1xcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tc2l6ZS14eHhsYXJnZSk7XFxufVxcblxcbi8qIHBhZGRpbmcgYm90dG9tICovXFxuLnBiLXh4eHNtYWxsIHtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zaXplLXh4eHNtYWxsKTtcXG59XFxuXFxuLnBiLXh4c21hbGwge1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXNpemUteHhzbWFsbCk7XFxufVxcblxcbi5wYi14c21hbGwge1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXNpemUteHNtYWxsKTtcXG59XFxuXFxuLnBiLXNtYWxsIHtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zaXplLXNtYWxsKTtcXG59XFxuXFxuLnBiLW1lZGl1bSB7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc2l6ZS1tZWRpdW0pO1xcbn1cXG5cXG4ucGItbGFyZ2Uge1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXNpemUtbGFyZ2UpO1xcbn1cXG5cXG4ucGIteGxhcmdlIHtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zaXplLXhsYXJnZSk7XFxufVxcblxcbi5wYi14eGxhcmdlIHtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zaXplLXh4bGFyZ2UpO1xcbn1cXG5cXG4ucGItaHVnZSB7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc2l6ZS14eHhsYXJnZSk7XFxufVxcblxcbi8qIHBhZGRpbmcgbGVmdCAqL1xcbi5wbC14eHhzbWFsbCB7XFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNpemUteHh4c21hbGwpO1xcbn1cXG5cXG4ucGwteHhzbWFsbCB7XFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNpemUteHhzbWFsbCk7XFxufVxcblxcbi5wbC14c21hbGwge1xcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaXplLXhzbWFsbCk7XFxufVxcblxcbi5wbC1zbWFsbCB7XFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNpemUtc21hbGwpO1xcbn1cXG5cXG4ucGwtbWVkaXVtIHtcXG4gIHBhZGRpbmctbGVmdDogdmFyKC0tc2l6ZS1tZWRpdW0pO1xcbn1cXG5cXG4ucGwtbGFyZ2Uge1xcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaXplLWxhcmdlKTtcXG59XFxuXFxuLnBsLXhsYXJnZSB7XFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNpemUteGxhcmdlKTtcXG59XFxuXFxuLnBsLXh4bGFyZ2Uge1xcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaXplLXh4bGFyZ2UpO1xcbn1cXG5cXG4ucGwtaHVnZSB7XFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNpemUteHh4bGFyZ2UpO1xcbn1cXG5cXG4vKiBtYXJnaW4gKi9cXG4ubS14eHhzbWFsbCB7XFxuICBtYXJnaW46IHZhcigtLXNpemUteHh4c21hbGwpO1xcbn1cXG5cXG4ubS14eHNtYWxsIHtcXG4gIG1hcmdpbjogdmFyKC0tc2l6ZS14eHNtYWxsKTtcXG59XFxuXFxuLm0teHNtYWxsIHtcXG4gIG1hcmdpbjogdmFyKC0tc2l6ZS14c21hbGwpO1xcbn1cXG5cXG4ubS1zbWFsbCB7XFxuICBtYXJnaW46IHZhcigtLXNpemUtc21hbGwpO1xcbn1cXG5cXG4ubS1tZWRpdW0ge1xcbiAgbWFyZ2luOiB2YXIoLS1zaXplLW1lZGl1bSk7XFxufVxcblxcbi5tLWxhcmdlIHtcXG4gIG1hcmdpbjogdmFyKC0tc2l6ZS1sYXJnZSk7XFxufVxcblxcbi5tLXhsYXJnZSB7XFxuICBtYXJnaW46IHZhcigtLXNpemUteGxhcmdlKTtcXG59XFxuXFxuLm0teHhsYXJnZSB7XFxuICBtYXJnaW46IHZhcigtLXNpemUteHhsYXJnZSk7XFxufVxcblxcbi5tLWh1Z2Uge1xcbiAgbWFyZ2luOiB2YXIoLS1zaXplLXh4eGxhcmdlKTtcXG59XFxuXFxuLyogbWFyZ2luIHRvcCAqL1xcbi5tdC14eHhzbWFsbCB7XFxuICBtYXJnaW4tdG9wOiB2YXIoLS1zaXplLXh4eHNtYWxsKTtcXG59XFxuXFxuLm10LXh4c21hbGwge1xcbiAgbWFyZ2luLXRvcDogdmFyKC0tc2l6ZS14eHNtYWxsKTtcXG59XFxuXFxuLm10LXhzbWFsbCB7XFxuICBtYXJnaW4tdG9wOiB2YXIoLS1zaXplLXhzbWFsbCk7XFxufVxcblxcbi5tdC1zbWFsbCB7XFxuICBtYXJnaW4tdG9wOiB2YXIoLS1zaXplLXNtYWxsKTtcXG59XFxuXFxuLm10LW1lZGl1bSB7XFxuICBtYXJnaW4tdG9wOiB2YXIoLS1zaXplLW1lZGl1bSk7XFxufVxcblxcbi5tdC1sYXJnZSB7XFxuICBtYXJnaW4tdG9wOiB2YXIoLS1zaXplLWxhcmdlKTtcXG59XFxuXFxuLm10LXhsYXJnZSB7XFxuICBtYXJnaW4tdG9wOiB2YXIoLS1zaXplLXhsYXJnZSk7XFxufVxcblxcbi5tdC14eGxhcmdlIHtcXG4gIG1hcmdpbi10b3A6IHZhcigtLXNpemUteHhsYXJnZSk7XFxufVxcblxcbi5tdC1odWdlIHtcXG4gIG1hcmdpbi10b3A6IHZhcigtLXNpemUteHh4bGFyZ2UpO1xcbn1cXG5cXG4vKiBtYXJnaW4gcmlnaHQgKi9cXG4ubXIteHh4c21hbGwge1xcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zaXplLXh4eHNtYWxsKTtcXG59XFxuXFxuLm1yLXh4c21hbGwge1xcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zaXplLXh4c21hbGwpO1xcbn1cXG5cXG4ubXIteHNtYWxsIHtcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tc2l6ZS14c21hbGwpO1xcbn1cXG5cXG4ubXItc21hbGwge1xcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zaXplLXNtYWxsKTtcXG59XFxuXFxuLm1yLW1lZGl1bSB7XFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNpemUtbWVkaXVtKTtcXG59XFxuXFxuLm1yLWxhcmdlIHtcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tc2l6ZS1sYXJnZSk7XFxufVxcblxcbi5tci14bGFyZ2Uge1xcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zaXplLXhsYXJnZSk7XFxufVxcblxcbi5tci14eGxhcmdlIHtcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tc2l6ZS14eGxhcmdlKTtcXG59XFxuXFxuLm1yLWh1Z2Uge1xcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zaXplLXh4eGxhcmdlKTtcXG59XFxuXFxuLyogbWFyZ2luIGJvdHRvbSAqL1xcbi5tYi14eHhzbWFsbCB7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zaXplLXh4eHNtYWxsKTtcXG59XFxuXFxuLm1iLXh4c21hbGwge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc2l6ZS14eHNtYWxsKTtcXG59XFxuXFxuLm1iLXhzbWFsbCB7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zaXplLXhzbWFsbCk7XFxufVxcblxcbi5tYi1zbWFsbCB7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zaXplLXNtYWxsKTtcXG59XFxuXFxuLm1iLW1lZGl1bSB7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zaXplLW1lZGl1bSk7XFxufVxcblxcbi5tYi1sYXJnZSB7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zaXplLWxhcmdlKTtcXG59XFxuXFxuLm1iLXhsYXJnZSB7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zaXplLXhsYXJnZSk7XFxufVxcblxcbi5tYi14eGxhcmdlIHtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNpemUteHhsYXJnZSk7XFxufVxcblxcbi5tYi1odWdlIHtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNpemUteHh4bGFyZ2UpO1xcbn1cXG5cXG4vKiBtYXJnaW4gbGVmdCAqL1xcbi5tbC14eHhzbWFsbCB7XFxuICBtYXJnaW4tbGVmdDogdmFyKC0tc2l6ZS14eHhzbWFsbCk7XFxufVxcblxcbi5tbC14eHNtYWxsIHtcXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1zaXplLXh4c21hbGwpO1xcbn1cXG5cXG4ubWwteHNtYWxsIHtcXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1zaXplLXhzbWFsbCk7XFxufVxcblxcbi5tbC1zbWFsbCB7XFxuICBtYXJnaW4tbGVmdDogdmFyKC0tc2l6ZS1zbWFsbCk7XFxufVxcblxcbi5tbC1tZWRpdW0ge1xcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLXNpemUtbWVkaXVtKTtcXG59XFxuXFxuLm1sLWxhcmdlIHtcXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1zaXplLWxhcmdlKTtcXG59XFxuXFxuLm1sLXhsYXJnZSB7XFxuICBtYXJnaW4tbGVmdDogdmFyKC0tc2l6ZS14bGFyZ2UpO1xcbn1cXG5cXG4ubWwteHhsYXJnZSB7XFxuICBtYXJnaW4tbGVmdDogdmFyKC0tc2l6ZS14eGxhcmdlKTtcXG59XFxuXFxuLm1sLWh1Z2Uge1xcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLXNpemUteHh4bGFyZ2UpO1xcbn1cXG5cXG4vKiBsYXlvdXQgdXRpbGl0aWVzICovXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaW5saW5lIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmJsb2NrIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uaW5saW5lLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmlubGluZS1mbGV4IHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbn1cXG5cXG4uY29sdW1uIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb2x1bW4tcmV2ZXJzZSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxufVxcblxcbi5yb3cge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLnJvdy1yZXZlcnNlIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG59XFxuXFxuLmZsZXgtd3JhcCB7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5mbGV4LXdyYXAtcmV2ZXJzZSB7XFxuICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcXG59XFxuXFxuLmZsZXgtbm8td3JhcCB7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuXFxuLmZsZXgtc2hyaW5rIHtcXG4gIGZsZXgtc2hyaW5rOiAxO1xcbn1cXG5cXG4uZmxleC1uby1zaHJpbmsge1xcbiAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5mbGV4LWdyb3cge1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4uZmxleC1uby1ncm93IHtcXG4gIGZsZXgtZ3JvdzogMDtcXG59XFxuXFxuLmp1c3RpZnktY29udGVudC1zdGFydCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5qdXN0aWZ5LWNvbnRlbnQtZW5kIHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uanVzdGlmeS1jb250ZW50LWJldHdlZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uanVzdGlmeS1jb250ZW50LWFyb3VuZCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmFsaWduLWl0ZW1zLXN0YXJ0IHtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uYWxpZ24taXRlbXMtZW5kIHtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLmFsaWduLWl0ZW1zLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWxpZ24taXRlbXMtc3RyZXRjaCB7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuXFxuLmFsaWduLWNvbnRlbnQtc3RhcnQge1xcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLmFsaWduLWNvbnRlbnQtZW5kIHtcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uYWxpZ24tY29udGVudC1jZW50ZXIge1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYWxpZ24tY29udGVudC1zdHJldGNoIHtcXG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XFxufVxcblxcbi5hbGlnbi1zZWxmLXN0YXJ0IHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5hbGlnbi1zZWxmLWVuZCB7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbi5hbGlnbi1zZWxmLWNlbnRlciB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5hbGlnbi1zZWxmLXN0cmV0Y2gge1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtbGFyZ2UpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3RhY2spO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHNtYWxsKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWZvbnQtbGV0dGVyLXNwYWNpbmctbmVnLXNtYWxsKTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1mb250LWxpbmUtaGVpZ2h0KTtcXG4gIGhlaWdodDogdmFyKC0tc2l6ZS1tZWRpdW0pO1xcbiAgcGFkZGluZzogMCB2YXIoLS1zaXplLXhzbWFsbCkgMCB2YXIoLS1zaXplLXhzbWFsbCk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uYnV0dG9uLS1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4uYnV0dG9uLS1wcmltYXJ5OmVuYWJsZWQ6YWN0aXZlLCAuYnV0dG9uLS1wcmltYXJ5OmVuYWJsZWQ6Zm9jdXMge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2szKTtcXG59XFxuXFxuLmJ1dHRvbi0tcHJpbWFyeTpkaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjazMpO1xcbn1cXG5cXG4uYnV0dG9uLS1wcmltYXJ5LWRlc3RydWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbi5idXR0b24tLXByaW1hcnktZGVzdHJ1Y3RpdmU6ZW5hYmxlZDphY3RpdmUsIC5idXR0b24tLXByaW1hcnktZGVzdHJ1Y3RpdmU6ZW5hYmxlZDpmb2N1cyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjazMpO1xcbn1cXG5cXG4uYnV0dG9uLS1wcmltYXJ5LWRlc3RydWN0aXZlOmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuXFxuLmJ1dHRvbi0tc2Vjb25kYXJ5LCAuYnV0dG9uLS1zZWNvbmRhcnktZGVzdHJ1Y3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2s4KTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazgpO1xcbiAgcGFkZGluZzogMCBjYWxjKHZhcigtLXNpemUteHNtYWxsKSArIDFweCkgMCBjYWxjKHZhcigtLXNpemUteHNtYWxsKSArIDFweCk7XFxuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tZm9udC1sZXR0ZXItc3BhY2luZy1wb3Mtc21hbGwpO1xcbn1cXG5cXG4uYnV0dG9uLS1zZWNvbmRhcnk6ZW5hYmxlZDphY3RpdmUsIC5idXR0b24tLXNlY29uZGFyeS1kZXN0cnVjdGl2ZTplbmFibGVkOmFjdGl2ZSwgLmJ1dHRvbi0tc2Vjb25kYXJ5OmVuYWJsZWQ6Zm9jdXMsIC5idXR0b24tLXNlY29uZGFyeS1kZXN0cnVjdGl2ZTplbmFibGVkOmZvY3VzIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsdWUpO1xcbiAgcGFkZGluZzogMCB2YXIoLS1zaXplLXhzbWFsbCkgMCB2YXIoLS1zaXplLXhzbWFsbCk7XFxufVxcblxcbi5idXR0b24tLXNlY29uZGFyeTpkaXNhYmxlZCwgLmJ1dHRvbi0tc2Vjb25kYXJ5LWRlc3RydWN0aXZlOmRpc2FibGVkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrMyk7XFxuICBjb2xvcjogdmFyKC0tYmxhY2szKTtcXG59XFxuXFxuLmJ1dHRvbi0tc2Vjb25kYXJ5LWRlc3RydWN0aXZlIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcmVkKTtcXG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG4uYnV0dG9uLS1zZWNvbmRhcnktZGVzdHJ1Y3RpdmU6ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4uYnV0dG9uLS1zZWNvbmRhcnktZGVzdHJ1Y3RpdmU6ZW5hYmxlZDphY3RpdmUsIC5idXR0b24tLXNlY29uZGFyeS1kZXN0cnVjdGl2ZTplbmFibGVkOmZvY3VzIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXJlZCk7XFxuICBwYWRkaW5nOiAwIHZhcigtLXNpemUteHNtYWxsKSAwIHZhcigtLXNpemUteHNtYWxsKTtcXG59XFxuXFxuLmJ1dHRvbi0tc2Vjb25kYXJ5LWRlc3RydWN0aXZlOmRpc2FibGVkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJlZCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBjb2xvcjogdmFyKC0tcmVkKTtcXG4gIG9wYWNpdHk6IDAuNDtcXG59XFxuXFxuLmJ1dHRvbi0tdGVydGlhcnksIC5idXR0b24tLXRlcnRpYXJ5LWRlc3RydWN0aXZlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWZvbnQtbGV0dGVyLXNwYWNpbmctcG9zLXNtYWxsKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ1dHRvbi0tdGVydGlhcnk6ZW5hYmxlZDpmb2N1cywgLmJ1dHRvbi0tdGVydGlhcnktZGVzdHJ1Y3RpdmU6ZW5hYmxlZDpmb2N1cyB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmJ1dHRvbi0tdGVydGlhcnk6ZGlzYWJsZWQsIC5idXR0b24tLXRlcnRpYXJ5LWRlc3RydWN0aXZlOmRpc2FibGVkIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazMpO1xcbn1cXG5cXG4uYnV0dG9uLS10ZXJ0aWFyeS1kZXN0cnVjdGl2ZSB7XFxuICBjb2xvcjogdmFyKC0tcmVkKTtcXG59XFxuXFxuLmJ1dHRvbi0tdGVydGlhcnktZGVzdHJ1Y3RpdmU6ZW5hYmxlZDpmb2N1cyB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmJ1dHRvbi0tdGVydGlhcnktZGVzdHJ1Y3RpdmU6ZGlzYWJsZWQge1xcbiAgb3BhY2l0eTogMC40O1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUtbWVkaXVtKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC8qIHVuY2hlY2tlZCAqL1xcbiAgLypcXG5cXHQmX19ib3g6Zm9jdXMgKyAmX19sYWJlbDpiZWZvcmUge1xcblxcdFxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG5cXHQgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHZhcigtLWJsdWUpO1xcblxcdH0qL1xcbiAgLyogY2hlY2tlZCAqL1xcbiAgLypcXG5cXHQmX19ib3g6Y2hlY2tlZDpmb2N1cyArICZfX2xhYmVsOmJlZm9yZSB7XFxuXFx0XFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0td2hpdGUpO1xcblxcdCAgICBib3gtc2hhZG93OiAwIDAgMCAycHggdmFyKC0tYmx1ZSk7XFxuXFx0fSovXFxufVxcblxcbi5jaGVja2JveF9fYm94IHtcXG4gIG9wYWNpdHk6IDA7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jaGVja2JveF9fbGFiZWwge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXN0YWNrKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzbWFsbCk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1mb250LWxpbmUtaGVpZ2h0KTtcXG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1mb250LWxldHRlci1zcGFjaW5nLXBvcy14c21hbGwpO1xcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xcbiAgcGFkZGluZzogMCB2YXIoLS1zaXplLXhzbWFsbCkgMCB2YXIoLS1zaXplLXNtYWxsKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5jaGVja2JveF9fbGFiZWw6YmVmb3JlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrOCk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXNtYWxsKTtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIG1hcmdpbjogLTFweCAxMHB4IDAgLThweDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5jaGVja2JveF9fYm94OmRpc2FibGVkICsgLmNoZWNrYm94X19sYWJlbCB7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5cXG4uY2hlY2tib3hfX2JveDpjaGVja2VkICsgLmNoZWNrYm94X19sYWJlbDpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LCUzQ3N2ZyUyMGZpbGwlM0QlMjJub25lJTIyJTIwaGVpZ2h0JTNEJTIyNyUyMiUyMHZpZXdCb3glM0QlMjIwJTIwMCUyMDglMjA3JTIyJTIwd2lkdGglM0QlMjI4JTIyJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIlM0UlM0NwYXRoJTIwY2xpcC1ydWxlJTNEJTIyZXZlbm9kZCUyMiUyMGQlM0QlMjJtMS4xNzY0NyUyMDEuODgyMzYlMjAxLjg4MjM1JTIwMS44ODIzNiUyMDMuNzY0NzEtMy43NjQ3MiUyMDEuMTc2NDclMjAxLjE3NjQ4LTQuOTQxMTglMjA0Ljk0MTItMy4wNTg4Mi0zLjA1ODg0eiUyMiUyMGZpbGwlM0QlMjIlMjNmZmYlMjIlMjBmaWxsLXJ1bGUlM0QlMjJldmVub2RkJTIyJTJGJTNFJTNDJTJGc3ZnJTNFXFxcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMXB4IDJweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xcbn1cXG5cXG4uY2hlY2tib3hfX2JveDpjaGVja2VkOmRpc2FibGVkICsgLmNoZWNrYm94X19sYWJlbDpiZWZvcmUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjazgpO1xcbn1cXG5cXG4uZGlzY2xvc3VyZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5kaXNjbG9zdXJlX19pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNpbHZlcik7XFxufVxcblxcbi5kaXNjbG9zdXJlX19pdGVtOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uZGlzY2xvc3VyZV9fbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUtbWVkaXVtKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzbWFsbCk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcXG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1mb250LWxldHRlci1zcGFjaW5nLXBvcy14c21hbGwpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazgpO1xcbiAgcGFkZGluZzogMCA4cHggMCAyNHB4O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmRpc2Nsb3N1cmVfX2xhYmVsOmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogOHB4O1xcbiAgbGVmdDogNHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIG9wYWNpdHk6IDAuMztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsJTNDc3ZnJTIwZmlsbCUzRCUyMm5vbmUlMjIlMjBoZWlnaHQlM0QlMjIxNiUyMiUyMHZpZXdCb3glM0QlMjIwJTIwMCUyMDE2JTIwMTYlMjIlMjB3aWR0aCUzRCUyMjE2JTIyJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIlM0UlM0NwYXRoJTIwZCUzRCUyMm0xMSUyMDgtNC0zdjZ6JTIyJTIwZmlsbCUzRCUyMiUyMzAwMCUyMiUyRiUzRSUzQyUyRnN2ZyUzRVxcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxufVxcblxcbi5kaXNjbG9zdXJlX19sYWJlbDpob3ZlcjpiZWZvcmUge1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4uZGlzY2xvc3VyZV9fY29udGVudCB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14c21hbGwpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XFxuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tZm9udC1sZXR0ZXItc3BhY2luZy1wb3MteHNtYWxsKTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodCk7XFxuICBjb2xvcjogdmFyKC0tYmxhY2s4KTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUteHhzbWFsbCkgdmFyKC0tc2l6ZS14eHNtYWxsKSB2YXIoLS1zaXplLXh4c21hbGwpIHZhcigtLXNpemUtc21hbGwpO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmRpc2Nsb3N1cmUtLXNlY3Rpb24ge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xcbn1cXG5cXG4uZGlzY2xvc3VyZS0tZXhwYW5kZWQgLmRpc2Nsb3N1cmVfX2NvbnRlbnQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5kaXNjbG9zdXJlLS1leHBhbmRlZCAuZGlzY2xvc3VyZV9fbGFiZWw6YmVmb3JlIHtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsJTNDc3ZnJTIwZmlsbCUzRCUyMm5vbmUlMjIlMjBoZWlnaHQlM0QlMjIxNiUyMiUyMHZpZXdCb3glM0QlMjIwJTIwMCUyMDE2JTIwMTYlMjIlMjB3aWR0aCUzRCUyMjE2JTIyJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIlM0UlM0NwYXRoJTIwZCUzRCUyMm05JTIwMTAlMjAzLTRoLTZ6JTIyJTIwZmlsbCUzRCUyMiUyMzAwMCUyMiUyRiUzRSUzQyUyRnN2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgd2lkdGg6IHZhcigtLXNpemUtbWVkaXVtKTtcXG4gIGhlaWdodDogdmFyKC0tc2l6ZS1tZWRpdW0pO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3RhY2spO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHNtYWxsKTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMnB4IC0xcHg7XFxufVxcblxcbi5pY29uLS1zcGluIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGluZyAxLjBzIGxpbmVhciBpbmZpbml0ZTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiByb3RhdGluZyAxLjBzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0aW5nIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGluZyB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbi5pY29uLS1ibHVlIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoNTQlKSBzZXBpYSgxNiUpIHNhdHVyYXRlKDc0OTklKSBodWUtcm90YXRlKDE3OWRlZykgYnJpZ2h0bmVzcyg5OCUpIGNvbnRyYXN0KDEwMSUpO1xcbiAgICAgICAgICBmaWx0ZXI6IGludmVydCg1NCUpIHNlcGlhKDE2JSkgc2F0dXJhdGUoNzQ5OSUpIGh1ZS1yb3RhdGUoMTc5ZGVnKSBicmlnaHRuZXNzKDk4JSkgY29udHJhc3QoMTAxJSk7XFxufVxcblxcbi5pY29uLS1wdXJwbGUge1xcbiAgLXdlYmtpdC1maWx0ZXI6IGludmVydCg0MCUpIHNlcGlhKDU5JSkgc2F0dXJhdGUoNDAwMSUpIGh1ZS1yb3RhdGUoMjMyZGVnKSBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDEwMiUpO1xcbiAgICAgICAgICBmaWx0ZXI6IGludmVydCg0MCUpIHNlcGlhKDU5JSkgc2F0dXJhdGUoNDAwMSUpIGh1ZS1yb3RhdGUoMjMyZGVnKSBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDEwMiUpO1xcbn1cXG5cXG4uaWNvbi0tcHVycGxlNCB7XFxuICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDcyJSkgc2VwaWEoNDAlKSBzYXR1cmF0ZSg2NjAlKSBodWUtcm90YXRlKDIwMmRlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCgxMDMlKTtcXG4gICAgICAgICAgZmlsdGVyOiBpbnZlcnQoNzIlKSBzZXBpYSg0MCUpIHNhdHVyYXRlKDY2MCUpIGh1ZS1yb3RhdGUoMjAyZGVnKSBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDEwMyUpO1xcbn1cXG5cXG4uaWNvbi0taG90LXBpbmsge1xcbiAgLXdlYmtpdC1maWx0ZXI6IGludmVydCgxOCUpIHNlcGlhKDkwJSkgc2F0dXJhdGUoMzM0NyUpIGh1ZS1yb3RhdGUoMjkzZGVnKSBicmlnaHRuZXNzKDExNiUpIGNvbnRyYXN0KDEzMiUpO1xcbiAgICAgICAgICBmaWx0ZXI6IGludmVydCgxOCUpIHNlcGlhKDkwJSkgc2F0dXJhdGUoMzM0NyUpIGh1ZS1yb3RhdGUoMjkzZGVnKSBicmlnaHRuZXNzKDExNiUpIGNvbnRyYXN0KDEzMiUpO1xcbn1cXG5cXG4uaWNvbi0tZ3JlZW4ge1xcbiAgLXdlYmtpdC1maWx0ZXI6IGludmVydCg2NiUpIHNlcGlhKDM5JSkgc2F0dXJhdGUoNTM4MiUpIGh1ZS1yb3RhdGUoMTE0ZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDc5JSk7XFxuICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDY2JSkgc2VwaWEoMzklKSBzYXR1cmF0ZSg1MzgyJSkgaHVlLXJvdGF0ZSgxMTRkZWcpIGJyaWdodG5lc3MoMTAyJSkgY29udHJhc3QoNzklKTtcXG59XFxuXFxuLmljb24tLXJlZCB7XFxuICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDQzJSkgc2VwaWEoNTYlKSBzYXR1cmF0ZSg1NjMyJSkgaHVlLXJvdGF0ZSgzNDlkZWcpIGJyaWdodG5lc3MoOTclKSBjb250cmFzdCg5NSUpO1xcbiAgICAgICAgICBmaWx0ZXI6IGludmVydCg0MyUpIHNlcGlhKDU2JSkgc2F0dXJhdGUoNTYzMiUpIGh1ZS1yb3RhdGUoMzQ5ZGVnKSBicmlnaHRuZXNzKDk3JSkgY29udHJhc3QoOTUlKTtcXG59XFxuXFxuLmljb24tLXllbGxvdyB7XFxuICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDc4JSkgc2VwaWEoODYlKSBzYXR1cmF0ZSgxNjA4JSkgaHVlLXJvdGF0ZSgxZGVnKSBicmlnaHRuZXNzKDEwNyUpIGNvbnRyYXN0KDEwNCUpO1xcbiAgICAgICAgICBmaWx0ZXI6IGludmVydCg3OCUpIHNlcGlhKDg2JSkgc2F0dXJhdGUoMTYwOCUpIGh1ZS1yb3RhdGUoMWRlZykgYnJpZ2h0bmVzcygxMDclKSBjb250cmFzdCgxMDQlKTtcXG59XFxuXFxuLmljb24tLWJsYWNrIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NTAwJSkgaHVlLXJvdGF0ZSgxMTdkZWcpIGJyaWdodG5lc3MoMTA5JSkgY29udHJhc3QoMTA1JSk7XFxuICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzUwMCUpIGh1ZS1yb3RhdGUoMTE3ZGVnKSBicmlnaHRuZXNzKDEwOSUpIGNvbnRyYXN0KDEwNSUpO1xcbn1cXG5cXG4uaWNvbi0tYmxhY2s4IHtcXG4gIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMCUpIHNlcGlhKDU2JSkgc2F0dXJhdGUoMjUlKSBodWUtcm90YXRlKDEzN2RlZykgYnJpZ2h0bmVzcygxMDUlKSBjb250cmFzdCg2MCUpO1xcbiAgICAgICAgICBmaWx0ZXI6IGludmVydCgwJSkgc2VwaWEoNTYlKSBzYXR1cmF0ZSgyNSUpIGh1ZS1yb3RhdGUoMTM3ZGVnKSBicmlnaHRuZXNzKDEwNSUpIGNvbnRyYXN0KDYwJSk7XFxufVxcblxcbi5pY29uLS1ibGFjazMge1xcbiAgLXdlYmtpdC1maWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNjk4JSkgaHVlLXJvdGF0ZSgyMTlkZWcpIGJyaWdodG5lc3MoNjYlKSBjb250cmFzdCgxMjclKTtcXG4gICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDY5OCUpIGh1ZS1yb3RhdGUoMjE5ZGVnKSBicmlnaHRuZXNzKDY2JSkgY29udHJhc3QoMTI3JSk7XFxufVxcblxcbi5pY29uLS13aGl0ZSB7XFxuICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDEwMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDI2OWRlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCgxMDQlKTtcXG4gICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMjY5ZGVnKSBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDEwNCUpO1xcbn1cXG5cXG4uaWNvbi0td2hpdGU4IHtcXG4gIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoOTklKSBzZXBpYSgyJSkgc2F0dXJhdGUoNSUpIGh1ZS1yb3RhdGUoNTVkZWcpIGJyaWdodG5lc3MoMTA0JSkgY29udHJhc3QoOTglKTtcXG4gICAgICAgICAgZmlsdGVyOiBpbnZlcnQoOTklKSBzZXBpYSgyJSkgc2F0dXJhdGUoNSUpIGh1ZS1yb3RhdGUoNTVkZWcpIGJyaWdodG5lc3MoMTA0JSkgY29udHJhc3QoOTglKTtcXG59XFxuXFxuLmljb24tLXdoaXRlNCB7XFxuICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoMiUpIHNhdHVyYXRlKDg5NyUpIGh1ZS1yb3RhdGUoMjQ1ZGVnKSBicmlnaHRuZXNzKDExNyUpIGNvbnRyYXN0KDkzJSk7XFxuICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoMiUpIHNhdHVyYXRlKDg5NyUpIGh1ZS1yb3RhdGUoMjQ1ZGVnKSBicmlnaHRuZXNzKDExNyUpIGNvbnRyYXN0KDkzJSk7XFxufVxcblxcbi5pY29uLS1hZGp1c3Qge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGNsaXAtcnVsZT0nZXZlbm9kZCcgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDcGF0aCBkPSdNMTIgMTYuMDVWOWgxdjcuMDVhMi41IDIuNSAwIDAxMCA0LjlWMjNoLTF2LTIuMDVhMi41IDIuNSAwIDAxMC00Ljl6bTIgMi40NWExLjUgMS41IDAgMTEtMyAwIDEuNSAxLjUgMCAwMTMgMHpNMTkgMjNoMXYtNy4wNWEyLjUgMi41IDAgMDAwLTQuOVY5aC0xdjIuMDVhMi41IDIuNSAwIDAwMCA0Ljl6bTItOS41YTEuNSAxLjUgMCAxMC0zIDAgMS41IDEuNSAwIDAwMyAweicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1hbGVydCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMjEuMjUgMTcuMzkzYTEuNzUgMS43NSAwIDAwMS43NSAxLjc1VjIwSDl2LS44NTdhMS43NSAxLjc1IDAgMDAxLjc1LTEuNzVWMTRjMC0zLjMxNCAyLjM1LTYgNS4yNS02czUuMjUgMi42ODYgNS4yNSA2em0tMS0zLjM5M3YzLjM5M2MwIC42LjE5MiAxLjE1NS41MTggMS42MDdoLTkuNTM2YTIuNzM4IDIuNzM4IDAgMDAuNTE4LTEuNjA3VjE0YzAtMi44OTEgMi4wMjQtNSA0LjI1LTVzNC4yNSAyLjEwOSA0LjI1IDV6JyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQ3BhdGggZD0nTTE2IDIzYTIgMiAwIDAxLTItMmgtMWEzIDMgMCAxMDYgMGgtMWEyIDIgMCAwMS0yIDJ6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWFuZ2xlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xMiAxMnY4aDh2LTFoLTNhNCA0IDAgMDAtNC00di0zem0xIDR2M2gzYTMgMyAwIDAwLTMtM3onIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1hcnJvdy1sZWZ0LXJpZ2h0IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMTIuMjA3IDE2LjVsMS42NDcgMS42NDYtLjcwNy43MDhMMTAuMjkzIDE2bDIuODU0LTIuODU0LjcwNy43MDgtMS42NDcgMS42NDZoNy41ODZsLTEuNjQ2LTEuNjQ2LjcwNy0uNzA4TDIxLjcwNyAxNmwtMi44NTMgMi44NTQtLjcwNy0uNzA4IDEuNjQ2LTEuNjQ2eicgZmlsbD0nJTIzMDAwJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS11cC1kb3duIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMTYgMTAuMjkybDIuODU0IDIuODU0LS43MDcuNzA3LTEuNjQ2LTEuNjQ2djcuNTg1bDEuNjQ2LTEuNjQ2LjcwNy43MDctMi44NTMgMi44NTQtMi44NTQtMi44NTQuNzA3LS43MDcgMS42NDcgMS42NDZ2LTcuNTg1bC0xLjY0NyAxLjY0Ni0uNzA3LS43MDd6JyBmaWxsPSclMjMwMDAnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWF1dG8tbGF5b3V0LWhvcml6b250YWwge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTEwIDEwaDV2MTJoLTV6bTEgMWgzdjEwaC0zem02LTFoNXYxMmgtNXptMSAxaDN2MTBoLTN6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tYXV0by1sYXlvdXQtdmVydGljYWwge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTEwIDEwaDEydjVIMTB6bTEgMWgxMHYzSDExem0tMSA2aDEydjVIMTB6bTEgMWgxMHYzSDExeicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWJhY2sge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTEzLjcwNyAxNmw0LjY0Ni00LjY0Ni0uNzA3LS43MDdMMTIuMjkzIDE2bDUuMzUzIDUuMzU0LjcwNy0uNzA3eicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWJsZW5kLWVtcHR5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNi42OTUgMTEuNzJsLS42OTMtLjcxOEwxNiAxMWwtLjAwMS4wMDItLjY5NC43MThDMTMuMTAyIDE0LjAxMiAxMiAxNS4yOTQgMTIgMTYuODUyYTQuMTk5IDQuMTk5IDAgMDAxLjE3MiAyLjkzNiAzLjkwNiAzLjkwNiAwIDAwNS42NTYgMEE0LjE5OSA0LjE5OSAwIDAwMjAgMTYuODUyYzAtMS41NTgtMS4xMDItMi44NC0zLjMwNS01LjEzMnptLS42OTUuNzJjLS45NzcgMS4wMTctMS42OTMgMS43OS0yLjE5NSAyLjQ3MS0uNi44MTQtLjgwNSAxLjM4LS44MDUgMS45NHYuMDAzYTMuMiAzLjIgMCAwMC44OSAyLjIzOSAyLjkwNiAyLjkwNiAwIDAwNC4yMiAwIDMuMiAzLjIgMCAwMC44OS0yLjIzOXYtLjAwMmMwLS41Ni0uMjA1LTEuMTI3LS44MDUtMS45NC0uNTAyLS42ODEtMS4yMTktMS40NTUtMi4xOTUtMi40NzJ6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tYmxlbmQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTE2LjAwMiAxMS4wMDJsLjY5My43MThDMTguODk4IDE0LjAxMiAyMCAxNS4yOTQgMjAgMTYuODUyYTQuMTk5IDQuMTk5IDAgMDEtMS4xNzIgMi45MzYgMy45MDYgMy45MDYgMCAwMS01LjY1NiAwQTQuMTk5IDQuMTk5IDAgMDExMiAxNi44NTJjMC0xLjU1OCAxLjEwMi0yLjg0IDMuMzA1LTUuMTMybC42OTQtLjcxOXptLTIuMTk3IDMuOTFjLjUwMi0uNjgxIDEuMjE5LTEuNDU1IDIuMTk1LTIuNDcyLjk3NiAxLjAxNyAxLjY5MyAxLjc5IDIuMTk1IDIuNDcxLjYuODE0LjgwNSAxLjM4LjgwNSAxLjk0di4wMDNjMCAuMDQ5IDAgLjA5OC0uMDAzLjE0NmgtNS45OTRhMy4zNyAzLjM3IDAgMDEtLjAwMy0uMTQ2di0uMDAyYzAtLjU2LjIwNS0xLjEyNy44MDUtMS45NHonIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1icmVhayB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyBvcGFjaXR5PScuOSclM0UlM0NwYXRoIGQ9J00xMyA5djNoMVY5ek0yMi4xMDMgOS44OTZhMi45NzUgMi45NzUgMCAwMC00LjIwNyAwbC0yLjc1IDIuNzUuNzA3LjcwNyAyLjc1LTIuNzVhMS45NzUgMS45NzUgMCAwMTIuNzkzIDIuNzkzbC0yLjc1IDIuNzUuNzA3LjcwNyAyLjc1LTIuNzVhMi45NzUgMi45NzUgMCAwMDAtNC4yMDd6TTkuODk2IDIyLjEwNGEyLjk3NSAyLjk3NSAwIDAxMC00LjIwOGwyLjc1LTIuNzUuNzA3LjcwNy0yLjc1IDIuNzVhMS45NzUgMS45NzUgMCAwMDIuNzkzIDIuNzkzbDIuNzUtMi43NS43MDcuNzA3LTIuNzUgMi43NWEyLjk3NSAyLjk3NSAwIDAxLTQuMjA3IDB6TTIzIDE5aC0zdi0xaDN6TTE5IDIwdjNoLTF2LTN6TTEyIDEzSDl2MWgzeicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1jYXJldC1kb3duIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMTYgMThsMy00aC02eicgZmlsbD0nJTIzMDAwJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1jYXJldC1sZWZ0IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMTMgMTZsNC0zdjZ6JyBmaWxsPSclMjMwMDAnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWNhcmV0LXJpZ2h0IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMTkgMTZsLTQtM3Y2eicgZmlsbD0nJTIzMDAwJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1jYXJldC11cCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTE2IDE0bDMgNGgtNnonIGZpbGw9JyUyMzAwMCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tY2hlY2sge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTIxLjIwNyAxMy43MDdMMTUgMTkuOTE0bC0zLjcwNy0zLjcwNyAxLjQxNC0xLjQxNEwxNSAxNy4wODZsNC43OTMtNC43OTN6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tY2xvc2Uge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00xNiAxNS4yOTNsNC42NDYtNC42NDYuNzA4LjcwN0wxNi43MDcgMTZsNC42NDcgNC42NDctLjcwNy43MDdMMTYgMTYuNzA3bC00LjY0NiA0LjY0Ny0uNzA3LS43MDdMMTUuMjkzIDE2bC00LjY0Ni00LjY0Ni43MDctLjcwN3onIGZpbGw9JyUyMzAwMCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tY29tcG9uZW50IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xMi4wNjMgMTAuOTM4TDE2IDE0Ljg3NGwzLjkzOC0zLjkzOEwxNiA3em02LjQ2IDBMMTYgMTMuNDZsLTIuNTIzLTIuNTI0TDE2IDguNDE1em0tNi40NiAxMC4xMjRMMTYgMjVsMy45MzgtMy45MzhMMTYgMTcuMTI1em02LjQ2IDBMMTYgMjMuNTg3bC0yLjUyMy0yLjUyM0wxNiAxOC41Mzh6TTcgMTZsMy45MzctMy45MzhMMTQuODc1IDE2bC0zLjkzOCAzLjkzOHptMy45MzcgMi41MjNMMTMuNDYxIDE2bC0yLjUyNC0yLjUyM0w4LjQxNSAxNnpNMTcuMTI1IDE2bDMuOTM4IDMuOTM4TDI1IDE2bC0zLjkzOC0zLjkzOHptNi40NiAwbC0yLjUyMyAyLjUyM0wxOC41NCAxNmwyLjUyMy0yLjUyM3onIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1jb3JuZXItcmFkaXVzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00yMSAxM2gtNGE0IDQgMCAwMC00IDR2NGgtMXYtNGE1IDUgMCAwMTUtNWg0eicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWNvcm5lcnMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTExIDExaDN2MWgtMnYyaC0xem03IDBoM3YzaC0xdi0yaC0yem0tNiA5di0yaC0xdjNoM3YtMXptOS0ydjNoLTN2LTFoMnYtMnonIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1kaXN0cmlidXRlLWhvcml6b250YWwtc3BhY2luZyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyUzRSUzQ3BhdGggZD0nTTExIDIyLjV2LTEzaC0xdjEzek0yMiA5LjV2MTNoLTF2LTEzek0xNyAxMi41djdoLTJ2LTd6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWRpc3RyaWJ1dGUtdmVydGljYWwtc3BhY2luZyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyUzRSUzQ3BhdGggZD0nTTkuNSAxMGgxM3YxaC0xM3pNMTIuNSAxNWg3djJoLTd6TTIyLjUgMjFoLTEzdjFoMTN6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWRyYWZ0IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xMCA4LjVoNy43MDdMMjIgMTIuNzkzVjIzLjVIMTB6bTEgMXYxM2gxMHYtOWgtNHYtNHptNyAuNzA3bDIuMjkzIDIuMjkzSDE4eicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWVmZmVjdHMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J00xNi41IDguNWgtMXYzaDF6TTExLjA1IDEwLjM0M2wtLjcwNy43MDcgMi4xMjEgMi4xMjIuNzA4LS43MDh6TTIxLjY1NyAxMS4wNWwtLjcwNy0uNzA3LTIuMTIxIDIuMTIxLjcwNy43MDh6TTguNSAxNS41djFoM3YtMXpNMjAuNSAxNS41djFoM3YtMXpNMTMuMTcyIDE5LjUzNWwtLjcwOC0uNzA3LTIuMTIgMi4xMjIuNzA2LjcwN3pNMTkuNTM1IDE4LjgyOGwtLjcwNy43MDcgMi4xMjIgMi4xMjIuNzA3LS43MDd6TTE2LjUgMjAuNWgtMXYzaDF6Jy8lM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTE4LjQ5OCAxNS45OThhMi41IDIuNSAwIDExLTUgMCAyLjUgMi41IDAgMDE1IDB6bS0xIDBhMS41IDEuNSAwIDExLTMgMCAxLjUgMS41IDAgMDEzIDB6JyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tZWxsaXBzZXMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTExLjUgMTZhMS41IDEuNSAwIDExLTMgMCAxLjUgMS41IDAgMDEzIDB6bTYgMGExLjUgMS41IDAgMTEtMyAwIDEuNSAxLjUgMCAwMTMgMHptNC41IDEuNWExLjUgMS41IDAgMTAwLTMgMS41IDEuNSAwIDAwMCAzeicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWV5ZWRyb3BwZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00yMi40NDcgOS42Yy0uOC0uOC0yLS44LTIuOCAwbC0yLjggMi44LS44LS43Yy0uNC0uNC0xLS40LTEuNCAwcy0uNCAxIDAgMS40bC43LjctNS44IDUuOGMtLjQuNC0xIDEuOSAwIDIuOXMyLjUuNCAyLjkgMGw1LjgtNS44LjcuN2MuNC40IDEgLjQgMS40IDBzLjQtMSAwLTEuNGwtLjctLjcgMi44LTIuOGMuOC0uOS44LTIuMSAwLTIuOXptLTEwLjkgMTEuOWgtMXYtMWw1LjgtNS44IDEgMWMtLjEgMC01LjggNS44LTUuOCA1Ljh6JyBmaWxsPSclMjMwMDAnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWZvcndhcmQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTE3Ljk0IDE2bC00LjY0Ny00LjY0Ni43MDctLjcwN0wxOS4zNTQgMTYgMTQgMjEuMzU0bC0uNzA3LS43MDd6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tZnJhbWUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTExIDI0di0zSDh2LTFoM3YtOEg4di0xaDNWOGgxdjNoOFY4aDF2M2gzdjFoLTN2OGgzdjFoLTN2M2gtMXYtM2gtOHYzem05LTR2LThoLTh2OHonIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1ncm91cCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyUzRSUzQ3BhdGggZD0nTTE3LjQgOWgtMi44djFoMi44ek0yMC45IDIySDIydi0xLjFoMVYyM2gtMi4xek0xMCAxNC42djIuOEg5di0yLjh6TTIyIDExLjFWMTBoLTEuMVY5SDIzdjIuMXpNMjIgMTQuNnYyLjhoMXYtMi44ek0xMCAxMS4xVjEwaDEuMVY5SDl2Mi4xek05IDIwLjloMVYyMmgxLjF2MUg5ek0xNy40IDIyaC0yLjh2MWgyLjh6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWhpZGRlbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMjEuNTA5IDE1LjgwMUE4LjAzMyA4LjAzMyAwIDAwMjIuOTI4IDE0aC0xLjE4NEE2Ljk5MiA2Ljk5MiAwIDAxMTYgMTdhNi45OTIgNi45OTIgMCAwMS01Ljc0NS0zSDkuMDdhOC4wMzMgOC4wMzMgMCAwMDEuNDIxIDEuODAxbC0xLjU5NSAxLjU5NS43MDguNzA3IDEuNjU3LTEuNjU3Yy43MS41MjMgMS41MTEuOTMyIDIuMzc0IDEuMTk5bC0uNjE3IDIuMjIxLjk2NC4yNjguNjI2LTIuMjU1YTguMDUxIDguMDUxIDAgMDAyLjc4NCAwbC42MjYgMi4yNTUuOTY0LS4yNjgtLjYxNy0yLjIyMWE3Ljk3MSA3Ljk3MSAwIDAwMi4zNzQtMS4ybDEuNjU4IDEuNjU4LjcwNy0uNzA3eicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWhvcml6b250YWwtcGFkZGluZyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyUzRSUzQ3BhdGggZD0nTTkgOXYxNGgxVjl6bTEzIDB2MTRoMVY5eicvJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xMyAxOXYtNmg2djZ6bS0xLTdoOHY4aC04eicgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWh5cGVybGluayB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTIwLjgyNCAxNC40OTJsLTEuNjU3IDEuNjU3LjgyOC44MjkgMS42NTgtMS42NTdhMy41MTcgMy41MTcgMCAwMC00Ljk3My00Ljk3M2wtMS42NTcgMS42NTguODI5LjgyOCAxLjY1Ny0xLjY1N2EyLjM0NSAyLjM0NSAwIDAxMy4zMTUgMy4zMTV6bS00Ljk3NCA0Ljk3MmwuODI5LjgyOS0xLjY1OCAxLjY1N2EzLjUxNiAzLjUxNiAwIDExLTQuOTcyLTQuOTcybDEuNjU5LTEuNjU4LjgyOC44MjktMS42NTYgMS42NTdhMi4zNDMgMi4zNDMgMCAxMDMuMzE1IDMuMzE1bDEuNjU3LTEuNjU3em0yLjA3Mi02LjIxNmwtNC45NzIgNC45NzMuODI4LjgyOSA0Ljk3My00Ljk3M3onIGZpbGw9JyUyMzAwMCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0taW1hZ2Uge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTIyIDEwSDEwdjcuNzkzbDMuMDgzLTMuMDgzIDcuMjkgNy4yOUgyMnpNMTAgMjJ2LTIuNzkzbDMuMDgzLTMuMDgzTDE4Ljk2IDIyem0wLTEzYTEgMSAwIDAwLTEgMXYxMmExIDEgMCAwMDEgMWgxMmExIDEgMCAwMDEtMVYxMGExIDEgMCAwMC0xLTF6bTkuNjY3IDQuNjY3YTEuMzMzIDEuMzMzIDAgMTEtMi42NjcgMCAxLjMzMyAxLjMzMyAwIDAxMi42NjcgMHptMSAwYTIuMzMzIDIuMzMzIDAgMTEtNC42NjcgMCAyLjMzMyAyLjMzMyAwIDAxNC42NjcgMHonIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1pbnN0YW5jZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTYgN2w5IDktOSA5LTktOXptLTcuNTg2IDlMMTYgMjMuNTg2IDIzLjU4NiAxNiAxNiA4LjQxNHonIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1rZXkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTE1LjE0IDIwLjE0YTMuMDE0IDMuMDE0IDAgMDAuMzMxLTMuODY4bDIuMDQ3LTIuMDQ3IDEuNzY3IDEuNzY3YS41LjUgMCAxMC43MDctLjcwN2wtMS43NjctMS43NjcgMS4yOTMtMS4yOTMgMS43ODQgMS43ODRhLjUuNSAwIDEwLjcwNy0uNzA3bC0xLjc4NC0xLjc4NC43NjItLjc2MWEuNS41IDAgMDAtLjcwNy0uNzA4bC01LjUxMyA1LjUxM2EzLjAxNCAzLjAxNCAwIDEwLjM3MyA0LjU3OHptLS43MTItLjcxMmEyLjAwNiAyLjAwNiAwIDEwLTIuODM3LTIuODM3IDIuMDA2IDIuMDA2IDAgMDAyLjgzNyAyLjgzN3onIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1sYXlvdXQtYWxpZ24tYm90dG9tIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNC41IDEwdjEwaC0yVjEwem04IDEydjFoLTEzdi0xem0tMy0ydi02aC0ydjZ6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tYWxpZ24taG9yaXpvbnRhbC1jZW50ZXJzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMTYuNSA5LjVoLTF2M2gtNXYyaDV2M2gtM3YyaDN2M2gxdi0zaDN2LTJoLTN2LTNoNXYtMmgtNXonIGZpbGw9JyUyMzAwMCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tYWxpZ24tbGVmdCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyUzRSUzQ3BhdGggZD0nTTEwIDIyLjVIOXYtMTNoMXpNMjIgMTQuNUgxMnYtMmgxMHpNMTIgMTkuNWg2di0yaC02eicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1hbGlnbi1yaWdodCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyUzRSUzQ3BhdGggZD0nTTIyIDIyLjVoMXYtMTNoLTF6TTEwIDE0LjVoMTB2LTJIMTB6TTIwIDE5LjVoLTZ2LTJoNnonLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tYWxpZ24tdG9wIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBmaWxsPSclMjMwMDAnJTNFJTNDcGF0aCBkPSdNMTQuNSAyMlYxMmgtMnYxMHpNMjIuNSAxMFY5aC0xM3Yxek0xOS41IDEydjZoLTJ2LTZ6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWFsaWduLXZlcnRpY2FsLWNlbnRlcnMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00xMi41IDE1LjV2LTVoMnY1aDN2LTNoMnYzaDN2MWgtM3YzaC0ydi0zaC0zdjVoLTJ2LTVoLTN2LTF6JyBmaWxsPSclMjMwMDAnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWxheW91dC1ncmlkLWNvbHVtbnMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J005IDloM3YxNEg5ek0xNC41IDloM3YxNGgtM3pNMjAgOWgzdjE0aC0zeicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1sYXlvdXQtZ3JpZC1yb3dzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBmaWxsPSclMjMwMDAnJTNFJTNDcGF0aCBkPSdNOSA5aDE0djNIOXpNOSAxNC41aDE0djNIOXpNOSAyMGgxNHYzSDl6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWxheW91dC1ncmlkLXVuaWZvcm0ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J005IDloM3YzSDl6TTIwIDloM3YzaC0zek0xNC41IDloM3YzaC0zek05IDE0LjVoM3YzSDl6TTIwIDE0LjVoM3YzaC0zek0xNC41IDE0LjVoM3YzaC0zek05IDIwaDN2M0g5ek0yMCAyMGgzdjNoLTN6TTE0LjUgMjBoM3YzaC0zeicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1saWJyYXJ5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNS4zNzMgMjJoMS4yNThjLjI4LS4zMi42MTYtLjU5Ny45OTUtLjgxOSAxLjQ3OC0uODYyIDQuMDA1LS45MDkgNS4zODYuMTA5SDI0LjV2LTkuMnMtLjc5Ny0yLjI1LTQuNDItMi4yNWMtMS44NzUgMC0yLjkwMi42MDItMy40NTYgMS4xODRhMi41NjggMi41NjggMCAwMC0uNi45NzZoLS4wNDhhMi41NjkgMi41NjkgMCAwMC0uNi0uOTc2Yy0uNTU0LS41ODItMS41ODEtMS4xODQtMy40NTYtMS4xODQtMy42MjMgMC00LjQyIDIuMjUtNC40MiAyLjI1djkuMTloMS40ODhjMS4zODItMS4wMTkgMy45MS0uOTcgNS4zODgtLjEwNS4zOC4yMjMuNzE3LjUwMy45OTcuODI1em0xLjEyNy05LjcxMXY4LjQ1N2MuMTk1LS4xNTcuNDAzLS4zLjYyMi0uNDI4LjkyNy0uNTQxIDIuMTE1LS43OTYgMy4yNDEtLjc4NyAxLjAwNi4wMDggMi4wODEuMjI3IDIuOTUyLjc1OWguMTg1di03Ljk3M2EyLjQxNCAyLjQxNCAwIDAwLS41MDUtLjU5NWMtLjQ2LS4zOTctMS4zMy0uODgyLTIuOTE1LS44ODItMS41ODYgMC0yLjM0LjQ4My0yLjY5NS44MzVhMS43NDkgMS43NDkgMCAwMC0uMzUzLjQ5IDEuMDc2IDEuMDc2IDAgMDAtLjA1Mi4xMzFsLS4wMDUuMDE3LjAwMS0uMDA2LjAwMi0uMDA4di0uMDA1bC4wMDEtLjAwMnYtLjAwMmwtLjAwNS0uMDAxem0tMSAwaC0uNDc0bC0uMDA2LjAwMXYuMDAybC4wMDEuMDAyLjAwMS4wMDUuMDAyLjAwOC4wMDEuMDA2LS4wMDUtLjAxN2ExLjA3NiAxLjA3NiAwIDAwLS4wNTMtLjEzMSAxLjc0OSAxLjc0OSAwIDAwLS4zNTMtLjQ5Yy0uMzU0LS4zNTEtMS4xMDgtLjgzNS0yLjY5NC0uODM1LTEuNTg1IDAtMi40NTUuNDg1LTIuOTE2Ljg4MmEyLjQxMSAyLjQxMSAwIDAwLS41MDQuNTk1djcuOTYzaC4xODVjLjg3Mi0uNTMyIDEuOTQ4LS43NTIgMi45NTQtLjc1OSAxLjEyOC0uMDA4IDIuMzE2LjI0OSAzLjI0My43OTIuMjE3LjEyNy40MjQuMjcuNjE4LjQyNnonIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1saW5rLWJyb2tlbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyUzRSUzQ3BhdGggZD0nTTE4IDE0di0yYTIgMiAwIDEwLTQgMHYyaC0xdi0yYTMgMyAwIDExNiAwdjJ6TTE5IDE4aC0xdjJhMiAyIDAgMTEtNCAwdi0yaC0xdjJhMyAzIDAgMTA2IDB6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWxpbmstY29ubmVjdGVkIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBmaWxsPSclMjMwMDAnJTNFJTNDcGF0aCBkPSdNMTYgMTBhMiAyIDAgMDEyIDJ2Mmgxdi0yYTMgMyAwIDEwLTYgMHYyaDF2LTJhMiAyIDAgMDEyLTJ6TTE4IDE4aDF2MmEzIDMgMCAxMS02IDB2LTJoMXYyYTIgMiAwIDEwNCAweicvJTNFJTNDcGF0aCBkPSdNMTUuNSAxM3Y2aDF2LTZ6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWxpc3QtZGV0YWlsZWQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J00xMiAxMGgtMnYxaDJ6TTEyIDIwaC0ydjFoMnpNMTAgMTVoMnYxaC0yek0yMiAxMGgtOHYxaDh6TTE0IDIwaDh2MWgtOHpNMjIgMTVoLTh2MWg4eicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1saXN0LXRpbGUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTE0IDExaC0zdjNoM3ptLTQtMXY1aDV2LTV6bTExIDFoLTN2M2gzem0tNC0xdjVoNXYtNXptLTMgOGgtM3YzaDN6bS00LTF2NWg1di01em0xMSAxaC0zdjNoM3ptLTQtMXY1aDV2LTV6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tbGlzdCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyBmaWxsLW9wYWNpdHk9Jy44JyUzRSUzQ3BhdGggZD0nTTIzIDEwSDl2MWgxNHpNOSAxNS41aDE0djFIOXpNOSAyMWgxNHYxSDl6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWxvY2stb2ZmIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMTggMTVoLjVhLjUuNSAwIDAxLjUuNXY1YS41LjUgMCAwMS0uNS41aC02YS41LjUgMCAwMS0uNS0uNXYtNWEuNS41IDAgMDEuNS0uNUgxN3YtMi41YTIuNSAyLjUgMCAwMTUgMFYxNGgtMXYtMS41YTEuNSAxLjUgMCAwMC0zIDB6JyBmaWxsPSclMjMwMDAnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWxvY2stb24ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTEzLjUgMTV2LTEuNWEyLjUgMi41IDAgMDE1IDBWMTVoLjVhLjUuNSAwIDAxLjUuNXY1YS41LjUgMCAwMS0uNS41aC02YS41LjUgMCAwMS0uNS0uNXYtNWEuNS41IDAgMDEuNS0uNXptNC0xLjVWMTVoLTN2LTEuNWExLjUgMS41IDAgMDEzIDB6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tbWludXMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00yMS41IDE2LjVoLTExdi0xaDExeicgZmlsbD0nJTIzMDAwJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1wbGF5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xMyAxMC4wOThMMjIuNDQzIDE2IDEzIDIxLjkwMnptMSAxLjgwNHY4LjE5NkwyMC41NTcgMTZ6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tcGx1cyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTE1LjUgMTUuNXYtNWgxdjVoNXYxaC01djVoLTF2LTVoLTV2LTF6JyBmaWxsPSclMjMwMDAnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXJhbmRvbSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTUuMTE4IDExYTIuNSAyLjUgMCAwMC0xLjMzNS4zODZMMTEuMjI4IDEzSDE4LjV2MWgtOC40OTdhLjUxMi41MTIgMCAwMC0uMDAzLjA1MVYyMC41YzAgLjI3OC4yMjMuNS40OTcuNWg3LjYyOGEuNDk4LjQ5OCAwIDAwLjMyOC0uMTIzbDMuMjA2LTIuODA1YTEgMSAwIDAwLjM0MS0uNzUzVjExLjVhLjUuNSAwIDAwLS41LS41em0tMS44NjktLjQ2YTMuNSAzLjUgMCAwMTEuODctLjU0SDIxLjVhMS41IDEuNSAwIDAxMS41IDEuNXY1LjgyYTIgMiAwIDAxLS42ODMgMS41MDRsLTMuMjA1IDIuODA1Yy0uMjc0LjI0LS42MjQuMzcxLS45ODcuMzcxaC03LjYyN0M5LjY2OCAyMiA5IDIxLjMyNyA5IDIwLjV2LTYuNDQ5YTEuNSAxLjUgMCAwMS42OTktMS4yNjh6JyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQ3BhdGggZD0nTTEzIDE2YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHpNMTcgMTZhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwek0xNyAxOWExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6TTEzIDE5YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHonLyUzRSUzQ2cgY2xpcC1ydWxlPSdldmVub2RkJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDcGF0aCBkPSdNMjIuNDA3IDEwLjcxYS41LjUgMCAwMS0uMTE2LjY5N2wtMy41IDIuNWEuNS41IDAgMDEtLjU4Mi0uODE0bDMuNS0yLjVhLjUuNSAwIDAxLjY5OC4xMTZ6Jy8lM0UlM0NwYXRoIGQ9J00xOCAyMXYtOGgxdjh6Jy8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tcmVjZW50IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBmaWxsPSclMjMwMDAnJTNFJTNDcGF0aCBkPSdNMTUgMTJ2NWg1di0xaC00di00eicvJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00yNCAxNmE4IDggMCAxMS0xNiAwIDggOCAwIDAxMTYgMHptLTEgMGE3IDcgMCAxMS0xNCAwIDcgNyAwIDAxMTQgMHonIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1yZXNpemUtdG8tZml0IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBmaWxsPSclMjMwMDAnJTNFJTNDcGF0aCBkPSdNOC42NDYgOS4zNTRMMTIuMjkzIDEzSDEwdjFoNHYtNGgtMXYyLjI5M0w5LjM1NCA4LjY0NnpNMTkuNzA3IDEzbDMuNjQ3LTMuNjQ2LS43MDctLjcwOEwxOSAxMi4yOTNWMTBoLTF2NGg0di0xek0xOS43MDcgMTlsMy42NDcgMy42NDYtLjcwNy43MDhMMTkgMTkuNzA3VjIyaC0xdi00aDR2MXpNMTIuMjkzIDE5bC0zLjY0NyAzLjY0Ni43MDguNzA4TDEzIDE5LjcwN1YyMmgxdi00aC00djF6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXJlc29sdmUtZmlsbGVkIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNiAyNGE4IDggMCAxMDAtMTYgOCA4IDAgMDAwIDE2em0zLjkxMS05LjYzNWwtLjgyMi0uNzMtMy42MTMgNC4wNjQtMi41ODctMi41ODgtLjc3OC43NzggMy40MTMgMy40MTJ6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tcmVzb2x2ZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyUzRSUzQ3BhdGggZD0nTTE5LjkxMSAxNC4zNjVsLS44MjItLjczLTMuNjEzIDQuMDYzLTIuNTg3LTIuNTg3LS43NzguNzc4IDMuNDEzIDMuNDEyeicvJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00yNCAxNmE4IDggMCAxMS0xNiAwIDggOCAwIDAxMTYgMHptLTEgMGE3IDcgMCAxMS0xNCAwIDcgNyAwIDAxMTQgMHonIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1yZXZlcnNlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNS44NTQgOC42NDZMMTguMjA3IDExbC0yLjM1MyAyLjM1NC0uNzA4LS43MDggMS4xNDctMS4xNDZIMTRjLS41MDMgMC0xLjI3LjE1NS0xLjg5NS42MDYtLjYuNDMyLTEuMTA1IDEuMTU3LTEuMTA1IDIuMzk0djcuMjVoLTFWMTQuNWMwLTEuNTYzLjY2Mi0yLjU4OCAxLjUyLTMuMjA2LjgzMy0uNiAxLjgxNy0uNzk0IDIuNDgtLjc5NGgyLjI5M2wtMS4xNDctMS4xNDZ6TTIyIDEwdjcuMjVjMCAxLjU2My0uNjYyIDIuNTg4LTEuNTIgMy4yMDYtLjgzMy42LTEuODE3Ljc5NC0yLjQ4Ljc5NGgtMi4yOTNsMS4xNDcgMS4xNDYtLjcwOC43MDgtMi4zNTMtMi4zNTQgMi4zNTMtMi4zNTQuNzA4LjcwOC0xLjE0NyAxLjE0NkgxOGMuNTAzIDAgMS4yNy0uMTU1IDEuODk1LS42MDYuNi0uNDMyIDEuMTA1LTEuMTU3IDEuMTA1LTIuMzk0VjEweicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXNlYXJjaC1sYXJnZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTguODc0IDE5LjU4MWE2IDYgMCAxMS43MDctLjcwN2w0LjI3MyA0LjI3Mi0uNzA4LjcwOHpNMjAgMTVhNSA1IDAgMTEtMTAgMCA1IDUgMCAwMTEwIDB6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tc2VhcmNoIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xOC4zOTcgMTguNjA1YTQuNTUyIDQuNTUyIDAgMTEuNzA3LS43MDdsMy4yNSAzLjI0OS0uNzA4LjcwN3ptLjcwNi0zLjU1M2EzLjU1MiAzLjU1MiAwIDExLTcuMTAzIDAgMy41NTIgMy41NTIgMCAwMTcuMTAzIDB6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tc2V0dGluZ3Mge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGNsaXAtcnVsZT0nZXZlbm9kZCcgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDcGF0aCBkPSdNMTYuOTU0IDkuOTI4bC0uMTM5LS4zMzFDMTYuNjM1IDkuMTY1IDE2LjMwMSA5IDE2IDlzLS42MzUuMTY1LS44MTUuNTk3bC0uMTM5LjMzMWMtLjU2IDEuMzQzLTEuOTkyIDIuMTMtMy40MjUgMS43MmwtLjUtLjE0NGMtLjMwOS0uMDg4LS42MDYuMDI1LS44MTUuMzI3YTEuMDUgMS4wNSAwIDAwLS4wNDkgMS4xMjNjLjc0MyAxLjMyMy40MDIgMy4wNjgtLjg2IDMuOTUtLjMxOC4yMjItLjQ1Ni42MTQtLjM3NSAxLjAyNC4wODEuNDA5LjM0Mi42NjguNjczLjcyM2wuMTk1LjAzM2MxLjUyNS4yNTMgMi41MSAxLjY4NyAyLjQyMyAzLjE4LS4wMy41MDMuMjIuODYxLjUyIDEuMDI4LjI4OC4xNjEuNjIzLjE1NS45MjEtLjEwOGwuMzczLS4zM2EyLjggMi44IDAgMDEzLjc0NiAwbC4zNzMuMzNjLjI5OC4yNjQuNjMzLjI3LjkyMi4xMDguMy0uMTY3LjU0OS0uNTI1LjUyLTEuMDI4LS4wODgtMS40OTMuODk3LTIuOTI3IDIuNDIzLTMuMThsLjE5NC0uMDMzYy4zMy0uMDU1LjU5Mi0uMzE0LjY3My0uNzIzLjA4MS0uNDEtLjA1Ny0uODAyLS4zNzUtMS4wMjQtMS4yNjItLjg4Mi0xLjYwMy0yLjYyNy0uODYtMy45NWExLjA1IDEuMDUgMCAwMC0uMDUtMS4xMjNjLS4yMDgtLjMwMi0uNTA1LS40MTUtLjgxNS0uMzI3bC0uNDk5LjE0M2MtMS40MzMuNDEtMi44NjUtLjM3Ni0zLjQyNS0xLjcxOXptLjc4NC0uNzE3Yy0uNjc0LTEuNjE1LTIuODAyLTEuNjE1LTMuNDc2IDBsLS4xMzguMzMyYy0uMzgzLjkxNy0xLjMyNiAxLjQwMS0yLjIyOCAxLjE0M2wtLjQ5OS0uMTQzYy0xLjU3NS0uNDUtMi44NTUgMS4zOTgtMi4wMTIgMi45LjUwNS45LjI1NyAyLjA3LS41NiAyLjY0LTEuMzkyLjk3My0uOTMzIDMuMjgyLjcwNiAzLjU1NWwuMTk1LjAzMmMuOTYuMTYgMS42NSAxLjA5IDEuNTg4IDIuMTM1LS4xMDQgMS43ODggMS44MiAyLjg2NCAzLjEwMyAxLjcyN2wuMzczLS4zM2ExLjggMS44IDAgMDEyLjQyIDBsLjM3My4zM2MxLjI4NCAxLjEzNyAzLjIwNy4wNjEgMy4xMDMtMS43MjctLjA2MS0xLjA0Ni42MjgtMS45NzUgMS41ODktMi4xMzVsLjE5NC0uMDMyYzEuNjM5LS4yNzMgMi4wOTgtMi41ODIuNzA3LTMuNTU0LS44MTgtLjU3Mi0xLjA2Ni0xLjc0Mi0uNTYxLTIuNjQuODQzLTEuNTAzLS40MzctMy4zNTItMi4wMTItMi45MDFsLS41LjE0M2MtLjkuMjU4LTEuODQ0LS4yMjYtMi4yMjYtMS4xNDN6Jy8lM0UlM0NwYXRoIGQ9J00xNiAxOC41YTIgMiAwIDEwMC00IDIgMiAwIDAwMCA0em0wIDFhMyAzIDAgMTAwLTYgMyAzIDAgMDAwIDZ6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXNoYXJlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00yMCA5LjVhMy41IDMuNSAwIDAwLTEuMzgzIDYuNzE2QTQuNTEzIDQuNTEzIDAgMDAxNiAxOC40MzZhNC41MTMgNC41MTMgMCAwMC0yLjYxOC0yLjIyIDMuNTAxIDMuNTAxIDAgMTAtMi43NjQgMEE0LjUwMiA0LjUwMiAwIDAwNy41IDIwLjVWMjJoMTd2LTEuNWMwLTIuMDAzLTEuMzA5LTMuNy0zLjExOC00LjI4NEEzLjUwMSAzLjUwMSAwIDAwMjAgOS41ek0xNy41IDEzYTIuNSAyLjUgMCAxMTUgMCAyLjUgMi41IDAgMDEtNSAwem0tMSA4di0uNWEzLjUgMy41IDAgMTE3IDB2LjV6bS0xLS41di41aC03di0uNWEzLjUgMy41IDAgMTE3IDB6bS02LTcuNWEyLjUgMi41IDAgMTE1IDAgMi41IDIuNSAwIDAxLTUgMHonIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1zbWlsZXkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J00xNiAyMGE0LjAwMiA0LjAwMiAwIDAxLTMuODc0LTNoMS4wNDVhMy4wMDEgMy4wMDEgMCAwMDUuNjU4IDBoMS4wNDVBNC4wMDIgNC4wMDIgMCAwMTE2IDIwek0xOS41IDE0LjEyNWEuODc1Ljg3NSAwIDExLTEuNzUgMCAuODc1Ljg3NSAwIDAxMS43NSAwek0xMy4xMjUgMTVhLjg3NS44NzUgMCAxMDAtMS43NS44NzUuODc1IDAgMDAwIDEuNzV6Jy8lM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTI0IDE2YTggOCAwIDExLTE2IDAgOCA4IDAgMDExNiAwem0tMSAwYTcgNyAwIDExLTE0IDAgNyA3IDAgMDExNCAweicgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXNvcnQtYWxwaGEtYXNjIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ3BhdGggZD0nTTEwLjg5NyA5TDkgMTRoMS4wN2wuMzc5LTFoMi4xMzNsLjMzOCAxaDEuMDU2bC0xLjY5LTV6bTEuMzQ3IDNsLS42NjctMS45NzNMMTAuODI4IDEyek0xMi41NTMgMTlIOS41di0xSDE0di45NzlMMTAuOTMyIDIySDE0djFIOS41di0uOTkzek0yMC41IDguMjkzbDMuMzU0IDMuMzUzLS43MDguNzA4TDIxIDEwLjIwN1YyM2gtMVYxMC4yMDdsLTIuMTQ2IDIuMTQ3LS43MDgtLjcwOHonLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tc29ydC1hbHBoYS1kc2Mge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGNsaXAtcnVsZT0nZXZlbm9kZCcgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDcGF0aCBkPSdNMTAuODk3IDlMOSAxNGgxLjA3bC4zNzktMWgyLjEzM2wuMzM4IDFoMS4wNTZsLTEuNjktNXptMS4zNDcgM2wtLjY2Ny0xLjk3M0wxMC44MjggMTJ6TTEyLjU1MyAxOUg5LjV2LTFIMTR2Ljk3OUwxMC45MzIgMjJIMTR2MUg5LjV2LS45OTN6TTIwIDIxLjc5M1Y5aDF2MTIuNzkzbDIuMTQ2LTIuMTQ3LjcwOC43MDgtMy4zNTQgMy4zNTMtMy4zNTQtMy4zNTMuNzA4LS43MDh6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXNvcnQtdG9wLWJvdHRvbSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMjAuNDUgMTJIMTB2LTFoMTAuNDVjLjk3IDAgMS4zNzIgMS4yNDQuNTg0IDEuODEyTDExLjA1IDIwaDkuMjQzbC0xLjY0Ny0xLjY0Ni43MDgtLjcwOCAyLjg1MyAyLjg1NC0yLjg1MyAyLjg1NC0uNzA4LS43MDhMMjAuMjkzIDIxSDExLjA1Yy0uOTcgMC0xLjM3Mi0xLjI0NC0uNTg0LTEuODEyeicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXNwYWNpbmcge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00yMiAxMWgtMnYxMGgydjFoLTNWMTBoM3ptLTEwLTF2MTJIOXYtMWgyVjExSDl2LTF6bTQgM2gtMXY2aDF6JyBmaWxsPSclMjMwMDAnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXNwaW5uZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTE1LjE2NSA4LjUzYS41LjUgMCAwMS0uNDA0LjU4QTcgNyAwIDEwMjMgMTZhLjUuNSAwIDAxMSAwIDggOCAwIDExLTkuNDE2LTcuODc0LjUuNSAwIDAxLjU4LjQwNHonIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1zdGFyLW9mZiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTggMTQuMDA0TDE2IDhsLTIgNi4wMDRIOEwxMi45NiAxOGwtMS45MDQgNkwxNiAyMGw0Ljk0NCA0LTEuOTA0LTZMMjQgMTR6bTMuMTY1Ljk5OGwtMy44ODYuMDAyTDE2IDExLjE2NGwtMS4yOCAzLjg0aC0zLjg4NWwzLjI4NSAyLjY0Ni0xLjEwMyAzLjQ3N0wxNiAxOC43MTRsMi45ODMgMi40MTMtMS4xMDMtMy40NzZ6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tc3Rhci1vbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTE2IDhsMiA2LjAwNEwyNCAxNGwtNC45NiA0IDEuOTA0IDZMMTYgMjBsLTQuOTQ0IDQgMS45MDQtNkw4IDE0LjAwNGg2eicgZmlsbD0nJTIzMDAwJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1zdHJva2Utd2VpZ2h0IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xMCAxMGgxMnYxSDEwem0wIDRoMTJ2MkgxMHptMTIgNUgxMHYzaDEyeicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXN0eWxlcyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyUzRSUzQ3BhdGggZD0nTTExLjUgMTNhMS41IDEuNSAwIDEwMyAwIDEuNSAxLjUgMCAwMC0zIDB6TTE3LjUgMTNhMS41IDEuNSAwIDEwMyAwIDEuNSAxLjUgMCAwMC0zIDB6TTE5IDIwLjVhMS41IDEuNSAwIDExMC0zIDEuNSAxLjUgMCAwMTAgM3pNMTEuNSAxOWExLjUgMS41IDAgMTAzIDAgMS41IDEuNSAwIDAwLTMgMHonLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tc3dhcCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyUzRSUzQ3BhdGggZD0nTTIzIDEzLjE4OGwtMS4xNzUgMS40NjhhNS41IDUuNSAwIDAwLTEwLjAwMy0yLjIxOWwuODMuNTU3YTQuNSA0LjUgMCAwMTguMjE2IDIuMDU3bC0yLjItMS40NjctLjU1NS44MzIgMy4zODEgMi4yNTQgMi4yODctMi44NTh6TTkgMTcuMTg4bC43OC42MjQgMS4xNzYtMS40NjguMDI2LjE1NmE1LjUgNS41IDAgMDA5Ljk3NiAyLjA2NXYtLjAwMmwtLjgzLS41NTctLjAwMS4wMDFhNC41IDQuNSAwIDAxLTguMjE0LTIuMDU4bDIuMiAxLjQ2Ny41NTUtLjgzMi0zLjM4Mi0yLjI1NHonLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tdGhlbWUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTEzIDEwaC0zdjEyaDN6bS0zLTFhMSAxIDAgMDAtMSAxdjEyYTEgMSAwIDAwMSAxaDNhMSAxIDAgMDAxLTFWMTBhMSAxIDAgMDAtMS0xeicgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0NwYXRoIGQ9J00xMC43NSAyMC41YS43NS43NSAwIDExMS41IDAgLjc1Ljc1IDAgMDEtMS41IDB6TTIyIDE4YTEgMSAwIDAxMSAxdjNhMSAxIDAgMDEtMSAxaC03di0xaDd2LTNoLTd2LTF6TTE4LjM4NSAxN2wyLjc1Ny0yLjc1N2ExIDEgMCAwMDAtMS40MTVsLTIuMTIxLTIuMTJhMSAxIDAgMDAtMS40MTQgMEwxNSAxMy4zMTN2MS40MTRsMy4zMTQtMy4zMTQgMi4xMjEgMi4xMjJMMTYuOTcxIDE3eicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS10aWR5LXVwLWdyaWQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J00xMCAxMGgydjJoLTJ6TTIwIDEwaDJ2MmgtMnpNMTIgMTVoLTJ2Mmgyek0yMCAxNWgydjJoLTJ6TTEyIDIwaC0ydjJoMnpNMjAgMjBoMnYyaC0yek0xNyAxMGgtMnYyaDJ6TTE1IDE1aDJ2MmgtMnpNMTcgMjBoLTJ2MmgyeicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS10aWR5LXVwLWxpc3QtaG9yaXpvbnRhbCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyUzRSUzQ3BhdGggZD0nTTEwIDIyLjV2LTEzaDJ2MTN6TTE1IDIyLjV2LTEzaDJ2MTN6TTIwIDkuNXYxM2gydi0xM3onLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tdGlkeS11cC1saXN0LXZlcnRpY2FsIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBmaWxsPSclMjMwMDAnJTNFJTNDcGF0aCBkPSdNOS41IDEwaDEzdjJoLTEzek05LjUgMTVoMTN2MmgtMTN6TTIyLjUgMjBoLTEzdjJoMTN6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXRpbWVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBmaWxsPSclMjMwMDAnJTNFJTNDcGF0aCBkPSdNMTkgOGgtNlY3aDZ6TTE2LjUgMTd2LTVoLTF2NWEuNS41IDAgMDAxIDB6Jy8lM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTIyLjcxNSAxMi42NWwxLjUyNy0xLjUyOUwyMi4xMjIgOWwtMS40ODMgMS40ODJhOCA4IDAgMTAyLjA3NSAyLjE2N3pNMjMgMTdhNyA3IDAgMTEtMi4zODQtNS4yNjNsLjY0Ny42NDdBNi45NzQgNi45NzQgMCAwMTIzIDE3em0tMS4wMDgtNS4zbC4xMy4xMjguNzA2LS43MDctLjcwNy0uNzA3LS43MDEuNzAxYy4yLjE4NS4zOTEuMzguNTcyLjU4NXonIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS10cmFzaCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyUzRSUzQ3BhdGggZD0nTTE0IDE4LjV2LTRoMXY0ek0xNyAxOC41di00aDF2NHonLyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTkgMTAuNWEyIDIgMCAwMC0yLTJoLTJhMiAyIDAgMDAtMiAyaC0zdjFoMXYxMGEyIDIgMCAwMDIgMmg2YTIgMiAwIDAwMi0ydi0xMGgxdi0xem0tNC0xYTEgMSAwIDAwLTEgMWg0YTEgMSAwIDAwLTEtMXptNSAyaC04djEwYTEgMSAwIDAwMSAxaDZhMSAxIDAgMDAxLTF6JyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tdmVydGljYWwtcGFkZGluZyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyUzRSUzQ3BhdGggZD0nTTkgOWgxNHYxSDl6bTAgMTNoMTR2MUg5eicvJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xOSAxM2gtNnY2aDZ6bS03LTF2OGg4di04eicgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXZpc2libGUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J00xNiAxOGEyIDIgMCAxMDAtNCAyIDIgMCAwMDAgNHonLyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTYgMTJhNy40OTkgNy40OTkgMCAwMTYuNjM1IDRBNy40OTkgNy40OTkgMCAwMTE2IDIwYTcuNDk5IDcuNDk5IDAgMDEtNi42MzUtNEE3LjQ5OSA3LjQ5OSAwIDAxMTYgMTJ6bTAgN2E2LjQ5NSA2LjQ5NSAwIDAxLTUuNDc4LTNBNi40OTUgNi40OTUgMCAwMTE2IDEzYzIuMyAwIDQuMzIyIDEuMTk0IDUuNDc4IDNBNi40OTUgNi40OTUgMCAwMTE2IDE5eicgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXdhcm5pbmctbGFyZ2Uge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTE2IDZsMTAgMThINnptLTEgMTF2LTRoMnY0em0wIDJ2Mmgydi0yeicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXdhcm5pbmcge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTE2IDlsOCAxNEg4em0tMSA4LjVWMTRoMnYzLjV6bTAgMS41djJoMnYtMnonIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IHZhcigtLXNpemUtbWVkaXVtKTtcXG4gIGhlaWdodDogdmFyKC0tc2l6ZS1tZWRpdW0pO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1zbWFsbCk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmljb24tYnV0dG9uICoge1xcbiAgLXdlYmtpdC1maWx0ZXI6IGludmVydCgwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc1MDAlKSBodWUtcm90YXRlKDExN2RlZykgYnJpZ2h0bmVzcygxMDklKSBjb250cmFzdCgxMDUlKTtcXG4gICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NTAwJSkgaHVlLXJvdGF0ZSgxMTdkZWcpIGJyaWdodG5lc3MoMTA5JSkgY29udHJhc3QoMTA1JSk7XFxufVxcblxcbi5pY29uLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ob3Zlci1maWxsKTtcXG59XFxuXFxuLmljb24tYnV0dG9uOmFjdGl2ZSwgLmljb24tYnV0dG9uOmZvY3VzIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsdWUpO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmljb24tYnV0dG9uLS1zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLmljb24tYnV0dG9uLS1zZWxlY3RlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLmljb24tYnV0dG9uLS1zZWxlY3RlZDphY3RpdmUsIC5pY29uLWJ1dHRvbi0tc2VsZWN0ZWQ6Zm9jdXMge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2szKTtcXG59XFxuXFxuLmljb24tYnV0dG9uLS1zZWxlY3RlZCAqIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMjY5ZGVnKSBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDEwNCUpO1xcbiAgICAgICAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxMDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgyNjlkZWcpIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoMTA0JSk7XFxufVxcblxcbi5pbnB1dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5pbnB1dF9fZmllbGQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHNtYWxsKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWZvbnQtbGV0dGVyLXNwYWNpbmctbmVnLXhzbWFsbCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbWFyZ2luOiAxcHggMCAxcHggMDtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUteHhzbWFsbCkgdmFyKC0tc2l6ZS14eHhzbWFsbCkgdmFyKC0tc2l6ZS14eHNtYWxsKSB2YXIoLS1zaXplLXh4c21hbGwpO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrOCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtc21hbGwpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLmlucHV0X19maWVsZDpob3ZlciwgLmlucHV0X19maWVsZDpwbGFjZWhvbGRlci1zaG93bjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tYmxhY2s4KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrMSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbn1cXG5cXG4uaW5wdXRfX2ZpZWxkOjotbW96LXNlbGVjdGlvbiB7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZTMpO1xcbn1cXG5cXG4uaW5wdXRfX2ZpZWxkOjpzZWxlY3Rpb24ge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUzKTtcXG59XFxuXFxuLmlucHV0X19maWVsZDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tYmxhY2szKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uaW5wdXRfX2ZpZWxkOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazMpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5pbnB1dF9fZmllbGQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazMpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5pbnB1dF9fZmllbGQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tYmxhY2szKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uaW5wdXRfX2ZpZWxkOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tYmxhY2szKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uaW5wdXRfX2ZpZWxkOnBsYWNlaG9sZGVyLXNob3duIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrMSk7XFxufVxcblxcbi5pbnB1dF9fZmllbGQ6Zm9jdXM6cGxhY2Vob2xkZXItc2hvd24ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XFxuICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XFxuICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG59XFxuXFxuLmlucHV0X19maWVsZDpkaXNhYmxlZDpob3ZlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmlucHV0X19maWVsZDphY3RpdmUsIC5pbnB1dF9fZmllbGQ6Zm9jdXMge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxufVxcblxcbi5pbnB1dF9fZmllbGQ6ZGlzYWJsZWQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrMyk7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uaW5wdXRfX2ZpZWxkOmRpc2FibGVkOmFjdGl2ZSB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uaW5wdXQtLXdpdGgtaWNvbiAuaW5wdXRfX2ZpZWxkIHtcXG4gIHBhZGRpbmctbGVmdDogMzJweDtcXG59XFxuXFxuLmlucHV0IC5pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMHB4O1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiB2YXIoLS1zaXplLW1lZGl1bSk7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUtbWVkaXVtKTtcXG4gIHotaW5kZXg6IDE7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcblxcbi5sYWJlbCB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14c21hbGwpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XFxuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tZm9udC1sZXR0ZXItc3BhY2luZy1wb3MteHNtYWxsKTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodCk7XFxuICBjb2xvcjogdmFyKC0tYmxhY2szKTtcXG4gIGhlaWdodDogdmFyKC0tc2l6ZS1tZWRpdW0pO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBwYWRkaW5nOiAwIHZhcigtLXNpemUteHh4c21hbGwpIDAgdmFyKC0tc2l6ZS14eHNtYWxsKTtcXG59XFxuXFxuLm9uYm9hcmRpbmctdGlwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogdG9wO1xcbiAgcGFkZGluZzogMCB2YXIoLS1zaXplLXhzbWFsbCkgMCAwO1xcbn1cXG5cXG4ub25ib2FyZGluZy10aXAgLmljb24ge1xcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zaXplLXh4c21hbGwpO1xcbn1cXG5cXG4ub25ib2FyZGluZy10aXBfX21zZyB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXh4c21hbGwpIDAgdmFyKC0tc2l6ZS14eHNtYWxsKSAwO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHNtYWxsKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWZvbnQtbGV0dGVyLXNwYWNpbmctcG9zLXhzbWFsbCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQpO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrOCk7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5yYWRpbyB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogdmFyKC0tc2l6ZS1tZWRpdW0pO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucmFkaW9fX2J1dHRvbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ucmFkaW9fX2J1dHRvbjpjaGVja2VkICsgLnJhZGlvX19sYWJlbDpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPVxcXCI2XFxcIiBoZWlnaHQ9XFxcIjZcXFwiIHZpZXdCb3g9XFxcIjAgMCA2IDZcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIlM0UlM0NyZWN0IHdpZHRoPVxcXCI2XFxcIiBoZWlnaHQ9XFxcIjZcXFwiIHJ4PVxcXCIzXFxcIiBmaWxsPVxcXCJibGFja1xcXCIgZmlsbC1vcGFjaXR5PVxcXCIwLjhcXFwiLyUzRSUzQy9zdmclM0UlMEEnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAycHggMnB4O1xcbn1cXG5cXG4ucmFkaW9fX2J1dHRvbjpkaXNhYmxlZCArIC5yYWRpb19fbGFiZWwge1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5cXG4ucmFkaW9fX2J1dHRvbjpjaGVja2VkOmRpc2FibGVkICsgLnJhZGlvX19sYWJlbDpiZWZvcmUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcbn1cXG5cXG4ucmFkaW9fX2xhYmVsIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tYmxhY2s4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zdGFjayk7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14c21hbGwpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tZm9udC1saW5lLWhlaWdodCk7XFxuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tZm9udC1sZXR0ZXItc3BhY2luZy1wb3MteHNtYWxsKTtcXG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcXG4gIHBhZGRpbmc6IDAgdmFyKC0tc2l6ZS14c21hbGwpIDAgdmFyKC0tc2l6ZS1zbWFsbCk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ucmFkaW9fX2xhYmVsOmJlZm9yZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjazgpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1zbWFsbCk7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBtYXJnaW46IDJweCAxMHB4IDAgLThweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnNlY3Rpb24tdGl0bGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHNtYWxsKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcXG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1mb250LWxldHRlci1zcGFjaW5nLXBvcy14c21hbGwpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazgpO1xcbiAgaGVpZ2h0OiB2YXIoLS1zaXplLW1lZGl1bSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1zaXplLXh4c21hbGwpIC8gMikgMCB2YXIoLS1zaXplLXh4c21hbGwpO1xcbn1cXG5cXG5zZWxlY3Quc2VsZWN0LW1lbnUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNlbGVjdC1tZW51IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNlbGVjdC1tZW51X19idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAxcHggMCAxcHggMDtcXG4gIHBhZGRpbmc6IDBweCB2YXIoLS1zaXplLXh4c21hbGwpIDBweCB2YXIoLS1zaXplLXh4c21hbGwpO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1zbWFsbCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5zZWxlY3QtbWVudV9fYnV0dG9uOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmxhY2sxKTtcXG59XFxuXFxuLnNlbGVjdC1tZW51X19idXR0b246Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XFxuICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XFxuICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG59XFxuXFxuLnNlbGVjdC1tZW51X19idXR0b246ZGlzYWJsZWQ6aG92ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnNlbGVjdC1tZW51X19idXR0b24gKiB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnNlbGVjdC1tZW51X19idXR0b246aG92ZXIgLnNlbGVjdC1tZW51X19sYWJlbC0tcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrOCk7XFxufVxcblxcbi5zZWxlY3QtbWVudV9fYnV0dG9uOmZvY3VzIC5zZWxlY3QtbWVudV9fbGFiZWwtLXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazgpO1xcbn1cXG5cXG4uc2VsZWN0LW1lbnVfX2J1dHRvbjpkaXNhYmxlZDpob3ZlciAuc2VsZWN0LW1lbnVfX2xhYmVsLS1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tYmxhY2szKTtcXG59XFxuXFxuLnNlbGVjdC1tZW51X19idXR0b246aG92ZXIgLnNlbGVjdC1tZW51X19jYXJldCwgLnNlbGVjdC1tZW51X19idXR0b246Zm9jdXMgLnNlbGVjdC1tZW51X19jYXJldCB7XFxuICBvcGFjaXR5OiAxLjA7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnNlbGVjdC1tZW51X19idXR0b246ZGlzYWJsZWQ6aG92ZXIgLnNlbGVjdC1tZW51X19jYXJldCB7XFxuICBvcGFjaXR5OiAwLjM7XFxuICBtYXJnaW4tbGVmdDogLTEycHg7XFxufVxcblxcbi5zZWxlY3QtbWVudV9fYnV0dG9uOmRpc2FibGVkIC5zZWxlY3QtbWVudV9fbGFiZWwge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrMyk7XFxufVxcblxcbi5zZWxlY3QtbWVudV9fbGFiZWwge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHNtYWxsKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWZvbnQtbGV0dGVyLXNwYWNpbmctbmVnLXhzbWFsbCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQpO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrOCk7XFxuICBtYXJnaW4tcmlnaHQ6IDZweDtcXG4gIG1hcmdpbi10b3A6IC0ycHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi5zZWxlY3QtbWVudV9fbGFiZWwtLXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazMpO1xcbn1cXG5cXG4uc2VsZWN0LW1lbnVfX2NhcmV0IHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tdG9wOiAtMXB4O1xcbiAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCwlM0NzdmclMjBmaWxsJTNEJTIybm9uZSUyMiUyMGhlaWdodCUzRCUyMjMwJTIyJTIwdmlld0JveCUzRCUyMjAlMjAwJTIwMzAlMjAzMCUyMiUyMHdpZHRoJTNEJTIyMzAlMjIlMjB4bWxucyUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyUyMiUzRSUzQ3BhdGglMjBjbGlwLXJ1bGUlM0QlMjJldmVub2RkJTIyJTIwZCUzRCUyMm0xNSUyMDE2LjcwNzEtMy0zJTIwLjcwNzEtLjcwNzElMjAyLjY0NjUlMjAyLjY0NjQlMjAyLjY0NjQtMi42NDY0LjcwNzEuNzA3MS0zJTIwMy0uMzUzNS4zNTM2eiUyMiUyMGZpbGwlM0QlMjIlMjMwMDAlMjIlMjBmaWxsLXJ1bGUlM0QlMjJldmVub2RkJTIyJTJGJTNFJTNDJTJGc3ZnJTNFXFxcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuXFxuLnNlbGVjdC1tZW51IC5pY29uIHtcXG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xcbiAgbWFyZ2luLXRvcDogLTJweDtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuXFxuLnNlbGVjdC1tZW51X19tZW51IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1odWQpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWh1ZCk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXh4c21hbGwpIDAgdmFyKC0tc2l6ZS14eHNtYWxsKSAwO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1zbWFsbCk7XFxuICBtYXJnaW46IDA7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgb3ZlcmZsb3cteDogb3ZlcmxheTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5zZWxlY3QtbWVudV9fbWVudS0tYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2VsZWN0LW1lbnVfX21lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBRUFBQUFCQ0FRQUFBQzFIQXdDQUFBQUMwbEVRVlI0Mm1Oa1lBQUFBQVlBQWpDQjBDOEFBQUFBU1VWT1JLNUNZSUk9KTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcXG59XFxuXFxuLnNlbGVjdC1tZW51X19tZW51Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBib3JkZXI6IHNvbGlkIDNweCB0cmFuc3BhcmVudDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4IDEwcHggdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5zZWxlY3QtbWVudV9fbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyOiBzb2xpZCAzcHggdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG59XFxuXFxuLnNlbGVjdC1tZW51X19pdGVtIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXN0YWNrKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtYWxsKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWZvbnQtbGV0dGVyLXNwYWNpbmctbmVnLXhzbWFsbCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tZm9udC1saW5lLWhlaWdodCk7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUtc21hbGwpO1xcbiAgcGFkZGluZzogMHB4IHZhcigtLXNpemUteHNtYWxsKSAwcHggdmFyKC0tc2l6ZS14eHNtYWxsKTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc2VsZWN0LW1lbnVfX2l0ZW0tLXNlbGVjdGVkIC5zZWxlY3QtbWVudV9faXRlbS1pY29uIHtcXG4gIG9wYWNpdHk6IDEuMDtcXG59XFxuXFxuLnNlbGVjdC1tZW51X19pdGVtLWxhYmVsIHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uc2VsZWN0LW1lbnVfX2l0ZW0taWNvbiB7XFxuICB3aWR0aDogdmFyKC0tc2l6ZS14c21hbGwpO1xcbiAgaGVpZ2h0OiB2YXIoLS1zaXplLXhzbWFsbCk7XFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNpemUteHhzbWFsbCk7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LCUzQ3N2ZyUyMGZpbGwlM0QlMjJub25lJTIyJTIwaGVpZ2h0JTNEJTIyMTYlMjIlMjB2aWV3Qm94JTNEJTIyMCUyMDAlMjAxNiUyMDE2JTIyJTIwd2lkdGglM0QlMjIxNiUyMiUyMHhtbG5zJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJTIyJTNFJTNDcGF0aCUyMGNsaXAtcnVsZSUzRCUyMmV2ZW5vZGQlMjIlMjBkJTNEJTIybTEzLjIwNjklMjA1LjIwNzI0LTUuNTAwMDIlMjA1LjQ5OTk2LS43MDcxMS43MDcyLS43MDcxMS0uNzA3Mi0zLTIuOTk5OTYlMjAxLjQxNDIyLTEuNDE0MjElMjAyLjI5Mjg5JTIwMi4yOTI4OSUyMDQuNzkyOTMtNC43OTI4OXolMjIlMjBmaWxsJTNEJTIyJTIzZmZmJTIyJTIwZmlsbC1ydWxlJTNEJTIyZXZlbm9kZCUyMiUyRiUzRSUzQyUyRnN2ZyUzRVxcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxufVxcblxcbi5zZWxlY3QtbWVudS0taGlnaGxpZ2h0LCAuc2VsZWN0LW1lbnVfX2l0ZW06aG92ZXIsIC5zZWxlY3QtbWVudV9faXRlbTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLnNlbGVjdC1tZW51X19kaXZpZGVyLWxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtYWxsKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWZvbnQtbGV0dGVyLXNwYWNpbmctbmVnLXNtYWxsKTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogdmFyKC0tc2l6ZS1zbWFsbCk7XFxuICBwYWRkaW5nOiAwIHZhcigtLXNpemUteHhzbWFsbCkgMCB2YXIoLS1zaXplLW1lZGl1bSk7XFxuICBjb2xvcjogdmFyKC0td2hpdGU0KTtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi5zZWxlY3QtbWVudV9fZGl2aWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZTIpO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1hcmdpbjogOHB4IDAgN3B4IDA7XFxufVxcblxcbi5zd2l0Y2gge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUtbWVkaXVtKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC8qXFxuICAgICZfX3RvZ2dsZTpmb2N1cyArICZfX2xhYmVsOmJlZm9yZSB7XFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggdmFyKC0tYmx1ZSk7XFxuICAgIH1cXG4gICAgKi9cXG59XFxuXFxuLnN3aXRjaF9fdG9nZ2xlIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5zd2l0Y2hfX3RvZ2dsZTpjaGVja2VkICsgLnN3aXRjaF9fbGFiZWw6YmVmb3JlIHtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2s4LW9wYXF1ZSk7XFxufVxcblxcbi5zd2l0Y2hfX3RvZ2dsZTpjaGVja2VkICsgLnN3aXRjaF9fbGFiZWw6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEycHgpO1xcbn1cXG5cXG4uc3dpdGNoX190b2dnbGU6Y2hlY2tlZDpkaXNhYmxlZCArIC5zd2l0Y2hfX2xhYmVsOmJlZm9yZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbi5zd2l0Y2hfX3RvZ2dsZTpkaXNhYmxlZCArIC5zd2l0Y2hfX2xhYmVsIHtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcblxcbi5zd2l0Y2hfX2xhYmVsIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tYmxhY2s4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zdGFjayk7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14c21hbGwpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tZm9udC1sZXR0ZXItc3BhY2luZy1wb3MteHNtYWxsKTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1mb250LWxpbmUtaGVpZ2h0KTtcXG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcXG4gIHBhZGRpbmc6IDAgdmFyKC0tc2l6ZS14c21hbGwpIDAgY2FsYyh2YXIoLS1zaXplLXhsYXJnZSkgLSAycHgpO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnN3aXRjaF9fbGFiZWw6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrOC1vcGFxdWUpO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgY29udGVudDogJyc7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMTBweDtcXG4gIGxlZnQ6IDhweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMCAwLjJzO1xcbiAgd2lkdGg6IDIycHg7XFxufVxcblxcbi5zd2l0Y2hfX2xhYmVsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrOC1vcGFxdWUpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY29udGVudDogJyc7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMTBweDtcXG4gIGxlZnQ6IDhweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xcbiAgd2lkdGg6IDEwcHg7XFxufVxcblxcbi50ZXh0YXJlYSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14c21hbGwpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XFxuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tZm9udC1sZXR0ZXItc3BhY2luZy1uZWcteHNtYWxsKTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiA2MnB4O1xcbiAgbWFyZ2luOiAxcHggMCAxcHggMDtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUteHhzbWFsbCkgdmFyKC0tc2l6ZS14eHhzbWFsbCkgdmFyKC0tc2l6ZS14eHNtYWxsKSB2YXIoLS1zaXplLXh4c21hbGwpO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrOCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjazEpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1zbWFsbCk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgcmVzaXplOiBub25lO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnRleHRhcmVhOmhvdmVyLCAudGV4dGFyZWE6cGxhY2Vob2xkZXItc2hvd246aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrOCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjazEpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG59XFxuXFxuLnRleHRhcmVhOjotbW96LXNlbGVjdGlvbiB7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZTMpO1xcbn1cXG5cXG4udGV4dGFyZWE6OnNlbGVjdGlvbiB7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZTMpO1xcbn1cXG5cXG4udGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrMyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazMpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrMyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnRleHRhcmVhOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrMyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tYmxhY2szKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udGV4dGFyZWE6Zm9jdXM6cGxhY2Vob2xkZXItc2hvd24ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XFxuICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XFxuICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG59XFxuXFxuLnRleHRhcmVhOmFjdGl2ZSwgLnRleHRhcmVhOmZvY3VzIHtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcbn1cXG5cXG4udGV4dGFyZWE6ZGlzYWJsZWQsIC50ZXh0YXJlYTpkaXNhYmxlZDpob3ZlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjb2xvcjogdmFyKC0tYmxhY2szKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udGV4dGFyZWE6ZGlzYWJsZWQ6YWN0aXZlIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi50eXBlIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXN0YWNrKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzbWFsbCk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1mb250LWxpbmUtaGVpZ2h0KTtcXG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1mb250LWxldHRlci1zcGFjaW5nLXBvcy14c21hbGwpO1xcbiAgLyogc2l6ZXMgKi9cXG4gIC8qIHdlaWdodHMgKi9cXG4gIC8qIGxldHRlciBzcGFjaW5nIGFkanVzdG1lbnRzIGJhc2VkIHBvcy9uZWcgYXBwbGljYXRpb24gKi9cXG59XFxuXFxuLnR5cGUtLXNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtYWxsKTtcXG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1mb250LWxldHRlci1zcGFjaW5nLXBvcy1zbWFsbCk7XFxufVxcblxcbi50eXBlLS1sYXJnZSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sYXJnZSk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tZm9udC1saW5lLWhlaWdodC1sYXJnZSk7XFxuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tZm9udC1sZXR0ZXItc3BhY2luZy1wb3MtbGFyZ2UpO1xcbn1cXG5cXG4udHlwZS0teGxhcmdlIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhsYXJnZSk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tZm9udC1saW5lLWhlaWdodC1sYXJnZSk7XFxuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tZm9udC1sZXR0ZXItc3BhY2luZy1wb3MteGxhcmdlKTtcXG59XFxuXFxuLnR5cGUtLW1lZGl1bSB7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG59XFxuXFxuLnR5cGUtLWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xcbn1cXG5cXG4udHlwZS0taW52ZXJzZSB7XFxuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tZm9udC1sZXR0ZXItc3BhY2luZy1uZWcteHNtYWxsKTtcXG59XFxuXFxuLnR5cGUtLWludmVyc2UgKyAudHlwZS0tc21hbGwge1xcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWZvbnQtbGV0dGVyLXNwYWNpbmctbmVnLXNtYWxsKTtcXG59XFxuXFxuLnR5cGUtLWludmVyc2UgKyAudHlwZS0tbGFyZ2Uge1xcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWZvbnQtbGV0dGVyLXNwYWNpbmctbmVnLWxhcmdlKTtcXG59XFxuXFxuLnR5cGUtLWludmVyc2UgKyAudHlwZS0teGxhcmdlIHtcXG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1mb250LWxldHRlci1zcGFjaW5nLW5lZy14bGFyZ2UpO1xcbn1cXG5cXG4udHlwZS0taW5saW5lIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0taW5wdXQtaGVpZ2h0OiAzMnB4O1xcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgLS1mb250LXNpemU6IC45ZW07XFxuXFxuICAgIC0tY29sb3ItdGFnczogIzk5OTtcXG4gICAgLS1ib3JkZXItY29sb3ItdGFnczogI2VlZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuLyogU3R5bGVzIGZvciB0aGUgVVJMIGJhci4gKi9cXG5cXG4udXJsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnVybCBpbnB1dCB7XFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgICBoZWlnaHQ6IHZhcigtLWlucHV0LWhlaWdodCk7XFxufVxcblxcbi8qIFN0eWxlcyBmb3IgdGhlIGV4YW1wbGUgd2Vic2l0ZXMuICovXFxuLmV4YW1wbGVzIHtcXG4gICAgcGFkZGluZzogMWVtIDA7XFxufVxcblxcbi5leGFtcGxlcyBzcGFuIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcbiAgICBwYWRkaW5nOiAuNWVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3ItdGFncyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGFncyk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmV4YW1wbGVzIHNwYW46aG92ZXIge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC42KTtcXG59XFxuXFxuLyogRGlzcGxheWluZyB0aGUgZGF0YSBmcm9tIHRoZSBBUEkuICovXFxuLnJlc3VsdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmctdG9wOiAxZW07XFxufVxcblxcbi5yZXN1bHQgPiAqIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcXG59XFxuXFxuLnJlc3VsdCAudGV4dC1kYXRhIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcbiAgICBwYWRkaW5nOiAuNWVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgY29sb3I6ICM2NjY7XFxufVxcblxcbi5yZXN1bHQgLmltYWdlLWRhdGEgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuaW1wb3J0IHsgQXR0cmlidXRlQ29tbWl0dGVyLCBCb29sZWFuQXR0cmlidXRlUGFydCwgRXZlbnRQYXJ0LCBOb2RlUGFydCwgUHJvcGVydHlDb21taXR0ZXIgfSBmcm9tICcuL3BhcnRzLmpzJztcbi8qKlxuICogQ3JlYXRlcyBQYXJ0cyB3aGVuIGEgdGVtcGxhdGUgaXMgaW5zdGFudGlhdGVkLlxuICovXG5leHBvcnQgY2xhc3MgRGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgcGFydHMgZm9yIGFuIGF0dHJpYnV0ZS1wb3NpdGlvbiBiaW5kaW5nLCBnaXZlbiB0aGUgZXZlbnQsIGF0dHJpYnV0ZVxuICAgICAqIG5hbWUsIGFuZCBzdHJpbmcgbGl0ZXJhbHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCBjb250YWluaW5nIHRoZSBiaW5kaW5nXG4gICAgICogQHBhcmFtIG5hbWUgIFRoZSBhdHRyaWJ1dGUgbmFtZVxuICAgICAqIEBwYXJhbSBzdHJpbmdzIFRoZSBzdHJpbmcgbGl0ZXJhbHMuIFRoZXJlIGFyZSBhbHdheXMgYXQgbGVhc3QgdHdvIHN0cmluZ3MsXG4gICAgICogICBldmVudCBmb3IgZnVsbHktY29udHJvbGxlZCBiaW5kaW5ncyB3aXRoIGEgc2luZ2xlIGV4cHJlc3Npb24uXG4gICAgICovXG4gICAgaGFuZGxlQXR0cmlidXRlRXhwcmVzc2lvbnMoZWxlbWVudCwgbmFtZSwgc3RyaW5ncywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBwcmVmaXggPSBuYW1lWzBdO1xuICAgICAgICBpZiAocHJlZml4ID09PSAnLicpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1pdHRlciA9IG5ldyBQcm9wZXJ0eUNvbW1pdHRlcihlbGVtZW50LCBuYW1lLnNsaWNlKDEpLCBzdHJpbmdzKTtcbiAgICAgICAgICAgIHJldHVybiBjb21taXR0ZXIucGFydHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZWZpeCA9PT0gJ0AnKSB7XG4gICAgICAgICAgICByZXR1cm4gW25ldyBFdmVudFBhcnQoZWxlbWVudCwgbmFtZS5zbGljZSgxKSwgb3B0aW9ucy5ldmVudENvbnRleHQpXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJlZml4ID09PSAnPycpIHtcbiAgICAgICAgICAgIHJldHVybiBbbmV3IEJvb2xlYW5BdHRyaWJ1dGVQYXJ0KGVsZW1lbnQsIG5hbWUuc2xpY2UoMSksIHN0cmluZ3MpXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21taXR0ZXIgPSBuZXcgQXR0cmlidXRlQ29tbWl0dGVyKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MpO1xuICAgICAgICByZXR1cm4gY29tbWl0dGVyLnBhcnRzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgcGFydHMgZm9yIGEgdGV4dC1wb3NpdGlvbiBiaW5kaW5nLlxuICAgICAqIEBwYXJhbSB0ZW1wbGF0ZUZhY3RvcnlcbiAgICAgKi9cbiAgICBoYW5kbGVUZXh0RXhwcmVzc2lvbihvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgTm9kZVBhcnQob3B0aW9ucyk7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciA9IG5ldyBEZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmNvbnN0IGRpcmVjdGl2ZXMgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBCcmFuZHMgYSBmdW5jdGlvbiBhcyBhIGRpcmVjdGl2ZSBmYWN0b3J5IGZ1bmN0aW9uIHNvIHRoYXQgbGl0LWh0bWwgd2lsbCBjYWxsXG4gKiB0aGUgZnVuY3Rpb24gZHVyaW5nIHRlbXBsYXRlIHJlbmRlcmluZywgcmF0aGVyIHRoYW4gcGFzc2luZyBhcyBhIHZhbHVlLlxuICpcbiAqIEEgX2RpcmVjdGl2ZV8gaXMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgUGFydCBhcyBhbiBhcmd1bWVudC4gSXQgaGFzIHRoZVxuICogc2lnbmF0dXJlOiBgKHBhcnQ6IFBhcnQpID0+IHZvaWRgLlxuICpcbiAqIEEgZGlyZWN0aXZlIF9mYWN0b3J5XyBpcyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYXJndW1lbnRzIGZvciBkYXRhIGFuZFxuICogY29uZmlndXJhdGlvbiBhbmQgcmV0dXJucyBhIGRpcmVjdGl2ZS4gVXNlcnMgb2YgZGlyZWN0aXZlIHVzdWFsbHkgcmVmZXIgdG9cbiAqIHRoZSBkaXJlY3RpdmUgZmFjdG9yeSBhcyB0aGUgZGlyZWN0aXZlLiBGb3IgZXhhbXBsZSwgXCJUaGUgcmVwZWF0IGRpcmVjdGl2ZVwiLlxuICpcbiAqIFVzdWFsbHkgYSB0ZW1wbGF0ZSBhdXRob3Igd2lsbCBpbnZva2UgYSBkaXJlY3RpdmUgZmFjdG9yeSBpbiB0aGVpciB0ZW1wbGF0ZVxuICogd2l0aCByZWxldmFudCBhcmd1bWVudHMsIHdoaWNoIHdpbGwgdGhlbiByZXR1cm4gYSBkaXJlY3RpdmUgZnVuY3Rpb24uXG4gKlxuICogSGVyZSdzIGFuIGV4YW1wbGUgb2YgdXNpbmcgdGhlIGByZXBlYXQoKWAgZGlyZWN0aXZlIGZhY3RvcnkgdGhhdCB0YWtlcyBhblxuICogYXJyYXkgYW5kIGEgZnVuY3Rpb24gdG8gcmVuZGVyIGFuIGl0ZW06XG4gKlxuICogYGBganNcbiAqIGh0bWxgPHVsPjwke3JlcGVhdChpdGVtcywgKGl0ZW0pID0+IGh0bWxgPGxpPiR7aXRlbX08L2xpPmApfTwvdWw+YFxuICogYGBgXG4gKlxuICogV2hlbiBgcmVwZWF0YCBpcyBpbnZva2VkLCBpdCByZXR1cm5zIGEgZGlyZWN0aXZlIGZ1bmN0aW9uIHRoYXQgY2xvc2VzIG92ZXJcbiAqIGBpdGVtc2AgYW5kIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbi4gV2hlbiB0aGUgb3V0ZXIgdGVtcGxhdGUgaXMgcmVuZGVyZWQsIHRoZVxuICogcmV0dXJuIGRpcmVjdGl2ZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCB0aGUgUGFydCBmb3IgdGhlIGV4cHJlc3Npb24uXG4gKiBgcmVwZWF0YCB0aGVuIHBlcmZvcm1zIGl0J3MgY3VzdG9tIGxvZ2ljIHRvIHJlbmRlciBtdWx0aXBsZSBpdGVtcy5cbiAqXG4gKiBAcGFyYW0gZiBUaGUgZGlyZWN0aXZlIGZhY3RvcnkgZnVuY3Rpb24uIE11c3QgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYVxuICogZnVuY3Rpb24gb2YgdGhlIHNpZ25hdHVyZSBgKHBhcnQ6IFBhcnQpID0+IHZvaWRgLiBUaGUgcmV0dXJuZWQgZnVuY3Rpb24gd2lsbFxuICogYmUgY2FsbGVkIHdpdGggdGhlIHBhcnQgb2JqZWN0LlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogaW1wb3J0IHtkaXJlY3RpdmUsIGh0bWx9IGZyb20gJ2xpdC1odG1sJztcbiAqXG4gKiBjb25zdCBpbW11dGFibGUgPSBkaXJlY3RpdmUoKHYpID0+IChwYXJ0KSA9PiB7XG4gKiAgIGlmIChwYXJ0LnZhbHVlICE9PSB2KSB7XG4gKiAgICAgcGFydC5zZXRWYWx1ZSh2KVxuICogICB9XG4gKiB9KTtcbiAqL1xuZXhwb3J0IGNvbnN0IGRpcmVjdGl2ZSA9IChmKSA9PiAoKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCBkID0gZiguLi5hcmdzKTtcbiAgICBkaXJlY3RpdmVzLnNldChkLCB0cnVlKTtcbiAgICByZXR1cm4gZDtcbn0pO1xuZXhwb3J0IGNvbnN0IGlzRGlyZWN0aXZlID0gKG8pID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIG8gPT09ICdmdW5jdGlvbicgJiYgZGlyZWN0aXZlcy5oYXMobyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGlyZWN0aXZlLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8qKlxuICogVHJ1ZSBpZiB0aGUgY3VzdG9tIGVsZW1lbnRzIHBvbHlmaWxsIGlzIGluIHVzZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzQ0VQb2x5ZmlsbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgd2luZG93LmN1c3RvbUVsZW1lbnRzICE9IG51bGwgJiZcbiAgICB3aW5kb3cuY3VzdG9tRWxlbWVudHMucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjayAhPT1cbiAgICAgICAgdW5kZWZpbmVkO1xuLyoqXG4gKiBSZXBhcmVudHMgbm9kZXMsIHN0YXJ0aW5nIGZyb20gYHN0YXJ0YCAoaW5jbHVzaXZlKSB0byBgZW5kYCAoZXhjbHVzaXZlKSxcbiAqIGludG8gYW5vdGhlciBjb250YWluZXIgKGNvdWxkIGJlIHRoZSBzYW1lIGNvbnRhaW5lciksIGJlZm9yZSBgYmVmb3JlYC4gSWZcbiAqIGBiZWZvcmVgIGlzIG51bGwsIGl0IGFwcGVuZHMgdGhlIG5vZGVzIHRvIHRoZSBjb250YWluZXIuXG4gKi9cbmV4cG9ydCBjb25zdCByZXBhcmVudE5vZGVzID0gKGNvbnRhaW5lciwgc3RhcnQsIGVuZCA9IG51bGwsIGJlZm9yZSA9IG51bGwpID0+IHtcbiAgICB3aGlsZSAoc3RhcnQgIT09IGVuZCkge1xuICAgICAgICBjb25zdCBuID0gc3RhcnQubmV4dFNpYmxpbmc7XG4gICAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoc3RhcnQsIGJlZm9yZSk7XG4gICAgICAgIHN0YXJ0ID0gbjtcbiAgICB9XG59O1xuLyoqXG4gKiBSZW1vdmVzIG5vZGVzLCBzdGFydGluZyBmcm9tIGBzdGFydGAgKGluY2x1c2l2ZSkgdG8gYGVuZGAgKGV4Y2x1c2l2ZSksIGZyb21cbiAqIGBjb250YWluZXJgLlxuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlTm9kZXMgPSAoY29udGFpbmVyLCBzdGFydCwgZW5kID0gbnVsbCkgPT4ge1xuICAgIHdoaWxlIChzdGFydCAhPT0gZW5kKSB7XG4gICAgICAgIGNvbnN0IG4gPSBzdGFydC5uZXh0U2libGluZztcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKHN0YXJ0KTtcbiAgICAgICAgc3RhcnQgPSBuO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kb20uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE4IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuLyoqXG4gKiBBIHNlbnRpbmVsIHZhbHVlIHRoYXQgc2lnbmFscyB0aGF0IGEgdmFsdWUgd2FzIGhhbmRsZWQgYnkgYSBkaXJlY3RpdmUgYW5kXG4gKiBzaG91bGQgbm90IGJlIHdyaXR0ZW4gdG8gdGhlIERPTS5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vQ2hhbmdlID0ge307XG4vKipcbiAqIEEgc2VudGluZWwgdmFsdWUgdGhhdCBzaWduYWxzIGEgTm9kZVBhcnQgdG8gZnVsbHkgY2xlYXIgaXRzIGNvbnRlbnQuXG4gKi9cbmV4cG9ydCBjb25zdCBub3RoaW5nID0ge307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJ0LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5pbXBvcnQgeyBpc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlLmpzJztcbmltcG9ydCB7IHJlbW92ZU5vZGVzIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgbm9DaGFuZ2UsIG5vdGhpbmcgfSBmcm9tICcuL3BhcnQuanMnO1xuaW1wb3J0IHsgVGVtcGxhdGVJbnN0YW5jZSB9IGZyb20gJy4vdGVtcGxhdGUtaW5zdGFuY2UuanMnO1xuaW1wb3J0IHsgVGVtcGxhdGVSZXN1bHQgfSBmcm9tICcuL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5pbXBvcnQgeyBjcmVhdGVNYXJrZXIgfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcbmV4cG9ydCBjb25zdCBpc1ByaW1pdGl2ZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiAodmFsdWUgPT09IG51bGwgfHxcbiAgICAgICAgISh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykpO1xufTtcbmV4cG9ydCBjb25zdCBpc0l0ZXJhYmxlID0gKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpIHx8XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICEhKHZhbHVlICYmIHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0pO1xufTtcbi8qKlxuICogV3JpdGVzIGF0dHJpYnV0ZSB2YWx1ZXMgdG8gdGhlIERPTSBmb3IgYSBncm91cCBvZiBBdHRyaWJ1dGVQYXJ0cyBib3VuZCB0byBhXG4gKiBzaW5nbGUgYXR0cmlidXRlLiBUaGUgdmFsdWUgaXMgb25seSBzZXQgb25jZSBldmVuIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBwYXJ0c1xuICogZm9yIGFuIGF0dHJpYnV0ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZUNvbW1pdHRlciB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgbmFtZSwgc3RyaW5ncykge1xuICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICAgICAgdGhpcy5wYXJ0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cmluZ3MubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBhcnRzW2ldID0gdGhpcy5fY3JlYXRlUGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBzaW5nbGUgcGFydC4gT3ZlcnJpZGUgdGhpcyB0byBjcmVhdGUgYSBkaWZmZXJudCB0eXBlIG9mIHBhcnQuXG4gICAgICovXG4gICAgX2NyZWF0ZVBhcnQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQXR0cmlidXRlUGFydCh0aGlzKTtcbiAgICB9XG4gICAgX2dldFZhbHVlKCkge1xuICAgICAgICBjb25zdCBzdHJpbmdzID0gdGhpcy5zdHJpbmdzO1xuICAgICAgICBjb25zdCBsID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgICAgICBsZXQgdGV4dCA9ICcnO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdGV4dCArPSBzdHJpbmdzW2ldO1xuICAgICAgICAgICAgY29uc3QgcGFydCA9IHRoaXMucGFydHNbaV07XG4gICAgICAgICAgICBpZiAocGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdiA9IHBhcnQudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKGlzUHJpbWl0aXZlKHYpIHx8ICFpc0l0ZXJhYmxlKHYpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQgKz0gdHlwZW9mIHYgPT09ICdzdHJpbmcnID8gdiA6IFN0cmluZyh2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdCBvZiB2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IHR5cGVvZiB0ID09PSAnc3RyaW5nJyA/IHQgOiBTdHJpbmcodCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGV4dCArPSBzdHJpbmdzW2xdO1xuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG4gICAgY29tbWl0KCkge1xuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5hbWUsIHRoaXMuX2dldFZhbHVlKCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKiBBIFBhcnQgdGhhdCBjb250cm9scyBhbGwgb3IgcGFydCBvZiBhbiBhdHRyaWJ1dGUgdmFsdWUuXG4gKi9cbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3Rvcihjb21taXR0ZXIpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5jb21taXR0ZXIgPSBjb21taXR0ZXI7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gbm9DaGFuZ2UgJiYgKCFpc1ByaW1pdGl2ZSh2YWx1ZSkgfHwgdmFsdWUgIT09IHRoaXMudmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdmFsdWUgaXMgYSBub3QgYSBkaXJlY3RpdmUsIGRpcnR5IHRoZSBjb21taXR0ZXIgc28gdGhhdCBpdCdsbFxuICAgICAgICAgICAgLy8gY2FsbCBzZXRBdHRyaWJ1dGUuIElmIHRoZSB2YWx1ZSBpcyBhIGRpcmVjdGl2ZSwgaXQnbGwgZGlydHkgdGhlXG4gICAgICAgICAgICAvLyBjb21taXR0ZXIgaWYgaXQgY2FsbHMgc2V0VmFsdWUoKS5cbiAgICAgICAgICAgIGlmICghaXNEaXJlY3RpdmUodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21taXR0ZXIuZGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbW1pdCgpIHtcbiAgICAgICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMudmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmUgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5vQ2hhbmdlO1xuICAgICAgICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tbWl0dGVyLmNvbW1pdCgpO1xuICAgIH1cbn1cbi8qKlxuICogQSBQYXJ0IHRoYXQgY29udHJvbHMgYSBsb2NhdGlvbiB3aXRoaW4gYSBOb2RlIHRyZWUuIExpa2UgYSBSYW5nZSwgTm9kZVBhcnRcbiAqIGhhcyBzdGFydCBhbmQgZW5kIGxvY2F0aW9ucyBhbmQgY2FuIHNldCBhbmQgdXBkYXRlIHRoZSBOb2RlcyBiZXR3ZWVuIHRob3NlXG4gKiBsb2NhdGlvbnMuXG4gKlxuICogTm9kZVBhcnRzIHN1cHBvcnQgc2V2ZXJhbCB2YWx1ZSB0eXBlczogcHJpbWl0aXZlcywgTm9kZXMsIFRlbXBsYXRlUmVzdWx0cyxcbiAqIGFzIHdlbGwgYXMgYXJyYXlzIGFuZCBpdGVyYWJsZXMgb2YgdGhvc2UgdHlwZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBOb2RlUGFydCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIHRoaXMgcGFydCBpbnRvIGEgY29udGFpbmVyLlxuICAgICAqXG4gICAgICogVGhpcyBwYXJ0IG11c3QgYmUgZW1wdHksIGFzIGl0cyBjb250ZW50cyBhcmUgbm90IGF1dG9tYXRpY2FsbHkgbW92ZWQuXG4gICAgICovXG4gICAgYXBwZW5kSW50byhjb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5zdGFydE5vZGUgPSBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWFya2VyKCkpO1xuICAgICAgICB0aGlzLmVuZE5vZGUgPSBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWFya2VyKCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnNlcnRzIHRoaXMgcGFydCBhZnRlciB0aGUgYHJlZmAgbm9kZSAoYmV0d2VlbiBgcmVmYCBhbmQgYHJlZmAncyBuZXh0XG4gICAgICogc2libGluZykuIEJvdGggYHJlZmAgYW5kIGl0cyBuZXh0IHNpYmxpbmcgbXVzdCBiZSBzdGF0aWMsIHVuY2hhbmdpbmcgbm9kZXNcbiAgICAgKiBzdWNoIGFzIHRob3NlIHRoYXQgYXBwZWFyIGluIGEgbGl0ZXJhbCBzZWN0aW9uIG9mIGEgdGVtcGxhdGUuXG4gICAgICpcbiAgICAgKiBUaGlzIHBhcnQgbXVzdCBiZSBlbXB0eSwgYXMgaXRzIGNvbnRlbnRzIGFyZSBub3QgYXV0b21hdGljYWxseSBtb3ZlZC5cbiAgICAgKi9cbiAgICBpbnNlcnRBZnRlck5vZGUocmVmKSB7XG4gICAgICAgIHRoaXMuc3RhcnROb2RlID0gcmVmO1xuICAgICAgICB0aGlzLmVuZE5vZGUgPSByZWYubmV4dFNpYmxpbmc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgdGhpcyBwYXJ0IGludG8gYSBwYXJlbnQgcGFydC5cbiAgICAgKlxuICAgICAqIFRoaXMgcGFydCBtdXN0IGJlIGVtcHR5LCBhcyBpdHMgY29udGVudHMgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IG1vdmVkLlxuICAgICAqL1xuICAgIGFwcGVuZEludG9QYXJ0KHBhcnQpIHtcbiAgICAgICAgcGFydC5fX2luc2VydCh0aGlzLnN0YXJ0Tm9kZSA9IGNyZWF0ZU1hcmtlcigpKTtcbiAgICAgICAgcGFydC5fX2luc2VydCh0aGlzLmVuZE5vZGUgPSBjcmVhdGVNYXJrZXIoKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluc2VydHMgdGhpcyBwYXJ0IGFmdGVyIHRoZSBgcmVmYCBwYXJ0LlxuICAgICAqXG4gICAgICogVGhpcyBwYXJ0IG11c3QgYmUgZW1wdHksIGFzIGl0cyBjb250ZW50cyBhcmUgbm90IGF1dG9tYXRpY2FsbHkgbW92ZWQuXG4gICAgICovXG4gICAgaW5zZXJ0QWZ0ZXJQYXJ0KHJlZikge1xuICAgICAgICByZWYuX19pbnNlcnQodGhpcy5zdGFydE5vZGUgPSBjcmVhdGVNYXJrZXIoKSk7XG4gICAgICAgIHRoaXMuZW5kTm9kZSA9IHJlZi5lbmROb2RlO1xuICAgICAgICByZWYuZW5kTm9kZSA9IHRoaXMuc3RhcnROb2RlO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGNvbW1pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnROb2RlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoaXNEaXJlY3RpdmUodGhpcy5fX3BlbmRpbmdWYWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHRoaXMuX19wZW5kaW5nVmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gICAgICAgICAgICBkaXJlY3RpdmUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9fcGVuZGluZ1ZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUHJpbWl0aXZlKHZhbHVlKSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX2NvbW1pdFRleHQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMuX19jb21taXRUZW1wbGF0ZVJlc3VsdCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9fY29tbWl0Tm9kZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNJdGVyYWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX19jb21taXRJdGVyYWJsZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT09IG5vdGhpbmcpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBub3RoaW5nO1xuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gRmFsbGJhY2ssIHdpbGwgcmVuZGVyIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb25cbiAgICAgICAgICAgIHRoaXMuX19jb21taXRUZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfX2luc2VydChub2RlKSB7XG4gICAgICAgIHRoaXMuZW5kTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCB0aGlzLmVuZE5vZGUpO1xuICAgIH1cbiAgICBfX2NvbW1pdE5vZGUodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLl9faW5zZXJ0KHZhbHVlKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBfX2NvbW1pdFRleHQodmFsdWUpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuc3RhcnROb2RlLm5leHRTaWJsaW5nO1xuICAgICAgICB2YWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xuICAgICAgICAvLyBJZiBgdmFsdWVgIGlzbid0IGFscmVhZHkgYSBzdHJpbmcsIHdlIGV4cGxpY2l0bHkgY29udmVydCBpdCBoZXJlIGluIGNhc2VcbiAgICAgICAgLy8gaXQgY2FuJ3QgYmUgaW1wbGljaXRseSBjb252ZXJ0ZWQgLSBpLmUuIGl0J3MgYSBzeW1ib2wuXG4gICAgICAgIGNvbnN0IHZhbHVlQXNTdHJpbmcgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiBTdHJpbmcodmFsdWUpO1xuICAgICAgICBpZiAobm9kZSA9PT0gdGhpcy5lbmROb2RlLnByZXZpb3VzU2libGluZyAmJlxuICAgICAgICAgICAgbm9kZS5ub2RlVHlwZSA9PT0gMyAvKiBOb2RlLlRFWFRfTk9ERSAqLykge1xuICAgICAgICAgICAgLy8gSWYgd2Ugb25seSBoYXZlIGEgc2luZ2xlIHRleHQgbm9kZSBiZXR3ZWVuIHRoZSBtYXJrZXJzLCB3ZSBjYW4ganVzdFxuICAgICAgICAgICAgLy8gc2V0IGl0cyB2YWx1ZSwgcmF0aGVyIHRoYW4gcmVwbGFjaW5nIGl0LlxuICAgICAgICAgICAgLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogQ2FuIHdlIGp1c3QgY2hlY2sgaWYgdGhpcy52YWx1ZSBpcyBwcmltaXRpdmU/XG4gICAgICAgICAgICBub2RlLmRhdGEgPSB2YWx1ZUFzU3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fX2NvbW1pdE5vZGUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWVBc1N0cmluZykpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgX19jb21taXRUZW1wbGF0ZVJlc3VsdCh2YWx1ZSkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMub3B0aW9ucy50ZW1wbGF0ZUZhY3RvcnkodmFsdWUpO1xuICAgICAgICBpZiAodGhpcy52YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlSW5zdGFuY2UgJiZcbiAgICAgICAgICAgIHRoaXMudmFsdWUudGVtcGxhdGUgPT09IHRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlLnVwZGF0ZSh2YWx1ZS52YWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIHByb3BhZ2F0ZSB0aGUgdGVtcGxhdGUgcHJvY2Vzc29yIGZyb20gdGhlIFRlbXBsYXRlUmVzdWx0XG4gICAgICAgICAgICAvLyBzbyB0aGF0IHdlIHVzZSBpdHMgc3ludGF4IGV4dGVuc2lvbiwgZXRjLiBUaGUgdGVtcGxhdGUgZmFjdG9yeSBjb21lc1xuICAgICAgICAgICAgLy8gZnJvbSB0aGUgcmVuZGVyIGZ1bmN0aW9uIG9wdGlvbnMgc28gdGhhdCBpdCBjYW4gY29udHJvbCB0ZW1wbGF0ZVxuICAgICAgICAgICAgLy8gY2FjaGluZyBhbmQgcHJlcHJvY2Vzc2luZy5cbiAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFRlbXBsYXRlSW5zdGFuY2UodGVtcGxhdGUsIHZhbHVlLnByb2Nlc3NvciwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gaW5zdGFuY2UuX2Nsb25lKCk7XG4gICAgICAgICAgICBpbnN0YW5jZS51cGRhdGUodmFsdWUudmFsdWVzKTtcbiAgICAgICAgICAgIHRoaXMuX19jb21taXROb2RlKGZyYWdtZW50KTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBpbnN0YW5jZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfX2NvbW1pdEl0ZXJhYmxlKHZhbHVlKSB7XG4gICAgICAgIC8vIEZvciBhbiBJdGVyYWJsZSwgd2UgY3JlYXRlIGEgbmV3IEluc3RhbmNlUGFydCBwZXIgaXRlbSwgdGhlbiBzZXQgaXRzXG4gICAgICAgIC8vIHZhbHVlIHRvIHRoZSBpdGVtLiBUaGlzIGlzIGEgbGl0dGxlIGJpdCBvZiBvdmVyaGVhZCBmb3IgZXZlcnkgaXRlbSBpblxuICAgICAgICAvLyBhbiBJdGVyYWJsZSwgYnV0IGl0IGxldHMgdXMgcmVjdXJzZSBlYXNpbHkgYW5kIGVmZmljaWVudGx5IHVwZGF0ZSBBcnJheXNcbiAgICAgICAgLy8gb2YgVGVtcGxhdGVSZXN1bHRzIHRoYXQgd2lsbCBiZSBjb21tb25seSByZXR1cm5lZCBmcm9tIGV4cHJlc3Npb25zIGxpa2U6XG4gICAgICAgIC8vIGFycmF5Lm1hcCgoaSkgPT4gaHRtbGAke2l9YCksIGJ5IHJldXNpbmcgZXhpc3RpbmcgVGVtcGxhdGVJbnN0YW5jZXMuXG4gICAgICAgIC8vIElmIF92YWx1ZSBpcyBhbiBhcnJheSwgdGhlbiB0aGUgcHJldmlvdXMgcmVuZGVyIHdhcyBvZiBhblxuICAgICAgICAvLyBpdGVyYWJsZSBhbmQgX3ZhbHVlIHdpbGwgY29udGFpbiB0aGUgTm9kZVBhcnRzIGZyb20gdGhlIHByZXZpb3VzXG4gICAgICAgIC8vIHJlbmRlci4gSWYgX3ZhbHVlIGlzIG5vdCBhbiBhcnJheSwgY2xlYXIgdGhpcyBwYXJ0IGFuZCBtYWtlIGEgbmV3XG4gICAgICAgIC8vIGFycmF5IGZvciBOb2RlUGFydHMuXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIC8vIExldHMgdXMga2VlcCB0cmFjayBvZiBob3cgbWFueSBpdGVtcyB3ZSBzdGFtcGVkIHNvIHdlIGNhbiBjbGVhciBsZWZ0b3ZlclxuICAgICAgICAvLyBpdGVtcyBmcm9tIGEgcHJldmlvdXMgcmVuZGVyXG4gICAgICAgIGNvbnN0IGl0ZW1QYXJ0cyA9IHRoaXMudmFsdWU7XG4gICAgICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgICAgICBsZXQgaXRlbVBhcnQ7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB2YWx1ZSkge1xuICAgICAgICAgICAgLy8gVHJ5IHRvIHJldXNlIGFuIGV4aXN0aW5nIHBhcnRcbiAgICAgICAgICAgIGl0ZW1QYXJ0ID0gaXRlbVBhcnRzW3BhcnRJbmRleF07XG4gICAgICAgICAgICAvLyBJZiBubyBleGlzdGluZyBwYXJ0LCBjcmVhdGUgYSBuZXcgb25lXG4gICAgICAgICAgICBpZiAoaXRlbVBhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGl0ZW1QYXJ0ID0gbmV3IE5vZGVQYXJ0KHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaXRlbVBhcnRzLnB1c2goaXRlbVBhcnQpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJ0SW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbVBhcnQuYXBwZW5kSW50b1BhcnQodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtUGFydC5pbnNlcnRBZnRlclBhcnQoaXRlbVBhcnRzW3BhcnRJbmRleCAtIDFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVtUGFydC5zZXRWYWx1ZShpdGVtKTtcbiAgICAgICAgICAgIGl0ZW1QYXJ0LmNvbW1pdCgpO1xuICAgICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnRJbmRleCA8IGl0ZW1QYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIFRydW5jYXRlIHRoZSBwYXJ0cyBhcnJheSBzbyBfdmFsdWUgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICAgICAgICAgIGl0ZW1QYXJ0cy5sZW5ndGggPSBwYXJ0SW5kZXg7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKGl0ZW1QYXJ0ICYmIGl0ZW1QYXJ0LmVuZE5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNsZWFyKHN0YXJ0Tm9kZSA9IHRoaXMuc3RhcnROb2RlKSB7XG4gICAgICAgIHJlbW92ZU5vZGVzKHRoaXMuc3RhcnROb2RlLnBhcmVudE5vZGUsIHN0YXJ0Tm9kZS5uZXh0U2libGluZywgdGhpcy5lbmROb2RlKTtcbiAgICB9XG59XG4vKipcbiAqIEltcGxlbWVudHMgYSBib29sZWFuIGF0dHJpYnV0ZSwgcm91Z2hseSBhcyBkZWZpbmVkIGluIHRoZSBIVE1MXG4gKiBzcGVjaWZpY2F0aW9uLlxuICpcbiAqIElmIHRoZSB2YWx1ZSBpcyB0cnV0aHksIHRoZW4gdGhlIGF0dHJpYnV0ZSBpcyBwcmVzZW50IHdpdGggYSB2YWx1ZSBvZlxuICogJycuIElmIHRoZSB2YWx1ZSBpcyBmYWxzZXksIHRoZSBhdHRyaWJ1dGUgaXMgcmVtb3ZlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIEJvb2xlYW5BdHRyaWJ1dGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChzdHJpbmdzLmxlbmd0aCAhPT0gMiB8fCBzdHJpbmdzWzBdICE9PSAnJyB8fCBzdHJpbmdzWzFdICE9PSAnJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCb29sZWFuIGF0dHJpYnV0ZXMgY2FuIG9ubHkgY29udGFpbiBhIHNpbmdsZSBleHByZXNzaW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBjb21taXQoKSB7XG4gICAgICAgIHdoaWxlIChpc0RpcmVjdGl2ZSh0aGlzLl9fcGVuZGluZ1ZhbHVlKSkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aXZlID0gdGhpcy5fX3BlbmRpbmdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSBub0NoYW5nZTtcbiAgICAgICAgICAgIGRpcmVjdGl2ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fX3BlbmRpbmdWYWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZSA9ICEhdGhpcy5fX3BlbmRpbmdWYWx1ZTtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSBub0NoYW5nZTtcbiAgICB9XG59XG4vKipcbiAqIFNldHMgYXR0cmlidXRlIHZhbHVlcyBmb3IgUHJvcGVydHlQYXJ0cywgc28gdGhhdCB0aGUgdmFsdWUgaXMgb25seSBzZXQgb25jZVxuICogZXZlbiBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgcGFydHMgZm9yIGEgcHJvcGVydHkuXG4gKlxuICogSWYgYW4gZXhwcmVzc2lvbiBjb250cm9scyB0aGUgd2hvbGUgcHJvcGVydHkgdmFsdWUsIHRoZW4gdGhlIHZhbHVlIGlzIHNpbXBseVxuICogYXNzaWduZWQgdG8gdGhlIHByb3BlcnR5IHVuZGVyIGNvbnRyb2wuIElmIHRoZXJlIGFyZSBzdHJpbmcgbGl0ZXJhbHMgb3JcbiAqIG11bHRpcGxlIGV4cHJlc3Npb25zLCB0aGVuIHRoZSBzdHJpbmdzIGFyZSBleHByZXNzaW9ucyBhcmUgaW50ZXJwb2xhdGVkIGludG9cbiAqIGEgc3RyaW5nIGZpcnN0LlxuICovXG5leHBvcnQgY2xhc3MgUHJvcGVydHlDb21taXR0ZXIgZXh0ZW5kcyBBdHRyaWJ1dGVDb21taXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MpIHtcbiAgICAgICAgc3VwZXIoZWxlbWVudCwgbmFtZSwgc3RyaW5ncyk7XG4gICAgICAgIHRoaXMuc2luZ2xlID1cbiAgICAgICAgICAgIChzdHJpbmdzLmxlbmd0aCA9PT0gMiAmJiBzdHJpbmdzWzBdID09PSAnJyAmJiBzdHJpbmdzWzFdID09PSAnJyk7XG4gICAgfVxuICAgIF9jcmVhdGVQYXJ0KCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BlcnR5UGFydCh0aGlzKTtcbiAgICB9XG4gICAgX2dldFZhbHVlKCkge1xuICAgICAgICBpZiAodGhpcy5zaW5nbGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnRzWzBdLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdXBlci5fZ2V0VmFsdWUoKTtcbiAgICB9XG4gICAgY29tbWl0KCkge1xuICAgICAgICBpZiAodGhpcy5kaXJ0eSkge1xuICAgICAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFt0aGlzLm5hbWVdID0gdGhpcy5fZ2V0VmFsdWUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eVBhcnQgZXh0ZW5kcyBBdHRyaWJ1dGVQYXJ0IHtcbn1cbi8vIERldGVjdCBldmVudCBsaXN0ZW5lciBvcHRpb25zIHN1cHBvcnQuIElmIHRoZSBgY2FwdHVyZWAgcHJvcGVydHkgaXMgcmVhZFxuLy8gZnJvbSB0aGUgb3B0aW9ucyBvYmplY3QsIHRoZW4gb3B0aW9ucyBhcmUgc3VwcG9ydGVkLiBJZiBub3QsIHRoZW4gdGhlIHRoaXJkXG4vLyBhcmd1bWVudCB0byBhZGQvcmVtb3ZlRXZlbnRMaXN0ZW5lciBpcyBpbnRlcnByZXRlZCBhcyB0aGUgYm9vbGVhbiBjYXB0dXJlXG4vLyB2YWx1ZSBzbyB3ZSBzaG91bGQgb25seSBwYXNzIHRoZSBgY2FwdHVyZWAgcHJvcGVydHkuXG5sZXQgZXZlbnRPcHRpb25zU3VwcG9ydGVkID0gZmFsc2U7XG4vLyBXcmFwIGludG8gYW4gSUlGRSBiZWNhdXNlIE1TIEVkZ2UgPD0gdjQxIGRvZXMgbm90IHN1cHBvcnQgaGF2aW5nIHRyeS9jYXRjaFxuLy8gYmxvY2tzIHJpZ2h0IGludG8gdGhlIGJvZHkgb2YgYSBtb2R1bGVcbigoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGdldCBjYXB0dXJlKCkge1xuICAgICAgICAgICAgICAgIGV2ZW50T3B0aW9uc1N1cHBvcnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBjYXRjaCAoX2UpIHtcbiAgICAgICAgLy8gZXZlbnQgb3B0aW9ucyBub3Qgc3VwcG9ydGVkXG4gICAgfVxufSkoKTtcbmV4cG9ydCBjbGFzcyBFdmVudFBhcnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGV2ZW50TmFtZSwgZXZlbnRDb250ZXh0KSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgICAgICB0aGlzLmV2ZW50Q29udGV4dCA9IGV2ZW50Q29udGV4dDtcbiAgICAgICAgdGhpcy5fX2JvdW5kSGFuZGxlRXZlbnQgPSAoZSkgPT4gdGhpcy5oYW5kbGVFdmVudChlKTtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBjb21taXQoKSB7XG4gICAgICAgIHdoaWxlIChpc0RpcmVjdGl2ZSh0aGlzLl9fcGVuZGluZ1ZhbHVlKSkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aXZlID0gdGhpcy5fX3BlbmRpbmdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSBub0NoYW5nZTtcbiAgICAgICAgICAgIGRpcmVjdGl2ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fX3BlbmRpbmdWYWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdMaXN0ZW5lciA9IHRoaXMuX19wZW5kaW5nVmFsdWU7XG4gICAgICAgIGNvbnN0IG9sZExpc3RlbmVyID0gdGhpcy52YWx1ZTtcbiAgICAgICAgY29uc3Qgc2hvdWxkUmVtb3ZlTGlzdGVuZXIgPSBuZXdMaXN0ZW5lciA9PSBudWxsIHx8XG4gICAgICAgICAgICBvbGRMaXN0ZW5lciAhPSBudWxsICYmXG4gICAgICAgICAgICAgICAgKG5ld0xpc3RlbmVyLmNhcHR1cmUgIT09IG9sZExpc3RlbmVyLmNhcHR1cmUgfHxcbiAgICAgICAgICAgICAgICAgICAgbmV3TGlzdGVuZXIub25jZSAhPT0gb2xkTGlzdGVuZXIub25jZSB8fFxuICAgICAgICAgICAgICAgICAgICBuZXdMaXN0ZW5lci5wYXNzaXZlICE9PSBvbGRMaXN0ZW5lci5wYXNzaXZlKTtcbiAgICAgICAgY29uc3Qgc2hvdWxkQWRkTGlzdGVuZXIgPSBuZXdMaXN0ZW5lciAhPSBudWxsICYmIChvbGRMaXN0ZW5lciA9PSBudWxsIHx8IHNob3VsZFJlbW92ZUxpc3RlbmVyKTtcbiAgICAgICAgaWYgKHNob3VsZFJlbW92ZUxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50TmFtZSwgdGhpcy5fX2JvdW5kSGFuZGxlRXZlbnQsIHRoaXMuX19vcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvdWxkQWRkTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX19vcHRpb25zID0gZ2V0T3B0aW9ucyhuZXdMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50TmFtZSwgdGhpcy5fX2JvdW5kSGFuZGxlRXZlbnQsIHRoaXMuX19vcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhbHVlID0gbmV3TGlzdGVuZXI7XG4gICAgICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSBub0NoYW5nZTtcbiAgICB9XG4gICAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlLmNhbGwodGhpcy5ldmVudENvbnRleHQgfHwgdGhpcy5lbGVtZW50LCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIFdlIGNvcHkgb3B0aW9ucyBiZWNhdXNlIG9mIHRoZSBpbmNvbnNpc3RlbnQgYmVoYXZpb3Igb2YgYnJvd3NlcnMgd2hlbiByZWFkaW5nXG4vLyB0aGUgdGhpcmQgYXJndW1lbnQgb2YgYWRkL3JlbW92ZUV2ZW50TGlzdGVuZXIuIElFMTEgZG9lc24ndCBzdXBwb3J0IG9wdGlvbnNcbi8vIGF0IGFsbC4gQ2hyb21lIDQxIG9ubHkgcmVhZHMgYGNhcHR1cmVgIGlmIHRoZSBhcmd1bWVudCBpcyBhbiBvYmplY3QuXG5jb25zdCBnZXRPcHRpb25zID0gKG8pID0+IG8gJiZcbiAgICAoZXZlbnRPcHRpb25zU3VwcG9ydGVkID9cbiAgICAgICAgeyBjYXB0dXJlOiBvLmNhcHR1cmUsIHBhc3NpdmU6IG8ucGFzc2l2ZSwgb25jZTogby5vbmNlIH0gOlxuICAgICAgICBvLmNhcHR1cmUpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFydHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cbmltcG9ydCB7IHJlbW92ZU5vZGVzIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgTm9kZVBhcnQgfSBmcm9tICcuL3BhcnRzLmpzJztcbmltcG9ydCB7IHRlbXBsYXRlRmFjdG9yeSB9IGZyb20gJy4vdGVtcGxhdGUtZmFjdG9yeS5qcyc7XG5leHBvcnQgY29uc3QgcGFydHMgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBSZW5kZXJzIGEgdGVtcGxhdGUgcmVzdWx0IG9yIG90aGVyIHZhbHVlIHRvIGEgY29udGFpbmVyLlxuICpcbiAqIFRvIHVwZGF0ZSBhIGNvbnRhaW5lciB3aXRoIG5ldyB2YWx1ZXMsIHJlZXZhbHVhdGUgdGhlIHRlbXBsYXRlIGxpdGVyYWwgYW5kXG4gKiBjYWxsIGByZW5kZXJgIHdpdGggdGhlIG5ldyByZXN1bHQuXG4gKlxuICogQHBhcmFtIHJlc3VsdCBBbnkgdmFsdWUgcmVuZGVyYWJsZSBieSBOb2RlUGFydCAtIHR5cGljYWxseSBhIFRlbXBsYXRlUmVzdWx0XG4gKiAgICAgY3JlYXRlZCBieSBldmFsdWF0aW5nIGEgdGVtcGxhdGUgdGFnIGxpa2UgYGh0bWxgIG9yIGBzdmdgLlxuICogQHBhcmFtIGNvbnRhaW5lciBBIERPTSBwYXJlbnQgdG8gcmVuZGVyIHRvLiBUaGUgZW50aXJlIGNvbnRlbnRzIGFyZSBlaXRoZXJcbiAqICAgICByZXBsYWNlZCwgb3IgZWZmaWNpZW50bHkgdXBkYXRlZCBpZiB0aGUgc2FtZSByZXN1bHQgdHlwZSB3YXMgcHJldmlvdXNcbiAqICAgICByZW5kZXJlZCB0aGVyZS5cbiAqIEBwYXJhbSBvcHRpb25zIFJlbmRlck9wdGlvbnMgZm9yIHRoZSBlbnRpcmUgcmVuZGVyIHRyZWUgcmVuZGVyZWQgdG8gdGhpc1xuICogICAgIGNvbnRhaW5lci4gUmVuZGVyIG9wdGlvbnMgbXVzdCAqbm90KiBjaGFuZ2UgYmV0d2VlbiByZW5kZXJzIHRvIHRoZSBzYW1lXG4gKiAgICAgY29udGFpbmVyLCBhcyB0aG9zZSBjaGFuZ2VzIHdpbGwgbm90IGVmZmVjdCBwcmV2aW91c2x5IHJlbmRlcmVkIERPTS5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbmRlciA9IChyZXN1bHQsIGNvbnRhaW5lciwgb3B0aW9ucykgPT4ge1xuICAgIGxldCBwYXJ0ID0gcGFydHMuZ2V0KGNvbnRhaW5lcik7XG4gICAgaWYgKHBhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZW1vdmVOb2Rlcyhjb250YWluZXIsIGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgcGFydHMuc2V0KGNvbnRhaW5lciwgcGFydCA9IG5ldyBOb2RlUGFydChPYmplY3QuYXNzaWduKHsgdGVtcGxhdGVGYWN0b3J5IH0sIG9wdGlvbnMpKSk7XG4gICAgICAgIHBhcnQuYXBwZW5kSW50byhjb250YWluZXIpO1xuICAgIH1cbiAgICBwYXJ0LnNldFZhbHVlKHJlc3VsdCk7XG4gICAgcGFydC5jb21taXQoKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZW5kZXIuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuaW1wb3J0IHsgbWFya2VyLCBUZW1wbGF0ZSB9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuLyoqXG4gKiBUaGUgZGVmYXVsdCBUZW1wbGF0ZUZhY3Rvcnkgd2hpY2ggY2FjaGVzIFRlbXBsYXRlcyBrZXllZCBvblxuICogcmVzdWx0LnR5cGUgYW5kIHJlc3VsdC5zdHJpbmdzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGVGYWN0b3J5KHJlc3VsdCkge1xuICAgIGxldCB0ZW1wbGF0ZUNhY2hlID0gdGVtcGxhdGVDYWNoZXMuZ2V0KHJlc3VsdC50eXBlKTtcbiAgICBpZiAodGVtcGxhdGVDYWNoZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRlbXBsYXRlQ2FjaGUgPSB7XG4gICAgICAgICAgICBzdHJpbmdzQXJyYXk6IG5ldyBXZWFrTWFwKCksXG4gICAgICAgICAgICBrZXlTdHJpbmc6IG5ldyBNYXAoKVxuICAgICAgICB9O1xuICAgICAgICB0ZW1wbGF0ZUNhY2hlcy5zZXQocmVzdWx0LnR5cGUsIHRlbXBsYXRlQ2FjaGUpO1xuICAgIH1cbiAgICBsZXQgdGVtcGxhdGUgPSB0ZW1wbGF0ZUNhY2hlLnN0cmluZ3NBcnJheS5nZXQocmVzdWx0LnN0cmluZ3MpO1xuICAgIGlmICh0ZW1wbGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG4gICAgLy8gSWYgdGhlIFRlbXBsYXRlU3RyaW5nc0FycmF5IGlzIG5ldywgZ2VuZXJhdGUgYSBrZXkgZnJvbSB0aGUgc3RyaW5nc1xuICAgIC8vIFRoaXMga2V5IGlzIHNoYXJlZCBiZXR3ZWVuIGFsbCB0ZW1wbGF0ZXMgd2l0aCBpZGVudGljYWwgY29udGVudFxuICAgIGNvbnN0IGtleSA9IHJlc3VsdC5zdHJpbmdzLmpvaW4obWFya2VyKTtcbiAgICAvLyBDaGVjayBpZiB3ZSBhbHJlYWR5IGhhdmUgYSBUZW1wbGF0ZSBmb3IgdGhpcyBrZXlcbiAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlQ2FjaGUua2V5U3RyaW5nLmdldChrZXkpO1xuICAgIGlmICh0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIElmIHdlIGhhdmUgbm90IHNlZW4gdGhpcyBrZXkgYmVmb3JlLCBjcmVhdGUgYSBuZXcgVGVtcGxhdGVcbiAgICAgICAgdGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUocmVzdWx0LCByZXN1bHQuZ2V0VGVtcGxhdGVFbGVtZW50KCkpO1xuICAgICAgICAvLyBDYWNoZSB0aGUgVGVtcGxhdGUgZm9yIHRoaXMga2V5XG4gICAgICAgIHRlbXBsYXRlQ2FjaGUua2V5U3RyaW5nLnNldChrZXksIHRlbXBsYXRlKTtcbiAgICB9XG4gICAgLy8gQ2FjaGUgYWxsIGZ1dHVyZSBxdWVyaWVzIGZvciB0aGlzIFRlbXBsYXRlU3RyaW5nc0FycmF5XG4gICAgdGVtcGxhdGVDYWNoZS5zdHJpbmdzQXJyYXkuc2V0KHJlc3VsdC5zdHJpbmdzLCB0ZW1wbGF0ZSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xufVxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlQ2FjaGVzID0gbmV3IE1hcCgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGVtcGxhdGUtZmFjdG9yeS5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuaW1wb3J0IHsgaXNDRVBvbHlmaWxsIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgaXNUZW1wbGF0ZVBhcnRBY3RpdmUgfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcbi8qKlxuICogQW4gaW5zdGFuY2Ugb2YgYSBgVGVtcGxhdGVgIHRoYXQgY2FuIGJlIGF0dGFjaGVkIHRvIHRoZSBET00gYW5kIHVwZGF0ZWRcbiAqIHdpdGggbmV3IHZhbHVlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlSW5zdGFuY2Uge1xuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlLCBwcm9jZXNzb3IsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5fX3BhcnRzID0gW107XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5wcm9jZXNzb3IgPSBwcm9jZXNzb3I7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuICAgIHVwZGF0ZSh2YWx1ZXMpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHBhcnQgb2YgdGhpcy5fX3BhcnRzKSB7XG4gICAgICAgICAgICBpZiAocGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFydC5zZXRWYWx1ZSh2YWx1ZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgcGFydCBvZiB0aGlzLl9fcGFydHMpIHtcbiAgICAgICAgICAgIGlmIChwYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwYXJ0LmNvbW1pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIF9jbG9uZSgpIHtcbiAgICAgICAgLy8gVGhlcmUgYXJlIGEgbnVtYmVyIG9mIHN0ZXBzIGluIHRoZSBsaWZlY3ljbGUgb2YgYSB0ZW1wbGF0ZSBpbnN0YW5jZSdzXG4gICAgICAgIC8vIERPTSBmcmFnbWVudDpcbiAgICAgICAgLy8gIDEuIENsb25lIC0gY3JlYXRlIHRoZSBpbnN0YW5jZSBmcmFnbWVudFxuICAgICAgICAvLyAgMi4gQWRvcHQgLSBhZG9wdCBpbnRvIHRoZSBtYWluIGRvY3VtZW50XG4gICAgICAgIC8vICAzLiBQcm9jZXNzIC0gZmluZCBwYXJ0IG1hcmtlcnMgYW5kIGNyZWF0ZSBwYXJ0c1xuICAgICAgICAvLyAgNC4gVXBncmFkZSAtIHVwZ3JhZGUgY3VzdG9tIGVsZW1lbnRzXG4gICAgICAgIC8vICA1LiBVcGRhdGUgLSBzZXQgbm9kZSwgYXR0cmlidXRlLCBwcm9wZXJ0eSwgZXRjLiwgdmFsdWVzXG4gICAgICAgIC8vICA2LiBDb25uZWN0IC0gY29ubmVjdCB0byB0aGUgZG9jdW1lbnQuIE9wdGlvbmFsIGFuZCBvdXRzaWRlIG9mIHRoaXNcbiAgICAgICAgLy8gICAgIG1ldGhvZC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gV2UgaGF2ZSBhIGZldyBjb25zdHJhaW50cyBvbiB0aGUgb3JkZXJpbmcgb2YgdGhlc2Ugc3RlcHM6XG4gICAgICAgIC8vICAqIFdlIG5lZWQgdG8gdXBncmFkZSBiZWZvcmUgdXBkYXRpbmcsIHNvIHRoYXQgcHJvcGVydHkgdmFsdWVzIHdpbGwgcGFzc1xuICAgICAgICAvLyAgICB0aHJvdWdoIGFueSBwcm9wZXJ0eSBzZXR0ZXJzLlxuICAgICAgICAvLyAgKiBXZSB3b3VsZCBsaWtlIHRvIHByb2Nlc3MgYmVmb3JlIHVwZ3JhZGluZyBzbyB0aGF0IHdlJ3JlIHN1cmUgdGhhdCB0aGVcbiAgICAgICAgLy8gICAgY2xvbmVkIGZyYWdtZW50IGlzIGluZXJ0IGFuZCBub3QgZGlzdHVyYmVkIGJ5IHNlbGYtbW9kaWZ5aW5nIERPTS5cbiAgICAgICAgLy8gICogV2Ugd2FudCBjdXN0b20gZWxlbWVudHMgdG8gdXBncmFkZSBldmVuIGluIGRpc2Nvbm5lY3RlZCBmcmFnbWVudHMuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEdpdmVuIHRoZXNlIGNvbnN0cmFpbnRzLCB3aXRoIGZ1bGwgY3VzdG9tIGVsZW1lbnRzIHN1cHBvcnQgd2Ugd291bGRcbiAgICAgICAgLy8gcHJlZmVyIHRoZSBvcmRlcjogQ2xvbmUsIFByb2Nlc3MsIEFkb3B0LCBVcGdyYWRlLCBVcGRhdGUsIENvbm5lY3RcbiAgICAgICAgLy9cbiAgICAgICAgLy8gQnV0IFNhZmFyaSBkb2VzIG5vdCBpbXBsZW1lbnQgQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5I3VwZ3JhZGUsIHNvIHdlXG4gICAgICAgIC8vIGNhbiBub3QgaW1wbGVtZW50IHRoYXQgb3JkZXIgYW5kIHN0aWxsIGhhdmUgdXBncmFkZS1iZWZvcmUtdXBkYXRlIGFuZFxuICAgICAgICAvLyB1cGdyYWRlIGRpc2Nvbm5lY3RlZCBmcmFnbWVudHMuIFNvIHdlIGluc3RlYWQgc2FjcmlmaWNlIHRoZVxuICAgICAgICAvLyBwcm9jZXNzLWJlZm9yZS11cGdyYWRlIGNvbnN0cmFpbnQsIHNpbmNlIGluIEN1c3RvbSBFbGVtZW50cyB2MSBlbGVtZW50c1xuICAgICAgICAvLyBtdXN0IG5vdCBtb2RpZnkgdGhlaXIgbGlnaHQgRE9NIGluIHRoZSBjb25zdHJ1Y3Rvci4gV2Ugc3RpbGwgaGF2ZSBpc3N1ZXNcbiAgICAgICAgLy8gd2hlbiBjby1leGlzdGluZyB3aXRoIENFdjAgZWxlbWVudHMgbGlrZSBQb2x5bWVyIDEsIGFuZCB3aXRoIHBvbHlmaWxsc1xuICAgICAgICAvLyB0aGF0IGRvbid0IHN0cmljdGx5IGFkaGVyZSB0byB0aGUgbm8tbW9kaWZpY2F0aW9uIHJ1bGUgYmVjYXVzZSBzaGFkb3dcbiAgICAgICAgLy8gRE9NLCB3aGljaCBtYXkgYmUgY3JlYXRlZCBpbiB0aGUgY29uc3RydWN0b3IsIGlzIGVtdWxhdGVkIGJ5IGJlaW5nIHBsYWNlZFxuICAgICAgICAvLyBpbiB0aGUgbGlnaHQgRE9NLlxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGUgcmVzdWx0aW5nIG9yZGVyIGlzIG9uIG5hdGl2ZSBpczogQ2xvbmUsIEFkb3B0LCBVcGdyYWRlLCBQcm9jZXNzLFxuICAgICAgICAvLyBVcGRhdGUsIENvbm5lY3QuIGRvY3VtZW50LmltcG9ydE5vZGUoKSBwZXJmb3JtcyBDbG9uZSwgQWRvcHQsIGFuZCBVcGdyYWRlXG4gICAgICAgIC8vIGluIG9uZSBzdGVwLlxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGUgQ3VzdG9tIEVsZW1lbnRzIHYxIHBvbHlmaWxsIHN1cHBvcnRzIHVwZ3JhZGUoKSwgc28gdGhlIG9yZGVyIHdoZW5cbiAgICAgICAgLy8gcG9seWZpbGxlZCBpcyB0aGUgbW9yZSBpZGVhbDogQ2xvbmUsIFByb2Nlc3MsIEFkb3B0LCBVcGdyYWRlLCBVcGRhdGUsXG4gICAgICAgIC8vIENvbm5lY3QuXG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gaXNDRVBvbHlmaWxsID9cbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGUuZWxlbWVudC5jb250ZW50LmNsb25lTm9kZSh0cnVlKSA6XG4gICAgICAgICAgICBkb2N1bWVudC5pbXBvcnROb2RlKHRoaXMudGVtcGxhdGUuZWxlbWVudC5jb250ZW50LCB0cnVlKTtcbiAgICAgICAgY29uc3Qgc3RhY2sgPSBbXTtcbiAgICAgICAgY29uc3QgcGFydHMgPSB0aGlzLnRlbXBsYXRlLnBhcnRzO1xuICAgICAgICAvLyBFZGdlIG5lZWRzIGFsbCA0IHBhcmFtZXRlcnMgcHJlc2VudDsgSUUxMSBuZWVkcyAzcmQgcGFyYW1ldGVyIHRvIGJlIG51bGxcbiAgICAgICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihmcmFnbWVudCwgMTMzIC8qIE5vZGVGaWx0ZXIuU0hPV197RUxFTUVOVHxDT01NRU5UfFRFWFR9ICovLCBudWxsLCBmYWxzZSk7XG4gICAgICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgICAgICBsZXQgbm9kZUluZGV4ID0gMDtcbiAgICAgICAgbGV0IHBhcnQ7XG4gICAgICAgIGxldCBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgdGhlIG5vZGVzIGFuZCBwYXJ0cyBvZiBhIHRlbXBsYXRlXG4gICAgICAgIHdoaWxlIChwYXJ0SW5kZXggPCBwYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHBhcnQgPSBwYXJ0c1twYXJ0SW5kZXhdO1xuICAgICAgICAgICAgaWYgKCFpc1RlbXBsYXRlUGFydEFjdGl2ZShwYXJ0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX19wYXJ0cy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBQcm9ncmVzcyB0aGUgdHJlZSB3YWxrZXIgdW50aWwgd2UgZmluZCBvdXIgbmV4dCBwYXJ0J3Mgbm9kZS5cbiAgICAgICAgICAgIC8vIE5vdGUgdGhhdCBtdWx0aXBsZSBwYXJ0cyBtYXkgc2hhcmUgdGhlIHNhbWUgbm9kZSAoYXR0cmlidXRlIHBhcnRzXG4gICAgICAgICAgICAvLyBvbiBhIHNpbmdsZSBlbGVtZW50KSwgc28gdGhpcyBsb29wIG1heSBub3QgcnVuIGF0IGFsbC5cbiAgICAgICAgICAgIHdoaWxlIChub2RlSW5kZXggPCBwYXJ0LmluZGV4KSB7XG4gICAgICAgICAgICAgICAgbm9kZUluZGV4Kys7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09ICdURU1QTEFURScpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gbm9kZS5jb250ZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKSkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UndmUgZXhoYXVzdGVkIHRoZSBjb250ZW50IGluc2lkZSBhIG5lc3RlZCB0ZW1wbGF0ZSBlbGVtZW50LlxuICAgICAgICAgICAgICAgICAgICAvLyBCZWNhdXNlIHdlIHN0aWxsIGhhdmUgcGFydHMgKHRoZSBvdXRlciBmb3ItbG9vcCksIHdlIGtub3c6XG4gICAgICAgICAgICAgICAgICAgIC8vIC0gVGhlcmUgaXMgYSB0ZW1wbGF0ZSBpbiB0aGUgc3RhY2tcbiAgICAgICAgICAgICAgICAgICAgLy8gLSBUaGUgd2Fsa2VyIHdpbGwgZmluZCBhIG5leHROb2RlIG91dHNpZGUgdGhlIHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gV2UndmUgYXJyaXZlZCBhdCBvdXIgcGFydCdzIG5vZGUuXG4gICAgICAgICAgICBpZiAocGFydC50eXBlID09PSAnbm9kZScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJ0ID0gdGhpcy5wcm9jZXNzb3IuaGFuZGxlVGV4dEV4cHJlc3Npb24odGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgICAgICBwYXJ0Lmluc2VydEFmdGVyTm9kZShub2RlLnByZXZpb3VzU2libGluZyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fX3BhcnRzLnB1c2gocGFydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fcGFydHMucHVzaCguLi50aGlzLnByb2Nlc3Nvci5oYW5kbGVBdHRyaWJ1dGVFeHByZXNzaW9ucyhub2RlLCBwYXJ0Lm5hbWUsIHBhcnQuc3RyaW5ncywgdGhpcy5vcHRpb25zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNDRVBvbHlmaWxsKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZG9wdE5vZGUoZnJhZ21lbnQpO1xuICAgICAgICAgICAgY3VzdG9tRWxlbWVudHMudXBncmFkZShmcmFnbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRlbXBsYXRlLWluc3RhbmNlLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5pbXBvcnQgeyByZXBhcmVudE5vZGVzIH0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgYm91bmRBdHRyaWJ1dGVTdWZmaXgsIGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXgsIG1hcmtlciwgbm9kZU1hcmtlciB9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuY29uc3QgY29tbWVudE1hcmtlciA9IGAgJHttYXJrZXJ9IGA7XG4vKipcbiAqIFRoZSByZXR1cm4gdHlwZSBvZiBgaHRtbGAsIHdoaWNoIGhvbGRzIGEgVGVtcGxhdGUgYW5kIHRoZSB2YWx1ZXMgZnJvbVxuICogaW50ZXJwb2xhdGVkIGV4cHJlc3Npb25zLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVSZXN1bHQge1xuICAgIGNvbnN0cnVjdG9yKHN0cmluZ3MsIHZhbHVlcywgdHlwZSwgcHJvY2Vzc29yKSB7XG4gICAgICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnByb2Nlc3NvciA9IHByb2Nlc3NvcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHN0cmluZyBvZiBIVE1MIHVzZWQgdG8gY3JlYXRlIGEgYDx0ZW1wbGF0ZT5gIGVsZW1lbnQuXG4gICAgICovXG4gICAgZ2V0SFRNTCgpIHtcbiAgICAgICAgY29uc3QgbCA9IHRoaXMuc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgICAgICBsZXQgaHRtbCA9ICcnO1xuICAgICAgICBsZXQgaXNDb21tZW50QmluZGluZyA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcyA9IHRoaXMuc3RyaW5nc1tpXTtcbiAgICAgICAgICAgIC8vIEZvciBlYWNoIGJpbmRpbmcgd2Ugd2FudCB0byBkZXRlcm1pbmUgdGhlIGtpbmQgb2YgbWFya2VyIHRvIGluc2VydFxuICAgICAgICAgICAgLy8gaW50byB0aGUgdGVtcGxhdGUgc291cmNlIGJlZm9yZSBpdCdzIHBhcnNlZCBieSB0aGUgYnJvd3NlcidzIEhUTUxcbiAgICAgICAgICAgIC8vIHBhcnNlci4gVGhlIG1hcmtlciB0eXBlIGlzIGJhc2VkIG9uIHdoZXRoZXIgdGhlIGV4cHJlc3Npb24gaXMgaW4gYW5cbiAgICAgICAgICAgIC8vIGF0dHJpYnV0ZSwgdGV4dCwgb3IgY29tbWVudCBwb3NpdGlvbi5cbiAgICAgICAgICAgIC8vICAgKiBGb3Igbm9kZS1wb3NpdGlvbiBiaW5kaW5ncyB3ZSBpbnNlcnQgYSBjb21tZW50IHdpdGggdGhlIG1hcmtlclxuICAgICAgICAgICAgLy8gICAgIHNlbnRpbmVsIGFzIGl0cyB0ZXh0IGNvbnRlbnQsIGxpa2UgPCEtLXt7bGl0LWd1aWR9fS0tPi5cbiAgICAgICAgICAgIC8vICAgKiBGb3IgYXR0cmlidXRlIGJpbmRpbmdzIHdlIGluc2VydCBqdXN0IHRoZSBtYXJrZXIgc2VudGluZWwgZm9yIHRoZVxuICAgICAgICAgICAgLy8gICAgIGZpcnN0IGJpbmRpbmcsIHNvIHRoYXQgd2Ugc3VwcG9ydCB1bnF1b3RlZCBhdHRyaWJ1dGUgYmluZGluZ3MuXG4gICAgICAgICAgICAvLyAgICAgU3Vic2VxdWVudCBiaW5kaW5ncyBjYW4gdXNlIGEgY29tbWVudCBtYXJrZXIgYmVjYXVzZSBtdWx0aS1iaW5kaW5nXG4gICAgICAgICAgICAvLyAgICAgYXR0cmlidXRlcyBtdXN0IGJlIHF1b3RlZC5cbiAgICAgICAgICAgIC8vICAgKiBGb3IgY29tbWVudCBiaW5kaW5ncyB3ZSBpbnNlcnQganVzdCB0aGUgbWFya2VyIHNlbnRpbmVsIHNvIHdlIGRvbid0XG4gICAgICAgICAgICAvLyAgICAgY2xvc2UgdGhlIGNvbW1lbnQuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBjb2RlIHNjYW5zIHRoZSB0ZW1wbGF0ZSBzb3VyY2UsIGJ1dCBpcyAqbm90KiBhbiBIVE1MXG4gICAgICAgICAgICAvLyBwYXJzZXIuIFdlIGRvbid0IG5lZWQgdG8gdHJhY2sgdGhlIHRyZWUgc3RydWN0dXJlIG9mIHRoZSBIVE1MLCBvbmx5XG4gICAgICAgICAgICAvLyB3aGV0aGVyIGEgYmluZGluZyBpcyBpbnNpZGUgYSBjb21tZW50LCBhbmQgaWYgbm90LCBpZiBpdCBhcHBlYXJzIHRvIGJlXG4gICAgICAgICAgICAvLyB0aGUgZmlyc3QgYmluZGluZyBpbiBhbiBhdHRyaWJ1dGUuXG4gICAgICAgICAgICBjb25zdCBjb21tZW50T3BlbiA9IHMubGFzdEluZGV4T2YoJzwhLS0nKTtcbiAgICAgICAgICAgIC8vIFdlJ3JlIGluIGNvbW1lbnQgcG9zaXRpb24gaWYgd2UgaGF2ZSBhIGNvbW1lbnQgb3BlbiB3aXRoIG5vIGZvbGxvd2luZ1xuICAgICAgICAgICAgLy8gY29tbWVudCBjbG9zZS4gQmVjYXVzZSA8LS0gY2FuIGFwcGVhciBpbiBhbiBhdHRyaWJ1dGUgdmFsdWUgdGhlcmUgY2FuXG4gICAgICAgICAgICAvLyBiZSBmYWxzZSBwb3NpdGl2ZXMuXG4gICAgICAgICAgICBpc0NvbW1lbnRCaW5kaW5nID0gKGNvbW1lbnRPcGVuID4gLTEgfHwgaXNDb21tZW50QmluZGluZykgJiZcbiAgICAgICAgICAgICAgICBzLmluZGV4T2YoJy0tPicsIGNvbW1lbnRPcGVuICsgMSkgPT09IC0xO1xuICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHdlIGhhdmUgYW4gYXR0cmlidXRlLWxpa2Ugc2VxdWVuY2UgcHJlY2VkaW5nIHRoZVxuICAgICAgICAgICAgLy8gZXhwcmVzc2lvbi4gVGhpcyBjYW4gbWF0Y2ggXCJuYW1lPXZhbHVlXCIgbGlrZSBzdHJ1Y3R1cmVzIGluIHRleHQsXG4gICAgICAgICAgICAvLyBjb21tZW50cywgYW5kIGF0dHJpYnV0ZSB2YWx1ZXMsIHNvIHRoZXJlIGNhbiBiZSBmYWxzZS1wb3NpdGl2ZXMuXG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVNYXRjaCA9IGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXguZXhlYyhzKTtcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVNYXRjaCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIFdlJ3JlIG9ubHkgaW4gdGhpcyBicmFuY2ggaWYgd2UgZG9uJ3QgaGF2ZSBhIGF0dHJpYnV0ZS1saWtlXG4gICAgICAgICAgICAgICAgLy8gcHJlY2VkaW5nIHNlcXVlbmNlLiBGb3IgY29tbWVudHMsIHRoaXMgZ3VhcmRzIGFnYWluc3QgdW51c3VhbFxuICAgICAgICAgICAgICAgIC8vIGF0dHJpYnV0ZSB2YWx1ZXMgbGlrZSA8ZGl2IGZvbz1cIjwhLS0keydiYXInfVwiPi4gQ2FzZXMgbGlrZVxuICAgICAgICAgICAgICAgIC8vIDwhLS0gZm9vPSR7J2Jhcid9LS0+IGFyZSBoYW5kbGVkIGNvcnJlY3RseSBpbiB0aGUgYXR0cmlidXRlIGJyYW5jaFxuICAgICAgICAgICAgICAgIC8vIGJlbG93LlxuICAgICAgICAgICAgICAgIGh0bWwgKz0gcyArIChpc0NvbW1lbnRCaW5kaW5nID8gY29tbWVudE1hcmtlciA6IG5vZGVNYXJrZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRm9yIGF0dHJpYnV0ZXMgd2UgdXNlIGp1c3QgYSBtYXJrZXIgc2VudGluZWwsIGFuZCBhbHNvIGFwcGVuZCBhXG4gICAgICAgICAgICAgICAgLy8gJGxpdCQgc3VmZml4IHRvIHRoZSBuYW1lIHRvIG9wdC1vdXQgb2YgYXR0cmlidXRlLXNwZWNpZmljIHBhcnNpbmdcbiAgICAgICAgICAgICAgICAvLyB0aGF0IElFIGFuZCBFZGdlIGRvIGZvciBzdHlsZSBhbmQgY2VydGFpbiBTVkcgYXR0cmlidXRlcy5cbiAgICAgICAgICAgICAgICBodG1sICs9IHMuc3Vic3RyKDAsIGF0dHJpYnV0ZU1hdGNoLmluZGV4KSArIGF0dHJpYnV0ZU1hdGNoWzFdICtcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTWF0Y2hbMl0gKyBib3VuZEF0dHJpYnV0ZVN1ZmZpeCArIGF0dHJpYnV0ZU1hdGNoWzNdICtcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGh0bWwgKz0gdGhpcy5zdHJpbmdzW2xdO1xuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gICAgZ2V0VGVtcGxhdGVFbGVtZW50KCkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IHRoaXMuZ2V0SFRNTCgpO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxufVxuLyoqXG4gKiBBIFRlbXBsYXRlUmVzdWx0IGZvciBTVkcgZnJhZ21lbnRzLlxuICpcbiAqIFRoaXMgY2xhc3Mgd3JhcHMgSFRNTCBpbiBhbiBgPHN2Zz5gIHRhZyBpbiBvcmRlciB0byBwYXJzZSBpdHMgY29udGVudHMgaW4gdGhlXG4gKiBTVkcgbmFtZXNwYWNlLCB0aGVuIG1vZGlmaWVzIHRoZSB0ZW1wbGF0ZSB0byByZW1vdmUgdGhlIGA8c3ZnPmAgdGFnIHNvIHRoYXRcbiAqIGNsb25lcyBvbmx5IGNvbnRhaW5lciB0aGUgb3JpZ2luYWwgZnJhZ21lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBTVkdUZW1wbGF0ZVJlc3VsdCBleHRlbmRzIFRlbXBsYXRlUmVzdWx0IHtcbiAgICBnZXRIVE1MKCkge1xuICAgICAgICByZXR1cm4gYDxzdmc+JHtzdXBlci5nZXRIVE1MKCl9PC9zdmc+YDtcbiAgICB9XG4gICAgZ2V0VGVtcGxhdGVFbGVtZW50KCkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHN1cGVyLmdldFRlbXBsYXRlRWxlbWVudCgpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGVtcGxhdGUuY29udGVudDtcbiAgICAgICAgY29uc3Qgc3ZnRWxlbWVudCA9IGNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChzdmdFbGVtZW50KTtcbiAgICAgICAgcmVwYXJlbnROb2Rlcyhjb250ZW50LCBzdmdFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGVtcGxhdGUtcmVzdWx0LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8qKlxuICogQW4gZXhwcmVzc2lvbiBtYXJrZXIgd2l0aCBlbWJlZGRlZCB1bmlxdWUga2V5IHRvIGF2b2lkIGNvbGxpc2lvbiB3aXRoXG4gKiBwb3NzaWJsZSB0ZXh0IGluIHRlbXBsYXRlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hcmtlciA9IGB7e2xpdC0ke1N0cmluZyhNYXRoLnJhbmRvbSgpKS5zbGljZSgyKX19fWA7XG4vKipcbiAqIEFuIGV4cHJlc3Npb24gbWFya2VyIHVzZWQgdGV4dC1wb3NpdGlvbnMsIG11bHRpLWJpbmRpbmcgYXR0cmlidXRlcywgYW5kXG4gKiBhdHRyaWJ1dGVzIHdpdGggbWFya3VwLWxpa2UgdGV4dCB2YWx1ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBub2RlTWFya2VyID0gYDwhLS0ke21hcmtlcn0tLT5gO1xuZXhwb3J0IGNvbnN0IG1hcmtlclJlZ2V4ID0gbmV3IFJlZ0V4cChgJHttYXJrZXJ9fCR7bm9kZU1hcmtlcn1gKTtcbi8qKlxuICogU3VmZml4IGFwcGVuZGVkIHRvIGFsbCBib3VuZCBhdHRyaWJ1dGUgbmFtZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBib3VuZEF0dHJpYnV0ZVN1ZmZpeCA9ICckbGl0JCc7XG4vKipcbiAqIEFuIHVwZGF0YWJsZSBUZW1wbGF0ZSB0aGF0IHRyYWNrcyB0aGUgbG9jYXRpb24gb2YgZHluYW1pYyBwYXJ0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlIHtcbiAgICBjb25zdHJ1Y3RvcihyZXN1bHQsIGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5wYXJ0cyA9IFtdO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICBjb25zdCBub2Rlc1RvUmVtb3ZlID0gW107XG4gICAgICAgIGNvbnN0IHN0YWNrID0gW107XG4gICAgICAgIC8vIEVkZ2UgbmVlZHMgYWxsIDQgcGFyYW1ldGVycyBwcmVzZW50OyBJRTExIG5lZWRzIDNyZCBwYXJhbWV0ZXIgdG8gYmUgbnVsbFxuICAgICAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGVsZW1lbnQuY29udGVudCwgMTMzIC8qIE5vZGVGaWx0ZXIuU0hPV197RUxFTUVOVHxDT01NRU5UfFRFWFR9ICovLCBudWxsLCBmYWxzZSk7XG4gICAgICAgIC8vIEtlZXBzIHRyYWNrIG9mIHRoZSBsYXN0IGluZGV4IGFzc29jaWF0ZWQgd2l0aCBhIHBhcnQuIFdlIHRyeSB0byBkZWxldGVcbiAgICAgICAgLy8gdW5uZWNlc3Nhcnkgbm9kZXMsIGJ1dCB3ZSBuZXZlciB3YW50IHRvIGFzc29jaWF0ZSB0d28gZGlmZmVyZW50IHBhcnRzXG4gICAgICAgIC8vIHRvIHRoZSBzYW1lIGluZGV4LiBUaGV5IG11c3QgaGF2ZSBhIGNvbnN0YW50IG5vZGUgYmV0d2Vlbi5cbiAgICAgICAgbGV0IGxhc3RQYXJ0SW5kZXggPSAwO1xuICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5ncywgdmFsdWVzOiB7IGxlbmd0aCB9IH0gPSByZXN1bHQ7XG4gICAgICAgIHdoaWxlIChwYXJ0SW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAgICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UndmUgZXhoYXVzdGVkIHRoZSBjb250ZW50IGluc2lkZSBhIG5lc3RlZCB0ZW1wbGF0ZSBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIEJlY2F1c2Ugd2Ugc3RpbGwgaGF2ZSBwYXJ0cyAodGhlIG91dGVyIGZvci1sb29wKSwgd2Uga25vdzpcbiAgICAgICAgICAgICAgICAvLyAtIFRoZXJlIGlzIGEgdGVtcGxhdGUgaW4gdGhlIHN0YWNrXG4gICAgICAgICAgICAgICAgLy8gLSBUaGUgd2Fsa2VyIHdpbGwgZmluZCBhIG5leHROb2RlIG91dHNpZGUgdGhlIHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgLyogTm9kZS5FTEVNRU5UX05PREUgKi8pIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5oYXNBdHRyaWJ1dGVzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IG5vZGUuYXR0cmlidXRlcztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBsZW5ndGggfSA9IGF0dHJpYnV0ZXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBlclxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTmFtZWROb2RlTWFwLFxuICAgICAgICAgICAgICAgICAgICAvLyBhdHRyaWJ1dGVzIGFyZSBub3QgZ3VhcmFudGVlZCB0byBiZSByZXR1cm5lZCBpbiBkb2N1bWVudCBvcmRlci5cbiAgICAgICAgICAgICAgICAgICAgLy8gSW4gcGFydGljdWxhciwgRWRnZS9JRSBjYW4gcmV0dXJuIHRoZW0gb3V0IG9mIG9yZGVyLCBzbyB3ZSBjYW5ub3RcbiAgICAgICAgICAgICAgICAgICAgLy8gYXNzdW1lIGEgY29ycmVzcG9uZGVuY2UgYmV0d2VlbiBwYXJ0IGluZGV4IGFuZCBhdHRyaWJ1dGUgaW5kZXguXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbmRzV2l0aChhdHRyaWJ1dGVzW2ldLm5hbWUsIGJvdW5kQXR0cmlidXRlU3VmZml4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGNvdW50LS0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIHRlbXBsYXRlIGxpdGVyYWwgc2VjdGlvbiBsZWFkaW5nIHVwIHRvIHRoZSBmaXJzdFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXhwcmVzc2lvbiBpbiB0aGlzIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RyaW5nRm9yUGFydCA9IHN0cmluZ3NbcGFydEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpbmQgdGhlIGF0dHJpYnV0ZSBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gbGFzdEF0dHJpYnV0ZU5hbWVSZWdleC5leGVjKHN0cmluZ0ZvclBhcnQpWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgY29ycmVzcG9uZGluZyBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFsbCBib3VuZCBhdHRyaWJ1dGVzIGhhdmUgaGFkIGEgc3VmZml4IGFkZGVkIGluXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUZW1wbGF0ZVJlc3VsdCNnZXRIVE1MIHRvIG9wdCBvdXQgb2Ygc3BlY2lhbCBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsaW5nLiBUbyBsb29rIHVwIHRoZSBhdHRyaWJ1dGUgdmFsdWUgd2UgYWxzbyBuZWVkIHRvIGFkZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHN1ZmZpeC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZUxvb2t1cE5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCkgKyBib3VuZEF0dHJpYnV0ZVN1ZmZpeDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gbm9kZS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTG9va3VwTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVMb29rdXBOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRpY3MgPSBhdHRyaWJ1dGVWYWx1ZS5zcGxpdChtYXJrZXJSZWdleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnRzLnB1c2goeyB0eXBlOiAnYXR0cmlidXRlJywgaW5kZXgsIG5hbWUsIHN0cmluZ3M6IHN0YXRpY3MgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0SW5kZXggKz0gc3RhdGljcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChub2RlLnRhZ05hbWUgPT09ICdURU1QTEFURScpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gbm9kZS5jb250ZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMgLyogTm9kZS5URVhUX05PREUgKi8pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gbm9kZS5kYXRhO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmluZGV4T2YobWFya2VyKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RyaW5ncyA9IGRhdGEuc3BsaXQobWFya2VyUmVnZXgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IHRleHQgbm9kZSBmb3IgZWFjaCBsaXRlcmFsIHNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlc2Ugbm9kZXMgYXJlIGFsc28gdXNlZCBhcyB0aGUgbWFya2VycyBmb3Igbm9kZSBwYXJ0c1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhc3RJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5zZXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHMgPSBzdHJpbmdzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0ID0gY3JlYXRlTWFya2VyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXguZXhlYyhzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2ggIT09IG51bGwgJiYgZW5kc1dpdGgobWF0Y2hbMl0sIGJvdW5kQXR0cmlidXRlU3VmZml4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzID0gcy5zbGljZSgwLCBtYXRjaC5pbmRleCkgKyBtYXRjaFsxXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFsyXS5zbGljZSgwLCAtYm91bmRBdHRyaWJ1dGVTdWZmaXgubGVuZ3RoKSArIG1hdGNoWzNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoaW5zZXJ0LCBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7IHR5cGU6ICdub2RlJywgaW5kZXg6ICsraW5kZXggfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBubyB0ZXh0LCB3ZSBtdXN0IGluc2VydCBhIGNvbW1lbnQgdG8gbWFyayBvdXIgcGxhY2UuXG4gICAgICAgICAgICAgICAgICAgIC8vIEVsc2UsIHdlIGNhbiB0cnVzdCBpdCB3aWxsIHN0aWNrIGFyb3VuZCBhZnRlciBjbG9uaW5nLlxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyaW5nc1tsYXN0SW5kZXhdID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShjcmVhdGVNYXJrZXIoKSwgbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2Rlc1RvUmVtb3ZlLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmRhdGEgPSBzdHJpbmdzW2xhc3RJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHBhcnQgZm9yIGVhY2ggbWF0Y2ggZm91bmRcbiAgICAgICAgICAgICAgICAgICAgcGFydEluZGV4ICs9IGxhc3RJbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSA4IC8qIE5vZGUuQ09NTUVOVF9OT0RFICovKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuZGF0YSA9PT0gbWFya2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGEgbmV3IG1hcmtlciBub2RlIHRvIGJlIHRoZSBzdGFydE5vZGUgb2YgdGhlIFBhcnQgaWYgYW55IG9mXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBmb2xsb3dpbmcgYXJlIHRydWU6XG4gICAgICAgICAgICAgICAgICAgIC8vICAqIFdlIGRvbid0IGhhdmUgYSBwcmV2aW91c1NpYmxpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gICogVGhlIHByZXZpb3VzU2libGluZyBpcyBhbHJlYWR5IHRoZSBzdGFydCBvZiBhIHByZXZpb3VzIHBhcnRcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUucHJldmlvdXNTaWJsaW5nID09PSBudWxsIHx8IGluZGV4ID09PSBsYXN0UGFydEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShjcmVhdGVNYXJrZXIoKSwgbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGFzdFBhcnRJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnRzLnB1c2goeyB0eXBlOiAnbm9kZScsIGluZGV4IH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgbmV4dFNpYmxpbmcsIGtlZXAgdGhpcyBub2RlIHNvIHdlIGhhdmUgYW4gZW5kLlxuICAgICAgICAgICAgICAgICAgICAvLyBFbHNlLCB3ZSBjYW4gcmVtb3ZlIGl0IHRvIHNhdmUgZnV0dXJlIGNvc3RzLlxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5uZXh0U2libGluZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5kYXRhID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2Rlc1RvUmVtb3ZlLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChpID0gbm9kZS5kYXRhLmluZGV4T2YobWFya2VyLCBpICsgMSkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29tbWVudCBub2RlIGhhcyBhIGJpbmRpbmcgbWFya2VyIGluc2lkZSwgbWFrZSBhbiBpbmFjdGl2ZSBwYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgYmluZGluZyB3b24ndCB3b3JrLCBidXQgc3Vic2VxdWVudCBiaW5kaW5ncyB3aWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIChqdXN0aW5mYWduYW5pKTogY29uc2lkZXIgd2hldGhlciBpdCdzIGV2ZW4gd29ydGggaXQgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1ha2UgYmluZGluZ3MgaW4gY29tbWVudHMgd29ya1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKHsgdHlwZTogJ25vZGUnLCBpbmRleDogLTEgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBSZW1vdmUgdGV4dCBiaW5kaW5nIG5vZGVzIGFmdGVyIHRoZSB3YWxrIHRvIG5vdCBkaXN0dXJiIHRoZSBUcmVlV2Fsa2VyXG4gICAgICAgIGZvciAoY29uc3QgbiBvZiBub2Rlc1RvUmVtb3ZlKSB7XG4gICAgICAgICAgICBuLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobik7XG4gICAgICAgIH1cbiAgICB9XG59XG5jb25zdCBlbmRzV2l0aCA9IChzdHIsIHN1ZmZpeCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gc3RyLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGg7XG4gICAgcmV0dXJuIGluZGV4ID49IDAgJiYgc3RyLnNsaWNlKGluZGV4KSA9PT0gc3VmZml4O1xufTtcbmV4cG9ydCBjb25zdCBpc1RlbXBsYXRlUGFydEFjdGl2ZSA9IChwYXJ0KSA9PiBwYXJ0LmluZGV4ICE9PSAtMTtcbi8vIEFsbG93cyBgZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJylgIHRvIGJlIHJlbmFtZWQgZm9yIGFcbi8vIHNtYWxsIG1hbnVhbCBzaXplLXNhdmluZ3MuXG5leHBvcnQgY29uc3QgY3JlYXRlTWFya2VyID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJyk7XG4vKipcbiAqIFRoaXMgcmVnZXggZXh0cmFjdHMgdGhlIGF0dHJpYnV0ZSBuYW1lIHByZWNlZGluZyBhbiBhdHRyaWJ1dGUtcG9zaXRpb25cbiAqIGV4cHJlc3Npb24uIEl0IGRvZXMgdGhpcyBieSBtYXRjaGluZyB0aGUgc3ludGF4IGFsbG93ZWQgZm9yIGF0dHJpYnV0ZXNcbiAqIGFnYWluc3QgdGhlIHN0cmluZyBsaXRlcmFsIGRpcmVjdGx5IHByZWNlZGluZyB0aGUgZXhwcmVzc2lvbiwgYXNzdW1pbmcgdGhhdFxuICogdGhlIGV4cHJlc3Npb24gaXMgaW4gYW4gYXR0cmlidXRlLXZhbHVlIHBvc2l0aW9uLlxuICpcbiAqIFNlZSBhdHRyaWJ1dGVzIGluIHRoZSBIVE1MIHNwZWM6XG4gKiBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUvc3ludGF4Lmh0bWwjZWxlbWVudHMtYXR0cmlidXRlc1xuICpcbiAqIFwiIFxceDA5XFx4MGFcXHgwY1xceDBkXCIgYXJlIEhUTUwgc3BhY2UgY2hhcmFjdGVyczpcbiAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNS9pbmZyYXN0cnVjdHVyZS5odG1sI3NwYWNlLWNoYXJhY3RlcnNcbiAqXG4gKiBcIlxcMC1cXHgxRlxceDdGLVxceDlGXCIgYXJlIFVuaWNvZGUgY29udHJvbCBjaGFyYWN0ZXJzLCB3aGljaCBpbmNsdWRlcyBldmVyeVxuICogc3BhY2UgY2hhcmFjdGVyIGV4Y2VwdCBcIiBcIi5cbiAqXG4gKiBTbyBhbiBhdHRyaWJ1dGUgaXM6XG4gKiAgKiBUaGUgbmFtZTogYW55IGNoYXJhY3RlciBleGNlcHQgYSBjb250cm9sIGNoYXJhY3Rlciwgc3BhY2UgY2hhcmFjdGVyLCAoJyksXG4gKiAgICAoXCIpLCBcIj5cIiwgXCI9XCIsIG9yIFwiL1wiXG4gKiAgKiBGb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgc3BhY2UgY2hhcmFjdGVyc1xuICogICogRm9sbG93ZWQgYnkgXCI9XCJcbiAqICAqIEZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBzcGFjZSBjaGFyYWN0ZXJzXG4gKiAgKiBGb2xsb3dlZCBieTpcbiAqICAgICogQW55IGNoYXJhY3RlciBleGNlcHQgc3BhY2UsICgnKSwgKFwiKSwgXCI8XCIsIFwiPlwiLCBcIj1cIiwgKGApLCBvclxuICogICAgKiAoXCIpIHRoZW4gYW55IG5vbi0oXCIpLCBvclxuICogICAgKiAoJykgdGhlbiBhbnkgbm9uLSgnKVxuICovXG5leHBvcnQgY29uc3QgbGFzdEF0dHJpYnV0ZU5hbWVSZWdleCA9IFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRyb2wtcmVnZXhcbi8oWyBcXHgwOVxceDBhXFx4MGNcXHgwZF0pKFteXFwwLVxceDFGXFx4N0YtXFx4OUYgXCInPj0vXSspKFsgXFx4MDlcXHgwYVxceDBjXFx4MGRdKj1bIFxceDA5XFx4MGFcXHgwY1xceDBkXSooPzpbXiBcXHgwOVxceDBhXFx4MGNcXHgwZFwiJ2A8Pj1dKnxcIlteXCJdKnwnW14nXSopKSQvO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGVtcGxhdGUuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuLyoqXG4gKlxuICogTWFpbiBsaXQtaHRtbCBtb2R1bGUuXG4gKlxuICogTWFpbiBleHBvcnRzOlxuICpcbiAqIC0gIFtbaHRtbF1dXG4gKiAtICBbW3N2Z11dXG4gKiAtICBbW3JlbmRlcl1dXG4gKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICogQHByZWZlcnJlZFxuICovXG4vKipcbiAqIERvIG5vdCByZW1vdmUgdGhpcyBjb21tZW50OyBpdCBrZWVwcyB0eXBlZG9jIGZyb20gbWlzcGxhY2luZyB0aGUgbW9kdWxlXG4gKiBkb2NzLlxuICovXG5pbXBvcnQgeyBkZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IgfSBmcm9tICcuL2xpYi9kZWZhdWx0LXRlbXBsYXRlLXByb2Nlc3Nvci5qcyc7XG5pbXBvcnQgeyBTVkdUZW1wbGF0ZVJlc3VsdCwgVGVtcGxhdGVSZXN1bHQgfSBmcm9tICcuL2xpYi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuZXhwb3J0IHsgRGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yLCBkZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IgfSBmcm9tICcuL2xpYi9kZWZhdWx0LXRlbXBsYXRlLXByb2Nlc3Nvci5qcyc7XG5leHBvcnQgeyBkaXJlY3RpdmUsIGlzRGlyZWN0aXZlIH0gZnJvbSAnLi9saWIvZGlyZWN0aXZlLmpzJztcbi8vIFRPRE8oanVzdGluZmFnbmFuaSk6IHJlbW92ZSBsaW5lIHdoZW4gd2UgZ2V0IE5vZGVQYXJ0IG1vdmluZyBtZXRob2RzXG5leHBvcnQgeyByZW1vdmVOb2RlcywgcmVwYXJlbnROb2RlcyB9IGZyb20gJy4vbGliL2RvbS5qcyc7XG5leHBvcnQgeyBub0NoYW5nZSwgbm90aGluZyB9IGZyb20gJy4vbGliL3BhcnQuanMnO1xuZXhwb3J0IHsgQXR0cmlidXRlQ29tbWl0dGVyLCBBdHRyaWJ1dGVQYXJ0LCBCb29sZWFuQXR0cmlidXRlUGFydCwgRXZlbnRQYXJ0LCBpc0l0ZXJhYmxlLCBpc1ByaW1pdGl2ZSwgTm9kZVBhcnQsIFByb3BlcnR5Q29tbWl0dGVyLCBQcm9wZXJ0eVBhcnQgfSBmcm9tICcuL2xpYi9wYXJ0cy5qcyc7XG5leHBvcnQgeyBwYXJ0cywgcmVuZGVyIH0gZnJvbSAnLi9saWIvcmVuZGVyLmpzJztcbmV4cG9ydCB7IHRlbXBsYXRlQ2FjaGVzLCB0ZW1wbGF0ZUZhY3RvcnkgfSBmcm9tICcuL2xpYi90ZW1wbGF0ZS1mYWN0b3J5LmpzJztcbmV4cG9ydCB7IFRlbXBsYXRlSW5zdGFuY2UgfSBmcm9tICcuL2xpYi90ZW1wbGF0ZS1pbnN0YW5jZS5qcyc7XG5leHBvcnQgeyBTVkdUZW1wbGF0ZVJlc3VsdCwgVGVtcGxhdGVSZXN1bHQgfSBmcm9tICcuL2xpYi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuZXhwb3J0IHsgY3JlYXRlTWFya2VyLCBpc1RlbXBsYXRlUGFydEFjdGl2ZSwgVGVtcGxhdGUgfSBmcm9tICcuL2xpYi90ZW1wbGF0ZS5qcyc7XG4vLyBJTVBPUlRBTlQ6IGRvIG5vdCBjaGFuZ2UgdGhlIHByb3BlcnR5IG5hbWUgb3IgdGhlIGFzc2lnbm1lbnQgZXhwcmVzc2lvbi5cbi8vIFRoaXMgbGluZSB3aWxsIGJlIHVzZWQgaW4gcmVnZXhlcyB0byBzZWFyY2ggZm9yIGxpdC1odG1sIHVzYWdlLlxuLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogaW5qZWN0IHZlcnNpb24gbnVtYmVyIGF0IGJ1aWxkIHRpbWVcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICh3aW5kb3dbJ2xpdEh0bWxWZXJzaW9ucyddIHx8ICh3aW5kb3dbJ2xpdEh0bWxWZXJzaW9ucyddID0gW10pKS5wdXNoKCcxLjIuMScpO1xufVxuLyoqXG4gKiBJbnRlcnByZXRzIGEgdGVtcGxhdGUgbGl0ZXJhbCBhcyBhbiBIVE1MIHRlbXBsYXRlIHRoYXQgY2FuIGVmZmljaWVudGx5XG4gKiByZW5kZXIgdG8gYW5kIHVwZGF0ZSBhIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IGh0bWwgPSAoc3RyaW5ncywgLi4udmFsdWVzKSA9PiBuZXcgVGVtcGxhdGVSZXN1bHQoc3RyaW5ncywgdmFsdWVzLCAnaHRtbCcsIGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3Nvcik7XG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGFuIFNWRyB0ZW1wbGF0ZSB0aGF0IGNhbiBlZmZpY2llbnRseVxuICogcmVuZGVyIHRvIGFuZCB1cGRhdGUgYSBjb250YWluZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzdmcgPSAoc3RyaW5ncywgLi4udmFsdWVzKSA9PiBuZXcgU1ZHVGVtcGxhdGVSZXN1bHQoc3RyaW5ncywgdmFsdWVzLCAnc3ZnJywgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpdC1odG1sLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9maWdtYS1wbHVnaW4tZHMuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIoZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0Y29uc3QgZGlzY2xvc3VyZVNlbGVjdG9yID0gJ2Rpc2Nsb3N1cmUnO1xuXG5cdC8vUFJJVkFURVxuXHRjb25zdCBkaXNjbG9zdXJlSGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGxldCBkaXNjbG9zdXJlU2V0ID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG5cdFx0bGV0IGRpc2Nsb3N1cmVzSW5TZXQgPSBkaXNjbG9zdXJlU2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG5cdFx0bGV0IGFscmVhZHlBY3RpdmUgPSB0aGlzLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKGRpc2Nsb3N1cmVTZWxlY3RvciArICctLWV4cGFuZGVkJyk7XG5cblx0XHRkaXNjbG9zdXJlc0luU2V0LmZvckVhY2goKGRpc2Nsb3N1cmUpID0+IHtcblx0XHRcdGRpc2Nsb3N1cmUuY2xhc3NMaXN0LnJlbW92ZShkaXNjbG9zdXJlU2VsZWN0b3IgKyAnLS1leHBhbmRlZCcpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoZGlzY2xvc3VyZVNlbGVjdG9yICsgJy0tZXhwYW5kZWQnKTtcblxuXHRcdGlmIChhbHJlYWR5QWN0aXZlKSB7XG5cdFx0XHR0aGlzLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShkaXNjbG9zdXJlU2VsZWN0b3IgKyAnLS1leHBhbmRlZCcpO1xuXHRcdH1cblx0fTtcblxuXHQvL1BVQkxJQ1xuXHR3aW5kb3cuZGlzY2xvc3VyZSA9IHtcblx0XHRpbml0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgZGlzY2xvc3VyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGRpc2Nsb3N1cmVTZWxlY3RvciArICdfX2xhYmVsJyk7XG5cblx0XHRcdGlmIChkaXNjbG9zdXJlcykge1xuXHRcdFx0XHRkaXNjbG9zdXJlcy5mb3JFYWNoKChkaXNjbG9zdXJlKSA9PiB7XG5cdFx0XHRcdFx0ZGlzY2xvc3VyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc2Nsb3N1cmVIYW5kbGVyLCBmYWxzZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgZGlzY2xvc3VyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGRpc2Nsb3N1cmVTZWxlY3RvciArICdfX2xhYmVsJyk7XG5cblx0XHRcdGlmIChkaXNjbG9zdXJlcykge1xuXHRcdFx0XHRkaXNjbG9zdXJlcy5mb3JFYWNoKChkaXNjbG9zdXJlKSA9PiB7XG5cdFx0XHRcdFx0ZGlzY2xvc3VyZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc2Nsb3N1cmVIYW5kbGVyLCBmYWxzZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn0pKCk7XG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRjb25zdCBzZWxlY3RNZW51U2VsZWN0b3IgPSAnc2VsZWN0LW1lbnUnO1xuXG5cdGxldCBlbGVtZW50cywgb3B0aW9uTGlzdCwgaXRlbUhlaWdodCwgc2VsZWN0ZWRJdGVtO1xuXHRsZXQgaW5pdCA9IGZhbHNlO1xuXG5cdC8vUFJJVkFURVxuXG5cdC8vY3JlYXRlIHRoZSBtZW51c1xuXHRjb25zdCBjcmVhdGVNZW51cyA9IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBsb29wIHRocm91Z2ggYWxsIHNlbGVjdCBtZW51cyBvbiBzY3JlZW5cblx0XHRlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtZW51LCBpbmRleCkge1xuXHRcdFx0Ly8gIHNldHVwIG11dGF0aW9uIG9ic2VydmVyXG5cdFx0XHRsZXQgbXV0YXRpb25Db25maWcgPSB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9O1xuXHRcdFx0bGV0IGNhbGxiYWNrID0gZnVuY3Rpb24gKG11dGF0aW9uc0xpc3QsIG9ic2VydmVyKSB7XG5cdFx0XHRcdGZvciAobGV0IG11dGF0aW9uIG9mIG11dGF0aW9uc0xpc3QpIHtcblx0XHRcdFx0XHRpZiAobXV0YXRpb24udHlwZSA9PT0gJ2NoaWxkTGlzdCcpIHtcblx0XHRcdFx0XHRcdHNlbGVjdE1lbnUuaW5pdCgpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnKSB7XG5cdFx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRcdG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICd2YWx1ZScgfHxcblx0XHRcdFx0XHRcdFx0bXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ2Rpc2FibGVkJ1xuXHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdHNlbGVjdE1lbnUuaW5pdCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGxldCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcblx0XHRcdG9ic2VydmVyLm9ic2VydmUobWVudSwgbXV0YXRpb25Db25maWcpO1xuXG5cdFx0XHQvL2tlZXAgdHJhY2sgb2YgbWVudSBoZWlnaHQsIHJlc2V0IHRvIDAgd2hlbiBidWlsZGluZyBuZXcgb25lXG5cdFx0XHRpdGVtSGVpZ2h0ID0gMDtcblxuXHRcdFx0Ly9jcmVhdGUgdGhlIHdyYXBwZXIgZm9yIHRoZSBtZW51XG5cdFx0XHRjcmVhdGVXcmFwcGVyKG1lbnUpO1xuXG5cdFx0XHQvL2ZpbmQgb3V0IGlmIGFuIGl0ZW0gaXMgYWxyZWFkeSBzZWxlY3RlZFxuXHRcdFx0c2VsZWN0ZWRJdGVtID0gbWVudS5zZWxlY3RlZEluZGV4O1xuXG5cdFx0XHQvL2ZpbmQgb3V0IGlmIHRoZXJlIGFyZSBvcHRpb24gZ3JvdXBzIHByZXNlbnRcblx0XHRcdGxldCBvcHRpb25Hcm91cHMgPSBBcnJheS5mcm9tKG1lbnUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ29wdGdyb3VwJykpO1xuXG5cdFx0XHRpZiAob3B0aW9uR3JvdXBzLmxlbmd0aCAhPSAwKSB7XG5cdFx0XHRcdC8vZG8gdGhpcyBpZiBvcHRncm91cHMgcHJlc2VudFxuXG5cdFx0XHRcdC8vZGV0ZXJtaW5lIGlmIHRoZSBvcHRpb24gZ3JvdXBzIGhhdmUgbGFiZWxzXG5cdFx0XHRcdGxldCBoYXNMYWJlbHMgPSBvcHRpb25Hcm91cHNbMF0ubGFiZWwgPyB0cnVlIDogZmFsc2U7XG5cblx0XHRcdFx0Ly9sb29wIHRocm91Z2ggZXZlcnkgb3B0aW9uIGdyb3VwXG5cdFx0XHRcdG9wdGlvbkdyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uIChncm91cCwgaW5kZXgpIHtcblx0XHRcdFx0XHRpZiAoaGFzTGFiZWxzKSB7XG5cdFx0XHRcdFx0XHRpZiAoaW5kZXggIT0gMCkge1xuXHRcdFx0XHRcdFx0XHRsZXQgZGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRcdFx0XHRkaXZpZGVyLmNsYXNzTmFtZSA9IHNlbGVjdE1lbnVTZWxlY3RvciArICdfX2RpdmlkZXInO1xuXHRcdFx0XHRcdFx0XHRvcHRpb25MaXN0LmFwcGVuZENoaWxkKGRpdmlkZXIpO1xuXHRcdFx0XHRcdFx0XHRhZGRJdGVtSGVpZ2h0KGRpdmlkZXIpO1xuXG5cdFx0XHRcdFx0XHRcdC8vcHJldmVudCBjbGlja3Mgb24gb3B0Z3JvdXAgZGl2aWRlcnNcblx0XHRcdFx0XHRcdFx0ZGl2aWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0b3BQcm9wLCBmYWxzZSk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vY3JlYXRlIHRoZSBkaXZpZGVyIGVsZW1lbnQgdy8gYSBsYWJlbFxuXHRcdFx0XHRcdFx0bGV0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0XHRcdGRpdmlkZXIudGV4dENvbnRlbnQgPSBncm91cC5sYWJlbDtcblx0XHRcdFx0XHRcdGRpdmlkZXIuY2xhc3NOYW1lID0gc2VsZWN0TWVudVNlbGVjdG9yICsgJ19fZGl2aWRlci1sYWJlbCc7XG5cblx0XHRcdFx0XHRcdC8vYWRkIHRvIG1lbnVcblx0XHRcdFx0XHRcdG9wdGlvbkxpc3QuYXBwZW5kQ2hpbGQoZGl2aWRlcik7XG5cblx0XHRcdFx0XHRcdC8vY2FsY3VsYXRlIGFuZCBhZGQgaGVpZ2h0IG9mIGRpdmlkZXJcblx0XHRcdFx0XHRcdGFkZEl0ZW1IZWlnaHQoZGl2aWRlcik7XG5cblx0XHRcdFx0XHRcdC8vcHJldmVudCBjbGlja3Mgb24gb3B0Z3JvdXAgZGl2aWRlcnNcblx0XHRcdFx0XHRcdGRpdmlkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdG9wUHJvcCwgZmFsc2UpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChpbmRleCA+IDAgJiYgIWhhc0xhYmVscykge1xuXHRcdFx0XHRcdFx0Ly9jcmVhdGUgdGhlIGRpdmlkZXIgZWxlbWVudFxuXHRcdFx0XHRcdFx0bGV0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0XHRcdGRpdmlkZXIuY2xhc3NOYW1lID0gc2VsZWN0TWVudVNlbGVjdG9yICsgJ19fZGl2aWRlcic7XG5cblx0XHRcdFx0XHRcdC8vYWRkIHRvIG1lbnVcblx0XHRcdFx0XHRcdG9wdGlvbkxpc3QuYXBwZW5kQ2hpbGQoZGl2aWRlcik7XG5cblx0XHRcdFx0XHRcdC8vY2FsY3VsYXRlIGFuZCBhZGQgaGVpZ2h0IG9mIGRpdmlkZXJcblx0XHRcdFx0XHRcdGFkZEl0ZW1IZWlnaHQoZGl2aWRlcik7XG5cblx0XHRcdFx0XHRcdC8vcHJldmVudCBjbGlja3Mgb24gb3B0Z3JvdXAgZGl2aWRlcnNcblx0XHRcdFx0XHRcdGRpdmlkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdG9wUHJvcCwgZmFsc2UpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vZ2V0IGNoaWxkcmVuIG9mIGdyb3VwXG5cdFx0XHRcdFx0bGV0IG9wdGlvbnMgPSBBcnJheS5mcm9tKGdyb3VwLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdvcHRpb24nKSk7XG5cblx0XHRcdFx0XHQvL2xvb3AgdGhyb3VnaCBhbGwgb3B0aW9ucyBhbmQgZ2VuZXJhdGUgYW4gaXRlbVxuXHRcdFx0XHRcdG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRjcmVhdGVNZW51SXRlbShvcHRpb24pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vZG8gdGhpcyBpZiB0aGVyZSBhcmUgbm8gb3B0Z3JvdXBzc1xuXG5cdFx0XHRcdGxldCBvcHRpb25zID0gQXJyYXkuZnJvbShtZW51Lm9wdGlvbnMpO1xuXHRcdFx0XHQvL2xvb3AgdGhyb3VnaCBhbGwgb3B0aW9ucyBhbmQgZ2VuZXJhdGUgYW4gaXRlbVxuXHRcdFx0XHRvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuXHRcdFx0XHRcdGNyZWF0ZU1lbnVJdGVtKG9wdGlvbik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXG5cdC8vY3JlYXRlIHRoZSB3cmFwcGVyIGZvciB0aGUgc2VsZWN0IG1lbnVcblx0Ly9pbmNsdWRlcyBidXR0b24gYW5kIGdlbmVyYXRlcyB0aGUgd3JhcHBlciBVTCBmb3IgdGhlIGxpc3Qgb2YgbWVudSBpdGVtc1xuXHRjb25zdCBjcmVhdGVXcmFwcGVyID0gZnVuY3Rpb24gKG1lbnUpIHtcblx0XHQvL2FkZCB0b3AgbWFyZ2luXG5cdFx0aXRlbUhlaWdodCArPSA2O1xuXG5cdFx0Ly9oaWRlIHRoZSBzZWxlY3QgbWVudVxuXHRcdG1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuXHRcdC8vc2V0IHRoZSBzZWxlY3RlZCBvcHRpb24gdG8gY29ycmVjdCBtZW51IGl0ZW0gaWYgbm90IHNldFxuXG5cdFx0aWYgKG1lbnUuc2VsZWN0ZWRJbmRleCAhPSAtMSkge1xuXHRcdFx0bWVudS5vcHRpb25zW21lbnUuc2VsZWN0ZWRJbmRleF0uc2VsZWN0ZWQgPSB0cnVlO1xuXHRcdH1cblxuXHRcdC8vY3JlYXRlIHRoZSB3cmFwcGVyLCBhbmQgaW5zZXJ0IHRoZSBoaWRkZW4gc2VsZWN0IG1lbnVcblx0XHRsZXQgbWVudVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRtZW51V3JhcHBlci5jbGFzc05hbWUgPSBzZWxlY3RNZW51U2VsZWN0b3I7XG5cdFx0bWVudS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShtZW51V3JhcHBlciwgbWVudSk7XG5cdFx0bWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQobWVudSk7XG5cblx0XHQvL2RldGVybWluZSBpZiBhbiBpY29uIGlzIHNwZWNpZmllZFxuXHRcdGxldCBpY29uTmFtZSA9IG1lbnUuZ2V0QXR0cmlidXRlKCdpY29uJyk7XG5cblx0XHQvL2NyZWF0ZSB0aGUgYnV0dG9uICsgbmVzdGVkIGVsZW1lbnRzXG5cdFx0bGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdGxldCBpY29uO1xuXHRcdGxldCBidXR0b25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRsZXQgYnV0dG9uQ2FyZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0aWYgKGljb25OYW1lKSB7XG5cdFx0XHRpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0aWNvbi5jbGFzc05hbWUgPSAnaWNvbiAnICsgaWNvbk5hbWU7XG5cdFx0fVxuXG5cdFx0Ly9hZGQgY2xhc3Nlc1xuXHRcdGJ1dHRvbi5jbGFzc05hbWUgPSBzZWxlY3RNZW51U2VsZWN0b3IgKyAnX19idXR0b24nO1xuXHRcdGJ1dHRvbkxhYmVsLmNsYXNzTmFtZSA9IHNlbGVjdE1lbnVTZWxlY3RvciArICdfX2xhYmVsJztcblx0XHRidXR0b25DYXJldC5jbGFzc05hbWUgPSBzZWxlY3RNZW51U2VsZWN0b3IgKyAnX19jYXJldCc7XG5cblx0XHQvL2FkZCBjb250ZW50XG5cdFx0aWYgKG1lbnUuc2VsZWN0ZWRJbmRleCAhPSAtMSkge1xuXHRcdFx0YnV0dG9uTGFiZWwudGV4dENvbnRlbnQgPSBtZW51Lm9wdGlvbnNbbWVudS5zZWxlY3RlZEluZGV4XS50ZXh0O1xuXHRcdFx0aWYgKG1lbnUub3B0aW9uc1ttZW51LnNlbGVjdGVkSW5kZXhdLnZhbHVlID09PSAnJykge1xuXHRcdFx0XHRidXR0b25MYWJlbC5jbGFzc0xpc3QuYWRkKHNlbGVjdE1lbnVTZWxlY3RvciArICdfX2xhYmVsLS1wbGFjZWhvbGRlcicpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRidXR0b25MYWJlbC50ZXh0Q29udGVudCA9ICdObyBpdGVtcyB0byBkaXNwbGF5Jztcblx0XHRcdGJ1dHRvbkxhYmVsLmNsYXNzTGlzdC5hZGQoc2VsZWN0TWVudVNlbGVjdG9yICsgJ19fbGFiZWwtLXBsYWNlaG9sZGVyJyk7XG5cdFx0fVxuXG5cdFx0Ly9jcmVhdGUgdGhlIG1lbnUgY29udGFpbmVyXG5cdFx0b3B0aW9uTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cdFx0b3B0aW9uTGlzdC5jbGFzc05hbWUgPSBzZWxlY3RNZW51U2VsZWN0b3IgKyAnX19tZW51JztcblxuXHRcdC8vYWRkIGVsZW1lbnRzIHRvIGRvbVxuXHRcdG1lbnVXcmFwcGVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cdFx0bWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQob3B0aW9uTGlzdCk7XG5cdFx0aWYgKGljb24pIHtcblx0XHRcdGJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKTtcblx0XHR9XG5cdFx0YnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvbkxhYmVsKTtcblx0XHRidXR0b24uYXBwZW5kQ2hpbGQoYnV0dG9uQ2FyZXQpO1xuXG5cdFx0Ly9hZGQgZXZlbnQgbGlzdGVuZXJcblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5TWVudSwgZmFsc2UpO1xuXHR9O1xuXG5cdC8vY3JlYXRlIGEgbGlzdCBpdGVtXG5cdGNvbnN0IGNyZWF0ZU1lbnVJdGVtID0gZnVuY3Rpb24gKG1lbnVJdGVtKSB7XG5cdFx0Lyogb25seSBjcmVhdGUgYW4gaXRlbSBpZiB0aGVyZSBpcyBhIHZhbHVlIHRoaXMgd2lsbCBpZ25vcmUgXG4gICAgICAgIHRoZSBmaXJzdCBtZW51IGl0ZW0gKGlmIGluY2x1ZGVkKSBhcyBhIHBsYWNlaG9sZGVyICovXG5cdFx0aWYgKG1lbnVJdGVtLmhhc0F0dHJpYnV0ZSgndmFsdWUnKSAmJiBtZW51SXRlbS52YWx1ZSAhPSAnJykge1xuXHRcdFx0Ly9jcmVhdGUgbGlzdCBpdGVtIGVsZW1lbnRzXG5cdFx0XHRsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0XHRsZXQgaXRlbUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRsZXQgaXRlbUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG5cdFx0XHQvL3NldCBjbGFzc25hbWVzXG5cdFx0XHRpdGVtLmNsYXNzTmFtZSA9IHNlbGVjdE1lbnVTZWxlY3RvciArICdfX2l0ZW0nO1xuXHRcdFx0aXRlbUljb24uY2xhc3NOYW1lID0gc2VsZWN0TWVudVNlbGVjdG9yICsgJ19faXRlbS1pY29uJztcblx0XHRcdGl0ZW1MYWJlbC5jbGFzc05hbWUgPSBzZWxlY3RNZW51U2VsZWN0b3IgKyAnX19pdGVtLWxhYmVsJztcblxuXHRcdFx0Ly9hZGQgZWxlbWVudHMgdG8gZG9tXG5cdFx0XHRpdGVtLmFwcGVuZENoaWxkKGl0ZW1JY29uKTtcblx0XHRcdGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUxhYmVsKTtcblx0XHRcdG9wdGlvbkxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG5cblx0XHRcdC8vY29uZmlndXJlIGF0dHJpYnV0ZXNcblx0XHRcdGl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJywgbWVudUl0ZW0udmFsdWUpO1xuXHRcdFx0aXRlbUxhYmVsLnRleHRDb250ZW50ID0gbWVudUl0ZW0udGV4dDtcblx0XHRcdGl0ZW0uc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGl0ZW1IZWlnaHQpO1xuXG5cdFx0XHQvKiBhZnRlciB0aGUgaXRlbSBpcyBjcmVhdGVkIHdlIHBhc3MgdGhpcyBlbGVtZW50IHRvIHRoaXMgZnVuY3Rpb25cbiAgICAgICAgICAgIHRoaXMgZnVuY3Rpb24gY2FsY3VsYXRlcyB0aGUgaGVpZ2h0IG9mIHRoZSBpdGVtIGFuZCBpbmNyZWFzZXMgdmFsdWVcbiAgICAgICAgICAgIG9mIHRoZSBpdGVtIGhlaWdodCB2YXIgKi9cblx0XHRcdGFkZEl0ZW1IZWlnaHQoaXRlbSk7XG5cblx0XHRcdC8vaWYgaXRlbSBpcyBzZWxlY3RlZCwgYWRkIGFjdGl2ZSBjbGFzc1xuXHRcdFx0aWYgKG1lbnVJdGVtLmluZGV4ID09PSBzZWxlY3RlZEl0ZW0pIHtcblx0XHRcdFx0aXRlbS5jbGFzc0xpc3QuYWRkKHNlbGVjdE1lbnVTZWxlY3RvciArICdfX2l0ZW0tLXNlbGVjdGVkJyk7XG5cdFx0XHRcdGxldCBtZW51UG9zaXRpb24gPSAtTWF0aC5hYnMocGFyc2VJbnQoaXRlbS5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykpKTtcblx0XHRcdFx0b3B0aW9uTGlzdC5zdHlsZS50b3AgPSBtZW51UG9zaXRpb24gKyAncHgnO1xuXHRcdFx0fVxuXG5cdFx0XHQvL2V2ZW50IGxpc3RlbmVyXG5cdFx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheU1lbnUsIGZhbHNlKTtcblx0XHR9XG5cdH07XG5cblx0Ly9mdW5jdGlvbiB0byBkaXNwbGF5IHRoZSBtZW51IHdoZW4gY2xpY2tlZFxuXHR2YXIgZGlzcGxheU1lbnUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHQvKnRoZSBldmVudCBpcyBhbnkgY2xpY2sgcmVnaXN0ZXJlZCBpbnNpZGUgdGhlIGVsZW1lbnRcbiAgICAgICAgYW5kIHRoZW4gZGV0ZXJtaW5lIGlmIHRoZSBidXR0b24gb3IgbWVudSBpdGVtIGlzIGNsaWNrZWQgKi9cblx0XHRpZiAodGhpcy50YWdOYW1lID09ICdCVVRUT04nKSB7XG5cdFx0XHQvL2dldCB0aGUgbWVudSBlbGVtZW50IHNvIHdlIGNhbiBzZWUgaWYgdGhlcmUgYXJlIG9wdGlvbnMgdG8gZGlzcGxheVxuXHRcdFx0bGV0IHNlbGVjdE1lbnUgPSB0aGlzLnBhcmVudE5vZGUucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG5cblx0XHRcdGlmIChzZWxlY3RNZW51LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Ly9hZGQgYWN0aXZlIGNsYXNzIHRvIGJ1dHRvbiAoaXMgdGhpcyBuZWVkZWQ/KVxuXHRcdFx0XHR0aGlzLmNsYXNzTGlzdC50b2dnbGUoc2VsZWN0TWVudVNlbGVjdG9yICsgJ19fYnV0dG9uLS1hY3RpdmUnKTtcblxuXHRcdFx0XHQvL3RvZ2dsZSB0aGUgbWVudVxuXHRcdFx0XHRsZXQgbWVudSA9IHRoaXMucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdVTCcpO1xuXHRcdFx0XHRtZW51LmNsYXNzTGlzdC50b2dnbGUoc2VsZWN0TWVudVNlbGVjdG9yICsgJ19fbWVudS0tYWN0aXZlJyk7XG5cblx0XHRcdFx0Ly91cGRhdGUgcG9zaXRpb24gb2YgbWVudVxuXHRcdFx0XHRyZXNpemVBbmRQb3NpdGlvbihtZW51KTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5ibHVyKCk7XG5cdFx0fSBlbHNlIGlmICh0aGlzLnRhZ05hbWUgPT09ICdMSScpIHtcblx0XHRcdC8vZGVmaW5lIHRoZSBtZW51XG5cdFx0XHRsZXQgbWVudSA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ1VMJyk7XG5cblx0XHRcdC8vcmVtb3ZlIGFjdGl2ZSBjbGFzc3NlcyBmcm9tIGFsbCBtZW51c1xuXHRcdFx0bGV0IG1lbnVJdGVtcyA9IEFycmF5LmZyb20obWVudS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnTEknKSk7XG5cdFx0XHRtZW51SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoc2VsZWN0TWVudVNlbGVjdG9yICsgJ19faXRlbS0tc2VsZWN0ZWQnKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvL3NlbGVjdCBpdGVtXG5cdFx0XHR0aGlzLmNsYXNzTGlzdC5hZGQoc2VsZWN0TWVudVNlbGVjdG9yICsgJ19faXRlbS0tc2VsZWN0ZWQnKTtcblxuXHRcdFx0Ly91cGRhdGUgdGhlIHZhbHVlIG9mIHRoZSBzZWxlY3QgbWVudVxuXHRcdFx0bGV0IHNlbGVjdCA9IG1lbnUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdTRUxFQ1QnKTtcblx0XHRcdGxldCBzZWxlY3RlZFZhbHVlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKTtcblx0XHRcdGxldCBvcHRpb25zID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpO1xuXG5cdFx0XHQvL3JlbW92ZSBzZWxlY3RlZCBvcHRpb24gZm9yIGFsbCBlbGVtZW50c1xuXHRcdFx0b3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcblx0XHRcdFx0aWYgKG9wdGlvbi52YWx1ZSA9PT0gc2VsZWN0ZWRWYWx1ZSkge1xuXHRcdFx0XHRcdG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0b3B0aW9uLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRzZWxlY3QudmFsdWUgPSBzZWxlY3RlZFZhbHVlO1xuXG5cdFx0XHQvL2Rpc3BhdGNoIGNoYW5nZSBldmVudFxuXHRcdFx0bGV0IGV2ZW50ID0gbmV3IEV2ZW50KCdjaGFuZ2UnKTtcblx0XHRcdHNlbGVjdC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblxuXHRcdFx0Ly91cGRhdGUgdGhlIGJ1dHRvbiBvbiB0aGUgZHJvcGRvd25cblx0XHRcdGxldCBidXR0b24gPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdCVVRUT04nKTtcblx0XHRcdGxldCBidXR0b25MYWJlbCA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcuJyArIHNlbGVjdE1lbnVTZWxlY3RvciArICdfX2xhYmVsJyk7XG5cdFx0XHRidXR0b25MYWJlbC50ZXh0Q29udGVudCA9IHRoaXMudGV4dENvbnRlbnQ7XG5cdFx0XHRidXR0b25MYWJlbC5jbGFzc0xpc3QucmVtb3ZlKHNlbGVjdE1lbnVTZWxlY3RvciArICdfX2xhYmVsLS1wbGFjZWhvbGRlcicpO1xuXG5cdFx0XHRidXR0b24uY2xhc3NMaXN0LnRvZ2dsZShzZWxlY3RNZW51U2VsZWN0b3IgKyAnX19idXR0b24tLWFjdGl2ZScpO1xuXG5cdFx0XHQvL3RvZ2dsZSB0aGUgZHJvcGRvd24gdmlzaWJpbGl0eVxuXHRcdFx0bWVudS5jbGFzc0xpc3QudG9nZ2xlKHNlbGVjdE1lbnVTZWxlY3RvciArICdfX21lbnUtLWFjdGl2ZScpO1xuXG5cdFx0XHQvL3VwZGF0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIGRyb3AgZG93biBhZnRlciBoaWRkZW5cblx0XHRcdGxldCBtZW51UG9zaXRpb24gPSAtTWF0aC5hYnMocGFyc2VJbnQodGhpcy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykpKTtcblx0XHRcdG1lbnUuc3R5bGUudG9wID0gbWVudVBvc2l0aW9uICsgJ3B4JztcblxuXHRcdFx0Ly91cGRhdGUgcG9zaXRpb24gb2YgbWVudVxuXHRcdFx0cmVzaXplQW5kUG9zaXRpb24obWVudSk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIGV2ZW50IGhhbmRsZXJzXG5cblx0Ly9zdG9wIGV2ZW50IHByb3BhZ2F0aW9uXG5cdHZhciBzdG9wUHJvcCA9IGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHR9O1xuXG5cdC8vdHJhY2sgY2xpY2tzIG91dHNpZGUgdGhlIG1lbnVcblx0dmFyIGlzT3V0c2lkZSA9IGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGxldCBzZWxlY3RNZW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdC4nICsgc2VsZWN0TWVudVNlbGVjdG9yKTtcblxuXHRcdHNlbGVjdE1lbnVzLmZvckVhY2goKHNlbGVjdCkgPT4ge1xuXHRcdFx0bGV0IG1lbnVXcmFwcGVyID0gc2VsZWN0LnBhcmVudE5vZGU7XG5cdFx0XHRsZXQgbWVudSA9IG1lbnVXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJ1VMJyk7XG5cdFx0XHRsZXQgYnV0dG9uID0gbWVudVdyYXBwZXIucXVlcnlTZWxlY3RvcignQlVUVE9OJyk7XG5cblx0XHRcdGlmIChtZW51LmNsYXNzTGlzdC5jb250YWlucyhzZWxlY3RNZW51U2VsZWN0b3IgKyAnX19tZW51LS1hY3RpdmUnKSkge1xuXHRcdFx0XHRsZXQgY2xpY2tJbnNpZGUgPSBtZW51V3JhcHBlci5jb250YWlucyhldmVudC50YXJnZXQpO1xuXHRcdFx0XHRpZiAoIWNsaWNrSW5zaWRlKSB7XG5cdFx0XHRcdFx0bWVudS5jbGFzc0xpc3QucmVtb3ZlKHNlbGVjdE1lbnVTZWxlY3RvciArICdfX21lbnUtLWFjdGl2ZScpO1xuXHRcdFx0XHRcdGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHNlbGVjdE1lbnVTZWxlY3RvciArICdfX2J1dHRvbi0tYWN0aXZlJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHQvLyB0aGlzIGZ1bmN0aW9uIGVuc3VyZXMgdGhhdCB0aGUgc2VsZWN0IG1lbnVcblx0Ly8gZml0cyBpbnNpZGUgdGhlIHBsdWdpbiB2aWV3cG9ydFxuXHQvLyBpZiBpdHMgdG9vIGJpZywgaXQgd2lsbCByZXNpemUgaXQgYW5kIGVuYWJsZSBhIHNjcm9sbGJhclxuXHQvLyBpZiBpdHMgb2ZmIHNjcmVlbiBpdCB3aWxsIHNoaWZ0IHRoZSBwb3NpdGlvblxuXHRjb25zdCByZXNpemVBbmRQb3NpdGlvbiA9IGZ1bmN0aW9uIChtZW51KSB7XG5cdFx0Ly9zZXQgdGhlIG1heCBoZWlnaHQgb2YgdGhlIG1lbnUgYmFzZWQgb24gcGx1Z2luL2lmcmFtZSB3aW5kb3dcblx0XHRsZXQgbWF4TWVudUhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDE2O1xuXHRcdGxldCBtZW51SGVpZ2h0ID0gbWVudS5vZmZzZXRIZWlnaHQ7XG5cdFx0bGV0IG1lbnVSZXNpemVkID0gZmFsc2U7XG5cdFx0bGV0IG1lbnVCdXR0b24gPSBtZW51LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignQlVUVE9OJyk7XG5cblx0XHRpZiAobWVudUhlaWdodCA+IG1heE1lbnVIZWlnaHQpIHtcblx0XHRcdG1lbnUuc3R5bGUuaGVpZ2h0ID0gbWF4TWVudUhlaWdodCArICdweCc7XG5cdFx0XHRtZW51UmVzaXplZCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0Ly9sZXRzIGFkanVzdCB0aGUgcG9zaXRpb24gb2YgdGhlIG1lbnUgaWYgaXRzIGN1dCBvZmYgZnJvbSB2aWV3cG9ydFxuXHRcdGxldCBib3VuZGluZyA9IG1lbnUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0bGV0IHBhcmVudEJvdW5kaW5nID0gbWVudUJ1dHRvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRcdGlmIChib3VuZGluZy50b3AgPCAwKSB7XG5cdFx0XHRtZW51LnN0eWxlLnRvcCA9IC1NYXRoLmFicyhwYXJlbnRCb3VuZGluZy50b3AgLSA4KSArICdweCc7XG5cdFx0fVxuXHRcdGlmIChib3VuZGluZy5ib3R0b20gPiAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpKSB7XG5cdFx0XHRsZXQgbWluVG9wID0gLU1hdGguYWJzKHBhcmVudEJvdW5kaW5nLnRvcCAtICh3aW5kb3cuaW5uZXJIZWlnaHQgLSBtZW51SGVpZ2h0IC0gOCkpO1xuXHRcdFx0bGV0IG5ld1RvcCA9IC1NYXRoLmFicyhib3VuZGluZy5ib3R0b20gLSB3aW5kb3cuaW5uZXJIZWlnaHQgKyAxNik7XG5cdFx0XHRpZiAobWVudVJlc2l6ZWQpIHtcblx0XHRcdFx0bWVudS5zdHlsZS50b3AgPSAtTWF0aC5hYnMocGFyZW50Qm91bmRpbmcudG9wIC0gOCkgKyAncHgnO1xuXHRcdFx0fSBlbHNlIGlmIChuZXdUb3AgPiBtaW5Ub3ApIHtcblx0XHRcdFx0bWVudS5zdHlsZS50b3AgPSBtaW5Ub3AgKyAncHgnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bWVudS5zdHlsZS50b3AgPSBuZXdUb3AgKyAncHgnO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHQvL2hlbHBlciBmdW5jdGlvbnNcblxuXHQvL2luY3JlbWVudCBpdGVtSGVpZ2h0XG5cdGZ1bmN0aW9uIGFkZEl0ZW1IZWlnaHQoZWxlbWVudCkge1xuXHRcdC8vZ2V0IGtleSBkaW1lbnNpb25zIHRvIGNhbGN1bGF0ZSBoZWlnaHRcblx0XHRsZXQgZGltZW5zaW9ucyA9IFtcblx0XHRcdHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi10b3AnKSksXG5cdFx0XHRwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tYm90dG9tJykpLFxuXHRcdFx0cGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy10b3AnKSksXG5cdFx0XHRwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLWJvdHRvbScpKSxcblx0XHRcdHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpKVxuXHRcdF07XG5cblx0XHRpdGVtSGVpZ2h0ICs9IGFycmF5U3VtKGRpbWVuc2lvbnMpO1xuXHR9XG5cdC8vaGVscGVyIGZ1bmN0aW9uIHRvIHJldHVybiBzdW0gb2YgYXJyYXlcblx0ZnVuY3Rpb24gYXJyYXlTdW0oZGF0YSkge1xuXHRcdHJldHVybiBkYXRhLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuXHRcdFx0cmV0dXJuIGEgKyBiO1xuXHRcdH0sIDApO1xuXHR9XG5cblx0Ly8gUFVCTElDXG5cdHdpbmRvdy5zZWxlY3RNZW51ID0ge1xuXHRcdGluaXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vZGVzdHJveSBmaXJzdCBpZiBhbHJlYWR5IGluaXRpYWxpemVkXG5cdFx0XHRpZiAoaW5pdCA9PSB0cnVlKSB7XG5cdFx0XHRcdHRoaXMuZGVzdHJveSgpO1xuXHRcdFx0fVxuXG5cdFx0XHQvL2luaXRpYWxpemUgYWxsIG1lbnVzXG5cdFx0XHRlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgc2VsZWN0TWVudVNlbGVjdG9yKTtcblxuXHRcdFx0aWYgKGVsZW1lbnRzKSB7XG5cdFx0XHRcdC8vY3JlYXRlIHRoZSBtZW51KHMpXG5cdFx0XHRcdGNyZWF0ZU1lbnVzKCk7XG5cblx0XHRcdFx0Ly9jbGljayBoYW5kbGVyIGZvciBjbGlja3Mgb3V0c2lkZSBvZiBtZW51XG5cdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaXNPdXRzaWRlLCBmYWxzZSk7XG5cblx0XHRcdFx0Ly9zZXQgaW5pdCB0byB0cnVlIG5vdyB0aGF0IG1lbnUgaGFzIGJlZW4gaW5pdGlhbGl6ZWRcblx0XHRcdFx0aW5pdCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChlbGVtZW50cykge1xuXHRcdFx0XHQvL3JlbW92ZSBhbGwgdGhlIGdlbmVyYXRlZCBET00gZWxlbWVudHNcblx0XHRcdFx0ZWxlbWVudHMuZm9yRWFjaCgobWVudSkgPT4ge1xuXHRcdFx0XHRcdGxldCBwYXJlbnQgPSBtZW51LnBhcmVudE5vZGU7XG5cdFx0XHRcdFx0cGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ0JVVFRPTicpLnJlbW92ZSgpO1xuXHRcdFx0XHRcdHBhcmVudC5xdWVyeVNlbGVjdG9yKCdVTCcpLnJlbW92ZSgpO1xuXHRcdFx0XHRcdHBhcmVudC5vdXRlckhUTUwgPSBwYXJlbnQuaW5uZXJIVE1MO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvL3JlbW92ZSBldmVudCBoYW5kbGVyIG9uIGVhY2ggZWxlbWVudFxuXHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGlzT3V0c2lkZSwgZmFsc2UpO1xuXG5cdFx0XHRcdC8vc2V0IGluaXQgdG8gZmFsc2Ugbm93IHRoYXQgbWVudSBoYXMgYmVlbiBkZXN0cm95ZWRcblx0XHRcdFx0aW5pdCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn0pKCk7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdWkuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvKlxuICAgIFRoaXMgY29kZSB3aWxsIGxpdmUgaW4gdGhlIDxpZnJhbWU+IHdpdGhpbiBGaWdtYS5cbiAgICBJdCBoYXMgYWNjZXNzIHRvIGFsbCB0aGUgYnJvd3NlciBBUElzLlxuKi9cbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgaHRtbCwgcmVuZGVyIH0gZnJvbSAnLi4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpdC1odG1sLmpzJztcbmltcG9ydCAnLi9saWJzL2ZpZ21hLWRzL2ZpZ21hLXBsdWdpbi1kcy5jc3MnO1xuaW1wb3J0ICcuL2xpYnMvZmlnbWEtZHMvZmlnbWEtcGx1Z2luLWRzLmpzJztcbmltcG9ydCAnLi91aS5jc3MnO1xuY29uc3QgcGx1Z2luU2VydmVyID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC8nO1xubGV0IGdsb2JhbFJlc3BvbnNlID0ge307XG4vLyBFeGFtcGxlIGJ1dHRvbnNcbi8vIFRoZXNlIHByb3ZpZGUgZXhhbXBsZSBVUkxzIHRoYXQgdGhlIHVzZXIgY2FuIHVzZSB0byB0cnkgb3V0IHRoZSBwbHVnaW4uXG5sZXQgY3Jhd2xVcmwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXJsIGlucHV0Jyk7XG5sZXQgZXhhbXBsZVRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXhhbXBsZXMgc3BhbicpLmZvckVhY2goKGV4YW1wbGUpID0+IHtcbiAgICBleGFtcGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV4YW1wbGUuZGF0YXNldC51cmwpO1xuICAgICAgICBjcmF3bFVybC52YWx1ZSA9IGV4YW1wbGUuZGF0YXNldC51cmw7XG4gICAgICAgIGNyYXdsVXJsLmZvY3VzKCk7XG4gICAgfSk7XG59KTtcbi8vIFN1Ym1pdCBidXR0b25cbi8vIE9uY2UgdGhpcyBpcyBjbGlja2VkLCB0aGUgcGx1Z2luIHNlbmRzIHRoZSBVUkwgdG8gdGhlIHNlcnZlciBhbmQgd2FpdHMgZm9yXG4vLyBhIHJlc3BvbnNlIGJhY2suXG5sZXQgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVybCBidXR0b24nKTtcbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIGlmIChjcmF3bFVybC52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgcGx1Z2luU2VydmVyICsgY3Jhd2xVcmwudmFsdWUpO1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgICAgcmVxdWVzdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogeyB0eXBlOiAncmVzaXplJywgd2lkdGg6IDQ1MCwgaGVpZ2h0OiA0MDAgfSB9LCAnKicpO1xuICAgICAgICAgICAgZ2xvYmFsUmVzcG9uc2UgPSByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgICAgICAgcmVuZGVyRWxlbWVudHMocmVxdWVzdC5yZXNwb25zZSwge1xuICAgICAgICAgICAgICAgIHNob3dJbWFnZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgIH1cbn0pO1xuLy8gRW5jb2RlIHRoZSBJbWFnZURhdGEgaW50byBVaW50OEFycmF5XG5mdW5jdGlvbiBlbmNvZGUoY2FudmFzLCBjdHgsIGltYWdlRGF0YSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGN0eC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIHlpZWxkIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNhbnZhcy50b0Jsb2IoYmxvYiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShuZXcgVWludDhBcnJheShyZWFkZXIucmVzdWx0KSk7XG4gICAgICAgICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSAoKSA9PiByZWplY3QobmV3IEVycm9yKCdDb3VsZCBub3QgcmVhZCBmcm9tIGJsb2InKSk7XG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLy8gU2VuZCB0aGUgaW1hZ2UgdG8gY29kZS50c1xuZnVuY3Rpb24gc2VuZEltYWdlKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gdGhpcy5uYXR1cmFsV2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLm5hdHVyYWxIZWlnaHQ7XG4gICAgICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcywgMCwgMCk7XG4gICAgICAgIGxldCBpbWFnZURhdGEgPSBjb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLm5hdHVyYWxXaWR0aCwgdGhpcy5uYXR1cmFsSGVpZ2h0KTtcbiAgICAgICAgbGV0IGVuY29kZWRJbWFnZSA9IHlpZWxkIGVuY29kZShjYW52YXMsIGNvbnRleHQsIGltYWdlRGF0YSk7XG4gICAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoeyBwbHVnaW5NZXNzYWdlOiB7IHR5cGU6ICdpbXBvcnQtaW1hZ2UnLCBieXRlczogZW5jb2RlZEltYWdlIH0gfSwgJyonKTtcbiAgICB9KTtcbn1cbi8vIFJlLXJlbmRlciB0aGUgZWxlbWVudHMgYnV0IGRvbid0IHNob3cgdGhlIGltYWdlLlxuZnVuY3Rpb24gbm9JbWFnZSgpIHtcbiAgICByZW5kZXJFbGVtZW50cyhnbG9iYWxSZXNwb25zZSwge1xuICAgICAgICBzaG93SW1hZ2U6IGZhbHNlXG4gICAgfSk7XG59XG4vLyBEZWZpbmUgdGhlIHRlbXBsYXRlcyBmb3IgZGlzcGxheWluZyB0aGUgZGF0YS5cbmNvbnN0IG1haW5UZW1wbGF0ZSA9ICh0ZW1wbGF0ZXMpID0+IGh0bWwgYCR7dGVtcGxhdGVzfWA7XG5jb25zdCB0ZXh0VGVtcGxhdGUgPSAoZGF0YSkgPT4gaHRtbCBgPGRpdiBjbGFzcz0ndGV4dC1kYXRhJz4ke2RhdGF9PC9kaXY+YDtcbmNvbnN0IGltYWdlVGVtcGxhdGUgPSAoZGF0YSkgPT4gaHRtbCBgPGRpdiBjbGFzcz0naW1hZ2UtZGF0YSc+XG4gICAgICAgICAgICA8aW1nIHNyYz0nJHtkYXRhfScgQGNsaWNrPVwiJHtzZW5kSW1hZ2V9XCIgY3Jvc3NvcmlnaW49JycgQGVycm9yPVwiJHtub0ltYWdlfVwiPjwvaW1nPlxuICAgICAgICAgPC9kaXY+YDtcbi8vIERpc3BsYXkgdGhlIGRhdGEgdGhhdCB3ZSBnb3QuXG5mdW5jdGlvbiByZW5kZXJFbGVtZW50cyhyZXNwb25zZSwgb3B0aW9ucykge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0Jyk7XG4gICAgbGV0IGRhdGFUZW1wbGF0ZXMgPSBbXTtcbiAgICBpZiAocmVzcG9uc2Uub2dJbWFnZSAmJiByZXNwb25zZS5vZ0ltYWdlLnVybCAmJiBvcHRpb25zLnNob3dJbWFnZSkge1xuICAgICAgICBkYXRhVGVtcGxhdGVzLnB1c2goaW1hZ2VUZW1wbGF0ZShyZXNwb25zZS5vZ0ltYWdlLnVybCkpO1xuICAgIH1cbiAgICBpZiAocmVzcG9uc2Uub2dTaXRlTmFtZSkge1xuICAgICAgICBkYXRhVGVtcGxhdGVzLnB1c2godGV4dFRlbXBsYXRlKHJlc3BvbnNlLm9nU2l0ZU5hbWUpKTtcbiAgICB9XG4gICAgaWYgKHJlc3BvbnNlLm9nVGl0bGUpIHtcbiAgICAgICAgZGF0YVRlbXBsYXRlcy5wdXNoKHRleHRUZW1wbGF0ZShyZXNwb25zZS5vZ1RpdGxlKSk7XG4gICAgfVxuICAgIGlmIChyZXNwb25zZS50d2l0dGVyU2l0ZSkge1xuICAgICAgICBkYXRhVGVtcGxhdGVzLnB1c2godGV4dFRlbXBsYXRlKHJlc3BvbnNlLnR3aXR0ZXJTaXRlKSk7XG4gICAgfVxuICAgIGlmIChyZXNwb25zZS50d2l0dGVyRGVzY3JpcHRpb24pIHtcbiAgICAgICAgZGF0YVRlbXBsYXRlcy5wdXNoKHRleHRUZW1wbGF0ZShyZXNwb25zZS50d2l0dGVyRGVzY3JpcHRpb24pKTtcbiAgICB9XG4gICAgcmVuZGVyKG1haW5UZW1wbGF0ZShkYXRhVGVtcGxhdGVzKSwgY29udGFpbmVyKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=