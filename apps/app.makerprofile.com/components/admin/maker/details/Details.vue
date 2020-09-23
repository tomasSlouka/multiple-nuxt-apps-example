<template>
    <div class='component grid gap-20 col-2 align-content-start align-items-start'>

        <div class="box grid gap-20">
            <h3>Edit my profile</h3>
            <!-- <p class='small'>Fill in your profile so other users can find you in ManyLetter and follow you.</p> -->
            <div class="hr"></div>

            <form @submit.prevent='submitForm()' class='grid gap-20 '>
                <div class='grid gap-20'>
                    <div>
                        <label for="name">* Name</label>
                        <input type="text" name='name' v-model='name'/>
                    </div>
                    <div>
                        <label for="surname">* Surname</label>
                        <input type="text" name='surname' v-model='surname'/>
                    </div>

                    <div>
                        <label for="bio">Bio</label>
                        <textarea @keyup='charCountBio()' maxlength="255" type="text" name='bio' v-model='bio'></textarea>
                        <p class='char-counter small'>{{charCounterBio}} / 255</p>
                    </div>
                </div>
                <div class="hr"></div>
                <div class='grid col-2 gap-10 auto justify-content-start align-items-center'>
                    <button type='submit' class='cta'>Save changes</button>
                    <p class='info' v-show='submitSuccess'>Saved!</p>
                </div>
            </form> 
        </div>

        <!-- <div class='component grid gap-20'>
            <div class="box grid gap-20">
                <h3>Profile tags</h3>
                <div class="hr"></div>
                <div class='flex wrap'>
                    <button  v-for="item in tagList.data" :key="item.id" @click.prevent="updateTag(item.id)" class='tag' :class="(tags.includes(item.id)) ? 'active' : ''">{{item.name}}</button>
                </div>
            </div>
        </div> -->
    </div>

</template>

<script>
export default {

    props: ['tagList'],

    data() {
        return {
            submitSuccess: false,
    //         avatar: this.$store.state.auth.userData.avatar,
    //         cover: this.$store.state.auth.userData.cover,
            name: this.$store.state.auth.userData.name,
            surname: this.$store.state.auth.userData.surname,
            // bio: this.$store.state.auth.userData.bio,
    //         tags: this.$store.state.auth.userData.tags === null ? [] : this.$store.state.auth.userData.tags.split(","),

    //         selectedFileAvatar: null,
    //         selectedFileUrlAvatar: null,
    //         showSaveAvatar: false,
    //         saveTextAvatar: "Save",

    //         selectedFileCover: null,
    //         selectedFileUrlCover: null,
    //         showSaveCover: false,
    //         saveTextCover: "Save",
            // charCounterBio: this.$store.state.auth.userData.bio.length,
        }
    },
    methods: {
        charCountIntro() {
            this.charCounterIntro = this.bio.length;
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
            formData.append('user_id', this.$store.state.auth.userData.id)
            this.$axios.$post('/upload/user-avatar', formData, {
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
            formData.append('user_id', this.$store.state.auth.userData.id)
            this.$axios.$post('/upload/user-cover', formData, {
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
            await this.$axios.$put('/user/tag', {
                "id": this.$store.state.auth.userData.id,
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
            await this.$axios.$put('/user', {
                'id': this.$store.state.auth.userData.id,
                'name': this.name,
                'surname': this.surname,
                'bio': this.bio,
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
