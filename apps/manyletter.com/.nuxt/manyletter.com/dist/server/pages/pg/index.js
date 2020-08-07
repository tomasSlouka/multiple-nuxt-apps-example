exports.ids = [28];
exports.modules = {

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/pages/pg/index.vue?vue&type=template&id=175fb1da&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_vm._ssrNode("<form data-v-175fb1da><input type=\"text\" placeholder=\"url\""+(_vm._ssrAttr("value",(_vm.url)))+" data-v-175fb1da> <button type=\"submit\" class=\"cta\" data-v-175fb1da>Scrape</button></form> <div data-v-175fb1da>"+_vm._ssrEscape(_vm._s(_vm.url))+"</div> <pre data-v-175fb1da>"+_vm._ssrEscape(_vm._s(_vm.scrapeData))+"</pre>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/pages/pg/index.vue?vue&type=template&id=175fb1da&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/pages/pg/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var pgvue_type_script_lang_js_ = ({
  layout: 'default-page',
  components: {},

  data() {
    return {
      url: 'https://manyletter.com/',
      scrapeData: ''
    };
  },

  methods: {
    async scrapePage() {
      await this.$axios.$post('/api/maylday/pg/scrape', {
        'url': this.url
      }).then(response => {
        console.log(response);
        this.scrapeData = response.data;
      }, error => {
        console.log(error);
      });
    }

  } // async asyncData({ $axios, params }) {
  //     console.log('asyncData executed');
  //     const [scrapeData] = await Promise.all ([
  //         $axios.$get('/api/maylday/pg/scrape'),
  //     ])
  //     return { scrapeData }
  // },

});
// CONCATENATED MODULE: ./apps/manyletter.com/pages/pg/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_pgvue_type_script_lang_js_ = (pgvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./apps/manyletter.com/pages/pg/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_pgvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "175fb1da",
  "71817bb9"
  
)

/* harmony default export */ var pg = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map