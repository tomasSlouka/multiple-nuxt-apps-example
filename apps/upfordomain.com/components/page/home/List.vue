<template>
    <div class="component">

        <div class="container-narrow">
            <div class='grid gap-40'>
                <div>
                    <h2 class=''>Domain list</h2>
                </div>

                <div class='grid gap-20'>
                    <h3>🆕 New domains</h3>
                    <div class='grid md-col-3 gap-20 align-items-start justify-content-start'>
                        <nuxt-link tag='div' v-for='item in domainListNewest.data' :key='item.id' :to='"/domains-up-for-rent/detail/" + item.name' class="box-domain grid gap-10"> 
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

                <div class='grid gap-20'>
                    <h3>💯 Premium domains</h3>
                    <div class='grid md-col-3 gap-20 align-items-start justify-content-start'>
                        <nuxt-link tag='div' v-for='item in domainListPremium.data' :key='item.id' :to='"/domains-up-for-rent/detail/" + item.name' class="box-domain grid gap-10"> 
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

    </div>
</template>

<script>
export default {

    props: ['domainListNewest', 'domainListPremium'],

}
</script>

<style scoped>
.box {
    background-color: #fbf7ed;
    padding: 40px;
    border-radius: 4px;
    /* background-color: rgba(57,172,55,.05098); */
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
</style>
