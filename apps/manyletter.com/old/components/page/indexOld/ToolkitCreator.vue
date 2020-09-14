<template>
    <div class="component">

        <div class="container-standard">

            <div class='grid gap-30 justify-items-start'>
                <div>
                    <h2>Create better content</h2>
                    <p class='gray'>Features for newsletter creators</p>
                </div>

                <div class='grid xs-col-1 sm-col-2'>

                    <div class='box box-1 grid gap-20 align-content-start'>
                        <img src="@/assets/img/collect.svg" alt="Whitelabel CMS - ymello" />
                        <h3>Collect and manage</h3>
                        <p>Collect and manage your subscribers as well as your newsletters and messages. Subscriber lists can be managed automatically so you will have relevant subscibers only.</p>
                    </div>

                    <div class='box box-2 grid gap-20 align-content-start'>
                        <img src="@/assets/img/stats.svg" alt="Whitelabel CMS - ymello" />
                        <h3>Understand</h3>
                        <p>ManyLetter will tell you all kind of interesting stats about your newsletter and its messages. Understand your subscribers so you can bring them better content.</p>
                    </div>

                    <div class='box box-3 grid gap-20 align-content-start'>
                        <img src="@/assets/img/workflow.svg" alt="Whitelabel CMS - ymello" />
                        <h3>Simplier workflow</h3>
                        <p>ManyLetter will save you tons o time and money because you don't need to create special messages for email anymore, instead you can get your subscibers directly to your website.</p>
                    </div>

                    <div class='box box-4 grid gap-20 align-content-start'>
                        <img src="@/assets/img/rate.svg" alt="Whitelabel CMS - ymello" />
                        <h3>Increase open rates</h3>
                        <p>ManyLetter will help you increase open rates of your newsletter by providing you with better insights.</p>
                    </div>
                </div>

                <nuxt-link to="/about" class='button cta justify-self-center'>Learn more</nuxt-link>
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
    padding: 40px;
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
    width: 50px;
}
</style>
