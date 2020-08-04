<template>
    <div class='page'>
        <Header />
        <Intro />
        <TheProblem />
        <!-- <Showcase /> -->
        <ToolkitSubscriber />
        <GetStarted />
    </div>
</template>

<script>
import Header from '@/components/page/_common/Header.vue'
import Intro from '@/components/page/subscriber/Intro.vue'
import TheProblem from '@/components/page/subscriber/TheProblem.vue'
import Showcase from '@/components/page/subscriber/Showcase.vue'
import ToolkitSubscriber from '@/components/page/subscriber/ToolkitSubscriber.vue'
import GetStarted from '@/components/page/subscriber/GetStarted.vue'

export default {
    layout: 'default-page',
        components: {
        Header, Intro, Showcase, TheProblem, ToolkitSubscriber, GetStarted,
    },

}
</script>

<style scoped>

</style>
