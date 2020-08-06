import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0fa24f50 = () => interopDefault(import('..\\..\\pages\\200.vue' /* webpackChunkName: "pages/200" */))
const _6225955d = () => interopDefault(import('..\\..\\pages\\403.vue' /* webpackChunkName: "pages/403" */))
const _6233acde = () => interopDefault(import('..\\..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _d23cebca = () => interopDefault(import('..\\..\\pages\\500.vue' /* webpackChunkName: "pages/500" */))
const _7d6ae16a = () => interopDefault(import('..\\..\\pages\\log-in\\index.vue' /* webpackChunkName: "pages/log-in/index" */))
const _29bb52b7 = () => interopDefault(import('..\\..\\pages\\log-out\\index.vue' /* webpackChunkName: "pages/log-out/index" */))
const _1c7eb791 = () => interopDefault(import('..\\..\\pages\\sign-up\\index.vue' /* webpackChunkName: "pages/sign-up/index" */))
const _beb7a8ac = () => interopDefault(import('..\\..\\pages\\admin\\settings\\index.vue' /* webpackChunkName: "pages/admin/settings/index" */))
const _24610305 = () => interopDefault(import('..\\..\\pages\\log-in\\code.vue' /* webpackChunkName: "pages/log-in/code" */))
const _10136804 = () => interopDefault(import('..\\..\\pages\\sign-up\\code.vue' /* webpackChunkName: "pages/sign-up/code" */))
const _6c67733c = () => interopDefault(import('..\\..\\pages\\admin\\domain\\detail\\_id\\index.vue' /* webpackChunkName: "pages/admin/domain/detail/_id/index" */))
const _709cb810 = () => interopDefault(import('..\\..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0fa24f50,
    name: "200"
  }, {
    path: "/403",
    component: _6225955d,
    name: "403"
  }, {
    path: "/404",
    component: _6233acde,
    name: "404"
  }, {
    path: "/500",
    component: _d23cebca,
    name: "500"
  }, {
    path: "/log-in",
    component: _7d6ae16a,
    name: "log-in"
  }, {
    path: "/log-out",
    component: _29bb52b7,
    name: "log-out"
  }, {
    path: "/sign-up",
    component: _1c7eb791,
    name: "sign-up"
  }, {
    path: "/admin/settings",
    component: _beb7a8ac,
    name: "admin-settings"
  }, {
    path: "/log-in/code",
    component: _24610305,
    name: "log-in-code"
  }, {
    path: "/sign-up/code",
    component: _10136804,
    name: "sign-up-code"
  }, {
    path: "/admin/domain/detail/:id?",
    component: _6c67733c,
    name: "admin-domain-detail-id"
  }, {
    path: "/",
    component: _709cb810,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
