(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{335:function(t,e,n){var content=n(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("5cbcfdc4",content,!0,{sourceMap:!1})},336:function(t,e,n){var content=n(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("514adeb3",content,!0,{sourceMap:!1})},349:function(t,e,n){"use strict";n(335)},350:function(t,e,n){var o=n(11)(!1);o.push([t.i,".component[data-v-56dfa576]{padding:1px;background-color:rgba(255,212,1,.25098);border-bottom:10px solid #ffd401}",""]),t.exports=o},351:function(t,e,n){"use strict";n(336)},352:function(t,e,n){var o=n(11)(!1);o.push([t.i,".component[data-v-3a7b95ec]{background-color:#fff;box-shadow:0 .125rem .125rem rgba(0,0,0,.1);border-top:1px solid #eee;position:relative}.container-standard[data-v-3a7b95ec]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}.container-standard>div.flex[data-v-3a7b95ec]{height:100%}.nav>ul[data-v-3a7b95ec]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-3a7b95ec]{padding:10px 16px;border-bottom:1px solid transparent;position:relative;top:0;transition:.2s;display:inline-block;color:#000}.nav>ul>li>a[data-v-3a7b95ec]:hover{color:#000;text-decoration:none;position:relative;top:2px}.nav>ul>li>a.nuxt-link-active[data-v-3a7b95ec],.nav>ul>li>a.nuxt-link-exact-active[data-v-3a7b95ec]{color:#000;text-decoration:none;font-weight:600}.nav>ul>li>a[data-v-3a7b95ec]{color:rgba(0,0,0,.72157);line-height:24px;text-decoration:none}",""]),t.exports=o},354:function(t,e,n){"use strict";var o={props:{h1:String,h2:String}},r=(n(349),n(6)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("div",{staticClass:"container-hero grid"},[n("div",{staticClass:"grid justify-items-start"},[n("h3",{staticClass:"h3"},[t._v(t._s(t.h1))]),t._v(" "),t.h2?n("h1",{staticClass:"h1"},[t._v(t._s(t.h2))]):t._e()])])])}),[],!1,null,"56dfa576",null);e.a=component.exports},355:function(t,e,n){"use strict";var o={data:function(){return{}},methods:{logout:function(){var t=this;console.log("logout"),this.$store.dispatch("auth/logout").then((function(){t.$router.push("/odhlasenie")}))}}},r=(n(351),n(6)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("div",{staticClass:"container-standard grid justify-items-end"},[n("div",{staticClass:"flex wrap align-items-center justify-content-space-between"},[n("div",{staticClass:"nav"},[n("ul",{staticClass:"flex wrap show-md align-items-center"},[n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/user/account/settings"}},[t._v("Nastavenia")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/user/account/subscription"}},[t._v("Predplatné")])],1),t._v(" "),n("li",[n("nuxt-link",{staticClass:"small",attrs:{to:"/user/account/credits"}},[t._v("Kredity")])],1),t._v(" "),n("li",[n("a",{staticClass:"small",on:{click:function(e){return e.preventDefault(),t.logout()}}},[t._v("Odhlásiť sa")])])])])])])])}),[],!1,null,"3a7b95ec",null);e.a=component.exports},361:function(t,e,n){var content=n(372);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("ba6e792a",content,!0,{sourceMap:!1})},362:function(t,e,n){t.exports=n.p+"img/icon-money.13a62f1.svg"},371:function(t,e,n){"use strict";n(361)},372:function(t,e,n){var o=n(11)(!1);o.push([t.i,".tag[data-v-259a6f86]{display:inline-block;text-align:center}",""]),t.exports=o},374:function(t,e,n){"use strict";n(16),n(73),n(132);var o={props:{date:String,format:String,classes:String},data:function(){return{}},methods:{dateFormat:function(){if(null===this.date||void 0===this.date)return"0";var t,e=this.date.split(" "),n=e[0].split("-"),time=e[1],o=[n[2],n[1],n[0]].join(".");return"date"===this.format&&(t=o),"time"===this.format&&(t=time),"datetime"===this.format&&(t=o+" "+time),t}}},r=(n(371),n(6)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{class:t.classes},[t._v("\n        "+t._s(t.dateFormat())+"\n    ")])}),[],!1,null,"259a6f86",null);e.a=component.exports},379:function(t,e,n){t.exports=n.p+"img/icon-arrow-down.6ac47ca.svg"},400:function(t,e,n){var content=n(450);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("6590b2af",content,!0,{sourceMap:!1})},449:function(t,e,n){"use strict";n(400)},450:function(t,e,n){var o=n(11)(!1);o.push([t.i,".box[data-v-68686dc7]{background-color:#f7f7f7;border-bottom:6px solid #eee;padding:40px;border-radius:4px}.icon-money[data-v-68686dc7]{height:10px;border-radius:0}.showmore[data-v-68686dc7]:hover{background-color:#eee}",""]),t.exports=o},496:function(t,e,n){"use strict";n.r(e);var o=n(354),r=n(355),c=n(1),l=(n(20),{components:{DateFormat:n(374).a},data:function(){return{showMore:!1}},methods:{checkout:function(data){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Stripe("pk_test_yeFEo6pqzWldc5k7AywPK6FZ00waY9xJ9L"),console.log(data.price_id),e.next=4,t.$axios.$post("stripe/payment/subscription",{price_id:data.price_id}).then((function(t){return console.log(t),t})).then((function(t){return n.redirectToCheckout({sessionId:t.session_id})})).then((function(t){t.error&&console.log(t.error.message)})).catch((function(t){console.error("Error:",t)}));case 4:case"end":return e.stop()}}),e)})))()},portal:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$post("/stripe/portal",{}).then((function(t){return console.log(t),t})).then((function(t){window.location.href=t.portal_url})).then((function(t){t.error&&console.log(t.error.message)})).catch((function(t){console.error("Error:",t)}));case 2:case"end":return e.stop()}}),e)})))()}}}),v=(n(449),n(6)),d=Object(v.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"component"},[o("div",{staticClass:"container-standard grid"},[o("div",{staticClass:"grid col-1 gap-60 align-items-start"},[o("div",{staticClass:"grid gap-20 md-col-3"},[t.$store.state.auth.userData.subscription_plan_name&&null===t.$store.state.auth.userData.subscription_canceled_at?o("div",{staticClass:"grid gap-10 box-form align-content-start"},[o("p",{staticClass:"h4"},[t._v("Aktívny plán")]),t._v(" "),o("p",{staticClass:"h1"},[t._v(t._s(t.$store.state.auth.userData.subscription_plan_name))]),t._v(" "),o("div",{staticClass:"hr mb10"}),t._v(" "),o("div",{staticClass:"grid gap-10 col-2 auto justify-content-start align-items-center"},[o("p",{staticClass:"strong"},[t._v("Platba:")]),t._v(" "),"Zvedavec"==t.$store.state.auth.userData.subscription_plan_name?o("p",[t._v("9.99 € / mesiac")]):t._e(),t._v(" "),"Čitateľ"==t.$store.state.auth.userData.subscription_plan_name?o("p",[t._v("59.00 € / rok")]):t._e(),t._v(" "),"Knihomoľ"==t.$store.state.auth.userData.subscription_plan_name?o("p",[t._v("99.00 € / rok")]):t._e()]),t._v(" "),o("div",{staticClass:"grid gap-10 col-2 auto justify-content-start align-items-center"},[o("p",{staticClass:"strong"},[t._v("Platí od:")]),t._v(" "),o("div",[o("DateFormat",{attrs:{date:t.$store.state.auth.userData.subscription_started_at,format:"date"}})],1)]),t._v(" "),o("div",{staticClass:"grid gap-10 col-2 auto justify-content-start align-items-center"},[o("p",{staticClass:"strong"},[t._v("Koniec platnosti:")]),t._v(" "),o("div",[o("DateFormat",{attrs:{date:t.$store.state.auth.userData.subscription_expires_at,format:"date"}})],1)]),t._v(" "),t.$store.state.auth.userData.subscription_canceled_at?o("div",{staticClass:"grid justify-content-start align-items-center"},[o("p",{staticClass:"strong error p0"},[t._v("Predplatné si prerušil "),o("DateFormat",{attrs:{date:t.$store.state.auth.userData.subscription_canceled_at,format:"date"}}),t._v(".")],1)]):t._e(),t._v(" "),o("div",{staticClass:"hr"}),t._v(" "),o("div",[o("button",{staticClass:"align-self-end button cta black",on:{click:function(e){return t.portal()}}},[t._v(" Upraviť predplatné")])])]):t._e(),t._v(" "),null===t.$store.state.auth.userData.subscription_plan_name?o("div",{staticClass:"grid gap-10 box-form align-content-start"},[o("p",{staticClass:"h4"},[t._v("Aktívny plán")]),t._v(" "),o("p",{staticClass:"h1"},[t._v("Bez plánu")]),t._v(" "),o("div",{staticClass:"hr mb10"}),t._v(" "),o("div",{staticClass:"grid gap-10 justify-content-start align-items-center"},[o("p",{staticClass:"small"},[t._v("Bez aktívneho plánu si nemôžeš požičiavať knižky.")]),t._v(" "),o("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#plans",easing:"ease-in",offset:0,force:!0,cancelable:!0,x:!1,y:!0},expression:"{\n\t\t\t\t\t\t\t\tel: '#plans',\n\t\t\t\t\t\t\t\teasing: 'ease-in',\n\t\t\t\t\t\t\t\toffset: 0,\n\t\t\t\t\t\t\t\tforce: true,\n\t\t\t\t\t\t\t\tcancelable: true,\n\t\t\t\t\t\t\t\t//onStart: onStart,\n\t\t\t\t\t\t\t\t//onDone: onDone,\n\t\t\t\t\t\t\t\t//onCancel: onCancel,\n\t\t\t\t\t\t\t\tx: false,\n\t\t\t\t\t\t\t\ty: true\n\t\t\t\t\t\t}"}],staticClass:"button cta black justify-self-start"},[t._v("Vybrať plán predplatného")])])]):t._e(),t._v(" "),t.$store.state.auth.userData.subscription_canceled_at?o("div",{staticClass:"grid gap-10 box-form align-content-start"},[o("p",{staticClass:"h4"},[t._v("Aktívny plán")]),t._v(" "),o("p",{staticClass:"h1"},[t._v(t._s(t.$store.state.auth.userData.subscription_plan_name))]),t._v(" "),o("div",{staticClass:"hr mb10"}),t._v(" "),t.$store.state.auth.userData.subscription_canceled_at?o("div",{staticClass:"grid justify-content-start align-items-center"},[o("p",{staticClass:"error p0"},[t._v("Predplatné je zrušené. Plán môžeš využívať do "),o("DateFormat",{attrs:{date:t.$store.state.auth.userData.subscription_expires_at,format:"date",classes:"strong"}}),t._v("kedy vyprší tvoje predplatené obdobie.")],1),t._v(" "),o("p",{staticClass:"p0 mt20"},[t._v("Predplatné a automatickú platbu môžeš kedykoľvek obnoviť.")])]):t._e(),t._v(" "),o("div",{staticClass:"hr"}),t._v(" "),o("div",[o("button",{staticClass:"align-self-end button cta black",on:{click:function(e){return t.portal()}}},[t._v(" Obnoviť predplatné")])])]):t._e()]),t._v(" "),o("div",{staticClass:"box grid gap-10 showmore pointer",on:{click:function(e){e.preventDefault(),t.showMore=!t.showMore}}},[o("div",{staticClass:"grid align-items-center col-2 auto justify-content-space-between gap-10"},[o("h4",[t._v("Ako funguje predplatné?")]),t._v(" "),o("div",{staticClass:"grid align-items-center col-2 auto justify-content-space-between gap-10"},[o("p",{directives:[{name:"show",rawName:"v-show",value:!t.showMore,expression:"!showMore"}],staticClass:"small strong"},[t._v("viac")]),t._v(" "),o("p",{directives:[{name:"show",rawName:"v-show",value:t.showMore,expression:"showMore"}],staticClass:"small strong"},[t._v("menej")]),t._v(" "),o("img",{staticClass:"icon",attrs:{src:n(379),alt:""}})])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showMore,expression:"showMore"}],staticClass:"grid gap-10 mt10"},[o("p",[t._v("Ak si chceš požičiavať knižky, potrebuješ mať aktívny jeden z plánov predplatného.")]),t._v(" "),o("p",[t._v('Aktivovaním ktoréhokoľvek plánu predplatného sa ti okamžite odomknú všetky benefity plynúce z popisu plánu. Ak si aktivuješ plán "Čitateľ" alebo plán "Knihomoľ" k dispozícií dostaneš kredity navyše, ktoré budeš môcť používať na vypožičanie knižiek po celú dobu predplatného. Ak sa rozhodneš predplatený plán zrušiť, tieto kredity už viac nebudeš mať k dispozícií.')]),t._v(" "),o("p",[t._v('Predplatné sa automaticky predlžuje. Predplatné a automatické predlžovanie, je možné kedykoľvek zrušiť. Benefity plánu predplatného budú deaktivované až po uplynutí posledného dňa predplatenej doby (tzn. ak zaplatíš za plán "Knihomoľ" a hneď po tom zrušíš predplatné, benefity tohto plánu sa deaktivujú až o 365 dní). ')])])]),t._v(" "),o("div",{staticClass:"grid gap-20"},[t._m(0),t._v(" "),o("div",{staticClass:"grid col-3 gap-20 justify-content-start auto"},[o("div",{staticClass:"box-form grid gap-10"},[t._m(1),t._v(" "),t.$store.state.auth.userData.subscription_plan_name?t._e():o("button",{staticClass:"align-self-end button cta black grid align-items-center col-2 auto justify-content-center gap-10",on:{click:function(e){return t.checkout({price_id:"price_1ITEofJ6MYnVMg48bMamiRjJ"})}}},[o("img",{staticClass:"icon-money",attrs:{src:n(362),alt:""}}),t._v(" Predplatiť")])]),t._v(" "),o("div",{staticClass:"box-form grid gap-10"},[t._m(2),t._v(" "),t.$store.state.auth.userData.subscription_plan_name?t._e():o("button",{staticClass:"align-self-end button cta black grid align-items-center col-2 auto justify-content-center gap-10",on:{click:function(e){return t.checkout({price_id:"price_1ITEp8J6MYnVMg48ImRHapa0"})}}},[o("img",{staticClass:"icon-money",attrs:{src:n(362),alt:""}}),t._v(" Predplatiť")])]),t._v(" "),o("div",{staticClass:"box-form grid gap-10"},[t._m(3),t._v(" "),t.$store.state.auth.userData.subscription_plan_name?t._e():o("button",{staticClass:"align-self-end button cta black grid align-items-center col-2 auto justify-content-center gap-10",on:{click:function(e){return t.checkout({price_id:"price_1ITEpUJ6MYnVMg48uzEvWQYy"})}}},[o("img",{staticClass:"icon-money",attrs:{src:n(362),alt:""}}),t._v(" Predplatiť")])])]),t._v(" "),t._m(4)])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid gap-10"},[n("h2",{attrs:{id:"plans"}},[t._v("Plány predplatného")]),t._v(" "),n("p",[t._v("Vyber si plán predplatného, ktorý ti najviac vyhovuje.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid gap-20 align-content-start"},[n("h3",[t._v("Zvedavec")]),t._v(" "),n("div",{staticClass:"grid gap-10 col-2 auto justify-content-start align-items-center"},[n("p",{staticClass:"h1"},[t._v("4.99 €")]),t._v(" "),n("p",[t._v(" / mesiac")])]),t._v(" "),n("div",{staticClass:"hr"}),t._v(" "),n("p",{},[t._v("Ideálne, ak si chceš vyskúšať ako funguje online požičiavanie knižiek. ")]),t._v(" "),n("ul",{staticClass:"ml20 mb40"},[n("li",[n("p",{},[t._v("Doprava a vrátenie zadarmo")])]),t._v(" "),n("li",[n("p",{},[t._v("Max. 1 objednávka za mesiac")])]),t._v(" "),n("li",[n("p",{},[t._v("Max. 1 kniha v objednávke")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid gap-20 align-content-start"},[n("h3",[t._v("Čitateľ")]),t._v(" "),n("div",{staticClass:"grid gap-10 col-2 auto justify-content-start align-items-center"},[n("p",{staticClass:"h1"},[t._v("59.00 €")]),t._v(" "),n("p",[t._v(" / rok")])]),t._v(" "),n("div",{staticClass:"hr"}),t._v(" "),n("p",{},[t._v("Predplať si Túlavé knižky na celý rok a získaj navyše 15 kreditov na vypožičanie knižiek.")]),t._v(" "),n("ul",{staticClass:"ml20"},[n("li",[n("p",{},[t._v("Doprava a vrátenie zadarmo")])]),t._v(" "),n("li",[n("p",{},[t._v("Max. 1 objednávka za mesiac")])]),t._v(" "),n("li",[n("p",{},[t._v("Max. 2 knižky v objednávke")])]),t._v(" "),n("li",[n("p",{},[t._v("+ 15 kreditov")])])]),t._v(" "),n("ul",{staticClass:"ml20 mb40"},[n("li",[n("p",{},[t._v("Hodnotenie knižiek a komentáre")])]),t._v(" "),n("li",[n("p",{},[t._v("Možnosť predĺženia výpožičnej doby o ďalších 15 dní")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid gap-20 align-content-start"},[n("h3",[t._v("Knihomoľ")]),t._v(" "),n("div",{staticClass:"grid gap-10 col-2 auto justify-content-start align-items-center"},[n("p",{staticClass:"h1"},[t._v("99.00 €")]),t._v(" "),n("p",[t._v(" / rok")])]),t._v(" "),n("div",{staticClass:"hr"}),t._v(" "),n("p",{},[t._v("Ak chceš mať neustály prísun kníh na čítanie, tak určite oceníš možnosť prednostnej rezervacie knižiek a automatického odoslania knižiek bez nutnosti objednania.")]),t._v(" "),n("ul",{staticClass:"ml20"},[n("li",[n("p",{},[t._v("Doprava a vrátenie zadarmo")])]),t._v(" "),n("li",[n("p",{},[t._v("Max. 2 objednávky za mesiac")])]),t._v(" "),n("li",[n("p",{},[t._v("Max. 2 knižky v objednávke")])]),t._v(" "),n("li",[n("p",{},[t._v("+ 20 kreditov")])])]),t._v(" "),n("ul",{staticClass:"ml20 mb40"},[n("li",[n("p",{},[t._v("Hodnotenie knižiek a komentáre")])]),t._v(" "),n("li",[n("p",{},[t._v("Možnosť predĺženia výpožičnej doby o ďalších 30 dní")])]),t._v(" "),n("li",[n("p",{},[t._v("Rezervácia knižiek a automatické odoslanie bez nutnosti objednania")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid gap-10"},[n("p",{staticClass:"small text-center"},[t._v('Platba cez zabezpečenú platobnú bránu "Stripe"')])])}],!1,null,"68686dc7",null).exports,_={layout:"defaultUser",components:{SubNav:r.a,Hero:o.a,Payment:d}},m=Object(v.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("SubNav"),t._v(" "),n("Hero",{attrs:{h1:"Môj účet",h2:"Predplatné"}}),t._v(" "),n("Payment")],1)}),[],!1,null,null,null);e.default=m.exports}}]);