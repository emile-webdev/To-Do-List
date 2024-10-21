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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n    --white: antiquewhite;\r\n    --yellow: goldenrod;\r\n    --black: rgb(48, 48, 48);\r\n    --grey: rgb(68, 68, 68);\r\n    --red: tomato;\r\n}\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\nbody {\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    background-color: var(--black);\r\n}\r\n.wrapper {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n/* --- SIDEBAR --- */\r\n.sidebar {\r\n    background-color: var(--grey);\r\n    height: 900px;\r\n    width: 30%;\r\n}\r\nh1 {\r\n    color: var(--white);\r\n}\r\n.btn {\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    background-color: var(--yellow);\r\n    color: var(--black);\r\n    display: inline-block;\r\n    padding: 8px 30px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n.btn:hover {\r\n    transform: scale(0.95);\r\n}\r\n.header {\r\n    background-color: var(--black);\r\n    padding: 1.6rem;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 1;\r\n}\r\n.sidebar .header {\r\n    background-color: var(--grey);\r\n}\r\n.header-title {\r\n    font-size: 1.4rem;\r\n    font-weight: bold;\r\n    margin: 10px 0;\r\n}\r\n.projects-form .form-control {\r\n    margin: 10px 0;\r\n    width: 100%;\r\n}\r\n.projects-form input {\r\n    border: 0;\r\n    border-radius: 5px;\r\n    width: 100%;\r\n    padding: 8px;\r\n    font-size: 16px;\r\n    background-color: var(--white);\r\n}\r\n.projects-form input:focus {\r\n    outline: none;\r\n}\r\n.projects-form button {\r\n    width: 100%;\r\n}\r\n.projects-list {\r\n    padding: 1.6rem;\r\n}\r\n.projects-list input {\r\n    background-color: var(--grey);\r\n}\r\n.projects-item {\r\n    font-size: 1rem;\r\n    color: var(--white);\r\n    display: inline-flex;\r\n    align-items: center;\r\n    width: 100%;\r\n    margin: 16px 0;\r\n    cursor: pointer;\r\n}\r\n.projects-item:hover {\r\n    transform: scale(1.02);\r\n}\r\n.projects-item.active {\r\n    font-weight: bold;\r\n}\r\n.projects-item:first-child {\r\n    margin-top: 0;\r\n}\r\n.projects-color {\r\n    border: none;\r\n    width: 25px;\r\n    margin-left: auto;\r\n    cursor: pointer;\r\n}\r\n/* --- MAIN --- */\r\n.main {\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow-y: scroll;\r\n    width: 100%;\r\n}\r\n.main::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n.main .header {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n.main .tasks-header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-bottom: 20px;\r\n}\r\n.selected-project {\r\n    font-size: 1rem;\r\n    color: var(--white);\r\n}\r\n.delete-btn {\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    color: var(--red);\r\n    padding: 5px 10px;\r\n    margin-left: 20px;\r\n    border: 1px solid var(--white);\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n.task-forms {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    margin: 10px;\r\n    width: 100%;\r\n}\r\n.task-btn {\r\n    margin: 20px;\r\n}\r\n.form-control, .submit-btn {\r\n    width: 350px;\r\n}\r\n.submit-btn {\r\n    margin: 5px;\r\n}\r\n/* --- CREATE AND EDIT FORM --- */\r\n.create-task-form input, .edit-task-form input, .create-task-form select, .edit-task-form select {\r\n    border: 0;\r\n    border-radius: 5px;\r\n    width: 100%;\r\n    padding: 8px;\r\n    margin: 5px;\r\n    font-size: 16px;\r\n    background-color: var(--white);\r\n}\r\n.create-task-form input:focus, .edit-task-form input:focus, .create-task-form select:focus, .edit-task-form select:focus {\r\n    outline: none;\r\n}\r\n.create-task-form, .edit-task-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex: 1;\r\n}\r\n.create-task-form input, .edit-task-form input {\r\n    width: 350px;\r\n}\r\n.create-task-form, .edit-task-form {\r\n    display: none;\r\n}\r\n/* --- CARDS --- */\r\n.cards-container {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n    /*grid-template-columns: repeat(4,1fr);*/\r\n    grid-auto-rows: max-content;\r\n    gap: 20px;\r\n    padding: 1.6rem;\r\n}\r\n.task {\r\n    background-color: antiquewhite;\r\n    color: var(--black);\r\n    border: 4px solid;\r\n    border-radius: 10px;\r\n    padding: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n}\r\n.task-tag {\r\n    font-size: 1rem;\r\n    padding: 0.5rem 2.5rem;\r\n    border-radius: 5px;\r\n    margin-bottom: 8px;\r\n}\r\n.task-description {\r\n    font-size: 1rem;\r\n    font-weight: 900;\r\n    margin: 20px 0 10px 0;\r\n    word-break: break-all;\r\n}\r\n.task-date, .task-priority {\r\n    font-size: 14px;\r\n    margin-bottom: 10px;\r\n}\r\n.task-actions {\r\n    margin-top: auto;\r\n}\r\n.task-actions i {\r\n    font-size: 1rem;\r\n    margin-right: 1.6rem;\r\n    opacity: 0.5;\r\n    cursor: pointer;\r\n}\r\n.fa-edit:hover {\r\n    color: green;\r\n    transform: scale(1.2);\r\n}\r\n.fa-trash-alt:hover {\r\n    color: red;\r\n    transform: scale(1.2);\r\n}\r\n\r\n@media (max-width:600px) {\r\n    .wrapper {\r\n        flex-direction: column;\r\n    }\r\n    .sidebar {\r\n        width: 100%;\r\n    }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/colors.js":
/*!***********************!*\
  !*** ./src/colors.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   convertHexToRGBA: () => (/* binding */ convertHexToRGBA),\n/* harmony export */   getRandomHexColor: () => (/* binding */ getRandomHexColor)\n/* harmony export */ });\nfunction getRandomHexColor() {\r\n    var hex = (Math.round(Math.random() * 0xffffff)).toString(16);\r\n    while(hex.length < 6) hex = \"0\" + hex;\r\n    return `#${hex}`;\r\n}\r\n\r\nfunction convertHexToRGBA(hexCode, opacity) {\r\n    let hex = hexCode.replace('#', '');\r\n\r\n    if(hex.length === 3) {\r\n        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;\r\n    }\r\n\r\n    const r = parseInt(hex.substring(0, 2), 16);\r\n    const g = parseInt(hex.substring(2, 4), 16);\r\n    const b = parseInt(hex.substring(4, 6), 16);\r\n\r\n    return `rgba(${r},${g},${b},${opacity / 100})`;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/colors.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projects: () => (/* binding */ projects),\n/* harmony export */   selectedProjectId: () => (/* binding */ selectedProjectId),\n/* harmony export */   tasks: () => (/* binding */ tasks)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.js\");\n/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colors */ \"./src/colors.js\");\n\r\n\r\n\r\n\r\n// --- GLOBAL VARIABLES PROJECTS ---\r\nconst newProjectForm = document.querySelector('[data-new-project-form]');\r\nconst newProjectInput = document.querySelector('[data-new-project-input]');\r\nconst projectsList = document.querySelector('[data-projects-list]');\r\n\r\n// --- GLOBAL VARIABLES TASKS\r\nconst openTaskForm = document.querySelector('[data-open-task-form]');\r\nconst newTaskForm = document.querySelector('[data-new-task-form]');\r\nconst newTaskSelect = document.querySelector('[data-new-task-select]');\r\nconst newTaskInput = document.querySelector('[data-new-task-input]');\r\nconst newTaskDate = document.querySelector('[data-new-task-date]');\r\nconst taskPriority = document.querySelector('[data-task-priority]');\r\nconst editTaskForm = document.querySelector('[data-edit-task-form]');\r\nconst editTaskSelect = document.querySelector('[data-edit-task-select]');\r\nconst editTaskInput = document.querySelector('[data-edit-task-input]');\r\nconst editTaskDate = document.querySelector('[data-edit-task-date]');\r\nconst editTaskPriority = document.querySelector('[data-edit-task-priority]');\r\nconst cardsContainer = document.querySelector('[data-cards]');\r\nconst selectedProject = document.querySelector('[data-selected-project]');\r\n\r\nlet projects = JSON.parse(localStorage.getItem(_localStorage__WEBPACK_IMPORTED_MODULE_1__.LOCAL_STORAGE_PROJECTS_KEY)) || [];\r\nlet tasks = JSON.parse(localStorage.getItem(_localStorage__WEBPACK_IMPORTED_MODULE_1__.LOCAL_STORAGE_TASKS_KEY)) || [];\r\nlet selectedProjectId = localStorage.getItem(_localStorage__WEBPACK_IMPORTED_MODULE_1__.LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY);\r\n\r\n// --- EVENT: Add Project ---\r\nnewProjectForm.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n\r\n    const project = newProjectInput.value;\r\n    // --- Check input ---\r\n    const emptyProject = !project || !project.trim().length;\r\n\r\n    if(emptyProject) {\r\n        alert('Please enter a new project');\r\n        return;\r\n    }\r\n\r\n    projects.push({ \r\n        _id: Date.now().toString(), \r\n        project: project, \r\n        color: (0,_colors__WEBPACK_IMPORTED_MODULE_2__.getRandomHexColor)() \r\n    });\r\n\r\n    // --- Clear the form ---\r\n    newProjectInput.value = '';\r\n\r\n    saveAndRender()\r\n})\r\n\r\n// --- EVENT: Open Task Form ---\r\nopenTaskForm.addEventListener('click', () => {\r\n    newTaskForm.style.display = 'flex';\r\n})\r\n\r\n// --- EVENT: Submit Task ---\r\nnewTaskForm.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n\r\n    tasks.push({ \r\n        _id: Date.now().toString(), \r\n        projectId: newTaskSelect.value,\r\n        task: newTaskInput.value,\r\n        date: newTaskDate.value,\r\n        priority: taskPriority.value\r\n    })\r\n\r\n    // --- Clear the form ---\r\n    newTaskSelect.value = '';\r\n    newTaskInput.value = '';\r\n    newTaskDate.value = '';\r\n    taskPriority.value = '';\r\n\r\n    newTaskForm.style.display = 'none';\r\n\r\n    saveAndRender();\r\n})\r\n\r\n// --- EVENT: Edit task ---\r\nlet taskEdit = null;\r\n\r\neditTaskForm.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n\r\n    taskEdit.projectId = editTaskSelect.value;\r\n    taskEdit.task = editTaskInput.value;\r\n    taskEdit.date = editTaskDate.value;\r\n    taskEdit.priority = editTaskPriority.value;\r\n\r\n    editTaskForm.style.display = 'none';\r\n    newTaskForm.style.display = 'flex';\r\n\r\n    editTaskForm.value = '';\r\n    editTaskInput.value = '';\r\n    editTaskDate.value = '';\r\n    editTaskPriority.value = '';\r\n\r\n    newTaskForm.style.display = 'none';\r\n\r\n    saveAndRender();\r\n})\r\n\r\n// --- EVENT: Show edit form & delete task card ---\r\ncardsContainer.addEventListener('click', (e) => {\r\n\r\n    if(e.target.classList[1] === 'fa-trash-alt') {\r\n        const taskDeleteIndex = tasks.findIndex((task) => task._id === e.target.dataset.editTask);\r\n        tasks.splice(taskDeleteIndex, 1);\r\n\r\n        saveAndRender();\r\n    }\r\n\r\n    if(e.target.classList[1] === 'fa-edit') {\r\n        newTaskForm.style.display = 'none';\r\n        editTaskForm.style.display = 'flex';\r\n\r\n        taskEdit = tasks.find((task) => task._id === e.target.dataset.editTask);\r\n\r\n        editTaskSelect.value = taskEdit.projectId;\r\n        editTaskInput.value = taskEdit.task;\r\n        editTaskDate.value = taskEdit.date;\r\n        editTaskPriority.value = taskEdit.priority;\r\n    }\r\n})\r\n\r\n// --- EVENT: Get selected project id ---\r\nprojectsList.addEventListener('click', (e) => {\r\n    if(e.target.tagName.toLowerCase() === 'li') {\r\n        if(!e.target.dataset.projectId) {\r\n            selectedProjectId = null;\r\n        } else {\r\n            selectedProjectId = e.target.dataset.projectId;\r\n        }\r\n\r\n        saveAndRender();\r\n    }\r\n})\r\n\r\n// --- EVENT: Get selected project color ---\r\nprojectsList.addEventListener('change', (e) => {\r\n    if(e.target.tagName.toLowerCase() === 'input') {\r\n        const newProjectColor = e.target.value;\r\n        const projectId = e.target.parentElement.dataset.projectId;\r\n        const projectToEdit = projects.find((project) => project._id === projectId);\r\n\r\n        projectToEdit.color = newProjectColor;\r\n\r\n        saveAndRender();\r\n    }\r\n})\r\n\r\n// --- EVENT: Delete selected project ---\r\nselectedProject.addEventListener('click', (e) => {\r\n    if(e.target.tagName.toLowerCase() === 'span') {\r\n        projects = projects.filter((project) => project._id != selectedProjectId);\r\n        tasks = tasks.filter((task) => task.projectId != selectedProjectId);\r\n        selectedProjectId = null;\r\n\r\n        saveAndRender();\r\n    }\r\n})\r\n\r\nfunction saveAndRender() {\r\n    ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.save)();\r\n    render();\r\n}\r\n\r\nfunction render() {\r\n    clearChildElements(projectsList);\r\n    clearChildElements(newTaskSelect);\r\n    clearChildElements(editTaskSelect);\r\n    clearChildElements(cardsContainer);\r\n\r\n    renderProjects();\r\n    renderFormOptions();\r\n    renderTasks();\r\n\r\n    // --- Set the selected project ---\r\n    if(!selectedProjectId || selectedProjectId === 'null') {\r\n        selectedProject.innerHTML = `Selected project: <strong>All Projects</strong>`;\r\n    } else {\r\n        const currentProject = projects.find((project) => project._id === selectedProjectId);\r\n        selectedProject.innerHTML = `Selected project: <strong>${currentProject.project}</strong><span class=\"delete-btn selected-project\">Delete Project</span>`;\r\n    }\r\n}\r\n\r\nfunction renderProjects() {\r\n    projectsList.innerHTML += `<li class=\"projects-item\">All projects</li>`;\r\n    projects.forEach(({ _id, project, color }) => {\r\n        projectsList.innerHTML += `<li class=\"projects-item\" data-project-id=${_id}>${project}<input type=\"color\" value=${color} class=\"projects-color\"></li>`;\r\n    })\r\n}\r\n\r\nfunction renderFormOptions() {\r\n    newTaskSelect.innerHTML += `<option value=\"\">All Projects</option>`;\r\n    editTaskSelect.innerHTML += `<option value=\"\">All Projects</option>`;\r\n    projects.forEach(({ _id, project }) => {\r\n        newTaskSelect.innerHTML += `<option value=${_id}>${project}</option>`;\r\n        editTaskSelect.innerHTML += `<option value=${_id}>${project}</option>`;\r\n    })\r\n}\r\n\r\nfunction renderTasks() {\r\n    let tasksRender = tasks;\r\n\r\n    if(selectedProjectId && selectedProjectId != 'null') {\r\n        tasksRender = tasks.filter((task) => task.projectId === selectedProjectId);\r\n    }\r\n\r\n    tasksRender.forEach(({ _id, projectId, task, date, priority }) => {\r\n        const { color, project } = projects.find(({ _id }) => _id === projectId);\r\n        const backgroundColor = (0,_colors__WEBPACK_IMPORTED_MODULE_2__.convertHexToRGBA)(color, 20);\r\n        cardsContainer.innerHTML += `\r\n            <div class=\"task\" style=\"border-color: ${color};\">\r\n                <div class=\"task-tag\" style=\"background-color: ${backgroundColor}; color: ${color};\">${project}</div>\r\n                <p class=\"task-description\">${task}</p>\r\n                <p class=\"task-date\">Due date: <br>${date}</p>\r\n                <p class=\"task-priority\">Priority: ${priority}</p> \r\n                <div class=\"task-actions\">\r\n                    <i class=\"far fa-edit\" data-edit-task=${_id}></i>\r\n                    <i class=\"far fa-trash-alt\" data-delete-task=${_id}></i>\r\n                </div>\r\n            </div>\r\n        `\r\n    })\r\n}\r\n\r\nfunction clearChildElements(element) {\r\n    while(element.firstChild) {\r\n        element.removeChild(element.firstChild);\r\n    }\r\n}\r\n\r\nwindow.addEventListener('load', render);\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LOCAL_STORAGE_PROJECTS_KEY: () => (/* binding */ LOCAL_STORAGE_PROJECTS_KEY),\n/* harmony export */   LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY: () => (/* binding */ LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY),\n/* harmony export */   LOCAL_STORAGE_TASKS_KEY: () => (/* binding */ LOCAL_STORAGE_TASKS_KEY),\n/* harmony export */   save: () => (/* binding */ save)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n\r\n// --- LOCAL STORAGE KEYS --- \r\nconst LOCAL_STORAGE_PROJECTS_KEY = 'LOCAL_STORAGE_PROJECTS_KEY';\r\nconst LOCAL_STORAGE_TASKS_KEY = 'LOCAL_STORAGE_TASKS_KEY';\r\nconst LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = 'LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY';\r\n\r\nfunction save() {\r\n    localStorage.setItem(LOCAL_STORAGE_PROJECTS_KEY, JSON.stringify(_index__WEBPACK_IMPORTED_MODULE_0__.projects));\r\n    localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(_index__WEBPACK_IMPORTED_MODULE_0__.tasks));\r\n    localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY, _index__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/localStorage.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;