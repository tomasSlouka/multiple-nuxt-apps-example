(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{323:function(t,e,n){var content=n(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("69a9fc1e",content,!0,{sourceMap:!1})},324:function(t,e,n){var content=n(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("a957082a",content,!0,{sourceMap:!1})},325:function(t,e,n){"use strict";n(323)},326:function(t,e,n){var l=n(11)(!1);l.push([t.i,".component[data-v-403ff72b]{padding:1px;background-color:rgba(255,212,1,.25098);border-bottom:10px solid #ffd401}",""]),t.exports=l},327:function(t,e,n){"use strict";n(324)},328:function(t,e,n){var l=n(11)(!1);l.push([t.i,".component[data-v-8e91234c]{background-color:#fff;box-shadow:0 .125rem .125rem rgba(0,0,0,.1);border-top:1px solid #eee}.container-standard[data-v-8e91234c]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}.container-standard>div.flex[data-v-8e91234c]{height:100%}.nav>ul[data-v-8e91234c]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-8e91234c]{padding:10px 16px;border-bottom:1px solid transparent;position:relative;top:0;transition:.2s;display:inline-block;color:#000}.nav>ul>li>a[data-v-8e91234c]:hover{color:#000;text-decoration:none;position:relative;top:2px}.nav>ul>li>a.nuxt-link-active[data-v-8e91234c],.nav>ul>li>a.nuxt-link-exact-active[data-v-8e91234c]{color:#000;text-decoration:none;font-weight:600}.nav>ul>li>a[data-v-8e91234c]{color:rgba(0,0,0,.72157);line-height:24px;text-decoration:none}",""]),t.exports=l},329:function(t,e,n){"use strict";var l={props:{h1:String,h2:String}},o=(n(325),n(6)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("div",{staticClass:"container-hero grid"},[n("div",{staticClass:"grid justify-items-start"},[n("h3",{staticClass:"h3"},[t._v(t._s(t.h1))]),t._v(" "),t.h2?n("h1",{staticClass:"h1"},[t._v(t._s(t.h2))]):t._e()])])])}),[],!1,null,"403ff72b",null);e.a=component.exports},330:function(t,e,n){"use strict";var l={data:function(){return{}},methods:{logout:function(){var t=this;console.log("logout"),this.$store.dispatch("auth/logout").then((function(){t.$router.push("/odhlasenie")}))}}},o=(n(327),n(6)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("div",{staticClass:"container-standard grid justify-items-end"},[n("div",{staticClass:"flex wrap align-items-center justify-content-space-between"},[n("div",{staticClass:"nav"},[n("ul",{staticClass:"flex wrap show-md align-items-center"},[n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/orders"}},[t._v("Objednávky")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/categories"}},[t._v("Kategórie")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/tags"}},[t._v("Značky")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/titles"}},[t._v("Knižné tituly")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/stock"}},[t._v("Sklad")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/users"}},[t._v("Používatelia")])],1)])])])])])}),[],!1,null,"8e91234c",null);e.a=component.exports},494:function(t,e,n){"use strict";n.r(e);var l=n(329),o=n(330),r=n(1),c=(n(20),n(14),n(72),{data:function(){return{submitSuccess:!1,submitError:!1,submitText:"Uložené!",id:null,name:null,surname:null,nickname:null,email:null,level:100,created_at:null,updated_at:null,deleted_at:null,created_by:null,updated_by:null,deleted_by:null}},methods:{submitForm:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$post("/user",{name:t.name,surname:t.surname,nickname:t.nickname,email:t.email,level:t.level}).then((function(e){console.log(e),t.submitSuccess=!0,t.submitText="Uložené!",t.name="",t.surname="",t.nickname="",t.email="",t.level=100,setTimeout((function(){return t.submitSuccess=!1}),4e3),t.$router.push("/admin/users"),t.name=""}),(function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}}}),v=n(6),m=Object(v.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("div",{staticClass:"container-standard grid"},[n("div",{staticClass:"grid gap-40"},[n("h2",[t._v("Nový používateľ")]),t._v(" "),n("div",{staticClass:"box-form"},[n("form",{staticClass:"grid gap-30 align-items-start",on:{submit:function(e){return e.preventDefault(),t.submitForm()}}},[n("div",{staticClass:"grid gap-20"},[n("div",[n("label",{attrs:{for:"name"}},[t._v("Meno")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"Meno",name:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),n("div",[n("label",{attrs:{for:"name"}},[t._v("Priezvisko")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.surname,expression:"surname"}],attrs:{type:"text",placeholder:"Priezvisko",name:"surname"},domProps:{value:t.surname},on:{input:function(e){e.target.composing||(t.surname=e.target.value)}}})]),t._v(" "),n("div",[n("label",{attrs:{for:"name"}},[t._v("Prezývka")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.nickname,expression:"nickname"}],attrs:{type:"text",placeholder:"Prezývka",name:"nickname"},domProps:{value:t.nickname},on:{input:function(e){e.target.composing||(t.nickname=e.target.value)}}})]),t._v(" "),n("div",[n("label",{attrs:{for:"name"}},[t._v("Email")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"Email",name:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),n("div",[n("label",{attrs:{for:"name"}},[t._v("Level")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.level,expression:"level"}],attrs:{name:"level"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.level=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"100"}},[t._v("User")]),t._v(" "),n("option",{attrs:{value:"104"}},[t._v("Admin")])])]),t._v(" "),n("p",[t._v("\n                            Novému používateľovi bude zaslaný verifikačný email.\n                        ")])]),t._v(" "),n("div",{staticClass:"hr"}),t._v(" "),n("div",{staticClass:"justify-self-end grid col-3 auto gap-10 align-items-center"},[n("div",[t.submitSuccess?n("p",{staticClass:"success"},[t._v(t._s(t.submitText))]):t._e()]),t._v(" "),n("nuxt-link",{staticClass:"button cta red",attrs:{to:"/admin/users"}},[t._v("Zrušiť")]),t._v(" "),n("button",{staticClass:"button cta black",attrs:{type:"submit"}},[t._v("Uložiť")])],1)])])])])])}),[],!1,null,"43f57400",null).exports,d={layout:"defaultAdmin",components:{SubNav:o.a,Hero:l.a,FormAdd:m}},f=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("SubNav"),t._v(" "),n("Hero",{attrs:{h1:"Administrácia",h2:"Používatelia"}}),t._v(" "),n("FormAdd")],1)}),[],!1,null,null,null);e.default=f.exports}}]);