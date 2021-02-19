exports.ids = [40];
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
  add("1117485c", content, true, context)
};

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Empty_vue_vue_type_style_index_0_id_6ce85101_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Empty_vue_vue_type_style_index_0_id_6ce85101_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Empty_vue_vue_type_style_index_0_id_6ce85101_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Empty_vue_vue_type_style_index_0_id_6ce85101_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Empty_vue_vue_type_style_index_0_id_6ce85101_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".box[data-v-6ce85101]{border-bottom:6px solid #eee}.box[data-v-6ce85101],.box-2[data-v-6ce85101]{background-color:#f7f7f7;padding:40px;border-radius:4px}.box-2[data-v-6ce85101]{border-bottom:6px solid rgba(255,212,1,.32157)}.delivery-img[data-v-6ce85101]{height:25px;border-radius:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/user/books/basket/Empty.vue?vue&type=template&id=6ce85101&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard grid\" data-v-6ce85101>","</div>",[_vm._ssrNode("<div class=\"grid gap-40\" data-v-6ce85101>","</div>",[_vm._ssrNode("<div class=\"grid gap-20\" data-v-6ce85101><h2 data-v-6ce85101>Ojoj! V tvojom batôžku nie su žiadne knižky</h2></div> "),_vm._ssrNode("<div class=\"grid col-2 auto justify-content-start gap-10\" data-v-6ce85101>","</div>",[_vm._ssrNode("<div data-v-6ce85101>","</div>",[_c('nuxt-link',{staticClass:"button cta white",attrs:{"to":"/kniznica"}},[_vm._v("Pridať knižky z knižnice")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-6ce85101>","</div>",[_c('nuxt-link',{staticClass:"button cta black",attrs:{"to":"/user/books/wishlist"}},[_vm._v("Pridať knižky z wishlistu")])],1)],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/user/books/basket/Empty.vue?vue&type=template&id=6ce85101&scoped=true&

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
  "6ce85101",
  "b4b90c74"
  
)

/* harmony default export */ var Empty = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(193);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("34b468de", content, true, context)
};

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_style_index_0_id_56770388_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(153);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_style_index_0_id_56770388_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_style_index_0_id_56770388_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_style_index_0_id_56770388_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirm_vue_vue_type_style_index_0_id_56770388_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".box[data-v-56770388]{border-bottom:6px solid #eee}.box[data-v-56770388],.box-2[data-v-56770388]{background-color:#f7f7f7;padding:40px;border-radius:4px}.box-2[data-v-56770388]{border-bottom:6px solid rgba(255,212,1,.32157)}.delivery-img[data-v-56770388]{height:25px;border-radius:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/pages/user/books/basket/confirm.vue?vue&type=template&id=4bbc913c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_c('SubNav'),_vm._ssrNode(" "),_c('Hero',{attrs:{"h1":"Moje knižky","h2":"Batôžtek"}}),_vm._ssrNode(" "),(_vm.dataBasket.count_items > 0)?_c('Confirm',{attrs:{"dataBasket":_vm.dataBasket}}):_c('Empty')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/pages/user/books/basket/confirm.vue?vue&type=template&id=4bbc913c&

// EXTERNAL MODULE: ./apps/tulaveknizky.sk/components/page/user/books/_common/Hero.vue + 4 modules
var Hero = __webpack_require__(97);

// EXTERNAL MODULE: ./apps/tulaveknizky.sk/components/page/user/books/_common/SubNav.vue + 4 modules
var SubNav = __webpack_require__(98);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/user/books/basket/Confirm.vue?vue&type=template&id=56770388&scoped=true&
var Confirmvue_type_template_id_56770388_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component"},[_vm._ssrNode("<div class=\"container-standard grid\" data-v-56770388>","</div>",[_vm._ssrNode("<div class=\"grid gap-40\" data-v-56770388>","</div>",[_vm._ssrNode("<h2 data-v-56770388>Rekapitulácia objednávky</h2> "),_vm._ssrNode("<div class=\"grid gap-60\" data-v-56770388>","</div>",[_vm._ssrNode("<div class=\"grid gap-20 auto\" data-v-56770388><div class=\"table-wrapper justify-content-start\" data-v-56770388><div class=\"table grid auto col-2\" data-v-56770388><div class=\"table-head\" data-v-56770388><div data-v-56770388>Názov</div> <div data-v-56770388>Kredity</div></div> "+(_vm._ssrList((_vm.dataBasket.data_items),function(item){return ("<div class=\"table-row\" data-v-56770388><div data-v-56770388><p class=\"strong\" data-v-56770388>"+_vm._ssrEscape(_vm._s(item.name))+"</p><p class=\"italic small\" data-v-56770388>"+_vm._ssrEscape(_vm._s(item.author))+"</p></div> <div class=\"grid justify-items-start\" data-v-56770388><span class=\"tag yellow\" data-v-56770388>"+_vm._ssrEscape(_vm._s(item.price)+" kreditov")+"</span></div></div>")}))+" <div class=\"table-row\" data-v-56770388><div class=\"bt1 grid col-2 auto gap-20 justify-content-start align-content-center\" data-v-56770388><div data-v-56770388><p class=\"strong\" data-v-56770388>Doručenie</p> "+((_vm.dataBasket.data.delivery_option == "zasielkovna")?("<p class=\"italic small\" data-v-56770388>"+_vm._ssrEscape(_vm._s(_vm.dataBasket.data.place)+", "+_vm._s(_vm.dataBasket.data.street)+", "+_vm._s(_vm.dataBasket.data.zip)+", "+_vm._s(_vm.dataBasket.data.city))+"</p>"):"<!---->")+" "+((_vm.dataBasket.data.delivery_option == "sk_posta")?("<p class=\"italic small\" data-v-56770388>"+_vm._ssrEscape(_vm._s(_vm.dataBasket.data.name)+" "+_vm._s(_vm.dataBasket.data.surname)+", "+_vm._s(_vm.dataBasket.data.street)+", "+_vm._s(_vm.dataBasket.data.zip)+", "+_vm._s(_vm.dataBasket.data.city))+"</p>"):"<!---->")+"</div> <div class=\"grid\" data-v-56770388>"+((_vm.dataBasket.data.delivery_option == "zasielkovna")?("<img src=\"https://widget.packeta.com/v5/static/media/logoSK.a6779253.svg\" alt=\"zasielkovna-logo\" class=\"delivery-img align-self-center\" data-v-56770388>"):"<!---->")+" "+((_vm.dataBasket.data.delivery_option == "sk_posta")?("<img src=\"https://www.posta.sk/images/site/sl-posta-logo.svg\" alt=\"sk-posta-logo\" class=\"delivery-img align-self-center\" data-v-56770388>"):"<!---->")+"</div></div> <div class=\"bt1 grid justify-items-start\" data-v-56770388><span class=\"tag yellow\" data-v-56770388>ZADARMO</span></div></div></div></div> <div class=\"box-2 grid col-2 p10 auto justify-items-end justify-content-end gap-10 align-items-center\" data-v-56770388><div data-v-56770388><p class=\"small\" data-v-56770388>Spolu:</p></div> <div class=\"grid col-2 auto align-items-center gap-5\" data-v-56770388><p class=\"big strong\" data-v-56770388>"+_vm._ssrEscape(_vm._s(_vm.dataBasket.sum_price))+"</p> <p class=\"small\" data-v-56770388>kreditov</p></div></div></div> <ul class=\"maxw600 ml20\" data-v-56770388><li data-v-56770388><p class=\"small\" data-v-56770388>\n                            Ak potvrdíš objednavku, súhlasiš, že tvojú adresu a kontaktné údaje môžeme poskytnuté tretej strane pre účely doručenia.\n                        </p></li> <li data-v-56770388><p class=\"small\" data-v-56770388>\n                            Kredity slúžia ako záloha. Ak nám knižky vrátiš späť  a nebudú poškodené, tvoje kredity ti opätovne obnovíme a možno ti pripočítame aj niečo navyše 😀.\n                        </p></li></ul> "),_vm._ssrNode("<div class=\"box grid col-2\" data-v-56770388>","</div>",[_vm._ssrNode("<div class=\"justify-self-start\" data-v-56770388>","</div>",[_c('nuxt-link',{staticClass:"button cta white",attrs:{"to":"/user/books/basket/delivery"}},[_vm._v("Späť na výber dopravy")])],1),_vm._ssrNode(" <div class=\"justify-self-end\" data-v-56770388><button class=\"button cta black\" data-v-56770388>Potvrdiť objednávku</button></div>")],2)],2)],2)])])}
var Confirmvue_type_template_id_56770388_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/user/books/basket/Confirm.vue?vue&type=template&id=56770388&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/components/page/user/books/basket/Confirm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Confirmvue_type_script_lang_js_ = ({
  props: ['dataBasket'],

  data() {
    return {};
  },

  methods: {
    async complete() {
      await this.$axios.$put('/order/complete', {
        "id": this.dataBasket.data.id
      }).then(response => {
        console.log(response);
        this.$router.push('/user/books/basket/success');
      }, error => {
        console.log(error); //this.res = error.response.data.message
      });
    }

  }
});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/user/books/basket/Confirm.vue?vue&type=script&lang=js&
 /* harmony default export */ var basket_Confirmvue_type_script_lang_js_ = (Confirmvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./apps/tulaveknizky.sk/components/page/user/books/basket/Confirm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(192)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  basket_Confirmvue_type_script_lang_js_,
  Confirmvue_type_template_id_56770388_scoped_true_render,
  Confirmvue_type_template_id_56770388_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "56770388",
  "50b9550e"
  
)

/* harmony default export */ var Confirm = (component.exports);
// EXTERNAL MODULE: ./apps/tulaveknizky.sk/components/page/user/books/basket/Empty.vue + 4 modules
var Empty = __webpack_require__(118);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/tulaveknizky.sk/pages/user/books/basket/confirm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var confirmvue_type_script_lang_js_ = ({
  layout: 'defaultUser',
  components: {
    SubNav: SubNav["a" /* default */],
    Hero: Hero["a" /* default */],
    Confirm: Confirm,
    Empty: Empty["a" /* default */]
  },

  /*  head() {
       return {
       script: [
           
           {
               src: "https://widget.packeta.com/www/js/library.js",
               "data-api-key": "b44b34b577c26ba2"
           },
       ],
       __dangerouslyDisableSanitizers: ['script']
       }
   }, */
  data() {
    return {
      dataBasket: this.$store.state.order.dataBasket // packetaAPIKey: "b44b34b577c26ba2"

    };
  },

  async fetch({
    store
  }) {
    await store.dispatch("order/getDataBasket");
  }
  /* methods: {
      packeta() {
          Packeta.Widget.pick(this.packetaApiKey, this.showSelectedPickupPoint, {
              country: "sk",
              language: "sk",
              claimAssistant: "yes",
              primaryButtonColor: "#000"
          })
      },
      showSelectedPickupPoint(point) {
          var spanElement = document.getElementById('packeta-point-info');
  var idElement = document.getElementById('packeta-point-id');
  if(point) {
  var recursiveToString = function(o) {
  	return Object.keys(o).map(
  		function(k) {
  			if(o[k] === null) {
  				return k + " = null";
  			}
  			
  			return k + " = " + (typeof(o[k]) == "object"
  				? "<ul><li>" + recursiveToString(o[k]) + "</li></ul>"
  				: o[k].toString().replace(/&/g, '&amp;').replace(/</g, '&lt;')
  			);
  		}
  	).join("</li><li>");
  };
  
  spanElement.innerText =
  	"Address: " + point.name + "\n" + point.zip + " " + point.city + "\n\n"
  	+ "All available fields:\n";
  
  spanElement.innerHTML +=
  	"<ul><li>" + recursiveToString(point) + "</li></ul>";
  	
  idElement.value = point.id;
  }
  else {
  spanElement.innerText = "None";
  idElement.value = "";
  }
      }
  }, */


});
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/pages/user/books/basket/confirm.vue?vue&type=script&lang=js&
 /* harmony default export */ var basket_confirmvue_type_script_lang_js_ = (confirmvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/tulaveknizky.sk/pages/user/books/basket/confirm.vue



function confirm_injectStyles (context) {
  
  
}

/* normalize component */

var confirm_component = Object(componentNormalizer["a" /* default */])(
  basket_confirmvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  confirm_injectStyles,
  null,
  "e2ca8170"
  
)

/* harmony default export */ var basket_confirm = __webpack_exports__["default"] = (confirm_component.exports);

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
//# sourceMappingURL=confirm.js.map