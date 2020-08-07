exports.ids = [17];
exports.modules = {

/***/ 120:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data() {
    return {
      submitSuccess: false,
      email: this.$store.state.userData.email,
      avatar: this.$store.state.userData.avatar,
      name: this.$store.state.userData.name,
      surname: this.$store.state.userData.surname,
      nickname: this.$store.state.userData.nickname,
      bio: this.$store.state.userData.bio,
      website: this.$store.state.userData.website,
      twitter: this.$store.state.userData.twitter,
      facebook: this.$store.state.userData.facebook,
      other_social: this.$store.state.userData.other_social,
      selectedFile: null,
      selectedFileUrl: null,
      showSave: false,
      saveText: "Save",
      charCounter: this.$store.state.userData.bio ? this.$store.state.userData.bio.length : "0"
    };
  },

  methods: {
    charCount() {
      this.charCounter = this.bio.length;
    },

    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      this.selectedFileUrl = URL.createObjectURL(this.selectedFile);
      this.showSave = true;
    },

    onCancel() {
      this.selectedFile = null;
      this.selectedFileUrl = null;
      this.showSave = false;
    },

    onUpload() {
      const formData = new FormData();
      formData.append('myFile', this.selectedFile, this.selectedFile.name); // formData.append('user', "jano")

      console.log(formData);
      this.$axios.$post('/api/maylday/upload/user-avatar', formData, {
        onUploadProgress: progressEvent => {
          this.saveText = Math.round(progressEvent.loaded / progressEvent.total * 100) + '%';
        }
      }).then(response => {
        // this.$store.dispatch('setUser');
        this.showSave = false;
        this.saveText = "Save";
        console.log(response);
      }, error => {
        console.log(error);
      });
    },

    async submitForm() {
      await this.$axios.$put('/api/maylday/user', {
        "email": this.email,
        "name": this.name,
        "surname": this.surname,
        "nickname": this.nickname,
        "bio": this.bio,
        "website": this.website,
        "twitter": this.twitter,
        "facebook": this.facebook,
        "other_social": this.other_social
      }).then(response => {
        console.log(response); // this.$store.dispatch('setUser');

        this.submitSuccess = true;
        setTimeout(() => this.submitSuccess = false, 4000); // this.$router.push('/admin/subscriber/settings')
      }, error => {
        console.log(error); //this.res = error.response.data.message
      });
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(100)["URL"]))

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(165);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("59104bab", content, true, context)
};

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountData_vue_vue_type_style_index_0_id_6f47023b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(121);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountData_vue_vue_type_style_index_0_id_6f47023b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountData_vue_vue_type_style_index_0_id_6f47023b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountData_vue_vue_type_style_index_0_id_6f47023b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountData_vue_vue_type_style_index_0_id_6f47023b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountData_vue_vue_type_style_index_0_id_6f47023b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".avatar[data-v-6f47023b]{height:100px;width:100px;border-radius:100px;background-repeat:no-repeat;background-position:50%;background-size:cover;cursor:pointer;background-color:#eee}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(327);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("e33502c6", content, true, context)
};

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(329);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("fab051b6", content, true, context)
};

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/subscriber/settings/AccountData.vue?vue&type=template&id=6f47023b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component grid gap-20"},[_vm._ssrNode("<div class=\"box grid gap-20\" data-v-6f47023b><h3 data-v-6f47023b>Your profile</h3> <p data-v-6f47023b>Fill in your profile so other users can find you in ManyLetter and follow you.</p> <div data-v-6f47023b><form data-v-6f47023b><label for=\"title\" data-v-6f47023b>Avatar</label> <div class=\"grid gap-20 col-2 auto justify-content-start align-items-center\" data-v-6f47023b>"+((_vm.selectedFileUrl === null)?("<div class=\"avatar\""+(_vm._ssrStyle(null,'background-image: url(https://storage.manyletter.com/ymello_filestorage/img/user_avatar/' + _vm.avatar + ')', null))+" data-v-6f47023b></div>"):("<div class=\"avatar\""+(_vm._ssrStyle(null,'background-image: url(' + _vm.selectedFileUrl + ')', null))+" data-v-6f47023b></div>"))+" <div class=\"grid gap-10 md-col-2 auto justify-content-start align-items-center\" data-v-6f47023b><button class=\"cta\""+(_vm._ssrStyle(null,null, { display: (_vm.showSave) ? '' : 'none' }))+" data-v-6f47023b>"+_vm._ssrEscape(_vm._s(_vm.saveText))+"</button> <button class=\"cta    red\""+(_vm._ssrStyle(null,null, { display: (_vm.showSave) ? '' : 'none' }))+" data-v-6f47023b>Cancel</button></div></div> <input name=\"myFile\" type=\"file\" class=\"hidden\" data-v-6f47023b></form></div> <form class=\"grid gap-20 \" data-v-6f47023b><div class=\"grid gap-20\" data-v-6f47023b><div class=\"grid md-col-2 gap-20\" data-v-6f47023b><div data-v-6f47023b><label for=\"title\" data-v-6f47023b>Name</label> <input type=\"text\" name=\"name\""+(_vm._ssrAttr("value",(_vm.name)))+" data-v-6f47023b></div> <div data-v-6f47023b><label for=\"title\" data-v-6f47023b>Surname</label> <input type=\"text\" name=\"surname\""+(_vm._ssrAttr("value",(_vm.surname)))+" data-v-6f47023b></div></div> <div data-v-6f47023b><label for=\"title\" data-v-6f47023b>Nickname * (will be show in ManyLetter)</label> <input type=\"text\" name=\"nickname\""+(_vm._ssrAttr("value",(_vm.nickname)))+" data-v-6f47023b></div> <div data-v-6f47023b><label for=\"title\" data-v-6f47023b>Bio</label> <textarea maxlength=\"255\" type=\"text\" name=\"bio\" data-v-6f47023b>"+_vm._ssrEscape(_vm._s(_vm.bio))+"</textarea> <p data-v-6f47023b>"+_vm._ssrEscape(_vm._s(_vm.charCounter)+" / 255")+"</p></div> <div data-v-6f47023b><label for=\"title\" data-v-6f47023b>Email * (your email will not show anywhere in ManyLetter)</label> <input type=\"text\" name=\"email\""+(_vm._ssrAttr("value",(_vm.email)))+" data-v-6f47023b></div> <div class=\"hr mt40 mb40\" data-v-6f47023b></div> <h4 data-v-6f47023b>Where others can find you?</h4> <div data-v-6f47023b><label for=\"title\" data-v-6f47023b>Your website</label> <input type=\"text\" name=\"website\""+(_vm._ssrAttr("value",(_vm.website)))+" data-v-6f47023b></div> <div data-v-6f47023b><label for=\"title\" data-v-6f47023b>Twitter</label> <input type=\"text\" name=\"twitter\""+(_vm._ssrAttr("value",(_vm.twitter)))+" data-v-6f47023b></div> <div data-v-6f47023b><label for=\"title\" data-v-6f47023b>Facebook</label> <input type=\"text\" name=\"facebook\""+(_vm._ssrAttr("value",(_vm.facebook)))+" data-v-6f47023b></div> <div data-v-6f47023b><label for=\"title\" data-v-6f47023b>Other social network</label> <input type=\"text\" name=\"other\""+(_vm._ssrAttr("value",(_vm.other_social)))+" data-v-6f47023b></div></div> <div class=\"hr\" data-v-6f47023b></div> <div class=\"grid col-2 gap-10 auto justify-content-start align-items-center\" data-v-6f47023b><button type=\"submit\" class=\"cta\" data-v-6f47023b>Save changes</button> <p class=\"info\""+(_vm._ssrStyle(null,null, { display: (_vm.submitSuccess) ? '' : 'none' }))+" data-v-6f47023b>Saved!</p></div></form></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/settings/AccountData.vue?vue&type=template&id=6f47023b&scoped=true&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/subscriber/settings/AccountData.vue?vue&type=script&lang=js&
var AccountDatavue_type_script_lang_js_ = __webpack_require__(120);

// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/settings/AccountData.vue?vue&type=script&lang=js&
 /* harmony default export */ var settings_AccountDatavue_type_script_lang_js_ = (AccountDatavue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/settings/AccountData.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(164)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  settings_AccountDatavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6f47023b",
  "19b69733"
  
)

/* harmony default export */ var AccountData = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Referral_vue_vue_type_style_index_0_id_5b20989e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(187);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Referral_vue_vue_type_style_index_0_id_5b20989e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Referral_vue_vue_type_style_index_0_id_5b20989e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Referral_vue_vue_type_style_index_0_id_5b20989e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Referral_vue_vue_type_style_index_0_id_5b20989e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Referral_vue_vue_type_style_index_0_id_5b20989e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "p.token[data-v-5b20989e]{display:table;table-layout:fixed;width:100%;word-wrap:break-word}p.social[data-v-5b20989e]{background:#fff;border-radius:20px;height:40px;width:40px;display:grid;justify-items:center;align-items:center;box-shadow:0 1px 6px 0 rgba(14,30,37,.12);color:#000;cursor:pointer;font-size:20px}p.social.facebook[data-v-5b20989e]:hover{color:#3b5998}p.social.twitter[data-v-5b20989e]:hover{color:#00acee}p.social.instagram[data-v-5b20989e]:hover{color:#e1306c}ul[data-v-5b20989e]{margin-left:20px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DangerZone_vue_vue_type_style_index_0_id_985b9a9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(188);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DangerZone_vue_vue_type_style_index_0_id_985b9a9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DangerZone_vue_vue_type_style_index_0_id_985b9a9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DangerZone_vue_vue_type_style_index_0_id_985b9a9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DangerZone_vue_vue_type_style_index_0_id_985b9a9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DangerZone_vue_vue_type_style_index_0_id_985b9a9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".danger-zone[data-v-985b9a9c]{border:1px solid rgba(215,58,74,.48627)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/pages/admin/subscriber/settings/index.vue?vue&type=template&id=fa8202c8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_c('Settings'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-narrow grid gap-60\" data-v-fa8202c8>","</div>",[_c('AccountData'),_vm._ssrNode(" "),_c('Referral'),_vm._ssrNode(" "),_c('Time'),_vm._ssrNode(" "),_c('Password')],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/pages/admin/subscriber/settings/index.vue?vue&type=template&id=fa8202c8&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/subscriber/settings/Settings.vue?vue&type=template&id=53d8af74&scoped=true&
var Settingsvue_type_template_id_53d8af74_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"Settings"}},[_vm._ssrNode("<div class=\"wrapper\" data-v-53d8af74><div class=\"container-narrow grid gap-20\" data-v-53d8af74><h2 data-v-53d8af74>Settings</h2> <p data-v-53d8af74>Set up all the settings of your account and newsletter subscriptions.</p></div></div>")])}
var Settingsvue_type_template_id_53d8af74_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/settings/Settings.vue?vue&type=template&id=53d8af74&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/subscriber/settings/Settings.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Settingsvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/settings/Settings.vue?vue&type=script&lang=js&
 /* harmony default export */ var settings_Settingsvue_type_script_lang_js_ = (Settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/settings/Settings.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  settings_Settingsvue_type_script_lang_js_,
  Settingsvue_type_template_id_53d8af74_scoped_true_render,
  Settingsvue_type_template_id_53d8af74_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "53d8af74",
  "1236c1d2"
  
)

