exports.ids = [11];
exports.modules = {

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(315);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("c256191e", content, true, context)
};

/***/ }),

/***/ 181:
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
//
//
//
//
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
  props: ['newsletterData', 'tagList'],

  data() {
    return {
      submitSuccess: false,
      avatar: this.newsletterData.avatar,
      cover: this.newsletterData.cover,
      title: this.newsletterData.title,
      intro: this.newsletterData.intro,
      description: this.newsletterData.description,
      creator_name: this.newsletterData.creator_name,
      email: this.newsletterData.email,
      url: this.newsletterData.url,
      access: this.newsletterData.access,
      tags: this.newsletterData.tags === null ? [] : this.newsletterData.tags.split(","),
      selectedFileAvatar: null,
      selectedFileUrlAvatar: null,
      showSaveAvatar: false,
      saveTextAvatar: "Save",
      selectedFileCover: null,
      selectedFileUrlCover: null,
      showSaveCover: false,
      saveTextCover: "Save",
      charCounterIntro: this.newsletterData.intro.length,
      charCounterLong: this.newsletterData.description.length
    };
  },

  methods: {
    charCountIntro() {
      this.charCounterIntro = this.intro.length;
    },

    charCountLong() {
      this.charCounterLong = this.description.length;
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
      formData.append('newsletter_id', this.$store.state.userData.newsletter_id);
      this.$axios.$post('/api/maylday/upload/newsletter-avatar', formData, {
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
      formData.append('newsletter_id', this.$store.state.userData.newsletter_id);
      this.$axios.$post('/api/maylday/upload/newsletter-cover', formData, {
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
      await this.$axios.$put('/api/maylday/newsletter/tag', {
        "id": this.$store.state.userData.newsletter_id,
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
      await this.$axios.$put('/api/maylday/newsletter', {
        'id': this.$store.state.userData.newsletter_id,
        'title': this.title,
        'intro': this.intro,
        'description': this.description,
        'creator_name': this.creator_name,
        'email': this.email,
        'url': this.url,
        'access': this.access
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(100)["URL"]))

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(317);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("00c3526c", content, true, context)
};

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(319);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("9161d47e", content, true, context)
};

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(321);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("b7f49ce8", content, true, context)
};

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(323);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("3fb31034", content, true, context)
};

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(325);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("44bfc854", content, true, context)
};

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_394faed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(180);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_394faed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_394faed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_394faed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_394faed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_394faed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".newsletter_name[data-v-394faed4]{color:#000;font-weight:600}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsletterDetails_vue_vue_type_style_index_0_id_aa2d81ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(182);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsletterDetails_vue_vue_type_style_index_0_id_aa2d81ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsletterDetails_vue_vue_type_style_index_0_id_aa2d81ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsletterDetails_vue_vue_type_style_index_0_id_aa2d81ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsletterDetails_vue_vue_type_style_index_0_id_aa2d81ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsletterDetails_vue_vue_type_style_index_0_id_aa2d81ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".avatar[data-v-aa2d81ee]{height:100px;width:100px;border-radius:100px}.avatar[data-v-aa2d81ee],.cover[data-v-aa2d81ee]{background-repeat:no-repeat;background-position:50%;background-size:cover;cursor:pointer;background-color:#eee}.cover[data-v-aa2d81ee]{height:180px;border-radius:4px}.flex>button.tag[data-v-aa2d81ee]{margin:3px;border:1px solid #eee;background-color:#fff;padding:10px 15px;color:#000;border-radius:4px;cursor:pointer}.flex>button.tag.active[data-v-aa2d81ee],.flex>button.tag[data-v-aa2d81ee]:hover{border:1px solid #000;background-color:#000;color:#fff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareSubscription_vue_vue_type_style_index_0_id_2d9467b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(183);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareSubscription_vue_vue_type_style_index_0_id_2d9467b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareSubscription_vue_vue_type_style_index_0_id_2d9467b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareSubscription_vue_vue_type_style_index_0_id_2d9467b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareSubscription_vue_vue_type_style_index_0_id_2d9467b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareSubscription_vue_vue_type_style_index_0_id_2d9467b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "p.token[data-v-2d9467b4]{display:table;table-layout:fixed;width:100%;word-wrap:break-word}p.social[data-v-2d9467b4]{background:#fff;border-radius:20px;height:40px;width:40px;display:grid;justify-items:center;align-items:center;box-shadow:0 1px 6px 0 rgba(14,30,37,.12);color:#000;cursor:pointer;font-size:20px}p.social.facebook[data-v-2d9467b4]:hover{color:#3b5998}p.social.twitter[data-v-2d9467b4]:hover{color:#00acee}p.social.instagram[data-v-2d9467b4]:hover{color:#e1306c}ul[data-v-2d9467b4]{margin-left:20px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportExport_vue_vue_type_style_index_0_id_7a485fca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportExport_vue_vue_type_style_index_0_id_7a485fca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportExport_vue_vue_type_style_index_0_id_7a485fca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportExport_vue_vue_type_style_index_0_id_7a485fca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportExport_vue_vue_type_style_index_0_id_7a485fca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportExport_vue_vue_type_style_index_0_id_7a485fca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".token[data-v-7a485fca]{word-wrap:break-word}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentInfo_vue_vue_type_style_index_0_id_6182f028_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(185);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentInfo_vue_vue_type_style_index_0_id_6182f028_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentInfo_vue_vue_type_style_index_0_id_6182f028_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentInfo_vue_vue_type_style_index_0_id_6182f028_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentInfo_vue_vue_type_style_index_0_id_6182f028_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentInfo_vue_vue_type_style_index_0_id_6182f028_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".token[data-v-6182f028]{word-wrap:break-word}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DangerZone_vue_vue_type_style_index_0_id_425500be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(186);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DangerZone_vue_vue_type_style_index_0_id_425500be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DangerZone_vue_vue_type_style_index_0_id_425500be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DangerZone_vue_vue_type_style_index_0_id_425500be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DangerZone_vue_vue_type_style_index_0_id_425500be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DangerZone_vue_vue_type_style_index_0_id_425500be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".danger-zone[data-v-425500be]{border:1px solid rgba(215,58,74,.48627)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/pages/admin/creator/settings/index.vue?vue&type=template&id=78c674df&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_c('Settings'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-narrow grid gap-60\" data-v-78c674df>","</div>",[_c('NewsletterDetails',{attrs:{"newsletterData":_vm.newsletterData.data,"tagList":_vm.tagList}}),_vm._ssrNode(" "),_c('ShareSubscription'),_vm._ssrNode(" "),_c('ImportExport'),_vm._ssrNode(" "),_c('PaymentInfo'),_vm._ssrNode(" "),_c('DangerZone')],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/pages/admin/creator/settings/index.vue?vue&type=template&id=78c674df&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/creator/settings/Settings.vue?vue&type=template&id=394faed4&scoped=true&
var Settingsvue_type_template_id_394faed4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"Settings"}},[_vm._ssrNode("<div class=\"wrapper\" data-v-394faed4><div class=\"container-narrow grid gap-20\" data-v-394faed4><h2 data-v-394faed4>Settings</h2> <p data-v-394faed4>Edit details of your newsletter. Invite your team members who can manage Manyletter. Find out information about your subscription plan, discounts and payments. Import / Export your newsletter subscriber.</p></div></div>")])}
var Settingsvue_type_template_id_394faed4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/settings/Settings.vue?vue&type=template&id=394faed4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/creator/settings/Settings.vue?vue&type=script&lang=js&
//
//
//
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
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/settings/Settings.vue?vue&type=script&lang=js&
 /* harmony default export */ var settings_Settingsvue_type_script_lang_js_ = (Settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/settings/Settings.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(314)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  settings_Settingsvue_type_script_lang_js_,
  Settingsvue_type_template_id_394faed4_scoped_true_render,
  Settingsvue_type_template_id_394faed4_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "394faed4",
  "6f37610d"
  
)

