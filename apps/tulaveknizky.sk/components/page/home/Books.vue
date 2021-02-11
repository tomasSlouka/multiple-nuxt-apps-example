<template>
    <div class="component">

        <div class='container-standard grid gap-30 md-col-2 auto align-items-start'>
            
            <div class='grid gap-10'>
                <h4>Filtruj, <span class='font14'>filtruj,</span> <span class='font12'>vykrúcaj...</span></h4>
                <div id='filter' class='minw250'>
                    <ul>
                        <li>Najnovšie</li>
                        <li>Najoblubenejšie</li>
                        <li>Špecialne pre teba</li>
                    </ul>
                </div>
            </div>
            <div class='grid gap-10'>

                <h4>Najnovšie knižky</h4>
                <div class='grid gap-30'>
                    
                    
                    
                    <div v-for='(item) in bookList.data' :key='item.id' class="box grid gap-20 align-content-start align-items-start md-col-3 auto">
                        <div>
                            <img src="https://fakeimg.pl/130x220" alt="" class='testbook' />
                        </div>
                        <div class='grid gap-10'>
                            <h3>{{item.name}}</h3>
                            <div class='grid col-2 auto justify-content-start align-items-center gap-20'>
                                <p class="small strong">{{item.author}}</p>
                                <!-- <div class='flex wrap'><span class='tag white' v-for="(cat) in item.categories == null ? [] : item.categories.split(',')" :key='cat'>{{cat}}</span></div> -->
                            </div>
                            <p>{{item.short_text == "" ? item.long_text.slice(0,180) + "..." : item.short_text }}</p>
                            <p class='small'><nuxt-link :to='"/kniznica/" + item.id + "/" + item.url' class='strong'>Viac o knihe &#187;</nuxt-link></p>
                        </div>
                        <div class='align-self-end grid gap-10 justify-items-end justify-self-end'>

                            
                            <div class='flex wrap justify-content-end maxw160'><span class='tag white' v-for="(cat) in item.categories == null ? [] : item.categories.split(',')" :key='cat'>{{cat}}</span></div>

                            <div class='grid col-3 auto'>
                                <h2>{{item.price}}</h2>
                                <p class="small align-self-center mt5 ml5">kreditov</p>
                                <!-- <img src="@/assets/img/icon-eur.svg" alt="" class='eur' /> -->
                            </div>

                            <div>
                                <p v-if="item.stock_count_available == 0 && item.stock_count_borrowed > 0" class="small strong red">Všetko sme vypožičali</p>
                                <p v-if="item.stock_count_available == 0 && item.stock_count_all == 0" class="small strong red">Dočasne nedostupná</p>
                                <p v-if="item.stock_count_available >= 1" class="small strong green">Dostupné ihneď</p>
                                <!-- <p v-if="item.stock_count_available == 1" class="small gray">Dostupný {{item.stock_count_available}} exemplár</p> -->
                                <!-- <p v-if="item.stock_count_available >= 2 && item.stock_count_available <= 4" class="small gray">Dostupné {{item.stock_count_available}} exempláre</p> -->
                                <!-- <p v-if="item.stock_count_available > 4" class="small gray">Dostupných {{item.stock_count_available}} exemplárov</p> -->
                            </div>

                            <div v-if="$store.getters['auth/isUserLoggedIn']" class='align-self-end grid align-items-center col-2 auto gap-20'>
                                <img src="@/assets/img/icon-love.svg" alt="" class='love' />
                                <button v-if="item.stock_count_available >= 1" class='button cta black' @click='borrowBook({id: item.id}, $event)'>Požičať</button>
                                <button v-if="item.stock_count_available == 0 && item.stock_count_borrowed > 0" class='button cta white small' @click='setNotification({id: item.id}, $event)'>Sledovať dostupnosť</button>
                                <button v-if="item.stock_count_available == 0 && item.stock_count_all == 0" class='button cta red'>Nedostupné</button>
                            </div>

                            <div v-else class='align-self-end grid align-items-center'>
                                <!-- <img src="@/assets/img/icon-love.svg" alt="" class='love' /> -->
                                <nuxt-link v-if="item.stock_count_available >= 1" class='button cta black' to='/prihlasenie?from=kniznica'>Požičať</nuxt-link>
                                <nuxt-link v-if="item.stock_count_available == 0 && item.stock_count_borrowed > 0" class='button cta white small' to='/prihlasenie'>Sledovať dostupnosť</nuxt-link>
                                <button v-if="item.stock_count_available == 0 && item.stock_count_all == 0" class='button cta red'>Nedostupné</button>
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

    props: ['bookList'],
    methods: {
        async borrowBook(data, e) {
            await this.$axios.$post('/order/additem', {
                    "book_id": book_id,
                })
                .then((response) => {
                    console.log(response);
                    e.target.innerText = 'Knižka pridaná!'
                    setTimeout(() => this.submitSuccess = false, 4000)
                    // console.log(e.target.innerText)
                    // this.$router.push('/admin/stock/detail/'+ response.id)
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
    background-color: #f7f7f7;
    border-bottom: 6px solid #eee;
    padding: 20px;
    border-radius: 4px;
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

.readmore {
    text-decoration: none;
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
