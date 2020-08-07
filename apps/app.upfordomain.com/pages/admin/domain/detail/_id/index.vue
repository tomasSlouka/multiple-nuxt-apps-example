<template>
    <div class='page'>
        <Domain />
        <div class='container-narrow grid gap-60'>
            <!-- <Users v-if='this.level == "101"' :userList="userList"/> -->
            <Detail :domainDetail='domainDetail'/>
            <Verify :domainDetail='domainDetail'/>
            <!-- {{this.$store.state}} -->
            <DangerZone />
            <div class="hr"></div>
            <Admin v-if='$store.state.auth.userData.id == 1' :domainDetail='domainDetail'/>
        </div>
    </div>
</template>

<script>
import Domain from '@/components/admin/domain/Domain.vue'
import Admin from '@/components/admin/domain/Admin.vue'
import Detail from '@/components/admin/domain/Detail.vue'
import Verify from '@/components/admin/domain/Verify.vue'
import DangerZone from '@/components/admin/domain/DetailDangerZone.vue'

export default {
    layout: 'defaultAdmin',
        components: {
        Domain, Detail, Admin, Verify, DangerZone
    },
    data() {
        return {

        }
    },
    async asyncData({ $axios, params }) {
        const [domainDetail] = await Promise.all ([
            $axios.$get('/domain/' + params.id),
        ])
        return { domainDetail }
    },
}
</script>

<style scoped>

</style>
