<template>
    <div class='page'>
        <Home />
        <div class='container-narrow grid gap-60'>
            <Domains :domainList='domainList' />
        </div>
    </div>
</template>

<script>
import Home from '@/components/admin/home/Home.vue'
import Domains from '@/components/admin/home/Domains.vue'

export default {
    layout: 'defaultAdmin',
    components: {
        Home, Domains
    },
    // data() {
    //     return {
    //         dataList: this.$store.state.deals.filteredList,
    //         doctorList: this.$store.state.deals.doctorList
    //     }
    // },
    // async fetch({store}) {
    //     await store.dispatch("deals/getDealsList")
    //     await store.dispatch("deals/getDoctorList")
    // },
    // methods: {
    //     filterChange() {
    //         this.dataList = this.$store.state.deals.filteredList
    //     }
    // }
    async asyncData({ $axios, params }) {
        const [domainList] = await Promise.all ([
            $axios.$get('/domain'),
        ])
        return { domainList }
    },
}
</script>

<style scoped>

</style>
