<template>
    <div class="component">
        <div class="container-standard grid">
            <div class='grid gap-40'>
                <h2>Upravenie knižného titulu</h2>

                <div class='box-form'>
                    <form @submit.prevent='submitForm()' class='grid gap-30 md-col-2 align-items-start'>
                        
                        <div class='grid gap-20'>
                            <!-- Name -->
                            <div>
                                <label for="name">Názov knihy</label>
                                <input type="text" placeholder="Názov knihy" name="name" v-model="dataDetail.data.name">
                            </div>
                            <!-- Name -->

                            <!-- Author -->
                            <div>
                                <label for="author">Autor</label>
                                <input type="text" placeholder="Autor" name="author" v-model="dataDetail.data.author">
                            </div>
                            <!-- Author -->

                            <!-- Price -->
                            <div>
                                <label for="price">Cena</label>
                                <input type="text" placeholder="Cena" name="price" v-model="dataDetail.data.price">
                            </div>
                            <!-- Price -->

                        </div>

                        <div class='grid gap-20'>
                            <!-- Short text -->
                            <div>
                                <label for="short_text">Krátky popis</label>
                                <textarea type="text" placeholder="Krátky popis" name="short_text" v-model="dataDetail.data.short_text"></textarea>
                            </div>
                            <!-- Short text -->

                            <!-- Long text -->
                            <div>
                                <label for="long_text">Celý popis</label>
                                <textarea class='long' type="text" placeholder="Celý popis" name="long_text" v-model="dataDetail.data.long_text"></textarea>
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
    props: ['dataDetail'],
    data() {
        return {
            submitSuccess: false,
            submitError: false,
            submitText: 'Uložené!',
        }
    },
    methods: {
        async submitForm() {
            // if(this.password_1 === this.password_2) {
                await this.$axios.$put('/book', {
                    // "category_id": this.category_id,
                    "id": this.$route.params.id,
                    "name": this.dataDetail.data.name,
                    "author": this.dataDetail.data.author,
                    "price": this.dataDetail.data.price,
                    "short_text": this.dataDetail.data.short_text,
                    "long_text": this.dataDetail.data.long_text,
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
                    // this.$router.push('/admin/subscriber/settings')
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
    /* background-color: #ffd40140; */
    /* border-bottom: 10px solid #ffd401; */
}
</style>
