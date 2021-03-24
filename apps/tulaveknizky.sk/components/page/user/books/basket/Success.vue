<template>
    <div class="component">
        <div class="container-standard grid">
            <div class='grid gap-40'>
                <div class='grid gap-20'>
                    <!-- <h2>Tvoja objednávka bola úspešne odoslaná!</h2> -->
                    <h2>Hurá! Túlavé knižky sa idú zbaliť na vandrovku.</h2>
                </div>
                <div class='maxw700 grid gap-10'>
                    <h3>Ešte aby sme nezabudli:</h3>
                    <ul class='ml20 grid gap-5'>
                        <!-- <li>Knižky odosielame zvyčajne do 3 pracovných dní.</li> -->
                        <li>Príprava na vandrovku zvyčajne trvá 3 pracovné dni.</li>
                        <li>Samotná vandrovka trvá 30 dní a začína plynúť až po vyslaní knižiek z našeho hlavného stanu.</li>
                        <li>Stav vandrovky si môžeš kontrolovať v sekcií "Moje požičané knižky" alebo naskenovaním QR kódu na zadnej strane knižky.</li>
                        <li>Ak sa rozhodneš túto výpravu zmeniť alebo zrušiť, prosím kontaktuj nás na <a href='mailto:ahoj@tulaveknizky.sk'>ahoj@tulaveknizky.sk</a>.<br>Knižkám sa to pokúsime ľudsky vysvetliť tak, aby sa neurazili.</li>
                    </ul>
                </div>
                <div class='grid md-col-2 auto justify-content-start gap-10'>
                    
                    <div><nuxt-link to='/kniznica' class='button cta white'>Späť do knižnice</nuxt-link></div>
                    <div><nuxt-link to='/user/books/borrowed' class='button cta black'>Moje požičané knižky</nuxt-link></div>

                </div>
            </div>
            
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {

        }
    },
    methods: {
        
    },
}
</script>

<style scoped>
.box {
    background-color: #f7f7f7;
    /* border-top: 6px solid rgba(255,212,1,0.32157); */
    border-bottom: 6px solid #eee;
    padding: 40px;
    border-radius: 4px;
}
.box-2 {
    background-color: #f7f7f7;
    border-bottom: 6px solid rgba(255,212,1,0.32157);
    /* border-bottom: 6px solid #eee; */
    padding: 40px;
    border-radius: 4px;
}
.delivery-img {
    height: 25px;
    border-radius: 0px;
}
</style>
