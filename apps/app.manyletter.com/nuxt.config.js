
export default {
  srcDir: __dirname,
  buildDir: 'apps/app.manyletter.com/.nuxt/app.manyletter.com',
  generate: {
    dir: 'apps/app.manyletter.com/generate',
  },
  server: {
      port: 8081, // default: 3000 for localhost | for production server default is 8080 // has to be the same as the port that is using in custom.conf
      host: 'localhost' // default: localhost
  },
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  ssr: false,
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
  title: 'Manyletter | All-in-one platform for your newsletter.',
  meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'title', name: "title", content: "Home of your newsletter." },
      { hid: 'description', name: "description", content: "Manyletter | All-in-one platform for your newsletter.." },
      { hid: 'og-type', property: "og:type", content: "website" },
      { hid: 'og-url', property: "og:url", content: "https://manyletter.com/" },
      { hid: 'og-title', property: "og:title", content: "Home of your newsletter." },
      { hid: 'og-description', property: "og:description", content: "Manyletter | All-in-one platform for your newsletter.." },
      { hid: 'og-image', property: "og:image", content: "https://manyletter.com/_static/manyletter/cover-twitter.png" },
      { hid: 'og-image:type', property: 'og:image:type', content: 'image/png' },
      { hid: 'og-image:width', property: 'og:image:width', content: '1200' },
      { hid: 'og-image:height', property: 'og:image:height', content: '628' },
      { hid: 'twitter-card', property: "twitter:card", content: "summary_large_image" },
      { hid: 'twitter-url', property: "twitter:url", content: "https://manyletter.com/" },
      { hid: 'twitter-title', property: "twitter:title", content: "Home of your newsletter." },
      { hid: 'twitter-description', property: "twitter:description", content: "Manyletter - Home of your newsletter." },
      { hid: 'twitter-image', property: "twitter:image", content: "https://manyletter.com/_static/manyletter/cover-twitter.png" },

      { hid: 'apple-mobile-web-app-title', name: "apple-mobile-web-app-title", content: "ManyLetter" },
      { hid: 'application-name', name: "application-name", content: "ManyLetter" },
      { hid: 'msapplication-TileColor', name: "msapplication-TileColor", content: "#00a300" },
      { hid: 'theme-color', name: "theme-color", content: "#ffffff" }
    ],
    link: [
      { hid: 'apple-touch-icon', rel: "apple-touch-icon", sizes: "180x180", href: "/_static/manyletter/apple-icon-180x180.png" },
      { hid: 'android-chrome-192x192', rel: 'icon', type: 'image/png', sizes: '192x192', href: '/_static/manyletter/android-icon-192x192.png' },
      { hid: 'favicon-16x16', rel: "icon", type: "image/png", sizes: "16x16", href: "/_static/manyletter/favicon-16x16.png" },
      { hid: 'favicon-32x32', rel: "icon", type: "image/png", sizes: "32x32", href: "/_static/manyletter/favicon-32x32.png" },
      { hid: 'favicon-96x96', rel: "icon", type: "image/png", sizes: "96x96", href: "/_static/manyletter/favicon-96x96.png" },
      { hid: 'manifest', rel: "manifest", href: "/_static/manyletter/manifest.json" },
      { hid: 'mask-icon', rel: "mask-icon", href: "/_static/manyletter/safari-pinned-tab.svg", color: "#39ac37" },
      { hid: 'ionicons', rel: "stylesheet", href: "https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" }
    ],
    script: [
        // { src: 'https://unpkg.com/ionicons@5.0.0/dist/ionicons.js' }
    ],

    // <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    // <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    // <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    // <link rel="manifest" href="/site.webmanifest">
    // <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#999999">
    // <meta name="msapplication-TileColor" content="#000000">
    // <meta name="theme-color" content="#ffffff"></meta>
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
  loading: { color: '#999', height: '2px', width: '100%' },
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
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
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
