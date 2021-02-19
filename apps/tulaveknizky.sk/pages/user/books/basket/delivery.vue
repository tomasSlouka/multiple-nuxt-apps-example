<template>
    <div class='page'>
        <SubNav />
        <Hero 
            h1='Moje knižky'
            h2='Batôžtek'
        />

        <Delivery
            v-if='dataBasket.count_items > 0'
            :dataBasket='dataBasket'
        />
        <Empty v-else />
    </div>
</template>

<script>
import Hero from '@/components/page/user/books/_common/Hero.vue'
import SubNav from '@/components/page/user/books/_common/SubNav.vue'
import Delivery from '@/components/page/user/books/basket/Delivery.vue'
import Empty from '@/components/page/user/books/basket/Empty.vue'

export default {
    layout: 'defaultUser',
        components: {
            SubNav, Hero, Delivery, Empty
    },
    head() {
        return {
        script: [
            
            {
                src: "https://widget.packeta.com/www/js/library.js",
            }
        ]
        }
    },
    data() {
        return {
            dataBasket: this.$store.state.order.dataBasket,
        }
    },
    async fetch({store}) {
        await store.dispatch("order/getDataBasket")
    },
    methods: {
        
    },
}
</script>

<style>

</style>
