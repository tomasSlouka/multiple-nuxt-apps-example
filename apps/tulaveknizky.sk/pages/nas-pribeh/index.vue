<template>
    <div class='page'>
        <SubNav />
        <Hero 
            h1='Pre zvedavcov'
            h2='Náš príbeh - ako to cele vzniklo?'
        />
        <WorkingOn />
        <!-- <Newsletter /> -->
    </div>
</template>

<script>
import SubNav from '@/components/page/home/SubNav.vue'
import Hero from '@/components/page/_common/Hero.vue'
import WorkingOn from '@/components/page/home/WorkingOn.vue'
import Newsletter from '@/components/page/home/Newsletter.vue'

export default {
    layout: 'defaultPage',
        components: {
            SubNav, Hero, WorkingOn, Newsletter,
    },
}
</script>

<style>

</style>
