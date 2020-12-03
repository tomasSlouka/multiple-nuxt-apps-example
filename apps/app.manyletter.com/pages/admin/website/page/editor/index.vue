<template>
    <div class='page'>
        <Bar />
        <Intro />
        <div class='container-narrow grid gap-60'>
            <Editor />
        </div>
    </div>
</template>

<script>
import Bar from '@/components/admin/_common/Websitebar.vue'
import Intro from '@/components/admin/website/page/editor/Intro.vue'
import Editor from '@/components/admin/website/page/editor/Editor.vue'

export default {
    layout: 'defaultAdmin',
        components: {
        Bar, Intro, Editor
    },
}
</script>

<style scoped>

</style>
