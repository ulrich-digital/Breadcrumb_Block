/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"ud/breadcrumb","version":"0.1.0","title":"Breadcrumb-Block","category":"widgets","description":"Zeigt eine Breadcrumb-Navigation an.","keywords":["breadcrumb","navigationshilfe"],"textdomain":"ud-breadcrumb-block","editorStyle":"file:./build/editor-style.css","style":"file:./build/frontend-style.css","editorScript":"file:./build/editor-script.js"}');

/***/ }),

/***/ "./src/js/edit.js":
/*!************************!*\
  !*** ./src/js/edit.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BreadcrumbIcon: () => (/* binding */ BreadcrumbIcon),
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const BreadcrumbIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: "24",
  height: "24",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
    d: "M6.0151367,16.3867188h-3.2426758c-.690918,0-1.2529297-.5625-1.2529297-1.2539062v-7.2436523c0-.690918.5620117-1.253418,1.2529297-1.253418h3.2426758c.3461914,0,.6855469.140625.9306641.3857422l3.559082,3.559082c.5131836.5131836.5131836,1.3481445,0,1.8613281l-3.559082,3.559082c-.2470703.2480469-.578125.3857422-.9306641.3857422ZM3.0195312,14.8867188h2.9194336l3.3754883-3.3754883-3.3754883-3.3754883h-2.9194336v6.7509766ZM6.0151367,8.1357422h.0097656-.0097656Z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
    d: "M18.0185547,16.3867188h-5.1821289c-.5341797,0-1.0117188-.3193359-1.2167969-.8125-.2050781-.4941406-.0932617-1.0576172.2841797-1.4365234l2.6274414-2.6264648-2.6264648-2.6259766c-.3779297-.3779297-.4902344-.9418945-.2856445-1.4360352.2050781-.4941406.6826172-.8134766,1.2172852-.8134766h5.1821289c.3457031,0,.6835938.1401367.9296875.3842773l3.5595703,3.5605469c.5126953.5131836.5126953,1.3481445.0009766,1.8608398l-3.5595703,3.5595703c-.2451172.2451172-.5839844.3857422-.9306641.3857422ZM13.2763672,14.8867188h4.6660156l3.375-3.3754883-3.375-3.3754883h-4.6660156l2.4443359,2.4438477c.5136719.5136719.5136719,1.3496094,0,1.8632812l-2.4443359,2.4438477Z"
  })]
});
function Edit() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_0___default()), {
    block: "ud/breadcrumb"
  });
}

// Optional: falls du das Icon für z. B. Block Variations separat brauchst


/***/ }),

/***/ "./src/js/save.js":
/*!************************!*\
  !*** ./src/js/save.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Save)
/* harmony export */ });
// Dynamischer Block → nichts speichern
function Save() {
  return null;
}

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/***/ ((module) => {

module.exports = window["wp"]["serverSideRender"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/editor.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/js/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./src/js/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../block.json */ "./block.json");
/**
 * editor.js
 *
 * JavaScript für den Block-Editor (Gutenberg).
 * Wird ausschließlich im Backend geladen.
 *
 * Hinweis:
 * Diese Datei enthält editor-spezifische Interaktionen oder React-Komponenten.
 * Wird über webpack zu editor.js gebündelt und in block.json oder enqueue.php eingebunden.
 */




 // 👈 Icon importieren

wp.blocks.registerBlockType(_block_json__WEBPACK_IMPORTED_MODULE_2__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_2__,
  icon: _edit__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbIcon,
  // 👈 Icon explizit setzen
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=editor-script.js.map