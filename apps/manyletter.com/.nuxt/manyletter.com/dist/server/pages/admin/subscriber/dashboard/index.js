exports.ids = [16];
exports.modules = {

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/pages/admin/subscriber/dashboard/index.vue?vue&type=template&id=3260e660&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_c('Dashboard'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-narrow grid gap-60\" data-v-3260e660>","</div>",[_c('Subscriptions',{attrs:{"statsSubscriptionsData":_vm.statsSubscriptionsData.data}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/pages/admin/subscriber/dashboard/index.vue?vue&type=template&id=3260e660&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/subscriber/dashboard/Dashboard.vue?vue&type=template&id=5690d671&scoped=true&
var Dashboardvue_type_template_id_5690d671_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"dashboard-Dashboard"}},[_vm._ssrNode("<div class=\"wrapper\" data-v-5690d671><div class=\"container-narrow grid gap-20\" data-v-5690d671><h2 data-v-5690d671>Dashboard</h2> <p data-v-5690d671>Discover basic information about your subscriptions at one place.</p></div></div>")])}
var Dashboardvue_type_template_id_5690d671_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/dashboard/Dashboard.vue?vue&type=template&id=5690d671&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/subscriber/dashboard/Dashboard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Dashboardvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/dashboard/Dashboard.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_Dashboardvue_type_script_lang_js_ = (Dashboardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/dashboard/Dashboard.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dashboard_Dashboardvue_type_script_lang_js_,
  Dashboardvue_type_template_id_5690d671_scoped_true_render,
  Dashboardvue_type_template_id_5690d671_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "5690d671",
  "7f44e4b2"
  
)

/* harmony default export */ var Dashboard = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/subscriber/dashboard/Subscriptions.vue?vue&type=template&id=a0b3e2ea&scoped=true&
var Subscriptionsvue_type_template_id_a0b3e2ea_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component grid gap-20"},[_vm._ssrNode("<div class=\"box grid gap-20\" data-v-a0b3e2ea><p class=\"note justify-self-start\" data-v-a0b3e2ea>Under development</p> <h3 data-v-a0b3e2ea>Subscriptions stats</h3> <div class=\"grid xs-col-1 sm-col-2 auto justify-items-start justify-content-start align-items-start gap-40\" data-v-a0b3e2ea><div class=\"table grid col-2 auto justify-content-start\" data-v-a0b3e2ea><div class=\"table-row\" data-v-a0b3e2ea><div data-v-a0b3e2ea>Active subscriptions</div> <div data-v-a0b3e2ea>"+_vm._ssrEscape(_vm._s(_vm.statsSubscriptionsData.active_subscriptions_count))+"</div></div> <div class=\"table-row\" data-v-a0b3e2ea><div data-v-a0b3e2ea>Passive subscriptions</div> <div data-v-a0b3e2ea>"+_vm._ssrEscape(_vm._s(_vm.statsSubscriptionsData.passive_subscriptions_count))+"</div></div> <div class=\"table-row\" data-v-a0b3e2ea><div data-v-a0b3e2ea>Inactive subscriptions</div> <div data-v-a0b3e2ea>"+_vm._ssrEscape(_vm._s(_vm.statsSubscriptionsData.inactive_subscriptions_count))+"</div></div> <div class=\"table-row\" data-v-a0b3e2ea><div data-v-a0b3e2ea>Total</div> <div data-v-a0b3e2ea>"+_vm._ssrEscape(_vm._s(_vm.statsSubscriptionsData.total_subscriptions_count))+"</div></div></div> <div class=\"table grid col-2 auto justify-content-start\" data-v-a0b3e2ea><div class=\"table-row\" data-v-a0b3e2ea><div data-v-a0b3e2ea>Messages sent to you this month</div> <div data-v-a0b3e2ea>"+_vm._ssrEscape(_vm._s(_vm.statsSubscriptionsData.messages_received_count))+"</div></div> <div class=\"table-row\" data-v-a0b3e2ea><div data-v-a0b3e2ea>Email recieved this month</div> <div data-v-a0b3e2ea>"+_vm._ssrEscape(_vm._s(_vm.statsSubscriptionsData.email_received_count))+"</div></div> <div class=\"table-row\" data-v-a0b3e2ea><div data-v-a0b3e2ea>Daily emails</div> <div data-v-a0b3e2ea>"+_vm._ssrEscape(_vm._s(_vm.statsSubscriptionsData.daily_email_received_count))+"</div></div></div></div></div>")])}
var Subscriptionsvue_type_template_id_a0b3e2ea_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/dashboard/Subscriptions.vue?vue&type=template&id=a0b3e2ea&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/components/admin/subscriber/dashboard/Subscriptions.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Subscriptionsvue_type_script_lang_js_ = ({
  props: ['statsSubscriptionsData']
});
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/dashboard/Subscriptions.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_Subscriptionsvue_type_script_lang_js_ = (Subscriptionsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/components/admin/subscriber/dashboard/Subscriptions.vue



function Subscriptions_injectStyles (context) {
  
  
}

/* normalize component */

var Subscriptions_component = Object(componentNormalizer["a" /* default */])(
  dashboard_Subscriptionsvue_type_script_lang_js_,
  Subscriptionsvue_type_template_id_a0b3e2ea_scoped_true_render,
  Subscriptionsvue_type_template_id_a0b3e2ea_scoped_true_staticRenderFns,
  false,
  Subscriptions_injectStyles,
  "a0b3e2ea",
  "af7690ee"
  
)

/* harmony default export */ var Subscriptions = (Subscriptions_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./apps/manyletter.com/pages/admin/subscriber/dashboard/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var dashboardvue_type_script_lang_js_ = ({
  layout: 'default-admin-subscriber',
  components: {
    Dashboard: Dashboard,
    Subscriptions: Subscriptions
  },

  async asyncData({
    $axios,
    $auth
  }) {
    const [statsSubscriptionsData] = await Promise.all([$axios.$get('/api/maylday/stats/subscriptions')]);
    return {
      statsSubscriptionsData
    };
  },

  methods: {
    loadBack() {
      this.$router.go(-1);
    },

    loadNext() {
      this.$router.push({
        path: '/admin/subscriber/subscriptions'
      });
    }

  }
});
// CONCATENATED MODULE: ./apps/manyletter.com/pages/admin/subscriber/dashboard/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var subscriber_dashboardvue_type_script_lang_js_ = (dashboardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./apps/manyletter.com/pages/admin/subscriber/dashboard/index.vue



function dashboard_injectStyles (context) {
  
  
}

/* normalize component */

var dashboard_component = Object(componentNormalizer["a" /* default */])(
  subscriber_dashboardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  dashboard_injectStyles,
  "3260e660",
  "06b038cf"
  
)

/* harmony default export */ var dashboard = __webpack_exports__["default"] = (dashboard_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map