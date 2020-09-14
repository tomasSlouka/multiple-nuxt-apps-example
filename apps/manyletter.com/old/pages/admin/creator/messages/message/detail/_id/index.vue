<template>
    <div class='page'>
        <DetailIntro />
        <div class='container-narrow grid gap-60'>

            <Detail :messageData="messageData.data"/>
            <DetailStats :statsMessageData = statsMessageData.data />
            <DetailDangerZone/>

        </div>
    </div>
</template>

<script>
import Header from '@/components/admin/_common/HeaderCreator.vue'
import DetailIntro from '@/components/admin/creator/messages/message/DetailIntro.vue'
import Detail from '@/components/admin/creator/messages/message/Detail.vue'
import DetailStats from '@/components/admin/creator/messages/message/DetailStats.vue'
import DetailDangerZone from '@/components/admin/creator/messages/message/DetailDangerZone.vue'

export default {
    layout: 'default-admin-creator',
        components: {
        Header, DetailIntro, Detail, DetailStats, DetailDangerZone,
    },
    data () {
        return { 
            messageData: null
        }
    },
    async asyncData({ $axios, $auth, params }) {
        const [messageData, statsMessageData] = await Promise.all ([
            $axios.$get('/api/maylday/message/'+ params.id),
            $axios.$get('/api/maylday/stats/message/'+ params.id)
        ])
        return { messageData, statsMessageData }
    },

}
</script>

<style scoped>

</style>
