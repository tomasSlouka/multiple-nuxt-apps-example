exports.ids = [27];
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

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-love.88c6eac.svg";

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(132);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("d395a632", content, true, context)
};

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_style_index_0_id_7d8a2f2d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(122);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_style_index_0_id_7d8a2f2d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_style_index_0_id_7d8a2f2d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_style_index_0_id_7d8a2f2d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_style_index_0_id_7d8a2f2d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container-standard[data-v-7d8a2f2d]{padding:10px}.box[data-v-7d8a2f2d]{background-color:#f7f7f7;border-bottom:6px solid #eee;padding:20px;border-radius:4px}img[data-v-7d8a2f2d]{border-radius:20px;max-height:220px}#filter[data-v-7d8a2f2d]{background-color:#f7f7f7;padding:30px;border-bottom:6px solid rgba(255,212,1,.32157);border-radius:4px}#filter li[data-v-7d8a2f2d]{list-style:none}.readmore[data-v-7d8a2f2d]{text-decoration:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/home/Books.vue?vue&type=template&id=7d8a2f2d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard grid gap-30 md-col-2 auto align-items-start\" data-v-7d8a2f2d>","</div>",[_vm._ssrNode("<div class=\"grid gap-10\" data-v-7d8a2f2d><h4 data-v-7d8a2f2d>Filtruj, <span class=\"font14\" data-v-7d8a2f2d>filtruj,</span> <span class=\"font12\" data-v-7d8a2f2d>vykrúcaj...</span></h4> <div id=\"filter\" class=\"minw250\" data-v-7d8a2f2d><ul data-v-7d8a2f2d><li data-v-7d8a2f2d>Najnovšie</li> <li data-v-7d8a2f2d>Najoblubenejšie</li> <li data-v-7d8a2f2d>Špecialne pre teba</li></ul></div></div> "),_vm._ssrNode("<div class=\"grid gap-10\" data-v-7d8a2f2d>","</div>",[_vm._ssrNode("<h4 data-v-7d8a2f2d>Najnovšie knižky</h4> "),_vm._ssrNode("<div class=\"grid gap-30\" data-v-7d8a2f2d>","</div>",_vm._l((_vm.bookList.data),function(item){return _vm._ssrNode("<div class=\"box grid gap-20 align-content-start align-items-start md-col-3 auto\" data-v-7d8a2f2d>","</div>",[_vm._ssrNode("<div data-v-7d8a2f2d><img src=\"https://fakeimg.pl/130x220\" alt class=\"testbook\" data-v-7d8a2f2d></div> "),_vm._ssrNode("<div class=\"grid gap-10\" data-v-7d8a2f2d>","</div>",[_vm._ssrNode("<h3 data-v-7d8a2f2d>"+_vm._ssrEscape(_vm._s(item.name))+"</h3> <div class=\"grid col-2 auto justify-content-start align-items-center gap-20\" data-v-7d8a2f2d><p class=\"small strong\" data-v-7d8a2f2d>"+_vm._ssrEscape(_vm._s(item.author))+"</p></div> <p data-v-7d8a2f2d>"+_vm._ssrEscape(_vm._s(item.short_text == "" ? item.long_text.slice(0,180) + "..." : item.short_text))+"</p> "),_vm._ssrNode("<p class=\"small\" data-v-7d8a2f2d>","</p>",[_c('nuxt-link',{staticClass:"strong",attrs:{"to":"/kniznica/" + item.id + "/" + item.url}},[_vm._v("Viac o knihe »")])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"align-self-end grid gap-10 justify-items-end justify-self-end\" data-v-7d8a2f2d>","</div>",[_vm._ssrNode("<div class=\"flex wrap justify-content-end maxw160\" data-v-7d8a2f2d>"+(_vm._ssrList((item.categories == null ? [] : item.categories.split(',')),function(cat){return ("<span class=\"tag white\" data-v-7d8a2f2d>"+_vm._ssrEscape(_vm._s(cat))+"</span>")}))+"</div> <div class=\"grid col-3 auto\" data-v-7d8a2f2d><h2 data-v-7d8a2f2d>"+_vm._ssrEscape(_vm._s(item.price))+"</h2> <p class=\"small align-self-center mt5 ml5\" data-v-7d8a2f2d>kreditov</p></div> <div data-v-7d8a2f2d>"+((item.stock_count_available == 0 && item.stock_count_borrowed > 0)?("<p class=\"small strong red\" data-v-7d8a2f2d>Všetko sme vypožičali</p>"):"<!---->")+" "+((item.stock_count_available == 0 && item.stock_count_all == 0)?("<p class=\"small strong red\" data-v-7d8a2f2d>Dočasne nedostupná</p>"):"<!---->")+" "+((item.stock_count_available >= 1)?("<p class=\"small strong green\" data-v-7d8a2f2d>Dostupné ihneď</p>"):"<!---->")+"</div> "),(_vm.$store.getters['auth/isUserLoggedIn'])?_vm._ssrNode("<div class=\"align-self-end grid align-items-center col-2 auto gap-20\" data-v-7d8a2f2d>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(121)))+" alt class=\"love\" data-v-7d8a2f2d> "+((item.stock_count_available >= 1)?("<button class=\"button cta black\" data-v-7d8a2f2d>Požičať</button>"):"<!---->")+" "+((item.stock_count_available == 0 && item.stock_count_borrowed > 0)?("<button class=\"button cta white small\" data-v-7d8a2f2d>Sledovať dostupnosť</button>"):"<!---->")+" "+((item.stock_count_available == 0 && item.stock_count_all == 0)?("<button class=\"button cta red\" data-v-7d8a2f2d>Nedostupné</button>"):"<!---->"))],2):_vm._ssrNode("<div class=\"align-self-end grid align-items-center\" data-v-7d8a2f2d>","</div>",[(item.stock_count_available >= 1)?_c('nuxt-link',{staticClass:"button cta black",attrs:{"to":"/prihlasenie?from=kniznica"}},[_vm._v("Požičať")]):_vm._e(),_vm._ssrNode(" "),(item.stock_count_available == 0 && item.stock_count_borrowed > 0)?_c('nuxt-link',{staticClass:"button cta white small",attrs:{"to":"/prihlasenie"}},[_vm._v("Sledovať dostupnosť")]):_vm._e(),_vm._ssrNode(" "+((item.stock_count_available == 0 && item.stock_count_all == 0)?("<button class=\"button cta red\" data-v-7d8a2f2d>Nedostupné</button>"):"<!---->"))],2)],2)],2)}),0)],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/home/Books.vue?vue&type=template&id=7d8a2f2d&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/home/Books.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Booksvue_type_script_lang_js_ = ({
  props: ['bookList'],
  methods: {
    async addItem(data, e) {
      await this.$axios.$post('/order/additem', {
        "book_id": data.book_id
      }).then(response => {
        console.log(response);
        e.target.innerText = 'Knižka pridaná!';
        setTimeout(() => this.submitSuccess = false, 4000); // console.log(e.target.innerText)

        this.$router.push('/user/books/basket');
      }, error => {
        console.log(error);
      });
    }

  }
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/home/Books.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_Booksvue_type_script_lang_js_ = (Booksvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/home/Books.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(131)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_Booksvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7d8a2f2d",
  "27e3d7f1"
  
)

/* harmony default export */ var Books = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(209);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("ea95fc12", content, true, context)
};

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(211);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("eda32022", content, true, context)
};

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_3deacfc5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(162);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_3deacfc5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_3deacfc5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_3deacfc5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_3deacfc5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".component[data-v-3deacfc5]{padding:1px;background-color:rgba(255,212,1,.25098);border-bottom:5px solid #ffd401}h1[data-v-3deacfc5]{font-size:2.5em}.logo[data-v-3deacfc5]{height:70px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_More_vue_vue_type_style_index_0_id_b262dee8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(163);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_More_vue_vue_type_style_index_0_id_b262dee8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_More_vue_vue_type_style_index_0_id_b262dee8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_More_vue_vue_type_style_index_0_id_b262dee8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_More_vue_vue_type_style_index_0_id_b262dee8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".component[data-v-b262dee8]{background-color:#fbf7ed;padding:1px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/pages/index.vue?vue&type=template&id=45cac5e8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_c('SubNav'),_vm._ssrNode(" "),_c('Hero'),_vm._ssrNode(" "),_c('More'),_vm._ssrNode(" "),_c('Newsletter')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/pages/index.vue?vue&type=template&id=45cac5e8&

// EXTERNAL MODULE: ./apps/tulaveknizky.sk/components/page/home/SubNav.vue + 4 modules
var SubNav = __webpack_require__(104);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/home/Hero.vue?vue&type=template&id=3deacfc5&scoped=true&
var Herovue_type_template_id_3deacfc5_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard grid\" data-v-3deacfc5>","</div>",[_vm._ssrNode("<div class=\"grid gap-20 justify-items-start\" data-v-3deacfc5>","</div>",[_vm._ssrNode("<h1 data-v-3deacfc5>Online požičovňa kníh.</h1> <h2 data-v-3deacfc5>Najnovšie tituly. Bez navštevy knižnice.</h2> <p class=\"maxw600\" data-v-3deacfc5>\n                Čitaš veľa, no v bežných knižniciach nedostať najnovšie tituly? S Túlavými knižkami tento problém mať nebudeš. Vypožičaj si z dostupných titulov a ušetri nielen peňiažky ale aj čas.\n            </p> "),_vm._ssrNode("<div class=\"mt30\" data-v-3deacfc5>","</div>",[_c('nuxt-link',{staticClass:"button black cta big",attrs:{"to":"/kniznica"}},[_vm._v("Chcem si požičať knižku")])],1)],2)])])}
var Herovue_type_template_id_3deacfc5_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/home/Hero.vue?vue&type=template&id=3deacfc5&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/home/Hero.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Herovue_type_script_lang_js_ = ({// props: ['domainList'],
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/home/Hero.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_Herovue_type_script_lang_js_ = (Herovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/home/Hero.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(208)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_Herovue_type_script_lang_js_,
  Herovue_type_template_id_3deacfc5_scoped_true_render,
  Herovue_type_template_id_3deacfc5_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "3deacfc5",
  "333e5c03"
  
)

/* harmony default export */ var Hero = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/home/More.vue?vue&type=template&id=b262dee8&scoped=true&
var Morevue_type_template_id_b262dee8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-narrow\" data-v-b262dee8><div class=\"grid md-col-2 align-items-start justify-content-start gap-60\" data-v-b262dee8><div class=\"box grid gap-10\" data-v-b262dee8><h3 data-v-b262dee8>Čítaj koľko vládzeš.</h3> <p data-v-b262dee8>S Tulavými knižkami nemusiš pozerať na cenu. Dobi si nekonečný kredit, ktorý slúži ako záloha a požičiavaj si knižky pravidelne každý mesiac.</p></div> <div class=\"box grid gap-10\" data-v-b262dee8><h3 data-v-b262dee8>Viac ako 300 titulov.</h3> <p data-v-b262dee8>Naša kolekcia sa neustále rozrastá. Sledujeme trendy a obľúbené knihy čitateľov, ktoré v bežnej knižnici len tak nenájdeš.</p></div> <div class=\"box grid gap-10\" data-v-b262dee8><h3 data-v-b262dee8>Poštovné zadarmo.</h3> <p data-v-b262dee8>Každý mesiac využi možnosť požičať si knižky s poštovným zadarmo. Knihy zasielame cez službu Zasielkovňa.</p></div> <div class=\"box grid gap-10\" data-v-b262dee8><h3 data-v-b262dee8>Získaj odmenu.</h3> <p data-v-b262dee8>Staň sa členom komunity Túlavých knižiek a získaj odmeny v podobe kreditov na vypožičanie kníh alebo predlženie vypožičnej doby.</p></div></div></div>")])}
var Morevue_type_template_id_b262dee8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/home/More.vue?vue&type=template&id=b262dee8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/home/More.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Morevue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/home/More.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_Morevue_type_script_lang_js_ = (Morevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/home/More.vue



function More_injectStyles (context) {
  
  var style0 = __webpack_require__(210)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var More_component = Object(componentNormalizer["a" /* default */])(
  home_Morevue_type_script_lang_js_,
  Morevue_type_template_id_b262dee8_scoped_true_render,
  Morevue_type_template_id_b262dee8_scoped_true_staticRenderFns,
  false,
  More_injectStyles,
  "b262dee8",
  "4b15a1de"
  
)

/* harmony default export */ var More = (More_component.exports);
// EXTERNAL MODULE: ./apps/tulaveknizky.sk/components/page/home/Books.vue + 4 modules
var Books = __webpack_require__(137);

// EXTERNAL MODULE: ./apps/tulaveknizky.sk/components/page/home/Newsletter.vue + 4 modules
var Newsletter = __webpack_require__(112);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
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
  layout: 'defaultPage',
  components: {
    SubNav: SubNav["a" /* default */],
    Hero: Hero,
    More: More,
    Books: Books["a" /* default */],
    Newsletter: Newsletter["a" /* default */]
  },

  data() {
    return {
      bookList: this.$store.state.openbook.dataListFiltered
    };
  },

  async fetch({
    store
  }) {
    await store.dispatch("openbook/getDataList");
  },

  methods: {
    filterChange() {
      this.bookList = this.$store.state.openbook.dataListFiltered;
    }

  } // async asyncData({ $axios, params }) {
  //     const [domainListNewest, domainListPremium] = await Promise.all ([
  //         $axios.$get('/open/newest'),
  //         $axios.$get('/open/premium')
  //     ])
  //     return { domainListNewest, domainListPremium }
  // },

});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var tulaveknizky_sk_pagesvue_type_script_lang_js_ = (pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/pages/index.vue



function pages_injectStyles (context) {
  
  
}

/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  tulaveknizky_sk_pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  pages_injectStyles,
  null,
  "730278e6"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

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

/***/ })

};;
//# sourceMappingURL=index.js.map