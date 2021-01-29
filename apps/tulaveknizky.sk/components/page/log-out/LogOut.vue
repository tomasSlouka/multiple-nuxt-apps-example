<template>
    <div class='grid component'>

        <div class="box grid auto align-self-start gap-20">
            <div class='grid col-2 auto align-items-center'>
                <h3>Odhlásenie</h3>
                <nuxt-link to='/' class='justify-self-end'><img src="@/assets/img/logo-icon.svg" alt="" class='logo' /></nuxt-link>
            </div>
            <!-- <div class="hr"></div> -->
            <p>”Odhlásením to nekončí. Odhlásenie sa je len ďalšia cesta, ktorú každý musí prejsť, aby objavil nové cesty k opätovnému prihláseniu sa.”</p>
            <nuxt-link to='/prihlasenie' tag='button' class='cta black'>Opäť sa prihlásiť</nuxt-link>
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
    padding: 30px;
    margin: 0px auto;
    width: 320px;
    max-width: 100%;

    background-color: #fff;
    border-bottom: 6px solid #eee;
    padding: 20px;
    border-radius: 4px;
}
.logo {
    width: 32px;
    height: 32px;
    /* border-radius: 32px; */
}
</style>
