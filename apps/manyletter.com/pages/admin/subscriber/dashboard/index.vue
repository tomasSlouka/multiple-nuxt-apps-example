<template>
    <div class='page'>
    <!-- <div class='page' v-touch:swipe.right="loadBack" v-touch:swipe.left="loadNext"> -->
        <Dashboard />
        <div class='container-narrow grid gap-60'>

            <Subscriptions :statsSubscriptionsData = statsSubscriptionsData.data />

        </div>
    </div>
</template>

<script>
import Dashboard from '@/components/admin/subscriber/dashboard/Dashboard.vue'
import Subscriptions from '@/components/admin/subscriber/dashboard/Subscriptions.vue'

export default {
    layout: 'default-admin-subscriber',
        components: {
        Dashboard, Subscriptions,
    },
    async asyncData({ $axios, $auth }) {
        const [statsSubscriptionsData] = await Promise.all ([
            $axios.$get('/api/maylday/stats/subscriptions')
        ])
        return { statsSubscriptionsData }
    },
    methods: {
        loadBack() {
            this.$router.go(-1)
        },
        loadNext() {
            this.$router.push({ path: '/admin/subscriber/subscriptions' })
        }
    }

}
</script>

<style scoped>

</style>
