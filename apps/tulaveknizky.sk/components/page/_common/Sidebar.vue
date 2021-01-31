<template>
    <div class="sidenav-container">
        <div v-show="show" class="sidenav-backdrop" @click="$emit('close')"></div>
        <transition name="slide-side">
            <div v-show="show" class="sidenav grid gap-20 align-content-start">

              <div class='logo justify-self-start'>
                  <nuxt-link class='grid gap-10 col-2 auto align-items-center' to="/">
                      <img src="@/assets/img/logo-icon.svg" alt="" class='logo-icon' />
                      <img src="@/assets/img/logo.svg" alt="" class='logo-text' />
                  </nuxt-link>
              </div>
              <div class="hr"></div>

              <ul v-if="$store.getters['auth/isUserLoggedIn']" class='grid col-1 gap-20'>
                <!-- <li><nuxt-link to='/admin'>{{$store.state.auth.userData.name}}</nuxt-link></li> -->
                <!-- <li>{{showLevel}}</li> -->

                <!-- SPAT -->
                <li v-if="showLevel" @click='changeLinkLevel(null)'>Späť</li>
                <div class='hr' v-if="showLevel"></div>
                <!-- SPAT -->

                <!-- KNIZNICA -->
                <li v-if="showLevel === null" @click='changeLinkLevel("knihy")'>Knižnica</li>
                <li v-if="showLevel === 'knihy'" @click="$emit('close')"><nuxt-link to='/knihy/vsetky'>Všetky knižky</nuxt-link></li>
                <li v-if="showLevel === 'knihy'" @click="$emit('close')"><nuxt-link to='/knihy/najnovsie'>Najnovšie knižky</nuxt-link></li>
                <li v-if="showLevel === 'knihy'" @click="$emit('close')"><nuxt-link to='/knihy/najoblubenejsie'>Najobľúbenejšie knižky</nuxt-link></li>
                <!-- <div class='hr' v-if="showLevel === null"></div> -->
                <!-- KNIZNICA -->

                <!-- ADMINISTRACIA -->
                <li v-if="showLevel === null && $store.state.auth.userData.level == 104" @click='changeLinkLevel("admin")'>Administrácia</li>
                <li v-if="showLevel === 'admin'" @click="$emit('close')"><nuxt-link to='/admin/orders' class='small'>Objednávky</nuxt-link></li>
                <li v-if="showLevel === 'admin'" @click="$emit('close')"><nuxt-link to='/admin/categories' class='small'>Kategórie</nuxt-link></li>
                <li v-if="showLevel === 'admin'" @click="$emit('close')"><nuxt-link to='/admin/tags' class='small'>Značky</nuxt-link></li>
                <li v-if="showLevel === 'admin'" @click="$emit('close')"><nuxt-link to='/admin/titles' class='small'>Knižné tituly</nuxt-link></li>
                <li v-if="showLevel === 'admin'" @click="$emit('close')"><nuxt-link to='/admin/storage' class='small'>Sklad</nuxt-link></li>
                <li v-if="showLevel === 'admin'" @click="$emit('close')"><nuxt-link to='/admin/users' class='small'>Používatelia</nuxt-link></li>
                <!-- ADMINISTRACIA -->
                
                <!-- MOJE KNIZKY -->
                <li v-if="showLevel === null" @click='changeLinkLevel("mojeknizky")'>Moje knižky</li>
                <li v-if="showLevel === 'mojeknizky'" @click="$emit('close')"><nuxt-link to='/user/books/basket' class='small'>Košík</nuxt-link></li>
                <li v-if="showLevel === 'mojeknizky'" @click="$emit('close')"><nuxt-link to='/user/books/borrowed' class='small'>Požičané knižky</nuxt-link></li>
                <li v-if="showLevel === 'mojeknizky'" @click="$emit('close')"><nuxt-link to='/user/books/rated' class='small'>Hodnotené knižky</nuxt-link></li>
                <li v-if="showLevel === 'mojeknizky'" @click="$emit('close')"><nuxt-link to='/user/books/reserved' class='small'>Rezervované knižky</nuxt-link></li>
                <li v-if="showLevel === 'mojeknizky'" @click="$emit('close')"><nuxt-link to='/user/books/wishlist' class='small'>Wishlist</nuxt-link></li>
                <!-- MOJE KNIZKY -->

                <!-- MOJ UCET -->
                <li v-if="showLevel === null" @click='changeLinkLevel("mojucet")'>Môj účet</li>
                <li v-if="showLevel === 'mojucet'" @click="$emit('close')"><nuxt-link to='/user/account/settings' class='small'>Nastavenia</nuxt-link></li>
                <li v-if="showLevel === 'mojucet'" @click="$emit('close')"><nuxt-link to='/user/account/credits' class='small'>Kredity</nuxt-link></li>
                <!-- MOJ UCET -->

                <li v-if="showLevel === null" @click='changeLinkLevel("viac")'>viac ...</li>
                <li v-if="showLevel === 'viac'" @click="$emit('close')"><nuxt-link to='/ako-to-funguje' class='small'>Ako to funguje?</nuxt-link></li>
                <li v-if="showLevel === 'viac'" @click="$emit('close')"><nuxt-link to='/nas-pribeh' class='small'>Náš príbeh</nuxt-link></li>
                <li v-if="showLevel === 'viac'" @click="$emit('close')"><nuxt-link to='/blog' class='small'>Náš blog</nuxt-link></li>
                <li v-if="showLevel === 'viac'" @click="$emit('close')"><nuxt-link to='/newsletter' class='small'>Novinky emailom</nuxt-link></li>

                <div v-if="showLevel === null" class="hr"></div>
                <li v-if="showLevel === null"><a @click.prevent='logout()'>Odhlásiť sa</a></li>

              </ul>
              <ul v-else class='grid col-1 gap-20'>
                <li><nuxt-link to='/knihy'>Knižnica</nuxt-link></li>
                <div class="hr"></div>
                <li><nuxt-link to='/prihlasenie'>Prihlásenie</nuxt-link></li>
                <li><nuxt-link to="/registracia">Registrácia</nuxt-link></li>
              </ul>

              <!-- <ul @click="$emit('close')" class='grid col-1 gap-20'> -->
                <!-- <li><a href='https://app.manyletter.com/sign-up'>Request access</a></li> -->
                <!-- <li><nuxt-link to='/'>Hlavná stránka</nuxt-link></li> -->
              <!-- </ul> -->

              <!-- <div class='hr mt40 mb40'></div> -->
              
              <!-- <ul @click="$emit('close')" class='grid col-1 gap-20'> -->
                  <!-- <li><a href="https://app.manyletter.com/sign-up">Sign up</a></li> -->
                  <!-- <li><a href="https://app.manyletter.com/">Log in</a></li> -->
                  <!-- <li v-if='$store.getters.isUserLoggedIn'><nuxt-link to="/admin/home" class='flex nowrap align-items-center'> {{ ($store.state.userData == null) ? "Go to Admin" : "Continue as " + $store.state.userData.name + "" }}</nuxt-link></li> -->
                  <!-- <li v-else><nuxt-link to="/log-in">Log in</nuxt-link></li> -->
                  
                  <!-- <li v-if='$store.getters.isUserLoggedIn'><a @click.prevent='$store.dispatch("logout")'>Log out</a></li> -->
                  <!-- <li v-else><nuxt-link to="/sign-up">Sign Up</nuxt-link></li> -->
              <!-- </ul> -->

              <!-- <div class='hr mt40 mb40'></div> -->
              <div class="hr"></div>
              <p class='small'>© {{ new Date().getFullYear() }} tulaveknizky.sk</p>

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
  },
  data() {
    return {
      showLevel: null
    }
  },
  methods: {
      changeLinkLevel(level) {
        this.showLevel = level
      },
      logout() {
          console.log('logout')
          this.$store.dispatch('auth/logout')
          .then(() => {
              this.$router.push('/odhlasenie')
          })
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

</style>
