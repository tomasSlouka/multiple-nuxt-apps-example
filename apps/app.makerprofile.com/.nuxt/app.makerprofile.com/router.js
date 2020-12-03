import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _55138778 = () => interopDefault(import('..\\..\\pages\\200.vue' /* webpackChunkName: "pages/200" */))
const _81eb7706 = () => interopDefault(import('..\\..\\pages\\403.vue' /* webpackChunkName: "pages/403" */))
const _81cf4804 = () => interopDefault(import('..\\..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _18738d8a = () => interopDefault(import('..\\..\\pages\\500.vue' /* webpackChunkName: "pages/500" */))
const _0017288a = () => interopDefault(import('..\\..\\pages\\log-in\\index.vue' /* webpackChunkName: "pages/log-in/index" */))
const _06d020d2 = () => interopDefault(import('..\\..\\pages\\log-out\\index.vue' /* webpackChunkName: "pages/log-out/index" */))
const _2149571e = () => interopDefault(import('..\\..\\pages\\sign-up\\index.vue' /* webpackChunkName: "pages/sign-up/index" */))
const _75015036 = () => interopDefault(import('..\\..\\pages\\log-in\\code.vue' /* webpackChunkName: "pages/log-in/code" */))
const _7aa2931e = () => interopDefault(import('..\\..\\pages\\sign-up\\code.vue' /* webpackChunkName: "pages/sign-up/code" */))
const _71f559e0 = () => interopDefault(import('..\\..\\pages\\admin\\account\\credits\\index.vue' /* webpackChunkName: "pages/admin/account/credits/index" */))
const _26fed517 = () => interopDefault(import('..\\..\\pages\\admin\\account\\settings\\index.vue' /* webpackChunkName: "pages/admin/account/settings/index" */))
const _0321e6e2 = () => interopDefault(import('..\\..\\pages\\admin\\maker\\details\\index.vue' /* webpackChunkName: "pages/admin/maker/details/index" */))
const _6c8a4c09 = () => interopDefault(import('..\\..\\pages\\admin\\maker\\portfolio\\index.vue' /* webpackChunkName: "pages/admin/maker/portfolio/index" */))
const _55f5bdfc = () => interopDefault(import('..\\..\\pages\\admin\\team\\details\\index.vue' /* webpackChunkName: "pages/admin/team/details/index" */))
const _06c1246a = () => interopDefault(import('..\\..\\pages\\admin\\team\\members\\index.vue' /* webpackChunkName: "pages/admin/team/members/index" */))
const _7e270b18 = () => interopDefault(import('..\\..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/200",
    component: _55138778,
    name: "200"
  }, {
    path: "/403",
    component: _81eb7706,
    name: "403"
  }, {
    path: "/404",
    component: _81cf4804,
    name: "404"
  }, {
    path: "/500",
    component: _18738d8a,
    name: "500"
  }, {
    path: "/log-in",
    component: _0017288a,
    name: "log-in"
  }, {
    path: "/log-out",
    component: _06d020d2,
    name: "log-out"
  }, {
    path: "/sign-up",
    component: _2149571e,
    name: "sign-up"
  }, {
    path: "/log-in/code",
    component: _75015036,
    name: "log-in-code"
  }, {
    path: "/sign-up/code",
    component: _7aa2931e,
    name: "sign-up-code"
  }, {
    path: "/admin/account/credits",
    component: _71f559e0,
    name: "admin-account-credits"
  }, {
    path: "/admin/account/settings",
    component: _26fed517,
    name: "admin-account-settings"
  }, {
    path: "/admin/maker/details",
    component: _0321e6e2,
    name: "admin-maker-details"
  }, {
    path: "/admin/maker/portfolio",
    component: _6c8a4c09,
    name: "admin-maker-portfolio"
  }, {
    path: "/admin/team/details",
    component: _55f5bdfc,
    name: "admin-team-details"
  }, {
    path: "/admin/team/members",
    component: _06c1246a,
    name: "admin-team-members"
  }, {
    path: "/",
    component: _7e270b18,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  const router = new Router(routerOptions)
  const resolve = router.resolve.bind(router)

  // encodeURI(decodeURI()) ~> support both encoded and non-encoded urls
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = encodeURI(decodeURI(to))
    }
    return resolve(to, current, append)
  }

  return router
}
