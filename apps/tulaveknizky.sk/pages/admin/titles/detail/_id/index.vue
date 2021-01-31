<template>
    <div class='page'>
        <SubNav />
        <Hero 
            h1='Administrácia'
            h2='Knižné tituly'
        />
        <FormEdit
            :dataDetail='dataDetail'    
            :categoryList='categoryList'    
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
        const [dataDetail, categoryList, tagList] = await Promise.all ([
            $axios.$get('/book/' + params.id),
            $axios.$get('/category/all'),
            $axios.$get('/tag/all'),
        ])
        return { dataDetail, categoryList, tagList }
    },
}
</script>

<style>

</style>
