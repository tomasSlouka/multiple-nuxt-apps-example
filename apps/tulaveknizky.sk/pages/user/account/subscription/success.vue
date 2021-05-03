<template>
    <div class='page'>
        <SubNav />
        <Hero 
            h1='Môj účet'
            h2='Predplatné'
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
import Hero from '@/components/page/user/account/_common/Hero.vue'
import SubNav from '@/components/page/user/account/_common/SubNav.vue'
import Success from '@/components/page/user/account/subscription/Success.vue'

export default {
    layout: 'defaultUser',
        components: {
            SubNav, Hero, Success
    },
}
</script>

<style>

</style>
