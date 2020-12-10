<template>
    <div class='page'>
        <Header />
        <Hero :domainStats='domainStats' />
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/page/_common/Header.vue'
import Hero from '@/components/page/domain/add/Hero.vue'
import Footer from '@/components/page/_common/Footer.vue'

export default {
    layout: 'defaultPage',
        components: {
            Header, Hero, Footer
    },
    async asyncData({ $axios, params }) {
        const [domainStats] = await Promise.all ([
            $axios.$get('/open/stats')
        ])
        return { domainStats }
    },
}
</script>

<style>

</style>
