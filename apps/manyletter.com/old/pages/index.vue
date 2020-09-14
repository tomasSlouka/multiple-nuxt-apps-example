<template>
    <div class='page'>
        <Header />
        <Hero />
        <HeroImg />
        <SocialProof :newsletterList="newsletterList" :newslettersCount="newslettersCount.data" />
        <CTA1 />
        <Features />
        <Tools />
        <CTA2 />
    </div>
</template>

<script>
import Header from '@/components/page/_common/Header.vue'
import Hero from '@/components/page/index_C/Hero.vue'
import HeroImg from '@/components/page/index_C/HeroImg.vue'
import SocialProof from '@/components/page/index_C/SocialProof.vue'
import CTA1 from '@/components/page/index_C/CTA1.vue'
import Features from '@/components/page/index_C/Features.vue'
import Tools from '@/components/page/index_C/Tools.vue'
import CTA2 from '@/components/page/index_C/CTA2.vue'

export default {
    layout: 'default-page',
        components: {
        Header, Hero, HeroImg, SocialProof, CTA1, Features, Tools, CTA2
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
            $axios.$get('/api/maylday/open/newsletters/latest'),
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
