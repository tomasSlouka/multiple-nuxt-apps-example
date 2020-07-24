<template>
    <div class='page'>
        <Header />
        <Hero />
        <More />
        <List :domainListPremium='domainListPremium' :domainListNewest='domainListNewest'/>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/page/_common/Header.vue'
import Hero from '@/components/page/home/Hero.vue'
import More from '@/components/page/home/More.vue'
import List from '@/components/page/home/List.vue'
import Footer from '@/components/page/_common/Footer.vue'

export default {
    layout: 'defaultPage',
        components: {
            Header, Hero, Footer, List, More
    },
    async asyncData({ $axios, params }) {
        const [domainListNewest, domainListPremium] = await Promise.all ([
            $axios.$get('/api/upfordomain/domain/newest'),
            $axios.$get('/api/upfordomain/domain/premium')
        ])
        return { domainListNewest, domainListPremium }
    },
}
</script>

<style>

</style>
