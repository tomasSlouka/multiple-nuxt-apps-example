<template>
    <div class="component">

        <div class='container-standard'>
            <div class='grid gap-20'>
                    <div class='grid gap-10'>
                        <h2 id='plans'>Plány predplatného</h2>
                        <p>Na vyber máš tri plány predplatného.</p>
                    </div>
                    <div class='grid md-col-3 gap-20 justify-content-start auto'>
                        <div class='box-form grid gap-10'>
                            <div class='grid gap-20 align-content-start'>
                                <h3>Zvedavec</h3>
                                <div class='grid gap-10 col-2 auto justify-content-start align-items-center'>
                                    <p class='h1'>4.99 €</p>
                                    <p> / mesiac</p>
                                </div>
                                <div class="hr"></div>
                                <p class=''>Ideálne, ak si chceš vyskúšať ako funguje online požičiavanie knižiek. </p>
                                <ul class='ml20 mb40'>
                                    <li><p class="">Doprava a vrátenie zadarmo</p></li>
                                    <li><p class="">Max. 1 objednávka za mesiac</p></li>
                                    <li><p class="">Max. 1 kniha v objednávke</p></li>
                                </ul>
                            </div>
                        </div>


                        <div class='box-form grid gap-10'>
                            <div class='grid gap-20 align-content-start'>
                                <h3>Čitateľ</h3>
                                <div class='grid gap-10 col-2 auto justify-content-start align-items-center'>
                                    <p class='h1'>59.00 €</p>
                                    <p> / rok</p>
                                </div>
                                <div class="hr"></div>
                                <p class=''>Predplať si Túlavé knižky na celý rok a získaj navyše 15 kreditov na vypožičanie knižiek.</p>
                                <ul class='ml20'>
                                    <li><p class="">Doprava a vrátenie zadarmo</p></li>
                                    <li><p class="">Max. 1 objednávka za mesiac</p></li>
                                    <li><p class="">Max. 2 knižky v objednávke</p></li>
                                    <li><p class="">+ 15 kreditov</p></li>
                                </ul>
                                <ul class='ml20 mb40'>
                                    <li><p class="">Hodnotenie knižiek a komentáre</p></li>
                                    <li><p class="">Možnosť predĺženia výpožičnej doby o ďalších 15 dní</p></li>
                                </ul>
                            </div>
                        </div>

                        <div class='box-form grid gap-10'>
                            <div class='grid gap-20 align-content-start'>
                                <h3>Knihomoľ</h3>
                                <div class='grid gap-10 col-2 auto justify-content-start align-items-center'>
                                    <p class='h1'>99.00 €</p>
                                    <p> / rok</p>
                                </div>
                                <div class="hr"></div>
                                <p class=''>Ak chceš mať neustály prísun kníh na čítanie, tak určite oceníš možnosť prednostnej rezervacie knižiek a automatického odoslania knižiek bez nutnosti objednania.</p>
                                <ul class='ml20'>
                                    <li><p class="">Doprava a vrátenie zadarmo</p></li>
                                    <li><p class="">Max. 2 objednávky za mesiac</p></li>
                                    <li><p class="">Max. 2 knižky v objednávke</p></li>
                                    <li><p class="">+ 20 kreditov</p></li>
                                </ul>
                                <ul class='ml20 mb40'>
                                    <li><p class="">Hodnotenie knižiek a komentáre</p></li>
                                    <li><p class="">Možnosť predĺženia výpožičnej doby o ďalších 30 dní</p></li>
                                    <li><p class="">Rezervácia knižiek a automatické odoslanie bez nutnosti objednania</p></li>
                                </ul>
                            </div>
                        </div>



                    </div>
                </div>
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
