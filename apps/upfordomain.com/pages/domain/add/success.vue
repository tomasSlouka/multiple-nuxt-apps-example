<template>
    <div class='page'>
        <Header />
        <Success />
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/page/_common/Header.vue'
import Success from '@/components/page/domain/add/Success.vue'
import Footer from '@/components/page/_common/Footer.vue'

export default {
    layout: 'defaultPage',
        components: {
            Header, Success, Footer
    },
}
</script>

<style>

</style>
