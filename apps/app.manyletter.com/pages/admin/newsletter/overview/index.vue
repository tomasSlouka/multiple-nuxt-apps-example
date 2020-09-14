<template>
    <div class='page'>
        <Bar />
        <Intro />
        <div class='container-narrow grid gap-60'>
            <!-- <Details :newsletterData='newsletterData.data' :tagList='tagList'/> -->
            <Details :newsletterData="newsletterData.data"/>
        </div>
    </div>
</template>

<script>
import Bar from '@/components/admin/_common/Newsletterbar.vue'
import Intro from '@/components/admin/newsletter/overview/Intro.vue'
import Details from '@/components/admin/newsletter/overview/Details.vue'

export default {
    layout: 'defaultAdmin',
        components: {
        Bar, Intro, Details
    },
    async asyncData({ $axios, store }) {
        const [newsletterData] = await Promise.all ([
            $axios.$get('/newsletter/' + store.state.auth.userData.newsletter_id)
        ])
        return { newsletterData }
    }
}
</script>

<style scoped>

</style>
