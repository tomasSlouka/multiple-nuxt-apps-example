exports.ids = [2];
exports.modules = {

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("7754cb2c", content, true, context)
};

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("e7f393fc", content, true, context)
};

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("69002c53", content, true, context)
};

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("3735e8ff", content, true, context)
};

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.bf95f19.png";

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_587b3450_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_587b3450_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_587b3450_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_587b3450_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_587b3450_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#topbar[data-v-587b3450]{position:relative;top:0;left:0;width:100%;background-color:#fff;z-index:100;height:68px}.logo[data-v-587b3450]{height:50px;border-radius:50px}#topbar>.container-narrow[data-v-587b3450]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}#topbar>.container-narrow>div.flex[data-v-587b3450]{height:100%}.logo a[data-v-587b3450]{font-size:24px;line-height:30px;font-weight:700;font-family:\"Caveat\",cursive;text-decoration:none;color:#000}.nav>ul[data-v-587b3450]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-587b3450]{padding:22px;border-bottom:1px solid transparent;position:relative;transition:.3s;transition:transform .2s}.nav>ul>li>a[data-v-587b3450]:hover{transform:scale(1.5)}.nav>ul>li>a.nuxt-link-exact-active[data-v-587b3450],.nav>ul>li>a[data-v-587b3450]:hover{color:#000;text-decoration:none}.nav>ul>li.sidenavtoggle[data-v-587b3450]{cursor:pointer}.nav>ul>li.sidenavtoggle>div[data-v-587b3450]{width:30px;height:3px;background-color:#333;margin:5px 0;border-radius:4px}.nav>ul>li>a[data-v-587b3450]{color:#333;line-height:24px;font-weight:500;text-decoration:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_768f55dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_768f55dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_768f55dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_768f55dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_768f55dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".sidenav-backdrop[data-v-768f55dc],.sidenav-container[data-v-768f55dc]{height:100%;width:100%}.sidenav-backdrop[data-v-768f55dc]{background-color:hsla(0,0%,90.6%,.7);z-index:1000;position:fixed;top:0;left:0}.sidenav>ul[data-v-768f55dc]{list-style:none;margin:0;padding:0}.sidenav>ul>li>a[data-v-768f55dc]{color:#000;font-size:16px;line-height:23px;font-weight:500;text-decoration:none;transition:.3s}.sidenav[data-v-768f55dc]{height:100%;width:300px;background-color:#fff;z-index:10000;position:fixed;top:0;right:0;box-sizing:border-box;padding:30px}.slide-side-enter-active[data-v-768f55dc],.slide-side-leave-active[data-v-768f55dc]{transition:all .3s ease-out}.slide-side-enter[data-v-768f55dc],.slide-side-leave-to[data-v-768f55dc]{transform:translateX(100%)}.logo a[data-v-768f55dc]{font-size:24px;line-height:30px;font-weight:700;font-family:\"Caveat\",cursive;text-decoration:none;color:#39ac37}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_19d7ff06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_19d7ff06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_19d7ff06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_19d7ff06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_19d7ff06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container[data-v-19d7ff06]{padding-bottom:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 58:
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

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/plant.60d724f.svg";

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iNSIgeT0iNSIgd2lkdGg9IjQiIGhlaWdodD0iNCIgcng9IjIiIGZpbGw9IiMzOUFDMzciIGZpbGwtb3BhY2l0eT0iMC4yNCIvPgo8L3N2Zz4K"

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_a4a6899a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_a4a6899a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_a4a6899a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_a4a6899a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_a4a6899a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".logo a[data-v-a4a6899a]{font-size:2em;line-height:30px;font-weight:700;font-family:\"Caveat\",cursive;text-decoration:none;color:#fff}#footer[data-v-a4a6899a]{background-color:#000;padding-bottom:40px}#footer[data-v-a4a6899a],#footer p[data-v-a4a6899a]{color:hsla(0,0%,100%,.72157)}h4[data-v-a4a6899a]{color:#fff}#footer>.container-narrow[data-v-a4a6899a]{margin-bottom:0}ul[data-v-a4a6899a]{list-style-type:none}li[data-v-a4a6899a]{margin-bottom:5px}li>a[data-v-a4a6899a]{color:inherit;text-decoration:none;display:block;padding:5px;transition:.3s;left:0;color:hsla(0,0%,100%,.72157)}li>a[data-v-a4a6899a],li>a[data-v-a4a6899a]:hover{position:relative}li>a[data-v-a4a6899a]:hover{left:5px;color:#fff}p.contact[data-v-a4a6899a]{color:hsla(0,0%,100%,.72157)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/api.upforweb.com/components/page/_common/Header.vue?vue&type=template&id=19d7ff06&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"header"}},[_vm._ssrNode("<div class=\"container\" data-v-19d7ff06>","</div>",[_c('Topbar',{on:{"sidenavtoggle":function($event){_vm.displaySidebar = !_vm.displaySidebar}}}),_vm._ssrNode(" "),_c('Sidebar',{attrs:{"show":_vm.displaySidebar},on:{"close":function($event){_vm.displaySidebar = false}}})],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/api.upforweb.com/components/page/_common/Header.vue?vue&type=template&id=19d7ff06&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/api.upforweb.com/components/page/_common/Topbar.vue?vue&type=template&id=587b3450&scoped=true&
var Topbarvue_type_template_id_587b3450_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div id=\"topbar\" data-v-587b3450>","</div>",[_vm._ssrNode("<div class=\"container-narrow\" data-v-587b3450>","</div>",[_vm._ssrNode("<div class=\"flex wrap align-items-center justify-content-space-between\" data-v-587b3450>","</div>",[_vm._ssrNode("<div class=\"logo\" data-v-587b3450>","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{staticClass:"logo mt20",attrs:{"src":__webpack_require__(51),"alt":""}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"nav\" data-v-587b3450>","</div>",[_vm._ssrNode("<ul class=\"flex wrap show-md align-items-center\" data-v-587b3450>","</ul>",[_vm._ssrNode("<li data-v-587b3450>","</li>",[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("EN")]),_vm._ssrNode(" | "),_c('nuxt-link',{attrs:{"to":"/sk"}},[_vm._v("SK")])],2)])])],2)])])])}
var Topbarvue_type_template_id_587b3450_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/api.upforweb.com/components/page/_common/Topbar.vue?vue&type=template&id=587b3450&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/api.upforweb.com/components/page/_common/Topbar.vue?vue&type=script&lang=js&
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
// CONCATENATED MODULE: ./apps/api.upforweb.com/components/page/_common/Topbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var _common_Topbarvue_type_script_lang_js_ = (Topbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/api.upforweb.com/components/page/_common/Topbar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(52)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _common_Topbarvue_type_script_lang_js_,
  Topbarvue_type_template_id_587b3450_scoped_true_render,
  Topbarvue_type_template_id_587b3450_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "587b3450",
  "413b8bf6"
  
)

