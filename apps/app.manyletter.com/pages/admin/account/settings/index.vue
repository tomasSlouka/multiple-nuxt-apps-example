<template>
    <div class='page'>
        <Bar />
        <Intro />
        <div class='container-narrow grid gap-60'>
            <!-- <Users v-if='this.level == "101"' :userList="userList"/> -->
            <Password />
            <!-- {{this.$store.state}} -->
            <DangerZone />
        </div>
    </div>
</template>

<script>
import Bar from '@/components/admin/_common/Accountbar.vue'
import Intro from '@/components/admin/account/settings/Intro.vue'
import Password from '@/components/admin/account/settings/Password.vue'
import DangerZone from '@/components/admin/account/settings/DangerZone.vue'

export default {
    layout: 'defaultAdmin',
        components: {
        Bar, Intro, Password, DangerZone
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
