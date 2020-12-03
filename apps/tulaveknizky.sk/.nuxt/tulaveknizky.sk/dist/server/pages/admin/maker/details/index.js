exports.ids = [8];
exports.modules = {

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(128);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("26e954f8", content, true, context)
};

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Makerbar_vue_vue_type_style_index_0_id_4f235ab7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Makerbar_vue_vue_type_style_index_0_id_4f235ab7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Makerbar_vue_vue_type_style_index_0_id_4f235ab7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Makerbar_vue_vue_type_style_index_0_id_4f235ab7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Makerbar_vue_vue_type_style_index_0_id_4f235ab7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Makerbar_vue_vue_type_style_index_0_id_4f235ab7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#bar[data-v-4f235ab7]{box-shadow:0 .125rem .125rem rgba(0,0,0,.1);position:relative;top:0;left:0;width:100%;background-color:#fff;z-index:99;height:58px}#bar>.container-narrow[data-v-4f235ab7]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}#bar>.container-narrow>div.flex[data-v-4f235ab7]{height:100%}.nav>ul[data-v-4f235ab7]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-4f235ab7]{padding:22px;border-bottom:1px solid transparent;position:relative;transition:.3s}.nav>ul>li>a.nuxt-link-exact-active[data-v-4f235ab7],.nav>ul>li>a[data-v-4f235ab7]:hover{color:#39ac37;text-decoration:none}.nav>ul>li.sidenavtoggle[data-v-4f235ab7]{cursor:pointer}.nav>ul>li.sidenavtoggle>div[data-v-4f235ab7]{width:30px;height:4px;background-color:#000;margin:5px 0}.nav>ul>li>a[data-v-4f235ab7]{color:#000;line-height:24px;font-weight:500;text-decoration:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['tagList'],

  data() {
    return {
      submitSuccess: false,
      //         avatar: this.$store.state.auth.userData.avatar,
      //         cover: this.$store.state.auth.userData.cover,
      name: this.$store.state.auth.userData.name,
      surname: this.$store.state.auth.userData.surname // bio: this.$store.state.auth.userData.bio,
      //         tags: this.$store.state.auth.userData.tags === null ? [] : this.$store.state.auth.userData.tags.split(","),
      //         selectedFileAvatar: null,
      //         selectedFileUrlAvatar: null,
      //         showSaveAvatar: false,
      //         saveTextAvatar: "Save",
      //         selectedFileCover: null,
      //         selectedFileUrlCover: null,
      //         showSaveCover: false,
      //         saveTextCover: "Save",
      // charCounterBio: this.$store.state.auth.userData.bio.length,

    };
  },

  methods: {
    charCountIntro() {
      this.charCounterIntro = this.bio.length;
    },

    // AVATAR
    onFileSelectedAvatar(event) {
      this.selectedFileAvatar = event.target.files[0];
      this.selectedFileUrlAvatar = URL.createObjectURL(this.selectedFileAvatar);
      this.showSaveAvatar = true;
    },

    onCancelAvatar() {
      this.selectedFileAvatar = null;
      this.selectedFileUrlAvatar = null;
      this.showSaveAvatar = false;
    },

    onUploadAvatar() {
      const formData = new FormData();
      formData.append('myFile', this.selectedFileAvatar, this.selectedFileAvatar.name);
      formData.append('user_id', this.$store.state.auth.userData.id);
      this.$axios.$post('/upload/user-avatar', formData, {
        onUploadProgress: progressEvent => {
          this.saveTextAvatar = Math.round(progressEvent.loaded / progressEvent.total * 100) + '%';
        }
      }).then(response => {
        this.$store.dispatch('setUser');
        this.showSaveAvatar = false;
        this.saveTextAvatar = "Save";
        console.log(response);
      }, error => {
        console.log(error);
      });
    },

    // AVATAR
    // COVER
    onFileSelectedCover(event) {
      this.selectedFileCover = event.target.files[0];
      this.selectedFileUrlCover = URL.createObjectURL(this.selectedFileCover);
      this.showSaveCover = true;
    },

    onCancelCover() {
      this.selectedFileCover = null;
      this.selectedFileUrlCover = null;
      this.showSaveCover = false;
    },

    onUploadCover() {
      const formData = new FormData();
      formData.append('myFile', this.selectedFileCover, this.selectedFileCover.name);
      formData.append('user_id', this.$store.state.auth.userData.id);
      this.$axios.$post('/upload/user-cover', formData, {
        onUploadProgress: progressEvent => {
          this.saveTextCover = Math.round(progressEvent.loaded / progressEvent.total * 100) + '%';
        }
      }).then(response => {
        this.$store.dispatch('setUser');
        this.showSaveCover = false;
        this.saveTextCover = "Save";
        console.log(response);
      }, error => {
        console.log(error);
      });
    },

    // COVER END
    async updateTag(tag_id) {
      await this.$axios.$put('/user/tag', {
        "id": this.$store.state.auth.userData.id,
        "tag_id": tag_id
      }).then(response => {
        console.log(response.message);

        if (response.message === "added") {
          this.tags.push(tag_id);
        }

        if (response.message === "removed") {
          this.tags = this.tags.filter(function (item) {
            return item !== tag_id;
          });
        }

        console.log(this.tags);
      }, error => {
        console.log(error); //this.res = error.response.data.message
      });
    },

    async submitForm() {
      await this.$axios.$put('/user', {
        'id': this.$store.state.auth.userData.id,
        'name': this.name,
        'surname': this.surname,
        'bio': this.bio
      }).then(response => {
        console.log(response);
        this.submitSuccess = true;
        setTimeout(() => this.submitSuccess = false, 4000); // this.$router.back()
      }, error => {
        console.log(error);
      });
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(87)["URL"]))

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(175);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("7a70c1d6", content, true, context)
};

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/admin/_common/Makerbar.vue?vue&type=template&id=4f235ab7&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div id=\"bar\" data-v-4f235ab7>","</div>",[_vm._ssrNode("<div class=\"container-narrow\" data-v-4f235ab7>","</div>",[_vm._ssrNode("<div class=\"flex wrap align-items-center justify-content-center\" data-v-4f235ab7>","</div>",[_vm._ssrNode("<div data-v-4f235ab7></div> "),_vm._ssrNode("<div class=\"nav\" data-v-4f235ab7>","</div>",[_vm._ssrNode("<ul class=\"flex wrap show-md align-items-center\" data-v-4f235ab7>","</ul>",[_vm._ssrNode("<li data-v-4f235ab7>","</li>",[_c('nuxt-link',{attrs:{"to":"/admin/maker/details"}},[_vm._v("Details")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-4f235ab7>","</li>",[_c('nuxt-link',{attrs:{"to":"/admin/maker/portfolio"}},[_vm._v("Portfolio")])],1)],2)])],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/_common/Makerbar.vue?vue&type=template&id=4f235ab7&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/admin/_common/Makerbar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Makerbarvue_type_script_lang_js_ = ({
  methods: {
    logout() {
      console.log('logout');
      this.$store.dispatch('auth/logout').then(() => {
        this.$router.push('/log-out');
      });
    }

  }
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/_common/Makerbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var _common_Makerbarvue_type_script_lang_js_ = (Makerbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/_common/Makerbar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(127)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _common_Makerbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4f235ab7",
  "e6ac4ff2"
  
)

/* harmony default export */ var Makerbar = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_ffd8c16c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(130);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_ffd8c16c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_ffd8c16c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_ffd8c16c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_ffd8c16c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_ffd8c16c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".avatar[data-v-ffd8c16c]{height:100px;width:100px;border-radius:100px}.avatar[data-v-ffd8c16c],.cover[data-v-ffd8c16c]{background-repeat:no-repeat;background-position:50%;background-size:cover;cursor:pointer;background-color:#eee}.cover[data-v-ffd8c16c]{height:180px;border-radius:4px}.flex>button.tag[data-v-ffd8c16c]{margin:3px;border:1px solid #eee;background-color:#fff;padding:10px 15px;color:#000;border-radius:4px;cursor:pointer}.flex>button.tag.active[data-v-ffd8c16c],.flex>button.tag[data-v-ffd8c16c]:hover{border:1px solid #000;background-color:#000;color:#fff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/pages/admin/maker/details/index.vue?vue&type=template&id=b144ac5e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_c('Bar'),_vm._ssrNode(" "),_c('Intro'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-narrow grid gap-60\" data-v-b144ac5e>","</div>",[_c('Details',{attrs:{"tagList":_vm.tagList}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/pages/admin/maker/details/index.vue?vue&type=template&id=b144ac5e&scoped=true&

// EXTERNAL MODULE: ./apps/tulaveknizky.sk/components/admin/_common/Makerbar.vue + 4 modules
var Makerbar = __webpack_require__(141);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/admin/maker/details/Intro.vue?vue&type=template&id=3092fe5e&scoped=true&
var Introvue_type_template_id_3092fe5e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"wrapper\" data-v-3092fe5e><div class=\"container-narrow grid gap-20\" data-v-3092fe5e><h2 data-v-3092fe5e>Details</h2> <p data-v-3092fe5e>Your maker profile.</p></div></div>")])}
var Introvue_type_template_id_3092fe5e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/maker/details/Intro.vue?vue&type=template&id=3092fe5e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/admin/maker/details/Intro.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Introvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/maker/details/Intro.vue?vue&type=script&lang=js&
 /* harmony default export */ var details_Introvue_type_script_lang_js_ = (Introvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/maker/details/Intro.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  details_Introvue_type_script_lang_js_,
  Introvue_type_template_id_3092fe5e_scoped_true_render,
  Introvue_type_template_id_3092fe5e_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "3092fe5e",
  "8354bcf8"
  
)

/* harmony default export */ var Intro = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/admin/maker/details/Details.vue?vue&type=template&id=ffd8c16c&scoped=true&
var Detailsvue_type_template_id_ffd8c16c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component grid gap-20 col-2 align-content-start align-items-start"},[_vm._ssrNode("<div class=\"box grid gap-20\" data-v-ffd8c16c><h3 data-v-ffd8c16c>Edit my profile</h3> <div class=\"hr\" data-v-ffd8c16c></div> <form class=\"grid gap-20 \" data-v-ffd8c16c><div class=\"grid gap-20\" data-v-ffd8c16c><div data-v-ffd8c16c><label for=\"name\" data-v-ffd8c16c>* Name</label> <input type=\"text\" name=\"name\""+(_vm._ssrAttr("value",(_vm.name)))+" data-v-ffd8c16c></div> <div data-v-ffd8c16c><label for=\"surname\" data-v-ffd8c16c>* Surname</label> <input type=\"text\" name=\"surname\""+(_vm._ssrAttr("value",(_vm.surname)))+" data-v-ffd8c16c></div> <div data-v-ffd8c16c><label for=\"bio\" data-v-ffd8c16c>Bio</label> <textarea maxlength=\"255\" type=\"text\" name=\"bio\" data-v-ffd8c16c>"+_vm._ssrEscape(_vm._s(_vm.bio))+"</textarea> <p class=\"char-counter small\" data-v-ffd8c16c>"+_vm._ssrEscape(_vm._s(_vm.charCounterBio)+" / 255")+"</p></div></div> <div class=\"hr\" data-v-ffd8c16c></div> <div class=\"grid col-2 gap-10 auto justify-content-start align-items-center\" data-v-ffd8c16c><button type=\"submit\" class=\"cta\" data-v-ffd8c16c>Save changes</button> <p class=\"info\""+(_vm._ssrStyle(null,null, { display: (_vm.submitSuccess) ? '' : 'none' }))+" data-v-ffd8c16c>Saved!</p></div></form></div>")])}
var Detailsvue_type_template_id_ffd8c16c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/maker/details/Details.vue?vue&type=template&id=ffd8c16c&scoped=true&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/admin/maker/details/Details.vue?vue&type=script&lang=js&
var Detailsvue_type_script_lang_js_ = __webpack_require__(129);

// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/maker/details/Details.vue?vue&type=script&lang=js&
 /* harmony default export */ var details_Detailsvue_type_script_lang_js_ = (Detailsvue_type_script_lang_js_["a" /* default */]); 
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/maker/details/Details.vue



function Details_injectStyles (context) {
  
  var style0 = __webpack_require__(174)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Details_component = Object(componentNormalizer["a" /* default */])(
  details_Detailsvue_type_script_lang_js_,
  Detailsvue_type_template_id_ffd8c16c_scoped_true_render,
  Detailsvue_type_template_id_ffd8c16c_scoped_true_staticRenderFns,
  false,
  Details_injectStyles,
  "ffd8c16c",
  "468fb25a"
  
)

/* harmony default export */ var Details = (Details_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/pages/admin/maker/details/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var detailsvue_type_script_lang_js_ = ({
  layout: 'defaultAdmin',
  components: {
    Bar: Makerbar["a" /* default */],
    Intro: Intro,
    Details: Details
  },

  async asyncData({
    $axios,
    store
  }) {
    const [tagList] = await Promise.all([// $axios.$get('/newsletter/' + store.state.auth.userData.newsletter_id),
    $axios.$get('/tag/all')]);
    return {
      tagList
    };
  }

});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/pages/admin/maker/details/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var maker_detailsvue_type_script_lang_js_ = (detailsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/pages/admin/maker/details/index.vue



function details_injectStyles (context) {
  
  
}

/* normalize component */

var details_component = Object(componentNormalizer["a" /* default */])(
  maker_detailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  details_injectStyles,
  "b144ac5e",
  "a583d864"
  
)

/* harmony default export */ var details = __webpack_exports__["default"] = (details_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map