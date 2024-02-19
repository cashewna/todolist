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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/plus.svg */ \"./src/assets/plus.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/trash.svg */ \"./src/assets/trash.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*::before,\n*::after,\n* {\n    box-sizing: border-box;\n}\n\n* {\n    margin: 0;\n}\n\nbody {\n    font-family: 'Roboto', sans-serif;\n    line-height: 1.5;\n    --50: #f8fafc;\n    --100: #f1f5f9;\n    --200: #e2e8f0;\n    --300: #cbd5e1;\n    --400: #94a3b8;\n    --500: #64748b;\n    --600: #475569;\n    --700: #334155;\n    --800: #1e293b;\n    --900: #0f172a;\n    --950: #020617;\n}\n\nheader {\n    height: 5rem;\n    background-color: var(--900);\n    display: flex;\n    justify-content: space-between;\n    padding: 1rem;\n\n    span {\n        font-size: 1.5rem;\n    }\n\n    #hamburger {\n        .bar1,\n        .bar2,\n        .bar3 {\n            width: 35px;\n            height: 5px;\n            background-color: var(--50);\n            margin: 6px 0;\n            transition: 0.4s;\n        }\n    }\n\n    .open .bar1 {\n        transform: translate(0, 11px) rotate(-45deg);\n    }\n\n    .open .bar2 {\n        opacity: 0;\n    }\n\n    .open .bar3 {\n        transform: translate(0, -11px) rotate(45deg);\n    }\n}\n\n#sidebar {\n    position: fixed;\n    right: -250px;\n    width: 250px;\n    height: 100%;\n    background-color: var(--800);\n    transition: right 0.3s ease;\n    z-index: 101;\n    padding: 1rem;\n\n    h1 {\n        color: var(--50);\n        font-size: 1.5rem;\n    }\n\n    ul {\n        padding: 0.5rem;\n    }\n\n    li {\n        list-style: none;\n        margin: 0.5rem 0;\n        padding: 0;\n        color: var(--50);\n        font-size: 1.2rem;\n    }\n}\n\n#sidebar.open {\n    right: 0;\n}\n\n#content {\n    background-color: var(--950);\n    padding: 1rem;\n    height: calc(100vh - 10rem);\n\n    #todo-list {\n        span,\n        p {\n            color: var(--100);\n            margin-left: 1rem;\n        }\n    }\n    ul#todo-list {\n        list-style: none;\n        padding: 0;\n    }\n\n    #todo-list {\n        .completed {\n            span,\n            p {\n                color: var(--500);\n            }\n        }\n    }\n\n    #add-todo-btn {\n        position: fixed;\n        bottom: 6rem;\n        right: 1rem;\n        background-color: orange;\n        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n        background-size: 50%;\n        background-position: center;\n        background-repeat: no-repeat;\n\n        border-radius: 50%;\n        border-style: none;\n        width: 4rem;\n        height: 4rem;\n    }\n\n    @keyframes slideUp {\n        from {\n            transform: translateY(-110%);\n        }\n\n        to {\n            transform: translateY(0%);\n        }\n    }\n\n    dialog[open] {\n        animation: slideUp 3s ease normal;\n    }\n\n    dialog {\n        position: fixed;\n        border-radius: 0.8rem;\n        padding: 1.6rem;\n        min-width: 100%;\n        bottom: 0;\n        z-index: 100;\n        background-color: var(--900);\n\n        form {\n            display: flex;\n            flex-direction: column;\n            gap: 1rem;\n\n            input {\n                padding: 1rem;\n                border-radius: 0.5rem;\n                border: none;\n                background-color: var(--800);\n                color: var(--50);\n            }\n\n            button {\n                background-color: orange;\n                border: none;\n                padding: 1rem;\n                border-radius: 0.5rem;\n            }\n        }\n    }\n\n    h1 {\n        color: var(--50);\n        font-size: 1.5rem;\n        margin-bottom: 1rem;\n    }\n\n    .remove-todo {\n        height: 2rem;\n        width: 2rem;\n        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: contain;\n        background-color: var(--900);\n    }\n}\n\nfooter {\n    height: 5rem;\n    background-color: var(--900);\n}\n\nheader,\nfooter {\n    display: flex;\n    align-items: center;\n}\n\nheader>span,\nfooter>span {\n    color: var(--50);\n    margin-left: 1rem;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/core/models/Project.ts":
/*!************************************!*\
  !*** ./src/core/models/Project.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Project {\n    id;\n    name;\n    todos;\n    constructor(id, name) {\n        this.id = id;\n        this.name = name;\n        this.todos = [];\n    }\n    getId() {\n        return this.id;\n    }\n    getName() {\n        return this.name;\n    }\n    addTodo(todo) {\n        const todoExists = this.todos.find(t => t.getId() === todo.getId());\n        if (!todoExists) {\n            this.todos.push(todo);\n        }\n        else {\n            console.log(`Todo \"${todo.getTitle()}\" already exists in project`);\n        }\n    }\n    getTodos() {\n        return this.todos;\n    }\n}\nexports[\"default\"] = Project;\n\n\n//# sourceURL=webpack://todolist/./src/core/models/Project.ts?");

/***/ }),

