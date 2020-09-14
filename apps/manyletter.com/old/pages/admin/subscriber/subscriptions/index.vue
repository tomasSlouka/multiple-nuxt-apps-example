<template>
    <!-- <div class='page' v-touch:swipe.right="loadBack" v-touch:swipe.left="loadNext"> -->
    <div class='page'>
        <Subscriptions />
        <div class='container-narrow grid gap-60'>

            <Newsletters v-if='newsletterList.count > 0' :newsletterList = newsletterList />
            <FindNewNewsletters />

        </div>
    </div>
</template>

<script>
import Subscriptions from '@/components/admin/subscriber/subscriptions/Subscriptions.vue'
import Newsletters from '@/components/admin/subscriber/subscriptions/Newsletters.vue'
import FindNewNewsletters from '@/components/admin/subscriber/subscriptions/FindNewNewsletters.vue'

export default {
    layout: 'default-admin-subscriber',
        components: {
        Subscriptions, Newsletters, FindNewNewsletters,
    },
    async asyncData({ $axios }) {
        const newsletterList = await $axios.$get('/api/maylday/newsletter/all/subscriber')
        return { newsletterList }
    },
    // methods: {
    //     loadBack() {
    //         this.$router.go(-1)
    //     },
    //     loadNext() {
    //         this.$router.push({ path: '/admin/subscriber/settings' })
    //     }
    // }

}
</script>

<style scoped>

</style>
