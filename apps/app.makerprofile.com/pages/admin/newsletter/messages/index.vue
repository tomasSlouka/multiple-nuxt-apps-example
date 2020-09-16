<template>
    <div class='page'>
        <Bar />
        <Intro />
        <div class='container-narrow grid gap-60'>
            <List v-if='messageList.count > 0' :messageList='messageList' />
            <Empty v-else text='You have not created any message yet.' />
        </div>
    </div>
</template>

<script>
import Bar from '@/components/admin/_common/Newsletterbar.vue'
import Intro from '@/components/admin/newsletter/messages/Intro.vue'
import List from '@/components/admin/newsletter/messages/List.vue'

export default {
    layout: 'defaultAdmin',
        components: {
        Bar, Intro, List,
    },
    async asyncData({ $axios, store }) {
        const [messageList] = await Promise.all ([
            $axios.$get('/message/all/' + store.state.auth.userData.newsletter_id),
        ])
        return { messageList }
    }
}
</script>

<style scoped>

</style>
