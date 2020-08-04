<template>
    <div id='footer'>
        <div class="container-standard mb40 mt40">


            <div class='grid xs-col-2 sm-col-2 md-col-4 lg-col-5 auto gap-30 align-items-start'>

                <div class='grid gap-10 xs-order-5 xs-span-2'>
                    <div class='logo'>
                        <nuxt-link to="/">
                            ManyLetter
                        </nuxt-link>
                    </div>
                    <p class='small'>We are on the mission<br> to change the way how<br> newsletters are done.<br/>Will you join?</p>
                    <p class='small mt40'>© {{ new Date().getFullYear() }} ManyLetter</p>
                </div>

                <div class='grid gap-10 xs-order-2'>
                    <h5>Links</h5>
                    <ul>
                        <li><nuxt-link to="/log-in">Log in</nuxt-link></li>
                        <li><nuxt-link to="/sign-up">Sign up</nuxt-link></li>
                        <li><nuxt-link to="/sign-up">Add newsletter</nuxt-link></li>
                        <!-- <li><nuxt-link to="/blog">Blog</nuxt-link></li> -->
                        <!-- <li><nuxt-link to="/api-reference">API References</nuxt-link></li> -->
                    </ul>
                </div>

                <div class='grid gap-10 xs-order-1'>
                    <h5>Product</h5>
                    <ul>
                        <li><nuxt-link to="/about">About</nuxt-link></li>
                        <li><nuxt-link to="/creator">For creator</nuxt-link></li>
                        <!-- <li><nuxt-link to="/subscriber">Subscriber</nuxt-link></li> -->
                        <!-- <li><nuxt-link to="/pricing">Pricing</nuxt-link></li> -->
                        <!-- <li><nuxt-link to="/referral-program">Referral Program</nuxt-link></li> -->
                        <!-- <li><nuxt-link to="/blog">What's New</nuxt-link></li> -->
                    </ul>
                </div>

                <div class='grid gap-10 xs-order-3'>
                    <h5>Community</h5>
                    <ul>
                        <!-- <li><nuxt-link to="/forum">Comunity Forum</nuxt-link></li> -->
                        <li><a href="https://www.facebook.com/manylettercom/" target='_blank'>Facebook</a></li>
                        <li><a href="https://twitter.com/manylettercom" target='_blank'>Twitter</a></li>
                    </ul>
                </div>

                <div class='grid gap-10 xs-order-4'>
                    <h5>Help & Contact</h5>
                    <p>Feel free to contact us at <br><a href='mailto:tomas@manyletter.com'>tomas@manyletter.com</a>.</p>
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
    font-size: 30px;
    line-height: 30px;
    font-weight: 700;
    /* font-family: 'Open sans', sans-serif; */
    /* font-family: 'Exo 2', sans-serif; */
    font-family: 'Caveat', cursive;
    /* font-family: 'Concert One', cursive; */
    /* font-family: 'Patrick Hand', cursive; */
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
</style>
