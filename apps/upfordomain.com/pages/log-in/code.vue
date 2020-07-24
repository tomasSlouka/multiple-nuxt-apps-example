<template>
    <div class='page'>
        <Header />
        <Code />
    </div>
</template>

<script>
import Header from '@/components/page/_common/HeaderClean.vue'
import Code from '@/components/page/log-in/Code.vue'

export default {
    layout: 'defaultClean',
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
