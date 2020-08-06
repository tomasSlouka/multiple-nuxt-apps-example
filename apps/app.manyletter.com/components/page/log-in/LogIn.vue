<template>
    <div class='component grid'>

        <div class="box grid auto align-self-center gap-20">
            <h3>Log in</h3>
            <form class="grid gap-10" @submit.prevent='submitForm'>
                <div>
                    <label for="email" class='small gray'>Enter your email</label>
                    <input id="email" name="email" type="text" v-model="email" placeholder='Your login email?'>
                </div>

                <button class="cta" type="submit">Submit</button>
            </form>
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
