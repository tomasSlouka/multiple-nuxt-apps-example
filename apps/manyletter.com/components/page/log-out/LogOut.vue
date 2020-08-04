<template>
    <div class='grid component'>

        <div class="box grid auto align-self-center gap-20">
            <h3>Logged out</h3>
            <p>Log out? No, the journey doesn't end here. Log out is just another path. One that we all must take.”</p>
            <nuxt-link to='/log-in' tag='button' class='cta'>Log in back</nuxt-link>
            <p class='small text-center'><nuxt-link to='/'>Go back to landing page</nuxt-link></p>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.component {
    height: 100%;
    padding: 20px;
}
.box {
    background-color: #fff;
    padding: 30px;
    margin: 0px auto;
    max-width: 320px;
    box-shadow: 0 1px 6px 0 rgba(14,30,37,.12);
    border-radius: 8px;
}

</style>
