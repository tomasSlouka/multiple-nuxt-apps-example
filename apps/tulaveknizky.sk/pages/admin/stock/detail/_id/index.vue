<template>
    <div class='page'>
        <SubNav />
        <Hero 
            h1='Administrácia'
            h2='Sklad'
        />
        <Detail
            :dataDetail='dataDetail'    
            :statusList='statusList'    
        />
        <!-- <FormEdit
            :dataDetail='dataDetail'    
        /> -->
    </div>
</template>

<script>
import Hero from '@/components/admin/_common/Hero.vue'
import SubNav from '@/components/admin/_common/SubNav.vue'
import Detail from '@/components/admin/stock/Detail.vue'
// import FormEdit from '@/components/admin/stock/FormEdit.vue'

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
        const [dataDetail, statusList] = await Promise.all ([
            $axios.$get('/stock/' + params.id),
            $axios.$get('/stockstatus/all'),
        ])
        return { dataDetail, statusList }
    },
}
</script>

<style>

</style>
