<template>
    <div class='component'>
        <div class='grid box newsletter align-content-start'>
            <div class="cover" :style="'background-image: url(https://storage.manyletter.com/ymello_filestorage/img/newsletter_cover/' + newsletterData.cover + ')'"></div>
            <div class="header grid gap-20">
                <div class='avatar' >
                    <div :style="'background-image: url(https://storage.manyletter.com/ymello_filestorage/img/newsletter_avatar/' + newsletterData.avatar + ')'"></div>
                </div>
            </div>
            <div class='body grid gap-20 auto align-items-start justify-items-start justify-content-start'>
                <div class='grid gap-30'>
                    <div>
                        <h2>{{ newsletterData.title }}</h2>
                        <p>created by <span class='strong'>{{ newsletterData.creator_name }}</span></p>
                    </div>
                    <p class='thin'>{{ newsletterData.intro }}</p>
                    <p class='thin description'>{{ newsletterData.description }}</p>
                    <div class='grid gap-10 col-2 auto justify-content-start justify-items-start'>
                        <p class=""> <span class='strong'>{{ newsletterData.subscribers_count }}</span> subscribers</p>
                        <p class=""> <span class='strong'>{{ newsletterData.messages_count }}</span> messages</p>
                    </div>
                </div>
                <div class="hr"></div>
                <div>
                    <a v-if='newsletterData.url' class="button cta white" :href='newsletterData.url + "?ref=manyletter.com"' target='_blank'>Go to official website</a>
                    <button v-if='$store.state.userData.user_subscriptions.includes(newsletterData.id)' class="cta red" @click='unsubscribe()'>Unsubscribe</button>
                    <button v-else class="cta" @click='subscribe()'>Click to subscribe now</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['newsletterData'],

    data() {
        return {
            user_id: this.$store.state.userData.id,
        }
    },
    methods: {
        async subscribe() {
            await this.$axios.$put('/api/maylday/user/subscribe', {
                "newsletter_id": this.newsletterData.id,
            })
            .then((response) => {
                console.log(response)
                this.$store.dispatch('setUser')
                .then(() => {
                    this.newsletterData.subscribers_count++
                })
                // this.$router.go(0)
            }, (error) => {
                console.log(error)
                //this.res = error.response.data.message
            });
        },
        async unsubscribe() {
            await this.$axios.$put('/api/maylday/user/unsubscribe', {
                "newsletter_id": this.newsletterData.id,
            })
            .then((response) => {
                console.log(response)
                this.$store.dispatch('setUser')
                .then(() => {
                    this.newsletterData.subscribers_count--
                })
                // this.$router.go(0)
            }, (error) => {
                console.log(error)
                //this.res = error.response.data.message
            });
        }
    },

}
</script>

<style scoped>
p.description {
    white-space: pre-wrap
}
h2 {
    margin-bottom: 10px;
}
.box.newsletter {
    padding: 0px;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.box.newsletter > .cover {
    width: 100%;
    height: 280px;
    background-color: #eee;
    border-bottom: 1px solid #F5F5F5;
    border-radius: 8px 8px 0px 0px;
    background-size: cover;
    background-position: center center;
}
.box.newsletter .header {
    position: relative;
    padding: 10px 30px 30px 30px;
}
.box.newsletter .header > .avatar {
    position: relative;
    width: 120px;
}
.box.newsletter .header > .avatar > div {
    position: absolute;
    top: -70px;
    left: 0px;
    background-color: #eee;
    background-size: cover;
    background-position: center center;
    border-radius: 100px;
    border: 5px solid #fff;
    height: 120px;
    width: 120px;
    padding: 7px;
}
.box.newsletter > .body {
    padding: 40px 30px 30px 30px;
}
</style>
