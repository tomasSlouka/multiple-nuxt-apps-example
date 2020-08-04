<template>
    <div class='page'>
        <CreateIntro />
        <div class='container-narrow grid gap-60'>

            <CreateForm/>
            
        </div>
    </div>
</template>

<script>
import Header from '@/components/admin/_common/HeaderCreator.vue'
import CreateIntro from '@/components/admin/creator/messages/message/CreateIntro.vue'
import CreateForm from '@/components/admin/creator/messages/message/CreateForm.vue'

export default {
    layout: 'default-admin-creator',
        components: {
        Header, CreateIntro, CreateForm,
    },

}
</script>

<style scoped>

</style>
