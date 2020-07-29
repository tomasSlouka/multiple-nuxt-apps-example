<template>
    <div class='component grid'>

        <div class="box grid auto align-self-center gap-20">
            <h3>Verification code</h3>
            <form class="grid gap-10" @submit.prevent='submitForm'>
                <div>
                    <label for="password" class='small gray'>Code</label>
                    <input id="password" name="password" type="password" v-model="password" placeholder='Enter your code here...'>
                </div>

                <button class="cta" type="submit">Verify and Log In</button>
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