/***/ "./src/core/models/Todo.ts":
/*!*********************************!*\
  !*** ./src/core/models/Todo.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Todo {\n    id;\n    title;\n    description;\n    completed;\n    projectId;\n    priority;\n    static nextId = 0;\n    constructor(projectId, title, description, priority) {\n        this.id = Todo.nextId++;\n        this.title = title;\n        this.description = description || '';\n        this.completed = false;\n        this.projectId = projectId;\n        this.priority = priority || 0;\n    }\n    getId() {\n        return this.id;\n    }\n    getTitle() {\n        return this.title;\n    }\n    getDescription() {\n        return this.description;\n    }\n    isCompleted() {\n        return this.completed;\n    }\n    getProjectId() {\n        return this.projectId;\n    }\n    getPriority() {\n        return this.priority;\n    }\n}\nexports[\"default\"] = Todo;\n\n\n//# sourceURL=webpack://todolist/./src/core/models/Todo.ts?");

/***/ }),

/***/ "./src/core/viewModels/TodoListViewModel.ts":
/*!**************************************************!*\
  !*** ./src/core/viewModels/TodoListViewModel.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Project_1 = __importDefault(__webpack_require__(/*! ../models/Project */ \"./src/core/models/Project.ts\"));\nconst Todo_1 = __importDefault(__webpack_require__(/*! ../models/Todo */ \"./src/core/models/Todo.ts\"));\nconst ProjectView_1 = __importDefault(__webpack_require__(/*! ../../views/ProjectView */ \"./src/views/ProjectView.ts\"));\nconst SidebarView_1 = __importDefault(__webpack_require__(/*! ../../views/SidebarView */ \"./src/views/SidebarView.ts\"));\nconst AddTodoDialogView_1 = __importDefault(__webpack_require__(/*! ../../views/AddTodoDialogView */ \"./src/views/AddTodoDialogView.ts\"));\nconst ALL_PROJECT_ID = 0;\nclass TodoListViewModel {\n    projects;\n    selectedProject;\n    nextProjectId;\n    projectView;\n    sidebarView;\n    addTodoDialogView;\n    constructor() {\n        this.projects = [];\n        this.projectView = new ProjectView_1.default();\n        this.sidebarView = new SidebarView_1.default(this);\n        this.addTodoDialogView = new AddTodoDialogView_1.default(this);\n        this.nextProjectId = 0;\n        this.addProject('All');\n        this.setSelectedProject(ALL_PROJECT_ID);\n    }\n    getProjects() {\n        return this.projects;\n    }\n    getSelectedProject() {\n        return this.selectedProject;\n    }\n    setSelectedProject(projectId) {\n        this.selectedProject = this.projects.find(project => project.getId() === projectId);\n        this.projectView.updateProjectName(this.selectedProject.getName());\n        this.projectView.renderTodoList(this.selectedProject.getTodos());\n    }\n    addProject(name) {\n        const newProject = new Project_1.default(this.nextProjectId++, name);\n        this.projects.push(newProject);\n        this.sidebarView.addProject(newProject.getId(), name);\n        return newProject;\n    }\n    addTodoToSelectedProject(projectName, title, description, dueDate, priority) {\n        const allProject = this.projects[ALL_PROJECT_ID];\n        if (projectName === \"\") {\n            projectName = \"All\";\n        }\n        // Check if project exists\n        const project = this.projects.find(p => p.getName() === projectName);\n        let projectIdNumber = project ? project.getId() : null;\n        if (project) {\n            const newTodo = new Todo_1.default(projectIdNumber, title, description);\n            project.addTodo(newTodo);\n            if (projectIdNumber !== ALL_PROJECT_ID) {\n                allProject.addTodo(newTodo);\n            }\n            if (this.selectedProject.getId() === projectIdNumber) {\n                this.projectView.appendTodoItem(newTodo);\n            }\n        }\n        else {\n            // Create a new project and add the todo to it and 'All'\n            const newProject = this.addProject(projectName);\n            const newTodo = new Todo_1.default(this.nextProjectId++, title, description);\n            newProject.addTodo(newTodo);\n            allProject.addTodo(newTodo);\n            if (this.selectedProject.getId() === ALL_PROJECT_ID) {\n                this.projectView.appendTodoItem(newTodo);\n            }\n        }\n    }\n}\nexports[\"default\"] = TodoListViewModel;\n\n\n//# sourceURL=webpack://todolist/./src/core/viewModels/TodoListViewModel.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\nconst TodoListViewModel_1 = __importDefault(__webpack_require__(/*! ./core/viewModels/TodoListViewModel */ \"./src/core/viewModels/TodoListViewModel.ts\"));\nconst todoListViewModel = new TodoListViewModel_1.default();\ntodoListViewModel.addTodoToSelectedProject(\"All\", 'Uno', 'This is a test todo');\ntodoListViewModel.addTodoToSelectedProject(\"All\", 'Dos', 'This is another test todo');\ntodoListViewModel.addProject('Test Project');\ntodoListViewModel.addTodoToSelectedProject(\"Test Project\", 'Tres', 'This is a test todo for project 1');\n\n\n//# sourceURL=webpack://todolist/./src/index.ts?");

