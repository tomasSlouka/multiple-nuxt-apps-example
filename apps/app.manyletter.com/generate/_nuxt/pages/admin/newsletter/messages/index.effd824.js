(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{222:function(t,e,n){var content=n(226);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("7a596ad9",content,!0,{sourceMap:!1})},225:function(t,e,n){"use strict";var r=n(222);n.n(r).a},226:function(t,e,n){(e=n(7)(!1)).push([t.i,"#bar[data-v-4c0f8e89]{box-shadow:0 .125rem .125rem rgba(0,0,0,.1);position:relative;top:0;left:0;width:100%;background-color:#fff;z-index:99;height:58px}#bar>.container-narrow[data-v-4c0f8e89]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}#bar>.container-narrow>div.flex[data-v-4c0f8e89]{height:100%}.nav>ul[data-v-4c0f8e89]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-4c0f8e89]{padding:22px;border-bottom:1px solid transparent;position:relative;transition:.3s}.nav>ul>li>a.nuxt-link-exact-active[data-v-4c0f8e89],.nav>ul>li>a[data-v-4c0f8e89]:hover{color:#39ac37;text-decoration:none}.nav>ul>li.sidenavtoggle[data-v-4c0f8e89]{cursor:pointer}.nav>ul>li.sidenavtoggle>div[data-v-4c0f8e89]{width:30px;height:4px;background-color:#000;margin:5px 0}.nav>ul>li>a[data-v-4c0f8e89]{color:#000;line-height:24px;font-weight:500;text-decoration:none}",""]),t.exports=e},227:function(t,e,n){"use strict";var r={methods:{logout:function(){var t=this;console.log("logout"),this.$store.dispatch("auth/logout").then((function(){t.$router.push("/log-out")}))}}},o=(n(225),n(2)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"bar"}},[n("div",{staticClass:"container-narrow"},[n("div",{staticClass:"flex wrap align-items-center justify-content-center"},[n("div",{}),t._v(" "),n("div",{staticClass:"nav"},[n("ul",{staticClass:"flex wrap show-md align-items-center"},[n("li",[n("nuxt-link",{attrs:{to:"/admin/newsletter/overview"}},[t._v("Overview")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/admin/newsletter/subscribers"}},[t._v("Subscribers")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/admin/newsletter/messages"}},[t._v("Messages")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/admin/newsletter/automation"}},[t._v("Automation")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/admin/newsletter/avatar"}},[t._v("Avatar & Cover")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/admin/newsletter/settings"}},[t._v("Settings")])],1)])])])])])])}),[],!1,null,"4c0f8e89",null);e.a=component.exports},254:function(t,e,n){var content=n(293);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("891b1404",content,!0,{sourceMap:!1})},292:function(t,e,n){"use strict";var r=n(254);n.n(r).a},293:function(t,e,n){(e=n(7)(!1)).push([t.i,".messages.box[data-v-96c94c00]{padding:0}.message[data-v-96c94c00]{padding:30px;transition:all .6s cubic-bezier(.165,.84,.44,1)}.message[data-v-96c94c00]:hover{transform:scale(1)}.filter[data-v-96c94c00]{border-left:3px solid rgb(59 172 55)}",""]),t.exports=e},308:function(t,e,n){"use strict";n.r(e);n(21),n(14),n(31);var r=n(41),o=(n(30),n(3)),l=n(227),c={},v=n(2),d=Object(v.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"component"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"container-narrow grid gap-20 col-2"},[this._m(0),this._v(" "),e("div",{staticClass:"grid align-items-start justify-items-end"},[e("nuxt-link",{staticClass:"button cta",attrs:{to:"/admin/newsletter/messages/create"}},[this._v("Create a new message")])],1),this._v(" "),this._m(1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"grid gap-20"},[e("h2",[this._v("Newsletter messages")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"span-2"},[e("p",{staticClass:"maxw500"},[this._v("Browse the list of all of your messages you sent, discover detailed stats about each  message or create a new message.")])])}],!1,null,"5e6dfd28",null).exports,_={props:["messageList"]},m=(n(292),Object(v.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component grid gap-20"},[n("div",{staticClass:"filter box grid gap-20"},[t._m(0),t._v(" "),n("div",[n("p",{staticClass:"small"},[t._v("Showing "+t._s(t.messageList.count)+" messages.")])])]),t._v(" "),n("div",{staticClass:"messages box grid"},t._l(t.messageList.data,(function(e){return n("nuxt-link",{key:e.id,staticClass:"message bb1 pointer grid gap-20",attrs:{tag:"div",to:"/admin/creator/messages/message/detail/"+e.id}},[n("div",{staticClass:"grid col-2 auto justify-content-start gap-20"},[n("div",{staticClass:"text-center pr20 align-self-start"},[n("p",{staticClass:"h4"},[t._v(t._s(e.send_date_at.split("-")[2])+"."+t._s(e.send_date_at.split("-")[1]))]),t._v(" "),n("p",{staticClass:"small"},[t._v(t._s(e.send_date_at.split("-")[0]))])]),t._v(" "),n("div",{staticClass:"grid gap-10"},[n("h4",[t._v(t._s(e.title))]),t._v(" "),n("p",{},[t._v(t._s(e.description))])])])])})),1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"grid gap-20 col-3"},[n("div",[n("label",{attrs:{for:"status"}},[t._v("Status")]),t._v(" "),n("select",{attrs:{name:"status",id:"status"}},[n("option",{attrs:{value:"0"}},[t._v("Draft")]),t._v(" "),n("option",{attrs:{value:"1"}},[t._v("Scheduled")]),t._v(" "),n("option",{attrs:{value:"2"}},[t._v("Sent")])])]),t._v(" "),n("div",[n("label",{attrs:{for:"group"}},[t._v("Subscribers group")]),t._v(" "),n("select",{attrs:{name:"group",id:"group"}},[n("option",{attrs:{value:"0"}},[t._v("VIP")]),t._v(" "),n("option",{attrs:{value:"1"}},[t._v("Payed")]),t._v(" "),n("option",{attrs:{value:"3"}},[t._v("Free")]),t._v(" "),n("option",{attrs:{value:"4"}},[t._v("New")])])]),t._v(" "),n("button",{staticClass:"cta white align-self-end"},[t._v("Apply filter")])])}],!1,null,"96c94c00",null).exports),f={layout:"defaultAdmin",components:{Bar:l.a,Intro:d,List:m},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,l,c,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,o=t.store,e.next=3,Promise.all([n.$get("/message/all/"+o.state.auth.userData.newsletter_id)]);case 3:return l=e.sent,c=Object(r.a)(l,1),v=c[0],e.abrupt("return",{messageList:v});case 7:case"end":return e.stop()}}),e)})))()}},h=Object(v.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("Bar"),this._v(" "),e("Intro"),this._v(" "),e("div",{staticClass:"container-narrow grid gap-60"},[this.messageList.count>0?e("List",{attrs:{messageList:this.messageList}}):e("Empty",{attrs:{text:"You have not created any message yet."}})],1)],1)}),[],!1,null,"4f6087a9",null);e.default=h.exports}}]);