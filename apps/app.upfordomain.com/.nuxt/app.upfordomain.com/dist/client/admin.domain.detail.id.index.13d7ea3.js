(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{240:function(t,e,n){var content=n(275);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("031e174a",content,!0,{sourceMap:!1})},241:function(t,e,n){var content=n(277);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("66d6e689",content,!0,{sourceMap:!1})},242:function(t,e,n){var content=n(279);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("7c39294c",content,!0,{sourceMap:!1})},243:function(t,e,n){var content=n(281);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("7dd2f5b6",content,!0,{sourceMap:!1})},274:function(t,e,n){"use strict";var r=n(240);n.n(r).a},275:function(t,e,n){(e=n(7)(!1)).push([t.i,".user-box[data-v-1039ebc8]{border-top:1px solid #eee;padding:20px}.user-box[data-v-1039ebc8]:hover{background-color:rgba(15,176,172,.025098)}.user-box[data-v-1039ebc8]:last-child{border-bottom:1px solid #eee}",""]),t.exports=e},276:function(t,e,n){"use strict";var r=n(241);n.n(r).a},277:function(t,e,n){(e=n(7)(!1)).push([t.i,".user-box[data-v-aa895bb0]{border-top:1px solid #eee;padding:20px}.user-box[data-v-aa895bb0]:hover{background-color:rgba(15,176,172,.025098)}.user-box[data-v-aa895bb0]:last-child{border-bottom:1px solid #eee}",""]),t.exports=e},278:function(t,e,n){"use strict";var r=n(242);n.n(r).a},279:function(t,e,n){(e=n(7)(!1)).push([t.i,".user-box[data-v-d3587bf6]{border-top:1px solid #eee;padding:20px}.user-box[data-v-d3587bf6]:hover{background-color:rgba(15,176,172,.025098)}.user-box[data-v-d3587bf6]:last-child{border-bottom:1px solid #eee}",""]),t.exports=e},280:function(t,e,n){"use strict";var r=n(243);n.n(r).a},281:function(t,e,n){(e=n(7)(!1)).push([t.i,".danger-zone[data-v-2648cb79]{border:1px solid rgba(215,58,74,.48627)}",""]),t.exports=e},287:function(t,e,n){"use strict";n.r(e);n(22),n(14),n(31);var r=n(46),o=(n(30),n(3)),d={},c=n(2),l=Object(c.a)(d,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"component"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"container-narrow grid gap-20"},[e("h2",[this._v("Domain detail")]),this._v(" "),e("p",[this._v("Update prices, description, tags, visibility and see statistics of your domain. ")])])])])}],!1,null,"20cbbdb8",null).exports,m=(n(21),{props:["domainDetail"],data:function(){return{submitSuccess:!1,submitError:!1,submitText:"Saved!",statusOld:this.domainDetail.data.status}},methods:{submitForm:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$put("/domain/admin",{id:t.$route.params.id,status:t.domainDetail.data.status,statusOld:t.statusOld,tier:t.domainDetail.data.tier,email:t.domainDetail.data.email,name:t.domainDetail.data.name}).then((function(e){console.log(e),t.submitSuccess=!0,t.submitText="Saved!",t.statusOld=t.domainDetail.data.status,setTimeout((function(){return t.submitSuccess=!1}),4e3)}),(function(e){console.log(e),t.submitError=!0,t.submitText=e.response.data.message,setTimeout((function(){t.submitError=!1,t.submitText=""}),4e3)}));case 2:case"end":return e.stop()}}),e)})))()}}}),v=(n(274),Object(c.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component grid gap-20"},[n("div",{staticClass:"box grid gap-20"},[n("h3",{staticClass:"grid gap-20 col-2 auto align-items-center"},[n("span",[t._v("Admin domain settings")]),t._v(" "),t.domainDetail.data.last_online_at!==t.domainDetail.data.created_at?n("span",{staticClass:"tag gray justify-self-end"},[t._v("Email verified")]):n("span",{staticClass:"tag orange justify-self-end"},[t._v("Email not verified")])]),t._v(" "),n("form",{staticClass:"grid gap-20 ",on:{submit:function(e){return e.preventDefault(),t.submitForm()}}},[n("div",{staticClass:"grid gap-20 md-col-2 align-items-start"},[n("div",[n("label",{attrs:{for:"status"}},[t._v("Domain status")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.domainDetail.data.status,expression:"domainDetail.data.status"}],attrs:{name:"status",id:"status"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.domainDetail.data,"status",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"0"}},[t._v("Not approved")]),t._v(" "),n("option",{attrs:{value:"1"}},[t._v("Approved")])])]),t._v(" "),n("div",[n("label",{attrs:{for:"tier"}},[t._v("Domain tier")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.domainDetail.data.tier,expression:"domainDetail.data.tier"}],attrs:{name:"tier",id:"tier"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.domainDetail.data,"tier",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"0"}},[t._v("Normal")]),t._v(" "),n("option",{attrs:{value:"1"}},[t._v("Premium")])])])]),t._v(" "),n("div",{staticClass:"hr"}),t._v(" "),n("div",{staticClass:"grid col-2 gap-10 auto justify-content-start align-items-center"},[n("button",{staticClass:"cta",attrs:{type:"submit"}},[t._v("Save")]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.submitSuccess,expression:"submitSuccess"}],staticClass:"info"},[t._v(" "+t._s(t.submitText)+" ")]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.submitError,expression:"submitError"}],staticClass:"error"},[t._v(" "+t._s(t.submitText)+" ")])])])])])}),[],!1,null,"1039ebc8",null).exports),f={props:["domainDetail"],data:function(){return{submitSuccess:!1,submitError:!1,submitText:"Saved!"}},methods:{submitForm:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$put("/domain",{id:t.$route.params.id,name:t.domainDetail.data.name,price_renting:t.domainDetail.data.price_renting,price_buyout:t.domainDetail.data.price_buyout,description:t.domainDetail.data.description}).then((function(e){console.log(e),t.submitSuccess=!0,t.submitText="Saved!",setTimeout((function(){return t.submitSuccess=!1}),4e3)}),(function(e){console.log(e),t.submitError=!0,t.submitText=e.response.data.message,setTimeout((function(){t.submitError=!1,t.submitText=""}),4e3)}));case 2:case"end":return e.stop()}}),e)})))()}}},_=(n(276),Object(c.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component grid gap-20"},[n("div",{staticClass:"box grid gap-20"},[n("h3",[t._v(t._s(t.domainDetail.data.name)+" "),1==t.domainDetail.data.tier?n("span",{staticClass:"font14"},[t._v("🔥")]):t._e()]),t._v(" "),n("form",{staticClass:"grid gap-20 ",on:{submit:function(e){return e.preventDefault(),t.submitForm()}}},[n("div",{staticClass:"grid gap-20 align-items-start"},[n("div",[n("label",{attrs:{for:"title"}},[t._v("Domain name (cannot be changed)")]),t._v(" "),1==t.$store.state.auth.userData.id?n("input",{directives:[{name:"model",rawName:"v-model",value:t.domainDetail.data.name,expression:"domainDetail.data.name"}],attrs:{type:"text",name:"name"},domProps:{value:t.domainDetail.data.name},on:{input:function(e){e.target.composing||t.$set(t.domainDetail.data,"name",e.target.value)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.domainDetail.data.name,expression:"domainDetail.data.name"}],attrs:{type:"text",name:"name",readonly:""},domProps:{value:t.domainDetail.data.name},on:{input:function(e){e.target.composing||t.$set(t.domainDetail.data,"name",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"grid gap-20 md-col-2"},[n("div",[n("label",{attrs:{for:"title"}},[t._v("Renting price")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.domainDetail.data.price_renting,expression:"domainDetail.data.price_renting"}],attrs:{type:"text",name:"price_renting"},domProps:{value:t.domainDetail.data.price_renting},on:{input:function(e){e.target.composing||t.$set(t.domainDetail.data,"price_renting",e.target.value)}}})]),t._v(" "),n("div",[n("label",{attrs:{for:"title"}},[t._v("Buyout price")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.domainDetail.data.price_buyout,expression:"domainDetail.data.price_buyout"}],attrs:{type:"text",name:"price_buyout"},domProps:{value:t.domainDetail.data.price_buyout},on:{input:function(e){e.target.composing||t.$set(t.domainDetail.data,"price_buyout",e.target.value)}}})])]),t._v(" "),n("div",[n("label",{attrs:{for:"title"}},[t._v("Domain story")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.domainDetail.data.description,expression:"domainDetail.data.description"}],attrs:{type:"text",name:"description"},domProps:{value:t.domainDetail.data.description},on:{input:function(e){e.target.composing||t.$set(t.domainDetail.data,"description",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"hr"}),t._v(" "),n("div",{staticClass:"grid col-2 gap-10 auto justify-content-start align-items-center"},[n("button",{staticClass:"cta",attrs:{type:"submit"}},[t._v("Save")]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.submitSuccess,expression:"submitSuccess"}],staticClass:"info"},[t._v(" "+t._s(t.submitText)+" ")]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.submitError,expression:"submitError"}],staticClass:"error"},[t._v(" "+t._s(t.submitText)+" ")])])])])])}),[],!1,null,"aa895bb0",null).exports),x={props:["domainDetail"],data:function(){return{submitSuccess:!1,submitError:!1,submitText:"Saved!",statusOld:this.domainDetail.data.status}},methods:{submitForm:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$put("/domain/admin",{id:t.$route.params.id,status:t.domainDetail.data.status,statusOld:t.statusOld,tier:t.domainDetail.data.tier,email:t.domainDetail.data.email,name:t.domainDetail.data.name}).then((function(e){console.log(e),t.submitSuccess=!0,t.submitText="Saved!",t.statusOld=t.domainDetail.data.status,setTimeout((function(){return t.submitSuccess=!1}),4e3)}),(function(e){console.log(e),t.submitError=!0,t.submitText=e.response.data.message,setTimeout((function(){t.submitError=!1,t.submitText=""}),4e3)}));case 2:case"end":return e.stop()}}),e)})))()}}},D=(n(278),Object(c.a)(x,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"component grid gap-20"},[e("div",{staticClass:"box grid gap-20"},[e("h3",[this._v("Domain ownership verification")]),this._v(" "),e("p",[this._v("🔨 Under construction")])])])}],!1,null,"d3587bf6",null).exports),h={methods:{deleteButton:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$delete("/domain/"+t.$route.params.id).then((function(e){console.log(e),t.$router.push("/")}),(function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}}},w=(n(280),{layout:"defaultAdmin",components:{Domain:l,Detail:_,Admin:v,Verify:D,DangerZone:Object(c.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component grid gap-20"},[n("div",{staticClass:"box grid gap-20 danger-zone"},[n("h3",[t._v("Danger zone")]),t._v(" "),n("div",{},[n("button",{staticClass:"cta red",on:{"~click":function(e){return t.deleteButton()}}},[t._v("Remove domain")])])])])}),[],!1,null,"2648cb79",null).exports},data:function(){return{}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,d,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,o=t.params,e.next=3,Promise.all([n.$get("/domain/"+o.id)]);case 3:return d=e.sent,c=Object(r.a)(d,1),l=c[0],e.abrupt("return",{domainDetail:l});case 7:case"end":return e.stop()}}),e)})))()}}),y=Object(c.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("Domain"),t._v(" "),n("div",{staticClass:"container-narrow grid gap-60"},[n("Detail",{attrs:{domainDetail:t.domainDetail}}),t._v(" "),n("Verify",{attrs:{domainDetail:t.domainDetail}}),t._v(" "),n("DangerZone"),t._v(" "),n("div",{staticClass:"hr"}),t._v(" "),1==t.$store.state.auth.userData.id?n("Admin",{attrs:{domainDetail:t.domainDetail}}):t._e()],1)],1)}),[],!1,null,"fbc5a3ac",null);e.default=y.exports}}]);