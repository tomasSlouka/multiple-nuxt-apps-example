<template>
    <div class='component grid'>

        <div class="box grid auto align-self-start gap-20">
            <div class='grid col-2 auto align-items-center'>
                <h3 v-if='method == "code"'>Verifikačný kód</h3>
                <h3 v-if='method == "password"'>Tvoje heslo</h3>
                <nuxt-link to='/' class='justify-self-end'><img src="@/assets/img/logo-icon.svg" alt="" class='logo' /></nuxt-link>
            </div>
            <!-- <div class="hr"></div> -->
            <form class="grid gap-10" @submit.prevent='submitForm'>
                <div>
                    <label for="password" class='small gray'>Kód</label>
                    <input id="password" name="password" type="password" v-model="password" placeholder='napr. 1234'>
                </div>

                <button class="cta black" type="submit">Overiť a prihlásiť sa</button>
            </form>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            email: decodeURIComponent(this.$route.query.email),
            password: this.$route.query.code || '',
            method: this.$route.query.method || 'code',
        }
    },
    methods: {
        submitForm() {
            this.$store.dispatch('auth/loginUser', {
                email: this.email,
                password: this.password,
                endpoint: '/auth/login'
            })
            .then(() => {
                this.$store.dispatch('auth/setUser', {
                    endpoint: '/user'
                })
                this.$router.push('/')
            })
        }
    }
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
