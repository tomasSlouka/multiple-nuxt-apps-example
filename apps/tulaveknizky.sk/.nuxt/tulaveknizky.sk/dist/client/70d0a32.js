(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{250:function(t,n,o){var content=o(253);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("5517332a",content,!0,{sourceMap:!1})},251:function(t,n,o){var content=o(255);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("4115509a",content,!0,{sourceMap:!1})},252:function(t,n,o){"use strict";o(250)},253:function(t,n,o){(n=o(7)(!1)).push([t.i,".component[data-v-52e843ca]{padding:1px;background-color:rgba(255,212,1,.25098);border-bottom:10px solid #ffd401}",""]),t.exports=n},254:function(t,n,o){"use strict";o(251)},255:function(t,n,o){(n=o(7)(!1)).push([t.i,".component[data-v-5960b3cc]{background-color:#fff;box-shadow:0 .125rem .125rem rgba(0,0,0,.1);border-top:1px solid #eee;position:relative}.container-standard[data-v-5960b3cc]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}.container-standard>div.flex[data-v-5960b3cc]{height:100%}.nav>ul[data-v-5960b3cc]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-5960b3cc]{padding:10px 16px;border-bottom:1px solid transparent;position:relative;top:0;transition:.2s;display:inline-block;color:#000}.nav>ul>li>a[data-v-5960b3cc]:hover{color:#000;text-decoration:none;position:relative;top:2px}.nav>ul>li>a.nuxt-link-active[data-v-5960b3cc],.nav>ul>li>a.nuxt-link-exact-active[data-v-5960b3cc]{color:#000;text-decoration:none;font-weight:600}.nav>ul>li>a[data-v-5960b3cc]{color:rgba(0,0,0,.72157);line-height:24px;text-decoration:none}",""]),t.exports=n},256:function(t,n,o){"use strict";var e={props:{h1:String,h2:String}},l=(o(252),o(3)),component=Object(l.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"component"},[o("div",{staticClass:"container-hero grid"},[o("div",{staticClass:"grid justify-items-start"},[o("h1",{staticClass:"h3"},[t._v(t._s(t.h1))]),t._v(" "),t.h2?o("h3",{staticClass:"h1"},[t._v(t._s(t.h2))]):t._e()])])])}),[],!1,null,"52e843ca",null);n.a=component.exports},257:function(t,n,o){"use strict";var e={data:function(){return{}},methods:{logout:function(){var t=this;console.log("logout"),this.$store.dispatch("auth/logout").then((function(){t.$router.push("/odhlasenie")}))}}},l=(o(254),o(3)),component=Object(l.a)(e,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"component"},[n("div",{staticClass:"container-standard grid justify-items-end"},[n("div",{staticClass:"flex wrap align-items-center justify-content-space-between"},[n("div",{staticClass:"nav"},[n("ul",{staticClass:"flex wrap show-md align-items-center"},[n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/user/books/basket"}},[this._v("Batôžtek (košík)")])],1),this._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/user/books/borrowed"}},[this._v("Požičané knižky")])],1),this._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/user/books/rated"}},[this._v("Hodnotené knižky")])],1),this._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/user/books/wishlist"}},[this._v("Wishlist")])],1)])])])])])}),[],!1,null,"5960b3cc",null);n.a=component.exports},380:function(t,n,o){"use strict";o.r(n);var e=o(256),l={layout:"defaultUser",components:{SubNav:o(257).a,Hero:e.a}},r=o(3),component=Object(r.a)(l,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"page"},[n("SubNav"),this._v(" "),n("Hero",{attrs:{h1:"Moje knižky",h2:"Wishlist"}})],1)}),[],!1,null,null,null);n.default=component.exports}}]);