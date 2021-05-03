<template>
    <div class="component">
        <div class="container-standard grid">
            <div class='grid gap-40'>
                <h2 class='grid col-2 auto justify-content-start gap-20 align-items-center'>Detail objednávky <span :class='"status " + statusTagClass(dataDetail.data.status)'>{{status(dataDetail.data.status)}}</span></h2>


                <!-- {{dataDetail}} -->
                <div class='grid gap-60'>
                    <div class='grid gap-20 auto'>
                        <div class='table-wrapper justify-content-start'>
                            <div class='table grid auto col-3'>
                                <div class="table-head">
                                    <div>Názov</div>
                                    <div>Kredity</div>
                                    <div>Sklad</div>
                                </div>

                                <div class='table-row' v-for='(item) in dataDetail.data_items' :key='item.id'> 
                                    <div><p class='strong'>{{item.name}}</p><p class='italic small'>{{item.author}}</p></div>
                                    <div class='grid justify-items-start'><span class='tag yellow'>{{item.price}} kreditov</span></div>
                                    <div><p><nuxt-link :to="'/admin/stock/detail/' + item.stock_id">{{item.code}}</nuxt-link></p></div>
                                </div>

                                <div class='table-row'> 
                                    <div class='bt1 grid col-2 auto gap-20 justify-content-start align-content-center'>
                                        <div>
                                            <p class='strong'>Doručenie</p>
                                            <p v-if='dataDetail.data.delivery_option == "zasielkovna"' class='italic small'>{{dataDetail.data.place}}, {{dataDetail.data.street}}, {{dataDetail.data.zip}}, {{dataDetail.data.city}}</p>
                                            <p v-if='dataDetail.data.delivery_option == "sk_posta"' class='italic small'>{{dataDetail.data.name}} {{dataDetail.data.surname}}, {{dataDetail.data.street}}, {{dataDetail.data.zip}}, {{dataDetail.data.city}}</p>
                                        </div>
                                        <div class='grid'>
                                            <img v-if='dataDetail.data.delivery_option == "zasielkovna"' class='delivery-img align-self-center' src="https://widget.packeta.com/v5/static/media/logoSK.a6779253.svg" alt="zasielkovna-logo">
                                            <img v-if='dataDetail.data.delivery_option == "sk_posta"' class='delivery-img align-self-center' src="https://www.posta.sk/images/site/sl-posta-logo.svg" alt="sk-posta-logo">
                                        </div>
                                    </div>
                                    <div class='bt1 grid justify-items-start'><span class='tag yellow'>ZADARMO</span></div>
                                    <div class='bt1'><p></p></div>
                                </div>
                            </div>
                        </div>

                        <div class='box-2 grid col-2 p10 auto justify-items-end justify-content-end gap-10 align-items-center'>
                            <div><p class='small'>Spolu:</p></div>
                            <div class='grid col-2 auto align-items-center gap-5'><p class='big strong'>{{dataDetail.sum_price}}</p> <p class='small'>kreditov</p></div>
                        </div>
                    </div>

                    <!-- <ul class='maxw600 ml20'>
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
                    </ul> -->
                    <div class='box grid'>
                        <div class='justify-self-end grid auto col-2 gap-20 align-items-center'>
                            <p>Zmeniť stav objednávky:</p>
                            <div>
                                <button v-if='dataDetail.data.status == 1' class='button cta black' @click.once='ready()'>Pripravená na odoslanie</button>
                                <button v-if='dataDetail.data.status == 2' class='button cta black' @click.once='notready()'>Objednaná</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    </div>
</template>

<script>

export default {
    props: ['dataDetail'],
    data() {
        return {

        }
    },
    methods: {
        async ready() {
                await this.$axios.$put('/order/ready', {
                    "id": this.dataDetail.data.id,
                })
                .then((response) => {
                    console.log(response);
                    this.$router.push('/admin/orders')
                }, (error) => {
                    console.log(error);
                    //this.res = error.response.data.message
                });
        },
        async notready() {
                await this.$axios.$put('/order/notready', {
                    "id": this.dataDetail.data.id,
                })
                .then((response) => {
                    console.log(response);
                    this.$router.push('/admin/orders')
                }, (error) => {
                    console.log(error);
                    //this.res = error.response.data.message
                });
        },
        status(status) {
            if(status == 0) {return "Nepotvrdená"}
            if(status == 1) {return "Nová"}
            if(status == 2) {return "Pripravená"}
            if(status == 3) {return "Na ceste"}
            if(status == 4) {return "Doručená"}
        },
        statusTagClass(status) {
            if(status == 0) {return "gray"}
            if(status == 1) {return "red"}
            if(status == 2) {return "orange"}
            if(status == 3) {return "yellow"}
            if(status == 4) {return "green"}
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
.delivery-img {
    height: 25px;
    border-radius: 0px;
}
</style>
