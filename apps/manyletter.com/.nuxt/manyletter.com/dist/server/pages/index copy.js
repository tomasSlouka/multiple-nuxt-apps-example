exports.ids = [23];
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

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(117);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("72a47fe8", content, true, context)
};

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

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GetStarted_vue_vue_type_style_index_0_id_39a658c3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(111);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GetStarted_vue_vue_type_style_index_0_id_39a658c3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GetStarted_vue_vue_type_style_index_0_id_39a658c3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GetStarted_vue_vue_type_style_index_0_id_39a658c3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GetStarted_vue_vue_type_style_index_0_id_39a658c3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GetStarted_vue_vue_type_style_index_0_id_39a658c3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".component[data-v-39a658c3]{background-color:#39ac37;color:#fff;padding:10px}", ""]);
// Exports
module.exports = exports;


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

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/index_B/GetStarted.vue?vue&type=template&id=39a658c3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard grid gap-20 col-1 auto align-items-center justify-content-center\" data-v-39a658c3>","</div>",[_vm._ssrNode("<div class=\"grid gap-10\" data-v-39a658c3>","</div>",[_vm._ssrNode("<div class=\"text-center\" data-v-39a658c3><h2 class=\"big\" data-v-39a658c3>Get started. It's free.</h2> <p class=\"big\" data-v-39a658c3>You are at the bottom of the page. Now is the perfect time to get your account.</p></div> "),_vm._ssrNode("<div class=\"mt40 text-center\" data-v-39a658c3>","</div>",[_c('nuxt-link',{staticClass:"button cta white big",attrs:{"to":"/sign-up","tag":"button"}},[_vm._v("Get your account")])],1)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_B/GetStarted.vue?vue&type=template&id=39a658c3&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/index_B/GetStarted.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
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
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_B/GetStarted.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_B_GetStartedvue_type_script_lang_js_ = (GetStartedvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_B/GetStarted.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(116)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  index_B_GetStartedvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "39a658c3",
  "194373a6"
  
)

/* harmony default export */ var GetStarted = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/manyletter_founder.94a98f8.png";

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/newsletter-intro-4.523c917.png";

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(228);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("16f0889a", content, true, context)
};

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(231);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("2a0aaccf", content, true, context)
};

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(233);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("268f6e46", content, true, context)
};

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(235);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("254e0f5b", content, true, context)
};

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(237);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("146d4e03", content, true, context)
};

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(239);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("068bc49e", content, true, context)
};

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/newsletter-intro-3.7fc7df5.png";

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dashboard-screenshot.704150d.png";

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_d8fbf7e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_d8fbf7e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_d8fbf7e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_d8fbf7e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_d8fbf7e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Intro_vue_vue_type_style_index_0_id_d8fbf7e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container-standard[data-v-d8fbf7e2]{margin-bottom:160px;max-width:1200px}img[data-v-d8fbf7e2]{box-shadow:0 .25rem .75rem rgba(0,0,0,.15)}.width[data-v-d8fbf7e2]{max-width:320px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/happy.daca061.jpg";

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Showcase_vue_vue_type_style_index_0_id_f4934858_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(138);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Showcase_vue_vue_type_style_index_0_id_f4934858_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Showcase_vue_vue_type_style_index_0_id_f4934858_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Showcase_vue_vue_type_style_index_0_id_f4934858_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Showcase_vue_vue_type_style_index_0_id_f4934858_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Showcase_vue_vue_type_style_index_0_id_f4934858_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container-narrow[data-v-f4934858]{margin-top:100px}.play[data-v-f4934858]{position:absolute;border:0;color:#fff;background-color:#39ac37;color:#39ac37;background-color:#fff;border-radius:40px;width:40px;height:40px;line-height:40px;padding:40px;font-size:40px;box-shadow:0 .25rem .75rem rgba(0,0,0,.15);transition:all .6s cubic-bezier(.165,.84,.44,1)}.relative:hover>.play[data-v-f4934858]{transform:scale(1.25)}img[data-v-f4934858]{max-width:100%;box-shadow:0 5px 10px hsla(0,0%,93.3%,.6);border-radius:8px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LearnMoreSubscriber_vue_vue_type_style_index_0_id_5b39e79e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LearnMoreSubscriber_vue_vue_type_style_index_0_id_5b39e79e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LearnMoreSubscriber_vue_vue_type_style_index_0_id_5b39e79e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LearnMoreSubscriber_vue_vue_type_style_index_0_id_5b39e79e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LearnMoreSubscriber_vue_vue_type_style_index_0_id_5b39e79e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LearnMoreSubscriber_vue_vue_type_style_index_0_id_5b39e79e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container-standard[data-v-5b39e79e]{max-width:1200px}img[data-v-5b39e79e]{box-shadow:0 .25rem .75rem rgba(0,0,0,.15);max-width:100%;position:relative;top:-40px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LearnMoreCreator_vue_vue_type_style_index_0_id_5c0e68f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(140);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LearnMoreCreator_vue_vue_type_style_index_0_id_5c0e68f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LearnMoreCreator_vue_vue_type_style_index_0_id_5c0e68f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LearnMoreCreator_vue_vue_type_style_index_0_id_5c0e68f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LearnMoreCreator_vue_vue_type_style_index_0_id_5c0e68f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LearnMoreCreator_vue_vue_type_style_index_0_id_5c0e68f0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "img[data-v-5c0e68f0]{box-shadow:0 .25rem .75rem rgba(0,0,0,.15);max-width:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reviews_vue_vue_type_style_index_0_id_45019b5a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(141);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reviews_vue_vue_type_style_index_0_id_45019b5a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reviews_vue_vue_type_style_index_0_id_45019b5a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reviews_vue_vue_type_style_index_0_id_45019b5a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reviews_vue_vue_type_style_index_0_id_45019b5a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reviews_vue_vue_type_style_index_0_id_45019b5a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".component[data-v-45019b5a]{padding:10px}.container-narrow[data-v-45019b5a]{max-width:100%;margin-top:40px;margin-bottom:40px}img[data-v-45019b5a]{border-radius:100px;border:6px solid #fff;width:60px}.box[data-v-45019b5a]{background-color:rgba(57,172,55,.05098);padding:40px;border-radius:8px;transition:all .6s cubic-bezier(.165,.84,.44,1);max-width:540px}p.social>a[data-v-45019b5a]{background:#fff;border-radius:20px;padding:5px 20px;display:grid;justify-items:center;align-items:center;box-shadow:0 1px 6px 0 rgba(14,30,37,.12);color:#000;cursor:pointer;font-size:16px;text-decoration:none}p.social.facebook>a[data-v-45019b5a]:hover{background:#3b5998;color:#fff}p.social.twitter>a[data-v-45019b5a]:hover{background:#00acee;color:#fff}p.social.instagram>a[data-v-45019b5a]:hover{background:#e1306c;color:#fff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletters_vue_vue_type_style_index_0_id_16ef41d3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(142);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletters_vue_vue_type_style_index_0_id_16ef41d3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletters_vue_vue_type_style_index_0_id_16ef41d3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletters_vue_vue_type_style_index_0_id_16ef41d3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletters_vue_vue_type_style_index_0_id_16ef41d3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletters_vue_vue_type_style_index_0_id_16ef41d3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(118);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(119);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".component[data-v-16ef41d3]{background-color:rgba(57,172,55,.05098);padding-top:80px;padding-bottom:80px;margin-top:40px}.container-standard[data-v-16ef41d3]{margin-top:0;margin-bottom:0;max-width:1200px}.box[data-v-16ef41d3]{padding:0;background-color:#fff;box-shadow:0 1px 6px 0 rgba(14,30,37,.12);border-radius:8px;transition:all .6s cubic-bezier(.165,.84,.44,1)}.box[data-v-16ef41d3]:hover{transform:scale(1.02)}.newsletter>.cover[data-v-16ef41d3]{width:100%;height:130px;background-color:#fff;border-bottom:1px solid #f5f5f5;border-radius:8px 8px 0 0;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:cover;background-position:50%}.newsletter .header[data-v-16ef41d3]{position:relative;padding:20px 30px 0}.newsletter .header>.avatar>div[data-v-16ef41d3]{background-color:#eee;background-size:cover;background-position:50%;border-radius:100px;height:60px;width:60px;padding:7px}.newsletter>.body[data-v-16ef41d3]{padding:20px 30px 30px}.data-wrapper[data-v-16ef41d3]{padding:0 30px 30px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/pages/index copy.vue?vue&type=template&id=e2ce06f4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_c('Header'),_vm._ssrNode(" "),_c('LearnMoreSubscriber',{attrs:{"usersCount":_vm.usersCount.data,"newslettersCount":_vm.newslettersCount.data}}),_vm._ssrNode(" "),_c('Newsletters',{attrs:{"newsletterList":_vm.newsletterList}}),_vm._ssrNode(" "),_c('GetStarted')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/pages/index copy.vue?vue&type=template&id=e2ce06f4&scoped=true&

// EXTERNAL MODULE: ./apps/manyletter.com/components/page/_common/Header.vue + 14 modules
var Header = __webpack_require__(112);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/index_B/Intro.vue?vue&type=template&id=d8fbf7e2&scoped=true&
var Introvue_type_template_id_d8fbf7e2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard mt80 mb80\" data-v-d8fbf7e2>","</div>",[_vm._ssrNode("<div class=\"grid gap-60 md-col-2 align-items-center\" data-v-d8fbf7e2>","</div>",[_vm._ssrNode("<div class=\"grid gap-20\" data-v-d8fbf7e2>","</div>",[_vm._ssrNode("<div data-v-d8fbf7e2><h1 data-v-d8fbf7e2>Sign up for newsletters without fear</h1> <h2 data-v-d8fbf7e2>Get subscriptions <br data-v-d8fbf7e2>under your control</h2></div> "),_vm._ssrNode("<div class=\"grid gap-20 box align-content-start\" data-v-d8fbf7e2>","</div>",[_vm._ssrNode("<div data-v-d8fbf7e2><p class=\"width font18 thin\" data-v-d8fbf7e2><span class=\"strong\" data-v-d8fbf7e2>Launching in June,</span> but you can enter your email address below to receive notification and become one of the first members.</p></div> "),_vm._ssrNode("<div class=\"mt20 grid gap-10 justify-items-start\" data-v-d8fbf7e2>","</div>",[_c('nuxt-link',{staticClass:"button cta big",attrs:{"to":"/sign-up"}},[_vm._v("Stay informed")]),_vm._ssrNode(" <p class=\"thin font14\" data-v-d8fbf7e2>Join <span class=\"strong\" data-v-d8fbf7e2>"+_vm._ssrEscape(_vm._s(_vm.usersCount.user_count)+" users")+"</span> waiting for launch.</p>")],2),_vm._ssrNode(" <div data-v-d8fbf7e2><p class=\"small gray thin mt20\" data-v-d8fbf7e2>↓ scroll down to discover more ↓</p></div>")],2)],2),_vm._ssrNode(" <div data-v-d8fbf7e2><img"+(_vm._ssrAttr("src",__webpack_require__(226)))+" alt=\"Creator dashboard screenshot\" data-v-d8fbf7e2></div>")],2)])])}
var Introvue_type_template_id_d8fbf7e2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_B/Intro.vue?vue&type=template&id=d8fbf7e2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/index_B/Intro.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Introvue_type_script_lang_js_ = ({
  props: ['usersCount']
});
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_B/Intro.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_B_Introvue_type_script_lang_js_ = (Introvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_B/Intro.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(227)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  index_B_Introvue_type_script_lang_js_,
  Introvue_type_template_id_d8fbf7e2_scoped_true_render,
  Introvue_type_template_id_d8fbf7e2_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "d8fbf7e2",
  "c575100c"
  
)

