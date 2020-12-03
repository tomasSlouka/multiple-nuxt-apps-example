<template>
    <div class='page'>
        <!-- <Header /> -->
        <Hero />
        <Books />
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
import Books from '@/components/page/home/Books.vue'
import Newsletter from '@/components/page/home/Newsletter.vue'
import Footer from '@/components/page/_common/Footer.vue'

export default {
    middleware: ['check-userdata'],
    layout: 'defaultPage',
        components: {
            Header, Hero, Books, Newsletter, Footer,
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
