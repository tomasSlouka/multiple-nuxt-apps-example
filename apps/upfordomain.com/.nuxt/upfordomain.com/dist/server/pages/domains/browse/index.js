exports.ids = [9];
exports.modules = {

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/upfordomain.com/pages/domains/browse/index.vue?vue&type=template&id=7f2da4d6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_c('Header'),_vm._ssrNode(" "),_c('Hero',{attrs:{"domainList":_vm.domainList,"domainStats":_vm.domainStats}}),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/upfordomain.com/pages/domains/browse/index.vue?vue&type=template&id=7f2da4d6&

// EXTERNAL MODULE: ./apps/upfordomain.com/components/page/_common/Header.vue + 14 modules
var Header = __webpack_require__(60);

// EXTERNAL MODULE: ./apps/upfordomain.com/components/page/domains/browse/Hero.vue + 4 modules
var Hero = __webpack_require__(69);

// EXTERNAL MODULE: ./apps/upfordomain.com/components/page/_common/Footer.vue + 2 modules
var Footer = __webpack_require__(61);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/upfordomain.com/pages/domains/browse/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//



/* harmony default export */ var browsevue_type_script_lang_js_ = ({
  layout: 'defaultPage',
  components: {
    Header: Header["a" /* default */],
    Hero: Hero["a" /* default */],
    Footer: Footer["a" /* default */]
  },

  async asyncData({
    $axios,
    params
  }) {
    const [domainList, domainStats] = await Promise.all([$axios.$get('/open'), $axios.$get('/open/stats')]);
    return {
      domainList,
      domainStats
    };
  }

});
// CONCATENATED MODULE: ./apps/upfordomain.com/pages/domains/browse/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var domains_browsevue_type_script_lang_js_ = (browsevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/upfordomain.com/pages/domains/browse/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  domains_browsevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6b307d08"
  
)

