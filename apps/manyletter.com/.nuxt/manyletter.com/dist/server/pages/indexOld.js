exports.ids = [24];
exports.modules = {

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(106);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("eb379cc4", content, true, context)
};

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(108);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("08bcd40a", content, true, context)
};

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(110);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("0c1fd38a", content, true, context)
};

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_af7592c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(101);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_af7592c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_af7592c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_af7592c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_af7592c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Topbar_vue_vue_type_style_index_0_id_af7592c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#topbar[data-v-af7592c4]{max-width:1200px;margin:0 auto;padding:20px}.logo a[data-v-af7592c4]{font-size:30px;line-height:30px;font-weight:700;font-family:\"Caveat\",cursive;text-decoration:none;color:#39ac37}.nav>ul[data-v-af7592c4]{list-style:none;margin:0;padding:0}.nav>ul>div>li[data-v-af7592c4],.nav>ul>li[data-v-af7592c4]{padding:0 22px}.nav>ul>div>li>a[data-v-af7592c4],.nav>ul>li>a[data-v-af7592c4]{border-bottom:1px solid transparent;position:relative;transition:.3s}.nav>ul>div>li>a.nuxt-link-active[data-v-af7592c4],.nav>ul>div>li>a[data-v-af7592c4]:hover,.nav>ul>li>a.nuxt-link-active[data-v-af7592c4],.nav>ul>li>a[data-v-af7592c4]:hover{color:#39ac37;text-decoration:underline}.nav>ul>li.sidenavtoggle[data-v-af7592c4]{cursor:pointer}.nav>ul>li.sidenavtoggle>div[data-v-af7592c4]{width:30px;height:4px;background-color:#000;margin:5px 0}.nav>ul>div>li>a[data-v-af7592c4],.nav>ul>li>a[data-v-af7592c4]{font-family:\"Open sans\",sans-serif;color:#000;font-size:16px;line-height:24px;font-weight:500;text-decoration:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_6f0a7088_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(102);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_6f0a7088_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_6f0a7088_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_6f0a7088_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_6f0a7088_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_6f0a7088_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".sidenav-backdrop[data-v-6f0a7088],.sidenav-container[data-v-6f0a7088]{height:100%;width:100%}.sidenav-backdrop[data-v-6f0a7088]{background-color:hsla(0,0%,90.6%,.7);z-index:1000;position:fixed;top:0;left:0}.sidenav>ul[data-v-6f0a7088]{list-style:none;margin:0;padding:0}.sidenav>ul>li>a[data-v-6f0a7088]{color:#000;font-size:16px;line-height:23px;font-weight:500;text-decoration:none;transition:.3s}.sidenav[data-v-6f0a7088]{height:100%;width:300px;background-color:#fff;z-index:10000;position:fixed;top:0;right:0;box-sizing:border-box;padding:30px}.slide-side-enter-active[data-v-6f0a7088],.slide-side-leave-active[data-v-6f0a7088]{transition:all .3s ease-out}.slide-side-enter[data-v-6f0a7088],.slide-side-leave-to[data-v-6f0a7088]{transform:translateX(100%)}.logo a[data-v-6f0a7088]{font-size:30px;line-height:30px;font-weight:700;font-family:\"Caveat\",cursive;text-decoration:none;color:#39ac37}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_498dfdf6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_498dfdf6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_498dfdf6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_498dfdf6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_498dfdf6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_498dfdf6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container[data-v-498dfdf6]{padding-bottom:0;box-shadow:0 .125rem .125rem rgba(0,0,0,.1)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/_common/Header.vue?vue&type=template&id=498dfdf6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"header"}},[_vm._ssrNode("<div class=\"container\" data-v-498dfdf6>","</div>",[_c('Topbar',{on:{"sidenavToggle":function($event){_vm.displaySidebar = !_vm.displaySidebar}}}),_vm._ssrNode(" "),_c('Sidebar',{attrs:{"show":_vm.displaySidebar},on:{"close":function($event){_vm.displaySidebar = false}}})],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/_common/Header.vue?vue&type=template&id=498dfdf6&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/_common/Topbar.vue?vue&type=template&id=af7592c4&scoped=true&
var Topbarvue_type_template_id_af7592c4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"topbar"}},[_vm._ssrNode("<div class=\"flex wrap align-items-center justify-content-space-between\" data-v-af7592c4>","</div>",[_vm._ssrNode("<div class=\"logo\" data-v-af7592c4>","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("\n                ManyLetter\n            ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"nav\" data-v-af7592c4>","</div>",[_vm._ssrNode("<ul class=\"flex wrap show-md align-items-center\" data-v-af7592c4>","</ul>",[_vm._ssrNode("<span data-v-af7592c4>|</span> "),(_vm.$store.getters.isUserLoggedIn)?_vm._ssrNode("<div class=\"flex wrap show-md align-items-center\" data-v-af7592c4>","</div>",[_vm._ssrNode("<li data-v-af7592c4>","</li>",[_c('nuxt-link',{staticClass:"flex nowrap align-items-center",attrs:{"to":"/admin/home"}},[_vm._v(" "+_vm._s((_vm.$store.state.userData == null) ? "Go to Admin" : "Continue as " + _vm.$store.state.userData.name + ""))])],1),_vm._ssrNode(" <span data-v-af7592c4>or</span> <li data-v-af7592c4><a data-v-af7592c4>Log out</a></li>")],2):_vm._ssrNode("<div class=\"flex wrap show-md align-items-center\" data-v-af7592c4>","</div>",[_vm._ssrNode("<li data-v-af7592c4>","</li>",[_c('nuxt-link',{attrs:{"to":"/log-in"}},[_vm._v("Log in")])],1),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"button cta",attrs:{"to":"/sign-up","tag":"button"}},[_vm._v("Get started")])],2)],2),_vm._ssrNode(" <ul data-v-af7592c4><li class=\"sidenavtoggle hidden-md\" data-v-af7592c4><div data-v-af7592c4></div> <div data-v-af7592c4></div> <div data-v-af7592c4></div></li></ul>")],2)],2)])}
var Topbarvue_type_template_id_af7592c4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/_common/Topbar.vue?vue&type=template&id=af7592c4&scoped=true&

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
//
//
//
//
/* harmony default export */ var Topbarvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/_common/Topbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var _common_Topbarvue_type_script_lang_js_ = (Topbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./apps/manyletter.com/components/page/_common/Topbar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(105)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _common_Topbarvue_type_script_lang_js_,
  Topbarvue_type_template_id_af7592c4_scoped_true_render,
  Topbarvue_type_template_id_af7592c4_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "af7592c4",
  "040e7c2a"
  
)

