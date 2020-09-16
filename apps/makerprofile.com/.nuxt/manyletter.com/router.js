import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _62c92d76 = () => interopDefault(import('..\\..\\pages\\newsletter-short-summaries.vue' /* webpackChunkName: "pages/newsletter-short-summaries" */))
const _ae8835f2 = () => interopDefault(import('..\\..\\pages\\nss.vue' /* webpackChunkName: "pages/nss" */))
const _7e18076a = () => interopDefault(import('..\\..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/newsletter-short-summaries",
    component: _62c92d76,
    name: "newsletter-short-summaries"
  }, {
    path: "/nss",
    component: _ae8835f2,
    name: "nss"
  }, {
    path: "/",
    component: _7e18076a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
