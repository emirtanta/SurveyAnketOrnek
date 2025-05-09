/*!
 * surveyjs - Survey JavaScript library v1.9.127
 * Copyright (c) 2015-2024 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if (typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if (typeof define === 'function' && define.amd)
		define("survey-jquery", ["jquery"], factory);
	else if (typeof exports === 'object')
		exports["survey-jquery"] = factory(require("jquery"));
	else
		root["Survey"] = factory(root["jQuery"]);
})(this, function (__WEBPACK_EXTERNAL_MODULE_jquery__) {
	return /******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
				/******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
				/******/
};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
			/******/
}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
				/******/
}
			/******/
};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
				/******/
}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
			/******/
};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function (value, mode) {
/******/ 		if (mode & 1) value = __webpack_require__(value);
/******/ 		if (mode & 8) return value;
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
			/******/
};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
			/******/
};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entries/jquery.ts");
		/******/
})
/************************************************************************/
/******/({

/***/ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/knockout/components/panel/panel.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/html-loader?interpolate!./node_modules/val-loader!./src/knockout/components/panel/panel.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports) {

				module.exports = "<!-- ko template: { name: 'survey-panel', data: question, as: 'question', afterRender: question.koPanelAfterRender } --><!-- /ko -->";

				/***/
}),

/***/ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/knockout/components/popup/popup.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/html-loader?interpolate!./node_modules/val-loader!./src/knockout/components/popup/popup.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports) {

				module.exports = "<div>\n  <!-- ko with: popupViewModel -->\n  <div class=\"sv-popup\" tabindex=\"-1\"\n    data-bind=\"visible: isVisible, click: function(data, event) { clickOutside(event); return true; }, class: styleClass, event: { keydown: function(data, event) { onKeyDown(event); return true; } }\">\n    <div class=\"sv-popup__container\"\n      data-bind=\"style: { left: left, top: top, height: height, minWidth: minWidth, width: width }, click: function() { return true; }, clickBubble: false\">\n      <div class=\"sv-popup__shadow\">\n        <!-- ko if: $data.showHeader -->\n        <!-- ko template: { name: $data.popupHeaderTemplate, data: $data } -->\n        <!-- /ko -->\n        <!-- /ko -->\n        <div class=\"sv-popup__body-content\">\n          <!-- ko if: !!title  -->\n          <div class=\"sv-popup__body-header\" data-bind=\"text: title\"></div>\n          <!-- /ko -->\n          <div class=\"sv-popup__scrolling-content\">\n            <div class=\"sv-popup__content\"\n              data-bind=\"component: { name: contentComponentName, params: contentComponentData }\"></div>\n          </div>\n          <!-- ko if: showFooter  -->\n          <div class=\"sv-popup__body-footer\">\n            <!-- ko component: { name: \"sv-action-bar\", params: { model: $data.footerToolbar } } -->\n            <!-- /ko -->\n          </div>\n          <!-- /ko -->\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /ko -->\n</div>\n";

				/***/
}),

/***/ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/knockout/components/progress/buttons.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/html-loader?interpolate!./node_modules/val-loader!./src/knockout/components/progress/buttons.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports) {

				module.exports = "<div data-bind=\"css: survey.css.progressButtonsContainerCenter\">\n    <div data-bind=\"css: survey.css.progressButtonsContainer\">\n        <div data-bind=\"css: getScrollButtonCss(true), click: clickScrollButton.bind($data, $element.nextElementSibling, true)\" role=\"button\"></div>\n        <div data-bind=\"css: survey.css.progressButtonsListContainer\">\n            <ul data-bind=\"foreach: survey.visiblePages, css: survey.css.progressButtonsList\">\n                <li data-bind=\"css: $parent.getListElementCss($index), click: $parent.isListElementClickable($index) ? $parent.clickListElement.bind($parent, $index) : null\">\n                    <div data-bind=\"css: css.progressButtonsPageTitle, text: renderedNavigationTitle, attr: { title: renderedNavigationTitle }\"></div>\n                    <div data-bind=\"css: css.progressButtonsPageDescription, text: locNavigationDescription.koRenderedHtml(), attr: { title: locNavigationDescription.koRenderedHtml() }\"></div>\n                </li>\n            </ul>\n        </div>\n        <div data-bind=\"css: getScrollButtonCss(false), click: clickScrollButton.bind($data, $element.previousElementSibling, false)\" role=\"button\"></div>\n    </div>\n</div>";

				/***/
}),

/***/ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/knockout/components/progress/progress.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/html-loader?interpolate!./node_modules/val-loader!./src/knockout/components/progress/progress.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports) {

				module.exports = "<div data-bind=\"css: getProgressCssClasses()\">\n    <div data-bind=\"css: model.css.progressBar, style: { width: model.progressValue + '%' }\"\n        role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-label=\"progress\">\n        <span data-bind=\"text: model.progressText, css: getProgressTextInBarCss(model.css)\"></span>\n    </div>\n    <span data-bind=\"text: model.progressText, css: getProgressTextUnderBarCss(model.css)\"></span>\n</div>";

				/***/
}),

/***/ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/knockout/components/progress/toc.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/html-loader?interpolate!./node_modules/val-loader!./src/knockout/components/progress/toc.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports) {

				module.exports = "<!-- ko with: tocModel -->\n<div data-bind=\"css: containerCss\">\n    <!-- ko ifnot: isMobile -->\n    <sv-list params=\"model: listModel\"></sv-list>\n    <!-- /ko -->\n    <!-- ko if: isMobile -->\n    <div class=\"\" data-bind=\"click: togglePopup, key2click\">\n        <sv-svg-icon class=\"\" params=\"iconName: icon, size: 24\"></sv-svg-icon>\n        <sv-popup params=\"model: popupModel\"></sv-popup>\n    </div>\n    <!-- /ko -->\n</div>\n<!-- /ko -->";

				/***/
}),

