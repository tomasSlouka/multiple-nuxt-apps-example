<template>
    <div class="component">
        
        <div class='container-narrow grid gap-20'>

            <p class='justify-self-end'>
                See prices for 
                <a @click='changeTime("month")'>Monthly</a>  / 
                <a @click='changeTime("year")'>Annual</a> (20% Off)
                billing.
            </p>

            <div class="hr mb40"></div>

                <div class='grid gap-40 md-gap-60 md-col-3 align-items-start justify-items-center'>
                    <div class="box grid gap-20 popular xs-order-1 align-content-start">
                        <div class='label'>LAUNCH TIME</div>
                        <div>
                            <h3>Starter Plan</h3>
                            <p class='small gray'>for creators and subscribers</p>
                        </div>
                        <div class="price flex no-wrap align-items-top justify-self-center">
                            <span v-if='currency=="euro"' class='upper'>€</span>
                            <span v-if='time=="month"'>0</span>
                            <span v-if='time=="month"' class='upper'>00</span>

                            <span v-if='time=="year"'>0</span>
                            <span v-if='time=="year"' class='upper'>00</span>
                        </div>
                        <ul>
                            <li class='mb10'>All features</li>
                            <li><b>1 000</b> subscribers</li>
                            <li><b>4 000</b> messages / mo</li>
                        </ul>
                        <nuxt-link to='/sign-up' class='cta button text-center mt40'>Start for FREE</nuxt-link>
                    </div>

                    <div class="box gray grid gap-20 working xs-order-2 align-content-start">
                        <div>
                            <h3>Small Plan</h3>
                            <p class='small gray'>only for creators</p>
                        </div>
                        <div class="price flex no-wrap align-items-top justify-self-center">
                            <span v-if='currency=="euro"' class='upper'>€</span>
                            <span v-if='time=="month"'>21</span>
                            <span v-if='time=="month"' class='upper'>00</span>

                            <span v-if='time=="year"'>200</span>
                            <span v-if='time=="year"' class='upper'>00</span>
                        </div>
                        <ul>
                            <li class='mb10'>All features</li>
                            <li><b>7 500</b> subscribers</li>
                            <li><b>30 000</b> messages / mo</li>
                        </ul>
                        <nuxt-link to='/pricing' class='cta white button text-center mt40'>Locked</nuxt-link>
                    </div>

                    <div class="box gray grid gap-20 working xs-order-3 align-content-start">
                        <div>
                            <h3>Big Plan</h3>
                            <p class='small gray'>only for creators</p>
                        </div>
                        <div class="price flex no-wrap align-items-top justify-self-center">
                            <span v-if='currency=="euro"' class='upper'>€</span>
                            <span v-if='time=="month"'>46</span>
                            <span v-if='time=="month"' class='upper'>00</span>

                            <span v-if='time=="year"'>441</span>
                            <span v-if='time=="year"' class='upper'>00</span>
                        </div>
                        <ul>
                            <li class='mb10'>All features</li>
                            <li><b>18 000</b> subscribers</li>
                            <li><b>72 000</b> messages / mo</li>
                        </ul>
                        <nuxt-link to='/pricing' class='cta white button text-center mt40'>Locked</nuxt-link>
                    </div>
                    
                </div>

            <div class="hr mt40"></div>
            <p>ManyLetter is not fully ready yet, but I would like to know the feedback from you before I release a fully functional application. If you are interested in ManyLetter and want to become a vital part of a ManyLetter community, I would be glad if you join me.</p>
            <p class='strong'>I will give you 20% off for the lifetime if you will join ManyLetter now. <br><br>Find out more information - <nuxt-link to='/referral-program'>Referral Program</nuxt-link>.</p>
            <div class='grid gap-20 auto col-2 justify-content-start align-items-center'>
                <img src="@/assets/img/manyletter_founder.png" alt="manyletter founder" />
                <div>
                    <p class='strong'>tomas<span class='small thin'>@manyletter.com</span></p>
                    <p class='small thin'>Founder of ManyLetter</p>
                </div>
            </div>
            
        </div>

    </div>
</template>

<script>
export default {
    data () {
        return { 
            currency: 'euro',
            time: 'month' 
        }
    },
    methods: {
        changeTime(time) {
            this.time = time
        }
    }
}
</script>

<style scoped>
@media only screen and (max-width: 768px) {
.box {
    max-width: 230px;
    min-width: 230px;
}
}
.box {
    padding: 40px 30px;
    /* box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.15); */
    box-shadow: 0 1px 6px 0 rgba(14,30,37,.12);
    border-radius: 8px;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    background-color: #fff;
    max-width: 230px;
    min-width: 230px;
}
.box:hover {
    -webkit-transform: scale(1.05, 1.05);
    transform: scale(1.05, 1.05);
}
.box.popular {
    -webkit-transform: scale(1.05, 1.05);
    transform: scale(1.05, 1.05);
    border: 1px solid #3bac3763;
}
.box.popular:hover {
    -webkit-transform: scale(1.1, 1.1);
    transform: scale(1.1, 1.1);
}
.price {
    font-size: 48px;
    font-weight: 600;
    line-height: 48px;
    text-align: center;
}

.price > span.upper {
    font-size: 24px;
    line-height: 24px;
    margin: 5px;
}

ul {
    list-style: none;
}

.popular {
    position: relative;
}
.label {
    position: absolute;
    top: -25px;
    background-color: #3bac37;
    color: #fff;
    width: 87%;
    text-align: center;
    border-radius: 32px 32px 0px 0px;
    font-size: 10px;
    justify-self: center;
    padding: 3px;
    padding-bottom: 1px;
    z-index: -1;
}
.gray {
    color: #ccc;
}
.box.gray {
    opacity: .8;
}
img {
    border-radius: 100px;
    border: 6px solid #fff;
    width: 60px;
    /* box-shadow: 0 1px 6px 0 rgba(14,30,37,.12); */
}
</style>
