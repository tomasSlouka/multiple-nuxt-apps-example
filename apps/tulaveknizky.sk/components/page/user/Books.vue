<template>
    <div class="component">

        <div class='container-standard grid gap-30 col-2 auto align-items-start'>
            
            <Navigation />

            <div class='grid gap-10'>

                <h4>Najnovšie knižky</h4>
                <div class='grid gap-30'>
                    <div class="box grid gap-20 align-content-start align-items-start col-3 auto">
                        <div>
                            <img src="@/assets/img/testbook.jpg" alt="" class='testbook' />
                        </div>
                        <div class='grid gap-10'>
                            <h3>Búrka mečou 2: Krv a zlato</h3>
                            <p class="small gray">George R.R. Martin</p>
                            <p>Búrka mečov je geniálne premyslený a rozsiahly príbeh o neuveriteľnom svete plnom drsnej krásy a mocných kúziel, ktorý kvári zrada, krutosť ho trhá na kusy a pohlcuje ho ctibažnosť a nenásytnosť...</p>
                        </div>
                        <div class='align-self-end grid gap-10 justify-items-end'>

                            <div class='grid col-3 auto'>
                                <h2>16,39 </h2>
                                <p class="small align-self-center mt5 ml5">kreditov</p>
                                <!-- <img src="@/assets/img/icon-eur.svg" alt="" class='eur' /> -->
                            </div>

                            <div>
                                <p class="small gray">Dostupné 4 exempláre</p>
                            </div>
                            <div class='align-self-end grid align-items-center col-2 auto gap-20'>
                                <img src="@/assets/img/icon-love.svg" alt="" class='love' />
                                <button class='button cta black'>Vypožičať</button>
                            </div>
                        </div>
                    </div>

                    <div class="box grid gap-20 align-content-start align-items-start col-3 auto">
                        <div>
                            <img src="@/assets/img/testbook2.jpg" alt="" class='testbook' />
                        </div>
                        <div class='grid gap-10'>
                            <h3>Búrka mečou 2: Krv a zlato</h3>
                            <p class="small gray">George R.R. Martin</p>
                            <p>Búrka mečov je geniálne premyslený a rozsiahly príbeh o neuveriteľnom svete plnom drsnej krásy a mocných kúziel, ktorý kvári zrada, krutosť ho trhá na kusy a pohlcuje ho ctibažnosť a nenásytnosť...</p>
                        </div>
                        <div class='align-self-end grid gap-10 justify-items-end'>
                            <div class='grid col-3 auto'>
                                <h2>9,49 </h2>
                                <p class="small align-self-center mt5 ml5">kreditov</p>
                            </div>
                            <div>
                                <p class="small gray">Všetko sme vypožičali</p>
                            </div>
                            <div class='align-self-end grid align-items-center col-2 auto gap-20'>
                                <img src="@/assets/img/icon-love.svg" alt="" class='love' />
                                <button class='button cta black'>Rezervovať</button>
                            </div>
                        </div>
                    </div>

                    <div class="box grid gap-20 align-content-start align-items-start col-3 auto">
                        <div>
                            <img src="@/assets/img/testbook3.jpg" alt="" class='testbook' />
                        </div>
                        <div class='grid gap-10'>
                            <h3>Búrka mečou 2: Krv a zlato</h3>
                            <p class="small gray">George R.R. Martin</p>
                            <p>Búrka mečov je geniálne premyslený a rozsiahly príbeh o neuveriteľnom svete plnom drsnej krásy a mocných kúziel, ktorý kvári zrada, krutosť ho trhá na kusy a pohlcuje ho ctibažnosť a nenásytnosť...</p>
                        </div>
                        <div class='align-self-end grid gap-20 justify-items-end'>
                            <div class='grid col-3 auto'>
                                <h2>25,29 </h2>
                                <p class="small align-self-center mt5 ml5">kreditov</p>
                            </div>
                            <div class='align-self-end grid align-items-center col-2 auto gap-20'>
                                <img src="@/assets/img/icon-love.svg" alt="" class='love' />
                                <button class='button cta black'>Nedostupné</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>


        </div>

    </div>
</template>

<script>
import Navigation from '@/components/page/user/Navigation.vue'
export default {
    components: {
        Navigation
    },
    // props: ['domainList'],

}
</script>

<style scoped>

.container-standard {
    /* border: 1px solid rgba(216, 215, 215, 0.24); */
    padding: 10px;
    margin-top: 40px;
}
.box {
    background-color: #f7f7f7;
    border-bottom: 6px solid #eee;
    padding: 20px;
    border-radius: 4px;
}

.box > div.body {
}

img {
    border-radius: 20px;
    max-height: 220px;
}

#filter {
    background-color: rgb(247, 247, 247);
    padding: 30px;
    border-bottom: 6px solid rgba(255,212,1,0.32157);
    border-radius: 4px;
}

#filter li {
    list-style: none;
}
/* @media only screen and (min-width: 768px) {
    .box {
        border: 0px;
    }
}
@media only screen and (max-width : 576px) {
    .box {
        border: 0px;
    }
} */
</style>