/***/ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/knockout/templates/entry.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/html-loader?interpolate!./node_modules/val-loader!./src/knockout/templates/entry.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

				module.exports = "" + __webpack_require__(/*! ./comment.html */ "./src/knockout/templates/comment.html") + "\n" + __webpack_require__(/*! ./flowpanel.html */ "./src/knockout/templates/flowpanel.html") + "\n" + __webpack_require__(/*! ./header.html */ "./src/knockout/templates/header.html") + "\n" + __webpack_require__(/*! ./index.html */ "./src/knockout/templates/index.html") + "\n" + __webpack_require__(/*! ./page.html */ "./src/knockout/templates/page.html") + "\n" + __webpack_require__(/*! ./panel.html */ "./src/knockout/templates/panel.html") + "\n" + __webpack_require__(/*! ./rows.html */ "./src/knockout/templates/rows.html") + "\n" + __webpack_require__(/*! ./row.html */ "./src/knockout/templates/row.html") + "\n" + __webpack_require__(/*! ./string.html */ "./src/knockout/templates/string.html") + "\n" + __webpack_require__(/*! ./timerpanel.html */ "./src/knockout/templates/timerpanel.html") + "\n" + __webpack_require__(/*! ./question.html */ "./src/knockout/templates/question.html") + "\n" + __webpack_require__(/*! ./questioncontent.html */ "./src/knockout/templates/questioncontent.html") + "\n" + __webpack_require__(/*! ./questiontitle.html */ "./src/knockout/templates/questiontitle.html") + "\n" + __webpack_require__(/*! ./question-boolean.html */ "./src/knockout/templates/question-boolean.html") + "\n" + __webpack_require__(/*! ./question-checkbox.html */ "./src/knockout/templates/question-checkbox.html") + "\n" + __webpack_require__(/*! ./question-tagbox.html */ "./src/knockout/templates/question-tagbox.html") + "\n" + __webpack_require__(/*! ./question-ranking.html */ "./src/knockout/templates/question-ranking.html") + "\n" + __webpack_require__(/*! ./question-comment.html */ "./src/knockout/templates/question-comment.html") + "\n" + __webpack_require__(/*! ./question-composite.html */ "./src/knockout/templates/question-composite.html") + "\n" + __webpack_require__(/*! ./question-custom.html */ "./src/knockout/templates/question-custom.html") + "\n" + __webpack_require__(/*! ./question-dropdown.html */ "./src/knockout/templates/question-dropdown.html") + "\n" + __webpack_require__(/*! ./question-empty.html */ "./src/knockout/templates/question-empty.html") + "\n" + __webpack_require__(/*! ./question-errors.html */ "./src/knockout/templates/question-errors.html") + "\n" + __webpack_require__(/*! ./question-expression.html */ "./src/knockout/templates/question-expression.html") + "\n" + __webpack_require__(/*! ./question-file.html */ "./src/knockout/templates/question-file.html") + "\n" + __webpack_require__(/*! ./question-html.html */ "./src/knockout/templates/question-html.html") + "\n" + __webpack_require__(/*! ./question-image.html */ "./src/knockout/templates/question-image.html") + "\n" + __webpack_require__(/*! ./question-imagepicker.html */ "./src/knockout/templates/question-imagepicker.html") + "\n" + __webpack_require__(/*! ./question-matrix.html */ "./src/knockout/templates/question-matrix.html") + "\n" + __webpack_require__(/*! ./question-matrixdynamic.html */ "./src/knockout/templates/question-matrixdynamic.html") + "\n" + __webpack_require__(/*! ./question-matrixdropdown.html */ "./src/knockout/templates/question-matrixdropdown.html") + "\n" + __webpack_require__(/*! ./question-multipletext.html */ "./src/knockout/templates/question-multipletext.html") + "\n" + __webpack_require__(/*! ./question-paneldynamic.html */ "./src/knockout/templates/question-paneldynamic.html") + "\n" + __webpack_require__(/*! ./question-paneldynamic-navigator.html */ "./src/knockout/templates/question-paneldynamic-navigator.html") + "\n" + __webpack_require__(/*! ./question-radiogroup.html */ "./src/knockout/templates/question-radiogroup.html") + "\n" + __webpack_require__(/*! ./question-rating.html */ "./src/knockout/templates/question-rating.html") + "\n" + __webpack_require__(/*! ./question-signaturepad.html */ "./src/knockout/templates/question-signaturepad.html") + "\n" + __webpack_require__(/*! ./question-text.html */ "./src/knockout/templates/question-text.html") + "\n" + __webpack_require__(/*! ./question-buttongroup.html */ "./src/knockout/templates/question-buttongroup.html") + "\n" + __webpack_require__(/*! ./popup-pointer.html */ "./src/knockout/templates/popup-pointer.html") + "";

				/***/
}),

/***/ "./node_modules/html-loader/index.js?interpolate!./node_modules/val-loader/index.js!./src/knockout/templates/window.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/html-loader?interpolate!./node_modules/val-loader!./src/knockout/templates/window.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function (module, exports) {

				module.exports = "<div data-bind=\"css: cssRoot, style:{width: renderedWidth, maxWidth: renderedWidth}, event: { scroll: $data.onScroll }\">\n    <div data-bind=\"css: cssRootContent\">\n        <div data-bind=\"css: cssHeaderRoot, {cssRootCollapsedMod: isCollapsed}\">\n\n            <!-- ko if: isCollapsed && !!locTitle -->  \n            <div data-bind=\"css: cssHeaderTitleCollapsed, text: locTitle.koRenderedHtml\"></div>\n            <!-- /ko -->\n    \n            <div data-bind=\"css: cssHeaderButtonsContainer\">\n                <div data-bind=\"click:doExpand, css: cssHeaderCollapseButton\">\n                    <!-- ko if: isExpanded-->  \n                    <!-- ko component: { name: 'sv-svg-icon', params: { iconName: 'icon-minimize_16x16', size: '16' } } --><!-- /ko -->\n                    <!-- /ko -->\n                    \n                    <!-- ko if: isCollapsed-->  \n                    <!-- ko component: { name: 'sv-svg-icon', params: { iconName: 'icon-restore_16x16', size: '16' } } --><!-- /ko -->\n                    <!-- /ko -->\n                </div>\n                <!-- ko if: allowClose -->      \n                <div data-bind=\"click:doHide, css: cssHeaderCloseButton\">\n                <!-- ko component: { name: 'sv-svg-icon', params: { iconName: 'icon-close_16x16', size: '16' } } --><!-- /ko -->\n                </div>\n                <!-- /ko -->\n            </div>\n        </div>\n        <div data-bind=\"visible:isExpanded, css: cssBody\">\n            <survey params=\"survey: survey\"></survey>\n        </div>\n    </div>\n</div>";

				/***/
}),

