<template>
    <div class="component">
        <div class="container-standard grid">
            <div class='grid gap-40'>
                <h2>Upravenie knižného titulu</h2>

                <div class='box-form'>
                    <div class='grid gap-60 md-col-2 align-items-start'>
                        <form @submit.prevent='submitForm()' class=''>
                            
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

                                <!-- <div class="hr"></div> -->

                                <div class='justify-self-start grid col-3 auto gap-10 align-items-center'>
                                    <button type="submit" class="button cta black">Uložiť</button>
                                    <nuxt-link to='/admin/titles' class="button cta red">Zrušiť</nuxt-link>
                                    <div>
                                        <p class='success' v-if='submitSuccess'>{{submitText}}</p>
                                    </div>
                                </div>
                            </div>

                            
                        </form>

                        <div class='grid gap-20'>
                            <!-- Obrazok -->
                            <label for="long_text">Obrázok</label>
                            <form @submit.prevent='onUploadCover()' >
                                <div class='grid gap-20'>
                                    <div v-if='selectedFileUrlCover === null' class='cover grid' @click.prevent='$refs.fileInputCover.click()' >
                                        <img :src="'https://storage.tulaveknizky.sk/public/tulaveknizky/img/cover/' + cover" alt="">
                                        <p class='align-self-start justify-self-end small'>Vybrať obrázok</p>
                                    </div>

                                    <div v-else class='cover grid' @click.prevent='$refs.fileInputCover.click()' >
                                         <img :src="selectedFileUrlCover" alt="">
                                        <p class='align-self-start justify-self-end small'>Vybrať obrázok</p>
                                    </div>

                                    <div class='grid gap-10 col-2 auto justify-content-end align-items-center'>
                                        <button v-show='showSaveCover' @click.prevent='onCancelCover()' class="cta red">Zrušiť</button>
                                        <button v-show='showSaveCover' class="cta black">{{saveTextCover}}</button>
                                    </div>
                                </div>

                                <input class='hidden' name='myFile' ref='fileInputCover' type="file" @change='onFileSelectedCover($event)' />

                            </form>
                            <!-- Obrazok -->
                            <!-- Category -->
                            <label for="long_text">Kategórie</label>
                            <div class='flex wrap tags'>
                                <!-- <div  v-for="item in categoryList.data" :key="item.id" @click.prevent="updateCategory(item.id)" class='tag'>{{item.name}}</div> -->
                                <div  v-for="item in categoryList.data" :key="item.id" @click.prevent="updateCategory(item.id)" :class="(categories.includes(item.id)) ? 'tag active' : 'tag'">{{item.name}}</div>
                            </div>
                            <!-- Category -->

                            <!-- Tag -->
                            <label for="long_text">Značky</label>
                            <div class='flex wrap tags'>
                                <!-- <div  v-for="item in tagList.data" :key="item.id" @click.prevent="updateTag(item.id)" class='tag'>{{item.name}}</div> -->
                                <div  v-for="item in tagList.data" :key="item.id" @click.prevent="updateTag(item.id)" :class="(tags.includes(item.id)) ? 'tag active' : 'tag'">{{item.name}}</div>
                            </div>
                            <!-- Tag -->
                        </div>
                    </div>
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

            categories: this.dataDetail.data.categoriesIds === null ? [] : this.dataDetail.data.categoriesIds.split(","),
            tags: this.dataDetail.data.tagsIds === null ? [] : this.dataDetail.data.tagsIds.split(","),

            cover: this.dataDetail.data.cover,

            selectedFileCover: null,
            selectedFileUrlCover: null,
            showSaveCover: false,
            saveTextCover: "Nahrať",
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
         // COVER
        onFileSelectedCover(event) {
            this.selectedFileCover = event.target.files[0]
            this.selectedFileUrlCover = URL.createObjectURL(this.selectedFileCover)
            this.showSaveCover = true
        },
        onCancelCover() {
            this.selectedFileCover = null
            this.selectedFileUrlCover = null
            this.showSaveCover = false
        },
        onUploadCover() {
            const formData = new FormData()
            formData.append('myFile', this.selectedFileCover, this.selectedFileCover.name)
            formData.append('book_id', this.$route.params.id)
            this.$axios.$post('/upload/book-cover', formData, {
                onUploadProgress: progressEvent => {
                    this.saveTextCover = Math.round(progressEvent.loaded / progressEvent.total * 100) + '%'
                }
            })
            .then((response) => {
                // this.$store.dispatch('setUser');
                this.showSaveCover = false
                this.saveTextCover = "Nahrať"
                console.log(response);
            }, (error) => {
                console.log(error);
            });
        },
        // COVER END
    },
}
</script>

<style scoped>
.cover {
    min-height: 180px;
    border: 1px solid #eeeeee;
    border-radius: 4px;
    background-repeat:no-repeat;
    background-position:center center;
    background-size: cover;
    cursor: pointer;
    background-color: #eee;
    position: relative;
    padding: 5px;
}
.cover > img {
    max-height: 180px;
    min-height: 180px;
    max-width: 100%;
    border-radius: 0;
}
.cover > p.small {
    background-color: #ffffff;
    border: 1px solid #eeeeee;
    border-radius: 4px;
    padding: 4px 20px;
    margin: 5px;
    position: absolute;
}
</style>
