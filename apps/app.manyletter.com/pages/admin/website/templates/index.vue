<template>
    <div class='page'>
        <Bar />
        <Intro />
        <div class='container-narrow grid gap-60'>
            <List />
        </div>
    </div>
</template>

<script>
import Bar from '@/components/admin/_common/Websitebar.vue'
import Intro from '@/components/admin/website/templates/Intro.vue'
import List from '@/components/admin/website/templates/List.vue'

export default {
    layout: 'defaultAdmin',
        components: {
        Bar, Intro, List
    },
    data() {
        return {

        }
    },
}
</script>

<style scoped>

</style>
