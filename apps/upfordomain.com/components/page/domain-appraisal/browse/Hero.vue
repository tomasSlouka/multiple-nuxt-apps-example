<template>
    <div class="component">

        <div class="container-narrow mt80">
            <div class='grid md-col-2 gap-80 align-content-center align-items-center'>
                <div class='grid gap-20'>
                    <h1 class='maxw500'>Browse all domains up for rent/sell</h1>
                    <p>All domain names have been manualy checked. You can filter domains by the TLD, renting price, buyout price and domain tier and tags.</p>
                </div>
                <div>
                    <div class='testimonial grid gap-20 justify-self-start col-2 auto'>
                        <span class='font26'>🧭</span> 
                        <p class=''>Discover <span class='strong'>{{domainStats.count}} domains</span> for a total renting price of <span class='strong'>${{domainStats.totalPriceRenting}}/month</span> and buyout price of <span class='strong'>${{domainStats.totalPriceBuyout}}</span>.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-narrow mt80">
            <div class='grid gap-20'>
                <!-- <h2>More domain names from the seller</h2> -->
                <!-- <div class='box-filter'>
                    <h3>🔨 Filter is under construction</h3>
                </div> -->
                <div class='grid md-col-3 gap-20 align-items-start justify-content-start'>
                    <nuxt-link tag='div' v-for='item in domainList.data' :key='item.id' :to='"/domains-up-for-rent/detail/" + item.name' class="box-domain grid gap-10"> 
                        <h4> {{item.name}}</h4>
                        <div class='grid col-2'>
                            <div>
                                <label for="">Renting price</label>
                                <p>${{item.price_renting}}/month</p>
                            </div>
                            <div>
                                <label for="">Buyout price</label>
                                <p>${{item.price_buyout}}</p>
                            </div>
                        </div>
                    </nuxt-link>
                </div>

            </div>
        </div>

    </div>
</template>

<script>

export default {
    
    props: ['domainList', 'domainStats'],
    
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
    /* background-color: #fbf7ed; */
    padding: 40px;
    border-radius: 4px;
    border: 1px solid rgb(227, 242, 225);
    width: 100%;
    max-width: 400px;
}
.testimonial {
    /* background-color: #fbf7ed; */
    padding: 30px;
    border-radius: 4px;
    /* border: 1px solid rgb(227, 242, 225); */
    background-color: #fbf7ed;
    width: 100%;
    /* max-width: 400px; */
}
img {
    /* border-radius: 100px; */
    /* border: 6px solid #fff; */
    width: 320px;
    max-width: 100%;
    /* box-shadow: 0 1px 6px 0 rgba(14,30,37,.12); */
}

.box-domain {
    border: 1px solid rgb(227, 242, 225);
    padding: 15px 20px;
    border-radius: 4px;
    cursor: pointer;
    /* background-color: rgba(57,172,55,.05098); */
}
.box-domain:hover {
    background-color: rgba(57,172,55,.05098);
    /* background-color: rgba(57,172,55,.05098); */
}

.box-filter {
    /* background-color: #fbf7ed; */
    padding: 30px;
    border-radius: 4px;
    /* border: 1px solid rgb(227, 242, 225); */
    border: 1px solid rgb(227, 242, 225);
    width: 100%;
    /* max-width: 400px; */
}
</style>
