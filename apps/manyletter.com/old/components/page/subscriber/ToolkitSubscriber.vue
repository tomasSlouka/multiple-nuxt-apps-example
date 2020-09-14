<template>
    <div class="component">

        <div class="container-standard">

            <div class='grid gap-60 justify-items-center'>
                <div class='grid justify-items-center'>
                    <h2 class='big text-center'>Increase your productivity</h2>
                    <!-- <h3 class='text-center maxw600'>ManyLetter encourage you and your subscribers to take a personal.</h3> -->
                    <!-- <nuxt-link to="/sign-up" class='button cta'>Add your newsletter</nuxt-link> -->
                </div>
                <div class='grid md-col-2 lg-col-2 gap-60'>

                    <div class='box grid gap-20 align-content-start'>
                        <h3>One email a day</h3>
                        <p class='thin font18'>ManyLetter will send you only one email a day with all the news from newsletters that you are subscribed to.</p>
                    </div>

                    <div class='box grid gap-20 align-content-start'>
                        <h3>Choose your time</h3>
                        <p class='thin font18'>Choose the time when you will receive the email. Make your inbox distraction-free.</p>
                    </div>

                    <div class='box grid gap-20 align-content-start'>
                        <h3>Sort and categorize</h3>
                        <p class='thin font18'>Categorize newsletters so you will have an overview of all bulletins that you are interested in. Sort newsletters based on how much you love them.</p>
                    </div>

                    <div class='box grid gap-20 align-content-start'>
                        <h3>Automatic unsubscription</h3>
                        <p class='thin font18'>ManyLetter will automatically unsubscribe you from the newsletter if you don't open it regullary. Give you the power to control all of your subscriptions.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* .box {
    padding: 40px;
} */
/* .box-1 {
    padding: 40px;
}
.box-2 {
    padding: 40px;
    border-left: 1px solid #eee;
}
.box-3 {
    padding: 40px;
    border-top: 1px solid #eee;
}
.box-4 {
    border-top: 1px solid #eee;
    border-left: 1px solid #eee;
} */
img {
    /* box-shadow: 0px 5px 10px rgba(238, 238, 238, 0.6); */
    width: 60px;
}

.box h3 {
    font-size: 25px;
    font-weight: 700;
    line-height: 25px;
}
@media only screen and (max-width: 576px) {
    h2 {
        text-align: left;
    }
}

</style>
