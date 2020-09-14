<template>
    <div class='page'>
        <Header />
        <Intro />
        <!-- <TheProblem /> -->
        <TheSolution />
        <!-- <Showcase /> -->
        <!-- <ToolkitSubscriber /> -->
        <ToolkitCreator />
        <!-- <Pricing /> -->
        <!-- <FAQ /> -->
        <GetStarted />
    </div>
</template>

<script>
import Header from '@/components/page/_common/Header.vue'
import Intro from '@/components/page/creator/Intro.vue'
import TheProblem from '@/components/page/creator/TheProblem.vue'
import TheSolution from '@/components/page/creator/TheSolution.vue'
// import Showcase from '@/components/page/creator/Showcase.vue'
import ToolkitCreator from '@/components/page/creator/ToolkitCreator.vue'
// import Pricing from '@/components/page/creator/Pricing.vue'
// import FAQ from '@/components/page/creator/FAQ.vue'
import GetStarted from '@/components/page/creator/GetStarted.vue'

export default {
    layout: 'default-page',
        components: {
        Header, Intro, TheProblem, TheSolution, ToolkitCreator, GetStarted
    },

}
</script>

<style scoped>

</style>
