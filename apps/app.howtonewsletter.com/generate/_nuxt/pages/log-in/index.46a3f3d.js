(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{222:function(t,e,n){var content=n(224);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("9a8ce37e",content,!0,{sourceMap:!1})},223:function(t,e,n){"use strict";var o=n(222);n.n(o).a},224:function(t,e,n){(e=n(7)(!1)).push([t.i,'#header_clean[data-v-129afe2e]{position:fixed;top:0;left:0;background-color:#000;width:100%}.container[data-v-129afe2e]{padding:20px;box-shadow:0 .125rem .125rem rgba(0,0,0,.1)}.logo a[data-v-129afe2e]{font-size:24px;line-height:30px;font-weight:700;font-family:"Caveat",cursive;text-decoration:none;color:#fff}',""]),t.exports=e},225:function(t,e,n){t.exports=n.p+"img/logo.c7c9031.png"},226:function(t,e,n){"use strict";var o={},r=(n(223),n(2)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"header_clean"}},[e("div",{staticClass:"container grid justify-items-center"},[e("div",{staticClass:"logo"},[e("nuxt-link",{attrs:{to:"/"}},[this._v("\n                Manyletter\n            ")])],1)])])}),[],!1,null,"129afe2e",null);e.a=component.exports},234:function(t,e,n){var content=n(264);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("146612a6",content,!0,{sourceMap:!1})},235:function(t,e,n){var content=n(266);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("5e21667a",content,!0,{sourceMap:!1})},263:function(t,e,n){"use strict";var o=n(234);n.n(o).a},264:function(t,e,n){(e=n(7)(!1)).push([t.i,".component[data-v-5fa2ae68]{height:100%;padding:40px 20px}.box[data-v-5fa2ae68]{background-color:#fff;padding:30px;margin:0 auto;width:320px;max-width:100%;box-shadow:0 1px 6px 0 rgba(14,30,37,.12);border-radius:4px}.logo[data-v-5fa2ae68]{width:32px;height:32px;border-radius:32px}",""]),t.exports=e},265:function(t,e,n){"use strict";var o=n(235);n.n(o).a},266:function(t,e,n){(e=n(7)(!1)).push([t.i,".page[data-v-568eff7f]{height:100%}.box[data-v-568eff7f]{background-color:#fff;padding:30px;margin:0 auto;max-width:320px;box-shadow:0 5px 10px hsla(0,0%,93.3%,.37647);border-radius:4px}",""]),t.exports=e},289:function(t,e,n){"use strict";n.r(e);var o=n(226),r=(n(30),n(3)),l={data:function(){return{email:""}},methods:{submitForm:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$post("/auth/code",{email:t.email}).then((function(e){console.log(e),t.$router.push("/log-in/code?email="+encodeURIComponent(t.email))}),(function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}}},c=(n(263),n(2)),f=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"component grid"},[o("div",{staticClass:"box grid auto align-self-start gap-20"},[o("div",{staticClass:"grid col-2 auto align-items-center"},[o("h3",[t._v("Log in")]),t._v(" "),o("nuxt-link",{staticClass:"justify-self-end",attrs:{to:"/"}},[o("img",{staticClass:"logo",attrs:{src:n(225),alt:""}})])],1),t._v(" "),o("form",{staticClass:"grid gap-10",on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[o("div",[o("label",{staticClass:"small gray",attrs:{for:"email"}},[t._v("Enter your email")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{id:"email",name:"email",type:"text",placeholder:"Your login email?"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),o("button",{staticClass:"cta black",attrs:{type:"submit"}},[t._v("Submit")])]),t._v(" "),o("p",{staticClass:"small gray text-center"},[t._v("Don't you have an account yet? "),o("nuxt-link",{attrs:{to:"/sign-up"}},[t._v("Sign up")]),t._v(".")],1)])])}),[],!1,null,"5fa2ae68",null).exports,d={layout:"defaultPage",components:{Header:o.a,LogIn:f}},m=(n(265),Object(c.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("LogIn")],1)}),[],!1,null,"568eff7f",null));e.default=m.exports}}]);