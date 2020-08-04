<template>
    <div class='page'>
        <Header />
        <Intro />
        <About />
        <GetStarted />
    </div>
</template>

<script>
import Header from '@/components/page/_common/Header.vue'
import Intro from '@/components/page/about/Intro.vue'
import About from '@/components/page/about/About.vue'
import GetStarted from '@/components/page/index_B/GetStarted.vue'

export default {
    layout: 'default-page',
        components: {
        Header, Intro, About, GetStarted,
    },

}
</script>

<style scoped>

</style>
