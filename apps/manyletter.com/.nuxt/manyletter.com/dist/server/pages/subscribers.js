exports.ids = [2];
exports.modules = {

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("3c56873e", content, true, context)
};

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("048d1d28", content, true, context)
};

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("473c7790", content, true, context)
};

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("6c33fd44", content, true, context)
};

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iNSIgeT0iNSIgd2lkdGg9IjQiIGhlaWdodD0iNCIgcng9IjIiIGZpbGw9IiMzOUFDMzciIGZpbGwtb3BhY2l0eT0iMC4yNCIvPgo8L3N2Zz4K"

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_8d8b9242_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_8d8b9242_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_8d8b9242_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_8d8b9242_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_8d8b9242_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#topbar[data-v-8d8b9242]{box-shadow:0 .125rem .125rem rgba(0,0,0,.1);position:relative;top:0;left:0;width:100%;background-color:#000;z-index:100;height:68px}#topbar>.container-narrow[data-v-8d8b9242]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}#topbar>.container-narrow>div.flex[data-v-8d8b9242]{height:100%}.logo a[data-v-8d8b9242]{font-size:24px;line-height:30px;font-weight:700;font-family:\"Caveat\",cursive;text-decoration:none;color:#fff}.nav>ul[data-v-8d8b9242]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-8d8b9242]{padding:22px;border-bottom:1px solid transparent;position:relative;transition:.3s;transition:transform .2s}.nav>ul>li>a[data-v-8d8b9242]:hover{transform:scale(1.5)}.nav>ul>li>a.nuxt-link-exact-active[data-v-8d8b9242],.nav>ul>li>a[data-v-8d8b9242]:hover{color:#fff;text-decoration:none}.nav>ul>li.sidenavtoggle[data-v-8d8b9242]{cursor:pointer}.nav>ul>li.sidenavtoggle>div[data-v-8d8b9242]{width:30px;height:3px;background-color:#fff;margin:5px 0;border-radius:4px}.nav>ul>li>a[data-v-8d8b9242]{color:hsla(0,0%,100%,.72157);line-height:24px;font-weight:500;text-decoration:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_105ada87_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_105ada87_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_105ada87_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_105ada87_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_105ada87_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".sidenav-backdrop[data-v-105ada87],.sidenav-container[data-v-105ada87]{height:100%;width:100%}.sidenav-backdrop[data-v-105ada87]{background-color:hsla(0,0%,90.6%,.7);z-index:1000;position:fixed;top:0;left:0}.sidenav>ul[data-v-105ada87]{list-style:none;margin:0;padding:0}.sidenav>ul>li>a[data-v-105ada87]{color:#000;font-size:16px;line-height:23px;font-weight:500;text-decoration:none;transition:.3s}.sidenav[data-v-105ada87]{height:100%;width:300px;background-color:#fff;z-index:10000;position:fixed;top:0;right:0;box-sizing:border-box;padding:30px}.slide-side-enter-active[data-v-105ada87],.slide-side-leave-active[data-v-105ada87]{transition:all .3s ease-out}.slide-side-enter[data-v-105ada87],.slide-side-leave-to[data-v-105ada87]{transform:translateX(100%)}.logo a[data-v-105ada87]{font-size:24px;line-height:30px;font-weight:700;font-family:\"Caveat\",cursive;text-decoration:none;color:#39ac37}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_510e6d60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_510e6d60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_510e6d60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_510e6d60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_510e6d60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container[data-v-510e6d60]{padding-bottom:0;box-shadow:0 .125rem .125rem rgba(0,0,0,.1);background-color:#000}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/plant.60d724f.svg";

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_f0659fc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_f0659fc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_f0659fc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_f0659fc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_f0659fc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".logo a[data-v-f0659fc4]{font-size:2em;line-height:30px;font-weight:700;font-family:\"Caveat\",cursive;text-decoration:none;color:#fff}#footer[data-v-f0659fc4]{background-color:#000;padding-bottom:40px}#footer[data-v-f0659fc4],#footer p[data-v-f0659fc4]{color:hsla(0,0%,100%,.72157)}h4[data-v-f0659fc4]{color:#fff}#footer>.container-narrow[data-v-f0659fc4]{margin-bottom:0}ul[data-v-f0659fc4]{list-style-type:none}li[data-v-f0659fc4]{margin-bottom:5px}li>a[data-v-f0659fc4]{color:inherit;text-decoration:none;display:block;padding:5px;transition:.3s;left:0;color:hsla(0,0%,100%,.72157)}li>a[data-v-f0659fc4],li>a[data-v-f0659fc4]:hover{position:relative}li>a[data-v-f0659fc4]:hover{left:5px;color:#fff}p.contact[data-v-f0659fc4]{color:hsla(0,0%,100%,.72157)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/_common/Header.vue?vue&type=template&id=510e6d60&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"header"}},[_vm._ssrNode("<div class=\"container\" data-v-510e6d60>","</div>",[_c('Topbar',{on:{"sidenavtoggle":function($event){_vm.displaySidebar = !_vm.displaySidebar}}}),_vm._ssrNode(" "),_c('Sidebar',{attrs:{"show":_vm.displaySidebar},on:{"close":function($event){_vm.displaySidebar = false}}})],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/_common/Header.vue?vue&type=template&id=510e6d60&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/_common/Topbar.vue?vue&type=template&id=8d8b9242&scoped=true&
var Topbarvue_type_template_id_8d8b9242_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div id=\"topbar\" data-v-8d8b9242>","</div>",[_vm._ssrNode("<div class=\"container-narrow\" data-v-8d8b9242>","</div>",[_vm._ssrNode("<div class=\"flex wrap align-items-center justify-content-space-between\" data-v-8d8b9242>","</div>",[_vm._ssrNode("<div class=\"logo\" data-v-8d8b9242>","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("\n                        Manyletter\n                    ")])],1),_vm._ssrNode(" <div class=\"nav\" data-v-8d8b9242><ul class=\"flex wrap show-md align-items-center\" data-v-8d8b9242><li data-v-8d8b9242><a href=\"https://app.manyletter.com/sign-up\" data-v-8d8b9242>Request access</a></li> <li data-v-8d8b9242><a href=\"https://app.manyletter.com\" data-v-8d8b9242>Log in</a></li></ul> <ul data-v-8d8b9242><li class=\"sidenavtoggle hidden-md\" data-v-8d8b9242><div data-v-8d8b9242></div> <div data-v-8d8b9242></div> <div data-v-8d8b9242></div></li></ul></div>")],2)])])])}
var Topbarvue_type_template_id_8d8b9242_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/_common/Topbar.vue?vue&type=template&id=8d8b9242&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/_common/Topbar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Topbarvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/_common/Topbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var _common_Topbarvue_type_script_lang_js_ = (Topbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/manyletter.com/components/page/_common/Topbar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(55)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _common_Topbarvue_type_script_lang_js_,
  Topbarvue_type_template_id_8d8b9242_scoped_true_render,
  Topbarvue_type_template_id_8d8b9242_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "8d8b9242",
  "040e7c2a"
  
)

