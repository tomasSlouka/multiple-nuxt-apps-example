<template>
    <div class='page'>
        <CreateSuccessIntro />
        <div class='container-narrow grid gap-60'>

            <CreateSuccessBody/>

        </div>
    </div>
</template>

<script>
import CreateSuccessIntro from '@/components/admin/home/newsletter/CreateSuccessIntro.vue'
import CreateSuccessBody from '@/components/admin/home/newsletter/CreateSuccessBody.vue'

export default {
    layout: 'default-admin-home',
        components: {
        CreateSuccessIntro, CreateSuccessBody
    },

}
</script>

<style scoped>

</style>
