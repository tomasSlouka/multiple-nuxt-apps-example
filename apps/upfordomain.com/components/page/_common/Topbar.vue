<template>
    <div id="topbar">
        <div class='flex wrap align-items-center justify-content-space-between'>
            <div class='logo'>
                <nuxt-link to="/">
                    upfordomain
                </nuxt-link>
            </div>
            <div class='nav'>
                <ul class='flex wrap show-md align-items-center'>
                    <li><nuxt-link to="/domains-up-for-rent/browse">Browse domain names</nuxt-link></li>
                    <li><nuxt-link to="/domain-appraisal/add" class='new mr10'>Domain appraisal<span class='new-label'>new</span></nuxt-link></li>
                    <li><nuxt-link to="/domains-up-for-rent/add">List your domain</nuxt-link></li>
                    <!-- <li><nuxt-link to="/get-domain-price">Get domain price</nuxt-link></li> -->
                    <!-- <li><nuxt-link to="/blog">Blog</nuxt-link></li> -->
                    <li><nuxt-link to="/faq">FAQ</nuxt-link></li>
                    <!-- <li><nuxt-link to="/creator">Add your newsletter</nuxt-link></li> -->
                    <!-- <li><nuxt-link to="/pricing">Pricing</nuxt-link></li> -->
                    <!-- <li><nuxt-link to="/about">About</nuxt-link></li> -->
                    <!-- <li><nuxt-link to="/referral-program">Referral Program</nuxt-link></li> -->
                    <span>|</span>
                    <li><a href="https://app.upfordomain.com/">Log in</a></li>
                    <!-- {{ this.$store.state }} -->
                    <!-- <div v-if='$store.getters.isUserLoggedIn' class='flex wrap show-md align-items-center'>
                        <li><nuxt-link to="/admin/home" class='flex nowrap align-items-center'> {{ ($store.state.userData == null) ? "Go to Admin" : "Continue as " + $store.state.userData.name + "" }}</nuxt-link></li>
                        <span>or</span>
                         <li><a @click.prevent='$store.dispatch("logout")'>Log out</a></li>
                    </div>
                    <div v-else class='flex wrap show-md align-items-center'>
                        <li><nuxt-link to="/log-in">Log in</nuxt-link></li>
                        <nuxt-link to="/sign-up" tag='button' class='button cta white'>Sign Up</nuxt-link>
                    </div> -->

                    


                </ul>
                <ul>
                    <li class='sidenavtoggle hidden-md' @click="$emit('sidenav-toggle')">
                        <div></div>
                        <div></div>
                        <div></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

export default {

}
</script>

<style scoped>
#topbar {
    /* max-width: 976px; */
    max-width: 1200px;
    margin: 0px auto;
    padding: 20px;
}

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

.nav > ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
}
.nav > ul > li,
.nav > ul > div > li
{
    padding: 0px 22px;
}
.nav > ul > li > a,
.nav > ul > div > li > a 
{
    border-bottom: 1px solid transparent;
    position: relative;
    transition: 0.3s;
}
.nav > ul > li > a:hover,
.nav > ul > div > li > a:hover 
{
    color: #39ac37;
    /* text-decoration: underline; */
}
.nav > ul > li > a.nuxt-link-active,
.nav > ul > div > li > a.nuxt-link-active 
{
    color: #39ac37;
    font-weight: 600;
    /* text-decoration: underline; */
}

.nav > ul > li.sidenavtoggle {
    cursor: pointer;
}
.nav > ul > li.sidenavtoggle > div {
    width: 30px;
    height: 4px;
    background-color: black;
    margin: 5px 0;
}
.nav > ul > li > a, 
.nav > ul > div > li > a 
{
    /* font-family: 'Open sans', sans-serif; */
    color: #000;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    text-decoration: none;
}

.new {
    position: relative;
}
.new > span.new-label {
    position: absolute;
    top: -10px;
    right: -38px;
    background-color: #39ac37;
    border: 0px;
    border-radius: 4px;
    color: #fff;
    font-size: 10px;
    padding: 4px 8px;
    line-height: 12px;
}
</style>
