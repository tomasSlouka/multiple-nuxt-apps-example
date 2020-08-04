exports.ids = [18];
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

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(331);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("eec4ccba", content, true, context)
};

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletters_vue_vue_type_style_index_0_id_28e45e1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(189);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletters_vue_vue_type_style_index_0_id_28e45e1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletters_vue_vue_type_style_index_0_id_28e45e1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletters_vue_vue_type_style_index_0_id_28e45e1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletters_vue_vue_type_style_index_0_id_28e45e1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletters_vue_vue_type_style_index_0_id_28e45e1e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(118);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(119);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".box[data-v-28e45e1e]{padding:0;transition:all .6s cubic-bezier(.165,.84,.44,1)}.box[data-v-28e45e1e]:hover{transform:scale(1.02)}.newsletter>.cover[data-v-28e45e1e]{width:100%;height:130px;background-color:#fff;border-bottom:1px solid #f5f5f5;border-radius:8px 8px 0 0;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:cover;background-position:50%}.newsletter .header[data-v-28e45e1e]{position:relative;padding:10px 30px 30px}.newsletter .header>.avatar[data-v-28e45e1e]{position:relative;width:80px}.newsletter .header>.avatar>div[data-v-28e45e1e]{position:absolute;top:-40px;left:0;background-color:#eee;background-size:cover;background-position:50%;border-radius:100px;border:5px solid #fff;height:80px;width:80px;padding:7px}.newsletter>.body[data-v-28e45e1e]{padding:20px 30px 30px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/pages/admin/subscriber/subscriptions/index.vue?vue&type=template&id=6de8c51f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_c('Subscriptions'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-narrow grid gap-60\" data-v-6de8c51f>","</div>",[(_vm.newsletterList.count > 0)?_c('Newsletters',{attrs:{"newsletterList":_vm.newsletterList}}):_vm._e(),_vm._ssrNode(" "),_c('FindNewNewsletters')],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/pages/admin/subscriber/subscriptions/index.vue?vue&type=template&id=6de8c51f&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/subscriber/subscriptions/Subscriptions.vue?vue&type=template&id=96f1394c&scoped=true&
var Subscriptionsvue_type_template_id_96f1394c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"newsletter-Newsletter"}},[_vm._ssrNode("<div class=\"wrapper\" data-v-96f1394c><div class=\"container-narrow grid gap-20\" data-v-96f1394c><h2 data-v-96f1394c>Your subscriptions</h2> <p data-v-96f1394c>Manage your subscriptions, unsubscribe from newsletters, rate newsletter creators, see the history of newsletter messages.</p></div></div>")])}
var Subscriptionsvue_type_template_id_96f1394c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/subscriptions/Subscriptions.vue?vue&type=template&id=96f1394c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/subscriber/subscriptions/Subscriptions.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Subscriptionsvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/subscriptions/Subscriptions.vue?vue&type=script&lang=js&
 /* harmony default export */ var subscriptions_Subscriptionsvue_type_script_lang_js_ = (Subscriptionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/subscriptions/Subscriptions.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  subscriptions_Subscriptionsvue_type_script_lang_js_,
  Subscriptionsvue_type_template_id_96f1394c_scoped_true_render,
  Subscriptionsvue_type_template_id_96f1394c_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "96f1394c",
  "796919eb"
  
)

