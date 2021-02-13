<template>
    <div class='page'>
        <SubNav />
        <Hero 
            h1='Pre zvedavcov'
            h2='Pridaj sa na odber noviniek'
        />
        <About />
        <Newsletter />
    </div>
</template>

<script>
import SubNav from '@/components/page/home/SubNav.vue'
import Hero from '@/components/page/_common/Hero.vue'
import About from '@/components/page/home/About.vue'
import Newsletter from '@/components/page/home/Newsletter.vue'

export default {
    layout: 'defaultPage',
        components: {
            SubNav, Hero, About, Newsletter,
    },
}
</script>

<style>

</style>
