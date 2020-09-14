<template>
    <div class='component grid gap-20'>
        <div class="box grid gap-20">
            
            <form @submit.prevent='scrapePage()' class='grid gap-20 '>
                <h3>What is your newsletter website?</h3>
                <div class='grid gap-60 align-items-start'>
                    <div class='grid gap-20'>
                        <div>
                            <label for="title">Newsletter url</label>
                            <input type="text" name='url' v-model='url'/>
                        </div>
                    </div>
                </div>
                <!-- {{ scrapeData }} -->
                <div class="hr"></div>
                <div>
                    <button type='submit' class='cta'>Get data</button>
                </div>
            </form> 

            <form @submit.prevent='submitForm()' class='grid gap-20 '>
                <h3>Create a new newsletter</h3>
                <div class='grid gap-60 align-items-start'>
                    <div class='grid gap-20'>
                        <div>
                            <label for="title">Newsletter title</label>
                            <input type="text" name='title' v-model='title'/>
                        </div>
                        <div>
                            <label for="title">Newsletter short intro</label>
                            <textarea @keyup='charCountIntro()' maxlength="255" type="text" name='intro' v-model='intro'></textarea>
                            <p class='char-counter'>{{charCounterIntro}} / 255</p>
                        </div>
                        <!-- <div>
                            <label for="title">Newsletter description</label>
                            <textarea @keyup='charCountLong()' maxlength="450" type="text" name='description' v-model='description'></textarea>
                            <p class='char-counter'>{{charCounterLong}} / 450</p>
                        </div> -->
                        <div>
                            <label for="title">Newsletter url</label>
                            <input type="text" name='url' v-model='url'/>
                        </div>
                        <div>
                            <label for="title">Newsletter image</label>
                            <input type="text" name='og_img' v-model='og_img'/>
                        </div>
                        <div>
                            <label for="title">Newsletter creator name</label>
                            <input type="text" name='creator_name' v-model='creator_name'/>
                        </div>
                    </div>
                    <!-- <div class='grid gap-20'>
                        <div>
                            <label for="title">Tags</label>
                            <input type="text" name='tags' v-model='tags'/>
                        </div>
                    </div> -->
                </div>
                <div class="hr"></div>
                <div>
                    <button type='submit' class='cta'>Create</button>
                    <button @click.prevent='$router.back()' href='#' class="cta white"> Cancel </button>
                </div>
            </form>            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user_id: this.$store.state.userData.id,
            title: '',
            intro: '',
            description: '',
            og_img: '',
            creator_name: '',
            url: '',
            tags: '',
            scrapeData: '',

            charCounterIntro: 0,
            // charCounterLong: 0,
        }
    },
    methods: {
        charCountIntro() {
            this.charCounterIntro = this.intro ? this.intro.length : '';
        },
        async scrapePage() {
            await this.$axios.$post('/api/maylday/pg/scrape', {
                'url': this.url
            })
            .then((response) => {
                console.log(response)
                this.scrapeData = response
                this.title = response.data.og_title
                this.intro = response.data.og_description
                this.url = response.data.og_url ? response.data.og_url : this.url
                this.og_img = response.data.og_image
                this.creator_name = response.data.og_site_name ? response.data.og_site_name : "manyBot"
                this.charCountIntro()
            }, (error) => {
                console.log(error)
            });
        },
        // charCountLong() {
        //     this.charCounterLong = this.description.length;
        // },
        async submitForm() {
            // this.$axios.setHeader('AUTHTOKEN', this.$store.state.token)
            await this.$axios.$post('/api/maylday/newsletter', {
                "user_id": this.user_id,
                "title": this.title,
                "intro": this.intro,
                // "description": this.description,
                "creator_name": this.creator_name,
                "url": this.url,
                "og_img": this.og_img,
                "tags": this.tags
            })
            .then((response) => {
                console.log(response);
                this.$store.dispatch('setUser')
                .then(() => {
                    this.$router.push('/admin/home/newsletter/success')
                })
            }, (error) => {
                console.log(error);
                //this.res = error.response.data.message
            });
        }
    },
}
</script>

<style scoped>

</style>
