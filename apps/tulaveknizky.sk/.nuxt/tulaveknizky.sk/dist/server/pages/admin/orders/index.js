exports.ids = [12];
exports.modules = {

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(132);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("ba6e792a", content, true, context)
};

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DateFormat_vue_vue_type_style_index_0_id_259a6f86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(121);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DateFormat_vue_vue_type_style_index_0_id_259a6f86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DateFormat_vue_vue_type_style_index_0_id_259a6f86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DateFormat_vue_vue_type_style_index_0_id_259a6f86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DateFormat_vue_vue_type_style_index_0_id_259a6f86_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tag[data-v-259a6f86]{display:inline-block;text-align:center}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/_system/DateFormat.vue?vue&type=template&id=259a6f86&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{class:_vm.classes},[_vm._ssrNode(_vm._ssrEscape("\n        "+_vm._s(_vm.dateFormat())+"\n    "))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/_system/DateFormat.vue?vue&type=template&id=259a6f86&scoped=true&

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
    date: String,
    format: String,
    classes: String
  },

  data() {
    return {// userName: this.$store.state.auth.userData.name,
    };
  },

  methods: {
    dateFormat() {
      if (this.date === null || this.date === undefined) return "0";
      var date_array = this.date.split(' ');
      var date = date_array[0].split('-');
      var time = date_array[1];
      var date_day = date[2];
      var date_month = date[1];
      var date_year = date[0];
      var date_string = [date_day, date_month, date_year].join('.');
      var return_string;
      if (this.format === "date") return_string = date_string;
      if (this.format === "time") return_string = time;
      if (this.format === "datetime") return_string = date_string + " " + time;
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
  
  var style0 = __webpack_require__(131)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _system_DateFormatvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "259a6f86",
  "2dc8d5cc"
  
)

/* harmony default export */ var DateFormat = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/pages/admin/orders/index.vue?vue&type=template&id=2abf1b8a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_c('SubNav'),_vm._ssrNode(" "),_c('Hero',{attrs:{"h1":"Administrácia","h2":"Objednávky"}}),_vm._ssrNode(" "),_c('ListAll',{attrs:{"orderList":_vm.orderList}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/pages/admin/orders/index.vue?vue&type=template&id=2abf1b8a&

// EXTERNAL MODULE: ./apps/tulaveknizky.sk/components/admin/_common/SubNav.vue + 4 modules
var SubNav = __webpack_require__(90);

// EXTERNAL MODULE: ./apps/tulaveknizky.sk/components/admin/_common/Hero.vue + 4 modules
var Hero = __webpack_require__(89);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/admin/orders/ListAll.vue?vue&type=template&id=da62e554&scoped=true&
var ListAllvue_type_template_id_da62e554_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard grid\" data-v-da62e554>","</div>",[_vm._ssrNode("<div class=\"grid gap-40\" data-v-da62e554>","</div>",[_vm._ssrNode("<div class=\"grid md-col-2 align-items-center\" data-v-da62e554><h2 data-v-da62e554>Zoznam</h2></div> "),_vm._ssrNode("<div class=\"grid gap-5 auto \" data-v-da62e554>","</div>",[_vm._ssrNode("<div class=\"table-wrapper justify-content-start\" data-v-da62e554>","</div>",[_vm._ssrNode("<div class=\"table grid auto col-6\" data-v-da62e554>","</div>",[_vm._ssrNode("<div class=\"table-head\" data-v-da62e554><div data-v-da62e554>Stav</div> <div data-v-da62e554>ID</div> <div data-v-da62e554>Dátum</div> <div data-v-da62e554>Meno a priezvisko</div> <div data-v-da62e554>Adresa doručenia</div> <div data-v-da62e554>Akcia</div></div> "),_vm._l((_vm.orderList.data),function(item,index){return _vm._ssrNode("<div class=\"table-row\" data-v-da62e554>","</div>",[_vm._ssrNode("<div data-v-da62e554><span"+(_vm._ssrClass(null,"status " + _vm.statusTagClass(item.status)))+" data-v-da62e554>"+_vm._ssrEscape(_vm._s(_vm.status(item.status)))+"</span></div> <div data-v-da62e554><p class=\"small\" data-v-da62e554>"+_vm._ssrEscape(_vm._s(item.id))+"</p></div> "),_vm._ssrNode("<div data-v-da62e554>","</div>",[_c('DateFormat',{attrs:{"date":item.created_at,"format":"date"}})],1),_vm._ssrNode(" <div data-v-da62e554><p data-v-da62e554>"+_vm._ssrEscape(_vm._s(item.name)+" "+_vm._s(item.surname))+"</p></div> <div data-v-da62e554><p class=\"italic small\" data-v-da62e554>"+_vm._ssrEscape(_vm._s(item.place ? item.place + "," : "")+" "+_vm._s(item.street)+", "+_vm._s(item.zip)+", "+_vm._s(item.city))+"</p></div> "),_vm._ssrNode("<div class=\"grid col-2 auto gap-5 justify-content-start justify-items-start\" data-v-da62e554>","</div>",[_c('nuxt-link',{staticClass:"button cta small white",attrs:{"to":"/admin/orders/detail/" + item.id}},[_vm._v("Detail")]),_vm._ssrNode(" <button class=\"button cta small red\" data-v-da62e554>Vymazať</button>")],2)],2)})],2)])])],2)])])}
var ListAllvue_type_template_id_da62e554_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/orders/ListAll.vue?vue&type=template&id=da62e554&scoped=true&

