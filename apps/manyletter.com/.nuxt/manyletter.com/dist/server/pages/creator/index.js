exports.ids = [21];
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

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/messages.e492529.png";

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(217);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("57b9c1c0", content, true, context)
};

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(219);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("2b30be27", content, true, context)
};

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(221);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("646e6ed5", content, true, context)
};

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(223);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("7e6fe238", content, true, context)
};

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(225);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("2554b98e", content, true, context)
};

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/newsletter-intro-5.65370c7.png";

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_67249894_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(132);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_67249894_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_67249894_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_67249894_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_67249894_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_67249894_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container-standard[data-v-67249894]{max-width:1200px}img[data-v-67249894]{box-shadow:0 .25rem .75rem rgba(0,0,0,.15)}.width[data-v-67249894]{max-width:320px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheProblem_vue_vue_type_style_index_0_id_39642cf3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(133);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheProblem_vue_vue_type_style_index_0_id_39642cf3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheProblem_vue_vue_type_style_index_0_id_39642cf3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheProblem_vue_vue_type_style_index_0_id_39642cf3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheProblem_vue_vue_type_style_index_0_id_39642cf3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheProblem_vue_vue_type_style_index_0_id_39642cf3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container-standard[data-v-39642cf3]{margin-top:100px;margin-bottom:80px}.box[data-v-39642cf3]{background-color:rgba(57,172,55,.05098);padding:40px 20px;border-radius:8px;transition:all .6s cubic-bezier(.165,.84,.44,1);max-width:540px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSolution_vue_vue_type_style_index_0_id_479ea8e1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSolution_vue_vue_type_style_index_0_id_479ea8e1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSolution_vue_vue_type_style_index_0_id_479ea8e1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSolution_vue_vue_type_style_index_0_id_479ea8e1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSolution_vue_vue_type_style_index_0_id_479ea8e1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheSolution_vue_vue_type_style_index_0_id_479ea8e1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container-standard[data-v-479ea8e1]{margin-top:100px;margin-bottom:80px}.box[data-v-479ea8e1]{border-radius:8px;transition:all .6s cubic-bezier(.165,.84,.44,1);max-width:540px}img[data-v-479ea8e1]{box-shadow:0 .25rem .75rem rgba(0,0,0,.15)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolkitCreator_vue_vue_type_style_index_0_id_3e1ab4f7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(135);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolkitCreator_vue_vue_type_style_index_0_id_3e1ab4f7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolkitCreator_vue_vue_type_style_index_0_id_3e1ab4f7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolkitCreator_vue_vue_type_style_index_0_id_3e1ab4f7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolkitCreator_vue_vue_type_style_index_0_id_3e1ab4f7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolkitCreator_vue_vue_type_style_index_0_id_3e1ab4f7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".box-1[data-v-3e1ab4f7],.box-2[data-v-3e1ab4f7]{padding:40px}.box-2[data-v-3e1ab4f7]{border-left:1px solid #eee}.box-3[data-v-3e1ab4f7]{padding:40px}.box-3[data-v-3e1ab4f7],.box-4[data-v-3e1ab4f7]{border-top:1px solid #eee}.box-4[data-v-3e1ab4f7]{border-left:1px solid #eee}img[data-v-3e1ab4f7]{width:60px}.box h3[data-v-3e1ab4f7]{font-size:25px;font-weight:700;line-height:25px}@media only screen and (max-width:576px){h2[data-v-3e1ab4f7]{text-align:left}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GetStarted_vue_vue_type_style_index_0_id_64c55a3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GetStarted_vue_vue_type_style_index_0_id_64c55a3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GetStarted_vue_vue_type_style_index_0_id_64c55a3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GetStarted_vue_vue_type_style_index_0_id_64c55a3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GetStarted_vue_vue_type_style_index_0_id_64c55a3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GetStarted_vue_vue_type_style_index_0_id_64c55a3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".component[data-v-64c55a3a]{background-color:#39ac37;color:#fff;padding:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/pages/creator/index.vue?vue&type=template&id=265dc0b0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_c('Header'),_vm._ssrNode(" "),_c('Intro'),_vm._ssrNode(" "),_c('TheSolution'),_vm._ssrNode(" "),_c('ToolkitCreator'),_vm._ssrNode(" "),_c('GetStarted')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/pages/creator/index.vue?vue&type=template&id=265dc0b0&scoped=true&

// EXTERNAL MODULE: ./apps/manyletter.com/components/page/_common/Header.vue + 14 modules
var Header = __webpack_require__(112);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/creator/Intro.vue?vue&type=template&id=67249894&scoped=true&
var Introvue_type_template_id_67249894_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard mt80 mb80\" data-v-67249894>","</div>",[_vm._ssrNode("<div class=\"grid gap-100 md-col-2 align-items-center\" data-v-67249894>","</div>",[_vm._ssrNode("<div class=\"grid gap-20\" data-v-67249894>","</div>",[_vm._ssrNode("<div data-v-67249894><h1 data-v-67249894>Start building community around your newsletter</h1></div> "),_vm._ssrNode("<div class=\"grid gap-20 box align-content-start\" data-v-67249894>","</div>",[_vm._ssrNode("<div data-v-67249894><p class=\"maxw400 font18 thin\" data-v-67249894>Creating newsletters today is easier than ever, but finding your subscribers can be challenging. Only sending the newsletter is not enough. Build a relationship with your subscribers.</p></div> "),_vm._ssrNode("<div class=\"grid justify-items-start mt20\" data-v-67249894>","</div>",[_c('nuxt-link',{staticClass:"button cta big",attrs:{"to":"/sign-up"}},[_vm._v("Add your newsletter")])],1),_vm._ssrNode(" <div data-v-67249894><p class=\"thin font14\" data-v-67249894>Start building your community <span class=\"strong\" data-v-67249894>today</span>.</p></div>")],2)],2),_vm._ssrNode(" <div data-v-67249894><img"+(_vm._ssrAttr("src",__webpack_require__(215)))+" alt=\"Creator dashboard screenshot\" data-v-67249894></div>")],2)])])}
var Introvue_type_template_id_67249894_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/creator/Intro.vue?vue&type=template&id=67249894&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/creator/Intro.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/creator/Intro.vue?vue&type=script&lang=js&
 /* harmony default export */ var creator_Introvue_type_script_lang_js_ = (Introvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./apps/manyletter.com/components/page/creator/Intro.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(216)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  creator_Introvue_type_script_lang_js_,
  Introvue_type_template_id_67249894_scoped_true_render,
  Introvue_type_template_id_67249894_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "67249894",
  "8434815e"
  
)

