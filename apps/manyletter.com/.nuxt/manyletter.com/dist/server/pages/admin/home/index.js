exports.ids = [13];
exports.modules = {

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(296);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("723eb3c4", content, true, context)
};

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Creator_vue_vue_type_style_index_0_id_02888f20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(168);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Creator_vue_vue_type_style_index_0_id_02888f20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Creator_vue_vue_type_style_index_0_id_02888f20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Creator_vue_vue_type_style_index_0_id_02888f20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Creator_vue_vue_type_style_index_0_id_02888f20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Creator_vue_vue_type_style_index_0_id_02888f20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".box.newsletter[data-v-02888f20]{padding:0;transition:all .6s cubic-bezier(.165,.84,.44,1)}.box.newsletter[data-v-02888f20]:hover{transform:scale(1.02)}.box.newsletter>.cover[data-v-02888f20]{width:100%;height:130px;background-color:#eee;border-bottom:1px solid #f5f5f5;border-radius:8px 8px 0 0;background-size:cover;background-position:50%}.box.newsletter .header[data-v-02888f20]{position:relative;padding:10px 30px 30px}.box.newsletter .header>.avatar[data-v-02888f20]{position:relative;width:80px}.box.newsletter .header>.avatar>div[data-v-02888f20]{position:absolute;top:-40px;left:0;background-color:#eee;background-size:cover;background-position:50%;border-radius:100px;border:5px solid #fff;height:80px;width:80px;padding:7px}.box.newsletter>.body[data-v-02888f20]{padding:20px 30px 30px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/pages/admin/home/index.vue?vue&type=template&id=2b3d317b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_c('Home'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-narrow grid gap-60\" data-v-2b3d317b>","</div>",[_c('Subscriber'),_vm._ssrNode(" "),(_vm.newsletterList.count > 0)?_c('Creator',{attrs:{"newsletterList":_vm.newsletterList}}):_vm._e(),_vm._ssrNode(" "),_c('StartNewsletter')],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/pages/admin/home/index.vue?vue&type=template&id=2b3d317b&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/home/Home.vue?vue&type=template&id=1d4f8a85&scoped=true&
var Homevue_type_template_id_1d4f8a85_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"wrapper\" data-v-1d4f8a85><div class=\"container-narrow grid gap-20\" data-v-1d4f8a85><h2 data-v-1d4f8a85>Home</h2> <p data-v-1d4f8a85>View your personal subscriptions or create and manage your own newsletters.</p></div></div>")])}
var Homevue_type_template_id_1d4f8a85_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/home/Home.vue?vue&type=template&id=1d4f8a85&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/home/Home.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Homevue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/home/Home.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_Homevue_type_script_lang_js_ = (Homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/home/Home.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_Homevue_type_script_lang_js_,
  Homevue_type_template_id_1d4f8a85_scoped_true_render,
  Homevue_type_template_id_1d4f8a85_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "1d4f8a85",
  "9075f686"
  
)

