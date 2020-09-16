<template>
    <div class='component grid gap-20 col-2 align-content-start align-items-start'>

        <div class="box grid gap-20">
            <h3>Avatar</h3>
            <p class="small">Click on image to upload new avatar.</p>
            <div class="hr"></div>
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
            <p class="small">Click on image to upload new cover image.</p>
            <div class="hr"></div>
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
        </div>

        
    </div>

</template>

<script>
export default {

    props: ['newsletterData', 'tagList'],

    data() {
        return {
            avatar: this.newsletterData.avatar,
            cover: this.newsletterData.cover,

            selectedFileAvatar: null,
            selectedFileUrlAvatar: null,
            showSaveAvatar: false,
            saveTextAvatar: "Save",

            selectedFileCover: null,
            selectedFileUrlCover: null,
            showSaveCover: false,
            saveTextCover: "Save",
        }
    },
    methods: {
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
</style>
