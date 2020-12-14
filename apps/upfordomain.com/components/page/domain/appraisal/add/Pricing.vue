<template>
    <div id='pricing' class="component">

        <div class="container-narrow">

            <div class='grid gap-30'>
                <h3>Appraisal pricing plans.</h3>
                <p>Increase your chance to get an offer from a buyer with expert domain name appraisal.</p>
                <div class='mt20 grid md-col-3 gap-30'>

                    <div class='testimonial best grid gap-20 justify-self-start align-content-start md-order-2'>
                        <div class='popular'>Recomended</div>
                        <h4><span class='font20'>🤝</span> Standard appraisal</h4>
                        <h3>$15.99 <span class='font12'>/ domain</span></h3>
                        <div class='grid gap-5'>
                            <p class="small">
                                With standard appraisal you will get a more precise analysis of a domain name you want to sell or buy:
                            </p>
                            <p class='small'>
                                <ul class='ml20 grid gap-5'>
                                    <li><span class='strong'>simple analysis</span></li>
                                    <li><span class='strong'>badge and certificate</span> of domain appraisal for further negotiation about the price with potential buyers.</li>
                                </ul> 
                            </p>
                        </div>
                    </div>

                    <div class='testimonial best grid gap-20 justify-self-start align-content-start md-order-1'>
                        <div class='popular'>Most popular</div>
                        <h4><span class='font20'>🔥</span> Fast appraisal</h4>
                        <h3>$3.99 <span class='font12'>/ domain</span></h3>
                        <p class='small'>
                            If you are not sure about the right price of your domain name, a fast appraisal is ideal for you. 
                            <!-- <span class='strong'>1 business day</span>. -->
                        </p>
                        <p class='small'>
                            <ul class='ml20 grid gap-5'>
                                <li><span class='strong'>get a raw estimation</span></li>
                                <li><span class='strong'>badge</span> of domain appraisal for your domain profile on Upfordomain.</li>
                            </ul> 
                        </p>
                    </div>

                    <div class='expert grid gap-20 align-self-center justify-content-start align-items-center md-order-3'>
                    
                    <div class='text grid gap-10 align-content-start'>
                        <!-- <p>Hi there. </p> -->
                        <!-- <p>My name is Tomas, and domain names are my passion.</p> -->
                        <p class='small'>I'm helping my customers with domain trading and investing for more than 2 years. Domain name appraisal is just the first step in domain trading, but very important because if the first price is too high, no one will send you an offer. On the other side, if the price is too low, you lose money.</p> 
                    </div>

                    <div class='avatar grid col-2 auto gap-10 justify-self-start'>
                        <img src="@/assets/img/upfordomain/avatar_2.png" alt="avatar" />
                        <div>
                            <p class='strong'>Tomas Slouka</p>
                            <p class="small">CEO Upfordomain</p>
                        </div>
                    </div>
                </div>

                    <!-- <div class='testimonial grid gap-20 justify-self-start md-order-3'>
                        <h4><span class='font20'>🎯</span> Expert appraisal</h4>
                        <h3>$69.99 <span class='font12'>/ domain</span></h3>
                        <div class='grid gap-5'>
                            <p class="small">
                                Domain appraisal sent to you by email within <span class='strong'>5 business days</span> includes:
                            </p>
                            <p class='small'>
                                <ul class='ml20 grid gap-5'>
                                    <li>all from the Standard plan</li>
                                    <li><span class='strong'>expert analysis</span> based on 5 factors such as search engine suitability, advertising, selling/buying prospects.</li>
                                </ul> 
                            </p>
                        </div>
                    </div> -->
                </div>

            </div>   
        </div>

    </div>
</template>

<script>

export default {
    props: ['domainStats'],
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
    /* border: 1px solid rgb(231 136 48 / 59%); */
    position: relative;
}
img {
    /* border-radius: 100px; */
    /* border: 6px solid #fff; */
    width: 320px;
    max-width: 100%;
    /* box-shadow: 0 1px 6px 0 rgba(14,30,37,.12); */
}
.best {
   border: 1px solid rgb(231 136 48 / 0%);
}
.best > div.popular {
    position: absolute;
    top: -8px;
    left: 4px;
    background-color: rgb(231 136 48 / 59%);
    border-radius: 4px 4px 0px 0px;
    padding: 1px 8px;
    font-size: 12px;
    color: #79491c;
    z-index: -1;
    transition: all .3s;
}
.best:hover > div.popular {
    top: -29px;
}
.best:hover {
    border: 1px solid rgb(231 136 48 / 59%);
}

.expert {
    /* background-color: #ebf5e8; */
    padding: 20px;
    padding-bottom: 0px;
    padding-top: 0px;
    border-left: 1px solid rgba(59, 172, 55, 0.31);
}
.expert > div.text {
    /* padding: 30px; */
    /* border-right: 1px solid #ccc; */
}
.expert > div.avatar {
    /* padding: 30px; */
    /* border-right: 1px solid #ccc; */
}
.expert > div.avatar > img {
    max-width: 50px;
    border-radius: 100px;
}
</style>
