<template>
    <div class='page'>
        <NewsletterIntro/>
        <div class='container-narrow grid gap-60'>

            <NewsletterDetails :newsletterData="newsletterData.data"/>
            <Messages v-if='messageList.count > 0' :messageList='messageList' />
            <Empty v-else text='There is nothing to show.' />

        </div>
    </div>
</template>

<script>
import NewsletterIntro from '@/components/admin/subscriber/subscriptions/newsletters//detail/NewsletterIntro.vue'
import NewsletterDetails from '@/components/admin/subscriber/subscriptions/newsletters/detail/NewsletterDetails.vue'
import Messages from '@/components/admin/subscriber/subscriptions/newsletters/detail/Messages.vue'
import Empty from '@/components/admin/_common/Empty.vue'

export default {
    layout: 'default-admin-subscriber',
        components: {
        NewsletterIntro, NewsletterDetails, Messages, Empty,
    },
    async asyncData({ $axios, params }) {
        const [newsletterData, messageList] = await Promise.all ([
            $axios.$get('/api/maylday/newsletter/' + params.id),
            $axios.$get('/api/maylday/message/all/' + params.id),
        ])
        return { newsletterData, messageList }
    }
}
</script>

<style scoped>

</style>
