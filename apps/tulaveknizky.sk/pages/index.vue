<template>
    <div class='page'>
        <!-- <Header /> -->
        <SubNav />
        <Hero />
        <More />
        <Books />
        <Newsletter />
        <!-- <Testimonials /> -->
        <!-- <More /> -->
        <!-- <Pricing /> -->
        <!-- <Footer /> -->
    </div>
</template>

<script>
import SubNav from '@/components/page/home/SubNav.vue'
import Hero from '@/components/page/home/Hero.vue'
import More from '@/components/page/home/More.vue'
import Books from '@/components/page/home/Books.vue'
import Newsletter from '@/components/page/home/Newsletter.vue'

export default {
    layout: 'defaultPage',
        components: {
            SubNav, Hero, More, Books, Newsletter,
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
