exports.ids = [20];
exports.modules = {

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

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(333);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("49eecb90", content, true, context)
};

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletters_vue_vue_type_style_index_0_id_3bce2f24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(190);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletters_vue_vue_type_style_index_0_id_3bce2f24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletters_vue_vue_type_style_index_0_id_3bce2f24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletters_vue_vue_type_style_index_0_id_3bce2f24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletters_vue_vue_type_style_index_0_id_3bce2f24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletters_vue_vue_type_style_index_0_id_3bce2f24_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(118);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(119);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".box[data-v-3bce2f24]{padding:0;transition:all .6s cubic-bezier(.165,.84,.44,1)}.box[data-v-3bce2f24]:hover{transform:scale(1.02)}.newsletter>.cover[data-v-3bce2f24]{width:100%;height:130px;background-color:#fff;border-bottom:1px solid #f5f5f5;border-radius:8px 8px 0 0;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:cover;background-position:50%}.newsletter .header[data-v-3bce2f24]{position:relative;padding:10px 30px 30px}.newsletter .header>.avatar[data-v-3bce2f24]{position:relative;width:80px}.newsletter .header>.avatar>div[data-v-3bce2f24]{position:absolute;top:-40px;left:0;background-color:#eee;background-size:cover;background-position:50%;border-radius:100px;border:5px solid #fff;height:80px;width:80px;padding:7px}.newsletter>.body[data-v-3bce2f24]{padding:20px 30px 30px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/pages/admin/subscriber/subscriptions/newsletters/index.vue?vue&type=template&id=7954bb2d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_c('NewslettersIntro'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-narrow grid gap-60\" data-v-7954bb2d>","</div>",[_c('Newsletters',{attrs:{"newsletterList":_vm.newsletterList}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/pages/admin/subscriber/subscriptions/newsletters/index.vue?vue&type=template&id=7954bb2d&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/subscriber/subscriptions/newsletters/NewslettersIntro.vue?vue&type=template&id=75262f31&scoped=true&
var NewslettersIntrovue_type_template_id_75262f31_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"wrapper\" data-v-75262f31><div class=\"container-narrow grid gap-20\" data-v-75262f31><h2 data-v-75262f31>Newsletters browser</h2> <p data-v-75262f31>ManyLetter is the place where you can find all kinds of newsletters from big to small, general to specific. Use search or filter to find newsletters you may like.</p></div></div>")])}
var NewslettersIntrovue_type_template_id_75262f31_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/subscriptions/newsletters/NewslettersIntro.vue?vue&type=template&id=75262f31&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/subscriber/subscriptions/newsletters/NewslettersIntro.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var NewslettersIntrovue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/subscriptions/newsletters/NewslettersIntro.vue?vue&type=script&lang=js&
 /* harmony default export */ var newsletters_NewslettersIntrovue_type_script_lang_js_ = (NewslettersIntrovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/subscriptions/newsletters/NewslettersIntro.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  newsletters_NewslettersIntrovue_type_script_lang_js_,
  NewslettersIntrovue_type_template_id_75262f31_scoped_true_render,
  NewslettersIntrovue_type_template_id_75262f31_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "75262f31",
  "382cdc0f"
  
)

/* harmony default export */ var NewslettersIntro = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/subscriber/subscriptions/newsletters/Newsletters.vue?vue&type=template&id=3bce2f24&scoped=true&
var Newslettersvue_type_template_id_3bce2f24_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"grid gap-20 md-col-2\" data-v-3bce2f24>","</div>",_vm._l((_vm.newsletterList.data),function(item){return _vm._ssrNode("<div class=\"grid box\" data-v-3bce2f24>","</div>",[_c('nuxt-link',{staticClass:"grid pointer newsletter align-content-start",attrs:{"to":"/admin/subscriber/subscriptions/newsletters/detail/" + item.id,"tag":"div"}},[_c('div',{staticClass:"cover",style:('background-image: url(https://storage.manyletter.com/ymello_filestorage/img/newsletter_cover/' + item.cover + ')')}),_vm._v(" "),_c('div',{staticClass:"header grid gap-20"},[_c('div',{staticClass:"avatar"},[_c('div',{style:('background-image: url(https://storage.manyletter.com/ymello_filestorage/img/newsletter_avatar/' + item.avatar + ')')})])]),_vm._v(" "),_c('div',{staticClass:"body grid gap-20 auto align-items-start justify-items-start justify-content-start"},[_c('div',{staticClass:"grid gap-20"},[_c('div',[_c('h3',[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('p',{staticClass:"font14"},[_vm._v("created by "),_c('span',{staticClass:"strong"},[_vm._v(_vm._s(item.creator_name))])])]),_vm._v(" "),_c('p',{staticClass:"thin"},[_vm._v(_vm._s(item.intro))]),_vm._v(" "),_c('div',{staticClass:"grid gap-10 auto col-2 justify-content-start justify-items-start"},[_c('p',{},[_c('span',{staticClass:"strong"},[_vm._v(_vm._s(item.subscribers_count))]),_vm._v(" subscribers ")]),_vm._v(" "),_c('p',{},[_c('span',{staticClass:"strong"},[_vm._v(_vm._s(item.messages_count))]),_vm._v(" messages ")])])])])])],1)}),0)])}
var Newslettersvue_type_template_id_3bce2f24_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/subscriptions/newsletters/Newsletters.vue?vue&type=template&id=3bce2f24&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/subscriber/subscriptions/newsletters/Newsletters.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/subscriptions/newsletters/Newsletters.vue?vue&type=script&lang=js&
 /* harmony default export */ var newsletters_Newslettersvue_type_script_lang_js_ = (Newslettersvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/subscriptions/newsletters/Newsletters.vue



function Newsletters_injectStyles (context) {
  
  var style0 = __webpack_require__(332)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Newsletters_component = Object(componentNormalizer["a" /* default */])(
  newsletters_Newslettersvue_type_script_lang_js_,
  Newslettersvue_type_template_id_3bce2f24_scoped_true_render,
  Newslettersvue_type_template_id_3bce2f24_scoped_true_staticRenderFns,
  false,
  Newsletters_injectStyles,
  "3bce2f24",
  "4b32aa8d"
  
)

/* harmony default export */ var Newsletters = (Newsletters_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/pages/admin/subscriber/subscriptions/newsletters/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var newslettersvue_type_script_lang_js_ = ({
  layout: 'default-admin-subscriber',
  components: {
    NewslettersIntro: NewslettersIntro,
    Newsletters: Newsletters
  },

  async asyncData({
    $axios
  }) {
    const newsletterList = await $axios.$get('/api/maylday/newsletter/all');
    return {
      newsletterList
    };
  }

});
// CONCATENATED MODULE: ./apps/manyletter.com/pages/admin/subscriber/subscriptions/newsletters/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var subscriptions_newslettersvue_type_script_lang_js_ = (newslettersvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/pages/admin/subscriber/subscriptions/newsletters/index.vue



function newsletters_injectStyles (context) {
  
  
}

/* normalize component */

var newsletters_component = Object(componentNormalizer["a" /* default */])(
  subscriptions_newslettersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  newsletters_injectStyles,
  "7954bb2d",
  "09ef672f"
  
)

/* harmony default export */ var newsletters = __webpack_exports__["default"] = (newsletters_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map