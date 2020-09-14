<template>
    <div class='page'>
        <EditIntro />
        <div class='container-narrow grid gap-60'>

            <EditForm :messageData="messageData.data"/>

        </div>
    </div>
</template>

<script>
import Header from '@/components/admin/_common/HeaderCreator.vue'
import EditIntro from '@/components/admin/creator/messages/message/EditIntro.vue'
import EditForm from '@/components/admin/creator/messages/message/EditForm.vue'

export default {
    layout: 'default-admin-creator',
        components: {
        Header, EditIntro, EditForm,
    },
    async asyncData({ $axios, params }) {
        const messageData = await $axios.$get('/api/maylday/message/'+ params.id)
        return { messageData }
    }
}
</script>

<style scoped>

</style>
