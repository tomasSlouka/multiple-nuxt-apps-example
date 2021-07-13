<template>
    <div class="component">
        <div class="container-standard grid">
            
            <div class="grid col-1 gap-60 align-items-start">
                <!-- Total credits -->
                <div class='grid gap-20 md-col-3'>


                    <div v-if='$store.state.auth.userData.subscription_plan_name && $store.state.auth.userData.subscription_canceled_at === null' class='grid gap-10 box-form align-content-start' >
                        <p class='h4'>Aktívny plán</p>
                        <p class='h1'>{{$store.state.auth.userData.subscription_plan_name}}</p>
                        <div class="hr mb10"></div>
                        <div class='grid gap-10 col-2 auto justify-content-start align-items-center'>
                            <p class='strong'>Platba:</p>
                            <p v-if='$store.state.auth.userData.subscription_plan_name == "Zvedavec"'>4.99 € / mesiac</p>
                            <p v-if='$store.state.auth.userData.subscription_plan_name == "Čitateľ"'>59.00 € / rok</p>
                            <p v-if='$store.state.auth.userData.subscription_plan_name == "Knihomoľ"'>99.00 € / rok</p>
                        </div>
                        <div class='grid gap-10 col-2 auto justify-content-start align-items-center'>
                            <p class='strong'>Platí od:</p>
                            <div><DateFormat :date="$store.state.auth.userData.subscription_started_at" format="date" /></div>
                        </div>
                        <div class='grid gap-10 col-2 auto justify-content-start align-items-center'>
                            <p class='strong'>Obnovenie platnosti:</p>
                            <div><DateFormat :date="$store.state.auth.userData.subscription_expires_at" format="date" /></div>
                        </div>
                        <div v-if='$store.state.auth.userData.subscription_canceled_at' class='grid justify-content-start align-items-center'>
                            <p class='strong error p0'>Predplatné si prerušil <DateFormat :date="$store.state.auth.userData.subscription_canceled_at" format="date"/>.</p>
                        </div>
                        <div class="hr"></div>
                        <div>
                            <button class='align-self-end button cta black' @click='portal()'> Upraviť predplatné</button>
                        </div>
                    </div>


                    <div v-if='$store.state.auth.userData.subscription_plan_name === null' class='grid gap-10 box-form align-content-start'>
                        <p class='h4'>Aktívny plán</p>
                        <p class='h1'>Bez plánu</p>
                        <div class="hr mb10"></div>
                        <div class='grid gap-10 justify-content-start align-items-center'>
                            <p class='small'>Bez aktívneho plánu si nemôžeš požičiavať knižky.</p>
                            <button class='button cta black justify-self-start' v-scroll-to="{
								el: '#plans',
								easing: 'ease-in',
								offset: 0,
								force: true,
								cancelable: true,
								//onStart: onStart,
								//onDone: onDone,
								//onCancel: onCancel,
								x: false,
								y: true
						}">Vybrať plán predplatného</button>
                        </div>
                    </div>

                    <div v-if='$store.state.auth.userData.subscription_canceled_at' class='grid gap-10 box-form align-content-start' >
                        <p class='h4'>Aktívny plán</p>
                        <p class='h1'>{{$store.state.auth.userData.subscription_plan_name}}</p>
                        <div class="hr mb10"></div>
                        <div v-if='$store.state.auth.userData.subscription_canceled_at' class='grid justify-content-start align-items-center'>
                            <p class='error p0'>Predplatné je zrušené. Plán môžeš využívať do <DateFormat :date="$store.state.auth.userData.subscription_expires_at" format="date" classes='strong'/>kedy vyprší tvoje predplatené obdobie.</p>
                            <p class='p0 mt20'>Predplatné a automatickú platbu môžeš kedykoľvek obnoviť.</p>
                        </div>
                        <div class="hr"></div>
                        <div>
                            <button class='align-self-end button cta black' @click='portal()'> Obnoviť predplatné</button>
                        </div>
                    </div>

                </div>

                <div class='box grid gap-10 showmore pointer' @click.prevent='showMore = !showMore' >
                    <div class='grid align-items-center col-2 auto justify-content-space-between gap-10'>
                        <h4>Ako funguje predplatné?</h4>
                        <div class='grid align-items-center col-2 auto justify-content-space-between gap-10'>
                            <p v-show='!showMore' class='small strong'>viac</p>
                            <p v-show='showMore' class='small strong'>menej</p>
                            <img src="@/assets/img/icon-arrow-down.svg" alt="" class='icon' />
                        </div>
                    </div>
                    <div class='grid gap-10 mt10' v-show='showMore'>
                        <p>Ak si chceš požičiavať knižky, potrebuješ mať aktívny jeden z plánov predplatného.</p>
                        <p>Aktivovaním ktoréhokoľvek plánu predplatného sa ti okamžite odomknú všetky benefity plynúce z popisu plánu. Ak si aktivuješ plán "Čitateľ" alebo plán "Knihomoľ" k dispozícií dostaneš kredity navyše, ktoré budeš môcť používať na vypožičanie knižiek po celú dobu predplatného. Ak sa rozhodneš predplatený plán zrušiť, tieto kredity už viac nebudeš mať k dispozícií.</p>
                        <p>Predplatné sa automaticky predlžuje. Predplatné a automatické predlžovanie, je možné kedykoľvek zrušiť. Benefity plánu predplatného budú deaktivované až po uplynutí posledného dňa predplatenej doby (tzn. ak zaplatíš za plán "Knihomoľ" a hneď po tom zrušíš predplatné, benefity tohto plánu sa deaktivujú až o 365 dní). </p>
                    </div>
                </div>

                <!-- Add credits -->
                <div class='grid gap-20'>
                    <div class='grid gap-10'>
                        <h2 id='plans'>Plány predplatného</h2>
                        <p>Vyber si plán predplatného, ktorý ti najviac vyhovuje.</p>
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
                            <button v-if='!$store.state.auth.userData.subscription_plan_name' class='align-self-end button cta black grid align-items-center col-2 auto justify-content-center gap-10' @click='checkout({price_id: "price_1ITEofJ6MYnVMg48bMamiRjJ"})'><img src="@/assets/img/icon-money.svg" alt="" class='icon-money' /> Predplatiť</button>
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
                            <button v-if='!$store.state.auth.userData.subscription_plan_name' class='align-self-end button cta black grid align-items-center col-2 auto justify-content-center gap-10' @click='checkout({price_id: "price_1ITEp8J6MYnVMg48ImRHapa0"})'><img src="@/assets/img/icon-money.svg" alt="" class='icon-money' /> Predplatiť</button>
                        </div>

                        <!-- <div class='box-form grid gap-10'>
                            <div class='grid gap-10 align-content-start'>
                                <h4>Knihomoľ na mesiac</h4>
                                <div class="hr"></div>
                                <p class='small'>Predplať si členské na celý rok a získaj navyše 15 kreditov na vypožičanie knižiek.</p>
                                <ul class='ml20'>
                                    <li><p class="small">Doprava a vrátenie zadarmo</p></li>
                                    <li><p class="small">Max. 2 výpožičky za mesiac</p></li>
                                    <li><p class="small">Max. 2 knihy vo výpožičke</p></li>
                                    <li><p class="small">+ 10 kreditov</p></li>
                                </ul>
                                <ul class='ml20'>
                                    <li><p class="small">Hodnotenie knižiek a komentáre</p></li>
                                    <li><p class="small">Rezervácia knižiek a automatické odoslanie bez nutnosti objednania</p></li>
                                </ul>
                                <div class="hr"></div>
                            </div>
                            <button class='align-self-end button cta black grid align-items-center col-2 auto justify-content-center gap-10' @click='checkout({price_id: "price_1IOtYyJ6MYnVMg48OjKeyfQu"})'><img src="@/assets/img/icon-money.svg" alt="" class='icon-money' /> 9.99 € / mesiac</button>
                        </div> -->


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
                            <button v-if='!$store.state.auth.userData.subscription_plan_name' class='align-self-end button cta black grid align-items-center col-2 auto justify-content-center gap-10' @click='checkout({price_id: "price_1ITEpUJ6MYnVMg48uzEvWQYy"})'><img src="@/assets/img/icon-money.svg" alt="" class='icon-money' /> Predplatiť</button>
                        </div>



                    </div>
                    <div class='grid gap-10'>
                        <p class='small text-center'>Platba cez zabezpečenú platobnú bránu "Stripe"</p>
                    </div>
                </div>
            </div>
            <!-- <button id="checkout-button" @click='checkout()'>Checkout</button> -->
            
        </div>
    </div>
</template>

<script>
import DateFormat from '@/components/_system/DateFormat.vue'

export default {
    components: {
        DateFormat
    },
    data() {
        return {
            showMore: false
        }
    },
    methods: {
        async checkout(data) {
            var stripe = Stripe('pk_test_yeFEo6pqzWldc5k7AywPK6FZ00waY9xJ9L');

            console.log(data.price_id)
            await this.$axios.$post('stripe/payment/subscription', {
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
        },
        async portal() {
            await this.$axios.$post('/stripe/portal', {})
            .then((response) => {
                console.log(response)
                return response
            })
            .then((response) => {
                window.location.href = response.portal_url;
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
/* .box-form {
    max-width: 320px;
} */
.icon-money {
    height: 10px;
    border-radius: 0px;
}
.showmore:hover {
    background-color: #eee;
}
</style>
