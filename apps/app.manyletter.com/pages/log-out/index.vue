<template>
    <div class='page'>
        <Header />
        <LogOut />
    </div>
</template>

<script>
import Header from '@/components/page/_common/Header.vue'
import LogOut from '@/components/page/log-out/LogOut.vue'

export default {
    layout: 'defaultPage',
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
