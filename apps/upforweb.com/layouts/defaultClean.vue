<template>
    <div id='layout_default_clean'>
        <div id='used-layout'> Layout - default_page_clean </div>
        <nuxt />
        <!-- <Footer /> -->
    </div>
</template>

<script>
import Footer from '@/components/page/_common/FooterClean.vue'

export default {
  components: {
  },
}
</script>

<style scoped>
#layout_default_clean {
    height: 100vh;
    background-color: #39ac370d;
}
.logo {
    font-family: 'MuseoModerno', cursive;
}
</style>
