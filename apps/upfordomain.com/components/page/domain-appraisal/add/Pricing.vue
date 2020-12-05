<template>
    <div id='pricing' class="component">

        <div class="container-narrow">

            <div class='grid gap-30'>
                <h3>Appraisal pricing plans</h3>
                <div class='grid md-col-3 auto gap-30'>
                    <div class='testimonial grid gap-20 justify-self-start align-content-start'>
                        <h4><span class='font20'>🔥</span> Fast appraisal</h4>
                        <h3>$4.99 <span class='font12'>/ domain</span></h3>
                        <p class='small'>
                            Fast individual appraisal for single domain or domains portfolio sent to you by email within <span class='strong'>2 business days</span>.
                        </p>
                    </div>

                    <div class='testimonial best grid gap-20 justify-self-start align-content-start'>
                        <h4><span class='font20'>🤝</span> Standard appraisal</h4>
                        <h3>$14.99 <span class='font12'>/ domain</span></h3>
                        <div class='grid gap-5'>
                            <p class="small">
                                Domain appraisal sent to you by email within <span class='strong'>2 business days</span> includes:
                            </p>
                            <p class='small'>
                                <ul class='ml20 grid gap-5'>
                                    <li><span class='strong'>certificate</span> of domain appraisal for further negotiation about the price with potential buyers.</li>
                                </ul> 
                            </p>
                        </div>
                    </div>

                    <div class='testimonial grid gap-20 justify-self-start'>
                        <h4><span class='font20'>🎯</span> Expert appraisal</h4>
                        <h3>$69.99 <span class='font12'>/ domain</span></h3>
                        <div class='grid gap-5'>
                            <p class="small">
                                Domain appraisal sent to you by email within <span class='strong'>5 business days</span> includes:
                            </p>
                            <p class='small'>
                                <ul class='ml20 grid gap-5'>
                                    <li>all from the Standard plan</li>
                                    <li>domain analysis based on 5 factors such as search engine suitability, advertising, selling/buying prospects.</li>
                                </ul> 
                            </p>
                        </div>
                    </div>
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
            await this.$axios.$post('/open', {
                'name': this.domain_name,
                'price_renting': this.price_renting,
                'price_buyout': this.price_buyout,
                'email': this.email,
            })
            .then((response) => {
                // console.log(response)
                this.domain_name = ""
                this.price_renting = ""
                this.price_buyout = ""
                this.email = ""

                this.submitSuccess = true;
                this.submitText = 'Saved!';
                setTimeout(() => this.submitSuccess = false, 4000)

                this.$router.push('/domains-up-for-rent/add/success');
            }, (error) => {
                // console.log(error.response.data.message)
                this.submitError = true;
                this.submitText = error.response.data.message;
                setTimeout(() => {
                    this.submitError = false, 
                    this.submitText = ''
                }, 4000)
            });
        },
        calculateBuyout() {
            this.price_buyout = this.price_renting*12*5*3
            this.suggest = true
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
.testimonial.best {
    border: 1px solid rgb(231 136 48 / 59%)
}
img {
    /* border-radius: 100px; */
    /* border: 6px solid #fff; */
    width: 320px;
    max-width: 100%;
    /* box-shadow: 0 1px 6px 0 rgba(14,30,37,.12); */
}
</style>
