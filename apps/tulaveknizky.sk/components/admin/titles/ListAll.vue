<template>
    <div class="component">
        <div class="container-standard grid">
            <div class='grid gap-40'>
                <div class='grid md-col-2 align-items-center'>
                    <h2>Zoznam</h2>
                    <nuxt-link to="/admin/titles/add" class='button cta black justify-self-end'>Pridať nový knižný titul</nuxt-link>
                </div>

                <div class='grid gap-5 auto '>
                    <div class='table-wrapper justify-content-start'>
                        <div class='table grid auto col-4'>
                            <div class="table-head">
                                <!-- <div>ID</div> -->
                                <div>Názov</div>
                                <div>Autor</div>
                                <div>Cena</div>
                                <!-- <div>Krátky popis</div> -->
                                <!-- <div>Dlhý popis</div> -->
                                <div>Akcia</div>
                            </div>

                            <div class='table-row' v-for='(item, index) in bookList.data' :key='item.id'> 
                                <!-- <div><p>{{item.id}}.</p></div> -->
                                <div><p class='strong'>{{item.name}}</p></div>
                                <div><p class='italic'>{{item.author}}</p></div>
                                <div class='grid justify-items-start'><span class='tag gray'>{{item.price}}</span></div>
                                <!-- <div>{{item.short_text}}</div> -->
                                <!-- <div>{{item.long_text}}</div> -->
                                <div class='grid col-2 auto gap-5 justify-content-start justify-items-start'>
                                    <nuxt-link :to='"/admin/titles/detail/" + item.id' class='button cta small white' >Upraviť</nuxt-link>
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
    props: ['bookList'],
    data() {
        return {

        }
    },
    methods: {
        // async deleteButton(id, index) {
        //     await this.$axios.$delete('/book/'+ id)
        //     .then((response) => {
        //         console.log(response)
        //         this.bookList.data.splice(index, 1)
        //     }, (error) => {
        //         console.log(error);
        //     });
        // }
        async deleteButton(data) {
            await this.$store.dispatch("books/deleteBook", data)
        }
    },
}
</script>

<style scoped>
    /* .table-row {
        background-color: #fff;
        border: 1px solid #eee;
        border-bottom: 6px solid #eee;
        padding: 20px;
        border-radius: 4px;
    }
    .table-row:hover {
        background-color: #f7f7f7;
        border-bottom: 6px solid #eee;
        padding: 20px;
        border-radius: 4px;
    } */
</style>
