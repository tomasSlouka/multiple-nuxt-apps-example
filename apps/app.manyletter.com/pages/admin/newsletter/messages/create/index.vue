<template>
    <div class='page'>
        <Bar />
        <Intro />
        <div class='container-narrow maxw500 grid gap-60'>
            <Form />
        </div>
    </div>
</template>

<script>
import Bar from '@/components/admin/_common/Newsletterbar.vue'
import Intro from '@/components/admin/newsletter/messages/FormCreateIntro.vue'
import Form from '@/components/admin/newsletter/messages/FormCreate.vue'

export default {
    layout: 'defaultAdmin',
        components: {
        Bar, Intro, Form,
    }
}
</script>

<style scoped>

</style>
