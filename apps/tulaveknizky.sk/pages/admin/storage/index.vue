<template>
    <div class='page'>
        <SubNav />
        <Hero 
            h1='Administrácia'
            h2='Sklad'
        />
    </div>
</template>

<script>
import Hero from '@/components/admin/_common/Hero.vue'
import SubNav from '@/components/admin/_common/SubNav.vue'

export default {
    middleware: ['check-userdata'],
    layout: 'defaultPage',
        components: {
            SubNav, Hero
    },
}
</script>

<style>

</style>
