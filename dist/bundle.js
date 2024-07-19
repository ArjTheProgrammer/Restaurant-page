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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/pinoy-handaan.jpg */ \"./src/assets/pinoy-handaan.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/pinoy-menu.jpg */ \"./src/assets/pinoy-menu.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/ordering.jpg */ \"./src/assets/ordering.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/about-image.jpg */ \"./src/assets/about-image.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --color-40: #000000;\n  --color-30: #150050;\n  --color-10: #3f0071;\n  --color-10-highlight: #fb2576;\n}\n\nbody {\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n  background-color: var(--color-40);\n  padding: 0px;\n  margin: 0px;\n  color: white;\n  display: grid;\n  grid-template: 1fr / 1fr;\n  flex-direction: column;\n  justify-content: center;\n  overflow-x: hidden;\n}\n\nheader {\n  background-color: var(--color-30);\n  height: 10vh;\n  display: flex;\n  justify-content: space-between;\n  margin: 20px;\n  padding: 20px 30px;\n  border-radius: 20px;\n}\n\nnav {\n  display: flex;\n  justify-content: space-around;\n  justify-self: end;\n  gap: 20px;\n}\n\nnav > button {\n  background-color: var(--color-30);\n  color: white;\n  border: none;\n  font-size: 1.5rem;\n  font-weight: 700;\n  padding: 0px 10px;\n}\n\nnav > button:hover {\n  cursor: pointer;\n  color: var(--color-10-highlight);\n}\n\nnav > button > svg path:hover {\n  stroke: var(--color-10-highlight);\n}\n\n.logo {\n  font-size: 4rem;\n  align-self: start;\n  padding-left: 30px;\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n  transform: scale(1.2);\n}\n\n/* home page */\n#content {\n  height: 75vh;\n  width: 100vw;\n}\n.home-wrapper {\n  height: 100%;\n  display: grid;\n  grid-template: repeat(3, 1fr) / 2fr 1fr;\n}\n\n.welcome {\n  grid-row: 1 / 4;\n  margin: 20px;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  border-radius: 20px;\n  opacity: 0.8;\n}\n\n.menuTab {\n  margin: 20px;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  border-radius: 20px;\n  opacity: 0.6;\n}\n\n.orderTab {\n  margin: 20px;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  border-radius: 20px;\n  opacity: 0.6;\n}\n\n.aboutTab {\n  margin: 20px;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  border-radius: 20px;\n  opacity: 0.6;\n}\n\n.menuTab:hover,\n.orderTab:hover,\n.aboutTab:hover {\n  opacity: 1;\n  text-shadow: 2px 2px 5px var(--color-10-highlight);\n  cursor: pointer;\n}\n\n.menuTab,\n.orderTab,\n.aboutTab {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-end;\n  font-size: 3rem;\n  padding: 10px;\n}\n\n.menu-wrapper {\n  height: 100%;\n  display: grid;\n  grid-template: repeat(auto-fill, max(450px)) / repeat(auto-fill, max(350px));\n  justify-content: center;\n}\n\n.menu-wrapper > .menu {\n  background-color: var(--color-10);\n  margin: 20px;\n  border-radius: 20px;\n  border: 20px 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  opacity: 0.85;\n}\n\n.menu-wrapper > .menu:hover {\n  opacity: 1;\n}\n\n.menu-wrapper > .menu > img {\n  height: 260px;\n  width: 260px;\n  opacity: 0.8;\n  margin: 10px;\n  border-radius: 10px;\n}\n\n.menu-wrapper > .menu > :not(:first-child) {\n  margin: 5px 0px;\n}\n\n.menu-wrapper > .menu > button {\n  background-color: var(--color-10-highlight);\n  border: none;\n  padding: 5px 20px;\n  color: white;\n  font-family: sans-serif;\n  font-size: 1.12rem;\n  font-weight: 800;\n  border-radius: 30px;\n}\n\n.menu-wrapper > .menu > button:hover {\n  transform: scale(1, 1.15);\n  cursor: pointer;\n}\n\n/*about*/\n\n.about-wrapper {\n  margin: 20px 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: baseline;\n  justify-content: center;\n}\n\n.about-wrapper > img {\n  align-self: center;\n  width: 100%;\n  margin: 20px 0px;\n  border-radius: 20px;\n  opacity: 0.8;\n}\n\n.about-wrapper > h1 {\n  font-size: 4rem;\n  margin: 0px;\n}\n\n.about-wrapper > h3 {\n  font-size: 2.5rem;\n  margin: 40px 0px 10px 0px;\n}\n\n.about-wrapper > h1,\n.about-wrapper > h3 {\n  color: var(--color-10-highlight);\n}\n\n.about-wrapper > p {\n  font-family: sans-serif;\n  font-size: 1.5rem;\n  margin: 10px 0px 0px 0px;\n  width: 98%;\n}\n\n.about-wrapper > button {\n  background-color: var(--color-10-highlight);\n  margin: 30px 0px;\n  border: none;\n  padding: 10px 40px;\n  font-size: 2rem;\n  border-radius: 30px;\n}\n\n.about-wrapper > button:hover {\n  transform: scale(1, 1.1);\n}\n::-webkit-scrollbar {\n  width: 8px;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: var(--color-10-highlight);\n  border-radius: 10px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background-color: var(--color-10);\n}\n\n.order-wrapper {\n  font-size: 5rem;\n  margin: 0px 20px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home.js */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu.js */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/about.js */ \"./src/pages/about.js\");\n/* harmony import */ var _pages_order_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/order.js */ \"./src/pages/order.js\");\n\n\n\n\n\n\nconst homeButton = document.querySelector(\".home\");\nconst menuButton = document.querySelector(\".menu\");\nconst aboutButton = document.querySelector(\".about\");\nconst orderButton = document.querySelector(\".order\");\nconst content = document.querySelector(\"#content\");\n\n(0,_pages_home_js__WEBPACK_IMPORTED_MODULE_1__.home)();\nhomeButton.addEventListener(\"click\", () => {\n    (0,_pages_home_js__WEBPACK_IMPORTED_MODULE_1__.home)();\n})\n\nmenuButton.addEventListener(\"click\", () => {\n    ;(0,_pages_menu_js__WEBPACK_IMPORTED_MODULE_2__.menu)();\n});\n\naboutButton.addEventListener(\"click\", () => {\n    (0,_pages_about_js__WEBPACK_IMPORTED_MODULE_3__.about)();\n});\norderButton.addEventListener(\"click\", () => {\n    (0,_pages_order_js__WEBPACK_IMPORTED_MODULE_4__.order)();\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   about: () => (/* binding */ about)\n/* harmony export */ });\n/* harmony import */ var _assets_bayanihan_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/bayanihan.jpg */ \"./src/assets/bayanihan.jpg\");\n\n\nconst content = document.querySelector(\"#content\");\n\nfunction about(){\n    content.innerHTML = \"\";\n    const about = document.createElement(\"div\");\n    about.className = \"about-wrapper\";\n    const welcome = document.createElement(\"h1\");\n    const welcomeP = document.createElement(\"p\");\n    const story = document.createElement(\"h3\");\n    const storyP = document.createElement(\"p\");\n    const menu = document.createElement(\"h3\");\n    const menuP = document.createElement(\"p\");\n    const commit = document.createElement(\"h3\");\n    const commitP = document.createElement(\"p\");\n    const join = document.createElement(\"h3\");\n    const joinP = document.createElement(\"p\");\n    const buttonToMenu = document.createElement(\"button\");\n\n    const img = new Image();\n    img.src = _assets_bayanihan_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\n    welcome.textContent = \"Welcome to Kusina!\";\n    welcomeP.textContent = \"At Kusina, we bring the heart and soul of Filipino cuisine to your table. Nestled in the vibrant community of Pasig City, our restaurant is a celebration of the rich culinary heritage of the Philippines. From the bustling streets of Manila to the serene shores of Palawan, our dishes are inspired by the diverse flavors and traditions that make Filipino food so unique.\";\n    story.textContent = \"Our Story\";\n    storyP.textContent = \"Kusina was born out of a passion for authentic Filipino cooking. Our founders, Jose Neil Silagan Jr., envisioned a place where people could experience the warmth and hospitality of the Philippines through its food. Every dish we serve is a tribute to the recipes passed down through generations, lovingly prepared with the freshest ingredients and a touch of home.\";\n    menu.textContent = \"Our Menu\";\n    menuP.textContent = \"Our menu is a delightful journey through the Philippines, featuring classic favorites and modern twists. Savor the bold flavors of Adobo, the comforting taste of Sinigang, and the sweet indulgence of Halo-Halo. Whether you’re craving a hearty meal or a light snack, Kusina has something to satisfy every palate.\";\n    commit.textContent = \"Our Commitment\";\n    commitP.textContent = \"At Kusina, we are committed to providing an exceptional dining experience. Our team of skilled chefs and friendly staff are dedicated to making every visit memorable. We believe in the power of good food to bring people together, and we strive to create a welcoming atmosphere where everyone feels at home.\";\n    join.textContent = \"Join Us\";\n    joinP.textContent = \"Come and discover the flavors of the Philippines at Kusina. Whether you’re a longtime fan of Filipino cuisine or trying it for the first time, we invite you to join us for a meal that will warm your heart and delight your senses.\";\n    buttonToMenu.textContent = \"Check our menu\";\n\n    about.append(img);\n    about.append(welcome);\n    about.append(welcomeP);\n    about.append(story);\n    about.append(storyP);\n    about.append(menu);\n    about.append(menuP);\n    about.append(commit);\n    about.append(commitP);\n    about.append(join);\n    about.append(joinP);\n    about.append(buttonToMenu);\n    content.append(about);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/about.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   home: () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/menu.js */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/about.js */ \"./src/pages/about.js\");\n/* harmony import */ var _pages_order_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/order.js */ \"./src/pages/order.js\");\n\n\n\n\nconst content = document.querySelector(\"#content\");\n\nfunction home(){\n    content.innerHTML = \"\";\n    const homeWrapper = document.createElement(\"div\");\n    homeWrapper.className = \"home-wrapper\";\n    const welcome = document.createElement(\"div\");\n    welcome.className = \"welcome\";\n    const menuTab = document.createElement(\"div\");\n    menuTab.className = \"menuTab\";\n    const orderTab = document.createElement(\"div\");\n    orderTab.className = \"orderTab\";\n    const aboutTab = document.createElement(\"div\");\n    aboutTab.className = \"aboutTab\";\n\n    menuTab.addEventListener(\"click\", () => {\n        (0,_pages_menu_js__WEBPACK_IMPORTED_MODULE_0__.menu)();\n    });\n\n    aboutTab.addEventListener(\"click\", () => {\n        (0,_pages_about_js__WEBPACK_IMPORTED_MODULE_1__.about)();\n    });\n\n    orderTab.addEventListener(\"click\", () => {\n        (0,_pages_order_js__WEBPACK_IMPORTED_MODULE_2__.order)();\n    });\n\n    menuTab.textContent = \"Menu\";\n    orderTab.textContent = \"Order\";\n    aboutTab.textContent = \"About\";\n\n    homeWrapper.append(welcome);\n    homeWrapper.append(menuTab);\n    homeWrapper.append(aboutTab);\n    homeWrapper.append(orderTab);\n    content.append(homeWrapper);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _assets_curry_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/curry.jpg */ \"./src/assets/curry.jpg\");\n/* harmony import */ var _assets_kare_kare_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/kare-kare.jpg */ \"./src/assets/kare-kare.jpg\");\n/* harmony import */ var _assets_lomi_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/lomi.jpg */ \"./src/assets/lomi.jpg\");\n/* harmony import */ var _assets_sisig_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/sisig.jpg */ \"./src/assets/sisig.jpg\");\n\n\n\n\n\nconst content = document.querySelector(\"#content\");\n\nfunction menu(){\n    content.innerHTML = \"\";\n    let menuItems = [];\n\n    const menuWrapper = document.createElement(\"div\");\n    menuWrapper.className = \"menu-wrapper\";\n\n    class Menu{\n        constructor(title, price, img){\n            this.title = title;\n            this.price = price;\n            this.img = img;\n        }\n    }\n\n    //bunch of menu\n    const curryObj = new Menu(\"Curry\", 60, _assets_curry_jpg__WEBPACK_IMPORTED_MODULE_0__);\n    const karekareObj = new Menu(\"Kare-kare\", 60, _assets_kare_kare_jpg__WEBPACK_IMPORTED_MODULE_1__);\n    const lomiObj = new Menu(\"Lomi\", 70, _assets_lomi_jpg__WEBPACK_IMPORTED_MODULE_2__);\n    const sisigObj = new Menu(\"Sisig\", 75, _assets_sisig_jpg__WEBPACK_IMPORTED_MODULE_3__);\n\n    displayMenu(curryObj);\n    displayMenu(karekareObj);\n    displayMenu(lomiObj);\n    displayMenu(sisigObj);\n\n    function displayMenu(menu){\n        const menuContainer = document.createElement(\"div\");\n        menuContainer.className = `menu`;\n\n        const imageContainer = new Image();\n        imageContainer.src = menu.img;\n\n        const titleContainer = document.createElement(\"h1\");\n        titleContainer.textContent = menu.title;\n\n        const priceContainer = document.createElement(\"p\");\n        priceContainer.textContent = `₱${menu.price}`;\n\n        const orderButton = document.createElement(\"button\");\n        orderButton.textContent = \"Add Order\";\n\n        menuContainer.append(imageContainer);\n        menuContainer.append(titleContainer);\n        menuContainer.append(priceContainer);\n        menuWrapper.append(menuContainer);\n        menuContainer.append(orderButton);\n        menuItems.push(menu);\n    }\n\n    console.log(menuItems);\n\n    content.append(menuWrapper); \n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/menu.js?");

