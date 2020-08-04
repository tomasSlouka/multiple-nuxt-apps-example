<template>
    <div class='page'>
        <Header />
        <Intro />
        <Pricing />
        <GetStarted />
    </div>
</template>

<script>
import Header from '@/components/page/_common/Header.vue'
import Intro from '@/components/page/pricing/Intro.vue'
import Pricing from '@/components/page/pricing/Pricing.vue'
import GetStarted from '@/components/page/index_B/GetStarted.vue'

export default {
    layout: 'default-page',
        components: {
        Header, Intro, Pricing, GetStarted,
    },

}
</script>

<style scoped>

</style>
