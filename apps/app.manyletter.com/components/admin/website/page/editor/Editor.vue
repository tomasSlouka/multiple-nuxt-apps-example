<template>
    <div class='component'>



        <div class="box grid gap-20 justify-items-center">
            
                <div class='module-wrapper' v-for="item in contentItems" :key='item.id'>
                    <ModuleText v-if="item.type == 'text'" :content="item.content" />
                    <ModuleTextListU v-if="item.type == 'ul'" :content="item.content" />
                    <ModuleTextListO v-if="item.type == 'ol'" :content="item.content" />
                    <ModuleH2 v-if="item.type == 'h2'" :content="item.content" />
                    <ModuleH3 v-if="item.type == 'h3'" :content="item.content" />
                    <ModuleH4 v-if="item.type == 'h4'" :content="item.content" />
                    <ModuleGallery v-if="item.type == 'gallery'" :content="item.content" />
                </div>
            <!-- asdasd -->
            
        </div>



    </div>
</template>

<script>

import ModuleText from '@/components/admin/website/page/editor/modules/ModuleText.vue'
import ModuleH2 from '@/components/admin/website/page/editor/modules/ModuleH2.vue'
import ModuleH3 from '@/components/admin/website/page/editor/modules/ModuleH3.vue'
import ModuleH4 from '@/components/admin/website/page/editor/modules/ModuleH4.vue'
import ModuleGallery from '@/components/admin/website/page/editor/modules/ModuleGallery.vue'

export default {
    components: {
        ModuleText, ModuleH2, ModuleH3, ModuleH4, ModuleGallery
    },
    data() {
        return {
            contentItems: [
                {id: 3, type: "h2", content: "Lorem ipsum dolor sit amet"},
                {id: 1, type: "h3", content: "Lorem ipsumipsumipsum dolor"},
                {id: 2, type: "h4", content: "Lorem ipsumipsumipsum dolor sit."},
                {id: 4, type: "text", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia pretium cursus. In hac habitasse platea dictumst. Duis scelerisque odio sed quam elementum facilisis eu quis ipsum. Nullam id sem tristique, luctus lacus quis, commodo elit. Nulla nibh urna, ullamcorper vitae sagittis vitae, tincidunt sit amum. In varius euismod vehicula. Ut a mollis nunc. Etiam suscipit auctor ipsum, eget malesuada felis vulputate et. Ut diam ante, ullamcorper at hendrerit et, finibus sit amet nulla. Vestibulum vel ipsum sem. Maecenas vitae consectetur elit."},
                {id: 5, type: "text", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia pretium cursus. In hac habitasse platea dictumst. Duis scelerisque odio sed quam elementum facilisis eu quis ipsum. Nullam id sem tristique, luctus lacus quis, . Aenean dapibus pulvinar porta. Nam aliquet eros non dolor auctor, at vulputate sapien volutpat. Donec suscipit mi fringilla diam blandit, a vehicula quam pretium. In varius euismod vehicula. Ut a mollis nunc. Etiam suscipit auctor ipsum, eget malesuada felis vulputate et. Ut diam ante, ullamcorper at hendrerit et, finibus sit amet nulla. Vestibulum vel ipsum sem. Maecenas vitae consectetur elit."},
                {id: 6, type: "text", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia pretium cursus. In hac habitasse platea dictumst. Duis scelerisque odio sed quam elementum facilisis eu quis ipsum. Nullam id sem tristique, luctus lacus quis, t et, finibus sit amet nulla. Vestibulum vel ipsum sem. Maecenas vitae consectetur elit."},
                // {id: 3, type: "text", content: "JANO3"},
                {
                    id: 7, 
                    type: "gallery", 
                    content: {
                        settings: {
                            cols: 3
                        },
                        imgs: [
                            {name: "img1", class: "md-span-2"},
                            {name: "img2"},
                            {name: "img3"},
                            {name: "img4", class: "col-start-2 md-span-2"}
                        ]
                    }
                },
                {
                    id: 8, 
                    type: "", 
                    content: {
                        settings: {
                            layout: "1" // text left | image right
                        },
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia pretium cursus. In hac habitasse platea dictumst. Duis scelerisque odio sed quam elementum facilisis eu quis ipsum. Nullam id sem tristique, luctus lacus quis, t et, finibus sit amet nulla. Vestibulum vel ipsum sem. Maecenas vitae consectetur elit.",
                        img: {name: "img1", class: ""}
                    }
                },
                // {id: 4, type: "text", content: "JANO4 ANO"}
            ],
            // componentKey: 0
        }
    },
    methods: {
        forceRerender() {
            this.componentKey += 1;
        }
    },
    // mounted() {
    //     window.addEventListener('resize', this.onResize)
    //     this.forceRerender()
    // },
    // beforeDestroy() {
    //     window.removeEventListener('resize', this.onResize)
    // }
}
</script>

<style scoped>

.module-wrapper {
    width: 100%;
    max-width: 680px;
}
</style>
