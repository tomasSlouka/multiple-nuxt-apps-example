<template>
    <div class='page'>
        <Header />
        <Hero />
        <Faq />
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/page/_common/Header.vue'
import Hero from '@/components/page/faq/faq_buyer/Hero.vue'
import Faq from '@/components/page/faq/faq_buyer/Faq.vue'
import Footer from '@/components/page/_common/Footer.vue'

export default {
    layout: 'defaultPage',
        components: {
            Header, Hero, Faq, Footer
    },
}
</script>

<style>

</style>
