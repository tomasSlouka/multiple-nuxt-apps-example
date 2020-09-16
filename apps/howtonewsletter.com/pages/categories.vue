<template>
    <div class='page'>
        <!-- <Header /> -->
        <Hero />
        <!-- <Testimonials /> -->
        <!-- <More /> -->
        <!-- <Pricing /> -->
        <!-- <Footer /> -->
    </div>
</template>

<script>
import Header from '@/components/page/_common/Header.vue'
import Hero from '@/components/page/categories/Hero.vue'
import Footer from '@/components/page/_common/Footer.vue'

export default {
    layout: 'defaultPage',
        components: {
            Header, Hero, Footer,
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
