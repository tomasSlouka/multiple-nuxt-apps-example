<template>
    <div id='footer_clean' class='grid align-items-center'>
        <div class='container grid justify-items-center'>

            <p class='small'>© {{ new Date().getFullYear() }} ManyLetter</p>

        </div>
    </div>
</template>

<style scoped>
#footer_clean {
    position: relative;
    bottom: 0px;
    left: 0px;
    height: 50px;
    background-color: rgba(255,255,255,0.7);
    width: 100%;
}
.container {
    max-width: 976px;
    margin: 0px auto;
}
</style>
