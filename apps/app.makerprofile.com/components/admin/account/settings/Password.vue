<template>
    <div class='component grid gap-20'>
        <div class="box grid gap-20">
            
            <form @submit.prevent='submitForm' class='grid gap-60 md-col-2 align-items-start'>
                <div class='grid gap-20'>
                    <h3>Password settings</h3>
                    <p class='small'>You can enable or disable your password for login. When password is empty, system will send you an automatic message with a login code. Otherwise, you can log in with your static password.</p>
                    <!-- <div class="hr"></div> -->
                    <!-- <div class="hr"></div> -->
                </div>
                <div class='grid gap-20'>
                    
                    <!-- <h4>Change the password</h4> -->
                    <div class='grid gap-20 align-items-start'>
                    <p v-show='password_locked == 1' class='info p0 grid gap-20 md-col-2 auto align-items-start'>Password is active <button @click.prevent='removePassword()' class='cta red small justify-self-end'>Switch to login code</button></p>
                    <p v-show='password_locked == 0' class='info p0'>Login code is active</p>
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
            password_locked: this.$store.state.auth.userData.password_locked,
            password_1: this.$store.state.auth.userData.password_locked == 1 ? 'uimreacc' : '',
            password_2: this.$store.state.auth.userData.password_locked == 1 ? 'asdfzujz' : '',
        }
    },
    methods: {
        async submitForm() {
            if(this.password_1 === this.password_2) {
                await this.$axios.$put('/user/setpassword', {
                    "password": this.password_1,
                })
                .then((response) => {
                    console.log(response);
                    this.$store.dispatch('auth/setUser', {
                        endpoint: '/user'
                    })
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
            await this.$axios.$put('/user/removepassword', {
            })
            .then((response) => {
                console.log(response);
                this.$store.dispatch('auth/setUser', {
                    endpoint: '/user'
                })
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
