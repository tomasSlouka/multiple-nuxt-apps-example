<template>
    <div class='page'>
        <Bar />
        <Intro />
        <div class='container-narrow grid gap-60'>
            <NewSubscriberMessage />
        </div>
    </div>
</template>

<script>
import Bar from '@/components/admin/_common/Newsletterbar.vue'
import Intro from '@/components/admin/newsletter/automation/Intro.vue'
import NewSubscriberMessage from '@/components/admin/newsletter/automation/NewSubscriberMessage.vue'

export default {
    layout: 'defaultAdmin',
        components: {
        Bar, Intro, NewSubscriberMessage
    },
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>

</style>
