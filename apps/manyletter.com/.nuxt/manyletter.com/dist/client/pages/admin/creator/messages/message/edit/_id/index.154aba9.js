(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{538:function(t,e,n){"use strict";n.r(e);n(22);var r=n(5),o=n(107),l={},c=n(2),d=Object(c.a)(l,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"component"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"container-narrow grid gap-20"},[e("h2",[this._v("Edit message")]),this._v(" "),e("p",[this._v("While your message is at pending status, you can change every aspect of it.")])])])])}],!1,null,"6fe5874c",null).exports,v={props:["messageData"],data:function(){return{title:this.messageData.title,description:this.messageData.description,url:this.messageData.url,send_date_at:this.messageData.send_date_at,charCounter:this.messageData.description.length}},methods:{charCount:function(){this.charCounter=this.description.length},submitForm:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$put("/api/maylday/message",{id:t.$route.params.id,title:t.title,description:t.description,url:t.url,send_date_at:t.send_date_at}).then((function(e){console.log(e),t.$router.back()}),(function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}}},m=Object(c.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component grid gap-20"},[n("div",{staticClass:"box grid gap-20"},[n("form",{staticClass:"grid gap-20",attrs:{autocomplete:"off"},on:{"~submit":function(e){return e.preventDefault(),t.submitForm()}}},[n("h3",[t._v("Edit newsletter message")]),t._v(" "),n("div",{staticClass:"grid gap-20"},[n("div",[n("label",{attrs:{for:"title"}},[t._v("Message title")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),n("div",[n("label",{attrs:{for:"title"}},[t._v("Message text")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{maxlength:"255",type:"text",name:"description"},domProps:{value:t.description},on:{keyup:function(e){return t.charCount()},input:function(e){e.target.composing||(t.description=e.target.value)}}}),t._v(" "),n("p",[t._v(t._s(t.charCounter)+" / 255")])]),t._v(" "),n("div",[n("label",{attrs:{for:"title"}},[t._v("Url link")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],attrs:{type:"text",name:"url",placeholder:""},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}})]),t._v(" "),n("div",[n("label",{attrs:{for:"send_date_at"}},[t._v("Send message in x days from today")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.send_date_at,expression:"send_date_at"}],attrs:{name:"send_date_at",id:"send_date_at"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.send_date_at=e.target.multiple?n:n[0]}}},[n("option",{domProps:{value:t.send_date_at}},[t._v("Don't change - ("+t._s(t.send_date_at)+")")]),t._v(" "),n("option",{attrs:{value:"1"}},[t._v("Tomorrow")]),t._v(" "),n("option",{attrs:{value:"2"}},[t._v("in 2 days")]),t._v(" "),n("option",{attrs:{value:"3"}},[t._v("in 3 days")]),t._v(" "),n("option",{attrs:{value:"4"}},[t._v("in 4 days")]),t._v(" "),n("option",{attrs:{value:"5"}},[t._v("in 5 days")]),t._v(" "),n("option",{attrs:{value:"6"}},[t._v("in 6 days")]),t._v(" "),n("option",{attrs:{value:"7"}},[t._v("in 7 days")])])]),t._v(" "),n("div",{staticClass:"hr"}),t._v(" "),n("div",[n("button",{staticClass:"cta",attrs:{type:"submit"}},[t._v("Save changes")]),t._v(" "),n("nuxt-link",{staticClass:"cta white justify-self-start",attrs:{tag:"button",to:"/admin/creator/messages/message/detail/"+this.$route.params.id}},[t._v("Cancel")])],1)])])])])}),[],!1,null,"c22a6fac",null).exports,_={layout:"default-admin-creator",components:{Header:o.a,EditIntro:d,EditForm:m},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,r=t.params,e.next=3,n.$get("/api/maylday/message/"+r.id);case 3:return o=e.sent,e.abrupt("return",{messageData:o});case 5:case"end":return e.stop()}}),e)})))()}},f=Object(c.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("EditIntro"),this._v(" "),e("div",{staticClass:"container-narrow grid gap-60"},[e("EditForm",{attrs:{messageData:this.messageData.data}})],1)],1)}),[],!1,null,"26176aa8",null);e.default=f.exports}}]);