(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{237:function(t,e,n){var content=n(240);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("40171c24",content,!0,{sourceMap:!1})},238:function(t,e,n){var content=n(242);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("d19dc1c2",content,!0,{sourceMap:!1})},239:function(t,e,n){"use strict";n(237)},240:function(t,e,n){(e=n(5)(!1)).push([t.i,".component[data-v-05b6f733]{padding:1px;background-color:rgba(255,212,1,.25098);border-bottom:10px solid #ffd401}",""]),t.exports=e},241:function(t,e,n){"use strict";n(238)},242:function(t,e,n){(e=n(5)(!1)).push([t.i,".component[data-v-2ab56dd5]{background-color:#fff;box-shadow:0 .125rem .125rem rgba(0,0,0,.1);border-top:1px solid #eee}.container-standard[data-v-2ab56dd5]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}.container-standard>div.flex[data-v-2ab56dd5]{height:100%}.nav>ul[data-v-2ab56dd5]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-2ab56dd5]{padding:10px 16px;border-bottom:1px solid transparent;position:relative;top:0;transition:.2s;display:inline-block;color:#000}.nav>ul>li>a[data-v-2ab56dd5]:hover{color:#000;text-decoration:none;position:relative;top:2px}.nav>ul>li>a.nuxt-link-active[data-v-2ab56dd5],.nav>ul>li>a.nuxt-link-exact-active[data-v-2ab56dd5]{color:#000;text-decoration:none;font-weight:600}.nav>ul>li>a[data-v-2ab56dd5]{color:rgba(0,0,0,.72157);line-height:24px;text-decoration:none}",""]),t.exports=e},243:function(t,e,n){"use strict";var r={props:{h1:String,h2:String}},o=(n(239),n(3)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("div",{staticClass:"container-hero grid"},[n("div",{staticClass:"grid justify-items-start"},[n("h1",{staticClass:"h3"},[t._v(t._s(t.h1))]),t._v(" "),t.h2?n("h3",{staticClass:"h1"},[t._v(t._s(t.h2))]):t._e()])])])}),[],!1,null,"05b6f733",null);e.a=component.exports},244:function(t,e,n){"use strict";var r={data:function(){return{}},methods:{logout:function(){var t=this;console.log("logout"),this.$store.dispatch("auth/logout").then((function(){t.$router.push("/odhlasenie")}))}}},o=(n(241),n(3)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("div",{staticClass:"container-standard grid justify-items-end"},[n("div",{staticClass:"flex wrap align-items-center justify-content-space-between"},[n("div",{staticClass:"nav"},[n("ul",{staticClass:"flex wrap show-md align-items-center"},[n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/orders"}},[t._v("Objednávky")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/categories"}},[t._v("Kategórie")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/tags"}},[t._v("Značky")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/titles"}},[t._v("Knižné tituly")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/storage"}},[t._v("Sklad")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/users"}},[t._v("Používatelia")])],1)])])])])])}),[],!1,null,"2ab56dd5",null);e.a=component.exports},271:function(t,e,n){"use strict";n(16),n(20);var r=n(2),o=(n(53),{props:["dataDetail","tagList","categoryList"],data:function(){return{submitSuccess:!1,submitError:!1,submitText:"Uložené!",categories:null===this.dataDetail.data.categories?[]:this.dataDetail.data.categories.split(","),tags:null===this.dataDetail.data.tags?[]:this.dataDetail.data.tags.split(",")}},methods:{updateCategory:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$axios.$put("/book/category",{id:e.$route.params.id,category_id:t}).then((function(n){console.log(n.message),"added"===n.message&&e.categories.push(t),"removed"===n.message&&(e.categories=e.categories.filter((function(e){return e!==t}))),console.log(e.categories)}),(function(t){console.log(t)}));case 2:case"end":return n.stop()}}),n)})))()},updateTag:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$axios.$put("/book/tag",{id:e.$route.params.id,tag_id:t}).then((function(n){console.log(n.message),"added"===n.message&&e.tags.push(t),"removed"===n.message&&(e.tags=e.tags.filter((function(e){return e!==t}))),console.log(e.tags)}),(function(t){console.log(t)}));case 2:case"end":return n.stop()}}),n)})))()},submitForm:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$put("/book",{id:t.$route.params.id,name:t.dataDetail.data.name,author:t.dataDetail.data.author,price:t.dataDetail.data.price,short_text:t.dataDetail.data.short_text,long_text:t.dataDetail.data.long_text}).then((function(e){console.log(e),t.submitSuccess=!0,t.submitText="Uložené!",setTimeout((function(){return t.submitSuccess=!1}),4e3),t.$router.push("/admin/titles")}),(function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}}}),l=n(3),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("div",{staticClass:"container-standard grid"},[n("div",{staticClass:"grid gap-40"},[n("h2",[t._v("Upravenie knižného titulu")]),t._v(" "),n("div",{staticClass:"box-form"},[n("form",{staticClass:"grid gap-30 md-col-2 align-items-start",on:{submit:function(e){return e.preventDefault(),t.submitForm()}}},[n("div",{staticClass:"grid gap-20"},[n("div",[n("label",{attrs:{for:"name"}},[t._v("Názov knihy")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.dataDetail.data.name,expression:"dataDetail.data.name"}],attrs:{type:"text",placeholder:"Názov knihy",name:"name"},domProps:{value:t.dataDetail.data.name},on:{input:function(e){e.target.composing||t.$set(t.dataDetail.data,"name",e.target.value)}}})]),t._v(" "),n("div",[n("label",{attrs:{for:"author"}},[t._v("Autor")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.dataDetail.data.author,expression:"dataDetail.data.author"}],attrs:{type:"text",placeholder:"Autor",name:"author"},domProps:{value:t.dataDetail.data.author},on:{input:function(e){e.target.composing||t.$set(t.dataDetail.data,"author",e.target.value)}}})]),t._v(" "),n("div",[n("label",{attrs:{for:"price"}},[t._v("Cena")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.dataDetail.data.price,expression:"dataDetail.data.price"}],attrs:{type:"text",placeholder:"Cena",name:"price"},domProps:{value:t.dataDetail.data.price},on:{input:function(e){e.target.composing||t.$set(t.dataDetail.data,"price",e.target.value)}}})]),t._v(" "),n("label",{attrs:{for:"long_text"}},[t._v("Vyber kategórie")]),t._v(" "),n("div",{staticClass:"flex wrap tags"},t._l(t.categoryList.data,(function(e){return n("div",{key:e.id,staticClass:"tag",class:t.categories.includes(e.id)?"active":"",on:{click:function(n){return n.preventDefault(),t.updateCategory(e.id)}}},[t._v(t._s(e.name))])})),0),t._v(" "),n("label",{attrs:{for:"long_text"}},[t._v("Vyber značky")]),t._v(" "),n("div",{staticClass:"flex wrap tags"},t._l(t.tagList.data,(function(e){return n("div",{key:e.id,staticClass:"tag",class:t.tags.includes(e.id)?"active":"",on:{click:function(n){return n.preventDefault(),t.updateTag(e.id)}}},[t._v(t._s(e.name))])})),0)]),t._v(" "),n("div",{staticClass:"grid gap-20"},[n("div",[n("label",{attrs:{for:"short_text"}},[t._v("Krátky popis")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.dataDetail.data.short_text,expression:"dataDetail.data.short_text"}],attrs:{type:"text",placeholder:"Krátky popis",name:"short_text"},domProps:{value:t.dataDetail.data.short_text},on:{input:function(e){e.target.composing||t.$set(t.dataDetail.data,"short_text",e.target.value)}}})]),t._v(" "),n("div",[n("label",{attrs:{for:"long_text"}},[t._v("Celý popis")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.dataDetail.data.long_text,expression:"dataDetail.data.long_text"}],staticClass:"long",attrs:{type:"text",placeholder:"Celý popis",name:"long_text"},domProps:{value:t.dataDetail.data.long_text},on:{input:function(e){e.target.composing||t.$set(t.dataDetail.data,"long_text",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"md-span-2 hr"}),t._v(" "),n("div",{staticClass:"justify-self-end md-span-2 grid col-3 auto gap-10 align-items-center"},[n("div",[t.submitSuccess?n("p",{staticClass:"success"},[t._v(t._s(t.submitText))]):t._e()]),t._v(" "),n("nuxt-link",{staticClass:"button cta red",attrs:{to:"/admin/titles"}},[t._v("Zrušiť")]),t._v(" "),n("button",{staticClass:"button cta black",attrs:{type:"submit"}},[t._v("Uložiť")])],1)])])])])])}),[],!1,null,"d734b532",null);e.a=component.exports},371:function(t,e,n){"use strict";n.r(e);n(17),n(10),n(21);var r=n(13),o=(n(20),n(2)),l=n(243),d=n(244),c=n(271),v={layout:"defaultAdmin",components:{SubNav:d.a,Hero:l.a,FormEdit:c.a},data:function(){return{}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,l,d,c,v,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,o=t.params,e.next=3,Promise.all([n.$get("/book/"+o.id),n.$get("/category/all"),n.$get("/tag/all")]);case 3:return l=e.sent,d=Object(r.a)(l,3),c=d[0],v=d[1],m=d[2],e.abrupt("return",{dataDetail:c,categoryList:v,tagList:m});case 9:case"end":return e.stop()}}),e)})))()}},m=n(3),component=Object(m.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("SubNav"),this._v(" "),e("Hero",{attrs:{h1:"Administrácia",h2:"Knižné tituly"}}),this._v(" "),e("FormEdit",{attrs:{dataDetail:this.dataDetail,categoryList:this.categoryList,tagList:this.tagList}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);