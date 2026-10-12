/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

#app {
    display: grid;
    grid-template-columns: 260px 1fr;
    height: 100vh;
    gap: 20px;
}

.sidebar {
    grid-row: 1/3;
    grid-column: 1/2;
    overflow-y: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;

}

.todo-display {
    grid-column: 2/3;
    grid-row: 1/3;
    display: grid;
    grid-template-rows: auto 1fr;
}

.project-header {
    grid-row: 1/2;
}

#todos-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
}

.project-header {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.task {
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.task:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.08);
}
.task h3 {
    font-size: 1.05rem;
    color: #1e293b;
    font-weight: 600;
}

.task h4 {
    font-size: 0.8rem;
    color: #64748b;
    font-weight: 500;
}

.task p {
    font-size: 0.9rem;
    color: #334155;
    margin: 4px 0;
    line-height: 1.4;
}

.task-actions {
    display: flex;
    gap: 6px;
    align-items: center;
    margin-top: 10px;
    padding-top: 8px;
    border-top: 1px solid #f1f5f9; 
}

.task-actions button {
    flex: 1;
    padding: 6px 8px;
    font-size: 0.75rem;
    font-weight: 500;
    border-radius: 6px;
    border: 1px solid #cbd5e1;
    background-color: #f8fafc;
    color: #334155;
    cursor: pointer;
    transition: background-color 0.15s ease;
}

.task-actions button:hover {
    background-color: #f1f5f9;
    border-color: #94a3b8;
}

.task-actions button.delete-task {
    color: #ef4444;
    border-color: #fecaca;
    background-color: #fef2f2;
}

.task-actions button.delete-task:hover {
    background-color: #fee2e2;
}



.todo-display {
    padding: 20px;
    background-color: #f8fafc; }

  

.project-header button {
    background-color: #3b82f6; 
    color: #ffffff;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: background-color 0.2s ease, transform 0.1s ease;
    margin: 0 auto; 
    display: inline-block;
    margin-bottom: 10px;
}

button#add-task-btn:hover, 
.project-header button:hover {
    background-color: #2563eb; 
}
/* --- تنسيق عام للسايدبار --- */
.sidebar {
background-color: #ffffff;
    border-right: 1px solid #e2e8f0;
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

/* عناوين السايدبار (مثل My Todo List و Projects) */
.sidebar h1, .sidebar h2, .sidebar h3 {
    font-size: 1.1rem;
    color: #1e293b;
    font-weight: 600;
}

/* زر إضافة مشروع جديد */
.sidebar button, 
#add-project-btn {
    background-color: #3b82f6;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    padding: 10px 14px;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease;
    width: 100%;
    text-align: center;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.sidebar button:hover, 
#add-project-btn:hover {
    background-color: #2563eb;
}

/* --- إزالة النقاط المزعجة وتنسيق قائمة المشاريع --- */
.sidebar ul {
    list-style: none; /* إزالة النقاط السوداء كلياَ */
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

/* كل عنصر مشروع في القائمة */
.sidebar li {
padding: 10px 14px;
    border-radius: 8px;
    background-color: #f8fafc;
    border: 1px solid #f1f5f9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-size: 0.9rem;
    color: #334155;
    font-weight: 500;
    transition: all 0.2s ease;
}

/* تأثير التمرير والتحديد على المشروع */
.sidebar li:hover {
background-color: #f1f5f9;
    border-color: #cbd5e1;
    color: #0f172a;
}

/* تنسيق أيقونة أو زر الحذف الخاص بالمشروع داخل القائمة */
.sidebar li button, 
.sidebar li .delete-project {
    background: transparent !important;
    border: none !important;
    color: #94a3b8;
    padding: 4px;
    width: auto;
    font-size: 0.8rem;
    cursor: pointer;
    box-shadow: none !important;
}

.sidebar li button:hover, 
.sidebar li .delete-project:hover {
 
    color: #ef4444;
    background-color: #fee2e2 !important;

}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n#app {\n    display: grid;\n    grid-template-columns: 260px 1fr;\n    height: 100vh;\n    gap: 20px;\n}\n\n.sidebar {\n    grid-row: 1/3;\n    grid-column: 1/2;\n    overflow-y: auto;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n\n}\n\n.todo-display {\n    grid-column: 2/3;\n    grid-row: 1/3;\n    display: grid;\n    grid-template-rows: auto 1fr;\n}\n\n.project-header {\n    grid-row: 1/2;\n}\n\n#todos-list {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 15px;\n}\n\n.project-header {\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.task {\n    background-color: #ffffff;\n    border: 1px solid #e2e8f0;\n    border-radius: 10px;\n    padding: 16px;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n    transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.task:hover {\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.08);\n}\n.task h3 {\n    font-size: 1.05rem;\n    color: #1e293b;\n    font-weight: 600;\n}\n\n.task h4 {\n    font-size: 0.8rem;\n    color: #64748b;\n    font-weight: 500;\n}\n\n.task p {\n    font-size: 0.9rem;\n    color: #334155;\n    margin: 4px 0;\n    line-height: 1.4;\n}\n\n.task-actions {\n    display: flex;\n    gap: 6px;\n    align-items: center;\n    margin-top: 10px;\n    padding-top: 8px;\n    border-top: 1px solid #f1f5f9; \n}\n\n.task-actions button {\n    flex: 1;\n    padding: 6px 8px;\n    font-size: 0.75rem;\n    font-weight: 500;\n    border-radius: 6px;\n    border: 1px solid #cbd5e1;\n    background-color: #f8fafc;\n    color: #334155;\n    cursor: pointer;\n    transition: background-color 0.15s ease;\n}\n\n.task-actions button:hover {\n    background-color: #f1f5f9;\n    border-color: #94a3b8;\n}\n\n.task-actions button.delete-task {\n    color: #ef4444;\n    border-color: #fecaca;\n    background-color: #fef2f2;\n}\n\n.task-actions button.delete-task:hover {\n    background-color: #fee2e2;\n}\n\n\n\n.todo-display {\n    padding: 20px;\n    background-color: #f8fafc; }\n\n  \n\n.project-header button {\n    background-color: #3b82f6; \n    color: #ffffff;\n    border: none;\n    border-radius: 8px;\n    padding: 10px 20px;\n    font-size: 0.95rem;\n    font-weight: 600;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n    transition: background-color 0.2s ease, transform 0.1s ease;\n    margin: 0 auto; \n    display: inline-block;\n    margin-bottom: 10px;\n}\n\nbutton#add-task-btn:hover, \n.project-header button:hover {\n    background-color: #2563eb; \n}\n/* --- تنسيق عام للسايدبار --- */\n.sidebar {\nbackground-color: #ffffff;\n    border-right: 1px solid #e2e8f0;\n    padding: 24px 16px;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n}\n\n/* عناوين السايدبار (مثل My Todo List و Projects) */\n.sidebar h1, .sidebar h2, .sidebar h3 {\n    font-size: 1.1rem;\n    color: #1e293b;\n    font-weight: 600;\n}\n\n/* زر إضافة مشروع جديد */\n.sidebar button, \n#add-project-btn {\n    background-color: #3b82f6;\n    color: #ffffff;\n    border: none;\n    border-radius: 8px;\n    padding: 10px 14px;\n    font-size: 0.85rem;\n    font-weight: 600;\n    cursor: pointer;\n    transition: background-color 0.2s ease;\n    width: 100%;\n    text-align: center;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n\n.sidebar button:hover, \n#add-project-btn:hover {\n    background-color: #2563eb;\n}\n\n/* --- إزالة النقاط المزعجة وتنسيق قائمة المشاريع --- */\n.sidebar ul {\n    list-style: none; /* إزالة النقاط السوداء كلياَ */\n    padding: 0;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n}\n\n/* كل عنصر مشروع في القائمة */\n.sidebar li {\npadding: 10px 14px;\n    border-radius: 8px;\n    background-color: #f8fafc;\n    border: 1px solid #f1f5f9;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    cursor: pointer;\n    font-size: 0.9rem;\n    color: #334155;\n    font-weight: 500;\n    transition: all 0.2s ease;\n}\n\n/* تأثير التمرير والتحديد على المشروع */\n.sidebar li:hover {\nbackground-color: #f1f5f9;\n    border-color: #cbd5e1;\n    color: #0f172a;\n}\n\n/* تنسيق أيقونة أو زر الحذف الخاص بالمشروع داخل القائمة */\n.sidebar li button, \n.sidebar li .delete-project {\n    background: transparent !important;\n    border: none !important;\n    color: #94a3b8;\n    padding: 4px;\n    width: auto;\n    font-size: 0.8rem;\n    cursor: pointer;\n    box-shadow: none !important;\n}\n\n.sidebar li button:hover, \n.sidebar li .delete-project:hover {\n \n    color: #ef4444;\n    background-color: #fee2e2 !important;\n\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ "./src/Logic.js"
/*!**********************!*\
  !*** ./src/Logic.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   ProjectManager: () => (/* binding */ ProjectManager),
/* harmony export */   Todo: () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
    constructor(title, description, dueDate, priority, completed = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
    }
    toggleComplete() {
        this.completed = !this.completed;
    }
    updateTodo(newTitle, newdescription, newdueDate, newpriority) {
        this.title = newTitle;
        this.description = newdescription;
        this.dueDate = newdueDate;
        this.priority = newpriority;
    }
}
class Project {
    constructor(name) {
        this.name = name;
        this.tasks = []
    }
    addTask(taskObject) {
        this.tasks.push(taskObject);
        return taskObject;
    }
    deleteTask(index) {
        this.tasks.splice(index, 1);
    }
}

