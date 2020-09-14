<template>
    <div class='component grid'>

        <div class="box grid auto align-self-start gap-20">
            <div class='grid col-2 auto align-items-center'>
                <h3>Verification code</h3>
                <nuxt-link to='/' class='justify-self-end'><img src="@/assets/img/logo.png" alt="" class='logo' /></nuxt-link>
            </div>
            <!-- <div class="hr"></div> -->
            <!-- <p>We sent an email to you at <span class='email'>{{ email }}</span>. <br></p> -->
            <p>Click the link or paste the code from email to verify your account.</p>
            <form class="grid gap-10" @submit.prevent='submitForm'>
                <div>
                    <label for="password" class='small gray'>Code</label>
                    <input id="password" name="password" type="password" v-model="password" placeholder='Enter your code here...'>
                </div>

                <button class="cta black" type="submit">Verify and Sign Up</button>
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
    background-color: #fff;
    padding: 30px;
    margin: 0px auto;
    width: 320px;
    max-width: 100%;
    box-shadow: 0 1px 6px 0 rgba(14,30,37,.12);
    border-radius: 4px;
}
span.email {
    color: #39ac37;
    font-weight: 400;
}
.logo {
    width: 32px;
    height: 32px;
    border-radius: 32px;
}
</style>
