<template>
    <div class="component">

        <div class="container-standard" @mouseenter="stop()" @mouseleave="start()">

            <div class='grid gap-40 align-items-center'>
                <div class='grid lg-col-2 gap-80 align-items-center'>
                    <transition name="slide-text" mode="out-in">
                        <div v-if='isActive === 1' key='1' class='grid gap-20'>
                            <div>
                                <p class='small'>Introducing</p>
                                <h2>ManyLetter for creators</h2>
                                <p>Create a personalized newsletter for your subscribers based on the data. Start your newsletter today.</p>
                            </div>
                            <p>
                                <nuxt-link to='/creator' class='white'>Learn more</nuxt-link>
                            </p>
                        </div>

                        <div v-else key='2' class='grid gap-20'>
                            <div>
                                <p class='small'>Introducing</p>
                                <h2>ManyLetter for subscribers</h2>
                                <p>Manage your subscribtions at one place automatically. Get one email a day and don't miss important messages again.</p>
                            </div>
                            <p>
                                <nuxt-link to='/subscriber' class='white'>Learn more</nuxt-link>
                            </p>
                        </div>
                    </transition>

                    <transition name="slide-img" mode="out-in">
                        <div v-if='isActive === 1' key='1' class='relative'>
                            <img class='show-lg' src="@/assets/img/creator-screenshot.png" alt="Creator dashboard screenshot" />
                            <img class='hidden-lg' src="@/assets/img/creator-screenshot.png" alt="Creator dashboard screenshot" />
                        </div>

                        <div v-else key='2' class='relative'>
                            <img class='show-lg' src="@/assets/img/subscriber-screenshot.png" alt="Subscriber - subscriptions screenshot" />
                            <img class='hidden-lg' src="@/assets/img/subscriber-screenshot.png" alt="Subscriber - subscriptions screenshot" />
                        </div>
                    </transition>
                </div>

                <div class="navigation flex no-wrap">
                    <div @click="isActive=1" :class="[isActive == 1 ? 'active' : '']" class="tab"></div>
                    <div @click="isActive=2" :class="[isActive == 2 ? 'active' : '']" class="tab"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: 1
        }
    },
    methods: {
        increase() {
            this.isActive++
            this.isActive = this.isActive === 3 ? 1 : this.isActive;
        },
        start() {
            this.$options.interval = setInterval(this.increase, 10000);
        },
        stop() {
            clearInterval(this.$options.interval);
        },
    },
    created() {
        this.$options.interval = setInterval(this.increase, 10000);
    },
    beforeDestroy() {
        clearInterval(this.$options.interval);
    },
}
</script>

<style scoped>
.component {
    background-color: #39ac37;
    color: #fff;
    /* background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,1) 30%, rgba(48,231,182,0.46) 100%); */
    padding: 10px;
}
img {
    box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,.15);
}
.container-standard {
    margin-top: 40px;
    margin-bottom: 40px;
}

.navigation > .tab {
    border-radius: 10px;
    height: 6px;
    width: 6px;
    background-color: #fff;
    padding: 3px;
    border: 3px solid #fff;
    margin: 5px;
    cursor: pointer;
}
.navigation > .tab:hover, .navigation > .tab.active {
    border-radius: 10px;
    height: 6px;
    width: 6px;
    background-color: #ccc;
    padding: 3px;
    border: 3px solid #fff;
}

img.show-lg {
    position: absolute;
    top: -207px;
    width: 163%;
}

img.hidden-lg {
    width: 163%;
}

.slide-text-enter-active,
.slide-text-leave-active {
  transition: all 0.4s ease-out;
  opacity: 1;
}
.slide-text-enter,
.slide-text-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-img-enter-active,
.slide-img-leave-active {
  transition: all 0.5s ease-out;
  opacity: 1;
}
.slide-img-enter,
.slide-img-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
