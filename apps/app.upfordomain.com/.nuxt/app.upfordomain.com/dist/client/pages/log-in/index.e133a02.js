(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{223:function(t,e,o){var content=o(225);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("a46fd76a",content,!0,{sourceMap:!1})},224:function(t,e,o){"use strict";var n=o(223);o.n(n).a},225:function(t,e,o){(e=o(7)(!1)).push([t.i,'#header_clean[data-v-01a6bf9c]{position:fixed;top:0;left:0;background-color:#fff;width:100%}.container[data-v-01a6bf9c]{padding:20px;box-shadow:0 .125rem .125rem rgba(0,0,0,.1)}.logo a[data-v-01a6bf9c]{font-size:24px;line-height:30px;font-weight:700;font-family:"MuseoModerno",cursive;text-decoration:none;color:#39ac37}',""]),t.exports=e},226:function(t,e,o){"use strict";var n={},r=(o(224),o(3)),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"header_clean"}},[e("div",{staticClass:"container grid justify-items-center"},[e("div",{staticClass:"logo"},[e("nuxt-link",{attrs:{to:"/"}},[this._v("\n                upfordomain\n            ")])],1)])])}),[],!1,null,"01a6bf9c",null);e.a=component.exports},231:function(t,e,o){var content=o(251);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("2ee36006",content,!0,{sourceMap:!1})},232:function(t,e,o){var content=o(253);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("14464eee",content,!0,{sourceMap:!1})},250:function(t,e,o){"use strict";var n=o(231);o.n(n).a},251:function(t,e,o){(e=o(7)(!1)).push([t.i,".component[data-v-775ea204]{height:100%;padding:20px}.box[data-v-775ea204]{background-color:#fff;padding:30px;margin:0 auto;max-width:320px;box-shadow:0 1px 6px 0 rgba(14,30,37,.12);border-radius:8px}",""]),t.exports=e},252:function(t,e,o){"use strict";var n=o(232);o.n(n).a},253:function(t,e,o){(e=o(7)(!1)).push([t.i,".page[data-v-6ab47eb7]{height:100%}.box[data-v-6ab47eb7]{background-color:#fff;padding:30px;margin:0 auto;max-width:320px;box-shadow:0 5px 10px hsla(0,0%,93.3%,.37647);border-radius:4px}",""]),t.exports=e},271:function(t,e,o){"use strict";o.r(e);var n=o(226),r=(o(23),o(2)),c={data:function(){return{email:""}},methods:{submitForm:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$post("/api/v1/auth/code",{email:t.email}).then((function(e){console.log(e),t.$router.push("/log-in/code?email="+encodeURIComponent(t.email))}),(function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}}},l=(o(250),o(3)),d=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"component grid"},[o("div",{staticClass:"box grid auto align-self-center gap-20"},[o("h3",[t._v("Log in")]),t._v(" "),o("form",{staticClass:"grid gap-10",on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[o("div",[o("label",{staticClass:"small gray",attrs:{for:"email"}},[t._v("Enter your email")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{id:"email",name:"email",type:"text",placeholder:"Your login email?"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),o("button",{staticClass:"cta",attrs:{type:"submit"}},[t._v("Submit")])])])])}),[],!1,null,"775ea204",null).exports,f={layout:"defaultPage",components:{Header:n.a,LogIn:d}},m=(o(252),Object(l.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("Header"),this._v(" "),e("LogIn")],1)}),[],!1,null,"6ab47eb7",null));e.default=m.exports}}]);