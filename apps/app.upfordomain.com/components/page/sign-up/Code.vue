<template>
    <div class='component grid'>

        <div class="box grid auto align-self-center gap-20">
            <h3>Verification code</h3>
            <p>We sent an email to you at <span class='email'>{{ email }}</span>. <br></p>
            <p>Click the link or paste the code from email to verify your account.</p>
            <form class="grid gap-10" @submit.prevent='submitForm'>
                <div>
                    <label for="password" class='small gray'>Code</label>
                    <input id="password" name="password" type="password" v-model="password" placeholder='Enter your code here...'>
                </div>

                <button class="cta" type="submit">Verify and Sign Up</button>
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
            this.$store.dispatch('loginUser', {
                email: this.email,
                password: this.password,
                endpoint: '/api/v1/auth/login'
            })
            .then(() => {
                this.$store.dispatch('setUser', {
                    endpoint: '/api/v1/user'
                })
                this.$router.push('/admin/home')
            })
        }
    }
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
span.email {
    color: #0fb0ac;
    font-weight: 400;
}

</style>
