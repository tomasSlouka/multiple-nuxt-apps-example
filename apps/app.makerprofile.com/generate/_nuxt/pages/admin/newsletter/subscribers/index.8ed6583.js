(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{222:function(t,e,r){var content=r(226);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("52ddfed8",content,!0,{sourceMap:!1})},225:function(t,e,r){"use strict";var n=r(222);r.n(n).a},226:function(t,e,r){(e=r(7)(!1)).push([t.i,"#bar[data-v-39e82f29]{box-shadow:0 .125rem .125rem rgba(0,0,0,.1);position:relative;top:0;left:0;width:100%;background-color:#fff;z-index:99;height:58px}#bar>.container-narrow[data-v-39e82f29]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}#bar>.container-narrow>div.flex[data-v-39e82f29]{height:100%}.nav>ul[data-v-39e82f29]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-39e82f29]{padding:22px;border-bottom:1px solid transparent;position:relative;transition:.3s}.nav>ul>li>a.nuxt-link-exact-active[data-v-39e82f29],.nav>ul>li>a[data-v-39e82f29]:hover{color:#39ac37;text-decoration:none}.nav>ul>li.sidenavtoggle[data-v-39e82f29]{cursor:pointer}.nav>ul>li.sidenavtoggle>div[data-v-39e82f29]{width:30px;height:4px;background-color:#000;margin:5px 0}.nav>ul>li>a[data-v-39e82f29]{color:#000;line-height:24px;font-weight:500;text-decoration:none}",""]),t.exports=e},227:function(t,e,r){"use strict";var n={methods:{logout:function(){var t=this;console.log("logout"),this.$store.dispatch("auth/logout").then((function(){t.$router.push("/log-out")}))}}},o=(r(225),r(2)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{attrs:{id:"bar"}},[r("div",{staticClass:"container-narrow"},[r("div",{staticClass:"flex wrap align-items-center justify-content-center"},[r("div",{}),t._v(" "),r("div",{staticClass:"nav"},[r("ul",{staticClass:"flex wrap show-md align-items-center"},[r("li",[r("nuxt-link",{attrs:{to:"/admin/newsletter/overview"}},[t._v("Overview")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/admin/newsletter/subscribers"}},[t._v("Subscribers")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/admin/newsletter/messages"}},[t._v("Messages")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/admin/newsletter/automation"}},[t._v("Automation")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/admin/newsletter/avatar"}},[t._v("Avatar & Cover")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/admin/newsletter/settings"}},[t._v("Settings")])],1)])])])])])])}),[],!1,null,"39e82f29",null);e.a=component.exports},258:function(t,e,r){var content=r(301);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("19ffcc45",content,!0,{sourceMap:!1})},300:function(t,e,r){"use strict";var n=r(258);r.n(n).a},301:function(t,e,r){(e=r(7)(!1)).push([t.i,".box[data-v-91112cba]{border-left:3px solid #39ac37}",""]),t.exports=e},304:function(t,e,r){"use strict";r.r(e);var n=r(227),o={},l=r(2),c=Object(l.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"component"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"container-narrow grid gap-20"},[e("h2",[this._v("Newsletter subscribers")]),this._v(" "),e("p",[this._v("Manage all of your subscribers in one place. Create and manage subscribers groups—import or export your subscribers to or out of the platform.")])])])])}],!1,null,"4ed3398d",null).exports,v={},d=(r(300),Object(l.a)(v,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"component grid gap-20 col-3 align-items-start"},[r("div",{staticClass:"box grid gap-20 col-2 auto align-items-center"},[r("h4",[t._v("Total")]),t._v(" "),r("p",{staticClass:"justify-self-end gray"},[t._v("1060 subscribers")])]),t._v(" "),r("div",{staticClass:"box grid gap-20 col-2 auto align-items-center"},[r("h4",[t._v("Active")]),t._v(" "),r("p",{staticClass:"justify-self-end gray"},[t._v("550 subscribers")])]),t._v(" "),r("div",{staticClass:"box grid gap-20 col-2 auto align-items-center"},[r("h4",[t._v("Unsubscribed")]),t._v(" "),r("p",{staticClass:"justify-self-end gray"},[t._v("20 last month")])])])}],!1,null,"91112cba",null).exports),f={},_=Object(l.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"component grid gap-20"},[r("div",{staticClass:"grid gap-20 col-2 align-items-start"},[r("div",{staticClass:"box grid gap-20 justify-items-start"},[r("h3",[t._v("Subscribers tags")]),t._v(" "),r("p",{staticClass:"small"},[t._v("Manage subscribers tags.")]),t._v(" "),r("div",{staticClass:"hr"}),t._v(" "),r("nuxt-link",{staticClass:"button cta",attrs:{to:"/admin/newsletter/messages/create"}},[t._v("Create a new tag")])],1),t._v(" "),r("div",{staticClass:"box grid gap-20 justify-items-start"},[r("h3",[t._v("Import subscribers")]),t._v(" "),r("p",{staticClass:"small"},[t._v("You can import your newsletter subscribers to ManyLetter.")]),t._v(" "),r("div",{staticClass:"hr"}),t._v(" "),r("nuxt-link",{staticClass:"button cta",attrs:{to:"/admin/newsletter/messages/list"}},[t._v("Import subscribers")])],1),t._v(" "),r("div",{staticClass:"box grid gap-20 justify-items-start"},[r("h3",[t._v("Export subscribers")]),t._v(" "),r("p",{staticClass:"small"},[t._v("You can export all of your subscriber's email addresses and leave ManyLetter platform whenever you want.")]),t._v(" "),r("div",{staticClass:"hr"}),t._v(" "),r("nuxt-link",{staticClass:"button cta orange white",attrs:{to:"/admin/newsletter/messages/list"}},[t._v("Export subscribers")])],1)])])}),[],!1,null,"b2f11aba",null).exports,m={layout:"defaultAdmin",components:{Bar:n.a,Intro:c,Actions:_,Stats:d},data:function(){return{}}},h=Object(l.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("Bar"),this._v(" "),e("Intro"),this._v(" "),e("div",{staticClass:"container-narrow grid gap-60"},[e("Actions")],1)],1)}),[],!1,null,"95df4ae2",null);e.default=h.exports}}]);