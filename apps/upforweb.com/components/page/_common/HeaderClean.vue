<template>
    <div id='header_clean'>
        <div class='container grid justify-items-center'>
            <div class='logo'>
                <nuxt-link to="/">
                    Upforweb
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {

}
</script>

<style scoped>
#header_clean {
    position: fixed;
    top: 0px;
    left: 0px;
    /* height: 75px; */
    background-color: #000;
    width: 100%;
}
.container {
    /* max-width: 976px; */
    /* margin: 0px auto; */
    padding: 20px;
    /* padding-bottom: 0px; */
    box-shadow: 0 0.125rem 0.125rem rgba(0,0,0,.1);
}

.logo a {
    font-size: 24px;
    line-height: 30px;
    font-weight: 700;
    /* font-family: 'Open sans', sans-serif; */
    /* font-family: 'Exo 2', sans-serif; */
    font-family: 'Caveat', cursive;
    /* font-family: 'Concert One', cursive; */
    /* font-family: 'Patrick Hand', cursive; */
    /* font-family: 'MuseoModerno', cursive; */
    text-decoration: none;
    color: #fff;
}
</style>