/* harmony default export */ var Settings = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/creator/settings/NewsletterDetails.vue?vue&type=template&id=aa2d81ee&scoped=true&
var NewsletterDetailsvue_type_template_id_aa2d81ee_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component grid gap-20"},[_vm._ssrNode("<div class=\"box grid gap-20\" data-v-aa2d81ee>","</div>",[_vm._ssrNode("<h3 data-v-aa2d81ee>Newsletter details</h3> <p data-v-aa2d81ee>Fill in your profile so other users can find you in ManyLetter and follow you.</p> <div data-v-aa2d81ee><form data-v-aa2d81ee><label for=\"title\" data-v-aa2d81ee>Avatar</label> <div class=\"grid gap-20 col-2 auto justify-content-start align-items-center\" data-v-aa2d81ee>"+((_vm.selectedFileUrlAvatar === null)?("<div class=\"avatar\""+(_vm._ssrStyle(null,'background-image: url(https://storage.manyletter.com/ymello_filestorage/img/newsletter_avatar/' + _vm.avatar + ')', null))+" data-v-aa2d81ee></div>"):("<div class=\"avatar\""+(_vm._ssrStyle(null,'background-image: url(' + _vm.selectedFileUrlAvatar + ')', null))+" data-v-aa2d81ee></div>"))+" <div class=\"grid gap-10 auto md-col-2 justify-content-start align-items-center\" data-v-aa2d81ee><button class=\"cta\""+(_vm._ssrStyle(null,null, { display: (_vm.showSaveAvatar) ? '' : 'none' }))+" data-v-aa2d81ee>"+_vm._ssrEscape(_vm._s(_vm.saveTextAvatar))+"</button> <button class=\"cta red\""+(_vm._ssrStyle(null,null, { display: (_vm.showSaveAvatar) ? '' : 'none' }))+" data-v-aa2d81ee>Cancel</button></div></div> <input name=\"myFile\" type=\"file\" class=\"hidden\" data-v-aa2d81ee></form></div> <div data-v-aa2d81ee><form data-v-aa2d81ee><label for=\"title\" data-v-aa2d81ee>Cover</label> <div class=\"grid gap-20\" data-v-aa2d81ee>"+((_vm.selectedFileUrlCover === null)?("<div class=\"cover\""+(_vm._ssrStyle(null,'background-image: url(https://storage.manyletter.com/ymello_filestorage/img/newsletter_cover/' + _vm.cover + ')', null))+" data-v-aa2d81ee></div>"):("<div class=\"cover\""+(_vm._ssrStyle(null,'background-image: url(' + _vm.selectedFileUrlCover + ')', null))+" data-v-aa2d81ee></div>"))+" <div class=\"grid gap-10 col-2 auto justify-content-start align-items-center\" data-v-aa2d81ee><button class=\"cta\""+(_vm._ssrStyle(null,null, { display: (_vm.showSaveCover) ? '' : 'none' }))+" data-v-aa2d81ee>"+_vm._ssrEscape(_vm._s(_vm.saveTextCover))+"</button> <button class=\"cta red\""+(_vm._ssrStyle(null,null, { display: (_vm.showSaveCover) ? '' : 'none' }))+" data-v-aa2d81ee>Cancel</button></div></div> <input name=\"myFile\" type=\"file\" class=\"hidden\" data-v-aa2d81ee></form></div> "),_vm._ssrNode("<form class=\"grid gap-20 \" data-v-aa2d81ee>","</form>",[_vm._ssrNode("<div class=\"grid gap-20\" data-v-aa2d81ee>","</div>",[_vm._ssrNode("<div data-v-aa2d81ee><label for=\"title\" data-v-aa2d81ee>Newsletter name *</label> <input type=\"text\" name=\"title\""+(_vm._ssrAttr("value",(_vm.title)))+" data-v-aa2d81ee></div> <div data-v-aa2d81ee><label for=\"title\" data-v-aa2d81ee>Short intro *</label> <textarea maxlength=\"255\" type=\"text\" name=\"intro\" data-v-aa2d81ee>"+_vm._ssrEscape(_vm._s(_vm.intro))+"</textarea> <p class=\"char-counter\" data-v-aa2d81ee>"+_vm._ssrEscape(_vm._s(_vm.charCounterIntro)+" / 255")+"</p></div> <div data-v-aa2d81ee><label for=\"title\" data-v-aa2d81ee>Description *</label> <textarea maxlength=\"1000\" type=\"text\" name=\"description\" data-v-aa2d81ee>"+_vm._ssrEscape(_vm._s(_vm.description))+"</textarea> <p class=\"char-counter\" data-v-aa2d81ee>"+_vm._ssrEscape(_vm._s(_vm.charCounterLong)+" / 1000")+"</p></div> <div data-v-aa2d81ee><label for=\"title\" data-v-aa2d81ee>Creator name *</label> <input type=\"text\" name=\"creator_name\""+(_vm._ssrAttr("value",(_vm.creator_name)))+" data-v-aa2d81ee></div> <div data-v-aa2d81ee><label for=\"title\" data-v-aa2d81ee>Newsletter email *</label> <input type=\"text\" name=\"email\""+(_vm._ssrAttr("value",(_vm.email)))+" data-v-aa2d81ee></div> <div data-v-aa2d81ee><label for=\"title\" data-v-aa2d81ee>Newsletter url link *</label> <input type=\"text\" name=\"url\""+(_vm._ssrAttr("value",(_vm.url)))+" data-v-aa2d81ee></div> "),_vm._ssrNode("<div data-v-aa2d81ee>","</div>",[_vm._ssrNode("<label for=\"title\" data-v-aa2d81ee>Newsletter visibility</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.access),expression:"access"}],attrs:{"type":"text","name":"access"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.access=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"0"}},[_vm._v("hidden")]),_vm._v(" "),_c('option',{attrs:{"value":"1"}},[_vm._v("visible")])])],2),_vm._ssrNode(" <div class=\"hr\" data-v-aa2d81ee></div> <h4 data-v-aa2d81ee>Tags</h4> <div class=\"flex wrap\" data-v-aa2d81ee>"+(_vm._ssrList((_vm.tagList.data),function(item){return ("<button"+(_vm._ssrClass("tag",(_vm.tags.includes(item.id)) ? 'active' : ''))+" data-v-aa2d81ee>"+_vm._ssrEscape(_vm._s(item.name))+"</button>")}))+"</div>")],2),_vm._ssrNode(" <div class=\"hr\" data-v-aa2d81ee></div> <div class=\"grid col-2 gap-10 auto justify-content-start align-items-center\" data-v-aa2d81ee><button type=\"submit\" class=\"cta\" data-v-aa2d81ee>Save changes</button> <p class=\"info\""+(_vm._ssrStyle(null,null, { display: (_vm.submitSuccess) ? '' : 'none' }))+" data-v-aa2d81ee>Saved!</p></div>")],2)],2)])}
var NewsletterDetailsvue_type_template_id_aa2d81ee_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/settings/NewsletterDetails.vue?vue&type=template&id=aa2d81ee&scoped=true&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/creator/settings/NewsletterDetails.vue?vue&type=script&lang=js&
var NewsletterDetailsvue_type_script_lang_js_ = __webpack_require__(181);

// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/settings/NewsletterDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var settings_NewsletterDetailsvue_type_script_lang_js_ = (NewsletterDetailsvue_type_script_lang_js_["a" /* default */]); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/settings/NewsletterDetails.vue



function NewsletterDetails_injectStyles (context) {
  
  var style0 = __webpack_require__(316)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var NewsletterDetails_component = Object(componentNormalizer["a" /* default */])(
  settings_NewsletterDetailsvue_type_script_lang_js_,
  NewsletterDetailsvue_type_template_id_aa2d81ee_scoped_true_render,
  NewsletterDetailsvue_type_template_id_aa2d81ee_scoped_true_staticRenderFns,
  false,
  NewsletterDetails_injectStyles,
  "aa2d81ee",
  "71a2c9cf"
  
)

/* harmony default export */ var NewsletterDetails = (NewsletterDetails_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/creator/settings/Team.vue?vue&type=template&id=33ff5888&scoped=true&
var Teamvue_type_template_id_33ff5888_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component grid gap-20"},[_vm._ssrNode("<div class=\"box grid gap-20\" data-v-33ff5888><h3 data-v-33ff5888>Team members</h3> <div class=\"grid table-wrapper\" data-v-33ff5888><div class=\"table grid auto col-3\" data-v-33ff5888><div class=\"table-head\" data-v-33ff5888><div data-v-33ff5888>Email</div> <div data-v-33ff5888>Type</div> <div class=\"text-center\" data-v-33ff5888>Last Activity</div></div> <div class=\"table-row\" data-v-33ff5888><div data-v-33ff5888>tomas.slouka@gmail.com</div> <div data-v-33ff5888><span class=\"tag gray text-center\" data-v-33ff5888>owner</span></div> <div class=\"text-center\" data-v-33ff5888>01.01.1991</div></div> <div class=\"table-row\" data-v-33ff5888><div data-v-33ff5888>slouka@upforweb.com</div> <div data-v-33ff5888><span class=\"tag gray text-center\" data-v-33ff5888>admin</span></div> <div class=\"text-center\" data-v-33ff5888>01.01.1991</div></div> <div class=\"table-row\" data-v-33ff5888><div data-v-33ff5888>polak@upforweb.com</div> <div data-v-33ff5888><span class=\"tag gray text-center\" data-v-33ff5888>member</span></div> <div class=\"text-center\" data-v-33ff5888>01.01.1991</div></div></div></div> <div class=\"hr\" data-v-33ff5888></div> <form class=\"grid gap-20 \" data-v-33ff5888><h4 data-v-33ff5888>Add a team member</h4> <div class=\"grid gap-20\" data-v-33ff5888><div data-v-33ff5888><label for=\"title\" data-v-33ff5888>Email address *</label> <input type=\"text\" name=\"email\" data-v-33ff5888></div></div> <div class=\"hr\" data-v-33ff5888></div> <div class=\"grid col-2 gap-10 auto justify-content-start align-items-center\" data-v-33ff5888><button type=\"submit\" class=\"cta\" data-v-33ff5888>Invite team member</button> <p class=\"info\""+(_vm._ssrStyle(null,null, { display: (_vm.submitSuccess) ? '' : 'none' }))+" data-v-33ff5888>Saved!</p></div></form></div>")])}
var Teamvue_type_template_id_33ff5888_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/settings/Team.vue?vue&type=template&id=33ff5888&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/creator/settings/Team.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Teamvue_type_script_lang_js_ = ({
  // props: ['newsletterData', 'tagList'],
  data() {
    return {
      submitSuccess: false
    };
  }

});
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/settings/Team.vue?vue&type=script&lang=js&
 /* harmony default export */ var settings_Teamvue_type_script_lang_js_ = (Teamvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/settings/Team.vue



function Team_injectStyles (context) {
  
  
}

/* normalize component */

var Team_component = Object(componentNormalizer["a" /* default */])(
  settings_Teamvue_type_script_lang_js_,
  Teamvue_type_template_id_33ff5888_scoped_true_render,
  Teamvue_type_template_id_33ff5888_scoped_true_staticRenderFns,
  false,
  Team_injectStyles,
  "33ff5888",
  "0233f347"
  
)

/* harmony default export */ var Team = (Team_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/creator/settings/ShareSubscription.vue?vue&type=template&id=2d9467b4&scoped=true&
var ShareSubscriptionvue_type_template_id_2d9467b4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component grid gap-60"},[_vm._ssrNode("<div class=\"box grid gap-20\" data-v-2d9467b4><h3 data-v-2d9467b4>Subscription portal</h3> <p data-v-2d9467b4>Copy the link below to navigate your potential subscribers to your newsletter page, where they can subscribe to your newsletter with one click.</p> <div class=\"grid auto gap-40\" data-v-2d9467b4><div class=\"table grid auto\" data-v-2d9467b4><div class=\"table-head\" data-v-2d9467b4><div data-v-2d9467b4>Your newsletter page link</div></div> <div class=\"table-row\" data-v-2d9467b4><div data-v-2d9467b4><p class=\"token small\" data-v-2d9467b4>"+_vm._ssrEscape("https://manyletter.com/admin/subscriber/subscriptions/newsletters/detail/"+_vm._s(_vm.$store.state.userData.newsletter_id))+"</p></div></div></div></div></div>")])}
var ShareSubscriptionvue_type_template_id_2d9467b4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/settings/ShareSubscription.vue?vue&type=template&id=2d9467b4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/creator/settings/ShareSubscription.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ShareSubscriptionvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/settings/ShareSubscription.vue?vue&type=script&lang=js&
 /* harmony default export */ var settings_ShareSubscriptionvue_type_script_lang_js_ = (ShareSubscriptionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/settings/ShareSubscription.vue



function ShareSubscription_injectStyles (context) {
  
  var style0 = __webpack_require__(318)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var ShareSubscription_component = Object(componentNormalizer["a" /* default */])(
  settings_ShareSubscriptionvue_type_script_lang_js_,
  ShareSubscriptionvue_type_template_id_2d9467b4_scoped_true_render,
  ShareSubscriptionvue_type_template_id_2d9467b4_scoped_true_staticRenderFns,
  false,
  ShareSubscription_injectStyles,
  "2d9467b4",
  "1db0c8bc"
  
)

/* harmony default export */ var ShareSubscription = (ShareSubscription_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/creator/settings/ImportExport.vue?vue&type=template&id=7a485fca&scoped=true&
var ImportExportvue_type_template_id_7a485fca_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component grid gap-20"},[_vm._ssrNode("<div class=\"box grid gap-20 locked\" data-v-7a485fca>","</div>",[_vm._ssrNode("<p class=\"note justify-self-start\" data-v-7a485fca>Under development</p> <h3 data-v-7a485fca>Import / Export subscribers</h3> <p data-v-7a485fca>You can import your subscribers to ManyLetter and start sending messages immediately. If you ever decide that you want to leave ManyLetter, you can export your subscriber's email addresses.</p> <div class=\"grid gap-20\" data-v-7a485fca><div data-v-7a485fca><label for=\"title\" data-v-7a485fca>Paste your subscribre's emails here (Emails have to be separated by a comma)</label> <textarea type=\"text\" name=\"description\" placeholder data-v-7a485fca>"+_vm._ssrEscape(_vm._s(_vm.importSubscribers))+"</textarea></div></div> <div class=\"hr\" data-v-7a485fca></div> "),_vm._ssrNode("<div data-v-7a485fca>","</div>",[_vm._ssrNode("<button type=\"submit\" class=\"cta\" data-v-7a485fca>Import subscribres</button> "),_c('nuxt-link',{staticClass:"cta white justify-self-start",attrs:{"tag":"button","to":"/admin/creator/settings/export"}},[_vm._v("Export subscribers")])],2)],2)])}
var ImportExportvue_type_template_id_7a485fca_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/settings/ImportExport.vue?vue&type=template&id=7a485fca&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/creator/settings/ImportExport.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ImportExportvue_type_script_lang_js_ = ({
  data() {
    return {
      importSubscribers: ""
    };
  }

});
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/settings/ImportExport.vue?vue&type=script&lang=js&
 /* harmony default export */ var settings_ImportExportvue_type_script_lang_js_ = (ImportExportvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/settings/ImportExport.vue



function ImportExport_injectStyles (context) {
  
  var style0 = __webpack_require__(320)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var ImportExport_component = Object(componentNormalizer["a" /* default */])(
  settings_ImportExportvue_type_script_lang_js_,
  ImportExportvue_type_template_id_7a485fca_scoped_true_render,
  ImportExportvue_type_template_id_7a485fca_scoped_true_staticRenderFns,
  false,
  ImportExport_injectStyles,
  "7a485fca",
  "ab93d6ba"
  
)

/* harmony default export */ var ImportExport = (ImportExport_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/creator/settings/PaymentInfo.vue?vue&type=template&id=6182f028&scoped=true&
var PaymentInfovue_type_template_id_6182f028_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component grid gap-20"},[_vm._ssrNode("<div class=\"box grid gap-20 locked\" data-v-6182f028><p class=\"note justify-self-start\" data-v-6182f028>Under development</p> <h3 data-v-6182f028>Payment information</h3> <p data-v-6182f028>Find out information about your subscription plan. Upgrade your plan to increase the limits of subscribers count and email messages sent.</p> <div class=\"hr\" data-v-6182f028></div> <div data-v-6182f028><button class=\"cta\" data-v-6182f028>Open the secure payment portal</button></div></div>")])}
var PaymentInfovue_type_template_id_6182f028_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/settings/PaymentInfo.vue?vue&type=template&id=6182f028&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/creator/settings/PaymentInfo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PaymentInfovue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/settings/PaymentInfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var settings_PaymentInfovue_type_script_lang_js_ = (PaymentInfovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/settings/PaymentInfo.vue



function PaymentInfo_injectStyles (context) {
  
  var style0 = __webpack_require__(322)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var PaymentInfo_component = Object(componentNormalizer["a" /* default */])(
  settings_PaymentInfovue_type_script_lang_js_,
  PaymentInfovue_type_template_id_6182f028_scoped_true_render,
  PaymentInfovue_type_template_id_6182f028_scoped_true_staticRenderFns,
  false,
  PaymentInfo_injectStyles,
  "6182f028",
  "fc07c94c"
  
)

/* harmony default export */ var PaymentInfo = (PaymentInfo_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/creator/settings/DangerZone.vue?vue&type=template&id=425500be&scoped=true&
var DangerZonevue_type_template_id_425500be_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component grid gap-20 "},[_vm._ssrNode("<div class=\"box grid gap-20 danger-zone\" data-v-425500be><h3 data-v-425500be>Danger zone</h3> <div data-v-425500be><button class=\"cta red\" data-v-425500be>Delete newsletter</button></div></div>")])}
var DangerZonevue_type_template_id_425500be_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/settings/DangerZone.vue?vue&type=template&id=425500be&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/creator/settings/DangerZone.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var DangerZonevue_type_script_lang_js_ = ({
  methods: {
    async deleteButton() {
      await this.$axios.$delete('/api/maylday/newsletter/' + this.$store.state.userData.newsletter_id).then(response => {
        console.log(response);
        this.$router.push({
          path: '/admin/home'
        });
      }, error => {
        console.log(error);
      });
    }

  }
});
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/settings/DangerZone.vue?vue&type=script&lang=js&
 /* harmony default export */ var settings_DangerZonevue_type_script_lang_js_ = (DangerZonevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/settings/DangerZone.vue



function DangerZone_injectStyles (context) {
  
  var style0 = __webpack_require__(324)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var DangerZone_component = Object(componentNormalizer["a" /* default */])(
  settings_DangerZonevue_type_script_lang_js_,
  DangerZonevue_type_template_id_425500be_scoped_true_render,
  DangerZonevue_type_template_id_425500be_scoped_true_staticRenderFns,
  false,
  DangerZone_injectStyles,
  "425500be",
  "c5c8524e"
  
)

/* harmony default export */ var DangerZone = (DangerZone_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/pages/admin/creator/settings/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var settingsvue_type_script_lang_js_ = ({
  layout: 'default-admin-creator',
  components: {
    Settings: Settings,
    Team: Team,
    ShareSubscription: ShareSubscription,
    DangerZone: DangerZone,
    NewsletterDetails: NewsletterDetails,
    PaymentInfo: PaymentInfo,
    ImportExport: ImportExport
  },

  async asyncData({
    $axios,
    store
  }) {
    const [newsletterData, tagList] = await Promise.all([$axios.$get('/api/maylday/newsletter/' + store.state.userData.newsletter_id), $axios.$get('/api/maylday/tag/all')]);
    return {
      newsletterData,
      tagList
    };
  }

});
// CONCATENATED MODULE: ./apps/manyletter.com/pages/admin/creator/settings/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var creator_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/pages/admin/creator/settings/index.vue



function settings_injectStyles (context) {
  
  
}

/* normalize component */

var settings_component = Object(componentNormalizer["a" /* default */])(
  creator_settingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  settings_injectStyles,
  "78c674df",
  "02ce4342"
  
)

/* harmony default export */ var settings = __webpack_exports__["default"] = (settings_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map