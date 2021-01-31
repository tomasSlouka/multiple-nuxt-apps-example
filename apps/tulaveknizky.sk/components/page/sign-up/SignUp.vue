<template>
    <div class='component grid'>

        <div class="box grid auto align-self-start gap-20">
            <div class='grid col-2 auto align-items-center'>
                <h3>Registrácia</h3>
                <nuxt-link to='/' class='justify-self-end'><img src="@/assets/img/logo-icon.svg" alt="" class='logo' /></nuxt-link>
            </div>
            <!-- <div class="hr"></div> -->
            <form class="grid gap-10" @submit.prevent='submitForm'>
                <p v-if="error" class="error small">{{ error }}</p>
                <div>
                    <!-- {{referrer}} -->
                    <label for="email" class='small gray'>Email</label>
                    <input id="email" name="email" type="text" v-model="email" placeholder='napr. john@snow.sk'>
                </div>
                <button class="cta black" type="submit">Pokračovať</button>
                <div>
                    <!-- <p class='gray text-center small'>  By clicking the button above you agree to our Terms and Privacy Policy. </p> -->
                    <p class='gray text-center small'>  Kliknutím na "pokračovať" súhlasiš s podmienkami poskytovania služby a spracovaním osobných údajov. </p>
                    <p class='gray text-center small mt20'>Máš už účet? <nuxt-link to='/prihlasenie'>Prihlás sa</nuxt-link>.</p>
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
                this.$router.push('/registracia/code?email=' + encodeURIComponent(this.email))
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
    padding: 30px;
    margin: 0px auto;
    max-width: 320px;
    /* max-width: 100%; */

    background-color: #fff;
    border-bottom: 6px solid #eee;
    padding: 20px;
    border-radius: 4px;
}
.logo {
    width: 32px;
    height: 32px;
    /* border-radius: 32px; */
}
</style>
