<template>
    <div>
        <div id="topbar">
             <div class="container-narrow">
                <div class='flex wrap align-items-center justify-content-space-between'>
                    <div class='logo mt10'>
                        <nuxt-link to="/">
                            <img src="@/assets/img/logo-white.png" alt="" class='logo' />
                        </nuxt-link>
                    </div>
                    <div class='nav'>
                        <ul class='flex wrap show-md align-items-center'>
                            <!-- <li><a href='https://app.manyletter.com/sign-up'>Request access</a></li> -->
                            <!-- <li><nuxt-link to='/about'>About</nuxt-link></li> -->
                            <!-- <li><a href='https://app.manyletter.com'>Log in</a></li> -->
                        </ul>
                        <ul>
                            <li class='sidenavtoggle hidden-md' @click="$emit('sidenavtoggle')">
                                <div></div>
                                <div></div>
                                <div></div>
                            </li>
                        </ul>
                    </div>
                    <!-- <div class='nav'>
                        <ul class='flex wrap show-md align-items-center'>
                            <li><a @click.prevent='logout()'>Log out</a></li>
                        </ul>
                    </div> -->
                </div>
            </div>
        </div>

        <!-- <div id="setup">
            <p></p>
        </div> -->
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#topbar {
    /* box-shadow: 0 0.125rem 0.125rem rgba(0,0,0,.1); */
    position: relative;
    top: 0px;
    left: 0px;
    width: 100%;
    background-color: #fff;
    z-index: 100;
    height: 80px;
}
/* #setup {
    background-color: #30E7B6;
    padding: 40px;
} */

#topbar > .container-narrow {
    margin-top: 0px;
    margin-bottom: 0px;
    padding: 0px 20px;
    height: 100%;
}
#topbar > .container-narrow > div.flex {
    height: 100%;
}

.logo img {
    max-height: 30px;
}

.nav > ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
}
.nav > ul > li > a {
    padding: 22px 22px;
    border-bottom: 1px solid transparent;
    position: relative;
    transition: 0.3s;
    transition: transform .2s;
}
.nav > ul > li > a:hover {
    color: #000;
    text-decoration: none;
    transform: scale(1.5);
}
.nav > ul > li > a.nuxt-link-exact-active {
    color: #000;
    text-decoration: none;
}
/* .nav > ul > li > a.nuxt-link-active.no-active {
    color: initial;
    text-decoration: initial;
}
.nav > ul > li > a.nuxt-link-active.no-active:hover {
    color: #39ac37;
    text-decoration: underline;
} */
.nav > ul > li.sidenavtoggle {
    cursor: pointer;
}
.nav > ul > li.sidenavtoggle > div {
    width: 30px;
    height: 3px;
    background-color: #000;
    margin: 5px 0;
    border-radius: 4px;
}
.nav > ul > li > a {
    color: #000000b8;
    line-height: 24px;
    font-weight: 500;
    text-decoration: none;
}

</style>
