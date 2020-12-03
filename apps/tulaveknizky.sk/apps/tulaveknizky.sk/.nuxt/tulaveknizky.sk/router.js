import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ee460050 = () => interopDefault(import('..\\..\\..\\..\\pages\\200.vue' /* webpackChunkName: "pages/200" */))
const _1a588646 = () => interopDefault(import('..\\..\\..\\..\\pages\\403.vue' /* webpackChunkName: "pages/403" */))
const _1a3c5744 = () => interopDefault(import('..\\..\\..\\..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _278fb19b = () => interopDefault(import('..\\..\\..\\..\\pages\\500.vue' /* webpackChunkName: "pages/500" */))
const _5fa6254b = () => interopDefault(import('..\\..\\..\\..\\pages\\administracia\\index.vue' /* webpackChunkName: "pages/administracia/index" */))
const _0af076c5 = () => interopDefault(import('..\\..\\..\\..\\pages\\knihy\\index.vue' /* webpackChunkName: "pages/knihy/index" */))
const _f99f9130 = () => interopDefault(import('..\\..\\..\\..\\pages\\odhlasenie\\index.vue' /* webpackChunkName: "pages/odhlasenie/index" */))
const _d179b20c = () => interopDefault(import('..\\..\\..\\..\\pages\\prihlasenie\\index.vue' /* webpackChunkName: "pages/prihlasenie/index" */))
const _3f3bbc66 = () => interopDefault(import('..\\..\\..\\..\\pages\\registracia\\index.vue' /* webpackChunkName: "pages/registracia/index" */))
const _99c45d44 = () => interopDefault(import('..\\..\\..\\..\\pages\\knihy\\najnovsie\\index.vue' /* webpackChunkName: "pages/knihy/najnovsie/index" */))
const _74d31b1d = () => interopDefault(import('..\\..\\..\\..\\pages\\knihy\\najoblubenejsie\\index.vue' /* webpackChunkName: "pages/knihy/najoblubenejsie/index" */))
const _4fe2f96b = () => interopDefault(import('..\\..\\..\\..\\pages\\knihy\\vsetky\\index.vue' /* webpackChunkName: "pages/knihy/vsetky/index" */))
const _5abc6916 = () => interopDefault(import('..\\..\\..\\..\\pages\\prihlasenie\\code.vue' /* webpackChunkName: "pages/prihlasenie/code" */))
const _606a4eee = () => interopDefault(import('..\\..\\..\\..\\pages\\registracia\\code.vue' /* webpackChunkName: "pages/registracia/code" */))
const _78e597de = () => interopDefault(import('..\\..\\..\\..\\pages\\administracia\\account\\credits\\index.vue' /* webpackChunkName: "pages/administracia/account/credits/index" */))
const _03d3524e = () => interopDefault(import('..\\..\\..\\..\\pages\\administracia\\account\\settings\\index.vue' /* webpackChunkName: "pages/administracia/account/settings/index" */))
const _47b2b20d = () => interopDefault(import('..\\..\\..\\..\\pages\\administracia\\maker\\details\\index.vue' /* webpackChunkName: "pages/administracia/maker/details/index" */))
const _737a8a07 = () => interopDefault(import('..\\..\\..\\..\\pages\\administracia\\maker\\portfolio\\index.vue' /* webpackChunkName: "pages/administracia/maker/portfolio/index" */))
const _a3d05878 = () => interopDefault(import('..\\..\\..\\..\\pages\\administracia\\team\\details\\index.vue' /* webpackChunkName: "pages/administracia/team/details/index" */))
const _549bbee6 = () => interopDefault(import('..\\..\\..\\..\\pages\\administracia\\team\\members\\index.vue' /* webpackChunkName: "pages/administracia/team/members/index" */))
const _dedd8a04 = () => interopDefault(import('..\\..\\..\\..\\pages\\pouzivatel\\knihy\\hodnotene\\index.vue' /* webpackChunkName: "pages/pouzivatel/knihy/hodnotene/index" */))
const _4c5c11d3 = () => interopDefault(import('..\\..\\..\\..\\pages\\pouzivatel\\knihy\\kosik\\index.vue' /* webpackChunkName: "pages/pouzivatel/knihy/kosik/index" */))
const _3d427815 = () => interopDefault(import('..\\..\\..\\..\\pages\\pouzivatel\\knihy\\rezervovane\\index.vue' /* webpackChunkName: "pages/pouzivatel/knihy/rezervovane/index" */))
const _5917022a = () => interopDefault(import('..\\..\\..\\..\\pages\\pouzivatel\\knihy\\vypozicane\\index.vue' /* webpackChunkName: "pages/pouzivatel/knihy/vypozicane/index" */))
const _0569ed6a = () => interopDefault(import('..\\..\\..\\..\\pages\\pouzivatel\\knihy\\wishlist\\index.vue' /* webpackChunkName: "pages/pouzivatel/knihy/wishlist/index" */))
const _7e8c789c = () => interopDefault(import('..\\..\\..\\..\\pages\\pouzivatel\\ucet\\kredity\\index.vue' /* webpackChunkName: "pages/pouzivatel/ucet/kredity/index" */))
const _162c7386 = () => interopDefault(import('..\\..\\..\\..\\pages\\pouzivatel\\ucet\\nastavenia\\index.vue' /* webpackChunkName: "pages/pouzivatel/ucet/nastavenia/index" */))
const _35182910 = () => interopDefault(import('..\\..\\..\\..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/administracia",
    component: _5fa6254b,
    name: "administracia"
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
    path: "/administracia/account/credits",
    component: _78e597de,
    name: "administracia-account-credits"
  }, {
    path: "/administracia/account/settings",
    component: _03d3524e,
    name: "administracia-account-settings"
  }, {
    path: "/administracia/maker/details",
    component: _47b2b20d,
    name: "administracia-maker-details"
  }, {
    path: "/administracia/maker/portfolio",
    component: _737a8a07,
    name: "administracia-maker-portfolio"
  }, {
    path: "/administracia/team/details",
    component: _a3d05878,
    name: "administracia-team-details"
  }, {
    path: "/administracia/team/members",
    component: _549bbee6,
    name: "administracia-team-members"
  }, {
    path: "/pouzivatel/knihy/hodnotene",
    component: _dedd8a04,
    name: "pouzivatel-knihy-hodnotene"
  }, {
    path: "/pouzivatel/knihy/kosik",
    component: _4c5c11d3,
    name: "pouzivatel-knihy-kosik"
  }, {
    path: "/pouzivatel/knihy/rezervovane",
    component: _3d427815,
    name: "pouzivatel-knihy-rezervovane"
  }, {
    path: "/pouzivatel/knihy/vypozicane",
    component: _5917022a,
    name: "pouzivatel-knihy-vypozicane"
  }, {
    path: "/pouzivatel/knihy/wishlist",
    component: _0569ed6a,
    name: "pouzivatel-knihy-wishlist"
  }, {
    path: "/pouzivatel/ucet/kredity",
    component: _7e8c789c,
    name: "pouzivatel-ucet-kredity"
  }, {
    path: "/pouzivatel/ucet/nastavenia",
    component: _162c7386,
    name: "pouzivatel-ucet-nastavenia"
  }, {
    path: "/",
    component: _35182910,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
