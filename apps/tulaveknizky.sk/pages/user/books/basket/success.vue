<template>
    <div class='page'>
        <SubNav />
        <Hero 
            h1='Moje knižky'
            h2='Batôžtek'
        />
        <Success />

        <!-- <input type="button" @click="packeta()" value="Select pick-up point...">
        <p>Selected point:
            <input type="hidden" id="packeta-point-id">
            <span id="packeta-point-info">None</span>
        </p> -->
    </div>
</template>

<script>
import Hero from '@/components/page/user/books/_common/Hero.vue'
import SubNav from '@/components/page/user/books/_common/SubNav.vue'
import Success from '@/components/page/user/books/basket/Success.vue'

export default {
    layout: 'defaultUser',
        components: {
            SubNav, Hero, Success
    },
}
</script>

<style>

</style>
