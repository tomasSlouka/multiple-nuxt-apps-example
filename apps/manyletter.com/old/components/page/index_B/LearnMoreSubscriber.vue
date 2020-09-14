<template>
    <div class="component">

        <div class="container-standard mt60">
            <!-- <div class='grid text-center mb60 show-lg'>
                <h2 class='big mb60'>What the hack?</h2>
            </div> -->

            <div class='grid md-col-2 gap-80 align-items-start'>
                
                <div class="grid gap-20 justify-items-start">
                    <div class='grid gap-5'>
                        <!-- <h2>Hundreds of newsletters in one message</h2> -->
                        <!-- <h1>Sign up for<br> newsletters <br>without fear</h1> -->
                        <!-- <h1>Take control of your newsletter subscriptions</h1> -->
                        <!-- <h1 class=''>The ultimate list of newsletters</h1> -->
                        <h1 class=''>The ultimate list of newsletters</h1>
                        <h3>Find your next newsletter. Subscribe with ManyLetter.</h3>
                        <!-- <h1>Let's hack newsletter subscriptions.</h1> -->
                        <!-- <h3>Get one email a day instead of 100.</h3> -->
                        <!-- <h2>Subscribe to several newsletters at once, receive one email</h2> -->
                        <!-- <h2>Get one email a day with all the news</h2> -->
                        <!-- <h2>Get one email, subscribe to many newsletter</h2> -->
                        <!-- <h2>Subscribe to niche newsletters with no fear</h2> -->
                        <!-- <h2>Get the most out of niche newletters</h2> -->
                        <!-- <h2>Subscribe to many newsletters, receive one email</h2> -->
                        <!-- <h2>Are you choking by newsletter emails?</h2> -->
                        <!-- <h2>Reduce the number of messages by 99%</h2> -->
                        <!-- <h2>Subscribe to many niche newsletters.</h2> -->
                        <!-- <h2>100 newsletters in one email message</h2> -->
                    </div>
                    <p class='font20 thin maxw400'>Browse newsletters from creators around the world, subscribe, and get daily bite-sized summary of newsletter messages to your inbox.
                    <!-- ManyLetter enables you to find and join many newsletters from creators around the world while gives you control over your subscriptions and reduce the number of emails you receive every day to one. -->
                    <!-- Get a daily bite-sized summary of articles from your favorite content creators. -->
                    <!-- Take controll over your newsletters. Find and join many newsletters from creators around the world. Get one email a day with all the news and never miss an important message again. -->
                    
                    </p>
                    <ul class='grid gap-10 ml20 maxw400'>
                        <li class='thin font18'>Browse newsletters and messages</li>
                        <li class='thin font18'>Subscribe and get a daily summary of newsletters directly from creators</li>
                        <li class='thin font18'>Be more productive</li>
                        <!-- <li class='thin font18'>Choose the time when you want to receive your newsletter.</li> -->
                        <!-- <li class='thin font18'>Sort and categorise your subscriptions.</li> -->
                        <!-- <li class='thin font18'>Automatically unsubscribe from newsletters.</li> -->
                        <!-- <li class='thin font18'>Access the newsletter message history.</li> -->
                    </ul>
                    <!-- <p class='thin font18'>Browse, join and manage your subscriptions in one place automatically. Get new messages from your favourite ManyLetter creators once a day. Never miss important message again.</p> -->

                    <!-- <ul class='grid gap-10 ml20'> -->
                        <!-- <li class='thin font18'>Discover new valuable newsletters.</li> -->
                        <!-- <li class='thin font18'>Subscribe with no fear.</li> -->
                        <!-- <li class='thin font18'>Get all newsletter messages from your favourit ManyLetter creators in a <span class='strong'>single email</span>.</li> -->
                        <!-- <li class='thin font18'>Reduce the number of emails you are receiving from newsletters to a <span class='strong'>single email</span>.</li> -->
                        <!-- <li class='thin font18'>Never miss important message again.</li> -->
                        <!-- <li class='thin font18'>Receive newsletters from your favourite ManyLetter creators in a <span class='strong'>single email</span>.</li> -->
                        <!-- <li class='thin font18'>Take control over your subscriptions.</li> -->
                    <!-- </ul> -->
                    <!-- <p class='thin font18'>Reduce the number of messages you are receiving from small newsletters by 99%.</p>
                    <p class='thin font18'>Subscribe to small newsletters without fear.</p>
                    <p class='thin font18'>Take control over your subscriptions.</p> -->
                    <div class='mt40 grid gap-10 justify-items-start'>
                        <button class='button cta big' v-scroll-to="'#newsletter-browser'">Start discovering</button>
                        <!-- <nuxt-link to='/sign-up' tag='button' class='button cta big'>Start discovering</nuxt-link> -->
                        <!-- <span class='strong'>{{usersCount.user_count}} users</span> -->
                        <p class='thin font16'>Can you find the hidden pearl? <br>Join and subscribe to more than <span class='strong'>{{newslettersCount.newsletter_count}} newsletters</span>.</p>
                        <!-- <nuxt-link to='/subscriber' class='button cta white'>Discover more</nuxt-link> -->
                    </div>
                </div>
                <div class='grid'>
                    <img class='justify-self-center' src="@/assets/img/newsletter-intro-3.png" alt="Creator dashboard screenshot" />
                </div>
            </div>
            
        </div>

    </div>
</template>

<script>
export default {

    props: ['usersCount', 'newslettersCount'],

}
</script>

<style scoped>
.container-standard {
    max-width: 1200px;
}
img {
    box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.15);
    max-width: 100%;
    position: relative;
    top: -40px;
}
</style>
