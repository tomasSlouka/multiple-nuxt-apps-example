<template>
    <div class="sidenav-container">
        <div v-if="show" class="sidenav-backdrop" @click="$emit('close')"></div>
        <transition name="slide-side" mode="out-in">
            <div v-if="show" key="sidenav" class="sidenav">

              <div class='logo mb40'>
                  <nuxt-link to="/admin/home" @click="$emit('close')">
                      ManyLetter
                  </nuxt-link>
              </div>

              <ul @click="$emit('close')" class='grid col-1 gap-20'>
                  <li><nuxt-link to="/admin/home">Home</nuxt-link></li>
                  <li><nuxt-link to="/admin/creator/dashboard">Dashboard</nuxt-link></li>
                  <li><nuxt-link to="/admin/creator/messages">Messages</nuxt-link></li>
                  <li><nuxt-link to="/admin/creator/settings">Settings</nuxt-link></li>
              </ul>

              <div class='hr mt40 mb40'></div>
              
              <ul @click="$emit('close')" class='grid col-1 gap-20'>
                  <li><a @click.prevent='$auth.logout()'>Log out</a></li>
              </ul>

              <div class='hr mt40 mb40'></div>

              <p class='small'>© {{ new Date().getFullYear() }} ManyLetter</p>

            </div>
        </transition>
    </div>
</template>

<script>
export default {
  name: "TheSidenav",
  props: ['show'],
  // props: {
  //   show: {
  //     type: Boolean,
  //     default: false
  //   }
  // }
};
</script>


<style scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(231, 231, 231, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}

.sidenav > ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
}
.sidenav > ul > li > a {
    color: #000;
    font-size: 16px;
    line-height: 23px;
    font-weight: 500;
    text-decoration: none;
    transition: 0.3s;
}

.sidenav {
  height: 100%;
  width: 300px;
  background-color: white;
  z-index: 10000;
  position: fixed;
  top: 0;
  right: 0;
  box-sizing: border-box;
  padding: 30px;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(100%);
}

.logo a {
    font-size: 30px;
    line-height: 30px;
    font-weight: 700;
    font-family: 'Caveat', cursive;
    text-decoration: none;
    color: #39ac37;
}

</style>
