<template>
    <div class="component">
        <div class="container-standard grid">
            <div class='grid gap-40'>
                <div class='grid md-col-2 align-items-center'>
                    <h2>Zoznam</h2>
                    <nuxt-link to="/admin/users/add" class='button cta black justify-self-end'>Nový používateľ</nuxt-link>
                </div>

                <div class='grid gap-5 auto '>
                    <div class='table-wrapper justify-content-start'>
                        <div class='table grid auto col-6'>
                            <div class="table-head">
                                <div>Názov</div>
                                <div>Meno</div>
                                <div>Priezvisko</div>
                                <div>Dátum registrácie</div>
                                <div>Posledné prihlásenie</div>
                                <div>Akcia</div>
                            </div>

                            <div class='table-row' v-for='(item) in userList.data' :key='item.id'> 
                                <div><p class='strong'>{{item.email}}</p></div>
                                <div><p>{{item.name}}</p></div>
                                <div><p>{{item.surname}}</p></div>
                                <div><DateFormat :date="item.created_at" format="datetime" /></div>
                                <div><DateFormat :date="item.last_online_at" format="datetime" /></div>
                                <div class='grid col-2 auto gap-5 justify-content-start justify-items-start'>
                                    <nuxt-link :to='"/admin/users/detail/" + item.id' class='button cta small white' >Upraviť</nuxt-link>
                                    <!-- <button class='button cta small red' @click='deleteButton({id: item.id, index: index })'>Vymazať</button> -->
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
    props: ['userList'],
    components: {
        DateFormat
    },
    data() {
        return {

        }
    },
    methods: {
        async deleteButton(data) {
            await this.$store.dispatch("user/deleteItem", data)
        }
    },
}
</script>

<style scoped>

</style>