/* harmony default export */ var browse = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("6b55b834", content, true, context)
};

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("d2616996", content, true, context)
};

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("6074a16b", content, true, context)
};

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("775fd11f", content, true, context)
};

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_6a0b64d5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_6a0b64d5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_6a0b64d5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_6a0b64d5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_6a0b64d5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#topbar[data-v-6a0b64d5]{max-width:1200px;margin:0 auto;padding:20px}.logo a[data-v-6a0b64d5]{font-size:24px;line-height:30px;font-weight:700;font-family:\"MuseoModerno\",cursive;text-decoration:none;color:#39ac37}.nav>ul[data-v-6a0b64d5]{list-style:none;margin:0;padding:0}.nav>ul>div>li[data-v-6a0b64d5],.nav>ul>li[data-v-6a0b64d5]{padding:0 22px}.nav>ul>div>li>a[data-v-6a0b64d5],.nav>ul>li>a[data-v-6a0b64d5]{border-bottom:1px solid transparent;position:relative;transition:.3s}.nav>ul>div>li>a[data-v-6a0b64d5]:hover,.nav>ul>li>a[data-v-6a0b64d5]:hover{color:#39ac37}.nav>ul>div>li>a.nuxt-link-active[data-v-6a0b64d5],.nav>ul>li>a.nuxt-link-active[data-v-6a0b64d5]{color:#39ac37;font-weight:600}.nav>ul>li.sidenavtoggle[data-v-6a0b64d5]{cursor:pointer}.nav>ul>li.sidenavtoggle>div[data-v-6a0b64d5]{width:30px;height:4px;background-color:#000;margin:5px 0}.nav>ul>div>li>a[data-v-6a0b64d5],.nav>ul>li>a[data-v-6a0b64d5]{color:#000;font-size:16px;line-height:24px;font-weight:500;text-decoration:none}.new[data-v-6a0b64d5]{position:relative}.new>span.new-label[data-v-6a0b64d5]{position:absolute;top:-10px;right:-38px;background-color:#39ac37;border:0;border-radius:4px;color:#fff;font-size:10px;padding:4px 8px;line-height:12px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_1de1f0d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_1de1f0d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_1de1f0d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_1de1f0d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_1de1f0d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".sidenav-backdrop[data-v-1de1f0d4],.sidenav-container[data-v-1de1f0d4]{height:100%;width:100%}.sidenav-backdrop[data-v-1de1f0d4]{background-color:hsla(0,0%,90.6%,.7);z-index:1000;position:fixed;top:0;left:0}.sidenav>ul[data-v-1de1f0d4]{list-style:none;margin:0;padding:0}.sidenav>ul>li>a[data-v-1de1f0d4]{color:#000;font-size:16px;line-height:23px;font-weight:500;text-decoration:none;transition:.3s}.sidenav[data-v-1de1f0d4]{height:100%;width:300px;background-color:#fff;z-index:10000;position:fixed;top:0;right:0;box-sizing:border-box;padding:30px}.slide-side-enter-active[data-v-1de1f0d4],.slide-side-leave-active[data-v-1de1f0d4]{transition:all .3s ease-out}.slide-side-enter[data-v-1de1f0d4],.slide-side-leave-to[data-v-1de1f0d4]{transform:translateX(100%)}.logo a[data-v-1de1f0d4]{font-size:24px;line-height:30px;font-weight:700;font-family:\"MuseoModerno\",cursive;text-decoration:none;color:#39ac37}.new[data-v-1de1f0d4]{position:relative}.new>span.new-label[data-v-1de1f0d4]{left:135px}.new>span.new-label[data-v-1de1f0d4],.new>span.new-label-2[data-v-1de1f0d4]{position:absolute;top:-10px;background-color:#39ac37;border:0;border-radius:4px;color:#fff;font-size:10px;padding:4px 8px;line-height:12px}.new>span.new-label-2[data-v-1de1f0d4]{left:92px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_73272d64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_73272d64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_73272d64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_73272d64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_73272d64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container[data-v-73272d64]{padding-bottom:0;box-shadow:0 .125rem .125rem rgba(0,0,0,.1)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_00241136_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_00241136_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_00241136_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_00241136_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_00241136_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".logo a[data-v-00241136]{font-size:24px;line-height:30px;font-weight:700;font-family:\"MuseoModerno\",cursive;text-decoration:none;color:#39ac37}ul[data-v-00241136]{list-style-type:none}li[data-v-00241136]{font-size:14px;margin-bottom:5px}li>a[data-v-00241136]{color:inherit;text-decoration:none;display:block;padding:5px;transition:.3s;left:0}li>a[data-v-00241136],li>a[data-v-00241136]:hover{position:relative}li>a[data-v-00241136]:hover{left:5px}p.contact[data-v-00241136]{line-height:24px}.new[data-v-00241136]{position:relative}.new>span.new-label[data-v-00241136]{left:124px}.new>span.new-label[data-v-00241136],.new>span.new-label-2[data-v-00241136]{position:absolute;top:0;background-color:#39ac37;border:0;border-radius:4px;color:#fff;font-size:10px;padding:4px 8px;line-height:12px}.new>span.new-label-2[data-v-00241136]{left:85px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/upfordomain.com/components/page/_common/Header.vue?vue&type=template&id=73272d64&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"header"}},[_vm._ssrNode("<div class=\"container\" data-v-73272d64>","</div>",[_c('Topbar',{on:{"sidenav-toggle":function($event){_vm.displaySidebar = !_vm.displaySidebar}}}),_vm._ssrNode(" "),_c('Sidebar',{attrs:{"show":_vm.displaySidebar},on:{"close":function($event){_vm.displaySidebar = false}}})],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/upfordomain.com/components/page/_common/Header.vue?vue&type=template&id=73272d64&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/upfordomain.com/components/page/_common/Topbar.vue?vue&type=template&id=6a0b64d5&scoped=true&
var Topbarvue_type_template_id_6a0b64d5_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"topbar"}},[_vm._ssrNode("<div class=\"flex wrap align-items-center justify-content-space-between\" data-v-6a0b64d5>","</div>",[_vm._ssrNode("<div class=\"logo\" data-v-6a0b64d5>","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("\n                upfordomain\n            ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"nav\" data-v-6a0b64d5>","</div>",[_vm._ssrNode("<ul class=\"flex wrap show-md align-items-center\" data-v-6a0b64d5>","</ul>",[_vm._ssrNode("<li data-v-6a0b64d5>","</li>",[_c('nuxt-link',{attrs:{"to":"/domains/browse"}},[_vm._v("Browse domain names")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-6a0b64d5>","</li>",[_c('nuxt-link',{staticClass:"new mr10",attrs:{"to":"/domain/appraisal/add"}},[_vm._v("Domain appraisal"),_c('span',{staticClass:"new-label"},[_vm._v("new")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-6a0b64d5>","</li>",[_c('nuxt-link',{attrs:{"to":"/domain/add"}},[_vm._v("List your domain")])],1),_vm._ssrNode(" <span data-v-6a0b64d5>|</span> <li data-v-6a0b64d5><a href=\"https://app.upfordomain.com/\" data-v-6a0b64d5>Log in</a></li>")],2),_vm._ssrNode(" <ul data-v-6a0b64d5><li class=\"sidenavtoggle hidden-md\" data-v-6a0b64d5><div data-v-6a0b64d5></div> <div data-v-6a0b64d5></div> <div data-v-6a0b64d5></div></li></ul>")],2)],2)])}
var Topbarvue_type_template_id_6a0b64d5_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/upfordomain.com/components/page/_common/Topbar.vue?vue&type=template&id=6a0b64d5&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/upfordomain.com/components/page/_common/Topbar.vue?vue&type=script&lang=js&
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
// CONCATENATED MODULE: ./apps/upfordomain.com/components/page/_common/Topbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var _common_Topbarvue_type_script_lang_js_ = (Topbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/upfordomain.com/components/page/_common/Topbar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(52)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _common_Topbarvue_type_script_lang_js_,
  Topbarvue_type_template_id_6a0b64d5_scoped_true_render,
  Topbarvue_type_template_id_6a0b64d5_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "6a0b64d5",
  "578e674e"
  
)