/***/ "./node_modules/knockout/build/output/knockout-latest.js":
/*!***************************************************************!*\
  !*** ./node_modules/knockout/build/output/knockout-latest.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

				var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Knockout JavaScript library v3.5.1
 * (c) The Knockout.js team - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

				(function () {
					(function (n) {
						var A = this || (0, eval)("this"), w = A.document, R = A.navigator, v = A.jQuery, H = A.JSON; v || "undefined" === typeof jQuery || (v = jQuery); (function (n) {
							true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
								__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
									(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
								__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined
						})(function (S, T) {
							function K(a, c) { return null === a || typeof a in W ? a === c : !1 } function X(b, c) { var d; return function () { d || (d = a.a.setTimeout(function () { d = n; b() }, c)) } } function Y(b, c) {
								var d; return function () {
									clearTimeout(d);
									d = a.a.setTimeout(b, c)
								}
							} function Z(a, c) { c && "change" !== c ? "beforeChange" === c ? this.pc(a) : this.gb(a, c) : this.qc(a) } function aa(a, c) { null !== c && c.s && c.s() } function ba(a, c) { var d = this.qd, e = d[r]; e.ra || (this.Qb && this.mb[c] ? (d.uc(c, a, this.mb[c]), this.mb[c] = null, --this.Qb) : e.I[c] || d.uc(c, a, e.J ? { da: a } : d.$c(a)), a.Ja && a.gd()) } var a = "undefined" !== typeof S ? S : {}; a.b = function (b, c) { for (var d = b.split("."), e = a, f = 0; f < d.length - 1; f++)e = e[d[f]]; e[d[d.length - 1]] = c }; a.L = function (a, c, d) { a[c] = d }; a.version = "3.5.1"; a.b("version",
								a.version); a.options = { deferUpdates: !1, useOnlyNativeEvents: !1, foreachHidesDestroyed: !1 }; a.a = function () {
									function b(a, b) { for (var c in a) f.call(a, c) && b(c, a[c]) } function c(a, b) { if (b) for (var c in b) f.call(b, c) && (a[c] = b[c]); return a } function d(a, b) { a.__proto__ = b; return a } function e(b, c, d, e) { var l = b[c].match(q) || []; a.a.D(d.match(q), function (b) { a.a.Na(l, b, e) }); b[c] = l.join(" ") } var f = Object.prototype.hasOwnProperty, g = { __proto__: [] } instanceof Array, h = "function" === typeof Symbol, m = {}, k = {}; m[R && /Firefox\/2/i.test(R.userAgent) ?
										"KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"]; m.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" "); b(m, function (a, b) { if (b.length) for (var c = 0, d = b.length; c < d; c++)k[b[c]] = a }); var l = { propertychange: !0 }, p = w && function () { for (var a = 3, b = w.createElement("div"), c = b.getElementsByTagName("i"); b.innerHTML = "\x3c!--[if gt IE " + ++a + "]><i></i><![endif]--\x3e", c[0];); return 4 < a ? a : n }(), q = /\S+/g, t; return {
											Jc: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
											D: function (a, b, c) { for (var d = 0, e = a.length; d < e; d++)b.call(c, a[d], d, a) }, A: "function" == typeof Array.prototype.indexOf ? function (a, b) { return Array.prototype.indexOf.call(a, b) } : function (a, b) { for (var c = 0, d = a.length; c < d; c++)if (a[c] === b) return c; return -1 }, Lb: function (a, b, c) { for (var d = 0, e = a.length; d < e; d++)if (b.call(c, a[d], d, a)) return a[d]; return n }, Pa: function (b, c) { var d = a.a.A(b, c); 0 < d ? b.splice(d, 1) : 0 === d && b.shift() }, wc: function (b) { var c = []; b && a.a.D(b, function (b) { 0 > a.a.A(c, b) && c.push(b) }); return c }, Mb: function (a,
												b, c) { var d = []; if (a) for (var e = 0, l = a.length; e < l; e++)d.push(b.call(c, a[e], e)); return d }, jb: function (a, b, c) { var d = []; if (a) for (var e = 0, l = a.length; e < l; e++)b.call(c, a[e], e) && d.push(a[e]); return d }, Nb: function (a, b) { if (b instanceof Array) a.push.apply(a, b); else for (var c = 0, d = b.length; c < d; c++)a.push(b[c]); return a }, Na: function (b, c, d) { var e = a.a.A(a.a.bc(b), c); 0 > e ? d && b.push(c) : d || b.splice(e, 1) }, Ba: g, extend: c, setPrototypeOf: d, Ab: g ? d : c, P: b, Ga: function (a, b, c) {
													if (!a) return a; var d = {}, e; for (e in a) f.call(a, e) && (d[e] =
														b.call(c, a[e], e, a)); return d
												}, Tb: function (b) { for (; b.firstChild;)a.removeNode(b.firstChild) }, Yb: function (b) { b = a.a.la(b); for (var c = (b[0] && b[0].ownerDocument || w).createElement("div"), d = 0, e = b.length; d < e; d++)c.appendChild(a.oa(b[d])); return c }, Ca: function (b, c) { for (var d = 0, e = b.length, l = []; d < e; d++) { var k = b[d].cloneNode(!0); l.push(c ? a.oa(k) : k) } return l }, va: function (b, c) { a.a.Tb(b); if (c) for (var d = 0, e = c.length; d < e; d++)b.appendChild(c[d]) }, Xc: function (b, c) {
													var d = b.nodeType ? [b] : b; if (0 < d.length) {
														for (var e = d[0],
															l = e.parentNode, k = 0, f = c.length; k < f; k++)l.insertBefore(c[k], e); k = 0; for (f = d.length; k < f; k++)a.removeNode(d[k])
													}
												}, Ua: function (a, b) { if (a.length) { for (b = 8 === b.nodeType && b.parentNode || b; a.length && a[0].parentNode !== b;)a.splice(0, 1); for (; 1 < a.length && a[a.length - 1].parentNode !== b;)a.length--; if (1 < a.length) { var c = a[0], d = a[a.length - 1]; for (a.length = 0; c !== d;)a.push(c), c = c.nextSibling; a.push(d) } } return a }, Zc: function (a, b) { 7 > p ? a.setAttribute("selected", b) : a.selected = b }, Db: function (a) {
													return null === a || a === n ? "" : a.trim ?
														a.trim() : a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
												}, Ud: function (a, b) { a = a || ""; return b.length > a.length ? !1 : a.substring(0, b.length) === b }, vd: function (a, b) { if (a === b) return !0; if (11 === a.nodeType) return !1; if (b.contains) return b.contains(1 !== a.nodeType ? a.parentNode : a); if (b.compareDocumentPosition) return 16 == (b.compareDocumentPosition(a) & 16); for (; a && a != b;)a = a.parentNode; return !!a }, Sb: function (b) { return a.a.vd(b, b.ownerDocument.documentElement) }, kd: function (b) { return !!a.a.Lb(b, a.a.Sb) }, R: function (a) {
													return a &&
														a.tagName && a.tagName.toLowerCase()
												}, Ac: function (b) { return a.onError ? function () { try { return b.apply(this, arguments) } catch (c) { throw a.onError && a.onError(c), c; } } : b }, setTimeout: function (b, c) { return setTimeout(a.a.Ac(b), c) }, Gc: function (b) { setTimeout(function () { a.onError && a.onError(b); throw b; }, 0) }, B: function (b, c, d) {
													var e = a.a.Ac(d); d = l[c]; if (a.options.useOnlyNativeEvents || d || !v) if (d || "function" != typeof b.addEventListener) if ("undefined" != typeof b.attachEvent) {
														var k = function (a) { e.call(b, a) }, f = "on" + c; b.attachEvent(f,
															k); a.a.K.za(b, function () { b.detachEvent(f, k) })
													} else throw Error("Browser doesn't support addEventListener or attachEvent"); else b.addEventListener(c, e, !1); else t || (t = "function" == typeof v(b).on ? "on" : "bind"), v(b)[t](c, e)
												}, Fb: function (b, c) {
													if (!b || !b.nodeType) throw Error("element must be a DOM node when calling triggerEvent"); var d; "input" === a.a.R(b) && b.type && "click" == c.toLowerCase() ? (d = b.type, d = "checkbox" == d || "radio" == d) : d = !1; if (a.options.useOnlyNativeEvents || !v || d) if ("function" == typeof w.createEvent) if ("function" ==
														typeof b.dispatchEvent) d = w.createEvent(k[c] || "HTMLEvents"), d.initEvent(c, !0, !0, A, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, b), b.dispatchEvent(d); else throw Error("The supplied element doesn't support dispatchEvent"); else if (d && b.click) b.click(); else if ("undefined" != typeof b.fireEvent) b.fireEvent("on" + c); else throw Error("Browser doesn't support triggering events"); else v(b).trigger(c)
												}, f: function (b) { return a.O(b) ? b() : b }, bc: function (b) { return a.O(b) ? b.v() : b }, Eb: function (b, c, d) {
													var l; c && ("object" === typeof b.classList ?
														(l = b.classList[d ? "add" : "remove"], a.a.D(c.match(q), function (a) { l.call(b.classList, a) })) : "string" === typeof b.className.baseVal ? e(b.className, "baseVal", c, d) : e(b, "className", c, d))
												}, Bb: function (b, c) { var d = a.a.f(c); if (null === d || d === n) d = ""; var e = a.h.firstChild(b); !e || 3 != e.nodeType || a.h.nextSibling(e) ? a.h.va(b, [b.ownerDocument.createTextNode(d)]) : e.data = d; a.a.Ad(b) }, Yc: function (a, b) {
													a.name = b; if (7 >= p) try {
														var c = a.name.replace(/[&<>'"]/g, function (a) { return "&#" + a.charCodeAt(0) + ";" }); a.mergeAttributes(w.createElement("<input name='" +
															c + "'/>"), !1)
													} catch (d) { }
												}, Ad: function (a) { 9 <= p && (a = 1 == a.nodeType ? a : a.parentNode, a.style && (a.style.zoom = a.style.zoom)) }, wd: function (a) { if (p) { var b = a.style.width; a.style.width = 0; a.style.width = b } }, Pd: function (b, c) { b = a.a.f(b); c = a.a.f(c); for (var d = [], e = b; e <= c; e++)d.push(e); return d }, la: function (a) { for (var b = [], c = 0, d = a.length; c < d; c++)b.push(a[c]); return b }, Da: function (a) { return h ? Symbol(a) : a }, Zd: 6 === p, $d: 7 === p, W: p, Lc: function (b, c) {
													for (var d = a.a.la(b.getElementsByTagName("input")).concat(a.a.la(b.getElementsByTagName("textarea"))),
														e = "string" == typeof c ? function (a) { return a.name === c } : function (a) { return c.test(a.name) }, l = [], k = d.length - 1; 0 <= k; k--)e(d[k]) && l.push(d[k]); return l
												}, Nd: function (b) { return "string" == typeof b && (b = a.a.Db(b)) ? H && H.parse ? H.parse(b) : (new Function("return " + b))() : null }, hc: function (b, c, d) {
													if (!H || !H.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
													return H.stringify(a.a.f(b), c, d)
												}, Od: function (c, d, e) {
													e = e || {}; var l = e.params || {}, k = e.includeFields || this.Jc, f = c; if ("object" == typeof c && "form" === a.a.R(c)) for (var f = c.action, h = k.length - 1; 0 <= h; h--)for (var g = a.a.Lc(c, k[h]), m = g.length - 1; 0 <= m; m--)l[g[m].name] = g[m].value; d = a.a.f(d); var p = w.createElement("form"); p.style.display = "none"; p.action = f; p.method = "post"; for (var q in d) c = w.createElement("input"), c.type = "hidden", c.name = q, c.value = a.a.hc(a.a.f(d[q])), p.appendChild(c); b(l, function (a, b) {
														var c = w.createElement("input");
														c.type = "hidden"; c.name = a; c.value = b; p.appendChild(c)
													}); w.body.appendChild(p); e.submitter ? e.submitter(p) : p.submit(); setTimeout(function () { p.parentNode.removeChild(p) }, 0)
												}
										}
								}(); a.b("utils", a.a); a.b("utils.arrayForEach", a.a.D); a.b("utils.arrayFirst", a.a.Lb); a.b("utils.arrayFilter", a.a.jb); a.b("utils.arrayGetDistinctValues", a.a.wc); a.b("utils.arrayIndexOf", a.a.A); a.b("utils.arrayMap", a.a.Mb); a.b("utils.arrayPushAll", a.a.Nb); a.b("utils.arrayRemoveItem", a.a.Pa); a.b("utils.cloneNodes", a.a.Ca); a.b("utils.createSymbolOrString",
									a.a.Da); a.b("utils.extend", a.a.extend); a.b("utils.fieldsIncludedWithJsonPost", a.a.Jc); a.b("utils.getFormFields", a.a.Lc); a.b("utils.objectMap", a.a.Ga); a.b("utils.peekObservable", a.a.bc); a.b("utils.postJson", a.a.Od); a.b("utils.parseJson", a.a.Nd); a.b("utils.registerEventHandler", a.a.B); a.b("utils.stringifyJson", a.a.hc); a.b("utils.range", a.a.Pd); a.b("utils.toggleDomNodeCssClass", a.a.Eb); a.b("utils.triggerEvent", a.a.Fb); a.b("utils.unwrapObservable", a.a.f); a.b("utils.objectForEach", a.a.P); a.b("utils.addOrRemoveItem",
										a.a.Na); a.b("utils.setTextContent", a.a.Bb); a.b("unwrap", a.a.f); Function.prototype.bind || (Function.prototype.bind = function (a) { var c = this; if (1 === arguments.length) return function () { return c.apply(a, arguments) }; var d = Array.prototype.slice.call(arguments, 1); return function () { var e = d.slice(0); e.push.apply(e, arguments); return c.apply(a, e) } }); a.a.g = new function () {
											var b = 0, c = "__ko__" + (new Date).getTime(), d = {}, e, f; a.a.W ? (e = function (a, e) {
												var f = a[c]; if (!f || "null" === f || !d[f]) {
													if (!e) return n; f = a[c] = "ko" + b++; d[f] =
														{}
												} return d[f]
											}, f = function (a) { var b = a[c]; return b ? (delete d[b], a[c] = null, !0) : !1 }) : (e = function (a, b) { var d = a[c]; !d && b && (d = a[c] = {}); return d }, f = function (a) { return a[c] ? (delete a[c], !0) : !1 }); return { get: function (a, b) { var c = e(a, !1); return c && c[b] }, set: function (a, b, c) { (a = e(a, c !== n)) && (a[b] = c) }, Ub: function (a, b, c) { a = e(a, !0); return a[b] || (a[b] = c) }, clear: f, Z: function () { return b++ + c } }
										}; a.b("utils.domData", a.a.g); a.b("utils.domData.clear", a.a.g.clear); a.a.K = new function () {
											function b(b, c) {
												var d = a.a.g.get(b, e);
												d === n && c && (d = [], a.a.g.set(b, e, d)); return d
											} function c(c) { var e = b(c, !1); if (e) for (var e = e.slice(0), k = 0; k < e.length; k++)e[k](c); a.a.g.clear(c); a.a.K.cleanExternalData(c); g[c.nodeType] && d(c.childNodes, !0) } function d(b, d) { for (var e = [], l, f = 0; f < b.length; f++)if (!d || 8 === b[f].nodeType) if (c(e[e.length] = l = b[f]), b[f] !== l) for (; f-- && -1 == a.a.A(e, b[f]);); } var e = a.a.g.Z(), f = { 1: !0, 8: !0, 9: !0 }, g = { 1: !0, 9: !0 }; return {
												za: function (a, c) { if ("function" != typeof c) throw Error("Callback must be a function"); b(a, !0).push(c) }, yb: function (c,
													d) { var f = b(c, !1); f && (a.a.Pa(f, d), 0 == f.length && a.a.g.set(c, e, n)) }, oa: function (b) { a.u.G(function () { f[b.nodeType] && (c(b), g[b.nodeType] && d(b.getElementsByTagName("*"))) }); return b }, removeNode: function (b) { a.oa(b); b.parentNode && b.parentNode.removeChild(b) }, cleanExternalData: function (a) { v && "function" == typeof v.cleanData && v.cleanData([a]) }
											}
										}; a.oa = a.a.K.oa; a.removeNode = a.a.K.removeNode; a.b("cleanNode", a.oa); a.b("removeNode", a.removeNode); a.b("utils.domNodeDisposal", a.a.K); a.b("utils.domNodeDisposal.addDisposeCallback",
											a.a.K.za); a.b("utils.domNodeDisposal.removeDisposeCallback", a.a.K.yb); (function () {
												var b = [0, "", ""], c = [1, "<table>", "</table>"], d = [3, "<table><tbody><tr>", "</tr></tbody></table>"], e = [1, "<select multiple='multiple'>", "</select>"], f = { thead: c, tbody: c, tfoot: c, tr: [2, "<table><tbody>", "</tbody></table>"], td: d, th: d, option: e, optgroup: e }, g = 8 >= a.a.W; a.a.ua = function (c, d) {
													var e; if (v) if (v.parseHTML) e = v.parseHTML(c, d) || []; else {
														if ((e = v.clean([c], d)) && e[0]) {
															for (var l = e[0]; l.parentNode && 11 !== l.parentNode.nodeType;)l = l.parentNode;
															l.parentNode && l.parentNode.removeChild(l)
														}
													} else { (e = d) || (e = w); var l = e.parentWindow || e.defaultView || A, p = a.a.Db(c).toLowerCase(), q = e.createElement("div"), t; t = (p = p.match(/^(?:\x3c!--.*?--\x3e\s*?)*?<([a-z]+)[\s>]/)) && f[p[1]] || b; p = t[0]; t = "ignored<div>" + t[1] + c + t[2] + "</div>"; "function" == typeof l.innerShiv ? q.appendChild(l.innerShiv(t)) : (g && e.body.appendChild(q), q.innerHTML = t, g && q.parentNode.removeChild(q)); for (; p--;)q = q.lastChild; e = a.a.la(q.lastChild.childNodes) } return e
												}; a.a.Md = function (b, c) {
													var d = a.a.ua(b,
														c); return d.length && d[0].parentElement || a.a.Yb(d)
												}; a.a.fc = function (b, c) { a.a.Tb(b); c = a.a.f(c); if (null !== c && c !== n) if ("string" != typeof c && (c = c.toString()), v) v(b).html(c); else for (var d = a.a.ua(c, b.ownerDocument), e = 0; e < d.length; e++)b.appendChild(d[e]) }
											})(); a.b("utils.parseHtmlFragment", a.a.ua); a.b("utils.setHtml", a.a.fc); a.aa = function () {
												function b(c, e) {
													if (c) if (8 == c.nodeType) { var f = a.aa.Uc(c.nodeValue); null != f && e.push({ ud: c, Kd: f }) } else if (1 == c.nodeType) for (var f = 0, g = c.childNodes, h = g.length; f < h; f++)b(g[f],
														e)
												} var c = {}; return {
													Xb: function (a) { if ("function" != typeof a) throw Error("You can only pass a function to ko.memoization.memoize()"); var b = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1); c[b] = a; return "\x3c!--[ko_memo:" + b + "]--\x3e" }, bd: function (a, b) { var f = c[a]; if (f === n) throw Error("Couldn't find any memo with ID " + a + ". Perhaps it's already been unmemoized."); try { return f.apply(null, b || []), !0 } finally { delete c[a] } }, cd: function (c, e) {
														var f =
															[]; b(c, f); for (var g = 0, h = f.length; g < h; g++) { var m = f[g].ud, k = [m]; e && a.a.Nb(k, e); a.aa.bd(f[g].Kd, k); m.nodeValue = ""; m.parentNode && m.parentNode.removeChild(m) }
													}, Uc: function (a) { return (a = a.match(/^\[ko_memo\:(.*?)\]$/)) ? a[1] : null }
												}
											}(); a.b("memoization", a.aa); a.b("memoization.memoize", a.aa.Xb); a.b("memoization.unmemoize", a.aa.bd); a.b("memoization.parseMemoText", a.aa.Uc); a.b("memoization.unmemoizeDomNodeAndDescendants", a.aa.cd); a.na = function () {
												function b() {
													if (f) for (var b = f, c = 0, d; h < f;)if (d = e[h++]) {
														if (h > b) {
															if (5E3 <=
																++c) { h = f; a.a.Gc(Error("'Too much recursion' after processing " + c + " task groups.")); break } b = f
														} try { d() } catch (p) { a.a.Gc(p) }
													}
												} function c() { b(); h = f = e.length = 0 } var d, e = [], f = 0, g = 1, h = 0; A.MutationObserver ? d = function (a) { var b = w.createElement("div"); (new MutationObserver(a)).observe(b, { attributes: !0 }); return function () { b.classList.toggle("foo") } }(c) : d = w && "onreadystatechange" in w.createElement("script") ? function (a) {
													var b = w.createElement("script"); b.onreadystatechange = function () {
														b.onreadystatechange = null; w.documentElement.removeChild(b);
														b = null; a()
													}; w.documentElement.appendChild(b)
												} : function (a) { setTimeout(a, 0) }; return { scheduler: d, zb: function (b) { f || a.na.scheduler(c); e[f++] = b; return g++ }, cancel: function (a) { a = a - (g - f); a >= h && a < f && (e[a] = null) }, resetForTesting: function () { var a = f - h; h = f = e.length = 0; return a }, Sd: b }
											}(); a.b("tasks", a.na); a.b("tasks.schedule", a.na.zb); a.b("tasks.runEarly", a.na.Sd); a.Ta = {
												throttle: function (b, c) {
													b.throttleEvaluation = c; var d = null; return a.$({
														read: b, write: function (e) {
															clearTimeout(d); d = a.a.setTimeout(function () { b(e) },
																c)
														}
													})
												}, rateLimit: function (a, c) { var d, e, f; "number" == typeof c ? d = c : (d = c.timeout, e = c.method); a.Hb = !1; f = "function" == typeof e ? e : "notifyWhenChangesStop" == e ? Y : X; a.ub(function (a) { return f(a, d, c) }) }, deferred: function (b, c) {
													if (!0 !== c) throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled."); b.Hb || (b.Hb = !0, b.ub(function (c) {
														var e, f = !1; return function () {
															if (!f) {
																a.na.cancel(e); e = a.na.zb(c); try { f = !0, b.notifySubscribers(n, "dirty") } finally {
																	f =
																	!1
																}
															}
														}
													}))
												}, notify: function (a, c) { a.equalityComparer = "always" == c ? null : K }
											}; var W = { undefined: 1, "boolean": 1, number: 1, string: 1 }; a.b("extenders", a.Ta); a.ic = function (b, c, d) { this.da = b; this.lc = c; this.mc = d; this.Ib = !1; this.fb = this.Jb = null; a.L(this, "dispose", this.s); a.L(this, "disposeWhenNodeIsRemoved", this.l) }; a.ic.prototype.s = function () { this.Ib || (this.fb && a.a.K.yb(this.Jb, this.fb), this.Ib = !0, this.mc(), this.da = this.lc = this.mc = this.Jb = this.fb = null) }; a.ic.prototype.l = function (b) { this.Jb = b; a.a.K.za(b, this.fb = this.s.bind(this)) };
							a.T = function () { a.a.Ab(this, D); D.qb(this) }; var D = {
								qb: function (a) { a.U = { change: [] }; a.sc = 1 }, subscribe: function (b, c, d) { var e = this; d = d || "change"; var f = new a.ic(e, c ? b.bind(c) : b, function () { a.a.Pa(e.U[d], f); e.hb && e.hb(d) }); e.Qa && e.Qa(d); e.U[d] || (e.U[d] = []); e.U[d].push(f); return f }, notifySubscribers: function (b, c) { c = c || "change"; "change" === c && this.Gb(); if (this.Wa(c)) { var d = "change" === c && this.ed || this.U[c].slice(0); try { a.u.xc(); for (var e = 0, f; f = d[e]; ++e)f.Ib || f.lc(b) } finally { a.u.end() } } }, ob: function () { return this.sc },
								Dd: function (a) { return this.ob() !== a }, Gb: function () { ++this.sc }, ub: function (b) { var c = this, d = a.O(c), e, f, g, h, m; c.gb || (c.gb = c.notifySubscribers, c.notifySubscribers = Z); var k = b(function () { c.Ja = !1; d && h === c && (h = c.nc ? c.nc() : c()); var a = f || m && c.sb(g, h); m = f = e = !1; a && c.gb(g = h) }); c.qc = function (a, b) { b && c.Ja || (m = !b); c.ed = c.U.change.slice(0); c.Ja = e = !0; h = a; k() }; c.pc = function (a) { e || (g = a, c.gb(a, "beforeChange")) }; c.rc = function () { m = !0 }; c.gd = function () { c.sb(g, c.v(!0)) && (f = !0) } }, Wa: function (a) { return this.U[a] && this.U[a].length },
								Bd: function (b) { if (b) return this.U[b] && this.U[b].length || 0; var c = 0; a.a.P(this.U, function (a, b) { "dirty" !== a && (c += b.length) }); return c }, sb: function (a, c) { return !this.equalityComparer || !this.equalityComparer(a, c) }, toString: function () { return "[object Object]" }, extend: function (b) { var c = this; b && a.a.P(b, function (b, e) { var f = a.Ta[b]; "function" == typeof f && (c = f(c, e) || c) }); return c }
							}; a.L(D, "init", D.qb); a.L(D, "subscribe", D.subscribe); a.L(D, "extend", D.extend); a.L(D, "getSubscriptionsCount", D.Bd); a.a.Ba && a.a.setPrototypeOf(D,
								Function.prototype); a.T.fn = D; a.Qc = function (a) { return null != a && "function" == typeof a.subscribe && "function" == typeof a.notifySubscribers }; a.b("subscribable", a.T); a.b("isSubscribable", a.Qc); a.S = a.u = function () {
									function b(a) { d.push(e); e = a } function c() { e = d.pop() } var d = [], e, f = 0; return {
										xc: b, end: c, cc: function (b) { if (e) { if (!a.Qc(b)) throw Error("Only subscribable things can act as dependencies"); e.od.call(e.pd, b, b.fd || (b.fd = ++f)) } }, G: function (a, d, e) { try { return b(), a.apply(d, e || []) } finally { c() } }, qa: function () { if (e) return e.o.qa() },
										Va: function () { if (e) return e.o.Va() }, Ya: function () { if (e) return e.Ya }, o: function () { if (e) return e.o }
									}
								}(); a.b("computedContext", a.S); a.b("computedContext.getDependenciesCount", a.S.qa); a.b("computedContext.getDependencies", a.S.Va); a.b("computedContext.isInitial", a.S.Ya); a.b("computedContext.registerDependency", a.S.cc); a.b("ignoreDependencies", a.Yd = a.u.G); var I = a.a.Da("_latestValue"); a.ta = function (b) {
									function c() {
										if (0 < arguments.length) return c.sb(c[I], arguments[0]) && (c.ya(), c[I] = arguments[0], c.xa()), this;
										a.u.cc(c); return c[I]
									} c[I] = b; a.a.Ba || a.a.extend(c, a.T.fn); a.T.fn.qb(c); a.a.Ab(c, F); a.options.deferUpdates && a.Ta.deferred(c, !0); return c
								}; var F = { equalityComparer: K, v: function () { return this[I] }, xa: function () { this.notifySubscribers(this[I], "spectate"); this.notifySubscribers(this[I]) }, ya: function () { this.notifySubscribers(this[I], "beforeChange") } }; a.a.Ba && a.a.setPrototypeOf(F, a.T.fn); var G = a.ta.Ma = "__ko_proto__"; F[G] = a.ta; a.O = function (b) {
									if ((b = "function" == typeof b && b[G]) && b !== F[G] && b !== a.o.fn[G]) throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");
									return !!b
								}; a.Za = function (b) { return "function" == typeof b && (b[G] === F[G] || b[G] === a.o.fn[G] && b.Nc) }; a.b("observable", a.ta); a.b("isObservable", a.O); a.b("isWriteableObservable", a.Za); a.b("isWritableObservable", a.Za); a.b("observable.fn", F); a.L(F, "peek", F.v); a.L(F, "valueHasMutated", F.xa); a.L(F, "valueWillMutate", F.ya); a.Ha = function (b) {
									b = b || []; if ("object" != typeof b || !("length" in b)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined."); b = a.ta(b); a.a.Ab(b,
										a.Ha.fn); return b.extend({ trackArrayChanges: !0 })
								}; a.Ha.fn = {
									remove: function (b) { for (var c = this.v(), d = [], e = "function" != typeof b || a.O(b) ? function (a) { return a === b } : b, f = 0; f < c.length; f++) { var g = c[f]; if (e(g)) { 0 === d.length && this.ya(); if (c[f] !== g) throw Error("Array modified during remove; cannot remove item"); d.push(g); c.splice(f, 1); f-- } } d.length && this.xa(); return d }, removeAll: function (b) {
										if (b === n) { var c = this.v(), d = c.slice(0); this.ya(); c.splice(0, c.length); this.xa(); return d } return b ? this.remove(function (c) {
											return 0 <=
												a.a.A(b, c)
										}) : []
									}, destroy: function (b) { var c = this.v(), d = "function" != typeof b || a.O(b) ? function (a) { return a === b } : b; this.ya(); for (var e = c.length - 1; 0 <= e; e--) { var f = c[e]; d(f) && (f._destroy = !0) } this.xa() }, destroyAll: function (b) { return b === n ? this.destroy(function () { return !0 }) : b ? this.destroy(function (c) { return 0 <= a.a.A(b, c) }) : [] }, indexOf: function (b) { var c = this(); return a.a.A(c, b) }, replace: function (a, c) { var d = this.indexOf(a); 0 <= d && (this.ya(), this.v()[d] = c, this.xa()) }, sorted: function (a) {
										var c = this().slice(0);
										return a ? c.sort(a) : c.sort()
									}, reversed: function () { return this().slice(0).reverse() }
								}; a.a.Ba && a.a.setPrototypeOf(a.Ha.fn, a.ta.fn); a.a.D("pop push reverse shift sort splice unshift".split(" "), function (b) { a.Ha.fn[b] = function () { var a = this.v(); this.ya(); this.zc(a, b, arguments); var d = a[b].apply(a, arguments); this.xa(); return d === a ? this : d } }); a.a.D(["slice"], function (b) { a.Ha.fn[b] = function () { var a = this(); return a[b].apply(a, arguments) } }); a.Pc = function (b) {
									return a.O(b) && "function" == typeof b.remove && "function" ==
										typeof b.push
								}; a.b("observableArray", a.Ha); a.b("isObservableArray", a.Pc); a.Ta.trackArrayChanges = function (b, c) {
									function d() { function c() { if (m) { var d = [].concat(b.v() || []), e; if (b.Wa("arrayChange")) { if (!f || 1 < m) f = a.a.Pb(k, d, b.Ob); e = f } k = d; f = null; m = 0; e && e.length && b.notifySubscribers(e, "arrayChange") } } e ? c() : (e = !0, h = b.subscribe(function () { ++m }, null, "spectate"), k = [].concat(b.v() || []), f = null, g = b.subscribe(c)) } b.Ob = {}; c && "object" == typeof c && a.a.extend(b.Ob, c); b.Ob.sparse = !0; if (!b.zc) {
										var e = !1, f = null, g, h, m = 0,
										k, l = b.Qa, p = b.hb; b.Qa = function (a) { l && l.call(b, a); "arrayChange" === a && d() }; b.hb = function (a) { p && p.call(b, a); "arrayChange" !== a || b.Wa("arrayChange") || (g && g.s(), h && h.s(), h = g = null, e = !1, k = n) }; b.zc = function (b, c, d) {
											function l(a, b, c) { return k[k.length] = { status: a, value: b, index: c } } if (e && !m) {
												var k = [], p = b.length, g = d.length, h = 0; switch (c) {
													case "push": h = p; case "unshift": for (c = 0; c < g; c++)l("added", d[c], h + c); break; case "pop": h = p - 1; case "shift": p && l("deleted", b[h], h); break; case "splice": c = Math.min(Math.max(0, 0 > d[0] ? p + d[0] :
														d[0]), p); for (var p = 1 === g ? p : Math.min(c + (d[1] || 0), p), g = c + g - 2, h = Math.max(p, g), U = [], L = [], n = 2; c < h; ++c, ++n)c < p && L.push(l("deleted", b[c], c)), c < g && U.push(l("added", d[n], c)); a.a.Kc(L, U); break; default: return
												}f = k
											}
										}
									}
								}; var r = a.a.Da("_state"); a.o = a.$ = function (b, c, d) {
									function e() {
										if (0 < arguments.length) { if ("function" === typeof f) f.apply(g.nb, arguments); else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters."); return this } g.ra ||
											a.u.cc(e); (g.ka || g.J && e.Xa()) && e.ha(); return g.X
									} "object" === typeof b ? d = b : (d = d || {}, b && (d.read = b)); if ("function" != typeof d.read) throw Error("Pass a function that returns the value of the ko.computed"); var f = d.write, g = { X: n, sa: !0, ka: !0, rb: !1, jc: !1, ra: !1, wb: !1, J: !1, Wc: d.read, nb: c || d.owner, l: d.disposeWhenNodeIsRemoved || d.l || null, Sa: d.disposeWhen || d.Sa, Rb: null, I: {}, V: 0, Ic: null }; e[r] = g; e.Nc = "function" === typeof f; a.a.Ba || a.a.extend(e, a.T.fn); a.T.fn.qb(e); a.a.Ab(e, C); d.pure ? (g.wb = !0, g.J = !0, a.a.extend(e, da)) :
										d.deferEvaluation && a.a.extend(e, ea); a.options.deferUpdates && a.Ta.deferred(e, !0); g.l && (g.jc = !0, g.l.nodeType || (g.l = null)); g.J || d.deferEvaluation || e.ha(); g.l && e.ja() && a.a.K.za(g.l, g.Rb = function () { e.s() }); return e
								}; var C = {
									equalityComparer: K, qa: function () { return this[r].V }, Va: function () { var b = []; a.a.P(this[r].I, function (a, d) { b[d.Ka] = d.da }); return b }, Vb: function (b) { if (!this[r].V) return !1; var c = this.Va(); return -1 !== a.a.A(c, b) ? !0 : !!a.a.Lb(c, function (a) { return a.Vb && a.Vb(b) }) }, uc: function (a, c, d) {
										if (this[r].wb &&
											c === this) throw Error("A 'pure' computed must not be called recursively"); this[r].I[a] = d; d.Ka = this[r].V++; d.La = c.ob()
									}, Xa: function () { var a, c, d = this[r].I; for (a in d) if (Object.prototype.hasOwnProperty.call(d, a) && (c = d[a], this.Ia && c.da.Ja || c.da.Dd(c.La))) return !0 }, Jd: function () { this.Ia && !this[r].rb && this.Ia(!1) }, ja: function () { var a = this[r]; return a.ka || 0 < a.V }, Rd: function () { this.Ja ? this[r].ka && (this[r].sa = !0) : this.Hc() }, $c: function (a) {
										if (a.Hb) {
											var c = a.subscribe(this.Jd, this, "dirty"), d = a.subscribe(this.Rd,
												this); return { da: a, s: function () { c.s(); d.s() } }
										} return a.subscribe(this.Hc, this)
									}, Hc: function () { var b = this, c = b.throttleEvaluation; c && 0 <= c ? (clearTimeout(this[r].Ic), this[r].Ic = a.a.setTimeout(function () { b.ha(!0) }, c)) : b.Ia ? b.Ia(!0) : b.ha(!0) }, ha: function (b) { var c = this[r], d = c.Sa, e = !1; if (!c.rb && !c.ra) { if (c.l && !a.a.Sb(c.l) || d && d()) { if (!c.jc) { this.s(); return } } else c.jc = !1; c.rb = !0; try { e = this.zd(b) } finally { c.rb = !1 } return e } }, zd: function (b) {
										var c = this[r], d = !1, e = c.wb ? n : !c.V, d = { qd: this, mb: c.I, Qb: c.V }; a.u.xc({
											pd: d,
											od: ba, o: this, Ya: e
										}); c.I = {}; c.V = 0; var f = this.yd(c, d); c.V ? d = this.sb(c.X, f) : (this.s(), d = !0); d && (c.J ? this.Gb() : this.notifySubscribers(c.X, "beforeChange"), c.X = f, this.notifySubscribers(c.X, "spectate"), !c.J && b && this.notifySubscribers(c.X), this.rc && this.rc()); e && this.notifySubscribers(c.X, "awake"); return d
									}, yd: function (b, c) { try { var d = b.Wc; return b.nb ? d.call(b.nb) : d() } finally { a.u.end(), c.Qb && !b.J && a.a.P(c.mb, aa), b.sa = b.ka = !1 } }, v: function (a) { var c = this[r]; (c.ka && (a || !c.V) || c.J && this.Xa()) && this.ha(); return c.X },
									ub: function (b) { a.T.fn.ub.call(this, b); this.nc = function () { this[r].J || (this[r].sa ? this.ha() : this[r].ka = !1); return this[r].X }; this.Ia = function (a) { this.pc(this[r].X); this[r].ka = !0; a && (this[r].sa = !0); this.qc(this, !a) } }, s: function () { var b = this[r]; !b.J && b.I && a.a.P(b.I, function (a, b) { b.s && b.s() }); b.l && b.Rb && a.a.K.yb(b.l, b.Rb); b.I = n; b.V = 0; b.ra = !0; b.sa = !1; b.ka = !1; b.J = !1; b.l = n; b.Sa = n; b.Wc = n; this.Nc || (b.nb = n) }
								}, da = {
									Qa: function (b) {
										var c = this, d = c[r]; if (!d.ra && d.J && "change" == b) {
											d.J = !1; if (d.sa || c.Xa()) d.I = null, d.V =
												0, c.ha() && c.Gb(); else { var e = []; a.a.P(d.I, function (a, b) { e[b.Ka] = a }); a.a.D(e, function (a, b) { var e = d.I[a], m = c.$c(e.da); m.Ka = b; m.La = e.La; d.I[a] = m }); c.Xa() && c.ha() && c.Gb() } d.ra || c.notifySubscribers(d.X, "awake")
										}
									}, hb: function (b) { var c = this[r]; c.ra || "change" != b || this.Wa("change") || (a.a.P(c.I, function (a, b) { b.s && (c.I[a] = { da: b.da, Ka: b.Ka, La: b.La }, b.s()) }), c.J = !0, this.notifySubscribers(n, "asleep")) }, ob: function () { var b = this[r]; b.J && (b.sa || this.Xa()) && this.ha(); return a.T.fn.ob.call(this) }
								}, ea = {
									Qa: function (a) {
										"change" !=
										a && "beforeChange" != a || this.v()
									}
								}; a.a.Ba && a.a.setPrototypeOf(C, a.T.fn); var N = a.ta.Ma; C[N] = a.o; a.Oc = function (a) { return "function" == typeof a && a[N] === C[N] }; a.Fd = function (b) { return a.Oc(b) && b[r] && b[r].wb }; a.b("computed", a.o); a.b("dependentObservable", a.o); a.b("isComputed", a.Oc); a.b("isPureComputed", a.Fd); a.b("computed.fn", C); a.L(C, "peek", C.v); a.L(C, "dispose", C.s); a.L(C, "isActive", C.ja); a.L(C, "getDependenciesCount", C.qa); a.L(C, "getDependencies", C.Va); a.xb = function (b, c) {
									if ("function" === typeof b) return a.o(b,
										c, { pure: !0 }); b = a.a.extend({}, b); b.pure = !0; return a.o(b, c)
								}; a.b("pureComputed", a.xb); (function () {
									function b(a, f, g) {
										g = g || new d; a = f(a); if ("object" != typeof a || null === a || a === n || a instanceof RegExp || a instanceof Date || a instanceof String || a instanceof Number || a instanceof Boolean) return a; var h = a instanceof Array ? [] : {}; g.save(a, h); c(a, function (c) {
											var d = f(a[c]); switch (typeof d) {
												case "boolean": case "number": case "string": case "function": h[c] = d; break; case "object": case "undefined": var l = g.get(d); h[c] = l !==
													n ? l : b(d, f, g)
											}
										}); return h
									} function c(a, b) { if (a instanceof Array) { for (var c = 0; c < a.length; c++)b(c); "function" == typeof a.toJSON && b("toJSON") } else for (c in a) b(c) } function d() { this.keys = []; this.values = [] } a.ad = function (c) { if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert."); return b(c, function (b) { for (var c = 0; a.O(b) && 10 > c; c++)b = b(); return b }) }; a.toJSON = function (b, c, d) { b = a.ad(b); return a.a.hc(b, c, d) }; d.prototype = {
										constructor: d, save: function (b, c) {
											var d = a.a.A(this.keys,
												b); 0 <= d ? this.values[d] = c : (this.keys.push(b), this.values.push(c))
										}, get: function (b) { b = a.a.A(this.keys, b); return 0 <= b ? this.values[b] : n }
									}
								})(); a.b("toJS", a.ad); a.b("toJSON", a.toJSON); a.Wd = function (b, c, d) { function e(c) { var e = a.xb(b, d).extend({ ma: "always" }), h = e.subscribe(function (a) { a && (h.s(), c(a)) }); e.notifySubscribers(e.v()); return h } return "function" !== typeof Promise || c ? e(c.bind(d)) : new Promise(e) }; a.b("when", a.Wd); (function () {
									a.w = {
										M: function (b) {
											switch (a.a.R(b)) {
												case "option": return !0 === b.__ko__hasDomDataOptionValue__ ?
													a.a.g.get(b, a.c.options.$b) : 7 >= a.a.W ? b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value : b.text : b.value; case "select": return 0 <= b.selectedIndex ? a.w.M(b.options[b.selectedIndex]) : n; default: return b.value
											}
										}, cb: function (b, c, d) {
											switch (a.a.R(b)) {
												case "option": "string" === typeof c ? (a.a.g.set(b, a.c.options.$b, n), "__ko__hasDomDataOptionValue__" in b && delete b.__ko__hasDomDataOptionValue__, b.value = c) : (a.a.g.set(b, a.c.options.$b, c), b.__ko__hasDomDataOptionValue__ = !0, b.value = "number" ===
													typeof c ? c : ""); break; case "select": if ("" === c || null === c) c = n; for (var e = -1, f = 0, g = b.options.length, h; f < g; ++f)if (h = a.w.M(b.options[f]), h == c || "" === h && c === n) { e = f; break } if (d || 0 <= e || c === n && 1 < b.size) b.selectedIndex = e, 6 === a.a.W && a.a.setTimeout(function () { b.selectedIndex = e }, 0); break; default: if (null === c || c === n) c = ""; b.value = c
											}
										}
									}
								})(); a.b("selectExtensions", a.w); a.b("selectExtensions.readValue", a.w.M); a.b("selectExtensions.writeValue", a.w.cb); a.m = function () {
									function b(b) {
										b = a.a.Db(b); 123 === b.charCodeAt(0) && (b = b.slice(1,
											-1)); b += "\n,"; var c = [], d = b.match(e), p, q = [], h = 0; if (1 < d.length) {
												for (var x = 0, B; B = d[x]; ++x) {
													var u = B.charCodeAt(0); if (44 === u) { if (0 >= h) { c.push(p && q.length ? { key: p, value: q.join("") } : { unknown: p || q.join("") }); p = h = 0; q = []; continue } } else if (58 === u) { if (!h && !p && 1 === q.length) { p = q.pop(); continue } } else if (47 === u && 1 < B.length && (47 === B.charCodeAt(1) || 42 === B.charCodeAt(1))) continue; else 47 === u && x && 1 < B.length ? (u = d[x - 1].match(f)) && !g[u[0]] && (b = b.substr(b.indexOf(B) + 1), d = b.match(e), x = -1, B = "/") : 40 === u || 123 === u || 91 === u ? ++h :
														41 === u || 125 === u || 93 === u ? --h : p || q.length || 34 !== u && 39 !== u || (B = B.slice(1, -1)); q.push(B)
												} if (0 < h) throw Error("Unbalanced parentheses, braces, or brackets");
											} return c
									} var c = ["true", "false", "null", "undefined"], d = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i, e = RegExp("\"(?:\\\\.|[^\"])*\"|'(?:\\\\.|[^'])*'|`(?:\\\\.|[^`])*`|/\\*(?:[^*]|\\*+[^*/])*\\*+/|//.*\n|/(?:\\\\.|[^/])+/w*|[^\\s:,/][^,\"'`{}()/:[\\]]*[^\\s,\"'`{}()/:[\\]]|[^\\s]", "g"), f = /[\])"'A-Za-z0-9_$]+$/, g = { "in": 1, "return": 1, "typeof": 1 },
										h = {}; return {
											Ra: [], wa: h, ac: b, vb: function (e, f) {
												function l(b, e) { var f; if (!x) { var k = a.getBindingHandler(b); if (k && k.preprocess && !(e = k.preprocess(e, b, l))) return; if (k = h[b]) f = e, 0 <= a.a.A(c, f) ? f = !1 : (k = f.match(d), f = null === k ? !1 : k[1] ? "Object(" + k[1] + ")" + k[2] : f), k = f; k && q.push("'" + ("string" == typeof h[b] ? h[b] : b) + "':function(_z){" + f + "=_z}") } g && (e = "function(){return " + e + " }"); p.push("'" + b + "':" + e) } f = f || {}; var p = [], q = [], g = f.valueAccessors, x = f.bindingParams, B = "string" === typeof e ? b(e) : e; a.a.D(B, function (a) {
													l(a.key || a.unknown,
														a.value)
												}); q.length && l("_ko_property_writers", "{" + q.join(",") + " }"); return p.join(",")
											}, Id: function (a, b) { for (var c = 0; c < a.length; c++)if (a[c].key == b) return !0; return !1 }, eb: function (b, c, d, e, f) { if (b && a.O(b)) !a.Za(b) || f && b.v() === e || b(e); else if ((b = c.get("_ko_property_writers")) && b[d]) b[d](e) }
										}
								}(); a.b("expressionRewriting", a.m); a.b("expre