(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{227:function(t,e,r){var content=r(245);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("75669822",content,!0,{sourceMap:!1})},244:function(t,e,r){"use strict";var o=r(227);r.n(o).a},245:function(t,e,r){(e=r(7)(!1)).push([t.i,"#bar[data-v-676debca]{box-shadow:0 .125rem .125rem rgba(0,0,0,.1);position:relative;top:0;left:0;width:100%;background-color:#fff;z-index:99;height:58px}#bar>.container-narrow[data-v-676debca]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}#bar>.container-narrow>div.flex[data-v-676debca]{height:100%}.nav>ul[data-v-676debca]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-676debca]{padding:22px;border-bottom:1px solid transparent;position:relative;transition:.3s}.nav>ul>li>a.nuxt-link-exact-active[data-v-676debca],.nav>ul>li>a[data-v-676debca]:hover{color:#39ac37;text-decoration:none}.nav>ul>li.sidenavtoggle[data-v-676debca]{cursor:pointer}.nav>ul>li.sidenavtoggle>div[data-v-676debca]{width:30px;height:4px;background-color:#000;margin:5px 0}.nav>ul>li>a[data-v-676debca]{color:#000;line-height:24px;font-weight:500;text-decoration:none}",""]),t.exports=e},246:function(t,e,r){var content=r(284);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("4a2459a2",content,!0,{sourceMap:!1})},252:function(t,e,r){"use strict";var o={methods:{logout:function(){var t=this;console.log("logout"),this.$store.dispatch("auth/logout").then((function(){t.$router.push("/log-out")}))}}},n=(r(244),r(2)),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{attrs:{id:"bar"}},[e("div",{staticClass:"container-narrow"},[e("div",{staticClass:"flex wrap align-items-center justify-content-center"},[e("div",{}),this._v(" "),e("div",{staticClass:"nav"},[e("ul",{staticClass:"flex wrap show-md align-items-center"},[e("li",[e("nuxt-link",{attrs:{to:"/admin/account/settings"}},[this._v("Settings")])],1),this._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/admin/account/credits"}},[this._v("Credit balance")])],1)])])])])])])}),[],!1,null,"676debca",null);e.a=component.exports},283:function(t,e,r){"use strict";var o=r(246);r.n(o).a},284:function(t,e,r){(e=r(7)(!1)).push([t.i,".danger-zone[data-v-ca57af68]{border:1px solid rgba(215,58,74,.48627)}",""]),t.exports=e},287:function(t,e,r){"use strict";r.r(e);var o=r(252),n={},c=r(2),d=Object(c.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"Settings"}},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"container-narrow grid gap-20"},[e("h2",[this._v("Settings")]),this._v(" "),e("p",[this._v("Set up all the settings of your account.")])])])])}],!1,null,"761ace85",null).exports,l=(r(30),r(3)),v={data:function(){return{submitSuccess:!1,submitError:!1,submitText:"Saved!",password_locked:this.$store.state.auth.userData.password_locked,password_1:1==this.$store.state.auth.userData.password_locked?"uimreacc":"",password_2:1==this.$store.state.auth.userData.password_locked?"asdfzujz":""}},methods:{submitForm:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.password_1!==t.password_2){e.next=5;break}return e.next=3,t.$axios.$put("/user/setpassword",{password:t.password_1}).then((function(e){console.log(e),t.$store.dispatch("auth/setUser",{endpoint:"/user"}),t.submitSuccess=!0,t.submitText="Saved!",""===t.password_1?t.password_locked=0:t.password_locked=1,setTimeout((function(){return t.submitSuccess=!1}),4e3)}),(function(t){console.log(t)}));case 3:e.next=8;break;case 5:t.submitError=!0,t.submitText="Passwords do not match!",setTimeout((function(){t.submitError=!1,t.submitText=""}),4e3);case 8:case"end":return e.stop()}}),e)})))()},removePassword:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$put("/user/removepassword",{}).then((function(e){console.log(e),t.$store.dispatch("auth/setUser",{endpoint:"/user"}),t.password_locked=0,t.password_1="",t.password_2=""}),(function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}}},m=Object(c.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"component grid gap-20"},[r("div",{staticClass:"box grid gap-20"},[r("form",{staticClass:"grid gap-60 md-col-2 align-items-start",on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[t._m(0),t._v(" "),r("div",{staticClass:"grid gap-20"},[r("div",{staticClass:"grid gap-20 align-items-start"},[r("p",{directives:[{name:"show",rawName:"v-show",value:1==t.password_locked,expression:"password_locked == 1"}],staticClass:"info p0 grid gap-20 md-col-2 auto align-items-start"},[t._v("Password is active "),r("button",{staticClass:"cta red small justify-self-end",on:{click:function(e){return e.preventDefault(),t.removePassword()}}},[t._v("Switch to login code")])]),t._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:0==t.password_locked,expression:"password_locked == 0"}],staticClass:"info p0"},[t._v("Login code is active")]),t._v(" "),r("div",[r("label",{attrs:{for:"title"}},[t._v("New password *")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password_1,expression:"password_1"}],attrs:{type:"password",name:"password_1"},domProps:{value:t.password_1},on:{input:function(e){e.target.composing||(t.password_1=e.target.value)}}})]),t._v(" "),r("div",[r("label",{attrs:{for:"title"}},[t._v("New password verification *")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password_2,expression:"password_2"}],attrs:{type:"password",name:"password_2"},domProps:{value:t.password_2},on:{input:function(e){e.target.composing||(t.password_2=e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"hr"}),t._v(" "),r("div",{staticClass:"grid col-2 gap-10 auto justify-content-start align-items-center"},[r("button",{staticClass:"cta",attrs:{type:"submit"}},[t._v("Save new password")]),t._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:t.submitSuccess,expression:"submitSuccess"}],staticClass:"info"},[t._v(" "+t._s(t.submitText)+" ")]),t._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:t.submitError,expression:"submitError"}],staticClass:"error"},[t._v(" "+t._s(t.submitText)+" ")])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"grid gap-20"},[e("h3",[this._v("Password settings")]),this._v(" "),e("p",{staticClass:"small"},[this._v("You can enable or disable your password for login. When password is empty, system will send you an automatic message with a login code. Otherwise, you can log in with your static password.")])])}],!1,null,"810a3b1e",null).exports,h={},w=(r(283),Object(c.a)(h,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"component grid gap-20 "},[e("div",{staticClass:"box grid gap-20 danger-zone"},[e("h3",[this._v("Danger zone")]),this._v(" "),e("div",{},[e("button",{staticClass:"cta red"},[this._v("Delete account")])])])])}],!1,null,"ca57af68",null).exports),_={layout:"defaultAdmin",components:{Bar:o.a,Intro:d,Password:m,DangerZone:w},data:function(){return{level:this.$store.state?this.$store.state.auth.userData.level:""}}},f=Object(c.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("Bar"),this._v(" "),e("Intro"),this._v(" "),e("div",{staticClass:"container-narrow grid gap-60"},[e("Password"),this._v(" "),e("DangerZone")],1)],1)}),[],!1,null,"6d36ccc7",null);e.default=f.exports}}]);