/* harmony default export */ var Topbar = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/upfordomain.com/components/page/_common/Sidebar.vue?vue&type=template&id=1de1f0d4&scoped=true&
var Sidebarvue_type_template_id_1de1f0d4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sidenav-container"},[_vm._ssrNode("<div class=\"sidenav-backdrop\""+(_vm._ssrStyle(null,null, { display: (_vm.show) ? '' : 'none' }))+" data-v-1de1f0d4></div> "),_c('transition',{attrs:{"name":"slide-side"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"sidenav"},[_c('div',{staticClass:"logo mb40"},[_c('nuxt-link',{attrs:{"to":"/"},on:{"click":function($event){return _vm.$emit('close')}}},[_vm._v("\n                  upfordomain\n              ")])],1),_vm._v(" "),_c('ul',{staticClass:"grid col-1 gap-20",on:{"click":function($event){return _vm.$emit('close')}}},[_c('li',[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("Home")])],1),_vm._v(" "),_c('li',[_c('nuxt-link',{attrs:{"to":"/domains/browse"}},[_vm._v("Browse domain names")])],1),_vm._v(" "),_c('li',[_c('nuxt-link',{staticClass:"new mr10",attrs:{"to":"/domain/add"}},[_vm._v("Domain appraisal"),_c('span',{staticClass:"new-label"},[_vm._v("new")])])],1),_vm._v(" "),_c('li',[_c('nuxt-link',{attrs:{"to":"/domain/add"}},[_vm._v("List your domain")])],1)]),_vm._v(" "),_c('div',{staticClass:"hr mt25 mb25"}),_vm._v(" "),_c('ul',{staticClass:"grid col-1 gap-20",on:{"click":function($event){return _vm.$emit('close')}}},[_c('li',[_c('a',{attrs:{"href":"https://app.upfordomain.com/"}},[_vm._v("Log in")])])]),_vm._v(" "),_c('div',{staticClass:"hr mt25 mb25"}),_vm._v(" "),_c('ul',{staticClass:"grid col-1 gap-20",on:{"click":function($event){return _vm.$emit('close')}}},[_c('li',[_c('a',{staticClass:"new",attrs:{"href":"https://discord.gg/5TmNWAQJbF"}},[_vm._v("Community"),_c('span',{staticClass:"new-label-2"},[_vm._v("new")])])])]),_vm._v(" "),_c('div',{staticClass:"hr mt25 mb25"}),_vm._v(" "),_c('p',{staticClass:"small"},[_vm._v("© "+_vm._s(new Date().getFullYear())+" upfordomain.com")])])])],2)}
var Sidebarvue_type_template_id_1de1f0d4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/upfordomain.com/components/page/_common/Sidebar.vue?vue&type=template&id=1de1f0d4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/upfordomain.com/components/page/_common/Sidebar.vue?vue&type=script&lang=js&
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
// CONCATENATED MODULE: ./apps/upfordomain.com/components/page/_common/Sidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var _common_Sidebarvue_type_script_lang_js_ = (Sidebarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/upfordomain.com/components/page/_common/Sidebar.vue



