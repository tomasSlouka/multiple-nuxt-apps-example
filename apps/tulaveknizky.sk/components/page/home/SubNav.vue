<template>
    <div class="component">
        <div class="container-standard grid align-items-center justify-items-end">
            
            <!-- <div class='show-md justify-self-start'>
                <p class='small'>
                    {{$store.state.auth.userData.nickname}} | 
                    {{$store.state.auth.userData.credit ? $store.state.auth.userData.credit : "0"}}
                </p>
            </div> -->
            
            <div class='flex wrap align-items-center justify-content-space-between'>
                <div class='nav'>
                    <ul class='flex wrap show-md align-items-center'>
                        <li><nuxt-link to='/ako-to-funguje' class='small'>Ako to funguje?</nuxt-link></li>
                        <li><nuxt-link to='/nas-pribeh' class='small'>Náš príbeh</nuxt-link></li>
                        <li><nuxt-link to='/blog' class='small'>Náš blog</nuxt-link></li>
                        <li><nuxt-link to='/newsletter' class='small'>Novinky emailom</nuxt-link></li>
                    </ul>
                </div>
            </div>

        </div>
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
.component {
    background-color: #ffffff;
    /* border-bottom: 2px solid #ccc; */
    box-shadow: 0 0.125rem 0.125rem rgba(0,0,0,.1);
    border-top: 1px solid #eee;
    position: relative;
}
.container-standard {
    margin-top: 0px;
    margin-bottom: 0px;
    padding: 0px 20px;
    height: 100%;
}
.container-standard > div.flex {
    height: 100%;
}
.nav > ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
}
.nav > ul > li > a {
    padding: 10px 16px;
    border-bottom: 1px solid transparent;
    position: relative;
    top: 0px;
    transition: 0.2s;
    /* transition: left .2s; */
    display: inline-block;
    color: #000;
}
.nav > ul > li > a:hover {
    color: #000;
    text-decoration: none;
    position: relative;
    top: 2px;
}
.nav > ul > li > a.nuxt-link-exact-active,
.nav > ul > li > a.nuxt-link-active {
    color: #000;
    text-decoration: none;
    font-weight: 600;
}
.nav > ul > li > a {
    color: #000000b8;
    line-height: 24px;
    text-decoration: none;
}
</style>