// EXTERNAL MODULE: ./apps/tulaveknizky.sk/components/_system/DateFormat.vue + 4 modules
var DateFormat = __webpack_require__(134);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/admin/orders/ListAll.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['orderList'],
  components: {
    DateFormat: DateFormat["a" /* default */]
  },

  data() {
    return {};
  },

  methods: {
    async deleteButton(data) {
      await this.$store.dispatch("order/deleteItem", data);
    },

    status(status) {
      if (status == 0) {
        return "Nepotvrdená";
      }

      if (status == 1) {
        return "Nová";
      }

      if (status == 2) {
        return "Pripravená";
      }

      if (status == 3) {
        return "Na ceste";
      }

      if (status == 4) {
        return "Doručená";
      }
    },

    statusTagClass(status) {
      if (status == 0) {
        return "gray";
      }

      if (status == 1) {
        return "red";
      }

      if (status == 2) {
        return "orange";
      }

      if (status == 3) {
        return "yellow";
      }

      if (status == 4) {
        return "green";
      }
    }

  }
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/orders/ListAll.vue?vue&type=script&lang=js&
 /* harmony default export */ var orders_ListAllvue_type_script_lang_js_ = (ListAllvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/orders/ListAll.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  orders_ListAllvue_type_script_lang_js_,
  ListAllvue_type_template_id_da62e554_scoped_true_render,
  ListAllvue_type_template_id_da62e554_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "da62e554",
  "27d16e12"
  
)

/* harmony default export */ var ListAll = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/pages/admin/orders/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var ordersvue_type_script_lang_js_ = ({
  layout: 'defaultAdmin',
  components: {
    SubNav: SubNav["a" /* default */],
    Hero: Hero["a" /* default */],
    ListAll: ListAll
  },

  data() {
    return {
      orderList: this.$store.state.order.dataListFiltered
    };
  },

  async fetch({
    store
  }) {
    await store.dispatch("order/getDataList");
  },

  methods: {
    filterChange() {
      this.orderList = this.$store.state.order.dataListFiltered;
    }

  }
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/pages/admin/orders/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_ordersvue_type_script_lang_js_ = (ordersvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/pages/admin/orders/index.vue



function orders_injectStyles (context) {
  
  
}

/* normalize component */

var orders_component = Object(componentNormalizer["a" /* default */])(
  admin_ordersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  orders_injectStyles,
  null,
  "1d5be246"
  
)

/* harmony default export */ var orders = __webpack_exports__["default"] = (orders_component.exports);

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("69a9fc1e", content, true, context)
};

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(88);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("a957082a", content, true, context)
};

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_403ff72b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_403ff72b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_403ff72b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_403ff72b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_403ff72b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".component[data-v-403ff72b]{padding:1px;background-color:rgba(255,212,1,.25098);border-bottom:10px solid #ffd401}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNav_vue_vue_type_style_index_0_id_8e91234c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNav_vue_vue_type_style_index_0_id_8e91234c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNav_vue_vue_type_style_index_0_id_8e91234c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNav_vue_vue_type_style_index_0_id_8e91234c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNav_vue_vue_type_style_index_0_id_8e91234c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".component[data-v-8e91234c]{background-color:#fff;box-shadow:0 .125rem .125rem rgba(0,0,0,.1);border-top:1px solid #eee}.container-standard[data-v-8e91234c]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}.container-standard>div.flex[data-v-8e91234c]{height:100%}.nav>ul[data-v-8e91234c]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-8e91234c]{padding:10px 16px;border-bottom:1px solid transparent;position:relative;top:0;transition:.2s;display:inline-block;color:#000}.nav>ul>li>a[data-v-8e91234c]:hover{color:#000;text-decoration:none;position:relative;top:2px}.nav>ul>li>a.nuxt-link-active[data-v-8e91234c],.nav>ul>li>a.nuxt-link-exact-active[data-v-8e91234c]{color:#000;text-decoration:none;font-weight:600}.nav>ul>li>a[data-v-8e91234c]{color:rgba(0,0,0,.72157);line-height:24px;text-decoration:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/admin/_common/Hero.vue?vue&type=template&id=403ff72b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-hero grid\" data-v-403ff72b><div class=\"grid justify-items-start\" data-v-403ff72b><h3 class=\"h3\" data-v-403ff72b>"+_vm._ssrEscape(_vm._s(_vm.h1))+"</h3> "+((_vm.h2)?("<h1 class=\"h1\" data-v-403ff72b>"+_vm._ssrEscape(_vm._s(_vm.h2))+"</h1>"):"<!---->")+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/_common/Hero.vue?vue&type=template&id=403ff72b&scoped=true&

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
  
  var style0 = __webpack_require__(85)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _common_Herovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "403ff72b",
  "d48f059c"
  
)

/* harmony default export */ var Hero = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 90:
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
  
  var style0 = __webpack_require__(87)
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