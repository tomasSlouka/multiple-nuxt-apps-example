exports.ids = [20];
exports.modules = {

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(160);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("fd778498", content, true, context)
};

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListAll_vue_vue_type_style_index_0_id_bb801282_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(124);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListAll_vue_vue_type_style_index_0_id_bb801282_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListAll_vue_vue_type_style_index_0_id_bb801282_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListAll_vue_vue_type_style_index_0_id_bb801282_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListAll_vue_vue_type_style_index_0_id_bb801282_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/pages/admin/titles/index.vue?vue&type=template&id=30288207&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_c('SubNav'),_vm._ssrNode(" "),_c('Hero',{attrs:{"h1":"Administrácia","h2":"Knižné tituly"}}),_vm._ssrNode(" "),_c('ListAll',{attrs:{"bookList":_vm.bookList}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/pages/admin/titles/index.vue?vue&type=template&id=30288207&

// EXTERNAL MODULE: ./apps/tulaveknizky.sk/components/admin/_common/SubNav.vue + 4 modules
var SubNav = __webpack_require__(88);

// EXTERNAL MODULE: ./apps/tulaveknizky.sk/components/admin/_common/Hero.vue + 4 modules
var Hero = __webpack_require__(87);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/admin/titles/ListAll.vue?vue&type=template&id=bb801282&scoped=true&
var ListAllvue_type_template_id_bb801282_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard grid\" data-v-bb801282>","</div>",[_vm._ssrNode("<div class=\"grid gap-40\" data-v-bb801282>","</div>",[_vm._ssrNode("<div class=\"grid md-col-2 align-items-center\" data-v-bb801282>","</div>",[_vm._ssrNode("<h2 data-v-bb801282>Zoznam </h2> "),_c('nuxt-link',{staticClass:"button cta black justify-self-end",attrs:{"to":"/admin/titles/add"}},[_vm._v("Pridať nový knižný titul")])],2),_vm._ssrNode(" <div data-v-bb801282><p class=\"small\" data-v-bb801282>\n                    Zobrazujem <strong data-v-bb801282>"+_vm._ssrEscape(_vm._s(_vm.bookList.count))+"</strong> knižných titulov.\n                </p></div> "),_vm._ssrNode("<div class=\"grid gap-5 auto \" data-v-bb801282>","</div>",[_vm._ssrNode("<div class=\"table-wrapper justify-content-start\" data-v-bb801282>","</div>",[_vm._ssrNode("<div class=\"table grid auto col-5\" data-v-bb801282>","</div>",[_vm._ssrNode("<div class=\"table-head\" data-v-bb801282><div class=\"minw200\" data-v-bb801282>Názov</div> <div data-v-bb801282>Cena</div> <div data-v-bb801282>Kategórie</div> <div data-v-bb801282>Sklad</div> <div class=\"minw300\" data-v-bb801282>Akcia</div></div> "),_vm._l((_vm.bookList.data),function(item,index){return _vm._ssrNode("<div class=\"table-row\" data-v-bb801282>","</div>",[_vm._ssrNode("<div data-v-bb801282><p class=\"strong\" data-v-bb801282>"+_vm._ssrEscape(_vm._s(item.name))+"</p><p class=\"italic small\" data-v-bb801282>"+_vm._ssrEscape(_vm._s(item.author))+"</p></div> <div class=\"grid justify-items-start\" data-v-bb801282><span class=\"tag yellow\" data-v-bb801282>"+_vm._ssrEscape(_vm._s(item.price)+" kreditov")+"</span></div> <div data-v-bb801282><div class=\"flex wrap\" data-v-bb801282>"+(_vm._ssrList((item.categories == null ? [] : item.categories.split(',')),function(cat){return ("<span class=\"tag gray\" data-v-bb801282>"+_vm._ssrEscape(_vm._s(cat))+"</span>")}))+"</div></div> <div data-v-bb801282><p data-v-bb801282>"+_vm._ssrEscape(_vm._s(item.stock_count_all)+"/"+_vm._s(item.stock_count_available)+"/"+_vm._s(item.stock_count_borrowed))+"</p></div> "),_vm._ssrNode("<div class=\"grid col-3 auto gap-5 justify-content-start justify-items-start\" data-v-bb801282>","</div>",[_c('nuxt-link',{staticClass:"button cta small black",attrs:{"to":"/admin/titles/detail/" + item.id}},[_vm._v("Upraviť")]),_vm._ssrNode(" <button class=\"button cta small white\" data-v-bb801282>+ Pridať do skladu</button> <button class=\"button cta small red\" data-v-bb801282>Vymazať</button>")],2)],2)})],2)])])],2)])])}
var ListAllvue_type_template_id_bb801282_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/titles/ListAll.vue?vue&type=template&id=bb801282&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/admin/titles/ListAll.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ListAllvue_type_script_lang_js_ = ({
  props: ['bookList'],

  data() {
    return {// submitSuccess: false,
      // submitError: false,
      // submitText: 'Knižka pridaná!',
      // categories: this.bookList.data.categories === null ? [] : this.bookList.data.categories.split(","),
      // tags: this.bookList.data.tags === null ? [] : this.bookList.data.tags.split(","),
    };
  },

  methods: {
    async addBookToStock(book_id, e) {
      await this.$axios.$post('/stock', {
        "book_id": book_id
      }).then(response => {
        console.log(response);
        e.target.innerText = 'Knižka pridaná!';
        setTimeout(() => this.submitSuccess = false, 4000); // console.log(e.target.innerText)
        // this.$router.push('/admin/stock/detail/'+ response.id)
      }, error => {
        console.log(error);
      });
    },

    async deleteButton(data) {
      await this.$store.dispatch("book/deleteItem", data);
    }

  }
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/titles/ListAll.vue?vue&type=script&lang=js&
 /* harmony default export */ var titles_ListAllvue_type_script_lang_js_ = (ListAllvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/titles/ListAll.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(159)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  titles_ListAllvue_type_script_lang_js_,
  ListAllvue_type_template_id_bb801282_scoped_true_render,
  ListAllvue_type_template_id_bb801282_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "bb801282",
  "3e8c9348"
  
)

/* harmony default export */ var ListAll = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/pages/admin/titles/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var titlesvue_type_script_lang_js_ = ({
  layout: 'defaultAdmin',
  components: {
    SubNav: SubNav["a" /* default */],
    Hero: Hero["a" /* default */],
    ListAll: ListAll
  },

  data() {
    return {
      bookList: this.$store.state.book.dataListFiltered
    };
  },

  async fetch({
    store
  }) {
    await store.dispatch("book/getDataList");
  },

  methods: {
    filterChange() {
      this.bookList = this.$store.state.book.dataListFiltered;
    }

  }
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/pages/admin/titles/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_titlesvue_type_script_lang_js_ = (titlesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/pages/admin/titles/index.vue



function titles_injectStyles (context) {
  
  
}

/* normalize component */

var titles_component = Object(componentNormalizer["a" /* default */])(
  admin_titlesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  titles_injectStyles,
  null,
  "6fe10993"
  
)

/* harmony default export */ var titles = __webpack_exports__["default"] = (titles_component.exports);

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("40171c24", content, true, context)
};

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("a957082a", content, true, context)
};

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_05b6f733_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_05b6f733_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_05b6f733_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_05b6f733_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_05b6f733_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".component[data-v-05b6f733]{padding:1px;background-color:rgba(255,212,1,.25098);border-bottom:10px solid #ffd401}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNav_vue_vue_type_style_index_0_id_8e91234c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNav_vue_vue_type_style_index_0_id_8e91234c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNav_vue_vue_type_style_index_0_id_8e91234c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNav_vue_vue_type_style_index_0_id_8e91234c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNav_vue_vue_type_style_index_0_id_8e91234c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".component[data-v-8e91234c]{background-color:#fff;box-shadow:0 .125rem .125rem rgba(0,0,0,.1);border-top:1px solid #eee}.container-standard[data-v-8e91234c]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}.container-standard>div.flex[data-v-8e91234c]{height:100%}.nav>ul[data-v-8e91234c]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-8e91234c]{padding:10px 16px;border-bottom:1px solid transparent;position:relative;top:0;transition:.2s;display:inline-block;color:#000}.nav>ul>li>a[data-v-8e91234c]:hover{color:#000;text-decoration:none;position:relative;top:2px}.nav>ul>li>a.nuxt-link-active[data-v-8e91234c],.nav>ul>li>a.nuxt-link-exact-active[data-v-8e91234c]{color:#000;text-decoration:none;font-weight:600}.nav>ul>li>a[data-v-8e91234c]{color:rgba(0,0,0,.72157);line-height:24px;text-decoration:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 87:
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
  
  var style0 = __webpack_require__(83)
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

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/admin/_common/SubNav.vue?vue&type=template&id=8e91234c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard grid justify-items-end\" data-v-8e91234c>","</div>",[_vm._ssrNode("<div class=\"flex wrap align-items-center justify-content-space-between\" data-v-8e91234c>","</div>",[_vm._ssrNode("<div class=\"nav\" data-v-8e91234c>","</div>",[_vm._ssrNode("<ul class=\"flex wrap show-md align-items-center\" data-v-8e91234c>","</ul>",[_vm._ssrNode("<li data-v-8e91234c>","</li>",[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/admin/orders"}},[_vm._v("Objednávky")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-8e91234c>","</li>",[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/admin/categories"}},[_vm._v("Kategórie")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-8e91234c>","</li>",[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/admin/tags"}},[_vm._v("Značky")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-8e91234c>","</li>",[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/admin/titles"}},[_vm._v("Knižné tituly")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-8e91234c>","</li>",[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/admin/stock"}},[_vm._v("Sklad")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-8e91234c>","</li>",[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/admin/users"}},[_vm._v("Používatelia")])],1)],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/_common/SubNav.vue?vue&type=template&id=8e91234c&scoped=true&

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
  
  var style0 = __webpack_require__(85)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _common_SubNavvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8e91234c",
  "57b8f90a"
  
)

/* harmony default export */ var SubNav = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map