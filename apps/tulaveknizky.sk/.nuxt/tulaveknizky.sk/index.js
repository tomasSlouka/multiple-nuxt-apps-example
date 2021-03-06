import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_vuescrollto_16cdf8f4 from 'nuxt_plugin_vuescrollto_16cdf8f4' // Source: .\\vue-scrollto.js (mode: 'client')
import nuxt_plugin_cookieuniversalnuxt_2b29c51d from 'nuxt_plugin_cookieuniversalnuxt_2b29c51d' // Source: .\\cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_axios_a068a116 from 'nuxt_plugin_axios_a068a116' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_axios_5659d192 from 'nuxt_plugin_axios_5659d192' // Source: ..\\..\\plugins\\axios.js (mode: 'all')
import nuxt_plugin_gtag_0a2cb1e4 from 'nuxt_plugin_gtag_0a2cb1e4' // Source: ..\\..\\plugins\\gtag.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"layout","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Túlavé knižky | Online požičovňa kníh.","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1, shrink-to-fit=no"},{"hid":"title","name":"title","content":"Túlavé knižky | Online požičovňa kníh."},{"hid":"description","name":"description","content":"Požičaj si najnovšie knižné tituly, bez navštevy knižnice."},{"hid":"og-type","property":"og:type","content":"website"},{"hid":"og-url","property":"og:url","content":"https:\u002F\u002Ftulaveknizky.sk\u002F"},{"hid":"og-title","property":"og:title","content":"Túlavé knižky | Online požičovňa kníh."},{"hid":"og-description","property":"og:description","content":"Požičaj si najnovšie knižné tituly, bez navštevy knižnice."},{"hid":"og-image","property":"og:image","content":"https:\u002F\u002Ftulaveknizky.sk\u002F_static\u002Ftulaveknizky\u002Fcover-twitter.png"},{"hid":"og-image:type","property":"og:image:type","content":"image\u002Fpng"},{"hid":"og-image:width","property":"og:image:width","content":"1200"},{"hid":"og-image:height","property":"og:image:height","content":"628"},{"hid":"twitter-card","property":"twitter:card","content":"summary_large_image"},{"hid":"twitter-url","property":"twitter:url","content":"https:\u002F\u002Ftulaveknizky.sk\u002F"},{"hid":"twitter-title","property":"twitter:title","content":"Túlavé knižky | Online požičovňa kníh."},{"hid":"twitter-description","property":"twitter:description","content":"Požičaj si najnovšie knižné tituly, bez navštevy knižnice."},{"hid":"twitter-image","property":"twitter:image","content":"https:\u002F\u002Ftulaveknizky.sk\u002F_static\u002Ftulaveknizky\u002Fcover-twitter.png"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"Túlavé knižky | Online požičovňa kníh."},{"hid":"application-name","name":"application-name","content":"Túlavé knižky | Online požičovňa kníh."},{"hid":"msapplication-TileColor","name":"msapplication-TileColor","content":"#ffffff"},{"hid":"msapplication-TileImage","name":"msapplication-TileImage","content":"\u002F_static\u002Ftulaveknizky\u002Fms-icon-144x144.png"},{"hid":"theme-color","name":"theme-color","content":"#ffffff"}],"link":[{"hid":"apple-touch-icon-57x57","rel":"apple-touch-icon","sizes":"57x57","href":"\u002F_static\u002Ftulaveknizky\u002Fapple-icon-57x57.png"},{"hid":"apple-touch-icon-60x60","rel":"apple-touch-icon","sizes":"60x60","href":"\u002F_static\u002Ftulaveknizky\u002Fapple-icon-60x60.png"},{"hid":"apple-touch-icon-72x72","rel":"apple-touch-icon","sizes":"72x72","href":"\u002F_static\u002Ftulaveknizky\u002Fapple-icon-72x72.png"},{"hid":"apple-touch-icon-76x76","rel":"apple-touch-icon","sizes":"76x76","href":"\u002F_static\u002Ftulaveknizky\u002Fapple-icon-76x76.png"},{"hid":"apple-touch-icon-114x114","rel":"apple-touch-icon","sizes":"114x114","href":"\u002F_static\u002Ftulaveknizky\u002Fapple-icon-114x114.png"},{"hid":"apple-touch-icon-120x120","rel":"apple-touch-icon","sizes":"120x120","href":"\u002F_static\u002Ftulaveknizky\u002Fapple-icon-120x120.png"},{"hid":"apple-touch-icon-144x144","rel":"apple-touch-icon","sizes":"144x144","href":"\u002F_static\u002Ftulaveknizky\u002Fapple-icon-144x144.png"},{"hid":"apple-touch-icon-152x152","rel":"apple-touch-icon","sizes":"152x152","href":"\u002F_static\u002Ftulaveknizky\u002Fapple-icon-152x152.png"},{"hid":"apple-touch-icon-180x180","rel":"apple-touch-icon","sizes":"180x180","href":"\u002F_static\u002Ftulaveknizky\u002Fapple-icon-180x180.png"},{"hid":"icon-192x192","rel":"icon","type":"image\u002Fpng","sizes":"192x192","href":"\u002F_static\u002Ftulaveknizky\u002Fandroid-icon-192x192.png"},{"hid":"icon-32x32","rel":"icon","type":"image\u002Fpng","sizes":"32x32","href":"\u002F_static\u002Ftulaveknizky\u002Ffavicon-32x32.png"},{"hid":"icon-96x96","rel":"icon","type":"image\u002Fpng","sizes":"96x96","href":"\u002F_static\u002Ftulaveknizky\u002Ffavicon-96x96.png"},{"hid":"icon-16x16","rel":"icon","type":"image\u002Fpng","sizes":"16x16","href":"\u002F_static\u002Ftulaveknizky\u002Ffavicon-16x16.png"},{"hid":"manifest","rel":"manifest","href":"\u002F_static\u002Ftulaveknizky\u002Fmanifest.json"}],"script":[{"src":"https:\u002F\u002Fjs.stripe.com\u002Fv3\u002F"}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (process.client && typeof nuxt_plugin_vuescrollto_16cdf8f4 === 'function') {
    await nuxt_plugin_vuescrollto_16cdf8f4(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_2b29c51d === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_2b29c51d(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_a068a116 === 'function') {
    await nuxt_plugin_axios_a068a116(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_5659d192 === 'function') {
    await nuxt_plugin_axios_5659d192(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_gtag_0a2cb1e4 === 'function') {
    await nuxt_plugin_gtag_0a2cb1e4(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    const { route } = router.resolve(app.context.route.fullPath)
    // Ignore 404s rather than blindly replacing URL
    if (!route.matched.length && process.client) {
      return resolve()
    }
    router.replace(route, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
