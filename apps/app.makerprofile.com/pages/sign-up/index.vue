<template>
    <div class='page'>
        <!-- <Header /> -->
        <SignUp />
    </div>
</template>

<script>
import Header from '@/components/page/_common/Header.vue'
import SignUp from '@/components/page/sign-up/SignUp.vue'

export default {
    layout: 'defaultPage',
        components: {
        Header, SignUp,
    },
}
</script>

<style scoped>
.page {
    height: 100%;
}
</style>
