<template>
    <div id='layout_default_page_clean'>
        <div id='used-layout'> Layout - default_page_clean </div>
        <nuxt />
        <Footer />
    </div>
</template>

<script>
import Footer from '@/components/page/_common/Footer.vue'

export default {
  components: {
    Footer
  }
}
</script>

<style scoped>
#layout_default_page_clean {
    height: 100vh;
    background-color: #39ac370d;
}
</style>
