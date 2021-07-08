import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ee460050 = () => interopDefault(import('..\\..\\pages\\200.vue' /* webpackChunkName: "pages/200" */))
const _1a588646 = () => interopDefault(import('..\\..\\pages\\403.vue' /* webpackChunkName: "pages/403" */))
const _1a3c5744 = () => interopDefault(import('..\\..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _278fb19b = () => interopDefault(import('..\\..\\pages\\500.vue' /* webpackChunkName: "pages/500" */))
const _4bf89126 = () => interopDefault(import('..\\..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _811b96cc = () => interopDefault(import('..\\..\\pages\\ako-to-funguje\\index.vue' /* webpackChunkName: "pages/ako-to-funguje/index" */))
const _8d0336d4 = () => interopDefault(import('..\\..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _0e98a5aa = () => interopDefault(import('..\\..\\pages\\kniznica\\index.vue' /* webpackChunkName: "pages/kniznica/index" */))
const _25a609b7 = () => interopDefault(import('..\\..\\pages\\najcastejsie-otazky\\index.vue' /* webpackChunkName: "pages/najcastejsie-otazky/index" */))
const _3c907c4d = () => interopDefault(import('..\\..\\pages\\nas-pribeh\\index.vue' /* webpackChunkName: "pages/nas-pribeh/index" */))
const _258ba89f = () => interopDefault(import('..\\..\\pages\\newsletter\\index.vue' /* webpackChunkName: "pages/newsletter/index" */))
const _f99f9130 = () => interopDefault(import('..\\..\\pages\\odhlasenie\\index.vue' /* webpackChunkName: "pages/odhlasenie/index" */))
const _d179b20c = () => interopDefault(import('..\\..\\pages\\prihlasenie\\index.vue' /* webpackChunkName: "pages/prihlasenie/index" */))
const _3f3bbc66 = () => interopDefault(import('..\\..\\pages\\registracia\\index.vue' /* webpackChunkName: "pages/registracia/index" */))
const _6ee93fd1 = () => interopDefault(import('..\\..\\pages\\admin\\categories\\index.vue' /* webpackChunkName: "pages/admin/categories/index" */))
const _6ff934e8 = () => interopDefault(import('..\\..\\pages\\admin\\orders\\index.vue' /* webpackChunkName: "pages/admin/orders/index" */))
const _0193909e = () => interopDefault(import('..\\..\\pages\\admin\\stock\\index.vue' /* webpackChunkName: "pages/admin/stock/index" */))
const _7d41fff4 = () => interopDefault(import('..\\..\\pages\\admin\\tags\\index.vue' /* webpackChunkName: "pages/admin/tags/index" */))
const _796cde1c = () => interopDefault(import('..\\..\\pages\\admin\\titles\\index.vue' /* webpackChunkName: "pages/admin/titles/index" */))
const _65e19502 = () => interopDefault(import('..\\..\\pages\\admin\\users\\index.vue' /* webpackChunkName: "pages/admin/users/index" */))
const _5abc6916 = () => interopDefault(import('..\\..\\pages\\prihlasenie\\code.vue' /* webpackChunkName: "pages/prihlasenie/code" */))
const _606a4eee = () => interopDefault(import('..\\..\\pages\\registracia\\code.vue' /* webpackChunkName: "pages/registracia/code" */))
const _e7ce68cc = () => interopDefault(import('..\\..\\pages\\user\\account\\index.vue' /* webpackChunkName: "pages/user/account/index" */))
const _f6b1e386 = () => interopDefault(import('..\\..\\pages\\user\\books\\index.vue' /* webpackChunkName: "pages/user/books/index" */))
const _7cafbaa2 = () => interopDefault(import('..\\..\\pages\\admin\\categories\\add\\index.vue' /* webpackChunkName: "pages/admin/categories/add/index" */))
const _07905beb = () => interopDefault(import('..\\..\\pages\\admin\\orders\\add\\index.vue' /* webpackChunkName: "pages/admin/orders/add/index" */))
const _3722aec2 = () => interopDefault(import('..\\..\\pages\\admin\\stock\\add\\index.vue' /* webpackChunkName: "pages/admin/stock/add/index" */))
const _f8eecf42 = () => interopDefault(import('..\\..\\pages\\admin\\tags\\add\\index.vue' /* webpackChunkName: "pages/admin/tags/add/index" */))
const _5529f621 = () => interopDefault(import('..\\..\\pages\\admin\\titles\\add\\index.vue' /* webpackChunkName: "pages/admin/titles/add/index" */))
const _69e621b4 = () => interopDefault(import('..\\..\\pages\\admin\\users\\add\\index.vue' /* webpackChunkName: "pages/admin/users/add/index" */))
const _fb420a40 = () => interopDefault(import('..\\..\\pages\\user\\account\\credits\\index.vue' /* webpackChunkName: "pages/user/account/credits/index" */))
const _23c95417 = () => interopDefault(import('..\\..\\pages\\user\\account\\settings\\index.vue' /* webpackChunkName: "pages/user/account/settings/index" */))
const _473d9edd = () => interopDefault(import('..\\..\\pages\\user\\account\\subscription\\index.vue' /* webpackChunkName: "pages/user/account/subscription/index" */))
const _b96e0392 = () => interopDefault(import('..\\..\\pages\\user\\books\\basket\\index.vue' /* webpackChunkName: "pages/user/books/basket/index" */))
const _62f79d29 = () => interopDefault(import('..\\..\\pages\\user\\books\\borrowed\\index.vue' /* webpackChunkName: "pages/user/books/borrowed/index" */))
const _36df4db3 = () => interopDefault(import('..\\..\\pages\\user\\books\\rated\\index.vue' /* webpackChunkName: "pages/user/books/rated/index" */))
const _d03e1a56 = () => interopDefault(import('..\\..\\pages\\user\\books\\reserved\\index.vue' /* webpackChunkName: "pages/user/books/reserved/index" */))
const _460ef418 = () => interopDefault(import('..\\..\\pages\\user\\books\\wishlist\\index.vue' /* webpackChunkName: "pages/user/books/wishlist/index" */))
const _7e2f90f3 = () => interopDefault(import('..\\..\\pages\\user\\account\\credits\\add\\index.vue' /* webpackChunkName: "pages/user/account/credits/add/index" */))
const _09d3cc11 = () => interopDefault(import('..\\..\\pages\\user\\account\\credits\\success.vue' /* webpackChunkName: "pages/user/account/credits/success" */))
const _119964ce = () => interopDefault(import('..\\..\\pages\\user\\account\\subscription\\success.vue' /* webpackChunkName: "pages/user/account/subscription/success" */))
const _0f2b5436 = () => interopDefault(import('..\\..\\pages\\user\\books\\basket\\confirm.vue' /* webpackChunkName: "pages/user/books/basket/confirm" */))
const _79b7acc2 = () => interopDefault(import('..\\..\\pages\\user\\books\\basket\\delivery.vue' /* webpackChunkName: "pages/user/books/basket/delivery" */))
const _cf6b54b0 = () => interopDefault(import('..\\..\\pages\\user\\books\\basket\\success.vue' /* webpackChunkName: "pages/user/books/basket/success" */))
const _08eefe8c = () => interopDefault(import('..\\..\\pages\\admin\\categories\\detail\\_id\\index.vue' /* webpackChunkName: "pages/admin/categories/detail/_id/index" */))
const _10886dfa = () => interopDefault(import('..\\..\\pages\\admin\\orders\\detail\\_id\\index.vue' /* webpackChunkName: "pages/admin/orders/detail/_id/index" */))
const _3355564c = () => interopDefault(import('..\\..\\pages\\admin\\stock\\detail\\_id\\index.vue' /* webpackChunkName: "pages/admin/stock/detail/_id/index" */))
const _34ba5177 = () => interopDefault(import('..\\..\\pages\\admin\\tags\\detail\\_id\\index.vue' /* webpackChunkName: "pages/admin/tags/detail/_id/index" */))
const _0d8acd39 = () => interopDefault(import('..\\..\\pages\\admin\\titles\\detail\\_id\\index.vue' /* webpackChunkName: "pages/admin/titles/detail/_id/index" */))
const _4837b5cc = () => interopDefault(import('..\\..\\pages\\admin\\users\\detail\\_id\\index.vue' /* webpackChunkName: "pages/admin/users/detail/_id/index" */))
const _5031ade9 = () => interopDefault(import('..\\..\\pages\\admin\\orders\\detail\\_id\\edit.vue' /* webpackChunkName: "pages/admin/orders/detail/_id/edit" */))
const _9be1bd8a = () => interopDefault(import('..\\..\\pages\\kniznica\\_id\\_name\\index.vue' /* webpackChunkName: "pages/kniznica/_id/_name/index" */))
const _35182910 = () => interopDefault(import('..\\..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

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
    path: "/ako-to-funguje",
    component: _811b96cc,
    name: "ako-to-funguje"
  }, {
    path: "/blog",
    component: _8d0336d4,
    name: "blog"
  }, {
    path: "/kniznica",
    component: _0e98a5aa,
    name: "kniznica"
  }, {
    path: "/najcastejsie-otazky",
    component: _25a609b7,
    name: "najcastejsie-otazky"
  }, {
    path: "/nas-pribeh",
    component: _3c907c4d,
    name: "nas-pribeh"
  }, {
    path: "/newsletter",
    component: _258ba89f,
    name: "newsletter"
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
    path: "/admin/stock",
    component: _0193909e,
    name: "admin-stock"
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
    path: "/admin/orders/add",
    component: _07905beb,
    name: "admin-orders-add"
  }, {
    path: "/admin/stock/add",
    component: _3722aec2,
    name: "admin-stock-add"
  }, {
    path: "/admin/tags/add",
    component: _f8eecf42,
    name: "admin-tags-add"
  }, {
    path: "/admin/titles/add",
    component: _5529f621,
    name: "admin-titles-add"
  }, {
    path: "/admin/users/add",
    component: _69e621b4,
    name: "admin-users-add"
  }, {
    path: "/user/account/credits",
    component: _fb420a40,
    name: "user-account-credits"
  }, {
    path: "/user/account/settings",
    component: _23c95417,
    name: "user-account-settings"
  }, {
    path: "/user/account/subscription",
    component: _473d9edd,
    name: "user-account-subscription"
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
    path: "/user/account/credits/add",
    component: _7e2f90f3,
    name: "user-account-credits-add"
  }, {
    path: "/user/account/credits/success",
    component: _09d3cc11,
    name: "user-account-credits-success"
  }, {
    path: "/user/account/subscription/success",
    component: _119964ce,
    name: "user-account-subscription-success"
  }, {
    path: "/user/books/basket/confirm",
    component: _0f2b5436,
    name: "user-books-basket-confirm"
  }, {
    path: "/user/books/basket/delivery",
    component: _79b7acc2,
    name: "user-books-basket-delivery"
  }, {
    path: "/user/books/basket/success",
    component: _cf6b54b0,
    name: "user-books-basket-success"
  }, {
    path: "/admin/categories/detail/:id",
    component: _08eefe8c,
    name: "admin-categories-detail-id"
  }, {
    path: "/admin/orders/detail/:id",
    component: _10886dfa,
    name: "admin-orders-detail-id"
  }, {
    path: "/admin/stock/detail/:id",
    component: _3355564c,
    name: "admin-stock-detail-id"
  }, {
    path: "/admin/tags/detail/:id",
    component: _34ba5177,
    name: "admin-tags-detail-id"
  }, {
    path: "/admin/titles/detail/:id",
    component: _0d8acd39,
    name: "admin-titles-detail-id"
  }, {
    path: "/admin/users/detail/:id",
    component: _4837b5cc,
    name: "admin-users-detail-id"
  }, {
    path: "/admin/orders/detail/:id?/edit",
    component: _5031ade9,
    name: "admin-orders-detail-id-edit"
  }, {
    path: "/kniznica/:id/:name",
    component: _9be1bd8a,
    name: "kniznica-id-name"
  }, {
    path: "/",
    component: _35182910,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
