(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{223:function(t,e,o){var content=o(225);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("9a8ce37e",content,!0,{sourceMap:!1})},224:function(t,e,o){"use strict";o(223)},225:function(t,e,o){(e=o(7)(!1)).push([t.i,'#header_clean[data-v-129afe2e]{position:fixed;top:0;left:0;background-color:#000;width:100%}.container[data-v-129afe2e]{padding:20px;box-shadow:0 .125rem .125rem rgba(0,0,0,.1)}.logo a[data-v-129afe2e]{font-size:24px;line-height:30px;font-weight:700;font-family:"Caveat",cursive;text-decoration:none;color:#fff}',""]),t.exports=e},226:function(t,e,o){t.exports=o.p+"img/logo.c7c9031.png"},227:function(t,e,o){"use strict";var r={},n=(o(224),o(2)),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"header_clean"}},[e("div",{staticClass:"container grid justify-items-center"},[e("div",{staticClass:"logo"},[e("nuxt-link",{attrs:{to:"/"}},[this._v("\n                Manyletter\n            ")])],1)])])}),[],!1,null,"129afe2e",null);e.a=component.exports},250:function(t,e,o){var content=o(277);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("769911ce",content,!0,{sourceMap:!1})},251:function(t,e,o){var content=o(279);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("6bf1c879",content,!0,{sourceMap:!1})},276:function(t,e,o){"use strict";o(250)},277:function(t,e,o){(e=o(7)(!1)).push([t.i,".component[data-v-35407c1a]{height:100%;padding:40px 20px}.box[data-v-35407c1a]{background-color:#fff;padding:30px;margin:0 auto;width:320px;max-width:100%;box-shadow:0 1px 6px 0 rgba(14,30,37,.12);border-radius:4px}.logo[data-v-35407c1a]{width:32px;height:32px;border-radius:32px}",""]),t.exports=e},278:function(t,e,o){"use strict";o(251)},279:function(t,e,o){(e=o(7)(!1)).push([t.i,".page[data-v-0b2e7c73]{height:100%}",""]),t.exports=e},293:function(t,e,o){"use strict";o.r(e);var r=o(227),n={data:function(){return{email:decodeURIComponent(this.$route.query.email),password:this.$route.query.code||""}},methods:{submitForm:function(){var t=this;this.$store.dispatch("auth/loginUser",{email:this.email,password:this.password,endpoint:"/auth/login"}).then((function(){t.$store.dispatch("auth/setUser",{endpoint:"/user"}),t.$router.push("/")}))}}},c=(o(276),o(2)),l=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"component grid"},[r("div",{staticClass:"box grid auto align-self-start gap-20"},[r("div",{staticClass:"grid col-2 auto align-items-center"},[r("h3",[t._v("Verification code")]),t._v(" "),r("nuxt-link",{staticClass:"justify-self-end",attrs:{to:"/"}},[r("img",{staticClass:"logo",attrs:{src:o(226),alt:""}})])],1),t._v(" "),r("form",{staticClass:"grid gap-10",on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[r("div",[r("label",{staticClass:"small gray",attrs:{for:"password"}},[t._v("Code")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{id:"password",name:"password",type:"password",placeholder:"Enter your code here..."},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),r("button",{staticClass:"cta black",attrs:{type:"submit"}},[t._v("Verify and Log In")])])])])}),[],!1,null,"35407c1a",null).exports,d={layout:"defaultPage",components:{Header:r.a,Code:l}},f=(o(278),Object(c.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("Code")],1)}),[],!1,null,"0b2e7c73",null));e.default=f.exports}}]);