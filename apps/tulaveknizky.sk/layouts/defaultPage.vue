<template>
    <div id='layout_default_page' class='page-layout'>
        <div id='used-layout'> Layout - default_page_home </div>
        <Header />
        <nuxt />
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/page/_common/Header.vue'
import Footer from '@/components/page/_common/Footer.vue'

export default {
  middleware: ['log', 'check-userdata'],
  components: {
    Header, Footer
  }
}
</script>

<style>
#layout_default_page {
    /* margin-top: 68px; */
    /* background-color: #39ac370d; */
    /* background-color: #f5f8fc; */
    /* background-color: #f0f2f5; */
    /* background-color: rgb(251 251 251); */
}
</style>
