<template>
    <div class='page'>
        <Hero />
    </div>
</template>

<script>
import Hero from '@/components/page/knihy/najoblubenejsie/Hero.vue'

export default {
    middleware: ['check-userdata'],
    layout: 'defaultPage',
        components: {
            Hero
    },
}
</script>

<style>

</style>
