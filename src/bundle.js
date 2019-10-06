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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/styles/main.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/styles/main.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".cc-window {\n  opacity: 1;\n  -webkit-transition: opacity 1s ease;\n  -moz-transition: opacity 1s ease;\n  -ms-transition: opacity 1s ease;\n  -o-transition: opacity 1s ease;\n  transition: opacity 1s ease; }\n\n.cc-window.cc-invisible {\n  opacity: 0; }\n\n/* only animate ifhas class 'cc-animate' */\n.cc-animate.cc-revoke {\n  -webkit-transition: transform 1s ease;\n  -moz-transition: transform 1s ease;\n  -ms-transition: transform 1s ease;\n  -o-transition: transform 1s ease;\n  transition: transform 1s ease; }\n\n.cc-animate.cc-revoke.cc-top {\n  transform: translateY(-2em); }\n\n.cc-animate.cc-revoke.cc-bottom {\n  transform: translateY(2em); }\n\n.cc-animate.cc-revoke.cc-active.cc-top {\n  transform: translateY(0); }\n\n.cc-animate.cc-revoke.cc-active.cc-bottom {\n  transform: translateY(0); }\n\n.cc-revoke:hover {\n  transform: translateY(0); }\n\n.cc-grower {\n  /* Initially we don't want any height, and we want the contents to be hidden */\n  max-height: 0;\n  overflow: hidden;\n  /* Set our transitions up. */\n  -webkit-transition: max-height 1s;\n  -moz-transition: max-height 1s;\n  -ms-transition: max-height 1s;\n  -o-transition: max-height 1s;\n  transition: max-height 1s; }\n\n/* the popup window */\n.cc-window,\n.cc-revoke {\n  position: fixed;\n  overflow: hidden;\n  box-sizing: border-box;\n  /* exclude padding when dealing with width */\n  font-family: Helvetica, Calibri, Arial, sans-serif;\n  font-size: 16px;\n  /* by setting the base font here, we can size the rest of the popup using CSS `em` */\n  line-height: 1.5em;\n  display: flex;\n  flex-wrap: nowrap;\n  /* the following are random unjustified styles - just because - should probably be removed */\n  z-index: 9998; }\n\n.cc-revoke {\n  z-index: 9999; }\n\n.cc-window.cc-static {\n  position: static; }\n\n/* 2 basic types of window - floating / banner */\n.cc-window.cc-floating {\n  padding: 2em;\n  max-width: 24em;\n  /* 1em == 16px therefore 24em == 384px */\n  flex-direction: column; }\n\n.cc-window.cc-banner {\n  padding: 1em 1.8em;\n  width: 100%;\n  flex-direction: row; }\n\n.cc-revoke {\n  padding: 0.5em; }\n\n.cc-revoke:hover {\n  text-decoration: underline; }\n\n.cc-header {\n  font-size: 18px;\n  font-weight: bold; }\n\n/* clickable things */\n.cc-btn,\n.cc-link,\n.cc-close,\n.cc-revoke {\n  cursor: pointer; }\n\n.cc-link {\n  opacity: 0.8;\n  display: inline-block;\n  padding: 0.2em;\n  text-decoration: underline; }\n\n.cc-link:hover {\n  opacity: 1; }\n\n.cc-link:active,\n.cc-link:visited {\n  color: initial; }\n\n.cc-btn {\n  display: block;\n  padding: 0.4em 0.8em;\n  font-size: 0.9em;\n  font-weight: bold;\n  border-width: 2px;\n  border-style: solid;\n  text-align: center;\n  white-space: nowrap; }\n\n.cc-highlight .cc-btn:first-child {\n  background-color: transparent;\n  border-color: transparent; }\n\n.cc-highlight .cc-btn:first-child:hover,\n.cc-highlight .cc-btn:first-child:focus {\n  background-color: transparent;\n  text-decoration: underline; }\n\n.cc-close {\n  display: block;\n  position: absolute;\n  top: 0.5em;\n  right: 0.5em;\n  font-size: 1.6em;\n  opacity: 0.9;\n  /* seeing as this contains text and not an image, the element taller than it is wide (because it is text) */\n  /*  - we want it to be a square, because it's acting as an icon */\n  /*  - setting the line height normalizes the height */\n  line-height: 0.75; }\n\n.cc-close:hover,\n.cc-close:focus {\n  opacity: 1; }\n\n/* This file should contain styles that modifies the popup layout. */\n/* By layout, we mean the physical position of the elements on the popup window, and the margin / padding around those elements. */\n.cc-revoke.cc-top {\n  top: 0;\n  left: 3em;\n  border-bottom-left-radius: 0.5em;\n  border-bottom-right-radius: 0.5em; }\n\n.cc-revoke.cc-bottom {\n  bottom: 0;\n  left: 3em;\n  border-top-left-radius: 0.5em;\n  border-top-right-radius: 0.5em; }\n\n.cc-revoke.cc-left {\n  left: 3em;\n  right: unset; }\n\n.cc-revoke.cc-right {\n  right: 3em;\n  left: unset; }\n\n/**************************************** FLOATING ****************************************/\n/* these classes position the floating element */\n.cc-top {\n  top: 1em; }\n\n.cc-left {\n  left: 1em; }\n\n.cc-right {\n  right: 1em; }\n\n.cc-bottom {\n  bottom: 1em; }\n\n/* links that are direct decendants should be displayed as block */\n.cc-floating > .cc-link {\n  margin-bottom: 1em; }\n\n.cc-floating .cc-message {\n  display: block;\n  margin-bottom: 1em; }\n\n.cc-window.cc-floating .cc-compliance {\n  flex: 1 0 auto; }\n\n.cc-centered {\n  left: 50%;\n  transform: translate(-50%);\n  top: 50px; }\n\n/**************************************** BANNER ****************************************/\n.cc-window.cc-banner {\n  align-items: center; }\n\n.cc-banner.cc-top {\n  left: 0;\n  right: 0;\n  top: 0; }\n\n.cc-banner.cc-bottom {\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.cc-banner .cc-message {\n  display: block;\n  flex: 1 1 auto;\n  max-width: 100%;\n  margin-right: 1em; }\n\n/* COMPLIANCE BOX */\n.cc-compliance {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.cc-floating .cc-compliance > .cc-btn {\n  flex: 1; }\n\n.cc-btn + .cc-btn {\n  margin-left: 0.5em; }\n\n/* Categories Layout */\n.cc-window.cc-type-categories {\n  display: inline-flex;\n  flex-direction: column;\n  overflow: visible; }\n  .cc-window.cc-type-categories .form {\n    text-align: right; }\n  .cc-window.cc-type-categories .cc-btn {\n    display: inline-block; }\n\n.cc-categories {\n  display: inline-flex; }\n  .cc-categories .cc-category {\n    display: flex;\n    max-width: 100%;\n    margin: 0 50px 0 0;\n    position: relative; }\n  .cc-categories label {\n    display: block;\n    position: relative;\n    padding: 4px 4px 4px 35px;\n    cursor: pointer; }\n    .cc-categories label input[type=checkbox] {\n      position: absolute;\n      top: 4px;\n      left: 0;\n      height: 20px;\n      width: 20px;\n      background-color: #fff;\n      border-radius: 4px;\n      border: 2px solid #666; }\n  .cc-categories .cc-btn {\n    position: relative;\n    border-right: none;\n    outline: none;\n    text-transform: capitalize; }\n  .cc-categories .cc-info {\n    border: none;\n    padding: 4px;\n    font-variant: all-small-caps;\n    cursor: pointer;\n    outline: none;\n    width: 26px;\n    background: url('data:image/svg+xml;utf8,<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\"><g id=\"Icons\" style=\"opacity:0.75;\"><g id=\"help\"><path id=\"circle\" style=\"fill-rule:evenodd;clip-rule:evenodd;\" d=\"M12.001,2.085c-5.478,0-9.916,4.438-9.916,9.916 c0,5.476,4.438,9.914,9.916,9.914c5.476,0,9.914-4.438,9.914-9.914C21.915,6.523,17.477,2.085,12.001,2.085z M12.002,20.085 c-4.465,0-8.084-3.619-8.084-8.083c0-4.465,3.619-8.084,8.084-8.084c4.464,0,8.083,3.619,8.083,8.084 C20.085,16.466,16.466,20.085,12.002,20.085z\"/> <g id=\"question_mark\"><path id=\"top\" style=\"fill-rule:evenodd;clip-rule:evenodd;\" d=\"M11.766,6.688c-2.5,0-3.219,2.188-3.219,2.188l1.411,0.854 c0,0,0.298-0.791,0.901-1.229c0.516-0.375,1.625-0.625,2.219,0.125c0.701,0.885-0.17,1.587-1.078,2.719 C11.047,12.531,11,15,11,15h1.969c0,0,0.135-2.318,1.041-3.381c0.603-0.707,1.443-1.338,1.443-2.494S14.266,6.688,11.766,6.688z\" /><rect id=\"bottom\" x=\"11\" y=\"16\" style=\"fill-rule:evenodd;clip-rule:evenodd;\" width=\"2\" height=\"2\"/></g></g></g></svg>') right no-repeat; }\n    .cc-categories .cc-info:focus + .cc-tooltip {\n      display: block; }\n  .cc-categories .cc-select-all {\n    background-color: #99007c; }\n  .cc-categories .cc-tooltip {\n    display: none;\n    position: absolute;\n    z-index: 3;\n    width: 190px;\n    right: -180px;\n    bottom: 46px;\n    padding: 8px;\n    border: thin solid lightgrey;\n    box-shadow: 1px 1px 4px rgba(150, 150, 150, 0.7); }\n    .cc-categories .cc-tooltip:after {\n      content: \"\";\n      width: 10px;\n      height: 10px;\n      transform: rotate(45deg);\n      position: absolute;\n      bottom: -7px;\n      left: 10px;\n      box-shadow: 2px 1px 1px rgba(200, 200, 200, 0.5); }\n    .cc-categories .cc-tooltip p {\n      margin: 0; }\n\n@media print {\n  .cc-window,\n  .cc-revoke {\n    display: none; } }\n\n@media screen and (max-width: 900px) {\n  .cc-btn {\n    white-space: normal; } }\n\n/* dimensions for 'iPhone6 Plus' and lower */\n@media screen and (max-width: 414px) and (orientation: portrait), screen and (max-width: 736px) and (orientation: landscape) {\n  .cc-window.cc-top {\n    top: 0; }\n  .cc-window.cc-bottom {\n    bottom: 0; }\n  .cc-window.cc-banner, .cc-window.cc-floating, .cc-window.cc-right, .cc-window.cc-left {\n    left: 0;\n    right: 0; }\n  .cc-window.cc-banner {\n    flex-direction: column;\n    align-items: unset; }\n    .cc-window.cc-banner .cc-compliance {\n      flex: 1 1 auto; }\n    .cc-window.cc-banner .cc-message {\n      margin-right: 0;\n      margin-bottom: 1em; }\n  .cc-window.cc-floating {\n    max-width: none; }\n  .cc-window.cc-type-categories {\n    flex-direction: column; }\n  .cc-window .cc-message {\n    margin-bottom: 1em; }\n  .cc-window .cc-categories {\n    flex-direction: column;\n    width: 100%;\n    margin-right: 8px; }\n  .cc-window .cc-category {\n    margin: 4px 0; }\n    .cc-window .cc-category .cc-btn:not(.cc-info) {\n      width: calc( 100% - 16px);\n      min-width: 140px; } }\n\n@media screen and (max-width: 854px) {\n  .cc-window.cc-type-categories .cc-btn.cc-save {\n    margin: 8px 0; } }\n\n@media screen and (max-width: 790px) {\n  .cc-window.cc-type-categories .cc-categories {\n    display: flex;\n    flex-direction: column; }\n  .cc-categories .cc-category {\n    margin: 4px 0; }\n  .form {\n    width: 100%;\n    max-width: 350px; }\n  .cc-btn:not(.cc-info):not(.cc-save) {\n    width: calc( 100% - 16px); } }\n\n/* Classic */\n.cc-floating.cc-theme-classic {\n  padding: 1.2em;\n  border-radius: 5px; }\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-compliance {\n  text-align: center;\n  display: inline;\n  flex: none; }\n\n.cc-theme-classic {\n  overflow: visible;\n  justify-content: space-between; }\n  .cc-theme-classic .cc-btn {\n    position: relative;\n    border-radius: 5px;\n    outline: none; }\n    .cc-theme-classic .cc-btn:last-child {\n      min-width: 140px; }\n  .cc-theme-classic .cc-category .cc-btn {\n    border-radius: 5px 0 0 5px;\n    padding-right: 2px;\n    padding-left: 28px;\n    font-weight: normal;\n    border-right: none;\n    box-sizing: border-box; }\n    .cc-theme-classic .cc-category .cc-btn input[type=checkbox] {\n      position: absolute;\n      left: 0;\n      top: -1px;\n      width: 100%;\n      height: 26px;\n      opacity: 0;\n      cursor: pointer;\n      z-index: 1; }\n      .cc-theme-classic .cc-category .cc-btn input[type=checkbox] + .cc-btn-checkbox {\n        display: block;\n        font-size: 2rem;\n        position: absolute;\n        top: 2px;\n        left: 6px;\n        z-index: 0;\n        outline: none; }\n        .cc-theme-classic .cc-category .cc-btn input[type=checkbox] + .cc-btn-checkbox:before {\n          content: \"\\1F5F5\"; }\n    .cc-theme-classic .cc-category .cc-btn input[type=checkbox]:checked + .cc-btn-checkbox:after {\n      content: \"\\2713\";\n      position: absolute;\n      top: -4px;\n      left: 0;\n      font-size: 2.3rem;\n      text-shadow: 0 1px 3px rgba(150, 150, 150, 0.5); }\n    .cc-theme-classic .cc-category .cc-btn.cc-info {\n      margin: 0;\n      padding: 0 4px;\n      border-radius: 0 5px 5px 0; }\n    .cc-theme-classic .cc-category .cc-btn:last-child {\n      min-width: 0; }\n  .cc-theme-classic .cc-category .cc-tooltip {\n    border-radius: 5px; }\n    .cc-theme-classic .cc-category .cc-tooltip:after {\n      border-bottom: thin solid lightgrey;\n      border-right: thin solid lightgrey; }\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-btn {\n  display: inline-block; }\n\n/* Edgeless */\n.cc-theme-edgeless.cc-window {\n  padding: 0; }\n\n.cc-floating.cc-theme-edgeless .cc-message {\n  margin: 2em;\n  margin-bottom: 1.5em; }\n\n.cc-banner.cc-theme-edgeless .cc-btn {\n  margin: 0;\n  padding: 0.8em 1.8em;\n  height: 100%; }\n\n.cc-banner.cc-theme-edgeless .cc-message {\n  margin-left: 1em; }\n\n.cc-floating.cc-theme-edgeless .cc-btn + .cc-btn {\n  margin-left: 0; }\n\n.cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-btn {\n  padding: 0.4em 0.8em;\n  padding-left: 26px; }\n  .cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-btn.cc-info {\n    padding: 0.4em 4px; }\n\n.cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-tooltip {\n  border: none; }\n", ""]);


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
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
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
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
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

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

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

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
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
  var css = remove ? '' : obj.css; // For old IE

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
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: statusDeny, statusAllow, statusDismiss, statuses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusDeny", function() { return statusDeny; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusAllow", function() { return statusAllow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusDismiss", function() { return statusDismiss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statuses", function() { return statuses; });


const statusDeny = "DENY";
const statusAllow = "ALLOW";
const statusDismiss = "DISMISS";
const statuses = ["DENY", "ALLOW", "DISMISS"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_CookieConsent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/CookieConsent */ "./src/models/CookieConsent.js");





if (typeof exports !== 'undefined') {
  module.exports = _models_CookieConsent__WEBPACK_IMPORTED_MODULE_1__["default"];
} else {
  window.CookieConsent = _models_CookieConsent__WEBPACK_IMPORTED_MODULE_1__["default"];
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/models/Base.js":
/*!****************************!*\
  !*** ./src/models/Base.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);




const emitter = new events__WEBPACK_IMPORTED_MODULE_1___default.a();
class Base {
  constructor(defaultOptions = {}, options = {}) {
    this.options = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["mergeOptions"])(defaultOptions, options);
    this.on = emitter.on.bind(emitter);
    this.emit = emitter.emit.bind(emitter);
  }

}

/***/ }),

/***/ "./src/models/CookieConsent.js":
/*!*************************************!*\
  !*** ./src/models/CookieConsent.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CookieConsent; });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _Legal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Legal */ "./src/models/Legal.js");
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Location */ "./src/models/Location.js");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Popup */ "./src/models/Popup.js");
/* harmony import */ var _Core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Core */ "./src/models/Core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var _options_default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../options/default */ "./src/options/default.js");









 // This function initializes the app by combining the use of the Popup, Locator and Law modules
// You can string together these three modules yourself however you want, by writing a new function.

class CookieConsent extends _Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options = {}) {
    super(_options_default__WEBPACK_IMPORTED_MODULE_7__["default"], options);
    let answers = this.getFilteredStatusValuesFromCookies();
    Object.keys(answers).map(category => {
      this.options.categories[category].status = answers[category];
    }); // apply blacklist / whitelist

    if (this.options.blacklistPage.includes(location.pathname)) {
      this.options.enabled = false;
    }

    if (this.options.whitelistPage.includes(location.pathname)) {
      this.options.enabled = true;
    } // if they have already answered


    if (answers.length > 0) {
      this.options.enabled = false;
      setTimeout(() => this.emit('initialized', answers));
    } else if (this.options.legal && this.options.legal.countryCode) {
      this.initializationComplete({
        code: this.options.legal.countryCode
      });
    } else if (this.options.location) {
      new _Location__WEBPACK_IMPORTED_MODULE_2__["default"](this.options.location).locate(this.initializationComplete.bind(this), this.initializationError.bind(this));
    } else {
      this.initializationComplete({});
    }
  }

  initializationComplete(result) {
    if (result.code) {
      this.options = new _Legal__WEBPACK_IMPORTED_MODULE_1__["default"](this.options.legal).applyLaw(this.options, result.code);
    }

    this.popup = new _Popup__WEBPACK_IMPORTED_MODULE_3__["default"](this.options, this);
    setTimeout(() => this.emit('initialized', this.popup), 0);

    if (this.options.autoOpen && this.options.enabled) {
      this.autoOpen();
    }
  }

  initializationError(error) {
    setTimeout(() => this.emit('error', error, new _Popup__WEBPACK_IMPORTED_MODULE_3__["default"](this.options, this)), 0);
  }

  getCountryLaws(countryCode) {
    return new _Legal__WEBPACK_IMPORTED_MODULE_1__["default"](this.options.legal).get(countryCode);
  }

  isOpen() {
    return this.popup.isOpen();
  }

  close() {
    return this.popup.close();
  }

  open() {
    return this.popup.open();
  }

  toggleRevokeButton(bool) {
    return this.popup.toggleRevokeButton(bool);
  }

  destroy() {
    return this.popup.destroy();
  }

  revokeChoice(preventOpen) {
    this.options.enabled = true;
    this.clearCookieValues();
    this.emit('revokeChoice');

    if (!preventOpen) {
      this.autoOpen();
    }
  }
  /**
   * save current status values
   */


  save() {
    this.emit('save');
    this.setStatuses();
  }
  /**
   *
   * @param categoryName
   * @param status
   */


  setCategoryCookieValue(categoryName, status) {
    const {
      name,
      expiryDays,
      domain,
      path,
      secure
    } = this.options.cookie;

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isValidStatus"])(status)) {
      const cookieName = name + '_' + categoryName;
      const chosenBefore = _constants__WEBPACK_IMPORTED_MODULE_5__["statuses"].indexOf(Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getCookie"])(cookieName)) >= 0;
      Object(_utils__WEBPACK_IMPORTED_MODULE_6__["setCookie"])(cookieName, status, expiryDays, domain, path, secure);
      this.emit('statusChanged', cookieName, status, chosenBefore);
    } else {
      this.clearCookieValues();
    }
  }
  /**
   * Set's cookie statuses
   */


  setStatuses() {
    let checkBoxValues = this.popup.getCheckBoxValues();
    console.debug(checkBoxValues);
    Object.keys(checkBoxValues).map(categoryName => {
      this.setCategoryCookieValue(categoryName, checkBoxValues[categoryName] ? _constants__WEBPACK_IMPORTED_MODULE_5__["statusAllow"] : _constants__WEBPACK_IMPORTED_MODULE_5__["statusDismiss"]);
    });
  }
  /**
   * Get all cookie category statuses from cookie values
   * @return { array<string> } - cookie categories status in order of categories
   */


  getStatusValuesFromCookies() {
    let status = [];
    Object.keys(this.options.categories).map(categoryName => {
      let cookieValue = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getCookie"])(this.options.cookie.name + '_' + categoryName);
      status[categoryName] = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isValidStatus"])(cookieValue) ? cookieValue : undefined;
    });
    return status;
  }
  /**
   *
   */


  getFilteredStatusValuesFromCookies() {
    let statusValues = this.getStatusValuesFromCookies();
    let filteredStatusValues = {};
    Object.keys(statusValues).map(key => {
      if (statusValues[key] !== undefined) {
        filteredStatusValues[key] = statusValues[key];
      }
    });
    return filteredStatusValues;
  }
  /**
   * Clear all cookie categories statuses
   */


  clearCookieValues() {
    const {
      name,
      domain,
      path
    } = this.options.cookie;
    Object.keys(this.options.categories).map(categoryName => {
      Object(_utils__WEBPACK_IMPORTED_MODULE_6__["setCookie"])(name + '_' + categoryName, '', -1, domain, path);
    });
  }
  /**
   * @returns {boolean}
   */


  canUseCookies() {
    if (!window.navigator.cookieEnabled || window.CookiesOK || window.navigator.CookiesOK) {
      return true;
    }

    return this.hasAnswered();
  }
  /**
   * Has the user responded to the banner
   * @return { boolean } - true if any cookies have been set
   */


  hasAnswered() {
    return Object.keys(this.getFilteredStatusValuesFromCookies()).length > 0;
  } // opens the popup if no answer has been given


  autoOpen() {
    const hasAnswered = this.hasAnswered();

    if (!hasAnswered && this.options.enabled) {
      this.popup.open();
    } else if (hasAnswered && this.options.revokable) {
      this.toggleRevokeButton(true);
    }
  }

}
_constants__WEBPACK_IMPORTED_MODULE_5__["statuses"].reduce((obj, status) => (Object.defineProperty(CookieConsent, status, {
  get: function () {
    return status;
  },
  set: function () {},
  enumerable: false,
  writeable: false,
  configurable: false
}), obj), CookieConsent);

/***/ }),

/***/ "./src/models/Core.js":
/*!****************************!*\
  !*** ./src/models/Core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Core; });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");

class Core extends _Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options, cookieConstent) {
    super(options);
    this.cookieConstent = cookieConstent;
  }

  init() {}

}

/***/ }),

/***/ "./src/models/Legal.js":
/*!*****************************!*\
  !*** ./src/models/Legal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Legal; });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _options_legal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../options/legal */ "./src/options/legal.js");




class Legal extends _Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options = {}) {
    super(_options_legal__WEBPACK_IMPORTED_MODULE_1__["default"], options);
  }

  get(countryCode) {
    return {
      hasLaw: this.options.hasLaw.indexOf(countryCode) >= 0,
      revokable: this.options.revokable.indexOf(countryCode) >= 0,
      explicitAction: this.options.explicitAction.indexOf(countryCode) >= 0
    };
  }

  applyLaw(options, countryCode) {
    const country = this.get(countryCode);

    if (!country.hasLaw) {
      // The country has no cookie law
      options.enabled = false;
      this.emit("noCookieLaw", countryCode, country);
    }

    if (this.options.regionalLaw) {
      if (country.revokable) {
        // We must provide an option to revoke consent at a later time
        options.revokable = true;
      }

      if (country.explicitAction) {
        // The user must explicitly click the consent button
        options.dismissOnScroll = false;
        options.dismissOnTimeout = false;
      }
    }

    return options;
  }

}

/***/ }),

/***/ "./src/models/Location.js":
/*!********************************!*\
  !*** ./src/models/Location.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Location; });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _options_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../options/location */ "./src/options/location.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");




 // An object containing all the location services we have already set up.
// When using a service, it could either return a data structure in plain text (like a JSON object) or an executable script
// When the response needs to be executed by the browser, then `isScript` must be set to true, otherwise it won't work.
// When the service uses a script, the chances are that you'll have to use the script to make additional requests. In these
// cases, the services `callback` property is called with a `done` function. When performing async operations, this must be called
// with the data (or Error), and `cookieconsent.locate` will take care of the rest

class Location extends _Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(_options_location__WEBPACK_IMPORTED_MODULE_1__["default"], options);
    this.currentServiceIndex = -1; // the index (in options) of the service we're currently using
  }

  getNextService() {
    let service;

    do {
      service = this.getServiceByIdx(++this.currentServiceIndex);
    } while (this.currentServiceIndex < this.options.services.length && !service);

    return service;
  }

  getServiceByIdx(idx) {
    // This can either be the name of a default locationService, or a function.
    const serviceOption = this.options.services[idx]; // If it's a string, use one of the location services.

    if (typeof serviceOption === 'function') {
      const dynamicOpts = serviceOption();
      return dynamicOpts.name ? Object.assign({}, dynamicOpts, this.options.serviceDefinitions[dynamicOpts.name](dynamicOpts)) : dynamicOpts;
    } // If it's a string, use one of the location services.


    if (typeof serviceOption === 'string') {
      return this.options.serviceDefinitions[serviceOption]();
    } // If it's an object, assume {name: 'ipinfo', ...otherOptions}
    // Allows user to pass in API keys etc.


    if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(serviceOption)) {
      return this.options.serviceDefinitions[serviceOption.name](serviceOption);
    }

    return null;
  } // This runs the service located at index `currentServiceIndex`.
  // If the service fails, `runNextServiceOnError` will continue trying each service until all fail, or one completes successfully


  locate(complete, error) {
    const service = this.getNextService();

    if (!service) {
      error(new Error('No services to run'));
      return;
    }

    this.callbackComplete = complete;
    this.callbackError = error;
    this.runService(service, this.runNextServiceOnError.bind(this));
  } // Potentially adds a callback to a url for jsonp.


  setupUrl(service) {
    const serviceOpts = this.getCurrentServiceOpts();
    return service.url.replace(/\{(.*?)\}/g, function (_, param) {
      if (param === 'callback') {
        const tempName = 'callback' + Date.now();

        window[tempName] = function (res) {
          service.__JSONP_DATA = JSON.stringify(res);
        };

        return tempName;
      }

      if (param in serviceOpts.interpolateUrl) {
        return serviceOpts.interpolateUrl[param];
      }
    });
  } // requires a `service` object that defines at least a `url` and `callback`


  runService(service, complete) {
    // basic check to ensure it resembles a `service`
    if (!service || !service.url || !service.callback) {
      return;
    } // we call either `getScript` or `makeAsyncRequest` depending on the type of resource


    const requestFunction = service.isScript ? _utils__WEBPACK_IMPORTED_MODULE_2__["getScript"] : _utils__WEBPACK_IMPORTED_MODULE_2__["makeAsyncRequest"]; // both functions have similar signatures so we can pass the same arguments to both

    requestFunction(this.setupUrl(service), xhr => {
      // if `!xhr`, then `getScript` function was used, so there is no response text
      let responseText = xhr ? xhr.responseText : ''; // if the resource is a script, then this function is called after the script has been run.
      // if the script is JSONP, then a time defined function `callback_{Date.now}` has already
      // been called (as the JSONP callback). This callback sets the __JSONP_DATA property

      if (service.__JSONP_DATA) {
        responseText = service.__JSONP_DATA;
        delete service.__JSONP_DATA;
      } // call the service callback with the response text (so it can parse the response)


      this.runServiceCallback.call(this, complete, service, responseText);
    }, this.options.timeout, service.data, service.headers); // `service.data` and `service.headers` are optional (they only count if `!service.isScript` anyway)
  } // The service request has run (and possibly has a `responseText`) [no `responseText` if `isScript`]
  // We need to run its callback which determines if its successful or not
  // `complete` is called on success or failure


  runServiceCallback(complete, service, responseText) {
    // this is the function that is called if the service uses the async callback in its handler method
    const serviceResultHandler = asyncResult => {
      // if `result` is a valid value, then this function shouldn't really run
      // even if it is called by `service.callback`
      if (!result) {
        this.onServiceResult(complete, asyncResult);
      }
    }; // the function `service.callback` will either extract a country code from `responseText` and return it (in `result`)
    // or (if it has to make additional requests) it will call a `done` callback with the country code when it is ready


    const result = service.callback(serviceResultHandler, responseText);

    if (result) {
      this.onServiceResult(complete, result);
    }
  } // This is called with the `result` from `service.callback` regardless of how it provided that result (sync or async).
  // `result` will be whatever is returned from `service.callback`. A service callback should provide an object with data


  onServiceResult(complete, result) {
    // convert result to nodejs style async callback
    if (result instanceof Error || result && result.error) {
      complete.call(this, result, null);
    } else {
      complete.call(this, null, result);
    }
  } // if `err` is set, the next service handler is called
  // if `err` is null, the `onComplete` handler is called with `data`


  runNextServiceOnError(err, data) {
    if (err) {
      this.logError(err);
      const nextService = this.getNextService();

      if (nextService) {
        this.runService(nextService, this.runNextServiceOnError.bind(this));
      } else {
        this.completeService.call(this, this.callbackError, new Error('All services failed'));
      }
    } else {
      this.completeService.call(this, this.callbackComplete, data);
    }
  }

  getCurrentServiceOpts() {
    const val = this.options.services[this.currentServiceIndex];

    if (typeof val == 'string') {
      return {
        name: val
      };
    } else if (typeof val == 'function') {
      return val();
    } else if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(val)) {
      return val;
    } else {
      return {};
    }
  } // calls the `onComplete` callback after resetting the `currentServiceIndex`


  completeService(fn, data) {
    this.currentServiceIndex = -1;
    fn && fn(data);
  }

  logError(err) {
    console.warn(`The service[${this.currentServiceIndex}] (${this.getServiceByIdx(this.currentServiceIndex).url}) responded with the following error`, err);
  }

}

/***/ }),

/***/ "./src/models/Popup.js":
/*!*****************************!*\
  !*** ./src/models/Popup.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Popup; });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");





class Popup extends _Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options, cookieConstent) {
    super(options);
    this.cookieConstent = cookieConstent;
    this.customStyles = {};
    this.hasTransition = !!function () {
      const el = document.createElement('div');
      const trans = {
        t: 'transitionend',
        OT: 'oTransitionEnd',
        msT: 'MSTransitionEnd',
        MozT: 'transitionend',
        WebkitT: 'webkitTransitionEnd'
      };

      for (let prefix in trans) {
        if (trans.hasOwnProperty(prefix) && typeof el.style[prefix + 'ransition'] !== 'undefined') {
          return trans[prefix];
        }
      }

      return '';
    }(); // the full markup either contains the wrapper or it does not (for multiple instances)

    let cookiePopup = this.options.window.replace('{{classes}}', this.getPopupClasses().join(' ')).replace('{{children}}', this.getPopupInnerMarkup()); // if user passes html, use it instead

    const customHTML = this.options.overrideHTML;

    if (typeof customHTML == 'string' && customHTML.length) {
      cookiePopup = customHTML;
    } // if static, we need to grow the element from 0 height so it doesn't jump the page
    // content. we wrap an element around it which will mask the hidden content


    if (this.options.static) {
      // `grower` is a wrapper div with a hidden overflow whose height is animated
      const wrapper = this.appendMarkup(`<div class="cc-grower">${cookiePopup}</div>`);
      wrapper.style.display = ''; // set it to visible (because appendMarkup hides it)

      this.element = wrapper.firstChild; // get the `element` reference from the wrapper

      this.element.style.display = 'none';
      this.element.classList.add('cc-invisible');
    } else {
      this.element = this.appendMarkup(cookiePopup);
    }

    this.applyAutoDismiss();
    this.applyRevokeButton();
  }

  open() {
    if (!this.element) return;

    if (!this.isOpen()) {
      if (this.hasTransition) {
        this.fadeIn();
      } else {
        this.element.style.display = '';
      }

      if (this.options.revokable) {
        this.toggleRevokeButton();
      }

      this.emit('popupOpened');
    }

    return this;
  }

  close(showRevoke) {
    if (!this.element) return;

    if (this.isOpen()) {
      if (this.hasTransition) {
        this.fadeOut();
      } else {
        this.element.style.display = 'none';
      }

      if (showRevoke && this.options.revokable) {
        this.toggleRevokeButton(true);
      }

      this.emit('popupClosed');
    }

    return this;
  }

  fadeIn() {
    const el = this.element;
    if (!this.hasTransition || !el) return; // This should always be called AFTER fadeOut (which is governed by the 'transitionend' event).
    // 'transitionend' isn't all that reliable, so, if we try and fadeIn before 'transitionend' has
    // has a chance to run, then we run it ourselves

    if (this.afterTransition) {
      this.afterFadeOut(el);
    }

    if (el.classList.contains('cc-invisible')) {
      el.style.display = '';

      if (this.options.static) {
        this.element.parentNode.style.maxHeight = this.element.clientHeight + 'px';
      }

      const fadeInTimeout = 20; // (ms) DO NOT MAKE THIS VALUE SMALLER. See below
      // Although most browsers can handle values less than 20ms, it should remain above this value.
      // This is because we are waiting for a "browser redraw" before we remove the 'cc-invisible' class.
      // If the class is remvoed before a redraw could happen, then the fadeIn effect WILL NOT work, and
      // the popup will appear from nothing. Therefore we MUST allow enough time for the browser to do
      // its thing. The actually difference between using 0 and 20 in a set timeout is neglegible anyway

      this.openingTimeout = setTimeout(() => this.afterFadeIn(el), fadeInTimeout);
    }
  }
  /**
   * This needs to be called after 'fadeIn'. This is the code that actually causes the fadeIn to work
   * There is a good reason why it's called in a timeout. Read 'fadeIn'
   */


  afterFadeIn(element) {
    this.openingTimeout = null;
    element.classList.remove('cc-invisible');
  }

  fadeOut() {
    if (!this.hasTransition || !this.element) return;

    if (this.openingTimeout) {
      clearTimeout(this.openingTimeout);
      this.afterFadeIn(this.element);
    }

    if (!this.element.classList.contains('cc-invisible')) {
      if (this.options.static) {
        this.element.parentNode.style.maxHeight = '';
      }

      this.afterTransition = () => this.afterFadeOut(this.element);

      this.element.addEventListener(this.transitionEnd, this.afterTransition);
      this.element.classList.add('cc-invisible');
    }
  }

  afterFadeOut(el) {
    el.style.display = 'none'; // after close and before open, the display should be none

    el.removeEventListener(this.transitionEnd, this.afterTransition);
    this.afterTransition = null;
  }

  isOpen() {
    return this.element && this.element.style.display === '' && (this.hasTransition ? !this.element.classList.contains('cc-invisible') : true);
  }

  toggleRevokeButton(show) {
    if (this.revokeBtn) this.revokeBtn.style.display = show ? '' : 'none';
  } // top, bottom, left, right


  getPositionClasses() {
    return this.options.position.split('-').map(pos => 'cc-' + pos);
  }

  getPopupClasses() {
    const opts = this.options;
    let positionStyle = opts.position === 'top' || opts.position === 'bottom' ? 'banner' : 'floating';

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isMobile"])() && opts.mobileForceFloat) {
      positionStyle = 'floating';
    }

    const classes = ['cc-' + positionStyle, // floating or banner
    'cc-type-' + opts.type, // add the compliance type
    'cc-theme-' + opts.theme];

    if (opts.static) {
      classes.push('cc-static');
    }

    classes.push.apply(classes, this.getPositionClasses()); // we only add extra styles if `palette` has been set to a valid value

    this.attachCustomPalette(this.options.palette); // if we override the palette, add the class that enables this

    if (this.customStyleSelector) {
      classes.push(this.customStyleSelector);
    }

    return classes;
  }

  getRevokeButtonClasses() {
    const opts = this.options;
    const classes = [];
    classes.push('cc-' + this.options.revokePosition);

    if (this.options.animateRevokable) {
      classes.push('cc-animate');
    }

    if (this.customStyleSelector) {
      classes.push(this.customStyleSelector);
    }

    if (this.options.theme) {
      classes.push('cc-theme-' + this.options.theme);
    }

    return classes;
  }

  getPopupInnerMarkup() {
    const interpolated = {};
    const opts = this.options; // removes link if showLink is false

    if (!opts.showLink) {
      opts.elements.link = '';
      opts.elements.messagelink = opts.elements.message;
    }

    let categories = Object.keys(this.options.categories).map(name => {
      const settings = opts.categories[name];
      if (settings.disabled !== undefined && settings.disabled) return;
      const checked = settings.preselected || settings.status === _constants__WEBPACK_IMPORTED_MODULE_1__["statusAllow"] ? ' checked=checked' : '';
      const disabled = settings.mandatory ? ' disabled' : '';
      return [opts.elements.category.replace('{{label}}', settings.label).replace('{{category}}', name).replace('{{checked}}', checked).replace('{{disabled}}', disabled).replace('{{tooltip}}', settings.tooltip)];
    }).join('');
    opts.elements.categories = opts.elements.categories.replace('{{categories}}', categories);
    opts.elements.saveBtn = opts.elements.saveBtn.replace('{{label}}', opts.content.save);
    opts.elements.selectAllBtn = opts.elements.selectAllBtn.replace('{{label}}', opts.content.selectAll);
    Object.keys(opts.elements).forEach(prop => {
      interpolated[prop] = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["interpolateString"])(opts.elements[prop], name => {
        const str = opts.content[name];
        return name && typeof str == 'string' && str.length ? str : '';
      });
    }); // checks if the type is valid and defaults to info if it's not

    let complianceType = opts.compliance[opts.type];

    if (!complianceType) {
      complianceType = opts.compliance.info;
    } // build the compliance types from the already interpolated `elements`


    interpolated.compliance = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["interpolateString"])(complianceType, name => interpolated[name]); // checks if the layout is valid and defaults to basic if it's not

    let layout = opts.layouts[opts.layout];

    if (!layout) {
      layout = opts.layouts.basic;
    }

    return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["interpolateString"])(layout, match => interpolated[match]);
  }

  appendMarkup(markup) {
    const opts = this.options;
    const div = document.createElement('div');
    const cont = opts.container && opts.container.nodeType === 1 ? opts.container : document.body;
    div.innerHTML = markup;
    const el = div.children[0];
    el.style.display = 'none';

    if (el.classList.contains('cc-window') && this.hasTransition) {
      el.classList.add('cc-invisible');
    }

    el.addEventListener('click', event => this.handleButtonClick(event));
    el.querySelectorAll('.cc-btn [type="checkbox"]').forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        this.userCategories[checkbox.name] = checkbox.checked ? 'ALLOW' : 'DENY';
      });
      checkbox.addEventListener('click', event => event.stopPropagation());
    });
    el.querySelectorAll('.cc-info').forEach(showInfo => {
      showInfo.addEventListener('mousedown', function (event) {
        if (this === document.activeElement) {
          this.blur();
          event.preventDefault();
        }
      });
    });

    if (opts.autoAttach) {
      try {
        if (!cont.firstChild) {
          cont.appendChild(el);
        } else {
          cont.insertBefore(el, cont.firstChild);
        }
      } catch (error) {
        throw new Error('No container to attach too. Make sure the DOM has loaded. Is your script loaded just before the `</body>` tag?');
      }
    }

    return el;
  }

  handleButtonClick(event) {
    // returns the parent element with the specified class, or the original element - null if not found
    const btn = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["traverseDOMPath"])(event.target, 'cc-btn') || event.target;
    const opts = this.options;

    if (btn.dataset.action !== undefined) {
      if (btn.dataset.action === 'checkAllAndSave') {
        this.checkAll();
      }

      if (btn.dataset.action === 'save' || btn.dataset.action === 'checkAllAndSave') {
        this.cookieConstent.save();
        this.close(true);
        return;
      }

      if (btn.dataset.action === 'close') {
        this.cookieConstent.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_1__["statusDismiss"]);
        this.close(true);
        return;
      }

      if (btn.dataset.action === 'revoke') {
        this.cookieConstent.revokeChoice();
      }
    }
  }
  /**
   * check all visible categories
   */


  checkAll() {
    this.element.querySelectorAll('.cc-categories input[type=checkbox]').forEach((checkbox, key) => {
      checkbox.checked = true;
    });
  }

  getCheckBoxValues() {
    let values = [];
    this.element.querySelectorAll('.cc-categories input[type=checkbox]').forEach((checkbox, key) => {
      values[checkbox.attributes['name'].value] = checkbox.checked !== false;
    });
    return values;
  }

  attachCustomPalette(palette) {
    const hashStr = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["hash"])(JSON.stringify(palette));
    const selector = 'cc-color-override-' + hashStr;
    const isValid = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(palette);
    this.customStyleSelector = isValid ? selector : null;

    if (isValid) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["addCustomStylesheet"])(hashStr, palette, '.' + selector);
    }

    return isValid;
  }

  getEventPath(event) {
    const path = event.composedPath ? event.composedPath() : function (arr, element) {
      while (element) {
        arr.push(element);
        element = element.parentNode;
      }

      return arr;
    }([], event.target);

    if (!path) {
      console.warn("'.path' & '.composedPath' failed to generate an event path.");
      return;
    }

    return path;
  }

  applyAutoDismiss() {
    const {
      enabled,
      dismissOnTimeout: delay,
      dismissOnScroll: scrollRange,
      dismissOnLinkClick,
      dismissOnWindowClick,
      dismissOnKeyPress
    } = this.options;

    if (enabled) {
      if (typeof delay == 'number' && delay >= 0) {
        this.dismissTimeout = setTimeout(() => {
          this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_1__["statusDismiss"]);
          this.close(true);
        }, Math.floor(delay));
      } else if (typeof scrollRange == 'number' && scrollRange >= 0) {
        this.onWindowScroll = () => {
          if (window.pageYOffset > Math.floor(scrollRange)) {
            this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_1__["statusDismiss"]);
            this.close(true);
            window.removeEventListener('scroll', this.onWindowScroll, {
              passive: true
            });
            this.onWindowScroll = null;
          }
        };

        window.addEventListener('scroll', this.onWindowScroll, {
          passive: true
        });
      } else if (dismissOnWindowClick) {
        this.onWindowClick = evt => {
          if (!getEventPath(evt).some(element => this.options.ignoreClicksFrom.some(ignoredClick => element.classList && element.classList.contains(ignoredClick)))) {
            this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_1__["statusDismiss"]);
            this.close(true);
            window.removeEventListener('click', this.onWindowClick);
            window.removeEventListener('touchend', this.onWindowClick);
            this.onWindowClick = null;
          }
        };

        window.addEventListener('click', this.onWindowClick);
        window.addEventListener('touchend', this.onWindowClick);
      } else if (dismissOnLinkClick) {
        this.onLinkClick = evt => {
          if (getEventPath(evt).some(elem => typeof elem.tagName !== 'undefined' && elem.tagName === 'A')) {
            this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_1__["statusDismiss"]);
            this.close(true);
            window.removeEventListener('click', this.onLinkClick);
            this.onLinkClick = null;
          }
        };

        window.addEventListener('click', this.onLinkClick);
      } else if (dismissOnKeyPress) {
        this.onKeyPress = event => {
          const {
            keyCode
          } = event;

          if (keyCode === 13) {
            this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_1__["statusAllow"]);
            this.close(true);
          } else if (keyCode === 27) {
            this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_1__["statusDismiss"]);
            this.close(true);
          }
        };

        window.addEventListener('onkeypress', this.onKeyPress);
      }
    }
  }

  applyRevokeButton() {
    // revokable is true if advanced compliance is selected
    if (this.options.type !== 'info') this.options.revokable = true; // animateRevokable false for mobile devices

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isMobile"])()) this.options.animateRevokable = false;

    if (this.options.revokable) {
      const classes = this.getRevokeButtonClasses();
      const revokeBtn = this.options.revokeBtn.replace('{{classes}}', classes.join(' ')).replace('{{policy}}', this.options.content.policy);
      this.revokeBtn = this.appendMarkup(revokeBtn);
      const btn = this.revokeBtn;

      if (this.options.animateRevokable) {
        const onMouseMove = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["throttle"])(function (evt) {
          let active = false;
          const minY = 20;
          const maxY = window.innerHeight - 20;

          if (btn.classList.contains('cc-top') && evt.clientY < minY || btn.classList.contains('cc-bottom') && evt.clientY > maxY) {
            active = true;
          }

          if (active && !btn.classList.contains('cc-active')) {
            btn.classList.add('cc-active');
          } else if (!active && btn.classList.contains('cc-active')) {
            btn.classList.remove('cc-active');
          }
        }, 200);
        this.onMouseMove = onMouseMove;
        window.addEventListener('mousemove', onMouseMove);
      }
    }
  }

  destroy() {
    console.warn('Destroying...');

    if (this.element) {
      this.element.remove();
    }

    if (this.revokeBtn) {
      this.revokeBtn.remove();
    }

    if (this.onWindowScroll) {
      window.removeEventListener('scroll', this.onWindowScroll);
    }

    if (this.onWindowClick) {
      window.removeEventListener('click', this.onWindowClick);
      window.removeEventListener('touchend', this.onWindowClick);
    }

    if (this.onLinkClick) {
      window.removeEventListener('click', this.onLinkClick);
    }

    if (this.onKeyPress) {
      window.addEventListener('onkeypress', this.onKeyPress);
    }
  }

}

/***/ }),

/***/ "./src/options/default.js":
/*!********************************!*\
  !*** ./src/options/default.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/index.js */ "./src/constants/index.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  // if false, this prevents the popup from showing (useful for giving to control to another piece of code)
  enabled: true,
  // optional (expecting a HTML element) if passed, the popup is appended to this element. default is `document.body`
  container: null,
  // defaults cookie options - it is RECOMMENDED to set these values to correspond with your server
  cookie: {
    // This is the name of this cookie - you can ignore this
    name: 'cookieconsent_status',
    // This is the url path that the cookie 'name' belongs to. The cookie can only be read at this location
    path: '/',
    // This is the domain that the cookie 'name' belongs to. The cookie can only be read on this domain.
    //  - Guide to cookie domains - https://www.mxsasha.eu/blog/2014/03/04/definitive-guide-to-cookie-domains/
    domain: 'localhost',
    // The cookies expire date, specified in days (specify -1 for no expiry)
    expiryDays: 365,
    // If true the cookie will be created with the secure flag. Secure cookies will only be transmitted via HTTPS.
    secure: false
  },
  // each item defines the inner text for the element that it references
  content: {
    header: 'Cookies used on the website!',
    message: 'This website uses cookies to ensure you get the best experience on our website.',
    dismiss: 'Got it!',
    allow: 'Allow cookies',
    deny: 'Decline',
    link: 'Learn more',
    href: 'https://www.cookiesandyou.com',
    close: '&#x274c',
    target: '_blank',
    policy: 'Cookie Policy',
    save: 'Save',
    selectAll: 'Select all'
  },
  // This is the HTML for the elements above. The string {{header}} will be replaced with the equivalent text below.
  // You can remove "{{header}}" and write the content directly inside the HTML if you want.
  //
  //  - ARIA rules suggest to ensure controls are tabbable (so the browser can find the first control),
  //    and to set the focus to the first interactive control (https://w3c.github.io/using-aria/)
  elements: {
    header: '<span class="cc-header">{{header}}</span>&nbsp',
    message: '<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',
    messagelink: '<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a></span>',
    dismiss: `<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-${_constants_index_js__WEBPACK_IMPORTED_MODULE_0__["statusDismiss"]}">{{dismiss}}</a>`,
    allow: `<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-${_constants_index_js__WEBPACK_IMPORTED_MODULE_0__["statusAllow"]}">{{allow}}</a>`,
    deny: `<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-${_constants_index_js__WEBPACK_IMPORTED_MODULE_0__["statusDeny"]}">{{deny}}</a>`,
    link: '<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a>',
    close: '<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>',
    categories: '<ul class="cc-categories">{{categories}}</ul>',
    category: `<li class="cc-category">
         <label class="cc-label" tabindex="0"><input type="checkbox" name="{{category}}"{{checked}}{{disabled}}/>{{label}}</label>
          <button class="cc-info" aria-label="{{name}}" tabindex="{{index}}"></button>
          <div class="cc-tooltip">
            <p>{{tooltip}}</p>
          </div>
        </li>`,
    saveBtn: `<button name="save" data-action="save" class="cc-btn cc-save">{{label}}</button>`,
    selectAllBtn: `<button name="selectAllAndSave" data-action="checkAllAndSave" class="cc-btn cc-select-all cc-highlight cc-save">{{label}}</button>` //compliance: compliance is also an element, but it is generated by the application, depending on `type` below

  },
  // The placeholders {{classes}} and {{children}} both get replaced during initialisation:
  //  - {{classes}} is where additional classes get added
  //  - {{children}} is where the HTML children are placed
  window: '<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}"><!--googleoff: all-->{{children}}<!--googleon: all--></div>',
  modal: '',
  // This is the html for the revoke button. This only shows up after the user has selected their level of consent
  // It can be enabled of disabled using the `revokable` option
  revokeBtn: '<div data-action="revoke" class="cc-revoke {{classes}}">{{policy}}</div>',
  // define types of 'compliance' here. '{{value}}' strings in here are linked to `elements`
  compliance: {
    info: '<div class="cc-compliance">{{dismiss}}</div>',
    'opt-in': '<div class="cc-compliance">{{dismiss}}{{allow}}{{customize}}</div>',
    'opt-out': '<div class="cc-compliance">{{dismiss}}{{deny}}</div>',
    categories: '<div class="form">{{categories}}{{saveBtn}}{{selectAllBtn}}</div>'
  },
  // select your type of popup here
  type: 'info',
  // refers to `compliance` (in other words, the buttons that are displayed)
  // define layout layouts here
  layouts: {
    // the 'block' layout tend to be for square floating popups
    basic: '{{messagelink}}{{compliance}}',
    'basic-close': '{{messagelink}}{{compliance}}{{close}}',
    'basic-header': '{{header}}{{message}}{{link}}{{compliance}}' // add a custom layout here, then add some new css with the class '.cc-layout-my-cool-layout'
    //'my-cool-layout': '<div class="my-special-layout">{{message}}{{compliance}}</div>{{close}}',

  },
  // default layout (see above)
  layout: 'basic',
  // this refers to the popup windows position. we currently support:
  //  - banner positions: top, bottom
  //  - floating positions: top-left, top-right, bottom-left, bottom-right
  //
  // adds a class `cc-floating` or `cc-banner` which helps when styling
  position: 'bottom',
  // default position is 'bottom'
  // revoke button position
  revokePosition: 'bottom',
  // Available styles
  //    -block (default, no extra classes)
  //    -edgeless
  //    -classic
  // use your own style name and use `.cc-theme-STYLENAME` class in CSS to edit.
  // Note: style "wire" is used for the configurator, but has no CSS styles of its own, only palette is used.
  theme: 'block',
  // The popup is `fixed` by default, but if you want it to be static (inline with the page content), set this to false
  // Note: by default, we animate the height of the popup from 0 to full size
  static: false,
  // if you want custom colours, pass them in here. this object should look like this.
  // ideally, any custom colours/themes should be created in a separate style sheet, as this is more efficient.
  //   {
  //     popup: {background: '#000000', text: '#fff', link: '#fff'},
  //     button: {background: 'transparent', border: '#f8e71c', text: '#f8e71c'},
  //     highlight: {background: '#f8e71c', border: '#f8e71c', text: '#000000'},
  //   }
  // `highlight` is optional and extends `button`.
  palette: null,
  // Some countries REQUIRE that a user can change their mind. You can configure this yourself.
  // Most of the time this should be false, but the `cookieconsent.legal` can change this to `true` if it detects that it should
  revokable: false,
  // if true, the revokable button will tranlate in and out
  animateRevokable: true,
  // used to disable link on existing layouts
  // replaces element messagelink with message and removes content of link
  showLink: true,
  // set value as scroll range to enable
  dismissOnScroll: false,
  // set value as time in milliseconds to autodismiss after set time
  dismissOnTimeout: false,
  // set value as click anything on the page, excluding the `ignoreClicksFrom` below (if we click on the revoke button etc)
  dismissOnWindowClick: false,
  // set value as click anything on the page, excluding the `ignoreClicksFrom` below (if we click on the revoke button etc)
  dismissOnLinkClick: false,
  // set value as keys are pressed, ( allowKeyCode = 13, denyKeyCode = 27 )
  dismissOnKeyPress: false,
  // If `dismissOnWindowClick` is true, we can click on 'revoke' and we'll still dismiss the banner, so we need exceptions.
  // should be an array of class names (not CSS selectors)
  ignoreClicksFrom: ['cc-revoke', 'cc-btn', 'cc-link'],
  // already includes the revoke button and the banner itself
  // The application automatically decide whether the popup should open.
  // Set this to false to prevent this from happening and to allow you to control the behaviour yourself
  autoOpen: true,
  // By default the created HTML is automatically appended to the container (which defaults to <body>). You can prevent this behaviour
  // by setting this to false, but if you do, you must attach the `element` yourself, which is a public property of the popup instance:
  //
  //     const instance = cookieconsent.factory(options)
  //     document.body.appendChild(instance.element)
  //
  autoAttach: true,
  // set value if floating layout should be forced for mobile devices
  mobileForceFloat: true,
  // simple whitelist/blacklist for pages. specify page by:
  //   - using a string : '/index.html'           (matches '/index.html' exactly) OR
  //   - using RegExp   : /\/page_[\d]+\.html/    (matched '/page_1.html' and '/page_2.html' etc)
  whitelistPage: [],
  blacklistPage: [],
  // If this is defined, then it is used as the inner html instead of layout. This allows for ultimate customisation.
  // Be sure to use the classes `cc-btn` and `cc-ALLOW`, `cc-DENY` or `cc-DISMISS`. They enable the app to register click
  // handlers. You can use other pre-existing classes too. See `src/styles` folder.
  overrideHTML: null,
  categories: {
    uncategorized: {
      label: 'Uncategorized',
      disabled: false,
      mandatory: false,
      tooltip: ''
    },
    essential: {
      label: 'Essential',
      preselected: true,
      disabled: false,
      mandatory: false,
      tooltip: 'These cookies are required for the operation of this website.'
    },
    personalization: {
      label: 'Personalization',
      disabled: false,
      mandatory: false,
      tooltip: 'These cookies are required for the personal adaptation of this website.'
    },
    analytics: {
      label: 'Analytics',
      disabled: false,
      mandatory: false,
      tooltip: 'These cookies help us to improve our website.'
    },
    marketing: {
      label: 'Marketing',
      disabled: false,
      mandatory: false,
      tooltip: 'These cookies help us to improve our website.'
    }
  }
});

/***/ }),

/***/ "./src/options/legal.js":
/*!******************************!*\
  !*** ./src/options/legal.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/* harmony default export */ __webpack_exports__["default"] = ({
  // Make this false if you want to disable all regional overrides for settings.
  // If true, options can differ by country, depending on their cookie law.
  // It does not affect hiding the popup for countries that do not have cookie law.
  regionalLaw: true,
  // countries that enforce some version of a cookie law
  hasLaw: ['AT', 'BE', 'BG', 'HR', 'CZ', 'CY', 'DK', 'EE', 'FI', 'FR', 'DE', 'EL', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'NO', 'PL', 'PT', 'SK', 'ES', 'SE', 'GB', 'UK', 'GR', 'EU', 'RO'],
  // countries that say that all cookie consent choices must be revokable (a user must be able too change their mind)
  revokable: ['HR', 'CY', 'DK', 'EE', 'FR', 'DE', 'LV', 'LT', 'NL', 'NO', 'PT', 'ES'],
  // countries that say that a person can only "consent" if the explicitly click on "I agree".
  // in these countries, consent cannot be implied via a timeout or by scrolling down the page
  explicitAction: ['HR', 'IT', 'ES', 'NO']
});

/***/ }),

/***/ "./src/options/location.js":
/*!*********************************!*\
  !*** ./src/options/location.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


const toError = obj => new Error('Error [' + (obj.code || 'UNKNOWN') + ']: ' + obj.error);

/* harmony default export */ __webpack_exports__["default"] = ({
  // The default timeout is 5 seconds. This is mainly needed to catch JSONP requests that error.
  // Otherwise there is no easy way to catch JSONP errors. That means that if a JSONP fails, the
  // app will take `timeout` milliseconds to react to a JSONP network error.
  timeout: 5000,
  // the order that services will be attempted in
  services: ['ipinfo'
  /*
   // 'ipinfodb' requires some options, so we define it using an object
  // this object will be passed to the function that defines the service
   {
    name: 'ipinfodb',
    interpolateUrl: {
      // obviously, this is a fake key
      api_key: 'vOgI3748dnIytIrsJcxS7qsDf6kbJkE9lN4yEDrXAqXcKUNvjjZPox3ekXqmMMld'
    },
  },
   // as well as defining an object, you can define a function that returns an object
   function () {
    return {name: 'ipinfodb'}
  },
   */
  ],
  serviceDefinitions: {
    ipinfo: function () {
      return {
        // This service responds with JSON, so we simply need to parse it and return the country code
        url: '//ipinfo.io',
        headers: ['Accept: application/json'],
        callback: function (done, response) {
          try {
            const json = JSON.parse(response);
            return json.error ? toError(json) : {
              code: json.country
            };
          } catch (err) {
            return toError({
              error: 'Invalid response (' + err + ')'
            });
          }
        }
      };
    },
    // This service requires an option to define `key`. Options are proived using objects or functions
    ipinfodb: function () {
      return {
        // This service responds with JSON, so we simply need to parse it and return the country code
        url: '//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}',
        isScript: true,
        // this is JSONP, therefore we must set it to run as a script
        callback: function (done, response) {
          try {
            const json = JSON.parse(response);
            return json.statusCode == 'ERROR' ? toError({
              error: json.statusMessage
            }) : {
              code: json.countryCode
            };
          } catch (err) {
            return toError({
              error: 'Invalid response (' + err + ')'
            });
          }
        }
      };
    },
    maxmind: function () {
      return {
        // This service responds with a JavaScript file which defines additional functionality. Once loaded, we must
        // make an additional AJAX call. Therefore we provide a `done` callback that can be called asynchronously
        url: '//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js',
        isScript: true,
        // this service responds with a JavaScript file, so it must be run as a script
        callback: function (done) {
          // if everything went okay then `geoip2` WILL be defined
          if (!window.geoip2) {
            done(new Error('Unexpected response format. The downloaded script should have exported `geoip2` to the global scope'));
            return;
          }

          geoip2.country(function (location) {
            try {
              done({
                code: location.country.iso_code
              });
            } catch (err) {
              done(toError(err));
            }
          }, function (err) {
            done(toError(err));
          }); // We can't return anything, because we need to wait for the second AJAX call to return.
          // Then we can 'complete' the service by passing data or an error to the `done` callback.
        }
      };
    }
  }
});

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/postcss-loader/src!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/styles/main.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/utils/async.js":
/*!****************************!*\
  !*** ./src/utils/async.js ***!
  \****************************/
/*! exports provided: getScript, makeAsyncRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScript", function() { return getScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeAsyncRequest", function() { return makeAsyncRequest; });


const getScript = (url, callback, timeout) => {
  let timeoutIdx;
  const scriptTag = document.createElement('script');
  scriptTag.type = 'text/' + (url.type || 'javascript');
  scriptTag.src = url.src || url;
  scriptTag.async = false;

  scriptTag.onreadystatechange = s.onload = function () {
    // this code handles two scenarios, whether called by onload or onreadystatechange
    const state = scriptTag.readyState;
    clearTimeout(timeoutIdx);

    if (!callback.done && (!state || /loaded|complete/.test(state))) {
      callback.done = true;
      callback();
      scriptTag.onreadystatechange = scriptTag.onload = null;
    }
  };

  document.body.appendChild(scriptTag); // You can't catch JSONP Errors, because it's handled by the script tag
  // one way is to use a timeout

  timeoutIdx = setTimeout(function () {
    callback.done = true;
    callback();
    scriptTag.onreadystatechange = scriptTag.onload = null;
  }, timeout);
};
const makeAsyncRequest = (url, onComplete, timeout, postData, requestHeaders) => {
  const xhr = new (window.XMLHttpRequest || window.ActiveXObject)('MSXML2.XMLHTTP.3.0');
  xhr.open(postData ? 'POST' : 'GET', url, 1);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  if (Array.isArray(requestHeaders)) {
    for (let i = 0, l = requestHeaders.length; i < l; ++i) {
      const split = requestHeaders[i].split(':', 2);
      xhr.setRequestHeader(split[0].replace(/^\s+|\s+$/g, ''), split[1].replace(/^\s+|\s+$/g, ''));
    }
  }

  if (typeof onComplete == 'function') {
    xhr.onreadystatechange = function () {
      if (xhr.readyState > 3) {
        onComplete(xhr);
      }
    };
  }

  xhr.send(postData);
};

/***/ }),

/***/ "./src/utils/cookie.js":
/*!*****************************!*\
  !*** ./src/utils/cookie.js ***!
  \*****************************/
/*! exports provided: getCookie, setCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });


const getCookie = name => {
  const value = ' ' + document.cookie;
  const parts = value.split(' ' + name + '=');
  return parts.length < 2 ? undefined : parts.pop().split(';').shift();
};
const setCookie = function (name, value, expiryDays, domain, path, secure) {
  const exdate = new Date();
  exdate.setHours(exdate.getHours() + (typeof expiryDays !== "number" ? 365 : expiryDays) * 24);
  document.cookie = name + '=' + value + ';expires=' + exdate.toUTCString() + ';path=' + (path || '/') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
};

/***/ }),

/***/ "./src/utils/dom.js":
/*!**************************!*\
  !*** ./src/utils/dom.js ***!
  \**************************/
/*! exports provided: traverseDOMPath, addCustomStylesheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverseDOMPath", function() { return traverseDOMPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCustomStylesheet", function() { return addCustomStylesheet; });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./src/utils/style.js");



const traverseDOMPath = (elem, className) => !elem || !elem.parentNode ? null : elem.classList.contains(className) ? elem : traverseDOMPath(elem.parentNode, className);
const addCustomStylesheet = (id, palette, prefix) => {
  const colorStyles = {};
  const {
    popup,
    button,
    highlight,
    saveButton
  } = palette; // needs background colour, text and link will be set to black/white if not specified

  if (popup) {
    // assumes popup.background is set
    popup.text = popup.text ? popup.text : Object(_style__WEBPACK_IMPORTED_MODULE_0__["getContrast"])(popup.background);
    popup.link = popup.link ? popup.link : popup.text;
    colorStyles[prefix + ' .cc-tooltip, ' + prefix + ' .cc-tooltip:after'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
    colorStyles[prefix + '.cc-window'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
    colorStyles[prefix + '.cc-revoke'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
    colorStyles[prefix + ' .cc-link,' + prefix + ' .cc-link:active,' + prefix + ' .cc-link:visited'] = ['color: ' + popup.link];

    if (button) {
      // assumes button.background is set
      button.text = button.text ? button.text : Object(_style__WEBPACK_IMPORTED_MODULE_0__["getContrast"])(button.background);
      button.border = button.border ? button.border : 'transparent';
      colorStyles[prefix + ' .cc-btn'] = ['color: ' + button.text, 'border-color: ' + button.border, 'background-color: ' + button.background];

      if (button.padding) {
        colorStyles[prefix + ' .cc-btn'].push('padding: ' + button.padding);
      }

      if (button.background != 'transparent') {
        colorStyles[prefix + ' .cc-btn:hover, ' + prefix + ' .cc-btn:focus'] = ['background-color: ' + (button.hover || Object(_style__WEBPACK_IMPORTED_MODULE_0__["getHoverColor"])(button.background))];
      }

      if (highlight) {
        //assumes highlight.background is set
        highlight.text = highlight.text ? highlight.text : Object(_style__WEBPACK_IMPORTED_MODULE_0__["getContrast"])(highlight.background);
        highlight.border = highlight.border ? highlight.border : 'transparent';
        colorStyles[prefix + ' .cc-highlight'] = ['color: ' + highlight.text, 'border-color: ' + highlight.border, 'background-color: ' + highlight.background];
      } else {
        // sets highlight text color to popup text. background and border are transparent by default.
        colorStyles[prefix + ' .cc-highlight .cc-btn:first-child'] = ['color: ' + popup.text];
      }
    }

    if (saveButton) {
      colorStyles[`${prefix} .cc-btn.cc-save`] = ['color: ' + saveButton.text, 'border-color: ' + saveButton.border, 'background-color: ' + saveButton.background];
    }
  } // this will be interpretted as CSS. the key is the selector, and each array element is a rule


  const style = document.createElement('style');
  style.id = id;
  document.head.appendChild(style);
  Object.entries(colorStyles).forEach(([prop, value], index) => style.sheet.insertRule(`${prop}{${value.join(';')}}`, index));
  return style;
};

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: getCookie, setCookie, interpolateString, throttle, hash, normalizeHex, getContrast, getLuminance, getHoverColor, traverseDOMPath, addCustomStylesheet, isValidStatus, isPlainObject, isMobile, getScript, makeAsyncRequest, mergeOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateString", function() { return interpolateString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeHex", function() { return normalizeHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContrast", function() { return getContrast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLuminance", function() { return getLuminance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHoverColor", function() { return getHoverColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverseDOMPath", function() { return traverseDOMPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCustomStylesheet", function() { return addCustomStylesheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidStatus", function() { return isValidStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScript", function() { return getScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeAsyncRequest", function() { return makeAsyncRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return mergeOptions; });
/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookie */ "./src/utils/cookie.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/utils/style.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/utils/dom.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation */ "./src/utils/validation.js");
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./async */ "./src/utils/async.js");



const getCookie = _cookie__WEBPACK_IMPORTED_MODULE_0__["getCookie"];
const setCookie = _cookie__WEBPACK_IMPORTED_MODULE_0__["setCookie"];
const interpolateString = (str, callback) => str.replace(/{{([a-z][a-z0-9\-_]*)}}/gi, (matches, replaced) => callback(replaced) || ''); // only used for throttling the 'mousemove' event (used for animating the revoke button when `animateRevokable` is true)

const throttle = (callback, limit) => {
  let wait = false;
  return function () {
    if (!wait) {
      callback(...arguments);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}; // only used for hashing json objects (used for hash mapping palette objects, used when custom colours are passed through JavaScript)

const hash = str => {
  let hashNum = 0,
      i = 0,
      chr,
      len = str.length;
  if (str.length === 0) return hashNum;

  for (i; i < len; ++i) {
    chr = str.charCodeAt(i);
    hashNum = (hashNum << 5) - hashNum + chr;
    hashNum |= 0;
  }

  return hashNum;
};

const normalizeHex = _style__WEBPACK_IMPORTED_MODULE_1__["normalizeHex"];
const getContrast = _style__WEBPACK_IMPORTED_MODULE_1__["getContrast"];
const getLuminance = _style__WEBPACK_IMPORTED_MODULE_1__["getLuminance"];
const getHoverColor = _style__WEBPACK_IMPORTED_MODULE_1__["getHoverColor"];

const traverseDOMPath = _dom__WEBPACK_IMPORTED_MODULE_2__["traverseDOMPath"];
const addCustomStylesheet = _dom__WEBPACK_IMPORTED_MODULE_2__["addCustomStylesheet"];

const isValidStatus = _validation__WEBPACK_IMPORTED_MODULE_3__["isValidStatus"];
const isPlainObject = _validation__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"];
const isMobile = _validation__WEBPACK_IMPORTED_MODULE_3__["isMobile"];

const getScript = _async__WEBPACK_IMPORTED_MODULE_4__["getScript"];
const makeAsyncRequest = _async__WEBPACK_IMPORTED_MODULE_4__["makeAsyncRequest"];

const loopProperties = overwrites => (obj, [key, value]) => {
  if (value instanceof Object && !(value instanceof Array)) {
    if (overwrites[key] instanceof Object && !(overwrites[key] instanceof Array)) {
      obj[key] = Object.entries(value).reduce(loopProperties(overwrites[key]), {});
    } else {
      obj[key] = value;
    }
  } else {
    if (overwrites.hasOwnProperty(key)) {
      obj[key] = overwrites[key];
    } else {
      obj[key] = value;
    }
  }

  return obj;
};

const mergeOptions = (defaults, overwrites) => Object.entries(defaults).reduce(loopProperties(overwrites), {});

/***/ }),

/***/ "./src/utils/style.js":
/*!****************************!*\
  !*** ./src/utils/style.js ***!
  \****************************/
/*! exports provided: normalizeHex, getContrast, getLuminance, getHoverColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeHex", function() { return normalizeHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContrast", function() { return getContrast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLuminance", function() { return getLuminance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHoverColor", function() { return getHoverColor; });


const normalizeHex = hex => hex[0] == '#' ? hex.substr(1) : hex.length == 3 ? hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] : hex; // used to get text colors if not set

const getContrast = hex => {
  hex = normalizeHex(hex);
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#000' : '#fff';
}; // used to change color on highlight

const getLuminance = hex => {
  const num = parseInt(normalizeHex(hex), 16),
        amt = 38,
        R = (num >> 16) + amt,
        B = (num >> 8 & 0x00ff) + amt,
        G = (num & 0x0000ff) + amt;
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
};
const getHoverColor = hex => {
  hex = normalizeHex(hex); // for black buttons

  return hex === '000000' ? '#222' : getLuminance(hex);
};

/***/ }),

/***/ "./src/utils/validation.js":
/*!*********************************!*\
  !*** ./src/utils/validation.js ***!
  \*********************************/
/*! exports provided: isValidStatus, isMobile, isPlainObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidStatus", function() { return isValidStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");



/**
 * Checks if a status is in the constants list
 * @param { string } status - Status String to
 * @return { boolean } - if status is valid
 */

const isValidStatus = status => _constants__WEBPACK_IMPORTED_MODULE_0__["statuses"].indexOf(status) >= 0;
const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); // The code "typeof obj === 'object' && obj !== null" allows Array objects

const isPlainObject = obj => typeof obj === 'object' && obj !== null && obj.constructor == Object;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0Nvb2tpZUNvbnNlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9Db3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvTGVnYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9Mb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL1BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9vcHRpb25zL2RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29wdGlvbnMvbGVnYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29wdGlvbnMvbG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/MTgwMyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvYXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Nvb2tpZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3ZhbGlkYXRpb24uanMiXSwibmFtZXMiOlsic3RhdHVzRGVueSIsInN0YXR1c0FsbG93Iiwic3RhdHVzRGlzbWlzcyIsInN0YXR1c2VzIiwiZXhwb3J0cyIsIm1vZHVsZSIsIkNvb2tpZUNvbnNlbnQiLCJ3aW5kb3ciLCJlbWl0dGVyIiwiRXZlbnRFbWl0dGVyIiwiQmFzZSIsImNvbnN0cnVjdG9yIiwiZGVmYXVsdE9wdGlvbnMiLCJvcHRpb25zIiwibWVyZ2VPcHRpb25zIiwib24iLCJiaW5kIiwiZW1pdCIsImFuc3dlcnMiLCJnZXRGaWx0ZXJlZFN0YXR1c1ZhbHVlc0Zyb21Db29raWVzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImNhdGVnb3J5IiwiY2F0ZWdvcmllcyIsInN0YXR1cyIsImJsYWNrbGlzdFBhZ2UiLCJpbmNsdWRlcyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJlbmFibGVkIiwid2hpdGVsaXN0UGFnZSIsImxlbmd0aCIsInNldFRpbWVvdXQiLCJsZWdhbCIsImNvdW50cnlDb2RlIiwiaW5pdGlhbGl6YXRpb25Db21wbGV0ZSIsImNvZGUiLCJMb2NhdGlvbiIsImxvY2F0ZSIsImluaXRpYWxpemF0aW9uRXJyb3IiLCJyZXN1bHQiLCJMZWdhbCIsImFwcGx5TGF3IiwicG9wdXAiLCJQb3B1cCIsImF1dG9PcGVuIiwiZXJyb3IiLCJnZXRDb3VudHJ5TGF3cyIsImdldCIsImlzT3BlbiIsImNsb3NlIiwib3BlbiIsInRvZ2dsZVJldm9rZUJ1dHRvbiIsImJvb2wiLCJkZXN0cm95IiwicmV2b2tlQ2hvaWNlIiwicHJldmVudE9wZW4iLCJjbGVhckNvb2tpZVZhbHVlcyIsInNhdmUiLCJzZXRTdGF0dXNlcyIsInNldENhdGVnb3J5Q29va2llVmFsdWUiLCJjYXRlZ29yeU5hbWUiLCJuYW1lIiwiZXhwaXJ5RGF5cyIsImRvbWFpbiIsInBhdGgiLCJzZWN1cmUiLCJjb29raWUiLCJpc1ZhbGlkU3RhdHVzIiwiY29va2llTmFtZSIsImNob3NlbkJlZm9yZSIsImluZGV4T2YiLCJnZXRDb29raWUiLCJzZXRDb29raWUiLCJjaGVja0JveFZhbHVlcyIsImdldENoZWNrQm94VmFsdWVzIiwiY29uc29sZSIsImRlYnVnIiwiZ2V0U3RhdHVzVmFsdWVzRnJvbUNvb2tpZXMiLCJjb29raWVWYWx1ZSIsInVuZGVmaW5lZCIsInN0YXR1c1ZhbHVlcyIsImZpbHRlcmVkU3RhdHVzVmFsdWVzIiwia2V5IiwiY2FuVXNlQ29va2llcyIsIm5hdmlnYXRvciIsImNvb2tpZUVuYWJsZWQiLCJDb29raWVzT0siLCJoYXNBbnN3ZXJlZCIsInJldm9rYWJsZSIsInJlZHVjZSIsIm9iaiIsImRlZmluZVByb3BlcnR5Iiwic2V0IiwiZW51bWVyYWJsZSIsIndyaXRlYWJsZSIsImNvbmZpZ3VyYWJsZSIsIkNvcmUiLCJjb29raWVDb25zdGVudCIsImluaXQiLCJoYXNMYXciLCJleHBsaWNpdEFjdGlvbiIsImNvdW50cnkiLCJyZWdpb25hbExhdyIsImRpc21pc3NPblNjcm9sbCIsImRpc21pc3NPblRpbWVvdXQiLCJjdXJyZW50U2VydmljZUluZGV4IiwiZ2V0TmV4dFNlcnZpY2UiLCJzZXJ2aWNlIiwiZ2V0U2VydmljZUJ5SWR4Iiwic2VydmljZXMiLCJpZHgiLCJzZXJ2aWNlT3B0aW9uIiwiZHluYW1pY09wdHMiLCJhc3NpZ24iLCJzZXJ2aWNlRGVmaW5pdGlvbnMiLCJpc1BsYWluT2JqZWN0IiwiY29tcGxldGUiLCJFcnJvciIsImNhbGxiYWNrQ29tcGxldGUiLCJjYWxsYmFja0Vycm9yIiwicnVuU2VydmljZSIsInJ1bk5leHRTZXJ2aWNlT25FcnJvciIsInNldHVwVXJsIiwic2VydmljZU9wdHMiLCJnZXRDdXJyZW50U2VydmljZU9wdHMiLCJ1cmwiLCJyZXBsYWNlIiwiXyIsInBhcmFtIiwidGVtcE5hbWUiLCJEYXRlIiwibm93IiwicmVzIiwiX19KU09OUF9EQVRBIiwiSlNPTiIsInN0cmluZ2lmeSIsImludGVycG9sYXRlVXJsIiwiY2FsbGJhY2siLCJyZXF1ZXN0RnVuY3Rpb24iLCJpc1NjcmlwdCIsImdldFNjcmlwdCIsIm1ha2VBc3luY1JlcXVlc3QiLCJ4aHIiLCJyZXNwb25zZVRleHQiLCJydW5TZXJ2aWNlQ2FsbGJhY2siLCJjYWxsIiwidGltZW91dCIsImRhdGEiLCJoZWFkZXJzIiwic2VydmljZVJlc3VsdEhhbmRsZXIiLCJhc3luY1Jlc3VsdCIsIm9uU2VydmljZVJlc3VsdCIsImVyciIsImxvZ0Vycm9yIiwibmV4dFNlcnZpY2UiLCJjb21wbGV0ZVNlcnZpY2UiLCJ2YWwiLCJmbiIsIndhcm4iLCJjdXN0b21TdHlsZXMiLCJoYXNUcmFuc2l0aW9uIiwiZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0cmFucyIsInQiLCJPVCIsIm1zVCIsIk1velQiLCJXZWJraXRUIiwicHJlZml4IiwiaGFzT3duUHJvcGVydHkiLCJzdHlsZSIsImNvb2tpZVBvcHVwIiwiZ2V0UG9wdXBDbGFzc2VzIiwiam9pbiIsImdldFBvcHVwSW5uZXJNYXJrdXAiLCJjdXN0b21IVE1MIiwib3ZlcnJpZGVIVE1MIiwic3RhdGljIiwid3JhcHBlciIsImFwcGVuZE1hcmt1cCIsImRpc3BsYXkiLCJlbGVtZW50IiwiZmlyc3RDaGlsZCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGx5QXV0b0Rpc21pc3MiLCJhcHBseVJldm9rZUJ1dHRvbiIsImZhZGVJbiIsInNob3dSZXZva2UiLCJmYWRlT3V0IiwiYWZ0ZXJUcmFuc2l0aW9uIiwiYWZ0ZXJGYWRlT3V0IiwiY29udGFpbnMiLCJwYXJlbnROb2RlIiwibWF4SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZmFkZUluVGltZW91dCIsIm9wZW5pbmdUaW1lb3V0IiwiYWZ0ZXJGYWRlSW4iLCJyZW1vdmUiLCJjbGVhclRpbWVvdXQiLCJhZGRFdmVudExpc3RlbmVyIiwidHJhbnNpdGlvbkVuZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzaG93IiwicmV2b2tlQnRuIiwiZ2V0UG9zaXRpb25DbGFzc2VzIiwicG9zaXRpb24iLCJzcGxpdCIsInBvcyIsIm9wdHMiLCJwb3NpdGlvblN0eWxlIiwiaXNNb2JpbGUiLCJtb2JpbGVGb3JjZUZsb2F0IiwiY2xhc3NlcyIsInR5cGUiLCJ0aGVtZSIsInB1c2giLCJhcHBseSIsImF0dGFjaEN1c3RvbVBhbGV0dGUiLCJwYWxldHRlIiwiY3VzdG9tU3R5bGVTZWxlY3RvciIsImdldFJldm9rZUJ1dHRvbkNsYXNzZXMiLCJyZXZva2VQb3NpdGlvbiIsImFuaW1hdGVSZXZva2FibGUiLCJpbnRlcnBvbGF0ZWQiLCJzaG93TGluayIsImVsZW1lbnRzIiwibGluayIsIm1lc3NhZ2VsaW5rIiwibWVzc2FnZSIsInNldHRpbmdzIiwiZGlzYWJsZWQiLCJjaGVja2VkIiwicHJlc2VsZWN0ZWQiLCJtYW5kYXRvcnkiLCJsYWJlbCIsInRvb2x0aXAiLCJzYXZlQnRuIiwiY29udGVudCIsInNlbGVjdEFsbEJ0biIsInNlbGVjdEFsbCIsImZvckVhY2giLCJwcm9wIiwiaW50ZXJwb2xhdGVTdHJpbmciLCJzdHIiLCJjb21wbGlhbmNlVHlwZSIsImNvbXBsaWFuY2UiLCJpbmZvIiwibGF5b3V0IiwibGF5b3V0cyIsImJhc2ljIiwibWF0Y2giLCJtYXJrdXAiLCJkaXYiLCJjb250IiwiY29udGFpbmVyIiwibm9kZVR5cGUiLCJib2R5IiwiaW5uZXJIVE1MIiwiY2hpbGRyZW4iLCJldmVudCIsImhhbmRsZUJ1dHRvbkNsaWNrIiwicXVlcnlTZWxlY3RvckFsbCIsImNoZWNrYm94IiwidXNlckNhdGVnb3JpZXMiLCJzdG9wUHJvcGFnYXRpb24iLCJzaG93SW5mbyIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIiwicHJldmVudERlZmF1bHQiLCJhdXRvQXR0YWNoIiwiYXBwZW5kQ2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJidG4iLCJ0cmF2ZXJzZURPTVBhdGgiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiYWN0aW9uIiwiY2hlY2tBbGwiLCJ2YWx1ZXMiLCJhdHRyaWJ1dGVzIiwidmFsdWUiLCJoYXNoU3RyIiwiaGFzaCIsInNlbGVjdG9yIiwiaXNWYWxpZCIsImFkZEN1c3RvbVN0eWxlc2hlZXQiLCJnZXRFdmVudFBhdGgiLCJjb21wb3NlZFBhdGgiLCJhcnIiLCJkZWxheSIsInNjcm9sbFJhbmdlIiwiZGlzbWlzc09uTGlua0NsaWNrIiwiZGlzbWlzc09uV2luZG93Q2xpY2siLCJkaXNtaXNzT25LZXlQcmVzcyIsImRpc21pc3NUaW1lb3V0IiwiTWF0aCIsImZsb29yIiwib25XaW5kb3dTY3JvbGwiLCJwYWdlWU9mZnNldCIsInBhc3NpdmUiLCJvbldpbmRvd0NsaWNrIiwiZXZ0Iiwic29tZSIsImlnbm9yZUNsaWNrc0Zyb20iLCJpZ25vcmVkQ2xpY2siLCJvbkxpbmtDbGljayIsImVsZW0iLCJ0YWdOYW1lIiwib25LZXlQcmVzcyIsImtleUNvZGUiLCJwb2xpY3kiLCJvbk1vdXNlTW92ZSIsInRocm90dGxlIiwiYWN0aXZlIiwibWluWSIsIm1heFkiLCJpbm5lckhlaWdodCIsImNsaWVudFkiLCJoZWFkZXIiLCJkaXNtaXNzIiwiYWxsb3ciLCJkZW55IiwiaHJlZiIsIm1vZGFsIiwidW5jYXRlZ29yaXplZCIsImVzc2VudGlhbCIsInBlcnNvbmFsaXphdGlvbiIsImFuYWx5dGljcyIsIm1hcmtldGluZyIsInRvRXJyb3IiLCJpcGluZm8iLCJkb25lIiwicmVzcG9uc2UiLCJqc29uIiwicGFyc2UiLCJpcGluZm9kYiIsInN0YXR1c0NvZGUiLCJzdGF0dXNNZXNzYWdlIiwibWF4bWluZCIsImdlb2lwMiIsImlzb19jb2RlIiwidGltZW91dElkeCIsInNjcmlwdFRhZyIsInNyYyIsImFzeW5jIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicyIsIm9ubG9hZCIsInN0YXRlIiwicmVhZHlTdGF0ZSIsInRlc3QiLCJvbkNvbXBsZXRlIiwicG9zdERhdGEiLCJyZXF1ZXN0SGVhZGVycyIsIlhNTEh0dHBSZXF1ZXN0IiwiQWN0aXZlWE9iamVjdCIsInNldFJlcXVlc3RIZWFkZXIiLCJBcnJheSIsImlzQXJyYXkiLCJpIiwibCIsInNlbmQiLCJwYXJ0cyIsInBvcCIsInNoaWZ0IiwiZXhkYXRlIiwic2V0SG91cnMiLCJnZXRIb3VycyIsInRvVVRDU3RyaW5nIiwiY2xhc3NOYW1lIiwiaWQiLCJjb2xvclN0eWxlcyIsImJ1dHRvbiIsImhpZ2hsaWdodCIsInNhdmVCdXR0b24iLCJ0ZXh0IiwiZ2V0Q29udHJhc3QiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwicGFkZGluZyIsImhvdmVyIiwiZ2V0SG92ZXJDb2xvciIsImhlYWQiLCJlbnRyaWVzIiwiaW5kZXgiLCJzaGVldCIsImluc2VydFJ1bGUiLCJtYXRjaGVzIiwicmVwbGFjZWQiLCJsaW1pdCIsIndhaXQiLCJhcmd1bWVudHMiLCJoYXNoTnVtIiwiY2hyIiwibGVuIiwiY2hhckNvZGVBdCIsIm5vcm1hbGl6ZUhleCIsImdldEx1bWluYW5jZSIsImRvbSIsInZhbGlkYXRpb24iLCJhc3luY0ZucyIsImxvb3BQcm9wZXJ0aWVzIiwib3ZlcndyaXRlcyIsImRlZmF1bHRzIiwiaGV4Iiwic3Vic3RyIiwiciIsInBhcnNlSW50IiwiZyIsImIiLCJ5aXEiLCJudW0iLCJhbXQiLCJSIiwiQiIsIkciLCJ0b1N0cmluZyIsInNsaWNlIiwidXNlckFnZW50Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlD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O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxpQ0FBaUMsUUFBUTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvYmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsWUFBWSwyQkFBMkI7QUFDdkM7QUFDQTs7QUFFQSxZQUFZLHVCQUF1QjtBQUNuQztBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLFlBQVksdUJBQXVCO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsU0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0Esa0NBQWtDOztBQUVsQzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdGQUF3RjtBQUN4Rjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHVCQUF1QjtBQUMzQzs7QUFFQTtBQUNBLHVCQUF1Qiw0QkFBNEI7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDelJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRU8sTUFBTUEsVUFBVSxHQUFHLE1BQW5CO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLE9BQXBCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLFNBQXRCO0FBRUEsTUFBTUMsUUFBUSxHQUFHLENBQUUsTUFBRixFQUFVLE9BQVYsRUFBbUIsU0FBbkIsQ0FBakIsQzs7Ozs7Ozs7Ozs7O0FDTlA7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUVBOztBQUVBLElBQUksT0FBT0MsT0FBUCxLQUFtQixXQUF2QixFQUFvQztBQUNsQ0MsUUFBTSxDQUFDRCxPQUFQLEdBQWlCRSw2REFBakI7QUFDRCxDQUZELE1BRU87QUFDTEMsUUFBTSxDQUFDRCxhQUFQLEdBQXVCQSw2REFBdkI7QUFDRCxDOzs7Ozs7Ozs7Ozs7O0FDVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFFQSxNQUFNRSxPQUFPLEdBQUcsSUFBSUMsNkNBQUosRUFBaEI7QUFFZSxNQUFNQyxJQUFOLENBQVc7QUFDeEJDLGFBQVcsQ0FBRUMsY0FBYyxHQUFHLEVBQW5CLEVBQXVCQyxPQUFPLEdBQUcsRUFBakMsRUFBcUM7QUFDOUMsU0FBS0EsT0FBTCxHQUFlQywyREFBWSxDQUFFRixjQUFGLEVBQWtCQyxPQUFsQixDQUEzQjtBQUNBLFNBQUtFLEVBQUwsR0FBVVAsT0FBTyxDQUFDTyxFQUFSLENBQVdDLElBQVgsQ0FBaUJSLE9BQWpCLENBQVY7QUFDQSxTQUFLUyxJQUFMLEdBQVlULE9BQU8sQ0FBQ1MsSUFBUixDQUFhRCxJQUFiLENBQW1CUixPQUFuQixDQUFaO0FBQ0Q7O0FBTHVCLEM7Ozs7Ozs7Ozs7OztBQ1AxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0NBR0E7QUFDQTs7QUFFZSxNQUFNRixhQUFOLFNBQTRCSSw2Q0FBNUIsQ0FBaUM7QUFDOUNDLGFBQVcsQ0FBRUUsT0FBTyxHQUFHLEVBQVosRUFBZ0I7QUFDekIsVUFBT0Qsd0RBQVAsRUFBdUJDLE9BQXZCO0FBRUEsUUFBSUssT0FBTyxHQUFHLEtBQUtDLGtDQUFMLEVBQWQ7QUFDQUMsVUFBTSxDQUFDQyxJQUFQLENBQVlILE9BQVosRUFBcUJJLEdBQXJCLENBQXlCQyxRQUFRLElBQUk7QUFDbkMsV0FBS1YsT0FBTCxDQUFhVyxVQUFiLENBQXdCRCxRQUF4QixFQUFrQ0UsTUFBbEMsR0FBMkNQLE9BQU8sQ0FBQ0ssUUFBRCxDQUFsRDtBQUNELEtBRkQsRUFKeUIsQ0FTekI7O0FBQ0EsUUFBSSxLQUFLVixPQUFMLENBQWFhLGFBQWIsQ0FBMkJDLFFBQTNCLENBQW9DQyxRQUFRLENBQUNDLFFBQTdDLENBQUosRUFBNEQ7QUFDMUQsV0FBS2hCLE9BQUwsQ0FBYWlCLE9BQWIsR0FBdUIsS0FBdkI7QUFDRDs7QUFDRCxRQUFJLEtBQUtqQixPQUFMLENBQWFrQixhQUFiLENBQTJCSixRQUEzQixDQUFvQ0MsUUFBUSxDQUFDQyxRQUE3QyxDQUFKLEVBQTREO0FBQzFELFdBQUtoQixPQUFMLENBQWFpQixPQUFiLEdBQXVCLElBQXZCO0FBQ0QsS0Fmd0IsQ0FpQnpCOzs7QUFDQSxRQUFJWixPQUFPLENBQUNjLE1BQVIsR0FBaUIsQ0FBckIsRUFBd0I7QUFDdEIsV0FBS25CLE9BQUwsQ0FBYWlCLE9BQWIsR0FBdUIsS0FBdkI7QUFDQUcsZ0JBQVUsQ0FBRSxNQUFNLEtBQUtoQixJQUFMLENBQVcsYUFBWCxFQUEwQkMsT0FBMUIsQ0FBUixDQUFWO0FBQ0QsS0FIRCxNQUdPLElBQUssS0FBS0wsT0FBTCxDQUFhcUIsS0FBYixJQUFzQixLQUFLckIsT0FBTCxDQUFhcUIsS0FBYixDQUFtQkMsV0FBOUMsRUFBNEQ7QUFDakUsV0FBS0Msc0JBQUwsQ0FBNkI7QUFBRUMsWUFBSSxFQUFFLEtBQUt4QixPQUFMLENBQWFxQixLQUFiLENBQW1CQztBQUEzQixPQUE3QjtBQUNELEtBRk0sTUFFQSxJQUFLLEtBQUt0QixPQUFMLENBQWFlLFFBQWxCLEVBQTZCO0FBQ2xDLFVBQUlVLGlEQUFKLENBQWMsS0FBS3pCLE9BQUwsQ0FBYWUsUUFBM0IsRUFBc0NXLE1BQXRDLENBQThDLEtBQUtILHNCQUFMLENBQTRCcEIsSUFBNUIsQ0FBa0MsSUFBbEMsQ0FBOUMsRUFBd0YsS0FBS3dCLG1CQUFMLENBQXlCeEIsSUFBekIsQ0FBK0IsSUFBL0IsQ0FBeEY7QUFDRCxLQUZNLE1BRUE7QUFDTCxXQUFLb0Isc0JBQUwsQ0FBNEIsRUFBNUI7QUFDRDtBQUNGOztBQUNEQSx3QkFBc0IsQ0FBRUssTUFBRixFQUFVO0FBQzlCLFFBQUlBLE1BQU0sQ0FBQ0osSUFBWCxFQUFpQjtBQUNmLFdBQUt4QixPQUFMLEdBQWUsSUFBSTZCLDhDQUFKLENBQVUsS0FBSzdCLE9BQUwsQ0FBYXFCLEtBQXZCLEVBQThCUyxRQUE5QixDQUF3QyxLQUFLOUIsT0FBN0MsRUFBc0Q0QixNQUFNLENBQUNKLElBQTdELENBQWY7QUFDRDs7QUFDRCxTQUFLTyxLQUFMLEdBQWEsSUFBSUMsOENBQUosQ0FBVyxLQUFLaEMsT0FBaEIsRUFBeUIsSUFBekIsQ0FBYjtBQUNBb0IsY0FBVSxDQUFFLE1BQU0sS0FBS2hCLElBQUwsQ0FBVSxhQUFWLEVBQXlCLEtBQUsyQixLQUE5QixDQUFSLEVBQStDLENBQS9DLENBQVY7O0FBRUEsUUFBSSxLQUFLL0IsT0FBTCxDQUFhaUMsUUFBYixJQUF5QixLQUFLakMsT0FBTCxDQUFhaUIsT0FBMUMsRUFBbUQ7QUFDakQsV0FBS2dCLFFBQUw7QUFDRDtBQUNGOztBQUNETixxQkFBbUIsQ0FBRU8sS0FBRixFQUFVO0FBQzNCZCxjQUFVLENBQUUsTUFBTSxLQUFLaEIsSUFBTCxDQUFXLE9BQVgsRUFBb0I4QixLQUFwQixFQUEyQixJQUFJRiw4Q0FBSixDQUFXLEtBQUtoQyxPQUFoQixFQUF5QixJQUF6QixDQUEzQixDQUFSLEVBQXNFLENBQXRFLENBQVY7QUFDRDs7QUFDRG1DLGdCQUFjLENBQUViLFdBQUYsRUFBZTtBQUMzQixXQUFPLElBQUlPLDhDQUFKLENBQVUsS0FBSzdCLE9BQUwsQ0FBYXFCLEtBQXZCLEVBQThCZSxHQUE5QixDQUFtQ2QsV0FBbkMsQ0FBUDtBQUNEOztBQUNEZSxRQUFNLEdBQUc7QUFDUCxXQUFPLEtBQUtOLEtBQUwsQ0FBV00sTUFBWCxFQUFQO0FBQ0Q7O0FBQ0RDLE9BQUssR0FBRTtBQUNMLFdBQU8sS0FBS1AsS0FBTCxDQUFXTyxLQUFYLEVBQVA7QUFDRDs7QUFDREMsTUFBSSxHQUFFO0FBQ0osV0FBTyxLQUFLUixLQUFMLENBQVdRLElBQVgsRUFBUDtBQUNEOztBQUNEQyxvQkFBa0IsQ0FBRUMsSUFBRixFQUFTO0FBQ3pCLFdBQU8sS0FBS1YsS0FBTCxDQUFXUyxrQkFBWCxDQUErQkMsSUFBL0IsQ0FBUDtBQUNEOztBQUNEQyxTQUFPLEdBQUU7QUFDUCxXQUFPLEtBQUtYLEtBQUwsQ0FBV1csT0FBWCxFQUFQO0FBQ0Q7O0FBR0RDLGNBQVksQ0FBQ0MsV0FBRCxFQUFjO0FBQ3hCLFNBQUs1QyxPQUFMLENBQWFpQixPQUFiLEdBQXVCLElBQXZCO0FBQ0EsU0FBSzRCLGlCQUFMO0FBRUEsU0FBS3pDLElBQUwsQ0FBVSxjQUFWOztBQUVBLFFBQUksQ0FBQ3dDLFdBQUwsRUFBa0I7QUFDaEIsV0FBS1gsUUFBTDtBQUNEO0FBQ0Y7QUFHRDs7Ozs7QUFHQWEsTUFBSSxHQUFHO0FBQ0wsU0FBSzFDLElBQUwsQ0FBVSxNQUFWO0FBQ0EsU0FBSzJDLFdBQUw7QUFDRDtBQUVEOzs7Ozs7O0FBS0FDLHdCQUFzQixDQUFFQyxZQUFGLEVBQWdCckMsTUFBaEIsRUFBeUI7QUFDN0MsVUFBTTtBQUFFc0MsVUFBRjtBQUFRQyxnQkFBUjtBQUFvQkMsWUFBcEI7QUFBNEJDLFVBQTVCO0FBQWtDQztBQUFsQyxRQUE2QyxLQUFLdEQsT0FBTCxDQUFhdUQsTUFBaEU7O0FBQ0EsUUFBSUMsNERBQWEsQ0FBQzVDLE1BQUQsQ0FBakIsRUFBMkI7QUFDekIsWUFBTTZDLFVBQVUsR0FBR1AsSUFBSSxHQUFDLEdBQUwsR0FBU0QsWUFBNUI7QUFDQSxZQUFNUyxZQUFZLEdBQUdwRSxtREFBUSxDQUFDcUUsT0FBVCxDQUFrQkMsd0RBQVMsQ0FBQ0gsVUFBRCxDQUEzQixLQUE2QyxDQUFsRTtBQUNBSSw4REFBUyxDQUFDSixVQUFELEVBQWE3QyxNQUFiLEVBQXFCdUMsVUFBckIsRUFBaUNDLE1BQWpDLEVBQXlDQyxJQUF6QyxFQUErQ0MsTUFBL0MsQ0FBVDtBQUNBLFdBQUtsRCxJQUFMLENBQVcsZUFBWCxFQUE0QnFELFVBQTVCLEVBQXdDN0MsTUFBeEMsRUFBZ0Q4QyxZQUFoRDtBQUNELEtBTEQsTUFLTztBQUNMLFdBQUtiLGlCQUFMO0FBQ0Q7QUFDRjtBQUdEOzs7OztBQUdBRSxhQUFXLEdBQUc7QUFFWixRQUFJZSxjQUFjLEdBQUcsS0FBSy9CLEtBQUwsQ0FBV2dDLGlCQUFYLEVBQXJCO0FBQ0FDLFdBQU8sQ0FBQ0MsS0FBUixDQUFjSCxjQUFkO0FBQ0F2RCxVQUFNLENBQUNDLElBQVAsQ0FBWXNELGNBQVosRUFBNEJyRCxHQUE1QixDQUFnQ3dDLFlBQVksSUFBSTtBQUM5QyxXQUFLRCxzQkFBTCxDQUE0QkMsWUFBNUIsRUFBMENhLGNBQWMsQ0FBQ2IsWUFBRCxDQUFkLEdBQStCN0Qsc0RBQS9CLEdBQTZDQyx3REFBdkY7QUFDRCxLQUZEO0FBSUQ7QUFFRDs7Ozs7O0FBSUE2RSw0QkFBMEIsR0FBRztBQUMzQixRQUFJdEQsTUFBTSxHQUFHLEVBQWI7QUFDQUwsVUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS1IsT0FBTCxDQUFhVyxVQUF6QixFQUFxQ0YsR0FBckMsQ0FBeUN3QyxZQUFZLElBQUk7QUFDdkQsVUFBSWtCLFdBQVcsR0FBR1Asd0RBQVMsQ0FBQyxLQUFLNUQsT0FBTCxDQUFhdUQsTUFBYixDQUFvQkwsSUFBcEIsR0FBeUIsR0FBekIsR0FBNkJELFlBQTlCLENBQTNCO0FBQ0FyQyxZQUFNLENBQUNxQyxZQUFELENBQU4sR0FBdUJPLDREQUFhLENBQUNXLFdBQUQsQ0FBYixHQUE2QkEsV0FBN0IsR0FBMkNDLFNBQWxFO0FBQ0QsS0FIRDtBQUlBLFdBQU94RCxNQUFQO0FBQ0Q7QUFFRDs7Ozs7QUFHQU4sb0NBQWtDLEdBQUc7QUFDbkMsUUFBSStELFlBQVksR0FBRyxLQUFLSCwwQkFBTCxFQUFuQjtBQUNBLFFBQUlJLG9CQUFvQixHQUFHLEVBQTNCO0FBQ0EvRCxVQUFNLENBQUNDLElBQVAsQ0FBWTZELFlBQVosRUFBMEI1RCxHQUExQixDQUE4QjhELEdBQUcsSUFBSTtBQUNuQyxVQUFJRixZQUFZLENBQUNFLEdBQUQsQ0FBWixLQUFzQkgsU0FBMUIsRUFBcUM7QUFDbkNFLDRCQUFvQixDQUFDQyxHQUFELENBQXBCLEdBQTRCRixZQUFZLENBQUNFLEdBQUQsQ0FBeEM7QUFDRDtBQUNGLEtBSkQ7QUFLQSxXQUFPRCxvQkFBUDtBQUNEO0FBRUQ7Ozs7O0FBR0F6QixtQkFBaUIsR0FBRztBQUNsQixVQUFNO0FBQUVLLFVBQUY7QUFBUUUsWUFBUjtBQUFnQkM7QUFBaEIsUUFBeUIsS0FBS3JELE9BQUwsQ0FBYXVELE1BQTVDO0FBQ0FoRCxVQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLUixPQUFMLENBQWFXLFVBQXpCLEVBQXFDRixHQUFyQyxDQUF5Q3dDLFlBQVksSUFBSTtBQUN2RFksOERBQVMsQ0FBQ1gsSUFBSSxHQUFDLEdBQUwsR0FBU0QsWUFBVixFQUF3QixFQUF4QixFQUE0QixDQUFDLENBQTdCLEVBQWdDRyxNQUFoQyxFQUF3Q0MsSUFBeEMsQ0FBVDtBQUNELEtBRkQ7QUFHRDtBQUVEOzs7OztBQUdBbUIsZUFBYSxHQUFHO0FBQ2QsUUFBSSxDQUFDOUUsTUFBTSxDQUFDK0UsU0FBUCxDQUFpQkMsYUFBbEIsSUFBbUNoRixNQUFNLENBQUNpRixTQUExQyxJQUF1RGpGLE1BQU0sQ0FBQytFLFNBQVAsQ0FBaUJFLFNBQTVFLEVBQXdGO0FBQ3RGLGFBQU8sSUFBUDtBQUNEOztBQUNELFdBQU8sS0FBS0MsV0FBTCxFQUFQO0FBQ0Q7QUFFRDs7Ozs7O0FBSUFBLGFBQVcsR0FBRztBQUNaLFdBQU9yRSxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLRixrQ0FBTCxFQUFaLEVBQXVEYSxNQUF2RCxHQUFnRSxDQUF2RTtBQUNELEdBeEs2QyxDQTJLOUM7OztBQUNBYyxVQUFRLEdBQUc7QUFDVCxVQUFNMkMsV0FBVyxHQUFHLEtBQUtBLFdBQUwsRUFBcEI7O0FBQ0EsUUFBSSxDQUFDQSxXQUFELElBQWdCLEtBQUs1RSxPQUFMLENBQWFpQixPQUFqQyxFQUEwQztBQUN4QyxXQUFLYyxLQUFMLENBQVdRLElBQVg7QUFDRCxLQUZELE1BRU8sSUFBSXFDLFdBQVcsSUFBSSxLQUFLNUUsT0FBTCxDQUFhNkUsU0FBaEMsRUFBMkM7QUFDaEQsV0FBS3JDLGtCQUFMLENBQXdCLElBQXhCO0FBQ0Q7QUFDRjs7QUFuTDZDO0FBdUxoRGxELG1EQUFRLENBQUN3RixNQUFULENBQWlCLENBQUVDLEdBQUYsRUFBT25FLE1BQVAsTUFDZkwsTUFBTSxDQUFDeUUsY0FBUCxDQUF1QnZGLGFBQXZCLEVBQXNDbUIsTUFBdEMsRUFBOEM7QUFDOUN3QixLQUFHLEVBQUUsWUFBWTtBQUFFLFdBQU94QixNQUFQO0FBQWUsR0FEWTtBQUU5Q3FFLEtBQUcsRUFBRSxZQUFZLENBQUUsQ0FGMkI7QUFHOUNDLFlBQVUsRUFBRSxLQUhrQztBQUk5Q0MsV0FBUyxFQUFFLEtBSm1DO0FBSzlDQyxjQUFZLEVBQUU7QUFMZ0MsQ0FBOUMsR0FNRUwsR0FQYSxDQUFqQixFQU9XdEYsYUFQWCxFOzs7Ozs7Ozs7Ozs7QUN0TUE7QUFBQTtBQUFBO0FBQUE7QUFHZSxNQUFNNEYsSUFBTixTQUFtQnhGLDZDQUFuQixDQUF3QjtBQUNuQ0MsYUFBVyxDQUFDRSxPQUFELEVBQVVzRixjQUFWLEVBQTBCO0FBQ2pDLFVBQU90RixPQUFQO0FBQ0EsU0FBS3NGLGNBQUwsR0FBc0JBLGNBQXRCO0FBRUg7O0FBR0RDLE1BQUksR0FBRyxDQUVOOztBQVZrQyxDOzs7Ozs7Ozs7Ozs7QUNIdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBRWUsTUFBTTFELEtBQU4sU0FBb0JoQyw2Q0FBcEIsQ0FBeUI7QUFDdENDLGFBQVcsQ0FBRUUsT0FBTyxHQUFHLEVBQVosRUFBaUI7QUFDMUIsVUFBT0Qsc0RBQVAsRUFBdUJDLE9BQXZCO0FBQ0Q7O0FBQ0RvQyxLQUFHLENBQUVkLFdBQUYsRUFBZTtBQUNoQixXQUFPO0FBQ0xrRSxZQUFNLEVBQUUsS0FBS3hGLE9BQUwsQ0FBYXdGLE1BQWIsQ0FBb0I3QixPQUFwQixDQUE0QnJDLFdBQTVCLEtBQTRDLENBRC9DO0FBRUx1RCxlQUFTLEVBQUUsS0FBSzdFLE9BQUwsQ0FBYTZFLFNBQWIsQ0FBdUJsQixPQUF2QixDQUErQnJDLFdBQS9CLEtBQStDLENBRnJEO0FBR0xtRSxvQkFBYyxFQUFFLEtBQUt6RixPQUFMLENBQWF5RixjQUFiLENBQTRCOUIsT0FBNUIsQ0FBb0NyQyxXQUFwQyxLQUFvRDtBQUgvRCxLQUFQO0FBS0Q7O0FBQ0RRLFVBQVEsQ0FBRTlCLE9BQUYsRUFBV3NCLFdBQVgsRUFBd0I7QUFDOUIsVUFBTW9FLE9BQU8sR0FBRyxLQUFLdEQsR0FBTCxDQUFTZCxXQUFULENBQWhCOztBQUVBLFFBQUksQ0FBQ29FLE9BQU8sQ0FBQ0YsTUFBYixFQUFxQjtBQUNuQjtBQUNBeEYsYUFBTyxDQUFDaUIsT0FBUixHQUFrQixLQUFsQjtBQUNBLFdBQUtiLElBQUwsQ0FBVyxhQUFYLEVBQTBCa0IsV0FBMUIsRUFBdUNvRSxPQUF2QztBQUNEOztBQUVELFFBQUksS0FBSzFGLE9BQUwsQ0FBYTJGLFdBQWpCLEVBQThCO0FBQzVCLFVBQUlELE9BQU8sQ0FBQ2IsU0FBWixFQUF1QjtBQUNyQjtBQUNBN0UsZUFBTyxDQUFDNkUsU0FBUixHQUFvQixJQUFwQjtBQUNEOztBQUVELFVBQUlhLE9BQU8sQ0FBQ0QsY0FBWixFQUE0QjtBQUMxQjtBQUNBekYsZUFBTyxDQUFDNEYsZUFBUixHQUEwQixLQUExQjtBQUNBNUYsZUFBTyxDQUFDNkYsZ0JBQVIsR0FBMkIsS0FBM0I7QUFDRDtBQUNGOztBQUNELFdBQU83RixPQUFQO0FBQ0Q7O0FBakNxQyxDOzs7Ozs7Ozs7Ozs7QUNMeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRWUsTUFBTXlCLFFBQU4sU0FBdUI1Qiw2Q0FBdkIsQ0FBNEI7QUFDekNDLGFBQVcsQ0FBRUUsT0FBRixFQUFZO0FBQ3JCLFVBQU9ELHlEQUFQLEVBQXVCQyxPQUF2QjtBQUNBLFNBQUs4RixtQkFBTCxHQUEyQixDQUFDLENBQTVCLENBRnFCLENBRVM7QUFDL0I7O0FBRURDLGdCQUFjLEdBQUc7QUFDZixRQUFJQyxPQUFKOztBQUNBLE9BQUc7QUFDREEsYUFBTyxHQUFHLEtBQUtDLGVBQUwsQ0FBcUIsRUFBRSxLQUFLSCxtQkFBNUIsQ0FBVjtBQUNELEtBRkQsUUFHRSxLQUFLQSxtQkFBTCxHQUEyQixLQUFLOUYsT0FBTCxDQUFha0csUUFBYixDQUFzQi9FLE1BQWpELElBQ0EsQ0FBQzZFLE9BSkg7O0FBT0EsV0FBT0EsT0FBUDtBQUNEOztBQUVEQyxpQkFBZSxDQUFDRSxHQUFELEVBQU07QUFDbkI7QUFDQSxVQUFNQyxhQUFhLEdBQUcsS0FBS3BHLE9BQUwsQ0FBYWtHLFFBQWIsQ0FBc0JDLEdBQXRCLENBQXRCLENBRm1CLENBSW5COztBQUNBLFFBQUksT0FBT0MsYUFBUCxLQUF5QixVQUE3QixFQUF5QztBQUN2QyxZQUFNQyxXQUFXLEdBQUdELGFBQWEsRUFBakM7QUFDQSxhQUFPQyxXQUFXLENBQUNuRCxJQUFaLEdBQ0wzQyxNQUFNLENBQUMrRixNQUFQLENBQ0UsRUFERixFQUVFRCxXQUZGLEVBR0UsS0FBS3JHLE9BQUwsQ0FBYXVHLGtCQUFiLENBQWlDRixXQUFXLENBQUNuRCxJQUE3QyxFQUFxRG1ELFdBQXJELENBSEYsQ0FESyxHQUtEQSxXQUxOO0FBTUQsS0Fia0IsQ0FlbkI7OztBQUNBLFFBQUksT0FBT0QsYUFBUCxLQUF5QixRQUE3QixFQUF1QztBQUNyQyxhQUFPLEtBQUtwRyxPQUFMLENBQWF1RyxrQkFBYixDQUFnQ0gsYUFBaEMsR0FBUDtBQUNELEtBbEJrQixDQW9CbkI7QUFDQTs7O0FBQ0EsUUFBSUksNERBQWEsQ0FBQ0osYUFBRCxDQUFqQixFQUFrQztBQUNoQyxhQUFPLEtBQUtwRyxPQUFMLENBQWF1RyxrQkFBYixDQUFnQ0gsYUFBYSxDQUFDbEQsSUFBOUMsRUFDTGtELGFBREssQ0FBUDtBQUdEOztBQUVELFdBQU8sSUFBUDtBQUNELEdBL0N3QyxDQWlEekM7QUFDQTs7O0FBQ0ExRSxRQUFNLENBQUMrRSxRQUFELEVBQVd2RSxLQUFYLEVBQWtCO0FBQ3RCLFVBQU04RCxPQUFPLEdBQUcsS0FBS0QsY0FBTCxFQUFoQjs7QUFFQSxRQUFJLENBQUNDLE9BQUwsRUFBYztBQUNaOUQsV0FBSyxDQUFDLElBQUl3RSxLQUFKLENBQVUsb0JBQVYsQ0FBRCxDQUFMO0FBQ0E7QUFDRDs7QUFFRCxTQUFLQyxnQkFBTCxHQUF3QkYsUUFBeEI7QUFDQSxTQUFLRyxhQUFMLEdBQXFCMUUsS0FBckI7QUFFQSxTQUFLMkUsVUFBTCxDQUFnQmIsT0FBaEIsRUFBeUIsS0FBS2MscUJBQUwsQ0FBMkIzRyxJQUEzQixDQUFnQyxJQUFoQyxDQUF6QjtBQUNELEdBL0R3QyxDQWlFekM7OztBQUNBNEcsVUFBUSxDQUFDZixPQUFELEVBQVU7QUFDaEIsVUFBTWdCLFdBQVcsR0FBRyxLQUFLQyxxQkFBTCxFQUFwQjtBQUNBLFdBQU9qQixPQUFPLENBQUNrQixHQUFSLENBQVlDLE9BQVosQ0FBb0IsWUFBcEIsRUFBa0MsVUFBU0MsQ0FBVCxFQUFZQyxLQUFaLEVBQW1CO0FBQzFELFVBQUlBLEtBQUssS0FBSyxVQUFkLEVBQTBCO0FBQ3hCLGNBQU1DLFFBQVEsR0FBRyxhQUFhQyxJQUFJLENBQUNDLEdBQUwsRUFBOUI7O0FBQ0E5SCxjQUFNLENBQUM0SCxRQUFELENBQU4sR0FBbUIsVUFBU0csR0FBVCxFQUFjO0FBQy9CekIsaUJBQU8sQ0FBQzBCLFlBQVIsR0FBdUJDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSCxHQUFmLENBQXZCO0FBQ0QsU0FGRDs7QUFHQSxlQUFPSCxRQUFQO0FBQ0Q7O0FBQ0QsVUFBSUQsS0FBSyxJQUFJTCxXQUFXLENBQUNhLGNBQXpCLEVBQXlDO0FBQ3ZDLGVBQU9iLFdBQVcsQ0FBQ2EsY0FBWixDQUEyQlIsS0FBM0IsQ0FBUDtBQUNEO0FBQ0YsS0FYTSxDQUFQO0FBWUQsR0FoRndDLENBa0Z6Qzs7O0FBQ0FSLFlBQVUsQ0FBQ2IsT0FBRCxFQUFVUyxRQUFWLEVBQW9CO0FBQzVCO0FBQ0EsUUFBSSxDQUFDVCxPQUFELElBQVksQ0FBQ0EsT0FBTyxDQUFDa0IsR0FBckIsSUFBNEIsQ0FBQ2xCLE9BQU8sQ0FBQzhCLFFBQXpDLEVBQW1EO0FBQ2pEO0FBQ0QsS0FKMkIsQ0FNNUI7OztBQUNBLFVBQU1DLGVBQWUsR0FBRy9CLE9BQU8sQ0FBQ2dDLFFBQVIsR0FBbUJDLGdEQUFuQixHQUErQkMsdURBQXZELENBUDRCLENBUzVCOztBQUNBSCxtQkFBZSxDQUNiLEtBQUtoQixRQUFMLENBQWNmLE9BQWQsQ0FEYSxFQUVibUMsR0FBRyxJQUFJO0FBQ0w7QUFDQSxVQUFJQyxZQUFZLEdBQUdELEdBQUcsR0FBR0EsR0FBRyxDQUFDQyxZQUFQLEdBQXNCLEVBQTVDLENBRkssQ0FJTDtBQUNBO0FBQ0E7O0FBQ0EsVUFBSXBDLE9BQU8sQ0FBQzBCLFlBQVosRUFBMEI7QUFDeEJVLG9CQUFZLEdBQUdwQyxPQUFPLENBQUMwQixZQUF2QjtBQUNBLGVBQU8xQixPQUFPLENBQUMwQixZQUFmO0FBQ0QsT0FWSSxDQVlMOzs7QUFDQSxXQUFLVyxrQkFBTCxDQUF3QkMsSUFBeEIsQ0FBNkIsSUFBN0IsRUFBbUM3QixRQUFuQyxFQUE2Q1QsT0FBN0MsRUFBc0RvQyxZQUF0RDtBQUNELEtBaEJZLEVBaUJiLEtBQUtwSSxPQUFMLENBQWF1SSxPQWpCQSxFQWtCYnZDLE9BQU8sQ0FBQ3dDLElBbEJLLEVBbUJieEMsT0FBTyxDQUFDeUMsT0FuQkssQ0FBZixDQVY0QixDQWdDNUI7QUFDRCxHQXBId0MsQ0FzSHpDO0FBQ0E7QUFDQTs7O0FBQ0FKLG9CQUFrQixDQUFFNUIsUUFBRixFQUFZVCxPQUFaLEVBQXFCb0MsWUFBckIsRUFBb0M7QUFDcEQ7QUFDQSxVQUFNTSxvQkFBb0IsR0FBR0MsV0FBVyxJQUFJO0FBQzFDO0FBQ0E7QUFDQSxVQUFJLENBQUMvRyxNQUFMLEVBQWE7QUFDWCxhQUFLZ0gsZUFBTCxDQUFzQm5DLFFBQXRCLEVBQWdDa0MsV0FBaEM7QUFDRDtBQUNGLEtBTkQsQ0FGb0QsQ0FVcEQ7QUFDQTs7O0FBQ0EsVUFBTS9HLE1BQU0sR0FBR29FLE9BQU8sQ0FBQzhCLFFBQVIsQ0FBaUJZLG9CQUFqQixFQUF1Q04sWUFBdkMsQ0FBZjs7QUFFQSxRQUFJeEcsTUFBSixFQUFZO0FBQ1YsV0FBS2dILGVBQUwsQ0FBc0JuQyxRQUF0QixFQUFnQzdFLE1BQWhDO0FBQ0Q7QUFDRixHQTFJd0MsQ0E0SXpDO0FBQ0E7OztBQUNBZ0gsaUJBQWUsQ0FBQ25DLFFBQUQsRUFBVzdFLE1BQVgsRUFBbUI7QUFDaEM7QUFDQSxRQUFJQSxNQUFNLFlBQVk4RSxLQUFsQixJQUE0QjlFLE1BQU0sSUFBSUEsTUFBTSxDQUFDTSxLQUFqRCxFQUF5RDtBQUN2RHVFLGNBQVEsQ0FBQzZCLElBQVQsQ0FBYyxJQUFkLEVBQW9CMUcsTUFBcEIsRUFBNEIsSUFBNUI7QUFDRCxLQUZELE1BRU87QUFDTDZFLGNBQVEsQ0FBQzZCLElBQVQsQ0FBYyxJQUFkLEVBQW9CLElBQXBCLEVBQTBCMUcsTUFBMUI7QUFDRDtBQUNGLEdBckp3QyxDQXVKekM7QUFDQTs7O0FBQ0FrRix1QkFBcUIsQ0FBQytCLEdBQUQsRUFBTUwsSUFBTixFQUFZO0FBQy9CLFFBQUlLLEdBQUosRUFBUztBQUNQLFdBQUtDLFFBQUwsQ0FBY0QsR0FBZDtBQUVBLFlBQU1FLFdBQVcsR0FBRyxLQUFLaEQsY0FBTCxFQUFwQjs7QUFFQSxVQUFJZ0QsV0FBSixFQUFpQjtBQUNmLGFBQUtsQyxVQUFMLENBQWdCa0MsV0FBaEIsRUFBNkIsS0FBS2pDLHFCQUFMLENBQTJCM0csSUFBM0IsQ0FBZ0MsSUFBaEMsQ0FBN0I7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLNkksZUFBTCxDQUFxQlYsSUFBckIsQ0FDRSxJQURGLEVBRUUsS0FBSzFCLGFBRlAsRUFHRSxJQUFJRixLQUFKLENBQVUscUJBQVYsQ0FIRjtBQUtEO0FBQ0YsS0FkRCxNQWNPO0FBQ0wsV0FBS3NDLGVBQUwsQ0FBcUJWLElBQXJCLENBQTBCLElBQTFCLEVBQWdDLEtBQUszQixnQkFBckMsRUFBdUQ2QixJQUF2RDtBQUNEO0FBQ0Y7O0FBRUR2Qix1QkFBcUIsR0FBRztBQUN0QixVQUFNZ0MsR0FBRyxHQUFHLEtBQUtqSixPQUFMLENBQWFrRyxRQUFiLENBQXNCLEtBQUtKLG1CQUEzQixDQUFaOztBQUVBLFFBQUksT0FBT21ELEdBQVAsSUFBYyxRQUFsQixFQUE0QjtBQUMxQixhQUFPO0FBQUMvRixZQUFJLEVBQUUrRjtBQUFQLE9BQVA7QUFDRCxLQUZELE1BRU8sSUFBSSxPQUFPQSxHQUFQLElBQWMsVUFBbEIsRUFBOEI7QUFDbkMsYUFBT0EsR0FBRyxFQUFWO0FBQ0QsS0FGTSxNQUVELElBQUl6Qyw0REFBYSxDQUFDeUMsR0FBRCxDQUFqQixFQUF3QjtBQUM1QixhQUFPQSxHQUFQO0FBQ0QsS0FGSyxNQUVDO0FBQ0wsYUFBTyxFQUFQO0FBQ0Q7QUFDRixHQXpMd0MsQ0EyTHpDOzs7QUFDQUQsaUJBQWUsQ0FBQ0UsRUFBRCxFQUFLVixJQUFMLEVBQVc7QUFDeEIsU0FBSzFDLG1CQUFMLEdBQTJCLENBQUMsQ0FBNUI7QUFFQW9ELE1BQUUsSUFBSUEsRUFBRSxDQUFDVixJQUFELENBQVI7QUFDRDs7QUFFRE0sVUFBUSxDQUFDRCxHQUFELEVBQU07QUFDWjdFLFdBQU8sQ0FBQ21GLElBQVIsQ0FDRyxlQUFjLEtBQUtyRCxtQkFBb0IsTUFBSyxLQUFLRyxlQUFMLENBQXFCLEtBQUtILG1CQUExQixFQUErQ29CLEdBQUksc0NBRGxHLEVBRUcyQixHQUZIO0FBSUQ7O0FBdk13QyxDOzs7Ozs7Ozs7Ozs7QUNkM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFJQTtBQVVlLE1BQU03RyxLQUFOLFNBQW9CbkMsNkNBQXBCLENBQXlCO0FBQ3RDQyxhQUFXLENBQUVFLE9BQUYsRUFBV3NGLGNBQVgsRUFBNEI7QUFDckMsVUFBT3RGLE9BQVA7QUFDQSxTQUFLc0YsY0FBTCxHQUFzQkEsY0FBdEI7QUFFQSxTQUFLOEQsWUFBTCxHQUFvQixFQUFwQjtBQUNBLFNBQUtDLGFBQUwsR0FBcUIsQ0FBQyxDQUFFLFlBQVc7QUFDakMsWUFBTUMsRUFBRSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDtBQUNBLFlBQU1DLEtBQUssR0FBRztBQUNaQyxTQUFDLEVBQUUsZUFEUztBQUVaQyxVQUFFLEVBQUUsZ0JBRlE7QUFHWkMsV0FBRyxFQUFFLGlCQUhPO0FBSVpDLFlBQUksRUFBRSxlQUpNO0FBS1pDLGVBQU8sRUFBRTtBQUxHLE9BQWQ7O0FBUUEsV0FBSyxJQUFJQyxNQUFULElBQW1CTixLQUFuQixFQUEwQjtBQUN4QixZQUNFQSxLQUFLLENBQUNPLGNBQU4sQ0FBcUJELE1BQXJCLEtBQ0EsT0FBT1QsRUFBRSxDQUFDVyxLQUFILENBQVNGLE1BQU0sR0FBRyxXQUFsQixDQUFQLEtBQTBDLFdBRjVDLEVBR0U7QUFDQSxpQkFBT04sS0FBSyxDQUFDTSxNQUFELENBQVo7QUFDRDtBQUNGOztBQUNELGFBQU8sRUFBUDtBQUNELEtBbkJzQixFQUF2QixDQUxxQyxDQTJCckM7O0FBQ0EsUUFBSUcsV0FBVyxHQUFHLEtBQUtsSyxPQUFMLENBQWFOLE1BQWIsQ0FDZnlILE9BRGUsQ0FDUCxhQURPLEVBQ1EsS0FBS2dELGVBQUwsR0FBdUJDLElBQXZCLENBQTRCLEdBQTVCLENBRFIsRUFFZmpELE9BRmUsQ0FFUCxjQUZPLEVBRVMsS0FBS2tELG1CQUFMLEVBRlQsQ0FBbEIsQ0E1QnFDLENBaUNyQzs7QUFDQSxVQUFNQyxVQUFVLEdBQUcsS0FBS3RLLE9BQUwsQ0FBYXVLLFlBQWhDOztBQUNBLFFBQUksT0FBT0QsVUFBUCxJQUFxQixRQUFyQixJQUFpQ0EsVUFBVSxDQUFDbkosTUFBaEQsRUFBeUQ7QUFDdkQrSSxpQkFBVyxHQUFHSSxVQUFkO0FBQ0QsS0FyQ29DLENBdUNyQztBQUNBOzs7QUFFQSxRQUFJLEtBQUt0SyxPQUFMLENBQWF3SyxNQUFqQixFQUF5QjtBQUN2QjtBQUNBLFlBQU1DLE9BQU8sR0FBRyxLQUFLQyxZQUFMLENBQW1CLDBCQUF5QlIsV0FBWSxRQUF4RCxDQUFoQjtBQUVBTyxhQUFPLENBQUNSLEtBQVIsQ0FBY1UsT0FBZCxHQUF3QixFQUF4QixDQUp1QixDQUlJOztBQUMzQixXQUFLQyxPQUFMLEdBQWVILE9BQU8sQ0FBQ0ksVUFBdkIsQ0FMdUIsQ0FLVzs7QUFDbEMsV0FBS0QsT0FBTCxDQUFhWCxLQUFiLENBQW1CVSxPQUFuQixHQUE2QixNQUE3QjtBQUNBLFdBQUtDLE9BQUwsQ0FBYUUsU0FBYixDQUF1QkMsR0FBdkIsQ0FBMkIsY0FBM0I7QUFDRCxLQVJELE1BUU87QUFDTCxXQUFLSCxPQUFMLEdBQWUsS0FBS0YsWUFBTCxDQUFrQlIsV0FBbEIsQ0FBZjtBQUNEOztBQUVELFNBQUtjLGdCQUFMO0FBQ0EsU0FBS0MsaUJBQUw7QUFDRDs7QUFFRDFJLE1BQUksR0FBRztBQUNMLFFBQUksQ0FBQyxLQUFLcUksT0FBVixFQUFtQjs7QUFFbkIsUUFBSSxDQUFDLEtBQUt2SSxNQUFMLEVBQUwsRUFBb0I7QUFDbEIsVUFBSSxLQUFLZ0gsYUFBVCxFQUF3QjtBQUN0QixhQUFLNkIsTUFBTDtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtOLE9BQUwsQ0FBYVgsS0FBYixDQUFtQlUsT0FBbkIsR0FBNkIsRUFBN0I7QUFDRDs7QUFFRCxVQUFJLEtBQUszSyxPQUFMLENBQWE2RSxTQUFqQixFQUE0QjtBQUMxQixhQUFLckMsa0JBQUw7QUFDRDs7QUFDRCxXQUFLcEMsSUFBTCxDQUFXLGFBQVg7QUFDRDs7QUFFRCxXQUFPLElBQVA7QUFDRDs7QUFFRGtDLE9BQUssQ0FBRTZJLFVBQUYsRUFBZTtBQUNsQixRQUFJLENBQUMsS0FBS1AsT0FBVixFQUFtQjs7QUFFbkIsUUFBSSxLQUFLdkksTUFBTCxFQUFKLEVBQW1CO0FBQ2pCLFVBQUksS0FBS2dILGFBQVQsRUFBd0I7QUFDdEIsYUFBSytCLE9BQUw7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLUixPQUFMLENBQWFYLEtBQWIsQ0FBbUJVLE9BQW5CLEdBQTZCLE1BQTdCO0FBQ0Q7O0FBRUQsVUFBSVEsVUFBVSxJQUFJLEtBQUtuTCxPQUFMLENBQWE2RSxTQUEvQixFQUEwQztBQUN4QyxhQUFLckMsa0JBQUwsQ0FBd0IsSUFBeEI7QUFDRDs7QUFDRCxXQUFLcEMsSUFBTCxDQUFXLGFBQVg7QUFDRDs7QUFFRCxXQUFPLElBQVA7QUFDRDs7QUFFRDhLLFFBQU0sR0FBRztBQUNQLFVBQU01QixFQUFFLEdBQUcsS0FBS3NCLE9BQWhCO0FBRUEsUUFBSSxDQUFDLEtBQUt2QixhQUFOLElBQXVCLENBQUNDLEVBQTVCLEVBQWdDLE9BSHpCLENBS1A7QUFDQTtBQUNBOztBQUNBLFFBQUksS0FBSytCLGVBQVQsRUFBMEI7QUFDeEIsV0FBS0MsWUFBTCxDQUFrQmhDLEVBQWxCO0FBQ0Q7O0FBRUQsUUFBSUEsRUFBRSxDQUFDd0IsU0FBSCxDQUFhUyxRQUFiLENBQXNCLGNBQXRCLENBQUosRUFBMkM7QUFDekNqQyxRQUFFLENBQUNXLEtBQUgsQ0FBU1UsT0FBVCxHQUFtQixFQUFuQjs7QUFFQSxVQUFJLEtBQUszSyxPQUFMLENBQWF3SyxNQUFqQixFQUF5QjtBQUN2QixhQUFLSSxPQUFMLENBQWFZLFVBQWIsQ0FBd0J2QixLQUF4QixDQUE4QndCLFNBQTlCLEdBQTBDLEtBQUtiLE9BQUwsQ0FBYWMsWUFBYixHQUE0QixJQUF0RTtBQUNEOztBQUVELFlBQU1DLGFBQWEsR0FBRyxFQUF0QixDQVB5QyxDQU9oQjtBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFdBQUtDLGNBQUwsR0FBc0J4SyxVQUFVLENBQzlCLE1BQU0sS0FBS3lLLFdBQUwsQ0FBaUJ2QyxFQUFqQixDQUR3QixFQUU5QnFDLGFBRjhCLENBQWhDO0FBSUQ7QUFDRjtBQUVEOzs7Ozs7QUFJQUUsYUFBVyxDQUFFakIsT0FBRixFQUFZO0FBQ3JCLFNBQUtnQixjQUFMLEdBQXNCLElBQXRCO0FBQ0FoQixXQUFPLENBQUNFLFNBQVIsQ0FBa0JnQixNQUFsQixDQUF5QixjQUF6QjtBQUNEOztBQUVEVixTQUFPLEdBQUc7QUFDUixRQUFJLENBQUMsS0FBSy9CLGFBQU4sSUFBdUIsQ0FBQyxLQUFLdUIsT0FBakMsRUFBMEM7O0FBRTFDLFFBQUksS0FBS2dCLGNBQVQsRUFBeUI7QUFDdkJHLGtCQUFZLENBQUMsS0FBS0gsY0FBTixDQUFaO0FBQ0EsV0FBS0MsV0FBTCxDQUFpQixLQUFLakIsT0FBdEI7QUFDRDs7QUFFRCxRQUFJLENBQUMsS0FBS0EsT0FBTCxDQUFhRSxTQUFiLENBQXVCUyxRQUF2QixDQUFnQyxjQUFoQyxDQUFMLEVBQXNEO0FBQ3BELFVBQUksS0FBS3ZMLE9BQUwsQ0FBYXdLLE1BQWpCLEVBQXlCO0FBQ3ZCLGFBQUtJLE9BQUwsQ0FBYVksVUFBYixDQUF3QnZCLEtBQXhCLENBQThCd0IsU0FBOUIsR0FBMEMsRUFBMUM7QUFDRDs7QUFFRCxXQUFLSixlQUFMLEdBQXVCLE1BQU0sS0FBS0MsWUFBTCxDQUFrQixLQUFLVixPQUF2QixDQUE3Qjs7QUFDQSxXQUFLQSxPQUFMLENBQWFvQixnQkFBYixDQUE4QixLQUFLQyxhQUFuQyxFQUFrRCxLQUFLWixlQUF2RDtBQUVBLFdBQUtULE9BQUwsQ0FBYUUsU0FBYixDQUF1QkMsR0FBdkIsQ0FBMkIsY0FBM0I7QUFDRDtBQUNGOztBQUVETyxjQUFZLENBQUNoQyxFQUFELEVBQUs7QUFDZkEsTUFBRSxDQUFDVyxLQUFILENBQVNVLE9BQVQsR0FBbUIsTUFBbkIsQ0FEZSxDQUNXOztBQUMxQnJCLE1BQUUsQ0FBQzRDLG1CQUFILENBQXVCLEtBQUtELGFBQTVCLEVBQTJDLEtBQUtaLGVBQWhEO0FBQ0EsU0FBS0EsZUFBTCxHQUF1QixJQUF2QjtBQUNEOztBQUVEaEosUUFBTSxHQUFHO0FBQ1AsV0FDRSxLQUFLdUksT0FBTCxJQUNBLEtBQUtBLE9BQUwsQ0FBYVgsS0FBYixDQUFtQlUsT0FBbkIsS0FBK0IsRUFEL0IsS0FFQyxLQUFLdEIsYUFBTCxHQUFxQixDQUFDLEtBQUt1QixPQUFMLENBQWFFLFNBQWIsQ0FBdUJTLFFBQXZCLENBQWdDLGNBQWhDLENBQXRCLEdBQXdFLElBRnpFLENBREY7QUFLRDs7QUFFRC9JLG9CQUFrQixDQUFDMkosSUFBRCxFQUFPO0FBQ3ZCLFFBQUksS0FBS0MsU0FBVCxFQUFvQixLQUFLQSxTQUFMLENBQWVuQyxLQUFmLENBQXFCVSxPQUFyQixHQUErQndCLElBQUksR0FBRyxFQUFILEdBQVEsTUFBM0M7QUFDckIsR0EvS3FDLENBa0x0Qzs7O0FBQ0FFLG9CQUFrQixHQUFHO0FBQ25CLFdBQU8sS0FBS3JNLE9BQUwsQ0FBYXNNLFFBQWIsQ0FBc0JDLEtBQXRCLENBQTZCLEdBQTdCLEVBQW1DOUwsR0FBbkMsQ0FBd0MrTCxHQUFHLElBQUksUUFBTUEsR0FBckQsQ0FBUDtBQUNEOztBQUVEckMsaUJBQWUsR0FBRztBQUNoQixVQUFNc0MsSUFBSSxHQUFHLEtBQUt6TSxPQUFsQjtBQUNBLFFBQUkwTSxhQUFhLEdBQ2ZELElBQUksQ0FBQ0gsUUFBTCxLQUFrQixLQUFsQixJQUEyQkcsSUFBSSxDQUFDSCxRQUFMLEtBQWtCLFFBQTdDLEdBQ0ksUUFESixHQUVJLFVBSE47O0FBS0EsUUFBSUssdURBQVEsTUFBTUYsSUFBSSxDQUFDRyxnQkFBdkIsRUFBeUM7QUFDdkNGLG1CQUFhLEdBQUcsVUFBaEI7QUFDRDs7QUFFRCxVQUFNRyxPQUFPLEdBQUcsQ0FDZCxRQUFRSCxhQURNLEVBQ1M7QUFDdkIsaUJBQWFELElBQUksQ0FBQ0ssSUFGSixFQUVVO0FBQ3hCLGtCQUFjTCxJQUFJLENBQUNNLEtBSEwsQ0FBaEI7O0FBTUEsUUFBSU4sSUFBSSxDQUFDakMsTUFBVCxFQUFpQjtBQUNmcUMsYUFBTyxDQUFDRyxJQUFSLENBQWEsV0FBYjtBQUNEOztBQUVESCxXQUFPLENBQUNHLElBQVIsQ0FBYUMsS0FBYixDQUFtQkosT0FBbkIsRUFBNEIsS0FBS1Isa0JBQUwsRUFBNUIsRUFyQmdCLENBdUJoQjs7QUFDQSxTQUFLYSxtQkFBTCxDQUF5QixLQUFLbE4sT0FBTCxDQUFhbU4sT0FBdEMsRUF4QmdCLENBMEJoQjs7QUFDQSxRQUFJLEtBQUtDLG1CQUFULEVBQThCO0FBQzVCUCxhQUFPLENBQUNHLElBQVIsQ0FBYSxLQUFLSSxtQkFBbEI7QUFDRDs7QUFFRCxXQUFPUCxPQUFQO0FBQ0Q7O0FBRURRLHdCQUFzQixHQUFHO0FBQ3ZCLFVBQU1aLElBQUksR0FBRyxLQUFLek0sT0FBbEI7QUFFQSxVQUFNNk0sT0FBTyxHQUFHLEVBQWhCO0FBQ0FBLFdBQU8sQ0FBQ0csSUFBUixDQUFhLFFBQU0sS0FBS2hOLE9BQUwsQ0FBYXNOLGNBQWhDOztBQUNBLFFBQUksS0FBS3ROLE9BQUwsQ0FBYXVOLGdCQUFqQixFQUFtQztBQUNqQ1YsYUFBTyxDQUFDRyxJQUFSLENBQWEsWUFBYjtBQUNEOztBQUNELFFBQUksS0FBS0ksbUJBQVQsRUFBOEI7QUFDNUJQLGFBQU8sQ0FBQ0csSUFBUixDQUFhLEtBQUtJLG1CQUFsQjtBQUNEOztBQUNELFFBQUksS0FBS3BOLE9BQUwsQ0FBYStNLEtBQWpCLEVBQXdCO0FBQ3RCRixhQUFPLENBQUNHLElBQVIsQ0FBYSxjQUFZLEtBQUtoTixPQUFMLENBQWErTSxLQUF0QztBQUNEOztBQUVELFdBQU9GLE9BQVA7QUFDRDs7QUFFRHhDLHFCQUFtQixHQUFHO0FBQ3BCLFVBQU1tRCxZQUFZLEdBQUcsRUFBckI7QUFDQSxVQUFNZixJQUFJLEdBQUcsS0FBS3pNLE9BQWxCLENBRm9CLENBSXBCOztBQUNBLFFBQUksQ0FBQ3lNLElBQUksQ0FBQ2dCLFFBQVYsRUFBb0I7QUFDbEJoQixVQUFJLENBQUNpQixRQUFMLENBQWNDLElBQWQsR0FBcUIsRUFBckI7QUFDQWxCLFVBQUksQ0FBQ2lCLFFBQUwsQ0FBY0UsV0FBZCxHQUE0Qm5CLElBQUksQ0FBQ2lCLFFBQUwsQ0FBY0csT0FBMUM7QUFDRDs7QUFFRCxRQUFJbE4sVUFBVSxHQUFHSixNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLUixPQUFMLENBQWFXLFVBQXpCLEVBQXFDRixHQUFyQyxDQUF5Q3lDLElBQUksSUFBSTtBQUNoRSxZQUFNNEssUUFBUSxHQUFHckIsSUFBSSxDQUFDOUwsVUFBTCxDQUFnQnVDLElBQWhCLENBQWpCO0FBQ0EsVUFBSTRLLFFBQVEsQ0FBQ0MsUUFBVCxLQUFzQjNKLFNBQXRCLElBQW1DMEosUUFBUSxDQUFDQyxRQUFoRCxFQUEwRDtBQUMxRCxZQUFNQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0csV0FBVCxJQUF3QkgsUUFBUSxDQUFDbE4sTUFBVCxLQUFvQnhCLHNEQUE1QyxHQUEwRCxrQkFBMUQsR0FBK0UsRUFBL0Y7QUFDQSxZQUFNMk8sUUFBUSxHQUFHRCxRQUFRLENBQUNJLFNBQVQsR0FBcUIsV0FBckIsR0FBbUMsRUFBcEQ7QUFDQSxhQUFPLENBQUN6QixJQUFJLENBQUNpQixRQUFMLENBQWNoTixRQUFkLENBQXVCeUcsT0FBdkIsQ0FBK0IsV0FBL0IsRUFBNEMyRyxRQUFRLENBQUNLLEtBQXJELEVBQ0hoSCxPQURHLENBQ0ssY0FETCxFQUNxQmpFLElBRHJCLEVBRUhpRSxPQUZHLENBRUssYUFGTCxFQUVvQjZHLE9BRnBCLEVBR0g3RyxPQUhHLENBR0ssY0FITCxFQUdxQjRHLFFBSHJCLEVBSUg1RyxPQUpHLENBSUssYUFKTCxFQUlvQjJHLFFBQVEsQ0FBQ00sT0FKN0IsQ0FBRCxDQUFQO0FBS0QsS0FWZ0IsRUFVZGhFLElBVmMsQ0FVVCxFQVZTLENBQWpCO0FBWUFxQyxRQUFJLENBQUNpQixRQUFMLENBQWMvTSxVQUFkLEdBQTJCOEwsSUFBSSxDQUFDaUIsUUFBTCxDQUFjL00sVUFBZCxDQUF5QndHLE9BQXpCLENBQWlDLGdCQUFqQyxFQUFtRHhHLFVBQW5ELENBQTNCO0FBRUE4TCxRQUFJLENBQUNpQixRQUFMLENBQWNXLE9BQWQsR0FBd0I1QixJQUFJLENBQUNpQixRQUFMLENBQWNXLE9BQWQsQ0FBc0JsSCxPQUF0QixDQUE4QixXQUE5QixFQUEyQ3NGLElBQUksQ0FBQzZCLE9BQUwsQ0FBYXhMLElBQXhELENBQXhCO0FBQ0EySixRQUFJLENBQUNpQixRQUFMLENBQWNhLFlBQWQsR0FBNkI5QixJQUFJLENBQUNpQixRQUFMLENBQWNhLFlBQWQsQ0FBMkJwSCxPQUEzQixDQUFtQyxXQUFuQyxFQUFnRHNGLElBQUksQ0FBQzZCLE9BQUwsQ0FBYUUsU0FBN0QsQ0FBN0I7QUFHQWpPLFVBQU0sQ0FBQ0MsSUFBUCxDQUFZaU0sSUFBSSxDQUFDaUIsUUFBakIsRUFBMkJlLE9BQTNCLENBQW9DQyxJQUFJLElBQUk7QUFDMUNsQixrQkFBWSxDQUFDa0IsSUFBRCxDQUFaLEdBQXFCQyxnRUFBaUIsQ0FDcENsQyxJQUFJLENBQUNpQixRQUFMLENBQWNnQixJQUFkLENBRG9DLEVBRXBDeEwsSUFBSSxJQUFJO0FBQ04sY0FBTTBMLEdBQUcsR0FBR25DLElBQUksQ0FBQzZCLE9BQUwsQ0FBYXBMLElBQWIsQ0FBWjtBQUNBLGVBQU9BLElBQUksSUFBSSxPQUFPMEwsR0FBUCxJQUFjLFFBQXRCLElBQWtDQSxHQUFHLENBQUN6TixNQUF0QyxHQUErQ3lOLEdBQS9DLEdBQXFELEVBQTVEO0FBQ0QsT0FMbUMsQ0FBdEM7QUFPRCxLQVJELEVBNUJvQixDQXNDcEI7O0FBQ0EsUUFBSUMsY0FBYyxHQUFHcEMsSUFBSSxDQUFDcUMsVUFBTCxDQUFnQnJDLElBQUksQ0FBQ0ssSUFBckIsQ0FBckI7O0FBQ0EsUUFBSSxDQUFDK0IsY0FBTCxFQUFxQjtBQUNuQkEsb0JBQWMsR0FBR3BDLElBQUksQ0FBQ3FDLFVBQUwsQ0FBZ0JDLElBQWpDO0FBQ0QsS0ExQ21CLENBNENwQjs7O0FBQ0F2QixnQkFBWSxDQUFDc0IsVUFBYixHQUEwQkgsZ0VBQWlCLENBQUVFLGNBQUYsRUFBa0IzTCxJQUFJLElBQUlzSyxZQUFZLENBQUN0SyxJQUFELENBQXRDLENBQTNDLENBN0NvQixDQStDcEI7O0FBQ0EsUUFBSThMLE1BQU0sR0FBR3ZDLElBQUksQ0FBQ3dDLE9BQUwsQ0FBYXhDLElBQUksQ0FBQ3VDLE1BQWxCLENBQWI7O0FBQ0EsUUFBSSxDQUFDQSxNQUFMLEVBQWE7QUFDWEEsWUFBTSxHQUFHdkMsSUFBSSxDQUFDd0MsT0FBTCxDQUFhQyxLQUF0QjtBQUNEOztBQUVELFdBQU9QLGdFQUFpQixDQUFDSyxNQUFELEVBQVNHLEtBQUssSUFBRzNCLFlBQVksQ0FBQzJCLEtBQUQsQ0FBN0IsQ0FBeEI7QUFDRDs7QUFFRHpFLGNBQVksQ0FBQzBFLE1BQUQsRUFBUztBQUNuQixVQUFNM0MsSUFBSSxHQUFHLEtBQUt6TSxPQUFsQjtBQUNBLFVBQU1xUCxHQUFHLEdBQUc5RixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBLFVBQU04RixJQUFJLEdBQ1I3QyxJQUFJLENBQUM4QyxTQUFMLElBQWtCOUMsSUFBSSxDQUFDOEMsU0FBTCxDQUFlQyxRQUFmLEtBQTRCLENBQTlDLEdBQ0kvQyxJQUFJLENBQUM4QyxTQURULEdBRUloRyxRQUFRLENBQUNrRyxJQUhmO0FBS0FKLE9BQUcsQ0FBQ0ssU0FBSixHQUFnQk4sTUFBaEI7QUFFQSxVQUFNOUYsRUFBRSxHQUFHK0YsR0FBRyxDQUFDTSxRQUFKLENBQWEsQ0FBYixDQUFYO0FBRUFyRyxNQUFFLENBQUNXLEtBQUgsQ0FBU1UsT0FBVCxHQUFtQixNQUFuQjs7QUFFQSxRQUFJckIsRUFBRSxDQUFDd0IsU0FBSCxDQUFhUyxRQUFiLENBQXNCLFdBQXRCLEtBQXNDLEtBQUtsQyxhQUEvQyxFQUE4RDtBQUM1REMsUUFBRSxDQUFDd0IsU0FBSCxDQUFhQyxHQUFiLENBQWlCLGNBQWpCO0FBQ0Q7O0FBRUR6QixNQUFFLENBQUMwQyxnQkFBSCxDQUFvQixPQUFwQixFQUE2QjRELEtBQUssSUFBSSxLQUFLQyxpQkFBTCxDQUF3QkQsS0FBeEIsQ0FBdEM7QUFDQXRHLE1BQUUsQ0FBQ3dHLGdCQUFILENBQXFCLDJCQUFyQixFQUFtRHJCLE9BQW5ELENBQTREc0IsUUFBUSxJQUFJO0FBQ3RFQSxjQUFRLENBQUMvRCxnQkFBVCxDQUEyQixRQUEzQixFQUFxQyxNQUFNO0FBQ3pDLGFBQUtnRSxjQUFMLENBQXFCRCxRQUFRLENBQUM3TSxJQUE5QixJQUF1QzZNLFFBQVEsQ0FBQy9CLE9BQVQsR0FBbUIsT0FBbkIsR0FBNkIsTUFBcEU7QUFDRCxPQUZEO0FBR0ErQixjQUFRLENBQUMvRCxnQkFBVCxDQUEyQixPQUEzQixFQUFvQzRELEtBQUssSUFBS0EsS0FBSyxDQUFDSyxlQUFOLEVBQTlDO0FBQ0QsS0FMRDtBQU1BM0csTUFBRSxDQUFDd0csZ0JBQUgsQ0FBb0IsVUFBcEIsRUFBZ0NyQixPQUFoQyxDQUF5Q3lCLFFBQVEsSUFBSTtBQUNuREEsY0FBUSxDQUFDbEUsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsVUFBVzRELEtBQVgsRUFBbUI7QUFDeEQsWUFBSyxTQUFTckcsUUFBUSxDQUFDNEcsYUFBdkIsRUFBd0M7QUFDdEMsZUFBS0MsSUFBTDtBQUNBUixlQUFLLENBQUNTLGNBQU47QUFDRDtBQUNGLE9BTEQ7QUFNRCxLQVBEOztBQVNBLFFBQUk1RCxJQUFJLENBQUM2RCxVQUFULEVBQXFCO0FBQ25CLFVBQUk7QUFDRixZQUFJLENBQUNoQixJQUFJLENBQUN6RSxVQUFWLEVBQXNCO0FBQ3BCeUUsY0FBSSxDQUFDaUIsV0FBTCxDQUFpQmpILEVBQWpCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xnRyxjQUFJLENBQUNrQixZQUFMLENBQWtCbEgsRUFBbEIsRUFBc0JnRyxJQUFJLENBQUN6RSxVQUEzQjtBQUNEO0FBQ0YsT0FORCxDQU1FLE9BQVEzSSxLQUFSLEVBQWdCO0FBQ2hCLGNBQU0sSUFBSXdFLEtBQUosQ0FBVyxnSEFBWCxDQUFOO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPNEMsRUFBUDtBQUNEOztBQUVEdUcsbUJBQWlCLENBQUNELEtBQUQsRUFBUTtBQUN2QjtBQUNBLFVBQU1hLEdBQUcsR0FBR0MsOERBQWUsQ0FBQ2QsS0FBSyxDQUFDZSxNQUFQLEVBQWUsUUFBZixDQUFmLElBQTJDZixLQUFLLENBQUNlLE1BQTdEO0FBQ0EsVUFBTWxFLElBQUksR0FBRyxLQUFLek0sT0FBbEI7O0FBRUEsUUFBSXlRLEdBQUcsQ0FBQ0csT0FBSixDQUFZQyxNQUFaLEtBQXVCek0sU0FBM0IsRUFBc0M7QUFDcEMsVUFBSXFNLEdBQUcsQ0FBQ0csT0FBSixDQUFZQyxNQUFaLEtBQXVCLGlCQUEzQixFQUE4QztBQUM1QyxhQUFLQyxRQUFMO0FBQ0Q7O0FBQ0QsVUFBSUwsR0FBRyxDQUFDRyxPQUFKLENBQVlDLE1BQVosS0FBdUIsTUFBdkIsSUFBaUNKLEdBQUcsQ0FBQ0csT0FBSixDQUFZQyxNQUFaLEtBQXVCLGlCQUE1RCxFQUErRTtBQUM3RSxhQUFLdkwsY0FBTCxDQUFvQnhDLElBQXBCO0FBQ0EsYUFBS1IsS0FBTCxDQUFXLElBQVg7QUFDQTtBQUNEOztBQUNELFVBQUltTyxHQUFHLENBQUNHLE9BQUosQ0FBWUMsTUFBWixLQUF1QixPQUEzQixFQUFvQztBQUNsQyxhQUFLdkwsY0FBTCxDQUFvQnZDLFdBQXBCLENBQWdDMUQsd0RBQWhDO0FBQ0EsYUFBS2lELEtBQUwsQ0FBVyxJQUFYO0FBQ0E7QUFDRDs7QUFDRCxVQUFJbU8sR0FBRyxDQUFDRyxPQUFKLENBQVlDLE1BQVosS0FBdUIsUUFBM0IsRUFBcUM7QUFDbkMsYUFBS3ZMLGNBQUwsQ0FBb0IzQyxZQUFwQjtBQUNEO0FBQ0Y7QUFFRjtBQUVEOzs7OztBQUdBbU8sVUFBUSxHQUFHO0FBQ1QsU0FBS2xHLE9BQUwsQ0FBYWtGLGdCQUFiLENBQThCLHFDQUE5QixFQUFxRXJCLE9BQXJFLENBQTZFLENBQUNzQixRQUFELEVBQVV4TCxHQUFWLEtBQWtCO0FBQzdGd0wsY0FBUSxDQUFDL0IsT0FBVCxHQUFtQixJQUFuQjtBQUNELEtBRkQ7QUFHRDs7QUFFRGpLLG1CQUFpQixHQUFHO0FBQ2xCLFFBQUlnTixNQUFNLEdBQUcsRUFBYjtBQUNBLFNBQUtuRyxPQUFMLENBQWFrRixnQkFBYixDQUE4QixxQ0FBOUIsRUFBcUVyQixPQUFyRSxDQUE2RSxDQUFDc0IsUUFBRCxFQUFVeEwsR0FBVixLQUFrQjtBQUM3RndNLFlBQU0sQ0FBQ2hCLFFBQVEsQ0FBQ2lCLFVBQVQsQ0FBb0IsTUFBcEIsRUFBNEJDLEtBQTdCLENBQU4sR0FBNENsQixRQUFRLENBQUMvQixPQUFULEtBQXFCLEtBQWpFO0FBQ0QsS0FGRDtBQUdBLFdBQU8rQyxNQUFQO0FBQ0Q7O0FBR0Q3RCxxQkFBbUIsQ0FBQ0MsT0FBRCxFQUFVO0FBQzNCLFVBQU0rRCxPQUFPLEdBQUdDLG1EQUFJLENBQUN4SixJQUFJLENBQUNDLFNBQUwsQ0FBZXVGLE9BQWYsQ0FBRCxDQUFwQjtBQUNBLFVBQU1pRSxRQUFRLEdBQUcsdUJBQXVCRixPQUF4QztBQUNBLFVBQU1HLE9BQU8sR0FBRzdLLDREQUFhLENBQUMyRyxPQUFELENBQTdCO0FBRUEsU0FBS0MsbUJBQUwsR0FBMkJpRSxPQUFPLEdBQUdELFFBQUgsR0FBYyxJQUFoRDs7QUFFQSxRQUFJQyxPQUFKLEVBQWE7QUFDWEMsd0VBQW1CLENBQUNKLE9BQUQsRUFBVS9ELE9BQVYsRUFBbUIsTUFBTWlFLFFBQXpCLENBQW5CO0FBQ0Q7O0FBQ0QsV0FBT0MsT0FBUDtBQUNEOztBQUdERSxjQUFZLENBQUUzQixLQUFGLEVBQVU7QUFDcEIsVUFBTXZNLElBQUksR0FBR3VNLEtBQUssQ0FBQzRCLFlBQU4sR0FBcUI1QixLQUFLLENBQUM0QixZQUFOLEVBQXJCLEdBQTZDLFVBQVdDLEdBQVgsRUFBZ0I3RyxPQUFoQixFQUEwQjtBQUNsRixhQUFRQSxPQUFSLEVBQWtCO0FBQ2hCNkcsV0FBRyxDQUFDekUsSUFBSixDQUFVcEMsT0FBVjtBQUNBQSxlQUFPLEdBQUdBLE9BQU8sQ0FBQ1ksVUFBbEI7QUFDRDs7QUFDRCxhQUFPaUcsR0FBUDtBQUNELEtBTndELENBTXRELEVBTnNELEVBTW5EN0IsS0FBSyxDQUFDZSxNQU42QyxDQUF6RDs7QUFPQSxRQUFLLENBQUN0TixJQUFOLEVBQWE7QUFDWFcsYUFBTyxDQUFDbUYsSUFBUixDQUFjLDZEQUFkO0FBQ0E7QUFDRDs7QUFDRCxXQUFPOUYsSUFBUDtBQUNEOztBQUVEMkgsa0JBQWdCLEdBQUc7QUFDakIsVUFBTTtBQUNKL0osYUFESTtBQUVKNEUsc0JBQWdCLEVBQUk2TCxLQUZoQjtBQUdKOUwscUJBQWUsRUFBSStMLFdBSGY7QUFJSkMsd0JBSkk7QUFLSkMsMEJBTEk7QUFNSkM7QUFOSSxRQU9GLEtBQUs5UixPQVBUOztBQVNBLFFBQUtpQixPQUFMLEVBQWU7QUFDYixVQUFJLE9BQU95USxLQUFQLElBQWdCLFFBQWhCLElBQTRCQSxLQUFLLElBQUksQ0FBekMsRUFBNEM7QUFDMUMsYUFBS0ssY0FBTCxHQUFzQjNRLFVBQVUsQ0FBRSxNQUFLO0FBQ3JDLGVBQUsyQixXQUFMLENBQWlCMUQsd0RBQWpCO0FBQ0EsZUFBS2lELEtBQUwsQ0FBVyxJQUFYO0FBQ0QsU0FIK0IsRUFHN0IwUCxJQUFJLENBQUNDLEtBQUwsQ0FBV1AsS0FBWCxDQUg2QixDQUFoQztBQUlELE9BTEQsTUFLTyxJQUFJLE9BQU9DLFdBQVAsSUFBc0IsUUFBdEIsSUFBa0NBLFdBQVcsSUFBSSxDQUFyRCxFQUF3RDtBQUM3RCxhQUFLTyxjQUFMLEdBQXNCLE1BQU07QUFDMUIsY0FBSXhTLE1BQU0sQ0FBQ3lTLFdBQVAsR0FBcUJILElBQUksQ0FBQ0MsS0FBTCxDQUFXTixXQUFYLENBQXpCLEVBQWtEO0FBQ2hELGlCQUFLNU8sV0FBTCxDQUFpQjFELHdEQUFqQjtBQUNBLGlCQUFLaUQsS0FBTCxDQUFXLElBQVg7QUFFQTVDLGtCQUFNLENBQUN3TSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQyxLQUFLZ0csY0FBMUMsRUFBMEQ7QUFBRUUscUJBQU8sRUFBRTtBQUFYLGFBQTFEO0FBQ0EsaUJBQUtGLGNBQUwsR0FBc0IsSUFBdEI7QUFDRDtBQUNGLFNBUkQ7O0FBU0F4UyxjQUFNLENBQUNzTSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLa0csY0FBdkMsRUFBdUQ7QUFBRUUsaUJBQU8sRUFBRTtBQUFYLFNBQXZEO0FBQ0QsT0FYTSxNQVdBLElBQUlQLG9CQUFKLEVBQTBCO0FBQy9CLGFBQUtRLGFBQUwsR0FBcUJDLEdBQUcsSUFBSTtBQUMxQixjQUFLLENBQUNmLFlBQVksQ0FBRWUsR0FBRixDQUFaLENBQW9CQyxJQUFwQixDQUEwQjNILE9BQU8sSUFDL0IsS0FBSzVLLE9BQUwsQ0FBYXdTLGdCQUFiLENBQThCRCxJQUE5QixDQUFvQ0UsWUFBWSxJQUM5QzdILE9BQU8sQ0FBQ0UsU0FBUixJQUFxQkYsT0FBTyxDQUFDRSxTQUFSLENBQWtCUyxRQUFsQixDQUE0QmtILFlBQTVCLENBRHZCLENBREYsQ0FBTixFQUtFO0FBQ0EsaUJBQUsxUCxXQUFMLENBQWlCMUQsd0RBQWpCO0FBQ0EsaUJBQUtpRCxLQUFMLENBQVcsSUFBWDtBQUVBNUMsa0JBQU0sQ0FBQ3dNLG1CQUFQLENBQTJCLE9BQTNCLEVBQW9DLEtBQUttRyxhQUF6QztBQUNBM1Msa0JBQU0sQ0FBQ3dNLG1CQUFQLENBQTJCLFVBQTNCLEVBQXVDLEtBQUttRyxhQUE1QztBQUNBLGlCQUFLQSxhQUFMLEdBQXFCLElBQXJCO0FBQ0Q7QUFDRixTQWREOztBQWdCQTNTLGNBQU0sQ0FBQ3NNLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLEtBQUtxRyxhQUF0QztBQUNBM1MsY0FBTSxDQUFDc00sZ0JBQVAsQ0FBd0IsVUFBeEIsRUFBb0MsS0FBS3FHLGFBQXpDO0FBQ0QsT0FuQk0sTUFtQkEsSUFBSVQsa0JBQUosRUFBd0I7QUFDN0IsYUFBS2MsV0FBTCxHQUFtQkosR0FBRyxJQUFJO0FBQ3hCLGNBQUtmLFlBQVksQ0FBRWUsR0FBRixDQUFaLENBQW9CQyxJQUFwQixDQUEwQkksSUFBSSxJQUFJLE9BQU9BLElBQUksQ0FBQ0MsT0FBWixLQUF3QixXQUF4QixJQUF1Q0QsSUFBSSxDQUFDQyxPQUFMLEtBQWlCLEdBQTFGLENBQUwsRUFBdUc7QUFDckcsaUJBQUs3UCxXQUFMLENBQWtCMUQsd0RBQWxCO0FBQ0EsaUJBQUtpRCxLQUFMLENBQVksSUFBWjtBQUNBNUMsa0JBQU0sQ0FBQ3dNLG1CQUFQLENBQTJCLE9BQTNCLEVBQW9DLEtBQUt3RyxXQUF6QztBQUNBLGlCQUFLQSxXQUFMLEdBQW1CLElBQW5CO0FBQ0Q7QUFDRixTQVBEOztBQVFBaFQsY0FBTSxDQUFDc00sZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsS0FBSzBHLFdBQXRDO0FBQ0QsT0FWTSxNQVVBLElBQUtaLGlCQUFMLEVBQXlCO0FBQzVCLGFBQUtlLFVBQUwsR0FBa0JqRCxLQUFLLElBQUk7QUFDekIsZ0JBQU07QUFBRWtEO0FBQUYsY0FBY2xELEtBQXBCOztBQUNBLGNBQUtrRCxPQUFPLEtBQUssRUFBakIsRUFBc0I7QUFDcEIsaUJBQUsvUCxXQUFMLENBQWtCM0Qsc0RBQWxCO0FBQ0EsaUJBQUtrRCxLQUFMLENBQVksSUFBWjtBQUNELFdBSEQsTUFHTyxJQUFLd1EsT0FBTyxLQUFLLEVBQWpCLEVBQXFCO0FBQzFCLGlCQUFLL1AsV0FBTCxDQUFrQjFELHdEQUFsQjtBQUNBLGlCQUFLaUQsS0FBTCxDQUFZLElBQVo7QUFDRDtBQUNGLFNBVEQ7O0FBVUE1QyxjQUFNLENBQUNzTSxnQkFBUCxDQUF5QixZQUF6QixFQUF1QyxLQUFLNkcsVUFBNUM7QUFDSDtBQUNGO0FBQ0Y7O0FBRUQ1SCxtQkFBaUIsR0FBRztBQUNsQjtBQUNBLFFBQUksS0FBS2pMLE9BQUwsQ0FBYThNLElBQWIsS0FBc0IsTUFBMUIsRUFBa0MsS0FBSzlNLE9BQUwsQ0FBYTZFLFNBQWIsR0FBeUIsSUFBekIsQ0FGaEIsQ0FHbEI7O0FBQ0EsUUFBSThILHVEQUFRLEVBQVosRUFBZ0IsS0FBSzNNLE9BQUwsQ0FBYXVOLGdCQUFiLEdBQWdDLEtBQWhDOztBQUVoQixRQUFJLEtBQUt2TixPQUFMLENBQWE2RSxTQUFqQixFQUE0QjtBQUMxQixZQUFNZ0ksT0FBTyxHQUFHLEtBQUtRLHNCQUFMLEVBQWhCO0FBRUEsWUFBTWpCLFNBQVMsR0FBRyxLQUFLcE0sT0FBTCxDQUFhb00sU0FBYixDQUNmakYsT0FEZSxDQUNQLGFBRE8sRUFDUTBGLE9BQU8sQ0FBQ3pDLElBQVIsQ0FBYSxHQUFiLENBRFIsRUFFZmpELE9BRmUsQ0FFUCxZQUZPLEVBRU8sS0FBS25ILE9BQUwsQ0FBYXNPLE9BQWIsQ0FBcUJ5RSxNQUY1QixDQUFsQjtBQUlBLFdBQUszRyxTQUFMLEdBQWlCLEtBQUsxQixZQUFMLENBQWtCMEIsU0FBbEIsQ0FBakI7QUFFQSxZQUFNcUUsR0FBRyxHQUFHLEtBQUtyRSxTQUFqQjs7QUFDQSxVQUFJLEtBQUtwTSxPQUFMLENBQWF1TixnQkFBakIsRUFBbUM7QUFDakMsY0FBTXlGLFdBQVcsR0FBR0MsdURBQVEsQ0FBQyxVQUFTWCxHQUFULEVBQWM7QUFDekMsY0FBSVksTUFBTSxHQUFHLEtBQWI7QUFDQSxnQkFBTUMsSUFBSSxHQUFHLEVBQWI7QUFDQSxnQkFBTUMsSUFBSSxHQUFHMVQsTUFBTSxDQUFDMlQsV0FBUCxHQUFxQixFQUFsQzs7QUFFQSxjQUFPNUMsR0FBRyxDQUFDM0YsU0FBSixDQUFjUyxRQUFkLENBQXdCLFFBQXhCLEtBQXNDK0csR0FBRyxDQUFDZ0IsT0FBSixHQUFjSCxJQUF0RCxJQUNHMUMsR0FBRyxDQUFDM0YsU0FBSixDQUFjUyxRQUFkLENBQXdCLFdBQXhCLEtBQXlDK0csR0FBRyxDQUFDZ0IsT0FBSixHQUFjRixJQUQvRCxFQUN3RTtBQUN0RUYsa0JBQU0sR0FBRyxJQUFUO0FBQ0Q7O0FBRUQsY0FBSUEsTUFBTSxJQUFJLENBQUN6QyxHQUFHLENBQUMzRixTQUFKLENBQWNTLFFBQWQsQ0FBd0IsV0FBeEIsQ0FBZixFQUF1RDtBQUNuRGtGLGVBQUcsQ0FBQzNGLFNBQUosQ0FBY0MsR0FBZCxDQUFtQixXQUFuQjtBQUNILFdBRkQsTUFFTyxJQUFLLENBQUNtSSxNQUFELElBQVd6QyxHQUFHLENBQUMzRixTQUFKLENBQWNTLFFBQWQsQ0FBd0IsV0FBeEIsQ0FBaEIsRUFBd0Q7QUFDM0RrRixlQUFHLENBQUMzRixTQUFKLENBQWNnQixNQUFkLENBQXNCLFdBQXRCO0FBQ0g7QUFDRixTQWYyQixFQWV6QixHQWZ5QixDQUE1QjtBQWlCQSxhQUFLa0gsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQXRULGNBQU0sQ0FBQ3NNLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDZ0gsV0FBckM7QUFDRDtBQUNGO0FBQ0Y7O0FBQ0R0USxTQUFPLEdBQUU7QUFDUHNCLFdBQU8sQ0FBQ21GLElBQVIsQ0FBYyxlQUFkOztBQUNBLFFBQUssS0FBS3lCLE9BQVYsRUFBbUI7QUFDakIsV0FBS0EsT0FBTCxDQUFha0IsTUFBYjtBQUNEOztBQUNELFFBQUssS0FBS00sU0FBVixFQUFxQjtBQUNuQixXQUFLQSxTQUFMLENBQWVOLE1BQWY7QUFDRDs7QUFDRCxRQUFLLEtBQUtvRyxjQUFWLEVBQTBCO0FBQ3hCeFMsWUFBTSxDQUFDd00sbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUMsS0FBS2dHLGNBQTFDO0FBQ0Q7O0FBQ0QsUUFBSyxLQUFLRyxhQUFWLEVBQTBCO0FBQ3hCM1MsWUFBTSxDQUFDd00sbUJBQVAsQ0FBMkIsT0FBM0IsRUFBb0MsS0FBS21HLGFBQXpDO0FBQ0EzUyxZQUFNLENBQUN3TSxtQkFBUCxDQUEyQixVQUEzQixFQUF1QyxLQUFLbUcsYUFBNUM7QUFDRDs7QUFDRCxRQUFLLEtBQUtLLFdBQVYsRUFBd0I7QUFDdEJoVCxZQUFNLENBQUN3TSxtQkFBUCxDQUEyQixPQUEzQixFQUFvQyxLQUFLd0csV0FBekM7QUFDRDs7QUFDRCxRQUFLLEtBQUtHLFVBQVYsRUFBdUI7QUFDckJuVCxZQUFNLENBQUNzTSxnQkFBUCxDQUF5QixZQUF6QixFQUF1QyxLQUFLNkcsVUFBNUM7QUFDRDtBQUNGOztBQWppQnFDLEM7Ozs7Ozs7Ozs7OztBQ2pCeEM7QUFBQTtBQUFBOztBQUVBO0FBRWU7QUFDYjtBQUNBNVIsU0FBTyxFQUFFLElBRkk7QUFJYjtBQUNBc08sV0FBUyxFQUFFLElBTEU7QUFPYjtBQUNBaE0sUUFBTSxFQUFFO0FBQ047QUFDQUwsUUFBSSxFQUFFLHNCQUZBO0FBR047QUFDQUcsUUFBSSxFQUFFLEdBSkE7QUFLTjtBQUNBO0FBQ0FELFVBQU0sRUFBRSxXQVBGO0FBUU47QUFDQUQsY0FBVSxFQUFFLEdBVE47QUFVTjtBQUNBRyxVQUFNLEVBQUU7QUFYRixHQVJLO0FBc0JiO0FBQ0FnTCxTQUFPLEVBQUU7QUFDUGlGLFVBQU0sRUFBRyw4QkFERjtBQUVQMUYsV0FBTyxFQUFFLGlGQUZGO0FBR1AyRixXQUFPLEVBQUUsU0FIRjtBQUlQQyxTQUFLLEVBQUksZUFKRjtBQUtQQyxRQUFJLEVBQUssU0FMRjtBQU1QL0YsUUFBSSxFQUFLLFlBTkY7QUFPUGdHLFFBQUksRUFBSywrQkFQRjtBQVFQclIsU0FBSyxFQUFJLFNBUkY7QUFTUHFPLFVBQU0sRUFBRyxRQVRGO0FBVVBvQyxVQUFNLEVBQUcsZUFWRjtBQVdQalEsUUFBSSxFQUFLLE1BWEY7QUFZUDBMLGFBQVMsRUFBRTtBQVpKLEdBdkJJO0FBc0NiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQWQsVUFBUSxFQUFFO0FBQ1I2RixVQUFNLEVBQUUsZ0RBREE7QUFFUjFGLFdBQU8sRUFDTCxxRUFITTtBQUlSRCxlQUFXLEVBQ1QsMk9BTE07QUFNUjRGLFdBQU8sRUFDSixvRkFBbUZuVSxpRUFBYyxtQkFQNUY7QUFRUm9VLFNBQUssRUFDRiw0RUFBMkVyVSwrREFBWSxpQkFUbEY7QUFVUnNVLFFBQUksRUFDRCwwRUFBeUV2VSw4REFBVyxnQkFYL0U7QUFZUndPLFFBQUksRUFDRix1S0FiTTtBQWNSckwsU0FBSyxFQUNILHNHQWZNO0FBZ0JSM0IsY0FBVSxFQUFFLCtDQWhCSjtBQWlCUkQsWUFBUSxFQUFHOzs7Ozs7Y0FqQkg7QUF3QlIyTixXQUFPLEVBQUcsa0ZBeEJGO0FBeUJSRSxnQkFBWSxFQUFHLG9JQXpCUCxDQTBCUjs7QUExQlEsR0EzQ0c7QUF3RWI7QUFDQTtBQUNBO0FBQ0E3TyxRQUFNLEVBQ0osa01BNUVXO0FBOEVia1UsT0FBSyxFQUFFLEVBOUVNO0FBZ0ZiO0FBQ0E7QUFDQXhILFdBQVMsRUFBRSwwRUFsRkU7QUFvRmI7QUFDQTBDLFlBQVUsRUFBRTtBQUNWQyxRQUFJLEVBQVEsOENBREY7QUFFVixjQUFZLG9FQUZGO0FBR1YsZUFBWSxzREFIRjtBQUlWcE8sY0FBVSxFQUFFO0FBSkYsR0FyRkM7QUE0RmI7QUFDQW1NLE1BQUksRUFBRSxNQTdGTztBQTZGQztBQUVkO0FBQ0FtQyxTQUFPLEVBQUU7QUFDUDtBQUNBQyxTQUFLLEVBQVcsK0JBRlQ7QUFHUCxtQkFBZ0Isd0NBSFQ7QUFJUCxvQkFBZ0IsNkNBSlQsQ0FLUDtBQUNBOztBQU5PLEdBaEdJO0FBeUdiO0FBQ0FGLFFBQU0sRUFBRSxPQTFHSztBQTRHYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0ExQyxVQUFRLEVBQUUsUUFqSEc7QUFpSE87QUFFcEI7QUFDQWdCLGdCQUFjLEVBQUUsUUFwSEg7QUFzSGI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FQLE9BQUssRUFBRSxPQTVITTtBQThIYjtBQUNBO0FBQ0F2QyxRQUFNLEVBQUUsS0FoSUs7QUFrSWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBMkMsU0FBTyxFQUFFLElBMUlJO0FBNEliO0FBQ0E7QUFDQXRJLFdBQVMsRUFBRSxLQTlJRTtBQWdKYjtBQUNBMEksa0JBQWdCLEVBQUUsSUFqSkw7QUFtSmI7QUFDQTtBQUNBRSxVQUFRLEVBQUUsSUFySkc7QUF1SmI7QUFDQTdILGlCQUFlLEVBQUUsS0F4Sko7QUEwSmI7QUFDQUMsa0JBQWdCLEVBQUUsS0EzSkw7QUE2SmI7QUFDQWdNLHNCQUFvQixFQUFFLEtBOUpUO0FBZ0tiO0FBQ0FELG9CQUFrQixFQUFFLEtBaktQO0FBbUtiO0FBQ0FFLG1CQUFpQixFQUFFLEtBcEtOO0FBc0tiO0FBQ0E7QUFDQVUsa0JBQWdCLEVBQUUsQ0FBQyxXQUFELEVBQWMsUUFBZCxFQUF3QixTQUF4QixDQXhLTDtBQXdLeUM7QUFFdEQ7QUFDQTtBQUNBdlEsVUFBUSxFQUFFLElBNUtHO0FBOEtiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBcU8sWUFBVSxFQUFFLElBcExDO0FBc0xiO0FBQ0ExRCxrQkFBZ0IsRUFBRSxJQXZMTDtBQXlMYjtBQUNBO0FBQ0E7QUFDQTFMLGVBQWEsRUFBRSxFQTVMRjtBQTZMYkwsZUFBYSxFQUFFLEVBN0xGO0FBK0xiO0FBQ0E7QUFDQTtBQUNBMEosY0FBWSxFQUFFLElBbE1EO0FBcU1iNUosWUFBVSxFQUFHO0FBQ1hrVCxpQkFBYSxFQUFFO0FBQ2IxRixXQUFLLEVBQUUsZUFETTtBQUViSixjQUFRLEVBQUUsS0FGRztBQUdiRyxlQUFTLEVBQUUsS0FIRTtBQUliRSxhQUFPLEVBQUU7QUFKSSxLQURKO0FBT1gwRixhQUFTLEVBQUU7QUFDVDNGLFdBQUssRUFBRSxXQURFO0FBRVRGLGlCQUFXLEVBQUUsSUFGSjtBQUdURixjQUFRLEVBQUUsS0FIRDtBQUlURyxlQUFTLEVBQUUsS0FKRjtBQUtURSxhQUFPLEVBQUU7QUFMQSxLQVBBO0FBY1gyRixtQkFBZSxFQUFFO0FBQ2Y1RixXQUFLLEVBQUUsaUJBRFE7QUFFZkosY0FBUSxFQUFFLEtBRks7QUFHZkcsZUFBUyxFQUFFLEtBSEk7QUFJZkUsYUFBTyxFQUFFO0FBSk0sS0FkTjtBQW9CWDRGLGFBQVMsRUFBRTtBQUNUN0YsV0FBSyxFQUFFLFdBREU7QUFFVEosY0FBUSxFQUFFLEtBRkQ7QUFHVEcsZUFBUyxFQUFFLEtBSEY7QUFJVEUsYUFBTyxFQUFFO0FBSkEsS0FwQkE7QUEwQlg2RixhQUFTLEVBQUU7QUFDVDlGLFdBQUssRUFBRSxXQURFO0FBRVRKLGNBQVEsRUFBRSxLQUZEO0FBR1RHLGVBQVMsRUFBRSxLQUhGO0FBSVRFLGFBQU8sRUFBRTtBQUpBO0FBMUJBO0FBck1BLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTs7QUFFZTtBQUNiO0FBQ0E7QUFDQTtBQUNBekksYUFBVyxFQUFFLElBSkE7QUFNYjtBQUNBSCxRQUFNLEVBQUUsQ0FDTixJQURNLEVBRU4sSUFGTSxFQUdOLElBSE0sRUFJTixJQUpNLEVBS04sSUFMTSxFQU1OLElBTk0sRUFPTixJQVBNLEVBUU4sSUFSTSxFQVNOLElBVE0sRUFVTixJQVZNLEVBV04sSUFYTSxFQVlOLElBWk0sRUFhTixJQWJNLEVBY04sSUFkTSxFQWVOLElBZk0sRUFnQk4sSUFoQk0sRUFpQk4sSUFqQk0sRUFrQk4sSUFsQk0sRUFtQk4sSUFuQk0sRUFvQk4sSUFwQk0sRUFxQk4sSUFyQk0sRUFzQk4sSUF0Qk0sRUF1Qk4sSUF2Qk0sRUF3Qk4sSUF4Qk0sRUF5Qk4sSUF6Qk0sRUEwQk4sSUExQk0sRUEyQk4sSUEzQk0sRUE0Qk4sSUE1Qk0sRUE2Qk4sSUE3Qk0sRUE4Qk4sSUE5Qk0sRUErQk4sSUEvQk0sQ0FQSztBQXlDYjtBQUNBWCxXQUFTLEVBQUUsQ0FDVCxJQURTLEVBRVQsSUFGUyxFQUdULElBSFMsRUFJVCxJQUpTLEVBS1QsSUFMUyxFQU1ULElBTlMsRUFPVCxJQVBTLEVBUVQsSUFSUyxFQVNULElBVFMsRUFVVCxJQVZTLEVBV1QsSUFYUyxFQVlULElBWlMsQ0ExQ0U7QUF5RGI7QUFDQTtBQUNBWSxnQkFBYyxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CO0FBM0RILENBQWYsRTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTs7QUFFQSxNQUFNeU8sT0FBTyxHQUFHblAsR0FBRyxJQUFJLElBQUkyQixLQUFKLENBQVUsYUFBYTNCLEdBQUcsQ0FBQ3ZELElBQUosSUFBWSxTQUF6QixJQUFzQyxLQUF0QyxHQUE4Q3VELEdBQUcsQ0FBQzdDLEtBQTVELENBQXZCOztBQUVlO0FBQ2I7QUFDQTtBQUNBO0FBQ0FxRyxTQUFPLEVBQUUsSUFKSTtBQU1iO0FBQ0FyQyxVQUFRLEVBQUUsQ0FDUjtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUFIUSxHQVBHO0FBZ0NiSyxvQkFBa0IsRUFBRTtBQUNsQjROLFVBQU0sRUFBRSxZQUFXO0FBQ2pCLGFBQU87QUFDTDtBQUNBak4sV0FBRyxFQUFFLGFBRkE7QUFHTHVCLGVBQU8sRUFBRSxDQUFDLDBCQUFELENBSEo7QUFJTFgsZ0JBQVEsRUFBRSxVQUFTc00sSUFBVCxFQUFlQyxRQUFmLEVBQXlCO0FBQ2pDLGNBQUk7QUFDRixrQkFBTUMsSUFBSSxHQUFHM00sSUFBSSxDQUFDNE0sS0FBTCxDQUFXRixRQUFYLENBQWI7QUFDQSxtQkFBT0MsSUFBSSxDQUFDcFMsS0FBTCxHQUNIZ1MsT0FBTyxDQUFDSSxJQUFELENBREosR0FFSDtBQUNFOVMsa0JBQUksRUFBRThTLElBQUksQ0FBQzVPO0FBRGIsYUFGSjtBQUtELFdBUEQsQ0FPRSxPQUFPbUQsR0FBUCxFQUFZO0FBQ1osbUJBQU9xTCxPQUFPLENBQUM7QUFBQ2hTLG1CQUFLLEVBQUUsdUJBQXVCMkcsR0FBdkIsR0FBNkI7QUFBckMsYUFBRCxDQUFkO0FBQ0Q7QUFDRjtBQWZJLE9BQVA7QUFpQkQsS0FuQmlCO0FBcUJsQjtBQUNBMkwsWUFBUSxFQUFFLFlBQVc7QUFDbkIsYUFBTztBQUNMO0FBQ0F0TixXQUFHLEVBQ0QsaUZBSEc7QUFJTGMsZ0JBQVEsRUFBRSxJQUpMO0FBSVc7QUFDaEJGLGdCQUFRLEVBQUUsVUFBU3NNLElBQVQsRUFBZUMsUUFBZixFQUF5QjtBQUNqQyxjQUFJO0FBQ0Ysa0JBQU1DLElBQUksR0FBRzNNLElBQUksQ0FBQzRNLEtBQUwsQ0FBV0YsUUFBWCxDQUFiO0FBQ0EsbUJBQU9DLElBQUksQ0FBQ0csVUFBTCxJQUFtQixPQUFuQixHQUNIUCxPQUFPLENBQUM7QUFBQ2hTLG1CQUFLLEVBQUVvUyxJQUFJLENBQUNJO0FBQWIsYUFBRCxDQURKLEdBRUg7QUFDRWxULGtCQUFJLEVBQUU4UyxJQUFJLENBQUNoVDtBQURiLGFBRko7QUFLRCxXQVBELENBT0UsT0FBT3VILEdBQVAsRUFBWTtBQUNaLG1CQUFPcUwsT0FBTyxDQUFDO0FBQUNoUyxtQkFBSyxFQUFFLHVCQUF1QjJHLEdBQXZCLEdBQTZCO0FBQXJDLGFBQUQsQ0FBZDtBQUNEO0FBQ0Y7QUFoQkksT0FBUDtBQWtCRCxLQXpDaUI7QUEyQ2xCOEwsV0FBTyxFQUFFLFlBQVc7QUFDbEIsYUFBTztBQUNMO0FBQ0E7QUFDQXpOLFdBQUcsRUFBRSxnREFIQTtBQUlMYyxnQkFBUSxFQUFFLElBSkw7QUFJVztBQUNoQkYsZ0JBQVEsRUFBRSxVQUFTc00sSUFBVCxFQUFlO0FBQ3ZCO0FBQ0EsY0FBSSxDQUFDMVUsTUFBTSxDQUFDa1YsTUFBWixFQUFvQjtBQUNsQlIsZ0JBQUksQ0FDRixJQUFJMU4sS0FBSixDQUNFLHFHQURGLENBREUsQ0FBSjtBQUtBO0FBQ0Q7O0FBRURrTyxnQkFBTSxDQUFDbFAsT0FBUCxDQUNFLFVBQVMzRSxRQUFULEVBQW1CO0FBQ2pCLGdCQUFJO0FBQ0ZxVCxrQkFBSSxDQUFDO0FBQ0g1UyxvQkFBSSxFQUFFVCxRQUFRLENBQUMyRSxPQUFULENBQWlCbVA7QUFEcEIsZUFBRCxDQUFKO0FBR0QsYUFKRCxDQUlFLE9BQU9oTSxHQUFQLEVBQVk7QUFDWnVMLGtCQUFJLENBQUNGLE9BQU8sQ0FBQ3JMLEdBQUQsQ0FBUixDQUFKO0FBQ0Q7QUFDRixXQVRILEVBVUUsVUFBU0EsR0FBVCxFQUFjO0FBQ1p1TCxnQkFBSSxDQUFDRixPQUFPLENBQUNyTCxHQUFELENBQVIsQ0FBSjtBQUNELFdBWkgsRUFYdUIsQ0EwQnZCO0FBQ0E7QUFDRDtBQWpDSSxPQUFQO0FBbUNEO0FBL0VpQjtBQWhDUCxDQUFmLEU7Ozs7Ozs7Ozs7O0FDSkEsY0FBYyxtQkFBTyxDQUFDLCtSQUFtSjs7QUFFeks7QUFDQSxjQUFjLFFBQVM7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsc0pBQTJFOztBQUVoRztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7QUFBQTs7QUFFTyxNQUFNWixTQUFTLEdBQUcsQ0FBRWYsR0FBRixFQUFPWSxRQUFQLEVBQWlCUyxPQUFqQixLQUE4QjtBQUNyRCxNQUFJdU0sVUFBSjtBQUNBLFFBQU1DLFNBQVMsR0FBR3hMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFsQjtBQUVBdUwsV0FBUyxDQUFDakksSUFBVixHQUFpQixXQUFXNUYsR0FBRyxDQUFDNEYsSUFBSixJQUFZLFlBQXZCLENBQWpCO0FBQ0FpSSxXQUFTLENBQUNDLEdBQVYsR0FBZ0I5TixHQUFHLENBQUM4TixHQUFKLElBQVc5TixHQUEzQjtBQUNBNk4sV0FBUyxDQUFDRSxLQUFWLEdBQWtCLEtBQWxCOztBQUVBRixXQUFTLENBQUNHLGtCQUFWLEdBQStCQyxDQUFDLENBQUNDLE1BQUYsR0FBVyxZQUFXO0FBQ25EO0FBQ0EsVUFBTUMsS0FBSyxHQUFHTixTQUFTLENBQUNPLFVBQXhCO0FBRUF2SixnQkFBWSxDQUFDK0ksVUFBRCxDQUFaOztBQUVBLFFBQUksQ0FBQ2hOLFFBQVEsQ0FBQ3NNLElBQVYsS0FBbUIsQ0FBQ2lCLEtBQUQsSUFBVSxrQkFBa0JFLElBQWxCLENBQXVCRixLQUF2QixDQUE3QixDQUFKLEVBQWlFO0FBQy9Edk4sY0FBUSxDQUFDc00sSUFBVCxHQUFnQixJQUFoQjtBQUNBdE0sY0FBUTtBQUNSaU4sZUFBUyxDQUFDRyxrQkFBVixHQUErQkgsU0FBUyxDQUFDSyxNQUFWLEdBQW1CLElBQWxEO0FBQ0Q7QUFDRixHQVhEOztBQWFBN0wsVUFBUSxDQUFDa0csSUFBVCxDQUFjYyxXQUFkLENBQTBCd0UsU0FBMUIsRUFyQnFELENBdUJyRDtBQUNBOztBQUNBRCxZQUFVLEdBQUcxVCxVQUFVLENBQUMsWUFBVztBQUNqQzBHLFlBQVEsQ0FBQ3NNLElBQVQsR0FBZ0IsSUFBaEI7QUFDQXRNLFlBQVE7QUFDUmlOLGFBQVMsQ0FBQ0csa0JBQVYsR0FBK0JILFNBQVMsQ0FBQ0ssTUFBVixHQUFtQixJQUFsRDtBQUNELEdBSnNCLEVBSXBCN00sT0FKb0IsQ0FBdkI7QUFLRCxDQTlCTTtBQWdDQSxNQUFNTCxnQkFBZ0IsR0FBRyxDQUFFaEIsR0FBRixFQUFPc08sVUFBUCxFQUFtQmpOLE9BQW5CLEVBQTRCa04sUUFBNUIsRUFBc0NDLGNBQXRDLEtBQTBEO0FBQ3hGLFFBQU12TixHQUFHLEdBQUcsS0FBS3pJLE1BQU0sQ0FBQ2lXLGNBQVAsSUFBeUJqVyxNQUFNLENBQUNrVyxhQUFyQyxFQUNWLG9CQURVLENBQVo7QUFJQXpOLEtBQUcsQ0FBQzVGLElBQUosQ0FBU2tULFFBQVEsR0FBRyxNQUFILEdBQVksS0FBN0IsRUFBb0N2TyxHQUFwQyxFQUF5QyxDQUF6QztBQUVBaUIsS0FBRyxDQUFDME4sZ0JBQUosQ0FBcUIsY0FBckIsRUFBcUMsbUNBQXJDOztBQUVBLE1BQUlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjTCxjQUFkLENBQUosRUFBbUM7QUFDakMsU0FBSyxJQUFJTSxDQUFDLEdBQUcsQ0FBUixFQUFXQyxDQUFDLEdBQUdQLGNBQWMsQ0FBQ3ZVLE1BQW5DLEVBQTJDNlUsQ0FBQyxHQUFHQyxDQUEvQyxFQUFrRCxFQUFFRCxDQUFwRCxFQUF1RDtBQUNyRCxZQUFNekosS0FBSyxHQUFHbUosY0FBYyxDQUFDTSxDQUFELENBQWQsQ0FBa0J6SixLQUFsQixDQUF3QixHQUF4QixFQUE2QixDQUE3QixDQUFkO0FBQ0FwRSxTQUFHLENBQUMwTixnQkFBSixDQUNFdEosS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTcEYsT0FBVCxDQUFpQixZQUFqQixFQUErQixFQUEvQixDQURGLEVBRUVvRixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNwRixPQUFULENBQWlCLFlBQWpCLEVBQStCLEVBQS9CLENBRkY7QUFJRDtBQUNGOztBQUVELE1BQUksT0FBT3FPLFVBQVAsSUFBcUIsVUFBekIsRUFBcUM7QUFDbkNyTixPQUFHLENBQUMrTSxrQkFBSixHQUF5QixZQUFXO0FBQ2xDLFVBQUkvTSxHQUFHLENBQUNtTixVQUFKLEdBQWlCLENBQXJCLEVBQXdCO0FBQ3RCRSxrQkFBVSxDQUFDck4sR0FBRCxDQUFWO0FBQ0Q7QUFDRixLQUpEO0FBS0Q7O0FBRURBLEtBQUcsQ0FBQytOLElBQUosQ0FBU1QsUUFBVDtBQUNELENBNUJNLEM7Ozs7Ozs7Ozs7OztBQ2xDUDtBQUFBO0FBQUE7QUFBQTs7QUFFTyxNQUFNN1IsU0FBUyxHQUFHVixJQUFJLElBQUk7QUFDL0IsUUFBTStOLEtBQUssR0FBRyxNQUFNMUgsUUFBUSxDQUFDaEcsTUFBN0I7QUFDQSxRQUFNNFMsS0FBSyxHQUFHbEYsS0FBSyxDQUFDMUUsS0FBTixDQUFZLE1BQU1ySixJQUFOLEdBQWEsR0FBekIsQ0FBZDtBQUNBLFNBQU9pVCxLQUFLLENBQUNoVixNQUFOLEdBQWUsQ0FBZixHQUNIaUQsU0FERyxHQUVIK1IsS0FBSyxDQUNGQyxHQURILEdBRUc3SixLQUZILENBRVMsR0FGVCxFQUdHOEosS0FISCxFQUZKO0FBTUQsQ0FUTTtBQVdBLE1BQU14UyxTQUFTLEdBQUcsVUFBV1gsSUFBWCxFQUFpQitOLEtBQWpCLEVBQXdCOU4sVUFBeEIsRUFBb0NDLE1BQXBDLEVBQTRDQyxJQUE1QyxFQUFrREMsTUFBbEQsRUFBMkQ7QUFDbEYsUUFBTWdULE1BQU0sR0FBRyxJQUFJL08sSUFBSixFQUFmO0FBQ0ErTyxRQUFNLENBQUNDLFFBQVAsQ0FBZ0JELE1BQU0sQ0FBQ0UsUUFBUCxLQUFxQixDQUFDLE9BQU9yVCxVQUFQLEtBQXNCLFFBQXRCLEdBQWtDLEdBQWxDLEdBQXdDQSxVQUF6QyxJQUF3RCxFQUE3RjtBQUNBb0csVUFBUSxDQUFDaEcsTUFBVCxHQUFrQkwsSUFBSSxHQUFHLEdBQVAsR0FBYStOLEtBQWIsR0FDQSxXQURBLEdBQ2NxRixNQUFNLENBQUNHLFdBQVAsRUFEZCxHQUVBLFFBRkEsSUFFWXBULElBQUksSUFBSSxHQUZwQixLQUdFRCxNQUFNLEdBQUcsYUFBYUEsTUFBaEIsR0FBeUIsRUFIakMsS0FJRUUsTUFBTSxHQUFHLFNBQUgsR0FBZSxFQUp2QixDQUFsQjtBQUtELENBUk0sQzs7Ozs7Ozs7Ozs7O0FDYlA7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUVPLE1BQU1vTixlQUFlLEdBQUcsQ0FBRWlDLElBQUYsRUFBUStELFNBQVIsS0FDN0IsQ0FBQy9ELElBQUQsSUFBUyxDQUFDQSxJQUFJLENBQUNuSCxVQUFmLEdBQ0UsSUFERixHQUNTbUgsSUFBSSxDQUFDN0gsU0FBTCxDQUFlUyxRQUFmLENBQXdCbUwsU0FBeEIsSUFDUC9ELElBRE8sR0FDQWpDLGVBQWUsQ0FBQ2lDLElBQUksQ0FBQ25ILFVBQU4sRUFBa0JrTCxTQUFsQixDQUhuQjtBQUtBLE1BQU1wRixtQkFBbUIsR0FBRyxDQUFDcUYsRUFBRCxFQUFLeEosT0FBTCxFQUFjcEQsTUFBZCxLQUF5QjtBQUMxRCxRQUFNNk0sV0FBVyxHQUFHLEVBQXBCO0FBQ0EsUUFBTTtBQUFFN1UsU0FBRjtBQUFTOFUsVUFBVDtBQUFpQkMsYUFBakI7QUFBNEJDO0FBQTVCLE1BQTJDNUosT0FBakQsQ0FGMEQsQ0FJMUQ7O0FBQ0EsTUFBSXBMLEtBQUosRUFBVztBQUNQO0FBQ0FBLFNBQUssQ0FBQ2lWLElBQU4sR0FBYWpWLEtBQUssQ0FBQ2lWLElBQU4sR0FBYWpWLEtBQUssQ0FBQ2lWLElBQW5CLEdBQTBCQywwREFBVyxDQUFDbFYsS0FBSyxDQUFDbVYsVUFBUCxDQUFsRDtBQUNBblYsU0FBSyxDQUFDNEwsSUFBTixHQUFhNUwsS0FBSyxDQUFDNEwsSUFBTixHQUFhNUwsS0FBSyxDQUFDNEwsSUFBbkIsR0FBMEI1TCxLQUFLLENBQUNpVixJQUE3QztBQUNBSixlQUFXLENBQUM3TSxNQUFNLEdBQUcsZ0JBQVQsR0FBNEJBLE1BQTVCLEdBQXFDLG9CQUF0QyxDQUFYLEdBQXlFLENBQ3JFLFlBQVloSSxLQUFLLENBQUNpVixJQURtRCxFQUVyRSx1QkFBdUJqVixLQUFLLENBQUNtVixVQUZ3QyxDQUF6RTtBQUlBTixlQUFXLENBQUM3TSxNQUFNLEdBQUcsWUFBVixDQUFYLEdBQXFDLENBQ2pDLFlBQVloSSxLQUFLLENBQUNpVixJQURlLEVBRWpDLHVCQUF1QmpWLEtBQUssQ0FBQ21WLFVBRkksQ0FBckM7QUFJQU4sZUFBVyxDQUFDN00sTUFBTSxHQUFHLFlBQVYsQ0FBWCxHQUFxQyxDQUNqQyxZQUFZaEksS0FBSyxDQUFDaVYsSUFEZSxFQUVqQyx1QkFBdUJqVixLQUFLLENBQUNtVixVQUZJLENBQXJDO0FBSUFOLGVBQVcsQ0FDUDdNLE1BQU0sR0FBRyxZQUFULEdBQXdCQSxNQUF4QixHQUFpQyxtQkFBakMsR0FBdURBLE1BQXZELEdBQWdFLG1CQUR6RCxDQUFYLEdBRUksQ0FBQyxZQUFZaEksS0FBSyxDQUFDNEwsSUFBbkIsQ0FGSjs7QUFJQSxRQUFJa0osTUFBSixFQUFZO0FBQ1I7QUFDQUEsWUFBTSxDQUFDRyxJQUFQLEdBQWNILE1BQU0sQ0FBQ0csSUFBUCxHQUFjSCxNQUFNLENBQUNHLElBQXJCLEdBQTRCQywwREFBVyxDQUFDSixNQUFNLENBQUNLLFVBQVIsQ0FBckQ7QUFDQUwsWUFBTSxDQUFDTSxNQUFQLEdBQWdCTixNQUFNLENBQUNNLE1BQVAsR0FBZ0JOLE1BQU0sQ0FBQ00sTUFBdkIsR0FBZ0MsYUFBaEQ7QUFDQVAsaUJBQVcsQ0FBQzdNLE1BQU0sR0FBRyxVQUFWLENBQVgsR0FBbUMsQ0FDL0IsWUFBWThNLE1BQU0sQ0FBQ0csSUFEWSxFQUUvQixtQkFBbUJILE1BQU0sQ0FBQ00sTUFGSyxFQUcvQix1QkFBdUJOLE1BQU0sQ0FBQ0ssVUFIQyxDQUFuQzs7QUFNQSxVQUFJTCxNQUFNLENBQUNPLE9BQVgsRUFBb0I7QUFDaEJSLG1CQUFXLENBQUM3TSxNQUFNLEdBQUcsVUFBVixDQUFYLENBQWlDaUQsSUFBakMsQ0FBc0MsY0FBYzZKLE1BQU0sQ0FBQ08sT0FBM0Q7QUFDSDs7QUFFRCxVQUFJUCxNQUFNLENBQUNLLFVBQVAsSUFBcUIsYUFBekIsRUFBd0M7QUFDcENOLG1CQUFXLENBQUM3TSxNQUFNLEdBQUcsa0JBQVQsR0FBOEJBLE1BQTlCLEdBQXVDLGdCQUF4QyxDQUFYLEdBQXVFLENBQ25FLHdCQUF3QjhNLE1BQU0sQ0FBQ1EsS0FBUCxJQUFnQkMsNERBQWEsQ0FBQ1QsTUFBTSxDQUFDSyxVQUFSLENBQXJELENBRG1FLENBQXZFO0FBR0g7O0FBRUQsVUFBSUosU0FBSixFQUFlO0FBQ1g7QUFDQUEsaUJBQVMsQ0FBQ0UsSUFBVixHQUFpQkYsU0FBUyxDQUFDRSxJQUFWLEdBQ1hGLFNBQVMsQ0FBQ0UsSUFEQyxHQUVYQywwREFBVyxDQUFDSCxTQUFTLENBQUNJLFVBQVgsQ0FGakI7QUFHQUosaUJBQVMsQ0FBQ0ssTUFBVixHQUFtQkwsU0FBUyxDQUFDSyxNQUFWLEdBQW1CTCxTQUFTLENBQUNLLE1BQTdCLEdBQXNDLGFBQXpEO0FBQ0FQLG1CQUFXLENBQUM3TSxNQUFNLEdBQUcsZ0JBQVYsQ0FBWCxHQUF5QyxDQUNyQyxZQUFZK00sU0FBUyxDQUFDRSxJQURlLEVBRXJDLG1CQUFtQkYsU0FBUyxDQUFDSyxNQUZRLEVBR3JDLHVCQUF1QkwsU0FBUyxDQUFDSSxVQUhJLENBQXpDO0FBS0gsT0FYRCxNQVdPO0FBQ0g7QUFDQU4sbUJBQVcsQ0FBQzdNLE1BQU0sR0FBRyxvQ0FBVixDQUFYLEdBQTZELENBQ3pELFlBQVloSSxLQUFLLENBQUNpVixJQUR1QyxDQUE3RDtBQUdIO0FBQ0o7O0FBRUQsUUFBSUQsVUFBSixFQUFnQjtBQUNaSCxpQkFBVyxDQUFFLEdBQUU3TSxNQUFPLGtCQUFYLENBQVgsR0FBMkMsQ0FDdkMsWUFBWWdOLFVBQVUsQ0FBQ0MsSUFEZ0IsRUFFdkMsbUJBQW1CRCxVQUFVLENBQUNJLE1BRlMsRUFHdkMsdUJBQXVCSixVQUFVLENBQUNHLFVBSEssQ0FBM0M7QUFLSDtBQUNKLEdBdkV5RCxDQXlFMUQ7OztBQUNBLFFBQU1qTixLQUFLLEdBQUdWLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFkO0FBQ0FTLE9BQUssQ0FBQzBNLEVBQU4sR0FBV0EsRUFBWDtBQUNBcE4sVUFBUSxDQUFDZ08sSUFBVCxDQUFjaEgsV0FBZCxDQUEyQnRHLEtBQTNCO0FBQ0ExSixRQUFNLENBQUNpWCxPQUFQLENBQWdCWixXQUFoQixFQUE4Qm5JLE9BQTlCLENBQXVDLENBQUUsQ0FBRUMsSUFBRixFQUFRdUMsS0FBUixDQUFGLEVBQW1Cd0csS0FBbkIsS0FDckN4TixLQUFLLENBQUN5TixLQUFOLENBQVlDLFVBQVosQ0FBeUIsR0FBRWpKLElBQUssSUFBR3VDLEtBQUssQ0FBQzdHLElBQU4sQ0FBVyxHQUFYLENBQWdCLEdBQW5ELEVBQXVEcU4sS0FBdkQsQ0FERjtBQUdBLFNBQU94TixLQUFQO0FBQ0QsQ0FqRk0sQzs7Ozs7Ozs7Ozs7O0FDVFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ08sTUFBTXJHLFNBQVMsR0FBR0wsaURBQWxCO0FBQ0EsTUFBTU0sU0FBUyxHQUFHTixpREFBbEI7QUFHQSxNQUFNb0wsaUJBQWlCLEdBQUcsQ0FBRUMsR0FBRixFQUFPOUcsUUFBUCxLQUMvQjhHLEdBQUcsQ0FBQ3pILE9BQUosQ0FBYSwyQkFBYixFQUEyQyxDQUFFeVEsT0FBRixFQUFXQyxRQUFYLEtBQXlCL1AsUUFBUSxDQUFFK1AsUUFBRixDQUFSLElBQXdCLEVBQTVGLENBREssQyxDQUdQOztBQUNPLE1BQU01RSxRQUFRLEdBQUcsQ0FBQ25MLFFBQUQsRUFBV2dRLEtBQVgsS0FBcUI7QUFDM0MsTUFBSUMsSUFBSSxHQUFHLEtBQVg7QUFDQSxTQUFPLFlBQVc7QUFDaEIsUUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDVGpRLGNBQVEsQ0FBQyxHQUFHa1EsU0FBSixDQUFSO0FBQ0FELFVBQUksR0FBRyxJQUFQO0FBQ0EzVyxnQkFBVSxDQUFDLFlBQVc7QUFDcEIyVyxZQUFJLEdBQUcsS0FBUDtBQUNELE9BRlMsRUFFUEQsS0FGTyxDQUFWO0FBR0Q7QUFDRixHQVJEO0FBU0QsQ0FYTSxDLENBYVA7O0FBQ08sTUFBTTNHLElBQUksR0FBR3ZDLEdBQUcsSUFBSTtBQUN6QixNQUFJcUosT0FBTyxHQUFHLENBQWQ7QUFBQSxNQUNFakMsQ0FBQyxHQUFHLENBRE47QUFBQSxNQUVFa0MsR0FGRjtBQUFBLE1BR0VDLEdBQUcsR0FBR3ZKLEdBQUcsQ0FBQ3pOLE1BSFo7QUFJQSxNQUFJeU4sR0FBRyxDQUFDek4sTUFBSixLQUFlLENBQW5CLEVBQXNCLE9BQU84VyxPQUFQOztBQUN0QixPQUFNakMsQ0FBTixFQUFTQSxDQUFDLEdBQUdtQyxHQUFiLEVBQWtCLEVBQUVuQyxDQUFwQixFQUF3QjtBQUN0QmtDLE9BQUcsR0FBR3RKLEdBQUcsQ0FBQ3dKLFVBQUosQ0FBZ0JwQyxDQUFoQixDQUFOO0FBQ0FpQyxXQUFPLEdBQUcsQ0FBRUEsT0FBTyxJQUFJLENBQWIsSUFBbUJBLE9BQW5CLEdBQTZCQyxHQUF2QztBQUNBRCxXQUFPLElBQUksQ0FBWDtBQUNEOztBQUNELFNBQU9BLE9BQVA7QUFDRCxDQVpNO0FBYVA7QUFDTyxNQUFNSSxZQUFZLEdBQUdwTyxtREFBckI7QUFDQSxNQUFNZ04sV0FBVyxHQUFHaE4sa0RBQXBCO0FBQ0EsTUFBTXFPLFlBQVksR0FBR3JPLG1EQUFyQjtBQUNBLE1BQU1xTixhQUFhLEdBQUVyTixvREFBckI7QUFFUDtBQUNPLE1BQU15RyxlQUFlLEdBQUc2SCxvREFBeEI7QUFDQSxNQUFNakgsbUJBQW1CLEdBQUdpSCx3REFBNUI7QUFFUDtBQUNPLE1BQU0vVSxhQUFhLEdBQUdnVix5REFBdEI7QUFDQSxNQUFNaFMsYUFBYSxHQUFHZ1MseURBQXRCO0FBQ0EsTUFBTTdMLFFBQVEsR0FBRzZMLG9EQUFqQjtBQUVQO0FBQ08sTUFBTXZRLFNBQVMsR0FBR3dRLGdEQUFsQjtBQUNBLE1BQU12USxnQkFBZ0IsR0FBR3VRLHVEQUF6Qjs7QUFFUCxNQUFNQyxjQUFjLEdBQUdDLFVBQVUsSUFBSSxDQUFDNVQsR0FBRCxFQUFNLENBQUNSLEdBQUQsRUFBTTBNLEtBQU4sQ0FBTixLQUF1QjtBQUMxRCxNQUFLQSxLQUFLLFlBQVkxUSxNQUFqQixJQUEyQixFQUFFMFEsS0FBSyxZQUFZNkUsS0FBbkIsQ0FBaEMsRUFBNEQ7QUFDMUQsUUFBSzZDLFVBQVUsQ0FBRXBVLEdBQUYsQ0FBVixZQUE2QmhFLE1BQTdCLElBQXVDLEVBQUVvWSxVQUFVLENBQUVwVSxHQUFGLENBQVYsWUFBNkJ1UixLQUEvQixDQUE1QyxFQUFtRjtBQUNqRi9RLFNBQUcsQ0FBRVIsR0FBRixDQUFILEdBQWFoRSxNQUFNLENBQUNpWCxPQUFQLENBQWV2RyxLQUFmLEVBQXNCbk0sTUFBdEIsQ0FBNkI0VCxjQUFjLENBQUNDLFVBQVUsQ0FBQ3BVLEdBQUQsQ0FBWCxDQUEzQyxFQUE4RCxFQUE5RCxDQUFiO0FBQ0QsS0FGRCxNQUVPO0FBQ0xRLFNBQUcsQ0FBRVIsR0FBRixDQUFILEdBQWEwTSxLQUFiO0FBQ0Q7QUFDRixHQU5ELE1BTU87QUFDTCxRQUFLMEgsVUFBVSxDQUFDM08sY0FBWCxDQUEyQnpGLEdBQTNCLENBQUwsRUFBd0M7QUFDdENRLFNBQUcsQ0FBRVIsR0FBRixDQUFILEdBQWFvVSxVQUFVLENBQUVwVSxHQUFGLENBQXZCO0FBQ0QsS0FGRCxNQUVNO0FBQ0pRLFNBQUcsQ0FBRVIsR0FBRixDQUFILEdBQWEwTSxLQUFiO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPbE0sR0FBUDtBQUNELENBZkQ7O0FBaUJPLE1BQU05RSxZQUFZLEdBQUcsQ0FBRTJZLFFBQUYsRUFBWUQsVUFBWixLQUMxQnBZLE1BQU0sQ0FBQ2lYLE9BQVAsQ0FBZW9CLFFBQWYsRUFBeUI5VCxNQUF6QixDQUFnQzRULGNBQWMsQ0FBQ0MsVUFBRCxDQUE5QyxFQUE0RCxFQUE1RCxDQURLLEM7Ozs7Ozs7Ozs7OztBQzFFUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRU8sTUFBTU4sWUFBWSxHQUFHUSxHQUFHLElBQzdCQSxHQUFHLENBQUMsQ0FBRCxDQUFILElBQVUsR0FBVixHQUNJQSxHQUFHLENBQUNDLE1BQUosQ0FBVyxDQUFYLENBREosR0FDb0JELEdBQUcsQ0FBQzFYLE1BQUosSUFBYyxDQUFkLEdBQ2hCMFgsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTQSxHQUFHLENBQUMsQ0FBRCxDQUFaLEdBQWtCQSxHQUFHLENBQUMsQ0FBRCxDQUFyQixHQUEyQkEsR0FBRyxDQUFDLENBQUQsQ0FBOUIsR0FBb0NBLEdBQUcsQ0FBQyxDQUFELENBQXZDLEdBQTZDQSxHQUFHLENBQUMsQ0FBRCxDQURoQyxHQUNzQ0EsR0FIckQsQyxDQUtQOztBQUNPLE1BQU01QixXQUFXLEdBQUc0QixHQUFHLElBQUk7QUFDaENBLEtBQUcsR0FBR1IsWUFBWSxDQUFDUSxHQUFELENBQWxCO0FBQ0EsUUFBTUUsQ0FBQyxHQUFHQyxRQUFRLENBQUNILEdBQUcsQ0FBQ0MsTUFBSixDQUFXLENBQVgsRUFBYyxDQUFkLENBQUQsRUFBbUIsRUFBbkIsQ0FBbEI7QUFDQSxRQUFNRyxDQUFDLEdBQUdELFFBQVEsQ0FBQ0gsR0FBRyxDQUFDQyxNQUFKLENBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBRCxFQUFtQixFQUFuQixDQUFsQjtBQUNBLFFBQU1JLENBQUMsR0FBR0YsUUFBUSxDQUFDSCxHQUFHLENBQUNDLE1BQUosQ0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUFELEVBQW1CLEVBQW5CLENBQWxCO0FBQ0EsUUFBTUssR0FBRyxHQUFHLENBQUNKLENBQUMsR0FBRyxHQUFKLEdBQVVFLENBQUMsR0FBRyxHQUFkLEdBQW9CQyxDQUFDLEdBQUcsR0FBekIsSUFBZ0MsSUFBNUM7QUFDQSxTQUFPQyxHQUFHLElBQUksR0FBUCxHQUFhLE1BQWIsR0FBc0IsTUFBN0I7QUFDRCxDQVBNLEMsQ0FTUDs7QUFDTyxNQUFNYixZQUFZLEdBQUdPLEdBQUcsSUFBSTtBQUNqQyxRQUFNTyxHQUFHLEdBQUdKLFFBQVEsQ0FBQ1gsWUFBWSxDQUFDUSxHQUFELENBQWIsRUFBb0IsRUFBcEIsQ0FBcEI7QUFBQSxRQUNFUSxHQUFHLEdBQUcsRUFEUjtBQUFBLFFBRUVDLENBQUMsR0FBRyxDQUFDRixHQUFHLElBQUksRUFBUixJQUFjQyxHQUZwQjtBQUFBLFFBR0VFLENBQUMsR0FBRyxDQUFFSCxHQUFHLElBQUksQ0FBUixHQUFhLE1BQWQsSUFBd0JDLEdBSDlCO0FBQUEsUUFJRUcsQ0FBQyxHQUFHLENBQUNKLEdBQUcsR0FBRyxRQUFQLElBQW1CQyxHQUp6QjtBQUtFLFNBQU8sTUFBTSxDQUNiLFlBQ0EsQ0FBQ0MsQ0FBQyxHQUFHLEdBQUosR0FBV0EsQ0FBQyxHQUFHLENBQUosR0FBUSxDQUFSLEdBQVlBLENBQXZCLEdBQTRCLEdBQTdCLElBQW9DLE9BRHBDLEdBRUEsQ0FBQ0MsQ0FBQyxHQUFHLEdBQUosR0FBV0EsQ0FBQyxHQUFHLENBQUosR0FBUSxDQUFSLEdBQVlBLENBQXZCLEdBQTRCLEdBQTdCLElBQW9DLEtBRnBDLElBR0NDLENBQUMsR0FBRyxHQUFKLEdBQVdBLENBQUMsR0FBRyxDQUFKLEdBQVEsQ0FBUixHQUFZQSxDQUF2QixHQUE0QixHQUg3QixDQURhLEVBTVpDLFFBTlksQ0FNSCxFQU5HLEVBT1pDLEtBUFksQ0FPTixDQVBNLENBQWI7QUFRSCxDQWRNO0FBZUEsTUFBTXBDLGFBQWEsR0FBR3VCLEdBQUcsSUFBSTtBQUNsQ0EsS0FBRyxHQUFHUixZQUFZLENBQUVRLEdBQUYsQ0FBbEIsQ0FEa0MsQ0FFbEM7O0FBQ0EsU0FBT0EsR0FBRyxLQUFLLFFBQVIsR0FBbUIsTUFBbkIsR0FBNEJQLFlBQVksQ0FBRU8sR0FBRixDQUEvQztBQUNELENBSk0sQzs7Ozs7Ozs7Ozs7O0FDakNQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUVBOzs7Ozs7QUFLTyxNQUFNclYsYUFBYSxHQUFHNUMsTUFBTSxJQUFJdEIsbURBQVEsQ0FBQ3FFLE9BQVQsQ0FBaUIvQyxNQUFqQixLQUE0QixDQUE1RDtBQUVBLE1BQU0rTCxRQUFRLEdBQUcsTUFDdEIsaUVBQWlFNEksSUFBakUsQ0FBdUU5USxTQUFTLENBQUNrVixTQUFqRixDQURLLEMsQ0FHUDs7QUFDTyxNQUFNblQsYUFBYSxHQUFHekIsR0FBRyxJQUFJLE9BQU9BLEdBQVAsS0FBZSxRQUFmLElBQTJCQSxHQUFHLEtBQUssSUFBbkMsSUFBMkNBLEdBQUcsQ0FBQ2pGLFdBQUosSUFBbUJTLE1BQTNGLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jYy13aW5kb3cge1xcbiAgb3BhY2l0eTogMTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICAtbXMtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbiAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlOyB9XFxuXFxuLmNjLXdpbmRvdy5jYy1pbnZpc2libGUge1xcbiAgb3BhY2l0eTogMDsgfVxcblxcbi8qIG9ubHkgYW5pbWF0ZSBpZmhhcyBjbGFzcyAnY2MtYW5pbWF0ZScgKi9cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2Uge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG4gIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICAtbXMtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlOyB9XFxuXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlLmNjLXRvcCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJlbSk7IH1cXG5cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2UuY2MtYm90dG9tIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyZW0pOyB9XFxuXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlLmNjLWFjdGl2ZS5jYy10b3Age1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxuXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlLmNjLWFjdGl2ZS5jYy1ib3R0b20ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxuXFxuLmNjLXJldm9rZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG5cXG4uY2MtZ3Jvd2VyIHtcXG4gIC8qIEluaXRpYWxseSB3ZSBkb24ndCB3YW50IGFueSBoZWlnaHQsIGFuZCB3ZSB3YW50IHRoZSBjb250ZW50cyB0byBiZSBoaWRkZW4gKi9cXG4gIG1heC1oZWlnaHQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLyogU2V0IG91ciB0cmFuc2l0aW9ucyB1cC4gKi9cXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcXG4gIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcXG4gIC1tcy10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzO1xcbiAgLW8tdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7IH1cXG5cXG4vKiB0aGUgcG9wdXAgd2luZG93ICovXFxuLmNjLXdpbmRvdyxcXG4uY2MtcmV2b2tlIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogZXhjbHVkZSBwYWRkaW5nIHdoZW4gZGVhbGluZyB3aXRoIHdpZHRoICovXFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBDYWxpYnJpLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIC8qIGJ5IHNldHRpbmcgdGhlIGJhc2UgZm9udCBoZXJlLCB3ZSBjYW4gc2l6ZSB0aGUgcmVzdCBvZiB0aGUgcG9wdXAgdXNpbmcgQ1NTIGBlbWAgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIC8qIHRoZSBmb2xsb3dpbmcgYXJlIHJhbmRvbSB1bmp1c3RpZmllZCBzdHlsZXMgLSBqdXN0IGJlY2F1c2UgLSBzaG91bGQgcHJvYmFibHkgYmUgcmVtb3ZlZCAqL1xcbiAgei1pbmRleDogOTk5ODsgfVxcblxcbi5jYy1yZXZva2Uge1xcbiAgei1pbmRleDogOTk5OTsgfVxcblxcbi5jYy13aW5kb3cuY2Mtc3RhdGljIHtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7IH1cXG5cXG4vKiAyIGJhc2ljIHR5cGVzIG9mIHdpbmRvdyAtIGZsb2F0aW5nIC8gYmFubmVyICovXFxuLmNjLXdpbmRvdy5jYy1mbG9hdGluZyB7XFxuICBwYWRkaW5nOiAyZW07XFxuICBtYXgtd2lkdGg6IDI0ZW07XFxuICAvKiAxZW0gPT0gMTZweCB0aGVyZWZvcmUgMjRlbSA9PSAzODRweCAqL1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbi5jYy13aW5kb3cuY2MtYmFubmVyIHtcXG4gIHBhZGRpbmc6IDFlbSAxLjhlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxcblxcbi5jYy1yZXZva2Uge1xcbiAgcGFkZGluZzogMC41ZW07IH1cXG5cXG4uY2MtcmV2b2tlOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuXFxuLmNjLWhlYWRlciB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi8qIGNsaWNrYWJsZSB0aGluZ3MgKi9cXG4uY2MtYnRuLFxcbi5jYy1saW5rLFxcbi5jYy1jbG9zZSxcXG4uY2MtcmV2b2tlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5jYy1saW5rIHtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAuMmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG5cXG4uY2MtbGluazpob3ZlciB7XFxuICBvcGFjaXR5OiAxOyB9XFxuXFxuLmNjLWxpbms6YWN0aXZlLFxcbi5jYy1saW5rOnZpc2l0ZWQge1xcbiAgY29sb3I6IGluaXRpYWw7IH1cXG5cXG4uY2MtYnRuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMC40ZW0gMC44ZW07XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuXFxuLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblxcbi5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZDpob3ZlcixcXG4uY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQ6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblxcbi5jYy1jbG9zZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMC41ZW07XFxuICByaWdodDogMC41ZW07XFxuICBmb250LXNpemU6IDEuNmVtO1xcbiAgb3BhY2l0eTogMC45O1xcbiAgLyogc2VlaW5nIGFzIHRoaXMgY29udGFpbnMgdGV4dCBhbmQgbm90IGFuIGltYWdlLCB0aGUgZWxlbWVudCB0YWxsZXIgdGhhbiBpdCBpcyB3aWRlIChiZWNhdXNlIGl0IGlzIHRleHQpICovXFxuICAvKiAgLSB3ZSB3YW50IGl0IHRvIGJlIGEgc3F1YXJlLCBiZWNhdXNlIGl0J3MgYWN0aW5nIGFzIGFuIGljb24gKi9cXG4gIC8qICAtIHNldHRpbmcgdGhlIGxpbmUgaGVpZ2h0IG5vcm1hbGl6ZXMgdGhlIGhlaWdodCAqL1xcbiAgbGluZS1oZWlnaHQ6IDAuNzU7IH1cXG5cXG4uY2MtY2xvc2U6aG92ZXIsXFxuLmNjLWNsb3NlOmZvY3VzIHtcXG4gIG9wYWNpdHk6IDE7IH1cXG5cXG4vKiBUaGlzIGZpbGUgc2hvdWxkIGNvbnRhaW4gc3R5bGVzIHRoYXQgbW9kaWZpZXMgdGhlIHBvcHVwIGxheW91dC4gKi9cXG4vKiBCeSBsYXlvdXQsIHdlIG1lYW4gdGhlIHBoeXNpY2FsIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50cyBvbiB0aGUgcG9wdXAgd2luZG93LCBhbmQgdGhlIG1hcmdpbiAvIHBhZGRpbmcgYXJvdW5kIHRob3NlIGVsZW1lbnRzLiAqL1xcbi5jYy1yZXZva2UuY2MtdG9wIHtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDNlbTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNWVtO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNWVtOyB9XFxuXFxuLmNjLXJldm9rZS5jYy1ib3R0b20ge1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogM2VtO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41ZW07XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41ZW07IH1cXG5cXG4uY2MtcmV2b2tlLmNjLWxlZnQge1xcbiAgbGVmdDogM2VtO1xcbiAgcmlnaHQ6IHVuc2V0OyB9XFxuXFxuLmNjLXJldm9rZS5jYy1yaWdodCB7XFxuICByaWdodDogM2VtO1xcbiAgbGVmdDogdW5zZXQ7IH1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBGTE9BVElORyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qIHRoZXNlIGNsYXNzZXMgcG9zaXRpb24gdGhlIGZsb2F0aW5nIGVsZW1lbnQgKi9cXG4uY2MtdG9wIHtcXG4gIHRvcDogMWVtOyB9XFxuXFxuLmNjLWxlZnQge1xcbiAgbGVmdDogMWVtOyB9XFxuXFxuLmNjLXJpZ2h0IHtcXG4gIHJpZ2h0OiAxZW07IH1cXG5cXG4uY2MtYm90dG9tIHtcXG4gIGJvdHRvbTogMWVtOyB9XFxuXFxuLyogbGlua3MgdGhhdCBhcmUgZGlyZWN0IGRlY2VuZGFudHMgc2hvdWxkIGJlIGRpc3BsYXllZCBhcyBibG9jayAqL1xcbi5jYy1mbG9hdGluZyA+IC5jYy1saW5rIHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcblxcbi5jYy1mbG9hdGluZyAuY2MtbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcblxcbi5jYy13aW5kb3cuY2MtZmxvYXRpbmcgLmNjLWNvbXBsaWFuY2Uge1xcbiAgZmxleDogMSAwIGF1dG87IH1cXG5cXG4uY2MtY2VudGVyZWQge1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XFxuICB0b3A6IDUwcHg7IH1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBCQU5ORVIgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uY2Mtd2luZG93LmNjLWJhbm5lciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLmNjLWJhbm5lci5jYy10b3Age1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwOyB9XFxuXFxuLmNjLWJhbm5lci5jYy1ib3R0b20ge1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwOyB9XFxuXFxuLmNjLWJhbm5lciAuY2MtbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxZW07IH1cXG5cXG4vKiBDT01QTElBTkNFIEJPWCAqL1xcbi5jYy1jb21wbGlhbmNlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuXFxuLmNjLWZsb2F0aW5nIC5jYy1jb21wbGlhbmNlID4gLmNjLWJ0biB7XFxuICBmbGV4OiAxOyB9XFxuXFxuLmNjLWJ0biArIC5jYy1idG4ge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtOyB9XFxuXFxuLyogQ2F0ZWdvcmllcyBMYXlvdXQgKi9cXG4uY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBvdmVyZmxvdzogdmlzaWJsZTsgfVxcbiAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMgLmZvcm0ge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxcbiAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWJ0biB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi5jYy1jYXRlZ29yaWVzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcnkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMCA1MHB4IDAgMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAuY2MtY2F0ZWdvcmllcyBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDRweCA0cHggNHB4IDM1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAuY2MtY2F0ZWdvcmllcyBsYWJlbCBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogNHB4O1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM2NjY7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy1idG4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy1pbmZvIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGZvbnQtdmFyaWFudDogYWxsLXNtYWxsLWNhcHM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgd2lkdGg6IDI2cHg7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB3aWR0aD1cXFwiMjRweFxcXCIgaGVpZ2h0PVxcXCIyNHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHN0eWxlPVxcXCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0O1xcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCI+PGcgaWQ9XFxcIkljb25zXFxcIiBzdHlsZT1cXFwib3BhY2l0eTowLjc1O1xcXCI+PGcgaWQ9XFxcImhlbHBcXFwiPjxwYXRoIGlkPVxcXCJjaXJjbGVcXFwiIHN0eWxlPVxcXCJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtcXFwiIGQ9XFxcIk0xMi4wMDEsMi4wODVjLTUuNDc4LDAtOS45MTYsNC40MzgtOS45MTYsOS45MTYgYzAsNS40NzYsNC40MzgsOS45MTQsOS45MTYsOS45MTRjNS40NzYsMCw5LjkxNC00LjQzOCw5LjkxNC05LjkxNEMyMS45MTUsNi41MjMsMTcuNDc3LDIuMDg1LDEyLjAwMSwyLjA4NXogTTEyLjAwMiwyMC4wODUgYy00LjQ2NSwwLTguMDg0LTMuNjE5LTguMDg0LTguMDgzYzAtNC40NjUsMy42MTktOC4wODQsOC4wODQtOC4wODRjNC40NjQsMCw4LjA4MywzLjYxOSw4LjA4Myw4LjA4NCBDMjAuMDg1LDE2LjQ2NiwxNi40NjYsMjAuMDg1LDEyLjAwMiwyMC4wODV6XFxcIi8+IDxnIGlkPVxcXCJxdWVzdGlvbl9tYXJrXFxcIj48cGF0aCBpZD1cXFwidG9wXFxcIiBzdHlsZT1cXFwiZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7XFxcIiBkPVxcXCJNMTEuNzY2LDYuNjg4Yy0yLjUsMC0zLjIxOSwyLjE4OC0zLjIxOSwyLjE4OGwxLjQxMSwwLjg1NCBjMCwwLDAuMjk4LTAuNzkxLDAuOTAxLTEuMjI5YzAuNTE2LTAuMzc1LDEuNjI1LTAuNjI1LDIuMjE5LDAuMTI1YzAuNzAxLDAuODg1LTAuMTcsMS41ODctMS4wNzgsMi43MTkgQzExLjA0NywxMi41MzEsMTEsMTUsMTEsMTVoMS45NjljMCwwLDAuMTM1LTIuMzE4LDEuMDQxLTMuMzgxYzAuNjAzLTAuNzA3LDEuNDQzLTEuMzM4LDEuNDQzLTIuNDk0UzE0LjI2Niw2LjY4OCwxMS43NjYsNi42ODh6XFxcIiAvPjxyZWN0IGlkPVxcXCJib3R0b21cXFwiIHg9XFxcIjExXFxcIiB5PVxcXCIxNlxcXCIgc3R5bGU9XFxcImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO1xcXCIgd2lkdGg9XFxcIjJcXFwiIGhlaWdodD1cXFwiMlxcXCIvPjwvZz48L2c+PC9nPjwvc3ZnPicpIHJpZ2h0IG5vLXJlcGVhdDsgfVxcbiAgICAuY2MtY2F0ZWdvcmllcyAuY2MtaW5mbzpmb2N1cyArIC5jYy10b29sdGlwIHtcXG4gICAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgLmNjLWNhdGVnb3JpZXMgLmNjLXNlbGVjdC1hbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTkwMDdjOyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMztcXG4gICAgd2lkdGg6IDE5MHB4O1xcbiAgICByaWdodDogLTE4MHB4O1xcbiAgICBib3R0b206IDQ2cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyOiB0aGluIHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggcmdiYSgxNTAsIDE1MCwgMTUwLCAwLjcpOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy10b29sdGlwOmFmdGVyIHtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICB3aWR0aDogMTBweDtcXG4gICAgICBoZWlnaHQ6IDEwcHg7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBib3R0b206IC03cHg7XFxuICAgICAgbGVmdDogMTBweDtcXG4gICAgICBib3gtc2hhZG93OiAycHggMXB4IDFweCByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuNSk7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXAgcCB7XFxuICAgICAgbWFyZ2luOiAwOyB9XFxuXFxuQG1lZGlhIHByaW50IHtcXG4gIC5jYy13aW5kb3csXFxuICAuY2MtcmV2b2tlIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5jYy1idG4ge1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyB9IH1cXG5cXG4vKiBkaW1lbnNpb25zIGZvciAnaVBob25lNiBQbHVzJyBhbmQgbG93ZXIgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpLCBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcXG4gIC5jYy13aW5kb3cuY2MtdG9wIHtcXG4gICAgdG9wOiAwOyB9XFxuICAuY2Mtd2luZG93LmNjLWJvdHRvbSB7XFxuICAgIGJvdHRvbTogMDsgfVxcbiAgLmNjLXdpbmRvdy5jYy1iYW5uZXIsIC5jYy13aW5kb3cuY2MtZmxvYXRpbmcsIC5jYy13aW5kb3cuY2MtcmlnaHQsIC5jYy13aW5kb3cuY2MtbGVmdCB7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwOyB9XFxuICAuY2Mtd2luZG93LmNjLWJhbm5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiB1bnNldDsgfVxcbiAgICAuY2Mtd2luZG93LmNjLWJhbm5lciAuY2MtY29tcGxpYW5jZSB7XFxuICAgICAgZmxleDogMSAxIGF1dG87IH1cXG4gICAgLmNjLXdpbmRvdy5jYy1iYW5uZXIgLmNjLW1lc3NhZ2Uge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG4gIC5jYy13aW5kb3cuY2MtZmxvYXRpbmcge1xcbiAgICBtYXgtd2lkdGg6IG5vbmU7IH1cXG4gIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLmNjLXdpbmRvdyAuY2MtbWVzc2FnZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcbiAgLmNjLXdpbmRvdyAuY2MtY2F0ZWdvcmllcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDsgfVxcbiAgLmNjLXdpbmRvdyAuY2MtY2F0ZWdvcnkge1xcbiAgICBtYXJnaW46IDRweCAwOyB9XFxuICAgIC5jYy13aW5kb3cgLmNjLWNhdGVnb3J5IC5jYy1idG46bm90KC5jYy1pbmZvKSB7XFxuICAgICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAxNnB4KTtcXG4gICAgICBtaW4td2lkdGg6IDE0MHB4OyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTRweCkge1xcbiAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWJ0bi5jYy1zYXZlIHtcXG4gICAgbWFyZ2luOiA4cHggMDsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzkwcHgpIHtcXG4gIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1jYXRlZ29yaWVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLmNjLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3J5IHtcXG4gICAgbWFyZ2luOiA0cHggMDsgfVxcbiAgLmZvcm0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAzNTBweDsgfVxcbiAgLmNjLWJ0bjpub3QoLmNjLWluZm8pOm5vdCguY2Mtc2F2ZSkge1xcbiAgICB3aWR0aDogY2FsYyggMTAwJSAtIDE2cHgpOyB9IH1cXG5cXG4vKiBDbGFzc2ljICovXFxuLmNjLWZsb2F0aW5nLmNjLXRoZW1lLWNsYXNzaWMge1xcbiAgcGFkZGluZzogMS4yZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdHlwZS1pbmZvLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNvbXBsaWFuY2Uge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZmxleDogbm9uZTsgfVxcblxcbi5jYy10aGVtZS1jbGFzc2ljIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtYnRuIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWJ0bjpsYXN0LWNoaWxkIHtcXG4gICAgICBtaW4td2lkdGg6IDE0MHB4OyB9XFxuICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB0b3A6IC0xcHg7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAyNnB4O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHotaW5kZXg6IDE7IH1cXG4gICAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSArIC5jYy1idG4tY2hlY2tib3gge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDJweDtcXG4gICAgICAgIGxlZnQ6IDZweDtcXG4gICAgICAgIHotaW5kZXg6IDA7XFxuICAgICAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgICAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSArIC5jYy1idG4tY2hlY2tib3g6YmVmb3JlIHtcXG4gICAgICAgICAgY29udGVudDogXFxcIlxcXFwxRjVGNVxcXCI7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4gaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC5jYy1idG4tY2hlY2tib3g6YWZ0ZXIge1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcMjcxM1xcXCI7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogLTRweDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xcbiAgICAgIHRleHQtc2hhZG93OiAwIDFweCAzcHggcmdiYSgxNTAsIDE1MCwgMTUwLCAwLjUpOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuLmNjLWluZm8ge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBwYWRkaW5nOiAwIDRweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0bjpsYXN0LWNoaWxkIHtcXG4gICAgICBtaW4td2lkdGg6IDA7IH1cXG4gIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtdG9vbHRpcCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLXRvb2x0aXA6YWZ0ZXIge1xcbiAgICAgIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgbGlnaHRncmV5O1xcbiAgICAgIGJvcmRlci1yaWdodDogdGhpbiBzb2xpZCBsaWdodGdyZXk7IH1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdHlwZS1pbmZvLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWJ0biB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4vKiBFZGdlbGVzcyAqL1xcbi5jYy10aGVtZS1lZGdlbGVzcy5jYy13aW5kb3cge1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi5jYy1mbG9hdGluZy5jYy10aGVtZS1lZGdlbGVzcyAuY2MtbWVzc2FnZSB7XFxuICBtYXJnaW46IDJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEuNWVtOyB9XFxuXFxuLmNjLWJhbm5lci5jYy10aGVtZS1lZGdlbGVzcyAuY2MtYnRuIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAuOGVtIDEuOGVtO1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLmNjLWJhbm5lci5jYy10aGVtZS1lZGdlbGVzcyAuY2MtbWVzc2FnZSB7XFxuICBtYXJnaW4tbGVmdDogMWVtOyB9XFxuXFxuLmNjLWZsb2F0aW5nLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1idG4gKyAuY2MtYnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuLmNjLXdpbmRvdy5jYy10aGVtZS1lZGdlbGVzcy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0biB7XFxuICBwYWRkaW5nOiAwLjRlbSAwLjhlbTtcXG4gIHBhZGRpbmctbGVmdDogMjZweDsgfVxcbiAgLmNjLXdpbmRvdy5jYy10aGVtZS1lZGdlbGVzcy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0bi5jYy1pbmZvIHtcXG4gICAgcGFkZGluZzogMC40ZW0gNHB4OyB9XFxuXFxuLmNjLXdpbmRvdy5jYy10aGVtZS1lZGdlbGVzcy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXAge1xcbiAgYm9yZGVyOiBub25lOyB9XFxuXCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uICRnZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuICRnZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSAkZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgUmVmbGVjdEFwcGx5KHRoaXMubGlzdGVuZXIsIHRoaXMudGFyZ2V0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIEVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZiBhbmQgb25seSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucykge1xuICB2YXIgc3R5bGVzID0gW107XG4gIHZhciBuZXdTdHlsZXMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNzcyA9IGl0ZW1bMV07XG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXTtcbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXTtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9O1xuXG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHBhcnRzOiBbcGFydF1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG4gICAgdmFyIGogPSAwO1xuXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKys7XG5cbiAgICAgIGZvciAoOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW107XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICByZWZzOiAxLFxuICAgICAgICBwYXJ0czogcGFydHNcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMob3B0aW9ucy5hdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRpb25zLmF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5hdHRyaWJ1dGVzID0gdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmF0dHJpYnV0ZXMgOiB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuICAgICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICAgIGRvbVN0eWxlLnJlZnMtLTtcbiAgICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICB2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgICAgYWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbWF5UmVtb3ZlLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9kb21TdHlsZSA9IG1heVJlbW92ZVtfaV07XG5cbiAgICAgIGlmIChfZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9kb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIF9kb21TdHlsZS5wYXJ0c1tqXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW19kb21TdHlsZS5pZF07XG4gICAgICB9XG4gICAgfVxuICB9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuZXhwb3J0IGNvbnN0IHN0YXR1c0RlbnkgPSBcIkRFTllcIlxuZXhwb3J0IGNvbnN0IHN0YXR1c0FsbG93ID0gXCJBTExPV1wiXG5leHBvcnQgY29uc3Qgc3RhdHVzRGlzbWlzcyA9IFwiRElTTUlTU1wiXG5cbmV4cG9ydCBjb25zdCBzdGF0dXNlcyA9IFsgXCJERU5ZXCIsIFwiQUxMT1dcIiwgXCJESVNNSVNTXCIgXVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IFwiLi9zdHlsZXMvbWFpbi5zY3NzXCJcblxuaW1wb3J0IENvb2tpZUNvbnNlbnQgZnJvbSBcIi4vbW9kZWxzL0Nvb2tpZUNvbnNlbnRcIlxuXG5pZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gQ29va2llQ29uc2VudFxufSBlbHNlIHtcbiAgd2luZG93LkNvb2tpZUNvbnNlbnQgPSBDb29raWVDb25zZW50XG59IiwiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IHsgbWVyZ2VPcHRpb25zIH0gZnJvbSBcIi4uL3V0aWxzXCJcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSBcImV2ZW50c1wiXG5cbmNvbnN0IGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKCBkZWZhdWx0T3B0aW9ucyA9IHt9LCBvcHRpb25zID0ge30gKXtcbiAgICB0aGlzLm9wdGlvbnMgPSBtZXJnZU9wdGlvbnMoIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zIClcbiAgICB0aGlzLm9uID0gZW1pdHRlci5vbi5iaW5kKCBlbWl0dGVyIClcbiAgICB0aGlzLmVtaXQgPSBlbWl0dGVyLmVtaXQuYmluZCggZW1pdHRlciApXG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIlxuXG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9CYXNlXCJcbmltcG9ydCBMZWdhbCBmcm9tIFwiLi9MZWdhbFwiXG5pbXBvcnQgTG9jYXRpb24gZnJvbSBcIi4vTG9jYXRpb25cIlxuaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCJcbmltcG9ydCBDb3JlIGZyb20gXCIuL0NvcmVcIlxuXG5pbXBvcnQge3N0YXR1c0FsbG93LCBzdGF0dXNEaXNtaXNzLCBzdGF0dXNlc30gZnJvbSBcIi4uL2NvbnN0YW50c1wiXG5pbXBvcnQge2dldENvb2tpZSwgaXNWYWxpZFN0YXR1cywgc2V0Q29va2llfSBmcm9tIFwiLi4vdXRpbHNcIlxuaW1wb3J0IGRlZmF1bHRPcHRpb25zIGZyb20gXCIuLi9vcHRpb25zL2RlZmF1bHRcIlxuXG4vLyBUaGlzIGZ1bmN0aW9uIGluaXRpYWxpemVzIHRoZSBhcHAgYnkgY29tYmluaW5nIHRoZSB1c2Ugb2YgdGhlIFBvcHVwLCBMb2NhdG9yIGFuZCBMYXcgbW9kdWxlc1xuLy8gWW91IGNhbiBzdHJpbmcgdG9nZXRoZXIgdGhlc2UgdGhyZWUgbW9kdWxlcyB5b3Vyc2VsZiBob3dldmVyIHlvdSB3YW50LCBieSB3cml0aW5nIGEgbmV3IGZ1bmN0aW9uLlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb29raWVDb25zZW50IGV4dGVuZHMgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKCBvcHRpb25zID0ge30gKXtcbiAgICBzdXBlciggZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgKVxuXG4gICAgbGV0IGFuc3dlcnMgPSB0aGlzLmdldEZpbHRlcmVkU3RhdHVzVmFsdWVzRnJvbUNvb2tpZXMoKVxuICAgIE9iamVjdC5rZXlzKGFuc3dlcnMpLm1hcChjYXRlZ29yeSA9PiB7XG4gICAgICB0aGlzLm9wdGlvbnMuY2F0ZWdvcmllc1tjYXRlZ29yeV0uc3RhdHVzID0gYW5zd2Vyc1tjYXRlZ29yeV1cbiAgICB9KTtcblxuXG4gICAgLy8gYXBwbHkgYmxhY2tsaXN0IC8gd2hpdGVsaXN0XG4gICAgaWYgKHRoaXMub3B0aW9ucy5ibGFja2xpc3RQYWdlLmluY2x1ZGVzKGxvY2F0aW9uLnBhdGhuYW1lKSkge1xuICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSBmYWxzZVxuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLndoaXRlbGlzdFBhZ2UuaW5jbHVkZXMobG9jYXRpb24ucGF0aG5hbWUpKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBpZiB0aGV5IGhhdmUgYWxyZWFkeSBhbnN3ZXJlZFxuICAgIGlmIChhbnN3ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gZmFsc2VcbiAgICAgIHNldFRpbWVvdXQoICgpID0+IHRoaXMuZW1pdCggJ2luaXRpYWxpemVkJywgYW5zd2VycyApIClcbiAgICB9IGVsc2UgaWYgKCB0aGlzLm9wdGlvbnMubGVnYWwgJiYgdGhpcy5vcHRpb25zLmxlZ2FsLmNvdW50cnlDb2RlICkge1xuICAgICAgdGhpcy5pbml0aWFsaXphdGlvbkNvbXBsZXRlKCB7IGNvZGU6IHRoaXMub3B0aW9ucy5sZWdhbC5jb3VudHJ5Q29kZSB9IClcbiAgICB9IGVsc2UgaWYgKCB0aGlzLm9wdGlvbnMubG9jYXRpb24gKSB7XG4gICAgICBuZXcgTG9jYXRpb24oIHRoaXMub3B0aW9ucy5sb2NhdGlvbiApLmxvY2F0ZSggdGhpcy5pbml0aWFsaXphdGlvbkNvbXBsZXRlLmJpbmQoIHRoaXMgKSwgdGhpcy5pbml0aWFsaXphdGlvbkVycm9yLmJpbmQoIHRoaXMgKSApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6YXRpb25Db21wbGV0ZSh7fSlcbiAgICB9XG4gIH1cbiAgaW5pdGlhbGl6YXRpb25Db21wbGV0ZSggcmVzdWx0ICl7XG4gICAgaWYgKHJlc3VsdC5jb2RlKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBuZXcgTGVnYWwodGhpcy5vcHRpb25zLmxlZ2FsKS5hcHBseUxhdyggdGhpcy5vcHRpb25zLCByZXN1bHQuY29kZSApXG4gICAgfVxuICAgIHRoaXMucG9wdXAgPSBuZXcgUG9wdXAoIHRoaXMub3B0aW9ucywgdGhpcyApXG4gICAgc2V0VGltZW91dCggKCkgPT4gdGhpcy5lbWl0KCdpbml0aWFsaXplZCcsIHRoaXMucG9wdXAgKSwgMCApXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmF1dG9PcGVuICYmIHRoaXMub3B0aW9ucy5lbmFibGVkKSB7XG4gICAgICB0aGlzLmF1dG9PcGVuKClcbiAgICB9XG4gIH1cbiAgaW5pdGlhbGl6YXRpb25FcnJvciggZXJyb3IgKSB7XG4gICAgc2V0VGltZW91dCggKCkgPT4gdGhpcy5lbWl0KCAnZXJyb3InLCBlcnJvciwgbmV3IFBvcHVwKCB0aGlzLm9wdGlvbnMsIHRoaXMgKSApLCAwIClcbiAgfVxuICBnZXRDb3VudHJ5TGF3cyggY291bnRyeUNvZGUgKXtcbiAgICByZXR1cm4gbmV3IExlZ2FsKHRoaXMub3B0aW9ucy5sZWdhbCkuZ2V0KCBjb3VudHJ5Q29kZSApXG4gIH1cbiAgaXNPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLnBvcHVwLmlzT3BlbigpXG4gIH1cbiAgY2xvc2UoKXtcbiAgICByZXR1cm4gdGhpcy5wb3B1cC5jbG9zZSgpXG4gIH1cbiAgb3Blbigpe1xuICAgIHJldHVybiB0aGlzLnBvcHVwLm9wZW4oKVxuICB9XG4gIHRvZ2dsZVJldm9rZUJ1dHRvbiggYm9vbCApIHtcbiAgICByZXR1cm4gdGhpcy5wb3B1cC50b2dnbGVSZXZva2VCdXR0b24oIGJvb2wgKVxuICB9XG4gIGRlc3Ryb3koKXtcbiAgICByZXR1cm4gdGhpcy5wb3B1cC5kZXN0cm95KClcbiAgfVxuXG5cbiAgcmV2b2tlQ2hvaWNlKHByZXZlbnRPcGVuKSB7XG4gICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSB0cnVlXG4gICAgdGhpcy5jbGVhckNvb2tpZVZhbHVlcygpXG5cbiAgICB0aGlzLmVtaXQoJ3Jldm9rZUNob2ljZScpXG5cbiAgICBpZiAoIXByZXZlbnRPcGVuKSB7XG4gICAgICB0aGlzLmF1dG9PcGVuKClcbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBzYXZlIGN1cnJlbnQgc3RhdHVzIHZhbHVlc1xuICAgKi9cbiAgc2F2ZSgpIHtcbiAgICB0aGlzLmVtaXQoJ3NhdmUnKVxuICAgIHRoaXMuc2V0U3RhdHVzZXMoKVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBjYXRlZ29yeU5hbWVcbiAgICogQHBhcmFtIHN0YXR1c1xuICAgKi9cbiAgc2V0Q2F0ZWdvcnlDb29raWVWYWx1ZSggY2F0ZWdvcnlOYW1lLCBzdGF0dXMgKSB7XG4gICAgY29uc3QgeyBuYW1lLCBleHBpcnlEYXlzLCBkb21haW4sIHBhdGgsIHNlY3VyZSB9ID0gdGhpcy5vcHRpb25zLmNvb2tpZVxuICAgIGlmIChpc1ZhbGlkU3RhdHVzKHN0YXR1cykpIHtcbiAgICAgIGNvbnN0IGNvb2tpZU5hbWUgPSBuYW1lKydfJytjYXRlZ29yeU5hbWVcbiAgICAgIGNvbnN0IGNob3NlbkJlZm9yZSA9IHN0YXR1c2VzLmluZGV4T2YoIGdldENvb2tpZShjb29raWVOYW1lKSApID49IDBcbiAgICAgIHNldENvb2tpZShjb29raWVOYW1lLCBzdGF0dXMsIGV4cGlyeURheXMsIGRvbWFpbiwgcGF0aCwgc2VjdXJlKVxuICAgICAgdGhpcy5lbWl0KCAnc3RhdHVzQ2hhbmdlZCcsIGNvb2tpZU5hbWUsIHN0YXR1cywgY2hvc2VuQmVmb3JlIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhckNvb2tpZVZhbHVlcygpXG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICogU2V0J3MgY29va2llIHN0YXR1c2VzXG4gICAqL1xuICBzZXRTdGF0dXNlcygpIHtcblxuICAgIGxldCBjaGVja0JveFZhbHVlcyA9IHRoaXMucG9wdXAuZ2V0Q2hlY2tCb3hWYWx1ZXMoKVxuICAgIGNvbnNvbGUuZGVidWcoY2hlY2tCb3hWYWx1ZXMpXG4gICAgT2JqZWN0LmtleXMoY2hlY2tCb3hWYWx1ZXMpLm1hcChjYXRlZ29yeU5hbWUgPT4ge1xuICAgICAgdGhpcy5zZXRDYXRlZ29yeUNvb2tpZVZhbHVlKGNhdGVnb3J5TmFtZSwgY2hlY2tCb3hWYWx1ZXNbY2F0ZWdvcnlOYW1lXSA/IHN0YXR1c0FsbG93IDogc3RhdHVzRGlzbWlzcylcbiAgICB9KVxuXG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBjb29raWUgY2F0ZWdvcnkgc3RhdHVzZXMgZnJvbSBjb29raWUgdmFsdWVzXG4gICAqIEByZXR1cm4geyBhcnJheTxzdHJpbmc+IH0gLSBjb29raWUgY2F0ZWdvcmllcyBzdGF0dXMgaW4gb3JkZXIgb2YgY2F0ZWdvcmllc1xuICAgKi9cbiAgZ2V0U3RhdHVzVmFsdWVzRnJvbUNvb2tpZXMoKSB7XG4gICAgbGV0IHN0YXR1cyA9IFtdXG4gICAgT2JqZWN0LmtleXModGhpcy5vcHRpb25zLmNhdGVnb3JpZXMpLm1hcChjYXRlZ29yeU5hbWUgPT4ge1xuICAgICAgbGV0IGNvb2tpZVZhbHVlID0gZ2V0Q29va2llKHRoaXMub3B0aW9ucy5jb29raWUubmFtZSsnXycrY2F0ZWdvcnlOYW1lKVxuICAgICAgc3RhdHVzW2NhdGVnb3J5TmFtZV0gPSBpc1ZhbGlkU3RhdHVzKGNvb2tpZVZhbHVlKSA/IGNvb2tpZVZhbHVlIDogdW5kZWZpbmVkXG4gICAgfSlcbiAgICByZXR1cm4gc3RhdHVzXG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIGdldEZpbHRlcmVkU3RhdHVzVmFsdWVzRnJvbUNvb2tpZXMoKSB7XG4gICAgbGV0IHN0YXR1c1ZhbHVlcyA9IHRoaXMuZ2V0U3RhdHVzVmFsdWVzRnJvbUNvb2tpZXMoKVxuICAgIGxldCBmaWx0ZXJlZFN0YXR1c1ZhbHVlcyA9IHt9XG4gICAgT2JqZWN0LmtleXMoc3RhdHVzVmFsdWVzKS5tYXAoa2V5ID0+IHtcbiAgICAgIGlmIChzdGF0dXNWYWx1ZXNba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZpbHRlcmVkU3RhdHVzVmFsdWVzW2tleV0gPSBzdGF0dXNWYWx1ZXNba2V5XVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGZpbHRlcmVkU3RhdHVzVmFsdWVzO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBjb29raWUgY2F0ZWdvcmllcyBzdGF0dXNlc1xuICAgKi9cbiAgY2xlYXJDb29raWVWYWx1ZXMoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBkb21haW4sIHBhdGggfSA9IHRoaXMub3B0aW9ucy5jb29raWVcbiAgICBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbnMuY2F0ZWdvcmllcykubWFwKGNhdGVnb3J5TmFtZSA9PiB7XG4gICAgICBzZXRDb29raWUobmFtZSsnXycrY2F0ZWdvcnlOYW1lLCAnJywgLTEsIGRvbWFpbiwgcGF0aClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgY2FuVXNlQ29va2llcygpIHtcbiAgICBpZiAoIXdpbmRvdy5uYXZpZ2F0b3IuY29va2llRW5hYmxlZCB8fCB3aW5kb3cuQ29va2llc09LIHx8IHdpbmRvdy5uYXZpZ2F0b3IuQ29va2llc09LICkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaGFzQW5zd2VyZWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEhhcyB0aGUgdXNlciByZXNwb25kZWQgdG8gdGhlIGJhbm5lclxuICAgKiBAcmV0dXJuIHsgYm9vbGVhbiB9IC0gdHJ1ZSBpZiBhbnkgY29va2llcyBoYXZlIGJlZW4gc2V0XG4gICAqL1xuICBoYXNBbnN3ZXJlZCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5nZXRGaWx0ZXJlZFN0YXR1c1ZhbHVlc0Zyb21Db29raWVzKCkpLmxlbmd0aCA+IDBcbiAgfVxuXG5cbiAgLy8gb3BlbnMgdGhlIHBvcHVwIGlmIG5vIGFuc3dlciBoYXMgYmVlbiBnaXZlblxuICBhdXRvT3BlbigpIHtcbiAgICBjb25zdCBoYXNBbnN3ZXJlZCA9IHRoaXMuaGFzQW5zd2VyZWQoKVxuICAgIGlmICghaGFzQW5zd2VyZWQgJiYgdGhpcy5vcHRpb25zLmVuYWJsZWQpIHtcbiAgICAgIHRoaXMucG9wdXAub3BlbigpXG4gICAgfSBlbHNlIGlmIChoYXNBbnN3ZXJlZCAmJiB0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XG4gICAgICB0aGlzLnRvZ2dsZVJldm9rZUJ1dHRvbih0cnVlKVxuICAgIH1cbiAgfVxuXG59XG5cbnN0YXR1c2VzLnJlZHVjZSggKCBvYmosIHN0YXR1cyApID0+XG4oIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggQ29va2llQ29uc2VudCwgc3RhdHVzLCB7XG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RhdHVzIH0sXG4gIHNldDogZnVuY3Rpb24gKCkge30sXG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICB3cml0ZWFibGU6IGZhbHNlLFxuICBjb25maWd1cmFibGU6IGZhbHNlXG59KSwgb2JqICksIENvb2tpZUNvbnNlbnQgKSIsImltcG9ydCBCYXNlIGZyb20gXCIuL0Jhc2VcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3JlIGV4dGVuZHMgQmFzZSB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucywgY29va2llQ29uc3RlbnQpIHtcbiAgICAgICAgc3VwZXIoIG9wdGlvbnMgKVxuICAgICAgICB0aGlzLmNvb2tpZUNvbnN0ZW50ID0gY29va2llQ29uc3RlbnRcblxuICAgIH1cblxuXG4gICAgaW5pdCgpIHtcblxuICAgIH1cbn0iLCJcInVzZSBzdHJpY3RcIlxuXG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9CYXNlXCJcbmltcG9ydCBkZWZhdWx0T3B0aW9ucyBmcm9tIFwiLi4vb3B0aW9ucy9sZWdhbFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlZ2FsIGV4dGVuZHMgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKCBvcHRpb25zID0ge30gKSB7XG4gICAgc3VwZXIoIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zIClcbiAgfVxuICBnZXQoIGNvdW50cnlDb2RlICl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc0xhdzogdGhpcy5vcHRpb25zLmhhc0xhdy5pbmRleE9mKGNvdW50cnlDb2RlKSA+PSAwLFxuICAgICAgcmV2b2thYmxlOiB0aGlzLm9wdGlvbnMucmV2b2thYmxlLmluZGV4T2YoY291bnRyeUNvZGUpID49IDAsXG4gICAgICBleHBsaWNpdEFjdGlvbjogdGhpcy5vcHRpb25zLmV4cGxpY2l0QWN0aW9uLmluZGV4T2YoY291bnRyeUNvZGUpID49IDBcbiAgICB9XG4gIH1cbiAgYXBwbHlMYXcoIG9wdGlvbnMsIGNvdW50cnlDb2RlICl7XG4gICAgY29uc3QgY291bnRyeSA9IHRoaXMuZ2V0KGNvdW50cnlDb2RlKVxuXG4gICAgaWYgKCFjb3VudHJ5Lmhhc0xhdykge1xuICAgICAgLy8gVGhlIGNvdW50cnkgaGFzIG5vIGNvb2tpZSBsYXdcbiAgICAgIG9wdGlvbnMuZW5hYmxlZCA9IGZhbHNlXG4gICAgICB0aGlzLmVtaXQoIFwibm9Db29raWVMYXdcIiwgY291bnRyeUNvZGUsIGNvdW50cnkgKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVnaW9uYWxMYXcpIHtcbiAgICAgIGlmIChjb3VudHJ5LnJldm9rYWJsZSkge1xuICAgICAgICAvLyBXZSBtdXN0IHByb3ZpZGUgYW4gb3B0aW9uIHRvIHJldm9rZSBjb25zZW50IGF0IGEgbGF0ZXIgdGltZVxuICAgICAgICBvcHRpb25zLnJldm9rYWJsZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKGNvdW50cnkuZXhwbGljaXRBY3Rpb24pIHtcbiAgICAgICAgLy8gVGhlIHVzZXIgbXVzdCBleHBsaWNpdGx5IGNsaWNrIHRoZSBjb25zZW50IGJ1dHRvblxuICAgICAgICBvcHRpb25zLmRpc21pc3NPblNjcm9sbCA9IGZhbHNlXG4gICAgICAgIG9wdGlvbnMuZGlzbWlzc09uVGltZW91dCA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zXG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIlxuXG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9CYXNlXCJcbmltcG9ydCBkZWZhdWx0T3B0aW9ucyBmcm9tIFwiLi4vb3B0aW9ucy9sb2NhdGlvblwiXG5pbXBvcnQgeyBpc1BsYWluT2JqZWN0LCBnZXRTY3JpcHQsIG1ha2VBc3luY1JlcXVlc3QgfSBmcm9tIFwiLi4vdXRpbHNcIlxuXG4vLyBBbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIGxvY2F0aW9uIHNlcnZpY2VzIHdlIGhhdmUgYWxyZWFkeSBzZXQgdXAuXG4vLyBXaGVuIHVzaW5nIGEgc2VydmljZSwgaXQgY291bGQgZWl0aGVyIHJldHVybiBhIGRhdGEgc3RydWN0dXJlIGluIHBsYWluIHRleHQgKGxpa2UgYSBKU09OIG9iamVjdCkgb3IgYW4gZXhlY3V0YWJsZSBzY3JpcHRcbi8vIFdoZW4gdGhlIHJlc3BvbnNlIG5lZWRzIHRvIGJlIGV4ZWN1dGVkIGJ5IHRoZSBicm93c2VyLCB0aGVuIGBpc1NjcmlwdGAgbXVzdCBiZSBzZXQgdG8gdHJ1ZSwgb3RoZXJ3aXNlIGl0IHdvbid0IHdvcmsuXG5cbi8vIFdoZW4gdGhlIHNlcnZpY2UgdXNlcyBhIHNjcmlwdCwgdGhlIGNoYW5jZXMgYXJlIHRoYXQgeW91J2xsIGhhdmUgdG8gdXNlIHRoZSBzY3JpcHQgdG8gbWFrZSBhZGRpdGlvbmFsIHJlcXVlc3RzLiBJbiB0aGVzZVxuLy8gY2FzZXMsIHRoZSBzZXJ2aWNlcyBgY2FsbGJhY2tgIHByb3BlcnR5IGlzIGNhbGxlZCB3aXRoIGEgYGRvbmVgIGZ1bmN0aW9uLiBXaGVuIHBlcmZvcm1pbmcgYXN5bmMgb3BlcmF0aW9ucywgdGhpcyBtdXN0IGJlIGNhbGxlZFxuLy8gd2l0aCB0aGUgZGF0YSAob3IgRXJyb3IpLCBhbmQgYGNvb2tpZWNvbnNlbnQubG9jYXRlYCB3aWxsIHRha2UgY2FyZSBvZiB0aGUgcmVzdFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhdGlvbiBleHRlbmRzIEJhc2Uge1xuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyApIHtcbiAgICBzdXBlciggZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgKVxuICAgIHRoaXMuY3VycmVudFNlcnZpY2VJbmRleCA9IC0xIC8vIHRoZSBpbmRleCAoaW4gb3B0aW9ucykgb2YgdGhlIHNlcnZpY2Ugd2UncmUgY3VycmVudGx5IHVzaW5nXG4gIH1cblxuICBnZXROZXh0U2VydmljZSgpIHtcbiAgICBsZXQgc2VydmljZVxuICAgIGRvIHtcbiAgICAgIHNlcnZpY2UgPSB0aGlzLmdldFNlcnZpY2VCeUlkeCgrK3RoaXMuY3VycmVudFNlcnZpY2VJbmRleClcbiAgICB9IHdoaWxlIChcbiAgICAgIHRoaXMuY3VycmVudFNlcnZpY2VJbmRleCA8IHRoaXMub3B0aW9ucy5zZXJ2aWNlcy5sZW5ndGggJiZcbiAgICAgICFzZXJ2aWNlXG4gICAgKVxuXG4gICAgcmV0dXJuIHNlcnZpY2VcbiAgfVxuXG4gIGdldFNlcnZpY2VCeUlkeChpZHgpIHtcbiAgICAvLyBUaGlzIGNhbiBlaXRoZXIgYmUgdGhlIG5hbWUgb2YgYSBkZWZhdWx0IGxvY2F0aW9uU2VydmljZSwgb3IgYSBmdW5jdGlvbi5cbiAgICBjb25zdCBzZXJ2aWNlT3B0aW9uID0gdGhpcy5vcHRpb25zLnNlcnZpY2VzW2lkeF1cblxuICAgIC8vIElmIGl0J3MgYSBzdHJpbmcsIHVzZSBvbmUgb2YgdGhlIGxvY2F0aW9uIHNlcnZpY2VzLlxuICAgIGlmICh0eXBlb2Ygc2VydmljZU9wdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgZHluYW1pY09wdHMgPSBzZXJ2aWNlT3B0aW9uKClcbiAgICAgIHJldHVybiBkeW5hbWljT3B0cy5uYW1lID8gXG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAge30sXG4gICAgICAgICAgZHluYW1pY09wdHMsXG4gICAgICAgICAgdGhpcy5vcHRpb25zLnNlcnZpY2VEZWZpbml0aW9uc1sgZHluYW1pY09wdHMubmFtZSBdKCBkeW5hbWljT3B0cyApXG4gICAgICAgICkgOiBkeW5hbWljT3B0c1xuICAgIH1cblxuICAgIC8vIElmIGl0J3MgYSBzdHJpbmcsIHVzZSBvbmUgb2YgdGhlIGxvY2F0aW9uIHNlcnZpY2VzLlxuICAgIGlmICh0eXBlb2Ygc2VydmljZU9wdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2VydmljZURlZmluaXRpb25zW3NlcnZpY2VPcHRpb25dKClcbiAgICB9XG5cbiAgICAvLyBJZiBpdCdzIGFuIG9iamVjdCwgYXNzdW1lIHtuYW1lOiAnaXBpbmZvJywgLi4ub3RoZXJPcHRpb25zfVxuICAgIC8vIEFsbG93cyB1c2VyIHRvIHBhc3MgaW4gQVBJIGtleXMgZXRjLlxuICAgIGlmIChpc1BsYWluT2JqZWN0KHNlcnZpY2VPcHRpb24pKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNlcnZpY2VEZWZpbml0aW9uc1tzZXJ2aWNlT3B0aW9uLm5hbWVdKFxuICAgICAgICBzZXJ2aWNlT3B0aW9uXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8vIFRoaXMgcnVucyB0aGUgc2VydmljZSBsb2NhdGVkIGF0IGluZGV4IGBjdXJyZW50U2VydmljZUluZGV4YC5cbiAgLy8gSWYgdGhlIHNlcnZpY2UgZmFpbHMsIGBydW5OZXh0U2VydmljZU9uRXJyb3JgIHdpbGwgY29udGludWUgdHJ5aW5nIGVhY2ggc2VydmljZSB1bnRpbCBhbGwgZmFpbCwgb3Igb25lIGNvbXBsZXRlcyBzdWNjZXNzZnVsbHlcbiAgbG9jYXRlKGNvbXBsZXRlLCBlcnJvcikge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLmdldE5leHRTZXJ2aWNlKClcblxuICAgIGlmICghc2VydmljZSkge1xuICAgICAgZXJyb3IobmV3IEVycm9yKCdObyBzZXJ2aWNlcyB0byBydW4nKSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2FsbGJhY2tDb21wbGV0ZSA9IGNvbXBsZXRlXG4gICAgdGhpcy5jYWxsYmFja0Vycm9yID0gZXJyb3JcblxuICAgIHRoaXMucnVuU2VydmljZShzZXJ2aWNlLCB0aGlzLnJ1bk5leHRTZXJ2aWNlT25FcnJvci5iaW5kKHRoaXMpKVxuICB9XG5cbiAgLy8gUG90ZW50aWFsbHkgYWRkcyBhIGNhbGxiYWNrIHRvIGEgdXJsIGZvciBqc29ucC5cbiAgc2V0dXBVcmwoc2VydmljZSkge1xuICAgIGNvbnN0IHNlcnZpY2VPcHRzID0gdGhpcy5nZXRDdXJyZW50U2VydmljZU9wdHMoKVxuICAgIHJldHVybiBzZXJ2aWNlLnVybC5yZXBsYWNlKC9cXHsoLio/KVxcfS9nLCBmdW5jdGlvbihfLCBwYXJhbSkge1xuICAgICAgaWYgKHBhcmFtID09PSAnY2FsbGJhY2snKSB7XG4gICAgICAgIGNvbnN0IHRlbXBOYW1lID0gJ2NhbGxiYWNrJyArIERhdGUubm93KClcbiAgICAgICAgd2luZG93W3RlbXBOYW1lXSA9IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHNlcnZpY2UuX19KU09OUF9EQVRBID0gSlNPTi5zdHJpbmdpZnkocmVzKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wTmFtZVxuICAgICAgfVxuICAgICAgaWYgKHBhcmFtIGluIHNlcnZpY2VPcHRzLmludGVycG9sYXRlVXJsKSB7XG4gICAgICAgIHJldHVybiBzZXJ2aWNlT3B0cy5pbnRlcnBvbGF0ZVVybFtwYXJhbV1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gcmVxdWlyZXMgYSBgc2VydmljZWAgb2JqZWN0IHRoYXQgZGVmaW5lcyBhdCBsZWFzdCBhIGB1cmxgIGFuZCBgY2FsbGJhY2tgXG4gIHJ1blNlcnZpY2Uoc2VydmljZSwgY29tcGxldGUpIHtcbiAgICAvLyBiYXNpYyBjaGVjayB0byBlbnN1cmUgaXQgcmVzZW1ibGVzIGEgYHNlcnZpY2VgXG4gICAgaWYgKCFzZXJ2aWNlIHx8ICFzZXJ2aWNlLnVybCB8fCAhc2VydmljZS5jYWxsYmFjaykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gd2UgY2FsbCBlaXRoZXIgYGdldFNjcmlwdGAgb3IgYG1ha2VBc3luY1JlcXVlc3RgIGRlcGVuZGluZyBvbiB0aGUgdHlwZSBvZiByZXNvdXJjZVxuICAgIGNvbnN0IHJlcXVlc3RGdW5jdGlvbiA9IHNlcnZpY2UuaXNTY3JpcHQgPyBnZXRTY3JpcHQgOiBtYWtlQXN5bmNSZXF1ZXN0XG5cbiAgICAvLyBib3RoIGZ1bmN0aW9ucyBoYXZlIHNpbWlsYXIgc2lnbmF0dXJlcyBzbyB3ZSBjYW4gcGFzcyB0aGUgc2FtZSBhcmd1bWVudHMgdG8gYm90aFxuICAgIHJlcXVlc3RGdW5jdGlvbihcbiAgICAgIHRoaXMuc2V0dXBVcmwoc2VydmljZSksXG4gICAgICB4aHIgPT4ge1xuICAgICAgICAvLyBpZiBgIXhocmAsIHRoZW4gYGdldFNjcmlwdGAgZnVuY3Rpb24gd2FzIHVzZWQsIHNvIHRoZXJlIGlzIG5vIHJlc3BvbnNlIHRleHRcbiAgICAgICAgbGV0IHJlc3BvbnNlVGV4dCA9IHhociA/IHhoci5yZXNwb25zZVRleHQgOiAnJ1xuXG4gICAgICAgIC8vIGlmIHRoZSByZXNvdXJjZSBpcyBhIHNjcmlwdCwgdGhlbiB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBhZnRlciB0aGUgc2NyaXB0IGhhcyBiZWVuIHJ1bi5cbiAgICAgICAgLy8gaWYgdGhlIHNjcmlwdCBpcyBKU09OUCwgdGhlbiBhIHRpbWUgZGVmaW5lZCBmdW5jdGlvbiBgY2FsbGJhY2tfe0RhdGUubm93fWAgaGFzIGFscmVhZHlcbiAgICAgICAgLy8gYmVlbiBjYWxsZWQgKGFzIHRoZSBKU09OUCBjYWxsYmFjaykuIFRoaXMgY2FsbGJhY2sgc2V0cyB0aGUgX19KU09OUF9EQVRBIHByb3BlcnR5XG4gICAgICAgIGlmIChzZXJ2aWNlLl9fSlNPTlBfREFUQSkge1xuICAgICAgICAgIHJlc3BvbnNlVGV4dCA9IHNlcnZpY2UuX19KU09OUF9EQVRBXG4gICAgICAgICAgZGVsZXRlIHNlcnZpY2UuX19KU09OUF9EQVRBXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjYWxsIHRoZSBzZXJ2aWNlIGNhbGxiYWNrIHdpdGggdGhlIHJlc3BvbnNlIHRleHQgKHNvIGl0IGNhbiBwYXJzZSB0aGUgcmVzcG9uc2UpXG4gICAgICAgIHRoaXMucnVuU2VydmljZUNhbGxiYWNrLmNhbGwodGhpcywgY29tcGxldGUsIHNlcnZpY2UsIHJlc3BvbnNlVGV4dClcbiAgICAgIH0sXG4gICAgICB0aGlzLm9wdGlvbnMudGltZW91dCxcbiAgICAgIHNlcnZpY2UuZGF0YSxcbiAgICAgIHNlcnZpY2UuaGVhZGVyc1xuICAgIClcblxuICAgIC8vIGBzZXJ2aWNlLmRhdGFgIGFuZCBgc2VydmljZS5oZWFkZXJzYCBhcmUgb3B0aW9uYWwgKHRoZXkgb25seSBjb3VudCBpZiBgIXNlcnZpY2UuaXNTY3JpcHRgIGFueXdheSlcbiAgfVxuXG4gIC8vIFRoZSBzZXJ2aWNlIHJlcXVlc3QgaGFzIHJ1biAoYW5kIHBvc3NpYmx5IGhhcyBhIGByZXNwb25zZVRleHRgKSBbbm8gYHJlc3BvbnNlVGV4dGAgaWYgYGlzU2NyaXB0YF1cbiAgLy8gV2UgbmVlZCB0byBydW4gaXRzIGNhbGxiYWNrIHdoaWNoIGRldGVybWluZXMgaWYgaXRzIHN1Y2Nlc3NmdWwgb3Igbm90XG4gIC8vIGBjb21wbGV0ZWAgaXMgY2FsbGVkIG9uIHN1Y2Nlc3Mgb3IgZmFpbHVyZVxuICBydW5TZXJ2aWNlQ2FsbGJhY2soIGNvbXBsZXRlLCBzZXJ2aWNlLCByZXNwb25zZVRleHQgKSB7XG4gICAgLy8gdGhpcyBpcyB0aGUgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgaWYgdGhlIHNlcnZpY2UgdXNlcyB0aGUgYXN5bmMgY2FsbGJhY2sgaW4gaXRzIGhhbmRsZXIgbWV0aG9kXG4gICAgY29uc3Qgc2VydmljZVJlc3VsdEhhbmRsZXIgPSBhc3luY1Jlc3VsdCA9PiB7XG4gICAgICAvLyBpZiBgcmVzdWx0YCBpcyBhIHZhbGlkIHZhbHVlLCB0aGVuIHRoaXMgZnVuY3Rpb24gc2hvdWxkbid0IHJlYWxseSBydW5cbiAgICAgIC8vIGV2ZW4gaWYgaXQgaXMgY2FsbGVkIGJ5IGBzZXJ2aWNlLmNhbGxiYWNrYFxuICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5vblNlcnZpY2VSZXN1bHQoIGNvbXBsZXRlLCBhc3luY1Jlc3VsdClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0aGUgZnVuY3Rpb24gYHNlcnZpY2UuY2FsbGJhY2tgIHdpbGwgZWl0aGVyIGV4dHJhY3QgYSBjb3VudHJ5IGNvZGUgZnJvbSBgcmVzcG9uc2VUZXh0YCBhbmQgcmV0dXJuIGl0IChpbiBgcmVzdWx0YClcbiAgICAvLyBvciAoaWYgaXQgaGFzIHRvIG1ha2UgYWRkaXRpb25hbCByZXF1ZXN0cykgaXQgd2lsbCBjYWxsIGEgYGRvbmVgIGNhbGxiYWNrIHdpdGggdGhlIGNvdW50cnkgY29kZSB3aGVuIGl0IGlzIHJlYWR5XG4gICAgY29uc3QgcmVzdWx0ID0gc2VydmljZS5jYWxsYmFjayhzZXJ2aWNlUmVzdWx0SGFuZGxlciwgcmVzcG9uc2VUZXh0KVxuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgdGhpcy5vblNlcnZpY2VSZXN1bHQoIGNvbXBsZXRlLCByZXN1bHQgKVxuICAgIH1cbiAgfVxuXG4gIC8vIFRoaXMgaXMgY2FsbGVkIHdpdGggdGhlIGByZXN1bHRgIGZyb20gYHNlcnZpY2UuY2FsbGJhY2tgIHJlZ2FyZGxlc3Mgb2YgaG93IGl0IHByb3ZpZGVkIHRoYXQgcmVzdWx0IChzeW5jIG9yIGFzeW5jKS5cbiAgLy8gYHJlc3VsdGAgd2lsbCBiZSB3aGF0ZXZlciBpcyByZXR1cm5lZCBmcm9tIGBzZXJ2aWNlLmNhbGxiYWNrYC4gQSBzZXJ2aWNlIGNhbGxiYWNrIHNob3VsZCBwcm92aWRlIGFuIG9iamVjdCB3aXRoIGRhdGFcbiAgb25TZXJ2aWNlUmVzdWx0KGNvbXBsZXRlLCByZXN1bHQpIHtcbiAgICAvLyBjb252ZXJ0IHJlc3VsdCB0byBub2RlanMgc3R5bGUgYXN5bmMgY2FsbGJhY2tcbiAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IgfHwgKHJlc3VsdCAmJiByZXN1bHQuZXJyb3IpKSB7XG4gICAgICBjb21wbGV0ZS5jYWxsKHRoaXMsIHJlc3VsdCwgbnVsbClcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUuY2FsbCh0aGlzLCBudWxsLCByZXN1bHQpXG4gICAgfVxuICB9XG5cbiAgLy8gaWYgYGVycmAgaXMgc2V0LCB0aGUgbmV4dCBzZXJ2aWNlIGhhbmRsZXIgaXMgY2FsbGVkXG4gIC8vIGlmIGBlcnJgIGlzIG51bGwsIHRoZSBgb25Db21wbGV0ZWAgaGFuZGxlciBpcyBjYWxsZWQgd2l0aCBgZGF0YWBcbiAgcnVuTmV4dFNlcnZpY2VPbkVycm9yKGVyciwgZGF0YSkge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIHRoaXMubG9nRXJyb3IoZXJyKVxuXG4gICAgICBjb25zdCBuZXh0U2VydmljZSA9IHRoaXMuZ2V0TmV4dFNlcnZpY2UoKVxuXG4gICAgICBpZiAobmV4dFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5ydW5TZXJ2aWNlKG5leHRTZXJ2aWNlLCB0aGlzLnJ1bk5leHRTZXJ2aWNlT25FcnJvci5iaW5kKHRoaXMpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZVNlcnZpY2UuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIHRoaXMuY2FsbGJhY2tFcnJvcixcbiAgICAgICAgICBuZXcgRXJyb3IoJ0FsbCBzZXJ2aWNlcyBmYWlsZWQnKVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29tcGxldGVTZXJ2aWNlLmNhbGwodGhpcywgdGhpcy5jYWxsYmFja0NvbXBsZXRlLCBkYXRhKVxuICAgIH1cbiAgfVxuXG4gIGdldEN1cnJlbnRTZXJ2aWNlT3B0cygpIHtcbiAgICBjb25zdCB2YWwgPSB0aGlzLm9wdGlvbnMuc2VydmljZXNbdGhpcy5jdXJyZW50U2VydmljZUluZGV4XVxuXG4gICAgaWYgKHR5cGVvZiB2YWwgPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB7bmFtZTogdmFsfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gdmFsKClcbiAgICB9ZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXR1cm4gdmFsXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH1cbiAgfVxuXG4gIC8vIGNhbGxzIHRoZSBgb25Db21wbGV0ZWAgY2FsbGJhY2sgYWZ0ZXIgcmVzZXR0aW5nIHRoZSBgY3VycmVudFNlcnZpY2VJbmRleGBcbiAgY29tcGxldGVTZXJ2aWNlKGZuLCBkYXRhKSB7XG4gICAgdGhpcy5jdXJyZW50U2VydmljZUluZGV4ID0gLTFcblxuICAgIGZuICYmIGZuKGRhdGEpXG4gIH1cblxuICBsb2dFcnJvcihlcnIpIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgVGhlIHNlcnZpY2VbJHt0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXh9XSAoJHt0aGlzLmdldFNlcnZpY2VCeUlkeCh0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXgpLnVybH0pIHJlc3BvbmRlZCB3aXRoIHRoZSBmb2xsb3dpbmcgZXJyb3JgLFxuICAgICAgIGVyclxuICAgIClcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiXG5cbmltcG9ydCBCYXNlIGZyb20gXCIuL0Jhc2VcIlxuaW1wb3J0IHtcbiAgc3RhdHVzRGlzbWlzcyxcbiAgc3RhdHVzQWxsb3dcbn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiXG5pbXBvcnQge1xuICBhZGRDdXN0b21TdHlsZXNoZWV0LFxuICBoYXNoLFxuICBpbnRlcnBvbGF0ZVN0cmluZyxcbiAgaXNNb2JpbGUsXG4gIGlzUGxhaW5PYmplY3QsXG4gIHRocm90dGxlLFxuICB0cmF2ZXJzZURPTVBhdGgsXG59IGZyb20gXCIuLi91dGlsc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIGV4dGVuZHMgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKCBvcHRpb25zLCBjb29raWVDb25zdGVudCApIHtcbiAgICBzdXBlciggb3B0aW9ucyApXG4gICAgdGhpcy5jb29raWVDb25zdGVudCA9IGNvb2tpZUNvbnN0ZW50XG5cbiAgICB0aGlzLmN1c3RvbVN0eWxlcyA9IHt9XG4gICAgdGhpcy5oYXNUcmFuc2l0aW9uID0gISEoZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBjb25zdCB0cmFucyA9IHtcbiAgICAgICAgdDogJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgICBPVDogJ29UcmFuc2l0aW9uRW5kJyxcbiAgICAgICAgbXNUOiAnTVNUcmFuc2l0aW9uRW5kJyxcbiAgICAgICAgTW96VDogJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgICBXZWJraXRUOiAnd2Via2l0VHJhbnNpdGlvbkVuZCdcbiAgICAgIH1cbiAgXG4gICAgICBmb3IgKGxldCBwcmVmaXggaW4gdHJhbnMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRyYW5zLmhhc093blByb3BlcnR5KHByZWZpeCkgJiZcbiAgICAgICAgICB0eXBlb2YgZWwuc3R5bGVbcHJlZml4ICsgJ3JhbnNpdGlvbiddICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdHJhbnNbcHJlZml4XVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gJydcbiAgICB9KSgpXG5cblxuICAgIC8vIHRoZSBmdWxsIG1hcmt1cCBlaXRoZXIgY29udGFpbnMgdGhlIHdyYXBwZXIgb3IgaXQgZG9lcyBub3QgKGZvciBtdWx0aXBsZSBpbnN0YW5jZXMpXG4gICAgbGV0IGNvb2tpZVBvcHVwID0gdGhpcy5vcHRpb25zLndpbmRvd1xuICAgICAgLnJlcGxhY2UoJ3t7Y2xhc3Nlc319JywgdGhpcy5nZXRQb3B1cENsYXNzZXMoKS5qb2luKCcgJykpXG4gICAgICAucmVwbGFjZSgne3tjaGlsZHJlbn19JywgdGhpcy5nZXRQb3B1cElubmVyTWFya3VwKCkpXG5cblxuICAgIC8vIGlmIHVzZXIgcGFzc2VzIGh0bWwsIHVzZSBpdCBpbnN0ZWFkXG4gICAgY29uc3QgY3VzdG9tSFRNTCA9IHRoaXMub3B0aW9ucy5vdmVycmlkZUhUTUxcbiAgICBpZiAodHlwZW9mIGN1c3RvbUhUTUwgPT0gJ3N0cmluZycgJiYgY3VzdG9tSFRNTC5sZW5ndGggKSB7XG4gICAgICBjb29raWVQb3B1cCA9IGN1c3RvbUhUTUxcbiAgICB9XG5cbiAgICAvLyBpZiBzdGF0aWMsIHdlIG5lZWQgdG8gZ3JvdyB0aGUgZWxlbWVudCBmcm9tIDAgaGVpZ2h0IHNvIGl0IGRvZXNuJ3QganVtcCB0aGUgcGFnZVxuICAgIC8vIGNvbnRlbnQuIHdlIHdyYXAgYW4gZWxlbWVudCBhcm91bmQgaXQgd2hpY2ggd2lsbCBtYXNrIHRoZSBoaWRkZW4gY29udGVudFxuICAgIFxuICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhdGljKSB7XG4gICAgICAvLyBgZ3Jvd2VyYCBpcyBhIHdyYXBwZXIgZGl2IHdpdGggYSBoaWRkZW4gb3ZlcmZsb3cgd2hvc2UgaGVpZ2h0IGlzIGFuaW1hdGVkXG4gICAgICBjb25zdCB3cmFwcGVyID0gdGhpcy5hcHBlbmRNYXJrdXAoYDxkaXYgY2xhc3M9XCJjYy1ncm93ZXJcIj4ke2Nvb2tpZVBvcHVwfTwvZGl2PmApXG5cbiAgICAgIHdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICcnIC8vIHNldCBpdCB0byB2aXNpYmxlIChiZWNhdXNlIGFwcGVuZE1hcmt1cCBoaWRlcyBpdClcbiAgICAgIHRoaXMuZWxlbWVudCA9IHdyYXBwZXIuZmlyc3RDaGlsZCAvLyBnZXQgdGhlIGBlbGVtZW50YCByZWZlcmVuY2UgZnJvbSB0aGUgd3JhcHBlclxuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYy1pbnZpc2libGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmFwcGVuZE1hcmt1cChjb29raWVQb3B1cClcbiAgICB9XG5cbiAgICB0aGlzLmFwcGx5QXV0b0Rpc21pc3MoKVxuICAgIHRoaXMuYXBwbHlSZXZva2VCdXR0b24oKVxuICB9XG5cbiAgb3BlbigpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuXG5cbiAgICBpZiAoIXRoaXMuaXNPcGVuKCkpIHtcbiAgICAgIGlmICh0aGlzLmhhc1RyYW5zaXRpb24pIHtcbiAgICAgICAgdGhpcy5mYWRlSW4oKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJ1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJldm9rYWJsZSkge1xuICAgICAgICB0aGlzLnRvZ2dsZVJldm9rZUJ1dHRvbigpXG4gICAgICB9XG4gICAgICB0aGlzLmVtaXQoICdwb3B1cE9wZW5lZCcgKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBjbG9zZSggc2hvd1Jldm9rZSApIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuXG4gICAgXG4gICAgaWYgKHRoaXMuaXNPcGVuKCkpIHtcbiAgICAgIGlmICh0aGlzLmhhc1RyYW5zaXRpb24pIHtcbiAgICAgICAgdGhpcy5mYWRlT3V0KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICB9XG5cbiAgICAgIGlmIChzaG93UmV2b2tlICYmIHRoaXMub3B0aW9ucy5yZXZva2FibGUpIHtcbiAgICAgICAgdGhpcy50b2dnbGVSZXZva2VCdXR0b24odHJ1ZSlcbiAgICAgIH1cbiAgICAgIHRoaXMuZW1pdCggJ3BvcHVwQ2xvc2VkJyApXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGZhZGVJbigpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudFxuXG4gICAgaWYgKCF0aGlzLmhhc1RyYW5zaXRpb24gfHwgIWVsKSByZXR1cm5cblxuICAgIC8vIFRoaXMgc2hvdWxkIGFsd2F5cyBiZSBjYWxsZWQgQUZURVIgZmFkZU91dCAod2hpY2ggaXMgZ292ZXJuZWQgYnkgdGhlICd0cmFuc2l0aW9uZW5kJyBldmVudCkuXG4gICAgLy8gJ3RyYW5zaXRpb25lbmQnIGlzbid0IGFsbCB0aGF0IHJlbGlhYmxlLCBzbywgaWYgd2UgdHJ5IGFuZCBmYWRlSW4gYmVmb3JlICd0cmFuc2l0aW9uZW5kJyBoYXNcbiAgICAvLyBoYXMgYSBjaGFuY2UgdG8gcnVuLCB0aGVuIHdlIHJ1biBpdCBvdXJzZWx2ZXNcbiAgICBpZiAodGhpcy5hZnRlclRyYW5zaXRpb24pIHtcbiAgICAgIHRoaXMuYWZ0ZXJGYWRlT3V0KGVsKVxuICAgIH1cblxuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLWludmlzaWJsZScpKSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJydcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdGF0aWMpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCArICdweCdcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmFkZUluVGltZW91dCA9IDIwIC8vIChtcykgRE8gTk9UIE1BS0UgVEhJUyBWQUxVRSBTTUFMTEVSLiBTZWUgYmVsb3dcblxuICAgICAgLy8gQWx0aG91Z2ggbW9zdCBicm93c2VycyBjYW4gaGFuZGxlIHZhbHVlcyBsZXNzIHRoYW4gMjBtcywgaXQgc2hvdWxkIHJlbWFpbiBhYm92ZSB0aGlzIHZhbHVlLlxuICAgICAgLy8gVGhpcyBpcyBiZWNhdXNlIHdlIGFyZSB3YWl0aW5nIGZvciBhIFwiYnJvd3NlciByZWRyYXdcIiBiZWZvcmUgd2UgcmVtb3ZlIHRoZSAnY2MtaW52aXNpYmxlJyBjbGFzcy5cbiAgICAgIC8vIElmIHRoZSBjbGFzcyBpcyByZW12b2VkIGJlZm9yZSBhIHJlZHJhdyBjb3VsZCBoYXBwZW4sIHRoZW4gdGhlIGZhZGVJbiBlZmZlY3QgV0lMTCBOT1Qgd29yaywgYW5kXG4gICAgICAvLyB0aGUgcG9wdXAgd2lsbCBhcHBlYXIgZnJvbSBub3RoaW5nLiBUaGVyZWZvcmUgd2UgTVVTVCBhbGxvdyBlbm91Z2ggdGltZSBmb3IgdGhlIGJyb3dzZXIgdG8gZG9cbiAgICAgIC8vIGl0cyB0aGluZy4gVGhlIGFjdHVhbGx5IGRpZmZlcmVuY2UgYmV0d2VlbiB1c2luZyAwIGFuZCAyMCBpbiBhIHNldCB0aW1lb3V0IGlzIG5lZ2xlZ2libGUgYW55d2F5XG4gICAgICB0aGlzLm9wZW5pbmdUaW1lb3V0ID0gc2V0VGltZW91dChcbiAgICAgICAgKCkgPT4gdGhpcy5hZnRlckZhZGVJbihlbCksXG4gICAgICAgIGZhZGVJblRpbWVvdXRcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBuZWVkcyB0byBiZSBjYWxsZWQgYWZ0ZXIgJ2ZhZGVJbicuIFRoaXMgaXMgdGhlIGNvZGUgdGhhdCBhY3R1YWxseSBjYXVzZXMgdGhlIGZhZGVJbiB0byB3b3JrXG4gICAqIFRoZXJlIGlzIGEgZ29vZCByZWFzb24gd2h5IGl0J3MgY2FsbGVkIGluIGEgdGltZW91dC4gUmVhZCAnZmFkZUluJ1xuICAgKi9cbiAgYWZ0ZXJGYWRlSW4oIGVsZW1lbnQgKSB7XG4gICAgdGhpcy5vcGVuaW5nVGltZW91dCA9IG51bGxcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NjLWludmlzaWJsZScpXG4gIH1cbiAgXG4gIGZhZGVPdXQoKSB7XG4gICAgaWYgKCF0aGlzLmhhc1RyYW5zaXRpb24gfHwgIXRoaXMuZWxlbWVudCkgcmV0dXJuXG5cbiAgICBpZiAodGhpcy5vcGVuaW5nVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMub3BlbmluZ1RpbWVvdXQpXG4gICAgICB0aGlzLmFmdGVyRmFkZUluKHRoaXMuZWxlbWVudClcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLWludmlzaWJsZScpKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnN0YXRpYykge1xuICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5zdHlsZS5tYXhIZWlnaHQgPSAnJ1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFmdGVyVHJhbnNpdGlvbiA9ICgpID0+IHRoaXMuYWZ0ZXJGYWRlT3V0KHRoaXMuZWxlbWVudClcbiAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMudHJhbnNpdGlvbkVuZCwgdGhpcy5hZnRlclRyYW5zaXRpb24pXG5cbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYy1pbnZpc2libGUnKVxuICAgIH1cbiAgfVxuICBcbiAgYWZ0ZXJGYWRlT3V0KGVsKSB7XG4gICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJyAvLyBhZnRlciBjbG9zZSBhbmQgYmVmb3JlIG9wZW4sIHRoZSBkaXNwbGF5IHNob3VsZCBiZSBub25lXG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLnRyYW5zaXRpb25FbmQsIHRoaXMuYWZ0ZXJUcmFuc2l0aW9uKVxuICAgIHRoaXMuYWZ0ZXJUcmFuc2l0aW9uID0gbnVsbFxuICB9XG5cbiAgaXNPcGVuKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmVsZW1lbnQgJiZcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnJyAmJlxuICAgICAgKHRoaXMuaGFzVHJhbnNpdGlvbiA/ICF0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYy1pbnZpc2libGUnKSA6IHRydWUpXG4gICAgKVxuICB9XG5cbiAgdG9nZ2xlUmV2b2tlQnV0dG9uKHNob3cpIHtcbiAgICBpZiAodGhpcy5yZXZva2VCdG4pIHRoaXMucmV2b2tlQnRuLnN0eWxlLmRpc3BsYXkgPSBzaG93ID8gJycgOiAnbm9uZSdcbiAgfVxuXG5cbiAgLy8gdG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0XG4gIGdldFBvc2l0aW9uQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnBvc2l0aW9uLnNwbGl0KCAnLScgKS5tYXAoIHBvcyA9PiAnY2MtJytwb3MpXG4gIH1cblxuICBnZXRQb3B1cENsYXNzZXMoKSB7XG4gICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0aW9uc1xuICAgIGxldCBwb3NpdGlvblN0eWxlID1cbiAgICAgIG9wdHMucG9zaXRpb24gPT09ICd0b3AnIHx8IG9wdHMucG9zaXRpb24gPT09ICdib3R0b20nXG4gICAgICAgID8gJ2Jhbm5lcidcbiAgICAgICAgOiAnZmxvYXRpbmcnXG5cbiAgICBpZiAoaXNNb2JpbGUoKSAmJiBvcHRzLm1vYmlsZUZvcmNlRmxvYXQpIHtcbiAgICAgIHBvc2l0aW9uU3R5bGUgPSAnZmxvYXRpbmcnXG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICdjYy0nICsgcG9zaXRpb25TdHlsZSwgLy8gZmxvYXRpbmcgb3IgYmFubmVyXG4gICAgICAnY2MtdHlwZS0nICsgb3B0cy50eXBlLCAvLyBhZGQgdGhlIGNvbXBsaWFuY2UgdHlwZVxuICAgICAgJ2NjLXRoZW1lLScgKyBvcHRzLnRoZW1lLCAvLyBhZGQgdGhlIHRoZW1lXG4gICAgXVxuXG4gICAgaWYgKG9wdHMuc3RhdGljKSB7XG4gICAgICBjbGFzc2VzLnB1c2goJ2NjLXN0YXRpYycpXG4gICAgfVxuXG4gICAgY2xhc3Nlcy5wdXNoLmFwcGx5KGNsYXNzZXMsIHRoaXMuZ2V0UG9zaXRpb25DbGFzc2VzKCkpXG5cbiAgICAvLyB3ZSBvbmx5IGFkZCBleHRyYSBzdHlsZXMgaWYgYHBhbGV0dGVgIGhhcyBiZWVuIHNldCB0byBhIHZhbGlkIHZhbHVlXG4gICAgdGhpcy5hdHRhY2hDdXN0b21QYWxldHRlKHRoaXMub3B0aW9ucy5wYWxldHRlKVxuXG4gICAgLy8gaWYgd2Ugb3ZlcnJpZGUgdGhlIHBhbGV0dGUsIGFkZCB0aGUgY2xhc3MgdGhhdCBlbmFibGVzIHRoaXNcbiAgICBpZiAodGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKSB7XG4gICAgICBjbGFzc2VzLnB1c2godGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKVxuICAgIH1cblxuICAgIHJldHVybiBjbGFzc2VzXG4gIH1cblxuICBnZXRSZXZva2VCdXR0b25DbGFzc2VzKCkge1xuICAgIGNvbnN0IG9wdHMgPSB0aGlzLm9wdGlvbnNcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBbXVxuICAgIGNsYXNzZXMucHVzaCgnY2MtJyt0aGlzLm9wdGlvbnMucmV2b2tlUG9zaXRpb24pXG4gICAgaWYgKHRoaXMub3B0aW9ucy5hbmltYXRlUmV2b2thYmxlKSB7XG4gICAgICBjbGFzc2VzLnB1c2goJ2NjLWFuaW1hdGUnKVxuICAgIH1cbiAgICBpZiAodGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKSB7XG4gICAgICBjbGFzc2VzLnB1c2godGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKVxuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLnRoZW1lKSB7XG4gICAgICBjbGFzc2VzLnB1c2goJ2NjLXRoZW1lLScrdGhpcy5vcHRpb25zLnRoZW1lKVxuICAgIH1cblxuICAgIHJldHVybiBjbGFzc2VzXG4gIH1cblxuICBnZXRQb3B1cElubmVyTWFya3VwKCkge1xuICAgIGNvbnN0IGludGVycG9sYXRlZCA9IHt9XG4gICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0aW9uc1xuXG4gICAgLy8gcmVtb3ZlcyBsaW5rIGlmIHNob3dMaW5rIGlzIGZhbHNlXG4gICAgaWYgKCFvcHRzLnNob3dMaW5rKSB7XG4gICAgICBvcHRzLmVsZW1lbnRzLmxpbmsgPSAnJyBcbiAgICAgIG9wdHMuZWxlbWVudHMubWVzc2FnZWxpbmsgPSBvcHRzLmVsZW1lbnRzLm1lc3NhZ2VcbiAgICB9XG5cbiAgICBsZXQgY2F0ZWdvcmllcyA9IE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucy5jYXRlZ29yaWVzKS5tYXAobmFtZSA9PiB7XG4gICAgICBjb25zdCBzZXR0aW5ncyA9IG9wdHMuY2F0ZWdvcmllc1tuYW1lXVxuICAgICAgaWYgKHNldHRpbmdzLmRpc2FibGVkICE9PSB1bmRlZmluZWQgJiYgc2V0dGluZ3MuZGlzYWJsZWQpIHJldHVyblxuICAgICAgY29uc3QgY2hlY2tlZCA9IHNldHRpbmdzLnByZXNlbGVjdGVkIHx8IHNldHRpbmdzLnN0YXR1cyA9PT0gc3RhdHVzQWxsb3cgPyAnIGNoZWNrZWQ9Y2hlY2tlZCcgOiAnJ1xuICAgICAgY29uc3QgZGlzYWJsZWQgPSBzZXR0aW5ncy5tYW5kYXRvcnkgPyAnIGRpc2FibGVkJyA6ICcnXG4gICAgICByZXR1cm4gW29wdHMuZWxlbWVudHMuY2F0ZWdvcnkucmVwbGFjZSgne3tsYWJlbH19Jywgc2V0dGluZ3MubGFiZWwpXG4gICAgICAgICAgLnJlcGxhY2UoJ3t7Y2F0ZWdvcnl9fScsIG5hbWUpXG4gICAgICAgICAgLnJlcGxhY2UoJ3t7Y2hlY2tlZH19JywgY2hlY2tlZClcbiAgICAgICAgICAucmVwbGFjZSgne3tkaXNhYmxlZH19JywgZGlzYWJsZWQpXG4gICAgICAgICAgLnJlcGxhY2UoJ3t7dG9vbHRpcH19Jywgc2V0dGluZ3MudG9vbHRpcCldXG4gICAgfSkuam9pbignJyk7XG5cbiAgICBvcHRzLmVsZW1lbnRzLmNhdGVnb3JpZXMgPSBvcHRzLmVsZW1lbnRzLmNhdGVnb3JpZXMucmVwbGFjZSgne3tjYXRlZ29yaWVzfX0nLCBjYXRlZ29yaWVzKVxuXG4gICAgb3B0cy5lbGVtZW50cy5zYXZlQnRuID0gb3B0cy5lbGVtZW50cy5zYXZlQnRuLnJlcGxhY2UoJ3t7bGFiZWx9fScsIG9wdHMuY29udGVudC5zYXZlKVxuICAgIG9wdHMuZWxlbWVudHMuc2VsZWN0QWxsQnRuID0gb3B0cy5lbGVtZW50cy5zZWxlY3RBbGxCdG4ucmVwbGFjZSgne3tsYWJlbH19Jywgb3B0cy5jb250ZW50LnNlbGVjdEFsbClcblxuXG4gICAgT2JqZWN0LmtleXMob3B0cy5lbGVtZW50cykuZm9yRWFjaCggcHJvcCA9PiB7XG4gICAgICBpbnRlcnBvbGF0ZWRbcHJvcF0gPSBpbnRlcnBvbGF0ZVN0cmluZyhcbiAgICAgICAgb3B0cy5lbGVtZW50c1twcm9wXSxcbiAgICAgICAgbmFtZSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RyID0gb3B0cy5jb250ZW50W25hbWVdXG4gICAgICAgICAgcmV0dXJuIG5hbWUgJiYgdHlwZW9mIHN0ciA9PSAnc3RyaW5nJyAmJiBzdHIubGVuZ3RoID8gc3RyIDogJydcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH0pXG5cbiAgICAvLyBjaGVja3MgaWYgdGhlIHR5cGUgaXMgdmFsaWQgYW5kIGRlZmF1bHRzIHRvIGluZm8gaWYgaXQncyBub3RcbiAgICBsZXQgY29tcGxpYW5jZVR5cGUgPSBvcHRzLmNvbXBsaWFuY2Vbb3B0cy50eXBlXVxuICAgIGlmICghY29tcGxpYW5jZVR5cGUpIHtcbiAgICAgIGNvbXBsaWFuY2VUeXBlID0gb3B0cy5jb21wbGlhbmNlLmluZm9cbiAgICB9XG5cbiAgICAvLyBidWlsZCB0aGUgY29tcGxpYW5jZSB0eXBlcyBmcm9tIHRoZSBhbHJlYWR5IGludGVycG9sYXRlZCBgZWxlbWVudHNgXG4gICAgaW50ZXJwb2xhdGVkLmNvbXBsaWFuY2UgPSBpbnRlcnBvbGF0ZVN0cmluZyggY29tcGxpYW5jZVR5cGUsIG5hbWUgPT4gaW50ZXJwb2xhdGVkW25hbWVdIClcblxuICAgIC8vIGNoZWNrcyBpZiB0aGUgbGF5b3V0IGlzIHZhbGlkIGFuZCBkZWZhdWx0cyB0byBiYXNpYyBpZiBpdCdzIG5vdFxuICAgIGxldCBsYXlvdXQgPSBvcHRzLmxheW91dHNbb3B0cy5sYXlvdXRdXG4gICAgaWYgKCFsYXlvdXQpIHtcbiAgICAgIGxheW91dCA9IG9wdHMubGF5b3V0cy5iYXNpY1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gaW50ZXJwb2xhdGVTdHJpbmcobGF5b3V0LCBtYXRjaCA9PmludGVycG9sYXRlZFttYXRjaF0gKVxuICB9XG5cbiAgYXBwZW5kTWFya3VwKG1hcmt1cCkge1xuICAgIGNvbnN0IG9wdHMgPSB0aGlzLm9wdGlvbnNcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGNvbnQgPVxuICAgICAgb3B0cy5jb250YWluZXIgJiYgb3B0cy5jb250YWluZXIubm9kZVR5cGUgPT09IDFcbiAgICAgICAgPyBvcHRzLmNvbnRhaW5lclxuICAgICAgICA6IGRvY3VtZW50LmJvZHlcblxuICAgIGRpdi5pbm5lckhUTUwgPSBtYXJrdXBcblxuICAgIGNvbnN0IGVsID0gZGl2LmNoaWxkcmVuWzBdXG5cbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYy13aW5kb3cnKSAmJiB0aGlzLmhhc1RyYW5zaXRpb24pIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2NjLWludmlzaWJsZScpXG4gICAgfVxuXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrKCBldmVudCApIClcbiAgICBlbC5xdWVyeVNlbGVjdG9yQWxsKCAnLmNjLWJ0biBbdHlwZT1cImNoZWNrYm94XCJdJyApLmZvckVhY2goIGNoZWNrYm94ID0+IHtcbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudXNlckNhdGVnb3JpZXNbIGNoZWNrYm94Lm5hbWUgXSA9IGNoZWNrYm94LmNoZWNrZWQgPyAnQUxMT1cnIDogJ0RFTlknXG4gICAgICB9KVxuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZXZlbnQgPT4gKGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpKSApXG4gICAgfSlcbiAgICBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuY2MtaW5mbycpLmZvckVhY2goIHNob3dJbmZvID0+IHtcbiAgICAgIHNob3dJbmZvLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG4gICAgICAgIGlmICggdGhpcyA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAgKSB7XG4gICAgICAgICAgdGhpcy5ibHVyKClcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGlmIChvcHRzLmF1dG9BdHRhY2gpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghY29udC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgY29udC5hcHBlbmRDaGlsZChlbClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250Lmluc2VydEJlZm9yZShlbCwgY29udC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoIGVycm9yICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoICdObyBjb250YWluZXIgdG8gYXR0YWNoIHRvby4gTWFrZSBzdXJlIHRoZSBET00gaGFzIGxvYWRlZC4gSXMgeW91ciBzY3JpcHQgbG9hZGVkIGp1c3QgYmVmb3JlIHRoZSBgPC9ib2R5PmAgdGFnPycgKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbFxuICB9XG5cbiAgaGFuZGxlQnV0dG9uQ2xpY2soZXZlbnQpIHtcbiAgICAvLyByZXR1cm5zIHRoZSBwYXJlbnQgZWxlbWVudCB3aXRoIHRoZSBzcGVjaWZpZWQgY2xhc3MsIG9yIHRoZSBvcmlnaW5hbCBlbGVtZW50IC0gbnVsbCBpZiBub3QgZm91bmRcbiAgICBjb25zdCBidG4gPSB0cmF2ZXJzZURPTVBhdGgoZXZlbnQudGFyZ2V0LCAnY2MtYnRuJykgfHwgZXZlbnQudGFyZ2V0XG4gICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0aW9ucztcblxuICAgIGlmIChidG4uZGF0YXNldC5hY3Rpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGJ0bi5kYXRhc2V0LmFjdGlvbiA9PT0gJ2NoZWNrQWxsQW5kU2F2ZScpIHtcbiAgICAgICAgdGhpcy5jaGVja0FsbCgpXG4gICAgICB9XG4gICAgICBpZiAoYnRuLmRhdGFzZXQuYWN0aW9uID09PSAnc2F2ZScgfHwgYnRuLmRhdGFzZXQuYWN0aW9uID09PSAnY2hlY2tBbGxBbmRTYXZlJykge1xuICAgICAgICB0aGlzLmNvb2tpZUNvbnN0ZW50LnNhdmUoKVxuICAgICAgICB0aGlzLmNsb3NlKHRydWUpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKGJ0bi5kYXRhc2V0LmFjdGlvbiA9PT0gJ2Nsb3NlJykge1xuICAgICAgICB0aGlzLmNvb2tpZUNvbnN0ZW50LnNldFN0YXR1c2VzKHN0YXR1c0Rpc21pc3MpXG4gICAgICAgIHRoaXMuY2xvc2UodHJ1ZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoYnRuLmRhdGFzZXQuYWN0aW9uID09PSAncmV2b2tlJykge1xuICAgICAgICB0aGlzLmNvb2tpZUNvbnN0ZW50LnJldm9rZUNob2ljZSgpXG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogY2hlY2sgYWxsIHZpc2libGUgY2F0ZWdvcmllc1xuICAgKi9cbiAgY2hlY2tBbGwoKSB7XG4gICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYy1jYXRlZ29yaWVzIGlucHV0W3R5cGU9Y2hlY2tib3hdJykuZm9yRWFjaCgoY2hlY2tib3gsa2V5KSA9PiB7XG4gICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0Q2hlY2tCb3hWYWx1ZXMoKSB7XG4gICAgbGV0IHZhbHVlcyA9IFtdO1xuICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2MtY2F0ZWdvcmllcyBpbnB1dFt0eXBlPWNoZWNrYm94XScpLmZvckVhY2goKGNoZWNrYm94LGtleSkgPT4ge1xuICAgICAgdmFsdWVzW2NoZWNrYm94LmF0dHJpYnV0ZXNbJ25hbWUnXS52YWx1ZV0gPSBjaGVja2JveC5jaGVja2VkICE9PSBmYWxzZVxuICAgIH0pXG4gICAgcmV0dXJuIHZhbHVlc1xuICB9XG5cblxuICBhdHRhY2hDdXN0b21QYWxldHRlKHBhbGV0dGUpIHtcbiAgICBjb25zdCBoYXNoU3RyID0gaGFzaChKU09OLnN0cmluZ2lmeShwYWxldHRlKSlcbiAgICBjb25zdCBzZWxlY3RvciA9ICdjYy1jb2xvci1vdmVycmlkZS0nICsgaGFzaFN0clxuICAgIGNvbnN0IGlzVmFsaWQgPSBpc1BsYWluT2JqZWN0KHBhbGV0dGUpXG5cbiAgICB0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IgPSBpc1ZhbGlkID8gc2VsZWN0b3IgOiBudWxsXG5cbiAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgYWRkQ3VzdG9tU3R5bGVzaGVldChoYXNoU3RyLCBwYWxldHRlLCAnLicgKyBzZWxlY3RvcilcbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWRcbiAgfVxuXG5cbiAgZ2V0RXZlbnRQYXRoKCBldmVudCApIHtcbiAgICBjb25zdCBwYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoID8gZXZlbnQuY29tcG9zZWRQYXRoKCkgOiAoZnVuY3Rpb24gKCBhcnIsIGVsZW1lbnQgKSB7XG4gICAgICB3aGlsZSAoIGVsZW1lbnQgKSB7XG4gICAgICAgIGFyci5wdXNoKCBlbGVtZW50IClcbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFyclxuICAgIH0pKFtdLGV2ZW50LnRhcmdldCApXG4gICAgaWYgKCAhcGF0aCApIHtcbiAgICAgIGNvbnNvbGUud2FybiggXCInLnBhdGgnICYgJy5jb21wb3NlZFBhdGgnIGZhaWxlZCB0byBnZW5lcmF0ZSBhbiBldmVudCBwYXRoLlwiIClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICByZXR1cm4gcGF0aFxuICB9XG5cbiAgYXBwbHlBdXRvRGlzbWlzcygpIHtcbiAgICBjb25zdCB7XG4gICAgICBlbmFibGVkLFxuICAgICAgZGlzbWlzc09uVGltZW91dCAgOiBkZWxheSxcbiAgICAgIGRpc21pc3NPblNjcm9sbCAgIDpzY3JvbGxSYW5nZSxcbiAgICAgIGRpc21pc3NPbkxpbmtDbGljayxcbiAgICAgIGRpc21pc3NPbldpbmRvd0NsaWNrLFxuICAgICAgZGlzbWlzc09uS2V5UHJlc3NcbiAgICB9ID0gdGhpcy5vcHRpb25zXG5cbiAgICBpZiAoIGVuYWJsZWQgKSB7XG4gICAgICBpZiAodHlwZW9mIGRlbGF5ID09ICdudW1iZXInICYmIGRlbGF5ID49IDApIHtcbiAgICAgICAgdGhpcy5kaXNtaXNzVGltZW91dCA9IHNldFRpbWVvdXQoICgpPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoc3RhdHVzRGlzbWlzcylcbiAgICAgICAgICB0aGlzLmNsb3NlKHRydWUpXG4gICAgICAgIH0sIE1hdGguZmxvb3IoZGVsYXkpKVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2Nyb2xsUmFuZ2UgPT0gJ251bWJlcicgJiYgc2Nyb2xsUmFuZ2UgPj0gMCkge1xuICAgICAgICB0aGlzLm9uV2luZG93U2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiBNYXRoLmZsb29yKHNjcm9sbFJhbmdlKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyhzdGF0dXNEaXNtaXNzKVxuICAgICAgICAgICAgdGhpcy5jbG9zZSh0cnVlKVxuXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vbldpbmRvd1Njcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgICAgICAgICB0aGlzLm9uV2luZG93U2Nyb2xsID0gbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vbldpbmRvd1Njcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgICB9IGVsc2UgaWYgKGRpc21pc3NPbldpbmRvd0NsaWNrKSB7XG4gICAgICAgIHRoaXMub25XaW5kb3dDbGljayA9IGV2dCA9PiB7XG4gICAgICAgICAgaWYgKCAhZ2V0RXZlbnRQYXRoKCBldnQgKS5zb21lKCBlbGVtZW50ID0+XG4gICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuaWdub3JlQ2xpY2tzRnJvbS5zb21lKCBpZ25vcmVkQ2xpY2sgPT5cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoIGlnbm9yZWRDbGljayApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyhzdGF0dXNEaXNtaXNzKVxuICAgICAgICAgICAgdGhpcy5jbG9zZSh0cnVlKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uV2luZG93Q2xpY2spXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uV2luZG93Q2xpY2spXG4gICAgICAgICAgICB0aGlzLm9uV2luZG93Q2xpY2sgPSBudWxsXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbldpbmRvd0NsaWNrKVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uV2luZG93Q2xpY2spXG4gICAgICB9IGVsc2UgaWYgKGRpc21pc3NPbkxpbmtDbGljaykge1xuICAgICAgICB0aGlzLm9uTGlua0NsaWNrID0gZXZ0ID0+IHtcbiAgICAgICAgICBpZiAoIGdldEV2ZW50UGF0aCggZXZ0ICkuc29tZSggZWxlbSA9PiB0eXBlb2YgZWxlbS50YWdOYW1lICE9PSAndW5kZWZpbmVkJyAmJiBlbGVtLnRhZ05hbWUgPT09ICdBJyApICkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyggc3RhdHVzRGlzbWlzcyApXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCB0cnVlIClcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25MaW5rQ2xpY2spXG4gICAgICAgICAgICB0aGlzLm9uTGlua0NsaWNrID0gbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uTGlua0NsaWNrKVxuICAgICAgfSBlbHNlIGlmICggZGlzbWlzc09uS2V5UHJlc3MgKSB7XG4gICAgICAgICAgdGhpcy5vbktleVByZXNzID0gZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudFxuICAgICAgICAgICAgaWYgKCBrZXlDb2RlID09PSAxMyApIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyggc3RhdHVzQWxsb3cgKVxuICAgICAgICAgICAgICB0aGlzLmNsb3NlKCB0cnVlIClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoIHN0YXR1c0Rpc21pc3MgKVxuICAgICAgICAgICAgICB0aGlzLmNsb3NlKCB0cnVlIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdvbmtleXByZXNzJywgdGhpcy5vbktleVByZXNzIClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhcHBseVJldm9rZUJ1dHRvbigpIHtcbiAgICAvLyByZXZva2FibGUgaXMgdHJ1ZSBpZiBhZHZhbmNlZCBjb21wbGlhbmNlIGlzIHNlbGVjdGVkXG4gICAgaWYgKHRoaXMub3B0aW9ucy50eXBlICE9PSAnaW5mbycpIHRoaXMub3B0aW9ucy5yZXZva2FibGUgPSB0cnVlXG4gICAgLy8gYW5pbWF0ZVJldm9rYWJsZSBmYWxzZSBmb3IgbW9iaWxlIGRldmljZXNcbiAgICBpZiAoaXNNb2JpbGUoKSkgdGhpcy5vcHRpb25zLmFuaW1hdGVSZXZva2FibGUgPSBmYWxzZVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZXZva2FibGUpIHtcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSB0aGlzLmdldFJldm9rZUJ1dHRvbkNsYXNzZXMoKVxuXG4gICAgICBjb25zdCByZXZva2VCdG4gPSB0aGlzLm9wdGlvbnMucmV2b2tlQnRuXG4gICAgICAgIC5yZXBsYWNlKCd7e2NsYXNzZXN9fScsIGNsYXNzZXMuam9pbignICcpKVxuICAgICAgICAucmVwbGFjZSgne3twb2xpY3l9fScsIHRoaXMub3B0aW9ucy5jb250ZW50LnBvbGljeSlcblxuICAgICAgdGhpcy5yZXZva2VCdG4gPSB0aGlzLmFwcGVuZE1hcmt1cChyZXZva2VCdG4pXG5cbiAgICAgIGNvbnN0IGJ0biA9IHRoaXMucmV2b2tlQnRuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmFuaW1hdGVSZXZva2FibGUpIHtcbiAgICAgICAgY29uc3Qgb25Nb3VzZU1vdmUgPSB0aHJvdHRsZShmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICBsZXQgYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICBjb25zdCBtaW5ZID0gMjBcbiAgICAgICAgICBjb25zdCBtYXhZID0gd2luZG93LmlubmVySGVpZ2h0IC0gMjBcblxuICAgICAgICAgIGlmICggKCBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtdG9wJyApICYmIGV2dC5jbGllbnRZIDwgbWluWSApIHx8XG4gICAgICAgICAgICAgICAgKCBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYm90dG9tJyApICYmIGV2dC5jbGllbnRZID4gbWF4WSApICkge1xuICAgICAgICAgICAgYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhY3RpdmUgJiYgIWJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1hY3RpdmUnICkgKSB7XG4gICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCAnY2MtYWN0aXZlJyApXG4gICAgICAgICAgfSBlbHNlIGlmICggIWFjdGl2ZSAmJiBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYWN0aXZlJyApICkge1xuICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSggJ2NjLWFjdGl2ZScgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgMjAwKVxuXG4gICAgICAgIHRoaXMub25Nb3VzZU1vdmUgPSBvbk1vdXNlTW92ZVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGRlc3Ryb3koKXtcbiAgICBjb25zb2xlLndhcm4oICdEZXN0cm95aW5nLi4uJylcbiAgICBpZiAoIHRoaXMuZWxlbWVudCApe1xuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpXG4gICAgfVxuICAgIGlmICggdGhpcy5yZXZva2VCdG4gKXtcbiAgICAgIHRoaXMucmV2b2tlQnRuLnJlbW92ZSgpXG4gICAgfVxuICAgIGlmICggdGhpcy5vbldpbmRvd1Njcm9sbCApe1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25XaW5kb3dTY3JvbGwgKVxuICAgIH1cbiAgICBpZiAoIHRoaXMub25XaW5kb3dDbGljayApIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25XaW5kb3dDbGljayApXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uV2luZG93Q2xpY2spXG4gICAgfVxuICAgIGlmICggdGhpcy5vbkxpbmtDbGljayApIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25MaW5rQ2xpY2spXG4gICAgfVxuICAgIGlmICggdGhpcy5vbktleVByZXNzICkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdvbmtleXByZXNzJywgdGhpcy5vbktleVByZXNzIClcbiAgICB9XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbmltcG9ydCB7IHN0YXR1c0RlbnksIHN0YXR1c0FsbG93LCBzdGF0dXNEaXNtaXNzLCBjYXRlZ29yaWVzIH0gIGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8vIGlmIGZhbHNlLCB0aGlzIHByZXZlbnRzIHRoZSBwb3B1cCBmcm9tIHNob3dpbmcgKHVzZWZ1bCBmb3IgZ2l2aW5nIHRvIGNvbnRyb2wgdG8gYW5vdGhlciBwaWVjZSBvZiBjb2RlKVxuICBlbmFibGVkOiB0cnVlLFxuXG4gIC8vIG9wdGlvbmFsIChleHBlY3RpbmcgYSBIVE1MIGVsZW1lbnQpIGlmIHBhc3NlZCwgdGhlIHBvcHVwIGlzIGFwcGVuZGVkIHRvIHRoaXMgZWxlbWVudC4gZGVmYXVsdCBpcyBgZG9jdW1lbnQuYm9keWBcbiAgY29udGFpbmVyOiBudWxsLFxuXG4gIC8vIGRlZmF1bHRzIGNvb2tpZSBvcHRpb25zIC0gaXQgaXMgUkVDT01NRU5ERUQgdG8gc2V0IHRoZXNlIHZhbHVlcyB0byBjb3JyZXNwb25kIHdpdGggeW91ciBzZXJ2ZXJcbiAgY29va2llOiB7XG4gICAgLy8gVGhpcyBpcyB0aGUgbmFtZSBvZiB0aGlzIGNvb2tpZSAtIHlvdSBjYW4gaWdub3JlIHRoaXNcbiAgICBuYW1lOiAnY29va2llY29uc2VudF9zdGF0dXMnLFxuICAgIC8vIFRoaXMgaXMgdGhlIHVybCBwYXRoIHRoYXQgdGhlIGNvb2tpZSAnbmFtZScgYmVsb25ncyB0by4gVGhlIGNvb2tpZSBjYW4gb25seSBiZSByZWFkIGF0IHRoaXMgbG9jYXRpb25cbiAgICBwYXRoOiAnLycsXG4gICAgLy8gVGhpcyBpcyB0aGUgZG9tYWluIHRoYXQgdGhlIGNvb2tpZSAnbmFtZScgYmVsb25ncyB0by4gVGhlIGNvb2tpZSBjYW4gb25seSBiZSByZWFkIG9uIHRoaXMgZG9tYWluLlxuICAgIC8vICAtIEd1aWRlIHRvIGNvb2tpZSBkb21haW5zIC0gaHR0cHM6Ly93d3cubXhzYXNoYS5ldS9ibG9nLzIwMTQvMDMvMDQvZGVmaW5pdGl2ZS1ndWlkZS10by1jb29raWUtZG9tYWlucy9cbiAgICBkb21haW46ICdsb2NhbGhvc3QnLFxuICAgIC8vIFRoZSBjb29raWVzIGV4cGlyZSBkYXRlLCBzcGVjaWZpZWQgaW4gZGF5cyAoc3BlY2lmeSAtMSBmb3Igbm8gZXhwaXJ5KVxuICAgIGV4cGlyeURheXM6IDM2NSxcbiAgICAvLyBJZiB0cnVlIHRoZSBjb29raWUgd2lsbCBiZSBjcmVhdGVkIHdpdGggdGhlIHNlY3VyZSBmbGFnLiBTZWN1cmUgY29va2llcyB3aWxsIG9ubHkgYmUgdHJhbnNtaXR0ZWQgdmlhIEhUVFBTLlxuICAgIHNlY3VyZTogZmFsc2VcbiAgfSxcblxuICAvLyBlYWNoIGl0ZW0gZGVmaW5lcyB0aGUgaW5uZXIgdGV4dCBmb3IgdGhlIGVsZW1lbnQgdGhhdCBpdCByZWZlcmVuY2VzXG4gIGNvbnRlbnQ6IHtcbiAgICBoZWFkZXIgOiAnQ29va2llcyB1c2VkIG9uIHRoZSB3ZWJzaXRlIScsXG4gICAgbWVzc2FnZTogJ1RoaXMgd2Vic2l0ZSB1c2VzIGNvb2tpZXMgdG8gZW5zdXJlIHlvdSBnZXQgdGhlIGJlc3QgZXhwZXJpZW5jZSBvbiBvdXIgd2Vic2l0ZS4nLFxuICAgIGRpc21pc3M6ICdHb3QgaXQhJyxcbiAgICBhbGxvdyAgOiAnQWxsb3cgY29va2llcycsXG4gICAgZGVueSAgIDogJ0RlY2xpbmUnLFxuICAgIGxpbmsgICA6ICdMZWFybiBtb3JlJyxcbiAgICBocmVmICAgOiAnaHR0cHM6Ly93d3cuY29va2llc2FuZHlvdS5jb20nLFxuICAgIGNsb3NlICA6ICcmI3gyNzRjJyxcbiAgICB0YXJnZXQgOiAnX2JsYW5rJyxcbiAgICBwb2xpY3kgOiAnQ29va2llIFBvbGljeScsXG4gICAgc2F2ZSAgIDogJ1NhdmUnLFxuICAgIHNlbGVjdEFsbDogJ1NlbGVjdCBhbGwnXG4gIH0sXG5cbiAgLy8gVGhpcyBpcyB0aGUgSFRNTCBmb3IgdGhlIGVsZW1lbnRzIGFib3ZlLiBUaGUgc3RyaW5nIHt7aGVhZGVyfX0gd2lsbCBiZSByZXBsYWNlZCB3aXRoIHRoZSBlcXVpdmFsZW50IHRleHQgYmVsb3cuXG4gIC8vIFlvdSBjYW4gcmVtb3ZlIFwie3toZWFkZXJ9fVwiIGFuZCB3cml0ZSB0aGUgY29udGVudCBkaXJlY3RseSBpbnNpZGUgdGhlIEhUTUwgaWYgeW91IHdhbnQuXG4gIC8vXG4gIC8vICAtIEFSSUEgcnVsZXMgc3VnZ2VzdCB0byBlbnN1cmUgY29udHJvbHMgYXJlIHRhYmJhYmxlIChzbyB0aGUgYnJvd3NlciBjYW4gZmluZCB0aGUgZmlyc3QgY29udHJvbCksXG4gIC8vICAgIGFuZCB0byBzZXQgdGhlIGZvY3VzIHRvIHRoZSBmaXJzdCBpbnRlcmFjdGl2ZSBjb250cm9sIChodHRwczovL3czYy5naXRodWIuaW8vdXNpbmctYXJpYS8pXG4gIGVsZW1lbnRzOiB7XG4gICAgaGVhZGVyOiAnPHNwYW4gY2xhc3M9XCJjYy1oZWFkZXJcIj57e2hlYWRlcn19PC9zcGFuPiZuYnNwJyxcbiAgICBtZXNzYWdlOlxuICAgICAgJzxzcGFuIGlkPVwiY29va2llY29uc2VudDpkZXNjXCIgY2xhc3M9XCJjYy1tZXNzYWdlXCI+e3ttZXNzYWdlfX08L3NwYW4+JyxcbiAgICBtZXNzYWdlbGluazpcbiAgICAgICc8c3BhbiBpZD1cImNvb2tpZWNvbnNlbnQ6ZGVzY1wiIGNsYXNzPVwiY2MtbWVzc2FnZVwiPnt7bWVzc2FnZX19IDxhIGFyaWEtbGFiZWw9XCJsZWFybiBtb3JlIGFib3V0IGNvb2tpZXNcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWxpbmtcIiBocmVmPVwie3tocmVmfX1cIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyIG5vZm9sbG93XCIgdGFyZ2V0PVwie3t0YXJnZXR9fVwiPnt7bGlua319PC9hPjwvc3Bhbj4nLFxuICAgIGRpc21pc3M6XG4gICAgICBgPGEgYXJpYS1sYWJlbD1cImRpc21pc3MgY29va2llIG1lc3NhZ2VcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWJ0biBjYy0ke3N0YXR1c0Rpc21pc3N9XCI+e3tkaXNtaXNzfX08L2E+YCxcbiAgICBhbGxvdzpcbiAgICAgIGA8YSBhcmlhLWxhYmVsPVwiYWxsb3cgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiICBjbGFzcz1cImNjLWJ0biBjYy0ke3N0YXR1c0FsbG93fVwiPnt7YWxsb3d9fTwvYT5gLFxuICAgIGRlbnk6XG4gICAgICBgPGEgYXJpYS1sYWJlbD1cImRlbnkgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtYnRuIGNjLSR7c3RhdHVzRGVueX1cIj57e2Rlbnl9fTwvYT5gLFxuICAgIGxpbms6XG4gICAgICAnPGEgYXJpYS1sYWJlbD1cImxlYXJuIG1vcmUgYWJvdXQgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtbGlua1wiIGhyZWY9XCJ7e2hyZWZ9fVwiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXIgbm9mb2xsb3dcIiB0YXJnZXQ9XCJ7e3RhcmdldH19XCI+e3tsaW5rfX08L2E+JyxcbiAgICBjbG9zZTpcbiAgICAgICc8c3BhbiBhcmlhLWxhYmVsPVwiZGlzbWlzcyBjb29raWUgbWVzc2FnZVwiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtY2xvc2VcIj57e2Nsb3NlfX08L3NwYW4+JyxcbiAgICBjYXRlZ29yaWVzOiAnPHVsIGNsYXNzPVwiY2MtY2F0ZWdvcmllc1wiPnt7Y2F0ZWdvcmllc319PC91bD4nLFxuICAgIGNhdGVnb3J5OiBgPGxpIGNsYXNzPVwiY2MtY2F0ZWdvcnlcIj5cbiAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNjLWxhYmVsXCIgdGFiaW5kZXg9XCIwXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ7e2NhdGVnb3J5fX1cInt7Y2hlY2tlZH19e3tkaXNhYmxlZH19Lz57e2xhYmVsfX08L2xhYmVsPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1pbmZvXCIgYXJpYS1sYWJlbD1cInt7bmFtZX19XCIgdGFiaW5kZXg9XCJ7e2luZGV4fX1cIj48L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2MtdG9vbHRpcFwiPlxuICAgICAgICAgICAgPHA+e3t0b29sdGlwfX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+YCxcbiAgICBzYXZlQnRuOiBgPGJ1dHRvbiBuYW1lPVwic2F2ZVwiIGRhdGEtYWN0aW9uPVwic2F2ZVwiIGNsYXNzPVwiY2MtYnRuIGNjLXNhdmVcIj57e2xhYmVsfX08L2J1dHRvbj5gLFxuICAgIHNlbGVjdEFsbEJ0bjogYDxidXR0b24gbmFtZT1cInNlbGVjdEFsbEFuZFNhdmVcIiBkYXRhLWFjdGlvbj1cImNoZWNrQWxsQW5kU2F2ZVwiIGNsYXNzPVwiY2MtYnRuIGNjLXNlbGVjdC1hbGwgY2MtaGlnaGxpZ2h0IGNjLXNhdmVcIj57e2xhYmVsfX08L2J1dHRvbj5gLFxuICAgIC8vY29tcGxpYW5jZTogY29tcGxpYW5jZSBpcyBhbHNvIGFuIGVsZW1lbnQsIGJ1dCBpdCBpcyBnZW5lcmF0ZWQgYnkgdGhlIGFwcGxpY2F0aW9uLCBkZXBlbmRpbmcgb24gYHR5cGVgIGJlbG93XG4gIH0sXG5cbiAgLy8gVGhlIHBsYWNlaG9sZGVycyB7e2NsYXNzZXN9fSBhbmQge3tjaGlsZHJlbn19IGJvdGggZ2V0IHJlcGxhY2VkIGR1cmluZyBpbml0aWFsaXNhdGlvbjpcbiAgLy8gIC0ge3tjbGFzc2VzfX0gaXMgd2hlcmUgYWRkaXRpb25hbCBjbGFzc2VzIGdldCBhZGRlZFxuICAvLyAgLSB7e2NoaWxkcmVufX0gaXMgd2hlcmUgdGhlIEhUTUwgY2hpbGRyZW4gYXJlIHBsYWNlZFxuICB3aW5kb3c6XG4gICAgJzxkaXYgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiIGFyaWEtbGFiZWw9XCJjb29raWVjb25zZW50XCIgYXJpYS1kZXNjcmliZWRieT1cImNvb2tpZWNvbnNlbnQ6ZGVzY1wiIGNsYXNzPVwiY2Mtd2luZG93IHt7Y2xhc3Nlc319XCI+PCEtLWdvb2dsZW9mZjogYWxsLS0+e3tjaGlsZHJlbn19PCEtLWdvb2dsZW9uOiBhbGwtLT48L2Rpdj4nLFxuICBcbiAgbW9kYWw6ICcnLFxuXG4gIC8vIFRoaXMgaXMgdGhlIGh0bWwgZm9yIHRoZSByZXZva2UgYnV0dG9uLiBUaGlzIG9ubHkgc2hvd3MgdXAgYWZ0ZXIgdGhlIHVzZXIgaGFzIHNlbGVjdGVkIHRoZWlyIGxldmVsIG9mIGNvbnNlbnRcbiAgLy8gSXQgY2FuIGJlIGVuYWJsZWQgb2YgZGlzYWJsZWQgdXNpbmcgdGhlIGByZXZva2FibGVgIG9wdGlvblxuICByZXZva2VCdG46ICc8ZGl2IGRhdGEtYWN0aW9uPVwicmV2b2tlXCIgY2xhc3M9XCJjYy1yZXZva2Uge3tjbGFzc2VzfX1cIj57e3BvbGljeX19PC9kaXY+JyxcblxuICAvLyBkZWZpbmUgdHlwZXMgb2YgJ2NvbXBsaWFuY2UnIGhlcmUuICd7e3ZhbHVlfX0nIHN0cmluZ3MgaW4gaGVyZSBhcmUgbGlua2VkIHRvIGBlbGVtZW50c2BcbiAgY29tcGxpYW5jZToge1xuICAgIGluZm86ICAgICAgICc8ZGl2IGNsYXNzPVwiY2MtY29tcGxpYW5jZVwiPnt7ZGlzbWlzc319PC9kaXY+JyxcbiAgICAnb3B0LWluJzogICAnPGRpdiBjbGFzcz1cImNjLWNvbXBsaWFuY2VcIj57e2Rpc21pc3N9fXt7YWxsb3d9fXt7Y3VzdG9taXplfX08L2Rpdj4nLFxuICAgICdvcHQtb3V0JzogICc8ZGl2IGNsYXNzPVwiY2MtY29tcGxpYW5jZVwiPnt7ZGlzbWlzc319e3tkZW55fX08L2Rpdj4nLFxuICAgIGNhdGVnb3JpZXM6ICc8ZGl2IGNsYXNzPVwiZm9ybVwiPnt7Y2F0ZWdvcmllc319e3tzYXZlQnRufX17e3NlbGVjdEFsbEJ0bn19PC9kaXY+J1xuICB9LFxuXG4gIC8vIHNlbGVjdCB5b3VyIHR5cGUgb2YgcG9wdXAgaGVyZVxuICB0eXBlOiAnaW5mbycsIC8vIHJlZmVycyB0byBgY29tcGxpYW5jZWAgKGluIG90aGVyIHdvcmRzLCB0aGUgYnV0dG9ucyB0aGF0IGFyZSBkaXNwbGF5ZWQpXG5cbiAgLy8gZGVmaW5lIGxheW91dCBsYXlvdXRzIGhlcmVcbiAgbGF5b3V0czoge1xuICAgIC8vIHRoZSAnYmxvY2snIGxheW91dCB0ZW5kIHRvIGJlIGZvciBzcXVhcmUgZmxvYXRpbmcgcG9wdXBzXG4gICAgYmFzaWMgICAgICAgICA6ICd7e21lc3NhZ2VsaW5rfX17e2NvbXBsaWFuY2V9fScsXG4gICAgJ2Jhc2ljLWNsb3NlJyA6ICd7e21lc3NhZ2VsaW5rfX17e2NvbXBsaWFuY2V9fXt7Y2xvc2V9fScsXG4gICAgJ2Jhc2ljLWhlYWRlcic6ICd7e2hlYWRlcn19e3ttZXNzYWdlfX17e2xpbmt9fXt7Y29tcGxpYW5jZX19J1xuICAgIC8vIGFkZCBhIGN1c3RvbSBsYXlvdXQgaGVyZSwgdGhlbiBhZGQgc29tZSBuZXcgY3NzIHdpdGggdGhlIGNsYXNzICcuY2MtbGF5b3V0LW15LWNvb2wtbGF5b3V0J1xuICAgIC8vJ215LWNvb2wtbGF5b3V0JzogJzxkaXYgY2xhc3M9XCJteS1zcGVjaWFsLWxheW91dFwiPnt7bWVzc2FnZX19e3tjb21wbGlhbmNlfX08L2Rpdj57e2Nsb3NlfX0nLFxuICB9LFxuXG4gIC8vIGRlZmF1bHQgbGF5b3V0IChzZWUgYWJvdmUpXG4gIGxheW91dDogJ2Jhc2ljJyxcblxuICAvLyB0aGlzIHJlZmVycyB0byB0aGUgcG9wdXAgd2luZG93cyBwb3NpdGlvbi4gd2UgY3VycmVudGx5IHN1cHBvcnQ6XG4gIC8vICAtIGJhbm5lciBwb3NpdGlvbnM6IHRvcCwgYm90dG9tXG4gIC8vICAtIGZsb2F0aW5nIHBvc2l0aW9uczogdG9wLWxlZnQsIHRvcC1yaWdodCwgYm90dG9tLWxlZnQsIGJvdHRvbS1yaWdodFxuICAvL1xuICAvLyBhZGRzIGEgY2xhc3MgYGNjLWZsb2F0aW5nYCBvciBgY2MtYmFubmVyYCB3aGljaCBoZWxwcyB3aGVuIHN0eWxpbmdcbiAgcG9zaXRpb246ICdib3R0b20nLCAvLyBkZWZhdWx0IHBvc2l0aW9uIGlzICdib3R0b20nXG5cbiAgLy8gcmV2b2tlIGJ1dHRvbiBwb3NpdGlvblxuICByZXZva2VQb3NpdGlvbjogJ2JvdHRvbScsXG5cbiAgLy8gQXZhaWxhYmxlIHN0eWxlc1xuICAvLyAgICAtYmxvY2sgKGRlZmF1bHQsIG5vIGV4dHJhIGNsYXNzZXMpXG4gIC8vICAgIC1lZGdlbGVzc1xuICAvLyAgICAtY2xhc3NpY1xuICAvLyB1c2UgeW91ciBvd24gc3R5bGUgbmFtZSBhbmQgdXNlIGAuY2MtdGhlbWUtU1RZTEVOQU1FYCBjbGFzcyBpbiBDU1MgdG8gZWRpdC5cbiAgLy8gTm90ZTogc3R5bGUgXCJ3aXJlXCIgaXMgdXNlZCBmb3IgdGhlIGNvbmZpZ3VyYXRvciwgYnV0IGhhcyBubyBDU1Mgc3R5bGVzIG9mIGl0cyBvd24sIG9ubHkgcGFsZXR0ZSBpcyB1c2VkLlxuICB0aGVtZTogJ2Jsb2NrJyxcblxuICAvLyBUaGUgcG9wdXAgaXMgYGZpeGVkYCBieSBkZWZhdWx0LCBidXQgaWYgeW91IHdhbnQgaXQgdG8gYmUgc3RhdGljIChpbmxpbmUgd2l0aCB0aGUgcGFnZSBjb250ZW50KSwgc2V0IHRoaXMgdG8gZmFsc2VcbiAgLy8gTm90ZTogYnkgZGVmYXVsdCwgd2UgYW5pbWF0ZSB0aGUgaGVpZ2h0IG9mIHRoZSBwb3B1cCBmcm9tIDAgdG8gZnVsbCBzaXplXG4gIHN0YXRpYzogZmFsc2UsXG5cbiAgLy8gaWYgeW91IHdhbnQgY3VzdG9tIGNvbG91cnMsIHBhc3MgdGhlbSBpbiBoZXJlLiB0aGlzIG9iamVjdCBzaG91bGQgbG9vayBsaWtlIHRoaXMuXG4gIC8vIGlkZWFsbHksIGFueSBjdXN0b20gY29sb3Vycy90aGVtZXMgc2hvdWxkIGJlIGNyZWF0ZWQgaW4gYSBzZXBhcmF0ZSBzdHlsZSBzaGVldCwgYXMgdGhpcyBpcyBtb3JlIGVmZmljaWVudC5cbiAgLy8gICB7XG4gIC8vICAgICBwb3B1cDoge2JhY2tncm91bmQ6ICcjMDAwMDAwJywgdGV4dDogJyNmZmYnLCBsaW5rOiAnI2ZmZid9LFxuICAvLyAgICAgYnV0dG9uOiB7YmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JywgYm9yZGVyOiAnI2Y4ZTcxYycsIHRleHQ6ICcjZjhlNzFjJ30sXG4gIC8vICAgICBoaWdobGlnaHQ6IHtiYWNrZ3JvdW5kOiAnI2Y4ZTcxYycsIGJvcmRlcjogJyNmOGU3MWMnLCB0ZXh0OiAnIzAwMDAwMCd9LFxuICAvLyAgIH1cbiAgLy8gYGhpZ2hsaWdodGAgaXMgb3B0aW9uYWwgYW5kIGV4dGVuZHMgYGJ1dHRvbmAuXG4gIHBhbGV0dGU6IG51bGwsXG5cbiAgLy8gU29tZSBjb3VudHJpZXMgUkVRVUlSRSB0aGF0IGEgdXNlciBjYW4gY2hhbmdlIHRoZWlyIG1pbmQuIFlvdSBjYW4gY29uZmlndXJlIHRoaXMgeW91cnNlbGYuXG4gIC8vIE1vc3Qgb2YgdGhlIHRpbWUgdGhpcyBzaG91bGQgYmUgZmFsc2UsIGJ1dCB0aGUgYGNvb2tpZWNvbnNlbnQubGVnYWxgIGNhbiBjaGFuZ2UgdGhpcyB0byBgdHJ1ZWAgaWYgaXQgZGV0ZWN0cyB0aGF0IGl0IHNob3VsZFxuICByZXZva2FibGU6IGZhbHNlLFxuXG4gIC8vIGlmIHRydWUsIHRoZSByZXZva2FibGUgYnV0dG9uIHdpbGwgdHJhbmxhdGUgaW4gYW5kIG91dFxuICBhbmltYXRlUmV2b2thYmxlOiB0cnVlLFxuXG4gIC8vIHVzZWQgdG8gZGlzYWJsZSBsaW5rIG9uIGV4aXN0aW5nIGxheW91dHNcbiAgLy8gcmVwbGFjZXMgZWxlbWVudCBtZXNzYWdlbGluayB3aXRoIG1lc3NhZ2UgYW5kIHJlbW92ZXMgY29udGVudCBvZiBsaW5rXG4gIHNob3dMaW5rOiB0cnVlLFxuXG4gIC8vIHNldCB2YWx1ZSBhcyBzY3JvbGwgcmFuZ2UgdG8gZW5hYmxlXG4gIGRpc21pc3NPblNjcm9sbDogZmFsc2UsXG5cbiAgLy8gc2V0IHZhbHVlIGFzIHRpbWUgaW4gbWlsbGlzZWNvbmRzIHRvIGF1dG9kaXNtaXNzIGFmdGVyIHNldCB0aW1lXG4gIGRpc21pc3NPblRpbWVvdXQ6IGZhbHNlLFxuXG4gIC8vIHNldCB2YWx1ZSBhcyBjbGljayBhbnl0aGluZyBvbiB0aGUgcGFnZSwgZXhjbHVkaW5nIHRoZSBgaWdub3JlQ2xpY2tzRnJvbWAgYmVsb3cgKGlmIHdlIGNsaWNrIG9uIHRoZSByZXZva2UgYnV0dG9uIGV0YylcbiAgZGlzbWlzc09uV2luZG93Q2xpY2s6IGZhbHNlLFxuXG4gIC8vIHNldCB2YWx1ZSBhcyBjbGljayBhbnl0aGluZyBvbiB0aGUgcGFnZSwgZXhjbHVkaW5nIHRoZSBgaWdub3JlQ2xpY2tzRnJvbWAgYmVsb3cgKGlmIHdlIGNsaWNrIG9uIHRoZSByZXZva2UgYnV0dG9uIGV0YylcbiAgZGlzbWlzc09uTGlua0NsaWNrOiBmYWxzZSxcblxuICAvLyBzZXQgdmFsdWUgYXMga2V5cyBhcmUgcHJlc3NlZCwgKCBhbGxvd0tleUNvZGUgPSAxMywgZGVueUtleUNvZGUgPSAyNyApXG4gIGRpc21pc3NPbktleVByZXNzOiBmYWxzZSxcblxuICAvLyBJZiBgZGlzbWlzc09uV2luZG93Q2xpY2tgIGlzIHRydWUsIHdlIGNhbiBjbGljayBvbiAncmV2b2tlJyBhbmQgd2UnbGwgc3RpbGwgZGlzbWlzcyB0aGUgYmFubmVyLCBzbyB3ZSBuZWVkIGV4Y2VwdGlvbnMuXG4gIC8vIHNob3VsZCBiZSBhbiBhcnJheSBvZiBjbGFzcyBuYW1lcyAobm90IENTUyBzZWxlY3RvcnMpXG4gIGlnbm9yZUNsaWNrc0Zyb206IFsnY2MtcmV2b2tlJywgJ2NjLWJ0bicsICdjYy1saW5rJ10sIC8vIGFscmVhZHkgaW5jbHVkZXMgdGhlIHJldm9rZSBidXR0b24gYW5kIHRoZSBiYW5uZXIgaXRzZWxmXG5cbiAgLy8gVGhlIGFwcGxpY2F0aW9uIGF1dG9tYXRpY2FsbHkgZGVjaWRlIHdoZXRoZXIgdGhlIHBvcHVwIHNob3VsZCBvcGVuLlxuICAvLyBTZXQgdGhpcyB0byBmYWxzZSB0byBwcmV2ZW50IHRoaXMgZnJvbSBoYXBwZW5pbmcgYW5kIHRvIGFsbG93IHlvdSB0byBjb250cm9sIHRoZSBiZWhhdmlvdXIgeW91cnNlbGZcbiAgYXV0b09wZW46IHRydWUsXG5cbiAgLy8gQnkgZGVmYXVsdCB0aGUgY3JlYXRlZCBIVE1MIGlzIGF1dG9tYXRpY2FsbHkgYXBwZW5kZWQgdG8gdGhlIGNvbnRhaW5lciAod2hpY2ggZGVmYXVsdHMgdG8gPGJvZHk+KS4gWW91IGNhbiBwcmV2ZW50IHRoaXMgYmVoYXZpb3VyXG4gIC8vIGJ5IHNldHRpbmcgdGhpcyB0byBmYWxzZSwgYnV0IGlmIHlvdSBkbywgeW91IG11c3QgYXR0YWNoIHRoZSBgZWxlbWVudGAgeW91cnNlbGYsIHdoaWNoIGlzIGEgcHVibGljIHByb3BlcnR5IG9mIHRoZSBwb3B1cCBpbnN0YW5jZTpcbiAgLy9cbiAgLy8gICAgIGNvbnN0IGluc3RhbmNlID0gY29va2llY29uc2VudC5mYWN0b3J5KG9wdGlvbnMpXG4gIC8vICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGluc3RhbmNlLmVsZW1lbnQpXG4gIC8vXG4gIGF1dG9BdHRhY2g6IHRydWUsXG5cbiAgLy8gc2V0IHZhbHVlIGlmIGZsb2F0aW5nIGxheW91dCBzaG91bGQgYmUgZm9yY2VkIGZvciBtb2JpbGUgZGV2aWNlc1xuICBtb2JpbGVGb3JjZUZsb2F0OiB0cnVlLFxuXG4gIC8vIHNpbXBsZSB3aGl0ZWxpc3QvYmxhY2tsaXN0IGZvciBwYWdlcy4gc3BlY2lmeSBwYWdlIGJ5OlxuICAvLyAgIC0gdXNpbmcgYSBzdHJpbmcgOiAnL2luZGV4Lmh0bWwnICAgICAgICAgICAobWF0Y2hlcyAnL2luZGV4Lmh0bWwnIGV4YWN0bHkpIE9SXG4gIC8vICAgLSB1c2luZyBSZWdFeHAgICA6IC9cXC9wYWdlX1tcXGRdK1xcLmh0bWwvICAgIChtYXRjaGVkICcvcGFnZV8xLmh0bWwnIGFuZCAnL3BhZ2VfMi5odG1sJyBldGMpXG4gIHdoaXRlbGlzdFBhZ2U6IFtdLFxuICBibGFja2xpc3RQYWdlOiBbXSxcblxuICAvLyBJZiB0aGlzIGlzIGRlZmluZWQsIHRoZW4gaXQgaXMgdXNlZCBhcyB0aGUgaW5uZXIgaHRtbCBpbnN0ZWFkIG9mIGxheW91dC4gVGhpcyBhbGxvd3MgZm9yIHVsdGltYXRlIGN1c3RvbWlzYXRpb24uXG4gIC8vIEJlIHN1cmUgdG8gdXNlIHRoZSBjbGFzc2VzIGBjYy1idG5gIGFuZCBgY2MtQUxMT1dgLCBgY2MtREVOWWAgb3IgYGNjLURJU01JU1NgLiBUaGV5IGVuYWJsZSB0aGUgYXBwIHRvIHJlZ2lzdGVyIGNsaWNrXG4gIC8vIGhhbmRsZXJzLiBZb3UgY2FuIHVzZSBvdGhlciBwcmUtZXhpc3RpbmcgY2xhc3NlcyB0b28uIFNlZSBgc3JjL3N0eWxlc2AgZm9sZGVyLlxuICBvdmVycmlkZUhUTUw6IG51bGwsXG5cblxuICBjYXRlZ29yaWVzIDoge1xuICAgIHVuY2F0ZWdvcml6ZWQ6IHtcbiAgICAgIGxhYmVsOiAnVW5jYXRlZ29yaXplZCcsXG4gICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgdG9vbHRpcDogJydcbiAgICB9LFxuICAgIGVzc2VudGlhbDoge1xuICAgICAgbGFiZWw6ICdFc3NlbnRpYWwnLFxuICAgICAgcHJlc2VsZWN0ZWQ6IHRydWUsXG4gICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgdG9vbHRpcDogJ1RoZXNlIGNvb2tpZXMgYXJlIHJlcXVpcmVkIGZvciB0aGUgb3BlcmF0aW9uIG9mIHRoaXMgd2Vic2l0ZS4nXG4gICAgfSxcbiAgICBwZXJzb25hbGl6YXRpb246IHtcbiAgICAgIGxhYmVsOiAnUGVyc29uYWxpemF0aW9uJyxcbiAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICB0b29sdGlwOiAnVGhlc2UgY29va2llcyBhcmUgcmVxdWlyZWQgZm9yIHRoZSBwZXJzb25hbCBhZGFwdGF0aW9uIG9mIHRoaXMgd2Vic2l0ZS4nXG4gICAgfSxcbiAgICBhbmFseXRpY3M6IHtcbiAgICAgIGxhYmVsOiAnQW5hbHl0aWNzJyxcbiAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgIG1hbmRhdG9yeTogZmFsc2UsXG4gICAgICB0b29sdGlwOiAnVGhlc2UgY29va2llcyBoZWxwIHVzIHRvIGltcHJvdmUgb3VyIHdlYnNpdGUuJ1xuICAgIH0sXG4gICAgbWFya2V0aW5nOiB7XG4gICAgICBsYWJlbDogJ01hcmtldGluZycsXG4gICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICBtYW5kYXRvcnk6IGZhbHNlLFxuICAgICAgdG9vbHRpcDogJ1RoZXNlIGNvb2tpZXMgaGVscCB1cyB0byBpbXByb3ZlIG91ciB3ZWJzaXRlLidcbiAgICB9XG4gIH0sXG5cbn0iLCJcInVzZSBzdHJpY3RcIlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8vIE1ha2UgdGhpcyBmYWxzZSBpZiB5b3Ugd2FudCB0byBkaXNhYmxlIGFsbCByZWdpb25hbCBvdmVycmlkZXMgZm9yIHNldHRpbmdzLlxuICAvLyBJZiB0cnVlLCBvcHRpb25zIGNhbiBkaWZmZXIgYnkgY291bnRyeSwgZGVwZW5kaW5nIG9uIHRoZWlyIGNvb2tpZSBsYXcuXG4gIC8vIEl0IGRvZXMgbm90IGFmZmVjdCBoaWRpbmcgdGhlIHBvcHVwIGZvciBjb3VudHJpZXMgdGhhdCBkbyBub3QgaGF2ZSBjb29raWUgbGF3LlxuICByZWdpb25hbExhdzogdHJ1ZSxcblxuICAvLyBjb3VudHJpZXMgdGhhdCBlbmZvcmNlIHNvbWUgdmVyc2lvbiBvZiBhIGNvb2tpZSBsYXdcbiAgaGFzTGF3OiBbXG4gICAgJ0FUJyxcbiAgICAnQkUnLFxuICAgICdCRycsXG4gICAgJ0hSJyxcbiAgICAnQ1onLFxuICAgICdDWScsXG4gICAgJ0RLJyxcbiAgICAnRUUnLFxuICAgICdGSScsXG4gICAgJ0ZSJyxcbiAgICAnREUnLFxuICAgICdFTCcsXG4gICAgJ0hVJyxcbiAgICAnSUUnLFxuICAgICdJVCcsXG4gICAgJ0xWJyxcbiAgICAnTFQnLFxuICAgICdMVScsXG4gICAgJ01UJyxcbiAgICAnTkwnLFxuICAgICdOTycsXG4gICAgJ1BMJyxcbiAgICAnUFQnLFxuICAgICdTSycsXG4gICAgJ0VTJyxcbiAgICAnU0UnLFxuICAgICdHQicsXG4gICAgJ1VLJyxcbiAgICAnR1InLFxuICAgICdFVScsXG4gICAgJ1JPJ1xuICBdLFxuXG4gIC8vIGNvdW50cmllcyB0aGF0IHNheSB0aGF0IGFsbCBjb29raWUgY29uc2VudCBjaG9pY2VzIG11c3QgYmUgcmV2b2thYmxlIChhIHVzZXIgbXVzdCBiZSBhYmxlIHRvbyBjaGFuZ2UgdGhlaXIgbWluZClcbiAgcmV2b2thYmxlOiBbXG4gICAgJ0hSJyxcbiAgICAnQ1knLFxuICAgICdESycsXG4gICAgJ0VFJyxcbiAgICAnRlInLFxuICAgICdERScsXG4gICAgJ0xWJyxcbiAgICAnTFQnLFxuICAgICdOTCcsXG4gICAgJ05PJyxcbiAgICAnUFQnLFxuICAgICdFUydcbiAgXSxcblxuICAvLyBjb3VudHJpZXMgdGhhdCBzYXkgdGhhdCBhIHBlcnNvbiBjYW4gb25seSBcImNvbnNlbnRcIiBpZiB0aGUgZXhwbGljaXRseSBjbGljayBvbiBcIkkgYWdyZWVcIi5cbiAgLy8gaW4gdGhlc2UgY291bnRyaWVzLCBjb25zZW50IGNhbm5vdCBiZSBpbXBsaWVkIHZpYSBhIHRpbWVvdXQgb3IgYnkgc2Nyb2xsaW5nIGRvd24gdGhlIHBhZ2VcbiAgZXhwbGljaXRBY3Rpb246IFsnSFInLCAnSVQnLCAnRVMnLCAnTk8nXVxufSIsIlwidXNlIHN0cmljdFwiXG5cbmNvbnN0IHRvRXJyb3IgPSBvYmogPT4gbmV3IEVycm9yKCdFcnJvciBbJyArIChvYmouY29kZSB8fCAnVU5LTk9XTicpICsgJ106ICcgKyBvYmouZXJyb3IpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gVGhlIGRlZmF1bHQgdGltZW91dCBpcyA1IHNlY29uZHMuIFRoaXMgaXMgbWFpbmx5IG5lZWRlZCB0byBjYXRjaCBKU09OUCByZXF1ZXN0cyB0aGF0IGVycm9yLlxuICAvLyBPdGhlcndpc2UgdGhlcmUgaXMgbm8gZWFzeSB3YXkgdG8gY2F0Y2ggSlNPTlAgZXJyb3JzLiBUaGF0IG1lYW5zIHRoYXQgaWYgYSBKU09OUCBmYWlscywgdGhlXG4gIC8vIGFwcCB3aWxsIHRha2UgYHRpbWVvdXRgIG1pbGxpc2Vjb25kcyB0byByZWFjdCB0byBhIEpTT05QIG5ldHdvcmsgZXJyb3IuXG4gIHRpbWVvdXQ6IDUwMDAsXG5cbiAgLy8gdGhlIG9yZGVyIHRoYXQgc2VydmljZXMgd2lsbCBiZSBhdHRlbXB0ZWQgaW5cbiAgc2VydmljZXM6IFtcbiAgICAnaXBpbmZvJ1xuXG4gICAgLypcblxuICAgIC8vICdpcGluZm9kYicgcmVxdWlyZXMgc29tZSBvcHRpb25zLCBzbyB3ZSBkZWZpbmUgaXQgdXNpbmcgYW4gb2JqZWN0XG4gICAgLy8gdGhpcyBvYmplY3Qgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyB0aGUgc2VydmljZVxuXG4gICAge1xuICAgICAgbmFtZTogJ2lwaW5mb2RiJyxcbiAgICAgIGludGVycG9sYXRlVXJsOiB7XG4gICAgICAgIC8vIG9idmlvdXNseSwgdGhpcyBpcyBhIGZha2Uga2V5XG4gICAgICAgIGFwaV9rZXk6ICd2T2dJMzc0OGRuSXl0SXJzSmN4Uzdxc0RmNmtiSmtFOWxONHlFRHJYQXFYY0tVTnZqalpQb3gzZWtYcW1NTWxkJ1xuICAgICAgfSxcbiAgICB9LFxuXG4gICAgLy8gYXMgd2VsbCBhcyBkZWZpbmluZyBhbiBvYmplY3QsIHlvdSBjYW4gZGVmaW5lIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIG9iamVjdFxuXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtuYW1lOiAnaXBpbmZvZGInfVxuICAgIH0sXG5cbiAgICAqL1xuICBdLFxuXG4gIHNlcnZpY2VEZWZpbml0aW9uczoge1xuICAgIGlwaW5mbzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAvLyBUaGlzIHNlcnZpY2UgcmVzcG9uZHMgd2l0aCBKU09OLCBzbyB3ZSBzaW1wbHkgbmVlZCB0byBwYXJzZSBpdCBhbmQgcmV0dXJuIHRoZSBjb3VudHJ5IGNvZGVcbiAgICAgICAgdXJsOiAnLy9pcGluZm8uaW8nLFxuICAgICAgICBoZWFkZXJzOiBbJ0FjY2VwdDogYXBwbGljYXRpb24vanNvbiddLFxuICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oZG9uZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UocmVzcG9uc2UpXG4gICAgICAgICAgICByZXR1cm4ganNvbi5lcnJvclxuICAgICAgICAgICAgICA/IHRvRXJyb3IoanNvbilcbiAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICBjb2RlOiBqc29uLmNvdW50cnlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9FcnJvcih7ZXJyb3I6ICdJbnZhbGlkIHJlc3BvbnNlICgnICsgZXJyICsgJyknfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gVGhpcyBzZXJ2aWNlIHJlcXVpcmVzIGFuIG9wdGlvbiB0byBkZWZpbmUgYGtleWAuIE9wdGlvbnMgYXJlIHByb2l2ZWQgdXNpbmcgb2JqZWN0cyBvciBmdW5jdGlvbnNcbiAgICBpcGluZm9kYjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAvLyBUaGlzIHNlcnZpY2UgcmVzcG9uZHMgd2l0aCBKU09OLCBzbyB3ZSBzaW1wbHkgbmVlZCB0byBwYXJzZSBpdCBhbmQgcmV0dXJuIHRoZSBjb3VudHJ5IGNvZGVcbiAgICAgICAgdXJsOlxuICAgICAgICAgICcvL2FwaS5pcGluZm9kYi5jb20vdjMvaXAtY291bnRyeS8/a2V5PXthcGlfa2V5fSZmb3JtYXQ9anNvbiZjYWxsYmFjaz17Y2FsbGJhY2t9JyxcbiAgICAgICAgaXNTY3JpcHQ6IHRydWUsIC8vIHRoaXMgaXMgSlNPTlAsIHRoZXJlZm9yZSB3ZSBtdXN0IHNldCBpdCB0byBydW4gYXMgYSBzY3JpcHRcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGRvbmUsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHJlc3BvbnNlKVxuICAgICAgICAgICAgcmV0dXJuIGpzb24uc3RhdHVzQ29kZSA9PSAnRVJST1InXG4gICAgICAgICAgICAgID8gdG9FcnJvcih7ZXJyb3I6IGpzb24uc3RhdHVzTWVzc2FnZX0pXG4gICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgY29kZToganNvbi5jb3VudHJ5Q29kZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiB0b0Vycm9yKHtlcnJvcjogJ0ludmFsaWQgcmVzcG9uc2UgKCcgKyBlcnIgKyAnKSd9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBtYXhtaW5kOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC8vIFRoaXMgc2VydmljZSByZXNwb25kcyB3aXRoIGEgSmF2YVNjcmlwdCBmaWxlIHdoaWNoIGRlZmluZXMgYWRkaXRpb25hbCBmdW5jdGlvbmFsaXR5LiBPbmNlIGxvYWRlZCwgd2UgbXVzdFxuICAgICAgICAvLyBtYWtlIGFuIGFkZGl0aW9uYWwgQUpBWCBjYWxsLiBUaGVyZWZvcmUgd2UgcHJvdmlkZSBhIGBkb25lYCBjYWxsYmFjayB0aGF0IGNhbiBiZSBjYWxsZWQgYXN5bmNocm9ub3VzbHlcbiAgICAgICAgdXJsOiAnLy9qcy5tYXhtaW5kLmNvbS9qcy9hcGlzL2dlb2lwMi92Mi4xL2dlb2lwMi5qcycsXG4gICAgICAgIGlzU2NyaXB0OiB0cnVlLCAvLyB0aGlzIHNlcnZpY2UgcmVzcG9uZHMgd2l0aCBhIEphdmFTY3JpcHQgZmlsZSwgc28gaXQgbXVzdCBiZSBydW4gYXMgYSBzY3JpcHRcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGRvbmUpIHtcbiAgICAgICAgICAvLyBpZiBldmVyeXRoaW5nIHdlbnQgb2theSB0aGVuIGBnZW9pcDJgIFdJTEwgYmUgZGVmaW5lZFxuICAgICAgICAgIGlmICghd2luZG93Lmdlb2lwMikge1xuICAgICAgICAgICAgZG9uZShcbiAgICAgICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICdVbmV4cGVjdGVkIHJlc3BvbnNlIGZvcm1hdC4gVGhlIGRvd25sb2FkZWQgc2NyaXB0IHNob3VsZCBoYXZlIGV4cG9ydGVkIGBnZW9pcDJgIHRvIHRoZSBnbG9iYWwgc2NvcGUnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIGdlb2lwMi5jb3VudHJ5KFxuICAgICAgICAgICAgZnVuY3Rpb24obG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBkb25lKHtcbiAgICAgICAgICAgICAgICAgIGNvZGU6IGxvY2F0aW9uLmNvdW50cnkuaXNvX2NvZGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBkb25lKHRvRXJyb3IoZXJyKSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICBkb25lKHRvRXJyb3IoZXJyKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG5cbiAgICAgICAgICAvLyBXZSBjYW4ndCByZXR1cm4gYW55dGhpbmcsIGJlY2F1c2Ugd2UgbmVlZCB0byB3YWl0IGZvciB0aGUgc2Vjb25kIEFKQVggY2FsbCB0byByZXR1cm4uXG4gICAgICAgICAgLy8gVGhlbiB3ZSBjYW4gJ2NvbXBsZXRlJyB0aGUgc2VydmljZSBieSBwYXNzaW5nIGRhdGEgb3IgYW4gZXJyb3IgdG8gdGhlIGBkb25lYCBjYWxsYmFjay5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi9tYWluLnNjc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuZXhwb3J0IGNvbnN0IGdldFNjcmlwdCA9ICggdXJsLCBjYWxsYmFjaywgdGltZW91dCApID0+IHtcbiAgbGV0IHRpbWVvdXRJZHhcbiAgY29uc3Qgc2NyaXB0VGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICBzY3JpcHRUYWcudHlwZSA9ICd0ZXh0LycgKyAodXJsLnR5cGUgfHwgJ2phdmFzY3JpcHQnKVxuICBzY3JpcHRUYWcuc3JjID0gdXJsLnNyYyB8fCB1cmxcbiAgc2NyaXB0VGFnLmFzeW5jID0gZmFsc2VcblxuICBzY3JpcHRUYWcub25yZWFkeXN0YXRlY2hhbmdlID0gcy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyB0aGlzIGNvZGUgaGFuZGxlcyB0d28gc2NlbmFyaW9zLCB3aGV0aGVyIGNhbGxlZCBieSBvbmxvYWQgb3Igb25yZWFkeXN0YXRlY2hhbmdlXG4gICAgY29uc3Qgc3RhdGUgPSBzY3JpcHRUYWcucmVhZHlTdGF0ZVxuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZHgpXG5cbiAgICBpZiAoIWNhbGxiYWNrLmRvbmUgJiYgKCFzdGF0ZSB8fCAvbG9hZGVkfGNvbXBsZXRlLy50ZXN0KHN0YXRlKSkpIHtcbiAgICAgIGNhbGxiYWNrLmRvbmUgPSB0cnVlXG4gICAgICBjYWxsYmFjaygpXG4gICAgICBzY3JpcHRUYWcub25yZWFkeXN0YXRlY2hhbmdlID0gc2NyaXB0VGFnLm9ubG9hZCA9IG51bGxcbiAgICB9XG4gIH1cblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdFRhZylcblxuICAvLyBZb3UgY2FuJ3QgY2F0Y2ggSlNPTlAgRXJyb3JzLCBiZWNhdXNlIGl0J3MgaGFuZGxlZCBieSB0aGUgc2NyaXB0IHRhZ1xuICAvLyBvbmUgd2F5IGlzIHRvIHVzZSBhIHRpbWVvdXRcbiAgdGltZW91dElkeCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgY2FsbGJhY2suZG9uZSA9IHRydWVcbiAgICBjYWxsYmFjaygpXG4gICAgc2NyaXB0VGFnLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHNjcmlwdFRhZy5vbmxvYWQgPSBudWxsXG4gIH0sIHRpbWVvdXQpXG59XG5cbmV4cG9ydCBjb25zdCBtYWtlQXN5bmNSZXF1ZXN0ID0gKCB1cmwsIG9uQ29tcGxldGUsIHRpbWVvdXQsIHBvc3REYXRhLCByZXF1ZXN0SGVhZGVycyApID0+IHtcbiAgY29uc3QgeGhyID0gbmV3ICh3aW5kb3cuWE1MSHR0cFJlcXVlc3QgfHwgd2luZG93LkFjdGl2ZVhPYmplY3QpKFxuICAgICdNU1hNTDIuWE1MSFRUUC4zLjAnXG4gIClcblxuICB4aHIub3Blbihwb3N0RGF0YSA/ICdQT1NUJyA6ICdHRVQnLCB1cmwsIDEpXG5cbiAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShyZXF1ZXN0SGVhZGVycykpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHJlcXVlc3RIZWFkZXJzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgY29uc3Qgc3BsaXQgPSByZXF1ZXN0SGVhZGVyc1tpXS5zcGxpdCgnOicsIDIpXG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcbiAgICAgICAgc3BsaXRbMF0ucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpLFxuICAgICAgICBzcGxpdFsxXS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIG9uQ29tcGxldGUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA+IDMpIHtcbiAgICAgICAgb25Db21wbGV0ZSh4aHIpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgeGhyLnNlbmQocG9zdERhdGEpXG59IiwiXCJ1c2Ugc3RyaWN0XCJcblxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IG5hbWUgPT4ge1xuICBjb25zdCB2YWx1ZSA9ICcgJyArIGRvY3VtZW50LmNvb2tpZVxuICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KCcgJyArIG5hbWUgKyAnPScpXG4gIHJldHVybiBwYXJ0cy5sZW5ndGggPCAyXG4gICAgPyB1bmRlZmluZWRcbiAgICA6IHBhcnRzXG4gICAgICAgIC5wb3AoKVxuICAgICAgICAuc3BsaXQoJzsnKVxuICAgICAgICAuc2hpZnQoKVxufVxuXG5leHBvcnQgY29uc3Qgc2V0Q29va2llID0gZnVuY3Rpb24gKCBuYW1lLCB2YWx1ZSwgZXhwaXJ5RGF5cywgZG9tYWluLCBwYXRoLCBzZWN1cmUgKSB7XG4gIGNvbnN0IGV4ZGF0ZSA9IG5ldyBEYXRlKClcbiAgZXhkYXRlLnNldEhvdXJzKGV4ZGF0ZS5nZXRIb3VycygpICsgKCh0eXBlb2YgZXhwaXJ5RGF5cyAhPT0gXCJudW1iZXJcIiAgPyAzNjUgOiBleHBpcnlEYXlzICkgKiAyNCkpXG4gIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyAnPScgKyB2YWx1ZSArXG4gICAgICAgICAgICAgICAgICAgICc7ZXhwaXJlcz0nICsgZXhkYXRlLnRvVVRDU3RyaW5nKCkgK1xuICAgICAgICAgICAgICAgICAgICAnO3BhdGg9JyArIChwYXRoIHx8ICcvJykgK1xuICAgICAgICAgICAgICAgICAgICAoIGRvbWFpbiA/ICc7ZG9tYWluPScgKyBkb21haW4gOiAnJyApICtcbiAgICAgICAgICAgICAgICAgICAgKCBzZWN1cmUgPyAnO3NlY3VyZScgOiAnJyApXG59IiwiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IHsgZ2V0Q29udHJhc3QsIGdldEhvdmVyQ29sb3IgfSBmcm9tICcuL3N0eWxlJ1xuXG5leHBvcnQgY29uc3QgdHJhdmVyc2VET01QYXRoID0gKCBlbGVtLCBjbGFzc05hbWUgKSA9PlxuICAhZWxlbSB8fCAhZWxlbS5wYXJlbnROb2RlXG4gID8gbnVsbCA6IGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSlcbiAgPyBlbGVtIDogdHJhdmVyc2VET01QYXRoKGVsZW0ucGFyZW50Tm9kZSwgY2xhc3NOYW1lKVxuXG5leHBvcnQgY29uc3QgYWRkQ3VzdG9tU3R5bGVzaGVldCA9IChpZCwgcGFsZXR0ZSwgcHJlZml4KSA9PiB7XG4gIGNvbnN0IGNvbG9yU3R5bGVzID0ge31cbiAgY29uc3QgeyBwb3B1cCwgYnV0dG9uLCBoaWdobGlnaHQsIHNhdmVCdXR0b24gfSA9IHBhbGV0dGVcblxuICAvLyBuZWVkcyBiYWNrZ3JvdW5kIGNvbG91ciwgdGV4dCBhbmQgbGluayB3aWxsIGJlIHNldCB0byBibGFjay93aGl0ZSBpZiBub3Qgc3BlY2lmaWVkXG4gIGlmIChwb3B1cCkge1xuICAgICAgLy8gYXNzdW1lcyBwb3B1cC5iYWNrZ3JvdW5kIGlzIHNldFxuICAgICAgcG9wdXAudGV4dCA9IHBvcHVwLnRleHQgPyBwb3B1cC50ZXh0IDogZ2V0Q29udHJhc3QocG9wdXAuYmFja2dyb3VuZClcbiAgICAgIHBvcHVwLmxpbmsgPSBwb3B1cC5saW5rID8gcG9wdXAubGluayA6IHBvcHVwLnRleHRcbiAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLXRvb2x0aXAsICcgKyBwcmVmaXggKyAnIC5jYy10b29sdGlwOmFmdGVyJ10gPSBbXG4gICAgICAgICAgJ2NvbG9yOiAnICsgcG9wdXAudGV4dCxcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIHBvcHVwLmJhY2tncm91bmQsXG4gICAgICBdXG4gICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnLmNjLXdpbmRvdyddID0gW1xuICAgICAgICAgICdjb2xvcjogJyArIHBvcHVwLnRleHQsXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBwb3B1cC5iYWNrZ3JvdW5kLFxuICAgICAgXVxuICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJy5jYy1yZXZva2UnXSA9IFtcbiAgICAgICAgICAnY29sb3I6ICcgKyBwb3B1cC50ZXh0LFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgcG9wdXAuYmFja2dyb3VuZCxcbiAgICAgIF1cbiAgICAgIGNvbG9yU3R5bGVzW1xuICAgICAgICAgIHByZWZpeCArICcgLmNjLWxpbmssJyArIHByZWZpeCArICcgLmNjLWxpbms6YWN0aXZlLCcgKyBwcmVmaXggKyAnIC5jYy1saW5rOnZpc2l0ZWQnXG4gICAgICBdID0gWydjb2xvcjogJyArIHBvcHVwLmxpbmtdXG5cbiAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgICAvLyBhc3N1bWVzIGJ1dHRvbi5iYWNrZ3JvdW5kIGlzIHNldFxuICAgICAgICAgIGJ1dHRvbi50ZXh0ID0gYnV0dG9uLnRleHQgPyBidXR0b24udGV4dCA6IGdldENvbnRyYXN0KGJ1dHRvbi5iYWNrZ3JvdW5kKTtcbiAgICAgICAgICBidXR0b24uYm9yZGVyID0gYnV0dG9uLmJvcmRlciA/IGJ1dHRvbi5ib3JkZXIgOiAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWJ0biddID0gW1xuICAgICAgICAgICAgICAnY29sb3I6ICcgKyBidXR0b24udGV4dCxcbiAgICAgICAgICAgICAgJ2JvcmRlci1jb2xvcjogJyArIGJ1dHRvbi5ib3JkZXIsXG4gICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgYnV0dG9uLmJhY2tncm91bmQsXG4gICAgICAgICAgXVxuXG4gICAgICAgICAgaWYgKGJ1dHRvbi5wYWRkaW5nKSB7XG4gICAgICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWJ0biddLnB1c2goJ3BhZGRpbmc6ICcgKyBidXR0b24ucGFkZGluZyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGJ1dHRvbi5iYWNrZ3JvdW5kICE9ICd0cmFuc3BhcmVudCcpIHtcbiAgICAgICAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtYnRuOmhvdmVyLCAnICsgcHJlZml4ICsgJyAuY2MtYnRuOmZvY3VzJ10gPSBbXG4gICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIChidXR0b24uaG92ZXIgfHwgZ2V0SG92ZXJDb2xvcihidXR0b24uYmFja2dyb3VuZCkpLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGhpZ2hsaWdodCkge1xuICAgICAgICAgICAgICAvL2Fzc3VtZXMgaGlnaGxpZ2h0LmJhY2tncm91bmQgaXMgc2V0XG4gICAgICAgICAgICAgIGhpZ2hsaWdodC50ZXh0ID0gaGlnaGxpZ2h0LnRleHRcbiAgICAgICAgICAgICAgICAgID8gaGlnaGxpZ2h0LnRleHRcbiAgICAgICAgICAgICAgICAgIDogZ2V0Q29udHJhc3QoaGlnaGxpZ2h0LmJhY2tncm91bmQpO1xuICAgICAgICAgICAgICBoaWdobGlnaHQuYm9yZGVyID0gaGlnaGxpZ2h0LmJvcmRlciA/IGhpZ2hsaWdodC5ib3JkZXIgOiAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1oaWdobGlnaHQnXSA9IFtcbiAgICAgICAgICAgICAgICAgICdjb2xvcjogJyArIGhpZ2hsaWdodC50ZXh0LFxuICAgICAgICAgICAgICAgICAgJ2JvcmRlci1jb2xvcjogJyArIGhpZ2hsaWdodC5ib3JkZXIsXG4gICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIGhpZ2hsaWdodC5iYWNrZ3JvdW5kLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gc2V0cyBoaWdobGlnaHQgdGV4dCBjb2xvciB0byBwb3B1cCB0ZXh0LiBiYWNrZ3JvdW5kIGFuZCBib3JkZXIgYXJlIHRyYW5zcGFyZW50IGJ5IGRlZmF1bHQuXG4gICAgICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkJ10gPSBbXG4gICAgICAgICAgICAgICAgICAnY29sb3I6ICcgKyBwb3B1cC50ZXh0LFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc2F2ZUJ1dHRvbikge1xuICAgICAgICAgIGNvbG9yU3R5bGVzW2Ake3ByZWZpeH0gLmNjLWJ0bi5jYy1zYXZlYF0gPSBbXG4gICAgICAgICAgICAgICdjb2xvcjogJyArIHNhdmVCdXR0b24udGV4dCxcbiAgICAgICAgICAgICAgJ2JvcmRlci1jb2xvcjogJyArIHNhdmVCdXR0b24uYm9yZGVyLFxuICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIHNhdmVCdXR0b24uYmFja2dyb3VuZCxcbiAgICAgICAgICBdXG4gICAgICB9XG4gIH1cblxuICAvLyB0aGlzIHdpbGwgYmUgaW50ZXJwcmV0dGVkIGFzIENTUy4gdGhlIGtleSBpcyB0aGUgc2VsZWN0b3IsIGFuZCBlYWNoIGFycmF5IGVsZW1lbnQgaXMgYSBydWxlXG4gIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZS5pZCA9IGlkXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoIHN0eWxlIClcbiAgT2JqZWN0LmVudHJpZXMoIGNvbG9yU3R5bGVzICkuZm9yRWFjaCggKCBbIHByb3AsIHZhbHVlIF0sIGluZGV4ICkgPT5cbiAgICBzdHlsZS5zaGVldC5pbnNlcnRSdWxlKCBgJHtwcm9wfXske3ZhbHVlLmpvaW4oJzsnKX19YCwgaW5kZXggKVxuICApXG4gIHJldHVybiBzdHlsZVxufSIsIlwidXNlIHN0cmljdFwiXG5cbmltcG9ydCAqIGFzIGNvb2tpZSBmcm9tIFwiLi9jb29raWVcIlxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IGNvb2tpZS5nZXRDb29raWVcbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSBjb29raWUuc2V0Q29va2llXG5cblxuZXhwb3J0IGNvbnN0IGludGVycG9sYXRlU3RyaW5nID0gKCBzdHIsIGNhbGxiYWNrICkgPT5cbiAgc3RyLnJlcGxhY2UoIC97eyhbYS16XVthLXowLTlcXC1fXSopfX0vZ2kgLCAoIG1hdGNoZXMsIHJlcGxhY2VkICkgPT4gY2FsbGJhY2soIHJlcGxhY2VkICkgfHwgJycpXG5cbi8vIG9ubHkgdXNlZCBmb3IgdGhyb3R0bGluZyB0aGUgJ21vdXNlbW92ZScgZXZlbnQgKHVzZWQgZm9yIGFuaW1hdGluZyB0aGUgcmV2b2tlIGJ1dHRvbiB3aGVuIGBhbmltYXRlUmV2b2thYmxlYCBpcyB0cnVlKVxuZXhwb3J0IGNvbnN0IHRocm90dGxlID0gKGNhbGxiYWNrLCBsaW1pdCkgPT4ge1xuICBsZXQgd2FpdCA9IGZhbHNlXG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXdhaXQpIHtcbiAgICAgIGNhbGxiYWNrKC4uLmFyZ3VtZW50cylcbiAgICAgIHdhaXQgPSB0cnVlXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB3YWl0ID0gZmFsc2VcbiAgICAgIH0sIGxpbWl0KVxuICAgIH1cbiAgfVxufVxuXG4vLyBvbmx5IHVzZWQgZm9yIGhhc2hpbmcganNvbiBvYmplY3RzICh1c2VkIGZvciBoYXNoIG1hcHBpbmcgcGFsZXR0ZSBvYmplY3RzLCB1c2VkIHdoZW4gY3VzdG9tIGNvbG91cnMgYXJlIHBhc3NlZCB0aHJvdWdoIEphdmFTY3JpcHQpXG5leHBvcnQgY29uc3QgaGFzaCA9IHN0ciA9PiB7XG4gIGxldCBoYXNoTnVtID0gMCxcbiAgICBpID0gMCxcbiAgICBjaHIsXG4gICAgbGVuID0gc3RyLmxlbmd0aFxuICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGhhc2hOdW1cbiAgZm9yICggaTsgaSA8IGxlbjsgKytpICkge1xuICAgIGNociA9IHN0ci5jaGFyQ29kZUF0KCBpIClcbiAgICBoYXNoTnVtID0gKCBoYXNoTnVtIDw8IDUgKSAtIGhhc2hOdW0gKyBjaHJcbiAgICBoYXNoTnVtIHw9IDBcbiAgfVxuICByZXR1cm4gaGFzaE51bVxufVxuaW1wb3J0ICogYXMgc3R5bGUgZnJvbSBcIi4vc3R5bGVcIlxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZUhleCA9IHN0eWxlLm5vcm1hbGl6ZUhleFxuZXhwb3J0IGNvbnN0IGdldENvbnRyYXN0ID0gc3R5bGUuZ2V0Q29udHJhc3RcbmV4cG9ydCBjb25zdCBnZXRMdW1pbmFuY2UgPSBzdHlsZS5nZXRMdW1pbmFuY2VcbmV4cG9ydCBjb25zdCBnZXRIb3ZlckNvbG9yID1zdHlsZS5nZXRIb3ZlckNvbG9yXG5cbmltcG9ydCAqIGFzIGRvbSBmcm9tIFwiLi9kb21cIlxuZXhwb3J0IGNvbnN0IHRyYXZlcnNlRE9NUGF0aCA9IGRvbS50cmF2ZXJzZURPTVBhdGhcbmV4cG9ydCBjb25zdCBhZGRDdXN0b21TdHlsZXNoZWV0ID0gZG9tLmFkZEN1c3RvbVN0eWxlc2hlZXRcblxuaW1wb3J0ICogYXMgdmFsaWRhdGlvbiBmcm9tIFwiLi92YWxpZGF0aW9uXCJcbmV4cG9ydCBjb25zdCBpc1ZhbGlkU3RhdHVzID0gdmFsaWRhdGlvbi5pc1ZhbGlkU3RhdHVzXG5leHBvcnQgY29uc3QgaXNQbGFpbk9iamVjdCA9IHZhbGlkYXRpb24uaXNQbGFpbk9iamVjdFxuZXhwb3J0IGNvbnN0IGlzTW9iaWxlID0gdmFsaWRhdGlvbi5pc01vYmlsZVxuXG5pbXBvcnQgKiBhcyBhc3luY0ZucyBmcm9tIFwiLi9hc3luY1wiXG5leHBvcnQgY29uc3QgZ2V0U2NyaXB0ID0gYXN5bmNGbnMuZ2V0U2NyaXB0XG5leHBvcnQgY29uc3QgbWFrZUFzeW5jUmVxdWVzdCA9IGFzeW5jRm5zLm1ha2VBc3luY1JlcXVlc3RcblxuY29uc3QgbG9vcFByb3BlcnRpZXMgPSBvdmVyd3JpdGVzID0+IChvYmosIFtrZXksIHZhbHVlXSkgPT4ge1xuICBpZiAoIHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0ICYmICEodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkgKSB7XG4gICAgaWYgKCBvdmVyd3JpdGVzWyBrZXkgXSBpbnN0YW5jZW9mIE9iamVjdCAmJiAhKG92ZXJ3cml0ZXNbIGtleSBdIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBvYmpbIGtleSBdID0gT2JqZWN0LmVudHJpZXModmFsdWUpLnJlZHVjZShsb29wUHJvcGVydGllcyhvdmVyd3JpdGVzW2tleV0pLCB7fSlcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqWyBrZXkgXSA9IHZhbHVlXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICggb3ZlcndyaXRlcy5oYXNPd25Qcm9wZXJ0eSgga2V5ICkgKSB7XG4gICAgICBvYmpbIGtleSBdID0gb3ZlcndyaXRlc1sga2V5IF1cbiAgICB9ZWxzZSB7XG4gICAgICBvYmpbIGtleSBdID0gdmFsdWUgXG4gICAgfVxuICB9XG4gIHJldHVybiBvYmpcbn1cblxuZXhwb3J0IGNvbnN0IG1lcmdlT3B0aW9ucyA9ICggZGVmYXVsdHMsIG92ZXJ3cml0ZXMgKSA9PlxuICBPYmplY3QuZW50cmllcyhkZWZhdWx0cykucmVkdWNlKGxvb3BQcm9wZXJ0aWVzKG92ZXJ3cml0ZXMpLCB7fSlcbiIsIlwidXNlIHN0cmljdFwiXG5cbmV4cG9ydCBjb25zdCBub3JtYWxpemVIZXggPSBoZXggPT5cbiAgaGV4WzBdID09ICcjJ1xuICAgID8gaGV4LnN1YnN0cigxKSA6IGhleC5sZW5ndGggPT0gM1xuICAgID8gaGV4WzBdICsgaGV4WzBdICsgaGV4WzFdICsgaGV4WzFdICsgaGV4WzJdICsgaGV4WzJdIDogaGV4XG5cbi8vIHVzZWQgdG8gZ2V0IHRleHQgY29sb3JzIGlmIG5vdCBzZXRcbmV4cG9ydCBjb25zdCBnZXRDb250cmFzdCA9IGhleCA9PiB7XG4gIGhleCA9IG5vcm1hbGl6ZUhleChoZXgpXG4gIGNvbnN0IHIgPSBwYXJzZUludChoZXguc3Vic3RyKDAsIDIpLCAxNilcbiAgY29uc3QgZyA9IHBhcnNlSW50KGhleC5zdWJzdHIoMiwgMiksIDE2KVxuICBjb25zdCBiID0gcGFyc2VJbnQoaGV4LnN1YnN0cig0LCAyKSwgMTYpXG4gIGNvbnN0IHlpcSA9IChyICogMjk5ICsgZyAqIDU4NyArIGIgKiAxMTQpIC8gMTAwMFxuICByZXR1cm4geWlxID49IDEyOCA/ICcjMDAwJyA6ICcjZmZmJ1xufVxuXG4vLyB1c2VkIHRvIGNoYW5nZSBjb2xvciBvbiBoaWdobGlnaHRcbmV4cG9ydCBjb25zdCBnZXRMdW1pbmFuY2UgPSBoZXggPT4ge1xuICBjb25zdCBudW0gPSBwYXJzZUludChub3JtYWxpemVIZXgoaGV4KSwgMTYpLFxuICAgIGFtdCA9IDM4LFxuICAgIFIgPSAobnVtID4+IDE2KSArIGFtdCxcbiAgICBCID0gKChudW0gPj4gOCkgJiAweDAwZmYpICsgYW10LFxuICAgIEcgPSAobnVtICYgMHgwMDAwZmYpICsgYW10XG4gICAgcmV0dXJuICcjJyArIChcbiAgICAweDEwMDAwMDAgK1xuICAgIChSIDwgMjU1ID8gKFIgPCAxID8gMCA6IFIpIDogMjU1KSAqIDB4MTAwMDAgK1xuICAgIChCIDwgMjU1ID8gKEIgPCAxID8gMCA6IEIpIDogMjU1KSAqIDB4MTAwICtcbiAgICAoRyA8IDI1NSA/IChHIDwgMSA/IDAgOiBHKSA6IDI1NSlcbiAgKVxuICAgIC50b1N0cmluZygxNilcbiAgICAuc2xpY2UoMSlcbn1cbmV4cG9ydCBjb25zdCBnZXRIb3ZlckNvbG9yID0gaGV4ID0+IHtcbiAgaGV4ID0gbm9ybWFsaXplSGV4KCBoZXggKVxuICAvLyBmb3IgYmxhY2sgYnV0dG9uc1xuICByZXR1cm4gaGV4ID09PSAnMDAwMDAwJyA/ICcjMjIyJyA6IGdldEx1bWluYW5jZSggaGV4IClcbn0iLCJcInVzZSBzdHJpY3RcIlxuXG5pbXBvcnQgeyBzdGF0dXNlcyB9IGZyb20gXCIuLi9jb25zdGFudHNcIlxuXG4vKipcbiAqIENoZWNrcyBpZiBhIHN0YXR1cyBpcyBpbiB0aGUgY29uc3RhbnRzIGxpc3RcbiAqIEBwYXJhbSB7IHN0cmluZyB9IHN0YXR1cyAtIFN0YXR1cyBTdHJpbmcgdG9cbiAqIEByZXR1cm4geyBib29sZWFuIH0gLSBpZiBzdGF0dXMgaXMgdmFsaWRcbiAqL1xuZXhwb3J0IGNvbnN0IGlzVmFsaWRTdGF0dXMgPSBzdGF0dXMgPT4gc3RhdHVzZXMuaW5kZXhPZihzdGF0dXMpID49IDBcblxuZXhwb3J0IGNvbnN0IGlzTW9iaWxlID0gKCkgPT5cbiAgL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KCBuYXZpZ2F0b3IudXNlckFnZW50IClcblxuLy8gVGhlIGNvZGUgXCJ0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGxcIiBhbGxvd3MgQXJyYXkgb2JqZWN0c1xuZXhwb3J0IGNvbnN0IGlzUGxhaW5PYmplY3QgPSBvYmogPT4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsICYmIG9iai5jb25zdHJ1Y3RvciA9PSBPYmplY3RcbiJdLCJzb3VyY2VSb290IjoiIn0=