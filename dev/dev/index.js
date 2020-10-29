/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function () {
    /******/ "use strict";
    /******/ var __webpack_modules__ = ({
        /***/ "./src/router.ts": 
        /*!***********************!*\
          !*** ./src/router.ts ***!
          \***********************/
        /*! namespace exports */
        /*! export default [provided] [no usage info] [missing usage info prevents renaming] */
        /*! other exports [not provided] [no usage info] */
        /*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
        /***/ (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"vue-router\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvue__WEBPACK_IMPORTED_MODULE_0___default().use((vue_router__WEBPACK_IMPORTED_MODULE_1___default()));\nvar routes = [];\nvar router = new (vue_router__WEBPACK_IMPORTED_MODULE_1___default())({\n    mode: \"history\",\n    base: process.env.BASE_URL,\n    routes: routes\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n\n//# sourceURL=webpack://Latsuj/./src/router.ts?");
            /***/ 
        }),
        /***/ "vue": 
        /*!**********************!*\
          !*** external "vue" ***!
          \**********************/
        /*! dynamic exports */
        /*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
        /*! other exports [maybe provided (runtime-defined)] [no usage info] */
        /*! runtime requirements: module */
        /***/ (function (module) {
            eval("module.exports = require(\"vue\");;\n\n//# sourceURL=webpack://Latsuj/external_%22vue%22?");
            /***/ 
        }),
        /***/ "vue-router": 
        /*!*****************************!*\
          !*** external "vue-router" ***!
          \*****************************/
        /*! dynamic exports */
        /*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
        /*! other exports [maybe provided (runtime-defined)] [no usage info] */
        /*! runtime requirements: module */
        /***/ (function (module) {
            eval("module.exports = require(\"vue-router\");;\n\n//# sourceURL=webpack://Latsuj/external_%22vue-router%22?");
            /***/ 
        })
        /******/ 
    });
    /************************************************************************/
    /******/ // The module cache
    /******/ var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ if (__webpack_module_cache__[moduleId]) {
            /******/ return __webpack_module_cache__[moduleId].exports;
            /******/ }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = __webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/ exports: {}
            /******/ 
        };
        /******/
        /******/ // Execute the module function
        /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        /******/
        /******/ // Return the exports of the module
        /******/ return module.exports;
        /******/ 
    }
    /******/
    /************************************************************************/
    /******/ /* webpack/runtime/compat get default export */
    /******/ (function () {
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = function (module) {
            /******/ var getter = module && module.__esModule ?
                /******/ function () { return module['default']; } :
                /******/ function () { return module; };
            /******/ __webpack_require__.d(getter, { a: getter });
            /******/ return getter;
            /******/ 
        };
        /******/ 
    })();
    /******/
    /******/ /* webpack/runtime/define property getters */
    /******/ (function () {
        /******/ // define getter functions for harmony exports
        /******/ __webpack_require__.d = function (exports, definition) {
            /******/ for (var key in definition) {
                /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                    /******/ }
                /******/ }
            /******/ 
        };
        /******/ 
    })();
    /******/
    /******/ /* webpack/runtime/hasOwnProperty shorthand */
    /******/ (function () {
        /******/ __webpack_require__.o = function (obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); };
        /******/ 
    })();
    /******/
    /******/ /* webpack/runtime/make namespace object */
    /******/ (function () {
        /******/ // define __esModule on exports
        /******/ __webpack_require__.r = function (exports) {
            /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/ }
            /******/ Object.defineProperty(exports, '__esModule', { value: true });
            /******/ 
        };
        /******/ 
    })();
    /******/
    /************************************************************************/
    /******/ // startup
    /******/ // Load entry module
    /******/ __webpack_require__("./src/router.ts");
    /******/ // This entry module used 'exports' so it can't be inlined
    /******/ 
})();
