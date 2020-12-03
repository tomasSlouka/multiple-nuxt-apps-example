<template>
    <div class='module'>
        <div :class="'gallery grid gap-20 md-col-' + cols">
            <div v-for='item in imgs' :key='item.name' :class="'img-wrapper grid align-content-center justify-content-center auto ' + item.class">
                <p class="">
                    {{item.name}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    props: {
        content: Object
    },
    data() {
        return {
            imgs: this.content.imgs,
            cols: this.content.settings.cols,
        }
    },
    methods: {
        
    },
    updated() {
    },
    mounted() {
    },
    beforeDestroy() {
    }
}
</script>

<style scoped>

.gallery {}
.img-wrapper {
    border: 1px solid #ccc;
    background-color: #eee;
    min-height: 213px; 
}

</style>
