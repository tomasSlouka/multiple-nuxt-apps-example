<template>
    <div class='page'>
        <Header />
        <Code />
    </div>
</template>

<script>
import Header from '@/components/page/_common/Header.vue'
import Code from '@/components/page/log-in/Code.vue'

export default {
    layout: 'defaultPage',
        components: {
        Header, Code,
    },

}
</script>

<style scoped>
.page {
    height: 100%;
}
</style>
