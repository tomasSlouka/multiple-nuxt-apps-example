<template>
    <div class='component grid gap-20 col-2 align-content-start align-items-start'>

        <!-- <div class="box grid gap-20">
            <h3>Avatar</h3>
            <form @submit.prevent='onUploadAvatar()' >
                <div class='grid gap-20 col-2 auto justify-content-start align-items-center'>
                    <div v-if='selectedFileUrlAvatar === null' class='avatar' @click.prevent='$refs.fileInputAvatar.click()' :style="'background-image: url(https://storage.manyletter.com/ymello_filestorage/img/newsletter_avatar/' + avatar + ')'"></div>

                    <div v-else class='avatar' @click.prevent='$refs.fileInputAvatar.click()' :style="'background-image: url(' + selectedFileUrlAvatar + ')'"></div>
                    
                    <div class='grid gap-10 auto md-col-2 justify-content-start align-items-center'>
                        <button v-show='showSaveAvatar' class="cta">{{saveTextAvatar}}</button>
                        <button v-show='showSaveAvatar' @click.prevent='onCancelAvatar()' class="cta red">Cancel</button>
                    </div>
                </div>

                <input class='hidden' name='myFile' ref='fileInputAvatar' type="file" @change='onFileSelectedAvatar($event)' />

            </form>
        </div>

        <div class="box grid gap-20">
            <h3>Cover image</h3>
            <form @submit.prevent='onUploadCover()' >
                <div class='grid gap-20'>
                    <div v-if='selectedFileUrlCover === null' class='cover' @click.prevent='$refs.fileInputCover.click()' :style="'background-image: url(https://storage.manyletter.com/ymello_filestorage/img/newsletter_cover/' + cover + ')'"></div>

                    <div v-else class='cover' @click.prevent='$refs.fileInputCover.click()' :style="'background-image: url(' + selectedFileUrlCover + ')'"></div>

                    <div class='grid gap-10 col-2 auto justify-content-start align-items-center'>
                        <button v-show='showSaveCover' class="cta">{{saveTextCover}}</button>
                        <button v-show='showSaveCover' @click.prevent='onCancelCover()' class="cta red">Cancel</button>
                    </div>
                </div>

                <input class='hidden' name='myFile' ref='fileInputCover' type="file" @change='onFileSelectedCover($event)' />

            </form>
        </div> -->

        <div class="box grid gap-20">
            <h3>Edit newsletter details</h3>
            <!-- <p class='small'>Fill in your profile so other users can find you in ManyLetter and follow you.</p> -->
            <div class="hr"></div>

            <form @submit.prevent='submitForm()' class='grid gap-20 '>
                <div class='grid gap-20'>
                    <div>
                        <label for="title">* Newsletter name</label>
                        <input type="text" name='title' v-model='title'/>
                    </div>

                    <div>
                        <label for="title">Short intro</label>
                        <textarea @keyup='charCountIntro()' maxlength="255" type="text" name='intro' v-model='intro'></textarea>
                        <p class='char-counter small'>{{charCounterIntro}} / 255</p>
                    </div>

                    <div>
                        <label for="title">Description</label>
                        <textarea @keyup='charCountLong()' maxlength="1000" type="text" name='description' v-model='description'></textarea>
                        <p class='char-counter small'>{{charCounterLong}} / 1000</p>
                    </div>

                    <div>
                        <label for="title">Creator name</label>
                        <input type="text" name='creator_name' v-model='creator_name'/>
                    </div>

                    <div>
                        <label for="title">Newsletter email</label>
                        <input type="text" name='email' v-model='email'/>
                    </div>

                    <!-- <div> -->
                        <!-- <label for="title">Newsletter url link</label> -->
                        <!-- <input type="text" name='url' v-model='url'/> -->
                    <!-- </div> -->

                    <!-- <div> -->
                        <!-- <label for="title">Newsletter visibility</label> -->
                        <!-- <select type="text" name='access' v-model='access'> -->
                            <!-- <option value="0">hidden</option> -->
                            <!-- <option value="1">visible</option> -->
                            <!-- <option value="2">on subscribe</option> -->
                            <!-- <option value="3">payed</option> -->
                        <!-- </select> -->
                    <!-- </div>                     -->
                </div>
                <div class="hr"></div>
                <div class='grid col-2 gap-10 auto justify-content-start align-items-center'>
                    <button type='submit' class='cta'>Save changes</button>
                    <p class='info' v-show='submitSuccess'>Saved!</p>
                </div>
            </form> 
        </div>

        <div class='component grid gap-20'>
            <div class="box grid gap-20">
                <h3>Newsletter tags</h3>
                <div class="hr"></div>
                    <div class='flex wrap'>
                        <button  v-for="item in tagList.data" :key="item.id" @click.prevent="updateTag(item.id)" class='tag' :class="(tags.includes(item.id)) ? 'active' : ''">{{item.name}}</button>
                    </div>
                    
                </div>
            </div>
        </div>

</template>

