<template>
    <div id="topbar">
        <div class="container-standard">
            <div class='flex wrap align-items-center justify-content-space-between'>
                <div class='logo'>
                    <nuxt-link to="/admin/home">
                        ManyLetter
                    </nuxt-link>
                </div>
                <div class='nav'>
                    <ul class='flex wrap show-md align-items-center'>
                        <li><nuxt-link to="/admin/subscriber/dashboard">Dashboard</nuxt-link></li>
                        <li><nuxt-link to="/admin/subscriber/subscriptions">Subscriptions</nuxt-link></li>
                        <li><nuxt-link to="/admin/subscriber/settings">Settings</nuxt-link></li>
                        <li>|</li>
                        <li><nuxt-link to="/admin/home">Home</nuxt-link></li>
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
</template>

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
    font-size: 30px;
    line-height: 30px;
    font-weight: 700;
    font-family: 'Caveat', cursive;
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
.nav > ul > li > a.nuxt-link-active {
    color: #39ac37;
    text-decoration: underline;
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
.nav > ul > li > a {
    font-family: 'Open sans', sans-serif;
    color: #000;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    text-decoration: none;
}

</style>
