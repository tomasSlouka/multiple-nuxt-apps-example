<template>
    <div class="component">
        <div class="container-standard grid">
            <div class='grid gap-40'>
                <div class='grid md-col-2 align-items-center'>
                    <h2>Zoznam</h2>
                    <nuxt-link to="/admin/tags/add" class='button cta black justify-self-end'>Pridať novú značku</nuxt-link>
                </div>

                <div class='grid gap-5 auto '>
                    <div class='table-wrapper justify-content-start'>
                        <div class='table grid auto col-2'>
                            <div class="table-head">
                                <div>Názov</div>
                                <div>Akcia</div>
                            </div>

                            <div class='table-row' v-for='(item, index) in tagList.data' :key='item.id'> 
                                <div><p class='strong'>{{item.name}}</p></div>
                                <div class='grid col-2 auto gap-5 justify-content-start justify-items-start'>
                                    <nuxt-link :to='"/admin/tags/detail/" + item.id' class='button cta small white' >Upraviť</nuxt-link>
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

export default {
    props: ['tagList'],
    data() {
        return {

        }
    },
    methods: {
        async deleteButton(data) {
            await this.$store.dispatch("tag/deleteItem", data)
        }
    },
}
</script>

<style scoped>

</style>
