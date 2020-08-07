exports.ids = [22];
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

/***/ 118:
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

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/newsletter-cover.6d8a1d0.jpg";

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/newsletter-intro-4.523c917.png";

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/messages.e492529.png";

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(343);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("01d0296b", content, true, context)
};

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(346);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("c87d2a12", content, true, context)
};

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(348);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("2e9a4059", content, true, context)
};

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(350);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("6f4dba91", content, true, context)
};

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(354);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("40adc9aa", content, true, context)
};

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(356);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("bea0db30", content, true, context)
};

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(358);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("1bfda517", content, true, context)
};

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_aecdd80c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_aecdd80c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_aecdd80c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_aecdd80c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_aecdd80c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_aecdd80c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container-narrow[data-v-aecdd80c]{padding:60px}img[data-v-aecdd80c]{box-shadow:0 .25rem .75rem rgba(0,0,0,.15);max-width:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hero-image.01afd7f.png";

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroImg_vue_vue_type_style_index_0_id_2c308268_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(196);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroImg_vue_vue_type_style_index_0_id_2c308268_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroImg_vue_vue_type_style_index_0_id_2c308268_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroImg_vue_vue_type_style_index_0_id_2c308268_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroImg_vue_vue_type_style_index_0_id_2c308268_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroImg_vue_vue_type_style_index_0_id_2c308268_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".component[data-v-2c308268]{background-color:rgba(57,172,55,.05098)}.container-narrow[data-v-2c308268]{padding:0 60px}img[data-v-2c308268]{box-shadow:0 .25rem .75rem rgba(0,0,0,.15);max-width:100%;position:relative;top:-40px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialProof_vue_vue_type_style_index_0_id_20d9d409_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(197);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialProof_vue_vue_type_style_index_0_id_20d9d409_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialProof_vue_vue_type_style_index_0_id_20d9d409_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialProof_vue_vue_type_style_index_0_id_20d9d409_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialProof_vue_vue_type_style_index_0_id_20d9d409_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialProof_vue_vue_type_style_index_0_id_20d9d409_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(118);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(119);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".container-standard[data-v-20d9d409]{max-width:1200px}.box[data-v-20d9d409]{padding:20px;background-color:#fff;border-radius:8px;transition:all .6s cubic-bezier(.165,.84,.44,1);border:1px solid #eee}.box[data-v-20d9d409]:hover{transform:scale(1.02)}.newsletter>.cover[data-v-20d9d409]{width:100%;height:130px;background-color:#fff;border-bottom:1px solid #f5f5f5;border-radius:8px 8px 0 0;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:cover;background-position:50%}.newsletter .header[data-v-20d9d409]{position:relative}.newsletter .header>.avatar>div[data-v-20d9d409]{background-color:#eee;background-size:cover;background-position:50%;border-radius:100px;height:60px;width:60px;padding:7px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CTA1_vue_vue_type_style_index_0_id_15aa79f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(198);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CTA1_vue_vue_type_style_index_0_id_15aa79f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CTA1_vue_vue_type_style_index_0_id_15aa79f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CTA1_vue_vue_type_style_index_0_id_15aa79f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CTA1_vue_vue_type_style_index_0_id_15aa79f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CTA1_vue_vue_type_style_index_0_id_15aa79f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".component[data-v-15aa79f4]{background-color:#39ac37;color:#fff;padding:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/screen-create-newsletter.64ec5d3.png";

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/screen-time.3c55ed3.png";

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Features_vue_vue_type_style_index_0_id_4960a1ad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(199);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Features_vue_vue_type_style_index_0_id_4960a1ad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Features_vue_vue_type_style_index_0_id_4960a1ad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Features_vue_vue_type_style_index_0_id_4960a1ad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Features_vue_vue_type_style_index_0_id_4960a1ad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Features_vue_vue_type_style_index_0_id_4960a1ad_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "h2[data-v-4960a1ad]{margin-bottom:20px}h2[data-v-4960a1ad],h3[data-v-4960a1ad]{margin-top:20px}p[data-v-4960a1ad]{color:#6b7177}img[data-v-4960a1ad]{box-shadow:0 .25rem .75rem rgba(0,0,0,.15)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_vue_vue_type_style_index_0_id_3b86e740_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(200);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_vue_vue_type_style_index_0_id_3b86e740_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_vue_vue_type_style_index_0_id_3b86e740_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_vue_vue_type_style_index_0_id_3b86e740_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_vue_vue_type_style_index_0_id_3b86e740_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_vue_vue_type_style_index_0_id_3b86e740_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".component[data-v-3b86e740]{background-color:#fbf7ed}h2[data-v-3b86e740]{margin-bottom:20px}h2[data-v-3b86e740],h3[data-v-3b86e740]{margin-top:20px}p[data-v-3b86e740]{color:#6b7177}img[data-v-3b86e740]{box-shadow:0 .25rem .75rem rgba(0,0,0,.15);max-width:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CTA2_vue_vue_type_style_index_0_id_a775d6f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(201);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CTA2_vue_vue_type_style_index_0_id_a775d6f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CTA2_vue_vue_type_style_index_0_id_a775d6f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CTA2_vue_vue_type_style_index_0_id_a775d6f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CTA2_vue_vue_type_style_index_0_id_a775d6f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CTA2_vue_vue_type_style_index_0_id_a775d6f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".component[data-v-a775d6f0]{background-color:#39ac37;color:#fff;padding:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/pages/index.vue?vue&type=template&id=d0c86c78&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_c('Header'),_vm._ssrNode(" "),_c('Hero'),_vm._ssrNode(" "),_c('HeroImg'),_vm._ssrNode(" "),_c('SocialProof',{attrs:{"newsletterList":_vm.newsletterList,"newslettersCount":_vm.newslettersCount.data}}),_vm._ssrNode(" "),_c('CTA1'),_vm._ssrNode(" "),_c('Features'),_vm._ssrNode(" "),_c('Tools'),_vm._ssrNode(" "),_c('CTA2')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/pages/index.vue?vue&type=template&id=d0c86c78&scoped=true&

// EXTERNAL MODULE: ./apps/manyletter.com/components/page/_common/Header.vue + 14 modules
var Header = __webpack_require__(112);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/index_C/Hero.vue?vue&type=template&id=aecdd80c&scoped=true&
var Herovue_type_template_id_aecdd80c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-narrow mt80\" data-v-aecdd80c><div class=\"grid gap-20 justify-items-center\" data-v-aecdd80c><h1 class=\"text-center\" data-v-aecdd80c>Start your dream newsletter for less than the price of a book</h1> <h3 class=\"text-center maxw500\" data-v-aecdd80c>ManyLetter gives you everything you need for just $9 USD per month</h3></div></div>")])}
var Herovue_type_template_id_aecdd80c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_C/Hero.vue?vue&type=template&id=aecdd80c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/index_C/Hero.vue?vue&type=script&lang=js&
//
//
//
//
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
  props: ['usersCount', 'newslettersCount']
});
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_C/Hero.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_C_Herovue_type_script_lang_js_ = (Herovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_C/Hero.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(342)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  index_C_Herovue_type_script_lang_js_,
  Herovue_type_template_id_aecdd80c_scoped_true_render,
  Herovue_type_template_id_aecdd80c_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "aecdd80c",
  "9c9b0a0a"
  
)

