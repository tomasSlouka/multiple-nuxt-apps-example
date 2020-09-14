<template>
    <div class="component">
        
        <div class='container-standard mt80 mb80'>
            <div class='grid gap-100 md-col-2 align-items-center'>
                <div class='grid gap-20'>
                    <div>
                        <h1 class=''>Get one email a day with all the news</h1>
                    </div>
                    <div class='grid gap-20 box align-content-start'>
                        <div>
                            <p class='maxw300 font18 thin'>Browse, join and manage your subscriptions in one place automatically. Get new messages from your favourite ManyLetter creators once a day. Never miss important message again.</p>
                        </div>
                        <div class='grid justify-items-start mt20'>
                            <nuxt-link to="/sign-up" class='button cta big'>Get started now</nuxt-link>
                        </div>
                        <div>
                            <!-- <p class='thin font14'>Get <span class='strong'>20% off</span> for a lifetime.</p> -->
                        </div>
                    </div>
                </div>

                <div class=''>
                    <img src="@/assets/img/newsletter-intro-4.png" alt="Creator dashboard screenshot" />
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
.container-standard {
    max-width: 1200px;
}
img {
    box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.15);
}
.width {
    max-width: 320px;
}
</style>