/***/ }),

/***/ "./src/views/AddTodoDialogView.ts":
/*!****************************************!*\
  !*** ./src/views/AddTodoDialogView.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass AddTodoDialogView {\n    dialogElement;\n    addTodoButton;\n    todoListViewModel;\n    form;\n    constructor(todoListViewModel) {\n        this.todoListViewModel = todoListViewModel;\n        this.dialogElement = document.querySelector('#add-todo-dialog');\n        this.addTodoButton = document.querySelector('#add-todo-btn');\n        this.form = document.querySelector('#add-todo-form');\n        this.openDialogEventListener(this.addTodoButton);\n        this.addTodoEventListener(this.form);\n    }\n    openDialogEventListener(button) {\n        button.addEventListener('click', (event) => {\n            // Stop the propagation of the click event to prevent the\n            // dialog from immediately closing\n            event.stopPropagation();\n            this.dialogElement.show();\n            this.closeDialogEventListener(this.dialogElement);\n        });\n    }\n    closeDialogEventListener(dialogElement) {\n        document.addEventListener('click', (event) => {\n            if (!dialogElement.contains(event.target)) {\n                dialogElement.close();\n            }\n        });\n    }\n    // Add todo to selected project on submit (default project is 'All')\n    addTodoEventListener(form) {\n        form.addEventListener('submit', (event) => {\n            event.preventDefault();\n            const formData = new FormData(form);\n            const title = formData.get('title');\n            const description = formData.get('description');\n            const dueDate = formData.get('dueDate');\n            const projectName = formData.get('projectName');\n            const priority = formData.get('priority');\n            this.todoListViewModel.addTodoToSelectedProject(projectName, title, description, dueDate, priority);\n        });\n    }\n}\nexports[\"default\"] = AddTodoDialogView;\n\n\n//# sourceURL=webpack://todolist/./src/views/AddTodoDialogView.ts?");

/***/ }),

