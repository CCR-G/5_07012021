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

/***/ "./src/classes/basket-item.js":
/*!************************************!*\
  !*** ./src/classes/basket-item.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BasketItem\": () => (/* binding */ BasketItem)\n/* harmony export */ });\n/* harmony import */ var _furniture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./furniture */ \"./src/classes/furniture.js\");\n\r\n\r\n/** Class representing a basket item (a Furniture put in the basket). */\r\nclass BasketItem {\r\n\r\n    /**\r\n     * @param {Furniture} furniture - A Furniture Object.\r\n     * @param {string} customisation - The Furniture customisation choice.\r\n     * @param {number} quantity - The quantity of this Furniture in basket.\r\n     */\r\n\r\n    constructor(furniture, customisation, quantity) {\r\n        this._id = furniture._id + customisation;\r\n        this.furniture = furniture;\r\n        this.customisation = customisation;\r\n        this.quantity = quantity;\r\n    }\r\n\r\n    get totalPrice() {\r\n        return this.furniture.price * this.quantity;\r\n    }\r\n\r\n    /**\r\n     * @param {number} quantity_to_be_added - The number of items that should be added to this basket item's quantity.\r\n     */\r\n    increaseQuantity(quantity_to_be_added) {\r\n        this.quantity += quantity_to_be_added;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/classes/basket-item.js?");

/***/ }),

/***/ "./src/classes/basket-storage.js":
/*!***************************************!*\
  !*** ./src/classes/basket-storage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Basket\": () => (/* binding */ Basket)\n/* harmony export */ });\n/* harmony import */ var _basket_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basket-item */ \"./src/classes/basket-item.js\");\n/* harmony import */ var _utils_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/local-storage */ \"./src/utils/local-storage.js\");\n\r\n\r\n\r\n/** Class representing the Basket. */\r\nclass Basket {\r\n\r\n    constructor() {\r\n        this.basket_storage = {};\r\n        this.initiateBasketStorage();\r\n    }\r\n\r\n    initiateBasketStorage() {\r\n        let stored_basket = _utils_local_storage__WEBPACK_IMPORTED_MODULE_1__.LOCAL_STORAGE.basket;\r\n        if (stored_basket) {\r\n            for (const id in stored_basket) {\r\n                this.basket_storage[id] = new _basket_item__WEBPACK_IMPORTED_MODULE_0__.BasketItem(\r\n                    stored_basket[id].furniture,\r\n                    stored_basket[id].customisation,\r\n                    stored_basket[id].quantity\r\n                );\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Adds a basket item to the basket.\r\n     * @param {BasketItem} basket_item - The BasketItem to add to the basket.\r\n     */\r\n    add(basket_item) {\r\n        if (!this.basket_storage[basket_item._id]) {\r\n            this.basket_storage[basket_item._id] = basket_item;\r\n        }\r\n        else {\r\n            this.basket_storage[basket_item._id].increaseQuantity(basket_item.quantity);\r\n        }\r\n\r\n        this.updateLocalStorage();\r\n    }\r\n\r\n    clear() {\r\n        this.basket_storage = {};\r\n\r\n        this.updateLocalStorage();\r\n    }\r\n\r\n    get quantity() {\r\n        let items_number = 0;\r\n        for (const basket_item_id in this.basket_storage) {\r\n            items_number += this.basket_storage[basket_item_id].quantity;\r\n        }\r\n        return items_number;\r\n    }\r\n\r\n    get isEmpty() {\r\n        return this.quantity === 0;\r\n    }\r\n\r\n    get totalPrice() {\r\n        let basket_total_price = 0;\r\n        for (const basket_item_id in this.basket_storage) {\r\n            basket_total_price += this.basket_storage[basket_item_id].totalPrice;\r\n        }\r\n        return basket_total_price;\r\n    }\r\n\r\n    get content() {\r\n        return this.basket_storage;\r\n    }\r\n\r\n    updateLocalStorage() {\r\n        _utils_local_storage__WEBPACK_IMPORTED_MODULE_1__.LOCAL_STORAGE.basket = this.basket_storage;\r\n    }\r\n}\n\n//# sourceURL=webpack://orinoco/./src/classes/basket-storage.js?");

/***/ }),

/***/ "./src/classes/furniture.js":
/*!**********************************!*\
  !*** ./src/classes/furniture.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Furniture\": () => (/* binding */ Furniture)\n/* harmony export */ });\n/** Class representing a furniture product. */\r\nclass Furniture {\r\n\r\n    /**\r\n    * Create a furniture.\r\n    * @param {JSON} json_furniture - The JSON representing the furniture product.\r\n    */\r\n\r\n    constructor(json_furniture) {\r\n        this._id = json_furniture._id;\r\n        this.name = json_furniture.name;\r\n        this.price = json_furniture.price / 100;\r\n        this.description = json_furniture.description;\r\n        this.varnish = json_furniture.varnish;\r\n        this.imageUrl = json_furniture.imageUrl;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/classes/furniture.js?");

/***/ }),

