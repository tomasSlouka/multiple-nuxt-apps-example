<template>
    <div class='page'>
        <SubNav />
        <Hero 
            h1='Administrácia'
            h2='Objednávky'
        />
        <Detail
            :dataDetail='dataDetail'    
        />
    </div>
</template>

<script>
import Hero from '@/components/admin/_common/Hero.vue'
import SubNav from '@/components/admin/_common/SubNav.vue'
import Detail from '@/components/admin/orders/Detail.vue'

export default {
    layout: 'defaultAdmin',
        components: {
            SubNav, Hero, Detail,
    },
    data() {
        return {

        }
    },
    async asyncData({ $axios, params }) {
        const [dataDetail] = await Promise.all ([
            $axios.$get('/order/' + params.id),
        ])
        return { dataDetail }
    },
}
</script>

<style>

</style>