/***/ "./src/views/ProjectView.ts":
/*!**********************************!*\
  !*** ./src/views/ProjectView.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass ProjectView {\n    projectNameElement;\n    todoListElement;\n    constructor() {\n        this.projectNameElement = document.querySelector('#project-name');\n        this.todoListElement = document.querySelector('#todo-list');\n    }\n    updateProjectName(name) {\n        if (this.projectNameElement) {\n            this.projectNameElement.textContent = name;\n        }\n    }\n    renderTodoList(todos) {\n        this.todoListElement.innerHTML = '';\n        todos.forEach(todo => {\n            const todoDiv = this.createTodoDiv(todo);\n            this.todoListElement.appendChild(todoDiv);\n        });\n    }\n    createTodoDiv(todo) {\n        const todoDiv = document.createElement('div');\n        todoDiv.classList.add('todo');\n        const checkbox = document.createElement('input');\n        checkbox.type = 'checkbox';\n        checkbox.checked = todo.isCompleted();\n        todoDiv.appendChild(checkbox);\n        checkbox.addEventListener('change', () => {\n            todoDiv.classList.toggle('completed');\n        });\n        const titleElement = document.createElement('span');\n        titleElement.textContent = todo.getTitle();\n        todoDiv.appendChild(titleElement);\n        const descriptionElement = document.createElement('p');\n        descriptionElement.textContent = todo.getDescription();\n        todoDiv.appendChild(descriptionElement);\n        const removeButton = this.createRemoveButton();\n        removeButton.classList.add('remove-todo');\n        todoDiv.appendChild(removeButton);\n        return todoDiv;\n    }\n    appendTodoItem(todo) {\n        const todoDiv = this.createTodoDiv(todo);\n        this.todoListElement.appendChild(todoDiv);\n    }\n    createRemoveButton() {\n        const removeButton = document.createElement('button');\n        removeButton.addEventListener('click', () => {\n            console.log('Remove button clicked');\n        });\n        return removeButton;\n    }\n}\nexports[\"default\"] = ProjectView;\n\n\n//# sourceURL=webpack://todolist/./src/views/ProjectView.ts?");

/***/ }),

/***/ "./src/views/SidebarView.ts":
/*!**********************************!*\
  !*** ./src/views/SidebarView.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass SidebarView {\n    hamburgerElement;\n    sidebarElement;\n    projectListElement;\n    todoListViewModel;\n    constructor(todoListViewModel) {\n        this.todoListViewModel = todoListViewModel;\n        this.hamburgerElement = document.querySelector('#hamburger');\n        this.sidebarElement = document.querySelector('#sidebar');\n        this.projectListElement = document.querySelector('#project-list');\n        this.toggleSidebarOnHamburgerClick();\n    }\n    addProject(id, projectName) {\n        const projectListItem = document.createElement('li');\n        projectListItem.textContent = projectName;\n        this.projectListElement.appendChild(projectListItem);\n        projectListItem.addEventListener('click', () => {\n            this.todoListViewModel.setSelectedProject(id);\n        });\n    }\n    toggleSidebarOnHamburgerClick() {\n        this.hamburgerElement.addEventListener('click', () => {\n            this.hamburgerElement.classList.toggle('open');\n            this.sidebarElement.classList.toggle('open');\n        });\n    }\n}\nexports[\"default\"] = SidebarView;\n\n\n//# sourceURL=webpack://todolist/./src/views/SidebarView.ts?");

/***/ }),

