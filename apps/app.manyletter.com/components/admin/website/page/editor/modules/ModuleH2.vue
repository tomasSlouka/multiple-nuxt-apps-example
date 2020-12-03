<template>
    <div class='module'>
        <textarea ref='handleHeight' class='text' rows='1' data-min-rows='1' placeholder='H2: Start typing here' @focus='handleHeight' @input='handleHeight' v-model='contentData'></textarea>
    </div>
</template>

<script>


export default {
    props: {
        content: String
    },
    data() {
        return {
            // : this.content,
            contentData: this.content,
        }
    },
    methods: {
        onResize(event) {
            // console.log('window has been resized') 
            this.handleHeight()
        },
        handleHeight: function() {
            var el = this.$refs.handleHeight

            var minRows = 1, rows
            el.rows = minRows

            rows = Math.ceil((el.scrollHeight - el.baseScrollHeight) / 42);
            el.rows = minRows + rows;

            // this.$forceUpdate();
            // el.style.cssText = 'height:auto; padding: 0px;'
            // el.style.cssText = 'height:' + el.scrollHeight + 'px'
        },
        handleHeightOnce: function() {
            var el = this.$refs.handleHeight
            var savedValue = el.value

            el.value = ''
            el.baseScrollHeight = el.scrollHeight
            el.value = savedValue
        },
    },
    updated() {
        this.handleHeight()
    },
    mounted() {
        window.addEventListener('resize', this.onResize)
        this.handleHeightOnce()
        this.handleHeight()
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
    }
}
</script>

<style scoped>

textarea {
    position: relative;
    background: rgb(245 248 252 / 0%);
    color: #000;
    border: 0px solid #e2e4e7;
    border-radius: 0px;
    padding: 0px 0px;
    font-size: 1.625em;
    font-weight: 600;
    line-height: 42px;
    outline: none;
    /* display: block; */
    width: 100%;
    max-width: 100%;
    font-family: 'Open sans', sans-serif;
    box-sizing: border-box;
    height: auto;
    -webkit-transition: all 0s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0s cubic-bezier(0.165, 0.84, 0.44, 1);
    overflow: hidden;
    resize: none;
}
.text:focus {
    border: 0px solid #eee;
    /* box-shadow: 0 20px 40px 0 rgb(245 248 252); */
}

</style>
