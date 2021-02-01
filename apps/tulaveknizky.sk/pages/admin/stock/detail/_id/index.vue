<template>
    <div class='page'>
        <SubNav />
        <Hero 
            h1='Administrácia'
            h2='Sklad'
        />
        <FormEdit
            :dataDetail='dataDetail'    
        />
    </div>
</template>

<script>
import Hero from '@/components/admin/_common/Hero.vue'
import SubNav from '@/components/admin/_common/SubNav.vue'
import FormEdit from '@/components/admin/stock/FormEdit.vue'

export default {
    layout: 'defaultAdmin',
        components: {
            SubNav, Hero, FormEdit,
    },
    data() {
        return {

        }
    },
    async asyncData({ $axios, params }) {
        const [dataDetail] = await Promise.all ([
            $axios.$get('/stock/' + params.id),
        ])
        return { dataDetail }
    },
}
</script>

<style>

</style>