class ProjectManager {
    constructor() {
        this.projects = [];
        const defaultProject = new Project("Default");
        this.projects.push(defaultProject);
        this.currentProject = defaultProject;
    }
    addProject(projectName) {
        const newProject = new Project(projectName);
        this.projects.push(newProject);
        return newProject;
    }
    deleteProject(index) {
        if (index === 0) return;
        this.projects.splice(index, 1);
        this.currentProject = this.projects[0];
    }
    getProjects() {
        return this.projects;
    }
    setCurrentProject(index) {
        if (this.projects[index])
            this.currentProject = this.projects[index];
    }
    getCurrentProject() {
        return this.currentProject;
    }

}

/***/ },

/***/ "./src/dom.js"
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   modal: () => (/* binding */ modal),
/* harmony export */   renderProjects: () => (/* binding */ renderProjects),
/* harmony export */   renderTodos: () => (/* binding */ renderTodos),
/* harmony export */   setupFormEvents: () => (/* binding */ setupFormEvents),
/* harmony export */   setupProjectEvents: () => (/* binding */ setupProjectEvents),
/* harmony export */   setupTodoEvents: () => (/* binding */ setupTodoEvents)
/* harmony export */ });
/* harmony import */ var _Logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logic */ "./src/Logic.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");


let editIndex = null;
const submit = document.getElementById('sub');
submit.textContent = "Add Task";
const renderProjects = (manager) => {
    const projects_list = document.getElementById('projects-list');
    projects_list.textContent = "";
    const projects = manager.getProjects();
    for (let index = 0; index < projects.length; index++) {
        const list = document.createElement('li');
        list.textContent = projects[index].name;
        list.setAttribute('data-index', index);

        if (projects[index] === manager.getCurrentProject()) {
            list.classList.add('active')
        }
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '🗑️';
        deleteBtn.classList.add('delete-project');
        if (projects[index].name != 'Default') {
            list.appendChild(deleteBtn);
        }
        deleteBtn.setAttribute('data-index', index);
        projects_list.appendChild(list);


    }

}
const renderTodos = (project) => {
    const current_title = document.getElementById('current-project-title');
    current_title.textContent = project.name;
    const todos_list = document.getElementById('todos-list');
    todos_list.textContent = "";
    const tasks = project.tasks;
    for (let index = 0; index < tasks.length; index++) {
        const task = document.createElement('div');
        task.classList.add('task');
        task.setAttribute('data-index', index);
        const title = document.createElement('h3');
        const dueDate = document.createElement('h4');
        const priority = document.createElement('h4');
        const description = document.createElement('p');
        const isCompleted = document.createElement('button');
        isCompleted.setAttribute('data-index', index);
        const deleteTask = document.createElement('button');
        deleteTask.setAttribute('data-index', index);
        const updateTask = document.createElement('button');
        updateTask.setAttribute('data-index', index)
        title.textContent = tasks[index].title;
        dueDate.textContent = tasks[index].dueDate;
        priority.textContent = tasks[index].priority;
        description.textContent = tasks[index].description;
        isCompleted.classList.add("completed");
        deleteTask.classList.add('delete-task');
        updateTask.classList.add('update-task');
        if (tasks[index].completed === true)
            isCompleted.textContent = "☑️";
        else isCompleted.textContent = "🔳";
        deleteTask.textContent = "X";
        updateTask.textContent = "Update";
        task.appendChild(title);
        task.appendChild(dueDate);
        task.appendChild(priority);
        task.appendChild(description);
        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('task-actions');

        actionsDiv.appendChild(isCompleted);
        actionsDiv.appendChild(deleteTask);
        actionsDiv.appendChild(updateTask);

        task.appendChild(actionsDiv);
        todos_list.appendChild(task);

    }
}


const modal = () => {
    const add_project = document.getElementById('add-project-btn');
    const add_task = document.getElementById('add-task-btn');
    const form_project = document.getElementById('add-project-form');
    const form_task = document.getElementById('add-todo-form');
    const cancel_project = document.getElementById('cancel-project-btn');
    const cancel_task = document.getElementById('cancel-task-btn');




    const openModalProject = () => {

        form_project.showModal();
    }
    add_project.addEventListener("click", openModalProject);
    const cancelModalProject = () => {
        form_project.close();
    }
    cancel_project.addEventListener("click", cancelModalProject);

    const openModalTask = () => {
        submit.textContent = "Add Task";
        form_task.showModal();
    }
    add_task.addEventListener("click", openModalTask);
    const cancelModalTask = () => {
        form_task.close();
    }
    cancel_task.addEventListener("click", cancelModalTask);

}




const setupFormEvents = (manager) => {
    const project_form = document.getElementById('add-project');
    const form_project = document.getElementById('add-project-form');

    const project_name = document.getElementById('project-name-input');
    const readFormProject = (e) => {
        e.preventDefault();
        const rProjectName = project_name.value;
        manager.addProject(rProjectName);
        renderProjects(manager);
        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveData)(manager);
        project_form.reset();
        form_project.close();
    }




    const todo_form = document.getElementById('add-todo');
    const form_task = document.getElementById('add-todo-form');
    const todo_title = document.getElementById('todo-title-input');
    const todo_description = document.getElementById('todo-desc-input');
    const todo_date = document.getElementById('todo-date-input');
    const todo_priority = document.getElementById('todo-priority-select');
    const readFormTask = (e) => {
        e.preventDefault();
        const rTaskTitle = todo_title.value;
        const rTodoDescription = todo_description.value;
        const rTodoDate = todo_date.value;
        const rTodoPriority = todo_priority.value;
        if (editIndex != null) {
            const CurrentTask = manager.getCurrentProject().tasks[editIndex];
            CurrentTask.updateTodo(rTaskTitle, rTodoDescription, rTodoDate, rTodoPriority);
            editIndex = null;
        }
        else {
            const newTask = new _Logic__WEBPACK_IMPORTED_MODULE_0__.Todo(rTaskTitle, rTodoDescription, rTodoDate, rTodoPriority);
            manager.getCurrentProject().addTask(newTask);

        }

        renderTodos(manager.getCurrentProject());
        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveData)(manager);
        todo_form.reset();
        form_task.close();

    }
    project_form.addEventListener("submit", readFormProject);
    todo_form.addEventListener("submit", readFormTask);

}




