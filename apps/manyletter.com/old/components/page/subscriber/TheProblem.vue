<template>
    <div class='component'>
        <div class="container-standard">
            <div class="grid gap-60">
                <div class='grid justify-items-center'>
                    <h2 class='big text-center mb40'>See how it works</h2>
                    <h3 class='text-center maxw600'>Are you overwhelmed by emails, notifications, subscriptions...? ManyLetter will help you get your inbox clean and distraction-free.</h3>
                    <!-- <nuxt-link to="/sign-up" class='button cta'>Add your newsletter</nuxt-link> -->
                </div>

                <div class="grid gap-20 md-col-3 auto">
                    <div class='box grid auto col-2 gap-20'>
                        <h2>1.</h2>
                        <div class='grid gap-5 align-content-start'>
                            <h3>Subscribe</h3>
                            <p class='thinn'>Browse and join newsletters within ManyLetter.</p>
                            <p class='thinn mt20 small align-self-end'>If newsletter is not in ManyLetter you can't subscribe to it.</p>
                        </div>
                    </div>
                    <div class='box grid auto col-2 gap-20'>
                        <h2>2.</h2>
                        <div class='grid gap-5 align-content-start'>
                            <h3>Receive</h3>
                            <p class='thinn'>Get all newsletter messages from your favourite ManyLetter creators in a single email every day.</p>
                        </div>
                    </div>
                    <div class='box grid auto col-2 gap-20'>
                        <h2>3.</h2>
                        <div class='grid gap-5 align-content-start'>
                            <h3>Manage</h3>
                            <p class='thinn'>Have control over your subscriptions. Check the historical messages of the newsletter. Unsubscribe if you won't receive more messages.</p>
                        </div>
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
}
.box {
    background-color: #39ac370d;
    padding: 40px 20px;
    /* box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.15); */
    /* box-shadow: 0 1px 6px 0 rgba(14,30,37,.12); */
    border-radius: 8px;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    max-width: 540px;
}
</style>
