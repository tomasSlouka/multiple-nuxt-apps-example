(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{236:function(t,n,e){var content=e(239);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(6).default)("40171c24",content,!0,{sourceMap:!1})},237:function(t,n,e){var content=e(241);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(6).default)("566cb684",content,!0,{sourceMap:!1})},238:function(t,n,e){"use strict";e(236)},239:function(t,n,e){(n=e(5)(!1)).push([t.i,".component[data-v-05b6f733]{padding:1px;background-color:rgba(255,212,1,.25098);border-bottom:10px solid #ffd401}",""]),t.exports=n},240:function(t,n,e){"use strict";e(237)},241:function(t,n,e){(n=e(5)(!1)).push([t.i,".component[data-v-820d2a54]{background-color:#fff;box-shadow:0 .125rem .125rem rgba(0,0,0,.1);border-top:1px solid #eee}.container-standard[data-v-820d2a54]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}.container-standard>div.flex[data-v-820d2a54]{height:100%}.nav>ul[data-v-820d2a54]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-820d2a54]{padding:10px 16px;border-bottom:1px solid transparent;position:relative;top:0;transition:.2s;display:inline-block;color:#000}.nav>ul>li>a[data-v-820d2a54]:hover{color:#000;text-decoration:none;position:relative;top:2px}.nav>ul>li>a.nuxt-link-exact-active[data-v-820d2a54]{color:#000;text-decoration:none;font-weight:600}.nav>ul>li>a[data-v-820d2a54]{color:rgba(0,0,0,.72157);line-height:24px;text-decoration:none}",""]),t.exports=n},242:function(t,n,e){"use strict";var o={props:{h1:String,h2:String}},l=(e(238),e(3)),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"component"},[e("div",{staticClass:"container-hero grid"},[e("div",{staticClass:"grid justify-items-start"},[e("h1",{staticClass:"h3"},[t._v(t._s(t.h1))]),t._v(" "),t.h2?e("h3",{staticClass:"h1"},[t._v(t._s(t.h2))]):t._e()])])])}),[],!1,null,"05b6f733",null);n.a=component.exports},243:function(t,n,e){"use strict";var o={data:function(){return{}},methods:{logout:function(){var t=this;console.log("logout"),this.$store.dispatch("auth/logout").then((function(){t.$router.push("/odhlasenie")}))}}},l=(e(240),e(3)),component=Object(l.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"component"},[n("div",{staticClass:"container-standard grid justify-items-end"},[n("div",{staticClass:"flex wrap align-items-center justify-content-space-between"},[n("div",{staticClass:"nav"},[n("ul",{staticClass:"flex wrap show-md align-items-center"},[n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/orders"}},[this._v("Objednávky")])],1),this._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/titles"}},[this._v("Knižné tituly")])],1),this._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/storage"}},[this._v("Sklad")])],1),this._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/users"}},[this._v("Používatelia")])],1)])])])])])}),[],!1,null,"820d2a54",null);n.a=component.exports},367:function(t,n,e){"use strict";e.r(n);var o=e(242),l={middleware:["check-userdata"],layout:"defaultPage",components:{SubNav:e(243).a,Hero:o.a}},r=e(3),component=Object(r.a)(l,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"page"},[n("SubNav"),this._v(" "),n("Hero",{attrs:{h1:"Administrácia",h2:"Používatelia"}})],1)}),[],!1,null,null,null);n.default=component.exports}}]);