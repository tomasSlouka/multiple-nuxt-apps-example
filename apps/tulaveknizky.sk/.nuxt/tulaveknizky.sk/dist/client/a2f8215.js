(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{325:function(t,e,n){var content=n(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("69a9fc1e",content,!0,{sourceMap:!1})},326:function(t,e,n){var content=n(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("a957082a",content,!0,{sourceMap:!1})},327:function(t,e,n){"use strict";n(325)},328:function(t,e,n){var o=n(11)(!1);o.push([t.i,".component[data-v-403ff72b]{padding:1px;background-color:rgba(255,212,1,.25098);border-bottom:10px solid #ffd401}",""]),t.exports=o},329:function(t,e,n){"use strict";n(326)},330:function(t,e,n){var o=n(11)(!1);o.push([t.i,".component[data-v-8e91234c]{background-color:#fff;box-shadow:0 .125rem .125rem rgba(0,0,0,.1);border-top:1px solid #eee}.container-standard[data-v-8e91234c]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}.container-standard>div.flex[data-v-8e91234c]{height:100%}.nav>ul[data-v-8e91234c]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-8e91234c]{padding:10px 16px;border-bottom:1px solid transparent;position:relative;top:0;transition:.2s;display:inline-block;color:#000}.nav>ul>li>a[data-v-8e91234c]:hover{color:#000;text-decoration:none;position:relative;top:2px}.nav>ul>li>a.nuxt-link-active[data-v-8e91234c],.nav>ul>li>a.nuxt-link-exact-active[data-v-8e91234c]{color:#000;text-decoration:none;font-weight:600}.nav>ul>li>a[data-v-8e91234c]{color:rgba(0,0,0,.72157);line-height:24px;text-decoration:none}",""]),t.exports=o},331:function(t,e,n){"use strict";var o={props:{h1:String,h2:String}},r=(n(327),n(6)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("div",{staticClass:"container-hero grid"},[n("div",{staticClass:"grid justify-items-start"},[n("h3",{staticClass:"h3"},[t._v(t._s(t.h1))]),t._v(" "),t.h2?n("h1",{staticClass:"h1"},[t._v(t._s(t.h2))]):t._e()])])])}),[],!1,null,"403ff72b",null);e.a=component.exports},332:function(t,e,n){"use strict";var o={data:function(){return{}},methods:{logout:function(){var t=this;console.log("logout"),this.$store.dispatch("auth/logout").then((function(){t.$router.push("/odhlasenie")}))}}},r=(n(329),n(6)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("div",{staticClass:"container-standard grid justify-items-end"},[n("div",{staticClass:"flex wrap align-items-center justify-content-space-between"},[n("div",{staticClass:"nav"},[n("ul",{staticClass:"flex wrap show-md align-items-center"},[n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/orders"}},[t._v("Objednávky")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/categories"}},[t._v("Kategórie")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/tags"}},[t._v("Značky")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/titles"}},[t._v("Knižné tituly")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/stock"}},[t._v("Sklad")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/users"}},[t._v("Používatelia")])],1)])])])])])}),[],!1,null,"8e91234c",null);e.a=component.exports},396:function(t,e,n){var content=n(441);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("27f64d6a",content,!0,{sourceMap:!1})},440:function(t,e,n){"use strict";n(396)},441:function(t,e,n){var o=n(11)(!1);o.push([t.i,"",""]),t.exports=o},490:function(t,e,n){"use strict";n.r(e);var o=n(1),r=(n(20),n(332)),l=n(331),c=(n(72),{props:["bookList"],data:function(){return{}},methods:{addBookToStock:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.$axios.$post("/stock",{book_id:t}).then((function(t){console.log(t),e.target.innerText="Knižka pridaná!",setTimeout((function(){return n.submitSuccess=!1}),4e3)}),(function(t){console.log(t)}));case 2:case"end":return o.stop()}}),o)})))()},deleteButton:function(data){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("book/deleteItem",data);case 2:case"end":return e.stop()}}),e)})))()}}}),d=(n(440),n(6)),v=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("div",{staticClass:"container-standard grid"},[n("div",{staticClass:"grid gap-40"},[n("div",{staticClass:"grid md-col-2 align-items-center"},[n("h2",[t._v("Zoznam ")]),t._v(" "),n("nuxt-link",{staticClass:"button cta black justify-self-end",attrs:{to:"/admin/titles/add"}},[t._v("Pridať nový knižný titul")])],1),t._v(" "),n("div",[n("p",{staticClass:"small"},[t._v("\n                    Zobrazujem "),n("strong",[t._v(t._s(t.bookList.count))]),t._v(" knižných titulov.\n                ")])]),t._v(" "),n("div",{staticClass:"grid gap-5 auto "},[n("div",{staticClass:"table-wrapper justify-content-start"},[n("div",{staticClass:"table grid auto col-5"},[t._m(0),t._v(" "),t._l(t.bookList.data,(function(e,o){return n("div",{key:e.id,staticClass:"table-row"},[n("div",[n("p",{staticClass:"strong"},[t._v(t._s(e.name))]),n("p",{staticClass:"italic small"},[t._v(t._s(e.author))])]),t._v(" "),n("div",{staticClass:"grid justify-items-start"},[n("span",{staticClass:"tag yellow"},[t._v(t._s(e.price)+" kreditov")])]),t._v(" "),n("div",[n("div",{staticClass:"flex wrap"},t._l(null==e.categoriesNames?[]:e.categoriesNames.split(","),(function(e){return n("span",{key:e,staticClass:"tag gray"},[t._v(t._s(e))])})),0)]),t._v(" "),n("div",[n("p",{attrs:{title:"Počet všetkých/dostupných/požičaných kníh"}},[t._v(t._s(e.stock_count_all)+"/"+t._s(e.stock_count_available)+"/"+t._s(e.stock_count_borrowed))])]),t._v(" "),n("div",{staticClass:"grid col-3 auto gap-5 justify-content-start justify-items-start"},[n("nuxt-link",{staticClass:"button cta small black",attrs:{to:"/admin/titles/detail/"+e.id}},[t._v("Upraviť")]),t._v(" "),n("button",{staticClass:"button cta small white",on:{"~click":function(n){return t.addBookToStock(e.id,n)}}},[t._v("+ Pridať do skladu")]),t._v(" "),n("button",{staticClass:"button cta small red",on:{click:function(n){return t.deleteButton({id:e.id,index:o})}}},[t._v("Vymazať")])],1)])}))],2)])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-head"},[n("div",{staticClass:"minw200"},[t._v("Názov")]),t._v(" "),n("div",[t._v("Cena")]),t._v(" "),n("div",[t._v("Kategórie")]),t._v(" "),n("div",[t._v("Sklad")]),t._v(" "),n("div",{staticClass:"minw300"},[t._v("Akcia")])])}],!1,null,"2e74645d",null).exports,f={layout:"defaultAdmin",components:{SubNav:r.a,Hero:l.a,ListAll:v},data:function(){return{bookList:this.$store.state.book.dataListFiltered}},fetch:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,e.next=3,n.dispatch("book/getDataList");case 3:case"end":return e.stop()}}),e)})))()},methods:{filterChange:function(){this.bookList=this.$store.state.book.dataListFiltered}}},_=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("SubNav"),t._v(" "),n("Hero",{attrs:{h1:"Administrácia",h2:"Knižné tituly"}}),t._v(" "),n("ListAll",{attrs:{bookList:t.bookList}})],1)}),[],!1,null,null,null);e.default=_.exports}}]);