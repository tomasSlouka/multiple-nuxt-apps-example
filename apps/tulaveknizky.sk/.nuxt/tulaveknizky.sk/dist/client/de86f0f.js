(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{244:function(t,n,e){var content=e(248);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(6).default)("a9194d14",content,!0,{sourceMap:!1})},245:function(t,n,e){var content=e(250);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(6).default)("a0191420",content,!0,{sourceMap:!1})},247:function(t,n,e){"use strict";e(244)},248:function(t,n,e){(n=e(5)(!1)).push([t.i,".component[data-v-cbf1a566]{padding:1px;background-color:rgba(255,212,1,.25098);border-bottom:10px solid #ffd401}",""]),t.exports=n},249:function(t,n,e){"use strict";e(245)},250:function(t,n,e){(n=e(5)(!1)).push([t.i,".component[data-v-d3087df8]{background-color:#fff;box-shadow:0 .125rem .125rem rgba(0,0,0,.1);border-top:1px solid #eee;position:relative}.container-standard[data-v-d3087df8]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}.container-standard>div.flex[data-v-d3087df8]{height:100%}.nav>ul[data-v-d3087df8]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-d3087df8]{padding:10px 16px;border-bottom:1px solid transparent;position:relative;top:0;transition:.2s;display:inline-block;color:#000}.nav>ul>li>a[data-v-d3087df8]:hover{color:#000;text-decoration:none;position:relative;top:2px}.nav>ul>li>a.nuxt-link-exact-active[data-v-d3087df8]{color:#000;text-decoration:none;font-weight:600}.nav>ul>li>a[data-v-d3087df8]{color:rgba(0,0,0,.72157);line-height:24px;text-decoration:none}",""]),t.exports=n},251:function(t,n,e){"use strict";var o={props:{h1:String,h2:String}},r=(e(247),e(3)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"component"},[e("div",{staticClass:"container-hero grid"},[e("div",{staticClass:"grid justify-items-start"},[e("h1",{staticClass:"h3"},[t._v(t._s(t.h1))]),t._v(" "),t.h2?e("h3",{staticClass:"h1"},[t._v(t._s(t.h2))]):t._e()])])])}),[],!1,null,"cbf1a566",null);n.a=component.exports},252:function(t,n,e){"use strict";var o={data:function(){return{}},methods:{logout:function(){var t=this;console.log("logout"),this.$store.dispatch("auth/logout").then((function(){t.$router.push("/odhlasenie")}))}}},r=(e(249),e(3)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"component"},[e("div",{staticClass:"container-standard grid justify-items-end"},[e("div",{staticClass:"flex wrap align-items-center justify-content-space-between"},[e("div",{staticClass:"nav"},[e("ul",{staticClass:"flex wrap show-md align-items-center"},[e("li",[e("nuxt-link",{staticClass:"small",attrs:{to:"/user/account/settings"}},[t._v("Nastavenia")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"small",attrs:{to:"/user/account/credits"}},[t._v("Kredity")])],1),t._v(" "),e("li",[e("a",{staticClass:"small",on:{click:function(n){return n.preventDefault(),t.logout()}}},[t._v("Odhlásiť sa")])])])])])])])}),[],!1,null,"d3087df8",null);n.a=component.exports},369:function(t,n,e){"use strict";e.r(n);var o=e(251),r={middleware:["check-userdata"],layout:"defaultPage",components:{SubNav:e(252).a,Hero:o.a}},l=e(3),component=Object(l.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"page"},[n("SubNav"),this._v(" "),n("Hero",{attrs:{h1:"Môj účet",h2:"Nastavenia"}})],1)}),[],!1,null,null,null);n.default=component.exports}}]);