/***/ "./src/assets/plus.svg":
/*!*****************************!*\
  !*** ./src/assets/plus.svg ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIGZpbGw9IiMwMDAwMDAiIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgCgkgd2lkdGg9IjgwMHB4IiBoZWlnaHQ9IjgwMHB4IiB2aWV3Qm94PSIwIDAgNDUuNDAyIDQ1LjQwMiIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNNDEuMjY3LDE4LjU1N0gyNi44MzJWNC4xMzRDMjYuODMyLDEuODUxLDI0Ljk5LDAsMjIuNzA3LDBjLTIuMjgzLDAtNC4xMjQsMS44NTEtNC4xMjQsNC4xMzV2MTQuNDMySDQuMTQxCgkJYy0yLjI4MywwLTQuMTM5LDEuODUxLTQuMTM4LDQuMTM1Yy0wLjAwMSwxLjE0MSwwLjQ2LDIuMTg3LDEuMjA3LDIuOTM0YzAuNzQ4LDAuNzQ5LDEuNzgsMS4yMjIsMi45MiwxLjIyMmgxNC40NTNWNDEuMjcKCQljMCwxLjE0MiwwLjQ1MywyLjE3NiwxLjIwMSwyLjkyMmMwLjc0OCwwLjc0OCwxLjc3NywxLjIxMSwyLjkxOSwxLjIxMWMyLjI4MiwwLDQuMTI5LTEuODUxLDQuMTI5LTQuMTMzVjI2Ljg1N2gxNC40MzUKCQljMi4yODMsMCw0LjEzNC0xLjg2Nyw0LjEzMy00LjE1QzQ1LjM5OSwyMC40MjUsNDMuNTQ4LDE4LjU1Nyw0MS4yNjcsMTguNTU3eiIvPgo8L2c+Cjwvc3ZnPg==\";\n\n//# sourceURL=webpack://todolist/./src/assets/plus.svg?");

/***/ }),

/***/ "./src/assets/trash.svg":
/*!******************************!*\
  !*** ./src/assets/trash.svg ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCg0KPHN2ZyBmaWxsPSIjZmZmZmZmIiB2aWV3Qm94PSItNi43IDAgMTIyLjg4IDEyMi44OCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTA5LjQ4NCAxMjIuODgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHN0cm9rZT0iI2ZmZmZmZiI+PGcgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIiBzdHJva2Utd2lkdGg9IjAiPjwvZz48ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvZz48ZyBpZD0iU1ZHUmVwb19pY29uQ2FycmllciI+IDxnPiA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIuMzQ3LDkuNjMzaDM4LjI5N1YzLjc2YzAtMi4wNjgsMS42ODktMy43NiwzLjc2LTMuNzZoMjEuMTQ0IGMyLjA3LDAsMy43NiwxLjY5MSwzLjc2LDMuNzZ2NS44NzRoMzcuODNjMS4yOTMsMCwyLjM0NywxLjA1NywyLjM0NywyLjM0OXYxMS41MTRIMFYxMS45ODJDMCwxMC42OSwxLjA1NSw5LjYzMywyLjM0Nyw5LjYzMyBMMi4zNDcsOS42MzN6IE04LjY5LDI5LjYwNWg5Mi45MjFjMS45MzcsMCwzLjY5NiwxLjU5OSwzLjUyMSwzLjUyNGwtNy44NjQsODYuMjI5Yy0wLjE3NCwxLjkyNi0xLjU5LDMuNTIxLTMuNTIzLDMuNTIxaC03Ny4zIGMtMS45MzQsMC0zLjM1Mi0xLjU5Mi0zLjUyNC0zLjUyMUw1LjE2NiwzMy4xMjlDNC45OTQsMzEuMTk3LDYuNzUxLDI5LjYwNSw4LjY5LDI5LjYwNUw4LjY5LDI5LjYwNXogTTY5LjA3Nyw0Mi45OThoOS44NjZ2NjUuMzE0IGgtOS44NjZWNDIuOTk4TDY5LjA3Nyw0Mi45OTh6IE0zMC4wNzIsNDIuOTk4aDkuODY3djY1LjMxNGgtOS44NjdWNDIuOTk4TDMwLjA3Miw0Mi45OTh6IE00OS41NzIsNDIuOTk4aDkuODY5djY1LjMxNGgtOS44NjkgVjQyLjk5OEw0OS41NzIsNDIuOTk4eiI+PC9wYXRoPiA8L2c+IDwvZz48L3N2Zz4=\";\n\n//# sourceURL=webpack://todolist/./src/assets/trash.svg?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;