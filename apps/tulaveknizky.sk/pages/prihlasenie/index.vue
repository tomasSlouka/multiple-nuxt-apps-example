<template>
    <div class='page'>
        <LogIn />
    </div>
</template>

<script>
import LogIn from '@/components/page/log-in/LogIn.vue'

export default {
    layout: 'defaultClean',
        components: {
            LogIn
    },
}
</script>

<style scoped>
.page {
    height: 100%;
}

/* #SignIn {
    background-color: #30E7B6;
    height: 100%;
} */
.box {
    background-color: #fff;
    padding: 30px;
    margin: 0px auto;
    max-width: 320px;
    box-shadow: 0 5px 10px hsla(0,0%,93.3%,.37647);
    border-radius: 4px;
}
</style>
