exports.ids = [20];
exports.modules = {

/***/ 143:
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
//
//
//
//
/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['dataDetail', 'tagList', 'categoryList'],

  data() {
    return {
      submitSuccess: false,
      submitError: false,
      submitText: 'Uložené!',
      categories: this.dataDetail.data.categoriesIds === null ? [] : this.dataDetail.data.categoriesIds.split(","),
      tags: this.dataDetail.data.tagsIds === null ? [] : this.dataDetail.data.tagsIds.split(","),
      cover: this.dataDetail.data.cover,
      selectedFileCover: null,
      selectedFileUrlCover: null,
      showSaveCover: false,
      saveTextCover: "Nahrať"
    };
  },

  methods: {
    async updateCategory(category_id) {
      await this.$axios.$put('/book/category', {
        "id": this.$route.params.id,
        "category_id": category_id
      }).then(response => {
        console.log(response.message);

        if (response.message === "added") {
          this.categories.push(category_id);
        }

        if (response.message === "removed") {
          this.categories = this.categories.filter(function (item) {
            return item !== category_id;
          });
        }

        console.log(this.categories);
      }, error => {
        console.log(error); //this.res = error.response.data.message
      });
    },

    async updateTag(tag_id) {
      await this.$axios.$put('/book/tag', {
        "id": this.$route.params.id,
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
      // if(this.password_1 === this.password_2) {
      await this.$axios.$put('/book', {
        // "category_id": this.category_id,
        "id": this.$route.params.id,
        "name": this.dataDetail.data.name,
        "author": this.dataDetail.data.author,
        "price": this.dataDetail.data.price,
        "short_text": this.dataDetail.data.short_text,
        "long_text": this.dataDetail.data.long_text
      }).then(response => {
        console.log(response); // this.$store.dispatch('auth/setUser', {
        //     endpoint: '/user'
        // })

        this.submitSuccess = true;
        this.submitText = 'Uložené!'; // if(this.password_1 === '') { this.password_locked = 0 } else { this.password_locked = 1 }

        setTimeout(() => this.submitSuccess = false, 4000); // this.$router.push('/admin/subscriber/settings')

        this.$router.push('/admin/titles');
      }, error => {
        console.log(error); //this.res = error.response.data.message
      }); // } else {
      //     this.submitError = true;
      //     this.submitText = 'Passwords do not match!';
      //     setTimeout(() => {
      //         this.submitError = false, 
      //         this.submitText = ''
      //     }, 4000)
      // }
    },

    // async removePassword() {
    //     await this.$axios.$put('/user/removepassword', {
    //     })
    //     .then((response) => {
    //         console.log(response);
    //         this.$store.dispatch('auth/setUser', {
    //             endpoint: '/user'
    //         })
    //         this.password_locked = 0
    //         this.password_1 = ''
    //         this.password_2 = ''
    //         // this.$router.push('/admin/creator/dashboard');
    //     }, (error) => {
    //         console.log(error);
    //         //this.res = error.response.data.message
    //     });
    // }
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
      formData.append('book_id', this.$route.params.id);
      this.$axios.$post('/upload/book-cover', formData, {
        onUploadProgress: progressEvent => {
          this.saveTextCover = Math.round(progressEvent.loaded / progressEvent.total * 100) + '%';
        }
      }).then(response => {
        // this.$store.dispatch('setUser');
        this.showSaveCover = false;
        this.saveTextCover = "Nahrať";
        console.log(response);
      }, error => {
        console.log(error);
      });
    } // COVER END


  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(85)["URL"]))

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(231);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("55fbb072", content, true, context)
};

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEdit_vue_vue_type_style_index_0_id_71f8886b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(172);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEdit_vue_vue_type_style_index_0_id_71f8886b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEdit_vue_vue_type_style_index_0_id_71f8886b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEdit_vue_vue_type_style_index_0_id_71f8886b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEdit_vue_vue_type_style_index_0_id_71f8886b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cover[data-v-71f8886b]{min-height:180px;border:1px solid #eee;border-radius:4px;background-repeat:no-repeat;background-position:50%;background-size:cover;cursor:pointer;background-color:#eee;position:relative;padding:5px}.cover>img[data-v-71f8886b]{max-height:180px;min-height:180px;max-width:100%;border-radius:0}.cover>p.small[data-v-71f8886b]{background-color:#fff;border:1px solid #eee;border-radius:4px;padding:4px 20px;margin:5px;position:absolute}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/pages/admin/titles/detail/_id/index.vue?vue&type=template&id=445da1dc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_c('SubNav'),_vm._ssrNode(" "),_c('Hero',{attrs:{"h1":"Administrácia","h2":"Knižné tituly"}}),_vm._ssrNode(" "),_c('FormEdit',{attrs:{"dataDetail":_vm.dataDetail,"categoryList":_vm.categoryList,"tagList":_vm.tagList}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/pages/admin/titles/detail/_id/index.vue?vue&type=template&id=445da1dc&

// EXTERNAL MODULE: ./apps/tulaveknizky.sk/components/admin/_common/Hero.vue + 4 modules
var Hero = __webpack_require__(92);

// EXTERNAL MODULE: ./apps/tulaveknizky.sk/components/admin/_common/SubNav.vue + 4 modules
var SubNav = __webpack_require__(93);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/admin/titles/FormEdit.vue?vue&type=template&id=71f8886b&scoped=true&
var FormEditvue_type_template_id_71f8886b_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard grid\" data-v-71f8886b>","</div>",[_vm._ssrNode("<div class=\"grid gap-40\" data-v-71f8886b>","</div>",[_vm._ssrNode("<h2 data-v-71f8886b>Upravenie knižného titulu</h2> "),_vm._ssrNode("<div class=\"box-form\" data-v-71f8886b>","</div>",[_vm._ssrNode("<div class=\"grid gap-60 md-col-2 align-items-start\" data-v-71f8886b>","</div>",[_vm._ssrNode("<form data-v-71f8886b>","</form>",[_vm._ssrNode("<div class=\"grid gap-20\" data-v-71f8886b>","</div>",[_vm._ssrNode("<div data-v-71f8886b><label for=\"name\" data-v-71f8886b>Názov knihy</label> <input type=\"text\" placeholder=\"Názov knihy\" name=\"name\""+(_vm._ssrAttr("value",(_vm.dataDetail.data.name)))+" data-v-71f8886b></div> <div data-v-71f8886b><label for=\"author\" data-v-71f8886b>Autor</label> <input type=\"text\" placeholder=\"Autor\" name=\"author\""+(_vm._ssrAttr("value",(_vm.dataDetail.data.author)))+" data-v-71f8886b></div> <div data-v-71f8886b><label for=\"price\" data-v-71f8886b>Cena</label> <input type=\"text\" placeholder=\"Cena\" name=\"price\""+(_vm._ssrAttr("value",(_vm.dataDetail.data.price)))+" data-v-71f8886b></div> <div data-v-71f8886b><label for=\"short_text\" data-v-71f8886b>Krátky popis</label> <textarea type=\"text\" placeholder=\"Krátky popis\" name=\"short_text\" data-v-71f8886b>"+_vm._ssrEscape(_vm._s(_vm.dataDetail.data.short_text))+"</textarea></div> <div data-v-71f8886b><label for=\"long_text\" data-v-71f8886b>Celý popis</label> <textarea type=\"text\" placeholder=\"Celý popis\" name=\"long_text\" class=\"long\" data-v-71f8886b>"+_vm._ssrEscape(_vm._s(_vm.dataDetail.data.long_text))+"</textarea></div> "),_vm._ssrNode("<div class=\"justify-self-start grid col-3 auto gap-10 align-items-center\" data-v-71f8886b>","</div>",[_vm._ssrNode("<button type=\"submit\" class=\"button cta black\" data-v-71f8886b>Uložiť</button> "),_c('nuxt-link',{staticClass:"button cta red",attrs:{"to":"/admin/titles"}},[_vm._v("Zrušiť")]),_vm._ssrNode(" <div data-v-71f8886b>"+((_vm.submitSuccess)?("<p class=\"success\" data-v-71f8886b>"+_vm._ssrEscape(_vm._s(_vm.submitText))+"</p>"):"<!---->")+"</div>")],2)],2)]),_vm._ssrNode(" <div class=\"grid gap-20\" data-v-71f8886b><label for=\"long_text\" data-v-71f8886b>Obrázok</label> <form data-v-71f8886b><div class=\"grid gap-20\" data-v-71f8886b>"+((_vm.selectedFileUrlCover === null)?("<div class=\"cover grid\" data-v-71f8886b><img"+(_vm._ssrAttr("src",'https://storage.tulaveknizky.sk/public/tulaveknizky/img/cover/' + _vm.cover))+" alt data-v-71f8886b> <p class=\"align-self-start justify-self-end small\" data-v-71f8886b>Vybrať obrázok</p></div>"):("<div class=\"cover grid\" data-v-71f8886b><img"+(_vm._ssrAttr("src",_vm.selectedFileUrlCover))+" alt data-v-71f8886b> <p class=\"align-self-start justify-self-end small\" data-v-71f8886b>Vybrať obrázok</p></div>"))+" <div class=\"grid gap-10 col-2 auto justify-content-end align-items-center\" data-v-71f8886b><button class=\"cta red\""+(_vm._ssrStyle(null,null, { display: (_vm.showSaveCover) ? '' : 'none' }))+" data-v-71f8886b>Zrušiť</button> <button class=\"cta black\""+(_vm._ssrStyle(null,null, { display: (_vm.showSaveCover) ? '' : 'none' }))+" data-v-71f8886b>"+_vm._ssrEscape(_vm._s(_vm.saveTextCover))+"</button></div></div> <input name=\"myFile\" type=\"file\" class=\"hidden\" data-v-71f8886b></form> <label for=\"long_text\" data-v-71f8886b>Kategórie</label> <div class=\"flex wrap tags\" data-v-71f8886b>"+(_vm._ssrList((_vm.categoryList.data),function(item){return ("<div"+(_vm._ssrClass(null,(_vm.categories.includes(item.id)) ? 'tag active' : 'tag'))+" data-v-71f8886b>"+_vm._ssrEscape(_vm._s(item.name))+"</div>")}))+"</div> <label for=\"long_text\" data-v-71f8886b>Značky</label> <div class=\"flex wrap tags\" data-v-71f8886b>"+(_vm._ssrList((_vm.tagList.data),function(item){return ("<div"+(_vm._ssrClass(null,(_vm.tags.includes(item.id)) ? 'tag active' : 'tag'))+" data-v-71f8886b>"+_vm._ssrEscape(_vm._s(item.name))+"</div>")}))+"</div></div>")],2)])],2)])])}
var FormEditvue_type_template_id_71f8886b_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/titles/FormEdit.vue?vue&type=template&id=71f8886b&scoped=true&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/admin/titles/FormEdit.vue?vue&type=script&lang=js&
var FormEditvue_type_script_lang_js_ = __webpack_require__(143);

// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/titles/FormEdit.vue?vue&type=script&lang=js&
 /* harmony default export */ var titles_FormEditvue_type_script_lang_js_ = (FormEditvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/admin/titles/FormEdit.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(230)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  titles_FormEditvue_type_script_lang_js_,
  FormEditvue_type_template_id_71f8886b_scoped_true_render,
  FormEditvue_type_template_id_71f8886b_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "71f8886b",
  "520497ce"
  
)

/* harmony default export */ var FormEdit = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/pages/admin/titles/detail/_id/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  layout: 'defaultAdmin',
  components: {
    SubNav: SubNav["a" /* default */],
    Hero: Hero["a" /* default */],
    FormEdit: FormEdit
  },

  data() {
    return {};
  },

  async asyncData({
    $axios,
    params
  }) {
    const [dataDetail, categoryList, tagList] = await Promise.all([$axios.$get('/book/' + params.id), $axios.$get('/category/all'), $axios.$get('/tag/all')]);
    return {
      dataDetail,
      categoryList,
      tagList
    };
  }

});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/pages/admin/titles/detail/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var detail_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/pages/admin/titles/detail/_id/index.vue



function _id_injectStyles (context) {
  
  
}

/* normalize component */

var _id_component = Object(componentNormalizer["a" /* default */])(
  detail_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  _id_injectStyles,
  null,
  "76be3bb4"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (_id_component.exports);

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("69a9fc1e", content, true, context)
};

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(91);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("a957082a", content, true, context)
};

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_403ff72b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_403ff72b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_403ff72b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_403ff72b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_403ff72b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".component[data-v-403ff72b]{padding:1px;background-color:rgba(255,212,1,.25098);border-bottom:10px solid #ffd401}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNav_vue_vue_type_style_index_0_id_8e91234c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNav_vue_vue_type_style_index_0_id_8e91234c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNav_vue_vue_type_style_index_0_id_8e91234c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNav_vue_vue_type_style_index_0_id_8e91234c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNav_vue_vue_type_style_index_0_id_8e91234c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".component[data-v-8e91234c]{background-color:#fff;box-shadow:0 .125rem .125rem rgba(0,0,0,.1);border-top:1px solid #eee}.container-standard[data-v-8e91234c]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}.container-standard>div.flex[data-v-8e91234c]{height:100%}.nav>ul[data-v-8e91234c]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-8e91234c]{padding:10px 16px;border-bottom:1px solid transparent;position:relative;top:0;transition:.2s;display:inline-block;color:#000}.nav>ul>li>a[data-v-8e91234c]:hover{color:#000;text-decoration:none;position:relative;top:2px}.nav>ul>li>a.nuxt-link-active[data-v-8e91234c],.nav>ul>li>a.nuxt-link-exact-active[data-v-8e91234c]{color:#000;text-decoration:none;font-weight:600}.nav>ul>li>a[data-v-8e91234c]{color:rgba(0,0,0,.72157);line-height:24px;text-decoration:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 92:
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
  
  var style0 = __webpack_require__(88)
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

/***/ 93:
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
  
  var style0 = __webpack_require__(90)
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