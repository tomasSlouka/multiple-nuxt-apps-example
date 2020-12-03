<template>
    <div class='page'>
        <Header />
        <Hero />
        <Articles />
        <Newsletter />
        <!-- <Testimonials /> -->
        <!-- <More /> -->
        <!-- <Pricing /> -->
        <!-- <Footer /> -->
    </div>
</template>

<script>
import Header from '@/components/page/_common/Header.vue'
import Hero from '@/components/page/home/Hero.vue'
import Articles from '@/components/page/home/Articles.vue'
import Newsletter from '@/components/page/home/Newsletter.vue'
import Footer from '@/components/page/_common/Footer.vue'

export default {
    layout: 'defaultPage',
        components: {
            Header, Hero, Articles, Newsletter, Footer,
    },
    // async asyncData({ $axios, params }) {
    //     const [domainListNewest, domainListPremium] = await Promise.all ([
    //         $axios.$get('/open/newest'),
    //         $axios.$get('/open/premium')
    //     ])
    //     return { domainListNewest, domainListPremium }
    // },
}
</script>

<style>

</style>
