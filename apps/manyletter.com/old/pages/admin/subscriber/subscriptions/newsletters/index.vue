<template>
    <div class='page'>
        <NewslettersIntro/>
        <div class='container-narrow grid gap-60'>

            <Newsletters :newsletterList="newsletterList"/>

        </div>
    </div>
</template>

<script>
import NewslettersIntro from '@/components/admin/subscriber/subscriptions/newsletters/NewslettersIntro.vue'
import Newsletters from '@/components/admin/subscriber/subscriptions/newsletters/Newsletters.vue'

export default {
    layout: 'default-admin-subscriber',
        components: {
        NewslettersIntro, Newsletters, 
    },
    async asyncData({ $axios }) {
        const newsletterList = await $axios.$get('/api/maylday/newsletter/all')
        return { newsletterList }
    }


}
</script>

<style scoped>

</style>