/* harmony default export */ var Settings = (component.exports);
// EXTERNAL MODULE: ./apps/manyletter.com/components/admin/subscriber/settings/AccountData.vue + 3 modules
var AccountData = __webpack_require__(203);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/subscriber/settings/Referral.vue?vue&type=template&id=5b20989e&scoped=true&
var Referralvue_type_template_id_5b20989e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component grid gap-60"},[_vm._ssrNode("<div class=\"box grid gap-20\" data-v-5b20989e><h3 data-v-5b20989e>Referral link</h3> <p data-v-5b20989e>Use your referral link to invite your friends to ManyLetter. Unlock bonuses for them as well as for you.</p> <div class=\"grid auto gap-40\" data-v-5b20989e><div class=\"table grid auto\" data-v-5b20989e><div class=\"table-head\" data-v-5b20989e><div data-v-5b20989e>Your referral link</div></div> <div class=\"table-row\" data-v-5b20989e><div data-v-5b20989e><p class=\"token small\" data-v-5b20989e>"+_vm._ssrEscape("https://manyletter.com/?r="+_vm._s(_vm.$store.state.userData.email_hash))+"</p></div></div></div></div></div>")])}
var Referralvue_type_template_id_5b20989e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/settings/Referral.vue?vue&type=template&id=5b20989e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/subscriber/settings/Referral.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Referralvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/settings/Referral.vue?vue&type=script&lang=js&
 /* harmony default export */ var settings_Referralvue_type_script_lang_js_ = (Referralvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/settings/Referral.vue



function Referral_injectStyles (context) {
  
  var style0 = __webpack_require__(326)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Referral_component = Object(componentNormalizer["a" /* default */])(
  settings_Referralvue_type_script_lang_js_,
  Referralvue_type_template_id_5b20989e_scoped_true_render,
  Referralvue_type_template_id_5b20989e_scoped_true_staticRenderFns,
  false,
  Referral_injectStyles,
  "5b20989e",
  "53101191"
  
)

/* harmony default export */ var Referral = (Referral_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/subscriber/settings/Time.vue?vue&type=template&id=16374eba&scoped=true&
var Timevue_type_template_id_16374eba_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component grid gap-20"},[_vm._ssrNode("<div class=\"box grid gap-20\" data-v-16374eba>","</div>",[_vm._ssrNode("<form class=\"grid gap-20 \" data-v-16374eba>","</form>",[_vm._ssrNode("<h3 data-v-16374eba>Choose your time</h3> <p data-v-16374eba>Choose a time when you want to receive messages from your subscibed newsletter every day.</p> "),_vm._ssrNode("<div class=\"grid gap-20 col-2 auto justify-content-start justify-items-start\" data-v-16374eba>","</div>",[_vm._ssrNode("<div data-v-16374eba>","</div>",[_vm._ssrNode("<label for=\"title\" data-v-16374eba>Hour</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.hour),expression:"hour"}],attrs:{"type":"text","name":"hour"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.hour=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"00"}},[_vm._v("00")]),_vm._v(" "),_c('option',{attrs:{"value":"01"}},[_vm._v("01")]),_vm._v(" "),_c('option',{attrs:{"value":"02"}},[_vm._v("02")]),_vm._v(" "),_c('option',{attrs:{"value":"03"}},[_vm._v("03")]),_vm._v(" "),_c('option',{attrs:{"value":"04"}},[_vm._v("04")]),_vm._v(" "),_c('option',{attrs:{"value":"05"}},[_vm._v("05")]),_vm._v(" "),_c('option',{attrs:{"value":"06"}},[_vm._v("06")]),_vm._v(" "),_c('option',{attrs:{"value":"07"}},[_vm._v("07")]),_vm._v(" "),_c('option',{attrs:{"value":"08"}},[_vm._v("08")]),_vm._v(" "),_c('option',{attrs:{"value":"09"}},[_vm._v("09")]),_vm._v(" "),_c('option',{attrs:{"value":"10"}},[_vm._v("10")]),_vm._v(" "),_c('option',{attrs:{"value":"11"}},[_vm._v("11")]),_vm._v(" "),_c('option',{attrs:{"value":"12"}},[_vm._v("12")]),_vm._v(" "),_c('option',{attrs:{"value":"13"}},[_vm._v("13")]),_vm._v(" "),_c('option',{attrs:{"value":"14"}},[_vm._v("14")]),_vm._v(" "),_c('option',{attrs:{"value":"15"}},[_vm._v("15")]),_vm._v(" "),_c('option',{attrs:{"value":"16"}},[_vm._v("16")]),_vm._v(" "),_c('option',{attrs:{"value":"17"}},[_vm._v("17")]),_vm._v(" "),_c('option',{attrs:{"value":"18"}},[_vm._v("18")]),_vm._v(" "),_c('option',{attrs:{"value":"19"}},[_vm._v("19")]),_vm._v(" "),_c('option',{attrs:{"value":"20"}},[_vm._v("20")]),_vm._v(" "),_c('option',{attrs:{"value":"21"}},[_vm._v("21")]),_vm._v(" "),_c('option',{attrs:{"value":"22"}},[_vm._v("22")]),_vm._v(" "),_c('option',{attrs:{"value":"23"}},[_vm._v("23")])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-16374eba>","</div>",[_vm._ssrNode("<label for=\"title\" data-v-16374eba>Minute</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.minute),expression:"minute"}],attrs:{"type":"text","name":"minute"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.minute=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"00"}},[_vm._v("00")]),_vm._v(" "),_c('option',{attrs:{"value":"15"}},[_vm._v("15")]),_vm._v(" "),_c('option',{attrs:{"value":"30"}},[_vm._v("30")]),_vm._v(" "),_c('option',{attrs:{"value":"45"}},[_vm._v("45")])])],2)],2),_vm._ssrNode(" <div class=\"hr\" data-v-16374eba></div> <div class=\"grid col-2 gap-10 auto justify-content-start align-items-center\" data-v-16374eba><button type=\"submit\" class=\"cta\" data-v-16374eba>Save changes</button> <p class=\"info\""+(_vm._ssrStyle(null,null, { display: (_vm.submitSuccess) ? '' : 'none' }))+" data-v-16374eba>"+_vm._ssrEscape(" "+_vm._s(_vm.submitText)+" ")+"</p></div>")],2)])])}
var Timevue_type_template_id_16374eba_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/settings/Time.vue?vue&type=template&id=16374eba&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/subscriber/settings/Time.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Timevue_type_script_lang_js_ = ({
  data() {
    return {
      submitSuccess: false,
      submitText: 'Saved!',
      hour: this.$store.state.userData.message_time.split(":")[0],
      minute: this.$store.state.userData.message_time.split(":")[1]
    };
  },

  methods: {
    async submitForm() {
      await this.$axios.$put('/api/maylday/user/time', {
        "message_time": this.hour + ':' + this.minute
      }).then(response => {
        console.log(response);
        this.$store.dispatch('setUser');
        this.submitSuccess = true;
        setTimeout(() => this.submitSuccess = false, 4000); // this.$router.push('/admin/subscriber/settings')
      }, error => {
        console.log(error); //this.res = error.response.data.message
      });
    }

  }
});
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/settings/Time.vue?vue&type=script&lang=js&
 /* harmony default export */ var settings_Timevue_type_script_lang_js_ = (Timevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/settings/Time.vue



function Time_injectStyles (context) {
  
  
}

/* normalize component */

var Time_component = Object(componentNormalizer["a" /* default */])(
  settings_Timevue_type_script_lang_js_,
  Timevue_type_template_id_16374eba_scoped_true_render,
  Timevue_type_template_id_16374eba_scoped_true_staticRenderFns,
  false,
  Time_injectStyles,
  "16374eba",
  "47cfc27e"
  
)

/* harmony default export */ var Time = (Time_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/subscriber/settings/Password.vue?vue&type=template&id=53110a76&scoped=true&
var Passwordvue_type_template_id_53110a76_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component grid gap-20"},[_vm._ssrNode("<div class=\"box grid gap-20\" data-v-53110a76><form class=\"grid gap-20 \" data-v-53110a76><h3 data-v-53110a76>Password settings</h3> <p data-v-53110a76>You can enable or disable your password for ManyLetter. When password is empty, ManyLetter will send you an automatic message with a login code. Otherwise, you can log in to ManyLetter with your static password.</p> <div class=\"hr\" data-v-53110a76></div> <p class=\"info strong p0 grid col-2\""+(_vm._ssrStyle(null,null, { display: (_vm.password_locked == 1) ? '' : 'none' }))+" data-v-53110a76>You are logging in with a password <button class=\"cta red small justify-self-end\" data-v-53110a76>Switch to login code</button></p> <p class=\"info strong p0\""+(_vm._ssrStyle(null,null, { display: (_vm.password_locked == 0) ? '' : 'none' }))+" data-v-53110a76>You are logging in with a login code</p> <div class=\"hr\" data-v-53110a76></div> <h4 data-v-53110a76>Change the password</h4> <div class=\"grid gap-20 xs-col-1 lg-col-2 align-items-start\" data-v-53110a76><div data-v-53110a76><label for=\"title\" data-v-53110a76>New password *</label> <input type=\"password\" name=\"password_1\""+(_vm._ssrAttr("value",(_vm.password_1)))+" data-v-53110a76></div> <div data-v-53110a76><label for=\"title\" data-v-53110a76>New password verification *</label> <input type=\"password\" name=\"password_2\""+(_vm._ssrAttr("value",(_vm.password_2)))+" data-v-53110a76></div></div> <div class=\"hr\" data-v-53110a76></div> <div class=\"grid col-2 gap-10 auto justify-content-start align-items-center\" data-v-53110a76><button type=\"submit\" class=\"cta\" data-v-53110a76>Save new password</button> <p class=\"info\""+(_vm._ssrStyle(null,null, { display: (_vm.submitSuccess) ? '' : 'none' }))+" data-v-53110a76>"+_vm._ssrEscape(" "+_vm._s(_vm.submitText)+" ")+"</p> <p class=\"error\""+(_vm._ssrStyle(null,null, { display: (_vm.submitError) ? '' : 'none' }))+" data-v-53110a76>"+_vm._ssrEscape(" "+_vm._s(_vm.submitText)+" ")+"</p></div></form></div>")])}
var Passwordvue_type_template_id_53110a76_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/settings/Password.vue?vue&type=template&id=53110a76&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/subscriber/settings/Password.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Passwordvue_type_script_lang_js_ = ({
  data() {
    return {
      submitSuccess: false,
      submitError: false,
      submitText: 'Saved!',
      password_locked: this.$store.state.userData.password_locked,
      password_1: this.$store.state.userData.password_locked == 1 ? 'uimreacc' : '',
      password_2: this.$store.state.userData.password_locked == 1 ? 'asdfzujz' : ''
    };
  },

  methods: {
    async submitForm() {
      if (this.password_1 === this.password_2) {
        await this.$axios.$put('/api/maylday/user/setpassword', {
          "password": this.password_1
        }).then(response => {
          console.log(response);
          this.$store.dispatch('setUser');
          this.submitSuccess = true;
          this.submitText = 'Saved!';

          if (this.password_1 === '') {
            this.password_locked = 0;
          } else {
            this.password_locked = 1;
          }

          setTimeout(() => this.submitSuccess = false, 4000); // this.$router.push('/admin/subscriber/settings')
        }, error => {
          console.log(error); //this.res = error.response.data.message
        });
      } else {
        this.submitError = true;
        this.submitText = 'Passwords do not match!';
        setTimeout(() => {
          this.submitError = false, this.submitText = '';
        }, 4000);
      }
    },

    async removePassword() {
      await this.$axios.$put('/api/maylday/user/removepassword', {}).then(response => {
        console.log(response);
        this.$store.dispatch('setUser');
        this.password_locked = 0;
        this.password_1 = '';
        this.password_2 = ''; // this.$router.push('/admin/creator/dashboard');
      }, error => {
        console.log(error); //this.res = error.response.data.message
      });
    }

  }
});
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/settings/Password.vue?vue&type=script&lang=js&
 /* harmony default export */ var settings_Passwordvue_type_script_lang_js_ = (Passwordvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/settings/Password.vue



function Password_injectStyles (context) {
  
  
}

/* normalize component */

var Password_component = Object(componentNormalizer["a" /* default */])(
  settings_Passwordvue_type_script_lang_js_,
  Passwordvue_type_template_id_53110a76_scoped_true_render,
  Passwordvue_type_template_id_53110a76_scoped_true_staticRenderFns,
  false,
  Password_injectStyles,
  "53110a76",
  "0e50bce2"
  
)

/* harmony default export */ var Password = (Password_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/subscriber/settings/DangerZone.vue?vue&type=template&id=985b9a9c&scoped=true&
var DangerZonevue_type_template_id_985b9a9c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component grid gap-20 "},[_vm._ssrNode("<div class=\"box grid gap-20 danger-zone\" data-v-985b9a9c><h3 data-v-985b9a9c>Danger zone</h3> <div data-v-985b9a9c><button class=\"cta red\" data-v-985b9a9c>Delete account</button></div></div>")])}
var DangerZonevue_type_template_id_985b9a9c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/settings/DangerZone.vue?vue&type=template&id=985b9a9c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/subscriber/settings/DangerZone.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var DangerZonevue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/settings/DangerZone.vue?vue&type=script&lang=js&
 /* harmony default export */ var settings_DangerZonevue_type_script_lang_js_ = (DangerZonevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/settings/DangerZone.vue



function DangerZone_injectStyles (context) {
  
  var style0 = __webpack_require__(328)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var DangerZone_component = Object(componentNormalizer["a" /* default */])(
  settings_DangerZonevue_type_script_lang_js_,
  DangerZonevue_type_template_id_985b9a9c_scoped_true_render,
  DangerZonevue_type_template_id_985b9a9c_scoped_true_staticRenderFns,
  false,
  DangerZone_injectStyles,
  "985b9a9c",
  "231c8b3a"
  
)

/* harmony default export */ var DangerZone = (DangerZone_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/pages/admin/subscriber/settings/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import AccountSettings from '@/components/admin/subscriber/settings/AccountSettings.vue'






/* harmony default export */ var settingsvue_type_script_lang_js_ = ({
  layout: 'default-admin-subscriber',
  components: {
    Settings: Settings,
    AccountData: AccountData["a" /* default */],
    DangerZone: DangerZone,
    Password: Password,
    Time: Time,
    Referral: Referral
  },
  methods: {
    loadBack() {
      this.$router.go(-1);
    }

  }
});
// CONCATENATED MODULE: ./apps/manyletter.com/pages/admin/subscriber/settings/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var subscriber_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/pages/admin/subscriber/settings/index.vue



function settings_injectStyles (context) {
  
  
}

/* normalize component */

var settings_component = Object(componentNormalizer["a" /* default */])(
  subscriber_settingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  settings_injectStyles,
  "fa8202c8",
  "2a725ea4"
  
)

/* harmony default export */ var settings = __webpack_exports__["default"] = (settings_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map