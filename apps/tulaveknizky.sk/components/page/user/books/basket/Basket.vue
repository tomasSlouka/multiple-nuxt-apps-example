<template>
    <div class="component">
        <div class="container-standard grid">
            <div class='grid gap-40'>
                <div class='grid md-col-2 align-items-center'>
                    <h2>Knižky v batôžku</h2>
                </div>

                <div class='grid gap-60'>
                    <div class='grid gap-20 auto'>
                        <div class='table-wrapper justify-content-start'>
                            <div class='table grid auto col-3'>
                                <div class="table-head">
                                    <div>Názov</div>
                                    <div>Kredity</div>
                                    <div>Akcia</div>
                                </div>

                                <div class='table-row' v-for='(item, index) in dataBasket.data_items' :key='item.id'> 
                                    <div><p class='strong'>{{item.name}}</p><p class='italic small'>{{item.author}}</p></div>
                                    <div class='grid justify-items-start'><span class='tag yellow'>{{item.price}} kreditov</span></div>
                                    <div class='grid col-2 auto gap-5 justify-content-start justify-items-start'>
                                        <button class='button cta small red' @click='deleteButton({id: item.id, index: index, price: item.price })'>Odstrániť z batôžka</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class='box-2 grid col-2 p10 auto justify-items-end justify-content-end gap-10 align-items-end'>
                            <div><p class='small mb2'>Spolu:</p></div>
                            <div class='grid col-2 auto align-items-end gap-5'><h3 class='p0 m0'>{{dataBasket.sum_price}}</h3> <p class='small mb2'>kreditov</p></div>
                        </div>
                    </div>

                    <div class='box grid col-2'>
                        <div class='justify-self-start'><nuxt-link to='/kniznica' class='button cta white'>Späť do knižnice</nuxt-link></div>
                        <div class='justify-self-end'><nuxt-link to='/user/books/basket/address' class='button cta black'>Pokračovať na spôsob doručenia</nuxt-link></div>
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

        }
    },
    methods: {
        async deleteButton(data) {
            await this.$store.dispatch("order/deleteItemBasket", data)
            this.dataBasket.count_items--
            this.dataBasket.sum_price = this.dataBasket.sum_price - data.price
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
</style>
