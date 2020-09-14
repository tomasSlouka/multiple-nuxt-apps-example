<template>
    <div class='component'>
        <div class="container-standard">
            <div class="grid gap-100">
                <div class='grid justify-items-center'>
                    <h2 class='big text-center mb40'>See how it works</h2>
                    <p class='font18 text-center maxw600'>Unlike other platforms, ManyLetter does not own your content. Your content is your most valuable asset, and it should stay in your hands.</p>
                    <!-- <nuxt-link to="/sign-up" class='button cta'>Add your newsletter</nuxt-link> -->
                </div>

                <div class="grid md-col-2 gap-100">
                    <div class='grid gap-20 align-content-start'>
                        <!-- <h3 class='text-center'>Distribute your content</h3> -->
                        <img src="@/assets/img/messages.png" alt="Creator dashboard screenshot" />
                    </div>
                    <div class='grid gap-40'>
                        <div class='box grid auto col-2 gap-20'>
                            <h2>1.</h2>
                            <div class='grid gap-10 align-content-start'>
                                <h3>Prepare your website</h3>
                                <p class='thinn'>Upload your content to your website or other online publishing platform.</p>
                            </div>
                        </div>
                        <div class='box grid auto col-2 gap-20'>
                            <h2>2.</h2>
                            <div class='grid gap-10 align-content-start'>
                                <h3>Prepare your message</h3>
                                <p class='thinn'>Grab the URL link of your content and prepare a short message in ManyLetter. Give it a proper title and a brief description.</p>
                            </div>
                        </div>
                        <div class='box grid auto col-2 gap-20'>
                            <h2>3.</h2>
                            <div class='grid gap-10 align-content-start'>
                                <h3>Send your newsletter</h3>
                                <p class='thinn'>ManyLetter will automatically compose and send an email with your combat-ready message for your subscribers.</p>
                            </div>
                        </div>
                    </div>
                </div>

                    <!-- <h4 class='md-span-2'>Grow your newsletter</h4> -->
                <div class="grid md-col-2 gap-100">
                    <div class='grid gap-40'>
                        <div class='box grid auto col-2 gap-20'>
                            <h2>4.</h2>
                            <div class='grid gap-10 align-content-start'>
                                <h3>Expand your reach</h3>
                                <p class='thinn'>Your published newsletter and messages will show on the ManyLetter landing page and across the whole platform.</p>
                            </div>
                        </div>
                        <div class='box grid auto col-2 gap-20'>
                            <h2>5.</h2>
                            <div class='grid gap-10 align-content-start'>
                                <h3>Lower the barrier</h3>
                                <p class='thinn'>Subscribers often have many active subscriptions. Therefore they think twice before subscribing to another newsletter—lower the barrier for subscribers to join your newsletter with ManyLetter.</p>
                            </div>
                        </div>
                        <div class='box grid auto col-2 gap-20'>
                            <h2>6.</h2>
                            <div class='grid gap-10 align-content-start'>
                                <h3>Build a community</h3>
                                <p class='thinn'>Engage with your subscribers in comments. Build long-term relationships and community around your newsletter.</p>
                            </div>
                        </div>
                    </div>
                    <div class='grid gap-20 align-content-start'>
                        <!-- <h3 class='text-center'>Distribute your content</h3> -->
                        <img src="@/assets/img/messages.png" alt="Creator dashboard screenshot" />
                    </div>
                </div>
                    <!-- <nuxt-link to="/sign-up" class='button cta justify-self-center'>Add your   newsletter</nuxt-link> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {

    // props: ['newsletterList'],

}
</script>

<style scoped>
.container-standard {
    margin-top: 100px;
    margin-bottom: 80px;
    /* max-width: 1200px; */
}
.box {
    /* background-color: #39ac370d; */
    /* padding: 40px 20px; */
    /* box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.15); */
    /* box-shadow: 0 1px 6px 0 rgba(14,30,37,.12); */
    border-radius: 8px;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    max-width: 540px;
}

img {
    box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.15);
}
</style>
