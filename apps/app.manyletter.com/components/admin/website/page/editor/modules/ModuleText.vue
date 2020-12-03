<template>
    <div class='module'>

        <!-- <div class='text' contenteditable="true" @input="handleContent" v-html="contentDataOld"> -->
        <!-- </div> -->
        <textarea ref='handleHeight' class='text' rows='1' data-min-rows='1' placeholder='TEXT: Start typing here' @focus='handleHeight' @input='handleHeight' v-model='contentData'></textarea>
        <!-- <div v-html="contentData"></div> -->
    </div>
</template>

<script>


export default {
    props: {
        content: String
    },
    data() {
        return {
            // contentDataOld: this.content,
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

            rows = Math.ceil((el.scrollHeight - el.baseScrollHeight) / 27);
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
        // handleHeight: function() {
        //     var el = this.$refs.handleHeight;
        //     el.style.cssText = 'height:auto; padding: 0px;'
        //     el.style.cssText = 'height:' + el.scrollHeight + 'px'
        // },
        // handleContent: function(e){
            // var text = e.target.innerHTML
            // var text = text.replaceAll('<div>', '<p>')
            // var text = text.replaceAll('</div>', '</p>')
            // var text = text.replaceAll('<p><br></p>', '<br>')
            // var text = text.replaceAll(/(<\/?span[^>]*>)/gi, '')
            // var text = text.replaceAll(/<(\w+)(.|[\r\n])*?>/g, '<$1>')
            // this.contentData = text

            // var re = /<\/?span[^>]*>/
            // var text = myRe.exec(text);

            // var text = text.replaceAll('/</?span[^>]*>/', '')
            // var text = text.replaceAll('</span>', '')
            // this.contentData = this.stripHTML(e.target.innerHTML)
            // console.log(e.target.innerHTML)
        // },

        


        // stripHTML: function(html){
            // var html = html.replace(/<br>/g, "$br$");
            // var html = html.replace(/(?:\r\n|\r|\n)/g, '$br$');
            // var doc = new DOMParser().parseFromString(html, 'text/html')
            // return doc.body.textContent || ""
        // }
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

/* textarea {
    border: 1px dashed #eee;
    outline: none;
    background: transparent;
    padding: 20px;
    overflow: hidden;
    font-size: 1em;
    line-height: 1.688em;
} */

textarea {
    position: relative;
    background: rgb(245 248 252 / 0%);
    color: #000;
    border: 0px solid #e2e4e7;
    border-radius: 0px;
    padding: 0px 0px;
    font-size: 16px;
    line-height: 27px;
    font-weight: 400;
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
