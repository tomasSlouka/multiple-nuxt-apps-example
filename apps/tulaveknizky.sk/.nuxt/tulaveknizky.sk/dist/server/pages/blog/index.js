exports.ids = [26];
exports.modules = {

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(111);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("7f778732", content, true, context)
};

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNav_vue_vue_type_style_index_0_id_14ba3ee4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNav_vue_vue_type_style_index_0_id_14ba3ee4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNav_vue_vue_type_style_index_0_id_14ba3ee4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNav_vue_vue_type_style_index_0_id_14ba3ee4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNav_vue_vue_type_style_index_0_id_14ba3ee4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".component[data-v-14ba3ee4]{background-color:#fff;box-shadow:0 .125rem .125rem rgba(0,0,0,.1);border-top:1px solid #eee;position:relative}.container-standard[data-v-14ba3ee4]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}.container-standard>div.flex[data-v-14ba3ee4]{height:100%}.nav>ul[data-v-14ba3ee4]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-14ba3ee4]{padding:10px 16px;border-bottom:1px solid transparent;position:relative;top:0;transition:.2s;display:inline-block;color:#000}.nav>ul>li>a[data-v-14ba3ee4]:hover{color:#000;text-decoration:none;position:relative;top:2px}.nav>ul>li>a.nuxt-link-active[data-v-14ba3ee4],.nav>ul>li>a.nuxt-link-exact-active[data-v-14ba3ee4]{color:#000;text-decoration:none;font-weight:600}.nav>ul>li>a[data-v-14ba3ee4]{color:rgba(0,0,0,.72157);line-height:24px;text-decoration:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/home/SubNav.vue?vue&type=template&id=14ba3ee4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard grid align-items-center justify-items-end\" data-v-14ba3ee4>","</div>",[_vm._ssrNode("<div class=\"flex wrap align-items-center justify-content-space-between\" data-v-14ba3ee4>","</div>",[_vm._ssrNode("<div class=\"nav\" data-v-14ba3ee4>","</div>",[_vm._ssrNode("<ul class=\"flex wrap show-md align-items-center\" data-v-14ba3ee4>","</ul>",[_vm._ssrNode("<li data-v-14ba3ee4>","</li>",[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/ako-to-funguje"}},[_vm._v("Ako to funguje?")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-14ba3ee4>","</li>",[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/nas-pribeh"}},[_vm._v("Náš príbeh")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-14ba3ee4>","</li>",[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/blog"}},[_vm._v("Náš blog")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-14ba3ee4>","</li>",[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/newsletter"}},[_vm._v("Novinky emailom")])],1)],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/home/SubNav.vue?vue&type=template&id=14ba3ee4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/home/SubNav.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SubNavvue_type_script_lang_js_ = ({
  data() {
    return {// userName: this.$store.state.auth.userData.name,
    };
  },

  methods: {
    logout() {
      console.log('logout');
      this.$store.dispatch('auth/logout').then(() => {
        this.$router.push('/odhlasenie');
      });
    }

  }
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/home/SubNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_SubNavvue_type_script_lang_js_ = (SubNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/home/SubNav.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(102)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_SubNavvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "14ba3ee4",
  "27acf20c"
  
)

/* harmony default export */ var SubNav = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_c8edec22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_c8edec22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_c8edec22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_c8edec22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_c8edec22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".component[data-v-c8edec22]{padding:1px;background-color:rgba(255,212,1,.25098);border-bottom:10px solid #ffd401}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(116);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("a1742bee", content, true, context)
};

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/_common/Hero.vue?vue&type=template&id=c8edec22&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-hero grid\" data-v-c8edec22><div class=\"grid justify-items-start\" data-v-c8edec22><h3 class=\"h3\" data-v-c8edec22>"+_vm._ssrEscape(_vm._s(_vm.h1))+"</h3> "+((_vm.h2)?("<h1 class=\"h1\" data-v-c8edec22>"+_vm._ssrEscape(_vm._s(_vm.h2))+"</h1>"):"<!---->")+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/_common/Hero.vue?vue&type=template&id=c8edec22&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/_common/Hero.vue?vue&type=script&lang=js&
//
//
//
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
  props: {
    h1: String,
    h2: String
  }
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/_common/Hero.vue?vue&type=script&lang=js&
 /* harmony default export */ var _common_Herovue_type_script_lang_js_ = (Herovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/_common/Hero.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(105)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _common_Herovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c8edec22",
  "33003460"
  
)

/* harmony default export */ var Hero = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_id_2564596a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(101);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_id_2564596a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_id_2564596a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_id_2564596a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_id_2564596a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".component[data-v-2564596a]{padding:1px;background-color:#fbf7ed}input[data-v-2564596a]{background-color:#fff}form[data-v-2564596a]{width:100%;max-width:420px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/home/Newsletter.vue?vue&type=template&id=2564596a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard\" data-v-2564596a><div class=\"grid gap-20 text-center\" data-v-2564596a><h2 data-v-2564596a>Pridaj sa na odber noviniek</h2> <p data-v-2564596a>Z času na čas posielame emailom novinky o knihách, ktoré by ťa mohli zaujimať. Tak sa pridaj.</p> <form class=\"grid justify-self-center gap-10\" data-v-2564596a><input type=\"text\" name=\"email\" placeholder=\"Sem napíš svoj email\" class=\"text-center\" data-v-2564596a> <button type=\"submit\" class=\"cta black\" data-v-2564596a>Chcem sa pridať</button></form></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/home/Newsletter.vue?vue&type=template&id=2564596a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/home/Newsletter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Newslettervue_type_script_lang_js_ = ({// props: ['domainList'],
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/home/Newsletter.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_Newslettervue_type_script_lang_js_ = (Newslettervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/home/Newsletter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(110)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_Newslettervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2564596a",
  "238ac082"
  
)

/* harmony default export */ var Newsletter = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_233d5c86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(107);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_233d5c86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_233d5c86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_233d5c86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_233d5c86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container-standard[data-v-233d5c86]{padding:10px}.number[data-v-233d5c86]{font-size:2em;color:#000;height:70px;width:70px;font-weight:700;border-radius:100px;background-color:#ffd401}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/home/About.vue?vue&type=template&id=233d5c86&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard grid gap-60\" data-v-233d5c86><h2 data-v-233d5c86>Požičiavanie kníh s Túlavými knižkami je uber jednoduché</h2> <div class=\"grid md-col-2 gap-60\" data-v-233d5c86><div class=\"grid gap-20 col-2 auto justify-content-start \" data-v-233d5c86><div data-v-233d5c86><div class=\"number grid align-items-center justify-items-center\" data-v-233d5c86><div data-v-233d5c86>1.</div></div></div> <div class=\"grid gap-10 align-content-start\" data-v-233d5c86><h3 data-v-233d5c86>Vytvor si účet</h3> <div class=\"grid gap-5\" data-v-233d5c86><p data-v-233d5c86>Knižky si môžeš požičať len ak si registrovaným členom Túlavých knižiek.</p></div></div></div> <div class=\"grid gap-20 col-2 auto justify-content-start \" data-v-233d5c86><div data-v-233d5c86><div class=\"number grid align-items-center justify-items-center\" data-v-233d5c86><div data-v-233d5c86>2.</div></div></div> <div class=\"grid gap-10 align-content-start\" data-v-233d5c86><h3 data-v-233d5c86>Dobi si kredit</h3> <div class=\"grid gap-5\" data-v-233d5c86><p data-v-233d5c86>Kredity slúžia ako záloha. Ak nám knižky vrátiš späť a nebudú poškodené, tvoje kredity ti opätovne obnovíme v plnej výške a možno ti pripočítame aj niečo navyše 😀.</p></div></div></div> <div class=\"grid gap-20 col-2 auto justify-content-start \" data-v-233d5c86><div data-v-233d5c86><div class=\"number grid align-items-center justify-items-center\" data-v-233d5c86><div data-v-233d5c86>3.</div></div></div> <div class=\"grid gap-10 align-content-start\" data-v-233d5c86><h3 data-v-233d5c86>Požičaj si knižky</h3> <div class=\"grid gap-5\" data-v-233d5c86><p data-v-233d5c86>Ak máš účet a kredity, môžeš si vypožičať knižky. Štandardná dĺžka vypožičnej doby je 33 dní od odoslania z našej centrály.</p> <p data-v-233d5c86>Knižky posielame pomocou služby Zasielkovňa alebo Slovenskou poštou do 3 dní od objednania.</p></div></div></div> <div class=\"grid gap-20 col-2 auto justify-content-start \" data-v-233d5c86><div data-v-233d5c86><div class=\"number grid align-items-center justify-items-center\" data-v-233d5c86><div data-v-233d5c86>4.</div></div></div> <div class=\"grid gap-10 align-content-start\" data-v-233d5c86><h3 data-v-233d5c86>Predĺž si vypožičnu dobu</h3> <div class=\"grid gap-5\" data-v-233d5c86><p data-v-233d5c86>Ak knižky nestíhaš prečítať, môžeš si predĺžiť výpožičnú dobu o ďalších 30 dní.</p></div></div></div> <div class=\"grid gap-20 col-2 auto justify-content-start \" data-v-233d5c86><div data-v-233d5c86><div class=\"number grid align-items-center justify-items-center\" data-v-233d5c86><div data-v-233d5c86>5.</div></div></div> <div class=\"grid gap-10 align-content-start\" data-v-233d5c86><h3 data-v-233d5c86>Vráť knižky späť</h3> <div class=\"grid gap-5\" data-v-233d5c86><p data-v-233d5c86>Po uplynutí výpožičnej doby nám jednoducho a zadarmo pošleš knižky späť pomocou služby Zásielkovňa alebo Slovenskou poštou.</p> <p data-v-233d5c86>Ak knižky nevrátiš včas, za každý deň omeškania ti odpočítame 0.2 kreditu.</p></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/home/About.vue?vue&type=template&id=233d5c86&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/home/About.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/home/About.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_Aboutvue_type_script_lang_js_ = (Aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/home/About.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(115)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_Aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "233d5c86",
  "5e4eaf54"
  
)

/* harmony default export */ var About = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/pages/blog/index.vue?vue&type=template&id=11f28fbe&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_c('SubNav'),_vm._ssrNode(" "),_c('Hero',{attrs:{"h1":"Pre zvedavcov","h2":"Blog"}}),_vm._ssrNode(" "),_c('About'),_vm._ssrNode(" "),_c('Newsletter')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/pages/blog/index.vue?vue&type=template&id=11f28fbe&

// EXTERNAL MODULE: ./apps/tulaveknizky.sk/components/page/home/SubNav.vue + 4 modules
var SubNav = __webpack_require__(104);

// EXTERNAL MODULE: ./apps/tulaveknizky.sk/components/page/_common/Hero.vue + 4 modules
var Hero = __webpack_require__(109);

// EXTERNAL MODULE: ./apps/tulaveknizky.sk/components/page/home/About.vue + 4 modules
var About = __webpack_require__(119);

// EXTERNAL MODULE: ./apps/tulaveknizky.sk/components/page/home/Newsletter.vue + 4 modules
var Newsletter = __webpack_require__(112);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/pages/blog/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var blogvue_type_script_lang_js_ = ({
  layout: 'defaultPage',
  components: {
    SubNav: SubNav["a" /* default */],
    Hero: Hero["a" /* default */],
    About: About["a" /* default */],
    Newsletter: Newsletter["a" /* default */]
  }
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/pages/blog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_blogvue_type_script_lang_js_ = (blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/tulaveknizky.sk/pages/blog/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "764ef36d"
  
)

/* harmony default export */ var blog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(103);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("7fe5da08", content, true, context)
};

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(106);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("6d04b2dc", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=index.js.map