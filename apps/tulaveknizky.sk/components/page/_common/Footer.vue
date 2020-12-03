<template>
    <div id='footer' class='bt1'>
        <div class="container-standard mb40 mt40 pt40">


            <div class='grid xs-col-2 sm-col-2 md-col-4 lg-col-5 auto gap-30 align-items-start'>

                <div class='grid gap-10 xs-order-5 xs-span-2'>
                    <div class='logo'>
                        <nuxt-link to="/">
                            <img src="@/assets/img/logo-white.svg" alt="" class='logo' />
                        </nuxt-link>
                    </div>
                    <p class='small maxw200'>
                        “Kto sa chce stať vzdelaným, musí nad zlato vážiť si knihy.”<br>― Jan Amos Komenský
                    </p>
                    <p class='small mt40'>© {{ new Date().getFullYear() }} tulaveknizky.sk</p>
                </div>

                <div class='grid gap-10 xs-order-1'>
                    <h4>Odkazy</h4>
                    <ul>
                        <li><nuxt-link to="/knihy">Knihy</nuxt-link></li>
                        <li><nuxt-link to="/newletter">Newsletter</nuxt-link></li>
                        <li><nuxt-link to="/blog">Blog</nuxt-link></li>
                    </ul>
                </div>

                <div class='grid gap-10 xs-order-2'>
                    <h4>Služba</h4>
                    <ul>
                        <!-- <li><nuxt-link to="/faq">FAQ</nuxt-link></li> -->
                        <li><nuxt-link to="/ako-to-funguje">Ako to funguje?</nuxt-link></li>
                        <li v-if="$store.getters['auth/isUserLoggedIn']"><nuxt-link to='/admin'>Môj účet</nuxt-link></li>
                        <li v-else><nuxt-link to='/log-in'>Prihlásenie</nuxt-link></li>
                        <li v-if="$store.getters['auth/isUserLoggedIn']"><a @click.prevent='logout()'>Odhlásiť sa</a></li>
                        <li v-else><nuxt-link to="/sign-up">Registrácia</nuxt-link></li>
                        <!-- <li><nuxt-link to="/creator">For creator</nuxt-link></li> -->
                        <!-- <li><nuxt-link to="/subscriber">Subscriber</nuxt-link></li> -->
                        <!-- <li><nuxt-link to="/pricing">Pricing</nuxt-link></li> -->
                        <!-- <li><nuxt-link to="/referral-program">Referral Program</nuxt-link></li> -->
                        <!-- <li><nuxt-link to="/how-it-works">How it works</nuxt-link></li> -->
                    </ul>
                </div>

                <div class='grid gap-10 xs-order-3'>
                    <h4>Socialne siete</h4>
                    <ul>
                        <!-- <li><nuxt-link to="/forum">Comunity Forum</nuxt-link></li> -->
                        <li><a href="https://www.facebook.com/manylettercom" target='_blank'>Facebook</a></li>
                        <li><a href="https://twitter.com/manyletterHQ" target='_blank'>Instagram</a></li>
                        <li><a href="https://twitter.com/manyletterHQ" target='_blank'>Twitter</a></li>
                    </ul>
                </div>

                <div class='grid gap-10 xs-order-4'>
                    <h4>Pomoc a kontakt</h4>
                    <ul>
                        <li><nuxt-link to="/najcastejsie-otazky">Najčastejsie otázky</nuxt-link></li>
                    </ul>
                    <p class='contact small'>Nebola tvoja otázka zodpovedaná? <br>Napíš nám na <a href='mailto:ahoj@tulaveknizky.sk'>ahoj@tulaveknizky.sk</a>.</p>
                    
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
    text-decoration: none;
}
.logo img {
    max-height: 60px;
}
#footer {
    color: #ffffffb8;
    background-color: #000;
    padding-bottom: 40px;
}

#footer p {
    color: #ffffffb8;
}

h4 {
    color: #fff;
}
#footer > .container-narrow {
    margin-bottom: 0px;
}
ul {
    list-style-type:none;
}

li {
    /* font-size: 14px; */
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
    color: #ffffffb8;
}
li > a:hover {
    position: relative;
    left: 5px;
    color: #fff;
}
p.contact {
    color: #ffffffb8;
}
p.contact a {
    color: #ffd401;
}
</style>