/* harmony default export */ var Topbar = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/_common/Sidebar.vue?vue&type=template&id=6f0a7088&scoped=true&
var Sidebarvue_type_template_id_6f0a7088_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sidenav-container"},[_vm._ssrNode("<div class=\"sidenav-backdrop\""+(_vm._ssrStyle(null,null, { display: (_vm.show) ? '' : 'none' }))+" data-v-6f0a7088></div> "),_c('transition',{attrs:{"name":"slide-side"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"sidenav"},[_c('div',{staticClass:"logo mb40"},[_c('nuxt-link',{attrs:{"to":"/"},on:{"click":function($event){return _vm.$emit('close')}}},[_vm._v("\n                  ManyLetter\n              ")])],1),_vm._v(" "),_c('ul',{staticClass:"grid col-1 gap-20",on:{"click":function($event){return _vm.$emit('close')}}},[_c('li',[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("Home")])],1)]),_vm._v(" "),_c('div',{staticClass:"hr mt40 mb40"}),_vm._v(" "),_c('ul',{staticClass:"grid col-1 gap-20",on:{"click":function($event){return _vm.$emit('close')}}},[(_vm.$store.getters.isUserLoggedIn)?_c('li',[_c('nuxt-link',{staticClass:"flex nowrap align-items-center",attrs:{"to":"/admin/home"}},[_vm._v(" "+_vm._s((_vm.$store.state.userData == null) ? "Go to Admin" : "Continue as " + _vm.$store.state.userData.name + ""))])],1):_c('li',[_c('nuxt-link',{attrs:{"to":"/log-in"}},[_vm._v("Log in")])],1),_vm._v(" "),(_vm.$store.getters.isUserLoggedIn)?_c('li',[_c('a',{on:{"click":function($event){$event.preventDefault();return _vm.$store.dispatch("logout")}}},[_vm._v("Log out")])]):_c('li',[_c('nuxt-link',{attrs:{"to":"/sign-up"}},[_vm._v("Sign Up")])],1)]),_vm._v(" "),_c('div',{staticClass:"hr mt40 mb40"}),_vm._v(" "),_c('p',{staticClass:"small"},[_vm._v("© "+_vm._s(new Date().getFullYear())+" ManyLetter")])])])],2)}
var Sidebarvue_type_template_id_6f0a7088_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/_common/Sidebar.vue?vue&type=template&id=6f0a7088&scoped=true&

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
  
  var style0 = __webpack_require__(107)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Sidebar_component = Object(componentNormalizer["a" /* default */])(
  _common_Sidebarvue_type_script_lang_js_,
  Sidebarvue_type_template_id_6f0a7088_scoped_true_render,
  Sidebarvue_type_template_id_6f0a7088_scoped_true_staticRenderFns,
  false,
  Sidebar_injectStyles,
  "6f0a7088",
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
  
  var style0 = __webpack_require__(109)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Header_component = Object(componentNormalizer["a" /* default */])(
  _common_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  Header_injectStyles,
  "498dfdf6",
  "1a49565a"
  
)

/* harmony default export */ var Header = __webpack_exports__["a"] = (Header_component.exports);

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(241);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("1aa29b24", content, true, context)
};

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(244);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("12f887e7", content, true, context)
};

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(250);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("2ace841d", content, true, context)
};

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(256);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("71e8741e", content, true, context)
};

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(258);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("047957e4", content, true, context)
};

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheProblem_vue_vue_type_style_index_0_id_07661712_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheProblem_vue_vue_type_style_index_0_id_07661712_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheProblem_vue_vue_type_style_index_0_id_07661712_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheProblem_vue_vue_type_style_index_0_id_07661712_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheProblem_vue_vue_type_style_index_0_id_07661712_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheProblem_vue_vue_type_style_index_0_id_07661712_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".component[data-v-07661712]{background-color:#f2fdfa;padding:10px}.container-standard[data-v-07661712]{margin-top:40px;margin-bottom:40px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mails-to-one-2.8e84a3f.svg";

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Showcase_vue_vue_type_style_index_0_id_a58727c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(144);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Showcase_vue_vue_type_style_index_0_id_a58727c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Showcase_vue_vue_type_style_index_0_id_a58727c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Showcase_vue_vue_type_style_index_0_id_a58727c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Showcase_vue_vue_type_style_index_0_id_a58727c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Showcase_vue_vue_type_style_index_0_id_a58727c2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "img[data-v-a58727c2]{max-width:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 245:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkzIiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDE5MyAxNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxOTMiIGhlaWdodD0iMTYwIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTM2IDQwSDU2QzUwLjUgNDAgNDYuMDUgNDQuNSA0Ni4wNSA1MEw0NiAxMTBDNDYgMTE1LjUgNTAuNSAxMjAgNTYgMTIwSDEzNkMxNDEuNSAxMjAgMTQ2IDExNS41IDE0NiAxMTBWNTBDMTQ2IDQ0LjUgMTQxLjUgNDAgMTM2IDQwWk0xMzYgNjBMOTYgODVMNTYgNjBWNTBMOTYgNzVMMTM2IDUwVjYwWiIgZmlsbD0iIzM5QUMzNyIgZmlsbC1vcGFjaXR5PSIwLjUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMy42ODg5IDBIMTU4LjIyMkMxNjggMCAxNzYgOCAxNzYgMTcuNzc3OFYxNDIuMjIyQzE3NiAxNTIgMTY4IDE2MCAxNTguMjIyIDE2MEgzMy42ODg5QzIzLjgyMjIgMTYwIDE2IDE1MiAxNiAxNDIuMjIyVjE3Ljc3NzhDMTYgOCAyMy44MjIyIDAgMzMuNjg4OSAwWk0zMy43Nzc4IDExNS41NTZWMTQyLjIyMkgxNTguMjIyVjExNS41NTZIMTI2Ljc1NkMxMjAuNTMzIDEyNi4xMzMgMTA5LjI0NCAxMzMuMzMzIDk2LjA4ODkgMTMzLjMzM0M4Mi45MzMzIDEzMy4zMzMgNzEuNTU1NiAxMjYuMTMzIDY1LjQyMjIgMTE1LjU1NkgzMy43Nzc4Wk0xMTMuODY3IDk3Ljc3NzhIMTU4LjIyMlYxNy43Nzc4SDMzLjY4ODlMMzMuNzc3OCA5Ny43Nzc4SDc4LjMxMTFDNzguMzExMSAxMDcuNTU2IDg2LjMxMTEgMTE1LjU1NiA5Ni4wODg5IDExNS41NTZDMTA1Ljg2NyAxMTUuNTU2IDExMy44NjcgMTA3LjU1NiAxMTMuODY3IDk3Ljc3NzhaIiBmaWxsPSIjMzlBQzM3Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkzIiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDE5MyAxNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxOTMiIGhlaWdodD0iMTYwIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTUyIDE2SDE0NFYwSDEyOFYxNkg2NFYwSDQ4VjE2SDQwQzMxLjEyIDE2IDI0LjA4IDIzLjIgMjQuMDggMzJMMjQgMTQ0QzI0IDE1Mi44IDMxLjEyIDE2MCA0MCAxNjBIMTUyQzE2MC44IDE2MCAxNjggMTUyLjggMTY4IDE0NFYzMkMxNjggMjMuMiAxNjAuOCAxNiAxNTIgMTZaTTE1MiAxNDRINDBWNjRIMTUyVjE0NFpNMTUyIDQ4SDQwVjMySDE1MlY0OFpNOTYgODhIMTM2VjEyOEg5NlY4OFoiIGZpbGw9IiMzOUFDMzciLz4KPHBhdGggZD0iTTQ0LjUgODlDMjQuODg2MiA4OSA5IDEwNC44ODYgOSAxMjQuNUM5IDE0NC4xMTQgMjQuODg2MiAxNjAgNDQuNSAxNjBDNjQuMTEzOCAxNjAgODAgMTQ0LjExNCA4MCAxMjQuNUM4MCAxMDQuODg2IDY0LjExMzggODkgNDQuNSA4OVpNNjMuMzU5NCAxNDIuOTE2TDQwLjA2MjUgMTI4LjkzOFYxMDIuMzEySDQ2LjcxODhWMTI1LjYwOUw2Ni42ODc1IDEzNy40NThMNjMuMzU5NCAxNDIuOTE2WiIgZmlsbD0iI0ZCNEE1OSIvPgo8L3N2Zz4K"

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sort.2318312.svg";

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/unsubscribe.3d77b3e.svg";

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolkitSubscriber_vue_vue_type_style_index_0_id_62065266_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolkitSubscriber_vue_vue_type_style_index_0_id_62065266_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolkitSubscriber_vue_vue_type_style_index_0_id_62065266_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolkitSubscriber_vue_vue_type_style_index_0_id_62065266_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolkitSubscriber_vue_vue_type_style_index_0_id_62065266_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolkitSubscriber_vue_vue_type_style_index_0_id_62065266_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".box[data-v-62065266],.box-1[data-v-62065266],.box-2[data-v-62065266]{padding:40px}.box-2[data-v-62065266]{border-left:1px solid #eee}.box-3[data-v-62065266]{padding:40px}.box-3[data-v-62065266],.box-4[data-v-62065266]{border-top:1px solid #eee}.box-4[data-v-62065266]{border-left:1px solid #eee}img[data-v-62065266]{width:50px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 251:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkzIiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDE5MyAxNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgo8cmVjdCB3aWR0aD0iMTkzIiBoZWlnaHQ9IjE2MCIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTc0IDk3SDJWMTA5SDc0Vjk3Wk03NCA3M0gyVjg1SDc0VjczWk05OCAxMjFWOTdIODZWMTIxSDYyVjEzM0g4NlYxNTdIOThWMTMzSDEyMlYxMjFIOThaTTIgMTMzSDUwVjEyMUgyVjEzM1oiIGZpbGw9IiMzOUFDMzciLz4KPHBhdGggZD0iTTExMSAxN0M5NC40MzMzIDE3IDgxIDMwLjUwMDUgODEgNDcuMTVDODEgNjEuMTE5NSA5MC40NjY3IDcyLjg0NDUgMTAzLjMgNzYuMjYxNUwxMTEgODRMMTE4LjcgNzYuMjYxNUMxMzEuNTMzIDcyLjg0NDUgMTQxIDYxLjExOTUgMTQxIDQ3LjE1QzE0MSAzMC41MDA1IDEyNy41NjcgMTcgMTExIDE3Wk0xMTEgMjMuN0MxMTYuNTMzIDIzLjcgMTIxIDI4LjE4OSAxMjEgMzMuNzVDMTIxIDM5LjMxMSAxMTYuNTMzIDQzLjggMTExIDQzLjhDMTA1LjQ2NyA0My44IDEwMSAzOS4zMTEgMTAxIDMzLjc1QzEwMSAyOC4xODkgMTA1LjQ2NyAyMy43IDExMSAyMy43Wk0xMTEgNzEuNjA1QzEwMi42NjcgNzEuNjA1IDk1LjMgNjcuMzE3IDkxIDYwLjgxOEM5MS4xIDU0LjE1MTUgMTA0LjMzMyA1MC41IDExMSA1MC41QzExNy42MzMgNTAuNSAxMzAuOSA1NC4xNTE1IDEzMSA2MC44MThDMTI2LjcgNjcuMzE3IDExOS4zMzMgNzEuNjA1IDExMSA3MS42MDVaIiBmaWxsPSIjRkFBOTM1Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iMTkzIiBoZWlnaHQ9IjE2MCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkzIiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDE5MyAxNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgo8cmVjdCB3aWR0aD0iMTkzIiBoZWlnaHQ9IjE2MCIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTc2LjMxNTggMTIzLjQ0NEg2MC41MjYzVjY4LjIyMjJINzYuMzE1OFYxMjMuNDQ0Wk0xMDcuODk1IDEyMy40NDRIOTIuMTA1M1Y0NC41NTU2SDEwNy44OTVWMTIzLjQ0NFpNMTM5LjQ3NCAxMjMuNDQ0SDEyMy42ODRWOTEuODg4OUgxMzkuNDc0VjEyMy40NDRaTTE1OS4yMTEgMTQwLjAxMUg0MC43ODk1VjI4Ljc3NzhIMTU5LjIxMVYxNDAuMDExWk0xNTkuMjExIDEzSDQwLjc4OTVDMzIuMTA1MyAxMyAyNSAyMC4xIDI1IDI4Ljc3NzhWMTM5LjIyMkMyNSAxNDcuOSAzMi4xMDUzIDE1NSA0MC43ODk1IDE1NUgxNTkuMjExQzE2Ny44OTUgMTU1IDE3NSAxNDcuOSAxNzUgMTM5LjIyMlYyOC43Nzc4QzE3NSAyMC4xIDE2Ny44OTUgMTMgMTU5LjIxMSAxM1oiIGZpbGw9IiMzOUFDMzciLz4KPHBhdGggZD0iTTE1My4yMDggLTAuNDE2NjI2VjY1LjQxNjdDMTM2LjUyIDYzLjc3MDkgMTIzLjU4MyA0OS42NDk2IDEyMy41ODMgMzIuNUMxMjMuNTgzIDE1LjM1MDUgMTM2LjUyIDEuMjI5MjEgMTUzLjIwOCAtMC40MTY2MjZaTTE1OS44OSAtMC40MTY2MjZWMjkuMTc1NUgxODkuNDE3QzE4Ny44NyAxMy41NzMgMTc1LjQ2IDEuMTMwNDYgMTU5Ljg5IC0wLjQxNjYyNlpNMTU5Ljg5IDM1LjgyNDZWNjUuNDE2N0MxNzUuNDkzIDYzLjg2OTYgMTg3Ljg3IDUxLjQyNzEgMTg5LjQxNyAzNS44MjQ2SDE1OS44OVoiIGZpbGw9IiNGQjRBNTkiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSIxOTMiIGhlaWdodD0iMTYwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/workflow.2318312.svg";

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkzIiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDE5MyAxNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxOTMiIGhlaWdodD0iMTYwIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNOTYuNSAxMTguNDg3TDE0NC40MjEgMTUzTDEyNi4wNzkgOTcuMjY3OEwxNzQgNjMuNTIxN0gxMTUuMjI5TDk2LjUgNkw3Ny43NzA4IDYzLjUyMTdIMTlMNjYuOTIwOCA5Ny4yNjc4TDQ4LjU3OTIgMTUzTDk2LjUgMTE4LjQ4N1oiIGZpbGw9IiMzOUFDMzciLz4KPHBhdGggZD0iTTEzMCAzMy45MjMxSDEyNS4zMzNWNDMuMTUzOEgxMTZWNDcuNzY5MkgxMjUuMzMzVjU3SDEzMFY0Ny43NjkySDEzOS4zMzNWNDMuMTUzOEgxMzBWMzMuOTIzMVpNMTQwLjUgMjkuNDkyM1YzMy42OTIzTDE0Ni4zMzMgMzIuNTM4NVY1N0gxNTFWMjdMMTQwLjUgMjkuNDkyM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolkitCreator_vue_vue_type_style_index_0_id_7666b312_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(146);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolkitCreator_vue_vue_type_style_index_0_id_7666b312_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolkitCreator_vue_vue_type_style_index_0_id_7666b312_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolkitCreator_vue_vue_type_style_index_0_id_7666b312_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolkitCreator_vue_vue_type_style_index_0_id_7666b312_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolkitCreator_vue_vue_type_style_index_0_id_7666b312_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".box[data-v-7666b312],.box-1[data-v-7666b312],.box-2[data-v-7666b312]{padding:40px}.box-2[data-v-7666b312]{border-left:1px solid #eee}.box-3[data-v-7666b312]{padding:40px}.box-3[data-v-7666b312],.box-4[data-v-7666b312]{border-top:1px solid #eee}.box-4[data-v-7666b312]{border-left:1px solid #eee}img[data-v-7666b312]{width:50px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GetStarted_vue_vue_type_style_index_0_id_0caa0e73_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(147);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GetStarted_vue_vue_type_style_index_0_id_0caa0e73_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GetStarted_vue_vue_type_style_index_0_id_0caa0e73_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GetStarted_vue_vue_type_style_index_0_id_0caa0e73_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GetStarted_vue_vue_type_style_index_0_id_0caa0e73_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GetStarted_vue_vue_type_style_index_0_id_0caa0e73_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".component[data-v-0caa0e73]{background-color:#f2fdfa;padding:10px}.container-standard[data-v-0caa0e73]{margin-top:40px;margin-bottom:40px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/pages/indexOld.vue?vue&type=template&id=0d423ee3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_c('Header'),_vm._ssrNode(" "),_c('Intro'),_vm._ssrNode(" "),_c('Showcase'),_vm._ssrNode(" "),_c('TheProblem'),_vm._ssrNode(" "),_c('ToolkitSubscriber'),_vm._ssrNode(" "),_c('ToolkitCreator'),_vm._ssrNode(" "),_c('GetStarted')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/pages/indexOld.vue?vue&type=template&id=0d423ee3&scoped=true&

// EXTERNAL MODULE: ./apps/manyletter.com/components/page/_common/Header.vue + 14 modules
var Header = __webpack_require__(112);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/indexOld/Intro.vue?vue&type=template&id=11f8519e&scoped=true&
var Introvue_type_template_id_11f8519e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard mb60\" data-v-11f8519e><div class=\"grid col-1 auto align-items-center justify-content-start\" data-v-11f8519e><div data-v-11f8519e><h2 data-v-11f8519e>One email instead of hundreds?</h2> <h1 data-v-11f8519e>Free up your inbox.</h1></div> <div class=\"grid gap-10\" data-v-11f8519e><div data-v-11f8519e><p class=\"big\" data-v-11f8519e></p> <p class=\"big\" data-v-11f8519e></p></div> <div class=\"grid auto gap-5 xs-col-1 sm-col-2 md-col-2 mt20 \" data-v-11f8519e><input id=\"email\" type=\"email\" name=\"email\" placeholder=\"Enter your email...\" data-v-11f8519e> <button class=\"cta\" data-v-11f8519e>Get Early Access</button></div> <div data-v-11f8519e><p class=\"small gray\" data-v-11f8519e>Join 10 657 confirmed users (this number is not a fake one)</p></div></div></div></div>")])}
var Introvue_type_template_id_11f8519e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/indexOld/Intro.vue?vue&type=template&id=11f8519e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/indexOld/Intro.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Introvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/indexOld/Intro.vue?vue&type=script&lang=js&
 /* harmony default export */ var indexOld_Introvue_type_script_lang_js_ = (Introvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./apps/manyletter.com/components/page/indexOld/Intro.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  indexOld_Introvue_type_script_lang_js_,
  Introvue_type_template_id_11f8519e_scoped_true_render,
  Introvue_type_template_id_11f8519e_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "11f8519e",
  "77ab3180"
  
)

