<template>
    <div class='grid component'>

        <div class="box grid auto align-self-start gap-20">
            <div class='grid col-2 auto align-items-center'>
                <h3>Logged out</h3>
                <nuxt-link to='/' class='justify-self-end'><img src="@/assets/img/logo.png" alt="" class='logo' /></nuxt-link>
            </div>
            <!-- <div class="hr"></div> -->
            <p>”Log out? No, the journey doesn't end here. Log out is just another path. One that we all must take.”</p>
            <nuxt-link to='/' tag='button' class='cta black'>Log in back</nuxt-link>
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
    padding: 40px 20px;
}
.box {
    background-color: #fff;
    padding: 30px;
    margin: 0px auto;
    width: 320px;
    max-width: 100%;
    box-shadow: 0 1px 6px 0 rgba(14,30,37,.12);
    border-radius: 4px;
}
.logo {
    width: 32px;
    height: 32px;
    border-radius: 32px;
}
</style>
