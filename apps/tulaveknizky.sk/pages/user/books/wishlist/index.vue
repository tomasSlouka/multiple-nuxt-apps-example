<template>
    <div class='page'>
        <SubNav />
        <Hero 
            h1='Moje knižky'
            h2='Wishlist'
        />
    </div>
</template>

<script>
import Hero from '@/components/page/user/books/_common/Hero.vue'
import SubNav from '@/components/page/user/books/_common/SubNav.vue'

export default {
    layout: 'defaultUser',
        components: {
            SubNav, Hero
    },
}
</script>

<style>

</style>
