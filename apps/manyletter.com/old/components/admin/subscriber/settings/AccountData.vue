<template>
    <div class='component grid gap-20'>
        <div class="box grid gap-20">
            
            <h3>Your profile</h3>
            <p>Fill in your profile so other users can find you in ManyLetter and follow you.</p>

            <div>
                <form @submit.prevent='onUpload()' >
                    <label for="title">Avatar</label>
                    <div class='grid gap-20 col-2 auto justify-content-start align-items-center'>
                        <div v-if='selectedFileUrl === null' class='avatar' @click.prevent='$refs.fileInput.click()' :style="'background-image: url(https://storage.manyletter.com/ymello_filestorage/img/user_avatar/' + avatar + ')'"></div>

                        <div v-else class='avatar' @click.prevent='$refs.fileInput.click()' :style="'background-image: url(' + selectedFileUrl + ')'"></div>

                        <div class='grid gap-10 md-col-2 auto justify-content-start align-items-center'>
                            <button v-show='showSave' class="cta">{{saveText}}</button>
                            <button v-show='showSave' @click.prevent='onCancel()' class="cta    red">Cancel</button>
                        </div>
                    </div>

                    <input class='hidden' name='myFile' ref='fileInput' type="file" @change='onFileSelected($event)' />

                </form>
            </div>

            <form @submit.prevent='submitForm()' class='grid gap-20 '>
                <div class='grid gap-20'>

                    <div class='grid md-col-2 gap-20'>
                        <div>
                            <label for="title">Name</label>
                            <input type="text" name='name' v-model='name'/>
                        </div>
                        <div>
                            <label for="title">Surname</label>
                            <input type="text" name='surname' v-model='surname'/>
                        </div>
                    </div>

                    <div>
                        <label for="title">Nickname * (will be show in ManyLetter)</label>
                        <input type="text" name='nickname' v-model='nickname'/>
                    </div>

                    <div>
                        <label for="title">Bio</label>
                        <textarea @keyup='charCount()' maxlength="255" type="text" name='bio' v-model='bio'></textarea>
                        <p>{{charCounter}} / 255</p>
                    </div>

                    <div>
                        <label for="title">Email * (your email will not show anywhere in ManyLetter)</label>
                        <input type="text" name='email' v-model='email'/>
                    </div>

                    <div class="hr mt40 mb40"></div>
                    <h4>Where others can find you?</h4>
                    <div>
                        <label for="title">Your website</label>
                        <input type="text" name='website' v-model='website'/>
                    </div>
                    <div>
                        <label for="title">Twitter</label>
                        <input type="text" name='twitter' v-model='twitter'/>
                    </div>
                    <div>
                        <label for="title">Facebook</label>
                        <input type="text" name='facebook' v-model='facebook'/>
                    </div>
                    <div>
                        <label for="title">Other social network</label>
                        <input type="text" name='other' v-model='other_social'/>
                    </div>

                    <!-- <div class="hr"></div>
                    <h4>Tags</h4>
                    <div>
                        <button @click.prevent='addTag()' class='tag'>Tech</button>
                    </div> -->

                </div>
                <div class="hr"></div>
                <div class='grid col-2 gap-10 auto justify-content-start align-items-center'>
                    <button type='submit' class='cta'>Save changes</button>
                    <p class='info' v-show='submitSuccess'>Saved!</p>
                </div>
            </form> 
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            submitSuccess: false,
            email: this.$store.state.userData.email,
            avatar: this.$store.state.userData.avatar,
            name: this.$store.state.userData.name,
            surname: this.$store.state.userData.surname,
            nickname: this.$store.state.userData.nickname,
            bio: this.$store.state.userData.bio,
            website: this.$store.state.userData.website,
            twitter: this.$store.state.userData.twitter,
            facebook: this.$store.state.userData.facebook,
            other_social: this.$store.state.userData.other_social,

            selectedFile: null,
            selectedFileUrl: null,
            showSave: false,
            saveText: "Save",
            charCounter: this.$store.state.userData.bio ? this.$store.state.userData.bio.length : "0",
        }
    },
    methods: {
        charCount() {
            this.charCounter = this.bio.length;
        },
        onFileSelected(event) {
            this.selectedFile = event.target.files[0]
            this.selectedFileUrl = URL.createObjectURL(this.selectedFile)
            this.showSave = true
        },
        onCancel() {
            this.selectedFile = null
            this.selectedFileUrl = null
            this.showSave = false
        },
        onUpload() {
            const formData = new FormData()
            formData.append('myFile', this.selectedFile, this.selectedFile.name)
            // formData.append('user', "jano")
                console.log(formData);
            this.$axios.$post('/api/maylday/upload/user-avatar', formData, {
                onUploadProgress: progressEvent => {
                    this.saveText = Math.round(progressEvent.loaded / progressEvent.total * 100) + '%'
                }
            })
            .then((response) => {
                // this.$store.dispatch('setUser');
                this.showSave = false
                this.saveText = "Save"
                console.log(response);
            }, (error) => {
                console.log(error);
            });
        },
        async submitForm() {
            await this.$axios.$put('/api/maylday/user', {
                "email": this.email,
                "name": this.name,
                "surname": this.surname,
                "nickname": this.nickname,
                "bio": this.bio,
                "website": this.website,
                "twitter": this.twitter,
                "facebook": this.facebook,
                "other_social": this.other_social,
            })
            .then((response) => {
                console.log(response);
                // this.$store.dispatch('setUser');
                this.submitSuccess = true;
                setTimeout(() => this.submitSuccess = false, 4000)
                // this.$router.push('/admin/subscriber/settings')
            }, (error) => {
                console.log(error);
                //this.res = error.response.data.message
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
</style>