/* harmony default export */ var Intro = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/creator/TheProblem.vue?vue&type=template&id=39642cf3&scoped=true&
var TheProblemvue_type_template_id_39642cf3_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard\" data-v-39642cf3><div class=\"grid gap-60\" data-v-39642cf3><div class=\"grid\" data-v-39642cf3><h2 class=\"big mb20\" data-v-39642cf3>1.</h2> <h3 data-v-39642cf3>Take a look at subscribers problems.</h3></div> <div class=\"grid gap-20 col-2\" data-v-39642cf3><h3 data-v-39642cf3>These are the problems your subscribers have</h3> <h3 data-v-39642cf3>Solutions</h3> <p class=\"thin font18\" data-v-39642cf3>too many emails</p> <p class=\"thin font18\" data-v-39642cf3>one email at a preferred time</p> <p class=\"thin font18\" data-v-39642cf3>too many notifications</p> <p class=\"thin font18\" data-v-39642cf3>one notification at a preferred time</p> <p class=\"thin font18\" data-v-39642cf3>distracting email</p> <p class=\"thin font18\" data-v-39642cf3>clean email</p> <p class=\"thin font18\" data-v-39642cf3>missed newsletter emails</p> <p class=\"thin font18\" data-v-39642cf3>no missed newsletter emails + can be found in ManyLetter newsletter history</p> <p class=\"thin font18\" data-v-39642cf3>hard to clean up old newsletter emails</p> <p class=\"thin font18\" data-v-39642cf3>no need to clean up old newsletter messages</p> <p class=\"thin font18\" data-v-39642cf3>fear of deleting some important newsletter email (keeping messy inbox)</p> <p class=\"thin font18\" data-v-39642cf3>all newsletter emails can be found in ManyLetter newsletter history (clean inbox)</p> <p class=\"thin font18\" data-v-39642cf3>almost no overview of newsletter subscriptions</p> <p class=\"thin font18\" data-v-39642cf3>perfect overview of newsletter subscriptions</p> <p class=\"thin font18\" data-v-39642cf3>hard to unsubscribe</p> <p class=\"thin font18\" data-v-39642cf3>easy to unsubscribe (can be automatic)</p> <p class=\"thin font18\" data-v-39642cf3>subscribing to starting or small niche newsletters is questionable</p> <p class=\"thin font18\" data-v-39642cf3>subscribing to starting or small niche newsletters is a no-brainer for subscribers</p> <p class=\"thin font18\" data-v-39642cf3>there are 3rd party solutions but they are not so effective</p> <p class=\"thin font18\" data-v-39642cf3>no 3rd party solution</p> <p class=\"thin font18\" data-v-39642cf3>privacy problems (email trading)</p> <p class=\"thin font18\" data-v-39642cf3>secured privacy (no email trading)</p> <p class=\"thin font18\" data-v-39642cf3>there is no newsletter archive that is searchable</p> <p class=\"thin font18\" data-v-39642cf3>searchable and categorised newsletter archive with newsletter messages history</p> <p class=\"thin font18\" data-v-39642cf3>question: is this newsletter good? (missing social proof)</p> <p class=\"thin font18\" data-v-39642cf3>number of subscribers and messages + newsletter overal rating + subscribers reviews and comments</p></div></div></div>")])}
var TheProblemvue_type_template_id_39642cf3_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/creator/TheProblem.vue?vue&type=template&id=39642cf3&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/creator/TheProblem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TheProblemvue_type_script_lang_js_ = ({// props: ['newsletterList'],
});
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/creator/TheProblem.vue?vue&type=script&lang=js&
 /* harmony default export */ var creator_TheProblemvue_type_script_lang_js_ = (TheProblemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/creator/TheProblem.vue



function TheProblem_injectStyles (context) {
  
  var style0 = __webpack_require__(218)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var TheProblem_component = Object(componentNormalizer["a" /* default */])(
  creator_TheProblemvue_type_script_lang_js_,
  TheProblemvue_type_template_id_39642cf3_scoped_true_render,
  TheProblemvue_type_template_id_39642cf3_scoped_true_staticRenderFns,
  false,
  TheProblem_injectStyles,
  "39642cf3",
  "1362e059"
  
)

/* harmony default export */ var TheProblem = (TheProblem_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/creator/TheSolution.vue?vue&type=template&id=479ea8e1&scoped=true&
var TheSolutionvue_type_template_id_479ea8e1_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard\" data-v-479ea8e1><div class=\"grid gap-100\" data-v-479ea8e1><div class=\"grid justify-items-center\" data-v-479ea8e1><h2 class=\"big text-center mb40\" data-v-479ea8e1>See how it works</h2> <p class=\"font18 text-center maxw600\" data-v-479ea8e1>Unlike other platforms, ManyLetter does not own your content. Your content is your most valuable asset, and it should stay in your hands.</p></div> <div class=\"grid md-col-2 gap-100\" data-v-479ea8e1><div class=\"grid gap-20 align-content-start\" data-v-479ea8e1><img"+(_vm._ssrAttr("src",__webpack_require__(126)))+" alt=\"Creator dashboard screenshot\" data-v-479ea8e1></div> <div class=\"grid gap-40\" data-v-479ea8e1><div class=\"box grid auto col-2 gap-20\" data-v-479ea8e1><h2 data-v-479ea8e1>1.</h2> <div class=\"grid gap-10 align-content-start\" data-v-479ea8e1><h3 data-v-479ea8e1>Prepare your website</h3> <p class=\"thinn\" data-v-479ea8e1>Upload your content to your website or other online publishing platform.</p></div></div> <div class=\"box grid auto col-2 gap-20\" data-v-479ea8e1><h2 data-v-479ea8e1>2.</h2> <div class=\"grid gap-10 align-content-start\" data-v-479ea8e1><h3 data-v-479ea8e1>Prepare your message</h3> <p class=\"thinn\" data-v-479ea8e1>Grab the URL link of your content and prepare a short message in ManyLetter. Give it a proper title and a brief description.</p></div></div> <div class=\"box grid auto col-2 gap-20\" data-v-479ea8e1><h2 data-v-479ea8e1>3.</h2> <div class=\"grid gap-10 align-content-start\" data-v-479ea8e1><h3 data-v-479ea8e1>Send your newsletter</h3> <p class=\"thinn\" data-v-479ea8e1>ManyLetter will automatically compose and send an email with your combat-ready message for your subscribers.</p></div></div></div></div> <div class=\"grid md-col-2 gap-100\" data-v-479ea8e1><div class=\"grid gap-40\" data-v-479ea8e1><div class=\"box grid auto col-2 gap-20\" data-v-479ea8e1><h2 data-v-479ea8e1>4.</h2> <div class=\"grid gap-10 align-content-start\" data-v-479ea8e1><h3 data-v-479ea8e1>Expand your reach</h3> <p class=\"thinn\" data-v-479ea8e1>Your published newsletter and messages will show on the ManyLetter landing page and across the whole platform.</p></div></div> <div class=\"box grid auto col-2 gap-20\" data-v-479ea8e1><h2 data-v-479ea8e1>5.</h2> <div class=\"grid gap-10 align-content-start\" data-v-479ea8e1><h3 data-v-479ea8e1>Lower the barrier</h3> <p class=\"thinn\" data-v-479ea8e1>Subscribers often have many active subscriptions. Therefore they think twice before subscribing to another newsletter—lower the barrier for subscribers to join your newsletter with ManyLetter.</p></div></div> <div class=\"box grid auto col-2 gap-20\" data-v-479ea8e1><h2 data-v-479ea8e1>6.</h2> <div class=\"grid gap-10 align-content-start\" data-v-479ea8e1><h3 data-v-479ea8e1>Build a community</h3> <p class=\"thinn\" data-v-479ea8e1>Engage with your subscribers in comments. Build long-term relationships and community around your newsletter.</p></div></div></div> <div class=\"grid gap-20 align-content-start\" data-v-479ea8e1><img"+(_vm._ssrAttr("src",__webpack_require__(126)))+" alt=\"Creator dashboard screenshot\" data-v-479ea8e1></div></div></div></div>")])}
var TheSolutionvue_type_template_id_479ea8e1_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/creator/TheSolution.vue?vue&type=template&id=479ea8e1&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/creator/TheSolution.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TheSolutionvue_type_script_lang_js_ = ({// props: ['newsletterList'],
});
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/creator/TheSolution.vue?vue&type=script&lang=js&
 /* harmony default export */ var creator_TheSolutionvue_type_script_lang_js_ = (TheSolutionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/creator/TheSolution.vue



function TheSolution_injectStyles (context) {
  
  var style0 = __webpack_require__(220)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var TheSolution_component = Object(componentNormalizer["a" /* default */])(
  creator_TheSolutionvue_type_script_lang_js_,
  TheSolutionvue_type_template_id_479ea8e1_scoped_true_render,
  TheSolutionvue_type_template_id_479ea8e1_scoped_true_staticRenderFns,
  false,
  TheSolution_injectStyles,
  "479ea8e1",
  "21edc5a2"
  
)

/* harmony default export */ var TheSolution = (TheSolution_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/creator/ToolkitCreator.vue?vue&type=template&id=3e1ab4f7&scoped=true&
var ToolkitCreatorvue_type_template_id_3e1ab4f7_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard\" data-v-3e1ab4f7><div class=\"grid gap-60 justify-items-center\" data-v-3e1ab4f7><div class=\"grid justify-items-center\" data-v-3e1ab4f7><h2 class=\"big text-center\" data-v-3e1ab4f7>What is in?</h2></div> <div class=\"grid md-col-2 lg-col-3 gap-60\" data-v-3e1ab4f7><div class=\"box grid gap-20 align-content-start\" data-v-3e1ab4f7><h3 data-v-3e1ab4f7>Unlimited newsletters</h3> <p class=\"thin font18\" data-v-3e1ab4f7>Create as many newsletters under one account as you need.</p></div> <div class=\"box grid gap-20 align-content-start\" data-v-3e1ab4f7><h3 data-v-3e1ab4f7>Unlimited messages</h3> <p class=\"thin font18\" data-v-3e1ab4f7>Add unlimited number of messages under your newsletter.</p></div> <div class=\"box grid gap-20 align-content-start\" data-v-3e1ab4f7><h3 data-v-3e1ab4f7>Newsletter history</h3> <p class=\"thin font18\" data-v-3e1ab4f7>Subscribers whos open your newsletter profile will have access to messages you have created.</p></div> <div class=\"box grid gap-20 align-content-start\" data-v-3e1ab4f7><h3 data-v-3e1ab4f7>No fake emails</h3> <p class=\"thin font18\" data-v-3e1ab4f7>All subscribers are verified; thus, your subscriber list will be clean and relevant.</p></div> <div class=\"box grid gap-20 align-content-start\" data-v-3e1ab4f7><h3 data-v-3e1ab4f7>Target audience</h3> <p class=\"thin font18\" data-v-3e1ab4f7>Create a target audience and send different messages to it. </p></div> <div class=\"box grid gap-20 align-content-start\" data-v-3e1ab4f7><h3 data-v-3e1ab4f7>Stats</h3> <p class=\"thin font18\" data-v-3e1ab4f7>See how many subscribers do you have, how many of them are active, passive or unsubscribed.</p></div> <div class=\"box grid gap-20 align-content-start\" data-v-3e1ab4f7><h3 data-v-3e1ab4f7>GDPR compliant</h3> <p class=\"thin font18\" data-v-3e1ab4f7>Focus on your content. Don't worry about GDPR at all. We take care of it.</p></div> <div class=\"box grid gap-20 align-content-start\" data-v-3e1ab4f7><h3 data-v-3e1ab4f7>Rating system</h3> <p class=\"thin font18\" data-v-3e1ab4f7>Let your subscribers rate your newsletter and messages.</p></div> <div class=\"box grid gap-20 align-content-start\" data-v-3e1ab4f7><h3 data-v-3e1ab4f7>Comments</h3> <p class=\"thin font18\" data-v-3e1ab4f7>Engage with your subscribers in comments for each message.</p></div></div></div></div>")])}
var ToolkitCreatorvue_type_template_id_3e1ab4f7_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/creator/ToolkitCreator.vue?vue&type=template&id=3e1ab4f7&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/creator/ToolkitCreator.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/creator/ToolkitCreator.vue?vue&type=script&lang=js&
 /* harmony default export */ var creator_ToolkitCreatorvue_type_script_lang_js_ = (ToolkitCreatorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/creator/ToolkitCreator.vue



function ToolkitCreator_injectStyles (context) {
  
  var style0 = __webpack_require__(222)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var ToolkitCreator_component = Object(componentNormalizer["a" /* default */])(
  creator_ToolkitCreatorvue_type_script_lang_js_,
  ToolkitCreatorvue_type_template_id_3e1ab4f7_scoped_true_render,
  ToolkitCreatorvue_type_template_id_3e1ab4f7_scoped_true_staticRenderFns,
  false,
  ToolkitCreator_injectStyles,
  "3e1ab4f7",
  "93bb640e"
  
)

/* harmony default export */ var ToolkitCreator = (ToolkitCreator_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/creator/GetStarted.vue?vue&type=template&id=64c55a3a&scoped=true&
var GetStartedvue_type_template_id_64c55a3a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard grid gap-20 col-1 auto align-items-center justify-content-center\" data-v-64c55a3a>","</div>",[_vm._ssrNode("<div class=\"grid gap-10\" data-v-64c55a3a>","</div>",[_vm._ssrNode("<div class=\"text-center\" data-v-64c55a3a><h2 class=\"big\" data-v-64c55a3a>Get your newsletter now</h2> <p class=\"big\" data-v-64c55a3a>You are at the bottom of the page. Now is the perfect time to start your newsletter.</p></div> "),_vm._ssrNode("<div class=\"mt40 text-center\" data-v-64c55a3a>","</div>",[_c('nuxt-link',{staticClass:"button cta white big",attrs:{"to":"/sign-up","tag":"button"}},[_vm._v("Grow your newsletter for FREE")])],1)],2)])])}
var GetStartedvue_type_template_id_64c55a3a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/creator/GetStarted.vue?vue&type=template&id=64c55a3a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/creator/GetStarted.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
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
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/creator/GetStarted.vue?vue&type=script&lang=js&
 /* harmony default export */ var creator_GetStartedvue_type_script_lang_js_ = (GetStartedvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/creator/GetStarted.vue



function GetStarted_injectStyles (context) {
  
  var style0 = __webpack_require__(224)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var GetStarted_component = Object(componentNormalizer["a" /* default */])(
  creator_GetStartedvue_type_script_lang_js_,
  GetStartedvue_type_template_id_64c55a3a_scoped_true_render,
  GetStartedvue_type_template_id_64c55a3a_scoped_true_staticRenderFns,
  false,
  GetStarted_injectStyles,
  "64c55a3a",
  "19700594"
  
)

/* harmony default export */ var GetStarted = (GetStarted_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/pages/creator/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 // import Showcase from '@/components/page/creator/Showcase.vue'

 // import Pricing from '@/components/page/creator/Pricing.vue'
// import FAQ from '@/components/page/creator/FAQ.vue'


/* harmony default export */ var creatorvue_type_script_lang_js_ = ({
  layout: 'default-page',
  components: {
    Header: Header["a" /* default */],
    Intro: Intro,
    TheProblem: TheProblem,
    TheSolution: TheSolution,
    ToolkitCreator: ToolkitCreator,
    GetStarted: GetStarted
  }
});
// CONCATENATED MODULE: ./apps/manyletter.com/pages/creator/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_creatorvue_type_script_lang_js_ = (creatorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/pages/creator/index.vue



function creator_injectStyles (context) {
  
  
}

/* normalize component */

var creator_component = Object(componentNormalizer["a" /* default */])(
  pages_creatorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  creator_injectStyles,
  "265dc0b0",
  "5cbd8e46"
  
)

/* harmony default export */ var creator = __webpack_exports__["default"] = (creator_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map