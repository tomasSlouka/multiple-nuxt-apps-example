(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{338:function(t,e,r){var content=r(472);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(4).default)("c256191e",content,!0,{sourceMap:!1})},339:function(t,e,r){var content=r(474);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(4).default)("00c3526c",content,!0,{sourceMap:!1})},340:function(t,e,r){var content=r(476);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(4).default)("9161d47e",content,!0,{sourceMap:!1})},341:function(t,e,r){var content=r(478);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(4).default)("b7f49ce8",content,!0,{sourceMap:!1})},342:function(t,e,r){var content=r(480);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(4).default)("3fb31034",content,!0,{sourceMap:!1})},343:function(t,e,r){var content=r(482);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(4).default)("44bfc854",content,!0,{sourceMap:!1})},471:function(t,e,r){"use strict";var n=r(338);r.n(n).a},472:function(t,e,r){(e=r(3)(!1)).push([t.i,".newsletter_name[data-v-394faed4]{color:#000;font-weight:600}",""]),t.exports=e},473:function(t,e,r){"use strict";var n=r(339);r.n(n).a},474:function(t,e,r){(e=r(3)(!1)).push([t.i,".avatar[data-v-aa2d81ee]{height:100px;width:100px;border-radius:100px}.avatar[data-v-aa2d81ee],.cover[data-v-aa2d81ee]{background-repeat:no-repeat;background-position:50%;background-size:cover;cursor:pointer;background-color:#eee}.cover[data-v-aa2d81ee]{height:180px;border-radius:4px}.flex>button.tag[data-v-aa2d81ee]{margin:3px;border:1px solid #eee;background-color:#fff;padding:10px 15px;color:#000;border-radius:4px;cursor:pointer}.flex>button.tag.active[data-v-aa2d81ee],.flex>button.tag[data-v-aa2d81ee]:hover{border:1px solid #000;background-color:#000;color:#fff}",""]),t.exports=e},475:function(t,e,r){"use strict";var n=r(340);r.n(n).a},476:function(t,e,r){(e=r(3)(!1)).push([t.i,"p.token[data-v-2d9467b4]{display:table;table-layout:fixed;width:100%;word-wrap:break-word}p.social[data-v-2d9467b4]{background:#fff;border-radius:20px;height:40px;width:40px;display:grid;justify-items:center;align-items:center;box-shadow:0 1px 6px 0 rgba(14,30,37,.12);color:#000;cursor:pointer;font-size:20px}p.social.facebook[data-v-2d9467b4]:hover{color:#3b5998}p.social.twitter[data-v-2d9467b4]:hover{color:#00acee}p.social.instagram[data-v-2d9467b4]:hover{color:#e1306c}ul[data-v-2d9467b4]{margin-left:20px}",""]),t.exports=e},477:function(t,e,r){"use strict";var n=r(341);r.n(n).a},478:function(t,e,r){(e=r(3)(!1)).push([t.i,".token[data-v-7a485fca]{word-wrap:break-word}",""]),t.exports=e},479:function(t,e,r){"use strict";var n=r(342);r.n(n).a},480:function(t,e,r){(e=r(3)(!1)).push([t.i,".token[data-v-6182f028]{word-wrap:break-word}",""]),t.exports=e},481:function(t,e,r){"use strict";var n=r(343);r.n(n).a},482:function(t,e,r){(e=r(3)(!1)).push([t.i,".danger-zone[data-v-425500be]{border:1px solid rgba(215,58,74,.48627)}",""]),t.exports=e},516:function(t,e,r){"use strict";r.r(e);r(23),r(14),r(32);var n=r(42),o=(r(22),r(5)),l={},c=(r(471),r(2)),v=Object(c.a)(l,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"Settings"}},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"container-narrow grid gap-20"},[e("h2",[this._v("Settings")]),this._v(" "),e("p",[this._v("Edit details of your newsletter. Invite your team members who can manage Manyletter. Find out information about your subscription plan, discounts and payments. Import / Export your newsletter subscriber.")])])])])}],!1,null,"394faed4",null).exports,d=(r(24),r(51),{props:["newsletterData","tagList"],data:function(){return{submitSuccess:!1,avatar:this.newsletterData.avatar,cover:this.newsletterData.cover,title:this.newsletterData.title,intro:this.newsletterData.intro,description:this.newsletterData.description,creator_name:this.newsletterData.creator_name,email:this.newsletterData.email,url:this.newsletterData.url,access:this.newsletterData.access,tags:null===this.newsletterData.tags?[]:this.newsletterData.tags.split(","),selectedFileAvatar:null,selectedFileUrlAvatar:null,showSaveAvatar:!1,saveTextAvatar:"Save",selectedFileCover:null,selectedFileUrlCover:null,showSaveCover:!1,saveTextCover:"Save",charCounterIntro:this.newsletterData.intro.length,charCounterLong:this.newsletterData.description.length}},methods:{charCountIntro:function(){this.charCounterIntro=this.intro.length},charCountLong:function(){this.charCounterLong=this.description.length},onFileSelectedAvatar:function(t){this.selectedFileAvatar=t.target.files[0],this.selectedFileUrlAvatar=URL.createObjectURL(this.selectedFileAvatar),this.showSaveAvatar=!0},onCancelAvatar:function(){this.selectedFileAvatar=null,this.selectedFileUrlAvatar=null,this.showSaveAvatar=!1},onUploadAvatar:function(){var t=this,e=new FormData;e.append("myFile",this.selectedFileAvatar,this.selectedFileAvatar.name),e.append("newsletter_id",this.$store.state.userData.newsletter_id),this.$axios.$post("/api/maylday/upload/newsletter-avatar",e,{onUploadProgress:function(e){t.saveTextAvatar=Math.round(e.loaded/e.total*100)+"%"}}).then((function(e){t.$store.dispatch("setUser"),t.showSaveAvatar=!1,t.saveTextAvatar="Save",console.log(e)}),(function(t){console.log(t)}))},onFileSelectedCover:function(t){this.selectedFileCover=t.target.files[0],this.selectedFileUrlCover=URL.createObjectURL(this.selectedFileCover),this.showSaveCover=!0},onCancelCover:function(){this.selectedFileCover=null,this.selectedFileUrlCover=null,this.showSaveCover=!1},onUploadCover:function(){var t=this,e=new FormData;e.append("myFile",this.selectedFileCover,this.selectedFileCover.name),e.append("newsletter_id",this.$store.state.userData.newsletter_id),this.$axios.$post("/api/maylday/upload/newsletter-cover",e,{onUploadProgress:function(e){t.saveTextCover=Math.round(e.loaded/e.total*100)+"%"}}).then((function(e){t.$store.dispatch("setUser"),t.showSaveCover=!1,t.saveTextCover="Save",console.log(e)}),(function(t){console.log(t)}))},updateTag:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$axios.$put("/api/maylday/newsletter/tag",{id:e.$store.state.userData.newsletter_id,tag_id:t}).then((function(r){console.log(r.message),"added"===r.message&&e.tags.push(t),"removed"===r.message&&(e.tags=e.tags.filter((function(e){return e!==t}))),console.log(e.tags)}),(function(t){console.log(t)}));case 2:case"end":return r.stop()}}),r)})))()},submitForm:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$put("/api/maylday/newsletter",{id:t.$store.state.userData.newsletter_id,title:t.title,intro:t.intro,description:t.description,creator_name:t.creator_name,email:t.email,url:t.url,access:t.access}).then((function(e){console.log(e),t.submitSuccess=!0,setTimeout((function(){return t.submitSuccess=!1}),4e3)}),(function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}}}),m=(r(473),Object(c.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"component grid gap-20"},[r("div",{staticClass:"box grid gap-20"},[r("h3",[t._v("Newsletter details")]),t._v(" "),r("p",[t._v("Fill in your profile so other users can find you in ManyLetter and follow you.")]),t._v(" "),r("div",[r("form",{on:{submit:function(e){return e.preventDefault(),t.onUploadAvatar()}}},[r("label",{attrs:{for:"title"}},[t._v("Avatar")]),t._v(" "),r("div",{staticClass:"grid gap-20 col-2 auto justify-content-start align-items-center"},[null===t.selectedFileUrlAvatar?r("div",{staticClass:"avatar",style:"background-image: url(https://storage.manyletter.com/ymello_filestorage/img/newsletter_avatar/"+t.avatar+")",on:{click:function(e){return e.preventDefault(),t.$refs.fileInputAvatar.click()}}}):r("div",{staticClass:"avatar",style:"background-image: url("+t.selectedFileUrlAvatar+")",on:{click:function(e){return e.preventDefault(),t.$refs.fileInputAvatar.click()}}}),t._v(" "),r("div",{staticClass:"grid gap-10 auto md-col-2 justify-content-start align-items-center"},[r("button",{directives:[{name:"show",rawName:"v-show",value:t.showSaveAvatar,expression:"showSaveAvatar"}],staticClass:"cta"},[t._v(t._s(t.saveTextAvatar))]),t._v(" "),r("button",{directives:[{name:"show",rawName:"v-show",value:t.showSaveAvatar,expression:"showSaveAvatar"}],staticClass:"cta red",on:{click:function(e){return e.preventDefault(),t.onCancelAvatar()}}},[t._v("Cancel")])])]),t._v(" "),r("input",{ref:"fileInputAvatar",staticClass:"hidden",attrs:{name:"myFile",type:"file"},on:{change:function(e){return t.onFileSelectedAvatar(e)}}})])]),t._v(" "),r("div",[r("form",{on:{submit:function(e){return e.preventDefault(),t.onUploadCover()}}},[r("label",{attrs:{for:"title"}},[t._v("Cover")]),t._v(" "),r("div",{staticClass:"grid gap-20"},[null===t.selectedFileUrlCover?r("div",{staticClass:"cover",style:"background-image: url(https://storage.manyletter.com/ymello_filestorage/img/newsletter_cover/"+t.cover+")",on:{click:function(e){return e.preventDefault(),t.$refs.fileInputCover.click()}}}):r("div",{staticClass:"cover",style:"background-image: url("+t.selectedFileUrlCover+")",on:{click:function(e){return e.preventDefault(),t.$refs.fileInputCover.click()}}}),t._v(" "),r("div",{staticClass:"grid gap-10 col-2 auto justify-content-start align-items-center"},[r("button",{directives:[{name:"show",rawName:"v-show",value:t.showSaveCover,expression:"showSaveCover"}],staticClass:"cta"},[t._v(t._s(t.saveTextCover))]),t._v(" "),r("button",{directives:[{name:"show",rawName:"v-show",value:t.showSaveCover,expression:"showSaveCover"}],staticClass:"cta red",on:{click:function(e){return e.preventDefault(),t.onCancelCover()}}},[t._v("Cancel")])])]),t._v(" "),r("input",{ref:"fileInputCover",staticClass:"hidden",attrs:{name:"myFile",type:"file"},on:{change:function(e){return t.onFileSelectedCover(e)}}})])]),t._v(" "),r("form",{staticClass:"grid gap-20 ",on:{submit:function(e){return e.preventDefault(),t.submitForm()}}},[r("div",{staticClass:"grid gap-20"},[r("div",[r("label",{attrs:{for:"title"}},[t._v("Newsletter name *")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),r("div",[r("label",{attrs:{for:"title"}},[t._v("Short intro *")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.intro,expression:"intro"}],attrs:{maxlength:"255",type:"text",name:"intro"},domProps:{value:t.intro},on:{keyup:function(e){return t.charCountIntro()},input:function(e){e.target.composing||(t.intro=e.target.value)}}}),t._v(" "),r("p",{staticClass:"char-counter"},[t._v(t._s(t.charCounterIntro)+" / 255")])]),t._v(" "),r("div",[r("label",{attrs:{for:"title"}},[t._v("Description *")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{maxlength:"1000",type:"text",name:"description"},domProps:{value:t.description},on:{keyup:function(e){return t.charCountLong()},input:function(e){e.target.composing||(t.description=e.target.value)}}}),t._v(" "),r("p",{staticClass:"char-counter"},[t._v(t._s(t.charCounterLong)+" / 1000")])]),t._v(" "),r("div",[r("label",{attrs:{for:"title"}},[t._v("Creator name *")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.creator_name,expression:"creator_name"}],attrs:{type:"text",name:"creator_name"},domProps:{value:t.creator_name},on:{input:function(e){e.target.composing||(t.creator_name=e.target.value)}}})]),t._v(" "),r("div",[r("label",{attrs:{for:"title"}},[t._v("Newsletter email *")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",name:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),r("div",[r("label",{attrs:{for:"title"}},[t._v("Newsletter url link *")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],attrs:{type:"text",name:"url"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}})]),t._v(" "),r("div",[r("label",{attrs:{for:"title"}},[t._v("Newsletter visibility")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.access,expression:"access"}],attrs:{type:"text",name:"access"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.access=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"0"}},[t._v("hidden")]),t._v(" "),r("option",{attrs:{value:"1"}},[t._v("visible")])])]),t._v(" "),r("div",{staticClass:"hr"}),t._v(" "),r("h4",[t._v("Tags")]),t._v(" "),r("div",{staticClass:"flex wrap"},t._l(t.tagList.data,(function(e){return r("button",{key:e.id,staticClass:"tag",class:t.tags.includes(e.id)?"active":"",on:{click:function(r){return r.preventDefault(),t.updateTag(e.id)}}},[t._v(t._s(e.name))])})),0)]),t._v(" "),r("div",{staticClass:"hr"}),t._v(" "),r("div",{staticClass:"grid col-2 gap-10 auto justify-content-start align-items-center"},[r("button",{staticClass:"cta",attrs:{type:"submit"}},[t._v("Save changes")]),t._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:t.submitSuccess,expression:"submitSuccess"}],staticClass:"info"},[t._v("Saved!")])])])])])}),[],!1,null,"aa2d81ee",null).exports),f={data:function(){return{submitSuccess:!1}}},h=Object(c.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"component grid gap-20"},[r("div",{staticClass:"box grid gap-20"},[r("h3",[t._v("Team members")]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"hr"}),t._v(" "),r("form",{staticClass:"grid gap-20 ",on:{"~submit":function(e){return e.preventDefault(),t.submitForm(e)}}},[r("h4",[t._v("Add a team member")]),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"hr"}),t._v(" "),r("div",{staticClass:"grid col-2 gap-10 auto justify-content-start align-items-center"},[r("button",{staticClass:"cta",attrs:{type:"submit"}},[t._v("Invite team member")]),t._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:t.submitSuccess,expression:"submitSuccess"}],staticClass:"info"},[t._v("Saved!")])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"grid table-wrapper"},[r("div",{staticClass:"table grid auto col-3"},[r("div",{staticClass:"table-head"},[r("div",[t._v("Email")]),t._v(" "),r("div",[t._v("Type")]),t._v(" "),r("div",{staticClass:"text-center"},[t._v("Last Activity")])]),t._v(" "),r("div",{staticClass:"table-row"},[r("div",[t._v("tomas.slouka@gmail.com")]),t._v(" "),r("div",[r("span",{staticClass:"tag gray text-center"},[t._v("owner")])]),t._v(" "),r("div",{staticClass:"text-center"},[t._v("01.01.1991")])]),t._v(" "),r("div",{staticClass:"table-row"},[r("div",[t._v("slouka@upforweb.com")]),t._v(" "),r("div",[r("span",{staticClass:"tag gray text-center"},[t._v("admin")])]),t._v(" "),r("div",{staticClass:"text-center"},[t._v("01.01.1991")])]),t._v(" "),r("div",{staticClass:"table-row"},[r("div",[t._v("polak@upforweb.com")]),t._v(" "),r("div",[r("span",{staticClass:"tag gray text-center"},[t._v("member")])]),t._v(" "),r("div",{staticClass:"text-center"},[t._v("01.01.1991")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"grid gap-20"},[e("div",[e("label",{attrs:{for:"title"}},[this._v("Email address *")]),this._v(" "),e("input",{attrs:{type:"text",name:"email"}})])])}],!1,null,"33ff5888",null).exports,_={},w=(r(475),Object(c.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"component grid gap-60"},[r("div",{staticClass:"box grid gap-20"},[r("h3",[t._v("Subscription portal")]),t._v(" "),r("p",[t._v("Copy the link below to navigate your potential subscribers to your newsletter page, where they can subscribe to your newsletter with one click.")]),t._v(" "),r("div",{staticClass:"grid auto gap-40"},[r("div",{staticClass:"table grid auto"},[t._m(0),t._v(" "),r("div",{staticClass:"table-row"},[r("div",[r("p",{staticClass:"token small"},[t._v("https://manyletter.com/admin/subscriber/subscriptions/newsletters/detail/"+t._s(t.$store.state.userData.newsletter_id))])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"table-head"},[e("div",[this._v("Your newsletter page link")])])}],!1,null,"2d9467b4",null).exports),C={data:function(){return{importSubscribers:""}}},x=(r(477),Object(c.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"component grid gap-20"},[r("div",{staticClass:"box grid gap-20 locked"},[r("p",{staticClass:"note justify-self-start"},[t._v("Under development")]),t._v(" "),r("h3",[t._v("Import / Export subscribers")]),t._v(" "),r("p",[t._v("You can import your subscribers to ManyLetter and start sending messages immediately. If you ever decide that you want to leave ManyLetter, you can export your subscriber's email addresses.")]),t._v(" "),r("div",{staticClass:"grid gap-20"},[r("div",[r("label",{attrs:{for:"title"}},[t._v("Paste your subscribre's emails here (Emails have to be separated by a comma)")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.importSubscribers,expression:"importSubscribers"}],attrs:{type:"text",name:"description",placeholder:""},domProps:{value:t.importSubscribers},on:{input:function(e){e.target.composing||(t.importSubscribers=e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"hr"}),t._v(" "),r("div",[r("button",{staticClass:"cta",attrs:{type:"submit"}},[t._v("Import subscribres")]),t._v(" "),r("nuxt-link",{staticClass:"cta white justify-self-start",attrs:{tag:"button",to:"/admin/creator/settings/export"}},[t._v("Export subscribers")])],1)])])}),[],!1,null,"7a485fca",null).exports),y={},k=(r(479),Object(c.a)(y,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"component grid gap-20"},[r("div",{staticClass:"box grid gap-20 locked"},[r("p",{staticClass:"note justify-self-start"},[t._v("Under development")]),t._v(" "),r("h3",[t._v("Payment information")]),t._v(" "),r("p",[t._v("Find out information about your subscription plan. Upgrade your plan to increase the limits of subscribers count and email messages sent.")]),t._v(" "),r("div",{staticClass:"hr"}),t._v(" "),r("div",[r("button",{staticClass:"cta"},[t._v("Open the secure payment portal")])])])])}],!1,null,"6182f028",null).exports),S={methods:{deleteButton:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$delete("/api/maylday/newsletter/"+t.$store.state.userData.newsletter_id).then((function(e){console.log(e),t.$router.push({path:"/admin/home"})}),(function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}}},D=(r(481),{layout:"default-admin-creator",components:{Settings:v,Team:h,ShareSubscription:w,DangerZone:Object(c.a)(S,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"component grid gap-20 "},[r("div",{staticClass:"box grid gap-20 danger-zone"},[r("h3",[t._v("Danger zone")]),t._v(" "),r("div",{},[r("button",{staticClass:"cta red",on:{"~click":function(e){return t.deleteButton()}}},[t._v("Delete newsletter")])])])])}),[],!1,null,"425500be",null).exports,NewsletterDetails:m,PaymentInfo:k,ImportExport:x},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,l,c,v,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,o=t.store,e.next=3,Promise.all([r.$get("/api/maylday/newsletter/"+o.state.userData.newsletter_id),r.$get("/api/maylday/tag/all")]);case 3:return l=e.sent,c=Object(n.a)(l,2),v=c[0],d=c[1],e.abrupt("return",{newsletterData:v,tagList:d});case 8:case"end":return e.stop()}}),e)})))()}}),$=Object(c.a)(D,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("Settings"),this._v(" "),e("div",{staticClass:"container-narrow grid gap-60"},[e("NewsletterDetails",{attrs:{newsletterData:this.newsletterData.data,tagList:this.tagList}}),this._v(" "),e("ShareSubscription"),this._v(" "),e("ImportExport"),this._v(" "),e("PaymentInfo"),this._v(" "),e("DangerZone")],1)],1)}),[],!1,null,"78c674df",null);e.default=$.exports}}]);