(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{258:function(t,e,o){var content=o(263);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("26e5729d",content,!0,{sourceMap:!1})},261:function(t,e,o){var content=o(274);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("a7190c9e",content,!0,{sourceMap:!1})},262:function(t,e,o){"use strict";o(258)},263:function(t,e,o){(e=o(7)(!1)).push([t.i,".component[data-v-591db515]{background-color:#fff;box-shadow:0 .125rem .125rem rgba(0,0,0,.1);border-top:1px solid #eee;position:relative}.container-standard[data-v-591db515]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}.container-standard>div.flex[data-v-591db515]{height:100%}.nav>ul[data-v-591db515]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-591db515]{padding:10px 16px;border-bottom:1px solid transparent;position:relative;top:0;transition:.2s;display:inline-block;color:#000}.nav>ul>li>a[data-v-591db515]:hover{color:#000;text-decoration:none;position:relative;top:2px}.nav>ul>li>a.nuxt-link-active[data-v-591db515],.nav>ul>li>a.nuxt-link-exact-active[data-v-591db515]{color:#000;text-decoration:none;font-weight:600}.nav>ul>li>a[data-v-591db515]{color:rgba(0,0,0,.72157);line-height:24px;text-decoration:none}",""]),t.exports=e},264:function(t,e,o){t.exports=o.p+"img/icon-love.88c6eac.svg"},265:function(t,e,o){var content=o(276);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("d395a632",content,!0,{sourceMap:!1})},270:function(t,e,o){"use strict";var n={data:function(){return{}},methods:{logout:function(){var t=this;console.log("logout"),this.$store.dispatch("auth/logout").then((function(){t.$router.push("/odhlasenie")}))}}},r=(o(262),o(3)),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"component"},[e("div",{staticClass:"container-standard grid justify-items-end"},[e("div",{staticClass:"flex wrap align-items-center justify-content-space-between"},[e("div",{staticClass:"nav"},[e("ul",{staticClass:"flex wrap show-md align-items-center"},[e("li",[e("nuxt-link",{staticClass:"small",attrs:{to:"/ako-to-funguje"}},[this._v("Ako to funguje?")])],1),this._v(" "),e("li",[e("nuxt-link",{staticClass:"small",attrs:{to:"/nas-pribeh"}},[this._v("Náš príbeh")])],1),this._v(" "),e("li",[e("nuxt-link",{staticClass:"small",attrs:{to:"/blog"}},[this._v("Náš blog")])],1),this._v(" "),e("li",[e("nuxt-link",{staticClass:"small",attrs:{to:"/newsletter"}},[this._v("Novinky emailom")])],1)])])])])])}),[],!1,null,"591db515",null);e.a=component.exports},273:function(t,e,o){"use strict";o(261)},274:function(t,e,o){(e=o(7)(!1)).push([t.i,".component[data-v-9af9dc48]{padding:1px;background-color:rgba(255,212,1,.25098);border-bottom:10px solid #ffd401}",""]),t.exports=e},275:function(t,e,o){"use strict";o(265)},276:function(t,e,o){(e=o(7)(!1)).push([t.i,".container-standard[data-v-7d8a2f2d]{padding:10px}.box[data-v-7d8a2f2d]{background-color:#f7f7f7;border-bottom:6px solid #eee;padding:20px;border-radius:4px}img[data-v-7d8a2f2d]{border-radius:20px;max-height:220px}#filter[data-v-7d8a2f2d]{background-color:#f7f7f7;padding:30px;border-bottom:6px solid rgba(255,212,1,.32157);border-radius:4px}#filter li[data-v-7d8a2f2d]{list-style:none}.readmore[data-v-7d8a2f2d]{text-decoration:none}",""]),t.exports=e},277:function(t,e,o){"use strict";var n={props:{h1:String,h2:String}},r=(o(273),o(3)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"component"},[o("div",{staticClass:"container-hero grid"},[o("div",{staticClass:"grid justify-items-start"},[t.h1?o("div",{staticClass:"h3"},[t._v(t._s(t.h1))]):t._e(),t._v(" "),t.h2?o("div",{staticClass:"h1"},[t._v(t._s(t.h2))]):t._e()])])])}),[],!1,null,"9af9dc48",null);e.a=component.exports},278:function(t,e,o){"use strict";o(14);var n=o(1),r={props:["bookList"],methods:{addItem:function(data,t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.$axios.$post("/order/additem",{book_id:data.book_id}).then((function(o){console.log(o),t.target.innerText="Knižka pridaná!",setTimeout((function(){return e.submitSuccess=!1}),4e3),e.$router.push("/user/books/basket")}),(function(t){console.log(t)}));case 2:case"end":return o.stop()}}),o)})))()}}},l=(o(275),o(3)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("div",{staticClass:"container-standard grid gap-30 md-col-2 auto align-items-start"},[t._m(0),t._v(" "),n("div",{staticClass:"grid gap-10"},[n("h4",[t._v("Najnovšie knižky")]),t._v(" "),n("div",{staticClass:"grid gap-30"},t._l(t.bookList.data,(function(e){return n("div",{key:e.id,staticClass:"box grid gap-20 align-content-start align-items-start md-col-3 auto"},[t._m(1,!0),t._v(" "),n("div",{staticClass:"grid gap-10"},[n("h3",[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"grid col-2 auto justify-content-start align-items-center gap-20"},[n("p",{staticClass:"small strong"},[t._v(t._s(e.author))])]),t._v(" "),n("p",[t._v(t._s(""==e.short_text?e.long_text.slice(0,180)+"...":e.short_text))]),t._v(" "),n("p",{staticClass:"small"},[n("nuxt-link",{staticClass:"strong",attrs:{to:"/kniznica/"+e.id+"/"+e.url}},[t._v("Viac o knihe »")])],1)]),t._v(" "),n("div",{staticClass:"align-self-end grid gap-10 justify-items-end justify-self-end"},[n("div",{staticClass:"flex wrap justify-content-end maxw160"},t._l(null==e.categories?[]:e.categories.split(","),(function(e){return n("span",{key:e,staticClass:"tag white"},[t._v(t._s(e))])})),0),t._v(" "),n("div",{staticClass:"grid col-3 auto"},[n("h2",[t._v(t._s(e.price))]),t._v(" "),n("p",{staticClass:"small align-self-center mt5 ml5"},[t._v("kreditov")])]),t._v(" "),n("div",[0==e.stock_count_available&&e.stock_count_borrowed>0?n("p",{staticClass:"small strong red"},[t._v("Všetko sme vypožičali")]):t._e(),t._v(" "),0==e.stock_count_available&&0==e.stock_count_all?n("p",{staticClass:"small strong red"},[t._v("Dočasne nedostupná")]):t._e(),t._v(" "),e.stock_count_available>=1?n("p",{staticClass:"small strong green"},[t._v("Dostupné ihneď")]):t._e()]),t._v(" "),t.$store.getters["auth/isUserLoggedIn"]?n("div",{staticClass:"align-self-end grid align-items-center col-2 auto gap-20"},[n("img",{staticClass:"love",attrs:{src:o(264),alt:""}}),t._v(" "),e.stock_count_available>=1?n("button",{staticClass:"button cta black",on:{click:function(o){return t.addItem({book_id:e.id},o)}}},[t._v("Požičať")]):t._e(),t._v(" "),0==e.stock_count_available&&e.stock_count_borrowed>0?n("button",{staticClass:"button cta white small",on:{click:function(o){return t.setNotification({id:e.id},o)}}},[t._v("Sledovať dostupnosť")]):t._e(),t._v(" "),0==e.stock_count_available&&0==e.stock_count_all?n("button",{staticClass:"button cta red"},[t._v("Nedostupné")]):t._e()]):n("div",{staticClass:"align-self-end grid align-items-center"},[e.stock_count_available>=1?n("nuxt-link",{staticClass:"button cta black",attrs:{to:"/prihlasenie?from=kniznica"}},[t._v("Požičať")]):t._e(),t._v(" "),0==e.stock_count_available&&e.stock_count_borrowed>0?n("nuxt-link",{staticClass:"button cta white small",attrs:{to:"/prihlasenie"}},[t._v("Sledovať dostupnosť")]):t._e(),t._v(" "),0==e.stock_count_available&&0==e.stock_count_all?n("button",{staticClass:"button cta red"},[t._v("Nedostupné")]):t._e()],1)])])})),0)])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"grid gap-10"},[o("h4",[t._v("Filtruj, "),o("span",{staticClass:"font14"},[t._v("filtruj,")]),t._v(" "),o("span",{staticClass:"font12"},[t._v("vykrúcaj...")])]),t._v(" "),o("div",{staticClass:"minw250",attrs:{id:"filter"}},[o("ul",[o("li",[t._v("Najnovšie")]),t._v(" "),o("li",[t._v("Najoblubenejšie")]),t._v(" "),o("li",[t._v("Špecialne pre teba")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"testbook",attrs:{src:"https://fakeimg.pl/130x220",alt:""}})])}],!1,null,"7d8a2f2d",null);e.a=component.exports},372:function(t,e,o){"use strict";o.r(e);o(14);var n=o(1),r=o(277),l=(o(270),o(278)),c={layout:"defaultPage",components:{Hero:r.a,Books:l.a},data:function(){return{bookList:this.$store.state.openbook.dataListFiltered}},fetch:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.store,e.next=3,o.dispatch("openbook/getDataList");case 3:case"end":return e.stop()}}),e)})))()},methods:{filterChange:function(){this.bookList=this.$store.state.openbook.dataListFiltered}}},d=o(3),component=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("SubNav"),this._v(" "),e("Hero",{attrs:{h1:"Knižnica",h2:"Všetky knihy"}}),this._v(" "),e("Books",{attrs:{bookList:this.bookList}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);