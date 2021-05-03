<template>
    <div>
        <div id="topbar">
             <div class="container-standard grid align-items-center">
                <div class='grid auto col-2 md-col-1 lg-col-2 align-items-center justify-content-space-between'>
                    <div class='logo justify-self-start'>
                        <nuxt-link class='grid gap-10 col-2 auto align-items-center' to="/">
                            <img src="@/assets/img/logo-icon.svg" alt="" class='logo-icon' />
                            <img src="@/assets/img/logo.svg" alt="" class='logo-text' />
                        </nuxt-link>
                    </div>
                    
                    <div class='nav justify-self-end'>
                        <ul v-if="$store.getters['auth/isUserLoggedIn']" class='flex wrap show-md align-items-center'>
                            <!-- <li><nuxt-link to='/admin'>{{$store.state.auth.userData.name}}</nuxt-link></li> -->
                            <li><nuxt-link to='/kniznica'>Knižnica</nuxt-link></li>
                            <!-- <li><nuxt-link to='/knihy'>Blog</nuxt-link></li> -->
                            <!-- <li><nuxt-link to='/knihy'>Newsletter</nuxt-link></li> -->
                            <li>|</li>
                            <li v-if="$store.state.auth.userData.level == 104"><nuxt-link to='/admin/orders'>Administrácia</nuxt-link></li>
                            <li><nuxt-link to='/user/books'>Moje knižky</nuxt-link></li>
                            <li><nuxt-link to='/user/account'>Môj účet</nuxt-link></li>
                            <li>|</li>
                            <!-- {{$store.state.auth.userData.nickname}} |  -->
                            <!-- {{$store.state.auth.userData.credit ? $store.state.auth.userData.credit : "0"}} -->
                            <!-- <li><a @click.prevent='logout()'>Odhlásiť sa</a></li> -->
                            <li>
                                <div class='grid col-2 auto gap-20 align-items-center ml20'>
                                    <nuxt-link tag='div' to='/user/account/credits' class='grid col-2 auto gap-10 align-items-center credit pointer'>
                                        <p class='small'>
                                            {{$store.state.auth.userData.credit ? $store.state.auth.userData.credit-$store.state.auth.userData.credit_blocked + '.00' : "0.00"}}
                                        </p>
                                        <img src="@/assets/img/icon-coin.svg" alt="" class='icon-coin' />
                                    </nuxt-link>
                                    <nuxt-link tag='div' to='/user/books/basket' class='grid col-1 auto gap-10 align-items-center basket pointer'>
                                        <img src="@/assets/img/icon-basket.svg" alt="" class='icon-basket' />
                                    </nuxt-link>
                                </div>
                            </li>
                        </ul>
                        <ul v-else class='flex wrap show-md align-items-center'>
                            <li><nuxt-link to='/kniznica'>Knižnica</nuxt-link></li>
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
                            <li><a @click.prevent='logout()'>Odhlásiť</a></li>
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
                this.$router.push('/odhlasenie')
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
    /* background-color: #ffd401; */
    z-index: 100;
    /* height: 80px; */
    /* height: 80px; */
    padding-top: 12px;
    padding-bottom: 12px;
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

.logo-text {
    max-height: 45px;
    border: 0px;
    border-radius: 0px;
}
.logo-icon {
    max-height: 35px;
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
    padding: 16px 22px;
    border-bottom: 1px solid transparent;
    position: relative;
    top: 0px;
    transition: 0.2s;
    /* transition: left .2s; */
    display: inline-block;
}
.nav > ul > li > a:hover {
    color: #000;
    text-decoration: none;
    position: relative;
    top: 2px;
}
.nav > ul > li > a.nuxt-link-active {
    color: #000;
    text-decoration: none;
    font-weight: 600;
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

.icon-coin, .icon-basket {
    height: 1em;
    border-radius: 0;
}
.credit {
    padding: 3px 10px;
    border-radius: 40px;
    border: 2px solid #ffd401;
    background-color: #fbf7ed;
    height: 33px;
}
.basket {
    padding: 3px 10px;
    border-radius: 40px;
    border: 2px solid #ffd401;
    background-color: #fbf7ed;
    height: 33px;
}
</style>