/* harmony default export */ var Intro = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/index_B/Showcase.vue?vue&type=template&id=f4934858&scoped=true&
var Showcasevue_type_template_id_f4934858_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-narrow\" data-v-f4934858>","</div>",[_vm._ssrNode("<div class=\"grid col-1 auto justify-content-center relative\" data-v-f4934858>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(229)))+" alt=\"ManyLetter make you smile\" data-v-f4934858> "),_vm._ssrNode("<div class=\"play justify-self-center align-self-center grid justify-content-center align-content-center\" data-v-f4934858>","</div>",[_c('ion-icon',{staticClass:"ml10",attrs:{"name":"play"}})],1)],2)])])}
var Showcasevue_type_template_id_f4934858_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_B/Showcase.vue?vue&type=template&id=f4934858&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/index_B/Showcase.vue?vue&type=script&lang=js&
//
//
//
//
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
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_B/Showcase.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_B_Showcasevue_type_script_lang_js_ = (Showcasevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_B/Showcase.vue



function Showcase_injectStyles (context) {
  
  var style0 = __webpack_require__(230)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Showcase_component = Object(componentNormalizer["a" /* default */])(
  index_B_Showcasevue_type_script_lang_js_,
  Showcasevue_type_template_id_f4934858_scoped_true_render,
  Showcasevue_type_template_id_f4934858_scoped_true_staticRenderFns,
  false,
  Showcase_injectStyles,
  "f4934858",
  "6bd8830f"
  
)

/* harmony default export */ var Showcase = (Showcase_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/index_B/LearnMoreSubscriber.vue?vue&type=template&id=5b39e79e&scoped=true&
var LearnMoreSubscribervue_type_template_id_5b39e79e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard mt60\" data-v-5b39e79e>","</div>",[_vm._ssrNode("<div class=\"grid md-col-2 gap-80 align-items-start\" data-v-5b39e79e>","</div>",[_vm._ssrNode("<div class=\"grid gap-20 justify-items-start\" data-v-5b39e79e>","</div>",[_vm._ssrNode("<div class=\"grid gap-5\" data-v-5b39e79e><h1 data-v-5b39e79e>The ultimate list of newsletters</h1> <h3 data-v-5b39e79e>Find your next newsletter. Subscribe with ManyLetter.</h3></div> <p class=\"font20 thin maxw400\" data-v-5b39e79e>Browse newsletters from creators around the world, subscribe, and get daily bite-sized summary of newsletter messages to your inbox.\n                </p> <ul class=\"grid gap-10 ml20 maxw400\" data-v-5b39e79e><li class=\"thin font18\" data-v-5b39e79e>Browse newsletters and messages</li> <li class=\"thin font18\" data-v-5b39e79e>Subscribe and get a daily summary of newsletters directly from creators</li> <li class=\"thin font18\" data-v-5b39e79e>Be more productive</li></ul> "),_vm._ssrNode("<div class=\"mt40 grid gap-10 justify-items-start\" data-v-5b39e79e>","</div>",[_c('button',{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:('#newsletter-browser'),expression:"'#newsletter-browser'"}],staticClass:"button cta big"},[_vm._ssrNode("Start discovering")]),_vm._ssrNode(" <p class=\"thin font16\" data-v-5b39e79e>Can you find the hidden pearl? <br data-v-5b39e79e>Join and subscribe to more than <span class=\"strong\" data-v-5b39e79e>"+_vm._ssrEscape(_vm._s(_vm.newslettersCount.newsletter_count)+" newsletters")+"</span>.</p>")],2)],2),_vm._ssrNode(" <div class=\"grid\" data-v-5b39e79e><img"+(_vm._ssrAttr("src",__webpack_require__(204)))+" alt=\"Creator dashboard screenshot\" class=\"justify-self-center\" data-v-5b39e79e></div>")],2)])])}
var LearnMoreSubscribervue_type_template_id_5b39e79e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_B/LearnMoreSubscriber.vue?vue&type=template&id=5b39e79e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/index_B/LearnMoreSubscriber.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var LearnMoreSubscribervue_type_script_lang_js_ = ({
  props: ['usersCount', 'newslettersCount']
});
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_B/LearnMoreSubscriber.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_B_LearnMoreSubscribervue_type_script_lang_js_ = (LearnMoreSubscribervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_B/LearnMoreSubscriber.vue



function LearnMoreSubscriber_injectStyles (context) {
  
  var style0 = __webpack_require__(232)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var LearnMoreSubscriber_component = Object(componentNormalizer["a" /* default */])(
  index_B_LearnMoreSubscribervue_type_script_lang_js_,
  LearnMoreSubscribervue_type_template_id_5b39e79e_scoped_true_render,
  LearnMoreSubscribervue_type_template_id_5b39e79e_scoped_true_staticRenderFns,
  false,
  LearnMoreSubscriber_injectStyles,
  "5b39e79e",
  "8e0face2"
  
)

/* harmony default export */ var LearnMoreSubscriber = (LearnMoreSubscriber_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/index_B/LearnMoreCreator.vue?vue&type=template&id=5c0e68f0&scoped=true&
var LearnMoreCreatorvue_type_template_id_5c0e68f0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard mt80\" data-v-5c0e68f0>","</div>",[_vm._ssrNode("<div class=\"grid md-col-2 gap-100 align-items-center\" data-v-5c0e68f0>","</div>",[_vm._ssrNode("<div class=\"grid\" data-v-5c0e68f0><img"+(_vm._ssrAttr("src",__webpack_require__(204)))+" alt=\"Creator dashboard screenshot\" class=\"justify-self-center\" data-v-5c0e68f0></div> "),_vm._ssrNode("<div class=\"grid gap-20 justify-items-start\" data-v-5c0e68f0>","</div>",[_vm._ssrNode("<div class=\"grid gap-5\" data-v-5c0e68f0><h2 data-v-5c0e68f0>Subscriber</h2> <h3 data-v-5c0e68f0>Get one email a day instead of 100.</h3></div> <p class=\"thin font18\" data-v-5c0e68f0>\n                    Have control over your newsletter subscriptions. Find and join many newsletters from creators around the world.  Get one email a day with all the news and never miss an important message again.\n                </p> <ul class=\"grid gap-10 ml20\" data-v-5c0e68f0><li class=\"thin font18\" data-v-5c0e68f0>Choose the time when you will receive the email.</li> <li class=\"thin font18\" data-v-5c0e68f0>Sort and categorise your subscriptions.</li> <li class=\"thin font18\" data-v-5c0e68f0>Automatically unsubscribe from newsletters.</li> <li class=\"thin font18\" data-v-5c0e68f0>Access the newsletter message history.</li></ul> "),_vm._ssrNode("<div class=\"mt40 grid gap-5 col-2 auto\" data-v-5c0e68f0>","</div>",[_c('nuxt-link',{staticClass:"button cta",attrs:{"to":"/sign-up"}},[_vm._v("Get started")])],1)],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-standard mt100\" data-v-5c0e68f0>","</div>",[_vm._ssrNode("<div class=\"grid md-col-2 gap-100 align-items-center\" data-v-5c0e68f0>","</div>",[_vm._ssrNode("<div class=\"grid gap-20 justify-items-start\" data-v-5c0e68f0>","</div>",[_vm._ssrNode("<div class=\"grid gap-5\" data-v-5c0e68f0><h2 data-v-5c0e68f0>Creator</h2> <h3 data-v-5c0e68f0>Find and grow your audience</h3></div> <p class=\"thin font18\" data-v-5c0e68f0>ManyLetter enables you to expose and promote your newsletter to more people. Send your newsletter messages in a fun, effective, and rewarding way.</p> <ul class=\"grid gap-10 ml20\" data-v-5c0e68f0><li class=\"thin font18\" data-v-5c0e68f0>Build your personal brand.</li> <li class=\"thin font18\" data-v-5c0e68f0>Get people directly to your website.</li> <li class=\"thin font18\" data-v-5c0e68f0>Send personalized messages.</li> <li class=\"thin font18\" data-v-5c0e68f0></li></ul> "),_c('nuxt-link',{staticClass:"button cta mt40",attrs:{"to":"/creator"}},[_vm._v("Discover more")])],2),_vm._ssrNode(" <div class=\"grid\" data-v-5c0e68f0><img"+(_vm._ssrAttr("src",__webpack_require__(125)))+" alt=\"Creator dashboard screenshot\" class=\"justify-self-center\" data-v-5c0e68f0></div>")],2)])],2)}
var LearnMoreCreatorvue_type_template_id_5c0e68f0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_B/LearnMoreCreator.vue?vue&type=template&id=5c0e68f0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/index_B/LearnMoreCreator.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var LearnMoreCreatorvue_type_script_lang_js_ = ({
  data() {
    return {};
  },

  methods: {}
});
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_B/LearnMoreCreator.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_B_LearnMoreCreatorvue_type_script_lang_js_ = (LearnMoreCreatorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_B/LearnMoreCreator.vue



function LearnMoreCreator_injectStyles (context) {
  
  var style0 = __webpack_require__(234)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var LearnMoreCreator_component = Object(componentNormalizer["a" /* default */])(
  index_B_LearnMoreCreatorvue_type_script_lang_js_,
  LearnMoreCreatorvue_type_template_id_5c0e68f0_scoped_true_render,
  LearnMoreCreatorvue_type_template_id_5c0e68f0_scoped_true_staticRenderFns,
  false,
  LearnMoreCreator_injectStyles,
  "5c0e68f0",
  "316b4095"
  
)

/* harmony default export */ var LearnMoreCreator = (LearnMoreCreator_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/index_B/Reviews.vue?vue&type=template&id=45019b5a&scoped=true&
var Reviewsvue_type_template_id_45019b5a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-narrow\" data-v-45019b5a>","</div>",[_vm._ssrNode("<div class=\"grid gap-60\" data-v-45019b5a>","</div>",[_vm._ssrNode("<div class=\"grid justify-items-center\" data-v-45019b5a><h2 class=\"big mb40 text-center\" data-v-45019b5a>User stories</h2> <h3 class=\"text-center\" data-v-45019b5a>Discover how other users use ManyLetter to improve their productivity.</h3></div> "),_vm._ssrNode("<div class=\"grid gap-20 md-col-2 auto align-items-stretch justify-content-center\" data-v-45019b5a>","</div>",[_vm._ssrNode("<div class=\"grid gap-20 box\" data-v-45019b5a>","</div>",[_vm._ssrNode("<p data-v-45019b5a>","</p>",[_vm._ssrNode("Hello. Thank you for your interest in ManyLetter. As I'm just starting with ManyLetter, I don't have any user stories yet. I hate fake stories. Therefore, I have decided that the first story will be about ManyLetter and how I have come up with the idea. "),_c('nuxt-link',{attrs:{"to":"/about"}},[_vm._v("Read more")])],2),_vm._ssrNode(" <div class=\"grid gap-20 auto col-2 justify-content-start align-items-center\" data-v-45019b5a><img"+(_vm._ssrAttr("src",__webpack_require__(124)))+" alt=\"manyletter founder\" data-v-45019b5a> <div data-v-45019b5a><p class=\"strong\" data-v-45019b5a>tomas<span class=\"small thin\" data-v-45019b5a>@manyletter.com</span></p> <p class=\"small thin\" data-v-45019b5a>Founder of ManyLetter</p></div></div>")],2)]),_vm._ssrNode(" <div class=\"grid gap-10 justify-self-center justify-items-center\" data-v-45019b5a><p data-v-45019b5a>Social links to follow</p> <div class=\"grid gap-10 md-col-3 auto justify-items-center\" data-v-45019b5a><p class=\"social twitter\" data-v-45019b5a><a href=\"https://twitter.com/manylettercom\" target=\"_blank\" data-v-45019b5a>@ManyLetter</a></p> <p class=\"social twitter\" data-v-45019b5a><a href=\"https://twitter.com/TomasSlouka\" target=\"_blank\" data-v-45019b5a>@TomasSlouka</a></p> <p class=\"social instagram\" data-v-45019b5a><a href=\"https://www.indiehackers.com/product/manyletter\" target=\"_blank\" data-v-45019b5a>Indiehackers.com</a></p></div></div>")],2)])])}
var Reviewsvue_type_template_id_45019b5a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_B/Reviews.vue?vue&type=template&id=45019b5a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/index_B/Reviews.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Reviewsvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_B/Reviews.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_B_Reviewsvue_type_script_lang_js_ = (Reviewsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_B/Reviews.vue



function Reviews_injectStyles (context) {
  
  var style0 = __webpack_require__(236)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Reviews_component = Object(componentNormalizer["a" /* default */])(
  index_B_Reviewsvue_type_script_lang_js_,
  Reviewsvue_type_template_id_45019b5a_scoped_true_render,
  Reviewsvue_type_template_id_45019b5a_scoped_true_staticRenderFns,
  false,
  Reviews_injectStyles,
  "45019b5a",
  "17b79eae"
  
)

/* harmony default export */ var Reviews = (Reviews_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/index_B/Newsletters.vue?vue&type=template&id=16ef41d3&scoped=true&
var Newslettersvue_type_template_id_16ef41d3_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component",attrs:{"id":"newsletter-browser"}},[_vm._ssrNode("<div class=\"container-standard\" data-v-16ef41d3>","</div>",[_vm._ssrNode("<div class=\"grid gap-60\" data-v-16ef41d3>","</div>",[_vm._ssrNode("<div class=\"grid justify-items-center\" data-v-16ef41d3>","</div>",[_vm._ssrNode("<h2 class=\"big text-center mb40\" data-v-16ef41d3>Newsletter browser</h2> "),_vm._ssrNode("<p class=\"text-center mb40\" data-v-16ef41d3>","</p>",[_vm._ssrNode("Do you have your own newsletter? "),_c('nuxt-link',{attrs:{"to":"/sign-up"}},[_vm._v("Add your newsletter")]),_vm._ssrNode(" to the ultimate list.")],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"grid row-gap-30 col-gap-30 md-col-2 lg-col-3\" data-v-16ef41d3>","</div>",_vm._l((_vm.newsletterList.data),function(item){return _vm._ssrNode("<div class=\"grid box\" data-v-16ef41d3>","</div>",[_c('nuxt-link',{staticClass:"grid align-content-space-between pointer",attrs:{"to":"/admin/subscriber/subscriptions/newsletters/detail/" + item.id,"tag":"div"}},[_c('div',{staticClass:"grid newsletter"},[_c('div',{staticClass:"header grid gap-20"},[_c('div',{staticClass:"avatar"},[(item.avatar !== null)?_c('div',{style:('background-image: url(https://storage.manyletter.com/ymello_filestorage/img/newsletter_avatar/' + item.avatar + ')')}):_c('div',{staticClass:"font20 strong grid"},[_c('span',{staticClass:"align-self-center justify-self-center uppercase"},[_vm._v(_vm._s(item.title.charAt(0)))])])])]),_vm._v(" "),_c('div',{staticClass:"body grid gap-20 auto align-items-space-between justify-items-start justify-content-start"},[_c('div',{staticClass:"grid gap-20"},[_c('div',[_c('h3',[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('p',{staticClass:"font14"},[_vm._v("created by "),_c('span',{staticClass:"strong"},[_vm._v(_vm._s(item.creator_name))])])]),_vm._v(" "),_c('p',{staticClass:"thin"},[_vm._v(_vm._s(item.intro))])])])])])],1)}),0)],2)])])}
var Newslettersvue_type_template_id_16ef41d3_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_B/Newsletters.vue?vue&type=template&id=16ef41d3&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/index_B/Newsletters.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Newslettersvue_type_script_lang_js_ = ({
  props: ['newsletterList']
});
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_B/Newsletters.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_B_Newslettersvue_type_script_lang_js_ = (Newslettersvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/index_B/Newsletters.vue



function Newsletters_injectStyles (context) {
  
  var style0 = __webpack_require__(238)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Newsletters_component = Object(componentNormalizer["a" /* default */])(
  index_B_Newslettersvue_type_script_lang_js_,
  Newslettersvue_type_template_id_16ef41d3_scoped_true_render,
  Newslettersvue_type_template_id_16ef41d3_scoped_true_staticRenderFns,
  false,
  Newsletters_injectStyles,
  "16ef41d3",
  "1d40ace8"
  
)

/* harmony default export */ var Newsletters = (Newsletters_component.exports);
// EXTERNAL MODULE: ./apps/manyletter.com/components/page/index_B/GetStarted.vue + 4 modules
var GetStarted = __webpack_require__(123);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/pages/index copy.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var index_copyvue_type_script_lang_js_ = ({
  layout: 'default-page',
  components: {
    Header: Header["a" /* default */],
    Intro: Intro,
    Showcase: Showcase,
    LearnMoreCreator: LearnMoreCreator,
    LearnMoreSubscriber: LearnMoreSubscriber,
    Reviews: Reviews,
    Newsletters: Newsletters,
    GetStarted: GetStarted["a" /* default */]
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
    $axios.$get('/api/maylday/open/newsletters'), $axios.$get('/api/maylday/open/newsletters/count'), $axios.$get('/api/maylday/open/users/count')]);
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
// CONCATENATED MODULE: ./apps/manyletter.com/pages/index copy.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_index_copyvue_type_script_lang_js_ = (index_copyvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/pages/index copy.vue



function index_copy_injectStyles (context) {
  
  
}

/* normalize component */

var index_copy_component = Object(componentNormalizer["a" /* default */])(
  pages_index_copyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  index_copy_injectStyles,
  "e2ce06f4",
  "4711230f"
  
)

/* harmony default export */ var index_copy = __webpack_exports__["default"] = (index_copy_component.exports);

/***/ })

};;
//# sourceMappingURL=index copy.js.map