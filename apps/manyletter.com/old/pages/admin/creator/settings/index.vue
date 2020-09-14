<template>
    <div class='page'>
        <Settings />
        <div class='container-narrow grid gap-60'>
            <NewsletterDetails :newsletterData='newsletterData.data' :tagList='tagList' />
            <!-- <Team /> -->
            <ShareSubscription/>
            <ImportExport />
            <PaymentInfo />
            <DangerZone/>
        </div>
    </div>
</template>

<script>
import Settings from '@/components/admin/creator/settings/Settings.vue'
import NewsletterDetails from '@/components/admin/creator/settings/NewsletterDetails.vue'
import Team from '@/components/admin/creator/settings/Team.vue'
import ShareSubscription from '@/components/admin/creator/settings/ShareSubscription.vue'
import ImportExport from '@/components/admin/creator/settings/ImportExport.vue'
import PaymentInfo from '@/components/admin/creator/settings/PaymentInfo.vue'
import DangerZone from '@/components/admin/creator/settings/DangerZone.vue'

export default {
    layout: 'default-admin-creator',
        components: {
        Settings, Team, 
        ShareSubscription, DangerZone, NewsletterDetails, PaymentInfo, ImportExport,
    },
    async asyncData({ $axios, store }) {
        const [newsletterData, tagList] = await Promise.all ([
            $axios.$get('/api/maylday/newsletter/' + store.state.userData.newsletter_id),
            $axios.$get('/api/maylday/tag/all')
        ])
        return { newsletterData, tagList }
    }
}
</script>

<style scoped>

</style>
