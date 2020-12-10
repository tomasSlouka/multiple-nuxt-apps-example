<template>
    <div class="component">
        <div class="container-narrow mt80">
            <div class='grid gap-20'>
                <h2>More domain names from the seller.</h2>
                <div class='grid md-col-3 gap-20 align-items-start justify-content-start'>
                    <nuxt-link tag='div' v-for='item in domainListMore.data' :key='item.id' :to='"/domain/detail/" + item.name' class="box-domain grid gap-10"> 
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
    
    props: ['domainListMore'],
    
    data() {
        return {
            // domain_name: "",
            // price_renting: "",
            // price_buyout: "",
            // email: "",

            // submitSuccess: false,
            // submitError: false,
            // submitText: 'Saved!',
            // suggest: false,
        }
    },
    methods: {
        // async submitForm() {
        //     await this.$axios.$post('/open/message', {
        //         'name': this.domain_name,
        //         'price_renting': this.price_renting,
        //         'price_buyout': this.price_buyout,
        //         'email': this.email,
        //     })
        //     .then((response) => {
        //         // console.log(response)
        //         this.domain_name = ""
        //         this.price_renting = ""
        //         this.price_buyout = ""
        //         this.email = ""

        //         this.submitSuccess = true;
        //         this.submitText = 'Saved!';
        //         setTimeout(() => this.submitSuccess = false, 4000)

        //         this.$router.push('/add/domain-up-for-rent/success');
        //     }, (error) => {
        //         // console.log(error.response.data.message)
        //         this.submitError = true;
        //         this.submitText = error.response.data.message;
        //         setTimeout(() => {
        //             this.submitError = false, 
        //             this.submitText = ''
        //         }, 4000)
        //     });
        // },
        // calculateBuyout() {
        //     this.price_buyout = this.price_renting*12*5*3
        //     this.suggest = true
        // }
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
