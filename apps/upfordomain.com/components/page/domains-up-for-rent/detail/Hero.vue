<template>
    <div class="component">

        <div class="container-narrow mt80">
            <div class='grid md-col-2 gap-80'>
                <div class='grid gap-20 align-content-start align-items-start'>
                    <h1 class='maxw500'>{{domainDetail.name}}</h1>

                    <div class='grid col-2'>
                        <div>
                            <p>Renting price</p>
                            <h2>${{domainDetail.price_renting}} / month</h2>
                        </div>
                        <div>
                            <p>Buyout price</p>
                            <h2>${{domainDetail.price_buyout}}</h2>
                        </div>
                    </div>
                    
                    <div class='mt40 grid gap-20'>
                        <div class='grid gap-5'>
                            <h4>Domain story</h4>
                            <p>🔨 Under construction</p>
                        </div>
                        <div class='grid gap-5'>
                            <h4>Perfect for</h4>
                            <p>🔨 Under construction</p>
                        </div>
                    </div>
                </div>

                <div class='box grid gap-20 align-content-start align-self-end justify-self-center'>
                    <h3 class=''>Get in touch</h3>
                    <form @submit.prevent @submit='submitForm()'>
                        <div class="grid gap-20">
                            <div>
                                <label for="email">Your email</label>
                                <input v-model='email' name='email' type="text" placeholder="eg. yourname@email.com" autocomplete="on">
                            </div>
                            <div>
                                <label for="message">Your message</label>
                                <textarea v-model='message' name='message' type="text" placeholder="Type your message here" autocomplete="off"></textarea>
                            </div>
                            <p class='info p0' v-show='submitSuccess'> {{ submitText }} </p>
                            <p class='error p0' v-show='submitError'> {{ submitText }} </p>
                            <button type='submit' class='cta justify-self-start align-self-start'>Send</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>

        <div class="container-narrow mt80">
            <div class='grid gap-20'>
                <h2>More domain names from the seller</h2>
                <div class='grid md-col-3 gap-20 align-items-start justify-content-start'>
                    <nuxt-link tag='div' v-for='item in domainListMore.data' :key='item.id' :to='"/domains-up-for-rent/detail/" + item.name' class="box-domain grid gap-10"> 
                        <h4> {{item.name}}</h4>
                        <div class='grid col-2'>
                            <div>
                                <label for="">Renting price</label>
                                <p>${{item.price_renting}}/month</p>
                            </div>
                            <div>
                                <label for="">Buyout price</label>
                                <p>${{item.price_buyout}}</p>
                            </div>
                        </div>
                    </nuxt-link>
                </div>

            </div>
        </div>

    </div>
</template>

<script>

export default {
    
    props: ['domainDetail', 'domainListMore'],
    
    data() {
        return {
            domain_name: "",
            price_renting: "",
            price_buyout: "",
            email: "",

            submitSuccess: false,
            submitError: false,
            submitText: 'Saved!',
            suggest: false,
        }
    },
    methods: {
        async submitForm() {
            await this.$axios.$post('/api/upfordomain/domain', {
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

                this.$router.push('/add/domain-up-for-rent/success');
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
    max-width: 400px;
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

.box-domain {
    border: 1px solid rgb(227, 242, 225);
    padding: 15px 20px;
    border-radius: 4px;
    cursor: pointer;
    /* background-color: rgba(57,172,55,.05098); */
}
.box-domain:hover {
    background-color: rgba(57,172,55,.05098);
    /* background-color: rgba(57,172,55,.05098); */
}
</style>
