<template>
    <div class="component">

        <div class='container-standard grid gap-60'>
            <h2>Požičiavanie kníh s Túlavými knižkami je jednoduché</h2>

            <div class='grid md-col-2 gap-60'>
                <div class='grid gap-20 col-2 auto justify-content-start '>
                    <div>
                        <div class="number grid align-items-center justify-items-center">
                            <div>1.</div>
                        </div>
                    </div>
                    <div class='grid gap-10 align-content-start'>
                        <h3>Vytvor si účet</h3>
                        <div class='grid gap-5'>
                            <p>Knižky si môžeš požičať len ak máš vytvorený svoj účet na Túlavých knižkách. Registrácia nového účtu je zadarmo.</p>
                            <!-- <div class="hr mt5 mb5"></div> -->
                            <!-- <p><nuxt-link class='button cta small white' to='/cennik'>Zisti viac o typoch účtov a cenníku</nuxt-link></p> -->
                        </div>
                    </div>
                </div>

                <!-- <div></div> -->
                <!-- <div></div> -->

                <div class='grid gap-20 col-2 auto justify-content-start '>
                    <div>
                        <div class="number grid align-items-center justify-items-center">
                            <div>2.</div>
                        </div>
                    </div>
                    <div class='grid gap-10 align-content-start'>
                        <h3>Staň sa členom</h3>
                        <div class='grid gap-5'>
                            <p>Vieme, trocha to znie ako by si mal vstupiť do politickej strany, ale nie je to tak. Po registrácii si vyber plán predplatného, ktorý ti najviac vyhovuje a aktivovuj si tak všetky výhody online knižnice. Si zvedavec, pravidelný čitateľ alebo zarytý knihomoľ?</p>
                            <!-- <p>Kredity slúžia ako záloha. Ak nám knižky vrátiš späť a nebudú poškodené, tvoje kredity ti opätovne obnovíme v plnej výške a možno ti pripočítame aj niečo navyše 😀.</p> -->
                        </div>
                    </div>
                </div>

                <div class='grid gap-20 col-2 auto justify-content-start '>
                    <div>
                        <div class="number grid align-items-center justify-items-center">
                            <div>3.</div>
                        </div>
                    </div>
                    <div class='grid gap-10 align-content-start'>
                        <h3>Dobi si jednorázový kredit</h3>
                        <div class='grid gap-5'>
                            <p>Podľa toho, ktorý plán predplatného si aktivuješ, možno budeš a možno nebudeš potrebovať si dobiť kredit. Kreditom sa za knižky neplatí, ale slúži iba ako záloha za požičané knižky. Po vrátení knižiek sa ti kredit automaticky odblokuje.</p>
                            <!-- <p>Kredity slúžia ako záloha. Ak nám knižky vrátiš späť a nebudú poškodené, tvoje kredity ti opätovne obnovíme v plnej výške a možno ti pripočítame aj niečo navyše 😀.</p> -->
                        </div>
                    </div>
                </div>
                
                <!-- <div></div> -->
                <!-- <div></div> -->

                <div class='grid gap-20 col-2 auto justify-content-start '>
                    <div>
                        <div class="number grid align-items-center justify-items-center">
                            <div>4.</div>
                        </div>
                    </div>
                    <div class='grid gap-10 align-content-start'>
                        <h3>Požičaj si knižky na 60 dní</h3>
                        <div class='grid gap-5'>
                            <p>Ak si členom a máš dostupné kredity, môžeš si vypožičať knižky. Štandardná dĺžka vypožičnej doby je 30 dní od odoslania z našej centrály. </p>
                            <p>Ak knižky nestíhaš prečítať, môžeš si predĺžiť výpožičnú dobu o ďalších 15 alebo 30 dní v závislosti od aktívneho plánu predplatného.</p>
                            <!-- <p>Knižky posielame pomocou služby Zasielkovňa alebo Slovenskou poštou do 3 dní od objednania.</p> -->
                        </div>
                    </div>
                </div>

                <div class='grid gap-20 col-2 auto justify-content-start '>
                    <div>
                        <div class="number grid align-items-center justify-items-center">
                            <div>5.</div>
                        </div>
                    </div>
                    <div class='grid gap-10 align-content-start'>
                        <h3>Počkaj na doručenie knižiek</h3>
                        <div class='grid gap-5'>
                            <p>Knižky posielame pomocou služby Zasielkovňa alebo Slovenskou poštou do 3 dní od objednania.</p>
                        </div>
                    </div>
                </div>

                <!-- <div></div> -->
                <!-- <div></div> -->

                <div class='grid gap-20 col-2 auto justify-content-start '>
                    <div>
                        <div class="number grid align-items-center justify-items-center">
                            <div>6.</div>
                        </div>
                    </div>
                    <div class='grid gap-10 align-content-start'>
                        <h3>Prečítaj a vráť knižky späť</h3>
                        <div class='grid gap-5'>
                            <p>Po uplynutí výpožičnej doby nám jednoducho a zadarmo pošleš knižky späť pomocou služby Zásielkovňa alebo Slovenskou poštou.</p>
                            <p>Pozor! Ak knižky nevrátiš včas, za každý deň omeškania sa ti odpočíta 0.2 kreditu.</p>
                        </div>
                    </div>
                </div>


            </div>
           
           <!-- <h2>Cenník</h2> -->
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.container-standard {
    /* border: 1px solid rgba(216, 215, 215, 0.24); */
    padding: 10px;
}

.number {
    font-size: 2em;
    color: #000;
    height: 70px;
    width: 70px;
    font-weight: 700;
    border-radius: 100px;
    background-color: #ffd401;
}
</style>
