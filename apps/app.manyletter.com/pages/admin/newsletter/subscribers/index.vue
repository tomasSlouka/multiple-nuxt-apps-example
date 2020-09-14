<template>
    <div class='page'>
        <Bar />
        <Intro />
        <div class='container-narrow grid gap-60'>
            <!-- <Stats /> -->
            <Actions />
        </div>
    </div>
</template>

<script>
import Bar from '@/components/admin/_common/Newsletterbar.vue'
import Intro from '@/components/admin/newsletter/subscribers/Intro.vue'
import Stats from '@/components/admin/newsletter/subscribers/Stats.vue'
import Actions from '@/components/admin/newsletter/subscribers/Actions.vue'

export default {
    layout: 'defaultAdmin',
        components: {
        Bar, Intro, Actions, Stats
    },
    data() {
        return {

        }
    },
}
</script>

<style scoped>

</style>
