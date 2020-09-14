<template>
    <div class='page'>
    <!-- <div class='page' v-touch:swipe.right="loadBack"> -->
        <Settings/>
        <div class='container-narrow grid gap-60'>
            <!-- <AccountSettings/> -->
            <AccountData />
            <Referral />
            <Time />
            <Password />
            <!-- <DangerZone /> -->
        </div>
    </div>
</template>

<script>
import Settings from '@/components/admin/subscriber/settings/Settings.vue'
// import AccountSettings from '@/components/admin/subscriber/settings/AccountSettings.vue'
import AccountData from '@/components/admin/subscriber/settings/AccountData.vue'
import Referral from '@/components/admin/subscriber/settings/Referral.vue'
import Time from '@/components/admin/subscriber/settings/Time.vue'
import Password from '@/components/admin/subscriber/settings/Password.vue'
import DangerZone from '@/components/admin/subscriber/settings/DangerZone.vue'

export default {
    layout: 'default-admin-subscriber',
        components: {
        Settings, AccountData, DangerZone, Password, Time, Referral
    },
    methods: {
        loadBack() {
            this.$router.go(-1)
        }
    }

}
</script>

<style scoped>

</style>
