<template>
    <div class='page'>
        <SubNav />
        <Hero 
            h1='Môj účet'
            h2='Kredit'
        />
    </div>
</template>

<script>
import Hero from '@/components/page/user/account/_common/Hero.vue'
import SubNav from '@/components/page/user/account/_common/SubNav.vue'

export default {
    layout: 'defaultUser',
        components: {
            SubNav, Hero
    },
}
</script>

<style>

</style>
