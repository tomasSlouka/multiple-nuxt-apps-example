<template>
    <div id='pricing' class="component">

        <div class="container-narrow">

            <div class='grid gap-30'>
                <h3>Who is appraising your domains?</h3>
                
                <div class='mt20 expert grid gap-20 justify-content-start align-items-center maxw550'>
                    
                    <div class='text grid gap-10 align-content-start'>
                        <!-- <p>Hi there. </p> -->
                        <!-- <p>My name is Tomas, and domain names are my passion.</p> -->
                        <p class='small'>For more than 2 years, I'm helping my customers with domain trading and investing. Domain name appraisal is just the first step in domain trading, but very important because if the first price is too high, no one will send you an offer. On the other side, if the price is too low, you lose money.</p> 
                    </div>

                    <div class='avatar grid col-2 auto gap-10 justify-self-start'>
                        <img src="@/assets/img/upfordomain/avatar_2.png" alt="avatar" />
                        <div>
                            <p class='strong'>Tomas Slouka</p>
                            <p class="small">CEO Upfordomain</p>
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

.expert {
    background-color: #ebf5e8;
    padding: 30px;
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
