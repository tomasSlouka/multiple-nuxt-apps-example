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
const _7dd3f57d = () => interopDefault(import('..\\..\\pages\\admin\\newsletter\\automation\\index.vue' /* webpackChunkName: "pages/admin/newsletter/automation/index" */))
const _350ffe0a = () => interopDefault(import('..\\..\\pages\\admin\\newsletter\\avatar\\index.vue' /* webpackChunkName: "pages/admin/newsletter/avatar/index" */))
const _328540a8 = () => interopDefault(import('..\\..\\pages\\admin\\newsletter\\messages\\index.vue' /* webpackChunkName: "pages/admin/newsletter/messages/index" */))
const _5ba0334a = () => interopDefault(import('..\\..\\pages\\admin\\newsletter\\overview\\index.vue' /* webpackChunkName: "pages/admin/newsletter/overview/index" */))
const _0fb12971 = () => interopDefault(import('..\\..\\pages\\admin\\newsletter\\settings\\index.vue' /* webpackChunkName: "pages/admin/newsletter/settings/index" */))
const _2f5d7a35 = () => interopDefault(import('..\\..\\pages\\admin\\newsletter\\subscribers\\index.vue' /* webpackChunkName: "pages/admin/newsletter/subscribers/index" */))
const _0f3590a8 = () => interopDefault(import('..\\..\\pages\\admin\\website\\domain\\index.vue' /* webpackChunkName: "pages/admin/website/domain/index" */))
const _8d42c026 = () => interopDefault(import('..\\..\\pages\\admin\\website\\integrations\\index.vue' /* webpackChunkName: "pages/admin/website/integrations/index" */))
const _34379858 = () => interopDefault(import('..\\..\\pages\\admin\\website\\navigation\\index.vue' /* webpackChunkName: "pages/admin/website/navigation/index" */))
const _65c06f69 = () => interopDefault(import('..\\..\\pages\\admin\\website\\settings\\index.vue' /* webpackChunkName: "pages/admin/website/settings/index" */))
const _5beb8b42 = () => interopDefault(import('..\\..\\pages\\admin\\website\\social\\index.vue' /* webpackChunkName: "pages/admin/website/social/index" */))
const _3a453dcf = () => interopDefault(import('..\\..\\pages\\admin\\website\\templates\\index.vue' /* webpackChunkName: "pages/admin/website/templates/index" */))
const _03379ea8 = () => interopDefault(import('..\\..\\pages\\admin\\newsletter\\messages\\create\\index.vue' /* webpackChunkName: "pages/admin/newsletter/messages/create/index" */))
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
  base: decodeURI('/'),
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
    path: "/admin/newsletter/automation",
    component: _7dd3f57d,
    name: "admin-newsletter-automation"
  }, {
    path: "/admin/newsletter/avatar",
    component: _350ffe0a,
    name: "admin-newsletter-avatar"
  }, {
    path: "/admin/newsletter/messages",
    component: _328540a8,
    name: "admin-newsletter-messages"
  }, {
    path: "/admin/newsletter/overview",
    component: _5ba0334a,
    name: "admin-newsletter-overview"
  }, {
    path: "/admin/newsletter/settings",
    component: _0fb12971,
    name: "admin-newsletter-settings"
  }, {
    path: "/admin/newsletter/subscribers",
    component: _2f5d7a35,
    name: "admin-newsletter-subscribers"
  }, {
    path: "/admin/website/domain",
    component: _0f3590a8,
    name: "admin-website-domain"
  }, {
    path: "/admin/website/integrations",
    component: _8d42c026,
    name: "admin-website-integrations"
  }, {
    path: "/admin/website/navigation",
    component: _34379858,
    name: "admin-website-navigation"
  }, {
    path: "/admin/website/settings",
    component: _65c06f69,
    name: "admin-website-settings"
  }, {
    path: "/admin/website/social",
    component: _5beb8b42,
    name: "admin-website-social"
  }, {
    path: "/admin/website/templates",
    component: _3a453dcf,
    name: "admin-website-templates"
  }, {
    path: "/admin/newsletter/messages/create",
    component: _03379ea8,
    name: "admin-newsletter-messages-create"
  }, {
    path: "/",
    component: _7e270b18,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
