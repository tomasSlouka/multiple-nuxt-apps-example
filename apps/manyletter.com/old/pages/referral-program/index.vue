<template>
    <div class='page'>
        <Header />
        <Intro />
        <ReferralProgram />
        <GetStarted />
    </div>
</template>

<script>
import Header from '@/components/page/_common/Header.vue'
import Intro from '@/components/page/referral-program/Intro.vue'
import ReferralProgram from '@/components/page/referral-program/ReferralProgram.vue'
import GetStarted from '@/components/page/index_B/GetStarted.vue'

export default {
    layout: 'default-page',
        components: {
        Header, Intro, ReferralProgram, GetStarted,
    },

}
</script>

<style scoped>

</style>
