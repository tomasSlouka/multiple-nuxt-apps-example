<template>
    <div id='header_blocked'>
        <div class='container grid justify-items-center'>
            <div class='logo'>
                <nuxt-link to="/">
                    ManyLetter
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
#header_blocked {
    position: fixed;
    top: 0px;
    left: 0px;
    /* height: 75px; */
    background-color: #fff;
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
    font-size: 30px;
    line-height: 30px;
    font-weight: 700;
    /* font-family: 'Open sans', sans-serif; */
    /* font-family: 'Exo 2', sans-serif; */
    font-family: 'Caveat', cursive;
    /* font-family: 'Concert One', cursive; */
    /* font-family: 'Patrick Hand', cursive; */
    text-decoration: none;
    color: #39ac37;
}
</style>
