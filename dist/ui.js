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
exports.push([module.i, ":root {\n    --input-height: 32px;\n    --border-radius: 5px;\n    --font-size: .9em;\n\n    --color-tags: #999;\n    --border-color-tags: #eee;\n}\n\nbody {\n    padding: 1em;\n}\n\n/* Styles for the URL bar. */\n.url {\n    display: flex;\n}\n\n.url input {\n    margin-right: 1em;\n    height: var(--input-height);\n}\n\n/* Styles for the example websites. */\n.examples {\n    padding: 1em 0;\n}\n\n.examples span {\n    font-size: var(--font-size);\n    padding: .5em;\n    border: 1px solid var(--border-color-tags);\n    border-radius: var(--border-radius);\n    color: var(--color-tags);\n    cursor: pointer;\n}\n\n.examples span:hover {\n    filter: brightness(0.6);\n}\n\n/* Displaying the data from the API. */\n.result {\n    display: flex;\n    flex-direction: column;\n    padding-top: 1em;\n}\n\n.result > * {\n    margin-bottom: .5em;\n}\n\n.result .text-data {\n    font-size: var(--font-size);\n    padding: .5em;\n    border: 1px solid #CCC;\n    border-radius: var(--border-radius);\n    color: #666;\n    cursor: pointer;\n}\n\n.result .image-data img {\n    width: 100%;\n    border-radius: var(--border-radius);\n    cursor: pointer;\n}", ""]);
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