/***/ }),

/***/ "./src/pages/order.js":
/*!****************************!*\
  !*** ./src/pages/order.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   order: () => (/* binding */ order)\n/* harmony export */ });\nconst content = document.querySelector(\"#content\");\n\nfunction order(){\n    content.innerHTML = \"\";\n    \n    const orderWrapper = document.createElement(\"div\");\n    orderWrapper.className = \"order-wrapper\";\n    orderWrapper.textContent = \"Still in progress...\";\n\n    content.append(orderWrapper);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/order.js?");

/***/ }),

/***/ "./src/assets/about-image.jpg":
/*!************************************!*\
  !*** ./src/assets/about-image.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1e0be1ee3a6cb664cb9a.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/about-image.jpg?");

/***/ }),

/***/ "./src/assets/bayanihan.jpg":
/*!**********************************!*\
  !*** ./src/assets/bayanihan.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e0073aeb5966d5bc806e.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/bayanihan.jpg?");

/***/ }),

/***/ "./src/assets/curry.jpg":
/*!******************************!*\
  !*** ./src/assets/curry.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"39c0146203b1c2aa0e1b.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/curry.jpg?");

/***/ }),

/***/ "./src/assets/kare-kare.jpg":
/*!**********************************!*\
  !*** ./src/assets/kare-kare.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1e71a4b09f25f3c5519c.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/kare-kare.jpg?");

/***/ }),

/***/ "./src/assets/lomi.jpg":
/*!*****************************!*\
  !*** ./src/assets/lomi.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b1b4667fbd3f5431e9dd.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/lomi.jpg?");

/***/ }),

/***/ "./src/assets/ordering.jpg":
/*!*********************************!*\
  !*** ./src/assets/ordering.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"30683f4cae76c82f2fe0.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/ordering.jpg?");

/***/ }),

/***/ "./src/assets/pinoy-handaan.jpg":
/*!**************************************!*\
  !*** ./src/assets/pinoy-handaan.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5e81c46855e68b172ba1.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/pinoy-handaan.jpg?");

/***/ }),

/***/ "./src/assets/pinoy-menu.jpg":
/*!***********************************!*\
  !*** ./src/assets/pinoy-menu.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"375aaea5ca252b8107dd.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/pinoy-menu.jpg?");

/***/ }),

/***/ "./src/assets/sisig.jpg":
/*!******************************!*\
  !*** ./src/assets/sisig.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"45bde776feaa0973803d.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/sisig.jpg?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;