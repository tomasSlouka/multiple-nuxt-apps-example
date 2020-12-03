import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ee460050 = () => interopDefault(import('..\\..\\pages\\200.vue' /* webpackChunkName: "pages/200" */))
const _1a588646 = () => interopDefault(import('..\\..\\pages\\403.vue' /* webpackChunkName: "pages/403" */))
const _1a3c5744 = () => interopDefault(import('..\\..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _278fb19b = () => interopDefault(import('..\\..\\pages\\500.vue' /* webpackChunkName: "pages/500" */))
const _4bf89126 = () => interopDefault(import('..\\..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _0af076c5 = () => interopDefault(import('..\\..\\pages\\knihy\\index.vue' /* webpackChunkName: "pages/knihy/index" */))
const _f99f9130 = () => interopDefault(import('..\\..\\pages\\odhlasenie\\index.vue' /* webpackChunkName: "pages/odhlasenie/index" */))
const _d179b20c = () => interopDefault(import('..\\..\\pages\\prihlasenie\\index.vue' /* webpackChunkName: "pages/prihlasenie/index" */))
const _3f3bbc66 = () => interopDefault(import('..\\..\\pages\\registracia\\index.vue' /* webpackChunkName: "pages/registracia/index" */))
const _99c45d44 = () => interopDefault(import('..\\..\\pages\\knihy\\najnovsie\\index.vue' /* webpackChunkName: "pages/knihy/najnovsie/index" */))
const _74d31b1d = () => interopDefault(import('..\\..\\pages\\knihy\\najoblubenejsie\\index.vue' /* webpackChunkName: "pages/knihy/najoblubenejsie/index" */))
const _4fe2f96b = () => interopDefault(import('..\\..\\pages\\knihy\\vsetky\\index.vue' /* webpackChunkName: "pages/knihy/vsetky/index" */))
const _5abc6916 = () => interopDefault(import('..\\..\\pages\\prihlasenie\\code.vue' /* webpackChunkName: "pages/prihlasenie/code" */))
const _606a4eee = () => interopDefault(import('..\\..\\pages\\registracia\\code.vue' /* webpackChunkName: "pages/registracia/code" */))
const _7263a580 = () => interopDefault(import('..\\..\\pages\\admin\\account\\credits\\index.vue' /* webpackChunkName: "pages/admin/account/credits/index" */))
const _3459fd77 = () => interopDefault(import('..\\..\\pages\\admin\\account\\settings\\index.vue' /* webpackChunkName: "pages/admin/account/settings/index" */))
const _01887fa2 = () => interopDefault(import('..\\..\\pages\\admin\\maker\\details\\index.vue' /* webpackChunkName: "pages/admin/maker/details/index" */))
const _6cf897a9 = () => interopDefault(import('..\\..\\pages\\admin\\maker\\portfolio\\index.vue' /* webpackChunkName: "pages/admin/maker/portfolio/index" */))
const _97f90d3c = () => interopDefault(import('..\\..\\pages\\admin\\team\\details\\index.vue' /* webpackChunkName: "pages/admin/team/details/index" */))
const _48c473aa = () => interopDefault(import('..\\..\\pages\\admin\\team\\members\\index.vue' /* webpackChunkName: "pages/admin/team/members/index" */))
const _4c5c11d3 = () => interopDefault(import('..\\..\\pages\\pouzivatel\\knihy\\kosik\\index.vue' /* webpackChunkName: "pages/pouzivatel/knihy/kosik/index" */))
const _124e0a5e = () => interopDefault(import('..\\..\\pages\\user\\knihy\\hodnotene\\index.vue' /* webpackChunkName: "pages/user/knihy/hodnotene/index" */))
const _2eb0dd9a = () => interopDefault(import('..\\..\\pages\\user\\knihy\\kosik\\index.vue' /* webpackChunkName: "pages/user/knihy/kosik/index" */))
const _4308ef75 = () => interopDefault(import('..\\..\\pages\\user\\knihy\\rezervovane\\index.vue' /* webpackChunkName: "pages/user/knihy/rezervovane/index" */))
const _0ef41eca = () => interopDefault(import('..\\..\\pages\\user\\knihy\\vypozicane\\index.vue' /* webpackChunkName: "pages/user/knihy/vypozicane/index" */))
const _3306cdeb = () => interopDefault(import('..\\..\\pages\\user\\knihy\\wishlist\\index.vue' /* webpackChunkName: "pages/user/knihy/wishlist/index" */))
const _6bb0e53c = () => interopDefault(import('..\\..\\pages\\user\\ucet\\kredity\\index.vue' /* webpackChunkName: "pages/user/ucet/kredity/index" */))
const _d02d7a34 = () => interopDefault(import('..\\..\\pages\\user\\ucet\\nastavenia\\index.vue' /* webpackChunkName: "pages/user/ucet/nastavenia/index" */))
const _35182910 = () => interopDefault(import('..\\..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _ee460050,
    name: "200"
  }, {
    path: "/403",
    component: _1a588646,
    name: "403"
  }, {
    path: "/404",
    component: _1a3c5744,
    name: "404"
  }, {
    path: "/500",
    component: _278fb19b,
    name: "500"
  }, {
    path: "/admin",
    component: _4bf89126,
    name: "admin"
  }, {
    path: "/knihy",
    component: _0af076c5,
    name: "knihy"
  }, {
    path: "/odhlasenie",
    component: _f99f9130,
    name: "odhlasenie"
  }, {
    path: "/prihlasenie",
    component: _d179b20c,
    name: "prihlasenie"
  }, {
    path: "/registracia",
    component: _3f3bbc66,
    name: "registracia"
  }, {
    path: "/knihy/najnovsie",
    component: _99c45d44,
    name: "knihy-najnovsie"
  }, {
    path: "/knihy/najoblubenejsie",
    component: _74d31b1d,
    name: "knihy-najoblubenejsie"
  }, {
    path: "/knihy/vsetky",
    component: _4fe2f96b,
    name: "knihy-vsetky"
  }, {
    path: "/prihlasenie/code",
    component: _5abc6916,
    name: "prihlasenie-code"
  }, {
    path: "/registracia/code",
    component: _606a4eee,
    name: "registracia-code"
  }, {
    path: "/admin/account/credits",
    component: _7263a580,
    name: "admin-account-credits"
  }, {
    path: "/admin/account/settings",
    component: _3459fd77,
    name: "admin-account-settings"
  }, {
    path: "/admin/maker/details",
    component: _01887fa2,
    name: "admin-maker-details"
  }, {
    path: "/admin/maker/portfolio",
    component: _6cf897a9,
    name: "admin-maker-portfolio"
  }, {
    path: "/admin/team/details",
    component: _97f90d3c,
    name: "admin-team-details"
  }, {
    path: "/admin/team/members",
    component: _48c473aa,
    name: "admin-team-members"
  }, {
    path: "/pouzivatel/knihy/kosik",
    component: _4c5c11d3,
    name: "pouzivatel-knihy-kosik"
  }, {
    path: "/user/knihy/hodnotene",
    component: _124e0a5e,
    name: "user-knihy-hodnotene"
  }, {
    path: "/user/knihy/kosik",
    component: _2eb0dd9a,
    name: "user-knihy-kosik"
  }, {
    path: "/user/knihy/rezervovane",
    component: _4308ef75,
    name: "user-knihy-rezervovane"
  }, {
    path: "/user/knihy/vypozicane",
    component: _0ef41eca,
    name: "user-knihy-vypozicane"
  }, {
    path: "/user/knihy/wishlist",
    component: _3306cdeb,
    name: "user-knihy-wishlist"
  }, {
    path: "/user/ucet/kredity",
    component: _6bb0e53c,
    name: "user-ucet-kredity"
  }, {
    path: "/user/ucet/nastavenia",
    component: _d02d7a34,
    name: "user-ucet-nastavenia"
  }, {
    path: "/",
    component: _35182910,
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
