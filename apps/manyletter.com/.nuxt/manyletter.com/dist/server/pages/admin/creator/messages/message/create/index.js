exports.ids = [8];
exports.modules = {

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/pages/admin/creator/messages/message/create/index.vue?vue&type=template&id=67a32f50&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_c('CreateIntro'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-narrow grid gap-60\" data-v-67a32f50>","</div>",[_c('CreateForm')],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/pages/admin/creator/messages/message/create/index.vue?vue&type=template&id=67a32f50&scoped=true&

// EXTERNAL MODULE: ./apps/manyletter.com/components/admin/_common/HeaderCreator.vue + 12 modules
var HeaderCreator = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/creator/messages/message/CreateIntro.vue?vue&type=template&id=6f45aea2&scoped=true&
var CreateIntrovue_type_template_id_6f45aea2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"newsletter-Newsletter-Message-Create-Intro"}},[_vm._ssrNode("<div class=\"wrapper\" data-v-6f45aea2><div class=\"container-narrow grid gap-20\" data-v-6f45aea2><h2 data-v-6f45aea2>Create message</h2> <p data-v-6f45aea2>Create a new message. All fileds are mandatory and will show up in email to your subscribers.</p></div></div>")])}
var CreateIntrovue_type_template_id_6f45aea2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/messages/message/CreateIntro.vue?vue&type=template&id=6f45aea2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/creator/messages/message/CreateIntro.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CreateIntrovue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/messages/message/CreateIntro.vue?vue&type=script&lang=js&
 /* harmony default export */ var message_CreateIntrovue_type_script_lang_js_ = (CreateIntrovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/messages/message/CreateIntro.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  message_CreateIntrovue_type_script_lang_js_,
  CreateIntrovue_type_template_id_6f45aea2_scoped_true_render,
  CreateIntrovue_type_template_id_6f45aea2_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "6f45aea2",
  "2c1632aa"
  
)

/* harmony default export */ var CreateIntro = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/creator/messages/message/CreateForm.vue?vue&type=template&id=0733b808&scoped=true&
var CreateFormvue_type_template_id_0733b808_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component grid gap-20"},[_vm._ssrNode("<div class=\"box grid gap-20\" data-v-0733b808>","</div>",[_vm._ssrNode("<form autocomplete=\"off\" class=\"grid gap-20\" data-v-0733b808>","</form>",[_vm._ssrNode("<h3 data-v-0733b808>Create a new message</h3> "),_vm._ssrNode("<div class=\"grid gap-20\" data-v-0733b808>","</div>",[_vm._ssrNode("<div data-v-0733b808><label for=\"title\" data-v-0733b808>Message title</label> <input type=\"text\" name=\"title\" placeholder"+(_vm._ssrAttr("value",(_vm.title)))+" data-v-0733b808></div> <div data-v-0733b808><label for=\"description\" data-v-0733b808>Message text</label> <textarea maxlength=\"255\" type=\"text\" name=\"description\" data-v-0733b808>"+_vm._ssrEscape(_vm._s(_vm.description))+"</textarea> <p data-v-0733b808>"+_vm._ssrEscape(_vm._s(_vm.charCounter)+" / 255")+"</p></div> <div data-v-0733b808><label for=\"url\" data-v-0733b808>Url link</label> <input type=\"text\" name=\"url\" placeholder"+(_vm._ssrAttr("value",(_vm.url)))+" data-v-0733b808></div> "),_vm._ssrNode("<div data-v-0733b808>","</div>",[_vm._ssrNode("<label for=\"send_date_at\" data-v-0733b808>Send message in x days from today</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.send_date_at),expression:"send_date_at"}],attrs:{"name":"send_date_at","id":"send_date_at"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.send_date_at=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":""}}),_vm._v(" "),_c('option',{attrs:{"value":"1"}},[_vm._v("Tomorrow")]),_vm._v(" "),_c('option',{attrs:{"value":"2"}},[_vm._v("in 2 days")]),_vm._v(" "),_c('option',{attrs:{"value":"3"}},[_vm._v("in 3 days")]),_vm._v(" "),_c('option',{attrs:{"value":"4"}},[_vm._v("in 4 days")]),_vm._v(" "),_c('option',{attrs:{"value":"5"}},[_vm._v("in 5 days")]),_vm._v(" "),_c('option',{attrs:{"value":"6"}},[_vm._v("in 6 days")]),_vm._v(" "),_c('option',{attrs:{"value":"7"}},[_vm._v("in 7 days")])])],2)],2),_vm._ssrNode(" <div class=\"hr\" data-v-0733b808></div> "),_vm._ssrNode("<div data-v-0733b808>","</div>",[_vm._ssrNode("<button type=\"submit\" class=\"cta\" data-v-0733b808>Create</button> "),_c('nuxt-link',{staticClass:"cta white justify-self-start",attrs:{"tag":"button","to":"/admin/creator/messages"}},[_vm._v("Cancel")])],2)],2)])])}
var CreateFormvue_type_template_id_0733b808_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/messages/message/CreateForm.vue?vue&type=template&id=0733b808&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/creator/messages/message/CreateForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CreateFormvue_type_script_lang_js_ = ({
  data() {
    return {
      title: "",
      description: "",
      url: "",
      send_date_at: "",
      charCounter: 0
    };
  },

  methods: {
    charCount() {
      this.charCounter = this.description.length;
    },

    async submitForm() {
      await this.$axios.$post('/api/maylday/message', {
        'title': this.title,
        'description': this.description,
        'url': this.url,
        'send_date_at': this.send_date_at,
        'newsletter_id': this.$store.state.userData.newsletter_id
      }).then(response => {
        console.log(response);
        this.$router.back();
      }, error => {
        console.log(error);
      });
    }

  }
});
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/messages/message/CreateForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var message_CreateFormvue_type_script_lang_js_ = (CreateFormvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/messages/message/CreateForm.vue



function CreateForm_injectStyles (context) {
  
  
}

/* normalize component */

var CreateForm_component = Object(componentNormalizer["a" /* default */])(
  message_CreateFormvue_type_script_lang_js_,
  CreateFormvue_type_template_id_0733b808_scoped_true_render,
  CreateFormvue_type_template_id_0733b808_scoped_true_staticRenderFns,
  false,
  CreateForm_injectStyles,
  "0733b808",
  "2b43fe14"
  
)

/* harmony default export */ var CreateForm = (CreateForm_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/pages/admin/creator/messages/message/create/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var createvue_type_script_lang_js_ = ({
  layout: 'default-admin-creator',
  components: {
    Header: HeaderCreator["a" /* default */],
    CreateIntro: CreateIntro,
    CreateForm: CreateForm
  }
});
// CONCATENATED MODULE: ./apps/manyletter.com/pages/admin/creator/messages/message/create/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var message_createvue_type_script_lang_js_ = (createvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/pages/admin/creator/messages/message/create/index.vue



function create_injectStyles (context) {
  
  
}

/* normalize component */

var create_component = Object(componentNormalizer["a" /* default */])(
  message_createvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  create_injectStyles,
  "67a32f50",
  "7441d444"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (create_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map