const setupProjectEvents = (manager) => {
    const projects_list = document.getElementById('projects-list');
    const clickeP = (e) => {
        if (e.target.classList.contains('delete-project')) {
            const index = Number(e.target.getAttribute('data-index'));
            manager.deleteProject(index);
            renderProjects(manager);
            renderTodos(manager.getCurrentProject());
            (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveData)(manager)
            return;
        }

        const li = e.target.closest('li');
        if (li && li.hasAttribute('data-index')) {
            const index = Number(li.getAttribute('data-index'));
            manager.setCurrentProject(index);
            renderProjects(manager);
            renderTodos(manager.getCurrentProject());
            (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveData)(manager)


        }

    }
    projects_list.addEventListener("click", clickeP)

}
const setupTodoEvents = (manager) => {
    const form_task = document.getElementById('add-todo-form');
    const todo_title = document.getElementById('todo-title-input');
    const todo_description = document.getElementById('todo-desc-input');
    const todo_date = document.getElementById('todo-date-input');
    const todo_priority = document.getElementById('todo-priority-select');
    console.log("هاد هو المانجر اللي وصل للـ DOM:", manager);
    const tasks_list = document.getElementById('todos-list');
    const clickT = (e) => {
        const indext = Number(e.target.getAttribute('data-index'));
        if (e.target.classList.contains('completed')) {
            manager.getCurrentProject().tasks[indext].toggleComplete();
            renderTodos(manager.getCurrentProject());
            (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveData)(manager);
        }
        if (e.target.classList.contains('delete-task')) {
            manager.getCurrentProject().deleteTask(indext);
            renderTodos(manager.getCurrentProject());
            (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveData)(manager);
        }
        if (e.target.classList.contains('update-task')) {
            const uTask = manager.getCurrentProject().tasks[indext];
            todo_title.value = uTask.title;
            todo_description.value = uTask.description;
            todo_date.value = uTask.dueDate;
            todo_priority.value = uTask.priority;
            editIndex = indext;
            submit.textContent = "Save Changes";

            form_task.showModal();



        }
    }
    tasks_list.addEventListener("click", clickT);
}


/***/ },

/***/ "./src/storage.js"
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadData: () => (/* binding */ loadData),
/* harmony export */   saveData: () => (/* binding */ saveData)
/* harmony export */ });
/* harmony import */ var _Logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logic.js */ "./src/Logic.js");

const saveData = (ProjectMameger) => {
    const ProjectsString = JSON.stringify(ProjectMameger);
    localStorage.setItem('todoAppProjects', ProjectsString);
}
const loadData = () => {
    const Projects = localStorage.getItem('todoAppProjects');
    if (Projects != null) {
        let projectParce = JSON.parse(Projects);
        const manager = new _Logic_js__WEBPACK_IMPORTED_MODULE_0__.ProjectManager();
        manager.projects = [];
        projectParce.projects.forEach(function (oldProject) {
            const newProject = new _Logic_js__WEBPACK_IMPORTED_MODULE_0__.Project(oldProject.name);
            oldProject.tasks.forEach(function (oldTodo) {
                const newTodo = new _Logic_js__WEBPACK_IMPORTED_MODULE_0__.Todo(oldTodo.title, oldTodo.description, oldTodo.dueDate, oldTodo.priority);
                newTodo.completed = oldTodo.completed;
                newProject.addTask(newTodo);
            })
            manager.projects.push(newProject)

        })
        if (projectParce.currentProject) {
            // ابحث عن رقم (index) المشروع المخزن ضمن القائمة الجديدة
            const index = manager.projects.findIndex(p => p.name === projectParce.currentProject.name);

            // إذا لقاه، خليه هو المشروع الحالي
            if (index !== -1) {
                manager.setCurrentProject(index);
            }
        }
        return manager;


    }
    else {
        const Manager = new _Logic_js__WEBPACK_IMPORTED_MODULE_0__.ProjectManager();
        return Manager;
    }
}

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _Logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logic */ "./src/Logic.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/storage.js");




