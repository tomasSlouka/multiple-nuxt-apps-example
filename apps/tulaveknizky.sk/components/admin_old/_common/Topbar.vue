<template>
    <div>
        <div id="topbar">
            <div class="container-wide">
                <div class='flex wrap align-items-center justify-content-space-between'>
                    <div class='logo'>
                        <nuxt-link class='grid gap-10 col-2 auto align-items-center' to="/">
                            <img src="@/assets/img/logo-icon.svg" alt="" class='logo-icon' />
                            <img src="@/assets/img/logo-white.svg" alt="" class='logo-text' />
                        </nuxt-link>
                    </div>
                    <div class='nav'>
                        <ul class='flex wrap show-md align-items-center'>
                            <li><nuxt-link to='/dashboard'>Dashboard</nuxt-link></li>
                            <li><nuxt-link to='/administracia/knihy'>Knihy (web)</nuxt-link></li>
                            <li><nuxt-link to='/administracia/sklad'>Sklad</nuxt-link></li>
                            <li><nuxt-link to='/administracia/pouzivatelia'>Používatelia</nuxt-link></li>
                        </ul>
                        <ul>
                            <li class='sidenavtoggle hidden-md' @click="$emit('sidenavtoggle')">
                                <div></div>
                                <div></div>
                                <div></div>
                            </li>
                        </ul>
                    </div>
                    <div class='nav'>
                        <ul class='flex wrap show-md align-items-center'>
                            <li><a @click.prevent='logout()'>Odhlásenie</a></li>
                        </ul>
                    </div>
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
    methods: {
        logout() {
            console.log('logout')
            this.$store.dispatch('auth/logout')
            .then(() => {
                this.$router.push('/log-out')
            })
        }
    }
}
</script>

<style scoped>
#topbar {
    box-shadow: 0 0.125rem 0.125rem rgba(0,0,0,.1);
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    background-color: #000;
    z-index: 100;
    height: 68px;
}
/* #setup {
    background-color: #30E7B6;
    padding: 40px;
} */

#topbar > .container-wide {
    margin-top: 0px;
    margin-bottom: 0px;
    padding: 0px 20px;
    height: 100%;
}
#topbar > .container-wide > div.flex {
    height: 100%;
}

.logo-text {
    max-height: 60px;
    border: 0px;
    border-radius: 0px;
}
.logo-icon {
    max-height: 40px;
    border: 0px;
    border-radius: 0px;
}
.logo a {
    text-decoration: none;
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
    color: #fff;
    text-decoration: none;
    transform: scale(1.5);
}
.nav > ul > li > a.nuxt-link-exact-active {
    color: #fff;
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
    height: 4px;
    background-color: black;
    margin: 5px 0;
}
.nav > ul > li > a {
    color: #ffffffb8;
    line-height: 24px;
    font-weight: 400;
    text-decoration: none;
}

</style>
