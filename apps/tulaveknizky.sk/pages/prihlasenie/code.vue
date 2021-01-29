<template>
    <div class='page'>
        <Code />
    </div>
</template>

<script>
import Code from '@/components/page/log-in/Code.vue'

export default {
    layout: 'defaultClean',
        components: {
            Code
    },

}
</script>

<style scoped>
.page {
    height: 100%;
}
</style>
