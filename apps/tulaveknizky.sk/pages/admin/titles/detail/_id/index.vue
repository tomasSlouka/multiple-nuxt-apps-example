<template>
    <div class='page'>
        <SubNav />
        <Hero 
            h1='Administrácia'
            h2='Knižné tituly'
        />
        <FormEdit
            :dataDetail='dataDetail'    
            :tagList='tagList'    
        />
    </div>
</template>

<script>
import Hero from '@/components/admin/_common/Hero.vue'
import SubNav from '@/components/admin/_common/SubNav.vue'
import FormEdit from '@/components/admin/titles/FormEdit.vue'

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
        const [dataDetail, tagList] = await Promise.all ([
            $axios.$get('/book/' + params.id),
            $axios.$get('/tag/all'),
        ])
        return { dataDetail, tagList }
    },
}
</script>

<style>

</style>
