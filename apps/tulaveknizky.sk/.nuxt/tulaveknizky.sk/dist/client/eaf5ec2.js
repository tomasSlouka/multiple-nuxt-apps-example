(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{248:function(t,e,n){var content=n(251);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("5517332a",content,!0,{sourceMap:!1})},249:function(t,e,n){var content=n(253);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("2d75e441",content,!0,{sourceMap:!1})},250:function(t,e,n){"use strict";n(248)},251:function(t,e,n){(e=n(6)(!1)).push([t.i,".component[data-v-52e843ca]{padding:1px;background-color:rgba(255,212,1,.25098);border-bottom:10px solid #ffd401}",""]),t.exports=e},252:function(t,e,n){"use strict";n(249)},253:function(t,e,n){(e=n(6)(!1)).push([t.i,".component[data-v-38be4d4d]{background-color:#fff;box-shadow:0 .125rem .125rem rgba(0,0,0,.1);border-top:1px solid #eee;position:relative}.container-standard[data-v-38be4d4d]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}.container-standard>div.flex[data-v-38be4d4d]{height:100%}.nav>ul[data-v-38be4d4d]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-38be4d4d]{padding:10px 16px;border-bottom:1px solid transparent;position:relative;top:0;transition:.2s;display:inline-block;color:#000}.nav>ul>li>a[data-v-38be4d4d]:hover{color:#000;text-decoration:none;position:relative;top:2px}.nav>ul>li>a.nuxt-link-active[data-v-38be4d4d],.nav>ul>li>a.nuxt-link-exact-active[data-v-38be4d4d]{color:#000;text-decoration:none;font-weight:600}.nav>ul>li>a[data-v-38be4d4d]{color:rgba(0,0,0,.72157);line-height:24px;text-decoration:none}",""]),t.exports=e},254:function(t,e,n){"use strict";var o={props:{h1:String,h2:String}},l=(n(250),n(3)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("div",{staticClass:"container-hero grid"},[n("div",{staticClass:"grid justify-items-start"},[n("h1",{staticClass:"h3"},[t._v(t._s(t.h1))]),t._v(" "),t.h2?n("h3",{staticClass:"h1"},[t._v(t._s(t.h2))]):t._e()])])])}),[],!1,null,"52e843ca",null);e.a=component.exports},255:function(t,e,n){"use strict";var o={data:function(){return{}},methods:{logout:function(){var t=this;console.log("logout"),this.$store.dispatch("auth/logout").then((function(){t.$router.push("/odhlasenie")}))}}},l=(n(252),n(3)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("div",{staticClass:"container-standard grid justify-items-end"},[n("div",{staticClass:"flex wrap align-items-center justify-content-space-between"},[n("div",{staticClass:"nav"},[n("ul",{staticClass:"flex wrap show-md align-items-center"},[n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/user/books/basket"}},[t._v("Košík")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/user/books/borrowed"}},[t._v("Požičané knižky")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/user/books/rated"}},[t._v("Hodnotené knižky")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/user/books/reserved"}},[t._v("Rezervované knižky")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/user/books/wishlist"}},[t._v("Wishlist")])],1)])])])])])}),[],!1,null,"38be4d4d",null);e.a=component.exports},374:function(t,e,n){"use strict";n.r(e);var o=n(254),l={layout:"defaultUser",components:{SubNav:n(255).a,Hero:o.a}},r=n(3),component=Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("SubNav"),this._v(" "),e("Hero",{attrs:{h1:"Moje knižky",h2:"Rezervované knižky"}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);