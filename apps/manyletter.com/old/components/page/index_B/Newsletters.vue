<template>
    <div class='component' id='newsletter-browser'>
        <div class="container-standard">
            <div class="grid gap-60">
                <div class='grid justify-items-center'>
                    <h2 class='big text-center mb40'>Newsletter browser</h2>
                    <p class='text-center mb40'>Do you have your own newsletter? <nuxt-link to="/sign-up">Add your newsletter</nuxt-link> to the ultimate list.</p>
                    <!-- <p>Showing only newsletters that are published by creators.</p> -->
                    <!-- <nuxt-link to="/sign-up" class='button cta'>Add your newsletter</nuxt-link> -->
                </div>
                <!-- Publish your newsletter now or subscribe to others. -->
                <div class="grid row-gap-30 col-gap-30 md-col-2 lg-col-3">

                    <div class='grid box' v-for="item in newsletterList.data" :key="item.id">
                        <nuxt-link :to='"/admin/subscriber/subscriptions/newsletters/detail/" + item.id' tag='div' class='grid align-content-space-between pointer' >
                            <div class='grid newsletter'>
                                <!-- <div class="cover" :style="'background-image: url(https://storage.manyletter.com/ymello_filestorage/img/newsletter_cover/' + item.cover + ')'"></div> -->
                                <div class="header grid gap-20">
                                    <div class='avatar'>
                                        <div v-if='item.avatar !== null' :style="'background-image: url(https://storage.manyletter.com/ymello_filestorage/img/newsletter_avatar/' + item.avatar + ')'"></div>
                                        <div v-else class='font20 strong grid'><span class='align-self-center justify-self-center uppercase'>{{item.title.charAt(0)}}</span></div>
                                    </div>
                                </div>
                                <div class='body grid gap-20 auto align-items-space-between justify-items-start justify-content-start'>
                                    <div class='grid gap-20'>
                                        <div>
                                            <h3>{{ item.title }}</h3>
                                            <p class="font14">created by <span class='strong'>{{ item.creator_name }}</span></p>
                                        </div>
                                        <p class='thin'>{{ item.intro }}</p>
                                        <!-- <div class='grid gap-10 auto col-2 justify-content-start justify-items-start'>
                                            <p class=""> <span class='strong'>{{ item.subscribers_count }}</span> subscribers </p>
                                            <p class=""> <span class='strong'>{{ item.messages_count }}</span> messages </p>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                            <!-- <div class='data-wrapper align-self-end justify-self-end'> -->
                                <!-- <nuxt-link :to='"/admin/subscriber/subscriptions/newsletters/detail/" + item.id' tag='div' class='button cta white'>View more</nuxt-link> -->
                            <!-- </div> -->
                        </nuxt-link>
                    </div>                  
                </div>
                    <!-- <nuxt-link to="/sign-up" class='button cta justify-self-center'>Add your   newsletter</nuxt-link> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: ['newsletterList'],

}
</script>

<style scoped>
.component {
    background-color: #39ac370d;
    padding-top: 80px;
    padding-bottom: 80px;
    margin-top: 40px;
}
.container-standard {
    margin-top: 0px;
    margin-bottom: 0px;
    max-width: 1200px;
}
.box {
    padding: 0px;
    background-color: #fff;
    box-shadow: 0 1px 6px 0 rgba(14,30,37,.12);
    border-radius: 8px;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.box:hover {
    -webkit-transform: scale(1.02, 1.02);
    transform: scale(1.02, 1.02);
}
.newsletter > .cover {
    width: 100%;
    height: 130px;
    background-color: #fff;
    border-bottom: 1px solid #F5F5F5;
    border-radius: 8px 8px 0px 0px;
    background-image: url('~assets/img/newsletter-cover.jpg');
    background-size: cover;
    background-position: center center;
}
.newsletter .header {
    position: relative;
    padding: 20px 30px 0px 30px;
}
.newsletter .header > .avatar {
    /* position: relative; */
    /* width: 80px; */
    /* box-shadow: 0 1px 6px 0 rgba(14,30,37,.12); */
}
.newsletter .header > .avatar > div {
    /* position: absolute; */
    /* top: -50px; */
    /* left: 0px; */
    background-color: #eee;
    background-size: cover;
    background-position: center center;
    border-radius: 100px;
    /* border: 5px solid #fff; */
    height: 60px;
    width: 60px;
    padding: 7px;
    /* box-shadow: 0 1px 6px 0 rgba(14,30,37,.12); */
}
.newsletter > .body {
    padding: 20px 30px 30px 30px;
}
.data-wrapper {
    padding: 0px 30px 30px 30px;
}
</style>
