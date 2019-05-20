(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/_babel-loader@7.1.5@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.7.0@vue-loader/lib/index.js?!./src/page/form.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.5@babel-loader/lib??ref--4-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/page/form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nexports.default = {\n\tdata: function data() {\n\t\treturn {\n\t\t\tswitchVal: false,\n\t\t\tlist: [{\n\t\t\t\tname: 'a',\n\t\t\t\tplaceholder: '请输入',\n\t\t\t\tmaxlength: 9,\n\t\t\t\tmodel: 19\n\t\t\t}, {\n\t\t\t\tname: 'b',\n\t\t\t\tmodel: '1',\n\t\t\t\tselect: ['1', '2']\n\t\t\t}, {\n\t\t\t\tname: 'c',\n\t\t\t\tmodel: new Date(),\n\t\t\t\tselectTime: true\n\t\t\t}, {\n\t\t\t\tname: 'd',\n\t\t\t\tmodel: '请选择',\n\t\t\t\tselects: ['a', 'b', 'c']\n\t\t\t}]\n\t\t};\n\t},\n\n\tmethods: {\n\t\tsubmit: function submit() {}\n\t}\n};\n\n//# sourceURL=webpack:///./src/page/form.vue?./node_modules/_babel-loader@7.1.5@babel-loader/lib??ref--4-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.7.0@vue-loader/lib/index.js?!./src/page/form.vue?vue&type=template&id=a7cc1a48&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/page/form.vue?vue&type=template&id=a7cc1a48& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"form\"},[_c('tk-header',[_vm._v(\"\\n\\t\\tform表单组件\\n\\t\")]),_vm._v(\" \"),_c('tk-form',{attrs:{\"list\":_vm.list}}),_vm._v(\" \"),_c('tk-switch',{model:{value:(_vm.switchVal),callback:function ($$v) {_vm.switchVal=$$v},expression:\"switchVal\"}}),_vm._v(\" \"),_c('tk-button',{staticStyle:{\"margin-top\":\"20px\"},on:{\"click\":_vm.submit}},[_vm._v(\"提交\")])],1)}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./src/page/form.vue?./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/page/form.vue":
/*!***************************!*\
  !*** ./src/page/form.vue ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form_vue_vue_type_template_id_a7cc1a48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=a7cc1a48& */ \"./src/page/form.vue?vue&type=template&id=a7cc1a48&\");\n/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ \"./src/page/form.vue?vue&type=script&lang=js&\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _node_modules_vue_loader_15_7_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.7.0@vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/_vue-loader@15.7.0@vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_15_7_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _form_vue_vue_type_template_id_a7cc1a48___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _form_vue_vue_type_template_id_a7cc1a48___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/page/form.vue?");

/***/ }),

/***/ "./src/page/form.vue?vue&type=script&lang=js&":
/*!****************************************************!*\
  !*** ./src/page/form.vue?vue&type=script&lang=js& ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.5@babel-loader/lib??ref--4-0!../../node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ \"./node_modules/_babel-loader@7.1.5@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.7.0@vue-loader/lib/index.js?!./src/page/form.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/page/form.vue?");

/***/ }),

/***/ "./src/page/form.vue?vue&type=template&id=a7cc1a48&":
/*!**********************************************************!*\
  !*** ./src/page/form.vue?vue&type=template&id=a7cc1a48& ***!
  \**********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_a7cc1a48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=a7cc1a48& */ \"./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.7.0@vue-loader/lib/index.js?!./src/page/form.vue?vue&type=template&id=a7cc1a48&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_a7cc1a48___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_a7cc1a48___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/page/form.vue?");

/***/ })

}]);