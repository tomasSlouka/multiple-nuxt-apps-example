<template>
    <div class='page'>
        <Header />
        <LogOut />
    </div>
</template>

<script>
import Header from '@/components/page/_common/HeaderClean.vue'
import LogOut from '@/components/page/log-out/LogOut.vue'

export default {
    layout: 'default-page-clean',
        components: {
        Header, LogOut,
    },

}
</script>

<style scoped>
.page {
    height: 100%;
}
</style>
