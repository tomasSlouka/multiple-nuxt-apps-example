(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{223:function(e,t,r){var content=r(229);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("7a596ad9",content,!0,{sourceMap:!1})},228:function(e,t,r){"use strict";var n=r(223);r.n(n).a},229:function(e,t,r){(t=r(7)(!1)).push([e.i,"#bar[data-v-4c0f8e89]{box-shadow:0 .125rem .125rem rgba(0,0,0,.1);position:relative;top:0;left:0;width:100%;background-color:#fff;z-index:99;height:58px}#bar>.container-narrow[data-v-4c0f8e89]{margin-top:0;margin-bottom:0;padding:0 20px;height:100%}#bar>.container-narrow>div.flex[data-v-4c0f8e89]{height:100%}.nav>ul[data-v-4c0f8e89]{list-style:none;margin:0;padding:0}.nav>ul>li>a[data-v-4c0f8e89]{padding:22px;border-bottom:1px solid transparent;position:relative;transition:.3s}.nav>ul>li>a.nuxt-link-exact-active[data-v-4c0f8e89],.nav>ul>li>a[data-v-4c0f8e89]:hover{color:#39ac37;text-decoration:none}.nav>ul>li.sidenavtoggle[data-v-4c0f8e89]{cursor:pointer}.nav>ul>li.sidenavtoggle>div[data-v-4c0f8e89]{width:30px;height:4px;background-color:#000;margin:5px 0}.nav>ul>li>a[data-v-4c0f8e89]{color:#000;line-height:24px;font-weight:500;text-decoration:none}",""]),e.exports=t},230:function(e,t,r){"use strict";var n={methods:{logout:function(){var e=this;console.log("logout"),this.$store.dispatch("auth/logout").then((function(){e.$router.push("/log-out")}))}}},o=(r(228),r(2)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{attrs:{id:"bar"}},[r("div",{staticClass:"container-narrow"},[r("div",{staticClass:"flex wrap align-items-center justify-content-center"},[r("div",{}),e._v(" "),r("div",{staticClass:"nav"},[r("ul",{staticClass:"flex wrap show-md align-items-center"},[r("li",[r("nuxt-link",{attrs:{to:"/admin/newsletter/overview"}},[e._v("Overview")])],1),e._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/admin/newsletter/subscribers"}},[e._v("Subscribers")])],1),e._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/admin/newsletter/messages"}},[e._v("Messages")])],1),e._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/admin/newsletter/automation"}},[e._v("Automation")])],1),e._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/admin/newsletter/avatar"}},[e._v("Avatar & Cover")])],1),e._v(" "),r("li",[r("nuxt-link",{attrs:{to:"/admin/newsletter/settings"}},[e._v("Settings")])],1)])])])])])])}),[],!1,null,"4c0f8e89",null);t.a=component.exports},258:function(e,t,r){var content=r(302);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("94ed87ee",content,!0,{sourceMap:!1})},301:function(e,t,r){"use strict";var n=r(258);r.n(n).a},302:function(e,t,r){(t=r(7)(!1)).push([e.i,".avatar[data-v-0e5c56a7]{height:100px;width:100px;border-radius:100px}.avatar[data-v-0e5c56a7],.cover[data-v-0e5c56a7]{background-repeat:no-repeat;background-position:50%;background-size:cover;cursor:pointer;background-color:#eee}.cover[data-v-0e5c56a7]{height:180px;border-radius:4px}",""]),e.exports=t},331:function(e,t,r){"use strict";r.r(t);r(21),r(14),r(31);var n=r(41),o=(r(30),r(3)),l=r(230),c={},v=r(2),d=Object(v.a)(c,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"component"},[t("div",{staticClass:"wrapper"},[t("div",{staticClass:"container-narrow grid gap-20"},[t("h2",[this._v("Avatar & Cover")]),this._v(" "),t("p",[this._v("Set up the avatar & cover image of your newsletter.")])])])])}],!1,null,"5ed63b90",null).exports,h=(r(22),{props:["newsletterData","tagList"],data:function(){return{avatar:this.newsletterData.avatar,cover:this.newsletterData.cover,selectedFileAvatar:null,selectedFileUrlAvatar:null,showSaveAvatar:!1,saveTextAvatar:"Save",selectedFileCover:null,selectedFileUrlCover:null,showSaveCover:!1,saveTextCover:"Save"}},methods:{onFileSelectedAvatar:function(e){this.selectedFileAvatar=e.target.files[0],this.selectedFileUrlAvatar=URL.createObjectURL(this.selectedFileAvatar),this.showSaveAvatar=!0},onCancelAvatar:function(){this.selectedFileAvatar=null,this.selectedFileUrlAvatar=null,this.showSaveAvatar=!1},onUploadAvatar:function(){var e=this,t=new FormData;t.append("myFile",this.selectedFileAvatar,this.selectedFileAvatar.name),t.append("newsletter_id",this.$store.state.auth.userData.newsletter_id),this.$axios.$post("/upload/newsletter-avatar",t,{onUploadProgress:function(t){e.saveTextAvatar=Math.round(t.loaded/t.total*100)+"%"}}).then((function(t){e.$store.dispatch("setUser"),e.showSaveAvatar=!1,e.saveTextAvatar="Save",console.log(t)}),(function(e){console.log(e)}))},onFileSelectedCover:function(e){this.selectedFileCover=e.target.files[0],this.selectedFileUrlCover=URL.createObjectURL(this.selectedFileCover),this.showSaveCover=!0},onCancelCover:function(){this.selectedFileCover=null,this.selectedFileUrlCover=null,this.showSaveCover=!1},onUploadCover:function(){var e=this,t=new FormData;t.append("myFile",this.selectedFileCover,this.selectedFileCover.name),t.append("newsletter_id",this.$store.state.auth.userData.newsletter_id),this.$axios.$post("/upload/newsletter-cover",t,{onUploadProgress:function(t){e.saveTextCover=Math.round(t.loaded/t.total*100)+"%"}}).then((function(t){e.$store.dispatch("setUser"),e.showSaveCover=!1,e.saveTextCover="Save",console.log(t)}),(function(e){console.log(e)}))}}}),f=(r(301),Object(v.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"component grid gap-20 col-2 align-content-start align-items-start"},[r("div",{staticClass:"box grid gap-20"},[r("h3",[e._v("Avatar")]),e._v(" "),r("p",{staticClass:"small"},[e._v("Click on image to upload new avatar.")]),e._v(" "),r("div",{staticClass:"hr"}),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.onUploadAvatar()}}},[r("div",{staticClass:"grid gap-20 col-2 auto justify-content-start align-items-center"},[null===e.selectedFileUrlAvatar?r("div",{staticClass:"avatar",style:"background-image: url(https://storage.manyletter.com/ymello_filestorage/img/newsletter_avatar/"+e.avatar+")",on:{click:function(t){return t.preventDefault(),e.$refs.fileInputAvatar.click()}}}):r("div",{staticClass:"avatar",style:"background-image: url("+e.selectedFileUrlAvatar+")",on:{click:function(t){return t.preventDefault(),e.$refs.fileInputAvatar.click()}}}),e._v(" "),r("div",{staticClass:"grid gap-10 auto md-col-2 justify-content-start align-items-center"},[r("button",{directives:[{name:"show",rawName:"v-show",value:e.showSaveAvatar,expression:"showSaveAvatar"}],staticClass:"cta"},[e._v(e._s(e.saveTextAvatar))]),e._v(" "),r("button",{directives:[{name:"show",rawName:"v-show",value:e.showSaveAvatar,expression:"showSaveAvatar"}],staticClass:"cta red",on:{click:function(t){return t.preventDefault(),e.onCancelAvatar()}}},[e._v("Cancel")])])]),e._v(" "),r("input",{ref:"fileInputAvatar",staticClass:"hidden",attrs:{name:"myFile",type:"file"},on:{change:function(t){return e.onFileSelectedAvatar(t)}}})])]),e._v(" "),r("div",{staticClass:"box grid gap-20"},[r("h3",[e._v("Cover image")]),e._v(" "),r("p",{staticClass:"small"},[e._v("Click on image to upload new cover image.")]),e._v(" "),r("div",{staticClass:"hr"}),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.onUploadCover()}}},[r("div",{staticClass:"grid gap-20"},[null===e.selectedFileUrlCover?r("div",{staticClass:"cover",style:"background-image: url(https://storage.manyletter.com/ymello_filestorage/img/newsletter_cover/"+e.cover+")",on:{click:function(t){return t.preventDefault(),e.$refs.fileInputCover.click()}}}):r("div",{staticClass:"cover",style:"background-image: url("+e.selectedFileUrlCover+")",on:{click:function(t){return t.preventDefault(),e.$refs.fileInputCover.click()}}}),e._v(" "),r("div",{staticClass:"grid gap-10 col-2 auto justify-content-start align-items-center"},[r("button",{directives:[{name:"show",rawName:"v-show",value:e.showSaveCover,expression:"showSaveCover"}],staticClass:"cta"},[e._v(e._s(e.saveTextCover))]),e._v(" "),r("button",{directives:[{name:"show",rawName:"v-show",value:e.showSaveCover,expression:"showSaveCover"}],staticClass:"cta red",on:{click:function(t){return t.preventDefault(),e.onCancelCover()}}},[e._v("Cancel")])])]),e._v(" "),r("input",{ref:"fileInputCover",staticClass:"hidden",attrs:{name:"myFile",type:"file"},on:{change:function(t){return e.onFileSelectedCover(t)}}})])])])}),[],!1,null,"0e5c56a7",null).exports),m={layout:"defaultAdmin",components:{Bar:l.a,Intro:d,Avatar:f},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,l,c,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,o=e.store,t.next=3,Promise.all([r.$get("/newsletter/"+o.state.auth.userData.newsletter_id)]);case 3:return l=t.sent,c=Object(n.a)(l,1),v=c[0],t.abrupt("return",{newsletterData:v});case 7:case"end":return t.stop()}}),t)})))()}},w=Object(v.a)(m,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page"},[t("Bar"),this._v(" "),t("Intro"),this._v(" "),t("div",{staticClass:"container-narrow grid gap-60"},[t("Avatar",{attrs:{newsletterData:this.newsletterData.data}}),this._v(" "),t("DangerZone")],1)],1)}),[],!1,null,"1b56eee8",null);t.default=w.exports}}]);