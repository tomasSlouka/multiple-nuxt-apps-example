exports.ids = [41];
exports.modules = {

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(116);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("62ab46bf", content, true, context)
};

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Empty_vue_vue_type_style_index_0_id_cc21330a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Empty_vue_vue_type_style_index_0_id_cc21330a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Empty_vue_vue_type_style_index_0_id_cc21330a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Empty_vue_vue_type_style_index_0_id_cc21330a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Empty_vue_vue_type_style_index_0_id_cc21330a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".box[data-v-cc21330a]{border-bottom:6px solid #eee}.box[data-v-cc21330a],.box-2[data-v-cc21330a]{background-color:#f7f7f7;padding:40px;border-radius:4px}.box-2[data-v-cc21330a]{border-bottom:6px solid rgba(255,212,1,.32157)}.delivery-img[data-v-cc21330a]{height:25px;border-radius:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/user/books/basket/Empty.vue?vue&type=template&id=cc21330a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard grid\" data-v-cc21330a>","</div>",[_vm._ssrNode("<div class=\"grid gap-40\" data-v-cc21330a>","</div>",[_vm._ssrNode("<div class=\"grid gap-20\" data-v-cc21330a><h2 data-v-cc21330a>Ojoj! V tvojom batôžku nie su žiadne knižky</h2></div> "),_vm._ssrNode("<div class=\"grid md-col-2 auto justify-content-start gap-10\" data-v-cc21330a>","</div>",[_vm._ssrNode("<div data-v-cc21330a>","</div>",[_c('nuxt-link',{staticClass:"button cta white",attrs:{"to":"/kniznica"}},[_vm._v("Pridať knižky z knižnice")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-cc21330a>","</div>",[_c('nuxt-link',{staticClass:"button cta black",attrs:{"to":"/user/books/wishlist"}},[_vm._v("Pridať knižky z wishlistu")])],1)],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/user/books/basket/Empty.vue?vue&type=template&id=cc21330a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/user/books/basket/Empty.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Emptyvue_type_script_lang_js_ = ({
  data() {
    return {};
  },

  methods: {}
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/user/books/basket/Empty.vue?vue&type=script&lang=js&
 /* harmony default export */ var basket_Emptyvue_type_script_lang_js_ = (Emptyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/user/books/basket/Empty.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(115)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  basket_Emptyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "cc21330a",
  "b4b90c74"
  
)

/* harmony default export */ var Empty = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(195);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("16c629dc", content, true, context)
};

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivery_vue_vue_type_style_index_0_id_5075dd97_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(154);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivery_vue_vue_type_style_index_0_id_5075dd97_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivery_vue_vue_type_style_index_0_id_5075dd97_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivery_vue_vue_type_style_index_0_id_5075dd97_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Delivery_vue_vue_type_style_index_0_id_5075dd97_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".box[data-v-5075dd97]{border-bottom:6px solid #eee}.box[data-v-5075dd97],.box-2[data-v-5075dd97]{background-color:#f7f7f7;padding:40px;border-radius:4px}.box-2[data-v-5075dd97]{border-bottom:6px solid rgba(255,212,1,.32157)}.delivery-img[data-v-5075dd97]{height:25px;border-radius:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/pages/user/books/basket/delivery.vue?vue&type=template&id=78b598d4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_c('SubNav'),_vm._ssrNode(" "),_c('Hero',{attrs:{"h1":"Moje knižky","h2":"Batôžtek"}}),_vm._ssrNode(" "),(_vm.dataBasket.count_items > 0)?_c('Delivery',{attrs:{"dataBasket":_vm.dataBasket}}):_c('Empty')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/pages/user/books/basket/delivery.vue?vue&type=template&id=78b598d4&

// EXTERNAL MODULE: ./apps/tulaveknizky.sk/components/page/user/books/_common/Hero.vue + 4 modules
var Hero = __webpack_require__(97);

// EXTERNAL MODULE: ./apps/tulaveknizky.sk/components/page/user/books/_common/SubNav.vue + 4 modules
var SubNav = __webpack_require__(98);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/user/books/basket/Delivery.vue?vue&type=template&id=5075dd97&scoped=true&
var Deliveryvue_type_template_id_5075dd97_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard grid\" data-v-5075dd97>","</div>",[_vm._ssrNode("<div class=\"grid gap-40\" data-v-5075dd97>","</div>",[_vm._ssrNode("<h2 data-v-5075dd97>Vyberte spôsob dopravy a adresu doručenia.</h2> "),_vm._ssrNode("<div class=\"grid gap-60\" data-v-5075dd97>","</div>",[_vm._ssrNode("<div class=\"grid gap-20 auto\" data-v-5075dd97><div class=\"grid md-col-2 gap-10\" data-v-5075dd97><div class=\"box-form bb1\" data-v-5075dd97><div class=\"grid col-3 gap-20 auto align-items-center justify-content-start\" data-v-5075dd97><input type=\"radio\" id=\"zasielkovna\" name=\"delivery_option\" value=\"zasielkovna\""+(_vm._ssrAttr("checked",_vm._q(_vm.delivery_option,"zasielkovna")))+" class=\"m10 p10 block\" data-v-5075dd97> <label for=\"zasielkovna\" class=\"pointer normal grid col-2 auto gap-10 align-items-center ml10\" data-v-5075dd97><img src=\"https://widget.packeta.com/v5/static/media/logoSK.a6779253.svg\" alt=\"zasielkovna-logo\" class=\"delivery-img justify-self-end\" data-v-5075dd97> <span class=\"font12\" data-v-5075dd97>(zadarmo)</span></label></div></div> <div class=\"box-form bb1\" data-v-5075dd97><div class=\"grid col-2 gap-20 auto align-items-center justify-content-start\" data-v-5075dd97><input type=\"radio\" id=\"sk_posta\" name=\"delivery_option\" value=\"sk_posta\""+(_vm._ssrAttr("checked",_vm._q(_vm.delivery_option,"sk_posta")))+" class=\"m10 p10 block\" data-v-5075dd97> <label for=\"sk_posta\" class=\"pointer normal grid col-2 auto gap-10 align-items-center ml10\" data-v-5075dd97><img src=\"https://www.posta.sk/images/site/sl-posta-logo.svg\" alt=\"sk-posta-logo\" class=\"delivery-img justify-self-end\" data-v-5075dd97> <span data-v-5075dd97>Slovenská pošta <span class=\"font12\" data-v-5075dd97>(zadarmo)</span></span></label></div></div></div> "+((_vm.delivery_option == "zasielkovna")?("<div data-v-5075dd97><div class=\"box-form grid gap-20\" data-v-5075dd97><h3 data-v-5075dd97>Doručenie pomocou služby Zásielkovňa</h3> <p data-v-5075dd97>"+_vm._ssrEscape(" \n                                "+_vm._s(_vm.place)+", "+_vm._s(_vm.street)+", "+_vm._s(_vm.zip)+", "+_vm._s(_vm.city)+" | \n                                ")+"<a id=\"zasielkovna\" value=\"Upraviť adresu\" class=\"small\" data-v-5075dd97>Vybrať iné odberné miesto</a></p> <div class=\"hr\" data-v-5075dd97></div> <form class=\"grid gap-20 md-col-2 align-items-start\" data-v-5075dd97><div data-v-5075dd97><label for=\"phone\" data-v-5075dd97>Telefón</label> <input type=\"text\" placeholder=\"Telefón\" name=\"phone\""+(_vm._ssrAttr("value",(_vm.phone)))+" data-v-5075dd97></div> <div data-v-5075dd97><label for=\"email\" data-v-5075dd97>Kontaktný email</label> <input type=\"text\" placeholder=\"Kontaktný email\" name=\"email\""+(_vm._ssrAttr("value",(_vm.email)))+" data-v-5075dd97></div></form></div></div>"):"<!---->")+" "+((_vm.delivery_option == "sk_posta")?("<div data-v-5075dd97><div class=\"box-form grid gap-20\" data-v-5075dd97><h3 data-v-5075dd97>Doručenie Slovenskou poštou</h3> <p data-v-5075dd97>Prosím vyplň všetky údaje aby sme mohli knižky poslať na správnu adresu. Ďakujeme.</p> <div class=\"hr\" data-v-5075dd97></div> <form class=\"grid gap-30 md-col-2 align-items-start\" data-v-5075dd97><div class=\"grid gap-20\" data-v-5075dd97><div data-v-5075dd97><label for=\"name\" data-v-5075dd97>Meno</label> <input type=\"text\" placeholder=\"Meno\" name=\"name\""+(_vm._ssrAttr("value",(_vm.name)))+" data-v-5075dd97></div> <div data-v-5075dd97><label for=\"surname\" data-v-5075dd97>Priezvisko</label> <input type=\"text\" placeholder=\"Priezvisko\" name=\"surname\""+(_vm._ssrAttr("value",(_vm.surname)))+" data-v-5075dd97></div> <div data-v-5075dd97><label for=\"street\" data-v-5075dd97>Ulica a popisné číslo</label> <input type=\"text\" placeholder=\"Ulica\" name=\"street\""+(_vm._ssrAttr("value",(_vm.street)))+" data-v-5075dd97></div> <div data-v-5075dd97><label for=\"city\" data-v-5075dd97>Mesto</label> <input type=\"text\" placeholder=\"Mesto\" name=\"city\""+(_vm._ssrAttr("value",(_vm.city)))+" data-v-5075dd97></div> <div data-v-5075dd97><label for=\"psc\" data-v-5075dd97>PSČ</label> <input type=\"text\" placeholder=\"PSČ\" name=\"psc\""+(_vm._ssrAttr("value",(_vm.zip)))+" data-v-5075dd97></div></div> <div class=\"grid gap-20\" data-v-5075dd97><div data-v-5075dd97><label for=\"phone\" data-v-5075dd97>Telefón</label> <input type=\"text\" placeholder=\"Telefón\" name=\"phone\""+(_vm._ssrAttr("value",(_vm.phone)))+" data-v-5075dd97></div> <div data-v-5075dd97><label for=\"email\" data-v-5075dd97>Kontaktný email</label> <input type=\"text\" placeholder=\"Kontaktný email\" name=\"email\""+(_vm._ssrAttr("value",(_vm.email)))+" data-v-5075dd97></div></div></form></div></div>"):"<!---->")+"</div> "),_vm._ssrNode("<div class=\"box grid md-col-2 gap-10\" data-v-5075dd97>","</div>",[_vm._ssrNode("<div class=\"md-justify-self-start grid\" data-v-5075dd97>","</div>",[_c('nuxt-link',{staticClass:"button cta white",attrs:{"to":"/user/books/basket"}},[_vm._v("Späť na knižky v batôžku")])],1),_vm._ssrNode(" <div class=\"md-justify-self-end grid\" data-v-5075dd97><button class=\"button cta black\" data-v-5075dd97>Pokračovať na rekapituláciu</button></div>")],2)],2)],2)])])}
var Deliveryvue_type_template_id_5075dd97_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/user/books/basket/Delivery.vue?vue&type=template&id=5075dd97&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/user/books/basket/Delivery.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Deliveryvue_type_script_lang_js_ = ({
  props: ['dataBasket'],

  data() {
    return {
      packetaAPIKey: "b44b34b577c26ba2",
      packetaId: "",
      packetaName: "",
      packetaZip: "",
      packetaCity: "",
      packetaPlace: "",
      packetaStreet: "",
      id: "",
      delivery_option: null,
      delivery_option_data: null,
      place: "",
      name: "",
      surname: "",
      street: "",
      city: "",
      zip: "",
      phone: "",
      email: "" // id: this.dataBasket.data.id,
      // name: this.dataBasket.data.name ? this.dataBasket.data.name : this.$store.state.auth.userData.name,
      // surname: this.dataBasket.data.surname ? this.dataBasket.data.surname : this.$store.state.auth.userData.surname,
      // street: this.dataBasket.data.street ? this.dataBasket.data.street : this.$store.state.auth.userData.street,
      // city: this.dataBasket.data.city ? this.dataBasket.data.city : this.$store.state.auth.userData.city,
      // zip: this.dataBasket.data.zip ? this.dataBasket.data.zip : this.$store.state.auth.userData.zip,
      // phone: this.dataBasket.data.phone ? this.dataBasket.data.phone : this.$store.state.auth.userData.phone,
      // email: this.dataBasket.data.email ? this.dataBasket.data.email : this.$store.state.auth.userData.email,

    };
  },

  methods: {
    packeta() {
      Packeta.Widget.pick(this.packetaApiKey, this.showSelectedPickupPoint, {
        country: "sk",
        language: "sk",
        claimAssistant: "yes",
        primaryButtonColor: "#000"
      });
    },

    sk_posta() {
      // this.packetaId = ""
      // this.packetaName = ""
      // this.packetaZip = ""
      // this.packetaCity = ""
      // this.packetaPlace = ""
      // this.packetaStreet = ""
      this.id = this.dataBasket.data.id;
      this.delivery_option_data = this.dataBasket.data.delivery_option == "sk_posta" ? this.dataBasket.data.delivery_option_data : "";
      this.place = "";
      this.name = this.dataBasket.data.delivery_option == "sk_posta" ? this.dataBasket.data.name : this.$store.state.auth.userData.name;
      this.surname = this.dataBasket.data.delivery_option == "sk_posta" ? this.dataBasket.data.surname : this.$store.state.auth.userData.surname;
      this.street = this.dataBasket.data.delivery_option == "sk_posta" ? this.dataBasket.data.street : this.$store.state.auth.userData.street;
      this.city = this.dataBasket.data.delivery_option == "sk_posta" ? this.dataBasket.data.city : this.$store.state.auth.userData.city;
      this.zip = this.dataBasket.data.delivery_option == "sk_posta" ? this.dataBasket.data.zip : this.$store.state.auth.userData.zip;
      this.phone = this.dataBasket.data.delivery_option == "sk_posta" ? this.dataBasket.data.phone : this.$store.state.auth.userData.phone;
      this.email = this.dataBasket.data.delivery_option == "sk_posta" ? this.dataBasket.data.email : this.$store.state.auth.userData.email;
    },

    showSelectedPickupPoint(point) {
      // var spanElement = document.getElementById('packeta-point-info');
      // var idElement = document.getElementById('packeta-point-id');
      if (point) {
        console.log(point);
        this.id = this.dataBasket.data.id;
        this.delivery_option_data = this.dataBasket.data.id;
        this.place = point.place;
        this.name = this.dataBasket.data.name ? this.dataBasket.data.name : this.$store.state.auth.userData.name;
        this.surname = this.dataBasket.data.surname ? this.dataBasket.data.surname : this.$store.state.auth.userData.surname;
        this.street = point.street;
        this.city = point.city;
        this.zip = point.zip;
        this.phone = this.dataBasket.data.phone ? this.dataBasket.data.phone : this.$store.state.auth.userData.phone;
        this.email = this.dataBasket.data.email ? this.dataBasket.data.email : this.$store.state.auth.userData.email; // this.packetaId = point.id
        // this.packetaName = point.name
        // this.packetaZip = point.zip
        // this.packetaCity = point.city
        // this.packetaPlace = point.place
        // this.packetaStreet = point.street
        // 	var recursiveToString = function(o) {
        // 		return Object.keys(o).map(
        // 			function(k) {
        // 				if(o[k] === null) {
        // 					return k + " = null";
        // 				}
        // 				return k + " = " + (typeof(o[k]) == "object"
        // 					? "<ul><li>" + recursiveToString(o[k]) + "</li></ul>"
        // 					: o[k].toString().replace(/&/g, '&amp;').replace(/</g, '&lt;')
        // 				);
        // 			}
        // 		).join("</li><li>");
        // 	};
        // 	spanElement.innerText =
        // 		"Address: " + point.name + "\n" + point.zip + " " + point.city + "\n\n"
        // 		+ "All available fields:\n";
        // 	spanElement.innerHTML +=
        // 		"<ul><li>" + recursiveToString(point) + "</li></ul>";
        // 	idElement.value = point.id;
        // }
        // else {
        // 	spanElement.innerText = "None";
        // 	idElement.value = "";
      }
    },

    async submitForm() {
      await this.$axios.$put('/order', {
        // "category_id": this.category_id,
        "id": this.id,
        "delivery_option": this.delivery_option,
        "delivery_option_data": this.delivery_option_data,
        "place": this.place,
        "name": this.name,
        "surname": this.surname,
        "street": this.street,
        "city": this.city,
        "zip": this.zip,
        "phone": this.phone,
        "email": this.email
      }).then(response => {
        console.log(response); // this.$store.dispatch('auth/setUser', {
        //     endpoint: '/user'
        // })
        // this.submitSuccess = true;
        // this.submitText = 'Uložené!';
        // if(this.password_1 === '') { this.password_locked = 0 } else { this.password_locked = 1 }
        // setTimeout(() => this.submitSuccess = false, 4000)
        // this.$router.push('/admin/subscriber/settings')

        this.$router.push('/user/books/basket/confirm');
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
    }

  }
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/user/books/basket/Delivery.vue?vue&type=script&lang=js&
 /* harmony default export */ var basket_Deliveryvue_type_script_lang_js_ = (Deliveryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/user/books/basket/Delivery.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(194)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  basket_Deliveryvue_type_script_lang_js_,
  Deliveryvue_type_template_id_5075dd97_scoped_true_render,
  Deliveryvue_type_template_id_5075dd97_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "5075dd97",
  "69e9c6ea"
  
)

/* harmony default export */ var Delivery = (component.exports);
// EXTERNAL MODULE: ./apps/tulaveknizky.sk/components/page/user/books/basket/Empty.vue + 4 modules
var Empty = __webpack_require__(118);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/pages/user/books/basket/delivery.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var deliveryvue_type_script_lang_js_ = ({
  layout: 'defaultUser',
  components: {
    SubNav: SubNav["a" /* default */],
    Hero: Hero["a" /* default */],
    Delivery: Delivery,
    Empty: Empty["a" /* default */]
  },

  head() {
    return {
      script: [{
        src: "https://widget.packeta.com/www/js/library.js"
      }]
    };
  },

  data() {
    return {
      dataBasket: this.$store.state.order.dataBasket
    };
  },

  async fetch({
    store
  }) {
    await store.dispatch("order/getDataBasket");
  },

  methods: {}
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/pages/user/books/basket/delivery.vue?vue&type=script&lang=js&
 /* harmony default export */ var basket_deliveryvue_type_script_lang_js_ = (deliveryvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/pages/user/books/basket/delivery.vue



function delivery_injectStyles (context) {
  
  
}

/* normalize component */

var delivery_component = Object(componentNormalizer["a" /* default */])(
  basket_deliveryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  delivery_injectStyles,
  null,
  "19fe26c8"
  
)

/* harmony default export */ var delivery = __webpack_exports__["default"] = (delivery_component.exports);

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(94);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("577583f2", content, true, context)
};

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(96);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("4115509a", content, true, context)
};

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_e51d787c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_e51d787c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_e51d787c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_e51d787c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_e51d787c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".component[data-v-e51d787c]{padding:1px;background-color:rgba(255,212,1,.25098);border-bottom:10px solid #ffd401}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNav_vue_vue_type_style_index_0_id_5960b3cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNav_vue_vue_type_style_index_0_id_5960b3cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNav_vue_vue_type_style_index_0_id_5960b3cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNav_vue_vue_type_style_index_0_id_5960b3cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNav_vue_vue_type_style_index_0_id_5960b3cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".component[data-v-5960b3cc]{background-color:#fff;box-shadow:0 .125rem .125rem rgba(0,0,0,.1);border-top:1px solid #eee;position:relative}.container-standard[data-v-5960b3cc]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}.container-standard>div.flex[data-v-5960b3cc]{height:100%}.nav>ul[data-v-5960b3cc]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-5960b3cc]{padding:10px 16px;border-bottom:1px solid transparent;position:relative;top:0;transition:.2s;display:inline-block;color:#000}.nav>ul>li>a[data-v-5960b3cc]:hover{color:#000;text-decoration:none;position:relative;top:2px}.nav>ul>li>a.nuxt-link-active[data-v-5960b3cc],.nav>ul>li>a.nuxt-link-exact-active[data-v-5960b3cc]{color:#000;text-decoration:none;font-weight:600}.nav>ul>li>a[data-v-5960b3cc]{color:rgba(0,0,0,.72157);line-height:24px;text-decoration:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/user/books/_common/Hero.vue?vue&type=template&id=e51d787c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-hero grid\" data-v-e51d787c><div class=\"grid justify-items-start\" data-v-e51d787c><h3 class=\"h3\" data-v-e51d787c>"+_vm._ssrEscape(_vm._s(_vm.h1))+"</h3> "+((_vm.h2)?("<h1 class=\"h1\" data-v-e51d787c>"+_vm._ssrEscape(_vm._s(_vm.h2))+"</h1>"):"<!---->")+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/user/books/_common/Hero.vue?vue&type=template&id=e51d787c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/user/books/_common/Hero.vue?vue&type=script&lang=js&
//
//
//
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
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/user/books/_common/Hero.vue?vue&type=script&lang=js&
 /* harmony default export */ var _common_Herovue_type_script_lang_js_ = (Herovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/user/books/_common/Hero.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(93)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _common_Herovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e51d787c",
  "dd9add4a"
  
)

/* harmony default export */ var Hero = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/user/books/_common/SubNav.vue?vue&type=template&id=5960b3cc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard grid justify-items-end\" data-v-5960b3cc>","</div>",[_vm._ssrNode("<div class=\"flex wrap align-items-center justify-content-space-between\" data-v-5960b3cc>","</div>",[_vm._ssrNode("<div class=\"nav\" data-v-5960b3cc>","</div>",[_vm._ssrNode("<ul class=\"flex wrap show-md align-items-center\" data-v-5960b3cc>","</ul>",[_vm._ssrNode("<li data-v-5960b3cc>","</li>",[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/user/books/basket"}},[_vm._v("Batôžtek (košík)")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-5960b3cc>","</li>",[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/user/books/borrowed"}},[_vm._v("Požičané knižky")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-5960b3cc>","</li>",[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/user/books/rated"}},[_vm._v("Hodnotené knižky")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-5960b3cc>","</li>",[_c('nuxt-link',{staticClass:"small",attrs:{"to":"/user/books/wishlist"}},[_vm._v("Wishlist")])],1)],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/user/books/_common/SubNav.vue?vue&type=template&id=5960b3cc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/user/books/_common/SubNav.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
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
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/user/books/_common/SubNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var _common_SubNavvue_type_script_lang_js_ = (SubNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/user/books/_common/SubNav.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(95)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _common_SubNavvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5960b3cc",
  "4d2d9d38"
  
)

/* harmony default export */ var SubNav = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=delivery.js.map