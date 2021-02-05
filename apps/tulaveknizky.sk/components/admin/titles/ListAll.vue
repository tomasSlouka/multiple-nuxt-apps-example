<template>
    <div class="component">
        <div class="container-standard grid">
            <div class='grid gap-40'>
                <div class='grid md-col-2 align-items-center'>
                    <h2>Zoznam </h2>
                    <nuxt-link to="/admin/titles/add" class='button cta black justify-self-end'>Pridať nový knižný titul</nuxt-link>
                </div>
                <div>
                    <p class='small'>
                        Zobrazujem <strong>{{bookList.count}}</strong> knižných titulov.
                    </p>
                </div>
                <!-- {{bookList.data}} -->
                <div class='grid gap-5 auto '>
                    <div class='table-wrapper justify-content-start'>
                        <div class='table grid auto col-4'>
                            <div class="table-head">
                                <!-- <div>ID</div> -->
                                <div>Názov</div>
                                <div>Cena</div>
                                <div>Kategórie</div>
                                <!-- <div>Značky</div> -->
                                <!-- <div>Krátky popis</div> -->
                                <!-- <div>Dlhý popis</div> -->
                                <div>Akcia</div>
                            </div>

                            <div class='table-row' v-for='(item, index) in bookList.data' :key='item.id'> 
                                <!-- <div><p>{{item.id}}.</p></div> -->
                                <div><p class='strong'>{{item.name}}</p><p class='italic small'>{{item.author}}</p></div>
                                <div class='grid justify-items-start'><span class='tag yellow'>{{item.price}} kreditov</span></div>
                                <div><div class='flex wrap'><span class='tag gray' v-for="(cat) in item.categories == null ? [] : item.categories.split(',')" :key='cat'>{{cat}}</span></div></div>
                                 <!-- <div><div class='flex wrap'><span class='tag gray' v-for="(tag) in item.tags == null ? [] : item.tags.split(',')" :key='tag'>{{tag}}</span></div></div> -->
                                <div class='grid col-3 auto gap-5 justify-content-start justify-items-start'>
                                    <nuxt-link :to='"/admin/titles/detail/" + item.id' class='button cta small black' >Upraviť</nuxt-link>
                                    <button v-if="submitSuccess" class='button cta small white'>{{submitText}}</button>
                                    <button v-else class='button cta small white' @click='addBookToStock(item.id)'>+ Pridať do skladu</button>
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
            submitSuccess: false,
            submitError: false,
            submitText: 'Knižka pridaná!',
            // categories: this.bookList.data.categories === null ? [] : this.bookList.data.categories.split(","),
            // tags: this.bookList.data.tags === null ? [] : this.bookList.data.tags.split(","),
        }
    },
    methods: {
        async addBookToStock(book_id) {
            await this.$axios.$post('/stock', {
                    "book_id": book_id,
                })
                .then((response) => {
                    console.log(response);
                    this.submitSuccess = true
                    this.submitText = 'Knižka pridaná!'
                    setTimeout(() => this.submitSuccess = false, 4000)
                    this.$router.push('/admin/stock/detail/'+ response.id)
                }, (error) => {
                    console.log(error);
                });
        },
        async deleteButton(data) {
            await this.$store.dispatch("book/deleteItem", data)
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
