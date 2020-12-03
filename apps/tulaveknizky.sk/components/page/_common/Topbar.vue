<template>
    <div>
        <div id="topbar">
             <div class="container-standard">
                <div class='flex wrap align-items-center justify-content-space-between'>
                    <div class='logo mt10'>
                        <nuxt-link class='grid gap-10 col-2 auto align-items-center' to="/">
                            <img src="@/assets/img/logo-icon.svg" alt="" class='logo-icon' />
                            <img src="@/assets/img/logo.svg" alt="" class='logo-text' />
                        </nuxt-link>
                    </div>
                    <div class='nav'>
                        <ul v-if="$store.getters['auth/isUserLoggedIn']" class='flex wrap show-md align-items-center'>
                            <!-- <li><nuxt-link to='/admin'>{{$store.state.auth.userData.name}}</nuxt-link></li> -->
                            <li><nuxt-link to='/knihy'>Všetky knižky</nuxt-link></li>
                            <li>|</li>
                            <li><nuxt-link to='/user/books/basket'>Moje knižky</nuxt-link></li>
                            <li><nuxt-link to='/user/account/settings'>Môj účet</nuxt-link></li>
                            <li v-if="$store.state.auth.userData.level == 104"><nuxt-link to='/admin'>Admin</nuxt-link></li>
                            <li><a @click.prevent='logout()'>Odhlásiť sa</a></li>

                        </ul>
                        <ul v-else class='flex wrap show-md align-items-center'>
                            <li><nuxt-link to='/knihy'>Všetky knižky</nuxt-link></li>
                            <li>|</li>
                            <li><nuxt-link to='/prihlasenie'>Prihlásenie</nuxt-link></li>
                            <li><nuxt-link to="/registracia">Registrácia</nuxt-link></li>
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
    data() {
        return {
            // userName: this.$store.state.auth.userData.name,
        }
    },
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

#topbar > .container-standard {
    margin-top: 0px;
    margin-bottom: 0px;
    padding: 0px 20px;
    height: 100%;
}
#topbar > .container-standard > div.flex {
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
