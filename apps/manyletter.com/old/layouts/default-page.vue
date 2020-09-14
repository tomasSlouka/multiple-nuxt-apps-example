<template>
    <div id='layout_default_page'>
        <div id='used-layout'> Layout - default_page </div>
        <nuxt />
        <Footer />
    </div>
</template>

<script>
import Footer from '@/components/page/_common/Footer.vue'

export default {
  middleware: ['check-auth'],
  components: {
    Footer
  }
}
</script>

<style scoped>
#layout_default_page {
  overflow: hidden;
}
</style>
