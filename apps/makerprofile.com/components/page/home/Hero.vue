<template>
    <div class="component">

        <div class='container-narrow mt20 mb20'>
            <img src="@/assets/img/logo.png" alt="" class='logo' />
        </div>

        <div class="container-narrow mt20 grid">
            <div class='grid gap-20'>
                <!-- <h1 class='maxw500'>Do you subscribe to too many newsletters?</h1> -->
                <h1>Find your freelance team.</h1>
                <h2 class='strong maxw500'>Collaborate with other freelancers. Work on exciting projects.</h2>
                <!-- <p class="maxw500">
                    Create a beautiful responsive personal website on a custom domain in a snap. Choose a template, enable a simple blog with comments, set up a contact form, or capture emails of your page visitors—all for $4.99.
                </p> -->
                <!-- <p class='maxw500'>
                    Change is inevitable. More and more people will be working remotely.
                </p> -->
                <div class='mt30 grid gap-20'>
                    <div>
                        <a href='https://app.makerprofile.com/sign-up' class='button black cta big'>Join the team</a>
                    </div>
                    <p class="small">you are not alone.</p>
                </div>
            </div>
            
        </div>

        <div class="container-narrow mt20 grid">
            <div class='grid gap-20'>
                <!-- <h1 class='maxw500'>Do you subscribe to too many newsletters?</h1> -->
                <div class='grid md-col-2 gap-60 align-items-start'>
                    <div class='grid gap-20'>
                        <h3>Working alone sucks.</h3>
                        <p class=''>Are you a good frontend programmer but don't like backend development? Are you an excellent copywriter, but can't design a website? Find your freelance partners.</p>
                    </div>

                    <div class='grid gap-20'>
                        <h3>Work on things you're good at</h3>
                        <p class=''>Are you a good frontend programmer but don't like backend development? Are you an excellent copywriter, but can't design a website? Find your freelance partners.</p>
                    </div>
                
                    <div class='grid gap-20'>
                        <h3>Connect with others</h3>
                        <p class=''>Create a new team or join an existing team of freelancers. </p>
                    </div>
                </div>

            </div>
            
        </div>
    </div>
</template>

<script>
export default {

    // props: ['domainList'],

}
</script>

<style scoped>
h1 {
    font-size: 2.5em;
}
.logo {
    height: 50px;
    width: 50px;
    border-radius: 50px;
}
</style>