<script>
export default {

    props: ['newsletterData', 'tagList'],

    data() {
        return {
            submitSuccess: false,
            avatar: this.newsletterData.avatar,
            cover: this.newsletterData.cover,
            title: this.newsletterData.title,
            intro: this.newsletterData.intro,
            description: this.newsletterData.description,
            creator_name: this.newsletterData.creator_name,
            email: this.newsletterData.email,
            url: this.newsletterData.url,
            access: this.newsletterData.access,
            tags: this.newsletterData.tags === null ? [] : this.newsletterData.tags.split(","),

            selectedFileAvatar: null,
            selectedFileUrlAvatar: null,
            showSaveAvatar: false,
            saveTextAvatar: "Save",

            selectedFileCover: null,
            selectedFileUrlCover: null,
            showSaveCover: false,
            saveTextCover: "Save",
            charCounterIntro: this.newsletterData.intro.length,
            charCounterLong: this.newsletterData.description.length,
        }
    },
    methods: {
        charCountIntro() {
            this.charCounterIntro = this.intro.length;
        },
        charCountLong() {
            this.charCounterLong = this.description.length;
        },
        // AVATAR
        onFileSelectedAvatar(event) {
            this.selectedFileAvatar = event.target.files[0]
            this.selectedFileUrlAvatar = URL.createObjectURL(this.selectedFileAvatar)
            this.showSaveAvatar = true
        },
        onCancelAvatar() {
            this.selectedFileAvatar = null
            this.selectedFileUrlAvatar = null
            this.showSaveAvatar = false
        },
        onUploadAvatar() {
            const formData = new FormData()
            formData.append('myFile', this.selectedFileAvatar, this.selectedFileAvatar.name)
            formData.append('newsletter_id', this.$store.state.auth.userData.newsletter_id)
            this.$axios.$post('/upload/newsletter-avatar', formData, {
                onUploadProgress: progressEvent => {
                    this.saveTextAvatar = Math.round(progressEvent.loaded / progressEvent.total * 100) + '%'
                }
            })
            .then((response) => {
                this.$store.dispatch('setUser');
                this.showSaveAvatar = false
                this.saveTextAvatar = "Save"
                console.log(response);
            }, (error) => {
                console.log(error);
            });
        },
        // AVATAR
        // COVER
        onFileSelectedCover(event) {
            this.selectedFileCover = event.target.files[0]
            this.selectedFileUrlCover = URL.createObjectURL(this.selectedFileCover)
            this.showSaveCover = true
        },
        onCancelCover() {
            this.selectedFileCover = null
            this.selectedFileUrlCover = null
            this.showSaveCover = false
        },
        onUploadCover() {
            const formData = new FormData()
            formData.append('myFile', this.selectedFileCover, this.selectedFileCover.name)
            formData.append('newsletter_id', this.$store.state.auth.userData.newsletter_id)
            this.$axios.$post('/upload/newsletter-cover', formData, {
                onUploadProgress: progressEvent => {
                    this.saveTextCover = Math.round(progressEvent.loaded / progressEvent.total * 100) + '%'
                }
            })
            .then((response) => {
                this.$store.dispatch('setUser');
                this.showSaveCover = false
                this.saveTextCover = "Save"
                console.log(response);
            }, (error) => {
                console.log(error);
            });
        },
        // COVER END
        async updateTag(tag_id) {
            await this.$axios.$put('/newsletter/tag', {
                "id": this.$store.state.auth.userData.newsletter_id,
                "tag_id": tag_id
            })
            .then((response) => {
                console.log(response.message)
                if(response.message === "added") {this.tags.push(tag_id)}
                if(response.message === "removed") {
                    this.tags = this.tags.filter(function(item) {
                        return item !== tag_id
                    })
                }
                console.log(this.tags)
                
            }, (error) => {
                console.log(error);
                //this.res = error.response.data.message
            });
        },
        async submitForm() {
            await this.$axios.$put('/newsletter', {
                'id': this.$store.state.auth.userData.newsletter_id,
                'title': this.title,
                'intro': this.intro,
                'description': this.description,
                'creator_name': this.creator_name,
                'email': this.email,
                'url': this.url,
                'access': this.access,
            })
            .then((response) => {
                console.log(response)
                this.submitSuccess = true;
                setTimeout(() => this.submitSuccess = false, 4000)
                // this.$router.back()
            }, (error) => {
                console.log(error)
            });
        }
    },
}
</script>

<style scoped>
.avatar {
    height: 100px;
    width: 100px;
    border-radius: 100px;
    background-repeat:no-repeat;
    background-position:center center;
    background-size: cover;
    cursor: pointer;
    background-color: #eee;
}
.cover {
    height: 180px;
    border-radius: 4px;
    background-repeat:no-repeat;
    background-position:center center;
    background-size: cover;
    cursor: pointer;
    background-color: #eee;
}

.flex > button.tag {
    margin: 3px;
    border: 1px solid #eee;
    background-color: #fff;
    padding: 10px 15px;
    color: #000;
    border-radius: 4px;
    cursor: pointer;
}
.flex > button.tag:hover {
    border: 1px solid #000;
    background-color: #000;
    color: #fff;
}
.flex > button.tag.active {
    border: 1px solid #000;
    background-color: #000;
    color: #fff;
}
</style>
