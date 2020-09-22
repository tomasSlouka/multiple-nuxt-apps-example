<template>
    <div class='page'>
        <Bar />
        <Intro />
        <div class='container-narrow grid gap-60'>

        </div>
    </div>
</template>

<script>
import Bar from '@/components/admin/_common/Makerbar.vue'
import Intro from '@/components/admin/maker/portfolio/Intro.vue'

export default {
    layout: 'defaultAdmin',
        components: {
        Bar, Intro
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
