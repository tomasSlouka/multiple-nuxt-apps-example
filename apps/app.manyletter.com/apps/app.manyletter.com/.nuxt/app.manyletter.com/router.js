import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0fa24f50 = () => interopDefault(import('..\\..\\..\\..\\pages\\200.vue' /* webpackChunkName: "pages/200" */))
const _6225955d = () => interopDefault(import('..\\..\\..\\..\\pages\\403.vue' /* webpackChunkName: "pages/403" */))
const _6233acde = () => interopDefault(import('..\\..\\..\\..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _d23cebca = () => interopDefault(import('..\\..\\..\\..\\pages\\500.vue' /* webpackChunkName: "pages/500" */))
const _7d6ae16a = () => interopDefault(import('..\\..\\..\\..\\pages\\log-in\\index.vue' /* webpackChunkName: "pages/log-in/index" */))
const _29bb52b7 = () => interopDefault(import('..\\..\\..\\..\\pages\\log-out\\index.vue' /* webpackChunkName: "pages/log-out/index" */))
const _1c7eb791 = () => interopDefault(import('..\\..\\..\\..\\pages\\sign-up\\index.vue' /* webpackChunkName: "pages/sign-up/index" */))
const _24610305 = () => interopDefault(import('..\\..\\..\\..\\pages\\log-in\\code.vue' /* webpackChunkName: "pages/log-in/code" */))
const _10136804 = () => interopDefault(import('..\\..\\..\\..\\pages\\sign-up\\code.vue' /* webpackChunkName: "pages/sign-up/code" */))
const _81a30600 = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\account\\credits\\index.vue' /* webpackChunkName: "pages/admin/account/credits/index" */))
const _fe2bd412 = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\account\\settings\\index.vue' /* webpackChunkName: "pages/admin/account/settings/index" */))
const _532e409d = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\newsletter\\automation\\index.vue' /* webpackChunkName: "pages/admin/newsletter/automation/index" */))
const _6e1647ca = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\newsletter\\avatar\\index.vue' /* webpackChunkName: "pages/admin/newsletter/avatar/index" */))
const _2a37d3c8 = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\newsletter\\messages\\index.vue' /* webpackChunkName: "pages/admin/newsletter/messages/index" */))
const _6c3b0d0a = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\newsletter\\overview\\index.vue' /* webpackChunkName: "pages/admin/newsletter/overview/index" */))
const _0763bc91 = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\newsletter\\settings\\index.vue' /* webpackChunkName: "pages/admin/newsletter/settings/index" */))
const _054c9315 = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\newsletter\\subscribers\\index.vue' /* webpackChunkName: "pages/admin/newsletter/subscribers/index" */))
const _32bb8988 = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\website\\domain\\index.vue' /* webpackChunkName: "pages/admin/website/domain/index" */))
const _90031e66 = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\website\\integrations\\index.vue' /* webpackChunkName: "pages/admin/website/integrations/index" */))
const _7f53bd90 = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\website\\navigation\\index.vue' /* webpackChunkName: "pages/admin/website/navigation/index" */))
const _80a89f6e = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\website\\settings\\index.vue' /* webpackChunkName: "pages/admin/website/settings/index" */))
const _14df9982 = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\website\\social\\index.vue' /* webpackChunkName: "pages/admin/website/social/index" */))
const _1dc218ef = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\website\\templates\\index.vue' /* webpackChunkName: "pages/admin/website/templates/index" */))
const _0f3cb868 = () => interopDefault(import('..\\..\\..\\..\\pages\\admin\\newsletter\\messages\\create\\index.vue' /* webpackChunkName: "pages/admin/newsletter/messages/create/index" */))
const _709cb810 = () => interopDefault(import('..\\..\\..\\..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/log-in/code",
    component: _24610305,
    name: "log-in-code"
  }, {
    path: "/sign-up/code",
    component: _10136804,
    name: "sign-up-code"
  }, {
    path: "/admin/account/credits",
    component: _81a30600,
    name: "admin-account-credits"
  }, {
    path: "/admin/account/settings",
    component: _fe2bd412,
    name: "admin-account-settings"
  }, {
    path: "/admin/newsletter/automation",
    component: _532e409d,
    name: "admin-newsletter-automation"
  }, {
    path: "/admin/newsletter/avatar",
    component: _6e1647ca,
    name: "admin-newsletter-avatar"
  }, {
    path: "/admin/newsletter/messages",
    component: _2a37d3c8,
    name: "admin-newsletter-messages"
  }, {
    path: "/admin/newsletter/overview",
    component: _6c3b0d0a,
    name: "admin-newsletter-overview"
  }, {
    path: "/admin/newsletter/settings",
    component: _0763bc91,
    name: "admin-newsletter-settings"
  }, {
    path: "/admin/newsletter/subscribers",
    component: _054c9315,
    name: "admin-newsletter-subscribers"
  }, {
    path: "/admin/website/domain",
    component: _32bb8988,
    name: "admin-website-domain"
  }, {
    path: "/admin/website/integrations",
    component: _90031e66,
    name: "admin-website-integrations"
  }, {
    path: "/admin/website/navigation",
    component: _7f53bd90,
    name: "admin-website-navigation"
  }, {
    path: "/admin/website/settings",
    component: _80a89f6e,
    name: "admin-website-settings"
  }, {
    path: "/admin/website/social",
    component: _14df9982,
    name: "admin-website-social"
  }, {
    path: "/admin/website/templates",
    component: _1dc218ef,
    name: "admin-website-templates"
  }, {
    path: "/admin/newsletter/messages/create",
    component: _0f3cb868,
    name: "admin-newsletter-messages-create"
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
