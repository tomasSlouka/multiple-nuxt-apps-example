<template>
    <div class="component">

        <div class="container-narrow mt80">
            <div class='grid md-col-2 gap-80'>
                <div class='grid gap-20 align-content-start align-items-start'>
                    <h1 class='maxw500'>Rent your domain like you would rent your house.</h1>
                    <!-- <h1 class='maxw500'>Why sell your domain when you can rent it?</h1> -->
                    <p class='maxw500'>Do you own a domain that costs you money and is doing nothing? List your domain up for rent and lease it to someone else for a recurring monthly payment directly to you.</p>
                    
                    <div class='grid col-1 gap-30'>
                        <div class='testimonial grid gap-20 justify-self-start mt40'>
                            <p class='small'><span class='font20'>🔥</span> Upfordomain service has not launched yet, but there are already <span class='strong underline'>{{domainStats.count}} domains up for rent</span>.</p>
                            <!-- <div class='grid gap-10 auto col-2 justify-content-start align-items-center'>
                                <img src="@/assets/img/manyletter_founder.png" alt="manyletter founder" />
                                <div>
                                    <p class='strong smaller'>Tomas S.</p>
                                    <p class='smaller thin'>Founder of ManyLetter</p>
                                </div>
                            </div> -->
                        </div>

                        <!-- <div class='testimonial grid gap-20 justify-self-start mt40'>
                            <p class='small'>I have owned my domain for a few years but have never used it. Now I'm leasing it and getting paid every month.</p>
                            <div class='grid gap-10 auto col-2 justify-content-start align-items-center'>
                                <img src="@/assets/img/manyletter_founder.png" alt="manyletter founder" />
                                <div>
                                    <p class='strong smaller'>Tomas S.</p>
                                    <p class='smaller thin'>Founder of ManyLetter</p>
                                </div>
                            </div>
                        </div> -->
                    </div>
                    <!-- <div class='testimonial'>
                        <p>I have owned my domain for a few years but have never used it. Now I'm leasing it and getting paid every month.</p>
                    </div> -->
                    <!-- <div class='testimonial'>
                        <p>I'm leasing my domain for $100/month.</p>
                    </div> -->
                    <!-- <button class='cta justify-self-start'>Start making money</button> -->
                </div>

                <div class='box grid gap-20 align-content-start align-self-end justify-self-center'>
                    <h3 class=''>List your domain up for rent</h3>
                    <form @submit.prevent @submit='submitForm()'>
                        <div class="grid gap-20">
                            <div>
                                <label for="domain_name">Domain name</label>
                                <input v-model='domain_name' name='domain_name' type="text" placeholder="eg. example.com" autocomplete="off">
                            </div>
                            <div>
                                <label for="price_renting">Renting price ($/month)</label>
                                <input @keyup='calculateBuyout()' v-model='price_renting' name='price_renting' type="text" placeholder="eg. 300" autocomplete="off">
                            </div>
                            <div>
                                <label v-show='suggest' for="price_buyout">Suggested buyout price ($) </label>
                                <label v-show='!suggest' for="price_buyout">Buyout price ($) </label>
                                <input @keyup='suggest = false' v-model='price_buyout' name='price_buyout' type="text" placeholder="eg. 9000" autocomplete="off">
                            </div>
                            <div>
                                <label for="email">Your email</label>
                                <input v-model='email' name='email' type="text" placeholder="eg. yourname@email.com" autocomplete="on">
                            </div>
                            <p class='info p0' v-show='submitSuccess'> {{ submitText }} </p>
                            <p class='error p0' v-show='submitError'> {{ submitText }} </p>
                            <button type='submit' class='cta justify-self-start align-self-start'>List my domain</button>
                            <p class="small">No credit card required. It's free.</p>
                        </div>
                    </form>
                </div>

            </div>
        </div>

        <div class="container-narrow mt80">
            <div class='grid gap-20'>
                <h2>Who have mentioned upfordomain?</h2>
                <div class="grid md-col-3">
                    <!-- <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">👉 You have an interesting domain which you don&#39;t want to sell. <br><br>👉 You want a domain which is not available.<br><br>Tomas has covered you. You can now rent your idle domain or get a domain by just paying it&#39;s rent. <a href="https://t.co/tKQ5suO69t">https://t.co/tKQ5suO69t</a></p>&mdash; Utsav (@thisishustler) <a href="https://twitter.com/thisishustler/status/1283806800190386176?ref_src=twsrc%5Etfw">July 16, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> -->
                    <!-- <blockquote class="twitter-tweet" data-lang="en" data-theme="light"><p lang="en" dir="ltr">Check out <a href="https://twitter.com/upfordomainHQ?ref_src=twsrc%5Etfw">@upfordomainHQ</a> for your project where you can rent brandable domain names for your project! <br><br>For the renters, do list your idle domains on <a href="https://t.co/T6hWStIogo">https://t.co/T6hWStIogo</a> and earn by renting it or selling it to interested makers!<br><br>Thanks for building this <a href="https://twitter.com/TomasSlouka?ref_src=twsrc%5Etfw">@TomasSlouka</a> !</p>&mdash; Lakshmi Narayanan (@_glnarayanan) <a href="https://twitter.com/_glnarayanan/status/1283665271706673152?ref_src=twsrc%5Etfw">July 16, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>  -->
                    <img src="@/assets/img/upfordomain/twitter-1.png" alt="twitter-mention-1" />
                    <img src="@/assets/img/upfordomain/twitter-2.png" alt="twitter-mention-2" />
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
</style>
