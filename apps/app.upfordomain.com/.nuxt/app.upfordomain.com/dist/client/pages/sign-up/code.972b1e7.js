(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{222:function(t,e,o){var content=o(224);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("a46fd76a",content,!0,{sourceMap:!1})},223:function(t,e,o){"use strict";var r=o(222);o.n(r).a},224:function(t,e,o){(e=o(7)(!1)).push([t.i,'#header_clean[data-v-01a6bf9c]{position:fixed;top:0;left:0;background-color:#fff;width:100%}.container[data-v-01a6bf9c]{padding:20px;box-shadow:0 .125rem .125rem rgba(0,0,0,.1)}.logo a[data-v-01a6bf9c]{font-size:24px;line-height:30px;font-weight:700;font-family:"MuseoModerno",cursive;text-decoration:none;color:#39ac37}',""]),t.exports=e},225:function(t,e,o){"use strict";var r={},n=(o(223),o(2)),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"header_clean"}},[e("div",{staticClass:"container grid justify-items-center"},[e("div",{staticClass:"logo"},[e("nuxt-link",{attrs:{to:"/"}},[this._v("\n                upfordomain\n            ")])],1)])])}),[],!1,null,"01a6bf9c",null);e.a=component.exports},238:function(t,e,o){var content=o(271);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("cf3142da",content,!0,{sourceMap:!1})},239:function(t,e,o){var content=o(273);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("6959f104",content,!0,{sourceMap:!1})},270:function(t,e,o){"use strict";var r=o(238);o.n(r).a},271:function(t,e,o){(e=o(7)(!1)).push([t.i,".component[data-v-b6658f9e]{height:100%;padding:20px}.box[data-v-b6658f9e]{background-color:#fff;padding:30px;margin:0 auto;max-width:320px;box-shadow:0 1px 6px 0 rgba(14,30,37,.12);border-radius:8px}span.email[data-v-b6658f9e]{color:#39ac37;font-weight:400}",""]),t.exports=e},272:function(t,e,o){"use strict";var r=o(239);o.n(r).a},273:function(t,e,o){(e=o(7)(!1)).push([t.i,".page[data-v-2df68576]{height:100%}",""]),t.exports=e},294:function(t,e,o){"use strict";o.r(e);var r=o(225),n={data:function(){return{email:decodeURIComponent(this.$route.query.email),password:this.$route.query.code||""}},methods:{submitForm:function(){var t=this;this.$store.dispatch("auth/loginUser",{email:this.email,password:this.password,endpoint:"/auth/login"}).then((function(){t.$store.dispatch("auth/setUser",{endpoint:"/user"}),t.$router.push("/")}))}}},c=(o(270),o(2)),d=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"component grid"},[o("div",{staticClass:"box grid auto align-self-center gap-20"},[o("h3",[t._v("Verification code")]),t._v(" "),o("p",[t._v("Click the link or paste the code from email to verify your account.")]),t._v(" "),o("form",{staticClass:"grid gap-10",on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[o("div",[o("label",{staticClass:"small gray",attrs:{for:"password"}},[t._v("Code")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{id:"password",name:"password",type:"password",placeholder:"Enter your code here..."},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),o("button",{staticClass:"cta",attrs:{type:"submit"}},[t._v("Verify and Sign Up")])])])])}),[],!1,null,"b6658f9e",null).exports,l={layout:"defaultPage",components:{Header:r.a,Code:d}},f=(o(272),Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("Header"),this._v(" "),e("Code")],1)}),[],!1,null,"2df68576",null));e.default=f.exports}}]);