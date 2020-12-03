import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1e055664 = () => interopDefault(import('..\\..\\..\\..\\pages\\categories.vue' /* webpackChunkName: "pages/categories" */))
const _25f174f6 = () => interopDefault(import('..\\..\\..\\..\\pages\\r\\how-to-start-a-newsletter.vue' /* webpackChunkName: "pages/r/how-to-start-a-newsletter" */))
const _b43c1fe0 = () => interopDefault(import('..\\..\\..\\..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/categories",
    component: _1e055664,
    name: "categories"
  }, {
    path: "/r/how-to-start-a-newsletter",
    component: _25f174f6,
    name: "r-how-to-start-a-newsletter"
  }, {
    path: "/",
    component: _b43c1fe0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
