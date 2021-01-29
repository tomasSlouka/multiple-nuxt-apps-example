<template>
    <div class="component">
        <div class="container-standard grid">
            <div class='grid gap-40'>
                <h2>Nový knižný titul</h2>

                <div class='box-form'>
                    <form @submit.prevent='submitForm()' class='grid gap-30 md-col-2 align-items-start'>
                        
                        <div class='grid gap-20'>
                            <!-- Name -->
                            <div>
                                <label for="name">Názov knihy</label>
                                <input type="text" placeholder="Názov knihy" name="name" v-model="name">
                            </div>
                            <!-- Name -->

                            <!-- Author -->
                            <div>
                                <label for="author">Autor</label>
                                <input type="text" placeholder="Autor" name="author" v-model="author">
                            </div>
                            <!-- Author -->

                            <!-- Price -->
                            <div>
                                <label for="price">Cena</label>
                                <input type="text" placeholder="Cena" name="price" v-model="price">
                            </div>
                            <!-- Price -->

                        </div>

                        <div class='grid gap-20'>
                            <!-- Short text -->
                            <div>
                                <label for="short_text">Krátky popis</label>
                                <textarea type="text" placeholder="Krátky popis" name="short_text" v-model="short_text"></textarea>
                            </div>
                            <!-- Short text -->

                            <!-- Long text -->
                            <div>
                                <label for="long_text">Celý popis</label>
                                <textarea class='long' type="text" placeholder="Celý popis" name="long_text" v-model="long_text"></textarea>
                            </div>
                            <!-- Long text -->
                        </div>

                        <div class="md-span-2 hr">

                        </div>
                        <div class='justify-self-end md-span-2 grid col-3 auto gap-10 align-items-center'>
                            <div>
                                <p class='success' v-if='submitSuccess'>{{submitText}}</p>
                            </div>
                            <nuxt-link to='/admin/titles' class="button cta red">Zrušiť</nuxt-link>
                            <button type="submit" class="button cta black">Uložiť</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            submitSuccess: false,
            submitError: false,
            submitText: 'Uložené!',
            id: null,
            category_id: null,
            name: null,
            author: null,
            price: null,
            short_text: null,
            long_text: null,
            created_at: null,
            updated_at: null,
            deleted_at: null,
            created_by: null,
            updated_by: null,
            deleted_by: null,
        }
    },
    methods: {
        async submitForm() {
            // if(this.password_1 === this.password_2) {
                await this.$axios.$post('/book', {
                    // "category_id": this.category_id,
                    "name": this.name,
                    "author": this.author,
                    "price": this.price,
                    "short_text": this.short_text,
                    "long_text": this.long_text,
                })
                .then((response) => {
                    console.log(response);
                    // this.$store.dispatch('auth/setUser', {
                    //     endpoint: '/user'
                    // })
                    this.submitSuccess = true;
                    this.submitText = 'Uložené!';
                    // if(this.password_1 === '') { this.password_locked = 0 } else { this.password_locked = 1 }
                    setTimeout(() => this.submitSuccess = false, 4000)
                    this.$router.push('/admin/titles/detail/'+ response.id)
                }, (error) => {
                    console.log(error);
                    //this.res = error.response.data.message
                });
            // } else {
            //     this.submitError = true;
            //     this.submitText = 'Passwords do not match!';
            //     setTimeout(() => {
            //         this.submitError = false, 
            //         this.submitText = ''
            //     }, 4000)
            // }
        },
        // async removePassword() {
        //     await this.$axios.$put('/user/removepassword', {
        //     })
        //     .then((response) => {
        //         console.log(response);
        //         this.$store.dispatch('auth/setUser', {
        //             endpoint: '/user'
        //         })
        //         this.password_locked = 0
        //         this.password_1 = ''
        //         this.password_2 = ''
        //         // this.$router.push('/admin/creator/dashboard');
        //     }, (error) => {
        //         console.log(error);
        //         //this.res = error.response.data.message
        //     });
        // }
    },
}
</script>

<style scoped>
.component {
    padding: 1px;
    /* background-color: #f7f7f7; */
    /* border-bottom: 10px solid #ffd401; */
}
</style>
