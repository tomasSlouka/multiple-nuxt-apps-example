import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _667dad2a = () => interopDefault(import('..\\..\\..\\..\\pages\\200.vue' /* webpackChunkName: "pages/200" */))
const _36b7e670 = () => interopDefault(import('..\\..\\..\\..\\pages\\403.vue' /* webpackChunkName: "pages/403" */))
const _36c5fdf1 = () => interopDefault(import('..\\..\\..\\..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _6b73db2e = () => interopDefault(import('..\\..\\..\\..\\pages\\500.vue' /* webpackChunkName: "pages/500" */))
const _2c3c903c = () => interopDefault(import('..\\..\\..\\..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _3695a67d = () => interopDefault(import('..\\..\\..\\..\\pages\\creator\\index.vue' /* webpackChunkName: "pages/creator/index" */))
const _6ed04dda = () => interopDefault(import('..\\..\\..\\..\\pages\\index copy.vue' /* webpackChunkName: "pages/index copy" */))
const _2f19fae8 = () => interopDefault(import('..\\..\\..\\..\\pages\\indexOld.vue' /* webpackChunkName: "pages/indexOld" */))
const _a5f59286 = () => interopDefault(import('..\\..\\..\\..\\pages\\log-in\\index.vue' /* webpackChunkName: "pages/log-in/index" */))
const _2528b078 = () => interopDefault(import('..\\..\\..\\..\\pages\\log-out\\index.vue' /* webpackChunkName: "pages/log-out/index" */))
const _7aa369f4 = () => interopDefault(import('..\\..\\..\\..\\pages\\pg\\index.vue' /* webpackChunkName: "pages/pg/index" */))
const _744fa2a3 = () => interopDefault(import('..\\..\\..\\..\\pages\\pricing\\index.vue' /* webpackChunkName: "pages/pricing/index" */))
const _e9958492 = () => interopDefault(import('..\\..\\..\\..\\pages\\referral-program\\index.vue' /* webpackChunkName: "pages/referral-program/index" */))
const _3fa1e6c4 = () => interopDefault(import('..\\..\\..\\..\\pages\\sign-up\\index.vue' /* webpackChunkName: "pages/sign-up/index" */))
const _41fbf9e3 = () => interopDefault(import('..\\..\\..\\..\\pages\\subscriber\\index.vue' /* webpackChunkName: "pages/subscriber/index" */))
const _0b06f828 = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\early-access\\index.vue' /* webpackChunkName: "pages/admin/early-access/index" */))
const _b147750a = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\home\\index.vue' /* webpackChunkName: "pages/admin/home/index" */))
const _9b65915c = () => interopDefault(import('..\\..\\..\\..\\pages\\log-in\\code.vue' /* webpackChunkName: "pages/log-in/code" */))
const _2790a151 = () => interopDefault(import('..\\..\\..\\..\\pages\\sign-up\\code.vue' /* webpackChunkName: "pages/sign-up/code" */))
const _5ed6d95c = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\creator\\dashboard\\index.vue' /* webpackChunkName: "pages/admin/creator/dashboard/index" */))
const _69200322 = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\creator\\messages\\index.vue' /* webpackChunkName: "pages/admin/creator/messages/index" */))
const _464bebeb = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\creator\\settings\\index.vue' /* webpackChunkName: "pages/admin/creator/settings/index" */))
const _27461622 = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\home\\newsletter\\index.vue' /* webpackChunkName: "pages/admin/home/newsletter/index" */))
const _58373224 = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\subscriber\\dashboard\\index.vue' /* webpackChunkName: "pages/admin/subscriber/dashboard/index" */))
const _3e2534cf = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\subscriber\\settings\\index.vue' /* webpackChunkName: "pages/admin/subscriber/settings/index" */))
const _5fd2894c = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\subscriber\\subscriptions\\index.vue' /* webpackChunkName: "pages/admin/subscriber/subscriptions/index" */))
const _58a91b62 = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\home\\newsletter\\success\\index.vue' /* webpackChunkName: "pages/admin/home/newsletter/success/index" */))
const _e8253fa4 = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\subscriber\\subscriptions\\newsletters\\index.vue' /* webpackChunkName: "pages/admin/subscriber/subscriptions/newsletters/index" */))
const _3e0517cf = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\creator\\messages\\message\\create\\index.vue' /* webpackChunkName: "pages/admin/creator/messages/message/create/index" */))
const _d37c2800 = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\creator\\messages\\message\\detail\\_id\\index.vue' /* webpackChunkName: "pages/admin/creator/messages/message/detail/_id/index" */))
const _726ef379 = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\creator\\messages\\message\\edit\\_id\\index.vue' /* webpackChunkName: "pages/admin/creator/messages/message/edit/_id/index" */))
const _286ac106 = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\subscriber\\subscriptions\\newsletters\\detail\\_id\\index.vue' /* webpackChunkName: "pages/admin/subscriber/subscriptions/newsletters/detail/_id/index" */))
const _7e18076a = () => interopDefault(import('..\\..\\..\\..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _667dad2a,
    name: "200"
  }, {
    path: "/403",
    component: _36b7e670,
    name: "403"
  }, {
    path: "/404",
    component: _36c5fdf1,
    name: "404"
  }, {
    path: "/500",
    component: _6b73db2e,
    name: "500"
  }, {
    path: "/about",
    component: _2c3c903c,
    name: "about"
  }, {
    path: "/creator",
    component: _3695a67d,
    name: "creator"
  }, {
    path: "/index copy",
    component: _6ed04dda,
    name: "index copy"
  }, {
    path: "/indexOld",
    component: _2f19fae8,
    name: "indexOld"
  }, {
    path: "/log-in",
    component: _a5f59286,
    name: "log-in"
  }, {
    path: "/log-out",
    component: _2528b078,
    name: "log-out"
  }, {
    path: "/pg",
    component: _7aa369f4,
    name: "pg"
  }, {
    path: "/pricing",
    component: _744fa2a3,
    name: "pricing"
  }, {
    path: "/referral-program",
    component: _e9958492,
    name: "referral-program"
  }, {
    path: "/sign-up",
    component: _3fa1e6c4,
    name: "sign-up"
  }, {
    path: "/subscriber",
    component: _41fbf9e3,
    name: "subscriber"
  }, {
    path: "/admin/early-access",
    component: _0b06f828,
    name: "admin-early-access"
  }, {
    path: "/admin/home",
    component: _b147750a,
    name: "admin-home"
  }, {
    path: "/log-in/code",
    component: _9b65915c,
    name: "log-in-code"
  }, {
    path: "/sign-up/code",
    component: _2790a151,
    name: "sign-up-code"
  }, {
    path: "/admin/creator/dashboard",
    component: _5ed6d95c,
    name: "admin-creator-dashboard"
  }, {
    path: "/admin/creator/messages",
    component: _69200322,
    name: "admin-creator-messages"
  }, {
    path: "/admin/creator/settings",
    component: _464bebeb,
    name: "admin-creator-settings"
  }, {
    path: "/admin/home/newsletter",
    component: _27461622,
    name: "admin-home-newsletter"
  }, {
    path: "/admin/subscriber/dashboard",
    component: _58373224,
    name: "admin-subscriber-dashboard"
  }, {
    path: "/admin/subscriber/settings",
    component: _3e2534cf,
    name: "admin-subscriber-settings"
  }, {
    path: "/admin/subscriber/subscriptions",
    component: _5fd2894c,
    name: "admin-subscriber-subscriptions"
  }, {
    path: "/admin/home/newsletter/success",
    component: _58a91b62,
    name: "admin-home-newsletter-success"
  }, {
    path: "/admin/subscriber/subscriptions/newsletters",
    component: _e8253fa4,
    name: "admin-subscriber-subscriptions-newsletters"
  }, {
    path: "/admin/creator/messages/message/create",
    component: _3e0517cf,
    name: "admin-creator-messages-message-create"
  }, {
    path: "/admin/creator/messages/message/detail/:id",
    component: _d37c2800,
    name: "admin-creator-messages-message-detail-id"
  }, {
    path: "/admin/creator/messages/message/edit/:id",
    component: _726ef379,
    name: "admin-creator-messages-message-edit-id"
  }, {
    path: "/admin/subscriber/subscriptions/newsletters/detail/:id",
    component: _286ac106,
    name: "admin-subscriber-subscriptions-newsletters-detail-id"
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
