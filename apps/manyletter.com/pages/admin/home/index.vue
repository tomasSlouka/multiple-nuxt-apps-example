<template>
    <div class='page'>
        <Home />
        <div class='container-narrow grid gap-60'>

            <Subscriber/>
            <Creator v-if='newsletterList.count > 0' :newsletterList="newsletterList" />
            <StartNewsletter />

        </div>
    </div>
</template>

<script>
import Home from '@/components/admin/home/Home.vue'
import Subscriber from '@/components/admin/home/Subscriber.vue'
import Creator from '@/components/admin/home/Creator.vue'
import StartNewsletter from '@/components/admin/home/StartNewsletter.vue'

export default {
    layout: 'default-admin-home',
        components: {
        Home, Subscriber, Creator, StartNewsletter,
    },
    async asyncData({ $axios }) {
        const newsletterList = await $axios.$get('/api/maylday/newsletter/all/creator')
        return { newsletterList }
    }


}
</script>

<style scoped>

</style>
