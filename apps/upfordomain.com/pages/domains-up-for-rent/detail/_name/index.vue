<template>
    <div class='page'>
        <Header />
        <Hero :domainDetail='domainDetail.data' />
        <More v-if='domainListMore.count > 0' :domainListMore='domainListMore'/>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/page/_common/Header.vue'
import Hero from '@/components/page/domains-up-for-rent/detail/Hero.vue'
import More from '@/components/page/domains-up-for-rent/detail/More.vue'
import Footer from '@/components/page/_common/Footer.vue'

export default {
    layout: 'defaultPage',
        components: {
            Header, Hero, Footer, More
    },
    async asyncData({ $axios, params }) {
        // console.log('asyncData executed');
        const [domainDetail, domainListMore] = await Promise.all ([
            $axios.$get('/open/detail/' + params.name),
            $axios.$get('/open/more/' + params.name)
        ])
        return { domainDetail, domainListMore }
    },
}
</script>

<style>

</style>
