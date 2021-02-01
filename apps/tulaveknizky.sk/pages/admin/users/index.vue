<template>
    <div class='page'>
        <SubNav />
        <Hero 
            h1='Administrácia'
            h2='Používatelia'
        />
        <ListAll
            :userList='userList'
        />
    </div>
</template>

<script>
import SubNav from '@/components/admin/_common/SubNav.vue'
import Hero from '@/components/admin/_common/Hero.vue'
import ListAll from '@/components/admin/users/ListAll.vue'

export default {
    layout: 'defaultAdmin',
    components: {
        SubNav, Hero, ListAll,
    },
    data() {
        return {
            userList: this.$store.state.user.dataListFiltered,
        }
    },
    async fetch({store}) {
        await store.dispatch("user/getDataList")
    },
    methods: {
        filterChange() {
            this.userList = this.$store.state.user.dataListFiltered
        }
    }
}
</script>

<style>

</style>
