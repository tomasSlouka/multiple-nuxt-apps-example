(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{240:function(t,e,n){var content=n(243);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("40171c24",content,!0,{sourceMap:!1})},241:function(t,e,n){var content=n(245);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("a957082a",content,!0,{sourceMap:!1})},242:function(t,e,n){"use strict";n(240)},243:function(t,e,n){(e=n(6)(!1)).push([t.i,".component[data-v-05b6f733]{padding:1px;background-color:rgba(255,212,1,.25098);border-bottom:10px solid #ffd401}",""]),t.exports=e},244:function(t,e,n){"use strict";n(241)},245:function(t,e,n){(e=n(6)(!1)).push([t.i,".component[data-v-8e91234c]{background-color:#fff;box-shadow:0 .125rem .125rem rgba(0,0,0,.1);border-top:1px solid #eee}.container-standard[data-v-8e91234c]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}.container-standard>div.flex[data-v-8e91234c]{height:100%}.nav>ul[data-v-8e91234c]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-8e91234c]{padding:10px 16px;border-bottom:1px solid transparent;position:relative;top:0;transition:.2s;display:inline-block;color:#000}.nav>ul>li>a[data-v-8e91234c]:hover{color:#000;text-decoration:none;position:relative;top:2px}.nav>ul>li>a.nuxt-link-active[data-v-8e91234c],.nav>ul>li>a.nuxt-link-exact-active[data-v-8e91234c]{color:#000;text-decoration:none;font-weight:600}.nav>ul>li>a[data-v-8e91234c]{color:rgba(0,0,0,.72157);line-height:24px;text-decoration:none}",""]),t.exports=e},246:function(t,e,n){"use strict";var r={props:{h1:String,h2:String}},o=(n(242),n(3)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("div",{staticClass:"container-hero grid"},[n("div",{staticClass:"grid justify-items-start"},[n("h1",{staticClass:"h3"},[t._v(t._s(t.h1))]),t._v(" "),t.h2?n("h3",{staticClass:"h1"},[t._v(t._s(t.h2))]):t._e()])])])}),[],!1,null,"05b6f733",null);e.a=component.exports},247:function(t,e,n){"use strict";var r={data:function(){return{}},methods:{logout:function(){var t=this;console.log("logout"),this.$store.dispatch("auth/logout").then((function(){t.$router.push("/odhlasenie")}))}}},o=(n(244),n(3)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("div",{staticClass:"container-standard grid justify-items-end"},[n("div",{staticClass:"flex wrap align-items-center justify-content-space-between"},[n("div",{staticClass:"nav"},[n("ul",{staticClass:"flex wrap show-md align-items-center"},[n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/orders"}},[t._v("Objednávky")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/categories"}},[t._v("Kategórie")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/tags"}},[t._v("Značky")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/titles"}},[t._v("Knižné tituly")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/stock"}},[t._v("Sklad")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/users"}},[t._v("Používatelia")])],1)])])])])])}),[],!1,null,"8e91234c",null);e.a=component.exports},359:function(t,e,n){"use strict";n.r(e);n(13),n(9),n(17);var r=n(5),o=(n(16),n(2)),l=n(246),c=n(247),d=(n(12),{props:["dataDetail"],data:function(){return{submitSuccess:!1,submitError:!1,submitText:"Uložené!"}},methods:{submitForm:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$put("/order",{id:t.$route.params.id,name:t.dataDetail.data.name}).then((function(e){console.log(e),t.submitSuccess=!0,t.submitText="Uložené!",setTimeout((function(){return t.submitSuccess=!1}),4e3),t.$router.push("/admin/orders")}),(function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}}}),v=n(3),m=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("div",{staticClass:"container-standard grid"},[n("div",{staticClass:"grid gap-40"},[n("h2",[t._v("Upravenie objednávky")]),t._v(" "),n("div",{staticClass:"box-form"},[n("form",{staticClass:"grid gap-30 align-items-start",on:{submit:function(e){return e.preventDefault(),t.submitForm()}}},[n("div",{staticClass:"grid gap-20"},[n("div",[n("label",{attrs:{for:"name"}},[t._v("Názov knihy")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.dataDetail.data.name,expression:"dataDetail.data.name"}],attrs:{type:"text",placeholder:"Názov knihy",name:"name"},domProps:{value:t.dataDetail.data.name},on:{input:function(e){e.target.composing||t.$set(t.dataDetail.data,"name",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"hr"}),t._v(" "),n("div",{staticClass:"justify-self-end grid col-3 auto gap-10 align-items-center"},[n("div",[t.submitSuccess?n("p",{staticClass:"success"},[t._v(t._s(t.submitText))]):t._e()]),t._v(" "),n("nuxt-link",{staticClass:"button cta red",attrs:{to:"/admin/orders"}},[t._v("Zrušiť")]),t._v(" "),n("button",{staticClass:"button cta black",attrs:{type:"submit"}},[t._v("Uložiť")])],1)])])])])])}),[],!1,null,"1176e135",null).exports,f={layout:"defaultAdmin",components:{SubNav:c.a,Hero:l.a,FormEdit:m},data:function(){return{}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,l,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,o=t.params,e.next=3,Promise.all([n.$get("/order/"+o.id)]);case 3:return l=e.sent,c=Object(r.a)(l,1),d=c[0],e.abrupt("return",{dataDetail:d});case 7:case"end":return e.stop()}}),e)})))()}},h=Object(v.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("SubNav"),this._v(" "),e("Hero",{attrs:{h1:"Administrácia",h2:"Objednávky"}}),this._v(" "),e("FormEdit",{attrs:{dataDetail:this.dataDetail}})],1)}),[],!1,null,null,null);e.default=h.exports}}]);