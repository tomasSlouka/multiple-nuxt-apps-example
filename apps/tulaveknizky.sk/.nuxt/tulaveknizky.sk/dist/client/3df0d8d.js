(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{331:function(t,o,n){var content=n(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("577583f2",content,!0,{sourceMap:!1})},332:function(t,o,n){var content=n(341);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("4115509a",content,!0,{sourceMap:!1})},338:function(t,o,n){"use strict";n(331)},339:function(t,o,n){var e=n(11)(!1);e.push([t.i,".component[data-v-e51d787c]{padding:1px;background-color:rgba(255,212,1,.25098);border-bottom:10px solid #ffd401}",""]),t.exports=e},340:function(t,o,n){"use strict";n(332)},341:function(t,o,n){var e=n(11)(!1);e.push([t.i,".component[data-v-5960b3cc]{background-color:#fff;box-shadow:0 .125rem .125rem rgba(0,0,0,.1);border-top:1px solid #eee;position:relative}.container-standard[data-v-5960b3cc]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}.container-standard>div.flex[data-v-5960b3cc]{height:100%}.nav>ul[data-v-5960b3cc]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-5960b3cc]{padding:10px 16px;border-bottom:1px solid transparent;position:relative;top:0;transition:.2s;display:inline-block;color:#000}.nav>ul>li>a[data-v-5960b3cc]:hover{color:#000;text-decoration:none;position:relative;top:2px}.nav>ul>li>a.nuxt-link-active[data-v-5960b3cc],.nav>ul>li>a.nuxt-link-exact-active[data-v-5960b3cc]{color:#000;text-decoration:none;font-weight:600}.nav>ul>li>a[data-v-5960b3cc]{color:rgba(0,0,0,.72157);line-height:24px;text-decoration:none}",""]),t.exports=e},342:function(t,o,n){"use strict";var e={props:{h1:String,h2:String}},l=(n(338),n(6)),component=Object(l.a)(e,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"component"},[n("div",{staticClass:"container-hero grid"},[n("div",{staticClass:"grid justify-items-start"},[n("h3",{staticClass:"h3"},[t._v(t._s(t.h1))]),t._v(" "),t.h2?n("h1",{staticClass:"h1"},[t._v(t._s(t.h2))]):t._e()])])])}),[],!1,null,"e51d787c",null);o.a=component.exports},343:function(t,o,n){"use strict";var e={data:function(){return{}},methods:{logout:function(){var t=this;console.log("logout"),this.$store.dispatch("auth/logout").then((function(){t.$router.push("/odhlasenie")}))}}},l=(n(340),n(6)),component=Object(l.a)(e,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"component"},[n("div",{staticClass:"container-standard grid justify-items-end"},[n("div",{staticClass:"flex wrap align-items-center justify-content-space-between"},[n("div",{staticClass:"nav"},[n("ul",{staticClass:"flex wrap show-md align-items-center"},[n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/user/books/basket"}},[t._v("Batôžtek (košík)")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/user/books/borrowed"}},[t._v("Požičané knižky")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/user/books/rated"}},[t._v("Hodnotené knižky")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/user/books/wishlist"}},[t._v("Wishlist")])],1)])])])])])}),[],!1,null,"5960b3cc",null);o.a=component.exports},523:function(t,o,n){"use strict";n.r(o);var e=n(342),l={layout:"defaultUser",components:{SubNav:n(343).a,Hero:e.a}},r=n(6),component=Object(r.a)(l,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"page"},[n("SubNav"),t._v(" "),n("Hero",{attrs:{h1:"Moje knižky",h2:"Wishlist"}})],1)}),[],!1,null,null,null);o.default=component.exports}}]);