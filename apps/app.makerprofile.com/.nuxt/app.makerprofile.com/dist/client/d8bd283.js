(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{230:function(t,e,n){var content=n(236);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("1cf96a80",content,!0,{sourceMap:!1})},235:function(t,e,n){"use strict";n(230)},236:function(t,e,n){(e=n(7)(!1)).push([t.i,"#bar[data-v-4837090c]{box-shadow:0 .125rem .125rem rgba(0,0,0,.1);position:relative;top:0;left:0;width:100%;background-color:#fff;z-index:99;height:58px}#bar>.container-narrow[data-v-4837090c]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}#bar>.container-narrow>div.flex[data-v-4837090c]{height:100%}.nav>ul[data-v-4837090c]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-4837090c]{padding:22px;border-bottom:1px solid transparent;position:relative;transition:.3s}.nav>ul>li>a.nuxt-link-exact-active[data-v-4837090c],.nav>ul>li>a[data-v-4837090c]:hover{color:#39ac37;text-decoration:none}.nav>ul>li.sidenavtoggle[data-v-4837090c]{cursor:pointer}.nav>ul>li.sidenavtoggle>div[data-v-4837090c]{width:30px;height:4px;background-color:#000;margin:5px 0}.nav>ul>li>a[data-v-4837090c]{color:#000;line-height:24px;font-weight:500;text-decoration:none}",""]),t.exports=e},239:function(t,e,n){"use strict";var r={methods:{logout:function(){var t=this;console.log("logout"),this.$store.dispatch("auth/logout").then((function(){t.$router.push("/log-out")}))}}},o=(n(235),n(2)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{attrs:{id:"bar"}},[e("div",{staticClass:"container-narrow"},[e("div",{staticClass:"flex wrap align-items-center justify-content-center"},[e("div",{}),this._v(" "),e("div",{staticClass:"nav"},[e("ul",{staticClass:"flex wrap show-md align-items-center"},[e("li",[e("nuxt-link",{attrs:{to:"/admin/team/details"}},[this._v("Details")])],1),this._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/admin/team/members"}},[this._v("Members")])],1)])])])])])])}),[],!1,null,"4837090c",null);e.a=component.exports},298:function(t,e,n){"use strict";n.r(e);var r=n(239),o={},l=n(2),c=Object(l.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"component"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"container-narrow grid gap-20"},[e("h2",[this._v("Team members")]),this._v(" "),e("p",[this._v("Your team members.")])])])])}],!1,null,"4330addf",null).exports,d={layout:"defaultAdmin",components:{Bar:r.a,Intro:c},data:function(){return{level:this.$store.state?this.$store.state.auth.userData.level:""}}},v=Object(l.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("Bar"),this._v(" "),e("Intro"),this._v(" "),e("div",{staticClass:"container-narrow grid gap-60"})],1)}),[],!1,null,"3220f92c",null);e.default=v.exports}}]);