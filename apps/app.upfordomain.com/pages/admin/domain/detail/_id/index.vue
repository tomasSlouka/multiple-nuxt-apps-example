<template>
    <div class='page'>
        <Domain />
        <div class='container-narrow grid gap-60'>
            <!-- <Users v-if='this.level == "101"' :userList="userList"/> -->
            <Detail :domainDetail='domainDetail'/>
            <!-- {{this.$store.state}} -->
            <DangerZone />
        </div>
    </div>
</template>

<script>
import Domain from '@/components/admin/domain/Domain.vue'
import Detail from '@/components/admin/domain/Detail.vue'
import DangerZone from '@/components/admin/domain/DetailDangerZone.vue'

export default {
    layout: 'defaultAdmin',
        components: {
        Domain, Detail, DangerZone
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