const manager=(0,_storage__WEBPACK_IMPORTED_MODULE_3__.loadData)();
(0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderProjects)(manager);
(0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(manager.getCurrentProject());
(0,_dom__WEBPACK_IMPORTED_MODULE_1__.setupProjectEvents)(manager);
(0,_dom__WEBPACK_IMPORTED_MODULE_1__.setupTodoEvents)(manager);

(0,_dom__WEBPACK_IMPORTED_MODULE_1__.modal)();
(0,_dom__WEBPACK_IMPORTED_MODULE_1__.setupFormEvents)(manager);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFNBQVMsS0FBSyxVQUFVLG9CQUFvQixNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLE9BQU8sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sd0JBQXdCLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLFlBQVksTUFBTSxZQUFZLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxPQUFPLFlBQVksT0FBTyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxPQUFPLFVBQVUsYUFBYSw2QkFBNkIsaUJBQWlCLGdCQUFnQiw2QkFBNkIsR0FBRyxVQUFVLG9CQUFvQix1Q0FBdUMsb0JBQW9CLGdCQUFnQixHQUFHLGNBQWMsb0JBQW9CLHVCQUF1Qix1QkFBdUIsb0JBQW9CLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEtBQUssbUJBQW1CLHVCQUF1QixvQkFBb0Isb0JBQW9CLG1DQUFtQyxHQUFHLHFCQUFxQixvQkFBb0IsR0FBRyxpQkFBaUIsb0JBQW9CLGtFQUFrRSxnQkFBZ0IsR0FBRyxxQkFBcUIseUJBQXlCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEdBQUcsV0FBVyxnQ0FBZ0MsZ0NBQWdDLDBCQUEwQixvQkFBb0Isb0JBQW9CLDZCQUE2QixlQUFlLGdEQUFnRCw0REFBNEQsR0FBRyxpQkFBaUIscURBQXFELEdBQUcsWUFBWSx5QkFBeUIscUJBQXFCLHVCQUF1QixHQUFHLGNBQWMsd0JBQXdCLHFCQUFxQix1QkFBdUIsR0FBRyxhQUFhLHdCQUF3QixxQkFBcUIsb0JBQW9CLHVCQUF1QixHQUFHLG1CQUFtQixvQkFBb0IsZUFBZSwwQkFBMEIsdUJBQXVCLHVCQUF1QixxQ0FBcUMsR0FBRywwQkFBMEIsY0FBYyx1QkFBdUIseUJBQXlCLHVCQUF1Qix5QkFBeUIsZ0NBQWdDLGdDQUFnQyxxQkFBcUIsc0JBQXNCLDhDQUE4QyxHQUFHLGdDQUFnQyxnQ0FBZ0MsNEJBQTRCLEdBQUcsc0NBQXNDLHFCQUFxQiw0QkFBNEIsZ0NBQWdDLEdBQUcsNENBQTRDLGdDQUFnQyxHQUFHLHVCQUF1QixvQkFBb0Isa0NBQWtDLGtDQUFrQyxpQ0FBaUMscUJBQXFCLG1CQUFtQix5QkFBeUIseUJBQXlCLHlCQUF5Qix1QkFBdUIsc0JBQXNCLCtDQUErQyxrRUFBa0Usc0JBQXNCLDRCQUE0QiwwQkFBMEIsR0FBRywrREFBK0QsaUNBQWlDLEdBQUcsK0NBQStDLDRCQUE0QixzQ0FBc0MseUJBQXlCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEdBQUcsaUdBQWlHLHdCQUF3QixxQkFBcUIsdUJBQXVCLEdBQUcsb0VBQW9FLGdDQUFnQyxxQkFBcUIsbUJBQW1CLHlCQUF5Qix5QkFBeUIseUJBQXlCLHVCQUF1QixzQkFBc0IsNkNBQTZDLGtCQUFrQix5QkFBeUIsZ0RBQWdELEdBQUcscURBQXFELGdDQUFnQyxHQUFHLDJFQUEyRSx3QkFBd0IsaURBQWlELGdCQUFnQixvQkFBb0IsNkJBQTZCLGVBQWUsR0FBRyxpREFBaUQscUJBQXFCLHlCQUF5QixnQ0FBZ0MsZ0NBQWdDLG9CQUFvQixxQ0FBcUMsMEJBQTBCLHNCQUFzQix3QkFBd0IscUJBQXFCLHVCQUF1QixnQ0FBZ0MsR0FBRyxpRUFBaUUsNEJBQTRCLDRCQUE0QixxQkFBcUIsR0FBRyxtSEFBbUgseUNBQXlDLDhCQUE4QixxQkFBcUIsbUJBQW1CLGtCQUFrQix3QkFBd0Isc0JBQXNCLGtDQUFrQyxHQUFHLG1FQUFtRSx3QkFBd0IsMkNBQTJDLEtBQUsscUJBQXFCO0FBQ3IwTjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ3RQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQ3hCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0M7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0I7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUQrQjtBQUNnQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5QkFBeUI7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0RBQVE7QUFDaEI7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx3Q0FBSTtBQUNwQzs7QUFFQTs7QUFFQTtBQUNBLFFBQVEsa0RBQVE7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0RBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtEQUFROzs7QUFHcEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrREFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0RBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMU8wRDtBQUNuRDtBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFEQUFjO0FBQzFDO0FBQ0E7QUFDQSxtQ0FBbUMsOENBQU87QUFDMUM7QUFDQSxvQ0FBb0MsMkNBQUk7QUFDeEM7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLDRCQUE0QixxREFBYztBQUMxQztBQUNBO0FBQ0EsQzs7Ozs7O1VDdENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUM1QkE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLGlDQUFpQyxXQUFXO1VBQzVDO1VBQ0EsRTs7O1VDUEE7VUFDQTtVQUNBO1VBQ0E7VUFDQSx5Q0FBeUMsd0NBQXdDO1VBQ2pGO1VBQ0E7VUFDQSxFOzs7VUNQQSx5Rjs7O1VDQUE7VUFDQTtVQUNBLHNEQUFzRCxpQkFBaUI7VUFDdkUsZ0RBQWdELGFBQWE7VUFDN0QsRTs7O1VDSkEsbUM7Ozs7Ozs7Ozs7Ozs7O0FDQW9CO0FBTWU7QUFDbUI7QUFDakI7QUFDckMsY0FBYyxrREFBUTtBQUN0QixvREFBYztBQUNkLGlEQUFXO0FBQ1gsd0RBQWtCO0FBQ2xCLHFEQUFlOztBQUVmLDJDQUFLO0FBQ0wscURBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0xvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4jYXBwIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjYwcHggMWZyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4uc2lkZWJhciB7XG4gICAgZ3JpZC1yb3c6IDEvMztcbiAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNXB4O1xuXG59XG5cbi50b2RvLWRpc3BsYXkge1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gICAgZ3JpZC1yb3c6IDEvMztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG59XG5cbi5wcm9qZWN0LWhlYWRlciB7XG4gICAgZ3JpZC1yb3c6IDEvMjtcbn1cblxuI3RvZG9zLWxpc3Qge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gICAgZ2FwOiAxNXB4O1xufVxuXG4ucHJvamVjdC1oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4udGFzayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2U7XG59XG5cbi50YXNrOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuLnRhc2sgaDMge1xuICAgIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgICBjb2xvcjogIzFlMjkzYjtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udGFzayBoNCB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgY29sb3I6ICM2NDc0OGI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRhc2sgcCB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgY29sb3I6ICMzMzQxNTU7XG4gICAgbWFyZ2luOiA0cHggMDtcbiAgICBsaW5lLWhlaWdodDogMS40O1xufVxuXG4udGFzay1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNnB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmNWY5OyBcbn1cblxuLnRhc2stYWN0aW9ucyBidXR0b24ge1xuICAgIGZsZXg6IDE7XG4gICAgcGFkZGluZzogNnB4IDhweDtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xuICAgIGNvbG9yOiAjMzM0MTU1O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2U7XG59XG5cbi50YXNrLWFjdGlvbnMgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xuICAgIGJvcmRlci1jb2xvcjogIzk0YTNiODtcbn1cblxuLnRhc2stYWN0aW9ucyBidXR0b24uZGVsZXRlLXRhc2sge1xuICAgIGNvbG9yOiAjZWY0NDQ0O1xuICAgIGJvcmRlci1jb2xvcjogI2ZlY2FjYTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmMmYyO1xufVxuXG4udGFzay1hY3Rpb25zIGJ1dHRvbi5kZWxldGUtdGFzazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZTJlMjtcbn1cblxuXG5cbi50b2RvLWRpc3BsYXkge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYzsgfVxuXG4gIFxuXG4ucHJvamVjdC1oZWFkZXIgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I4MmY2OyBcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZSwgdHJhbnNmb3JtIDAuMXMgZWFzZTtcbiAgICBtYXJnaW46IDAgYXV0bzsgXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmJ1dHRvbiNhZGQtdGFzay1idG46aG92ZXIsIFxuLnByb2plY3QtaGVhZGVyIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1NjNlYjsgXG59XG4vKiAtLS0g2KrZhtiz2YrZgiDYudin2YUg2YTZhNiz2KfZitiv2KjYp9ixIC0tLSAqL1xuLnNpZGViYXIge1xuYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTJlOGYwO1xuICAgIHBhZGRpbmc6IDI0cHggMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xufVxuXG4vKiDYudmG2KfZiNmK2YYg2KfZhNiz2KfZitiv2KjYp9ixICjZhdir2YQgTXkgVG9kbyBMaXN0INmIIFByb2plY3RzKSAqL1xuLnNpZGViYXIgaDEsIC5zaWRlYmFyIGgyLCAuc2lkZWJhciBoMyB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgY29sb3I6ICMxZTI5M2I7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLyog2LLYsSDYpdi22KfZgdipINmF2LTYsdmI2Lkg2KzYr9mK2K8gKi9cbi5zaWRlYmFyIGJ1dHRvbiwgXG4jYWRkLXByb2plY3QtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I4MmY2O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMTBweCAxNHB4O1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi5zaWRlYmFyIGJ1dHRvbjpob3ZlciwgXG4jYWRkLXByb2plY3QtYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU2M2ViO1xufVxuXG4vKiAtLS0g2KXYstin2YTYqSDYp9mE2YbZgtin2Lcg2KfZhNmF2LLYudis2Kkg2YjYqtmG2LPZitmCINmC2KfYptmF2Kkg2KfZhNmF2LTYp9ix2YrYuSAtLS0gKi9cbi5zaWRlYmFyIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lOyAvKiDYpdiy2KfZhNipINin2YTZhtmC2KfYtyDYp9mE2LPZiNiv2KfYoSDZg9mE2YrYp9mOICovXG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNnB4O1xufVxuXG4vKiDZg9mEINi52YbYtdixINmF2LTYsdmI2Lkg2YHZiiDYp9mE2YLYp9im2YXYqSAqL1xuLnNpZGViYXIgbGkge1xucGFkZGluZzogMTBweCAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWY1Zjk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgY29sb3I6ICMzMzQxNTU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4vKiDYqtij2KvZitixINin2YTYqtmF2LHZitixINmI2KfZhNiq2K3Yr9mK2K8g2LnZhNmJINin2YTZhdi02LHZiNi5ICovXG4uc2lkZWJhciBsaTpob3ZlciB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xuICAgIGJvcmRlci1jb2xvcjogI2NiZDVlMTtcbiAgICBjb2xvcjogIzBmMTcyYTtcbn1cblxuLyog2KrZhtiz2YrZgiDYo9mK2YLZiNmG2Kkg2KPZiCDYstixINin2YTYrdiw2YEg2KfZhNiu2KfYtSDYqNin2YTZhdi02LHZiNi5INiv2KfYrtmEINin2YTZgtin2KbZhdipICovXG4uc2lkZWJhciBsaSBidXR0b24sIFxuLnNpZGViYXIgbGkgLmRlbGV0ZS1wcm9qZWN0IHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjOTRhM2I4O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uc2lkZWJhciBsaSBidXR0b246aG92ZXIsIFxuLnNpZGViYXIgbGkgLmRlbGV0ZS1wcm9qZWN0OmhvdmVyIHtcbiBcbiAgICBjb2xvcjogI2VmNDQ0NDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlMmUyICFpbXBvcnRhbnQ7XG5cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUzs7QUFFYjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsYUFBYTtJQUNiLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkRBQTJEO0lBQzNELFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUix5Q0FBeUM7SUFDekMscURBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksOENBQThDO0FBQ2xEO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7SUFDUixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7Ozs7QUFJQTtJQUNJLGFBQWE7SUFDYix5QkFBeUIsRUFBRTs7OztBQUkvQjtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysd0NBQXdDO0lBQ3hDLDJEQUEyRDtJQUMzRCxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSx5QkFBeUI7QUFDN0I7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQSx5QkFBeUI7SUFDckIsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQSxtREFBbUQ7QUFDbkQ7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQSx3QkFBd0I7QUFDeEI7O0lBRUkseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixzQ0FBc0M7SUFDdEMsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5Q0FBeUM7QUFDN0M7O0FBRUE7O0lBRUkseUJBQXlCO0FBQzdCOztBQUVBLHVEQUF1RDtBQUN2RDtJQUNJLGdCQUFnQixFQUFFLCtCQUErQjtJQUNqRCxVQUFVO0lBQ1YsU0FBUztJQUNULGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBLDZCQUE2QjtBQUM3QjtBQUNBLGtCQUFrQjtJQUNkLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUEsdUNBQXVDO0FBQ3ZDO0FBQ0EseUJBQXlCO0lBQ3JCLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOztBQUVBLHlEQUF5RDtBQUN6RDs7SUFFSSxrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsMkJBQTJCO0FBQy9COztBQUVBOzs7SUFHSSxjQUFjO0lBQ2Qsb0NBQW9DOztBQUV4Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jYXBwIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNjBweCAxZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxuXFxufVxcblxcbi50b2RvLWRpc3BsYXkge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXIge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG4jdG9kb3MtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogOHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2U7XFxufVxcblxcbi50YXNrOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcXG59XFxuLnRhc2sgaDMge1xcbiAgICBmb250LXNpemU6IDEuMDVyZW07XFxuICAgIGNvbG9yOiAjMWUyOTNiO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4udGFzayBoNCB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBjb2xvcjogIzY0NzQ4YjtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnRhc2sgcCB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBjb2xvcjogIzMzNDE1NTtcXG4gICAgbWFyZ2luOiA0cHggMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcXG59XFxuXFxuLnRhc2stYWN0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNnB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjVmOTsgXFxufVxcblxcbi50YXNrLWFjdGlvbnMgYnV0dG9uIHtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogNnB4IDhweDtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxuICAgIGNvbG9yOiAjMzM0MTU1O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZTtcXG59XFxuXFxuLnRhc2stYWN0aW9ucyBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xcbiAgICBib3JkZXItY29sb3I6ICM5NGEzYjg7XFxufVxcblxcbi50YXNrLWFjdGlvbnMgYnV0dG9uLmRlbGV0ZS10YXNrIHtcXG4gICAgY29sb3I6ICNlZjQ0NDQ7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZlY2FjYTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZjJmMjtcXG59XFxuXFxuLnRhc2stYWN0aW9ucyBidXR0b24uZGVsZXRlLXRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlMmUyO1xcbn1cXG5cXG5cXG5cXG4udG9kby1kaXNwbGF5IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYzsgfVxcblxcbiAgXFxuXFxuLnByb2plY3QtaGVhZGVyIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjgyZjY7IFxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLCB0cmFuc2Zvcm0gMC4xcyBlYXNlO1xcbiAgICBtYXJnaW46IDAgYXV0bzsgXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuYnV0dG9uI2FkZC10YXNrLWJ0bjpob3ZlciwgXFxuLnByb2plY3QtaGVhZGVyIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTYzZWI7IFxcbn1cXG4vKiAtLS0g2KrZhtiz2YrZgiDYudin2YUg2YTZhNiz2KfZitiv2KjYp9ixIC0tLSAqL1xcbi5zaWRlYmFyIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTJlOGYwO1xcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTZweDtcXG59XFxuXFxuLyog2LnZhtin2YjZitmGINin2YTYs9in2YrYr9io2KfYsSAo2YXYq9mEIE15IFRvZG8gTGlzdCDZiCBQcm9qZWN0cykgKi9cXG4uc2lkZWJhciBoMSwgLnNpZGViYXIgaDIsIC5zaWRlYmFyIGgzIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGNvbG9yOiAjMWUyOTNiO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4vKiDYstixINil2LbYp9mB2Kkg2YXYtNix2YjYuSDYrNiv2YrYryAqL1xcbi5zaWRlYmFyIGJ1dHRvbiwgXFxuI2FkZC1wcm9qZWN0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjgyZjY7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogMTBweCAxNHB4O1xcbiAgICBmb250LXNpemU6IDAuODVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbn1cXG5cXG4uc2lkZWJhciBidXR0b246aG92ZXIsIFxcbiNhZGQtcHJvamVjdC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjU2M2ViO1xcbn1cXG5cXG4vKiAtLS0g2KXYstin2YTYqSDYp9mE2YbZgtin2Lcg2KfZhNmF2LLYudis2Kkg2YjYqtmG2LPZitmCINmC2KfYptmF2Kkg2KfZhNmF2LTYp9ix2YrYuSAtLS0gKi9cXG4uc2lkZWJhciB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7IC8qINil2LLYp9mE2Kkg2KfZhNmG2YLYp9i3INin2YTYs9mI2K/Yp9ihINmD2YTZitin2Y4gKi9cXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDZweDtcXG59XFxuXFxuLyog2YPZhCDYudmG2LXYsSDZhdi02LHZiNi5INmB2Yog2KfZhNmC2KfYptmF2KkgKi9cXG4uc2lkZWJhciBsaSB7XFxucGFkZGluZzogMTBweCAxNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWY1Zjk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgY29sb3I6ICMzMzQxNTU7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxufVxcblxcbi8qINiq2KPYq9mK2LEg2KfZhNiq2YXYsdmK2LEg2YjYp9mE2KrYrdiv2YrYryDYudmE2Ykg2KfZhNmF2LTYsdmI2LkgKi9cXG4uc2lkZWJhciBsaTpob3ZlciB7XFxuYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjY2JkNWUxO1xcbiAgICBjb2xvcjogIzBmMTcyYTtcXG59XFxuXFxuLyog2KrZhtiz2YrZgiDYo9mK2YLZiNmG2Kkg2KPZiCDYstixINin2YTYrdiw2YEg2KfZhNiu2KfYtSDYqNin2YTZhdi02LHZiNi5INiv2KfYrtmEINin2YTZgtin2KbZhdipICovXFxuLnNpZGViYXIgbGkgYnV0dG9uLCBcXG4uc2lkZWJhciBsaSAuZGVsZXRlLXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgY29sb3I6ICM5NGEzYjg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLnNpZGViYXIgbGkgYnV0dG9uOmhvdmVyLCBcXG4uc2lkZWJhciBsaSAuZGVsZXRlLXByb2plY3Q6aG92ZXIge1xcbiBcXG4gICAgY29sb3I6ICNlZjQ0NDQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWUyZTIgIWltcG9ydGFudDtcXG5cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY2xhc3MgVG9kbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgfVxuICAgIHRvZ2dsZUNvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9ICF0aGlzLmNvbXBsZXRlZDtcbiAgICB9XG4gICAgdXBkYXRlVG9kbyhuZXdUaXRsZSwgbmV3ZGVzY3JpcHRpb24sIG5ld2R1ZURhdGUsIG5ld3ByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld2Rlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBuZXdkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gbmV3cHJpb3JpdHk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdXG4gICAgfVxuICAgIGFkZFRhc2sodGFza09iamVjdCkge1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFza09iamVjdCk7XG4gICAgICAgIHJldHVybiB0YXNrT2JqZWN0O1xuICAgIH1cbiAgICBkZWxldGVUYXNrKGluZGV4KSB7XG4gICAgICAgIHRoaXMudGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0TWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBbXTtcbiAgICAgICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcIkRlZmF1bHRcIik7XG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChkZWZhdWx0UHJvamVjdCk7XG4gICAgICAgIHRoaXMuY3VycmVudFByb2plY3QgPSBkZWZhdWx0UHJvamVjdDtcbiAgICB9XG4gICAgYWRkUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIHJldHVybiBuZXdQcm9qZWN0O1xuICAgIH1cbiAgICBkZWxldGVQcm9qZWN0KGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMuY3VycmVudFByb2plY3QgPSB0aGlzLnByb2plY3RzWzBdO1xuICAgIH1cbiAgICBnZXRQcm9qZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XG4gICAgfVxuICAgIHNldEN1cnJlbnRQcm9qZWN0KGluZGV4KSB7XG4gICAgICAgIGlmICh0aGlzLnByb2plY3RzW2luZGV4XSlcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFByb2plY3QgPSB0aGlzLnByb2plY3RzW2luZGV4XTtcbiAgICB9XG4gICAgZ2V0Q3VycmVudFByb2plY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRQcm9qZWN0O1xuICAgIH1cblxufSIsImltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi9Mb2dpY1wiO1xuaW1wb3J0IHsgc2F2ZURhdGEsIGxvYWREYXRhIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xubGV0IGVkaXRJbmRleCA9IG51bGw7XG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3ViJyk7XG5zdWJtaXQudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG5jb25zdCByZW5kZXJQcm9qZWN0cyA9IChtYW5hZ2VyKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHNfbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cy1saXN0Jyk7XG4gICAgcHJvamVjdHNfbGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgY29uc3QgcHJvamVjdHMgPSBtYW5hZ2VyLmdldFByb2plY3RzKCk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHByb2plY3RzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGlzdC50ZXh0Q29udGVudCA9IHByb2plY3RzW2luZGV4XS5uYW1lO1xuICAgICAgICBsaXN0LnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcblxuICAgICAgICBpZiAocHJvamVjdHNbaW5kZXhdID09PSBtYW5hZ2VyLmdldEN1cnJlbnRQcm9qZWN0KCkpIHtcbiAgICAgICAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ/Cfl5HvuI8nO1xuICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXByb2plY3QnKTtcbiAgICAgICAgaWYgKHByb2plY3RzW2luZGV4XS5uYW1lICE9ICdEZWZhdWx0Jykge1xuICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XG4gICAgICAgIHByb2plY3RzX2xpc3QuYXBwZW5kQ2hpbGQobGlzdCk7XG5cblxuICAgIH1cblxufVxuY29uc3QgcmVuZGVyVG9kb3MgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRfdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC1wcm9qZWN0LXRpdGxlJyk7XG4gICAgY3VycmVudF90aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICBjb25zdCB0b2Rvc19saXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9zLWxpc3QnKTtcbiAgICB0b2Rvc19saXN0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBjb25zdCB0YXNrcyA9IHByb2plY3QudGFza3M7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRhc2tzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICB0YXNrLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgaXNDb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgaXNDb21wbGV0ZWQuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpO1xuICAgICAgICBjb25zdCBkZWxldGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZVRhc2suc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpO1xuICAgICAgICBjb25zdCB1cGRhdGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHVwZGF0ZVRhc2suc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFza3NbaW5kZXhdLnRpdGxlO1xuICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdGFza3NbaW5kZXhdLmR1ZURhdGU7XG4gICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdGFza3NbaW5kZXhdLnByaW9yaXR5O1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2tzW2luZGV4XS5kZXNjcmlwdGlvbjtcbiAgICAgICAgaXNDb21wbGV0ZWQuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcbiAgICAgICAgZGVsZXRlVGFzay5jbGFzc0xpc3QuYWRkKCdkZWxldGUtdGFzaycpO1xuICAgICAgICB1cGRhdGVUYXNrLmNsYXNzTGlzdC5hZGQoJ3VwZGF0ZS10YXNrJyk7XG4gICAgICAgIGlmICh0YXNrc1tpbmRleF0uY29tcGxldGVkID09PSB0cnVlKVxuICAgICAgICAgICAgaXNDb21wbGV0ZWQudGV4dENvbnRlbnQgPSBcIuKYke+4j1wiO1xuICAgICAgICBlbHNlIGlzQ29tcGxldGVkLnRleHRDb250ZW50ID0gXCLwn5SzXCI7XG4gICAgICAgIGRlbGV0ZVRhc2sudGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICAgICAgdXBkYXRlVGFzay50ZXh0Q29udGVudCA9IFwiVXBkYXRlXCI7XG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIGNvbnN0IGFjdGlvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWN0aW9uc0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWFjdGlvbnMnKTtcblxuICAgICAgICBhY3Rpb25zRGl2LmFwcGVuZENoaWxkKGlzQ29tcGxldGVkKTtcbiAgICAgICAgYWN0aW9uc0Rpdi5hcHBlbmRDaGlsZChkZWxldGVUYXNrKTtcbiAgICAgICAgYWN0aW9uc0Rpdi5hcHBlbmRDaGlsZCh1cGRhdGVUYXNrKTtcblxuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKGFjdGlvbnNEaXYpO1xuICAgICAgICB0b2Rvc19saXN0LmFwcGVuZENoaWxkKHRhc2spO1xuXG4gICAgfVxufVxuXG5cbmNvbnN0IG1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZF9wcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0LWJ0bicpO1xuICAgIGNvbnN0IGFkZF90YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrLWJ0bicpO1xuICAgIGNvbnN0IGZvcm1fcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC1mb3JtJyk7XG4gICAgY29uc3QgZm9ybV90YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10b2RvLWZvcm0nKTtcbiAgICBjb25zdCBjYW5jZWxfcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtcHJvamVjdC1idG4nKTtcbiAgICBjb25zdCBjYW5jZWxfdGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtdGFzay1idG4nKTtcblxuXG5cblxuICAgIGNvbnN0IG9wZW5Nb2RhbFByb2plY3QgPSAoKSA9PiB7XG5cbiAgICAgICAgZm9ybV9wcm9qZWN0LnNob3dNb2RhbCgpO1xuICAgIH1cbiAgICBhZGRfcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3Blbk1vZGFsUHJvamVjdCk7XG4gICAgY29uc3QgY2FuY2VsTW9kYWxQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBmb3JtX3Byb2plY3QuY2xvc2UoKTtcbiAgICB9XG4gICAgY2FuY2VsX3Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbmNlbE1vZGFsUHJvamVjdCk7XG5cbiAgICBjb25zdCBvcGVuTW9kYWxUYXNrID0gKCkgPT4ge1xuICAgICAgICBzdWJtaXQudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG4gICAgICAgIGZvcm1fdGFzay5zaG93TW9kYWwoKTtcbiAgICB9XG4gICAgYWRkX3Rhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5Nb2RhbFRhc2spO1xuICAgIGNvbnN0IGNhbmNlbE1vZGFsVGFzayA9ICgpID0+IHtcbiAgICAgICAgZm9ybV90YXNrLmNsb3NlKCk7XG4gICAgfVxuICAgIGNhbmNlbF90YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxNb2RhbFRhc2spO1xuXG59XG5cblxuXG5cbmNvbnN0IHNldHVwRm9ybUV2ZW50cyA9IChtYW5hZ2VyKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdF9mb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0Jyk7XG4gICAgY29uc3QgZm9ybV9wcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0LWZvcm0nKTtcblxuICAgIGNvbnN0IHByb2plY3RfbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LW5hbWUtaW5wdXQnKTtcbiAgICBjb25zdCByZWFkRm9ybVByb2plY3QgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHJQcm9qZWN0TmFtZSA9IHByb2plY3RfbmFtZS52YWx1ZTtcbiAgICAgICAgbWFuYWdlci5hZGRQcm9qZWN0KHJQcm9qZWN0TmFtZSk7XG4gICAgICAgIHJlbmRlclByb2plY3RzKG1hbmFnZXIpO1xuICAgICAgICBzYXZlRGF0YShtYW5hZ2VyKTtcbiAgICAgICAgcHJvamVjdF9mb3JtLnJlc2V0KCk7XG4gICAgICAgIGZvcm1fcHJvamVjdC5jbG9zZSgpO1xuICAgIH1cblxuXG5cblxuICAgIGNvbnN0IHRvZG9fZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdG9kbycpO1xuICAgIGNvbnN0IGZvcm1fdGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdG9kby1mb3JtJyk7XG4gICAgY29uc3QgdG9kb190aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXRpdGxlLWlucHV0Jyk7XG4gICAgY29uc3QgdG9kb19kZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWRlc2MtaW5wdXQnKTtcbiAgICBjb25zdCB0b2RvX2RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1kYXRlLWlucHV0Jyk7XG4gICAgY29uc3QgdG9kb19wcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXByaW9yaXR5LXNlbGVjdCcpO1xuICAgIGNvbnN0IHJlYWRGb3JtVGFzayA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgclRhc2tUaXRsZSA9IHRvZG9fdGl0bGUudmFsdWU7XG4gICAgICAgIGNvbnN0IHJUb2RvRGVzY3JpcHRpb24gPSB0b2RvX2Rlc2NyaXB0aW9uLnZhbHVlO1xuICAgICAgICBjb25zdCByVG9kb0RhdGUgPSB0b2RvX2RhdGUudmFsdWU7XG4gICAgICAgIGNvbnN0IHJUb2RvUHJpb3JpdHkgPSB0b2RvX3ByaW9yaXR5LnZhbHVlO1xuICAgICAgICBpZiAoZWRpdEluZGV4ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IEN1cnJlbnRUYXNrID0gbWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpLnRhc2tzW2VkaXRJbmRleF07XG4gICAgICAgICAgICBDdXJyZW50VGFzay51cGRhdGVUb2RvKHJUYXNrVGl0bGUsIHJUb2RvRGVzY3JpcHRpb24sIHJUb2RvRGF0ZSwgclRvZG9Qcmlvcml0eSk7XG4gICAgICAgICAgICBlZGl0SW5kZXggPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUb2RvKHJUYXNrVGl0bGUsIHJUb2RvRGVzY3JpcHRpb24sIHJUb2RvRGF0ZSwgclRvZG9Qcmlvcml0eSk7XG4gICAgICAgICAgICBtYW5hZ2VyLmdldEN1cnJlbnRQcm9qZWN0KCkuYWRkVGFzayhuZXdUYXNrKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyVG9kb3MobWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpKTtcbiAgICAgICAgc2F2ZURhdGEobWFuYWdlcik7XG4gICAgICAgIHRvZG9fZm9ybS5yZXNldCgpO1xuICAgICAgICBmb3JtX3Rhc2suY2xvc2UoKTtcblxuICAgIH1cbiAgICBwcm9qZWN0X2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCByZWFkRm9ybVByb2plY3QpO1xuICAgIHRvZG9fZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHJlYWRGb3JtVGFzayk7XG5cbn1cblxuXG5cblxuY29uc3Qgc2V0dXBQcm9qZWN0RXZlbnRzID0gKG1hbmFnZXIpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0c19saXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzLWxpc3QnKTtcbiAgICBjb25zdCBjbGlja2VQID0gKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLXByb2plY3QnKSkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpO1xuICAgICAgICAgICAgbWFuYWdlci5kZWxldGVQcm9qZWN0KGluZGV4KTtcbiAgICAgICAgICAgIHJlbmRlclByb2plY3RzKG1hbmFnZXIpO1xuICAgICAgICAgICAgcmVuZGVyVG9kb3MobWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpKTtcbiAgICAgICAgICAgIHNhdmVEYXRhKG1hbmFnZXIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsaSA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2xpJyk7XG4gICAgICAgIGlmIChsaSAmJiBsaS5oYXNBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIobGkuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpO1xuICAgICAgICAgICAgbWFuYWdlci5zZXRDdXJyZW50UHJvamVjdChpbmRleCk7XG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0cyhtYW5hZ2VyKTtcbiAgICAgICAgICAgIHJlbmRlclRvZG9zKG1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKSk7XG4gICAgICAgICAgICBzYXZlRGF0YShtYW5hZ2VyKVxuXG5cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHByb2plY3RzX2xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrZVApXG5cbn1cbmNvbnN0IHNldHVwVG9kb0V2ZW50cyA9IChtYW5hZ2VyKSA9PiB7XG4gICAgY29uc3QgZm9ybV90YXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10b2RvLWZvcm0nKTtcbiAgICBjb25zdCB0b2RvX3RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tdGl0bGUtaW5wdXQnKTtcbiAgICBjb25zdCB0b2RvX2Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZGVzYy1pbnB1dCcpO1xuICAgIGNvbnN0IHRvZG9fZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWRhdGUtaW5wdXQnKTtcbiAgICBjb25zdCB0b2RvX3ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tcHJpb3JpdHktc2VsZWN0Jyk7XG4gICAgY29uc29sZS5sb2coXCLZh9in2K8g2YfZiCDYp9mE2YXYp9mG2KzYsSDYp9mE2YTZiiDZiNi12YQg2YTZhNmAIERPTTpcIiwgbWFuYWdlcik7XG4gICAgY29uc3QgdGFza3NfbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2Rvcy1saXN0Jyk7XG4gICAgY29uc3QgY2xpY2tUID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXh0ID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY29tcGxldGVkJykpIHtcbiAgICAgICAgICAgIG1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKS50YXNrc1tpbmRleHRdLnRvZ2dsZUNvbXBsZXRlKCk7XG4gICAgICAgICAgICByZW5kZXJUb2RvcyhtYW5hZ2VyLmdldEN1cnJlbnRQcm9qZWN0KCkpO1xuICAgICAgICAgICAgc2F2ZURhdGEobWFuYWdlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLXRhc2snKSkge1xuICAgICAgICAgICAgbWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpLmRlbGV0ZVRhc2soaW5kZXh0KTtcbiAgICAgICAgICAgIHJlbmRlclRvZG9zKG1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKSk7XG4gICAgICAgICAgICBzYXZlRGF0YShtYW5hZ2VyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd1cGRhdGUtdGFzaycpKSB7XG4gICAgICAgICAgICBjb25zdCB1VGFzayA9IG1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKS50YXNrc1tpbmRleHRdO1xuICAgICAgICAgICAgdG9kb190aXRsZS52YWx1ZSA9IHVUYXNrLnRpdGxlO1xuICAgICAgICAgICAgdG9kb19kZXNjcmlwdGlvbi52YWx1ZSA9IHVUYXNrLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgdG9kb19kYXRlLnZhbHVlID0gdVRhc2suZHVlRGF0ZTtcbiAgICAgICAgICAgIHRvZG9fcHJpb3JpdHkudmFsdWUgPSB1VGFzay5wcmlvcml0eTtcbiAgICAgICAgICAgIGVkaXRJbmRleCA9IGluZGV4dDtcbiAgICAgICAgICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9IFwiU2F2ZSBDaGFuZ2VzXCI7XG5cbiAgICAgICAgICAgIGZvcm1fdGFzay5zaG93TW9kYWwoKTtcblxuXG5cbiAgICAgICAgfVxuICAgIH1cbiAgICB0YXNrc19saXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja1QpO1xufVxuZXhwb3J0IHtcbiAgICByZW5kZXJQcm9qZWN0cyxcbiAgICByZW5kZXJUb2RvcyxcbiAgICBzZXR1cFByb2plY3RFdmVudHMsXG4gICAgc2V0dXBUb2RvRXZlbnRzLFxuICAgIG1vZGFsLFxuICAgIHNldHVwRm9ybUV2ZW50c1xufTsiLCJpbXBvcnQgeyBUb2RvLCBQcm9qZWN0LCBQcm9qZWN0TWFuYWdlciB9IGZyb20gJy4vTG9naWMuanMnXG5leHBvcnQgY29uc3Qgc2F2ZURhdGEgPSAoUHJvamVjdE1hbWVnZXIpID0+IHtcbiAgICBjb25zdCBQcm9qZWN0c1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KFByb2plY3RNYW1lZ2VyKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0FwcFByb2plY3RzJywgUHJvamVjdHNTdHJpbmcpO1xufVxuZXhwb3J0IGNvbnN0IGxvYWREYXRhID0gKCkgPT4ge1xuICAgIGNvbnN0IFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9BcHBQcm9qZWN0cycpO1xuICAgIGlmIChQcm9qZWN0cyAhPSBudWxsKSB7XG4gICAgICAgIGxldCBwcm9qZWN0UGFyY2UgPSBKU09OLnBhcnNlKFByb2plY3RzKTtcbiAgICAgICAgY29uc3QgbWFuYWdlciA9IG5ldyBQcm9qZWN0TWFuYWdlcigpO1xuICAgICAgICBtYW5hZ2VyLnByb2plY3RzID0gW107XG4gICAgICAgIHByb2plY3RQYXJjZS5wcm9qZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChvbGRQcm9qZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3Qob2xkUHJvamVjdC5uYW1lKTtcbiAgICAgICAgICAgIG9sZFByb2plY3QudGFza3MuZm9yRWFjaChmdW5jdGlvbiAob2xkVG9kbykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyhvbGRUb2RvLnRpdGxlLCBvbGRUb2RvLmRlc2NyaXB0aW9uLCBvbGRUb2RvLmR1ZURhdGUsIG9sZFRvZG8ucHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgIG5ld1RvZG8uY29tcGxldGVkID0gb2xkVG9kby5jb21wbGV0ZWQ7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdC5hZGRUYXNrKG5ld1RvZG8pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIG1hbmFnZXIucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KVxuXG4gICAgICAgIH0pXG4gICAgICAgIGlmIChwcm9qZWN0UGFyY2UuY3VycmVudFByb2plY3QpIHtcbiAgICAgICAgICAgIC8vINin2KjYrdirINi52YYg2LHZgtmFIChpbmRleCkg2KfZhNmF2LTYsdmI2Lkg2KfZhNmF2K7YstmGINi22YXZhiDYp9mE2YLYp9im2YXYqSDYp9mE2KzYr9mK2K/YqVxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBtYW5hZ2VyLnByb2plY3RzLmZpbmRJbmRleChwID0+IHAubmFtZSA9PT0gcHJvamVjdFBhcmNlLmN1cnJlbnRQcm9qZWN0Lm5hbWUpO1xuXG4gICAgICAgICAgICAvLyDYpdiw2Kcg2YTZgtin2YfYjCDYrtmE2YrZhyDZh9mIINin2YTZhdi02LHZiNi5INin2YTYrdin2YTZilxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIG1hbmFnZXIuc2V0Q3VycmVudFByb2plY3QoaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYW5hZ2VyO1xuXG5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IE1hbmFnZXIgPSBuZXcgUHJvamVjdE1hbmFnZXIoKTtcbiAgICAgICAgcmV0dXJuIE1hbmFnZXI7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbmNvbnN0IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0Y29uc3QgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdGNvbnN0IG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHRjb25zdCBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0Y29uc3QgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIvdmFsdWUgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSk7IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCB7IHJlbmRlclByb2plY3RzLCBcbiAgICByZW5kZXJUb2RvcywgXG4gICAgc2V0dXBQcm9qZWN0RXZlbnRzLCBcbiAgICBzZXR1cFRvZG9FdmVudHMsIFxuICAgIG1vZGFsLCBcbiAgICBzZXR1cEZvcm1FdmVudHMgfSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCB7IFRvZG8sUHJvamVjdCxQcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuL0xvZ2ljXCI7XG5pbXBvcnQgeyBsb2FkRGF0YSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmNvbnN0IG1hbmFnZXI9bG9hZERhdGEoKTtcbnJlbmRlclByb2plY3RzKG1hbmFnZXIpO1xucmVuZGVyVG9kb3MobWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpKTtcbnNldHVwUHJvamVjdEV2ZW50cyhtYW5hZ2VyKTtcbnNldHVwVG9kb0V2ZW50cyhtYW5hZ2VyKTtcblxubW9kYWwoKTtcbnNldHVwRm9ybUV2ZW50cyhtYW5hZ2VyKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==