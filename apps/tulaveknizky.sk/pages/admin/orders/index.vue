<template>
    <div class='page'>
        <SubNav />
        <Hero 
            h1='Administrácia'
            h2='Objednávky'
        />
        <ListAll
            :orderList='orderList'
        />
    </div>
</template>

<script>
import SubNav from '@/components/admin/_common/SubNav.vue'
import Hero from '@/components/admin/_common/Hero.vue'
import ListAll from '@/components/admin/orders/ListAll.vue'

export default {
    layout: 'defaultAdmin',
        components: {
            SubNav, Hero, ListAll,
    },
    data() {
        return {
            orderList: this.$store.state.order.dataListFiltered,
        }
    },
    async fetch({store}) {
        await store.dispatch("order/getDataList")
    },
    methods: {
        filterChange() {
            this.orderList = this.$store.state.order.dataListFiltered
        }
    }
}
</script>

<style>

</style>
