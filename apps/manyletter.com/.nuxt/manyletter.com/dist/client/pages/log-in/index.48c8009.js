(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{263:function(t,e,n){var content=n(273);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("5fd76314",content,!0,{sourceMap:!1})},272:function(t,e,n){"use strict";var o=n(263);n.n(o).a},273:function(t,e,n){(e=n(3)(!1)).push([t.i,'#header_clean[data-v-61ce35b6]{position:fixed;top:0;left:0;background-color:#fff;width:100%}.container[data-v-61ce35b6]{padding:20px;box-shadow:0 .125rem .125rem rgba(0,0,0,.1)}.logo a[data-v-61ce35b6]{font-size:30px;line-height:30px;font-weight:700;font-family:"Caveat",cursive;text-decoration:none;color:#39ac37}',""]),t.exports=e},274:function(t,e,n){"use strict";var o={},r=(n(272),n(2)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"header_clean"}},[e("div",{staticClass:"container grid justify-items-center"},[e("div",{staticClass:"logo"},[e("nuxt-link",{attrs:{to:"/"}},[this._v("\n                ManyLetter\n            ")])],1)])])}),[],!1,null,"61ce35b6",null);e.a=component.exports},306:function(t,e,n){var content=n(417);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("ba2ca38a",content,!0,{sourceMap:!1})},307:function(t,e,n){var content=n(419);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("ad16dade",content,!0,{sourceMap:!1})},416:function(t,e,n){"use strict";var o=n(306);n.n(o).a},417:function(t,e,n){(e=n(3)(!1)).push([t.i,".component[data-v-3a156c78]{height:100%;padding:20px}.box[data-v-3a156c78]{background-color:#fff;padding:30px;margin:0 auto;max-width:320px;box-shadow:0 1px 6px 0 rgba(14,30,37,.12);border-radius:8px}",""]),t.exports=e},418:function(t,e,n){"use strict";var o=n(307);n.n(o).a},419:function(t,e,n){(e=n(3)(!1)).push([t.i,".page[data-v-33c8e8b6]{height:100%}.box[data-v-33c8e8b6]{background-color:#fff;padding:30px;margin:0 auto;max-width:320px;box-shadow:0 5px 10px hsla(0,0%,93.3%,.37647);border-radius:4px}",""]),t.exports=e},539:function(t,e,n){"use strict";n.r(e);var o=n(274),r=(n(22),n(5)),c={data:function(){return{email:""}},methods:{submitForm:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$post("/api/maylday/auth/code",{email:t.email}).then((function(e){console.log(e),t.$router.push("/log-in/code?email="+encodeURIComponent(t.email))}),(function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}}},l=(n(416),n(2)),d=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component grid"},[n("div",{staticClass:"box grid auto align-self-center gap-20"},[n("h3",[t._v("Log in")]),t._v(" "),n("form",{staticClass:"grid gap-10",on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[n("div",[n("label",{staticClass:"small gray",attrs:{for:"email"}},[t._v("Enter your email")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{id:"email",name:"email",type:"text",placeholder:"What is your login email?"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"cta",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),n("p",{staticClass:"small"},[t._v("You don't have account yet. "),n("nuxt-link",{attrs:{to:"/sign-up"}},[t._v("Get your account")])],1)])])])}),[],!1,null,"3a156c78",null).exports,f={layout:"default-page-clean",components:{Header:o.a,LogIn:d}},m=(n(418),Object(l.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("Header"),this._v(" "),e("LogIn")],1)}),[],!1,null,"33c8e8b6",null));e.default=m.exports}}]);