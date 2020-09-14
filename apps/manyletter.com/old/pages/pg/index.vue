<template>
    <div class='page'>

        <form @submit.prevent='scrapePage()'>
            <input type="text" v-model='url' placeholder="url">
            <button type='submit' class='cta'>Scrape</button>
        </form>
        <div>{{ url }}</div>
        <pre>{{ scrapeData }}</pre>
    </div>
</template>

<script>


export default {
    layout: 'default-page',
        components: {

    },
    data() {
        return {
            url: 'https://manyletter.com/',
            scrapeData: ''
        }
    },
    methods: {
        async scrapePage() {
            await this.$axios.$post('/api/maylday/pg/scrape', {
                'url': this.url
            })
            .then((response) => {
                console.log(response)
                this.scrapeData = response.data
            }, (error) => {
                console.log(error)
            });
        }
    },

    // async asyncData({ $axios, params }) {
    //     console.log('asyncData executed');
    //     const [scrapeData] = await Promise.all ([
    //         $axios.$get('/api/maylday/pg/scrape'),
    //     ])
    //     return { scrapeData }
    // },
}
</script>

<style scoped>

</style>
