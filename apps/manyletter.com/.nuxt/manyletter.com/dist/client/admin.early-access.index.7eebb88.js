(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{279:function(t,e,o){var content=o(323);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(4).default)("59104bab",content,!0,{sourceMap:!1})},320:function(t,e,o){var content=o(445);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(4).default)("28ff7420",content,!0,{sourceMap:!1})},321:function(t,e,o){var content=o(447);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(4).default)("54490be8",content,!0,{sourceMap:!1})},322:function(t,e,o){"use strict";var r=o(279);o.n(r).a},323:function(t,e,o){(e=o(3)(!1)).push([t.i,".avatar[data-v-6f47023b]{height:100px;width:100px;border-radius:100px;background-repeat:no-repeat;background-position:50%;background-size:cover;cursor:pointer;background-color:#eee}",""]),t.exports=e},324:function(t,e,o){var content=o(449);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(4).default)("454b2b04",content,!0,{sourceMap:!1})},325:function(t,e,o){var content=o(451);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(4).default)("25b93224",content,!0,{sourceMap:!1})},359:function(t,e,o){"use strict";o(22);var r=o(5),n=(o(24),{data:function(){return{submitSuccess:!1,email:this.$store.state.userData.email,avatar:this.$store.state.userData.avatar,name:this.$store.state.userData.name,surname:this.$store.state.userData.surname,nickname:this.$store.state.userData.nickname,bio:this.$store.state.userData.bio,website:this.$store.state.userData.website,twitter:this.$store.state.userData.twitter,facebook:this.$store.state.userData.facebook,other_social:this.$store.state.userData.other_social,selectedFile:null,selectedFileUrl:null,showSave:!1,saveText:"Save",charCounter:this.$store.state.userData.bio?this.$store.state.userData.bio.length:"0"}},methods:{charCount:function(){this.charCounter=this.bio.length},onFileSelected:function(t){this.selectedFile=t.target.files[0],this.selectedFileUrl=URL.createObjectURL(this.selectedFile),this.showSave=!0},onCancel:function(){this.selectedFile=null,this.selectedFileUrl=null,this.showSave=!1},onUpload:function(){var t=this,e=new FormData;e.append("myFile",this.selectedFile,this.selectedFile.name),console.log(e),this.$axios.$post("/api/maylday/upload/user-avatar",e,{onUploadProgress:function(e){t.saveText=Math.round(e.loaded/e.total*100)+"%"}}).then((function(e){t.showSave=!1,t.saveText="Save",console.log(e)}),(function(t){console.log(t)}))},submitForm:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$put("/api/maylday/user",{email:t.email,name:t.name,surname:t.surname,nickname:t.nickname,bio:t.bio,website:t.website,twitter:t.twitter,facebook:t.facebook,other_social:t.other_social}).then((function(e){console.log(e),t.submitSuccess=!0,setTimeout((function(){return t.submitSuccess=!1}),4e3)}),(function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}}}),l=(o(322),o(2)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"component grid gap-20"},[o("div",{staticClass:"box grid gap-20"},[o("h3",[t._v("Your profile")]),t._v(" "),o("p",[t._v("Fill in your profile so other users can find you in ManyLetter and follow you.")]),t._v(" "),o("div",[o("form",{on:{submit:function(e){return e.preventDefault(),t.onUpload()}}},[o("label",{attrs:{for:"title"}},[t._v("Avatar")]),t._v(" "),o("div",{staticClass:"grid gap-20 col-2 auto justify-content-start align-items-center"},[null===t.selectedFileUrl?o("div",{staticClass:"avatar",style:"background-image: url(https://storage.manyletter.com/ymello_filestorage/img/user_avatar/"+t.avatar+")",on:{click:function(e){return e.preventDefault(),t.$refs.fileInput.click()}}}):o("div",{staticClass:"avatar",style:"background-image: url("+t.selectedFileUrl+")",on:{click:function(e){return e.preventDefault(),t.$refs.fileInput.click()}}}),t._v(" "),o("div",{staticClass:"grid gap-10 md-col-2 auto justify-content-start align-items-center"},[o("button",{directives:[{name:"show",rawName:"v-show",value:t.showSave,expression:"showSave"}],staticClass:"cta"},[t._v(t._s(t.saveText))]),t._v(" "),o("button",{directives:[{name:"show",rawName:"v-show",value:t.showSave,expression:"showSave"}],staticClass:"cta    red",on:{click:function(e){return e.preventDefault(),t.onCancel()}}},[t._v("Cancel")])])]),t._v(" "),o("input",{ref:"fileInput",staticClass:"hidden",attrs:{name:"myFile",type:"file"},on:{change:function(e){return t.onFileSelected(e)}}})])]),t._v(" "),o("form",{staticClass:"grid gap-20 ",on:{submit:function(e){return e.preventDefault(),t.submitForm()}}},[o("div",{staticClass:"grid gap-20"},[o("div",{staticClass:"grid md-col-2 gap-20"},[o("div",[o("label",{attrs:{for:"title"}},[t._v("Name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",name:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),o("div",[o("label",{attrs:{for:"title"}},[t._v("Surname")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.surname,expression:"surname"}],attrs:{type:"text",name:"surname"},domProps:{value:t.surname},on:{input:function(e){e.target.composing||(t.surname=e.target.value)}}})])]),t._v(" "),o("div",[o("label",{attrs:{for:"title"}},[t._v("Nickname * (will be show in ManyLetter)")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.nickname,expression:"nickname"}],attrs:{type:"text",name:"nickname"},domProps:{value:t.nickname},on:{input:function(e){e.target.composing||(t.nickname=e.target.value)}}})]),t._v(" "),o("div",[o("label",{attrs:{for:"title"}},[t._v("Bio")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.bio,expression:"bio"}],attrs:{maxlength:"255",type:"text",name:"bio"},domProps:{value:t.bio},on:{keyup:function(e){return t.charCount()},input:function(e){e.target.composing||(t.bio=e.target.value)}}}),t._v(" "),o("p",[t._v(t._s(t.charCounter)+" / 255")])]),t._v(" "),o("div",[o("label",{attrs:{for:"title"}},[t._v("Email * (your email will not show anywhere in ManyLetter)")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",name:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"hr mt40 mb40"}),t._v(" "),o("h4",[t._v("Where others can find you?")]),t._v(" "),o("div",[o("label",{attrs:{for:"title"}},[t._v("Your website")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.website,expression:"website"}],attrs:{type:"text",name:"website"},domProps:{value:t.website},on:{input:function(e){e.target.composing||(t.website=e.target.value)}}})]),t._v(" "),o("div",[o("label",{attrs:{for:"title"}},[t._v("Twitter")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.twitter,expression:"twitter"}],attrs:{type:"text",name:"twitter"},domProps:{value:t.twitter},on:{input:function(e){e.target.composing||(t.twitter=e.target.value)}}})]),t._v(" "),o("div",[o("label",{attrs:{for:"title"}},[t._v("Facebook")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.facebook,expression:"facebook"}],attrs:{type:"text",name:"facebook"},domProps:{value:t.facebook},on:{input:function(e){e.target.composing||(t.facebook=e.target.value)}}})]),t._v(" "),o("div",[o("label",{attrs:{for:"title"}},[t._v("Other social network")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.other_social,expression:"other_social"}],attrs:{type:"text",name:"other"},domProps:{value:t.other_social},on:{input:function(e){e.target.composing||(t.other_social=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"hr"}),t._v(" "),o("div",{staticClass:"grid col-2 gap-10 auto justify-content-start align-items-center"},[o("button",{staticClass:"cta",attrs:{type:"submit"}},[t._v("Save changes")]),t._v(" "),o("p",{directives:[{name:"show",rawName:"v-show",value:t.submitSuccess,expression:"submitSuccess"}],staticClass:"info"},[t._v("Saved!")])])])])])}),[],!1,null,"6f47023b",null);e.a=component.exports},444:function(t,e,o){"use strict";var r=o(320);o.n(r).a},445:function(t,e,o){(e=o(3)(!1)).push([t.i,"p.social[data-v-c975ff18]{background:#fff;border-radius:20px;height:40px;width:40px;display:grid;justify-items:center;align-items:center;box-shadow:0 1px 6px 0 rgba(14,30,37,.12);color:#000;cursor:pointer;font-size:20px}p.social.facebook[data-v-c975ff18]:hover{color:#3b5998}p.social.twitter[data-v-c975ff18]:hover{color:#00acee}p.social.instagram[data-v-c975ff18]:hover{color:#e1306c}ul[data-v-c975ff18]{margin-left:20px}",""]),t.exports=e},446:function(t,e,o){"use strict";var r=o(321);o.n(r).a},447:function(t,e,o){(e=o(3)(!1)).push([t.i,"p.token[data-v-6b9f70de]{display:table;table-layout:fixed;width:100%;word-wrap:break-word}p.social[data-v-6b9f70de]{background:#fff;border-radius:20px;height:40px;width:40px;display:grid;justify-items:center;align-items:center;box-shadow:0 1px 6px 0 rgba(14,30,37,.12);color:#000;cursor:pointer;font-size:20px}p.social.facebook[data-v-6b9f70de]:hover{color:#3b5998}p.social.twitter[data-v-6b9f70de]:hover{color:#00acee}p.social.instagram[data-v-6b9f70de]:hover{color:#e1306c}ul[data-v-6b9f70de]{margin-left:20px}",""]),t.exports=e},448:function(t,e,o){"use strict";var r=o(324);o.n(r).a},449:function(t,e,o){(e=o(3)(!1)).push([t.i,".box.message[data-v-939ad9ce]{border:1px solid rgba(59,172,55,.38824)}p.social>a[data-v-939ad9ce]{background:#fff;border-radius:20px;padding:5px 20px;display:grid;justify-items:center;align-items:center;box-shadow:0 1px 6px 0 rgba(14,30,37,.12);color:#000;cursor:pointer;font-size:16px;text-decoration:none}p.social.facebook>a[data-v-939ad9ce]:hover{color:#3b5998}p.social.twitter>a[data-v-939ad9ce]:hover{color:#00acee}p.social.instagram>a[data-v-939ad9ce]:hover{color:#e1306c}ul[data-v-939ad9ce]{margin-left:20px}",""]),t.exports=e},450:function(t,e,o){"use strict";var r=o(325);o.n(r).a},451:function(t,e,o){(e=o(3)(!1)).push([t.i,".box.message[data-v-01e9adda]{border:1px solid rgba(59,172,55,.38824)}p.social[data-v-01e9adda]{background:#fff;border-radius:20px;height:40px;width:40px;display:grid;justify-items:center;align-items:center;box-shadow:0 1px 6px 0 rgba(14,30,37,.12);color:#000;cursor:pointer;font-size:20px}p.social.facebook[data-v-01e9adda]:hover{color:#3b5998}p.social.twitter[data-v-01e9adda]:hover{color:#00acee}p.social.instagram[data-v-01e9adda]:hover{color:#e1306c}ul[data-v-01e9adda]{margin-left:20px}",""]),t.exports=e},520:function(t,e,o){"use strict";o.r(e);var r={},n=o(2),l=Object(n.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"component"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"container-narrow grid gap-20"},[e("h2",[this._v("Early Access")]),this._v(" "),e("p",[this._v("Find out all information about your early access account.")])])])])}],!1,null,"085cd406",null).exports,c={},v=(o(444),Object(n.a)(c,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"component grid gap-60"},[e("div",{staticClass:"box message grid gap-20"},[e("h3",[this._v("Welcome")]),this._v(" "),e("p",[this._v("Welcome and thank you for joining ManyLetter. We are so grateful to have you on board. We are working hard to take ManyLetter to the next level. Meanwhile, if you have any questions, do not hesitate and contact our founder Tomas at "),e("a",{attrs:{href:"mailto:tomas@manyletter.com"}},[this._v("tomas@manyletter.com")]),this._v(". He will gladly answer all of your messages.")])])])}],!1,null,"c975ff18",null).exports),d={},m=(o(446),Object(n.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"component grid gap-60"},[o("div",{staticClass:"box grid gap-20"},[o("h3",[t._v("Referral link")]),t._v(" "),o("p",[t._v("This is your referral link. Use it to invite your friends to ManyLetter and unlock bonuses for them as well as for you.")]),t._v(" "),o("div",{staticClass:"grid auto gap-40"},[o("div",{staticClass:"table grid auto"},[t._m(0),t._v(" "),o("div",{staticClass:"table-row"},[o("div",[o("p",{staticClass:"token small"},[t._v("https://manyletter.com/?r="+t._s(t.$store.state.userData.email_hash))])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"table-head"},[e("div",[this._v("Your referral link")])])}],!1,null,"6b9f70de",null).exports),f=o(359),h={},_=Object(n.a)(h,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"component grid gap-60"},[e("div",{staticClass:"box grid gap-20"},[e("h3",[this._v("Roadmap")]),this._v(" "),e("p")])])}],!1,null,"3e68a14a",null).exports,x={},w=(o(448),Object(n.a)(x,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"component grid gap-60 justify-self-start"},[e("div",{staticClass:"box grid gap-20"},[e("h3",[this._v("Join the community")]),this._v(" "),e("div",{staticClass:"grid gap-10 col-2 auto justify-content-start"},[e("p",{staticClass:"social facebook"},[e("a",{attrs:{href:"https://www.facebook.com/manylettercom/",target:"_blank"}},[this._v("Facebook")])]),this._v(" "),e("p",{staticClass:"social twitter"},[e("a",{attrs:{href:"https://twitter.com/manylettercom",target:"_blank"}},[this._v("Twitter")])])])])])}],!1,null,"939ad9ce",null).exports),y={},k=(o(450),Object(n.a)(y,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"component grid gap-60"},[e("div",{staticClass:"box grid gap-20"},[e("h3",[this._v("Alpha account perks")]),this._v(" "),e("ul",{staticClass:"grid gap-10"},[e("li",[this._v("Alpha badge")]),this._v(" "),e("li",[this._v("20% lifetime discount on all subscription plans and payments")]),this._v(" "),e("li",[this._v("1 year access to all features of ManyLetter for all subscribers you will invite")])])])])}],!1,null,"01e9adda",null).exports),C={layout:"default-admin-blocked",components:{EarlyAccessIntro:l,Message:v,Link:m,AccountData:f.a,NextSteps:_,Community:w,AlphaPerks:k}},$=Object(n.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("EarlyAccessIntro"),this._v(" "),e("div",{staticClass:"container-narrow grid gap-60"},[e("Message"),this._v(" "),e("Link"),this._v(" "),e("Community")],1)],1)}),[],!1,null,"36a4028b",null);e.default=$.exports}}]);