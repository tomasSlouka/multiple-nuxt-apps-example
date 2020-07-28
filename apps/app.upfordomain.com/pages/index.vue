<template>
    <div class='page'>
        <Home />
        <div class='container-standard grid gap-60'>
        </div>
    </div>
</template>

<script>
import Home from '@/components/admin/home/Home.vue'

export default {
    layout: 'defaultAdmin',
    components: {
        Home
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
    // async asyncData({ $axios, params }) {
    //     console.log('asyncData executed');
    //     const [dataList] = await Promise.all ([
    //         $axios.$get('/api/v1/freshsales/test'),
    //     ])
    //     return { dataList }
    // },
}
</script>

<style scoped>

</style>
