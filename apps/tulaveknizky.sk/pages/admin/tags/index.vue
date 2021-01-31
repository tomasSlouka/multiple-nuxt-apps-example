<template>
    <div class='page'>
        <SubNav />
        <Hero 
            h1='Administrácia'
            h2='Značky'
        />
        <ListAll
            :tagList='tagList'
        />
    </div>
</template>

<script>
import SubNav from '@/components/admin/_common/SubNav.vue'
import Hero from '@/components/admin/_common/Hero.vue'
import ListAll from '@/components/admin/tags/ListAll.vue'

export default {
    layout: 'defaultAdmin',
        components: {
            SubNav, Hero, ListAll,
    },
    data() {
        return {
            tagList: this.$store.state.tag.dataListFiltered,
        }
    },
    async fetch({store}) {
        await store.dispatch("tag/getDataList")
    },
    methods: {
        filterChange() {
            this.tagList = this.$store.state.tag.dataListFiltered
        }
    }
}
</script>

<style>

</style>