function Sidebar_injectStyles (context) {
  
  var style0 = __webpack_require__(54)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Sidebar_component = Object(componentNormalizer["a" /* default */])(
  _common_Sidebarvue_type_script_lang_js_,
  Sidebarvue_type_template_id_1de1f0d4_scoped_true_render,
  Sidebarvue_type_template_id_1de1f0d4_scoped_true_staticRenderFns,
  false,
  Sidebar_injectStyles,
  "1de1f0d4",
  "a8de4448"
  
)

/* harmony default export */ var Sidebar = (Sidebar_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/upfordomain.com/components/page/_common/Header.vue?vue&type=script&lang=js&
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
// CONCATENATED MODULE: ./apps/upfordomain.com/components/page/_common/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var _common_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/upfordomain.com/components/page/_common/Header.vue



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
  "73272d64",
  "73defbbd"
  
)

/* harmony default export */ var Header = __webpack_exports__["a"] = (Header_component.exports);

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/upfordomain.com/components/page/_common/Footer.vue?vue&type=template&id=00241136&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bt1",attrs:{"id":"footer"}},[_vm._ssrNode("<div class=\"container-narrow mb40 mt40 pt40\" data-v-00241136>","</div>",[_vm._ssrNode("<div class=\"grid xs-col-2 sm-col-2 md-col-4 lg-col-5 auto gap-30 align-items-start\" data-v-00241136>","</div>",[_vm._ssrNode("<div class=\"grid gap-10 xs-order-5 xs-span-2\" data-v-00241136>","</div>",[_vm._ssrNode("<div class=\"logo\" data-v-00241136>","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("\n                        upfordomain\n                    ")])],1),_vm._ssrNode(" <p class=\"small\" data-v-00241136>Trade your domains with confidence.</p> <p class=\"small mt40\" data-v-00241136>"+_vm._ssrEscape("© "+_vm._s(new Date().getFullYear())+" upfordomain.com")+"</p>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"grid gap-10 xs-order-1\" data-v-00241136>","</div>",[_vm._ssrNode("<h5 data-v-00241136>Links</h5> "),_vm._ssrNode("<ul data-v-00241136>","</ul>",[_vm._ssrNode("<li data-v-00241136>","</li>",[_c('nuxt-link',{attrs:{"to":"/domains/browse"}},[_vm._v("Browse domains")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-00241136>","</li>",[_c('nuxt-link',{staticClass:"new",attrs:{"to":"/domain/appraisal/add"}},[_vm._v("Domain appraisal"),_c('span',{staticClass:"new-label"},[_vm._v("new")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-00241136>","</li>",[_c('nuxt-link',{attrs:{"to":"/domain/add"}},[_vm._v("List your domain")])],1)],2)],2),_vm._ssrNode(" <div class=\"grid gap-10 xs-order-2\" data-v-00241136><h5 data-v-00241136>Service</h5> <ul data-v-00241136><li data-v-00241136><a href=\"https://app.upfordomain.com/\" data-v-00241136>Log in</a></li></ul></div> <div class=\"grid gap-10 xs-order-3\" data-v-00241136><h5 data-v-00241136>Social media</h5> <ul data-v-00241136><li data-v-00241136><a href=\"https://discord.gg/5TmNWAQJbF\" target=\"_blank\" class=\"new\" data-v-00241136>Community<span class=\"new-label-2\" data-v-00241136>new</span></a></li> <li data-v-00241136><a href=\"https://www.facebook.com/upfordomain\" target=\"_blank\" data-v-00241136>Facebook</a></li> <li data-v-00241136><a href=\"https://twitter.com/upfordomainHQ\" target=\"_blank\" data-v-00241136>Twitter</a></li></ul></div> <div class=\"grid gap-10 xs-order-4\" data-v-00241136><h5 data-v-00241136>Help &amp; Contact</h5> <p class=\"contact small\" data-v-00241136>Feel free to contact us at <br data-v-00241136><a href=\"mailto:hello@upfordomain.com\" data-v-00241136>hello@upfordomain.com</a>.</p></div>")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/upfordomain.com/components/page/_common/Footer.vue?vue&type=template&id=00241136&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/upfordomain.com/components/page/_common/Footer.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(58)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "00241136",
  "52ac97cb"
  
)

/* harmony default export */ var Footer = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("1d891244", content, true, context)
};

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_313ce166_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_313ce166_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_313ce166_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_313ce166_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_313ce166_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".box[data-v-313ce166]{padding:40px;border-radius:4px;border:1px solid #e3f2e1;width:100%;max-width:400px}.testimonial[data-v-313ce166]{padding:30px;border-radius:4px;background-color:#fbf7ed;width:100%}img[data-v-313ce166]{width:320px;max-width:100%}.box-domain[data-v-313ce166]{border:1px solid #e3f2e1;padding:15px 20px;border-radius:4px;cursor:pointer}.box-domain[data-v-313ce166]:hover{background-color:rgba(57,172,55,.05098)}.box-filter[data-v-313ce166]{padding:30px;border-radius:4px;border:1px solid #e3f2e1;width:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/upfordomain.com/components/page/domains/browse/Hero.vue?vue&type=template&id=313ce166&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-narrow mt80\" data-v-313ce166><div class=\"grid md-col-2 gap-80 align-content-center align-items-center\" data-v-313ce166><div class=\"grid gap-20\" data-v-313ce166><h1 class=\"maxw500\" data-v-313ce166>Browse all domains up for sale.</h1> <p data-v-313ce166>All domain names have been manualy checked. You can filter domains by the TLD, renting price, buyout price and domain tier and tags.</p></div> <div data-v-313ce166><div class=\"testimonial grid gap-20 justify-self-start col-2 auto\" data-v-313ce166><span class=\"font26\" data-v-313ce166>🧭</span> <p data-v-313ce166>Discover <span class=\"strong\" data-v-313ce166>"+_vm._ssrEscape(_vm._s(_vm.domainStats.count)+" domains")+"</span> for a total renting price of <span class=\"strong\" data-v-313ce166>"+_vm._ssrEscape("$"+_vm._s(_vm.domainStats.totalPriceRenting)+"/month")+"</span> and buyout price of <span class=\"strong\" data-v-313ce166>"+_vm._ssrEscape("$"+_vm._s(_vm.domainStats.totalPriceBuyout))+"</span>.</p></div></div></div></div> "),_vm._ssrNode("<div class=\"container-narrow mt80\" data-v-313ce166>","</div>",[_vm._ssrNode("<div class=\"grid gap-20\" data-v-313ce166>","</div>",[_vm._ssrNode("<div class=\"grid md-col-3 gap-20 align-items-start justify-content-start\" data-v-313ce166>","</div>",_vm._l((_vm.domainList.data),function(item){return _c('nuxt-link',{key:item.id,staticClass:"box-domain grid gap-10",attrs:{"tag":"div","to":"/domain/detail/" + item.name}},[_c('h4',[_vm._v(" "+_vm._s(item.name))]),_vm._v(" "),_c('div',{staticClass:"grid col-2"},[_c('div',[_c('label',{attrs:{"for":""}},[_vm._v("Renting price")]),_vm._v(" "),_c('p',[_vm._v("$"+_vm._s(item.price_renting)+"/month")])]),_vm._v(" "),_c('div',[_c('label',{attrs:{"for":""}},[_vm._v("Buyout price")]),_vm._v(" "),_c('p',[_vm._v("$"+_vm._s(item.price_buyout))])])])])}),1)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/upfordomain.com/components/page/domains/browse/Hero.vue?vue&type=template&id=313ce166&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/upfordomain.com/components/page/domains/browse/Hero.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
/* harmony default export */ var Herovue_type_script_lang_js_ = ({
  props: ['domainList', 'domainStats'],

  data() {
    return {};
  },

  methods: {}
});
// CONCATENATED MODULE: ./apps/upfordomain.com/components/page/domains/browse/Hero.vue?vue&type=script&lang=js&
 /* harmony default export */ var browse_Herovue_type_script_lang_js_ = (Herovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/upfordomain.com/components/page/domains/browse/Hero.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(67)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  browse_Herovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "313ce166",
  "0e55701e"
  
)

/* harmony default export */ var Hero = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map