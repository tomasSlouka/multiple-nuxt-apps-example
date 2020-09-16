<template>
    <div class='page'>
        <Bar />
        <Intro />
        <div class='container-narrow grid gap-60'>
            <Avatar :newsletterData='newsletterData.data' />
            <DangerZone />
        </div>
    </div>
</template>

<script>
import Bar from '@/components/admin/_common/Newsletterbar.vue'
import Intro from '@/components/admin/newsletter/avatar/Intro.vue'
import Avatar from '@/components/admin/newsletter/avatar/Avatar.vue'

export default {
    layout: 'defaultAdmin',
        components: {
        Bar, Intro, Avatar
    },
    async asyncData({ $axios, store }) {
        const [newsletterData] = await Promise.all ([
            $axios.$get('/newsletter/' + store.state.auth.userData.newsletter_id),
        ])
        return { newsletterData }
    }
}
</script>

<style scoped>

</style>
