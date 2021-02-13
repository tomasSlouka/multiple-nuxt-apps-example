<template>
    <div class='page'>
        <SubNav />
        <Hero 
            h1='Knižnica'
            h2='Požičaj si knižku z online knižnice'
        />
        <Books 
            :bookList='bookList'
        />
    </div>
</template>

<script>
import Hero from '@/components/page/_common/Hero.vue'
import SubNav from '@/components/page/home/SubNav.vue'
import Books from '@/components/page/home/Books.vue'

export default {
    layout: 'defaultPage',
        components: {
            Hero, SubNav, Books
    },
    data() {
        return {
            bookList: this.$store.state.openbook.dataListFiltered,
        }
    },
    async fetch({store}) {
        await store.dispatch("openbook/getDataList")
    },
    methods: {
        filterChange() {
            this.bookList = this.$store.state.openbook.dataListFiltered
        }
    }
}
</script>

<style>

</style>
