<template>
    <div class='page'>
        <Bar />
        <Intro />
        <div class='container-narrow grid gap-60'>
        </div>
    </div>
</template>

<script>
import Bar from '@/components/admin/_common/Teambar.vue'
import Intro from '@/components/admin/team/details/Intro.vue'

export default {
    layout: 'defaultAdmin',
        components: {
        Bar, Intro 
    },
}
</script>

<style scoped>

</style>
