(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{222:function(t,e,n){var content=n(226);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("607d0fda",content,!0,{sourceMap:!1})},225:function(t,e,n){"use strict";var r=n(222);n.n(r).a},226:function(t,e,n){(e=n(7)(!1)).push([t.i,"#bar[data-v-587a445c]{box-shadow:0 .125rem .125rem rgba(0,0,0,.1);position:relative;top:0;left:0;width:100%;background-color:#fff;z-index:99;height:58px}#bar>.container-narrow[data-v-587a445c]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}#bar>.container-narrow>div.flex[data-v-587a445c]{height:100%}.nav>ul[data-v-587a445c]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-587a445c]{padding:22px;border-bottom:1px solid transparent;position:relative;transition:.3s}.nav>ul>li>a.nuxt-link-exact-active[data-v-587a445c],.nav>ul>li>a[data-v-587a445c]:hover{color:#39ac37;text-decoration:none}.nav>ul>li.sidenavtoggle[data-v-587a445c]{cursor:pointer}.nav>ul>li.sidenavtoggle>div[data-v-587a445c]{width:30px;height:4px;background-color:#000;margin:5px 0}.nav>ul>li>a[data-v-587a445c]{color:#000;line-height:24px;font-weight:500;text-decoration:none}",""]),t.exports=e},227:function(t,e,n){"use strict";var r={methods:{logout:function(){var t=this;console.log("logout"),this.$store.dispatch("auth/logout").then((function(){t.$router.push("/log-out")}))}}},o=(n(225),n(2)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"bar"}},[n("div",{staticClass:"container-narrow"},[n("div",{staticClass:"flex wrap align-items-center justify-content-center"},[n("div",{}),t._v(" "),n("div",{staticClass:"nav"},[n("ul",{staticClass:"flex wrap show-md align-items-center"},[n("li",[n("nuxt-link",{attrs:{to:"/admin/website/navigation"}},[t._v("Navigation")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/admin/website/templates"}},[t._v("Templates")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/admin/website/domain"}},[t._v("Custom domain")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/admin/website/social"}},[t._v("Social networks")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/admin/website/integrations"}},[t._v("Integrations")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/admin/website/settings"}},[t._v("Settings")])],1)])])])])])])}),[],!1,null,"587a445c",null);e.a=component.exports},231:function(t,e,n){var content=n(238);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("5211e3a0",content,!0,{sourceMap:!1})},237:function(t,e,n){"use strict";var r=n(231);n.n(r).a},238:function(t,e,n){(e=n(7)(!1)).push([t.i,".link[data-v-05ea98d4]{color:#000;cursor:pointer;padding:10px 40px 10px 10px;height:44px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.link-wrapper:hover .link[data-v-05ea98d4]{background-color:#f5f8fc}.editor:hover .ion-ios-create[data-v-05ea98d4]{color:#000}.editor[data-v-05ea98d4]{height:34px;width:34px;line-height:34px;text-align:center;font-size:.8em!important;margin-right:5px;cursor:pointer;color:#bbb}.editor[data-v-05ea98d4]:hover{color:#000}.ion-ios-create[data-v-05ea98d4]{color:#bbb}",""]),t.exports=e},239:function(t,e,n){"use strict";var r={},o=n(2),component=Object(o.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"component"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"container-narrow grid gap-20"},[e("h2",[this._v("Website navigation")]),this._v(" "),e("p",[this._v("Create unlimited number of pages and organize your website navigation.")])])])])}],!1,null,"2f58f876",null);e.a=component.exports},240:function(t,e,n){"use strict";var r={data:function(){return{}}},o=(n(237),n(2)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component grid gap-20 col-3 align-items-start"},[n("div",{staticClass:"box grid gap-20"},[n("h4",[t._v("Top level menu")]),t._v(" "),n("div",{staticClass:"grid gap-2"},[n("div",{staticClass:"link-wrapper grid justify-content-space-between align-items-center relative"},[n("nuxt-link",{staticClass:"link",attrs:{tag:"div",to:"/admin/website/navigation/1",replace:""}},[t._v(" Home")]),t._v(" "),n("nuxt-link",{staticClass:"editor absolute-right",attrs:{tag:"div",to:"/admin/website/page/editor"}},[n("i",{staticClass:"icon ion-ios-create"})])],1),t._v(" "),n("div",{staticClass:"link-wrapper grid justify-content-space-between align-items-center relative"},[n("nuxt-link",{staticClass:"link",attrs:{tag:"div",to:"/admin/website/navigation/2",replace:""}},[t._v(" Contact")]),t._v(" "),n("nuxt-link",{staticClass:"editor absolute-right",attrs:{tag:"div",to:"/admin/website/page/editor"}},[n("i",{staticClass:"icon ion-ios-create"})])],1)]),t._v(" "),n("div",{staticClass:"hr"}),t._v(" "),t._m(0)]),t._v(" "),t.$route.params.lvl2?n("div",{staticClass:"box grid gap-20"},[n("h4",[t._v("2nd level menu")]),t._v(" "),n("div",{staticClass:"grid gap-2"},[n("div",{staticClass:"link-wrapper grid justify-content-space-between align-items-center relative"},[n("nuxt-link",{staticClass:"link",attrs:{tag:"div",to:"/admin/website/navigation/"+t.$route.params.lvl2+"/1",replace:""}},[t._v(" Test page")]),t._v(" "),n("nuxt-link",{staticClass:"editor absolute-right",attrs:{tag:"div",to:"/admin/website/page/editor"}},[n("i",{staticClass:"icon ion-ios-create"})])],1),t._v(" "),n("div",{staticClass:"link-wrapper grid justify-content-space-between align-items-center relative"},[n("nuxt-link",{staticClass:"link",attrs:{tag:"div",to:"/admin/website/navigation/"+t.$route.params.lvl2+"/2",replace:""}},[t._v(" Page test with very long text")]),t._v(" "),n("nuxt-link",{staticClass:"editor absolute-right",attrs:{tag:"div",to:"/admin/website/page/editor"}},[n("i",{staticClass:"icon ion-ios-create"})])],1)]),t._v(" "),n("div",{staticClass:"hr"}),t._v(" "),t._m(1)]):t._e(),t._v(" "),t.$route.params.lvl3?n("div",{staticClass:"box grid gap-20"},[n("h4",[t._v("3rd level menu")]),t._v(" "),t._m(2)]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("form",[e("label",{attrs:{for:"page"}},[this._v("Create page")]),this._v(" "),e("div",{staticClass:"relative grid"},[e("input",{attrs:{type:"text",id:"page",name:"page"}}),this._v(" "),e("button",{staticClass:"cta small absolute-right align-self-center mr10",attrs:{type:"submit"}},[this._v("Add")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("form",[e("label",{attrs:{for:"page"}},[this._v("Create subpage")]),this._v(" "),e("div",{staticClass:"relative grid"},[e("input",{attrs:{type:"text",id:"page",name:"page"}}),this._v(" "),e("button",{staticClass:"cta small mr10 absolute-right align-self-center",attrs:{type:"submit"}},[this._v("Add")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("form",[e("label",{attrs:{for:"page"}},[this._v("Create subpage")]),this._v(" "),e("div",{staticClass:"relative grid"},[e("input",{attrs:{type:"text",id:"page",name:"page"}}),this._v(" "),e("button",{staticClass:"cta small mr10 absolute-right align-self-center",attrs:{type:"submit"}},[this._v("Add")])])])])}],!1,null,"05ea98d4",null);e.a=component.exports},329:function(t,e,n){"use strict";n.r(e);var r=n(227),o=n(239),l=n(240),c={layout:"defaultAdmin",components:{Bar:r.a,Intro:o.a,Navigation:l.a},data:function(){return{}}},v=n(2),component=Object(v.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("Bar"),this._v(" "),e("Intro"),this._v(" "),e("div",{staticClass:"container-narrow grid gap-60"},[e("Navigation")],1)],1)}),[],!1,null,"75088871",null);e.default=component.exports}}]);