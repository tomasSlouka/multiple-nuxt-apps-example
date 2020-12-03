<template>
    <div class='page'>
        <Bar />
        <Intro />
        <div class='container-narrow grid gap-60'>
            <Details :tagList='tagList' />
        </div>
    </div>
</template>

<script>
import Bar from '@/components/admin/_common/Makerbar.vue'
import Intro from '@/components/admin/maker/details/Intro.vue'
import Details from '@/components/admin/maker/details/Details.vue'

export default {
    layout: 'defaultAdmin',
        components: {
        Bar, Intro, Details
    },
    async asyncData({ $axios, store }) {
        const [tagList] = await Promise.all ([
            // $axios.$get('/newsletter/' + store.state.auth.userData.newsletter_id),
            $axios.$get('/tag/all')
        ])
        return { tagList }
    }
}
</script>

<style scoped>

</style>
