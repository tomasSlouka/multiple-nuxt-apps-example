<template>
    <div class="component">
        <div class="container-standard grid">
            <div class='grid gap-40'>
                <div class='grid md-col-2 align-items-center'>
                    <h2>Zoznam</h2>
                    <nuxt-link to="/admin/orders/add" class='button cta black justify-self-end'>Vytvoriť novú objednávku</nuxt-link>
                </div>

                <div class='grid gap-5 auto '>
                    <div class='table-wrapper justify-content-start'>
                        <div class='table grid auto col-6'>
                            <div class="table-head">
                                <div>Stav</div>
                                <div>ID</div>
                                <div>Dátum</div>
                                <div>Meno a priezvisko</div>
                                <div>Adresa doručenia</div>
                                <div>Akcia</div>
                            </div>

                            <div class='table-row' v-for='(item, index) in orderList.data' :key='item.id'> 
                                <div><span :class='"status " + statusTagClass(item.status)'>{{status(item.status)}}</span></div>
                                <div><p class='small'>{{item.id}}</p></div>
                                <div><DateFormat :date="item.created_at" format="date" /></div>
                                <div><p class=''>{{item.name}} {{item.surname}}</p></div>
                                <div><p class='italic small'>{{item.place ? item.place + "," : ""}} {{item.street}}, {{item.zip}}, {{item.city}}</p></div>
                                <div class='grid col-2 auto gap-5 justify-content-start justify-items-start'>
                                    <nuxt-link :to='"/admin/orders/detail/" + item.id' class='button cta small white' >Detail</nuxt-link>
                                    <button class='button cta small red' @click='deleteButton({id: item.id, index: index })'>Vymazať</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>

import DateFormat from '@/components/_system/DateFormat.vue'

export default {
    props: ['orderList'],
    components: {
        DateFormat
    },
    data() {
        return {

        }
    },
    methods: {
        async deleteButton(data) {
            await this.$store.dispatch("order/deleteItem", data)
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

</style>