/* harmony default export */ var Hero = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/index_C/HeroImg.vue?vue&type=template&id=2c308268&scoped=true&
var HeroImgvue_type_template_id_2c308268_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-narrow\" data-v-2c308268><div data-v-2c308268><img"+(_vm._ssrAttr("src",__webpack_require__(344)))+" alt=\"Creator dashboard screenshot\" data-v-2c308268></div></div>")])}
var HeroImgvue_type_template_id_2c308268_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_C/HeroImg.vue?vue&type=template&id=2c308268&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/index_C/HeroImg.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HeroImgvue_type_script_lang_js_ = ({
  props: ['usersCount', 'newslettersCount']
});
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_C/HeroImg.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_C_HeroImgvue_type_script_lang_js_ = (HeroImgvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_C/HeroImg.vue



function HeroImg_injectStyles (context) {
  
  var style0 = __webpack_require__(345)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var HeroImg_component = Object(componentNormalizer["a" /* default */])(
  index_C_HeroImgvue_type_script_lang_js_,
  HeroImgvue_type_template_id_2c308268_scoped_true_render,
  HeroImgvue_type_template_id_2c308268_scoped_true_staticRenderFns,
  false,
  HeroImg_injectStyles,
  "2c308268",
  "55058178"
  
)

/* harmony default export */ var HeroImg = (HeroImg_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/index_C/SocialProof.vue?vue&type=template&id=20d9d409&scoped=true&
var SocialProofvue_type_template_id_20d9d409_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard mt60\" data-v-20d9d409>","</div>",[_vm._ssrNode("<div class=\"grid gap-60\" data-v-20d9d409>","</div>",[_vm._ssrNode("<h2 class=\"text-center h3\" data-v-20d9d409>300+ newsletters are listed in ManyLetter, including the latest one </h2> "),_vm._ssrNode("<div class=\"grid row-gap-30 col-gap-30 md-col-2 lg-col-3\" data-v-20d9d409>","</div>",_vm._l((_vm.newsletterList.data),function(item){return _vm._ssrNode("<div class=\"grid box\" data-v-20d9d409>","</div>",[_c('nuxt-link',{staticClass:"grid align-content-space-between pointer",attrs:{"to":"/admin/subscriber/subscriptions/newsletters/detail/" + item.id,"tag":"div"}},[_c('div',{staticClass:"grid newsletter col-2 gap-20 auto justify-items-start justify-content-start"},[_c('div',{staticClass:"header grid gap-20"},[_c('div',{staticClass:"avatar"},[(item.avatar !== null)?_c('div',{style:('background-image: url(https://storage.manyletter.com/ymello_filestorage/img/newsletter_avatar/' + item.avatar + ')')}):_c('div',{staticClass:"font20 strong grid"},[_c('span',{staticClass:"align-self-center justify-self-center uppercase"},[_vm._v(_vm._s(item.title.charAt(0)))])])])]),_vm._v(" "),_c('div',{staticClass:"body grid gap-20 auto align-items-space-between justify-items-start justify-content-start"},[_c('div',{staticClass:"grid gap-20"},[_c('div',[_c('h4',[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('p',{staticClass:"font14"},[_vm._v("created by "),_c('span',{staticClass:"strong"},[_vm._v(_vm._s(item.creator_name))])])]),_vm._v(" "),_c('p',{staticClass:"thin"},[_vm._v(_vm._s(item.intro.slice(0, 70))+"...")])])])])])],1)}),0)],2)])])}
var SocialProofvue_type_template_id_20d9d409_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_C/SocialProof.vue?vue&type=template&id=20d9d409&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/index_C/SocialProof.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SocialProofvue_type_script_lang_js_ = ({
  props: ['newsletterList', 'newslettersCount']
});
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_C/SocialProof.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_C_SocialProofvue_type_script_lang_js_ = (SocialProofvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_C/SocialProof.vue



function SocialProof_injectStyles (context) {
  
  var style0 = __webpack_require__(347)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SocialProof_component = Object(componentNormalizer["a" /* default */])(
  index_C_SocialProofvue_type_script_lang_js_,
  SocialProofvue_type_template_id_20d9d409_scoped_true_render,
  SocialProofvue_type_template_id_20d9d409_scoped_true_staticRenderFns,
  false,
  SocialProof_injectStyles,
  "20d9d409",
  "86b4e134"
  
)

/* harmony default export */ var SocialProof = (SocialProof_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/index_C/CTA1.vue?vue&type=template&id=15aa79f4&scoped=true&
var CTA1vue_type_template_id_15aa79f4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-narrow mt60\" data-v-15aa79f4>","</div>",[_vm._ssrNode("<div class=\"grid gap-20 justify-items-center\" data-v-15aa79f4>","</div>",[_vm._ssrNode("<h2 class=\"h1 text-center\" data-v-15aa79f4>Start your newsletter today</h2> <p class=\"big text-center maxw500\" data-v-15aa79f4>Try ManyLetter for free, and explore all the tools and services you need to start, run, and grow your newsletter.</p> "),_c('nuxt-link',{staticClass:"button cta white big",attrs:{"to":"/sign-up","tag":"button"}},[_vm._v("Get started")])],2)])])}
var CTA1vue_type_template_id_15aa79f4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_C/CTA1.vue?vue&type=template&id=15aa79f4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/index_C/CTA1.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CTA1vue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_C/CTA1.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_C_CTA1vue_type_script_lang_js_ = (CTA1vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_C/CTA1.vue



function CTA1_injectStyles (context) {
  
  var style0 = __webpack_require__(349)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var CTA1_component = Object(componentNormalizer["a" /* default */])(
  index_C_CTA1vue_type_script_lang_js_,
  CTA1vue_type_template_id_15aa79f4_scoped_true_render,
  CTA1vue_type_template_id_15aa79f4_scoped_true_staticRenderFns,
  false,
  CTA1_injectStyles,
  "15aa79f4",
  "6008f8bc"
  
)

/* harmony default export */ var CTA1 = (CTA1_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/index_C/Features.vue?vue&type=template&id=4960a1ad&scoped=true&
var Featuresvue_type_template_id_4960a1ad_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-narrow mt60\" data-v-4960a1ad><div class=\"grid gap-100\" data-v-4960a1ad><div class=\"grid gap-100 md-col-2\" data-v-4960a1ad><div class=\"grid gap-20 align-content-center\" data-v-4960a1ad><h2 data-v-4960a1ad>Copy, paste and start sending</h2> <p class=\"big\" data-v-4960a1ad>Turn any website into a valuable newsletter in a seconds with ManyLetter. Whether you’re on WordPress, Squarespace, Tumblr, or anywhere else, with just a few clicks you can turn your website content into a short newsletter message.</p></div> <div class=\"grid\" data-v-4960a1ad><img"+(_vm._ssrAttr("src",__webpack_require__(351)))+" alt=\"Creator dashboard screenshot\" class=\"justify-self-center maxw250\" data-v-4960a1ad></div></div> <div class=\"grid gap-100 md-col-2 \" data-v-4960a1ad><div class=\"grid align-content-center\" data-v-4960a1ad><img"+(_vm._ssrAttr("src",__webpack_require__(352)))+" alt=\"Creator dashboard screenshot\" class=\"justify-self-center maxw250\" data-v-4960a1ad></div> <div class=\"grid gap-15 align-content-center\" data-v-4960a1ad><h2 data-v-4960a1ad>Send with confidence</h2> <h3 class=\"h4\" data-v-4960a1ad>Get visible, increase open-rates</h3> <p data-v-4960a1ad>Whenever you send a message to your subscriber, ManyLetter ensures that it will show at the top of the messages list.</p> <h3 class=\"h4\" data-v-4960a1ad>Choose your recipients</h3> <p data-v-4960a1ad>Import your subscriber list to ManyLetter then segment emails to ensure the right message gets to the right person.</p> <h3 class=\"h4\" data-v-4960a1ad>Always just in time</h3> <p data-v-4960a1ad>Reduce guesswork and send your message automatically at a time when your subscribers expect it.</p></div></div> <div class=\"grid gap-100 md-col-2\" data-v-4960a1ad><div class=\"grid gap-20 align-content-center\" data-v-4960a1ad><h2 data-v-4960a1ad>Analyze and evolve</h2> <h3 class=\"h4\" data-v-4960a1ad>Run your entire newsletter from ManyLetter</h3> <p data-v-4960a1ad>Send and track messages from the same place you manage your newsletter content, subscriber list, and subscriptions.</p> <h3 class=\"h4\" data-v-4960a1ad>Understand your content performance</h3> <p data-v-4960a1ad>Own your own data and get actionable reports from your dashboard to view open rates, Clickthrough rates, ratings, comments, and more.</p> <h3 class=\"h4\" data-v-4960a1ad>Improve your efforts</h3> <p data-v-4960a1ad>With each content releash, try new things to refine your approach over time.</p></div> <div class=\"grid align-content-center\" data-v-4960a1ad><img"+(_vm._ssrAttr("src",__webpack_require__(126)))+" alt=\"Creator dashboard screenshot\" class=\"justify-self-center\" data-v-4960a1ad></div></div> <div class=\"grid gap-100 md-col-2\" data-v-4960a1ad><div class=\"grid align-content-center\" data-v-4960a1ad><img"+(_vm._ssrAttr("src",__webpack_require__(125)))+" alt=\"Creator dashboard screenshot\" class=\"justify-self-center\" data-v-4960a1ad></div> <div class=\"grid gap-20 align-content-center\" data-v-4960a1ad><h2 data-v-4960a1ad>Promote your newsletter</h2> <p class=\"big\" data-v-4960a1ad>Add your newsletter to ManyLetter so the right people see your newsletter—no experience needed.</p></div></div></div></div>")])}
var Featuresvue_type_template_id_4960a1ad_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_C/Features.vue?vue&type=template&id=4960a1ad&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/index_C/Features.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Featuresvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_C/Features.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_C_Featuresvue_type_script_lang_js_ = (Featuresvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_C/Features.vue



function Features_injectStyles (context) {
  
  var style0 = __webpack_require__(353)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Features_component = Object(componentNormalizer["a" /* default */])(
  index_C_Featuresvue_type_script_lang_js_,
  Featuresvue_type_template_id_4960a1ad_scoped_true_render,
  Featuresvue_type_template_id_4960a1ad_scoped_true_staticRenderFns,
  false,
  Features_injectStyles,
  "4960a1ad",
  "679c4d84"
  
)

/* harmony default export */ var Features = (Features_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/index_C/Tools.vue?vue&type=template&id=3b86e740&scoped=true&
var Toolsvue_type_template_id_3b86e740_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard pt60 pb60 mt60 mb0\" data-v-3b86e740><div class=\"grid gap-40\" data-v-3b86e740><div data-v-3b86e740><h2 class=\"text-center\" data-v-3b86e740>Tools to take your newsletter further</h2></div> <div class=\"grid md-col-2 lg-col-4 align-items-start gap-40\" data-v-3b86e740><div class=\"grid gap-20 align-content-center\" data-v-3b86e740><h3 class=\"h4\" data-v-3b86e740>Customer success support</h3> <p data-v-3b86e740>Get the help you need, day or night, with 24/7 support.</p></div> <div class=\"grid gap-20 align-content-center\" data-v-3b86e740><h3 class=\"h4\" data-v-3b86e740>Website</h3> <p data-v-3b86e740>Host your content from ManyLetter—no technical knowledge required, get online in minutes.</p></div> <div class=\"grid gap-20 align-content-center\" data-v-3b86e740><h3 class=\"h4\" data-v-3b86e740>Templates</h3> <p data-v-3b86e740>Choose from various ready-made templates, you’ll look like an expert right from the start.</p></div> <div class=\"grid gap-20 align-content-center\" data-v-3b86e740><h3 class=\"h4\" data-v-3b86e740>Custom domain</h3> <p data-v-3b86e740>Boost your brand, attach your own domain.</p></div></div></div></div>")])}
var Toolsvue_type_template_id_3b86e740_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_C/Tools.vue?vue&type=template&id=3b86e740&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/index_C/Tools.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Toolsvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_C/Tools.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_C_Toolsvue_type_script_lang_js_ = (Toolsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_C/Tools.vue



function Tools_injectStyles (context) {
  
  var style0 = __webpack_require__(355)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Tools_component = Object(componentNormalizer["a" /* default */])(
  index_C_Toolsvue_type_script_lang_js_,
  Toolsvue_type_template_id_3b86e740_scoped_true_render,
  Toolsvue_type_template_id_3b86e740_scoped_true_staticRenderFns,
  false,
  Tools_injectStyles,
  "3b86e740",
  "330f82ac"
  
)

/* harmony default export */ var Tools = (Tools_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/index_C/CTA2.vue?vue&type=template&id=a775d6f0&scoped=true&
var CTA2vue_type_template_id_a775d6f0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-narrow mt60\" data-v-a775d6f0>","</div>",[_vm._ssrNode("<div class=\"grid gap-20 justify-items-center\" data-v-a775d6f0>","</div>",[_vm._ssrNode("<h2 class=\"h1 text-center\" data-v-a775d6f0>All the power of ManyLetter</h2> <p class=\"big text-center maxw500\" data-v-a775d6f0>ManyLetter gives you everything you need to start and grow your newsletter</p> "),_c('nuxt-link',{staticClass:"button cta white big",attrs:{"to":"/sign-up","tag":"button"}},[_vm._v("Get started")])],2)])])}
var CTA2vue_type_template_id_a775d6f0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_C/CTA2.vue?vue&type=template&id=a775d6f0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/index_C/CTA2.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CTA2vue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_C/CTA2.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_C_CTA2vue_type_script_lang_js_ = (CTA2vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_C/CTA2.vue



function CTA2_injectStyles (context) {
  
  var style0 = __webpack_require__(357)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var CTA2_component = Object(componentNormalizer["a" /* default */])(
  index_C_CTA2vue_type_script_lang_js_,
  CTA2vue_type_template_id_a775d6f0_scoped_true_render,
  CTA2vue_type_template_id_a775d6f0_scoped_true_staticRenderFns,
  false,
  CTA2_injectStyles,
  "a775d6f0",
  "5fecc9ba"
  
)

/* harmony default export */ var CTA2 = (CTA2_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var pagesvue_type_script_lang_js_ = ({
  layout: 'default-page',
  components: {
    Header: Header["a" /* default */],
    Hero: Hero,
    HeroImg: HeroImg,
    SocialProof: SocialProof,
    CTA1: CTA1,
    Features: Features,
    Tools: Tools,
    CTA2: CTA2
  },

  data() {
    return {
      referrer: this.$route.query.r || ''
    };
  },

  async asyncData({
    $axios,
    params
  }) {
    console.log('asyncData executed');
    const [newsletterList, newslettersCount, usersCount] = await Promise.all([// $axios.$get('/api/maylday/user'),
    $axios.$get('/api/maylday/open/newsletters/latest'), $axios.$get('/api/maylday/open/newsletters/count'), $axios.$get('/api/maylday/open/users/count')]);
    return {
      newsletterList,
      newslettersCount,
      usersCount
    };
  },

  created() {
    // this.$store.dispatch('setPosts', this.newsletterList)
    // console.log(this.$store.getters.loadedPosts)
    // client
    if (this.referrer !== '') {
      if (this.$cookies.get('manyletter.referrer') === undefined) {
        this.$cookies.set('manyletter.referrer', this.referrer, {
          path: '/',
          maxAge: 60 * 60 * 24 * 30 * 3
        });
      }
    }
  }

});
// CONCATENATED MODULE: ./apps/manyletter.com/pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var manyletter_com_pagesvue_type_script_lang_js_ = (pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/pages/index.vue



function pages_injectStyles (context) {
  
  
}

/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  manyletter_com_pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  pages_injectStyles,
  "d0c86c78",
  "f1940c14"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map