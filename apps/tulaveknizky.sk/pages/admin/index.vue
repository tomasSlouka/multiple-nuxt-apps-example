<template>
    <div class='page'>
        <Intro />
        <div class='container-narrow grid gap-60'>
            <!-- <StatsNewsletter /> -->
            <!-- <StatsWebsite /> -->
        </div>
    </div>
</template>

<script>
import Intro from '@/components/admin/dashboard/Intro.vue'
// import StatsNewsletter from '@/components/admin/dashboard/StatsNewsletter.vue'
// import StatsWebsite from '@/components/admin/dashboard/StatsWebsite.vue'

export default {
    layout: 'defaultAdmin',
    components: {
        Intro
    },
}
</script>

<style scoped>

</style>
