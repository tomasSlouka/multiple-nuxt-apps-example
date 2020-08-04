<template>
    <div class='component'>
        
        <div class='container-standard mt80 mb80'>
            <div class='grid gap-60 md-col-2 align-items-center'>
                <div class='grid gap-20'>
                    <div>
                        <!-- <h1 class='mb10'>Newsletters hacked</h1> -->
                        <!-- <h1 class='mb10'>Small newsletters hacked</h1> -->
                        <!-- <h1 class='mb10'>Hacking niche newsletters</h1> -->
                        <!-- <h1 class='mb10'>Bring order to your newsletters</h1> -->
                        <!-- <h1 class='mb10'>Bringing order to niche newsletters</h1> -->
                        <!-- <h1 class='mb10'>Niche newsletters</h1> -->
                        <!-- <h1 class='mb10'>Low friction newsletter</h1> -->
                        <!-- <h1 class='mb10'>Niche news-<br>letters hacked</h1> -->
                        <!-- <h1 class='mb10'>Niche newsletters</h1> -->
                        <!-- <h1 class='mb10'>Newsletters distribution and growth hacked</h1> -->
                        <!-- <h1>Subscribe to newsletters with no fear</h1> -->
                        <h1>Sign up for newsletters without fear</h1>
                        <h2>Get subscriptions <br>under your control</h2>
                        <!-- <h2>for subscribers and creators.</h2> -->
                        
                        <!-- <h1>Get email newsletters under control</h1> -->
                        <!-- <h2>Find and join any newsletter, as well as create one, and share it.</h2> -->
                        <!-- <h2>Subscribe to many newsletters.</h2>
                        <h1>Get only one email per day!</h1> -->

                        <!-- <h2>Zero inbox is reality with ManyLetter</h2> -->

                        <!-- <h2>All news in one email per day</h2> -->
                        <!-- <h1>Manage your newsletter with ease</!-->

                        <!-- <h2>Do you want a personalized newsletter that saves you time?</h2> -->
                        <!-- <h2>Do you want a email newsletter under your control?</h2> -->
                        <!-- <h2>Changing the way how newsletters are done</h2> -->
                        <!-- <h2>Changing the way how newsletters are done</h2>
                        <h1>Level up your newsletter</h1> -->
                        <!-- <h2>Newsletter manager</h2> -->
                        <!-- <h2>Are you looking for a solution that help you to reduce the amount of emails in your inbox?</h2> -->
                        <!-- <h2>Reduce the amount of email newsletters you receive every day</h2> -->
                        <!-- <h2>Do you have inbox full of unread newsletter messages?</h2> -->
                        <!-- <h2>Manage newsletter subscriptions with ease</h2> -->
                        <!-- <h1>Receive one email a day with ManyLetter</!-->
                        <!-- <h2>Super easy personal newsletter manager</h2> -->
                        <!-- <h1 class='mb0'>All newsletters in one <br> One newsletter for all</h1> -->
                        <!-- <h1 class='mb0'>The future of email newsletter</h1> -->
                    </div>
                    <div class='grid gap-20 box align-content-start'>
                        <div>
                            <!-- <p class='big'>Create, send, browse and manage email newsletters.</p> -->
                            <!-- <p class='big'>Join now. Get early access and be among the first who taste the evolution of newsletter.</p> -->
                            <!-- <p class='big'>ManyLetter makes it easy to find and join any newsletter, as well as to create one, and share it.</p> -->
                            <!-- <h3>Get notified when we launch</h3> -->
                            <p class='width font18 thin'><span class='strong'>Launching in June,</span> but you can enter your email address below to receive notification and become one of the first members.</p>
                        </div>
                        <div class='mt20 grid gap-10 justify-items-start'>
                            <!-- <input id='email' type="email" name='email' placeholder='Enter your email...'> -->
                            <nuxt-link to="/sign-up" class='button cta big'>Stay informed</nuxt-link>
                            <p class='thin font14'>Join <span class='strong'>{{usersCount.user_count}} users</span> waiting for launch.</p>
                        </div>
                        <div>
                            <p class='small gray thin mt20'>&#8595; scroll down to discover more &#8595;</p>
                        </div>
                    </div>
                </div>
                <div class=''>
                    <img src="@/assets/img/dashboard-screenshot.png" alt="Creator dashboard screenshot" />
                </div>
                <!-- <img src="@/assets/img/mails.svg" alt="Showcase - ymello" /> -->
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: ['usersCount'],
}
</script>

<style scoped>
.container-standard {
    margin-bottom: 160px;
    max-width: 1200px;
}
/* .relative {
    width: 100%;
    height: 100%;
} */
img {
    box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.15);
    /* position: absolute;
    top: -40px;
    width: 230%;
    max-width: 230%;
    width: 180%;
    max-width: 180%; */
}
.width {
    max-width: 320px;
}
/* h1 {
    font-size: 60px;
    line-height: 60px;
} */
</style>
