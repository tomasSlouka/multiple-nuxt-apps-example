(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{277:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},278:function(t,e,r){t.exports=r.p+"img/newsletter-cover.6d8a1d0.jpg"},346:function(t,e,r){var content=r(488);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(4).default)("eec4ccba",content,!0,{sourceMap:!1})},487:function(t,e,r){"use strict";var n=r(346);r.n(n).a},488:function(t,e,r){var n=r(3),o=r(277),c=r(278);e=n(!1);var l=o(c);e.push([t.i,".box[data-v-28e45e1e]{padding:0;transition:all .6s cubic-bezier(.165,.84,.44,1)}.box[data-v-28e45e1e]:hover{transform:scale(1.02)}.newsletter>.cover[data-v-28e45e1e]{width:100%;height:130px;background-color:#fff;border-bottom:1px solid #f5f5f5;border-radius:8px 8px 0 0;background-image:url("+l+");background-size:cover;background-position:50%}.newsletter .header[data-v-28e45e1e]{position:relative;padding:10px 30px 30px}.newsletter .header>.avatar[data-v-28e45e1e]{position:relative;width:80px}.newsletter .header>.avatar>div[data-v-28e45e1e]{position:absolute;top:-40px;left:0;background-color:#eee;background-size:cover;background-position:50%;border-radius:100px;border:5px solid #fff;height:80px;width:80px;padding:7px}.newsletter>.body[data-v-28e45e1e]{padding:20px 30px 30px}",""]),t.exports=e},528:function(t,e,r){"use strict";r.r(e);r(22);var n=r(5),o={},c=r(2),l=Object(c.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"newsletter-Newsletter"}},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"container-narrow grid gap-20"},[e("h2",[this._v("Your subscriptions")]),this._v(" "),e("p",[this._v("Manage your subscriptions, unsubscribe from newsletters, rate newsletter creators, see the history of newsletter messages.")])])])])}],!1,null,"96f1394c",null).exports,d={props:["newsletterList"]},v=(r(487),{}),f={layout:"default-admin-subscriber",components:{Subscriptions:l,Newsletters:Object(c.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"component grid gap-20"},[r("div",{staticClass:"grid gap-20 md-col-2"},t._l(t.newsletterList.data,(function(e){return r("div",{key:e.id,staticClass:"grid box"},[r("nuxt-link",{staticClass:"grid pointer newsletter align-content-start",attrs:{to:"/admin/subscriber/subscriptions/newsletters/detail/"+e.id,tag:"div"}},[r("div",{staticClass:"cover",style:"background-image: url(https://storage.manyletter.com/ymello_filestorage/img/newsletter_cover/"+e.cover+")"}),t._v(" "),r("div",{staticClass:"header grid gap-20"},[r("div",{staticClass:"avatar"},[r("div",{style:"background-image: url(https://storage.manyletter.com/ymello_filestorage/img/newsletter_avatar/"+e.avatar+")"})])]),t._v(" "),r("div",{staticClass:"body grid gap-20 auto align-items-start justify-items-start justify-content-start"},[r("div",{staticClass:"grid gap-20"},[r("div",[r("h3",[t._v(t._s(e.title))]),t._v(" "),r("p",{staticClass:"font14"},[t._v("created by "),r("span",{staticClass:"strong"},[t._v(t._s(e.creator_name))])])]),t._v(" "),r("p",{staticClass:"thin"},[t._v(t._s(e.intro))]),t._v(" "),r("div",{staticClass:"grid gap-10 auto col-2 justify-content-start justify-items-start"},[r("p",{},[r("span",{staticClass:"strong"},[t._v(t._s(e.subscribers_count))]),t._v(" subscribers ")]),t._v(" "),r("p",{},[r("span",{staticClass:"strong"},[t._v(t._s(e.messages_count))]),t._v(" messages ")])])])])])],1)})),0)])}),[],!1,null,"28e45e1e",null).exports,FindNewNewsletters:Object(c.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"component grid gap-20"},[e("div",{staticClass:"box grid gap-20 justify-items-center"},[e("h3",[this._v("Find newsletters to subscribe to")]),this._v(" "),e("p",{staticClass:"text-center"},[this._v("Find out more interesting collections of newsletters in ManyLetter.")]),this._v(" "),e("div",[e("nuxt-link",{staticClass:"cta",attrs:{to:"/admin/subscriber/subscriptions/newsletters",tag:"button"}},[this._v("Browse newsletters")])],1)])])}),[],!1,null,"09ee86a7",null).exports},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,e.next=3,r.$get("/api/maylday/newsletter/all/subscriber");case 3:return n=e.sent,e.abrupt("return",{newsletterList:n});case 5:case"end":return e.stop()}}),e)})))()}},_=Object(c.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("Subscriptions"),this._v(" "),e("div",{staticClass:"container-narrow grid gap-60"},[this.newsletterList.count>0?e("Newsletters",{attrs:{newsletterList:this.newsletterList}}):this._e(),this._v(" "),e("FindNewNewsletters")],1)],1)}),[],!1,null,"6de8c51f",null);e.default=_.exports}}]);