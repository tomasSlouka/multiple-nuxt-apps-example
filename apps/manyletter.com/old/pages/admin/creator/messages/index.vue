<template>
    <div class='page'>
        <MessagesIntro />
        <div class='container-narrow grid gap-60'>
            <StartMessage />
            <Messages v-if='messageList.count > 0' :messageList='messageList' />
            <Empty v-else text='You have not created any message yet.' />
        </div>
    </div>
</template>

<script>
import MessagesIntro from '@/components/admin/creator/messages/MessagesIntro.vue'
import StartMessage from '@/components/admin/creator/messages/StartMessage.vue'
import Messages from '@/components/admin/creator/messages/Messages.vue'
import Empty from '@/components/admin/_common/Empty.vue'

export default {
    layout: 'default-admin-creator',
        components: {
        MessagesIntro, Messages, StartMessage, Empty,
    },
    async asyncData({ $axios, store }) {
        const [messageList] = await Promise.all ([
            $axios.$get('/api/maylday/message/all/' + store.state.userData.newsletter_id),
        ])
        return { messageList }
    }
}
</script>

<style scoped>

</style>
