<template>
    <div id='pricing' class="component">

        <div class="container-narrow">

            <div class='grid gap-30'>
                <h3>Appraisal pricing plans.</h3>
                <div class='grid md-col-3 auto gap-30'>
                    <div class='testimonial grid gap-20 justify-self-start align-content-start'>
                        <h4><span class='font20'>🔥</span> Fast appraisal</h4>
                        <h3>$4.99 <span class='font12'>/ domain</span></h3>
                        <p class='small'>
                            Fast individual appraisal for single domain or domains portfolio sent to you by email within <span class='strong'>2 business days</span>.
                        </p>
                    </div>

                    <div class='testimonial best grid gap-20 justify-self-start align-content-start'>
                        <div class='popular'>Most popular</div>
                        <h4><span class='font20'>🤝</span> Standard appraisal</h4>
                        <h3>$12.99 <span class='font12'>/ domain</span></h3>
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
    border: 1px solid rgb(231 136 48 / 59%);
    position: relative;
}
img {
    /* border-radius: 100px; */
    /* border: 6px solid #fff; */
    width: 320px;
    max-width: 100%;
    /* box-shadow: 0 1px 6px 0 rgba(14,30,37,.12); */
}
.best > div.popular {
    position: absolute;
    top: -31px;
    background-color: rgb(231 136 48 / 59%);
    border-radius: 4px 4px 0px 0px;
    padding: 2px 10px;
    font-size: 14px;
}
</style>
