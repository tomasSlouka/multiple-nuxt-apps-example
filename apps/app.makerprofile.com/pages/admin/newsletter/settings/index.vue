<template>
    <div class='page'>
        <Bar />
        <Intro />
        <div class='container-narrow grid gap-60'>
            <Details :newsletterData='newsletterData.data' :tagList='tagList'/>
            <DangerZone />
        </div>
    </div>
</template>

<script>
import Bar from '@/components/admin/_common/Newsletterbar.vue'
import Intro from '@/components/admin/newsletter/settings/Intro.vue'
import Details from '@/components/admin/newsletter/settings/Details.vue'
import DangerZone from '@/components/admin/newsletter/settings/DangerZone.vue'

export default {
    layout: 'defaultAdmin',
        components: {
        Bar, Intro, Details, DangerZone
    },
    data() {
        return {
            level: this.$store.state ? this.$store.state.auth.userData.level : "",
        }
    },
    async asyncData({ $axios, store }) {
        const [newsletterData, tagList] = await Promise.all ([
            $axios.$get('/newsletter/' + store.state.auth.userData.newsletter_id),
            $axios.$get('/tag/all')
        ])
        return { newsletterData, tagList }
    }
}
</script>

<style scoped>

</style>
