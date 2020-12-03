<template>
    <div class='page'>
        <Hero />
        <Books />
    </div>
</template>

<script>
import Hero from '@/components/page/user/Hero.vue'
import Books from '@/components/page/user/Books.vue'

export default {
    middleware: ['check-userdata'],
    layout: 'defaultPage',
        components: {
            Hero, Books
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
