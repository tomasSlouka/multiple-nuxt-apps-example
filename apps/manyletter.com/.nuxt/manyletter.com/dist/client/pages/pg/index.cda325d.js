(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{544:function(t,e,r){"use strict";r.r(e);r(22);var n=r(5),o={layout:"default-page",components:{},data:function(){return{url:"https://manyletter.com/",scrapeData:""}},methods:{scrapePage:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$post("/api/maylday/pg/scrape",{url:t.url}).then((function(e){console.log(e),t.scrapeData=e.data}),(function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}}},c=r(2),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.scrapePage()}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],attrs:{type:"text",placeholder:"url"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}}),t._v(" "),r("button",{staticClass:"cta",attrs:{type:"submit"}},[t._v("Scrape")])]),t._v(" "),r("div",[t._v(t._s(t.url))]),t._v(" "),r("pre",[t._v(t._s(t.scrapeData))])])}),[],!1,null,"175fb1da",null);e.default=component.exports}}]);