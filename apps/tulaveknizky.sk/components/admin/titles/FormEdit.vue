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

                            <!-- Category -->
                            <label for="long_text">Vyber kategórie</label>
                            <div class='flex wrap tags'>
                                <!-- <div  v-for="item in categoryList.data" :key="item.id" @click.prevent="updateCategory(item.id)" class='tag'>{{item.name}}</div> -->
                                <div  v-for="item in categoryList.data" :key="item.id" @click.prevent="updateCategory(item.id)" class='tag' :class="(categories.includes(item.id)) ? 'active' : ''">{{item.name}}</div>
                            </div>
                            <!-- Category -->

                            <!-- Tag -->
                            <label for="long_text">Vyber značky</label>
                            <div class='flex wrap tags'>
                                <!-- <div  v-for="item in tagList.data" :key="item.id" @click.prevent="updateTag(item.id)" class='tag'>{{item.name}}</div> -->
                                <div  v-for="item in tagList.data" :key="item.id" @click.prevent="updateTag(item.id)" class='tag' :class="(tags.includes(item.id)) ? 'active' : ''">{{item.name}}</div>
                            </div>
                            <!-- Tag -->
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
    props: ['dataDetail', 'tagList', 'categoryList'],
    data() {
        return {
            submitSuccess: false,
            submitError: false,
            submitText: 'Uložené!',

            categories: this.dataDetail.data.categories === null ? [] : this.dataDetail.data.categories.split(","),
            tags: this.dataDetail.data.tags === null ? [] : this.dataDetail.data.tags.split(","),
        }
    },
    methods: {
        async updateCategory(category_id) {
            await this.$axios.$put('/book/category', {
                "id": this.$route.params.id,
                "category_id": category_id
            })
            .then((response) => {
                console.log(response.message)
                if(response.message === "added") {this.categories.push(category_id)}
                if(response.message === "removed") {
                    this.categories = this.categories.filter(function(item) {
                        return item !== category_id
                    })
                }
                console.log(this.categories)
                
            }, (error) => {
                console.log(error);
                //this.res = error.response.data.message
            });
        },
        async updateTag(tag_id) {
            await this.$axios.$put('/book/tag', {
                "id": this.$route.params.id,
                "tag_id": tag_id
            })
            .then((response) => {
                console.log(response.message)
                if(response.message === "added") {this.tags.push(tag_id)}
                if(response.message === "removed") {
                    this.tags = this.tags.filter(function(item) {
                        return item !== tag_id
                    })
                }
                console.log(this.tags)
                
            }, (error) => {
                console.log(error);
                //this.res = error.response.data.message
            });
        },
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
                    this.$router.push('/admin/titles')
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

</style>
