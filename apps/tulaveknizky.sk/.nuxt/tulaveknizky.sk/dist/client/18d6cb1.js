(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{240:function(t,e,n){var content=n(243);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("40171c24",content,!0,{sourceMap:!1})},241:function(t,e,n){var content=n(245);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("a957082a",content,!0,{sourceMap:!1})},242:function(t,e,n){"use strict";n(240)},243:function(t,e,n){(e=n(6)(!1)).push([t.i,".component[data-v-05b6f733]{padding:1px;background-color:rgba(255,212,1,.25098);border-bottom:10px solid #ffd401}",""]),t.exports=e},244:function(t,e,n){"use strict";n(241)},245:function(t,e,n){(e=n(6)(!1)).push([t.i,".component[data-v-8e91234c]{background-color:#fff;box-shadow:0 .125rem .125rem rgba(0,0,0,.1);border-top:1px solid #eee}.container-standard[data-v-8e91234c]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}.container-standard>div.flex[data-v-8e91234c]{height:100%}.nav>ul[data-v-8e91234c]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-8e91234c]{padding:10px 16px;border-bottom:1px solid transparent;position:relative;top:0;transition:.2s;display:inline-block;color:#000}.nav>ul>li>a[data-v-8e91234c]:hover{color:#000;text-decoration:none;position:relative;top:2px}.nav>ul>li>a.nuxt-link-active[data-v-8e91234c],.nav>ul>li>a.nuxt-link-exact-active[data-v-8e91234c]{color:#000;text-decoration:none;font-weight:600}.nav>ul>li>a[data-v-8e91234c]{color:rgba(0,0,0,.72157);line-height:24px;text-decoration:none}",""]),t.exports=e},246:function(t,e,n){"use strict";var r={props:{h1:String,h2:String}},o=(n(242),n(3)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("div",{staticClass:"container-hero grid"},[n("div",{staticClass:"grid justify-items-start"},[n("h1",{staticClass:"h3"},[t._v(t._s(t.h1))]),t._v(" "),t.h2?n("h3",{staticClass:"h1"},[t._v(t._s(t.h2))]):t._e()])])])}),[],!1,null,"05b6f733",null);e.a=component.exports},247:function(t,e,n){"use strict";var r={data:function(){return{}},methods:{logout:function(){var t=this;console.log("logout"),this.$store.dispatch("auth/logout").then((function(){t.$router.push("/odhlasenie")}))}}},o=(n(244),n(3)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("div",{staticClass:"container-standard grid justify-items-end"},[n("div",{staticClass:"flex wrap align-items-center justify-content-space-between"},[n("div",{staticClass:"nav"},[n("ul",{staticClass:"flex wrap show-md align-items-center"},[n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/orders"}},[t._v("Objednávky")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/categories"}},[t._v("Kategórie")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/tags"}},[t._v("Značky")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/titles"}},[t._v("Knižné tituly")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/stock"}},[t._v("Sklad")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/admin/users"}},[t._v("Používatelia")])],1)])])])])])}),[],!1,null,"8e91234c",null);e.a=component.exports},339:function(t,e,n){"use strict";n.r(e);n(16);var r=n(2),o=n(247),l=n(246),c=(n(54),{props:{date:String},data:function(){return{}},methods:{dateFormat:function(t){var e=t.split(" "),time=(t=e[0].split("-"),e[1]),n=[t[2],t[1],t[0]].join(".");return n=n+" "+time}}}),d=n(3),v={props:["userList"],components:{DateFormat:Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"dateformat"},[e("span",{staticClass:"tag gray"},[this._v("\n        "+this._s(this.dateFormat(this.date))+"\n    ")])])}),[],!1,null,"504f6eba",null).exports},data:function(){return{}},methods:{deleteButton:function(data){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("user/deleteItem",data);case 2:case"end":return e.stop()}}),e)})))()}}},m=Object(d.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("div",{staticClass:"container-standard grid"},[n("div",{staticClass:"grid gap-40"},[n("div",{staticClass:"grid md-col-2 align-items-center"},[n("h2",[t._v("Zoznam")]),t._v(" "),n("nuxt-link",{staticClass:"button cta black justify-self-end",attrs:{to:"/admin/users/add"}},[t._v("Nový používateľ")])],1),t._v(" "),n("div",{staticClass:"grid gap-5 auto "},[n("div",{staticClass:"table-wrapper justify-content-start"},[n("div",{staticClass:"table grid auto col-6"},[t._m(0),t._v(" "),t._l(t.userList.data,(function(e){return n("div",{key:e.id,staticClass:"table-row"},[n("div",[n("p",{staticClass:"strong"},[t._v(t._s(e.email))])]),t._v(" "),n("div",[n("p",[t._v(t._s(e.name))])]),t._v(" "),n("div",[n("p",[t._v(t._s(e.surname))])]),t._v(" "),n("div",[n("DateFormat",{attrs:{date:e.created_at}})],1),t._v(" "),n("div",[n("DateFormat",{attrs:{date:e.last_online_at}})],1),t._v(" "),n("div",{staticClass:"grid col-2 auto gap-5 justify-content-start justify-items-start"},[n("nuxt-link",{staticClass:"button cta small white",attrs:{to:"/admin/users/detail/"+e.id}},[t._v("Upraviť")])],1)])}))],2)])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-head"},[n("div",[t._v("Názov")]),t._v(" "),n("div",[t._v("Meno")]),t._v(" "),n("div",[t._v("Priezvisko")]),t._v(" "),n("div",[t._v("Dátum registrácie")]),t._v(" "),n("div",[t._v("Posledné prihlásenie")]),t._v(" "),n("div",[t._v("Akcia")])])}],!1,null,"62566624",null).exports,f={layout:"defaultAdmin",components:{SubNav:o.a,Hero:l.a,ListAll:m},data:function(){return{userList:this.$store.state.user.dataListFiltered}},fetch:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,e.next=3,n.dispatch("user/getDataList");case 3:case"end":return e.stop()}}),e)})))()},methods:{filterChange:function(){this.userList=this.$store.state.user.dataListFiltered}}},_=Object(d.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("SubNav"),this._v(" "),e("Hero",{attrs:{h1:"Administrácia",h2:"Používatelia"}}),this._v(" "),e("ListAll",{attrs:{userList:this.userList}})],1)}),[],!1,null,null,null);e.default=_.exports}}]);