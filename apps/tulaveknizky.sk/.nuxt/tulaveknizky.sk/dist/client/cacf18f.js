(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{238:function(t,n,e){var content=e(241);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(6).default)("40171c24",content,!0,{sourceMap:!1})},239:function(t,n,e){var content=e(243);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(6).default)("a957082a",content,!0,{sourceMap:!1})},240:function(t,n,e){"use strict";e(238)},241:function(t,n,e){(n=e(5)(!1)).push([t.i,".component[data-v-05b6f733]{padding:1px;background-color:rgba(255,212,1,.25098);border-bottom:10px solid #ffd401}",""]),t.exports=n},242:function(t,n,e){"use strict";e(239)},243:function(t,n,e){(n=e(5)(!1)).push([t.i,".component[data-v-8e91234c]{background-color:#fff;box-shadow:0 .125rem .125rem rgba(0,0,0,.1);border-top:1px solid #eee}.container-standard[data-v-8e91234c]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}.container-standard>div.flex[data-v-8e91234c]{height:100%}.nav>ul[data-v-8e91234c]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-8e91234c]{padding:10px 16px;border-bottom:1px solid transparent;position:relative;top:0;transition:.2s;display:inline-block;color:#000}.nav>ul>li>a[data-v-8e91234c]:hover{color:#000;text-decoration:none;position:relative;top:2px}.nav>ul>li>a.nuxt-link-active[data-v-8e91234c],.nav>ul>li>a.nuxt-link-exact-active[data-v-8e91234c]{color:#000;text-decoration:none;font-weight:600}.nav>ul>li>a[data-v-8e91234c]{color:rgba(0,0,0,.72157);line-height:24px;text-decoration:none}",""]),t.exports=n},244:function(t,n,e){"use strict";var o={props:{h1:String,h2:String}},l=(e(240),e(3)),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"component"},[e("div",{staticClass:"container-hero grid"},[e("div",{staticClass:"grid justify-items-start"},[e("h1",{staticClass:"h3"},[t._v(t._s(t.h1))]),t._v(" "),t.h2?e("h3",{staticClass:"h1"},[t._v(t._s(t.h2))]):t._e()])])])}),[],!1,null,"05b6f733",null);n.a=component.exports},245:function(t,n,e){"use strict";var o={data:function(){return{}},methods:{logout:function(){var t=this;console.log("logout"),this.$store.dispatch("auth/logout").then((function(){t.$router.push("/odhlasenie")}))}}},l=(e(242),e(3)),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"component"},[e("div",{staticClass:"container-standard grid justify-items-end"},[e("div",{staticClass:"flex wrap align-items-center justify-content-space-between"},[e("div",{staticClass:"nav"},[e("ul",{staticClass:"flex wrap show-md align-items-center"},[e("li",[e("nuxt-link",{staticClass:"small",attrs:{to:"/admin/orders"}},[t._v("Objednávky")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"small",attrs:{to:"/admin/categories"}},[t._v("Kategórie")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"small",attrs:{to:"/admin/tags"}},[t._v("Značky")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"small",attrs:{to:"/admin/titles"}},[t._v("Knižné tituly")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"small",attrs:{to:"/admin/stock"}},[t._v("Sklad")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"small",attrs:{to:"/admin/users"}},[t._v("Používatelia")])],1)])])])])])}),[],!1,null,"8e91234c",null);n.a=component.exports},359:function(t,n,e){"use strict";e.r(n);var o=e(244),l={layout:"defaultAdmin",components:{SubNav:e(245).a,Hero:o.a}},r=e(3),component=Object(r.a)(l,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"page"},[n("SubNav"),this._v(" "),n("Hero",{attrs:{h1:"Administrácia",h2:"Používatelia"}})],1)}),[],!1,null,null,null);n.default=component.exports}}]);