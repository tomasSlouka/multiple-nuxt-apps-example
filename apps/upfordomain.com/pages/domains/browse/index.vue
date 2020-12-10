<template>
    <div class='page'>
        <Header />
        <Hero :domainList='domainList' :domainStats='domainStats'/>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/page/_common/Header.vue'
import Hero from '@/components/page/domains/browse/Hero.vue'
import Footer from '@/components/page/_common/Footer.vue'

export default {
    layout: 'defaultPage',
        components: {
            Header, Hero, Footer
    },
    async asyncData({ $axios, params }) {
        const [domainList, domainStats] = await Promise.all ([
            $axios.$get('/open'),
            $axios.$get('/open/stats')
        ])
        return { domainList, domainStats }
    },
}
</script>

<style>

</style>
