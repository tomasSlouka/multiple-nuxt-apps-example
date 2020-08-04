<template>
    <div class="component">

        <div class="container-standard mt80">
            <!-- <div class='grid text-center mb60 show-lg'>
                <h2 class='big mb60'>What the hack?</h2>
            </div> -->

            <div class='grid md-col-2 gap-100 align-items-center'>
                <div class='grid'>
                    <img class='justify-self-center' src="@/assets/img/newsletter-intro-3.png" alt="Creator dashboard screenshot" />
                </div>
                <div class="grid gap-20 justify-items-start">
                    <div class='grid gap-5'>
                        <!-- <h2>Hundreds of newsletters in one message</h2> -->
                        <h3>Subscriber ↓</h3>
                        <!-- <h2>Subscribe to several newsletters at once, receive one email</h2> -->
                        <h2>Get one email a day with all the news</h2>
                        <!-- <h2>Get one email, subscribe to many newsletter</h2> -->
                        <!-- <h2>Subscribe to niche newsletters with no fear</h2> -->
                        <!-- <h2>Get the most out of niche newletters</h2> -->
                        <!-- <h2>Subscribe to many newsletters, receive one email</h2> -->
                        <!-- <h2>Are you choking by newsletter emails?</h2> -->
                        <!-- <h2>Reduce the number of messages by 99%</h2> -->
                        <!-- <h2>Subscribe to many niche newsletters.</h2> -->
                        <!-- <h2>100 newsletters in one email message</h2> -->
                    </div>
                    <p class='thin font18'>Browse, join and manage your subscriptions in one place automatically. Get new messages from your favourite ManyLetter creators once a day. Never miss important message again.</p>

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
                    <nuxt-link to='/subscriber' class='button cta mt40'>Discover more</nuxt-link>
                </div>

            </div>
            
        </div>

        <div class="container-standard mt100">

            <div class='grid md-col-2 gap-100 align-items-center'>
                <div class="grid gap-20 justify-items-start">
                    <div class='grid gap-5'>
                        <h3>Creator ↓</h3>
                        <!-- <h2>Add your newsletter, grow your audience.</h2> -->
                        <!-- <h2>Get your newsletter in front of more people</h2> -->
                        <!-- <h2>Enable the growth of your newsletter</h2> -->
                        <!-- <h2>Publish newsletter, distribute content, grow audience</h2> -->
                        <h2>Publish, distribute and grow your newsletter</h2>
                    </div>
                    <p class='thin font18'>ManyLetter enables you to expose your newsletter to more people and send your messages in a fun, effective, and rewarding way.</p>
                    <!-- People don't like to subscribe to small newsletters even if they are full of valuable content.  -->
                    <!-- <ul class='grid gap-10 ml20'>
                        <li class='thin font18 pl10'>Make your newsletter searchable.</li>
                        <li class='thin font18 pl10'>Gain new subscribers.</li>
                        <li class='thin font18 pl10'>Send your newsletter messages to your subscribers within ManyLetter.</li>
                        <li class='thin font18 pl10'>Stay independent.</li>
                    </ul> -->
                    <!-- <h4>How does it work?</h4>
                    <ol class='grid gap-10 ml20'>
                        <li class='thin font18 pl10'>Upload your content to your own website or blog.</li>
                        <li class='thin font18 pl10'>Grab the URL link of your content and prepare your message in ManyLetter.</li>
                        <li class='thin font18 pl10'>Send your newletter to your subscribers.</li>
                        <li class='thin font18 pl10'>Engage with your audience and watch it grow.</li>
                    </ol> -->
                    <nuxt-link to='/creator' class='button cta mt40'>Discover more</nuxt-link>
                </div>
                <div class='grid'>
                    <img class='justify-self-center' src="@/assets/img/newsletter-intro-4.png" alt="Creator dashboard screenshot" />
                </div>

            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        
    }
}
</script>

<style scoped>
img {
    box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.15);
}

img {
    box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.15);
    max-width: 100%;
}
h3 {
    margin-bottom: 20px;
}
</style>
