<template>
    <div class='page'>
        <Hero />
    </div>
</template>

<script>
import Hero from '@/components/page/knihy/vsetky/Hero.vue'

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
