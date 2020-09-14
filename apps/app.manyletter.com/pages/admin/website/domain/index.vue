<template>
    <div class='page'>
        <Bar />
        <Intro />
        <div class='container-narrow grid gap-60'>
            <Password />
            <DangerZone />
        </div>
    </div>
</template>

<script>
import Bar from '@/components/admin/_common/Websitebar.vue'
import Intro from '@/components/admin/website/domain/Intro.vue'

export default {
    layout: 'defaultAdmin',
        components: {
        Bar, Intro 
    },
}
</script>

<style scoped>

</style>
