<template>
    <div class='page'>
        <SubNav />
        <Hero 
            h1='Administrácia'
            h2='Kategórie'
        />
        <ListAll
            :categoryList='categoryList'
        />
    </div>
</template>

<script>
import SubNav from '@/components/admin/_common/SubNav.vue'
import Hero from '@/components/admin/_common/Hero.vue'
import ListAll from '@/components/admin/categories/ListAll.vue'

export default {
    layout: 'defaultAdmin',
        components: {
            SubNav, Hero, ListAll
    },
    data() {
        return {
            categoryList: this.$store.state.category.dataListFiltered,
        }
    },
    async fetch({store}) {
        await store.dispatch("category/getDataList")
    },
    methods: {
        filterChange() {
            this.categoryList = this.$store.state.category.dataListFiltered
        }
    }
}
</script>

<style>

</style>
