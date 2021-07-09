<template>
    <div class="component">
        <div class="container-standard grid">
            
            <div class="grid col-1 gap-60 align-items-start">
                <!-- Total credits -->
                <div class='grid gap-20 md-col-3'>
                    <div class='grid gap-10 box-form align-content-start'>
                        <p class='h4'>Celkový počet kreditov</p>
                        <div class='grid gap-10 col-2 auto justify-content-start align-items-center'>
                            <p class='h1'>{{$store.state.auth.userData.credit}}</p>
                            <p>kreditov</p>
                        </div>
                        <div class="hr mb10"></div>
                        <p class='small'>Tvoj celkový počet kreditov, ktoré si si dobil/a.</p>
                        <!-- <button class='button cta white small justify-self-start' v-scroll-to="{
								el: '#pay-for-credit',
								easing: 'ease-in',
								offset: 0,
								force: true,
								cancelable: true,
								//onStart: onStart,
								//onDone: onDone,
								//onCancel: onCancel,
								x: false,
								y: true
						}">Dobiť kredit</button> -->
                        <nuxt-link to='/user/account/credits/add' class='button cta black justify-self-start'>Dobiť kredit</nuxt-link>
                    </div>

                    <div class='grid gap-10 box-form align-content-start'>
                        <p class='h4'>Zablokované kredity</p>
                        <div class='grid gap-10 col-2 auto justify-content-start align-items-center'>
                            <p class='h1'>{{$store.state.auth.userData.credit_blocked}}</p>
                            <p>kreditov</p>
                        </div>
                        <div class="hr mb10"></div>
                        <p class='small'>Tieto kredity sa používaju ako záloha za knižky, ktoré máš aktuálne vypožičané. Odblokujú sa hneď ako knižky vrátiš.</p>
                    </div>

                    <div class='grid gap-10 box-form align-content-start'>
                        <p class='h4'>Voľné kredity</p>
                        <div class='grid gap-10 col-2 auto justify-content-start align-items-center'>
                            <p class='h1'>{{$store.state.auth.userData.credit ? $store.state.auth.userData.credit-$store.state.auth.userData.credit_blocked + '.00' : "0.00"}}</p>
                            <p>kreditov</p>
                        </div>
                        <div class="hr mb10"></div>
                        <p class="small">Tieto kredity môžeš použiť na vypožičanie knižiek, prípadne ich môžeš poslať kamarátovi ako darček.</p>
                    </div>
                </div>

                <div class='box grid gap-10 showmore pointer' @click.prevent='showMore = !showMore' >
                    <div class='grid align-items-center col-2 auto justify-content-space-between gap-10'>
                        <h4>Ako fungujú kredity?</h4>
                        <div class='grid align-items-center col-2 auto justify-content-space-between gap-10'>
                            <p v-show='!showMore' class='small strong'>viac</p>
                            <p v-show='showMore' class='small strong'>menej</p>
                            <img src="@/assets/img/icon-arrow-down.svg" alt="" class='icon' />
                        </div>
                    </div>
                    <div class='grid gap-10 mt10' v-show='showMore'>
                        <p>Ak si chceš požičiavať knižky, potrebuješ kredity.</p>
                        <p>Kredity slúžia ako záloha na požičané knižky. To znamená, že by sa nemali nikdy minúť. Ak si požičiaš knižky za 20 kreditov, systém zablokuje tieto kredity. Ak knižky vrátiš do konca výpožičnej doby, všetky kredity sa ti odblokujú a budeš ich môcť znova použiť na vypožičanie ďalších knižiek. Ak knižky nestihneš vrátiť do konca vypožičnej doby, za každú knižku a každý deň omeškania ti systém odpočíta 0.2 kreditu.</p>
                        <p>Kredity ti budú odpočítané aj v prípade, keď vratiš knižku v poškodenom stave (napr. chýbajúce strany). Tak sa o knižky prosím pekne staraj, aby si ich mohlo prečítať čo najviac knihomolov!</p>
                        <p>Kredity sa nedajú vrátiť alebo zameniť späť za peniaze.</p>
                    </div>
                </div>


                <!-- Add credits -->
                <!-- <div class='grid gap-20'>
                    <div class='grid gap-10'>
                        <h2 id='pay-for-credit'>Dobi si nekonečné kredity</h2>
                        <p>Vyber si hodnotu kreditu, ktorú chceš dobiť.</p>
                    </div>
                    <div class='grid col-4 gap-20'>
                        <div class='box-form grid'>
                            <button class='button cta black grid align-items-center col-2 auto justify-content-center gap-10' @click='checkout({price_id: "price_1IOtYyJ6MYnVMg48ONjz2XJc"})'><img src="@/assets/img/icon-money.svg" alt="" class='icon icon-money' /> 5 €</button>
                        </div>
                        <div class='box-form grid'>
                            <button class='button cta black grid align-items-center col-2 auto justify-content-center gap-10' @click='checkout({price_id: "price_1IOtYyJ6MYnVMg48OjKeyfQu"})'><img src="@/assets/img/icon-money.svg" alt="" class='icon icon-money' /> 10 €</button>
                        </div>
                        <div class='box-form grid'>
                            <button class='button cta black grid align-items-center col-2 auto justify-content-center gap-10' @click='checkout({price_id: "price_1IOtYyJ6MYnVMg48JT5vIrUP"})'><img src="@/assets/img/icon-money.svg" alt="" class='icon icon-money' /> 15 €</button>
                        </div>
                        <div class='box-form grid'>
                            <button class='button cta black grid align-items-center col-2 auto justify-content-center gap-10' @click='checkout({price_id: "price_1IOtYyJ6MYnVMg48kVQglr8p"})'><img src="@/assets/img/icon-money.svg" alt="" class='icon icon-money' /> 20 €</button>
                        </div>
                    </div>
                    <div class='grid gap-10'>
                        <p class='small text-center'>Platba cez zabezpečenú platobnú bránu "Stripe"</p>
                    </div>
                </div> -->
            </div>
            <!-- <button id="checkout-button" @click='checkout()'>Checkout</button> -->
            
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            showMore: false
        }
    },
    methods: {

        async checkout(data) {
            var stripe = Stripe('pk_test_yeFEo6pqzWldc5k7AywPK6FZ00waY9xJ9L');

            console.log(data.price_id)
            await this.$axios.$post('/stripe/payment/credit', {
                "price_id": data.price_id,
            })
            .then((response) => {
                console.log(response)
                return response
            })
            .then((response) => {
                return stripe.redirectToCheckout({ sessionId: response.session_id })
            })
            .then((result) => {
                if (result.error) {
                    console.log(result.error.message);
                }
            })
            .catch(function(error) {
                console.error('Error:', error);
            });
        }
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
.icon-money {
    height: 10px;
    border-radius: 0px;
}
.showmore:hover {
    background-color: #eee;
}
</style>
