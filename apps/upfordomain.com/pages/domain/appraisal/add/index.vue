<template>
    <div class='page'>
        <Header />
        <Hero />
        <!-- <Expert /> -->
        <Pricing />
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/page/_common/Header.vue'
import Hero from '@/components/page/domain/appraisal/add/Hero.vue'
import Pricing from '@/components/page/domain/appraisal/add/Pricing.vue'
import Expert from '@/components/page/domain/appraisal/add/Expert.vue'
import Footer from '@/components/page/_common/Footer.vue'

export default {
    layout: 'defaultPage',
        components: {
            Header, Hero, Pricing, Expert, Footer
    },
    // async asyncData({ $axios, params }) {
    //     const [domainStats] = await Promise.all ([
    //         $axios.$get('/open/stats')
    //     ])
    //     return { domainStats }
    // },
}
</script>

<style>

</style>
