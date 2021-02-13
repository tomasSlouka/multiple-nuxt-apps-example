<template>
    <div class='page'>
        <SubNav />
        <Hero 
            h1='Moje knižky'
            h2='Batôžtek'
        />
        <Basket
            :dataBasket='dataBasket'
        />
    </div>
</template>

<script>
import Hero from '@/components/page/user/books/_common/Hero.vue'
import SubNav from '@/components/page/user/books/_common/SubNav.vue'
import Basket from '@/components/page/user/books/basket/Basket.vue'

export default {
    layout: 'defaultUser',
        components: {
            SubNav, Hero, Basket
    },
    data() {
        return {
            dataBasket: this.$store.state.order.dataBasket,
        }
    },
    async fetch({store}) {
        await store.dispatch("order/getDataBasket")
    }
}
</script>

<style>

</style>
