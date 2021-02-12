exports.ids = [23];
exports.modules = {

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/pages/admin/users/index.vue?vue&type=template&id=1b213e5a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_c('SubNav'),_vm._ssrNode(" "),_c('Hero',{attrs:{"h1":"Administrácia","h2":"Používatelia"}}),_vm._ssrNode(" "),_c('ListAll',{attrs:{"userList":_vm.userList}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/pages/admin/users/index.vue?vue&type=template&id=1b213e5a&

// EXTERNAL MODULE: ./apps/tulaveknizky.sk/components/admin/_common/SubNav.vue + 4 modules
var SubNav = __webpack_require__(88);

// EXTERNAL MODULE: ./apps/tulaveknizky.sk/components/admin/_common/Hero.vue + 4 modules
var Hero = __webpack_require__(87);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/admin/users/ListAll.vue?vue&type=template&id=62566624&scoped=true&
var ListAllvue_type_template_id_62566624_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard grid\" data-v-62566624>","</div>",[_vm._ssrNode("<div class=\"grid gap-40\" data-v-62566624>","</div>",[_vm._ssrNode("<div class=\"grid md-col-2 align-items-center\" data-v-62566624>","</div>",[_vm._ssrNode("<h2 data-v-62566624>Zoznam</h2> "),_c('nuxt-link',{staticClass:"button cta black justify-self-end",attrs:{"to":"/admin/users/add"}},[_vm._v("Nový používateľ")])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"grid gap-5 auto \" data-v-62566624>","</div>",[_vm._ssrNode("<div class=\"table-wrapper justify-content-start\" data-v-62566624>","</div>",[_vm._ssrNode("<div class=\"table grid auto col-6\" data-v-62566624>","</div>",[_vm._ssrNode("<div class=\"table-head\" data-v-62566624><div data-v-62566624>Názov</div> <div data-v-62566624>Meno</div> <div data-v-62566624>Priezvisko</div> <div data-v-62566624>Dátum registrácie</div> <div data-v-62566624>Posledné prihlásenie</div> <div data-v-62566624>Akcia</div></div> "),_vm._l((_vm.userList.data),function(item){return _vm._ssrNode("<div class=\"table-row\" data-v-62566624>","</div>",[_vm._ssrNode("<div data-v-62566624><p class=\"strong\" data-v-62566624>"+_vm._ssrEscape(_vm._s(item.email))+"</p></div> <div data-v-62566624><p data-v-62566624>"+_vm._ssrEscape(_vm._s(item.name))+"</p></div> <div data-v-62566624><p data-v-62566624>"+_vm._ssrEscape(_vm._s(item.surname))+"</p></div> "),_vm._ssrNode("<div data-v-62566624>","</div>",[_c('DateFormat',{attrs:{"date":item.created_at}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-62566624>","</div>",[_c('DateFormat',{attrs:{"date":item.last_online_at}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"grid col-2 auto gap-5 justify-content-start justify-items-start\" data-v-62566624>","</div>",[_c('nuxt-link',{staticClass:"button cta small white",attrs:{"to":"/admin/users/detail/" + item.id}},[_vm._v("Upraviť")])],1)],2)})],2)])])],2)])])}
var ListAllvue_type_template_id_62566624_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/users/ListAll.vue?vue&type=template&id=62566624&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/_system/DateFormat.vue?vue&type=template&id=504f6eba&scoped=true&
var DateFormatvue_type_template_id_504f6eba_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dateformat"},[_vm._ssrNode("<span class=\"tag gray\" data-v-504f6eba>"+_vm._ssrEscape("\n        "+_vm._s(_vm.dateFormat(_vm.date))+"\n    ")+"</span>")])}
var DateFormatvue_type_template_id_504f6eba_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/_system/DateFormat.vue?vue&type=template&id=504f6eba&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/_system/DateFormat.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var DateFormatvue_type_script_lang_js_ = ({
  props: {
    date: String
  },

  data() {
    return {// userName: this.$store.state.auth.userData.name,
    };
  },

  methods: {
    dateFormat(date) {
      var date_array = date.split(' ');
      var date = date_array[0].split('-');
      var time = date_array[1];
      var date_day = date[2];
      var date_month = date[1];
      var date_year = date[0];
      var return_string = [date_day, date_month, date_year].join('.');
      return_string = return_string + " " + time;
      return return_string;
    }

  }
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/_system/DateFormat.vue?vue&type=script&lang=js&
 /* harmony default export */ var _system_DateFormatvue_type_script_lang_js_ = (DateFormatvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/_system/DateFormat.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _system_DateFormatvue_type_script_lang_js_,
  DateFormatvue_type_template_id_504f6eba_scoped_true_render,
  DateFormatvue_type_template_id_504f6eba_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "504f6eba",
  "2dc8d5cc"
  
)

/* harmony default export */ var DateFormat = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/admin/users/ListAll.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['userList'],
  components: {
    DateFormat: DateFormat
  },

  data() {
    return {};
  },

  methods: {
    async deleteButton(data) {
      await this.$store.dispatch("user/deleteItem", data);
    }

  }
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/users/ListAll.vue?vue&type=script&lang=js&
 /* harmony default export */ var users_ListAllvue_type_script_lang_js_ = (ListAllvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/users/ListAll.vue



function ListAll_injectStyles (context) {
  
  
}

/* normalize component */

var ListAll_component = Object(componentNormalizer["a" /* default */])(
  users_ListAllvue_type_script_lang_js_,
  ListAllvue_type_template_id_62566624_scoped_true_render,
  ListAllvue_type_template_id_62566624_scoped_true_staticRenderFns,
  false,
  ListAll_injectStyles,
  "62566624",
  "dc4fafce"
  
)

/* harmony default export */ var ListAll = (ListAll_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/pages/admin/users/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var usersvue_type_script_lang_js_ = ({
  layout: 'defaultAdmin',
  components: {
    SubNav: SubNav["a" /* default */],
    Hero: Hero["a" /* default */],
    ListAll: ListAll
  },

  data() {
    return {
      userList: this.$store.state.user.dataListFiltered
    };
  },

  async fetch({
    store
  }) {
    await store.dispatch("user/getDataList");
  },

  methods: {
    filterChange() {
      this.userList = this.$store.state.user.dataListFiltered;
    }

  }
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/pages/admin/users/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_usersvue_type_script_lang_js_ = (usersvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/pages/admin/users/index.vue



function users_injectStyles (context) {
  
  
}

/* normalize component */

var users_component = Object(componentNormalizer["a" /* default */])(
  admin_usersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  users_injectStyles,
  null,
  "2fcdb3ac"
  
)

/* harmony default export */ var users = __webpack_exports__["default"] = (users_component.exports);

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