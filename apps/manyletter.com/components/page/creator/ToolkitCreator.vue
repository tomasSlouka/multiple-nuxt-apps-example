<template>
    <div class="component">

        <div class="container-standard">

            <div class='grid gap-60 justify-items-center'>
                <div class='grid justify-items-center'>
                    <h2 class='big text-center'>What is in?</h2>
                    <!-- <h3 class='text-center maxw600'>ManyLetter encourage you and your subscribers to take a personal.</h3> -->
                    <!-- <nuxt-link to="/sign-up" class='button cta'>Add your newsletter</nuxt-link> -->
                </div>
                <div class='grid md-col-2 lg-col-3 gap-60'>

                    <div class='box grid gap-20 align-content-start'>
                        <h3>Unlimited newsletters</h3>
                        <p class='thin font18'>Create as many newsletters under one account as you need.</p>
                    </div>

                    <div class='box grid gap-20 align-content-start'>
                        <h3>Unlimited messages</h3>
                        <p class='thin font18'>Add unlimited number of messages under your newsletter.</p>
                    </div>

                    <!-- <div class='box grid gap-20 align-content-start'>
                        <h3>Newsletter website</h3>
                        <p class='thin font18'>If you don't have your newsletter page, you can create one in ManyLetter.</p>
                    </div> -->

                    <div class='box grid gap-20 align-content-start'>
                        <h3>Newsletter history</h3>
                        <p class='thin font18'>Subscribers whos open your newsletter profile will have access to messages you have created.</p>
                    </div>

                    <div class='box grid gap-20 align-content-start'>
                        <h3>No fake emails</h3>
                        <p class='thin font18'>All subscribers are verified; thus, your subscriber list will be clean and relevant.</p>
                    </div>

                    <div class='box grid gap-20 align-content-start'>
                        <h3>Target audience</h3>
                        <p class='thin font18'>Create a target audience and send different messages to it. </p>
                    </div>

                    <!-- <div class='box grid gap-20 align-content-start'>
                        <h3>Feedback system</h3>
                        <p class='thin font18'>Gather a feedback from your subscribers with build-in feedback system.</p>
                    </div> -->

                    <div class='box grid gap-20 align-content-start'>
                        <h3>Stats</h3>
                        <p class='thin font18'>See how many subscribers do you have, how many of them are active, passive or unsubscribed.</p>
                    </div>

                    <div class='box grid gap-20 align-content-start'>
                        <h3>GDPR compliant</h3>
                        <p class='thin font18'>Focus on your content. Don't worry about GDPR at all. We take care of it.</p>
                    </div>

                    <!-- <div class='box grid gap-20 align-content-start'>
                        <h3>Personalized messages</h3>
                        <p class='thin font18'>Send personalized messages to your subscribers.</p>
                    </div> -->

                    <div class='box grid gap-20 align-content-start'>
                        <h3>Rating system</h3>
                        <p class='thin font18'>Let your subscribers rate your newsletter and messages.</p>
                    </div>

                    <div class='box grid gap-20 align-content-start'>
                        <h3>Comments</h3>
                        <p class='thin font18'>Engage with your subscribers in comments for each message.</p>
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
.box {
    /* padding: 40px; */
}
.box-1 {
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
}
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