/* harmony default export */ var Intro = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/indexOld/TheProblem.vue?vue&type=template&id=07661712&scoped=true&
var TheProblemvue_type_template_id_07661712_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard grid gap-20 col-1 auto align-items-center\" data-v-07661712><div class=\"grid gap-10\" data-v-07661712><div class=\"grid justify-items-start\" data-v-07661712><h2 data-v-07661712>May Day! May Day!</h2> <h3 class=\"mb15\" data-v-07661712>Huston we have a problem!</h3> <p data-v-07661712>Did you find yourself in a situation when you are overwhelmed by emails, notifications, subscriptions...? If yes then ManyLetter is the tool that will help you with your struggles. Free up your inbox and make it distraction-free.</p></div></div></div>")])}
var TheProblemvue_type_template_id_07661712_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/indexOld/TheProblem.vue?vue&type=template&id=07661712&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/indexOld/TheProblem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TheProblemvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/indexOld/TheProblem.vue?vue&type=script&lang=js&
 /* harmony default export */ var indexOld_TheProblemvue_type_script_lang_js_ = (TheProblemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/indexOld/TheProblem.vue



function TheProblem_injectStyles (context) {
  
  var style0 = __webpack_require__(240)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var TheProblem_component = Object(componentNormalizer["a" /* default */])(
  indexOld_TheProblemvue_type_script_lang_js_,
  TheProblemvue_type_template_id_07661712_scoped_true_render,
  TheProblemvue_type_template_id_07661712_scoped_true_staticRenderFns,
  false,
  TheProblem_injectStyles,
  "07661712",
  "2e76546c"
  
)

/* harmony default export */ var TheProblem = (TheProblem_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/indexOld/Showcase.vue?vue&type=template&id=a58727c2&scoped=true&
var Showcasevue_type_template_id_a58727c2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard\" data-v-a58727c2><div class=\"grid col-1 auto justify-content-start\" data-v-a58727c2><img"+(_vm._ssrAttr("src",__webpack_require__(242)))+" alt=\"Showcase - ymello\" data-v-a58727c2></div></div>")])}
var Showcasevue_type_template_id_a58727c2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/indexOld/Showcase.vue?vue&type=template&id=a58727c2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/indexOld/Showcase.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Showcasevue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/indexOld/Showcase.vue?vue&type=script&lang=js&
 /* harmony default export */ var indexOld_Showcasevue_type_script_lang_js_ = (Showcasevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/indexOld/Showcase.vue



function Showcase_injectStyles (context) {
  
  var style0 = __webpack_require__(243)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Showcase_component = Object(componentNormalizer["a" /* default */])(
  indexOld_Showcasevue_type_script_lang_js_,
  Showcasevue_type_template_id_a58727c2_scoped_true_render,
  Showcasevue_type_template_id_a58727c2_scoped_true_staticRenderFns,
  false,
  Showcase_injectStyles,
  "a58727c2",
  "d18df3ee"
  
)

/* harmony default export */ var Showcase = (Showcase_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/indexOld/ToolkitSubscriber.vue?vue&type=template&id=62065266&scoped=true&
var ToolkitSubscribervue_type_template_id_62065266_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard\" data-v-62065266>","</div>",[_vm._ssrNode("<div class=\"grid gap-30 justify-items-start\" data-v-62065266>","</div>",[_vm._ssrNode("<div data-v-62065266><h2 data-v-62065266>Be more productive</h2> <p class=\"gray\" data-v-62065266>Features for subscribers</p></div> <div class=\"grid xs-col-1 sm-col-2\" data-v-62065266><div class=\"box box-1 grid gap-20 align-content-start\" data-v-62065266><img"+(_vm._ssrAttr("src",__webpack_require__(245)))+" alt=\"Whitelabel CMS - ymello\" data-v-62065266> <h3 data-v-62065266>One mail a day</h3> <p data-v-62065266>ManyLetter will send you only one email a day with all the news from newsletters that you are subscribed to.</p></div> <div class=\"box box-2 grid gap-20 align-content-start\" data-v-62065266><img"+(_vm._ssrAttr("src",__webpack_require__(246)))+" alt=\"Whitelabel CMS - ymello\" data-v-62065266> <h3 data-v-62065266>Choose your time</h3> <p data-v-62065266>Choose the time when you will receive the email. Make your inbox distraction-free.</p></div> <div class=\"box box-3 grid gap-20 align-content-start\" data-v-62065266><img"+(_vm._ssrAttr("src",__webpack_require__(247)))+" alt=\"Whitelabel CMS - ymello\" data-v-62065266> <h3 data-v-62065266>Sort and categorize</h3> <p data-v-62065266>Categorize newsletters so you will have an overview of all bulletins that you are interested in. Sort newsletters based on how much you love them.</p></div> <div class=\"box box-4 grid gap-20 align-content-start\" data-v-62065266><img"+(_vm._ssrAttr("src",__webpack_require__(248)))+" alt=\"Whitelabel CMS - ymello\" data-v-62065266> <h3 data-v-62065266>Automatic unsubscription</h3> <p data-v-62065266>ManyLetter will automatically unsubscribe you from the newsletter if you don't open it regullary. Give you the power to control all of your subscriptions.</p></div></div> "),_c('nuxt-link',{staticClass:"button cta justify-self-center",attrs:{"to":"/about"}},[_vm._v("Learn more")])],2)])])}
var ToolkitSubscribervue_type_template_id_62065266_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/indexOld/ToolkitSubscriber.vue?vue&type=template&id=62065266&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/indexOld/ToolkitSubscriber.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ToolkitSubscribervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/indexOld/ToolkitSubscriber.vue?vue&type=script&lang=js&
 /* harmony default export */ var indexOld_ToolkitSubscribervue_type_script_lang_js_ = (ToolkitSubscribervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/indexOld/ToolkitSubscriber.vue



function ToolkitSubscriber_injectStyles (context) {
  
  var style0 = __webpack_require__(249)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var ToolkitSubscriber_component = Object(componentNormalizer["a" /* default */])(
  indexOld_ToolkitSubscribervue_type_script_lang_js_,
  ToolkitSubscribervue_type_template_id_62065266_scoped_true_render,
  ToolkitSubscribervue_type_template_id_62065266_scoped_true_staticRenderFns,
  false,
  ToolkitSubscriber_injectStyles,
  "62065266",
  "5e66a9cc"
  
)

/* harmony default export */ var ToolkitSubscriber = (ToolkitSubscriber_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/indexOld/ToolkitCreator.vue?vue&type=template&id=7666b312&scoped=true&
var ToolkitCreatorvue_type_template_id_7666b312_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard\" data-v-7666b312>","</div>",[_vm._ssrNode("<div class=\"grid gap-30 justify-items-start\" data-v-7666b312>","</div>",[_vm._ssrNode("<div data-v-7666b312><h2 data-v-7666b312>Create better content</h2> <p class=\"gray\" data-v-7666b312>Features for newsletter creators</p></div> <div class=\"grid xs-col-1 sm-col-2\" data-v-7666b312><div class=\"box box-1 grid gap-20 align-content-start\" data-v-7666b312><img"+(_vm._ssrAttr("src",__webpack_require__(251)))+" alt=\"Whitelabel CMS - ymello\" data-v-7666b312> <h3 data-v-7666b312>Collect and manage</h3> <p data-v-7666b312>Collect and manage your subscribers as well as your newsletters and messages. Subscriber lists can be managed automatically so you will have relevant subscibers only.</p></div> <div class=\"box box-2 grid gap-20 align-content-start\" data-v-7666b312><img"+(_vm._ssrAttr("src",__webpack_require__(252)))+" alt=\"Whitelabel CMS - ymello\" data-v-7666b312> <h3 data-v-7666b312>Understand</h3> <p data-v-7666b312>ManyLetter will tell you all kind of interesting stats about your newsletter and its messages. Understand your subscribers so you can bring them better content.</p></div> <div class=\"box box-3 grid gap-20 align-content-start\" data-v-7666b312><img"+(_vm._ssrAttr("src",__webpack_require__(253)))+" alt=\"Whitelabel CMS - ymello\" data-v-7666b312> <h3 data-v-7666b312>Simplier workflow</h3> <p data-v-7666b312>ManyLetter will save you tons o time and money because you don't need to create special messages for email anymore, instead you can get your subscibers directly to your website.</p></div> <div class=\"box box-4 grid gap-20 align-content-start\" data-v-7666b312><img"+(_vm._ssrAttr("src",__webpack_require__(254)))+" alt=\"Whitelabel CMS - ymello\" data-v-7666b312> <h3 data-v-7666b312>Increase open rates</h3> <p data-v-7666b312>ManyLetter will help you increase open rates of your newsletter by providing you with better insights.</p></div></div> "),_c('nuxt-link',{staticClass:"button cta justify-self-center",attrs:{"to":"/about"}},[_vm._v("Learn more")])],2)])])}
var ToolkitCreatorvue_type_template_id_7666b312_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/indexOld/ToolkitCreator.vue?vue&type=template&id=7666b312&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/indexOld/ToolkitCreator.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ToolkitCreatorvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/indexOld/ToolkitCreator.vue?vue&type=script&lang=js&
 /* harmony default export */ var indexOld_ToolkitCreatorvue_type_script_lang_js_ = (ToolkitCreatorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/indexOld/ToolkitCreator.vue



function ToolkitCreator_injectStyles (context) {
  
  var style0 = __webpack_require__(255)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var ToolkitCreator_component = Object(componentNormalizer["a" /* default */])(
  indexOld_ToolkitCreatorvue_type_script_lang_js_,
  ToolkitCreatorvue_type_template_id_7666b312_scoped_true_render,
  ToolkitCreatorvue_type_template_id_7666b312_scoped_true_staticRenderFns,
  false,
  ToolkitCreator_injectStyles,
  "7666b312",
  "75ba22ea"
  
)

/* harmony default export */ var ToolkitCreator = (ToolkitCreator_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/indexOld/GetStarted.vue?vue&type=template&id=0caa0e73&scoped=true&
var GetStartedvue_type_template_id_0caa0e73_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard grid gap-20 col-1 auto align-items-center justify-content-center\" data-v-0caa0e73><div class=\"grid gap-10\" data-v-0caa0e73><div class=\"text-center\" data-v-0caa0e73><h2 data-v-0caa0e73>Get your 20% off</h2> <p class=\"big\" data-v-0caa0e73>All who join us at the beginning will get 20% off for a lifetime.</p></div> <div class=\"mt30 grid auto gap-5 xs-col-1 sm-col-2 md-col-2\" data-v-0caa0e73><input id=\"email\" type=\"email\" name=\"email\" placeholder=\"Enter your email...\" data-v-0caa0e73> <button class=\"cta\" data-v-0caa0e73>Get Early Access</button></div></div></div>")])}
var GetStartedvue_type_template_id_0caa0e73_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/indexOld/GetStarted.vue?vue&type=template&id=0caa0e73&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/indexOld/GetStarted.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var GetStartedvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/indexOld/GetStarted.vue?vue&type=script&lang=js&
 /* harmony default export */ var indexOld_GetStartedvue_type_script_lang_js_ = (GetStartedvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/indexOld/GetStarted.vue



function GetStarted_injectStyles (context) {
  
  var style0 = __webpack_require__(257)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var GetStarted_component = Object(componentNormalizer["a" /* default */])(
  indexOld_GetStartedvue_type_script_lang_js_,
  GetStartedvue_type_template_id_0caa0e73_scoped_true_render,
  GetStartedvue_type_template_id_0caa0e73_scoped_true_staticRenderFns,
  false,
  GetStarted_injectStyles,
  "0caa0e73",
  "6eac1ab2"
  
)

/* harmony default export */ var GetStarted = (GetStarted_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/pages/indexOld.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var indexOldvue_type_script_lang_js_ = ({
  layout: 'default-page',
  components: {
    Header: Header["a" /* default */],
    Intro: Intro,
    Showcase: Showcase,
    TheProblem: TheProblem,
    ToolkitSubscriber: ToolkitSubscriber,
    ToolkitCreator: ToolkitCreator,
    GetStarted: GetStarted
  }
});
// CONCATENATED MODULE: ./apps/manyletter.com/pages/indexOld.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_indexOldvue_type_script_lang_js_ = (indexOldvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/pages/indexOld.vue



function indexOld_injectStyles (context) {
  
  
}

/* normalize component */

var indexOld_component = Object(componentNormalizer["a" /* default */])(
  pages_indexOldvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  indexOld_injectStyles,
  "0d423ee3",
  "61e1a101"
  
)

/* harmony default export */ var indexOld = __webpack_exports__["default"] = (indexOld_component.exports);

/***/ })

};;
//# sourceMappingURL=indexOld.js.map