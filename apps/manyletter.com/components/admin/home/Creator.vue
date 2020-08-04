<template>
    <div class='component'>
        <div class='grid gap-20'>
            <h3>Your newsletters</h3>

            <div class='grid gap-20 md-col-2'>
                <div class='grid box pointer newsletter align-content-start' v-for="item in newsletterList.data" :key="item.id" @click.once="setUserNewsletter(item.newsletter_id)">
                    <div class="cover" :style="'background-image: url(https://storage.manyletter.com/ymello_filestorage/img/newsletter_cover/' + item.cover + ')'"></div>
                    <div class="header grid gap-20">
                        <div class='avatar'>
                            <div :style="'background-image: url(https://storage.manyletter.com/ymello_filestorage/img/newsletter_avatar/' + item.avatar + ')'"></div>
                        </div>
                    </div>
                    <div class='body grid gap-20 auto align-items-start justify-items-start justify-content-start'>
                        <div class='grid gap-20'>
                            <div>
                                <h3>{{ item.title }}</h3>
                                <p class="font14">created by <span class='strong'>{{ item.creator_name }}</span></p>
                            </div>
                            <p class='thin'>{{ item.intro }}</p>
                            <div class='grid gap-10 auto col-2 justify-content-start justify-items-start'>
                                <p class=""> <span class='strong'>{{ item.subscribers_count }}</span> subscribers </p>
                                <p class=""> <span class='strong'>{{ item.messages_count }}</span> messages </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: ['newsletterList'],

    data () {
        return { 

        }
    },
    methods: {
        async setUserNewsletter(newsletter_id) {
            await this.$axios.$put('/api/maylday/user/newsletter', {
                "newsletter_id": newsletter_id
            })
            .then((response) => {
                console.log(response);
                this.$store.dispatch('setUser')
                .then(() => {
                    this.$router.push('/admin/creator/dashboard');
                })
            }, (error) => {
                console.log(error);
                //this.res = error.response.data.message
            });
        }
    },
}
</script>

<style scoped>
.box.newsletter {
    padding: 0px;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.box.newsletter:hover {
    -webkit-transform: scale(1.02, 1.02);
    transform: scale(1.02, 1.02);
}
.box.newsletter > .cover {
    width: 100%;
    height: 130px;
    background-color: #eee;
    border-bottom: 1px solid #F5F5F5;
    border-radius: 8px 8px 0px 0px;
    /* background-image: url('~assets/img/newsletter-cover.jpg'); */
    background-size: cover;
    background-position: center center;
}
.box.newsletter .header {
    position: relative;
    padding: 10px 30px 30px 30px;
}
.box.newsletter .header > .avatar {
    position: relative;
    width: 80px;
}
.box.newsletter .header > .avatar > div {
    position: absolute;
    top: -40px;
    left: 0px;
    background-color: #eee;
    background-size: cover;
    background-position: center center;
    border-radius: 100px;
    border: 5px solid #fff;
    height: 80px;
    width: 80px;
    padding: 7px;
}
.box.newsletter > .body {
    padding: 20px 30px 30px 30px;
}
</style>
