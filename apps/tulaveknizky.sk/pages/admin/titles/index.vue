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
    middleware: ['check-userdata'],
    layout: 'defaultAdmin',
        components: {
            SubNav, Hero, ListAll,
    },
    data() {
        return {
            bookList: this.$store.state.books.bookListFiltered,
            // dataList: Object.keys(this.$store.state.books.filteredList).length === 0 ? this.$store.state.books.filteredList : this.$store.state.books.list,
            tagList: this.$store.state.books.tagList
        }
    },
    async fetch({store}) {
        await store.dispatch("books/getBookList")
        // await store.dispatch("books/getTagList")
    },
    methods: {
        filterChange() {
            this.bookList = this.$store.state.books.bookListFiltered
        }
    }
    // async asyncData({ $axios, params }) {
    //     const [dataList] = await Promise.all ([
    //         $axios.$get('/book/all'),
    //     ])
    //     return { dataList }
    // },
}
</script>

<style>

</style>
