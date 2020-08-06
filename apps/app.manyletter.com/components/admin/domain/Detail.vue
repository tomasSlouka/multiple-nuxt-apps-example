<template>
    <div class='component grid gap-20'>
        <div class="box grid gap-20">
            
            <h3>{{domainDetail.data.name}}</h3>
                
                <form @submit.prevent='submitForm()' class='grid gap-20 '>
                    <div class='grid gap-20 align-items-start'>
                        <div>
                            <label for="title">Domain name</label>
                            <input type="text" name='name' v-model='domainDetail.data.name' />
                        </div>
                        <div>
                            <label for="title">Renting price</label>
                            <input type="text" name='price_renting' v-model='domainDetail.data.price_renting' />
                        </div>
                        <div>
                            <label for="title">Buyout price</label>
                            <input type="text" name='price_buyout' v-model='domainDetail.data.price_buyout' />
                        </div>
                        <div>
                            <label for="title">Domain story</label>
                            <textarea type="text" name='description' v-model='domainDetail.data.description' ></textarea>
                        </div>
                    </div>
                    <div class="hr"></div>
                    <div class='grid col-2 gap-10 auto justify-content-start align-items-center'>
                        <button type='submit' class='cta'>Save</button>
                        <p class='info' v-show='submitSuccess'> {{ submitText }} </p>
                        <p class='error' v-show='submitError'> {{ submitText }} </p>
                    </div>
                </form> 
        </div>
    </div>
</template>

<script>

export default {
    props: ['domainDetail'],
    data() {
        return {
            submitSuccess: false,
            submitError: false,
            submitText: 'Saved!',
            // level: "100",
            // email: "@svetrovnatek.cz",
            // name: ""
        }
    },
    methods: {
        async submitForm() {
            await this.$axios.$put('/domain', {
                "id": this.$route.params.id,
                "name": this.domainDetail.data.name,
                "price_renting": this.domainDetail.data.price_renting,
                "price_buyout": this.domainDetail.data.price_buyout,
                "description": this.domainDetail.data.description
            })
            .then((response) => {
                console.log(response);
                this.submitSuccess = true;
                this.submitText = 'Saved!';
                setTimeout(() => this.submitSuccess = false, 4000)
                // this.$router.push('/admin/subscriber/settings')
            }, (error) => {
                console.log(error);
                this.submitError = true;
                this.submitText = error.response.data.message;
                setTimeout(() => {
                    this.submitError = false, 
                    this.submitText = ''
                }, 4000)
                // this.res = error.response.data.message
            });
        },
        // async removeUser(email) {
        //     console.log(email)
        //     await this.$axios.$delete('/user', { 
        //         data: {
        //             "email": email,
        //         }
        //     })
        //     .then((response) => {
        //         console.log(response);
        //         window.location.reload(true)
        //         // this.$router.push('/admin/creator/dashboard');
        //     }, (error) => {
        //         console.log(error);
        //         //this.res = error.response.data.message
        //     });
        // },
    },
}
</script>

<style scoped>
.user-box {
    border-top: 1px solid #eee;
    padding: 20px 20px;
}
.user-box:hover {
    background-color: rgba(15,176,172,0.025098);
}
.user-box:last-child {
    border-bottom: 1px solid #eee;
}
</style>
