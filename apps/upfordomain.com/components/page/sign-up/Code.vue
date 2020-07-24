<template>
    <div class='component grid'>

        <div class="box grid auto align-self-center gap-20">
            <h3>Email verification code</h3>
            <!-- <p>We sent an email to you at <span class='email'>{{ email }}</span>. <br></p> -->
            <!-- <p>Click the link or paste the code from email to verify your account.</p> -->
            <form class="grid gap-10" @submit.prevent='submitForm()'>
                <div>
                    <label for="password" class='small gray'>Code</label>
                    <input id="password" name="password" type="text" v-model="password" placeholder='Enter your code here...' autocomplete="off">
                </div>
                <p class='info p0' v-show='submitSuccess'> {{ submitText }} </p>
                <p class='error p0' v-show='submitError'> {{ submitText }} [{{ submitTimer }}] </p>
                <button class="cta" type="submit">Verify</button>
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

            submitSuccess: false,
            submitError: false,
            submitText: 'Success!',
            submitTimer: null,
        }
    },           
    methods: {
        async submitForm() {
            await this.$axios.$post('/api/upfordomain/auth/login', {
                'email': this.email,
				'password': this.password
            })
            .then(() => {
                this.submitSuccess = true;
                this.submitText = 'Success!';
                setTimeout(() => this.submitSuccess = false, 4000)
                this.$router.push('/')
            }, (error) => {
                // console.log(error.response.data.message)
                this.submitError = true
                this.submitText = error.response.data.message
                this.submitTimer = 10
                var timer = setInterval(() => { this.submitTimer = this.submitTimer == 10 ? 9 : this.submitTimer-1  }, 1000);
                setTimeout(() => {
                    this.submitError = false, 
                    this.submitText = '',
                    this.submitTimer = null
                    clearInterval(timer);
                }, 10000)
            });
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
    width: 100%;
    max-width: 360px;
    box-shadow: 0 1px 6px 0 rgba(14,30,37,.12);
    border-radius: 8px;
}
span.email {
    color: #39ac37;
    font-weight: 400;
}

</style>
