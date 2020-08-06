<template>
    <div class='component grid'>

        <div class="box grid auto align-self-center gap-20">
            <h3>Get your account</h3>
            <form class="grid gap-10" @submit.prevent='submitForm'>
                <div>
                    <!-- {{referrer}} -->
                    <label for="email" class='small gray'>Your email address</label>
                    <input id="email" name="email" type="text" v-model="email" placeholder='What is your email address?'>
                </div>
                <button class="cta" type="submit">Submit</button>
                <div>
                    <p class='info text-center small'>You will get verification code to your email.</p>
                    <p class='info text-center small'>No spam ever.</p>
                </div>
            </form>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            referrer: this.$cookies.get('app.referrer')
            // referrer: decodeURIComponent(new Buffer(this.$cookies.get('app.referrer'), 'base64').toString('ascii'))
        }
    },
    methods: {
        async submitForm() {
            await this.$axios.$post('/signup', {
                "email": this.email,
                "referrer": this.referrer || ''
            })
            .then((response) => {
                console.log(response);
                this.$router.push('/sign-up/code?email=' + encodeURIComponent(this.email))
            }, (error) => {
                console.log(error);
                //this.res = error.response.data.message
            });
        }
    },
}
</script>

<style scoped>
.component {
    height: 100%;
    padding: 20px;
}
.box {
    background-color: #fff;
    padding: 30px;
    margin: 0px auto;
    max-width: 320px;
    box-shadow: 0 1px 6px 0 rgba(14,30,37,.12);
    border-radius: 8px;
}

</style>
