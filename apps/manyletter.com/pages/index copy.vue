<template>
    <div class='page'>
        <Header />
        <!-- <Intro :usersCount="usersCount.data"/> -->
        <!-- <Showcase /> -->
        <LearnMoreSubscriber :usersCount="usersCount.data" :newslettersCount="newslettersCount.data"/>
        <!-- <LearnMoreCreator /> -->
        <!-- <Reviews /> -->
        <Newsletters :newsletterList="newsletterList" />
        <GetStarted />
    </div>
</template>

<script>
import Header from '@/components/page/_common/Header.vue'
import Intro from '@/components/page/index_B/Intro.vue'
import Showcase from '@/components/page/index_B/Showcase.vue'
import LearnMoreSubscriber from '@/components/page/index_B/LearnMoreSubscriber.vue'
import LearnMoreCreator from '@/components/page/index_B/LearnMoreCreator.vue'
import Reviews from '@/components/page/index_B/Reviews.vue'
import Newsletters from '@/components/page/index_B/Newsletters.vue'
import GetStarted from '@/components/page/index_B/GetStarted.vue'

export default {
    layout: 'default-page',
        components: {
        Header, Intro, Showcase, LearnMoreCreator, LearnMoreSubscriber, Reviews, Newsletters, GetStarted,
    },
    data() {
        return {
            referrer: this.$route.query.r || ''
        }
    },
    async asyncData({ $axios, params }) {
        console.log('asyncData executed');
        const [newsletterList, newslettersCount, usersCount] = await Promise.all ([
            // $axios.$get('/api/maylday/user'),
            $axios.$get('/api/maylday/open/newsletters'),
            $axios.$get('/api/maylday/open/newsletters/count'),
            $axios.$get('/api/maylday/open/users/count')
        ])
        return { newsletterList, newslettersCount, usersCount }
    },
    created() {
        // this.$store.dispatch('setPosts', this.newsletterList)
        // console.log(this.$store.getters.loadedPosts)
        // client
        if (this.referrer !== '') {
            if (this.$cookies.get('manyletter.referrer') === undefined) {
                this.$cookies.set('manyletter.referrer', this.referrer, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 30 * 3
                })
            }
        }
    }
}
</script>

<style scoped>

</style>