/* harmony default export */ var Topbar = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/api.upforweb.com/components/page/_common/Sidebar.vue?vue&type=template&id=768f55dc&scoped=true&
var Sidebarvue_type_template_id_768f55dc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sidenav-container"},[_vm._ssrNode("<div class=\"sidenav-backdrop\""+(_vm._ssrStyle(null,null, { display: (_vm.show) ? '' : 'none' }))+" data-v-768f55dc></div> "),_c('transition',{attrs:{"name":"slide-side"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"sidenav"},[_c('div',{staticClass:"logo mb40"},[_c('nuxt-link',{attrs:{"to":"/"},on:{"click":function($event){return _vm.$emit('close')}}},[_vm._v("\n                  Manyletter\n              ")])],1),_vm._v(" "),_c('ul',{staticClass:"grid col-1 gap-20",on:{"click":function($event){return _vm.$emit('close')}}},[_c('li',[_c('a',{attrs:{"href":"https://app.manyletter.com/sign-up"}},[_vm._v("Request access")])])]),_vm._v(" "),_c('div',{staticClass:"hr mt40 mb40"}),_vm._v(" "),_c('ul',{staticClass:"grid col-1 gap-20",on:{"click":function($event){return _vm.$emit('close')}}},[_c('li',[_c('a',{attrs:{"href":"https://app.manyletter.com/sign-up"}},[_vm._v("Sign up")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://app.manyletter.com/"}},[_vm._v("Log in")])])]),_vm._v(" "),_c('div',{staticClass:"hr mt40 mb40"}),_vm._v(" "),_c('p',{staticClass:"small"},[_vm._v("© "+_vm._s(new Date().getFullYear())+" manyletter.com")])])])],2)}
var Sidebarvue_type_template_id_768f55dc_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/api.upforweb.com/components/page/_common/Sidebar.vue?vue&type=template&id=768f55dc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/api.upforweb.com/components/page/_common/Sidebar.vue?vue&type=script&lang=js&
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
// CONCATENATED MODULE: ./apps/api.upforweb.com/components/page/_common/Sidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var _common_Sidebarvue_type_script_lang_js_ = (Sidebarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/api.upforweb.com/components/page/_common/Sidebar.vue



function Sidebar_injectStyles (context) {
  
  var style0 = __webpack_require__(54)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Sidebar_component = Object(componentNormalizer["a" /* default */])(
  _common_Sidebarvue_type_script_lang_js_,
  Sidebarvue_type_template_id_768f55dc_scoped_true_render,
  Sidebarvue_type_template_id_768f55dc_scoped_true_staticRenderFns,
  false,
  Sidebar_injectStyles,
  "768f55dc",
  "10ef6398"
  
)

/* harmony default export */ var Sidebar = (Sidebar_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/api.upforweb.com/components/page/_common/Header.vue?vue&type=script&lang=js&
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
// CONCATENATED MODULE: ./apps/api.upforweb.com/components/page/_common/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var _common_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/api.upforweb.com/components/page/_common/Header.vue



function Header_injectStyles (context) {
  
  var style0 = __webpack_require__(56)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Header_component = Object(componentNormalizer["a" /* default */])(
  _common_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  Header_injectStyles,
  "19d7ff06",
  "5d8c2065"
  
)

/* harmony default export */ var Header = __webpack_exports__["a"] = (Header_component.exports);

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/api.upforweb.com/components/page/_common/Footer.vue?vue&type=template&id=a4a6899a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bt1",attrs:{"id":"footer"}},[_vm._ssrNode("<div class=\"container-narrow mb40 mt40 pt40\" data-v-a4a6899a>","</div>",[_vm._ssrNode("<div class=\"grid xs-col-2 sm-col-2 md-col-4 lg-col-5 auto gap-30 align-items-start\" data-v-a4a6899a>","</div>",[_vm._ssrNode("<div class=\"grid gap-10 xs-order-5 xs-span-2\" data-v-a4a6899a>","</div>",[_vm._ssrNode("<div class=\"logo\" data-v-a4a6899a>","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("\n                        Manyletter\n                    ")])],1),_vm._ssrNode(" <p class=\"small\" data-v-a4a6899a>\n                    We are on the mission<br data-v-a4a6899a>\n                    to change the way how<br data-v-a4a6899a>\n                    newsletters are done.<br data-v-a4a6899a>\n                    Will you join us?\n                </p> <p class=\"small mt40\" data-v-a4a6899a>"+_vm._ssrEscape("© "+_vm._s(new Date().getFullYear())+" manyletter.com")+"</p>")],2),_vm._ssrNode(" <div class=\"grid gap-10 xs-order-1\" data-v-a4a6899a><h4 data-v-a4a6899a>Links</h4> <ul data-v-a4a6899a><li data-v-a4a6899a><a href=\"https://app.manyletter.com/sign-up\" data-v-a4a6899a>Request access</a></li></ul></div> <div class=\"grid gap-10 xs-order-2\" data-v-a4a6899a><h4 data-v-a4a6899a>Service</h4> <ul data-v-a4a6899a><li data-v-a4a6899a><a href=\"https://app.manyletter.com/sign-up\" data-v-a4a6899a>Sign up</a></li> <li data-v-a4a6899a><a href=\"https://app.manyletter.com/\" data-v-a4a6899a>Log in</a></li></ul></div> <div class=\"grid gap-10 xs-order-3\" data-v-a4a6899a><h4 data-v-a4a6899a>Social media</h4> <ul data-v-a4a6899a><li data-v-a4a6899a><a href=\"https://www.facebook.com/manylettercom\" target=\"_blank\" data-v-a4a6899a>Facebook</a></li> <li data-v-a4a6899a><a href=\"https://twitter.com/manyletterHQ\" target=\"_blank\" data-v-a4a6899a>Twitter</a></li></ul></div> <div class=\"grid gap-10 xs-order-4\" data-v-a4a6899a><h4 data-v-a4a6899a>Help &amp; Contact</h4> <p class=\"contact small\" data-v-a4a6899a>Feel free to contact us at <br data-v-a4a6899a><a href=\"mailto:tomas@manyletter.com\" data-v-a4a6899a>tomas@manyletter.com</a>.</p></div>")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/api.upforweb.com/components/page/_common/Footer.vue?vue&type=template&id=a4a6899a&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/api.upforweb.com/components/page/_common/Footer.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(61)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a4a6899a",
  "3c59bc73"
  
)

/* harmony default export */ var Footer = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("2be765ae", content, true, context)
};

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SKHero_vue_vue_type_style_index_0_id_1818d746_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SKHero_vue_vue_type_style_index_0_id_1818d746_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SKHero_vue_vue_type_style_index_0_id_1818d746_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SKHero_vue_vue_type_style_index_0_id_1818d746_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SKHero_vue_vue_type_style_index_0_id_1818d746_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(58);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(59);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(60);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, "h1[data-v-1818d746]{font-size:2.4em}img.computer[data-v-1818d746]{width:135%;left:28px;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content;z-index:5}div.plant-grow[data-v-1818d746],img.computer[data-v-1818d746]{position:absolute;bottom:-90px;filter:drop-shadow(0 0 10px #ccc)}div.plant-grow[data-v-1818d746]{right:-110px;z-index:6;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-position:0 0;background-repeat:no-repeat;background-size:auto}p.johntheplant[data-v-1818d746]{position:absolute;right:-190px;top:-100px;filter:drop-shadow(0 0 2px #ccc);z-index:6;font-size:.7em;width:150px;background-color:#fff;padding:15px;border-radius:4px}.component[data-v-1818d746]{overflow:hidden}.dots[data-v-1818d746]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-position:0 0;background-repeat:repeat;background-size:auto}.dots1[data-v-1818d746]{height:400px;width:400px}.dots1[data-v-1818d746],.dots2[data-v-1818d746]{position:absolute;z-index:0}.dots2[data-v-1818d746]{bottom:40px;right:-160px;height:250px;width:150px}.blob[data-v-1818d746]{position:absolute;right:-58px;top:-62px;z-index:2;background:#39ac37;border-radius:50%;margin:45px;height:1px;width:1px;box-shadow:0 0 0 0 #009d63;transform:scale(4);-webkit-animation:pulse-data-v-1818d746 2s infinite;animation:pulse-data-v-1818d746 2s infinite}@-webkit-keyframes pulse-data-v-1818d746{0%{transform:scale(.95);box-shadow:0 0 0 0 rgba(0,157,99,.7)}70%{transform:scale(1.05);box-shadow:0 0 0 40px rgba(0,157,99,0)}to{transform:scale(.95);box-shadow:0 0 0 0 rgba(0,157,99,0)}}@keyframes pulse-data-v-1818d746{0%{transform:scale(.95);box-shadow:0 0 0 0 rgba(0,157,99,.7)}70%{transform:scale(1.05);box-shadow:0 0 0 40px rgba(0,157,99,0)}to{transform:scale(.95);box-shadow:0 0 0 0 rgba(0,157,99,0)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/api.upforweb.com/pages/sk/index.vue?vue&type=template&id=9bb9524e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_c('Header'),_vm._ssrNode(" "),_c('Hero')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/api.upforweb.com/pages/sk/index.vue?vue&type=template&id=9bb9524e&

// EXTERNAL MODULE: ./apps/api.upforweb.com/components/page/_common/Header.vue + 14 modules
var Header = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/api.upforweb.com/components/page/home/SKHero.vue?vue&type=template&id=1818d746&scoped=true&
var SKHerovue_type_template_id_1818d746_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-narrow mt60 grid\" data-v-1818d746><div class=\"grid gap-20\" data-v-1818d746><h1 data-v-1818d746>Frontend je náš svet</h1> <p class=\"maxw600 big\" data-v-1818d746>\n                Vytvárame nádherné, rýchle predajné webové stránky a prispôsobené riešenia na vylepšenie vašich interných procesov. Veríme v dlhodobé vzťahy, vďaka ktorým zákazníkom prinášame kvalitné riešenia a spokojnosť.\n            </p> <div class=\"mt30\" data-v-1818d746><div data-v-1818d746><a href=\"mailto:ahoj@upforweb.com\" class=\"button black cta\" data-v-1818d746>Spojme sa emailom</a></div></div> <p class=\"small\" data-v-1818d746>ahoj@upforweb.com | +421 907 371 480</p> <p class=\"small gray\" data-v-1818d746>\n                upforweb s. r. o. | Hlavná 46/83 Zavar 919 26 | IČO: 53 086 228\n            </p></div></div>")])}
var SKHerovue_type_template_id_1818d746_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/api.upforweb.com/components/page/home/SKHero.vue?vue&type=template&id=1818d746&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/api.upforweb.com/components/page/home/SKHero.vue?vue&type=script&lang=js&
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
/* harmony default export */ var SKHerovue_type_script_lang_js_ = ({// props: ['domainList'],
});
// CONCATENATED MODULE: ./apps/api.upforweb.com/components/page/home/SKHero.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_SKHerovue_type_script_lang_js_ = (SKHerovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/api.upforweb.com/components/page/home/SKHero.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(67)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_SKHerovue_type_script_lang_js_,
  SKHerovue_type_template_id_1818d746_scoped_true_render,
  SKHerovue_type_template_id_1818d746_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "1818d746",
  "cf58274e"
  
)

/* harmony default export */ var SKHero = (component.exports);
// EXTERNAL MODULE: ./apps/api.upforweb.com/components/page/_common/Footer.vue + 2 modules
var Footer = __webpack_require__(64);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/api.upforweb.com/pages/sk/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var skvue_type_script_lang_js_ = ({
  layout: 'defaultPage',
  components: {
    Header: Header["a" /* default */],
    Hero: SKHero,
    Footer: Footer["a" /* default */]
  } // async asyncData({ $axios, params }) {
  //     const [domainListNewest, domainListPremium] = await Promise.all ([
  //         $axios.$get('/open/newest'),
  //         $axios.$get('/open/premium')
  //     ])
  //     return { domainListNewest, domainListPremium }
  // },

});
// CONCATENATED MODULE: ./apps/api.upforweb.com/pages/sk/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_skvue_type_script_lang_js_ = (skvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/api.upforweb.com/pages/sk/index.vue



function sk_injectStyles (context) {
  
  
}

/* normalize component */

var sk_component = Object(componentNormalizer["a" /* default */])(
  pages_skvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  sk_injectStyles,
  null,
  "46c11236"
  
)

/* harmony default export */ var sk = __webpack_exports__["default"] = (sk_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map