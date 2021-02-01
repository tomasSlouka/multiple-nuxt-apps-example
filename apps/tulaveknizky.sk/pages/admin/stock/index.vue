<template>
    <div class='page'>
        <SubNav />
        <Hero 
            h1='Administrácia'
            h2='Sklad'
        />
        <ListAll
            :stockList='stockList'
        />
    </div>
</template>

<script>
import SubNav from '@/components/admin/_common/SubNav.vue'
import Hero from '@/components/admin/_common/Hero.vue'
import ListAll from '@/components/admin/stock/ListAll.vue'

export default {
    layout: 'defaultAdmin',
        components: {
            SubNav, Hero, ListAll,
    },
    data() {
        return {
            stockList: this.$store.state.stock.dataListFiltered,
        }
    },
    async fetch({store}) {
        await store.dispatch("stock/getDataList")
    },
    methods: {
        filterChange() {
            this.stockList = this.$store.state.stock.dataListFiltered
        }
    }
}
</script>

<style>

</style>
