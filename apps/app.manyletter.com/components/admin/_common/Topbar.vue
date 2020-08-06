<template>
    <div>
        <div id="topbar">
            <div class="container-standard">
                <div class='flex wrap align-items-center justify-content-space-between'>
                    <div class='logo'>
                        <nuxt-link to="/">
                            upfordomain
                        </nuxt-link>
                    </div>
                    <div class='nav'>
                        <ul class='flex wrap show-md align-items-center'>
                            <li><nuxt-link to='/'>My domains</nuxt-link></li>
                            <li><nuxt-link to='/admin/settings'>Settings</nuxt-link></li>
                            <li>|</li>
                            <li><a @click.prevent='logout()'>Log out</a></li>
                        </ul>
                        <ul>
                            <li class='sidenavtoggle hidden-md' @click="$emit('sidenavToggle')">
                                <div></div>
                                <div></div>
                                <div></div>
                            </li>
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
    background-color: #fff;
    z-index: 100;
    height: 68px;
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
.nav > ul > li > a {
    padding: 22px 22px;
    border-bottom: 1px solid transparent;
    position: relative;
    transition: 0.3s;
}
.nav > ul > li > a:hover {
    color: #39ac37;
    text-decoration: underline;
}
.nav > ul > li > a.nuxt-link-exact-active {
    color: #39ac37;
    text-decoration: underline;
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
    color: #000;
    line-height: 24px;
    font-weight: 500;
    text-decoration: none;
}

</style>
