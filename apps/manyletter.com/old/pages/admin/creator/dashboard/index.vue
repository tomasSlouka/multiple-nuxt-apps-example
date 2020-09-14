<template>
    <div class='page'>
        <Dashboard />
        <div class='container-narrow grid gap-60'>

            <Onboarding :newsletterData = newsletterData.data />
            <Subscribers :statsSubscribersData = statsSubscribersData.data />
            <Newsletter :statsNewsletterData = statsNewsletterData.data />
        </div>
    </div>
</template>

<script>
import Dashboard from '@/components/admin/creator/dashboard/Dashboard.vue'
import Onboarding from '@/components/admin/creator/dashboard/Onboarding.vue'
import Subscribers from '@/components/admin/creator/dashboard/Subscribers.vue'
import Newsletter from '@/components/admin/creator/dashboard/Newsletter.vue'

export default {
    layout: 'default-admin-creator',
        components: {
        Dashboard, Subscribers, Newsletter, Onboarding,
    },
    async asyncData({ $axios, store }) {
        const [newsletterData, statsNewsletterData, statsSubscribersData] = await Promise.all ([
            $axios.$get('/api/maylday/newsletter/' + store.state.userData.newsletter_id),
            $axios.$get('/api/maylday/stats/newsletter/' + store.state.userData.newsletter_id),
            $axios.$get('/api/maylday/stats/subscribers/' + store.state.userData.newsletter_id),
        ])
        return { newsletterData, statsNewsletterData, statsSubscribersData }
    }
}
</script>

<style scoped>

</style>
