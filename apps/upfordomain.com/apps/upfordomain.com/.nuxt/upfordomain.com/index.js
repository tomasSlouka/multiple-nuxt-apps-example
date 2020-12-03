import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\..\\..\\..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_axios_7ce5851e from 'nuxt_plugin_axios_7ce5851e' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_axios_5659d192 from 'nuxt_plugin_axios_5659d192' // Source: ..\\..\\..\\..\\plugins\\axios.js (mode: 'all')
import nuxt_plugin_ga_34d435b2 from 'nuxt_plugin_ga_34d435b2' // Source: ..\\..\\..\\..\\plugins\\ga.js (mode: 'client')

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

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"layout","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  const registerModule = store.registerModule
  store.registerModule = (path, rawModule, options) => registerModule.call(store, path, rawModule, Object.assign({ preserveState: process.client }, options))

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Domains up for rent.","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1, shrink-to-fit=no"},{"hid":"title","name":"title","content":"Domains up for rent."},{"hid":"description","name":"description","content":"Upfordomain - a secure way of renting domains."},{"hid":"og-type","property":"og:type","content":"website"},{"hid":"og-url","property":"og:url","content":"https:\u002F\u002Fupfordomain.com\u002F"},{"hid":"og-title","property":"og:title","content":"Domains up for rent."},{"hid":"og-description","property":"og:description","content":"Upfordomain - a secure way of renting domains."},{"hid":"og-image","property":"og:image","content":"https:\u002F\u002Fupfordomain.com\u002F_static\u002Fupfordomain\u002Fcover-twitter.png"},{"hid":"og-image:type","property":"og:image:type","content":"image\u002Fpng"},{"hid":"og-image:width","property":"og:image:width","content":"1200"},{"hid":"og-image:height","property":"og:image:height","content":"628"},{"hid":"twitter-card","property":"twitter:card","content":"summary_large_image"},{"hid":"twitter-url","property":"twitter:url","content":"https:\u002F\u002Fupfordomain.com\u002F"},{"hid":"twitter-title","property":"twitter:title","content":"Domains up for rent."},{"hid":"twitter-description","property":"twitter:description","content":"Upfordomain - a secure way of renting domains."},{"hid":"twitter-image","property":"twitter:image","content":"https:\u002F\u002Fupfordomain.com\u002F_static\u002Fupfordomain\u002Fcover-twitter.png"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"Upfordomain"},{"hid":"application-name","name":"application-name","content":"Upfordomain"},{"hid":"msapplication-TileColor","name":"msapplication-TileColor","content":"#00a300"},{"hid":"theme-color","name":"theme-color","content":"#ffffff"}],"link":[{"hid":"apple-touch-icon","rel":"apple-touch-icon","sizes":"180x180","href":"\u002F_static\u002Fupfordomain\u002Fapple-icon-180x180.png"},{"hid":"android-chrome-192x192","rel":"icon","type":"image\u002Fpng","sizes":"192x192","href":"\u002F_static\u002Fupfordomain\u002Fandroid-icon-192x192.png"},{"hid":"favicon-16x16","rel":"icon","type":"image\u002Fpng","sizes":"16x16","href":"\u002F_static\u002Fupfordomain\u002Ffavicon-16x16.png"},{"hid":"favicon-32x32","rel":"icon","type":"image\u002Fpng","sizes":"32x32","href":"\u002F_static\u002Fupfordomain\u002Ffavicon-32x32.png"},{"hid":"favicon-96x96","rel":"icon","type":"image\u002Fpng","sizes":"96x96","href":"\u002F_static\u002Fupfordomain\u002Ffavicon-96x96.png"},{"hid":"manifest","rel":"manifest","href":"\u002F_static\u002Fupfordomain\u002Fmanifest.json"},{"hid":"mask-icon","rel":"mask-icon","href":"\u002F_static\u002Fupfordomain\u002Fsafari-pinned-tab.svg","color":"#39ac37"}],"script":[],"style":[]},

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

  if (typeof nuxt_plugin_axios_7ce5851e === 'function') {
    await nuxt_plugin_axios_7ce5851e(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_5659d192 === 'function') {
    await nuxt_plugin_axios_5659d192(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_ga_34d435b2 === 'function') {
    await nuxt_plugin_ga_34d435b2(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
