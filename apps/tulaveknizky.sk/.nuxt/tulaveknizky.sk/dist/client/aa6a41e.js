(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{241:function(t,n,e){var content=e(244);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(7).default)("40171c24",content,!0,{sourceMap:!1})},242:function(t,n,e){var content=e(246);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(7).default)("a957082a",content,!0,{sourceMap:!1})},243:function(t,n,e){"use strict";e(241)},244:function(t,n,e){(n=e(6)(!1)).push([t.i,".component[data-v-05b6f733]{padding:1px;background-color:rgba(255,212,1,.25098);border-bottom:10px solid #ffd401}",""]),t.exports=n},245:function(t,n,e){"use strict";e(242)},246:function(t,n,e){(n=e(6)(!1)).push([t.i,".component[data-v-8e91234c]{background-color:#fff;box-shadow:0 .125rem .125rem rgba(0,0,0,.1);border-top:1px solid #eee}.container-standard[data-v-8e91234c]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}.container-standard>div.flex[data-v-8e91234c]{height:100%}.nav>ul[data-v-8e91234c]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-8e91234c]{padding:10px 16px;border-bottom:1px solid transparent;position:relative;top:0;transition:.2s;display:inline-block;color:#000}.nav>ul>li>a[data-v-8e91234c]:hover{color:#000;text-decoration:none;position:relative;top:2px}.nav>ul>li>a.nuxt-link-active[data-v-8e91234c],.nav>ul>li>a.nuxt-link-exact-active[data-v-8e91234c]{color:#000;text-decoration:none;font-weight:600}.nav>ul>li>a[data-v-8e91234c]{color:rgba(0,0,0,.72157);line-height:24px;text-decoration:none}",""]),t.exports=n},247:function(t,n,e){"use strict";var o={props:{h1:String,h2:String}},r=(e(243),e(3)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"component"},[e("div",{staticClass:"container-hero grid"},[e("div",{staticClass:"grid justify-items-start"},[e("h1",{staticClass:"h3"},[t._v(t._s(t.h1))]),t._v(" "),t.h2?e("h3",{staticClass:"h1"},[t._v(t._s(t.h2))]):t._e()])])])}),[],!1,null,"05b6f733",null);n.a=component.exports},248:function(t,n,e){"use strict";var o={data:function(){return{}},methods:{logout:function(){var t=this;console.log("logout"),this.$store.dispatch("auth/logout").then((function(){t.$router.push("/odhlasenie")}))}}},r=(e(245),e(3)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"component"},[e("div",{staticClass:"container-standard grid justify-items-end"},[e("div",{staticClass:"flex wrap align-items-center justify-content-space-between"},[e("div",{staticClass:"nav"},[e("ul",{staticClass:"flex wrap show-md align-items-center"},[e("li",[e("nuxt-link",{staticClass:"small",attrs:{to:"/admin/orders"}},[t._v("Objednávky")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"small",attrs:{to:"/admin/categories"}},[t._v("Kategórie")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"small",attrs:{to:"/admin/tags"}},[t._v("Značky")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"small",attrs:{to:"/admin/titles"}},[t._v("Knižné tituly")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"small",attrs:{to:"/admin/stock"}},[t._v("Sklad")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"small",attrs:{to:"/admin/users"}},[t._v("Používatelia")])],1)])])])])])}),[],!1,null,"8e91234c",null);n.a=component.exports},279:function(t,n,e){var content=e(312);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(7).default)("fd778498",content,!0,{sourceMap:!1})},311:function(t,n,e){"use strict";e(279)},312:function(t,n,e){(n=e(6)(!1)).push([t.i,"",""]),t.exports=n},345:function(t,n,e){"use strict";e.r(n);e(14);var o=e(1),r=e(248),l=e(247),c={props:["bookList"],data:function(){return{}},methods:{addBookToStock:function(t,n){var e=this;return Object(o.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.$axios.$post("/stock",{book_id:t}).then((function(t){console.log(t),n.target.innerText="Knižka pridaná!",setTimeout((function(){return e.submitSuccess=!1}),4e3)}),(function(t){console.log(t)}));case 2:case"end":return o.stop()}}),o)})))()},deleteButton:function(data){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("book/deleteItem",data);case 2:case"end":return n.stop()}}),n)})))()}}},d=(e(311),e(3)),v=Object(d.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"component"},[e("div",{staticClass:"container-standard grid"},[e("div",{staticClass:"grid gap-40"},[e("div",{staticClass:"grid md-col-2 align-items-center"},[e("h2",[t._v("Zoznam ")]),t._v(" "),e("nuxt-link",{staticClass:"button cta black justify-self-end",attrs:{to:"/admin/titles/add"}},[t._v("Pridať nový knižný titul")])],1),t._v(" "),e("div",[e("p",{staticClass:"small"},[t._v("\n                    Zobrazujem "),e("strong",[t._v(t._s(t.bookList.count))]),t._v(" knižných titulov.\n                ")])]),t._v(" "),e("div",{staticClass:"grid gap-5 auto "},[e("div",{staticClass:"table-wrapper justify-content-start"},[e("div",{staticClass:"table grid auto col-5"},[t._m(0),t._v(" "),t._l(t.bookList.data,(function(n,o){return e("div",{key:n.id,staticClass:"table-row"},[e("div",[e("p",{staticClass:"strong"},[t._v(t._s(n.name))]),e("p",{staticClass:"italic small"},[t._v(t._s(n.author))])]),t._v(" "),e("div",{staticClass:"grid justify-items-start"},[e("span",{staticClass:"tag yellow"},[t._v(t._s(n.price)+" kreditov")])]),t._v(" "),e("div",[e("div",{staticClass:"flex wrap"},t._l(null==n.categories?[]:n.categories.split(","),(function(n){return e("span",{key:n,staticClass:"tag gray"},[t._v(t._s(n))])})),0)]),t._v(" "),e("div",[e("p",[t._v(t._s(n.stock_count_all)+"/"+t._s(n.stock_count_available)+"/"+t._s(n.stock_count_borrowed))])]),t._v(" "),e("div",{staticClass:"grid col-3 auto gap-5 justify-content-start justify-items-start"},[e("nuxt-link",{staticClass:"button cta small black",attrs:{to:"/admin/titles/detail/"+n.id}},[t._v("Upraviť")]),t._v(" "),e("button",{staticClass:"button cta small white",on:{"~click":function(e){return t.addBookToStock(n.id,e)}}},[t._v("+ Pridať do skladu")]),t._v(" "),e("button",{staticClass:"button cta small red",on:{click:function(e){return t.deleteButton({id:n.id,index:o})}}},[t._v("Vymazať")])],1)])}))],2)])])])])])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"table-head"},[e("div",{staticClass:"minw200"},[t._v("Názov")]),t._v(" "),e("div",[t._v("Cena")]),t._v(" "),e("div",[t._v("Kategórie")]),t._v(" "),e("div",[t._v("Sklad")]),t._v(" "),e("div",{staticClass:"minw300"},[t._v("Akcia")])])}],!1,null,"bb801282",null).exports,f={layout:"defaultAdmin",components:{SubNav:r.a,Hero:l.a,ListAll:v},data:function(){return{bookList:this.$store.state.book.dataListFiltered}},fetch:function(t){return Object(o.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.store,n.next=3,e.dispatch("book/getDataList");case 3:case"end":return n.stop()}}),n)})))()},methods:{filterChange:function(){this.bookList=this.$store.state.book.dataListFiltered}}},_=Object(d.a)(f,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"page"},[n("SubNav"),this._v(" "),n("Hero",{attrs:{h1:"Administrácia",h2:"Knižné tituly"}}),this._v(" "),n("ListAll",{attrs:{bookList:this.bookList}})],1)}),[],!1,null,null,null);n.default=_.exports}}]);