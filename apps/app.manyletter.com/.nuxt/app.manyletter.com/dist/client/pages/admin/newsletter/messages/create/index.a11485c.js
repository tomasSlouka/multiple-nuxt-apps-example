(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{222:function(t,e,n){var content=n(226);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("7a596ad9",content,!0,{sourceMap:!1})},225:function(t,e,n){"use strict";var r=n(222);n.n(r).a},226:function(t,e,n){(e=n(7)(!1)).push([t.i,"#bar[data-v-4c0f8e89]{box-shadow:0 .125rem .125rem rgba(0,0,0,.1);position:relative;top:0;left:0;width:100%;background-color:#fff;z-index:99;height:58px}#bar>.container-narrow[data-v-4c0f8e89]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}#bar>.container-narrow>div.flex[data-v-4c0f8e89]{height:100%}.nav>ul[data-v-4c0f8e89]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-4c0f8e89]{padding:22px;border-bottom:1px solid transparent;position:relative;transition:.3s}.nav>ul>li>a.nuxt-link-exact-active[data-v-4c0f8e89],.nav>ul>li>a[data-v-4c0f8e89]:hover{color:#39ac37;text-decoration:none}.nav>ul>li.sidenavtoggle[data-v-4c0f8e89]{cursor:pointer}.nav>ul>li.sidenavtoggle>div[data-v-4c0f8e89]{width:30px;height:4px;background-color:#000;margin:5px 0}.nav>ul>li>a[data-v-4c0f8e89]{color:#000;line-height:24px;font-weight:500;text-decoration:none}",""]),t.exports=e},227:function(t,e,n){"use strict";var r={methods:{logout:function(){var t=this;console.log("logout"),this.$store.dispatch("auth/logout").then((function(){t.$router.push("/log-out")}))}}},o=(n(225),n(2)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"bar"}},[n("div",{staticClass:"container-narrow"},[n("div",{staticClass:"flex wrap align-items-center justify-content-center"},[n("div",{}),t._v(" "),n("div",{staticClass:"nav"},[n("ul",{staticClass:"flex wrap show-md align-items-center"},[n("li",[n("nuxt-link",{attrs:{to:"/admin/newsletter/overview"}},[t._v("Overview")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/admin/newsletter/subscribers"}},[t._v("Subscribers")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/admin/newsletter/messages"}},[t._v("Messages")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/admin/newsletter/automation"}},[t._v("Automation")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/admin/newsletter/avatar"}},[t._v("Avatar & Cover")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/admin/newsletter/settings"}},[t._v("Settings")])],1)])])])])])])}),[],!1,null,"4c0f8e89",null);e.a=component.exports},312:function(t,e,n){"use strict";n.r(e);var r=n(227),o={},l=n(2),c=Object(l.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"component"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"container-narrow grid gap-20"},[e("h2",[this._v("Create a new message")]),this._v(" "),e("p",{staticClass:"maxw500"},[this._v("Create a new newsletter message. You can schedule when the message will be sent and to what group of your subscribers.")])])])])}],!1,null,"f38cf5a0",null).exports,v=(n(30),n(3)),d={data:function(){return{title:"",description:"",url:"",send_date_at:"",charCounter:0}},methods:{charCount:function(){this.charCounter=this.description.length},submitForm:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$post("/message",{title:t.title,description:t.description,url:t.url,send_date_at:t.send_date_at,newsletter_id:t.$store.state.auth.userData.newsletter_id}).then((function(e){console.log(e),t.$router.push("/admin/newsletter/messages")}),(function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}}},m=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component grid gap-20"},[n("div",{staticClass:"box grid gap-20"},[n("form",{staticClass:"grid gap-20",attrs:{autocomplete:"off"},on:{"~submit":function(e){return e.preventDefault(),t.submitForm()}}},[n("div",{staticClass:"grid gap-20"},[n("div",[n("label",{attrs:{for:"title"}},[t._v("Message title")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),n("div",[n("label",{attrs:{for:"description"}},[t._v("Message text")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{maxlength:"255",type:"text",name:"description"},domProps:{value:t.description},on:{keyup:function(e){return t.charCount()},input:function(e){e.target.composing||(t.description=e.target.value)}}}),t._v(" "),n("p",{staticClass:"small"},[t._v(t._s(t.charCounter)+" / 255")])]),t._v(" "),n("div",[n("label",{attrs:{for:"url"}},[t._v("Url link")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],attrs:{type:"text",name:"url",placeholder:""},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}})]),t._v(" "),n("div",[n("label",{attrs:{for:"send_date_at"}},[t._v("Send message in x days from today")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.send_date_at,expression:"send_date_at"}],attrs:{name:"send_date_at",id:"send_date_at"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.send_date_at=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:""}}),t._v(" "),n("option",{attrs:{value:"1"}},[t._v("Tomorrow")]),t._v(" "),n("option",{attrs:{value:"2"}},[t._v("in 2 days")]),t._v(" "),n("option",{attrs:{value:"3"}},[t._v("in 3 days")]),t._v(" "),n("option",{attrs:{value:"4"}},[t._v("in 4 days")]),t._v(" "),n("option",{attrs:{value:"5"}},[t._v("in 5 days")]),t._v(" "),n("option",{attrs:{value:"6"}},[t._v("in 6 days")]),t._v(" "),n("option",{attrs:{value:"7"}},[t._v("in 7 days")])])])]),t._v(" "),n("div",{staticClass:"hr"}),t._v(" "),n("div",[n("button",{staticClass:"cta",attrs:{type:"submit"}},[t._v("Create")]),t._v(" "),n("nuxt-link",{staticClass:"cta orange white justify-self-start",attrs:{tag:"button",to:"/admin/newsletter/messages"}},[t._v("Cancel")])],1)])])])}),[],!1,null,"09cfb3a4",null).exports,_={layout:"defaultAdmin",components:{Bar:r.a,Intro:c,Form:m}},f=Object(l.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("Bar"),this._v(" "),e("Intro"),this._v(" "),e("div",{staticClass:"container-narrow maxw500 grid gap-60"},[e("Form")],1)],1)}),[],!1,null,"58b6e649",null);e.default=f.exports}}]);