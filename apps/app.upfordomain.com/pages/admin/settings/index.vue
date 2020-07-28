<template>
    <div class='page'>
        <Settings />
        <div class='container-narrow grid gap-60'>
            <!-- <Users v-if='this.level == "101"' :userList="userList"/> -->
            <Password />
            <!-- {{this.$store.state}} -->
            <!-- <DangerZone /> -->
        </div>
    </div>
</template>

<script>
import Settings from '@/components/admin/settings/Settings.vue'
import Password from '@/components/admin/settings/Password.vue'
// import DangerZone from '@/components/admin/settings/DangerZone.vue'

export default {
    layout: 'defaultAdmin',
        components: {
        Settings, Password
    },
    data() {
        return {
            level: this.$store.state ? this.$store.state.auth.userData.level : "",
        }
    },
    // async asyncData({ $axios, params }) {
    //     console.log('asyncData executed');
    //     const [userList] = await Promise.all ([
    //         $axios.$get('/api/v1/user/all'),
    //     ])
    //     return { userList }
    // },
}
</script>

<style scoped>

</style>
