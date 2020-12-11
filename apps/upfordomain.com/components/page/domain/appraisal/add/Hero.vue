<template>
    <div class="component">

        <div class="container-narrow mt80">
            <div class='grid md-col-2 gap-80'>
                <div class='grid gap-20 align-content-start align-items-start'>
                    <h1 class='maxw500'>Domain appraisal.</h1>
                    <h2 class='maxw500 h3'>Be confident about the right domain price.</h2>
                    <!-- <h1 class='maxw500'>Why sell your domain when you can rent it?</h1> -->
                    <p class='maxw500'>There are millions of domain names on the internet. Some are more valuable than others. Let me appraise your domain name for you, so you can list your domain up for sale with confidence.</p>
                    <p>
                        <a class='' href="" v-scroll-to="{
								el: '#pricing',
								easing: 'ease-in',
								offset: 0,
								force: true,
								cancelable: true,
								//onStart: onStart,
								//onDone: onDone,
								//onCancel: onCancel,
								x: false,
								y: true
						}">>> See the pricing </a>
                    </p>
                </div>

                <div class='box grid gap-20 align-content-start align-self-start justify-self-center'>
                    <h3 class=''>Send me your domain for appraisal.</h3>
                    <form @submit.prevent @submit='submitForm()'>
                        <div class="grid gap-20">
                            <div>
                                <label for="domain_name">Domain name</label>
                                <input v-model='domain_name' name='domain_name' type="text" placeholder="eg. example.com" autocomplete="off">
                            </div>
                            
                            <div>
                                <label for="email">Your email</label>
                                <input v-model='email' name='email' type="text" placeholder="eg. yourname@email.com" autocomplete="on">
                            </div>

                            <div>
                                <label for="domain_name">Appraisal type</label>
                                <select v-model='appraisal_type' name="appraisal_type" id="appraisal_type" placeholder='Choose one'>
                                    <option value="fast">Domain appraisal for coffee / $3.99</option>
                                    <option value="standard">Standard domain appraisal / $7.99</option>
                                    <option value="expert">Expert domain appraisal / $69.99</option>
                                </select>
                            </div>

                            <p class='info p0' v-show='submitSuccess'> {{ submitText }} </p>
                            <p class='error p0' v-show='submitError'> {{ submitText }} </p>
                            <button type='submit' class='cta justify-self-start align-self-start'>Appraise my domain</button>
                            <p class="small">No credit card required. I will contact you with payment options.</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    
    props: ['domainStats'],
    
    data() {
        return {
            domain_name: "",
            appraisal_type: "fast",
            email: "",

            submitSuccess: false,
            submitError: false,
            submitText: 'Saved!',
            suggest: false,
        }
    },
    methods: {
        async submitForm() {
            await this.$axios.$post('/open/send/appraisal', {
                'name': this.domain_name,
                'email_buyer': this.email,
                'appraisal_type': this.appraisal_type,
            })
            .then((response) => {
                // console.log(response)
                this.domain_name = ""
                this.email = ""
                this.appraisal_type = ""

                this.submitSuccess = true;
                this.submitText = 'Saved!';
                setTimeout(() => this.submitSuccess = false, 4000)

                this.$router.push('/domain/appraisal/add/success');
            }, (error) => {
                // console.log(error.response.data.message)
                this.submitError = true;
                this.submitText = error.response.data.message;
                setTimeout(() => {
                    this.submitError = false, 
                    this.submitText = ''
                }, 4000)
            });
        }
    },
}
</script>

<style scoped>
.box {
    /* background-color: #fbf7ed; */
    padding: 40px;
    border-radius: 4px;
    border: 1px solid rgb(227, 242, 225);
    width: 100%;
    /* max-width: 400px; */
}
.testimonial {
    /* background-color: #fbf7ed; */
    padding: 30px;
    border-radius: 4px;
    /* border: 1px solid rgb(227, 242, 225); */
    background-color: #fbf7ed;
    width: 100%;
    /* max-width: 400px; */
}
img {
    /* border-radius: 100px; */
    /* border: 6px solid #fff; */
    width: 320px;
    max-width: 100%;
    /* box-shadow: 0 1px 6px 0 rgba(14,30,37,.12); */
}
</style>
