<template>
    <div id='layout_default_clean'>
        <div id='used-layout'> Layout - default_page_clean </div>
        <nuxt />
        <Footer />
    </div>
</template>

<script>
import Footer from '@/components/page/_common/FooterClean.vue'

export default {
  components: {
      Footer
  },
}
</script>

<style scoped>
#layout_default_clean {
    height: 100vh;
    background-color: #f7f7f7;
}
</style>
