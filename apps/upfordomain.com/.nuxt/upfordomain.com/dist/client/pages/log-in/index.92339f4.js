(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{211:function(t,e,o){var content=o(223);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("6ab422f8",content,!0,{sourceMap:!1})},222:function(t,e,o){"use strict";var n=o(211);o.n(n).a},223:function(t,e,o){(e=o(10)(!1)).push([t.i,'#header_clean[data-v-57ae1544]{position:fixed;top:0;left:0;background-color:#fff;width:100%}.container[data-v-57ae1544]{padding:20px;box-shadow:0 .125rem .125rem rgba(0,0,0,.1)}.logo a[data-v-57ae1544]{font-size:24px;line-height:30px;font-weight:700;font-family:"MuseoModerno",cursive;text-decoration:none;color:#39ac37}',""]),t.exports=e},224:function(t,e,o){"use strict";var n={},r=(o(222),o(7)),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"header_clean"}},[e("div",{staticClass:"container grid justify-items-center"},[e("div",{staticClass:"logo"},[e("nuxt-link",{attrs:{to:"/"}},[this._v("\n                upfordomain\n            ")])],1)])])}),[],!1,null,"57ae1544",null);e.a=component.exports},226:function(t,e,o){var content=o(247);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("d4a06246",content,!0,{sourceMap:!1})},227:function(t,e,o){var content=o(249);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("3a50d147",content,!0,{sourceMap:!1})},246:function(t,e,o){"use strict";var n=o(226);o.n(n).a},247:function(t,e,o){(e=o(10)(!1)).push([t.i,".component[data-v-4b39d9ff]{height:100%;padding:20px}.box[data-v-4b39d9ff]{background-color:#fff;padding:30px;margin:0 auto;max-width:360px;box-shadow:0 1px 6px 0 rgba(14,30,37,.12);border-radius:8px}",""]),t.exports=e},248:function(t,e,o){"use strict";var n=o(227);o.n(n).a},249:function(t,e,o){(e=o(10)(!1)).push([t.i,".page[data-v-1160d797]{height:100%}.box[data-v-1160d797]{background-color:#fff;padding:30px;margin:0 auto;max-width:320px;box-shadow:0 5px 10px hsla(0,0%,93.3%,.37647);border-radius:4px}",""]),t.exports=e},289:function(t,e,o){"use strict";o.r(e);var n=o(224),r=(o(25),o(2)),l={data:function(){return{email:""}},methods:{submitForm:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$post("/api/maylday/auth/code",{email:t.email}).then((function(e){console.log(e),t.$router.push("/log-in/code?email="+encodeURIComponent(t.email))}),(function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}}},c=(o(246),o(7)),d=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"component grid"},[o("div",{staticClass:"box grid auto align-self-center gap-20"},[o("h4",[t._v("Log in")]),t._v(" "),o("form",{staticClass:"grid gap-10",on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[o("div",[o("label",{staticClass:"small gray",attrs:{for:"email"}},[t._v("Enter your email")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{id:"email",name:"email",type:"text",placeholder:"What is your login email?"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),o("button",{staticClass:"cta",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),o("p",{staticClass:"small"},[t._v("You don't have account yet. "),o("nuxt-link",{attrs:{to:"/sign-up"}},[t._v("Get your account")])],1)])])])}),[],!1,null,"4b39d9ff",null).exports,f={layout:"defaultClean",components:{Header:n.a,LogIn:d}},m=(o(248),Object(c.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("Header"),this._v(" "),e("LogIn")],1)}),[],!1,null,"1160d797",null));e.default=m.exports}}]);