import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6a250c71 = () => interopDefault(import('..\\..\\pages\\200.vue' /* webpackChunkName: "pages/200" */))
const _57c86d14 = () => interopDefault(import('..\\..\\pages\\403.vue' /* webpackChunkName: "pages/403" */))
const _57ac3e12 = () => interopDefault(import('..\\..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _08d7be34 = () => interopDefault(import('..\\..\\pages\\500.vue' /* webpackChunkName: "pages/500" */))
const _72858a43 = () => interopDefault(import('..\\..\\pages\\log-in\\index.vue' /* webpackChunkName: "pages/log-in/index" */))
const _50147604 = () => interopDefault(import('..\\..\\pages\\log-out\\index.vue' /* webpackChunkName: "pages/log-out/index" */))
const _6a8dac50 = () => interopDefault(import('..\\..\\pages\\sign-up\\index.vue' /* webpackChunkName: "pages/sign-up/index" */))
const _4e7d9496 = () => interopDefault(import('..\\..\\pages\\admin\\home\\index.vue' /* webpackChunkName: "pages/admin/home/index" */))
const _0d4766f1 = () => interopDefault(import('..\\..\\pages\\admin\\settings\\index.vue' /* webpackChunkName: "pages/admin/settings/index" */))
const _4d515b0c = () => interopDefault(import('..\\..\\pages\\log-in\\code.vue' /* webpackChunkName: "pages/log-in/code" */))
const _25de1652 = () => interopDefault(import('..\\..\\pages\\sign-up\\code.vue' /* webpackChunkName: "pages/sign-up/code" */))
const _d629945e = () => interopDefault(import('..\\..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _6a250c71,
    name: "200"
  }, {
    path: "/403",
    component: _57c86d14,
    name: "403"
  }, {
    path: "/404",
    component: _57ac3e12,
    name: "404"
  }, {
    path: "/500",
    component: _08d7be34,
    name: "500"
  }, {
    path: "/log-in",
    component: _72858a43,
    name: "log-in"
  }, {
    path: "/log-out",
    component: _50147604,
    name: "log-out"
  }, {
    path: "/sign-up",
    component: _6a8dac50,
    name: "sign-up"
  }, {
    path: "/admin/home",
    component: _4e7d9496,
    name: "admin-home"
  }, {
    path: "/admin/settings",
    component: _0d4766f1,
    name: "admin-settings"
  }, {
    path: "/log-in/code",
    component: _4d515b0c,
    name: "log-in-code"
  }, {
    path: "/sign-up/code",
    component: _25de1652,
    name: "sign-up-code"
  }, {
    path: "/",
    component: _d629945e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
