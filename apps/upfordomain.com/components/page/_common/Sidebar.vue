<template>
    <div class="sidenav-container">
        <div v-show="show" class="sidenav-backdrop" @click="$emit('close')"></div>
        <transition name="slide-side">
            <div v-show="show" class="sidenav">

              <div class='logo mb40'>
                  <nuxt-link to="/" @click="$emit('close')">
                      upfordomain
                  </nuxt-link>
              </div>

              <ul @click="$emit('close')" class='grid col-1 gap-20'>
                  <li><nuxt-link to="/">Home</nuxt-link></li>
                  <li><nuxt-link to="/domains/browse">Browse domain names</nuxt-link></li>
                  <li><nuxt-link to="/domain/add" class='new mr10'>Domain appraisal<span class='new-label'>new</span></nuxt-link></li>
                  <li><nuxt-link to="/domain/add">List my domain</nuxt-link></li>
                  <!-- <li><nuxt-link to="/get-domain-price">get domain price</nuxt-link></li> -->
                  <!-- <li><nuxt-link to="/faq">FAQ</nuxt-link></li> -->
                  <!-- <li><nuxt-link to="/subscriber">Subscriber</nuxt-link></li> -->
                  <!-- <li><nuxt-link to="/pricing">Pricing</nuxt-link></li> -->
              </ul>

              <div class='hr mt25 mb25'></div>
              
              <ul @click="$emit('close')" class='grid col-1 gap-20'>
                  <li><a href="https://app.upfordomain.com/">Log in</a></li>
              </ul>

              <div class='hr mt25 mb25'></div>
              
              <ul @click="$emit('close')" class='grid col-1 gap-20'>
                  <li><a href="https://discord.gg/5TmNWAQJbF" class='new'>Community<span class='new-label-2'>new</span></a></li>
              </ul>

              <div class='hr mt25 mb25'></div>

              <p class='small'>© {{ new Date().getFullYear() }} upfordomain.com</p>

            </div>
        </transition>
    </div>
</template>

<script>
export default {
  name: "TheSidenav",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
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
.new {
    position: relative;
}
.new > span.new-label {
    position: absolute;
    top: -10px;
    left: 135px;
    background-color: #39ac37;
    border: 0px;
    border-radius: 4px;
    color: #fff;
    font-size: 10px;
    padding: 4px 8px;
    line-height: 12px;
}
.new > span.new-label-2 {
    position: absolute;
    top: -10px;
    left: 92px;
    background-color: #39ac37;
    border: 0px;
    border-radius: 4px;
    color: #fff;
    font-size: 10px;
    padding: 4px 8px;
    line-height: 12px;
}
</style>
