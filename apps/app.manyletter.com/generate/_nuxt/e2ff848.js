(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{224:function(t,e,r){var content=r(230);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("7a596ad9",content,!0,{sourceMap:!1})},229:function(t,e,r){"use strict";r(224)},230:function(t,e,r){(e=r(7)(!1)).push([t.i,"#bar[data-v-4c0f8e89]{box-shadow:0 .125rem .125rem rgba(0,0,0,.1);position:relative;top:0;left:0;width:100%;background-color:#fff;z-index:99;height:58px}#bar>.container-narrow[data-v-4c0f8e89]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}#bar>.container-narrow>div.flex[data-v-4c0f8e89]{height:100%}.nav>ul[data-v-4c0f8e89]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-4c0f8e89]{padding:22px;border-bottom:1px solid transparent;position:relative;transition:.3s}.nav>ul>li>a.nuxt-link-exact-active[data-v-4c0f8e89],.nav>ul>li>a[data-v-4c0f8e89]:hover{color:#39ac37;text-decoration:none}.nav>ul>li.sidenavtoggle[data-v-4c0f8e89]{cursor:pointer}.nav>ul>li.sidenavtoggle>div[data-v-4c0f8e89]{width:30px;height:4px;background-color:#000;margin:5px 0}.nav>ul>li>a[data-v-4c0f8e89]{color:#000;line-height:24px;font-weight:500;text-decoration:none}",""]),t.exports=e},231:function(t,e,r){"use strict";var n={methods:{logout:function(){var t=this;console.log("logout"),this.$store.dispatch("auth/logout").then((function(){t.$router.push("/log-out")}))}}},o=(r(229),r(2)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{attrs:{id:"bar"}},[r("div",{staticClass:"container-narrow"},[r("div",{staticClass:"flex wrap align-items-center justify-content-center"},[r("div",{}),t._v(" "),r("div",{staticClass:"nav"},[r("ul",{staticClass:"flex wrap show-md align-items-center"},[r("li",[r("nuxt-link",{attrs:{to:"/admin/newsletter/overview"}},[t._v("Overview")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/admin/newsletter/subscribers"}},[t._v("Subscribers")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/admin/newsletter/messages"}},[t._v("Messages")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/admin/newsletter/automation"}},[t._v("Automation")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/admin/newsletter/avatar"}},[t._v("Avatar & Cover")])],1),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/admin/newsletter/settings"}},[t._v("Settings")])],1)])])])])])])}),[],!1,null,"4c0f8e89",null);e.a=component.exports},263:function(t,e,r){var content=r(309);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("d4266e90",content,!0,{sourceMap:!1})},264:function(t,e,r){var content=r(311);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("d9399ef2",content,!0,{sourceMap:!1})},308:function(t,e,r){"use strict";r(263)},309:function(t,e,r){(e=r(7)(!1)).push([t.i,".avatar[data-v-5989fad3]{height:100px;width:100px;border-radius:100px}.avatar[data-v-5989fad3],.cover[data-v-5989fad3]{background-repeat:no-repeat;background-position:50%;background-size:cover;cursor:pointer;background-color:#eee}.cover[data-v-5989fad3]{height:180px;border-radius:4px}.flex>button.tag[data-v-5989fad3]{margin:3px;border:1px solid #eee;background-color:#fff;padding:10px 15px;color:#000;border-radius:4px;cursor:pointer}.flex>button.tag.active[data-v-5989fad3],.flex>button.tag[data-v-5989fad3]:hover{border:1px solid #000;background-color:#000;color:#fff}",""]),t.exports=e},310:function(t,e,r){"use strict";r(264)},311:function(t,e,r){(e=r(7)(!1)).push([t.i,".danger-zone[data-v-51260200]{border:1px solid rgba(215,58,74,.48627)}",""]),t.exports=e},328:function(t,e,r){"use strict";r.r(e);r(22),r(14),r(33);var n=r(31),o=(r(32),r(3)),l=r(231),c={},v=r(2),d=Object(v.a)(c,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"component"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"container-narrow grid gap-20"},[e("h2",[this._v("Newsletter settings")]),this._v(" "),e("p",[this._v("Set up all the settings of your account.")])])])])}],!1,null,"5dc52677",null).exports,h=(r(23),r(64),{props:["newsletterData","tagList"],data:function(){return{submitSuccess:!1,avatar:this.newsletterData.avatar,cover:this.newsletterData.cover,title:this.newsletterData.title,intro:this.newsletterData.intro,description:this.newsletterData.description,creator_name:this.newsletterData.creator_name,email:this.newsletterData.email,url:this.newsletterData.url,access:this.newsletterData.access,tags:null===this.newsletterData.tags?[]:this.newsletterData.tags.split(","),selectedFileAvatar:null,selectedFileUrlAvatar:null,showSaveAvatar:!1,saveTextAvatar:"Save",selectedFileCover:null,selectedFileUrlCover:null,showSaveCover:!1,saveTextCover:"Save",charCounterIntro:this.newsletterData.intro.length,charCounterLong:this.newsletterData.description.length}},methods:{charCountIntro:function(){this.charCounterIntro=this.intro.length},charCountLong:function(){this.charCounterLong=this.description.length},onFileSelectedAvatar:function(t){this.selectedFileAvatar=t.target.files[0],this.selectedFileUrlAvatar=URL.createObjectURL(this.selectedFileAvatar),this.showSaveAvatar=!0},onCancelAvatar:function(){this.selectedFileAvatar=null,this.selectedFileUrlAvatar=null,this.showSaveAvatar=!1},onUploadAvatar:function(){var t=this,e=new FormData;e.append("myFile",this.selectedFileAvatar,this.selectedFileAvatar.name),e.append("newsletter_id",this.$store.state.auth.userData.newsletter_id),this.$axios.$post("/upload/newsletter-avatar",e,{onUploadProgress:function(e){t.saveTextAvatar=Math.round(e.loaded/e.total*100)+"%"}}).then((function(e){t.$store.dispatch("setUser"),t.showSaveAvatar=!1,t.saveTextAvatar="Save",console.log(e)}),(function(t){console.log(t)}))},onFileSelectedCover:function(t){this.selectedFileCover=t.target.files[0],this.selectedFileUrlCover=URL.createObjectURL(this.selectedFileCover),this.showSaveCover=!0},onCancelCover:function(){this.selectedFileCover=null,this.selectedFileUrlCover=null,this.showSaveCover=!1},onUploadCover:function(){var t=this,e=new FormData;e.append("myFile",this.selectedFileCover,this.selectedFileCover.name),e.append("newsletter_id",this.$store.state.auth.userData.newsletter_id),this.$axios.$post("/upload/newsletter-cover",e,{onUploadProgress:function(e){t.saveTextCover=Math.round(e.loaded/e.total*100)+"%"}}).then((function(e){t.$store.dispatch("setUser"),t.showSaveCover=!1,t.saveTextCover="Save",console.log(e)}),(function(t){console.log(t)}))},updateTag:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$axios.$put("/newsletter/tag",{id:e.$store.state.auth.userData.newsletter_id,tag_id:t}).then((function(r){console.log(r.message),"added"===r.message&&e.tags.push(t),"removed"===r.message&&(e.tags=e.tags.filter((function(e){return e!==t}))),console.log(e.tags)}),(function(t){console.log(t)}));case 2:case"end":return r.stop()}}),r)})))()},submitForm:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$put("/newsletter",{id:t.$store.state.auth.userData.newsletter_id,title:t.title,intro:t.intro,description:t.description,creator_name:t.creator_name,email:t.email,url:t.url,access:t.access}).then((function(e){console.log(e),t.submitSuccess=!0,setTimeout((function(){return t.submitSuccess=!1}),4e3)}),(function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}}}),m=(r(308),Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"component grid gap-20 col-2 align-content-start align-items-start"},[r("div",{staticClass:"box grid gap-20"},[r("h3",[t._v("Edit newsletter details")]),t._v(" "),r("div",{staticClass:"hr"}),t._v(" "),r("form",{staticClass:"grid gap-20 ",on:{submit:function(e){return e.preventDefault(),t.submitForm()}}},[r("div",{staticClass:"grid gap-20"},[r("div",[r("label",{attrs:{for:"title"}},[t._v("* Newsletter name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),r("div",[r("label",{attrs:{for:"title"}},[t._v("Short intro")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.intro,expression:"intro"}],attrs:{maxlength:"255",type:"text",name:"intro"},domProps:{value:t.intro},on:{keyup:function(e){return t.charCountIntro()},input:function(e){e.target.composing||(t.intro=e.target.value)}}}),t._v(" "),r("p",{staticClass:"char-counter small"},[t._v(t._s(t.charCounterIntro)+" / 255")])]),t._v(" "),r("div",[r("label",{attrs:{for:"title"}},[t._v("Description")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{maxlength:"1000",type:"text",name:"description"},domProps:{value:t.description},on:{keyup:function(e){return t.charCountLong()},input:function(e){e.target.composing||(t.description=e.target.value)}}}),t._v(" "),r("p",{staticClass:"char-counter small"},[t._v(t._s(t.charCounterLong)+" / 1000")])]),t._v(" "),r("div",[r("label",{attrs:{for:"title"}},[t._v("Creator name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.creator_name,expression:"creator_name"}],attrs:{type:"text",name:"creator_name"},domProps:{value:t.creator_name},on:{input:function(e){e.target.composing||(t.creator_name=e.target.value)}}})]),t._v(" "),r("div",[r("label",{attrs:{for:"title"}},[t._v("Newsletter email")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",name:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"hr"}),t._v(" "),r("div",{staticClass:"grid col-2 gap-10 auto justify-content-start align-items-center"},[r("button",{staticClass:"cta",attrs:{type:"submit"}},[t._v("Save changes")]),t._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:t.submitSuccess,expression:"submitSuccess"}],staticClass:"info"},[t._v("Saved!")])])])]),t._v(" "),r("div",{staticClass:"component grid gap-20"},[r("div",{staticClass:"box grid gap-20"},[r("h3",[t._v("Newsletter tags")]),t._v(" "),r("div",{staticClass:"hr"}),t._v(" "),r("div",{staticClass:"flex wrap"},t._l(t.tagList.data,(function(e){return r("button",{key:e.id,staticClass:"tag",class:t.tags.includes(e.id)?"active":"",on:{click:function(r){return r.preventDefault(),t.updateTag(e.id)}}},[t._v(t._s(e.name))])})),0)])])])}),[],!1,null,"5989fad3",null).exports),f={},_=(r(310),Object(v.a)(f,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"component grid gap-20 "},[e("div",{staticClass:"box grid gap-20 danger-zone"},[e("h3",[this._v("Danger zone")]),this._v(" "),e("div",{},[e("button",{staticClass:"cta red"},[this._v("Delete newsletter")])])])])}],!1,null,"51260200",null).exports),w={layout:"defaultAdmin",components:{Bar:l.a,Intro:d,Details:m,DangerZone:_},data:function(){return{level:this.$store.state?this.$store.state.auth.userData.level:""}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,l,c,v,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,o=t.store,e.next=3,Promise.all([r.$get("/newsletter/"+o.state.auth.userData.newsletter_id),r.$get("/tag/all")]);case 3:return l=e.sent,c=Object(n.a)(l,2),v=c[0],d=c[1],e.abrupt("return",{newsletterData:v,tagList:d});case 8:case"end":return e.stop()}}),e)})))()}},x=Object(v.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("Bar"),this._v(" "),e("Intro"),this._v(" "),e("div",{staticClass:"container-narrow grid gap-60"},[e("Details",{attrs:{newsletterData:this.newsletterData.data,tagList:this.tagList}}),this._v(" "),e("DangerZone")],1)],1)}),[],!1,null,"6d8c7014",null);e.default=x.exports}}]);