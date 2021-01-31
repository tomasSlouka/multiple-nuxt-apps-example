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
const _6ee93fd1 = () => interopDefault(import('..\\..\\pages\\admin\\categories\\index.vue' /* webpackChunkName: "pages/admin/categories/index" */))
const _6ff934e8 = () => interopDefault(import('..\\..\\pages\\admin\\orders\\index.vue' /* webpackChunkName: "pages/admin/orders/index" */))
const _0bec57ec = () => interopDefault(import('..\\..\\pages\\admin\\storage\\index.vue' /* webpackChunkName: "pages/admin/storage/index" */))
const _7d41fff4 = () => interopDefault(import('..\\..\\pages\\admin\\tags\\index.vue' /* webpackChunkName: "pages/admin/tags/index" */))
const _796cde1c = () => interopDefault(import('..\\..\\pages\\admin\\titles\\index.vue' /* webpackChunkName: "pages/admin/titles/index" */))
const _65e19502 = () => interopDefault(import('..\\..\\pages\\admin\\users\\index.vue' /* webpackChunkName: "pages/admin/users/index" */))
const _99c45d44 = () => interopDefault(import('..\\..\\pages\\knihy\\najnovsie\\index.vue' /* webpackChunkName: "pages/knihy/najnovsie/index" */))
const _74d31b1d = () => interopDefault(import('..\\..\\pages\\knihy\\najoblubenejsie\\index.vue' /* webpackChunkName: "pages/knihy/najoblubenejsie/index" */))
const _4fe2f96b = () => interopDefault(import('..\\..\\pages\\knihy\\vsetky\\index.vue' /* webpackChunkName: "pages/knihy/vsetky/index" */))
const _5abc6916 = () => interopDefault(import('..\\..\\pages\\prihlasenie\\code.vue' /* webpackChunkName: "pages/prihlasenie/code" */))
const _606a4eee = () => interopDefault(import('..\\..\\pages\\registracia\\code.vue' /* webpackChunkName: "pages/registracia/code" */))
const _e7ce68cc = () => interopDefault(import('..\\..\\pages\\user\\account\\index.vue' /* webpackChunkName: "pages/user/account/index" */))
const _f6b1e386 = () => interopDefault(import('..\\..\\pages\\user\\books\\index.vue' /* webpackChunkName: "pages/user/books/index" */))
const _7cafbaa2 = () => interopDefault(import('..\\..\\pages\\admin\\categories\\add\\index.vue' /* webpackChunkName: "pages/admin/categories/add/index" */))
const _a8230932 = () => interopDefault(import('..\\..\\pages\\admin\\storage\\add\\index.vue' /* webpackChunkName: "pages/admin/storage/add/index" */))
const _f8eecf42 = () => interopDefault(import('..\\..\\pages\\admin\\tags\\add\\index.vue' /* webpackChunkName: "pages/admin/tags/add/index" */))
const _5529f621 = () => interopDefault(import('..\\..\\pages\\admin\\titles\\add\\index.vue' /* webpackChunkName: "pages/admin/titles/add/index" */))
const _fb420a40 = () => interopDefault(import('..\\..\\pages\\user\\account\\credits\\index.vue' /* webpackChunkName: "pages/user/account/credits/index" */))
const _23c95417 = () => interopDefault(import('..\\..\\pages\\user\\account\\settings\\index.vue' /* webpackChunkName: "pages/user/account/settings/index" */))
const _b96e0392 = () => interopDefault(import('..\\..\\pages\\user\\books\\basket\\index.vue' /* webpackChunkName: "pages/user/books/basket/index" */))
const _62f79d29 = () => interopDefault(import('..\\..\\pages\\user\\books\\borrowed\\index.vue' /* webpackChunkName: "pages/user/books/borrowed/index" */))
const _36df4db3 = () => interopDefault(import('..\\..\\pages\\user\\books\\rated\\index.vue' /* webpackChunkName: "pages/user/books/rated/index" */))
const _d03e1a56 = () => interopDefault(import('..\\..\\pages\\user\\books\\reserved\\index.vue' /* webpackChunkName: "pages/user/books/reserved/index" */))
const _460ef418 = () => interopDefault(import('..\\..\\pages\\user\\books\\wishlist\\index.vue' /* webpackChunkName: "pages/user/books/wishlist/index" */))
const _08eefe8c = () => interopDefault(import('..\\..\\pages\\admin\\categories\\detail\\_id\\index.vue' /* webpackChunkName: "pages/admin/categories/detail/_id/index" */))
const _78b0ac7f = () => interopDefault(import('..\\..\\pages\\admin\\storage\\detail\\_id\\index.vue' /* webpackChunkName: "pages/admin/storage/detail/_id/index" */))
const _34ba5177 = () => interopDefault(import('..\\..\\pages\\admin\\tags\\detail\\_id\\index.vue' /* webpackChunkName: "pages/admin/tags/detail/_id/index" */))
const _0d8acd39 = () => interopDefault(import('..\\..\\pages\\admin\\titles\\detail\\_id\\index.vue' /* webpackChunkName: "pages/admin/titles/detail/_id/index" */))
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
    path: "/admin/categories",
    component: _6ee93fd1,
    name: "admin-categories"
  }, {
    path: "/admin/orders",
    component: _6ff934e8,
    name: "admin-orders"
  }, {
    path: "/admin/storage",
    component: _0bec57ec,
    name: "admin-storage"
  }, {
    path: "/admin/tags",
    component: _7d41fff4,
    name: "admin-tags"
  }, {
    path: "/admin/titles",
    component: _796cde1c,
    name: "admin-titles"
  }, {
    path: "/admin/users",
    component: _65e19502,
    name: "admin-users"
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
    path: "/user/account",
    component: _e7ce68cc,
    name: "user-account"
  }, {
    path: "/user/books",
    component: _f6b1e386,
    name: "user-books"
  }, {
    path: "/admin/categories/add",
    component: _7cafbaa2,
    name: "admin-categories-add"
  }, {
    path: "/admin/storage/add",
    component: _a8230932,
    name: "admin-storage-add"
  }, {
    path: "/admin/tags/add",
    component: _f8eecf42,
    name: "admin-tags-add"
  }, {
    path: "/admin/titles/add",
    component: _5529f621,
    name: "admin-titles-add"
  }, {
    path: "/user/account/credits",
    component: _fb420a40,
    name: "user-account-credits"
  }, {
    path: "/user/account/settings",
    component: _23c95417,
    name: "user-account-settings"
  }, {
    path: "/user/books/basket",
    component: _b96e0392,
    name: "user-books-basket"
  }, {
    path: "/user/books/borrowed",
    component: _62f79d29,
    name: "user-books-borrowed"
  }, {
    path: "/user/books/rated",
    component: _36df4db3,
    name: "user-books-rated"
  }, {
    path: "/user/books/reserved",
    component: _d03e1a56,
    name: "user-books-reserved"
  }, {
    path: "/user/books/wishlist",
    component: _460ef418,
    name: "user-books-wishlist"
  }, {
    path: "/admin/categories/detail/:id",
    component: _08eefe8c,
    name: "admin-categories-detail-id"
  }, {
    path: "/admin/storage/detail/:id",
    component: _78b0ac7f,
    name: "admin-storage-detail-id"
  }, {
    path: "/admin/tags/detail/:id",
    component: _34ba5177,
    name: "admin-tags-detail-id"
  }, {
    path: "/admin/titles/detail/:id",
    component: _0d8acd39,
    name: "admin-titles-detail-id"
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
