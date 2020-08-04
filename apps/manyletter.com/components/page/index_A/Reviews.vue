<template>
    <div class="component">

        <div class="container-narrow">

            <div class='grid gap-60'>
                <div class='grid justify-items-center'>
                    <h2 class='big mb40 text-center'>Customer stories</h2>
                    <h3 class='text-center maxw500'>Discover how other users use ManyLetter to build trust and improve their outbound communication.</h3>
                </div>

                <div class='grid gap-20 md-col-2 auto align-items-stretch justify-content-center'>
                    

                    <div class='grid gap-20 box'>
                        <p class=''>Hello. Thank you for your interest in ManyLetter. As I'm just starting with ManyLetter, I don't have any customer stories yet. I hate fake reviews. Therefore, I have decided that the first story will be about ManyLetter and how I have come up with the idea. <nuxt-link to='/about'>Read more</nuxt-link></p>
                        <div class='grid gap-20 auto col-2 justify-content-start align-items-center'>
                            <img src="@/assets/img/manyletter_founder.png" alt="manyletter founder" />
                            <div>
                                <p class='strong'>tomas<span class='small thin'>@manyletter.com</span></p>
                                <p class='small thin'>Founder of ManyLetter</p>
                            </div>
                        </div>
                    </div>

                    <!-- <div class='grid gap-20 box'>
                        <p class=''>Send me your story to <span class='strong'>tomas@manyletter.com</span></p>
                        
                    </div> -->

                </div>

                <div class='grid gap-10 justify-self-center justify-items-center'>
                    <p class=''>Join the community</p>
                    <div class="grid gap-10 col-1 justify-items-center">
                        <!-- <p class="social facebook"><a href="https://www.facebook.com/manylettercom/" target="_blank">Facebook</a></p> -->
                        <p class="social twitter"><a href="https://twitter.com/manylettercom" target="_blank">Twitter</a></p>
                        <!-- <p class="social instagram"><ion-icon name="logo-instagram"></ion-icon></p> -->
                    </div>
                </div>

            </div>
                <!-- <div class='grid col-2 gap-80 align-items-start'>

                    <div class='box box-1'>
                        <img src="@/assets/img/one-email.svg" alt="Whitelabel CMS - ymello" />
                        <div class='grid gap-20 align-content-start'>
                            <h3>🐣 Subscriber</h3>
                            <p>Manage your subscribtions at one place automatically. Get one email a day and don't miss important messages again.</p>
                            <nuxt-link to="/subscriber" class='button cta justify-self-start mt20'>Click to learn more</nuxt-link>
                        </div>
                    </div>

                    <div class='box-empty'><img class='arrow-1' src="@/assets/img/arrow-1.svg" alt="Whitelabel CMS - ymello" /></div>
                    <div class='box-empty'><img class='arrow-2' src="@/assets/img/arrow-1.svg" alt="Whitelabel CMS - ymello" /></div>

                    <div class='box box-2'>
                        <img src="@/assets/img/creator-2.svg" alt="Whitelabel CMS - ymello" />
                        <div class='grid gap-20 align-content-start'>
                            <h3>🦸 Creator</h3>
                            <p>Create a personalized newsletter for your subscribers based on the data. Start your new newsletter today.</p>
                            <nuxt-link to="/creator" class='button cta justify-self-start mt20'>Click to learn more</nuxt-link>
                        </div>
                    </div>
                </div> -->

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.component {
    /* background-color: #39ac370d; */
    /* background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,1) 30%, rgba(48,231,182,0.46) 100%); */
    padding: 10px;
}
.container-narrow {
    max-width: 100%;
}
img {
    border-radius: 100px;
    border: 6px solid #fff;
    width: 60px;
    /* box-shadow: 0 1px 6px 0 rgba(14,30,37,.12); */
}

.box {
    background-color: #39ac370d;
    padding: 40px;
    /* box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.15); */
    /* box-shadow: 0 1px 6px 0 rgba(14,30,37,.12); */
    border-radius: 8px;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    max-width: 540px;
}

p.social > a {
    background: #fff;
    border-radius: 20px;
    /* height: 40px; */
    /* width: 40px; */
    padding: 5px 20px;
    display: grid;
    justify-items: center;
    align-items: center;
    box-shadow: 0 1px 6px 0 rgba(14,30,37,.12);
    color: #000;
    cursor: pointer;
    font-size: 16px;
    text-decoration: none;
}
p.social.facebook > a:hover {
    background: #3b5998;
    color: #fff;
}
p.social.twitter > a:hover {
    background: #00acee;
    color: #fff;
}
p.social.instagram > a:hover {
    background: #E1306C;
    color: #fff ;
}
</style>
