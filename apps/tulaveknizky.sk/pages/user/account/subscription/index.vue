<template>
    <div class='page'>
        <SubNav />
        <Hero 
            h1='Môj účet'
            h2='Predplatné'
        />
        <Payment />
    </div>
</template>

<script>
import Hero from '@/components/page/user/account/_common/Hero.vue'
import SubNav from '@/components/page/user/account/_common/SubNav.vue'
import Payment from '@/components/page/user/account/subscription/Payment.vue'

export default {
    layout: 'defaultUser',
        components: {
            SubNav, Hero, Payment
    },
}
</script>

<style>

</style>
