exports.ids = [5];
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

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(214);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("cea952c2", content, true, context)
};

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_46f7927f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(131);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_46f7927f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_46f7927f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_46f7927f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_46f7927f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_46f7927f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container-narrow[data-v-46f7927f]{margin-bottom:40px;margin-top:40px}.wrapper[data-v-46f7927f]{background-color:#f2fdfa;padding:10px}ul[data-v-46f7927f]{margin-left:20px;margin-bottom:15px}li[data-v-46f7927f]{margin-bottom:5px}hr[data-v-46f7927f]{height:1px;width:100%;border:0;border-bottom:1px dashed #ccc;background-color:transparent;margin-bottom:20px}h3[data-v-46f7927f]{margin-bottom:10px}p[data-v-46f7927f]{font-weight:300;font-size:18px}img[data-v-46f7927f]{border-radius:100px;border:6px solid #fff;width:60px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/pages/about/index.vue?vue&type=template&id=7a47bf74&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_c('Header'),_vm._ssrNode(" "),_c('Intro'),_vm._ssrNode(" "),_c('About'),_vm._ssrNode(" "),_c('GetStarted')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/pages/about/index.vue?vue&type=template&id=7a47bf74&scoped=true&

// EXTERNAL MODULE: ./apps/manyletter.com/components/page/_common/Header.vue + 14 modules
var Header = __webpack_require__(112);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/about/Intro.vue?vue&type=template&id=47e85422&scoped=true&
var Introvue_type_template_id_47e85422_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-narrow mb60\" data-v-47e85422><div class=\"grid col-1 auto align-items-center justify-content-start\" data-v-47e85422><div data-v-47e85422><h2 data-v-47e85422>Find out more</h2> <h1 data-v-47e85422>About ManyLetter</h1> <p class=\"thin small\" data-v-47e85422>2 minute read. Contains 386 words</p></div></div></div>")])}
var Introvue_type_template_id_47e85422_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/about/Intro.vue?vue&type=template&id=47e85422&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/about/Intro.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
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
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/about/Intro.vue?vue&type=script&lang=js&
 /* harmony default export */ var about_Introvue_type_script_lang_js_ = (Introvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./apps/manyletter.com/components/page/about/Intro.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  about_Introvue_type_script_lang_js_,
  Introvue_type_template_id_47e85422_scoped_true_render,
  Introvue_type_template_id_47e85422_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "47e85422",
  "55427e9c"
  
)

/* harmony default export */ var Intro = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/about/About.vue?vue&type=template&id=46f7927f&scoped=true&
var Aboutvue_type_template_id_46f7927f_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-narrow grid gap-40\" data-v-46f7927f><div data-v-46f7927f><p class=\"strong\" data-v-46f7927f>Hi there! My name is Tomas, and I'm the founder of ManyLetter.\n            I would like introduce you to ManyLetter and why I have created it.</p></div> <div class=\"hr\" data-v-46f7927f></div> <div data-v-46f7927f><h3 data-v-46f7927f>Why I create ManyLetter?</h3> <p class=\"mb10\" data-v-46f7927f>\n                One of the biggest problems we face today is too much information. We are continually inundated with news, messages, emails, notifications. We are bombarded with information all the time, from every angle, and at every turn. In one sense, we are in the most incredible time in human history for learning. But on the other side, we are so distracted. Sometimes that much that we end up paralyzed and can not even move.\n            </p> <p class=\"mb10\" data-v-46f7927f>\n                I'm subscribed to too many newsletters and it has become annoying. So I started to browse the internet and search for some tool that makes my email inbox less inundated by messages. I have found some tools but almost all of them was unusable or hard to use. I really didn't want my inbox under control of a third party or use browser extensions. I wanted something easy to use, something, that will give me control over all newsletters and make my inbox distraction-free.\n            </p> <p class=\"mb10\" data-v-46f7927f>\n                So I have come up with the idea of ManyLetter.\n            </p> <p class=\"mb10\" data-v-46f7927f>    \n                ManyLetter is created to address these problems. Its primary focus is to reduce the number of email messages that users are receiving every day, by combining many newsletters into one (that is where the name of ManyLetter comes from). ManyLetter has built-in features that provide users with options that save time, make the inbox tidy, reduce the number of notifications received as well as help creators to create newsletters that their subscribers will love.\n            </p></div> <div data-v-46f7927f><h3 data-v-46f7927f>Mission</h3> <p class=\"big\" data-v-46f7927f>&quot;We are on the mission to change the way how newsletters are done.&quot;</p></div> <div data-v-46f7927f><h3 data-v-46f7927f>Values</h3> <p data-v-46f7927f>\n                Respect, Trust, \n                Integrity, Honesty, Transparency, Responsibility,  \n                Fairness, Not Fake, \n                Community and communication, \n                Sustainability\n            </p></div> <div data-v-46f7927f><h3 data-v-46f7927f>Why should you join ManyLetter?</h3> <p class=\"mb10\" data-v-46f7927f>\n               I'm thrilled about ManyLetter's future as we would like to create a friendly platform that will allow everyone to find and join any newsletter, as well as to create a newsletter and share it with other people.\n            </p> <p class=\"mb40\" data-v-46f7927f>Hope to see you in ManyLetter.</p> <div class=\"grid gap-20 auto col-2 justify-content-start align-items-center\" data-v-46f7927f><img"+(_vm._ssrAttr("src",__webpack_require__(124)))+" alt=\"manyletter founder\" data-v-46f7927f> <div data-v-46f7927f><p class=\"strong\" data-v-46f7927f>tomas<span class=\"small thin\" data-v-46f7927f>@manyletter.com</span></p> <p class=\"small thin\" data-v-46f7927f>Founder of ManyLetter</p></div></div></div></div>")])}
var Aboutvue_type_template_id_46f7927f_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/page/about/About.vue?vue&type=template&id=46f7927f&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/page/about/About.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Aboutvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/about/About.vue?vue&type=script&lang=js&
 /* harmony default export */ var about_Aboutvue_type_script_lang_js_ = (Aboutvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/page/about/About.vue



function About_injectStyles (context) {
  
  var style0 = __webpack_require__(213)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var About_component = Object(componentNormalizer["a" /* default */])(
  about_Aboutvue_type_script_lang_js_,
  Aboutvue_type_template_id_46f7927f_scoped_true_render,
  Aboutvue_type_template_id_46f7927f_scoped_true_staticRenderFns,
  false,
  About_injectStyles,
  "46f7927f",
  "51930553"
  
)

/* harmony default export */ var About = (About_component.exports);
// EXTERNAL MODULE: ./apps/manyletter.com/components/page/index_B/GetStarted.vue + 4 modules
var GetStarted = __webpack_require__(123);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/pages/about/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//




/* harmony default export */ var aboutvue_type_script_lang_js_ = ({
  layout: 'default-page',
  components: {
    Header: Header["a" /* default */],
    Intro: Intro,
    About: About,
    GetStarted: GetStarted["a" /* default */]
  }
});
// CONCATENATED MODULE: ./apps/manyletter.com/pages/about/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/pages/about/index.vue



function about_injectStyles (context) {
  
  
}

/* normalize component */

var about_component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  about_injectStyles,
  "7a47bf74",
  "56f19f67"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (about_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map