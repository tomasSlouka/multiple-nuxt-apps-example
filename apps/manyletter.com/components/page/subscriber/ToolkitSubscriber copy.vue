<template>
    <div class="component">

        <div class="container-standard">

            <div class='grid gap-30 justify-items-start'>

                <div class='grid xs-col-1 sm-col-2'>

                    <div class='box box-1 grid gap-20 align-content-start'>
                        <img src="@/assets/img/email.svg" alt="Whitelabel CMS - ymello" />
                        <h3>One mail a day</h3>
                        <p>ManyLetter will send you only one email a day with all the news from newsletters that you are subscribed to.</p>
                    </div>

                    <div class='box box-2 grid gap-20 align-content-start'>
                        <img src="@/assets/img/time.svg" alt="Whitelabel CMS - ymello" />
                        <h3>Choose your time</h3>
                        <p>Choose the time when you will receive the email. Make your inbox distraction-free.</p>
                    </div>

                    <div class='box box-3 grid gap-20 align-content-start'>
                        <img src="@/assets/img/sort.svg" alt="Whitelabel CMS - ymello" />
                        <h3>Sort and categorize</h3>
                        <p>Categorize newsletters so you will have an overview of all bulletins that you are interested in. Sort newsletters based on how much you love them.</p>
                    </div>

                    <div class='box box-4 grid gap-20 align-content-start'>
                        <img src="@/assets/img/unsubscribe.svg" alt="Whitelabel CMS - ymello" />
                        <h3>Automatic unsubscription</h3>
                        <p>ManyLetter will automatically unsubscribe you from the newsletter if you don't open it regullary. Give you the power to control all of your subscriptions.</p>
                    </div>

                    <div class='box box-5 grid gap-20 align-content-start'>
                        <img src="@/assets/img/unsubscribe.svg" alt="Whitelabel CMS - ymello" />
                        <h3>Have control over your data</h3>
                        <p>When you are subscribing to a newsletter with ManyLetter account, you decide, whether your data will be provided to the newsletter creator or not.</p>
                    </div>

                    <div class='box box-6 grid gap-20 align-content-start'>
                    </div>

                </div>

                <!-- <nuxt-link to="/about" class='button cta justify-self-center'>Learn more</nuxt-link> -->

            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.box {
    padding: 40px;
}
.box-1 {
    padding: 40px;
}
.box-2 {
    border-left: 1px solid #eee;
}
.box-3 {
    border-top: 1px solid #eee;
}
.box-4 {
    border-top: 1px solid #eee;
    border-left: 1px solid #eee;
}
.box-5 {
    border-top: 1px solid #eee;
}
.box-6 {
    border-top: 1px solid #eee;
    border-left: 1px solid #eee;
}
img {
    /* box-shadow: 0px 5px 10px rgba(238, 238, 238, 0.6); */
    width: 50px;
}

@media only screen and (max-width: 576px) {
    .box {
        border: 0px;
    }
}
</style>
