<template>
    <div class="component">
        
        <div class='container-standard mt80 mb80'>
            <div class='grid gap-100 md-col-2 align-items-center'>
                <div class='grid gap-20'>
                    <div>
                        <!-- <h1 class=''>Make your newsletter visible</h1> -->
                        <!-- <h1 class=''>Publish, distribute and grow your newsletter</h1> -->
                        <!-- <h1 class=''>Want to know how to grow your newsletter?</h1> -->
                        <h1>Start building community around your newsletter</h1>
                        <!-- <h2>Build a community around it.</h2> -->
                        <!-- <h2 class=''>expose your newsletter to more people.</h2> -->
                    </div>
                    <div class='grid gap-20 box align-content-start'>
                        <div>
                            <p class='maxw400 font18 thin'>Creating newsletters today is easier than ever, but finding your subscribers can be challenging. Only sending the newsletter is not enough. Build a relationship with your subscribers.</p>
                        </div>
                        <div class='grid justify-items-start mt20'>
                            <nuxt-link to="/sign-up" class='button cta big'>Add your newsletter</nuxt-link>
                        </div>
                        <div>
                            <p class='thin font14'>Start building your community <span class='strong'>today</span>.</p>
                        </div>
                    </div>
                </div>

                <div class=''>
                    <img src="@/assets/img/newsletter-intro-5.png" alt="Creator dashboard screenshot" />
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
