(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{237:function(t,n,e){var content=e(240);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(6).default)("40171c24",content,!0,{sourceMap:!1})},238:function(t,n,e){var content=e(242);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(6).default)("d19dc1c2",content,!0,{sourceMap:!1})},239:function(t,n,e){"use strict";e(237)},240:function(t,n,e){(n=e(5)(!1)).push([t.i,".component[data-v-05b6f733]{padding:1px;background-color:rgba(255,212,1,.25098);border-bottom:10px solid #ffd401}",""]),t.exports=n},241:function(t,n,e){"use strict";e(238)},242:function(t,n,e){(n=e(5)(!1)).push([t.i,".component[data-v-2ab56dd5]{background-color:#fff;box-shadow:0 .125rem .125rem rgba(0,0,0,.1);border-top:1px solid #eee}.container-standard[data-v-2ab56dd5]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}.container-standard>div.flex[data-v-2ab56dd5]{height:100%}.nav>ul[data-v-2ab56dd5]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-2ab56dd5]{padding:10px 16px;border-bottom:1px solid transparent;position:relative;top:0;transition:.2s;display:inline-block;color:#000}.nav>ul>li>a[data-v-2ab56dd5]:hover{color:#000;text-decoration:none;position:relative;top:2px}.nav>ul>li>a.nuxt-link-active[data-v-2ab56dd5],.nav>ul>li>a.nuxt-link-exact-active[data-v-2ab56dd5]{color:#000;text-decoration:none;font-weight:600}.nav>ul>li>a[data-v-2ab56dd5]{color:rgba(0,0,0,.72157);line-height:24px;text-decoration:none}",""]),t.exports=n},243:function(t,n,e){"use strict";var o={props:{h1:String,h2:String}},r=(e(239),e(3)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"component"},[e("div",{staticClass:"container-hero grid"},[e("div",{staticClass:"grid justify-items-start"},[e("h1",{staticClass:"h3"},[t._v(t._s(t.h1))]),t._v(" "),t.h2?e("h3",{staticClass:"h1"},[t._v(t._s(t.h2))]):t._e()])])])}),[],!1,null,"05b6f733",null);n.a=component.exports},244:function(t,n,e){"use strict";var o={data:function(){return{}},methods:{logout:function(){var t=this;console.log("logout"),this.$store.dispatch("auth/logout").then((function(){t.$router.push("/odhlasenie")}))}}},r=(e(241),e(3)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"component"},[e("div",{staticClass:"container-standard grid justify-items-end"},[e("div",{staticClass:"flex wrap align-items-center justify-content-space-between"},[e("div",{staticClass:"nav"},[e("ul",{staticClass:"flex wrap show-md align-items-center"},[e("li",[e("nuxt-link",{staticClass:"small",attrs:{to:"/admin/orders"}},[t._v("Objednávky")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"small",attrs:{to:"/admin/categories"}},[t._v("Kategórie")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"small",attrs:{to:"/admin/tags"}},[t._v("Značky")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"small",attrs:{to:"/admin/titles"}},[t._v("Knižné tituly")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"small",attrs:{to:"/admin/storage"}},[t._v("Sklad")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"small",attrs:{to:"/admin/users"}},[t._v("Používatelia")])],1)])])])])])}),[],!1,null,"2ab56dd5",null);n.a=component.exports},256:function(t,n,e){var content=e(266);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(6).default)("998d6bd4",content,!0,{sourceMap:!1})},265:function(t,n,e){"use strict";e(256)},266:function(t,n,e){(n=e(5)(!1)).push([t.i,"",""]),t.exports=n},269:function(t,n,e){"use strict";e(20);var o=e(2),r={props:["bookList"],data:function(){return{}},methods:{deleteButton:function(data){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("book/deleteItem",data);case 2:case"end":return n.stop()}}),n)})))()}}},l=(e(265),e(3)),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"component"},[e("div",{staticClass:"container-standard grid"},[e("div",{staticClass:"grid gap-40"},[e("div",{staticClass:"grid md-col-2 align-items-center"},[e("h2",[t._v("Zoznam")]),t._v(" "),e("nuxt-link",{staticClass:"button cta black justify-self-end",attrs:{to:"/admin/titles/add"}},[t._v("Pridať nový knižný titul")])],1),t._v(" "),e("div",{staticClass:"grid gap-5 auto "},[e("div",{staticClass:"table-wrapper justify-content-start"},[e("div",{staticClass:"table grid auto col-6"},[t._m(0),t._v(" "),t._l(t.bookList.data,(function(n,o){return e("div",{key:n.id,staticClass:"table-row"},[e("div",[e("p",{staticClass:"strong"},[t._v(t._s(n.name))])]),t._v(" "),e("div",[e("p",{staticClass:"italic"},[t._v(t._s(n.author))])]),t._v(" "),e("div",{staticClass:"grid justify-items-start"},[e("span",{staticClass:"tag gray"},[t._v(t._s(n.price))])]),t._v(" "),e("div",[e("div",{staticClass:"flex wrap"},t._l(null==n.categories?[]:n.categories.split(","),(function(n){return e("span",{key:n,staticClass:"tag gray"},[t._v(t._s(n))])})),0)]),t._v(" "),e("div",[e("div",{staticClass:"flex wrap"},t._l(null==n.tags?[]:n.tags.split(","),(function(n){return e("span",{key:n,staticClass:"tag gray"},[t._v(t._s(n))])})),0)]),t._v(" "),e("div",{staticClass:"grid col-2 auto gap-5 justify-content-start justify-items-start"},[e("nuxt-link",{staticClass:"button cta small white",attrs:{to:"/admin/titles/detail/"+n.id}},[t._v("Upraviť")]),t._v(" "),e("button",{staticClass:"button cta small red",on:{click:function(e){return t.deleteButton({id:n.id,index:o})}}},[t._v("Vymazať")])],1)])}))],2)])])])])])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"table-head"},[e("div",[t._v("Názov")]),t._v(" "),e("div",[t._v("Autor")]),t._v(" "),e("div",[t._v("Cena")]),t._v(" "),e("div",[t._v("Kategórie")]),t._v(" "),e("div",[t._v("Značky")]),t._v(" "),e("div",[t._v("Akcia")])])}],!1,null,"6fa099a3",null);n.a=component.exports},356:function(t,n,e){"use strict";e.r(n);e(20);var o=e(2),r=e(244),l=e(243),c=e(269),d={layout:"defaultAdmin",components:{SubNav:r.a,Hero:l.a,ListAll:c.a},data:function(){return{bookList:this.$store.state.book.dataListFiltered}},fetch:function(t){return Object(o.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.store,n.next=3,e.dispatch("book/getDataList");case 3:case"end":return n.stop()}}),n)})))()},methods:{filterChange:function(){this.bookList=this.$store.state.book.dataListFiltered}}},v=e(3),component=Object(v.a)(d,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"page"},[n("SubNav"),this._v(" "),n("Hero",{attrs:{h1:"Administrácia",h2:"Knižné tituly"}}),this._v(" "),n("ListAll",{attrs:{bookList:this.bookList}})],1)}),[],!1,null,null,null);n.default=component.exports}}]);