/* harmony default export */ var Topbar = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/_common/Sidebar.vue?vue&type=template&id=105ada87&scoped=true&
var Sidebarvue_type_template_id_105ada87_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sidenav-container"},[_vm._ssrNode("<div class=\"sidenav-backdrop\""+(_vm._ssrStyle(null,null, { display: (_vm.show) ? '' : 'none' }))+" data-v-105ada87></div> "),_c('transition',{attrs:{"name":"slide-side"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"sidenav"},[_c('div',{staticClass:"logo mb40"},[_c('nuxt-link',{attrs:{"to":"/"},on:{"click":function($event){return _vm.$emit('close')}}},[_vm._v("\n                  Manyletter\n              ")])],1),_vm._v(" "),_c('ul',{staticClass:"grid col-1 gap-20",on:{"click":function($event){return _vm.$emit('close')}}},[_c('li',[_c('a',{attrs:{"href":"https://app.manyletter.com/sign-up"}},[_vm._v("Request access")])])]),_vm._v(" "),_c('div',{staticClass:"hr mt40 mb40"}),_vm._v(" "),_c('ul',{staticClass:"grid col-1 gap-20",on:{"click":function($event){return _vm.$emit('close')}}},[_c('li',[_c('a',{attrs:{"href":"https://app.manyletter.com/sign-up"}},[_vm._v("Sign up")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://app.manyletter.com/"}},[_vm._v("Log in")])])]),_vm._v(" "),_c('div',{staticClass:"hr mt40 mb40"}),_vm._v(" "),_c('p',{staticClass:"small"},[_vm._v("© "+_vm._s(new Date().getFullYear())+" manyletter.com")])])])],2)}
var Sidebarvue_type_template_id_105ada87_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/_common/Sidebar.vue?vue&type=template&id=105ada87&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/_common/Sidebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Sidebarvue_type_script_lang_js_ = ({
  name: "TheSidenav",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/_common/Sidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var _common_Sidebarvue_type_script_lang_js_ = (Sidebarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/_common/Sidebar.vue



function Sidebar_injectStyles (context) {
  
  var style0 = __webpack_require__(57)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Sidebar_component = Object(componentNormalizer["a" /* default */])(
  _common_Sidebarvue_type_script_lang_js_,
  Sidebarvue_type_template_id_105ada87_scoped_true_render,
  Sidebarvue_type_template_id_105ada87_scoped_true_staticRenderFns,
  false,
  Sidebar_injectStyles,
  "105ada87",
  "5b1c5242"
  
)

/* harmony default export */ var Sidebar = (Sidebar_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/_common/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  components: {
    Topbar: Topbar,
    Sidebar: Sidebar
  },

  data() {
    return {
      displaySidebar: false
    };
  }

});
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/_common/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var _common_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/_common/Header.vue



function Header_injectStyles (context) {
  
  var style0 = __webpack_require__(59)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Header_component = Object(componentNormalizer["a" /* default */])(
  _common_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  Header_injectStyles,
  "510e6d60",
  "1a49565a"
  
)

/* harmony default export */ var Header = __webpack_exports__["a"] = (Header_component.exports);

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/_common/Footer.vue?vue&type=template&id=f0659fc4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bt1",attrs:{"id":"footer"}},[_vm._ssrNode("<div class=\"container-narrow mb40 mt40 pt40\" data-v-f0659fc4>","</div>",[_vm._ssrNode("<div class=\"grid xs-col-2 sm-col-2 md-col-4 lg-col-5 auto gap-30 align-items-start\" data-v-f0659fc4>","</div>",[_vm._ssrNode("<div class=\"grid gap-10 xs-order-5 xs-span-2\" data-v-f0659fc4>","</div>",[_vm._ssrNode("<div class=\"logo\" data-v-f0659fc4>","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("\n                        Manyletter\n                    ")])],1),_vm._ssrNode(" <p class=\"small\" data-v-f0659fc4>\n                    We are on the mission<br data-v-f0659fc4>\n                    to change the way how<br data-v-f0659fc4>\n                    newsletters are done.<br data-v-f0659fc4>\n                    Will you join us?\n                </p> <p class=\"small mt40\" data-v-f0659fc4>"+_vm._ssrEscape("© "+_vm._s(new Date().getFullYear())+" manyletter.com")+"</p>")],2),_vm._ssrNode(" <div class=\"grid gap-10 xs-order-1\" data-v-f0659fc4><h4 data-v-f0659fc4>Links</h4> <ul data-v-f0659fc4><li data-v-f0659fc4><a href=\"https://app.manyletter.com/sign-up\" data-v-f0659fc4>Request access</a></li></ul></div> <div class=\"grid gap-10 xs-order-2\" data-v-f0659fc4><h4 data-v-f0659fc4>Service</h4> <ul data-v-f0659fc4><li data-v-f0659fc4><a href=\"https://app.manyletter.com/sign-up\" data-v-f0659fc4>Sign up</a></li> <li data-v-f0659fc4><a href=\"https://app.manyletter.com/\" data-v-f0659fc4>Log in</a></li></ul></div> <div class=\"grid gap-10 xs-order-3\" data-v-f0659fc4><h4 data-v-f0659fc4>Social media</h4> <ul data-v-f0659fc4><li data-v-f0659fc4><a href=\"https://www.facebook.com/manylettercom\" target=\"_blank\" data-v-f0659fc4>Facebook</a></li> <li data-v-f0659fc4><a href=\"https://twitter.com/manyletterHQ\" target=\"_blank\" data-v-f0659fc4>Twitter</a></li></ul></div> <div class=\"grid gap-10 xs-order-4\" data-v-f0659fc4><h4 data-v-f0659fc4>Help &amp; Contact</h4> <p class=\"contact small\" data-v-f0659fc4>Feel free to contact us at <br data-v-f0659fc4><a href=\"mailto:tomas@manyletter.com\" data-v-f0659fc4>tomas@manyletter.com</a>.</p></div>")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/_common/Footer.vue?vue&type=template&id=f0659fc4&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/manyletter.com/components/page/_common/Footer.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(62)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f0659fc4",
  "0dd21b30"
  
)

/* harmony default export */ var Footer = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(74);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("cd95d830", content, true, context)
};

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.c7c9031.png";

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_2df6b439_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_2df6b439_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_2df6b439_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_2df6b439_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_2df6b439_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(52);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(61);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(53);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, "h1[data-v-2df6b439]{font-size:2.5em}.logo[data-v-2df6b439]{height:50px;width:50px;border-radius:50px}img.computer[data-v-2df6b439]{width:135%;left:28px;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content;z-index:5}div.plant-grow[data-v-2df6b439],img.computer[data-v-2df6b439]{position:absolute;bottom:-90px;filter:drop-shadow(0 0 10px #ccc)}div.plant-grow[data-v-2df6b439]{right:-110px;z-index:6;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-position:0 0;background-repeat:no-repeat;background-size:auto}p.johntheplant[data-v-2df6b439]{position:absolute;right:-190px;top:-100px;filter:drop-shadow(0 0 2px #ccc);z-index:6;font-size:.7em;width:150px;background-color:#fff;padding:15px;border-radius:4px}.component[data-v-2df6b439]{overflow:hidden}.dots[data-v-2df6b439]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-position:0 0;background-repeat:repeat;background-size:auto}.dots1[data-v-2df6b439]{height:400px;width:400px}.dots1[data-v-2df6b439],.dots2[data-v-2df6b439]{position:absolute;z-index:0}.dots2[data-v-2df6b439]{bottom:40px;right:-160px;height:250px;width:150px}.blob[data-v-2df6b439]{position:absolute;right:-58px;top:-62px;z-index:2;background:#39ac37;border-radius:50%;margin:45px;height:1px;width:1px;box-shadow:0 0 0 0 #009d63;transform:scale(4);-webkit-animation:pulse-data-v-2df6b439 2s infinite;animation:pulse-data-v-2df6b439 2s infinite}@-webkit-keyframes pulse-data-v-2df6b439{0%{transform:scale(.95);box-shadow:0 0 0 0 rgba(0,157,99,.7)}70%{transform:scale(1.05);box-shadow:0 0 0 40px rgba(0,157,99,0)}to{transform:scale(.95);box-shadow:0 0 0 0 rgba(0,157,99,0)}}@keyframes pulse-data-v-2df6b439{0%{transform:scale(.95);box-shadow:0 0 0 0 rgba(0,157,99,.7)}70%{transform:scale(1.05);box-shadow:0 0 0 40px rgba(0,157,99,0)}to{transform:scale(.95);box-shadow:0 0 0 0 rgba(0,157,99,0)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/pages/subscribers.vue?vue&type=template&id=d4878d82&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_c('Hero')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/pages/subscribers.vue?vue&type=template&id=d4878d82&

// EXTERNAL MODULE: ./apps/manyletter.com/components/page/_common/Header.vue + 14 modules
var Header = __webpack_require__(65);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/subscribers/Hero.vue?vue&type=template&id=2df6b439&scoped=true&
var Herovue_type_template_id_2df6b439_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-narrow mt20 mb20\" data-v-2df6b439><img"+(_vm._ssrAttr("src",__webpack_require__(72)))+" alt class=\"logo\" data-v-2df6b439></div> <div class=\"container-narrow mt40 grid\" data-v-2df6b439><div class=\"grid gap-20\" data-v-2df6b439><h1 data-v-2df6b439>Read newsletters like never before. </h1> <h2 class=\"strong big\" data-v-2df6b439>Read short newsletter summaries, aka SNS</h2> <p class=\"maxw500\" data-v-2df6b439>Rather than receiving many email newsletters that you will never read, receive one email with short summaries of all newsletters you subscribe to, directly from the authors.</p> <div class=\"mt30\" data-v-2df6b439><a href=\"https://app.manyletter.com/sign-up\" class=\"button black cta\" data-v-2df6b439>Get started</a></div></div></div>")])}
var Herovue_type_template_id_2df6b439_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/subscribers/Hero.vue?vue&type=template&id=2df6b439&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/subscribers/Hero.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Herovue_type_script_lang_js_ = ({// props: ['domainList'],
});
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/subscribers/Hero.vue?vue&type=script&lang=js&
 /* harmony default export */ var subscribers_Herovue_type_script_lang_js_ = (Herovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/manyletter.com/components/page/subscribers/Hero.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(73)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  subscribers_Herovue_type_script_lang_js_,
  Herovue_type_template_id_2df6b439_scoped_true_render,
  Herovue_type_template_id_2df6b439_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "2df6b439",
  "ed9927b4"
  
)

/* harmony default export */ var Hero = (component.exports);
// EXTERNAL MODULE: ./apps/manyletter.com/components/page/_common/Footer.vue + 2 modules
var Footer = __webpack_require__(66);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/pages/subscribers.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var subscribersvue_type_script_lang_js_ = ({
  layout: 'defaultPage',
  components: {
    Header: Header["a" /* default */],
    Hero: Hero,
    Footer: Footer["a" /* default */]
  } // async asyncData({ $axios, params }) {
  //     const [domainListNewest, domainListPremium] = await Promise.all ([
  //         $axios.$get('/open/newest'),
  //         $axios.$get('/open/premium')
  //     ])
  //     return { domainListNewest, domainListPremium }
  // },

});
// CONCATENATED MODULE: ./apps/manyletter.com/pages/subscribers.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_subscribersvue_type_script_lang_js_ = (subscribersvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/pages/subscribers.vue



function subscribers_injectStyles (context) {
  
  
}

/* normalize component */

var subscribers_component = Object(componentNormalizer["a" /* default */])(
  pages_subscribersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  subscribers_injectStyles,
  null,
  "71aa16a2"
  
)

/* harmony default export */ var subscribers = __webpack_exports__["default"] = (subscribers_component.exports);

/***/ })

};;
//# sourceMappingURL=subscribers.js.map