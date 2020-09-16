<template>
    <div class='component grid'>

        <div class="box grid auto align-self-start gap-20">
            <div class='grid col-2 auto align-items-center'>
                <h3>Log in</h3>
                <nuxt-link to='/' class='justify-self-end'><img src="@/assets/img/logo.png" alt="" class='logo' /></nuxt-link>
            </div>
            <!-- <div class="hr"></div> -->
            <form class="grid gap-10" @submit.prevent='submitForm'>
                <div>
                    <label for="email" class='small gray'>Enter your email</label>
                    <input id="email" name="email" type="text" v-model="email" placeholder='Your login email?'>
                </div>

                <button class="cta black" type="submit">Submit</button>
            </form>
            <!-- <div class="hr"></div> -->
            <p class="small gray text-center">Don't you have an account yet? <nuxt-link to='/sign-up'>Sign up</nuxt-link>.</p>
        </div>

    </div>
</template>

<script>

export default {
    data() {
        return {
            email: '',
        }
    },
    methods: {
        async submitForm() {
            await this.$axios.$post('/auth/code', {
                "email": this.email
            })
            .then((response) => {
                console.log(response);
                this.$router.push('/log-in/code?email=' + encodeURIComponent(this.email))
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
