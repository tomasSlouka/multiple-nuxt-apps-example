<template>
    <div class='page'>
        <Header />
        <Intro />
        <Showcase />
        <TheProblem />
        <ToolkitSubscriber />
        <ToolkitCreator />
        <GetStarted />
    </div>
</template>

<script>
import Header from '@/components/page/_common/Header.vue'
import Intro from '@/components/page/indexOld/Intro.vue'
import TheProblem from '@/components/page/indexOld/TheProblem.vue'
import Showcase from '@/components/page/indexOld/Showcase.vue'
import ToolkitSubscriber from '@/components/page/indexOld/ToolkitSubscriber.vue'
import ToolkitCreator from '@/components/page/indexOld/ToolkitCreator.vue'
import GetStarted from '@/components/page/indexOld/GetStarted.vue'

export default {
    layout: 'default-page',
        components: {
        Header, Intro, Showcase, TheProblem, ToolkitSubscriber, ToolkitCreator, GetStarted,
    },

}
</script>

<style scoped>

</style>
