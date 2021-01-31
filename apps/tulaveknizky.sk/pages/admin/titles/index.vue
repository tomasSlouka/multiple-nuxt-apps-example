<template>
    <div class='page'>
        <SubNav />
        <Hero 
            h1='Administrácia'
            h2='Knižné tituly'
        />
        <ListAll
            :bookList='bookList'
        />
    </div>
</template>

<script>
import SubNav from '@/components/admin/_common/SubNav.vue'
import Hero from '@/components/admin/_common/Hero.vue'
import ListAll from '@/components/admin/titles/ListAll.vue'

export default {
    layout: 'defaultAdmin',
        components: {
            SubNav, Hero, ListAll,
    },
    data() {
        return {
            bookList: this.$store.state.book.dataListFiltered,
        }
    },
    async fetch({store}) {
        await store.dispatch("book/getDataList")
    },
    methods: {
        filterChange() {
            this.bookList = this.$store.state.book.dataListFiltered
        }
    }
}
</script>

<style>

</style>
