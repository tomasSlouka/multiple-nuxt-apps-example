<template>
    <div class="component">
        <div class="container-standard grid">
            <div class='grid gap-40'>
                <h2>Rekapitulácia objednávky</h2>

                <!-- {{dataBasket}} -->
                <div class='grid gap-60'>
                    <div class='grid gap-20 auto'>
                        <div class='table-wrapper justify-content-start'>
                            <div class='table grid auto col-2'>
                                <div class="table-head">
                                    <div>Názov</div>
                                    <div>Kredity</div>
                                </div>

                                <div class='table-row' v-for='(item) in dataBasket.data_items' :key='item.id'> 
                                    <div><p class='strong'>{{item.name}}</p><p class='italic small'>{{item.author}}</p></div>
                                    <div class='grid justify-items-start'><span class='tag yellow'>{{item.price}} kreditov</span></div>
                                </div>

                                <div class='table-row'> 
                                    <div class='bt1 grid col-2 auto gap-20 justify-content-start align-content-center'>
                                        <div>
                                            <p class='strong'>Doručenie</p>
                                            <p v-if='dataBasket.data.delivery_option == "zasielkovna"' class='italic small'>{{dataBasket.data.place}}, {{dataBasket.data.street}}, {{dataBasket.data.zip}}, {{dataBasket.data.city}}</p>
                                            <p v-if='dataBasket.data.delivery_option == "sk_posta"' class='italic small'>{{dataBasket.data.name}} {{dataBasket.data.surname}}, {{dataBasket.data.street}}, {{dataBasket.data.zip}}, {{dataBasket.data.city}}</p>
                                        </div>
                                        <div class='grid'>
                                            <img v-if='dataBasket.data.delivery_option == "zasielkovna"' class='delivery-img align-self-center' src="https://widget.packeta.com/v5/static/media/logoSK.a6779253.svg" alt="zasielkovna-logo">
                                            <img v-if='dataBasket.data.delivery_option == "sk_posta"' class='delivery-img align-self-center' src="https://www.posta.sk/images/site/sl-posta-logo.svg" alt="sk-posta-logo">
                                        </div>
                                    </div>
                                    <div class='bt1 grid justify-items-start'><span class='tag yellow'>ZADARMO</span></div>
                                </div>
                            </div>
                        </div>

                        <div class='box-2 grid col-2 p10 auto justify-items-end justify-content-end gap-10 align-items-center'>
                            <div><p class='small'>Spolu:</p></div>
                            <div class='grid col-2 auto align-items-center gap-5'><p class='big strong'>{{dataBasket.sum_price}}</p> <p class='small'>kreditov</p></div>
                        </div>
                    </div>

                    <ul class='maxw600 ml20'>
                        <li>
                            <p class="small">
                                Ak potvrdíš objednavku, súhlasiš, že tvojú adresu a kontaktné údaje môžeme poskytnuté tretej strane pre účely doručenia.
                            </p>
                        </li>
                        <li>
                            <p class="small">
                                Kredity slúžia ako záloha. Ak nám knižky vrátiš späť  a nebudú poškodené, tvoje kredity ti opätovne obnovíme a možno ti pripočítame aj niečo navyše 😀.
                            </p>
                        </li>
                    </ul>

                    <!-- <div v-if='($store.state.auth.userData.credit-$store.state.auth.userData.credit_blocked) < dataBasket.sum_price' class='grid gap-10 justify-items-start justify-self-end more-credits-box'>
                        <p class='error strong p0'>
                            Na dokončenie objednávky potrebuješ viac kreditov.
                        </p>
                        <nuxt-link to='/user/account/credits/add' class='button cta black'>Dobiť kredit</nuxt-link>
                    </div> -->
                    
                    <div class='box grid md-col-2 auto gap-10 align-items-start'>
                        <div class='md-justify-self-start grid'><nuxt-link to='/user/books/basket/delivery' class='button cta white'>Späť na výber dopravy</nuxt-link></div>
                        
                        <div v-if='($store.state.auth.userData.credit-$store.state.auth.userData.credit_blocked) < dataBasket.sum_price' class='md-justify-self-end grid gap-10'>
                            <nuxt-link to='/user/account/credits/add' class='button cta black md-justify-self-end'>Dobiť kredit</nuxt-link>
                            <p class='error strong p0 md-justify-self-end'>
                                Na dokončenie objednávky potrebuješ viac kreditov.
                            </p>
                        </div>
                    
                        <div v-else class='md-justify-self-end grid'>
                            <button class='button cta black md-justify-self-end' @click='complete()'>Potvrdiť objednávku</button>
                            <p class='error justify-self-end' v-if='submitError'>{{submitText}}</p>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    </div>
</template>

<script>

export default {
    props: ['dataBasket'],
    data() {
        return {
            submitSuccess: false,
            submitError: false,
            submitText: 'Uložené!',
        }
    },
    methods: {
        async complete() {
                await this.$axios.$put('/order/complete', {
                    "id": this.dataBasket.data.id,
                })
                .then((response) => {
                    console.log(response);
                    this.$store.dispatch("order/getDataBasket")
                    this.$router.push('/user/books/basket/success')
                }, (error) => {
                    console.log(error);
                    this.submitError = true
                    this.submitText = error.response.data.message
                    setTimeout(() => this.submitError = false, 4000)
                });
        },
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

.more-credits-box {
    border: 1px solid #d73a4a;

    /* border-bottom: 6px solid #d73a4a; */
    /* border-bottom: 6px solid #eee; */
    padding: 20px;
    border-radius: 4px;

}
</style>
