<template>
    <div id='layout_default_admin_blocked' class='admin-layout'>
        <div id='used-layout'> Layout - default_admin_blocked </div>
        <Header />
        <nuxt />
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/admin/_common/HeaderBlocked.vue'
import Footer from '@/components/admin/_common/Footer.vue'

export default {
  middleware: ['log', 'check-auth', 'auth'],
  components: {
    Header, Footer
  }
}
</script>

<style scoped>
#layout_default_admin_blocked {
    margin-top: 68px;
    background-color: #39ac370d;
}
</style>
