<template>
    <div class='component grid gap-20'>
        <div class="box grid gap-20">
            
            <form @submit.prevent='submitForm' class='grid gap-20 '>
                <h3>Password settings</h3>
                <p>You can enable or disable your password for ManyLetter. When password is empty, ManyLetter will send you an automatic message with a login code. Otherwise, you can log in to ManyLetter with your static password.</p>
                <div class="hr"></div>
                <p v-show='password_locked == 1' class='info strong p0 grid col-2'>You are logging in with a password <button @click.prevent='removePassword()' class='cta red small justify-self-end'>Switch to login code</button></p>
                <p v-show='password_locked == 0' class='info strong p0'>You are logging in with a login code</p>
                <div class="hr"></div>
                
                <h4>Change the password</h4>
                <div class='grid gap-20 xs-col-1 lg-col-2 align-items-start'>
                    <div>
                        <label for="title">New password *</label>
                        <input type="password" name='password_1' v-model='password_1' />
                    </div>
                    <div>
                        <label for="title">New password verification *</label>
                        <input type="password" name='password_2' v-model='password_2' />
                    </div>
                </div>
                <div class="hr"></div>
                <div class='grid col-2 gap-10 auto justify-content-start align-items-center'>
                    <button type='submit' class='cta'>Save new password</button>
                    <!-- <button @click.prevent='removePassword()' class='cta red justify-self-end'>Remove password</button> -->
                    <p class='info' v-show='submitSuccess'> {{ submitText }} </p>
                    <p class='error' v-show='submitError'> {{ submitText }} </p>
                </div>
            </form> 
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            submitSuccess: false,
            submitError: false,
            submitText: 'Saved!',
            password_locked: this.$store.state.userData.password_locked,
            password_1: this.$store.state.userData.password_locked == 1 ? 'uimreacc' : '',
            password_2: this.$store.state.userData.password_locked == 1 ? 'asdfzujz' : '',
        }
    },
    methods: {
        async submitForm() {
            if(this.password_1 === this.password_2) {
                await this.$axios.$put('/api/maylday/user/setpassword', {
                    "password": this.password_1,
                })
                .then((response) => {
                    console.log(response);
                    this.$store.dispatch('setUser');
                    this.submitSuccess = true;
                    this.submitText = 'Saved!';
                    if(this.password_1 === '') { this.password_locked = 0 } else { this.password_locked = 1 }
                    setTimeout(() => this.submitSuccess = false, 4000)
                    // this.$router.push('/admin/subscriber/settings')
                }, (error) => {
                    console.log(error);
                    //this.res = error.response.data.message
                });
            } else {
                this.submitError = true;
                this.submitText = 'Passwords do not match!';
                setTimeout(() => {
                    this.submitError = false, 
                    this.submitText = ''
                }, 4000)
            }
        },
        async removePassword() {
            await this.$axios.$put('/api/maylday/user/removepassword', {
            })
            .then((response) => {
                console.log(response);
                this.$store.dispatch('setUser');
                this.password_locked = 0
                this.password_1 = ''
                this.password_2 = ''
                // this.$router.push('/admin/creator/dashboard');
            }, (error) => {
                console.log(error);
                //this.res = error.response.data.message
            });
        }
    },
}
</script>

<style scoped>

</style>
