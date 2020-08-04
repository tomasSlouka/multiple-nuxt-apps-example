exports.ids = [10];
exports.modules = {

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/pages/admin/creator/messages/message/edit/_id/index.vue?vue&type=template&id=26176aa8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_c('EditIntro'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-narrow grid gap-60\" data-v-26176aa8>","</div>",[_c('EditForm',{attrs:{"messageData":_vm.messageData.data}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/pages/admin/creator/messages/message/edit/_id/index.vue?vue&type=template&id=26176aa8&scoped=true&

// EXTERNAL MODULE: ./apps/manyletter.com/components/admin/_common/HeaderCreator.vue + 12 modules
var HeaderCreator = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/creator/messages/message/EditIntro.vue?vue&type=template&id=6fe5874c&scoped=true&
var EditIntrovue_type_template_id_6fe5874c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"wrapper\" data-v-6fe5874c><div class=\"container-narrow grid gap-20\" data-v-6fe5874c><h2 data-v-6fe5874c>Edit message</h2> <p data-v-6fe5874c>While your message is at pending status, you can change every aspect of it.</p></div></div>")])}
var EditIntrovue_type_template_id_6fe5874c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/messages/message/EditIntro.vue?vue&type=template&id=6fe5874c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/creator/messages/message/EditIntro.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var EditIntrovue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/messages/message/EditIntro.vue?vue&type=script&lang=js&
 /* harmony default export */ var message_EditIntrovue_type_script_lang_js_ = (EditIntrovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/messages/message/EditIntro.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  message_EditIntrovue_type_script_lang_js_,
  EditIntrovue_type_template_id_6fe5874c_scoped_true_render,
  EditIntrovue_type_template_id_6fe5874c_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "6fe5874c",
  "127f9ddc"
  
)

/* harmony default export */ var EditIntro = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/creator/messages/message/EditForm.vue?vue&type=template&id=c22a6fac&scoped=true&
var EditFormvue_type_template_id_c22a6fac_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component grid gap-20"},[_vm._ssrNode("<div class=\"box grid gap-20\" data-v-c22a6fac>","</div>",[_vm._ssrNode("<form autocomplete=\"off\" class=\"grid gap-20\" data-v-c22a6fac>","</form>",[_vm._ssrNode("<h3 data-v-c22a6fac>Edit newsletter message</h3> "),_vm._ssrNode("<div class=\"grid gap-20\" data-v-c22a6fac>","</div>",[_vm._ssrNode("<div data-v-c22a6fac><label for=\"title\" data-v-c22a6fac>Message title</label> <input type=\"text\" name=\"title\" placeholder"+(_vm._ssrAttr("value",(_vm.title)))+" data-v-c22a6fac></div> <div data-v-c22a6fac><label for=\"title\" data-v-c22a6fac>Message text</label> <textarea maxlength=\"255\" type=\"text\" name=\"description\" data-v-c22a6fac>"+_vm._ssrEscape(_vm._s(_vm.description))+"</textarea> <p data-v-c22a6fac>"+_vm._ssrEscape(_vm._s(_vm.charCounter)+" / 255")+"</p></div> <div data-v-c22a6fac><label for=\"title\" data-v-c22a6fac>Url link</label> <input type=\"text\" name=\"url\" placeholder"+(_vm._ssrAttr("value",(_vm.url)))+" data-v-c22a6fac></div> "),_vm._ssrNode("<div data-v-c22a6fac>","</div>",[_vm._ssrNode("<label for=\"send_date_at\" data-v-c22a6fac>Send message in x days from today</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.send_date_at),expression:"send_date_at"}],attrs:{"name":"send_date_at","id":"send_date_at"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.send_date_at=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{domProps:{"value":_vm.send_date_at}},[_vm._v("Don't change - ("+_vm._s(_vm.send_date_at)+")")]),_vm._v(" "),_c('option',{attrs:{"value":"1"}},[_vm._v("Tomorrow")]),_vm._v(" "),_c('option',{attrs:{"value":"2"}},[_vm._v("in 2 days")]),_vm._v(" "),_c('option',{attrs:{"value":"3"}},[_vm._v("in 3 days")]),_vm._v(" "),_c('option',{attrs:{"value":"4"}},[_vm._v("in 4 days")]),_vm._v(" "),_c('option',{attrs:{"value":"5"}},[_vm._v("in 5 days")]),_vm._v(" "),_c('option',{attrs:{"value":"6"}},[_vm._v("in 6 days")]),_vm._v(" "),_c('option',{attrs:{"value":"7"}},[_vm._v("in 7 days")])])],2),_vm._ssrNode(" <div class=\"hr\" data-v-c22a6fac></div> "),_vm._ssrNode("<div data-v-c22a6fac>","</div>",[_vm._ssrNode("<button type=\"submit\" class=\"cta\" data-v-c22a6fac>Save changes</button> "),_c('nuxt-link',{staticClass:"cta white justify-self-start",attrs:{"tag":"button","to":'/admin/creator/messages/message/detail/' + this.$route.params.id}},[_vm._v("Cancel")])],2)],2)],2)])])}
var EditFormvue_type_template_id_c22a6fac_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/messages/message/EditForm.vue?vue&type=template&id=c22a6fac&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/creator/messages/message/EditForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var EditFormvue_type_script_lang_js_ = ({
  props: ['messageData'],

  data() {
    return {
      title: this.messageData.title,
      description: this.messageData.description,
      url: this.messageData.url,
      send_date_at: this.messageData.send_date_at,
      charCounter: this.messageData.description.length
    };
  },

  methods: {
    charCount() {
      this.charCounter = this.description.length;
    },

    async submitForm() {
      await this.$axios.$put('/api/maylday/message', {
        'id': this.$route.params.id,
        'title': this.title,
        'description': this.description,
        'url': this.url,
        'send_date_at': this.send_date_at
      }).then(response => {
        console.log(response);
        this.$router.back();
      }, error => {
        console.log(error);
      });
    }

  }
});
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/messages/message/EditForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var message_EditFormvue_type_script_lang_js_ = (EditFormvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/creator/messages/message/EditForm.vue



function EditForm_injectStyles (context) {
  
  
}

/* normalize component */

var EditForm_component = Object(componentNormalizer["a" /* default */])(
  message_EditFormvue_type_script_lang_js_,
  EditFormvue_type_template_id_c22a6fac_scoped_true_render,
  EditFormvue_type_template_id_c22a6fac_scoped_true_staticRenderFns,
  false,
  EditForm_injectStyles,
  "c22a6fac",
  "44616784"
  
)

/* harmony default export */ var EditForm = (EditForm_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/pages/admin/creator/messages/message/edit/_id/index.vue?vue&type=script&lang=js&
//
//
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
  layout: 'default-admin-creator',
  components: {
    Header: HeaderCreator["a" /* default */],
    EditIntro: EditIntro,
    EditForm: EditForm
  },

  async asyncData({
    $axios,
    params
  }) {
    const messageData = await $axios.$get('/api/maylday/message/' + params.id);
    return {
      messageData
    };
  }

});
// CONCATENATED MODULE: ./apps/manyletter.com/pages/admin/creator/messages/message/edit/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var edit_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/pages/admin/creator/messages/message/edit/_id/index.vue



function _id_injectStyles (context) {
  
  
}

/* normalize component */

var _id_component = Object(componentNormalizer["a" /* default */])(
  edit_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  _id_injectStyles,
  "26176aa8",
  "6e7cd5ca"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (_id_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map