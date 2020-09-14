
export default {
  srcDir: __dirname,
  buildDir: 'apps/manyletter.com/.nuxt/manyletter.com',
  generate: {
    dir: 'apps/manyletter.com/generate',
  },
  server: {
      port: 8080, // default: 3000 for localhost | for production server default is 8080 // has to be the same as the port that is using in custom.conf
      host: 'localhost' // default: localhost
  },
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'ManyLetter - Get email newsletters under your control',
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
        { hid: 'title', name: "title", content: "ManyLetter - Get email newsletters under your control" },
        { hid: 'description', name: "description", content: "ManyLetter makes it easy to find and join any newsletter, as well as to create one and share it." },
        { hid: 'og-type', property: "og:type", content: "website" },
        { hid: 'og-url', property: "og:url", content: "https://manyletter.com/" },
        { hid: 'og-title', property: "og:title", content: "ManyLetter - Get email newsletters under your control" },
        { hid: 'og-description', property: "og:description", content: "ManyLetter makes it easy to find and join any newsletter, as well as to create one and share it." },
        { hid: 'og-image', property: "og:image", content: "https://manyletter.com/_static/cover-1200.png" },
        { hid: 'og-image:type', property: 'og:image:type', content: 'image/png' },
        { hid: 'og-image:width', property: 'og:image:width', content: '1200' },
        { hid: 'og-image:height', property: 'og:image:height', content: '628' },
        { hid: 'twitter-card', property: "twitter:card", content: "summary_large_image" },
        { hid: 'twitter-url', property: "twitter:url", content: "https://manyletter.com/" },
        { hid: 'twitter-title', property: "twitter:title", content: "ManyLetter - Get email newsletters under your control" },
        { hid: 'twitter-description', property: "twitter:description", content: "ManyLetter makes it easy to find and join any newsletter, as well as to create one, and share it." },
        { hid: 'twitter-image', property: "twitter:image", content: "https://manyletter.com/_static/cover-1200.png" },

        { hid: 'apple-mobile-web-app-title', name: "apple-mobile-web-app-title", content: "ManyLetter" },
        { hid: 'application-name', name: "application-name", content: "ManyLetter" },
        { hid: 'msapplication-TileColor', name: "msapplication-TileColor", content: "#00a300" },
        { hid: 'theme-color', name: "theme-color", content: "#ffffff" }
    ],
    link: [
        { hid: 'apple-touch-icon', rel: "apple-touch-icon", sizes: "180x180", href: "/_static/apple-touch-icon.png" },
        { hid: 'android-chrome-192x192', rel: 'icon', type: 'image/png', sizes: '192x192', href: '/_static/android-chrome-192x192.png' },
        { hid: 'android-chrome-512x512', rel: 'icon', type: 'image/png', sizes: '512x512', href: '/_static/android-chrome-512x512.png' },
        { hid: 'favicon-32x32', rel: "icon", type: "image/png", sizes: "32x32", href: "/_static/favicon-32x32.png" },
        { hid: 'favicon-16x16', rel: "icon", type: "image/png", sizes: "16x16", href: "/_static/favicon-16x16.png" },
        { hid: 'manifest', rel: "manifest", href: "/_static/site.webmanifest" },
        { hid: 'mask-icon', rel: "mask-icon", href: "/_static/safari-pinned-tab.svg", color: "#39ac37" }
    ],
    script: [
        // { src: 'https://unpkg.com/ionicons@5.0.0/dist/ionicons.js' }
    ],
  },
  /*
  ** Global CSS
  */
  css: [
    "~assets/css/global.css",
    "~assets/css/_system/flex.css",
    "~assets/css/_system/grid.css",
    "~assets/css/_system/webbase.css",
    "~assets/css/_system/animations.css",
  ],

  pageTransition: {
    name: 'layout',
    mode: 'out-in'
  },
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
 plugins: [
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/ga.js', ssr: false, defer: true },
    { src: '~/plugins/vue2-touch-events.js', ssr: false, defer: true },
    { src: '~/plugins/fullstory.js', ssr: false, defer: true }
    // { src: '~/plugins/drift.js', ssr: false, defer: true },
    // { src: '~plugins/ga.js', ssr: false }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: false,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
 modules: [
    // '@nuxtjs/apollo'
    '@nuxtjs/axios',
    // '@nuxtjs/proxy',
    'cookie-universal-nuxt',
    'vue-scrollto/nuxt',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