/***/ "./src/pages-logic/common/common.js":
/*!******************************************!*\
  !*** ./src/pages-logic/common/common.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _set_basket_quantity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set-basket-quantity */ \"./src/pages-logic/common/set-basket-quantity.js\");\n\r\n\r\n(0,_set_basket_quantity__WEBPACK_IMPORTED_MODULE_0__.setBasketQuantity)();\n\n//# sourceURL=webpack://orinoco/./src/pages-logic/common/common.js?");

/***/ }),

/***/ "./src/pages-logic/common/set-basket-quantity.js":
/*!*******************************************************!*\
  !*** ./src/pages-logic/common/set-basket-quantity.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setBasketQuantity\": () => (/* binding */ setBasketQuantity)\n/* harmony export */ });\n/* harmony import */ var _classes_basket_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/basket-storage */ \"./src/classes/basket-storage.js\");\n/* harmony import */ var _user_interfaces_header_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user-interfaces/header-ui */ \"./src/user-interfaces/header-ui/index.js\");\n\r\n\r\n\r\nfunction setBasketQuantity() {\r\n    setBasketQuantityInUI();\r\n    window.addEventListener(\"storage\", setBasketQuantityInUI);\r\n}\r\n\r\nfunction setBasketQuantityInUI() {\r\n    const basket = new _classes_basket_storage__WEBPACK_IMPORTED_MODULE_0__.Basket;\r\n    _user_interfaces_header_ui__WEBPACK_IMPORTED_MODULE_1__.HeaderUserInterface.showBasketQuantity(basket.quantity);\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/pages-logic/common/set-basket-quantity.js?");

/***/ }),

/***/ "./src/user-interfaces/common-utils/get-data-element.js":
/*!**************************************************************!*\
  !*** ./src/user-interfaces/common-utils/get-data-element.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDataElement\": () => (/* binding */ getDataElement)\n/* harmony export */ });\n/**\r\n * Retrieves the first HTML element corresponding to the data attribute's value passed as argument and throws an error otherwise.\r\n * The search scope can be an HTMLElement or defaults to the entire Document.\r\n *\r\n * @param {string} data_attribute_value - Value given to the data attribute of the element to look for\r\n * @param {HTMLElement} [search_scope=document] - Where to look for the data attribute, defaults to the entire Document\r\n\r\n * @returns {HTMLElement} First element matching the data attribute's value\r\n */\r\n\r\nfunction getDataElement(data_attribute_value, search_scope = document) {\r\n    const element = search_scope.querySelector(`[data='${data_attribute_value}']`);\r\n\r\n    if (!(element instanceof HTMLElement)) {\r\n        throw new Error(`data='${data_attribute_value}' could not be found or is not an HTMLElement`);\r\n    }\r\n\r\n    return element;\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/user-interfaces/common-utils/get-data-element.js?");

/***/ }),

/***/ "./src/user-interfaces/header-ui/index.js":
/*!************************************************!*\
  !*** ./src/user-interfaces/header-ui/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeaderUserInterface\": () => (/* binding */ HeaderUserInterface)\n/* harmony export */ });\n/* harmony import */ var _common_utils_get_data_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common-utils/get-data-element */ \"./src/user-interfaces/common-utils/get-data-element.js\");\n\r\n\r\nconst HeaderUserInterface = {\r\n    showBasketQuantity(basket_quantity) {\r\n        const quantity_container = (0,_common_utils_get_data_element__WEBPACK_IMPORTED_MODULE_0__.getDataElement)(\"basket-quantity\");\r\n        quantity_container.textContent = basket_quantity;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/user-interfaces/header-ui/index.js?");

/***/ }),

/***/ "./src/utils/local-storage.js":
/*!************************************!*\
  !*** ./src/utils/local-storage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LOCAL_STORAGE\": () => (/* binding */ LOCAL_STORAGE)\n/* harmony export */ });\nconst LOCAL_STORAGE = {\r\n    get basket() {\r\n        const local_storage_basket = window.localStorage.getItem(\"basket\");\r\n        return local_storage_basket ? JSON.parse(local_storage_basket) : null;\r\n    },\r\n\r\n    set basket(basket_storage) {\r\n        const json_basket_content = JSON.stringify(basket_storage);\r\n        window.localStorage.setItem(\"basket\", json_basket_content);\r\n    },\r\n\r\n    get lastOrder() {\r\n        const local_storage_last_order = window.localStorage.getItem(\"last-order\");\r\n        return local_storage_last_order ? JSON.parse(local_storage_last_order) : null;\r\n    },\r\n\r\n    set lastOrder(order_summary) {\r\n        const json_last_order = JSON.stringify(order_summary);\r\n        window.localStorage.setItem(\"last-order\", json_last_order);\r\n    },\r\n}\n\n//# sourceURL=webpack://orinoco/./src/utils/local-storage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages-logic/common/common.js");
/******/ 	
/******/ })()
;