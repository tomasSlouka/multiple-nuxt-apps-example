<template>
    <div class='component grid'>

        <div class="box grid auto align-self-start gap-20">
            <div class='grid col-2 auto align-items-center'>
                <h3>Request access</h3>
                <nuxt-link to='/' class='justify-self-end'><img src="@/assets/img/logo.png" alt="" class='logo' /></nuxt-link>
            </div>
            <!-- <div class="hr"></div> -->
            <form class="grid gap-10" @submit.prevent='submitForm'>
                <p v-if="error" class="error-box small">{{ error }}</p>
                <div>
                    <!-- {{referrer}} -->
                    <label for="email" class='small gray'>Your email address</label>
                    <input id="email" name="email" type="text" v-model="email" placeholder='What is your email address?'>
                </div>
                <button class="cta black" type="submit">Submit</button>
                <div>
                    <p class='gray text-center small'>  By clicking the button above you agree to our Terms and Privacy Policy. </p>
                    <p class='gray text-center small mt20'>Already have an account? <nuxt-link to='/log-in'>Log in</nuxt-link>.</p>
                    <!-- <p class='gray text-center small'>You will get verification code to your email.</p> -->
                    <!-- <p class='gray text-center small'>No spam ever.</p> -->
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
            error: '',
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
                this.error = error.response.data.message
                this.email = ""
            });
        }
    },
}
</script>

<style scoped>
.component {
    height: 100%;
    padding: 40px 20px;
}
.box {
    background-color: #fff;
    padding: 30px;
    margin: 0px auto;
    width: 320px;
    max-width: 100%;
    box-shadow: 0 1px 6px 0 rgba(14,30,37,.12);
    border-radius: 4px;
}
.logo {
    width: 32px;
    height: 32px;
    border-radius: 32px;
}
</style>
