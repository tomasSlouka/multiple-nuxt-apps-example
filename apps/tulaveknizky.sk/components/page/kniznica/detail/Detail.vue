<template>
    <div class="component">
        <div class="container-standard grid">
            <div class='grid gap-40'>
                <!-- <h2>Upravenie knižného titulu</h2> -->

                <div class="box grid gap-60 align-content-start align-items-start md-col-3 auto">
                        <div>
                            <img src="https://fakeimg.pl/260x440" alt="" class='testbook' />
                        </div>
                        <div class='grid gap-10'>
                            <h1>{{dataDetail.data.name}}</h1>
                            <h3>{{dataDetail.data.author}}</h3>
                            <p>{{dataDetail.data.short_text == "" ? dataDetail.data.long_text : dataDetail.data.short_text }}</p>
                            <div class='flex wrap justify-content-start mt20'><span class='tag white' v-for="(cat) in dataDetail.data.categories == null ? [] : dataDetail.data.categories.split(',')" :key='cat'>{{cat}}</span></div>
                        </div>

                        <div class='align-self-start grid gap-10 justify-items-end justify-self-end'>

                            

                            <div class='grid col-3 auto'>
                                <h2>{{dataDetail.data.price}}</h2>
                                <p class="small align-self-center mt5 ml5">kreditov</p>
                                <!-- <img src="@/assets/img/icon-eur.svg" alt="" class='eur' /> -->
                            </div>

                            <div>
                                <!-- {{dataDetail.data.stock_count_all}}
                                {{dataDetail.data.stock_count_available}}
                                {{dataDetail.data.stock_count_borrowed}} -->
                                <p v-if="dataDetail.data.stock_count_available == 0 && dataDetail.data.stock_count_borrowed > 0" class="small strong red">Všetko sme vypožičali</p>
                                <p v-if="dataDetail.data.stock_count_available == 0 && dataDetail.data.stock_count_all == 0" class="small strong red">Dočasne nedostupná</p>
                                <p v-if="dataDetail.data.stock_count_available >= 1" class="small strong green">Dostupné ihneď</p>
                                <!-- <p v-if="dataDetail.data.stock_count_available == 1" class="small gray">Dostupný {{dataDetail.data.stock_count_available}} exemplár</p> -->
                                <!-- <p v-if="dataDetail.data.stock_count_available >= 2 && dataDetail.data.stock_count_available <= 4" class="small gray">Dostupné {{dataDetail.data.stock_count_available}} exempláre</p> -->
                                <!-- <p v-if="dataDetail.data.stock_count_available > 4" class="small gray">Dostupných {{dataDetail.data.stock_count_available}} exemplárov</p> -->
                            </div>
                            <div v-if="$store.getters['auth/isUserLoggedIn']" class='align-self-end grid align-items-center col-2 auto gap-20'>
                                <img src="@/assets/img/icon-love.svg" alt="" class='love' />
                                <button v-if="dataDetail.data.stock_count_available >= 1" class='button cta black' @click='addItem({book_id: dataDetail.data.id}, $event)'>Požičať</button>
                                <button v-if="dataDetail.data.stock_count_available == 0 && dataDetail.data.stock_count_borrowed > 0" class='button cta white small' @click='setNotification({id: dataDetail.data.id}, $event)'>Sledovať dostupnosť</button>
                                <button v-if="dataDetail.data.stock_count_available == 0 && dataDetail.data.stock_count_all == 0" class='button cta red'>Nedostupné</button>
                            </div>

                            <div v-else class='align-self-end grid align-items-center'>
                                <!-- <img src="@/assets/img/icon-love.svg" alt="" class='love' /> -->
                                <nuxt-link v-if="dataDetail.data.stock_count_available >= 1" class='button cta black' to='/prihlasenie?from=kniznica'>Požičať</nuxt-link>
                                <nuxt-link v-if="dataDetail.data.stock_count_available == 0 && dataDetail.data.stock_count_borrowed > 0" class='button cta white small' to='/prihlasenie'>Sledovať dostupnosť</nuxt-link>
                                <button v-if="dataDetail.data.stock_count_available == 0 && dataDetail.data.stock_count_all == 0" class='button cta red'>Nedostupné</button>
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
        async addItem(data, e) {
            await this.$axios.$post('/order/additem', {
                "book_id": data.book_id,
            })
            .then((response) => {
                console.log(response);
                e.target.innerText = 'Knižka pridaná!'
                setTimeout(() => this.submitSuccess = false, 4000)
                // console.log(e.target.innerText)
                this.$router.push('/user/books/basket')
            }, (error) => {
                console.log(error);
            });
        },
    },
}
</script>

<style scoped>
.container-standard {
    /* border: 1px solid rgba(216, 215, 215, 0.24); */
    padding: 10px;
}
.box {
    /* background-color: #f7f7f7; */
    /* border-top: 6px solid rgba(255,212,1,0.32157); */
    /* border-bottom: 6px solid #eee; */
    /* padding: 40px; */
    /* border-radius: 4px; */
}

img {
    border-radius: 20px;
    max-height: 340px;
}
</style>
