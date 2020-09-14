<template>
    <div class="component">

        <div class="container-standard">

            <div class='grid gap-30 justify-items-center'>

                <!-- <h2 class="big text-center">Stay independent</h2>
                <h3 class='text-center maxw600'>Unlike other platforms, ManyLetter does not own your content. Your content is your most valuable asset, and it should stay in your hands.  
                You can start sending your newsletter for free and leave it whenever you want.
                </h3> -->

                <div class='grid col-3 gap-60 mt60'>

                    <!-- <div class='grid justify-items-end align-items-center'>
                    </div> -->
                    <div class='box grid gap-20 align-content-start'>
                        <!-- <img src="@/assets/img/collect.svg" alt="" /> -->
                        <!-- <h3>Grow your newsletter audience</h3> -->
                        <h3>Grow your audience</h3>
                        <!-- <p class='thin font18'>Let people discover your newsletter. Add your newsletter to ManyLetter and gain new subscribers.</p> -->
                        <p class='thin font18'>Let people discover your newsletter and gain new subscribers.</p>
                    </div>

                    <div class='box grid gap-20 align-content-start'>
                        <!-- <img src="@/assets/img/stats.svg" alt="" /> -->
                        <!-- <h3>Understand your subscribers</h3> -->
                        <h3>Understand</h3>
                        <!-- <p class='thin font18'>ManyLetter will show you all kind of stats about your newsletter and messages. Understand your subscribers so you can bring them better content.</p> -->
                        <p class='thin font18'>Understand your subscribers so you can bring them better content.</p>
                    </div>
                    <!-- <div class='grid justify-items-end align-items-center'>
                    </div>
                    <div class='grid justify-items-end align-items-center'>
                    </div> -->
                    <div class='box grid gap-20 align-content-start'>
                        <!-- <img src="@/assets/img/workflow.svg" alt="" /> -->
                        <h3>Reduce cost</h3>
                        <!-- <h3>Reduce distribution <br>cost</h3> -->
                        <!-- <p class='thin font18'>You don't need to create individual messages for email anymore. Instead, you can get your subscribers directly to your website.</p> -->
                        <p class='thin font18'>Don't create individual messages for email. Invite your subscribers directly to your website.</p>
                    </div>
                    
                    <div class='box grid gap-20 align-content-start'>
                        <!-- <img src="@/assets/img/rate.svg" alt="" /> -->
                        <h3>Collect feedback</h3>
                        <!-- <h3>Collect subscribers feedback</h3> -->
                        <p class='thin font18'>Be human. Ask your subscribers for feedback. Create better content.</p>
                    </div>
                    <div class='box grid gap-20 align-content-start'>
                        <!-- <img src="@/assets/img/integrate.svg" alt="" /> -->
                        <!-- <h3>Website integration</h3> -->
                        <!-- <h3>Integrate to your website or blog</h3> -->
                        <h3>Send messages</h3>
                        <p class='thin font18'></p>
                        <!-- <p class='thin font18'>Integrate subscription button into your website in a minute. Collect your subscribers and send them your newsletter with your valuable content.</p> -->
                    </div>

                    <!-- <div class='grid justify-items-end align-items-center'>
                    </div>
                    <div class='grid justify-items-end align-items-center'>
                    </div> -->

                    <div class='box grid gap-20 align-content-start'>
                        <!-- <img src="@/assets/img/newsletters.svg" alt="" /> -->
                        <h3>Multiple newsletters</h3>
                        <!-- <h3>Manage multiple newsletters</h3> -->
                        <p class='thin font18'>Create many newsletters under one account. Subscribers will notice.</p>
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
    .box {
        border: 0px;
    }
}

</style>
