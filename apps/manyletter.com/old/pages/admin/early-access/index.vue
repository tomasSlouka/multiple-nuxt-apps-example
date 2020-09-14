<template>
    <div class='page'>
        <EarlyAccessIntro />
        <div class='container-narrow grid gap-60'>

            <Message/>
            <Link/>
            <!-- <AccountData/> -->
            <!-- <NextSteps/> -->
            <Community/>
            <!-- <AlphaPerks/> -->

        </div>
    </div>
</template>

<script>
import EarlyAccessIntro from '@/components/admin/early-access/EarlyAccessIntro.vue'
import Message from '@/components/admin/early-access/Message.vue'
import Link from '@/components/admin/early-access/Link.vue'
import AccountData from '@/components/admin/subscriber/settings/AccountData.vue'
import NextSteps from '@/components/admin/early-access/NextSteps.vue'
import Community from '@/components/admin/early-access/Community.vue'
import AlphaPerks from '@/components/admin/early-access/AlphaPerks.vue'

export default {
    layout: 'default-admin-blocked',
        components: {
        EarlyAccessIntro, Message, Link, AccountData, NextSteps, Community, AlphaPerks
    },

}
</script>

<style scoped>

</style>
