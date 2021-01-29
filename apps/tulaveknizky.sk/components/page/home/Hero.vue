<template>
    <div class="component">

        <!-- <div class='container-narrow mt20 mb20 grid justify-items-center'>
            <img src="@/assets/img/logo-white.png" alt="" class='logo' />
        </div> -->

        <div class="container-standard grid">
            <div class='grid gap-20 justify-items-start'>
                <!-- <h1 class='maxw500'>Do you subscribe to too many newsletters?</h1> -->
                <!-- <h1>Túlavé knižky prinášaju nové príbehy ku vám domov každý mesiac.</h1> -->
                <!-- <h1>Požičaj, prečítaj, vráť</h1> -->
                <!-- <h3>Vypožičajte si knižky ako z knižnice, prečítajte si ich a vráťte späť.</h3> -->
                <!-- <h1>Vypožičaj si knižku online.</h1> -->
                <!-- <h1>Vypožičaj si knižku.</h1> -->
                <!-- <h2 class='strong big maxw500'></h2> -->
                <h1>Online požičovňa kníh.</h1>
                <h2>Najnovšie tituly. Bez navštevy knižnice.</h2>
                <p class='maxw600'>
                    <!-- Zimné obdobie je ako stvorené na čítanie kníh. Ak patríš medzi dekomolov, krbožhavičov, či iných pôžitkarov a nevieš si zimné obdobie predstaviť bez dobrej knižky v ruke, požičaj si túlavu knižku kým ti ju niekto nevyfúkne. -->
                    Čitaš veľa, no v bežných knižniciach nedostať najnovšie tituly? S Túlavými knižkami tento problém mať nebudeš. Vypožičaj si z dostupných titulov a ušetri nielen peňiažky ale aj čas.
                </p>
                <div class='mt30'>
                    <nuxt-link to='/categories' class='button black cta big'>Chcem si požičať knižku</nuxt-link>
                    <!-- <nuxt-link to='/categories' class='button black cta big'>Vstupiť do knižnice</nuxt-link> -->
                </div>
            </div>
            
        </div>

    </div>
</template>

<script>
export default {

    // props: ['domainList'],

}
</script>

<style scoped>
.component {
    padding: 1px;
    background-color: #ffd40140;
    /* border-bottom: 10px solid #0000002b; */
    border-bottom: 5px solid #ffd401;
    /* background-color: #ffd401; */
}
.container-standard {
    /* background-color: #ffd401; */
    /* padding: 60px; */
    /* border-radius: 4px; */
}

h1 {
    font-size: 2.5em;
}
.logo {
    height: 70px;
}
</style>
