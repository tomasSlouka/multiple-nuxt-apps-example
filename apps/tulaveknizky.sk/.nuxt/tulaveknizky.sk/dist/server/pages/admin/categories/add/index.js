exports.ids = [5];
exports.modules = {

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/pages/admin/categories/add/index.vue?vue&type=template&id=7b2726b4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_c('SubNav'),_vm._ssrNode(" "),_c('Hero',{attrs:{"h1":"Administrácia","h2":"Kategórie"}}),_vm._ssrNode(" "),_c('FormAdd')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/pages/admin/categories/add/index.vue?vue&type=template&id=7b2726b4&

// EXTERNAL MODULE: ./apps/tulaveknizky.sk/components/admin/_common/Hero.vue + 4 modules
var Hero = __webpack_require__(82);

// EXTERNAL MODULE: ./apps/tulaveknizky.sk/components/admin/_common/SubNav.vue + 4 modules
var SubNav = __webpack_require__(83);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/admin/categories/FormAdd.vue?vue&type=template&id=2212433c&scoped=true&
var FormAddvue_type_template_id_2212433c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard grid\" data-v-2212433c>","</div>",[_vm._ssrNode("<div class=\"grid gap-40\" data-v-2212433c>","</div>",[_vm._ssrNode("<h2 data-v-2212433c>Nový kategória</h2> "),_vm._ssrNode("<div class=\"box-form\" data-v-2212433c>","</div>",[_vm._ssrNode("<form class=\"grid gap-30 align-items-start\" data-v-2212433c>","</form>",[_vm._ssrNode("<div class=\"grid gap-20\" data-v-2212433c><div data-v-2212433c><label for=\"name\" data-v-2212433c>Názov kategórie</label> <input type=\"text\" placeholder=\"Názov kategórie\" name=\"name\""+(_vm._ssrAttr("value",(_vm.name)))+" data-v-2212433c></div></div> <div class=\"hr\" data-v-2212433c></div> "),_vm._ssrNode("<div class=\"justify-self-end grid col-3 auto gap-10 align-items-center\" data-v-2212433c>","</div>",[_vm._ssrNode("<div data-v-2212433c>"+((_vm.submitSuccess)?("<p class=\"success\" data-v-2212433c>"+_vm._ssrEscape(_vm._s(_vm.submitText))+"</p>"):"<!---->")+"</div> "),_c('nuxt-link',{staticClass:"button cta red",attrs:{"to":"/admin/categories"}},[_vm._v("Zrušiť")]),_vm._ssrNode(" <button type=\"submit\" class=\"button cta black\" data-v-2212433c>Uložiť</button>")],2)],2)])],2)])])}
var FormAddvue_type_template_id_2212433c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/categories/FormAdd.vue?vue&type=template&id=2212433c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/admin/categories/FormAdd.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FormAddvue_type_script_lang_js_ = ({
  data() {
    return {
      submitSuccess: false,
      submitError: false,
      submitText: 'Uložené!',
      id: null,
      name: null,
      created_at: null,
      updated_at: null,
      deleted_at: null,
      created_by: null,
      updated_by: null,
      deleted_by: null
    };
  },

  methods: {
    async submitForm() {
      await this.$axios.$post('/category', {
        "name": this.name
      }).then(response => {
        console.log(response);
        this.submitSuccess = true;
        this.submitText = 'Uložené!';
        setTimeout(() => this.submitSuccess = false, 4000); // this.$router.push('/admin/categories/detail/'+ response.id)
        // this.$router.push('/admin/categories')

        this.name = "";
      }, error => {
        console.log(error);
      });
    }

  }
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/categories/FormAdd.vue?vue&type=script&lang=js&
 /* harmony default export */ var categories_FormAddvue_type_script_lang_js_ = (FormAddvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/categories/FormAdd.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  categories_FormAddvue_type_script_lang_js_,
  FormAddvue_type_template_id_2212433c_scoped_true_render,
  FormAddvue_type_template_id_2212433c_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "2212433c",
  "d3b3c83a"
  
)

/* harmony default export */ var FormAdd = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/pages/admin/categories/add/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var addvue_type_script_lang_js_ = ({
  layout: 'defaultAdmin',
  components: {
    SubNav: SubNav["a" /* default */],
    Hero: Hero["a" /* default */],
    FormAdd: FormAdd
  }
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/pages/admin/categories/add/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var categories_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/pages/admin/categories/add/index.vue



function add_injectStyles (context) {
  
  
}

/* normalize component */

var add_component = Object(componentNormalizer["a" /* default */])(
  categories_addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  add_injectStyles,
  null,
  "358fb9d9"
  
)

/* harmony default export */ var add = __webpack_exports__["default"] = (add_component.exports);

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("40171c24", content, true, context)
};

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(81);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("d19dc1c2", content, true, context)
};

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_05b6f733_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_05b6f733_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_05b6f733_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_05b6f733_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_05b6f733_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".component[data-v-05b6f733]{padding:1px;background-color:rgba(255,212,1,.25098);border-bottom:10px solid #ffd401}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNav_vue_vue_type_style_index_0_id_2ab56dd5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNav_vue_vue_type_style_index_0_id_2ab56dd5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNav_vue_vue_type_style_index_0_id_2ab56dd5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNav_vue_vue_type_style_index_0_id_2ab56dd5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNav_vue_vue_type_style_index_0_id_2ab56dd5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".component[data-v-2ab56dd5]{background-color:#fff;box-shadow:0 .125rem .125rem rgba(0,0,0,.1);border-top:1px solid #eee}.container-standard[data-v-2ab56dd5]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}.container-standard>div.flex[data-v-2ab56dd5]{height:100%}.nav>ul[data-v-2ab56dd5]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-2ab56dd5]{padding:10px 16px;border-bottom:1px solid transparent;position:relative;top:0;transition:.2s;display:inline-block;color:#000}.nav>ul>li>a[data-v-2ab56dd5]:hover{color:#000;text-decoration:none;position:relative;top:2px}.nav>ul>li>a.nuxt-link-active[data-v-2ab56dd5],.nav>ul>li>a.nuxt-link-exact-active[data-v-2ab56dd5]{color:#000;text-decoration:none;font-weight:600}.nav>ul>li>a[data-v-2ab56dd5]{color:rgba(0,0,0,.72157);line-height:24px;text-decoration:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/admin/_common/Hero.vue?vue&type=template&id=05b6f733&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-hero grid\" data-v-05b6f733><div class=\"grid justify-items-start\" data-v-05b6f733><h1 class=\"h3\" data-v-05b6f733>"+_vm._ssrEscape(_vm._s(_vm.h1))+"</h1> "+((_vm.h2)?("<h3 class=\"h1\" data-v-05b6f733>"+_vm._ssrEscape(_vm._s(_vm.h2))+"</h3>"):"<!---->")+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/_common/Hero.vue?vue&type=template&id=05b6f733&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/admin/_common/Hero.vue?vue&type=script&lang=js&
//
//
//
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
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/_common/Hero.vue?vue&type=script&lang=js&
 /* harmony default export */ var _common_Herovue_type_script_lang_js_ = (Herovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/_common/Hero.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(78)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _common_Herovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "05b6f733",
  "d48f059c"
  
)

/* harmony default export */ var Hero = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/admin/_common/SubNav.vue?vue&type=template&id=2ab56dd5&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard grid justify-items-end\" data-v-2ab56dd5>","</div>",[_vm._ssrNode("<div class=\"flex wrap align-items-center justify-content-space-between\" data-v-2ab56dd5>","</div>",[_vm._ssrNode("<div class=\"nav\" data-v-2ab56dd5>","</div>",[_vm._ssrNode("<ul class=\"flex wrap show-md align-items-center\" data-v-2ab56dd5>","</ul>",[_vm._ssrNode("<li data-v-2ab56dd5>","</li>",[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/admin/orders"}},[_vm._v("Objednávky")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-2ab56dd5>","</li>",[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/admin/categories"}},[_vm._v("Kategórie")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-2ab56dd5>","</li>",[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/admin/tags"}},[_vm._v("Značky")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-2ab56dd5>","</li>",[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/admin/titles"}},[_vm._v("Knižné tituly")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-2ab56dd5>","</li>",[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/admin/storage"}},[_vm._v("Sklad")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-2ab56dd5>","</li>",[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/admin/users"}},[_vm._v("Používatelia")])],1)],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/_common/SubNav.vue?vue&type=template&id=2ab56dd5&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/admin/_common/SubNav.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
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
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/_common/SubNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var _common_SubNavvue_type_script_lang_js_ = (SubNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/_common/SubNav.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(80)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _common_SubNavvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2ab56dd5",
  "57b8f90a"
  
)

/* harmony default export */ var SubNav = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map