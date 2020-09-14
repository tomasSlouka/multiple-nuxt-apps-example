<template>
    <div class='page'>
        <CreateIntro />
        <div class='container-narrow grid gap-60'>

            <CreateForm/>

        </div>
    </div>
</template>

<script>
import CreateIntro from '@/components/admin/home/newsletter/CreateIntro.vue'
import CreateForm from '@/components/admin/home/newsletter/CreateForm.vue'

export default {
    layout: 'default-admin-home',
        components: {
        CreateIntro, CreateForm,
    },

}
</script>

<style scoped>

</style>