const pluginServer = 'https://figma-open-graph-server.jagtalon.workers.dev/';
let cachedResponse = {};
// Example buttons
// These provide example URLs that the user can use to try out the plugin.
let crawlUrl = document.querySelector('.url input');
let exampleTags = document
    .querySelectorAll('.examples span')
    .forEach((example) => {
    example.addEventListener('click', (event) => {
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
        request.open('GET', `${pluginServer}?url=${crawlUrl.value}`);
        request.responseType = 'json';
        request.onload = () => {
            window.parent.postMessage({
                pluginMessage: {
                    type: 'resize',
                    width: 460,
                    height: 400,
                },
            }, '*');
            cachedResponse = request.response;
            renderElements(request.response, {
                showImage: true,
            });
        };
        request.send();
    }
});
// Encode the ImageData into Uint8Array
function encode(canvas, context, imageData) {
    return __awaiter(this, void 0, void 0, function* () {
        context.putImageData(imageData, 0, 0);
        return yield new Promise((resolve, reject) => {
            canvas.toBlob((blob) => {
                const reader = new FileReader();
                reader.onload = () => resolve(new Uint8Array(reader.result));
                reader.onerror = () => reject(new Error('Could not read from blob'));
                reader.readAsArrayBuffer(blob);
            });
        });
    });
}
// Encode the image then send it to Figma.
function sendImage() {
    return __awaiter(this, void 0, void 0, function* () {
        let canvas = document.createElement('canvas');
        canvas.width = this.naturalWidth;
        canvas.height = this.naturalHeight;
        let context = canvas.getContext('2d');
        context.drawImage(this, 0, 0);
        let imageData = context.getImageData(0, 0, this.naturalWidth, this.naturalHeight);
        let encodedImage = yield encode(canvas, context, imageData);
        window.parent.postMessage({
            pluginMessage: {
                type: 'import-image',
                bytes: encodedImage,
                width: this.naturalWidth,
                height: this.naturalHeight,
            },
        }, '*');
    });
}
// Re-render the elements without showing the images.
function noImage() {
    renderElements(cachedResponse, {
        showImage: false,
    });
}
// Define the templates for displaying the data.
const mainTemplate = (templates) => _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"] `${templates}`;
const textTemplate = (data) => _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"] `<div class="text-data" @click="${copyContent}">${data}</div>`;
const imageTemplate = (data) => _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"] `<div class='image-data'>
            <img src='${data}' @click="${sendImage}" crossorigin='' @error="${noImage}"></img>
         </div>`;
// Display the data that we got.
function renderElements(response, options) {
    return __awaiter(this, void 0, void 0, function* () {
        let container = document.querySelector('.result');
        let dataTemplates = [];
        let result = response.result || {};
        if (result['og:site_name']) {
            dataTemplates.push(textTemplate(result['og:site_name']));
        }
        if (result['og:title']) {
            dataTemplates.push(textTemplate(result['og:title']));
        }
        if (result['twitter:site']) {
            dataTemplates.push(textTemplate(result['twitter:site']));
        }
        if (result['twitter:description']) {
            dataTemplates.push(textTemplate(result['twitter:description']));
        }
        let ogImage = result['og:image'] || result['twitter:image'];
        if (ogImage && options.showImage) {
            try {
                let proxyImageResponse = yield fetch(`${pluginServer}?url=${ogImage}`);
                if (proxyImageResponse.ok) {
                    let proxyImage = yield proxyImageResponse.json();
                    dataTemplates.push(imageTemplate(proxyImage.result));
                }
            }
            catch (err) {
                dataTemplates.push(imageTemplate(ogImage));
                console.error(err);
            }
        }
        Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["render"])(mainTemplate(dataTemplates), container);
    });
}
// Select the text and copy it to the clipboard.
// Snippet is from https://stackoverflow.com/a/6150060
function copyContent() {
    let range = document.createRange();
    range.selectNodeContents(this);
    let sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    document.execCommand('copy');
    // Tell the plugin about it.
    parent.postMessage({ pluginMessage: { type: 'notification', message: 'Copied Text' } }, '*');
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvZmlnbWEtZHMvZmlnbWEtcGx1Z2luLWRzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpYi9kZWZhdWx0LXRlbXBsYXRlLXByb2Nlc3Nvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3BhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpYi9wYXJ0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3RlbXBsYXRlLWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpYi90ZW1wbGF0ZS1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3RlbXBsYXRlLXJlc3VsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGliL3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9saXQtaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvZmlnbWEtZHMvZmlnbWEtcGx1Z2luLWRzLmNzcz8xY2QyIiwid2VicGFjazovLy8uL3NyYy9saWJzL2ZpZ21hLWRzL2ZpZ21hLXBsdWdpbi1kcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkuY3NzP2M3N2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsY0FBYyxRQUFTLHNCQUFzQixvREFBb0Qsc0JBQXNCLHdCQUF3QixxQkFBcUIsbUJBQW1CLHNCQUFzQiwrQ0FBK0MsZ0NBQWdDLDZCQUE2QixnQ0FBZ0MsNkJBQTZCLHFCQUFxQixzQ0FBc0Msc0NBQXNDLDhDQUE4QyxzQkFBc0IsbUJBQW1CLHVCQUF1QixpREFBaUQsb0NBQW9DLHNDQUFzQyxxQ0FBcUMsMkJBQTJCLDJCQUEyQixz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QUNBO0FBQ0EseUNBQXlDLCtCQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHNCQUFzQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsMEJBQTBCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLG9DOzs7Ozs7Ozs7Ozs7QUN0TkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtB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LFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7OztBQ2xCQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTCxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ25kRCxVQUFVLG1CQUFPLENBQUMsbUpBQXdFO0FBQzFGLDBCQUEwQixtQkFBTyxDQUFDLDRHQUFtRDs7QUFFckY7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNxRTtBQUN4QjtBQUNEO0FBQzFCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGFBQWEsT0FBTyxlQUFlO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG9DQUFvQyx1RUFBSSxJQUFJLFVBQVU7QUFDdEQsK0JBQStCLHVFQUFJLG1DQUFtQyxZQUFZLElBQUksS0FBSztBQUMzRixnQ0FBZ0MsdUVBQUk7QUFDcEMsd0JBQXdCLEtBQUssWUFBWSxVQUFVLDJCQUEyQixRQUFRO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGFBQWEsT0FBTyxRQUFRO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRkFBTTtBQUNkLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQiwrQ0FBK0MsRUFBRTtBQUMxRiIsImZpbGUiOiJ1aS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3VpLnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIFZhcnMgKi9cXG46cm9vdCB7XFxuICAvKiBDT0xPUlMgKi9cXG4gIC8qIEFjY2VudCAqL1xcbiAgLS1ibHVlOiAjMThhMGZiO1xcbiAgLS1wdXJwbGU6ICM3YjYxZmY7XFxuICAtLWhvdC1waW5rOiAjZmYwMGZmO1xcbiAgLS1ncmVlbjogIzFiYzQ3ZDtcXG4gIC0tcmVkOiAjZjI0ODIyO1xcbiAgLS15ZWxsb3c6ICNmZmViMDA7XFxuICAvKiBCYXNpYyBmb3JlZ3JvdW5kICovXFxuICAtLWJsYWNrOiAjMDAwMDAwO1xcbiAgLS1ibGFjazg6IHJnYmEoMCwgMCwgMCwgLjgpO1xcbiAgLS1ibGFjazgtb3BhcXVlOiAjMzMzMzMzO1xcbiAgLS1ibGFjazM6IHJnYmEoMCwgMCwgMCwgLjMpO1xcbiAgLS1ibGFjazMtb3BhcXVlOiAjQjNCM0IzO1xcbiAgLS13aGl0ZTogI2ZmZmZmZjtcXG4gIC0td2hpdGU4OiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcXG4gIC0td2hpdGU0OiByZ2JhKDI1NSwgMjU1LCAyNTUsIC40KTtcXG4gIC8qIEJhc2ljIGJhY2tncm91bmQgKi9cXG4gIC0tZ3JleTogI2YwZjBmMDtcXG4gIC0tc2lsdmVyOiAjZTVlNWU1O1xcbiAgLS1odWQ6ICMyMjIyMjI7XFxuICAtLXRvb2xiYXI6ICMyYzJjMmM7XFxuICAvKiBTcGVjaWFsICovXFxuICAtLWJsYWNrMTogcmdiYSgwLCAwLCAwLCAuMSk7XFxuICAtLWJsdWUzOiByZ2JhKDI0LCAxNDUsIDI1MSwgLjMpO1xcbiAgLS1wdXJwbGU0OiByZ2JhKDEyMywgOTcsIDI1NSwgLjQpO1xcbiAgLS1ob3Zlci1maWxsOiByZ2JhKDAsIDAsIDAsIC4wNik7XFxuICAtLXNlbGVjdGlvbi1hOiAjZGFlYmY3O1xcbiAgLS1zZWxlY3Rpb24tYjogI2VkZjVmYTtcXG4gIC0td2hpdGUyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yKTtcXG4gIC8qIFRZUE9HUkFQSFkgKi9cXG4gIC8qIFBvcyA9IHBvc2l0aXZlIGFwcGxpY2F0aW9ucyAoYmxhY2sgb24gd2hpdGUpICovXFxuICAvKiBOZWcgPSBuZWdhdGl2ZSBhcHBsaWNhdGlvbnMgKHdoaXRlIG9uIGJsYWNrKSAqL1xcbiAgLyogRm9udCBzdGFjayAqL1xcbiAgLS1mb250LXN0YWNrOiAnSW50ZXInLCBzYW5zLXNlcmlmO1xcbiAgLyogRm9udCBzaXplcyAqL1xcbiAgLS1mb250LXNpemUteHNtYWxsOiAxMXB4O1xcbiAgLS1mb250LXNpemUtc21hbGw6IDEycHg7XFxuICAtLWZvbnQtc2l6ZS1sYXJnZTogMTNweDtcXG4gIC0tZm9udC1zaXplLXhsYXJnZTogMTRweDtcXG4gIC8qIEZvbnQgd2VpZ2h0cyAqL1xcbiAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcXG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XFxuICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDYwMDtcXG4gIC8qIExpbmVoZWlnaHQgKi9cXG4gIC0tZm9udC1saW5lLWhlaWdodDogMTZweDtcXG4gIC8qIFVzZSBGb3IgeHNtYWxsLCBzbWFsbCBmb250IHNpemVzICovXFxuICAtLWZvbnQtbGluZS1oZWlnaHQtbGFyZ2U6IDI0cHg7XFxuICAvKiBVc2UgRm9yIGxhcmdlLCB4bGFyZ2UgZm9udCBzaXplcyAqL1xcbiAgLyogTGV0dGVyc3BhY2luZyAqL1xcbiAgLS1mb250LWxldHRlci1zcGFjaW5nLXBvcy14c21hbGw6IC4wMDVlbTtcXG4gIC0tZm9udC1sZXR0ZXItc3BhY2luZy1uZWcteHNtYWxsOiAuMDFlbTtcXG4gIC0tZm9udC1sZXR0ZXItc3BhY2luZy1wb3Mtc21hbGw6IDA7XFxuICAtLWZvbnQtbGV0dGVyLXNwYWNpbmctbmVnLXNtYWxsOiAuMDA1ZW07XFxuICAtLWZvbnQtbGV0dGVyLXNwYWNpbmctcG9zLWxhcmdlOiAtLjAwMjVlbTtcXG4gIC0tZm9udC1sZXR0ZXItc3BhY2luZy1uZWctbGFyZ2U6IC4wMDI1ZW07XFxuICAtLWZvbnQtbGV0dGVyLXNwYWNpbmctcG9zLXhsYXJnZTogLS4wMDFlbTtcXG4gIC0tZm9udC1sZXR0ZXItc3BhY2luZy1uZWcteGxhcmdlOiAtLjAwMWVtO1xcbiAgLyogQk9SREVSIFJBRElVUyAqL1xcbiAgLS1ib3JkZXItcmFkaXVzLXNtYWxsOiAycHg7XFxuICAtLWJvcmRlci1yYWRpdXMtbWVkOiA1cHg7XFxuICAtLWJvcmRlci1yYWRpdXMtbGFyZ2U6IDZweDtcXG4gIC8qIFNIQURPV1MgKi9cXG4gIC0tc2hhZG93LWh1ZDogMCA1cHggMTdweCByZ2JhKDAsIDAsIDAsIC4yKSwgMCAycHggN3B4IHJnYmEoMCwgMCwgMCwgLjE1KTtcXG4gIC0tc2hhZG93LWZsb2F0aW5nLXdpbmRvdzogMCAycHggMTRweCByZ2JhKDAsIDAsIDAsIC4xNSk7XFxuICAvKiBTUEFDSU5HICsgU0laSU5HICovXFxuICAtLXNpemUteHh4c21hbGw6IDRweDtcXG4gIC0tc2l6ZS14eHNtYWxsOiA4cHg7XFxuICAtLXNpemUteHNtYWxsOiAxNnB4O1xcbiAgLS1zaXplLXNtYWxsOiAyNHB4O1xcbiAgLS1zaXplLW1lZGl1bTogMzJweDtcXG4gIC0tc2l6ZS1sYXJnZTogNDBweDtcXG4gIC0tc2l6ZS14bGFyZ2U6IDQ4cHg7XFxuICAtLXNpemUteHhsYXJnZTogNjRweDtcXG4gIC0tc2l6ZS14eHhsYXJnZTogODBweDtcXG59XFxuXFxuLyogR2xvYmFsIHN0eWxlcyAqL1xcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiAgRk9OVFMgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIHNyYzogdXJsKFxcXCJodHRwczovL3JzbXMubWUvaW50ZXIvZm9udC1maWxlcy9JbnRlci1SZWd1bGFyLndvZmYyP3Y9My43XFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXFxcImh0dHBzOi8vcnNtcy5tZS9pbnRlci9mb250LWZpbGVzL0ludGVyLVJlZ3VsYXIud29mZj92PTMuN1xcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIHNyYzogdXJsKFxcXCJodHRwczovL3JzbXMubWUvaW50ZXIvZm9udC1maWxlcy9JbnRlci1NZWRpdW0ud29mZjI/dj0zLjdcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcXFwiaHR0cHM6Ly9yc21zLm1lL2ludGVyL2ZvbnQtZmlsZXMvSW50ZXItTWVkaXVtLndvZmYyP3Y9My43XFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdJbnRlcic7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgc3JjOiB1cmwoXFxcImh0dHBzOi8vcnNtcy5tZS9pbnRlci9mb250LWZpbGVzL0ludGVyLVNlbWlCb2xkLndvZmYyP3Y9My43XFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXFxcImh0dHBzOi8vcnNtcy5tZS9pbnRlci9mb250LWZpbGVzL0ludGVyLVNlbWlCb2xkLndvZmYyP3Y9My43XFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcblxcbi8qIFVUSUxJVElFUyAqL1xcbi8qIHBhZGRpbmcgKi9cXG4ucC14eHhzbWFsbCB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXh4eHNtYWxsKTtcXG59XFxuXFxuLnAteHhzbWFsbCB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXh4c21hbGwpO1xcbn1cXG5cXG4ucC14c21hbGwge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS14c21hbGwpO1xcbn1cXG5cXG4ucC1zbWFsbCB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXNtYWxsKTtcXG59XFxuXFxuLnAtbWVkaXVtIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtbWVkaXVtKTtcXG59XFxuXFxuLnAtbGFyZ2Uge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS1sYXJnZSk7XFxufVxcblxcbi5wLXhsYXJnZSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXhsYXJnZSk7XFxufVxcblxcbi5wLXh4bGFyZ2Uge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS14eGxhcmdlKTtcXG59XFxuXFxuLnAtaHVnZSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXh4eGxhcmdlKTtcXG59XFxuXFxuLyogcGFkZGluZyB0b3AgKi9cXG4ucHQteHh4c21hbGwge1xcbiAgcGFkZGluZy10b3A6IHZhcigtLXNpemUteHh4c21hbGwpO1xcbn1cXG5cXG4ucHQteHhzbWFsbCB7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tc2l6ZS14eHNtYWxsKTtcXG59XFxuXFxuLnB0LXhzbWFsbCB7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tc2l6ZS14c21hbGwpO1xcbn1cXG5cXG4ucHQtc21hbGwge1xcbiAgcGFkZGluZy10b3A6IHZhcigtLXNpemUtc21hbGwpO1xcbn1cXG5cXG4ucHQtbWVkaXVtIHtcXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1zaXplLW1lZGl1bSk7XFxufVxcblxcbi5wdC1sYXJnZSB7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tc2l6ZS1sYXJnZSk7XFxufVxcblxcbi5wdC14bGFyZ2Uge1xcbiAgcGFkZGluZy10b3A6IHZhcigtLXNpemUteGxhcmdlKTtcXG59XFxuXFxuLnB0LXh4bGFyZ2Uge1xcbiAgcGFkZGluZy10b3A6IHZhcigtLXNpemUteHhsYXJnZSk7XFxufVxcblxcbi5wdC1odWdlIHtcXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1zaXplLXh4eGxhcmdlKTtcXG59XFxuXFxuLyogcGFkZGluZyByaWdodCAqL1xcbi5wci14eHhzbWFsbCB7XFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zaXplLXh4eHNtYWxsKTtcXG59XFxuXFxuLnByLXh4c21hbGwge1xcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tc2l6ZS14eHNtYWxsKTtcXG59XFxuXFxuLnByLXhzbWFsbCB7XFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zaXplLXhzbWFsbCk7XFxufVxcblxcbi5wci1zbWFsbCB7XFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zaXplLXNtYWxsKTtcXG59XFxuXFxuLnByLW1lZGl1bSB7XFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zaXplLW1lZGl1bSk7XFxufVxcblxcbi5wci1sYXJnZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zaXplLWxhcmdlKTtcXG59XFxuXFxuLnByLXhsYXJnZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zaXplLXhsYXJnZSk7XFxufVxcblxcbi5wci14eGxhcmdlIHtcXG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXNpemUteHhsYXJnZSk7XFxufVxcblxcbi5wci1odWdlIHtcXG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXNpemUteHh4bGFyZ2UpO1xcbn1cXG5cXG4vKiBwYWRkaW5nIGJvdHRvbSAqL1xcbi5wYi14eHhzbWFsbCB7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc2l6ZS14eHhzbWFsbCk7XFxufVxcblxcbi5wYi14eHNtYWxsIHtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zaXplLXh4c21hbGwpO1xcbn1cXG5cXG4ucGIteHNtYWxsIHtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zaXplLXhzbWFsbCk7XFxufVxcblxcbi5wYi1zbWFsbCB7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc2l6ZS1zbWFsbCk7XFxufVxcblxcbi5wYi1tZWRpdW0ge1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXNpemUtbWVkaXVtKTtcXG59XFxuXFxuLnBiLWxhcmdlIHtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zaXplLWxhcmdlKTtcXG59XFxuXFxuLnBiLXhsYXJnZSB7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc2l6ZS14bGFyZ2UpO1xcbn1cXG5cXG4ucGIteHhsYXJnZSB7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc2l6ZS14eGxhcmdlKTtcXG59XFxuXFxuLnBiLWh1Z2Uge1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXNpemUteHh4bGFyZ2UpO1xcbn1cXG5cXG4vKiBwYWRkaW5nIGxlZnQgKi9cXG4ucGwteHh4c21hbGwge1xcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaXplLXh4eHNtYWxsKTtcXG59XFxuXFxuLnBsLXh4c21hbGwge1xcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaXplLXh4c21hbGwpO1xcbn1cXG5cXG4ucGwteHNtYWxsIHtcXG4gIHBhZGRpbmctbGVmdDogdmFyKC0tc2l6ZS14c21hbGwpO1xcbn1cXG5cXG4ucGwtc21hbGwge1xcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaXplLXNtYWxsKTtcXG59XFxuXFxuLnBsLW1lZGl1bSB7XFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNpemUtbWVkaXVtKTtcXG59XFxuXFxuLnBsLWxhcmdlIHtcXG4gIHBhZGRpbmctbGVmdDogdmFyKC0tc2l6ZS1sYXJnZSk7XFxufVxcblxcbi5wbC14bGFyZ2Uge1xcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaXplLXhsYXJnZSk7XFxufVxcblxcbi5wbC14eGxhcmdlIHtcXG4gIHBhZGRpbmctbGVmdDogdmFyKC0tc2l6ZS14eGxhcmdlKTtcXG59XFxuXFxuLnBsLWh1Z2Uge1xcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaXplLXh4eGxhcmdlKTtcXG59XFxuXFxuLyogbWFyZ2luICovXFxuLm0teHh4c21hbGwge1xcbiAgbWFyZ2luOiB2YXIoLS1zaXplLXh4eHNtYWxsKTtcXG59XFxuXFxuLm0teHhzbWFsbCB7XFxuICBtYXJnaW46IHZhcigtLXNpemUteHhzbWFsbCk7XFxufVxcblxcbi5tLXhzbWFsbCB7XFxuICBtYXJnaW46IHZhcigtLXNpemUteHNtYWxsKTtcXG59XFxuXFxuLm0tc21hbGwge1xcbiAgbWFyZ2luOiB2YXIoLS1zaXplLXNtYWxsKTtcXG59XFxuXFxuLm0tbWVkaXVtIHtcXG4gIG1hcmdpbjogdmFyKC0tc2l6ZS1tZWRpdW0pO1xcbn1cXG5cXG4ubS1sYXJnZSB7XFxuICBtYXJnaW46IHZhcigtLXNpemUtbGFyZ2UpO1xcbn1cXG5cXG4ubS14bGFyZ2Uge1xcbiAgbWFyZ2luOiB2YXIoLS1zaXplLXhsYXJnZSk7XFxufVxcblxcbi5tLXh4bGFyZ2Uge1xcbiAgbWFyZ2luOiB2YXIoLS1zaXplLXh4bGFyZ2UpO1xcbn1cXG5cXG4ubS1odWdlIHtcXG4gIG1hcmdpbjogdmFyKC0tc2l6ZS14eHhsYXJnZSk7XFxufVxcblxcbi8qIG1hcmdpbiB0b3AgKi9cXG4ubXQteHh4c21hbGwge1xcbiAgbWFyZ2luLXRvcDogdmFyKC0tc2l6ZS14eHhzbWFsbCk7XFxufVxcblxcbi5tdC14eHNtYWxsIHtcXG4gIG1hcmdpbi10b3A6IHZhcigtLXNpemUteHhzbWFsbCk7XFxufVxcblxcbi5tdC14c21hbGwge1xcbiAgbWFyZ2luLXRvcDogdmFyKC0tc2l6ZS14c21hbGwpO1xcbn1cXG5cXG4ubXQtc21hbGwge1xcbiAgbWFyZ2luLXRvcDogdmFyKC0tc2l6ZS1zbWFsbCk7XFxufVxcblxcbi5tdC1tZWRpdW0ge1xcbiAgbWFyZ2luLXRvcDogdmFyKC0tc2l6ZS1tZWRpdW0pO1xcbn1cXG5cXG4ubXQtbGFyZ2Uge1xcbiAgbWFyZ2luLXRvcDogdmFyKC0tc2l6ZS1sYXJnZSk7XFxufVxcblxcbi5tdC14bGFyZ2Uge1xcbiAgbWFyZ2luLXRvcDogdmFyKC0tc2l6ZS14bGFyZ2UpO1xcbn1cXG5cXG4ubXQteHhsYXJnZSB7XFxuICBtYXJnaW4tdG9wOiB2YXIoLS1zaXplLXh4bGFyZ2UpO1xcbn1cXG5cXG4ubXQtaHVnZSB7XFxuICBtYXJnaW4tdG9wOiB2YXIoLS1zaXplLXh4eGxhcmdlKTtcXG59XFxuXFxuLyogbWFyZ2luIHJpZ2h0ICovXFxuLm1yLXh4eHNtYWxsIHtcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tc2l6ZS14eHhzbWFsbCk7XFxufVxcblxcbi5tci14eHNtYWxsIHtcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tc2l6ZS14eHNtYWxsKTtcXG59XFxuXFxuLm1yLXhzbWFsbCB7XFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNpemUteHNtYWxsKTtcXG59XFxuXFxuLm1yLXNtYWxsIHtcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tc2l6ZS1zbWFsbCk7XFxufVxcblxcbi5tci1tZWRpdW0ge1xcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zaXplLW1lZGl1bSk7XFxufVxcblxcbi5tci1sYXJnZSB7XFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNpemUtbGFyZ2UpO1xcbn1cXG5cXG4ubXIteGxhcmdlIHtcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tc2l6ZS14bGFyZ2UpO1xcbn1cXG5cXG4ubXIteHhsYXJnZSB7XFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNpemUteHhsYXJnZSk7XFxufVxcblxcbi5tci1odWdlIHtcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tc2l6ZS14eHhsYXJnZSk7XFxufVxcblxcbi8qIG1hcmdpbiBib3R0b20gKi9cXG4ubWIteHh4c21hbGwge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc2l6ZS14eHhzbWFsbCk7XFxufVxcblxcbi5tYi14eHNtYWxsIHtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNpemUteHhzbWFsbCk7XFxufVxcblxcbi5tYi14c21hbGwge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc2l6ZS14c21hbGwpO1xcbn1cXG5cXG4ubWItc21hbGwge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc2l6ZS1zbWFsbCk7XFxufVxcblxcbi5tYi1tZWRpdW0ge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc2l6ZS1tZWRpdW0pO1xcbn1cXG5cXG4ubWItbGFyZ2Uge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc2l6ZS1sYXJnZSk7XFxufVxcblxcbi5tYi14bGFyZ2Uge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc2l6ZS14bGFyZ2UpO1xcbn1cXG5cXG4ubWIteHhsYXJnZSB7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zaXplLXh4bGFyZ2UpO1xcbn1cXG5cXG4ubWItaHVnZSB7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zaXplLXh4eGxhcmdlKTtcXG59XFxuXFxuLyogbWFyZ2luIGxlZnQgKi9cXG4ubWwteHh4c21hbGwge1xcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLXNpemUteHh4c21hbGwpO1xcbn1cXG5cXG4ubWwteHhzbWFsbCB7XFxuICBtYXJnaW4tbGVmdDogdmFyKC0tc2l6ZS14eHNtYWxsKTtcXG59XFxuXFxuLm1sLXhzbWFsbCB7XFxuICBtYXJnaW4tbGVmdDogdmFyKC0tc2l6ZS14c21hbGwpO1xcbn1cXG5cXG4ubWwtc21hbGwge1xcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLXNpemUtc21hbGwpO1xcbn1cXG5cXG4ubWwtbWVkaXVtIHtcXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1zaXplLW1lZGl1bSk7XFxufVxcblxcbi5tbC1sYXJnZSB7XFxuICBtYXJnaW4tbGVmdDogdmFyKC0tc2l6ZS1sYXJnZSk7XFxufVxcblxcbi5tbC14bGFyZ2Uge1xcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLXNpemUteGxhcmdlKTtcXG59XFxuXFxuLm1sLXh4bGFyZ2Uge1xcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLXNpemUteHhsYXJnZSk7XFxufVxcblxcbi5tbC1odWdlIHtcXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1zaXplLXh4eGxhcmdlKTtcXG59XFxuXFxuLyogbGF5b3V0IHV0aWxpdGllcyAqL1xcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmlubGluZSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5ibG9jayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmlubGluZS1ibG9jayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5pbmxpbmUtZmxleCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG59XFxuXFxuLmNvbHVtbiB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29sdW1uLXJldmVyc2Uge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbn1cXG5cXG4ucm93IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5yb3ctcmV2ZXJzZSB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxufVxcblxcbi5mbGV4LXdyYXAge1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uZmxleC13cmFwLXJldmVyc2Uge1xcbiAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XFxufVxcblxcbi5mbGV4LW5vLXdyYXAge1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxufVxcblxcbi5mbGV4LXNocmluayB7XFxuICBmbGV4LXNocmluazogMTtcXG59XFxuXFxuLmZsZXgtbm8tc2hyaW5rIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4uZmxleC1ncm93IHtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLmZsZXgtbm8tZ3JvdyB7XFxuICBmbGV4LWdyb3c6IDA7XFxufVxcblxcbi5qdXN0aWZ5LWNvbnRlbnQtc3RhcnQge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uanVzdGlmeS1jb250ZW50LWVuZCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uanVzdGlmeS1jb250ZW50LWNlbnRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmp1c3RpZnktY29udGVudC1iZXR3ZWVuIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmp1c3RpZnktY29udGVudC1hcm91bmQge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5hbGlnbi1pdGVtcy1zdGFydCB7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLmFsaWduLWl0ZW1zLWVuZCB7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbi5hbGlnbi1pdGVtcy1jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFsaWduLWl0ZW1zLXN0cmV0Y2gge1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcblxcbi5hbGlnbi1jb250ZW50LXN0YXJ0IHtcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5hbGlnbi1jb250ZW50LWVuZCB7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmFsaWduLWNvbnRlbnQtY2VudGVyIHtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmFsaWduLWNvbnRlbnQtc3RyZXRjaCB7XFxuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xcbn1cXG5cXG4uYWxpZ24tc2VsZi1zdGFydCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uYWxpZ24tc2VsZi1lbmQge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4uYWxpZ24tc2VsZi1jZW50ZXIge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uYWxpZ24tc2VsZi1zdHJldGNoIHtcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxufVxcblxcbi5idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLWxhcmdlKTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBmbGV4LXNocmluazogMDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXN0YWNrKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzbWFsbCk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1mb250LWxldHRlci1zcGFjaW5nLW5lZy1zbWFsbCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tZm9udC1saW5lLWhlaWdodCk7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUtbWVkaXVtKTtcXG4gIHBhZGRpbmc6IDAgdmFyKC0tc2l6ZS14c21hbGwpIDAgdmFyKC0tc2l6ZS14c21hbGwpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmJ1dHRvbi0tcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLmJ1dHRvbi0tcHJpbWFyeTplbmFibGVkOmFjdGl2ZSwgLmJ1dHRvbi0tcHJpbWFyeTplbmFibGVkOmZvY3VzIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrMyk7XFxufVxcblxcbi5idXR0b24tLXByaW1hcnk6ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2szKTtcXG59XFxuXFxuLmJ1dHRvbi0tcHJpbWFyeS1kZXN0cnVjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG4uYnV0dG9uLS1wcmltYXJ5LWRlc3RydWN0aXZlOmVuYWJsZWQ6YWN0aXZlLCAuYnV0dG9uLS1wcmltYXJ5LWRlc3RydWN0aXZlOmVuYWJsZWQ6Zm9jdXMge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2szKTtcXG59XFxuXFxuLmJ1dHRvbi0tcHJpbWFyeS1kZXN0cnVjdGl2ZTpkaXNhYmxlZCB7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcblxcbi5idXR0b24tLXNlY29uZGFyeSwgLmJ1dHRvbi0tc2Vjb25kYXJ5LWRlc3RydWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrOCk7XFxuICBjb2xvcjogdmFyKC0tYmxhY2s4KTtcXG4gIHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1zaXplLXhzbWFsbCkgKyAxcHgpIDAgY2FsYyh2YXIoLS1zaXplLXhzbWFsbCkgKyAxcHgpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWZvbnQtbGV0dGVyLXNwYWNpbmctcG9zLXNtYWxsKTtcXG59XFxuXFxuLmJ1dHRvbi0tc2Vjb25kYXJ5OmVuYWJsZWQ6YWN0aXZlLCAuYnV0dG9uLS1zZWNvbmRhcnktZGVzdHJ1Y3RpdmU6ZW5hYmxlZDphY3RpdmUsIC5idXR0b24tLXNlY29uZGFyeTplbmFibGVkOmZvY3VzLCAuYnV0dG9uLS1zZWNvbmRhcnktZGVzdHJ1Y3RpdmU6ZW5hYmxlZDpmb2N1cyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibHVlKTtcXG4gIHBhZGRpbmc6IDAgdmFyKC0tc2l6ZS14c21hbGwpIDAgdmFyKC0tc2l6ZS14c21hbGwpO1xcbn1cXG5cXG4uYnV0dG9uLS1zZWNvbmRhcnk6ZGlzYWJsZWQsIC5idXR0b24tLXNlY29uZGFyeS1kZXN0cnVjdGl2ZTpkaXNhYmxlZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjazMpO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrMyk7XFxufVxcblxcbi5idXR0b24tLXNlY29uZGFyeS1kZXN0cnVjdGl2ZSB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXJlZCk7XFxuICBjb2xvcjogdmFyKC0tcmVkKTtcXG59XFxuXFxuLmJ1dHRvbi0tc2Vjb25kYXJ5LWRlc3RydWN0aXZlOmRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLmJ1dHRvbi0tc2Vjb25kYXJ5LWRlc3RydWN0aXZlOmVuYWJsZWQ6YWN0aXZlLCAuYnV0dG9uLS1zZWNvbmRhcnktZGVzdHJ1Y3RpdmU6ZW5hYmxlZDpmb2N1cyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1yZWQpO1xcbiAgcGFkZGluZzogMCB2YXIoLS1zaXplLXhzbWFsbCkgMCB2YXIoLS1zaXplLXhzbWFsbCk7XFxufVxcblxcbi5idXR0b24tLXNlY29uZGFyeS1kZXN0cnVjdGl2ZTpkaXNhYmxlZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1yZWQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLXJlZCk7XFxuICBvcGFjaXR5OiAwLjQ7XFxufVxcblxcbi5idXR0b24tLXRlcnRpYXJ5LCAuYnV0dG9uLS10ZXJ0aWFyeS1kZXN0cnVjdGl2ZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcXG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1mb250LWxldHRlci1zcGFjaW5nLXBvcy1zbWFsbCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idXR0b24tLXRlcnRpYXJ5OmVuYWJsZWQ6Zm9jdXMsIC5idXR0b24tLXRlcnRpYXJ5LWRlc3RydWN0aXZlOmVuYWJsZWQ6Zm9jdXMge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5idXR0b24tLXRlcnRpYXJ5OmRpc2FibGVkLCAuYnV0dG9uLS10ZXJ0aWFyeS1kZXN0cnVjdGl2ZTpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBjb2xvcjogdmFyKC0tYmxhY2szKTtcXG59XFxuXFxuLmJ1dHRvbi0tdGVydGlhcnktZGVzdHJ1Y3RpdmUge1xcbiAgY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbi5idXR0b24tLXRlcnRpYXJ5LWRlc3RydWN0aXZlOmVuYWJsZWQ6Zm9jdXMge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5idXR0b24tLXRlcnRpYXJ5LWRlc3RydWN0aXZlOmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuNDtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiB2YXIoLS1zaXplLW1lZGl1bSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAvKiB1bmNoZWNrZWQgKi9cXG4gIC8qXFxuXFx0Jl9fYm94OmZvY3VzICsgJl9fbGFiZWw6YmVmb3JlIHtcXG5cXHRcXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuXFx0ICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCB2YXIoLS1ibHVlKTtcXG5cXHR9Ki9cXG4gIC8qIGNoZWNrZWQgKi9cXG4gIC8qXFxuXFx0Jl9fYm94OmNoZWNrZWQ6Zm9jdXMgKyAmX19sYWJlbDpiZWZvcmUge1xcblxcdFxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG5cXHQgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHZhcigtLWJsdWUpO1xcblxcdH0qL1xcbn1cXG5cXG4uY2hlY2tib3hfX2JveCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY2hlY2tib3hfX2xhYmVsIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tYmxhY2s4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zdGFjayk7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14c21hbGwpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tZm9udC1saW5lLWhlaWdodCk7XFxuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tZm9udC1sZXR0ZXItc3BhY2luZy1wb3MteHNtYWxsKTtcXG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcXG4gIHBhZGRpbmc6IDAgdmFyKC0tc2l6ZS14c21hbGwpIDAgdmFyKC0tc2l6ZS1zbWFsbCk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uY2hlY2tib3hfX2xhYmVsOmJlZm9yZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjazgpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1zbWFsbCk7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBtYXJnaW46IC0xcHggMTBweCAwIC04cHg7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uY2hlY2tib3hfX2JveDpkaXNhYmxlZCArIC5jaGVja2JveF9fbGFiZWwge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuXFxuLmNoZWNrYm94X19ib3g6Y2hlY2tlZCArIC5jaGVja2JveF9fbGFiZWw6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCwlM0NzdmclMjBmaWxsJTNEJTIybm9uZSUyMiUyMGhlaWdodCUzRCUyMjclMjIlMjB2aWV3Qm94JTNEJTIyMCUyMDAlMjA4JTIwNyUyMiUyMHdpZHRoJTNEJTIyOCUyMiUyMHhtbG5zJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJTIyJTNFJTNDcGF0aCUyMGNsaXAtcnVsZSUzRCUyMmV2ZW5vZGQlMjIlMjBkJTNEJTIybTEuMTc2NDclMjAxLjg4MjM2JTIwMS44ODIzNSUyMDEuODgyMzYlMjAzLjc2NDcxLTMuNzY0NzIlMjAxLjE3NjQ3JTIwMS4xNzY0OC00Ljk0MTE4JTIwNC45NDEyLTMuMDU4ODItMy4wNTg4NHolMjIlMjBmaWxsJTNEJTIyJTIzZmZmJTIyJTIwZmlsbC1ydWxlJTNEJTIyZXZlbm9kZCUyMiUyRiUzRSUzQyUyRnN2ZyUzRVxcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDFweCAycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLmNoZWNrYm94X19ib3g6Y2hlY2tlZDpkaXNhYmxlZCArIC5jaGVja2JveF9fbGFiZWw6YmVmb3JlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2s4KTtcXG59XFxuXFxuLmRpc2Nsb3N1cmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4uZGlzY2xvc3VyZV9faXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zaWx2ZXIpO1xcbn1cXG5cXG4uZGlzY2xvc3VyZV9faXRlbTpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmRpc2Nsb3N1cmVfX2xhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiB2YXIoLS1zaXplLW1lZGl1bSk7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14c21hbGwpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XFxuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tZm9udC1sZXR0ZXItc3BhY2luZy1wb3MteHNtYWxsKTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodCk7XFxuICBjb2xvcjogdmFyKC0tYmxhY2s4KTtcXG4gIHBhZGRpbmc6IDAgOHB4IDAgMjRweDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5kaXNjbG9zdXJlX19sYWJlbDpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDhweDtcXG4gIGxlZnQ6IDRweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBvcGFjaXR5OiAwLjM7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LCUzQ3N2ZyUyMGZpbGwlM0QlMjJub25lJTIyJTIwaGVpZ2h0JTNEJTIyMTYlMjIlMjB2aWV3Qm94JTNEJTIyMCUyMDAlMjAxNiUyMDE2JTIyJTIwd2lkdGglM0QlMjIxNiUyMiUyMHhtbG5zJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJTIyJTNFJTNDcGF0aCUyMGQlM0QlMjJtMTElMjA4LTQtM3Y2eiUyMiUyMGZpbGwlM0QlMjIlMjMwMDAlMjIlMkYlM0UlM0MlMkZzdmclM0VcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbn1cXG5cXG4uZGlzY2xvc3VyZV9fbGFiZWw6aG92ZXI6YmVmb3JlIHtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmRpc2Nsb3N1cmVfX2NvbnRlbnQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHNtYWxsKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWZvbnQtbGV0dGVyLXNwYWNpbmctcG9zLXhzbWFsbCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQpO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrOCk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXh4c21hbGwpIHZhcigtLXNpemUteHhzbWFsbCkgdmFyKC0tc2l6ZS14eHNtYWxsKSB2YXIoLS1zaXplLXNtYWxsKTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5kaXNjbG9zdXJlLS1zZWN0aW9uIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcXG59XFxuXFxuLmRpc2Nsb3N1cmUtLWV4cGFuZGVkIC5kaXNjbG9zdXJlX19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uZGlzY2xvc3VyZS0tZXhwYW5kZWQgLmRpc2Nsb3N1cmVfX2xhYmVsOmJlZm9yZSB7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LCUzQ3N2ZyUyMGZpbGwlM0QlMjJub25lJTIyJTIwaGVpZ2h0JTNEJTIyMTYlMjIlMjB2aWV3Qm94JTNEJTIyMCUyMDAlMjAxNiUyMDE2JTIyJTIwd2lkdGglM0QlMjIxNiUyMiUyMHhtbG5zJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJTIyJTNFJTNDcGF0aCUyMGQlM0QlMjJtOSUyMDEwJTIwMy00aC02eiUyMiUyMGZpbGwlM0QlMjIlMjMwMDAlMjIlMkYlM0UlM0MlMkZzdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHdpZHRoOiB2YXIoLS1zaXplLW1lZGl1bSk7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUtbWVkaXVtKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXN0YWNrKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzbWFsbCk7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTJweCAtMXB4O1xcbn1cXG5cXG4uaWNvbi0tc3BpbiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRpbmcgMS4wcyBsaW5lYXIgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRpbmcgMS4wcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGluZyB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRpbmcge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG4uaWNvbi0tYmx1ZSB7XFxuICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDU0JSkgc2VwaWEoMTYlKSBzYXR1cmF0ZSg3NDk5JSkgaHVlLXJvdGF0ZSgxNzlkZWcpIGJyaWdodG5lc3MoOTglKSBjb250cmFzdCgxMDElKTtcXG4gICAgICAgICAgZmlsdGVyOiBpbnZlcnQoNTQlKSBzZXBpYSgxNiUpIHNhdHVyYXRlKDc0OTklKSBodWUtcm90YXRlKDE3OWRlZykgYnJpZ2h0bmVzcyg5OCUpIGNvbnRyYXN0KDEwMSUpO1xcbn1cXG5cXG4uaWNvbi0tcHVycGxlIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoNDAlKSBzZXBpYSg1OSUpIHNhdHVyYXRlKDQwMDElKSBodWUtcm90YXRlKDIzMmRlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCgxMDIlKTtcXG4gICAgICAgICAgZmlsdGVyOiBpbnZlcnQoNDAlKSBzZXBpYSg1OSUpIHNhdHVyYXRlKDQwMDElKSBodWUtcm90YXRlKDIzMmRlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCgxMDIlKTtcXG59XFxuXFxuLmljb24tLXB1cnBsZTQge1xcbiAgLXdlYmtpdC1maWx0ZXI6IGludmVydCg3MiUpIHNlcGlhKDQwJSkgc2F0dXJhdGUoNjYwJSkgaHVlLXJvdGF0ZSgyMDJkZWcpIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoMTAzJSk7XFxuICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDcyJSkgc2VwaWEoNDAlKSBzYXR1cmF0ZSg2NjAlKSBodWUtcm90YXRlKDIwMmRlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCgxMDMlKTtcXG59XFxuXFxuLmljb24tLWhvdC1waW5rIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMTglKSBzZXBpYSg5MCUpIHNhdHVyYXRlKDMzNDclKSBodWUtcm90YXRlKDI5M2RlZykgYnJpZ2h0bmVzcygxMTYlKSBjb250cmFzdCgxMzIlKTtcXG4gICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMTglKSBzZXBpYSg5MCUpIHNhdHVyYXRlKDMzNDclKSBodWUtcm90YXRlKDI5M2RlZykgYnJpZ2h0bmVzcygxMTYlKSBjb250cmFzdCgxMzIlKTtcXG59XFxuXFxuLmljb24tLWdyZWVuIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoNjYlKSBzZXBpYSgzOSUpIHNhdHVyYXRlKDUzODIlKSBodWUtcm90YXRlKDExNGRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCg3OSUpO1xcbiAgICAgICAgICBmaWx0ZXI6IGludmVydCg2NiUpIHNlcGlhKDM5JSkgc2F0dXJhdGUoNTM4MiUpIGh1ZS1yb3RhdGUoMTE0ZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDc5JSk7XFxufVxcblxcbi5pY29uLS1yZWQge1xcbiAgLXdlYmtpdC1maWx0ZXI6IGludmVydCg0MyUpIHNlcGlhKDU2JSkgc2F0dXJhdGUoNTYzMiUpIGh1ZS1yb3RhdGUoMzQ5ZGVnKSBicmlnaHRuZXNzKDk3JSkgY29udHJhc3QoOTUlKTtcXG4gICAgICAgICAgZmlsdGVyOiBpbnZlcnQoNDMlKSBzZXBpYSg1NiUpIHNhdHVyYXRlKDU2MzIlKSBodWUtcm90YXRlKDM0OWRlZykgYnJpZ2h0bmVzcyg5NyUpIGNvbnRyYXN0KDk1JSk7XFxufVxcblxcbi5pY29uLS15ZWxsb3cge1xcbiAgLXdlYmtpdC1maWx0ZXI6IGludmVydCg3OCUpIHNlcGlhKDg2JSkgc2F0dXJhdGUoMTYwOCUpIGh1ZS1yb3RhdGUoMWRlZykgYnJpZ2h0bmVzcygxMDclKSBjb250cmFzdCgxMDQlKTtcXG4gICAgICAgICAgZmlsdGVyOiBpbnZlcnQoNzglKSBzZXBpYSg4NiUpIHNhdHVyYXRlKDE2MDglKSBodWUtcm90YXRlKDFkZWcpIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoMTA0JSk7XFxufVxcblxcbi5pY29uLS1ibGFjayB7XFxuICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzUwMCUpIGh1ZS1yb3RhdGUoMTE3ZGVnKSBicmlnaHRuZXNzKDEwOSUpIGNvbnRyYXN0KDEwNSUpO1xcbiAgICAgICAgICBmaWx0ZXI6IGludmVydCgwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc1MDAlKSBodWUtcm90YXRlKDExN2RlZykgYnJpZ2h0bmVzcygxMDklKSBjb250cmFzdCgxMDUlKTtcXG59XFxuXFxuLmljb24tLWJsYWNrOCB7XFxuICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDAlKSBzZXBpYSg1NiUpIHNhdHVyYXRlKDI1JSkgaHVlLXJvdGF0ZSgxMzdkZWcpIGJyaWdodG5lc3MoMTA1JSkgY29udHJhc3QoNjAlKTtcXG4gICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMCUpIHNlcGlhKDU2JSkgc2F0dXJhdGUoMjUlKSBodWUtcm90YXRlKDEzN2RlZykgYnJpZ2h0bmVzcygxMDUlKSBjb250cmFzdCg2MCUpO1xcbn1cXG5cXG4uaWNvbi0tYmxhY2szIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDY5OCUpIGh1ZS1yb3RhdGUoMjE5ZGVnKSBicmlnaHRuZXNzKDY2JSkgY29udHJhc3QoMTI3JSk7XFxuICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg2OTglKSBodWUtcm90YXRlKDIxOWRlZykgYnJpZ2h0bmVzcyg2NiUpIGNvbnRyYXN0KDEyNyUpO1xcbn1cXG5cXG4uaWNvbi0td2hpdGUge1xcbiAgLXdlYmtpdC1maWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxMDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgyNjlkZWcpIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoMTA0JSk7XFxuICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDEwMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDI2OWRlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCgxMDQlKTtcXG59XFxuXFxuLmljb24tLXdoaXRlOCB7XFxuICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoMiUpIHNhdHVyYXRlKDUlKSBodWUtcm90YXRlKDU1ZGVnKSBicmlnaHRuZXNzKDEwNCUpIGNvbnRyYXN0KDk4JSk7XFxuICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoMiUpIHNhdHVyYXRlKDUlKSBodWUtcm90YXRlKDU1ZGVnKSBicmlnaHRuZXNzKDEwNCUpIGNvbnRyYXN0KDk4JSk7XFxufVxcblxcbi5pY29uLS13aGl0ZTQge1xcbiAgLXdlYmtpdC1maWx0ZXI6IGludmVydCg5OSUpIHNlcGlhKDIlKSBzYXR1cmF0ZSg4OTclKSBodWUtcm90YXRlKDI0NWRlZykgYnJpZ2h0bmVzcygxMTclKSBjb250cmFzdCg5MyUpO1xcbiAgICAgICAgICBmaWx0ZXI6IGludmVydCg5OSUpIHNlcGlhKDIlKSBzYXR1cmF0ZSg4OTclKSBodWUtcm90YXRlKDI0NWRlZykgYnJpZ2h0bmVzcygxMTclKSBjb250cmFzdCg5MyUpO1xcbn1cXG5cXG4uaWNvbi0tYWRqdXN0IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ3BhdGggZD0nTTEyIDE2LjA1VjloMXY3LjA1YTIuNSAyLjUgMCAwMTAgNC45VjIzaC0xdi0yLjA1YTIuNSAyLjUgMCAwMTAtNC45em0yIDIuNDVhMS41IDEuNSAwIDExLTMgMCAxLjUgMS41IDAgMDEzIDB6TTE5IDIzaDF2LTcuMDVhMi41IDIuNSAwIDAwMC00LjlWOWgtMXYyLjA1YTIuNSAyLjUgMCAwMDAgNC45em0yLTkuNWExLjUgMS41IDAgMTAtMyAwIDEuNSAxLjUgMCAwMDMgMHonLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tYWxlcnQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTIxLjI1IDE3LjM5M2ExLjc1IDEuNzUgMCAwMDEuNzUgMS43NVYyMEg5di0uODU3YTEuNzUgMS43NSAwIDAwMS43NS0xLjc1VjE0YzAtMy4zMTQgMi4zNS02IDUuMjUtNnM1LjI1IDIuNjg2IDUuMjUgNnptLTEtMy4zOTN2My4zOTNjMCAuNi4xOTIgMS4xNTUuNTE4IDEuNjA3aC05LjUzNmEyLjczOCAyLjczOCAwIDAwLjUxOC0xLjYwN1YxNGMwLTIuODkxIDIuMDI0LTUgNC4yNS01czQuMjUgMi4xMDkgNC4yNSA1eicgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0NwYXRoIGQ9J00xNiAyM2EyIDIgMCAwMS0yLTJoLTFhMyAzIDAgMTA2IDBoLTFhMiAyIDAgMDEtMiAyeicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1hbmdsZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTIgMTJ2OGg4di0xaC0zYTQgNCAwIDAwLTQtNHYtM3ptMSA0djNoM2EzIDMgMCAwMC0zLTN6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tYXJyb3ctbGVmdC1yaWdodCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTEyLjIwNyAxNi41bDEuNjQ3IDEuNjQ2LS43MDcuNzA4TDEwLjI5MyAxNmwyLjg1NC0yLjg1NC43MDcuNzA4LTEuNjQ3IDEuNjQ2aDcuNTg2bC0xLjY0Ni0xLjY0Ni43MDctLjcwOEwyMS43MDcgMTZsLTIuODUzIDIuODU0LS43MDctLjcwOCAxLjY0Ni0xLjY0NnonIGZpbGw9JyUyMzAwMCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tdXAtZG93biB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTE2IDEwLjI5MmwyLjg1NCAyLjg1NC0uNzA3LjcwNy0xLjY0Ni0xLjY0NnY3LjU4NWwxLjY0Ni0xLjY0Ni43MDcuNzA3LTIuODUzIDIuODU0LTIuODU0LTIuODU0LjcwNy0uNzA3IDEuNjQ3IDEuNjQ2di03LjU4NWwtMS42NDcgMS42NDYtLjcwNy0uNzA3eicgZmlsbD0nJTIzMDAwJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1hdXRvLWxheW91dC1ob3Jpem9udGFsIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xMCAxMGg1djEyaC01em0xIDFoM3YxMGgtM3ptNi0xaDV2MTJoLTV6bTEgMWgzdjEwaC0zeicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWF1dG8tbGF5b3V0LXZlcnRpY2FsIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xMCAxMGgxMnY1SDEwem0xIDFoMTB2M0gxMXptLTEgNmgxMnY1SDEwem0xIDFoMTB2M0gxMXonIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1iYWNrIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xMy43MDcgMTZsNC42NDYtNC42NDYtLjcwNy0uNzA3TDEyLjI5MyAxNmw1LjM1MyA1LjM1NC43MDctLjcwN3onIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1ibGVuZC1lbXB0eSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTYuNjk1IDExLjcybC0uNjkzLS43MThMMTYgMTFsLS4wMDEuMDAyLS42OTQuNzE4QzEzLjEwMiAxNC4wMTIgMTIgMTUuMjk0IDEyIDE2Ljg1MmE0LjE5OSA0LjE5OSAwIDAwMS4xNzIgMi45MzYgMy45MDYgMy45MDYgMCAwMDUuNjU2IDBBNC4xOTkgNC4xOTkgMCAwMDIwIDE2Ljg1MmMwLTEuNTU4LTEuMTAyLTIuODQtMy4zMDUtNS4xMzJ6bS0uNjk1LjcyYy0uOTc3IDEuMDE3LTEuNjkzIDEuNzktMi4xOTUgMi40NzEtLjYuODE0LS44MDUgMS4zOC0uODA1IDEuOTR2LjAwM2EzLjIgMy4yIDAgMDAuODkgMi4yMzkgMi45MDYgMi45MDYgMCAwMDQuMjIgMCAzLjIgMy4yIDAgMDAuODktMi4yMzl2LS4wMDJjMC0uNTYtLjIwNS0xLjEyNy0uODA1LTEuOTQtLjUwMi0uNjgxLTEuMjE5LTEuNDU1LTIuMTk1LTIuNDcyeicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWJsZW5kIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNi4wMDIgMTEuMDAybC42OTMuNzE4QzE4Ljg5OCAxNC4wMTIgMjAgMTUuMjk0IDIwIDE2Ljg1MmE0LjE5OSA0LjE5OSAwIDAxLTEuMTcyIDIuOTM2IDMuOTA2IDMuOTA2IDAgMDEtNS42NTYgMEE0LjE5OSA0LjE5OSAwIDAxMTIgMTYuODUyYzAtMS41NTggMS4xMDItMi44NCAzLjMwNS01LjEzMmwuNjk0LS43MTl6bS0yLjE5NyAzLjkxYy41MDItLjY4MSAxLjIxOS0xLjQ1NSAyLjE5NS0yLjQ3Mi45NzYgMS4wMTcgMS42OTMgMS43OSAyLjE5NSAyLjQ3MS42LjgxNC44MDUgMS4zOC44MDUgMS45NHYuMDAzYzAgLjA0OSAwIC4wOTgtLjAwMy4xNDZoLTUuOTk0YTMuMzcgMy4zNyAwIDAxLS4wMDMtLjE0NnYtLjAwMmMwLS41Ni4yMDUtMS4xMjcuODA1LTEuOTR6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tYnJlYWsge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCcgb3BhY2l0eT0nLjknJTNFJTNDcGF0aCBkPSdNMTMgOXYzaDFWOXpNMjIuMTAzIDkuODk2YTIuOTc1IDIuOTc1IDAgMDAtNC4yMDcgMGwtMi43NSAyLjc1LjcwNy43MDcgMi43NS0yLjc1YTEuOTc1IDEuOTc1IDAgMDEyLjc5MyAyLjc5M2wtMi43NSAyLjc1LjcwNy43MDcgMi43NS0yLjc1YTIuOTc1IDIuOTc1IDAgMDAwLTQuMjA3ek05Ljg5NiAyMi4xMDRhMi45NzUgMi45NzUgMCAwMTAtNC4yMDhsMi43NS0yLjc1LjcwNy43MDctMi43NSAyLjc1YTEuOTc1IDEuOTc1IDAgMDAyLjc5MyAyLjc5M2wyLjc1LTIuNzUuNzA3LjcwNy0yLjc1IDIuNzVhMi45NzUgMi45NzUgMCAwMS00LjIwNyAwek0yMyAxOWgtM3YtMWgzek0xOSAyMHYzaC0xdi0zek0xMiAxM0g5djFoM3onLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tY2FyZXQtZG93biB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTE2IDE4bDMtNGgtNnonIGZpbGw9JyUyMzAwMCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tY2FyZXQtbGVmdCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTEzIDE2bDQtM3Y2eicgZmlsbD0nJTIzMDAwJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1jYXJldC1yaWdodCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTE5IDE2bC00LTN2NnonIGZpbGw9JyUyMzAwMCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tY2FyZXQtdXAge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00xNiAxNGwzIDRoLTZ6JyBmaWxsPSclMjMwMDAnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWNoZWNrIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00yMS4yMDcgMTMuNzA3TDE1IDE5LjkxNGwtMy43MDctMy43MDcgMS40MTQtMS40MTRMMTUgMTcuMDg2bDQuNzkzLTQuNzkzeicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWNsb3NlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMTYgMTUuMjkzbDQuNjQ2LTQuNjQ2LjcwOC43MDdMMTYuNzA3IDE2bDQuNjQ3IDQuNjQ3LS43MDcuNzA3TDE2IDE2LjcwN2wtNC42NDYgNC42NDctLjcwNy0uNzA3TDE1LjI5MyAxNmwtNC42NDYtNC42NDYuNzA3LS43MDd6JyBmaWxsPSclMjMwMDAnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWNvbXBvbmVudCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTIuMDYzIDEwLjkzOEwxNiAxNC44NzRsMy45MzgtMy45MzhMMTYgN3ptNi40NiAwTDE2IDEzLjQ2bC0yLjUyMy0yLjUyNEwxNiA4LjQxNXptLTYuNDYgMTAuMTI0TDE2IDI1bDMuOTM4LTMuOTM4TDE2IDE3LjEyNXptNi40NiAwTDE2IDIzLjU4N2wtMi41MjMtMi41MjNMMTYgMTguNTM4ek03IDE2bDMuOTM3LTMuOTM4TDE0Ljg3NSAxNmwtMy45MzggMy45Mzh6bTMuOTM3IDIuNTIzTDEzLjQ2MSAxNmwtMi41MjQtMi41MjNMOC40MTUgMTZ6TTE3LjEyNSAxNmwzLjkzOCAzLjkzOEwyNSAxNmwtMy45MzgtMy45Mzh6bTYuNDYgMGwtMi41MjMgMi41MjNMMTguNTQgMTZsMi41MjMtMi41MjN6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tY29ybmVyLXJhZGl1cyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMjEgMTNoLTRhNCA0IDAgMDAtNCA0djRoLTF2LTRhNSA1IDAgMDE1LTVoNHonIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1jb3JuZXJzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xMSAxMWgzdjFoLTJ2MmgtMXptNyAwaDN2M2gtMXYtMmgtMnptLTYgOXYtMmgtMXYzaDN2LTF6bTktMnYzaC0zdi0xaDJ2LTJ6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tZGlzdHJpYnV0ZS1ob3Jpem9udGFsLXNwYWNpbmcge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J00xMSAyMi41di0xM2gtMXYxM3pNMjIgOS41djEzaC0xdi0xM3pNMTcgMTIuNXY3aC0ydi03eicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1kaXN0cmlidXRlLXZlcnRpY2FsLXNwYWNpbmcge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J005LjUgMTBoMTN2MWgtMTN6TTEyLjUgMTVoN3YyaC03ek0yMi41IDIxaC0xM3YxaDEzeicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1kcmFmdCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTAgOC41aDcuNzA3TDIyIDEyLjc5M1YyMy41SDEwem0xIDF2MTNoMTB2LTloLTR2LTR6bTcgLjcwN2wyLjI5MyAyLjI5M0gxOHonIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1lZmZlY3RzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBmaWxsPSclMjMwMDAnJTNFJTNDcGF0aCBkPSdNMTYuNSA4LjVoLTF2M2gxek0xMS4wNSAxMC4zNDNsLS43MDcuNzA3IDIuMTIxIDIuMTIyLjcwOC0uNzA4ek0yMS42NTcgMTEuMDVsLS43MDctLjcwNy0yLjEyMSAyLjEyMS43MDcuNzA4ek04LjUgMTUuNXYxaDN2LTF6TTIwLjUgMTUuNXYxaDN2LTF6TTEzLjE3MiAxOS41MzVsLS43MDgtLjcwNy0yLjEyIDIuMTIyLjcwNi43MDd6TTE5LjUzNSAxOC44MjhsLS43MDcuNzA3IDIuMTIyIDIuMTIyLjcwNy0uNzA3ek0xNi41IDIwLjVoLTF2M2gxeicvJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xOC40OTggMTUuOTk4YTIuNSAyLjUgMCAxMS01IDAgMi41IDIuNSAwIDAxNSAwem0tMSAwYTEuNSAxLjUgMCAxMS0zIDAgMS41IDEuNSAwIDAxMyAweicgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWVsbGlwc2VzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xMS41IDE2YTEuNSAxLjUgMCAxMS0zIDAgMS41IDEuNSAwIDAxMyAwem02IDBhMS41IDEuNSAwIDExLTMgMCAxLjUgMS41IDAgMDEzIDB6bTQuNSAxLjVhMS41IDEuNSAwIDEwMC0zIDEuNSAxLjUgMCAwMDAgM3onIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1leWVkcm9wcGVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMjIuNDQ3IDkuNmMtLjgtLjgtMi0uOC0yLjggMGwtMi44IDIuOC0uOC0uN2MtLjQtLjQtMS0uNC0xLjQgMHMtLjQgMSAwIDEuNGwuNy43LTUuOCA1LjhjLS40LjQtMSAxLjkgMCAyLjlzMi41LjQgMi45IDBsNS44LTUuOC43LjdjLjQuNCAxIC40IDEuNCAwcy40LTEgMC0xLjRsLS43LS43IDIuOC0yLjhjLjgtLjkuOC0yLjEgMC0yLjl6bS0xMC45IDExLjloLTF2LTFsNS44LTUuOCAxIDFjLS4xIDAtNS44IDUuOC01LjggNS44eicgZmlsbD0nJTIzMDAwJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1mb3J3YXJkIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNy45NCAxNmwtNC42NDctNC42NDYuNzA3LS43MDdMMTkuMzU0IDE2IDE0IDIxLjM1NGwtLjcwNy0uNzA3eicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWZyYW1lIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xMSAyNHYtM0g4di0xaDN2LThIOHYtMWgzVjhoMXYzaDhWOGgxdjNoM3YxaC0zdjhoM3YxaC0zdjNoLTF2LTNoLTh2M3ptOS00di04aC04djh6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tZ3JvdXAge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J00xNy40IDloLTIuOHYxaDIuOHpNMjAuOSAyMkgyMnYtMS4xaDFWMjNoLTIuMXpNMTAgMTQuNnYyLjhIOXYtMi44ek0yMiAxMS4xVjEwaC0xLjFWOUgyM3YyLjF6TTIyIDE0LjZ2Mi44aDF2LTIuOHpNMTAgMTEuMVYxMGgxLjFWOUg5djIuMXpNOSAyMC45aDFWMjJoMS4xdjFIOXpNMTcuNCAyMmgtMi44djFoMi44eicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1oaWRkZW4ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTIxLjUwOSAxNS44MDFBOC4wMzMgOC4wMzMgMCAwMDIyLjkyOCAxNGgtMS4xODRBNi45OTIgNi45OTIgMCAwMTE2IDE3YTYuOTkyIDYuOTkyIDAgMDEtNS43NDUtM0g5LjA3YTguMDMzIDguMDMzIDAgMDAxLjQyMSAxLjgwMWwtMS41OTUgMS41OTUuNzA4LjcwNyAxLjY1Ny0xLjY1N2MuNzEuNTIzIDEuNTExLjkzMiAyLjM3NCAxLjE5OWwtLjYxNyAyLjIyMS45NjQuMjY4LjYyNi0yLjI1NWE4LjA1MSA4LjA1MSAwIDAwMi43ODQgMGwuNjI2IDIuMjU1Ljk2NC0uMjY4LS42MTctMi4yMjFhNy45NzEgNy45NzEgMCAwMDIuMzc0LTEuMmwxLjY1OCAxLjY1OC43MDctLjcwN3onIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1ob3Jpem9udGFsLXBhZGRpbmcge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J005IDl2MTRoMVY5em0xMyAwdjE0aDFWOXonLyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTMgMTl2LTZoNnY2em0tMS03aDh2OGgtOHonIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1oeXBlcmxpbmsge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00yMC44MjQgMTQuNDkybC0xLjY1NyAxLjY1Ny44MjguODI5IDEuNjU4LTEuNjU3YTMuNTE3IDMuNTE3IDAgMDAtNC45NzMtNC45NzNsLTEuNjU3IDEuNjU4LjgyOS44MjggMS42NTctMS42NTdhMi4zNDUgMi4zNDUgMCAwMTMuMzE1IDMuMzE1em0tNC45NzQgNC45NzJsLjgyOS44MjktMS42NTggMS42NTdhMy41MTYgMy41MTYgMCAxMS00Ljk3Mi00Ljk3MmwxLjY1OS0xLjY1OC44MjguODI5LTEuNjU2IDEuNjU3YTIuMzQzIDIuMzQzIDAgMTAzLjMxNSAzLjMxNWwxLjY1Ny0xLjY1N3ptMi4wNzItNi4yMTZsLTQuOTcyIDQuOTczLjgyOC44MjkgNC45NzMtNC45NzN6JyBmaWxsPSclMjMwMDAnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWltYWdlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00yMiAxMEgxMHY3Ljc5M2wzLjA4My0zLjA4MyA3LjI5IDcuMjlIMjJ6TTEwIDIydi0yLjc5M2wzLjA4My0zLjA4M0wxOC45NiAyMnptMC0xM2ExIDEgMCAwMC0xIDF2MTJhMSAxIDAgMDAxIDFoMTJhMSAxIDAgMDAxLTFWMTBhMSAxIDAgMDAtMS0xem05LjY2NyA0LjY2N2ExLjMzMyAxLjMzMyAwIDExLTIuNjY3IDAgMS4zMzMgMS4zMzMgMCAwMTIuNjY3IDB6bTEgMGEyLjMzMyAyLjMzMyAwIDExLTQuNjY3IDAgMi4zMzMgMi4zMzMgMCAwMTQuNjY3IDB6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0taW5zdGFuY2Uge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTE2IDdsOSA5LTkgOS05LTl6bS03LjU4NiA5TDE2IDIzLjU4NiAyMy41ODYgMTYgMTYgOC40MTR6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0ta2V5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNS4xNCAyMC4xNGEzLjAxNCAzLjAxNCAwIDAwLjMzMS0zLjg2OGwyLjA0Ny0yLjA0NyAxLjc2NyAxLjc2N2EuNS41IDAgMTAuNzA3LS43MDdsLTEuNzY3LTEuNzY3IDEuMjkzLTEuMjkzIDEuNzg0IDEuNzg0YS41LjUgMCAxMC43MDctLjcwN2wtMS43ODQtMS43ODQuNzYyLS43NjFhLjUuNSAwIDAwLS43MDctLjcwOGwtNS41MTMgNS41MTNhMy4wMTQgMy4wMTQgMCAxMC4zNzMgNC41Nzh6bS0uNzEyLS43MTJhMi4wMDYgMi4wMDYgMCAxMC0yLjgzNy0yLjgzNyAyLjAwNiAyLjAwNiAwIDAwMi44MzcgMi44Mzd6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tbGF5b3V0LWFsaWduLWJvdHRvbSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTQuNSAxMHYxMGgtMlYxMHptOCAxMnYxaC0xM3YtMXptLTMtMnYtNmgtMnY2eicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWFsaWduLWhvcml6b250YWwtY2VudGVycyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTE2LjUgOS41aC0xdjNoLTV2Mmg1djNoLTN2MmgzdjNoMXYtM2gzdi0yaC0zdi0zaDV2LTJoLTV6JyBmaWxsPSclMjMwMDAnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWFsaWduLWxlZnQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J00xMCAyMi41SDl2LTEzaDF6TTIyIDE0LjVIMTJ2LTJoMTB6TTEyIDE5LjVoNnYtMmgtNnonLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tYWxpZ24tcmlnaHQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J00yMiAyMi41aDF2LTEzaC0xek0xMCAxNC41aDEwdi0ySDEwek0yMCAxOS41aC02di0yaDZ6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWFsaWduLXRvcCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyUzRSUzQ3BhdGggZD0nTTE0LjUgMjJWMTJoLTJ2MTB6TTIyLjUgMTBWOWgtMTN2MXpNMTkuNSAxMnY2aC0ydi02eicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1hbGlnbi12ZXJ0aWNhbC1jZW50ZXJzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMTIuNSAxNS41di01aDJ2NWgzdi0zaDJ2M2gzdjFoLTN2M2gtMnYtM2gtM3Y1aC0ydi01aC0zdi0xeicgZmlsbD0nJTIzMDAwJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1sYXlvdXQtZ3JpZC1jb2x1bW5zIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBmaWxsPSclMjMwMDAnJTNFJTNDcGF0aCBkPSdNOSA5aDN2MTRIOXpNMTQuNSA5aDN2MTRoLTN6TTIwIDloM3YxNGgtM3onLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tbGF5b3V0LWdyaWQtcm93cyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyUzRSUzQ3BhdGggZD0nTTkgOWgxNHYzSDl6TTkgMTQuNWgxNHYzSDl6TTkgMjBoMTR2M0g5eicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1sYXlvdXQtZ3JpZC11bmlmb3JtIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBmaWxsPSclMjMwMDAnJTNFJTNDcGF0aCBkPSdNOSA5aDN2M0g5ek0yMCA5aDN2M2gtM3pNMTQuNSA5aDN2M2gtM3pNOSAxNC41aDN2M0g5ek0yMCAxNC41aDN2M2gtM3pNMTQuNSAxNC41aDN2M2gtM3pNOSAyMGgzdjNIOXpNMjAgMjBoM3YzaC0zek0xNC41IDIwaDN2M2gtM3onLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tbGlicmFyeSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTUuMzczIDIyaDEuMjU4Yy4yOC0uMzIuNjE2LS41OTcuOTk1LS44MTkgMS40NzgtLjg2MiA0LjAwNS0uOTA5IDUuMzg2LjEwOUgyNC41di05LjJzLS43OTctMi4yNS00LjQyLTIuMjVjLTEuODc1IDAtMi45MDIuNjAyLTMuNDU2IDEuMTg0YTIuNTY4IDIuNTY4IDAgMDAtLjYuOTc2aC0uMDQ4YTIuNTY5IDIuNTY5IDAgMDAtLjYtLjk3NmMtLjU1NC0uNTgyLTEuNTgxLTEuMTg0LTMuNDU2LTEuMTg0LTMuNjIzIDAtNC40MiAyLjI1LTQuNDIgMi4yNXY5LjE5aDEuNDg4YzEuMzgyLTEuMDE5IDMuOTEtLjk3IDUuMzg4LS4xMDUuMzguMjIzLjcxNy41MDMuOTk3LjgyNXptMS4xMjctOS43MTF2OC40NTdjLjE5NS0uMTU3LjQwMy0uMy42MjItLjQyOC45MjctLjU0MSAyLjExNS0uNzk2IDMuMjQxLS43ODcgMS4wMDYuMDA4IDIuMDgxLjIyNyAyLjk1Mi43NTloLjE4NXYtNy45NzNhMi40MTQgMi40MTQgMCAwMC0uNTA1LS41OTVjLS40Ni0uMzk3LTEuMzMtLjg4Mi0yLjkxNS0uODgyLTEuNTg2IDAtMi4zNC40ODMtMi42OTUuODM1YTEuNzQ5IDEuNzQ5IDAgMDAtLjM1My40OSAxLjA3NiAxLjA3NiAwIDAwLS4wNTIuMTMxbC0uMDA1LjAxNy4wMDEtLjAwNi4wMDItLjAwOHYtLjAwNWwuMDAxLS4wMDJ2LS4wMDJsLS4wMDUtLjAwMXptLTEgMGgtLjQ3NGwtLjAwNi4wMDF2LjAwMmwuMDAxLjAwMi4wMDEuMDA1LjAwMi4wMDguMDAxLjAwNi0uMDA1LS4wMTdhMS4wNzYgMS4wNzYgMCAwMC0uMDUzLS4xMzEgMS43NDkgMS43NDkgMCAwMC0uMzUzLS40OWMtLjM1NC0uMzUxLTEuMTA4LS44MzUtMi42OTQtLjgzNS0xLjU4NSAwLTIuNDU1LjQ4NS0yLjkxNi44ODJhMi40MTEgMi40MTEgMCAwMC0uNTA0LjU5NXY3Ljk2M2guMTg1Yy44NzItLjUzMiAxLjk0OC0uNzUyIDIuOTU0LS43NTkgMS4xMjgtLjAwOCAyLjMxNi4yNDkgMy4yNDMuNzkyLjIxNy4xMjcuNDI0LjI3LjYxOC40MjZ6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tbGluay1icm9rZW4ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J00xOCAxNHYtMmEyIDIgMCAxMC00IDB2MmgtMXYtMmEzIDMgMCAxMTYgMHYyek0xOSAxOGgtMXYyYTIgMiAwIDExLTQgMHYtMmgtMXYyYTMgMyAwIDEwNiAweicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1saW5rLWNvbm5lY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyUzRSUzQ3BhdGggZD0nTTE2IDEwYTIgMiAwIDAxMiAydjJoMXYtMmEzIDMgMCAxMC02IDB2Mmgxdi0yYTIgMiAwIDAxMi0yek0xOCAxOGgxdjJhMyAzIDAgMTEtNiAwdi0yaDF2MmEyIDIgMCAxMDQgMHonLyUzRSUzQ3BhdGggZD0nTTE1LjUgMTN2Nmgxdi02eicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1saXN0LWRldGFpbGVkIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBmaWxsPSclMjMwMDAnJTNFJTNDcGF0aCBkPSdNMTIgMTBoLTJ2MWgyek0xMiAyMGgtMnYxaDJ6TTEwIDE1aDJ2MWgtMnpNMjIgMTBoLTh2MWg4ek0xNCAyMGg4djFoLTh6TTIyIDE1aC04djFoOHonLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tbGlzdC10aWxlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNCAxMWgtM3YzaDN6bS00LTF2NWg1di01em0xMSAxaC0zdjNoM3ptLTQtMXY1aDV2LTV6bS0zIDhoLTN2M2gzem0tNC0xdjVoNXYtNXptMTEgMWgtM3YzaDN6bS00LTF2NWg1di01eicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLWxpc3Qge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCcgZmlsbC1vcGFjaXR5PScuOCclM0UlM0NwYXRoIGQ9J00yMyAxMEg5djFoMTR6TTkgMTUuNWgxNHYxSDl6TTkgMjFoMTR2MUg5eicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1sb2NrLW9mZiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTE4IDE1aC41YS41LjUgMCAwMS41LjV2NWEuNS41IDAgMDEtLjUuNWgtNmEuNS41IDAgMDEtLjUtLjV2LTVhLjUuNSAwIDAxLjUtLjVIMTd2LTIuNWEyLjUgMi41IDAgMDE1IDBWMTRoLTF2LTEuNWExLjUgMS41IDAgMDAtMyAweicgZmlsbD0nJTIzMDAwJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1sb2NrLW9uIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xMy41IDE1di0xLjVhMi41IDIuNSAwIDAxNSAwVjE1aC41YS41LjUgMCAwMS41LjV2NWEuNS41IDAgMDEtLjUuNWgtNmEuNS41IDAgMDEtLjUtLjV2LTVhLjUuNSAwIDAxLjUtLjV6bTQtMS41VjE1aC0zdi0xLjVhMS41IDEuNSAwIDAxMyAweicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLW1pbnVzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMjEuNSAxNi41aC0xMXYtMWgxMXonIGZpbGw9JyUyMzAwMCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tcGxheSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTMgMTAuMDk4TDIyLjQ0MyAxNiAxMyAyMS45MDJ6bTEgMS44MDR2OC4xOTZMMjAuNTU3IDE2eicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXBsdXMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00xNS41IDE1LjV2LTVoMXY1aDV2MWgtNXY1aC0xdi01aC01di0xeicgZmlsbD0nJTIzMDAwJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1yYW5kb20ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTE1LjExOCAxMWEyLjUgMi41IDAgMDAtMS4zMzUuMzg2TDExLjIyOCAxM0gxOC41djFoLTguNDk3YS41MTIuNTEyIDAgMDAtLjAwMy4wNTFWMjAuNWMwIC4yNzguMjIzLjUuNDk3LjVoNy42MjhhLjQ5OC40OTggMCAwMC4zMjgtLjEyM2wzLjIwNi0yLjgwNWExIDEgMCAwMC4zNDEtLjc1M1YxMS41YS41LjUgMCAwMC0uNS0uNXptLTEuODY5LS40NmEzLjUgMy41IDAgMDExLjg3LS41NEgyMS41YTEuNSAxLjUgMCAwMTEuNSAxLjV2NS44MmEyIDIgMCAwMS0uNjgzIDEuNTA0bC0zLjIwNSAyLjgwNWMtLjI3NC4yNC0uNjI0LjM3MS0uOTg3LjM3MWgtNy42MjdDOS42NjggMjIgOSAyMS4zMjcgOSAyMC41di02LjQ0OWExLjUgMS41IDAgMDEuNjk5LTEuMjY4eicgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0NwYXRoIGQ9J00xMyAxNmExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6TTE3IDE2YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHpNMTcgMTlhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwek0xMyAxOWExIDEgMCAxMS0yIDAgMSAxIDAgMDEyIDB6Jy8lM0UlM0NnIGNsaXAtcnVsZT0nZXZlbm9kZCcgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ3BhdGggZD0nTTIyLjQwNyAxMC43MWEuNS41IDAgMDEtLjExNi42OTdsLTMuNSAyLjVhLjUuNSAwIDAxLS41ODItLjgxNGwzLjUtMi41YS41LjUgMCAwMS42OTguMTE2eicvJTNFJTNDcGF0aCBkPSdNMTggMjF2LThoMXY4eicvJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXJlY2VudCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyUzRSUzQ3BhdGggZD0nTTE1IDEydjVoNXYtMWgtNHYtNHonLyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMjQgMTZhOCA4IDAgMTEtMTYgMCA4IDggMCAwMTE2IDB6bS0xIDBhNyA3IDAgMTEtMTQgMCA3IDcgMCAwMTE0IDB6JyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tcmVzaXplLXRvLWZpdCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyUzRSUzQ3BhdGggZD0nTTguNjQ2IDkuMzU0TDEyLjI5MyAxM0gxMHYxaDR2LTRoLTF2Mi4yOTNMOS4zNTQgOC42NDZ6TTE5LjcwNyAxM2wzLjY0Ny0zLjY0Ni0uNzA3LS43MDhMMTkgMTIuMjkzVjEwaC0xdjRoNHYtMXpNMTkuNzA3IDE5bDMuNjQ3IDMuNjQ2LS43MDcuNzA4TDE5IDE5LjcwN1YyMmgtMXYtNGg0djF6TTEyLjI5MyAxOWwtMy42NDcgMy42NDYuNzA4LjcwOEwxMyAxOS43MDdWMjJoMXYtNGgtNHYxeicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1yZXNvbHZlLWZpbGxlZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTYgMjRhOCA4IDAgMTAwLTE2IDggOCAwIDAwMCAxNnptMy45MTEtOS42MzVsLS44MjItLjczLTMuNjEzIDQuMDY0LTIuNTg3LTIuNTg4LS43NzguNzc4IDMuNDEzIDMuNDEyeicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXJlc29sdmUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J00xOS45MTEgMTQuMzY1bC0uODIyLS43My0zLjYxMyA0LjA2My0yLjU4Ny0yLjU4Ny0uNzc4Ljc3OCAzLjQxMyAzLjQxMnonLyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMjQgMTZhOCA4IDAgMTEtMTYgMCA4IDggMCAwMTE2IDB6bS0xIDBhNyA3IDAgMTEtMTQgMCA3IDcgMCAwMTE0IDB6JyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tcmV2ZXJzZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTUuODU0IDguNjQ2TDE4LjIwNyAxMWwtMi4zNTMgMi4zNTQtLjcwOC0uNzA4IDEuMTQ3LTEuMTQ2SDE0Yy0uNTAzIDAtMS4yNy4xNTUtMS44OTUuNjA2LS42LjQzMi0xLjEwNSAxLjE1Ny0xLjEwNSAyLjM5NHY3LjI1aC0xVjE0LjVjMC0xLjU2My42NjItMi41ODggMS41Mi0zLjIwNi44MzMtLjYgMS44MTctLjc5NCAyLjQ4LS43OTRoMi4yOTNsLTEuMTQ3LTEuMTQ2ek0yMiAxMHY3LjI1YzAgMS41NjMtLjY2MiAyLjU4OC0xLjUyIDMuMjA2LS44MzMuNi0xLjgxNy43OTQtMi40OC43OTRoLTIuMjkzbDEuMTQ3IDEuMTQ2LS43MDguNzA4LTIuMzUzLTIuMzU0IDIuMzUzLTIuMzU0LjcwOC43MDgtMS4xNDcgMS4xNDZIMThjLjUwMyAwIDEuMjctLjE1NSAxLjg5NS0uNjA2LjYtLjQzMiAxLjEwNS0xLjE1NyAxLjEwNS0yLjM5NFYxMHonIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1zZWFyY2gtbGFyZ2Uge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTE4Ljg3NCAxOS41ODFhNiA2IDAgMTEuNzA3LS43MDdsNC4yNzMgNC4yNzItLjcwOC43MDh6TTIwIDE1YTUgNSAwIDExLTEwIDAgNSA1IDAgMDExMCAweicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXNlYXJjaCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTguMzk3IDE4LjYwNWE0LjU1MiA0LjU1MiAwIDExLjcwNy0uNzA3bDMuMjUgMy4yNDktLjcwOC43MDd6bS43MDYtMy41NTNhMy41NTIgMy41NTIgMCAxMS03LjEwMyAwIDMuNTUyIDMuNTUyIDAgMDE3LjEwMyAweicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXNldHRpbmdzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ3BhdGggZD0nTTE2Ljk1NCA5LjkyOGwtLjEzOS0uMzMxQzE2LjYzNSA5LjE2NSAxNi4zMDEgOSAxNiA5cy0uNjM1LjE2NS0uODE1LjU5N2wtLjEzOS4zMzFjLS41NiAxLjM0My0xLjk5MiAyLjEzLTMuNDI1IDEuNzJsLS41LS4xNDRjLS4zMDktLjA4OC0uNjA2LjAyNS0uODE1LjMyN2ExLjA1IDEuMDUgMCAwMC0uMDQ5IDEuMTIzYy43NDMgMS4zMjMuNDAyIDMuMDY4LS44NiAzLjk1LS4zMTguMjIyLS40NTYuNjE0LS4zNzUgMS4wMjQuMDgxLjQwOS4zNDIuNjY4LjY3My43MjNsLjE5NS4wMzNjMS41MjUuMjUzIDIuNTEgMS42ODcgMi40MjMgMy4xOC0uMDMuNTAzLjIyLjg2MS41MiAxLjAyOC4yODguMTYxLjYyMy4xNTUuOTIxLS4xMDhsLjM3My0uMzNhMi44IDIuOCAwIDAxMy43NDYgMGwuMzczLjMzYy4yOTguMjY0LjYzMy4yNy45MjIuMTA4LjMtLjE2Ny41NDktLjUyNS41Mi0xLjAyOC0uMDg4LTEuNDkzLjg5Ny0yLjkyNyAyLjQyMy0zLjE4bC4xOTQtLjAzM2MuMzMtLjA1NS41OTItLjMxNC42NzMtLjcyMy4wODEtLjQxLS4wNTctLjgwMi0uMzc1LTEuMDI0LTEuMjYyLS44ODItMS42MDMtMi42MjctLjg2LTMuOTVhMS4wNSAxLjA1IDAgMDAtLjA1LTEuMTIzYy0uMjA4LS4zMDItLjUwNS0uNDE1LS44MTUtLjMyN2wtLjQ5OS4xNDNjLTEuNDMzLjQxLTIuODY1LS4zNzYtMy40MjUtMS43MTl6bS43ODQtLjcxN2MtLjY3NC0xLjYxNS0yLjgwMi0xLjYxNS0zLjQ3NiAwbC0uMTM4LjMzMmMtLjM4My45MTctMS4zMjYgMS40MDEtMi4yMjggMS4xNDNsLS40OTktLjE0M2MtMS41NzUtLjQ1LTIuODU1IDEuMzk4LTIuMDEyIDIuOS41MDUuOS4yNTcgMi4wNy0uNTYgMi42NC0xLjM5Mi45NzMtLjkzMyAzLjI4Mi43MDYgMy41NTVsLjE5NS4wMzJjLjk2LjE2IDEuNjUgMS4wOSAxLjU4OCAyLjEzNS0uMTA0IDEuNzg4IDEuODIgMi44NjQgMy4xMDMgMS43MjdsLjM3My0uMzNhMS44IDEuOCAwIDAxMi40MiAwbC4zNzMuMzNjMS4yODQgMS4xMzcgMy4yMDcuMDYxIDMuMTAzLTEuNzI3LS4wNjEtMS4wNDYuNjI4LTEuOTc1IDEuNTg5LTIuMTM1bC4xOTQtLjAzMmMxLjYzOS0uMjczIDIuMDk4LTIuNTgyLjcwNy0zLjU1NC0uODE4LS41NzItMS4wNjYtMS43NDItLjU2MS0yLjY0Ljg0My0xLjUwMy0uNDM3LTMuMzUyLTIuMDEyLTIuOTAxbC0uNS4xNDNjLS45LjI1OC0xLjg0NC0uMjI2LTIuMjI2LTEuMTQzeicvJTNFJTNDcGF0aCBkPSdNMTYgMTguNWEyIDIgMCAxMDAtNCAyIDIgMCAwMDAgNHptMCAxYTMgMyAwIDEwMC02IDMgMyAwIDAwMCA2eicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1zaGFyZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMjAgOS41YTMuNSAzLjUgMCAwMC0xLjM4MyA2LjcxNkE0LjUxMyA0LjUxMyAwIDAwMTYgMTguNDM2YTQuNTEzIDQuNTEzIDAgMDAtMi42MTgtMi4yMiAzLjUwMSAzLjUwMSAwIDEwLTIuNzY0IDBBNC41MDIgNC41MDIgMCAwMDcuNSAyMC41VjIyaDE3di0xLjVjMC0yLjAwMy0xLjMwOS0zLjctMy4xMTgtNC4yODRBMy41MDEgMy41MDEgMCAwMDIwIDkuNXpNMTcuNSAxM2EyLjUgMi41IDAgMTE1IDAgMi41IDIuNSAwIDAxLTUgMHptLTEgOHYtLjVhMy41IDMuNSAwIDExNyAwdi41em0tMS0uNXYuNWgtN3YtLjVhMy41IDMuNSAwIDExNyAwem0tNi03LjVhMi41IDIuNSAwIDExNSAwIDIuNSAyLjUgMCAwMS01IDB6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tc21pbGV5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBmaWxsPSclMjMwMDAnJTNFJTNDcGF0aCBkPSdNMTYgMjBhNC4wMDIgNC4wMDIgMCAwMS0zLjg3NC0zaDEuMDQ1YTMuMDAxIDMuMDAxIDAgMDA1LjY1OCAwaDEuMDQ1QTQuMDAyIDQuMDAyIDAgMDExNiAyMHpNMTkuNSAxNC4xMjVhLjg3NS44NzUgMCAxMS0xLjc1IDAgLjg3NS44NzUgMCAwMTEuNzUgMHpNMTMuMTI1IDE1YS44NzUuODc1IDAgMTAwLTEuNzUuODc1Ljg3NSAwIDAwMCAxLjc1eicvJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00yNCAxNmE4IDggMCAxMS0xNiAwIDggOCAwIDAxMTYgMHptLTEgMGE3IDcgMCAxMS0xNCAwIDcgNyAwIDAxMTQgMHonIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1zb3J0LWFscGhhLWFzYyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgY2xpcC1ydWxlPSdldmVub2RkJyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCclM0UlM0NwYXRoIGQ9J00xMC44OTcgOUw5IDE0aDEuMDdsLjM3OS0xaDIuMTMzbC4zMzggMWgxLjA1NmwtMS42OS01em0xLjM0NyAzbC0uNjY3LTEuOTczTDEwLjgyOCAxMnpNMTIuNTUzIDE5SDkuNXYtMUgxNHYuOTc5TDEwLjkzMiAyMkgxNHYxSDkuNXYtLjk5M3pNMjAuNSA4LjI5M2wzLjM1NCAzLjM1My0uNzA4LjcwOEwyMSAxMC4yMDdWMjNoLTFWMTAuMjA3bC0yLjE0NiAyLjE0Ny0uNzA4LS43MDh6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXNvcnQtYWxwaGEtZHNjIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ3BhdGggZD0nTTEwLjg5NyA5TDkgMTRoMS4wN2wuMzc5LTFoMi4xMzNsLjMzOCAxaDEuMDU2bC0xLjY5LTV6bTEuMzQ3IDNsLS42NjctMS45NzNMMTAuODI4IDEyek0xMi41NTMgMTlIOS41di0xSDE0di45NzlMMTAuOTMyIDIySDE0djFIOS41di0uOTkzek0yMCAyMS43OTNWOWgxdjEyLjc5M2wyLjE0Ni0yLjE0Ny43MDguNzA4LTMuMzU0IDMuMzUzLTMuMzU0LTMuMzUzLjcwOC0uNzA4eicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1zb3J0LXRvcC1ib3R0b20ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTIwLjQ1IDEySDEwdi0xaDEwLjQ1Yy45NyAwIDEuMzcyIDEuMjQ0LjU4NCAxLjgxMkwxMS4wNSAyMGg5LjI0M2wtMS42NDctMS42NDYuNzA4LS43MDggMi44NTMgMi44NTQtMi44NTMgMi44NTQtLjcwOC0uNzA4TDIwLjI5MyAyMUgxMS4wNWMtLjk3IDAtMS4zNzItMS4yNDQtLjU4NC0xLjgxMnonIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1zcGFjaW5nIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMjIgMTFoLTJ2MTBoMnYxaC0zVjEwaDN6bS0xMC0xdjEySDl2LTFoMlYxMUg5di0xem00IDNoLTF2NmgxeicgZmlsbD0nJTIzMDAwJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1zcGlubmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNS4xNjUgOC41M2EuNS41IDAgMDEtLjQwNC41OEE3IDcgMCAxMDIzIDE2YS41LjUgMCAwMTEgMCA4IDggMCAxMS05LjQxNi03Ljg3NC41LjUgMCAwMS41OC40MDR6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tc3Rhci1vZmYge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTE4IDE0LjAwNEwxNiA4bC0yIDYuMDA0SDhMMTIuOTYgMThsLTEuOTA0IDZMMTYgMjBsNC45NDQgNC0xLjkwNC02TDI0IDE0em0zLjE2NS45OThsLTMuODg2LjAwMkwxNiAxMS4xNjRsLTEuMjggMy44NGgtMy44ODVsMy4yODUgMi42NDYtMS4xMDMgMy40NzdMMTYgMTguNzE0bDIuOTgzIDIuNDEzLTEuMTAzLTMuNDc2eicgZmlsbD0nJTIzMDAwJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXN0YXItb24ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00xNiA4bDIgNi4wMDRMMjQgMTRsLTQuOTYgNCAxLjkwNCA2TDE2IDIwbC00Ljk0NCA0IDEuOTA0LTZMOCAxNC4wMDRoNnonIGZpbGw9JyUyMzAwMCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tc3Ryb2tlLXdlaWdodCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTAgMTBoMTJ2MUgxMHptMCA0aDEydjJIMTB6bTEyIDVIMTB2M2gxMnonIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS1zdHlsZXMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J00xMS41IDEzYTEuNSAxLjUgMCAxMDMgMCAxLjUgMS41IDAgMDAtMyAwek0xNy41IDEzYTEuNSAxLjUgMCAxMDMgMCAxLjUgMS41IDAgMDAtMyAwek0xOSAyMC41YTEuNSAxLjUgMCAxMTAtMyAxLjUgMS41IDAgMDEwIDN6TTExLjUgMTlhMS41IDEuNSAwIDEwMyAwIDEuNSAxLjUgMCAwMC0zIDB6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXN3YXAge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J00yMyAxMy4xODhsLTEuMTc1IDEuNDY4YTUuNSA1LjUgMCAwMC0xMC4wMDMtMi4yMTlsLjgzLjU1N2E0LjUgNC41IDAgMDE4LjIxNiAyLjA1N2wtMi4yLTEuNDY3LS41NTUuODMyIDMuMzgxIDIuMjU0IDIuMjg3LTIuODU4ek05IDE3LjE4OGwuNzguNjI0IDEuMTc2LTEuNDY4LjAyNi4xNTZhNS41IDUuNSAwIDAwOS45NzYgMi4wNjV2LS4wMDJsLS44My0uNTU3LS4wMDEuMDAxYTQuNSA0LjUgMCAwMS04LjIxNC0yLjA1OGwyLjIgMS40NjcuNTU1LS44MzItMy4zODItMi4yNTR6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXRoZW1lIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBmaWxsPSclMjMwMDAnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xMyAxMGgtM3YxMmgzem0tMy0xYTEgMSAwIDAwLTEgMXYxMmExIDEgMCAwMDEgMWgzYTEgMSAwIDAwMS0xVjEwYTEgMSAwIDAwLTEtMXonIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDcGF0aCBkPSdNMTAuNzUgMjAuNWEuNzUuNzUgMCAxMTEuNSAwIC43NS43NSAwIDAxLTEuNSAwek0yMiAxOGExIDEgMCAwMTEgMXYzYTEgMSAwIDAxLTEgMWgtN3YtMWg3di0zaC03di0xek0xOC4zODUgMTdsMi43NTctMi43NTdhMSAxIDAgMDAwLTEuNDE1bC0yLjEyMS0yLjEyYTEgMSAwIDAwLTEuNDE0IDBMMTUgMTMuMzEzdjEuNDE0bDMuMzE0LTMuMzE0IDIuMTIxIDIuMTIyTDE2Ljk3MSAxN3onLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tdGlkeS11cC1ncmlkIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBmaWxsPSclMjMwMDAnJTNFJTNDcGF0aCBkPSdNMTAgMTBoMnYyaC0yek0yMCAxMGgydjJoLTJ6TTEyIDE1aC0ydjJoMnpNMjAgMTVoMnYyaC0yek0xMiAyMGgtMnYyaDJ6TTIwIDIwaDJ2MmgtMnpNMTcgMTBoLTJ2Mmgyek0xNSAxNWgydjJoLTJ6TTE3IDIwaC0ydjJoMnonLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tdGlkeS11cC1saXN0LWhvcml6b250YWwge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J00xMCAyMi41di0xM2gydjEzek0xNSAyMi41di0xM2gydjEzek0yMCA5LjV2MTNoMnYtMTN6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXRpZHktdXAtbGlzdC12ZXJ0aWNhbCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyUzRSUzQ3BhdGggZD0nTTkuNSAxMGgxM3YyaC0xM3pNOS41IDE1aDEzdjJoLTEzek0yMi41IDIwaC0xM3YyaDEzeicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS10aW1lciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIGZpbGw9J25vbmUnIGhlaWdodD0nMzInIHdpZHRoPSczMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2cgZmlsbD0nJTIzMDAwJyUzRSUzQ3BhdGggZD0nTTE5IDhoLTZWN2g2ek0xNi41IDE3di01aC0xdjVhLjUuNSAwIDAwMSAweicvJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00yMi43MTUgMTIuNjVsMS41MjctMS41MjlMMjIuMTIyIDlsLTEuNDgzIDEuNDgyYTggOCAwIDEwMi4wNzUgMi4xNjd6TTIzIDE3YTcgNyAwIDExLTIuMzg0LTUuMjYzbC42NDcuNjQ3QTYuOTc0IDYuOTc0IDAgMDEyMyAxN3ptLTEuMDA4LTUuM2wuMTMuMTI4LjcwNi0uNzA3LS43MDctLjcwNy0uNzAxLjcwMWMuMi4xODUuMzkxLjM4LjU3Mi41ODV6JyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi0tdHJhc2gge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J00xNCAxOC41di00aDF2NHpNMTcgMTguNXYtNGgxdjR6Jy8lM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTE5IDEwLjVhMiAyIDAgMDAtMi0yaC0yYTIgMiAwIDAwLTIgMmgtM3YxaDF2MTBhMiAyIDAgMDAyIDJoNmEyIDIgMCAwMDItMnYtMTBoMXYtMXptLTQtMWExIDEgMCAwMC0xIDFoNGExIDEgMCAwMC0xLTF6bTUgMmgtOHYxMGExIDEgMCAwMDEgMWg2YTEgMSAwIDAwMS0xeicgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcXFwiKTtcXG59XFxuXFxuLmljb24tLXZlcnRpY2FsLXBhZGRpbmcge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyBmaWxsPSdub25lJyBoZWlnaHQ9JzMyJyB3aWR0aD0nMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMCclM0UlM0NwYXRoIGQ9J005IDloMTR2MUg5em0wIDEzaDE0djFIOXonLyUzRSUzQ3BhdGggY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNMTkgMTNoLTZ2Nmg2em0tNy0xdjhoOHYtOHonIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS12aXNpYmxlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZyBmaWxsPSclMjMwMDAnJTNFJTNDcGF0aCBkPSdNMTYgMThhMiAyIDAgMTAwLTQgMiAyIDAgMDAwIDR6Jy8lM0UlM0NwYXRoIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTE2IDEyYTcuNDk5IDcuNDk5IDAgMDE2LjYzNSA0QTcuNDk5IDcuNDk5IDAgMDExNiAyMGE3LjQ5OSA3LjQ5OSAwIDAxLTYuNjM1LTRBNy40OTkgNy40OTkgMCAwMTE2IDEyem0wIDdhNi40OTUgNi40OTUgMCAwMS01LjQ3OC0zQTYuNDk1IDYuNDk1IDAgMDExNiAxM2MyLjMgMCA0LjMyMiAxLjE5NCA1LjQ3OCAzQTYuNDk1IDYuNDk1IDAgMDExNiAxOXonIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS13YXJuaW5nLWxhcmdlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNiA2bDEwIDE4SDZ6bS0xIDExdi00aDJ2NHptMCAydjJoMnYtMnonIGZpbGw9JyUyMzAwMCcgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVxcblxcbi5pY29uLS13YXJuaW5nIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgZmlsbD0nbm9uZScgaGVpZ2h0PSczMicgd2lkdGg9JzMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xNiA5bDggMTRIOHptLTEgOC41VjE0aDJ2My41em0wIDEuNXYyaDJ2LTJ6JyBmaWxsPSclMjMwMDAnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cXG5cXG4uaWNvbi1idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiB2YXIoLS1zaXplLW1lZGl1bSk7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUtbWVkaXVtKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtc21hbGwpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5pY29uLWJ1dHRvbiAqIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NTAwJSkgaHVlLXJvdGF0ZSgxMTdkZWcpIGJyaWdodG5lc3MoMTA5JSkgY29udHJhc3QoMTA1JSk7XFxuICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzUwMCUpIGh1ZS1yb3RhdGUoMTE3ZGVnKSBicmlnaHRuZXNzKDEwOSUpIGNvbnRyYXN0KDEwNSUpO1xcbn1cXG5cXG4uaWNvbi1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0taG92ZXItZmlsbCk7XFxufVxcblxcbi5pY29uLWJ1dHRvbjphY3RpdmUsIC5pY29uLWJ1dHRvbjpmb2N1cyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibHVlKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5pY29uLWJ1dHRvbi0tc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbi5pY29uLWJ1dHRvbi0tc2VsZWN0ZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbi5pY29uLWJ1dHRvbi0tc2VsZWN0ZWQ6YWN0aXZlLCAuaWNvbi1idXR0b24tLXNlbGVjdGVkOmZvY3VzIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrMyk7XFxufVxcblxcbi5pY29uLWJ1dHRvbi0tc2VsZWN0ZWQgKiB7XFxuICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDEwMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDI2OWRlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCgxMDQlKTtcXG4gICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMjY5ZGVnKSBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDEwNCUpO1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaW5wdXRfX2ZpZWxkIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzbWFsbCk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcXG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1mb250LWxldHRlci1zcGFjaW5nLW5lZy14c21hbGwpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzBweDtcXG4gIG1hcmdpbjogMXB4IDAgMXB4IDA7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXh4c21hbGwpIHZhcigtLXNpemUteHh4c21hbGwpIHZhcigtLXNpemUteHhzbWFsbCkgdmFyKC0tc2l6ZS14eHNtYWxsKTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazgpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXNtYWxsKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5pbnB1dF9fZmllbGQ6aG92ZXIsIC5pbnB1dF9fZmllbGQ6cGxhY2Vob2xkZXItc2hvd246aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrOCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjazEpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG59XFxuXFxuLmlucHV0X19maWVsZDo6LW1vei1zZWxlY3Rpb24ge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUzKTtcXG59XFxuXFxuLmlucHV0X19maWVsZDo6c2VsZWN0aW9uIHtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlMyk7XFxufVxcblxcbi5pbnB1dF9fZmllbGQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrMyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmlucHV0X19maWVsZDo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tYmxhY2szKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uaW5wdXRfX2ZpZWxkOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tYmxhY2szKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uaW5wdXRfX2ZpZWxkOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrMyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmlucHV0X19maWVsZDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrMyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmlucHV0X19maWVsZDpwbGFjZWhvbGRlci1zaG93biB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjazEpO1xcbn1cXG5cXG4uaW5wdXRfX2ZpZWxkOmZvY3VzOnBsYWNlaG9sZGVyLXNob3duIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxufVxcblxcbi5pbnB1dF9fZmllbGQ6ZGlzYWJsZWQ6aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5pbnB1dF9fZmllbGQ6YWN0aXZlLCAuaW5wdXRfX2ZpZWxkOmZvY3VzIHtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcbn1cXG5cXG4uaW5wdXRfX2ZpZWxkOmRpc2FibGVkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazMpO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmlucHV0X19maWVsZDpkaXNhYmxlZDphY3RpdmUge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmlucHV0LS13aXRoLWljb24gLmlucHV0X19maWVsZCB7XFxuICBwYWRkaW5nLWxlZnQ6IDMycHg7XFxufVxcblxcbi5pbnB1dCAuaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDBweDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogdmFyKC0tc2l6ZS1tZWRpdW0pO1xcbiAgaGVpZ2h0OiB2YXIoLS1zaXplLW1lZGl1bSk7XFxuICB6LWluZGV4OiAxO1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5cXG4ubGFiZWwge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHNtYWxsKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWZvbnQtbGV0dGVyLXNwYWNpbmctcG9zLXhzbWFsbCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQpO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrMyk7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUtbWVkaXVtKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcGFkZGluZzogMCB2YXIoLS1zaXplLXh4eHNtYWxsKSAwIHZhcigtLXNpemUteHhzbWFsbCk7XFxufVxcblxcbi5vbmJvYXJkaW5nLXRpcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IHRvcDtcXG4gIHBhZGRpbmc6IDAgdmFyKC0tc2l6ZS14c21hbGwpIDAgMDtcXG59XFxuXFxuLm9uYm9hcmRpbmctdGlwIC5pY29uIHtcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tc2l6ZS14eHNtYWxsKTtcXG59XFxuXFxuLm9uYm9hcmRpbmctdGlwX19tc2cge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS14eHNtYWxsKSAwIHZhcigtLXNpemUteHhzbWFsbCkgMDtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzbWFsbCk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcXG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1mb250LWxldHRlci1zcGFjaW5nLXBvcy14c21hbGwpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazgpO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucmFkaW8ge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUtbWVkaXVtKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnJhZGlvX19idXR0b24ge1xcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnJhZGlvX19idXR0b246Y2hlY2tlZCArIC5yYWRpb19fbGFiZWw6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD1cXFwiNlxcXCIgaGVpZ2h0PVxcXCI2XFxcIiB2aWV3Qm94PVxcXCIwIDAgNiA2XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiJTNFJTNDcmVjdCB3aWR0aD1cXFwiNlxcXCIgaGVpZ2h0PVxcXCI2XFxcIiByeD1cXFwiM1xcXCIgZmlsbD1cXFwiYmxhY2tcXFwiIGZpbGwtb3BhY2l0eT1cXFwiMC44XFxcIi8lM0UlM0Mvc3ZnJTNFJTBBJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMnB4IDJweDtcXG59XFxuXFxuLnJhZGlvX19idXR0b246ZGlzYWJsZWQgKyAucmFkaW9fX2xhYmVsIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuXFxuLnJhZGlvX19idXR0b246Y2hlY2tlZDpkaXNhYmxlZCArIC5yYWRpb19fbGFiZWw6YmVmb3JlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG59XFxuXFxuLnJhZGlvX19sYWJlbCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrOCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3RhY2spO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHNtYWxsKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWZvbnQtbGluZS1oZWlnaHQpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWZvbnQtbGV0dGVyLXNwYWNpbmctcG9zLXhzbWFsbCk7XFxuICBtYXJnaW4tbGVmdDogLTE2cHg7XFxuICBwYWRkaW5nOiAwIHZhcigtLXNpemUteHNtYWxsKSAwIHZhcigtLXNpemUtc21hbGwpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnJhZGlvX19sYWJlbDpiZWZvcmUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2s4KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtc21hbGwpO1xcbiAgY29udGVudDogJyc7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgbWFyZ2luOiAycHggMTBweCAwIC04cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5zZWN0aW9uLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzbWFsbCk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XFxuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tZm9udC1sZXR0ZXItc3BhY2luZy1wb3MteHNtYWxsKTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodCk7XFxuICBjb2xvcjogdmFyKC0tYmxhY2s4KTtcXG4gIGhlaWdodDogdmFyKC0tc2l6ZS1tZWRpdW0pO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBwYWRkaW5nOiAwIGNhbGModmFyKC0tc2l6ZS14eHNtYWxsKSAvIDIpIDAgdmFyKC0tc2l6ZS14eHNtYWxsKTtcXG59XFxuXFxuc2VsZWN0LnNlbGVjdC1tZW51IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zZWxlY3QtbWVudSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zZWxlY3QtbWVudV9fYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMXB4IDAgMXB4IDA7XFxuICBwYWRkaW5nOiAwcHggdmFyKC0tc2l6ZS14eHNtYWxsKSAwcHggdmFyKC0tc2l6ZS14eHNtYWxsKTtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtc21hbGwpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4uc2VsZWN0LW1lbnVfX2J1dHRvbjpob3ZlciB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWJsYWNrMSk7XFxufVxcblxcbi5zZWxlY3QtbWVudV9fYnV0dG9uOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxufVxcblxcbi5zZWxlY3QtbWVudV9fYnV0dG9uOmRpc2FibGVkOmhvdmVyIHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5zZWxlY3QtbWVudV9fYnV0dG9uICoge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5zZWxlY3QtbWVudV9fYnV0dG9uOmhvdmVyIC5zZWxlY3QtbWVudV9fbGFiZWwtLXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazgpO1xcbn1cXG5cXG4uc2VsZWN0LW1lbnVfX2J1dHRvbjpmb2N1cyAuc2VsZWN0LW1lbnVfX2xhYmVsLS1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tYmxhY2s4KTtcXG59XFxuXFxuLnNlbGVjdC1tZW51X19idXR0b246ZGlzYWJsZWQ6aG92ZXIgLnNlbGVjdC1tZW51X19sYWJlbC0tcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrMyk7XFxufVxcblxcbi5zZWxlY3QtbWVudV9fYnV0dG9uOmhvdmVyIC5zZWxlY3QtbWVudV9fY2FyZXQsIC5zZWxlY3QtbWVudV9fYnV0dG9uOmZvY3VzIC5zZWxlY3QtbWVudV9fY2FyZXQge1xcbiAgb3BhY2l0eTogMS4wO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5zZWxlY3QtbWVudV9fYnV0dG9uOmRpc2FibGVkOmhvdmVyIC5zZWxlY3QtbWVudV9fY2FyZXQge1xcbiAgb3BhY2l0eTogMC4zO1xcbiAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xcbn1cXG5cXG4uc2VsZWN0LW1lbnVfX2J1dHRvbjpkaXNhYmxlZCAuc2VsZWN0LW1lbnVfX2xhYmVsIHtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazMpO1xcbn1cXG5cXG4uc2VsZWN0LW1lbnVfX2xhYmVsIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzbWFsbCk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcXG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1mb250LWxldHRlci1zcGFjaW5nLW5lZy14c21hbGwpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazgpO1xcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxuICBtYXJnaW4tdG9wOiAtMnB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4uc2VsZWN0LW1lbnVfX2xhYmVsLS1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tYmxhY2szKTtcXG59XFxuXFxuLnNlbGVjdC1tZW51X19jYXJldCB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLXRvcDogLTFweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMTJweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsJTNDc3ZnJTIwZmlsbCUzRCUyMm5vbmUlMjIlMjBoZWlnaHQlM0QlMjIzMCUyMiUyMHZpZXdCb3glM0QlMjIwJTIwMCUyMDMwJTIwMzAlMjIlMjB3aWR0aCUzRCUyMjMwJTIyJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIlM0UlM0NwYXRoJTIwY2xpcC1ydWxlJTNEJTIyZXZlbm9kZCUyMiUyMGQlM0QlMjJtMTUlMjAxNi43MDcxLTMtMyUyMC43MDcxLS43MDcxJTIwMi42NDY1JTIwMi42NDY0JTIwMi42NDY0LTIuNjQ2NC43MDcxLjcwNzEtMyUyMDMtLjM1MzUuMzUzNnolMjIlMjBmaWxsJTNEJTIyJTIzMDAwJTIyJTIwZmlsbC1ydWxlJTNEJTIyZXZlbm9kZCUyMiUyRiUzRSUzQyUyRnN2ZyUzRVxcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcblxcbi5zZWxlY3QtbWVudSAuaWNvbiB7XFxuICBtYXJnaW4tbGVmdDogLThweDtcXG4gIG1hcmdpbi10b3A6IC0ycHg7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcblxcbi5zZWxlY3QtbWVudV9fbWVudSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taHVkKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1odWQpO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS14eHNtYWxsKSAwIHZhcigtLXNpemUteHhzbWFsbCkgMDtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtc21hbGwpO1xcbiAgbWFyZ2luOiAwO1xcbiAgei1pbmRleDogMTAwMDtcXG4gIG92ZXJmbG93LXg6IG92ZXJsYXk7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uc2VsZWN0LW1lbnVfX21lbnUtLWFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnNlbGVjdC1tZW51X19tZW51Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUVBQUFBQkNBUUFBQUMxSEF3Q0FBQUFDMGxFUVZSNDJtTmtZQUFBQUFZQUFqQ0IwQzhBQUFBQVNVVk9SSzVDWUlJPSk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XFxufVxcblxcbi5zZWxlY3QtbWVudV9fbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYm9yZGVyOiBzb2xpZCAzcHggdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAxMHB4IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc2VsZWN0LW1lbnVfX21lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlcjogc29saWQgM3B4IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxufVxcblxcbi5zZWxlY3QtbWVudV9faXRlbSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zdGFjayk7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcXG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1mb250LWxldHRlci1zcGFjaW5nLW5lZy14c21hbGwpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWZvbnQtbGluZS1oZWlnaHQpO1xcbiAgaGVpZ2h0OiB2YXIoLS1zaXplLXNtYWxsKTtcXG4gIHBhZGRpbmc6IDBweCB2YXIoLS1zaXplLXhzbWFsbCkgMHB4IHZhcigtLXNpemUteHhzbWFsbCk7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnNlbGVjdC1tZW51X19pdGVtLS1zZWxlY3RlZCAuc2VsZWN0LW1lbnVfX2l0ZW0taWNvbiB7XFxuICBvcGFjaXR5OiAxLjA7XFxufVxcblxcbi5zZWxlY3QtbWVudV9faXRlbS1sYWJlbCB7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnNlbGVjdC1tZW51X19pdGVtLWljb24ge1xcbiAgd2lkdGg6IHZhcigtLXNpemUteHNtYWxsKTtcXG4gIGhlaWdodDogdmFyKC0tc2l6ZS14c21hbGwpO1xcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zaXplLXh4c21hbGwpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCwlM0NzdmclMjBmaWxsJTNEJTIybm9uZSUyMiUyMGhlaWdodCUzRCUyMjE2JTIyJTIwdmlld0JveCUzRCUyMjAlMjAwJTIwMTYlMjAxNiUyMiUyMHdpZHRoJTNEJTIyMTYlMjIlMjB4bWxucyUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyUyMiUzRSUzQ3BhdGglMjBjbGlwLXJ1bGUlM0QlMjJldmVub2RkJTIyJTIwZCUzRCUyMm0xMy4yMDY5JTIwNS4yMDcyNC01LjUwMDAyJTIwNS40OTk5Ni0uNzA3MTEuNzA3Mi0uNzA3MTEtLjcwNzItMy0yLjk5OTk2JTIwMS40MTQyMi0xLjQxNDIxJTIwMi4yOTI4OSUyMDIuMjkyODklMjA0Ljc5MjkzLTQuNzkyODl6JTIyJTIwZmlsbCUzRCUyMiUyM2ZmZiUyMiUyMGZpbGwtcnVsZSUzRCUyMmV2ZW5vZGQlMjIlMkYlM0UlM0MlMkZzdmclM0VcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbn1cXG5cXG4uc2VsZWN0LW1lbnUtLWhpZ2hsaWdodCwgLnNlbGVjdC1tZW51X19pdGVtOmhvdmVyLCAuc2VsZWN0LW1lbnVfX2l0ZW06Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbi5zZWxlY3QtbWVudV9fZGl2aWRlci1sYWJlbCB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcXG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1mb250LWxldHRlci1zcGFjaW5nLW5lZy1zbWFsbCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUtc21hbGwpO1xcbiAgcGFkZGluZzogMCB2YXIoLS1zaXplLXh4c21hbGwpIDAgdmFyKC0tc2l6ZS1tZWRpdW0pO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlNCk7XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4uc2VsZWN0LW1lbnVfX2RpdmlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUyKTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IDhweCAwIDdweCAwO1xcbn1cXG5cXG4uc3dpdGNoIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiB2YXIoLS1zaXplLW1lZGl1bSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAvKlxcbiAgICAmX190b2dnbGU6Zm9jdXMgKyAmX19sYWJlbDpiZWZvcmUge1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHZhcigtLWJsdWUpO1xcbiAgICB9XFxuICAgICovXFxufVxcblxcbi5zd2l0Y2hfX3RvZ2dsZSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uc3dpdGNoX190b2dnbGU6Y2hlY2tlZCArIC5zd2l0Y2hfX2xhYmVsOmJlZm9yZSB7XFxuICBjb2xvcjogdmFyKC0tYmxhY2s4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrOC1vcGFxdWUpO1xcbn1cXG5cXG4uc3dpdGNoX190b2dnbGU6Y2hlY2tlZCArIC5zd2l0Y2hfX2xhYmVsOmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMnB4KTtcXG59XFxuXFxuLnN3aXRjaF9fdG9nZ2xlOmNoZWNrZWQ6ZGlzYWJsZWQgKyAuc3dpdGNoX19sYWJlbDpiZWZvcmUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbn1cXG5cXG4uc3dpdGNoX190b2dnbGU6ZGlzYWJsZWQgKyAuc3dpdGNoX19sYWJlbCB7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5cXG4uc3dpdGNoX19sYWJlbCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrOCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc3RhY2spO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHNtYWxsKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWZvbnQtbGV0dGVyLXNwYWNpbmctcG9zLXhzbWFsbCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tZm9udC1saW5lLWhlaWdodCk7XFxuICBtYXJnaW4tbGVmdDogLTE2cHg7XFxuICBwYWRkaW5nOiAwIHZhcigtLXNpemUteHNtYWxsKSAwIGNhbGModmFyKC0tc2l6ZS14bGFyZ2UpIC0gMnB4KTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5zd2l0Y2hfX2xhYmVsOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjazgtb3BhcXVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBsZWZ0OiA4cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwcHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAgMC4ycztcXG4gIHdpZHRoOiAyMnB4O1xcbn1cXG5cXG4uc3dpdGNoX19sYWJlbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjazgtb3BhcXVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBsZWZ0OiA4cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwcHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcXG4gIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG4udGV4dGFyZWEge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHNtYWxsKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWZvbnQtbGV0dGVyLXNwYWNpbmctbmVnLXhzbWFsbCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogNjJweDtcXG4gIG1hcmdpbjogMXB4IDAgMXB4IDA7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLXh4c21hbGwpIHZhcigtLXNpemUteHh4c21hbGwpIHZhcigtLXNpemUteHhzbWFsbCkgdmFyKC0tc2l6ZS14eHNtYWxsKTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazgpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2sxKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtc21hbGwpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi50ZXh0YXJlYTpob3ZlciwgLnRleHRhcmVhOnBsYWNlaG9sZGVyLXNob3duOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazgpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2sxKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxufVxcblxcbi50ZXh0YXJlYTo6LW1vei1zZWxlY3Rpb24ge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUzKTtcXG59XFxuXFxuLnRleHRhcmVhOjpzZWxlY3Rpb24ge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUzKTtcXG59XFxuXFxuLnRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazMpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tYmxhY2szKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazMpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50ZXh0YXJlYTo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjazMpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLWJsYWNrMyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnRleHRhcmVhOmZvY3VzOnBsYWNlaG9sZGVyLXNob3duIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxufVxcblxcbi50ZXh0YXJlYTphY3RpdmUsIC50ZXh0YXJlYTpmb2N1cyB7XFxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XFxuICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XFxuICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG59XFxuXFxuLnRleHRhcmVhOmRpc2FibGVkLCAudGV4dGFyZWE6ZGlzYWJsZWQ6aG92ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY29sb3I6IHZhcigtLWJsYWNrMyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnRleHRhcmVhOmRpc2FibGVkOmFjdGl2ZSB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4udHlwZSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zdGFjayk7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14c21hbGwpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tZm9udC1saW5lLWhlaWdodCk7XFxuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tZm9udC1sZXR0ZXItc3BhY2luZy1wb3MteHNtYWxsKTtcXG4gIC8qIHNpemVzICovXFxuICAvKiB3ZWlnaHRzICovXFxuICAvKiBsZXR0ZXIgc3BhY2luZyBhZGp1c3RtZW50cyBiYXNlZCBwb3MvbmVnIGFwcGxpY2F0aW9uICovXFxufVxcblxcbi50eXBlLS1zbWFsbCB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XFxuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tZm9udC1sZXR0ZXItc3BhY2luZy1wb3Mtc21hbGwpO1xcbn1cXG5cXG4udHlwZS0tbGFyZ2Uge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGFyZ2UpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWZvbnQtbGluZS1oZWlnaHQtbGFyZ2UpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWZvbnQtbGV0dGVyLXNwYWNpbmctcG9zLWxhcmdlKTtcXG59XFxuXFxuLnR5cGUtLXhsYXJnZSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14bGFyZ2UpO1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWZvbnQtbGluZS1oZWlnaHQtbGFyZ2UpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWZvbnQtbGV0dGVyLXNwYWNpbmctcG9zLXhsYXJnZSk7XFxufVxcblxcbi50eXBlLS1tZWRpdW0ge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxufVxcblxcbi50eXBlLS1ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcXG59XFxuXFxuLnR5cGUtLWludmVyc2Uge1xcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWZvbnQtbGV0dGVyLXNwYWNpbmctbmVnLXhzbWFsbCk7XFxufVxcblxcbi50eXBlLS1pbnZlcnNlICsgLnR5cGUtLXNtYWxsIHtcXG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1mb250LWxldHRlci1zcGFjaW5nLW5lZy1zbWFsbCk7XFxufVxcblxcbi50eXBlLS1pbnZlcnNlICsgLnR5cGUtLWxhcmdlIHtcXG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1mb250LWxldHRlci1zcGFjaW5nLW5lZy1sYXJnZSk7XFxufVxcblxcbi50eXBlLS1pbnZlcnNlICsgLnR5cGUtLXhsYXJnZSB7XFxuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tZm9udC1sZXR0ZXItc3BhY2luZy1uZWcteGxhcmdlKTtcXG59XFxuXFxuLnR5cGUtLWlubGluZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWlucHV0LWhlaWdodDogMzJweDtcXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIC0tZm9udC1zaXplOiAuOWVtO1xcblxcbiAgICAtLWNvbG9yLXRhZ3M6ICM5OTk7XFxuICAgIC0tYm9yZGVyLWNvbG9yLXRhZ3M6ICNlZWU7XFxufVxcblxcbmJvZHkge1xcbiAgICBwYWRkaW5nOiAxZW07XFxufVxcblxcbi8qIFN0eWxlcyBmb3IgdGhlIFVSTCBiYXIuICovXFxuLnVybCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi51cmwgaW5wdXQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1pbnB1dC1oZWlnaHQpO1xcbn1cXG5cXG4vKiBTdHlsZXMgZm9yIHRoZSBleGFtcGxlIHdlYnNpdGVzLiAqL1xcbi5leGFtcGxlcyB7XFxuICAgIHBhZGRpbmc6IDFlbSAwO1xcbn1cXG5cXG4uZXhhbXBsZXMgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG4gICAgcGFkZGluZzogLjVlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLXRhZ3MpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRhZ3MpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5leGFtcGxlcyBzcGFuOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNik7XFxufVxcblxcbi8qIERpc3BsYXlpbmcgdGhlIGRhdGEgZnJvbSB0aGUgQVBJLiAqL1xcbi5yZXN1bHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xcbn1cXG5cXG4ucmVzdWx0ID4gKiB7XFxuICAgIG1hcmdpbi1ib3R0b206IC41ZW07XFxufVxcblxcbi5yZXN1bHQgLnRleHQtZGF0YSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG4gICAgcGFkZGluZzogLjVlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NDQztcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGNvbG9yOiAjNjY2O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZXN1bHQgLmltYWdlLWRhdGEgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5pbXBvcnQgeyBBdHRyaWJ1dGVDb21taXR0ZXIsIEJvb2xlYW5BdHRyaWJ1dGVQYXJ0LCBFdmVudFBhcnQsIE5vZGVQYXJ0LCBQcm9wZXJ0eUNvbW1pdHRlciB9IGZyb20gJy4vcGFydHMuanMnO1xuLyoqXG4gKiBDcmVhdGVzIFBhcnRzIHdoZW4gYSB0ZW1wbGF0ZSBpcyBpbnN0YW50aWF0ZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3Ige1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBwYXJ0cyBmb3IgYW4gYXR0cmlidXRlLXBvc2l0aW9uIGJpbmRpbmcsIGdpdmVuIHRoZSBldmVudCwgYXR0cmlidXRlXG4gICAgICogbmFtZSwgYW5kIHN0cmluZyBsaXRlcmFscy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbGVtZW50IFRoZSBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIGJpbmRpbmdcbiAgICAgKiBAcGFyYW0gbmFtZSAgVGhlIGF0dHJpYnV0ZSBuYW1lXG4gICAgICogQHBhcmFtIHN0cmluZ3MgVGhlIHN0cmluZyBsaXRlcmFscy4gVGhlcmUgYXJlIGFsd2F5cyBhdCBsZWFzdCB0d28gc3RyaW5ncyxcbiAgICAgKiAgIGV2ZW50IGZvciBmdWxseS1jb250cm9sbGVkIGJpbmRpbmdzIHdpdGggYSBzaW5nbGUgZXhwcmVzc2lvbi5cbiAgICAgKi9cbiAgICBoYW5kbGVBdHRyaWJ1dGVFeHByZXNzaW9ucyhlbGVtZW50LCBuYW1lLCBzdHJpbmdzLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHByZWZpeCA9IG5hbWVbMF07XG4gICAgICAgIGlmIChwcmVmaXggPT09ICcuJykge1xuICAgICAgICAgICAgY29uc3QgY29tbWl0dGVyID0gbmV3IFByb3BlcnR5Q29tbWl0dGVyKGVsZW1lbnQsIG5hbWUuc2xpY2UoMSksIHN0cmluZ3MpO1xuICAgICAgICAgICAgcmV0dXJuIGNvbW1pdHRlci5wYXJ0cztcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJlZml4ID09PSAnQCcpIHtcbiAgICAgICAgICAgIHJldHVybiBbbmV3IEV2ZW50UGFydChlbGVtZW50LCBuYW1lLnNsaWNlKDEpLCBvcHRpb25zLmV2ZW50Q29udGV4dCldO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmVmaXggPT09ICc/Jykge1xuICAgICAgICAgICAgcmV0dXJuIFtuZXcgQm9vbGVhbkF0dHJpYnV0ZVBhcnQoZWxlbWVudCwgbmFtZS5zbGljZSgxKSwgc3RyaW5ncyldO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbW1pdHRlciA9IG5ldyBBdHRyaWJ1dGVDb21taXR0ZXIoZWxlbWVudCwgbmFtZSwgc3RyaW5ncyk7XG4gICAgICAgIHJldHVybiBjb21taXR0ZXIucGFydHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBwYXJ0cyBmb3IgYSB0ZXh0LXBvc2l0aW9uIGJpbmRpbmcuXG4gICAgICogQHBhcmFtIHRlbXBsYXRlRmFjdG9yeVxuICAgICAqL1xuICAgIGhhbmRsZVRleHRFeHByZXNzaW9uKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBOb2RlUGFydChvcHRpb25zKTtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yID0gbmV3IERlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvcigpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVmYXVsdC10ZW1wbGF0ZS1wcm9jZXNzb3IuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuY29uc3QgZGlyZWN0aXZlcyA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIEJyYW5kcyBhIGZ1bmN0aW9uIGFzIGEgZGlyZWN0aXZlIGZhY3RvcnkgZnVuY3Rpb24gc28gdGhhdCBsaXQtaHRtbCB3aWxsIGNhbGxcbiAqIHRoZSBmdW5jdGlvbiBkdXJpbmcgdGVtcGxhdGUgcmVuZGVyaW5nLCByYXRoZXIgdGhhbiBwYXNzaW5nIGFzIGEgdmFsdWUuXG4gKlxuICogQSBfZGlyZWN0aXZlXyBpcyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBQYXJ0IGFzIGFuIGFyZ3VtZW50LiBJdCBoYXMgdGhlXG4gKiBzaWduYXR1cmU6IGAocGFydDogUGFydCkgPT4gdm9pZGAuXG4gKlxuICogQSBkaXJlY3RpdmUgX2ZhY3RvcnlfIGlzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhcmd1bWVudHMgZm9yIGRhdGEgYW5kXG4gKiBjb25maWd1cmF0aW9uIGFuZCByZXR1cm5zIGEgZGlyZWN0aXZlLiBVc2VycyBvZiBkaXJlY3RpdmUgdXN1YWxseSByZWZlciB0b1xuICogdGhlIGRpcmVjdGl2ZSBmYWN0b3J5IGFzIHRoZSBkaXJlY3RpdmUuIEZvciBleGFtcGxlLCBcIlRoZSByZXBlYXQgZGlyZWN0aXZlXCIuXG4gKlxuICogVXN1YWxseSBhIHRlbXBsYXRlIGF1dGhvciB3aWxsIGludm9rZSBhIGRpcmVjdGl2ZSBmYWN0b3J5IGluIHRoZWlyIHRlbXBsYXRlXG4gKiB3aXRoIHJlbGV2YW50IGFyZ3VtZW50cywgd2hpY2ggd2lsbCB0aGVuIHJldHVybiBhIGRpcmVjdGl2ZSBmdW5jdGlvbi5cbiAqXG4gKiBIZXJlJ3MgYW4gZXhhbXBsZSBvZiB1c2luZyB0aGUgYHJlcGVhdCgpYCBkaXJlY3RpdmUgZmFjdG9yeSB0aGF0IHRha2VzIGFuXG4gKiBhcnJheSBhbmQgYSBmdW5jdGlvbiB0byByZW5kZXIgYW4gaXRlbTpcbiAqXG4gKiBgYGBqc1xuICogaHRtbGA8dWw+PCR7cmVwZWF0KGl0ZW1zLCAoaXRlbSkgPT4gaHRtbGA8bGk+JHtpdGVtfTwvbGk+YCl9PC91bD5gXG4gKiBgYGBcbiAqXG4gKiBXaGVuIGByZXBlYXRgIGlzIGludm9rZWQsIGl0IHJldHVybnMgYSBkaXJlY3RpdmUgZnVuY3Rpb24gdGhhdCBjbG9zZXMgb3ZlclxuICogYGl0ZW1zYCBhbmQgdGhlIHRlbXBsYXRlIGZ1bmN0aW9uLiBXaGVuIHRoZSBvdXRlciB0ZW1wbGF0ZSBpcyByZW5kZXJlZCwgdGhlXG4gKiByZXR1cm4gZGlyZWN0aXZlIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIHRoZSBQYXJ0IGZvciB0aGUgZXhwcmVzc2lvbi5cbiAqIGByZXBlYXRgIHRoZW4gcGVyZm9ybXMgaXQncyBjdXN0b20gbG9naWMgdG8gcmVuZGVyIG11bHRpcGxlIGl0ZW1zLlxuICpcbiAqIEBwYXJhbSBmIFRoZSBkaXJlY3RpdmUgZmFjdG9yeSBmdW5jdGlvbi4gTXVzdCBiZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhXG4gKiBmdW5jdGlvbiBvZiB0aGUgc2lnbmF0dXJlIGAocGFydDogUGFydCkgPT4gdm9pZGAuIFRoZSByZXR1cm5lZCBmdW5jdGlvbiB3aWxsXG4gKiBiZSBjYWxsZWQgd2l0aCB0aGUgcGFydCBvYmplY3QuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBpbXBvcnQge2RpcmVjdGl2ZSwgaHRtbH0gZnJvbSAnbGl0LWh0bWwnO1xuICpcbiAqIGNvbnN0IGltbXV0YWJsZSA9IGRpcmVjdGl2ZSgodikgPT4gKHBhcnQpID0+IHtcbiAqICAgaWYgKHBhcnQudmFsdWUgIT09IHYpIHtcbiAqICAgICBwYXJ0LnNldFZhbHVlKHYpXG4gKiAgIH1cbiAqIH0pO1xuICovXG5leHBvcnQgY29uc3QgZGlyZWN0aXZlID0gKGYpID0+ICgoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IGQgPSBmKC4uLmFyZ3MpO1xuICAgIGRpcmVjdGl2ZXMuc2V0KGQsIHRydWUpO1xuICAgIHJldHVybiBkO1xufSk7XG5leHBvcnQgY29uc3QgaXNEaXJlY3RpdmUgPSAobykgPT4ge1xuICAgIHJldHVybiB0eXBlb2YgbyA9PT0gJ2Z1bmN0aW9uJyAmJiBkaXJlY3RpdmVzLmhhcyhvKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kaXJlY3RpdmUuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuLyoqXG4gKiBUcnVlIGlmIHRoZSBjdXN0b20gZWxlbWVudHMgcG9seWZpbGwgaXMgaW4gdXNlLlxuICovXG5leHBvcnQgY29uc3QgaXNDRVBvbHlmaWxsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB3aW5kb3cuY3VzdG9tRWxlbWVudHMgIT0gbnVsbCAmJlxuICAgIHdpbmRvdy5jdXN0b21FbGVtZW50cy5wb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrICE9PVxuICAgICAgICB1bmRlZmluZWQ7XG4vKipcbiAqIFJlcGFyZW50cyBub2Rlcywgc3RhcnRpbmcgZnJvbSBgc3RhcnRgIChpbmNsdXNpdmUpIHRvIGBlbmRgIChleGNsdXNpdmUpLFxuICogaW50byBhbm90aGVyIGNvbnRhaW5lciAoY291bGQgYmUgdGhlIHNhbWUgY29udGFpbmVyKSwgYmVmb3JlIGBiZWZvcmVgLiBJZlxuICogYGJlZm9yZWAgaXMgbnVsbCwgaXQgYXBwZW5kcyB0aGUgbm9kZXMgdG8gdGhlIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlcGFyZW50Tm9kZXMgPSAoY29udGFpbmVyLCBzdGFydCwgZW5kID0gbnVsbCwgYmVmb3JlID0gbnVsbCkgPT4ge1xuICAgIHdoaWxlIChzdGFydCAhPT0gZW5kKSB7XG4gICAgICAgIGNvbnN0IG4gPSBzdGFydC5uZXh0U2libGluZztcbiAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShzdGFydCwgYmVmb3JlKTtcbiAgICAgICAgc3RhcnQgPSBuO1xuICAgIH1cbn07XG4vKipcbiAqIFJlbW92ZXMgbm9kZXMsIHN0YXJ0aW5nIGZyb20gYHN0YXJ0YCAoaW5jbHVzaXZlKSB0byBgZW5kYCAoZXhjbHVzaXZlKSwgZnJvbVxuICogYGNvbnRhaW5lcmAuXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVOb2RlcyA9IChjb250YWluZXIsIHN0YXJ0LCBlbmQgPSBudWxsKSA9PiB7XG4gICAgd2hpbGUgKHN0YXJ0ICE9PSBlbmQpIHtcbiAgICAgICAgY29uc3QgbiA9IHN0YXJ0Lm5leHRTaWJsaW5nO1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoc3RhcnQpO1xuICAgICAgICBzdGFydCA9IG47XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRvbS5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG4vKipcbiAqIEEgc2VudGluZWwgdmFsdWUgdGhhdCBzaWduYWxzIHRoYXQgYSB2YWx1ZSB3YXMgaGFuZGxlZCBieSBhIGRpcmVjdGl2ZSBhbmRcbiAqIHNob3VsZCBub3QgYmUgd3JpdHRlbiB0byB0aGUgRE9NLlxuICovXG5leHBvcnQgY29uc3Qgbm9DaGFuZ2UgPSB7fTtcbi8qKlxuICogQSBzZW50aW5lbCB2YWx1ZSB0aGF0IHNpZ25hbHMgYSBOb2RlUGFydCB0byBmdWxseSBjbGVhciBpdHMgY29udGVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vdGhpbmcgPSB7fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cbmltcG9ydCB7IGlzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUuanMnO1xuaW1wb3J0IHsgcmVtb3ZlTm9kZXMgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBub0NoYW5nZSwgbm90aGluZyB9IGZyb20gJy4vcGFydC5qcyc7XG5pbXBvcnQgeyBUZW1wbGF0ZUluc3RhbmNlIH0gZnJvbSAnLi90ZW1wbGF0ZS1pbnN0YW5jZS5qcyc7XG5pbXBvcnQgeyBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gJy4vdGVtcGxhdGUtcmVzdWx0LmpzJztcbmltcG9ydCB7IGNyZWF0ZU1hcmtlciB9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuZXhwb3J0IGNvbnN0IGlzUHJpbWl0aXZlID0gKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuICh2YWx1ZSA9PT0gbnVsbCB8fFxuICAgICAgICAhKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSk7XG59O1xuZXhwb3J0IGNvbnN0IGlzSXRlcmFibGUgPSAodmFsdWUpID0+IHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHxcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgISEodmFsdWUgJiYgdmFsdWVbU3ltYm9sLml0ZXJhdG9yXSk7XG59O1xuLyoqXG4gKiBXcml0ZXMgYXR0cmlidXRlIHZhbHVlcyB0byB0aGUgRE9NIGZvciBhIGdyb3VwIG9mIEF0dHJpYnV0ZVBhcnRzIGJvdW5kIHRvIGFcbiAqIHNpbmdsZSBhdHRyaWJ1dGUuIFRoZSB2YWx1ZSBpcyBvbmx5IHNldCBvbmNlIGV2ZW4gaWYgdGhlcmUgYXJlIG11bHRpcGxlIHBhcnRzXG4gKiBmb3IgYW4gYXR0cmlidXRlLlxuICovXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlQ29tbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzKSB7XG4gICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnN0cmluZ3MgPSBzdHJpbmdzO1xuICAgICAgICB0aGlzLnBhcnRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaW5ncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucGFydHNbaV0gPSB0aGlzLl9jcmVhdGVQYXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHNpbmdsZSBwYXJ0LiBPdmVycmlkZSB0aGlzIHRvIGNyZWF0ZSBhIGRpZmZlcm50IHR5cGUgb2YgcGFydC5cbiAgICAgKi9cbiAgICBfY3JlYXRlUGFydCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBdHRyaWJ1dGVQYXJ0KHRoaXMpO1xuICAgIH1cbiAgICBfZ2V0VmFsdWUoKSB7XG4gICAgICAgIGNvbnN0IHN0cmluZ3MgPSB0aGlzLnN0cmluZ3M7XG4gICAgICAgIGNvbnN0IGwgPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCB0ZXh0ID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB0ZXh0ICs9IHN0cmluZ3NbaV07XG4gICAgICAgICAgICBjb25zdCBwYXJ0ID0gdGhpcy5wYXJ0c1tpXTtcbiAgICAgICAgICAgIGlmIChwYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ID0gcGFydC52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoaXNQcmltaXRpdmUodikgfHwgIWlzSXRlcmFibGUodikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dCArPSB0eXBlb2YgdiA9PT0gJ3N0cmluZycgPyB2IDogU3RyaW5nKHYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB0IG9mIHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gdHlwZW9mIHQgPT09ICdzdHJpbmcnID8gdCA6IFN0cmluZyh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0ZXh0ICs9IHN0cmluZ3NbbF07XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgICBjb21taXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgdGhpcy5fZ2V0VmFsdWUoKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIEEgUGFydCB0aGF0IGNvbnRyb2xzIGFsbCBvciBwYXJ0IG9mIGFuIGF0dHJpYnV0ZSB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKGNvbW1pdHRlcikge1xuICAgICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmNvbW1pdHRlciA9IGNvbW1pdHRlcjtcbiAgICB9XG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBub0NoYW5nZSAmJiAoIWlzUHJpbWl0aXZlKHZhbHVlKSB8fCB2YWx1ZSAhPT0gdGhpcy52YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIC8vIElmIHRoZSB2YWx1ZSBpcyBhIG5vdCBhIGRpcmVjdGl2ZSwgZGlydHkgdGhlIGNvbW1pdHRlciBzbyB0aGF0IGl0J2xsXG4gICAgICAgICAgICAvLyBjYWxsIHNldEF0dHJpYnV0ZS4gSWYgdGhlIHZhbHVlIGlzIGEgZGlyZWN0aXZlLCBpdCdsbCBkaXJ0eSB0aGVcbiAgICAgICAgICAgIC8vIGNvbW1pdHRlciBpZiBpdCBjYWxscyBzZXRWYWx1ZSgpLlxuICAgICAgICAgICAgaWYgKCFpc0RpcmVjdGl2ZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1pdHRlci5kaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tbWl0KCkge1xuICAgICAgICB3aGlsZSAoaXNEaXJlY3RpdmUodGhpcy52YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbm9DaGFuZ2U7XG4gICAgICAgICAgICBkaXJlY3RpdmUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21taXR0ZXIuY29tbWl0KCk7XG4gICAgfVxufVxuLyoqXG4gKiBBIFBhcnQgdGhhdCBjb250cm9scyBhIGxvY2F0aW9uIHdpdGhpbiBhIE5vZGUgdHJlZS4gTGlrZSBhIFJhbmdlLCBOb2RlUGFydFxuICogaGFzIHN0YXJ0IGFuZCBlbmQgbG9jYXRpb25zIGFuZCBjYW4gc2V0IGFuZCB1cGRhdGUgdGhlIE5vZGVzIGJldHdlZW4gdGhvc2VcbiAqIGxvY2F0aW9ucy5cbiAqXG4gKiBOb2RlUGFydHMgc3VwcG9ydCBzZXZlcmFsIHZhbHVlIHR5cGVzOiBwcmltaXRpdmVzLCBOb2RlcywgVGVtcGxhdGVSZXN1bHRzLFxuICogYXMgd2VsbCBhcyBhcnJheXMgYW5kIGl0ZXJhYmxlcyBvZiB0aG9zZSB0eXBlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIE5vZGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgdGhpcyBwYXJ0IGludG8gYSBjb250YWluZXIuXG4gICAgICpcbiAgICAgKiBUaGlzIHBhcnQgbXVzdCBiZSBlbXB0eSwgYXMgaXRzIGNvbnRlbnRzIGFyZSBub3QgYXV0b21hdGljYWxseSBtb3ZlZC5cbiAgICAgKi9cbiAgICBhcHBlbmRJbnRvKGNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLnN0YXJ0Tm9kZSA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNYXJrZXIoKSk7XG4gICAgICAgIHRoaXMuZW5kTm9kZSA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNYXJrZXIoKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluc2VydHMgdGhpcyBwYXJ0IGFmdGVyIHRoZSBgcmVmYCBub2RlIChiZXR3ZWVuIGByZWZgIGFuZCBgcmVmYCdzIG5leHRcbiAgICAgKiBzaWJsaW5nKS4gQm90aCBgcmVmYCBhbmQgaXRzIG5leHQgc2libGluZyBtdXN0IGJlIHN0YXRpYywgdW5jaGFuZ2luZyBub2Rlc1xuICAgICAqIHN1Y2ggYXMgdGhvc2UgdGhhdCBhcHBlYXIgaW4gYSBsaXRlcmFsIHNlY3Rpb24gb2YgYSB0ZW1wbGF0ZS5cbiAgICAgKlxuICAgICAqIFRoaXMgcGFydCBtdXN0IGJlIGVtcHR5LCBhcyBpdHMgY29udGVudHMgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IG1vdmVkLlxuICAgICAqL1xuICAgIGluc2VydEFmdGVyTm9kZShyZWYpIHtcbiAgICAgICAgdGhpcy5zdGFydE5vZGUgPSByZWY7XG4gICAgICAgIHRoaXMuZW5kTm9kZSA9IHJlZi5uZXh0U2libGluZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXBwZW5kcyB0aGlzIHBhcnQgaW50byBhIHBhcmVudCBwYXJ0LlxuICAgICAqXG4gICAgICogVGhpcyBwYXJ0IG11c3QgYmUgZW1wdHksIGFzIGl0cyBjb250ZW50cyBhcmUgbm90IGF1dG9tYXRpY2FsbHkgbW92ZWQuXG4gICAgICovXG4gICAgYXBwZW5kSW50b1BhcnQocGFydCkge1xuICAgICAgICBwYXJ0Ll9faW5zZXJ0KHRoaXMuc3RhcnROb2RlID0gY3JlYXRlTWFya2VyKCkpO1xuICAgICAgICBwYXJ0Ll9faW5zZXJ0KHRoaXMuZW5kTm9kZSA9IGNyZWF0ZU1hcmtlcigpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyB0aGlzIHBhcnQgYWZ0ZXIgdGhlIGByZWZgIHBhcnQuXG4gICAgICpcbiAgICAgKiBUaGlzIHBhcnQgbXVzdCBiZSBlbXB0eSwgYXMgaXRzIGNvbnRlbnRzIGFyZSBub3QgYXV0b21hdGljYWxseSBtb3ZlZC5cbiAgICAgKi9cbiAgICBpbnNlcnRBZnRlclBhcnQocmVmKSB7XG4gICAgICAgIHJlZi5fX2luc2VydCh0aGlzLnN0YXJ0Tm9kZSA9IGNyZWF0ZU1hcmtlcigpKTtcbiAgICAgICAgdGhpcy5lbmROb2RlID0gcmVmLmVuZE5vZGU7XG4gICAgICAgIHJlZi5lbmROb2RlID0gdGhpcy5zdGFydE5vZGU7XG4gICAgfVxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgY29tbWl0KCkge1xuICAgICAgICBpZiAodGhpcy5zdGFydE5vZGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChpc0RpcmVjdGl2ZSh0aGlzLl9fcGVuZGluZ1ZhbHVlKSkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aXZlID0gdGhpcy5fX3BlbmRpbmdWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSBub0NoYW5nZTtcbiAgICAgICAgICAgIGRpcmVjdGl2ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX19wZW5kaW5nVmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNQcmltaXRpdmUodmFsdWUpKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fY29tbWl0VGV4dCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy5fX2NvbW1pdFRlbXBsYXRlUmVzdWx0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX19jb21taXROb2RlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0l0ZXJhYmxlKHZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5fX2NvbW1pdEl0ZXJhYmxlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA9PT0gbm90aGluZykge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBGYWxsYmFjaywgd2lsbCByZW5kZXIgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgdGhpcy5fX2NvbW1pdFRleHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9faW5zZXJ0KG5vZGUpIHtcbiAgICAgICAgdGhpcy5lbmROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIHRoaXMuZW5kTm9kZSk7XG4gICAgfVxuICAgIF9fY29tbWl0Tm9kZSh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuX19pbnNlcnQodmFsdWUpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIF9fY29tbWl0VGV4dCh2YWx1ZSkge1xuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5zdGFydE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIHZhbHVlID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG4gICAgICAgIC8vIElmIGB2YWx1ZWAgaXNuJ3QgYWxyZWFkeSBhIHN0cmluZywgd2UgZXhwbGljaXRseSBjb252ZXJ0IGl0IGhlcmUgaW4gY2FzZVxuICAgICAgICAvLyBpdCBjYW4ndCBiZSBpbXBsaWNpdGx5IGNvbnZlcnRlZCAtIGkuZS4gaXQncyBhIHN5bWJvbC5cbiAgICAgICAgY29uc3QgdmFsdWVBc1N0cmluZyA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIGlmIChub2RlID09PSB0aGlzLmVuZE5vZGUucHJldmlvdXNTaWJsaW5nICYmXG4gICAgICAgICAgICBub2RlLm5vZGVUeXBlID09PSAzIC8qIE5vZGUuVEVYVF9OT0RFICovKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBvbmx5IGhhdmUgYSBzaW5nbGUgdGV4dCBub2RlIGJldHdlZW4gdGhlIG1hcmtlcnMsIHdlIGNhbiBqdXN0XG4gICAgICAgICAgICAvLyBzZXQgaXRzIHZhbHVlLCByYXRoZXIgdGhhbiByZXBsYWNpbmcgaXQuXG4gICAgICAgICAgICAvLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBDYW4gd2UganVzdCBjaGVjayBpZiB0aGlzLnZhbHVlIGlzIHByaW1pdGl2ZT9cbiAgICAgICAgICAgIG5vZGUuZGF0YSA9IHZhbHVlQXNTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9fY29tbWl0Tm9kZShkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZUFzU3RyaW5nKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBfX2NvbW1pdFRlbXBsYXRlUmVzdWx0KHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5vcHRpb25zLnRlbXBsYXRlRmFjdG9yeSh2YWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVJbnN0YW5jZSAmJlxuICAgICAgICAgICAgdGhpcy52YWx1ZS50ZW1wbGF0ZSA9PT0gdGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUudXBkYXRlKHZhbHVlLnZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgcHJvcGFnYXRlIHRoZSB0ZW1wbGF0ZSBwcm9jZXNzb3IgZnJvbSB0aGUgVGVtcGxhdGVSZXN1bHRcbiAgICAgICAgICAgIC8vIHNvIHRoYXQgd2UgdXNlIGl0cyBzeW50YXggZXh0ZW5zaW9uLCBldGMuIFRoZSB0ZW1wbGF0ZSBmYWN0b3J5IGNvbWVzXG4gICAgICAgICAgICAvLyBmcm9tIHRoZSByZW5kZXIgZnVuY3Rpb24gb3B0aW9ucyBzbyB0aGF0IGl0IGNhbiBjb250cm9sIHRlbXBsYXRlXG4gICAgICAgICAgICAvLyBjYWNoaW5nIGFuZCBwcmVwcm9jZXNzaW5nLlxuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVGVtcGxhdGVJbnN0YW5jZSh0ZW1wbGF0ZSwgdmFsdWUucHJvY2Vzc29yLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBpbnN0YW5jZS5fY2xvbmUoKTtcbiAgICAgICAgICAgIGluc3RhbmNlLnVwZGF0ZSh2YWx1ZS52YWx1ZXMpO1xuICAgICAgICAgICAgdGhpcy5fX2NvbW1pdE5vZGUoZnJhZ21lbnQpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGluc3RhbmNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9fY29tbWl0SXRlcmFibGUodmFsdWUpIHtcbiAgICAgICAgLy8gRm9yIGFuIEl0ZXJhYmxlLCB3ZSBjcmVhdGUgYSBuZXcgSW5zdGFuY2VQYXJ0IHBlciBpdGVtLCB0aGVuIHNldCBpdHNcbiAgICAgICAgLy8gdmFsdWUgdG8gdGhlIGl0ZW0uIFRoaXMgaXMgYSBsaXR0bGUgYml0IG9mIG92ZXJoZWFkIGZvciBldmVyeSBpdGVtIGluXG4gICAgICAgIC8vIGFuIEl0ZXJhYmxlLCBidXQgaXQgbGV0cyB1cyByZWN1cnNlIGVhc2lseSBhbmQgZWZmaWNpZW50bHkgdXBkYXRlIEFycmF5c1xuICAgICAgICAvLyBvZiBUZW1wbGF0ZVJlc3VsdHMgdGhhdCB3aWxsIGJlIGNvbW1vbmx5IHJldHVybmVkIGZyb20gZXhwcmVzc2lvbnMgbGlrZTpcbiAgICAgICAgLy8gYXJyYXkubWFwKChpKSA9PiBodG1sYCR7aX1gKSwgYnkgcmV1c2luZyBleGlzdGluZyBUZW1wbGF0ZUluc3RhbmNlcy5cbiAgICAgICAgLy8gSWYgX3ZhbHVlIGlzIGFuIGFycmF5LCB0aGVuIHRoZSBwcmV2aW91cyByZW5kZXIgd2FzIG9mIGFuXG4gICAgICAgIC8vIGl0ZXJhYmxlIGFuZCBfdmFsdWUgd2lsbCBjb250YWluIHRoZSBOb2RlUGFydHMgZnJvbSB0aGUgcHJldmlvdXNcbiAgICAgICAgLy8gcmVuZGVyLiBJZiBfdmFsdWUgaXMgbm90IGFuIGFycmF5LCBjbGVhciB0aGlzIHBhcnQgYW5kIG1ha2UgYSBuZXdcbiAgICAgICAgLy8gYXJyYXkgZm9yIE5vZGVQYXJ0cy5cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gW107XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTGV0cyB1cyBrZWVwIHRyYWNrIG9mIGhvdyBtYW55IGl0ZW1zIHdlIHN0YW1wZWQgc28gd2UgY2FuIGNsZWFyIGxlZnRvdmVyXG4gICAgICAgIC8vIGl0ZW1zIGZyb20gYSBwcmV2aW91cyByZW5kZXJcbiAgICAgICAgY29uc3QgaXRlbVBhcnRzID0gdGhpcy52YWx1ZTtcbiAgICAgICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgICAgIGxldCBpdGVtUGFydDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHZhbHVlKSB7XG4gICAgICAgICAgICAvLyBUcnkgdG8gcmV1c2UgYW4gZXhpc3RpbmcgcGFydFxuICAgICAgICAgICAgaXRlbVBhcnQgPSBpdGVtUGFydHNbcGFydEluZGV4XTtcbiAgICAgICAgICAgIC8vIElmIG5vIGV4aXN0aW5nIHBhcnQsIGNyZWF0ZSBhIG5ldyBvbmVcbiAgICAgICAgICAgIGlmIChpdGVtUGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaXRlbVBhcnQgPSBuZXcgTm9kZVBhcnQodGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpdGVtUGFydHMucHVzaChpdGVtUGFydCk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnRJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtUGFydC5hcHBlbmRJbnRvUGFydCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1QYXJ0Lmluc2VydEFmdGVyUGFydChpdGVtUGFydHNbcGFydEluZGV4IC0gMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZW1QYXJ0LnNldFZhbHVlKGl0ZW0pO1xuICAgICAgICAgICAgaXRlbVBhcnQuY29tbWl0KCk7XG4gICAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFydEluZGV4IDwgaXRlbVBhcnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gVHJ1bmNhdGUgdGhlIHBhcnRzIGFycmF5IHNvIF92YWx1ZSByZWZsZWN0cyB0aGUgY3VycmVudCBzdGF0ZVxuICAgICAgICAgICAgaXRlbVBhcnRzLmxlbmd0aCA9IHBhcnRJbmRleDtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoaXRlbVBhcnQgJiYgaXRlbVBhcnQuZW5kTm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xlYXIoc3RhcnROb2RlID0gdGhpcy5zdGFydE5vZGUpIHtcbiAgICAgICAgcmVtb3ZlTm9kZXModGhpcy5zdGFydE5vZGUucGFyZW50Tm9kZSwgc3RhcnROb2RlLm5leHRTaWJsaW5nLCB0aGlzLmVuZE5vZGUpO1xuICAgIH1cbn1cbi8qKlxuICogSW1wbGVtZW50cyBhIGJvb2xlYW4gYXR0cmlidXRlLCByb3VnaGx5IGFzIGRlZmluZWQgaW4gdGhlIEhUTUxcbiAqIHNwZWNpZmljYXRpb24uXG4gKlxuICogSWYgdGhlIHZhbHVlIGlzIHRydXRoeSwgdGhlbiB0aGUgYXR0cmlidXRlIGlzIHByZXNlbnQgd2l0aCBhIHZhbHVlIG9mXG4gKiAnJy4gSWYgdGhlIHZhbHVlIGlzIGZhbHNleSwgdGhlIGF0dHJpYnV0ZSBpcyByZW1vdmVkLlxuICovXG5leHBvcnQgY2xhc3MgQm9vbGVhbkF0dHJpYnV0ZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHN0cmluZ3MubGVuZ3RoICE9PSAyIHx8IHN0cmluZ3NbMF0gIT09ICcnIHx8IHN0cmluZ3NbMV0gIT09ICcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Jvb2xlYW4gYXR0cmlidXRlcyBjYW4gb25seSBjb250YWluIGEgc2luZ2xlIGV4cHJlc3Npb24nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnN0cmluZ3MgPSBzdHJpbmdzO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGNvbW1pdCgpIHtcbiAgICAgICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMuX19wZW5kaW5nVmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmUgPSB0aGlzLl9fcGVuZGluZ1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlO1xuICAgICAgICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9fcGVuZGluZ1ZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gISF0aGlzLl9fcGVuZGluZ1ZhbHVlO1xuICAgICAgICBpZiAodGhpcy52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHRoaXMubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlO1xuICAgIH1cbn1cbi8qKlxuICogU2V0cyBhdHRyaWJ1dGUgdmFsdWVzIGZvciBQcm9wZXJ0eVBhcnRzLCBzbyB0aGF0IHRoZSB2YWx1ZSBpcyBvbmx5IHNldCBvbmNlXG4gKiBldmVuIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBwYXJ0cyBmb3IgYSBwcm9wZXJ0eS5cbiAqXG4gKiBJZiBhbiBleHByZXNzaW9uIGNvbnRyb2xzIHRoZSB3aG9sZSBwcm9wZXJ0eSB2YWx1ZSwgdGhlbiB0aGUgdmFsdWUgaXMgc2ltcGx5XG4gKiBhc3NpZ25lZCB0byB0aGUgcHJvcGVydHkgdW5kZXIgY29udHJvbC4gSWYgdGhlcmUgYXJlIHN0cmluZyBsaXRlcmFscyBvclxuICogbXVsdGlwbGUgZXhwcmVzc2lvbnMsIHRoZW4gdGhlIHN0cmluZ3MgYXJlIGV4cHJlc3Npb25zIGFyZSBpbnRlcnBvbGF0ZWQgaW50b1xuICogYSBzdHJpbmcgZmlyc3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eUNvbW1pdHRlciBleHRlbmRzIEF0dHJpYnV0ZUNvbW1pdHRlciB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgbmFtZSwgc3RyaW5ncykge1xuICAgICAgICBzdXBlcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzKTtcbiAgICAgICAgdGhpcy5zaW5nbGUgPVxuICAgICAgICAgICAgKHN0cmluZ3MubGVuZ3RoID09PSAyICYmIHN0cmluZ3NbMF0gPT09ICcnICYmIHN0cmluZ3NbMV0gPT09ICcnKTtcbiAgICB9XG4gICAgX2NyZWF0ZVBhcnQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcGVydHlQYXJ0KHRoaXMpO1xuICAgIH1cbiAgICBfZ2V0VmFsdWUoKSB7XG4gICAgICAgIGlmICh0aGlzLnNpbmdsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFydHNbMF0udmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1cGVyLl9nZXRWYWx1ZSgpO1xuICAgIH1cbiAgICBjb21taXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgdGhpcy5lbGVtZW50W3RoaXMubmFtZV0gPSB0aGlzLl9nZXRWYWx1ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFByb3BlcnR5UGFydCBleHRlbmRzIEF0dHJpYnV0ZVBhcnQge1xufVxuLy8gRGV0ZWN0IGV2ZW50IGxpc3RlbmVyIG9wdGlvbnMgc3VwcG9ydC4gSWYgdGhlIGBjYXB0dXJlYCBwcm9wZXJ0eSBpcyByZWFkXG4vLyBmcm9tIHRoZSBvcHRpb25zIG9iamVjdCwgdGhlbiBvcHRpb25zIGFyZSBzdXBwb3J0ZWQuIElmIG5vdCwgdGhlbiB0aGUgdGhpcmRcbi8vIGFyZ3VtZW50IHRvIGFkZC9yZW1vdmVFdmVudExpc3RlbmVyIGlzIGludGVycHJldGVkIGFzIHRoZSBib29sZWFuIGNhcHR1cmVcbi8vIHZhbHVlIHNvIHdlIHNob3VsZCBvbmx5IHBhc3MgdGhlIGBjYXB0dXJlYCBwcm9wZXJ0eS5cbmxldCBldmVudE9wdGlvbnNTdXBwb3J0ZWQgPSBmYWxzZTtcbi8vIFdyYXAgaW50byBhbiBJSUZFIGJlY2F1c2UgTVMgRWRnZSA8PSB2NDEgZG9lcyBub3Qgc3VwcG9ydCBoYXZpbmcgdHJ5L2NhdGNoXG4vLyBibG9ja3MgcmlnaHQgaW50byB0aGUgYm9keSBvZiBhIG1vZHVsZVxuKCgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgZ2V0IGNhcHR1cmUoKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRPcHRpb25zU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGNhdGNoIChfZSkge1xuICAgICAgICAvLyBldmVudCBvcHRpb25zIG5vdCBzdXBwb3J0ZWRcbiAgICB9XG59KSgpO1xuZXhwb3J0IGNsYXNzIEV2ZW50UGFydCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgZXZlbnROYW1lLCBldmVudENvbnRleHQpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5ldmVudE5hbWUgPSBldmVudE5hbWU7XG4gICAgICAgIHRoaXMuZXZlbnRDb250ZXh0ID0gZXZlbnRDb250ZXh0O1xuICAgICAgICB0aGlzLl9fYm91bmRIYW5kbGVFdmVudCA9IChlKSA9PiB0aGlzLmhhbmRsZUV2ZW50KGUpO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGNvbW1pdCgpIHtcbiAgICAgICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMuX19wZW5kaW5nVmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCBkaXJlY3RpdmUgPSB0aGlzLl9fcGVuZGluZ1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlO1xuICAgICAgICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9fcGVuZGluZ1ZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0xpc3RlbmVyID0gdGhpcy5fX3BlbmRpbmdWYWx1ZTtcbiAgICAgICAgY29uc3Qgb2xkTGlzdGVuZXIgPSB0aGlzLnZhbHVlO1xuICAgICAgICBjb25zdCBzaG91bGRSZW1vdmVMaXN0ZW5lciA9IG5ld0xpc3RlbmVyID09IG51bGwgfHxcbiAgICAgICAgICAgIG9sZExpc3RlbmVyICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgICAobmV3TGlzdGVuZXIuY2FwdHVyZSAhPT0gb2xkTGlzdGVuZXIuY2FwdHVyZSB8fFxuICAgICAgICAgICAgICAgICAgICBuZXdMaXN0ZW5lci5vbmNlICE9PSBvbGRMaXN0ZW5lci5vbmNlIHx8XG4gICAgICAgICAgICAgICAgICAgIG5ld0xpc3RlbmVyLnBhc3NpdmUgIT09IG9sZExpc3RlbmVyLnBhc3NpdmUpO1xuICAgICAgICBjb25zdCBzaG91bGRBZGRMaXN0ZW5lciA9IG5ld0xpc3RlbmVyICE9IG51bGwgJiYgKG9sZExpc3RlbmVyID09IG51bGwgfHwgc2hvdWxkUmVtb3ZlTGlzdGVuZXIpO1xuICAgICAgICBpZiAoc2hvdWxkUmVtb3ZlTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuZXZlbnROYW1lLCB0aGlzLl9fYm91bmRIYW5kbGVFdmVudCwgdGhpcy5fX29wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG91bGRBZGRMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5fX29wdGlvbnMgPSBnZXRPcHRpb25zKG5ld0xpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZXZlbnROYW1lLCB0aGlzLl9fYm91bmRIYW5kbGVFdmVudCwgdGhpcy5fX29wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmFsdWUgPSBuZXdMaXN0ZW5lcjtcbiAgICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlO1xuICAgIH1cbiAgICBoYW5kbGVFdmVudChldmVudCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMudmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUuY2FsbCh0aGlzLmV2ZW50Q29udGV4dCB8fCB0aGlzLmVsZW1lbnQsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8gV2UgY29weSBvcHRpb25zIGJlY2F1c2Ugb2YgdGhlIGluY29uc2lzdGVudCBiZWhhdmlvciBvZiBicm93c2VycyB3aGVuIHJlYWRpbmdcbi8vIHRoZSB0aGlyZCBhcmd1bWVudCBvZiBhZGQvcmVtb3ZlRXZlbnRMaXN0ZW5lci4gSUUxMSBkb2Vzbid0IHN1cHBvcnQgb3B0aW9uc1xuLy8gYXQgYWxsLiBDaHJvbWUgNDEgb25seSByZWFkcyBgY2FwdHVyZWAgaWYgdGhlIGFyZ3VtZW50IGlzIGFuIG9iamVjdC5cbmNvbnN0IGdldE9wdGlvbnMgPSAobykgPT4gbyAmJlxuICAgIChldmVudE9wdGlvbnNTdXBwb3J0ZWQgP1xuICAgICAgICB7IGNhcHR1cmU6IG8uY2FwdHVyZSwgcGFzc2l2ZTogby5wYXNzaXZlLCBvbmNlOiBvLm9uY2UgfSA6XG4gICAgICAgIG8uY2FwdHVyZSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJ0cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuaW1wb3J0IHsgcmVtb3ZlTm9kZXMgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBOb2RlUGFydCB9IGZyb20gJy4vcGFydHMuanMnO1xuaW1wb3J0IHsgdGVtcGxhdGVGYWN0b3J5IH0gZnJvbSAnLi90ZW1wbGF0ZS1mYWN0b3J5LmpzJztcbmV4cG9ydCBjb25zdCBwYXJ0cyA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIFJlbmRlcnMgYSB0ZW1wbGF0ZSByZXN1bHQgb3Igb3RoZXIgdmFsdWUgdG8gYSBjb250YWluZXIuXG4gKlxuICogVG8gdXBkYXRlIGEgY29udGFpbmVyIHdpdGggbmV3IHZhbHVlcywgcmVldmFsdWF0ZSB0aGUgdGVtcGxhdGUgbGl0ZXJhbCBhbmRcbiAqIGNhbGwgYHJlbmRlcmAgd2l0aCB0aGUgbmV3IHJlc3VsdC5cbiAqXG4gKiBAcGFyYW0gcmVzdWx0IEFueSB2YWx1ZSByZW5kZXJhYmxlIGJ5IE5vZGVQYXJ0IC0gdHlwaWNhbGx5IGEgVGVtcGxhdGVSZXN1bHRcbiAqICAgICBjcmVhdGVkIGJ5IGV2YWx1YXRpbmcgYSB0ZW1wbGF0ZSB0YWcgbGlrZSBgaHRtbGAgb3IgYHN2Z2AuXG4gKiBAcGFyYW0gY29udGFpbmVyIEEgRE9NIHBhcmVudCB0byByZW5kZXIgdG8uIFRoZSBlbnRpcmUgY29udGVudHMgYXJlIGVpdGhlclxuICogICAgIHJlcGxhY2VkLCBvciBlZmZpY2llbnRseSB1cGRhdGVkIGlmIHRoZSBzYW1lIHJlc3VsdCB0eXBlIHdhcyBwcmV2aW91c1xuICogICAgIHJlbmRlcmVkIHRoZXJlLlxuICogQHBhcmFtIG9wdGlvbnMgUmVuZGVyT3B0aW9ucyBmb3IgdGhlIGVudGlyZSByZW5kZXIgdHJlZSByZW5kZXJlZCB0byB0aGlzXG4gKiAgICAgY29udGFpbmVyLiBSZW5kZXIgb3B0aW9ucyBtdXN0ICpub3QqIGNoYW5nZSBiZXR3ZWVuIHJlbmRlcnMgdG8gdGhlIHNhbWVcbiAqICAgICBjb250YWluZXIsIGFzIHRob3NlIGNoYW5nZXMgd2lsbCBub3QgZWZmZWN0IHByZXZpb3VzbHkgcmVuZGVyZWQgRE9NLlxuICovXG5leHBvcnQgY29uc3QgcmVuZGVyID0gKHJlc3VsdCwgY29udGFpbmVyLCBvcHRpb25zKSA9PiB7XG4gICAgbGV0IHBhcnQgPSBwYXJ0cy5nZXQoY29udGFpbmVyKTtcbiAgICBpZiAocGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlbW92ZU5vZGVzKGNvbnRhaW5lciwgY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICBwYXJ0cy5zZXQoY29udGFpbmVyLCBwYXJ0ID0gbmV3IE5vZGVQYXJ0KE9iamVjdC5hc3NpZ24oeyB0ZW1wbGF0ZUZhY3RvcnkgfSwgb3B0aW9ucykpKTtcbiAgICAgICAgcGFydC5hcHBlbmRJbnRvKGNvbnRhaW5lcik7XG4gICAgfVxuICAgIHBhcnQuc2V0VmFsdWUocmVzdWx0KTtcbiAgICBwYXJ0LmNvbW1pdCgpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlbmRlci5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5pbXBvcnQgeyBtYXJrZXIsIFRlbXBsYXRlIH0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG4vKipcbiAqIFRoZSBkZWZhdWx0IFRlbXBsYXRlRmFjdG9yeSB3aGljaCBjYWNoZXMgVGVtcGxhdGVzIGtleWVkIG9uXG4gKiByZXN1bHQudHlwZSBhbmQgcmVzdWx0LnN0cmluZ3MuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0ZW1wbGF0ZUZhY3RvcnkocmVzdWx0KSB7XG4gICAgbGV0IHRlbXBsYXRlQ2FjaGUgPSB0ZW1wbGF0ZUNhY2hlcy5nZXQocmVzdWx0LnR5cGUpO1xuICAgIGlmICh0ZW1wbGF0ZUNhY2hlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGVtcGxhdGVDYWNoZSA9IHtcbiAgICAgICAgICAgIHN0cmluZ3NBcnJheTogbmV3IFdlYWtNYXAoKSxcbiAgICAgICAgICAgIGtleVN0cmluZzogbmV3IE1hcCgpXG4gICAgICAgIH07XG4gICAgICAgIHRlbXBsYXRlQ2FjaGVzLnNldChyZXN1bHQudHlwZSwgdGVtcGxhdGVDYWNoZSk7XG4gICAgfVxuICAgIGxldCB0ZW1wbGF0ZSA9IHRlbXBsYXRlQ2FjaGUuc3RyaW5nc0FycmF5LmdldChyZXN1bHQuc3RyaW5ncyk7XG4gICAgaWYgKHRlbXBsYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cbiAgICAvLyBJZiB0aGUgVGVtcGxhdGVTdHJpbmdzQXJyYXkgaXMgbmV3LCBnZW5lcmF0ZSBhIGtleSBmcm9tIHRoZSBzdHJpbmdzXG4gICAgLy8gVGhpcyBrZXkgaXMgc2hhcmVkIGJldHdlZW4gYWxsIHRlbXBsYXRlcyB3aXRoIGlkZW50aWNhbCBjb250ZW50XG4gICAgY29uc3Qga2V5ID0gcmVzdWx0LnN0cmluZ3Muam9pbihtYXJrZXIpO1xuICAgIC8vIENoZWNrIGlmIHdlIGFscmVhZHkgaGF2ZSBhIFRlbXBsYXRlIGZvciB0aGlzIGtleVxuICAgIHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5rZXlTdHJpbmcuZ2V0KGtleSk7XG4gICAgaWYgKHRlbXBsYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBub3Qgc2VlbiB0aGlzIGtleSBiZWZvcmUsIGNyZWF0ZSBhIG5ldyBUZW1wbGF0ZVxuICAgICAgICB0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZShyZXN1bHQsIHJlc3VsdC5nZXRUZW1wbGF0ZUVsZW1lbnQoKSk7XG4gICAgICAgIC8vIENhY2hlIHRoZSBUZW1wbGF0ZSBmb3IgdGhpcyBrZXlcbiAgICAgICAgdGVtcGxhdGVDYWNoZS5rZXlTdHJpbmcuc2V0KGtleSwgdGVtcGxhdGUpO1xuICAgIH1cbiAgICAvLyBDYWNoZSBhbGwgZnV0dXJlIHF1ZXJpZXMgZm9yIHRoaXMgVGVtcGxhdGVTdHJpbmdzQXJyYXlcbiAgICB0ZW1wbGF0ZUNhY2hlLnN0cmluZ3NBcnJheS5zZXQocmVzdWx0LnN0cmluZ3MsIHRlbXBsYXRlKTtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG59XG5leHBvcnQgY29uc3QgdGVtcGxhdGVDYWNoZXMgPSBuZXcgTWFwKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10ZW1wbGF0ZS1mYWN0b3J5LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5pbXBvcnQgeyBpc0NFUG9seWZpbGwgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBpc1RlbXBsYXRlUGFydEFjdGl2ZSB9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuLyoqXG4gKiBBbiBpbnN0YW5jZSBvZiBhIGBUZW1wbGF0ZWAgdGhhdCBjYW4gYmUgYXR0YWNoZWQgdG8gdGhlIERPTSBhbmQgdXBkYXRlZFxuICogd2l0aCBuZXcgdmFsdWVzLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVJbnN0YW5jZSB7XG4gICAgY29uc3RydWN0b3IodGVtcGxhdGUsIHByb2Nlc3Nvciwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLl9fcGFydHMgPSBbXTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgICB0aGlzLnByb2Nlc3NvciA9IHByb2Nlc3NvcjtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgdXBkYXRlKHZhbHVlcykge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgcGFydCBvZiB0aGlzLl9fcGFydHMpIHtcbiAgICAgICAgICAgIGlmIChwYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwYXJ0LnNldFZhbHVlKHZhbHVlc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBwYXJ0IG9mIHRoaXMuX19wYXJ0cykge1xuICAgICAgICAgICAgaWYgKHBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBhcnQuY29tbWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2Nsb25lKCkge1xuICAgICAgICAvLyBUaGVyZSBhcmUgYSBudW1iZXIgb2Ygc3RlcHMgaW4gdGhlIGxpZmVjeWNsZSBvZiBhIHRlbXBsYXRlIGluc3RhbmNlJ3NcbiAgICAgICAgLy8gRE9NIGZyYWdtZW50OlxuICAgICAgICAvLyAgMS4gQ2xvbmUgLSBjcmVhdGUgdGhlIGluc3RhbmNlIGZyYWdtZW50XG4gICAgICAgIC8vICAyLiBBZG9wdCAtIGFkb3B0IGludG8gdGhlIG1haW4gZG9jdW1lbnRcbiAgICAgICAgLy8gIDMuIFByb2Nlc3MgLSBmaW5kIHBhcnQgbWFya2VycyBhbmQgY3JlYXRlIHBhcnRzXG4gICAgICAgIC8vICA0LiBVcGdyYWRlIC0gdXBncmFkZSBjdXN0b20gZWxlbWVudHNcbiAgICAgICAgLy8gIDUuIFVwZGF0ZSAtIHNldCBub2RlLCBhdHRyaWJ1dGUsIHByb3BlcnR5LCBldGMuLCB2YWx1ZXNcbiAgICAgICAgLy8gIDYuIENvbm5lY3QgLSBjb25uZWN0IHRvIHRoZSBkb2N1bWVudC4gT3B0aW9uYWwgYW5kIG91dHNpZGUgb2YgdGhpc1xuICAgICAgICAvLyAgICAgbWV0aG9kLlxuICAgICAgICAvL1xuICAgICAgICAvLyBXZSBoYXZlIGEgZmV3IGNvbnN0cmFpbnRzIG9uIHRoZSBvcmRlcmluZyBvZiB0aGVzZSBzdGVwczpcbiAgICAgICAgLy8gICogV2UgbmVlZCB0byB1cGdyYWRlIGJlZm9yZSB1cGRhdGluZywgc28gdGhhdCBwcm9wZXJ0eSB2YWx1ZXMgd2lsbCBwYXNzXG4gICAgICAgIC8vICAgIHRocm91Z2ggYW55IHByb3BlcnR5IHNldHRlcnMuXG4gICAgICAgIC8vICAqIFdlIHdvdWxkIGxpa2UgdG8gcHJvY2VzcyBiZWZvcmUgdXBncmFkaW5nIHNvIHRoYXQgd2UncmUgc3VyZSB0aGF0IHRoZVxuICAgICAgICAvLyAgICBjbG9uZWQgZnJhZ21lbnQgaXMgaW5lcnQgYW5kIG5vdCBkaXN0dXJiZWQgYnkgc2VsZi1tb2RpZnlpbmcgRE9NLlxuICAgICAgICAvLyAgKiBXZSB3YW50IGN1c3RvbSBlbGVtZW50cyB0byB1cGdyYWRlIGV2ZW4gaW4gZGlzY29ubmVjdGVkIGZyYWdtZW50cy5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gR2l2ZW4gdGhlc2UgY29uc3RyYWludHMsIHdpdGggZnVsbCBjdXN0b20gZWxlbWVudHMgc3VwcG9ydCB3ZSB3b3VsZFxuICAgICAgICAvLyBwcmVmZXIgdGhlIG9yZGVyOiBDbG9uZSwgUHJvY2VzcywgQWRvcHQsIFVwZ3JhZGUsIFVwZGF0ZSwgQ29ubmVjdFxuICAgICAgICAvL1xuICAgICAgICAvLyBCdXQgU2FmYXJpIGRvZXMgbm90IGltcGxlbWVudCBDdXN0b21FbGVtZW50UmVnaXN0cnkjdXBncmFkZSwgc28gd2VcbiAgICAgICAgLy8gY2FuIG5vdCBpbXBsZW1lbnQgdGhhdCBvcmRlciBhbmQgc3RpbGwgaGF2ZSB1cGdyYWRlLWJlZm9yZS11cGRhdGUgYW5kXG4gICAgICAgIC8vIHVwZ3JhZGUgZGlzY29ubmVjdGVkIGZyYWdtZW50cy4gU28gd2UgaW5zdGVhZCBzYWNyaWZpY2UgdGhlXG4gICAgICAgIC8vIHByb2Nlc3MtYmVmb3JlLXVwZ3JhZGUgY29uc3RyYWludCwgc2luY2UgaW4gQ3VzdG9tIEVsZW1lbnRzIHYxIGVsZW1lbnRzXG4gICAgICAgIC8vIG11c3Qgbm90IG1vZGlmeSB0aGVpciBsaWdodCBET00gaW4gdGhlIGNvbnN0cnVjdG9yLiBXZSBzdGlsbCBoYXZlIGlzc3Vlc1xuICAgICAgICAvLyB3aGVuIGNvLWV4aXN0aW5nIHdpdGggQ0V2MCBlbGVtZW50cyBsaWtlIFBvbHltZXIgMSwgYW5kIHdpdGggcG9seWZpbGxzXG4gICAgICAgIC8vIHRoYXQgZG9uJ3Qgc3RyaWN0bHkgYWRoZXJlIHRvIHRoZSBuby1tb2RpZmljYXRpb24gcnVsZSBiZWNhdXNlIHNoYWRvd1xuICAgICAgICAvLyBET00sIHdoaWNoIG1heSBiZSBjcmVhdGVkIGluIHRoZSBjb25zdHJ1Y3RvciwgaXMgZW11bGF0ZWQgYnkgYmVpbmcgcGxhY2VkXG4gICAgICAgIC8vIGluIHRoZSBsaWdodCBET00uXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFRoZSByZXN1bHRpbmcgb3JkZXIgaXMgb24gbmF0aXZlIGlzOiBDbG9uZSwgQWRvcHQsIFVwZ3JhZGUsIFByb2Nlc3MsXG4gICAgICAgIC8vIFVwZGF0ZSwgQ29ubmVjdC4gZG9jdW1lbnQuaW1wb3J0Tm9kZSgpIHBlcmZvcm1zIENsb25lLCBBZG9wdCwgYW5kIFVwZ3JhZGVcbiAgICAgICAgLy8gaW4gb25lIHN0ZXAuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFRoZSBDdXN0b20gRWxlbWVudHMgdjEgcG9seWZpbGwgc3VwcG9ydHMgdXBncmFkZSgpLCBzbyB0aGUgb3JkZXIgd2hlblxuICAgICAgICAvLyBwb2x5ZmlsbGVkIGlzIHRoZSBtb3JlIGlkZWFsOiBDbG9uZSwgUHJvY2VzcywgQWRvcHQsIFVwZ3JhZGUsIFVwZGF0ZSxcbiAgICAgICAgLy8gQ29ubmVjdC5cbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBpc0NFUG9seWZpbGwgP1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZS5lbGVtZW50LmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpIDpcbiAgICAgICAgICAgIGRvY3VtZW50LmltcG9ydE5vZGUodGhpcy50ZW1wbGF0ZS5lbGVtZW50LmNvbnRlbnQsIHRydWUpO1xuICAgICAgICBjb25zdCBzdGFjayA9IFtdO1xuICAgICAgICBjb25zdCBwYXJ0cyA9IHRoaXMudGVtcGxhdGUucGFydHM7XG4gICAgICAgIC8vIEVkZ2UgbmVlZHMgYWxsIDQgcGFyYW1ldGVycyBwcmVzZW50OyBJRTExIG5lZWRzIDNyZCBwYXJhbWV0ZXIgdG8gYmUgbnVsbFxuICAgICAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGZyYWdtZW50LCAxMzMgLyogTm9kZUZpbHRlci5TSE9XX3tFTEVNRU5UfENPTU1FTlR8VEVYVH0gKi8sIG51bGwsIGZhbHNlKTtcbiAgICAgICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgICAgIGxldCBub2RlSW5kZXggPSAwO1xuICAgICAgICBsZXQgcGFydDtcbiAgICAgICAgbGV0IG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCB0aGUgbm9kZXMgYW5kIHBhcnRzIG9mIGEgdGVtcGxhdGVcbiAgICAgICAgd2hpbGUgKHBhcnRJbmRleCA8IHBhcnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcGFydCA9IHBhcnRzW3BhcnRJbmRleF07XG4gICAgICAgICAgICBpZiAoIWlzVGVtcGxhdGVQYXJ0QWN0aXZlKHBhcnQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX3BhcnRzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFByb2dyZXNzIHRoZSB0cmVlIHdhbGtlciB1bnRpbCB3ZSBmaW5kIG91ciBuZXh0IHBhcnQncyBub2RlLlxuICAgICAgICAgICAgLy8gTm90ZSB0aGF0IG11bHRpcGxlIHBhcnRzIG1heSBzaGFyZSB0aGUgc2FtZSBub2RlIChhdHRyaWJ1dGUgcGFydHNcbiAgICAgICAgICAgIC8vIG9uIGEgc2luZ2xlIGVsZW1lbnQpLCBzbyB0aGlzIGxvb3AgbWF5IG5vdCBydW4gYXQgYWxsLlxuICAgICAgICAgICAgd2hpbGUgKG5vZGVJbmRleCA8IHBhcnQuaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBub2RlSW5kZXgrKztcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gJ1RFTVBMQVRFJykge1xuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSBub2RlLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgobm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSd2ZSBleGhhdXN0ZWQgdGhlIGNvbnRlbnQgaW5zaWRlIGEgbmVzdGVkIHRlbXBsYXRlIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgICAgIC8vIEJlY2F1c2Ugd2Ugc3RpbGwgaGF2ZSBwYXJ0cyAodGhlIG91dGVyIGZvci1sb29wKSwgd2Uga25vdzpcbiAgICAgICAgICAgICAgICAgICAgLy8gLSBUaGVyZSBpcyBhIHRlbXBsYXRlIGluIHRoZSBzdGFja1xuICAgICAgICAgICAgICAgICAgICAvLyAtIFRoZSB3YWxrZXIgd2lsbCBmaW5kIGEgbmV4dE5vZGUgb3V0c2lkZSB0aGUgdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gc3RhY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBXZSd2ZSBhcnJpdmVkIGF0IG91ciBwYXJ0J3Mgbm9kZS5cbiAgICAgICAgICAgIGlmIChwYXJ0LnR5cGUgPT09ICdub2RlJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnQgPSB0aGlzLnByb2Nlc3Nvci5oYW5kbGVUZXh0RXhwcmVzc2lvbih0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHBhcnQuaW5zZXJ0QWZ0ZXJOb2RlKG5vZGUucHJldmlvdXNTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9fcGFydHMucHVzaChwYXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX19wYXJ0cy5wdXNoKC4uLnRoaXMucHJvY2Vzc29yLmhhbmRsZUF0dHJpYnV0ZUV4cHJlc3Npb25zKG5vZGUsIHBhcnQubmFtZSwgcGFydC5zdHJpbmdzLCB0aGlzLm9wdGlvbnMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0NFUG9seWZpbGwpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkb3B0Tm9kZShmcmFnbWVudCk7XG4gICAgICAgICAgICBjdXN0b21FbGVtZW50cy51cGdyYWRlKGZyYWdtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGVtcGxhdGUtaW5zdGFuY2UuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cbmltcG9ydCB7IHJlcGFyZW50Tm9kZXMgfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBib3VuZEF0dHJpYnV0ZVN1ZmZpeCwgbGFzdEF0dHJpYnV0ZU5hbWVSZWdleCwgbWFya2VyLCBub2RlTWFya2VyIH0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5jb25zdCBjb21tZW50TWFya2VyID0gYCAke21hcmtlcn0gYDtcbi8qKlxuICogVGhlIHJldHVybiB0eXBlIG9mIGBodG1sYCwgd2hpY2ggaG9sZHMgYSBUZW1wbGF0ZSBhbmQgdGhlIHZhbHVlcyBmcm9tXG4gKiBpbnRlcnBvbGF0ZWQgZXhwcmVzc2lvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgY29uc3RydWN0b3Ioc3RyaW5ncywgdmFsdWVzLCB0eXBlLCBwcm9jZXNzb3IpIHtcbiAgICAgICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICAgICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXM7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc3RyaW5nIG9mIEhUTUwgdXNlZCB0byBjcmVhdGUgYSBgPHRlbXBsYXRlPmAgZWxlbWVudC5cbiAgICAgKi9cbiAgICBnZXRIVE1MKCkge1xuICAgICAgICBjb25zdCBsID0gdGhpcy5zdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCBodG1sID0gJyc7XG4gICAgICAgIGxldCBpc0NvbW1lbnRCaW5kaW5nID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzID0gdGhpcy5zdHJpbmdzW2ldO1xuICAgICAgICAgICAgLy8gRm9yIGVhY2ggYmluZGluZyB3ZSB3YW50IHRvIGRldGVybWluZSB0aGUga2luZCBvZiBtYXJrZXIgdG8gaW5zZXJ0XG4gICAgICAgICAgICAvLyBpbnRvIHRoZSB0ZW1wbGF0ZSBzb3VyY2UgYmVmb3JlIGl0J3MgcGFyc2VkIGJ5IHRoZSBicm93c2VyJ3MgSFRNTFxuICAgICAgICAgICAgLy8gcGFyc2VyLiBUaGUgbWFya2VyIHR5cGUgaXMgYmFzZWQgb24gd2hldGhlciB0aGUgZXhwcmVzc2lvbiBpcyBpbiBhblxuICAgICAgICAgICAgLy8gYXR0cmlidXRlLCB0ZXh0LCBvciBjb21tZW50IHBvc2l0aW9uLlxuICAgICAgICAgICAgLy8gICAqIEZvciBub2RlLXBvc2l0aW9uIGJpbmRpbmdzIHdlIGluc2VydCBhIGNvbW1lbnQgd2l0aCB0aGUgbWFya2VyXG4gICAgICAgICAgICAvLyAgICAgc2VudGluZWwgYXMgaXRzIHRleHQgY29udGVudCwgbGlrZSA8IS0te3tsaXQtZ3VpZH19LS0+LlxuICAgICAgICAgICAgLy8gICAqIEZvciBhdHRyaWJ1dGUgYmluZGluZ3Mgd2UgaW5zZXJ0IGp1c3QgdGhlIG1hcmtlciBzZW50aW5lbCBmb3IgdGhlXG4gICAgICAgICAgICAvLyAgICAgZmlyc3QgYmluZGluZywgc28gdGhhdCB3ZSBzdXBwb3J0IHVucXVvdGVkIGF0dHJpYnV0ZSBiaW5kaW5ncy5cbiAgICAgICAgICAgIC8vICAgICBTdWJzZXF1ZW50IGJpbmRpbmdzIGNhbiB1c2UgYSBjb21tZW50IG1hcmtlciBiZWNhdXNlIG11bHRpLWJpbmRpbmdcbiAgICAgICAgICAgIC8vICAgICBhdHRyaWJ1dGVzIG11c3QgYmUgcXVvdGVkLlxuICAgICAgICAgICAgLy8gICAqIEZvciBjb21tZW50IGJpbmRpbmdzIHdlIGluc2VydCBqdXN0IHRoZSBtYXJrZXIgc2VudGluZWwgc28gd2UgZG9uJ3RcbiAgICAgICAgICAgIC8vICAgICBjbG9zZSB0aGUgY29tbWVudC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGNvZGUgc2NhbnMgdGhlIHRlbXBsYXRlIHNvdXJjZSwgYnV0IGlzICpub3QqIGFuIEhUTUxcbiAgICAgICAgICAgIC8vIHBhcnNlci4gV2UgZG9uJ3QgbmVlZCB0byB0cmFjayB0aGUgdHJlZSBzdHJ1Y3R1cmUgb2YgdGhlIEhUTUwsIG9ubHlcbiAgICAgICAgICAgIC8vIHdoZXRoZXIgYSBiaW5kaW5nIGlzIGluc2lkZSBhIGNvbW1lbnQsIGFuZCBpZiBub3QsIGlmIGl0IGFwcGVhcnMgdG8gYmVcbiAgICAgICAgICAgIC8vIHRoZSBmaXJzdCBiaW5kaW5nIGluIGFuIGF0dHJpYnV0ZS5cbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRPcGVuID0gcy5sYXN0SW5kZXhPZignPCEtLScpO1xuICAgICAgICAgICAgLy8gV2UncmUgaW4gY29tbWVudCBwb3NpdGlvbiBpZiB3ZSBoYXZlIGEgY29tbWVudCBvcGVuIHdpdGggbm8gZm9sbG93aW5nXG4gICAgICAgICAgICAvLyBjb21tZW50IGNsb3NlLiBCZWNhdXNlIDwtLSBjYW4gYXBwZWFyIGluIGFuIGF0dHJpYnV0ZSB2YWx1ZSB0aGVyZSBjYW5cbiAgICAgICAgICAgIC8vIGJlIGZhbHNlIHBvc2l0aXZlcy5cbiAgICAgICAgICAgIGlzQ29tbWVudEJpbmRpbmcgPSAoY29tbWVudE9wZW4gPiAtMSB8fCBpc0NvbW1lbnRCaW5kaW5nKSAmJlxuICAgICAgICAgICAgICAgIHMuaW5kZXhPZignLS0+JywgY29tbWVudE9wZW4gKyAxKSA9PT0gLTE7XG4gICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgd2UgaGF2ZSBhbiBhdHRyaWJ1dGUtbGlrZSBzZXF1ZW5jZSBwcmVjZWRpbmcgdGhlXG4gICAgICAgICAgICAvLyBleHByZXNzaW9uLiBUaGlzIGNhbiBtYXRjaCBcIm5hbWU9dmFsdWVcIiBsaWtlIHN0cnVjdHVyZXMgaW4gdGV4dCxcbiAgICAgICAgICAgIC8vIGNvbW1lbnRzLCBhbmQgYXR0cmlidXRlIHZhbHVlcywgc28gdGhlcmUgY2FuIGJlIGZhbHNlLXBvc2l0aXZlcy5cbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZU1hdGNoID0gbGFzdEF0dHJpYnV0ZU5hbWVSZWdleC5leGVjKHMpO1xuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZU1hdGNoID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UncmUgb25seSBpbiB0aGlzIGJyYW5jaCBpZiB3ZSBkb24ndCBoYXZlIGEgYXR0cmlidXRlLWxpa2VcbiAgICAgICAgICAgICAgICAvLyBwcmVjZWRpbmcgc2VxdWVuY2UuIEZvciBjb21tZW50cywgdGhpcyBndWFyZHMgYWdhaW5zdCB1bnVzdWFsXG4gICAgICAgICAgICAgICAgLy8gYXR0cmlidXRlIHZhbHVlcyBsaWtlIDxkaXYgZm9vPVwiPCEtLSR7J2Jhcid9XCI+LiBDYXNlcyBsaWtlXG4gICAgICAgICAgICAgICAgLy8gPCEtLSBmb289JHsnYmFyJ30tLT4gYXJlIGhhbmRsZWQgY29ycmVjdGx5IGluIHRoZSBhdHRyaWJ1dGUgYnJhbmNoXG4gICAgICAgICAgICAgICAgLy8gYmVsb3cuXG4gICAgICAgICAgICAgICAgaHRtbCArPSBzICsgKGlzQ29tbWVudEJpbmRpbmcgPyBjb21tZW50TWFya2VyIDogbm9kZU1hcmtlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBGb3IgYXR0cmlidXRlcyB3ZSB1c2UganVzdCBhIG1hcmtlciBzZW50aW5lbCwgYW5kIGFsc28gYXBwZW5kIGFcbiAgICAgICAgICAgICAgICAvLyAkbGl0JCBzdWZmaXggdG8gdGhlIG5hbWUgdG8gb3B0LW91dCBvZiBhdHRyaWJ1dGUtc3BlY2lmaWMgcGFyc2luZ1xuICAgICAgICAgICAgICAgIC8vIHRoYXQgSUUgYW5kIEVkZ2UgZG8gZm9yIHN0eWxlIGFuZCBjZXJ0YWluIFNWRyBhdHRyaWJ1dGVzLlxuICAgICAgICAgICAgICAgIGh0bWwgKz0gcy5zdWJzdHIoMCwgYXR0cmlidXRlTWF0Y2guaW5kZXgpICsgYXR0cmlidXRlTWF0Y2hbMV0gK1xuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVNYXRjaFsyXSArIGJvdW5kQXR0cmlidXRlU3VmZml4ICsgYXR0cmlidXRlTWF0Y2hbM10gK1xuICAgICAgICAgICAgICAgICAgICBtYXJrZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaHRtbCArPSB0aGlzLnN0cmluZ3NbbF07XG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgICBnZXRUZW1wbGF0ZUVsZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICAgICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gdGhpcy5nZXRIVE1MKCk7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG59XG4vKipcbiAqIEEgVGVtcGxhdGVSZXN1bHQgZm9yIFNWRyBmcmFnbWVudHMuXG4gKlxuICogVGhpcyBjbGFzcyB3cmFwcyBIVE1MIGluIGFuIGA8c3ZnPmAgdGFnIGluIG9yZGVyIHRvIHBhcnNlIGl0cyBjb250ZW50cyBpbiB0aGVcbiAqIFNWRyBuYW1lc3BhY2UsIHRoZW4gbW9kaWZpZXMgdGhlIHRlbXBsYXRlIHRvIHJlbW92ZSB0aGUgYDxzdmc+YCB0YWcgc28gdGhhdFxuICogY2xvbmVzIG9ubHkgY29udGFpbmVyIHRoZSBvcmlnaW5hbCBmcmFnbWVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIFNWR1RlbXBsYXRlUmVzdWx0IGV4dGVuZHMgVGVtcGxhdGVSZXN1bHQge1xuICAgIGdldEhUTUwoKSB7XG4gICAgICAgIHJldHVybiBgPHN2Zz4ke3N1cGVyLmdldEhUTUwoKX08L3N2Zz5gO1xuICAgIH1cbiAgICBnZXRUZW1wbGF0ZUVsZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gc3VwZXIuZ2V0VGVtcGxhdGVFbGVtZW50KCk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZW1wbGF0ZS5jb250ZW50O1xuICAgICAgICBjb25zdCBzdmdFbGVtZW50ID0gY29udGVudC5maXJzdENoaWxkO1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKHN2Z0VsZW1lbnQpO1xuICAgICAgICByZXBhcmVudE5vZGVzKGNvbnRlbnQsIHN2Z0VsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10ZW1wbGF0ZS1yZXN1bHQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuLyoqXG4gKiBBbiBleHByZXNzaW9uIG1hcmtlciB3aXRoIGVtYmVkZGVkIHVuaXF1ZSBrZXkgdG8gYXZvaWQgY29sbGlzaW9uIHdpdGhcbiAqIHBvc3NpYmxlIHRleHQgaW4gdGVtcGxhdGVzLlxuICovXG5leHBvcnQgY29uc3QgbWFya2VyID0gYHt7bGl0LSR7U3RyaW5nKE1hdGgucmFuZG9tKCkpLnNsaWNlKDIpfX19YDtcbi8qKlxuICogQW4gZXhwcmVzc2lvbiBtYXJrZXIgdXNlZCB0ZXh0LXBvc2l0aW9ucywgbXVsdGktYmluZGluZyBhdHRyaWJ1dGVzLCBhbmRcbiAqIGF0dHJpYnV0ZXMgd2l0aCBtYXJrdXAtbGlrZSB0ZXh0IHZhbHVlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vZGVNYXJrZXIgPSBgPCEtLSR7bWFya2VyfS0tPmA7XG5leHBvcnQgY29uc3QgbWFya2VyUmVnZXggPSBuZXcgUmVnRXhwKGAke21hcmtlcn18JHtub2RlTWFya2VyfWApO1xuLyoqXG4gKiBTdWZmaXggYXBwZW5kZWQgdG8gYWxsIGJvdW5kIGF0dHJpYnV0ZSBuYW1lcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGJvdW5kQXR0cmlidXRlU3VmZml4ID0gJyRsaXQkJztcbi8qKlxuICogQW4gdXBkYXRhYmxlIFRlbXBsYXRlIHRoYXQgdHJhY2tzIHRoZSBsb2NhdGlvbiBvZiBkeW5hbWljIHBhcnRzLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGUge1xuICAgIGNvbnN0cnVjdG9yKHJlc3VsdCwgZWxlbWVudCkge1xuICAgICAgICB0aGlzLnBhcnRzID0gW107XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IG5vZGVzVG9SZW1vdmUgPSBbXTtcbiAgICAgICAgY29uc3Qgc3RhY2sgPSBbXTtcbiAgICAgICAgLy8gRWRnZSBuZWVkcyBhbGwgNCBwYXJhbWV0ZXJzIHByZXNlbnQ7IElFMTEgbmVlZHMgM3JkIHBhcmFtZXRlciB0byBiZSBudWxsXG4gICAgICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoZWxlbWVudC5jb250ZW50LCAxMzMgLyogTm9kZUZpbHRlci5TSE9XX3tFTEVNRU5UfENPTU1FTlR8VEVYVH0gKi8sIG51bGwsIGZhbHNlKTtcbiAgICAgICAgLy8gS2VlcHMgdHJhY2sgb2YgdGhlIGxhc3QgaW5kZXggYXNzb2NpYXRlZCB3aXRoIGEgcGFydC4gV2UgdHJ5IHRvIGRlbGV0ZVxuICAgICAgICAvLyB1bm5lY2Vzc2FyeSBub2RlcywgYnV0IHdlIG5ldmVyIHdhbnQgdG8gYXNzb2NpYXRlIHR3byBkaWZmZXJlbnQgcGFydHNcbiAgICAgICAgLy8gdG8gdGhlIHNhbWUgaW5kZXguIFRoZXkgbXVzdCBoYXZlIGEgY29uc3RhbnQgbm9kZSBiZXR3ZWVuLlxuICAgICAgICBsZXQgbGFzdFBhcnRJbmRleCA9IDA7XG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICAgICAgY29uc3QgeyBzdHJpbmdzLCB2YWx1ZXM6IHsgbGVuZ3RoIH0gfSA9IHJlc3VsdDtcbiAgICAgICAgd2hpbGUgKHBhcnRJbmRleCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSd2ZSBleGhhdXN0ZWQgdGhlIGNvbnRlbnQgaW5zaWRlIGEgbmVzdGVkIHRlbXBsYXRlIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gQmVjYXVzZSB3ZSBzdGlsbCBoYXZlIHBhcnRzICh0aGUgb3V0ZXIgZm9yLWxvb3ApLCB3ZSBrbm93OlxuICAgICAgICAgICAgICAgIC8vIC0gVGhlcmUgaXMgYSB0ZW1wbGF0ZSBpbiB0aGUgc3RhY2tcbiAgICAgICAgICAgICAgICAvLyAtIFRoZSB3YWxrZXIgd2lsbCBmaW5kIGEgbmV4dE5vZGUgb3V0c2lkZSB0aGUgdGVtcGxhdGVcbiAgICAgICAgICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSAvKiBOb2RlLkVMRU1FTlRfTk9ERSAqLykge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmhhc0F0dHJpYnV0ZXMoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gbm9kZS5hdHRyaWJ1dGVzO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGxlbmd0aCB9ID0gYXR0cmlidXRlcztcbiAgICAgICAgICAgICAgICAgICAgLy8gUGVyXG4gICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9OYW1lZE5vZGVNYXAsXG4gICAgICAgICAgICAgICAgICAgIC8vIGF0dHJpYnV0ZXMgYXJlIG5vdCBndWFyYW50ZWVkIHRvIGJlIHJldHVybmVkIGluIGRvY3VtZW50IG9yZGVyLlxuICAgICAgICAgICAgICAgICAgICAvLyBJbiBwYXJ0aWN1bGFyLCBFZGdlL0lFIGNhbiByZXR1cm4gdGhlbSBvdXQgb2Ygb3JkZXIsIHNvIHdlIGNhbm5vdFxuICAgICAgICAgICAgICAgICAgICAvLyBhc3N1bWUgYSBjb3JyZXNwb25kZW5jZSBiZXR3ZWVuIHBhcnQgaW5kZXggYW5kIGF0dHJpYnV0ZSBpbmRleC5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVuZHNXaXRoKGF0dHJpYnV0ZXNbaV0ubmFtZSwgYm91bmRBdHRyaWJ1dGVTdWZmaXgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoY291bnQtLSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgdGVtcGxhdGUgbGl0ZXJhbCBzZWN0aW9uIGxlYWRpbmcgdXAgdG8gdGhlIGZpcnN0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBleHByZXNzaW9uIGluIHRoaXMgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmdGb3JQYXJ0ID0gc3RyaW5nc1twYXJ0SW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgYXR0cmlidXRlIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBsYXN0QXR0cmlidXRlTmFtZVJlZ2V4LmV4ZWMoc3RyaW5nRm9yUGFydClbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBjb3JyZXNwb25kaW5nIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWxsIGJvdW5kIGF0dHJpYnV0ZXMgaGF2ZSBoYWQgYSBzdWZmaXggYWRkZWQgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRlbXBsYXRlUmVzdWx0I2dldEhUTUwgdG8gb3B0IG91dCBvZiBzcGVjaWFsIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxpbmcuIFRvIGxvb2sgdXAgdGhlIGF0dHJpYnV0ZSB2YWx1ZSB3ZSBhbHNvIG5lZWQgdG8gYWRkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgc3VmZml4LlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlTG9va3VwTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKSArIGJvdW5kQXR0cmlidXRlU3VmZml4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBub2RlLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVMb29rdXBOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZUxvb2t1cE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGljcyA9IGF0dHJpYnV0ZVZhbHVlLnNwbGl0KG1hcmtlclJlZ2V4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7IHR5cGU6ICdhdHRyaWJ1dGUnLCBpbmRleCwgbmFtZSwgc3RyaW5nczogc3RhdGljcyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRJbmRleCArPSBzdGF0aWNzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUudGFnTmFtZSA9PT0gJ1RFTVBMQVRFJykge1xuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSBub2RlLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMyAvKiBOb2RlLlRFWFRfTk9ERSAqLykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBub2RlLmRhdGE7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaW5kZXhPZihtYXJrZXIpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmdzID0gZGF0YS5zcGxpdChtYXJrZXJSZWdleCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgdGV4dCBub2RlIGZvciBlYWNoIGxpdGVyYWwgc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAvLyBUaGVzZSBub2RlcyBhcmUgYWxzbyB1c2VkIGFzIHRoZSBtYXJrZXJzIGZvciBub2RlIHBhcnRzXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFzdEluZGV4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnNlcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcyA9IHN0cmluZ3NbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocyA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnQgPSBjcmVhdGVNYXJrZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gbGFzdEF0dHJpYnV0ZU5hbWVSZWdleC5leGVjKHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCAhPT0gbnVsbCAmJiBlbmRzV2l0aChtYXRjaFsyXSwgYm91bmRBdHRyaWJ1dGVTdWZmaXgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBzLnNsaWNlKDAsIG1hdGNoLmluZGV4KSArIG1hdGNoWzFdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoWzJdLnNsaWNlKDAsIC1ib3VuZEF0dHJpYnV0ZVN1ZmZpeC5sZW5ndGgpICsgbWF0Y2hbM107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShpbnNlcnQsIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKHsgdHlwZTogJ25vZGUnLCBpbmRleDogKytpbmRleCB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIHRleHQsIHdlIG11c3QgaW5zZXJ0IGEgY29tbWVudCB0byBtYXJrIG91ciBwbGFjZS5cbiAgICAgICAgICAgICAgICAgICAgLy8gRWxzZSwgd2UgY2FuIHRydXN0IGl0IHdpbGwgc3RpY2sgYXJvdW5kIGFmdGVyIGNsb25pbmcuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJpbmdzW2xhc3RJbmRleF0gPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGNyZWF0ZU1hcmtlcigpLCBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzVG9SZW1vdmUucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZGF0YSA9IHN0cmluZ3NbbGFzdEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIGEgcGFydCBmb3IgZWFjaCBtYXRjaCBmb3VuZFxuICAgICAgICAgICAgICAgICAgICBwYXJ0SW5kZXggKz0gbGFzdEluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDggLyogTm9kZS5DT01NRU5UX05PREUgKi8pIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5kYXRhID09PSBtYXJrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgYSBuZXcgbWFya2VyIG5vZGUgdG8gYmUgdGhlIHN0YXJ0Tm9kZSBvZiB0aGUgUGFydCBpZiBhbnkgb2ZcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGZvbGxvd2luZyBhcmUgdHJ1ZTpcbiAgICAgICAgICAgICAgICAgICAgLy8gICogV2UgZG9uJ3QgaGF2ZSBhIHByZXZpb3VzU2libGluZ1xuICAgICAgICAgICAgICAgICAgICAvLyAgKiBUaGUgcHJldmlvdXNTaWJsaW5nIGlzIGFscmVhZHkgdGhlIHN0YXJ0IG9mIGEgcHJldmlvdXMgcGFydFxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5wcmV2aW91c1NpYmxpbmcgPT09IG51bGwgfHwgaW5kZXggPT09IGxhc3RQYXJ0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGNyZWF0ZU1hcmtlcigpLCBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsYXN0UGFydEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7IHR5cGU6ICdub2RlJywgaW5kZXggfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSBuZXh0U2libGluZywga2VlcCB0aGlzIG5vZGUgc28gd2UgaGF2ZSBhbiBlbmQuXG4gICAgICAgICAgICAgICAgICAgIC8vIEVsc2UsIHdlIGNhbiByZW1vdmUgaXQgdG8gc2F2ZSBmdXR1cmUgY29zdHMuXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLm5leHRTaWJsaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmRhdGEgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzVG9SZW1vdmUucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKGkgPSBub2RlLmRhdGEuaW5kZXhPZihtYXJrZXIsIGkgKyAxKSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb21tZW50IG5vZGUgaGFzIGEgYmluZGluZyBtYXJrZXIgaW5zaWRlLCBtYWtlIGFuIGluYWN0aXZlIHBhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBiaW5kaW5nIHdvbid0IHdvcmssIGJ1dCBzdWJzZXF1ZW50IGJpbmRpbmdzIHdpbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gKGp1c3RpbmZhZ25hbmkpOiBjb25zaWRlciB3aGV0aGVyIGl0J3MgZXZlbiB3b3J0aCBpdCB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBiaW5kaW5ncyBpbiBjb21tZW50cyB3b3JrXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnRzLnB1c2goeyB0eXBlOiAnbm9kZScsIGluZGV4OiAtMSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZSB0ZXh0IGJpbmRpbmcgbm9kZXMgYWZ0ZXIgdGhlIHdhbGsgdG8gbm90IGRpc3R1cmIgdGhlIFRyZWVXYWxrZXJcbiAgICAgICAgZm9yIChjb25zdCBuIG9mIG5vZGVzVG9SZW1vdmUpIHtcbiAgICAgICAgICAgIG4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IGVuZHNXaXRoID0gKHN0ciwgc3VmZml4KSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBzdHIubGVuZ3RoIC0gc3VmZml4Lmxlbmd0aDtcbiAgICByZXR1cm4gaW5kZXggPj0gMCAmJiBzdHIuc2xpY2UoaW5kZXgpID09PSBzdWZmaXg7XG59O1xuZXhwb3J0IGNvbnN0IGlzVGVtcGxhdGVQYXJ0QWN0aXZlID0gKHBhcnQpID0+IHBhcnQuaW5kZXggIT09IC0xO1xuLy8gQWxsb3dzIGBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKWAgdG8gYmUgcmVuYW1lZCBmb3IgYVxuLy8gc21hbGwgbWFudWFsIHNpemUtc2F2aW5ncy5cbmV4cG9ydCBjb25zdCBjcmVhdGVNYXJrZXIgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcbi8qKlxuICogVGhpcyByZWdleCBleHRyYWN0cyB0aGUgYXR0cmlidXRlIG5hbWUgcHJlY2VkaW5nIGFuIGF0dHJpYnV0ZS1wb3NpdGlvblxuICogZXhwcmVzc2lvbi4gSXQgZG9lcyB0aGlzIGJ5IG1hdGNoaW5nIHRoZSBzeW50YXggYWxsb3dlZCBmb3IgYXR0cmlidXRlc1xuICogYWdhaW5zdCB0aGUgc3RyaW5nIGxpdGVyYWwgZGlyZWN0bHkgcHJlY2VkaW5nIHRoZSBleHByZXNzaW9uLCBhc3N1bWluZyB0aGF0XG4gKiB0aGUgZXhwcmVzc2lvbiBpcyBpbiBhbiBhdHRyaWJ1dGUtdmFsdWUgcG9zaXRpb24uXG4gKlxuICogU2VlIGF0dHJpYnV0ZXMgaW4gdGhlIEhUTUwgc3BlYzpcbiAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNS9zeW50YXguaHRtbCNlbGVtZW50cy1hdHRyaWJ1dGVzXG4gKlxuICogXCIgXFx4MDlcXHgwYVxceDBjXFx4MGRcIiBhcmUgSFRNTCBzcGFjZSBjaGFyYWN0ZXJzOlxuICogaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1L2luZnJhc3RydWN0dXJlLmh0bWwjc3BhY2UtY2hhcmFjdGVyc1xuICpcbiAqIFwiXFwwLVxceDFGXFx4N0YtXFx4OUZcIiBhcmUgVW5pY29kZSBjb250cm9sIGNoYXJhY3RlcnMsIHdoaWNoIGluY2x1ZGVzIGV2ZXJ5XG4gKiBzcGFjZSBjaGFyYWN0ZXIgZXhjZXB0IFwiIFwiLlxuICpcbiAqIFNvIGFuIGF0dHJpYnV0ZSBpczpcbiAqICAqIFRoZSBuYW1lOiBhbnkgY2hhcmFjdGVyIGV4Y2VwdCBhIGNvbnRyb2wgY2hhcmFjdGVyLCBzcGFjZSBjaGFyYWN0ZXIsICgnKSxcbiAqICAgIChcIiksIFwiPlwiLCBcIj1cIiwgb3IgXCIvXCJcbiAqICAqIEZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBzcGFjZSBjaGFyYWN0ZXJzXG4gKiAgKiBGb2xsb3dlZCBieSBcIj1cIlxuICogICogRm9sbG93ZWQgYnkgemVybyBvciBtb3JlIHNwYWNlIGNoYXJhY3RlcnNcbiAqICAqIEZvbGxvd2VkIGJ5OlxuICogICAgKiBBbnkgY2hhcmFjdGVyIGV4Y2VwdCBzcGFjZSwgKCcpLCAoXCIpLCBcIjxcIiwgXCI+XCIsIFwiPVwiLCAoYCksIG9yXG4gKiAgICAqIChcIikgdGhlbiBhbnkgbm9uLShcIiksIG9yXG4gKiAgICAqICgnKSB0aGVuIGFueSBub24tKCcpXG4gKi9cbmV4cG9ydCBjb25zdCBsYXN0QXR0cmlidXRlTmFtZVJlZ2V4ID0gXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udHJvbC1yZWdleFxuLyhbIFxceDA5XFx4MGFcXHgwY1xceDBkXSkoW15cXDAtXFx4MUZcXHg3Ri1cXHg5RiBcIic+PS9dKykoWyBcXHgwOVxceDBhXFx4MGNcXHgwZF0qPVsgXFx4MDlcXHgwYVxceDBjXFx4MGRdKig/OlteIFxceDA5XFx4MGFcXHgwY1xceDBkXCInYDw+PV0qfFwiW15cIl0qfCdbXiddKikpJC87XG4vLyMgc291cmNlTWFwcGluZ1VSTD10ZW1wbGF0ZS5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG4vKipcbiAqXG4gKiBNYWluIGxpdC1odG1sIG1vZHVsZS5cbiAqXG4gKiBNYWluIGV4cG9ydHM6XG4gKlxuICogLSAgW1todG1sXV1cbiAqIC0gIFtbc3ZnXV1cbiAqIC0gIFtbcmVuZGVyXV1cbiAqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKiBAcHJlZmVycmVkXG4gKi9cbi8qKlxuICogRG8gbm90IHJlbW92ZSB0aGlzIGNvbW1lbnQ7IGl0IGtlZXBzIHR5cGVkb2MgZnJvbSBtaXNwbGFjaW5nIHRoZSBtb2R1bGVcbiAqIGRvY3MuXG4gKi9cbmltcG9ydCB7IGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciB9IGZyb20gJy4vbGliL2RlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmltcG9ydCB7IFNWR1RlbXBsYXRlUmVzdWx0LCBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gJy4vbGliL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5leHBvcnQgeyBEZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IsIGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciB9IGZyb20gJy4vbGliL2RlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmV4cG9ydCB7IGRpcmVjdGl2ZSwgaXNEaXJlY3RpdmUgfSBmcm9tICcuL2xpYi9kaXJlY3RpdmUuanMnO1xuLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogcmVtb3ZlIGxpbmUgd2hlbiB3ZSBnZXQgTm9kZVBhcnQgbW92aW5nIG1ldGhvZHNcbmV4cG9ydCB7IHJlbW92ZU5vZGVzLCByZXBhcmVudE5vZGVzIH0gZnJvbSAnLi9saWIvZG9tLmpzJztcbmV4cG9ydCB7IG5vQ2hhbmdlLCBub3RoaW5nIH0gZnJvbSAnLi9saWIvcGFydC5qcyc7XG5leHBvcnQgeyBBdHRyaWJ1dGVDb21taXR0ZXIsIEF0dHJpYnV0ZVBhcnQsIEJvb2xlYW5BdHRyaWJ1dGVQYXJ0LCBFdmVudFBhcnQsIGlzSXRlcmFibGUsIGlzUHJpbWl0aXZlLCBOb2RlUGFydCwgUHJvcGVydHlDb21taXR0ZXIsIFByb3BlcnR5UGFydCB9IGZyb20gJy4vbGliL3BhcnRzLmpzJztcbmV4cG9ydCB7IHBhcnRzLCByZW5kZXIgfSBmcm9tICcuL2xpYi9yZW5kZXIuanMnO1xuZXhwb3J0IHsgdGVtcGxhdGVDYWNoZXMsIHRlbXBsYXRlRmFjdG9yeSB9IGZyb20gJy4vbGliL3RlbXBsYXRlLWZhY3RvcnkuanMnO1xuZXhwb3J0IHsgVGVtcGxhdGVJbnN0YW5jZSB9IGZyb20gJy4vbGliL3RlbXBsYXRlLWluc3RhbmNlLmpzJztcbmV4cG9ydCB7IFNWR1RlbXBsYXRlUmVzdWx0LCBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gJy4vbGliL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5leHBvcnQgeyBjcmVhdGVNYXJrZXIsIGlzVGVtcGxhdGVQYXJ0QWN0aXZlLCBUZW1wbGF0ZSB9IGZyb20gJy4vbGliL3RlbXBsYXRlLmpzJztcbi8vIElNUE9SVEFOVDogZG8gbm90IGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSBvciB0aGUgYXNzaWdubWVudCBleHByZXNzaW9uLlxuLy8gVGhpcyBsaW5lIHdpbGwgYmUgdXNlZCBpbiByZWdleGVzIHRvIHNlYXJjaCBmb3IgbGl0LWh0bWwgdXNhZ2UuXG4vLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBpbmplY3QgdmVyc2lvbiBudW1iZXIgYXQgYnVpbGQgdGltZVxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgKHdpbmRvd1snbGl0SHRtbFZlcnNpb25zJ10gfHwgKHdpbmRvd1snbGl0SHRtbFZlcnNpb25zJ10gPSBbXSkpLnB1c2goJzEuMi4xJyk7XG59XG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGFuIEhUTUwgdGVtcGxhdGUgdGhhdCBjYW4gZWZmaWNpZW50bHlcbiAqIHJlbmRlciB0byBhbmQgdXBkYXRlIGEgY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3QgaHRtbCA9IChzdHJpbmdzLCAuLi52YWx1ZXMpID0+IG5ldyBUZW1wbGF0ZVJlc3VsdChzdHJpbmdzLCB2YWx1ZXMsICdodG1sJywgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yKTtcbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYW4gU1ZHIHRlbXBsYXRlIHRoYXQgY2FuIGVmZmljaWVudGx5XG4gKiByZW5kZXIgdG8gYW5kIHVwZGF0ZSBhIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IHN2ZyA9IChzdHJpbmdzLCAuLi52YWx1ZXMpID0+IG5ldyBTVkdUZW1wbGF0ZVJlc3VsdChzdHJpbmdzLCB2YWx1ZXMsICdzdmcnLCBkZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGl0LWh0bWwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ZpZ21hLXBsdWdpbi1kcy5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRjb25zdCBkaXNjbG9zdXJlU2VsZWN0b3IgPSAnZGlzY2xvc3VyZSc7XG5cblx0Ly9QUklWQVRFXG5cdGNvbnN0IGRpc2Nsb3N1cmVIYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0bGV0IGRpc2Nsb3N1cmVTZXQgPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcblx0XHRsZXQgZGlzY2xvc3VyZXNJblNldCA9IGRpc2Nsb3N1cmVTZXQucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcblx0XHRsZXQgYWxyZWFkeUFjdGl2ZSA9IHRoaXMucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoZGlzY2xvc3VyZVNlbGVjdG9yICsgJy0tZXhwYW5kZWQnKTtcblxuXHRcdGRpc2Nsb3N1cmVzSW5TZXQuZm9yRWFjaCgoZGlzY2xvc3VyZSkgPT4ge1xuXHRcdFx0ZGlzY2xvc3VyZS5jbGFzc0xpc3QucmVtb3ZlKGRpc2Nsb3N1cmVTZWxlY3RvciArICctLWV4cGFuZGVkJyk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChkaXNjbG9zdXJlU2VsZWN0b3IgKyAnLS1leHBhbmRlZCcpO1xuXG5cdFx0aWYgKGFscmVhZHlBY3RpdmUpIHtcblx0XHRcdHRoaXMucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKGRpc2Nsb3N1cmVTZWxlY3RvciArICctLWV4cGFuZGVkJyk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vUFVCTElDXG5cdHdpbmRvdy5kaXNjbG9zdXJlID0ge1xuXHRcdGluaXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGxldCBkaXNjbG9zdXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgZGlzY2xvc3VyZVNlbGVjdG9yICsgJ19fbGFiZWwnKTtcblxuXHRcdFx0aWYgKGRpc2Nsb3N1cmVzKSB7XG5cdFx0XHRcdGRpc2Nsb3N1cmVzLmZvckVhY2goKGRpc2Nsb3N1cmUpID0+IHtcblx0XHRcdFx0XHRkaXNjbG9zdXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzY2xvc3VyZUhhbmRsZXIsIGZhbHNlKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGxldCBkaXNjbG9zdXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgZGlzY2xvc3VyZVNlbGVjdG9yICsgJ19fbGFiZWwnKTtcblxuXHRcdFx0aWYgKGRpc2Nsb3N1cmVzKSB7XG5cdFx0XHRcdGRpc2Nsb3N1cmVzLmZvckVhY2goKGRpc2Nsb3N1cmUpID0+IHtcblx0XHRcdFx0XHRkaXNjbG9zdXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzY2xvc3VyZUhhbmRsZXIsIGZhbHNlKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufSkoKTtcblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdGNvbnN0IHNlbGVjdE1lbnVTZWxlY3RvciA9ICdzZWxlY3QtbWVudSc7XG5cblx0bGV0IGVsZW1lbnRzLCBvcHRpb25MaXN0LCBpdGVtSGVpZ2h0LCBzZWxlY3RlZEl0ZW07XG5cdGxldCBpbml0ID0gZmFsc2U7XG5cblx0Ly9QUklWQVRFXG5cblx0Ly9jcmVhdGUgdGhlIG1lbnVzXG5cdGNvbnN0IGNyZWF0ZU1lbnVzID0gZnVuY3Rpb24gKCkge1xuXHRcdC8vIGxvb3AgdGhyb3VnaCBhbGwgc2VsZWN0IG1lbnVzIG9uIHNjcmVlblxuXHRcdGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG1lbnUsIGluZGV4KSB7XG5cdFx0XHQvLyAgc2V0dXAgbXV0YXRpb24gb2JzZXJ2ZXJcblx0XHRcdGxldCBtdXRhdGlvbkNvbmZpZyA9IHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH07XG5cdFx0XHRsZXQgY2FsbGJhY2sgPSBmdW5jdGlvbiAobXV0YXRpb25zTGlzdCwgb2JzZXJ2ZXIpIHtcblx0XHRcdFx0Zm9yIChsZXQgbXV0YXRpb24gb2YgbXV0YXRpb25zTGlzdCkge1xuXHRcdFx0XHRcdGlmIChtdXRhdGlvbi50eXBlID09PSAnY2hpbGRMaXN0Jykge1xuXHRcdFx0XHRcdFx0c2VsZWN0TWVudS5pbml0KCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycpIHtcblx0XHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdFx0bXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ3ZhbHVlJyB8fFxuXHRcdFx0XHRcdFx0XHRtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnZGlzYWJsZWQnXG5cdFx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdFx0c2VsZWN0TWVudS5pbml0KCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0bGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xuXHRcdFx0b2JzZXJ2ZXIub2JzZXJ2ZShtZW51LCBtdXRhdGlvbkNvbmZpZyk7XG5cblx0XHRcdC8va2VlcCB0cmFjayBvZiBtZW51IGhlaWdodCwgcmVzZXQgdG8gMCB3aGVuIGJ1aWxkaW5nIG5ldyBvbmVcblx0XHRcdGl0ZW1IZWlnaHQgPSAwO1xuXG5cdFx0XHQvL2NyZWF0ZSB0aGUgd3JhcHBlciBmb3IgdGhlIG1lbnVcblx0XHRcdGNyZWF0ZVdyYXBwZXIobWVudSk7XG5cblx0XHRcdC8vZmluZCBvdXQgaWYgYW4gaXRlbSBpcyBhbHJlYWR5IHNlbGVjdGVkXG5cdFx0XHRzZWxlY3RlZEl0ZW0gPSBtZW51LnNlbGVjdGVkSW5kZXg7XG5cblx0XHRcdC8vZmluZCBvdXQgaWYgdGhlcmUgYXJlIG9wdGlvbiBncm91cHMgcHJlc2VudFxuXHRcdFx0bGV0IG9wdGlvbkdyb3VwcyA9IEFycmF5LmZyb20obWVudS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnb3B0Z3JvdXAnKSk7XG5cblx0XHRcdGlmIChvcHRpb25Hcm91cHMubGVuZ3RoICE9IDApIHtcblx0XHRcdFx0Ly9kbyB0aGlzIGlmIG9wdGdyb3VwcyBwcmVzZW50XG5cblx0XHRcdFx0Ly9kZXRlcm1pbmUgaWYgdGhlIG9wdGlvbiBncm91cHMgaGF2ZSBsYWJlbHNcblx0XHRcdFx0bGV0IGhhc0xhYmVscyA9IG9wdGlvbkdyb3Vwc1swXS5sYWJlbCA/IHRydWUgOiBmYWxzZTtcblxuXHRcdFx0XHQvL2xvb3AgdGhyb3VnaCBldmVyeSBvcHRpb24gZ3JvdXBcblx0XHRcdFx0b3B0aW9uR3JvdXBzLmZvckVhY2goZnVuY3Rpb24gKGdyb3VwLCBpbmRleCkge1xuXHRcdFx0XHRcdGlmIChoYXNMYWJlbHMpIHtcblx0XHRcdFx0XHRcdGlmIChpbmRleCAhPSAwKSB7XG5cdFx0XHRcdFx0XHRcdGxldCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdFx0XHRcdGRpdmlkZXIuY2xhc3NOYW1lID0gc2VsZWN0TWVudVNlbGVjdG9yICsgJ19fZGl2aWRlcic7XG5cdFx0XHRcdFx0XHRcdG9wdGlvbkxpc3QuYXBwZW5kQ2hpbGQoZGl2aWRlcik7XG5cdFx0XHRcdFx0XHRcdGFkZEl0ZW1IZWlnaHQoZGl2aWRlcik7XG5cblx0XHRcdFx0XHRcdFx0Ly9wcmV2ZW50IGNsaWNrcyBvbiBvcHRncm91cCBkaXZpZGVyc1xuXHRcdFx0XHRcdFx0XHRkaXZpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RvcFByb3AsIGZhbHNlKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly9jcmVhdGUgdGhlIGRpdmlkZXIgZWxlbWVudCB3LyBhIGxhYmVsXG5cdFx0XHRcdFx0XHRsZXQgZGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRcdFx0ZGl2aWRlci50ZXh0Q29udGVudCA9IGdyb3VwLmxhYmVsO1xuXHRcdFx0XHRcdFx0ZGl2aWRlci5jbGFzc05hbWUgPSBzZWxlY3RNZW51U2VsZWN0b3IgKyAnX19kaXZpZGVyLWxhYmVsJztcblxuXHRcdFx0XHRcdFx0Ly9hZGQgdG8gbWVudVxuXHRcdFx0XHRcdFx0b3B0aW9uTGlzdC5hcHBlbmRDaGlsZChkaXZpZGVyKTtcblxuXHRcdFx0XHRcdFx0Ly9jYWxjdWxhdGUgYW5kIGFkZCBoZWlnaHQgb2YgZGl2aWRlclxuXHRcdFx0XHRcdFx0YWRkSXRlbUhlaWdodChkaXZpZGVyKTtcblxuXHRcdFx0XHRcdFx0Ly9wcmV2ZW50IGNsaWNrcyBvbiBvcHRncm91cCBkaXZpZGVyc1xuXHRcdFx0XHRcdFx0ZGl2aWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0b3BQcm9wLCBmYWxzZSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGluZGV4ID4gMCAmJiAhaGFzTGFiZWxzKSB7XG5cdFx0XHRcdFx0XHQvL2NyZWF0ZSB0aGUgZGl2aWRlciBlbGVtZW50XG5cdFx0XHRcdFx0XHRsZXQgZGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRcdFx0ZGl2aWRlci5jbGFzc05hbWUgPSBzZWxlY3RNZW51U2VsZWN0b3IgKyAnX19kaXZpZGVyJztcblxuXHRcdFx0XHRcdFx0Ly9hZGQgdG8gbWVudVxuXHRcdFx0XHRcdFx0b3B0aW9uTGlzdC5hcHBlbmRDaGlsZChkaXZpZGVyKTtcblxuXHRcdFx0XHRcdFx0Ly9jYWxjdWxhdGUgYW5kIGFkZCBoZWlnaHQgb2YgZGl2aWRlclxuXHRcdFx0XHRcdFx0YWRkSXRlbUhlaWdodChkaXZpZGVyKTtcblxuXHRcdFx0XHRcdFx0Ly9wcmV2ZW50IGNsaWNrcyBvbiBvcHRncm91cCBkaXZpZGVyc1xuXHRcdFx0XHRcdFx0ZGl2aWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0b3BQcm9wLCBmYWxzZSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly9nZXQgY2hpbGRyZW4gb2YgZ3JvdXBcblx0XHRcdFx0XHRsZXQgb3B0aW9ucyA9IEFycmF5LmZyb20oZ3JvdXAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ29wdGlvbicpKTtcblxuXHRcdFx0XHRcdC8vbG9vcCB0aHJvdWdoIGFsbCBvcHRpb25zIGFuZCBnZW5lcmF0ZSBhbiBpdGVtXG5cdFx0XHRcdFx0b3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcblx0XHRcdFx0XHRcdGNyZWF0ZU1lbnVJdGVtKG9wdGlvbik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly9kbyB0aGlzIGlmIHRoZXJlIGFyZSBubyBvcHRncm91cHNzXG5cblx0XHRcdFx0bGV0IG9wdGlvbnMgPSBBcnJheS5mcm9tKG1lbnUub3B0aW9ucyk7XG5cdFx0XHRcdC8vbG9vcCB0aHJvdWdoIGFsbCBvcHRpb25zIGFuZCBnZW5lcmF0ZSBhbiBpdGVtXG5cdFx0XHRcdG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG5cdFx0XHRcdFx0Y3JlYXRlTWVudUl0ZW0ob3B0aW9uKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0Ly9jcmVhdGUgdGhlIHdyYXBwZXIgZm9yIHRoZSBzZWxlY3QgbWVudVxuXHQvL2luY2x1ZGVzIGJ1dHRvbiBhbmQgZ2VuZXJhdGVzIHRoZSB3cmFwcGVyIFVMIGZvciB0aGUgbGlzdCBvZiBtZW51IGl0ZW1zXG5cdGNvbnN0IGNyZWF0ZVdyYXBwZXIgPSBmdW5jdGlvbiAobWVudSkge1xuXHRcdC8vYWRkIHRvcCBtYXJnaW5cblx0XHRpdGVtSGVpZ2h0ICs9IDY7XG5cblx0XHQvL2hpZGUgdGhlIHNlbGVjdCBtZW51XG5cdFx0bWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG5cdFx0Ly9zZXQgdGhlIHNlbGVjdGVkIG9wdGlvbiB0byBjb3JyZWN0IG1lbnUgaXRlbSBpZiBub3Qgc2V0XG5cblx0XHRpZiAobWVudS5zZWxlY3RlZEluZGV4ICE9IC0xKSB7XG5cdFx0XHRtZW51Lm9wdGlvbnNbbWVudS5zZWxlY3RlZEluZGV4XS5zZWxlY3RlZCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0Ly9jcmVhdGUgdGhlIHdyYXBwZXIsIGFuZCBpbnNlcnQgdGhlIGhpZGRlbiBzZWxlY3QgbWVudVxuXHRcdGxldCBtZW51V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdG1lbnVXcmFwcGVyLmNsYXNzTmFtZSA9IHNlbGVjdE1lbnVTZWxlY3Rvcjtcblx0XHRtZW51LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG1lbnVXcmFwcGVyLCBtZW51KTtcblx0XHRtZW51V3JhcHBlci5hcHBlbmRDaGlsZChtZW51KTtcblxuXHRcdC8vZGV0ZXJtaW5lIGlmIGFuIGljb24gaXMgc3BlY2lmaWVkXG5cdFx0bGV0IGljb25OYW1lID0gbWVudS5nZXRBdHRyaWJ1dGUoJ2ljb24nKTtcblxuXHRcdC8vY3JlYXRlIHRoZSBidXR0b24gKyBuZXN0ZWQgZWxlbWVudHNcblx0XHRsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0bGV0IGljb247XG5cdFx0bGV0IGJ1dHRvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdGxldCBidXR0b25DYXJldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRpZiAoaWNvbk5hbWUpIHtcblx0XHRcdGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRpY29uLmNsYXNzTmFtZSA9ICdpY29uICcgKyBpY29uTmFtZTtcblx0XHR9XG5cblx0XHQvL2FkZCBjbGFzc2VzXG5cdFx0YnV0dG9uLmNsYXNzTmFtZSA9IHNlbGVjdE1lbnVTZWxlY3RvciArICdfX2J1dHRvbic7XG5cdFx0YnV0dG9uTGFiZWwuY2xhc3NOYW1lID0gc2VsZWN0TWVudVNlbGVjdG9yICsgJ19fbGFiZWwnO1xuXHRcdGJ1dHRvbkNhcmV0LmNsYXNzTmFtZSA9IHNlbGVjdE1lbnVTZWxlY3RvciArICdfX2NhcmV0JztcblxuXHRcdC8vYWRkIGNvbnRlbnRcblx0XHRpZiAobWVudS5zZWxlY3RlZEluZGV4ICE9IC0xKSB7XG5cdFx0XHRidXR0b25MYWJlbC50ZXh0Q29udGVudCA9IG1lbnUub3B0aW9uc1ttZW51LnNlbGVjdGVkSW5kZXhdLnRleHQ7XG5cdFx0XHRpZiAobWVudS5vcHRpb25zW21lbnUuc2VsZWN0ZWRJbmRleF0udmFsdWUgPT09ICcnKSB7XG5cdFx0XHRcdGJ1dHRvbkxhYmVsLmNsYXNzTGlzdC5hZGQoc2VsZWN0TWVudVNlbGVjdG9yICsgJ19fbGFiZWwtLXBsYWNlaG9sZGVyJyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJ1dHRvbkxhYmVsLnRleHRDb250ZW50ID0gJ05vIGl0ZW1zIHRvIGRpc3BsYXknO1xuXHRcdFx0YnV0dG9uTGFiZWwuY2xhc3NMaXN0LmFkZChzZWxlY3RNZW51U2VsZWN0b3IgKyAnX19sYWJlbC0tcGxhY2Vob2xkZXInKTtcblx0XHR9XG5cblx0XHQvL2NyZWF0ZSB0aGUgbWVudSBjb250YWluZXJcblx0XHRvcHRpb25MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblx0XHRvcHRpb25MaXN0LmNsYXNzTmFtZSA9IHNlbGVjdE1lbnVTZWxlY3RvciArICdfX21lbnUnO1xuXG5cdFx0Ly9hZGQgZWxlbWVudHMgdG8gZG9tXG5cdFx0bWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblx0XHRtZW51V3JhcHBlci5hcHBlbmRDaGlsZChvcHRpb25MaXN0KTtcblx0XHRpZiAoaWNvbikge1xuXHRcdFx0YnV0dG9uLmFwcGVuZENoaWxkKGljb24pO1xuXHRcdH1cblx0XHRidXR0b24uYXBwZW5kQ2hpbGQoYnV0dG9uTGFiZWwpO1xuXHRcdGJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b25DYXJldCk7XG5cblx0XHQvL2FkZCBldmVudCBsaXN0ZW5lclxuXHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlNZW51LCBmYWxzZSk7XG5cdH07XG5cblx0Ly9jcmVhdGUgYSBsaXN0IGl0ZW1cblx0Y29uc3QgY3JlYXRlTWVudUl0ZW0gPSBmdW5jdGlvbiAobWVudUl0ZW0pIHtcblx0XHQvKiBvbmx5IGNyZWF0ZSBhbiBpdGVtIGlmIHRoZXJlIGlzIGEgdmFsdWUgdGhpcyB3aWxsIGlnbm9yZSBcbiAgICAgICAgdGhlIGZpcnN0IG1lbnUgaXRlbSAoaWYgaW5jbHVkZWQpIGFzIGEgcGxhY2Vob2xkZXIgKi9cblx0XHRpZiAobWVudUl0ZW0uaGFzQXR0cmlidXRlKCd2YWx1ZScpICYmIG1lbnVJdGVtLnZhbHVlICE9ICcnKSB7XG5cdFx0XHQvL2NyZWF0ZSBsaXN0IGl0ZW0gZWxlbWVudHNcblx0XHRcdGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0XHRcdGxldCBpdGVtSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdGxldCBpdGVtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cblx0XHRcdC8vc2V0IGNsYXNzbmFtZXNcblx0XHRcdGl0ZW0uY2xhc3NOYW1lID0gc2VsZWN0TWVudVNlbGVjdG9yICsgJ19faXRlbSc7XG5cdFx0XHRpdGVtSWNvbi5jbGFzc05hbWUgPSBzZWxlY3RNZW51U2VsZWN0b3IgKyAnX19pdGVtLWljb24nO1xuXHRcdFx0aXRlbUxhYmVsLmNsYXNzTmFtZSA9IHNlbGVjdE1lbnVTZWxlY3RvciArICdfX2l0ZW0tbGFiZWwnO1xuXG5cdFx0XHQvL2FkZCBlbGVtZW50cyB0byBkb21cblx0XHRcdGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUljb24pO1xuXHRcdFx0aXRlbS5hcHBlbmRDaGlsZChpdGVtTGFiZWwpO1xuXHRcdFx0b3B0aW9uTGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcblxuXHRcdFx0Ly9jb25maWd1cmUgYXR0cmlidXRlc1xuXHRcdFx0aXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnLCBtZW51SXRlbS52YWx1ZSk7XG5cdFx0XHRpdGVtTGFiZWwudGV4dENvbnRlbnQgPSBtZW51SXRlbS50ZXh0O1xuXHRcdFx0aXRlbS5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgaXRlbUhlaWdodCk7XG5cblx0XHRcdC8qIGFmdGVyIHRoZSBpdGVtIGlzIGNyZWF0ZWQgd2UgcGFzcyB0aGlzIGVsZW1lbnQgdG8gdGhpcyBmdW5jdGlvblxuICAgICAgICAgICAgdGhpcyBmdW5jdGlvbiBjYWxjdWxhdGVzIHRoZSBoZWlnaHQgb2YgdGhlIGl0ZW0gYW5kIGluY3JlYXNlcyB2YWx1ZVxuICAgICAgICAgICAgb2YgdGhlIGl0ZW0gaGVpZ2h0IHZhciAqL1xuXHRcdFx0YWRkSXRlbUhlaWdodChpdGVtKTtcblxuXHRcdFx0Ly9pZiBpdGVtIGlzIHNlbGVjdGVkLCBhZGQgYWN0aXZlIGNsYXNzXG5cdFx0XHRpZiAobWVudUl0ZW0uaW5kZXggPT09IHNlbGVjdGVkSXRlbSkge1xuXHRcdFx0XHRpdGVtLmNsYXNzTGlzdC5hZGQoc2VsZWN0TWVudVNlbGVjdG9yICsgJ19faXRlbS0tc2VsZWN0ZWQnKTtcblx0XHRcdFx0bGV0IG1lbnVQb3NpdGlvbiA9IC1NYXRoLmFicyhwYXJzZUludChpdGVtLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSkpO1xuXHRcdFx0XHRvcHRpb25MaXN0LnN0eWxlLnRvcCA9IG1lbnVQb3NpdGlvbiArICdweCc7XG5cdFx0XHR9XG5cblx0XHRcdC8vZXZlbnQgbGlzdGVuZXJcblx0XHRcdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5TWVudSwgZmFsc2UpO1xuXHRcdH1cblx0fTtcblxuXHQvL2Z1bmN0aW9uIHRvIGRpc3BsYXkgdGhlIG1lbnUgd2hlbiBjbGlja2VkXG5cdHZhciBkaXNwbGF5TWVudSA9IGZ1bmN0aW9uIChldmVudCkge1xuXHRcdC8qdGhlIGV2ZW50IGlzIGFueSBjbGljayByZWdpc3RlcmVkIGluc2lkZSB0aGUgZWxlbWVudFxuICAgICAgICBhbmQgdGhlbiBkZXRlcm1pbmUgaWYgdGhlIGJ1dHRvbiBvciBtZW51IGl0ZW0gaXMgY2xpY2tlZCAqL1xuXHRcdGlmICh0aGlzLnRhZ05hbWUgPT0gJ0JVVFRPTicpIHtcblx0XHRcdC8vZ2V0IHRoZSBtZW51IGVsZW1lbnQgc28gd2UgY2FuIHNlZSBpZiB0aGVyZSBhcmUgb3B0aW9ucyB0byBkaXNwbGF5XG5cdFx0XHRsZXQgc2VsZWN0TWVudSA9IHRoaXMucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcblxuXHRcdFx0aWYgKHNlbGVjdE1lbnUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuXHRcdFx0XHQvL2FkZCBhY3RpdmUgY2xhc3MgdG8gYnV0dG9uIChpcyB0aGlzIG5lZWRlZD8pXG5cdFx0XHRcdHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShzZWxlY3RNZW51U2VsZWN0b3IgKyAnX19idXR0b24tLWFjdGl2ZScpO1xuXG5cdFx0XHRcdC8vdG9nZ2xlIHRoZSBtZW51XG5cdFx0XHRcdGxldCBtZW51ID0gdGhpcy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ1VMJyk7XG5cdFx0XHRcdG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShzZWxlY3RNZW51U2VsZWN0b3IgKyAnX19tZW51LS1hY3RpdmUnKTtcblxuXHRcdFx0XHQvL3VwZGF0ZSBwb3NpdGlvbiBvZiBtZW51XG5cdFx0XHRcdHJlc2l6ZUFuZFBvc2l0aW9uKG1lbnUpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmJsdXIoKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMudGFnTmFtZSA9PT0gJ0xJJykge1xuXHRcdFx0Ly9kZWZpbmUgdGhlIG1lbnVcblx0XHRcdGxldCBtZW51ID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignVUwnKTtcblxuXHRcdFx0Ly9yZW1vdmUgYWN0aXZlIGNsYXNzc2VzIGZyb20gYWxsIG1lbnVzXG5cdFx0XHRsZXQgbWVudUl0ZW1zID0gQXJyYXkuZnJvbShtZW51LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdMSScpKTtcblx0XHRcdG1lbnVJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShzZWxlY3RNZW51U2VsZWN0b3IgKyAnX19pdGVtLS1zZWxlY3RlZCcpO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vc2VsZWN0IGl0ZW1cblx0XHRcdHRoaXMuY2xhc3NMaXN0LmFkZChzZWxlY3RNZW51U2VsZWN0b3IgKyAnX19pdGVtLS1zZWxlY3RlZCcpO1xuXG5cdFx0XHQvL3VwZGF0ZSB0aGUgdmFsdWUgb2YgdGhlIHNlbGVjdCBtZW51XG5cdFx0XHRsZXQgc2VsZWN0ID0gbWVudS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ1NFTEVDVCcpO1xuXHRcdFx0bGV0IHNlbGVjdGVkVmFsdWUgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpO1xuXHRcdFx0bGV0IG9wdGlvbnMgPSBzZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XG5cblx0XHRcdC8vcmVtb3ZlIHNlbGVjdGVkIG9wdGlvbiBmb3IgYWxsIGVsZW1lbnRzXG5cdFx0XHRvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuXHRcdFx0XHRpZiAob3B0aW9uLnZhbHVlID09PSBzZWxlY3RlZFZhbHVlKSB7XG5cdFx0XHRcdFx0b3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRvcHRpb24ucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdHNlbGVjdC52YWx1ZSA9IHNlbGVjdGVkVmFsdWU7XG5cblx0XHRcdC8vZGlzcGF0Y2ggY2hhbmdlIGV2ZW50XG5cdFx0XHRsZXQgZXZlbnQgPSBuZXcgRXZlbnQoJ2NoYW5nZScpO1xuXHRcdFx0c2VsZWN0LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXG5cdFx0XHQvL3VwZGF0ZSB0aGUgYnV0dG9uIG9uIHRoZSBkcm9wZG93blxuXHRcdFx0bGV0IGJ1dHRvbiA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ0JVVFRPTicpO1xuXHRcdFx0bGV0IGJ1dHRvbkxhYmVsID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy4nICsgc2VsZWN0TWVudVNlbGVjdG9yICsgJ19fbGFiZWwnKTtcblx0XHRcdGJ1dHRvbkxhYmVsLnRleHRDb250ZW50ID0gdGhpcy50ZXh0Q29udGVudDtcblx0XHRcdGJ1dHRvbkxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoc2VsZWN0TWVudVNlbGVjdG9yICsgJ19fbGFiZWwtLXBsYWNlaG9sZGVyJyk7XG5cblx0XHRcdGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKHNlbGVjdE1lbnVTZWxlY3RvciArICdfX2J1dHRvbi0tYWN0aXZlJyk7XG5cblx0XHRcdC8vdG9nZ2xlIHRoZSBkcm9wZG93biB2aXNpYmlsaXR5XG5cdFx0XHRtZW51LmNsYXNzTGlzdC50b2dnbGUoc2VsZWN0TWVudVNlbGVjdG9yICsgJ19fbWVudS0tYWN0aXZlJyk7XG5cblx0XHRcdC8vdXBkYXRlIHRoZSBwb3NpdGlvbiBvZiB0aGUgZHJvcCBkb3duIGFmdGVyIGhpZGRlblxuXHRcdFx0bGV0IG1lbnVQb3NpdGlvbiA9IC1NYXRoLmFicyhwYXJzZUludCh0aGlzLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSkpO1xuXHRcdFx0bWVudS5zdHlsZS50b3AgPSBtZW51UG9zaXRpb24gKyAncHgnO1xuXG5cdFx0XHQvL3VwZGF0ZSBwb3NpdGlvbiBvZiBtZW51XG5cdFx0XHRyZXNpemVBbmRQb3NpdGlvbihtZW51KTtcblx0XHR9XG5cdH07XG5cblx0Ly8gZXZlbnQgaGFuZGxlcnNcblxuXHQvL3N0b3AgZXZlbnQgcHJvcGFnYXRpb25cblx0dmFyIHN0b3BQcm9wID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdH07XG5cblx0Ly90cmFjayBjbGlja3Mgb3V0c2lkZSB0aGUgbWVudVxuXHR2YXIgaXNPdXRzaWRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0bGV0IHNlbGVjdE1lbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0LicgKyBzZWxlY3RNZW51U2VsZWN0b3IpO1xuXG5cdFx0c2VsZWN0TWVudXMuZm9yRWFjaCgoc2VsZWN0KSA9PiB7XG5cdFx0XHRsZXQgbWVudVdyYXBwZXIgPSBzZWxlY3QucGFyZW50Tm9kZTtcblx0XHRcdGxldCBtZW51ID0gbWVudVdyYXBwZXIucXVlcnlTZWxlY3RvcignVUwnKTtcblx0XHRcdGxldCBidXR0b24gPSBtZW51V3JhcHBlci5xdWVyeVNlbGVjdG9yKCdCVVRUT04nKTtcblxuXHRcdFx0aWYgKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdE1lbnVTZWxlY3RvciArICdfX21lbnUtLWFjdGl2ZScpKSB7XG5cdFx0XHRcdGxldCBjbGlja0luc2lkZSA9IG1lbnVXcmFwcGVyLmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7XG5cdFx0XHRcdGlmICghY2xpY2tJbnNpZGUpIHtcblx0XHRcdFx0XHRtZW51LmNsYXNzTGlzdC5yZW1vdmUoc2VsZWN0TWVudVNlbGVjdG9yICsgJ19fbWVudS0tYWN0aXZlJyk7XG5cdFx0XHRcdFx0YnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoc2VsZWN0TWVudVNlbGVjdG9yICsgJ19fYnV0dG9uLS1hY3RpdmUnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXG5cdC8vIHRoaXMgZnVuY3Rpb24gZW5zdXJlcyB0aGF0IHRoZSBzZWxlY3QgbWVudVxuXHQvLyBmaXRzIGluc2lkZSB0aGUgcGx1Z2luIHZpZXdwb3J0XG5cdC8vIGlmIGl0cyB0b28gYmlnLCBpdCB3aWxsIHJlc2l6ZSBpdCBhbmQgZW5hYmxlIGEgc2Nyb2xsYmFyXG5cdC8vIGlmIGl0cyBvZmYgc2NyZWVuIGl0IHdpbGwgc2hpZnQgdGhlIHBvc2l0aW9uXG5cdGNvbnN0IHJlc2l6ZUFuZFBvc2l0aW9uID0gZnVuY3Rpb24gKG1lbnUpIHtcblx0XHQvL3NldCB0aGUgbWF4IGhlaWdodCBvZiB0aGUgbWVudSBiYXNlZCBvbiBwbHVnaW4vaWZyYW1lIHdpbmRvd1xuXHRcdGxldCBtYXhNZW51SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gMTY7XG5cdFx0bGV0IG1lbnVIZWlnaHQgPSBtZW51Lm9mZnNldEhlaWdodDtcblx0XHRsZXQgbWVudVJlc2l6ZWQgPSBmYWxzZTtcblx0XHRsZXQgbWVudUJ1dHRvbiA9IG1lbnUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdCVVRUT04nKTtcblxuXHRcdGlmIChtZW51SGVpZ2h0ID4gbWF4TWVudUhlaWdodCkge1xuXHRcdFx0bWVudS5zdHlsZS5oZWlnaHQgPSBtYXhNZW51SGVpZ2h0ICsgJ3B4Jztcblx0XHRcdG1lbnVSZXNpemVkID0gdHJ1ZTtcblx0XHR9XG5cblx0XHQvL2xldHMgYWRqdXN0IHRoZSBwb3NpdGlvbiBvZiB0aGUgbWVudSBpZiBpdHMgY3V0IG9mZiBmcm9tIHZpZXdwb3J0XG5cdFx0bGV0IGJvdW5kaW5nID0gbWVudS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRsZXQgcGFyZW50Qm91bmRpbmcgPSBtZW51QnV0dG9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0aWYgKGJvdW5kaW5nLnRvcCA8IDApIHtcblx0XHRcdG1lbnUuc3R5bGUudG9wID0gLU1hdGguYWJzKHBhcmVudEJvdW5kaW5nLnRvcCAtIDgpICsgJ3B4Jztcblx0XHR9XG5cdFx0aWYgKGJvdW5kaW5nLmJvdHRvbSA+ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkpIHtcblx0XHRcdGxldCBtaW5Ub3AgPSAtTWF0aC5hYnMocGFyZW50Qm91bmRpbmcudG9wIC0gKHdpbmRvdy5pbm5lckhlaWdodCAtIG1lbnVIZWlnaHQgLSA4KSk7XG5cdFx0XHRsZXQgbmV3VG9wID0gLU1hdGguYWJzKGJvdW5kaW5nLmJvdHRvbSAtIHdpbmRvdy5pbm5lckhlaWdodCArIDE2KTtcblx0XHRcdGlmIChtZW51UmVzaXplZCkge1xuXHRcdFx0XHRtZW51LnN0eWxlLnRvcCA9IC1NYXRoLmFicyhwYXJlbnRCb3VuZGluZy50b3AgLSA4KSArICdweCc7XG5cdFx0XHR9IGVsc2UgaWYgKG5ld1RvcCA+IG1pblRvcCkge1xuXHRcdFx0XHRtZW51LnN0eWxlLnRvcCA9IG1pblRvcCArICdweCc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtZW51LnN0eWxlLnRvcCA9IG5ld1RvcCArICdweCc7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdC8vaGVscGVyIGZ1bmN0aW9uc1xuXG5cdC8vaW5jcmVtZW50IGl0ZW1IZWlnaHRcblx0ZnVuY3Rpb24gYWRkSXRlbUhlaWdodChlbGVtZW50KSB7XG5cdFx0Ly9nZXQga2V5IGRpbWVuc2lvbnMgdG8gY2FsY3VsYXRlIGhlaWdodFxuXHRcdGxldCBkaW1lbnNpb25zID0gW1xuXHRcdFx0cGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLXRvcCcpKSxcblx0XHRcdHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1ib3R0b20nKSksXG5cdFx0XHRwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXRvcCcpKSxcblx0XHRcdHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctYm90dG9tJykpLFxuXHRcdFx0cGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgnaGVpZ2h0JykpXG5cdFx0XTtcblxuXHRcdGl0ZW1IZWlnaHQgKz0gYXJyYXlTdW0oZGltZW5zaW9ucyk7XG5cdH1cblx0Ly9oZWxwZXIgZnVuY3Rpb24gdG8gcmV0dXJuIHN1bSBvZiBhcnJheVxuXHRmdW5jdGlvbiBhcnJheVN1bShkYXRhKSB7XG5cdFx0cmV0dXJuIGRhdGEucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0XHRyZXR1cm4gYSArIGI7XG5cdFx0fSwgMCk7XG5cdH1cblxuXHQvLyBQVUJMSUNcblx0d2luZG93LnNlbGVjdE1lbnUgPSB7XG5cdFx0aW5pdDogZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly9kZXN0cm95IGZpcnN0IGlmIGFscmVhZHkgaW5pdGlhbGl6ZWRcblx0XHRcdGlmIChpbml0ID09IHRydWUpIHtcblx0XHRcdFx0dGhpcy5kZXN0cm95KCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vaW5pdGlhbGl6ZSBhbGwgbWVudXNcblx0XHRcdGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBzZWxlY3RNZW51U2VsZWN0b3IpO1xuXG5cdFx0XHRpZiAoZWxlbWVudHMpIHtcblx0XHRcdFx0Ly9jcmVhdGUgdGhlIG1lbnUocylcblx0XHRcdFx0Y3JlYXRlTWVudXMoKTtcblxuXHRcdFx0XHQvL2NsaWNrIGhhbmRsZXIgZm9yIGNsaWNrcyBvdXRzaWRlIG9mIG1lbnVcblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpc091dHNpZGUsIGZhbHNlKTtcblxuXHRcdFx0XHQvL3NldCBpbml0IHRvIHRydWUgbm93IHRoYXQgbWVudSBoYXMgYmVlbiBpbml0aWFsaXplZFxuXHRcdFx0XHRpbml0ID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0ZGVzdHJveTogZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKGVsZW1lbnRzKSB7XG5cdFx0XHRcdC8vcmVtb3ZlIGFsbCB0aGUgZ2VuZXJhdGVkIERPTSBlbGVtZW50c1xuXHRcdFx0XHRlbGVtZW50cy5mb3JFYWNoKChtZW51KSA9PiB7XG5cdFx0XHRcdFx0bGV0IHBhcmVudCA9IG1lbnUucGFyZW50Tm9kZTtcblx0XHRcdFx0XHRwYXJlbnQucXVlcnlTZWxlY3RvcignQlVUVE9OJykucmVtb3ZlKCk7XG5cdFx0XHRcdFx0cGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ1VMJykucmVtb3ZlKCk7XG5cdFx0XHRcdFx0cGFyZW50Lm91dGVySFRNTCA9IHBhcmVudC5pbm5lckhUTUw7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdC8vcmVtb3ZlIGV2ZW50IGhhbmRsZXIgb24gZWFjaCBlbGVtZW50XG5cdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaXNPdXRzaWRlLCBmYWxzZSk7XG5cblx0XHRcdFx0Ly9zZXQgaW5pdCB0byBmYWxzZSBub3cgdGhhdCBtZW51IGhhcyBiZWVuIGRlc3Ryb3llZFxuXHRcdFx0XHRpbml0ID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufSkoKTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi91aS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8qXG4gICAgVGhpcyBjb2RlIHdpbGwgbGl2ZSBpbiB0aGUgPGlmcmFtZT4gd2l0aGluIEZpZ21hLlxuICAgIEl0IGhhcyBhY2Nlc3MgdG8gYWxsIHRoZSBicm93c2VyIEFQSXMuXG4qL1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBodG1sLCByZW5kZXIsIH0gZnJvbSAnLi4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpdC1odG1sLmpzJztcbmltcG9ydCAnLi9saWJzL2ZpZ21hLWRzL2ZpZ21hLXBsdWdpbi1kcy5jc3MnO1xuaW1wb3J0ICcuL2xpYnMvZmlnbWEtZHMvZmlnbWEtcGx1Z2luLWRzLmpzJztcbmltcG9ydCAnLi91aS5jc3MnO1xuY29uc3QgcGx1Z2luU2VydmVyID0gJ2h0dHBzOi8vZmlnbWEtb3Blbi1ncmFwaC1zZXJ2ZXIuamFndGFsb24ud29ya2Vycy5kZXYvJztcbmxldCBjYWNoZWRSZXNwb25zZSA9IHt9O1xuLy8gRXhhbXBsZSBidXR0b25zXG4vLyBUaGVzZSBwcm92aWRlIGV4YW1wbGUgVVJMcyB0aGF0IHRoZSB1c2VyIGNhbiB1c2UgdG8gdHJ5IG91dCB0aGUgcGx1Z2luLlxubGV0IGNyYXdsVXJsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVybCBpbnB1dCcpO1xubGV0IGV4YW1wbGVUYWdzID0gZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvckFsbCgnLmV4YW1wbGVzIHNwYW4nKVxuICAgIC5mb3JFYWNoKChleGFtcGxlKSA9PiB7XG4gICAgZXhhbXBsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBjcmF3bFVybC52YWx1ZSA9IGV4YW1wbGUuZGF0YXNldC51cmw7XG4gICAgICAgIGNyYXdsVXJsLmZvY3VzKCk7XG4gICAgfSk7XG59KTtcbi8vIFN1Ym1pdCBidXR0b25cbi8vIE9uY2UgdGhpcyBpcyBjbGlja2VkLCB0aGUgcGx1Z2luIHNlbmRzIHRoZSBVUkwgdG8gdGhlIHNlcnZlciBhbmQgd2FpdHMgZm9yXG4vLyBhIHJlc3BvbnNlIGJhY2suXG5sZXQgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVybCBidXR0b24nKTtcbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIGlmIChjcmF3bFVybC52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgYCR7cGx1Z2luU2VydmVyfT91cmw9JHtjcmF3bFVybC52YWx1ZX1gKTtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICAgIHJlcXVlc3Qub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgcGx1Z2luTWVzc2FnZToge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncmVzaXplJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ2MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sICcqJyk7XG4gICAgICAgICAgICBjYWNoZWRSZXNwb25zZSA9IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICAgICAgICByZW5kZXJFbGVtZW50cyhyZXF1ZXN0LnJlc3BvbnNlLCB7XG4gICAgICAgICAgICAgICAgc2hvd0ltYWdlOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgIH1cbn0pO1xuLy8gRW5jb2RlIHRoZSBJbWFnZURhdGEgaW50byBVaW50OEFycmF5XG5mdW5jdGlvbiBlbmNvZGUoY2FudmFzLCBjb250ZXh0LCBpbWFnZURhdGEpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb250ZXh0LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIDAsIDApO1xuICAgICAgICByZXR1cm4geWllbGQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY2FudmFzLnRvQmxvYigoYmxvYikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUobmV3IFVpbnQ4QXJyYXkocmVhZGVyLnJlc3VsdCkpO1xuICAgICAgICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gKCkgPT4gcmVqZWN0KG5ldyBFcnJvcignQ291bGQgbm90IHJlYWQgZnJvbSBibG9iJykpO1xuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8vIEVuY29kZSB0aGUgaW1hZ2UgdGhlbiBzZW5kIGl0IHRvIEZpZ21hLlxuZnVuY3Rpb24gc2VuZEltYWdlKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gdGhpcy5uYXR1cmFsV2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLm5hdHVyYWxIZWlnaHQ7XG4gICAgICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMsIDAsIDApO1xuICAgICAgICBsZXQgaW1hZ2VEYXRhID0gY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy5uYXR1cmFsV2lkdGgsIHRoaXMubmF0dXJhbEhlaWdodCk7XG4gICAgICAgIGxldCBlbmNvZGVkSW1hZ2UgPSB5aWVsZCBlbmNvZGUoY2FudmFzLCBjb250ZXh0LCBpbWFnZURhdGEpO1xuICAgICAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIHBsdWdpbk1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW1wb3J0LWltYWdlJyxcbiAgICAgICAgICAgICAgICBieXRlczogZW5jb2RlZEltYWdlLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLm5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMubmF0dXJhbEhlaWdodCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sICcqJyk7XG4gICAgfSk7XG59XG4vLyBSZS1yZW5kZXIgdGhlIGVsZW1lbnRzIHdpdGhvdXQgc2hvd2luZyB0aGUgaW1hZ2VzLlxuZnVuY3Rpb24gbm9JbWFnZSgpIHtcbiAgICByZW5kZXJFbGVtZW50cyhjYWNoZWRSZXNwb25zZSwge1xuICAgICAgICBzaG93SW1hZ2U6IGZhbHNlLFxuICAgIH0pO1xufVxuLy8gRGVmaW5lIHRoZSB0ZW1wbGF0ZXMgZm9yIGRpc3BsYXlpbmcgdGhlIGRhdGEuXG5jb25zdCBtYWluVGVtcGxhdGUgPSAodGVtcGxhdGVzKSA9PiBodG1sIGAke3RlbXBsYXRlc31gO1xuY29uc3QgdGV4dFRlbXBsYXRlID0gKGRhdGEpID0+IGh0bWwgYDxkaXYgY2xhc3M9XCJ0ZXh0LWRhdGFcIiBAY2xpY2s9XCIke2NvcHlDb250ZW50fVwiPiR7ZGF0YX08L2Rpdj5gO1xuY29uc3QgaW1hZ2VUZW1wbGF0ZSA9IChkYXRhKSA9PiBodG1sIGA8ZGl2IGNsYXNzPSdpbWFnZS1kYXRhJz5cbiAgICAgICAgICAgIDxpbWcgc3JjPScke2RhdGF9JyBAY2xpY2s9XCIke3NlbmRJbWFnZX1cIiBjcm9zc29yaWdpbj0nJyBAZXJyb3I9XCIke25vSW1hZ2V9XCI+PC9pbWc+XG4gICAgICAgICA8L2Rpdj5gO1xuLy8gRGlzcGxheSB0aGUgZGF0YSB0aGF0IHdlIGdvdC5cbmZ1bmN0aW9uIHJlbmRlckVsZW1lbnRzKHJlc3BvbnNlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHQnKTtcbiAgICAgICAgbGV0IGRhdGFUZW1wbGF0ZXMgPSBbXTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHJlc3BvbnNlLnJlc3VsdCB8fCB7fTtcbiAgICAgICAgaWYgKHJlc3VsdFsnb2c6c2l0ZV9uYW1lJ10pIHtcbiAgICAgICAgICAgIGRhdGFUZW1wbGF0ZXMucHVzaCh0ZXh0VGVtcGxhdGUocmVzdWx0WydvZzpzaXRlX25hbWUnXSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHRbJ29nOnRpdGxlJ10pIHtcbiAgICAgICAgICAgIGRhdGFUZW1wbGF0ZXMucHVzaCh0ZXh0VGVtcGxhdGUocmVzdWx0WydvZzp0aXRsZSddKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdFsndHdpdHRlcjpzaXRlJ10pIHtcbiAgICAgICAgICAgIGRhdGFUZW1wbGF0ZXMucHVzaCh0ZXh0VGVtcGxhdGUocmVzdWx0Wyd0d2l0dGVyOnNpdGUnXSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHRbJ3R3aXR0ZXI6ZGVzY3JpcHRpb24nXSkge1xuICAgICAgICAgICAgZGF0YVRlbXBsYXRlcy5wdXNoKHRleHRUZW1wbGF0ZShyZXN1bHRbJ3R3aXR0ZXI6ZGVzY3JpcHRpb24nXSkpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBvZ0ltYWdlID0gcmVzdWx0WydvZzppbWFnZSddIHx8IHJlc3VsdFsndHdpdHRlcjppbWFnZSddO1xuICAgICAgICBpZiAob2dJbWFnZSAmJiBvcHRpb25zLnNob3dJbWFnZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgcHJveHlJbWFnZVJlc3BvbnNlID0geWllbGQgZmV0Y2goYCR7cGx1Z2luU2VydmVyfT91cmw9JHtvZ0ltYWdlfWApO1xuICAgICAgICAgICAgICAgIGlmIChwcm94eUltYWdlUmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb3h5SW1hZ2UgPSB5aWVsZCBwcm94eUltYWdlUmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhVGVtcGxhdGVzLnB1c2goaW1hZ2VUZW1wbGF0ZShwcm94eUltYWdlLnJlc3VsdCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBkYXRhVGVtcGxhdGVzLnB1c2goaW1hZ2VUZW1wbGF0ZShvZ0ltYWdlKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlbmRlcihtYWluVGVtcGxhdGUoZGF0YVRlbXBsYXRlcyksIGNvbnRhaW5lcik7XG4gICAgfSk7XG59XG4vLyBTZWxlY3QgdGhlIHRleHQgYW5kIGNvcHkgaXQgdG8gdGhlIGNsaXBib2FyZC5cbi8vIFNuaXBwZXQgaXMgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNjE1MDA2MFxuZnVuY3Rpb24gY29weUNvbnRlbnQoKSB7XG4gICAgbGV0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcyk7XG4gICAgbGV0IHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgc2VsLmFkZFJhbmdlKHJhbmdlKTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgIC8vIFRlbGwgdGhlIHBsdWdpbiBhYm91dCBpdC5cbiAgICBwYXJlbnQucG9zdE1lc3NhZ2UoeyBwbHVnaW5NZXNzYWdlOiB7IHR5cGU6ICdub3RpZmljYXRpb24nLCBtZXNzYWdlOiAnQ29waWVkIFRleHQnIH0gfSwgJyonKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=