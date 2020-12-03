import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _32ccfc7c = () => interopDefault(import('..\\..\\..\\..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _f7e355c0 = () => interopDefault(import('..\\..\\..\\..\\pages\\faq\\index.vue' /* webpackChunkName: "pages/faq/index" */))
const _3635df50 = () => interopDefault(import('..\\..\\..\\..\\pages\\log-in\\index.vue' /* webpackChunkName: "pages/log-in/index" */))
const _eb5fdcde = () => interopDefault(import('..\\..\\..\\..\\pages\\log-out\\index.vue' /* webpackChunkName: "pages/log-out/index" */))
const _7d13766b = () => interopDefault(import('..\\..\\..\\..\\pages\\sign-up\\index.vue' /* webpackChunkName: "pages/sign-up/index" */))
const _3ee4d4a4 = () => interopDefault(import('..\\..\\..\\..\\pages\\domains-up-for-rent\\add\\index.vue' /* webpackChunkName: "pages/domains-up-for-rent/add/index" */))
const _545945fb = () => interopDefault(import('..\\..\\..\\..\\pages\\domains-up-for-rent\\browse\\index.vue' /* webpackChunkName: "pages/domains-up-for-rent/browse/index" */))
const _54cb083e = () => interopDefault(import('..\\..\\..\\..\\pages\\faq\\buyer\\index.vue' /* webpackChunkName: "pages/faq/buyer/index" */))
const _4931eae1 = () => interopDefault(import('..\\..\\..\\..\\pages\\faq\\owner\\index.vue' /* webpackChunkName: "pages/faq/owner/index" */))
const _7cebb05f = () => interopDefault(import('..\\..\\..\\..\\pages\\log-in\\code.vue' /* webpackChunkName: "pages/log-in/code" */))
const _9e7d6c38 = () => interopDefault(import('..\\..\\..\\..\\pages\\sign-up\\code.vue' /* webpackChunkName: "pages/sign-up/code" */))
const _d2722942 = () => interopDefault(import('..\\..\\..\\..\\pages\\domains-up-for-rent\\add\\success.vue' /* webpackChunkName: "pages/domains-up-for-rent/add/success" */))
const _1f5ffb4a = () => interopDefault(import('..\\..\\..\\..\\pages\\domains-up-for-rent\\detail\\message\\success.vue' /* webpackChunkName: "pages/domains-up-for-rent/detail/message/success" */))
const _11a18296 = () => interopDefault(import('..\\..\\..\\..\\pages\\domains-up-for-rent\\detail\\_name\\index.vue' /* webpackChunkName: "pages/domains-up-for-rent/detail/_name/index" */))
const _78183044 = () => interopDefault(import('..\\..\\..\\..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/blog",
    component: _32ccfc7c,
    name: "blog"
  }, {
    path: "/faq",
    component: _f7e355c0,
    name: "faq"
  }, {
    path: "/log-in",
    component: _3635df50,
    name: "log-in"
  }, {
    path: "/log-out",
    component: _eb5fdcde,
    name: "log-out"
  }, {
    path: "/sign-up",
    component: _7d13766b,
    name: "sign-up"
  }, {
    path: "/domains-up-for-rent/add",
    component: _3ee4d4a4,
    name: "domains-up-for-rent-add"
  }, {
    path: "/domains-up-for-rent/browse",
    component: _545945fb,
    name: "domains-up-for-rent-browse"
  }, {
    path: "/faq/buyer",
    component: _54cb083e,
    name: "faq-buyer"
  }, {
    path: "/faq/owner",
    component: _4931eae1,
    name: "faq-owner"
  }, {
    path: "/log-in/code",
    component: _7cebb05f,
    name: "log-in-code"
  }, {
    path: "/sign-up/code",
    component: _9e7d6c38,
    name: "sign-up-code"
  }, {
    path: "/domains-up-for-rent/add/success",
    component: _d2722942,
    name: "domains-up-for-rent-add-success"
  }, {
    path: "/domains-up-for-rent/detail/message/success",
    component: _1f5ffb4a,
    name: "domains-up-for-rent-detail-message-success"
  }, {
    path: "/domains-up-for-rent/detail/:name",
    component: _11a18296,
    name: "domains-up-for-rent-detail-name"
  }, {
    path: "/",
    component: _78183044,
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