/* harmony default export */ var Home = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/home/Subscriber.vue?vue&type=template&id=9e8f802a&scoped=true&
var Subscribervue_type_template_id_9e8f802a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"grid gap-20\" data-v-9e8f802a><div class=\"grid gap-20 justify-self-start box\" data-v-9e8f802a><h3 data-v-9e8f802a>Your subscriptions</h3> <div data-v-9e8f802a><button class=\"cta\" data-v-9e8f802a>Enter your newsletter subscriptions</button></div></div></div>")])}
var Subscribervue_type_template_id_9e8f802a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/home/Subscriber.vue?vue&type=template&id=9e8f802a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/home/Subscriber.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Subscribervue_type_script_lang_js_ = ({
  methods: {
    async openSubscriptions() {
      this.$store.dispatch('setUser').then(() => {
        this.$router.push('/admin/subscriber/dashboard');
      });
    }

  }
});
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/home/Subscriber.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_Subscribervue_type_script_lang_js_ = (Subscribervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/home/Subscriber.vue



function Subscriber_injectStyles (context) {
  
  
}

/* normalize component */

var Subscriber_component = Object(componentNormalizer["a" /* default */])(
  home_Subscribervue_type_script_lang_js_,
  Subscribervue_type_template_id_9e8f802a_scoped_true_render,
  Subscribervue_type_template_id_9e8f802a_scoped_true_staticRenderFns,
  false,
  Subscriber_injectStyles,
  "9e8f802a",
  "49fdc346"
  
)

/* harmony default export */ var Subscriber = (Subscriber_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/home/Creator.vue?vue&type=template&id=02888f20&scoped=true&
var Creatorvue_type_template_id_02888f20_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"grid gap-20\" data-v-02888f20><h3 data-v-02888f20>Your newsletters</h3> <div class=\"grid gap-20 md-col-2\" data-v-02888f20>"+(_vm._ssrList((_vm.newsletterList.data),function(item){return ("<div class=\"grid box pointer newsletter align-content-start\" data-v-02888f20><div class=\"cover\""+(_vm._ssrStyle(null,'background-image: url(https://storage.manyletter.com/ymello_filestorage/img/newsletter_cover/' + item.cover + ')', null))+" data-v-02888f20></div> <div class=\"header grid gap-20\" data-v-02888f20><div class=\"avatar\" data-v-02888f20><div"+(_vm._ssrStyle(null,'background-image: url(https://storage.manyletter.com/ymello_filestorage/img/newsletter_avatar/' + item.avatar + ')', null))+" data-v-02888f20></div></div></div> <div class=\"body grid gap-20 auto align-items-start justify-items-start justify-content-start\" data-v-02888f20><div class=\"grid gap-20\" data-v-02888f20><div data-v-02888f20><h3 data-v-02888f20>"+_vm._ssrEscape(_vm._s(item.title))+"</h3> <p class=\"font14\" data-v-02888f20>created by <span class=\"strong\" data-v-02888f20>"+_vm._ssrEscape(_vm._s(item.creator_name))+"</span></p></div> <p class=\"thin\" data-v-02888f20>"+_vm._ssrEscape(_vm._s(item.intro))+"</p> <div class=\"grid gap-10 auto col-2 justify-content-start justify-items-start\" data-v-02888f20><p data-v-02888f20><span class=\"strong\" data-v-02888f20>"+_vm._ssrEscape(_vm._s(item.subscribers_count))+"</span> subscribers </p> <p data-v-02888f20><span class=\"strong\" data-v-02888f20>"+_vm._ssrEscape(_vm._s(item.messages_count))+"</span> messages </p></div></div></div></div>")}))+"</div></div>")])}
var Creatorvue_type_template_id_02888f20_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/home/Creator.vue?vue&type=template&id=02888f20&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/home/Creator.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Creatorvue_type_script_lang_js_ = ({
  props: ['newsletterList'],

  data() {
    return {};
  },

  methods: {
    async setUserNewsletter(newsletter_id) {
      await this.$axios.$put('/api/maylday/user/newsletter', {
        "newsletter_id": newsletter_id
      }).then(response => {
        console.log(response);
        this.$store.dispatch('setUser').then(() => {
          this.$router.push('/admin/creator/dashboard');
        });
      }, error => {
        console.log(error); //this.res = error.response.data.message
      });
    }

  }
});
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/home/Creator.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_Creatorvue_type_script_lang_js_ = (Creatorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/home/Creator.vue



function Creator_injectStyles (context) {
  
  var style0 = __webpack_require__(295)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Creator_component = Object(componentNormalizer["a" /* default */])(
  home_Creatorvue_type_script_lang_js_,
  Creatorvue_type_template_id_02888f20_scoped_true_render,
  Creatorvue_type_template_id_02888f20_scoped_true_staticRenderFns,
  false,
  Creator_injectStyles,
  "02888f20",
  "d4804b84"
  
)

/* harmony default export */ var Creator = (Creator_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/home/StartNewsletter.vue?vue&type=template&id=1358b3c2&scoped=true&
var StartNewslettervue_type_template_id_1358b3c2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"box grid gap-20 span-2 justify-items-center\" data-v-1358b3c2>","</div>",[_vm._ssrNode("<h3 class=\"text-center\" data-v-1358b3c2>Start a new nesletter</h3> <p class=\"text-center\" data-v-1358b3c2>There is nothing easier. Click the button and create a new nesletter in a few steps.</p> "),_vm._ssrNode("<div data-v-1358b3c2>","</div>",[_c('nuxt-link',{staticClass:"cta",attrs:{"to":"/admin/home/newsletter","tag":"button"}},[_vm._v("Start a new newsletter")])],1)],2)])}
var StartNewslettervue_type_template_id_1358b3c2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/home/StartNewsletter.vue?vue&type=template&id=1358b3c2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/home/StartNewsletter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var StartNewslettervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/home/StartNewsletter.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_StartNewslettervue_type_script_lang_js_ = (StartNewslettervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/home/StartNewsletter.vue



function StartNewsletter_injectStyles (context) {
  
  
}

/* normalize component */

var StartNewsletter_component = Object(componentNormalizer["a" /* default */])(
  home_StartNewslettervue_type_script_lang_js_,
  StartNewslettervue_type_template_id_1358b3c2_scoped_true_render,
  StartNewslettervue_type_template_id_1358b3c2_scoped_true_staticRenderFns,
  false,
  StartNewsletter_injectStyles,
  "1358b3c2",
  "10e3734d"
  
)

/* harmony default export */ var StartNewsletter = (StartNewsletter_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/pages/admin/home/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var homevue_type_script_lang_js_ = ({
  layout: 'default-admin-home',
  components: {
    Home: Home,
    Subscriber: Subscriber,
    Creator: Creator,
    StartNewsletter: StartNewsletter
  },

  async asyncData({
    $axios
  }) {
    const newsletterList = await $axios.$get('/api/maylday/newsletter/all/creator');
    return {
      newsletterList
    };
  }

});
// CONCATENATED MODULE: ./apps/manyletter.com/pages/admin/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/pages/admin/home/index.vue



function home_injectStyles (context) {
  
  
}

/* normalize component */

var home_component = Object(componentNormalizer["a" /* default */])(
  admin_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  home_injectStyles,
  "2b3d317b",
  "64cbf0ce"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (home_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map