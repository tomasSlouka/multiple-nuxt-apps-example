exports.ids = [15];
exports.modules = {

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/upfordomain.com/pages/sign-up/index.vue?vue&type=template&id=6442222c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_c('Header'),_vm._ssrNode(" "),_c('SignUp')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/upfordomain.com/pages/sign-up/index.vue?vue&type=template&id=6442222c&scoped=true&

// EXTERNAL MODULE: ./apps/upfordomain.com/components/page/_common/HeaderClean.vue + 4 modules
var HeaderClean = __webpack_require__(65);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/upfordomain.com/components/page/sign-up/SignUp.vue?vue&type=template&id=4ee01dd8&scoped=true&
var SignUpvue_type_template_id_4ee01dd8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component grid"},[_vm._ssrNode("<div class=\"box grid auto align-self-center gap-20\" data-v-4ee01dd8><h4 data-v-4ee01dd8>Get your account</h4> <form class=\"grid gap-10\" data-v-4ee01dd8><div data-v-4ee01dd8><label for=\"email\" class=\"small gray\" data-v-4ee01dd8>Your email address</label> <input id=\"email\" name=\"email\" type=\"text\" placeholder=\"What is your email address?\""+(_vm._ssrAttr("value",(_vm.email)))+" data-v-4ee01dd8></div> <button type=\"submit\" class=\"cta\" data-v-4ee01dd8>Submit</button> <div data-v-4ee01dd8><p class=\"info text-center small\" data-v-4ee01dd8>You will get verification code to your email.</p> <p class=\"info text-center small\" data-v-4ee01dd8>No spam ever.</p></div></form></div>")])}
var SignUpvue_type_template_id_4ee01dd8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/upfordomain.com/components/page/sign-up/SignUp.vue?vue&type=template&id=4ee01dd8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/upfordomain.com/components/page/sign-up/SignUp.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SignUpvue_type_script_lang_js_ = ({
  data() {
    return {
      email: '',
      referrer: this.$cookies.get('manyletter.referrer') // referrer: decodeURIComponent(new Buffer(this.$cookies.get('manyletter.referrer'), 'base64').toString('ascii'))

    };
  },

  methods: {
    async submitForm() {
      await this.$axios.$post('/api/maylday/signup', {
        "email": this.email,
        "referrer": this.referrer || ''
      }).then(response => {
        console.log(response);
        this.$router.push('/sign-up/code?email=' + encodeURIComponent(this.email));
      }, error => {
        console.log(error); //this.res = error.response.data.message
      });
    }

  }
});
// CONCATENATED MODULE: ./apps/upfordomain.com/components/page/sign-up/SignUp.vue?vue&type=script&lang=js&
 /* harmony default export */ var sign_up_SignUpvue_type_script_lang_js_ = (SignUpvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/upfordomain.com/components/page/sign-up/SignUp.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(96)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sign_up_SignUpvue_type_script_lang_js_,
  SignUpvue_type_template_id_4ee01dd8_scoped_true_render,
  SignUpvue_type_template_id_4ee01dd8_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "4ee01dd8",
  "64a49ca7"
  
)

/* harmony default export */ var SignUp = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/upfordomain.com/pages/sign-up/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//


/* harmony default export */ var sign_upvue_type_script_lang_js_ = ({
  layout: 'defaultClean',
  components: {
    Header: HeaderClean["a" /* default */],
    SignUp: SignUp
  }
});
// CONCATENATED MODULE: ./apps/upfordomain.com/pages/sign-up/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_sign_upvue_type_script_lang_js_ = (sign_upvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/upfordomain.com/pages/sign-up/index.vue



function sign_up_injectStyles (context) {
  
  var style0 = __webpack_require__(98)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var sign_up_component = Object(componentNormalizer["a" /* default */])(
  pages_sign_upvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  sign_up_injectStyles,
  "6442222c",
  "b94b8afc"
  
)

/* harmony default export */ var sign_up = __webpack_exports__["default"] = (sign_up_component.exports);

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("6ab422f8", content, true, context)
};

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderClean_vue_vue_type_style_index_0_id_57ae1544_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderClean_vue_vue_type_style_index_0_id_57ae1544_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderClean_vue_vue_type_style_index_0_id_57ae1544_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderClean_vue_vue_type_style_index_0_id_57ae1544_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderClean_vue_vue_type_style_index_0_id_57ae1544_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#header_clean[data-v-57ae1544]{position:fixed;top:0;left:0;background-color:#fff;width:100%}.container[data-v-57ae1544]{padding:20px;box-shadow:0 .125rem .125rem rgba(0,0,0,.1)}.logo a[data-v-57ae1544]{font-size:24px;line-height:30px;font-weight:700;font-family:\"MuseoModerno\",cursive;text-decoration:none;color:#39ac37}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/upfordomain.com/components/page/_common/HeaderClean.vue?vue&type=template&id=57ae1544&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"header_clean"}},[_vm._ssrNode("<div class=\"container grid justify-items-center\" data-v-57ae1544>","</div>",[_vm._ssrNode("<div class=\"logo\" data-v-57ae1544>","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("\n                upfordomain\n            ")])],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/upfordomain.com/components/page/_common/HeaderClean.vue?vue&type=template&id=57ae1544&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/upfordomain.com/components/page/_common/HeaderClean.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HeaderCleanvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/upfordomain.com/components/page/_common/HeaderClean.vue?vue&type=script&lang=js&
 /* harmony default export */ var _common_HeaderCleanvue_type_script_lang_js_ = (HeaderCleanvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/upfordomain.com/components/page/_common/HeaderClean.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(63)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _common_HeaderCleanvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "57ae1544",
  "b4ee3b88"
  
)

/* harmony default export */ var HeaderClean = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(97);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("c731e788", content, true, context)
};

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(99);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("80755a74", content, true, context)
};

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_style_index_0_id_4ee01dd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_style_index_0_id_4ee01dd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_style_index_0_id_4ee01dd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_style_index_0_id_4ee01dd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SignUp_vue_vue_type_style_index_0_id_4ee01dd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".component[data-v-4ee01dd8]{height:100%;padding:20px}.box[data-v-4ee01dd8]{background-color:#fff;padding:30px;margin:0 auto;max-width:360px;box-shadow:0 1px 6px 0 rgba(14,30,37,.12);border-radius:8px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6442222c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6442222c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6442222c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6442222c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6442222c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".page[data-v-6442222c]{height:100%}", ""]);
// Exports
module.exports = exports;


/***/ })

};;
//# sourceMappingURL=index.js.map