/* harmony default export */ var Subscriptions = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/subscriber/subscriptions/Newsletters.vue?vue&type=template&id=28e45e1e&scoped=true&
var Newslettersvue_type_template_id_28e45e1e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component grid gap-20"},[_vm._ssrNode("<div class=\"grid gap-20 md-col-2\" data-v-28e45e1e>","</div>",_vm._l((_vm.newsletterList.data),function(item){return _vm._ssrNode("<div class=\"grid box\" data-v-28e45e1e>","</div>",[_c('nuxt-link',{staticClass:"grid pointer newsletter align-content-start",attrs:{"to":"/admin/subscriber/subscriptions/newsletters/detail/" + item.id,"tag":"div"}},[_c('div',{staticClass:"cover",style:('background-image: url(https://storage.manyletter.com/ymello_filestorage/img/newsletter_cover/' + item.cover + ')')}),_vm._v(" "),_c('div',{staticClass:"header grid gap-20"},[_c('div',{staticClass:"avatar"},[_c('div',{style:('background-image: url(https://storage.manyletter.com/ymello_filestorage/img/newsletter_avatar/' + item.avatar + ')')})])]),_vm._v(" "),_c('div',{staticClass:"body grid gap-20 auto align-items-start justify-items-start justify-content-start"},[_c('div',{staticClass:"grid gap-20"},[_c('div',[_c('h3',[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('p',{staticClass:"font14"},[_vm._v("created by "),_c('span',{staticClass:"strong"},[_vm._v(_vm._s(item.creator_name))])])]),_vm._v(" "),_c('p',{staticClass:"thin"},[_vm._v(_vm._s(item.intro))]),_vm._v(" "),_c('div',{staticClass:"grid gap-10 auto col-2 justify-content-start justify-items-start"},[_c('p',{},[_c('span',{staticClass:"strong"},[_vm._v(_vm._s(item.subscribers_count))]),_vm._v(" subscribers ")]),_vm._v(" "),_c('p',{},[_c('span',{staticClass:"strong"},[_vm._v(_vm._s(item.messages_count))]),_vm._v(" messages ")])])])])])],1)}),0)])}
var Newslettersvue_type_template_id_28e45e1e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/subscriptions/Newsletters.vue?vue&type=template&id=28e45e1e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/subscriber/subscriptions/Newsletters.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/subscriptions/Newsletters.vue?vue&type=script&lang=js&
 /* harmony default export */ var subscriptions_Newslettersvue_type_script_lang_js_ = (Newslettersvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/subscriptions/Newsletters.vue



function Newsletters_injectStyles (context) {
  
  var style0 = __webpack_require__(330)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Newsletters_component = Object(componentNormalizer["a" /* default */])(
  subscriptions_Newslettersvue_type_script_lang_js_,
  Newslettersvue_type_template_id_28e45e1e_scoped_true_render,
  Newslettersvue_type_template_id_28e45e1e_scoped_true_staticRenderFns,
  false,
  Newsletters_injectStyles,
  "28e45e1e",
  "61b2830f"
  
)

/* harmony default export */ var Newsletters = (Newsletters_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/subscriber/subscriptions/FindNewNewsletters.vue?vue&type=template&id=09ee86a7&scoped=true&
var FindNewNewslettersvue_type_template_id_09ee86a7_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component grid gap-20"},[_vm._ssrNode("<div class=\"box grid gap-20 justify-items-center\" data-v-09ee86a7>","</div>",[_vm._ssrNode("<h3 data-v-09ee86a7>Find newsletters to subscribe to</h3> <p class=\"text-center\" data-v-09ee86a7>Find out more interesting collections of newsletters in ManyLetter.</p> "),_vm._ssrNode("<div data-v-09ee86a7>","</div>",[_c('nuxt-link',{staticClass:"cta",attrs:{"to":"/admin/subscriber/subscriptions/newsletters","tag":"button"}},[_vm._v("Browse newsletters")])],1)],2)])}
var FindNewNewslettersvue_type_template_id_09ee86a7_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/subscriptions/FindNewNewsletters.vue?vue&type=template&id=09ee86a7&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/subscriber/subscriptions/FindNewNewsletters.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FindNewNewslettersvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/subscriptions/FindNewNewsletters.vue?vue&type=script&lang=js&
 /* harmony default export */ var subscriptions_FindNewNewslettersvue_type_script_lang_js_ = (FindNewNewslettersvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/subscriptions/FindNewNewsletters.vue



function FindNewNewsletters_injectStyles (context) {
  
  
}

/* normalize component */

var FindNewNewsletters_component = Object(componentNormalizer["a" /* default */])(
  subscriptions_FindNewNewslettersvue_type_script_lang_js_,
  FindNewNewslettersvue_type_template_id_09ee86a7_scoped_true_render,
  FindNewNewslettersvue_type_template_id_09ee86a7_scoped_true_staticRenderFns,
  false,
  FindNewNewsletters_injectStyles,
  "09ee86a7",
  "86d9f9e4"
  
)

/* harmony default export */ var FindNewNewsletters = (FindNewNewsletters_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/pages/admin/subscriber/subscriptions/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var subscriptionsvue_type_script_lang_js_ = ({
  layout: 'default-admin-subscriber',
  components: {
    Subscriptions: Subscriptions,
    Newsletters: Newsletters,
    FindNewNewsletters: FindNewNewsletters
  },

  async asyncData({
    $axios
  }) {
    const newsletterList = await $axios.$get('/api/maylday/newsletter/all/subscriber');
    return {
      newsletterList
    };
  } // methods: {
  //     loadBack() {
  //         this.$router.go(-1)
  //     },
  //     loadNext() {
  //         this.$router.push({ path: '/admin/subscriber/settings' })
  //     }
  // }


});
// CONCATENATED MODULE: ./apps/manyletter.com/pages/admin/subscriber/subscriptions/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var subscriber_subscriptionsvue_type_script_lang_js_ = (subscriptionsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/pages/admin/subscriber/subscriptions/index.vue



function subscriptions_injectStyles (context) {
  
  
}

/* normalize component */

var subscriptions_component = Object(componentNormalizer["a" /* default */])(
  subscriber_subscriptionsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  subscriptions_injectStyles,
  "6de8c51f",
  "6bb5e831"
  
)

/* harmony default export */ var subscriptions = __webpack_exports__["default"] = (subscriptions_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map