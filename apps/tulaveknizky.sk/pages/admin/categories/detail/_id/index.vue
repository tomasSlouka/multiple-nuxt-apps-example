<template>
    <div class='page'>
        <SubNav />
        <Hero 
            h1='Administrácia'
            h2='Kategórie'
        />
        <FormEdit
            :dataDetail='dataDetail'    
        />
    </div>
</template>

<script>
import Hero from '@/components/admin/_common/Hero.vue'
import SubNav from '@/components/admin/_common/SubNav.vue'
import FormEdit from '@/components/admin/categories/FormEdit.vue'

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
            $axios.$get('/category/' + params.id),
        ])
        return { dataDetail }
    },
}
</script>

<style>

</style>
