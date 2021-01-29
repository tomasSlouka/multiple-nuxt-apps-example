<template>
    <div class='page'>
        <LogOut />
    </div>
</template>

<script>
import LogOut from '@/components/page/log-out/LogOut.vue'

export default {
    layout: 'defaultClean',
        components: {
            LogOut
    },

}
</script>

<style scoped>
.page {
    height: 100%;
}
</style>
