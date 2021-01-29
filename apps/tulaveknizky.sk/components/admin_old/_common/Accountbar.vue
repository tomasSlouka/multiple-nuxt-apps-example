<template>
    <div>
        <div id="bar">
            <div class="container-narrow">
                <div class='flex wrap align-items-center justify-content-center'>
                    <div class=''>
                    </div>
                    <div class='nav'>
                        <ul class='flex wrap show-md align-items-center'>
                            <li><nuxt-link to='/admin/account/settings'>Settings</nuxt-link></li>
                            <li><nuxt-link to='/admin/account/credits'>Credit balance</nuxt-link></li>
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
#bar {
    box-shadow: 0 0.125rem 0.125rem rgba(0,0,0,.1);
    position: relative;
    top: 0px;
    left: 0px;
    width: 100%;
    background-color: #fff;
    z-index: 99;
    height: 58px;
}
/* #setup {
    background-color: #30E7B6;
    padding: 40px;
} */

#bar > .container-narrow {
    margin-top: 0px;
    margin-bottom: 0px;
    padding: 0px 20px;
    height: 100%;
}
#bar > .container-narrow > div.flex {
    height: 100%;
}

.nav > ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
    /* font-size: 0.813em; line-height: 1.769em; */
}
.nav > ul > li > a {
    padding: 22px 22px;
    border-bottom: 1px solid transparent;
    position: relative;
    transition: 0.3s;
}
.nav > ul > li > a:hover {
    color: #39ac37;
    text-decoration: none;
}
.nav > ul > li > a.nuxt-link-exact-active {
    color: #39ac37;
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
    color: #000;
    line-height: 24px;
    font-weight: 500;
    text-decoration: none;
}

</style>
