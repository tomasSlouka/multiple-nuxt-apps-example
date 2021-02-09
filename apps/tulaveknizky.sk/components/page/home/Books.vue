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
                            <!-- <img src="https://fakeimg.pl/130x220" alt="" class='testbook' /> -->
                        </div>
                        <div class='grid gap-10'>
                            <h3>{{item.name}}</h3>
                            <p class="small gray">{{item.author}}</p>
                            <p>{{item.short_text == "" ? item.long_text.slice(0,180) + "..." : item.short_text }}</p>
                            <p><nuxt-link :to='"/kniha/" + item.id'>Viac o knihe</nuxt-link></p>
                        </div>
                        <div class='align-self-end grid gap-10 justify-items-end justify-self-end'>

                            <div class='grid col-3 auto'>
                                <h2>{{item.price}}</h2>
                                <p class="small align-self-center mt5 ml5">kreditov</p>
                                <!-- <img src="@/assets/img/icon-eur.svg" alt="" class='eur' /> -->
                            </div>

                            <div>
                                <!-- {{item.stock_count_all}}
                                {{item.stock_count_available}}
                                {{item.stock_count_borrowed}} -->
                                <p v-if="item.stock_count_available == 0 && item.stock_count_borrowed > 0" class="small gray">Všetko sme vypožičali</p>
                                <p v-if="item.stock_count_available == 0 && item.stock_count_all == 0" class="small gray">Knižka je dočasne nedostupná</p>
                                <p v-if="item.stock_count_available >= 1" class="small gray">Dostupné ihneď</p>
                                <!-- <p v-if="item.stock_count_available == 1" class="small gray">Dostupný {{item.stock_count_available}} exemplár</p> -->
                                <!-- <p v-if="item.stock_count_available >= 2 && item.stock_count_available <= 4" class="small gray">Dostupné {{item.stock_count_available}} exempláre</p> -->
                                <!-- <p v-if="item.stock_count_available > 4" class="small gray">Dostupných {{item.stock_count_available}} exemplárov</p> -->
                            </div>
                            <div class='align-self-end grid align-items-center col-2 auto gap-20'>
                                <img src="@/assets/img/icon-love.svg" alt="" class='love' />
                                <button v-if="item.stock_count_available >= 1" class='button cta black'>Požičať</button>
                                <button v-if="item.stock_count_available == 0 && item.stock_count_borrowed > 0" class='button cta white'>Sledovať dostupnosť</button>
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
