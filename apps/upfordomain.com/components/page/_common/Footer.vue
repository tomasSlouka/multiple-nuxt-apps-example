<template>
    <div id='footer' class='bt1'>
        <div class="container-narrow mb40 mt40 pt40">


            <div class='grid xs-col-2 sm-col-2 md-col-4 lg-col-5 auto gap-30 align-items-start'>

                <div class='grid gap-10 xs-order-5 xs-span-2'>
                    <div class='logo'>
                        <nuxt-link to="/">
                            upfordomain
                        </nuxt-link>
                    </div>
                    <p class='small'>Trade your domains with confidence.</p>
                    <p class='small mt40'>© {{ new Date().getFullYear() }} upfordomain.com</p>
                </div>

                <div class='grid gap-10 xs-order-1'>
                    <h5>Links</h5>
                    <ul>
                        <li><nuxt-link to="/domains/browse">Browse domains</nuxt-link></li>
                        <li><nuxt-link to="/domain/appraisal/add" class='new'>Domain appraisal<span class='new-label'>new</span></nuxt-link></li>
                        <li><nuxt-link to="/domain/add">List my domain</nuxt-link></li>
                        <!-- <li><nuxt-link to="/blog">Blog</nuxt-link></li> -->
                        <!-- <li><nuxt-link to="/get-domain-price">Get domain price</nuxt-link></li> -->
                        <!-- <li><nuxt-link to="/sign-up">Sign up</nuxt-link></li> -->
                        <!-- <li><nuxt-link to="/blog">Blog</nuxt-link></li> -->
                        <!-- <li><nuxt-link to="/api-reference">API References</nuxt-link></li> -->
                    </ul>
                </div>

                <div class='grid gap-10 xs-order-2'>
                    <h5>Service</h5>
                    <ul>
                        <!-- <li><nuxt-link to="/faq">FAQ</nuxt-link></li> -->
                        <li><a href="https://app.upfordomain.com/">Log in</a></li>
                        <!-- <li><nuxt-link to="/creator">For creator</nuxt-link></li> -->
                        <!-- <li><nuxt-link to="/subscriber">Subscriber</nuxt-link></li> -->
                        <!-- <li><nuxt-link to="/pricing">Pricing</nuxt-link></li> -->
                        <!-- <li><nuxt-link to="/referral-program">Referral Program</nuxt-link></li> -->
                        <!-- <li><nuxt-link to="/how-it-works">How it works</nuxt-link></li> -->
                    </ul>
                </div>

                <div class='grid gap-10 xs-order-3'>
                    <h5>Social media</h5>
                    <ul>
                        <!-- <li><nuxt-link to="/forum">Comunity Forum</nuxt-link></li> -->
                        <li><a href="https://discord.gg/5TmNWAQJbF" target='_blank' class='new'>Community<span class='new-label-2'>new</span></a></li>
                        <li><a href="https://www.facebook.com/upfordomain" target='_blank'>Facebook</a></li>
                        <li><a href="https://twitter.com/upfordomainHQ" target='_blank'>Twitter</a></li>
                    </ul>
                </div>

                <div class='grid gap-10 xs-order-4'>
                    <h5>Help & Contact</h5>
                    <p class='contact small'>Feel free to contact us at <br><a href='mailto:hello@upfordomain.com'>hello@upfordomain.com</a>.</p>
                    
                    <!-- <ul>
                        <li><nuxt-link to="/knowledgebase">Guides & FAQs</nuxt-link></li>
                        <li><nuxt-link to="/contact">Chat with Us</nuxt-link></li>
                        <li><nuxt-link to="/contact">Email Us</nuxt-link></li>
                    </ul> -->
                </div>
            </div>


        </div>
    </div>
</template>

<style scoped>
.logo a {
    font-size: 24px;
    line-height: 30px;
    font-weight: 700;
    /* font-family: 'Open sans', sans-serif; */
    /* font-family: 'Exo 2', sans-serif; */
    /* font-family: 'Caveat', cursive; */
    /* font-family: 'Concert One', cursive; */
    /* font-family: 'Patrick Hand', cursive; */
    font-family: 'MuseoModerno', cursive;
    text-decoration: none;
    color: #39ac37;
}

ul {
    list-style-type:none;
}

li {
    font-size: 14px;
    margin-bottom: 5px;
}
li > a {
    color: inherit;
    text-decoration: none;
    display: block;
    padding: 5px;
    transition: .3s;
    position: relative;
    left: 0px;
}
li > a:hover {
    position: relative;
    left: 5px;
}
p.contact {
    line-height: 24px;
}

.new {
    position: relative;
}
.new > span.new-label {
    position: absolute;
    top: 0px;
    left: 124px;
    background-color: #39ac37;
    border: 0px;
    border-radius: 4px;
    color: #fff;
    font-size: 10px;
    padding: 4px 8px;
    line-height: 12px;
}
.new > span.new-label-2 {
    position: absolute;
    top: 0px;
    left: 85px;
    background-color: #39ac37;
    border: 0px;
    border-radius: 4px;
    color: #fff;
    font-size: 10px;
    padding: 4px 8px;
    line-height: 12px;
}
</style>
