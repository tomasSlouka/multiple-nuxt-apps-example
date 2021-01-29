<template>
    <div class='page'>
        <SignUp />
    </div>
</template>

<script>
import SignUp from '@/components/page/sign-up/SignUp.vue'

export default {
    layout: 'defaultClean',
        components: {
            SignUp,
    },
}
</script>

<style scoped>
.page {
    height: 100%;
}
</style>
