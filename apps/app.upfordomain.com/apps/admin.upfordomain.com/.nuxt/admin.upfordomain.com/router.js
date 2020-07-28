import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4047b642 = () => interopDefault(import('..\\..\\..\\..\\pages\\200.vue' /* webpackChunkName: "pages/200" */))
const _49d2e1e4 = () => interopDefault(import('..\\..\\..\\..\\pages\\403.vue' /* webpackChunkName: "pages/403" */))
const _49e0f965 = () => interopDefault(import('..\\..\\..\\..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _7e8ed6a2 = () => interopDefault(import('..\\..\\..\\..\\pages\\500.vue' /* webpackChunkName: "pages/500" */))
const _4af91d9e = () => interopDefault(import('..\\..\\..\\..\\pages\\log-in\\index.vue' /* webpackChunkName: "pages/log-in/index" */))
const _6fb4bbd0 = () => interopDefault(import('..\\..\\..\\..\\pages\\log-out\\index.vue' /* webpackChunkName: "pages/log-out/index" */))
const _627820aa = () => interopDefault(import('..\\..\\..\\..\\pages\\sign-up\\index.vue' /* webpackChunkName: "pages/sign-up/index" */))
const _10b718f2 = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\home\\index.vue' /* webpackChunkName: "pages/admin/home/index" */))
const _69d36bc3 = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\settings\\index.vue' /* webpackChunkName: "pages/admin/settings/index" */))
const _2fa3de5e = () => interopDefault(import('..\\..\\..\\..\\pages\\log-in\\code.vue' /* webpackChunkName: "pages/log-in/code" */))
const _550edbc5 = () => interopDefault(import('..\\..\\..\\..\\pages\\sign-up\\code.vue' /* webpackChunkName: "pages/sign-up/code" */))
const _793deabf = () => interopDefault(import('..\\..\\..\\..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/200",
    component: _4047b642,
    name: "200"
  }, {
    path: "/403",
    component: _49d2e1e4,
    name: "403"
  }, {
    path: "/404",
    component: _49e0f965,
    name: "404"
  }, {
    path: "/500",
    component: _7e8ed6a2,
    name: "500"
  }, {
    path: "/log-in",
    component: _4af91d9e,
    name: "log-in"
  }, {
    path: "/log-out",
    component: _6fb4bbd0,
    name: "log-out"
  }, {
    path: "/sign-up",
    component: _627820aa,
    name: "sign-up"
  }, {
    path: "/admin/home",
    component: _10b718f2,
    name: "admin-home"
  }, {
    path: "/admin/settings",
    component: _69d36bc3,
    name: "admin-settings"
  }, {
    path: "/log-in/code",
    component: _2fa3de5e,
    name: "log-in-code"
  }, {
    path: "/sign-up/code",
    component: _550edbc5,
    name: "sign-up-code"
  }, {
    path: "/",
    component: _793deabf,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
