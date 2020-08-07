(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{283:function(t,e,r){"use strict";r.r(e);var o={},n=r(2),c=Object(n.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"Settings"}},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"container-narrow grid gap-20"},[e("h2",[this._v("Settings")]),this._v(" "),e("p",[this._v("Set up all the settings of your account.")])])])])}],!1,null,"46c0c966",null).exports,d=(r(30),r(3)),l={data:function(){return{submitSuccess:!1,submitError:!1,submitText:"Saved!",password_locked:this.$store.state.auth.userData.password_locked,password_1:1==this.$store.state.auth.userData.password_locked?"uimreacc":"",password_2:1==this.$store.state.auth.userData.password_locked?"asdfzujz":""}},methods:{submitForm:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.password_1!==t.password_2){e.next=5;break}return e.next=3,t.$axios.$put("/user/setpassword",{password:t.password_1}).then((function(e){console.log(e),t.$store.dispatch("auth/setUser",{endpoint:"/user"}),t.submitSuccess=!0,t.submitText="Saved!",""===t.password_1?t.password_locked=0:t.password_locked=1,setTimeout((function(){return t.submitSuccess=!1}),4e3)}),(function(t){console.log(t)}));case 3:e.next=8;break;case 5:t.submitError=!0,t.submitText="Passwords do not match!",setTimeout((function(){t.submitError=!1,t.submitText=""}),4e3);case 8:case"end":return e.stop()}}),e)})))()},removePassword:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$put("/user/removepassword",{}).then((function(e){console.log(e),t.$store.dispatch("auth/setUser",{endpoint:"/user"}),t.password_locked=0,t.password_1="",t.password_2=""}),(function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}}},v={layout:"defaultAdmin",components:{Settings:c,Password:Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"component grid gap-20"},[r("div",{staticClass:"box grid gap-20"},[r("form",{staticClass:"grid gap-20 ",on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[r("h3",[t._v("Password settings")]),t._v(" "),r("p",[t._v("You can enable or disable your password for login. When password is empty, system will send you an automatic message with a login code. Otherwise, you can log in with your static password.")]),t._v(" "),r("div",{staticClass:"hr"}),t._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:1==t.password_locked,expression:"password_locked == 1"}],staticClass:"info strong p0 grid gap-20 md-col-2"},[t._v("You are logging in with a password "),r("button",{staticClass:"cta red small justify-self-start",on:{click:function(e){return e.preventDefault(),t.removePassword()}}},[t._v("Switch to login code")])]),t._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:0==t.password_locked,expression:"password_locked == 0"}],staticClass:"info strong p0"},[t._v("You are logging in with a login code")]),t._v(" "),r("div",{staticClass:"hr"}),t._v(" "),r("h4",[t._v("Change the password")]),t._v(" "),r("div",{staticClass:"grid gap-20 xs-col-1 lg-col-2 align-items-start"},[r("div",[r("label",{attrs:{for:"title"}},[t._v("New password *")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password_1,expression:"password_1"}],attrs:{type:"password",name:"password_1"},domProps:{value:t.password_1},on:{input:function(e){e.target.composing||(t.password_1=e.target.value)}}})]),t._v(" "),r("div",[r("label",{attrs:{for:"title"}},[t._v("New password verification *")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password_2,expression:"password_2"}],attrs:{type:"password",name:"password_2"},domProps:{value:t.password_2},on:{input:function(e){e.target.composing||(t.password_2=e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"hr"}),t._v(" "),r("div",{staticClass:"grid col-2 gap-10 auto justify-content-start align-items-center"},[r("button",{staticClass:"cta",attrs:{type:"submit"}},[t._v("Save new password")]),t._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:t.submitSuccess,expression:"submitSuccess"}],staticClass:"info"},[t._v(" "+t._s(t.submitText)+" ")]),t._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:t.submitError,expression:"submitError"}],staticClass:"error"},[t._v(" "+t._s(t.submitText)+" ")])])])])])}),[],!1,null,"94b47c94",null).exports},data:function(){return{level:this.$store.state?this.$store.state.auth.userData.level:""}}},w=Object(n.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("Settings"),this._v(" "),e("div",{staticClass:"container-narrow grid gap-60"},[e("Password")],1)],1)}),[],!1,null,"7440fd49",null);e.default=w.exports}}]);