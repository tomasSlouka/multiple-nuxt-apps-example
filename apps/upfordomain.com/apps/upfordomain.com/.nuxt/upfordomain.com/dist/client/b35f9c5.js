(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{217:function(t,e,r){var content=r(219);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("79d3a894",content,!0,{sourceMap:!1})},218:function(t,e,r){"use strict";r(217)},219:function(t,e,r){(e=r(10)(!1)).push([t.i,'#header_clean[data-v-6f6b3123]{position:fixed;top:0;left:0;background-color:#fff;width:100%}.container[data-v-6f6b3123]{padding:20px;box-shadow:0 .125rem .125rem rgba(0,0,0,.1)}.logo a[data-v-6f6b3123]{font-size:24px;line-height:30px;font-weight:700;font-family:"MuseoModerno",cursive;text-decoration:none;color:#39ac37}',""]),t.exports=e},220:function(t,e,r){"use strict";var o={},n=(r(218),r(6)),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"header_clean"}},[e("div",{staticClass:"container grid justify-items-center"},[e("div",{staticClass:"logo"},[e("nuxt-link",{attrs:{to:"/"}},[this._v("\n                upfordomain\n            ")])],1)])])}),[],!1,null,"6f6b3123",null);e.a=component.exports},234:function(t,e,r){var content=r(270);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("7a2747e9",content,!0,{sourceMap:!1})},235:function(t,e,r){var content=r(272);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("591e860f",content,!0,{sourceMap:!1})},269:function(t,e,r){"use strict";r(234)},270:function(t,e,r){(e=r(10)(!1)).push([t.i,".component[data-v-2d57013c]{height:100%;padding:20px}.box[data-v-2d57013c]{background-color:#fff;padding:30px;margin:0 auto;width:100%;max-width:360px;box-shadow:0 1px 6px 0 rgba(14,30,37,.12);border-radius:8px}span.email[data-v-2d57013c]{color:#39ac37;font-weight:400}",""]),t.exports=e},271:function(t,e,r){"use strict";r(235)},272:function(t,e,r){(e=r(10)(!1)).push([t.i,".page[data-v-3c91f00e]{height:100%}",""]),t.exports=e},295:function(t,e,r){"use strict";r.r(e);var o=r(220),n=(r(38),r(3)),c={data:function(){return{email:decodeURIComponent(this.$route.query.email),password:this.$route.query.code||"",submitSuccess:!1,submitError:!1,submitText:"Success!",submitTimer:null}},methods:{submitForm:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$post("/auth/login",{email:t.email,password:t.password}).then((function(){t.submitSuccess=!0,t.submitText="Success!",setTimeout((function(){return t.submitSuccess=!1}),4e3),t.$router.push("/")}),(function(e){t.submitError=!0,t.submitText=e.response.data.message,t.submitTimer=10;var r=setInterval((function(){t.submitTimer=10==t.submitTimer?9:t.submitTimer-1}),1e3);setTimeout((function(){t.submitError=!1,t.submitText="",t.submitTimer=null,clearInterval(r)}),1e4)}));case 2:case"end":return e.stop()}}),e)})))()}}},l=(r(269),r(6)),d=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"component grid"},[r("div",{staticClass:"box grid auto align-self-center gap-20"},[r("h3",[t._v("Email verification code")]),t._v(" "),r("form",{staticClass:"grid gap-10",on:{submit:function(e){return e.preventDefault(),t.submitForm()}}},[r("div",[r("label",{staticClass:"small gray",attrs:{for:"password"}},[t._v("Code")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{id:"password",name:"password",type:"text",placeholder:"Enter your code here...",autocomplete:"off"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:t.submitSuccess,expression:"submitSuccess"}],staticClass:"info p0"},[t._v(" "+t._s(t.submitText)+" ")]),t._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:t.submitError,expression:"submitError"}],staticClass:"error p0"},[t._v(" "+t._s(t.submitText)+" ["+t._s(t.submitTimer)+"] ")]),t._v(" "),r("button",{staticClass:"cta",attrs:{type:"submit"}},[t._v("Verify")])])])])}),[],!1,null,"2d57013c",null).exports,m={layout:"defaultClean",components:{Header:o.a,Code:d}},f=(r(271),Object(l.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("Header"),this._v(" "),e("Code")],1)}),[],!1,null,"3c91f00e",null));e.default=f.exports}}]);