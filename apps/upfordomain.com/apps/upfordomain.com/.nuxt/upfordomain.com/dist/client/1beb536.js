(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{217:function(t,e,n){var content=n(219);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("79d3a894",content,!0,{sourceMap:!1})},218:function(t,e,n){"use strict";n(217)},219:function(t,e,n){(e=n(10)(!1)).push([t.i,'#header_clean[data-v-6f6b3123]{position:fixed;top:0;left:0;background-color:#fff;width:100%}.container[data-v-6f6b3123]{padding:20px;box-shadow:0 .125rem .125rem rgba(0,0,0,.1)}.logo a[data-v-6f6b3123]{font-size:24px;line-height:30px;font-weight:700;font-family:"MuseoModerno",cursive;text-decoration:none;color:#39ac37}',""]),t.exports=e},220:function(t,e,n){"use strict";var r={},o=(n(218),n(6)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"header_clean"}},[e("div",{staticClass:"container grid justify-items-center"},[e("div",{staticClass:"logo"},[e("nuxt-link",{attrs:{to:"/"}},[this._v("\n                upfordomain\n            ")])],1)])])}),[],!1,null,"6f6b3123",null);e.a=component.exports},226:function(t,e,n){var content=n(252);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("be56c1f0",content,!0,{sourceMap:!1})},227:function(t,e,n){var content=n(254);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("46c3cf6c",content,!0,{sourceMap:!1})},251:function(t,e,n){"use strict";n(226)},252:function(t,e,n){(e=n(10)(!1)).push([t.i,".component[data-v-48117d9d]{height:100%;padding:20px}.box[data-v-48117d9d]{background-color:#fff;padding:30px;margin:0 auto;max-width:360px;box-shadow:0 1px 6px 0 rgba(14,30,37,.12);border-radius:8px}",""]),t.exports=e},253:function(t,e,n){"use strict";n(227)},254:function(t,e,n){(e=n(10)(!1)).push([t.i,".page[data-v-0bcdd6f1]{height:100%}",""]),t.exports=e},291:function(t,e,n){"use strict";n.r(e);var r=n(220),o=(n(38),n(3)),c={data:function(){return{email:"",referrer:this.$cookies.get("manyletter.referrer")}},methods:{submitForm:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$post("/api/maylday/signup",{email:t.email,referrer:t.referrer||""}).then((function(e){console.log(e),t.$router.push("/sign-up/code?email="+encodeURIComponent(t.email))}),(function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}}},l=(n(251),n(6)),d=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component grid"},[n("div",{staticClass:"box grid auto align-self-center gap-20"},[n("h4",[t._v("Get your account")]),t._v(" "),n("form",{staticClass:"grid gap-10",on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[n("div",[n("label",{staticClass:"small gray",attrs:{for:"email"}},[t._v("Your email address")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{id:"email",name:"email",type:"text",placeholder:"What is your email address?"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"cta",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),t._m(0)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{staticClass:"info text-center small"},[this._v("You will get verification code to your email.")]),this._v(" "),e("p",{staticClass:"info text-center small"},[this._v("No spam ever.")])])}],!1,null,"48117d9d",null).exports,f={layout:"defaultClean",components:{Header:r.a,SignUp:d}},m=(n(253),Object(l.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("Header"),this._v(" "),e("SignUp")],1)}),[],!1,null,"0bcdd6f1",null));e.default=m.exports}}]);