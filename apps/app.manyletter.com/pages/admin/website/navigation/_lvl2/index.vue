<template>
    <div class='page'>
        <Bar />
        <Intro />
        <div class='container-narrow grid gap-60'>
            <Navigation />
        </div>
    </div>
</template>

<script>
import Bar from '@/components/admin/_common/Websitebar.vue'
import Intro from '@/components/admin/website/navigation/Intro.vue'
import Navigation from '@/components/admin/website/navigation/Navigation.vue'

export default {
    layout: 'defaultAdmin',
        components: {
        Bar, Intro, Navigation
    },
    data() {
        return {

        }
    },
}
</script>

<style scoped>

</style>
